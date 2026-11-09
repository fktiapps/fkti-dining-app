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
`git -C C:/pf/fkti-dining-osw<k> reset -q --hard main && git -C C:/pf/fkti-dining-osw<k> clean -fdq -- handoff/ data/gloss/_chunks/`
(use `git clean` on those two paths, not `rm -rf`: the recursive delete next to a file named handoff.txt set off "dangerous operation" warnings for Greg, 2026-11-05).

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
   failure printed but the commit and push ran anyway (fixed within minutes, v762).
4. Push once per round and verify `dcd-vNNN` live. Append the Log lines here in osaka-sweep.md and
   update the Phase pointer and memory.

If a session ends mid-round: unintegrated work sits in each worktree's `handoff/`; integrate what
is complete and redo the rest.

## Integrator lessons (2026-11-01)

- Reset a worker's worktree only after its batch has committed. On 2026-11-01 a reset after a failed
  integration deleted osw5's handoff gloss chunks, and the worker had to redo them.
- Send the next assignment in the same step as the reset. Twice that night a worker was reset and then
  left idle for a round because the message was never sent.
- Field-check before integrating: hours keys against hours_raw (0=Mon), GF never above options,
  pronouns, ramen blocks fully sourced, and any romaji the report admits to inventing.

## Handoff 2026-11-02 (resolved)
- After the usage-limit stop, all pending batches were integrated and all 13 workers re-dispatched (2026-11-02 evening). Open questions for Greg: Provision, 巨乳焼き, the abusive-remarks reading, カフェ 太陽ノ塔, the group-size line, shirato mom_and_pop. Undecided in queues: 再来宴, あさが家, 六美麻辣湯, 甘党まえだ, ぼんぞ, TORA鶏YA.

## Handoff 2026-11-05 (Kyoto priority, live)
- Greg 2026-11-05: Kyoto first (he is in Kyoto from 2026-12-02). Six workers on kyoto-missed, lanes id mod 6 (osw13=0, osw8=1, osw1=2, osw2=3, osw6=4, osw9=5), 2 core + 2 notable each. Osaka/Tokyo streams paused (osw3,4,5,7,10,11,12 idle; osw4-b26 and osw7-b25 drafts were saved to the session scratchpad only — redo them).
- Integrate with `INTEG_SCRATCH=<scratch> bash scripts/sweep/integrate.sh …`; baseline lint in $INTEG_SCRATCH/lint_now.txt (top-tier GF now 58). Smoke needs `node scripts/static-serve.mjs` running. Reset workers with `git clean -fdq -- handoff/ data/gloss/_chunks/`, never rm -rf; HANDOFF.txt is tracked — leave it.
- Existence review: scripts/existence-scan.mjs → scripts/existence/kyoto-scan.jsonl; borderline list kyoto-borderline.json. Done: 7 closed hidden, 4 wrong-source records hidden (2 rebuilt by osw9-10), 3 pins fixed.
- Open questions for Greg: hide 11 "signs of closure" Kyoto records (Menshin Yoshida, Little Heaven, Yatai Tokumitsu, Kiyomizu halal wagyu, Rin Halal, Yume-ya, Oubon, KYONO JUICE, Social Kitchen, EVERYSOY, Menya Roman)?; looks remarks in bios ("handsome") — omitted meanwhile; UNO RAMEN Kyoto Station GF dedicated vs options (options meanwhile).
- Integrator lesson (2026-11-05): when chaining two integrate.sh runs in one command, use `set -o pipefail` and stop on failure. A stacked-pin failure in osw13-37 was masked by `| tail`, the next integration (osw2-13) then committed osw13's half-integrated data. Also: workers drafting in parallel can't see each other's pins — the integrator's stacked-pin check is the only guard.

