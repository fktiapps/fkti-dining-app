// Deep-enrichment worklist generator for the Tokyo 3-mile LIGHT tranche.
// Selects every record that is still a light/approx pin (loc_approx:'block') and
// shards it for a fetch-capable enrichment workflow. Runs offline — no network.
//
//   node scripts/gen-tokyo3-enrich.mjs [perShard]
//
// Writes:
//   data/_tokyo3_enrich_targets.json  — [{shard, targets:[{id,name,neighborhood,website,gmaps,cuisine,category}]}]
// Then launch scripts/tokyo3-enrich-workflow.js with each shard (see docs/DEEP-ENRICH-RUNBOOK.md).
import fs from 'fs';
const PER = Number(process.argv[2] || 10);
const d = JSON.parse(fs.readFileSync('data/tokyo.json', 'utf8'));
const light = d.places.filter(p => p.loc_approx === 'block'); // the neighborhood-centroid approx pins
const targets = light.map(p => ({
  id: p.id, name: p.name, neighborhood: p.neighborhood || '',
  website: p.website || '', gmaps: p.gmaps || '', menu_url: p.menu_url || '',
  cuisine: p.cuisine || '', category: p.category,
}));
const shards = [];
for (let i = 0; i < targets.length; i += PER) shards.push({ shard: shards.length, targets: targets.slice(i, i + PER) });
fs.writeFileSync('data/_tokyo3_enrich_targets.json', JSON.stringify(shards, null, 1));
console.log(`light records to enrich: ${targets.length} → ${shards.length} shards of ≤${PER}`);
console.log(`by category:`, JSON.stringify(light.reduce((a, p) => (a[p.category] = (a[p.category] || 0) + 1, a), {})));
