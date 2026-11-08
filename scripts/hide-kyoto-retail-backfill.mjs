// 2026-11-08: Greg's retail ruling ("Include particularly historic family owned shops, as well as GF and vegan options")
// applied to records already listed; Greg chose "Hide the 49, keep the 17". From osw9's audit
// (docs/kyoto-retail-audit-2026-11-08.md): verdict 'c' (neither historic+family nor sourced GF/vegan), take-home only.
// Kept although 'c': shops with an eat-on-the-spot space (seats, standing counter, stall, bench) — they are places to eat,
// not take-home retail: かぎりなき福, 鱧秀, グリーン ファーム, GION GOZU, スイートファウンテン, !?, 田中鶏卵, 山庄, タコハイ,
// びーんず亭, DRINK DRANK, 新田ベーカリー. The 'c (historic, no succession source)' group is kept per Greg.
import fs from 'fs';
import { readCity, writeCity } from './lib-city.mjs';
const IDS = JSON.parse(fs.readFileSync(new URL('./hide-kyoto-retail-backfill.ids.json', import.meta.url), 'utf8'));
const c = readCity('kyoto');
let n = 0;
for (const id of IDS) {
  const p = c.places.find(p => p.id === id);
  if (!p) throw new Error('not found: ' + id);
  if (!p.hidden) { p.hidden = 'retail'; n++; }
}
writeCity('kyoto', c);
console.log('hidden', n, 'of', IDS.length);
