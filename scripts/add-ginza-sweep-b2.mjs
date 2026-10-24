// Ginza Station half-mile sweep (805 m), batch 2 — gluten-free and vegan anchors. Researched 2026-10-24.
//   + FANCL BROWN RICE MEALS (gluten-free brown-rice Italian)   — GF written 'options', queued 'high'
//   + グルテンフリー串揚げ スー［Sû］                            — GF written 'options', queued 'dedicated'
//   + AIN SOPH. GINZA (100% vegan, GF-tagged menu)              — vegan 'full', GF 'options'
// No machine pass sets a GF tier above 'options' (REVIEW_PROTOCOL): the two upgrades go to
// data/_underrated_queue.json with their evidence for Greg's banded review.
// Sources: each shop's own page (fancl.co.jp, TableCheck, ain-soph.jp), FindMeGlutenFree listings and
// first-hand celiac reviews, Tabelog /en/. Pins: Tabelog /en/ geo + GSI (+ OSM). Run from repo root.
import fs from 'fs';
import path from 'path';
import { pathToFileURL } from 'url';
const { readLang, mergePlace, writeLang } = await import(pathToFileURL(path.resolve('scripts/lib-i18n.mjs')).href);

const file = 'data/tokyo.json'; const raw = fs.readFileSync(file, 'utf8'); const d = JSON.parse(raw);
const mf = 'data/tokyo_menus.json'; const menus = JSON.parse(fs.readFileSync(mf, 'utf8'));
const qf = 'data/_underrated_queue.json'; const queue = JSON.parse(fs.readFileSync(qf, 'utf8'));
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
const put = (place, menu, jaFields, upgrade) => {
  if (d.places.some(p => p.id === place.id)) { log.push(`${place.id}: already present`); return; }
  Object.assign(place, { has_menu: true, menu_verified: menu.verified, ...counts(menu.items), sweep: SWEEP });
  d.places.push(place); menus[place.id] = menu; mergePlace(ja, place.id, jaFields);
  if (upgrade && !queue.some(q => q.id === place.id && q.field === upgrade.field)) queue.push({ city: 'tokyo', id: place.id, name: place.name, ...upgrade });
  log.push(`${place.id}: added${upgrade ? ` (queued ${upgrade.field} -> ${upgrade.recommended})` : ''}`);
};
const day = (...spans) => spans;

