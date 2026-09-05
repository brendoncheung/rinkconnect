# Build guide: put the club state layer behind a repository

*You are writing the code. This is the spec and the order to build it in.*

> **Rewritten 2026-09-05.** The original version of this doc specified a single
> `ClubDataSource` interface with a JSON-asset fixture behind it, and explicitly
> argued *against* a repository layer. None of its twelve steps were built, and
> the direction has since changed on three counts: the seam is a **repository per
> aggregate**, test data comes from **local Supabase** rather than a JSON asset,
> and the models being wired up are the ones in `lib/models/new_models/`. The
> `datasource.dart` / `local_datasource.dart` stubs that doc described were
> deleted; don't reintroduce them. What survives from the original is kept below
> and marked — the reasoning still holds, only the shape changed.

## Context

The demo's data layer is three files in `lib/data/service/state/`:

- `club_state.dart` — one immutable `ClubState` holding every entity *and* every
  derived read (`balanceFor`, `unfilledSlots`, `familiesByHoursOutstanding`)
- `club_store.dart` — a `Notifier<ClubState>` whose writes rebuild the object in memory
- `seed_data.dart` — `buildSeedState()`, the FWISC fixture as Dart constructors

It works and the ledger tests pass, but it assumes the whole club is already in
memory and that writes are instantaneous, so there is no seam a backend can attach
to.

**Target outcome:** the app runs against **local Supabase** (`supabase start`),
through exactly the code path the hosted backend will use — same async shape, same
decode, same method signatures, same column names. Going to production becomes a
config change, not new code.

### The one correction that still stands

`ClubState`'s rich API can't move behind the seam. `balanceFor`, `unfilledSlots`,
`familiesByHoursOutstanding` and `clubHoursOwed` all need the whole dataset at
once — they're derived reads over a cached snapshot, not fetches. What goes behind
the repository is small: **one read and seven writes.** The math stays client-side,
sitting on top of whatever the repository returned.

This was the sharpest point in the original doc and it survives the redesign
unchanged.

### Decisions already made

| | |
|---|---|
| Layer granularity | **A repository per aggregate**, under `lib/data/repository/` — `auth/` and `club/` exist as empty directories |
| Models | `lib/models/new_models/` — the parallel set aimed at the Supabase schema. `lib/models/` is what runs today |
| Fixture data | **Local Supabase**, seeded by a migration. No JSON asset, no in-memory seed |
| Session (`role`, `currentPersonId`) | Split out of the club payload; it comes from auth |
| Loading / error UI | Handled once in `DashboardShell`; screens stay synchronous |
| Writes return the entity | The client stops minting ids; Postgres generates them |

### Decisions still open — settle these before Step 1

The original doc fixed these, but its answers were tied to the JSON-asset design
and no longer follow:

- **Serialization convention.** The original called for snake_case keys and
  ISO-8601 dates, matching what postgrest returns verbatim. The `new_models`
  classes as written use camelCase `toMap`/`fromMap` with
  `millisecondsSinceEpoch`. These disagree, and the disagreement is load-bearing —
  postgrest hands back snake_case and ISO-8601 whether the models want it or not.
  Decide whether the models change or a mapping layer absorbs it.
- **Where the aggregate boundary falls.** `auth/` and `club/` are two directories,
  but "one read" above implies the club repository returns the entire club in one
  call. Confirm that's still the intent rather than a repository per entity.
- **Which model set the repositories return.** `new_models` is unwired and
  incomplete — its `Event` has no deadline field, which
  [ADR 0010](adr/0010-event-deadline-replaces-who.md) requires, and slots live in a
  separate `event_slot.dart`. Either finish those models first or have the
  repositories return `lib/models/` for now.

---

## Target layout

