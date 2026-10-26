// One-time: register a sweep city in the app. Creates data/<city>.json (header only) and
// data/<city>_menus.json if missing, adds the manifest entry, and adds the city to every
// hard-coded city list. Idempotent — safe to re-run.
//   node scripts/sweep/bootstrap-city.mjs <city> "<subtitle>"
import fs from 'fs';
import { loadConfig } from './lib.mjs';

const [city, subtitle] = process.argv.slice(2);
const cfg = loadConfig(city);
const [lat, lng] = cfg.center, r = cfg.radius_m;
const dLat = r / 111320, dLng = r / (111320 * Math.cos(lat * Math.PI / 180));
const bounds = [[+(lat - dLat).toFixed(4), +(lng - dLng).toFixed(4)], [+(lat + dLat).toFixed(4), +(lng + dLng).toFixed(4)]];

const file = `data/${city}.json`;
if (!fs.existsSync(file)) {
  fs.writeFileSync(file, JSON.stringify({ city: cfg.name, subtitle, center: [+lat.toFixed(4), +lng.toFixed(4)], bounds, tz: 'Asia/Tokyo',
    note: `Restaurant guide for a ${(r / 1609.34).toFixed(0)}-mile circle around ${cfg.center_label}, with gluten-free/vegan/mom-&-pop/ramen finds.`, places: [] }));
  console.log('created', file);
}
if (!fs.existsSync(`data/${city}_menus.json`)) { fs.writeFileSync(`data/${city}_menus.json`, '{}'); console.log('created menus file'); }

const mf = 'data/manifest.json'; const m = JSON.parse(fs.readFileSync(mf, 'utf8'));
if (!m.cities.some(c => c.id === city)) {
  m.cities.push({ id: city, name: cfg.name, file, center: [+lat.toFixed(4), +lng.toFixed(4)], bounds, free: false, pins: `data/pins/${city}.json`, detail: `data/detail/${city}-`, chunks: 0 });
  fs.writeFileSync(mf, JSON.stringify(m, null, 1)); console.log('manifest: added', city);
}

for (const f of ['scripts/lib-city.mjs', 'scripts/gen-gf-audit-worklist.mjs', 'scripts/pin-audit/baseline.mjs']) {
  const s = fs.readFileSync(f, 'utf8'); // keeps the file's own line endings (only the list text changes)
  const re = /(CITIES\s*=\s*\[)([^\]]*)(\])/;
  const mm = s.match(re); if (!mm) { console.log('no CITIES list in', f); continue; }
  if (mm[2].includes(`'${city}'`)) continue;
  fs.writeFileSync(f, s.replace(re, (_, a, b, c) => `${a}${b.trimEnd()}${/,\s*$/.test(b) ? '' : ","}'${city}'${c}`)); console.log('added to', f);
}
{
  const f = 'scripts/lib-city.mjs'; const s = fs.readFileSync(f, 'utf8');
  const re = /(MINIFIED = new Set\(\[)([^\]]*)(\])/; const mm = s.match(re);
  if (mm && !mm[2].includes(`'${city}'`)) { fs.writeFileSync(f, s.replace(re, (_, a, b, c) => `${a}${b.trimEnd()}, '${city}'${c}`)); console.log('lib-city MINIFIED: added', city); }
}
