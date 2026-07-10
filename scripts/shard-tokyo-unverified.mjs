// Re-shard only the candidates NOT yet verified (spend limit cut wave 1 short) into fresh
// geocode-free verify scripts. Usage: node scripts/shard-tokyo-unverified.mjs [baseIdx=16] [nShards=12]
import fs from 'fs';
const BASE_IDX = Number(process.argv[2] || 16);
const NSHARDS = Number(process.argv[3] || 12);
const shards = JSON.parse(fs.readFileSync('data/_tokyo_shards.json', 'utf8'));
const verified = JSON.parse(fs.readFileSync('data/_tokyo_disc.json', 'utf8'));
const tmpl = fs.readFileSync('scripts/tokyo-verify-workflow.js', 'utf8');

const tabId = u => { const m = (u || '').match(/\/(\d{6,})\/?/); return m ? 't' + m[1] : null; };
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-〜~！!？?本店店]/g, '').replace(/（.*?）|\(.*?\)/g, '').toLowerCase();
const doneKeys = new Set();
for (const r of verified) { doneKeys.add('n' + norm(r.name_ja)); const t = tabId(r.tabelog_url); if (t) doneKeys.add(t); if (r.lead) doneKeys.add('n' + norm(r.lead)); }

const all = [];
for (const s of shards) for (const c of s.candidates) all.push(c);
const seen = new Set();
const todo = [];
for (const c of all) {
  const nk = 'n' + norm(c.name_ja), tk = tabId(c.tabelog_url);
  if (doneKeys.has(nk) || (tk && doneKeys.has(tk))) continue;   // already verified
  const dedupK = tk || nk;
  if (seen.has(dedupK)) continue; seen.add(dedupK);
  todo.push({ name_ja: c.name_ja, area: c.area, cuisine: c.cuisine, tabelog_url: c.tabelog_url || '' });
}

const out = Array.from({ length: NSHARDS }, () => []);
todo.forEach((c, i) => out[i % NSHARDS].push(c));

const HEADER = `const A = (typeof args === 'string' ? JSON.parse(args) : args) || {};
const CANDS = A.candidates || [];
const SH = A.shard != null ? A.shard : '?';`;
if (!tmpl.includes(HEADER)) throw new Error('verify template header not found');

const written = [];
out.forEach((cands, k) => {
  const idx = BASE_IDX + k;
  let body = tmpl.replace(HEADER, `const CANDS = ${JSON.stringify(cands)};\nconst SH = ${idx};`);
  body = body.replace("name: 'tokyo-verify',", `name: 'tokyo-verify-s${idx}',`);
  fs.writeFileSync(`scripts/tokyo-verify-shard-${idx}.js`, body);
  written.push(idx + ':' + cands.length);
});
// record the new shard set for the harvester (append)
const allShards = shards.concat(out.map((c, k) => ({ shard: BASE_IDX + k, candidates: c })));
fs.writeFileSync('data/_tokyo_shards.json', JSON.stringify(allShards, null, 0));
console.log(`unverified: ${todo.length} | shards ${BASE_IDX}..${BASE_IDX + NSHARDS - 1}: ${written.join(', ')}`);
