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
// "true" is the legacy value from before this vocabulary existed — 89 shipped menus
// still carry it, and the agent brief wrongly listed it as valid, so agents kept
// producing it. It means "verified, but not from a first-party source", which is
// exactly `partial`. Fold it rather than reject a shop's whole researched menu over
// one word.
const VERIFIED_ALIAS = { true: 'partial', 'true': 'partial', verified: 'partial' };
const CONF = new Set(['high', 'medium', 'low']);
const GF = new Set(['gf', 'ask', 'no', '']);
const VEGAN = new Set(['vegan', 'ask', 'no', '']);

if (!fs.existsSync(DIR)) { console.log(`no ${DIR} — nothing to merge`); process.exit(0); }

const survivors = fs.existsSync('data/_dupe_survivors.json')
  ? JSON.parse(fs.readFileSync('data/_dupe_survivors.json', 'utf8')) : {};

// Resolve each entry's city from the RECORD IDS it contains, not from the
// filename. Agents name their shards freely — nara.json, toba2.json,
// _nagano2_b3.json, _part_MINE1.json — and a filename-based parser silently
// skipped 22 Kyoto shops that were sitting in files called _part_B/_C/_E.
// The ids are unambiguous and always present, so use those and keep the
// filename only as a tie-breaker.
const idCity = new Map();
for (const c of CITIES) for (const r of readCity(c).places) idCity.set(r.id, c);

const files = [];
for (const f of fs.readdirSync(DIR)) {
  const full = `${DIR}/${f}`;
  if (fs.statSync(full).isDirectory()) {
    for (const g of fs.readdirSync(full)) if (g.endsWith('.json')) files.push(`${f}/${g}`);
  } else if (f.endsWith('.json')) files.push(f);
}

const byCity = {};
for (const f of files) {
  const obj = JSON.parse(fs.readFileSync(`${DIR}/${f}`, 'utf8'));
  const unplaced = [];
  for (const [id, entry] of Object.entries(obj)) {
    const city = idCity.get(id) || idCity.get(survivors[id]);
    if (!city) { unplaced.push(id); continue; }
    (byCity[city] = byCity[city] || {})[id] = entry;
  }
  if (unplaced.length) console.log(`  ?? ${f}: ${unplaced.length} id(s) match no record — ${unplaced.slice(0, 3).join(', ')}`);
}

function problems(entry, id, unexplained = [], badDrinks = []) {
  const p = [];
  if (VERIFIED_ALIAS[entry.verified]) entry.verified = VERIFIED_ALIAS[entry.verified];
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
    const plainDrink = /(juice|water|tea|coffee|espresso|latte|mocha|americano|cocoa|cola|soda|wine|sake|smoothie|chai)|ジュース|ラテ|ティー|モカ|チャイ|ウーロン|烏龍|緑茶|煎茶|ほうじ|コーヒー|カフェオレ|カフェモカ|エスプレッソ|ココア|ワイン|日本酒|ソーダ|スムージー|タイザー|ジンジャーエール/i.test(label);
    // A highball is a spirit plus soda, so the gluten question is the SPIRIT, not the
    // format. ラムハイボール is rum — sugarcane, nowhere near a grain — and blanket-
    // rejecting every ハイボール threw out a shop's whole researched menu over a drink
    // that is genuinely fine. Unqualified 「ハイボール」 still counts as gluten, because in
    // Japan it means whisky by default; naming a non-grain spirit is what clears it.
    // The English side needs word boundaries. Without them this matched the PROSE in
    // an item description rather than its name: "Uji matcha WHISKed into milk",
    // "pale pink" (ale), "Ginger Ale". Three shops had their entire researched menus
    // rejected over a matcha latte, a guava juice and a ginger ale.
    const nonGrainSpirit = /(ラムハイ|ラム酒|\brum\b|テキーラ|\btequila\b|芋焼酎|泡盛|ウォッカ|\bvodka\b)/i.test(label);
    const gingerAle = /ginger ale|ジンジャーエール/i.test(label);   // a soft drink, no barley
    const glutenDrink = !nonGrainSpirit && !gingerAle && (
      /\b(beer|ale|lager|stout|malt|barley|whisky|whiskey|highball)\b/i.test(label) ||
      /ビール|麦茶|麦焼酎|ハイボール|生中|発泡酒|ウイスキー/.test(label));
    if (it.gf === 'gf' && !String(it.note || '').trim() && (!plainDrink || glutenDrink))
      unexplained.push(it);
    // Same severity reasoning as the unexplained-gf repair below: one wrong drink
    // flag is not grounds to discard a shop's whole researched menu. This rule has
    // false-positived on a matcha latte ("whisked"), a guava juice ("pale pink"), a
    // ginger ale and a bottle of mineral water — each costing an entire menu.
    // Repair the item instead, and to "no": beer and 麦茶 are not a matter of asking.
    if (it.gf === 'gf' && glutenDrink) badDrinks.push(it);
  });

  // authoritative means it came from the shop; that should show in the sources
  if (entry.verified === 'authoritative' && !entry.items.length)
    p.push('verified="authoritative" with zero items');
  return p;
}

let merged = 0, empty = 0, rejected = 0, unmatched = 0, items = 0, auth = 0, repaired = 0;
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
    // An unexplained gf flag is a per-ITEM defect. Rejecting the whole entry
    // would throw away a shop's entire researched menu over one line, so repair
    // the item instead: drop it to "ask" and say why. That is the cautious
    // direction, and it keeps the rest of the research.
    const unexplained = [], badDrinks = [];
    const errs = problems(entry, id, unexplained, badDrinks);
    if (errs.length) { rejected++; bad.push(`${city}/${id}: ${errs.slice(0, 4).join('; ')}`); continue; }
    for (const it of badDrinks) {
      it.gf = 'no';
      it.note = 'Flagged gluten-free during research, but this is a barley or malt drink — beer, 麦茶 and whisky highballs are not gluten-free. ' + (it.note || '');
      repaired++;
    }
    for (const it of unexplained) {
      it.gf = 'ask';
      it.note = 'Flagged gluten-free during research with no reason recorded, so downgraded to "ask" on merge. Plain rice and similar are usually fine, but confirm the seasoning and the serving scoop.';
      repaired++;
    }

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
