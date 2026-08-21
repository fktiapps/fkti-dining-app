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

## What counts as support

The page must carry the substance. A shop's page saying 「グルテンフリーのケーキ」 supports
"offers gluten-free cake". It does **not** support "the kitchen is wheat-free" — that
is a bigger claim and needs its own words on the page.

Two Japanese traps that decide these calls:
- **麦 is barley** (麦味噌, 麦茶, 押麦, もち麦) and barley contains gluten. A page listing
  those does not support a gluten-free claim; it contradicts one.
- **十割 soba is not gluten-free** — 打ち粉 dusting flour, wheat-soy-sauce tsuyu. A page
  saying 十割 does not support "safe for celiacs".

**Vocabulary is not evidence** (owner's ruling): a shop writing 「グルテンフリー」 or
「小麦アレルギー対応」 rather than セリアック is not thereby weaker. Judge the substance.

## Two kinds of worklist

**Absent-quote lists** (`absent_sN.json`) are single claims a mechanical checker
already flagged. One object in, one verdict out.

**Record sweeps** (`rN.json`) give you whole records: `{id, city, name, gf, vegan,
website, claims[]}` where each claim is `{field, text, source}`. Verify **every**
claim on every record. Fetch each distinct source ONCE and check all the claims that
cite it — that is why the work is sharded by record.

A claim with `"source": null` cannot be verified as it stands. Do not mark it
`unsupported` — that would be judging a claim nobody sourced. Mark it `uncited` and
**go find the source**: if you can evidence it, return `wrong_source` with the URL
you found, which lets the claim be repaired rather than deleted. If nothing supports
it anywhere, `unsupported` is then the right verdict and worth saying loudly.

For record sweeps also return, once per record, a `record_verdict`:
`clean` (every claim supported) · `repairable` (some claims need a corrected URL) ·
`defective` (at least one claim is unsupported anywhere) · `blocked` (too much
unreachable to judge).

## Say when a record is UNDER-rated, not only when it is over-rated

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
