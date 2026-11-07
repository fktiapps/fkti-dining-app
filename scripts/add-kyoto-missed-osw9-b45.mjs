// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 45.
//   + ローヌ Rhone (couple-run retro café-bistro off Sanjo shopping street, breakfast from 7:00; since 2018)       [core]
//   + ラーメン京龍 Ramen Kyoryu (late-night tonkotsu counter at Shijo-Omiya) — no ramen block                    [core]
//   + 京都洋食 ムッシュいとう Kyoto Yoshoku Monsieur Ito (Madoi group's yoshoku, buffet lunch; Royal Park Sanjo B1F) [notable]
//   + デザイナーズ個室 肉バル W Niku Bar W (late-night meat bar with karaoke rooms on the Shirakawa, Gion)         [notable]
//   - 炭火とワイン 京都駅前店 はなれ — chain: 株式会社大地's 炭火とワイン had 8 shops by 2017 (press release), with
//     four in the Kyoto crawl alone.
//   - 天ぷらと手まり寿司都 — Gyro Holdings brand (its site is shop.gyro.holdings): sub-brand of a large parent.
//   - 串焼き 満天 京都四条烏丸店 — 株式会社ファンインターナショナル (Osaka) brand; the company runs nine restaurant
//     brands (fun-no1.com): sub-brand of a large parent — FLAGGED.
//   Same-name counts first (same brand or operator): ローヌ 1; 京龍 1; ムッシュいとう — the 円居 (Madoi) group's
//   Kyoto shop (a Nagoya ムッシュいとう also exists); the group's other Kyoto restaurants (ラ・トゥール, きはだ, まどい
//   食堂, メゾン ドゥ シャルキュトリ エム) are differently named, none in data — a local group, drafted — FLAGGED;
//   肉バル W 1 (a search also turned up "Dining Bar W 祇園店").
//   Taken in queue order on 2026-11-06: core (26043881 skip), 26030741, (26044355 skip), 26018375; notable
//   (26027381 skip), 26023409, 26025341. None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: ローヌ 「食事(スパゲティなど)でも、ワンドリンク制」
//   (a one-drink rule, no charge); ムッシュいとう 「サービス料・チャージ料なし」; W 「T.C 500yen ※0:00以降入店1000yen」;
//   京龍 has no section.
//   Pins: W's Tabelog point is 3.2 m from kyoto_gion_mikaku (same みかくビル), so moved ~6.7 m north (9.2 m).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-45');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043881', 'chain: 炭火とワイン (株式会社大地) had 8 shops in Osaka, Tokyo and Kyoto by 2017 (press release via prdesse.com); four in the Kyoto crawl alone');
skip('26044355', 'sub-brand of a large parent: 天ぷらと手まり寿司都 is a Gyro Holdings restaurant (shop.gyro.holdings/detail/128945)');
skip('26027381', 'sub-brand of a large parent: 串焼き 満天 is a brand of 株式会社ファンインターナショナル (Osaka), which runs nine restaurant brands (fun-no1.com/business/restrant)');

