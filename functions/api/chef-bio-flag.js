/**
 * POST /api/chef-bio-flag
 * Body: { id, name, reason? }
 *
 * Marks a bio as flagged (potentially inaccurate) in KV.
 * - Stores a flag record under flag:{id}
 * - Deletes the cached bio so next tap triggers a fresh search
 *   (gives the model another chance; if it's wrong again, the flag persists)
 */
export async function onRequestPost(context) {
  const { request, env } = context;
  let body;
  try { body = await request.json(); } catch { body = {}; }

  const id   = body.id   || '';
  const name = body.name || '';
  if (!id) return json({ error: 'missing id' }, 400);

  if (env.SUMMARIES) {
    // Write flag record
    await env.SUMMARIES.put('flag:' + id, JSON.stringify({
      id, name,
      reason: body.reason || 'user flagged',
      flagged_at: new Date().toISOString(),
      count: 1  // could increment in future
    }), { expirationTtl: 60 * 60 * 24 * 90 }); // keep 90 days

    // Invalidate the cached bio so next tap triggers fresh search
    await env.SUMMARIES.delete('bio:' + id);
  }

  return json({ ok: true, id, message: 'Flagged. Cache cleared — next tap will re-search.' });
}

// Also accept GET for easy curl testing
export async function onRequestGet(context) {
  return json({ error: 'Send a POST with {id, name, reason}' }, 405);
}

function cors(h = {}) { return { 'access-control-allow-origin': '*', ...h }; }
function json(obj, status = 200) {
  return new Response(JSON.stringify(obj),
    { status, headers: cors({ 'content-type': 'application/json' }) });
}
