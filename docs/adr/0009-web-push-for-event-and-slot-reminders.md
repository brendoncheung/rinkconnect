# 0009. Web push covers event and slot reminders; email keeps the balance reminder

**Status:** Accepted
**Date:** 2026-09-04

## Context

Feedback from a club contact (email thread, Aug 2026) asked for reminders tied
to event deadlines and to volunteer slots a parent signed up for — "so
skater/parent will receive notification on the event or upcoming deadline,"
and linked to slots via deep linking. The reply in that thread promised this
"via push notifications on the mobile app," which contradicts
[ADR 0006](0006-v1-scope.md)'s exclusion of native apps.

[ADR 0004](0004-email-as-reminder-channel.md) already evaluated push
notifications for the **balance reminder** and rejected web push specifically:
on iOS, it requires the parent to manually add the site to their home screen
first, which most club parents won't do. That ADR named SMS as the planned
upgrade path instead.

This decision is about a different reminder: **event and volunteer-slot**
reminders (a UX nicety about upcoming commitments), not the balance reminder
(the financial-exposure mechanism ADR 0003 depends on to prevent
end-of-season disputes). The two don't have to use the same channel.

## Decision

Event and volunteer-slot reminders are delivered via **web push** (PWA),
knowingly accepting the same iOS gap ADR 0004 already documented. No SMS, no
native app, for this reminder type.

`docs/adr/0004-email-as-reminder-channel.md`'s decision is otherwise
unchanged: the balance reminder still ships as email, with SMS still the
named upgrade path for *that* reminder specifically, not this one.

## Consequences

- iOS parents who haven't added RinkConnect to their home screen will not
  reliably get event/slot reminders. This is accepted, not an oversight —
  Android and desktop coverage is judged good enough to promise this feature
  now rather than wait.
- If usage data later shows this actually matters (e.g. most FWISC parents
  are on iOS and never receive reminders), the next move is the same one
  ADR 0004 already named for the balance reminder: SMS. Reminders should stay
  channel-agnostic events with a per-channel rendering step (per ADR 0004's
  supersession path) so adding SMS here later doesn't mean a rewrite.
- Still no native app — ADR 0006's exclusion holds. Web push does not require
  one.

## Alternatives considered

- **SMS now**, matching ADR 0004's stated path. Rejected for this reminder
  type: provider integration and consent handling is real new v1 work, and
  event/slot reminders are lower-stakes than the balance reminder that
  motivated planning SMS in the first place.
- **Native app**, honoring what was promised in the email. Rejected: reopens
  ADR 0006's no-native-apps line for a feature that doesn't need it — web
  push gets most of the value without the app-store overhead.
