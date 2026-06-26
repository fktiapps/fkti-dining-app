// Generates the RAMEN PASS workflow: enrich every ramen-type place across all 4 cities
// with a `ramen` object per RAMEN_SCHEMA.md (research-first; theology-aware).
// Output kept[] = [{id, city, ramen}] -> data/_ramen_enrich.json -> build-ramen-enrich.mjs.
import fs from 'fs';

const CITIES = ['kyoto', 'kanazawa', 'nara', 'hiroshima'];
// Human first-hand notes to honor (research/human_ramen_notes.md). Keep private DCP stories OUT.
const HUMAN_NOTES = {
  'ChIJ58xq4ZkHAWAReKyfPh-M-lk': 'Owner is Katagiri. The bowl rests entirely on its broth: it LOOKS heavy and dark (black/brown) but tastes surprisingly LIGHT and PROFOUNDLY DEEP — because the broth is built from pork MEAT, not bones. Reflect this in pantheon/broth notes; set chef context to Katagiri. (Do NOT mention any allergy/soy story — that is private DCP only.)',
};

const places = [];
for (const city of CITIES) {
  const d = JSON.parse(fs.readFileSync(`data/${city}.json`, 'utf8'));
  for (const p of d.places) {
    if (p.cuisine_type !== 'ramen') continue;
    if (p.ramen) continue; // already enriched — only do new ramen shops
    places.push({ id: p.id, city, name: p.name, cuisine: p.cuisine || '', neighborhood: p.neighborhood || '', website: p.website || '', human: HUMAN_NOTES[p.id] || '' });
  }
}

const RAMEN_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    broth_base: { type: 'array', items: { type: 'string', enum: ['tonkotsu', 'chicken', 'gyokai', 'niboshi', 'beef', 'vegetable', 'blend', 'other'] } },
    broth_texture: { type: 'string', enum: ['chintan', 'paitan', 'unknown'] },
    tare: { type: 'array', items: { type: 'string', enum: ['shoyu', 'shio', 'miso', 'other'] } },
    aroma_oil: { type: 'array', items: { type: 'string', enum: ['chiyu', 'lard_seabura', 'mayu', 'negi', 'none', 'other'] } },
    richness: { type: 'string', enum: ['assari', 'medium', 'kotteri'] },
    noodles: { type: 'object', additionalProperties: false, properties: {
      thickness: { type: 'string', enum: ['thin', 'medium', 'thick', 'unknown'] },
      shape: { type: 'string', enum: ['straight', 'wavy', 'unknown'] },
      hydration: { type: 'string', enum: ['low', 'medium', 'high', 'unknown'] },
      handmade: { type: ['boolean', 'null'] }, notes: { type: 'string' } }, required: ['thickness', 'shape', 'hydration', 'notes'] },
    regional_style: { type: 'array', items: { type: 'string' } },
    sub_genre: { type: 'array', items: { type: 'string', enum: ['ramen', 'tsukemen', 'mazesoba_aburasoba', 'tantanmen', 'shiru_nashi_tantanmen', 'niboshi', 'jiro_kei', 'tori_paitan', 'other'] } },
    signature_bowl: { type: 'string' },
    chashu: { type: 'string' },
    notable_toppings: { type: 'array', items: { type: 'string' } },
    gf: { type: 'object', additionalProperties: false, properties: { status: { type: 'string', enum: ['no', 'ask', 'rare-options'] }, note: { type: 'string' } }, required: ['status', 'note'] },
    vegan: { type: 'object', additionalProperties: false, properties: { status: { type: 'string', enum: ['no', 'ask', 'available'] }, note: { type: 'string' } }, required: ['status', 'note'] },
    pantheon: { type: 'string' },
    profile: { type: 'object', additionalProperties: false, properties: {
      richness: { type: 'integer' }, oiliness: { type: 'integer' }, clarity: { type: 'integer' },
      tare_strength: { type: 'integer' }, noodle_firmness: { type: 'integer' }, aroma_punch: { type: 'integer' } },
      required: ['richness', 'oiliness', 'clarity', 'tare_strength', 'noodle_firmness', 'aroma_punch'] },
    confidence: { type: 'string', enum: ['high', 'medium', 'low', 'none'] },
    sources: { type: 'array', items: { type: 'string' } },
  },
  required: ['broth_base', 'broth_texture', 'tare', 'richness', 'noodles', 'regional_style', 'sub_genre', 'signature_bowl', 'gf', 'vegan', 'pantheon', 'profile', 'confidence', 'sources'],
};

