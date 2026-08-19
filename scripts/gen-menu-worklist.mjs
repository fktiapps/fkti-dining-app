// Worklist for the menu coverage pass.
//
// Covers EVERY record without a menu, not just the gluten-free-relevant ones.
// An earlier version of this script filtered to GF/vegan-positive records on the
// reasoning that a menu adds nothing at a shop already labelled "not gluten-free".
// That was wrong: the menu is for the traveller sitting in front of an
// all-Japanese menu trying to work out what any of it is. Decoding the menu is
// the value, independent of whether the shop happens to suit a restricted diet.
//
//   node scripts/gen-menu-worklist.mjs                 # all cities
//   node scripts/gen-menu-worklist.mjs nagano himeji
//   node scripts/gen-menu-worklist.mjs --skip-assigned # omit ids already out with an agent
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const args = process.argv.slice(2);
const skipAssigned = args.includes('--skip-assigned');
const only = args.filter(a => !a.startsWith('--'));
const cities = only.length ? CITIES.filter(c => only.includes(c)) : CITIES;

// ids already dispatched in the first (GF/vegan-positive) tranche
const assigned = new Set();
if (skipAssigned && fs.existsSync('data/_menu_worklist')) {
  for (const f of fs.readdirSync('data/_menu_worklist'))
    for (const r of JSON.parse(fs.readFileSync(`data/_menu_worklist/${f}`, 'utf8'))) assigned.add(r.id);
}

fs.mkdirSync('data/_menu_worklist2', { recursive: true });
let total = 0;

for (const city of cities) {
  const menus = JSON.parse(fs.readFileSync(`data/${city}_menus.json`, 'utf8'));
  const rows = readCity(city).places
    .filter(r => !menus[r.id])
    .filter(r => !assigned.has(r.id))
    .map(r => ({
      id: r.id, name: r.name, city,
      gf: r.gf_confidence, vegan: r.vegan_status,
      cuisine: r.cuisine, cuisine_type: r.cuisine_type,
      neighborhood: r.neighborhood,
      website: r.website || null, menu_url: r.menu_url || null,
    }));
  if (!rows.length) continue;
  fs.writeFileSync(`data/_menu_worklist2/${city}.json`, JSON.stringify(rows, null, 1));
  console.log(`${city.padEnd(11)}${String(rows.length).padStart(4)} -> data/_menu_worklist2/${city}.json`);
  total += rows.length;
}
console.log(`total: ${total}`);
