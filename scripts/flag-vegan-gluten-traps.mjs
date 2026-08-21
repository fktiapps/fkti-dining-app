// Menu items made of wheat gluten that do not say so.
//
// A verification agent found 車麩かつサンド listed under a shop's *Vegan* lunch sets.
// 車麩 is seitan — pure wheat gluten, the single most concentrated source there is.
// It is perfectly vegan, which is exactly the problem: someone reading the vegan
// list for safety reasons meets the most dangerous item in the shop.
//
// This app serves people who are BOTH celiac and vegan, so the two layers are read
// together and a dish that is safe on one and lethal on the other has to say so.
// Any item marked vegan whose name contains a gluten protein and is not already
// flagged gf:"no" is a trap.
//
//   node scripts/flag-vegan-gluten-traps.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');

// Vegan proteins that ARE gluten, plus the wheat staples that hide in vegan menus.
// Two grades, because they deserve different answers. 麩 and seitan ARE wheat gluten
// — there is nothing to check, the item is not gluten-free and the flag should say
// so. Soy meat is different: most Japanese 大豆ミート is extruded with wheat gluten as
// a binder, but gluten-free brands exist, so the honest flag is "ask", not "no".
// Marking those "no" would be as wrong in the other direction, and this app does not
// get to be careless in either.
const IS_GLUTEN = [
  ['車麩',   'kurumafu — seitan, pure wheat gluten'],
  ['生麩',   'namafu — wheat gluten'],
  ['焼き麩', 'yakifu — wheat gluten'],
  ['お麩',   'fu — wheat gluten'],
  ['グルテンミート', 'gluten meat — wheat gluten'],
  ['セイタン', 'seitan — wheat gluten'],
  ['seitan', 'seitan — wheat gluten'],
  ['麸',     'fu — wheat gluten'],
];
const MAY_BE_GLUTEN = [
  ['大豆ミート', 'soy meat — usually extruded with wheat gluten as a binder; ask which brand'],
  ['ソイミート', 'soy meat — usually extruded with wheat gluten as a binder; ask which brand'],
  ['soy meat',  'soy meat — usually extruded with wheat gluten as a binder; ask which brand'],
];
// 「麩」 alone is too greedy: 豆腐 contains it as a component of nothing, but 麩菓子,
// 麩まんじゅう and plain 麩 are all wheat. Match the standalone character only when
// it is not part of 豆腐.
const BARE_FU = /(?<!豆)麩/;

const hits = [];
for (const city of CITIES) {
  const menus = JSON.parse(fs.readFileSync(`data/${city}_menus.json`, 'utf8'));
  const names = new Map(readCity(city).places.map(p => [p.id, p.name]));
  for (const [id, entry] of Object.entries(menus)) {
    for (const it of entry.items || []) {
      if (it.vegan !== 'vegan') continue;
      if (it.gf === 'no') continue;                 // already says it plainly
      const label = `${it.ja || ''} ${it.en || ''} ${it.romaji || ''}`;
      let why = null, grade = null;
      for (const [needle, reason] of IS_GLUTEN)
        if (label.toLowerCase().includes(needle.toLowerCase())) { why = reason; grade = 'no'; break; }
      if (!why) for (const [needle, reason] of MAY_BE_GLUTEN)
        if (label.toLowerCase().includes(needle.toLowerCase())) { why = reason; grade = 'ask'; break; }
      if (!why && BARE_FU.test(label)) { why = 'fu — wheat gluten'; grade = 'no'; }
      if (!why) continue;
      const was = it.gf || '(unset)';
      // Only ever move a flag toward caution. An item already marked "no" stays "no".
      if (grade === 'ask' && was === 'no') continue;
      hits.push({ city, id, shop: names.get(id) || id, ja: it.ja, en: it.en,
                  was, becomes: grade, why, claimed_safe: was === 'gf' });
      if (APPLY) {
        it.gf = grade;
        const veganLine = it.vegan === 'vegan' ? 'Vegan but ' : '';
        it.note = `⚠ ${why}. ${veganLine}${grade === 'no' ? 'NOT gluten-free' : 'gluten status must be confirmed'}. ` + (it.note || '');
      }
    }
  }
  if (APPLY) fs.writeFileSync(`data/${city}_menus.json`, JSON.stringify(menus, null, 1));
}

console.log(`${hits.length} vegan menu item(s) made of gluten\n`);
const alarming = hits.filter(h => h.claimed_safe);
if (alarming.length) {
  console.log(`${alarming.length} of them were flagged gf:"gf" — telling a celiac they are safe:
`);
  for (const h of alarming) console.log(`  ! ${h.city}/${h.shop.slice(0, 24)}  ${h.ja}
      ${h.why}`);
  console.log("");
}
for (const h of hits)
  console.log(`  ${h.city}/${String(h.shop).slice(0, 24).padEnd(26)} ${String(h.was).padEnd(8)}-> ${String(h.becomes).padEnd(4)} ${String(h.ja).slice(0, 28)}`);
fs.writeFileSync('data/_vegan_gluten_traps.json', JSON.stringify(hits, null, 1));
if (!APPLY && hits.length) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
