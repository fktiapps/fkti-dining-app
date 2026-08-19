// Collapse duplicate Tokyo records created by overlapping harvest passes
// (the 3-mile sweep re-added places the original 1-mile circles already had,
// under ids suffixed _2 / _3).
//
// Merge rather than pick: keep the base record — it came from the careful
// 1-mile pass and has the trustworthy coordinates — and fill any field it
// leaves empty from its duplicates. Nothing researched is thrown away.
import fs from 'node:fs';
import { readCity, writeCity } from './lib-city.mjs';

const filled = v => v !== null && v !== undefined && v !== '' &&
  !(Array.isArray(v) && !v.length) &&
  !(typeof v === 'object' && !Array.isArray(v) && !Object.keys(v).length);

function fillFrom(target, donor) {
  let n = 0;
  for (const [k, v] of Object.entries(donor)) {
    if (k === 'id') continue;
    if (!filled(target[k]) && filled(v)) { target[k] = v; n++; continue; }
    if (v && typeof v === 'object' && !Array.isArray(v) &&
        target[k] && typeof target[k] === 'object' && !Array.isArray(target[k])) {
      n += fillFrom(target[k], v);
    }
  }
  return n;
}

const j = readCity('tokyo');
const groups = new Map();
for (const r of j.places) {
  const k = String(r.name).toLowerCase().replace(/\s+/g, '');
  if (!groups.has(k)) groups.set(k, []);
  groups.get(k).push(r);
}

const drop = new Set();
const survivorOf = new Map();   // droppedId -> survivingId, for re-keying menus
let merged = 0, fields = 0;
for (const [, rs] of groups) {
  if (rs.length < 2) continue;
  // base = precise geo first, then shortest id (the un-suffixed original)
  rs.sort((a, b) => (!!a.loc_approx - !!b.loc_approx) || (a.id.length - b.id.length));
  const [keep, ...rest] = rs;
  for (const d of rest) { fields += fillFrom(keep, d); drop.add(d.id); survivorOf.set(d.id, keep.id); }
  merged++;
  console.log(`merge ${rs.length} -> ${keep.id}   (${keep.name.slice(0, 40)})`);
}

const before = j.places.length;
j.places = j.places.filter(r => !drop.has(r.id));
writeCity('tokyo', j);
console.log(`\n${merged} groups merged, ${fields} empty fields backfilled, tokyo ${before} -> ${j.places.length}`);

// Re-key menus to the survivor — the menu belongs to the shop, not to whichever
// duplicate record happened to hold it.
const mp = 'data/tokyo_menus.json';
const menus = JSON.parse(fs.readFileSync(mp, 'utf8'));
let moved = 0, redundant = 0;
for (const [dropId, keepId] of survivorOf) {
  if (!menus[dropId]) continue;
  if (!menus[keepId]) { menus[keepId] = menus[dropId]; moved++; } else redundant++;
  delete menus[dropId];
}
if (moved || redundant) { fs.writeFileSync(mp, JSON.stringify(menus, null, 1)); console.log(`menus re-keyed ${moved}, redundant dropped ${redundant}`); }
else console.log('menus file references no dropped ids');
