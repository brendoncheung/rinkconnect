# 0003. The volunteer hours ledger is a financial record

**Status:** Accepted
**Date:** 2026-08-05

## Context

FWISC charges a fee to families who do not complete their volunteer hours by
the end of the season. The hours ledger is therefore not an informational
tracker; it is the input to a bill.

Other clubs enforce differently. An earlier draft of this ADR claimed penalty
policy was merely data — "a fee amount, an enforcement flag" — and therefore
cheap to vary later. **Research disproved that**; see
[club volunteer policies](../research/club-volunteer-policies.md). Four
structurally distinct mechanisms are in use across clubs: a per-hour fee
assessed after the season (FWISC's model), a refundable all-or-nothing
deposit, an upfront buyout, and a registration hold. They differ in when money
moves and whether partial completion has any value at all — under a deposit
model, 9 of 10 hours is worth exactly the same as 0.

Per [ADR 0001](0001-multi-tenant-platform.md)'s sequencing note, v1 implements
FWISC's per-hour fee concretely and lets a second real club drive the
abstraction. The correction matters because it means that abstraction, when it
comes, will be a real one — not a settings row.

Two further facts bear on this:

- The coordinator is an unpaid volunteer, and enforcement makes her the person
  who bills her neighbours. That is a social cost that causes volunteers to
  quit, and it is a design problem, not just an interpersonal one.
- Credit is coordinator-entered, not self-reported — necessary, since a
  mandatory obligation cannot be self-certified. But it means the person
  keeping the record and the person owing the money are different people, and
  the owing party has no independent record of their own.

## Decision

Treat the hours ledger as a record of financial consequence:

1. **Corrections are additive, not destructive.** Adjusting a balance writes a
   new entry; it never silently overwrites a previous one. Who changed what,
   when, and why is retained.
2. **Every credit traces to an event and a person.** A balance is never a bare
   number — it decomposes into the shifts that produced it.
3. **Parents can see their own balance continuously**, all season, without
   asking the coordinator.

## Alternatives considered

**A mutable balance with no parent visibility.** Faster to build — a single
integer column, no correction log, no parent auth. Rejected: the coordinator
absorbs every dispute personally at season end with no shared evidence to point
at, and it removes the only parent-adoption mechanism identified so far, making
v1 a coordinator-only tool by consequence rather than by choice. Acceptable only
as a fallback if point 3 proves too costly for a first season.

## Consequences

**Point 3 is the load-bearing one, and it does double duty.** It is
simultaneously:

- the dispute-prevention mechanism — a parent who watches their balance all
  season cannot be surprised by a fee in May, and discrepancies surface in
  weeks rather than at reckoning time, while everyone can still remember the
  shift in question
- the first credible reason for a parent to open the app that does not depend
  on habit or goodwill

An approaching charge is a stronger motivator than club news, which parents
have already demonstrated they will ignore.

**Costs accepted:**

- An append-only ledger is more work than a mutable integer column, and the
  correction UI is fiddlier than editing a number.
- Parent-facing balance views mean parent authentication, which means an
  invite/onboarding flow for ~100 families, which is real v1 scope.
- Visible balances generate questions the coordinator must field, at least
  initially. The bet is that these are cheaper than end-of-season disputes.

## Open questions

- What is the fee amount, and is it flat or per unworked hour?
- Who has authority to waive or adjust a balance — the coordinator alone, or
  the board?
- Are hours ever transferable between memberships? (Two families arranging a
  swap is exactly the sort of thing that happens in a small club, and it is
  much easier to forbid now than to retrofit.)
