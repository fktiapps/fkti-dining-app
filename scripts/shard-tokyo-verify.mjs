// Cap candidates per circle by discovery-prominence order (rounds 1-2 lead), then round-robin
// into N shards for the 16-wide sharded verify. Prints each shard's args JSON (one per line) to
// paste into a Workflow launch, and writes data/_tokyo_shards.json for the record.
import fs from 'fs';
const PER_CIRCLE = Number(process.argv[2] || 100);
const NSHARDS = Number(process.argv[3] || 8);
const cands = JSON.parse(fs.readFileSync('data/_tokyo_candidates_near.json', 'utf8'));

// cap per circle (array already in per-circle discovery order)
const byCircle = {};
for (const c of cands) (byCircle[c.circle] = byCircle[c.circle] || []).push(c);
let capped = [];
for (const [circle, list] of Object.entries(byCircle)) capped = capped.concat(list.slice(0, PER_CIRCLE));

// strip to the fields verify needs (keep payload small)
const slim = capped.map(c => ({ name_ja: c.name_ja, area: c.area, cuisine: c.cuisine, tabelog_url: c.tabelog_url || '' }));

// round-robin into shards (balances circles across shards)
const shards = Array.from({ length: NSHARDS }, () => []);
slim.forEach((c, i) => shards[i % NSHARDS].push(c));

fs.writeFileSync('data/_tokyo_shards.json', JSON.stringify(shards.map((s, i) => ({ shard: i, candidates: s })), null, 0));
console.log(`capped ${cands.length} → ${capped.length} (≤${PER_CIRCLE}/circle) | ${NSHARDS} shards of ~${Math.ceil(slim.length / NSHARDS)}`);
console.log('by circle (capped):', JSON.stringify(capped.reduce((a, c) => (a[c.circle] = (a[c.circle] || 0) + 1, a), {})));
console.log('--- shard sizes:', shards.map(s => s.length).join(', '));
