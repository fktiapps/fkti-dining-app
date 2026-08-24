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

## Baselines to hold

- `npm run lint` → **108 warnings, 0 errors**, top-tier GF **39, gated 39**.
  (Was 109/40 before the T's Kitchen duplicate was merged away — both numbers moved
  by exactly one record, which is the expected arithmetic.)
- `npm test` → 24 pass.
- `npm run smoke` → PASS, `citeLinks 11`, `citeList 6`, `detailChars 4216`,
  `hiddenLeaked 0`, `tokyoShown 584`.

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

## Still not fixed, deliberately

- **`enforce-cited-claims.mjs` is not idempotent.** It prepends its `[Held at "ask"…]`
  banner to `gf_detail` on every run with no guard, so the text accumulates a copy per
  rebuild; himeji already carries several. `apply-gf-audit.mjs` has exactly the guard
  it needs. Fix, rebuild once, and commit the de-duplicated text as its own change.
- **`himeji_almondou` says 21 spices in `gf_detail`, 18 in `chef_bio`** (anecdote and
  japanese_sources_summary). One fact, three places, one corrected.
