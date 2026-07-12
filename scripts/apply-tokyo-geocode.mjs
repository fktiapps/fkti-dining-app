// Apply WebSearch-derived precise coordinates to the approx-located Tokyo pins, with validation:
// accept a new coordinate ONLY if it's inside the union bbox AND within 1.2km of the current
// (chome/ward) approx pin — so a hallucinated or wrong-branch match is rejected, not placed.
// Reads data/_tokyo_geo.json -> updates data/tokyo.json (clears loc_approx on accepted pins).
import fs from 'fs';
import { CONFIGS, bbox } from './spot-configs.mjs';
const d = JSON.parse(fs.readFileSync('data/tokyo.json', 'utf8'));
const geo = JSON.parse(fs.readFileSync('data/_tokyo_geo.json', 'utf8'));
const rows = Array.isArray(geo) ? geo : (geo.results || []);
const box = bbox(CONFIGS.tokyo);
const byId = new Map(d.places.map(p => [p.id, p]));

const hav = (a, b, c, e) => { const R = 6371, t = Math.PI / 180; const x = Math.sin((c - a) * t / 2) ** 2 + Math.cos(a * t) * Math.cos(c * t) * Math.sin((e - b) * t / 2) ** 2; return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)); };
const inBox = (lat, lng) => lat >= box.latMin - 0.01 && lat <= box.latMax + 0.01 && lng >= box.lngMin - 0.01 && lng <= box.lngMax + 0.01;
const APPROX_NOTE = ' · 📍 Approx. map location — confirm the exact spot (auto-placed from address).';

// A result that just echoes our own approximate pin back (source points at tokyo.json / a
// local file / localhost) is NOT an independent confirmation — accepting it would launder an
// approximate coordinate into "precise". Reject those; they stay flagged approximate.
const selfCite = s => /tokyo\.json|file:\/\/|localhost|127\.0\.0\.1|^\s*$/i.test(s || '');

let accepted = 0, rejOut = 0, rejFar = 0, notFound = 0, dup = 0, rejSelf = 0;
const seen = new Set();
for (const r of rows) {
  const p = byId.get(r.id);
  if (!p || !p.loc_approx) continue;              // only refine pins still marked approx
  if (seen.has(r.id)) { dup++; continue; } seen.add(r.id);
  if (!r.found || r.lat == null || r.lng == null) { notFound++; continue; }
  if (selfCite(r.source)) { rejSelf++; continue; } // echoed our own pin — not a real source
  const lat = Number(r.lat), lng = Number(r.lng);
  if (!inBox(lat, lng)) { rejOut++; continue; }
  const dist = hav(p.lat, p.lng, lat, lng);        // p.lat/lng is the current approx pin
  if (dist > 1.2) { rejFar++; continue; }          // too far from the neighborhood estimate → reject
  p.lat = +lat.toFixed(6); p.lng = +lng.toFixed(6);
  delete p.loc_approx;
  if (p.notes && p.notes.endsWith(APPROX_NOTE)) p.notes = p.notes.slice(0, -APPROX_NOTE.length);
  p.safety = p.safety || {}; p.safety.geo = { precise: true, source: r.source || '', date: '2026-07-08' };
  accepted++;
}

function ser(v) { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); }
fs.writeFileSync('data/tokyo.json', ser(d));

// bump SW (generic)
let swv = '?';
for (const f of ['sw.js']) { let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (m) { swv = Number(m[1]) + 1; s = s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`); fs.writeFileSync(f, s); } }
const stillApprox = d.places.filter(p => p.loc_approx).length;
console.log(`geocode applied: ${accepted} pins made precise | still approx: ${stillApprox}`);
console.log(`rejected: ${rejOut} out-of-box, ${rejFar} >1.2km from estimate, ${rejSelf} self-cited, ${notFound} not-found, ${dup} dup rows`);
console.log(`SW -> dcd-v${swv}`);
