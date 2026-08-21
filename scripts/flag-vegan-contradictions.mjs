// Records labelled "fully vegan" whose own researched menu sells meat, fish or dairy.
//
// This has turned out to be the most common defect in the dataset. The verification
// agents have found it on Ramen Kazu (chicken paitan), Cafe Phalam (和牛100% burger),
// GYUMON (A5 wagyu), Falafel Garden (chicken kebab), Telaviv (minced-meat hummus),
// Chikurintei (ham and prosciutto ramen), waco crepes (smoked salmon and cream
// cheese), musubi cafe, MOON and BACK Nishiki, LOVE for ALL, Nicot & Mum's (gelatin
// in the doughnuts) — one at a time, a shard at a time.
//
// But 9,043 menu items are already researched and sitting in this repo, so most of it
// can be found in one pass instead of thirty. If a record says "fully vegan" and its
// own menu names beef, chicken, fish, cheese, egg or gelatin, the label is wrong and
// nobody needs to fetch a page to know it.
//
// The ONLY signal used is an item the researcher already marked vegan:"no". Matching
// animal words in item NAMES was tried first and had to be thrown away: Japanese
// vegan menus deliberately name plant dishes after animal ones, and that is the whole
// idiom. 車麩の唐揚げ is fried seitan, 豆乳ヨーグルト is soy yogurt, ベジツナマヨ is chickpea,
// テンペの唐揚げ is tempeh, リップルチーズバーガー uses a plant milk brand — and バターナッツ
// かぼちゃ is a squash, while エビスビール is a beer with 「エビ」 (shrimp) inside its name.
// A word-matching pass flagged 45 records and most were wrong; applying it would have
// mislabelled genuinely vegan restaurants as not-vegan, which is its own kind of harm.
//
// An item a researcher looked at and marked non-vegan carries a judgement no regex
// has. If a shop's own menu in this app contains one, "fully vegan" is wrong.
//
//   node scripts/flag-vegan-contradictions.mjs [--apply]
import fs from 'node:fs';
import { CITIES, readCity, writeCity } from './lib-city.mjs';

const APPLY = process.argv.includes('--apply');
const DATE = '2026-08-20';

// Named animal products. Deliberately concrete: 「肉」 alone matches 大豆ミート's Japanese
// gloss and 「卵」 appears in 「卵不使用」, so the words here are ones that only appear
// when the thing is actually being sold.
const ANIMAL = [
  ['牛肉|和牛|ビーフ|\bbeef\b|wagyu|ステーキ', 'beef'],
  ['豚肉|ポーク|\bpork\b|ベーコン|bacon|ハム|\bham\b|生ハム|prosciutto|チャーシュー|叉焼', 'pork'],
  ['鶏肉|チキン|\bchicken\b|唐揚げ|から揚げ|焼き鳥|親子丼', 'chicken'],
  ['魚|さかな|サーモン|salmon|マグロ|鮪|tuna|しらす|鰻|うなぎ|穴子|海老|エビ|shrimp|prawn|蟹|カニ|crab|貝|牡蠣|oyster|いか|イカ|squid|たこ|タコ', 'seafood'],
  ['鰹節|かつお節|katsuobushi|bonito|煮干し|niboshi|魚介だし|しらすだし', 'fish stock'],
  ['チーズ|cheese|生クリーム|\bcream\b|牛乳|ミルク|\bmilk\b|バター|butter|ヨーグルト|yogurt|練乳|脱脂粉乳|ホエイ|whey', 'dairy'],
  ['ゼラチン|gelatin|はちみつ|蜂蜜|honey|卵黄|卵白|全卵|マヨネーズ|mayonnaise', 'other animal product'],
];
const RX = ANIMAL.map(([p, name]) => [new RegExp(p, 'i'), name]);
// 「〜不使用」/「〜なし」/vegan-substitute wording means the item is saying the opposite.
const NEGATED = /不使用|なし|フリー|不含|抜き|代わり|ヴィーガン|ビーガン|vegan|plant[- ]based|substitute|不使用/i;

const flagged = [];
for (const city of CITIES) {
  const j = readCity(city);
  const menus = JSON.parse(fs.readFileSync(`data/${city}_menus.json`, 'utf8'));
  let dirty = false;
  for (const r of j.places) {
    if (r.vegan_status !== 'full' || r.hidden) continue;
    const entry = menus[r.id];
    if (!entry?.items?.length) continue;
    const found = [];
    for (const it of entry.items) {
      const label = `${it.ja || ''} ${it.en || ''}`;
      if (it.vegan !== 'no') continue;
      let what = 'marked non-vegan by the researcher';
      for (const [rx, name] of RX) if (rx.test(label)) { what = name; break; }
      found.push({ item: it.ja || it.en, what, marked: 'no', note: String(it.note || '').slice(0, 120) });
    }
    if (!found.length) continue;
    // An item the researcher already marked non-vegan is the shop's menu contradicting
    // the shop's label — the strongest form this evidence takes.
    const explicit = found.length;
    flagged.push({ city, id: r.id, name: r.name, items: found.length, explicit,
                   examples: found.slice(0, 4) });
    if (!APPLY) continue;
    r.vegan_menu_contradiction = { date: DATE, items: found.length, explicit,
      examples: found.slice(0, 6),
      note: `This record's own researched menu names ${found.length} item(s) containing ` +
            'animal products, so "fully vegan" is not right. Held at "some vegan options".' };
    r.vegan_status = 'options';
    r.vegan_label = 'Some vegan options';
    r.vegan_detail = `[Held at "some vegan options" ${DATE}] The shop's own menu in this app ` +
      `lists ${found.length} item(s) with animal products (e.g. ${found.slice(0, 2).map(f => f.item).join(', ')}). ` +
      (r.vegan_detail || '');
    dirty = true;
  }
  if (dirty) writeCity(city, j);
}

console.log(`${flagged.length} record(s) labelled "fully vegan" whose own menu says otherwise\n`);
for (const f of flagged)
  console.log(`  ${f.city}/${String(f.name).slice(0, 30).padEnd(32)} ${String(f.items).padStart(3)} item(s)` +
    (f.explicit ? `, ${f.explicit} already marked non-vegan` : '') +
    `\n      e.g. ${f.examples.map(e => `${e.item} (${e.what})`).join(' · ').slice(0, 130)}`);
fs.writeFileSync('data/_vegan_contradictions.json', JSON.stringify(flagged, null, 1));
if (!APPLY && flagged.length) console.log('\nDRY RUN — nothing written. Re-run with --apply.');
