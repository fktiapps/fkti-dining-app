// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 89.
//   + Cafe Sunaba Kyoto (breakfast café of the bakery Le bac a sable, near Sanjo Keihan) — rest
//   + cafe KARIN (café in Chion-in's Wajun Kaikan facing the Sanmon gate; vegan spice curry) — rest
//   - skip 26039206 NOHGA HOTEL KIYOMIZU KYOTO (hotel listing)
//   + The Bridge (café in a renovated machiya at Muromachi-Takatsuji; breakfast sets from 7:30) — rest
//   + 肉料理とクラフトビールの洋風居酒屋 コモンバル common bal (set-meal lunches and an evening bar near Gojo-Karasuma) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches for Sunaba, KARIN, The Bridge or
//   コモンバル. Earlier rulings found: NOHGA (26037084 CICON by NOHGA HOTEL, large parent; 26037085 its rooftop bar).
//   LINK FLAGGED: Cafe Sunaba Kyoto is the sister shop of ルバカサブル Le bac a sable (in data) — December 2024, February and
//   September 2025 reviewers say so; Sunaba serves the bakery's bread as a breakfast café upstairs at a different address
//   (菊鉾町297-6), so drafted as a sister concept on the same footing as ザコトラ商店.
//   Same-name counts (2026-11-08): one each. cafe KARIN is in 和順会館, Chion-in's lodging, but open to all (2025–26 reviews by
//   non-guests). The Bridge is run by the HPC church (December 2025). コモンバル is run by 共栄商事株式会社 (common-room.jp), no
//   other restaurants named; formerly コモンダイニング, whose long-time chef left in May 2026 (May 2026 review).
//   None of the drafted shops is in data/kyoto.json.
//   Charges: コモンバル 「サービス料＋チャージ料なし」 (Tabelog). Others: none listed. No halal claims; no owner deaths;
//   single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-89');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26039206', 'hotel listing, not a restaurant: NOHGA HOTEL KIYOMIZU KYOTO is the hotel itself; its restaurant CICON by NOHGA HOTEL was skipped as a large-parent venue (26037084) and its rooftop bar under the big-chain-hotel ruling (26037085) (https://tabelog.com/en/kyoto/A2601/A260301/26039206/).');

