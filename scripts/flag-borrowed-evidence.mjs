// Records whose evidence belongs to a different shop.
//
// MOON and BACK Kiyamachi Alley cites ten sources for its safety claims. Every one of
// them prints the address of the OTHER branch, a kilometre away: the separate noodle
// boiler, the wooden spoons, the fryer reports, "staff know what celiac means" — all
// observations of a different kitchen, presented as if they described this one.
//
// A branch is exactly where this is most dangerous and least visible. The name
// matches, the operator matches, the claims are all true of somebody — just not of
// the shop the pin sends you to.
//
// Detecting it needs care, because sharing sources is usually innocent: a city
// gluten-free guide legitimately covers thirty restaurants and every one may cite it.
// The signal is not "shares a source" but "has almost NO evidence of its own":
//
//   - ignore any source cited by more than GUIDE_CITED records — that is a guide,
//     and a guide covering many shops is doing its job
//   - flag a record when most of its remaining sources are shared with ONE other
//     record, and that record is far enough away to be a different premises
//
// A same-brand pair is NOT an exemption, and I nearly wrote one. The instinct is that
// MOS Burger and MOS & CAFE citing one corporate allergen policy is fine — which it
// is — so same-brand pairs look like noise. But MOON and BACK is also a same-brand
// pair, and it is the whole reason this exists: the shared sources there are
// branch-specific REVIEWS, not corporate policy. Sibling branches are where borrowed
// evidence is most dangerous and hardest to see, so they are flagged hardest.
//
// The real distinction is what KIND of page is shared, and no heuristic here can tell
// a corporate allergen policy from a review of one kitchen. Six records is a
// reviewable number; a human decides.
//
//   node scripts/flag-borrowed-evidence.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-20';
const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];
const url = u => typeof u === 'string' && /^https?:\/\//.test(u);
const GUIDE_CITED = 4;     // a source used by 5+ records is a guide, not a venue page
const MIN_SHARED  = 2;     // below this, coincidence
const BORROW_FRAC = 0.5;   // most of a record's own evidence
const MIN_METRES  = 150;   // closer than this and it is plausibly the same premises

const km = (a, b, c, d) => {
  const R = 6371, r = x => x * Math.PI / 180;
  const h = Math.sin(r(c - a) / 2) ** 2 + Math.cos(r(a)) * Math.cos(r(c)) * Math.sin(r(d - b) / 2) ** 2;
  return 2 * R * Math.asin(Math.sqrt(h));
};

const flagged = [];
for (const city of CITIES) {
  const j = readCity(city);
  const recs = j.places.filter(r => !r.hidden).map(r => {
    const s = new Set();
    for (const f of EV) for (const e of (r.safety?.[f]) || [])
      if (typeof e === 'object' && url(e?.source)) s.add(e.source);
    return { r, sources: s };
  }).filter(x => x.sources.size >= MIN_SHARED);

  // how many records in this city cite each source
  const useCount = new Map();
  for (const { sources } of recs) for (const u of sources) useCount.set(u, (useCount.get(u) || 0) + 1);
  const venuey = u => (useCount.get(u) || 0) <= GUIDE_CITED;

  for (const A of recs) {
    const own = [...A.sources].filter(venuey);
    if (own.length < MIN_SHARED) continue;
    for (const B of recs) {
      if (A.r.id === B.r.id) continue;
      const shared = own.filter(u => B.sources.has(u));
      if (shared.length < MIN_SHARED) continue;
      const frac = shared.length / own.length;
      if (frac < BORROW_FRAC) continue;
      const d = km(A.r.lat, A.r.lng, B.r.lat, B.r.lng) * 1000;
      if (d < MIN_METRES) continue;                 // same building, fine
      flagged.push({ city, id: A.r.id, name: A.r.name, gf: A.r.gf_confidence,
        borrowed_from: B.r.id, other_name: B.r.name,
        shared: shared.length, of: own.length, metres: Math.round(d) });
      break;
    }
  }

  if (APPLY) {
    const byId = new Map(j.places.map(p => [p.id, p]));
    for (const f of flagged.filter(f => f.city === city)) {
      const r = byId.get(f.id);
      r.evidence_borrowed = { from: f.borrowed_from, other_name: f.other_name,
        shared: f.shared, of: f.of, metres: f.metres, date: DATE,
        note: `${f.shared} of this record's ${f.of} venue-specific sources are cited by ` +
              `${f.other_name}, ${f.metres}m away. Those claims may describe that ` +
              'kitchen rather than this one — verify before trusting the tier.' };
    }
    fs.writeFileSync(`data/${city}.json`, city === 'kyoto' || city === 'tokyo'
      ? JSON.stringify(j) : JSON.stringify(j, null, 1));
  }
}

console.log(`${flagged.length} record(s) whose evidence may belong to another shop\n`);
for (const f of flagged)
  console.log(`  ${f.city}/${String(f.name).slice(0, 30).padEnd(32)} ${String(f.gf).padEnd(10)} ` +
    `${f.shared}/${f.of} sources shared with "${String(f.other_name).slice(0, 28)}" ${f.metres}m away`);
fs.writeFileSync('data/_borrowed_evidence.json', JSON.stringify(flagged, null, 1));
if (!APPLY && flagged.length) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
