// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 84.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 祇園 華舞 Gion Hanamai (one-group-a-day kaiseki counter by Yasaka Shrine)
//   + 隠れ炉端家がぶり Kakure Robata Gaburi (straw-grilled bonito and shichirin robata near Shijo-Karasuma; open late)
//   + 珈琲 蔦家 Coffee Tsutaya (retro kissa since 1986, Higashinotoin-Rokkaku)
//   - ホリーズカフェ 四条烏丸店 — chain: ホリーズカフェ, already skipped as a chain (26012977, osw8-51: 16 shops in our crawls)
//   - ブルーボトルコーヒー 京都六角カフェ — chain: Blue Bottle Coffee, an international chain
//   + 八百一本館 レストランきょうのおかず Kyo no Okazu (vegetable-led washoku of the greengrocer 京都八百一; since 2013)
//   Brand checks: none of 華舞, がぶり, 蔦家 or きょうのおかず is in data or queue-status by name; a Tabelog search for がぶり /
//   gaburi finds no other 隠れ炉端家 shop; きょうのおかず is a sister restaurant (2F) of SAVORY (kyoto_savory_yaoichi_honkan, 3F)
//   in the same 京都八百一本館 — a sister concept of a local group, so drafted. None is a THAN brand. None is in a hotel.
//   Service charges from Tabelog's Japanese original: 華舞 「サービス料10％、チャージ料なし」; がぶり 「お通し代528円（税込）」;
//   蔦家 and きょうのおかず have no section.
//   Pins (checked against main, hidden records included): 蔦家 moved 6m NNE (0.4m from kyoto_la_princesse on the 2nd floor of
//   the same building); the other three ≥ 7.5m from every record.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-84');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043683', 'chain: ホリーズカフェ (already ruled a chain, 26012977 osw8-51: 16 shops in our crawls)');
skip('26033501', 'chain: Blue Bottle Coffee, an international coffee chain');

