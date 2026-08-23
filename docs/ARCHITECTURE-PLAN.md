# Architecture plan — 2026-08-23

Five structural changes, sequenced and costed. Written after a fresh-eyes read of
index.html, sw.js, the 33-step rebuild pipeline and the data layer.

Every phase ends the same way: branch, `npm run rebuild`, `npm run lint`,
`npm run smoke`, push the branch, Greg merges. Preview discipline is restored —
nothing here goes straight to main.

Nothing in this plan runs while `data/.rebuild.lock` exists.

## Cost basis

Estimates are session tokens for one agent working sequentially — no fleet.
Calibrated against the project's own measured numbers in handoff.txt section J
(a citation-verify shard ran 90k–260k, median ~150k; a Tokyo menu shard 200k–330k)
and against the ~100k spent on the exploratory read that produced this plan.

The anchor worth holding onto: brute-forcing the remaining 173 verify shards is
~26M tokens, and that arithmetic is why Greg left Max. **This entire plan,
including the part I recommend against, is ~1.9M — about 7% of that number.**

Percentages below assume a Pro month of roughly 8.5M tokens. That figure is an
assumption, not a published number. Substitute a real one from a month of usage
and the ratios between phases all hold.

| Phase | Work | Tokens | % Pro month |
|---|---|---|---|
| 1 | Foundation — vendor Leaflet, `lib-tiers.mjs`, tier-write log, archive one-shots | 360k | ~4% |
| 2 | Payload split — pins vs detail | 250k | ~3% |
| 3 | Test harness over tier precedence | 140k | ~1.6% |
| 4 | Paid-city gating (defer until there is a buyer) | 175k | ~2% |
| 5 | Full observation ledger (**not recommended as a project**) | 1.0M | ~12% |
| | **Phases 1–3 — the recommendation** | **750k** | **~9%** |
| | Everything | 1.93M | ~23% |

Variance is asymmetric. Phase 1–3 estimates are firm: bounded, mechanical, and
verifiable by lint. Phase 5 could be 1.5M and I would not be surprised.

---

## Phase 1 — Foundation (360k, ~4%)

Cheap, independent, and it de-risks everything after it. Do this first.

### 1a. Vendor Leaflet (20k)

`index.html` loads Leaflet from cdnjs and `sw.js` precaches it with
`Promise.allSettled` — so a CDN blip during install leaves a permanently mapless
app with no error path. This is an offline-first app for people on foreign SIMs.
The sibling Learning repo already vendors its dependencies.

Drop `leaflet.min.js` + `.css` into `vendor/`, change two lines in `index.html`
and two in `sw.js`, bump `VERSION`, smoke test.

### 1b. `lib-tiers.mjs` — one home for the safety vocabulary (200k)

The tier→label map is copy-pasted into **27 scripts** plus `index.html`, and two
variants already exist (`'Dedicated gluten-free'` vs `'Dedicated · celiac-safe'` in
`apply-owner-signoff.mjs`). The five-key evidence list is duplicated the same 27
times. `lib-city.mjs` already proved this pattern works for JSON formatting; the
load-bearing safety vocabulary deserves it far more than indentation does.

Exports: `GF_TIERS`, `VEGAN_TIERS`, `GF_LABEL`, `VEGAN_LABEL`, `EVIDENCE_KEYS`,
and the important one:

```js
setTier(record, field, value, { by, why })
```

which validates against the enum **at the write site** and throws on anything else.
That single function permanently kills the bug that has recurred four times — prose
in a tier field, which produces no error, no log line, and a restaurant that is
simply absent from the app.

Rollout is a line-index codemod, not find/replace: exact-string patching fails on
this repo roughly half the time (non-ASCII, template literals, line endings — see
handoff lesson I). Write the codemod to a file, run it, review the diff, hand-fix
stragglers. Reserve ~40k of the estimate for one full rebuild + lint to prove the
output is unchanged.

### 1c. Tier-write audit log (80k) — the cheap 80% of Phase 5

`setTier()` also appends to `data/_tier_writes.jsonl`:
`{place_id, field, from, to, by, script, ts}`.

Four passes were silently overwriting Greg's human gate, each with a locally
defensible rule, and they were invisible because they left no marker the linter read.
With the log, `lint-data.mjs` gains one check: *did any pass write a tier that
contradicts an `owner_signoff` or a `_gate_rejections.json` entry for that id+field?*

That is the detection Phase 5 exists to provide, for 8% of its cost, without touching
a single record. If this ships and stays quiet for a few months, Phase 5 is unnecessary.

### 1d. Archive the one-shots (60k)

`scripts/` holds 192 files — 28 `tokyo-verify-shard-N.js`, ten `_tmp_*.py`, and a
dozen retired fleet workflows. Move everything not reachable from `rebuild.mjs` or
`package.json` into `scripts/archive/`, and confirm the rebuild still runs. Cheap
hygiene now, and it materially shrinks Phase 5's surface if that ever happens.

---

## Phase 2 — Payload split (250k, ~3%)

The highest user-facing value in this plan.

Measured on `data/tokyo.json` (4.45MB, 853 records):

```
chef_bio             1.14MB   26%
safety               0.58MB   13%
gf_detail            0.36MB    8%
vegan_detail         0.28MB    6%
what a map pin needs 0.44MB   <- 10% of the payload
```

`index.html` loads cities lazily by map position — but `sw.js` precaches every city
in the manifest on install: **18.8MB**. A celiac traveller installing this on a
Japanese eSIM downloads 18.8MB of chef biographies to see pins.

