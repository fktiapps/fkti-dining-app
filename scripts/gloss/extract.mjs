// List every Japanese run the ENGLISH app displays for the given cities that the glossary
// (data/gloss/en.json) does not cover yet, with dictionary readings and an example of use.
//
//   node scripts/gloss/extract.mjs himeji [more cities…]
//   → data/gloss/_worklist.json (full) and data/gloss/_worklist.tsv (one line per run, for review)
import fs from 'node:fs';
import { cityFiles, eachRun, furiOf, initTokenizer, GLOSS_SRC, readJson } from './lib.mjs';

const cities = process.argv.slice(2);
if (!cities.length) { console.error('usage: extract.mjs <city> [city…]'); process.exit(1); }

const seen = new Map(); // run → { n, ex, whole, fields }
for (const city of cities) for (const f of cityFiles(city))
  eachRun(JSON.parse(fs.readFileSync(`data/${f}`, 'utf8')), (r, v, p, isWhole) => {
    const e = seen.get(r) || { n: 0, ex: [], whole: false, fields: new Set() };
    e.n++; e.fields.add(p.replace(/^[a-z0-9_]+\.items/, '<shop>.items'));
    e.whole ||= isWhole;
    if (e.ex.length < 2 && !e.ex.includes(v)) e.ex.push(v.length > 220 ? v.slice(0, 220) + '…' : v);
    seen.set(r, e);
  });

await initTokenizer();
const have = readJson(GLOSS_SRC, {});
const work = [];
for (const [run, e] of [...seen.entries()].sort((a, b) => b[1].n - a[1].n)) {
  if (have[run]) continue;
  const { furi, needs } = furiOf(run);
  work.push({ run, n: e.n, whole: e.whole, furi, needs_reading: needs, fields: [...e.fields].slice(0, 4), ex: e.ex });
}
fs.mkdirSync('data/gloss', { recursive: true });
fs.writeFileSync('data/gloss/_worklist.json', JSON.stringify(work, null, 1));
const show = f => f.map(([t, r]) => r ? `${t}(${r})` : t).join('');
fs.writeFileSync('data/gloss/_worklist.tsv', work.map((w, i) => [i, w.n, w.whole ? 'W' : '', w.run, show(w.furi),
  w.needs_reading.join(','), (w.ex[0] || '').replace(/\s+/g, ' ').slice(0, 160)].join('\t')).join('\n'));
console.log(`${seen.size} runs, ${work.length} not yet glossed → data/gloss/_worklist.tsv`);
console.log(`  whole-string (need a full translation): ${work.filter(w => w.whole).length}`);
console.log(`  with a name/unknown token left unread:  ${work.filter(w => w.needs_reading.length).length}`);
