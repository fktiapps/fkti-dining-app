// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 37.
//   + キュロット Culotte (signless café for solo diners only, Takeyamachi Aburanokoji; core list)
//   + 蛸安 岡崎本店 Tako Yasu Okazaki (six-seat crispy-takoyaki shop in Okazaki; core list)
//   + 大むら Oomura (counter kappo by an ex-Kikunoi chef, opened February 2026; notable list)
//   + 南禅寺 順正 Nanzenji Junsei (yudofu and yuba in a large garden by Nanzenji; notable list)
//   - ラーメン横綱 五条店 26005087 (core): chain — three ラーメン横綱 in our crawls (Kyoto Gojo, two in Osaka), and the
//     official site 4527.com groups its shops into Kyoto, Osaka/Hyogo/Wakayama, Tokai and Kanto regions (opened 2026-11-06).
//   - 餃子の王将 府庁前店 26016613 (core, after the picks): national chain — not reached.
//   Picked 2026-11-06 after batch 36. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after the earlier skips
//   (26041687, 26023087, 26026909, 26027215, 26005291, 26035321, 26027719 — ニャーヴェトナム, made a skip at integration —
//   and 26009281): キュロット 26018149, 26005087 (skipped), 蛸安 岡崎本店 26001751. `next notable 200`: 26023579 and
//   26041687 skipped earlier; 大むら 26044423, 南禅寺 順正 26001013. Same-name check, same brand or operator only: キュロット —
//   one; 蛸安 — two, both in Kyoto (岡崎本店 and an Omiya Shichijo shop), so no out-of-city branch; 大むら — one; 順正 — two in
//   our crawls, both in Kyoto (南禅寺 順正 and 清水 順正 おかべ家), under five. None of the four is in data/kyoto.json: grep by
//   name and address (橋本町467, 入江町57-3, 綾西洞院町741-11, 草川町60) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-37');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260101/26005087/', 'chain: ラーメン横綱 — 3 in our crawls; official site 4527.com lists shops across Kyoto, Osaka/Hyogo/Wakayama, Tokai and Kanto');

