// Generates a Workflow script (with the 141-place list embedded) that produces,
// per place: a clean diner-facing chef_bio and a baked food-safety summary.
import fs from 'fs';
const d = JSON.parse(fs.readFileSync('data/kyoto.json', 'utf8'));
const places = d.places.filter(p => !p.safety).map(p => ({
  id: p.id,
  name: p.name,
  url: p.website || (p.chef_bio && p.chef_bio.sources && p.chef_bio.sources[0]) || '',
  neighborhood: p.neighborhood,
  cuisine: p.cuisine,
  category: p.category,
  gf: p.gf_detail || '',
  vegan: p.vegan_status || '',
}));

const script = `export const meta = {
  name: 'kyoto-bio-safety-content',
  description: 'Rewrite diner-facing chef bios + bake food-safety summaries for all Kyoto places',
  phases: [{ title: 'Content', detail: 'per place: clean bio + safety summary' }],
}

const PLACES = ${JSON.stringify(places)};

const SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    bio: {
      type: 'object', additionalProperties: false,
      properties: {
        chef_name: { type: ['string','null'] },
        roles: { type: 'array', items: { type: 'string' } },
        origin: { type: ['string','null'] },
        background: { type: ['string','null'] },
        philosophy: { type: ['string','null'] },
        specialty: { type: ['string','null'] },
        anecdotes: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text','source'] } },
        confidence: { type: 'string', enum: ['high','medium','low','none'] },
        sources: { type: 'array', items: { type: 'string' } },
      },
      required: ['confidence','roles','anecdotes','sources'],
    },
    safety: {
      type: 'object', additionalProperties: false,
      properties: {
        dedicated_fryer: { type: ['boolean','null'] },
        gf_cross_contamination: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
        soy_sauce_wheat: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
        vegan_cross_contact: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
        staff_allergy_handling: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
        positives: { type: 'array', items: { type: 'object', additionalProperties: false, properties: { text: { type: 'string' }, source: { type: 'string' } }, required: ['text'] } },
        confidence: { type: 'string', enum: ['high','medium','low','none'] },
      },
      required: ['confidence','gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact','staff_allergy_handling','positives'],
    },
  },
  required: ['bio','safety'],
}

const prompt = p => \`You are writing DINER-FACING content for a Kyoto dining app. Be accurate; ground claims in pages you fetch. Two outputs for this one restaurant:

RESTAURANT: \${p.name} | area: \${p.neighborhood} | cuisine: \${p.cuisine} | category: \${p.category}
Known page: \${p.url || '(search for it)'}
Existing dietary notes — GF: \${p.gf} | vegan_status: \${p.vegan}

Fetch the Tabelog page (and 1-2 other sources if useful). Then produce:

1) bio — a CHEF/OWNER STORY a diner would enjoy. Put the real story in 'background' (founding, the family/people, history, what makes it special), 'specialty' (what they're known for, dish-level), 'philosophy' if genuinely documented, and 'anecdotes' (each with a real source URL). 'chef_name' only if actually named in a source.
   CRITICAL: NO developer/meta text anywhere. Do NOT mention Tabelog, seat counts (席数), budgets (予算), review counts, ratings, "reviews are overwhelmingly Japanese", sourcing methods, or how the data was derived. If there is no genuine owner/place story in the sources, set confidence:'none' and leave background/specialty/philosophy null and anecdotes/[] — the app shows a graceful "ask them directly" message for that. Don't pad with filler.

2) safety — a food-safety read for celiac/GF and vegan diners, in the app's structure. Mine the actual reviews/sources for: dedicated_fryer (true/false/null), gf_cross_contamination, soy_sauce_wheat (most Japanese soy sauce contains wheat), vegan_cross_contact, staff_allergy_handling, and positives — each an array of {text, source} (source optional but include the URL when the claim comes from a page). Be honest and conservative: for wheat/soy/dashi-heavy places (ramen, udon, katsu, tempura, tonkatsu, most shokudō), say plainly it is not celiac-safe. If reviews surface nothing specific, return empty arrays (the app then shows "no specific reports — confirm with staff"). Set safety.confidence by how much real signal you found.
Do NOT invent sources or claims.\`;

phase('Content')
const out = await parallel(PLACES.map(p => () =>
  agent(prompt(p), { label: 'content:' + p.name.slice(0, 18), phase: 'Content', schema: SCHEMA })
    .then(r => r ? { id: p.id, bio: r.bio, safety: r.safety } : null)
    .catch(() => null)))

const results = out.filter(Boolean)
log('content produced for ' + results.length + ' / ' + PLACES.length + ' places')
return { count: results.length, total: PLACES.length, results }
`;

fs.writeFileSync('scripts/content-workflow.js', script);
console.log('wrote scripts/content-workflow.js for', places.length, 'places (', script.length, 'bytes)');
