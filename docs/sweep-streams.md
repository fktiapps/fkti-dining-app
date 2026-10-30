# Parallel sweep streams (from 2026-10-30)

**Greg, 2026-10-30:** "Let's get another 4 agents working on 1-mile circles (likely overlapping) around
Osaka Station and Shin-Osaka station." · "Let's also get four more starting to fill in the areas between
the existing Tokyo circles." · "And one more agent doing a 'what did we miss' pass in Kyoto."

Same quality bar and the same integrator review as the Dotonbori sweep (docs/osaka-workers.md,
docs/osaka-worker-brief.md). What differs per stream is below.

## Streams and lanes

| Sweep (scripts/sweep/…) | Writes to | Worktree | Lane: which queue entries the worker takes |
|---|---|---|---|
| `osaka` (Dotonbori, rest phase, notable-first) | data/osaka.json | osw1–osw4 | `next notable` ids where id mod 4 = 0,1,2,3 |
| `osaka-kita` (2 circles, 1,609 m) | data/osaka.json | osw5, osw6 | circle `umeda`, id even / odd |
| | | osw7, osw8 | circle `shin-osaka`, id even / odd |
| `tokyo-gaps` (4 circles, 1,609 m) | data/tokyo.json | osw9–osw12 | circle `roppongi`, `yotsuya`, `ningyocho`, `ueno` |
| `kyoto-missed` (notable pass) | data/kyoto.json | osw13 | all of `next notable` |

Circle centres and their OSM sources are in each sweep's config.json. A lane split keeps two workers
from ever drafting the same shop.

## Picking candidates (each worker, from the MAIN repo, read-only)

```
cd /c/pf/fkti-dining && node scripts/sweep/queue.mjs <sweep> next core 80 <circle>   # new circles: vegan, ramen, ≤20 seats, 30+ reviews, nearest first
cd /c/pf/fkti-dining && node scripts/sweep/queue.mjs <sweep> next notable 80          # Dotonbori rest phase and Kyoto: award, rating, reviews
```

Take the first 4 in your lane that are not already in the city's data. **Dedupe by name and address
too** (`grep` data/<city>.json): Tokyo and Kyoto records often carry Google ids and no Tabelog id, so
the queue cannot see them. A Tokyo record that is a hidden `unresearched` placeholder for the same shop
is researched IN PLACE: reuse its id (put() unhides it).

## Doing the batch (in your worktree)

- Fetch yourself: `FETCH_DELAY_MS=2500 node scripts/sweep/fetchshop.mjs <sweep> 10 <url>…` (slower
  pacing, because up to 13 workers share Tabelog).
- Pins: GSI only, no OSM (Nominatim allows one request a second for all of us):
  `node -e "import('./scripts/pin-audit/gsi.mjs').then(async m=>console.log(JSON.stringify(await m.gsi('<address>'))))"`.
  "go" within 150 m of the Tabelog point → precise; else the Batch method rules.
- Script: `scripts/add-<sweep>-<lane>-b<N>.mjs` with `openCitySweep('<sweep>', TODAY, '<lane>-<N>')`
  (lane = your worktree name, e.g. osw9; N counts your own batches from 1). Template: the latest
  scripts/add-osaka-sweep-b2*.mjs; for Tokyo also look at a recent scripts/add-ginza-sweep-b*.mjs.
- Gloss the new Japanese as in docs/osaka-workers.md; reading fixes go in your report as proposed
  `CITY_READINGS.<data city>` entries (narrow keys).
- Report in your final message, as in docs/osaka-workers.md.
