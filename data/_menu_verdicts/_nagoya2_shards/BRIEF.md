# Nagoya menu-research brief (tranche 2)

You are researching and writing menu entries for a handful of Nagoya restaurants for a
travel dining app. Your shard file lists the shops. Read it first.

## READ THESE TWO FILES BEFORE ANYTHING ELSE
- `C:\pf\fkti-dining\docs\MENU-RESEARCH-NOTES.md` — where menus actually come from, dead ends, traps.
- `C:\pf\fkti-dining\REVIEW_PROTOCOL.md` — the GF/vegan evidence rules.

## WHY THIS MATTERS
The menu exists for a traveller sitting in a Japanese restaurant staring at an all-Japanese
menu with no idea what anything says. Let them DECODE it: what is this dish, what's in it,
what's it called, roughly what does it cost. That value is independent of anyone's diet.
Do NOT skimp on a wheat-heavy shop — a ramen shop or an udon shop deserves as full a
transcription as a kaiseki house.

## TOOLING THAT WORKS (verified in this session, 2026-08-20)
Assume WebSearch's session budget is exhausted. Use curl from the Bash tool. Windows: set
`export PYTHONIOENCODING=utf-8` before piping Japanese into Python.

Tabelog answers on the **mobile host with an iPhone UA** (desktop 404s):

    UA="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
    curl -s -A "$UA" -H "Accept-Language: ja" -L "https://s.tabelog.com/aichi/A2301/A230109/<id>/dtlmenu/"

Verified working just now against 23001639. Rewrite any `tabelog.com/...` or
`tabelog.com/en/...` menu_url in your shard to the `s.tabelog.com` **Japanese** path.

Three Tabelog surfaces, in ascending usefulness:

1. `/dtlmenu/` — real priced items, but only where the shop manages its own page (look for
   公式 plus a 更新日 date). Otherwise it silently falls through to the top page and you get
   口コミ review text. That is "no menu posted", not an error.
2. `/dtlrvwlst/` and `/dtlrvwlst/<review id>/` — full dated review bodies; best corroboration
   for prices.
3. `/dtlmenu/?photo=1` — **the big one**: user-uploaded photos of the shop's own printed card,
   handwritten お品書き, ticket machine or A-board. Pull image URLs
   (`https://tblg.k-img.com/restaurant/images/Rvw/<n>/<hash>.jpg`), curl them down and open them
   with the **Read tool, which renders images visually**. Read at full resolution; deskew/upscale
   with PIL if the card is skewed.
   **DATE THE PHOTOS.** The page embeds a JSON blob with each photo's `imagePath`, caption and a
   `date` field ("2026/01"). Parse and sort on it. One shop's top photo was 70% below the current
   price. Always quote the newest card and say its date in `price_note`.
   A clear photo of the shop's own board/ticket machine = `verified: "authoritative"`.

Also worth doing, per shop:

- The shop's OWN site first (this is what earns `authoritative`). Try `/menu`, `/food`, `/lunch`,
  `/course`, and `<site>/wp-json/wp/v2/pages` if the page is JS-only.
- Shop-managed aggregators — **HotPepper (hotpepper.jp), Hitosara, Gurunavi / ぐるなび, owst.jp,
  gorp.jp, ikyu, TableCheck** — these are maintained by the shop and DO count as authoritative.
  Several shops in this tranche have `owst.jp` / `gorp.jp` / `kinshachi.com` sites: those are
  shop-managed and usually carry the full priced menu.
- Instagram: the profile page HTML often carries recent post captions with prices. Try
  `curl -A "<iPhone UA>" "https://www.instagram.com/<handle>/"` and grep for prices; also try
  any linked Linktree / lit.link.
- Wayback for lapsed or broken domains: plain curl (WebFetch is blocked for web.archive.org)
  against `https://web.archive.org/web/<timestamp>id_/<url>`.
- Search: WebFetch pointed at `https://search.yahoo.co.jp/search?p=<urlencoded>` is the most
  reliable. `curl https://search.brave.com/search?q=...` with a browser UA also works but
  rate-limits after ~4 rapid queries.
- Japanese pages are sometimes Shift_JIS or EUC-JP. Decode accordingly or you get mojibake.

## NAGOYA-SPECIFIC — the whole point of this tranche
Nagoya-meshi is a wheat minefield. Decode each dish AND state the wheat plainly:

- 味噌カツ miso-katsu — pork cutlet in **panko** (wheat) under a sweet 八丁味噌 tare. `gf: no`.
- 手羽先 tebasaki — chicken wings, **flour-dusted**, fried, glazed with a wheat-soy/mirin sauce
  and heavy pepper. `gf: no`.
- きしめん kishimen — Nagoya's flat, wide **wheat** noodle. `gf: no`.
- あんかけスパゲティ ankake spaghetti — fat wheat spaghetti under a peppery, roux-thickened
  brown gravy. Wheat twice over.
- 味噌煮込みうどん miso-nikomi udon — stiff unsalted **wheat** udon simmered in a 八丁味噌 broth
  in an earthenware pot, often with a raw egg cracked in. `gf: no`.
