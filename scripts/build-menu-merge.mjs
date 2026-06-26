// Merge a Stage-1 menu pass into a city: writes data/<city>_menus.json (lazy-loaded) and
// flags places with has_menu. Usage: node scripts/build-menu-merge.mjs <city>
import fs from 'fs';
const city = process.argv[2];
if (!city) throw new Error('usage: node scripts/build-menu-merge.mjs <city>');
const kept = JSON.parse(fs.readFileSync(`data/_menu_${city}.json`, 'utf8'));
const d = JSON.parse(fs.readFileSync(`data/${city}.json`, 'utf8'));

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
const arr = a => Array.isArray(a) ? a : [];
const clean = s => (typeof s === 'string' ? s : '');

const menus = {}; const dishKeys = new Set(); let auth = 0, prov = 0, itemCount = 0;
for (const e of kept) {
  const m = e.menu || {};
  const items = arr(m.items).map(it => {
    const dk = clean(it.dish_key).toLowerCase().replace(/[^a-z0-9]+/g, '_').replace(/^_+|_+$/g, '');
    if (dk) dishKeys.add(dk);
    itemCount++;
    return { ja: clean(it.ja), romaji: clean(it.romaji), en: clean(it.en), price: clean(it.price), section: clean(it.section),
      gf: ['gf', 'ask', 'no'].includes(it.gf) ? it.gf : 'ask', vegan: ['vegan', 'ask', 'no'].includes(it.vegan) ? it.vegan : 'ask',
      note: clean(it.note), dish_key: dk };
  });
  if (!items.length) continue;
  const verified = ['authoritative', 'provisional'].includes(m.verified) ? m.verified : 'provisional';
  if (verified === 'authoritative') auth++; else prov++;
  menus[e.id] = { verified, confidence: m.confidence || 'low', sources: arr(m.sources), price_note: 'Prices approximate — may change.', last_checked: '2026-06-25', items };
}

fs.writeFileSync(`data/${city}_menus.json`, ser(menus));
const idx = new Map(d.places.map(p => [p.id, p]));
let flagged = 0;
for (const id of Object.keys(menus)) { const p = idx.get(id); if (p) { p.has_menu = true; p.menu_verified = menus[id].verified; flagged++; } }
fs.writeFileSync(`data/${city}.json`, ser(d));

for (const f of ['sw.js', 'index.html']) { let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (m) s = s.split(`dcd-v${m[1]}`).join(`dcd-v${Number(m[1]) + 1}`); fs.writeFileSync(f, s); }

console.log(`${city}: ${Object.keys(menus).length} menus written (${auth} authoritative, ${prov} provisional), ${flagged} places flagged, ${itemCount} items.`);
console.log(`unique dish_keys (Stage-2 dish-bank size preview): ${dishKeys.size}`);
console.log('SW bumped. Greg deploys.');
