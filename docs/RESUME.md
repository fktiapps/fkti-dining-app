# Resume here — paused 2026-08-23 ~03:30 EDT

Work on `claude/architecture-phases-1-3`, in the worktree `C:\pf\fkti-dining-arch`.
`C:\pf\fkti-dining` stays on `main` and has not been touched.

    cd C:\pf\fkti-dining-arch      # node_modules is a junction to the main repo's

## Done (4 commits, working tree clean)

- **1a — vendor Leaflet.** `vendor/leaflet/` + js/css/5 images; index.html and sw.js
  point at it; dead cdnjs runtime-cache branch removed. Smoke test PASSED.
- **1d — archive the fleet.** 73 retired scripts moved to `scripts/archive/` with a
  README. All 35 rebuild steps still resolve. (Ran before 1b deliberately: it cut the
  1b edit surface from 27 scripts to 10.)
- **1b — `scripts/lib-tiers.mjs`.** Tiers, labels, evidence keys, cautiousness ranks,
  `parseTier()`, `setTier()`, `signoffFor()`, `readTierWrites()`. Ten live scripts now
  import from it. Verified behaviour-neutral: full rebuild, lint identical at
  **109 warnings / 0 errors**, no city-file content change attributable to it.

## Next, in order

1. **Finish 1c.** `setTier()` already writes `data/_tier_writes.jsonl` (gitignored)
   and flags `contradicts_signoff` / `contradicts_rejection`. Two things left:
   - `scripts/rebuild.mjs`: truncate the log at the start of a run, so it describes
     one rebuild.
   - `scripts/lint-data.mjs`: read `readTierWrites()` and report, by script name, any
     write that contradicts the gate. The import is already wired in.
   **The last rebuild logged 67 tier writes, 5 of them flagged
   `contradicts_signoff:true` — look at those first.** That is the mechanism working
   before its report exists.
2. **Phase 2 — payload split.** Plan in `docs/ARCHITECTURE-PLAN.md`. Chokepoint is
   `_renderDetail(p)` at index.html:1572; `render()` (1271) and `drawMarkers()` (1015)
   touch no detail fields, and `loadMenus()` is the pattern to copy.
3. **Phase 3 — tests.** `node:test`, cases listed in the plan.

## Found on the way, not yet fixed

- **`enforce-cited-claims.mjs` is not idempotent.** It prepends
  `[Held at "ask" 2026-08-20] The description below was not traceable…` to `gf_detail`
  on *every* run, with no guard, so the banner accumulates a copy per rebuild —
  himeji already carries several. `apply-gf-audit.mjs` has exactly the guard it needs
  (`if (!String(r.gf_detail || '').includes(...))`). This is why the post-rebuild data
  diff was **not** committed: the only real city-file change was one more round of this
  bug, and baking it in would have been wrong. Fix the guard, then rebuild once and
  commit the de-duplicated text as its own change.
- **`himeji_almondou` says 21 spices in `gf_detail`, 18 in `chef_bio`** (anecdote and
  japanese_sources_summary). Same fact, three places, one got corrected.
- Most city files show as modified after a rebuild purely from **CRLF normalisation**,
  not content. Check `git diff` content before believing a dirty tree.

## Verification commands

    node scripts/lint-data.mjs                       # expect 109 warnings, 0 errors
    node scripts/rebuild.mjs                         # ~5-8 min, buffered, takes a lock
    node scripts/static-serve.mjs &                  # then:
    node scripts/smoke-app.mjs                       # expect PASS

Baseline hashes and lint output from before any of this work:
`…/scratchpad/baseline-lint.txt`, `baseline-data.md5`.
