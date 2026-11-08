// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 78.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 真華 Shinka (innovative Japanese counter, the Kyoto shop of Tokyo's Azabu Asai; since January 2026)
//   + STEAK HOUSE 花本 Steak House Hanamoto (Gion teppanyaki; steak-bowl lunch; since 2023)
//   - 和牛すき焼き 京都 ぱんが — a Panga-group shop (東京 徳山物産: Taito main shop, Asakusa, Osaka, Kyoto), and the brand is
//     already in data as 和牛ぱんが 祇園四条店 (kyoto_wagyu_panga_gion_shijo)
//   - 焼酎Bar くどう — no reviews
//   - 韓日亭 — no 2025–26 review (latest December 2024)
//   + ボーン サイ Bone Sai ("sweets, espresso and a little bar" in Gion; since 2019)
//   + 祇園 淺田屋 Gion Asadaya (six-seat, one-man kappo, two groups a day; since 2015)
//   Same-name counts first (data and queue-status.jsonl): ぱんが in data (祇園四条店); none for 真華, 花本, くどう, 韓日亭,
//   ボーン サイ or 淺田屋; Azabu Asai is not in data. None drafted is in data/kyoto.json by name or address (hidden
//   records included). Big-chain hotel rule (Greg 11-08): none is in a chain hotel.
//   Service charges checked against Tabelog's Japanese original: 真華 「サービス料10％」; 花本 「ディナーのみサービス料10%」
//   (dinner only); 淺田屋 「サービス料・チャージ料なし」; ボーン サイ has no section.
//   Pins (checked against main, hidden records included): all four match a GSI lot within 84 m and are ≥ 14 m from every
//   other record; no offsets.
//   JA text avoids a bare 天 or 祝 (coordinator, osw9-78).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-78');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040917', 'branch of a brand already in data: a shop of the Panga group (東京 徳山物産; main shop in Taito, Tokyo, with Asakusa and Osaka branches — January 2025 review), already in data as 和牛ぱんが 祇園四条店 (kyoto_wagyu_panga_gion_shijo)');
skip('26042339', 'no reviews');
skip('26012417', 'no 2025–26 review (the latest fetched review is from December 2024)');

