// Kyoto existence review (Greg approved 2026-11-05): legacy records whose Tabelog page carries the "Closed"
// status badge (scripts/existence/kyoto-scan.jsonl, read 2026-11-05). Same convention as the Tokyo closures:
// existence.status 'closed_permanently' + hidden 'closed', evidence in the note.
import fs from 'node:fs';
import { readCity, writeCity } from './lib-city.mjs';
const TODAY = '2026-11-05';
const scan = Object.fromEntries(fs.readFileSync('scripts/existence/kyoto-scan.jsonl', 'utf8').split('\n').filter(Boolean)
  .map(l => JSON.parse(l)).map(r => [r.id, r]));
const c = readCity('kyoto');
let n = 0;
for (const p of c.places) {
  const s = scan[p.id];
  if (!s || s.badge !== 'Closed' || p.hidden) continue;
  p.existence = { status: 'closed_permanently', checked: TODAY,
    note: `PERMANENTLY CLOSED per Tabelog: ${s.tabelog} carries the "Closed" status badge (fetched ${s.scanned}); ` +
      `newest dated visit among its reviews ${s.latest_visit || 'none'} (${s.reviews} reviews).` };
  p.hidden = 'closed';
  n++; console.log('closed:', p.id, s.latest_visit);
}
writeCity('kyoto', c);
console.log(n, 'hidden');
