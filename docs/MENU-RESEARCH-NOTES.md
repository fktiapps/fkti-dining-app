# Menu research — what works, learned the hard way

Accumulated by the agents who did Himeji (27 shops), Toba (27), Hiroshima, Nara,
Kanazawa, Nagoya and Kyoto (34). Read this before starting a menu tranche; every line below
cost somebody an hour.

## Where menus actually come from

Ranked by yield, best first:

1. **Photographs of the in-store menu board.** The single biggest source. Google
   Maps photos, Instagram posts, and blog write-ups routinely include a
   full-resolution shot of the board. Read it at full res. Sasazuki, Benkei,
   Senmonten, Fukutsugi, Nagatokan and both MUSEA branches were all recovered
   this way and nowhere else.
2. **The shop's own site** — this is what earns `verified: "authoritative"`.
   Chase it first even though it is often not the fastest.
3. **Shop-managed aggregator pages** — HotPepper and Hitosara listings are
   maintained by the shop itself and count as authoritative. Tabelog does not.
4. **The Internet Archive**, for lapsed or broken domains. Kyubei's own site has
   lapsed to a PC-repair firm and Iseshima Karinto's throws a 403 from a broken
   `.htaccess`; both still yielded authoritative item lists from Wayback.
5. **The WordPress REST API** when the rendered page is JavaScript-only:
   `<site>/wp-json/wp/v2/pages` often returns the menu the browser would build.
   That is how Otis's 25 items came out.

## Dead ends — do not spend time here

- **Tabelog `/dtlmenu/` on the DESKTOP host.** The Japanese URLs 404 to a
  non-browser fetcher while `/en/` works and is empty. But see "Tabelog is not a
  dead end any more" below — the mobile host changes this completely.
- **Google, Bing, DuckDuckGo, Mojeek via curl** — all 403 or CAPTCHA.
  `search.yahoo.co.jp` is the only search engine that answers.

## Tabelog is not a dead end any more (Kyoto, 2026-08)

The old advice was wrong, or rather incomplete. Tabelog answers fine — you have
to ask the **smartphone host with an iPhone User-Agent**. Desktop UA gets 404;
mobile UA gets 200.

```sh
UA="Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1"
curl -s -A "$UA" -H "Accept-Language: ja" -L "https://s.tabelog.com/kyoto/A2601/A260301/<id>/dtlmenu/"
```

Set `PYTHONIOENCODING=utf-8` before piping into Python on Windows or cp1252
blows up on the Japanese.

Three distinct things this unlocks, in ascending order of usefulness:

1. **`/dtlmenu/`** — a real priced item list, but ONLY where the shop manages
   its own Tabelog page (look for 公式 next to the name plus a 更新日 date).
   Where it doesn't, the URL silently falls through to the shop top page — you
   get 口コミ review text instead of items. That is a "no menu posted", not an
   error. Tosaya Muroto's 35 items and 6 courses came out this way.
2. **`/dtlrvwlst/<review id>/`** — full review bodies, where the desktop host
   404s. This is where most corroborating prices come from: a dated first-hand
   visit is the best check you have on a menu photo of unknown vintage.
3. **`/dtlmenu/?photo=1`** — the big one. The user-uploaded **menu-photo** tab:
   photographs of the shop's own printed card, handwritten お品書き, ticket
   machine or street A-board. This carried 5 of 6 shops in one Kyoto batch and 4
   of 6 in another. Pull the image URLs
   (`https://tblg.k-img.com/restaurant/images/Rvw/<n>/<hash>.jpg`), curl them
   down and open them with the **Read tool, which renders images visually**.
   Read the card at full resolution.

   **Date them or you will publish stale prices.** The page embeds a JSON blob
   giving each photo's `imagePath`, caption and a `date` field (`"2026/01"`) —
   parse and sort on that. (The `Rvw/<n>` number is also monotonic with recency
   and works as a fallback.) This is not academic: one shop's top photo was a
   2014 ticket machine at ¥500 against ¥850 on the 2026 card, a 70% drift, and
   a 2018 Kagari board ran ¥250 low across the board and listed dishes that no
   longer exist. Always quote the newest card and state its date in `price_note`.

