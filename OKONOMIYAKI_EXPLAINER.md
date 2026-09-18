# OKONOMIYAKI EXPLAINER — design, mirroring the live "Ramen Geek" pattern

Design document, not yet built. Modeled directly on the ramen feature that's already live in
index.html (the "🔬 Ramen Geek" per-bowl modal plus the separate "🍜 Build me a bowl"
preference-matcher) — read there first (index.html ~line 1320-1410) before this. Every
okonomiyaki concept below traces to a section of OKONOMIYAKI_EXPERTISE.md (§refs), same rule
as the schema. This is proposed for sign-off, exactly as RAMEN's radar axes needed Greg's
review before being locked — nothing here is built or final.

═══════════════════════════════════════════════════════════
WHY THE SAME METRICS DON'T WORK — AND WHAT ACTUALLY DOES
═══════════════════════════════════════════════════════════

Ramen's education works because it teaches a diner to see a HIDDEN MECHANISM behind
something they'd otherwise just taste: kansui is invisible chemistry that explains why the
noodle is yellow and chewy; chintan/paitan is a boil-intensity choice that explains why one
broth is clear and another cloudy; tare/broth separation explains why the same pot can serve
three different bowls. None of that is ramen-specific in principle — what's ramen-specific
is the MECHANISM (an alkaline noodle, a simmered stock, a separable seasoning concentrate).
Okonomiyaki has no broth and no kansui, so importing those exact concepts would be decorative
rather than educational. But it has its own hidden mechanisms, equally real, equally
invisible to a diner who hasn't been told — the design task is finding okonomiyaki's ACTUAL
kansui, not okonomiyaki's fake chintan.

The mapping, stated as "same JOB, different MECHANISM," not "same thing, renamed":

