// Greg, 2026-11-02: "Open late should include after 22:00." A record whose stored hours close after
// 22:00 (including past midnight) is open_late; one closing at or before 22:00 is not. Records with no
// stored hours are left as they are. Sweep integration runs this after every batch.
import { readCity, writeCity, CITIES } from './lib-city.mjs';
const toMin = t => { const [h, m] = t.split(':').map(Number); return h * 60 + m; };
let changed = 0;
for (const city of CITIES) {
  const d = readCity(city); let dirty = false;
  for (const p of d.places) {
    if (!p.flags) continue;
    const spans = Object.values(p.hours || {}).flat().filter(s => Array.isArray(s) && s.length === 2);
    if (!spans.length) continue;
    const latest = Math.max(...spans.map(([o, c]) => { let v = toMin(c); if (v <= toMin(o)) v += 1440; return v; }));
    const want = latest > 22 * 60;
    if (!!p.flags.open_late !== want) { p.flags.open_late = want; changed++; dirty = true; }
  }
  if (dirty) writeCity(city, d);
}
console.log(`open_late: ${changed} changed`);
