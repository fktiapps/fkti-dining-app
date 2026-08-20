// Move menu entries whose record no longer exists out of the shipped menu files.
//
// Dedupe and merge passes remove records; their researched menus stay behind under
// the dead id. The app never renders them, so they are silent payload — but the
// research in them is real and some of it belongs to the surviving twin.
//
// So: quarantine, don't delete. Orphans move to data/_orphan_menus.json with the
// closest surviving candidates listed beside them, and a human (or a later pass)
// decides whether to re-home the items. Auto-remapping by name is exactly the
// heuristic that merged 築地食堂源 into 築地食堂源記 and deleted six real Tokyo shops
// earlier in this project; it does not get a fourth attempt.
//
//   node scripts/quarantine-orphan-menus.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const OUT = 'data/_orphan_menus.json';

// longest shared id suffix-token, purely to give a reviewer somewhere to look
// the city name appears in nearly every id, so it carries no signal at all —
// leaving it in made "nara_tsukihitei_kintetsu_nara" a candidate for everything
const tokens = (id, city) => id.split('_').filter(t => t.length > 2 && t !== city);
const candidates = (id, places, city) => {
  const t = new Set(tokens(id, city));
  return places
    .map(p => ({ p, score: tokens(p.id, city).filter(x => t.has(x)).length }))
    .filter(x => x.score >= 2)
    .sort((a, b) => b.score - a.score).slice(0, 3)
    .map(x => ({ id: x.p.id, name: x.p.name, shared: x.score }));
};

const quarantined = [];
let removed = 0;

for (const city of CITIES) {
  const path = `data/${city}_menus.json`;
  const menus = JSON.parse(fs.readFileSync(path, 'utf8'));
  const places = readCity(city).places;
  const live = new Set(places.map(p => p.id));
  const orphans = Object.keys(menus).filter(k => !live.has(k));
  if (!orphans.length) continue;

  for (const id of orphans) {
    quarantined.push({ city, id, items: (menus[id].items || []).length,
      candidates: candidates(id, places, city), menu: menus[id] });
    delete menus[id];
    removed++;
  }
  console.log(`${city.padEnd(11)} ${String(orphans.length).padStart(3)} orphan(s) removed`);
  if (APPLY) fs.writeFileSync(path, JSON.stringify(menus, null, 1));
}

if (!removed) { console.log('no orphan menu entries'); process.exit(0); }

if (APPLY) {
  // accumulate rather than overwrite — a later rebuild must not lose earlier finds
  const prior = fs.existsSync(OUT) ? JSON.parse(fs.readFileSync(OUT, 'utf8')) : [];
  const seen = new Set(prior.map(o => `${o.city}/${o.id}`));
  fs.writeFileSync(OUT, JSON.stringify([...prior, ...quarantined.filter(o => !seen.has(`${o.city}/${o.id}`))], null, 1));
}

console.log(`\n${removed} orphan menu entr(ies) -> ${OUT}`);
for (const o of quarantined)
  console.log(`  ${o.city}/${o.id} (${o.items} items)  candidates: ${o.candidates.map(c => c.id).join(', ') || '(none)'}`);
if (!APPLY) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
