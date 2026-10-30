// Step 2: fetch each listed shop's /en/ page once (geo, address, genre, seats, status) and
// record its distance from the sweep centre. Resumable: ids already in shops.jsonl are skipped.
//   node scripts/sweep/crawl-shops.mjs <city> [maxFetches] [--genre <genre_list>]
import path from 'path';
import { loadConfig, cityDir, get, readJsonl, appendJsonl, parseShop, distOf, nearestCircle } from './lib.mjs';

const args = process.argv.slice(2);
const city = args[0]; const max = +(args[1] && !args[1].startsWith('--') ? args[1] : 1e9);
const gi = args.indexOf('--genre'); const onlyGenre = gi > -1 ? args[gi + 1] : null;
const cfg = loadConfig(city); const dir = cityDir(city);
const SHOPS = path.join(dir, 'shops.jsonl');
const have = new Set(readJsonl(SHOPS).map(r => r.id));
const todo = readJsonl(path.join(dir, 'lists.jsonl')).filter(r => !have.has(r.id) && (!onlyGenre || r.genre_list === onlyGenre));
console.log('to fetch', Math.min(todo.length, max), 'of', todo.length);
let n = 0, inside = 0;
for (const r of todo.slice(0, max)) {
  const { s, h } = await get(r.url);
  const row = { id: r.id, url: r.url, area: r.area, genre_list: r.genre_list, http: s, ...(s === 200 ? parseShop(h) : {}) };
  if (row.lat) { row.m = distOf(cfg, row.lat, row.lng); if (cfg.circles) row.circle = nearestCircle(cfg, row.lat, row.lng); if (row.m <= cfg.radius_m) inside++; }
  row.at = new Date().toISOString().slice(0, 10);
  appendJsonl(SHOPS, row); n++;
  if (n % 50 === 0) console.log(`  ${n} fetched, ${inside} inside radius`);
}
console.log(`done: ${n} fetched, ${inside} inside ${cfg.radius_m} m`);
