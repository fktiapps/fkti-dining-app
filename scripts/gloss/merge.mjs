// Merge reviewed chunk files (data/gloss/_chunks/*.json, written during review) into the
// glossary source data/gloss/en.json. A key already in en.json is replaced by the chunk's.
// Each chunk is deleted once merged: en.json is the record from then on, and a stale chunk
// merged again later would overwrite edits made to en.json since.
//   node scripts/gloss/merge.mjs
import fs from 'node:fs';
import { GLOSS_SRC, readJson } from './lib.mjs';

const dir = 'data/gloss/_chunks';
const src = readJson(GLOSS_SRC, {});
let n = 0;
const merged = [];
for (const f of fs.existsSync(dir) ? fs.readdirSync(dir).filter(f => f.endsWith('.json')).sort() : []) {
  const chunk = JSON.parse(fs.readFileSync(`${dir}/${f}`, 'utf8'));
  for (const [k, v] of Object.entries(chunk)) { src[k] = v; n++; }
  merged.push(`${dir}/${f}`);
}
const keys = Object.keys(src).sort();
fs.writeFileSync(GLOSS_SRC, '{\n' + keys.map(k => ` ${JSON.stringify(k)}: ${JSON.stringify(src[k])}`).join(',\n') + '\n}\n');
for (const f of merged) fs.unlinkSync(f);
console.log(`merged ${n} entries → ${GLOSS_SRC} (${keys.length} total)`);
