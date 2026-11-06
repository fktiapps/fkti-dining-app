// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 40.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + blend kyoto (two-seat specialty coffee stand where you blend your own beans, Takeyamachi-Fuyacho)
//   + 京都ビアラボ Kyoto Beer Lab (brewpub on the Takase River at Shichijo; since 2018)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + そうげんカフェ Sogen Cafe (weekday curry-and-sweets café in Kitashirakawa; since 2005) — run by the antiques business SOWGEN, not a
//     restaurant group.
//   + 炭蔵 Sumizo (wagyu yakiniku off Aburanokoji-Nakadachiuri)
//   None of the four is in data/kyoto.json: grep by id, name (blend, ビアラボ/Beer Lab, そうげん/Sogen, 炭蔵/Sumizo) and address
//   (笹屋町447, 十禅師町201-3, 北白川上終町10-2, 油橋詰町94-1) found none. Same-name counts: one listing each.
//   Service charges: none listed on Tabelog for the four.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-40');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ blend kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035545/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '17:00']); const WE = day(['09:00', '17:00']);
  put({
    id: 'kyoto_blend_kyoto', name: 'blend kyoto (ブレンド キョウト)', category: 'OMNI',
    lat: 35.016155101892444, lng: 135.7658616505352, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A coffee stand; no food or gluten information is published (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is plant-based; ask about milk drinks (reviews).',
    hours_raw: 'Monday, Tuesday, Thursday and Friday 12:00–17:00; Saturday, Sunday and holidays 9:00–17:00; closed Wednesday (Tabelog). No service charge listed (Tabelog). 2 seats — mostly a stand; non-smoking; cards, e-money and QR (Tabelog). On Takeyamachi-dori east of Fuyacho, on the way to the Imperial Palace grounds, 578 m from Marutamachi Stn (Tabelog; October 2025).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takeyamachi-Fuyacho — near the Imperial Palace grounds',
    cuisine: 'Light-roast specialty coffee stand where you smell the beans (labelled a to i) and pick two to blend into your own cup (2024–2026 reviews) · e.g. a blended coffee ¥1,210 (May 2025); spiced options such as a cinnamon coffee (March 2026) · prices on the higher side (March 2026)',
    website: null, gmaps: gm('blend kyoto 竹屋町'), menu_url: TB,
    notes: "[Coffee · Takeyamachi, blend your own cup] A tiny, stylish specialty-coffee stand on the way to the Imperial Palace grounds, run by a barista from Tokyo's GLITCH COFFEE & ROASTERS. Sniff your way through jars of light-roast beans labelled a to i, choose two, and the barista blends and brews your cup — about ¥1,200 a cup. Just two seats, so plan to stroll with it. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-barista not named'], origin: null,
      background: 'Per an April 2026 review: the owner trained at the renowned GLITCH COFFEE & ROASTERS in Tokyo before opening this shop in Kyoto. Reviewers describe a wide choice of light-roast beans from which guests pick two for a custom blend.',
      philosophy: null,
      specialty: 'Two-bean custom blend.',
      anecdotes: [
        { text: 'A July 2026 visitor chose beans by smelling jars labelled a through i.', source: R + 'B537342736/' },
        { text: 'A November 2025 regular rates it a top pick in Kyoto for light-roast specialty coffee.', source: R + 'B508105849/' },
        { text: 'A March 2026 visitor found it busy and tried a cinnamon-flavoured coffee.', source: R + 'B524319004/' },
      ],
      japanese_sources_summary: '食べログ: blend kyoto (ブレンド キョウト)、コーヒースタンド、中京区竹屋町通麸屋町東入笹屋町447、丸太町駅から578m、月火木金12:00〜17:00、土日祝9:00〜17:00、水曜定休、2席、禁煙、カード・電子マネー・QR 可。口コミ (2024〜2026年、英語): 浅煎りのスペシャルティコーヒー、豆の香りを嗅いで a〜i から2種を選んでブレンド、ブレンドコーヒー1,210円 (2025年5月)、シナモンのコーヒー、東京の GLITCH COFFEE & ROASTERS で修業した店主、値段は高め。',
      confidence: 'medium', sources: [TB, R + 'B438012009/', R + 'B492136658/', R + 'B499611766/', R + 'B508105849/', R + 'B514857584/', R + 'B519378667/', R + 'B524319004/', R + 'B526598933/', R + 'B527963004/', R + 'B529313537/', R + 'B530475720/', R + 'B537342736/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the bean jars; two seats only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区竹屋町通麸屋町東入笹屋町447',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.016155, 135.765862); GSI matched 笹屋町447 to a different 笹屋町 784m away, so not lot-checked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B438012009/'],
    price_note: 'Price from a May 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Custom two-bean blend coffee', '¥1,210', 'Coffee', '', 'ask', 'May 2025.', 'blend'),
    ] }, {
    cuisine: '豆の香り (a〜i) を嗅いで2種を選び、自分だけのブレンドにしてもらう浅煎りのスペシャルティコーヒースタンド (2024〜2026年の口コミ)・例: ブレンドコーヒー1,210円 (2025年5月)、シナモンのコーヒーなどの変わり種 (2026年3月)・値段は高め (2026年3月)',
    neighborhood: '竹屋町麸屋町。御苑の近く',
    gf_detail: '要確認。コーヒースタンドで、料理やグルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーは植物性。ミルクの飲み物は確認を (口コミ)。',
    notes: '[コーヒー・竹屋町、自分だけのブレンド] 御苑へ向かう道にある、小さくおしゃれなスペシャルティコーヒーのスタンド。店主は東京の GLITCH COFFEE & ROASTERS 出身。a〜i の浅煎りの豆の香りを嗅いで2種を選ぶと、ブレンドして淹れてくれる。1杯1,200円ほど。席は2つだけなので、持って散歩を。水曜休み。',
  });
}

