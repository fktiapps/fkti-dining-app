/**
 * GET /api/place-summary?id=<placeId>&name=<restaurant name + city>
 * LIVE. Provider: Mistral Agents/Conversations API + built-in web_search connector.
 *
 * Requires:
 *   - Secret  MISTRAL_API_KEY   (wrangler pages secret put MISTRAL_API_KEY)
 *   - KV binding  SUMMARIES      (optional but recommended: caches each result 30 days)
 *
 * If the key is missing it returns {wired:false} so the app shows the placeholder copy
 * instead of erroring.
 */

const MODEL = 'mistral-medium-latest';   // swap to 'mistral-large-latest' for more depth
const CACHE_TTL = 60 * 60 * 24 * 30;      // 30 days

export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const id = url.searchParams.get('id') || '';
  const name = url.searchParams.get('name') || '';

  if (!env.MISTRAL_API_KEY) {
    return json({ wired: false, id, name, message: 'MISTRAL_API_KEY not set on this deployment.' });
  }
  if (!id) return json({ error: 'missing id' }, 400);

  // 1) cache
  if (env.SUMMARIES) {
    const cached = await env.SUMMARIES.get('sum:' + id);
    if (cached) return new Response(cached, { headers: cors({ 'content-type': 'application/json' }) });
  }

  // 2) ask Mistral, with web_search, for structured JSON
  const sys = `You research restaurants for travellers with celiac disease and vegans.
Use web search to find RECENT reviews/blogs/forums about the named restaurant. Extract only
concrete, sourced signals about: gluten cross-contamination (shared fryer, shared cookware,
"spatula touched pork"), whether a dedicated fryer exists, soy-sauce/wheat issues, vegan
cross-contact, and how staff handle allergies/English. PARAPHRASE (never quote more than a few
words). This is decision-support, NOT a safety guarantee. If you find no reports, say so
(absence of evidence is not safety). Respond with ONLY minified JSON, no prose, no code fences,
with keys: gf_cross_contamination, dedicated_fryer (true|false|"unknown"), soy_sauce_wheat,
vegan_cross_contact, staff_allergy_handling, positives (each an array of {text, source}),
confidence ("low"|"medium"|"high"), last_checked (ISO date), sources (array of urls).`;

  const today = new Date().toISOString().slice(0, 10);
  const body = {
    model: MODEL,
    inputs: [{ role: 'user', content: `${sys}\n\nRestaurant: ${name}. Today: ${today}. Return only the JSON.` }],
    tools: [{ type: 'web_search' }],
    store: false,
    completion_args: { temperature: 0.2 }
  };

  let data;
  try {
    const r = await fetch('https://api.mistral.ai/v1/conversations', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'authorization': 'Bearer ' + env.MISTRAL_API_KEY },
      body: JSON.stringify(body)
    });
    if (!r.ok) {
      if (r.status === 429) {
        const retryAfter = Math.max(45, parseInt(r.headers.get('Retry-After') || '45', 10));
        return json({ wired: true, error: 'rate_limited',
          detail: `Mistral web search rate limit. Wait ${retryAfter}s and try again.`,
          retry_after: retryAfter }, 429);
      }
      return json({ wired: true, error: 'upstream', status: r.status, detail: (await r.text()).slice(0, 300) }, 502);
    }
    data = await r.json();
  } catch (e) {
    return json({ wired: true, error: 'network', detail: String(e) }, 502);
  }

  // 3) pull assistant text out of the conversation outputs
  let text = '';
  const outs = data.outputs || data.messages || data.entries || [];
  for (const o of outs) {
    const isMsg = o.type === 'message.output' || o.role === 'assistant';
    if (!isMsg || o.content == null) continue;
    if (typeof o.content === 'string') text += o.content;
    else if (Array.isArray(o.content)) for (const ch of o.content) if (ch && ch.type === 'text' && ch.text) text += ch.text;
  }

  let parsed;
  try { parsed = JSON.parse(text.replace(/```json|```/g, '').trim()); }
  catch { return json({ wired: true, error: 'parse', raw: text.slice(0, 400) }, 502); }
  parsed.wired = true; parsed.id = id;

  const out = JSON.stringify(parsed);
  if (env.SUMMARIES) await env.SUMMARIES.put('sum:' + id, out, { expirationTtl: CACHE_TTL });
  return new Response(out, { headers: cors({ 'content-type': 'application/json' }) });
}

function cors(h = {}) { return { 'access-control-allow-origin': '*', ...h }; }
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj), { status, headers: cors({ 'content-type': 'application/json' }) });
}
