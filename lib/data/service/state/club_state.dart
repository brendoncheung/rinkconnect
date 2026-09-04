import 'package:rinkconnect/models/event.dart';
import 'package:rinkconnect/models/family.dart';
import 'package:rinkconnect/models/hours_balance.dart';
import 'package:rinkconnect/models/person.dart';
import 'package:rinkconnect/models/season_membership.dart';
import 'package:rinkconnect/models/signup.dart';
import 'package:rinkconnect/models/signup_state.dart';
import 'package:rinkconnect/models/user_role.dart';
import 'package:rinkconnect/models/volunteer_slot.dart';

/// The whole club, in memory.
///
/// This is a demo store — no persistence, no backend. State resets on reload,
/// which is deliberate: it gives a clean run every time the app is shown.
class ClubState {
  final String clubName;
  final String season;

  final List<Family> families;
  final List<Person> people;
  final List<SeasonMembership> memberships;
  final List<Event> events;
  final List<Signup> signups;

  /// Who is "signed in". Switching this is how the demo changes viewpoint.
  final String currentPersonId;
  final UserRole role;

  /// What the club charges per unworked hour at season end. Computed and
  /// handed to the treasurer; never collected here (ADR 0006).
  final double feeRatePerHour;

  const ClubState({
    required this.clubName,
    required this.season,
    required this.families,
    required this.people,
    required this.memberships,
    required this.events,
    required this.signups,
    required this.currentPersonId,
    required this.role,
    required this.feeRatePerHour,
  });

  ClubState copyWith({
    List<Event>? events,
    List<Signup>? signups,
    List<SeasonMembership>? memberships,
    String? currentPersonId,
    UserRole? role,
  }) {
    return ClubState(
      clubName: clubName,
      season: season,
      families: families,
      people: people,
      memberships: memberships ?? this.memberships,
      events: events ?? this.events,
      signups: signups ?? this.signups,
      currentPersonId: currentPersonId ?? this.currentPersonId,
      role: role ?? this.role,
      feeRatePerHour: feeRatePerHour,
    );
  }

  // ---------------------------------------------------------------- lookups

  Person get currentPerson =>
      people.firstWhere((p) => p.id == currentPersonId);

  Family get currentFamily => familyById(currentPerson.familyId);

  Person personById(String id) => people.firstWhere((p) => p.id == id);

  Family familyById(String id) => families.firstWhere((f) => f.id == id);

  Event? eventById(String id) {
    for (final event in events) {
      if (event.id == id) return event;
    }
    return null;
  }

  SeasonMembership? membershipFor(String familyId) {
    for (final m in memberships) {
      if (m.familyId == familyId && m.season == season) return m;
    }
    return null;
  }

  /// Everyone in a household who may work a slot.
  List<Person> eligibleMembersOf(String familyId) =>
      people.where((p) => p.familyId == familyId && p.eligible).toList();

  // ---------------------------------------------------------------- signups

  /// The signup occupying a slot, if anyone has claimed it.
  Signup? signupForSlot(String slotId) {
    for (final s in signups) {
      if (s.slotId == slotId) return s;
    }
    return null;
  }

  bool slotIsTaken(String slotId) => signupForSlot(slotId) != null;

  // Looking for family who signed up in a list of Signup object
  List<Signup> signupsForFamily(String familyId) => signups
      .where((s) => personById(s.personId).familyId == familyId)
      .toList();

  List<Signup> signupsForPerson(String personId) =>
      signups.where((s) => s.personId == personId).toList();

  /// Everything the coordinator has to confirm before it becomes credit.
  List<Signup> get awaitingReview =>
      signups.where((s) => s.state == SignupState.submitted).toList();

  /// Slots on upcoming events that nobody has claimed — the coordinator's
  /// most valuable screen.
  List<({Event event, VolunteerSlot slot})> get unfilledSlots {
    final result = <({Event event, VolunteerSlot slot})>[];
    for (final event in events) {
      for (final slot in event.volunteerSlots) {
        if (!slotIsTaken(slot.id)) {
          result.add((event: event, slot: slot));
        }
      }
    }
    return result;
  }

  VolunteerSlot? slotById(String slotId) {
    for (final event in events) {
      for (final slot in event.volunteerSlots) {
        if (slot.id == slotId) return slot;
      }
    }
    return null;
  }

  // ---------------------------------------------------------------- balances

  /// A family's hours position for the current season.
  ///
  /// **Only approved signups contribute to `approved`.** Pledged and submitted
  /// hours are reported as `pending` so work in flight is visible without
  /// counting as credit — the distinction the fee calculation rests on.
  HoursBalance balanceFor(String familyId) {
    final membership = membershipFor(familyId);
    if (membership == null) return HoursBalance.zero;

    var approved = 0.0;
    var pending = 0.0;

    for (final signup in signupsForFamily(familyId)) {
      final slotHours = slotById(signup.slotId)?.hours ?? 0;
      if (signup.state == SignupState.approved) {
        approved += signup.approvedHours ?? slotHours;
      } else {
        pending += slotHours;
      }
    }

    return HoursBalance(
      owed: membership.hoursOwed,
      approved: approved,
      pending: pending,
    );
  }

  /// Every registered family with its balance, worst first — the
  /// coordinator's "who still owes" list.
  List<({Family family, HoursBalance balance})> get familiesByHoursOutstanding {
    final rows = <({Family family, HoursBalance balance})>[];
    for (final family in families) {
      if (membershipFor(family.id) == null) continue;
      rows.add((family: family, balance: balanceFor(family.id)));
    }
    rows.sort((a, b) => b.balance.remaining.compareTo(a.balance.remaining));
    return rows;
  }

  double get clubHoursOwed => familiesByHoursOutstanding.fold(
    0.0,
    (sum, row) => sum + row.balance.owed,
  );

  double get clubHoursApproved => familiesByHoursOutstanding.fold(
    0.0,
    (sum, row) => sum + row.balance.approved,
  );
}
