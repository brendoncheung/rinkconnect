# 0006. v1 is volunteer coordination only, and computes fees without collecting them

**Status:** Accepted
**Date:** 2026-08-05

## Context

Three distinct club pains surfaced during design: volunteer hour
coordination, membership dues, and board compliance (Background Check and
SafeSport). All three are real; the FWISC board agenda gives compliance
standing agenda time every meeting.

The developer is solo, the target club has ~102 members, and the incumbent
system is a coordinator's memory plus scattered texts and emails. Research
into other clubs found the nearest common tooling is a Google Form feeding a
spreadsheet — free, familiar, and already working. v1 must beat that, which
is a higher bar than beating nothing.

## Decision

**In scope for v1:**

- Club, membership, and season as data (minimal setup — no self-serve club
  onboarding UI)
- Coordinator creates events with fixed slots
  ([ADR 0005](0005-fixed-slots-and-signup-lifecycle.md))
- Parent authentication and invite flow for member families
  ([ADR 0003](0003-hours-ledger-is-a-financial-record.md))
- Parent claims a slot; parent submits hours worked
- Coordinator review queue; approval creates credit
- Per-membership hours balance, visible to that family all season
- Coordinator view of who still owes, and of unfilled slots
- Email balance reminders ([ADR 0004](0004-email-as-reminder-channel.md))
- **Fee calculation** — what each family owes at season end

**Out of scope for v1:**

- **Fee collection.** v1 computes the amount owed and hands it to the
  treasurer. No payment processor, no card handling, no reconciliation.
- **Membership dues — payment only.** Amended by
  [ADR 0007](0007-rinkconnect-owns-the-membership-roster.md): because
  RinkConnect is the source of truth for membership, and membership is
  contingent on dues, dues **status** is in v1 as a manually set paid/unpaid
  flag. Collecting or processing the money remains out.
- **Board compliance tracking** — Background Check and SafeSport status and
  expiry.
- SMS reminders (see ADR 0004's supersession path)
- Native apps
- Self-serve onboarding for clubs other than FWISC (the *data* is
  multi-tenant per [ADR 0001](0001-multi-tenant-platform.md); the onboarding
  *experience* is not v1)
- Slot templates for recurring events

### On the fee line

Computing the fee and collecting it are separated deliberately. Computation is
the whole point of the ledger and requires nothing but arithmetic over
approved hours. Collection drags in a payment processor, PCI scope, refunds,
failed charges, and a reconciliation burden — for a club whose treasurer
already has a working process for taking money. This keeps the entire
motivational mechanism (a visible, growing financial exposure) while keeping
money out of the system.

## Alternatives considered

**Compliance tracking as the wedge instead.** Genuinely competitive, and it
was raised more than once. It needs no parent adoption at all, involves no
money, and the board demonstrably spends time on it every meeting — the
agenda maintains in-compliance and non-compliant lists by hand. Rejected
because volunteer coordination is the problem the project exists to solve and
the one the developer understands from direct observation. Worth revisiting as
the second module.

**All three domains in v1.** Rejected. Three shallow implementations of three
domains is the reliable way to ship none of them.

**Coordinator-only tool, no parent accounts.** Materially faster to build, and
tempting. Rejected because it discards the only parent-adoption mechanism
identified — a visible balance with money attached — and leaves the
coordinator personally absorbing every end-of-season dispute with no shared
record to point at.

## Consequences

- The treasurer sees no direct value in v1. The dues feature is what would
  matter to her, and it is deferred. She may not be an advocate.
- Parent auth for ~100 families is the largest single piece of v1 work and
  carries no visible feature payoff on its own. It exists to make the balance
  view possible.
- The success test is narrow and should be stated in advance: **at the end of
  one season, does the coordinator know who owes what without having
  reconstructed it from memory, texts, and email?** Not downloads, not logins.
- If parents ignore the balance emails and the coordinator ends up entering
  every signup herself, v1 still delivers a working ledger — it just delivers
  it as a coordinator tool. That is an acceptable floor, and it is worth
  recognising it as the likely outcome rather than a failure.

## Open questions

Open questions in [ADR 0002](0002-volunteer-hours-obligation-model.md) and at
the end of [ADR 0005](0005-fixed-slots-and-signup-lifecycle.md) should be
resolved with the club before schema work begins.
