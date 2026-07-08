// Token-FREE radius pre-filter: geocode each candidate's area text via the GSI address API
// (no LLM cost) and drop only those confidently OUTSIDE ~1.0km of all four circle centers.
// Keeps every layer (no keyword bias) and KEEPS un-geocodable candidates (verify will judge).
// Reads data/_tokyo_candidates.json → writes data/_tokyo_candidates_near.json.
import fs from 'fs';
const cands = JSON.parse(fs.readFileSync('data/_tokyo_candidates.json', 'utf8'));
const CENTERS = [
  { lat: 35.7148, lng: 139.7967 }, { lat: 35.6595, lng: 139.7005 },
  { lat: 35.7017, lng: 139.7539 }, { lat: 35.6896, lng: 139.7006 },
];
const KEEP_KM = 1.0; // generous: area text geocodes to a chō centroid, not the exact door.
const hav = (a, b, c, d) => { const R = 6371, t = Math.PI / 180; const x = Math.sin((c - a) * t / 2) ** 2 + Math.cos(a * t) * Math.cos(c * t) * Math.sin((d - b) * t / 2) ** 2; return R * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)); };
const minDist = (lat, lng) => Math.min(...CENTERS.map(c => hav(c.lat, c.lng, lat, lng)));

// Clean area → a geocodable JA place string.
const cleanArea = a => {
  let s = (a || '').split(/[（(]/)[0].trim();               // drop parenthetical romaji/landmark
  s = s.replace(/\s*[-–—]\s*.*$/, '').replace(/\s+\d.*$/, '').trim();
  if (!/[都道府県区市町]/.test(s) && !/東京/.test(s)) s = '東京都' + s;
  else if (!/東京/.test(s)) s = '東京都' + s;
  return s;
};
const geocode = async q => {
  try {
    const r = await fetch('https://msearch.gsi.go.jp/address-search/AddressSearch?q=' + encodeURIComponent(q));
    if (!r.ok) return null;
    const j = await r.json();
    if (Array.isArray(j) && j[0] && j[0].geometry && j[0].geometry.coordinates) {
      const [lng, lat] = j[0].geometry.coordinates; return { lat, lng };
    }
  } catch { }
  return null;
};

// modest concurrency
const CONC = 8;
let i = 0, kept = [], dropped = [], nogeo = [];
async function worker() {
  while (i < cands.length) {
    const c = cands[i++];
    const q = cleanArea(c.area);
    const g = await geocode(q);
    if (!g) { c._geo = null; nogeo.push(c); kept.push(c); continue; }
    const d = minDist(g.lat, g.lng);
    c._geo = { ...g, d: +d.toFixed(2) };
    if (d <= KEEP_KM) kept.push(c); else dropped.push(c);
  }
}
await Promise.all(Array.from({ length: CONC }, worker));

fs.writeFileSync('data/_tokyo_candidates_near.json', JSON.stringify(kept, null, 0));
console.log(`geocoded ${cands.length} | kept(≤${KEEP_KM}km or no-geo): ${kept.length} | dropped(far): ${dropped.length} | un-geocodable(kept): ${nogeo.length}`);
console.log('kept by circle:', JSON.stringify(kept.reduce((a, c) => (a[c.circle] = (a[c.circle] || 0) + 1, a), {})));
console.log('sample dropped-far:', dropped.slice(0, 15).map(c => `${(c.area || '').slice(0, 16)}~${c._geo.d}km`).join(' | '));
