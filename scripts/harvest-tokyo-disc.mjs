// Collect the 8 verify shards' kept[] records into data/_tokyo_disc.json (input to
// build-tokyo-merge.mjs). Reads each shard workflow's task output file (.result.kept).
import fs from 'fs';
const TASKS = [
  // shards 0-7 (first 400)
  'wejoiayj9', 'woh97nqp9', 'w362rluzs', 'wqz164n1b', 'wcx7x8l94', 'wc12jl5h6', 'w0svivyd9', 'wjazcdvox',
  // shards 8-15 (remaining 429)
  'wh76mpzb0', 'w8366pak7', 'w0n6hfzgk', 'w586w2v3b', 'w53bxm8ge', 'wj9dj5cly', 'wgnwx9sek', 'wc7zai1dz',
];
const DIR = '/tmp/claude-0/-home-user-fkti-dining-app/3ad9a1de-30bc-5204-a99e-3293ca1d76eb/tasks';

let kept = [], missing = [];
for (const t of TASKS) {
  const f = `${DIR}/${t}.output`;
  if (!fs.existsSync(f)) { missing.push(t); continue; }
  let j; try { j = JSON.parse(fs.readFileSync(f, 'utf8')); } catch { missing.push(t + '(unparsed)'); continue; }
  const k = (j.result && j.result.kept) || [];
  console.log(`shard ${j.result?.shard ?? '?'} (${t}): ${k.length} kept`);
  kept = kept.concat(k);
}
// de-dup verify output by normalized name (a shop could appear in two circles' candidate lists)
const norm = s => (s || '').replace(/[\s　・（）()「」、,.。\-〜~！!？?本店店]/g, '').replace(/（.*?）|\(.*?\)/g, '').toLowerCase();
const seen = new Set(), out = [];
for (const r of kept) { const k = norm(r.name_ja); if (!k || seen.has(k)) continue; seen.add(k); out.push(r); }

fs.writeFileSync('data/_tokyo_disc.json', JSON.stringify(out, null, 0));
const keepable = out.filter(r => r.found && r.is_restaurant && !r.closed_or_on_hold);
console.log('---');
console.log(`total kept records: ${kept.length} | deduped: ${out.length} | found&open&restaurant: ${keepable.length} | missing shards: ${missing.length ? missing : 'none'}`);
console.log('gf spread:', JSON.stringify(keepable.reduce((a, r) => (a[r.gf_confidence] = (a[r.gf_confidence] || 0) + 1, a), {})));
console.log('vegan spread:', JSON.stringify(keepable.reduce((a, r) => (a[r.vegan_status] = (a[r.vegan_status] || 0) + 1, a), {})));
console.log('category spread:', JSON.stringify(keepable.reduce((a, r) => (a[r.category] = (a[r.category] || 0) + 1, a), {})));
console.log('wrote data/_tokyo_disc.json');
