
# 0002. Volunteer hours are a single ledger per membership

**Status:** Accepted, with two assumptions pending confirmation
**Date:** 2026-08-05

## Context

FWISC requires member families to contribute volunteer hours across a season.
Early descriptions suggested two overlapping obligations — one on the family,
and a second on skaters above roughly fifth grade — which would have required
two balances and a rule governing how one discharges the other.

Questioning resolved this: there is one balance. Mom, dad, and a
sufficiently old skater are all people who can *work against* the family's
single obligation. They are not three obligations.

The age threshold therefore governs **eligibility to contribute**, not
obligation. A skater below it may attend an event, but her time credits
nothing.

## Decision

A volunteer hours obligation is a **single ledger owned by the membership**.

- One balance per membership per season: hours owed, hours worked, hours
  remaining.
- Any eligible person associated with that membership — the adults on it, and
  skaters at or above the club's minimum age — can work an event, and their
  hours credit that one balance.
- Eligibility is a property of a person; obligation is a property of a
  membership.

## Alternatives considered

**One ledger per skater.** Rejected: a family with three skaters would owe
triple, which contradicts the club's own framing of the obligation as falling
on the family.

**Dual ledger — family target plus a separate per-skater target.** Rejected;
this was the initial reading and it did not survive. It would require a
spillover rule ("do the skater's hours reduce the family's balance?") that has
no basis in how the club actually operates, plus a second configurable target
per club.

**Ledger keyed to household rather than membership.** Rejected in favour of
membership — see assumptions. A household concept would have to exist
independently of registration, which means modeling living arrangements and
relationships between adults. That is substantially more complexity for a
distinction the club does not appear to draw.

## Consequences

- The membership record is the spine of the schema. Dues hang off it, hours
  hang off it, skaters hang off it. The deferred membership-fees feature
  (see glossary) can be added later without redesigning this.
- The coordinator's central report — "who still owes hours" — is a single
  query over memberships, not a join across two obligation types.
- Signing up for an event is done *by a person*, but credited *to a
  membership*. The UI must make it obvious which membership is being credited
  when an event roster is filled, particularly if a person could ever be
  associated with more than one.
- Eligibility needs a birthdate or grade on each skater, and the threshold is
  evaluated at time of assignment. Skaters age into eligibility mid-season;
  this must not retroactively change past balances.

## Assumptions — confirm with the club before building

1. ~~**The obligation does not scale with skater count.**~~
   **SETTLED 2026-08-05: there is no rule. The coordinator sets the number.**

   `membership.hoursOwed` is a value the coordinator enters. The system does
   not derive it, validate it against a formula, or recompute it.

   ### What this replaced, and why the replacement is better

   Two formulas were proposed and both were wrong: a flat club-wide number,
   then `per-member rate × eligible members`. The second came from the
   coordinator's own description — "10 hours each, so 30 for a family of
   three" — but that is **how she arrives at the number, not a rule the
   software must implement**. Modelling her arithmetic instead of her answer
   invented work that does not exist.

   Removing the formula removes everything that was stacked on it:

   - **No snapshot rule.** An earlier revision fixed the obligation at season
     start so that a *computed* figure could not jump when a skater crossed
     the age threshold mid-season. Nothing computes it. It changes when the
     coordinator changes it, and at no other time.
   - **No eligible-member count** as an input to anything.
   - **No ambiguity about "member."** Whether the club means a family or a
     person stops mattering: a number is attached to a membership, and how
     the coordinator reasoned her way to it is not the schema's concern.

   ### What this preserves

   Every case that motivated the formulas is still handled, by the
   coordinator typing a different number:

   - a family joining mid-season owes a reduced amount — she enters less
   - a hardship waiver — she enters zero
   - a household the rule would have got wrong — there is no rule to get it
     wrong

   `hoursOwed` living on the **membership** rather than the club is the one
   structural commitment that survives, and it is now load-bearing for a
   simpler reason than before: the coordinator sets it per member, so per
   member is where it must live.

   **UX consequence, not a modelling one:** setting ~100 numbers by hand each
   season is tedious. A default applied at season rollover with per-family
   overrides solves that entirely within the UI, and needs no model support.

2. **The obligated unit is the membership, not the household.** If two
   separated parents each hold their own membership for one shared skater,
   this model gives them two balances. If the club considers that one
   obligation, the keying is wrong and this ADR would need superseding — the
   most expensive correction on this list, which is why it is called out here.

3. **Associate members** (4 of 102 in 2025-2026) are assumed to owe hours on
   the same basis as regular members. If associate status exists precisely to
   exempt someone from hours, that is an obligation rule, not a label.
