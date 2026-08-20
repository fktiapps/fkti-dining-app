// Shard a menu worklist into per-agent files.
//
// Interleaved, not chunked: consecutive ids in the worklist tend to share a source
// (the same discovery sweep, the same neighbourhood, often the same directory
// page), so a contiguous slice makes one agent's whole shard succeed or fail
// together. Dealing round-robin spreads that risk, and spreads the easy
// website-having records evenly instead of handing one agent all the hard ones.
//
//   node scripts/gen-menu-shards.mjs data/_menu_worklist2/tokyo_full.json tokyo_menu 15
import fs from 'node:fs';
import path from 'node:path';

const [src, tag, sizeArg] = process.argv.slice(2);
if (!src || !tag) { console.error('usage: gen-menu-shards.mjs <worklist.json> <tag> [perShard]'); process.exit(1); }
const per = Number(sizeArg || 15);

const rows = JSON.parse(fs.readFileSync(src, 'utf8'));
const n = Math.ceil(rows.length / per);
const shards = Array.from({ length: n }, () => []);
rows.forEach((r, i) => shards[i % n].push(r));

const dir = `data/_${tag}_shards`;
fs.rmSync(dir, { recursive: true, force: true });
fs.mkdirSync(dir, { recursive: true });
shards.forEach((s, i) => fs.writeFileSync(path.join(dir, `s${i}.json`), JSON.stringify(s, null, 1)));
fs.mkdirSync(`data/_${tag}_results`, { recursive: true });

console.log(`${rows.length} rows -> ${n} shard(s) of ~${per} in ${dir}`);
console.log(`results dir: data/_${tag}_results`);
