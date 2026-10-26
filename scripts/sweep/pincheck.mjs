// Pin cross-check: Tabelog point vs GSI (listing address) vs OSM Nominatim (shop name), generic UA.
//   node scripts/sweep/pincheck.mjs <city> <in.json: [[key, tabelogId, name, address], ...]>
import fs from 'fs'; import { gsi } from '../pin-audit/gsi.mjs';
const [CITY, J] = process.argv.slice(2); const W = `scripts/sweep/${CITY}/work`; const L = JSON.parse(fs.readFileSync(J, 'utf8'));
const hav = (a, b, c, d) => { const R = 6371000, r = Math.PI / 180; const x = (d - b) * r * Math.cos((a + c) / 2 * r), y = (c - a) * r; return Math.round(Math.sqrt(x * x + y * y) * R); };
const out = {};
for (const [k, id, name, addr] of L) {
  const m = JSON.parse(fs.readFileSync(`${W}/shops/${id}/meta.json`, 'utf8'));
  const g = await gsi(addr);
  const q = encodeURIComponent(name.split(/[ 　]/).filter(Boolean).slice(-1)[0]);
  let osm = null;
  try { const r = await (await fetch(`https://nominatim.openstreetmap.org/search?q=${q}&format=json&limit=5&viewbox=${m.lng - 0.006},${m.lat + 0.006},${m.lng + 0.006},${m.lat - 0.006}&bounded=1`, { headers: { 'User-Agent': 'fkti-dining-pin-check/1.0' } })).json();
    osm = r.map(x => ({ name: x.name, id: `${x.osm_type}/${x.osm_id}`, d: hav(m.lat, m.lng, +x.lat, +x.lon) })).sort((a, b) => a.d - b.d)[0] || null; } catch (e) {}
  await new Promise(z => setTimeout(z, 1100));
  out[k] = { lat: +m.lat.toFixed(6), lng: +m.lng.toFixed(6), gsi: g && g.lat ? { title: g.title, level: g.level, d: hav(m.lat, m.lng, g.lat, g.lng) } : null, osm };
  console.log(k, out[k].lat, out[k].lng, '| GSI', g && g.title, g && g.level, out[k].gsi && out[k].gsi.d + 'm', '| OSM', osm && `${osm.name} ${osm.id} ${osm.d}m`);
}
fs.writeFileSync(J.replace('.json', '_pins.json'), JSON.stringify(out, null, 1));