```
supabase/migrations/                     ← the schema, then the seed

lib/data/repository/
  auth/                                  ← session + PIN/invite-code login (ADR 0012)
  club/                                  ← THE BACKEND CONTRACT + provider

lib/data/service/state/
  club_queries.dart                      ← extension ClubQueries on ClubData
  club_store.dart                        ← AsyncNotifier<ClubData> + selectors
  session.dart                           ← Session + notifier
```

Deleted at the end: `club_state.dart`, `seed_data.dart`.

`ClubData` holds fields and serialization **only**, so the file reads as a schema
sketch alongside the migration. The derived math goes in an extension, which is
why every existing call site (`club.balanceFor(id)`, `club.unfilledSlots`) keeps
working with no edit.

---

## Step 0 — the schema

There are no Supabase migrations yet; the schema doesn't exist. Write it first —
everything below is shaped by it, and the original doc's biggest weakness was
specifying a serialization contract with no tables to check it against.

Tables follow the glossary: club, family, person, season membership, event,
volunteer slot, signup. Two domain rules that must show up in the schema rather
than only in Dart:

- `hours_owed` is a column on the **season membership**, per family. Never a
  club-wide constant, never computed
  ([ADR 0002](adr/0002-volunteer-hours-obligation-model.md)).
- Signup state is an enum, and `approved` is the only state that moves a balance
  ([ADR 0003](adr/0003-hours-ledger-is-a-financial-record.md)). Corrections are
  additive rows, never updates in place.

Then a seed migration carrying the FWISC fixture — 5 families, 9 people, 5
memberships, 3 events with 9 slots, 4 signups. **Keep every id exactly as it is**
(`f-cheung`, `p-emily`, `p-brendon`, `s-fs-1`, `su-1`, …): `test/hours_ledger_test.dart`
asserts against `'f-cheung'` directly, and the demo walkthrough depends on the
Cheungs starting at 4 of 20 hours.

## Step 1 — the club repository interface

Write this and be happy with it before anything else. It is the deliverable;
everything downstream is implementation.

An abstract class with eight members:

| Method | Returns | Notes |
|---|---|---|
| `fetchClub(String clubId)` | `Future<ClubData>` | the one read |
| `createEvent({name, body, startTime, endTime, location, deadline, slots})` | `Future<Event>` | `slots` is `List<({String label, String timeRange, double hours})>` |
| `claimSlot({slotId, eventId, personId})` | `Future<Signup>` | |
| `releaseSlot(String signupId)` | `Future<void>` | |
| `submitHours(String signupId)` | `Future<Signup>` | |
| `approveSignup(String signupId, {double? hours})` | `Future<Signup>` | |
| `setHoursOwed(String familyId, String season, double hours)` | `Future<SeasonMembership>` | |
| `setDuesPaid(String familyId, String season, bool paid)` | `Future<SeasonMembership>` | |

Three consequences worth understanding before you write it:

- **Writes return the created/updated entity.** The client stops minting ids —
  `ClubStore._nextId` (`club_store.dart:17-19`) goes away, and Postgres generates
  them. The store folds the returned entity into its cache.
- **`claimSlot` takes an explicit `personId`.** Today it defaults to
  `state.currentPersonId` (`club_store.dart:139`). The repository has no session,
  so the caller supplies it.
- **`createEvent` takes a `deadline`, not a `who`.** Per
  [ADR 0010](adr/0010-event-deadline-replaces-who.md) the audience label is gone and
  the registration deadline replaces it. `lib/models/event.dart` still carries `who`
  and `startDate`; both come out as part of this work — `whenLong` and `whenShort`
  read the weekday/month/day off `startTime` instead.

Declare `clubRepositoryProvider` next to the interface. It is the single line you
swap between local and hosted Supabase, and the thing tests override.

## Step 2 — models and serialization

