# OKONOMIYAKI SCHEMA — proposed, derived from OKONOMIYAKI_EXPERTISE.md

Research-first, same rule as ramen: every field below traces to a verified section of the
briefing (§refs). Proposed for Greg's sign-off before any shop is touched — per his own
calibration (2026-09-18): *"This shop uses a 4mm cabbage cut for a more rustic feel," "The
owner uses aonori from his grandmother's hometown," "this chef studied under the owner of
this other shop, which is why he uses his master's sauce rather than Otafuku," "This shop
prides itself on its scallions, which come from a farm north of Hiroshima"* — illustrative,
not real claims about any shop, but they set the bar: specific, personal, sourced, at the
level of an individual craftsperson's choices, not "uses fresh cabbage."

An `okonomiyaki` object is added ONLY to okonomiyaki-type Hiroshima places (cuisine/name
matching, same detection this app already uses — 88 candidates currently exist in
data/hiroshima.json). Shape mirrors how `ramen`/`chef_bio`/`safety` already live on a place.

```
okonomiyaki: {
  // ── FACTUAL, STRUCTURAL (ready to lock; each maps to a verified EXPERTISE.md section) ──

  crepe: {
    yamaimo: bool,           // does THIS shop deviate from the flour+water norm and add
                              //   mountain yam? Default assumption is false (§2); only
                              //   set true/false once actually checked, not assumed.
    notes: ""                 // any other stated deviation (dashi in the batter, mirin
                              //   ratio called out, etc.) — SOURCED, not inferred.
  },

  cabbage: {
    cut_mm: number|null,      // e.g. 4 — only if the shop or a reviewer states an actual
                              //   measurement or a comparative claim ("thicker than usual").
                              //   null, not a guess, when unstated.               (§3)
    style_note: "",           // e.g. "cut long rather than fine, by the owner's own
                              //   description" — the STANDARD is long sengiri strips;
                              //   only note this field when a shop is SAID to do
                              //   something specific with it.
    sourcing: ""              // where the cabbage itself comes from, IF a source says so
                              //   (a named farm, a prefecture, "whatever's freshest at
                              //   Hatsukaichi market that morning") — this is exactly the
                              //   "scallions from a farm north of Hiroshima" category,
                              //   applied to cabbage specifically.
  },

  noodle: {
    offers_choice: bool,      // does this shop actually ask soba/udon, or fix one?  (§4)
    types_available: [enum],  // chuka_men | udon | both — NEVER "soba" alone as if it
                              //   were a distinct ingredient; the GF-relevant fact is
                              //   always "wheat", regardless of which the menu calls it.
    house_made: bool|null,
    supplier_note: ""         // a named noodle maker, if the shop says so (§4 mentions a
                              //   real example — a shop using a named local noodle brand
                              //   — that pattern, sourced per shop.)
  },

  protein: {
    default: "",              // usually pork belly (§5) — note only if this shop's
                              //   default differs or is sourced from somewhere specific.
    sourcing_note: ""         // e.g. a named farm/region for the pork, IF stated.
  },

  sauce: {
    brand: "otafuku" | "other_commercial" | "house" | "master_lineage" | "unknown",
    lineage_note: "",         // THIS is the "trained under X, uses his master's sauce"
                              //   field. Structured because sauce lineage is one of the
                              //   most-asked-about axes (§7) and deserves its own home
                              //   rather than living buried in a paragraph.
    gf_status: "unconfirmed" | "wheat_confirmed" | "gf_labeled_bottle_confirmed",
    vegan_status: "unconfirmed" | "no" | "vegan_labeled_bottle_confirmed",
                              // Default is ALWAYS "unconfirmed" per §7's bottle trap.
                              //   Only a specific, sourced check of THIS shop's actual
                              //   sauce moves it off unconfirmed — Otafuku's brand-level
                              //   ambiguity does not resolve any individual shop's case.
    notes: ""
  },

  garnish: {
    mayo: "sauce_only" | "offered" | "default_on_top",   // §8 — traditional is sauce_only
    aonori_note: "",          // THIS is the "grandmother's hometown" field — sourcing or
                              //   personal-story detail about the aonori specifically,
                              //   when a source actually gives one.
    katsuobushi: bool|null,
    other: []                 // beni shoga etc. if confirmed present.
  },

  // ── THE NAMES — never inferred, always read off the actual menu             (§9) ──
  menu_names: [
    { name: "",                // exactly as printed, e.g. "デラックス" / "Deluxe"
      contents: "",            // ONLY what a source actually says is in it — §9's whole
                              //   point is that "Deluxe" means something different at
                              //   every shop. An empty contents field (name known,
                              //   contents not) is correct and complete; a guessed
                              //   contents field is exactly the failure mode §9 warns about.
      price: "",
      source: "" }
  ],

  // ── THE CRAFT STORY — where the personal/lineage/pride detail actually lives ──
  // This is the field the 2026-09-18 calibration is really about. Each entry needs its
  // own source, same discipline as chef_bio.anecdotes elsewhere in this app — an
  // unsourced entry here is fabrication risk of exactly the kind REVIEW_PROTOCOL and
  // the fabrication-is-forbidden rule exist to catch, made worse by being personal/
  // human-interest detail that reads as more trustworthy than a mere fact, and is
  // usually LESS independently checkable, not more. The model to aim for: EXPERTISE.md
  // §11's Lopez Okonomiyaki finding (owner deliberately chose to operate outside
  // Okonomimura to keep the creative latitude for his own "mama's style" build) — real,
  // sourced to a named outlet, and it explains WHY the shop differs, not just THAT it
  // does. §12 gives the causal reasoning behind the standard build (why thin crepe +
  // cabbage bulk are one fact, why layering solves a griddle-throughput problem, etc.)
  // — a craft_story entry that connects a shop's deviation back to one of those root
  // reasons (as the Lopez/Okonomimura-standardization axis does) is worth more than one
  // that just restates a difference without explaining what it means.
  craft_story: [
    { category: "lineage" | "ingredient_sourcing" | "technique" | "history" | "philosophy",
      text: "",                // the specific claim, in the voice of a finding, not a guess
      source: "" }
  ],

  signature_build: "",         // the dish this shop is actually known/recommended for,
                              //   sourced (a review consensus, the shop's own menu
                              //   highlighting it, a named "our most popular").

  // ── DIETARY (celiac #1; be as blunt as the ramen schema is)                 (§14) ──
  gf:    { status: "no" | "ask" | "rare_options", note: "" },
  vegan: { status: "no" | "ask" | "available", note: "" },

  // ── PRESENTATION (PROPOSED — needs Greg's OK, same as ramen's radar was) ──
  // SUPERSEDES the original 4-axis draft — re-derived in OKONOMIYAKI_EXPLAINER.md by
  // mapping each ramen radar axis to its actual okonomiyaki mechanism (same JOB, different
  // MECHANISM) rather than guessing cold. `cabbage_forward` was dropped in that pass — on
  // reflection it's a categorical identity question (what kind of build is this), not a
  // continuous craft axis, and moved to a chip-picker instead (see EXPLAINER's Part 2).
  profile: {
    richness: 0,               // 0-5 — oil-or-not, protein load, mayo-if-used; direct
                              //   ramen-richness parallel, no translation needed
    cabbage_texture: 0,        // 0-5 — still-crunchy ↔ fully melted/steamed-soft; THE
                              //   chintan/paitan-equivalent axis (a real technique-driven
                              //   binary-ish spectrum) — consider exposing as a chip
                              //   toggle too, mirroring chintan/paitan's own dual
                              //   slider+chip treatment in the live ramen UI
    char_crispness: 0,         // 0-5 — noodle-layer char / crepe-edge crispness; the
                              //   noodle-firmness-equivalent axis
    sauce_intensity: 0,        // 0-5 — how sauce-forward the finish reads; the
                              //   tare-strength-equivalent axis
    garnish_punch: 0           // 0-5 — how aonori/katsuobushi-forward the finish is; the
                              //   aroma-punch-equivalent axis — may want splitting into
                              //   separate aonori/katsuobushi intensities since only one
                              //   of the two is vegan-relevant (open question, not
                              //   resolved — see OKONOMIYAKI_EXPLAINER.md)
  },

  confidence: "high|medium|low|none",
  sources: [url]
}
```

