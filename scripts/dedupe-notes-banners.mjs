// Collapse annotation blocks that apply-audit-corrections.mjs prepended to `notes`
// with no guard, before this run added prependOnce() at its six write sites.
//
// Same bug class as dedupe-detail-banners.mjs (see that file's header) and
// dedupe-menu-note-banners.mjs — a script that runs every rebuild kept prepending
// its bracketed note unconditionally, so records it touched (Senza X, Creperiz,
// Vegan Fruits Cafe Tamaru, and anything hit by the 5w-kyoto/BAD_SITES/HIJACKED
// loops) accumulated a copy per pass. kyo_senza_x reached 108 copies (28.8KB, of
// which ~27.5KB was repeat) before this run's own rebuild caught it.
//
// Same fix shape as dedupe-detail-banners.mjs: walk the LEADING bracketed blocks,
// keep the first occurrence of each distinct one in order, drop exact repeats,
// leave the remaining prose untouched.
//
//   node scripts/dedupe-notes-banners.mjs [--apply]

import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const FIELDS = ['notes'];

const BLOCK = /^(\[[^\]]*\][^[]*)/;

function collapse(text) {
  let rest = String(text || ''), seen = new Set(), kept = [], m;
  while ((m = BLOCK.exec(rest))) {
    const block = m[1];
    const key = block.trim();
    if (!seen.has(key)) { seen.add(key); kept.push(block); }
    rest = rest.slice(block.length);
  }
  return (kept.join('') + rest).replace(/\s+/g, ' ').trim();
}

let touched = 0, saved = 0;
const worst = [];

for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    for (const f of FIELDS) {
      const before = String(r[f] || '');
      if (!before) continue;
      const after = collapse(before);
      if (after === before) continue;
      const copies = (before.match(/\[/g) || []).length - (after.match(/\[/g) || []).length;
      worst.push({ city, name: String(r.name).slice(0, 30), field: f,
                   was: before.length, now: after.length, removed: copies });
      if (APPLY) r[f] = after;
      touched++; saved += before.length - after.length; dirty = true;
    }
  }
  if (dirty && APPLY) writeCity(city, j);
}

worst.sort((a, b) => (b.was - b.now) - (a.was - a.now));
console.log(`${touched} field(s) carried duplicated annotation blocks; ${(saved / 1024).toFixed(0)}KB of repeated text removed\n`);
for (const w of worst.slice(0, 10))
  console.log(`  ${w.city}/${w.name.padEnd(32)} ${w.field.padEnd(13)} ${String(w.was).padStart(6)} -> ${String(w.now).padStart(5)} chars (${w.removed} repeated block(s))`);
if (worst.length > 10) console.log(`  … ${worst.length - 10} more`);
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
