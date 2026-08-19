// Record-level schema hygiene across all cities:
//  - drop harvest-failure placeholder records
//  - fold legacy flat cultural_comfort_note into cultural_comfort.note
//  - drop the dcp block where it is entirely empty
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';
const JUNK = /^(検索予算切れ|予算切れ)$/;

const tally = { dropped: 0, ccMigrated: 0, ccDropped: 0, dcpDropped: 0 };

for (const city of CITIES) {
  const j = readCity(city);
  const before = j.places.length;

  j.places = j.places.filter(r => {
    if (JUNK.test((r.name || '').trim())) { console.log(`drop junk: ${city} ${r.id} "${r.name}"`); return false; }
    return true;
  });
  tally.dropped += before - j.places.length;

  for (const r of j.places) {
    // legacy flat key -> nested
    if (Object.prototype.hasOwnProperty.call(r, 'cultural_comfort_note')) {
      const note = r.cultural_comfort_note;
      if (note && String(note).trim()) {
        r.cultural_comfort = r.cultural_comfort || {};
        if (!r.cultural_comfort.note || !String(r.cultural_comfort.note).trim()) {
          r.cultural_comfort.note = note;
          tally.ccMigrated++;
        }
      }
      delete r.cultural_comfort_note;
      tally.ccDropped++;
    }
    // empty dcp block carries no information
    if (r.dcp && typeof r.dcp === 'object') {
      const hasAny = Object.values(r.dcp).some(v =>
        v !== null && v !== undefined && v !== '' &&
        !(Array.isArray(v) && v.length === 0) &&
        !(typeof v === 'object' && !Array.isArray(v) && Object.keys(v).length === 0));
      if (!hasAny) { delete r.dcp; tally.dcpDropped++; }
    }
  }
  writeCity(city, j);
}
// Drop menu entries that carry no items. An empty stub makes has_menu and the
// menus file disagree, and the app would open a menu sheet with nothing in it.
let stubs = 0;
for (const city of CITIES) {
  const mp = `data/${city}_menus.json`;
  if (!fs.existsSync(mp)) continue;
  const m = JSON.parse(fs.readFileSync(mp, 'utf8'));
  let dirty = false;
  for (const [id, e] of Object.entries(m))
    if (!(e.items || []).length) { delete m[id]; stubs++; dirty = true; }
  if (dirty) fs.writeFileSync(mp, JSON.stringify(m, null, 1));
}
if (stubs) console.log(`dropped ${stubs} empty menu stub(s)`);

console.log(tally);
