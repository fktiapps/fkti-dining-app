// Build the worklist for the ramen deep-dive module: shops that read as ramen
// but carry no `ramen` block. A ramen shop with no GF verdict is the exact case
// REVIEW_PROTOCOL.md singles out — wheat is the default and the label has to
// account for it.
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const RX = /ramen|ラーメン|らーめん|つけ麺|中華そば|担担|坦坦|тан/i;
// These read as noodles but are a different dish entirely — no ramen block.
const NOT_RAMEN = /あんかけスパゲティ|ankake spagh|きしめん|kishimen|山本屋|味噌煮込/i;

const only = process.argv.slice(2);
const cities = only.length ? CITIES.filter(c => only.includes(c)) : CITIES;
const out = {};

for (const city of cities) {
  const rows = readCity(city).places
    .filter(r => RX.test(`${r.cuisine_type || ''} ${r.cuisine || ''} ${r.name}`))
    .filter(r => !r.ramen)
    .filter(r => !NOT_RAMEN.test(r.name))
    .map(r => ({
      id: r.id, name: r.name, city,
      cuisine: r.cuisine, neighborhood: r.neighborhood,
      gf_confidence: r.gf_confidence, vegan_status: r.vegan_status,
      website: r.website || null, menu_url: r.menu_url || null,
      notes: String(r.notes || '').slice(0, 300),
    }));
  if (rows.length) out[city] = rows;
}

fs.mkdirSync('data/_ramen_worklist', { recursive: true });
for (const [city, rows] of Object.entries(out)) {
  fs.writeFileSync(`data/_ramen_worklist/${city}.json`, JSON.stringify(rows, null, 1));
  console.log(`${city.padEnd(11)}${rows.length} shops -> data/_ramen_worklist/${city}.json`);
}
console.log(`total: ${Object.values(out).reduce((n, r) => n + r.length, 0)}`);
