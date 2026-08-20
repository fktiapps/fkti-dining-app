# Tokyo menu research — agent brief

One agent per shard. Your shard is `data/_tokyo_menu_shards/sN.json` (~15 records,
each with id, name, cuisine, cuisine_type, neighborhood, website, menu_url).

**Read `docs/MENU-RESEARCH-NOTES.md` first.** It is the accumulated method from
seven completed city tranches — where menus actually come from, which hosts answer
a scripted fetch and which 404, and the traps that have already caught someone.
Every line in it cost an earlier agent an hour. Add anything new you learn to the
bottom of it before you finish.

## What a menu is for here

It is for the traveller sitting in front of an all-Japanese menu with no idea what
any of it says. **Decoding the menu is the value, on its own.** Do not skip a shop
because it is "not gluten-free" or "not vegan" — a yakitori counter that suits
neither diet still needs its board translated. Cover every record in your shard.

## Output

Write to `data/_menu_verdicts/tokyo_sN.json` — an object keyed by record id:

```json
{
  "<record id>": {
    "verified": "authoritative | true | partial | provisional",
    "confidence": "high | medium | low",
    "sources": ["https://…"],
    "price_note": "Prices approximate — may change.",
    "last_checked": "2026-08-20",
    "items": [
      { "ja": "…", "romaji": "…", "en": "…", "price": "¥000",
        "section": "…", "gf": "", "vegan": "", "note": "…", "dish_key": "…" }
    ]
  }
}
```

- `verified: "authoritative"` **only** when the item list came from the shop's own
  site, or from a HotPepper / Hitosara page the shop maintains itself. Tabelog does
  not qualify. An authoritative entry must have items.
- `gf` ∈ `gf | ask | no | ""` · `vegan` ∈ `vegan | ask | no | ""`. Empty means
  "not assessed", which is a fine answer and much better than a guess.
- **An item may only be `gf: "gf"` if its `note` says why.** The merge script drops
  an unexplained `gf` to `ask`, so you lose the claim anyway. Rice-flour bakeries
  whose own allergen line reads 小麦 because wheat is baked in the same workshop are
  common — that is exactly what the note is there to catch.
- Beer, 麦茶, 麦焼酎, highballs and malt drinks are **never** `gf`. The merge script
  rejects the entry outright if you flag one.
- `dish_key`: a short lowercase slug, so the same dish links across shops.

An **honest empty** — `items: []`, `verified: "provisional"`, with the sources you
tried — is a correct and useful result for a shop with no published menu. It records
that the search was done. **Never invent a dish, a price, or a section.**

## Gluten rules for Japan (getting these wrong makes someone ill)

- **Soy sauce contains wheat by default.** Assume wheat unless the shop names a
  gluten-free tamari. Anything simmered, glazed, or dipped is suspect.
- **麩 (fu) is pure wheat gluten.**
- **十割 (juwari) soba is NOT gluten-free**: 打ち粉 dusting flour on the board, and the
  tsuyu is wheat soy sauce.
- **麦 means barley**: 麦味噌, 麦茶, 押麦 / もち麦 in 十八穀米, malt. All contain gluten.
- 天ぷら, 唐揚げ, フライ, カツ, お好み焼き, たこ焼き, 餃子 — wheat batter or wrapper, and a
  shared fryer even when the item itself is not breaded.
- Dashi (bonito) and egg defeat vegan; so does 白だし and most 麺つゆ.

## Vocabulary is not evidence (owner's ruling, 2026-08-19)

Do **not** discount a shop's claim because it writes 「グルテンフリー」 or
「小麦アレルギー対応」 rather than セリアック — the word "celiac" is barely used in Japan.
Absence from FindMeGlutenFree or HappyCow is not a disqualifier either. Record the
shop's own wording in the item `note` and let it stand.

## Return

Only a 3-line summary: shops covered, items written, honest-empties, and anything a
human should look at. Do not paste the menus back.
