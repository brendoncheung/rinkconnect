# 0010. Event deadline replaces the "who" field

**Status:** Accepted
**Date:** 2026-09-04

## Context

`Event` carries a `who` string (default `'Open to all members'`) meant to
describe an event's audience. Reviewing the first prototype, FWISC's skating
director said directly that this doesn't reflect how the club operates: there
are no restricted events, only a **registration deadline** per event — and
that deadline is what should drive a parent's reminder, not an audience label
([ADR 0011](0011-deadline-and-slot-reminders-are-separate.md)).

`who` has never carried real behavior — it's a display string nobody reads
structurally, unlike the slot list `numOfVolunteers` was removed in favor of
([ADR 0005](0005-fixed-slots-and-signup-lifecycle.md)). `deadline` is the
concept the club actually operates on.

## Decision

Add `deadline: DateTime` to `Event`. Remove `who` entirely — not hide it,
remove it.

## Alternatives considered

**Keep `who`, add `deadline` alongside it.** Rejected: `who` would sit in the
model as dead weight the club has explicitly said doesn't reflect reality, and
a future reader would have no way to know that without this ADR.

## Consequences

- The events list sorts and reads by deadline rather than by an unstructured
  audience string.
- Seed data and any UI referencing `event.who` need updating.
- `deadline` becomes the field the deadline-reminder trigger in
  [ADR 0011](0011-deadline-and-slot-reminders-are-separate.md) hangs off.
