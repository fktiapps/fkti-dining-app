// Read a Tabelog menu that the Japanese locale refuses to serve.
//
// Tabelog serves 403 to this egress on the JAPANESE locale
// (tabelog.com/tokyo/... and s.tabelog.com) but 200 on every other locale — /en/,
// /tw/, /kr/, /cn/. So the parked records were never unreachable; only the JA text is.
//
// We pull three locales and print them ALIGNED, because no single one is enough:
//   en  gives a usable English gloss and the "As of <date>" stamp (provenance)
//   tw  leaves the ORIGINAL JAPANESE in place wherever a term has no Chinese
//       equivalent (おかめ, 板わさ, 冷やかけうどん) and keeps JA parentheticals
//   kr  transliterates rather than translates (텐자루 = tenzaru, 가케소바 = kakesoba),
//       recovering the Japanese reading the English gloss destroys
// Three views of one JA source reconstruct it far better than any one translation.
//
//   node scripts/harvest-tabelog.mjs <place-id> [place-id ...]   # resolved via city data
//   node scripts/harvest-tabelog.mjs https://tabelog.com/tokyo/A.../13000629/
//
// Pass --city=<name> to resolve ids against a city other than tokyo.
import fs from 'node:fs';
import { execFileSync } from 'node:child_process';

const UA = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/139.0.0.0 Safari/537.36';
const ent = s => s.replace(/&yen;/g, '¥').replace(/&amp;/g, '&').replace(/&quot;/g, '"')
  .replace(/&nbsp;/g, ' ').replace(/&#(\d+);/g, (_, d) => String.fromCharCode(+d)).trim();
const loc = (u, l) => u.replace(/tabelog\.com\/(en\/|tw\/|kr\/|cn\/)?tokyo\//, `tabelog.com/${l}/tokyo/`)
  .replace(/\/(dtlmenu\/?)?$/, '/') + 'dtlmenu/';
const get = u => {
  try { return execFileSync('curl', ['-s', '-A', UA, '--max-time', '30', u], { encoding: 'utf8', maxBuffer: 1 << 26 }); }
  catch { return ''; }
};
const clean = v => ent(v.replace(/<[^>]*>/g, ' ').replace(/\s+/g, ' '));

// Walk the page in DOCUMENT ORDER and hang each price on the title that precedes it.
// Zipping the title list against the price list by index is wrong and silently
// misprices dishes: おばんざい味ゆぅ opens with an UNPRICED disclaimer row ("This is an
// example. The offerings may change."), which shifted every price up one slot and put
// 780円 on a 630円 dish. Whole sections that quote no price — the day's obanzai, monja
// lists that only name headings — shift everything after them too. Order is the only
// safe join, and it also recovers which section each dish sits in.
const items = h => {
  const toks = [...h.matchAll(/rstdtl-menu-lst__(title|menu-title|price|ex-text)[^>]*>([\s\S]*?)<\/(?:h4|p)>/g)];
  const out = [];
  let sec = '';
  for (const m of toks) {
    const kind = m[1], val = clean(m[2]);
    if (kind === 'title') sec = val;
    else if (kind === 'menu-title') out.push({ t: val, p: '', d: '', sec });
    else if (out.length) out[out.length - 1][kind === 'price' ? 'p' : 'd'] = val;
  }
  return out;
};

const one = (h, re) => { const m = h.match(re); return m ? clean(m[1] ?? m[0]) : ''; };

export function harvest(website) {
  const en = get(loc(website, 'en')), tw = get(loc(website, 'tw')), kr = get(loc(website, 'kr'));
  const E = items(en), T = items(tw), K = items(kr);
  const out = [];
  out.push(`URL ${loc(website, 'en')}`);
  const ld = en.match(/"@type":"Restaurant"[\s\S]{0,700}/);
  if (ld) out.push(`JSONLD ${ld[0]}`);
  out.push(`SECTIONS ${[...new Set(E.map(x => x.sec))].filter(Boolean).join(' | ')}`);
  const addr = en.match(/東京都[^<\n]{4,40}/);
  if (addr) out.push(`ADDR ${addr[0].trim()}`);
  for (const k of ['Business hours', 'Number of seats', 'Average price', 'Closed']) {
    const i = en.indexOf(k);
    if (i > 0) out.push(`${k}: ${clean(en.slice(i, i + 600)).slice(0, 260)}`);
  }
  if (/Listing on hold|listing is on hold|掲載保留/.test(en)) out.push('!! LISTING ON HOLD — closure/relocation unconfirmed');
  if (/permanently closed/.test(en)) out.push('!! CLOSED marker present');
  // A mismatch across locales means the three pages disagree about how many rows exist,
  // so the row-by-row cross-read below is not trustworthy for this shop.
  out.push(`ITEMS en=${E.length} tw=${T.length} kr=${K.length}${E.length === T.length && T.length === K.length ? '' : '  !! LOCALE ROW COUNTS DISAGREE — cross-read unreliable'}`);
  const n = Math.max(E.length, T.length, K.length);
  for (let i = 0; i < n; i++) {
    const e = E[i] || {}, t = T[i] || {}, k = K[i] || {};
    const desc = e.d || t.d ? `\n     desc: ${e.d || ''} // ${t.d || ''}` : '';
    out.push(` ${String(i + 1).padStart(2)}. [${e.sec || ''}] ${e.p || t.p || k.p || '(NO PRICE PRINTED)'}`
      + `\n     en: ${e.t || ''}\n     tw: ${t.t || ''}\n     kr: ${k.t || ''}${desc}`);
  }
  return out.join('\n');
}

if (process.argv[2]) {
  const args = process.argv.slice(2).filter(a => !a.startsWith('--'));
  const city = (process.argv.find(a => a.startsWith('--city=')) || '--city=tokyo').split('=')[1];
  // Resolve place ids lazily: a bare Tabelog URL needs no city data at all.
  let byId = null;
  const lookup = async id => {
    if (!byId) {
      const { readCity } = await import('./lib-city.mjs');
      byId = Object.fromEntries(readCity(city).places.map(r => [r.id, r]));
    }
    return byId[id];
  };
  for (const a of args) {
    if (/^https?:\/\//.test(a)) {
      console.log(`
${'='.repeat(72)}
### ${a}
${'='.repeat(72)}`);
      console.log(harvest(a));
      continue;
    }
    const r = await lookup(a);
    if (!r) { console.log(`?? ${a} is not a place id in ${city}`); continue; }
    if (!/tabelog\.com/.test(r.website || '')) { console.log(`?? ${a} has no Tabelog url (${r.website || 'no website'})`); continue; }
    console.log(`
${'='.repeat(72)}
### ${r.id}  ${r.name}  [${r.cuisine || ''}]
${'='.repeat(72)}`);
    console.log(harvest(r.website));
  }
}