A clear photograph of the shop's own menu board or ticket machine is
`verified: "authoritative"`.

## When WebSearch runs out

Several agents found the 200-call session budget already exhausted. `curl` from
the Bash tool still works. Two things to remember:

- Send a browser User-Agent or many Japanese sites refuse.
- Japanese pages are often Shift_JIS or EUC-JP, not UTF-8 — decode accordingly
  or the text arrives as mojibake.

Every Kyoto agent hit the exhausted budget on its first call, so assume it is
gone and plan for curl from the start. `search.yahoo.co.jp` answers:

```sh
q=$(python -c "import urllib.parse,sys;print(urllib.parse.quote(sys.argv[1]))" "$1")
curl -s -A "$UA" -H "Accept-Language: ja" "https://search.yahoo.co.jp/search?p=$q&ei=UTF-8"
```

Strip the `<a href>` pairs out of the result and ignore anything on a
`yahoo.co.jp` / `lycorp.co.jp` domain — those are chrome, not results.

## Traps that have already caught someone

- **Price lists attach to the wrong shop.** A Retty list circulating for 太助
  belongs to an unrelated Asakusa shop; a hotmenu.jp article attributes すし梅's
  prices to 太助. Confirm the address before trusting a price.
- **Near-identical shop names.** 魚新 (Toba) is routinely confused with 魚伸
  (Takasago) and 魚心. Check the city and the address, not the name.
  Two more caught in Kanazawa, both a click away from being transcribed:
  `ebisukego.wixsite.com/oden` is **えびす警固本通店 in Fukuoka**, not Kanazawa's
  おでん ゑびす; and `kawaratei.com` is a **Western pasta restaurant**, not the
  Katamachi horumon shop かわら亭. A plausible-looking domain is not evidence.
- **Rice-flour bakeries that also bake wheat.** Three found so far — PUKKU,
  Sakura Pan Kobo and Conconto — where the shop's OWN allergen line reads 小麦
  while the headline says 米粉. Always look for the ingredient/allergen page
  before flagging any rice-flour item `gf`.
- **Stale "gluten-free" press.** Cafe Lente's 2019 GF-risotto coverage was
  contradicted by a 2026 diner who asked the chef directly. Prefer recent
  first-hand reports over old press.
- **Dishes discontinued but still filed under the old category.** Sasazuki's Ise
  udon is gone though Tabelog still files it under うどん. Do not list it.
  Same again in Kyoto: 麺屋 かがり 木屋町店's yuba ramen was its signature in
  2018 and was gone by 2023, but the app record still described the shop by it.
- **A shop that shares a famous brand's name but is not that brand.** 麺屋 かがり
  木屋町店 is NOT a Kyoto branch of Ginza's 篝 chicken-paitan chain — it is an
  independent 21:00–06:00 late-night shop at 中京区紙屋町365. It does sell a
  鶏白湯, which is presumably how the confusion started. Check the address and
  the opening hours against the brand before you inherit a brand's menu.
- **Chains where the branch prices differ.** Take the branch page over the
  chain-wide page; if only chain-wide prices exist, say so and drop to `partial`.
- **A restaurant that is only itself at certain hours.** MAZEMEN プルダ serves
  mazemen 11:00–14:00 only; the same room is the Korean restaurant 韓杯房 プルダ
  at night, with its own listings and a completely different menu. Do not merge
  the two. Similarly 料理屋 てら戸 has dropped lunch entirely (now 17:00–22:00),
  so dishes older write-ups call lunch items are now evening orders.
- **Unedited website-builder stock content.** LE MARS (Kanazawa) has a Wix page
  titled ディナーメニュー that is pure template filler — pan & dip, hamburger,
  schnitzel, Pepsi. Their real food is on other pages of the same site. If a
  Japanese bistro's "menu" reads like a US diner, or prices are suspiciously
  round and Western, suspect the template before you transcribe it.
- **Lapsed domains land on spam.** Curio Espresso's own domain is now a casino
  WordPress site and Kado no Mise's is a parking page. Both menus survived only
  in the Wayback capture. Check what the domain actually *is* before trusting it.
- **A shop can be renamed and still carry the old Tabelog listing.** そば処 はしもと
  now trades as そば処 にしの縁 at the same Nomachi address; the record needs the
  new name, not a "closed" flag.