## Why `craft_story` is a list of typed entries, not one free-text field

Greg's four illustrative examples are four DIFFERENT kinds of claim (a technique choice, an
ingredient-sourcing story, a mentorship/lineage fact, a sourcing pride-point). Typing them
(`lineage | ingredient_sourcing | technique | history | philosophy`) does two things: it
lets a future pass query "show me every sauce-lineage story across Hiroshima" the way
`regional_style` does for ramen, and it forces the researcher to name what KIND of claim
they're making before writing it — which is itself a small check against vague filler
("the owner is passionate about quality" is not a category above and shouldn't be written).

## Radar axes — NOT locked, offered as a starting point only

Unlike ramen's radar (six axes, explicitly LOCKED by Greg after a real design discussion
about richness-vs-oiliness), okonomiyaki's four axes above are a first guess with much
less settled technical grounding behind them. Flagging honestly rather than presenting
them as more solid than they are: expect these to change once real shop research starts
surfacing what actually varies interestingly from place to place.

## The pass (once this schema is approved)

**Pilot scope, updated 2026-09-19 (Greg: "both")** — two tracks in the same pilot:

1. **The Okonomimura cluster** — ~20-25 stalls across floors 2-4 of the building. Added
   after EXPERTISE.md §10's stall-differentiation finding: a short research pass found
   real, sourced, non-padded differentiation for 7 stalls (Atomu, Hiro-chan, Teppei
   Ekimae, Suigun, Syo-Chan, Daimarudou, Itsukushima) in one pass, because the venue is
   bounded and naturally comparative — every stall cooks the same base dish a few meters
   from its neighbors, so "what's different about this one" has an actual, findable
   answer far more often than it does scattered across the city. Two of the 7 already
   exist as records (Atomu as "お好み村 あとむ", Daimarudou as "大丸堂"); the other five
   (Hiro-chan, Teppei Ekimae, Suigun, Syo-Chan, Itsukushima) need a name-matching check
   against the existing 88 before assuming they need discovering from scratch. Building-
   wide fact to carry into every stall's `sauce` field: multiple sources agree all
   Okonomimura stalls share one custom sauce made for the building by Sun Foods (not
   Otafuku) — so `sauce.brand` should default toward that shared fact rather than being
   treated as a per-stall lineage question the way it would be for an independent shop.
2. **The standalone famous shops** — Mitchan Sohonten, Nagata-ya, and Hassei (all three
   already exist as records; Hassei is also one of the unverified GF leads from
   EXPERTISE.md §14 — worth checking both angles on the same visit), plus a few more
   independent, well-documented shops to round out a comparison AGAINST the Okonomimura
   cluster — these are the shops that chose NOT to be part of a shared-building, shared-
   sauce format (echoing §11's Lopez Okonomiyaki finding), so the pilot should watch for
   whether that independence shows up as more individual craft_story material than the
   Okonomimura stalls tend to yield, not just report both sets in isolation.

Purpose of the pilot either way: prove the research actually finds real, sourceable,
craft_story-grade detail at the depth Greg asked for — and be honest in the pilot report
about which shops/stalls yielded real depth and which yielded only the generic facts
everyone already knows, rather than padding the thin ones to look consistent. Scale to the
remaining records only after the pilot's sourcing discipline holds up.
