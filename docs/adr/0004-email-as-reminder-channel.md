# 0004. Email is the reminder channel for v1

**Status:** Accepted — amended by [ADR 0009](0009-web-push-for-event-and-slot-reminders.md)
**Date:** 2026-08-05

## Context

[ADR 0003](0003-hours-ledger-is-a-financial-record.md) makes parent-visible
balances the mechanism that prevents end-of-season fee disputes. That
mechanism only works if parents actually look. Visibility is not attention —
a balance page nobody opens prevents nothing.

Something must therefore pull parents back during the season. The candidates:

| Channel | Reach | Cost | Notes |
|---|---|---|---|
| Email | Universal | Free | The channel the project was started to escape |
| SMS | Very high | Per message | Needs a provider and consent handling |
| Web push | Poor on iOS | Free | Requires the parent to install the PWA first |
| Native push | High | App store overhead | Abandons the web-first plan |

Web push is effectively unavailable given the web-first launch: on iOS it
requires the user to add the site to their home screen, which most club
parents will not do.

## Decision

Email carries the balance reminder in v1. SMS is a planned upgrade, not a
v1 requirement.

**Amended by [ADR 0009](0009-web-push-for-event-and-slot-reminders.md):**
event and volunteer-slot reminders (a different reminder from the balance
one this ADR governs) use web push instead, accepting the iOS gap this ADR
originally rejected web push for. The balance reminder itself is unaffected
— still email, still SMS as the named upgrade path.

## Consequences

**The obvious objection is that email is what failed.** It isn't quite the
same use of email, and the difference is the whole argument for this decision:

- What failed: *"Newsletter — volunteers needed Saturday."* Broadcast, about
  the club's needs, identical for every recipient, easy to defer forever.
- What this sends: *"You have 6 hours left. The season ends in 8 weeks.
  Unworked hours are billed at $X."* Personal, specific, with money attached
  and a deadline.

Broadcast club news competes with every other email. A statement of personal
financial exposure does not. If *this* email is also ignored, that is a much
more informative failure — it would mean the fee itself lacks teeth, and it
would call the whole premise into question rather than just the channel.

- Reminder cadence becomes a design decision. Too frequent reads as nagging
  from a volunteer-run club; too sparse defeats the purpose. Cadence should
  likely be driven by remaining hours and remaining weeks, not a fixed
  schedule.
- Deliverability matters more than it would for newsletters. A balance
  reminder in a spam folder is worse than no reminder, because the dispute
  defence rests on the parent having been told.
- Every reminder must deep-link to the balance view, or the email becomes the
  product and the app is never opened.
- **Adding SMS later must not require reworking this.** Reminders should be
  generated as channel-agnostic events with a per-channel rendering step, so
  SMS becomes an additional renderer plus a per-parent channel preference —
  not a rewrite of the reminder logic. [ADR 0009](0009-web-push-for-event-and-slot-reminders.md)
  relies on this seam for web push.
