// Per-record verdict writer for local research ticks.
// Loads the shard file, adds one record, rewrites the whole object.
// NEVER discards records already there.
import fs from 'node:fs';
const D = 'data/_menu_verdicts';
export function put(shard, id, rec) {
  const p = `${D}/tokyo_${shard}.json`;
  const o = fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {};
  o[id] = rec;
  fs.writeFileSync(p, JSON.stringify(o, null, 1));
  console.log(`  + ${shard} ${id} (${rec.items.length} items)`);
}
export const T = '2026-09-06';
