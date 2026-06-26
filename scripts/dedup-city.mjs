// Smarter same-shop dedup for a city file: merges entries that are the same
// restaurant under different name forms. Two entries are duplicates if:
//   (a) their English names (the "(...)" parenthetical) match, OR
//   (b) they are within ~130m AND their Japanese "core" (genre prefixes +
//       branch suffixes stripped) matches or one contains the other.
// Keeps the entry with the stronger bio; reports every merge.
// Usage: node scripts/dedup-city.mjs data/<city>.json
import fs from 'fs';

const path = process.argv[2];
if (!path) throw new Error('usage: node dedup-city.mjs data/<city>.json');
const d = JSON.parse(fs.readFileSync(path, 'utf8'));
const ps = d.places;

const hav = (a, b, c, e) => { const R = 6371000, t = Math.PI / 180; const x = Math.sin((c - a) * t / 2) ** 2 + Math.cos(a * t) * Math.cos(c * t) * Math.sin((e - b) * t / 2) ** 2; return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)); };

const PREFIX = [/^金沢近江町市場/, /^金澤?おでん/, /^純喫茶/, /^地魚[・･]地酒/, /^甘味カフェ/, /^自家焙煎/, /^旬彩和食/, /^季節料理[・･]おでん/, /^お食事処/, /^手打蕎麦/, /^手打ちそば/, /^organic\s*&\s*natural\s*/i, /^restaurant\s+/i, /^cafe\s+/i, /^グリル/];
const SUFFIX = [/本店$/, /近江町市場店$/, /近江町店$/, /武家屋敷前店$/, /金沢店$/, /奈良店$/, /店$/];
function jpCore(name) {
  let s = name.replace(/\s*[（(][^）)]*[）)]\s*$/, '');      // drop trailing (English)
  s = s.replace(/[（(][^）)]*[）)]/g, '').trim();            // drop any inner (JP) paren
  let changed = true;
  while (changed) { changed = false; for (const re of PREFIX) if (re.test(s)) { s = s.replace(re, '').trim(); changed = true; } for (const re of SUFFIX) if (re.test(s)) { s = s.replace(re, '').trim(); changed = true; } }
  return s.replace(/[\s　・･,.。、]/g, '').toLowerCase();
}
function enName(name) { const m = [...name.matchAll(/[（(]([^）)]*)[）)]/g)]; const last = m.length ? m[m.length - 1][1] : ''; return /[a-z]/i.test(last) ? last.replace(/[^a-z0-9]/gi, '').toLowerCase() : ''; }
const bioRank = { high: 3, medium: 2, low: 1, none: 0 };
function score(p) { const cb = p.chef_bio || {}; return (bioRank[cb.confidence] || 0) * 1000 + (cb.background ? cb.background.length : 0); }

const meta = ps.map(p => ({ p, core: jpCore(p.name), en: enName(p.name) }));
const removed = new Set();
const merges = [];
for (let i = 0; i < meta.length; i++) {
  if (removed.has(i)) continue;
  for (let j = i + 1; j < meta.length; j++) {
    if (removed.has(j)) continue;
    const A = meta[i], B = meta[j];
    const enMatch = A.en && B.en && A.en === B.en;
    const dist = hav(A.p.lat, A.p.lng, B.p.lat, B.p.lng);
    const coreMatch = A.core && B.core && A.core.length >= 2 && B.core.length >= 2 && (A.core === B.core || A.core.includes(B.core) || B.core.includes(A.core));
    const dup = enMatch || (dist <= 130 && coreMatch);
    if (!dup) continue;
    // keep the higher-scoring entry
    const keepI = score(A.p) >= score(B.p);
    const dropIdx = keepI ? j : i, keepIdx = keepI ? i : j;
    removed.add(dropIdx);
    merges.push(`DROP ${meta[dropIdx].p.name.slice(0, 34)}  →keep→  ${meta[keepIdx].p.name.slice(0, 34)}  [${enMatch ? 'en-name' : Math.round(dist) + 'm+core'}]`);
    if (!keepI) break; // i was dropped; stop comparing it
  }
}

d.places = ps.filter((_, i) => !removed.has(i));
function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
fs.writeFileSync(path, ser(d));
console.log('merges (' + merges.length + '):'); merges.forEach(m => console.log('  ' + m));
console.log('places: ' + ps.length + ' → ' + d.places.length);
