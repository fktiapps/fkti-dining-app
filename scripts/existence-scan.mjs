// Existence scan for legacy records (no `existence` block): fetch each record's Tabelog /en/ page and its
// review list sorted by visit date, and record the status badge, name, address, Tabelog pin and the
// newest "Visited on" month. Read-only on data; writes one JSON line per record to the output file, and
// is resumable (records already in the output are skipped). Greg 2026-11-05: Kyoto existence review
// before his 2026-12-02 trip.
//   node scripts/existence-scan.mjs <city> [--all] [--limit N]
//   output: scripts/existence/<city>-scan.jsonl   (FETCH_DELAY_MS, default 2500, paces requests:
//   the sweep workers share Tabelog)
import fs from 'node:fs';
import path from 'node:path';
import { get, parseShop, readJsonl, appendJsonl } from './sweep/lib.mjs';

const args = process.argv.slice(2);
const city = args[0];
if (!city) { console.error('usage: existence-scan.mjs <city> [--all] [--limit N]'); process.exit(1); }
const ALL = args.includes('--all');
const LIMIT = args.includes('--limit') ? +args[args.indexOf('--limit') + 1] : Infinity;
const DELAY = +(process.env.FETCH_DELAY_MS || 2500);
const sleep = ms => new Promise(r => setTimeout(r, ms));

const OUT = path.join('scripts/existence', `${city}-scan.jsonl`);
fs.mkdirSync(path.dirname(OUT), { recursive: true });
const done = new Set(readJsonl(OUT).map(r => r.id));

const places = JSON.parse(fs.readFileSync(`data/${city}.json`, 'utf8')).places;
const todo = places.filter(r => (ALL || !r.existence) && !done.has(r.id));
const MONTHS = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const ym = s => { const m = s.match(/([A-Za-z]+), (\d{4})/); return m ? `${m[2]}-${String(MONTHS.indexOf(m[1]) + 1).padStart(2, '0')}` : null; };
const metres = (a, b, c, d) => { const R = 6371000, r = x => x * Math.PI / 180; const dl = r(c - a), dn = r(d - b);
  return Math.round(2 * R * Math.asin(Math.sqrt(Math.sin(dl / 2) ** 2 + Math.cos(r(a)) * Math.cos(r(c)) * Math.sin(dn / 2) ** 2))); };

let n = 0;
console.log(`${city}: ${todo.length} to scan (${done.size} already in ${OUT})`);
for (const r of todo) {
  if (n >= LIMIT) break;
  const blob = JSON.stringify(r);
  const m = blob.match(/tabelog\.com\/(?:en\/)?([a-z]+\/A\d{4}\/A\d{6}\/\d{8})/);
  const row = { id: r.id, name: r.name, scanned: new Date().toISOString().slice(0, 10) };
  if (!m) { row.result = 'no_tabelog'; appendJsonl(OUT, row); n++; continue; }
  row.tabelog = `https://tabelog.com/en/${m[1]}/`;
  const shop = await get(row.tabelog); await sleep(Math.max(0, DELAY - 1100));
  row.http = shop.s;
  if (shop.s === 200) {
    const p = parseShop(shop.h);
    Object.assign(row, { badge: p.badge, tb_en: p.en, tb_ja: p.ja, tb_addr: p.addr, reviews: p.reviews });
    if (p.lat && r.lat) row.pin_m = metres(r.lat, r.lng, p.lat, p.lng);
    const flat = shop.h.replace(/\s+/g, ' ');
    row.closed_text = /This restaurant is (permanently )?closed|閉店|has moved|移転/.test(flat) || null;
    const rv = await get(row.tabelog + 'dtlrvwlst/?srt=visit'); await sleep(Math.max(0, DELAY - 1100));
    const v = [...rv.h.replace(/\s+/g, ' ').matchAll(/Visited on ([A-Za-z]+, \d{4})/g)].map(x => ym(x[1])).filter(Boolean).sort();
    row.latest_visit = v.length ? v[v.length - 1] : null;
  }
  appendJsonl(OUT, row); n++;
  if (n % 25 === 0) console.log(`${n} scanned`);
}
console.log(`done: ${n} scanned this run → ${OUT}`);