// ================================================================ FANCL BROWN RICE MEALS
{
  const OWN = 'https://www.fancl.co.jp/ginza-square/brm/index.html';
  const FM = 'https://www.findmeglutenfree.com/biz/fancl-brown-rice-meals/4897732769218560';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13239443/';
  const wk = day(['11:30', '16:00'], ['17:00', '22:00']); const we = day(['11:30', '16:00'], ['17:00', '21:00']);
  const place = {
    id: 'tokyo_fancl_brown_rice_meals_ginza', name: 'FANCL BROWN RICE MEALS (ファンケル ブラウン ライス ミイルズ)', category: 'GF',
    lat: 35.670349, lng: 139.764448,
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: "The restaurant says every item on its menu is gluten-free, made without wheat flour (「全てのメニューは小麦粉を使用しないグルテンフリーとなっております」). The pasta is made fresh in-house each day from brown-rice flour, and the bread is a brown-rice bread. Celiac diners on FindMeGlutenFree consistently report eating there without symptoms. Two cautions. The shop's claim covers the menu, not the facility, and it does not describe how it handles cross-contact. A featured FMGF review warns that most of the menu is gluten-free 'but not absolutely everything'. Tell them you are celiac when you book: the shop asks guests with food allergies to say so at reservation. Check the drinks too, because beer is normally barley. This record is queued for a human review of a higher tier.",
    vegan_status: 'options', vegan_label: 'Some vegan options',
    vegan_detail: "The weekday lunch plate lets you choose a vegan main ('ヴィーガンメニュー') from five. The starter plate includes soy-milk whip, but the shop does not say whether its other starters are vegan. Ask for the vegan main and check the starter plate and soup.",
    hours_raw: 'Lunch 11:30–16:00; café 14:00–16:00; dinner 17:00–22:00 on weekdays and 17:00–21:00 on Saturdays, Sundays and holidays. Closed one day a month (check the shop notices). Weekend lunch courses need a reservation; a ¥500 table charge applies at dinner.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, FANCL Ginza Square B1F — 1 min from Ginza Stn exit A3 (walk through the shop on the ground floor)',
    cuisine: 'Gluten-free brown-rice Italian (pasta, risotto, bread from brown rice)', cuisine_type: 'other',
    website: OWN, gmaps: gm('FANCL BROWN RICE MEALS 東京都中央区銀座5-8-16'), menu_url: OWN,
    notes: "[Gluten-free · brown-rice Italian] The basement restaurant of FANCL Ginza Square, the cosmetics and supplements company's ten-floor Ginza building, open since September 2019. It cooks Italian without wheat flour. The fresh pasta is made by hand every day from a blended brown-rice flour and still has an al dente bite. The bread is brown rice, the rice is FANCL's own germinated brown rice, and the dolci are gluten-free too. There are weekday lunch plates, weekend lunch courses and a build-your-own dinner. It has 36 seats, including a private room that looks onto a waterfall. It is a fixture of celiac travellers' Tokyo lists, with 130+ reviews on FindMeGlutenFree. The brown-rice bread is sold to take away.",
    chef_bio: {
      chef_name: null, roles: ['restaurant of 株式会社ファンケル (FANCL Corporation)'],
      origin: 'FANCL Ginza Square, Ginza 5-chōme; opened 27 September 2019',
      background: "FANCL built the restaurant around 'brown-rice Italian': Italian cooking, which leans heavily on wheat, rebuilt on brown rice so that it is gluten-free and still the real thing, for people with wheat allergies and anyone thinking about their health.",
      philosophy: '「小麦アレルギーの方だけではなく、健康が気になる全ての方に、満足いただけるヘルシーなメニューを実現しました」',
      specialty: 'Fresh brown-rice-flour pasta made daily; brown-rice risotto; brown-rice bread; gluten-free dolci.',
      anecdotes: [
        { text: '「玄米の生パスタを、店内で毎日手作り」 — the fresh pasta is made by hand in the restaurant every day from a blended brown-rice flour, aiming for the al dente bite brown rice usually cannot give.', source: OWN },
        { text: 'A celiac traveller, October 2026: the autumn special course, great service, no symptoms; another reports a free gluten-free bread to start.', source: FM },
        { text: 'FMGF reviewers have reported a dedicated gluten-free fryer, kitchen space and pasta water (two reports each) — community reports, not the shop\'s own statement.', source: FM },
      ],
      japanese_sources_summary: '公式(ファンケル銀座スクエア B1F): 「玄米イタリアン」は小麦粉を一切使わないグルテンフリー。玄米粉の生パスタを店内で毎日手作り。平日ランチプレート¥2,400〜(メイン5種から:玄米パスタ、玄米リゾット、大山鶏ロースト、ガーデンサラダ、ヴィーガンメニュー)、休日ランチコース¥4,800〜(要予約)、ディナー¥4,000〜(テーブルチャージ¥500)。テイクアウト玄米ブレッド¥1,050。※全てのメニューは小麦粉を使用しないグルテンフリー。36席(個室1)。ランチ11:30〜16:00、カフェ14:00〜16:00、ディナー平日17:00〜22:00/土日祝17:00〜21:00、月1回定休。TEL 03-3289-0721。食物アレルギーは予約時に申告。食べログ: 開店2019年9月27日。',
      confidence: 'high', sources: [OWN, FM, TB],
    },
    cultural_comfort: { level: 'english', note: 'The shop publishes its page in English and Chinese, and the FMGF community describes easy service for overseas celiac guests. Reserve for weekend lunch, and say you are celiac when you book.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: "The shop's claim is scoped to the menu (「全てのメニューは小麦粉を使用しないグルテンフリー」); it does not describe facility-level cross-contact controls.", source: OWN },
        { text: "A featured FindMeGlutenFree review: tell them you are celiac, 'as most of the menu is gluten-free, but not absolutely everything.'", source: FM },
      ],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'The weekday lunch plate offers a vegan main among five choices; the starter plate (salad, appetiser, soup, soy-milk whip) is not stated to be vegan.', source: OWN }],
      staff_allergy_handling: [{ text: '「食物アレルギーをお持ちのお客様は、ご予約時にお伝えください」 — guests with food allergies are asked to say so when booking.', source: OWN }],
      positives: [
        { text: '「玄米イタリアン」は小麦粉を一切使わないグルテンフリー — pasta and bread are made from brown rice, not wheat.', source: OWN },
        { text: 'Celiac reviewers on FindMeGlutenFree (130+ ratings) repeatedly report no symptoms; the listing is marked "Reported to be dedicated gluten-free".', source: FM },
      ],
      confidence: 'high', last_checked: TODAY,
    },
    gf_proposed_tier: { to: 'high', from: 'options', by: 'ginza half-mile sweep', date: TODAY, confidence: 'high', note: 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off. Queued in data/_underrated_queue.json.' },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目8番16号 (go) 11m; OSM node 2430633251 「ファンケル」 8m; ${TODAY}`,
  };
  const items = [
    it('平日ランチプレート', 'heijitsu ranchi pureeto', 'Weekday lunch plate (starter plate + one of five mains: brown-rice pasta, risotto, roast Daisen chicken, garden salad or vegan)', '¥2,400~', 'Lunch', 'gf', 'ask', "Shop: every menu item is made without wheat flour. Choose the vegan main for a vegan plate; check the starters.", 'lunch_plate'),
    it('休日ランチコース', 'kyuujitsu ranchi koosu', 'Weekend lunch course (starters, brown-rice bread, pasta, risotto, meat, dolce, drink)', '¥4,800~', 'Lunch', 'gf', 'no', 'Saturdays, Sundays and holidays; reservation required.', 'weekend_lunch_course'),
    it('セレクトディナー', 'serekuto dinaa', 'Select dinner (2 starters, salad and dressing, pasta / risotto / roast chicken)', '¥4,000~', 'Dinner', 'gf', 'ask', '¥500 table charge at dinner.', 'select_dinner'),
    it('コースメニュー', 'koosu menyuu', 'Brown-rice Italian course', '', 'Dinner', 'gf', 'ask', 'Details on the gourmet sites the shop links to.', 'course'),
    it('グルテンフリードルチェ', 'guruten furii doruche', 'Gluten-free dolci (seasonal dolce sets)', '', 'Dessert', 'gf', 'ask', '', 'dolce'),
    it('玄米ブレッド', 'genmai bureddo', 'Brown-rice bread (takeaway; warm before eating)', '¥1,050', 'Takeaway', 'gf', 'ask', 'The same gluten-free bread served in the restaurant.', 'brown_rice_bread'),
  ];
  put(place, { verified: 'partial', confidence: 'medium', sources: [OWN, FM],
    price_note: "From the restaurant's own page, which gives prices only as 'from' figures per format and states that every menu item is made without wheat flour. Dish-level detail is on the gourmet sites it links to. GF flags here follow that statement; ask about drinks (beer is normally barley).", last_checked: TODAY, items }, {
    cuisine: 'グルテンフリーの玄米イタリアン(玄米パスタ・リゾット・玄米ブレッド)',
    neighborhood: '銀座五丁目、ファンケル銀座スクエア B1F。銀座駅A3出口から徒歩1分(1階の店内を通って地下へ)',
    gf_detail: '店は「全てのメニューは小麦粉を使用しないグルテンフリーとなっております」としています。生パスタは玄米粉で毎日店内で手作りし、パンも玄米ブレッドです。FindMeGlutenFreeでは、セリアック病の利用者から症状なく食べられたという報告が続いています。注意点が2つあります。店の表明はメニューについてのもので施設全体ではなく、コンタミネーション対策は説明されていません。FMGFの注目レビューには「ほとんどはグルテンフリーだが、すべてではない」との指摘もあります。予約時にセリアック病であることを伝えてください(店は食物アレルギーの申告を予約時に求めています)。ビールは通常大麦が原料なので、飲み物も確認を。この記録は、より上の区分への引き上げを人の手で審査する待ち行列に入っています。',
    vegan_detail: '平日ランチプレートでは、5種類のメインから「ヴィーガンメニュー」を選べます。前菜プレートには豆乳ホイップが付きますが、ほかの前菜がヴィーガンかどうかは書かれていません。ヴィーガンのメインを選び、前菜とスープを確認してください。',
    notes: '[グルテンフリー・玄米イタリアン] 化粧品・健康食品のファンケルの銀座の自社ビル、ファンケル銀座スクエアの地下にあるレストランで、2019年9月開業。小麦粉を使わずにイタリアンを作っています。生パスタは独自配合の玄米粉で毎日手作りし、アルデンテの食感まで再現。パンは玄米、ご飯はファンケル発芽米で、ドルチェもグルテンフリーです。平日ランチプレート、休日ランチコース、組み合わせを選べるディナーがあります。36席で、滝の見える個室もあります。FindMeGlutenFreeに130件以上の評価があり、セリアック病の旅行者の東京リストの定番です。玄米ブレッドは持ち帰りもできます。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'high', evidence: [OWN, FM],
    why: "Own claim: 「全てのメニューは小麦粉を使用しないグルテンフリーとなっております」 and 「『玄米イタリアン』は小麦粉を一切使わないグルテンフリー」; brown-rice-flour pasta made in-house daily; brown-rice bread. Independent first-hand corroboration: FindMeGlutenFree, 135 reviews, 'Reported to be dedicated gluten-free', repeated celiac 'no symptoms' reports incl. October 2026, two reports each of a dedicated GF kitchen space and pasta water. 'high' rather than 'dedicated': the claim is product-scoped (小麦粉不使用) with no facility or cross-contact statement; a featured FMGF review says 'most of the menu is gluten-free, but not absolutely everything'; FMGF users list beer among GF items and the drinks list is not on the shop page. Questions for the shop: are drinks (beer) and every sauce/seasoning wheat- and barley-free, and is any wheat ever on the premises?",
  });
}

