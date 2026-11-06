// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 33.
//   + チャコール Charcoal (charcoal grill and wine in a machiya, Shijo Karasuma; sister of STEM and LOTUS)
//   + 八坂 Yasaka (teppanyaki with French technique facing the Yasaka Pagoda, Park Hyatt Kyoto)
//   + 七条ふたば Nanajou Futaba (mame mochi and wagashi to take away, Shichijo Omiya)
//   + 洋食彩酒 アンプリュス Yoshoku Saishu Anpurusu (yoshoku and bistro dishes with natural wine, Shijo Omiya)
//   - skip 26040268 京焼肉つじ (sister concept of the national Menya Yuko group)
//   Same-name counts first, per brand or operator (2026-11-06): チャコール — the official site (lotus0610.com) runs three
//   shops in one Shijo Karasuma alley: スモーク＆グリル ロータス, 炭火焼×ワイン チャコール and スタンド酒場 ステム; STEM is in
//   data (kyoto_stand_sakaba_stem) — a local group, sister concept drafted. 八坂 — one; Park Hyatt Kyoto has no hotel-wide
//   record (its café KYOTO BISTRO is a separate Tabelog listing). 七条ふたば — one shop; reviewers call it a branch of, or a
//   separate shop split from, 出町ふたば (in data) — drafted and flagged. アンプリュス — one.
//   京焼肉つじ — reviews (September and October 2026) say it is run by the group behind 麺屋 優光; Tabelog lists seven
//   Menya Yuko shops (Kyoto ×2, Nagoya, Fukuoka, Hokkaido, Okazaki, Osaka) and three Kyo Yakiniku Tsuji (Karasuma Oike,
//   Kitayama, Nishiazabu): a national group, so not a local sister concept (integrator 2026-11-06) — skipped.
//   Taken on 2026-11-06: `next core 200` (lane) gave 京焼肉つじ 26040268 (skip), チャコール 26020006 and 八坂 26033254;
//   `next notable 200` (lane) gave 七条ふたば 26017156 and アンプリュス 26029636. None is in data/kyoto.json: grep by name
//   and address (炭之座町416, 高台寺桝屋町360, 大工町120-2, 壬生賀陽御所町64-18) found none.
//   Service charges per Tabelog's Japanese original: 八坂 「サービス料15%」; アンプリュス 「なし」; チャコール and 七条ふたば
//   none listed. No halal claims in any source.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-33');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040268', 'sister concept of a national group: reviews (https://tabelog.com/en/kyoto/A2601/A260202/26040268/dtlrvwlst/B536314270/, September 2026; B537165394, October 2026) say 京焼肉つじ is run by the group behind 麺屋 優光, which Tabelog lists in Kyoto, Nagoya, Fukuoka, Hokkaido, Okazaki and Osaka (https://tabelog.com/en/rstLst/?sw=%E5%84%AA%E5%85%89), alongside Kyo Yakiniku Tsuji shops in Kitayama and Nishiazabu — not a local group.');

