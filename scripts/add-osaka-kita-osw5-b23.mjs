// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 23.
//   Ids checked for parity: 27099102, 27076244, 27003802, 27042272 (all even).
//   + 脇田屋 Wakita Ya (counter izakaya of charcoal-grilled horumon, yakiton and yakitori in 西天満, since 2017)
//   + 花様 西梅田 Kayou Nishi umeda (Omi-vegetable kaiseki from the group's own Shiga farm, Dojima)
//   + 出入橋きんつば屋 Deiribashi Kintsuba Ya (kintsuba and wagashi shop with an eat-in room, Tabelog sweets 100)
//   + 串揚厨房 Kanta Kushiage Chubo Kanta (kushiage in vegetable oil, katsu set lunches, since 2003)
//   Chain check: 脇田屋: one shop. 花様: invoice T5160001016157 → 株式会社ガーデン, 守山市 (NTA register); gnavi titles in search results show
//   a second shop, 花様 ka-you 阪急梅田 (pages not opened); none in data; a small group, kept and flagged. きんつば屋: one shop. Kanta: one shop.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 脇田屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27099102/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '00:00']);
  put({
    id: 'osaka_wakitaya_nishitenma', name: '脇田屋 (Wakita Ya)', category: 'OMNI',
    lat: 34.697542, lng: 135.501521, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Horumon grilled in a house sauce, a horumon stew and a stamina rice bowl; yakiton and yakitori.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: offal, pork and chicken grilled over charcoal.',
    hours_raw: 'Mon–Sat, the day before and after a holiday 17:00–24:00 (last order food 23:00, drinks 23:30); closed Sundays, holidays and the 2nd and 4th Mondays (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 15 seats, mostly a counter; smoking allowed; free Wi-Fi (Tabelog). Opened 6 June 2017 (Tabelog). A stamina rice bowl at lunch in January 2022.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西天満4-15-1, between Kitashinchi and Nishitenma — 5 min from Kitashinchi Stn, 6 min from Higashi-Umeda Stn',
    cuisine: 'Counter izakaya where the chef grills horumon, yakiton and yakitori over charcoal, with a focus on shochu (Tabelog) · dishes named in 2022–2025: wagyu horumon of small intestine ¥908 (small ¥528), later ¥999; gatsu-shin, heart, shiro-maru; harami, tongue and koshira ¥588; chicken thigh tataki ¥999; chicken neck ¥488; beef tataki yukhoe ¥1,280; a light horumon stew; kimchi, pickled rakkyo; a stamina rice bowl ¥600 at lunch (2022); house-made sauces',
    website: null, gmaps: gm('脇田屋 西天満'), menu_url: null,
    notes: "[Izakaya · 西天満, charcoal-grilled horumon] A small counter izakaya between Kitashinchi and Nishitenma, open since 2017, where the owner grills horumon, yakiton and yakitori over charcoal and makes the sauces. Start with the wagyu horumon of small intestine and the beef tataki yukhoe, then work through heart, shiro-maru and tongue; small portions make it easy to eat alone. Prices are low for the area, around ¥3,000–4,000 a head. Busy with office workers after work; smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner-chef at the grill (unnamed)', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: a hidden izakaya between Kitashinchi and Nishitenma where the chef grills offal, yakiton and yakitori over charcoal, with popular shochu; opened 6 June 2017. A March 2022 diner was told the sauces are homemade by the owner; a March 2023 diner describes the owner grilling.', philosophy: null, specialty: 'Charcoal-grilled horumon; house sauces.',
      anecdotes: [
        { text: '"I heard they are homemade by the owner." — March 2022, of the sauces.', source: R + 'B445868544/' },
        { text: '"Everything is reasonably priced and there are small portion sizes available, perfect for enjoying a meal alone." — March 2023.', source: R + 'B462319237/' },
        { text: '"It\'s bustling with salarymen after work." — February 2025.', source: R + 'B502874871/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 脇田屋、ホルモン・居酒屋・もつ鍋、大阪市北区西天満4-15-1、北新地駅から5分、東梅田駅から6分、大阪駅から11分、月〜土・祝前日・祝後日17:00〜24:00 (L.O.料理23:00、ドリンク23:30)、日・祝と第2・第4月曜休み、予約可、カード可、電子マネー・QR 不可、15席、喫煙可、無料 Wi-Fi、2017年6月6日オープン、北新地と西天満の間の隠れ家の居酒屋、炭火で焼くホルモン・焼きとん・焼き鳥、人気の焼酎。口コミ(2019年9月〜2025年7月): 和牛ホルモン (小腸) 908円 (小は528円)、のちに999円、ガツしん、ハツ、シロまる、ハラミ・タン・コシラ588円、鶏もものたたき999円、せせり488円、牛たたきユッケ1,280円、あっさりしたホルモンの煮込み、キムチ、らっきょう、ランチのスタミナ丼600円、店主の自家製のたれ、ひとりでも少なめの量で、仕事帰りの会社員でにぎわう、明るい店主とスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B334491318/', R + 'B402209430/', R + 'B445154592/', R + 'B445868544/', R + 'B462319237/', R + 'B491399085/', R + 'B502061883/', R + 'B502874871/', R + 'B504880698/', R + 'B526240644/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter izakaya; small portions for one (2023). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区西天満4-15-1',
    existence: { status: 'probable', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with current hours; the latest review read is dated July 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区西天満四丁目15番1号 (go) 4m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B402209430/', R + 'B502874871/'],
    price_note: 'Prices from 2022–2025 reviews; they may have changed.', last_checked: TODAY, items: [
      it('', '', 'Wagyu horumon (small intestine)', '¥999', 'Grill', 'ask', 'no', 'February 2025; ¥908 in May 2022.', 'wagyu_horumon'),
      it('', '', 'Chicken thigh tataki', '¥999', 'À la carte', 'ask', 'no', 'February 2025.', 'momo_tataki'),
      it('', '', 'Beef tataki yukhoe', '¥1,280', 'À la carte', 'ask', 'no', 'March 2023.', 'yukhoe'),
    ] }, {
    cuisine: '大将が炭火で焼くホルモン、焼きとん、焼き鳥のカウンターの居酒屋で、焼酎が充実 (食べログ)・2022年〜2025年の口コミに出てくる料理: 和牛ホルモン (小腸) 908円 (小は528円)、のちに999円、ガツしん、ハツ、シロまる、ハラミ・タン・コシラ588円、鶏もものたたき999円、せせり488円、牛たたきユッケ1,280円、あっさりしたホルモンの煮込み、キムチ、らっきょう、ランチのスタミナ丼600円 (2022年)、自家製のたれ',
    neighborhood: '西天満4-15-1、北新地と西天満の間。北新地駅から5分、東梅田駅から6分',
    gf_detail: '要確認。グルテンの情報なし。自家製のたれのホルモン焼き、ホルモンの煮込み、スタミナ丼、焼きとん、焼き鳥。',
    vegan_detail: 'ヴィーガンではありません。ホルモン、豚、鶏の炭火焼き。',
    notes: '[居酒屋・西天満、炭火のホルモン] 北新地と西天満の間にある小さなカウンターの居酒屋で、2017年から。店主が炭火でホルモン、焼きとん、焼き鳥を焼き、たれも自家製。まずは小腸の和牛ホルモンと牛たたきユッケ、それからハツ、シロまる、タン。少なめの量もあるのでひとりでも入りやすい。このあたりにしては安く、ひとり3,000〜4,000円ほど。仕事帰りの会社員でにぎわい、喫煙可。',
  });
}

// ================================================================ 花様 西梅田
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27076244/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_kayou_nishiumeda_dojima', name: '花様 西梅田 (Kayou Nishi umeda)', category: 'OMNI',
    lat: 34.696073, lng: 135.494008, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Vegetable kaiseki with a house dressing, tempura, Omi fu, Omi chicken hotpot and Omi beef sukiyaki.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable-led restaurant with all-you-can-eat salad, and Tabelog ticks "vegetarian options", but the courses include chicken, pork and beef hotpots and nothing is described as vegan.',
    hours_raw: 'Daily 11:30–15:00 (last order 14:30; Sunday lunch by course only) and 18:00–22:00 (last order 21:00); open year-round (Tabelog). Reservations accepted; after 13:00 at lunch by phone only (September 2026). Starter ¥330, not with courses (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay (Tabelog). 40 seats; private rooms for 2 to over 30; non-smoking; Osaka gold sticker for infection control (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂島2-1-18, ground floor of 堂島NSビル — 4 min from Nishi-Umeda Stn exit 9, 5 min from Kitashinchi and Watanabebashi Stns',
    cuisine: 'Kaiseki of "Omi vegetables" from the group\'s own farm in Moriyama, Shiga, and from more than 300 local farmers, collected daily by the group\'s own trucks, with Omi beef bought whole and Lake Biwa fish (Tabelog) · courses (Tabelog, tax included): farmer\'s vegetable kaiseki with all-you-can-eat Omi vegetable salad and an Omi chicken hotpot ¥4,000 (from ¥5,000); with an anniversary cake ¥4,000; with an Omi beef sukiyaki hotpot ¥4,500 (from ¥5,500); all-you-can-drink ¥1,500 (August 2026) · lunch: Omi vegetable obanzai set of the day, a main such as ginger pork with cabbage and komatsuna, with free refills of salad, rice (house brown rice mixed with Omi rice) and miso soup, ¥1,210 (August–September 2026) · a flowerpot of raw vegetable salad dressed from a watering can at the table, red konnyaku and Omi fu, tempura, seasoned rice (August–September 2026)',
    website: null, gmaps: gm('花様 西梅田 堂島'), menu_url: null,
    notes: "[Japanese · Dojima, Shiga's vegetables from the farm] A forty-seat Japanese restaurant in Dojima run by a Shiga company that grows its own vegetables in Moriyama and trucks in produce from local farms each day. The signature is an all-you-can-eat 'Omi vegetable' salad, served in a flowerpot and dressed from a watering can at the table. Dinner courses from ¥4,000 add an Omi chicken hotpot or Omi beef sukiyaki, red konnyaku, tempura and seasoned rice; the ¥1,210 lunch set comes with free refills of salad and rice. Open daily, non-smoking, with private rooms.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: an Omi-vegetable restaurant supplied direct from the company\'s own farm in Moriyama, Shiga, and more than 300 local farmers growing over 100 varieties; four trucks collect from producers each morning; Omi beef bought whole; Lake Biwa fish. The Tabelog invoice number T5160001016157 is registered to 株式会社ガーデン, 守山市 (NTA invoice register, read 2026-11-02).', philosophy: null, specialty: 'All-you-can-eat Omi vegetable salad.',
      anecdotes: [
        { text: '"The highlight was when the staff poured the dressing over the salad using a watering can, just like watering flowers!" — August 2026.', source: R + 'B533638651/' },
        { text: '"In addition to Omi vegetables, there were also dishes featuring red konnyaku and Omi fu, which made me feel connected to Shiga." — August 2026.', source: R + 'B533220264/' },
        { text: '"The rice is a mix of home-grown brown rice and Omi rice. This is also available for unlimited servings, which is a wonderful service." — September 2026, lunch.', source: R + 'B534883659/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 花様 西梅田、日本料理・野菜料理・オーガニック、大阪市北区堂島2-1-18 堂島NSビル 1F、西梅田駅9番出口から4分、北新地駅・渡辺橋駅から5分、毎日11:30〜15:00 (L.O.14:30、日曜の昼はコースのみ)、18:00〜22:00 (L.O.21:00)、年中無休、予約可、お通し330円 (コースはなし)、カード・PayPay 可、40席、2名から30名以上の個室、禁煙、ゴールドステッカー、Shiga の Moriyama の自家栽培の畑と300軒以上の地元の農家の100種以上のOmi 野菜、4台のトラックで毎朝集荷、Omi 牛の一頭買い、Lake Biwa の天然の魚、Omi 野菜サラダ食べ放題とOmi 鶏の鍋の農家の野菜会席4,000円 (5,000円から)、記念日のケーキつき、Omi 牛のすき焼き鍋の会席4,500円 (5,500円から)。インボイス登録は株式会社ガーデン (守山市)。口コミ(2026年8月〜9月): 植木鉢の生野菜サラダにじょうろでドレッシング、赤こんにゃく、Omi 麩、天ぷら、炊き込みごはん、飲み放題1,500円、ランチのOmi 野菜のおばんざい日替わり御膳1,210円 (しょうが焼きとキャベツと小松菜など)、サラダとごはん (自家栽培の玄米とOmi 米) とみそ汁はおかわり自由、13時以降は電話予約のみ、北新地のドーチカから3分。',
      confidence: 'medium', sources: [TB, R + 'B533220264/', R + 'B533441078/', R + 'B533638651/', R + 'B533643266/', R + 'B534883659/', R + 'B536277275/', R + 'B536410589/', R + 'B536453618/', R + 'B537028678/', R + 'B537398020/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses and a daily lunch set; dishes explained at the table (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島2-1-18 堂島NSビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島二丁目1番18号 (go) 14m; nearest other record osaka_tempura_fukana_dojima 29 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537028678/'],
    price_note: 'Course prices from the Tabelog listing (tax included); lunch from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Farmer\'s vegetable kaiseki with all-you-can-eat Omi vegetable salad and Omi chicken hotpot', '¥4,000', 'Dinner', 'ask', 'no', 'Tabelog; August 2026.', 'yasai_kaiseki'),
      it('', '', 'Kaiseki with Omi beef sukiyaki hotpot', '¥4,500', 'Dinner', 'ask', 'no', 'Tabelog.', 'omi_beef_kaiseki'),
      it('', '', 'Omi vegetable obanzai lunch set of the day', '¥1,210', 'Lunch', 'ask', 'ask', 'August–September 2026.', 'obanzai_lunch'),
    ] }, {
    cuisine: 'Shiga の Moriyama の自社の畑と300軒以上の地元の農家の「Omi 野菜」を自社のトラックで毎日集めて使う会席、一頭買いのOmi 牛とLake Biwa の魚も (食べログ)・コース (食べログ、税込): Omi 野菜サラダ食べ放題とOmi 鶏の鍋の農家の野菜会席4,000円 (5,000円から)、記念日のケーキつき4,000円、Omi 牛のすき焼き鍋で4,500円 (5,500円から)、飲み放題1,500円 (2026年8月)・ランチ: Omi 野菜のおばんざい日替わり御膳 (しょうが焼きとキャベツと小松菜などのメイン)、サラダ、ごはん (自家栽培の玄米とOmi 米)、みそ汁はおかわり自由で1,210円 (2026年8月〜9月)・テーブルでじょうろでドレッシングをかける植木鉢の生野菜サラダ、赤こんにゃく、Omi 麩、天ぷら、炊き込みごはん (2026年8月〜9月)',
    neighborhood: '堂島2-1-18、堂島NSビルの1階。西梅田駅9番出口から4分、北新地駅・渡辺橋駅から5分',
    gf_detail: '要確認。グルテンの情報なし。自家製のドレッシングの野菜の会席、天ぷら、Omi 麩、Omi 鶏の鍋、Omi 牛のすき焼き。',
    vegan_detail: '要確認。野菜が中心でサラダは食べ放題、食べログに「ベジタリアンメニューあり」とあるが、コースには鶏、豚、牛の鍋があり、ヴィーガンの説明はない。',
    notes: '[和食・堂島、Shiga の畑の野菜] Shiga の会社が営む堂島の40席の和食店で、Moriyama の自社の畑の野菜と地元の農家の野菜を毎日トラックで運ぶ。名物は「Omi 野菜」のサラダの食べ放題で、植木鉢に盛り、テーブルでじょうろでドレッシングをかける。夜のコースは4,000円からで、Omi 鶏の鍋かOmi 牛のすき焼き、赤こんにゃく、天ぷら、炊き込みごはん。昼の1,210円の御膳もサラダとごはんがおかわり自由。毎日営業、禁煙、個室あり。',
  });
}

