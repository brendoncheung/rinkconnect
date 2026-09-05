# 0011. Deadline and slot reminders are separate, differently-timed notifications

**Status:** Accepted
**Date:** 2026-09-04

## Context

[ADR 0009](0009-web-push-for-event-and-slot-reminders.md) settled the
**channel** for event and slot reminders (web push) but not their triggers.
The club's email thread asked for two things that read as one feature but
aren't:

- a reminder tied to an event's [deadline](0010-event-deadline-replaces-who.md)
  — pulling a parent toward *registering*
- a reminder tied to a **slot the parent already claimed** — pushing them to
  actually *work it*

These have different audiences (everyone vs. people who signed up) and
different calls to action (act now vs. don't forget). Collapsing them into one
notification type would send the wrong message to whichever audience didn't
match the trigger that fired.

## Decision

Two separate reminder types:

1. **Deadline reminder** — tied to `Event.deadline`, timing set **by the
   coordinator, per event**. She can pick urgency to match the event.
2. **Slot reminder** — tied to a `pledged` signup approaching its event date,
   on a **fixed default offset** (e.g. 2 days before), not configurable per
   event.

## Alternatives considered

**One reminder type, one trigger.** Rejected: conflates "register" with
"don't forget your shift" — a parent who already signed up doesn't need a
registration nudge, and a parent who hasn't signed up gets nothing from a
slot-shaped reminder.

**Coordinator-configurable timing for both.** Rejected for the slot reminder:
it's a lighter-weight nudge, not a per-event decision worth adding a second
configuration field for. A fixed default keeps event setup to one new field
([ADR 0010](0010-event-deadline-replaces-who.md)'s deadline plus this
reminder's timing), not two.

## Consequences

- `Event` needs a coordinator-set deadline-reminder offset; the slot-reminder
  offset is a global constant, not per-event data — same pattern as
  `kFeeRatePerHour` in seed data.
- A slot reminder naturally stops mattering once a signup leaves `pledged`
  (submitted or approved) — no separate suppression logic needed beyond
  checking signup state.
- If the fixed slot-reminder offset turns out wrong for some event types, this
  is cheap to change later — it's a constant, not a modeling decision.
