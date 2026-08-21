// Which research shards still need an agent.
//
// Agent dispatch is not queued — the harness rejects a launch once the concurrency
// cap is full — so shards get dispatched in waves as slots free, over a session
// long enough to be compacted several times. Recomputing "what is left" from the
// files on disk is the only record that survives that. Do not keep the list in
// your head.
//
//   node scripts/agent-status.mjs
import fs from 'node:fs';

const TRANCHES = [
  { name: 'tokyo enrich', shards: 'data/_tokyo_enrich_shards',
    done: n => `data/_tokyo_enrich_verdicts/${n}`,
    brief: 'docs/TOKYO-ENRICH-BRIEF.md', out: 'data/_tokyo_enrich_verdicts/sN.json' },
  { name: 'citation verify (absent quotes)', shards: 'data/_cite_verify_shards',
    match: /^absent_s\d+\.json$/,
    done: n => `data/_cite_verify_results/${n}`,
    brief: 'docs/CITATION-VERIFY-BRIEF.md', out: 'data/_cite_verify_results/absent_sN.json' },
  { name: 'citation verify (record sweep, by stakes)', shards: 'data/_cite_verify_shards',
    match: /^r\d+\.json$/,
    done: n => `data/_cite_verify_results/${n}`,
    brief: 'docs/CITATION-VERIFY-BRIEF.md', out: 'data/_cite_verify_results/rN.json' },
  { name: 'tokyo menus', shards: 'data/_tokyo_menu_shards',
    done: n => `data/_menu_verdicts/tokyo_${n}`,
    brief: 'docs/TOKYO-MENU-BRIEF.md', out: 'data/_menu_verdicts/tokyo_sN.json' },
];

for (const t of TRANCHES) {
  if (!fs.existsSync(t.shards)) { console.log(`${t.name}: no shard dir`); continue; }
  const all = fs.readdirSync(t.shards).filter(f => t.match ? t.match.test(f) : f.endsWith('.json'))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
  const pending = all.filter(f => !fs.existsSync(t.done(f)));
  const num = f => f.replace('.json', '');
  console.log(`\n${t.name}: ${all.length - pending.length}/${all.length} done`);
  console.log(`  brief: ${t.brief}   ->  ${t.out}`);
  const names = pending.map(num);
  console.log(`  pending: ${names.length > 24 ? names.slice(0, 24).join(' ') + ` … +${names.length - 24} more` : (names.join(' ') || '(none)')}`);
}
// Running tally of what the enrichment is actually finding. The not-found rate is
// the number that matters: the tokyo3 tranche shipped 421 records carrying no
// source at all, and how many of them are real businesses is still an open
// question. Keep it computed from the verdicts rather than remembered.
const VD = 'data/_tokyo_enrich_verdicts';
if (fs.existsSync(VD)) {
  const tally = {}; let n = 0;
  for (const f of fs.readdirSync(VD).filter(f => /^s\d+\.json$/.test(f))) {
    for (const r of JSON.parse(fs.readFileSync(`${VD}/${f}`, 'utf8'))) {
      const note = String(r.enrich_note || '');
      const k = /^NOT FOUND/i.test(note) ? 'not_found'
        : /^MISLOCATED/i.test(note) ? 'mislocated'
        : /^UNRESOLVED/i.test(note) ? 'unresolved'
        : r.loc_precise === true ? 'located' : 'other';
      tally[k] = (tally[k] || 0) + 1; n++;
    }
  }
  console.log(`\nenrichment outcomes so far (${n} records):`);
  for (const [k, v] of Object.entries(tally).sort((a, b) => b[1] - a[1]))
    console.log(`  ${k.padEnd(12)} ${String(v).padStart(4)}  ${Math.round(v / n * 100)}%`);
}

console.log('\nDispatch is capped, not queued — launch only as many as there are free slots.');
