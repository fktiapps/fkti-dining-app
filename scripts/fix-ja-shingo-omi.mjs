// 2026-11-05 (found by osw8): kyoto_steak_house_shingo's JA text wrote 近江牛, but its only sources are English
// reviews ("Omi beef"). A place known only from English sources stays Latin in JA text.
import fs from 'node:fs';
const f = 'data/kyoto.ja.json';
const j = JSON.parse(fs.readFileSync(f, 'utf8'));
const r = j['kyoto_steak_house_shingo'];
let n = 0;
for (const k of ['cuisine', 'notes']) if (typeof r[k] === 'string' && r[k].includes('近江牛')) { r[k] = r[k].replaceAll('近江牛', 'Omi beef'); n++; }
fs.writeFileSync(f, JSON.stringify(j, null, 1) + '\n');
console.log('fields fixed:', n);
