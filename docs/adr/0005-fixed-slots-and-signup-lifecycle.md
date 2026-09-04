# 0005. Events have fixed slots; signups move through three states

**Status:** Accepted
**Date:** 2026-08-05

## Context

Two models were possible for how volunteer need is expressed on an event:

- **Open pledge** — the coordinator posts a total ("this event needs 10
  hours") and parents claim any amount they like.
- **Fixed slots** — the coordinator defines shifts, each with a role, a time
  range, and an hour value. Parents claim a shift.

Separately, [ADR 0003](0003-hours-ledger-is-a-financial-record.md) requires
that credit be coordinator-confirmed, since a mandatory obligation carrying a
financial penalty cannot be self-certified.

The existing prototype (`lib/models/event.dart`,
`lib/widgets/dashboard/hours_card.dart`) already assumed fixed slots, and
already showed a "pending review" state and a coordinator **Review** queue —
but labelled the headline balance figure "pledged", which would compute a
family's obligation from what they signed up for rather than what they worked.

## Decision

**Volunteer need is expressed as fixed slots.** An event carries a list of
slots; each has a role label, a time range, and an hour value. A parent claims
a whole slot. Hours come from the slot, not from parent input.

**A signup has three distinct states, and they are three different numbers:**

| State | Meaning | Counts toward balance? |
|---|---|---|
| `pledged` | Claimed the slot; the event hasn't happened | **No** |
| `submitted` | Parent reports having worked it | **No** |
| `approved` | Coordinator confirmed | **Yes** |

Only `approved` hours discharge an obligation or reduce a fee.

## Alternatives considered

**Open pledge.** Rejected. It is simpler to build but does not solve the
coordinator's actual problem, which is *coverage* — knowing that a named
person is on the check-in desk at 9am. Ten parents each pledging one hour
satisfies an hours total while leaving the door unstaffed.

**Balance computed from pledges.** Rejected as incorrect, not merely
undesirable: a family could claim twenty hours of slots, attend none, and
appear to have discharged an obligation that carries a real fee.

## Consequences

- `numOfVolunteers` on `Event` is redundant once slots exist — it is
  derivable, and two representations of one fact can disagree. Remove it.
- `DashboardVariant.board` should be renamed `member`. Per the glossary, every
  family owes hours, not only the board; the name will mislead.
- The coordinator gains a **review queue** as a first-class surface. The
  prototype already sketches it ("11.5 hours awaiting your review"). This is
  now load-bearing rather than decorative — nothing becomes credit without
  passing through it.
- Fixed slots mean the coordinator does more setup work per event than an
  open pledge would require. This is the cost of coverage, and it is worth
  measuring: if defining slots is tedious, she will stop using the app. Slot
  templates for recurring event types are an obvious mitigation, but not v1.
- Every parent-facing hours figure must state which number it is showing.
  "6.5h to go" against an approved balance is a different claim from the same
  figure against pledges, and only one of them predicts a bill.

## Open questions

These are cheap now and awkward later:

- **Partial credit.** A parent claims a 2h slot and works 1.5h. Can the
  coordinator approve a different number than the slot's value? (Probably yes
  — but then the slot value is a default, not a constant.)
- **No-shows.** A `pledged` signup for an event that has passed, never
  submitted. Does it expire silently, or does the coordinator have to
  dispose of it? Silent expiry loses the signal that someone did not turn up.
- **Cancellation.** Can a parent release a claimed slot, and up to when? An
  unreleased slot nobody works is worse for the coordinator than one that was
  never claimed, because she believed it was covered.
- **Over-credit.** Someone works longer than the slot. Approved above the
  slot value, or capped?
- **Unfilled slots.** Does the coordinator get a view of what is still
  uncovered across upcoming events? This is arguably her single most valuable
  screen and is not yet in the prototype.