| Ramen concept | What job it does | Okonomiyaki equivalent | Same job, how |
|---|---|---|---|
| **Kansui** (§ramen 2) | invisible batter/dough chemistry explains a texture the diner would otherwise take for granted | **Yamaimo absence** (§2) | the crepe's thinness and crispness — as opposed to Osaka's fluffy custard — comes from what's deliberately NOT in the batter; a diner tasting the difference has no way to know why without being told |
| **Chintan vs paitan** (§ramen 5) | a real per-bowl textural BINARY resulting from a technique choice, worth a UI toggle | **Cabbage: steamed-through vs. still-crunchy** (§3) | how long/how tightly a shop covers the pile is a real, describable technique choice with a genuine textural outcome, exactly as boil-intensity is for broth |
| **Tare** (§ramen 1) | the separate, applied layer that actually NAMES the dish and is where shop-to-shop identity lives | **Sauce** (§7) | Otafuku vs. a rival brand vs. a house blend vs. a master's lineage recipe is precisely "the seasoning concentrate that gives this shop's version its identity," including the same brand-vs-shop-choice trap (§7's bottle ambiguity is a direct cousin of "tonkotsu is a broth, not a tare" — a classification error waiting to happen) |
| **Aroma oil** (§ramen 1) | a separate, non-integrated finishing layer that changes the smell/character without touching the base | **Garnish: aonori vs. katsuobushi** (§8) | one is bright/green/plant, the other is smoky/fish/umami — two okonomiyaki finished the same way underneath can smell and taste genuinely different by which of these (or both, or neither) tops it |
| **Richness (assari↔kotteri)** (§ramen 1) | an overall heaviness spectrum, independent of the other axes | **Richness** (§5, §7, §8) | direct — driven by oil-or-not (Atomu's no-oil method vs. a heavy build), protein load, mayo-or-not; no translation needed, the concept already generalizes |
| **Noodle firmness / hydration** (§ramen 2) | a bite/texture spectrum tied to a specific component | **Noodle-layer char** (§4, §12) | how hard the noodle is fried on its own patch of griddle before reassembly — soft-tossed vs. deeply seared — is a real, describable technique spectrum with a genuine textural payoff, same structural role |
| **Broth base identity** (§ramen 1) | WHAT the dish is fundamentally built from, orthogonal to texture/seasoning | **Protein/ingredient emphasis** (§5, §10 Okonomimura findings) | pork-belly-default vs. oyster-forward vs. seafood-forward vs. vegetable-forward is exactly "what this bowl/build is made from," the same categorical (not continuous) choice broth-base is for ramen |
| **Regional pantheon / soul & lineage** (§ramen §6,§9) | places a bowl in a larger lineage the diner can appreciate | **Shop lineage & craft_story** (§9, §11, schema `craft_story`) | ramen's pantheon is REGIONAL (this app spans all of Japan); okonomiyaki here is Hiroshima-only, so the equivalent lineage is SHOP-level — mentorship, Okonomimura-vs-independent, ingredient-sourcing stories (§11's Lopez/Atomu/Hiro-chan material is exactly this section's content) |

One ramen concept that does NOT get an okonomiyaki analog, on purpose: there is no
"layering vs mixing" toggle, because every record in this app's scope IS the layered
(Hiroshima) style by definition — that fact is universal background education (like kansui
being true of all ramen), not a per-shop variable to filter on. Presenting it as a filter
chip would imply some Hiroshima shops mix and others don't, which isn't the finding.

═══════════════════════════════════════════════════════════
PART 1 — THE PER-SHOP "🔬 OKONOMIYAKI GEEK" MODAL
═══════════════════════════════════════════════════════════

Mirrors `renderRamenGeekBody()` exactly: a top disclaimer line, then sections that render
the shop's actual data alongside inline 🔬-prefixed educational text pulled from a glossary
object, shown only when relevant (an `edu()` call per fact, same as ramen's).

**Top disclaimer** (parallel to ramen's kansui-ratios-rarely-published line):
> "The documented craft of this build. Exact cabbage-cut measurements and sauce recipes are
> rarely published per shop — ask the staff, or watch the counter, for those."

**Sections, in order** (emoji + label + parenthetical exactly matching ramen's style):

  1. **🥬 The Build** — cabbage cut/volume/sourcing (`okonomiyaki.cabbage`), whether the
     shop is stated to deviate from flour+water crepe norm (`okonomiyaki.crepe`). Inline
     edu: the yamaimo-absence fact (only shown once per view, framed as universal — "unlike
     Osaka-style, this crepe carries no mountain yam" — with a one-line note if THIS shop is
     a stated exception).
  2. **🍜 The Noodle** — `okonomiyaki.noodle` (soba/udon choice offered, house-made,
     supplier). Inline edu: the soba-is-not-buckwheat trap (§4) — this is load-bearing
     enough (celiac safety, not just trivia) that it should probably ALSO surface in the
     diet chips area, not only buried in the geek modal; flagging that cross-cutting need
     here rather than deciding UI placement unilaterally.
  3. **🧂 The Sauce** — `okonomiyaki.sauce` (brand, lineage_note). Inline edu: the tare-
     parallel framing ("the sauce is what names this shop's version, the way tare names a
     ramen bowl") plus, WHEN RELEVANT, the bottle-trap caution (§7) — but only rendered when
     a shop's gf_status/vegan_status is anything other than confirmed, so it reads as "here
     is why we don't know" rather than a generic disclaimer on every single record.
  4. **🌊 The Garnish** — `okonomiyaki.garnish` (mayo stance, aonori note, katsuobushi).
     Inline edu: aonori-vs-katsuobushi character note (§8), and the sauce-only-is-
     traditional fact framed as observation, not correction, when a shop offers mayo.
  5. **🔥 The Craft** — `okonomiyaki.menu_names` (rendered as a real list: name → contents
     → price, with an explicit "not listed" state rather than hidden when contents are
     unconfirmed — §9's whole point is that an honest gap here is more useful than a
     guess) and `okonomiyaki.signature_build`.
  6. **🗺️ Shop & Lineage** — `okonomiyaki.craft_story` entries, grouped by their
     `category` (lineage / ingredient_sourcing / technique / history / philosophy) the way
     ramen's soul section groups `regional_style` + `pantheon`. THIS is where an Atomu-style
     "cooks without oil" fact, a Hiro-chan-style "hearty, oyster-forward, named signature
     dish" fact, or a Lopez-style "trained outside Okonomimura on purpose" story renders —
     the section this whole document exists to give a home to.

**Diet chips** (`gf`/`vegan` status pills, exactly mirroring ramen's `dchip()`): unchanged
pattern, but per §14, expect `gf` to read "no" far more uniformly than ramen's own spread —
worth designing the UI to not look broken or overly repetitive when every single
okonomiyaki record says the same red "GF ✗", the way it currently doesn't for ramen (ramen's
GF chip is ALSO usually "no", so this isn't a new problem — just confirming the existing
pattern already handles it, not something to redesign).

═══════════════════════════════════════════════════════════
PART 2 — "🥞 BUILD ME AN OKONOMIYAKI" (the preference-matcher, parallel to Build-a-Bowl)
═══════════════════════════════════════════════════════════

Mirrors the ramen tool's shape exactly: continuous 0-5 sliders for craft axes, plus
categorical chip-pickers for identity choices, combined with the same weighted-distance
scoring `scoreBowl()` already implements (axis-match weighted higher than category-match
when categories are chosen, same 0.65/0.35 split is a reasonable starting point to reuse
rather than re-derive).

**Sliders — REVISING the four rough axes OKONOMIYAKI_SCHEMA.md proposed**, now derived from
the mapping table above rather than guessed cold. Five, matching ramen's six closely enough
in depth without inventing an axis that has no real per-shop variation behind it:

  1. **richness** (0=light/oil-free ↔ 5=heavy/indulgent) — direct ramen parallel, §5/§7/§8.
  2. **cabbage_texture** (0=still has crunch ↔ 5=fully melted/steamed-soft) — THE
     chintan/paitan-equivalent axis; genuinely binary-ish in practice like broth texture,
     so consider ALSO exposing it as a two-chip toggle ("Crunchy"/"Melted") the way ramen
     exposes texture as chips (Clear/Creamy) rather than only a slider — ramen does both
     (chintan/paitan is both an inline-edu concept AND a chip), and this axis fits that
     same dual treatment better than a pure 0-5 gradient does.
  3. **char_crispness** (0=soft-tossed noodle/soft crepe edge ↔ 5=deeply seared/crisp) —
     the noodle-firmness-equivalent axis, §4/§12.
  4. **sauce_intensity** (0=light glaze ↔ 5=heavily sauced) — the tare_strength-equivalent
     axis, §7.
  5. **garnish_punch** (0=plain ↔ 5=aonori-and-katsuobushi-forward) — the aroma_punch-
     equivalent axis, §8. Consider whether this should be one intensity slider or two
     (separately scoring "how much aonori" vs "how much katsuobushi", since one is a
     vegan-relevant choice and the other isn't) — flagged as a real design fork, not
     resolved here.

  DROPPED from the earlier four-axis draft: `cabbage_forward` (how dominant cabbage reads
  vs. protein/noodle) — on reflection this is closer to a CATEGORICAL identity question
  ("what kind of build is this") than a continuous craft axis, and belongs with the chips
  below instead, the way broth_base is categorical for ramen rather than a slider.

**Chips — categorical identity pickers**, mirroring ramen's Broth/Tare/Style chip rows:

  - **Protein/ingredient emphasis** (parallel to ramen's Broth chips): Pork · Oyster ·
    Seafood · Vegetable-forward · Mixed. Sourced from §5 and the Okonomimura findings (§10)
    — Teppei Ekimae and Hiro-chan's oyster emphasis, Suigun's seafood focus, Syo-Chan's
    pork/kimchi build are exactly the kind of real, distinct identities this chip row
    should be able to distinguish, the way Tonkotsu/Chicken/Seafood distinguish ramen bowls.
  - **Sauce identity** (parallel to ramen's Tare chips): Otafuku · House/Independent ·
    Shared-venue (e.g. Okonomimura's Sun Foods blend) · Master-lineage. Sourced from §7 and
    schema `sauce.brand`.
  - **Cabbage texture** (parallel to ramen's Style/texture chips): Crunchy · Melted — see
    slider #2 above; the dual slider+chip treatment mirrors chintan/paitan's own dual
    treatment in the live ramen UI exactly.

═══════════════════════════════════════════════════════════
THE GLOSSARY — draft copy for an `OKONOMIYAKI_EDU` object, mirroring `RAMEN_EDU`'s voice
═══════════════════════════════════════════════════════════

Written here as a first draft so the actual wording can be reviewed before it ships, the
same way RAMEN_EDU's copy presumably was. Each maps to an EXPERTISE.md section:

```
OKONOMIYAKI_EDU = {
  yamaimo: "Hiroshima's crepe is just flour and water, thin enough to see the griddle
    through before it sets. Osaka's is different on purpose — it mixes in grated
    <b>nagaimo</b> (mountain yam), whose slippery starch traps air and bakes into a fluffy,
    custardy pancake. Hiroshima's crepe was never meant to do that job: it's a wrapper for
    a construction project, not the dish itself, so there's nothing for a yam binder to do
    here. (It's also, historically, the ingredient postwar cooks had the least of.)",

  cabbage_steam: "The cabbage mountain is covered and left alone on purpose. Trapped steam
    both shrinks the pile down and pulls out the cabbage's own sweetness as it cooks — press
    or stir it, the natural instinct, and you crush the very channels the steam needed and
    squeeze the moisture out before it can do that work. A shop that steams it down further
    is choosing a softer, sweeter result; a shop that pulls it earlier is choosing to keep
    some bite.",

  sauce: "The sauce is what actually <i>names</i> a shop's version of this dish, the way
    tare names a ramen bowl — <b>Otafuku</b> (the Hiroshima company that invented a
    thickened Worcestershire sauce for this exact dish in 1952) is the famous one, but
    plenty of shops use a rival brand, a house blend, or a sauce a chef learned from a
    mentor. ⚠ Whether a given bottle is wheat-free or animal-free is NOT a brand-wide fact —
    Otafuku's own product line includes both a standard sauce and a separately-labeled
    'vegan' one, which only makes sense if they aren't the same recipe. Ask, don't assume.",

  garnish: "The finishing garnish changes the character without touching anything
    underneath it — exactly like a ramen aroma oil. <b>Aonori</b> (dried green seaweed
    flakes) is bright, sharp, plant-based. <b>Katsuobushi</b> (bonito flakes) is smoky,
    fish-based, and 'dances' visibly in the rising steam. A shop can lean on either, both,
    or neither.",

  noodle_identity: "Ask for 'soba' here and you will NOT get buckwheat — the noodle under
    that name is the same wheat, alkaline <b>chuka-men</b> family as ramen and yakisoba,
    just carrying over yakisoba's naming habit. Udon is also wheat. There is no version of
    this choice that changes the gluten answer.",

  eating_style: "Hiroshima eats this off the iron with a small spatula (<b>kote</b>/hera),
    not a plate and chopsticks — that's specifically a Kansai/Hiroshima habit; Kanto plates
    it. It's not just custom: a flat kote cuts a clean cross-section through a LAYERED dish
    and lifts every layer together in one bite, while chopsticks tend to pull a stack apart.
    Switching methods mid-meal (kote to a plate, then chopsticks) is considered poor form —
    pick one and stay with it."
};
```

═══════════════════════════════════════════════════════════
OPEN QUESTIONS FOR SIGN-OFF (same status as ramen's radar before Greg reviewed it)
═══════════════════════════════════════════════════════════
  1. Do the five sliders (richness, cabbage_texture, char_crispness, sauce_intensity,
     garnish_punch) actually cover the interesting variation, once real shop data exists —
     or does the pilot surface a sixth axis (e.g. something specific to egg technique, §6)
     that these five don't capture? Ramen's axes were locked AFTER real design discussion;
     these are a first derivation, not tested against real records yet.
  2. Should `garnish_punch` split into two axes (aonori intensity, katsuobushi intensity)
     given one is vegan-relevant and the other isn't? Flagged above, not resolved.
  3. Cabbage texture as BOTH a slider and a chip (mirroring chintan/paitan's dual
     treatment) — confirm that's wanted rather than picking just one.
  4. The noodle-naming GF trap (§4) is celiac-safety-relevant, not just trivia — should it
     surface in the main diet-chip area of a place's normal detail panel (not just inside
     the Geek modal), the way a load-bearing ramen fact might? This is a real UI-placement
     decision, not answered by this document.
  5. Protein/ingredient-emphasis chips (Pork/Oyster/Seafood/Vegetable/Mixed) were derived
     mostly from the small Okonomimura sample in EXPERTISE.md §10 — worth revisiting once
     the actual pilot (§ OKONOMIYAKI_SCHEMA.md) has real data across more than 7 stalls,
     in case the real distribution suggests different or additional categories.

No shop touched, no code written — this is the design layer, same staging as EXPERTISE.md
→ SCHEMA.md before it.
