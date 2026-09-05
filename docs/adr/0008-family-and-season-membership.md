# 0008. Family and SeasonMembership are separate entities

**Status:** Accepted
**Date:** 2026-08-05

## Context

"Membership" had been used for two different things. The board's own numbers
show both in a single line — *"2025-2026 ended with 102 members … as of
07/03/2026, 77 members have registered for the 2026-2027 season."* Those are
different counts of different things.

Adding a dues paid/unpaid flag ([ADR 0007](0007-rinkconnect-owns-the-membership-roster.md))
forced the distinction, because paid-ness is obviously annual — and so, on
inspection, are hours owed and the hours ledger.

Meanwhile the household itself must persist, or the roster is re-entered from
scratch every July.

## Decision

Two entities.

**`Family`** — a household's ongoing relationship with the club. Created once,
persists across seasons. Holds household identity: name, address, contact
details, and the people in it.

**`SeasonMembership`** — that family's registration for one season. Created
annually. Holds everything that resets:

- dues status (paid / unpaid)
- `hoursOwed`, as set by the coordinator
- the volunteer hours ledger
- which skaters are registered for that season

This refines [ADR 0002](0002-volunteer-hours-obligation-model.md): where it
says the ledger is keyed to "the membership," it means **SeasonMembership**.
The single-pooled-ledger decision is unchanged.

## Consequences

**A lapsed family is a family with no SeasonMembership for the current
season.** The ~25 who had not renewed by July are not deleted and not flagged
— they simply have no current registration. They keep their history, and
re-registering is creating a new SeasonMembership rather than re-entering a
household.

**Season rollover is a real feature**, and now a simple one: create this
season's SeasonMemberships from last season's families. That is the annual
transition ADR 0007 identified, reduced to one operation.

**Past seasons become immutable history.** A closed season's ledger and dues
status stay as they were. Given that balances turn into fees, that is
important — last year's numbers must not shift because someone edited a
family record this year.

**Household changes are edited once.** A family that moves or changes an email
updates one row, not one row per season.

**People belong to the Family; registration belongs to the season.** A skater
is a persistent member of a household, but USFS membership is per skater per
year, and a family with two skaters may register only one in a given season.
So `SeasonMembership` must record *which* skaters are registered — it is not
derivable from the family alone.

**The identity chain is now explicit:**

```
Account → Person → Family → SeasonMembership (current) → hours ledger
```

A login belongs to a person, a person belongs to a family, and the balance
that person sees is their family's current season membership. Per ADR 0007's
zero-account principle, every link above the account is optional: a family can
owe hours, be credited, and be billed with nobody logged in.

**Cost accepted:** every query about "current members" is a join rather than a
filter, and the coordinator's screens must always be scoped to a season. That
is the price of not duplicating household data annually, and it is worth it.

## Open questions

- ~~Does an unpaid family still owe volunteer hours?~~ **DECIDED: yes.** The
  obligation starts at registration, not at payment. Registering is the
  commitment; dues status and hours obligation are independent facts about a
  season membership.

  Consequence to watch: a family that registers and never pays will accrue a
  balance and receive reminder emails. That is correct behaviour under this
  rule, but if a meaningful number of the ~25 unrenewed families sit in that
  state, the coordinator will want a way to close out a registration —
  cancelling the season membership rather than leaving it accruing.
- Can a family have a SeasonMembership with **no registered skaters** — an
  associate member, perhaps? (4 of 102 last season were associate.)
