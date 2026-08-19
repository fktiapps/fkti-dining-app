// Merge duplicate records that plain string matching misses.
//
// The 3-mile sweep re-discovered shops the earlier passes already had but wrote
// their names differently, so the same restaurant sits on the map twice with
// DIFFERENT gf_confidence labels — sometimes a human-gated "dedicated" next to an
// ungated "options" pin a kilometre away.
//
// MATCHING RULE — exact ALIAS equality, and nothing looser.
// Records are named "日本語 (Romaji Reading)" while the light sweep wrote only one
// half, so we compare alias SETS: the part before the parenthetical, each
// slash-separated alternative inside it, and the whole name. Two records match
// when they share an alias exactly.
//
// Two looser rules were tried and both destroyed real data:
//   - substring containment merged 築地食堂源 with 築地食堂源記 (different
//     restaurants) and 麺屋武蔵 with 麺屋武蔵神山 (different branches of a chain);
//   - "same website within 1km" merged every distinct restaurant inside a single
//     hotel (Todaya's coffee shop with its dining room) and four separate shops in
//     Nagoya's Kinshachi Yokocho food street. A shared domain means shared
//     ownership, not shared identity.
//
// SURVIVOR SELECTION is a safety decision: a human-gated record always wins, then
// exact coordinates over a neighbourhood centroid, then depth. The survivor keeps
// its own gf_confidence — an ungated light record must never overwrite a tier Greg
// signed off.
//
//   node scripts/merge-dupes.mjs            # all cities
//   node scripts/merge-dupes.mjs tokyo
//   node scripts/merge-dupes.mjs --dry
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const args = process.argv.slice(2);
const APPLY = !args.includes('--dry');
const cities = args.filter(a => !a.startsWith('--')).length
  ? args.filter(a => !a.startsWith('--')) : CITIES;

const norm = s => String(s).toLowerCase().replace(/[^a-z0-9぀-ヿ一-鿿]/g, '');

function aliases(name) {
  const s = String(name);
  const out = new Set();
  const m = s.match(/^([^（(]*)[（(]([^）)]*)[）)]/);
  if (m) {
    out.add(norm(m[1]));
    for (const alt of m[2].split(/[/／・]/)) out.add(norm(alt));
  }
  out.add(norm(s.replace(/[（(].*?[）)]/g, ' ')));
  out.delete('');
  return [...out].filter(a => a.length >= 4);
}

const km = (a, b) => {
  const R = 6371, dLat = (b.lat - a.lat) * Math.PI / 180, dLng = (b.lng - a.lng) * Math.PI / 180;
  const la = a.lat * Math.PI / 180, lb = b.lat * Math.PI / 180;
  const h = Math.sin(dLat / 2) ** 2 + Math.cos(la) * Math.cos(lb) * Math.sin(dLng / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const filled = v => v !== null && v !== undefined && v !== '' &&
  !(Array.isArray(v) && !v.length) &&
  !(typeof v === 'object' && !Array.isArray(v) && !Object.keys(v).length);

function fillFrom(t, d) {
  for (const [k, v] of Object.entries(d)) {
    if (['id', 'gf_confidence', 'gf_label', 'lat', 'lng', 'loc_approx'].includes(k)) continue;
    if (!filled(t[k]) && filled(v)) { t[k] = v; continue; }
    if (v && typeof v === 'object' && !Array.isArray(v) &&
        t[k] && typeof t[k] === 'object' && !Array.isArray(t[k])) fillFrom(t[k], v);
  }
}

const score = r => (r.safety?.owner_signoff?.decision ? 1e9 : 0) +
                   (r.loc_approx ? 0 : 1e6) + JSON.stringify(r).length;

const review = [];
let grandTotal = 0;

for (const city of cities) {
  const j = readCity(city);
  const places = j.places;
  const parent = new Map(places.map(p => [p.id, p.id]));
  const find = x => { while (parent.get(x) !== x) x = parent.get(x); return x; };
  const union = (a, b) => { const ra = find(a), rb = find(b); if (ra !== rb) parent.set(ra, rb); };

  const alias = new Map(places.map(p => [p.id, aliases(p.name)]));
  for (let i = 0; i < places.length; i++) {
    for (let k = i + 1; k < places.length; k++) {
      const a = places[i], b = places[k];
      const A = alias.get(a.id), B = alias.get(b.id);
      if (!A.some(x => B.includes(x))) continue;
      const d = km(a, b);
      if (d < 2) union(a.id, b.id);
      else review.push({ city, reason: `alias match but ${d.toFixed(1)}km apart`,
                         ids: [a.id, b.id], names: [a.name, b.name] });
    }
  }

  const groups = new Map();
  for (const p of places) {
    const r = find(p.id);
    if (!groups.has(r)) groups.set(r, []);
    groups.get(r).push(p);
  }

  const drop = new Set();
  const survivorOf = new Map();   // droppedId -> survivingId, for re-keying menus
  let merged = 0;
  for (const [, rs] of groups) {
    if (rs.length < 2) continue;
    rs.sort((a, b) => score(b) - score(a));
    const [keep, ...rest] = rs;
    const tierConflict = new Set(rs.map(r => r.gf_confidence)).size > 1;
    for (const d of rest) { fillFrom(keep, d); drop.add(d.id); survivorOf.set(d.id, keep.id); }
    if (tierConflict) {
      keep.merge_note = `Merged ${rest.length} duplicate record(s): ` +
        rest.map(d => `${d.id} (${d.gf_confidence})`).join(', ') +
        `. Kept this record's tier "${keep.gf_confidence}"` +
        (keep.safety?.owner_signoff?.decision ? ' (human-gated).' : '.');
    }
    merged++;
    console.log(`${city}: ${rs.length} -> ${keep.id} [${keep.gf_confidence}${keep.safety?.owner_signoff?.decision ? ' GATED' : ''}] ${keep.name.slice(0, 42)}`);
    rest.forEach(d => console.log(`      drop ${d.id} [${d.gf_confidence}] ${d.name.slice(0, 36)}`));
  }

  if (APPLY && drop.size) {
    const before = places.length;
    j.places = places.filter(p => !drop.has(p.id));
    writeCity(city, j);
    grandTotal += drop.size;
    console.log(`${city}: ${before} -> ${j.places.length} (${merged} groups merged)\n`);
    // Re-key menus rather than deleting them: the menu belongs to the shop, not
    // to whichever duplicate record happened to hold it. Only drop an entry when
    // the survivor already has its own.
    const mp = `data/${city}_menus.json`;
    if (fs.existsSync(mp)) {
      const m = JSON.parse(fs.readFileSync(mp, 'utf8'));
      let moved = 0, dropped = 0;
      for (const [dropId, keepId] of survivorOf) {
        if (!m[dropId]) continue;
        if (!m[keepId]) { m[keepId] = m[dropId]; moved++; }
        else dropped++;
        delete m[dropId];
      }
      if (moved || dropped) {
        fs.writeFileSync(mp, JSON.stringify(m, null, 1));
        console.log(`${city}: menus re-keyed to survivor ${moved}, redundant dropped ${dropped}`);
      }
    }
  }
}

fs.writeFileSync('data/_dupe_review.json', JSON.stringify(review, null, 1));
console.log(`\n${grandTotal} duplicate records removed; ${review.length} far-apart alias matches left for manual review -> data/_dupe_review.json`);