// ================================================================ Cafe Sunaba Kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26042614/'; const R = TB + 'dtlrvwlst/';
  const M = day(['07:00', '11:00']); const F = day(['07:00', '11:00'], ['18:00', '23:00']);
  put({
    id: 'kyoto_cafe_sunaba', name: 'Cafe Sunaba Kyoto', category: 'OMNI',
    lat: 35.011531, lng: 135.775129, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bread breakfast — salt bread, chocolate and raisin breads (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: breads served with butter and jam (February 2025); no vegan item sourced.',
    hours_raw: 'Breakfast daily except Wednesday 7:00–11:00; Friday also 18:00–23:00; closed Wednesday; may change (Tabelog). Cards and e-money (Tabelog). Up narrow stairs to a bright second-floor room in what looks like an ordinary house; easy to miss without the sign (December 2024, February 2025). English-speaking staff (February and May 2026). Near Sanjo Keihan (Tabelog).',
    hours: { 0: M, 1: M, 3: M, 4: F, 5: M, 6: M }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North of Sanjo, near Sanjo Keihan — Sakyo',
    cuisine: 'Breakfast café of the bakery Le bac a sable · breakfast set ¥600: two of three breads — salt bread, chocolate, raisin — with butter, jam and a drink (February and September 2025, February 2026) · coffee or cocoa (2025–26 reviews)',
    website: null, gmaps: gm('Cafe Sunaba Kyoto'), menu_url: TB,
    notes: '[Breakfast café · near Sanjo Keihan] The upstairs breakfast room of the bakery Le bac a sable (listed separately): from 7:00, a ¥600 set of two breads — salt, chocolate or raisin — with butter, jam and coffee or cocoa, in a bright wooden room with English-speaking staff. Mornings only, plus Friday evenings; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as French (December 2024)'], origin: null,
      background: 'Per Tabelog and reviews: a café opened 21 November 2024 as the sister shop of the Higashiyama bakery Le bac a sable (December 2024, February and September 2025).',
      philosophy: null, specialty: 'Bread breakfast set.',
      anecdotes: [
        { text: 'A February 2025 early riser climbed the narrow stairs for the ¥600 set — salt bread with chocolate bread and salt bread with raisin bread, coffee, jam and butter.', source: R + 'B501976882/' },
        { text: 'A September 2025 visitor took the owner’s advice of salt bread, then agonised between chocolate chip and raisin before choosing raisin.', source: R + 'B514168647/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、左京区菊鉾町297-6、月火木土日7:00〜11:00、金7:00〜11:00・18:00〜23:00、水曜休み、カード・電子マネー可、2024年11月21日オープン。口コミ (2024年12月〜2026年5月、英語): 東山のパン屋 Le bac a sable (ルバカサブル) の姉妹店、フランス人のオーナー、狭い階段で2階へ、普通の家のような外観、パン3種から2つとドリンクの朝食セット600円 (塩パン、チョコ、レーズン、バターとジャム)、ココア、英語を話すスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B501976882/', R + 'B514168647/', R + 'B521840349/', R + 'B521906433/', R + 'B528550595/', R + 'B533696579/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (February and May 2026). Look for the sign — the café is upstairs in a house.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区菊鉾町297-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.011531, 135.775129); cross-checked: GSI 京都府京都市左京区菊鉾町297番地 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501976882/'],
    price_note: 'Price from February 2025.', last_checked: TODAY, items: [
      it('', '', 'Breakfast set: two breads with butter, jam and a drink', '¥600', 'Breakfast', 'no', 'no', 'February 2025.', 'breakfast_set'),
    ] }, {
    cuisine: 'パン屋 Le bac a sable の朝食のカフェ・3種から2つのパン (塩パン、チョコ、レーズン) にバター、ジャム、ドリンクの朝食セット600円 (2025年2月・9月、2026年2月)・コーヒーやココア (2025〜2026年の口コミ)',
    neighborhood: '三条の北、京阪三条の近く。左京',
    gf_detail: 'グルテンフリーではない。パンの朝食。塩パン、チョコやレーズンのパン (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。パンにバターとジャム (2025年2月)。ヴィーガンのメニューの情報なし。',
    notes: '[朝食のカフェ・京阪三条の近く] パン屋 Le bac a sable (別に掲載) の2階の朝食の店。7時から、塩パン、チョコ、レーズンのパン2つにバター、ジャム、コーヒーかココアのセット600円。木の明るい部屋、英語を話すスタッフ。朝のみ、金曜は夜も。水曜休み。',
  });
}

