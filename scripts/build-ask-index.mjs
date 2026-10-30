// Build the search index behind "Ask" (functions/api/ask.js): one compact file per city,
// data/ask/<city>.json, holding what the assistant filters and keyword-searches on.
//
// The assistant never sees a whole city file. It calls search_places (filters + keywords over
// this index) and get_place (one record's fuller text), so a question costs a few thousand
// tokens however big the data grows. Everything here is copied from the canonical city and
// menu files; nothing is summarised or invented at build time. Hidden places are left out,
// as in the app.
//
//   node scripts/build-ask-index.mjs
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const clip = (s, n) => { s = String(s || '').replace(/\s+/g, ' ').trim(); return s.length > n ? s.slice(0, n - 1) + '…' : s; };
const arr = v => (Array.isArray(v) ? v : v ? [v] : []);

fs.mkdirSync('data/ask', { recursive: true });
let total = 0;
for (const city of CITIES) {
  const j = readCity(city);
  const menus = fs.existsSync(`data/${city}_menus.json`) ? JSON.parse(fs.readFileSync(`data/${city}_menus.json`, 'utf8')) : {};
  const out = [];
  for (const p of j.places || []) {
    if (p.hidden) continue;
    const cb = p.chef_bio || {};
    const r = p.ramen;
    const items = (menus[p.id]?.items || []).filter(i => i.en).slice(0, 40)
      .map(i => ({ en: clip(i.en, 60), ...(i.price ? { p: i.price } : {}), ...(i.gf ? { gf: i.gf } : {}), ...(i.vegan ? { vg: i.vegan } : {}) }));
    out.push({
      id: p.id, n: p.name, ct: p.cuisine_type || '', cat: p.category || '', ...(p.mom_and_pop ? { mp: 1 } : {}),
      hood: clip(p.neighborhood, 90), gf: p.gf_confidence || '', vg: p.vegan_status || '',
      ...(p.flags?.reservation ? { rsv: 1 } : {}), ...(p.flags?.open_late ? { late: 1 } : {}),
      cu: clip(p.cuisine, 400),
      ...(r ? { rm: {
        broth: arr(r.broth_base), texture: r.broth_texture || '', tare: arr(r.tare), oil: arr(r.aroma_oil),
        body: r.richness || '', type: arr(r.sub_genre), style: arr(r.regional_style), profile: r.profile || undefined,
        bowl: clip(r.signature_bowl, 240),
      } } : {}),
      // the free text keyword search runs over, and get_place returns
      notes: clip(p.notes, 1400),
      chef: clip([cb.chef_name, arr(cb.roles).join(', '), cb.origin, cb.background, cb.philosophy, cb.specialty].filter(Boolean).join(' · '), 1200),
      gfd: clip(p.gf_detail, 500), vgd: clip(p.vegan_detail, 400), hours: clip(p.hours_raw, 300),
      ...(items.length ? { menu: items } : {}),
    });
  }
  const s = JSON.stringify({ city, name: j.city || city, places: out });
  fs.writeFileSync(`data/ask/${city}.json`, s);
  total += s.length;
  console.log(`  ${city.padEnd(10)} ${String(out.length).padStart(5)} places  ${(s.length / 1e6).toFixed(2)}MB`);
}
console.log(`  total ${(total / 1e6).toFixed(1)}MB`);
