# Architecture Decision Records

One file per decision, numbered in order. An ADR is a historical record: once
accepted, it is not rewritten when the decision changes — a later ADR supersedes
or amends it, and the old one keeps its reasoning intact.

## Template

```markdown
# NNNN. Title stated as the decision, not the topic

**Status:** Accepted | Proposed | Superseded by ADR NNNN | Amends ADR NNNN
**Date:** YYYY-MM-DD

## Context

The forces at play — what makes this a decision. One or two short paragraphs.
No solution here.

## Decision

What we are doing, in the imperative. Tight. This is the part people come back
to read.

## Alternatives considered

Each rejected option and the one-line reason it lost. Omit the section only if
there were genuinely no discrete alternatives.

## Consequences

Bullets. What follows from the decision — new work it creates, things that get
easier, costs accepted. Mix positive and negative.

## Open questions

Anything still unresolved, ideally with who can answer it. Omit if none.
```

## Conventions

- **Status is one token.** Nuance ("accepted, pending confirmation of X") goes
  in Open questions, not the status line.
- **Section order is fixed:** Context → Decision → Alternatives considered →
  Consequences → Open questions. Alternatives and Open questions may be absent;
  the rest are always present and always in this order.
- **No prose between the Status/Date block and `## Context`.**
- **Cross-reference as** `[ADR NNNN](NNNN-slug.md)` on first mention in a file;
  bare `ADR NNNN` is fine afterwards. Never a full `docs/adr/…` path.
- **Resolved open questions** stay in the list, struck through, with the
  resolution — they are part of the record.

## Index

| ADR                                                        | Decision                                                                   | Status                         | Date       |
| ---------------------------------------------------------- | -------------------------------------------------------------------------- | ------------------------------ | ---------- |
| [0001](0001-multi-tenant-platform.md)                      | RinkConnect is a multi-tenant platform                                     | Accepted                       | 2026-08-05 |
| [0002](0002-volunteer-hours-obligation-model.md)           | Volunteer hours are a single ledger per membership                         | Accepted                       | 2026-08-05 |
| [0003](0003-hours-ledger-is-a-financial-record.md)         | The volunteer hours ledger is a financial record                           | Accepted                       | 2026-08-05 |
| [0004](0004-email-as-reminder-channel.md)                  | Email is the reminder channel for v1                                       | Accepted (amended by ADR 0009) | 2026-08-05 |
| [0005](0005-fixed-slots-and-signup-lifecycle.md)           | Events have fixed slots; signups move through three states                 | Accepted                       | 2026-08-05 |
| [0006](0006-fees-computed-not-collected.md)                | v1 is volunteer coordination only; fees computed, not collected            | Accepted                       | 2026-08-05 |
| [0007](0007-rinkconnect-owns-the-membership-roster.md) | RinkConnect is the club's source of truth for membership                   | Accepted                       | 2026-08-05 |
| [0008](0008-family-and-season-membership.md)               | Family and SeasonMembership are separate entities                          | Accepted                       | 2026-08-05 |
| [0009](0009-web-push-for-event-and-slot-reminders.md)      | Web push covers event and slot reminders; email keeps the balance reminder | Accepted                       | 2026-09-04 |
| [0010](0010-event-deadline-replaces-who.md)                | Event deadline replaces the "who" field                                   | Accepted                       | 2026-09-04 |
| [0011](0011-deadline-and-slot-reminders-are-separate.md)   | Deadline and slot reminders are separate, differently-timed notifications | Accepted                       | 2026-09-04 |
| [0012](0012-skater-login-uses-a-pin-not-email.md)          | Skater login authenticates via PIN, not email                             | Accepted                       | 2026-09-04 |
| [0013](0013-club-contacts-is-not-derived-from-membership.md) | Club contacts is a free-text list, not derived from membership          | Accepted                       | 2026-09-04 |
| [0014](0014-newsletter-and-documents-stay-coordinator-owned.md) | Newsletter and documents stay coordinator-owned                      | Accepted                       | 2026-09-04 |
| [0015](0015-newsletter-and-document-storage-waits-on-supabase.md) | Newsletter and document storage waits on the Supabase migration    | Accepted                       | 2026-09-04 |
