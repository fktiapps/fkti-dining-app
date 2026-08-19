// Merge researched menu entries into the per-city `<city>_menus.json` files and
// set the derived flags the app reads off the record.
//
// The per-item `gf` flag is a safety claim shown next to a dish name, so it is
// validated hardest: an item may only be "gf" when its note says WHY. Research
// repeatedly turned up rice-flour bakeries whose own allergen line reads 小麦
// because wheat is baked in the same workshop — an unexplained "gf" is exactly
// the failure that produces.
//
//   node scripts/merge-menus.mjs [--dry]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const DRY = process.argv.includes('--dry');
const DIR = 'data/_menu_verdicts';

const VERIFIED = new Set(['authoritative', 'partial', 'provisional']);
const CONF = new Set(['high', 'medium', 'low']);
const GF = new Set(['gf', 'ask', 'no', '']);
const VEGAN = new Set(['vegan', 'ask', 'no', '']);

if (!fs.existsSync(DIR)) { console.log(`no ${DIR} — nothing to merge`); process.exit(0); }

const survivors = fs.existsSync('data/_dupe_survivors.json')
  ? JSON.parse(fs.readFileSync('data/_dupe_survivors.json', 'utf8')) : {};

// The city is encoded in the filename, but agents checkpoint into shards with
// assorted decorations: nara.json, toba2.json, _nagano_partA.json, himeji2_part1.json.
// Recognise the city anywhere in the name rather than silently skipping a shard —
// a skipped shard is lost research that nothing else would report.
// Agents checkpoint into shard files and sometimes into a subdirectory
// (data/_menu_verdicts/_toba_parts/). Walk one level in so a nested shard is not
// silently ignored — that already cost 10 menus once.
const files = [];
for (const f of fs.readdirSync(DIR)) {
  const full = `${DIR}/${f}`;
  if (fs.statSync(full).isDirectory()) {
    for (const g of fs.readdirSync(full)) if (g.endsWith('.json')) files.push(`${f}/${g}`);
  } else if (f.endsWith('.json')) files.push(f);
}
const byCity = {};
for (const f of files) {
  const stem = f.replace(/\.json$/, '').replace(/\//g, '_').toLowerCase();
  const city = CITIES.find(c => stem.replace(/[^a-z]/g, '').startsWith(c) || stem.includes(c));
  if (!city) { console.log(`  ?? ${f}: no city in the filename — SKIPPED, check this`); continue; }
  byCity[city] = Object.assign(byCity[city] || {}, JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8')));
}

function problems(entry, id) {
  const p = [];
  if (!VERIFIED.has(entry.verified)) p.push(`verified "${entry.verified}"`);
  if (!CONF.has(entry.confidence)) p.push(`confidence "${entry.confidence}"`);
  if (!Array.isArray(entry.sources) || !entry.sources.length) p.push('no sources');
  if (!Array.isArray(entry.items)) return [...p, 'items is not an array'];

  entry.items.forEach((it, i) => {
    const at = `item[${i}] "${it.ja || it.en || '?'}"`;
    if (!it.ja && !it.en) p.push(`${at}: needs at least ja or en`);
    if (!GF.has(it.gf)) p.push(`${at}: gf "${it.gf}"`);
    if (!VEGAN.has(it.vegan)) p.push(`${at}: vegan "${it.vegan}"`);
    // A bare "gf" with no reasoning is not usable next to a dish NAME — that is how
    // an unexamined claim reaches a celiac. Plain drinks are exempted, because
    // demanding a note on orange juice only teaches the next pass to write filler.
    // Beer, malt and barley drinks are deliberately NOT exempt: 麦茶 is barley and
    // beer is the single most common thing mistaken for gluten-free.
    const label = `${it.ja || ''} ${it.en || ''} ${it.romaji || ''}`;
    const plainDrink = /(juice|water|tea|coffee|espresso|latte|americano|cocoa|cola|soda|wine|sake|smoothie)|ジュース|ラテ|ティー|ウーロン|烏龍|緑茶|煎茶|ほうじ|コーヒー|カフェオレ|エスプレッソ|ココア|ワイン|日本酒|ソーダ|スムージー|タイザー|ジンジャーエール/i.test(label);
    const glutenDrink = /(beer|ale|lager|malt|barley|whisk|highball)|ビール|麦茶|麦焼酎|ハイボール|生中|発泡酒/i.test(label);
    if (it.gf === 'gf' && !String(it.note || '').trim() && (!plainDrink || glutenDrink))
      p.push(`${at}: gf="gf" with an empty note`);
    if (it.gf === 'gf' && glutenDrink)
      p.push(`${at}: gf="gf" on a barley/malt drink — beer and 麦茶 are not gluten-free`);
  });

  // authoritative means it came from the shop; that should show in the sources
  if (entry.verified === 'authoritative' && !entry.items.length)
    p.push('verified="authoritative" with zero items');
  return p;
}

let merged = 0, empty = 0, rejected = 0, unmatched = 0, items = 0, auth = 0;
const bad = [];

for (const city of CITIES) {
  const entries = byCity[city];
  if (!entries) continue;

  const j = readCity(city);
  const ids = new Set(j.places.map(r => r.id));
  const mp = `data/${city}_menus.json`;
  const menus = JSON.parse(fs.readFileSync(mp, 'utf8'));
  let dirtyMenus = false, dirtyCity = false;

  for (const [rawId, entry] of Object.entries(entries)) {
    // Follow a record that was merged into a duplicate survivor after this
    // research was written — otherwise the menu is silently dropped.
    const id = (!ids.has(rawId) && survivors[rawId]) ? survivors[rawId] : rawId;
    if (id !== rawId) console.log(`  ~ ${rawId} -> ${id} (merged duplicate)`);
    if (!ids.has(id)) { unmatched++; bad.push(`${city}/${rawId}: no matching record`); continue; }
    const errs = problems(entry, id);
    if (errs.length) { rejected++; bad.push(`${city}/${id}: ${errs.slice(0, 4).join('; ')}`); continue; }

    const n = entry.items.length;
    if (!n) { empty++; }                       // honest "no menu published" — recorded, not merged
    else {
      menus[id] = entry;
      dirtyMenus = true;
      merged++; items += n;
      if (entry.verified === 'authoritative') auth++;
    }

    // derived flags the app reads off the record
    const r = j.places.find(x => x.id === id);
    const gfItems = entry.items.filter(i => i.gf === 'gf');
    const askItems = entry.items.filter(i => i.gf === 'ask');
    const veganItems = entry.items.filter(i => i.vegan === 'vegan');
    r.has_menu = n > 0;
    if (n) {
      r.menu_verified = entry.verified;
      r.menu_gf_count = gfItems.length;
      r.menu_gf_ask_count = askItems.length;
      r.menu_vegan_count = veganItems.length;
      r.menu_vegan_meals = veganItems.filter(i => !/dessert|drink|sweet|ドリンク|デザート/i.test(i.section || '')).length;
    }
    dirtyCity = true;
  }

  if (!DRY && dirtyMenus) fs.writeFileSync(mp, JSON.stringify(menus, null, 1));
  if (!DRY && dirtyCity) writeCity(city, j);
  console.log(`${city.padEnd(11)}${Object.keys(entries).length} entr(ies) processed`);
}

console.log(`\nmerged ${merged} menus (${items} items, ${auth} authoritative), ${empty} honest-empty, ${rejected} rejected, ${unmatched} unmatched${DRY ? '  (dry run)' : ''}`);
if (bad.length) { console.log('\nnot merged:'); bad.forEach(b => console.log('  x ' + b)); process.exitCode = 1; }
