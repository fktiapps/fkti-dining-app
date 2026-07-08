// Verify EVERYTHING: shard the candidates NOT already covered by shards 0-7 (the capped 400)
// into new shards, starting at a given base index, and specialize verify scripts for each.
// Usage: node scripts/shard-tokyo-remaining.mjs [baseIndex=8] [nShards=8]
import fs from 'fs';
const BASE_IDX = Number(process.argv[2] || 8);
const NSHARDS = Number(process.argv[3] || 8);
const near = JSON.parse(fs.readFileSync('data/_tokyo_candidates_near.json', 'utf8'));
const existingShards = JSON.parse(fs.readFileSync('data/_tokyo_shards.json', 'utf8'));
const tmpl = fs.readFileSync('scripts/tokyo-verify-workflow.js', 'utf8');

const tabId = u => { const m = (u || '').match(/\/(\d{6,})\/?/); return m ? 't' + m[1] : null; };
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-〜~！!？?本店店]/g, '').replace(/（.*?）|\(.*?\)/g, '').toLowerCase();
const key = c => tabId(c.tabelog_url) || ('n' + norm(c.name_ja));

const already = new Set();
for (const s of existingShards) for (const c of s.candidates) already.add(key(c));

const remaining = near.filter(c => !already.has(key(c)))
  .map(c => ({ name_ja: c.name_ja, area: c.area, cuisine: c.cuisine, tabelog_url: c.tabelog_url || '' }));

const shards = Array.from({ length: NSHARDS }, () => []);
remaining.forEach((c, i) => shards[i % NSHARDS].push(c));

const HEADER = `const A = (typeof args === 'string' ? JSON.parse(args) : args) || {};
const CANDS = A.candidates || [];
const SH = A.shard != null ? A.shard : '?';`;

const written = [];
shards.forEach((cands, k) => {
  const idx = BASE_IDX + k;
  if (!tmpl.includes(HEADER)) throw new Error('verify template header not found');
  let body = tmpl.replace(HEADER, `const CANDS = ${JSON.stringify(cands)};\nconst SH = ${idx};`);
  body = body.replace("name: 'tokyo-verify',", `name: 'tokyo-verify-s${idx}',`);
  const f = `scripts/tokyo-verify-shard-${idx}.js`;
  fs.writeFileSync(f, body);
  written.push({ f, n: cands.length });
});

// record the full shard set for the harvester
const allShards = existingShards.concat(shards.map((c, k) => ({ shard: BASE_IDX + k, candidates: c })));
fs.writeFileSync('data/_tokyo_shards.json', JSON.stringify(allShards, null, 0));
console.log(`remaining (beyond capped 400): ${remaining.length} | new shards ${BASE_IDX}..${BASE_IDX + NSHARDS - 1}`);
for (const { f, n } of written) console.log(`  ${f} (${n})`);
