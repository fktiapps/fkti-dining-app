// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 66.
//   + さざんか亭 六角 Sazanka Tei Rokkaku (huge student-favourite izakaya off Kiyamachi Sanjo) — rest
//   + 先斗町 鈴 Pontocho Suzu (obanzai, sushi and shabu-shabu with Kyoto and Shiga sake, open to 1 am) — rest
//   + 韓国居酒屋 ssom Korean Izakaya ssom (neon Korean izakaya open until dawn, Kiyamachi Sanjo) — rest
//   + ステーキなか彦 Steak Nakahiko (teppan steak of Kumamoto wagyu and Olive Beef, Gion) — rest
//   - skip 26020792 ケンタッキーフライドチキン 河原町三条店 (chain)
//   - skip 26003950 いも松 木屋町店 (same brand already in data)
//   - skip 26043814 本鮪と創作和食 吟醸くらうど にしき雲 (same brand already in data)
//   - skip 26023102 ミクニ (one of five or more Mikuni restaurants)
//   - skip 26017564 タリーズコーヒー 京都寺町通り店 (chain)
//   - skip 26032252 クレープおじさん 新京極店 (chain)
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: さざんか亭 本店 was skipped as
//   temporarily closed (26004084, osw13-90) — the Rokkaku shop is a separate listing with reviews through September 2026 and no
//   closure notice, so drafted; no rulings for いも松, にしき雲/吟醸くらうど, 鈴, ミクニ, ssom, タリーズ, クレープおじさん or なか彦.
//   Same-name counts first (2026-11-07): さざんか亭 — 本店 and 六角. 先斗町 鈴 — one. ssom — one. なか彦 — one in Kyoto (the Aichi
//   "Nakahiko" listings are unrelated). None of the four is in data/kyoto.json.
//   Service charges per Tabelog's Japanese original: 鈴 「12/28から1/3までまで年末年始料金500円頂きます。コース料金はプラス1000円になります。」;
//   なか彦 「サービス料 ランチタイム330円 ディナータイム550円 （税込）」; さざんか亭 and ssom none listed. No halal claims; no owner deaths;
//   no single-review remarks about other diners kept.
//   Pins re-checked against current main: 鈴 sat 4.6 m from kyoto_eau_de_vie_pontocho (same building) — offset 5.5 m west; ssom sat
//   2.5 m from kyoto_aoi_obanzai (same building) — offset 4.4 m south.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-66');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26020792', 'chain: Kentucky Fried Chicken — a national fast-food chain (https://tabelog.com/en/kyoto/A2601/A260301/26020792/).');
skip('26003950', 'same-concept branch of a brand already in data: いも松 — data has いも松 北別館 (kyoto_imo_matsu_kita_bekkan) (https://tabelog.com/en/rstLst/?sw=%E3%81%84%E3%82%82%E6%9D%BE).');
skip('26043814', 'same-concept branch of a brand already in data: 本鮪と創作和食 吟醸くらうど — data has the 丸太町本店 (kyoto_ginjo_kuraudo_marutamachi) (https://tabelog.com/en/rstLst/?sw=%E3%81%AB%E3%81%97%E3%81%8D%E9%9B%B2).');
skip('26023102', 'five or more same-name shops: Gion MIKUNI is the Western restaurant of chef Kiyomitsu Mikuni (Hotel de Mikuni), whose Mikuni restaurants Tabelog also lists in Yokohama, Sapporo, Izu Kogen and Tokyo (L\'art et Mikuni) (https://tabelog.com/en/rstLst/?sw=%E3%83%9F%E3%82%AF%E3%83%8B%20%E4%BA%AC%E9%83%BD).');
skip('26017564', 'chain: Tully\'s Coffee — a national coffee chain (https://tabelog.com/en/kyoto/A2601/A260201/26017564/).');
skip('26032252', 'chain: Crepe Ojisan — Tabelog lists shops at Nishiki Market, AEON Itami, Mozo Gifu, Odaiba, AEON Mall Kitaoji and Shinkyogoku (https://tabelog.com/en/rstLst/?sw=%E3%82%AF%E3%83%AC%E3%83%BC%E3%83%97%E3%81%8A%E3%81%98%E3%81%95%E3%82%93).');

