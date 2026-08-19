// Normalize cuisine_type onto the controlled vocabulary the UI can label.
// Two moves: PROMOTE legitimate categories that were never labeled (oden, oyster,
// chanko, french, italian, cafe, thai) and MAP free-text descriptors onto canon.
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

// the vocabulary after this pass — must stay in sync with CUISINE_LABELS in index.html
export const CANON = new Set([
  'udon_soba','ramen','donburi','shokudo','katsu','tempura','kaiseki','sushi',
  'yakitori','okonomiyaki','gyoza','unagi','curry','kissaten','yoshoku','obanzai',
  'izakaya','tofu','shojin','sweets','other',
  // promoted this pass
  'oden','oyster','chanko','french','italian','cafe','thai',
]);

// explicit, auditable map. Every non-canon value observed in the data gets a home.
const MAP = {
  // --- sweets / bakery / patisserie family ---
  'GF bakery':'sweets','bakery':'sweets','GF patisserie':'sweets','patisserie':'sweets',
  'Patisserie':'sweets','Pâtisserie / GF sweets':'sweets','baumkuchen':'sweets',
  'GF baumkuchen / confectionery':'sweets','GF confectionery':'sweets','wagashi':'sweets',
  'Rice-flour sweets':'sweets','rice-flour sweets':'sweets','Rice-flour bakery':'sweets',
  'GF rice-flour bakery':'sweets','gf-rice-bakery':'sweets','GF bagel bakery':'sweets',
  'GF donuts':'sweets','donuts':'sweets','GF vegan patisserie':'sweets',
  'GF/vegan patisserie':'sweets','Chiffon patisserie / café':'sweets',
  'Vegan GF sweets':'sweets','Vegan & gluten-free patisserie / sweets shop':'sweets',
  'Chocolate / sweets':'sweets','Rice-flour quiche':'sweets','GF crepe stand':'sweets',
  'creperie':'sweets','churro café':'sweets','pancake café':'sweets',
  'GF sweets/salad takeout':'sweets','Sweets retail':'sweets','allergy sweets cafe':'sweets',
  'Vegan / GF bakery':'sweets','bakery-cafe':'sweets','GF bakery-cafe':'sweets',

  // --- cafe family ---
  'GF café':'cafe','GF cafe / bakery':'cafe','GF cafe & bar':'cafe','GF vegan cafe':'cafe',
  'GF organic cafe':'cafe','GF wellness cafe/bar':'cafe','Vegan café':'cafe','Vegan cafe':'cafe',
  'vegan cafe':'cafe','Organic vegan cafe':'cafe','organic cafe':'cafe',
  'organic natural food':'cafe','Vegan / macrobiotic':'cafe','Vegan/GF café + roastery':'cafe',
  'rice-flour cafe':'cafe','Soy cafe':'cafe','Wa-cafe':'cafe','Onigiri café':'cafe',
  'rice-flour direct-sales / farm cafe':'cafe',

  // --- noodles ---
  'soba':'udon_soba','Soba':'udon_soba','Jūwari soba':'udon_soba',
  'Rice-flour udon':'udon_soba','GF teishoku / udon':'udon_soba','Ramen':'ramen',

  // --- curry family (Japanese + Indian both land on the one Curry chip) ---
  'spice curry':'curry','Spice curry':'curry','Japanese curry':'curry','Indian curry':'curry',
  'Vegan curry':'curry','Vegan Indian':'curry','Vegan South Indian':'curry',

  // --- western ---
  'Italian':'italian','Neapolitan pizza':'italian','pasta / cafe':'italian',

  // --- japanese ---
  'Okonomiyaki':'okonomiyaki','Kaiseki ryokan':'kaiseki','Ryokan kaiseki':'kaiseki',
  'hotel-fine-dining':'kaiseki','GF washoku / Nagoya-meshi':'shokudo','Fried chicken':'yoshoku',
};

let changed = 0, promoted = 0, unmapped = new Set();
const log = [];

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    const cur = r.cuisine_type;
    if (!cur) continue;
    if (CANON.has(cur)) { if (!['udon_soba','ramen','donburi','shokudo','katsu','tempura','kaiseki','sushi','yakitori','okonomiyaki','gyoza','unagi','curry','kissaten','yoshoku','obanzai','izakaya','tofu','shojin','sweets','other'].includes(cur)) promoted++; continue; }
    const next = MAP[cur];
    if (!next) { unmapped.add(cur); continue; }
    log.push(`${city}\t${cur}\t->\t${next}\t${r.name}`);
    r.cuisine_type = next;
    changed++; dirty = true;
  }
  if (dirty) writeCity(city, j);
}

fs.writeFileSync('data/_cuisine_normalize_log.tsv', log.join('\n'));
console.log(`remapped ${changed} records; ${promoted} already on promoted slugs`);
if (unmapped.size) { console.log('UNMAPPED (fix the table):'); [...unmapped].forEach(v => console.log('  ' + v)); process.exit(1); }
console.log('no unmapped values remain');
