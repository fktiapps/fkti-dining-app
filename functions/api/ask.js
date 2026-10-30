/**
 * POST /api/ask   Body: { q: "find me a gluten-free donburi in Kyoto", cities: ["kyoto", …], lang: "en"|"ja" }
 * LIVE. Provider: Mistral chat completions with function calling (raw HTTP, like place-summary.js —
 * this Pages project has no build step, so no SDK; see memory pages-functions-no-npm).
 *
 * "Ask": a natural-language question answered from OUR data only. The model never sees a whole
 * city; it calls two tools that run here, over data/ask/<city>.json (scripts/build-ask-index.mjs):
 *   search_places — structured filters (city, cuisine, GF/vegan tier, mom-and-pop, ramen tare/broth…)
 *                   plus keyword search over names, cuisine, notes, chef bios and menu items
 *   get_place     — one record's fuller text, to check a candidate before recommending it
 * then answers as JSON { answer, picks: [{ id, why }] }.
 *
 * Grounding: a pick whose id never came back from a tool call this request is dropped, so the
 * app can only ever show places that exist in the data. GF/vegan wording repeats the record's
 * own tier — the prompt forbids calling anything "safe".
 *
 * Cost control: logged-in FKTI users only (same /api/me check as research-request.js),
 * MAX_PER_DAY questions each, identical questions cached for a day in KV (SUMMARIES, "ask:" keys).
 * Returns {wired:false} when MISTRAL_API_KEY is missing so the app can say so.
 */

const MODEL = 'mistral-medium-latest';
const MAX_STEPS = 6;              // tool rounds before we stop and ask for an answer
const MAX_PER_DAY = 30;
const CACHE_TTL = 60 * 60 * 24;
const TRAVEL = 'https://travel.fkti.org';
const CITIES = ['kyoto', 'tokyo', 'nara', 'kanazawa', 'hiroshima', 'nagoya', 'nagano', 'toba', 'himeji', 'osaka'];
const GF_TIERS = ['dedicated', 'high', 'options', 'ask', 'no'];          // best first (scripts/lib-tiers.mjs)
const VEGAN_TIERS = ['full', 'options', 'limited', 'ask', 'no'];

const index = new Map();          // city → places, kept for the life of the isolate