// ================================================================ 祇園 華舞
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26028803/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['18:00', '19:00']);
  put({
    id: 'kyoto_gion_hanamai', name: '祇園 華舞 (Gion Hanamai)', category: 'OMNI',
    lat: 35.002324, lng: 135.777737, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the restaurant does not accept bookings from guests with gluten allergies (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the restaurant does not accept vegetarians or pescatarians (Tabelog).',
    hours_raw: 'Mon, Fri, Sat, Sun and holidays: entry 11:30–14:00 and 18:00–19:00 (the times are entry times); closed Tuesdays, Wednesdays and Thursdays, with occasional other closures (Tabelog). One group a day at lunch and one at dinner (2025–26 reviews). Bookings are refused for guests who cannot eat fish or raw fish, vegetarians, pescatarians and those with gluten allergies; a booking may be cancelled 15 minutes after the time without contact; cancellation policy applies (Tabelog). Service charge 10%, no cover (Tabelog Japanese original 「サービス料10％、チャージ料なし」). Cards; no e-money or QR (Tabelog). 6 counter seats of a single slab of Yoshino cypress (Tabelog; May 2025 review). 2 min from the main gate of Yasaka Shrine (Tabelog).',
    hours: { 0: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yasaka Shrine, south side — 2 min from the main gate',
    cuisine: 'Kyoto kaiseki for one group at a time ("ichigo ichie"): lunch courses ¥10,000 and ¥18,000, dinner ¥24,200 and ¥42,350 (May 2025); the 13-dish lunch feast with matsutake and a moon-viewing hassun (October 2025); the lunch ichigo ichie course ¥24,200 (February 2026); hamo soup, Densuke anago sashimi, salt-grilled ayu and crab claypot rice in summer (August 2026)',
    website: null, gmaps: gm('祇園 華舞'), menu_url: null,
    notes: '[Kaiseki · Yasaka Shrine] A six-seat cypress counter by Yasaka Shrine where the owner-chef serves just one group at lunch and one at dinner — refined Kyoto kaiseki, ¥10,000–42,000 plus 10%. Strict dietary policy: no vegetarian or gluten-free bookings.',
    chef_bio: { chef_name: 'Nobuhiro Miyako (May 2025 review)', roles: ['Owner-chef'], origin: null,
      background: 'Trained in Kyoto and Osaka and worked at the Kyoto Hotel Okura annex, Awata Sanso and Hoshinoya Kyoto (May 2025 review); relaunched Gion Hanamai in 2024 to serve one group at a time (October 2025 review). An August 2026 guest writes that the chef has earned a Michelin star.',
      philosophy: '"Ichigo ichie" — the last dish is decided by the guests of the day (August 2026 review).',
      specialty: 'One-group kaiseki.',
      anecdotes: [
        { text: 'An October 2025 returning guest was told, unprompted, that the Rococo beer enjoyed on the first visit was in stock that day.', source: R + 'B510734560/' },
        { text: 'A February 2026 visitor came on the tip of a stranger at the next table in a Tokyo restaurant.', source: R + 'B522527587/' },
        { text: 'Another February 2026 guest was sent off with a bottle of sake as a souvenir.', source: R + 'B522691848/' },
      ],
      japanese_sources_summary: '食べログ: 祇園 華舞、日本料理、東山区清井町494-2、八坂神社の正門から徒歩2分、月・金・土・日・祝日 入店 11:30〜14:00・18:00〜19:00、火・水・木曜休み、魚・生魚が食べられない人、ベジタリアン、ペスカタリアン、グルテンアレルギーの人の予約は不可、サービス料10%、チャージ料なし、カード可、電子マネー・QR 不可、カウンター6席。口コミ (2025〜2026年、英語): 1日1組の ichigo ichie、店主の Miyako さんは京都と大阪で修業し、ホテルや旅館で経験、2024年に再出発、Yoshino の檜の一枚板のカウンター、昼10,000円・18,000円、夜24,200円・42,350円 (2025年5月)。',
      confidence: 'medium', sources: [TB, R + 'B506217106/', R + 'B506423215/', R + 'B510734560/', R + 'B522527587/', R + 'B522691848/', R + 'B533890641/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private counter for one group; strict dietary policy (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清井町494-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002324, 135.777737); cross-checked: GSI 京都府京都市東山区清井町494番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506217106/', R + 'B522527587/'],
    price_note: 'Course prices from May 2025 and February 2026 reviews, tax included; plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥10,000 / ¥18,000', 'Courses', 'no', 'no', 'May 2025 review.', 'lunch'),
      it('', '', 'Lunch ichigo ichie feast course', '¥24,200', 'Courses', 'no', 'no', 'February 2026 review.', 'lunch_feast'),
      it('', '', 'Dinner course', '¥24,200 / ¥42,350', 'Courses', 'no', 'no', 'May 2025 review.', 'dinner'),
    ] }, {
    cuisine: '1日1組の京都の懐石 (ichigo ichie): 昼のコース10,000円・18,000円、夜24,200円・42,350円 (2025年5月)、松茸と月見の八寸の13品の昼のコース (2025年10月)、昼の ichigo ichie のコース24,200円 (2026年2月)、夏は鱧の吸い物、Densuke の穴子の刺身、鮎の塩焼き、蟹の土鍋ご飯 (2026年8月)',
    neighborhood: '八坂神社の南。正門から徒歩2分',
    gf_detail: 'グルテンフリー不可。グルテンアレルギーの人の予約は受けない (食べログ)。',
    vegan_detail: 'ヴィーガン不可。ベジタリアンとペスカタリアンの予約は受けない (食べログ)。',
    notes: '[懐石・八坂神社] 八坂神社のそばの檜の6席のカウンター。店主が昼と夜それぞれ1組だけのために作る洗練された京都の懐石。10,000〜42,000円ほど、サービス料10%。食事制限の予約は不可。',
  });
}

