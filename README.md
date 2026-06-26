# Deeply Connected Dining (深い関係食事)

_An app by Deeply Connected Experiences (深い関係体験)._

A mobile-first, installable map app (PWA) for finding **vegan & gluten-free** food while
travelling in Japan. Built for a school group with at least one celiac/serious-allergy
diet to manage. Kyoto is the test city; the architecture is city-agnostic so a whole
itinerary drops in later.

## What it does

- Map of where you're standing (geolocation) with a **draggable “you are here” pin** to scout other areas.
- Color-coded dots by category; tap one → detail sheet with **GF-confidence**, vegan status, hours, notes, distance, flags, and links.
- Filters: **Open now** (Japan-time aware), **Open late**, **Celiac-safe only**, a diet segment (Any / Vegan / GF / Both), category chips, and search.
- **“Tell me more”** button — currently a stub; once wired (Mistral web-search connector), it searches recent reviews and blogs for the granular things that matter — cross-contamination notes (“shared fryer”, “same spatula as pork”), dedicated-fryer mentions, soy-sauce/wheat flags, vegan cross-contact, staff allergy handling — each as a tappable point with a source link.
- Works offline once installed (app shell, data, and viewed map tiles are cached).

> **Safety note:** this is decision support, not a guarantee. For celiac/serious allergies, always confirm cross-contamination handling with restaurant staff. Hours change; some places need reservations or sell out early.

## Project layout

```
index.html                  the whole app (self-contained; Kyoto data bundled inline for instant/offline)
manifest.webmanifest        PWA manifest
sw.js                       service worker (offline shell + data + tile cache)
icons/                      app icons
data/manifest.json          registry of cities the app can load
data/kyoto.json             Kyoto dataset (source of truth)
functions/api/place-summary.js   Cloudflare Pages Function — AI "Tell me more" (Mistral web search, LIVE)
functions/api/health.js          Health check — verify key/KV wiring without spending a search
scripts/prewarm.mjs              Pre-warm the AI cache for a whole city overnight
scripts/health.mjs               Friendly wiring check (npm run health)
package.json                     Pinned Wrangler + npm run deploy/health/prewarm scripts
wrangler.toml               Pages config
```

The Kyoto data is **bundled inside `index.html`** so the app loads instantly and works
offline on first run. The app *also* reads `data/manifest.json` at runtime to discover
**additional** cities — that's how the rest of the itinerary will appear.

## Deploy to Cloudflare Pages

This project has Pages **Functions** (`functions/api/*` — the AI + health endpoints).
**Dashboard drag-and-drop does NOT compile a functions folder**, so you must deploy with
**Wrangler** or the `/api/` routes will 404. (The static map would work via drag-and-drop,
but "Tell me more" and `/api/health` would not.)

```bash
# one-time: install the pinned Wrangler (4.103.0) into the project
npm install

# first time only — authorise Wrangler with your Cloudflare account
npm run login

# deploy (re-run this any time to ship an update)
npm run deploy
```
First run creates the project (it uses the name from `wrangler.toml`, `deeply-connected-dining`)
and prints your URL, e.g. `https://deeply-connected-dining.pages.dev`. The pinned Wrangler means a
future Wrangler release can't change behaviour on you mid-trip. (No-install alternative: replace
`npm run deploy` with `npx wrangler pages deploy .`, which always pulls the latest Wrangler.)

Other handy scripts: `npm run kv:create`, `npm run secret`, `npm run health -- <url>`,
`npm run prewarm -- <url>`, `npm run dev` (local preview at localhost:8788).

> Non-app files in this folder (README, wrangler.toml, scripts/) get served as static assets too.
> They contain nothing sensitive (the key is a Secret, never in a file), so it's harmless — move
> them out before deploy if you want a perfectly clean asset list.

## Turn on the AI “Tell me more” (after Kyoto looks right)

