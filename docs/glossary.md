# RinkConnect Glossary

Domain terms for the FWISC volunteer, membership, and compliance domains.
A term belongs here once we've agreed what it means. Terms marked
**UNRESOLVED** are known ambiguities currently blocking design decisions.

Primary source: FWISC board meeting agenda, 07/14/2026.

---

## FWISC

The club. Meets at PSM Icehouse. Governed by an elected board that meets
bi-monthly. Mission is to provide figure skating opportunities to competitive
and recreational skaters of all ages and abilities.

## USFS (U.S. Figure Skating)

The national governing body. A skater must hold USFS membership to compete,
and can only obtain it **through a club** — FWISC collects and remits it.

USFS is also a system of record the club must keep in sync: the agenda records
"Board member list has been updated on USFS" as an administrative task. The
club does not own this data; it reports into it.

## Member

A family or individual registered with FWISC for a given season. Two types
appear in the membership report:

- **Regular** — 98 of 102 in 2025-2026
- **Associate** — 4 of 102 in 2025-2026

*Open: what distinguishes an associate member, and do they owe hours?*

**Scale, as of the 07/14/2026 agenda:** 102 members at the close of
2025-2026; 77 registered for 2026-2027 as of 07/03/2026. Board of ~14.
This is the whole user population.

## Board member — **RESOLVED**

An elected subset of the membership (~14 people). Board members owe volunteer
hours **like every other family**, plus additional duties:

- verifying every skater's membership is current and paid through the club
- keeping board compliance current (see **Compliance**)
- committee responsibilities — Membership, Volunteer, Fundraising, Special
  Events, Publicity/Communications, Newsletter, Junior Board

Known roles: President (Monica McClure), Treasurer (Angela Zimmerman),
Skating Director (Alena Lunin), Volunteer Report (Emily Wolfe), Fundraising /
Special Events / Publicity (Angela Bolin).

Earlier ambiguity — whether "board member" meant the governing board or any
dues-paying family — is resolved: **the hours obligation falls on all member
families, not just the board.**

## Club contacts — **RESOLVED**

A free-text list of club leadership — president, vice president, youth
coordinator, coach, etc. — with name, role, and email, maintained directly by
the coordinator.

Started as a request for a skater-to-skater "directory"; grilling revealed
that wasn't actually wanted. This is a static staff contact card, not a peer
directory, and not opt-in — these are public club roles, not families
choosing to share personal information. **Not** linked to `Person`/`Family`
records: some roles (a coach) may not correspond to a registered member at
all. See [ADR 0013](adr/0013-club-contacts-is-not-derived-from-membership.md).
_Avoid_: directory (implies something peer-to-peer, or derived from the
roster — this is neither).

## Coordinator — **UNRESOLVED**

The person who creates and manages events and gets volunteer slots filled.
Unpaid. Collects responses today across text, email, and in-person
conversation, and holds the roster in memory. Primary user of the app.

*Open: the agenda lists **Emily Wolfe** as the Volunteer Report. Is she the
coordinator, and is she the person who was pitched?*

## Compliance

Mandatory certification required to serve on the board — "compliance is
mandatory to continue as a FWISC Board Member." Tracked per person as two
independent requirements:

- **Background Check**
- **SafeSport** — U.S. Figure Skating's abuse-prevention certification
  (referred to informally as "skate safe")

Both expire and require renewal; the agenda tracks in-compliance and
non-compliant lists separately, and distinguishes "needs renewal" from never
completed. Status is currently maintained by hand in a Word document.

## Volunteer hours

The unit of volunteer obligation, owed per season.

**One ledger — RESOLVED.** There is a single hours balance per obligated
unit. Hours worked by anyone eligible credit that one balance. There is no
separate per-skater target and no spillover rule between balances.

**Eligibility (pending confirmation).** The fifth-grade / minimum-age
threshold is therefore *not* a second obligation — it determines who may be
assigned to a slot and have their time counted. A younger sibling can attend
but their time credits nothing.

**What the ledger is keyed to — UNRESOLVED.** "Family" is not yet a defined
entity. See **Obligated unit**.

