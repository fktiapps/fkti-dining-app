// Harvest the QC and/or ramen-pass workflow outputs into the files their appliers expect.
// Usage: node scripts/harvest-tokyo-passes.mjs qc <taskId>     -> data/_tokyo_qc.json
//        node scripts/harvest-tokyo-passes.mjs ramen <taskId>  -> data/_ramen_enrich.json
import fs from 'fs';
const DIR = '/tmp/claude-0/-home-user-fkti-dining-app/3ad9a1de-30bc-5204-a99e-3293ca1d76eb/tasks';
const [kind, task] = process.argv.slice(2);
if (!kind || !task) { console.error('usage: harvest-tokyo-passes.mjs <qc|ramen> <taskId>'); process.exit(1); }
const f = `${DIR}/${task}.output`;
const j = JSON.parse(fs.readFileSync(f, 'utf8'));
const kept = (j.result && j.result.kept) || [];
const out = kind === 'qc' ? 'data/_tokyo_qc.json' : 'data/_ramen_enrich.json';
fs.writeFileSync(out, JSON.stringify(kept, null, 0));
console.log(`${kind}: ${kept.length} records -> ${out}`);
if (kind === 'qc') {
  const dg = kept.filter(k => k.verdict === 'downgrade').length;
  console.log(`  verdicts: ${dg} downgrade / ${kept.length - dg} keep`);
}
