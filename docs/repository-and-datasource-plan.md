# Build guide: put the club state layer behind a datasource contract

*You are writing the code. This is the spec and the order to build it in.*

## Context

The demo's data layer is three files in `lib/state/`:

- `club_state.dart` — one immutable `ClubState` holding every entity *and* every
  derived read (`balanceFor`, `unfilledSlots`, `familiesByHoursOutstanding`)
- `club_store.dart` — a `Notifier<ClubState>` whose writes rebuild the object in memory
- `seed_data.dart` — `buildSeedState()`, the FWISC fixture as Dart constructors

It works and the 9 ledger tests pass, but it assumes the whole club is already in
memory and that writes are instantaneous, so there is no seam a backend can attach
to. You're going back to set up Supabase, and you want the datasource interface to
be the thing that defines what that backend must provide.

**Target outcome:** the app still runs entirely on fake data, but that data arrives
through exactly the code path the real data will use — same async shape, same JSON
decode, same method signatures, same key names. When the tables exist, the only new
code is the body of `RemoteClubDataSource`.

### The one correction to the original idea

`ClubState`'s rich API can't move behind the datasource. `balanceFor`,
`unfilledSlots`, `familiesByHoursOutstanding` and `clubHoursOwed` all need the
whole dataset at once — they're derived reads over a cached snapshot, not fetches.
What goes behind the datasource is small: **one read and seven writes.** The math
stays client-side, sitting on top of whatever the datasource returned.

### Decisions already made

| | |
|---|---|
| Layer granularity | **One `ClubDataSource` interface, no repository on top.** Amended 2026-08-07 — see Step 6 |
| Seed format | JSON asset, decoded through the same `fromJson` the remote will use |
| JSON keys | **snake_case** — what postgrest returns verbatim |
| Session (`role`, `currentPersonId`) | Split out of the club payload; it comes from auth |
| Loading / error UI | Handled once in `DashboardShell`; screens stay synchronous |
| Supabase | Remote datasource stubbed with `UnimplementedError`; no dependency yet |
| `Event.startDate` | Dropped — redundant with `startTime` |

---

## Target layout

```
assets/seed/club.json                    ← the fixture, as JSON

lib/data/
  club_data.dart                         ← fields + fromJson/toJson + copyWith
  datasources/
    club_data_source.dart                ← abstract — THE BACKEND CONTRACT + provider
    local_club_data_source.dart          ← loads club.json, mutates in memory
    remote_club_data_source.dart         ← every method throws UnimplementedError

lib/state/
  club_queries.dart                      ← extension ClubQueries on ClubData
  club_store.dart                        ← AsyncNotifier<ClubData> + selectors
  session.dart                           ← Session + notifier
```

Deleted at the end: `lib/state/club_state.dart`, `lib/state/seed_data.dart`.

`ClubData` holds fields and serialization **only**, so the file reads as a schema
sketch for your Supabase tables. The derived math goes in an extension, which is
why every existing call site (`club.balanceFor(id)`, `club.unfilledSlots`) keeps
working with no edit.

---

## Step 1 — `lib/data/datasources/club_data_source.dart`

Write this first and be happy with it before anything else. It is the deliverable;
everything downstream is implementation.

An abstract class with eight members:

| Method | Returns | Notes |
|---|---|---|
| `fetchClub(String clubId)` | `Future<ClubData>` | the one read |
| `createEvent({name, body, startTime, endTime, location, slots})` | `Future<Event>` | `slots` is `List<({String label, String timeRange, double hours})>` |
| `claimSlot({slotId, eventId, personId})` | `Future<Signup>` | |
| `releaseSlot(String signupId)` | `Future<void>` | |
| `submitHours(String signupId)` | `Future<Signup>` | |
| `approveSignup(String signupId, {double? hours})` | `Future<Signup>` | |
| `setHoursOwed(String familyId, String season, double hours)` | `Future<SeasonMembership>` | |
| `setDuesPaid(String familyId, String season, bool paid)` | `Future<SeasonMembership>` | |

Two consequences worth understanding before you write it:

