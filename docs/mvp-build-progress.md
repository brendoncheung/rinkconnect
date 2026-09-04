# MVP build progress

Resume point for the demo build.

**Goal:** a clickable demo for the FWISC board. In-memory state, no backend, no
auth. Full plan: `~/.claude/plans/jazzy-waddling-cloud.md`. Design decisions:
`docs/adr/`.

**Settled before building:** in-memory only (resets on reload) · role toggle in
the header · real FWISC seed names.

---

## Status — 2026-08-06

| # | Step | State |
|---|---|---|
| 1 | Domain models, one per file | **done** |
| 2 | Riverpod state layer | **done** |
| 3 | Widgets rewritten against real models | **done** |
| 4 | Shell, role toggle, router | **done** |
| 5 | The five screens | **done** |
| 6 | Verify demo loop end to end | **partly done — see below** |

`flutter analyze` — clean. `flutter test` — 9 passing.

### What is NOT yet verified

The app compiles for web and launches in Chrome, and the ledger rules are
covered by unit tests. **Nobody has clicked through the demo in a browser.**
The Chrome extension wasn't connected, so the visual walkthrough didn't happen.

Do this first next session:

```
flutter run -d chrome --web-port=8080
```

Then walk it:

1. Lands as **Emily Wolfe** (coordinator) — check the club hours card, the
   review queue count (should be 1), and "Who still owes hours"
2. **New event** → add two slots → Post event
3. Header toggle → **Parent** (becomes Brendon Cheung)
4. Open the new event → **Take slot** → balance must **not** move
5. **Log hours** → balance still must not move; state reads "Awaiting review"
6. Toggle → **Coordinator** → Review → **Approve**
7. Toggle → **Parent** → balance has moved, projected fee dropped

Watch for layout problems at narrow widths — the dashboard switches to a single
column under 900px and that path hasn't been looked at.

---

## What exists now

### Models — `lib/models/` (one per file)

`user_role.dart` · `person.dart` · `family.dart` · `season_membership.dart` ·
`signup_state.dart` · `signup.dart` · `hours_balance.dart` ·
`volunteer_slot.dart` · `event.dart`

Deleted: `club.dart`, `club_dashboard.dart`.

### State — `lib/state/`

- `club_state.dart` — immutable state + all lookups and balance computation
- `seed_data.dart` — FWISC seed, `kFeeRatePerHour = 10.0`, season `2026-2027`
- `club_store.dart` — `ClubStore extends Notifier<ClubState>` + selectors

Seed: 5 families (Cheung, Wolfe, Bearman, Bolin, Fransen), 3 events with 9
slots, 4 signups spanning approved / submitted / pledged. Cheung starts at 4 of
20 hours so the parent view isn't empty. Fransen owes 10 (mid-season joiner) —
proof the per-family number does real work. Bolin is `duesPaid: false`.

### Screens — `lib/screens/`

`dashboard_screen.dart` (role-aware) · `events_list_screen.dart` ·
`event_screen.dart` · `create_event_screen.dart` · `review_screen.dart` ·
`dashboard_shell.dart` (role toggle) · `login_screen.dart`

### Widgets

`widgets/dashboard/` — `hours_card.dart` (+ `ClubHoursCard`),
`events_card.dart`, `families_card.dart` (replaced `members_card.dart`)
`widgets/event/volunteer_slot_tile.dart` · `widgets/shell/role_toggle.dart`

`rc_textfield.dart` gained `obscureText` (default false), optional icon,
`labelText`, `maxLines`, `onChanged`.

### Tests — `test/hours_ledger_test.dart`

Eight tests guarding the rule everything rests on:

- claiming a slot does not move the balance
- logging hours does not move it either
- approval is what creates credit
- the coordinator can approve fewer hours than the slot was worth
- one family's hours leave other families untouched
- any eligible household member draws down the same family pool
- a released slot frees up and credits nobody
- the fee is computed from remaining hours at the club rate

---

## Fixed along the way

- `login_screen.dart` now scrolls — the card overflowed on short viewports
- the "New to RinkConnect?" row is a `Wrap`, so it doesn't overflow when narrow
- login card had its email/password icons swapped, and the password field
  wasn't obscured after the `RCTextfield` change

## Things not to get wrong

- **Claiming a slot must not move the balance.** Only `SignupState.approved`
  counts. Covered by tests — keep them passing.
- `hoursOwed` lives on `SeasonMembership`, never as a club-wide constant.
- Riverpod is **3.4**: `Notifier` / `NotifierProvider`.
- In the router, `/dashboard/events/new` must stay declared **before**
  `/dashboard/events/:id` — go_router matches in order.

## Known rough edges

- `RCButton` with `variant: ghost` inside `VolunteerSlotTile`'s pledged row
  puts Release and Log hours side by side; may be cramped on narrow screens
- No empty state for a family with no season membership
- The coordinator can't yet edit `hoursOwed` from the UI — the store action
  (`setHoursOwed`) exists but nothing calls it
- `models/post.dart` and `models/profile.dart` are leftovers from the prototype
  and are unused

## Open, deliberately deferred

- No-show handling, slot cancellation deadlines, over-credit (ADR 0005)
- Two separated parents — one obligation or two? The only open question that
  could supersede an accepted ADR (ADR 0002)
- Email reminders (ADR 0004) — decided, not built; nothing sends anything
