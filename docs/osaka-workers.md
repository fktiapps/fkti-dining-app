# Osaka sweep — parallel workers

**Greg, 2026-10-30:** "Now that I'm back [on Max], can we workflow the rest of Osaka to speed it up,
while maintaining quality?"

Research is the slow part, so it runs in parallel. Everything that touches shared state (Tabelog and
OSM requests in bulk, `data/*.json`, the glossary, the build number, commits and deploys) stays with
one integrator, the main session. Quality gates are the same as a single-session batch, plus a
review by the integrator of every drafted record against its sources.

## Roles

| Who | Where | Does |
|---|---|---|
| Integrator (main session) | `C:/pf/fkti-dining` | picks the round's shops from the queue, fetches them serially (`fetchshop.mjs`), runs `pincheck.mjs`, assigns 4 shops and a batch number to each worker, then reviews, integrates, gates, commits and deploys each batch in order |
| Worker k (k = 1–4) | `C:/pf/fkti-dining-osw<k>` (detached worktree; `node_modules` is a junction to main's) | researches its 4 shops and drafts one batch script plus its gloss chunks; never commits, pushes or edits anything outside its worktree |

The integrator resets each worktree to main before a round:
`git -C C:/pf/fkti-dining-osw<k> reset --hard main` then deletes its `handoff/` and `data/gloss/_chunks/`.

## Worker steps

1. Copy the pre-fetched shop folders from main into the worktree:
   `cp -r C:/pf/fkti-dining/scripts/sweep/osaka/work/shops/<id> scripts/sweep/osaka/work/shops/`.
   Pin-check results come in the brief; do not run `pincheck.mjs` (OSM allows one request a second
   across all of us). Extra Tabelog reviews (`fetchshop.mjs osaka 12 <url>`), the shop's own site
   and web search are fine.
2. Read `docs/osaka-sweep.md` (Batch method and Phase pointer), memory rules quoted in the brief,
   and copy the latest batch script as the template. Chain-check each shop first (a chain already in
   data, or a fast-growing chain, gets `skip(id, reason)`).
3. Write `scripts/add-osaka-sweep-b<N>.mjs`. Run the pre-run gates: `node --check`, the pronoun greps,
   a scan for `?` in JA text, and the kanji-name check (no guessed kanji or readings, no romaji
   back-converted to kanji or kana).
4. Run it, then gloss the new Japanese: `node scripts/gloss/extract.mjs osaka`, review
   `show.mjs r` and `show.mjs w`, write chunks named `osaka-b<N>-r.json` / `osaka-b<N>-w.json`
   (whole strings via `chunk.mjs w`, runs via `chunk.mjs r`; their indexes are separate),
   **copy the chunk files into `handoff/`**, then `merge.mjs`, `build.mjs`. Check the readings of the
   new runs (`readings.mjs osaka himeji,toba,nagano,nara,kanazawa,nagoya,hiroshima,kyoto,tokyo`);
   wrong readings go in the report as proposed `CITY_READINGS.osaka` entries (don't edit lib.mjs).
5. `node scripts/build-payload.mjs` and the lint, filtered:
   `node scripts/lint-data.mjs 2>&1 | grep -vE 'tier-write|tier writes|lib-tiers.test|Test Shop|went against the human gate'`
   must print nothing new for your ids.
6. Report in the final message (agents cannot write .md files): each shop added or skipped (with reason), any doubt about a claim, the
   pin decision per shop, proposed reading overrides, and a one-line Log entry for docs/osaka-sweep.md
   in the house style. Copy the batch script into `handoff/` too.

## Integrator steps, per batch, in batch-number order

1. Read the script against the shop's `listing.txt` and reviews: every fact has a source, dates match
   each review's own "Visited on" line, no pronouns, no guessed names or readings, GF never above
   `options`, labels match lib-tiers.
2. Copy the script to main, run it, copy the handoff chunks to `data/gloss/_chunks/`, `merge.mjs`,
   apply reading overrides, `build.mjs`, `build-payload.mjs`, `bump-build.mjs`.
3. Gates: lint diff against the clean baseline, `npm test`, `smoke-app.mjs`. Commit per batch. Chain the
   commit on the gates (`diff lint_now lint_new && npm test && … && git commit`): on 2026-10-30 a lint
   failure printed but the commit and push ran anyway (fixed within minutes, v763).
4. Push once per round and verify `dcd-vNNN` live. Append the Log lines here in osaka-sweep.md and
   update the Phase pointer and memory.

If a session ends mid-round: unintegrated work sits in each worktree's `handoff/`; integrate what
is complete and redo the rest.
