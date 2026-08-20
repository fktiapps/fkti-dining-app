# NARA MENU TRANCHE 2 — RESEARCH BRIEF (read fully before you start)

You are researching and transcribing real menus for shops in Nara, Japan, for a
travel dining app. Your batch of shops is in your task prompt.

## WHY THIS MATTERS
The reader is a traveller sitting in a Japanese restaurant staring at an
all-Japanese menu with no idea what any of it says. Your job is to let them
DECODE it: what is this dish, what's in it, what's it called, roughly what does
it cost. That value is independent of anyone's diet. Do NOT skip or skimp on a
wheat-heavy shop — a kissaten's ナポリタン and a bakery's あんバター deserve the
same care as a vegan cafe's plate.

## HARD RULE — NEVER INVENT
Never invent a dish, a price, or a flag. If you cannot find a published menu
anywhere reachable, emit `"items": []` with `"confidence": "low"` and list the
sources you actually checked. An honest empty is CORRECT and expected for a few
shops. A fabricated menu is far worse than a blank one — somebody orders from it.
Do not pad a shop with "typical kissaten items". Only what you actually saw.

## WHERE MENUS ACTUALLY COME FROM (ranked by yield — this is hard-won)
1. **Photographs of the in-store menu board.** The single biggest source. Google
   Maps photos, Instagram posts and blog write-ups routinely contain a
   full-resolution shot of the board. Read it at full res. Most recovered menus
   in previous tranches came from here and nowhere else.
2. **The shop's own site** — this is what earns `verified: "authoritative"`.
   Chase it first even though it is often not the fastest. Try `/menu`, `/food`,
   `/drink`, `/lunch`, sitemap.xml, and the WordPress REST API
   (`<site>/wp-json/wp/v2/pages` and `.../posts?per_page=100`) when the rendered
   page is JavaScript-only.
3. **Shop-managed aggregator pages** — HotPepper (hotpepper.jp), Hitosara,
   Ebica, Ikyu, Retty "official" pages, Instagram/Facebook posts BY THE SHOP.
   These are maintained by the shop and count as authoritative. Tabelog does not.
4. **The Internet Archive** (`http://archive.org/wayback/available?url=...` and
   `https://web.archive.org/web/2023/<url>`) for lapsed or broken domains.
   Several shops' own item lists came only from Wayback.
5. Blog write-ups and Tabelog *review* pages — good for prices and dish names;
   these give `partial` or `provisional`, never `authoritative`.

## DEAD ENDS — do not burn time here
- **Tabelog `/dtlmenu/` pages**: in previous tranches nearly all returned "no
  menu posted". Check once, cheaply, then move on. Tabelog *review* pages and
  photo captions ARE still useful for prices.
- **Google/Bing/DuckDuckGo/Mojeek via curl** — all 403 or CAPTCHA.
  `search.yahoo.co.jp` is the only search engine that answers curl.
- You DO have the `WebSearch` and `WebFetch` tools. Use them; they are the
  fastest path. Fall back to curl when they fail or run out.

## TOOLING NOTES FOR THIS ENVIRONMENT (Windows + Git Bash)
- `curl` works. ALWAYS send a browser UA:
  `-A "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36"`
- If you loop over a file with `while read`, add `< /dev/null` to the curl call
  or it eats stdin, AND strip CRLF (`tr -d '\r'`) — Python writing to a
  redirected stdout on Windows emits `\r\n` and a trailing `\r` breaks URLs.
- Japanese pages are often Shift_JIS or EUC-JP. If you get mojibake:
  `curl -s URL | iconv -f SHIFT_JIS -t UTF-8` (or EUC-JP). Check the meta
  charset first.
- Set `export PYTHONIOENCODING=utf-8` before any python that prints Japanese.
- Use absolute paths; your cwd resets between bash calls.

## TRAPS THAT HAVE ALREADY CAUGHT SOMEONE
- **Price lists attach to the wrong shop.** Aggregator articles routinely
  attribute one shop's prices to another. Confirm the ADDRESS before trusting a
  price.
- **Near-identical shop names.** Check the city and the address, not the name.
  Nara has several 喫茶 with generic names, and 古白/こはく appears twice in this
  worklist as two unrelated businesses.
- **Rice-flour bakeries that also bake wheat.** Three found so far where the
  shop's OWN allergen line reads 小麦 while the headline says 米粉. Always find
  the allergen/ingredient page before flagging any rice-flour item `gf`.
- **Stale "gluten-free" press.** Prefer recent first-hand reports over old press.
- **Discontinued dishes still filed under the old category.** Do not list a dish
  that reviews say is gone.

## NARA CONTEXT WORTH DECODING PROPERLY
Explain these when they appear; do not just transliterate.
- 柿の葉寿司 **kakinoha-zushi** — vinegared rice and cured mackerel or salmon
  wrapped in a salted persimmon leaf to preserve it; mountain food from before
  refrigeration. The leaf is wrapping, not eaten. IMPORTANT: the two big makers
  (Izasa 平宗/いざさ and Tanaka 中谷/たなか) both publish allergen lines that
  declare 小麦 (wheat). So kakinoha-zushi is `gf: "no"`, NOT "wheat-free by
  recipe". Only override with a shop's own allergen statement to the contrary.
- 三輪素麺 **Miwa somen** — Nara's famous hand-stretched thin noodle. WHEAT.
- 奈良漬 **narazuke** — vegetables (usually uri melon) cured in sake lees;
  genuinely alcoholic and often quite strongly so — worth warning about for
  drivers, kids and anyone avoiding alcohol. Sake lees are a wheat-free
  by-product of rice brewing, but narazuke is commonly re-seasoned; flag `ask`.
