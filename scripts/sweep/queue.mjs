// Step 3: the work queue. Reads shops.jsonl (crawl cache) + queue-status.jsonl (done/skipped log,
// latest line per id wins) + the city's data, and answers "what is left".
//   node scripts/sweep/queue.mjs <city> stats
//   node scripts/sweep/queue.mjs <city> next <phase> [n]     phase: vegan | ramen | mom | rest | any
//   node scripts/sweep/queue.mjs <city> mark <id> <done|skipped|deferred> [reason...]
// Candidates are in-radius shops not already in data/<city>.json and not done/skipped, sorted by
// distance from the centre — so a partial sweep is always a complete smaller circle.
import fs from 'fs';
import path from 'path';
import { loadConfig, cityDir, readJsonl, idsInCity } from './lib.mjs';

const [city, cmd, ...rest] = process.argv.slice(2);
const cfg = loadConfig(city); const dir = cityDir(city);
const STATUS = path.join(dir, 'queue-status.jsonl');
const shops = new Map(); for (const r of readJsonl(path.join(dir, 'shops.jsonl'))) shops.set(r.id, { ...shops.get(r.id), ...r });
const status = new Map(); for (const r of readJsonl(STATUS)) status.set(r.id, r);
const inData = idsInCity(city);

const isRamen = r => /Ramen|Tsukemen|Abura-soba|Maze-soba|Tantanmen/i.test(r.genre || '') || r.genre_list === 'ramen';
const isVegan = r => r.vegtag || /Vegetarian|Vegan|Macrobiotic/i.test(r.genre || '') || r.genre_list === 'vegan-seed';
const seatsOf = r => parseInt(r.seats) || null;
const isMom = r => { const s = seatsOf(r); return s !== null && s <= 20; };
const PHASE = { vegan: isVegan, ramen: isRamen, mom: isMom, rest: () => true, any: () => true };
const closed = r => /closed|移転|閉店/i.test(r.badge || '');

const inside = [...shops.values()].filter(r => r.http === 200 && r.m !== undefined && r.m <= cfg.radius_m);
const open = inside.filter(r => !closed(r));
const pending = open.filter(r => !inData.has(r.id) && !['done', 'skipped'].includes(status.get(r.id)?.status));

if (cmd === 'stats') {
  const byPhase = p => pending.filter(PHASE[p]).length;
  console.log(JSON.stringify({
    crawled: shops.size, inside: inside.length, closed_badge: inside.length - open.length,
    in_data: open.filter(r => inData.has(r.id)).length,
    done: [...status.values()].filter(s => s.status === 'done').length,
    skipped: [...status.values()].filter(s => s.status === 'skipped').length,
    pending: pending.length, pending_vegan: byPhase('vegan'), pending_ramen: byPhase('ramen'), pending_mom: byPhase('mom'),
  }, null, 1));
} else if (cmd === 'next') {
  // optional 4th arg: a circle label (multi-circle sweeps) to work one circle at a time
  const [phase = 'any', n = 12, circle] = rest;
  const list = pending.filter(PHASE[phase] || PHASE.any).filter(r => !circle || r.circle === circle).sort((a, b) => a.m - b.m).slice(0, +n);
  for (const r of list) console.log([r.id, r.m + 'm' + (r.circle ? '@' + r.circle : ''), (r.seats || '?').slice(0, 9), (r.reviews ?? '?') + 'rv', r.rating ?? '', r.ja || r.en, '|', (r.genre || '').slice(0, 60), '|', r.url].join(' '));
} else if (cmd === 'mark') {
  const [id, st, ...why] = rest;
  fs.appendFileSync(STATUS, JSON.stringify({ id, status: st, reason: why.join(' ') || null, at: new Date().toISOString().slice(0, 10) }) + '\n');
  console.log('marked', id, st);
} else { console.error('usage: queue.mjs <city> stats | next <phase> [n] [circle] | mark <id> <status> [reason]'); process.exit(1); }
