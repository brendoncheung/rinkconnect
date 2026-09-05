# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## What this is

A Flutter **web** app for figure skating clubs: volunteer hours tracking, event
signups, and season-end fee calculation. Currently a clickable demo running on
in-memory seed data (FWISC, ~102 members), mid-migration toward Supabase.

## Commands

```bash
flutter run -d chrome --web-port=8080   # the demo (web is the target platform)
flutter analyze                          # must be clean
flutter test                             # ledger + widget tests
flutter test test/hours_ledger_test.dart # one file
flutter test --plain-name "approval"     # one test by name
flutter build web && firebase deploy     # Firebase Hosting serves build/web only
supabase start                           # local stack on :54321 (studio :54323)
```

Firebase is **hosting only** — no Firestore, Auth, or Functions. Data and auth are
Supabase. The `.mcp.json` supabase MCP server points at the local stack, so
`supabase start` must be running for it to work.

## The one rule that must not break

**Only `SignupState.approved` moves a family's hours balance.** Claiming a slot
(`pledged`) and reporting work (`submitted`) are visible states that count toward
nothing. If either credited the ledger, a family could claim twenty hours, work
none, and appear to owe nothing. `test/hours_ledger_test.dart` guards this — keep
those tests passing.

Related invariants:
- `hoursOwed` lives on the season membership, per family. It is **never** a
  club-wide constant and is never computed from a formula — the coordinator types
  the number (ADR 0002).
- Fees are **computed, never collected**. No payment processor is in scope (ADR 0006).
- Corrections to the ledger are additive, never destructive; every credit traces
  to an event and a person (ADR 0003).

## Architecture

**Riverpod 3.4** — `Notifier` / `NotifierProvider`. Not `StateNotifier`.

State flows: `ClubStore` (`Notifier<ClubState>`) holds one immutable snapshot of
the entire club — families, people, memberships, events, signups — plus who is
"signed in" (`currentPersonId`, `role`). Every derived read (`balanceFor`,
`unfilledSlots`, `familiesByHoursOutstanding`, `clubHoursOwed`) is a method on
`ClubState` computed over that whole snapshot, not a fetch. Writes rebuild the
object via `copyWith`.

The role toggle in the header swaps viewpoint between coordinator and parent by
changing `currentPersonId` — it is the demo's stand-in for auth.

`lib/routes/rinkconnect_router.dart` — go_router matches **in order**, so
`/dashboard/events/new` must stay declared before `/dashboard/events/:id`.
Events are looked up by id from the store rather than passed as `extra`, so a
browser reload doesn't lose them.

### Layout

```
lib/core/core_widgets/   RC* design-system widgets (RCButton, RCCard, …)
lib/core/rinkconnect_theme.dart   color/type tokens
lib/data/service/state/  club_state.dart, club_store.dart, seed_data.dart
lib/data/repository/     auth/, club/ — empty; the intended Supabase seam
lib/models/              the models in use
lib/models/new_models/   in-progress rewrite — NOT wired to anything yet
lib/screens/<feature>/   feature folders, widgets/ + view_models/
```

The `RC*` widgets in `lib/core/core_widgets/` mirror the design system in
`.claude/skills/rinkconnect-design/`. Build screens from them rather than raw
Material widgets.

### Migration in flight — read before touching the data layer

Three things are mid-move and the docs lag the code:

1. `docs/repository-and-datasource-plan.md` and `docs/riverpod-architecture-guide.md`
   are **specs to execute, not descriptions of what exists**. They say `lib/state/`;
   the files actually live in `lib/data/service/state/`.
2. The backend seam is a **repository per aggregate** under
   `lib/data/repository/`. The directories exist but are empty — nothing is
   written yet, and `ClubStore` still reads `seed_data.dart` directly. An
   earlier `datasource.dart` / `local_datasource.dart` pair was deleted rather
   than kept as a stub; don't reintroduce it. New work goes in
   `lib/models/new_models/` behind a repository.
3. `lib/models/new_models/` is an unwired parallel model set aimed at the Supabase
   schema. `lib/models/` is what runs.

There are no Supabase migrations yet — the schema doesn't exist. `main.dart`
initializes Supabase against a hardcoded hosted URL while `lib/core/supabase_config.dart`
expects `--dart-define`; these disagree.

`lib/models/post.dart` and `lib/models/profile.dart` are dead prototype leftovers.

## Decisions live in docs/

`docs/adr/` holds fifteen accepted ADRs — read the relevant one before changing
domain rules rather than inferring intent from code. `docs/adr/README.md` has the
template and the rule that an accepted ADR is never rewritten: a later ADR
supersedes or amends it. `docs/glossary.md` fixes the domain vocabulary
(member, family, season membership, obligated unit, eligible contributor) and
flags which terms are still unresolved with the club.
`docs/mvp-build-progress.md` is the resume point and known-rough-edges list.
`docs/questions-for-the-club.md` tracks what only FWISC can answer.

## Agent skills

### Issue tracker

GitHub Issues via the `gh` CLI. See `docs/agents/issue-tracker.md`.

### Triage labels

Defaults kept: `needs-triage`, `needs-info`, `ready-for-agent`, `ready-for-human`, `wontfix`. See `docs/agents/triage-labels.md`.

### Domain docs

Single-context: `docs/adr/` at repo root holds ADRs; `docs/glossary.md` is this repo's existing domain vocabulary doc (no `CONTEXT.md` yet — skills proceed without one). See `docs/agents/domain.md`.

## Working style

The owner writes all the code himself — this project is how he's learning. Give
specs, reviews, and explanations; don't hand over generated implementations
unless asked. He consistently prefers the simplest model that works: prefer
storing what a human decides over deriving it.