const script = `export const meta = {
  name: 'ramen-pass',
  description: 'Enrich every ramen-type place across all 4 cities with a granular ramen object (broth/tare/oil/noodles/regional style/sub-genre/profile/pantheon/GF-vegan)',
  phases: [{ title: 'Enrich' }],
}
const PLACES = ${JSON.stringify(places)};
const RAMEN_SCHEMA = ${JSON.stringify(RAMEN_SCHEMA)};

const enrichPrompt = p => \`You are a ramen expert documenting ONE shop's bowl for a curated dining app. Research it on the web (WebSearch then WebFetch: Tabelog, official site, food blogs) and produce its structured \\\`ramen\\\` profile. NEVER invent — if a fact isn't found, use "unknown"/empty and LOWER the confidence. Diner-facing: NO developer meta (never name Tabelog/review-sites/seat counts/awards-by-platform in pantheon or notes).
SHOP: \${p.name} | city: \${p.city} | cuisine: \${p.cuisine} | area: \${p.neighborhood}\${p.website ? ' | site: ' + p.website : ''}
\${p.human ? 'FIRST-HAND NOTE TO HONOR (from the app owner — trust it, weave it in): ' + p.human : ''}

Fill the schema:
• broth_base: pork(tonkotsu) | chicken | gyokai(seafood) | niboshi(dried sardine) | beef | vegetable | blend(W-soup) | other (array; may combine).
• broth_texture: chintan (clear) | paitan (cloudy/emulsified) | unknown.
• tare: shoyu | shio | miso | other (array). NOTE: tonkotsu is a BROTH not a tare — never put it here.
• aroma_oil: chiyu(chicken fat) | lard_seabura(pork back-fat) | mayu(black-garlic oil) | negi(scallion oil) | none | other.
• richness: assari(light) | medium | kotteri(rich).
• noodles: thickness thin|medium|thick; shape straight|wavy; hydration low|medium|high; handmade bool/null; notes.
• regional_style: classify against the WHOLE-JAPAN gotōchi pantheon regardless of which city the shop is in (a Kyoto shop may serve Hakata tonkotsu, etc.). Examples: "Hakata tonkotsu","Onomichi","Sapporo miso","Asahikawa shoyu","Kitakata","Kyoto se-abura shoyu","Tokyo shoyu","Yokohama Iekei","Hiroshima shiru-nashi tantanmen","Hiroshima tsukemen","Tenri stamina". [] if none/modern-original.
• sub_genre: ramen | tsukemen | mazesoba_aburasoba | tantanmen | shiru_nashi_tantanmen | niboshi | jiro_kei | tori_paitan | other.
• signature_bowl: the bowl to order. chashu: describe THE HEART (braised vs aburi/char-grilled, loin vs belly, pork vs chicken, or unusual) — "" if none/unknown. notable_toppings: the shop's dress (menma, ajitama, negi, nori, moyashi, etc.).
• gf: status no|ask|rare-options + honest note. Default "no": ramen noodles are wheat+kansui, shoyu tare is wheat — essentially never celiac-safe. Only "ask"/"rare-options" if a genuine rice/konjac-noodle or GF-tare option is documented. vegan: no|ask|available + note — fish dashi + animal tare/oil/chashu are pervasive; "available" only if a real plant-broth (kombu/shiitake/veg, no katsuo/pork) bowl is documented.
• pantheon: 1–2 vivid, diner-facing sentences placing THIS bowl in the ramen world — its regional lineage / what makes its soul distinctive (broth is the soul; you taste the lineage in the soup). Sourced in fact, no platform meta.
• profile: 0–5 integers — richness(koku: depth/umami/fattiness/BODY), oiliness(amount of surface oil/fat), clarity(0=very cloudy paitan … 5=perfectly clear chintan), tare_strength(saltiness/seasoning punch), noodle_firmness(0=soft … 5=very firm/low-hydration), aroma_punch(garlic/mayu/sansho/chili intensity).
• confidence high|medium|low|none; sources [urls you actually used].
Return ONLY the schema object.\`;

phase('Enrich')
const out = (await parallel(PLACES.map(p => () =>
  agent(enrichPrompt(p), { label: 'ramen:' + p.city + ':' + p.name.slice(0, 14), phase: 'Enrich', schema: RAMEN_SCHEMA, model: 'sonnet' })
    .then(r => r ? { id: p.id, city: p.city, name: p.name, ramen: r } : null).catch(() => null)))).filter(Boolean)
log('ramen enriched: ' + out.length + ' / ' + PLACES.length)
return { counts: { targets: PLACES.length, enriched: out.length }, kept: out }
`;
fs.writeFileSync('scripts/ramen-pass-workflow.js', script);
const byCity = places.reduce((a, p) => (a[p.city] = (a[p.city] || 0) + 1, a), {});
console.log('wrote scripts/ramen-pass-workflow.js | ramen places:', places.length, JSON.stringify(byCity), '|', script.length, 'bytes');
