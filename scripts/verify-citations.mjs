// Verify that quoted evidence actually appears on the page it cites.
//
// The adversarial pass found, independently across four shards, that safety
// evidence blocks quote text which is NOT on the cited page — a 打ち粉 claim
// sourced to an article that never mentions 打ち粉, a cross-contamination finding
// sourced to a piece that never mentions gluten, a shop's "separated kitchen"
// quote that actually belongs to a different shop. Whatever pass generated those
// blocks was inventing citations, and a fabricated citation on a SAFETY claim is
// the most dangerous defect this dataset can carry.
//
// This checks the mechanically checkable part: every 「...」 quote in a
// safety.* evidence item must appear on its source page.
//
// A miss is NOT proof of fabrication — the page may be JS-rendered, paywalled or
// bot-blocked, or may have been edited since. So results are bucketed:
//   ABSENT   fetched fine, quote not there        -> review these first
//   BLOCKED  403/404/timeout, cannot tell         -> needs a human or a browser
//   OK       quote found verbatim
//
//   node scripts/verify-citations.mjs [city ...]
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const only = process.argv.slice(2);
const cities = only.length ? CITIES.filter(c => only.includes(c)) : CITIES;
const FIELDS = ['gf_cross_contamination', 'soy_sauce_wheat', 'vegan_cross_contact',
                'staff_allergy_handling', 'positives'];

// Collect every quote/source pair worth checking.
const jobs = [];
for (const city of cities) {
  for (const r of readCity(city).places) {
    for (const f of FIELDS) {
      for (const e of (r.safety?.[f]) || []) {
        if (!e?.source || !/^https?:/.test(e.source)) continue;
        const quotes = [...String(e.text || '').matchAll(/「([^」]{6,})」/g)].map(m => m[1]);
        for (const q of quotes) jobs.push({ city, id: r.id, name: r.name, field: f, url: e.source, quote: q });
      }
    }
  }
}
console.log(`${jobs.length} quoted claims to verify\n`);

// One fetch per URL, shared across the quotes citing it.
const pages = new Map();
const strip = h => h
  .replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ')
  .replace(/\s+/g, '');

async function load(url) {
  if (pages.has(url)) return pages.get(url);
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 15000);
  let res;
  try {
    const r = await fetch(url, { redirect: 'follow', signal: ctl.signal,
      headers: { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36' } });
    res = r.ok ? { ok: true, text: strip(await r.text()) } : { ok: false, why: 'HTTP ' + r.status };
  } catch (e) {
    res = { ok: false, why: e.name === 'AbortError' ? 'timeout' : e.message.slice(0, 40) };
  } finally { clearTimeout(timer); }
  pages.set(url, res);
  return res;
}

const urls = [...new Set(jobs.map(j => j.url))];
console.log(`fetching ${urls.length} unique sources...`);
let n = 0;
await Promise.all(Array.from({ length: 8 }, async () => {
  while (urls.length) {
    const u = urls.shift();
    await load(u);
    if (++n % 20 === 0) process.stderr.write(`  ${n} fetched\n`);
  }
}));

const absent = [], blocked = [];
let ok = 0;
for (const j of jobs) {
  const page = pages.get(j.url);
  if (!page.ok) { blocked.push({ ...j, why: page.why }); continue; }
  const needle = j.quote.replace(/\s+/g, '');
  if (page.text.includes(needle)) { ok++; continue; }
  // tolerate a trailing clause the quote may have merged
  const head = needle.slice(0, Math.max(8, Math.floor(needle.length * 0.6)));
  if (page.text.includes(head)) { ok++; continue; }
  absent.push(j);
}

console.log(`\nverified: ${ok}   ABSENT from cited page: ${absent.length}   unverifiable (blocked): ${blocked.length}\n`);
if (absent.length) {
  console.log('=== ABSENT — the cited page does not contain this quote ===');
  for (const a of absent)
    console.log(`  ${a.city}/${a.id}  [${a.field}]\n    quote : 「${a.quote.slice(0, 70)}」\n    source: ${a.url}\n`);
}
fs.writeFileSync('data/_citation_check.json', JSON.stringify({ checked: jobs.length, ok, absent, blocked }, null, 1));
console.log(`full report -> data/_citation_check.json`);
