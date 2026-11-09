// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 99.
//   + 旬菜ここ彩 Shunsai Kokoiro (seasonal fish-and-vegetable izakaya near Karasuma-Marutamachi)
//   + 高野麦酒店takanoya Takano Bakushu Ten (brewery-run craft-beer pub with Japanese food in an 80-year-old machiya)
//   + イタリアンバール モダンタイムス ITALIAN BAR MODERNTIMES (small Italian bar with a live-music stage, west of Karasuma-Nijo)
//   + 梅山堂 Baizan Do (souvenir shop and big dining hall at the Kiyomizu-dera gate; yuba-cheese snacks)
//   - bar月読, 山田屋旅館, hinami, なか卯 河原町丸太町店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26032976, 26032028 (skipped),
//   26031734 (skipped), 26035922 (skipped), 26028692, 26019098 (skipped), 26009786, 26017082.
//   queue-status.jsonl grepped for each brand (ここ彩, 月読, 山田屋, hinami, 高野麦酒/NUDE, なか卯, モダンタイムス, 梅山堂):
//   なか卯 has an earlier ruling (26011730); a live-music hall also called モダンタイムス (26003941, Taisho-retro dining and
//   weddings) was skipped as a venue — a different business at a different address.
//   Data check (current main, hidden included): none of the four drafted is in data/kyoto.json by Tabelog id, name, site
//   or address.
//   Same-name count: one shop each; 高野麦酒店 is run directly by a brewery whose house beer is NUDE BEER (April 2026); the
//   listed site kkzn.co.jp did not respond — operator not confirmed, flagged.
//   Service charges, checked against the Japanese original: モダンタイムス なし; none listed for the others.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal certification.
//   JA text: 祝日 written in full; no bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-99');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032028', 'bar月読: too thin — three reviews on Tabelog, one from 2026 (March)');
skip('26031734', '山田屋旅館: guests-only inn (Greg 2026-11-05 ruling) — a ryokan whose breakfast and dinner are for staying guests (June 2026 review); also one 2025–2026 review');
skip('26035922', 'retail food shop (Greg 11-07 ruling): hinami is a small take-away bakery (burgers, savoury breads, two groups at a time); no historic family ownership and no GF or vegan options sourced');
skip('26019098', 'なか卯 河原町丸太町店: chain — なか卯, the national gyudon and udon chain (same ruling as 26011730)');

