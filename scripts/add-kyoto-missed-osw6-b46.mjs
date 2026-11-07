// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 46.
//   + 御肴 凸鉾 Osakana Dekoboko (seafood and sake izakaya in a renovated townhouse by Kyoto Stn) — notable
//   + 馳走 あい田 Chisou Aida (one-chef Kyoto kaiseki in a Marutamachi townhouse) — core
//   + ココチカフェ COCOCHI CAFE (seasonal fruit tarts and themed sweets, Karasuma Marutamachi) — core
//   + 赤星 Akaboshi (kushikatsu counter in the Rido alley, Karasuma Shichijo) — core, filling the notable slot
//   - skip 26038126 みのるダイニング 京都ポルタ店 (chain)
//   - skip 26002762 酔心 京都駅前店 (chain)
//   - skip 26043670 I'm donut? 京都河原町 (chain)
//   - skip 26010280 麺家いろは 京都駅ビル店 (chain)
//   - skip 26039518 鮨 天ぷら 祇園いわい (same brand as an Osaka record in data)
//   Per the coordinator, the notable list was down to chains, so the batch is filled from core.
//   Same-name counts first, per brand or operator (2026-11-06): 凸鉾 — one. あい田 — one. ココチカフェ — one. 赤星 — one.
//   Taken on 2026-11-06: `next notable 200` (lane) gave 凸鉾 26014300 and the five skips; `next core 200` (lane) gave あい田
//   26041306, ココチカフェ 26029108 and 赤星 26005714. None is in data/kyoto.json: grep by name and address (飴屋町254,
//   弁財天町294, 道場町4-8, 東境町180 リド飲食街 1号室 — shared with kyoto_sakenoateya_jijibaba, a different shop) found none.
//   Service charges per Tabelog's Japanese original: 凸鉾 「付出し480円／コース時は除く」; あい田 「サービス料、チャージ料理無し」;
//   ココチカフェ and 赤星 none listed. No halal claims; no owner deaths in the sources; no remarks about other diners kept.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-46');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26038126', 'chain: Minoru Dining — Tabelog lists shops in Okayama, Kyoto Porta, Nagoya, Morioka and Sapporo (https://tabelog.com/en/rstLst/?sw=%E3%81%BF%E3%81%AE%E3%82%8B%E3%83%80%E3%82%A4%E3%83%8B%E3%83%B3%E3%82%B0).');
skip('26002762', 'chain: Suishin — Tabelog lists Suishin shops at Shinbashi, ekie Hiroshima, AEON Mall Hiroshima Fuchu and elsewhere besides Kyoto Ekimae (https://tabelog.com/en/rstLst/?sw=%E9%85%94%E5%BF%83).');
skip('26043670', 'chain: I’m donut? — Tabelog lists shops in Nakameguro, Tenjin, Shibuya, Omotesando, Ikebukuro, Jiyugaoka, Yokohama and more (https://tabelog.com/en/rstLst/?sw=I%27m%20donut).');
skip('26010280', 'chain: Menya Iroha — Tabelog lists shops at Toyama Stn, Imizu (main shop), Ebina, Nagoya Stn and elsewhere besides Kyoto Station Building (https://tabelog.com/en/rstLst/?sw=%E9%BA%BA%E5%AE%B6%E3%81%84%E3%82%8D%E3%81%AF).');
skip('26039518', 'same-concept branch of a brand already in data: 鮨 天ぷら いわい — data has 北新地 鮨 天ぷら いわい 別邸 (Osaka); Tabelog also lists an Akasaka shop (https://tabelog.com/en/rstLst/?sw=%E7%A5%87%E5%9C%92%E3%81%84%E3%82%8F%E3%81%84).');