// ================================================================ チャコール
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020006/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://www.lotus0610.com/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_charcoal_shijo', name: 'チャコール (Charcoal)', category: 'OMNI',
    lat: 35.004048, lng: 135.755969, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: pasta (penne, peperoncino), bread with the ajillo, macaroni salad (2025–26 reviews). Ask about the charcoal-grilled meat and vegetables.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and the shop grills seasonal vegetables over charcoal (official site); most courses include meat and fish.',
    hours_raw: 'Mon–Sat 17:00–24:00 (last order 23:00); closed Sunday (Tabelog). Reservations accepted; same-day cancellations are charged for the meals booked (Tabelog). Cards and PayPay, no e-money (Tabelog). 38 seats: a counter downstairs, sunken-kotatsu seating and private rooms upstairs; private hire up to 20 (Tabelog; June 2025). Heated tobacco only in a designated area; smoking outside the entrance (Tabelog). Children and strollers welcome (Tabelog). In an alley between Shijo and Nishinotoin; 3 min from Shijo Karasuma Stn exit 24 (Tabelog; September 2026). One unisex restroom, with a queue on a busy night (October 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo Karasuma, an alley off Kamanza — 3 min from Shijo Stn',
    cuisine: 'Charcoal-grilled vegetables and meat with plenty of wine in a renovated machiya (official site) · five-item appetizer platter with mackerel macaroni salad (August 2026) · garlic-heavy ajillo with bread (April 2025; August 2026) · steak with mashed potatoes, carpaccio, smoked mackerel, avocado (May 2026) · grilled edamame, chicken with a tsukimi sauce (November 2026) · cheese penne, Gorgonzola cream penne, shirasu peperoncino (May–September 2026) · course with all-you-can-drink ¥5,500 (September 2026)',
    website: OF, gmaps: gm('炭火焼×ワイン チャコール 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Charcoal grill and wine · Shijo Karasuma, a machiya in a back alley] A hidden machiya with a bar counter downstairs and sunken-kotatsu rooms upstairs, grilling seasonal vegetables and meat over charcoal to go with a long wine list — plus ajillo, appetizer platters and penne. Courses with all-you-can-drink from ¥5,500 suit groups; staff are lively, though big parties slow the kitchen. Open to midnight; closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site (lotus0610.com): one of three shops in the same Shijo Karasuma back alley — the Italian bar スモーク＆グリル ロータス, this machiya dining room 炭火焼×ワイン チャコール with private rooms and sunken-kotatsu seats upstairs, and the standing bar スタンド酒場 ステム.',
      philosophy: 'Vegetables chosen down to harvest time and size, and carefully selected meat, each grilled over charcoal (official site).', specialty: 'Charcoal-grilled meat and vegetables; ajillo.',
      anecdotes: [
        { text: 'A September 2026 group of nine had a ¥5,500 course with all-you-can-drink upstairs; one guest found the red wine served too warm, and the staff cheerfully took the group photo.', source: R + 'B535839394/' },
        { text: 'A May 2026 diner loved the mashed potatoes with the steak and found the sunken-kotatsu seats surprisingly cosy for an Italian place.', source: R + 'B528746133/' },
        { text: 'An October 2025 diner liked the meat but found the rest average and queued 15 minutes for the single restroom.', source: R + 'B515042309/' },
      ],
      japanese_sources_summary: '公式サイト: 四条烏丸の路地裏の3店 (スモーク＆グリル ロータス、炭火焼×ワイン チャコール、スタンド酒場 ステム)、チャコールは町屋を改装した隠れ家のようなイタリアン、旬の野菜と厳選した肉の炭焼きと豊富なワイン、2階に個室と掘りごたつ席。食べログ: イタリアン・バル・居酒屋、中京区釜座通炭之座町416、四条烏丸駅24番出口から徒歩3分、月〜土17:00〜24:00 (L.O. 23:00)、日曜休み、予約可 (当日キャンセルは料理代)、カード・PayPay 可、38席、加熱式たばこの喫煙所、子供可、ベジタリアンメニューあり。口コミ (2025年4月〜2026年11月、英語): アヒージョとパン、前菜5種盛り、ステーキとマッシュポテト、ペンネ、しらすのペペロンチーノ、飲み放題付きコース5,500円、明るい店員、トイレが一つ。',
      confidence: 'medium', sources: [TB, OF, R + 'B426220140/', R + 'B505076674/', R + 'B505305639/', R + 'B506295312/', R + 'B506974834/', R + 'B508388914/', R + 'B515042309/', R + 'B528349464/', R + 'B528746133/', R + 'B532090602/', R + 'B533732412/', R + 'B535839394/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book and order à la carte or a course; friendly, energetic staff (2025–26 reviews). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区釜座通炭之座町416',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004048, 135.755969); cross-checked: GSI 京都府京都市中京区炭之座町 (town only; no lot match) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535839394/', R + 'B533732412/'],
    price_note: 'One course price from a September 2026 review; other prices not found.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥5,500', 'Courses', 'no', 'no', 'September 2026.', 'course_nomihodai'),
      it('', '', 'Assorted appetizers (5)', '', 'Starters', 'ask', 'no', 'August 2026.', 'antipasto'),
      it('', '', 'Ajillo with bread', '', 'Dishes', 'no', 'ask', 'April 2025; August 2026.', 'ajillo'),
      it('', '', 'Gorgonzola cream penne', '', 'Pasta', 'no', 'no', 'August 2026.', 'gorgonzola_penne'),
    ] }, {
    cuisine: '町屋を改装した店で、旬の野菜と厳選した肉の炭焼きを豊富なワインと (公式サイト)・鯖のマカロニサラダの入る前菜5種盛り (2026年8月)・にんにくたっぷりのアヒージョとパン (2025年4月、2026年8月)・ステーキとマッシュポテト、カルパッチョ、鯖の燻製、アボカド (2026年5月)・焼き枝豆、月見ソースの鶏 (2026年11月)・チーズのペンネ、ゴルゴンゾーラクリームのペンネ、しらすのペペロンチーノ (2026年5月〜9月)・飲み放題付きコース5,500円 (2026年9月)',
    neighborhood: '四条烏丸、釜座通の路地。四条駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。パスタ (ペンネ、ペペロンチーノ)、アヒージョのパン、マカロニサラダ (2025〜2026年の口コミ)。炭焼きの肉と野菜は要確認。',
    vegan_detail: '要確認。食べログではベジタリアンメニューあり、旬の野菜を炭で焼く (公式サイト)。コースの多くは肉と魚が入る。',
    notes: '[炭焼きとワイン・四条烏丸、路地裏の町屋] 1階はバーカウンター、2階は掘りごたつと個室の隠れ家の町屋。旬の野菜と肉を炭で焼き、豊富なワインと。アヒージョ、前菜の盛り合わせ、ペンネも。飲み放題付きコース5,500円からで宴会向き。店員は元気だが、大人数のときは料理が遅れることも。24時まで、日曜休み。',
  });
}

