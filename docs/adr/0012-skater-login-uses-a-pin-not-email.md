# 0012. Skater login authenticates via PIN, not email

**Status:** Accepted
**Date:** 2026-09-04

## Context

The glossary already resolves *what* a skater's login can do: a read-only
role, seeing events and the family's hours balance, no write access —
requested by FWISC's skating director so a skater isn't dependent on a parent
relaying information. It doesn't resolve *how a skater authenticates*.

Every existing role (coordinator, parent) is assumed to register with an
email. Many skaters — the population this role exists for — don't have one,
being minors. Requiring an email would mean either giving a child an email
account for this purpose alone, or reusing a parent's email across two
accounts, both of which fit poorly.

## Decision

A skater logs in with a **PIN or invite code**, issued by a parent or the
coordinator — not an email/password account.

## Alternatives considered

**Skater gets a full email/password account, like a parent.** Rejected: most
skaters this role targets don't have their own email, and requiring one just
to view a read-only screen is disproportionate to what the role does.

## Consequences

- `UserRole` needs a third case; the enum currently only has `coordinator` and
  `parent`.
- Issuing and resetting a code is a new coordinator/parent responsibility —
  small, but real UI surface that doesn't exist today.
- A skater's session is scoped by whatever the code was issued for (their
  family), not by an email identity — auth and identity are decoupled for this
  role in a way they aren't for the other two.
- If a skater later needs write access (claiming slots, logging hours), the
  PIN model likely doesn't carry over cleanly and this ADR would need
  revisiting — noted as the reason this is worth recording rather than an
  obvious implementation detail.
