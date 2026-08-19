// Build per-city Starbucks survival-layer point files from OpenStreetMap (Overpass),
// mirroring the konbini/grocery layer shape: {city, updated, points:[{lat,lng,chain,name,addr,hours}]}.
// Starbucks Japan is a VEGAN FALLBACK (plant-milk on any drink + rotating seasonal
// plant-based food) — NOT a strict-vegan guarantee. The honest caveats live in the
// chain KB in index.html, not here; this file is just the pins.
//
//   node scripts/build-starbucks.mjs           # all trip cities
//   node scripts/build-starbucks.mjs tokyo nara
import fs from 'fs';

const MIRRORS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
];
const m = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));
const wanted = process.argv.slice(2);
const cities = (m.cities || []).filter(c => c.bounds && (!wanted.length || wanted.includes(c.id)));

const sleep = ms => new Promise(r => setTimeout(r, ms));

async function overpass(query) {
  for (let attempt = 0; attempt < MIRRORS.length * 2; attempt++) {
    const url = MIRRORS[attempt % MIRRORS.length];
    try {
      const res = await fetch(url, { method: 'POST', body: 'data=' + encodeURIComponent(query), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      const text = await res.text();
      if (!res.ok || text.trimStart().startsWith('<')) throw new Error('busy/err ' + res.status);
      return JSON.parse(text);
    } catch (e) {
      process.stderr.write(`  retry (${url.split('/')[2]}: ${e.message})\n`);
      await sleep(3000 + attempt * 2000);
    }
  }
  throw new Error('all Overpass mirrors failed');
}

for (const c of cities) {
  const [[s, w], [n, e]] = c.bounds;
  const q = `[out:json][timeout:60];(nwr["brand"="Starbucks"](${s},${w},${n},${e});nwr["name"~"[Ss]tarbucks|スターバックス"](${s},${w},${n},${e}););out center tags;`;
  process.stderr.write(`${c.id}: querying Overpass...\n`);
  const data = await overpass(q);
  const seen = new Set();
  const points = [];
  for (const el of data.elements || []) {
    const lat = el.lat ?? el.center?.lat, lng = el.lon ?? el.center?.lon;
    if (lat == null || lng == null) continue;
    const key = lat.toFixed(5) + ',' + lng.toFixed(5);
    if (seen.has(key)) continue;
    seen.add(key);
    const t = el.tags || {};
    points.push({
      lat: +lat.toFixed(6), lng: +lng.toFixed(6), chain: 'starbucks',
      name: t['name:en'] || t.name || 'Starbucks',
      addr: t['addr:full'] || [t['addr:city'], t['addr:neighbourhood'], t['addr:block_number'], t['addr:housenumber']].filter(Boolean).join(' ') || '',
      hours: t.opening_hours || '',
    });
  }
  const out = { city: c.id, updated: '2026-08-13', points };
  fs.writeFileSync(`data/${c.id}_starbucks.json`, JSON.stringify(out));
  process.stderr.write(`  ${c.id}: ${points.length} Starbucks points -> data/${c.id}_starbucks.json\n`);
}
console.log('done');