export async function onRequestPost({ request, env }) {
  if (!env.MISTRAL_API_KEY) return json({ wired: false, message: 'MISTRAL_API_KEY not set on this deployment.' });

  let body;
  try { body = await request.json(); } catch { return json({ error: 'bad_json' }, 400); }
  const q = String(body.q || '').replace(/\s+/g, ' ').trim().slice(0, 400);
  if (q.length < 3) return json({ error: 'empty' }, 400);
  const lang = body.lang === 'ja' ? 'ja' : 'en';
  const allowed = Array.isArray(body.cities) ? CITIES.filter(c => body.cities.includes(c)) : CITIES;
  if (!allowed.length) return json({ error: 'no_cities' }, 400);

  const who = await identify(request);
  if (!who) return json({ error: 'login_required' }, 401);

  const ckey = 'ask:' + (await sha256(`${MODEL}|${lang}|${allowed.join(',')}|${q.toLowerCase()}`)).slice(0, 32);
  if (env.SUMMARIES) {
    const hit = await env.SUMMARIES.get(ckey);
    if (hit) return new Response(hit, { headers: { 'content-type': 'application/json' } });
  }
  const day = new Date().toISOString().slice(0, 10);
  const nkey = `askcount:${who}:${day}`;
  const used = env.SUMMARIES ? parseInt((await env.SUMMARIES.get(nkey)) || '0', 10) : 0;
  if (used >= MAX_PER_DAY) return json({ error: 'daily_limit', limit: MAX_PER_DAY }, 429);

  const load = async city => {
    if (!index.has(city)) {
      const r = await env.ASSETS.fetch(new URL(`/data/ask/${city}.json`, request.url));
      index.set(city, r.ok ? (await r.json()).places.map(p => ({ ...p, city })) : []);
    }
    return index.get(city);
  };

  const seen = new Map();         // id → place, for every place a tool returned
  const tools = makeTools(allowed, load, seen);

  const today = day;
  const messages = [
    { role: 'system', content: systemPrompt(allowed, lang, today) },
    { role: 'user', content: q },
  ];
  let final = null;
  for (let step = 0; step <= MAX_STEPS && !final; step++) {
    const last = step === MAX_STEPS;
    const r = await mistral(env, messages, last ? undefined : TOOL_DEFS);
    if (r.error) return json({ wired: true, ...r }, r.status === 429 ? 429 : 502);
    const msg = r.choices?.[0]?.message || {};
    const calls = msg.tool_calls || [];
    if (!calls.length) { final = typeof msg.content === 'string' ? msg.content : (msg.content || []).map(c => c.text || '').join(''); break; }
    messages.push({ role: 'assistant', content: msg.content || '', tool_calls: calls });
    for (const c of calls) {
      let out;
      try { out = tools[c.function?.name] ? await tools[c.function.name](JSON.parse(c.function.arguments || '{}')) : { error: 'unknown_tool' }; }
      catch (e) { out = { error: 'bad_arguments', detail: String(e).slice(0, 200) }; }
      messages.push({ role: 'tool', tool_call_id: c.id, name: c.function?.name, content: JSON.stringify(out) });
    }
    if (step === MAX_STEPS - 1) messages.push({ role: 'user', content: 'Answer now from what you have found, in the JSON format.' });
  }

  let parsed;
  let clean = String(final || '').replace(/```json|```/g, '').trim();
  const a0 = clean.indexOf('{'), b0 = clean.lastIndexOf('}');
  if (a0 > -1 && b0 > a0) clean = clean.slice(a0, b0 + 1);
  try { parsed = JSON.parse(clean); } catch { parsed = { answer: String(final || '').slice(0, 1500), picks: [] }; }

  // Only places a tool actually returned, at most 8, each once.
  const picks = []; const dup = new Set();
  for (const k of Array.isArray(parsed.picks) ? parsed.picks : []) {
    const p = seen.get(String(k?.id || ''));
    if (!p || dup.has(p.id) || picks.length >= 8) continue;
    dup.add(p.id);
    picks.push({ id: p.id, city: p.city, name: p.n, cuisine_type: p.ct, neighborhood: p.hood, gf: p.gf, vegan: p.vg, why: String(k.why || '').slice(0, 600) });
  }
  const out = JSON.stringify({ wired: true, answer: String(parsed.answer || '').slice(0, 2000), picks, engine: MODEL });
  if (env.SUMMARIES) {
    await env.SUMMARIES.put(nkey, String(used + 1), { expirationTtl: 60 * 60 * 48 });
    await env.SUMMARIES.put(ckey, out, { expirationTtl: CACHE_TTL });
  }
  return new Response(out, { headers: { 'content-type': 'application/json' } });
}

