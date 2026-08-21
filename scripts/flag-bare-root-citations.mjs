// Safety claims cited to a site's bare root.
//
// A URL with no path — https://alleco.jp/ , https://jp.japan-glutenfree.com/ — cannot
// evidence anything venue-specific. It points at whatever that site happens to show
// today. Baker theta's "high" GF label rested on four such citations to a site that
// has never published a word about the shop, and one shard found four claims citing
// japan-glutenfree's root, which carries no venue entries at all.
//
// A root is usually fine, though: a small shop's own one-page site genuinely lives
// there and IS the venue's own statement. Matching against the record's `website`
// field was not enough — plenty of records leave it null while citing the shop's own
// domain, and that first pass flagged 49 claims of which most were mantyo.com,
// tenhide.jp and other shops citing themselves.
//
// The real defect is a root citation on a host that covers MANY venues. One shop's
// domain describes one shop; a guide's front page describes nothing in particular. So
// a host is treated as a guide when different records cite it, and only then does a
// bare root stop counting as evidence.
//
//   node scripts/flag-bare-root-citations.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-20';
const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];

const isBareRoot = u => {
  try { const x = new URL(u); return (x.pathname === '/' || x.pathname === '') && !x.search && !x.hash; }
  catch { return false; }
};
const host = u => { try { return new URL(u).hostname.replace(/^www\./, ''); } catch { return null; } };

// First pass: which hosts are cited by more than one record anywhere in the dataset?
const hostRecords = new Map();
for (const city of CITIES)
  for (const r of readCity(city).places)
    for (const f of EV)
      for (const e of (r.safety?.[f]) || []) {
        if (typeof e !== 'object' || !e.source) continue;
        const h = host(e.source); if (!h) continue;
        if (!hostRecords.has(h)) hostRecords.set(h, new Set());
        hostRecords.get(h).add(r.id);
      }
const isGuide = h => (hostRecords.get(h)?.size || 0) >= 3;

const flagged = [];
for (const city of CITIES) {
  const j = readCity(city);
  let dirty = false;
  for (const r of j.places) {
    if (r.hidden) continue;
    const ownHost = host(r.website || '');
    for (const f of EV) {
      for (const e of (r.safety?.[f]) || []) {
        if (typeof e !== 'object' || !e.source || !isBareRoot(e.source)) continue;
        if (e.unsupported || e.verified) continue;      // already judged by a human-directed agent
        const h = host(e.source);
        if (h && ownHost && h === ownHost) continue;    // the shop's own one-page site
        if (!isGuide(h)) continue;                      // a single-venue domain describes that venue
        flagged.push({ city, id: r.id, name: r.name, field: f, source: e.source,
                       gf: r.gf_confidence, text: String(e.text || '').slice(0, 90) });
        if (APPLY) { e.root_citation = DATE; dirty = true; }
      }
    }
  }
  if (dirty) writeCity(city, j);
}

const byHost = flagged.reduce((a, x) => (a[host(x.source)] = (a[host(x.source)] || 0) + 1, a), {});
console.log(`${flagged.length} safety claim(s) cited to a bare site root that is not the shop's own\n`);
console.log('by host:');
Object.entries(byHost).sort((a, b) => b[1] - a[1]).slice(0, 15)
  .forEach(([h, n]) => console.log(`  ${String(n).padStart(4)}  ${h}`));
fs.writeFileSync('data/_root_citations.json', JSON.stringify(flagged, null, 1));
if (!APPLY && flagged.length) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
