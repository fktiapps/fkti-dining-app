// Find duplicate records that name-matching misses.
//
// The Tokyo 3-mile sweep re-discovered shops the earlier passes already had, but
// wrote their names differently (romaji vs katakana vs "Name (Reading)"), so a
// string match found nothing. The result is the same restaurant on the map twice
// with DIFFERENT gf_confidence labels — one of which may be a human-gated
// "dedicated" sitting next to an ungated "options" pin ~1km away.
//
//   node scripts/find-dupes.mjs tokyo
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const cities = process.argv.slice(2).length ? process.argv.slice(2) : CITIES;

// strip decorations, keep the distinctive core in both scripts
const core = s => String(s)
  .replace(/[（(].*?[）)]/g, ' ')          // drop parenthetical readings
  .replace(/(店|本店|支店|-ten|honten)\b/g, ' ')
  .toLowerCase()
  .replace(/[^a-z0-9぀-ヿ一-鿿]/g, '');

const host = u => { try { return new URL(u).host.replace(/^www\./, ''); } catch { return null; } };
const km = (a, b) => {
  const R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180;
  const la = a.lat * Math.PI / 180, lb = b.lat * Math.PI / 180;
  const h = Math.sin(dLat/2)**2 + Math.cos(la)*Math.cos(lb)*Math.sin(dLng/2)**2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const GENERIC = new Set(['tabelog.com','instagram.com','facebook.com','twitter.com','x.com',
  'goo.ne.jp','gnavi.co.jp','hotpepper.jp','r.gnavi.co.jp','happycow.net','retty.me','note.com']);

for (const city of cities) {
  const places = readCity(city).places;
  const groups = new Map();

  const add = (key, p) => { if (!groups.has(key)) groups.set(key, new Set()); groups.get(key).add(p); };

  for (const p of places) {
    const h = host(p.website);
    if (h && !GENERIC.has(h)) add('site:' + h, p);
    const c = core(p.name);
    if (c.length >= 3) add('name:' + c, p);
  }

  // name containment across scripts (e.g. "biossa" inside "biossaビオッサ")
  const cores = places.map(p => ({ p, c: core(p.name) })).filter(x => x.c.length >= 4);
  for (let i = 0; i < cores.length; i++)
    for (let k = i + 1; k < cores.length; k++) {
      const a = cores[i], b = cores[k];
      if (a.c === b.c) continue;
      if ((a.c.includes(b.c) || b.c.includes(a.c)) && km(a.p, b.p) < 3) {
        add('sub:' + [a.p.id, b.p.id].sort().join('|'), a.p); add('sub:' + [a.p.id, b.p.id].sort().join('|'), b.p);
      }
    }

  const seenPair = new Set(), out = [];
  for (const [key, set] of groups) {
    const rs = [...set];
    if (rs.length < 2) continue;
    const sig = rs.map(r => r.id).sort().join('|');
    if (seenPair.has(sig)) continue;
    seenPair.add(sig);
    out.push({ key, rs });
  }

  console.log(`\n=== ${city}: ${out.length} suspected duplicate groups ===`);
  for (const { key, rs } of out) {
    const tiers = new Set(rs.map(r => r.gf_confidence));
    const gated = rs.some(r => r.safety?.owner_signoff?.decision);
    const dist = rs.length === 2 ? km(rs[0], rs[1]).toFixed(2) + 'km' : '';
    const flag = (tiers.size > 1 ? ' ⚠ CONFLICTING TIERS' : '') + (gated ? ' ⚠ one is human-gated' : '');
    console.log(`\n  [${key}] ${dist}${flag}`);
    rs.forEach(r => console.log(`    ${r.id.padEnd(34)} ${String(r.gf_confidence).padEnd(10)} ${r.loc_approx ? 'approx' : 'exact '} ${r.name.slice(0, 44)}`));
  }
}
