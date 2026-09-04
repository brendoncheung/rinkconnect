# Adopting the Riverpod app architecture (Code with Andrea)

*You are writing every line. This is the spec and the order to build it in — same
format as `repository-and-datasource-plan.md`.*

Source article:
<https://codewithandrea.com/articles/flutter-app-architecture-riverpod-introduction/>

## Context

RinkConnect is a working demo: one in-memory `ClubState`, a `Notifier` store, five
screens, 9 passing ledger tests. Everything is synchronous and there's no seam a
backend can attach to. Supabase is next.

The article proposes four layers — **data** (data sources, repositories), **domain**
(immutable models with serialization), **application** (optional services),
**presentation** (widgets + controllers) — plus a feature-first folder layout.

Most of the data and domain layers are already specified for this app in
`repository-and-datasource-plan.md`, which hasn't been implemented yet (`lib/data/`
does not exist). So the sequence is: **execute that plan as Pass 1**, then add the
two things the article contributes beyond it — **controllers** (Pass 2) and
**feature folders** (Pass 3).

### What is deliberately not adopted

- **Application / service layer.** Andrea calls it optional and it's for logic
  spanning multiple repositories. There's one repository here, and the derived math
  (`balanceFor`, `unfilledSlots`, `familiesByHoursOutstanding`) already has a home in
  the planned `ClubQueries` extension on `ClubData`.
- **DTO ↔ model split.** The JSON is postgrest snake_case decoded straight onto the
  models. A parallel set of DTO classes would be pure ceremony.
- **Per-entity repositories.** Andrea assumes one repository per domain area with
  per-query fetches. RinkConnect is a single aggregate snapshot — every derived read
  needs the whole dataset at once. One datasource is the correct deviation, and it's
  why `data/` and `domain/` stay shared rather than living inside features.
