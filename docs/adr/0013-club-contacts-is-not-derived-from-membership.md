# 0013. Club contacts is a free-text list, not derived from membership

**Status:** Accepted
**Date:** 2026-09-04

## Context

The original request from the club was for a "directory" — a way for
**skaters to contact each other**, opt-in. On grilling, this turned out not to
be what was wanted at all: the actual ask is a static list of **club
leadership** (president, vice president, youth coordinator, coach) with name,
role, and email — not a peer directory, and not opt-in, since these are public
club roles rather than families choosing to share personal information.

Some of these roles — a coach, in particular — may not correspond to a
registered `Family`/`Person` at all. Board members mostly are members
(see the glossary's Board member entry), but a coach may be a paid contractor
with no season membership.

## Decision

**Club contacts** is a free-text list the coordinator types in and maintains
directly — name, role, email per entry. It is **not** linked to `Person` or
`Family` records.

## Alternatives considered

**Derive the list from `Person` records tagged with a board role.** Rejected:
doesn't work for anyone in the list who isn't a registered member (a coach),
and adds a role-tagging concept to `Person` for a feature that's really just a
short static list, five or six entries long.

## Consequences

- A future reader looking at this feature will reasonably ask "why isn't this
  linked to the membership roster, when board members already exist as
  members?" — this ADR is that answer.
- The list has no referential integrity with the roster: if a board member's
  `Person` record changes name or leaves the club, the coordinator updates the
  contacts entry separately. Accepted, since the list is small and
  coordinator-maintained already.
- No opt-in/consent flow is needed — resolved as out of scope, since the
  original privacy concern (sharing minors' or families' contact info) doesn't
  apply to public club-leadership roles.
