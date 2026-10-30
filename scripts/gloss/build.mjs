// Compile the hand-reviewed glossary (data/gloss/en.json) into one file per covered city,
// which the app fetches in English mode alongside the city: data/gloss/en-<city>.json,
// run → [furi, en]. Per city, because the whole glossary would be several MB.
//
// Source entry fields:
//   en    the English (null = no gloss)
//   name  a shop/person/place name: no furigana at all (a dictionary reading of a name is a
//         guess); en is the romaji the record itself gives, or null
//   nor   no furigana: the reviewer was not sure of the reading
//   r     a reviewed reading for the whole run, drawn as one ruby over it
//   furi  a reviewed [[surface, reading], …] when per-word placement matters
// Otherwise the reading comes from kuromoji (lib.mjs furiOf), names already left unread.
//
// A covered city (data/gloss/covered.json) must have every displayed run glossed; the build
// fails otherwise, and so does lint-data.mjs.
//
//   node scripts/gloss/build.mjs
import fs from 'node:fs';
import { cityFiles, eachRun, hiddenIds, furiOf, initTokenizer, GLOSS_SRC, COVERED, readJson } from './lib.mjs';

await initTokenizer();
const src = readJson(GLOSS_SRC, {});
const compiled = new Map(); // city|run → entry (readings can differ by city: lib CITY_READINGS)
const compile = (run, city) => {
  const key = `${city}|${run}`;
  if (!compiled.has(key)) {
    const e = src[run];
    const furi = e.name || e.nor ? [[run, '']] : e.r ? [[run, e.r]] : e.furi || furiOf(run, city).furi;
    compiled.set(key, [furi.every(([, r]) => !r) ? 0 : furi, e.en ?? 0]);
  }
  return compiled.get(key);
};

let failed = false;
for (const city of readJson(COVERED, [])) {
  const out = {}, missing = new Set();
  for (const f of cityFiles(city))
    eachRun(JSON.parse(fs.readFileSync(`data/${f}`, 'utf8')), run => {
      if (src[run]) out[run] = compile(run, city); else missing.add(run);
    }, hiddenIds(city));
  if (missing.size) {
    failed = true;
    console.error(`${city}: ${missing.size} runs not in ${GLOSS_SRC} — run scripts/gloss/extract.mjs ${city}`);
    continue;
  }
  const file = `data/gloss/en-${city}.json`;
  fs.writeFileSync(file, JSON.stringify(out));
  console.log(`${city}: ${Object.keys(out).length} runs → ${file} (${(fs.statSync(file).size / 1024).toFixed(0)} KB)`);
}
if (failed) process.exit(1);
