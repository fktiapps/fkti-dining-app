# Reliable-chain GF / vegan research — agent brief

## Why this matters more than one more restaurant

Greg, whose student is vegan, on the last trip: *"finding 'Plant Based' options at
Starbucks was a life-saver for the last 2 weeks."*

A chain is worth more to a traveller than an equally good independent, for reasons
that have nothing to do with the food:

- **It is where you already are.** Every station, every mall, open when nothing else is.
- **It is predictable.** The same item is the same item in Kanazawa and in Ueno.
- **It publishes allergen data.** Most Japanese chains publish a per-item
  アレルギー情報 table — often a PDF or a searchable page. That is FIRST-PARTY,
  ITEM-LEVEL documentation, and it is better evidence than almost anything else in
  this dataset.

This layer is the safety net for the evening when the researched plan falls through.

## Your chains

You are given 4 chains. For each, find the operator's own allergen documentation and
answer one question: **what can a celiac eat here, and what can a vegan eat here?**

## Where to look, in order

1. **The chain's own アレルギー情報 / アレルゲン検索 page.** Usually linked from the menu or
   the footer; often `/allergy/`, `/allergen/`, `/menu/allergy/`. Frequently a PDF —
   `pdftotext -enc UTF-8 -nopgbrk`. Some are interactive JS; look for the JSON the page
   fetches.
2. **原材料 listings** on individual product pages.
3. The chain's own **news / press releases** for plant-based launches — these are
   usually seasonal and the menu page will not mention a discontinued one.
4. Only then, third-party coverage — and never as the sole basis for a "reliable" tier.

## The tiers, and what earns them

```
gf.tier     reliable  A SPECIFIC ITEM is genuinely wheat-free — celiac-defensible.
                      Sealed/retort items that never meet the kitchen are the
                      strongest case (CoCo Ichibanya's low-allergen curry is the model).
            limited   Navigable but strict: you must order around wheat, shared
                      kitchen, no guarantee.
            none      Wheat is unavoidable. Say so plainly.

vegan.tier  reliable  A specific item is genuinely animal-free per the operator.
            limited   Possible with substitutions or a drink; not a guaranteed meal.
            none      Nothing animal-free.
```

**Name the item.** "They have GF options" is useless. 「特定原材料を使用していないカレー,
poured over plain rice, no toppings allowed」 is what a traveller can act on.

## Japan-specific traps that decide these calls

- **Soy sauce is wheat.** Every gyūdon tare, every teriyaki, every gyoza dip. A beef
  bowl is not gluten-free because it is "just beef and rice".
- **たまり is LOW-wheat under JAS, not wheat-free.** Only 「小麦不使用」 settles it.
- **麦 is barley**: 麦茶 (free at many chains!), 麦味噌, 押麦 in multigrain rice.
- **Dashi and 鰹節 defeat vegan** — including in "vegetable" dishes and most 麺つゆ.
- **Shared fryers.** A chain frying tonkatsu will fry everything in that oil.
- **Seasonal plant-based lines get withdrawn.** Date what you find and say if it is
  seasonal — Starbucks' line is exactly this, and it is still worth listing.
- **「ベジタリアン対応」 is not vegan** in Japanese usage; it often includes egg and dairy.

## Honesty rules

- If a chain has nothing, say so. "none" is a useful answer — it stops a traveller
  wasting an evening.
- Quote the operator verbatim where it matters, in Japanese, with the URL.
- If the operator hedges — 「完全な除去はできません」, "not intended for strict vegans" —
  that hedge goes in the record. Starbucks' entry keeps its caveat and is still the
  most useful entry in the file.
- Never infer a tier from the cuisine. Check the table.

## Output

Append to `data/_chains_research/<slug>.json`, one file per chain:

```json
{ "name": "Sukiya", "name_ja": "すき家", "icon": "🐂",
  "gf":    { "tier": "…", "best": "…", "detail": "…" },
  "vegan": { "tier": "…", "best": "…", "detail": "…" },
  "both_gf_and_vegan": "…",
  "caveats": ["…"],
  "sources": ["…"],
  "allergen_page": "<the operator's own allergen URL, if one exists>",
  "checked": "2026-08-21" }
```

Match `data/chains_kb.json` exactly — read the CoCo Ichibanya and Starbucks entries
first; they are the standard.

Return only a 3-line summary: the tier you gave each chain, and anything alarming.
