# Working on DCD from the road (Japan, from July 5) — goal: the only limit is token count

The blocker today: code lives on one Windows machine and deploys via manual `wrangler`. Fix that and
everything else (edits, deploys, DCP capture) works from a phone. Steps, in priority order:

## ★ STEP 0 — commit the working tree FIRST (git is behind live)
`wrangler pages deploy .` uploads the working folder as-is, so the **live site can run ahead of git**.
If you connect Pages↔GitHub while `main` is behind, the first auto-deploy will **regress the site** to
whatever's committed. So before step 2, always: `git add -A && git commit` so **git `main` == live**.
(Done 2026-06-29: committed v82→v86 — menupedia/Foundations, diet dials, Group mode, station guide.)

## 1. Code → GitHub (untether from the one machine)  ★ do before leaving
Local repo is initialized + committed. To put it on GitHub (private):
```
gh repo create fkti-dining-app --private --source . --push
# or: make a private repo on github.com, then:
git remote add origin https://github.com/<you>/fkti-dining-app.git
git push -u origin main
```
Now any device can pull/edit/push.

## 2. Auto-deploy: Cloudflare Pages ↔ GitHub  ★ do before leaving (kills the wrangler dependency)
Cloudflare dashboard → Pages → fkti-dining-app → Settings → Builds & deployments → **Connect to Git**.
- Build command: **(leave empty)**   ·   Output directory: **`.`**   ·   Production branch: **main**
- After connecting, confirm the **SUMMARIES** KV binding and **MISTRAL_API_KEY** env are still set on the project.
Result: **every push to `main` auto-deploys** (~1 min). No `wrangler`, no credentials on the phone.
(Keep bumping the SW version `dcd-vNN` on releases so phones refetch — that's already the routine.)
- Also confirm **Preview deployments** are ON: any push to a *non-main branch* gets its own preview URL.

## 3. Deploy from your phone — with a safety net (preview branches)
**merge to `main` = production = YOUR deploy gesture.** This preserves "Greg deploys himself": Claude (or
you) only ever pushes to *preview branches*; you decide what goes live by tapping **Merge** in the GitHub
mobile app. The loop:
1. Change lands on a **branch** → Cloudflare gives a **preview URL**.
2. Open that URL **on your phone** and test it (the only way to eyeball a shell change on the road).
3. Merge the branch → `main` → auto-deploys to production.
- Data-only changes (stations.json, menupedia, a place edit) = no SW bump, low risk.
- Shell changes (`index.html`) = **bump `sw.js` VERSION** and ALWAYS preview-test on the phone first.
- Trivial fixes: edit + commit straight on `main` in github.com → auto-deploys. Either way: no `wrangler`.

## 4. Claude from your phone
- **Thinking / drafting / research:** the claude.ai app.
- **Full repo work (like Claude Code is now):** `claude.ai/code` in the mobile browser, pointed at the
  GitHub repo — OR keep an always-on machine (your desktop, or a cheap cloud VM) running Claude Code and
  reach it via Tailscale + a mobile SSH terminal (Blink/Termius). **Heavy data Workflows** (more cities,
  dish-bank authoring, ramen enrich) need that real env (Node + many agents); light edits/UI/DCP don't.
- Continuity: **HANDOFF.txt + the memory files** orient any fresh Claude session — keep them current.

## 5. DCP field capture (the trip's main content job)
`dcp-tool.html` should be a **mobile PWA**: works offline (service worker), **camera capture** for
owner/menu photos, and an easy path to get data into the repo (export patch → commit from phone, or paste
to Claude). Photos follow the image-hosting plan (Cloudflare Pages `/img` or R2, URL-referenced — never base64).

## 6. Secrets — never on the phone
Cloudflare builds server-side with `MISTRAL_API_KEY` already set on the project. You never handle
credentials; Claude never needs them. Git-integration deploy is exactly why this stays true.

## TL;DR before the 5th
1) push to GitHub  2) connect Pages to the repo (auto-deploy)  3) make the DCP tool field-ready.
After that, from a phone you can edit → push → it's live, capture DCP notes offline, and keep building
with Claude — bounded only by tokens.