// ================================================================ 出入橋きんつば屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27003802/'; const R = TB + 'dtlrvwlst/';
  const W = day(['10:00', '18:00']); const S = day(['10:00', '17:00']);
  put({
    id: 'osaka_deiribashi_kintsubaya', name: '出入橋きんつば屋 (Deiribashi Kintsuba Ya)', category: 'OMNI',
    lat: 34.696956, lng: 135.491565, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No ingredient information. Kintsuba is usually a red-bean square in a thin batter; abekawa mochi is rice cake in soybean flour; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Red-bean kintsuba, abekawa mochi and isobe-maki; no ingredient information.',
    hours_raw: 'Mon–Fri 10:00–18:00; Sat 10:00–17:00; closed Sundays; hours may change (Tabelog). Items can sell out by evening (October 2026). No reservations (Tabelog). Cash only (Tabelog; October 2026). 18 table seats for eating in; non-smoking (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '堂島3-4-10, just west of the Shin-Ideiribashi East crossing under the Hanshin Expressway, a large "Kintsuba-ya" sign on the side wall — 5 min from Nishi-Umeda and Kitashinchi Stns (exit 6-19 from the underground mall)',
    cuisine: 'Wagashi shop famous for kintsuba, with an eat-in room (Tabelog) · kintsuba, small, with a thin chewy skin and lightly sweet chunky red-bean filling, freshly made and best eaten the same day: boxes of 10 (¥1,000–1,100) up to 30, or singly (September–October 2026) · abekawa mochi in a heap of soybean flour, isobe-maki, zenzai to eat in (October 2026) · Tabelog Japanese sweets 100 in 2023 and 2026, Sweets 100 in 2022 (Tabelog)',
    website: null, gmaps: gm('出入橋きんつば屋'), menu_url: null,
    notes: "[Sweets · Dojima, freshly made kintsuba] A wagashi shop under the expressway west of Umeda, on Tabelog's sweets lists in 2022, 2023 and 2026, known for small kintsuba made fresh each day: a thin, chewy skin around gently sweet red beans that keep their shape. Buy a box of ten for about ¥1,000, or a single piece, and eat it the same day (warm it in a toaster if not); or sit in for abekawa mochi buried in soybean flour or zenzai. Cash only; other items can sell out by late afternoon. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Shop staff (unnamed)'], origin: null, background: 'Tabelog listing (not shop-maintained): Japanese traditional sweets and a sweets café; Tabelog Japanese sweets WEST 100 in 2023 and 2026, Sweets WEST 100 in 2022; 18 table seats; cash only.', philosophy: null, specialty: 'Kintsuba.',
      anecdotes: [
        { text: '"The kintsuba was unlike any pre-made ones; the skin was soft! It must have been freshly made, as it was slightly warm!" — October 2026, a box of 10 for JPY 1100.', source: R + 'B536686290/' },
        { text: '"When I came to Osaka, I heard that I absolutely had to try the kintsuba here, so I made my way over!" — October 2026.', source: R + 'B537426262/' },
        { text: '"There is also an eat-in option available inside the shop." — October 2026.', source: R + 'B536600152/' },
      ],
      japanese_sources_summary: '食べログ: 出入橋きんつば屋、和菓子・甘味処、大阪市北区堂島3-4-10、Route 2 と Hanshin Expressway が交わる Shin-Ideiribashi East の交差点のすぐ西、Autobacs が目印、西梅田駅・北新地駅から5分、壁に大きな「きんつば屋」の看板、地下街から6-19出口、月〜金10:00〜18:00、土10:00〜17:00、日曜休み、予約不可、カード・電子マネー・QR 不可、テーブル18席、禁煙、食べログ 和菓子・甘味処 WEST 百名店 2023・2026、スイーツ WEST 百名店 2022。口コミ(2026年9月〜10月): 小さなきんつば、もちっとした薄い皮とやさしい甘さの粒あん、できたてでその日のうちに、10個入り1,000〜1,100円から30個入りまで、1個からも買える、トースターで温めても、あべかわ餅のきな粉がたっぷり、磯辺巻き、店内でぜんざい、夕方にはきんつば以外売り切れ、現金のみ、大阪に来たらぜひと言われて来た。',
      confidence: 'medium', sources: [TB, R + 'B250350027/', R + 'B437001835/', R + 'B536232131/', R + 'B536600152/', R + 'B536686290/', R + 'B537153401/', R + 'B537346704/', R + 'B537365343/', R + 'B537426262/', R + 'B537486787/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter sales and a simple eat-in room; cash only (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島3-4-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島三丁目4番10号 (go) 5m; 串揚厨房 Kanta of this batch is about 13 m away at a different address (堂島3-4-1); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B437001835/', R + 'B536686290/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('きんつば', '', 'Kintsuba, box of 10', '¥1,000–1,100', 'Takeaway', 'ask', 'ask', 'October 2026.', 'kintsuba_10'),
      it('あべかわ餅', '', 'Abekawa mochi', '', 'Eat-in', 'ask', 'ask', 'October 2026.', 'abekawa'),
    ] }, {
    cuisine: 'きんつばで有名な和菓子屋で、店内でも食べられる (食べログ)・小さなきんつばは、もちっとした薄い皮にやさしい甘さの粒あん、できたてでその日のうちに。10個入り (1,000〜1,100円) から30個入りまで、1個からも (2026年9月〜10月)・きな粉たっぷりのあべかわ餅、磯辺巻き、店内でぜんざい (2026年10月)・食べログ 和菓子・甘味処 百名店 2023・2026、スイーツ 百名店 2022 (食べログ)',
    neighborhood: '堂島3-4-10、Hanshin Expressway の下の Shin-Ideiribashi East の交差点のすぐ西、壁に大きな「きんつば屋」の看板。西梅田駅・北新地駅から5分 (地下街の6-19出口)',
    gf_detail: '要確認。材料の情報なし。きんつばはふつう薄い衣のあんこ、あべかわ餅はきな粉の餅。グルテンフリーの説明はない。',
    vegan_detail: '要確認。あんこのきんつば、あべかわ餅、磯辺巻き。材料の情報はない。',
    notes: '[甘味・堂島、できたてのきんつば] 梅田の西、高速道路の下の和菓子屋で、食べログのスイーツの百名店に2022・2023・2026年。毎日つくる小さなきんつばが有名で、もちっとした薄い皮に、形の残るやさしい甘さの小豆。10個入り1,000円ほどの箱か1個から買えて、その日のうちに (でなければトースターで温めて)。店内できな粉たっぷりのあべかわ餅やぜんざいも。現金のみ、夕方にはほかの品が売り切れることも。日曜休み。',
  });
}