// ================================================================ キュロット Culotte
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018149/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://culotteskirt.com/';
  const H = day(['14:00', '20:00']);
  put({
    id: 'kyoto_culotte_solo_cafe', name: 'キュロット (Culotte)', category: 'OMNI',
    lat: 35.016129, lng: 135.753348, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: gratins, cornbread, spaghetti, tarte Tatin and baked goods dominate; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese gratins, omurice, chili con carne and cream-heavy desserts (2024–2026 reviews).',
    hours_raw: 'Tuesday–Friday 14:00–20:00; closed Monday, Saturday and Sunday; occasional extra openings such as New Year, announced on Instagram (Tabelog; January 2026). Solo diners only — groups are not seated (2026 reviews). No reservations (Tabelog); a notice on the door shows when it is full (September 2026). A food or dessert order is required — no drinks alone (September 2026). Cash only (Tabelog; September 2026). 12 seats, mostly single tables facing the wall; shoes off at the entrance; no sign outside (Tabelog; 2026 reviews). On the southwest corner of Takeyamachi and Aburanokoji; about 550 m from Nijojo-mae Stn (Tabelog). Reopened 1 June 2011 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takeyamachi and Aburanokoji, east of Nijo Castle — 7 min walk from Nijojo-mae Stn',
    cuisine: 'Quiet home-style café for one, with meals and desserts (2024–2026 reviews) · meals: dried-cod and mashed-potato gratin ¥1,700, a dried-taro gratin, omurice, meat spaghetti, cornbread with chili con carne (2024–2026 reviews) · desserts: strawberry or fig Eton mess with unsweetened cream and meringue ¥2,000, coffee-jelly parfait ¥1,600, tarte Tatin, chocolate terrine, "banana bracelet"; skirt-shaped baked sweets to buy (2024–2026 reviews) · royal milk tea, chai, café au lait, iced Darjeeling; dessert-and-drink sets about ¥1,500–1,800 (2024–2025 reviews) · about ¥1,000–3,000 (Tabelog)',
    website: WEB, gmaps: gm('キュロット 京都 竹屋町 油小路'), menu_url: null,
    notes: '[Solo café · Takeyamachi Aburanokoji, east of Nijo Castle] A signless café where you slip off your shoes and sit alone at a table facing the wall: it seats only solo diners. Order a meal — dried-cod gratin, omurice, cornbread with chili — or a dessert such as a strawberry or fig Eton mess under unsweetened cream, with chai or royal milk tea; no drinks-only. Often full right at 14:00 opening. Cash only. Tuesday–Friday afternoons.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed); a baker of the skirt-shaped sweets sometimes present (January 2026)'], origin: null,
      background: 'Per Tabelog: a cafeteria and Japanese-food listing for a house café, reopened 1 June 2011, with a website at culotteskirt.com. Reviewers in 2026 describe a café exclusively for solo visitors with no sign, shoes off at the door, tables facing the wall, and opening news shared on Instagram.',
      philosophy: 'A space for quality time alone (2026 reviews).', specialty: 'Eton mess; gratin.',
      anecdotes: [
        { text: 'An October 2026 guest arrived two minutes before opening and was waved in early — and the room was full right away.', source: R + 'B538295810/' },
        { text: 'A May 2026 visitor finally got in on the third attempt, after finding it crowded or full twice.', source: R + 'B528215817/' },
        { text: 'A December 2025 regular calls the strawberry Eton mess "the most delicious in the world".', source: R + 'B499524532/' },
      ],
      japanese_sources_summary: '食べログ: 食堂・日本料理、中京区橋本町467 竹屋町油小路南西角、二条城前駅から548m、火〜金 14:00〜20:00、月・土・日定休、予約不可、カード・電子マネー・QR 不可、12席、禁煙、自転車は店の横に、2011年6月1日リニューアルオープン。口コミ (2024年2月〜2026年10月、英語): 看板なし、靴を脱いで上がる、一人客専用 (グループ不可)、壁向きの一人席、満席なら扉に貼り紙、飲み物だけの注文は不可、現金のみ、Instagram で営業日の告知、棒鱈とマッシュポテトのグラタン1,700円、乾燥させた里芋のグラタン、オムライス、ミートスパゲティ、コーンブレッドとチリコンカン、苺や無花果のイートンメス2,000円 (甘くない生クリームとメレンゲ)、コーヒーゼリーのパフェ1,600円、タルトタタン、チョコレートのテリーヌ、スカート形の焼き菓子、ロイヤルミルクティー、チャイ、カフェオレ、ダージリン、ドリンクセット1,500〜1,800円。',
      confidence: 'medium', sources: [TB, WEB, R + 'B479116653/', R + 'B499524532/', R + 'B511952296/', R + 'B528040575/', R + 'B528215817/', R + 'B530139267/', R + 'B530302650/', R + 'B536346892/', R + 'B536936436/', R + 'B538295810/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Solo diners only; shoes off; order food or dessert (no drinks alone); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区橋本町467 竹屋町油小路南西角',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016129, 135.753348); cross-checked: GSI 京都府京都市中京区橋本町467番地 (lot) 70 m; nearest Kyoto record 102 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479116653/', R + 'B528040575/', R + 'B511952296/'],
    price_note: 'Prices from 2024–2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Dried-cod and mashed-potato gratin', '¥1,700', 'Meals', 'no', 'no', 'December 2024.', 'cod_gratin'),
      it('', '', 'Strawberry Eton mess', '¥2,000', 'Desserts', 'ask', 'no', 'April 2026.', 'eton_mess'),
      it('', '', 'Coffee-jelly parfait', '¥1,600', 'Desserts', 'ask', 'no', 'August 2025.', 'coffee_parfait'),
    ] }, {
    cuisine: '食事もデザートもある、一人のための家のような静かなカフェ (2024〜2026年の口コミ)・食事: 棒鱈とマッシュポテトのグラタン1,700円、乾燥させた里芋のグラタン、オムライス、ミートスパゲティ、コーンブレッドとチリコンカン (2024〜2026年の口コミ)・デザート: 甘くない生クリームとメレンゲの苺や無花果のイートンメス2,000円、コーヒーゼリーのパフェ1,600円、タルトタタン、チョコレートのテリーヌ、「バナナのブレスレット」、スカート形の焼き菓子の販売 (2024〜2026年の口コミ)・ロイヤルミルクティー、チャイ、カフェオレ、アイスのダージリン、デザートとドリンクのセット1,500〜1,800円ほど (2024〜2025年の口コミ)・1,000〜3,000円ほど (食べログ)',
    neighborhood: '二条城の東、竹屋町通と油小路通の角。二条城前駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。グラタン、コーンブレッド、スパゲティ、タルトタタン、焼き菓子が中心。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チーズのグラタン、オムライス、チリコンカン、生クリームたっぷりのデザート (2024〜2026年の口コミ)。',
    notes: '[一人カフェ・二条城の東、竹屋町油小路] 看板のないカフェ。靴を脱いで上がり、壁向きの席に一人で座る、一人客専用の店。棒鱈のグラタン、オムライス、コーンブレッドとチリコンカンなどの食事か、甘くない生クリームの苺や無花果のイートンメスなどのデザートを、チャイやロイヤルミルクティーと。飲み物だけは不可。14時の開店と同時に満席になることも。現金のみ。火〜金の午後。',
  });
}

