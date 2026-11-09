// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 100.
//   + 田村よしたか (long-running yakitori and chicken-sashimi izakaya on Gokomachi above Takeyamachi) — rest
//   + ETRA (エトラ) (French-trained owner’s one-woman café by the Lake Biwa Canal, Shogoin) — rest
//   + GOKAGO (ゴカゴ) (matcha tea stand on Kiyomizu-zaka, matcha whisked to order) — rest
//   - skip 26015188 並河商店 (retail food shop, Greg 11-07 ruling)
//   + 一怜縁 (family-run Japanese black-tea house near Marutamachi; scones by day, sake by night) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches. Same-name counts (2026-11-08): one
//   each; GOKAGO — Tabelog’s search shows only this shop under that name.
//   None of the drafted shops is in data/kyoto.json.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; single-review remarks about other diners
//   and staff looks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-100');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26015188', 'retail food shop (Greg 11-07 ruling): 並河商店 is a neighbourhood tofu shop selling tofu, yuba and okara to take home; no founding date or GF/vegan claim sourced (https://tabelog.com/en/kyoto/A2601/A260101/26015188/).');

// ================================================================ 田村よしたか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26018194/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '00:00']);
  put({
    id: 'kyoto_tamura_yoshitaka', name: '田村よしたか', category: 'OMNI',
    lat: 35.016493, lng: 135.766561, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakitori with tare, chicken sashimi with soy sauce, hot pot (2024–25 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken sashimi, yakitori, liver, chicken hot pot (2024–25 reviews).',
    hours_raw: 'Tue–Sun 18:00–24:00 (last order midnight); closed Monday, but open on holiday Mondays (Tabelog). Cards (AMEX) and PayPay (Tabelog). 16 seats: 8 at the counter, 8 in a tatami room at the back (Tabelog; 2013 review). A dim, unmarked front you can’t see into, in a residential stretch of Gokomachi-dori just above Takeyamachi (2024–25 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gokomachi-Takeyamachi — Marutamachi',
    cuisine: 'Yakitori and chicken izakaya · fresh chicken sashimi and an assorted sashimi platter (February and July 2025) · yakitori of many cuts, including rarer parts (February 2025) · liver (August 2024) · chicken hot pot in the back room (older reviews)',
    website: null, gmaps: gm('田村よしたか 京都 御幸町'), menu_url: TB,
    notes: '[Yakitori · Gokomachi-Takeyamachi] A long-running hidden yakitori counter in a residential lane near Marutamachi, behind a door you can’t see through: chicken sashimi, a sashimi platter and skewers of many cuts, from a friendly chef. Open to midnight; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed), described as friendly (February 2025)'], origin: null,
      background: 'Per reviews: a yakitori izakaya on Gokomachi-dori known to regulars for over twenty years (2013 review).',
      philosophy: null, specialty: 'Chicken sashimi; yakitori of rarer cuts.',
      anecdotes: [
        { text: 'A February 2025 first-timer found it a hidden gem in a residential area, with fresh chicken sashimi, many unfamiliar cuts on skewers and a friendly chef.', source: R + 'B501583894/' },
        { text: 'A July 2025 visitor, curious about the unmarked door, ordered the sashimi platter and four skewers and pronounced the yakitori delicious.', source: R + 'B510863270/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋、中京区御幸町通竹屋町上ル毘沙門町546-2、火〜日18:00〜24:00 (L.O.24:00)、月曜休み (祝日は営業)、カード (AMEX)・PayPay 可、カウンター8席と座敷8席。口コミ (2024年8月〜2025年7月、英語): 住宅地の隠れ家、中が見えない入口、新鮮な鶏の刺身、刺身の盛り合わせ、珍しい部位の焼き鳥、きも、気さくな大将。',
      confidence: 'low', sources: [TB, R + 'B490392458/', R + 'B501583894/', R + 'B510863270/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Push open the unmarked door; ask the chef for the day’s sashimi and skewers. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通竹屋町上ル毘沙門町546-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2025.' },
    pin_source: `Tabelog ${TB} (35.016493, 135.766561); cross-checked: GSI 京都府京都市中京区毘沙門町546番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501583894/'],
    price_note: 'No 2025 prices quoted; reviewers report ¥4,000–7,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Chicken sashimi', '', 'Sashimi', 'ask', 'no', 'February 2025.', 'tori_sashi'),
      it('', '', 'Assorted sashimi platter', '', 'Sashimi', 'ask', 'no', 'July 2025.', 'sashimi'),
      it('', '', 'Yakitori, assorted cuts', '', 'Yakitori', 'ask', 'no', 'February and July 2025.', 'yakitori'),
    ] }, {
    cuisine: '焼き鳥と鶏料理の居酒屋・新鮮な鶏の刺身と刺身の盛り合わせ (2025年2月・7月)・珍しい部位も含む焼き鳥 (2025年2月)・きも (2024年8月)・奥の座敷で鶏の鍋 (以前の口コミ)',
    neighborhood: '御幸町竹屋町。丸太町',
    gf_detail: 'グルテンフリーではない。たれの焼き鳥、醤油で食べる鶏の刺身、鍋 (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の刺身、焼き鳥、きも、鶏の鍋 (2024〜2025年の口コミ)。',
    notes: '[焼き鳥・御幸町竹屋町] 丸太町近くの住宅地の、中が見えない扉の奥の長く続く焼き鳥のカウンター。鶏の刺身、刺身の盛り合わせ、いろいろな部位の焼き鳥を気さくな大将から。深夜0時まで、月曜休み。',
  });
}

// ================================================================ ETRA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26038438/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://etra-kyoto.square.site/';
  const H = day(['09:00', '17:00']); const F = day(['09:00', '16:00']);
  put({
    id: 'kyoto_etra_shogoin', name: 'ETRA (エトラ)', category: 'OMNI',
    lat: 35.015334, lng: 135.776007, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: French toast, waffles, choux pastry, canelés, cakes and sandwiches (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French toast with bacon and eggs, cream puffs, cakes (2025–26 reviews). A caffeine-free chai and teas are the plant-based choices to ask about.',
    hours_raw: 'Mon, Tue, Sat, Sun 9:00–17:00; Friday 9:00–16:00; closed Wednesday and Thursday (Tabelog). Breakfast plates in the morning and a soup-and-bread lunch set; lunch can end before closing (May and July 2026). Coffee refills ¥350 (July 2026). Cards, e-money and QR (Tabelog). A small glass-walled room with a greenhouse-like terrace and plants; people work here (December 2025, February 2026). Run by its owner alone (October 2025). Along the Lake Biwa Canal near the red-brick power station, about ten minutes from Jingu-Marutamachi (October and November 2025).',
    hours: { 0: H, 1: H, 4: F, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin, by the Lake Biwa Canal — Okazaki',
    cuisine: 'Parisian-style café of French pastries and brunch · breakfast plate ¥1,700: butter waffle, French toast crisp with caramel, bacon and eggs, salad, with soup or bread (October 2025); breakfast set with soup and a drink ¥2,400 (December 2025) · freshly baked chouquettes and choux au craquelin with cream, custard and caramel dips (March 2026) · rum canelé, whisky-blend coffee (November 2025) · carrot cake with dried fruit, banana cake, cream puffs (2026 reviews) · BLT and other sandwiches, soup-and-bread lunch (May and July 2026) · caffeine-free chai, Marco Polo tea',
    website: SITE, gmaps: gm('ETRA エトラ 京都 聖護院'), menu_url: SITE,
    notes: '[French café · Lake Biwa Canal] A small glass-walled café by the canal near Okazaki, run single-handed by an owner who trained in France: crisp caramelised French toast and waffles for breakfast, chouquettes and choux with dips, canelés and carrot cake, and soup-and-bread lunches. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), trained in France, who runs the café alone (October 2025)'], origin: null,
      background: 'Per reviews: a café opened in Kyoto by an owner who trained in France, serving French pastries, breakfast plates and lunch (October 2025, March 2026).',
      philosophy: null, specialty: 'French toast; chouquettes with dips.',
      anecdotes: [
        { text: 'An October 2025 diner from the nearby hospital area had the ¥1,700 breakfast plate and found the French toast unlike any before — caramel-crisp outside, juicy inside.', source: R + 'B518972827/' },
        { text: 'A May 2026 visitor arrived after lunch had ended, and the owner made a BLT sandwich anyway.', source: R + 'B534919701/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ケーキ・スイーツ、左京区聖護院蓮華蔵町19-2、月火土日9:00〜17:00、金9:00〜16:00、水・木曜休み、カード・電子マネー・QR 可。口コミ (2025年10月〜2026年8月、英語): フランスで修業した店主が一人で営む、琵琶湖疏水沿い、赤レンガの発電所の近く、神宮丸太町駅から徒歩約10分、ガラス張りで温室のようなテラス、モーニングのプレート1,700円 (バターワッフル、キャラメリゼのフレンチトースト、ベーコンエッグ、サラダ、スープかパン)、朝のセット2,400円、焼きたてのシュケットとシュー・クラクランのディップ、ラムのカヌレ、キャロットケーキ、バナナケーキ、シュークリーム、BLT サンド、スープとパンのランチ、カフェインレスのチャイ、コーヒーのおかわり350円。',
      confidence: 'medium', sources: [SITE, TB, R + 'B513179845/', R + 'B517575602/', R + 'B518850603/', R + 'B518972827/', R + 'B519800149/', R + 'B522534667/', R + 'B524154610/', R + 'B531759540/', R + 'B534919701/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One person runs the café, so allow time. Some overseas visitors (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院蓮華蔵町19-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.015334, 135.776007); cross-checked: GSI 京都府京都市左京区聖護院蓮華蔵町19番地 (lot) 63m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518972827/', R + 'B519800149/'],
    price_note: 'Prices from October and December 2025 and July 2026.', last_checked: TODAY, items: [
      it('', '', 'Breakfast plate (waffle, French toast, bacon and eggs, salad)', '¥1,700', 'Breakfast', 'no', 'no', 'October 2025.', 'breakfast_plate'),
      it('', '', 'Chouquettes with dips', '', 'Pastries', 'no', 'no', 'March 2026.', 'chouquettes'),
      it('', '', 'Carrot cake', '', 'Cakes', 'no', 'no', 'February 2026.', 'carrot_cake'),
      it('', '', 'Coffee refill', '¥350', 'Drinks', 'ask', 'ask', 'July 2026.', 'refill'),
    ] }, {
    cuisine: 'パリ風のフランス菓子とブランチのカフェ・朝のプレート1,700円: バターワッフル、キャラメリゼのフレンチトースト、ベーコンエッグ、サラダ、スープかパン (2025年10月)、スープとドリンク付きの朝のセット2,400円 (2025年12月)・焼きたてのシュケットとクリーム、カスタード、キャラメルのディップのシュー・クラクラン (2026年3月)・ラムのカヌレ、ウイスキーブレンドのコーヒー (2025年11月)・ドライフルーツのキャロットケーキ、バナナケーキ、シュークリーム (2026年の口コミ)・BLT などのサンドイッチ、スープとパンのランチ (2026年5月・7月)・カフェインレスのチャイ、マルコポーロの紅茶',
    neighborhood: '聖護院、琵琶湖疏水沿い。岡崎',
    gf_detail: 'グルテンフリーではない。フレンチトースト、ワッフル、シュー、カヌレ、ケーキ、サンドイッチ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ベーコンエッグのフレンチトースト、シュークリーム、ケーキ (2025〜2026年の口コミ)。植物性ならカフェインレスのチャイや紅茶を要確認。',
    notes: '[フレンチカフェ・琵琶湖疏水] 岡崎近くの疏水沿い、フランスで修業した店主が一人で営むガラス張りの小さなカフェ。朝はキャラメリゼのフレンチトーストとワッフル、ディップで食べるシュケットやシュー、カヌレ、キャロットケーキ、昼はスープとパン。水・木曜休み。',
  });
}

// ================================================================ GOKAGO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039542/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'kyoto_gokago_kiyomizu', name: 'GOKAGO (ゴカゴ)', category: 'OMNI',
    lat: 34.995662, lng: 135.781861, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Matcha and hojicha lattes and matcha ice cream have no wheat sourced, but the matcha donut does (April and July 2026). No allergen information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Straight matcha and hojicha whisked to order may suit; the lattes use milk and the ice cream is dairy (2026 reviews). No plant-milk option is sourced.',
    hours_raw: 'Daily 10:30–18:00; closing days not fixed (Tabelog). Order, take a number, and watch your matcha whisked to order; queues are common (March–August 2026). Mostly takeaway, with a few seats inside when free (April 2026). Cards (VISA, Master, JCB, AMEX), e-money and QR (Tabelog). On Kiyomizu-zaka, about ten minutes from the Kiyomizu-michi bus stop (July 2026). Opened 28 April 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-zaka — Kiyomizu',
    cuisine: 'Uji matcha tea stand, whisked to order · rich Uji matcha latte ¥880, iced or hot (April and July 2026) · Uji matcha latte ¥700, matcha ice cream ¥350 (as a topping too), Uji matcha donut ¥380 (July 2026) · hojicha (May and August 2026)',
    website: null, gmaps: gm('GOKAGO 清水 抹茶'), menu_url: TB,
    notes: '[Matcha stand · Kiyomizu-zaka] A busy matcha stand on the slope up to Kiyomizu-dera where each cup of Uji matcha or hojicha is measured and whisked to order in front of you: rich matcha lattes, matcha ice cream and matcha donuts, mostly to take away. Expect a queue.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: a Uji matcha tea stand on Kiyomizu-zaka, opened 28 April 2023.',
      philosophy: null, specialty: 'Matcha whisked to order.',
      anecdotes: [
        { text: 'A March 2026 visitor watched the staff measure and whisk matcha for each group — slow, but worth it for matcha lovers.', source: R + 'B523924754/' },
        { text: 'A July 2026 visitor on the way to Kiyomizu-dera had a ¥700 matcha latte, matcha ice cream and a matcha donut.', source: R + 'B536132984/' },
      ],
      japanese_sources_summary: '食べログ: ティースタンド、東山区清水2-258、毎日10:30〜18:00、不定休、カード・電子マネー・QR 可、2023年4月28日オープン。口コミ (2026年3月〜8月、英語・日本語): 目の前で一杯ずつ点てる抹茶、番号で呼ばれる、行列、濃い宇治抹茶ラテ880円、宇治抹茶ラテ700円、抹茶アイス350円、宇治抹茶ドーナツ380円、ほうじ茶、ほぼ持ち帰り、空いていれば店内の椅子、清水坂、清水道のバス停から徒歩約10分。',
      confidence: 'medium', sources: [TB, R + 'B523924754/', R + 'B526721099/', R + 'B527034837/', R + 'B528819385/', R + 'B534462682/', R + 'B534628755/', R + 'B536132984/', R + 'B537738548/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order, take a number and wait to be called; many overseas visitors (March–August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区清水2-258',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.995662, 135.781861); GSI matched only 京都府京都市東山区清水二丁目 (chome, no lot) 186m — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536132984/', R + 'B537738548/'],
    price_note: 'Prices from April and July 2026.', last_checked: TODAY, items: [
      it('', '', 'Rich Uji matcha latte', '¥880', 'Drinks', 'ask', 'no', 'April and July 2026.', 'rich_latte'),
      it('', '', 'Uji matcha latte', '¥700', 'Drinks', 'ask', 'no', 'July 2026.', 'latte'),
      it('', '', 'Matcha ice cream', '¥350', 'Sweets', 'ask', 'no', 'July 2026.', 'matcha_ice'),
      it('', '', 'Uji matcha donut', '¥380', 'Sweets', 'no', 'ask', 'July 2026.', 'donut'),
    ] }, {
    cuisine: '注文してから点てる宇治抹茶のティースタンド・濃い宇治抹茶ラテ880円、アイスかホット (2026年4月・7月)・宇治抹茶ラテ700円、抹茶アイス350円 (トッピングも)、宇治抹茶ドーナツ380円 (2026年7月)・ほうじ茶 (2026年5月・8月)',
    neighborhood: '清水坂。清水',
    gf_detail: '要確認。抹茶やほうじ茶のラテ、抹茶アイスに小麦の情報はないが、抹茶ドーナツには小麦 (2026年4月・7月)。アレルゲンの情報なし。',
    vegan_detail: '要確認。目の前で点てる抹茶やほうじ茶はそのままなら合うかもしれないが、ラテは牛乳、アイスは乳製品 (2026年の口コミ)。植物性ミルクの情報なし。',
    notes: '[抹茶スタンド・清水坂] 清水寺へ向かう坂の人気の抹茶スタンド。宇治抹茶やほうじ茶を一杯ずつ計って目の前で点て、濃い抹茶ラテ、抹茶アイス、抹茶ドーナツをおもに持ち帰りで。行列を覚悟で。',
  });
}

// ================================================================ 一怜縁
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031886/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_ichireien_tea', name: '一怜縁', category: 'OMNI',
    lat: 35.014982, lng: 135.760572, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: scones and pound cake (2024–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The teas are plant-based, and the lunch is a vegetable-heavy set (2024–25 reviews), but scones come with clotted cream and no vegan dish is sourced.',
    hours_raw: 'Closed Tuesday and Friday; opening hours not listed on Tabelog — tea and lunch by day, and food with Japanese sake in the evening (January and September 2026). Family-run (2024 review). Cards (VISA, Master, JCB, AMEX, Diners) and transit IC (Tabelog). 14 seats (Tabelog). A quiet white room with wooden tables and jazz, tea served in Noritake cups (February and September 2026). Near Marutamachi, west of Karasuma (Tabelog; February 2026).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Marutamachi, west of Karasuma',
    cuisine: 'Tea house specialising in Japanese black tea · Japanese black teas such as Ureshino and Nansatsuma first flush, plus Darjeeling, Ceylon and Assam, served in a pot (2024–26 reviews) · scones with clotted cream and acacia honey, mini scones (September 2026) · pound cake (2024 review) · vegetable-led lunch set (2024–25 reviews) · spicy chai (November 2025) · in the evening, dishes with Japanese sake such as Daishinshu and Nagashima (January 2026)',
    website: null, gmaps: gm('一怜縁 京都 丸太町'), menu_url: TB,
    notes: '[Tea house · Marutamachi] A calm, white family-run tea room near Marutamachi devoted to Japanese black tea: pots of Ureshino or Nansatsuma first flush and classic Indian teas in Noritake cups, scones with clotted cream and honey, a vegetable-led lunch, and food with sake in the evening. Closed Tuesday and Friday.',
    chef_bio: { chef_name: null, roles: ['Family-run (2024 review)'], origin: null,
      background: 'Per reviews: a family-run tea specialist focused on Japanese black tea, a café by day and a dining spot with sake in the evening (2024 review, January 2026).',
      philosophy: null, specialty: 'Japanese black tea; scones.',
      anecdotes: [
        { text: 'A February 2026 visitor, sent here when the planned coffee shop was shut, tried Nansatsuma first flush, a Ceylon and mini scones, each tea brought in a pot at its peak.', source: R + 'B521752751/' },
        { text: 'A January 2026 evening guest found the café turned into a dining spot, praised the sake, and left with scones as a parting gift.', source: R + 'B520522893/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、中京区東九軒町332、火・金曜休み、営業時間の記載なし、カード・交通系IC 可、14席。口コミ (2025年5月〜2026年9月、英語): 和紅茶の専門店、家族経営 (2024年)、Ureshino や Nansatsuma のファーストフラッシュ、ダージリン、セイロン、アッサム、ポットで、ノリタケのカップ、スコーンとクロテッドクリームとアカシアのはちみつ、ミニスコーン、パウンドケーキ (2024年)、野菜たっぷりのランチ、スパイシーなチャイ、夜は料理と日本酒 (Daishinshu、Nagashima)、白い静かな店内、ジャズ。',
      confidence: 'medium', sources: [TB, R + 'B506740044/', R + 'B507021814/', R + 'B508274032/', R + 'B517553121/', R + 'B520522893/', R + 'B521752751/', R + 'B523417266/', R + 'B537650033/', R + 'B538492695/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for a recommendation among the Japanese black teas. Hours are not posted — check before going. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東九軒町332',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.014982, 135.760572); cross-checked: GSI 京都府京都市中京区東九軒町332番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537650033/', R + 'B521752751/'],
    price_note: 'No 2025–26 prices quoted; reviewers report ¥1,000–1,999 by day.', last_checked: TODAY, items: [
      it('', '', 'Japanese black tea (pot)', '', 'Tea', 'ask', 'ask', 'February 2026.', 'wakocha'),
      it('', '', 'Scones with clotted cream and acacia honey', '', 'Sweets', 'no', 'no', 'September 2026.', 'scones'),
      it('', '', 'Vegetable lunch set', '', 'Lunch', 'ask', 'ask', 'June 2025.', 'lunch'),
    ] }, {
    cuisine: '和紅茶専門の茶房・Ureshino や Nansatsuma のファーストフラッシュなどの和紅茶、ダージリン、セイロン、アッサムをポットで (2024〜2026年の口コミ)・クロテッドクリームとアカシアのはちみつのスコーン、ミニスコーン (2026年9月)・パウンドケーキ (2024年の口コミ)・野菜中心の昼のセット (2024〜2025年の口コミ)・スパイシーなチャイ (2025年11月)・夜は料理とDaishinshu や Nagashima などの日本酒 (2026年1月)',
    neighborhood: '丸太町の近く、烏丸の西',
    gf_detail: 'グルテンフリーではない。スコーンとパウンドケーキ (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。お茶は植物性、昼は野菜中心のセット (2024〜2025年の口コミ) だが、スコーンにクロテッドクリームが付き、ヴィーガンの料理の情報はない。',
    notes: '[茶房・丸太町] 丸太町近くの白く静かな家族経営の和紅茶の店。Ureshino や Nansatsuma のファーストフラッシュ、インドの紅茶をノリタケのカップで、クロテッドクリームとはちみつのスコーン、野菜中心の昼、夜は料理と日本酒。火・金曜休み。',
  });
}

save();
