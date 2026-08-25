# Resume here — updated 2026-08-24, overnight

Branch `claude/architecture-phases-1-3`, worktree `C:\pf\fkti-dining-arch`.
`C:\pf\fkti-dining` is untouched on `main`.

    cd C:\pf\fkti-dining-arch      # node_modules is a junction to the main repo's

**Phases 1, 2 and 3 are all complete.** Verified green: `npm test` 24/24,
`npm run lint` 108 warnings / **0 errors**, `npm run smoke` PASS, working tree clean.

## What changed, in one line each

| | |
|---|---|
| **1a** | Leaflet vendored — an offline-first app no longer fetches its map from a CDN |
| **1d** | 73 retired fleet scripts moved to `scripts/archive/` |
| **1b** | `scripts/lib-tiers.mjs` — one vocabulary, and `setTier()` refuses prose at the write site |
| **1c** | `data/_tier_writes.jsonl` + lint reports gate contradictions **by script name** |
| **2** | Payload split — install **17.5MB → 3.6MB**; detail in 34 on-demand chunks |
| **3** | 24 tests over the tier rules, mutation-checked |
| — | Fabrication prohibition written into `REVIEW_PROTOCOL.md` |
| — | 265 Tokyo sweep records hidden; 275 triaged; 3 duplicate pairs merged |
| — | Accumulating-banner bug fixed — 175KB of repeated warning text removed |

## Baselines to hold

- `npm run lint` → **108 warnings, 0 errors**, top-tier GF **39, gated 39**.
  (Was 109/40 before the T's Kitchen duplicate was merged away — both numbers moved
  by exactly one record, which is the expected arithmetic.)
- `npm test` → 24 pass.
- `npm run smoke` → PASS, `citeLinks 11`, `citeList 6`, `detailChars 4216`,
  `hiddenLeaked 0`, `tokyoShown 584`.

## MENUS — findings, 2026-08-25

Greg wants every menu inlined and clickable instead of linking out to Tabelog.
State: **2,048 of 2,594 visible records (79%) already have an inline translated menu.**
Eight cities are 91–100%. Tokyo is 17%. The gap is 546 records, 487 of them Tokyo.
`has_menu` is perfectly in sync with the menus files, so nothing researched is hidden.

**The 59 non-Tokyo gaps are NOT worth researching. Greg guessed this and he was right.**
- 7 were already researched and came back HONEST EMPTY — `toba_yuki`: *"No menu found."*
  after checking Tabelog listing, reviews and photo lists. `merge-menus.mjs` correctly
  declines to merge an empty menu.
- 49 sit in prepared-but-unrun shards (`_hiro3_menu_shards`, `_nagoya3_menu_shards`).
  Only 11 have a first-party site; the other 38 are Tabelog-only — the same situation
  that produced the 7 empties.
- 3 Nagano records have no website AND no menu_url. Nothing to fetch.
- Spot-checked four first-party sites directly (長命うどん, 隅吉, 久坊, 梅園): **NO MENU** on
  all four. Two more unreachable — `101brio.com` is a DEAD DOMAIN (feed to
  flag-hijacked-domains) and `asakusa-ponchan.com` has a self-signed cert.
- These shops do not publish itemised menus. Mark them "no menu published"; do not
  spend ~1M tokens re-deriving the same empty.

**Tokyo is the opposite, and do not extrapolate the above onto it.**
The 11 completed Tokyo shards: **90 records researched → 90 with a menu, 0 empties.
100% yield.** 332 of the remaining 487 have a first-party site (vs 11 of 49 elsewhere).
A WebFetch spot-check of Tokyo homepages looked discouraging and was MISLEADING —
WebFetch cannot follow a homepage through to its `/menu` subpage, which is exactly what
an agent does. Trust the 90/90.