// ================================================================ 御肴 凸鉾
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26014300/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_osakana_dekoboko', name: '御肴 凸鉾 (Osakana Dekoboko)', category: 'OMNI',
    lat: 34.989909, lng: 135.761234, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood izakaya with sashimi, sushi, gyoza, fried tofu and potato salad (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led izakaya — sashimi platters, sushi, dashi dishes (2026 reviews).',
    hours_raw: '16:00–23:00 daily (last order food 22:00, drinks 22:30); closed 31 December and 1 January (Tabelog). Reservations accepted; seating limited to 2½ hours; call for a private room; seat-only bookings order one drink and one dish each (Tabelog). Appetizer charge ¥480, not charged with courses (Tabelog, Japanese text: 「付出し480円／コース時は除く」). Cards incl. UnionPay, e-money and PayPay (Tabelog). 56 seats: counter, tables and private rooms in a renovated townhouse (Tabelog; July and September 2026). Non-smoking (Tabelog). On Higashinotoin north of Shichijo, 3 min from Kyoto Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin Shichijo — 3 min from Kyoto Stn',
    cuisine: 'Fresh fish and a wide list of rare Japanese sake at fair prices (July 2026) · seven-kind sashimi platter (October 2026) · sesame tofu, komatsuna with fried tofu, mozuku in vinegar, sushi, potato salad with aonori, green-onion gyoza (July 2026) · courses with all-you-can-drink ¥5,500 (September 2026) · seasonal recommendations on a daily list (2026 reviews)',
    website: null, gmaps: gm('御肴 凸鉾 京都駅'), menu_url: TB + 'dtlmenu/',
    notes: '[Seafood izakaya · Kyoto Stn north, sake and fish in a townhouse] A roomy renovated townhouse a few minutes from Kyoto Station, with a counter, tables and private rooms: a seven-kind sashimi platter, sushi, homely small plates and a long, fairly priced list of rare sake, or ¥5,500 courses with all-you-can-drink for groups. ¥480 appetizer charge outside courses. Open daily from 16:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a seafood izakaya and Japanese restaurant with private rooms near Kyoto Station; reviews in 2026 describe a renovated townhouse and a strong sake list.',
      philosophy: null, specialty: 'Sashimi platter; rare Japanese sake.',
      anecdotes: [
        { text: 'An October 2026 business traveller, sent by a hotel manager for a solo meal and drink, found it easy to drink alone at the counter.', source: R + 'B537359389/' },
        { text: 'An October 2026 pair meeting at 17:30 were given the end of the counter to talk, and kept ordering the recommendations.', source: R + 'B538349728/' },
        { text: 'A July 2026 visitor praised the aonori-dusted potato salad and the green-onion gyoza.', source: R + 'B532340195/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・日本料理、下京区東洞院通七条上ル飴屋町254、京都駅から徒歩3分、16:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、12月31日と1月1日休み、予約可、2時間半制、個室は電話で、席のみ予約は1ドリンク1品、付出し480円 (コース時は除く)、カード・電子マネー・PayPay 可、56席、禁煙。口コミ (2026年6月〜10月、英語): 町家の改装、新鮮な刺身、7種盛り、胡麻豆腐、小松菜と揚げ、もずく酢、寿司、青のりのポテトサラダ、ねぎ餃子、珍しい日本酒が手頃、飲み放題付きコース5,500円、宴会に向く。',
      confidence: 'medium', sources: [TB, R + 'B531722531/', R + 'B532172956/', R + 'B532340195/', R + 'B536023723/', R + 'B536825223/', R + 'B536877407/', R + 'B537359389/', R + 'B537362239/', R + 'B538064853/', R + 'B538097689/', R + 'B538349728/', R + 'B538625329/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a table or private room; counter seats suit solo diners; ¥480 appetizer outside courses. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通七条上ル飴屋町254',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989909, 135.761234); cross-checked: GSI 京都府京都市下京区飴屋町254番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536877407/'],
    price_note: 'One course price from September 2026; ¥480 appetizer outside courses (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink', '¥5,500', 'Courses', 'ask', 'no', 'September 2026.', 'course_nomihodai'),
      it('', '', 'Seven-kind sashimi platter', '', 'Sashimi', 'ask', 'no', 'October 2026.', 'sashimi7'),
      it('', '', 'Appetizer charge', '¥480', 'Charge', '', '', 'Tabelog; not with courses.', 'otoshi'),
    ] }, {
    cuisine: '新鮮な魚と、手頃な珍しい日本酒 (2026年7月)・刺身7種盛り (2026年10月)・胡麻豆腐、小松菜と揚げ、もずく酢、寿司、青のりのポテトサラダ、ねぎ餃子 (2026年7月)・飲み放題付きコース5,500円 (2026年9月)・日替わりのおすすめ (2026年の口コミ)',
    neighborhood: '東洞院七条。京都駅から徒歩3分',
    gf_detail: '要確認。刺身、寿司、餃子、揚げ、ポテトサラダのある海鮮居酒屋 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身の盛り合わせ、寿司、出汁の料理の魚の居酒屋 (2026年の口コミ)。',
    notes: '[海鮮居酒屋・京都駅北、町家で魚と日本酒] 京都駅から数分、カウンター、テーブル、個室のある広い町家の居酒屋。刺身7種盛り、寿司、家庭的な小皿、手頃で珍しい日本酒が揃い、宴会には飲み放題付き5,500円のコース。コース以外は付出し480円。毎日16時から。',
  });
}