// ================================================================ 隠れ炉端家がぶり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033399/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/zh-CN/kyoto-gaburi';
  const MW = day(['17:00', '26:00']); const LT = day(['17:00', '27:00']); const SU = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kakure_robata_gaburi', name: '隠れ炉端家がぶり (Kakure Robata Gaburi)', category: 'OMNI',
    lat: 35.001611, lng: 135.760244, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Straw-grilled bonito is served with salt (October 2026 review) and much is grilled plain; tempura and kara-age are wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and grill izakaya (2026 reviews).',
    hours_raw: 'Mon and Wed 17:00–02:00; Tue, Thu, Fri, Sat and the day before a holiday 17:00–03:00; Sun, holidays and the day after a holiday 17:00–22:00 (Tabelog). The 2nd-floor tables close earlier (17:00–23:30) than the 1st-floor counter; may close early, so call ahead (Tabelog). Cover ¥528 (Tabelog Japanese original 「お通し代528円（税込）」). Cards and QR; no e-money (Tabelog). Counter downstairs; sunken-kotatsu private rooms upstairs (May 2026 review); heated tobacco only, at the counter (June 2026 review). Down a back alley east of Karasuma-Bukkoji, 2 min from Shijo (Tabelog).',
    hours: { 0: MW, 1: LT, 2: MW, 3: LT, 4: LT, 5: LT, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Bukkoji, south of Shijo — 2 min from Shijo Stn',
    cuisine: 'Hidden robatayaki: straw-grilled bonito (katsuo no warayaki) with salt, straw-grilled octopus, Omi beef and camembert; shichirin grilling of turban shells, black wagyu, squid, stingray fin, mirin-dried fish and hokke (2026 reviews); fish from Maizuru port, nigiri and straw grilling (TableCheck); seasonal hamo course (July 2026), baby corn and maitake tempura; about ¥4,000–8,000',
    website: TC, gmaps: gm('隠れ炉端家がぶり'), menu_url: null,
    notes: '[Robatayaki · Shijo-Karasuma] A back-alley robata where bonito, octopus and Omi beef are seared over burning straw at the counter and snacks go on the shichirin; fish from Maizuru, a good sake list, and open to 2–3 am. About ¥4,000–8,000.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The owner picks special sake from the back for regulars (October 2026 review). Fish shipped from Maizuru port (TableCheck).',
      philosophy: null,
      specialty: 'Straw-grilled bonito; shichirin-grilled turban shell.',
      anecdotes: [
        { text: 'A July 2026 couple chose it for an anniversary after a company banquet there, for straw-grilled bonito, octopus and Omi beef seasoned only with salt.', source: R + 'B521326874/' },
        { text: 'A June 2026 diner watched the chef wrap young corn in its husk, batter it and fry it.', source: R + 'B529912716/' },
        { text: 'A November 2026 first-timer was surprised the turban-shell starter was cooked over charcoal.', source: R + 'B538716292/' },
      ],
      japanese_sources_summary: '食べログ: 隠れ炉端家がぶり、居酒屋・魚介料理・炉端焼き、下京区上柳町315-20、阪急烏丸駅・地下鉄四条駅から徒歩2分、月・水 17:00〜翌2:00、火・木・金・土・祝日の前日 17:00〜翌3:00、日・祝日・祝日の翌日 17:00〜22:00、2階のテーブル席は23:30まで、お通し528円、カード・QR 可、電子マネー不可。TableCheck: Maizuru 港の魚、にぎりと藁焼き。口コミ (2026年、英語): カツオの藁焼きを塩で、タコ、Omi の牛肉、七輪でサザエ、黒毛和牛、イカ、ホッケ、鱧のコース、掘りごたつの個室。',
      confidence: 'medium', sources: [TB, TC, R + 'B512806160/', R + 'B521326874/', R + 'B524631025/', R + 'B529912716/', R + 'B530794355/', R + 'B531017436/', R + 'B532831588/', R + 'B537611945/', R + 'B538716292/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter downstairs; private rooms upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸仏光寺東入ル上柳町315-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and TableCheck; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.001611, 135.760244); cross-checked: GSI 京都府京都市下京区上柳町315番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524631025/', R + 'B532831588/'],
    price_note: 'No item prices in reviews; TableCheck gives about ¥3,500–6,000; ¥528 cover.', last_checked: TODAY, items: [
      it('', '', 'Straw-grilled bonito (katsuo no warayaki)', '', 'Straw grill', 'ask', 'no', '2026 reviews; served with salt.', 'warayaki'),
      it('', '', 'Grilled turban shell', '', 'Shichirin', 'ask', 'no', '2026 reviews.', 'sazae'),
      it('', '', 'Hamo course', '', 'Courses', 'no', 'no', 'July 2026 review (seasonal).', 'hamo'),
    ] }, {
    cuisine: '隠れ家の炉端焼き: カツオの藁焼きを塩で、藁焼きのタコ、Omi の牛肉、カマンベール、七輪で焼くサザエ、黒毛和牛、イカ、エイヒレ、みりん干し、ホッケ (2026年の口コミ)、Maizuru 港の魚、にぎりと藁焼き (TableCheck)、季節の鱧のコース (2026年7月)、ヤングコーンと舞茸の揚げ物、4,000〜8,000円ほど',
    neighborhood: '烏丸仏光寺、四条の南。四条駅から徒歩2分',
    gf_detail: '要確認。カツオの藁焼きは塩で (2026年10月の口コミ)、素焼きのものも多い。揚げ物と唐揚げは小麦。',
    vegan_detail: 'ヴィーガン不可。魚介と焼き物の居酒屋 (2026年の口コミ)。',
    notes: '[炉端焼き・四条烏丸] 路地裏の隠れ家の炉端。カウンターでカツオやタコ、Omi の牛肉を藁で焼き、つまみは七輪で。Maizuru の魚と豊富な日本酒、深夜2〜3時まで。4,000〜8,000円ほど。',
  });
}