## Handoff, 2026-11-07 (Kyoto priority, still running)
- Six workers on kyoto-missed, lanes by Tabelog id mod 6: osw13=0, osw8=1, osw1=2, osw2=3, osw6=4, osw9=5. Latest batches: osw1 b55, osw2 b49, osw6 b51, osw8 b53, osw9 b52, osw13 b78 (openCitySweep date '2026-11-07').
- Kyoto ≈1,820 places. Core/notable tiers nearly exhausted in most lanes; workers move to `next rest` (nearest-first) per the brief's NEXT PHASE rule.
- Integration: same integrate.sh pattern; narrow CITY_READINGS keys; reset worktree after each integration.
- Rulings added 11-06 (all in docs/osaka-worker-brief.md and memory content-rulings-1105.md): referral/members-only listed (incl. closed to new members); halal flag on operator's own claim; owner/founder deaths included as succession facts; other-diner remarks only when a multi-review pattern.
- Chains hidden 11-06: KINOE, 麺屋優光 (+麺屋 聖), Ikariya (2), プロシード 新 (2), Osaka ベジョータ マス.
- Separate: fkti-learning sumo bios refreshed for Kyushu 2026 (4e465f6) and Day-1 preview fix (ef817ce).

## Handoff, 2026-11-07 evening (Kyoto priority, still running)
- Latest batches integrated: osw1 b72, osw2 b64, osw6 b70, osw8 b71, osw9 b69, osw13 b99. Kyoto 2,276 records (2,223 visible).
- Greg 11-07: noren-wake name families (力餅食堂, 河道屋, 駿河屋…) are NOT chains — draft each on its own evidence. 河道屋倖松庵 + Cafe Lumen re-opened.
- Hidden 11-07: 和牛とカニ (ジョージーズ), ダニエルズ (グラマラスフード, 7 shops; its 桃屋 drafted as a sister brand).
- Integrator calls 11-07 (precedent, not new rules): hotel restaurants of national hotel groups = large parent (KIHARU/ORIX, 帝国ホテル); local boutique-hotel restaurants open to non-guests are drafted (ART MON ZEN); maker sub-brands = large parent (蝶矢/CHOYA, 一の傳, 土井); non-local multi-venue groups skipped (ITOH DINING, アルポルトカフェ) but a single brand under 5 is drafted (DRINK DRANK); a same-concept second shop of a brand in data is skipped (山福 はなれ); a local non-restaurant company running one restaurant is drafted (ハンザン, The Sakura); missing hours are not a skip reason (hours_status 'unknown'); halal only on the operator's own words, never a Tabelog tag.
- Fixed 11-07: skip() now stores numeric ids when given a URL (18e596d4); 94 URL-keyed lines migrated.
- Open for Greg (not urgent): animal cafés that serve food — none with enough evidence yet.
- Workers check pins against current main as the last step, hidden records included, and wait for their reset commit before starting.

## Handoff, 2026-11-08 (Kyoto priority, still running)
- Latest integrated (11-08 late): osw1 b94, osw2 b84, osw6 b92, osw8 b94, osw9 b89, osw13 b121 (openCitySweep date '2026-11-08'). Kyoto 2773 records (2631 visible).
- Greg 11-07/08 rulings (in the brief + memory content-rulings-1105): retail food shops listed only if particularly historic + family-owned or with sourced GF/vegan options (back-fill: 43 hidden, famous old shops kept); venues in big-chain hotels skipped (back-fill: 39 hidden; tenant brands kept); noren-wake families are not chains.
- Map: numbered cluster pins, density bloom (BLOOM_MAX_PINS=10), petal labels — merged 3b426b04 (branch map-clusters, worktree C:/pf/fkti-dining-map can be removed).
- Gloss: Kyoto byCity overrides for 修 (Nao), 祝 (Iwai), 天 (Ten); brief forbids bare 祝/天 in Kyoto JA text.
- Audits: docs/kyoto-hotel-audit-2026-11-08.md, docs/kyoto-retail-audit-2026-11-08.md.
- Gloss 11-08: Kyoto 月 has nor (no がつ over 麺屋 月 / 中勢以 月 / weekday 月). Names with romaji in parens already suppress the English gloss, so only furigana can be wrong there.
- Romaji: Tabelog's English listing name is machine romaji, not a source for a reading (ニューオーモン came as "New Aomon"; record says New Omon).
