/**
 * GET /api/chef-bio?id=<placeId>&name=<restaurant name + city>
 *
 * Two-stage architecture using ctx.waitUntil():
 *   1st request  → starts Mistral search in background, returns {status:'pending'} instantly
 *   2nd request  → returns cached KV result (ready in ~20s) or still-pending if very slow
 *
 * This avoids Cloudflare's 30s wall-clock limit and gives the user a countdown
 * instead of a hanging spinner or timeout error.
 */

const MODEL     = 'mistral-medium-latest';
const CACHE_TTL = 60 * 60 * 24 * 30; // 30 days for completed bios
const PENDING_TTL = 90;               // pending marker expires in 90s

export async function onRequestGet(context) {
  const { request, env, waitUntil } = context;
  const url  = new URL(request.url);
  const id   = url.searchParams.get('id')   || '';
  const name = url.searchParams.get('name') || '';

  if (!env.MISTRAL_API_KEY)
    return json({ wired: false, message: 'MISTRAL_API_KEY not set.' });
  if (!id) return json({ error: 'missing id' }, 400);

  const bioKey     = 'bio:'     + id;
  const pendingKey = 'pending:' + id;

  // --- Check KV for a completed bio ---
  if (env.SUMMARIES) {
    const cached = await env.SUMMARIES.get(bioKey);
    if (cached) {
      let parsed;
      try { parsed = JSON.parse(cached); } catch(_) {
        await env.SUMMARIES.delete(bioKey); // corrupted — start fresh
      }
      if (parsed) {
        // rate-limited or error stored briefly — return as-is so client handles it
        if (parsed.status === 'rate_limited' || parsed.error)
          return json(parsed);
        // completed bio
        if (parsed.wired && !parsed.pending)
          return new Response(cached, { headers: cors({ 'content-type': 'application/json' }) });
      }
    }

    // --- Already processing? Return pending without starting another fetch ---
    const pending = await env.SUMMARIES.get(pendingKey);
    if (pending) {
      let p;
      try { p = JSON.parse(pending); } catch(_) {
        await env.SUMMARIES.delete(pendingKey);
      }
      if (p) {
        const elapsed = Math.floor((Date.now() - p.started) / 1000);
        const remaining = Math.max(5, 28 - elapsed);
        return json({ status: 'pending', retry_after: remaining, elapsed });
      }
    }
  }

  // --- Not cached, not pending → start background fetch ---
  const today = new Date().toISOString().slice(0, 10);

  // Mark as pending immediately so duplicate taps don't double-fire
  if (env.SUMMARIES)
    await env.SUMMARIES.put(pendingKey,
      JSON.stringify({ started: Date.now(), name }),
      { expirationTtl: PENDING_TTL });

  const prompt = `You are a careful research assistant helping travellers learn about the
people behind small restaurants. Your ONE job is accuracy. A short honest answer is always
better than a long confident-sounding one. Fabricating or guessing details — even plausible
ones — causes real harm (imagine a student telling an owner something false about their own
life). Follow these rules without exception:

RULES:
1. ONLY include a claim if you found a specific web source that states it. No source URL = omit it.
2. Every entry in "anecdotes" and "media_mentions" MUST have a real, working source URL.
3. "background", "philosophy", "specialty", "origin": only write what a source directly states.
   Do not infer, extrapolate, or fill gaps with plausible-sounding details.
4. "japanese_sources_summary": only if you actually read Japanese-language sources (Tabelog,
   local blogs, etc). Attribute each point clearly. Do not guess what they might say.
5. Confidence: "high"=multiple sources agree · "medium"=one reliable source ·
   "low"=one vague reference · "none"=nothing meaningful found.
6. "sourced_claim_count": count total distinct claims backed by a URL. If 0, confidence="none".
7. Do NOT assume chef = owner unless a source says so.
8. If uncertain you have the right restaurant (e.g. common name), say so in "caveats".

Search for: ${name}
Today: ${today}

Return ONLY minified JSON, no prose, no code fences:
{"chef_name":string|null,"roles":string[],"origin":string|null,"background":string|null,
"philosophy":string|null,"specialty":string|null,
"anecdotes":[{"text":string,"source":string}],
"japanese_sources_summary":string|null,
"media_mentions":[{"outlet":string,"summary":string,"url":string}],
"sourced_claim_count":number,"confidence":"high"|"medium"|"low"|"none",
"caveats":string|null,"last_checked":"${today}","sources":string[]}`;

  // Background task — runs after we return the 'pending' response
  const backgroundFetch = async () => {
    try {
      const r = await fetch('https://api.mistral.ai/v1/conversations', {
        method: 'POST',
        headers: {
          'content-type': 'application/json',
          'authorization': 'Bearer ' + env.MISTRAL_API_KEY
        },
        body: JSON.stringify({
          model: MODEL,
          inputs: [{ role: 'user', content: prompt }],
          tools: [{ type: 'web_search' }],
          store: false,
          completion_args: { temperature: 0.1 }
        })
      });

      if (!r.ok) {
        if (r.status === 429) {
          // Enforce a minimum 45s wait — Mistral's Retry-After can be as low as 1s
          // which isn't enough for the rate limit to actually clear
          const headerSecs = parseInt(r.headers.get('Retry-After') || '45', 10);
          const retryAfter = Math.max(45, headerSecs);
          if (env.SUMMARIES) {
            await env.SUMMARIES.delete(pendingKey);
            await env.SUMMARIES.put(bioKey, JSON.stringify({
              wired: true, status: 'rate_limited', retry_after: retryAfter
            }), { expirationTtl: retryAfter + 15 });
          }
        } else {
          // Other errors: store briefly so client sees a useful message
          if (env.SUMMARIES) {
            await env.SUMMARIES.delete(pendingKey);
            await env.SUMMARIES.put(bioKey, JSON.stringify({
              wired: true, error: 'upstream', status: r.status,
              detail: (await r.text()).slice(0, 200)
            }), { expirationTtl: 60 });
          }
        }
        return;
      }

      const data = await r.json();
      let text = '';
      for (const o of (data.outputs || data.messages || data.entries || [])) {
        const isMsg = o.type === 'message.output' || o.role === 'assistant';
        if (!isMsg || !o.content) continue;
        if (typeof o.content === 'string') text += o.content;
        else if (Array.isArray(o.content))
          for (const ch of o.content) if (ch?.type === 'text') text += ch.text;
      }

      let parsed;
      try { parsed = JSON.parse(text.replace(/```json|```/g, '').trim()); }
      catch {
        if (env.SUMMARIES)
          await env.SUMMARIES.put(bioKey, JSON.stringify({
            wired: true, error: 'parse', raw: text.slice(0, 200)
          }), { expirationTtl: 60 });
        return;
      }

      // Strip entries missing real source URLs
      if (Array.isArray(parsed.anecdotes))
        parsed.anecdotes = parsed.anecdotes.filter(a =>
          a?.source?.startsWith('http'));
      if (Array.isArray(parsed.media_mentions))
        parsed.media_mentions = parsed.media_mentions.filter(m =>
          m?.url?.startsWith('http'));
      if ((parsed.sourced_claim_count ?? 1) === 0) parsed.confidence = 'none';

      parsed.wired = true; parsed.id = id;

      if (env.SUMMARIES) {
        await env.SUMMARIES.put(bioKey, JSON.stringify(parsed),
          { expirationTtl: CACHE_TTL });
        await env.SUMMARIES.delete(pendingKey);
      }
    } catch (_) {
      // Silently clean up pending marker so the user can retry
      if (env.SUMMARIES) await env.SUMMARIES.delete(pendingKey);
    }
  };

  // Fire background fetch, return pending response immediately
  if (waitUntil) waitUntil(backgroundFetch());

  return json({ status: 'pending', retry_after: 22, elapsed: 0 });
}

function cors(h = {}) { return { 'access-control-allow-origin': '*', ...h }; }
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj),
    { status, headers: cors({ 'content-type': 'application/json' }) });
}
