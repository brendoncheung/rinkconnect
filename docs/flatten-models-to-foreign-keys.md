# Build guide: flatten the models to foreign keys

*You are writing the code. This is the spec and the order to build it in.*

> **Progress:** Steps 0–7 done — `lib/models/` is fully flattened: every
> relationship is a foreign key, `flutter analyze` is clean and the ledger tests
> pass with only the one helper line changed. What remains is the manual
> walkthrough under "Verification" below. See "Carried forward" for what this
> pass deliberately left to the schema work.

## Context

`lib/models/` is already almost entirely foreign-key based — `Person.familyId`,
`Signup.slotId` / `eventId` / `personId`, `SeasonMembership.familyId` are all plain
id strings. **One field breaks the pattern:** `Event.volunteerSlots`
(`event.dart:19`), a nested `List<VolunteerSlot>`.

That single nesting is why slots have no identity of their own: `VolunteerSlot`
carries no `eventId`, so a slot only knows its event by virtue of being inside it.
Every lookup pays for that — `slotById` (`club_state.dart:134-141`) walks every
event and every slot to find one row.

This flattens it, and retires `lib/models/new_models/` at the same time. The two
sets were competing designs for the same domain; keeping the one the app actually
runs on and making it flat is a smaller job than promoting the other, and the
ledger tests keep passing the whole way.

**Target outcome:** every relationship in `lib/models/` is a foreign key, the model
files read as a table-per-class schema sketch, and no behavior changes.

### What this does not do

- **No signup lifecycle changes.** `SignupState`'s three states and the rule that
  only `approved` moves a balance are untouched. If a step here makes
  `test/hours_ledger_test.dart` fail, the step is wrong, not the test.
- **No new entities.** `Club` and `Coordinator` do not arrive in this pass — see
  "Carried forward" at the end.
- **No `new_models` code is salvaged.** Nothing imports it (verified: zero
  importers), so deleting it is inert.

---

## Step 0 — delete what's dead first

Do this before touching anything, so later steps have fewer call sites.

Two deletions, both directly in the way of this refactor:

- **`lib/screens/events/show_events/widgets/event_details_screen.dart`** is a
  byte-identical copy of `lib/screens/events/details_events/widgets/event_details_screen.dart`.
  Only the `details_events/` copy is routed (`rinkconnect_router.dart:5`). Delete
  the `show_events/` copy. This halves the screen work in Step 6.
- **`lib/models/new_models/`** — the whole folder. This is the competing design
  the refactor settles; nothing imports it (verified: zero importers).

**`lib/models/post.dart` and `lib/models/profile.dart` stay.** An earlier draft of
this spec deleted them too. They are genuinely dead — zero code references, the
only greps are UI copy strings like "Post event" — but that is a reason to delete
them *sometime*, not in a step about event slots, and the refactor works
identically with them in place.

