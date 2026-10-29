// Turn {index: en | {en, …}} into a glossary chunk keyed by the exact Japanese text.
// Indexes are into the worklist as printed by show.mjs: kind 'w' = whole strings, 'r' = runs.
//   node scripts/gloss/chunk.mjs <w|r> <map.json> <chunk name>   (w = whole strings, r = runs)
import fs from 'node:fs';
const [kind, mapFile, name] = process.argv.slice(2);
const list = JSON.parse(fs.readFileSync('data/gloss/_worklist.json', 'utf8')).filter(x => kind === 'w' ? x.whole : !x.whole);
const map = JSON.parse(fs.readFileSync(mapFile, 'utf8'));
const out = {};
for (const [i, v] of Object.entries(map)) {
  const w = list[+i];
  if (!w) throw new Error('no worklist item ' + i);
  out[w.run] = typeof v === 'string' ? { en: v } : v;
}
fs.mkdirSync('data/gloss/_chunks', { recursive: true });
fs.writeFileSync(`data/gloss/_chunks/${name}.json`, JSON.stringify(out, null, 1));
console.log(`${Object.keys(out).length} entries → data/gloss/_chunks/${name}.json`);
