// Deep-enrichment workflow for the Tokyo 3-mile light tranche. REQUIRES a
// fetch-capable environment (WebFetch must reach restaurant sites / Tabelog).
// One agent per target: fetch the place's own site + maps, search for chef /
// menu / allergy info, and return a full-depth enrichment object that
// build-tokyo3-enrich.mjs merges back in place.
//
//   args = { targets: [ {id,name,neighborhood,website,gmaps,menu_url,cuisine,category}, ... ] }
//   returns { results: [ <enrichment>, ... ] }
export const meta = {
  name: 'tokyo3-enrich',
  description: 'Deep per-place enrichment of the Tokyo 3-mile light tranche (needs page fetching)',
  phases: [{ title: 'Enrich' }],
}
const A = (typeof args === 'string' ? JSON.parse(args) : args) || {};
// targetsEnc = encodeURIComponent(JSON.stringify(targets)) - keeps the tool-call
// args pure-ASCII so Japanese names don't trip the permission-dialog renderer.
const TARGETS = A.targetsEnc ? JSON.parse(decodeURIComponent(A.targetsEnc)) : (A.targets || []);

const SCHEMA = {
  type: 'object', additionalProperties: false,
  required: ['id', 'enrich_confidence'],
  properties: {
    id: { type: 'string' },
    lat: { type: 'number' }, lng: { type: 'number' },
    website: { type: 'string' }, menu_url: { type: 'string' }, cuisine: { type: 'string' },
    category: { type: 'string', enum: ['BOTH', 'GF', 'VEGAN', 'SHOJIN', 'OMNI', 'MOM_AND_POP'] },
    gf_confidence: { type: 'string', enum: ['dedicated', 'high', 'options', 'ask', 'no'] },
    gf_detail: { type: 'string' },
    vegan_status: { type: 'string', enum: ['full', 'options', 'limited', 'ask', 'no'] },
    vegan_detail: { type: 'string' },
    hours_raw: { type: 'string' }, hours_status: { type: 'string', enum: ['regular', 'irregular'] },
    hours: { type: 'object', additionalProperties: true },
    chef_bio: {
      type: 'object', additionalProperties: false,
      properties: {
        chef_name: { type: 'string' }, background: { type: 'string' }, philosophy: { type: 'string' },
        specialty: { type: 'string' }, origin: { type: 'string' },
        anecdotes: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
        confidence: { type: 'string', enum: ['none', 'low', 'medium', 'high'] },
        sources: { type: 'array', items: { type: 'string' } },
      },
    },
    safety: {
      type: 'object', additionalProperties: false,
      properties: {
        dedicated_fryer: { type: ['boolean', 'null'] },
        gf_cross_contamination: { type: 'array', items: { type: 'string' } },
        soy_sauce_wheat: { type: 'array', items: { type: 'string' } },
        vegan_cross_contact: { type: 'array', items: { type: 'string' } },
        staff_allergy_handling: { type: 'array', items: { type: 'string' } },
        positives: { type: 'array', items: { type: 'string' } },
        confidence: { type: 'string', enum: ['none', 'low', 'medium', 'high'] },
        last_checked: { type: 'string' },
      },
    },
    cultural_comfort: { type: 'object', additionalProperties: false, properties: { level: { type: 'string', enum: ['guide_only', 'japanese', 'konnichiwa', 'english'] }, note: { type: 'string' } } },
    enrich_confidence: { type: 'string', enum: ['low', 'medium', 'high'] },
    sources: { type: 'array', items: { type: 'string' } },
  },
};

const prompt = t => `Deep-enrich ONE Tokyo restaurant for a celiac/vegan-aware travel guide. Return the object for build-tokyo3-enrich.mjs (echo id EXACTLY).

PLACE
  id: ${t.id}
  name: ${t.name}
  neighborhood (approx): ${t.neighborhood}
  cuisine signal: ${t.cuisine}
  known website: ${t.website || '(none - find it)'}
  google maps: ${t.gmaps || ''}

DO THIS
1. WebFetch the restaurant's own website if known; otherwise WebSearch to find it, then fetch it. Also fetch/search its Tabelog page and a maps link.
2. Real coordinates: derive precise lat/lng from the official site / maps / address (Chome-level). Only set lat/lng if you are confident - otherwise OMIT them (the approx pin stays).
3. Hours: hours_raw (human string) + hours_status ('regular' if a fixed weekly schedule, else 'irregular').
4. Gluten-free (be strict - a celiac may rely on this):
   - 'dedicated' only if a dedicated GF kitchen/fryer; 'high' strong focus; 'options' some real GF items; 'ask' unclear; 'no' clearly not.
   - Juwari (10-wari) soba is NOT gluten-free (wheat cross-contamination + wheat-soy-sauce tsuyu) -> 'ask' at best, and SAY SO in gf_detail.
   - gf_detail: concrete, cite the wheat risks you actually found (soy sauce, tempura batter, shared fryer, flour dusting).
5. Vegan: full/options/limited/ask/no. Flag hidden dashi/bonito. vegan_detail concrete.
6. category: reclassify if the evidence warrants (BOTH/GF/VEGAN/SHOJIN/MOM_AND_POP/OMNI).
7. chef_bio: chef_name, background, philosophy, specialty, up to 3 anecdotes each with a source URL, confidence, sources[]. Empty/low confidence is fine if nothing found - do NOT invent.
8. safety: fryer, cross-contamination notes, staff allergy handling, positives, confidence, last_checked '2026-07-26'.
9. cultural_comfort.level: guide_only / japanese / konnichiwa / english (how much English/help a foreign diner can expect).
10. enrich_confidence overall, and sources[] (every URL you actually used).

Ground every claim in a fetched page or search result. Prefer Japanese sources. Never fabricate a bio, a menu item, or a safety assurance.`;

phase('Enrich')
const results = (await parallel(TARGETS.map(t => () =>
  agent(prompt(t), { label: (t.name || t.id).slice(0, 16), phase: 'Enrich', schema: SCHEMA })
    .catch(() => null)))).filter(Boolean);
log(`enriched ${results.length}/${TARGETS.length} targets`);
return { results };
