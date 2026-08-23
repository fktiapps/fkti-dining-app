# DCD DATA REVIEW PROTOCOL — "be sure as shit we're right"
Last updated 2026-08-23. Purpose: make sure we NEVER send a celiac person to a place we misclassified.

## THE PRINCIPLE
A false "safe" can glutinate a kid; a false "ask" just makes them double-check. Those costs are not equal.
So: **evidence must CLEAR the bar to keep a confident label — anything short auto-downgrades.** And the app
floor stands: we never say "safe, just go" — every place carries "confirm with the kitchen + show the card."

### The two axes are not the same axis
Greg, 2026-08-23: *"cross contamination for GF causes physical injury, cross contamination for a vegan
causes moral injury at worst."* The asymmetry above is about **bodily harm**, so it governs `gf_confidence`
at full weight and does **not** transfer to `vegan_status` at the same weight. In practice:
- A GF tier above `ask` must clear every evidence gate, and a disproven claim anywhere on the record
  blocks it until a human looks.
- A vegan tier is not held hostage to the same gate. Holding one buys a vegan traveller nothing and
  costs them a meal they could have eaten.
- Where a shop runs a vegan course out of a shared kitchen — 味農家 is the case that settled it — `full`
  is still the right vegan label, with the shared-kitchen note in the detail text where a reader can weigh it.
This is why `scripts/apply-gate-tranche.mjs` applies its disproven-claim guard to `gf_confidence` only.

## THE TAXONOMY (as the app encodes it)
- gf_confidence: `dedicated` | `high` | `options` | `ask` | `no`
- vegan_status:  `full` | `options` | `limited` | `ask` | `no`
- "Just need rice" is NOT a per-place label — it's GF dial level 3 (`gfL===3`): stop filtering restaurants,
  turn ON the konbini/grocery survival layers. Its safety therefore lives in (a) the konbini/grocery GF KB
  and (b) the honest plain-rice reality: plain *gohan* is GF, but order it unseasoned (not fried = soy sauce,
  not takikomi), watch the scoop, skip sauces — survival, not a meal.

## EVIDENCE BAR (a label only holds if it meets its bar; else drop a rung)
GF:
- `dedicated` — the restaurant's OWN explicit GF claim AND ≥1 independent corroboration.
  Corroboration means a source that is genuinely independent AND first-hand: a celiac/GF platform
  entry (FindMeGlutenFree, HappyCow, a GF-Japan list), *or* a journalist or blogger who actually
  visited and reported what they saw. Missing either half → cannot be dedicated.

  **VOCABULARY IS NOT EVIDENCE** (Greg, 2026-08-19). Do NOT downgrade a shop for saying
  「グルテンフリー」 or 「小麦アレルギー対応」 instead of セリアック. In Japan グルテンフリー is the ordinary
  term and セリアック is rarely used even by shops that run genuinely dedicated kitchens; requiring
  the word eliminates good options without reducing anyone's risk. Likewise, absence from
  FindMeGlutenFree or HappyCow is NOT itself a disqualifier — those platforms are English-language
  and thinly populated outside the big cities. Judge the substance: is there an independent
  first-hand account, and does the shop's own claim cover the FACILITY or only the PRODUCT?
  What still disqualifies, regardless of wording:
    - the shop's claim is scoped to products while wheat is handled on the premises;
    - the shop itself declines to guarantee (「完全なコンタミ対応ではありません」 and similar);
    - the only "corroboration" reprints the shop's own copy without a visit;
    - a gluten grain is present unresolved (barley in 押麦/もち麦/十八穀米, malt, rye, uncertified oats).
- `high` — ≥2 independent credible sources of real GF handling; NOTE the shared-kitchen cross-contamination caveat.
- `options` — some naturally-GF/adaptable dishes, NO special handling → must state cross-contamination risk +
  "confirm ingredients AND prep."
- `ask` — honest default when evidence is thin. No reassurance.
- `no` — cuisine can't be made GF. Say so plainly.
- HARD RULE: a single source can never support `dedicated`/`high` (cap at `options`/`ask`).
Vegan mirrors it (`full/options/limited/ask/no`) with the DASHI trap front and center.

## JAPAN TRAP CHECKLIST (apply to every GF/vegan claim)
- Soy sauce = wheat (default) → teriyaki, most sauces, gyoza, marinades. Needs tamari/GF-soy confirmed.
- Wheat cuisines: ramen, udon, tempura/kara-age, okonomiyaki/takoyaki, tonkatsu (panko); most soba is
  wheat-blended unless *jūwari* (100% buckwheat — even then shared flour/water = cross-contamination).
  Miso can be barley (mugi).
- Vegan hidden-animal: dashi (bonito/niboshi) is in nearly everything, plus egg/honey/gelatin/fish sauce.
  *Shōjin* is the safest vegan bet — still confirm no bonito.
- **Dashi is a GLUTEN question too, not only a vegan one.** Greg, 2026-08-23: *"bonito dashi likely
  contains soy sauce (wheat)"*. A Japanese kitchen rarely builds 出汁 from katsuobushi and water alone —
  it reaches for 白だし, めんつゆ or だし醤油, all of which are soy-sauce based, and Japanese soy sauce is
  brewed with wheat by default. So "is the dashi bonito-free?" and "is the dashi wheat-free?" are the
  same question asked by two different diners, and a finding filed under vegan_cross_contact that names
  broth, dashi, tare, miso, seasoning or sauce is GF evidence. Kombu dashi answers both at once, which
  is why 「出汁は昆布と野菜のみ」 is worth far more than 「植物性」.
- Red-flag test: does the cuisine inherently require wheat, and does the label credibly account for it?
  A ramen shop marked "high GF" is presumed WRONG until it explicitly has GF noodles.

## THE PASSES (reuses the dining research labor split — see the main HANDOFF)
1. Haiku (bulk gather): re-collect ALL current sources per place — own site FIRST, then HappyCow,
   FindMeGlutenFree, Tabelog, Google, blogs. Flag closed/moved/hours-conflict.
2. Sonnet (reconcile): apply the bar + trap checklist → KEEP / DOWNGRADE(new label+reason) / ESCALATE.
   Record the corroborating sources ON the record.
3. Opus (adversarial, high-stakes only): for every `dedicated`/`high` + every itinerary/celiac-likely place,
   an agent whose ONLY job is to DISPROVE the label — hunt "got glutened at X," negative celiac reviews,
   wheat-soy use, shared fryer. PRESUME the label wrong until it survives.
4. Greg (the gate): auto-DOWNGRADES apply immediately (more caution is always safe). Any place that KEEPS
   `dedicated`/`high` goes on a worklist with its evidence for Greg's final sign-off. Claude never finalizes "safe".

## PRIORITY (danger = over-claiming, which lives only in the positive tiers)
1. All `dedicated` + `high` GF (full adversarial pass).   2. `options` GF + anything on the itinerary.
3. Konbini/grocery GF KB (the "need rice" survival net).  4. Vegan positives (GF first — it's the ER risk).
`ask`/`no` are conservative → not dangerous → caretaker sweeps them later for MISSED options (opportunity, not safety).

## OUTPUT
Per place: a verdict {keep|downgrade, recommended label, reasoning, sources[], plain-rice note, red_flags[],
needs_greg}. Downgrades committed; retained top-tier → Greg worklist. Record `sources[]` so the caretaker can
re-audit continuously after departure.
