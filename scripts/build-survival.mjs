// Build per-city konbini (🏪) and grocery (🛒) survival-layer point files from
// OpenStreetMap (Overpass). These are the GF dial level-5 floor — "just get me a
// safe bite until the next store" — so a city missing them has a hole in the app's
// only unconditional promise. No such harvester existed in the repo; Himeji shipped
// with neither file.
//
// Output shapes match what index.html already reads:
//   konbini  {city, updated, points:[{lat,lng,c,nm,addr,hours}]}   c: seven|family|lawson
//   grocery  {city, updated, stores:[{lat,lng,chain,name,addr,hours}]}  chain: GROCERY KB key
//
//   node scripts/build-survival.mjs                    # both layers, all cities
//   node scripts/build-survival.mjs himeji             # both layers, one city
//   node scripts/build-survival.mjs --layer=grocery toba nagano
import fs from 'fs';

const MIRRORS = [
  'https://overpass-api.de/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
];

// Chain codes must match KONBINI_COLOR / KONBINI.chains in index.html. Anything
// unmatched is kept as 'other' rather than dropped — a convenience store that
// publishes no allergen table is still a valid survival pin, and the app now
// shows it a generic guide instead of 7-Eleven's product-specific one.
const KONBINI = {
  seven:    /7-?eleven|セブン-?イレブン|セブンイレブン/i,
  family:   /family ?mart|ファミリーマート|ファミマ/i,
  lawson:   /lawson|ローソン/i,
  ministop: /ministop|ミニストップ/i,
  daily:    /daily ?yamazaki|デイリーヤマザキ|ヤマザキ ?デイリー/i,
};

// map OSM brand/name -> the GROCERY knowledge-base keys in index.html
const GROCERY = {
  seijo:      /seijo ?ishii|成城石井/i,
  gyomu:      /gyomu|業務スーパー/i,
  kaldi:      /kaldi|カルディ/i,
  aeon:       /aeon|イオン|maxvalu|マックスバリュ|daiei|ダイエー/i,
  life:       /(^|\W)life(\W|$)|ライフ/i,
  itoyokado:  /ito-?yokado|イトーヨーカ/i,
  seiyu:      /seiyu|西友/i,
  summit:     /summit|サミット/i,
  donki:      /don ?quijote|ドン・?キホーテ|ドンキ/i,
  coop:       /co-?op|コープ|生協|コープデリ/i,
  natural:    /natural ?house|ナチュラルハウス|natural ?lawson|オーガニック|organic|自然食品/i,
};

const args = process.argv.slice(2);
const layerArg = (args.find(a => a.startsWith('--layer=')) || '').split('=')[1];
const layers = layerArg ? [layerArg] : ['konbini', 'grocery'];
const wanted = args.filter(a => !a.startsWith('--'));
const man = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));
const cities = (man.cities || []).filter(c => c.bounds && (!wanted.length || wanted.includes(c.id)));
const sleep = ms => new Promise(r => setTimeout(r, ms));
const failures = [];

async function overpass(query) {
  for (let a = 0; a < MIRRORS.length * 3; a++) {
    const url = MIRRORS[a % MIRRORS.length];
    try {
      const res = await fetch(url, { method: 'POST', body: 'data=' + encodeURIComponent(query),
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      const text = await res.text();
      if (!res.ok || text.trimStart().startsWith('<')) throw new Error('busy ' + res.status);
      return JSON.parse(text);
    } catch (e) {
      process.stderr.write(`    retry (${url.split('/')[2]}: ${e.message})\n`);
      await sleep(8000 + a * 6000);
    }
  }
  throw new Error('all Overpass mirrors failed');
}

const hay = t => [t.brand, t['brand:en'], t.name, t['name:en'], t.operator].filter(Boolean).join(' | ');
const classify = (t, table) => {
  const h = hay(t);
  for (const [id, rx] of Object.entries(table)) if (rx.test(h)) return id;
  return null;
};
const normHours = h => !h ? '' : /^24\/7$/i.test(h.trim()) ? '24/7' : h;

for (const c of cities) {
  const [[s, w], [n, e]] = c.bounds;
  const bbox = `${s},${w},${n},${e}`;

  for (const layer of layers) {
    const q = layer === 'konbini'
      ? `[out:json][timeout:90];(nwr["shop"="convenience"](${bbox});nwr["amenity"="convenience"](${bbox}););out center tags;`
      : `[out:json][timeout:90];(nwr["shop"~"^(supermarket|greengrocer|health_food|organic)$"](${bbox});nwr["shop"="department_store"]["name"~"成城石井|カルディ|イオン"](${bbox}););out center tags;`;

    process.stderr.write(`${c.id} ${layer}: querying Overpass...\n`);
    let data;
    try {
      data = await overpass(q);
    } catch (e) {
      // Overpass rate-limits hard. Losing one city must not abandon the rest —
      // an earlier run aborted at Nara and left five cities un-harvested.
      failures.push(`${c.id} ${layer}`);
      process.stderr.write(`  ${c.id} ${layer}: FAILED (${e.message}) — continuing\n`);
      continue;
    }

    const seen = new Set();
    const rows = [];
    for (const el of data.elements || []) {
      const lat = el.lat ?? el.center?.lat, lng = el.lon ?? el.center?.lon;
      if (lat == null || lng == null) continue;
      const key = lat.toFixed(5) + ',' + lng.toFixed(5);
      if (seen.has(key)) continue;
      const t = el.tags || {};

      if (layer === 'konbini') {
        seen.add(key);
        rows.push({ lat: +lat.toFixed(5), lng: +lng.toFixed(5), c: classify(t, KONBINI) || 'other',
          nm: t.name || t['name:en'] || '', addr: t['addr:full'] || '', hours: normHours(t.opening_hours) });
      } else {
        seen.add(key);
        rows.push({ lat: +lat.toFixed(5), lng: +lng.toFixed(5),
          chain: classify(t, GROCERY) || 'other',
          name: t.name || t['name:en'] || 'Supermarket', addr: t['addr:full'] || '',
          hours: normHours(t.opening_hours) });
      }
    }

    const file = `data/${c.id}_${layer}.json`;
    // never let a failed/thin query clobber richer researched data
    if (fs.existsSync(file)) {
      const prev = JSON.parse(fs.readFileSync(file, 'utf8'));
      const prevRows = prev.points || prev.stores || [];
      const researched = prevRows.some(r => r.gf_summary);
      if (researched) { process.stderr.write(`  ${c.id} ${layer}: SKIP — existing file has researched prose (${prevRows.length} rows)\n`); continue; }
      if (rows.length < prevRows.length) { process.stderr.write(`  ${c.id} ${layer}: SKIP — harvest ${rows.length} < existing ${prevRows.length}\n`); continue; }
    }
    const out = layer === 'konbini'
      ? { city: c.name, updated: new Date().toISOString().slice(0, 10), points: rows }
      : { city: c.name, updated: new Date().toISOString().slice(0, 10), stores: rows };
    fs.writeFileSync(file, JSON.stringify(out, null, 1));
    process.stderr.write(`  ${c.id} ${layer}: ${rows.length} -> ${file}\n`);
    await sleep(2000);
  }
}

if (failures.length) {
  process.stderr.write(`\nFAILED (Overpass unavailable): ${failures.join(', ')}\n`);
  process.stderr.write('Re-run for just those cities once the rate limit clears.\n');
  process.exitCode = 1;
}