// ================================================================ 珈琲 蔦家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001137/'; const R = TB + 'dtlrvwlst/';
  const D = day(['09:00', '18:00']);
  put({
    id: 'kyoto_coffee_tsutaya_rokkaku', name: '珈琲 蔦家 (Coffee Tsutaya)', category: 'OMNI',
    lat: 35.007362, lng: 135.761187, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee and pudding; apple pie, cookies and Napolitan pasta are wheat (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black straight coffees; the pudding and cakes have egg and dairy (2026 reviews).',
    hours_raw: 'Daily 9:00–18:00 (L.O. 17:30); closed on holidays; breakfast orders until 12:00; occasional closures when short of staff; hours may change (Tabelog). Phone bookings 8:30–18:00 (Tabelog). Cards, e-money and QR (Tabelog). Smoking allowed throughout except two terrace seats (Tabelog; 2026 reviews). Ground floor of the Royal Plaza building at Higashinotoin-Rokkaku (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-Rokkaku — between Karasuma-Oike and Shijo',
    cuisine: 'Classic kissa: straight coffees such as Bolivia and rich iced coffee, biscotti or cookies with drinks (2026); the retro firm Tsutaya pudding with cream and a cherry, about ¥500 (2026); homemade apple pie with ice cream and Napolitan pasta (May 2026); breakfast until noon (Tabelog); a Murakami Kaishindo cookie set in spring 2026',
    website: null, gmaps: gm('珈琲 蔦家 東洞院六角'), menu_url: null,
    notes: '[Kissa · Karasuma] A blue-tiled retro coffee house in business since 1986, with cups lining the walls, a firm classic pudding and straight coffees — and a pilgrimage spot for fans of the anime "The Eccentric Family". Under ¥1,500; smoking allowed inside.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A long-established coffee shop in business since 1986 (July 2026 review), known to fans of the anime Uchoten Kazoku (April 2026 reviews).',
      philosophy: null,
      specialty: 'Tsutaya pudding; straight coffee.',
      anecdotes: [
        { text: 'A September 2026 visitor came back after a year for the pudding that had sold out before, waited 30 minutes at noon, and finally got it.', source: R + 'B531915763/' },
        { text: 'A March 2026 guest ordering tea and coffee was surprised to get biscotti on the side.', source: R + 'B525311549/' },
      ],
      japanese_sources_summary: '食べログ: 珈琲 蔦家、喫茶店、中京区東洞院六角御射山町260 ロイヤルプラザ1F、毎日 9:00〜18:00 (L.O. 17:30)、祝日休み、モーニングは12時まで、カード・電子マネー・QR 可、テラス2席以外は喫煙可。口コミ (2026年、英語): 1986年からの老舗、青いタイルの外観、壁のカップ、昔ながらの固めのプリン (約500円)、ストレートコーヒー、アップルパイ、ナポリタン、アニメ「Uchoten Kazoku」のファン。',
      confidence: 'medium', sources: [TB, R + 'B525311549/', R + 'B525491374/', R + 'B525589796/', R + 'B526745814/', R + 'B528291059/', R + 'B530074203/', R + 'B531915763/', R + 'B532130559/', R + 'B532434520/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking inside; busy at noon.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院六角御射山町260 ロイヤルプラザ １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007312, 135.761162), moved 6m NNE to clear kyoto_la_princesse (0.4m, 2nd floor of the same building); cross-checked: GSI 京都府京都市中京区御射山町260番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532130559/'],
    price_note: 'Pudding price from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Tsutaya pudding (eat-in, with cream and a cherry)', 'about ¥500', 'Sweets', 'ask', 'no', 'July 2026 review.', 'pudding'),
      it('', '', 'Homemade apple pie with ice cream', '', 'Sweets', 'no', 'no', 'May and July 2026 reviews.', 'apple_pie'),
      it('', '', 'Napolitan pasta', '', 'Food', 'no', 'no', 'May 2026 review.', 'napolitan'),
    ] }, {
    cuisine: '昔ながらの喫茶: ボリビアなどのストレートコーヒー、濃いアイスコーヒー、飲み物にビスコッティやクッキー (2026年)、クリームとさくらんぼの固めの蔦家プリン、約500円 (2026年)、自家製アップルパイとアイス、ナポリタン (2026年5月)、モーニングは12時まで (食べログ)、2026年春は Murakami Kaishindo のクッキーのセット',
    neighborhood: '東洞院六角。烏丸御池と四条の間',
    gf_detail: '要確認。コーヒーとプリン。アップルパイ、クッキー、ナポリタンは小麦 (2026年の口コミ)。',
    vegan_detail: '要確認。ブラックのストレートコーヒー。プリンとケーキは卵と乳製品入り (2026年の口コミ)。',
    notes: '[喫茶・烏丸] 1986年からの青いタイルのレトロな喫茶店。壁に並ぶカップ、昔ながらの固めのプリン、ストレートコーヒー。アニメ「Uchoten Kazoku」のファンの聖地でも。1,500円以内、店内は喫煙可。',
  });
}