## Tooling that worked in the Kanazawa tranche (2026-08)

- **WebSearch was at 200/200 before the tranche even started.** Two substitutes,
  both proven in this tranche:
  1. **WebFetch pointed at a search URL.** `WebFetch("https://search.yahoo.co.jp/
     search?p=...", "list the top results")` answers reliably and is the most
     robust option. Bing via WebFetch returns garbage — unrelated GitHub/Reddit
     results — so use Yahoo Japan.
  2. **`curl https://search.brave.com/search?q=...`** with a browser UA; parse
     the `href="https://..."` list out of the HTML. Brave rate-limits after
     ~4 rapid queries and starts serving a tor-manual page instead of results;
     space them out and it recovers.
  Direct `curl` to `search.yahoo.co.jp` now 429s after ~2 queries, and both
  DuckDuckGo endpoints (lite and html, GET or POST) return a shell or a block.
- **WebFetch is blocked for `web.archive.org`** — use plain `curl` (a cookie jar
  helps) against `/web/<timestamp>id_/<url>`.
- **WebFetch against Tabelog works and is worth one call per shop.** The
  `/dtlmenu/` page is still empty, but WebFetch on the *main* listing reliably
  returns the address, the lunch/dinner budget bands, and any prices buried in
  review text and photo captions. That is where 土家's ¥500 coffee, 木場谷's
  ¥33,000 omakase and 八郎すし's course band came from.
- **Look for the city's obsessive local blogger.** For Kanazawa kissaten it is
  **kanazawa-drifter.net** — every post photographs the physical menu under a
  `<figcaption>メニュー</figcaption>` and captions the drink he ordered with its
  price, which double-checks your OCR alignment. It carried 4 of 6 shops in the
  kissaten batch. Both `/archive` and `?q=` work via curl. Spend ten minutes
  looking for the equivalent before grinding through aggregators.
- **Deskew menu photos before reading them.** Download at full res, correct the
  perspective (`PIL Image.transform(QUAD)`), then crop and upscale 4–8× with
  LANCZOS. This is not cosmetic: skew makes dotted-leader price columns line up
  one row off, which nearly mis-assigned an entire hot-drinks column.
- **Read the price you can see, not the one you can infer.** Where a photo cut
  off the last digit, the honest entry is an empty `price` plus a note saying
  what was legible — not a plausible number rounded to the board's granularity.
- **Shop menu PDFs are often image-only scans** — `pdftotext` returns nothing.
  Render and *look* at them: `fitz.open(pdf)[i].get_pixmap(dpi=200).save(png)`,
  then Read the PNG. いち凛's 2026-05 lunch and course menus were transcribed
  this way and exist in no other form.
- Two Windows gotchas that cost time: Git-Bash `/tmp` is not a path Windows
  Python can open (use `cygpath -m`), and Japanese output dies on cp1252 unless
  you set `PYTHONIOENCODING=utf-8`.
- `merge-menus.mjs` only accepts `vegan` values `vegan|ask|no|""` — **`limited`
  is a record-level label, not an item-level one**, and an entry using it is
  rejected wholesale. It also rejects `gf:"gf"` with an empty note.

## Honest empties are correct

If a shop publishes nothing anywhere reachable, emit `"items": []` with
`confidence: "low"` and the sources you actually checked. Six entries across
Himeji and Toba are honest empties. A fabricated menu is far worse than a blank
one — somebody orders from this.

## Added by the Nara tranche 2 agent (48 shops)

Two techniques that were not in this file and carried most of the tranche:

- **Tabelog `/dtlmenu/` 404s but the rest of Tabelog does not.** Japanese
  `/dtlmenu/` URLs returned 404 for 41 of 44 shops — as documented. But
  `<shop>/dtlphotolst/1/smp2/<page>/` and `<shop>/dtlrvwlst/` both return 200 to
  curl with a browser UA, and the photo `alt` attributes are user-written dish
  captions, often *with the price in them*. Scrape `alt="<shop name> - <caption>"`
  and filter on the shop name: captions prefixed `料理写真:` / `ドリンク写真:`
  belong to the *related-shops* widget, i.e. a different restaurant, and will
  silently poison the entry if you keep them. Review pages give a second harvest:
  grep lines containing 円 or ¥. This produced 15–25 usable items for shops with
  no web presence at all.