// ================================================================ ローヌ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26030741/'; const R = TB + 'dtlrvwlst/';
  const D = day(['07:00', '16:30']); const F = day(['07:00', '16:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_rhone_sanjo', name: 'ローヌ (Rhone)', category: 'OMNI',
    lat: 35.008007, lng: 135.750496, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: toast, French toast, spaghetti napolitan and cakes (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg toast, pudding, French toast with ice cream (2025–26 reviews).',
    hours_raw: 'Mon–Thu 7:00–16:30; Fri and Sat 7:00–16:30 and 18:00–22:00; Sun 7:00–17:00 (Tabelog). Bookings taken (Tabelog). One drink per person, even with a meal such as spaghetti — Tabelog\'s Japanese original: 「食事(スパゲティなど)でも、ワンドリンク制」. Cards (VISA, Master, JCB, AMEX) (Tabelog). 16 seats at a counter and tables, in a retro room converted from a dyeing workshop (Tabelog; December 2025 review). Run by a couple; at weekday lunch one person works alone, so food can take a while (April and February 2026 reviews). Just off the Sanjo shopping street; 6 min from Nijojo-mae Stn (Tabelog; 2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: F, 5: F, 6: day(['07:00', '17:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Off the Sanjo shopping street — 6 min from Nijojo-mae Stn',
    cuisine: 'Paris-bistro-style kissa from breakfast (Tabelog): toasts such as ham and egg with mustard (extra egg on request), café au lait, French toast with vanilla ice cream, firm retro pudding, coconut cheesecake, napolitan; at night French home cooking with seasonal ingredients and wine, mushroom salad and beer (Tabelog; 2025–26 reviews)',
    website: null, gmaps: gm('ローヌ 京都 三条'), menu_url: null,
    notes: "[Retro café-bistro · off the Sanjo shopping street] A calm, Showa-signed café in a former dyeing workshop, run by a couple: breakfast toast and coffee from 7:00, firm pudding and French toast by day, and French home cooking with wine on Friday and Saturday nights. About ¥1,000–2,000 by day. One drink each.",
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed)'], origin: null,
      background: 'Opened in April 2018 (October 2026 review). Reviewers describe a small shop run by a couple (April 2026), with one person on duty at weekday lunch (February 2026).',
      philosophy: 'The charm of a Parisian bistro, from morning to bistro time (Tabelog).',
      specialty: 'Breakfast toast; retro pudding.',
      anecdotes: [
        { text: 'A traveller who usually breakfasts at a Sanjo standby tried Rhone in January 2026 for its firm pudding.', source: R + 'B520632509/' },
        { text: 'A February 2026 visitor found the food slow with one person working, but the coffee and coconut cheesecake delicious.', source: R + 'B523328504/' },
        { text: 'An April 2026 working traveller valued the 7:00 opening for breakfast before work.', source: R + 'B526550491/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ローヌ、喫茶店・カフェ・バー、中京区三条猪熊町645-1、二条城前駅から徒歩6分、月〜木 7:00〜16:30、金土 7:00〜16:30・18:00〜22:00、日 7:00〜17:00、予約可、食事 (スパゲティなど) でもワンドリンク制、カード可、16席、パリのビストロの趣、染め工場を改装したレトロな店内、モーニングのトーストとコーヒー、プリン、ナポリタン、季節の食材のフランスの家庭料理とワイン。口コミ (2025年12月〜2026年10月、英語): 三条商店街のすぐ脇、ハムエッグトースト (卵の追加可)、カフェオレ、バニラアイスのフレンチトースト、固めのプリン、ココナッツのチーズケーキ、きのこのサラダとビール、夫婦で営む小さな店、平日昼は一人で営業、2018年4月開店。',
      confidence: 'medium', sources: [TB, R + 'B519274257/', R + 'B520632509/', R + 'B522564658/', R + 'B523328504/', R + 'B526550491/', R + 'B527694515/', R + 'B529478560/', R + 'B529951974/', R + 'B537370296/', R + 'B538001731/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One drink per person; small couple-run room.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区三条猪熊町645-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008007, 135.750496); cross-checked: GSI 京都府京都市中京区三条猪熊町645番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538001731/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Ham and egg toast (with mustard)', '', 'Breakfast', 'no', 'no', '2026 reviews.', 'ham_egg_toast'),
      it('', '', 'Retro pudding', '', 'Sweets', 'ask', 'no', '2026 reviews.', 'pudding'),
    ] }, {
    cuisine: '朝から開くパリのビストロ風の喫茶 (食べログ): マスタードのハムエッグトースト (卵の追加可)、カフェオレ、バニラアイスのフレンチトースト、固めのレトロなプリン、ココナッツのチーズケーキ、ナポリタン。夜は季節の食材のフランスの家庭料理とワイン、きのこのサラダとビール (食べログ、2025〜26年の口コミ)',
    neighborhood: '三条商店街のすぐ脇。二条城前駅から徒歩6分',
    gf_detail: 'グルテンフリー不可。トースト、フレンチトースト、ナポリタン、ケーキ (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵のトースト、プリン、アイスのフレンチトースト (2025〜26年の口コミ)。',
    notes: '[レトロな喫茶ビストロ・三条商店街の脇] 昭和の看板の、染め工場を改装した落ち着いた喫茶で、夫婦で営む。朝7時からトーストとコーヒー、昼は固めのプリンやフレンチトースト、金土の夜はフランスの家庭料理とワイン。昼は千〜2千円ほど。ワンドリンク制。',
  });
}

