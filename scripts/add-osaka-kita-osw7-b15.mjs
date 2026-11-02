// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 15.
//   + オムライス&cafe STYLE Omurice & cafe STYLE (one-person omurice cafe in a Kikaihigashi side street, since 2015)
//   + 甚九郎 Jinkuro (second-generation soba shop by Higashi-Mikuni Station, soba at lunch, sake and small plates at night)
//   + ゆうすけ Yusuke (extra-thick fresh udon with chicken tempura; Tabelog Udon WEST 100, 2024)
//   + すし処和 Sushi Dokoro Kazu (neighbourhood sushi and fish dishes near Higashi-Yodogawa Station)
//   - skipped 27002354 麺匠 はなみち 東三国店: chain. The integrator asked for a draft as a 4-shop small group, but the brand's own site
//     (menshohanamichi.jp, read 2026-11-02) lists seven shops: 東三国店, あびこ店, 十三店, 新大阪店, 長居店, 市岡店 and 尼崎店
//     (opened 4 December 2024), run by 株式会社おきなばし食品. Seven same-concept shops = chain, so skipped; flagged in the report.
//   Lane check: every id above is even. Taken in queue order (nearest first) after the skip; すし処和 replaces Hanamichi.
//   Chain check: none of the four names another shop. None is in data/osaka.json (grep by id, name and address, 2026-11-02);
//   すし処和 is unrelated to osaka_negiyaki_okonomiyaki_kazu_nishinakajima (different concept and address).
//   Jinkuro: category MOM_AND_POP because a September 2026 review names the owner ("the owner, Mr. Morimoto").
//   Omurice & cafe STYLE: mom_and_pop true ("the owner runs the shop alone", February 2025; "a one-person operation", January 2026),
//   but OMNI because no source names the owner.
//   No ramen block in this batch. open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27002354', 'chain: Mensho Hanamichi (麺匠 はなみち), seven same-concept shops on its own site menshohanamichi.jp (東三国, あびこ, 十三, 新大阪, 長居, 市岡, 尼崎; read 2026-11-02); five or more same-concept shops count as a chain');