// ================================================================ 旬菜ここ彩
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032976/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:30']);
  put({
    id: 'kyoto_shunsai_kokoiro', name: '旬菜ここ彩 (Shunsai Kokoiro)', category: 'OMNI',
    lat: 35.014072, lng: 135.758929, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, obanzai, oden, kara-age, fried taro, miso-grilled eggplant; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, chicken and dashi dishes (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 17:30–22:30 (last orders 22:00); closed Sunday and one irregular day a month (Tabelog). Cards (Tabelog). 24 seats: 6 at the counter, 16 at tables, incl. a sunken kotatsu area and semi-private rooms (Tabelog; January 2025). Non-smoking (Tabelog). Just north of Nijo, west of Karasuma; 3 min from Karasuma-Marutamachi (Tabelog; September 2026). Open since 7 October 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'North of Nijo — 3 min from Karasuma-Marutamachi',
    cuisine: 'Seasonal fish and vegetables with sake (Tabelog) · fried small taro simmered first in dashi (October 2025) · sashimi platter; salad; miso-grilled eggplant; kara-age (May 2026) · obanzai to start; oden; prosciutto-wrapped Nara pickles; grilled sanma (September 2026)',
    website: null, gmaps: gm('旬菜ここ彩 京都'), menu_url: TB,
    notes: '[Izakaya · north of Nijo near Karasuma-Marutamachi, seasonal] A small, friendly neighbourhood izakaya for seasonal fish and vegetables: sashimi, obanzai, oden, fried taro and grilled sanma with Japanese sake. A sunken-kotatsu area suits families. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'An October 2025 regular describes a cheerful chef working with one part-time server and chatting with regulars. Open since October 2019 (Tabelog). No operator was found.',
      philosophy: null, specialty: 'Seasonal fish and vegetables.',
      anecdotes: [
        { text: 'A January 2025 family with a child took the sunken-kotatsu seats and chatted freely, feeling welcome throughout.', source: R + 'B499828684/' },
      ],
      japanese_sources_summary: '食べログ: 旬菜ここ彩、居酒屋・日本料理・海鮮、中京区両替町通二条上る北小路町98-14、月〜土 17:30〜22:30 (L.O. 22:00)、日曜定休・月1回不定休、2019年10月7日オープン、カード可、24席 (カウンター6、テーブル16)、半個室、禁煙、地下鉄丸太町駅から徒歩3分、旬の魚と野菜。口コミ (2025〜2026年、英語): 掘りごたつ席、明るい料理人とパート1人、小芋の揚げ物、刺身の盛り合わせ、サラダ、茄子の味噌焼き、唐揚げ、おばんざい、おでん、生ハムで巻いた奈良漬け、秋刀魚の塩焼き。',
      confidence: 'low', sources: [TB, R + 'B499828684/', R + 'B514982890/', R + 'B529412047/', R + 'B535235976/'] },
    cultural_comfort: { level: 'japanese', note: 'Neighbourhood izakaya; family-friendly kotatsu seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区両替町通二条上る北小路町98-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated January 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (35.014072, 135.758929); cross-checked: GSI 京都府京都市中京区北小路町98番地 (lot) 28m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B514982890/', R + 'B535235976/'],
    price_note: 'No current prices found.', last_checked: TODAY, items: [
      it('', '', 'Fried small taro (simmered first)', '', 'Small plates', 'ask', 'no', 'October 2025.', 'koimo'),
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', 'May and September 2026.', 'sashimi'),
      it('', '', 'Oden', '', 'Small plates', 'ask', 'no', 'September 2026.', 'oden'),
      it('', '', 'Grilled sanma', '', 'Grill', 'ask', 'no', 'September 2026.', 'sanma'),
    ] }, {
    cuisine: '旬の魚と野菜と日本酒 (食べログ)・出汁で煮てから揚げる小芋 (2025年10月)・刺身の盛り合わせ、サラダ、茄子の味噌焼き、唐揚げ (2026年5月)・最初におばんざい、おでん、生ハムで巻いた奈良漬け、秋刀魚の塩焼き (2026年9月)',
    neighborhood: '二条の北。地下鉄丸太町から徒歩3分',
    gf_detail: '要確認。刺身、おばんざい、おでん、唐揚げ、小芋の揚げ物、茄子の味噌焼き。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、鶏、出汁の料理 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・丸太町近くの二条の北、旬の味] 旬の魚と野菜の小さく温かな近所の居酒屋。刺身、おばんざい、おでん、小芋の揚げ物、秋刀魚の塩焼きを日本酒とともに。掘りごたつ席は家族連れにも。日曜定休。',
  });
}

