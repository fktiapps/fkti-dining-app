// Delete records the existence sweep could not find at all.
//
// Greg's call, 2026-08-23. These are not shops we are unsure about — each carries an
// existence check that names the searches actually run and what each returned ("Tabelog
// nationwide free-word search, three spellings … HTTP 200 with 20 results, none named
// 「つけ麺 大」"). Hiding them was the cautious interim; a hidden record still costs
// review time, still shows up in every audit, and still has to be reasoned about.
//
// ONLY status "not_found". The other hidden reasons are deliberately left alone:
//   unresolved / self_admitted_unverified  the sweep ran out of road, not out of shop
//   closed_permanently                     it existed; the closure is worth keeping
//   mislocated                             a real shop in the wrong city
//
// The records are written to a tombstone first. This project's whole claim is that
// every assertion can be traced, and "we deleted 142 records, trust us" is not that.
//
//   node scripts/purge-not-found.mjs [--apply]
import fs from 'node:fs';
import { readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const CITY = 'tokyo';
const TOMB = 'data/_purged_not_found.json';

const j = readCity(CITY);
const doomed = j.places.filter(r => r.existence?.status === 'not_found');
const ids = new Set(doomed.map(r => r.id));

const mp = `data/${CITY}_menus.json`;
const menus = JSON.parse(fs.readFileSync(mp, 'utf8'));
const orphanMenus = Object.keys(menus).filter(id => ids.has(id));

console.log(`${doomed.length} record(s) with existence.status="not_found"`);
console.log(`${orphanMenus.length} menu entr(ies) would be orphaned\n`);
for (const r of doomed.slice(0, 8))
  console.log(`  ${r.id.padEnd(16)} ${String(r.name).slice(0, 26).padEnd(28)} ${String(r.existence.note || '').replace(/\s+/g, ' ').slice(0, 60)}`);
if (doomed.length > 8) console.log(`  … ${doomed.length - 8} more`);

if (!APPLY) { console.log('\nDRY RUN — nothing written. Re-run with --apply.'); process.exit(0); }

fs.writeFileSync(TOMB, JSON.stringify({
  _doc: 'Records purged from tokyo.json because the existence sweep could not find them. ' +
        'Kept in full so the deletion is auditable and reversible: each record carries the ' +
        'existence check that justified it, including the searches actually run. Greg ' +
        'approved the purge on 2026-08-23.',
  purged: '2026-08-23', city: CITY, count: doomed.length,
  records: doomed, menus: Object.fromEntries(orphanMenus.map(id => [id, menus[id]])),
}, null, 1));

j.places = j.places.filter(r => !ids.has(r.id));
for (const id of orphanMenus) delete menus[id];
writeCity(CITY, j);
fs.writeFileSync(mp, JSON.stringify(menus, null, 1));
console.log(`\npurged ${doomed.length} record(s) and ${orphanMenus.length} menu(s)`);
console.log(`tombstone -> ${TOMB}`);
console.log(`${CITY} now ${j.places.length} record(s)`);