// ================================================================ オムライス&cafe STYLE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27085228/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_omurice_cafe_style_kikaihigashi', name: 'オムライス&cafe STYLE (Omurice & cafe STYLE)', category: 'OMNI',
    lat: 34.727908, lng: 135.490955, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: demi-glace and cream sauces, and crab cream croquettes in breadcrumbs.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg omurice with chicken rice, cheese and cream sauces.',
    hours_raw: 'Thu–Tue 11:00–15:00 (last order 14:30) and 17:00–22:00 (last order 21:30; last entry 21:20); closed Wednesday; may close early when stock runs out (Tabelog). No reservations; no cards or e-money, PayPay accepted (Tabelog). 11 seats: 7 at the counter and two tables for two; non-smoking, smoking area outside; children welcome; takeout (Tabelog). Lunch set until 15:00 (March 2026). One person cooks and serves, but plates come in 5–10 minutes (February 2025; January 2026). Opened 23 April 2015 (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '木川東4-15-2 — in a residential street in Kikaihigashi, about 15 min walk from Nishinakajima-Minamigata Stn (Tabelog; October 2026)',
    cuisine: 'Omurice specialist (2015–2026) · fluffy, soft-set eggs over ketchup chicken rice (2025–2026) · sauces: demi-glace, tomato and cream; Tabelog shop text recommends the bacon tomato cream omurice with cheese and fresh cream · lunch set: demi-glace omurice with a crab cream croquette, salad and soup ¥980, large +¥200 (February–October 2026); daily special, e.g. cheese-filled egg with demi-glace ¥980 (September 2026) · shrimp and cream-cheese tomato-sauce omurice (October 2026) · seaweed soup with the set (July 2026) · curry and other Western dishes too (June 2026)',
    website: null, gmaps: gm('オムライス&cafe STYLE 木川東'), menu_url: null,
    notes: "[Yoshoku · Kikaihigashi, one-person omurice cafe in a side street] A small omurice cafe hidden in the houses between Nishinakajima and Juso, open since 2015, where one person cooks and serves yet gets a plate out in about ten minutes (2025–2026). The eggs are soft and creamy over ketchup chicken rice, under demi-glace, tomato or cream sauce; the shop's own pick is bacon tomato cream with cheese (Tabelog). The ¥980 lunch set, demi-glace omurice with a crab cream croquette, salad and soup, is the draw (2026). About 15 minutes' walk from Nishinakajima-Minamigata. Closed Wednesday; PayPay or cash.",
    chef_bio: { chef_name: null, roles: ['Owner-cook (unnamed)'], origin: null, background: 'Tabelog shop text: fluffy, creamy omurice with care given to the sauces, at a reasonable price; opened 23 April 2015 (Tabelog). Reviewers: the owner runs the shop alone (February 2025); "a one-person operation" (January 2026).', philosophy: 'Care over the sauce, at a reasonable price (Tabelog shop text).', specialty: 'Bacon tomato cream omurice; demi-glace omurice with crab cream croquette.',
      anecdotes: [
        { text: '"I was prepared for a potentially slow service since the owner runs the shop alone, but I was pleasantly surprised as my meal arrived in about 5 to 10 minutes." — February 2025, demi-glace omurice.', source: R + 'B502121639/' },
        { text: '"The soup is a seaweed soup, which is surprisingly delicious." — July 2026, omurice with crab cream croquette.', source: R + 'B532740392/' },
        { text: '"For just JPY 980, you get a fluffy Omurice topped with crab cream croquette and served with a salad and soup." — October 2026.', source: R + 'B538415294/' },
      ],
      japanese_sources_summary: '食べログ: オムライス&cafe STYLE、オムライス・カフェ・ハンバーグ、大阪市淀川区木川東4丁目15-2、西中島南方駅から徒歩15分、木〜火11:00〜15:00 (L.O. 14:30)、17:00〜22:00 (L.O. 21:30、入店21:20まで)、水休み、売り切れで早じまいも、予約不可、カードと電子マネー不可、PayPay 可、11席 (カウンター7、2人テーブル2)、禁煙、店の外に喫煙所、子ども可、テイクアウト、2015年4月23日オープン、店の紹介: ふわとろオムライスとソースへのこだわり、いちばん人気はベーコントマトクリームのふわとろオムライス (チーズと生クリーム)。口コミ (2025年2月〜2026年10月): 住宅街の店、店主ひとりで切り盛り、5〜10分で出てくる、ケチャップのチキンライスにふわとろの卵、デミグラス、トマト、クリームのソース、ランチはカニクリームコロッケのデミグラスオムライスにサラダとスープで980円、大盛り200円、日替わり (チーズ入りの卵のデミグラス) 980円、エビとクリームチーズのトマトソース、わかめスープ、カレーも。',
      confidence: 'medium', sources: [TB, R + 'B502121639/', R + 'B518368737/', R + 'B522864109/', R + 'B523421921/', R + 'B523688113/', R + 'B524715805/', R + 'B532740392/', R + 'B535588043/', R + 'B536704731/', R + 'B538415294/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter cafe; pick an omurice and sauce. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区木川東4丁目15-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区木川東四丁目15番2号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524715805/', R + 'B535588043/', R + 'B538415294/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: demi-glace omurice with crab cream croquette, salad and soup', '¥980', 'Lunch', 'no', 'no', 'February–October 2026; large +¥200.', 'lunch_crab_croquette'),
      it('', '', 'Daily special: cheese-filled egg omurice with demi-glace', '¥980', 'Lunch', 'no', 'no', 'September 2026.', 'daily_cheese_demi'),
      it('', '', 'Bacon tomato cream omurice', '', 'Omurice', 'no', 'no', 'Tabelog shop text; December 2025.', 'bacon_tomato_cream'),
      it('', '', 'Shrimp and cream-cheese tomato-sauce omurice', '', 'Omurice', 'no', 'no', 'October 2026.', 'shrimp_cheese_tomato'),
    ] }, {
    cuisine: 'オムライスの専門店 (2015〜2026年)・ケチャップのチキンライスに、ふわとろの卵 (2025〜2026年)・ソース: デミグラス、トマト、クリーム。店のおすすめはチーズと生クリームのベーコントマトクリーム (食べログ)・ランチセット: カニクリームコロッケのデミグラスオムライスにサラダとスープで980円、大盛り200円 (2026年2〜10月)。日替わり、たとえばチーズ入りの卵のデミグラス980円 (2026年9月)・エビとクリームチーズのトマトソースのオムライス (2026年10月)・セットにわかめスープ (2026年7月)・カレーなどの洋食も (2026年6月)',
    neighborhood: '木川東4-15-2。住宅街の中で、西中島南方駅から徒歩約15分 (食べログ。2026年10月)',
    gf_detail: 'グルテンフリーではありません。デミグラスとクリームのソース、パン粉のカニクリームコロッケ。',
    vegan_detail: 'ヴィーガンではありません。卵のオムライスにチキンライス、チーズ、クリームのソース。',
    notes: '[洋食・木川東、住宅街のひとりで切り盛りするオムライスの店] 西中島と十三のあいだの住宅街にかくれた、2015年からの小さなオムライスの店。店主ひとりで作って運ぶのに、10分ほどで出てくる (2025〜2026年)。ケチャップのチキンライスにふわとろの卵、ソースはデミグラス、トマト、クリーム。店のおすすめはチーズ入りのベーコントマトクリーム (食べログ)。目当ては980円のランチセットで、カニクリームコロッケのデミグラスオムライスにサラダとスープ (2026年)。西中島南方駅から歩いて約15分。水曜休み。PayPay か現金。',
  });
}

