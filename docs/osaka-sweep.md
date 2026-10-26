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

**Current phase: alternate** — two ramen batches, then one vegan/GF batch, repeating. Next batch: **b27 = ramen** (`node scripts/sweep/queue.mjs osaka next ramen 12`; Minmin Namba Walk, Kamukura Namba Walk, Yakitori Nakamoto, Ichiban Malatang, Roman abura-soba, Juroku sundubu …), then b28 ramen, then **b29 = vegan/GF** via `queue.mjs next vegan 30` (fetch ~8, grep reviews/official site, keep evidenced). Passed over (flag only; leave for rest phase): 27107135, 27126665, 27129613, 27117252, and from b26 the vegan list also showed Honke Otako, Shibaitaroka, Hot Pot Lab, Kitakura, Bar Grotto, Nakamoto … (not yet fetched). Unresolved FMGF seeds: heys, HACCHA BOOTH, FOLK (no source yet). FMGF method: curl the biz page into `work/fmgf/<id>.html` (Node fetch gets a Cloudflare challenge; HappyCow and Vegewel block both), read reviews, then the shop's own site; pin = FMGF point + GSI on the Japanese address via `pincheck.mjs` (make `work/shops/fmgf_<id>/meta.json` with lat/lng). FMGF review dates are relative — convert to months from the read date.

## Log

