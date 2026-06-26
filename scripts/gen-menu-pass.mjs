// Stage 1 of the dish-bank: per-place MENU pass for one city.
// Finds + corroborates a menu, translates every item, classifies GF/vegan conservatively,
// tags each item with a canonical dish_key (→ Stage 2 dish bank).
// Usage: node scripts/gen-menu-pass.mjs <city>
import fs from 'fs';

const city = process.argv[2];
if (!city) throw new Error('usage: node scripts/gen-menu-pass.mjs <city>');
const d = JSON.parse(fs.readFileSync(`data/${city}.json`, 'utf8'));
const places = d.places.map(p => ({ id: p.id, name: p.name, cuisine: p.cuisine || '', cuisine_type: p.cuisine_type || '', neighborhood: p.neighborhood || '', website: p.website || '', menu_url: p.menu_url || '' }));

const ITEM = { type: 'object', additionalProperties: false, properties: {
  ja: { type: 'string' }, romaji: { type: 'string' }, en: { type: 'string' },
  price: { type: 'string' }, section: { type: 'string' },
  gf: { type: 'string', enum: ['gf', 'ask', 'no'] }, vegan: { type: 'string', enum: ['vegan', 'ask', 'no'] },
  note: { type: 'string' }, dish_key: { type: 'string' },
}, required: ['ja', 'romaji', 'en', 'gf', 'vegan', 'dish_key'] };

const MENU_SCHEMA = { type: 'object', additionalProperties: false, properties: {
  found: { type: 'boolean' },
  verified: { type: 'string', enum: ['authoritative', 'provisional', 'none'] },
  sources: { type: 'array', items: { type: 'string' } },
  confidence: { type: 'string', enum: ['high', 'medium', 'low'] },
  items: { type: 'array', items: ITEM },
  caveat: { type: 'string' },
}, required: ['found', 'verified', 'items', 'sources', 'confidence'] };

const script = `export const meta = {
  name: 'menu-pass-${city}',
  description: 'Stage-1 menu pass for ${city}: find+corroborate menus, translate, classify GF/vegan, tag dish_key',
  phases: [{ title: 'Menus' }],
}
const PLACES = ${JSON.stringify(places)};
const MENU_SCHEMA = ${JSON.stringify(MENU_SCHEMA)};

const menuPrompt = p => \`You are documenting ONE restaurant's MENU for a curated dining app used by GLUTEN-FREE and VEGAN travelers. Research the web (WebSearch then WebFetch): the shop's official site menu, its Tabelog 'dtlmenu' page, GuruNavi/Hot Pepper, menu photos, reputable food blogs.
SHOP: \${p.name} | city: ${city} | cuisine: \${p.cuisine} (\${p.cuisine_type}) | area: \${p.neighborhood}\${p.website ? ' | site: ' + p.website : ''}\${p.menu_url ? ' | menu: ' + p.menu_url : ''}

INTEGRITY (celiac safety is priority #1 — NEVER invent dishes):
- If TWO OR MORE independent sources agree on the menu → verified:"authoritative".
- If only ONE usable source → verified:"provisional".
- If you cannot find a real, corroborated menu → found:false, verified:"none", items:[]. Do not guess a menu.

For each menu item you can confirm (aim COMPLETE, cap ~40 of the signature/representative items):
- ja: exact Japanese name. romaji: Hepburn. en: natural English translation.
- price: e.g. "¥1,050" if documented, else "" (prices are APPROXIMATE / may change — that caveat is shown to users).
- section: e.g. "Noodles","Donburi","Small plates","Set meals","Drinks".
- gf: "gf" | "ask" | "no". vegan: "vegan" | "ask" | "no". note: one short clause on the key dietary fact (e.g. "soba is nihachi — cut with wheat", "broth uses bonito dashi", "tempura batter is wheat", "dressing contains soy sauce").
- dish_key: a lowercase ascii_with_underscores CANONICAL slug for the DISH so the same dish shares a key across shops (親子丼→"oyako_don", ざるそば→"zaru_soba", 天丼→"tendon", 出汁巻き卵→"dashimaki_tamago"). Generic, not shop-specific.

DIETARY RULES — be CONSERVATIVE (a wrong "safe" call endangers a celiac):
- Wheat noodles, tempura/fried batter, most soy sauce, miso (often barley/wheat) → gf:"no".
- Fish/bonito/niboshi dashi, meat, egg, dairy, gelatin → vegan:"no".
- If a dish COULD be made safe but you are not sure → "ask". Never optimistically guess "gf"/"vegan".
Set caveat to any menu-wide note (e.g. "single-source/provisional", "lunch menu only", "prices ~2024"). Return ONLY the schema object.\`;

phase('Menus')
const out = (await parallel(PLACES.map(p => () =>
  agent(menuPrompt(p), { label: 'menu:' + p.name.slice(0, 18), phase: 'Menus', schema: MENU_SCHEMA, model: 'sonnet' })
    .then(r => (r && r.found && r.items && r.items.length) ? { id: p.id, name: p.name, menu: r } : null).catch(() => null)))).filter(Boolean)
const auth = out.filter(o => o.menu.verified === 'authoritative').length
log('${city} menus: ' + out.length + ' / ' + PLACES.length + ' have a menu (' + auth + ' authoritative, ' + (out.length - auth) + ' provisional)')
return { counts: { targets: PLACES.length, withMenu: out.length, authoritative: auth }, kept: out }
`;
fs.writeFileSync(`scripts/menu-pass-${city}-workflow.js`, script);
console.log(`wrote scripts/menu-pass-${city}-workflow.js | places:`, places.length, '|', script.length, 'bytes');