// ================================================================ cafe KARIN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017618/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.wajun-kaikan.jp/cafe/';
  const H = day(['08:30', '19:30']);
  put({
    id: 'kyoto_cafe_karin_chionin', name: 'cafe KARIN (カフェ カリン)', category: 'OMNI',
    lat: 35.004468, lng: 135.780569, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The spice curry comes with vegetables and multigrain rice (March 2025, February 2026), but the curry base is not described; cakes are wheat (October 2026). No allergen information.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some vegan options: a vegan spice curry with a plate of vegetable sides (March and April 2025). Whether the 2026 spice curry is the same vegan recipe is not stated — ask. Soft serve and cakes are not vegan.',
    hours_raw: 'Daily 8:30–19:30; may change (Tabelog). Self-service: order at the counter (February 2026). Eat in or take away (2021 review). 32 seats (Tabelog). On the ground floor of 和順会館, Chion-in’s lodging, beside its souvenir shop, facing the Sanmon gate; the temple itself closes at 17:00 (February 2026); café described on the shop site.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Chion-in Sanmon — Higashiyama',
    cuisine: 'Temple-front café · vegan spice curry with a plate of vegetable sides (March and April 2025) · spice curry with multigrain rice (February and March 2026) · soft serve (March 2026) · cake set of chocolate cake and cheesecake with a matcha latte (October 2026) · blend coffee ¥500 (February 2026) · matcha beer (April 2025)',
    website: SITE, gmaps: gm('cafe KARIN 知恩院 和順会館'), menu_url: SITE,
    notes: '[Café · Chion-in] A self-service café in Chion-in’s Wajun Kaikan facing the great Sanmon gate, open from 8:30 to 19:30: a vegan spice curry with vegetable sides, cake sets, soft serve, coffee and matcha beer — a handy stop before or after the temple.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the shop site and reviews: the café of 和順会館, the lodging of Chion-in, head temple of the Jodo sect, beside its souvenir shop (2024–26 reviews).',
      philosophy: null, specialty: 'Vegan spice curry.',
      anecdotes: [
        { text: 'A March 2025 lunch visitor chose the vegan curry, topped with assorted vegetables and served with a plate of sides — light enough for a small appetite.', source: R + 'B502727729/' },
        { text: 'An April 2025 visitor, starving at 16:30 before a meeting, had the vegan spiced curry with a matcha beer.', source: R + 'B505218143/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区林下町400 知恩院 和順会館1F、毎日8:30〜19:30、32席。口コミ (2025年3月〜2026年10月、英語): 知恩院の三門の前、和順会館の土産物売り場の横、セルフサービス、ヴィーガンのスパイスカレーと野菜の副菜、雑穀米のスパイスカレー、ソフトクリーム、チョコレートケーキとチーズケーキのセットと抹茶ラテ、ブレンド500円、抹茶ビール、寺は17時に閉まる。',
      confidence: 'medium', sources: [SITE, TB, R + 'B502727729/', R + 'B505218143/', R + 'B523062112/', R + 'B523409059/', R + 'B525806269/', R + 'B537332250/'] },
    cultural_comfort: { level: 'none_needed', note: 'Self-service — order and pay at the counter. Ask whether the day’s curry is the vegan one.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区林下町400 知恩院 和順会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004468, 135.780569); GSI 京都府京都市東山区林下町400番地 (lot) is 221m away — the lot covers the Chion-in precinct, so not a usable cross-check; approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502727729/', R + 'B523409059/'],
    price_note: 'Price from February 2026; reviewers report ¥1,000–1,999 for curry.', last_checked: TODAY, items: [
      it('', '', 'Vegan spice curry with vegetable sides', '', 'Food', 'ask', 'vegan', 'March and April 2025.', 'vegan_curry'),
      it('', '', 'Cake set (chocolate cake and cheesecake) with a drink', '', 'Sweets', 'no', 'no', 'October 2026.', 'cake_set'),
      it('', '', 'Blend coffee', '¥500', 'Drinks', 'ask', 'ask', 'February 2026.', 'blend'),
    ] }, {
    cuisine: '知恩院の前のカフェ・野菜の副菜付きのヴィーガンのスパイスカレー (2025年3月・4月)・雑穀米のスパイスカレー (2026年2月・3月)・ソフトクリーム (2026年3月)・チョコレートケーキとチーズケーキのセットと抹茶ラテ (2026年10月)・ブレンド500円 (2026年2月)・抹茶ビール (2025年4月)',
    neighborhood: '知恩院三門前。東山',
    gf_detail: '要確認。スパイスカレーは野菜と雑穀米で (2025年3月、2026年2月)、ルウの中身の情報はない。ケーキは小麦 (2026年10月)。アレルゲンの情報なし。',
    vegan_detail: 'ヴィーガンの選択肢あり: 野菜の副菜付きのヴィーガンのスパイスカレー (2025年3月・4月)。2026年のスパイスカレーが同じヴィーガンのものかは不明、確認を。ソフトクリームとケーキはヴィーガンではない。',
    notes: '[カフェ・知恩院] 知恩院の三門に面した和順会館のセルフサービスのカフェ。8:30〜19:30。野菜の副菜付きのヴィーガンのスパイスカレー、ケーキセット、ソフトクリーム、コーヒー、抹茶ビール。参拝の前後に。',
  });
}