- **Writes return the created/updated entity.** The client stops minting ids —
  `ClubStore._nextId` moves into `LocalClubDataSource`, and Postgres generates them
  on the remote side. The store folds the returned entity into its cache.
- **`claimSlot` takes an explicit `personId`.** Today it defaults to
  `state.currentPersonId` (`club_store.dart:139`). The datasource has no session,
  so the caller supplies it.

## Step 2 — JSON on the models, `lib/models/`

Hand-written `fromJson` / `toJson` (no codegen — matches the project's style) on:
`family.dart`, `person.dart`, `season_membership.dart`, `signup.dart`,
`volunteer_slot.dart`, `event.dart`.

Conventions:

- **snake_case keys**: `family_id`, `is_skater`, `time_range`, `hours_owed`,
  `dues_paid`, `approved_hours`, `slot_id`, `person_id`, `event_id`,
  `volunteer_slots`, `start_time`, `end_time`
- `SignupState` ↔ its `.name` string
- `DateTime` ↔ ISO-8601 (`toIso8601String()` / `DateTime.parse`)
- Fields with Dart defaults (`eligible`, `isSkater`, `duesPaid`, `who`) should
  tolerate a missing key and fall back to that same default
- **No JSON** on `hours_balance.dart` (computed) or `user_role.dart` (session)

### `event.dart` needs real surgery

- **Remove `tint`.** It's a Flutter `Color`; no backend will send one and
  serializing it means inventing an encoding for decoration. Drop the field *and*
  the `package:flutter/material.dart` import — this model should have no Flutter
  dependency once Supabase populates it.
- **Remove `startDate`.** `whenLong` and `whenShort` read the weekday/month/day off
  `startTime` instead.

Then add an event-tint helper next to the palette in
`lib/core/rinkconnect_theme.dart` — takes an event id, returns a `Color` picked
deterministically from `iceBlue` / `edgeBlue` / `rinkLight`. Use a stable
derivation (sum of `codeUnits`, say) rather than `String.hashCode`, so an event
doesn't change colour between runs.

Three call sites to repoint: `event_screen.dart:52`, `events_list_screen.dart:73`
and `:74`.

## Step 3 — `lib/data/club_data.dart`

`ClubState` minus session, plus serialization. Fields:

```
clubName · season · feeRatePerHour
families · people · memberships · events · signups
```

Plus `fromJson`, `toJson`, and a `copyWith` covering `events` / `signups` /
`memberships` — the three lists the writes touch.

Nothing else. No getters, no math. Keep it readable as a schema.

## Step 4 — `assets/seed/club.json`

Translate `buildSeedState()` (`seed_data.dart:29-258`) literally: 5 families,
9 people, 5 memberships, 3 events with 9 slots, 4 signups.

**Keep every id exactly as it is** — `f-cheung`, `p-emily`, `p-brendon`, `s-fs-1`,
`su-1`, … — `test/hours_ledger_test.dart` asserts against `'f-cheung'` directly, and
the demo walkthrough depends on the Cheungs starting at 4 of 20 hours.

Drop `tint` and `start_date` from the event objects. Register the asset in
`pubspec.yaml` under `flutter: assets:`.

The four constants in `seed_data.dart` — `kSeason`, `kFeeRatePerHour`,
`kCoordinatorId`, `kDemoParentId` — are still referenced by the tests and by
`setRole`. `kCoordinatorId` and `kDemoParentId` are demo-*session* concerns, so
they're most at home next to the session notifier; the other two can live with the
local datasource. Either way they need to survive the deletion of `seed_data.dart`.

## Step 5 — the two datasources

**`LocalClubDataSource`** — `rootBundle.loadString('assets/seed/club.json')` →
`jsonDecode` → `ClubData.fromJson`. Cache that in a field, mutate the cached copy on
writes, return the new entity. Owns the `_nextId` counter that `ClubStore` used to
have (`club_store.dart:17-19`).

**`RemoteClubDataSource`** — all eight methods present, every body
`throw UnimplementedError('Supabase: awaiting schema')`. No `supabase_flutter`
dependency, no config. It exists so the interface is proven to have two
implementations and so filling it in later is mechanical.

## Step 6 — ~~`lib/data/club_repository.dart`~~ **removed 2026-08-07**

There is no repository layer. `ClubStore` talks to `ClubDataSource` directly.

The original step called for a thin pass-through, justified as "the override point
for tests" — but Step 11 overrides `clubDataSourceProvider`, not the repository, so
that justification never held. Caching already lives in `ClubStore`, and offline
fallback and auth-gated source switching don't exist. In Andrea's layering the
repository's real job is converting untyped DTOs into models; `ClubDataSource`
already returns a typed `ClubData`, so it *is* the repository under another name.

**All that survives from this step is one provider.** `clubDataSourceProvider`
returns `LocalClubDataSource` — the single line you swap when Supabase is live, and
the thing tests override. Declare it in `club_data_source.dart` next to the
interface.

If a genuine layer is ever needed between store and datasource, adding it means
touching eight call sites in one file.

## Step 7 — `lib/state/club_queries.dart`

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

## Step 8 — `lib/state/session.dart`

A `Session` class (`currentPersonId`, `role`) and a `Notifier<Session>` with
`setRole` and `setCurrentPerson`, seeded to `(kCoordinatorId, coordinator)` so
first load looks like it does today. `setRole` keeps the existing
coordinator↔parent person swap from `club_store.dart:29-36`.

This is where `supabase.auth.currentUser` plugs in later. Nothing here touches the
datasource — the role toggle stays a pure client concern instead of round-tripping a
fake club update the way it does now.

## Step 9 — `lib/state/club_store.dart`

`ClubStore extends AsyncNotifier<ClubData>`; `build()` awaits
`clubDataSourceProvider.fetchClub(...)`.

Each write awaits the datasource, then folds the returned entity into `state.value`
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

## Step 10 — screens

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
  `TimeOfDayValue` typedef (`club_store.dart:165`) goes away.
- `event_screen.dart:132` (claim — now passes `personId` explicitly), `:140`
  (submit), `:154` (release)
- `review_screen.dart:144` and `:205` (approve)

## Step 11 — `test/hours_ledger_test.dart`

All 9 assertions stay; only plumbing changes.

- `setUp` must await the first load — `await container.read(clubStoreProvider.future)`
  — which makes the test bodies `async`
- `container.read(clubStoreProvider)` → `container.read(clubProvider)`
- `store().setRole(UserRole.parent)` → the session notifier
- store writes get awaited

Override `clubDataSourceProvider` with a datasource built from an inline JSON map
rather than the asset bundle: `rootBundle` needs
`TestWidgetsFlutterBinding.ensureInitialized()`, and a direct fixture keeps unit
tests free of asset loading. The override point exists for exactly this.

## Step 12 — cleanup

Delete `lib/state/club_state.dart` and `lib/state/seed_data.dart`. Update
`docs/mvp-build-progress.md` — its "State — `lib/state/`" section (lines 65-69)
describes the layout you just replaced.

---

## Verification

Run between steps, not just at the end — steps 2-4 will surface most of the typos:

```
flutter analyze          # must stay clean
flutter test             # all 9 ledger tests passing
flutter run -d chrome --web-port=8080
```

Then walk the loop from `docs/mvp-build-progress.md:39-48`. It's still unverified in
a browser, and it's the real proof this didn't break anything:

1. Lands as **Emily Wolfe** — club hours card populated, review queue shows 1,
   "Who still owes hours" populated → *proves `club.json` decoded correctly*
2. **New event** → two slots → Post → *proves the write path, and that the
   datasource minted the ids*
3. Toggle → **Parent** (Brendon Cheung) → *proves the session split: the header
   changes with no club refetch*
4. Open the new event → **Take slot** → balance must **not** move
5. **Log hours** → balance still must not move; reads "Awaiting review"
6. Toggle → **Coordinator** → Review → **Approve**
7. Toggle → **Parent** → balance moved, projected fee dropped

**Then prove the seam is real:** point `clubDataSourceProvider` at
`RemoteClubDataSource` and reload. The app should render the shell's *error* state,
not crash. If it crashes, the loading gate isn't doing its job.
