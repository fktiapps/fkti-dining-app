// Greg 2026-11-06: a sourced mention that a past owner or founder died is included, dated and attributed, as a
// business-succession fact. 鳳城: the February 2026 review (owner's own account) says the founder died about two years
// earlier and the son took over; osw1-37 had left the death out.
import { readCity, writeCity } from './lib-city.mjs';
const c = readCity('kyoto');
const p = c.places.find(p => p.id === 'kyoto_hojo_chinese_oike');
if (!p) throw new Error('not found');
let n = 0;
const walk = o => { for (const k in o) { const v = o[k];
  if (typeof v === 'string') {
    let w = v.replace('learned from the owner that the son has taken over', 'learned from the owner that the founder died about two years earlier and the son has taken over')
             .replace('息子が継いだ', '創業者は約2年前に亡くなり息子が継いだ');
    if (w !== v) { o[k] = w; n++; }
  } else if (v && typeof v === 'object') walk(v); } };
walk(p);
if (n < 2) throw new Error('expected 2 edits, got ' + n);
writeCity('kyoto', c);
console.log('edited', n);