// ================================================================ The Bridge
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040580/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '16:00']); const SU = day(['07:30', '12:00']);
  put({
    id: 'kyoto_the_bridge_cafe', name: 'The Bridge (ザ・ブリッジ)', category: 'OMNI',
    lat: 34.999644, lng: 135.758119, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Most food is wheat — muffins, hot sandwiches, toast, pizza, pasta — but a rice-flour carrot cake is served (December 2025, March 2026); whether it is wheat-free is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ham-and-cheese breakfast sets with egg and yogurt, pork curry, cheesecake (2025–26 reviews).',
    hours_raw: 'Tue–Sat 7:30–16:00 (food last order 14:30, drinks 15:30); Sunday 7:30–12:00 (food last order 9:30); closed Monday (Tabelog). Order and pay at the counter first (December 2025). Power outlets at many seats (December 2024, February 2026). Cards, e-money and QR (Tabelog). A renovated machiya with a courtyard at Muromachi-Takatsuji, just west of Karasuma (October 2025, February 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi-Takatsuji — Shijo Karasuma',
    cuisine: 'Machiya café with breakfast from 7:30 · muffin or hot-sandwich sets with ham and cheese, salad, half a boiled egg, yogurt and a drink (May 2025, February 2026) · cheese toast set (March 2026) · cheese-and-bacon pizza ¥1,300 (February 2026) · spice curry from a curry shop, pork and keema (June 2025) · pasta (February 2026) · rice-flour carrot cake ¥650 (December 2025, March 2026), matcha cheesecake (October 2025)',
    website: null, gmaps: gm('The Bridge カフェ 室町 高辻'), menu_url: TB,
    notes: '[Machiya café · Muromachi-Takatsuji] A spacious renovated machiya with a courtyard and power outlets, open from 7:30 for muffin, hot-sandwich and toast breakfast sets, then spice curry, pasta and pizza at lunch, and a warm rice-flour carrot cake. Run by a church. Closed Monday; Sundays to noon.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per reviews: a café in a renovated Kyoto townhouse, run by the HPC church (December 2025); the curry comes from another curry shop (June 2025).',
      philosophy: null, specialty: 'Breakfast sets; rice-flour carrot cake.',
      anecdotes: [
        { text: 'A May 2025 couple, searching for the nearest early breakfast, found it opened at 7:30 and had ham-and-cheese hot sandwich and muffin sets with salad, half an egg and yogurt.', source: R + 'B504384365/' },
        { text: 'A March 2026 visitor praised the ¥650 carrot cake, served slightly warmed so the inside stayed fluffy.', source: R + 'B525640073/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、下京区高辻町587、火〜土7:30〜16:00 (料理L.O.14:30・ドリンクL.O.15:30)、日7:30〜12:00 (料理L.O.9:30)、月曜休み、カード・電子マネー・QR 可。口コミ (2025年5月〜2026年8月、英語): 町家を改装、中庭、電源席、先に注文と支払い、キリスト教会 HPC の運営、ハムとチーズのマフィンやホットサンドのセット (サラダ、ゆで卵半分、ヨーグルト、ドリンク)、チーズトースト、チーズとベーコンのピザ1,300円、ほかのカレー店のスパイスカレー (ポークとキーマ)、パスタ、米粉のキャロットケーキ650円、抹茶のチーズケーキ、室町高辻、烏丸の少し西。',
      confidence: 'medium', sources: [TB, R + 'B504384365/', R + 'B508220665/', R + 'B516200656/', R + 'B520518526/', R + 'B521984566/', R + 'B522026934/', R + 'B522027628/', R + 'B523433914/', R + 'B525640073/', R + 'B527000846/', R + 'B534312319/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay at the counter, then take a seat. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高辻町587',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.999644, 135.758119); cross-checked: GSI 京都府京都市下京区高辻町587番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522027628/', R + 'B525640073/'],
    price_note: 'Prices from February and March 2026.', last_checked: TODAY, items: [
      it('', '', 'Ham-and-cheese muffin breakfast set', '', 'Breakfast', 'no', 'no', 'May 2025 and February 2026.', 'muffin_set'),
      it('', '', 'Cheese and bacon pizza', '¥1,300', 'Food', 'no', 'no', 'February 2026.', 'pizza'),
      it('', '', 'Rice-flour carrot cake', '¥650', 'Sweets', 'ask', 'no', 'March 2026.', 'carrot_cake'),
    ] }, {
    cuisine: '7:30から朝食の町家のカフェ・ハムとチーズのマフィンやホットサンドのセット (サラダ、ゆで卵半分、ヨーグルト、ドリンク) (2025年5月、2026年2月)・チーズトーストのセット (2026年3月)・チーズとベーコンのピザ1,300円 (2026年2月)・ほかのカレー店のスパイスカレー、ポークとキーマ (2025年6月)・パスタ (2026年2月)・米粉のキャロットケーキ650円 (2025年12月、2026年3月)、抹茶のチーズケーキ (2025年10月)',
    neighborhood: '室町高辻。四条烏丸',
    gf_detail: '要確認。マフィン、ホットサンド、トースト、ピザ、パスタなど小麦が中心だが、米粉のキャロットケーキがある (2025年12月、2026年3月)。小麦不使用かは不明。',
    vegan_detail: 'ヴィーガン不可。ハムとチーズの朝食セットに卵とヨーグルト、ポークカレー、チーズケーキ (2025〜2026年の口コミ)。',
    notes: '[町家のカフェ・室町高辻] 中庭と電源席のある広い改装町家のカフェ。7:30からマフィン、ホットサンド、トーストの朝食セット、昼はスパイスカレー、パスタ、ピザ。温かい米粉のキャロットケーキも。教会の運営。月曜休み、日曜は正午まで。',
  });
}

// ================================================================ コモンバル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036986/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://common-room.jp/commondining/';
  const WD = day(['11:00', '14:00'], ['17:00', '22:00']); const WE = day(['15:00', '22:00']);
  put({
    id: 'kyoto_common_bal_gojo', name: '肉料理とクラフトビールの洋風居酒屋 コモンバル (common bal)', category: 'OMNI',
    lat: 34.998982, lng: 135.758463, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried chicken (yurinchi, chicken nanban, tulip chicken), gyoza, spring rolls, curry and craft beer (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-focused menu — fried chicken, sausages, gyoza; set meals with miso soup (2025–26 reviews).',
    hours_raw: 'Weekdays 11:00–14:00 (last order 13:30) and 17:00–22:00 (last order 21:00); weekends and holidays 15:00–22:00 (last order 21:00); closing days vary (Tabelog; shop site). 「サービス料＋チャージ料なし」 — no service or cover charge (Tabelog). Cards, e-money and QR (Tabelog). 27 seats at tables, partitioned four-seat tables by the door (Tabelog; August 2025). Busy at the lunch peak (June 2026). Ground floor of a building with a co-working space upstairs, about five minutes from Gojo Station (August 2025, June 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gojo-Karasuma',
    cuisine: 'Meat-and-craft-beer bar with set-meal lunches · lunch sets with rice, miso soup, a small side and salad: yurinchi fried chicken (August 2025, June 2026), chicken nanban, special curry, daily special (June 2026) · evening: shrimp spring rolls, gyoza, sausages, tulip chicken with bonito flakes (October 2026) · craft beer',
    website: SITE, gmaps: gm('コモンバル 京都 五条'), menu_url: TB,
    notes: '[Meat & craft beer · Gojo-Karasuma] A casual meat-and-craft-beer bar near Gojo-Karasuma: weekday set-meal lunches — yurinchi, chicken nanban, curry, daily special — with rice, miso soup and salad, then gyoza, spring rolls, sausages and tulip chicken with beer in the evening. Formerly Common Dining; the long-time chef left in May 2026.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the shop site and reviews: run by 共栄商事株式会社; formerly コモンダイニング (Common Dining), whose long-time chef left in May 2026 (May 2026 review); renamed common bal.',
      philosophy: 'Per the shop site: 「「いつもの」がある場所」 — a place for your usual.', specialty: 'Yurinchi; chicken nanban lunch.',
      anecdotes: [
        { text: 'A June 2026 regular, usually on the daily special, recommends the chicken nanban or special curry sets, each with rice, miso soup, a side and salad.', source: R + 'B529834327/' },
        { text: 'An October 2026 evening diner singled out the shrimp spring rolls and tulip chicken dressed with bonito flakes.', source: R + 'B537147456/' },
      ],
      japanese_sources_summary: '公式サイト: 運営は共栄商事株式会社、「いつもの」がある場所、こだわりの肉料理とシェフ自慢の創作料理、平日11:00〜14:00・17:00〜22:00、土日・祝日15:00〜22:00。食べログ: バル・肉バル・居酒屋、下京区玉津島町294 1F、L.O.は昼13:30・夜21:00、休みは不定、サービス料＋チャージ料なし、カード・電子マネー・QR 可、27席、旧店名コモンダイニング。口コミ (2025年8月〜2026年10月、英語): 油淋鶏、チキン南蛮、特製カレー、日替わり、ご飯・味噌汁・小鉢・サラダ付き、2026年5月に長年のシェフが退く、2階はコワーキングスペース、五条駅から徒歩約5分、夜は海老の春巻き、餃子、ソーセージ、かつお節のチューリップ。',
      confidence: 'medium', sources: [SITE, TB, R + 'B468292238/', R + 'B512450312/', R + 'B516798891/', R + 'B529834327/', R + 'B531483810/', R + 'B537147456/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Come just before or after the noon peak for lunch. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区玉津島町294 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through October 2026, after the May 2026 chef change.' },
    pin_source: `Tabelog ${TB} (34.998982, 135.758463); GSI matched only the town 京都府京都市下京区玉津島町 (no lot), 29m — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529834327/', R + 'B537147456/'],
    price_note: 'No prices quoted in 2025–26 reviews; reviewers report ¥1,000–1,999 at lunch.', last_checked: TODAY, items: [
      it('', '', 'Yurinchi lunch set', '', 'Lunch', 'no', 'no', 'August 2025 and June 2026.', 'yurinchi'),
      it('', '', 'Chicken nanban lunch set', '', 'Lunch', 'no', 'no', 'June 2026.', 'chicken_nanban'),
      it('', '', 'Shrimp spring rolls', '', 'Evening', 'no', 'no', 'October 2026.', 'spring_rolls'),
    ] }, {
    cuisine: '定食の昼と夜のバルの肉料理とクラフトビールの店・ご飯、味噌汁、小鉢、サラダ付きの昼の定食: 油淋鶏 (2025年8月、2026年6月)、チキン南蛮、特製カレー、日替わり (2026年6月)・夜は海老の春巻き、餃子、ソーセージ、かつお節のチューリップ (2026年10月)・クラフトビール',
    neighborhood: '五条烏丸',
    gf_detail: 'グルテンフリーではない。油淋鶏、チキン南蛮、チューリップなどの揚げ物、餃子、春巻き、カレー、クラフトビール (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉中心のメニュー。揚げた鶏、ソーセージ、餃子、味噌汁付きの定食 (2025〜2026年の口コミ)。',
    notes: '[肉料理とクラフトビール・五条烏丸] 五条烏丸近くの気軽な肉料理とクラフトビールの店。平日の昼は油淋鶏、チキン南蛮、カレー、日替わりの定食 (ご飯、味噌汁、サラダ付き)、夜は餃子、春巻き、ソーセージ、チューリップとビール。旧コモンダイニング、長年のシェフは2026年5月に退いた。',
  });
}

save();