// ================================================================ ラーメン京龍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26018375/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_ramen_kyoryu_omiya', name: 'ラーメン京龍 (Ramen Kyoryu)', category: 'OMNI',
    lat: 35.003085, lng: 135.749272, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, gyoza and fried rice (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth and chashu (2026 reviews).',
    hours_raw: 'Mon and Sun 11:00–22:00; Wed and Thu 11:00–23:00; Fri and Sat 11:00–24:00; closed Tuesday; hours may change (Tabelog). No bookings; buy a ticket at the machine (Tabelog; 2026 reviews). No cards or e-money; PayPay (Tabelog). 17 counter seats over two floors; smoking allowed except at lunch (11:00–14:00) (Tabelog). On the Shijo-Omiya rotary next to McDonald\'s; 1 min from Omiya Stn (Tabelog; March 2026 review).',
    hours: { 0: day(['11:00', '22:00']), 2: day(['11:00', '23:00']), 3: day(['11:00', '23:00']), 4: day(['11:00', '24:00']), 5: day(['11:00', '24:00']), 6: day(['11:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya rotary — 1 min from Omiya Stn',
    cuisine: 'Tonkotsu ramen with thin straight noodles: the "Hakuryu" — chashu, wood ear, menma, green onion — rich or lighter by account; a back-fat ramen; extra noodles; gyoza, moist fried rice, a late-night set of fried rice, gyoza and ramen; takana, beni shoga and garlic on the counter (2026 reviews)',
    website: null, gmaps: gm('ラーメン京龍 四条大宮'), menu_url: null,
    notes: "[Tonkotsu ramen · Shijo-Omiya] A small, old two-floor counter by the Omiya rotary serving late into the night: the \"Hakuryu\" tonkotsu with thin noodles, spicy takana on the counter, and gyoza and fried rice sets — under ¥1,500. Ticket machine; smoking after lunch; closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)'], origin: null,
      background: 'Opened 1 July 2011 (Tabelog).',
      philosophy: null, specialty: 'Hakuryu tonkotsu ramen.',
      anecdotes: [
        { text: 'A March 2026 diner\'s friend called it the best ramen around Shijo-Omiya, and the broth went down easily even after drinks.', source: R + 'B524597876/' },
        { text: 'A March 2026 first-timer found it quite good but did not plan to return.', source: R + 'B526191758/' },
        { text: 'At 21:00 in September 2026 a diner was put off by the narrow, cluttered entrance but found the ramen good.', source: R + 'B537105885/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン京龍、ラーメン、下京区四条大宮町18-7、阪急大宮駅から徒歩1分、月・日 11:00〜22:00、水・木 11:00〜23:00、金・土 11:00〜24:00、火曜休み、予約不可、カード・電子マネー不可、PayPay 可、17席 (1階カウンター7、2階カウンター10)、喫煙可 (11:00〜14:00 のみ禁煙)、2011年7月1日オープン。口コミ (2026年3〜11月、英語): 券売機、白龍 (細いストレート麺の豚骨、チャーシュー、きくらげ、メンマ、ねぎ)、背脂のラーメン、替え玉、餃子、チャーハン、深夜のセット、卓上の高菜・紅しょうが・にんにく、四条大宮のロータリーのマクドナルドの隣、入口が狭く雑然としているという声。',
      confidence: 'medium', sources: [TB, R + 'B524597876/', R + 'B525677596/', R + 'B525994172/', R + 'B526007203/', R + 'B526191758/', R + 'B530726908/', R + 'B530783040/', R + 'B530973439/', R + 'B537105885/', R + 'B538774376/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; smoking allowed after 14:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条大宮町18-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003085, 135.749272); cross-checked: GSI 京都府京都市下京区四条大宮町18番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530726908/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Hakuryu tonkotsu ramen', '', 'Ramen', 'no', 'no', '2026 reviews.', 'hakuryu'),
      it('', '', 'Fried rice', '', 'Sides', 'ask', 'no', '2026 reviews.', 'chahan'),
    ] }, {
    cuisine: '細いストレート麺の豚骨ラーメン: チャーシュー、きくらげ、メンマ、ねぎの「白龍」(濃いめとも軽めとも)、背脂のラーメン、替え玉、餃子、しっとりしたチャーハン、チャーハン・餃子・ラーメンの夜のセット。卓上に高菜、紅しょうが、にんにく (2026年の口コミ)',
    neighborhood: '四条大宮のロータリー。大宮駅から徒歩1分',
    gf_detail: 'グルテンフリー不可。小麦の麺、餃子、チャーハン (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚骨スープとチャーシュー (2026年の口コミ)。',
    notes: '[豚骨ラーメン・四条大宮] 大宮のロータリーにある、夜遅くまで開く古く小さな2階建てのカウンター。細麺の豚骨「白龍」、卓上の辛い高菜、餃子やチャーハンのセットで1,500円以下。券売機。昼以降は喫煙可。火曜休み。',
  });
}

// ================================================================ 京都洋食 ムッシュいとう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023409/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://madoi-co.com/restaurant/monsieur-itoh_kyoto.html';
  const H = day(['07:00', '10:00'], ['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_yoshoku_monsieur_ito', name: '京都洋食 ムッシュいとう (Kyoto Yoshoku Monsieur Ito)', category: 'OMNI',
    lat: 35.009218, lng: 135.769487, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A buffet of omelettes, curry rice, pasta, breaded cutlets, shrimp tempura, pizza and bread; dish labelling not described (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean, macaroni and green salads among egg, meat and fried dishes (2026 reviews).',
    hours_raw: 'Breakfast 7:00–10:00; lunch 11:30–15:00 (last entry 14:00); dinner 17:30–22:00 (last order 21:30); open every day (Tabelog). Bookings taken; table bookings at lunch are limited to 90 minutes (Tabelog). No whole celebration cakes (Tabelog). Service charge: none — Tabelog\'s Japanese original says 「サービス料・チャージ料なし」. Cards and QR (Tabelog). No hotel parking for the restaurant (May 2026 review). B1F of The Royal Park Hotel Kyoto Sanjo, 3 min from Sanjo Keihan or Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo east of Kawaramachi — Royal Park Hotel Kyoto Sanjo B1F',
    cuisine: 'Kyoto yoshoku of the 円居 (Madoi) group, founded 1961 (Tabelog): a 90-minute lunch buffet, ¥1,900 on weekdays and ¥2,200 at weekends and holidays, soft drinks +¥200 (Tabelog) — omelettes made in a live kitchen, curry rice, minestrone, two pastas, chicken katsu, shrimp tempura, white-fish fritters, pizza, French toast with jam, black syrup and cream, salads and bread; omurice set +¥800 (November 2026); curry to take home ¥540 (August 2026); glass wine from ¥500 and a cellar list at dinner (Tabelog; 2026 reviews)',
    website: SITE, gmaps: gm('京都洋食 ムッシュいとう'), menu_url: TB + 'dtlmenu/',
    notes: "[Yoshoku buffet · Royal Park Hotel Kyoto Sanjo] The basement yoshoku of a Kyoto group born as a 1961 music café: a 90-minute lunch buffet (¥1,900–2,200) of omelettes from the live kitchen, curry, pasta and fried classics, plus breakfast and a wine-friendly dinner. No service or cover charge. Open daily.",
    chef_bio: { chef_name: null, roles: ['Restaurant of the 円居 (Madoi) group (no person named)'], origin: null,
      background: 'Opened 8 October 2011 (Tabelog). Per Tabelog and the hotel\'s dinner leaflet: part of the 円居 (Madoi) group, founded in 1961 as a classical-music café at Hyakumanben, which grew into yoshoku and French restaurants.',
      philosophy: 'Nostalgic, heartfelt yoshoku passed down since the founding (Tabelog).',
      specialty: 'Omelettes; yoshoku buffet.',
      anecdotes: [
        { text: 'A May 2026 family enjoyed watching the chef make omelettes and French toast in front of the children.', source: R + 'B527752505/' },
        { text: 'An August 2026 diner found the potatoes a little salty but grew used to them.', source: R + 'B534455841/' },
        { text: 'A November 2026 holiday guest noted the drink bar costs ¥200 extra and the omurice set ¥800 more.', source: R + 'B538563096/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 京都洋食 ムッシュいとう、洋食・ヨーロッパ料理・バル、中京区三条通河原町東入ル中島町74 ザ ロイヤルパークホテル 京都三条 B1F、京阪三条駅・京都市役所前駅から徒歩3分、朝 7:00〜10:00、昼 11:30〜15:00 (最終入店14:00)、夜 17:30〜22:00 (L.O. 21:30)、無休、ランチの席予約は90分、ランチブッフェ平日1,900円・土日祝2,200円、ソフトドリンク飲み放題200円、ホールケーキ不可、サービス料・チャージ料なし、カード・QR 可、2011年10月8日オープン、1961年創業の円居グループの洋食、グラスワイン500円から。口コミ (2026年1〜11月、英語): ライブキッチンのオムレツ、カレー、ミネストローネ、パスタ2種、チキンカツ、海老天、白身魚のフリット、ピザ、フレンチトースト、オムライスのセット +800円、持ち帰りのカレー540円、ホテルの駐車場なし、ポテトが塩辛いという声。',
      confidence: 'medium', sources: [TB, SITE, 'https://www.royalparkhotels.co.jp/the/kyotosanjo/assets/files/pdf/monsieur-itoh_dinner.pdf', R + 'B469581408/', R + 'B527580178/', R + 'B527752505/', R + 'B527767900/', R + 'B531668451/', R + 'B532527313/', R + 'B534455841/', R + 'B536390648/', R + 'B536784802/', R + 'B538563096/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buffet; staff explain the menu at the door.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通河原町東入ル中島町74 ザ ロイヤルパークホテル 京都三条 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the restaurant; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.009218, 135.769487); cross-checked: GSI 京都府京都市中京区中島町74番地 (lot) 22m; 13.1 m from mp_tetsunabe_gyoza_to_osake; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Buffet prices from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Lunch buffet, 90 min (weekdays / weekends and holidays)', '¥1,900 / ¥2,200', 'Lunch', 'ask', 'ask', 'Tabelog; soft drinks +¥200.', 'lunch_buffet'),
      it('', '', 'Omurice set (with buffet)', '+¥800', 'Lunch', 'ask', 'no', 'November 2026 review.', 'omurice_set'),
    ] }, {
    cuisine: '1961年創業の円居グループの京都洋食 (食べログ): 90分のランチブッフェは平日1,900円・土日祝2,200円、ソフトドリンク +200円 (食べログ)。ライブキッチンのオムレツ、カレーライス、ミネストローネ、パスタ2種、チキンカツ、海老天、白身魚のフリット、ピザ、ジャム・黒蜜・クリームのフレンチトースト、サラダとパン。オムライスのセット +800円 (2026年11月)、持ち帰りのカレー540円 (2026年8月)、夜はグラスワイン500円からとワインセラーのリスト (食べログ、2026年の口コミ)',
    neighborhood: '河原町の東の三条。ザ ロイヤルパークホテル 京都三条 B1F',
    gf_detail: '要確認。オムレツ、カレー、パスタ、パン粉のカツ、海老天、ピザ、パンのブッフェ。表示の説明はない (2026年の口コミ)。',
    vegan_detail: '要確認。豆やマカロニや葉物のサラダもあるが、卵、肉、揚げ物が中心 (2026年の口コミ)。',
    notes: '[洋食ブッフェ・ロイヤルパークホテル京都三条] 1961年の名曲喫茶に始まる京都のグループの地下の洋食店。ライブキッチンのオムレツ、カレー、パスタ、揚げ物の90分のランチブッフェ (1,900〜2,200円)、朝食やワインの楽しめる夜も。サービス料・チャージなし。無休。',
  });
}

// ================================================================ デザイナーズ個室 肉バル W
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025341/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://diningbar-w.com/';
  const W = day(['18:00', '29:00']); const E = day(['18:00', '27:00']);
  put({
    id: 'kyoto_niku_bar_w_gion', name: 'デザイナーズ個室 肉バル W (Designers Private Rooms Niku Bar W)', category: 'OMNI',
    lat: 35.005219, lng: 135.772679, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Roast beef and steak beside pizza, fresh pasta and bruschetta (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat bar; seafood and cheese dishes (2026 reviews).',
    hours_raw: 'Mon–Fri 18:00–5:00 (last orders food 4:00, drinks 4:30); Sat, Sun and holidays 18:00–3:00 (last orders food 2:30, drinks 3:00); irregular closures (Tabelog). Bookings taken; seat-only bookings need one drink each; all-you-can-drink course ¥5,000 (Tabelog; October 2026 review). Charge: Tabelog\'s Japanese original says 「T.C 500yen ※0:00以降入店1000yen」 — a ¥500 table charge, ¥1,000 for arrivals after midnight. Cards (Tabelog). 90 seats: a gold-marble counter, long tables, private rooms for up to 8 or 25, some with karaoke, and a riverside terrace where smoking is allowed; designated smoking area (Tabelog; September 2026 reviews). On the Shirakawa near Shijo-Yamatooji; 2 min from Gion-Shijo Stn (Tabelog; September 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shirakawa riverside, Gion — 2 min from Gion-Shijo Stn',
    cuisine: 'Meat bar of handmade dishes (Tabelog): roast beef, a "steak mountain", coarse sausage with mash, duck with W\'s sauce, burrata with seasonal fruit, salmon carpaccio with yogurt mousse, tuna tartare, cream-cheese bruschetta, prosciutto and strawberry salad, house "ITTAN" Genovese and rich uni carbonara, pizza; gin and tonic, a tea-based house cocktail, wine, Guinness (2026 reviews)',
    website: SITE, gmaps: gm('肉バル W 祇園'), menu_url: TB + 'dtlmenu/',
    notes: "[Meat bar & karaoke rooms · Shirakawa, Gion] A glossy late-night dining bar by the Shirakawa, open till 3–5 a.m.: roast beef, burrata, uni carbonara and cocktails at a gold-marble counter, on the river terrace or in private karaoke rooms. About ¥5,000–8,000 plus a ¥500 table charge (¥1,000 after midnight).",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 1 April 2015 (Tabelog).',
      philosophy: 'Carefully chosen ingredients and handmade meat dishes, from appetizers to desserts (Tabelog).',
      specialty: 'Roast beef; uni carbonara.',
      anecdotes: [
        { text: 'For a girlfriend\'s birthday in September 2026, the staff moved a couple to the riverside terrace on request.', source: R + 'B536067183/' },
        { text: 'An October 2026 karaoke-room party noted a handsome staff member with a butler-like manner.', source: R + 'B537745627/' },
        { text: 'A September 2026 diner cut the house Genovese at the table and noted the one-drink rule and cover charge.', source: R + 'B536547253/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): デザイナーズ個室 肉バル W、ダイニングバー・居酒屋・ステーキ、東山区常盤町165 みかくビル 1F、祇園四条駅から徒歩2分、月〜金 18:00〜翌5:00、土日祝 18:00〜翌3:00、不定休、席のみ予約はワンドリンク、T.C 500円 (0時以降の入店は1,000円)、90席 (カウンター、長テーブル、8名・25名の個室)、分煙、カード可、2015年4月1日オープン、ゴールドの大理石のカウンター、ローストビーフ、ステーキの山。口コミ (2026年9〜10月、英語): 白川沿い、テラス席 (喫煙可)、カラオケ付きの個室、飲み放題コース5,000円、ブッラータと季節の果物、サーモンのカルパッチョとヨーグルトのムース、マグロのタルタル、粗挽きソーセージ、鴨、ITTAN のジェノベーゼとウニのカルボナーラ、ピザ、紅茶のカクテル、執事のようなハンサムな店員。',
      confidence: 'medium', sources: [TB, SITE, R + 'B536067183/', R + 'B536147491/', R + 'B536159549/', R + 'B536547253/', R + 'B536621766/', R + 'B537745627/', R + 'B538262241/', R + 'B538283018/', R + 'B538340388/', R + 'B538522600/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night bar; one drink per person on seat bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区常盤町165 みかくビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005159, 135.772679) is 3.2 m from kyoto_gion_mikaku (same みかくビル), so moved ~6.7 m north to 35.005219 (9.2 m from it); cross-checked: GSI 京都府京都市東山区常盤町165番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537745627/', TB],
    price_note: 'No menu read; course price from an October 2026 review; table charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'All-you-can-drink course', '¥5,000', 'Courses', 'ask', 'no', 'October 2026 review.', 'course_nomihodai'),
      it('', '', 'Table charge (after midnight ¥1,000)', '¥500', 'Charges', 'ask', 'ask', 'Tabelog.', 'table_charge'),
    ] }, {
    cuisine: '手作りの肉料理のバル (食べログ): ローストビーフ、「ステーキの山」、粗挽きソーセージとマッシュポテト、W 特製ソースの鴨、季節の果物とブッラータ、ヨーグルトのムースのサーモンのカルパッチョ、マグロのタルタル、クリームチーズのブルスケッタ、生ハムといちごのサラダ、自家製「ITTAN」のジェノベーゼと濃厚なウニのカルボナーラ、ピザ。ジントニック、紅茶のカクテル、ワイン、ギネス (2026年の口コミ)',
    neighborhood: '祇園の白川沿い。祇園四条駅から徒歩2分',
    gf_detail: '要確認。ローストビーフ、ステーキと、ピザ、生パスタ、ブルスケッタ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉のバル。魚介やチーズの料理も (2026年の口コミ)。',
    notes: '[肉バルとカラオケ個室・祇園の白川] 白川沿いの、深夜3〜5時まで開くきらびやかなダイニングバー。ゴールドの大理石のカウンター、川辺のテラス、カラオケ付きの個室で、ローストビーフ、ブッラータ、ウニのカルボナーラ、カクテルを。5千〜8千円ほどにテーブルチャージ500円 (0時以降は1,000円)。',
  });
}

save();