Uses **Mistral's Agents/Conversations API with the built-in `web_search` connector** — so one
call searches the live web (reviews, blogs, forums) and returns the structured signals. No
separate search provider needed.

1. Create a KV namespace and bind it as `SUMMARIES`:
   ```bash
   wrangler kv namespace create dcd-summaries
   ```
   Then bind it: Pages → your project → Settings → **Bindings → Add → KV namespace**,
   Variable name `SUMMARIES`, choose the namespace, Add. **Redeploy** for it to take effect.
2. Add your Mistral key as a secret (key from console.mistral.ai → La Plateforme → API Keys):
   ```bash
   wrangler pages secret put MISTRAL_API_KEY
   ```
3. In `functions/api/place-summary.js`, delete the STUB return and uncomment the LIVE block.
   Default model is `mistral-medium-latest` (swap to `mistral-large-latest` for more depth;
   `web_search` → `web_search_premium` adds news/AFP/AP sources).
4. Set a usage cap in the Mistral console. The KV cache means each restaurant is researched
   once (30-day TTL), so repeat taps are free and fast. Optional: pre-warm a city the night
   before so summaries are instant and available offline.

## Check the wiring (no cost)

After deploying and setting the secret + KV, confirm everything without spending a search:

```bash
curl "https://your-app.pages.dev/api/health"            # mistral_key / kv_bound / kv_rw / ready
curl "https://your-app.pages.dev/api/health?check=key"   # also verifies the key authenticates
# or, with a friendly summary:  npm run health -- https://your-app.pages.dev
```
`?check=key` calls Mistral's `GET /v1/models` (metadata only — no generation, no web search, no
token charge). Look for `"ready": true` and, with the flag, `"key_valid": true`.

## Pre-warm a city (instant + offline day-of)

The first tap on each place runs a live search (a few seconds); after that it's served from KV.
To make day-of taps instant — and available offline — warm the whole city the night before:

```bash
node scripts/prewarm.mjs https://your-app.pages.dev
# or:  npm run prewarm -- https://your-app.pages.dev
# other cities later:
node scripts/prewarm.mjs https://your-app.pages.dev --city data/osaka.json --concurrency 2
```
It fetches every place once through your deployed endpoint, populating the KV cache. Re-running
is cheap — already-cached places return from KV without a new search, so it also doubles as a
retry for any failures. Keep a usage cap set in the Mistral console.



1. Drop a `data/<city>.json` with the same shape as `data/kyoto.json`.
2. Add it to `data/manifest.json`.
3. Redeploy. The app will load it (and the service worker caches it for offline).
   To make a city **bundled/offline-on-first-run** like Kyoto, also inline its JSON into
   `index.html` (or extend the bundling step).

### Place schema (per entry in `places[]`)
```
id, name, lat, lng, category(BOTH|GF|VEGAN|SHOJIN|OMNI),
gf_confidence(dedicated|high|options|ask), gf_label, gf_detail,
vegan_status(full|options|limited|ask), vegan_label, vegan_detail,
hours_raw, hours{ "0".."6":[[open,close]…] }, hours_status(regular|irregular),
flags{ reservation, cash_only, halal, open_late },
neighborhood, cuisine, website, gmaps, notes
```
`hours` keys are weekday 0=Mon … 6=Sun in the city's timezone. `hours_status:"irregular"`
means hours couldn't be structured (reservation-only / “varies”), so Open-now shows
“Hours vary” instead of guessing.

## Map tiles

Tiles are OpenStreetMap for the test. For a month-long, multi-user trip, switch to a proper
provider (MapTiler / Stadia, or self-host vector tiles in R2) — change the one `L.tileLayer`
URL in `index.html`. The service worker already whitelists common providers for offline caching.

## Optional: lock it to your group

Cloudflare Access (Zero Trust) can gate the whole site to your 9 emails — Pages project →
Settings → enable Access, add an email-allowlist policy. Off by default here.
