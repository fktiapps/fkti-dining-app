// Generate 8 self-contained verify workflow scripts (candidates embedded, no args needed) from
// data/_tokyo_shards.json, by specializing scripts/tokyo-verify-workflow.js per shard.
// Launch each by scriptPath → 8 workflows × 2 concurrent ≈ 16-wide verify + Opus recheck.
import fs from 'fs';
const shards = JSON.parse(fs.readFileSync('data/_tokyo_shards.json', 'utf8'));
const tmpl = fs.readFileSync('scripts/tokyo-verify-workflow.js', 'utf8');

const HEADER = `const A = (typeof args === 'string' ? JSON.parse(args) : args) || {};
const CANDS = A.candidates || [];
const SH = A.shard != null ? A.shard : '?';`;

const files = [];
for (const s of shards) {
  if (!tmpl.includes(HEADER)) throw new Error('verify template header not found — regenerate tokyo-verify-workflow.js first');
  let body = tmpl.replace(HEADER, `const CANDS = ${JSON.stringify(s.candidates)};\nconst SH = ${s.shard};`);
  body = body.replace("name: 'tokyo-verify',", `name: 'tokyo-verify-s${s.shard}',`);
  const f = `scripts/tokyo-verify-shard-${s.shard}.js`;
  fs.writeFileSync(f, body);
  files.push({ f, n: s.candidates.length });
}
console.log('wrote', files.length, 'shard scripts:');
for (const { f, n } of files) console.log(`  ${f} (${n} candidates)`);
