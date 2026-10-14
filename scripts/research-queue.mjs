// The "Suggest a place" research queue, from this machine's side.
//
// Travellers file requests through the app (functions/api/research-request.js), which only
// stores them in Cloudflare KV. This script is how the local research job sees and updates
// them — via wrangler, which is already logged in here. No AI is involved in this script.
//
//   node scripts/research-queue.mjs check            -> "queued: N" (N limited by today's cap)
//   node scripts/research-queue.mjs pull [--max N]   -> downloads queued requests to WORK/<id>/
//                                                       (request.json, photo.jpg) and marks
//                                                       them "researching"
//   node scripts/research-queue.mjs set <id> <status> [--place <id>] [--city <city>]
//                                       [--msg "English"] [--msg-ja "日本語"]
//   node scripts/research-queue.mjs list             -> every request and its status
//
// Statuses the app understands: queued, researching, added, exists, not_found, outside,
// rejected. A request stuck in "researching" for 6h (a run that died) is offered again.
//
// DAILY_CAP bounds how many requests are researched per day, so a busy day cannot eat the
// Claude Pro allowance Greg uses for his own sessions; the rest wait for tomorrow.
import { execFileSync } from 'node:child_process';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const NS = '2d0f0afa744b4cf38a5bba7d6af6f9c1';      // binding SUMMARIES in wrangler.toml
const DAILY_CAP = 10;
const STALE_MS = 6 * 3600e3;
export const WORK = path.join(process.env.LOCALAPPDATA || '.', 'dcd-research');
const STATUSES = ['queued', 'researching', 'added', 'exists', 'not_found', 'outside', 'rejected'];

// wrangler's own JS entry under this node, not npx through a shell: cmd.exe would mangle the
// JSON in --metadata.
const WRANGLER = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'node_modules', 'wrangler', 'bin', 'wrangler.js');
function wr(args) {
  return execFileSync(process.execPath, [WRANGLER, 'kv', 'key', ...args, '--namespace-id', NS, '--remote'],
    { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'], maxBuffer: 64e6 });
}
const listKeys = prefix => JSON.parse(wr(['list', '--prefix', prefix]));
const getKey = key => wr(['get', key, '--text']);
function putJson(key, obj, metadata) {
  // Value goes through a file: request bodies hold user text, and a command line is no place for it.
  fs.mkdirSync(WORK, { recursive: true });
  const tmp = path.join(WORK, '.put.json');
  fs.writeFileSync(tmp, JSON.stringify(obj));
  wr(['put', key, '--path', tmp, '--metadata', JSON.stringify(metadata), '--ttl', String(60 * 60 * 24 * 120)]);
  fs.unlinkSync(tmp);
}
const today = () => new Date().toISOString().slice(0, 10);

function doneToday(all) {
  return all.filter(k => k.metadata?.started?.slice(0, 10) === today()).length;
}
function pending(all) {
  const now = Date.now();
  return all.filter(k => k.metadata?.status === 'queued' ||
    (k.metadata?.status === 'researching' && now - Date.parse(k.metadata.started || 0) > STALE_MS))
    .sort((a, b) => String(a.metadata?.created).localeCompare(String(b.metadata?.created)));
}

const [cmd, ...rest] = process.argv.slice(2);
const opt = n => { const i = rest.indexOf(n); return i >= 0 ? rest[i + 1] : undefined; };

if (cmd === 'check') {
  const all = listKeys('rq:');
  const n = Math.max(0, Math.min(pending(all).length, DAILY_CAP - doneToday(all)));
  console.log(`queued: ${n}  (waiting ${pending(all).length}, started today ${doneToday(all)}/${DAILY_CAP})`);
} else if (cmd === 'pull') {
  const all = listKeys('rq:');
  const max = Math.min(Number(opt('--max') || DAILY_CAP), DAILY_CAP - doneToday(all));
  const take = pending(all).slice(0, Math.max(0, max));
  for (const k of take) {
    const rec = JSON.parse(getKey(k.name));
    const dir = path.join(WORK, rec.id);
    fs.mkdirSync(dir, { recursive: true });
    if (rec.has_image) {
      const data = getKey('rqimg:' + rec.id).trim();
      const m = /^data:image\/[a-z]+;base64,(.*)$/s.exec(data);
      if (m) fs.writeFileSync(path.join(dir, 'photo.jpg'), Buffer.from(m[1], 'base64'));
    }
    const { user, ...forResearch } = rec;           // the researcher never needs who asked
    fs.writeFileSync(path.join(dir, 'request.json'), JSON.stringify(forResearch, null, 2));
    rec.status = 'researching'; rec.started = new Date().toISOString();
    putJson(k.name, rec, { status: rec.status, created: rec.created, started: rec.started });
    console.log(`${rec.id}  ${rec.kind}  ${rec.lat.toFixed(6)},${rec.lng.toFixed(6)}  acc=${rec.acc ?? '-'}m  name="${rec.name}"  -> ${dir}`);
  }
  if (!take.length) console.log('nothing to pull');
} else if (cmd === 'set') {
  const [id, status] = rest;
  if (!/^[a-z0-9]{12}$/.test(id || '') || !STATUSES.includes(status)) {
    console.error(`usage: set <id> <${STATUSES.join('|')}> [--place id] [--city c] [--msg ..] [--msg-ja ..]`); process.exit(1);
  }
  const rec = JSON.parse(getKey('rq:' + id));
  Object.assign(rec, { status, finished: new Date().toISOString() });
  if (opt('--place')) rec.place_id = opt('--place');
  if (opt('--city')) rec.city = opt('--city');
  if (opt('--msg')) rec.message = opt('--msg');
  if (opt('--msg-ja')) rec.message_ja = opt('--msg-ja');
  putJson('rq:' + id, rec, { status, created: rec.created, started: rec.started || null });
  console.log(`${id} -> ${status}${rec.place_id ? ' ' + rec.place_id : ''}`);
} else if (cmd === 'list') {
  for (const k of listKeys('rq:')) console.log(k.name.slice(3), k.metadata?.status, k.metadata?.created);
} else {
  console.error('usage: research-queue.mjs check | pull [--max N] | set <id> <status> ... | list'); process.exit(1);
}
