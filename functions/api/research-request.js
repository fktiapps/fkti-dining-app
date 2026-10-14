/**
 * /api/research-request — "Suggest a place" queue.
 *
 * POST: a traveller asks for a place to be researched — from a storefront photo (plus the
 *   phone's GPS) or from a point tapped on the map. Nothing is researched here and no AI is
 *   called: the request is stored in KV and a job on Greg's machine (scripts/run-research.ps1,
 *   polling every few minutes) does the research through the same pipeline as every other
 *   record. So a button press costs nothing on the API bill.
 * GET ?ids=a,b: status of the caller's own requests (ids are random and unguessable).
 *
 * Who is asking: the FKTI login token (shared .fkti.org cookie, or the Authorization header)
 * is checked against Travel's /api/me — the same check gate.js runs in the browser. Logged-in
 * users only, MAX_PER_DAY each.
 *
 * KV layout (binding SUMMARIES, shared with the review-summary cache, hence the prefixes):
 *   rq:<id>      request JSON; KV metadata {status, created} so a list is enough to triage
 *   rqimg:<id>   the storefront photo (data URL), when there is one
 *   rqcount:<user>:<yyyy-mm-dd>   per-user daily counter
 */

const TRAVEL = 'https://travel.fkti.org';
const MAX_PER_DAY = 5;
const MAX_IMAGE = 1_500_000;          // data-URL chars; the app downscales to ~1600px first
const TTL = 60 * 60 * 24 * 120;       // requests age out after 120 days

export async function onRequestPost({ request, env }) {
  if (!env.SUMMARIES) return json({ error: 'not_configured' }, 500);

  const who = await identify(request);
  if (!who) return json({ error: 'login_required' }, 401);

  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const kind = body.kind === 'photo' ? 'photo' : body.kind === 'map' ? 'map' : null;
  const lat = Number(body.lat), lng = Number(body.lng);
  if (!kind) return json({ error: 'bad_kind' }, 400);
  // Japan, generously: the app only covers Japanese cities.
  if (!(lat > 24 && lat < 46 && lng > 122 && lng < 146)) return json({ error: 'outside_japan' }, 400);
  const image = typeof body.image === 'string' ? body.image : '';
  if (kind === 'photo' && !/^data:image\/(jpe?g|png|webp);base64,/.test(image)) return json({ error: 'no_image' }, 400);
  if (image.length > MAX_IMAGE) return json({ error: 'image_too_large' }, 413);

  const day = new Date().toISOString().slice(0, 10);
  const ckey = `rqcount:${who}:${day}`;
  const used = parseInt((await env.SUMMARIES.get(ckey)) || '0', 10);
  if (used >= MAX_PER_DAY) return json({ error: 'daily_limit', limit: MAX_PER_DAY }, 429);

  const id = randomId();
  const rec = {
    id, kind, lat, lng,
    acc: Number.isFinite(Number(body.acc)) ? Math.round(Number(body.acc)) : null,  // GPS accuracy, metres
    name: String(body.name || '').slice(0, 120),
    note: String(body.note || '').slice(0, 500),
    lang: body.lang === 'ja' ? 'ja' : 'en',
    user: who,
    created: new Date().toISOString(),
    status: 'queued',
    has_image: !!image,
  };
  await env.SUMMARIES.put(`rq:${id}`, JSON.stringify(rec), { expirationTtl: TTL, metadata: { status: 'queued', created: rec.created } });
  if (image) await env.SUMMARIES.put(`rqimg:${id}`, image, { expirationTtl: TTL });
  await env.SUMMARIES.put(ckey, String(used + 1), { expirationTtl: 60 * 60 * 48 });

  return json({ ok: true, id, status: 'queued', remaining_today: MAX_PER_DAY - used - 1 });
}

export async function onRequestGet({ request, env }) {
  if (!env.SUMMARIES) return json({ error: 'not_configured' }, 500);
  const ids = (new URL(request.url).searchParams.get('ids') || '').split(',').filter(x => /^[a-z0-9]{12}$/.test(x)).slice(0, 30);
  const out = {};
  for (const id of ids) {
    const v = await env.SUMMARIES.get(`rq:${id}`, 'json');
    // Only what the requester needs to see — never the user field.
    out[id] = v ? { status: v.status, created: v.created, kind: v.kind, name: v.name,
                    place_id: v.place_id || null, city: v.city || null, message: v.message || '', message_ja: v.message_ja || '' }
                : { status: 'unknown' };
  }
  return json({ requests: out });
}

export async function onRequestOptions() {
  return new Response(null, { headers: { 'access-control-allow-origin': '*', 'access-control-allow-methods': 'GET, POST, OPTIONS', 'access-control-allow-headers': 'content-type, authorization' } });
}

// The login token is verified by Travel itself; we only keep a stable, non-reversible user key.
async function identify(request) {
  let tok = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '').trim();
  if (!tok) { const m = (request.headers.get('cookie') || '').match(/(?:^|;\s*)fkti_auth=([^;]+)/); if (m) tok = decodeURIComponent(m[1]); }
  if (!tok) return null;
  try {
    const r = await fetch(TRAVEL + '/api/me', { headers: { authorization: 'Bearer ' + tok } });
    if (!r.ok) return null;
    let who = '';
    try { const me = await r.json(); who = String(me.id || me.sub || me.email || me.user?.id || me.user?.email || ''); } catch { }
    if (!who) who = tok;           // valid but anonymous-shaped reply: key on the token itself
    return (await sha256(who)).slice(0, 16);
  } catch { return null; }         // Travel unreachable: fail closed — this endpoint writes
}

async function sha256(s) {
  const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(h)].map(b => b.toString(16).padStart(2, '0')).join('');
}
function randomId() {
  const a = new Uint8Array(12); crypto.getRandomValues(a);
  return [...a].map(b => 'abcdefghijklmnopqrstuvwxyz0123456789'[b % 36]).join('');
}
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' } });
}
