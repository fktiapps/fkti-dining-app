# Tokyo light-tranche deep-enrich — agent brief

One agent per shard. Your shard is `data/_tokyo_enrich_shards/sN.json` (12 records).

## What these records are

They came from a broad 3-mile discovery sweep. Each carries **zero sources**, no
Google place_id, and a **neighborhood-centroid pin** (`loc_approx: "block"`) that is
NOT the real address. The names are unverified and some are garbled.

**Your first job on every record is to establish that the business exists at a real
Tokyo address.** Do not assume the name is right. In shard 0, one record turned out
to be a restaurant 600 km away in Kagawa, two names were garblings of different
businesses, and seven could not be found at all. That is an acceptable outcome —
inventing details to fill the gap is not.

## How to search

1. **Tabelog** — the mobile host `s.tabelog.com` answers with an iPhone User-Agent
   when desktop `tabelog.com` 404s or 403s. Run a nationwide name search first, so a
   shop that exists in the wrong city surfaces instead of reading as "not found".
2. **The shop's own site** — find it by searching the name + 東京 on **Yahoo Japan**.
   That is the only engine that answers a scripted curl request; Google and Bing do not.
3. Japanese directories: gnavi, hotpepper, retty, hitosara, favy, ramendb.
4. Wayback Machine for lapsed domains; WordPress REST API (`/wp-json/wp/v2/pages`)
   for JS-only sites.

## Verdicts

| Situation | What to do |
|---|---|
| Found, confirmed in Tokyo | Full enrichment (fields below) |
| Found, but not in Tokyo | `enrich_confidence:"low"`, coords unchanged, `enrich_note` starting `MISLOCATED RECORD —` with the real city and the evidence |
| Name garbled, real business identified | Enrich under the corrected name; put it in `name`; `enrich_note` starting `NAME CORRECTION.` saying what the light record read and what the evidence shows |
| Cannot locate | `enrich_confidence:"low"`, `loc_precise:false`, coords unchanged, `enrich_note` starting `NOT FOUND.` naming exactly which searches you ran and what each returned |

### Some of these names were never shop names

The sweep that produced this tranche scraped some things that are not businesses, and
recognising the shape saves an hour of searching for something that cannot be found:

- **Tabelog REVIEWER HANDLES.** 「ラーメン もぐ男」 and 「ラーメン あまぐ」 both trace to
  usernames on Tabelog review pages, with a genre word glued on the front. If a name
  reads like a person's handle rather than a shop, check Tabelog's reviewer pages
  before concluding anything.
- **Dish and category words.** 「市場食堂」, 「ベジプレート 中野」, 「グルテンフリー・パスタ 中野」 —
  a dish, a plate, a search phrase.
- **Place and district labels.** 「甘酒横丁」, 「月島もんじゃ界隈」, 「新橋 おでん」, 「新橋 寿司」 —
  an area plus a genre is not a business.
- **Businesses in other prefectures**, whose Tabelog genre string matches the sweep's
  descriptor verbatim: a Kagawa udon shop, a Saga bakery, a Tottori port market 570 km
  away, a Bali beach restaurant.

Start `enrich_note` with `GENERIC PHRASE:` for a dish or district label, and say which
of these shapes you think it is. A record that never named a business is a different
problem from a shop that could not be located, and only the first is safe to discard.

### A failed query is not a negative result

Shards run in parallel and Yahoo Japan rate-limits: a shard-8 record was almost
written off as NOT FOUND on an **HTTP 429**, which is the search engine declining to
answer, not the search engine answering "no". Tabelog 403s the same way.

If a search leg returns 429, 403, or a timeout, **say so in the note and back off and
retry it** before concluding anything. Only write `NOT FOUND.` when every leg
actually ran and actually came back empty, and name the response you got from each.
The not-found rate across this tranche is running near 60%, so an inflated one
directly costs real restaurants their place in the app.

**Never invent** a bio, a menu item, an address, a coordinate, or a safety assurance.
An empty field always beats a plausible one. "Low confidence" is a good answer.

## Say the verdict in a field, not only in prose

Set **`status`** on every record — the merge reads it directly instead of parsing
your note, which is far less fragile:

