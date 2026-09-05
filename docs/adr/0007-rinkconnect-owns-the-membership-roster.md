# 0007. RinkConnect is the club's source of truth for membership

**Status:** Accepted
**Date:** 2026-08-05

## Context

The volunteer hours ledger is keyed to a membership
([ADR 0002](0002-volunteer-hours-obligation-model.md)), so RinkConnect needs a
member roster. The FWISC board agenda shows Membership and Volunteer as
**separate committees run by different people** — so the roster is not the
volunteer coordinator's document today.

That left two options: RinkConnect holds a periodically re-imported copy of a
roster owned elsewhere, or RinkConnect becomes the roster.

## Decision

RinkConnect is the club's system of record for club membership. The roster
lives here; other copies are derived from it, not the other way round.

Dues **status** is in scope as a manually set paid/unpaid flag — a roster that
cannot say whether a member is paid up is not a source of truth about
membership. Payment processing stays out, per [ADR 0006](0006-fees-computed-not-collected.md);
same principle as the volunteer fee — track the state, leave the money to the
treasurer.

## Alternatives considered

**RinkConnect holds a synced copy; the roster stays where it is.** Rejected.
It avoids every consequence below, but leaves two lists to drift apart — the
failure this decision exists to prevent — and would mean re-importing every
time someone joins, leaves, or changes an email mid-season.

## Consequences

- **A third role appears that [ADR 0006](0006-fees-computed-not-collected.md) did not scope.** A
  membership chair — per the agenda, a different person from the volunteer
  coordinator — needs to add, remove, and update members; the coordinator only
  needs to *read* the roster to run events. "The coordinator enters the
  members" works as a bootstrap but is the wrong long-term owner.
- **Dues status is now v1 scope.** The board's own membership report is a
  paid/unpaid count ("102 members last season, 77 registered for 2026-2027") —
  the number the board actually looks at — so the roster has to carry it.
- **RinkConnect is not authoritative for USFS.** Skaters hold USFS membership
  *through* the club; USFS is upstream and owns its record. USFS status is a
  mirrored field at best and must never be shown as authoritative — a skater
  who looks registered here but is not registered with USFS cannot compete,
  and discovering that at a competition is the worst possible failure mode.
- **Season rollover becomes a real feature.** 77 of 102 members re-registered
  by early July; that annual transition — rolling a season, carrying members
  forward, marking who has renewed — now happens here. Not in ADR 0006's
  scope; needs to be, at least minimally.
- **The initial import is a migration, not a bootstrap.** Entering the roster
  is the club's official records moving into this system. It has to be
  correct, which raises the bar to CSV import from the existing spreadsheet
  rather than manual entry.
- **Governance risk: the club's records now live in a volunteer's side
  project.** State it plainly. Mitigations that belong in v1: full data export
  in a spreadsheet format, available to the club at any time; and clarity on
  who owns the data and the account if the author stops maintaining it. A club
  whose roster is trapped in an unmaintained app is worse off than one with a
  spreadsheet.

## Open questions

- Does the membership chair get an account in v1, or does the coordinator hold
  the roster initially with the chair added later?
- ~~Is dues status in or out?~~ **DECIDED: in, as a manual paid/unpaid flag.**
  See Decision above and [ADR 0008](0008-family-and-season-membership.md),
  which puts it on `SeasonMembership`.
- What does the existing member list actually contain — one email per family
  or per parent? That shapes the member/account model more than anything
  decided here.