- 天むす tenmusu — a rice ball with a **tempura** prawn in it. Batter = wheat. `gf: no`.
- ひつまぶし hitsumabushi — grilled eel over rice in a wooden tub. The eel tare is **wheat soy**,
  so `gf: no` — but EXPLAIN THE THREE-STAGE RITUAL, which is the actual delight: divide into
  quarters, (1) eat the first plain, (2) the second with the yakumi — spring onion, wasabi, nori,
  (3) the third with dashi poured over as ochazuke, (4) the fourth however you liked best.
- 台湾ラーメン Taiwan ramen — a **Nagoya invention** despite the name, created at 味仙 by a
  Taiwanese owner: chilli-and-garlic minced pork over ramen, brutally spicy. Wheat noodles.
  台湾まぜそば is its brothless descendant, also a Nagoya invention.
- 小倉トースト ogura toast — thick buttered or margarined toast with sweet azuki paste. Wheat.
- エビフライ ebi-fry — Nagoya's beloved big panko-crumbed fried prawn. Wheat.
- 八丁味噌 hatchō miso itself is **soybean and salt only** (no barley, no rice koji) and can be
  clean — but the miso-katsu tare built on it is not (it adds soy sauce, mirin, dashi, sugar).
  Say this accurately: don't condemn hatchō miso, do condemn the tare.
- ういろう uirō: 青柳ういろう is **rice flour**, BUT its 28-allergen line declares 小麦 because the
  same factory makes a kishimen pie. So `gf: "ask"`, never `gf: "gf"`. (Established by this
  project's own audit — apply it.)
- **Food-hall caution**: shops in 金シャチ横丁 (Kinshachi Yokochō) and similar halls share a
  website and a roof but are entirely separate businesses. Do not inherit one shop's menu for
  another, and do not treat the hall's page as the shop's own unless it carries that shop's items.

## ENTRY SHAPE — one entry per shop, keyed by the record's `id`

    {
      "verified": "authoritative" | "partial" | "provisional",
      "confidence": "high" | "medium" | "low",
      "sources": ["url", "..."],
      "price_note": "Prices approximate — may change.",
      "last_checked": "2026-08-20",
      "items": [
        { "ja": "<as printed>", "romaji": "<how to say it>",
          "en": "<what it actually is, plain English>",
          "price": "¥000" or "", "section": "<menu section>",
          "gf": "gf" | "ask" | "no", "vegan": "vegan" | "ask" | "no",
          "note": "<what a curious diner would want to know>",
          "dish_key": "<lowercase_snake_case>" }
      ]
    }

`price_note`: keep the default string, but APPEND the vintage of your source when you know it,
e.g. "Prices approximate — may change. Transcribed from the shop's menu card photographed 2026/03."

## PRIORITIES
1. **Real items, properly transcribed, 8–25 per shop**, with an `en` and a `note` that actually
   explain the dish. The `note` is the product. "Grilled fish" is a failure; say what fish, how
   it's cooked, what it's served with, what makes it worth ordering.
2. **`verified: "authoritative"` = from the SHOP'S OWN posted menu** (own site, shop-managed
   aggregator, or a clear photo of the shop's own board / card / ticket machine). Nagoya currently
   sits at 6% authoritative — push it up. Chase the shop's own source first even when slower.
3. **`gf` / `vegan` honest but BRIEF — one clause each**, folded into the `note`. Don't write a
   safety essay. Do state wheat plainly where it's there.

## VALIDATION RULES (the merge script rejects entries that break these)
- `vegan` accepts only `vegan` | `ask` | `no` | `""`. **`limited` is a record-level label, not an
  item-level one** — an entry using it is rejected wholesale.
- `gf: "gf"` with an empty `note` is rejected.
- `verified` only: `authoritative` | `partial` | `provisional`.
- `confidence` only: `high` | `medium` | `low`.

## HARD RULES
- **Never invent a dish, a price or a flag.** If nothing is published anywhere you can reach:
  `"items": []`, `confidence: "low"`, and list the sources you actually checked. An honest empty
  is correct and far better than a fabrication — somebody orders from this.
- Read the price you can SEE, not the one you can infer. If a photo cuts off a digit, emit
  `"price": ""` and say in the note what was legible.
- Confirm the ADDRESS before trusting a price list. Near-identical shop names and price lists
  attached to the wrong shop have burned this project repeatedly. A plausible-looking domain is
  not evidence.
- Don't list discontinued dishes, even if an aggregator still files the shop under them.
- Watch for restaurants that are a different business at different hours (lunch-only noodle bar,
  different name at night) — don't merge the two menus.
- Watch for unedited website-builder template filler (a Japanese bistro whose "menu" reads like
  a US diner — pan & dip, schnitzel, Pepsi — is template stock, not their food).
- Course-only restaurants (kaiseki, French, fugu, sushi omakase, teppanyaki): the courses ARE the
  menu. List each course with its price and describe what it typically contains, plus any à la
  carte and drinks you can source. Don't return an empty just because there are no single dishes.

## OUTPUT
Write a JSON object mapping record `id` -> entry to the exact path given in your task message.
Use UTF-8, `ensure_ascii=False`. Validate it parses before you finish.
Then report ONE LINE PER SHOP: shop name — item count — verified level — a few words on the source.
Do not write any other report or summary file.