Hand-written `fromJson` / `toJson` (no codegen — matches the project's style),
against the columns Step 0 actually created. Settle the convention question from
"Decisions still open" first; the whole step depends on the answer.

Fields with Dart defaults should tolerate a missing key and fall back to that same
default. **No JSON** on `hours_balance.dart` (computed) or `user_role.dart`
(session).

## Step 3 — `ClubData`

`ClubState` minus session, plus serialization. Fields:

```
clubName · season · feeRatePerHour
families · people · memberships · events · signups
```

Plus `fromJson`, `toJson`, and a `copyWith` covering `events` / `signups` /
`memberships` — the three lists the writes touch.

Nothing else. No getters, no math. Keep it readable as a schema.

## Step 4 — the Supabase implementation

One implementation against the local stack. There is no second stubbed
implementation this time: the original doc's `RemoteClubDataSource` existed only to
prove the interface could have two implementors, and it was deleted without ever
being useful. Local and hosted Supabase differ by config, not by class.

The four constants in `seed_data.dart` — `kSeason`, `kFeeRatePerHour`,
`kCoordinatorId`, `kDemoParentId` — are still referenced by the tests and by
`setRole`. `kCoordinatorId` and `kDemoParentId` are demo-*session* concerns, so
they're most at home next to the session notifier. They need to survive the
deletion of `seed_data.dart`.

## Step 5 — `club_queries.dart`

`extension ClubQueries on ClubData` holding everything currently in
`club_state.dart:67-192`, moved verbatim except:

- `currentPerson` and `currentFamily` **don't come** — they need session
- everything else (`personById`, `familyById`, `eventById`, `membershipFor`,
  `eligibleMembersOf`, `signupForSlot`, `slotIsTaken`, `signupsForFamily`,
  `signupsForPerson`, `awaitingReview`, `unfilledSlots`, `slotById`, `balanceFor`,
  `familiesByHoursOutstanding`, `clubHoursOwed`, `clubHoursApproved`) transfers
  unchanged

Because it's an extension, `club.balanceFor(id)` still reads identically at every
call site. That's the whole reason for the split.

## Step 6 — `session.dart`

A `Session` class (`currentPersonId`, `role`) and a `Notifier<Session>` with
`setRole` and `setCurrentPerson`, seeded to `(kCoordinatorId, coordinator)` so
first load looks like it does today. `setRole` keeps the existing
coordinator↔parent person swap from `club_store.dart:29-36`.

This is where Supabase auth plugs in later — including the skater role, which
authenticates by PIN or invite code rather than email
([ADR 0012](adr/0012-skater-login-uses-a-pin-not-email.md)) and is read-only.
Nothing here touches the repository — the role toggle stays a pure client concern
instead of round-tripping a fake club update the way it does now.

## Step 7 — `club_store.dart`

`ClubStore extends AsyncNotifier<ClubData>`; `build()` awaits
`clubRepositoryProvider.fetchClub(...)`.

Each write awaits the repository, then folds the returned entity into `state.value`
— the same `copyWith`-with-list-comprehension pattern the current methods already
use. `approveSignup` (`club_store.dart:82-95`) is the model to follow. **Don't
refetch the whole club after a write**; the returned entity is enough and keeps the
UI responsive.

`setRole` / `setCurrentPerson` leave this file entirely.

Then the gate that keeps screens synchronous — two providers:

- `clubStoreProvider` — the `AsyncNotifierProvider`
- `clubProvider` — a plain `Provider<ClubData>` reading `.requireValue` off it,
  safe because `DashboardShell` gates on the async state before any screen builds

All nine existing selectors keep their names and types (`currentPersonProvider`,
`currentFamilyProvider`, `currentRoleProvider`, `currentBalanceProvider`,
`eventsProvider`, `awaitingReviewProvider`, `unfilledSlotsProvider`,
`familiesByHoursProvider`, `mySignupsProvider`) — they just read `clubProvider`
and, where relevant, the session provider. `currentPersonProvider` and
`currentFamilyProvider` now compose both.

## Step 8 — screens

**`dashboard_shell.dart`** is the only one that changes shape: wrap the body in
`ref.watch(clubStoreProvider).when(loading:, error:, data:)`, read `role` from
`currentRoleProvider` and the name from `currentPersonProvider`, and send the
toggle to the session notifier instead of `clubStoreProvider.notifier` (line 38).

**The other four** swap `ref.watch(clubStoreProvider)` → `ref.watch(clubProvider)`
and pull session through the existing selectors:

| Was | Now | Sites |
|---|---|---|
| `club.role` | `ref.watch(currentRoleProvider)` | `dashboard_screen.dart:24`, `events_list_screen.dart:20`, `event_screen.dart:43` |
| `club.currentPerson` | `currentPersonProvider` | `dashboard_screen.dart:92`, `event_screen.dart:42` |
| `club.currentFamily` | `currentFamilyProvider` | `dashboard_screen.dart:102` |

Everything else — `club.events`, `club.balanceFor`, `club.slotById`,
`club.eventById`, `club.personById`, `club.familyById`, `club.slotIsTaken`,
`club.signupForSlot`, `club.familiesByHoursOutstanding`, `club.awaitingReview`,
`club.clubHoursApproved`, `club.clubHoursOwed`, `club.signups`, `club.season`,
`club.clubName`, `club.feeRatePerHour` — is **unchanged**.

**Write call sites become `await`:**

- `create_event_screen.dart:51-73` — `_save` becomes async; it already has the
  `mounted` check on line 71, and that check now matters, because it's guarding a
  real gap. Also builds `startTime`/`endTime` from `_date` + `_start` / `_end`
  itself now, since `createEvent` no longer takes date-plus-times and the
  `TimeOfDayValue` typedef (`club_store.dart:165`) goes away. The audience field is
  replaced by a deadline picker.
- `event_screen.dart:132` (claim — now passes `personId` explicitly), `:140`
  (submit), `:154` (release)
- `review_screen.dart:144` and `:205` (approve)

## Step 9 — `test/hours_ledger_test.dart`

All assertions stay; only plumbing changes.

- `setUp` must await the first load — `await container.read(clubStoreProvider.future)`
  — which makes the test bodies `async`
- `container.read(clubStoreProvider)` → `container.read(clubProvider)`
- `store().setRole(UserRole.parent)` → the session notifier
- store writes get awaited

Override `clubRepositoryProvider` with a fake built from an inline fixture rather
than hitting the database. The ledger tests guard a pure rule — only `approved`
moves a balance — and shouldn't need `supabase start` to run. Integration tests
against the local stack are a separate, later concern.

## Step 10 — cleanup

Delete `club_state.dart` and `seed_data.dart`. Update
`docs/mvp-build-progress.md` — its "State" section (lines 65-69) describes the
layout you just replaced, and still says `lib/state/`.

---

## Verification

Run between steps, not just at the end — steps 2-3 will surface most of the typos:

```
supabase start           # the stack must be up; :54321, studio on :54323
flutter analyze          # must stay clean
flutter test             # ledger tests passing
flutter run -d chrome --web-port=8080
```

Then walk the loop from `docs/mvp-build-progress.md:39-48`. It's still unverified in
a browser, and it's the real proof this didn't break anything:

1. Lands as **Emily Wolfe** — club hours card populated, review queue shows 1,
   "Who still owes hours" populated → *proves the club decoded correctly*
2. **New event** → two slots → Post → *proves the write path, and that Postgres
   minted the ids*
3. Toggle → **Parent** (Brendon Cheung) → *proves the session split: the header
   changes with no club refetch*
4. Open the new event → **Take slot** → balance must **not** move
5. **Log hours** → balance still must not move; reads "Awaiting review"
6. Toggle → **Coordinator** → Review → **Approve**
7. Toggle → **Parent** → balance moved, projected fee dropped

**Then prove the seam is real:** stop the local stack and reload. The app should
render the shell's *error* state, not crash. If it crashes, the loading gate isn't
doing its job.