Read `post.dart` before eventually deleting it: the class is `News`, not `Post`,
and its shape (title, body, `publishedAt` where null means draft) is close prior
art for the newsletter entry in
[issue #3](https://github.com/brendoncheung/rinkconnect/issues/3).

`flutter analyze` must be clean after this step alone. If it isn't, something
imported one of these and the zero-importer check was wrong — stop and look.

## Step 1 — give `VolunteerSlot` an `eventId`

`lib/models/volunteer_slot.dart`. Add `final String eventId` and make it a required
constructor parameter. Nothing else on this class changes — `hours`, `hoursLabel`
and the ADR 0005 doc comment all stay as they are.

This is the whole point of the refactor: after this, a slot knows what event it
belongs to without being inside one.

## Step 2 — move the list onto `ClubState`

`lib/data/service/state/club_state.dart`.

- Add `final List<VolunteerSlot> slots` alongside `events` and `signups`
  (`club_state.dart:19-23`).
- Add it to the constructor and to `copyWith` — `copyWith` currently covers only
  `events` / `signups` / `memberships` (`club_state.dart:46-51`); slots join that
  group because `createEvent` writes them.
- Remove `volunteerSlots` from `Event` (`event.dart:19` and `:31`).

**Also remove `Event.slotCount` and `Event.totalHours`** (`event.dart:34-37`).
They can't survive on a model that no longer holds slots. `slotCount` has no call
sites and just goes. `totalHours` has one (Step 6).

## Step 3 — rewrite the two nested loops

Still in `club_state.dart`. Both get shorter:

- **`slotById`** (`:134-141`) — was a double loop over events then slots; becomes a
  single lookup over `slots`.
- **`unfilledSlots`** (`:122-132`) — still returns
  `List<({Event event, VolunteerSlot slot})>`, so the call sites don't change
  shape, but it now iterates `slots` and pairs each with its event via
  `eventById(slot.eventId)`. Skip any slot whose event is missing rather than
  forcing a lookup — that's the dangling-FK case, and it should be a quiet skip,
  not a crash.

Add one new query while you're here, because Step 6 needs it:

- **`slotsForEvent(String eventId)`** — the slots belonging to one event. This is
  the replacement for `event.volunteerSlots` at every screen call site.

Keep these methods on `ClubState` for now. They move to the `ClubQueries`
extension later, in `repository-and-datasource-plan.md` Step 5 — don't do both
refactors at once.

## Step 4 — flatten the seed

`lib/data/service/state/seed_data.dart`. Three events currently nest their slots
inline (`:118`, `:157`, `:189`). Lift all nine slots into one top-level list, each
carrying the `eventId` of the event it used to sit inside, and pass that list to
the `ClubState` constructor.

**Every id stays exactly as it is** — `s-fs-1`, `s-fs-2`, … The ledger tests assert
against them and the demo walkthrough depends on the Cheungs starting at 4 of 20
hours.

## Step 5 — `createEvent` writes two lists

`lib/data/service/state/club_store.dart:44-75`. The method currently builds nested
`VolunteerSlot`s inside the `Event` constructor (`:64-71`).

Now it builds the event, builds the slots separately with `eventId: eventId` (the
id is already in hand on `:57`), and writes both lists in one `copyWith`. Keep
minting slot ids with `_id('s')` — this is still the in-memory demo, and ids move
to Postgres later.

`approveSignup` (`:82-95`) needs no edit: it calls `state.slotById(s.slotId)`,
which still resolves — faster now.

## Step 6 — screens

Three files, all mechanical. The pattern is `event.volunteerSlots` →
`club.slotsForEvent(event.id)`.

| File | Line | Change |
|---|---|---|
| `dashboard_screen.dart` | `:29` | the `openSlots` map builder |
| `events_list_screen.dart` | `:105`, `:114` | the slot badge `for` loop and its empty case |
| `details_events/.../event_details_screen.dart` | `:91`, `:111`, `:116` | the `isNotEmpty` guard, the indexed loop, and the `[i]` read |

In `event_details_screen.dart`, read the list into a local at the top of the
builder rather than calling `slotsForEvent` three times in one widget tree.

**`event_details_screen.dart:95`** is the one non-mechanical edit: it reads
`event.totalHours`, which Step 2 deleted. Sum the local slot list's `hours`
instead. Keep the existing "`2` not `2.0`" formatting — the same rule
`VolunteerSlot.hoursLabel` already implements.

## Step 7 — the test helper

`test/hours_ledger_test.dart:34` finds an event by searching nested slots:

```dart
.firstWhere((e) => e.volunteerSlots.any((s) => s.id == slotId))
```

Rewrite it to go through the slot's own `eventId`. **This is the only line in the
test file that changes.** All nine assertions, and both `slotById` calls (`:77`,
`:118`), stay exactly as they are — that's the check that this refactor was
behavior-preserving.

---

## Verification

```
flutter analyze          # must stay clean
flutter test             # all 9 ledger tests passing, unmodified assertions
flutter run -d chrome --web-port=8080
```

The tests passing with only one line changed is most of the proof. For the rest,
walk the two screens that render slots:

1. Events list — every event shows its slot badges, taken ones green, and an event
   with no slots still shows "No volunteer slots"
2. Open an event — the slot list renders, "hours total" matches what it said
   before, and claiming a slot still flips the badge without moving the balance

Then the ledger loop from `docs/mvp-build-progress.md:39-48`, since Step 5 touched
the write path.

---

## Carried forward, not done here

`new_models` had two things this set lacks, and they die with the folder unless
recorded:

- **`Club` and `Coordinator` as real entities**, with `clubId` on each aggregate —
  the multi-tenancy of ADR 0001. `ClubState` currently holds `clubName` and
  `season` as loose fields and has no club id at all.
- **A `coordinatorId` on approved work** — `new_models.VolunteerRecord` recorded
  who approved the hours. ADR 0003 wants every credit to trace to an event *and* a
  person; `Signup` records the person who worked, not the person who approved.

Both belong in the schema (`repository-and-datasource-plan.md` Step 0), not in
another in-memory model pass. Add them there rather than here.
