// Does the cited page even discuss what the claim is about?
//
// verify-citations.mjs can only check claims wrapped in 「」 — 124 of 7,928. The rest
// are English prose no substring match can test. But there is a weaker check that
// covers all of them and still catches the failure that matters most: a safety claim
// whose source page never mentions the subject at all.
//
// That is not hypothetical. The adversarial pass found a 打ち粉 claim sourced to an
// article that never mentions 打ち粉, and a cross-contamination finding sourced to a
// piece that never mentions gluten. A citation pointing at a page with nothing to
// say about the topic is not evidence, whatever it says elsewhere.
//
// So: work out which CONCEPTS a claim asserts, then ask whether the page mentions any
// of them, in Japanese or English. This cannot confirm a claim — a page discussing
// gluten does not thereby support any particular gluten claim — so a pass here means
// only "not obviously unrelated". A FAIL is the useful signal, and it is strong.
//
//   node scripts/verify-claim-topics.mjs [--limit N]
import fs from 'node:fs';
import { CITIES, readCity } from './lib-city.mjs';

const LIMIT = Number((process.argv[process.argv.indexOf('--limit') + 1]) || 0) || Infinity;
const EV = ['gf_cross_contamination','soy_sauce_wheat','vegan_cross_contact',
            'staff_allergy_handling','positives'];
const url = u => typeof u === 'string' && /^https?:\/\//.test(u);

// A concept fires when the claim mentions it; the page must then mention it too.
// Both sides listed in Japanese and English, because a Japanese page sourcing an
// English claim is normal here and must not read as a mismatch.
const CONCEPTS = {
  gluten:  { claim: /gluten|celiac|coeliac|wheat|flour|グルテン|セリアック|小麦|こむぎ|麦粉|粉/i,
             page:  /gluten|wheat|flour|グルテン|セリアック|小麦|こむぎ|麦|粉/i },
  soy:     { claim: /soy ?sauce|shoyu|tamari|醤油|しょうゆ|しょう油|たまり/i,
             page:  /soy ?sauce|shoyu|tamari|醤油|しょうゆ|しょう油|たまり|調味/i },
  fryer:   { claim: /fryer|frying|deep[- ]fried|shared oil|フライヤー|揚げ|油/i,
             page:  /fryer|fry|fried|oil|フライ|揚げ|油|天ぷら|唐揚/i },
  vegan:   { claim: /vegan|vegetarian|plant[- ]based|ヴィーガン|ビーガン|ベジタリアン|精進|菜食/i,
             page:  /vegan|vegetarian|plant|ヴィーガン|ビーガン|ベジタリアン|精進|菜食|野菜/i },
  dashi:   { claim: /dashi|bonito|katsuobushi|出汁|だし|鰹|かつお/i,
             page:  /dashi|bonito|出汁|だし|鰹|かつお|節/i },
  rice:    { claim: /rice ?flour|komeko|米粉|玄米|グルテンフリー/i,
             page:  /rice|米粉|玄米|お米|グルテンフリー/i },
  allergy: { claim: /allerg|アレルギー|アレルゲン|対応/i,
             page:  /allerg|アレルギー|アレルゲン|対応|表示/i },
  soba:    { claim: /soba|buckwheat|十割|二八|打ち粉|そば|蕎麦/i,
             page:  /soba|buckwheat|十割|二八|打ち粉|そば|蕎麦/i },
};

const jobs = [];
for (const city of CITIES)
  for (const r of readCity(city).places) {
    if (r.hidden) continue;
    for (const f of EV)
      for (const e of (r.safety?.[f]) || []) {
        if (typeof e !== 'object' || !url(e?.source)) continue;
        const text = String(e.text || '');
        const fired = Object.entries(CONCEPTS).filter(([, c]) => c.claim.test(text)).map(([k]) => k);
        if (!fired.length) continue;               // nothing testable in this claim
        jobs.push({ city, id: r.id, name: r.name, field: f, url: e.source, text, fired });
      }
  }
console.log(`${jobs.length} cited claim(s) with a testable topic`);

const urls = [...new Set(jobs.map(j => j.url))].slice(0, LIMIT);
console.log(`fetching ${urls.length} unique source page(s)...\n`);

const strip = h => h.replace(/<script[\s\S]*?<\/script>/gi, ' ')
  .replace(/<style[\s\S]*?<\/style>/gi, ' ').replace(/<[^>]+>/g, ' ');
const pages = new Map();
let done = 0;
const UA = 'Mozilla/5.0 (iPhone; CPU iPhone OS 17_0 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/17.0 Mobile/15E148 Safari/604.1';
const queue = [...urls];
await Promise.all(Array.from({ length: 10 }, async () => {
  while (queue.length) {
    const u = queue.shift();
    try {
      const res = await fetch(u, { redirect: 'follow', signal: AbortSignal.timeout(20000),
        headers: { 'User-Agent': UA, 'Accept-Language': 'ja,en' } });
      pages.set(u, res.ok ? { ok: true, text: strip(await res.text()) }
                          : { ok: false, why: 'HTTP ' + res.status });
    } catch (e) { pages.set(u, { ok: false, why: e.name === 'AbortError' ? 'timeout' : String(e.message).slice(0, 40) }); }
    if (++done % 50 === 0) process.stderr.write(`  ${done}/${urls.length}\n`);
  }
}));

const mismatched = [], blocked = [];
let ok = 0;
for (const j of jobs) {
  const page = pages.get(j.url);
  if (!page) continue;
  if (!page.ok) { blocked.push({ ...j, why: page.why }); continue; }
  // the page must speak to AT LEAST ONE concept the claim raises
  const hit = j.fired.some(k => CONCEPTS[k].page.test(page.text));
  if (hit) ok++; else mismatched.push(j);
}

console.log(`\non-topic: ${ok}   OFF-TOPIC: ${mismatched.length}   unreachable: ${blocked.length}`);
if (mismatched.length) {
  console.log('\n=== the cited page never mentions what the claim is about ===');
  for (const m of mismatched.slice(0, 40))
    console.log(`  ${m.city}/${m.id} [${m.field}] topics=${m.fired.join(',')}\n    claim : ${m.text.slice(0, 96)}\n    source: ${m.url}\n`);
  if (mismatched.length > 40) console.log(`  … ${mismatched.length - 40} more`);
}
fs.writeFileSync('data/_topic_check.json', JSON.stringify({ checked: jobs.length, ok, mismatched, blocked }, null, 1));
console.log('report -> data/_topic_check.json');
