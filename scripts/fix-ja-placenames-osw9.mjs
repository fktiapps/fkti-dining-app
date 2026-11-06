// 2026-11-05 (flagged by osw9): place names known only from English reviews were written in kanji in JA text in
// osw9-19/20/23. Greg's rule (b216): such places stay Latin in JA. Fix them in kyoto.ja.json and in the JA
// sources summaries in kyoto.json.
import fs from 'node:fs';
import { readCity, writeCity } from './lib-city.mjs';
const fixes = {
  kyoto_yasai_to_sakana_en: [['淡路島', 'Awaji'], ['熊本', 'Kumamoto'], ['青森', 'Aomori']],
  kyoto_gion_daiki: [['舞鶴', 'Maizuru']],
  kyoto_gion_danbata: [['愛媛', 'Ehime']],
};
let n = 0;
const jf = 'data/kyoto.ja.json'; const j = JSON.parse(fs.readFileSync(jf, 'utf8'));
for (const [id, pairs] of Object.entries(fixes)) for (const [k, v] of Object.entries(j[id] || {}))
  if (typeof v === 'string') { let s = v; for (const [a, b] of pairs) s = s.replaceAll(a, b); if (s !== v) { j[id][k] = s; n++; } }
fs.writeFileSync(jf, JSON.stringify(j, null, 1) + '\n');
const c = readCity('kyoto');
for (const [id, pairs] of Object.entries(fixes)) {
  const p = c.places.find(p => p.id === id); const cb = p?.chef_bio;
  if (cb && typeof cb.japanese_sources_summary === 'string') { let s = cb.japanese_sources_summary; for (const [a, b] of pairs) s = s.replaceAll(a, b); if (s !== cb.japanese_sources_summary) { cb.japanese_sources_summary = s; n++; } }
}
writeCity('kyoto', c);
console.log('fields fixed:', n);
