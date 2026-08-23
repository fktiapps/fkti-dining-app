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
  // added by the Tokyo deep-enrich pass
  'sukiyaki',
]);

// explicit, auditable map. Every non-canon value observed in the data gets a home.
const MAP = {
  // --- slugs that arrived with the 2026-08-23 verification sweep ---
  // 割烹 is a chef's counter serving a seasonal course; that is kaiseki as a traveller
  // meets it, and its own chip would split the same restaurants across two filters.
  'kappo':'kaiseki',
  // 串揚げ is deep-fried skewers — the same wheat-batter fryer as a katsu counter, which
  // is the one thing about the shop a celiac has to see before anything else.
  'kushiage':'katsu',
  // an agent coinage for a chicken specialist; yakitori is the chip a traveller scans for.
  'torimeat':'yakitori',
  // 郷土料理 — regional home cooking, which is what shokudo already means here.
  'kyodo-ryori':'shokudo',
  'indian':'curry',
  // "unknown" is not a cuisine, it is a missing value, and it belongs where missing
  // values go rather than becoming a chip nobody can use.
  'unknown':'other',

  // --- slugs the Tokyo deep-enrich agents coined (2026-08-20) ---
  // 定食屋 IS a shokudo; the two words name the same kind of shop, so this folds
  // rather than adding a chip that would split the same restaurants across two
  // filters. トンテキ is a pork cutlet in gravy — a yoshoku dish, not a category.
  'teishoku':'shokudo', 'tonteki':'yoshoku', 'tonkatsu':'katsu',
  // Sukiyaki and shabu-shabu earn their own chip rather than folding into
  // chanko: a beef-at-the-table restaurant is a different evening from a
  // sumo hotpot, and five of these were sitting in 'other', which tells a
  // traveller nothing.
  'shabu_shabu':'sukiyaki', 'shabushabu':'sukiyaki', 'sukiyaki_shabu':'sukiyaki',
  'nabe':'sukiyaki', 'hotpot':'sukiyaki',
  // A matcha stand is a cafe. Splitting it off would scatter the same shops across
  // two chips without telling a traveller anything they cannot read in the name.
  'matcha_cafe':'cafe', 'matcha':'cafe', 'teahouse':'cafe', 'coffee':'cafe',

  // From the Tokyo enrich shards. Folded into existing chips rather than given new
  // ones: a filter row is only useful while a traveller can scan it, and splitting
  // tsukemen from ramen or udon from udon_soba would divide the same shops across
  // two chips without telling anyone anything they cannot read in the shop's name.
  'tsukemen':'ramen', 'tantanmen':'ramen', 'chinese':'ramen', 'mazesoba':'ramen',
  'udon':'udon_soba', 'kaisendon':'donburi', 'monjayaki':'okonomiyaki',
  'anago':'unagi',            // conger rather than freshwater eel, but the same counter
  'tamagoyaki':'other', 'israeli':'other',

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
// The first pass FAILS on an unknown slug, because the filter vocabulary is curated
// and every value should get a deliberate home. The second pass (after the merges)
// runs --lenient: research agents coin new words constantly — teishoku, tonteki,
// tonkatsu, sukiyaki, matcha_cafe all arrived this way — and a rebuild that wedges
// on one of them stops thirty agents' work from landing. Lenient falls back to
// 'other', which is honest, and shouts the list so the word gets curated properly
// on the next pass rather than silently becoming permanent.
if (unmapped.size) {
  const lenient = process.argv.includes('--lenient');
  console.log(lenient ? 'UNMAPPED — parked in "other", add them to the table:'
                      : 'UNMAPPED (fix the table):');
  [...unmapped].forEach(v => console.log('  ' + v));
  if (!lenient) process.exit(1);
  for (const c of CITIES) {
    const j = readCity(c);
    let n = 0;
    for (const r of j.places) if (unmapped.has(r.cuisine_type)) { r.cuisine_type = 'other'; n++; }
    if (n) { writeCity(c, j); console.log(`  ${c}: ${n} record(s) -> other`); }
  }
}
console.log('no unmapped values remain');