// ================================================================ 八坂 (Park Hyatt Kyoto)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033254/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '19:30'], ['20:00', '22:30']);
  put({
    id: 'kyoto_yasaka_park_hyatt', name: '八坂 (Yasaka, Park Hyatt Kyoto)', category: 'OMNI',
    lat: 34.999037, lng: 135.780834, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppanyaki courses cooked with French technique — beurre blanc and other sauces, an onion soufflé (2022–25 reviews); no gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; the courses centre on Omi and Kuroge wagyu, shrimp and fish (2022–26 reviews).',
    hours_raw: 'Two dinner sittings daily, 17:00–19:30 and 20:00–22:30; open all year (Tabelog). Reservation only (Tabelog). Service charge 15% (Tabelog, Japanese text: 「サービス料15%」). Cards incl. UnionPay; no e-money or QR (Tabelog). Counter seats around teppan stations facing the Yasaka Pagoda — 20 per Tabelog, 10 at two stations per a May 2022 review; private hire up to 20 (Tabelog). Guests aged 12 and over (Tabelog reservation notes; elsewhere Tabelog says 10 and over). No sleeveless sports tops, tank tops, sportswear or open-toed sandals; dress shorts are fine (Tabelog). Wheelchair accessible; hotel valet parking ¥2,000 for up to 4 hours with a restaurant visit (Tabelog). In Park Hyatt Kyoto, 6 min from the Higashiyama Yasui bus stop (Tabelog). Opened 30 October 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kodaiji, in Park Hyatt Kyoto — 6 min from Higashiyama Yasui bus stop',
    cuisine: 'Teppanyaki cooked with French technique at counters facing the Yasaka Pagoda — come for sunset (2022–26 reviews) · the Seiryu course with a 130 g Omi beef strip loin steak (May 2025); Kuroge wagyu, seasonal vegetables and seafood (October 2024) · Wakayama ashiaka shrimp and fish with beurre blanc, an onion soufflé (May 2022); fromage frais with caviar and cucumber, summer Kyoto ingredients (August 2025); sea urchin with cucumber (June 2024) · wine pairings from Ruinart Blanc de Blancs or Krug, and a non-alcoholic pairing (2022–25 reviews) · a ¥20,000 course plus a bottle came to ¥36,000 each (May 2022)',
    website: 'https://www.hyatt.com/ja-JP/hotel/japan/park-hyatt-kyoto/itmph', gmaps: gm('Park Hyatt Kyoto Yasaka'), menu_url: TB + 'dtlmenu/',
    notes: '[Teppanyaki · Kodaiji, the Park Hyatt’s counter facing the Yasaka Pagoda] Park Hyatt Kyoto’s main dining room: teppan counters with the Yasaka Pagoda and the roofs of Higashiyama filling the window, where chefs cook Omi beef, shrimp and seasonal Kyoto produce with French sauces. Book a sitting near sunset. Courses from about ¥20,000, plus 15% service and pricey wine; English explanations. Guests 12 and over; no sportswear.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: the teppanyaki and French restaurant of Park Hyatt Kyoto, opened 30 October 2019. A May 2022 review called it the hotel’s main dining room and named Chef Kanpei Kuki, formerly Michelin-starred at La Truffière in Paris, as bringing French technique to the teppan; no current source confirms who leads the kitchen now. A March 2022 review places it on the 4th floor.',
      philosophy: null, specialty: 'Teppanyaki with French technique; Omi beef.',
      anecdotes: [
        { text: 'A May 2022 diner booked an hour before sunset to watch the Yasaka Pagoda over champagne, and called the 15% service charge “a body blow”.', source: R + 'B449487068/' },
        { text: 'An August 2025 diner on the day after the Okuribi watched an evening shower and then the sunset over the pagoda through the window.', source: R + 'B512481636/' },
        { text: 'An August 2024 diner found many overseas guests and the English explanations well done.', source: R + 'B490013669/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼・フレンチ・イノベーティブ、東山区高台寺桝屋町360、Park Hyatt Kyoto 内、東山安井バス停から徒歩6分、毎日17:00〜19:30・20:00〜22:30、予約のみ、サービス料15%、カード可 (銀聯含む)、カウンター20席、12歳以上 (別項では10歳以上)、ドレスコード (スポーツウェア・タンクトップ・サンダル不可)、車椅子可、ベジタリアンメニューあり、2019年10月30日オープン。口コミ (2022年3月〜2026年8月、英語): 八坂の塔を望むカウンター、夕日の時間がおすすめ、鉄板でフランス料理の技法、Omi の牛肉のステーキ130g、Wakayama の海老、ワインとノンアルコールのペアリング、英語の説明、料理長の名前は2022年5月の口コミのみ。',
      confidence: 'medium', sources: [TB, R + 'B446839755/', R + 'B449487068/', R + 'B455135511/', R + 'B484780764/', R + 'B490013669/', R + 'B491791996/', R + 'B506853405/', R + 'B507024816/', R + 'B512481636/', R + 'B514594017/', R + 'B533653108/', R + 'B536306196/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests and well-done English explanations (August 2024). Book a sitting; guests 12 and over; no sportswear or open-toed sandals.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区高台寺桝屋町360',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (hotel restaurant); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.999037, 135.780834); cross-checked: GSI 京都府京都市東山区桝屋町360番地 (lot; GSI does not know the 高台寺 prefix) 87m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B449487068/', R + 'B506853405/'],
    price_note: 'A ¥20,000 course in May 2022; 15% service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Teppanyaki course', '¥20,000', 'Dinner', 'ask', 'ask', 'May 2022.', 'teppan_course'),
      it('', '', 'Seiryu course (Omi beef strip loin, 130 g)', '', 'Dinner', 'ask', 'no', 'May 2025.', 'seiryu_course'),
      it('', '', 'Wine or non-alcoholic pairing', '', 'Drinks', '', 'ask', '2024–25 reviews.', 'pairing'),
      it('', '', 'Service charge', '15%', 'Charge', '', '', 'Tabelog.', 'service_charge'),
    ] }, {
    cuisine: '八坂の塔に向いたカウンターで、フランス料理の技法の鉄板焼き。夕日の時間がおすすめ (2022〜2026年の口コミ)・Omi の牛ロース130gのステーキの Seiryu のコース (2025年5月)、黒毛和牛、季節の野菜と魚介 (2024年10月)・Wakayama の海老 (ashiaka)、ブールブランの魚、玉ねぎのスフレ (2022年5月)、フロマージュ・フレとキャビアと胡瓜、夏の京都の食材 (2025年8月)、ウニと胡瓜 (2024年6月)・Ruinart や Krug から始まるワインのペアリング、ノンアルコールのペアリングも (2022〜2025年の口コミ)・20,000円のコースとボトルで一人36,000円 (2022年5月)',
    neighborhood: '高台寺、ホテルの中。東山安井バス停から徒歩6分',
    gf_detail: '要確認。フランス料理の技法の鉄板焼きのコースで、ブールブランなどのソース、玉ねぎのスフレ (2022〜2025年の口コミ)。グルテンの情報はない。',
    vegan_detail: '要確認。食べログではベジタリアンメニューあり。コースは Omi の牛肉や黒毛和牛、海老、魚が中心 (2022〜2026年の口コミ)。',
    notes: '[鉄板焼き・高台寺、八坂の塔を望むホテルのカウンター] ホテルのメインダイニング。窓いっぱいに八坂の塔と東山の屋根が広がる鉄板のカウンターで、Omi の牛肉、海老、季節の京都の食材をフランス料理のソースで。夕日の頃の席がおすすめ。コースは約20,000円からで、サービス料15%、ワインは高め。英語の説明あり。12歳以上、スポーツウェア不可。',
  });
}

