# 0002. Volunteer hours are a single ledger per membership

**Status:** Accepted
**Date:** 2026-08-05

## Context

FWISC requires member families to contribute volunteer hours across a season.
Early descriptions suggested two overlapping obligations — one on the family,
one on skaters above roughly fifth grade — which would have needed two balances
and a rule for how one discharges the other.

Questioning resolved this to one balance. The adults on a membership and a
sufficiently old skater are all people who can *work against* the family's
single obligation; they are not three obligations. The age threshold governs
**eligibility to contribute**, not obligation: a skater below it may attend an
event, but her time credits nothing.

## Decision

A volunteer hours obligation is a **single ledger owned by the membership.**

- One balance per membership per season: hours owed, hours worked, hours
  remaining.
- Any eligible person on that membership — the adults, and skaters at or above
  the club's minimum age — can work an event, and their hours credit that one
  balance.
- Eligibility is a property of a person; obligation is a property of a
  membership.

`hoursOwed` is a number the coordinator enters per membership. The system does
not derive it from a formula, validate it against one, or recompute it when a
skater ages past the threshold mid-season — it changes when the coordinator
changes it, and at no other time. Mid-season joiners, hardship waivers, and
edge-case households are all handled the same way: she enters a different
number.

## Alternatives considered

**One ledger per skater.** Rejected: a family with three skaters would owe
triple, contradicting the club's framing of the obligation as falling on the
family.

**Dual ledger — a family target plus a separate per-skater target.** Rejected:
this was the initial reading. It needs a spillover rule ("do the skater's hours
reduce the family's balance?") with no basis in how the club operates, plus a
second configurable target per club.

**Derive `hoursOwed` from a formula.** Briefly adopted, then reversed. Two
formulas were tried — a flat club-wide number, then `per-member rate × eligible
members`, the second taken from the coordinator's own words ("10 hours each, so
30 for a family of three"). But that is how she *arrives at* the number, not a
rule the software must run. Modelling her arithmetic instead of her answer
invented work that doesn't exist, and pulled in a snapshot rule, an
eligible-member count, and the unresolved "what counts as a member" question —
all of which disappear once the number is simply typed in.

**Ledger keyed to household rather than membership.** Rejected in favour of
membership (see Open questions). A household concept independent of
registration means modelling living arrangements and relationships between
adults — substantial complexity for a distinction the club does not appear to
draw.

## Consequences

- The membership record is the spine of the schema: dues, hours, and skaters
  all hang off it. The deferred membership-fees feature (see glossary) can be
  added later without redesigning this.
- The coordinator's central report — "who still owes hours" — is one query
  over memberships, not a join across two obligation types.
- Signing up for an event is done *by a person* but credited *to a membership*.
  The UI must make the credited membership obvious when a roster is filled,
  especially if a person could ever be associated with more than one.
- Eligibility needs a birthdate or grade on each skater, evaluated at time of
  assignment. Skaters age into eligibility mid-season; this must not
  retroactively change past balances.
- Setting ~100 numbers by hand each season is tedious. A default applied at
  season rollover with per-family overrides solves this entirely in the UI and
  needs no model support.

## Open questions

- **Is the obligated unit the membership or the household?** If two separated
  parents each hold their own membership for one shared skater, this model
  gives them two balances. If the club considers that one obligation, the
  keying is wrong and this ADR would need superseding — the most expensive
  correction on this list.
- **Do associate members owe hours on the same basis as regular members?**
  Assumed yes (4 of 102 in 2025-2026). If associate status exists precisely to
  exempt someone from hours, that is an obligation rule, not a label.