// ================================================================ 京都ビアラボ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26030571/'; const R = TB + 'dtlrvwlst/';
  const H = day(['13:00', '23:00']);
  put({
    id: 'kyoto_beer_lab', name: '京都ビアラボ (Kyoto Beer Lab)', category: 'OMNI',
    lat: 34.99067272788051, lng: 135.76570022021357, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a brewpub of malt beers, with fried snacks (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Snacks such as edamame and fries alongside kara-age and salmon jerky; nothing vegan is marked (2026 reviews).',
    hours_raw: '13:00–23:00 daily; hours may change (Tabelog). Order and pay at the counter after taking a seat (June 2026). No service charge listed (Tabelog). 15 seats; non-smoking; JCB, AMEX, Diners, transit IC and QR (Tabelog). Beside the Takase River, 245 m from Shichijo Stn (Tabelog; 2026 reviews). Opened 30 March 2018; first batch and grand opening 27 April 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takase River near Shichijo — 245 m from Shichijo Stn',
    cuisine: 'Brewpub pouring its own craft beers, half (US-style) or pint (2026 reviews) · e.g. Yakima Valley IPA ¥1,200 a pint, hōjicha stout ¥1,200, kabusecha white ale ¥700 a half, macadamia brown ale, fruit sours from ¥800 a half, Sudachi Mint Seltzer ¥500 (May–June 2026) · snacks: house kara-age ¥850, edamame ¥450, fried cheese with black pepper ¥600, fries, salmon jerky (2026 reviews)',
    website: null, gmaps: gm('京都ビアラボ 七条'), menu_url: TB,
    notes: "[Craft beer · Shichijo, a brewpub by the Takase River] A small brewery-bar beside the Takase River near Shichijo, pouring its own beers — from a Yakima Valley IPA to Kyoto-tea brews like hōjicha stout and kabusecha white ale — by the half (about ¥700–800) or pint (about ¥1,100–1,200). Order at the counter, sit by the water, add kara-age or fried cheese. Open daily 13:00–23:00.",
    chef_bio: { chef_name: null, roles: ['Brewer not named'], origin: null,
      background: 'Per Tabelog: opened 30 March 2018, with its first batch and grand opening on 27 April 2018. Reviewers describe a brewpub by the Takase River with a long rotating list of house beers, including Kyoto green-tea styles.',
      philosophy: null,
      specialty: 'House beers including hōjicha stout and kabusecha white ale.',
      anecdotes: [
        { text: 'A May 2026 visitor arrived on the anniversary and found about eight special beers on tap.', source: R + 'B527357969/' },
        { text: 'A March 2026 guest came straight from the sauna at Ume-yu nearby.', source: R + 'B524806787/' },
        { text: 'A May 2026 regular on a tenth visit dropped in just before 22:00 on a Friday.', source: R + 'B345813893/' },
      ],
      japanese_sources_summary: '食べログ: 京都ビアラボ、ビアバー・カフェ・バル、下京区十禅師町201-3、七条駅から245m、13:00〜23:00、無休、15席、禁煙、カード (JCB・AMEX・Diners)・交通系IC・QR 可、2018年3月30日オープン、2018年4月27日に初仕込み・グランドオープン。口コミ (2026年、英語): 高瀬川沿いのブルーパブ、ハーフと US パイント、ヤキマバレーIPA 1,200円、ほうじ茶スタウト1,200円、かぶせ茶ホワイトエール700円 (ハーフ)、マカダミアブラウンエール、サワー800円 (ハーフ)、すだちミントセルツァー500円、自家製唐揚げ850円、枝豆450円、黒胡椒のフライドチーズ600円、席についてからカウンターで注文と会計、海外からの客。',
      confidence: 'medium', sources: [TB, R + 'B345813893/', R + 'B524806787/', R + 'B527357969/', R + 'B527737291/', R + 'B529225741/', R + 'B529956389/', R + 'B530327149/', R + 'B531512103/', R + 'B532200129/', R + 'B532936500/', R + 'B536304975/', R + 'B536895749/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter; many overseas visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区十禅師町201-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.990673, 135.7657); cross-checked: GSI 京都府京都市下京区十禅師町201番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529956389/', R + 'B530327149/'],
    price_note: 'Prices from May–June 2026 reviews; the beer list rotates.', last_checked: TODAY, items: [
      it('', '', 'Yakima Valley IPA (pint)', '¥1,200', 'Beer', 'no', '', '', 'ipa'),
      it('', '', 'Hōjicha stout (pint)', '¥1,200', 'Beer', 'no', '', '', 'hojicha_stout'),
      it('', '', 'Kabusecha white ale (half)', '¥700', 'Beer', 'no', '', '', 'kabusecha_ale'),
      it('', '', 'House kara-age', '¥850', 'Snacks', 'no', 'no', '', 'karaage'),
      it('', '', 'Edamame', '¥450', 'Snacks', '', 'ask', '', 'edamame'),
    ] }, {
    cuisine: '自家醸造のクラフトビールをハーフ (US サイズ) かパイントで出すブルーパブ (2026年の口コミ)・例: ヤキマバレーIPA パイント1,200円、ほうじ茶スタウト1,200円、かぶせ茶ホワイトエール ハーフ700円、マカダミアブラウンエール、フルーツのサワー ハーフ800円から、すだちミントセルツァー500円 (2026年5〜6月)・つまみ: 自家製唐揚げ850円、枝豆450円、黒胡椒のフライドチーズ600円、フライドポテト、サーモンジャーキー (2026年の口コミ)',
    neighborhood: '七条近くの高瀬川沿い。七条駅から245m',
    gf_detail: 'グルテンフリー不可。麦芽のビールのブルーパブで、揚げ物のつまみも (2026年の口コミ)。',
    vegan_detail: '要確認。枝豆やポテトのほか唐揚げやサーモンジャーキー。ヴィーガンの表示はない (2026年の口コミ)。',
    notes: '[クラフトビール・七条、高瀬川沿いのブルーパブ] 七条近くの高瀬川のそばの小さな醸造所兼バー。自家醸造のビールを、ヤキマバレーIPA からほうじ茶スタウトやかぶせ茶ホワイトエールなど京都のお茶のビールまで、ハーフ (700〜800円ほど) かパイント (1,100〜1,200円ほど) で。カウンターで注文し、川辺の席で唐揚げやフライドチーズと。毎日13時から23時。',
  });
}

// ================================================================ そうげんカフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001909/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sowgen.com/';
  const H = day(['11:00', '17:00']);
  put({
    id: 'kyoto_sogen_cafe', name: 'そうげんカフェ (Sogen Cafe)', category: 'OMNI',
    lat: 35.03719914785916, lng: 135.7914851106654, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curries with rice, carrot cake, parfaits and pudding; no gluten information is published (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Chicken and pork curries and dairy sweets; nothing vegan is marked (2025–2026 reviews).',
    hours_raw: 'Monday–Friday 11:00–17:00 (last order 16:30); closed Saturday, Sunday and holidays (official site; Tabelog). Online reservations taken (March 2026). No service charge listed (Tabelog). 20 seats: 8 at the counter, 12 at tables; non-smoking; no pets; cards and PayPay (Tabelog). On Shirakawa-dori in Kitashirakawa, across from Kyoto University of the Arts, 657 m from Chayama Stn (Tabelog; 2025 reviews). Opened 1 August 2005 (Tabelog); run by the Kyoto antiques and design business SOWGEN, whose Shijo café has merged into this one (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashirakawa, across from Kyoto University of the Arts',
    cuisine: 'Café of curries and homemade sweets among plants and old furniture (official site; reviews) · combination curry with soft-boiled egg about ¥1,200 (June 2025), butter chicken curry, pork keema and chicken curry · carrot cake with cream cheese and walnuts, seasonal pudding à la mode ¥990, chocolate-and-berry parfait ¥890 (September 2025), iced café au lait, herbal tea (2025–2026 reviews)',
    website: SITE, gmaps: gm('そうげんカフェ 北白川'), menu_url: TB,
    notes: "[Café · Kitashirakawa, curry and parfaits among old furniture] A leafy, quietly stylish café run by the antiques shop SOWGEN, opposite Kyoto University of the Arts on Shirakawa-dori. Lunch is a gentle, vegetable-rich curry — the combination plate is about ¥1,200 — and the sweets are worth the trip: carrot cake, pudding à la mode (¥990) and small parfaits. Weekdays only; online bookings taken.",
    chef_bio: { chef_name: null, roles: ['Run by SOWGEN (antiques, plants and design); staff not named'], origin: null,
      background: 'Per the official site: SOWGEN deals in antiques, brocante, plants and interior design; そうげんカフェ is its Kitashirakawa café, which absorbed the café of its Shijo shop. Tabelog gives the opening as 1 August 2005; a June 2025 reviewer calls it a local staple of more than 15 years.',
      philosophy: null,
      specialty: 'Combination curry; pudding à la mode.',
      anecdotes: [
        { text: 'A November 2025 guest who arrived just after last order was still welcomed in.', source: R + 'B517272229/' },
        { text: 'A December 2025 diner had long missed it because it opens only on weekdays, and named it a favourite café of the year.', source: R + 'B520044839/' },
        { text: 'A June 2025 visitor came after being turned away from a nearby ramen shop and stayed for the curry.', source: R + 'B508604155/' },
      ],
      japanese_sources_summary: '公式サイト (sowgen.com): SOWGEN、古道具・古家具・植物・デザイン、北白川店 そうげんカフェ (月〜金11:00〜17:00、L.O. 16:30、土日祝休み、左京区北白川上終町10-2)、四条店のカフェは北白川そうげんカフェへ統合、北白川 sowgen brocante は2026年3月で閉店。食べログ: カフェ・ケーキ・洋食、茶山・京都芸術大学駅から657m、20席 (カウンター8、テーブル12)、禁煙、ペット不可、カード・PayPay 可、2005年8月1日オープン。口コミ (2025〜2026年、英語): 京都芸術大学の向かい、2種のカレー1,200円ほど、バターチキンカレー、ポークキーマ、キャロットケーキ、季節のプリンアラモード990円、チョコとベリーのパフェ890円、ネット予約可。',
      confidence: 'medium', sources: [TB, SITE, R + 'B440075523/', R + 'B450525480/', R + 'B500523506/', R + 'B508604155/', R + 'B510588350/', R + 'B515441767/', R + 'B517272229/', R + 'B520044839/', R + 'B520330494/', R + 'B521749884/', R + 'B524651043/', R + 'B526635993/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Weekdays only; book online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区北白川上終町10-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (2026 notice) and Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.037199, 135.791485); cross-checked: GSI 京都府京都市左京区北白川上終町10番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B450525480/', R + 'B515441767/'],
    price_note: 'Prices from June and September 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Combination curry with soft-boiled egg', '¥1,200', 'Lunch', 'ask', 'no', 'About ¥1,200 (June 2025).', 'aigake_curry'),
      it('', '', 'Seasonal pudding à la mode', '¥990', 'Sweets', 'ask', 'no', '', 'pudding'),
      it('', '', 'Chocolate and berry parfait', '¥890', 'Sweets', 'ask', 'no', '', 'parfait'),
    ] }, {
    cuisine: '植物と古家具に囲まれたカレーと自家製スイーツのカフェ (公式サイト、口コミ)・半熟卵付きの2種のカレー1,200円ほど (2025年6月)、バターチキンカレー、ポークキーマとチキンカレー・クリームチーズとくるみのキャロットケーキ、季節のプリンアラモード990円、チョコとベリーのパフェ890円 (2025年9月)、アイスカフェオレ、ハーブティー (2025〜2026年の口コミ)',
    neighborhood: '北白川、京都芸術大学の向かい',
    gf_detail: '要確認。ご飯のカレー、キャロットケーキ、パフェ、プリン。グルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。鶏や豚のカレーと乳製品のスイーツで、ヴィーガンの表示はない (2025〜2026年の口コミ)。',
    notes: '[カフェ・北白川、古家具の中のカレーとパフェ] 白川通の京都芸術大学の向かい、古道具店 SOWGEN が営む緑あふれる落ち着いたカフェ。昼はやさしく野菜の旨みのあるカレーで、2種のカレーは1,200円ほど。スイーツも目当てになる: キャロットケーキ、プリンアラモード (990円)、小さなパフェ。平日のみ、ネット予約可。',
  });
}