*Open: does the **Junior Board** relate to skater participation in volunteer
work, or is it unrelated club governance?*

## Family

A household's ongoing relationship with the club. Created once, persists
across seasons. Holds household identity — name, address, contact details,
and the people in it. **Never** holds anything that resets annually.

## Season membership

A family's registration for one season. Created annually. Holds dues status,
`hoursOwed`, the volunteer hours ledger, and which skaters are registered that
season. This is what the board counts: *"102 members last season, 77
registered for 2026-2027."*

Where earlier decisions say the hours ledger is keyed to "the membership,"
they mean this. See [ADR 0008](adr/0008-family-and-season-membership.md).

A **lapsed** family is simply one with no season membership for the current
season — not deleted, not flagged. Its history is intact and re-registering
creates a new season membership.

## Dues status

A manually set **paid / unpaid** flag on a season membership. RinkConnect
stores it; it never processes payment.
See [ADR 0007](adr/0007-rinkconnect-owns-the-membership-roster.md).

## Obligated unit

The **membership** owns the volunteer hours ledger — one balance per
membership per season. Informally "the family." See
[ADR 0002](adr/0002-volunteer-hours-obligation-model.md).

Assumed pending confirmation with the club: that the obligation does not
scale with skater count, that membership rather than household is the correct
key, and that associate members owe hours on the same basis as regular
members.

## Eligible contributor

A person who may work an event and have their hours credit a membership's
ledger: the adults on the membership, and skaters at or above the club's
minimum age / grade threshold. Eligibility is a property of the **person**;
obligation is a property of the **membership**.

## Skater (login role) — **RESOLVED**

A third, read-only login alongside coordinator and parent: a skater sees the
same events list and family hours balance a parent sees, independent of
whether a parent relays that information. Requested by Alena Lunin (PSM
Icehouse) so a skater isn't dependent on a parent sharing info.

This is a different axis from **Eligible contributor** below — that's about
whose hours credit a balance; this is about who can log in and see what.
`Person.isSkater` already exists as a flag but has no login of its own yet.
No write access — a skater cannot claim slots or log hours.

**Authenticates via a PIN or invite code**, issued by a parent or the
coordinator — not an email/password account like the other two roles. Most
skaters are minors without their own email; requiring one for a read-only
screen didn't fit. See [ADR 0012](adr/0012-skater-login-uses-a-pin-not-email.md).

## Event

Something the club runs that requires volunteers. Carries a list of
**volunteer slots** and a registration **deadline** — FWISC doesn't restrict
who can attend an event, so deadline is the operative date, not audience. See
[ADR 0010](adr/0010-event-deadline-replaces-who.md). The agenda's "Revenue
Events" and "Special Events" suggest events have types with different
purposes.

## Volunteer slot

A single shift on an event: a role label, a time range, and an hour value.
The coordinator defines slots; a parent claims a whole slot; hours come from
the slot rather than from parent input. Chosen over an open-pledge model
because the coordinator's real need is **coverage** — a named person on the
check-in desk at 9am — not an hours total.
See [ADR 0005](adr/0005-fixed-slots-and-signup-lifecycle.md).

## Signup states — `pledged` / `submitted` / `approved`

Three different numbers, frequently conflated:

- **Pledged** — a slot is claimed; the event has not happened.
- **Submitted** — the parent reports having worked it.
- **Approved** — the coordinator confirmed it.

**Only approved hours count toward a balance or reduce a fee.** A balance
computed from pledges would let a family claim twenty hours, attend none, and
appear to owe nothing.

## Season

The membership and obligation year, labeled e.g. "2026-2027". Runs roughly
July through May/June — registration for 2026-2027 was open by early July
2026, and board meetings run 07/2026 through 05/2027. *Inferred from meeting
dates, not confirmed.*

---

## Parked — membership fees

Annual USFS dues, paid per skater, collected by the club. Currently tracked in
spreadsheets or on paper. Involves real money moving through the club, and a
Treasurer who reports on it.

Deferred pending a scope decision. See the scope question in the ADR backlog.
