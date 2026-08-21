// Soy-sauce guidance that points a celiac at the wrong bottle.
//
// A Himeji record listed 丸大豆醤油 as an EXAMPLE of gluten-free soy sauce. It is the
// opposite: 丸大豆 ("whole soybean") describes the soy, not the wheat, and whole-soybean
// koikuchi is brewed with roughly equal parts wheat. A celiac who read that record and
// went looking for the 丸大豆 bottle would be seeking out the one that hurts them.
//
// This is worth its own check because the failure is INVERTED rather than merely
// absent — worse than saying nothing, and invisible to every other pass here, which
// ask whether a claim is sourced rather than whether it is true.
//
// What is actually gluten-free in a Japanese kitchen:
//   小麦不使用醤油 / グルテンフリー醤油 — says so outright, the only reliable wording
//   たまり醤油 — usually wheat-free, but NOT always; the label has to be read
// What is not, however it is described:
//   丸大豆醤油, 濃口, 薄口, 再仕込, 生醤油 — all wheat-brewed
//   白醤油 — the WORST case, mostly wheat by design
//
//   node scripts/flag-soy-sauce-errors.mjs
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];
// A wheat-brewed soy sauce named within a sentence that calls it safe.
const WHEAT_SOY = /(丸大豆醤油|丸大豆しょうゆ|濃口醤油|こいくち醤油|薄口醤油|うすくち醤油|再仕込醤油|生醤油|白醤油|しろ醤油)/;
const CALLED_SAFE = /(gluten[- ]?free|グルテンフリー|小麦不使用|wheat[- ]free|安全|safe|使用可|問題ありません|OK)/i;
// ...but not when the sentence is warning about it, which is the normal, correct usage.
const WARNING = /(contains? wheat|wheat[- ]containing|wheat[- ]based|wheat[- ]fermented|wheat[- ]brewed|小麦を含|小麦が含|小麦由来|not gluten|ではありません|避け|注意|caution|beware|unless|except|but )/i;

const hits = [];
for (const city of CITIES)
  for (const r of readCity(city).places) {
    if (r.hidden) continue;
    const texts = [['gf_detail', r.gf_detail], ['vegan_detail', r.vegan_detail]];
    for (const f of EV)
      for (const e of (r.safety?.[f]) || [])
        texts.push([f, typeof e === 'string' ? e : String(e?.text || '')]);
    for (const [field, text] of texts) {
      if (!text) continue;
      // sentence-level, so a warning elsewhere in a long field does not mask an error
      for (const sentence of String(text).split(/(?<=[。.!?])\s*/)) {
        const m = sentence.match(WHEAT_SOY);
        if (!m || !CALLED_SAFE.test(sentence) || WARNING.test(sentence)) continue;
        hits.push({ city, id: r.id, name: r.name, field, named: m[1],
                    sentence: sentence.trim().slice(0, 200) });
      }
    }
  }

console.log(`${hits.length} sentence(s) naming a wheat-brewed soy sauce as if it were safe\n`);
for (const h of hits)
  console.log(`  ${h.city}/${String(h.name).slice(0, 28).padEnd(30)} [${h.field}] 「${h.named}」\n      ${h.sentence}\n`);
fs.writeFileSync('data/_soy_sauce_errors.json', JSON.stringify(hits, null, 1));
