# 0007. RinkConnect is the club's source of truth for membership

**Status:** Accepted
**Date:** 2026-08-05

Boundary confirmed: dues **status** is in, as a manually set paid/unpaid flag.
Payment processing remains out, per [ADR 0006](0006-v1-scope.md).

## Context

The volunteer hours ledger is keyed to a membership
([ADR 0002](0002-volunteer-hours-obligation-model.md)), so RinkConnect needs
a member roster. The FWISC board agenda shows Membership and Volunteer as
**separate committees run by different people** — so the roster is not the
volunteer coordinator's document today.

That left two options: RinkConnect holds a periodically re-imported copy of a
roster owned elsewhere, or RinkConnect becomes the roster. The second was
chosen.

## Decision

RinkConnect is the club's system of record for club membership. The roster
lives here; other copies are derived from it, not the other way round.

## Consequences

### It creates a third role, which ADR 0006 did not scope

[ADR 0006](0006-v1-scope.md) scoped v1 around a coordinator and parents.
A membership chair now needs to add, remove, and update members — and per the
agenda that is a different person from the volunteer coordinator. The two
roles have different permissions: the coordinator needs to *read* the roster
to run events; she should not necessarily be the one who owns it.

"The coordinator will enter the members" is fine as a **bootstrap**, but it is
the wrong long-term owner if this is the club's official roster.

### It pulls part of the membership domain into v1

ADR 0006 excluded membership dues. That exclusion holds for *payment
processing*, but not cleanly for *membership state*:

> A club membership is contingent on dues being paid. A roster that cannot say
> whether a member is paid up is not a source of truth about membership.

The agenda's own membership report tracks exactly this — "102 members last
season, 77 registered for 2026-2027." That is a paid/unpaid distinction, and
it is the number the board actually looks at.

**Proposed boundary, consistent with ADR 0006's fee decision:**

- RinkConnect **stores** dues status as a value someone sets by hand
  (paid / unpaid / date, amount if useful)
- RinkConnect does **not** process payments, hold card details, or reconcile

Same principle as the volunteer fee: track the state, leave the money to the
treasurer. This is the part of the decision that most needs confirming.

### It does not make RinkConnect authoritative for USFS

Skaters hold USFS membership *through* the club, and the agenda records
keeping the board list synced to USFS as a standing task. USFS is upstream and
owns its own record. RinkConnect is the source of truth for **club**
membership only; USFS registration status is at best a mirrored field, and
must never be presented as authoritative — a skater who appears registered in
RinkConnect but is not registered with USFS cannot compete, and finding that
out at a competition is the worst possible failure mode.

### Season rollover becomes a real feature

77 of 102 members had re-registered by early July. If RinkConnect owns the
roster, that annual transition happens here: rolling a season, carrying
members forward, marking who has renewed. This was not in ADR 0006's scope
and needs to be, at least minimally.

### The initial import is a migration, not a bootstrap

Entering the roster stops being setup convenience and becomes the club's
official records moving into this system. It has to be correct, and it raises
the bar on the import path — CSV import from the existing spreadsheet rather
than manual entry.

### Governance: the club's records now live in a volunteer's side project

This is a real risk for FWISC and should be stated plainly rather than
discovered later. Mitigations that belong in v1:

- **Full data export**, available to the club at any time, in a format that
  opens in a spreadsheet. Non-negotiable if this is their system of record.
- Clarity about who owns the data and the account if the author stops
  maintaining it.

A club whose roster is trapped in an unmaintained app is worse off than one
with a spreadsheet.

## Alternative considered

**RinkConnect holds a synced copy; the roster stays where it is.** Rejected.
It avoids all of the above, but leaves two lists to drift apart — the failure
this decision exists to prevent — and would mean re-importing every time
someone joins, leaves, or changes an email mid-season.

## Open

- Does the membership chair get an account in v1, or does the coordinator
  hold the roster initially with the chair added later?
- Is dues status in or out? (The boundary proposed above.)
- What does the existing member list actually contain — one email per family
  or per parent? That shapes the member/account model more than anything
  decided here.
