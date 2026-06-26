/**
 * GET /api/health
 * Confirms the deployment is wired correctly WITHOUT spending a real web search.
 *   mistral_key : is the MISTRAL_API_KEY secret set?
 *   kv_bound    : is the SUMMARIES KV namespace bound?
 *   kv_rw       : can we write+read+delete a KV test key?
 *   ready       : all of the above true
 *
 * Add ?check=key to ALSO verify the key actually authenticates, via GET /v1/models.
 * That endpoint returns model metadata only — no generation, no web search, no token charge.
 *   key_valid : true if Mistral returned 200 for the key
 */
export async function onRequestGet(context) {
  const { request, env } = context;
  const url = new URL(request.url);
  const out = {
    ok: true,
    time: new Date().toISOString(),
    mistral_key: !!env.MISTRAL_API_KEY,
    kv_bound: !!env.SUMMARIES,
    kv_rw: false
  };

  if (env.SUMMARIES) {
    try {
      await env.SUMMARIES.put('health:ping', '1', { expirationTtl: 60 });
      out.kv_rw = (await env.SUMMARIES.get('health:ping')) === '1';
      await env.SUMMARIES.delete('health:ping');
    } catch (e) { out.kv_rw = false; out.kv_error = String(e); }
  }

  if (url.searchParams.get('check') === 'key' && env.MISTRAL_API_KEY) {
    try {
      const r = await fetch('https://api.mistral.ai/v1/models', {
        headers: { authorization: 'Bearer ' + env.MISTRAL_API_KEY }
      });
      out.key_valid = r.ok;          // 200 = good, 401 = bad/expired key
      out.key_status = r.status;     // no tokens billed for /v1/models
    } catch (e) { out.key_valid = false; out.key_error = String(e); }
  }

  out.ready = out.mistral_key && out.kv_bound && out.kv_rw;
  return new Response(JSON.stringify(out, null, 2), {
    status: 200,
    headers: { 'content-type': 'application/json', 'access-control-allow-origin': '*' }
  });
}
