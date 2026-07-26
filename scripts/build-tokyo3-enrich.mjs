// Merge deep-enrichment results back into data/tokyo.json, upgrading light records
// IN PLACE (matched by id). Runs offline — the fetching already happened in the
// workflow. Only fields present in a result are overwritten; real coords clear the
// loc_approx flag. Preserves the custom single-line serializer tokyo.json uses.
//
//   node scripts/build-tokyo3-enrich.mjs data/_tokyo3_enrich.json
//
// Expected input: an array (or {results:[...]}) of objects keyed by `id`, each with any of:
//   lat,lng, website, menu_url, cuisine, category,
//   gf_confidence, vegan_status, hours_raw, hours{}, hours_status,
//   chef_bio{...}, safety{...}, cultural_comfort{level,note}, flags{...}, notes, enrich_confidence
import fs from 'fs';
const src = process.argv[2] || 'data/_tokyo3_enrich.json';
const d = JSON.parse(fs.readFileSync('data/tokyo.json', 'utf8'));
let res = JSON.parse(fs.readFileSync(src, 'utf8'));
if (res && res.results) res = res.results;
const gfL = g => ({ dedicated: 'Dedicated gluten-free', high: 'Strong GF focus', options: 'Some GF options', ask: 'GF — ask staff', no: 'Not gluten-free' }[g]);
const vgL = v => ({ full: 'Fully vegan', options: 'Vegan options', limited: 'Limited vegan options', ask: 'Vegan — ask', no: 'Not vegan' }[v]);
const byId = new Map(d.places.map(p => [p.id, p]));
let upgraded = 0, missing = 0, pinned = 0;
for (const r of res) {
  const p = byId.get(r.id); if (!p) { missing++; continue; }
  if (typeof r.lat === 'number' && typeof r.lng === 'number') { p.lat = r.lat; p.lng = r.lng; delete p.loc_approx; pinned++; }
  if (r.website) p.website = r.website;
  if (r.menu_url) { p.menu_url = r.menu_url; p.has_menu = true; }
  if (r.cuisine) p.cuisine = r.cuisine;
  if (r.category) { p.category = r.category; p.mom_and_pop = r.category === 'MOM_AND_POP'; }
  if (r.gf_confidence) { p.gf_confidence = r.gf_confidence; p.gf_label = gfL(r.gf_confidence); if (r.gf_detail) p.gf_detail = r.gf_detail; }
  if (r.vegan_status) { p.vegan_status = r.vegan_status; p.vegan_label = vgL(r.vegan_status); if (r.vegan_detail) p.vegan_detail = r.vegan_detail; }
  if (r.hours_raw) p.hours_raw = r.hours_raw;
  if (r.hours && typeof r.hours === 'object') p.hours = r.hours;
  if (r.hours_status) p.hours_status = r.hours_status;
  if (r.chef_bio) p.chef_bio = { ...p.chef_bio, ...r.chef_bio };
  if (r.safety) p.safety = { ...p.safety, ...r.safety };
  if (r.cultural_comfort) { p.cultural_comfort = { ...p.cultural_comfort, ...r.cultural_comfort }; if (r.cultural_comfort.note) p.cultural_comfort_note = r.cultural_comfort.note; }
  if (r.flags) p.flags = { ...p.flags, ...r.flags };
  if (r.notes) p.notes = r.notes;
  else if ('loc_approx' in p === false) p.notes = (p.notes || '').replace(' · 📍 Approx. pin (neighborhood) · from the Tokyo 3-mile sweep — confirm details on site.', '').replace(/^\[Tokyo 3-mile sweep\] /, '');
  upgraded++;
}
const ser = v => { if (v === null) return 'null'; if (Array.isArray(v)) return '[' + v.map(ser).join(', ') + ']'; if (typeof v === 'object') return '{' + Object.entries(v).map(([k, val]) => JSON.stringify(k) + ': ' + ser(val)).join(', ') + '}'; return JSON.stringify(v); };
fs.writeFileSync('data/tokyo.json', ser(d));
let swv = '?'; for (const f of ['sw.js', 'index.html']) { let s = fs.readFileSync(f, 'utf8'); const m = s.match(/dcd-v(\d+)/); if (!m) continue; swv = Number(m[1]) + 1; s = s.split(`dcd-v${m[1]}`).join(`dcd-v${swv}`); fs.writeFileSync(f, s); }
console.log(`enriched ${upgraded} records (${pinned} got real coords); ${missing} result ids not found. SW→dcd-v${swv}`);
const stillLight = d.places.filter(p => p.loc_approx === 'block').length;
console.log(`remaining light (approx-pin) records: ${stillLight}`);
