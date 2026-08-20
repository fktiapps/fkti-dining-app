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
  { name: 'tokyo menus', shards: 'data/_tokyo_menu_shards',
    done: n => `data/_menu_verdicts/tokyo_${n}`,
    brief: 'docs/TOKYO-MENU-BRIEF.md', out: 'data/_menu_verdicts/tokyo_sN.json' },
];

for (const t of TRANCHES) {
  if (!fs.existsSync(t.shards)) { console.log(`${t.name}: no shard dir`); continue; }
  const all = fs.readdirSync(t.shards).filter(f => f.endsWith('.json'))
    .sort((a, b) => Number(a.match(/\d+/)[0]) - Number(b.match(/\d+/)[0]));
  const pending = all.filter(f => !fs.existsSync(t.done(f)));
  const num = f => f.replace('.json', '');
  console.log(`\n${t.name}: ${all.length - pending.length}/${all.length} done`);
  console.log(`  brief: ${t.brief}   ->  ${t.out}`);
  console.log(`  pending: ${pending.map(num).join(' ') || '(none)'}`);
}
console.log('\nDispatch is capped, not queued — launch only as many as there are free slots.');
