# Osaka sweep — 2-mile circle around Dotonbori

**Asked by Greg, 2026-10-26:** "add another major city — a 2 mile circle around Dotonbori in Osaka.
Expect to run out of tokens periodically, so make sure you have a viable restart structure."

## Restart in 60 seconds (read this first after any context loss)

1. `git log --oneline -5` — the last `Osaka sweep, batch N:` commit is where work stopped.
2. `node scripts/sweep/queue.mjs osaka stats`, which shows what's crawled, done, skipped and pending per phase.
3. Check the **Phase pointer** below, then `node scripts/sweep/queue.mjs osaka next <phase> 12`.
4. Write `scripts/add-osaka-sweep-b<N+1>.mjs` (copy the latest batch as the template) and run the
   **Batch method** below. Commit, push and verify the deploy, then update the Phase pointer and the
   log here and in memory (`osaka-sweep.md`).
5. If `next` returns nothing for the phase, crawl more (see **Crawl**), then move the phase pointer.

All state is committed under `scripts/sweep/osaka/`; nothing depends on the session scratchpad.
`work/` (raw fetched pages) is gitignored and re-fetchable.

## Geometry

- **Centre:** 34.6690306, 135.5015715. This is the OSM Nominatim `place=locality` 道頓堀 (fetched 2026-10-26).
- **Radius:** 3,219 m (2 miles). The manifest bounds are the circle's bounding box.
- **Tabelog sub-areas** (all in `config.json`):
  - Core: Namba/Dotonbori A270202 and Shinsaibashi A270201.
  - Mostly inside: Honmachi A270106, Awaza A270105, Matsuyamachi A270204, Ebisu/Shinsekai A270206.
  - Partly inside: Kitahama A270102, Tennōji A270203, Uehonmachi A270205, Tanimachi A270104, Bentenchō A270401.
  - Just outside, so skipped: Umeda/Kitashinchi A270101, Tenma A270103, Kyōbashi A270107.

## Files

| File | What |
|---|---|
| `scripts/sweep/osaka/config.json` | centre, radius, areas, sweep name |
| `scripts/sweep/osaka/lists.jsonl` | every Tabelog id seen on a list page (id, url, area, list genre) |
| `scripts/sweep/osaka/lists-done.jsonl` | which (area, genre) lists are fully crawled |
| `scripts/sweep/osaka/shops.jsonl` | one fetch per shop: geo, distance `m`, address, genre, seats, reviews, rating, badges |
| `scripts/sweep/osaka/queue-status.jsonl` | append-only `done` / `skipped` / `deferred` log (latest line per id wins) |
| `scripts/sweep/osaka/vegan-seeds.jsonl` | vegan/GF candidates from HappyCow / FindMeGlutenFree / Vegewel, matched to Tabelog ids |
| `data/osaka.json`, `data/osaka_menus.json`, `data/osaka.ja.json` | the city itself |
| `scripts/add-osaka-sweep-bN.mjs` | one script per batch (via `scripts/lib-sweep.mjs`) |

Tools (all city-agnostic, in `scripts/sweep/`):
- `crawl-lists.mjs <city> <genre|all> [area]` and `crawl-shops.mjs <city> [max]` (both resumable)
- `queue.mjs <city> stats|next|mark`
- `fetchshop.mjs <city> <N> <urls>`, which pulls the listing plus N reviews into `work/`
- `pincheck.mjs <city> <in.json>`, which compares GSI and OSM against the Tabelog point
- `bootstrap-city.mjs`, used once

## Phases (priority order; each is worked nearest-first)

| Phase | Queue filter | Source of candidates |
|---|---|---|
| **vegan** | vegan/vegetarian/macrobiotic genre, Tabelog vegan tag, or a seed | HappyCow, FindMeGlutenFree and Vegewel for Namba/Shinsaibashi; Tabelog `vegetarian` lists |
| **ramen** | Tabelog genre ramen/tsukemen/maze-soba | `crawl-lists osaka ramen` (742 ids, 2026-10-26) |
| **mom** | ≤20 seats, any genre | `crawl-lists osaka <genre>` for okonomiyaki, takoyaki, kushikatsu, udon, izakaya, yoshoku, kissa, sushi, etc. |
| **rest** | everything else in radius, notable first (awards, Tabelog 100, reviews) | `crawl-lists osaka all` plus genre lists |

Osaka specifics to watch: okonomiyaki, takoyaki and kushikatsu are wheat-batter foods, so GF is almost always `no`, and only an operator's own words lift it. Dashi in udon, okonomiyaki and takoyaki makes vegan `no` unless the shop says otherwise.

## Batch method (same rules as the Ginza sweep, see memory ginza-half-mile-sweep.md)

- 4 records per batch, OMNI unless an owner-run single shop has a **named** owner in a source (then MOM_AND_POP).
- `fetchshop.mjs osaka 6 <url>` reads the listing and reviews. Also read the official site when the listing links one.
- Every claim needs a source. Never back-convert romaji names to kanji. No pronouns. Don't turn one diner into "regulars".
- GF is never above `options` without Greg (queue it). Menu item values: gf ∈ gf/ask/no/'', vegan ∈ vegan/ask/no/''.
- Hours keys are Mon = 0 … Sun = 6. Use 'unknown' with descriptive `hours_raw` when nothing is listed.
- Existence status uses confirmed/probable/unresolved/…, never 'likely'. Skip listings with no reviews in 2025–26 (call `skip(id, reason)`).
- Pins: Tabelog point plus GSI (go/lot ≤150 m) or OSM. Ward-only GSI with no OSM gives `loc_approx:'single'`. Two shops on one Tabelog point inside a food hall or building gives `loc_approx:'block'`.
- Ramen records carry the full `ramen` block: profile (6 keys), pantheon and profile_basis, with every dimension sourced.
- Gates: node --check, the pronoun grep, the kanji-name grep, run, build-payload, bump-build, a lint diff vs the previous batch, smoke, `npm test`. Then commit, push, verify sw.js dcd-vNNN plus the pins.

## Phase pointer

**Current phase: ramen** (lists crawled; shop pages: run `node scripts/sweep/crawl-shops.mjs osaka` until it reports 0 to fetch). Next batch: b3. After ramen thins out: vegan seeds (FMGF `/jp/osaka` page = 37 businesses, HappyCow `/asia/japan/osaka/`; Vegewel 403s), then mom.

## Log

- 2026-10-26: infra 3ff54ed (tools, config, queue, plan); ramen lists crawled (742 ids).
- 2026-10-26: **batch 1** b6fbdc5 v537 — Osaka registered (10th city); Kinryū Ramen, Dōtonbori Kamukura, Kinkuemon, Rāmen Hayashida (all Dotonbori, ramen blocks). Lesson: proper menu/brand names (Osaka Black, Kinjou Shoyu, Maximum Koitama, Daisendori) stay romaji in JA — don't katakana/kanji them.
- 2026-10-26: **batch 2** 2bf282c v538 — Zundōya Dotonbori, Osaka Ōshō Dotonbori honten (gyoza, no ramen block), Ichiran Namba Midōsuji (pork-free broth), Kinryū Midōsuji; 4 stale ramen skipped. Ramen shop crawl complete (739 fetched, 687 inside). Rules learned: no postcodes unless sourced; cuisine_type must use app labels (italian, okonomiyaki for teppan, gyoza, curry, sukiyaki…) — not 'other' when one fits.
