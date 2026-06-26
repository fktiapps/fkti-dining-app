# RAMEN SCHEMA — proposed, derived from RAMEN_EXPERTISE.md

Research-first: every field below traces to a verified section of the briefing (§refs).
The FACTUAL fields are ready to lock. The PRESENTATION layer (radar axes + pantheon
narrative) is proposed for Greg's sign-off — per his rule, data informs presentation, and
the axes must reflect how ramen is actually taxonomized, not a tidy hexagon.

A `ramen` object is added ONLY to ramen-type places (cuisine_type ramen, or a tsukemen/
tantanmen/mazesoba shop). Shape mirrors how `safety`/`chef_bio` already live on a place.

```
ramen: {
  // ── FACTUAL (ready to lock; each maps to verified briefing sections) ──
  broth_base:   [enum]  // tonkotsu | chicken | gyokai(seafood) | niboshi | beef |
                        //   vegetable | blend(W-soup) | other            (§1 anatomy)
  broth_texture: "chintan" | "paitan" | null   // clear vs cloudy/emulsified (§5)
  tare:         [enum]  // shoyu | shio | miso | other  (§1 — NOTE tonkotsu is a BROTH,
                        //   never a tare; enforce that)
  aroma_oil:    [enum]  // chiyu(chicken) | lard/seabura | mayu(black-garlic) | negi |
                        //   none | other                                  (§1)
  richness:     "assari" | "medium" | "kotteri"   // light↔rich              (§1)
  noodles: { thickness:"thin|medium|thick", shape:"straight|wavy",
             hydration:"low|medium|high", handmade:bool, notes:"" }        (§2)
  regional_style: [string]   // from the NATIONAL pantheon, regardless of city — e.g.
                             //   "Hakata tonkotsu","Onomichi","Sapporo miso",
                             //   "Hiroshima shiru-nashi tantanmen"        (§6,§7)
  sub_genre:    [enum]  // ramen | tsukemen | mazesoba/abura-soba | tantanmen |
                        //   shiru-nashi-tantanmen | niboshi | jiro-kei | tori-paitan |
                        //   other                                          (§7)
  signature_bowl: ""    // the bowl to order
  chashu: ""            // THE HEART — describe the chashu (braised vs aburi, loin vs belly,
                        //   pork vs chicken, or unusual). Its own field per ramen theology. (§3)
  notable_toppings: [string]   // the CLOTHES — menma/ajitama/negi/nori/moyashi/etc.,
                        //   incl. the shop's individual dress (negi-heavy, moyashi- vs
                        //   cabbage-forward)                                (§3, §9)

  // ── DIETARY (celiac #1; almost always restrictive — be blunt) ──        (§8)
  gf:    { status:"no|ask|rare-options", note:"" }   // wheat noodles+kansui, wheat shoyu tare
  vegan: { status:"no|ask|available", note:"" }      // fish dashi + animal tare/oil/toppings

  // ── PRESENTATION (PROPOSED — needs Greg's OK) ──
  pantheon: ""          // 1–2 sentence "where this bowl sits in the ramen world" narrative,
                        //   powered by regional_style + broth/tare/texture. (Greg's idea.)
  profile: {            // 0–5 radar axes — LOCKED (Greg 2026-06-23), see justification
    richness:0, oiliness:0, clarity:0, tare_strength:0, noodle_firmness:0, aroma_punch:0
  },

  confidence: "high|medium|low|none",
  sources: [url]
}
```

## Radar axes — LOCKED (Greg 2026-06-23)
Six 0–5 axes, each a REAL, distinct dimension from the briefing:
  • richness        ← koku: depth / umami / fattiness / BODY of the broth (assari↔kotteri) (§1)
  • oiliness        ← how much OIL/FAT sits on top & coats the mouth (seabura/lard/aroma oil) (§1)
  • clarity         ← chintan(clear) ↔ paitan(cloudy/emulsified) — visual & textural (§5)
  • tare_strength   ← saltiness/punch of the shoyu/shio/miso tare (§1)
  • noodle_firmness ← low-hydration/thin = firm chew ↔ soft (§2)
  • aroma_punch     ← garlic/mayu/sansho/chili aromatic intensity (§1, tantanmen §7)

DECISION LOG: Greg confirmed oiliness ≠ richness (richness = depth/umami/fattiness; oiliness
= amount of oil). Because richness now explicitly subsumes umami/depth, the earlier
`umami_depth` axis was REDUNDANT and was replaced by `clarity` (chintan↔paitan) — orthogonal
to richness (a clear chintan can be very umami-rich; Onomichi is clear yet oily) and the most
visually legible axis on a radar. Axes are final; the ramen pass may now score against them.

## The pass (once schema is approved)
Per city: (a) enrich every existing ramen-type place with this object (the bowl's facts are
usually documented), (b) optionally discover ramen shops we're missing. Scope is modest —
ramen-type counts are small per city except Hiroshima (tantanmen/tsukemen heavy). Generator
will mirror the gen-<city>-r2 pattern but with a ramen-specific verify prompt grounded in
RAMEN_EXPERTISE.md. Frontend radar widget + pantheon rendering = a later build; this pass
produces the DATA.
```
