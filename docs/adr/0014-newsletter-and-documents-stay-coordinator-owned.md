# 0014. Newsletter and documents stay coordinator-owned

**Status:** Accepted
**Date:** 2026-09-04

## Context

[ADR 0007](0007-rinkconnect-owns-the-membership-roster.md) already identified
one role tension left open by v1's coordinator/parent split: a membership
chair, distinct from the volunteer coordinator, who owns the roster. The same
tension recurs here. FWISC's board has a standing **Newsletter** committee
(see the glossary's Board member entry) — a plausible distinct owner for the
newsletter and documents sections, rather than the volunteer coordinator.

## Decision

The coordinator owns posting to both the newsletter and documents sections in
v1. No new role is introduced for this.

## Alternatives considered

**Give the Newsletter committee its own write access now.** Rejected for the
same reason ADR 0007 gave for the membership chair: a second person needing
scoped write access is a real role with its own permissions to design, and
inventing it speculatively — before anyone but the coordinator has actually
tried to use these sections — is exactly the premature configurability
[ADR 0001](0001-multi-tenant-platform.md) warns against.

## Consequences

- If the Newsletter committee member wants to post directly, the coordinator
  is a manual relay in the interim — a real but accepted cost, same shape as
  ADR 0007's membership-chair bootstrap.
- This is the second role-scoping question left open in the same shape
  (coordinator vs. a specialized committee role). If a third comes up, that's
  a signal the coordinator/parent split itself needs revisiting, not that each
  case should keep being decided independently.