- 2026-10-26: infra 3ff54ed (tools, config, queue, plan); ramen lists crawled (742 ids).
- 2026-10-26: **batch 1** b6fbdc5 v537 — Osaka registered (10th city); Kinryū Ramen, Dōtonbori Kamukura, Kinkuemon, Rāmen Hayashida (all Dotonbori, ramen blocks). Lesson: proper menu/brand names (Osaka Black, Kinjou Shoyu, Maximum Koitama, Daisendori) stay romaji in JA — don't katakana/kanji them.
- 2026-10-26: **batch 2** 2bf282c v538 — Zundōya Dotonbori, Osaka Ōshō Dotonbori honten (gyoza, no ramen block), Ichiran Namba Midōsuji (pork-free broth), Kinryū Midōsuji; 4 stale ramen skipped. Ramen shop crawl complete (739 fetched, 687 inside). Rules learned: no postcodes unless sourced; cuisine_type must use app labels (italian, okonomiyaki for teppan, gyoza, curry, sukiyaki…) — not 'other' when one fits.
- 2026-10-26: **batch 3** — Zundōya Namba Ebisubashi + Sōemonchō, Kamukura Midōsuji, Shitennō Dotonbori (12 Osaka). Rule: date each price/anecdote from that review's own 'Visited on' line (sed -n 2p B*.txt) — don't assume.
- 2026-10-26: **batch 4** 93ce08e v541 — Kamukura Sennichimae, Yang Guo Fu Malatang (other), Gyōza Kōbō Chibisuke (gyoza), Makotoya Shinsaibashi (beef paitan) (16 Osaka). Tabelog 'ramen' tag also covers malatang/gyoza shops: file them under their real cuisine_type, no ramen block. Don't invent JA titles for translated menu names — leave ja ''.
- 2026-10-26: **batch 5** 6c4db74 v542 — first vegan/GF batch from FMGF seeds: Matsusakagyu Yakiniku M Hōzenji Hanare (yakiniku, GF on notice; queue high), Genji Soba Hōzenji Sandō (100% buckwheat, dedicated GF fryer; queue high; moved here March 2026), Naki vegan sweets (BOTH, vegan full; queue dedicated), Vim GF okonomiyaki (serves meat despite 'Vegan' in its name; queue dedicated) (20 Osaka). No Tabelog ids, so no queue-status rows. Genre list crawl (okonomiyaki/takoyaki/sweets/cafe, core areas) committed; takoyaki/sweets/cafe lists returned whole-area results (~4,200 ids known) — crawl-shops for 3,456 of them was still running at commit, shops.jsonl uncommitted.
- 2026-10-26: **batch 6** 4f7b42a v543 — Ichiran Dotonbori Annex (counter 24 h, tables 8–23 per official page), Abura-soba Kirinji Sennichimae (sub_genre mazesoba_aburasoba, cash only), Saku no Saku Sennichimae (Naniwa tonkotsu, smoking), Menha Tomoare (espuma tori-paitan; Tabelog says cards, a review says cash only — noted, not resolved) (24 Osaka).
- 2026-10-26: **batch 7** e93ef78 v544 — Chuka Soba Fujii Namba (closed Tue, queue-ticket system), Men to Umami no Kamikakushi (Namba Hips B1F; cashless per reviews vs Tabelog 'no cards' — noted), Hanamaruken Namba-Hōzenji (24 h, Arakawa Food Service), Mugen Ramen Sennichimae (beef+chicken paitan) (28 Osaka). After b8, ramen resumes with Yume Saian (tsukemen) and Kameou Dotonbori.
- 2026-10-26: **batch 8** 4d56bf5 v545 — vegan/GF: Matsusaka M Dotonbori-Sennichimae (all house sauces GF per manager; queue high), ABENO HUB (rice-flour okonomiyaki, wheat gyoza on shared griddle; not queued), OKO Fun Okonomiyaki Bar (one-person GF bar; oko-osaka.com is now a gambling site, never link it; an April 2026 celiac reaction noted; not queued), Cha-ya Shizuku (GF steamed matcha cake, ROMAN TALE; hours unknown) (32 Osaka). FMGF .txt files are the saved .html with tags stripped.
- 2026-10-26: **batch 9** 46efcb2 v546 — Musai An (shijimi tsukemen, midnight–5 am), Ramen Kio Dotonbori (hours: official page vs Tabelog conflict → irregular), Horumon Ramen 8910 Sennichimae, Miyazaki Menya Karakara (36 Osaka). Skipped Fumoto no Miya 27153093 (reviews about yakiniku/burgers).
- 2026-10-26: **batch 10** v547 — Men joyLife (shellfish shoyu, 20:00–8:00), Shijimi Ramen Shi43ya (cash only), Touka Koufu (malatang → other), Gyokotsuya Dotonbori (Fukuoka fish-bone ramen; opening date Tabelog 2026-07-20 vs review 09-12) (40 Osaka). Gyokotsuya stays romaji in JA (no back-conversion to 魚骨屋).
- 2026-10-26: **batch 11** v548 — vegan/GF: OKO takoyaki (soybean flour; vegan reports conflict → options), Shojin Sushi Minamo (BOTH, vegan full; GSI 171 m off → loc_approx single, existence probable; queue dedicated), Streamer Coffee Shinsaibashi (unlabelled case — GF poster only), Vegan Cafe Tsukineko (BOTH; queue high) (44 Osaka). Hours unknown for all four (Instagram-only).
- 2026-10-26: **batch 12** v549 — Kotan Namba Walk (underground: GSI chōme-only → loc_approx single), Kappa Ramen Honpo Sennichimae (24 h), Menya Gaten (Jirō-style mazesoba; hours = last-entry times only → unknown), Kinryu Ramen Honten (24 h) (48 Osaka). Skipped Chuka Izakaya Nekoya 27088662 (newest review April 2025).
- 2026-10-26: **batch 13** v550 — Houou Rou (Chinese → other), Ebi Shin (lobster ramen; newest review Sept 2025 → probable), Tenchijin Sennichimae (Fukuchan group), Kasu Udon Unotake (udon_soba; moving by June 2027) (52 Osaka). Skipped 4 thin listings (0–3 reviews). **Crawl finished**: shops.jsonl committed (3,453 inside); queue now pending ramen 636, vegan 178, mom 1,093.
- 2026-10-26: **batch 14** v551 — vegan/GF: MITHILA (Indian, Tabelog veg flag; GF/vegan ask), W RETREAT CAFE (BOTH, vegan full, beauty-clinic café; queue high), RE-public by BASE ISLAND KITCHEN (Jamaican, FMGF 100% GF; queue dedicated), my bowl Kitahorie (GF menu; granola cross-contact) (56 Osaka). 9 Osaka GF upgrades queued so far.
- 2026-10-26: **batch 15** v552 — Menya Kotetsu (chicken shio), Menya Sarunosuke (chicken paitan, 10:00–4:00), Shodoten (since 1971), Sennichimae Yasudaya (gyoza) (60 Osaka). Skipped 27097939 (3 reviews), 27139984 Seikimatsu no Komugi Matsuri (newest review Sept 2024). Rule reminder: menu-item ja stays '' when the name comes from an English review (no 特製〇〇 back-conversion).
- 2026-10-26: **batch 16** v554 — Ramen Kawaen (24 h, opened Dec 2025), Kinryu Ebisubashi, Kotei Men Daichan (shio, 18:00–6:00; card/cash conflict noted), Kamukura Ebisubashi (64 Osaka). Skipped 2 zero-review listings. After b17 vegan/GF: b18–b19 ramen (Arashi mazesoba 8 rv, Yukichi Honpo 1 rv → likely skip …).
- 2026-10-26: **batch 17** v555 — vegan/GF: PANCAKE & books Namba Parks (GF batter, cleaned pan), ChocoLatta (GF gâteau specialist; official 12:00 opening vs reviewers' early breakfast → irregular; queue dedicated), OSAKA ENGINE RAMEN (GF rice noodles, dedicated cooker; ramen block from FMGF reviews; queue high), Shinsekai Paprika Shokudo (BOTH, vegan full; soy meat has gluten; queue high) (68 Osaka). 12 Osaka GF upgrades queued.
- 2026-10-26: **batch 18** v556 — Ramen Ajidono (Kansai iekei), Shinshin Seimen (tantanmen; reviews Aug–Sep 2025 → probable), Mazesoba Arashi (moved 1 Oct 2026; hours/payment conflicts → irregular), Kamukura Shinsaibashi (72 Osaka). Skipped 2 one-review listings and Maruki 27097242 (newest review Nov 2024). Also watch JA prose: romaji names from reviews (Hayashi Seimenjo, Menya Arashi) stay romaji in JA summaries too.
- 2026-10-26: **batch 19** v557 — Minamen Namba Walk (Jinrui Mina Menrui offshoot; underground → loc_approx single), Fuki Seimen Kenkyusho (kombu-water tsukemen; closing-day conflict → irregular), Tabucchan (tantanmen, cash only), Sapporo Ramen Shishio (miso) (76 Osaka). Skipped Naniwaya 27137593, Maruki Suōmachi 27137665 (stale), 27102753 (3 rv). After b20: b21–b22 ramen (Minmin Minami-Sennichimae, Zundoya Shinsaibashi, Mita Seimenjo …).
- 2026-10-26: **batch 20** v558 — vegan/GF: Comeconoco Tenmabashi (GF rice-flour café; queue dedicated), crepe aimer (rice-flour crêpes; custard not GF), Mexico Kitchen Bar Mu (corn tortillas), Botejyu Honten (Tabelog vegan flag; vegan ask) (80 Osaka). FMGF now returns a Cloudflare challenge to curl as well; coordless seeds geocoded by GSI instead (Umeda/Nakazaki/USJ ones are outside 3,219 m).
- 2026-10-26: **batch 21** v559 — Minmin Minami-Sennichimae Honten (gyoza), Zundoya Shinsaibashi (smoking conflict noted), Mita Seimenjo Namba (tsukemen), Horumon Ramen 8910 Europe-dōri (84 Osaka).
- 2026-10-26: **batch 22** v560 — Naniwa Menjiro (Ramen 100 2025; inside Kintetsu gates, GSI 160 m → single), Asahi Seimen (EDION ramen floor), KOTAN THE KITCHEN (Namba Walk → single), Sichuan Ramen Sōemonchō (88 Osaka). Then b24–b25 ramen (Minmin Namba Walk, Kamukura Namba Walk, Razuri ramen bar …).
- 2026-10-26: **batch 23** v561 — vegan slot via Tabelog flag: Pivot BASE (veganised takoyaki/ramen; vegan options), Hozenji Sanpei, 17MAP (veggie tacos), Teppan Jinja Dotonbori (flag only → vegan ask) (92 Osaka). Of 8 flagged listings fetched, only Pivot BASE had real vegan evidence.
- 2026-10-26: **batch 24** v562 — Ramen Kaneda + Kichijoji Musashiya (both EDION 9F Ramen Ichiza), Shibaike (kasu udon/chuka soba → udon_soba), Jinrui no Takarabune (96 Osaka). Skipped Razuri 27135100 (newest July 2025). Romaji names stay romaji in JA (Daikokuten, Benzaiten, Musajiro).
- 2026-10-26: **batch 25** v563 — Bettei Takei + Gyukkoshi (EDION 9F Ramen Ichiza), Ichimu An Men (late-night tonkotsu shoyu), Sichuan Shokubo Fukuryu (Chinese 100 2021 → other) (**100 Osaka**). Queue head still has Minmin Namba Walk 27015875, Kamukura Namba Walk 27144562, Yakitori Nakamoto 27148241 — fine to take in b27. Watch: no guessed family relations ("son"), no back-converted names (Chen Kenmin).
- 2026-10-26: **batch 26** v564 — vegan/GF: Spys Oasis (own site: gluten not used; vegan curry line; queue high), Old Cairo Cafe (Egyptian; vegan limited), Crêperie Alcyon (Sweets 100; GF/vegan ask), Green Bar (104 Osaka). Osaka detail now 2 chunks (data/detail/osaka-1.json).
