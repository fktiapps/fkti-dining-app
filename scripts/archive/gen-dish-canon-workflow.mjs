// Stage-2 step 1: canonicalize Kyoto dish_keys → base dishes + variant map (LLM clustering).
// Output kept[] = mappings -> data/_dishcanon_raw.json -> build-dish-canon.mjs.
import fs from 'fs';
const menus = JSON.parse(fs.readFileSync('data/kyoto_menus.json', 'utf8'));
const cov = {}, rep = {};
for (const [id, m] of Object.entries(menus)) for (const it of (m.items || [])) {
  const k = it.dish_key; if (!k) continue;
  (cov[k] = cov[k] || new Set()).add(id);
  if (!rep[k]) rep[k] = { en: it.en || '', ja: it.ja || '' };
}
const keys = Object.keys(cov).map(k => ({ dish_key: k, n: cov[k].size, en: rep[k].en, ja: rep[k].ja })).sort((a, b) => b.n - a.n);
const anchors = keys.slice(0, 120).map(x => ({ dish_key: x.dish_key, en: x.en }));
const B = 100; const batches = []; for (let i = 0; i < keys.length; i += B) batches.push(keys.slice(i, i + B));

const SCHEMA = { type: 'object', additionalProperties: false, properties: { mappings: { type: 'array', items: { type: 'object', additionalProperties: false, properties: {
  dish_key: { type: 'string' }, base: { type: 'string' }, base_en: { type: 'string' }, base_ja: { type: 'string' }, base_romaji: { type: 'string' },
  relation: { type: 'string', enum: ['base', 'variant', 'unique'] }, kind: { type: 'string', enum: ['dish', 'drink', 'side', 'sweet'] }, cultural: { type: 'string', enum: ['high', 'medium', 'low'] }, note: { type: 'string' },
}, required: ['dish_key', 'base', 'base_en', 'relation', 'kind', 'cultural'] } } }, required: ['mappings'] };

const script = `export const meta = { name: 'dish-canon', description: 'Canonicalize Kyoto dish_keys into base dishes + variant map', phases: [{ title: 'Cluster' }] }
const BATCHES = ${JSON.stringify(batches)};
const ANCHORS = ${JSON.stringify(anchors)};
const SCHEMA = ${JSON.stringify(SCHEMA)};
const prompt = b => \`You are canonicalizing Japanese restaurant menu dish identifiers into BASE dishes for a dish encyclopedia. For EACH dish_key in the batch, assign its canonical base.
DEFINITIONS:
- base: the fundamental dish itself (e.g. gyoza, curry_rice, ramen, tonkatsu, dashimaki_tamago, omurice). relation:"base".
- variant: a version of a base that would SHARE the base's history/ingredients — e.g. yasai_gyoza → base gyoza (note "vegetable version"); iced_coffee → base coffee. relation:"variant", give the base + a short note.
- unique: a distinct dish that is NOT just a version of a common base. relation:"unique" (base = its own canonical slug).
IMPORTANT: dishes that merely SHARE A CATEGORY WORD are NOT the same base. keema_masala, palak_paneer, butter_chicken are DISTINCT dishes — do NOT collapse them all to "curry". Japanese curry_rice (カレーライス) is its own base; Indian curries are their own distinct dishes. Be a careful cook, not a lumper.
NOODLE DISHES: treat the PREPARATION as the base — かけうどん (kake udon) and かけそば (kake soba) are the SAME dish (the noodle is just a choice): map BOTH to base 'kake', noting udon/soba. Same for kitsune, tsukimi, tempura, zaru across udon AND soba. EXCEPTION: 'tanuki' (たぬき) means different things by REGION (Kansai/Kyoto vs Kanto), so keep tanuki as its own culturally-bound base — do not merge it away.
ALSO TAG kind + cultural for EACH item. kind = 'dish' | 'drink' (coffee/tea/juice/cola/beer/sake/wine/latte/soda) | 'side' (fries/edamame/plain rice/green salad/pickles) | 'sweet' (cake/parfait/ice cream/wagashi). cultural = how DEFINING-OF-JAPANESE-CUISINE it is: 'high' (iconic & culturally bound — tanuki/kitsune soba, dashimaki, oyako-don, okonomiyaki, unagi, tempura), 'medium' (a normal Japanese dish), 'low' (generic/international/drinks — cola, juice, fries, pasta, cheesecake). FREQUENCY != CULTURE: コーラ/ジュース are 'low' & 'drink' even if on every menu; たぬきそば is 'high' even if rarer.
Prefer mapping to an ANCHOR base when the dish genuinely is that base or a minor variant of it.
ANCHORS (high-frequency base dishes): \${ANCHORS.map(a => a.dish_key + ' (' + a.en + ')').join(', ')}
For each: base (canonical lowercase_slug), base_en, base_ja, base_romaji, relation, kind, cultural, note (short; "" if none).
BATCH:
\${b.map(x => x.dish_key + ' = "' + x.en + '" / ' + x.ja + ' [' + x.n + ' shops]').join('\\n')}
Return ONLY the mappings array.\`
phase('Cluster')
const out = (await parallel(BATCHES.map((b, i) => () =>
  agent(prompt(b), { label: 'canon ' + (i + 1) + '/' + BATCHES.length, phase: 'Cluster', schema: SCHEMA, model: 'sonnet' }).then(r => (r && r.mappings) || []).catch(() => [])))).flat()
log('canonical mappings produced: ' + out.length + ' of ' + ${keys.length} + ' keys')
return { counts: { keys: ${keys.length}, mapped: out.length, batches: BATCHES.length }, kept: out }
`;
fs.writeFileSync('scripts/dish-canon-workflow.js', script);
console.log('wrote scripts/dish-canon-workflow.js | keys:', keys.length, '| batches:', batches.length, '| anchors:', anchors.length);
