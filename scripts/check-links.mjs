// Check every stored website / menu_url for liveness.
//
// Motivated by a real failure: senza-x.com lapsed and now serves a Korean
// gambling site, and the app was still linking it as a restaurant's official
// page. Dead links are a nuisance; lapsed-and-repurposed domains are worse.
//
//   node scripts/check-links.mjs            # all cities
//   node scripts/check-links.mjs kyoto
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const only = process.argv.slice(2);
const cities = only.length ? CITIES.filter(c => only.includes(c)) : CITIES;
const CONCURRENCY = 12;
const TIMEOUT = 12000;

// Tabelog serves 403/404 to non-browser clients, so ~1000 of its URLs report dead
// while working fine for real users. Flagging them buries the handful of genuinely
// broken links, so they are checked but reported separately.
const BOT_BLOCKERS = /(^|\.)tabelog\.com$/i;

const targets = [];
for (const city of cities)
  for (const r of readCity(city).places)
    for (const field of ['website', 'menu_url'])
      if (r[field] && /^https?:\/\//.test(r[field]))
        targets.push({ city, id: r.id, name: r.name, field, url: r[field] });

console.log(`checking ${targets.length} links across ${cities.length} cities\n`);

// A lapsed domain that now serves something else usually announces itself in the
// html lang / title. These are the patterns that actually turned up.
// Word-boundary anchored: an unanchored /toto/ matched "Totoro" and "tobamarche".
const SUSPECT = /\b(toto ?site|togel|situs|casino|betting|slot ?gacor|viagra)\b|카지노|토토사이트|먹튀|Вавада|vavada|domain (is )?for sale|このドメインは/i;

async function check(t) {
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), TIMEOUT);
  try {
    const res = await fetch(t.url, { redirect: 'follow', signal: ctl.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (compatible; fkti-linkcheck/1.0)' } });
    const status = res.status;
    let flag = null;
    const ct = res.headers.get('content-type') || '';
    if (res.ok && ct.includes('text/html')) {
      const body = (await res.text()).slice(0, 4000);
      const lang = (body.match(/<html[^>]*lang="([^"]+)"/i) || [])[1] || '';
      const title = (body.match(/<title[^>]*>([^<]*)<\/title>/i) || [])[1] || '';
      if (SUSPECT.test(title) || SUSPECT.test(body)) flag = `SUSPECT content — title="${title.trim().slice(0, 70)}"`;
      else if (/^ko|^zh|^ru/i.test(lang) && !/\.kr|\.cn|\.ru/.test(t.url)) flag = `lang="${lang}" on a Japanese business — title="${title.trim().slice(0, 70)}"`;
    }
    return { ...t, status, flag };
  } catch (e) {
    return { ...t, status: 0, flag: null, error: e.name === 'AbortError' ? 'timeout' : e.message.slice(0, 60) };
  } finally { clearTimeout(timer); }
}

const results = [];
let i = 0;
await Promise.all(Array.from({ length: CONCURRENCY }, async () => {
  while (i < targets.length) {
    const t = targets[i++];
    results.push(await check(t));
    if (results.length % 100 === 0) process.stderr.write(`  ${results.length}/${targets.length}\n`);
  }
}));

const hostOf = u => { try { return new URL(u).host; } catch { return ''; } };
const allDead = results.filter(r => r.status === 0 || r.status >= 400);
const dead = allDead.filter(r => !BOT_BLOCKERS.test(hostOf(r.url)));
const botBlocked = allDead.length - dead.length;
const suspect = results.filter(r => r.flag);

console.log(`\nOK: ${results.length - dead.length}   dead/unreachable: ${dead.length}   suspect content: ${suspect.length}\n`);
if (suspect.length) {
  console.log('=== SUSPECT — domain may have lapsed and been repurposed. DO NOT SHIP THESE LINKS ===');
  suspect.forEach(r => console.log(`  ${r.city}/${r.id} ${r.field}\n    ${r.url}\n    ${r.flag}`));
}
if (dead.length) {
  console.log('\n=== DEAD ===');
  dead.slice(0, 60).forEach(r => console.log(`  ${String(r.status).padStart(3)} ${r.city}/${r.field} ${r.url}  ${r.error || ''}`));
  if (dead.length > 60) console.log(`  … ${dead.length - 60} more`);
}
fs.writeFileSync('data/_link_check.json', JSON.stringify({ checked: results.length, dead, suspect }, null, 1));
console.log('\nfull report -> data/_link_check.json');
