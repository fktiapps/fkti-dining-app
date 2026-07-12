// Generate a batched geocoding workflow for the ~549 approx-located Tokyo places.
// All public geocoders are egress-blocked in this env, so we geocode via WebSearch subagents
// (map aggregators / Tabelog map / Yahoo Loco expose coords in snippets). Each Haiku agent
// geocodes a batch of places at once (token-efficient). Output -> data/_tokyo_geo.json.
// Apply step validates (bbox + within 1.2km of the current approx pin) before accepting.
import fs from 'fs';
import { CONFIGS, bbox } from './spot-configs.mjs';
const d = JSON.parse(fs.readFileSync('data/tokyo.json', 'utf8'));
const box = bbox(CONFIGS.tokyo);
const BATCH = 8;

const targets = d.places.filter(p => p.loc_approx).map(p => ({
  id: p.id,
  q: decodeURIComponent((p.gmaps.split('query=')[1] || '').replace(/\+/g, ' ')) || `${p.name} ${p.neighborhood}`,
}));
const batches = [];
for (let i = 0; i < targets.length; i += BATCH) batches.push(targets.slice(i, i + BATCH));

const GEO_SCHEMA = {
  type: 'object', additionalProperties: false,
  properties: {
    results: {
      type: 'array', items: {
        type: 'object', additionalProperties: false,
        properties: {
          id: { type: 'string' },
          found: { type: 'boolean' },
          lat: { type: ['number', 'null'] },
          lng: { type: ['number', 'null'] },
          source: { type: 'string' },
        }, required: ['id', 'found'],
      },
    },
  }, required: ['results'],
};

const script = `export const meta = {
  name: 'tokyo-geocode',
  description: 'Precise-geocode ~${targets.length} approx Tokyo pins via WebSearch (Haiku, batched)',
  phases: [{ title: 'Geocode' }],
}
const BATCHES = ${JSON.stringify(batches)};
const GEO_SCHEMA = ${JSON.stringify(GEO_SCHEMA)};
const BOX = ${JSON.stringify(box)};

const prompt = b => \`You are a precise GEOCODER for Tokyo restaurants. For EACH place below, find its exact latitude/longitude and return them. Use ONLY coordinates you actually find in a web source — search the place name + its Japanese address, and read map/listing sources that expose lat/lng in the result snippet: Yahoo!ロコ/Yahoo地図, MapFan, NAVITIME, its-mo Navi, Mapion, Google Maps place pages, Tabelog map, goo地図. Prefer the exact 丁目-番地 address match.

HARD RULES:
- Return lat/lng as decimal degrees (e.g. 35.7108, 139.7965). Tokyo is ~lat 35.6–35.72, lng 139.69–139.81.
- The coordinate MUST fall inside lat \${BOX.latMin.toFixed(3)}–\${BOX.latMax.toFixed(3)}, lng \${BOX.lngMin.toFixed(3)}–\${BOX.lngMax.toFixed(3)}. If what you find is outside that box, you have the wrong place — set found:false.
- If you cannot find a coordinate you're confident in from a real source, set found:false and lat/lng null. Do NOT guess or interpolate from the ward name.
- source = the URL you took the coordinate from.

PLACES (id | name + address):
\${b.map(x => x.id + ' | ' + x.q).join('\\n')}

Return one result object per id.\`;

phase('Geocode')
const out = (await parallel(BATCHES.map((b, i) =>
  () => agent(prompt(b), { label: 'geo #' + i + ' (' + b.length + ')', phase: 'Geocode', schema: GEO_SCHEMA, model: 'haiku' })
    .then(r => (r && r.results) || []).catch(() => [])))).flat();
log('geocoded batches: ' + BATCHES.length + '; result rows: ' + out.length);
return { count: out.length, results: out };
`;
fs.writeFileSync('scripts/tokyo-geocode-workflow.js', script);
console.log(`wrote scripts/tokyo-geocode-workflow.js | ${targets.length} approx places -> ${batches.length} batches of ${BATCH}`);