// ================================================================ 真華
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043791/'; const R = TB + 'dtlrvwlst/';
  const N = day(['17:00', '23:00']); const W = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_shinka_ebisucho', name: '真華 (Shinka)', category: 'OMNI',
    lat: 35.009568, lng: 135.769716, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A creative Japanese course with sauces, noodles and broths (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hairy crab, caviar, sea bream, venison, duck (August 2026 review).',
    hours_raw: 'Mon, Tue, Thu, Fri and the days around holidays 17:00–23:00; Sat, Sun and holidays 12:00–15:00 and 17:00–23:00; closed Wednesdays (Tabelog). Service charge 10% (Tabelog Japanese original 「サービス料10％」). Cards; no e-money or QR (Tabelog). 8 counter seats at an open kitchen; non-smoking (Tabelog; July 2026 review). 3 min from Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 0: N, 1: N, 3: N, 4: N, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, north of Sanjo — 3 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Innovative Japanese courses with Kyoto ingredients and wine pairings: the Summer Evening Course of conger eel (hamo) and corn appetizers, a green-tomato gazpacho with hairy crab and caviar, sweet sea bream with sudachi, Hokkaido summer venison with Kamo aubergine and asparagus, and Kyoto duck meat-miso noodles of thick somen (August 2026); a brunch course with hamo and prosciutto, saury roulade and wagyu cheek in Madeira (October 2026); about ¥15,000–30,000 (2026 reviews)',
    website: null, gmaps: gm('真華 京都 恵比須町'), menu_url: null,
    notes: '[Innovative Japanese · Kawaramachi-Sanjo] An eight-seat open-kitchen counter, the Kyoto shop of Tokyo\'s Azabu Asai, serving playful seasonal courses — hairy crab with gazpacho, venison, duck miso noodles — with wine. Michelin-listed within its first year (2026 reviews). About ¥15,000–30,000 plus 10%.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 7 January 2026 (Tabelog) as a new shop of Azabu Asai of Tokyo (February 2026 review), on the site where Obase used to be (October 2026 review). A staff of two (October 2026 review). Listed in the Michelin Guide (August and October 2026 reviews).',
      philosophy: 'Kyoto flavours with the essence of Azabu (February 2026 review).',
      specialty: 'Seasonal innovative Japanese course.',
      anecdotes: [
        { text: 'An August 2026 diner took the Summer Evening Course; the green-tomato gazpacho with hairy crab and caviar stood out for its sharp acidity.', source: R + 'B533381446/' },
        { text: 'An October 2026 visitor recognised the front from an earlier visit to Obase, which used to be on the same site.', source: R + 'B537523015/' },
        { text: 'A July 2026 diner found a new Kyoto favourite at the open-kitchen counter, surprised until the last dish.', source: R + 'B532486495/' },
      ],
      japanese_sources_summary: '食べログ: 真華、日本料理・フレンチ・イノベーティブ、中京区恵比須町534-39 1F、京都市役所前駅から徒歩3分、月・火・木・金・祝日の前日・祝日の翌日 17:00〜23:00、土日・祝日 12:00〜15:00・17:00〜23:00、水曜休み、サービス料10%、カード可、電子マネー・QR 不可、カウンター8席、禁煙、2026年1月7日オープン。口コミ (2026年、英語): 東京の Azabu Asai の京都の店、京都の食材、ワインのペアリング、夏の夜のコース (hamo ととうもろこし、毛蟹とキャビアの青トマトのガスパチョ、sweet sea bream と sudachi、北海道の鹿、Kamo なす、京都の鴨の肉味噌の太い somen)、ミシュランガイド掲載、以前は Obase の場所、スタッフ2人。',
      confidence: 'medium', sources: [TB, R + 'B523569103/', R + 'B532486495/', R + 'B533381446/', R + 'B537523015/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter course; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町534-39 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009568, 135.769716); cross-checked: GSI 京都府京都市中京区恵比須町534番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533381446/'],
    price_note: 'No item prices found; reviews give ¥15,000–30,000 a head; 10% service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Summer Evening Course', '', 'Courses', 'ask', 'no', 'August 2026 review.', 'summer_course'),
    ] }, {
    cuisine: '京都の食材とワインのペアリングのイノベーティブな日本料理のコース: hamo ととうもろこしの前菜、毛蟹とキャビアをのせた青トマトのガスパチョ、sweet sea bream と sudachi、北海道の夏の鹿と Kamo なすとアスパラ、京都の鴨の肉味噌の太い somen の夏の夜のコース (2026年8月)、hamo と生ハム、サンマのロール、和牛の頬肉のマデイラ煮の昼のコース (2026年10月)、15,000〜30,000円ほど (2026年の口コミ)',
    neighborhood: '河原町、三条の北。京都市役所前駅から徒歩3分',
    gf_detail: '要確認。ソース、麺、椀のある創作和食のコース (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。毛蟹、キャビア、魚、鹿、鴨 (2026年8月の口コミ)。',
    notes: '[イノベーティブ和食・河原町三条] 東京の Azabu Asai の京都の店、8席のオープンキッチンのカウンター。毛蟹とガスパチョ、鹿、鴨の肉味噌の somen など遊び心のある季節のコースをワインと。開店1年足らずでミシュラン掲載 (2026年の口コミ)。15,000〜30,000円ほど、サービス料10%。',
  });
}

