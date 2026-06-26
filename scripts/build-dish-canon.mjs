// Merge the canonicalization pass → canonical base dishes + variant map + true singletons.
// Usage: node scripts/build-dish-canon.mjs <city>
import fs from 'fs';
const city = process.argv[2] || 'kyoto';
const maps = JSON.parse(fs.readFileSync(`data/_dishcanon_raw.json`, 'utf8'));
const menus = JSON.parse(fs.readFileSync(`data/${city}_menus.json`, 'utf8'));

// dish_key -> set of restaurants
const cov = {};
for (const [id, m] of Object.entries(menus)) for (const it of (m.items || [])) { const k = it.dish_key; if (!k) continue; (cov[k] = cov[k] || new Set()).add(id); }

const byKey = new Map(maps.map(x => [x.dish_key, x]));
const bases = {}; // base -> {en,ja,romaji, keys:Set, rests:Set, variants:Set}
for (const k of Object.keys(cov)) {
  const mp = byKey.get(k) || { base: k, base_en: k, relation: 'unique' };
  const base = mp.base || k;
  const b = bases[base] = bases[base] || { base, base_en: mp.base_en || base, base_ja: mp.base_ja || '', base_romaji: mp.base_romaji || '', kind: '', cultural: '', keys: new Set(), rests: new Set(), variants: new Set() };
  b.keys.add(k);
  for (const r of cov[k]) b.rests.add(r);
  if (mp.relation === 'variant') b.variants.add(k);
  if (mp.base_ja && !b.base_ja) b.base_ja = mp.base_ja;
  if (mp.base_romaji && !b.base_romaji) b.base_romaji = mp.base_romaji;
  // kind/cultural: prefer the base's own row, else first seen
  if (k === base) { if (mp.kind) b.kind = mp.kind; if (mp.cultural) b.cultural = mp.cultural; }
  else { b.kind = b.kind || mp.kind || ''; b.cultural = b.cultural || mp.cultural || ''; }
}
const list = Object.values(bases).map(b => ({ base: b.base, en: b.base_en, ja: b.base_ja, romaji: b.base_romaji, kind: b.kind || 'dish', cultural: b.cultural || 'medium', member_keys: b.keys.size, restaurants: b.rests.size, variants: b.variants.size })).sort((a, b) => b.restaurants - a.restaurants);

const variant_map = {}; maps.forEach(m => { if (m.relation === 'variant') variant_map[m.dish_key] = m.base; });
const culRank = { high: 2, medium: 1, low: 0 };
const isFood = b => ['dish', 'sweet'].includes(b.kind);
// TOP-100 = culturally-defining DISHES (not drinks/sides), ranked by cultural significance then reach
const top100 = list.filter(isFood).sort((a, b) => (culRank[b.cultural] || 0) - (culRank[a.cultural] || 0) || b.restaurants - a.restaurants).slice(0, 100);
// conversation-starter singletons = a genuine, culturally-meaningful dish served at only 1 place (NOT a one-off drink/side)
const singletons = list.filter(b => b.restaurants === 1 && isFood(b) && ['high', 'medium'].includes(b.cultural));
const authorable = list.filter(b => b.restaurants >= 2);        // get a full base entry
const drinksSides = list.filter(b => ['drink', 'side'].includes(b.kind)).length;

fs.writeFileSync(`data/_dishbank_canonical.json`, JSON.stringify({ city, generated_keys: Object.keys(cov).length, canonical_bases: list.length, authorable_2plus: authorable.length, conversation_singletons: singletons.length, drinks_sides: drinksSides, top100: top100.map(b => b.base), bases: list, variant_map }, null, 1));
console.log(`${city}: ${Object.keys(cov).length} raw keys → ${list.length} canonical bases`);
console.log(`  authorable (>=2): ${authorable.length} | culturally-meaningful singletons (chef-chat flag): ${singletons.length} | variants folded: ${Object.keys(variant_map).length} | drinks/sides excluded from Top-100: ${drinksSides}`);
console.log('\nTop 25 "dishes that make the cuisine" (by cultural significance, drinks/sides excluded):');
top100.slice(0, 25).forEach((b, i) => console.log(`  ${String(i + 1).padStart(2)}. [${b.cultural}] ${b.en}${b.ja ? ' (' + b.ja + ')' : ''} · ${b.restaurants} shops · ${b.variants}v`));
