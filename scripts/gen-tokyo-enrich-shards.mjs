// Shard the remaining Tokyo deep-enrich targets.
//
// Priority order follows the runbook and what the app is for: SHOJIN first (a
// celiac/vegan relies on it), then MOM_AND_POP (Tokyo has the dataset's worst
// mom-and-pop story coverage — 197 of 379 — and the story IS the point of that
// layer), then OMNI.
import fs from 'node:fs';
import { readCity } from './lib-city.mjs';

const PER = Number(process.argv[2]) || 12;
const places = new Map(readCity('tokyo').places.map(r => [r.id, r]));
const done = new Set(JSON.parse(fs.readFileSync('data/_tokyo3_enrich.json', 'utf8')).map(x => x.id));
const targets = JSON.parse(fs.readFileSync('data/_tokyo3_enrich_priority.json', 'utf8'))
  .filter(t => !done.has(t.id) && places.has(t.id));

const RANK = { SHOJIN: 0, VEGAN: 0, GF: 0, BOTH: 0, MOM_AND_POP: 1, OMNI: 2 };
targets.sort((a, b) => (RANK[a.category] ?? 3) - (RANK[b.category] ?? 3));

// carry the live record's current state so the agent knows what is already known
const enriched = targets.map(t => {
  const r = places.get(t.id);
  return {
    id: r.id, name: r.name, category: r.category,
    neighborhood: r.neighborhood, cuisine: r.cuisine,
    lat: r.lat, lng: r.lng, loc_approx: r.loc_approx || null,
    website: r.website || null, gmaps: r.gmaps || null,
    gf_confidence: r.gf_confidence, vegan_status: r.vegan_status,
    has_bio: Boolean(r.chef_bio && r.chef_bio.background),
    notes: String(r.notes || '').slice(0, 200),
  };
});

fs.mkdirSync('data/_tokyo_enrich_shards', { recursive: true });
let n = 0;
for (let i = 0; i < enriched.length; i += PER) {
  const shard = enriched.slice(i, i + PER);
  fs.writeFileSync(`data/_tokyo_enrich_shards/s${n}.json`, JSON.stringify(shard, null, 1));
  n++;
}
const byCat = enriched.reduce((m, t) => (m[t.category] = (m[t.category] || 0) + 1, m), {});
console.log(`${enriched.length} targets -> ${n} shards of ${PER}`);
console.log(byCat);
console.log(`approx coords among them: ${enriched.filter(t => t.loc_approx).length}`);