// ================================================================ 馳走 あい田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041306/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_chisou_aida', name: '馳走 あい田 (Chisou Aida)', category: 'OMNI',
    lat: 35.015929, lng: 135.756371, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kaiseki courses built on dashi, with grilled fish, simmered dishes, rice and dessert (2024–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based kaiseki with hamo, kinmedai, octopus and beef (2024–26 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last food order 13:00), dinner 18:00–22:00 (last food order 20:00); closed Wednesday (Tabelog). Reservation only (Tabelog). Lunch courses cannot be paid by card; cards at dinner, no e-money or QR (Tabelog). No service or cover charge (Tabelog, Japanese text: 「サービス料、チャージ料理無し」). 12 seats — about 8 at the counter and a table for 4 by a small courtyard garden — in a renovated two-storey townhouse (Tabelog; May 2026). Non-smoking (Tabelog). 4 min from Marutamachi Stn exit 4, west of the Imperial Palace (Tabelog; August 2026). Opened 29 July 2024 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Marutamachi, west of the Imperial Palace — 4 min from Marutamachi Stn',
    cuisine: 'Kyoto kaiseki by a young chef working alone, built on a clear dashi (March and May 2026) · dinner course ¥11,000 (August 2024); a special course with premium beef, about ¥33,000 for two with drinks (September 2026) · lunch courses from ¥7,700 to ¥15,500 (May 2026) · seasonal dishes such as grilled kinmedai with Kamo eggplant in broth, hamo-wrapped asparagus (August 2026), grated nagaimo with sea urchin (June 2026), low-temperature octopus, a signature hassun (September 2026) · two kinds of takikomi gohan for a party of four (June 2026); peach desserts in summer (June 2026)',
    website: null, gmaps: gm('馳走 あい田 丸太町'), menu_url: TB + 'dtlmenu/',
    notes: '[Kaiseki · Karasuma Marutamachi, a young chef’s townhouse counter] A 12-seat townhouse with a small courtyard garden where a young chef cooks kaiseki single-handed around a remarkably clear dashi: hassun, hamo, grilled kinmedai, takikomi gohan and fruit desserts. Lunch courses from ¥7,700, dinner from about ¥11,000, no service charge; lunch is cash only. Reservation only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), young, running the restaurant alone (March 2026)'], origin: null,
      background: 'Per Tabelog: a Japanese restaurant opened 29 July 2024 in a two-storey Kyoto townhouse with original pillars and a small garden (May 2026). A March 2026 review describes a young chef running it alone; a November 2026 solo diner chose it for reviews praising the head chef’s character.',
      philosophy: 'The Kyoto aesthetic of subtraction — quality of ingredients over show (May 2026 review).', specialty: 'Dashi-led kaiseki; seasonal hassun.',
      anecdotes: [
        { text: 'A fifth-visit regular in August 2026 praised the grilled kinmedai with Kamo eggplant in broth and plans to return in autumn.', source: R + 'B490405791/' },
        { text: 'A June 2026 diner found the soup broth a little weak but the chef humble and keen to improve, with better ingredients than some famous places.', source: R + 'B521200338/' },
        { text: 'A November 2026 solo traveller chose the counter for the chef’s company and had the seasonal special kaiseki.', source: R + 'B538640443/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区弁財天町294、丸太町駅4番出口から徒歩4分、昼12:00〜15:00 (L.O. 料理13:00)、夜18:00〜22:00 (L.O. 料理20:00)、水曜休み、予約のみ、昼のコースはカード不可、サービス料・チャージなし、12席、禁煙、2024年7月29日オープン。口コミ (2024年8月〜2026年11月、英語): 若い料理人が一人で営む、町家と坪庭、澄んだ出汁、夜のコース11,000円、昼は7,700〜15,500円、特別コース、金目鯛と賀茂茄子、鱧のアスパラ巻き、うにと長芋、蛸、八寸、炊き込みご飯2種、桃のデザート。',
      confidence: 'medium', sources: [TB, R + 'B490405791/', R + 'B499423687/', R + 'B515736773/', R + 'B519230442/', R + 'B521200338/', R + 'B523768783/', R + 'B528877422/', R + 'B531759067/', R + 'B534138342/', R + 'B536009271/', R + 'B536875206/', R + 'B538640443/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reserve a course; counter seats face the chef; lunch is cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区弁財天町294',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.015929, 135.756371); cross-checked: GSI 京都府京都市中京区弁財天町294番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B490405791/', R + 'B528877422/'],
    price_note: 'Dinner ¥11,000 (August 2024); lunch ¥7,700–15,500 (May 2026).', last_checked: TODAY, items: [
      it('', '', 'Lunch course', 'from ¥7,700', 'Lunch', 'ask', 'no', 'May 2026; cash only.', 'lunch_course'),
      it('', '', 'Dinner course', '¥11,000', 'Dinner', 'ask', 'no', 'August 2024.', 'dinner_course'),
      it('', '', 'Special course (premium beef)', '', 'Dinner', 'ask', 'no', 'September 2026.', 'special_course'),
    ] }, {
    cuisine: '若い料理人が一人で作る、澄んだ出汁の京懐石 (2026年3月・5月)・夜のコース11,000円 (2024年8月)、上質な牛肉の特別コースは2人で飲み物込み約33,000円 (2026年9月)・昼のコースは7,700〜15,500円 (2026年5月)・金目鯛の焼き物と賀茂茄子の出汁、鱧のアスパラ巻き (2026年8月)、うにと長芋 (2026年6月)、低温調理の蛸、看板の八寸 (2026年9月)・4人なら炊き込みご飯2種 (2026年6月)、夏は桃のデザート (2026年6月)',
    neighborhood: '烏丸丸太町、御所の西。丸太町駅から徒歩4分',
    gf_detail: '要確認。出汁が基本の懐石で、焼き魚、炊き合わせ、ご飯、デザート (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。鱧、金目鯛、蛸、牛肉の出汁の懐石 (2024〜2026年の口コミ)。',
    notes: '[懐石・烏丸丸太町、若い料理人の町家のカウンター] 坪庭のある12席の町家で、若い料理人が一人で驚くほど澄んだ出汁の懐石を作る。八寸、鱧、金目鯛の焼き物、炊き込みご飯、果物のデザート。昼は7,700円から、夜は約11,000円から、サービス料なし。昼は現金のみ。予約のみ、水曜休み。',
  });
}