// ================================================================ 炭蔵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26008197/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_sumizo_yakiniku', name: '炭蔵 (Sumizo)', category: 'OMNI',
    lat: 35.025170427854775, lng: 135.75367597057044, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu yakiniku with sweet-savoury marinades and tare; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house (reviews).',
    hours_raw: '17:30–22:00, Monday, Friday, Saturday and Sunday; closed Tuesday–Thursday; hours may change (Tabelog). Bookings recommended. JCB, AMEX and Diners; no e-money (Tabelog). No service charge listed (Tabelog). In a residential street off Aburanokoji north of Nakadachiuri, easy to miss; about 13 min from Imadegawa Stn (742 m) and near Hotel Brighton Kyoto (Tabelog; 2025–2026 reviews).',
    hours: { 0: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Aburanokoji-Nakadachiuri — 13 min from Imadegawa Stn',
    cuisine: 'Kuroge wagyu yakiniku (reviews) · owner’s recommended thick-cut harami and horumon in a sweet-savoury marinade; wagyu tongue; kalbi; an assorted Kuroge wagyu platter with cubed fillet steak; chateaubriand off the menu; chirimen rice bowl; vegetables (2024–2026 reviews) · about ¥5,500 with two drinks for a light meal (December 2024); typically ¥6,000–10,000 a head (2025–2026 reviews)',
    website: null, gmaps: gm('炭蔵 油小路 中立売'), menu_url: TB,
    notes: "[Yakiniku · Nishijin-south, a neighbourhood wagyu house] A well-loved yakiniku shop tucked in a residential street west of the Imperial Palace, where the friendly owner talks you through the cuts. Try the thick-cut harami and marinated horumon, wagyu tongue, and ask about the off-menu chateaubriand; a chirimen rice bowl rounds things off. Most spend ¥6,000–10,000. Open only Monday and Friday to Sunday evenings.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per 2024–2026 reviews: a long-regarded yakiniku restaurant in the Imadegawa area known for fresh Kuroge wagyu, a generous owner full of grilling tips, and an off-menu chateaubriand.',
      philosophy: null,
      specialty: 'Thick-cut harami; off-menu chateaubriand.',
      anecdotes: [
        { text: 'A February 2025 diner who arrived around 20:00 found it quiet and got plenty of tips from the generous owner.', source: R + 'B501892153/' },
        { text: 'A November 2025 guest rated the cubed fillet steak in the Kuroge wagyu platter beyond expectations.', source: R + 'B516483017/' },
        { text: 'An August 2026 visitor staying at a nearby hotel struggled to find the hidden entrance.', source: R + 'B534870331/' },
      ],
      japanese_sources_summary: '食べログ: 炭蔵、焼肉、上京区油小路通中立売上る油橋詰町94-1、今出川駅から742m、月金土日17:30〜22:00、火水木定休、カード (JCB・AMEX・Diners) 可、電子マネー不可。口コミ (2024〜2026年、英語): 今出川エリアの名店、住宅街でわかりにくい、店主おすすめの厚切りハラミと甘辛いたれのホルモン、和牛タン、カルビ、黒毛和牛の盛り合わせとヒレのサイコロステーキ、メニューにないシャトーブリアン、ちりめん丼、2杯飲んで5,500円ほど (2024年12月)、ブライトンホテルの近く。',
      confidence: 'medium', sources: [TB, R + 'B110957527/', R + 'B112698554/', R + 'B448964798/', R + 'B494407929/', R + 'B498229470/', R + 'B498535243/', R + 'B501892153/', R + 'B503492604/', R + 'B516483017/', R + 'B527894022/', R + 'B528343682/', R + 'B534870331/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hard to find; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区油小路通中立売上る油橋詰町94-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.02517, 135.753676); cross-checked: GSI 京都府京都市上京区油橋詰町94番地 (lot) 58m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B448964798/', R + 'B494407929/'],
    price_note: 'Dishes from 2024–2026 reviews; no prices published.', last_checked: TODAY, items: [
      it('', '', 'Thick-cut harami', '', 'Yakiniku', 'ask', 'no', '', 'harami'),
      it('', '', 'Assorted Kuroge wagyu platter', '', 'Yakiniku', 'ask', 'no', '', 'wagyu_platter'),
      it('', '', 'Chateaubriand (off menu)', '', 'Yakiniku', 'ask', 'no', 'Ask.', 'chateaubriand'),
    ] }, {
    cuisine: '黒毛和牛の焼肉 (口コミ)・店主おすすめの厚切りハラミと甘辛いたれのホルモン、和牛タン、カルビ、ヒレのサイコロステーキ入りの黒毛和牛の盛り合わせ、メニューにないシャトーブリアン、ちりめん丼、野菜 (2024〜2026年の口コミ)・軽く2杯で5,500円ほど (2024年12月)、ふつうは1人6,000〜1万円ほど (2025〜2026年の口コミ)',
    neighborhood: '油小路中立売。今出川駅から徒歩13分',
    gf_detail: '要確認。甘辛いたれやもみだれの和牛の焼肉。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店 (口コミ)。',
    notes: '[焼肉・西陣の南、町の和牛焼肉] 御所の西の住宅街に隠れた、愛される焼肉屋。気さくな店主が部位を教えてくれる。厚切りハラミとたれのホルモン、和牛タンを、メニューにないシャトーブリアンも聞いてみて。締めはちりめん丼。1人6,000〜1万円ほど。月・金〜日の夜のみ。',
  });
}

save();