// ================================================================ STEAK HOUSE 花本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039747/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://r.goope.jp/steakhouse-hana/';
  const D = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_steak_house_hanamoto_gion', name: 'STEAK HOUSE 花本 (Steak House Hanamoto)', category: 'OMNI',
    lat: 35.004113, lng: 135.776481, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan steak may suit, but the steak bowl sauce and miso soup are unknown (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak, egg, clam miso soup (2025 reviews).',
    hours_raw: 'Tue–Sun 11:30–14:00 (L.O. 13:30) and 17:00–22:00 (L.O. 21:30); closed Mondays (Tabelog). Lunch is the steak bowl only (2025 reviews). Service charge 10% at dinner only (Tabelog Japanese original 「ディナーのみサービス料10%」). Cards and QR; no e-money (Tabelog). 16 seats: 5 at the counter and 3 tables; non-smoking (Tabelog). 2nd floor of a building down a narrow alley off Shijo near Yasaka Shrine (Tabelog; June 2025 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, near Yasaka Shrine — 6 min from Gion-Shijo Stn',
    cuisine: 'Teppanyaki: at lunch only the special steak bowl ¥2,000 (up from ¥1,500) of cut steak under a fried egg with red onion and herbs, with salad, clam miso soup and ice cream (June and September 2025); teppan steak dinners from about ¥10,000 (June 2025)',
    website: WEB, gmaps: gm('STEAK HOUSE 花本 祇園'), menu_url: null,
    notes: '[Teppanyaki · Gion] A small second-floor teppanyaki in a Gion back alley with one chef at the plate: a good-value ¥2,000 steak bowl at lunch and steak dinners from about ¥10,000.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Opened 11 July 2023 (Tabelog). The master started out in Ginza and came back to Gion (July 2023 pre-opening review); a November 2023 review credits the chef with 25 years at the teppan in Ginza, Tokyo. One male chef runs the place solo (November 2023 and June 2025 reviews).',
      philosophy: null,
      specialty: 'Steak bowl lunch; teppan steak.',
      anecdotes: [
        { text: 'A June 2025 diner came for the steak bowl, heard it had risen from ¥1,500 to ¥2,000, and found the chef started cooking without asking — lunch is one dish.', source: R + 'B507680199/' },
        { text: 'A September 2025 diner found plenty of cut steak under the fried egg, with clam miso soup and ice cream.', source: R + 'B513488835/' },
        { text: 'A November 2024 dinner guest had the tenderloin course — prosciutto salad, scallops, steak, rice and clam miso soup, yuzu sorbet — and heard from the master that the room usually fills around 8 pm.', source: R + 'B478145510/' },
      ],
      japanese_sources_summary: '食べログ: STEAK HOUSE 花本、鉄板焼き、東山区祇園町北側282-21 祇園ビル2F、祇園四条駅7番出口から八坂神社方面、火〜日 11:30〜14:00 (L.O. 13:30)・17:00〜22:00 (L.O. 21:30)、月曜休み、ディナーのみサービス料10%、カード・QR 可、電子マネー不可、16席 (カウンター5、テーブル3)、禁煙、2023年7月11日オープン。口コミ (2023〜2025年、英語): 昼はステーキ丼のみ2,000円 (1,500円から値上げ)、目玉焼きの下にカットステーキ、赤玉ねぎとハーブ、サラダ、あさりの味噌汁、アイス、夜は1万円ほどから、料理人はひとり (2025年)、銀座で25年の経歴 (2023年11月)。',
      confidence: 'low', sources: [TB, WEB, R + 'B492801243/', R + 'B474639904/', R + 'B478145510/', R + 'B507680199/', R + 'B513488835/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small teppan counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側282-21 祇園ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated June and September 2025.' },
    pin_source: `Tabelog ${TB} (35.004113, 135.776481); cross-checked: GSI 京都府京都市東山区祇園町北側282番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513488835/'],
    price_note: 'Lunch price from a September 2025 review; dinner adds 10% service (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Special steak bowl (lunch, with salad, clam miso soup and ice cream)', '¥2,000', 'Lunch', 'ask', 'no', 'September 2025 review.', 'steak_don'),
    ] }, {
    cuisine: '鉄板焼き: 昼はステーキ丼のみ2,000円 (1,500円から値上げ) — 目玉焼きの下にカットステーキ、赤玉ねぎとハーブ、サラダ、あさりの味噌汁、アイス (2025年6月・9月)、夜は1万円ほどからの鉄板のステーキ (2025年6月)',
    neighborhood: '祇園、八坂神社の近く。祇園四条駅から徒歩6分',
    gf_detail: '要確認。鉄板のステーキは合う可能性があるが、ステーキ丼のたれと味噌汁は不明 (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ステーキ、卵、あさりの味噌汁 (2025年の口コミ)。',
    notes: '[鉄板焼き・祇園] 祇園の路地のビル2階の小さな鉄板焼き。料理人が1人で焼き、昼はお得な2,000円のステーキ丼、夜は1万円ほどからのステーキ。',
  });
}

// ================================================================ ボーン サイ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033819/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.bornsai.com/';
  const D = day(['15:00', '25:00']);
  put({
    id: 'kyoto_bone_sai_gion', name: 'ボーン サイ (Bone Sai)', category: 'OMNI',
    lat: 35.005017, lng: 135.776556, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Strawberries in chocolate and drinks; other sweets not described (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Strawberries and chocolate, coffee and cocktails; whether the chocolate contains dairy is not stated (2025–26 reviews).',
    hours_raw: 'Daily 15:00–01:00; hours may change (Tabelog; August 2025 review). Takeaway available (Tabelog). Cards and PayPay; no e-money (Tabelog). 9 seats at the counter; smoking allowed (Tabelog). On the ground floor of Re:CubeGION2 in Gion north of Shijo, 5 min from Gion-Shijo; a bonsai-themed sign (Tabelog; June 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: '"Sweets, espresso and a little bar": the Gion chocolate strawberries, strawberries coated in chocolate and gold leaf, about ten for ¥3,500 (April 2025), with varieties such as Summer Lyrical (September 2026); strawberry milk (October 2025); espresso and coffee; Glenmorangie highballs, gin, white wine (2025–26 reviews)',
    website: WEB, gmaps: gm('ボーン サイ 祇園'), menu_url: null,
    notes: '[Sweets & bar · Gion] A tiny nine-seat counter that is a café by afternoon and a bar by night, known for chocolate-dipped strawberries with gold leaf, espresso, highballs and gin until 1 am. About ¥2,000–4,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 23 December 2019 (Tabelog). Concept: "Sweets, Espresso, and a little Bar" (August 2025 review). Run single-handedly by a woman owner (January 2025 review), described as beautiful by guests in January 2025 and June 2026. The strawberries change daily, from contracted growers around Japan (June 2023 review); posted on Instagram stories (January 2025 review).',
      philosophy: null,
      specialty: 'Chocolate-coated strawberries.',
      anecdotes: [
        { text: 'A regular of four visits (October 2025) drops in after dinner around 7 pm for a Glenmorangie highball while friends have coffee.', source: R + 'B498200632/' },
        { text: 'A June 2026 group, finding the usual spot closed, followed the bonsai sign for a pre-party gin and the recommended strawberries.', source: R + 'B530187870/' },
        { text: 'An April 2025 visitor found the strawberries, about ten for ¥3,500, a little sour and the chocolate quick to melt.', source: R + 'B505050013/' },
      ],
      japanese_sources_summary: '食べログ: ボーン サイ、バー・スイーツ、東山区祇園町北側347-150 Re:CubeGION2ビル1F、京阪祇園四条駅から徒歩5分、毎日 15:00〜翌1:00、テイクアウト可、カード・PayPay 可、電子マネー不可、9席、喫煙可、2019年12月23日オープン。口コミ (2025〜2026年、英語): 「Sweets, Espresso, and a little Bar」、金箔をのせたチョコレートのいちご (約10粒3,500円、2025年4月)、Summer Lyrical などの品種、いちごミルク、エスプレッソ、Glenmorangie のハイボール、ジン、白ワイン、盆栽の看板、店主が一人で営む (2025年1月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B498200632/', R + 'B499069419/', R + 'B505050013/', R + 'B512905225/', R + 'B514710144/', R + 'B530187870/', R + 'B471457825/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-150 Re:CubeGION2ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005017, 135.776556); cross-checked: GSI 京都府京都市東山区祇園町北側347番地 (lot) 84m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505050013/'],
    price_note: 'Price from an April 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Chocolate-coated strawberries (about 10)', '¥3,500', 'Sweets', 'ask', 'ask', 'April 2025 review.', 'choco_ichigo'),
      it('', '', 'Glenmorangie highball', '', 'Drinks', 'ask', 'ask', 'August and October 2025 reviews.', 'highball'),
    ] }, {
    cuisine: '「Sweets, Espresso, and a little Bar」: 金箔をのせたチョコレートがけのいちご、約10粒3,500円 (2025年4月)、Summer Lyrical などの品種 (2026年9月)、いちごミルク (2025年10月)、エスプレッソとコーヒー、Glenmorangie のハイボール、ジン、白ワイン (2025〜26年の口コミ)',
    neighborhood: '祇園、四条の北。祇園四条駅から徒歩5分',
    gf_detail: '要確認。チョコレートのいちごと飲み物。ほかのスイーツは不明 (2025〜26年の口コミ)。',
    vegan_detail: '要確認。いちごとチョコレート、コーヒー、カクテル。チョコレートの乳製品の有無は不明 (2025〜26年の口コミ)。',
    notes: '[スイーツとバー・祇園] 昼はカフェ、夜はバーになる9席の小さなカウンター。金箔をのせたチョコレートのいちご、エスプレッソ、ハイボール、ジンを深夜1時まで。2,000〜4,000円ほど。',
  });
}

// ================================================================ 祇園 淺田屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26025089/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://gion-asadaya.com/';
  put({
    id: 'kyoto_gion_asadaya', name: '祇園 淺田屋 (Gion Asadaya)', category: 'OMNI',
    lat: 35.0064, lng: 135.775938, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kappo dishes; soy sauce and dashi are likely (2021–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea urchin, fish and dashi (2021–2026 reviews).',
    hours_raw: 'Lunch from 12:00; dinner 18:00–21:00; two groups a day; irregular closures — days are not given (Tabelog). Reservation only; same-day cancellations may be charged in full; four or more guests book the whole counter; call 9:00–11:30 or 15:30–17:30 (Tabelog). No service charge or cover (Tabelog Japanese original 「サービス料・チャージ料なし」). Cards; no e-money (Tabelog). 6 counter seats; non-smoking; ages 10 and up; dress code (Tabelog). On Shinmonzen-dori east of Hanamikoji among antique shops, 5 min from Gion-Shijo or Sanjo (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmonzen-dori, east of Hanamikoji — 5 min from Sanjo Stn',
    cuisine: 'Seasonal kappo courses at a six-seat counter, using ingredients from Kyoto, the owner\'s home prefecture of Ishikawa and producers around Japan, with chosen sake and wine (Tabelog): lunch courses ¥8,000 and ¥15,000, a ¥10,000 course booked online (November 2021); sea-urchin and edamame jelly (May 2026); about ¥15,000–20,000 at dinner',
    website: WEB, gmaps: gm('祇園 淺田屋'), menu_url: null,
    notes: '[Kappo · Shinmonzen] A hidden six-seat counter among Shinmonzen\'s antique shops, where the owner cooks alone for just two groups a day — seasonal Kyoto and Ishikawa ingredients with sake and wine. About ¥15,000–20,000; booking only.',
    chef_bio: { chef_name: 'Asada (surname only, December 2016 review)', roles: ['Owner-chef'], origin: 'Ishikawa (Tabelog); Noto (December 2016 review).',
      background: 'Opened 23 January 2015 (Tabelog). Trained for many years at kaiseki houses such as Kitcho (December 2016 review). Runs the place alone and researches new ingredients each season (August 2023 review). Signature in 2016–2019: Kawachi duck sushi (December 2016 and May 2019 reviews).',
      philosophy: '"Tradition is the accumulation of innovation" — seasons expressed boldly, linking producers and guests (Tabelog).',
      specialty: 'Seasonal kappo with sake.',
      anecdotes: [
        { text: 'A returning guest in May 2026, after a few years away, spent three happy hours with sake and singled out a jelly of sea urchin and edamame.', source: R + 'B473518364/' },
        { text: 'A November 2021 lunch couple, booking through Hitosara, could only get the ¥10,000 course and were the only guests that day, served by the owner alone.', source: R + 'B141362854/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 淺田屋、日本料理・魚介料理、東山区中之町247 (新門前通、花見小路の東)、京阪祇園四条駅・三条駅から徒歩5分、昼は12:00から、夜は18:00〜21:00、1日2組、不定休、予約のみ (当日キャンセルは100%の場合あり、4名以上は貸切)、電話は9:00〜11:30・15:30〜17:30、サービス料・チャージ料なし、カード可、電子マネー不可、カウンター6席、禁煙、10歳以上、ドレスコードあり、2015年1月23日オープン、京都と店主の故郷の石川と全国の食材、日本酒とワインにこだわり (紹介文、英訳)。口コミ (2016〜2026年、英語): 店主の Asada さんは Noto の出身、Kitcho などで長く修業 (2016年12月)、Kawachi の鴨の寿司 (2016〜2019年)、店主が一人で営む (2023年8月)、昼は8,000円と15,000円のコース (2021年11月)、雲丹と枝豆のジュレ (2026年5月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B220950533/', R + 'B141362854/', R + 'B473518364/', R + 'B495883564/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booking only; dress code; ages 10 and up (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区新門前通花見小路東入る中之町247',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.006400, 135.775938); cross-checked: GSI 京都府京都市東山区中之町247番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B141362854/'],
    price_note: 'Lunch course prices from a November 2021 review (old); Tabelog average ¥15,000–19,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥8,000 / ¥15,000', 'Courses', 'ask', 'no', 'November 2021 review.', 'lunch'),
      it('', '', 'Dinner course', '', 'Courses', 'ask', 'no', '2024–2026 reviews.', 'dinner'),
    ] }, {
    cuisine: '6席のカウンターの季節の割烹のコース。京都、店主の故郷の石川、全国の生産者の食材に、こだわりの日本酒とワイン (食べログ): 昼は8,000円と15,000円のコース、ネット予約の10,000円のコース (2021年11月)、雲丹と枝豆のジュレ (2026年5月)、夜は15,000〜20,000円ほど',
    neighborhood: '新門前通、花見小路の東。三条駅から徒歩5分',
    gf_detail: '要確認。季節の割烹料理で、醤油や出汁を使う可能性が高い (2021〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。雲丹、魚、出汁 (2021〜2026年の口コミ)。',
    notes: '[割烹・新門前] 新門前通の骨董店の並びの隠れ家のような6席のカウンター。店主が一人で1日2組のために料理し、京都と石川の季節の食材を日本酒とワインで。15,000〜20,000円ほど、予約のみ。',
  });
}

save();