// ================================================================ 甚九郎
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27017120/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_jinkuro_higashimikuni', name: '甚九郎 (Jinkuro)', category: 'MOM_AND_POP',
    lat: 34.741476, lng: 135.497111, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Soba comes as 2:8 or 100% buckwheat (September 2026), but the dipping sauce has soy sauce, and rice bowls with tempura and katsu are on the lunch menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dipping sauce is made with five kinds of katsuobushi (September 2026).',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat 11:30–14:00 (soba lunch, until sold out) and 17:30–23:00 (sake, soba and small plates; last entry 22:00, last order 22:30); Wed 17:30–23:00 only; closed Sunday; may close early when sold out, and some nights are private bookings (Tabelog). Sold out by about 13:00 on a Saturday (October 2026). Reservations accepted; no-shows and same-day cancellations ¥2,750 a seat, courses 50% the day before and 100% on the day (Tabelog). Cards (Visa, Master, JCB, AMEX, Diners); no e-money or QR; ¥330 charge at night (Tabelog). 16 seats: 6 at the counter plus tables, and a semi-private table for four; non-smoking; wheelchair accessible; children and strollers welcome (Tabelog).',
    hours: { 0: D, 1: D, 2: day(['17:30', '23:00']), 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国4-4-11 — 1 min from Exit 2 of Higashi-Mikuni Stn (Tabelog)',
    cuisine: 'Handmade soba from flour milled in house, as 2:8 or 100% buckwheat (September 2026) · zaru soba ¥950: thick, coarse, country-style noodles (October 2026) or thin hand-cut noodles (May 2026); dipping sauce of five kinds of katsuobushi; soba-yu with yuzu (2026) · lunch sets with a mini soba: tempura rice bowl (March and September 2026), oyakodon (May 2026), egg-and-tempura rice bowl (September 2026), katsudon (September 2026); two side dishes ¥250 (October 2026) · night: sashimi (sanma, katsuo, sea bream, Spanish mackerel, akagai), prosciutto with mascarpone, braised duck breast (September 2026); smoked daikon with cheese (September 2026); soba courses (Tabelog; September 2026) · drinks: SORACHI draft beer (2026), sake such as Senkin (September 2026), Kusabue soba shochu (July 2026), whisky and a Hibiki highball (September 2026)',
    website: 'http://ameblo.jp/jinkurou392/', gmaps: gm('甚九郎 東三国'), menu_url: null,
    notes: "[Soba · Higashi-Mikuni, second-generation handmade soba with sake at night] A neighbourhood soba shop by Higashi-Mikuni Station, founded 37 years ago and now run by the second generation, who mill the flour in house and serve 2:8 or 100% buckwheat soba (September 2026). Lunch is soba with a rice bowl until it sells out, often by 13:00 on a Saturday (October 2026); finish with soba-yu scented with yuzu. At night it turns into a calm sake place with sashimi, prosciutto with mascarpone, duck and a soba course, and SORACHI on tap (2026). Book for dinner; ¥330 charge at night. Closed Sunday; Wednesday dinner only.",
    chef_bio: { chef_name: 'Morimoto', roles: ['Owner'], origin: null, background: 'A September 2026 diner: a local soba shop founded 37 years ago, taken on by the second generation, who keeps "the homemade soba passed down from the father" and has moved toward soba kaiseki. The same diner talked with "the owner, Mr. Morimoto" about Kansai soba history, and saw the owner training new staff. An August 2026 diner warns of slow service when the shop is short-staffed.', philosophy: 'Soba flour chosen from across Japan and milled in house (September 2026).', specialty: '100% buckwheat zaru soba; soba courses.',
      anecdotes: [
        { text: '"The soba dipping sauce, made from five types of katsuobushi, has a wonderful flavor, and the balance of soy sauce and mirin is superb!" — September 2026, 100% buckwheat zaru soba.', source: R + 'B535642524/' },
        { text: '"The soba-yu (noodle water) is thick and rich, with a hint of yuzu peel for fragrance, showing attention to detail!" — October 2026, zaru soba for JPY 950.', source: R + 'B536786287/' },
        { text: '"Not only is the soba delicious, but the soba broth is also delightful, leaving me feeling warm and satisfied at the end!" — August 2026.', source: R + 'B534337663/' },
      ],
      japanese_sources_summary: '食べログ: 甚九郎、そば・居酒屋、大阪市淀川区東三国4-4-11、東三国駅②出口から徒歩1分、月・火・木・金・土11:30〜14:00 (昼はそば、売り切れまで)、17:30〜23:00 (夜は日本酒とそばとつまみ、入店22:00まで、L.O. 22:30)、水曜は夜だけ、日休み、予約可、無断や当日のキャンセルは1席2,750円、コースは前日50%、当日100%、カード可、夜はチャージ330円、16席、半個室の4人テーブル、禁煙、車いす可、子どもとベビーカー可、ブログ ameblo.jp/jinkurou392。口コミ (2026年3〜10月): 37年前からの町のそば屋を2代目が受けつぎ、そば会席へ、店主は Morimoto さん、そば粉は全国から選んで自家製粉、二八と十割、ざるそば950円、太めで粗挽きの田舎そば風、または細い手切り、かつお節5種のつゆ、柚子の香るそば湯、昼は天丼、親子丼、天玉丼、カツ丼のミニそばセット、小鉢2品250円、夜は刺身 (さんま、カツオ、鯛、サワラ、赤貝)、生ハムとマスカルポーネ、鴨むね肉の煮込み、燻製大根とチーズ、SORACHI の生、Senkin などの日本酒、Kusabue のそば焼酎、Hibiki のハイボール、土曜は13時ごろ売り切れ。',
      confidence: 'medium', sources: [TB, R + 'B524604092/', R + 'B528476398/', R + 'B531988821/', R + 'B532421566/', R + 'B532814748/', R + 'B534337663/', R + 'B535611224/', R + 'B535642524/', R + 'B535664209/', R + 'B536786287/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Simple soba sets at lunch; book for the evening. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-4-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目4番11号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532814748/', R + 'B536786287/', R + 'B535642524/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Zaru soba', '¥950', 'Soba', 'ask', 'no', 'August and October 2026.', 'zaru_soba'),
      it('', '', 'Tempura rice bowl set with mini cold soba', '', 'Lunch', 'no', 'no', 'March and September 2026.', 'tendon_set'),
      it('', '', 'Oyakodon set with cold soba', '', 'Lunch', 'ask', 'no', 'May 2026.', 'oyakodon_set'),
      it('', '', 'Two side dishes', '¥250', 'Sides', 'ask', 'ask', 'October 2026.', 'kobachi'),
    ] }, {
    cuisine: '自家製粉の手打ちそば、二八か十割 (2026年9月)・ざるそば950円: 太めで粗挽きの田舎そば風 (2026年10月)、または細い手切り (2026年5月)。つゆはかつお節5種。柚子の香るそば湯 (2026年)・昼はミニそばのセット: 天丼 (2026年3月と9月)、親子丼 (2026年5月)、天玉丼 (2026年9月)、カツ丼 (2026年9月)。小鉢2品250円 (2026年10月)・夜: 刺身 (さんま、カツオ、鯛、サワラ、赤貝)、生ハムとマスカルポーネ、鴨むね肉の煮込み (2026年9月)。燻製大根とチーズ (2026年9月)。そばのコース (食べログ。2026年9月)・飲み物: SORACHI の生ビール (2026年)、Senkin などの日本酒 (2026年9月)、Kusabue のそば焼酎 (2026年7月)、ウイスキーと Hibiki のハイボール (2026年9月)',
    neighborhood: '東三国4-4-11。東三国駅②出口から徒歩1分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。そばは二八か十割 (2026年9月) だが、つゆには醤油、昼のメニューには天丼やカツ丼も。',
    vegan_detail: 'ヴィーガンではありません。つゆはかつお節5種でとる (2026年9月)。',
    notes: '[そば・東三国、2代目の手打ちそばと夜の日本酒] 東三国駅のそばの町のそば屋で、37年前にできて今は2代目。そば粉を自家製粉して、二八と十割のそばを出す (2026年9月)。昼はそばと丼のセットで、売り切れまで。土曜は13時ごろ売り切れることも (2026年10月)。しめは柚子の香るそば湯。夜は落ち着いた日本酒の店になり、刺身、生ハムとマスカルポーネ、鴨、そばのコース、SORACHI の生 (2026年)。夜は予約を。夜はチャージ330円。日曜休み、水曜は夜だけ。',
  });
}

