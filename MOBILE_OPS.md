# Working on DCD from the road (Japan, from July 5) — goal: the only limit is token count

The blocker today: code lives on one Windows machine and deploys via manual `wrangler`. Fix that and
everything else (edits, deploys, DCP capture) works from a phone. Steps, in priority order:

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

## 3. Deploy from your phone
- Edit a file in the **GitHub mobile app / github.com** and commit → auto-deploys. OR
- Push from a mobile git client. Either way: **no `npm run deploy`** anymore.

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
