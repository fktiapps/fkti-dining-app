import fs from 'fs';
const { allVegan, opts } = JSON.parse(fs.readFileSync('data/_vm_new.json', 'utf8'));
// Pre-filter obvious non-restaurants (cooking classes / experiences); the agent also double-checks.
const skip = n => /cooking class|\bclass\b|experience|\[.*\]/i.test(n);
const cands = [
  ...allVegan.filter(n => !skip(n)).map(n => ({ name: n, hint: 'all_vegan' })),
  ...opts.filter(n => !skip(n)).map(n => ({ name: n, hint: 'vegan_options' })),
];
const dropped = [...allVegan, ...opts].filter(skip);

const SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    found: { type: 'boolean' }, is_restaurant: { type: 'boolean' }, closed_or_on_hold: { type: 'boolean' },
    name_ja: { type: 'string' }, name_en: { type: 'string' },
    tabelog_url: { type: 'string' }, official_url: { type: 'string' },
    category: { type: 'string', enum: ['BOTH', 'VEGAN', 'SHOJIN', 'OMNI'] },
    cuisine: { type: 'string' }, neighborhood: { type: 'string' }, address_ja: { type: 'string' },
    lat: { type: ['number', 'null'] }, lng: { type: ['number', 'null'] }, geocode_note: { type: 'string' },
    vegan_status: { type: 'string', enum: ['full', 'options', 'limited', 'ask', 'no'] }, vegan_detail: { type: 'string' },
    gf_confidence: { type: 'string', enum: ['dedicated', 'high', 'options', 'ask', 'no'] }, gf_detail: { type: 'string' },
    hours_week: { type: 'array', items: { type: 'string' } }, hours_raw: { type: 'string' }, closed_days: { type: 'string' }, hours_status: { type: 'string', enum: ['regular', 'irregular'] },
    reservation_required: { type: 'boolean' },
    cultural_comfort_level: { type: 'string', enum: ['guide_only', 'japanese', 'konnichiwa', 'english'] }, cultural_comfort_note: { type: 'string' },
    bio: { type: 'object', additionalProperties: false, properties: {
      chef_name: { type: ['string', 'null'] }, roles: { type: 'array', items: { type: 'string' } }, origin: { type: ['string', 'null'] },
      background: { type: ['string', 'null'] }, philosophy: { type: ['string', 'null'] }, specialty: { type: ['string', 'null'] },
      anecdotes: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text', 'source'] } },
      confidence: { type: 'string', enum: ['high', 'medium', 'low', 'none'] }, sources: { type: 'array', items: { type: 'string' } },
    }, required: ['confidence', 'roles', 'anecdotes', 'sources'] },
    safety: { type: 'object', additionalProperties: false, properties: {
      dedicated_fryer: { type: ['boolean', 'null'] },
      gf_cross_contamination: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      soy_sauce_wheat: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      vegan_cross_contact: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      staff_allergy_handling: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      positives: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
      confidence: { type: 'string', enum: ['high', 'medium', 'low', 'none'] },
    }, required: ['confidence', 'gf_cross_contamination', 'soy_sauce_wheat', 'vegan_cross_contact', 'staff_allergy_handling', 'positives'] },
    caveats: { type: 'string' }, sources: { type: 'array', items: { type: 'string' } },
  },
  required: ['found', 'is_restaurant', 'name_ja', 'category', 'vegan_status', 'bio', 'safety'],
};