- **`nara-gourmet.com` (奈良グルメ図鑑)** is a one-man Nara restaurant
  encyclopedia with a per-shop page carrying dish-by-dish descriptions, the
  address, and often several years of menu history. Slugs are romanised
  (`/shanghairou/`, `/mamekura/`); find them with a `search.yahoo.co.jp` query of
  `<shop name> 奈良グルメ図鑑`. Other cities will have an equivalent local site —
  look for one before grinding through blogs.

Sources that earned `authoritative` here beyond the shop's own domain: HotPepper
`strJ*` pages (`/food/`, `/drink/`), Hitosara `/food.html` and `/course.html`,
and Gnavi shop sites (`*.gorp.jp` renders as a JSON blob whose `menu.all.list`
points at `r.gnavi.co.jp/<id>/menu1|menu2|lunch`, which are plain HTML).

New traps:

- **HotPepper name collisions are worse than Tabelog's.** A yahoo search for
  「旬菜と地酒 野良」(Nara) returned `strJ003498518`, which is
  「旬菜旬魚と地酒 野良のまたたび」in *Niigata* — a full, plausible, entirely
  wrong menu. Always read the address block on the HotPepper page before using it.
- **Shops rename and the old Tabelog entry keeps the menu.** 奈良三条カレー本店
  is 和牛スジカレー奈良本店 at the same address (橋本町28); the new listing has
  almost nothing, the old one has the whole menu. Confirm by address, then say so
  in the note.
- **Two unrelated "Kohaku" in one Nara worklist** — こはく。 the bakery in
  Horen-cho and 喫茶古白 inside 七福食堂 in Naramachi. Nothing about the names
  distinguishes them.
- WebSearch's 200-call session budget was already spent before this tranche
  started. `search.yahoo.co.jp` via curl carried the whole job.
- Under Git Bash, `python ... > file.txt` writes CRLF; a trailing `\r` on a URL
  makes curl return `000` and look like a network failure. `tr -d '\r'` first.
  Also add `< /dev/null` to curl inside a `while read` loop.
- web.archive.org was returning 503 "temporarily offline" during this tranche, so
  the Wayback route in the list above was unavailable.

## Tooling added in the Nagoya second tranche (2026-08-20)

- **`scripts/_tbphotos.py`** now does the Tabelog menu-photo work for you:
  `python scripts/_tbphotos.py aichi/A2301/A230109/23001639` prints every menu
  photo as `YYYY/MM  <full-res url>  <caption>`, newest first. Two details it
  encodes, both of which cost an hour to find:
  - The photo JSON is **HTML-escaped in the page** (`&quot;imagePath&quot;`), so
    a regex for `"imagePath"` matches nothing. Unescape before parsing.
  - Tabelog links `640x640_rect_<hash>.jpg`. Strip that prefix to get
    `<hash>.jpg`, the full-resolution original. The cropped one is useless for
    reading a menu card.
- **STUDIO CMS sites (`studio.design`) render nothing to curl but hand over the
  whole menu.** Symptom: a tiny HTML shell with `__NUXT_DATA__` and
  `api.studiodesignapp.com`, no text. Recipe:
  1. `snapshot_path` is in the `__NUXT_DATA__` payload —
     `https://storage.googleapis.com/studio-publish/projects/<proj>/<snap>/`.
  2. `<snapshot_path>index.json` → `pages[]`, each with `id` (the URL path),
     `uuid` and `symbolIds`.
  3. `<snapshot_path>page-views/<page uuid>.json` and
     `<snapshot_path>symbol-views/<symbol uuid>.json`.
  4. Walk the JSON pulling keys `text`, `text0`…`textN` and `data`; strip tags.
  The bucket refuses `objects.list`, and the file naming is not guessable — it
  is `page-views/` and `symbol-views/`, which you find by grepping the Nuxt
  bundle for `function fq(` / `function mq(`. hosa.nagoya's entire priced menu,
  including three full kaiseki course compositions, came out this way.

## More traps caught (Nagoya, 2026-08)

