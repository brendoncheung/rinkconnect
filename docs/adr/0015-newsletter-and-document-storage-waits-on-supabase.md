# 0015. Newsletter and document storage waits on the Supabase migration

**Status:** Accepted
**Date:** 2026-09-04

## Context

The club asked for a documents section (registration forms, payment links)
and a newsletter section — both need to hold files. RinkConnect has no file
storage today. The obvious shortcut is Firebase, since it already hosts the
app — but Firebase is deliberately **hosting only** (see CLAUDE.md); data and
auth are Supabase, and there are no Supabase migrations yet, so real storage
can't be wired to anything real regardless of provider.

## Decision

Build the newsletter/document data model now, against the existing
`lib/data/service/datasource.dart` seam (already stubbed, not yet wired to the
store). Wire real file storage — expected to be Supabase Storage, to match the
rest of the backend — once the Supabase migration lands. Until then, a
document or newsletter's file reference is just a pasted external link (e.g.
Google Drive) in the same field a real upload will later populate.

## Alternatives considered

**Enable Firebase Storage now.** Rejected: Firebase's role in this stack is
explicitly hosting-only. Adding Storage there would mean two backends holding
application data (Supabase for everything else, Firebase for files),
contradicting the stated direction with no plan to unwind it later.

**Block the feature entirely until the Supabase migration lands.** Rejected:
the external-link fallback delivers the feature the club actually asked for
(a place to find these documents) without waiting on unrelated backend work,
and the data model doesn't change when real upload arrives later — only what
populates the field does.

## Consequences

- No new storage bucket, upload UI, or file-size/type policy needs deciding
  now — those are real decisions this defers, not skips.
- The model must not bake in an assumption that the field holds an uploaded
  file's own URL specifically — it's a generic "where the file lives" pointer,
  satisfied equally by a pasted link today or a Supabase Storage URL later.
- When the Supabase migration lands, this is the natural point to revisit
  upload/storage policy — worth flagging there rather than letting it default
  silently.