// ================================================================ 七条ふたば
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26017156/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_nanajou_futaba', name: '七条ふたば (Nanajou Futaba)', category: 'OMNI',
    lat: 34.989085, lng: 135.750411, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice-cake sweets — mame mochi dusted with flour, daifuku, ohagi, dango, warabi mochi (2026 reviews); the dusting flour is not identified.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mochi, red peas and bean paste, but no ingredient information.',
    hours_raw: 'Wed–Sun 9:00–17:00; closed Monday and Tuesday (Tabelog). Take-away only. CASH ONLY — no cards, e-money or QR (Tabelog; September 2026). Orders by phone (Tabelog). Goods may not be ready right at opening (September 2026), and by about 16:00 much has sold out (August 2026). On Shichijo east of Omiya; 2 min from the Shichijo Omiya bus stop (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shichijo east of Omiya — 2 min from Shichijo Omiya bus stop',
    cuisine: 'Mame mochi — soft mochi with salted red peas and smooth bean paste — ¥250 in September 2026 (¥200 in August 2024, ¥180 in December 2023) · mame daifuku, two for ¥500 (October 2026); black bean daifuku, chestnut daifuku that often sells out (October 2026) · chestnut steamed yokan (September and October 2026) · ohagi, tsukimi dango, warabi mochi (September 2026); inoko mochi (October 2026) · chestnut sekihan, small ¥450 (October 2026) · small boxed bento (September 2026)',
    website: null, gmaps: gm('七条ふたば'), menu_url: TB,
    notes: '[Wagashi · Shichijo Omiya, the other Futaba mame mochi] A small shop on Shichijo selling mame mochi in the Futaba style — salted red peas and smooth bean paste in soft mochi, ¥250 — plus daifuku, ohagi, chestnut yokan and sekihan, with none of Demachi Futaba’s queues. Reviewers find it close to Demachi’s, a little different in texture and salt. Cash only; go early, as things sell out. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Reviewers describe the link to 出町ふたば differently: an August 2026 reviewer researched it and found it is not a branch but a separate shop; a September 2026 reviewer calls it a spin-off; other September and October 2026 reviewers call it a branch. No official source was found.',
      philosophy: null, specialty: 'Mame mochi.',
      anecdotes: [
        { text: 'An August 2026 visitor bought mame mochi like those a seminar professor used to bring to class, with four left at about 16:00.', source: R + 'B532935247/' },
        { text: 'A September 2026 Kyoto regular cycles here instead of queueing for Futaba at Takashimaya, and found the salt and bean paste balance unmistakably Futaba.', source: R + 'B535999425/' },
        { text: 'A September 2026 visitor ate the mame mochi and chestnut yokan while waiting for the dolphin show at the nearby Kyoto Aquarium.', source: R + 'B535911740/' },
      ],
      japanese_sources_summary: '食べログ: 和菓子・大福、下京区七条通大宮東入大工町120-2、七条大宮バス停から徒歩2分、水〜日9:00〜17:00、月火休み、予約可、カード・電子マネー・QR 不可。口コミ (2023年11月〜2026年10月、英語): 豆餅250円 (2024年8月は200円、2023年12月は180円)、豆大福2個500円、黒豆大福、栗大福、栗蒸し羊羹、おはぎ、月見団子、わらび餅、亥の子餅、栗赤飯 (小) 450円、夕方には売り切れも、出町ふたばとの関係は口コミにより「支店」「別の店」「暖簾分け」とさまざま。',
      confidence: 'medium', sources: [TB, R + 'B474741071/', R + 'B532935247/', R + 'B534947642/', R + 'B535125240/', R + 'B535488130/', R + 'B535911740/', R + 'B535959168/', R + 'B535999425/', R + 'B537385109/', R + 'B537534575/', R + 'B537845680/', R + 'B538395472/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point and buy at the counter; cash only; pleasant staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通大宮東入大工町120-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989085, 135.750411); cross-checked: GSI 京都府京都市下京区大工町120番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B474741071/', R + 'B537385109/', R + 'B537845680/'],
    price_note: 'Prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mame mochi', '¥250', 'Mochi', 'ask', 'ask', 'September 2026.', 'mame_mochi'),
      it('', '', 'Mame daifuku (2)', '¥500', 'Mochi', 'ask', 'ask', 'October 2026.', 'mame_daifuku'),
      it('', '', 'Chestnut sekihan (small)', '¥450', 'Rice', 'ask', 'ask', 'October 2026.', 'kuri_sekihan'),
      it('', '', 'Chestnut steamed yokan', '', 'Seasonal', 'ask', 'ask', 'September and October 2026.', 'kuri_mushi_yokan'),
    ] }, {
    cuisine: '豆餅 (塩味の赤えんどうとこし餡を柔らかい餅で) 2026年9月は250円 (2024年8月は200円、2023年12月は180円)・豆大福2個500円 (2026年10月)、黒豆大福、売り切れの多い栗大福 (2026年10月)・栗蒸し羊羹 (2026年9月・10月)・おはぎ、月見団子、わらび餅 (2026年9月)、亥の子餅 (2026年10月)・栗赤飯 (小) 450円 (2026年10月)・小さな弁当 (2026年9月)',
    neighborhood: '七条通、大宮の東。七条大宮バス停から徒歩2分',
    gf_detail: '要確認。粉をまぶした豆餅、大福、おはぎ、団子、わらび餅など餅の菓子 (2026年の口コミ)。まぶす粉の種類は不明。',
    vegan_detail: '要確認。餅、赤えんどう、餡だが、原材料の情報はない。',
    notes: '[和菓子・七条大宮、もう一つのふたばの豆餅] 七条通の小さな店。ふたばの流れの豆餅 (塩味の豆とこし餡を柔らかい餅で、250円) のほか、大福、おはぎ、栗蒸し羊羹、赤飯。出町ふたばのような行列はない。口コミでは出町に近い味で、食感や塩加減が少し違うとの声。現金のみ。売り切れるので早めに。月火休み。',
  });
}

