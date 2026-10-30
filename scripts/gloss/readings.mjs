// Distinct word readings the build will show for <city> that no earlier (reviewed) city shows.
//   node scripts/gloss/readings.mjs <city> <already-reviewed city,…>
import fs from 'node:fs';
import { pathToFileURL } from 'node:url';
const lib = await import(pathToFileURL('scripts/gloss/lib.mjs').href);
const [city, prev = ''] = process.argv.slice(2);
await lib.initTokenizer();
const src = lib.readJson(lib.GLOSS_SRC, {});
const pairs = c => { const m = new Map(); for (const f of lib.cityFiles(c)) lib.eachRun(JSON.parse(fs.readFileSync(`data/${f}`, 'utf8')), run => {
  const e = src[run]; if (!e || e.name || e.nor || e.r || e.furi) return;
  for (const [s, r] of lib.furiOf(run, c).furi) if (r) { const k = `${s}(${r})`; if (!m.has(k)) m.set(k, run); } }, lib.hiddenIds(c)); return m; };
const seen = new Set(); for (const c of prev.split(',').filter(Boolean)) for (const k of pairs(c).keys()) seen.add(k);
const out = [...pairs(city)].filter(([k]) => !seen.has(k));
console.log(out.length + ' new readings');
console.log(out.map(([k, run]) => k + '  ← ' + run.slice(0, 40)).join('\n'));
