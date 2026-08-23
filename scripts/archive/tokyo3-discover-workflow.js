export const meta = {
  name: 'tokyo3-discover',
  description: 'Neighborhood-scale central-Tokyo dining discovery (Haiku); args = { shard, angles }',
  phases: [{ title: 'Discover' }],
}
const DISCOVERY_SCHEMA = {"type":"object","additionalProperties":false,"properties":{"candidates":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"name_ja":{"type":"string"},"area":{"type":"string"},"cuisine":{"type":"string"},"tabelog_url":{"type":"string"}},"required":["name_ja","area","cuisine","tabelog_url"]}}},"required":["candidates"]};
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-本店店]/g, '').toLowerCase();
const A = (typeof args === 'string' ? JSON.parse(args) : args) || {};
const ANGLES = A.angles || [];

const prompt = (nb, q) => `Find genuinely notable DINING spots in the ${nb} area of central Tokyo. Prefer: gluten-free-friendly, vegan/vegetarian/shōjin, celebrated ramen/tsukemen, and beloved mom-&-pop / old-guard local places, plus signature local specialties. Search the web: ${q}
Stay within walking distance of ${nb} (central Tokyo). Return up to 8 places.
For each: name_ja (exact Japanese name), area (district + nearest station), cuisine, tabelog_url (if seen, else "").`;

phase('Discover')
const out = (await parallel(ANGLES.map((a, i) =>
  () => agent(prompt(a.nb, a.q), { label: 's' + A.shard + ' ' + a.nb.slice(0,6) + ' #' + i, phase: 'Discover', schema: DISCOVERY_SCHEMA, model: 'haiku' })
    .then(r => (r && r.candidates) || []).catch(() => [])))).flat();

// dedupe within the shard
const seen = new Set(), cands = [];
for (const c of out) { const k = norm(c.name_ja); if (!k || seen.has(k)) continue; seen.add(k); cands.push(c); }
log('shard ' + A.shard + ': ' + ANGLES.length + ' angles → ' + cands.length + ' unique candidates');
return { shard: A.shard, count: cands.length, candidates: cands };