// ================================================================ ゆうすけ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27078444/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30'], ['18:00', '20:30']);
  put({
    id: 'osaka_yusuke_udon_nishinakajima', name: 'ゆうすけ (Yusuke)', category: 'OMNI',
    lat: 34.725813, lng: 135.500716, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat udon and tempura.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken tempura, beef and curry; no vegan broth is mentioned, so ask even about the vegetable tempura bukkake.',
    hours_raw: 'Tue–Sat 11:30–14:30 and 18:00–20:30 (last orders at closing); closed Sunday and Monday; hours may change (Tabelog). Often sold out early: one Saturday in October 2026 the line was cut at 19:10. No reservations; cash only (Tabelog). Expect a line: buy a ticket at the machine while you wait outside, and the extra-thick noodles take 15 minutes or more to boil, so waits of 30–60 minutes are common (October 2026). 9 counter seats; non-smoking; children welcome (Tabelog). Opened 17 April 2014 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西中島3-15-3 — about 2 min from Hankyu Minamikata Stn, 4 min from Nishinakajima-Minamigata Stn (Tabelog); the line waits along the railway, with parasols in the sun (October 2026)',
    cuisine: 'Udon and curry udon; Tabelog Udon WEST 100, 2024 (Tabelog) · extra-thick flat noodles boiled from fresh, very chewy and firm; regular about 400 g, large about 600 g (+¥200), mini 200 g (October 2026) · chicken tempura bukkake, cold, ¥1,100, with a choice of raw soy sauce (October 2026) · chicken tempura curry udon with three pieces, beef and tenkasu, ¥1,130–1,150 (October 2026) · squid tempura bukkake ¥1,100 (October 2026) · vegetable tempura bukkake (sweet potato, pumpkin, eggplant, shishito, maitake) ¥1,250 (October 2026)',
    website: null, gmaps: gm('ゆうすけ うどん 西中島'), menu_url: null,
    notes: "[Udon · Nishinakajima, extra-thick fresh udon worth the line] A 9-seat counter by Hankyu Minamikata with udon so thick that diners compare it to houtou: flat, fresh noodles boiled for 15 minutes or more until chewy and firm (October 2026). The order to know is chicken tempura bukkake, cold, five juicy pieces over 400 g of noodles for ¥1,100, with raw soy sauce if you like; the curry udon with chicken tempura and beef is the hot alternative (October 2026). One cook does the noodles, tempura and broth, so the line moves slowly: buy your ticket while you wait, and arrive early, because it sells out (October 2026). In the Tabelog Udon 100, 2024. Cash only; closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 17 April 2014; Tabelog Udon WEST 100, 2024 (Tabelog). An October 2026 diner watched the chef cook the udon alone, cooling the noodles in ice water while making the broth and frying the tempura; staff outside take tickets (October 2026). Another October 2026 diner says the noodles are a mix of earlier-boiled and freshly boiled batches, chilled in ice water.', philosophy: null, specialty: 'Chicken tempura bukkake.',
      anecdotes: [
        { text: '"The udon is quite thick, which means it takes a long time to cook, resulting in a slower turnover." — October 2026, chicken tempura bukkake.', source: R + 'B497574143/' },
        { text: '"The flat noodles, boiled from fresh dough, had a strong chewiness and were satisfying to eat, perfectly complemented by the spicy curry broth." — October 2026, chicken tempura curry udon for JPY 1,130.', source: R + 'B536634836/' },
        { text: '"There were 16 people in line, but the 17th person was turned away because the udon was sold out." — October 2026, a Saturday evening.', source: R + 'B538276479/' },
      ],
      japanese_sources_summary: '食べログ: ゆうすけ、うどん・カレーうどん、うどん WEST 百名店 2024、大阪市淀川区西中島3-15-3、阪急 南方駅から徒歩約2分、西中島南方駅から徒歩約4分、火〜土11:30〜14:30、18:00〜20:30、日・月休み、予約不可、現金のみ、カウンター9席、禁煙、子ども可、2014年4月17日オープン。口コミ (2024年12月〜2026年10月): 行列で、待つあいだに券売機で食券、線路ぞいで日傘も、極太の平打ちの生麺で、ゆで時間15分以上、もちもちでかたい、並は約400g、大は約600g (200円)、ミニ200g、とり天ぶっかけ (冷) 1,100円、生醤油も、とり天カレーうどん1,130〜1,150円 (とり天3つ、牛肉、天かす)、イカ天ぶっかけ1,100円、野菜天ぶっかけ1,250円 (さつまいも、かぼちゃ、なす、ししとう、まいたけ)、料理人がひとりで麺、天ぷら、つゆを、土曜の夜は19:10で打ち止め、30〜60分待つことも。',
      confidence: 'medium', sources: [TB, R + 'B497574143/', R + 'B497767853/', R + 'B536634836/', R + 'B537133001/', R + 'B537449882/', R + 'B537508161/', R + 'B537713521/', R + 'B537929500/', R + 'B538208953/', R + 'B538276479/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine while you queue; staff collect tickets outside. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-15-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目15番3号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538276479/', R + 'B536634836/', R + 'B537929500/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken tempura bukkake (cold), regular 400 g', '¥1,100', 'Udon', 'no', 'no', 'October 2026; large +¥200.', 'toriten_bukkake'),
      it('', '', 'Chicken tempura curry udon', '¥1,130', 'Udon', 'no', 'no', 'October 2026; ¥1,150 in another October 2026 review.', 'toriten_curry'),
      it('', '', 'Squid tempura bukkake', '¥1,100', 'Udon', 'no', 'no', 'October 2026.', 'ikaten_bukkake'),
      it('', '', 'Vegetable tempura bukkake', '¥1,250', 'Udon', 'no', 'no', 'October 2026.', 'yasaiten_bukkake'),
    ] }, {
    cuisine: 'うどんとカレーうどん。食べログ うどん WEST 百名店 2024 (食べログ)・極太の平打ちの生麺をゆでる。もちもちでかため。並は約400g、大は約600g (200円)、ミニ200g (2026年10月)・とり天ぶっかけ (冷) 1,100円、生醤油も選べる (2026年10月)・とり天3つ、牛肉、天かすのとり天カレーうどん1,130〜1,150円 (2026年10月)・イカ天ぶっかけ1,100円 (2026年10月)・野菜天ぶっかけ (さつまいも、かぼちゃ、なす、ししとう、まいたけ) 1,250円 (2026年10月)',
    neighborhood: '西中島3-15-3。阪急 南方駅から徒歩約2分、西中島南方駅から徒歩約4分 (食べログ)。行列は線路ぞいで、日なたには日傘 (2026年10月)',
    gf_detail: 'グルテンフリーではありません。太い小麦のうどんと天ぷら。',
    vegan_detail: 'ヴィーガンではありません。とり天、牛肉、カレー。ヴィーガンのつゆの話はないので、野菜天ぶっかけも要確認。',
    notes: '[うどん・西中島、並んででも食べたい極太の生麺] 阪急 南方駅のそばのカウンター9席の店で、ほうとうにたとえられるほど太いうどん。平打ちの生麺を15分以上ゆでて、もちもちでかため (2026年10月)。頼むなら、冷たいとり天ぶっかけ。ジューシーなとり天5つに麺400gで1,100円、好みで生醤油も。温かいのなら、とり天と牛肉のカレーうどん (2026年10月)。料理人がひとりで麺も天ぷらもつゆもやるので、行列はゆっくり進む。待つあいだに食券を買い、売り切れるので早めに (2026年10月)。うどん百名店 2024。現金のみ。日曜と月曜休み。',
  });
}

