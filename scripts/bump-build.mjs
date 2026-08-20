// Bump the service-worker cache version when, and only when, shipped content changes.
//
// sw.js keys every cache off VERSION, so a returning user keeps serving the OLD
// city data until VERSION moves. Four data deploys went out at dcd-v144 without it
// moving — the pushes were live but nobody with the app installed would have seen
// them. Remembering to bump by hand is exactly the thing that gets forgotten on the
// fifth push, so this derives it.
//
// The version stays an incrementing counter rather than becoming a hash, because
// sw.js's activate step deletes every cache key that is not the current one — an
// ordering that reads sensibly to a human matters when debugging a stuck client.
// The hash is recorded beside it purely to answer "did anything actually change?".
//
// index.html's APP_BUILD is the tag shown in the UI and is kept in lockstep; the
// two drifted historically (v136 vs v144) and a user reporting "I'm on v136" then
// tells you nothing about which data they have.
//
//   node scripts/bump-build.mjs [--check]
import fs from 'node:fs';
import crypto from 'node:crypto';
import { CITIES } from './lib-city.mjs';

const CHECK = process.argv.includes('--check');

// Everything the app actually fetches. Layer files are optional — a city need not
// have chains or a Starbucks list — so missing ones are skipped, not fatal.
const assets = ['index.html', 'gate.js', 'dcp-launch.js', 'data/manifest.json'];
for (const c of CITIES) {
  assets.push(`data/${c}.json`, `data/${c}_menus.json`);
  for (const layer of ['chains', 'starbucks', 'konbini', 'grocery'])
    assets.push(`data/${c}_${layer}.json`);
}

const h = crypto.createHash('sha256');
let counted = 0;
for (const a of assets.sort()) {
  if (!fs.existsSync(a)) continue;
  h.update(a);
  // index.html carries APP_BUILD, which this script rewrites — hashing it whole
  // would make every bump change the hash and demand another bump forever.
  const body = a === 'index.html'
    ? fs.readFileSync(a, 'utf8').replace(/const APP_BUILD='[^']*';/, '')
    : fs.readFileSync(a);
  h.update(body);
  counted++;
}
const hash = h.digest('hex').slice(0, 16);

const sw = fs.readFileSync('sw.js', 'utf8');
const recorded = (sw.match(/\/\/ content-hash: ([0-9a-f]+)/) || [])[1] || null;
const cur = Number((sw.match(/const VERSION = 'dcd-v(\d+)'/) || [])[1]);
if (!Number.isFinite(cur)) { console.error('could not read VERSION from sw.js'); process.exit(1); }

if (recorded === hash) {
  console.log(`content unchanged (${hash}) — staying on dcd-v${cur} across ${counted} asset(s)`);
  process.exit(0);
}
if (CHECK) {
  console.error(`content changed (${recorded || 'none'} -> ${hash}) but VERSION is still dcd-v${cur}`);
  console.error('run: node scripts/bump-build.mjs');
  process.exit(1);
}

const next = cur + 1;
let out = sw.replace(/const VERSION = 'dcd-v\d+';/, `const VERSION = 'dcd-v${next}';`);
out = out.replace(/\n\/\/ content-hash: [0-9a-f]+/, '');
out = out.replace(/(const VERSION = 'dcd-v\d+';)/, `$1\n// content-hash: ${hash}`);
fs.writeFileSync('sw.js', out);

const idx = fs.readFileSync('index.html', 'utf8')
  .replace(/const APP_BUILD='[^']*';/, `const APP_BUILD='dcd-v${next}';`);
fs.writeFileSync('index.html', idx);

console.log(`dcd-v${cur} -> dcd-v${next}  (${counted} assets, hash ${hash})`);
console.log('sw.js VERSION and index.html APP_BUILD are now in lockstep.');