// ================================================================ 洋食彩酒 アンプリュス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26029636/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['18:00', '21:30']);
  put({
    id: 'kyoto_yoshoku_anpurusu', name: '洋食彩酒 アンプリュス (Yoshoku Saishu Anpurusu)', category: 'OMNI',
    lat: 35.003433, lng: 135.744496, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: crab cream croquette, fried shrimp, chicken and fillet katsu, demi-glace hamburg steak (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, beef stew, duck, shrimp and crab dishes (2024–26 reviews).',
    hours_raw: 'Lunch 11:30–13:30, dinner 18:00–21:30 (last order 20:30); closed Tuesday, Wednesday and irregularly (Tabelog). Reservations accepted and, per the shop, a must; lunch can be fully booked (Tabelog; October 2025). Cards and PayPay, no e-money (Tabelog). No cover charge (Tabelog, Japanese text: 「なし」). A few counter seats at the front, tables down a narrow passage at the back with a window onto a shrine approach (November 2025). 3 min from Hankyu Omiya and Randen Shijo-Omiya Stns (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo Omiya — 3 min from Omiya Stn',
    cuisine: 'Yoshoku and bistro cooking with organic vegetables from producers, natural wine and champagne, with pairings (Tabelog, shop text) · Anpurusu lunch: amuse-bouches such as carrot mousse and a mushroom-walnut pâté canapé, salad, and a choice of five mains (November 2025; January 2026) · Anpurusu plate of demi-glace hamburg steak, fried shrimp and crab cream croquette, ¥1,870 (August 2024; 2025–26 reviews) · Ladies’ set ¥3,960, domestic beef tenderloin steak ¥4,400 (August 2024) · beef stew, shrimp gratin (September 2026) · chicken katsu with oriental sauce (August 2025) · homemade mini canelés and langue de chat with coffee (May 2025) · glasses of wine from ¥1,000 (August 2024)',
    website: null, gmaps: gm('洋食彩酒 アンプリュス'), menu_url: TB + 'dtlmenu/',
    notes: '[Yoshoku bistro · Shijo Omiya, demi-glace and natural wine] A small neighbourhood yoshoku house where the owner-chef chats across the counter: a rich demi-glace hamburg steak, shrimp fry and crab cream croquette on the Anpurusu plate, beef stew and bistro à la carte at night, with natural wines and homemade canelés to finish. Regulars come back a dozen times; book, as lunch fills. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who talks with guests at the counter (Tabelog, shop text)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): authentic bistro cooking at an affordable price, organic vegetables bought directly from producers, and natural wines and champagnes chosen to pair. An October 2025 first-timer felt it was a homey place run by a couple.',
      philosophy: 'Authentic flavours in a relaxed setting, for special occasions or an ordinary meal (Tabelog, shop text).', specialty: 'Demi-glace hamburg steak; the Anpurusu plate.',
      anecdotes: [
        { text: 'A May 2025 regular on an eighth visit asked for a fruity white and was poured a southern French wine with a summer-citrus nose — and found the milk for the tea properly warmed.', source: R + 'B443417813/' },
        { text: 'An October 2025 diner, turned away from a fully booked lunch the month before, booked dinner and was the only party there.', source: R + 'B514765812/' },
        { text: 'A January 2026 diner ate the fried shrimp whole, head and all.', source: R + 'B520813245/' },
      ],
      japanese_sources_summary: '食べログ: 洋食・フレンチ・ビストロ、中京区壬生賀陽御所町64-18 マキシムⅢ 1F、大宮駅・四条大宮駅から徒歩3分、昼11:30〜13:30、夜18:00〜21:30 (L.O. 20:30)、火水休み (不定休あり)、予約可、カード・PayPay 可、チャージなし。店の紹介 (英訳): 生産者直送の有機野菜、自然派ワインとシャンパーニュ、ペアリング、カウンターで店主と話せる、予約必須。口コミ (2023年11月〜2026年9月、英語): アンプリュスプレート (ハンバーグ、海老フライ、蟹クリームコロッケ) 1,870円、レディースセット3,960円、国産牛ヒレステーキ4,400円、ビーフシチュー、チキンカツ、自家製のカヌレとラングドシャ、昼は満席のことも。',
      confidence: 'medium', sources: [TB, R + 'B443417813/', R + 'B475024150/', R + 'B477897529/', R + 'B508313921/', R + 'B510813390/', R + 'B512256523/', R + 'B514765812/', R + 'B516375885/', R + 'B517167902/', R + 'B517695689/', R + 'B520813245/', R + 'B520826227/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; choose a main from the lunch set or order à la carte; the owner-chef talks with guests at the counter. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区壬生賀陽御所町64-18 マキシムⅢ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.003433, 135.744496); cross-checked: GSI 京都府京都市中京区壬生賀陽御所町64番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B475024150/'],
    price_note: 'Prices from an August 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Anpurusu plate', '¥1,870', 'Lunch', 'no', 'no', 'Hamburg steak, fried shrimp, crab cream croquette (August 2024; January 2026).', 'anpurusu_plate'),
      it('', '', 'Ladies’ set', '¥3,960', 'Lunch', 'no', 'no', 'August 2024.', 'ladies_set'),
      it('', '', 'Domestic beef tenderloin steak', '¥4,400', 'Mains', 'ask', 'no', 'August 2024.', 'tenderloin'),
      it('', '', 'Wine of the day (glass)', '¥1,000', 'Drinks', '', 'ask', 'August 2024.', 'glass_wine'),
    ] }, {
    cuisine: '生産者直送の有機野菜、自然派ワインとシャンパーニュ、ペアリングで楽しむ洋食とビストロ料理 (食べログの店の紹介)・アンプリュスランチ: 人参のムース、きのこと胡桃のパテのカナッペなどのアミューズ、サラダ、5種から選ぶメイン (2025年11月、2026年1月)・デミグラスのハンバーグ、海老フライ、蟹クリームコロッケのアンプリュスプレート1,870円 (2024年8月、2025〜2026年の口コミ)・レディースセット3,960円、国産牛ヒレステーキ4,400円 (2024年8月)・ビーフシチュー、海老グラタン (2026年9月)・オリエンタルソースのチキンカツ (2025年8月)・コーヒーに自家製のミニカヌレとラングドシャ (2025年5月)・グラスワイン1,000円から (2024年8月)',
    neighborhood: '四条大宮。大宮駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。蟹クリームコロッケ、海老フライ、チキンカツやヒレカツ、デミグラスのハンバーグ (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハンバーグ、ビーフシチュー、鴨、海老や蟹の料理 (2024〜2026年の口コミ)。',
    notes: '[洋食ビストロ・四条大宮、デミグラスと自然派ワイン] 店主がカウンター越しに話す、町の小さな洋食屋。濃いデミグラスのハンバーグ、海老フライ、蟹クリームコロッケのアンプリュスプレート、夜はビーフシチューやビストロのアラカルトを、自然派ワインと。締めは自家製のカヌレ。十回以上通う常連も。昼は埋まるので予約を。火水休み。',
  });
}

save();
