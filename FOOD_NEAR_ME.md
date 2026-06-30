# 📍 "Food near me — now" — design spec

The acute form of the app's north star: standing somewhere (rural Gifu OR un-curated Tokyo), someone
needs GF/vegan food **now**. Push one button → real options nearby in seconds. Works even in cities we
never curated, because it queries **live geodata, not our baked dataset**.

## Core principle
- **OSM is primary** — free, global, rural + urban, no API key, returns in seconds. The engine.
- **AI research is a power tool, on demand** — available when Greg wants it, never automatic, never silent.
- Decouples "did we curate this city?" from "can the app feed us here?" → running out of tokens before a
  city is no longer a failure mode. Curation = depth/DCP where there's budget; this = coverage everywhere.

## Tier 0 — the free button (no tokens, no auth, anyone can press)
The starving-kid / panic button. Costs nothing per press, so kids/students mash it freely.
- **Input:** GPS (reuse locate ◎ / state.me). Radius default ~800 m (½ mile), adjustable.
- **Source:** OpenStreetMap **Overpass API** via a Cloudflare Function `/api/nearby?lat&lng&r` (proxy =
  avoids CORS, lets us cache + rate-limit). Query amenity = restaurant/fast_food/cafe/convenience/
  supermarket; pull `diet:vegan` / `diet:vegetarian` / `diet:gluten_free`, cuisine, name, hours.
- **Classify instantly against existing KBs (no LLM):** konbini brand → konbini GF/vegan KB ("salt onigiri,
  edamame…"); supermarket → grocery KB; restaurant/cafe → OSM diet tags if present, else "unknown — ask".
- **Output:** "Near you now" sheet, ranked by distance + walk-time; each row = diet verdict chip + one-tap
  directions + ask-phrase + (konbini) chain guide. Lead with the reliable floor (konbini) so there's always
  *something*; surface dedicated GF/vegan tagged places above it when they exist.
- **Offline / weak signal:** in a precached city the konbini/grocery layers already work offline; truly
  rural + no-signal = honest "weak signal — here's last-known + your survival playbook." State it plainly.
- **Honesty:** GF (esp. a celiac kid) is high-stakes — konbini = real guidance; unverified restaurants stay
  "ask, here's the phrase," NEVER a fake "safe." Tags are mapper-supplied, not a guarantee.

## Tier 1 — AI deep-dive (token spend, GREG-AUTHORIZED ONLY)
Reached deliberately, from Greg's device, attended. "Research the top N GF candidates near here — check
menus/reviews, rank, flag cross-contamination." The panic button never triggers this.
- **The bridge that fits a tight budget:** a deep-dive **writes its result to cache/data** (a
  `stations.json`-style neighborhood entry). So a one-time authorized spend on "GF near Shibuya" becomes
  **permanent free coverage** — reused offline, optionally committed to the repo. Over the trip the places
  you actually go get covered incrementally by small authorized spends; no big upfront city sweep needed.
- Still never asserts "safe"; raises confidence, keeps the honest framing.

## Architecture notes
- First **runtime** OSM use (konbini/grocery were build-time OSM pulls baked to JSON). New piece:
  `functions/api/nearby.js` (Overpass proxy + short cache). Reuses KONBINI / GROCERY consts + diet logic +
  locate. UI = a prominent map action near ◎.
- Cost model: Tier 0 = $0/press (OSM + local classify); Tier 1 = metered, authorized, amortized by caching.
- Later, optional: HappyCow (vegan DB, richer but access is paid/restricted) as a second Tier-0-ish source.

## Build sequencing
1. **Tier 0 before the trip** — the safety net for every un-curated place; cheap (one Function + reuse KBs).
2. **Tier 1 after mobilizing** — natural mobile loop: Greg authorizes → Claude researches + writes the
   neighborhood entry to a preview branch → Greg merges → live + free thereafter.

## Open items
- Data schema for cached neighborhood results (extend stations.json pattern, or a new `nearby_cache`).
- Overpass reliability/rate-limits → caching + maybe a fallback mirror.
- Field-test radius/UX in a real rural parking lot + a dense Tokyo concourse (only verifiable on the road).