// ================================================================ ココチカフェ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029108/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://cocochi.space/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'kyoto_cocochi_cafe', name: 'ココチカフェ (COCOCHI CAFE)', category: 'OMNI',
    lat: 35.017288, lng: 135.757723, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tarts, crepes, roll cake, cookies and burgers (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream-filled tarts and crepes, ice cream, burgers (2026 reviews).',
    hours_raw: 'Wed–Sun 11:00–18:00; closed Monday and Tuesday (Tabelog). No table reservations, but seasonal whole-fruit tarts can be reserved by phone on the day (Tabelog; July 2026). Cards (AMEX), e-money and QR (Tabelog). 10 seats: 4 at the counter, three tables for two (Tabelog). Non-smoking; pets welcome; take-away (Tabelog). On Marutamachi, 5 min from Marutamachi Stn (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma Marutamachi, on Marutamachi — 5 min from Marutamachi Stn',
    cuisine: 'Seasonal fruit sweets and themed plates (2026 reviews) · whole-peach tart ¥935–950, with iced coffee ¥1,400 (July–August 2026) · whole-peach crepe with a Momotaro cookie ¥1,500, peach cream soda ¥700 (August 2026) · Miyazaki mango collaboration (June 2026) · moon-viewing sweets (September 2026) · Halloween plates, tarts and a "Trick or Burger" ¥1,500 (October 2026) · persimmon anmitsu parfait ¥1,320, persimmon Mont Blanc tart ¥770, squirrel nut roll cake ¥550 (October 2026) · ¥100 off with a drink (August 2026)',
    website: OF, gmaps: gm('COCOCHI CAFE 丸太町'), menu_url: TB,
    notes: '[Café · Karasuma Marutamachi, whole-fruit tarts and themed sweets] A ten-seat café on Marutamachi known for seasonal showpieces — a whole-peach tart in summer, persimmon parfaits in autumn — plus playful moon-viewing and Halloween plates and a burger. Phone on the day to reserve a fruit tart; pets welcome. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a café and cake shop on Marutamachi with take-away and pets allowed; a regular’s October 2026 review describes seasonal and event menus each year.',
      philosophy: null, specialty: 'Whole-peach tart; seasonal themed sweets.',
      anecdotes: [
        { text: 'A July 2026 visitor called at 10:00 to reserve a peach tart and ate it at noon.', source: R + 'B531641240/' },
        { text: 'A June 2026 visitor returned after several years for the Miyazaki mango collaboration.', source: R + 'B529583879/' },
        { text: 'A July 2026 visitor found the staff bright and friendly, and the peach tart full of cream.', source: R + 'B533719235/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・ケーキ、中京区道場町4-8、丸太町駅から徒歩5分、水〜日11:00〜18:00、月火休み、予約不可、カード (AMEX)・電子マネー・QR 可、10席 (カウンター4、2人席3)、禁煙、ペット可、テイクアウト。口コミ (2026年5月〜10月、英語): 丸ごと桃のタルト935〜950円、アイスコーヒーとで1,400円、桃のクレープ1,500円、ピーチソーダ700円、Miyazaki のマンゴーとのコラボ、お月見のスイーツ、ハロウィンのプレートとバーガー1,500円、柿のあんみつパフェ1,320円、柿のモンブランタルト770円、ロールケーキ550円、ドリンクと一緒で100円引き、当日の電話でタルトを取り置き。',
      confidence: 'medium', sources: [TB, OF, R + 'B468363138/', R + 'B487169933/', R + 'B491489795/', R + 'B494158401/', R + 'B527568049/', R + 'B529120530/', R + 'B529583879/', R + 'B530722888/', R + 'B531641240/', R + 'B533719235/', R + 'B534854305/', R + 'B535839647/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; call ahead on the day to hold a seasonal fruit tart; pets welcome. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区道場町4-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017288, 135.757723); cross-checked: GSI 京都府京都市中京区道場町4番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B468363138/', R + 'B487169933/', R + 'B491489795/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Whole-peach tart', '¥935', 'Seasonal', 'no', 'no', 'July 2026.', 'peach_tart'),
      it('', '', 'Whole-peach crepe', '¥1,500', 'Seasonal', 'no', 'no', 'August 2026.', 'peach_crepe'),
      it('', '', 'Persimmon anmitsu parfait', '¥1,320', 'Seasonal', 'ask', 'ask', 'October 2026.', 'kaki_parfait'),
      it('', '', 'Squirrel nut roll cake', '¥550', 'Cakes', 'no', 'no', 'October 2026.', 'roll_cake'),
    ] }, {
    cuisine: '季節の果物の菓子と季節の企画のプレート (2026年の口コミ)・丸ごと桃のタルト935〜950円、アイスコーヒーとで1,400円 (2026年7月〜8月)・桃太郎のクッキーがのる丸ごと桃のクレープ1,500円、ピーチのクリームソーダ700円 (2026年8月)・Miyazaki のマンゴーとのコラボ (2026年6月)・お月見のスイーツ (2026年9月)・ハロウィンのプレートやタルト、バーガー1,500円 (2026年10月)・柿のあんみつパフェ1,320円、柿のモンブランタルト770円、リスとナッツのロールケーキ550円 (2026年10月)・ドリンクと一緒で100円引き (2026年8月)',
    neighborhood: '烏丸丸太町、丸太町通。丸太町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。タルト、クレープ、ロールケーキ、クッキー、バーガー (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリームのタルトやクレープ、アイス、バーガー (2026年の口コミ)。',
    notes: '[カフェ・烏丸丸太町、丸ごと果物のタルトと季節の菓子] 丸太町通の10席のカフェ。夏は丸ごと桃のタルト、秋は柿のパフェと季節の看板菓子に、お月見やハロウィンの遊び心あるプレートやバーガーも。果物のタルトは当日電話で取り置きを。ペット可。月火休み。',
  });
}

