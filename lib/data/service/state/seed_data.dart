import 'package:rinkconnect/models/event.dart';
import 'package:rinkconnect/models/family.dart';
import 'package:rinkconnect/models/person.dart';
import 'package:rinkconnect/models/season_membership.dart';
import 'package:rinkconnect/models/signup.dart';
import 'package:rinkconnect/models/signup_state.dart';
import 'package:rinkconnect/models/user_role.dart';
import 'package:rinkconnect/models/volunteer_slot.dart';
import 'package:rinkconnect/data/service/state/club_state.dart';

/// Demo seed for FWISC — enough of a season already underway that the
/// coordinator's screens look real on first load rather than empty.
///
/// Names are drawn from the club's own board agenda so the demo lands with
/// people who recognise them.
const kSeason = '2026-2027';

/// FWISC charges per unworked hour at season end. Research across other clubs
/// found $10–$50/hour; this sits at the low end.
const kFeeRatePerHour = 10.0;

/// The coordinator, per the board agenda's Volunteer Report.
const kCoordinatorId = 'p-emily';

/// The parent viewpoint the demo toggles into.
const kDemoParentId = 'p-brendon';

ClubState buildSeedState() {
  const families = [
    Family(id: 'f-cheung', name: 'The Cheung Family'),
    Family(id: 'f-wolfe', name: 'The Wolfe Family'),
    Family(id: 'f-bearman', name: 'The Bearman Family'),
    Family(id: 'f-bolin', name: 'The Bolin Family'),
    Family(id: 'f-fransen', name: 'The Fransen Family'),
  ];

  const people = [
    // Cheung — the demo's parent viewpoint. Two adults and two skaters, one
    // of whom is below the club's age threshold and so cannot earn hours.
    Person(id: kDemoParentId, familyId: 'f-cheung', name: 'Brendon Cheung'),
    Person(id: 'p-mei', familyId: 'f-cheung', name: 'Mei Cheung'),
    Person(
      id: 'p-sofia',
      familyId: 'f-cheung',
      name: 'Sofia Cheung',
      isSkater: true,
    ),
    Person(
      id: 'p-lily',
      familyId: 'f-cheung',
      name: 'Lily Cheung',
      isSkater: true,
      eligible: false, // below the club's minimum age
    ),

    Person(id: kCoordinatorId, familyId: 'f-wolfe', name: 'Emily Wolfe'),
    Person(
      id: 'p-ava',
      familyId: 'f-wolfe',
      name: 'Ava Wolfe',
      isSkater: true,
    ),

    Person(id: 'p-gabrielle', familyId: 'f-bearman', name: 'Gabrielle Bearman'),
    Person(id: 'p-angela-b', familyId: 'f-bolin', name: 'Angela Bolin'),
    Person(id: 'p-jane', familyId: 'f-fransen', name: 'Jane Fransen'),
  ];

  // Hours owed is set by the coordinator per family — not derived from
  // anything (ADR 0002). The Fransens joined mid-season and owe less.
  const memberships = [
    SeasonMembership(
      id: 'sm-cheung',
      familyId: 'f-cheung',
      season: kSeason,
      hoursOwed: 20,
    ),
    SeasonMembership(
      id: 'sm-wolfe',
      familyId: 'f-wolfe',
      season: kSeason,
      hoursOwed: 20,
    ),
    SeasonMembership(
      id: 'sm-bearman',
      familyId: 'f-bearman',
      season: kSeason,
      hoursOwed: 20,
    ),
    SeasonMembership(
      id: 'sm-bolin',
      familyId: 'f-bolin',
      season: kSeason,
      hoursOwed: 20,
      duesPaid: false,
    ),
    SeasonMembership(
      id: 'sm-fransen',
      familyId: 'f-fransen',
      season: kSeason,
      hoursOwed: 10,
    ),
  ];

  final events = [
    Event(
      id: 'e-fall-showcase',
      name: 'Fall Showcase',
      body:
          'Our first showcase of the season — skaters from every level. We run '
          'the door, the concession stand and the raffle table.',
      startDate: DateTime(2026, 9, 12),
      startTime: DateTime(2026, 9, 12, 16),
      endTime: DateTime(2026, 9, 12, 20),
      location: 'PSM Icehouse',
      who: 'Open to all members',
      badge: 'Volunteers needed',
    ),
    Event(
      id: 'e-learn-to-skate',
      name: 'Learn to Skate open house',
      body:
          'Free session for prospective members. We need helpers on the ice '
          'and at the sign-up table.',
      startDate: DateTime(2026, 9, 26),
      startTime: DateTime(2026, 9, 26, 9),
      endTime: DateTime(2026, 9, 26, 12),
      location: 'PSM Icehouse',
      who: 'Open to all members',
      badge: 'Volunteers needed',
    ),
    Event(
      id: 'e-fundraiser',
      name: 'Season kickoff fundraiser',
      body:
          'Bake sale and silent auction to open the season. Proceeds go to the '
          'competition travel fund.',
      startDate: DateTime(2026, 10, 10),
      startTime: DateTime(2026, 10, 10, 11),
      endTime: DateTime(2026, 10, 10, 15),
      location: 'PSM Icehouse — 2nd floor banquet room',
      who: 'Open to all members',
    ),
  ];

  // Slots reference their event by id rather than nesting inside it.
  const slots = [
    VolunteerSlot(
      id: 's-fs-1',
      eventId: 'e-fall-showcase',
      label: 'Door check-in',
      timeRange: '3:30 – 5:30',
      hours: 2,
    ),
    VolunteerSlot(
      id: 's-fs-2',
      eventId: 'e-fall-showcase',
      label: 'Concession stand',
      timeRange: '4:00 – 6:00',
      hours: 2,
    ),
    VolunteerSlot(
      id: 's-fs-3',
      eventId: 'e-fall-showcase',
      label: 'Raffle table',
      timeRange: '5:00 – 7:00',
      hours: 2,
    ),
    VolunteerSlot(
      id: 's-fs-4',
      eventId: 'e-fall-showcase',
      label: 'Clean-up crew',
      timeRange: '7:30 – 9:00',
      hours: 1.5,
    ),
    VolunteerSlot(
      id: 's-lts-1',
      eventId: 'e-learn-to-skate',
      label: 'Sign-up table',
      timeRange: '8:30 – 10:30',
      hours: 2,
    ),
    VolunteerSlot(
      id: 's-lts-2',
      eventId: 'e-learn-to-skate',
      label: 'On-ice helper',
      timeRange: '9:00 – 11:00',
      hours: 2,
    ),
    VolunteerSlot(
      id: 's-lts-3',
      eventId: 'e-learn-to-skate',
      label: 'Skate rental desk',
      timeRange: '8:45 – 12:00',
      hours: 3,
    ),
    VolunteerSlot(
      id: 's-fr-1',
      eventId: 'e-fundraiser',
      label: 'Bake sale table',
      timeRange: '10:30 – 13:00',
      hours: 2.5,
    ),
    VolunteerSlot(
      id: 's-fr-2',
      eventId: 'e-fundraiser',
      label: 'Silent auction desk',
      timeRange: '12:00 – 15:00',
      hours: 3,
    ),
  ];

  // A season already in motion: some hours approved, one waiting on Emily.
  const signups = [
    // Cheung — 4 hours already credited, so the demo starts mid-progress.
    Signup(
      id: 'su-1',
      slotId: 's-fs-2',
      eventId: 'e-fall-showcase',
      personId: kDemoParentId,
      state: SignupState.approved,
      approvedHours: 2,
    ),
    Signup(
      id: 'su-2',
      slotId: 's-lts-2',
      eventId: 'e-learn-to-skate',
      personId: 'p-sofia',
      state: SignupState.approved,
      approvedHours: 2,
    ),
    // Waiting on the coordinator — visible in the review queue on first load.
    Signup(
      id: 'su-3',
      slotId: 's-fs-1',
      eventId: 'e-fall-showcase',
      personId: 'p-gabrielle',
      state: SignupState.submitted,
    ),
    // Claimed but not yet worked.
    Signup(
      id: 'su-4',
      slotId: 's-fr-1',
      eventId: 'e-fundraiser',
      personId: 'p-jane',
    ),
  ];

  return ClubState(
    clubName: 'Fort Wayne Ice Skating Club',
    season: kSeason,
    families: families,
    people: people,
    memberships: memberships,
    events: events,
    signups: signups,
    slots: slots,
    currentPersonId: kCoordinatorId,
    role: UserRole.coordinator,
    feeRatePerHour: kFeeRatePerHour,
  );
}
