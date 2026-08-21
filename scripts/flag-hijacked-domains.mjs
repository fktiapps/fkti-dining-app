// Restaurant domains that lapsed and were re-registered as something else.
//
// Three confirmed now, and the app was linking all three as official pages:
//   senza-x.com          -> Korean gambling
//   peacetable-vegan.com -> Russian casino affiliate
//   monsen-taisyo.com    -> Indonesian slot gambling ("Nx303", "Zeus Slot"), HTTP 200
//
// The last one is the instructive case: the SHOP IS STILL TRADING and Tabelog still
// lists that domain as its homepage. So this is not a closure signal and must never be
// treated as one — it is a live link from a coeliac's dining app to a gambling site,
// on a record that is otherwise correct.
//
// A 200 is what makes it dangerous: every link check in this repo would call it fine.
//
//   node scripts/flag-hijacked-domains.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';

// Content that has no business on a restaurant's page. Deliberately specific: "bonus"
// and "play" alone would match a family restaurant's kids' page.
const HIJACK = [
  /\b(slot|slots)\s*(gacor|online|gratis|demo|maxwin|pragmatic)\b/i,
  /\b(situs|judi|togel|bandar|maxwin|gacor|rtp\s*live)\b/i,          // Indonesian gambling SEO
  /\b(casino|kasino)\b.{0,40}\b(online|bonus|deposit|slot)\b/i,
  /\b(bandar\s*bola|sbobet|pkv|joker123|zeus\s*slot)\b/i,
  /\bбукмекер|казино|ставк/i,                                        // Russian
  /카지노|바카라|토토사이트/,                                            // Korean
  /\b(this domain|domain name).{0,30}\b(for sale|is available|expired)\b/i,
  /\b(parked|parking) (domain|page)\b/i,
];
const strip = h => h.replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ');

const targets = [];
for (const city of CITIES)
  for (const r of readCity(city).places) {
    for (const f of ['website', 'menu_url']) {
      const u = r[f];
      if (typeof u !== 'string' || !/^https?:\/\//.test(u)) continue;
      // skip the big directories; nobody hijacks tabelog
      if (/tabelog|hotpepper|instagram|facebook|gnavi|retty|x\.com/.test(u)) continue;
      targets.push({ city, id: r.id, name: r.name, field: f, url: u });
    }
  }
console.log(`checking ${targets.length} venue-owned link(s)...`);

const hits = [];
let done = 0;
const queue = [...targets];
await Promise.all(Array.from({ length: 8 }, async () => {
  while (queue.length) {
    const t = queue.shift();
    try {
      const res = await fetch(t.url, { redirect: 'follow', signal: AbortSignal.timeout(15000),
        headers: { 'User-Agent': UA, 'Accept-Language': 'ja,en' } });
      if (res.ok) {
        const text = strip(await res.text()).slice(0, 20000);
        const m = HIJACK.map(rx => text.match(rx)).find(Boolean);
        if (m) hits.push({ ...t, matched: m[0].slice(0, 60), final: res.url });
      }
    } catch (_) { /* dead is the link checker's job, not this one's */ }
    if (++done % 100 === 0) process.stderr.write(`  ${done}/${targets.length}\n`);
  }
}));

console.log(`\n${hits.length} link(s) now serving gambling or parked content\n`);
for (const h of hits)
  console.log(`  ${h.city}/${String(h.name).slice(0, 28).padEnd(30)} [${h.field}] «${h.matched}»\n      ${h.url}`);

if (APPLY && hits.length) {
  for (const city of CITIES) {
    const j = readCity(city); let dirty = false;
    for (const h of hits.filter(x => x.city === city)) {
      const r = j.places.find(x => x.id === h.id);
      if (!r) continue;
      r.hijacked_links = r.hijacked_links || [];
      r.hijacked_links.push({ field: h.field, was: h.url, matched: h.matched, date: '2026-08-21' });
      r[h.field] = null;                    // the record keeps the fact, the app drops the link
      dirty = true;
    }
    if (dirty) writeCity(city, j);
  }
  console.log('\nlinks cleared; the record keeps what was there and why');
}
fs.writeFileSync('data/_hijacked_domains.json', JSON.stringify(hits, null, 1));
if (!APPLY && hits.length) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