// ================================================================ グルテンフリー串揚げ スー［Sû］
{
  const TC = 'https://www.tablecheck.com/en/shops/glutenfree-kushiage-su/reserve';
  const TCJ = 'https://www.tablecheck.com/ja/shops/glutenfree-kushiage-su/reserve';
  const FM = 'https://www.findmeglutenfree.com/biz/su/5948908314951680';
  const din = ['19:00', '23:00'];
  const place = {
    id: 'tokyo_glutenfree_kushiage_su', name: 'グルテンフリー串揚げ スー［Sû］ (Gluten-free Kushiage Sû)', category: 'GF',
    lat: 35.66647, lng: 139.763657,
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: "The shop is a gluten-free kushiage specialist (グルテンフリー串揚げ専門店) and says it can accommodate guests with a gluten allergy or celiac disease. Celiac diners on FindMeGlutenFree describe it as completely gluten-free, report no symptoms, and mention a celiac-safe rice beer. One thing the shop does not state: it uses soy sauce, miso and other soy seasonings throughout the course, but does not say on its booking page that they are wheat-free. Message the shop by Instagram DM or email before you book to confirm, as it asks for all allergy questions. This record is queued for a human review of a higher tier.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The shop says plainly that it cannot accommodate vegan requests. The omakase is built on seafood, and even the pescatarian version uses dairy and eggs.',
    hours_raw: 'Dinner 19:00 (one seating; the course starts when all guests have arrived), Tuesday–Sunday; Sunday lunch 12:00. Closed Mondays. Reservation only, through TableCheck, until 18:00 the day before. No children under 6.',
    hours: { 1: day(din), 2: day(din), 3: day(din), 4: day(din), 5: day(din), 6: day(['12:00', '14:00'], din) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Ginza Park Bldg 2F (no sign outside: intercom 201 by the side entrance)',
    cuisine: 'Gluten-free kushiage omakase (rice-flour fried skewers)', cuisine_type: 'other',
    website: TC, gmaps: gm('グルテンフリー串揚げ スー 東京都中央区銀座8-15-2'), menu_url: TC,
    notes: "[Gluten-free · Mom & Pop · kushiage omakase] A six-seat, reservation-only counter where a single chef cooks and serves a seasonal omakase of gluten-free fried skewers: two starters, eleven skewers, soup, a palate cleanser and dessert. Everyone starts together at 7 p.m. There is no sign. You walk through the Ginza Park Building and buzz 201 at the side entrance. Celiac reviewers call it the best gluten-free meal they have had in Tokyo, with mentions of the chef's warmth and a gluten-free rice beer. The course is seafood-heavy and soy-seasoned, so it suits neither vegans nor guests with a soy allergy.",
    chef_bio: {
      chef_name: null, roles: ['owner-chef (operates the restaurant alone)'],
      origin: 'Ginza 8-chōme',
      background: "Sû is run by a single chef ('our restaurant is operated by a single chef') who prepares and serves the course himself, per both the booking page and FindMeGlutenFree reviews. No name is published.",
      philosophy: '「からだにも こころにも おいしい」 — good for body and heart.',
      specialty: 'Seasonal gluten-free kushiage omakase, 11 skewers.',
      anecdotes: [
        { text: "FMGF, October 2026: 'Completely gluten free restaurant with the sweetest and most humble guy who prepares and serves the food himself… Reservations are required as they can only seat 6 guests.'", source: FM },
        { text: "FMGF, October 2026: 'Really good Celiac safe rice beer (I triple checked!).'", source: FM },
        { text: 'No sign outside: walk through the Ginza Park Building and call 201 on the intercom by the side entrance.', source: TC },
      ],
      japanese_sources_summary: 'TableCheck(店舗のお知らせ): グルテンフリー串揚げ専門店、銀座8-15-2 銀座パークビル2階、19:00〜23:00(一斉スタート)、日曜ランチ12:00〜、月曜定休、完全予約制、定員6名。おまかせ11串コース13,800円(税込・飲料別・サービス料なし、10月から)、日曜ランチ6,000円。アレルギーの問い合わせはInstagram DMまたはGmail。大豆由来の調味料・食材を多く使用。ヴィーガン不可。未就学児不可。看板なし、通用口右のインターホン201。',
      confidence: 'medium', sources: [TC, TCJ, FM],
    },
    cultural_comfort: { level: 'english', note: 'The booking page is in English, the shop handles allergy questions by email or Instagram DM, and most FMGF reviewers are overseas visitors. One seating at 19:00; arrive on time (30 minutes late without contact may cancel the booking).' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [],
      soy_sauce_wheat: [{ text: 'Soy-based ingredients, including soy sauce and miso, are used extensively throughout the course; the booking page does not state that they are wheat-free.', source: TC }],
      vegan_cross_contact: [{ text: "'Unfortunately, we are unable to accommodate… Vegan requests'; pescatarian courses still use dairy and eggs.", source: TC }],
      staff_allergy_handling: [
        { text: "'We are able to accommodate: Guests with gluten allergy or celiac disease'; allergy enquiries by Instagram DM or email before booking.", source: TC },
        { text: 'Soy and rice allergies cannot be accommodated because cross-contact cannot be eliminated.', source: TC },
      ],
      positives: [
        { text: 'A gluten-free kushiage specialist (グルテンフリー串揚げ専門店) — the whole course is gluten-free.', source: TCJ },
        { text: "Celiac reviewers on FindMeGlutenFree report no symptoms and call it 'Completely gluten free'; listing marked 'Reported to be dedicated gluten-free'.", source: FM },
      ],
      confidence: 'medium', last_checked: TODAY,
    },
    gf_proposed_tier: { to: 'dedicated', from: 'options', by: 'ginza half-mile sweep', date: TODAY, confidence: 'medium', note: 'Not applied: a dedicated/high label requires REVIEW_PROTOCOL.md pass 3 plus human sign-off. Queued in data/_underrated_queue.json.' },
    mom_and_pop: true,
    pin_source: `GSI 東京都中央区銀座八丁目15番2号 (go) from the shop's own address on TableCheck (${TC}); no Tabelog listing; single source; ${TODAY}`,
  };
  const items = [
    it('グルテンフリー串揚げおまかせ11串コース', 'guruten furii kushiage omakase', 'Gluten-free kushiage omakase: 2 starters, 11 skewers, soup, palate cleanser, dessert', '¥13,800', 'Course', 'gf', 'no', 'Tax included, no service charge, drinks extra (from October 2026). Soy seasonings used throughout — confirm they are wheat-free.', 'kushiage_course'),
    it('日曜限定ランチショートコース', 'nichiyou gentei ranchi', 'Sunday lunch short course: starter, 7 skewers, soup, dessert', '¥6,000', 'Course', 'gf', 'no', 'Sundays, 12:00 start.', 'kushiage_lunch'),
    it('', '', 'Gluten-free rice beer', '', 'Drinks', 'gf', '', "Reported 'celiac safe' by an FMGF reviewer, October 2026; confirm the brand.", 'rice_beer'),
  ];
  put(place, { verified: 'partial', confidence: 'medium', sources: [TC, TCJ, FM],
    price_note: "Course prices from the shop's own TableCheck notice (dinner raised to ¥13,800 from October 2026). The course content is the chef's seasonal choice.", last_checked: TODAY, items }, {
    cuisine: 'グルテンフリー串揚げのおまかせ(米粉の串揚げ)',
    neighborhood: '銀座八丁目、銀座パークビル2階(看板なし。通用口のインターホンで201)',
    gf_detail: 'グルテンフリー串揚げ専門店で、店は小麦アレルギーやセリアック病の方にも対応できるとしています。FindMeGlutenFreeでは、セリアック病の利用者が「完全にグルテンフリー」と書き、症状はなかったと報告。セリアックでも安全な米のビールにも触れています。一点、店が明記していないことがあります。コース全体で醤油・味噌などの大豆調味料を使っていますが、予約ページにはそれが小麦不使用だとは書かれていません。店はアレルギーの問い合わせをすべてInstagramのDMかメールで受けているので、予約前に確認してください。この記録は、より上の区分への引き上げを人の手で審査する待ち行列に入っています。',
    vegan_detail: 'ヴィーガンではありません。店はヴィーガンの要望には対応できないと明記しています。おまかせは魚介中心で、ペスカタリアン対応でも乳製品と卵を使います。',
    notes: '[グルテンフリー・個人店・串揚げおまかせ] 6席・完全予約制のカウンターで、シェフがひとりで季節のグルテンフリー串揚げのおまかせを作り、提供します。内容は前菜2品、串揚げ11本、スープ、箸休め、デザート。19時に全員一斉スタートです。看板はなく、銀座パークビルを通り抜け、通用口のインターホンで201を呼び出します。セリアック病の利用者からは東京で一番のグルテンフリーの食事だったと評され、シェフの人柄やグルテンフリーの米のビールにも言及があります。魚介中心で大豆系の調味料を多用するため、ヴィーガンや大豆アレルギーの方には向きません。',
  }, {
    field: 'gf_confidence', current: 'options', recommended: 'dedicated', evidence: [TCJ, TC, FM],
    why: "Own claim: the shop is a グルテンフリー串揚げ専門店 and states 'We are able to accommodate: Guests with gluten allergy or celiac disease' — the whole omakase is the gluten-free kushiage course. Independent first-hand corroboration: FindMeGlutenFree (66 reviews), marked 'Reported to be dedicated gluten-free', October 2026 celiac reviews: 'Completely gluten free restaurant', 'No symptoms', 'Celiac safe rice beer (I triple checked!)'. Open question before 'dedicated' goes live: the shop says soy sauce, miso and soy seasonings are used extensively but its page never states they are wheat-free (FMGF users list 'Soy Sauce' among GF items, which suggests GF soy but is not the shop's word). Ask the shop (Instagram DM / glutenfree.kushiage.tokyo.ginza@gmail.com) to confirm tamari / wheat-free soy and that no wheat enters the kitchen.",
  });
}

// ================================================================ AIN SOPH. GINZA
{
  const OWN = 'https://www.ain-soph.jp/ginza';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13101500/';
  const FM = 'https://www.findmeglutenfree.com/biz/ain-soph/5558731387043840';
  const wd = day(['11:30', '16:00'], ['17:00', '21:00']); const hol = day(['08:00', '11:30'], ['11:30', '16:00'], ['17:00', '21:00']);
  const place = {
    id: 'tokyo_ain_soph_ginza', name: 'AIN SOPH. GINZA (アインソフ銀座本店)', category: 'BOTH',
    lat: 35.670193, lng: 139.767985,
    gf_confidence: 'options', gf_label: 'Some GF options',
    gf_detail: "Many dishes are marked 【GF】 on the shop's own menu: the signature rice-flour pancakes (fermented overnight with coconut oil), the Fukurokuju bento, green curry, the vegan pudding and most desserts. Some dishes are not tagged GF: the hummus (served with a baguette), the vegan cutlets and cutlet plate, the tomato-sauce veg-hamburg, the house ice cream and the beers (Heartland and the beer cocktails are barley). The shop notes that its factory and shop also handle other allergens and asks guests with allergies to speak to staff. This is a shared kitchen: order only the 【GF】-marked dishes and confirm.",
    vegan_status: 'full', vegan_label: 'Fully vegan',
    vegan_detail: "Everything is 100% vegan (「全品100%ヴィーガン」): no meat, fish, dairy or eggs, only plant ingredients. Many dishes can also be made without the five pungent vegetables (素食 / oriental vegan) on request.",
    hours_raw: 'Restaurant (2F–4F): weekdays lunch 11:30–16:00 (L.O. 15:00) and dinner 17:00–21:00 (L.O. 20:00); weekends add breakfast 8:00–11:30. Patisserie (1F): 11:30–20:30. Hours change at times — the shop points to its Instagram.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: hol, 6: hol }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, by Kabuki-za — 1 min from Higashi-Ginza exit 3, 5 min from Ginza exit A7',
    cuisine: '100% vegan restaurant & patisserie · gluten-free rice-flour pancakes', cuisine_type: 'other',
    website: OWN, gmaps: gm('AIN SOPH. GINZA 東京都中央区銀座4-12-1'), menu_url: OWN,
    notes: "[Vegan · GF options] The flagship of AIN SOPH., a Tokyo vegan group that opened here in December 2009 and has since added Shinjuku, Ikebukuro and Kyoto. A vegan patisserie fills the ground floor, with the pudding, raisin-butter sandwiches and cookies. Three floors of restaurant sit above. The draw is the 'heavenly' vegan pancake, made from Kyushu rice flour and coconut oil, fermented overnight and tagged gluten-free. The Ginza-only Fukurokuju bento is a tiered box (お重) of salads, bagna cauda, tofu Spanish omelette, soy-meat kara-age, organic brown rice and spinach green curry. Organic wine and craft beer are served. Weekend breakfast starts at 8:00. Many dishes can be made without garlic, onion and leek.",
    chef_bio: {
      chef_name: null, roles: ['vegan restaurant group (AIN SOPH.) — flagship'],
      origin: 'Ginza 4-chōme; founded 2009',
      background: "AIN SOPH. began at this Ginza shop in 2009 and runs sister restaurants in Shinjuku (Journey), Ikebukuro (Soar) and Kyoto (Journey Kyoto). The founder's statement on the shop page says the idea came at a turning point in life, from a bowl of tea at a tea ceremony that felt like the power of nature in a single drop.",
      philosophy: "'Our cuisine is a meal for us to return to our origin.'",
      specialty: 'Rice-flour vegan pancakes; Fukurokuju bento; vegan patisserie (pudding, raisin sandwiches).',
      anecdotes: [
        { text: "The pancake batter is Kyushu rice flour and coconut oil, fermented slowly overnight — 'crisp outside, soft and moist inside.'", source: OWN },
        { text: 'The Fukurokuju bento is only at the Ginza flagship.', source: OWN },
        { text: "The founder's note: at a crossroads in life, a cup of tea at a tea ceremony inspired AIN SOPH. as 'a place to return to your origin.'", source: OWN },
      ],
      japanese_sources_summary: '公式(ain-soph.jp/ginza): 2009年創業、アインソフ銀座本店。1階ヴィーガンパティスリー、2〜4階ヴィーガンレストラン。全品100%ヴィーガン、グルテンフリーのメニューが豊富、五葷抜き対応メニューあり。メニューに【GF】【素食】表示。天上のヴィーガンパンケーキ¥2,550、福禄寿BENTO¥3,900(銀座本店限定)、福禄寿BENTOコース¥7,800。※製造工場・店舗では上記以外のアレルギー物質も扱っています。銀座4-12-1、TEL 050-3134-4241。食べログ: 開店2009年12月3日、30席。',
      confidence: 'high', sources: [OWN, TB, FM],
    },
    cultural_comfort: { level: 'english', note: 'The shop runs an English website; the menu marks 【GF】 and 【素食】 (no five pungent vegetables). Private rooms on each floor; weekends are busy, so book.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [
        { text: '「製造工場・店舗では、上記以外のアレルギー物質も扱っています」 — the factory and shop also handle other allergens; ask staff.', source: OWN },
        { text: 'Not every dish is GF-tagged: the hummus comes with a baguette, the vegan cutlets and the cutlet plate carry no 【GF】 mark.', source: OWN },
      ],
      soy_sauce_wheat: [{ text: 'The autumn veg-hamburg uses a Japanese teriyaki-style sauce but is tagged 【GF】 by the shop; ask which soy sauce is used.', source: OWN }],
      vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Guests with allergies are asked to consult the staff.', source: OWN }],
      positives: [
        { text: 'The menu marks gluten-free dishes 【GF】; the signature pancakes are rice-flour based.', source: OWN },
        { text: "FMGF reviewers: 'both vegan and gluten free options available.'", source: FM },
      ],
      confidence: 'high', last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目12番1号 (go) 2m; OSM node 4542178692 「アインソフ.銀座」 1m; ${TODAY}`,
  };
  const V = 'vegan';
  const items = [
    it('きのことくるみの和風ベジハンバーグ', 'kinoko to kurumi no wafuu beji hanbaagu', 'Mushroom-and-walnut veg-hamburg, Japanese teriyaki sauce (autumn)', '¥2,530', 'Mains', 'gf', V, 'Shop-tagged 【GF】; ask which soy sauce is in the teriyaki.', 'veg_hamburg_wafu'),
    it('さつまいもモンブランパンケーキ', 'satsumaimo monburan pankeeki', 'Sweet-potato Mont Blanc pancake (autumn)', '¥2,640', 'Pancakes', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'pancake_montblanc'),
    it('福禄寿BENTOコース ー禅ー', 'fukurokuju bento koosu zen', 'Fukurokuju bento course "Zen" (aperitif, soup, bento, pudding, drink)', '¥7,800', 'Course', 'gf', V, 'Shop-tagged 【GF】【素食】. Drink choices include beer — choose wine or a soft drink.', 'bento_course'),
    it('天上のヴィーガンパンケーキコース', 'tenjou no vegan pankeeki koosu', '"Heavenly" vegan pancake course (salad, soup, pancake, drink)', '¥4,980', 'Course', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'pancake_course'),
    it('福禄寿BENTO', 'fukurokuju bento', 'Fukurokuju bento (Ginza only)', '¥3,900', 'Mains', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'fukurokuju_bento'),
    it('ベジミート唐揚げの照り焼きプレート', 'bejimiito karaage no teriyaki pureeto', 'Soy-meat kara-age teriyaki plate', '¥2,200', 'Mains', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'soy_karaage_plate'),
    it('トマトソースのベジハンバーグ', 'tomato soosu no beji hanbaagu', 'Veg-hamburg in tomato sauce', '¥2,300', 'Mains', 'gf', V, 'Shop-tagged 【GF】.', 'veg_hamburg_tomato'),
    it('ベジカツプレート', 'bejikatsu pureeto', 'Veg-cutlet plate', '¥2,400', 'Mains', 'no', V, 'Not GF-tagged by the shop.', 'veg_katsu_plate'),
    it('ほうれん草のグリーンカレー', 'hourensou no guriin karee', 'Spinach green curry', '¥2,400', 'Mains', 'gf', V, 'Shop-tagged 【GF】【素食】; the cutlet topping (+¥800) is not GF.', 'green_curry'),
    it('天上のヴィーガンパンケーキ', 'tenjou no vegan pankeeki', '"Heavenly" vegan pancakes (rice flour; 1 piece ¥1,870)', '¥2,550', 'Pancakes', 'gf', V, 'Shop-tagged 【GF】【素食】. Kyushu rice flour, coconut oil, fermented overnight.', 'vegan_pancake'),
    it('メープルマスタードソイチキンパンケーキ', 'meepuru masutaado soi chikin pankeeki', 'Maple-mustard soy-chicken pancake', '¥2,550', 'Pancakes', 'gf', V, 'Shop-tagged 【GF】.', 'soy_chicken_pancake'),
    it('彩り野菜のガーデンプレートサラダ', 'irodori yasai no gaaden pureeto sarada', 'Garden plate salad (for 2–3)', '¥2,780', 'Sides', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'garden_salad'),
    it('ミニガーデンサラダ', 'mini gaaden sarada', 'Mini garden salad', '¥1,300', 'Sides', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'mini_salad'),
    it('お豆腐のスパニッシュオムレツ', 'otoufu no supanisshu omuretsu', 'Tofu Spanish omelette', '¥1,100', 'Sides', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'tofu_omelette'),
    it('ベジミートの唐揚げ', 'bejimiito no karaage', 'Soy-meat kara-age', '¥1,100', 'Sides', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'soy_karaage'),
    it('ヴィーガンカツレツ(2枚)', 'vegan katsuretsu', 'Vegan cutlets (2)', '¥1,300', 'Sides', 'no', V, 'Not GF-tagged by the shop.', 'vegan_cutlet'),
    it('ひよこ豆のフムス(バゲット付き)', 'hiyokomame no fumusu', 'Chickpea hummus with baguette', '¥1,150', 'Sides', 'no', V, 'Comes with a baguette; not GF-tagged.', 'hummus'),
    it('コーンミールチップス', 'koonmiiru chippusu', 'Cornmeal chips (S ¥500 / L ¥880)', '¥500', 'Sides', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'corn_chips'),
    it('具沢山トマトスープ', 'gudakusan tomato suupu', 'Hearty tomato soup', '¥930', 'Sides', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'tomato_soup'),
    it('アーモンドミルク仕立ての濃厚コーンスープ', 'aamondo miruku jitate no noukou koon suupu', 'Rich corn soup with almond milk', '¥980', 'Sides', 'gf', V, 'Shop-tagged 【GF】.', 'corn_soup'),
    it('無農薬玄米', 'munouyaku genmai', 'Pesticide-free brown rice', '¥660', 'Sides', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'brown_rice'),
    it('ヴィーガンプリン', 'vegan purin', 'Vegan pudding', '¥850', 'Dessert', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'vegan_pudding'),
    it('オーガニックバナナケーキ', 'ooganikku banana keeki', 'Organic banana cake', '¥1,180', 'Dessert', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'banana_cake'),
    it('キャラメルナッツブラウニー', 'kyarameru nattsu buraunii', 'Caramel-nut brownie', '¥1,200', 'Dessert', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'brownie'),
    it('京都宇治抹茶プリンパフェ', 'kyouto uji maccha purin pafe', 'Uji matcha pudding parfait', '¥2,400', 'Dessert', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'matcha_parfait'),
    it('宇治抹茶ガトー', 'uji maccha gatoo', 'Uji matcha gâteau', '¥1,480', 'Dessert', 'gf', V, 'Shop-tagged 【GF】【素食】.', 'matcha_gateau'),
    it('自家製ヴィーガンアイス(2スクープ)', 'jikasei vegan aisu', 'House vegan ice cream, 2 scoops', '¥880', 'Dessert', 'ask', V, 'Not GF-tagged by the shop; ask (flavours include rum-raisin and matcha).', 'vegan_ice_cream'),
    it('ハートランド生ビール', 'haatorando nama biiru', 'Heartland draught beer (also matcha beer, lemon beer)', '', 'Drinks', 'no', V, 'Beer is brewed from barley malt.', 'beer'),
    it('オーガニックハウスワイン', 'ooganikku hausu wain', 'Organic house wine (glass ¥880 / decanter ¥3,500)', '¥880', 'Drinks', '', V, '', 'house_wine'),
    it('ヴィーガンプリン・クラシック(お持ち帰り)', 'vegan purin kurashikku', 'Vegan pudding classic (takeaway, 1F patisserie)', '¥800', 'Takeaway', 'ask', V, 'Not tagged on the takeaway list; the restaurant pudding is 【GF】.', 'pudding_takeaway'),
  ];
  put(place, { verified: 'authoritative', confidence: 'high', sources: [OWN],
    price_note: "Full menu with prices and the shop's own 【GF】 / 【素食】 tags, from its Ginza page. GF flags follow the shop's tags. Untagged items are marked 'no' where they contain bread or beer and 'ask' otherwise. The shop notes that other allergens are handled in its factory and shop.", last_checked: TODAY, items }, {
    cuisine: '100%ヴィーガンのレストラン＆パティスリー・米粉のグルテンフリーパンケーキ',
    neighborhood: '銀座四丁目、歌舞伎座のそば。東銀座駅3番出口から徒歩1分、銀座駅A7出口から徒歩5分',
    gf_detail: '店のメニューでは多くの料理に【GF】表示があります。看板の米粉パンケーキ(ココナッツオイルを使い一晩発酵)、福禄寿BENTO、グリーンカレー、ヴィーガンプリンやほとんどのデザートがそうです。【GF】表示がないものもあります。フムス(バゲット付き)、ヴィーガンカツレツとベジカツプレート、トマトソースのベジハンバーグ、自家製アイス、ビール類(ハートランドやビアカクテルは大麦)です。店は製造工場と店舗でほかのアレルギー物質も扱っていると明記し、アレルギーのある方はスタッフに相談するよう案内しています。共用の厨房なので、【GF】表示の料理だけを選び、確認してください。',
    vegan_detail: '全品100%ヴィーガン(「全品100%ヴィーガン」)で、肉・魚・乳製品・卵を使わず、植物性の素材だけで作っています。多くの料理は注文時に五葷抜き(素食・オリエンタルヴィーガン)にも変更できます。',
    notes: '[ヴィーガン・グルテンフリーの選択肢あり] 2009年12月にここで開業し、新宿・池袋・京都にも店を持つ東京のヴィーガンレストラン「アインソフ」の本店です。1階はプリン、レーズンバターサンド、クッキーなどが並ぶヴィーガンパティスリーで、その上の3フロアがレストラン。看板は九州産米粉とココナッツオイルを一晩発酵させた「天上のヴィーガンパンケーキ」で、グルテンフリー表示です。銀座本店限定の福禄寿BENTOは、サラダ、バーニャカウダ、お豆腐のスパニッシュオムレツ、ベジミートの唐揚げ、無農薬玄米、ほうれん草のグリーンカレーを詰めたお重。オーガニックワインやクラフトビールもあります。週末は8時から朝食営業。多くの料理を五葷抜きにできます。',
  });
}

fs.writeFileSync(file, raw.includes('\n') ? JSON.stringify(d, null, 1) : JSON.stringify(d));
fs.writeFileSync(mf, JSON.stringify(menus, null, 1));
fs.writeFileSync(qf, JSON.stringify(queue, null, 1));
writeLang('tokyo', 'ja', ja);
console.log(log.join('\n'));
console.log(`Tokyo now ${d.places.length} places; underrated queue ${queue.length}.`);