- 茶粥 **chagayu** — rice porridge simmered in hojicha/bancha; Nara's everyday
  breakfast for centuries. Plain chagayu is rice and tea, but it is usually
  served with wheat-containing sides.
- 葛 **kudzu** — arrowroot starch from Yoshino; 葛切り kuzukiri (chewy cut
  ribbons in syrup), 葛餅 kuzumochi, 葛湯 kuzuyu. Pure kudzu starch is
  wheat-free, but cheap versions are cut with potato/sweet-potato starch and
  syrups vary — `ask` unless the shop states 本葛 100%.
- 中谷堂 **Nakatanidou**'s high-speed pounded 蓬餅 yomogi mochi (mugwort mochi
  with red bean) is the famous Sanjo-dori spectacle.
- 大和野菜 **Yamato yasai** — Nara's designated heirloom vegetables
  (大和まな, 大和丸なす, 片平あかね, 宇陀金ごぼう, 結崎ネブカ …). If a shop
  advertises them, say what they are.
- 大和茶 **Yamato-cha** — Nara tea, grown in the eastern highlands since the 9th c.
- **Shojin ryori** 精進料理 — Buddhist temple cuisine around Todaiji/Kofukuji:
  no meat, no fish, no dashi from bonito, and traditionally no onion/garlic
  (the five pungent roots). Genuinely vegan when done properly, but always
  confirm the dashi is kombu/shiitake and not katsuo. Explain this if it appears.

## GF / VEGAN FLAGS — honest, and BRIEF (one clause)
Per item: `gf` is one of `"gf" | "ask" | "no"`; `vegan` is one of
`"vegan" | "ask" | "no"`. House rule: a false "safe" can hospitalise a coeliac
child; a false "ask" just makes someone double-check. Those costs are not equal,
so when evidence is thin, drop a rung.
Japan trap checklist — apply to EVERY flag:
- Soy sauce is wheat by default → teriyaki, most sauces, gyoza, marinades,
  nimono, donburi tare, dashimaki. Needs confirmed tamari to be `gf`.
- Inherently wheat: ramen, udon, somen, tempura and kara-age batter,
  okonomiyaki, takoyaki, tonkatsu/panko, pasta, bread, cake, cookies, pancakes,
  hotcakes, Napolitan, curry roux (Japanese curry roux is a wheat roux — a
  Japanese-style curry is `gf: "no"` unless the shop says otherwise), miso can
  be barley (mugi), most soba is wheat-blended.
- Hidden animal for vegan: dashi (bonito/niboshi) is in nearly everything,
  plus egg, honey, gelatin, fish sauce, butter, and lard in Chinese cooking.
- Red-flag test: if the cuisine inherently requires wheat, a `gf` flag is
  presumed WRONG until the shop explicitly accounts for it.
Do not write essays in the flag; the reasoning goes in `note` only if a diner
would want it.

## ENTRY SHAPE — exact keys, no extras
One entry per shop, keyed by the record `id` given to you.
```json
{
  "verified": "authoritative" | "partial" | "provisional",
  "confidence": "high" | "medium" | "low",
  "sources": ["url", "..."],
  "price_note": "Prices approximate — may change.",
  "last_checked": "2026-08-19",
  "items": [
    { "ja": "<as printed on the menu>",
      "romaji": "<how to say it>",
      "en": "<what it actually is, plain English>",
      "price": "¥1,200" or "",
      "section": "<menu section, e.g. Lunch / Drinks / Sweets>",
      "gf": "gf" | "ask" | "no",
      "vegan": "vegan" | "ask" | "no",
      "note": "<what a curious diner would want to know>",
      "dish_key": "<lowercase_snake_case>" }
  ]
}
```
- `verified: "authoritative"` = from the SHOP'S OWN site or its own posted menu
  (including its own Instagram/Facebook post, its own HotPepper/Hitosara page,
  or a clear photograph of the shop's own printed menu/board). Nara currently
  sits at 3% authoritative — chase the shop's own material hard.
- `verified: "partial"` = a mix: some items from the shop, some from reviews;
  or a shop-sourced but incomplete/outdated list.
- `verified: "provisional"` = reconstructed from blogs, review photos, or
  third-party listings only.
- `price: ""` when no price is published. Never guess. Use `"¥850"` format with
  a comma above 999 (`"¥1,200"`). Note in `note` if the price is old
  (e.g. "price from a 2019 post").
- `note` is the payoff. "Kakinoha-zushi: vinegared rice and cured mackerel
  wrapped in a persimmon leaf to preserve it — mountain food from before
  refrigeration; the leaf is wrapping, not eaten" beats a bare translation.
  Say what makes the dish local, what texture to expect, how it is served,
  what the portion is, whether it is a set. Keep it to one or two sentences.
- Aim for **8–25 items per shop where the shop posts that many**. If the shop
  genuinely only sells six things, six is right. Do not pad.
- `dish_key`: lowercase_snake_case, stable, e.g. `napolitan`, `kakinoha_zushi`,
  `cream_soda`, `mixed_sandwich`.
- `romaji`: Hepburn, macron-free, word-spaced, e.g. `kakinoha-zushi`,
  `tamago sando`, `kuzukiri`.

## OUTPUT
Write ONE JSON file at the path given in your prompt: an object mapping
`id` -> entry. UTF-8, real Japanese characters (not \u escapes), 1-space or
2-space indent. Validate it parses before you finish
(`python -c "import json;json.load(open(PATH,encoding='utf-8'))"`).

Do NOT write any .md report, summary or notes file. Your final message back
should be one line per shop: `<id>: <n> items, <verified level>` plus a very
short note on where the menu came from or why it was empty.
