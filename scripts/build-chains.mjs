// Build a per-city "reliable chains" survival sub-layer from OpenStreetMap (Overpass).
// Same shape as konbini/grocery: {city, updated, points:[{lat,lng,chain,name,addr,hours}]}.
// These chains are a GF/VEGAN FALLBACK NET — each is reliable ONLY for specific items
// (e.g. CoCo Ichibanya = the retort low-allergen curry over plain rice, NOT the wheat
// roux). The honest per-chain caveats live in the chain KB in index.html, not here.
//
//   node scripts/build-chains.mjs                 # all chains, all trip cities
//   node scripts/build-chains.mjs tokyo           # all chains, one city
//   node scripts/build-chains.mjs --chain=coco_ichibanya tokyo
import fs from 'fs';

// chain id -> Overpass name/brand regex (romaji + kana; matched case-insensitively)
const CHAINS = {
  starbucks:      'Starbucks|スターバックス',
  saizeriya:      'Saizeriya|サイゼリヤ',
  gusto:          'Gusto|ガスト',
  mos_burger:     'MOS ?Burger|モスバーガー',
  coco_ichibanya: 'CoCo ?Ichibanya|Ichibanya|CoCo壱|ココイチ|壱番屋',
  bamiyan: 'Bamiyan|バーミヤン',
  cocos: 'COCO\'?S|ココス',
  dennys: 'Denny\'?s|デニーズ',
  doutor: 'Doutor|ドトールコーヒーショップ|ドトール',
  freshness_burger: 'Freshness ?Burger|フレッシュネスバーガー',
  jonathans: 'Jonathan\'?s|ジョナサン',
  komeda: 'Komeda\'?s ?Coffee|コメダ珈琲店|コメダ',
  kura_sushi: 'Kura ?Sushi|くら寿司',
  marugame_seimen: 'Marugame ?Seimen|丸亀製麺',
  // 松屋 also names unrelated businesses (department stores, other shops) with no
  // "restaurant" qualifier to filter on via name/brand text alone -- spot-check results.
  matsuya: 'Matsuya|松屋',
  nakau: 'Nakau|なか卯',
  ootoya: 'Ootoya|大戸屋ごはん処|大戸屋',
  ringer_hut: 'Ringer ?Hut|リンガーハット',
  st_marc: 'St\.? ?Marc ?Café|サンマルクカフェ|サンマルク',
  subway: 'Subway|サブウェイ',
  sukiya: 'Sukiya|すき家',
  sushiro: 'Sushiro|スシロー',
  tullys: 'Tully\'?s ?Coffee|タリーズコーヒー',
  yayoiken: 'Yayoiken|やよい軒',
  yoshinoya: 'Yoshinoya|吉野家',
};
const MIRRORS = [
  'https://maps.mail.ru/osm/tools/overpass/api/interpreter',
  'https://overpass.kumi.systems/api/interpreter',
  'https://overpass-api.de/api/interpreter',
];
const args = process.argv.slice(2);
const only = (args.find(a => a.startsWith('--chain=')) || '').split('=')[1];
const wantedCities = args.filter(a => !a.startsWith('--'));
const chainIds = only ? [only] : Object.keys(CHAINS);
const m = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));
const cities = (m.cities || []).filter(c => c.bounds && (!wantedCities.length || wantedCities.includes(c.id)));
const sleep = ms => new Promise(r => setTimeout(r, ms));

async function overpass(query) {
  for (let a = 0; a < MIRRORS.length * 3; a++) {
    const url = MIRRORS[a % MIRRORS.length];
    try {
      const res = await fetch(url, { method: 'POST', body: 'data=' + encodeURIComponent(query), headers: { 'Content-Type': 'application/x-www-form-urlencoded' } });
      const text = await res.text();
      if (!res.ok || text.trimStart().startsWith('<')) throw new Error('busy ' + res.status);
      return JSON.parse(text);
    } catch (e) {
      process.stderr.write(`    retry (${url.split('/')[2]}: ${e.message})\n`);
      await sleep(4000 + a * 3000);
    }
  }
  throw new Error('all mirrors failed');
}

// Classify an OSM element to a chain id by matching brand/name against each regex.
// EXCLUSIONS catch a real name/brand match that is nonetheless the wrong business.
// Confirmed live 2026-09-18: 松屋/Matsuya (beef bowl) has no word-boundary anchor
// against 西松屋/Nishimatsuya (an unrelated kids'-clothing chain, matched as a bare
// substring) or against an actual 松屋百貨店 department store -- a ~17% false-positive
// rate on this one chain across all 9 cities before this filter existed.
const EXCLUSIONS = {
  matsuya: /nishimatsuya|西松屋|百貨店|デパート|department ?store/i,
};
const matchers = chainIds.map(id => [id, new RegExp(CHAINS[id], 'i')]);
function classify(t) {
  const hay = [t.brand, t['brand:en'], t.name, t['name:en']].filter(Boolean).join(' | ');
  for (const [id, rx] of matchers) {
    if (!rx.test(hay)) continue;
    if (EXCLUSIONS[id] && EXCLUSIONS[id].test(hay)) continue;
    return id;
  }
  return null;
}

// One combined query per city (gentler on Overpass rate limits than N separate).
const combined = chainIds.map(id => CHAINS[id]).join('|');
for (const c of cities) {
  const [[s, w], [n, e]] = c.bounds;
  const q = `[out:json][timeout:90];(nwr["brand"~"${combined}",i](${s},${w},${n},${e});nwr["name"~"${combined}",i](${s},${w},${n},${e}););out center tags;`;
  process.stderr.write(`${c.id}: querying all chains...\n`);
  let data; try { data = await overpass(q); } catch (e) { process.stderr.write(`  !! ${c.id} FAILED: ${e.message}\n`); continue; }
  const existing = fs.existsSync(`data/${c.id}_chains.json`) ? JSON.parse(fs.readFileSync(`data/${c.id}_chains.json`, 'utf8')) : { points: [] };
  let points = existing.points.filter(p => !chainIds.includes(p.chain)); // keep chains not in this run
  const seen = new Set(points.map(p => p.chain + ':' + p.lat + ',' + p.lng));
  const per = {};
  for (const el of data.elements || []) {
    const lat = el.lat ?? el.center?.lat, lng = el.lon ?? el.center?.lon;
    if (lat == null || lng == null) continue;
    const t = el.tags || {};
    const id = classify(t);
    if (!id) continue;
    const key = id + ':' + (+lat.toFixed(5)) + ',' + (+lng.toFixed(5));
    if (seen.has(key)) continue; seen.add(key);
    points.push({
      lat: +lat.toFixed(6), lng: +lng.toFixed(6), chain: id,
      name: t['name:en'] || t.name || id,
      addr: t['addr:full'] || [t['addr:city'], t['addr:neighbourhood'], t['addr:housenumber']].filter(Boolean).join(' ') || '',
      hours: t.opening_hours || '',
    });
    per[id] = (per[id] || 0) + 1;
  }
  fs.writeFileSync(`data/${c.id}_chains.json`, JSON.stringify({ city: c.id, updated: '2026-08-13', points }));
  process.stderr.write(`${c.id}: wrote ${points.length} pts ${JSON.stringify(per)}\n`);
}
console.log('done');