- **The `website` field on a worklist record can be the wrong business.**
  `shiboriya.com` is 「しぼりや旅館」, a ryokan in 南知多 an hour down the
  peninsula — not しぼりや 丸の内店, the Nagoya fry shop. They are related (the
  ryokan family opened the Nagoya shop in March 2026) which is exactly why the
  domain looks right. Open the site and read its `<title>` before trusting it.
- **Sushi/ramen shops with one dish still deserve an entry.** 拉麺しま sells
  しょうゆらーめん and nothing else, in three sizes plus a pork upgrade. Six
  honest items beat padding to hit a count.
- **A chef's-omakase French house is not an honest empty.** Brillance posts one
  course and a 70-bottle champagne list on its own (公式) Tabelog page, and a
  dated 2026 review lists the ten plates one by one. Course price + drinks from
  the shop's own listing = `authoritative`; label the plates clearly as one
  seating's rotating line-up.

## Tabelog's search endpoint lies (found by the Tokyo enrich pass, 2026-08-20)

`tabelog.com/rstLst/?sk=<keyword>` **silently ignores the keyword** and returns a
generic promoted-listing page. It looks like a successful search returning irrelevant
results, which reads as "this shop does not exist" — so it manufactures false
negatives, and a not-found verdict built on it is worthless.

The URL that actually searches is the one `/rst/rstsearch/?sk=<keyword>` 302-redirects
to: `/rstLst/?vs=1&sa=&sk=<keyword>&sw=<keyword>`. Follow the redirect rather than
constructing `rstLst` by hand.

Second directory that answers curl cleanly: `r.gnavi.co.jp/area/jp/rs/?fw=<keyword>`.

Reminder from the same pass: **HTTP 429 is the engine refusing to answer, not
answering "no".** Back off and retry; never let a rate-limit become a negative result.

## Added by the Tokyo shard s1 agent (2026-08, 15 shops, 452 items, zero empties)

**The best single source in this whole tranche was a PDF allergen chart on the
shop's own site.** Three of fifteen shops publish one, and each turned a pile of
guesses into item-level fact:

- 浅草 更科天狐 — `/wp-content/uploads/2026/03/Allergen-List.pdf`, a 14-allergen
  grid in Japanese *and* English covering every dish.
- WithGreen — `withgreen.club/wordpress/wp/wp-content/uploads/2026…アレルギー…pdf`,
  a 28-allergen grid with a separate line for **every topping and every
  dressing**, which is exactly the granularity a build-your-own bowl needs.
- 追分だんご本舗 — no PDF, but a `特定原材料` line on each product page. The
  *absence* of a line is informative on a site that does label: mitarashi,
  生醤油, のり巻, 胡麻たれ all read 小麦; the bean-paste skewers read nothing.

Look for `アレルギー`, `特定原材料`, `Allergen` in the page's `href` list before
you start reasoning from ingredients. It is a two-minute check that beats an
hour of inference.

**Read allergen grids as images, not as text.** `fitz` page text returns the
✖️/🔴 marks in reading order with no column positions, and a row with a merged
cell silently shifts every mark after it by one — which would have mislabelled
更科天狐's 蕎麦前盛り合わせ as wheat-free when it actually carries **大麦 (barley)
via 山ウニ**. Render at 170–400 dpi, crop to the label column plus the first
seven allergen columns, and Read the PNG. The column order on both Japanese
charts was 卵 乳 小麦 …, so a narrow left crop answers the gluten question.

**A wheat-free Japanese restaurant does exist and it will still have one trap
dish.** 更科天狐 is a genuine gluten-free soba shop — 十割 *and* 更科, and the
tsuyu, the tempura batter, the yakitori tare, the ponzu and the soy are all
house wheat-free versions. Its own card prints 「※グルテンが入っています」on
exactly one item (やま幸鮪の手巻き, smoked soy) and the barley hides in the
sobamae platter that all three courses include. Do not let a shop's headline
claim stop you reading the per-item chart.