// ================================================================ 八百一本館 レストランきょうのおかず
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022113/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.kyotoyaoichihonkan.com/restaurant01.html';
  const D = day(['11:00', '15:30'], ['17:00', '21:00']);
  put({
    id: 'kyoto_kyo_no_okazu_yaoichi', name: '八百一本館 レストランきょうのおかず (Kyo no Okazu)', category: 'OMNI',
    lat: 35.007654, lng: 135.76122, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Steamed vegetables with salt, yuzu pepper or miso, rice and tofu dishes (2026 reviews); dashi and soy are likely, and kara-age is wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetable-led sets, some meat-free (June 2026 review), but dashi, egg and chicken appear in many dishes (2026 reviews).',
    hours_raw: 'Mon, Wed–Sun 11:00–15:30 (food L.O. 15:00) and 17:00–21:00 (food L.O. 20:30); closed Tuesdays; hours may change (Tabelog). The daily side-dish lunch is limited to 10 servings (June and October 2026 reviews). Cards (JCB, AMEX, Diners) and e-money; no QR (Tabelog). Counter for solo diners and tables; non-smoking; takeaway (Tabelog; October 2026 review). 2nd floor of 京都八百一本館, above the vegetable market, on Higashinotoin south of Sanjo (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-Sanjo — 5 min from Karasuma-Oike Stn',
    cuisine: 'Vegetable-led Kyoto home cooking from the greengrocer downstairs: the daily lunch of steamed vegetables with salt, yuzu pepper and red and white miso, 16-grain rice, soup, a soft egg and simmered tofu (May and September 2026); a 10-serving side-dish lunch of nine small dishes (October 2026); fried aubergine with dipping sauce, tofu with mekabu (June 2026); evening gozen sets with okara, fried Kamo aubergine, chawanmushi and a choice of kara-age or winter melon with chicken meatballs (August 2026), a ¥3,200 course (July 2026); Kyoto craft beer and sake; about ¥2,000–5,000',
    website: WEB, gmaps: gm('八百一本館 きょうのおかず'), menu_url: null,
    notes: '[Vegetable washoku · Karasuma] The restaurant above the 京都八百一 greengrocer: generous Kyoto vegetable sets of steamed vegetables, small side dishes, multigrain rice and soup, with a few meat mains. About ¥2,000–3,000 at lunch.',
    chef_bio: { chef_name: null, roles: ['Restaurant of 京都八百一本館'], origin: null,
      background: 'Opened 20 April 2013 (Tabelog); run by the well-known vegetable shop downstairs (August 2026 review), a sister of SAVORY on the 3rd floor.',
      philosophy: null,
      specialty: 'Steamed-vegetable lunch; side-dish assortment.',
      anecdotes: [
        { text: 'An October 2026 regular arrived early and got one of the ten daily side-dish lunches — nine small dishes — before bookings filled the room.', source: R + 'B537427631/' },
        { text: 'A June 2026 diner who dislikes tofu and mekabu was won over by the two together and found the meat-free lunch filling.', source: R + 'B530219235/' },
      ],
      japanese_sources_summary: '食べログ: 八百一本館 レストランきょうのおかず、野菜料理・オーガニック、中京区三文字町220 京都八百一本館2F、月・水〜日 11:00〜15:30・17:00〜21:00、火曜休み、カード・電子マネー可、QR 不可、禁煙、テイクアウト可、2013年4月20日オープン。口コミ (2026年、英語): 1階は京都の野菜の売り場、蒸し野菜と雑穀米の日替わりランチ、10食限定のおかずの盛り合わせ、夜の御膳と3,200円のコース、唐揚げ、茶碗蒸し、京都のクラフトビール。',
      confidence: 'medium', sources: [TB, WEB, R + 'B527882572/', R + 'B530219235/', R + 'B531503447/', R + 'B533300090/', R + 'B536242237/', R + 'B537427631/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter for solo diners; book at lunch on weekends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東洞院通三条下る三文字町220 京都八百一本館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007654, 135.761220); cross-checked: GSI 京都府京都市中京区三文字町220番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531503447/', R + 'B527882572/'],
    price_note: 'Course price from a July 2026 review; lunch about ¥2,000–3,000 (reviews).', last_checked: TODAY, items: [
      it('', '', 'Daily lunch: steamed vegetables with 16-grain rice', '', 'Lunch', 'ask', 'ask', 'May and September 2026 reviews; served with egg.', 'mushi_yasai'),
      it('', '', 'Side-dish assortment lunch (10 a day)', '', 'Lunch', 'ask', 'ask', 'June and October 2026 reviews.', 'okazu'),
      it('', '', 'Evening course', '¥3,200', 'Dinner', 'ask', 'no', 'July 2026 review; with kara-age.', 'course'),
    ] }, {
    cuisine: '1階の八百屋の野菜の京都の家庭料理: 塩、柚子胡椒、白味噌と赤味噌で食べる蒸し野菜に十六穀米、汁物、温玉、煮た豆腐の日替わりランチ (2026年5月・9月)、9品の小鉢の10食限定のおかずランチ (2026年10月)、揚げなすのつけ汁、めかぶ豆腐 (2026年6月)、夜はおから、Kamo なすの揚げ物、茶碗蒸し、唐揚げか冬瓜と鶏団子の煮物を選ぶ御膳 (2026年8月)、3,200円のコース (2026年7月)、京都のクラフトビールと日本酒、2,000〜5,000円ほど',
    neighborhood: '東洞院三条。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。塩、柚子胡椒、味噌で食べる蒸し野菜、ご飯と豆腐の料理 (2026年の口コミ)。出汁と醤油を使う可能性が高く、唐揚げは小麦。',
    vegan_detail: '要確認。野菜中心で肉なしのセットもある (2026年6月の口コミ) が、多くの料理に出汁、卵、鶏。',
    notes: '[野菜の和食・烏丸] 京都八百一の八百屋の2階のレストラン。蒸し野菜、小鉢、雑穀米、汁物のたっぷりの京都の野菜のセットに、肉のおかずも少し。昼は2,000〜3,000円ほど。',
  });
}

save();
