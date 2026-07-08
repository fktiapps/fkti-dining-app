export const meta = {
  name: 'tokyo-discover',
  description: 'Per-circle Tokyo dining discovery (Haiku); args = {label, centerText, angles}',
  phases: [{ title: 'Discover' }],
}
const DISCOVERY_SCHEMA = {"type":"object","additionalProperties":false,"properties":{"candidates":{"type":"array","items":{"type":"object","additionalProperties":false,"properties":{"name_ja":{"type":"string"},"area":{"type":"string"},"cuisine":{"type":"string"},"tabelog_url":{"type":"string"}},"required":["name_ja","area","cuisine","tabelog_url"]}}},"required":["candidates"]};
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-本店店]/g, '').toLowerCase();
const A = (typeof args === 'string' ? JSON.parse(args) : args) || {};
const ANGLES = A.angles || [];
const discPrompt = (q, avoid) => `Find genuinely good DINING spots in ${A.label}, Japan, TIGHTLY within: ${A.centerText}. Prefer GF-friendly, vegan/vegetarian, shōjin, and beloved local mom-&-pop places, plus notable local specialties. Search the web for: ${q}
Stay INSIDE the target radius — walking distance of that landmark only, not the wider city.
${avoid ? 'We already have these — do NOT return them:\n' + avoid : ''}
Return up to 8 NEW places. For each: name_ja (exact), area (district + nearest landmark/station), cuisine, tabelog_url (if found, else "").`;

phase('Discover')
const seen = new Set(); const queue = [];
let round = 0, dry = 0;
while (round < 4 && dry < 2) {
  round++;
  const avoid = queue.length ? queue.map(c => c.name_ja).join('、') : '';
  const disc = await parallel(ANGLES.map((q, i) => () => agent(discPrompt(q, avoid), { label: A.id + ' disc r' + round + ' #' + i, phase: 'Discover', schema: DISCOVERY_SCHEMA, model: 'haiku' }).then(r => (r && r.candidates) || []).catch(() => [])));
  let fresh = 0;
  for (const list of disc) for (const c of (list || [])) { const k = norm(c.name_ja); if (!k || seen.has(k)) continue; seen.add(k); queue.push(c); fresh++; }
  log(A.id + ' r' + round + ': +' + fresh + ' fresh (queue ' + queue.length + ')');
  if (fresh < 4) dry++;
}
log(A.id + ' discovery done: ' + queue.length + ' candidates over ' + round + ' rounds');
return { id: A.id, candidates: queue };
