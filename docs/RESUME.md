# Resume here — updated 2026-08-27, grinder run (4th consecutive blocked run)

## READ THIS FIRST — WebFetch is STILL network-blocked in this environment
Fourth grinder run in a row confirms this. Retested this run against TWO
throwaway URLs (en.wikipedia.org/wiki/Tokyo, and tabelog.com itself) — same
`EGRESS_BLOCKED` error both times, identical to the prior three runs. This is
the session's network egress policy, not a timeout or a per-site block.
WebSearch still works (snippet results only, no page fetch). Greg was already
push-notified on run 3 (16:28Z) and nothing has changed since, so this run did
NOT send a duplicate notification — do not keep re-testing this every 4 hours
without a human fixing the underlying policy, and do not re-notify every run
for the same unresolved issue; only notify again if the symptom changes.

**Do not write menu items from WebSearch snippets alone.** A snippet is a
search engine's summary, not a page you read — writing items from it violates
the fabrication rule (`sources` must be pages actually fetched and read).
**Before starting Step 2 research, test WebFetch against a throwaway URL
first.** If it is still EGRESS_BLOCKED, do not attempt research this run —
harvest/merge/rebuild only (Step 1), log it, and stop. THIS NEEDS A HUMAN:
four runs have now hit this identically, so it is not transient — Greg needs
to adjust this session's network egress policy before Step 2 can resume.

## Fixed this run (2026-08-27, 20:34Z run): live accumulating-banner bug in apply-audit-corrections.mjs
Same bug class as the ones below (enforce-cited-claims.mjs, apply-owner-signoff.mjs,
flag-vegan-gluten-traps.mjs), not previously covered: `apply-audit-corrections.mjs`
runs every rebuild and had 6 write sites unconditionally prepending a bracketed
note to `notes`. `kyo_senza_x` had reached **108 copies** of its closure banner
(28.8KB, ~27.5KB repeated) and `nagoya_creperiz` **107 copies** (24KB) before this
run's own rebuild caught it. Guarded all 6 sites with a `prependOnce()` helper;
wrote `scripts/dedupe-notes-banners.mjs` (same shape as `dedupe-detail-banners.mjs`)
to heal the existing damage — 50KB removed across 61 fields. Verified stable after
a second rebuild (no regrowth). Committed as fe8e264. **Worth a spot-check next run
that no further copies resurface, and worth grepping other one-shot correction
scripts in the pipeline for the same unguarded-prepend pattern if this keeps
recurring.**

## Fixed prior run (2026-08-27, 16:28Z run): 2 more residual banner duplicates
The dedupe pass from the prior run (ec6f3a7, `dedupe-menu-note-banners.mjs`)
did not fully clean the accumulation — this run's `merge-menus.mjs --apply`
still found and stripped one extra duplicate ⚠ soy-meat banner copy each in
`data/tokyo_menus.json` and `data/nagoya_menus.json`. Fixed as a normal part
of the merge/rebuild step (no new script needed — the existing dedupe logic
in the merge path caught it). Verified 0 errors after rebuild. Committed as
5f6683b. Worth a spot-check next run that no further copies resurface.

## Fixed prior run (2026-08-27, 12:35Z run): accumulating banner, third instance
`flag-vegan-gluten-traps.mjs` prepended its ⚠ warning to menu item `note`
fields unguarded — same bug class as `enforce-cited-claims.mjs` and
`apply-owner-signoff.mjs` (see "Fixed overnight" below), but this one wasn't
covered by that fix and was still live. 20 items had accumulated up to 73
copies (9KB notes, 154KB repeated text total) by the time this run's routine
rebuild caught it (it added a 74th copy to two records before the fix
landed). Write site now guarded; `scripts/dedupe-menu-note-banners.mjs`
collapsed the existing accumulation. Verified 0 repeats after a second
rebuild. Committed as ec6f3a7.

---
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

**SHARD STATE — READ THIS BEFORE RE-DISPATCHING.**
s11 and s13 are PARTIAL: 5 of 15 and 6 of 15 records. They were harvested from agents
that hit the usage limit mid-shard. 11 records, 519 items, 0 empties, 0 stray ids —
merged and rebuilt clean. s12 wrote nothing.

**THE TRAP:** scripts/agent-status.mjs calls a shard DONE when its output file exists,
so s11 and s13 now report done at a third complete. Do not trust that count. Compute
the real gap from the data instead: a record needs work if it is visible and absent
from data/<city>_menus.json. Re-dispatching s11/s13 must skip ids already present in
their verdict file, or the work is done twice.

**MY BRIEF HAD THE ENUM WRONG.** I told the agents gf/vegan take yes. The existing
4,000+ merged items use gf:gf and vegan:vegan, and empty string is also accepted
(140 gf, 183 vegan empties already shipped). The agents read tokyo_s0.json and followed
the real convention over my instruction, which is why the merge was clean. Fix the
brief before the next dispatch.

Tokyo: 584 visible, 133 inline (22.8%), gap 451. All cities: 2,084 of 2,594 (80.3%).
(Updated 2026-08-27 — these are exact counts computed from the data, not the
lying agent-status.mjs.)

**Exact shard state, 2026-08-27:** s0-s13 all started, s1 complete (15/15).
Records still missing per started shard: s0:7 s2:5 s3:7 s4:3 s5:7 s6:6 s7:7
s8:8 s9:12 s10:13 s11:5 s12:2 s13:1 — **83 records across started shards.**
s14-s38 (25 shards) entirely unstarted, **365 records.** 83+365=448 ≈ the 451
gap (small residual from hidden/dedup edge cases, not worth chasing).
**Next dispatch: finish s13 (1 record: tokyo_shinjuku_yataien, blocked this
run only by the WebFetch outage above — otherwise ready to research) or s12
(2 records), then work down the missing-count list before starting s14.**

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