// ================================================================ 高野麦酒店takanoya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26028692/'; const R = TB + 'dtlrvwlst/';
  const HW = day(['16:00', '23:00']); const HSS = day(['15:00', '23:00']);
  put({
    id: 'kyoto_takano_bakushu_ten', name: '高野麦酒店takanoya (Takano Bakushu Ten)', category: 'OMNI',
    lat: 35.014786, lng: 135.759422, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a craft-beer pub (barley beers) with hamburgers among the food (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Japanese obanzai-style dishes and burgers; nothing is described as vegan (Tabelog; 2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday and Friday 16:00–23:00; Saturday, Sunday and public holidays 15:00–23:00; closed Wednesday, open through the long holidays (Tabelog). Seat-only bookings by phone (Tabelog). Cards (Tabelog). 34 seats: a 16-seat counter and tables for 4, 6 and 6 (Tabelog). Non-smoking (Tabelog). In a renovated 80-year-old machiya, 2 min from Marutamachi station (Tabelog). Open since 19 March 2017 (Tabelog).',
    hours: { 0: HW, 1: HW, 3: HW, 4: HW, 5: HSS, 6: HSS }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Karasuma-Marutamachi — 2 min from the station',
    cuisine: 'Ten taps of world craft beer incl. the house NUDE BEER, with Japanese food by a kaiseki-trained chef (Tabelog; April and August 2026) · obanzai and fresh seafood (April 2026) · hamburgers during Burger Week, e.g. ABC and ALTO burgers (October 2026) · events with DJs (July 2026)',
    website: 'https://kkzn.co.jp/', gmaps: gm('高野麦酒店 takanoya'), menu_url: TB,
    notes: '[Craft-beer pub · Marutamachi, machiya] A brewery-run beer pub in a renovated 80-year-old townhouse: ten taps of world craft beer including the house NUDE BEER, a long wooden counter that suits solo drinkers, and good Japanese plates from a kaiseki-trained chef, plus burgers and events. Closed Wednesday. Flagged: operator not confirmed.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Beer manager (unnamed)'], origin: null,
      background: 'The shop says its chef comes from a kaiseki background (Tabelog). An April 2026 reviewer calls it a tavern directly run by a brewery, with its own brand NUDE BEER. The listed site did not respond.',
      philosophy: null, specialty: 'Craft beer with Japanese dishes.',
      anecdotes: [
        { text: 'An October 2026 regular came for Burger Week and ended up chatting with a New Yorker from Hong Kong and a traveller from Manchester.', source: R + 'B520929854/' },
      ],
      japanese_sources_summary: '食べログ: 高野麦酒店takanoya、ビアバー・居酒屋・ダイニングバー、中京区蒔絵屋町255、月・火・木・金 16:00〜23:00、土日祝日 15:00〜23:00、水曜定休、2017年3月19日オープン、席のみ予約は電話で、カード可、34席 (カウンター16、4・6・6名のテーブル)、禁煙、丸太町駅から2分、世界のクラフトビール10種と会席出身の料理人の和食、築80年の町家。口コミ (2026年、英語): ブルワリー直営、自社のNUDE BEER、おばんざい、新鮮な魚介、バーガーウィーク (ABCバーガー、ALTOバーガー)、DJのイベント、一人でも入りやすい。',
      confidence: 'low', sources: [TB, R + 'B520929854/', R + 'B527149021/', R + 'B527259513/', R + 'B531095778/', R + 'B531711910/', R + 'B533229368/', R + 'B534338743/', R + 'B535972383/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas visitors at the counter; solo-friendly.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区蒔絵屋町255',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April to October 2026.' },
    pin_source: `Tabelog ${TB} (35.014786, 135.759422); GSI places only 蒔絵屋町 (town, 58 m); OSM reverse gives the neighbouring 山中町 — kept the Tabelog point, marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices found.', last_checked: TODAY, items: [
      it('', '', 'NUDE BEER (house craft beer)', '', 'Beer', 'no', 'ask', 'April and August 2026.', 'nude_beer'),
      it('', '', 'Obanzai', '', 'Small plates', 'ask', 'ask', 'April 2026.', 'obanzai'),
      it('', '', 'ABC burger (Burger Week)', '', 'Burgers', 'no', 'no', 'October 2026.', 'burger'),
    ] }, {
    cuisine: '自社のNUDE BEERを含む世界のクラフトビール10種と、会席出身の料理人の和食 (食べログ、2026年4・8月)・おばんざい、新鮮な魚介 (2026年4月)・バーガーウィークのハンバーガー、ABCバーガー、ALTOバーガー (2026年10月)・DJのイベント (2026年7月)',
    neighborhood: '烏丸丸太町の近く。駅から徒歩2分',
    gf_detail: 'グルテンフリーではない。大麦のビールのクラフトビールの店で、料理にハンバーガーも (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。おばんざい風の和食とハンバーガー。ヴィーガンと書かれた品はない (食べログ、2026年の口コミ)。',
    notes: '[クラフトビール・丸太町、町家] 築80年の町家を改装したブルワリー直営のビールの店。自社のNUDE BEERを含む世界のクラフトビール10種、一人でも座りやすい長い木のカウンター、会席出身の料理人の和食、ハンバーガーやイベントも。水曜定休。運営会社は未確認 (要確認)。',
  });
}

// ================================================================ イタリアンバール モダンタイムス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26009786/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_italian_bar_moderntimes', name: 'イタリアンバール モダンタイムス (ITALIAN BAR MODERNTIMES)', category: 'OMNI',
    lat: 35.013428, lng: 135.757182, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pizza and Italian dishes incl. mussels; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan dishes described (2026 reviews).',
    hours_raw: 'Monday–Saturday 11:30–14:00 and 18:00–22:00; closed Sunday (Tabelog). No service charge (Tabelog, original なし). Cash only: no cards or e-money (Tabelog). 17 seats: 5 at the counter, 12 at tables (Tabelog). A live-music stage; music nights with several artists (May 2026). West of Karasuma-Nijo (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'West of Karasuma-Nijo',
    cuisine: 'Reasonably priced Italian — pizza and mussels (August 2026) · Italian food with live music from a stage the owner set up (May 2026)',
    website: null, gmaps: gm('イタリアンバール モダンタイムス 京都'), menu_url: TB,
    notes: '[Italian bar · west of Karasuma-Nijo, live music] A 17-seat Italian bar where a music-loving owner has built a small live stage: affordable pizza and Italian plates at lunch and dinner, and some evenings with live performers. Cash only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A May 2026 reviewer describes an owner passionate about music who set up the live stage. No operator was found; the live-music hall also called モダンタイムス is a separate business.',
      philosophy: null, specialty: 'Pizza; live music.',
      anecdotes: [
        { text: 'A May 2026 visitor in Kyoto for a music event finished the night here with dinner and sets by several artists.', source: R + 'B528066722/' },
      ],
      japanese_sources_summary: '食べログ: イタリアンバール モダンタイムス、イタリアン・ピザ・バル、中京区大恩寺町245、月〜土 11:30〜14:00・18:00〜22:00、日曜定休、サービス料なし、カード・電子マネー不可、17席 (カウンター5、テーブル12)。口コミ (2026年、英語): 音楽好きの店主がライブステージを設けた、複数のアーティストのライブ、烏丸二条の西、手頃な本格イタリアン、ピザとムール貝。',
      confidence: 'low', sources: [TB, R + 'B528066722/', R + 'B534019121/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bar; live music some nights; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区大恩寺町245',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated May and August 2026.' },
    pin_source: `Tabelog ${TB} (35.013428, 135.757182); cross-checked: GSI 京都府京都市中京区大恩寺町245番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534019121/'],
    price_note: 'No prices found; cash only.', last_checked: TODAY, items: [
      it('', '', 'Pizza', '', 'Pizza', 'no', 'ask', 'August 2026.', 'pizza'),
      it('', '', 'Mussels', '', 'Antipasti', 'ask', 'no', 'August 2026.', 'cozze'),
    ] }, {
    cuisine: '手頃な本格イタリアン、ピザとムール貝 (2026年8月)・店主が設けたステージでのライブ音楽とイタリアン (2026年5月)',
    neighborhood: '烏丸二条の西',
    gf_detail: '要確認。ピザやムール貝などのイタリアン。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンの料理は書かれていない (2026年の口コミ)。',
    notes: '[イタリアンバル・烏丸二条の西、ライブ音楽] 音楽好きの店主が小さなライブステージを作った17席のイタリアンバル。昼も夜も手頃なピザとイタリアンの皿、夜によってはライブも。現金のみ、日曜定休。',
  });
}

// ================================================================ 梅山堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26017082/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.baizando.jp/index.html';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_baizando_kiyomizu', name: '梅山堂 (Baizan Do)', category: 'OMNI',
    lat: 34.995703, lng: 135.782894, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried yuba-cheese skewers (fish paste and cheese in yuba), nishin soba and set meals; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yuba cheese contains fish paste and cheese; herring soba in dashi (2025–2026 reviews).',
    hours_raw: '9:00–17:00 daily (Tabelog); closed 25–26 December this year (own site). Cards: JCB, AMEX (Tabelog). Souvenir shop on the ground floor, a large dining hall in the basement — 300 seats (Tabelog) and room for groups of up to 730 (own site); eat-in seats for snacks (April and September 2026). Non-smoking (Tabelog). Right in front of the Kiyomizu-dera gate (own site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu-dera — right in front of the main gate',
    cuisine: 'A long-standing Kiyomizu-dera gate stop: souvenirs, a painting experience and a big dining hall of Kyoto seasonal food (own site) · “melting yuba cheese” — fish paste and cheese wrapped in yuba and fried to order, ¥500 a skewer (October 2025 to September 2026) · nishin soba ¥1,100 in the basement dining room (April 2026) · beer with the skewers (July 2026)',
    website: SITE, gmaps: gm('梅山堂 清水寺'), menu_url: SITE,
    notes: '[Snacks and dining hall · Kiyomizu-dera gate] A big souvenir shop right at the Kiyomizu-dera gate with a basement dining hall: grab its famous freshly fried “melting yuba cheese” skewer (¥500) and eat it at the seats inside, or sit down to nishin soba and set meals at fair prices. Very busy with tour groups.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Run by 株式会社梅山堂, which describes the shop as long patronised by visitors, right in front of the temple gate, with seating for groups of up to 730 (own site).',
      philosophy: 'Kyoto flavours in every season, as a relaxing break while sightseeing (own site).', specialty: 'Fried yuba-cheese skewers.',
      anecdotes: [
        { text: 'A July 2026 family cooled off from the Kyoto heat with a beer and the yuba-cheese skewers the family’s daughters had fallen for on an earlier trip.', source: R + 'B531642783/' },
      ],
      japanese_sources_summary: '公式サイト: 株式会社梅山堂、清水寺の山門のすぐ前、長年ご愛顧、四季折々の京の味覚の食事、京都みやげ、絵付け体験、団体様お食事収容人員 全730名、東山区清水寺山門前、12月25・26日臨時休業。食べログ: 梅山堂、日本料理・和菓子、東山区清水1-283、毎日 9:00〜17:00、カードはJCB・AMEX、300席、禁煙。口コミ (2025〜2026年、英語): 1階はみやげ物、地下に広い食事処、とろける湯葉チーズ (魚のすり身とチーズを湯葉で包んで揚げる) 500円、店内で食べられる、にしんそば1,100円、ビール。',
      confidence: 'medium', sources: [SITE, TB, R + 'B517169166/', R + 'B517174487/', R + 'B525038357/', R + 'B526874132/', R + 'B528490921/', R + 'B531642783/', R + 'B532211982/', R + 'B538807336/'] },
    cultural_comfort: { level: 'english', note: 'Mostly overseas visitors and tour groups.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水1-283',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site (December 2026 notice) and Tabelog listing; reviews dated October 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (34.995703, 135.782894); cross-checked: GSI 京都府京都市東山区清水一丁目283番地 (lot) 80m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528490921/', R + 'B526874132/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Melting yuba cheese skewer (fish paste and cheese in yuba)', '¥500', 'Snacks', 'ask', 'no', 'May and September 2026.', 'yuba_cheese'),
      it('', '', 'Nishin soba', '¥1,100', 'Noodles', 'no', 'no', 'April 2026.', 'nishin_soba'),
    ] }, {
    cuisine: '清水寺の山門前に長く続く店。みやげ物、絵付け体験、京の季節の味の広い食事処 (公式サイト)・魚のすり身とチーズを湯葉で包んで注文後に揚げる「とろける湯葉チーズ」1本500円 (2025年10月〜2026年9月)・地下の食事処のにしんそば1,100円 (2026年4月)・串とビールも (2026年7月)',
    neighborhood: '清水寺。山門のすぐ前',
    gf_detail: '要確認。揚げた湯葉チーズの串 (魚のすり身とチーズを湯葉で包む)、にしんそば、定食。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。湯葉チーズは魚のすり身とチーズ入り、にしんそばは出汁 (2025〜2026年の口コミ)。',
    notes: '[軽食と食事処・清水寺の山門前] 清水寺の山門のすぐ前の大きなみやげ物の店で、地下は広い食事処。名物の揚げたての「とろける湯葉チーズ」の串 (500円) を店内の席で、またはにしんそばや定食を手頃な値段で。団体客で大変混む。',
  });
}

save();