// The two tools, over the loaded index. Exported for scripts/test-ask.mjs.
export function makeTools(allowed, load, seen) {
  return {
    async search_places(a) {
      const cities = (Array.isArray(a.cities) && a.cities.length ? a.cities : allowed).filter(c => allowed.includes(c));
      const places = (await Promise.all(cities.map(load))).flat();
      const kws = (Array.isArray(a.keywords) ? a.keywords : []).map(k => String(k).toLowerCase().trim()).filter(Boolean).slice(0, 12);
      const not = (Array.isArray(a.exclude_keywords) ? a.exclude_keywords : []).map(k => String(k).toLowerCase().trim()).filter(Boolean);
      const atLeast = (tiers, have, min) => !min || !tiers.includes(min) || (tiers.indexOf(have) > -1 && tiers.indexOf(have) <= tiers.indexOf(min));
      const anyOf = (want, have) => !Array.isArray(want) || !want.length || want.some(w => have.includes(w));
      const hits = [];
      for (const p of places) {
        if (Array.isArray(a.cuisine_types) && a.cuisine_types.length && !a.cuisine_types.includes(p.ct)) continue;
        if (!atLeast(GF_TIERS, p.gf, a.gf_at_least) || !atLeast(VEGAN_TIERS, p.vg, a.vegan_at_least)) continue;
        if (a.mom_and_pop && !p.mp && p.cat !== 'MOM_AND_POP') continue;
        if ((a.ramen_tare?.length || a.ramen_broth?.length || a.ramen_texture) && !p.rm) continue;
        if (p.rm && (!anyOf(a.ramen_tare, p.rm.tare) || !anyOf(a.ramen_broth, p.rm.broth) || (a.ramen_texture && p.rm.texture !== a.ramen_texture))) continue;
        const hay = { name: p.n.toLowerCase(), cu: p.cu.toLowerCase(), text: [p.notes, p.chef, p.gfd, p.vgd, p.rm?.bowl].join(' ').toLowerCase(),
          menu: (p.menu || []).map(i => i.en).join(' | ').toLowerCase() };
        if (not.some(k => hay.name.includes(k) || hay.cu.includes(k) || hay.text.includes(k))) continue;
        let score = 0; const matched = [];
        for (const k of kws) {
          const s = (hay.name.includes(k) ? 4 : 0) + (hay.cu.includes(k) ? 3 : 0) + (hay.menu.includes(k) ? 2 : 0) + (hay.text.includes(k) ? 2 : 0);
          if (s) { score += s; matched.push(k); }
        }
        if (kws.length && !score) continue;
        hits.push({ p, score, matched });
      }
      hits.sort((x, y) => y.score - x.score || GF_TIERS.indexOf(x.p.gf) - GF_TIERS.indexOf(y.p.gf));
      const limit = Math.min(Math.max(+a.limit || 12, 1), 25);
      return { total_matches: hits.length, results: hits.slice(0, limit).map(({ p, matched }) => {
        seen.set(p.id, p);
        return { id: p.id, city: p.city, name: p.n, cuisine_type: p.ct, neighborhood: p.hood, gf: p.gf, vegan: p.vg,
          ...(p.mp || p.cat === 'MOM_AND_POP' ? { mom_and_pop: true } : {}),
          ...(p.rm ? { ramen: { tare: p.rm.tare, broth: p.rm.broth, texture: p.rm.texture, type: p.rm.type } } : {}),
          matched, snippets: snippets([p.cu, p.notes, p.chef, (p.menu || []).map(i => i.en).join(', ')].join(' '), matched) };
      }) };
    },
    async get_place(a) {
      const id = String(a.id || '');
      const p = seen.get(id) || (await Promise.all(allowed.map(load))).flat().find(x => x.id === id);
      if (!p) return { error: 'not_found' };
      seen.set(p.id, p);
      const { n, ct, cu, hood, gf, vg, gfd, vgd, notes, chef, hours, rm, menu, cat, mp, rsv } = p;
      return { id, city: p.city, name: n, cuisine_type: ct, category: cat, mom_and_pop: !!(mp || cat === 'MOM_AND_POP'), reservation: !!rsv,
        neighborhood: hood, cuisine: cu, gf_tier: gf, gf_detail: gfd, vegan_tier: vg, vegan_detail: vgd, notes, chef, hours, ramen: rm, menu };
    },
  };
}

const TOOL_DEFS = [
  { type: 'function', function: {
    name: 'search_places',
    description: 'Search the restaurant database. All filters are optional and combine with AND. Keywords are matched (case-insensitive substring, English) against name, cuisine description, notes, chef biography, GF/vegan notes and menu item names; a place must match at least one keyword when keywords are given, and more matches rank higher. Give several synonyms and related words as separate keywords (e.g. ["farm", "farmer", "grows", "own vegetables", "harvest", "field"]). Returns up to `limit` places with snippets around the matched words.',
    parameters: { type: 'object', properties: {
      cities: { type: 'array', items: { type: 'string', enum: CITIES }, description: 'Limit to these cities; omit for all.' },
      cuisine_types: { type: 'array', items: { type: 'string', enum: ['ramen', 'other', 'udon_soba', 'kissaten', 'yoshoku', 'sweets', 'okonomiyaki', 'sushi', 'izakaya', 'kaiseki', 'yakitori', 'shokudo', 'tempura', 'cafe', 'unagi', 'obanzai', 'italian', 'katsu', 'french', 'oden', 'shojin', 'gyoza', 'curry', 'donburi', 'tofu', 'oyster', 'chanko', 'thai', 'sukiyaki'] } },
      gf_at_least: { type: 'string', enum: GF_TIERS, description: 'Minimum gluten-free tier, best first: dedicated (dedicated GF kitchen/menu), high, options (some GF options), ask (unknown, must ask), no.' },
      vegan_at_least: { type: 'string', enum: VEGAN_TIERS, description: 'Minimum vegan tier, best first: full, options, limited, ask, no.' },
      mom_and_pop: { type: 'boolean', description: 'Only small owner-run shops.' },
      ramen_tare: { type: 'array', items: { type: 'string', enum: ['shio', 'shoyu', 'miso', 'sesame', 'other'] }, description: 'Ramen seasoning base (tare). Ramen places only.' },
      ramen_broth: { type: 'array', items: { type: 'string', enum: ['chicken', 'tonkotsu', 'gyokai', 'niboshi', 'vegetable', 'pork', 'beef', 'duck', 'shellfish', 'blend', 'other'] } },
      ramen_texture: { type: 'string', enum: ['chintan', 'paitan'], description: 'chintan = clear broth, paitan = cloudy/emulsified.' },
      keywords: { type: 'array', items: { type: 'string' } },
      exclude_keywords: { type: 'array', items: { type: 'string' } },
      limit: { type: 'integer', minimum: 1, maximum: 25 },
    } } } },
  { type: 'function', function: {
    name: 'get_place',
    description: 'Full record for one place id from search results: notes, chef biography, GF and vegan detail, hours, ramen profile (profile.tare_strength is 0-5), menu items with gf/vegan flags. Use it to check a candidate before recommending it.',
    parameters: { type: 'object', properties: { id: { type: 'string' } }, required: ['id'] } } },
];