// ================================================================ すし処和
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27025222/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sushi_dokoro_kazu_higashimikuni', name: 'すし処和 (Sushi Dokoro Kazu)', category: 'OMNI',
    lat: 34.74084, lng: 135.501752, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi comes with ordinary soy sauce (April 2025), and tempura and fried fish are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi, sashimi and cooked fish.',
    hours_raw: 'Opening hours not listed on Tabelog. Closed Monday (Tuesday when Monday is a holiday) (Tabelog). Reservations accepted; one diner booked by phone on the day (June 2026). Cash only (Tabelog). 20 seats; Tabelog lists smoking allowed, but an October 2024 diner found it non-smoking, with smokers stepping outside. Check hours before going.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '東三国1-15-6 — about 260 m from Higashi-Yodogawa Stn (Tabelog)',
    cuisine: 'Neighbourhood sushi shop with many cooked dishes; a blackboard of recommended sushi and sides (April 2024) · nigiri: kinmedai, eel, marinated tuna, sanma, shrimp, shima-aji (September 2024); marinated bluefin tuna (April 2025); hon-maguro and ikura (June 2026); uni (February 2024); mackerel sushi (February 2023) · sides: grilled eel liver (April 2025); kizushi, kisu tempura, grilled hamachi collar, chawanmushi (September 2024); simmered sea bream, seared horse mackerel, fried sardines (2025); tuna cheek (October 2024); deep-fried giant eel and shrimp tempura (February 2024) · sake and shochu (Tabelog) · about ¥5,000 a head with drinks (January 2025; June 2026)',
    website: null, gmaps: gm('すし処和 東三国'), menu_url: null,
    notes: "[Sushi · Higashimikuni, an old-style neighbourhood sushi bar near Higashi-Yodogawa] A homely, old-fashioned sushi shop a few minutes from Higashi-Yodogawa Station, where locals come as much for the cooked fish as the nigiri: simmered sea bream, grilled hamachi collar, kizushi, tempura and chawanmushi, chosen from a blackboard (2024–2025). Regulars single out the marinated tuna, kinmedai and hon-maguro (2024–2026). Most spend about ¥5,000 a head with a drink (2025–2026). Opinions vary: one diner found bones left in some pieces (April 2025). Hours are not listed, so phone ahead; cash only; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Head chef and owner (unnamed)'], origin: null, background: 'No shop description on Tabelog. Reviewers: "The banter between the head chef and the owner is one of the highlights!" (February 2023); friendly staff (May 2025); a warm, nostalgic, old-fashioned room (January 2025); cleaner than expected (June 2026).', philosophy: null, specialty: 'Marinated tuna; simmered fish.',
      anecdotes: [
        { text: '"However, the marinated bluefin tuna was exceptional—so much so that it stood out from the other sushi." — April 2025.', source: R + 'B245371361/' },
        { text: '"There\'s a blackboard with recommended sushi and side dishes, so you can\'t go wrong choosing from there." — April 2024.', source: R + 'B483374002/' },
        { text: '"The prices were reasonable, and I thoroughly enjoyed a selection of dishes and sushi for just under JPY 5,000 per person." — June 2026.', source: R + 'B529427979/' },
      ],
      japanese_sources_summary: '食べログ: すし処和、寿司、大阪市淀川区東三国1-15-6、東淀川駅から260m、営業時間の記載なし、月曜休み (祝日なら火曜)、予約可、現金のみ、20席、喫煙可。口コミ (2023年2月〜2026年6月): 大将と店主のかけあいが楽しい、黒板におすすめの寿司と一品、キンメ、うなぎ、づけマグロ、さんま、エビ、シマアジ、本マグロ、いくら、ウニ、さば寿司、うなぎの肝焼き、きずし、キスの天ぷら、ハマチのかま焼き、茶わん蒸し、鯛の煮付け、アジのたたき、イワシのフライ、マグロのほほ肉、エビの天ぷら、ひとり約5,000円、昔ながらの温かい雰囲気、骨が残っていたという声、当日電話で予約できた。',
      confidence: 'medium', sources: [TB, R + 'B245371361/', R + 'B272362431/', R + 'B28641724/', R + 'B468614537/', R + 'B479254325/', R + 'B483374002/', R + 'B500324705/', R + 'B506986751/', R + 'B515880225/', R + 'B529427979/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the blackboard; phone to book or check hours. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-15-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; latest review dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目15番6号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B272362431/', R + 'B245371361/', R + 'B506986751/'],
    price_note: 'No prices in reviews; about ¥5,000 a head with drinks (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Marinated bluefin tuna nigiri', '', 'Sushi', 'ask', 'no', 'April 2025.', 'zuke_maguro'),
      it('', '', 'Kinmedai nigiri', '', 'Sushi', 'ask', 'no', 'September 2024.', 'kinmedai'),
      it('', '', 'Grilled hamachi collar', '', 'Dishes', 'ask', 'no', 'September 2024.', 'hamachi_kama'),
      it('', '', 'Simmered sea bream', '', 'Dishes', 'ask', 'no', 'January and May 2025.', 'tai_nitsuke'),
    ] }, {
    cuisine: '一品の多い町の寿司屋。黒板におすすめの寿司と一品 (2024年4月)・にぎり: キンメ、うなぎ、づけマグロ、さんま、エビ、シマアジ (2024年9月)。本マグロのづけ (2025年4月)。本マグロといくら (2026年6月)。ウニ (2024年2月)。さば寿司 (2023年2月)・一品: うなぎの肝焼き (2025年4月)。きずし、キスの天ぷら、ハマチのかま焼き、茶わん蒸し (2024年9月)。鯛の煮付け、アジのたたき、イワシのフライ (2025年)。マグロのほほ肉 (2024年10月)。大きなうなぎの揚げ物とエビの天ぷら (2024年2月)・日本酒と焼酎 (食べログ)・飲んでひとり約5,000円 (2025年1月。2026年6月)',
    neighborhood: '東三国1-15-6。東淀川駅から約260m (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。寿司はふつうの醤油で (2025年4月)、天ぷらや揚げた魚もある。',
    vegan_detail: 'ヴィーガンではありません。寿司、刺身、魚料理。',
    notes: '[寿司・東三国、東淀川駅近くの昔ながらの町の寿司屋] 東淀川駅から数分の、家庭的で昔ながらの寿司屋。地元の人はにぎりと同じくらい魚料理を目当てに来る: 鯛の煮付け、ハマチのかま焼き、きずし、天ぷら、茶わん蒸しを黒板から選ぶ (2024〜2025年)。常連が推すのは、づけマグロ、キンメ、本マグロ (2024〜2026年)。たいてい飲んでひとり約5,000円 (2025〜2026年)。評価は分かれて、骨が残っていたという人も (2025年4月)。営業時間の記載がないので電話で確認を。現金のみ。月曜休み。',
  });
}

save();