const script = `export const meta = {
  name: 'kyoto-vegemap-verify',
  description: 'Verify + categorize + geocode + write bios/safety for VegeMap-sourced Kyoto vegan/veg leads',
  phases: [{ title: 'Verify' }],
}
const CANDS = ${JSON.stringify(cands)};
const SCHEMA = ${JSON.stringify(SCHEMA)};

const prompt = c => \`You are verifying a VEGAN/VEGETARIAN restaurant lead for a Kyoto dining app whose core mission is helping vegan, vegetarian and gluten-free travelers. Be accurate; ground every fact in pages you fetch (WebSearch then WebFetch — Tabelog, the restaurant's official site, HappyCow, etc.). Return found:false if you cannot confirm it exists.

LEAD: "\${c.name}"  (VegeMap tag: \${c.hint === 'all_vegan' ? 'fully vegan/vegetarian' : 'has vegan options'})  — this is a Kyoto, Japan restaurant.

STEP A — IDENTITY & FILTER:
- Confirm it's a real, currently-operating Kyoto eatery. If closed/relocated unconfirmed, closed_or_on_hold=true.
- is_restaurant=false if it is NOT a place a diner visits to eat: a cooking class, food tour, online shop, event/experience, product brand, or pure caterer. (A small juice/coffee/takeaway stand or temple serving meals IS a restaurant → true.) If is_restaurant=false, you may skip the rest briefly.
- Get name_ja (exact Japanese name), name_en (romanization), tabelog_url, official_url.

STEP B — DIETARY CATEGORY (most important):
- vegan_status: full (everything vegan) | options (omnivore/veg menu with vegan choices) | limited | ask | no.
- gf_confidence: dedicated (fully GF) | high | options (some GF) | ask | no.
- category: BOTH (dedicated/near-dedicated vegan AND gluten-free) | VEGAN (fully vegan/vegetarian, GF varies) | SHOJIN (Buddhist temple cuisine / 精進料理, incl. temple-run dining) | OMNI (omnivore restaurant offering vegan options).
- vegan_detail + gf_detail: honest, specific (what's actually safe; is soy sauce wheat-free; is dashi used).

STEP C — LOGISTICS:
- address_ja, then GEOCODE: fetch https://msearch.gsi.go.jp/address-search/AddressSearch?q=<URL-ENCODED address_ja>; first feature geometry.coordinates=[lng,lat]; retry chō-level if empty []. Kyoto box lat 34.85-35.15 lng 135.60-135.86, else null + geocode_note.
- hours_week: 7 elements Mon..Sun, each "closed" or "HH:MM-HH:MM" (comma for splits). hours_raw, closed_days, hours_status (irregular if varies). reservation_required (true for temple kaiseki / reservation-only).
- neighborhood (ward + landmark/station). cultural_comfort_level + one-sentence note for a foreign student (many vegan spots are english-friendly → 'english' or 'konnichiwa').

STEP D — DINER-FACING CONTENT (no developer meta — never mention Tabelog, seat counts, review counts, or how you sourced it):
- bio: the story of the place/people — background, specialty (signature vegan dishes), philosophy (often a strong ethos at vegan spots), anecdotes w/ source URLs. confidence:'none' + nulls if no real story exists (app shows a graceful fallback).
- safety: for the GF/vegan traveler — dedicated_fryer, gf_cross_contamination, soy_sauce_wheat, vegan_cross_contact, staff_allergy_handling, positives — each {text, source}. For fully-vegan kitchens, note the reduced animal cross-contact as a positive; still flag wheat/soy/gluten honestly. Empty arrays if nothing specific found.
Do NOT invent sources or facts.\`;

phase('Verify')
const out = await parallel(CANDS.map(c => () =>
  agent(prompt(c), { label: 'vm:' + c.name.slice(0, 20), phase: 'Verify', schema: SCHEMA })
    .then(r => r ? { lead: c.name, ...r } : null).catch(() => null)))
const all = out.filter(Boolean)
const keep = all.filter(r => r.found && r.is_restaurant && !r.closed_or_on_hold)
log('verified ' + all.length + '; restaurants kept ' + keep.length)
return {
  counts: { candidates: CANDS.length, verified: all.length, kept: keep.length },
  kept: keep,
  dropped_nonrestaurant: all.filter(r => r.found && !r.is_restaurant).map(r => r.name_ja || r.lead),
  not_found_or_closed: all.filter(r => !r.found || r.closed_or_on_hold).map(r => r.lead),
}
`;
fs.writeFileSync('scripts/vegemap-workflow.js', script);
console.log('wrote scripts/vegemap-workflow.js | candidates:', cands.length, '| pre-dropped (class/experience):', dropped.length, dropped, '|', script.length, 'bytes');
