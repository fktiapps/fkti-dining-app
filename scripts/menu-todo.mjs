// What menu research actually remains. The one honest answer to "what is left?".
//
// TWO TRAPS THIS EXISTS TO AVOID, both of which have already cost real work:
//
// 1. scripts/agent-status.mjs calls a shard DONE when its output FILE exists. Shards
//    are almost always PARTIAL, because agents and scheduled runs get cut off
//    mid-shard, so that count is routinely wrong by two thirds.
//
// 2. Testing only "absent from <city>_menus.json" re-selects HONEST EMPTIES forever.
//    A shop that publishes no findable menu gets items: [] — a correct, complete
//    result — and merge-menus.mjs rightly declines to merge an empty menu, so the
//    record never appears in the menus file. 新宿 屋台苑 was confirmed empty and came
//    straight back up as "needs research" on the next tick. All 8 empties would have
//    been re-researched on every run, forever.
//
// A record needs work only if it is VISIBLE, absent from the merged menus file, AND
// carries no entry in any verdict file. An entry — even an empty one — means somebody
// looked.
//
//   node scripts/menu-todo.mjs [city]        # default tokyo
//   node scripts/menu-todo.mjs tokyo --next  # just the next shard to work on
import fs from 'node:fs';
import { readCity } from './lib-city.mjs';

const city = process.argv.find(a => !a.startsWith('-') && a !== process.argv[0] && a !== process.argv[1]) || 'tokyo';
const NEXT_ONLY = process.argv.includes('--next');

const menusFile = `data/${city}_menus.json`;
const M = fs.existsSync(menusFile)
  ? (() => { const x = JSON.parse(fs.readFileSync(menusFile, 'utf8')); return x.menus || x; })()
  : {};

// Every id anyone has already researched, empty verdicts included.
const researched = new Set();
const verdictDir = 'data/_menu_verdicts';
if (fs.existsSync(verdictDir))
  for (const f of fs.readdirSync(verdictDir).filter(f => f.startsWith(`${city}_s`) && f.endsWith('.json')))
    try { Object.keys(JSON.parse(fs.readFileSync(`${verdictDir}/${f}`, 'utf8'))).forEach(k => researched.add(k)); }
    catch { console.error(`  ! ${f} is not valid JSON — skipped`); }

const byId = Object.fromEntries(readCity(city).places.map(r => [r.id, r]));
const needs = id => { const r = byId[id]; return r && !r.hidden && !M[id] && !researched.has(id); };

const shardDir = `data/_${city}_menu_shards`;
const shards = fs.existsSync(shardDir)
  ? fs.readdirSync(shardDir).filter(f => /^s\d+\.json$/.test(f)).sort((a, b) => +a.match(/\d+/)[0] - +b.match(/\d+/)[0])
  : [];

const rows = shards.map(f => {
  const n = f.match(/\d+/)[0];
  const recs = JSON.parse(fs.readFileSync(`${shardDir}/${f}`, 'utf8'));
  const todo = recs.filter(r => needs(r.id));
  const started = recs.some(r => researched.has(r.id));
  return { n, total: recs.length, todo, started };
});

// Finish what is started before opening a new shard: a half-done shard is a shard
// whose context somebody has already paid for.
const started = rows.filter(r => r.started && r.todo.length).sort((a, b) => a.todo.length - b.todo.length);
const fresh = rows.filter(r => !r.started && r.todo.length);
const pick = started[0] || fresh[0] || null;

if (NEXT_ONLY) {
  if (!pick) { console.log('nothing left'); process.exit(0); }
  console.log(JSON.stringify({ shard: `s${pick.n}`, started: pick.started, remaining: pick.todo.length,
    records: pick.todo.map(r => ({ id: r.id, name: r.name, cuisine: r.cuisine, website: r.website, menu_url: r.menu_url })) }, null, 1));
  process.exit(0);
}

const places = readCity(city).places;
const visible = places.filter(r => !r.hidden);
const withMenu = visible.filter(r => M[r.id]).length;
const empties = [...researched].filter(id => byId[id] && !M[id]).length;

console.log(`${city}: ${withMenu}/${visible.length} inline (${Math.round(100 * withMenu / visible.length)}%), gap ${visible.length - withMenu}`);
console.log(`  researched ids on file: ${researched.size}  (of which ${empties} produced no mergeable menu — honest empties, do NOT re-research)`);
console.log(`  genuinely outstanding: ${rows.reduce((n, r) => n + r.todo.length, 0)} across ${rows.filter(r => r.todo.length).length} shard(s)`);
console.log(`  shards: ${rows.filter(r => r.started && !r.todo.length).length} complete, ${started.length} part-done, ${fresh.length} untouched`);
if (pick) console.log(`\n  next: s${pick.n} (${pick.started ? 'part-done' : 'untouched'}), ${pick.todo.length} record(s) remaining`);
