// Ginza Station half-mile sweep (805 m), batch 1 — ramen. Researched 2026-10-24.
//   ~ tokyo3__108  銀座 篝 本店           (unhidden: full record)
//   ~ tokyo3_ginza 銀座 朧月              (unhidden: full record)
//   ~ tokyo3_higash 銀座はるちゃんラーメン (unhidden: full record)
//   + らーめん 松富 · 銀座 八五 · 中華そば 共楽
// Sources: Tabelog /en/ listings (incl. shop-registered menus) + dated 2026 reviews, san-tatsu,
// enjoytokyo, BAILA, TV Tokyo, Food Operation Japan's press release. Pins: Tabelog /en/ geo + GSI
// lot match (+ OSM node where one exists). Run from the repo root. Idempotent.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
const { readLang, mergePlace, writeLang } = await import(pathToFileURL(path.resolve('scripts/lib-i18n.mjs')).href);

const file = 'data/tokyo.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
const mf = 'data/tokyo_menus.json'; const menus = JSON.parse(fs.readFileSync(mf, 'utf8'));
const ja = readLang('tokyo', 'ja');
const TODAY = '2026-10-24';
const SWEEP = { name: 'ginza-half-mile', center: 'Ginza Station', radius_m: 805, date: TODAY };
const gm = q => 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(q);
const it = (ja, romaji, en, price, section, gf, vegan, note, dish_key) => ({ ja, romaji, en, price, section, gf, vegan, note, dish_key });
const MEAL = /main|entree|course|set\b|teishoku|定食|丼|donburi|rice bowl|curry|カレー|hot ?pot|nabe|鍋|grill|teppan|鉄板|焼|主菜|おかず|lunch|dinner|noodle|麺|ramen|そば|うどん|soba|udon|pasta|burger|sandwich|plate|sushi|寿司|鮨|bento|弁当|定番|ご飯もの|gohan/i;
const PERIPH = /drink|beverage|ドリンク|コーヒー|珈琲|coffee|\btea\b|茶|dessert|sweets|デザート|甘味|スイーツ|パフェ|cake|ケーキ|\bside|サイド|小鉢|副菜|pickle|漬|appetiz|前菜|snack|topping|トッピング|salad|サラダ/i;
const isMeal = i => !PERIPH.test(i.section) && (MEAL.test(i.section) || MEAL.test(i.en + ' ' + i.ja));
const counts = items => ({
  menu_gf_count: items.filter(i => i.gf === 'gf').length, menu_vegan_count: items.filter(i => i.vegan === 'vegan').length,
  menu_gf_meals: items.filter(i => i.gf === 'gf' && isMeal(i)).length, menu_vegan_meals: items.filter(i => i.vegan === 'vegan' && isMeal(i)).length,
  menu_gf_ask_count: items.filter(i => i.gf === 'ask').length,
});
const log = [];
// New ids are added; existing sweep placeholders are researched in place (id, provenance kept).
const put = (place, menu, jaFields) => {
  Object.assign(place, { has_menu: true, menu_verified: menu.verified, ...counts(menu.items), sweep: SWEEP });
  const i = d.places.findIndex(p => p.id === place.id);
  if (i > -1) {
    const old = d.places[i];
    if (old.sweep && old.sweep.date === TODAY) { log.push(`${place.id}: already done`); return; }
    const keep = {};
    for (const k of ['source_pass', 'name_renamed', 'merged_from']) if (old[k] !== undefined) keep[k] = old[k];
    keep.researched_from_placeholder = { date: TODAY, prior_name: old.name, prior_hidden: old.hidden || null };
    d.places[i] = { ...place, ...keep };
    log.push(`${place.id}: researched in place and unhidden`);
  } else { d.places.push(place); log.push(`${place.id}: added`); }
  menus[place.id] = menu; mergePlace(ja, place.id, jaFields);
};
const day = (...spans) => spans;

// ================================================================ 銀座 篝 本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13230021/'; const R = TB + 'dtlrvwlst/';
  const place = {
    id: 'tokyo3__108', name: '銀座 篝 本店 (Ginza Kagari Honten)', category: 'OMNI',
    lat: 35.671314, lng: 139.761363,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. A chicken-paitan ramen counter: the bowls are ramen-type noodles, which are wheat by default, and no gluten-free noodle is mentioned in any source. Tabelog's shop listing says allergy information is available, so ask to see it. That will not change the noodles.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Every bowl in the sources is built on a rich chicken-paitan soup, topped with chicken or pork chashu and an egg. No meat-free bowl is mentioned.',
    hours_raw: 'Daily 11:00–21:30 (Tabelog). Ticket machine; cashless only (a 2026 diner warns that cash is not accepted). No reservations.',
    hours: { 0: day(['11:00', '21:30']), 1: day(['11:00', '21:30']), 2: day(['11:00', '21:30']), 3: day(['11:00', '21:30']), 4: day(['11:00', '21:30']), 5: day(['11:00', '21:30']), 6: day(['11:00', '21:30']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, in the back lane next to Ginza Oborozuki — 3 min from Ginza Stn (Marunouchi line), 6 min from JR Yūrakuchō',
    cuisine: 'Chicken-paitan ramen (tori paitan soba) · tsukemen', cuisine_type: 'ramen',
    website: null, gmaps: gm('銀座 篝 本店 東京都中央区銀座6-4-12'), menu_url: null,
    notes: "[Ramen · tori paitan] The original shop of 篝 (Kagari), opened in December 2018 in a back lane of Ginza 6-chōme. The other branches include one at Roppongi Hills. The bowl that made it famous is 鶏白湯SOBA: a thick, creamy chicken-paitan soup that diners liken to a chicken potage. It comes dressed with a row of colourful seasonal vegetables, and fried onion and ginger are served on the side for changing the flavour. There is also a shoyu chicken-paitan, a version with fresh truffle, and tsukemen. It has 18 counter seats and a cashless ticket machine. Staff hand out the menu in the queue, and Tabelog lists an English menu. Most of the 2026 crowd is from overseas, and so are many of the staff.",
    chef_bio: {
      chef_name: null, roles: ['ramen brand (篝 Kagari) — head shop'],
      origin: 'Ginza 6-chōme, Tokyo; opened 27 December 2018',
      background: 'The head shop of the Kagari brand, which also runs other branches, among them one at Roppongi Hills. No operating company or chef is named in any source found.',
      philosophy: null,
      specialty: 'Tori paitan soba — thick, creamy chicken-paitan ramen dressed with seasonal vegetables; truffle and shoyu versions; chicken-and-porcini tsukemen.',
      anecdotes: [
        { text: "Diners compare the soup to a chicken potage (also to their favourite corn soup); fried onion and ginger come on the side, and ginger in particular 'tightens up' the rich broth.", source: R + 'B534535252/' },
        { text: 'The standard bowl came with chashu, green onion, pumpkin, seasoned egg, lotus root, bell pepper, mitsuba, daikon, bamboo shoot, sweet potato and yellow flower petals (October 2026).', source: R + 'B536212048/' },
        { text: "A staff member outside walked a first-timer through the menu and then helped with the ticket machine.", source: R + 'B536212048/' },
        { text: 'A regular of the Roppongi Hills branch made a first visit to the head shop in October 2026.', source: R + 'B537051116/' },
      ],
      japanese_sources_summary: '食べログ: 銀座 篝 本店、中央区銀座6-4-12 1F、TEL 03-6263-8900、開店2018年12月27日、カウンター18席、毎日11:00〜21:30、予約不可。カード・電子マネー・QR決済可、アレルギー情報あり、英語メニューあり。2026年の口コミ: 鶏白湯SOBA 2,000円、生トリュフの鶏白湯醤油SOBA 3,000円、券売機は現金不可、客の多くが海外から。',
      confidence: 'medium', sources: [TB, R + 'B534535252/', R + 'B536212048/', R + 'B536140372/', R + 'B537051116/'],
    },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; staff hand it out in the queue and help at the cashless ticket machine. Most customers and many staff are from overseas. 18 counter seats; expect a line.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'A ramen counter serving chicken-paitan soba and tsukemen with ramen-type noodles; no gluten-free noodle is mentioned.', source: R + 'B536212048/' }],
      soy_sauce_wheat: [{ text: 'The menu includes a shoyu (soy sauce) chicken-paitan and a chicken-and-porcini shoyu tsukemen; Japanese soy sauce is brewed with wheat unless stated otherwise.', source: R + 'B535886480/' }],
      vegan_cross_contact: [{ text: 'The signature soup is a thick chicken paitan, topped with chashu and a seasoned egg.', source: R + 'B536212048/' }],
      staff_allergy_handling: [{ text: "Tabelog's listing notes 'Allergy information available' for the food menu.", source: TB }],
      positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken'], broth_texture: 'paitan', tare: ['shio', 'shoyu'], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: null, notes: 'Medium straight noodles (October 2026 review).' },
      regional_style: [], sub_genre: ['tori-paitan', 'tsukemen'],
      signature_bowl: '鶏白湯SOBA (chicken-paitan soba), ¥2,000 in October 2026; a fresh-truffle shoyu version is ¥3,000.',
      chashu: 'Tender chashu on the standard bowl; reviewers describe it as unremarkable next to the soup.',
      notable_toppings: ['a row of seasonal vegetables (pumpkin, lotus root, bell pepper, daikon, sweet potato…)', 'seasoned egg', 'mitsuba', 'fried onion and ginger on the side'],
      gf: { status: 'no', note: 'Wheat ramen noodles; no gluten-free option documented.' },
      vegan: { status: 'no', note: 'Chicken-paitan soup throughout.' },
      pantheon: 'A Ginza-style take on tori paitan: the chicken soup is pushed to a thick, potage-like cream, then dressed like a small kaiseki plate with a row of seasonal vegetables. Fried onion and ginger on the side let you cut the richness halfway.',
      profile: { richness: 4, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B534535252/', 'Quite rich and creamy, reminiscent of a chicken potage, thick and packed with chicken umami.'],
        oiliness: [R + 'B535891550/', 'Creamy and smooth; easy to finish without tiring of it.'],
        clarity: [R + 'B534535252/', 'A thick, creamy paitan — the opposite of a clear soup.'],
        tare_strength: [null, 'Not described in any source read; scored at the midpoint.'],
        noodle_firmness: [R + 'B536212048/', 'Medium straight noodles; no comment on firmness.'],
        aroma_punch: [R + 'B534535252/', 'Fried onion and ginger come on the side as optional accents; truffle only in the truffle bowl.'],
      },
      confidence: 'medium', sources: [TB, R + 'B534535252/', R + 'B535891550/', R + 'B536212048/', R + 'B537051116/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-12 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current, no status badge; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番12号 (go) 47m; ${TODAY}`,
  };
  const items = [
    it('鶏白湯SOBA', 'tori paitan soba', 'Chicken-paitan soba (house bowl)', '¥2,000', 'Ramen', 'no', 'no', 'Price paid by Tabelog reviewers, October 2026.', 'tori_paitan_soba'),
    it('', '', 'Shoyu chicken-paitan soba with fresh truffle', '¥3,000', 'Ramen', 'no', 'no', 'Price paid by Tabelog reviewers, October 2026. Soy sauce = wheat by default.', 'tori_paitan_truffle'),
    it('', '', 'Shoyu chicken-paitan soba', '', 'Ramen', 'no', 'no', 'Mentioned by a Tabelog reviewer, October 2026.', 'tori_paitan_shoyu'),
    it('', '', 'Chicken-and-porcini shoyu tsukemen', '', 'Tsukemen', 'no', 'no', 'Ordered by a Tabelog reviewer, October 2026.', 'tsukemen_porcini'),
  ];
  put(place, { verified: 'provisional', confidence: 'low', sources: [R + 'B535891550/', R + 'B536212048/', R + 'B537051116/', R + 'B534479177/', R + 'B535886480/', R + 'B536140372/'],
    price_note: 'No menu is published on Tabelog and the shop has no website on record. Items and prices come from Tabelog reviews dated October 2026, machine-translated, so Japanese names are left blank where the review did not show them.', last_checked: TODAY, items }, {
    cuisine: '鶏白湯ラーメン(鶏白湯SOBA)・つけ麺',
    neighborhood: '銀座六丁目、銀座 朧月の隣の路地。銀座駅(丸ノ内線)から徒歩3分、JR有楽町駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。鶏白湯ラーメンの店で、ラーメンの麺は基本的に小麦です。グルテンフリーの麺はどの情報源にも見当たりません。食べログの店舗情報には「アレルギー情報あり」とあるので見せてもらってください。ただし麺は変わりません。',
    vegan_detail: 'ヴィーガンではありません。情報源にあるラーメンはすべて濃厚な鶏白湯スープに鶏や豚のチャーシューと卵をのせたもので、肉を使わない一杯は見当たりません。',
    notes: '[ラーメン・鶏白湯] 2018年12月、銀座六丁目の路地に開いた「篝」の本店で、六本木ヒルズなどにも支店があります。看板の「鶏白湯SOBA」は、鶏のポタージュにたとえられる濃厚でクリーミーな鶏白湯に、彩り豊かな季節野菜を並べた一杯。フライドオニオンと生姜が別添えで、途中で味を変えられます。鶏白湯醤油、生トリュフのせ、つけ麺もあります。カウンター18席で、券売機はキャッシュレスのみ。行列中にメニューを渡してくれ、食べログによれば英語メニューもあります。2026年の客の多くは海外からで、スタッフにも海外出身の人が多くいます。',
  });
}

