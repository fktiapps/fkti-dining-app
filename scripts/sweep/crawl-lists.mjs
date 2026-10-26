// Step 1: collect Tabelog shop ids from /en/ list pages for each area in the city config.
// Resumable: a (area, genre) pair already in lists-done.jsonl is skipped.
//   node scripts/sweep/crawl-lists.mjs <city> <genre|all> [areaCode ...]
// genre is a Tabelog /rstLst/<genre>/ slug (ramen, okonomiyaki, udon, ...) or "all" for the
// unfiltered list (capped by Tabelog at 60 pages = 1,200 shops per area).
import path from 'path';
import { loadConfig, cityDir, get, readJsonl, appendJsonl } from './lib.mjs';

const [city, genre, ...only] = process.argv.slice(2);
if (!city || !genre) { console.error('usage: crawl-lists.mjs <city> <genre|all> [areaCode ...]'); process.exit(1); }
const cfg = loadConfig(city); const dir = cityDir(city);
const LISTS = path.join(dir, 'lists.jsonl'), DONE = path.join(dir, 'lists-done.jsonl');
const done = new Set(readJsonl(DONE).map(r => r.area + '|' + r.genre));
const seen = new Set(readJsonl(LISTS).map(r => r.id));
const areas = cfg.areas.filter(a => !only.length || only.includes(a.code));

for (const a of areas) {
  const key = a.code + '|' + genre;
  if (done.has(key)) { console.log('skip (done)', key); continue; }
  let added = 0, pages = 0, total = null;
  for (let p = 1; p <= 60; p++) {
    const u = `https://tabelog.com/en/${cfg.pref}/${a.code}/rstLst/${genre === 'all' ? '' : genre + '/'}${p}/`;
    const { s, h } = await get(u);
    if (s !== 200) break;
    if (total === null) { const m = h.match(/c-page-count__num"><strong>(\d+)<\/strong><\/span>(?:(?!c-page-count__num).)*$/s); total = m ? +m[1] : null; }
    const ids = [...new Set([...h.matchAll(new RegExp(`href="(https://tabelog\\.com/en/${cfg.pref}/A\\d+/A\\d+/(\\d+)/)"`, 'g'))].map(m => m[1]))];
    if (!ids.length) break;
    let fresh = 0;
    for (const url of ids) {
      const id = url.match(/\/(\d+)\/$/)[1];
      if (seen.has(id)) continue;
      seen.add(id); fresh++; added++;
      appendJsonl(LISTS, { id, url, area: a.code, genre_list: genre });
    }
    pages = p;
    if (total !== null && p * 20 >= total) break;
  }
  appendJsonl(DONE, { area: a.code, genre, pages, added, total, at: new Date().toISOString() });
  console.log(`${key}: ${pages} pages, ${added} new ids (Tabelog total ${total ?? '?'})`);
}
console.log('ids known:', seen.size);
