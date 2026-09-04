# Research: how other skating clubs enforce volunteer hours

**Date:** 2026-08-05
**Question asked:** do other clubs charge a fee when a family fails to
complete volunteer hours?

**Short answer:** yes, near-universally in some form. But the *mechanism*
varies structurally, not just in amount — which matters more for the data
model than the answer to the original question.

## Evidence quality

Only one policy was read in full: **Burnaby Skating Club**, quoted directly
below. Two other policy PDFs (Woodbury FSC handbook, CFSC volunteer policy)
returned 403 and could not be verified. Figures in the "amounts observed"
section come from search-result summaries across many club sites and are
**not individually attributed** — treat them as a range, not as facts about
any named club.

---

## Enforcement models observed

Four structurally different mechanisms, not variations of one:

### 1. Per-hour fee assessed after the season

A bill for each unworked hour. Reported amounts range from **$10 to $50 per
hour**. Sometimes blocks next season's registration until paid. **This is
FWISC's model.**

Linear: 9 of 10 hours completed means being billed for 1.

### 2. Refundable deposit, all-or-nothing

A deposit charged at registration and returned only on completion.

> "Members will receive an invoice of $200 through Uplifter … to be paid at
> the time of registration." — Burnaby SC, refunded "by August 31, 2026, if
> your required volunteer hours are completed."

Several clubs make the no-proration rule explicit: partial hours earn nothing,
and deposits are not pro-rated. Some use a **postdated cheque** held by the
club and cashed on failure, destroyed on completion.

**This breaks a linear ledger.** Under all-or-nothing, 9 of 10 hours has
exactly the same financial consequence as 0 of 10. The penalty is a step
function at a threshold, not a rate.

### 3. Upfront buyout / opt-out

Pay instead of working. Reported at **$100–$500** per family. Chosen at
registration, so the obligation never enters the ledger at all.

### 4. Registration hold

Non-completion blocks renewal rather than generating a charge.

Models combine — a club may offer a buyout *and* assess a fee on whoever
didn't take it.

---

## Other findings that bear on the data model

### Obligation is per family, not per skater — confirmed elsewhere

> "The number of hours is per immediate family (member), not per skater, and
> is based on the highest skater designation in the family." — Burnaby SC

Supports [ADR 0002](../adr/0002-volunteer-hours-obligation-model.md).

### …but the amount owed may be *derived*, not a constant

Burnaby sets it from skater level: Bronze B families owe 10, Silver/Gold/
Diamond families owe 15 — "based on the highest skater designation." Another
club reportedly uses 5 hours per skater capped at 10 per family.

So "hours owed" is a **computed value** — from skater level, or skater count
with a cap — not a fixed number per membership. ADR 0002 assumption 1 said
the obligation does not scale with skater count; that holds for Burnaby, but
the amount still varies by skater attributes.

### Minimum age for skaters to earn credit — confirmed as a real concept

Burnaby requires Program Assistants be "at least 12 year old and have adequate
skating skills." FWISC's threshold was described as roughly fifth grade.
Confirms **eligible contributor** is a real domain concept, with the threshold
varying by club — and note Burnaby gates on *skill* as well as age.

### The unit may not be hours

Burnaby counts **credits**, not hours. If a task is worth N credits regardless
of how long it takes, the unit of obligation is not time. Worth checking
whether FWISC's "hours" are literal clock hours or a shift-based unit.

### Board members are sometimes exempt — contradicts FWISC

> "All board members who completes a minimum of one year fulfilment are
> automatically exempt from the volunteer credit requirements." — Burnaby SC

FWISC was described as obligating board members like everyone else. So
**exemption rules are a real axis of variation**, and exemption can be
conditional on service history.

### Carryover is explicitly forbidden

> "Volunteer hours cannot be carried over into the subsequent year(s)."
> — Burnaby SC

The season boundary is hard: balances reset, they do not roll forward.

### The incumbent is a Google Form

Burnaby records credits through a "Volunteer Credit Recording Sheet" submitted
via Google Form. That is the actual competition — free, familiar, already
working.

---

## Consequence for RinkConnect

The original claim in [ADR 0003](../adr/0003-hours-ledger-is-a-financial-record.md)
— that penalty policy is cheap because it is "a fee amount and a flag" — is
**wrong**, and this research is what corrects it. A per-hour fee, an
all-or-nothing deposit, an upfront buyout, and a registration hold are not
one mechanism with different numbers. They differ in when money moves, whether
partial completion has value, and whether the obligation exists at all.

This does not argue against multi-tenancy — the *problem* is clearly universal,
which strengthens [ADR 0001](../adr/0001-multi-tenant-platform.md). It argues
that the enforcement model is a genuine structural axis, and that per ADR
0001's sequencing note, v1 should implement FWISC's per-hour fee concretely
and let a second real club drive the abstraction.

## Sources

- [Burnaby Skating Club — Volunteer Program Policy](https://www.skateburnaby.ca/pages/about-us/policies/volunteer-program-policy/) (read in full)
- [Woodbury FSC Member Handbook 2025-2026](https://cdn2.sportngin.com/attachments/document/1353-2691896/2025-2026_WFSC_Member_Handbook.pdf) (403)
- [CFSC Volunteer Policy](https://www.gomotionapp.com/mncfs/UserFiles/Image/QuickUpload/cfsc-volunteer-policy--updated-oct-2021_020039.pdf) (403)
- [St. Louis Skating Club — Membership](https://stlouisskatingclub.org/join/)
- [Sunshine State FSC — Volunteer](https://sunshinestatefsc.com/volunteer/)
- [Sioux Falls FSC — Volunteer](https://www.sffsc.com/parents/volunteer/)
- [Peaks FSC — Volunteering](https://www.peaksfsc.com/volunteering)
- [Breezy Point FSC — Volunteer Events](https://www.breezypointfsc.com/page/volunteers)
- [Magic City FSC — Fundraisers and Volunteering](https://www.magiccityskate.com/fundraisers-and-volunteering)
- [Waupun FSC — Costs](https://www.waupunfigureskating.com/about/costs/12352)
- [Mission Skating Club — Policies](https://missionskatingclub.com/club-info/policies/)
- [Drayton Valley Skating Club — Rules & Regulations](https://www.dvskatingclub.ca/pages/about-us/club-rules-regulations/)
- [Brampton-Chinguacousy SC — General Policies](https://bramptonsc.uplifterinc.com/pages/POLICIES/General-Policies/)
- [Vancouver Velocity — Volunteer Program](https://www.vancouverspeedskating.com/volunteers/volunteer-program/)
