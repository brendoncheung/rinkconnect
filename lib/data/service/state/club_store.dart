import 'package:flutter_riverpod/flutter_riverpod.dart';
import 'package:rinkconnect/models/event.dart';
import 'package:rinkconnect/models/family.dart';
import 'package:rinkconnect/models/hours_balance.dart';
import 'package:rinkconnect/models/person.dart';
import 'package:rinkconnect/models/signup.dart';
import 'package:rinkconnect/models/signup_state.dart';
import 'package:rinkconnect/models/user_role.dart';
import 'package:rinkconnect/models/volunteer_slot.dart';
import 'package:rinkconnect/data/service/state/club_state.dart';
import 'package:rinkconnect/data/service/state/seed_data.dart';

/// In-memory club store for the demo.
///
/// Riverpod 3 — [Notifier], not the legacy `StateNotifier`.
class ClubStore extends Notifier<ClubState> {
  var _nextId = 0;

  String _id(String prefix) => '$prefix-${_nextId++}';

  @override
  ClubState build() => buildSeedState();

  // ------------------------------------------------------------ viewpoint

  /// Switch the demo between the coordinator's view and a parent's.
  ///
  /// Also swaps who is "signed in", since the two roles are different people.
  void setRole(UserRole role) {
    state = state.copyWith(
      role: role,
      currentPersonId: role == UserRole.coordinator
          ? kCoordinatorId
          : kDemoParentId,
    );
  }

  /// Change which household member is acting, within the parent view.
  void setCurrentPerson(String personId) {
    state = state.copyWith(currentPersonId: personId);
  }

  // --------------------------------------------------------- coordinator

  Event createEvent({
    required String name,
    required String body,
    required DateTime date,
    required TimeOfDayValue start,
    required TimeOfDayValue end,
    required String location,
    required List<({String label, String timeRange, double hours})> slots,
  }) {
    final eventId = _id('e');
    final event = Event(
      id: eventId,
      name: name,
      body: body,
      startDate: date,
      startTime: DateTime(date.year, date.month, date.day, start.hour, start.minute),
      endTime: DateTime(date.year, date.month, date.day, end.hour, end.minute),
      location: location,
      badge: slots.isEmpty ? null : 'Volunteers needed',
      volunteerSlots: [
        for (final slot in slots)
          VolunteerSlot(
            id: _id('s'),
            label: slot.label,
            timeRange: slot.timeRange,
            hours: slot.hours,
          ),
      ],
    );
    state = state.copyWith(events: [...state.events, event]);
    return event;
  }

  /// Confirm submitted hours. **This is the only action that creates credit.**
  ///
  /// [hours] defaults to what the slot is worth, but the coordinator can
  /// approve a different number for someone who left early.
  void approveSignup(String signupId, {double? hours}) {
    state = state.copyWith(
      signups: [
        for (final s in state.signups)
          if (s.id == signupId)
            s.copyWith(
              state: SignupState.approved,
              approvedHours: hours ?? state.slotById(s.slotId)?.hours ?? 0,
            )
          else
            s,
      ],
    );
  }

  /// The coordinator sets each family's obligation by hand (ADR 0002).
  void setHoursOwed(String familyId, double hours) {
    state = state.copyWith(
      memberships: [
        for (final m in state.memberships)
          if (m.familyId == familyId && m.season == state.season)
            m.copyWith(hoursOwed: hours)
          else
            m,
      ],
    );
  }

  void setDuesPaid(String familyId, bool paid) {
    state = state.copyWith(
      memberships: [
        for (final m in state.memberships)
          if (m.familyId == familyId && m.season == state.season)
            m.copyWith(duesPaid: paid)
          else
            m,
      ],
    );
  }

  // -------------------------------------------------------------- parent

  /// Claim a slot. Creates a `pledged` signup — **this does not move any
  /// balance**. Nothing counts until the coordinator approves it.
  void claimSlot({
    required String slotId,
    required String eventId,
    String? personId,
  }) {
    if (state.slotIsTaken(slotId)) return;
    state = state.copyWith(
      signups: [
        ...state.signups,
        Signup(
          id: _id('su'),
          slotId: slotId,
          eventId: eventId,
          personId: personId ?? state.currentPersonId,
        ),
      ],
    );
  }

  /// Give up a claimed slot so someone else can take it.
  void releaseSlot(String signupId) {
    state = state.copyWith(
      signups: state.signups.where((s) => s.id != signupId).toList(),
    );
  }

  /// Report having worked a slot. Still not credit — it moves into the
  /// coordinator's review queue.
  void submitHours(String signupId) {
    state = state.copyWith(
      signups: [
        for (final s in state.signups)
          if (s.id == signupId) s.copyWith(state: SignupState.submitted) else s,
      ],
    );
  }
}

/// Minimal hour/minute pair — avoids importing Flutter into the store.
typedef TimeOfDayValue = ({int hour, int minute});

final clubStoreProvider = NotifierProvider<ClubStore, ClubState>(
  ClubStore.new,
);

// ------------------------------------------------------------- selectors

final currentPersonProvider = Provider<Person>(
  (ref) => ref.watch(clubStoreProvider).currentPerson,
);

final currentFamilyProvider = Provider<Family>(
  (ref) => ref.watch(clubStoreProvider).currentFamily,
);

final currentRoleProvider = Provider<UserRole>(
  (ref) => ref.watch(clubStoreProvider).role,
);

/// The signed-in person's family balance — the number the parent view is for.
final currentBalanceProvider = Provider<HoursBalance>((ref) {
  final club = ref.watch(clubStoreProvider);
  return club.balanceFor(club.currentPerson.familyId);
});

final eventsProvider = Provider<List<Event>>(
  (ref) => ref.watch(clubStoreProvider).events,
);

/// Submitted hours waiting on the coordinator.
final awaitingReviewProvider = Provider<List<Signup>>(
  (ref) => ref.watch(clubStoreProvider).awaitingReview,
);

/// Slots nobody has claimed yet, across all events.
final unfilledSlotsProvider =
    Provider<List<({Event event, VolunteerSlot slot})>>(
      (ref) => ref.watch(clubStoreProvider).unfilledSlots,
    );

/// "Who still owes" — worst first.
final familiesByHoursProvider =
    Provider<List<({Family family, HoursBalance balance})>>(
      (ref) => ref.watch(clubStoreProvider).familiesByHoursOutstanding,
    );

/// This person's own signups, newest first.
final mySignupsProvider = Provider<List<Signup>>((ref) {
  final club = ref.watch(clubStoreProvider);
  return club.signupsForFamily(club.currentPerson.familyId).reversed.toList();
});
