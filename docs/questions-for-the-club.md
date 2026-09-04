# Questions for the club

Every open question from the ADRs, in plain language, grouped by who can
answer it and ordered by how expensive it is to get wrong.

Phrasing is deliberately non-technical — these go to volunteers, not
engineers.

---

## Tier 1 — blocking. Schema work should not start without these.

Getting these wrong means rebuilding, not adjusting.

**For the volunteer coordinator (Emily Wolfe, if she is in fact the
coordinator — confirm that first):**

1. ~~How many hours does a family owe, and by what rule?~~ **No longer
   needs asking.** The coordinator sets the number per member; the software
   stores what she enters. However she decides it — flat, per head, by skater
   level — is her judgement, and requires nothing from the system.

   Worth confirming only in passing: **is she comfortable being the one who
   sets it**, or does the board set a figure she applies? That is a question
   about authority, not arithmetic, and it only affects who sees the edit
   screen.

2. **If two separated parents each have their own membership for the same
   skater, is that one hours obligation or two?**

   *Why it matters: this is the only question here whose answer could
   invalidate a decision already made. Everything is currently built around
   one balance per membership.*

3. **When you say "hours," do you mean actual clock hours, or credit for
   working a shift?** If someone works a 2-hour shift that only takes 90
   minutes, do they get 2 or 1.5?

   *Why it matters: at least one club counts "credits" per task rather than
   time. If FWISC does too, the unit of the whole system is wrong.*

4. **Do associate members owe volunteer hours?** (There were 4 associate
   members and 98 regular last season — what makes someone associate?)

---

## Tier 2 — cheap to answer now, awkward to retrofit.

**On the fee:**

5. **How is the fee for unfinished hours calculated?** A flat amount, or per
   unworked hour? What is the rate?

6. **If a family finishes 9 of 10 hours, do they pay for 1 hour, or is it
   all-or-nothing?**

   *Why it matters: several clubs explicitly do not pro-rate — partial hours
   earn nothing. That is a completely different calculation, not a different
   number.*

7. **Who has the authority to waive or adjust someone's hours?** Just the
   coordinator, or does it need the board?

8. **Can two families trade or transfer hours between them?** Has anyone
   ever asked?

   *Why it matters: much easier to forbid now than to discover people have
   been doing it informally.*

**On how shifts actually work:**

9. **If someone signs up for a 2-hour shift and only works 1.5, what
   happens?** Can you credit them a different number than the shift was
   worth?

10. **What happens when someone signs up and doesn't show?** Anything, or is
    it just absorbed?

11. **Can a parent cancel a shift they signed up for? How late?**

    *Why it matters: an abandoned shift is worse for you than one nobody
    claimed, because you thought it was covered.*

12. **Do board members owe hours like everyone else?** (You said yes — worth
    confirming, because at least one club automatically exempts board members
    after a year of service, and that would be a real difference between
    clubs.)

13. **What exactly is the age or grade cutoff for a skater's own hours to
    count?** Is it age, grade, skill level, or a judgement call?

---

## Tier 3 — useful, not blocking.

14. **When does the season start and end for hours purposes?** Do unfinished
    hours ever carry into next year? *(At least one club explicitly forbids
    carryover.)*

15. **Is the Junior Board connected to skaters volunteering, or is it
    something else entirely?**

16. **Can I see the minutes from the June 23 meeting?** The July agenda
    references them, and the volunteer discussion would be in there.

    *Why it matters: how volunteer hours work is currently documented
    nowhere except in conversation. The minutes are the only written source
    that might corroborate it.*

**For the treasurer (Angela Zimmerman):**

17. **How do unpaid volunteer fees get collected today?** Added to next
    season's registration, invoiced separately, something else?

    *Why it matters: v1 computes what's owed and hands it over. Knowing what
    format is actually useful to her costs nothing now.*

---

## Do not ask these — observe them instead

The weakest evidence in this project so far has been what people *said* about
their own behaviour. "I didn't have time to read the email" is what someone
tells a club volunteer when they didn't sign up; it may be true, or it may be
the polite version. Design decisions built on it are built on sand.

So for the coordinator, don't ask whether she'd use an app. She'll say yes —
she already loved the pitch, and enthusiasm at pitch time costs nothing and
predicts nothing.

**Ask her to walk you through the last event she ran, start to finish:**

- How did people find out about it?
- Where did the yeses arrive — text, email, in person, at the rink?
- How did she keep track of who was coming?
- How did she know afterwards who actually showed up and for how long?
- Where is that written down right now — spreadsheet, notebook, phone, head?
- What was the most annoying part?

Then ask to **see** the artefact. The actual spreadsheet, the actual notebook
page. What she reaches for is worth more than anything she says about it, and
it is also your real competition — the tool being replaced has to be beaten,
not just matched.

One question worth asking directly, because the answer is genuinely
informative either way:

**"What would have to be true for you to stop keeping this in your head?"**