**This is a much smaller change than it looks.** Every detail-field reference in
`index.html` lives at line 1572+ inside `_renderDetail(p)`. `render()` (1271) and
`drawMarkers()` (1015) touch none of them, and `loadMenus()` already implements this
exact lazy-fetch-per-city pattern for `data/<city>_menus.json`. So:

1. A build step emits `data/pins/<city>.json` (id, name, lat, lng, tiers, category,
   cuisine_type, hours, flags, neighborhood) and `data/detail/<city>.json` (the rest).
   Derived from the city files — the city files stay canonical.
2. One `await ensureDetail(p)` at the top of `_renderDetail(p)`, merging the detail
   object onto the record. The ~50 downstream call sites do not change.
3. `sw.js` precaches pins only; detail is cache-on-demand, same as tiles.

Result: ~2MB install instead of 18.8MB, identical behavior. This is also the seam
Phase 4 needs — you cannot lazily gate a city you have already precached.

Budget the largest single slice here for the headless-Chrome smoke loop, which is
where this kind of change actually costs money.

---

## Phase 3 — Tests over tier precedence (140k, ~1.6%)

There is no test directory and no `test` script. `lint-data.mjs` checks data
invariants and `smoke-app.mjs` checks that it renders, but nothing exercises the
*logic* — and "a pass quietly undid a decision" is this project's recurring failure
mode, invisible by nature.

Use `node:test`; no new dependencies. Roughly 15–20 cases over fixture records:

- `setTier` rejects prose, accepts every enum value, on both axes
- an `owner_signoff` for a field survives each pass that writes that field
- a `_gate_rejections.json` entry is never re-proposed
- a newly-disproven claim re-asserts the hold on a bulk sign-off but **not** on a
  named ruling (`OWNER_RULED` in `enforce-cited-claims.mjs`)
- evidence guards fire on `gf_confidence` and **not** on `vegan_status`
- a vegan finding naming dashi/broth/tare/miso counts as GF evidence
- labels derive from tiers in both directions

Per handoff lesson D, this is the right place to spend: the single best data-quality
move of the last session was *deleting* a checker. Tests over the precedence rules
beat any new checker.

---

## Phase 4 — Paid-city gating (175k, ~2%) — defer

`const OWN_ALL=true` in `index.html` is the entitlement check, `gate.js` fails open
on network error by design, and `data/kanazawa.json` is a static file anyone can
fetch. Correct for a school trip, wrong for a product.

Move paid-city data behind `functions/api/city.js` checking the existing FKTI JWT;
`ensureCity()` hits the endpoint for locked cities; `sw.js` stops precaching them
and handles 401.

**Do not build this until there is a buyer**, and answer the design question first —
see decision B below. Depends on Phase 2.

---

## Phase 5 — The observation ledger (1.0M, ~12%) — recommended against

The architecturally correct answer. `data/<city>.json` currently does three
incompatible jobs at once: research database, pipeline scratch space, and mobile
payload. Thirty-three passes mutate it in place and nothing records which pass set
which field. Most of the expensive lessons in handoff.txt are symptoms of that one
decision — the gate overwrites, "measure drift against immutable inputs", the rebuild
lock, the queue undoing rejections three times.

The design: append-only `data/observations/*.jsonl` and `data/decisions/*.jsonl`,
never rewritten, plus a pure `resolve()` that is the only writer of `data/dist/`.
Passes emit observations instead of mutating records. Tier precedence lives in one
function instead of being a convention 13 scripts must remember.

**Why I do not recommend doing it now.** It is ~12% of a Pro month — closer to 20%
if reconciliation goes badly — for zero new user-facing value, and it carries real
risk of corrupting a dataset that took months and a retired 30-agent fleet to verify.
The migration is also less valuable than it sounds: the current records were written
in place and never recorded their provenance, so an honest migration seeds one
`legacy` observation per field dated today. You get the architecture, not the history.

Phase 1c buys the detection this was for, at 8% of the cost. Revisit only if the
tier-write log starts showing overwrites that 1c cannot explain.

---

## Sequencing

```
1a ─┐
1b ─┼─> 1c ──> 3 ──> (5, if ever)
1d ─┘
      2 ──> 4 (deferred)
```

1a/1b/1d are independent and can land in any order. 1c needs `setTier` from 1b.
Phase 3 is much cheaper after 1b because the enums are centralized. Phase 2 is
independent of all of it and can be pulled forward if install size matters more
than the vocabulary cleanup.

**If the budget halves:** do 1a, 1b, 1c and 2 — 470k, ~5.5% — and stop. That covers
the recurring safety bug, the mapless-app failure, the gate-overwrite detection, and
the 18.8MB install. Phase 3 is the first thing I would cut, and Phase 5 the first
thing I would never start.

## Also fold in

`himeji_almondou` currently says **21 spices** in `gf_detail` and **18** in
`chef_bio.anecdotes` and `chef_bio.japanese_sources_summary`. The fabrication
finding's one true correction was applied to one field of three. Fix during Phase 1 —
and note it is exactly the failure Phase 5 would make impossible.

## Decisions for Greg, banded by cost of being wrong

**A — expensive if wrong, read carefully.** Phase 5: go, or hold with 1c as the
substitute? My recommendation is hold. Reversible either way; the token spend is not.

**B — moderate.** Phase 4: when a traveller buys Kanazawa, must it work offline
afterwards? If yes, the Function serves the data once and the SW caches it
post-purchase, and the paywall is honest-but-not-airtight. If no, paid cities need
connectivity — a bad property for this app specifically.

**C — cheap, safest to just decide.** Still open from handoff.txt: purge or keep the
141 not-found Tokyo records, currently hidden rather than deleted.
