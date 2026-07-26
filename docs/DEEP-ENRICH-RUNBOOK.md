# Deep-Enrich Runbook — upgrading light records to full depth

The Tokyo 3-mile tranche (and any other `loc_approx: "block"` records) are **light**:
neighborhood-centroid approx pins, GF/vegan *inferred* from the cuisine word, no
bios / hours / real coordinates. Upgrading them to full depth needs **page
fetching** (WebFetch reaching restaurant sites + Tabelog). That only works in a
**fetch-capable environment** — a local Claude Code session on your desktop, or a
web environment created with an open/allowlisted egress policy.

This runbook is the one-message trigger. When you're in a fetch-capable
environment, hand Claude this file (or just say "run the deep-enrich runbook").

---

## 0. Why fetching may be blocked

- **Local Claude Code (desktop/CLI/IDE):** requests go straight out — fetching works.
- **Claude Code on the web:** outbound HTTPS goes through a policy proxy. A
  locked-down environment 403s **every** host (not just Tabelog). WebSearch still
  works because it's a separate channel — that's why breadth sweeps run fine but
  deep per-page enrichment doesn't.

The block is a property of the **environment's network policy**, fixed at
environment-creation time — not a per-session accident. A new session in the same
environment inherits it.

---

## 1. Preflight — confirm fetching actually works

```bash
# proxy state + any recent CONNECT rejections
curl -sS "$HTTPS_PROXY/__agentproxy/status" | grep -A6 recentRelayFailures
# a real page (any host). Expect HTTP 200, not "CONNECT tunnel failed, response 403"
curl -sS -o /dev/null -w "HTTP %{http_code}\n" https://en.wikipedia.org/wiki/Soba
```

Then ask Claude to run a **WebFetch** on a real restaurant page. If it returns
content (not `403 Forbidden`), you're clear. If curl says `CONNECT tunnel failed,
response 403`, the environment is still locked down — stop here and switch to a
local session or a more permissive web environment.

> Tabelog aggressively blocks bots and may 403 even when egress is open. That's
> fine — the enrichment prompt falls back to the restaurant's own site + search.

---

## 2. Generate the worklist (offline, safe anywhere)

```bash
node scripts/gen-tokyo3-enrich.mjs 10   # perShard = 10
```

Writes `data/_tokyo3_enrich_targets.json` — every `loc_approx:"block"` record,
sharded. As of the last sweep: **458 light records → 46 shards.**

---

## 3. Run the enrichment workflow (needs fetching)

The workflow is `scripts/tokyo3-enrich-workflow.js`. One agent per target: fetches
the place's site/maps, searches chef/menu/allergy, returns a full-depth object.
Launch it **shard by shard** so results checkpoint (low concurrency + fetching =
slow; don't fire all 458 at once). For each shard, pass that shard's `targets`
array as `args`, then append the returned `results` to `data/_tokyo3_enrich.json`.

Tell Claude:

> Run `scripts/tokyo3-enrich-workflow.js` over shard N of
> `data/_tokyo3_enrich_targets.json`, appending results to `data/_tokyo3_enrich.json`.

Claude launches it via the Workflow tool with
`args = { targets: <shard N targets> }` and accumulates. Do a few shards, spot-check,
then continue. Prioritize the high-signal categories first (**GF, BOTH, VEGAN,
SHOJIN** — the ones a celiac/vegan actually relies on) before the OMNI bulk.

**Safety rule baked into the prompt:** 十割 (juwari) soba is *not* gluten-free —
wheat cross-contamination + wheat-soy-sauce tsuyu. The agent must never invent a
bio, menu item, or safety assurance; empty/low confidence is acceptable.

---

## 4. Merge results back in place (offline)

```bash
node scripts/build-tokyo3-enrich.mjs data/_tokyo3_enrich.json
```

Upgrades matched records IN PLACE: real coords **clear** `loc_approx`, and only
fields present in a result are overwritten. Reports how many got real pins and how
many light records remain. Bumps the service-worker version automatically.

---

## 5. Validate, commit, deploy

```bash
node -e 'const d=JSON.parse(require("fs").readFileSync("data/tokyo.json","utf8"));console.log("places:",d.places.length,"| still light:",d.places.filter(p=>p.loc_approx==="block").length)'
git add data/tokyo.json data/_tokyo3_enrich.json sw.js index.html
git commit   # standard trailer (Co-Authored-By + Claude-Session)
```

Deploy = get it onto `main` (Cloudflare Pages auto-builds from `main`). Develop on
`claude/tokyo-dining-research-hlsg9r`, then merge to `main`.

---

## Gotchas (learned the hard way)

- **Serializer:** `data/tokyo.json` uses the custom single-line `ser()` (space after
  `:` and `,`), NOT `JSON.stringify`. Both enrich scripts already use `ser()` — if you
  hand-edit, match it. (`data/nara.json` / `nagano.json` use `JSON.stringify(d,null,1)`.)
- **SW bump:** `sw.js` `VERSION` is the real cache-buster; `index.html` `APP_BUILD` is
  the displayed tag. The build scripts bump both by +1. They drifted historically —
  resync if they diverge, but always land higher than what's live.
- **Coords are honest-only:** the workflow omits lat/lng unless confident, so a bad
  guess never overwrites the approx pin. `loc_approx` only clears when a real coord lands.
- **Map de-stack:** `drawMarkers()` fans out co-located pins (display only) — as
  records gain real coords they naturally separate; nothing to do.
- **Day index:** hours object keys use 0=Mon … 6=Sun. `hours_status:"irregular"` makes
  the app show "Hours vary" instead of a wrong open/closed state — prefer it when unsure.
- **Don't re-run the light builder** (`build-tokyo3.mjs`) after enriching — it dedupes
  by name and would skip the (now-enriched) records, but re-running the strip+rebuild
  in its header would *revert* them to light. Enrichment is one-way; only run
  `build-tokyo3-enrich.mjs` from here on.

---

## State snapshot (last updated 2026-07-26)

- `data/tokyo.json`: **1057 places**, of which **458** are the light 3-mile tranche
  (`id` prefix `tokyo3_`, `loc_approx:"block"`).
- `data/_tokyo3_cands.json`: **458** discovery candidates (the raw source list).
- Light-tranche categories: OMNI 220 · MOM_AND_POP 142 · VEGAN 48 · GF 20 · BOTH 16 · SHOJIN 12.
- Enrichment scripts (all present, merge-side dry-tested):
  `gen-tokyo3-enrich.mjs` → `tokyo3-enrich-workflow.js` → `build-tokyo3-enrich.mjs`.
