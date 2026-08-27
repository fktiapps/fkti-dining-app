// Collapse the vegan-gluten-trap banner in menu item `note` fields when it was
// prepended more than once — flag-vegan-gluten-traps.mjs wrote it unguarded
// before this fix, so re-running the pipeline over already-flagged items
// accumulated a copy per rebuild (same bug class as enforce-cited-claims.mjs /
// apply-owner-signoff.mjs, see dedupe-detail-banners.mjs). The write site is
// guarded now; this heals what already accumulated.
//
//   node scripts/dedupe-menu-note-banners.mjs [--apply]

import fs from 'node:fs';
import { CITIES } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');

// Matches one copy of the banner flag-vegan-gluten-traps.mjs generates:
//   ⚠ <why>. Vegan but NOT gluten-free.
//   ⚠ <why>. Vegan but gluten status must be confirmed.
const UNIT = /^⚠ [^.]+\.\s(?:Vegan but )?(?:NOT gluten-free|gluten status must be confirmed)\.\s/;

function collapse(note) {
  const m = UNIT.exec(note);
  if (!m) return { note, removed: 0 };
  const unit = m[0];
  let rest = note, count = 0;
  while (rest.startsWith(unit)) { rest = rest.slice(unit.length); count++; }
  if (count <= 1) return { note, removed: 0 };
  return { note: unit + rest, removed: count - 1 };
}

let touched = 0, saved = 0;
const worst = [];

for (const city of CITIES) {
  const file = `data/${city}_menus.json`;
  if (!fs.existsSync(file)) continue;
  const menus = JSON.parse(fs.readFileSync(file, 'utf8'));
  let dirty = false;
  for (const [id, entry] of Object.entries(menus)) {
    for (const it of entry.items || []) {
      const before = String(it.note || '');
      if (!before) continue;
      const { note: after, removed } = collapse(before);
      if (!removed) continue;
      worst.push({ city, id, ja: it.ja, was: before.length, now: after.length, removed });
      if (APPLY) it.note = after;
      touched++; saved += before.length - after.length; dirty = true;
    }
  }
  if (dirty && APPLY) fs.writeFileSync(file, JSON.stringify(menus, null, 1));
}

worst.sort((a, b) => (b.was - b.now) - (a.was - a.now));
console.log(`${touched} item note(s) carried duplicated banners; ${(saved / 1024).toFixed(1)}KB of repeated text removed\n`);
for (const w of worst.slice(0, 15))
  console.log(`  ${w.city}/${w.id.padEnd(30)} ${String(w.ja).slice(0, 20).padEnd(22)} ${String(w.was).padStart(6)} -> ${String(w.now).padStart(5)} chars (${w.removed} repeated copy/copies)`);
if (worst.length > 15) console.log(`  … ${worst.length - 15} more`);
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
