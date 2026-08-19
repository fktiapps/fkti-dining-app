// Merge researched `ramen` deep-dive blocks into the city files.
//
// Validates against the vocabularies the app renders before writing — a block with
// an out-of-vocabulary value would display as blank or wrong, and the gf/vegan
// fields are safety claims, so they are checked hardest.
//
//   node scripts/merge-ramen.mjs [--dry]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const DRY = process.argv.includes('--dry');
const DIR = 'data/_ramen_verdicts';

const VOCAB = {
  // Vocabularies come from RAMEN_SCHEMA.md and the 347 blocks already in the data,
  // NOT from whatever a task brief happened to list. An earlier version of this file
  // omitted `niboshi` (28 prior uses) and `chiyu` (54) and rejected correct blocks.
  broth_base:     new Set(['tonkotsu','chicken','gyokai','niboshi','vegetable','beef','blend','other']),
  broth_texture:  new Set(['chintan','paitan','unknown']),
  tare:           new Set(['shoyu','shio','miso','other']),
  aroma_oil:      new Set(['chiyu','lard_seabura','se-abura','mayu','negi','chili','shrimp','none','other']),
  richness:       new Set(['assari','medium','kotteri']),
  sub_genre:      new Set(['ramen','tsukemen','tantanmen','shiru_nashi_tantanmen','niboshi','tori_paitan','jiro_kei','mazesoba_aburasoba','other']),
  confidence:     new Set(['high','medium','low']),
  gfStatus:       new Set(['rare-options','ask','no']),
  veganStatus:    new Set(['available','ask','no']),
  thickness:      new Set(['thin','medium','thick','unknown']),
  shape:          new Set(['straight','wavy','unknown']),
  hydration:      new Set(['low','medium','high','unknown']),
};

function problems(m, name) {
  const p = [];
  const arr = (k, set) => {
    const v = m[k];
    if (v == null) return;
    if (!Array.isArray(v)) return p.push(`${k} must be an array`);
    v.filter(x => !set.has(x)).forEach(x => p.push(`${k}: "${x}" not in vocabulary`));
  };
  const one = (k, set) => { if (m[k] != null && !set.has(m[k])) p.push(`${k}: "${m[k]}" not in vocabulary`); };

  arr('broth_base', VOCAB.broth_base);
  arr('tare', VOCAB.tare);
  arr('aroma_oil', VOCAB.aroma_oil);
  arr('sub_genre', VOCAB.sub_genre);
  one('broth_texture', VOCAB.broth_texture);
  one('richness', VOCAB.richness);
  one('confidence', VOCAB.confidence);

  if (m.noodles) {
    if (m.noodles.thickness && !VOCAB.thickness.has(m.noodles.thickness)) p.push(`noodles.thickness "${m.noodles.thickness}"`);
    if (m.noodles.shape && !VOCAB.shape.has(m.noodles.shape)) p.push(`noodles.shape "${m.noodles.shape}"`);
    if (m.noodles.hydration && !VOCAB.hydration.has(m.noodles.hydration)) p.push(`noodles.hydration "${m.noodles.hydration}"`);
  }

  // the safety fields
  if (!m.gf || !VOCAB.gfStatus.has(m.gf.status)) p.push(`gf.status "${m.gf?.status}" invalid`);
  if (!m.vegan || !VOCAB.veganStatus.has(m.vegan.status)) p.push(`vegan.status "${m.vegan?.status}" invalid`);
  if (m.gf?.status === 'rare-options' && !/noodle|麺|rice flour|米粉|gluten-?free|グルテンフリー/i.test(m.gf.note || ''))
    p.push('gf.status="rare-options" but the note does not describe the gluten-free noodle/tare evidence');
  if (!m.gf?.note) p.push('gf.note missing — a GF verdict with no reasoning is not usable');

  if (m.profile) for (const [k, v] of Object.entries(m.profile))
    if (typeof v !== 'number' || v < 1 || v > 5) p.push(`profile.${k} must be 1-5, got ${v}`);

  if (!Array.isArray(m.sources) || !m.sources.length) p.push('sources missing');
  return p;
}

if (!fs.existsSync(DIR)) { console.log(`no ${DIR} — nothing to merge`); process.exit(0); }

const verdicts = fs.readdirSync(DIR).filter(f => f.endsWith('.json'))
  .flatMap(f => JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8')));
const byId = new Map(verdicts.map(v => [v.id, v]));
console.log(`${verdicts.length} verdict(s) loaded\n`);

let merged = 0, skipped = 0, rejected = 0, missing = 0;
const bad = [];

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    const v = byId.get(r.id);
    if (!v) continue;
    byId.delete(r.id);

    if (v.skip) { skipped++; console.log(`  skip  ${city}/${r.name.split(' (')[0].slice(0, 36)} — ${v.reason}`); continue; }
    if (!v.ramen) { rejected++; bad.push(`${r.name}: no ramen block and no skip flag`); continue; }

    const errs = problems(v.ramen, r.name);
    if (errs.length) { rejected++; bad.push(`${city}/${r.name.split(' (')[0]}: ${errs.join('; ')}`); continue; }

    r.ramen = v.ramen;
    merged++; dirty = true;
    console.log(`  ok    ${city}/${(r.name.split(' (')[0]).slice(0, 34).padEnd(36)}gf=${v.ramen.gf.status.padEnd(13)}${(v.ramen.sub_genre || []).join(',')}`);
  }
  if (dirty && !DRY) writeCity(city, j);
}

for (const [, v] of byId) { missing++; bad.push(`${v.name}: no matching record`); }

console.log(`\nmerged ${merged}, skipped ${skipped}, rejected ${rejected}, unmatched ${missing}${DRY ? '  (dry run — nothing written)' : ''}`);
if (bad.length) { console.log('\nnot merged:'); bad.forEach(b => console.log('  ✖ ' + b)); process.exitCode = 1; }
