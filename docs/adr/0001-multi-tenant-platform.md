# 0001. RinkConnect is a multi-tenant platform

**Status:** Accepted
**Date:** 2026-08-05

## Context

RinkConnect began from a concrete problem at one club (FWISC, ~102 members):
volunteer responses arrive across text, email, and hallway conversation, and
an unpaid coordinator holds the roster in her head. Membership dues and board
compliance are tracked by hand in spreadsheets and Word documents.

The question was whether to build for FWISC specifically and generalize later,
or to treat "a club" as a first-class concept from the start.

The domain has real standardizing pressure in favor of generalizing. USFS
imposes common structure on every member club: skaters can only obtain USFS
membership *through* a club, board members must hold Background Check and
SafeSport certification, and clubs must keep their board rosters synced to
USFS. Every USFS member club therefore has some version of the same three
problems. The variation between clubs is plausibly in the numbers, not the
shape.

## Decision

RinkConnect is a multi-tenant platform serving many figure skating clubs.
Club is a first-class entity; all member, event, hours, membership, and
compliance data is scoped to a club.

## Alternatives considered

**Single-club application for FWISC, retrofit multi-tenancy later.** Rejected
by the owner. The argument for it was that with no production data and ~100
members, adding a club scope later is a cheap migration — an afternoon's work
— so the flexibility could be deferred at almost no cost. The argument against
is that the intent was always a product for clubs generally, and building with
that in view avoids assumptions that are annoying to unwind (global uniqueness
of member identity, single-club auth, hardcoded club constants).

## Consequences

**Accepted:**

- Every table carries a club scope from day one. Nothing is globally unique
  except users and clubs themselves.
- Authorization is per-club. A person may plausibly hold different roles at
  different clubs, and a coordinator must never see another club's roster.
- A club onboarding flow is needed eventually — creating a club, seeding its
  board, inviting members — for people the author has never met.
- Support burden extends to users with no personal connection to the author.
- Risk, explicitly accepted: effort spent on hypothetical club #2 is effort
  not spent making club #1 work. The mitigation is the sequencing note below.

**Deliberately NOT decided here:**

Multi-tenancy is about *data scope*. It is not the same decision as making
club *rules* configurable, and this ADR does not authorize the latter.

- Multi-tenant data is cheap: a club scope on each table.
- Configurable rules are expensive permanently: every "the club can choose"
  is a fork in the logic, a setting someone must understand, and a
  combination to reason about forever.

**Sequencing:** FWISC is the reference implementation. v1 should encode
FWISC's actual rules concretely, even rigidly. Configuration surface should be
added when a second real club presents a difference — so that observed
variation drives the setting, rather than guessed variation. See the open
question in [glossary.md](../glossary.md) on the volunteer hours obligation
model, which must be answered for FWISC before it can be generalized for
anyone.