`confirmed` · `probable` (found a plausible shop but nothing ties it to the light
record) · `closed_permanently` · `not_found` · `mislocated` · `unresolved`

If the shop is shut, add `closed_since` (permanent) or `reopens` (temporary, e.g.
"end of October 2026") as plain strings. A **permanently closed** shop is hidden
from the app; a **temporarily closed** one keeps its listing with a reopening badge,
so the distinction matters. Still write the `enrich_note` — the status says what, the
note says how you know.

## Fields (omit any you cannot evidence)

`id` (unchanged, required) · `name` · `lat` · `lng` · `loc_precise` (true **only** with a
real street address and its coordinates) · `address_ja` · `enrich_confidence`
(high|medium|low) · `cuisine` (one vivid English sentence — what a diner actually gets,
with price range if known) · `cuisine_type` (one lowercase slug) · `neighborhood`
(English, naming the nearest station and line) · `website` · `menu_url` · `hours_raw`
(as published; Japanese is fine) · `hours_status` (regular|irregular — prefer
`irregular` when unsure) · `gf_confidence` · `gf_detail` · `vegan_status` ·
`vegan_detail` · `chef_bio {chef_name, roles[], origin, background, sources[]}` ·
`safety {}` · `cultural_comfort` · `sources[]` (real URLs you actually opened) ·
`enrich_note`.

Tiers — GF: `dedicated | high | options | ask | no`. Vegan: `full | options | limited | ask | no`.

## Gluten rules for Japan (getting these wrong makes someone ill)

- **Soy sauce contains wheat by default.** Assume wheat unless the shop names a
  gluten-free tamari.
- **麩 (fu) is pure wheat gluten** — standard in shōjin and in many soups.
- **十割 (juwari) soba is NOT gluten-free**: 打ち粉 dusting flour on the board, and the
  tsuyu is wheat soy sauce.
- **麦 means barley**: 麦味噌, 麦茶, 押麦 / もち麦 inside 十八穀米, malt. All contain gluten.
- Dashi (bonito) and egg defeat vegan. Shōjin restaurants often still carry a little 鰹節 —
  check, don't assume.

## Vocabulary is not evidence (owner's ruling, 2026-08-19)

Do **not** downgrade a shop for writing 「グルテンフリー」 or 「小麦アレルギー対応」 instead of
セリアック. The word "celiac" is barely used in Japan and requiring it eliminates good
options. Absence from FindMeGlutenFree or HappyCow is likewise not a disqualifier.

What still disqualifies, regardless of wording:
- the claim is scoped to a *product* while wheat is handled on the premises;
- the shop itself declines to guarantee (「完全なコンタミ対応ではありません」);
- the only "corroboration" reprints the shop's own copy without a visit;
- a gluten grain is present unresolved (barley, malt, rye, uncertified oats).

Set `gf_confidence` to whatever the evidence supports. If you think a record merits
`dedicated` or `high`, say so — the merge script holds every top-tier promotion for a
separate adversarial pass and the owner's sign-off, so nothing ships on your word alone.

## Search engines, same warning: try, do not assume

Every engine bot-walls eventually and they take turns. In one session Yahoo Japan went
from the only reliable route to HTTP 429 on every attempt; DuckDuckGo (both html and
lite), Mojeek and Bing all returned bot challenges; Google was never reachable.
**Ecosia — `https://www.ecosia.org/search?q=` — was the only working route** on the
last shard and unlocked four repairs on its own. Brave has also worked.

So keep a list and walk it: Yahoo Japan, Ecosia, Brave, Bing, DuckDuckGo lite. Record
which one answered. And a search engine declining to answer is never evidence about a
shop — an HTTP 429 or a bot challenge is a fact about the engine.

## Output

Write a JSON array of your 12 result objects to `data/_tokyo_enrich_verdicts/sN.json`.
**Read `data/_tokyo_enrich_verdicts/s0.json` first** — it is the worked example and the
shape to match.

Return to the caller **only** a 3-line summary: counts by verdict
(confirmed / name-corrected / mislocated / not-found), plus anything needing a human.
Do not paste the records back.
