# DIET MODEL — one clean classification (rebuild spec)
Last updated 2026-07-03. Supersedes the old dual `category` + `gf_confidence` scheme.

## WHY
We were classifying diet TWICE: `gf_confidence`/`vegan_status` (honest granular tiers) AND
`category` (BOTH/GF/VEGAN/SHOJIN/OMNI/MOM_AND_POP), which re-asserted "dedicated" AND drove every
map color. The two drift: a safety **downgrade** updates the tier but not the category, so a
downgraded place (e.g. L'Oiseau Bleu, a wheat bakery rated `no`) still painted a green
"dedicated vegan+GF" pin. And color-only encoding is meaningless to a color-blind user.

## SINGLE SOURCE OF TRUTH
Diet safety lives ONLY in two fields. Everything else is derived (never stored → can't drift):

- `gf_confidence`: `dedicated | high | options | ask | no`
- `vegan_status`:  `full | options | limited | ask | no`

### Tier definitions (GF; vegan mirrors it)
- **dedicated** — wheat-free kitchen, own claim AND independent celiac-grade corroboration.
- **high** — wheat-free kitchen on the venue's own word; corroboration thinner. *Same kitchen
  practice as dedicated; the difference is evidence strength, not what's on the grill.*
- **options** — shared kitchen, real GF dishes exist; confirm ingredients AND prep.
- **ask** — no standing GF offering, but **a safe meal is NEGOTIABLE** if you talk to the kitchen
  (jūwari soba boiled in a clean pot with tamari; GF-on-request; a naturally-GF plate you confirm).
- **no** — cuisine is wheat through-and-through (shoyu-ramen broth AND noodles). No conversation
  fixes it; best case is watching them scoop plain rice. Survival only.
`ask` ≠ `no`: `ask` is a *different kind of place* (a meal is achievable), not merely "less sure."

### Rate the FOOD path, not the building (the beer rule)
Gluten that exists only as **beer / alcohol the diner won't drink** is not a food-safety problem for
a non-drinking child. It is NOT airborne (unlike flour) and never enters food prep. So:
- Barley beer on premises **caps a place at `high`** (it can't be `dedicated`, since `dedicated`
  means *zero gluten in the building*) — but it does **NOT** push a genuinely wheat-free *food*
  kitchen down to `options`/`ask`. `high` is still inside the Celiac-safe notch, so the kid still
  sees it.
- The only residual is trace transfer via shared glassware/dishwashing → surface a note ("serves
  beer; ask for a clean glass or drink bottled"), not a downgrade.
- Downgrade below `high` only for gluten in the **food path**: wheat in the kitchen/fryer/sauces/
  shared cookware, a default-wheat item (e.g. the standard bun), a wheat-using parent kitchen, or a
  documented glutening. (All four of the 2026-07-03 Priority-1 downgrades met *this* bar, not beer.)

## `category` IS RETIRED
Its only non-diet job was venue vibe. Replace with:
- `mom_and_pop: true|false` (a plain flag; preserves the 🏮 pill).
- "Shojin" → the existing `cuisine` field (it's a cuisine, not a diet tier).
- `dedicated GF` / `fully vegan` / `dedicated vegan+GF` become **derived labels** computed from the
  two tiers at render time — never stored.
- Drop the dead `dcp` field (null on all 1,849 places).

## THE DIAL — 5 notches, 1:1 with the tiers (both 🌾 GF and 🌱 Vegan)
Cumulative "how much do I show / how much risk will I accept":
1. **🛡 Dedicated** — corroborated wheat-free kitchen (strictest)
2. **✓ + Fully-GF** — adds `high`
3. **◐ + Options** — adds shared-kitchen GF dishes
4. **◇ + Ask** — adds negotiable places ("I'll talk to the cook")
5. **🍚 + Need rice** — everything incl. `no`, plus konbini/grocery survival layers
Vegan mirror: full → +options/limited → +ask ("hold the bonito dashi") → everything.
The dial now MEANS the same thing as the tiers (no more "why 3 vs 5").

## CULTURAL COMFORT — a relation (place × user), not a place property
`cultural_comfort` intrinsic levels: `konnichiwa` < `japanese` < `guide_only`. The intrinsic level
is a property of the venue (language/cultural accessibility for anyone).

The "go with a guide" demand from an `ask` tier is **conditional on the user's active dial** — it is
NOT baked onto the place. A jūwari soba shop is a normal `japanese`-level lunch for a non-GF diner;
it only becomes guide-required for a celiac who must negotiate the clean-pot protocol.

**Effective comfort (computed at render) = stricter of:**
1. the venue's intrinsic `cultural_comfort.level`, AND
2. `guide_only` **iff the user is filtering that axis at the `ask` notch AND this place is `ask` for
   that axis** — i.e. (GF dial engaged ≥ Ask AND `gf_confidence==='ask'`) OR (vegan dial engaged ≥
   Ask AND `vegan_status==='ask'`).

When neither applies (dial off / user not restricted), only the intrinsic level shows. Reason line
when the floor fires: "With your dietary need, a safe meal here has to be negotiated with the
kitchen — bring a Japanese speaker; don't attempt solo with a translation app."
Rationale: negotiating an ad-hoc celiac protocol is not a job for a non-Japanese-speaker with a
translation app — but that burden only exists for the diner who actually needs the protocol.

### The `ask` humility note (shown under the same condition as the floor)
At an `ask` place you are asking the owner to **change their procedure and take on risk on your
behalf**. Accommodating you is **not required** — it is a favor. The request must be made with that
understanding and humility (not the entitled-foreigner-breaks-the-shokunin's-process posture).
So whenever the `ask` floor fires, also surface this note + a humble Japanese request the diner can
show/read (fill the bracketed step from the place's `gf_detail`, e.g. "boil the soba in a clean pot"):

> **This is a favor, not a right.** Eating gluten-free here means asking the owner to change how they
> work and accept some risk. They don't have to say yes. Ask gently, and if they hesitate, thank them
> and let it go.

**Japanese request (draft — refine with Greg):**
「ご迷惑をおかけしたくないですし、お願いするのも心苦しいのですが……実は私はセリアック病で、少量の小麦（グルテン）でも体調を崩してしまいます。もし可能でしたら、〔別の鍋で茹でる 等〕していただけないでしょうか。もし難しいようでしたら、どうぞお気になさらないでください。」
(≈ "I don't want to cause you any trouble, and I hate to ask, but… I have celiac disease and even a
little wheat makes me ill. If it's possible, could you 〔boil it in a separate pot〕? If it's
difficult, please don't worry about it at all.") The closing "please don't worry if it's difficult"
is not optional — it releases them from obligation, which is the whole point.
This lives in the phrase/card system, surfaced for `ask` places (a distinct, gentler card than the
firm celiac card used for options+ places).

## ACCESSIBILITY — text/shape, never color-only
Markers carry a **glyph** for the active dial's tier, not a hue:
`🛡` dedicated · `✓` high · `◐` options · `◇` ask · (`no` renders only at "Need rice").
(Was `~`/`?` — changed 2026-07-03: Greg found `?` off-center/cheap and disliked `~`.)
Badge/detail text stays the authority ("Not gluten-free" etc.).

## MIGRATION
1. **Data** (all city files): add `mom_and_pop`; fold SHOJIN→`cuisine`; remove `category` + `dcp`.
   Tiers already exist on every record; re-check any `ask`/`no` that fails the "is a safe meal
   negotiable?" test.
2. **Frontend** (`index.html`): markers/cards derive glyph+label from tiers (kill `CAT_COLORS`);
   dial → 5 notches for both axes; legend + filters rebuilt around tiers + a Mom&Pop toggle;
   effective-comfort floor applied in the detail sheet.
3. **Guardrail**: a validator that rejects any record whose derived label would contradict its tier,
   and asserts the `ask ⇒ guide_only` floor.