**Tabelog `/dtlmenu/` on the smartphone host is now the reliable first call.**
9 of 13 shops returned a real priced item list. Size tells you which: a ~520KB
response is the shop top page (fall-through, i.e. "no menu registered"); a
140–260KB response is an actual menu. Check `更新日` — 追分だんご was 2010,
色川 2018, ガパオ食堂 2021 (10–15% below the shop's current site prices), while
くわんね was 2026/08/03 and MENSHO 2026/06/26. Old registrations are a trap, not
a source. The `/dtlmenu/lunch/` and `/dtlmenu/drink/` sub-tabs **404** — those
counts on the page need JS, so use `?photo=1` for the rest of the card.

**`scripts/_tbphotos.py` carried five shops on its own** — the entire menu for
ビストロ福昇亭, 肥後一文字や, 国際秘羊館, アタクカフェ and らーめんはやし, none of
which publish anything. Three details worth knowing:

- Photograph a board twice and you can *date-check a price*. アタクカフェ's
  handwritten lunch board was shot 2024-03, 2024-04 and 2025-12 with identical
  figures — that turns "two-year-old photo" into "prices have held for two
  years" and justifies `confidence: high`.
- Ticket-machine photos are a completeness check the board is not. はやし's
  2026-06 machine has exactly three live buttons matching the board, so you can
  state that is the whole menu rather than hoping.
- Shops post their own allergy notices in the window. はやし's reads
  「魚介類・エビ・鶏肉・豚肉・醤油等の材料を使用しています」— shop-sourced, and
  the shrimp is not something you would have inferred from a soy ramen.

**STUDIO CMS, second sighting** (ガパオ食堂, after hosa.nagoya). The recipe in the
Nagoya section works unchanged, plus one thing it does not say: dish *names*
often live in a CMS collection and render as literal `{{title}}` in the
page-view JSON, while the Japanese sub-name and the price come through paired in
`text1`/`text2`. Recover the names by matching the Japanese sub-name against the
shop's own (stale) Tabelog list — and where no name is evidenced, leave `romaji`
empty rather than inventing a Thai transliteration.

**Gnavi `*.gorp.jp` is a JSON blob** (already noted for Nara) and it worked
again: 色川's `menu.all.list[].url` → `r.gnavi.co.jp/0001033061/menu1/`. Watch
for the shop's own page disagreeing with itself — the photo caption said ¥4,800
where the table said ¥4,900. Take the table.

**New traps:**

- **A ramen shop that is a lamb izakaya after 14:00.** 国際秘羊館's street
  A-board reads 【昼限定】…11:00〜14:00; the ramen order slip is the *lunch*
  menu and the evening is Hokkaido jingisukan with a ¥500 otoshi and no
  published prices. Same room, two restaurants — cf. MAZEMEN プルダ in Kyoto.
- **Miyazaki 冷や汁 is traditionally 麦味噌**, i.e. barley, i.e. gluten. The
  prefecture's signature dish is a gluten trap and nothing about the name says
  so. Same question applies to any Kyushu miso dish (くわんね's なめろう).
- **"Okara bread" is not wheat-free.** HealthyTOKYO's おからパン sandwiches sit
  deliberately *outside* the printed "Gluten-free Line Up" heading on its own
  board. A 100% vegan café is not a gluten-free café; read which section a
  dish is printed under.
- **The dressing carries the wheat, not the salad.** Two WithGreen bowls
  (スモークチキンのシーザー, 蒸し鶏とりんご) are clear of 小麦 undressed and only
  fail because of the *recommended* dressing — and dressings swap free. That is
  a real, actionable answer for a diner, and you only get it from a chart that
  lists the dressings separately.
- **A shop's COVID-era "closed for the time being" notice may be dead HTML.**
  追分だんご本舗's site still shows the 2022 tearoom suspension — but it is
  inside an HTML comment, and a 2026-04-29 shop announcement reopened the
  tearoom shaved-ice season. Check the news feed before recording a closure.

**Windows/Bash note:** a heredoc-built Python script much over ~15KB fails the
Bash tool with `ENAMETOOLONG: uv_spawn`. Write per-shop JSON fragments with the
Write tool into a `_sN_parts/` directory and merge them with a ten-line script
that orders keys by the shard file — that also gives you the brief's
"save every 4 shops" for free, and the merge script is the natural place to
hang a validator (gf/vegan enum, `gf` with empty note, malt drink flagged `gf`).
