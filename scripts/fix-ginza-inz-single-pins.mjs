// Ginza Inz shops have the non-standard address 銀座西, which GSI resolves only to the ward,
// so three sweep records kept the Tabelog point with no second source — yet were written
// loc_precise:true. Per the pin rule (every pin needs a second source; one-listing pins carry
// loc_approx:'single' so the app says "not yet cross-checked"), mark them honestly.
// (THE CITY BAKERY in b101 got an OSM second source instead.)
import fs from 'fs';

const IDS = ['tokyo_ballo_ballo_ginza_inz', 'tokyo_saizeriya_ginza_inz', 'tokyo_ginza_michishirube'];
const file = 'data/tokyo.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
for (const id of IDS) {
  const p = d.places.find(x => x.id === id);
  if (!p) throw new Error(`missing ${id}`);
  if (p.loc_approx === 'single') { console.log(`${id}: already single`); continue; }
  p.loc_approx = 'single'; p.loc_precise = false;
  p.pin_source = `${p.pin_source} — single source: GSI resolves 銀座西 only to the ward and no OSM node was found (2026-10-25).`;
  console.log(`${id}: loc_approx single`);
}
fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