- **A repository layer above the datasource** (decided 2026-08-07). Andrea's
  repository exists to convert untyped DTOs into models; `ClubDataSource` already
  returns a typed `ClubData`, so it *is* the repository. `ClubStore` calls it
  directly. Datasources split along **fetch boundaries**, not table boundaries —
  one fetch, one datasource. Board compliance (ADR 0006's likely second module)
  would be the first thing to earn a second one.

---

## Pass 1 — data + domain layers

**Work through `repository-and-datasource-plan.md` steps 1–12 as written.** It's
already detailed and correct; this document does not restate it. It produces:

```
lib/data/club_data.dart · datasources/{club_data_source,local_club_data_source,remote_club_data_source}.dart
lib/state/club_queries.dart · club_store.dart (AsyncNotifier<ClubData>) · session.dart
assets/seed/club.json
```

Three adjustments to make while you're in there, so Pass 2 lands cleanly:

1. **`ClubStore` write methods must not touch `state` with `AsyncLoading`.** Every
   screen watches `clubProvider`, so flipping the cache to loading on a write would
   flash the whole screen. Writes await the datasource and fold the returned entity
   into `state.value` — exactly as Step 9 says. Mutation progress is Pass 2's job.
2. **Let write errors propagate.** No `try`/`catch` inside `ClubStore`; Pass 2's
   controllers are what catch them. If you swallow them here, the UI can never
   report a failed write.
3. **Keep the Step 10 call sites thin.** `await store.claimSlot(...)` inside the
   screen callback is fine as an intermediate state — Pass 2 changes the receiver
   from `clubStoreProvider.notifier` to a controller and nothing else.

Also delete `lib/models/post.dart` and `lib/models/profile.dart` — unused prototype
leftovers (`mvp-build-progress.md:129`).

**Verify:** `flutter analyze` clean · `flutter test` 9 passing ·
`flutter run -d chrome --web-port=8080` and walk `mvp-build-progress.md:39-48` ·
then point `clubDataSourceProvider` at `RemoteClubDataSource` and confirm the shell
renders its error state instead of crashing.

---

## Pass 2 — controllers

**Why this is the piece worth taking from the article.** Once `claimSlot` is a
Supabase round-trip it can be slow and it can fail. The screens are `ConsumerWidget`s
with nowhere to put a spinner, and the obvious alternative — a `bool _busy` field —
means converting them to `ConsumerStatefulWidget`. A controller keeps them stateless
and keeps the mutation's loading/error state separate from the data cache.

### Three controllers, six call sites

| Controller | Methods | Screen call sites |
|---|---|---|
| `EventController` | `claimSlot`, `submitHours`, `releaseSlot` | `event_screen.dart:132, :140, :154` |
| `ReviewController` | `approveSignup` | `review_screen.dart:144, :205` |
| `CreateEventController` | `createEvent` | `create_event_screen.dart:51-73` |

### What each controller is

An `AsyncNotifier<void>` whose `build()` returns nothing. The state carries no data —
it exists purely to represent the in-flight mutation, so its three cases mean
*idle/done*, *saving*, *failed*.

The body of every method is the same four beats:

1. read anything it needs from other providers (`personId` from `sessionProvider`)
2. set `state` to loading
3. set `state` to the result of guarding the call, so a thrown error becomes an
   error state instead of an unhandled exception (`AsyncValue.guard` is the Riverpod
   helper for this)
4. nothing else — the store already folded the new entity into the cache, and the
   screen is watching that separately

Points to get right:

- **Controllers call `ClubStore`, not the datasource directly.** The store owns the
  cache. Going straight to the datasource would leave the cache stale and push you
  toward refetching the whole club after every write, undoing Step 9's rule.
- **Session belongs here, not in the datasource.** `claimSlot`'s Step 1 signature
  takes an explicit `personId`; the controller is the layer that knows it, by reading
  `sessionProvider`.
- **Auto-dispose goes on the provider, not the base class.** Riverpod 3 merged the
  `AutoDispose…` variants away — check the installed 3.4 API for the exact spelling
  before you write all three. This is the kind of thing the article's code samples
  predate.
- **`CreateEventController.createEvent` needs to return something.** The screen
  navigates to `/dashboard/events/${event.id}` on success, so return the created
  `Event` (nullable — null means it failed and you shouldn't navigate). Returning
  `void` and reading the state afterwards works too but reads worse at the call site.

### Shared error surfacing

Add one small extension on `AsyncValue` in `lib/core/core_widgets/` that shows a
snackbar when the value is an error and isn't loading. Andrea's version is called
`AsyncValueUI` with a `showSnackBarOnError(context)` method; the whole thing is about
six lines.

Then in each screen's `build`, one `ref.listen` on the controller provider forwards
errors to that helper. Two consequences for the existing screens:

- Buttons disable while `ref.watch(controllerProvider).isLoading` — otherwise a
  double-tap claims a slot twice.
- The **success** snackbars that fire today (`event_screen.dart:141-151`,
  `review_screen.dart:144-153`) currently fire before anything has happened. They
  move to after the await, and only when the state didn't come back an error.
  This is the bug the whole pass exists to prevent.

### Where each controller file lives

Pass 2 alone: next to its screen in `lib/screens/`. Pass 3 moves them into
`lib/features/<name>/`. If you're doing Pass 3 soon, put them in their final home now
and skip the second move.

**Verify:** `flutter analyze` · `flutter test` — the 9 ledger tests are unaffected,
they drive `ClubStore` directly · add one test per controller asserting the
loading→data sequence on success and an error state when the datasource throws,
using a `clubDataSourceProvider` override that throws (the override point already
exists from Pass 1 Step 11) · in the browser, temporarily make
`LocalClubDataSource.claimSlot` throw and confirm the button disables, the error
snackbar appears, and the balance does not move.

---

## Pass 3 — light feature-first folders

Data and domain stay shared; presentation groups by feature.

```
lib/
  common_widgets/          ← from core/core_widgets/ (rc_*.dart + the AsyncValue extension)
  constants/               ← rinkconnect_theme.dart
  routing/                 ← rinkconnect_router.dart
  data/                    ← unchanged from Pass 1
  domain/                  ← from models/
  features/
    auth/                  login_screen.dart · session.dart
    dashboard/             dashboard_screen.dart · dashboard_shell.dart
                           · widgets/{hours,events,families}_card.dart
                           · widgets/{shell_header,role_toggle}.dart
    events/                events_list_screen.dart · event_screen.dart
                           · create_event_screen.dart · the two event controllers
    volunteering/          review_screen.dart · review_controller.dart
                           · widgets/volunteer_slot_tile.dart
  state/                   club_store.dart · club_queries.dart   (shared cache)
  main.dart
```

Mechanical: move the files, then fix imports. Every import in the project is an
absolute `package:rinkconnect/…` path, so it's a find-and-replace per moved file
rather than relative-path arithmetic. Finish by updating `mvp-build-progress.md`
§"What exists now" (lines 55-90), which describes the old layout.

`hours_balance.dart` and `user_role.dart` go to `domain/` with the rest — they're
computed/session types with no JSON, but splitting them out buys nothing.

**Verify:** `flutter analyze` clean and `flutter test` 9 passing is the whole check —
a pure move should change no behaviour. Then one browser load to confirm the
`assets/seed/club.json` path in `pubspec.yaml` still resolves.

---

## Sequencing

Pass 1 and Pass 2 each end with a green `flutter analyze` + `flutter test` and a
working browser walkthrough, so either is a safe stopping point. Pass 3 changes no
behaviour and can be deferred indefinitely without blocking Supabase.
