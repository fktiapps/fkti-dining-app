// Split each city file into what the MAP needs and what the DETAIL PANEL needs.
//
// THE PROBLEM
// index.html loads cities lazily by map position, but sw.js precached every city in the
// manifest on install: 17.5MB. So a coeliac installing this on a Japanese eSIM
// downloaded 17.5MB of chef biographies to see pins. Measured on tokyo.json (4.4MB):
//
//     chef_bio             1.14MB   26%
//     safety               0.58MB   13%
//     gf_detail            0.36MB    8%
//     vegan_detail         0.28MB    6%
//     what a map pin needs 0.44MB   10% of the payload
//
// THE SPLIT
//   data/pins/<city>.json      — everything the map, the list and the filters touch.
//   data/detail/<city>-N.json  — the rest, in chunks, fetched when a record is opened.
//
// The city files stay canonical. This is a derived build artifact, so it runs late in
// rebuild.mjs and nothing else reads it.
//
// WHY THE DETAIL IS CHUNKED
// One detail file per city would make the first tap in Tokyo a 3.4MB download — better
// than a 17.5MB install, but a bad moment for someone standing on a street corner
// deciding where to eat. At 100 records per chunk that tap is ~380KB, and the chunk
// holds the neighbouring records they are most likely to open next.
//
// HOW THE FIELD LIST WAS CHOSEN
// Not by guessing. Every field below was checked against the line ranges that actually
// run on boot, filter, draw and list — none is referenced there. `ramen` deliberately
// STAYS in pins despite being 5%: "Build me a bowl" matches taste profiles across every
// shop in the city at once, so moving it would mean loading every chunk to answer one
// question. Same for website/menu_url, which are small and read in the sheet header.
//
//   node scripts/build-payload.mjs
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const CHUNK = 100;
const DETAIL_FIELDS = [
  'chef_bio', 'safety', 'gf_detail', 'vegan_detail', 'notes', 'cultural_comfort',
  'enrich_note', 'hours_raw', 'gmaps', 'dcp', 'existence', 'gf_review', 'chef_bio_flag',
  'vegan_disproven_downgrade', 'gf_uncited_downgrade', 'merged_from', 'duplicate_aligned',
  'needs_owner_review', 'japanese_sources_summary',
];
const DETAIL = new Set(DETAIL_FIELDS);

fs.mkdirSync('data/pins', { recursive: true });
fs.mkdirSync('data/detail', { recursive: true });

// Clear stale chunks so a shrinking city cannot leave an orphan behind that the service
// worker goes on serving.
for (const d of ['data/pins', 'data/detail'])
  for (const f of fs.readdirSync(d)) if (f.endsWith('.json')) fs.unlinkSync(`${d}/${f}`);

const manifest = JSON.parse(fs.readFileSync('data/manifest.json', 'utf8'));
let totalFull = 0, totalPins = 0, chunkCount = 0;

for (const city of CITIES) {
  const j = readCity(city);
  const full = Buffer.byteLength(JSON.stringify(j.places));

  const pins = [];
  const chunks = [];
  j.places.forEach((r, i) => {
    const chunk = Math.floor(i / CHUNK);
    const pin = {}, det = {};
    for (const [k, v] of Object.entries(r)) (DETAIL.has(k) ? det : pin)[k] = v;
    // _dc tells the app which chunk holds this record's detail. Stored per record
    // rather than derived from position, because record order changes between builds
    // and a stale index would fetch the wrong chunk.
    if (Object.keys(det).length) { pin._dc = chunk; det.id = r.id; }
    pins.push(pin);
    (chunks[chunk] = chunks[chunk] || []).push(det);
  });

  const out = { ...j, places: pins };
  fs.writeFileSync(`data/pins/${city}.json`, JSON.stringify(out));
  const pinBytes = Buffer.byteLength(JSON.stringify(pins));

  chunks.forEach((rows, n) => {
    const byId = {};
    for (const d of rows) if (Object.keys(d).length > 1) byId[d.id] = d;
    fs.writeFileSync(`data/detail/${city}-${n}.json`, JSON.stringify(byId));
    chunkCount++;
  });

  const entry = manifest.cities.find(c => c.id === city);
  if (entry) {
    entry.pins = `data/pins/${city}.json`;
    entry.detail = `data/detail/${city}-`;   // + <chunk>.json
    entry.chunks = chunks.length;
  }

  totalFull += full; totalPins += pinBytes;
  console.log(`  ${city.padEnd(10)} ${(full / 1e6).toFixed(2)}MB -> pins ${(pinBytes / 1e6).toFixed(2)}MB + ${chunks.length} detail chunk(s)`);
}

fs.writeFileSync('data/manifest.json', JSON.stringify(manifest, null, 1));

console.log(`\n  install payload ${(totalFull / 1e6).toFixed(1)}MB -> ${(totalPins / 1e6).toFixed(1)}MB ` +
            `(${Math.round(100 * totalPins / totalFull)}%), ${chunkCount} detail chunks fetched on demand`);
