// For each Tabelog /en/ shop URL: save the listing, its review list and up to N reviews as text.
//   node scripts/sweep/fetchshop.mjs <city> <N> <tabelog url>...   → scripts/sweep/<city>/work/shops/<id>/
// (work/ is gitignored and re-fetchable; copied from the Ginza scratchpad tool.)
import fs from 'fs';
const [CITY, N, ...URLS] = process.argv.slice(2); const OUT = `scripts/sweep/${CITY}/work/shops`;
const UA = { 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', 'Accept-Language': 'en' };
const sleep = ms => new Promise(z => setTimeout(z, ms));
const text = h => h.replace(/<script[\s\S]*?<\/script>/gi, ' ').replace(/<style[\s\S]*?<\/style>/gi, ' ')
  .replace(/<br\s*\/?>/gi, '\n').replace(/<\/(p|div|li|h\d|tr|dt|dd|th|td)>/gi, '\n').replace(/<[^>]+>/g, ' ')
  .replace(/&nbsp;/g, ' ').replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#0?39;/g, "'")
  .split('\n').map(s => s.replace(/\s+/g, ' ').trim()).filter(Boolean).join('\n');
const get = async u => { const r = await fetch(u, { headers: UA }); await sleep(+process.env.FETCH_DELAY_MS || 1100); return { s: r.status, h: await r.text() }; };
for (const U of URLS) {
  const id = U.match(/\/(\d+)\/?$/)[1]; const dir = `${OUT}/${id}`; fs.mkdirSync(dir, { recursive: true });
  const { s, h } = await get(U); fs.writeFileSync(`${dir}/listing.txt`, `URL ${U}\nHTTP ${s}\n` + text(h));
  const ld = [...h.matchAll(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)].map(m => { try { return JSON.parse(m[1]) } catch { return null } }).find(j => j && j.geo);
  const b = h.match(/class="rst-status-badge-[a-z-]+__text"[^>]*>([^<]*)</);
  const meta = { url: U, http: s, lat: ld ? +ld.geo.latitude : null, lng: ld ? +ld.geo.longitude : null, badge: b ? b[1].trim() : null };
  const rl = await get(U + 'dtlrvwlst/');
  const ids = [...new Set([...rl.h.matchAll(/\/dtlrvwlst\/(B\d+)\//g)].map(m => m[1]))].slice(0, +N);
  meta.reviews = [];
  for (const r of ids) {
    const ru = `${U}dtlrvwlst/${r}/`; const x = await get(ru);
    let t = text(x.h); const a = t.indexOf('Visited on'); const z = t.indexOf('Restaurant information', a);
    t = a > -1 ? t.slice(a, z > a ? z : a + 6000) : t.slice(0, 3000);
    t = t.split('\n').filter(l => !/^(\d|View|Details|Food and taste|Service|Atmosphere|Cost performance|Drinks|Previous review|Next review)/.test(l) || /^Visited|JPY|¥|円/.test(l)).join('\n');
    fs.writeFileSync(`${dir}/${r}.txt`, `URL ${ru}\n` + t); meta.reviews.push(r);
  }
  fs.writeFileSync(`${dir}/meta.json`, JSON.stringify(meta, null, 1));
  console.log(id, s, meta.badge || '-', 'reviews', ids.length);
}
