# Citation verification — agent brief

You are checking whether this app's safety claims are true to the sources they cite.
The owner's words: **"Trust is paramount for the GF/Vegan layers of this app."** A
celiac reads these claims and decides whether to eat somewhere.

## The question you are answering

For each item: **does the cited page actually support the claim the record makes?**

Not "is the claim plausible". Not "did I find something similar elsewhere". Does
*that page* say *that thing*. If the record's support is somewhere else, the record
is citing the wrong source and that is a defect even when the claim is true.

## Verdicts — one per item

| verdict | meaning |
|---|---|
| `supported` | The cited page contains the claim. Quote the sentence you found. |
| `moved` | The page supports it but the wording changed (site edit, reworded quote). Give the current wording. |
| `unsupported` | The page fetched fine and does **not** support the claim. |
| `wrong_source` | The claim is true and you found real support — at a **different** URL. Give that URL. |
| `unreachable` | 403/404/timeout/JS-only after you genuinely tried the fallbacks below. **Not** a verdict about the claim. |

`unreachable` is not a polite `unsupported`. Keep them separate — one is a fact about
the claim, the other is a fact about your network. An earlier bulk verifier in this
repo returned CONFIRMED for four out of four **deliberately invented** shop names
because it treated "I found something" as "it checks out". Do not repeat that.

## Before calling anything unsupported, actually try

1. **Plain fetch**, then with an iPhone User-Agent. Tabelog answers on
   `s.tabelog.com` with a mobile UA where the desktop host 403s.
2. **JS-rendered pages** — a fetch returns an empty shell. Try the site's JSON:
   `<site>/wp-json/wp/v2/pages`, `/wp-json/wp/v2/posts`, or a `__NEXT_DATA__` blob in
   the HTML. Wix and Squarespace sites often expose the text this way.
3. **The Wayback Machine**, `https://web.archive.org/web/2023/<url>`. Essential when a
   domain has lapsed or the page was rewritten — and it tells you whether the quote
   was *once* there, which distinguishes a stale citation from an invented one.
4. **Search the exact quoted string** on Yahoo Japan. If it appears verbatim on a
   different page, the claim is real and the citation points at the wrong place →
   `wrong_source`.

HTTP 429 is the engine refusing to answer, not answering "no". Back off and retry.

**Fetching changes hour to hour — try, do not assume.** In one day HappyCow and
FindMeGlutenFree went from needing the r.jina.ai proxy, to answering a plain curl, to
403-ing again; r.jina.ai went from working to Cloudflare-403 on every host. Any fixed
recipe written here will be wrong by the time you read it. So: try plain curl first,
then an iPhone UA, then a desktop UA, then Wayback, then a text proxy — and record in
`http` WHICH route actually worked and what the others returned. That record is worth
more than the recipe, because it tells the next agent what was true at your run rather
than at mine.

Two that have held: Tabelog DETAIL pages answer with an iPhone UA and carry
Restaurant + FAQPage JSON-LD (coordinates, address, hours), while its keyword SEARCH
endpoints are unreliable and have returned the whole database or the homepage. CAA and
other Japanese government PDFs need `pdftotext -enc UTF-8 -nopgbrk`; `-layout` yields
nothing.

A review that only ever moves labels down is not an honest review. Menbaka Fire Ramen
was downgraded on a "shared boiling water" line the owner had publicly retracted;
BITTE carries `options` while describing itself as 「コンタミネーションを徹底管理した小麦
不使用・完全グルテンフリーのお店」 with 小麦 unticked on all 24 of its products. Denying a
celiac a genuinely safe place is a real cost, and this app exists to find them.

So on every record sweep, add one `tier_recommendation` object per record when the
evidence supports a tier DIFFERENT from the one the record carries:

```json
{ "id": "<record id>", "kind": "tier_recommendation",
  "field": "gf_confidence" | "vegan_status",
  "current": "options", "recommended": "high",
  "evidence": ["<url>", "..."], "why": "<one or two sentences>" }
```

Recommend only; nothing you write promotes a record. Upgrades pass through
REVIEW_PROTOCOL.md's human gate, because a tier above "ask" is the one thing in this
app that can make someone stop checking for themselves.

## What this sweep has actually found — look for these

Every one of these is a real defect from an earlier shard, not a hypothetical:

- **`vegan: full` on a venue serving meat, fish, dairy or honey.** The single most
  common defect. GYUMON was labelled fully vegan with 25 items on its own menu marked
  non-vegan, including A5和牛ラーメン.
- **A branch citing its SIBLING branch's evidence.** MOON and BACK Kiyamachi's ten
  sources all print the other branch's address, a kilometre away.
- **A claim transplanted from a different venue in the same article.** en-kitchen's
  dedicated-utensil assurance belongs to みちのり亭.
- **A quote cut before its own ただし / ※ exception.** CHOICE's "100% gluten-free"
  omits 「except Asakura's pasta, made of ancient wheat」 — 古代小麦 is wheat.
- **A quote that exists nowhere on the web.** Check the exact string before believing it.
- **A citation to a guide's bare root**, which cannot evidence anything venue-specific.
- **A label contradicting its own detail text** — `options` above "Not suitable for celiacs".
- **A dedicated/high badge on a business that has closed**, sometimes beside a claim
  reading "Confirmed open".
- **A lapsed domain** re-registered as casino or gambling content, still linked.
- **車麩 / グルテンカツ / 生麩 on a vegan menu** — seitan is pure wheat gluten, vegan and
  dangerous, and a celiac reading the vegan list meets the worst item in the shop.
- **Mistranslation.** 植物性 means plant-based, NOT wheat-free. 丸大豆 describes the soy,
  not the wheat — 丸大豆醤油 is wheat-brewed and is NOT a gluten-free soy sauce.
- **もち麦 / 押麦 / 麦茶 / 麦味噌** — all barley, all gluten, all easy to miss.
- **Records wrong in BOTH directions**: warning against something harmless while
  omitting the operator's own admission of contamination.

## Closure is not a tier

If a venue has shut, do NOT put "closed" in `tier_recommendation.recommended` — that
field takes tier values only and anything else is discarded. Emit a separate object:

```json
{ "id": "<record id>", "kind": "trading", "status": "closed_permanently",
  "evidence": ["<url>", "..."], "why": "<what you saw, with dates>" }
```

The pipeline hides those records. Say what you actually saw — a 閉店 banner, an
NXDOMAIN domain, an own-account announcement, a suspended listing — and give the date,
because "closed" and "closed since 2024" are different facts to a reader.

## Output

Write a JSON array to the path you are given. One object per item:

```json
{ "id": "<record id>", "city": "...", "field": "...", "quote": "<the claim as recorded>",
  "url": "<cited url>", "verdict": "supported|moved|unsupported|wrong_source|unreachable",
  "found": "<the sentence you actually found, or null>",
  "correct_url": "<only for wrong_source>",
  "http": "<status or fetch note>",
  "method": "<which of the four routes above got you there>",
  "note": "<one sentence a human can act on>" }
```

Return **only** a 3-line summary: counts by verdict, and anything alarming. Do not
paste the items back.
