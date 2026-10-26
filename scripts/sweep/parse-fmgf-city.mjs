// Parse a saved FindMeGlutenFree city page (curl it — node fetch is blocked by Cloudflare) into
// vegan/GF seed rows: scripts/sweep/<city>/vegan-seeds.jsonl. Coordinates come later, from the
// matched Tabelog listing (FMGF city pages give English addresses only).
//   curl -sL -A "Mozilla/5.0" https://www.findmeglutenfree.com/jp/<city> -o scripts/sweep/<city>/work/fmgf_<city>.html
//   node scripts/sweep/parse-fmgf-city.mjs <city> <saved.html>
import fs from 'fs';
import { cityDir, readJsonl, appendJsonl } from './lib.mjs';
const [city, file] = process.argv.slice(2);
const out = `${cityDir(city)}/vegan-seeds.jsonl`; const have = new Set(readJsonl(out).map(r => r.src));
const h = fs.readFileSync(file, 'utf8');
const items = h.split(/<li data-id="/).slice(1);
const dec = s => s.replace(/&amp;/g, '&').replace(/&quot;/g, '"').replace(/&#39;/g, "'").trim();
let n = 0;
for (const it of items) {
  const link = (it.match(/href="(\/biz\/[^"]+)"/) || [])[1]; if (!link) continue;
  const src = 'https://www.findmeglutenfree.com' + link; if (have.has(src)) continue;
  const row = {
    src, source: 'fmgf',
    name: dec((it.match(/class="align-middle" href="[^"]+"\s*>([^<]+)</) || [])[1] || ''),
    addr: dec((it.match(/class="sl-addr[^"]*">([^<]+)</) || [])[1] || ''),
    stars: +((it.match(/title="([\d.]+) star rating"/) || [])[1] || 0) || null,
    reviews: +((it.match(/<span class="ml-1">\((\d+)\)<\/span>/) || [])[1] || 0) || null,
    kind: dec((it.match(/class="mt-1 sl-tags">([^<]+)</) || [])[1] || ''),
    dedicated: /dedicated gluten-free badge/.test(it) || null,
    gf_items: dec((it.match(/GF menu items:<\/strong>\s*([^<]+)</) || [])[1] || '') || null,
    snippet: dec((it.match(/Featured review snippet<\/span>\s*&quot;([^<]+?)&quot;/) || [])[1] || '') || null,
    ward: (it.match(/(Chuo|Naniwa|Nishi|Tennoji|Kita|Abeno|Minato|Nishinari|Tennōji|Chūō)[ -]Ward|(Chuo|Naniwa|Nishi|Tennoji|Kita|Abeno|Nishinari)-ku/i) || [])[0] || null,
    tabelog: null, at: new Date().toISOString().slice(0, 10),
  };
  appendJsonl(out, row); n++;
}
console.log('seeds added', n);