// ================================================================ さざんか亭 六角
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003992/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_sazanka_tei_rokkaku', name: 'さざんか亭 六角 (Sazanka Tei Rokkaku)', category: 'OMNI',
    lat: 35.007528, lng: 135.770712, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ham cutlets, skewered fried dishes and kushikatsu lead the menu (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, duck, ham cutlets, fried skewers (2017–26 reviews).',
    hours_raw: 'Daily except Wednesday 17:00–22:30 (last order 22:00); closed 1 January; sometimes open on Wednesdays (Tabelog). Reservations accepted; banquet courses with all-you-can-drink for large groups (Tabelog; September 2023; June 2025). Cards (VISA, Master, JCB, AMEX) and QR incl. PayPay; no e-money (Tabelog). A very large venue — Tabelog lists 900 seats, a June 2026 review about 800 — with private rooms for 20–30 or more (Tabelog). Non-smoking (Tabelog). Dairoku Kanko Building, Kiyamachi south of Sanjo, 3 min from Keihan Sanjo (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi, south of Sanjo — Keihan Sanjo',
    cuisine: 'A huge Showa-style izakaya that almost every Kyoto university student is said to know (June 2026) · banquet plates with all-you-can-drink, e.g. ¥5,000 with Malt\'s beer and Jim Beam highballs (September 2023); sashimi of tuna and sea bream, salad with prosciutto (June 2025) · ham cutlets, homemade egg omelette, fried skewers, handmade rice balls; Gekkeikan sake (May 2025) · kushikatsu (September 2026) · sashimi platter, negitoro maki, duck loin (October 2017)',
    website: null, gmaps: gm('さざんか亭 六角'), menu_url: TB,
    notes: '[Izakaya · Kiyamachi Sanjo, a giant student favourite] A vast, Showa-flavoured izakaya off Kiyamachi Sanjo with hundreds of seats and big banquet rooms, said to be visited by almost every Kyoto university student: cheap all-you-can-drink courses, ham cutlets, fried skewers, sashimi and rice balls. Easy to walk into when smaller places are full. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya with very large seating and private rooms near Kiyamachi Sanjo; the main shop, さざんか亭 本店, is a separate listing. A June 2026 review says almost every Kyoto university student has been here.',
      philosophy: null, specialty: 'Banquet courses; fried skewers.',
      anecdotes: [
        { text: 'A May 2025 visitor recommends it when popular places have queues, for ham cutlets, homemade omelette and rice balls with Gekkeikan.', source: R + 'B509519677/' },
        { text: 'A May 2025 passer-by ducked in out of a sudden shower and was glad of it.', source: R + 'B506864504/' },
        { text: 'A June 2026 visitor was struck by the size — about 800 seats — and the view over the streets.', source: R + 'B530323242/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区木屋町三条下る材木町183 第六観光ビル、京阪三条駅から徒歩3分、水曜以外17:00〜22:30 (L.O. 22:00)、1月1日休み、水曜も営業することあり、予約可、カード・QR 可、900席、個室 (20〜30名以上)、禁煙。口コミ (2017年10月〜2026年9月、英語): 京都の大学生ならほとんど誰もが行ったことがあるという巨大な店 (約800席)、飲み放題付きの宴会 5,000円、まぐろと鯛の刺身、生ハムのサラダ、ハムカツ、自家製の卵焼き、串揚げ、手作りのおにぎり、月桂冠、串カツ、昭和の居酒屋の雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B304318334/', R + 'B438901911/', R + 'B464977757/', R + 'B470963980/', R + 'B486073342/', R + 'B506060991/', R + 'B506864504/', R + 'B509519677/', R + 'B512822783/', R + 'B519861521/', R + 'B530323242/', R + 'B535372218/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Good for walk-ins and big groups; banquet courses with all-you-can-drink. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町三条下る材木町183 第六観光ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026 (the separate main shop is temporarily closed).' },
    pin_source: `Tabelog ${TB} (35.007528, 135.770712); cross-checked: GSI 京都府京都市中京区材木町183番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B470963980/'],
    price_note: 'One course price from September 2023.', last_checked: TODAY, items: [
      it('', '', 'Banquet course with all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'September 2023.', 'enkai'),
      it('', '', 'Ham cutlet', '', 'Fried', 'no', 'no', 'May 2025.', 'hamkatsu'),
      it('', '', 'Handmade rice balls', '', 'Rice', 'ask', 'ask', 'May 2025.', 'onigiri'),
    ] }, {
    cuisine: '京都の大学生ならほとんど誰もが行ったことがあるという昭和の雰囲気の巨大な居酒屋 (2026年6月)・飲み放題付きの宴会の大皿、例えばモルツとジムビームのハイボールで5,000円 (2023年9月)、まぐろと鯛の刺身、生ハムのサラダ (2025年6月)・ハムカツ、自家製の卵焼き、串揚げ、手作りのおにぎり、月桂冠 (2025年5月)・串カツ (2026年9月)・刺身の盛り合わせ、ねぎとろ巻き、鴨ロース (2017年10月)',
    neighborhood: '木屋町、三条の南。京阪三条駅',
    gf_detail: 'グルテンフリーではない。ハムカツ、串揚げ、串カツが中心 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、鴨、ハムカツ、串揚げ (2017〜2026年の口コミ)。',
    notes: '[居酒屋・木屋町三条、学生に人気の巨大な店] 木屋町三条近くの、数百席と大きな宴会場を持つ昭和の香りの巨大な居酒屋。京都の大学生ならほとんど誰もが行ったことがあるという店。安い飲み放題のコース、ハムカツ、串揚げ、刺身、おにぎり。小さな店が満席のときにも入りやすい。水曜休み。',
  });
}

// ================================================================ 先斗町 鈴
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041690/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '01:00']);
  put({
    id: 'kyoto_pontocho_suzu', name: '先斗町 鈴 (Pontocho Suzu)', category: 'OMNI',
    lat: 35.007539, lng: 135.770884, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sushi, shabu-shabu and motsu-nabe, plus fried seaweed (Tabelog; 2025 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, sushi, shabu-shabu and motsu-nabe (Tabelog; 2025 reviews).',
    hours_raw: 'Daily 15:00–1:00 (last order 0:30) (Tabelog). Reservations accepted (Tabelog). Year-end and New Year surcharge, 28 December to 3 January: ¥500, courses +¥1,000 (Tabelog, Japanese text: 「12/28から1/3までまで年末年始料金500円頂きます。コース料金はプラス1000円になります。」); a January 2026 diner was charged ¥2,000 per person on New Year\'s Day. Cards, e-money and QR (Tabelog). 30 seats (Tabelog). Non-smoking (Tabelog). Pontocho 92 Building 2F, on the west side of Pontocho beside the Kaburenjo, 3 min from Sanjo (Tabelog). Opened 1 August 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Pontocho, beside the Kaburenjo — Sanjo',
    cuisine: 'Casual sushi, shabu-shabu and obanzai from domestic ingredients and Kyoto vegetables, with about 20 Kyoto and Shiga sakes and a ¥1,500 tasting set (Tabelog) · Kyoto-style obanzai (February 2025) · sashimi platters of three or five kinds; deep-fried fresh seaweed; daikon salad (August and November 2025) · all-you-can-drink courses; soft drinks for families (Tabelog)',
    website: null, gmaps: gm('先斗町 鈴'), menu_url: TB,
    notes: '[Obanzai and sake · Pontocho, open to 1 am] A second-floor Pontocho izakaya near the Kaburenjo serving obanzai, sushi, shabu-shabu and motsu-nabe with about 20 sakes from Kyoto and Shiga, from mid-afternoon to 1:00. Reviews are mixed: some praise the obanzai and hospitality, others report slow service and frozen sashimi. Steep surcharges over New Year.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya opened in August 2024 offering sushi, shabu-shabu and obanzai from domestic ingredients and Kyoto vegetables, with Kyoto and Shiga sake.',
      philosophy: null, specialty: 'Obanzai; Kyoto and Shiga sake.',
      anecdotes: [
        { text: 'A February 2025 diner called the obanzai elegant and gentle, and the hospitality even better.', source: R + 'B501628961/' },
        { text: 'An August 2025 diner watched the five-kind sashimi thaw on the plate.', source: R + 'B512013672/' },
        { text: 'A January 2025 New Year\'s Day party waited over 30 minutes for first drinks with only two staff on.', source: R + 'B498491829/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・もつ鍋・しゃぶしゃぶ、中京区先斗町三条下る材木町183 先斗町92ビル 2F、三条駅から徒歩3分、毎日15:00〜翌1:00 (L.O. 0:30)、予約可、12月28日〜1月3日は年末年始料金500円とコース+1000円、カード・電子マネー・QR 可、30席、禁煙、2024年8月1日オープン、国産食材と京野菜の寿司・しゃぶしゃぶ・おばんざい、京都と滋賀の地酒約20種と飲み比べ1,500円。口コミ (2025年1月〜2026年1月、英語): 京風おばんざい、刺身の盛り合わせ、生のりの揚げ物、大根のサラダ、サービスが遅い、冷凍の刺身との声も、正月料金1人2,000円。',
      confidence: 'low', sources: [TB, R + 'B498488620/', R + 'B498491829/', R + 'B501296539/', R + 'B501435474/', R + 'B501628961/', R + 'B501681175/', R + 'B502302359/', R + 'B510786389/', R + 'B512013672/', R + 'B518209113/', R + 'B518633693/', R + 'B520116777/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Avoid New Year week (surcharges); ask about the sake tasting sets. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町三条下る材木町183 先斗町92ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.007539, 135.770944), offset 5.5 m west: kyoto_eau_de_vie_pontocho is on 3F of the same building (4.6 m away); cross-checked: GSI 京都府京都市中京区材木町183番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Tasting-set price from Tabelog; New Year surcharges.', last_checked: TODAY, items: [
      it('', '', 'Obanzai', '', 'Obanzai', 'ask', 'no', 'February 2025.', 'obanzai'),
      it('', '', 'Sashimi platter (three or five kinds)', '', 'Sashimi', 'ask', 'no', 'August and November 2025.', 'sashimi'),
      it('', '', 'Kyoto and Shiga sake tasting set', '¥1,500', 'Sake', 'ask', 'ask', 'Tabelog.', 'nomikurabe'),
    ] }, {
    cuisine: '国産の食材と京野菜の気軽な寿司、しゃぶしゃぶ、おばんざい、京都と滋賀の地酒約20種と1,500円の飲み比べセット (食べログ)・京風おばんざい (2025年2月)・刺身の3種や5種の盛り合わせ、生のりの揚げ物、大根のサラダ (2025年8月・11月)・飲み放題のコース、家族向けのソフトドリンク (食べログ)',
    neighborhood: '先斗町、歌舞練場の横。三条',
    gf_detail: '要確認。おばんざい、寿司、しゃぶしゃぶ、もつ鍋、揚げ物 (食べログ、2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、寿司、しゃぶしゃぶ、もつ鍋 (食べログ、2025年の口コミ)。',
    notes: '[おばんざいと地酒・先斗町、深夜1時まで] 歌舞練場近くの先斗町のビル2階の居酒屋。おばんざい、寿司、しゃぶしゃぶ、もつ鍋を京都と滋賀の地酒約20種と、昼過ぎから深夜1時まで。口コミは賛否で、おばんざいともてなしを褒める声と、提供の遅さや冷凍の刺身を指摘する声がある。年末年始は加算料金。',
  });
}

// ================================================================ 韓国居酒屋 ssom
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042098/'; const R = TB + 'dtlrvwlst/';
  const H = day(['19:00', '05:00']); const FS = day(['18:00', '06:00']);
  put({
    id: 'kyoto_korean_izakaya_ssom', name: '韓国居酒屋 ssom (Korean Izakaya ssom)', category: 'OMNI',
    lat: 35.007657, lng: 135.770685, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried chicken, cheese balls, tteokbokki and ramen (2024–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried chicken, budae jjigae, skewered oden (2024–25 reviews).',
    hours_raw: 'Mon–Thu and Sun 19:00–5:00; Fri–Sat 18:00–6:00; open all year (Tabelog). Reservations accepted; whole-floor hire for over 50 (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 81 seats (Tabelog). A designated smoking room (Tabelog). All-you-can-drink available (March 2025). Tablets with chat and game features at the tables (October 2025). New Kyoto Building 4F, Kiyamachi near Sanjo, 4 min from Sanjo (Tabelog; October 2025). Opened 8 November 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: FS, 5: FS, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, south of Sanjo — Sanjo',
    cuisine: 'Korean dishes and drinks from a Korean owner, with K-pop and neon (Tabelog; 2024–25 reviews) · kettle-simmered skewered oden ¥1,990 (December 2024; October 2025) · cheese balls ¥890, budae jjigae for two ¥1,990, fried chicken 400 g ¥2,390 (honey butter or yangnyeom +¥300) (October 2025) · tomato cream tteokbokki (March 2025); "Tornado Tower" (October 2025)',
    website: null, gmaps: gm('韓国居酒屋 ssom 京都'), menu_url: TB,
    notes: '[Korean izakaya · Kiyamachi Sanjo, open until dawn] A big, neon-lit fourth-floor Korean izakaya run by a Korean owner, with K-pop on the screens, tablets for chatting and games, and shareable Korean comfort food — kettle oden, budae jjigae, 400 g of fried chicken, cheese balls, tomato cream tteokbokki — until 5:00 or 6:00. Cash only; smoking room.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), Korean (Tabelog)'], origin: 'Korea (Tabelog)',
      background: 'Per Tabelog: a Korean izakaya on Kiyamachi opened in November 2024, with Korean music, food and drinks from a Korean owner.',
      philosophy: null, specialty: 'Korean izakaya dishes.',
      anecdotes: [
        { text: 'A December 2024 visitor in the opening weeks found coins to collect for special services alongside the kettle oden.', source: R + 'B497994050/' },
        { text: 'An October 2025 visitor felt transported to Seoul by the neon on stepping out of the lift.', source: R + 'B515295846/' },
        { text: 'A January 2025 diner found the ramen noodles too firm but the staff kind.', source: R + 'B499971601/' },
      ],
      japanese_sources_summary: '食べログ: 韓国料理、中京区材木町181-2 ニュー京都ビル 4F、三条駅から徒歩4分、月〜木・日19:00〜翌5:00、金土18:00〜翌6:00、年中無休、予約可、貸切50名以上、現金のみ、81席、喫煙室あり、2024年11月8日オープン、韓国人の店主の韓国の音楽と料理と酒。口コミ (2024年10月〜2025年10月、英語): ネオンと K-POP、卓のタブレットでチャットやゲーム、釜の串おでん1,990円、チーズボール890円、budae jjigae 2人前1,990円、フライドチキン400g 2,390円、トマトクリームの tteokbokki、飲み放題。',
      confidence: 'medium', sources: [TB, R + 'B497994050/', R + 'B499971601/', R + 'B502940212/', R + 'B503545587/', R + 'B514847560/', R + 'B515136310/', R + 'B515295846/', R + 'B515694976/', R + 'B516318268/', R + 'B516956395/', R + 'B533014514/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by tablet; cash only; open until dawn. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町181-2 ニュー京都ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2025.' },
    pin_source: `Tabelog ${TB} (35.007697, 135.770685), offset 4.4 m south: kyoto_aoi_obanzai is on 1F of the same building (2.5 m away); cross-checked: GSI 京都府京都市中京区材木町181番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515694976/', R + 'B497994050/'],
    price_note: 'Prices from December 2024 and October 2025; cash only.', last_checked: TODAY, items: [
      it('', '', 'Kettle-simmered skewered oden', '¥1,990', 'Hot dishes', 'ask', 'no', 'December 2024; October 2025.', 'oden'),
      it('', '', 'Fried chicken (400 g)', '¥2,390', 'Chicken', 'no', 'no', 'Honey butter or yangnyeom +¥300; October 2025.', 'chicken'),
      it('', '', 'Budae jjigae (for two)', '¥1,990', 'Hot pots', 'no', 'no', 'October 2025.', 'budae'),
      it('', '', 'Cheese balls', '¥890', 'Snacks', 'no', 'no', 'October 2025.', 'cheese_balls'),
    ] }, {
    cuisine: '韓国人の店主の韓国料理とお酒、K-POP とネオン (食べログ、2024〜2025年の口コミ)・釜の串おでん1,990円 (2024年12月、2025年10月)・チーズボール890円、2人前の budae jjigae 1,990円、400gのフライドチキン2,390円 (ハニーバターか yangnyeom は+300円) (2025年10月)・トマトクリームの tteokbokki (2025年3月)、Tornado Tower (2025年10月)',
    neighborhood: '木屋町、三条の南。三条',
    gf_detail: 'グルテンフリーではない。フライドチキン、チーズボール、tteokbokki、ラーメン (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。フライドチキン、budae jjigae、串おでん (2024〜2025年の口コミ)。',
    notes: '[韓国居酒屋・木屋町三条、夜明けまで] 韓国人の店主が営む、ネオンの輝くビル4階の大きな韓国居酒屋。画面に K-POP、卓のタブレットでチャットやゲーム、釜のおでん、budae jjigae、400gのフライドチキン、チーズボール、トマトクリームの tteokbokkiを朝5〜6時まで。現金のみ、喫煙室あり。',
  });
}