// ================================================================ 蛸安 岡崎本店 Tako Yasu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001751/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['16:00', '21:00']); const WE = day(['15:00', '23:00']);
  put({
    id: 'kyoto_tako_yasu_okazaki', name: '蛸安 岡崎本店 (Tako Yasu Okazaki)', category: 'OMNI',
    lat: 35.017131, lng: 135.783911, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-batter takoyaki with tenkasu and a house sauce (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: octopus takoyaki and octopus dishes (2024–2026 reviews).',
    hours_raw: 'Wednesday–Friday 16:00–21:00; Saturday–Sunday 15:00–23:00; closed Monday and Tuesday; hours may change (Tabelog). No reservations; takeaway (Tabelog). Cash only (Tabelog). 6 counter seats; smoking allowed (Tabelog). A stall-like room where small insects sometimes come in (July 2024). Okazaki Irie-cho, north of Marutamachi; locals pull up by car for takeaway (Tabelog; February 2026).',
    hours: { 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Okazaki Irie-cho, north of Marutamachi — 15 min walk from Higashiyama Stn',
    cuisine: 'Long-established Kyoto takoyaki shop, named alongside Tako Tora (January 2024) · large, irregular takoyaki, very crisp outside from tenkasu and soft inside, with a spicy house sauce; ask for "firm" for extra crunch; about ¥100 a piece, 8 for ¥800 (2024–2026 reviews) · versions with sauce, ponzu or a heap of green onion; "Seiko-chan salad" of takoyaki under shredded cabbage, octopus and green onion (2024 reviews) · tako-chinmi and tako-butsu with gochujang-style sauce; beer and sake (Tabelog; 2024 reviews) · under ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('蛸安 岡崎本店'), menu_url: null,
    notes: '[Takoyaki · Okazaki, a Kyoto classic] A six-seat, stall-like takoyaki counter in Okazaki: big, lumpy balls fried until shatteringly crisp, then sauced, ponzu\'d or buried in green onion, with octopus bites in gochujang on the side and a beer. Most love the crunch; a January 2025 regular found reheated takeaway tough, and others recall a creamier style under the previous owner. Cash only; smoking allowed. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Shop staff (unnamed)'], origin: null,
      background: 'Per Tabelog: the Okazaki head shop of Tako Yasu, a takoyaki counter with takeaway. Reviewers call it a long-established Kyoto takoyaki shop (July 2024); a December 2025 reviewer who ate here as a child remembers a creamier style made by an older man, probably the previous owner, over fifteen years ago.',
      philosophy: null, specialty: 'Crisp takoyaki; tako-chinmi.',
      anecdotes: [
        { text: 'A February 2026 regular buys eight for ¥800 to eat in the car on the way home after dinner.', source: R + 'B523421998/' },
        { text: 'A January 2025 visitor saw takeaway balls being reheated, found the takoyaki tough, and noted the price had reached ¥100 a piece as octopus costs rose.', source: R + 'B499742241/' },
        { text: 'A December 2025 reviewer, who ate here as a child, brought a parent back and found the taste changed from the creamy style remembered from over fifteen years ago.', source: R + 'B518320275/' },
      ],
      japanese_sources_summary: '食べログ: たこ焼き、左京区岡崎入江町57-3、東山駅から946m、水〜金 16:00〜21:00、土日 15:00〜23:00、月・火定休、予約不可、カード・電子マネー・QR 不可、6席 (カウンター)、喫煙可、テイクアウト。口コミ (2022年5月〜2026年2月、英語): 京都の老舗のたこ焼き、Tako Tora と並ぶ名店、不揃いで大きく、天かすで外はカリカリ、中はとろり、ピリッとした独特のソース、「固め」も頼める、ソース、ぽん酢、ねぎたこ、「Seiko-chan」サラダ(キャベツ、たこ、ねぎ)、たこ珍味 (コチュジャン風のたれ)、たこぶつ、1個100円 (8個800円)、屋台のような店内で虫が入ることも、店の人が頑固との声、持ち帰りを温め直していて硬かったとの声 (2025年1月)、昔の店主のころのとろとろの味と違うとの声 (2025年12月)。',
      confidence: 'medium', sources: [TB, R + 'B419667260/', R + 'B486574460/', R + 'B487310036/', R + 'B488585300/', R + 'B489034095/', R + 'B491348586/', R + 'B499742241/', R + 'B514659479/', R + 'B518320275/', R + 'B523421998/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter or to take away; cash only; smoking allowed inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎入江町57-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through February 2026.' },
    pin_source: `Tabelog ${TB} (35.017131, 135.783911); cross-checked: GSI 京都府京都市左京区岡崎入江町57番地 (lot) 62 m; nearest Kyoto record 144 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523421998/', R + 'B499742241/'],
    price_note: 'Prices from January 2025 and February 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Takoyaki (8 pieces)', '¥800', 'Takoyaki', 'no', 'no', 'February 2026.', 'takoyaki_8'),
      it('', '', 'Tako-chinmi (octopus with gochujang-style sauce)', '', 'Small dishes', 'ask', 'no', '2024 reviews.', 'tako_chinmi'),
    ] }, {
    cuisine: 'Tako Tora と並ぶ京都の老舗のたこ焼き店 (2024年1月)・不揃いで大きく、天かすで外はカリカリ、中は柔らかいたこ焼きに、ピリッとした店のソース、「固め」でさらにカリッと、1個100円ほど、8個800円 (2024〜2026年の口コミ)・ソース、ぽん酢、たっぷりのねぎ、千切りキャベツとたことねぎをのせた「Seiko-chan」サラダ(2024年の口コミ)・コチュジャン風のたれのたこ珍味とたこぶつ、ビールと日本酒 (食べログ、2024年の口コミ)・1,000〜2,000円未満 (食べログ)',
    neighborhood: '丸太町の北の岡崎入江町。東山駅から徒歩15分',
    gf_detail: 'グルテンフリー不可。天かすと店のソースの小麦の生地のたこ焼き (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。たこのたこ焼きとたこの料理 (2024〜2026年の口コミ)。',
    notes: '[たこ焼き・岡崎、京都の定番] 岡崎の屋台のようなカウンター6席のたこ焼き店。大きく不揃いな玉をカリカリに焼き、ソース、ぽん酢、山盛りのねぎで。コチュジャンのたこの珍味とビールも。カリカリを愛する声が多いが、2025年1月の常連は温め直しの持ち帰りが硬かったと書き、昔の店主のころのとろとろの味を懐かしむ声もある。現金のみ、喫煙可。月・火曜休み。',
  });
}

// ================================================================ 大むら Oomura
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044423/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_oomura_nishinotoin', name: '大むら (Oomura)', category: 'OMNI',
    lat: 35.001960, lng: 135.755001, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: the restaurant asks to be told of allergies (Tabelog). A dashi-led omakase with tempura and soy-glazed eel among the courses (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kappo omakase with eel, ayu, conger eel, crab and Kumamoto beef (2026 reviews).',
    hours_raw: 'Daily 17:00–23:00; closing days vary (Tabelog). Reservations accepted, for one or more; tell the restaurant about allergies; children welcome with a kids menu on request (Tabelog; October 2026). One omakase course, ¥15,000 tax included with no service charge from September 2026 (2026 reviews); BYO drinks allowed per Tabelog (Tabelog). Cards; no e-money or QR (Tabelog). 8 counter seats with a charcoal grill in front; private hire up to 20; non-smoking (Tabelog; September 2026). In a quiet lane by Shijo Nishinotoin, west of Shijo Karasuma; 5 min walk from Shijo Stn (Tabelog; September 2026). Opened 5 February 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo Nishinotoin, west of Shijo Karasuma — 5 min walk from Shijo Stn',
    cuisine: 'Kappo omakase by a chef from Kikunoi and Gion Rohan, with charcoal grilling and clay-pot rice (2026 reviews) · one course, ¥15,000 from September 2026, e.g. scallops with yuba and dashi jelly; charcoal-grilled eel with young corn or ginkgo and chestnut; sashimi of Akashi octopus, kelp-cured flounder, seared chutoro; a soup of conger eel and matsutake; Lake Biwa ayu with roe over charcoal; crab in vinegar jelly; figs in white-miso or sesame sauce (September–October 2026) · Kumamoto black wagyu sirloin cap over charcoal; clay-pot rice of Tanba Koshihikari with dried sardines, homemade mentaiko, chirimen and shibazuke; red miso soup; almond tofu (2026 reviews) · sake such as Junraku Dai; shiso juice; Ippodo hojicha ¥400 · about ¥15,000–20,000 a head with drinks (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('大むら 京都 綾西洞院'), menu_url: null,
    notes: '[Kappo omakase · Shijo Nishinotoin, opened 2026] A new eight-seat counter of wood and clay walls where Mr. Oomura, trained at Kikunoi and later head chef of Gion Rohan, cooks one seasonal course for ¥15,000 with no service charge: charcoal-grilled eel and Lake Biwa ayu, conger eel and matsutake soup, Kumamoto beef, and clay-pot rice with homemade mentaiko. Warm and cheerful at the counter, though one guest wanted more polish. Evenings; book ahead.',
    chef_bio: { chef_name: 'Oomura', roles: ['Owner-chef (Mr. Oomura, as named by reviewers)', 'A couple runs the counter (September 2026 review)'], origin: null,
      background: 'Per Tabelog: opened 5 February 2026, a counter of Japanese cuisine using seasonal ingredients; registered as an official listing by the shop. Reviewers write that Mr. Oomura worked at Kikunoi in Akasaka and Kyoto, then served four and a half years as head chef of Gion Rohan before going independent (September–October 2026), sourcing seafood and Kyoto vegetables each morning; a September 2026 reviewer notes it is just the couple running the place.',
      philosophy: 'Seasonal seafood and Kyoto vegetables bought fresh each morning (October 2026 review).', specialty: 'Charcoal-grilled eel and ayu; clay-pot rice.',
      anecdotes: [
        { text: 'On a full night in September 2026 the three groups arrived at slightly different times, so the clay-pot rice was cooked three separate times.', source: R + 'B525563942/' },
        { text: 'A September 2026 guest wished the ¥400 Ippodo hojicha were brewed in a teapot and the soup bowl warmed first, allowing that a couple-run counter may be short-handed.', source: R + 'B535477995/' },
        { text: 'An October 2026 diner found the chef cheerful enough to lift the spirits, and two shared ¥39,000 with drinks.', source: R + 'B531024876/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、下京区綾西洞院町741-11、市バス「四条西洞院」から徒歩3分、地下鉄四条駅から徒歩5分、毎日 17:00〜23:00、休みは変わることあり、予約可 (アレルギーは知らせる)、カード可、電子マネー・QR 不可、8席 (カウンター)、貸切20名まで、禁煙、持ち込み可、子ども可 (キッズメニューは予約時に)、2026年2月5日オープン。口コミ (2026年6月〜10月、英語): Kikunoi (赤坂・京都) で修業し、祇園 Rohan の料理長を4年半務めたOomura さんが独立、夫婦で営むとの声、カウンター8席、炭火の焼き台、おまかせ15,000円 (税込、サービス料なし、2026年9月から)、帆立と湯葉のジュレ、鰻の炭火焼き、Akashi のたこ、昆布締めの平目、中トロの炙り、鱧と松茸のお椀、Lake Biwa の子持ち鮎、蟹の酢のジュレ、無花果の白味噌和え、熊本の黒毛和牛のイチボ、Tanba のコシヒカリの土鍋ご飯、ちりめん、自家製の明太子、柴漬け、赤だし、杏仁豆腐、Junraku Dai、紫蘇ジュース、Ippodo のほうじ茶400円。',
      confidence: 'medium', sources: [TB, R + 'B525563942/', R + 'B530654379/', R + 'B531024876/', R + 'B533644960/', R + 'B535477995/', R + 'B535768146/', R + 'B536819187/', R + 'B537229573/', R + 'B537981253/', R + 'B538399345/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; one omakase; mention allergies; no service charge; cards.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to state allergies when booking (Tabelog).'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区綾西洞院町741-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; opened 5 February 2026; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001960, 135.755001); cross-checked: GSI 京都府京都市下京区綾西洞院町741番地 (lot) 31 m; nearest Kyoto record 78 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533644960/', R + 'B535768146/'],
    price_note: 'Course price from September 2026 reviews, tax included, no service charge.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥15,000', 'Course', 'ask', 'no', 'From September 2026.', 'omakase'),
      it('', '', 'Ippodo hojicha', '¥400', 'Drinks', 'gf', 'vegan', 'September 2026.', 'hojicha'),
    ] }, {
    cuisine: 'Kikunoi と祇園 Rohan 出身の料理人の、炭火焼きと土鍋ご飯の割烹のおまかせ (2026年の口コミ)・コースは一つで2026年9月から15,000円、例: 帆立と湯葉のだしのジュレ、ヤングコーンや銀杏と栗を添えた鰻の炭火焼き、Akashi のたこ、昆布締めの平目、中トロの炙りのお造り、鱧と松茸のお椀、Lake Biwa の子持ち鮎の炭火焼き、蟹の酢のジュレ、無花果の白味噌や胡麻のソース (2026年9〜10月)・熊本の黒毛和牛のイチボの炭火焼き、Tanba のコシヒカリの土鍋ご飯にちりめん、自家製の明太子、柴漬け、赤だし、杏仁豆腐 (2026年の口コミ)・Junraku Dai などの日本酒、紫蘇ジュース、Ippodo のほうじ茶400円・飲み物込みで1人15,000〜20,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '四条烏丸の西、四条西洞院。四条駅から徒歩5分',
    gf_detail: '要確認。アレルギーは知らせるよう店が求めている (食べログ)。だし中心のおまかせに、天ぷらやたれで焼く鰻も (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻、鮎、鱧、蟹、熊本の牛の魚中心の割烹のおまかせ (2026年の口コミ)。',
    notes: '[割烹のおまかせ・四条西洞院、2026年開業] 木と土壁の新しいカウンター8席。Kikunoi で修業し祇園 Rohan の料理長を務めたOomura さんが、季節のコース一つを15,000円、サービス料なしで出す: 鰻とLake Biwa の鮎の炭火焼き、鱧と松茸のお椀、熊本の牛、自家製の明太子の土鍋ご飯。カウンターは明るく温かいが、もう少し細やかさを望む客も。夜のみ、予約を。',
  });
}

// ================================================================ 南禅寺 順正 Nanzenji Junsei
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001013/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.to-fu.co.jp';
  const H = day(['11:00', '15:30'], ['17:00', '21:00']);
  put({
    id: 'kyoto_nanzenji_junsei', name: '南禅寺 順正 (Nanzenji Junsei)', category: 'OMNI',
    lat: 35.011453, lng: 135.790117, cuisine_type: 'tofu',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yudofu itself is tofu in kombu water, but courses add tempura, dengaku with miso, and soy-based dipping sauce; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A tofu and yuba restaurant with vegetable tempura and nama-fu, but courses include sashimi and dipping sauces are likely dashi-based; no vegan information (2026 reviews).',
    hours_raw: 'Thursday–Tuesday and holidays 11:00–15:30 (food last order 14:30) and 17:00–21:00 (food last order 19:00); closed Wednesday (Tabelog). Reservations for Yudofu Shunsai Aoi up to a few days ahead; no seat-only bookings, and none for the Hana, Tsuki and Yuki courses — walk-ins are seated as space allows, in order (Tabelog). A priority online booking is offered (September–October 2026). A 10% service charge for private rooms (Tabelog original 個室のご利用でサービス料10％). 250 seats at tables and sunken kotatsu, private rooms for 2–15; non-smoking, smoking area outside; wheelchair accessible; children and strollers welcome (Tabelog). Cards incl. UnionPay, PayPay and d Barai (Tabelog). By Nanzenji, through a large garden; 7 min walk from Keage Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By Nanzenji Temple — 7 min walk from Keage Stn',
    cuisine: 'Yudofu and yuba restaurant set in a garden of the four seasons, with Kyoto specialities and rare sake (Tabelog) · Hana course ¥3,850: small dishes, an assortment, tofu dengaku, vegetable tempura, yudofu with green onion, rice and pickles (September–November 2026) · yuba courses; yuba sashimi; nama-fu dengaku; a monthly course; lunch courses with sashimi and simmered dishes; warabi mochi (September–November 2026) · draft beer ¥550; yuzu cider ¥605 (September 2026) · lunch ¥3,000–4,000, dinner ¥4,000–6,000 (Tabelog)',
    website: WEB, gmaps: gm('南禅寺 順正'), menu_url: null,
    notes: '[Yudofu · beside Nanzenji, garden setting] A big, long-established yudofu house beside Nanzenji, reached through a lavish, well-kept garden: the ¥3,850 Hana course runs from small dishes and tofu dengaku to vegetable tempura and a hot pot of rich tofu, with yuba courses for those who prefer it. Walk-ins seated in order as space allows, so expect a wait at lunch. Friendly service; photo menu. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a tofu, Japanese-cuisine and shabu-shabu restaurant by Nanzenji offering Kyoto specialities and rare sake in a garden of the four seasons, with reservations through its Yudofu Shunsai Aoi section and a website at to-fu.co.jp; registered as an official listing by the operator. Reviewers in 2026 describe a famous yudofu restaurant at the temple gate with a beautifully kept garden and a traditional house.',
      philosophy: 'Kyoto specialities and rare sake in a garden of the four seasons (Tabelog).', specialty: 'Yudofu; yuba.',
      anecdotes: [
        { text: 'An October 2026 pair without a booking were told the wait would be about as long as a walk round Nanzenji — and came back to a ready table.', source: R + 'B538660826/' },
        { text: 'An October 2026 visitor was first in at opening, called by name from the waiting area, and led through the garden to the table.', source: R + 'B537804180/' },
        { text: 'An October 2026 diner was struck by how lavishly the garden uses its land, in an age of cost-cutting.', source: R + 'B538735693/' },
      ],
      japanese_sources_summary: '食べログ: 豆腐料理・日本料理・しゃぶしゃぶ、左京区南禅寺草川町60、地下鉄蹴上駅から徒歩7分、木〜火・祝 11:00〜15:30 (料理L.O.14:30)・17:00〜21:00 (料理L.O.19:00)、水曜定休、予約はYudofu Shunsai Aoi で数日前まで、席のみやHana・Tsuki・Yuki のコースの予約は不可、当日は空き次第順に案内、個室のご利用でサービス料10%、250席 (テーブル、掘りごたつ)、個室2〜15名、禁煙 (外に喫煙所)、車椅子可、子ども・ベビーカー可、カード (銀聯も)・PayPay・d払い 可、写真付きメニュー、四季の庭で京の名物と希少な酒。口コミ (2026年9月〜11月、英語): 南禅寺の門前、手入れの行き届いた庭、古い日本家屋、花コース3,850円 (小鉢、盛り合わせ、豆腐田楽、野菜の天ぷら、湯豆腐、ご飯と香の物)、湯葉のコース、湯葉の刺身、生麩田楽、月替わりのコース、わらび餅、生ビール小550円、柚子サイダー605円、ネットの優先予約、待ち時間は南禅寺を散歩するくらい。',
      confidence: 'medium', sources: [TB, WEB, R + 'B536114086/', R + 'B536368647/', R + 'B537114416/', R + 'B537306028/', R + 'B537564058/', R + 'B537804180/', R + 'B538660826/', R + 'B538669286/', R + 'B538694696/', R + 'B538735693/'] },
    cultural_comfort: { level: 'english', note: 'Photo menu; set courses; walk-ins seated in order; 10% service in private rooms; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区南禅寺草川町60',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.011453, 135.790117); cross-checked: GSI 京都府京都市左京区南禅寺草川町60番地 (lot) 70 m; nearest Kyoto record 135 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536114086/', R + 'B538694696/'],
    price_note: 'Prices from September–November 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Hana course (yudofu, dengaku, vegetable tempura, rice)', '¥3,850', 'Courses', 'ask', 'ask', 'September–November 2026.', 'hana_course'),
      it('', '', 'Yuzu cider', '¥605', 'Drinks', 'ask', 'ask', 'September 2026.', 'yuzu_cider'),
    ] }, {
    cuisine: '京の名物と希少な酒を四季の庭で楽しむ湯豆腐と湯葉の店 (食べログ)・花コース3,850円: 小鉢、盛り合わせ、豆腐田楽、野菜の天ぷら、ねぎを添えた湯豆腐、ご飯と香の物 (2026年9〜11月)・湯葉のコース、湯葉の刺身、生麩田楽、月替わりのコース、お造りや炊き合わせのあるランチのコース、わらび餅 (2026年9〜11月)・生ビール小550円、柚子サイダー605円 (2026年9月)・昼3,000〜4,000円、夜4,000〜6,000円 (食べログ)',
    neighborhood: '南禅寺のそば。蹴上駅から徒歩7分',
    gf_detail: '要確認。湯豆腐は昆布の湯の豆腐だが、コースには天ぷら、味噌の田楽、醤油系のつけだれがある。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。野菜の天ぷらや生麩のある豆腐と湯葉の店だが、コースにお造りがあり、つけだれはだしを使う可能性が高い。ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[湯豆腐・南禅寺のそば、庭の店] 南禅寺のそば、手入れの行き届いた広い庭を抜けて入る大きな老舗の湯豆腐の店。3,850円の花コースは小鉢と豆腐田楽から野菜の天ぷら、濃厚な豆腐の湯豆腐まで。湯葉のコースも。当日は空き次第順に案内なので、昼は待つことも。接客は気さくで写真付きメニューあり。水曜休み。',
  });
}

save();