// ================================================================ 銀座 朧月
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13300963/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const ST = 'https://san-tatsu.jp/articles/265624/';
  const lunch = ['11:00', '15:30'];
  const place = {
    id: 'tokyo3_ginza', name: '銀座 朧月 (Ginza Oborozuki)', category: 'MOM_AND_POP',
    lat: 35.671227, lng: 139.761362,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. A tsukemen and chuka-soba counter: thick tsukemen noodles and flat wavy ramen noodles, wheat by default, with no gluten-free noodle in any source. The dipping soup is a seafood-and-pork-bone blend, and its seasoning is not published.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The dipping soup is seafood and pork bone, the chuka soba is a niboshi (dried sardine) broth, and every bowl carries chashu or has chopped chashu in the soup.',
    hours_raw: "Mon, Tue, Sun & holidays 11:00–15:30 & 17:00–22:00; Wed–Thu 11:00–15:30 & 17:00–22:30; Fri–Sat 11:00–15:30 & 17:00–23:00 (last order 22:50). Irregular long break over New Year. Cards, IC and QR payments accepted.",
    hours: { 0: day(lunch, ['17:00', '22:00']), 1: day(lunch, ['17:00', '22:00']), 2: day(lunch, ['17:00', '22:30']), 3: day(lunch, ['17:00', '22:30']), 4: day(lunch, ['17:00', '23:00']), 5: day(lunch, ['17:00', '23:00']), 6: day(lunch, ['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 6-chōme, in the back lane beside Ginza Kagari — 3 min from Ginza Stn, 8 min from JR Yūrakuchō',
    cuisine: 'Tsukemen (rich seafood–pork-bone) · niboshi chuka soba', cuisine_type: 'ramen',
    website: null, gmaps: gm('銀座 朧月 東京都中央区銀座6-4-13'), menu_url: MENU,
    notes: "[Mom & Pop · tsukemen] Owner Yaginuma Eiji worked in Japanese restaurants and ramen shops through his twenties. Hooked by the tsukemen boom in his thirties, he worked out this dipping soup on his own palate and opened in 2010, in what was then a dark Ginza back lane. The name, 'hazy moon', comes from the yellow light the shop cast there. The draw is the rich seafood-and-pork-bone tsukemen. Diners call it very rich but never heavy, with thick, springy noodles and torch-seared chashu, finished with a yuzu-scented soup to thin the dip. The clear niboshi chuka soba has been on the menu since opening day. In 2026 the shop sits in a new spot beside Ginza Kagari, with 8 counter seats.",
    chef_bio: {
      chef_name: '柳沼英次 (Yaginuma Eiji)', roles: ['owner-chef'],
      origin: 'Ginza; opened 2010',
      background: "Yaginuma loved cooking from a young age and worked in Japanese restaurants and ramen shops from his twenties, eating his way round other shops. In his thirties, during the tsukemen boom led by Ikebukuro Taishōken, he chose tsukemen over the izakaya he had been planning, and developed the soup alone (自分の舌だけで研究を重ね). He knew Ginza from his washoku years and took a suitable lot there in 2010.",
      philosophy: '「どことも違うスープを作り出したかった」 — to make a seafood-and-pork-bone soup unlike anyone else\'s, from the most familiar tsukemen ingredients.',
      specialty: 'Rich seafood–pork-bone tsukemen with thick, springy noodles and torch-seared chashu; clear niboshi chuka soba with flat wavy noodles.',
      anecdotes: [
        { text: "「お店を開いた2010年はこの辺は店もあまりなく、暗い路地のような場所でしたよ」 — he named the shop 朧月 for the yellow light it cast into that dark lane.", source: ST },
        { text: 'About seventy percent of customers order the rich or special tsukemen; the chuka soba has been served since opening and has its own regulars.', source: ST },
        { text: 'The soup came first; he then tried noodle after noodle until he found the one that matched it.', source: ST },
        { text: "A long-time regular's first visit after the move: a different room, the same rich tsukemen.", source: R + 'B536710468/' },
      ],
      japanese_sources_summary: 'さんたつ(2023.10.06): 店主・柳沼英次さん、和食店・ラーメン店で修業、30代でつけ麺に出合い独学でスープを開発、2010年開業。濃厚魚介豚骨つけ麺、特製つけ麺1200円(当時)、開店以来の中華そば880円(当時)、持ち帰りあり。食べログ(公式情報・2024/10/07更新メニュー): 濃厚つけ麺1,100円、特製つけ麺1,400円、中華そば950円、チャーシュー麺1,300円。現住所 銀座6-4-13 浅黄ビル1F、カウンター8席。',
      confidence: 'high', sources: [ST, TB, MENU, R + 'B536710468/', R + 'B536592924/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'An 8-seat counter that welcomes solo diners. No English menu is recorded, but the order is simple: rich tsukemen, special tsukemen or chuka soba. Cards and QR payments accepted. Evening queues are common.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Thick tsukemen noodles and flat wavy ramen noodles; no gluten-free noodle is mentioned.', source: MENU }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [
        { text: 'The tsukemen dip is a blend of seafood and meat stocks (魚介豚骨).', source: ST },
        { text: 'The chuka soba is a clear niboshi (dried sardine) broth.', source: MENU },
      ],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['gyokai', 'tonkotsu'], broth_texture: 'paitan', tare: [], aroma_oil: [], richness: 'kotteri',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: null, notes: 'Thick, heavy tsukemen noodles with a strong bite, served chilled; the chuka soba uses flat wavy noodles.' },
      regional_style: [], sub_genre: ['tsukemen', 'niboshi'],
      signature_bowl: '濃厚つけ麺 (rich tsukemen), ¥1,100 for regular or large; 特製つけ麺 ¥1,400.',
      chashu: 'Thick chashu seared with a hand torch just before serving; chopped chashu and menma sit in the dip.',
      notable_toppings: ['torch-seared chashu', 'seasoned soft-boiled egg', 'yuzu-and-mitsuba soup to thin the dip', 'black shichimi and yuzu shichimi on the counter'],
      gf: { status: 'no', note: 'Wheat noodles throughout.' },
      vegan: { status: 'no', note: 'Seafood–pork-bone dip; niboshi chuka soba; chashu on everything.' },
      pantheon: "Gyokai-tonkotsu tsukemen — the style Taishōken's boom made Tokyo's default — retuned by one cook's palate: unmistakably thick and rich, yet with a faint, fresh acidity that keeps it from sitting heavy, over thick noodles with real bite.",
      profile: { richness: 5, oiliness: 2, clarity: 1, tare_strength: 3, noodle_firmness: 5, aroma_punch: 2 },
      profile_basis: {
        richness: [ST, '「超濃厚」; 「なるほど濃厚」.'],
        oiliness: [ST, '「まったくもたれる感じがせず、濃厚なのにごくごく飲めるような」.'],
        clarity: [ST, 'A thick dipping soup that 「その濃厚さを見た目で主張」.'],
        tare_strength: [R + 'B536710468/', 'Rich yet not overwhelming; another diner found it a little on the sweet side (' + R + 'B537225987/).'],
        noodle_firmness: [ST, '「麺の強い腰」; served chilled and firm (' + R + 'B536592924/).'],
        aroma_punch: [ST, '「ほんの少しさわやかな酸味」; black and yuzu shichimi are optional at the counter.'],
      },
      confidence: 'medium', sources: [ST, MENU, R + 'B536592924/', R + 'B536710468/', R + 'B537225987/'], last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-13 浅黄ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (shop-registered) current, no status badge; reviews dated September–October 2026 describe the relocated shop next to Ginza Kagari.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番13号 (go) 34m; OSM node 2018990117 「朧月」 39m; ${TODAY}`,
  };
  const items = [
    it('濃厚つけ麺', 'noukou tsukemen', 'Rich tsukemen (seafood–pork-bone dip), regular or large', '¥1,100', 'Tsukemen', 'no', 'no', 'Shop menu on Tabelog (updated 2024-10-07); ¥1,100 paid by a reviewer in October 2026.', 'noko_tsukemen'),
    it('濃厚つけ麺 特盛', 'noukou tsukemen tokumori', 'Rich tsukemen, extra large', '¥1,250', 'Tsukemen', 'no', 'no', 'Shop menu on Tabelog.', 'noko_tsukemen_xl'),
    it('特製つけ麺', 'tokusei tsukemen', 'Special tsukemen (two kinds of chashu, seasoned egg, nori), regular or large', '¥1,400', 'Tsukemen', 'no', 'no', 'Shop menu on Tabelog.', 'tokusei_tsukemen'),
    it('特製つけ麺 特盛', 'tokusei tsukemen tokumori', 'Special tsukemen, extra large', '¥1,550', 'Tsukemen', 'no', 'no', 'Shop menu on Tabelog.', 'tokusei_tsukemen_xl'),
    it('中華そば', 'chuuka soba', 'Chuka soba (clear niboshi broth, flat wavy noodles)', '¥950', 'Ramen', 'no', 'no', 'Shop menu on Tabelog; large ¥1,100.', 'chuka_soba'),
    it('', '', 'Chashu noodles (pork belly, chicken and braised pork in a light niboshi broth)', '¥1,300', 'Ramen', 'no', 'no', 'Shop menu on Tabelog; large ¥1,400.', 'chashu_men'),
    it('', '', 'Rich niboshi tsukemen (limited)', '¥1,200', 'Limited', 'no', 'no', 'Shop menu on Tabelog; extra large ¥1,350. Limited items rotate.', 'niboshi_tsukemen'),
    it('', '', 'Chuka soba "Goku" (limited)', '¥1,100', 'Limited', 'no', 'no', 'Shop menu on Tabelog. Limited items rotate.', 'chuka_soba_goku'),
    it('', '', 'Mini seared-chashu rice bowl', '¥400', 'Rice', 'ask', 'no', 'Shop menu on Tabelog ("today\'s rice").', 'mini_chashu_don'),
  ];
  put(place, { verified: 'partial', confidence: 'medium', sources: [MENU, R + 'B537226919/', R + 'B536592924/', ST],
    price_note: "From the shop's own menu on Tabelog (official information, last updated 2024-10-07), and 2026 reviews pay the same prices. Tabelog shows it only in English, so Japanese names are filled only where another source prints them.", last_checked: TODAY, items }, {
    cuisine: 'つけ麺(濃厚魚介豚骨)・煮干し中華そば',
    neighborhood: '銀座六丁目、銀座 篝の隣の路地。銀座駅から徒歩3分、JR有楽町駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。つけ麺の太麺も中華そばの平打ち縮れ麺も基本的に小麦で、グルテンフリーの麺はどの情報源にも見当たりません。つけ汁は魚介豚骨で、味付けの内容は公表されていません。',
    vegan_detail: 'ヴィーガンではありません。つけ汁は魚介豚骨、中華そばは煮干しスープで、どの一杯にもチャーシューがのるか、スープに刻みチャーシューが入っています。',
    notes: '[個人店・つけ麺] 店主の柳沼英次さんは20代から和食店やラーメン店で働き、30代でつけ麺ブームに魅せられました。自分の舌だけを頼りにつけ汁を研究し、2010年、当時は暗かった銀座の路地に開業。「朧月」の名は、その路地に灯した黄色い明かりから付けたそうです。看板は濃厚魚介豚骨のつけ麺で、「濃厚なのにもたれない」と評されます。コシの強い太麺にバーナーで炙ったチャーシューを合わせ、最後は柚子香るスープ割りで締めます。澄んだ煮干しの中華そばは開店以来のメニューです。2026年現在は銀座 篝の隣に移転しており、カウンター8席です。',
  });
}

// ================================================================ 銀座はるちゃんラーメン
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13299064/'; const R = TB + 'dtlrvwlst/';
  const BA1 = 'https://baila.hpplus.jp/blogs/nakajima_maasa/69598'; const BA2 = 'https://baila.hpplus.jp/blogs/yamada_saori/67378';
  const STS = 'https://san-tatsu.jp/articles/203561/';
  const place = {
    id: 'tokyo3_higash', name: '銀座はるちゃんラーメン (Ginza Haru-chan Ramen)', category: 'OMNI',
    lat: 35.670856, lng: 139.768842,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. The noodles are flat ramen noodles made to order for the shop by Daruma Seimen, wheat by default. Every bowl is also topped with fu (麩), which is pure wheat gluten, and the owner says it goes on 'because it's cute'. At the Shimbashi original the chashu is braised in soy sauce. No gluten-free noodle is mentioned.",
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: "The standard chuka soba is a salt soup built on pork, niboshi (dried sardine) and vegetable stock, with two kinds of pork chashu, so it is not vegan. An October 2026 regular wrote that the shop has a vegan ramen, but we could not find it on any menu or other source. Ask whether it is on that day and what is in it.",
    hours_raw: 'Mon–Fri 9:00–21:00; Sat, Sun & holidays (and the days before and after a holiday) 11:00–21:00, per Tabelog, which also carries a notice of a change to a 9:15 weekday opening. Ticket machine; cards, IC and QR payments accepted.',
    hours: { 0: day(['09:00', '21:00']), 1: day(['09:00', '21:00']), 2: day(['09:00', '21:00']), 3: day(['09:00', '21:00']), 4: day(['09:00', '21:00']), 5: day(['11:00', '21:00']), 6: day(['11:00', '21:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme (Suzuki Bldg 1F), by Kabuki-za — 3 min from Higashi-Ginza (Hibiya / Asakusa lines)',
    cuisine: 'Chuka soba in a salt soup (pork · niboshi · vegetable) — Michelin Bib Gourmand brand', cuisine_type: 'ramen',
    website: null, gmaps: gm('銀座はるちゃんラーメン 東京都中央区銀座3-11-6'), menu_url: null,
    notes: "[Ramen · Shimbashi's Haru-chan, second shop] The Ginza branch, opened July 2024, of はるちゃんラーメン. The original is a 6-seat counter in Shimbashi that its owner, Haru-chan, opened in 2021 and runs single-handed. BAILA reports Bib Gourmand selections every year since 2023. The bowl is chuka soba in a salt soup of pork, niboshi and vegetable stock. It is filled to the brim so it stays hot, with flat Daruma Seimen noodles, chashu of two cuts sliced to order, and the shop's signature pastel fu. Regular and large cost the same. A chili topping comes in strengths 1–5. Limited bowls rotate (a curry chuka soba in October 2026). There are 10 counter seats, a ticket machine and a mostly overseas crowd.",
    chef_bio: {
      chef_name: null, roles: ['owner (はるちゃん, female owner of both shops)', 'Ginza is the second shop'],
      origin: 'Shimbashi (first shop, 2021); Ginza 3-chōme opened 16 July 2024',
      background: "The owner, known only as Haru-chan, had worked in ramen shops for about twenty years before opening the 6-seat Shimbashi counter in August 2021, which she ran alone. Ginza is the brand's second shop. No other name appears in any source.",
      philosophy: "In Shimbashi she called it chuka soba rather than ramen because 'chuka soba sounds warmer', and wants people to feel at ease after a bowl.",
      specialty: 'Salt chuka soba (pork, niboshi and vegetable stock) filled to the brim, flat Daruma Seimen noodles, two-cut chashu sliced to order, fu on top.',
      anecdotes: [
        { text: '店主さん曰く、お麩を乗せているのは「可愛いから♡」 — the fu goes on because it is cute.', source: BA1 },
        { text: 'The soup is a salt base of pork, niboshi and vegetable stock (豚×煮干し×野菜ダシ); the noodles are flat, made specially for the shop by だるま製麺.', source: BA1 },
        { text: 'Two kinds of chashu — pork belly and shoulder — sliced fresh for each bowl.', source: BA1 },
        { text: 'At the Shimbashi original she slices chashu only to order, never ahead, and fills the bowl to the brim so it stays hot to the last mouthful.', source: STS },
        { text: 'Two bowls on the Ginza menu — 中華そば ¥1,200 and 特製中華そば ¥1,600 — with large at no extra charge.', source: BA2 },
      ],
      japanese_sources_summary: 'BAILA(2025.3.29): 銀座はるちゃんラーメン、新橋1号店・銀座2号店、2023年から三年連続ビブグルマン、女性店主。塩ベース、豚×煮干し×野菜ダシ、だるま製麺の平打ち麺、チャーシューはバラとウデ、お麩、辛さ1〜5。BAILA: 中華そば1200円・特製中華そば1600円、大盛り同額。食べログ: 開店2024年7月16日、カウンター10席、平日9:00〜21:00・土日祝11:00〜21:00。',
      confidence: 'medium', sources: [BA1, BA2, STS, TB, R + 'B536986964/', R + 'B490593512/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the ticket machine: two bowls plus toppings, so it is easy to manage. Mostly overseas customers and many overseas staff in 2026. 10 counter seats; queues at opening.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: 'Every bowl is topped with fu (麩), which is wheat gluten; the noodles are flat ramen noodles from だるま製麺.', source: BA1 },
      ],
      soy_sauce_wheat: [{ text: 'At the Shimbashi original the chashu is marinated in the shop\'s own soy-sauce tare (オリジナルの醤油ダレ).', source: STS }],
      vegan_cross_contact: [
        { text: 'The soup is pork, niboshi and vegetable stock (豚×煮干し×野菜ダシ), topped with pork belly and shoulder chashu.', source: BA1 },
        { text: 'An October 2026 regular wrote that the shop has a vegan ramen alongside the limited bowls; it is not on any menu we could read.', source: R + 'B490593512/' },
      ],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['tonkotsu', 'niboshi', 'vegetable'], broth_texture: 'chintan', tare: ['shio'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: null, hydration: null, handmade: false, notes: 'Flat, medium-thick noodles made for the shop by だるま製麺, with a soba-like chew.' },
      regional_style: ['Tokyo chuka soba ("chan-kei")'], sub_genre: ['ramen'],
      signature_bowl: '中華そば ¥1,200 (large at no extra charge); 特製中華そば ¥1,600.',
      chashu: 'Two cuts — pork belly and shoulder — sliced to order and melt-tender (braised in soy at the Shimbashi original).',
      notable_toppings: ['pastel fu (wheat-gluten) decorations', 'menma', 'negi', 'nori', 'はるたま special egg', 'chili topping, strength 1–5'],
      gf: { status: 'no', note: 'Wheat noodles plus wheat-gluten fu on every bowl.' },
      vegan: { status: 'ask', note: 'Pork-and-niboshi soup; a vegan ramen is mentioned by one 2026 diner only.' },
      pantheon: "One of Tokyo's 'chan-kei' (ちゃん系) shops, and per BAILA the only one with a salt rather than shoyu soup. It is old-school Tokyo chuka soba in spirit: pork-and-niboshi stock filled to the brim, two-cut chashu sliced to order, and the owner's pastel fu for colour.",
      profile: { richness: 3, oiliness: 3, clarity: 4, tare_strength: 4, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [BA2, '「スープの透明感からは想像がつかないほど濃厚」; another diner found it light (' + R + 'B537445762/).'],
        oiliness: [null, 'Not described in any source read; scored at the midpoint.'],
        clarity: [BA2, '「スープの透明感」 — a clear salt soup.'],
        tare_strength: [BA1, '「しっかりと塩気の効いたスープ」; a diner noted the sharpness of the broth (' + R + 'B536986964/).'],
        noodle_firmness: [BA1, '「スープに負けないコシ」, soba-like; also described as slippery (' + R + 'B537445762/).'],
        aroma_punch: [BA1, 'No aroma oil described; a chili topping is optional, strength 1–5.'],
      },
      confidence: 'medium', sources: [BA1, BA2, R + 'B536986964/', R + 'B537445762/'], last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-6 鈴木ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (shop-registered) current, no status badge; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番6号 (go) 5m; ${TODAY}`,
  };
  const items = [
    it('中華そば', 'chuuka soba', 'Chuka soba (salt soup; regular or large, same price)', '¥1,200', 'Ramen', 'no', 'no', 'BAILA (2025); same price paid by a Tabelog reviewer, October 2026. Wheat noodles; fu (wheat gluten) on top.', 'chuka_soba'),
    it('特製中華そば', 'tokusei chuuka soba', 'Special chuka soba', '¥1,600', 'Ramen', 'no', 'no', 'BAILA (2025).', 'tokusei_chuka_soba'),
    it('', '', 'Curry chuka soba (limited, October 2026)', '', 'Limited', 'no', 'no', 'New in October 2026 per Tabelog reviewers.', 'curry_chuka_soba'),
    it('', '', 'Vegan ramen', '', 'Ramen', 'no', 'ask', 'Mentioned by one Tabelog regular, October 2026; not on any menu read. Ask what is in it.', 'vegan_ramen'),
    it('はるたま', 'harutama', 'Haru-tama (special seasoned egg)', '', 'Toppings', '', 'no', 'BAILA (2025).', 'ajitama'),
    it('辛味', 'karami', 'Chili topping (strength 1–5)', '', 'Toppings', '', '', 'BAILA (2025).', 'chili_topping'),
    it('海苔', 'nori', 'Nori', '', 'Toppings', '', '', 'BAILA (2025).', 'nori'),
  ];
  put(place, { verified: 'provisional', confidence: 'medium', sources: [BA1, BA2, R + 'B536986964/', R + 'B490593512/', R + 'B529227571/'],
    price_note: 'No published menu. The two bowls and their prices come from BAILA (2025) and match what a Tabelog reviewer paid in October 2026. The limited and vegan bowls are known only from 2026 reviews.', last_checked: TODAY, items }, {
    cuisine: '塩ベースの中華そば(豚・煮干し・野菜ダシ)・ビブグルマン店',
    neighborhood: '銀座三丁目(鈴木ビル1F)、歌舞伎座のそば。東銀座駅(日比谷線・浅草線)から徒歩3分',
    gf_detail: 'グルテンフリーではありません。麺はだるま製麺に特注した平打ち麺(基本的に小麦)です。すべての一杯にお麩(小麦グルテンそのもの)がのり、店主によれば「可愛いから」とのこと。新橋の本店ではチャーシューも醤油で煮込んでいます。グルテンフリーの麺はどの情報源にも見当たりません。',
    vegan_detail: '通常の中華そばは豚・煮干し・野菜ダシの塩スープに豚チャーシュー2種をのせたもので、ヴィーガンではありません。2026年10月の常連の口コミに「ヴィーガンラーメンがある」とありますが、メニューやほかの情報源では確認できませんでした。その日にあるか、何が入っているかを確認してください。',
    notes: '[ラーメン・新橋はるちゃんの2号店] 2024年7月に開いた「はるちゃんラーメン」の銀座店です。本店は店主のはるちゃんが2021年に新橋で開き、ひとりで切り盛りするカウンター6席の店。BAILAによれば2023年から毎年ビブグルマンに選ばれています。中華そばは豚・煮干し・野菜ダシの塩スープで、最後まで熱々で食べられるよう丼になみなみと注ぎます。だるま製麺の平打ち麺に、注文ごとに切る2種のチャーシュー、トレードマークの色とりどりのお麩。大盛りは同額で、辛味は1〜5から選べます。限定メニューも替わります(2026年10月はカレー中華そば)。カウンター10席、券売機制で、客の多くは海外からです。',
  });
}

// ================================================================ らーめん 松富
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13000573/'; const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/articles/274882/';
  const lunch = ['11:00', '15:00'];
  const place = {
    id: 'tokyo_ramen_matsutomi_ginza', name: 'らーめん 松富 (Ramen Matsutomi)', category: 'MOM_AND_POP',
    lat: 35.671432, lng: 139.761603,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. Ramen, tantanmen, tsukemen, gyoza and shumai. There are three kinds of wheat noodle (egg noodles, thin straight, thick), soy sauce and grated garlic are on the counter, and every noodle soup shares one base stock. No gluten-free dish is mentioned in any source.",
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: "The shop's own Tabelog listing ticks 'vegetarian options', but no source says what they are. Every noodle dish (shoyu ramen, tantanmen, clam ramen) shares one base soup of pork bones (げん骨) and Hidaka kombu, so none of them is vegan. The side dishes include morokyu (cucumber with miso). Ask the staff what they mean by the vegetarian option.",
    hours_raw: 'Mon–Fri 11:00–15:00 & 17:00–04:00; Sat 11:00–15:00 & 18:00–22:00; closed Sundays and holidays. Cash only; a service charge is added. Free large noodles at lunch.',
    hours: { 0: day(lunch, ['17:00', '04:00']), 1: day(lunch, ['17:00', '04:00']), 2: day(lunch, ['17:00', '04:00']), 3: day(lunch, ['17:00', '04:00']), 4: day(lunch, ['17:00', '04:00']), 5: day(lunch, ['18:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ginza 6-chōme (Hanatsubaki Bldg 1F), in the back lane with Kagari and Oborozuki — 4 min from Ginza Stn',
    cuisine: 'Shoyu ramen · clam (asari) ramen · tantanmen · late-night ramen izakaya', cuisine_type: 'ramen',
    website: null, gmaps: gm('らーめん 松富 東京都中央区銀座6-4-16'), menu_url: null,
    notes: "[Mom & Pop · ramen izakaya] A Ginza back-lane ramen shop open since 1996, until 4 a.m. on weekdays: lunch for office workers and shoppers, a last bowl after drinks, and early-morning ramen. Iwano Tsutomu trained in about three ramen shops, joined Matsutomi in 2000 and took it over from the founder in 2013. He keeps the founder's base soup of pork bones and Hidaka kombu, which goes into every bowl. The most popular is shoyu ramen. The quiet favourite is the clam ramen, limited to 20 a day, made with clams bought fresh each morning and served with butter, kombu and egg noodles. At night it becomes a ramen izakaya, with a cheap drink set and the 特許しうまい, a shumai made by a patented method. Cash only.",
    chef_bio: {
      chef_name: '岩野努 (Iwano Tsutomu)', roles: ['owner (second generation, since 2013)'],
      origin: 'Ginza 6-chōme; shop founded 1996',
      background: "Iwano had always wanted his own ramen shop. He worked in about three ramen shops to study how each made its soup, joined Matsutomi at around 25 in 2000, and took it over from the founder in 2013. Long-serving staff help him keep the founder's recipes.",
      philosophy: "「先代が作った味をそのまま受け継いでます」 — keeping the founder's flavour, changing it little by little and adding new dishes, and carrying the shop on for another ten or twenty years.",
      specialty: 'Shoyu ramen and clam ramen on a pork-bone and Hidaka-kombu base; tantanmen; patented shumai and gyoza.',
      anecdotes: [
        { text: 'Three noodles for three styles: egg noodles for the clam ramen, thin straight noodles for shoyu ramen, thick noodles for tsukemen.', source: ST },
        { text: 'The clam ramen (20 a day) uses clams bought at market every morning, with cut kombu, sesame and a pat of butter that turns it into a clam-butter soup.', source: ST },
        { text: "The 特許しうまい holds a patent on its ingredient ratios and mixing method — pork with prawn and crab.", source: ST },
        { text: "「常連さんのお陰でコロナも乗り越えてきました」 — the regulars carried the shop through the pandemic.", source: ST },
      ],
      japanese_sources_summary: 'さんたつ(2023.11.17): らーめん松富、1996年創業、2013年に創業者から岩野努さんが継承(2000年から勤務)。基本スープはげん骨・北海道日高昆布など、醤油らーめん・担々麺・あさりらーめん共通。あさりらーめん900円(当時)・1日20食、特許しうまい夜2個360円・昼セット270円。17席。食べログ: 15席、現金のみ、サービス料あり、英語メニューあり、ベジタリアンメニューあり(店舗情報)、持ち帰り(餃子・しうまい)。',
      confidence: 'high', sources: [ST, TB, R + 'B388604344/', R + 'B534572306/', R + 'B536542070/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A casual back-lane counter; Tabelog notes an English menu. Cash only. Busy at lunch and late at night.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Three wheat noodles in use (egg noodles, thin straight, thick); gyoza and shumai are on the menu.', source: ST }],
      soy_sauce_wheat: [
        { text: 'The most popular bowl is shoyu ramen; Japanese soy sauce is brewed with wheat unless stated otherwise.', source: ST },
        { text: 'Soy sauce, vinegar, chili oil and grated garlic are on the counter.', source: R + 'B534572306/' },
      ],
      vegan_cross_contact: [{ text: '「基本のスープは醤油らーめんも担々麺もあさりらーめんも同じで、げん骨や北海道の日高昆布とか」 — one pork-bone and kombu base for every bowl.', source: ST }],
      staff_allergy_handling: [], positives: [{ text: "The shop's own Tabelog listing ticks 'vegetarian options' (unspecified).", source: TB }],
      confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['tonkotsu', 'other'], broth_texture: null, tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: null, notes: 'Thin straight noodles for shoyu ramen; egg noodles for the clam ramen; thick noodles for tsukemen.' },
      regional_style: [], sub_genre: ['ramen', 'tantanmen', 'tsukemen'],
      signature_bowl: 'あさりらーめん (clam ramen, 20 a day), ¥950 in September 2026; the shoyu ramen is the most ordered.',
      chashu: null,
      notable_toppings: ['fresh clams in the shell (clam ramen)', 'butter', 'cut kombu', 'sesame'],
      gf: { status: 'no', note: 'Wheat noodles; shoyu tare.' },
      vegan: { status: 'no', note: 'Pork-bone and kombu base soup in every bowl.' },
      pantheon: "A Ginza late-night stalwart in the Tokyo shoyu mould. One pork-bone and kombu base runs through every bowl, and the cult order dresses it with fresh clams, butter and kombu over egg noodles — a gentle seaside soup for the end of a night.",
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 2, aroma_punch: 2 },
      profile_basis: {
        richness: [ST, 'Clam ramen: 「身体に優しくしみわたる旨味たっぷりの一杯」.'],
        oiliness: [ST, 'A pat of butter and floating sesame; no oil layer described.'],
        clarity: [ST, '「やや白濁したスープ」 — slightly cloudy.'],
        tare_strength: [R + 'B534572306/', 'A gentle flavour; another diner: flavorful yet refreshing (' + R + 'B496912792/).'],
        noodle_firmness: [ST, 'Egg noodles 「つるつるっと食べやすい」; thin and translucent (' + R + 'B486196752/).'],
        aroma_punch: [ST, 'Sesame and butter; garlic and chili oil only if you add them at the counter.'],
      },
      confidence: 'medium', sources: [ST, R + 'B534572306/', R + 'B486196752/', R + 'B496912792/'], last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-16 花椿ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (shop-registered) current, no status badge; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番16号 (go) 23m; OSM node 6303337091 「松富」 13m; ${TODAY}`,
  };
  const items = [
    it('醤油らーめん', 'shouyu raamen', 'Shoyu ramen (the most ordered)', '', 'Ramen', 'no', 'no', 'Pork-bone & kombu base; thin straight noodles.', 'shoyu_ramen'),
    it('あさりらーめん', 'asari raamen', 'Clam ramen (20 a day; butter, kombu, egg noodles)', '¥950', 'Ramen', 'no', 'no', 'Price paid by Tabelog reviewers, September 2026 (¥900 in 2023). Free large at lunch.', 'asari_ramen'),
    it('', '', 'Clam ramen, 5/8 size', '¥850', 'Ramen', 'no', 'no', 'Price paid by a Tabelog reviewer, August 2026.', 'asari_ramen_small'),
    it('担々麺', 'tantanmen', 'Matsutomi-style tantanmen', '¥930', 'Ramen', 'no', 'no', 'Price paid by Tabelog reviewers, August–September 2026. Sesame soup under chili oil; thin straight noodles.', 'tantanmen'),
    it('', '', '"Meat meat meat" noodles (thick chashu, back-fat soup)', '', 'Ramen', 'no', 'no', 'Ordered by a Tabelog reviewer, 2026.', 'niku_niku_men'),
    it('', '', 'Half boiled egg', '¥50', 'Toppings', '', 'no', 'Tabelog reviewer, August 2026.', 'egg_half'),
    it('特許しうまい', 'tokkyo shiumai', 'Patented shumai (pork with prawn and crab), 2 pcs', '¥360', 'Sides', 'no', 'no', 'Evening price; ¥270 at lunch with a noodle dish (2023 article; ¥360 paid in September 2026).', 'shumai'),
    it('', '', 'Special Matsutomi gyoza', '¥650', 'Sides', 'no', 'no', 'Tabelog reviewer, September 2026.', 'gyoza'),
    it('', '', 'Boiled water dumplings, 4 pcs', '¥270', 'Sides', 'no', 'no', 'Tabelog reviewer, September 2026.', 'sui_gyoza'),
    it('もろきゅう', 'morokyuu', 'Morokyu (cucumber with miso)', '¥350', 'Sides', 'ask', 'ask', 'Tabelog reviewer, September 2026. Type of miso not stated.', 'morokyu'),
    it('', '', 'Evening drink set (drink + three snacks)', '¥1,200', 'Drinks', '', '', 'Tabelog reviewer, October 2026.', 'banshaku_set'),
  ];
  put(place, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B388604344/', R + 'B534572306/', R + 'B536542070/', R + 'B480207749/', R + 'B536647462/'],
    price_note: 'No published menu. Dishes come from a 2023 interview and from what Tabelog reviewers paid in August–October 2026. The shoyu ramen price is not on record.', last_checked: TODAY, items }, {
    cuisine: '醤油らーめん・あさりらーめん・担々麺・深夜のラーメン居酒屋',
    neighborhood: '銀座六丁目(花椿ビル1F)、篝・朧月と同じ路地。銀座駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。ラーメン・担々麺・つけ麺・餃子・しゅうまいの店で、麺は3種類(卵麺・ストレート細麺・太麺)とも小麦です。卓上には醤油とおろしにんにくがあり、麺類のスープはすべて同じ基本スープです。グルテンフリーの料理はどの情報源にも見当たりません。',
    vegan_detail: '店自身の食べログ登録では「ベジタリアンメニューあり」となっていますが、内容はどの情報源にも書かれていません。醤油らーめん・担々麺・あさりらーめんはすべて、げん骨と日高昆布の同じ基本スープなので、麺類にヴィーガンのものはありません。つまみにはもろきゅうがあります。ベジタリアンメニューが何を指すのか、店員に確認してください。',
    notes: '[個人店・ラーメン居酒屋] 1996年から銀座の路地裏で営業するラーメン店で、平日は朝4時まで開いています。昼は会社員や買い物客のランチ、夜は飲んだ後の締め、早朝の朝ラーにも使われます。岩野努さんは3軒ほどのラーメン店で修業し、2000年に松富へ入り、2013年に創業者から店を継ぎました。げん骨と日高昆布の基本スープは創業者の味のまま守り、すべての一杯に使っています。一番人気は醤油らーめん。密かな名物は1日20食限定のあさりらーめんで、毎朝仕入れるあさりにバター・切り昆布・卵麺を合わせます。夜はラーメン居酒屋になり、お得な晩酌セットや、特許製法の「特許しうまい」があります。現金のみ。',
  });
}

// ================================================================ 銀座 八五
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13228602/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const PR = 'https://san-tatsu.jp/pressrelease/461399/'; const ET = 'https://www.enjoytokyo.jp/article/110928/';
  const sp = ['11:00', '16:00'];
  const place = {
    id: 'tokyo_ginza_hachigo', name: '銀座 八五 (Ginza Hachigō)', category: 'OMNI',
    lat: 35.670556, lng: 139.770159,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free, although there is no soy-sauce tare: the soup is seasoned only with a little Guérande salt. The noodles are a special wheat-flour-and-kansui noodle from Asakusa Kaikarō, and the signature bowl adds ravioli. No gluten-free noodle is offered.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup is duck frames and duck thigh, a whole Nagoya Cochin chicken, prosciutto and scallop, with kombu, dried shiitake and dried tomato. Every bowl carries pork chashu, and the signature ravioli contain foie gras.',
    hours_raw: "Tue–Sun 11:00 until the soup runs out (Tabelog lists 11:00–16:00). Closed Mondays, plus some Tuesdays (check the shop's social media). Walk-ins from 11:00 in order of arrival; from 12:00 reservations take priority. Reservations open every Saturday at 9:00 for the following week (TableCheck only) and carry a ¥500 seat fee.",
    hours: { 1: day(sp), 2: day(sp), 3: day(sp), 4: day(sp), 5: day(sp), 6: day(sp) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme (old Kobikichō), Dai-ichi Hanabusa Bldg 1F — 3 min from Higashi-Ginza or Shintomichō',
    cuisine: 'Tare-free chuka soba (duck · Nagoya Cochin · prosciutto consommé) — Michelin Bib Gourmand', cuisine_type: 'ramen',
    website: 'https://www.instagram.com/ginza_hachigou/', gmaps: gm('銀座 八五 東京都中央区銀座3-14-2'), menu_url: MENU,
    notes: "[Ramen · French-chef chuka soba] Matsumura Yasushi spent 36 years in French kitchens, including as executive chef of Kyoto's ANA hotel, then turned to ramen to serve 'a full course in a bowl'. After his 勝本 shops in Suidōbashi and Jimbōchō, he opened this 6-seat counter in December 2018. He spent months after fit-out perfecting the bowl. The soup uses no tare: a golden consommé of duck, whole Nagoya Cochin chicken, prosciutto and scallop with kombu, shiitake and dried tomato, seasoned only with a little Guérande salt. It is paired with a thin noodle made for this soup by Asakusa Kaikarō. Tabelog has named it a ramen 百名店 every year from 2019 to 2025, and the 2026 Michelin Guide gave it a seventh straight listing (Bib Gourmand). The name refers to the 8.5-tsubo room and to a mountaineering saying about the eighth station. Book on TableCheck or queue. The owner and staff speak English.",
    chef_bio: {
      chef_name: '松村康史 (Matsumura Yasushi)', roles: ['owner-chef', 'company: 株式会社Food Operation Japan (also runs the 勝本 shops)'],
      origin: 'French cuisine — 36 years, incl. executive chef at Kyoto ANA Hotel (now ANA Crowne Plaza Kyoto)',
      background: "After 36 years as a French chef, Matsumura decided to recreate 'a full course in a bowl' and switched to ramen. He opened 中華そば勝本 in Suidōbashi (March 2015) and つけそば神田勝本 in Jimbōchō (February 2016), and the group now also has 豊洲勝本. Ginza Hachigō, opened in December 2018, is where he put everything he knew. Turning 66 in October 2025, he said he hopes to stay at the stove as long as he can, and has an eye on opening abroad.",
      philosophy: "「誰でも気取らず美味しい料理を手軽に楽しんでいただきたい」 — anyone should be able to enjoy fine food casually.",
      specialty: 'Tare-free golden consommé chuka soba; ravioli of truffle, foie gras and prosciutto; Kaikarō thin noodles; pepper-caviar chashu.',
      anecdotes: [
        { text: "The name has two sources: the 8.5-tsubo shop, and 「八合目まで登っても、まだ五合目と心得よ」 — even at the eighth station, think of yourself as at the fifth.", source: ET },
        { text: 'After the shop was finished he kept it shut for several months, still working on the ideal bowl.', source: ET },
        { text: 'The noodles were designed for this soup by Asakusa Kaikarō\'s noodle-maker 不死鳥カラス, blended so they do not go soft or cloud the soup.', source: ET },
        { text: 'A seventh consecutive Michelin listing (Bib Gourmand) in the Michelin Guide Tokyo 2026.', source: PR },
        { text: 'After the bowl, a cold-brewed hōjicha.', source: ET },
        { text: 'An October 2026 diner found the owner friendly and fluent in English; another was guided by an English-speaking member of staff.', source: R + 'B536946860/' },
      ],
      japanese_sources_summary: 'Food Operation Japanプレスリリース(2025.9.26): 店主松村康史、京都全日空ホテル総料理長などフレンチ36年。2015年中華そば勝本(水道橋)、2016年つけそば神田勝本(神保町)、2018年12月銀座 八五。タレ不使用、生ハム等の旨味の黄金スープ、浅草開化楼の特製細麺。ミシュランガイド東京2026ビブグルマン、7年連続。系列: 中華そば勝本、中華そば豊洲勝本、つけそば神田勝本。enjoytokyo(2019): 鴨ガラ・鴨モモ肉・名古屋コーチン丸鶏・生ハム、イタヤガイ・ドライトマト・昆布・干し椎茸、微量のゲラント塩。カウンター6席。食べログ: 百名店2019–2025、予約は毎週土曜9時TableCheck、予約者席料500円。',
      confidence: 'high', sources: [PR, ET, TB, MENU, R + 'B536946860/', R + 'B537401959/', R + 'B537117682/'],
    },
    cultural_comfort: { level: 'english', note: 'The owner and staff speak English (2026 reviews), and many guests are from overseas. Six counter seats, quiet classical music, no condiments on the counter. Reservations (TableCheck, Saturday 9:00 for the next week) carry a ¥500 seat fee; walk-ins queue from 11:00.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'The noodles are a special wheat-flour-and-kansui noodle from Asakusa Kaikarō (小麦粉とかん水の配合).', source: ET }],
      soy_sauce_wheat: [{ text: 'No tare is used: the soup is seasoned with a trace of Guérande salt (微量のゲラント塩) and prosciutto rather than soy sauce.', source: ET }],
      vegan_cross_contact: [{ text: 'Duck frames, duck thigh, a whole Nagoya Cochin chicken and prosciutto, with itaya scallop, dried tomato, kombu and dried shiitake.', source: ET }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'gyokai', 'other'], broth_texture: 'chintan', tare: [], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: false, notes: 'Thin straight noodles made for this soup by 浅草開化楼; formulated not to go soft or cloud the soup.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: 'ラビオリ入り中華そば (ravioli of truffle, foie gras and prosciutto), ¥2,200, 30 a day; 中華そば ¥1,200; 特製 ¥1,600.',
      chashu: 'Low-temperature pork-belly chashu, warmed slice by slice and finished with pepper caviar.',
      notable_toppings: ['Kujō negi', 'thick menma', 'pepper caviar', 'kombu-dashi seasoned egg', 'truffle–foie gras ravioli (signature bowl)'],
      gf: { status: 'no', note: 'Wheat noodles (no soy tare, but the noodles are wheat).' },
      vegan: { status: 'no', note: 'Duck, chicken, prosciutto and scallop soup.' },
      pantheon: "A French chef's answer to chuka soba: no tare at all, just a golden consommé of duck, Cochin chicken and prosciutto seasoned with a whisper of Guérande salt, over noodles built not to cloud it. It is the clear-soup Tokyo bowl pushed to its most refined.",
      profile: { richness: 3, oiliness: 1, clarity: 5, tare_strength: 1, noodle_firmness: 4, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536696501/', 'A refreshing mouthfeel with a depth reminiscent of consommé.'],
        oiliness: [R + 'B536696501/', 'Clear and refreshing; no oil described.'],
        clarity: [R + 'B536890336/', 'A beautiful, clear broth; 「黄金色のスープ」 (' + PR + ').'],
        tare_strength: [ET, 'No tare; seasoned with 微量のゲラント塩.'],
        noodle_firmness: [ET, 'Noodles made 「麺が伸びず」; a 2026 diner noted a nice chewiness (' + R + 'B536532661/).'],
        aroma_punch: [ET, 'Pepper caviar on the chashu is the only accent.'],
      },
      confidence: 'high', sources: [ET, PR, MENU, R + 'B536696501/', R + 'B536890336/', R + 'B536532661/'], last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目14番2号 (go) 6m; ${TODAY}`,
  };
  const items = [
    it('', '', 'Ravioli chuka soba (truffle, foie gras and prosciutto ravioli; 30 a day)', '¥2,200', 'Noodles', 'no', 'no', 'Shop menu on Tabelog (updated 2024-05-21); same price paid in October 2026.', 'ravioli_chuka_soba'),
    it('特製中華そば', 'tokusei chuuka soba', 'Special chuka soba (seasoned egg, extra chashu)', '¥1,600', 'Noodles', 'no', 'no', 'Shop menu on Tabelog; same price paid in October 2026.', 'tokusei_chuka_soba'),
    it('味玉中華そば', 'ajitama chuuka soba', 'Chuka soba with kombu-dashi seasoned egg', '¥1,400', 'Noodles', 'no', 'no', 'Shop menu on Tabelog.', 'ajitama_chuka_soba'),
    it('中華そば', 'chuuka soba', 'Chuka soba (golden tare-free consommé)', '¥1,200', 'Noodles', 'no', 'no', 'Shop menu on Tabelog.', 'chuka_soba'),
    it('', '', 'Meat rice (chashu over rice, horseradish; pour on soup to finish)', '¥500', 'Rice', 'ask', 'no', 'Shop menu on Tabelog.', 'meat_rice'),
  ];
  put(place, { verified: 'partial', confidence: 'medium', sources: [MENU, ET, R + 'B537117682/', R + 'B537401959/', R + 'B537845742/'],
    price_note: "From the shop's own menu on Tabelog (official information, last updated 2024-05-21), and October 2026 diners paid the same. A ¥500 seat fee applies to reservations.", last_checked: TODAY, items }, {
    cuisine: 'タレ不使用の中華そば(鴨・名古屋コーチン・生ハムの黄金スープ)・ビブグルマン',
    neighborhood: '銀座三丁目(旧木挽町)、第一はなぶさビル1F。東銀座駅・新富町駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。醤油ダレは使わず、微量のゲラント塩で味を調えていますが、麺は浅草開化楼の特製麺(小麦粉とかん水)で、看板の一杯にはラビオリものります。グルテンフリーの麺はありません。',
    vegan_detail: 'ヴィーガンではありません。スープは鴨ガラ・鴨モモ肉・名古屋コーチンの丸鶏・生ハム・イタヤガイに、昆布・干し椎茸・ドライトマトを合わせたものです。どの一杯にも豚のチャーシューがのり、看板のラビオリにはフォアグラが入っています。',
    notes: '[ラーメン・フレンチシェフの中華そば] 松村康史さんは京都全日空ホテルの総料理長などフレンチの道を36年歩んだ後、「丼の中のフルコース」を目指してラーメンの世界へ。水道橋・神保町の「勝本」に続き、2018年12月にカウンター6席のこの店を開きました。店舗完成後も数カ月、理想の一杯を研究し続けたそうです。スープはタレを使わず、鴨・名古屋コーチンの丸鶏・生ハム・イタヤガイに昆布・干し椎茸・ドライトマトを合わせた黄金色のコンソメで、微量のゲラント塩だけで味を調えます。麺は浅草開化楼がこのスープのために作った細麺です。食べログ ラーメン百名店に2019〜2025年の毎年選ばれ、ミシュランガイド東京2026では7年連続の掲載(ビブグルマン)。店名は8.5坪の広さと、登山の格言にちなみます。予約はTableCheck、または行列で。店主とスタッフは英語が話せます。',
  });
}

// ================================================================ 中華そば 共楽
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13002327/'; const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/articles/269049/'; const STC = 'https://san-tatsu.jp/collects/279397/';
  const TV = 'https://www.tv-tokyo.co.jp/adomachi/backnumber/20220910/143157.html';
  const place = {
    id: 'tokyo_chukasoba_kyoraku', name: '中華そば 共楽 (Chūka Soba Kyōraku)', category: 'MOM_AND_POP',
    lat: 35.672107, lng: 139.768185,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. One shoyu chuka soba is the base of every bowl. The noodles and the wonton skins are made in-house from wheat, and the menma and chashu are seasoned. No gluten-free option is mentioned.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The single soup is chicken and niboshi (dried sardine) finished with soy sauce, and the toppings are pork chashu and meat-filled wontons.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:00–17:30; Sat 11:00–16:00; closed Wednesdays, Sundays and holidays (Tabelog; the 2023 interview gave 11:00–18:00 and closed Sun/holidays). Cash only — Kiyoko, the owner\'s mother, takes your order and buys the ticket for you.',
    hours: { 0: day(['11:00', '17:30']), 1: day(['11:00', '17:30']), 3: day(['11:00', '17:30']), 4: day(['11:00', '17:30']), 5: day(['11:00', '16:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme, near Marronnier-dōri — 4 min from Ginza Stn, 4 min from Ginza-itchōme',
    cuisine: 'Shōwa-era shoyu chuka soba · wonton-men (since 1956)', cuisine_type: 'ramen',
    website: null, gmaps: gm('中華そば 共楽 東京都中央区銀座2-10-12'), menu_url: null,
    notes: "[Mom & Pop · since 1956] A three-generation Ginza chuka-soba shop. Founder Nakano Taichirō started with a street stall and set up in Ginza 2-chōme in 1956. His grandson Kazuhiko, who trained in Cantonese kitchens, now runs it with his parents Kikuo and Kiyoko. When the building was rebuilt, the shop closed from 2016 to 2019. Its noodle maker retired around then, so Kazuhiko learned the craft and now makes the noodles and wonton skins in-house; the noodles are made after closing, sometimes until 2 a.m. There is one shoyu soup, chicken and niboshi, under every bowl. The wonton-men is the favourite, and the menma is rehydrated over four days. The name 共楽 means a happy life shared by the house and its customers. Twelve seats, a queue at opening, cash only.",
    chef_bio: {
      chef_name: '中野和彦 (Nakano Kazuhiko)', roles: ['third-generation owner', 'with 二代目 中野喜久雄 (father) and 中野きよ子 (mother)'],
      origin: 'Ginza 2-chōme; founded 1956 by 中野太一郎, who began with a street stall',
      background: "Kazuhiko helped in the shop from primary school, trained in Cantonese restaurants from 20, and joined at 26 when his father asked. During the 2016–2019 rebuild of the building he worked in other ramen shops to learn noodle-making, and on reopening in 2019 switched both the noodles and the wonton skins to house-made.",
      philosophy: "「お客様が喜んでくれて、また来てくれるのが一番」. The founder chose the name 共楽 hoping the owners and customers would share a happy life.",
      specialty: 'Shoyu chuka soba (chicken and niboshi); wonton-men with house-made skins; chashu of pork thigh; four-day menma.',
      anecdotes: [
        { text: 'The founder, 中野太一郎, began with a ramen stall and opened in Ginza 2-chōme; he died in 1999 at 89.', source: ST },
        { text: "Prep starts at 8 a.m.; after closing, Kazuhiko makes the noodles, sometimes until 2 a.m. In service his father works the kitchen and he sometimes takes the floor — 「父とはあんまりしゃべらないですね」.", source: ST },
        { text: 'Dried menma is rehydrated over four days before seasoning; the chashu is pork thigh (もも).', source: ST },
        { text: 'When you go to buy a wonton-men ticket, Kiyoko takes your order and buys it for you — a courtesy the shop has always kept.', source: ST },
        { text: 'A Fukusuke figure has watched over the shop since the founder\'s day.', source: ST },
        { text: 'An October 2026 diner: the elderly owner smiled and thanked them on the way out.', source: R + 'B537448290/' },
      ],
      japanese_sources_summary: 'さんたつ(2023.10.17): 共楽、1956年創業、屋台から初代・中野太一郎が銀座2丁目に開店、1999年89歳で他界。3代目和彦さん(広東料理で修業、26歳で継承)が2代目の父・喜久雄さん、母・きよ子さんと営む。2016年ビル建て替えで3年休業、2019年再開時に麺とワンタンの皮を自家製に。スープは鶏・煮干、醤油の中華そば一つ。ワンタンメン1000円(当時)、メンマは乾燥メンマを4日かけて戻す。カウンター8・テーブル4の12席。テレビ東京(2022): 昭和31年創業。食べログ: 2019年5月30日再開、現金のみ。',
      confidence: 'high', sources: [ST, STC, TV, TB, R + 'B537448290/', R + 'B537740684/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A family-run 12-seat room; staff take your order in the queue and buy the ticket for you, cash only. Many overseas visitors; short, straight noodles easy to eat for those not used to slurping.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'The noodles and wonton skins are made in-house; every bowl shares the one shoyu soup.', source: ST }],
      soy_sauce_wheat: [{ text: 'The single soup is finished with soy sauce (醤油がまろやかにまとめたスープ); the menma and chashu are seasoned in the house style.', source: ST }],
      vegan_cross_contact: [{ text: 'A chicken and niboshi soup, with pork-thigh chashu and meat-filled wontons.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken', 'niboshi'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'straight', hydration: null, handmade: true, notes: 'House-made medium-thin straight round noodles, slightly short; made by the third-generation owner after closing.' },
      regional_style: ['Tokyo shoyu'], sub_genre: ['ramen'],
      signature_bowl: 'ワンタンメン (wonton-men) — ¥1,100 in October 2026 (¥1,000 in 2023).',
      chashu: 'Two thick slices of pork thigh (もも), seasoned through — lean and clean-tasting.',
      notable_toppings: ['house-made wontons', 'four-day menma (called takenoko on the menu)', 'negi', 'raw egg on request'],
      gf: { status: 'no', note: 'House-made wheat noodles and wonton skins; shoyu soup.' },
      vegan: { status: 'no', note: 'Chicken and niboshi soup; pork and meat wontons.' },
      pantheon: "A living Shōwa Tokyo shoyu bowl: one gentle chicken-and-niboshi soup since 1956, now carried by the founder's grandson on noodles and wonton skins he makes himself every night.",
      profile: { richness: 2, oiliness: 1, clarity: 4, tare_strength: 3, noodle_firmness: 3, aroma_punch: 1 },
      profile_basis: {
        richness: [R + 'B521968676/', 'A very gentle broth; light yet flavorful (' + R + 'B536679630/).'],
        oiliness: [ST, 'No oil described in the soup; 「体の中までしみわたる」.'],
        clarity: [ST, '「きらめくスープ」.'],
        tare_strength: [R + 'B521968676/', 'The soy sauce flavor slightly pronounced, though the broth is gentle.'],
        noodle_firmness: [R + 'B537424152/', 'Homemade smooth and chewy medium-thin straight noodles.'],
        aroma_punch: [ST, 'No aroma oil or garlic described.'],
      },
      confidence: 'high', sources: [ST, R + 'B521968676/', R + 'B536679630/', R + 'B537424152/'], last_checked: TODAY,
    },
    mom_and_pop: true,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目10番12号 (go) 4m; ${TODAY}`,
  };
  const items = [
    it('中華そば', 'chuuka soba', 'Chuka soba (shoyu; chicken and niboshi)', '', 'Ramen', 'no', 'no', 'The base of every bowl. House-made wheat noodles.', 'chuka_soba'),
    it('ワンタンメン', 'wantanmen', 'Wonton-men (chashu, takenoko, house-made wontons, negi)', '¥1,100', 'Ramen', 'no', 'no', 'Paid by Tabelog reviewers, October 2026 (¥1,000 in 2023). The most popular bowl.', 'wonton_men'),
    it('チャーシューワンタンメン', 'chaashuu wantanmen', 'Chashu wonton-men', '', 'Ramen', 'no', 'no', 'Ordered by Tabelog reviewers, October 2026.', 'chashu_wonton_men'),
    it('チャーシューメン', 'chaashuumen', 'Chashu-men', '', 'Ramen', 'no', 'no', '2024 san-tatsu roundup.', 'chashu_men'),
    it('竹の子そば', 'takenoko soba', 'Takenoko (menma) soba', '', 'Ramen', 'no', 'no', '2023 interview; ordered in October 2026.', 'menma_soba'),
    it('', '', 'Hiyashi chuka (summer; chashu, cucumber, black sesame)', '', 'Ramen', 'no', 'no', 'Ordered by Tabelog reviewers in summer.', 'hiyashi_chuka'),
    it('', '', 'Raw egg', '', 'Toppings', '', 'no', 'Tabelog reviewers, October 2026.', 'raw_egg'),
  ];
  put(place, { verified: 'provisional', confidence: 'medium', sources: [ST, STC, R + 'B537740684/', R + 'B521606229/', R + 'B513905805/', R + 'B521968676/'],
    price_note: 'No published menu (a wooden-tag menu hangs above the ticket machine). Items come from the 2023–2024 san-tatsu pieces and October 2026 reviews; only the wonton-men price is on record.', last_checked: TODAY, items }, {
    cuisine: '昭和の醤油中華そば・ワンタンメン(1956年創業)',
    neighborhood: '銀座二丁目、マロニエ通り近く。銀座駅・銀座一丁目駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。醤油の中華そば一つがすべての一杯のベースで、麺もワンタンの皮も小麦の自家製です。メンマやチャーシューも味付けしてあり、グルテンフリーの選択肢はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。スープは鶏と煮干しを醤油でまとめた一種類だけで、具は豚のチャーシューと肉餡のワンタンです。',
    notes: '[個人店・1956年創業] 3代続く銀座の中華そば店です。初代・中野太一郎さんが屋台から始め、1956年に銀座2丁目に店を構えました。今は広東料理で修業した孫の和彦さんが、両親の喜久雄さん・きよ子さんと店を守っています。ビル建て替えのため2016〜2019年は休業。その頃、長年の製麺所が廃業したため、和彦さんが製麺を学び、今は麺とワンタンの皮を自家製にしており、麺は営業後に打っています(深夜2時に及ぶことも)。鶏と煮干しの醤油スープ一つがすべての一杯の土台です。一番人気はワンタンメンで、メンマは4日かけて戻します。「共楽」の名には、店と客がともに楽しい人生を、という願いが込められています。12席、開店時は行列、現金のみ。',
  });
}

fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
fs.writeFileSync(mf, JSON.stringify(menus, null, 1));
writeLang('tokyo', 'ja', ja);
console.log(log.join('\n'));
console.log(`Tokyo now ${d.places.length} places.`);