// ================================================================ ステーキなか彦
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035570/'; const R = TB + 'dtlrvwlst/';
  const M = day(['17:00', '22:00']); const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_steak_nakahiko_gion', name: 'ステーキなか彦 (Steak Nakahiko)', category: 'OMNI',
    lat: 35.00243, lng: 135.774281, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan steak, Chateaubriand shabu-shabu and garlic rice (2021–25 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu steak house (2021–26 reviews).',
    hours_raw: 'Mon 17:00–22:00; Tue–Sat 11:30–14:00 and 17:00–22:00 (last orders 13:30 and 21:00); closed Sunday; Monday holidays by reservation only (Tabelog). Reservation only (Tabelog). Service charge: lunch ¥330, dinner ¥550, incl. tax (Tabelog, Japanese text: 「サービス料 ランチタイム330円 ディナータイム550円 （税込）」). Cards and QR; no e-money (Tabelog). 38 seats: a counter of 8 and tables for 10 and 20; a second floor (Tabelog; February 2023). Non-smoking (Tabelog). In Gion south of Shijo, near Hanamikoji, 5 min from Gion-Shijo exit 6; moved a short way in 2024 (Tabelog; August and December 2024). Opened 1 July 2000 (Tabelog).',
    hours: { 0: M, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, south of Shijo near Hanamikoji — Gion-Shijo',
    cuisine: 'Teppan steak of carefully chosen beef such as Kumamoto wagyu and Shikoku Olive Beef, with seasonal Kyoto vegetables, about 15 French wines and a few sakes (Tabelog) · Chateaubriand; Chateaubriand shabu-shabu (August 2021; March 2024) · melt-in-the-mouth steak; garlic rice (May and September 2025) · custom combinations on request (December 2024) · birthday surprises with fruit plates and flowers (August 2023; September 2025)',
    website: null, gmaps: gm('ステーキなか彦 祇園'), menu_url: TB,
    notes: '[Teppan steak · Gion, since 2000] A reservation-only teppan steak house in Gion, open since 2000, grilling Kumamoto wagyu and Shikoku Olive Beef with Kyoto vegetables at a shiny counter: Chateaubriand, a Chateaubriand shabu-shabu, standout garlic rice and French wines, with a friendly owner and celebration surprises. Service charge ¥330 at lunch, ¥550 at dinner.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as friendly (2024–26 reviews)'], origin: null,
      background: 'Per Tabelog: a teppan steak restaurant opened in July 2000, serving high-quality beef such as Kumamoto wagyu and Shikoku Olive Beef with seasonal Kyoto vegetables. An August 2024 regular notes it had moved a short distance.',
      philosophy: 'Serving each dish at its most delicious moment; local produce for local consumption (Tabelog).', specialty: 'Wagyu teppan steak; garlic rice.',
      anecdotes: [
        { text: 'A December 2024 regular says the owner will build a custom combination if asked in advance.', source: R + 'B498196514/' },
        { text: 'A September 2025 diner was surprised with a fruit plate and a bouquet.', source: R + 'B514883708/' },
        { text: 'A March 2024 diner tried Chateaubriand shabu-shabu for the first time after a concert.', source: R + 'B483651039/' },
      ],
      japanese_sources_summary: '食べログ: ステーキ・ハンバーグ・鉄板焼き、東山区祇園町南側570-1、京阪祇園四条駅6番出口から徒歩5分、月17:00〜22:00、火〜土11:30〜14:00と17:00〜22:00 (L.O. 13:30、21:00)、日曜休み、月曜祝日は予約のみ、完全予約制、サービス料は昼330円・夜550円 (税込)、カード・QR 可、38席 (カウンター8、テーブル10と20)、禁煙、2000年7月1日オープン、熊本の和牛や四国のオリーブ牛など上質な肉と京野菜、フランスワイン約15種と日本酒。口コミ (2021年8月〜2026年6月、英語): シャトーブリアン、シャトーブリアンのしゃぶしゃぶ、とろけるステーキ、ガーリックライス、相談すれば好みの組み合わせ、誕生日のサプライズ、気さくな店主、移転。',
      confidence: 'medium', sources: [TB, R + 'B440346688/', R + 'B460523400/', R + 'B466521239/', R + 'B469785341/', R + 'B476899368/', R + 'B483651039/', R + 'B490746494/', R + 'B498022930/', R + 'B498196514/', R + 'B506757039/', R + 'B514883708/', R + 'B529975065/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; mention celebrations or preferences when booking. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.002430, 135.774281); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 132m — a large lot; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506757039/'],
    price_note: 'No item prices in the sources; service charge ¥330 lunch, ¥550 dinner.', last_checked: TODAY, items: [
      it('', '', 'Teppan steak (wagyu)', '', 'Steak', 'ask', 'no', '2025 reviews.', 'steak'),
      it('', '', 'Chateaubriand shabu-shabu', '', 'Steak', 'ask', 'no', 'March 2024.', 'chateaubriand_shabu'),
      it('', '', 'Garlic rice', '', 'Rice', 'ask', 'no', 'May 2025.', 'garlic_rice'),
    ] }, {
    cuisine: '熊本の和牛や四国のオリーブ牛など厳選した牛肉の鉄板ステーキに旬の京野菜、フランスワイン約15種と日本酒数種 (食べログ)・シャトーブリアン、シャトーブリアンのしゃぶしゃぶ (2021年8月、2024年3月)・とろけるステーキ、ガーリックライス (2025年5月・9月)・相談すれば好みの組み合わせ (2024年12月)・誕生日にはフルーツの盛り合わせや花束のサプライズ (2023年8月、2025年9月)',
    neighborhood: '祇園、四条の南、花見小路の近く。祇園四条駅',
    gf_detail: '要確認。鉄板のステーキ、シャトーブリアンのしゃぶしゃぶ、ガーリックライス (2021〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛のステーキ店 (2021〜2026年の口コミ)。',
    notes: '[鉄板ステーキ・祇園、2000年から] 2000年開業、祇園の完全予約制の鉄板ステーキ店。磨かれた鉄板で熊本の和牛や四国のオリーブ牛を京野菜とともに焼く。シャトーブリアン、シャトーブリアンのしゃぶしゃぶ、評判のガーリックライス、フランスワイン。気さくな店主と祝いのサプライズも。サービス料は昼330円、夜550円。',
  });
}

save();