// ================================================================ 赤星
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26005714/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '01:00']);
  put({
    id: 'kyoto_akaboshi_rido', name: '赤星 (Akaboshi)', category: 'OMNI',
    lat: 34.989147, lng: 135.758733, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered, deep-fried kushikatsu (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and fish skewers fried in shared oil (2023–26 reviews).',
    hours_raw: '18:00–1:00, closed irregularly (Tabelog). No reservations (Tabelog); the alley fills on weekend nights (February 2026). Cards (VISA, Master, JCB, AMEX), no e-money (Tabelog). A counter of 8 seats, extended with 5 more on reopening in November 2025 (Tabelog lists 14) (Tabelog; November 2025). Smoking allowed (Tabelog). One person can be working a full counter, so skewers may take a while (February 2026). Room 1 of the Rido dining alley, 100 m west of Karasuma Shichijo; 5 min from Kyoto Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rido dining alley, Karasuma Shichijo — 5 min from Kyoto Stn',
    cuisine: 'Bite-sized kushikatsu with a light batter (September 2023; November 2025) · skewers of beef, shishamo, lotus root, asparagus and pickled ginger; grilled aburaage and grilled Manganji pepper (February 2026) · Sapporo Lager "Akaboshi" beer, strong shochu highballs and sake (2023–26 reviews)',
    website: null, gmaps: gm('赤星 串カツ リド飲食街'), menu_url: TB,
    notes: '[Kushikatsu · Rido alley by Kyoto Stn, a tiny late-night counter] A small kushikatsu counter in a corner of the Showa-era Rido dining alley, open to 1 am: bite-sized skewers in a light batter, grilled aburaage and Manganji pepper, with Akaboshi beer. Reopened in November 2025 with a few more seats; one cook can mean a wait when it is full. Smoking allowed; walk in.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), described as charming (November 2025)'], origin: null,
      background: 'Per Tabelog: a kushiage izakaya with counter seats only, in the Rido dining alley. A November 2025 regular of ten years reported a grand reopening with five more seats.',
      philosophy: null, specialty: 'Bite-sized kushikatsu.',
      anecdotes: [
        { text: 'A November 2025 regular of ten years celebrated the reopening with five extra seats and praised the charming owner.', source: R + 'B517015644/' },
        { text: 'A February 2026 pair got two seats after every other shop in the alley was full, then waited twenty minutes for the first skewer with one person working.', source: R + 'B522483916/' },
        { text: 'A September 2023 diner found the batter light and the shochu highball poured strong.', source: R + 'B470905855/' },
      ],
      japanese_sources_summary: '食べログ: 串揚げ・居酒屋、下京区七条通烏丸西入ル東境町180 リド飲食街 1号室、京都駅から徒歩5分、18:00〜翌1:00、不定休、予約不可、カード可、カウンター14席、喫煙可。口コミ (2023年8月〜2026年5月、英語): 昭和レトロなリド飲食街の角、一口の串カツ、軽い衣、牛・ししゃも・蓮根・アスパラ・紅生姜の串、焼き揚げ、Manganji の唐辛子の焼き物、赤星 (瓶ビール)、濃いめの焼酎ハイボール、2025年11月に5席増やして再開、一人で回すので時間がかかることも。',
      confidence: 'medium', sources: [TB, R + 'B469211277/', R + 'B470905855/', R + 'B470996384/', R + 'B472584991/', R + 'B485517668/', R + 'B493692052/', R + 'B498967805/', R + 'B507381873/', R + 'B517015644/', R + 'B522483916/', R + 'B523975878/', R + 'B527267767/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in and take a counter seat; smoking allowed; order skewers one at a time. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸西入ル東境町180 リド飲食街 1号室',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (34.989147, 135.758733); cross-checked: GSI 京都府京都市下京区東境町180番地 (lot) 32m; kyoto_sakenoateya_jijibaba in the same alley is 7.6 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522483916/'],
    price_note: 'No item prices found.', last_checked: TODAY, items: [
      it('', '', 'Kushikatsu (assorted skewers)', '', 'Skewers', 'no', 'no', '2023–26 reviews.', 'kushikatsu'),
      it('', '', 'Grilled aburaage', '', 'Grill', 'ask', 'ask', 'February 2026.', 'yaki_age'),
      it('', '', 'Sapporo Lager "Akaboshi"', '', 'Drinks', 'no', 'ask', 'February 2026.', 'akaboshi_beer'),
    ] }, {
    cuisine: '軽い衣の一口の串カツ (2023年9月、2025年11月)・牛、ししゃも、蓮根、アスパラ、紅生姜の串、焼いた油揚げと Manganji の唐辛子の焼き物 (2026年2月)・サッポロラガーの赤星、濃いめの焼酎ハイボール、日本酒 (2023〜2026年の口コミ)',
    neighborhood: '烏丸七条のリド飲食街。京都駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。衣をつけて揚げる串カツ (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛や魚の串を同じ油で揚げる (2023〜2026年の口コミ)。',
    notes: '[串カツ・京都駅近くのリド飲食街、深夜までの小さなカウンター] 昭和のリド飲食街の角の小さな串カツのカウンター。深夜1時まで、軽い衣の一口串、焼いた揚げと Manganji の唐辛子を、赤星と。2025年11月に席を増やして再開。一人で回すので満席だと待つことも。喫煙可、予約不可。',
  });
}

save();