function systemPrompt(cities, lang, today) {
  return `You help travellers in Japan choose restaurants from the FKTI Dining database, which covers these cities: ${cities.join(', ')}. Today is ${today}.

Answer ONLY from what the tools return. Every place you suggest must come from a search_places or get_place result in this conversation; never suggest a place from your own knowledge, and never add facts the records do not contain. When a request implies something the data does not state directly (for example "uses very little soy" when the data gives a shio tare and a low tare_strength), say it is an inference and what it rests on.

Method: translate the request into filters plus several English keyword synonyms, search, widen or narrow if needed (try two or three searches with different keywords before giving up), then get_place on your best few candidates to confirm the fit. Prefer places where the evidence is direct.

Gluten-free and vegan: repeat the record's own tier and detail. Never call a place or dish "safe" or "celiac-safe"; tiers other than "dedicated" mean the diner should confirm with staff. If nothing fits, say so plainly and offer the closest matches with what is missing.

Do not use he/she/his/her for staff or owners unless the record does; say "the chef", "the owner".

Write every place name exactly as the record gives it. Never translate or transliterate a name into other characters (no guessed kanji, kana or romaji readings).

Reply in ${lang === 'ja' ? 'Japanese' : 'English'} with ONLY a JSON object, no code fences:
{"answer": "2–4 sentences: what you found and any caveat", "picks": [{"id": "<place id from a tool result>", "why": "1–2 sentences on why it fits, from the record"}]}
Give at most 6 picks, best first; an empty list if nothing fits.`;
}

async function mistral(env, messages, tools) {
  try {
    const r = await fetch('https://api.mistral.ai/v1/chat/completions', {
      method: 'POST',
      headers: { 'content-type': 'application/json', authorization: 'Bearer ' + env.MISTRAL_API_KEY },
      body: JSON.stringify({ model: MODEL, messages, temperature: 0.2, max_tokens: 2000, ...(tools ? { tools, tool_choice: 'auto' } : {}) }),
    });
    if (r.status === 429) return { error: 'rate_limited', status: 429 };
    if (!r.ok) return { error: 'upstream', status: r.status, detail: (await r.text()).slice(0, 300) };
    return await r.json();
  } catch (e) {
    return { error: 'network', detail: String(e).slice(0, 300) };
  }
}

function snippets(text, words) {
  const low = text.toLowerCase(); const out = [];
  for (const w of words) {
    const i = low.indexOf(w);
    if (i < 0) continue;
    out.push('…' + text.slice(Math.max(0, i - 70), i + w.length + 90).replace(/\s+/g, ' ').trim() + '…');
    if (out.length >= 3) break;
  }
  return out;
}

// Same identity check as research-request.js: Travel verifies the token; we keep a hashed user key.
async function identify(request) {
  let tok = (request.headers.get('authorization') || '').replace(/^Bearer\s+/i, '').trim();
  if (!tok) { const m = (request.headers.get('cookie') || '').match(/(?:^|;\s*)fkti_auth=([^;]+)/); if (m) tok = decodeURIComponent(m[1]); }
  if (!tok) return null;
  try {
    const r = await fetch(TRAVEL + '/api/me', { headers: { authorization: 'Bearer ' + tok } });
    if (!r.ok) return null;
    let who = '';
    try { const me = await r.json(); who = String(me.id || me.sub || me.email || me.user?.id || me.user?.email || ''); } catch { }
    if (!who) who = tok;
    return (await sha256(who)).slice(0, 16);
  } catch { return null; }
}

async function sha256(s) {
  const h = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(s));
  return [...new Uint8Array(h)].map(b => b.toString(16).padStart(2, '0')).join('');
}
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });
}