**IN FLIGHT:** shards **s11, s12, s13** (45 records). First dispatched 2026-08-25
~01:20 EDT and all three died within seconds — the session hit its usage limit before
they finished reading the briefs, so they wrote nothing. Re-dispatched 05:41 EDT after
the limit reset, this time told to write their output file incrementally so an
interruption leaves harvestable partial work rather than nothing.

First thing on resume: check
`data/_menu_verdicts/tokyo_s1{1,2,3}.json`, harvest whatever landed (handoff lesson 8 —
harvest, don't wait), then `node scripts/merge-menus.mjs --apply` and rebuild.
Remaining after those: 25 shards, **~5.0–8.3M tokens** for all of Tokyo. Report yield
and cost per shard so Greg sets the pace.

## Next, in priority order

1. **Existence gate for the 63** — REQUIRED before any enrichment, now that
   `REVIEW_PROTOCOL.md` forbids fabrication. 34 sweep records have no website, no
   `menu_url` and no enrichment, and 26 of those sit in 9 centroid clusters with each
   other. Nothing has shown they exist. Settle each against a citable source, purge
   what is not there, and only then enrich survivors. `data/_sweep_triage.json` has
   the per-record breakdown.
2. **Enrich bucket A** (63 records, ~1.3–1.9M tokens) — every field carrying its
   source, empty where sources are silent.
3. **Bucket B menus** (179 records, ~2.3–3.9M) — cheaper, later, menu-decode only.
4. **Drop bucket** (33) — existence already failed; purge rather than carry.

## Open for Greg

- **Phase 5 (the observation ledger)** — still recommended AGAINST. 1c has now shipped
  and is doing its job; revisit only if the tier-write log shows overwrites 1c cannot
  explain.
- **Phase 4 (paid-city gating)** — deferred until there is a buyer. The payload split
  is the seam it needs, so it is cheaper now. Design question first: must a purchased
  city work offline afterwards?
- **Purge or keep the 141 not-found Tokyo records** — open since the last handoff.
- **`handoff.txt` is now out of date** in several places (record counts, the script
  inventory, the payload description). Worth a rewrite before the next fresh session.

## Known-good workflow notes

- **Wait for a rebuild by polling `data/.rebuild.lock` with an ABSOLUTE path.** A
  relative-path poll raced and returned early four separate times tonight, and each
  time the lint that followed was a torn read of a half-rebuilt dataset. A rebuild is
  ~4–5 minutes and buffers output, so the log lags behind real progress.
- **Most city files show as modified after a rebuild purely from CRLF normalisation.**
  Check `git diff` content before believing a dirty tree.
- Patch scripts: line-index edits, written to a file. Exact-string find/replace fails
  about half the time here, and `join(', ')` inside a single-quoted JS string in a
  patch generator will close the string early — that cost a run tonight.

## Fixed overnight

- **The accumulating-banner bug is fixed.** It was far worse than first measured:
  `enforce-cited-claims.mjs` AND `apply-owner-signoff.mjs` both prepended a bracketed
  note to `gf_detail` unguarded, so both accumulated a copy per rebuild. 菓子屋 藤ノ宮
  carried **69 copies** — 39,470 characters, ~38,900 of them repeated — in text the app
  renders straight into the detail panel. 17 fields affected, 175KB of repeat.
  Both are guarded now, and `scripts/dedupe-detail-banners.mjs` collapses exact repeats
  and runs in the pipeline as defence in depth. 0 repeats after a full rebuild.

## Still not fixed

- **`himeji_almondou` says 21 spices in `gf_detail`, 18 in `chef_bio`** (anecdote and
  japanese_sources_summary). One fact, three places, one corrected.
- **`scripts/probe-existence-osm.mjs` yields 1 confirmation in 34.** Free, so it costs
  nothing to keep, but if it does not earn its place it should be deleted rather than
  maintained. Its real finding is the negative space: 33 of 34 records cannot be
  confirmed from the largest free open dataset there is. That is not proof they are
  phantoms and must not be read as one.