// ================================================================ 串揚厨房 Kanta
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27042272/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '00:00']);
  put({
    id: 'osaka_kushiage_chubo_kanta_dojima', name: '串揚厨房 Kanta (Kushiage Chubo Kanta)', category: 'OMNI',
    lat: 34.696844, lng: 135.491646, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushiage and katsu in batter and crumbs; lunch is tonkatsu, hire-katsu, miso-katsu or kara-age set meals.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, fish and egg skewers and katsu, with clam miso soup at lunch.',
    hours_raw: 'Mon–Sat 11:30–14:00 (until sold out) and 18:00–24:00 (last order 23:00); closed Sundays and holidays (Tabelog). Reservations accepted; private hire for 8 or more (Tabelog). Service charge: Tabelog\'s original text says none ("なし"). Cards accepted; no e-money (Tabelog). 12 seats: a counter of 8 and a table of 4; smoking allowed (Tabelog). Opened 20 July 2003 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島3-4-1, ground floor of 敬明ビル別館, a back street near Deiribashi — 5 min from Kitashinchi and Nishi-Umeda Stns, 6 min from Fukushima Stn',
    cuisine: 'Kushiage fried in 100% vegetable oil to keep it light, with Kagoshima "Chami Ton" pork and an omakase of eight skewers; courses for parties (Tabelog) · omakase five skewers ¥900 (June 2025); skewers such as whiting rolled with shiso, quail egg, asparagus (2025) · lunch, katsu set meals with rice, miso soup (clam or red miso), cabbage and a small dish: tonkatsu ¥1,000, miso katsu ¥1,000, hire-katsu, kara-age ¥850 (2023–2026)',
    website: null, gmaps: gm('串揚厨房 Kanta 堂島'), menu_url: null,
    notes: "[Kushiage · Dojima, light skewers and katsu lunches] A twelve-seat kushiage counter on a back street near Deiribashi, open since 2003, frying in all-vegetable oil to keep the skewers light. At night order the omakase skewers (five for ¥900 in 2025), with Kagoshima pork, whiting rolled in shiso and quail egg, without double-dipping. Lunch is katsu: tonkatsu or miso-katsu sets around ¥1,000 with rice, a good miso soup and a small dish, until sold out. Visitors to Osaka staying nearby come for a first taste of kushikatsu; smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: kushiage made light with 100% plant-based oil, Kagoshima "Chami Ton" pork, omakase skewers, courses and private hire, "our friendly owner will warmly welcome you"; opened 20 July 2003.', philosophy: '"Changing the concept of greasy" (Tabelog).', specialty: 'Omakase kushiage; katsu set lunches.',
      anecdotes: [
        { text: '"During my visit to Osaka for sightseeing, I searched for a place near my hotel to enjoy some kushi-katsu." — June 2025, the five-skewer omakase.', source: R + 'B508248485/' },
        { text: '"The round shape was surprising, and the fluffy texture of the fish was a revelation." — June 2025, of the whiting and shiso skewer.', source: R + 'B508311370/' },
        { text: '"The tonkatsu was thinly cut with a light batter, so it didn\'t feel heavy at all." — February 2025, the hire-katsu lunch.', source: R + 'B500748654/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 串揚厨房 Kanta、串揚げ・居酒屋・ダイニングバー、大阪市北区堂島3-4-1 敬明ビル別館1F、北新地駅・西梅田駅から5分、JR 福島駅から6分、月〜土11:30〜14:00 (売り切れまで)、18:00〜24:00 (L.O.23:00)、日・祝休み、予約可、8名以上で貸切、サービス料なし、カード可、電子マネー不可、12席 (カウンター8、テーブル4)、喫煙可、2003年7月20日オープン、植物油100%で軽い串揚げ、Kagoshima の Chami Ton、おまかせ8本、宴会のコース、気さくな店主。口コミ(2023年6月〜2026年5月): おまかせ5本900円、キスとしその串、うずら、アスパラ、二度づけ禁止の串かつ、ランチのとんかつ定食1,000円、みそかつ定食1,000円、ヒレかつ定食、からあげ定食850円、キャベツ、ポテトサラダ、ごはん、あさりのみそ汁や赤だし、小鉢、ごはん少なめで30円引き、観光で近くのホテルから。',
      confidence: 'medium', sources: [TB, R + 'B410847505/', R + 'B471411584/', R + 'B472063539/', R + 'B476758733/', R + 'B500748654/', R + 'B504177835/', R + 'B508248485/', R + 'B508311370/', R + 'B509727808/', R + 'B528271303/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase skewers and simple set lunches; 2025 visitors on sightseeing trips came from nearby hotels. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島3-4-1 敬明ビル別館1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島三丁目4番1号 (go) 5m; 出入橋きんつば屋 of this batch is about 13 m away at a different address (堂島3-4-10); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B508248485/', R + 'B410847505/'],
    price_note: 'Prices from 2023–2025 reviews; they may have changed.', last_checked: TODAY, items: [
      it('', '', 'Omakase kushiage, five skewers', '¥900', 'Dinner', 'no', 'no', 'June 2025.', 'omakase_5'),
      it('', '', 'Tonkatsu set lunch', '¥1,000', 'Lunch', 'no', 'no', 'July 2025.', 'tonkatsu_lunch'),
      it('', '', 'Miso-katsu set lunch', '¥1,000', 'Lunch', 'no', 'no', 'April 2025.', 'misokatsu_lunch'),
    ] }, {
    cuisine: '植物油100%で軽く揚げる串揚げ、Kagoshima の「Chami Ton」の豚、おまかせ8本、宴会のコース (食べログ)・おまかせ5本900円 (2025年6月)、キスのしそ巻き、うずら、アスパラなどの串 (2025年)・ランチはごはん、みそ汁 (あさりや赤だし)、キャベツ、小鉢つきのかつの定食: とんかつ1,000円、みそかつ1,000円、ヒレかつ、からあげ850円 (2023年〜2026年)',
    neighborhood: '堂島3-4-1、敬明ビル別館の1階、出入橋の近くの裏通り。北新地駅・西梅田駅から5分、福島駅から6分',
    gf_detail: 'グルテンフリーではありません。衣とパン粉の串揚げとかつ。ランチはとんかつ、ヒレかつ、みそかつ、からあげの定食。',
    vegan_detail: 'ヴィーガンではありません。豚、魚、卵の串とかつ、ランチにはあさりのみそ汁。',
    notes: '[串揚げ・堂島、軽い串とかつのランチ] 出入橋の近くの裏通りにある12席の串揚げのカウンターで、2003年から。植物油100%で揚げるので軽い。夜はおまかせの串 (2025年は5本900円) で、Kagoshima の豚、しそ巻きのキス、うずらなど、二度づけ禁止。昼はかつの定食で、とんかつやみそかつが1,000円ほど、ごはんとおいしいみそ汁と小鉢つき、売り切れまで。近くのホテルに泊まる観光客がはじめての串かつに来ることも。喫煙可。',
  });
}

save();
