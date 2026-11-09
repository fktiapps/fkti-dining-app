// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 92.
//   + 御池酔心 本店 Oike Suishin Honten (big station-side izakaya at Karasuma Oike; kamameshi, yakitori, Kyoto dishes) — rest
//   + cafe HEBARAGI (couple-run café of Korean home cooking in front of Higashiyama Station) — rest
//   + HOSOO LOUNGE (café in the flagship of the Nishijin weaver HOSOO; macarons and afternoon tea) — rest
//   + 百足屋 本店 Mukadeya Honten (obanzai kaiseki in a restored Meiji machiya on Shinmachi; くろちく group) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches for 酔心, HEBARAGI, HOSOO or 百足屋.
//   Same-name counts (2026-11-08): 御池酔心 — Tabelog's Kyoto search lists two (本店 and 京都駅前店); the Hiroshima kamameshi
//   restaurant 酔心 本店 is a different business; no operator page found (suishin.co.jp returned 404). HOSOO LOUNGE — one; the
//   café of the HOSOO textile flagship. 百足屋 — run by the Kyoto company くろちく (kurochiku.co.jp lists 百足屋本店 and 京都嵐山嵐丼
//   as its restaurants, beside its shops and an inn); a local group with two restaurants, so drafted with the link noted.
//   HEBARAGI — one.
//   None of the drafted shops is in data/kyoto.json.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; single-review remarks about other diners
//   left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-92');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 御池酔心 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002744/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']); const SU = day(['17:00', '23:00']);
  put({
    id: 'kyoto_oike_suishin_honten', name: '御池酔心 本店 (Oike Suishin Honten)', category: 'OMNI',
    lat: 35.010491, lng: 135.75997, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, yuba spring rolls, karaage, ramen, nama-fu dengaku and soy-seasoned kamameshi (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, yakitori, seafood and hamo kamameshi, pork belly; dashi throughout (2025–26 reviews).',
    hours_raw: 'Mon–Sat and the day before a holiday 17:00–23:30 (last order 23:00); Sunday 17:00–23:00 (last order 22:30) (Tabelog). Ordering by touch panel (January and June 2025). Kamameshi takes about 30 minutes — order early (June 2025). Cards, e-money and PayPay (Tabelog). 158 seats with sunken-kotatsu private rooms and a counter; groups and children welcome (Tabelog; June 2025). Basement of the Urbanex Oike Building, reached by the underground passage from Karasuma Oike Station (December 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma Oike station',
    cuisine: 'Large station-side izakaya of Kyoto dishes, yakitori and kamameshi · seafood kamameshi ¥968, hamo kamameshi ¥990, six-kind sashimi ¥1,980, five yakitori ¥1,078, grilled yuba with miso ¥528, Kyoto yuba spring rolls ¥748, corn tempura ¥495, Kyoto chuka soba ¥825 (June 2025) · nama-fu dengaku, sake-steamed sea-bream head, wakasagi tempura (February 2025) · garlic chuhai (May 2026) · all-you-can-drink courses',
    website: null, gmaps: gm('御池酔心 本店'), menu_url: TB,
    notes: '[Izakaya · Karasuma Oike] A big, family-friendly izakaya straight off the Karasuma Oike underground passage, with sunken-kotatsu private rooms and touch-panel ordering: kamameshi of seafood or hamo, sashimi, yakitori, grilled yuba and other Kyoto dishes at modest prices, plus party courses. Open every evening.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: the main branch of 御池酔心, with a second shop in front of Kyoto Station, in the basement by Karasuma Oike Station (May 2024).',
      philosophy: null, specialty: 'Kamameshi; Kyoto-style izakaya dishes.',
      anecdotes: [
        { text: 'A June 2025 family of eight with two children got a sunken-kotatsu private room, let the nephews order on the touch panel, and preferred the hamo kamameshi to the seafood one.', source: R + 'B509129759/' },
        { text: 'A December 2025 visitor found it so close to the station it seemed to be inside it, reached through the underground passage.', source: R + 'B518325292/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼き鳥・海鮮、中京区車屋御池下ル梅屋町358 アーバネックス御池ビル B1F、月〜土・祝日の前日17:00〜23:30 (L.O.23:00)、日17:00〜23:00 (L.O.22:30)、カード・電子マネー・PayPay 可、158席 (掘りごたつ、カウンター)。口コミ (2025年1月〜2026年7月、英語): 本店、タッチパネルで注文、海鮮釜めし968円、鱧釜めし990円 (約30分)、刺身6種1,980円、焼き鳥5本1,078円、湯葉の味噌焼き528円、京湯葉春巻き748円、とうもろこしの天ぷら495円、京都中華そば825円、生麩田楽、鯛のかぶと酒蒸し、わかさぎの天ぷら、にんにくチューハイ、飲み放題のコース、掘りごたつの個室、子ども連れも、地下道から烏丸御池駅直結。',
      confidence: 'medium', sources: [TB, R + 'B493681701/', R + 'B499939847/', R + 'B501090480/', R + 'B509129759/', R + 'B512013529/', R + 'B514008001/', R + 'B518325292/', R + 'B528946563/', R + 'B532523301/'] },
    cultural_comfort: { level: 'none_needed', note: 'Order on the touch panel; ask for kamameshi early, as it takes about 30 minutes.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区車屋御池下ル梅屋町358 アーバネックス御池ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.010491, 135.759970); cross-checked: GSI 京都府京都市中京区梅屋町358番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B509129759/'],
    price_note: 'Prices from June 2025.', last_checked: TODAY, items: [
      it('', '', 'Seafood kamameshi', '¥968', 'Kamameshi', 'no', 'no', 'June 2025; about 30 minutes.', 'kaisen_kamameshi'),
      it('', '', 'Hamo kamameshi', '¥990', 'Kamameshi', 'no', 'no', 'June 2025.', 'hamo_kamameshi'),
      it('', '', 'Assorted sashimi, six kinds', '¥1,980', 'Sashimi', 'ask', 'no', 'June 2025.', 'sashimi6'),
      it('', '', 'Assorted yakitori, five skewers', '¥1,078', 'Yakitori', 'no', 'no', 'June 2025.', 'yakitori5'),
      it('', '', 'Grilled yuba with miso', '¥528', 'Kyoto dishes', 'no', 'ask', 'June 2025.', 'yuba_miso'),
    ] }, {
    cuisine: '京料理、焼き鳥、釜めしの駅近の大きな居酒屋・海鮮釜めし968円、鱧釜めし990円、刺身6種1,980円、焼き鳥5本1,078円、湯葉の味噌焼き528円、京湯葉春巻き748円、とうもろこしの天ぷら495円、京都中華そば825円 (2025年6月)・生麩田楽、鯛のかぶと酒蒸し、わかさぎの天ぷら (2025年2月)・にんにくチューハイ (2026年5月)・飲み放題のコース',
    neighborhood: '烏丸御池駅',
    gf_detail: 'グルテンフリーではない。天ぷら、湯葉の春巻き、唐揚げ、中華そば、生麩田楽、醤油で味付けした釜めし (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、焼き鳥、海鮮や鱧の釜めし、豚の角煮、出汁 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・烏丸御池] 烏丸御池駅の地下道からすぐ、掘りごたつの個室とタッチパネル注文の家族でも使いやすい大きな居酒屋。海鮮や鱧の釜めし、刺身、焼き鳥、湯葉の味噌焼きなどの京料理を手頃な値段で、宴会コースも。毎晩営業。',
  });
}

// ================================================================ cafe HEBARAGI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26018410/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:30', '20:00']);
  put({
    id: 'kyoto_cafe_hebaragi', name: 'cafe HEBARAGI (カフェ ヘバラギ)', category: 'OMNI',
    lat: 35.009614, lng: 135.778832, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: gochujang-dressed bibimbap, Korean cold noodles, hot sandwiches, ginger pork in soy sauce (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ginger pork, sandwiches, breakfast sets, kimchi (2025–26 reviews); no vegan dish sourced.',
    hours_raw: 'Mon, Tue, Thu–Sun 9:30–20:00; closed Wednesday; may change (Tabelog). Breakfast sets in the morning (May 2026), lunch sets at midday, Korean dishes and beer into the evening (October 2025). Cash only: no cards, e-money or QR (Tabelog). On Sanjo-dori in front of Higashiyama Station, under a red awning (November 2017, October 2025).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo, in front of Higashiyama Station',
    cuisine: 'Café of Korean home cooking — the name is Korean for sunflower (August 2025) · bibimbap ¥1,000, ginger pork stir-fry ¥1,100, beer with house daikon-leaf kimchi ¥1,000 (October 2025) · Korean cold noodles (2024 review) · sandwich and iced-tea set ¥1,200 (March 2025) · breakfast B set with a hot sandwich (May 2026) · iced coffee ¥500 (August 2025)',
    website: null, gmaps: gm('cafe HEBARAGI 京都 東山駅'), menu_url: TB,
    notes: '[Korean café · Higashiyama Station] A small family café under a red awning in front of Higashiyama Station, serving Korean home cooking — bibimbap, cold noodles, ginger pork with gochujang — alongside breakfast and sandwich sets, with K-pop on the stereo. Cash only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Run by a couple (May 2024)'], origin: null,
      background: 'Per reviews: a café near Higashiyama Station serving Korean dishes, run by a husband-and-wife team (May 2024, October 2025).',
      philosophy: null, specialty: 'Bibimbap; Korean cold noodles.',
      anecdotes: [
        { text: 'An October 2025 pair stopping before a concert ordered beer and kimchi and were given homemade daikon-leaf kimchi on the house, with warm smiles from the owner.', source: R + 'B516307753/' },
        { text: 'An August 2025 visitor escaping 38°C heat learned the name means sunflower in Korean — "gazing at the sun" — over a ¥500 iced coffee.', source: R + 'B511154657/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶店・カフェ、東山区分木町63、月火木金土日9:30〜20:00、水曜休み、カード・電子マネー・QR 不可。口コミ (2025年3月〜2026年5月、英語): 東山駅の前、赤いひさし、韓国の家庭料理と K-POP、店名は韓国語でひまわり、ビビンバ1,000円、豚の生姜焼き1,100円、ビールとキムチ1,000円 (大根葉の自家製キムチのサービス)、冷麺、サンドイッチとアイスティーのセット1,200円、ホットサンドの朝食Bセット、アイスコーヒー500円、夫婦で営む (2024年)。',
      confidence: 'medium', sources: [TB, R + 'B484371898/', R + 'B503483380/', R + 'B511154657/', R + 'B516307753/', R + 'B527762840/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash. Ask for gochujang to taste. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区分木町63',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.009614, 135.778832); cross-checked: GSI 京都府京都市東山区分木町63番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516307753/', R + 'B503483380/'],
    price_note: 'Prices from March to October 2025.', last_checked: TODAY, items: [
      it('', '', 'Bibimbap', '¥1,000', 'Korean', 'no', 'no', 'October 2025.', 'bibimbap'),
      it('', '', 'Ginger pork stir-fry (100 g)', '¥1,100', 'Korean', 'no', 'no', 'October 2025.', 'buta_shoga'),
      it('', '', 'Sandwich and iced-tea set', '¥1,200', 'Café', 'no', 'no', 'March 2025.', 'sandwich_set'),
      it('', '', 'Iced coffee', '¥500', 'Drinks', 'ask', 'ask', 'August 2025.', 'iced_coffee'),
    ] }, {
    cuisine: '韓国の家庭料理のカフェ、店名は韓国語でひまわり (2025年8月)・ビビンバ1,000円、豚の生姜焼き1,100円、ビールと自家製の大根葉のキムチ1,000円 (2025年10月)・冷麺 (2024年の口コミ)・サンドイッチとアイスティーのセット1,200円 (2025年3月)・ホットサンドの朝食Bセット (2026年5月)・アイスコーヒー500円 (2025年8月)',
    neighborhood: '三条、東山駅前',
    gf_detail: 'グルテンフリーではない。コチュジャンのビビンバ、冷麺、ホットサンド、醤油の生姜焼き (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。生姜焼き、サンドイッチ、朝食セット、キムチ (2025〜2026年の口コミ)。ヴィーガンの料理の情報なし。',
    notes: '[韓国料理のカフェ・東山駅前] 東山駅前の赤いひさしの小さな家族経営のカフェ。ビビンバ、冷麺、コチュジャンの生姜焼きなどの韓国の家庭料理と、朝食やサンドイッチのセット。店内は K-POP。現金のみ、水曜休み。',
  });
}

// ================================================================ HOSOO LOUNGE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032936/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.hosoo.co.jp';
  const H = day(['10:30', '18:00']);
  put({
    id: 'kyoto_hosoo_lounge', name: 'HOSOO LOUNGE (ホソオ ラウンジ)', category: 'OMNI',
    lat: 35.009701, lng: 135.75903, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: madeleines and afternoon-tea pastries (2022–25 reviews). No gluten-free claim is sourced.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: macarons, chocolates, madeleines, prosciutto and cheese (2025 reviews).',
    hours_raw: 'Daily 10:30–18:00 (last order 17:30); closed public holidays and over the New Year (Tabelog). No reservations (February 2025). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). 20 seats, including semi-private rooms (Tabelog; 2022–24 reviews). Ground floor of the HOSOO flagship building on Ryogaemachi-dori, two minutes from Karasuma Oike Station; a gallery upstairs (February 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ryogaemachi, near Karasuma Oike',
    cuisine: 'Tea lounge of a Nishijin weaving house · afternoon tea of Japanese-inspired sweets and savouries (January 2025) · tea-and-macaron set — layered macarons in kimono-colour themes, white peach (February and March 2025) · original chocolates such as yuzu (February 2025) · prosciutto and cheese with wine (February 2025) · macarons and chocolates to take away',
    website: SITE, gmaps: gm('HOSOO LOUNGE 京都'), menu_url: TB,
    notes: '[Tea lounge · Karasuma Oike] The quiet, gallery-like café of HOSOO, a Nishijin weaving house dating back to 1688, on the ground floor of its flagship near Karasuma Oike: tea with macarons themed on kimono colours, house chocolates and afternoon tea, served on craft tableware. No reservations; closed on holidays.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: the café of the HOSOO flagship store, opened 2 September 2019; HOSOO is a Nishijin textile house founded in 1688 (Genroku 1) (2023 reviews).',
      philosophy: 'Per reviews: sweets that tell the story of Nishijin textiles and kimono colours (November 2023).', specialty: 'Kimono-colour macarons; afternoon tea.',
      anecdotes: [
        { text: 'A February 2025 visitor had layered macarons named for kimono colour schemes and a yuzu chocolate with hot coffee, then looked round the second-floor gallery.', source: R + 'B502095756/' },
        { text: 'A January 2025 guest found the afternoon tea plated like a work of art, Western pastries set beside Japanese flavours.', source: R + 'B431708678/' },
      ],
      japanese_sources_summary: '食べログ: カフェ・バー、中京区両替町通姉小路下ル柿本町412、毎日10:30〜18:00 (L.O.17:30)、祝日・年末年始休み、カード可、電子マネー不可、20席、2019年9月2日オープン。口コミ (2025年1月〜3月、英語): 元禄元年 (1688年) 創業の西陣織の HOSOO の旗艦店の1階、アフタヌーンティー、重ねの色目のマカロン、白桃のマカロン、柚子のオリジナルチョコレート、生ハムとチーズ、持ち帰りも、予約不可、2階はギャラリー、烏丸御池駅から徒歩2分。',
      confidence: 'medium', sources: [TB, SITE, R + 'B431708678/', R + 'B474021403/', R + 'B502095756/', R + 'B503733455/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in — no reservations. Allow time for the gallery upstairs. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区両替町通姉小路下ル柿本町412',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2025.' },
    pin_source: `Tabelog ${TB} (35.009701, 135.759030); cross-checked: GSI 京都府京都市中京区柿本町412番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502095756/', R + 'B503733455/'],
    price_note: 'No prices quoted in 2025 reviews; reviewers report ¥1,000–3,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Tea and macaron set', '', 'Tea', 'ask', 'no', 'March 2025.', 'macaron_set'),
      it('', '', 'Afternoon tea', '', 'Tea', 'no', 'no', 'January 2025.', 'afternoon_tea'),
      it('', '', 'Original chocolate (yuzu)', '', 'Sweets', 'ask', 'no', 'February 2025.', 'chocolate'),
    ] }, {
    cuisine: '西陣織の老舗のティーラウンジ・和の素材を生かした甘いものとセイボリーのアフタヌーンティー (2025年1月)・着物の色目のマカロンや白桃のマカロンとお茶のセット (2025年2月・3月)・柚子などのオリジナルチョコレート (2025年2月)・ワインと生ハム、チーズ (2025年2月)・マカロンとチョコレートの持ち帰り',
    neighborhood: '両替町、烏丸御池の近く',
    gf_detail: 'グルテンフリーではない。マドレーヌやアフタヌーンティーの焼き菓子 (2022〜2025年の口コミ)。グルテンフリーの記載はない。',
    vegan_detail: 'ヴィーガン不可。マカロン、チョコレート、マドレーヌ、生ハム、チーズ (2025年の口コミ)。',
    notes: '[ティーラウンジ・烏丸御池] 1688年にさかのぼる西陣織の HOSOO の旗艦店1階の、ギャラリーのような静かなカフェ。工芸の器で、着物の色目のマカロン、オリジナルチョコレート、アフタヌーンティーとお茶を。予約不可、祝日休み。',
  });
}

// ================================================================ 百足屋 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003368/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.kurochiku.co.jp/mukadeya/';
  const H = day(['11:30', '14:00'], ['18:00', '21:00']);
  put({
    id: 'kyoto_mukadeya_honten', name: '百足屋 本店 (Mukadeya Honten)', category: 'OMNI',
    lat: 35.005664, lng: 135.756579, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: obanzai and kaiseki dishes seasoned with soy sauce and dashi, red miso soup, takikomi gohan (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, grilled fish, dashi throughout (2024–26 reviews).',
    hours_raw: 'Lunch 11:30–14:00 (last order 13:30) and dinner 18:00–21:00 (last order 20:30) (shop site; Tabelog). Tabelog lists Sunday closed; the shop site says irregular closures; closed over the New Year (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 70 seats, including private tatami rooms and a room with a Noh stage (Tabelog; 2020 review, September 2026). Outdoor smoking area (Tabelog). In a 160-year-old machiya on Shinmachi north of Nishikikoji, in the Gion Matsuri float district (shop site; 2024 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-Nishikikoji — Shijo Karasuma',
    cuisine: 'Obanzai kaiseki — Kyoto kaiseki mixed with home-style obanzai, the shop’s own style (shop site) · lunch 百足屋御膳; dinner courses 新町, 錦 and 室町 (shop site) · Mukadeya bento ¥3,300: three-tier box of obanzai, sashimi, braised dish, grilled fish, black-soybean rice, red miso soup, dessert (2023–24 reviews) · daily lunch with sashimi (December 2024) · kaiseki of seasonal Kyoto vegetables ending in takikomi gohan (April and September 2026)',
    website: SITE, gmaps: gm('百足屋 本店 京都 新町'), menu_url: SITE,
    notes: '[Obanzai kaiseki · Shinmachi] A restored 160-year-old Meiji machiya in the Gion Matsuri float district serving its own "obanzai kaiseki": tiered boxes of seasonal Kyoto dishes at lunch and vegetable-led courses at night, in rooms around a courtyard with an okudo hearth and a Noh stage. Run by the Kyoto company くろちく.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the shop site: a 160-year-old townhouse (「築１６０年の町家」) restored to its mid-Meiji frame (「明治中期の骨格をそのままに復元」); run by the Kyoto company くろちく, whose site lists it as its main restaurant beside 京都嵐山嵐丼, its shops and an inn.',
      philosophy: 'Per the shop site: 「伝統的な京懐石と、…おばんざい料理を織り交ぜた、オリジナルのおばんざい懐石料理」 — traditional Kyoto kaiseki mixed with home-style obanzai.', specialty: 'Obanzai kaiseki; Mukadeya bento.',
      anecdotes: [
        { text: 'A September 2026 return visitor, after several years away, was given a private tatami room on a quiet weekday and ate a seasonal-vegetable kaiseki looking out on the garden.', source: R + 'B535391091/' },
        { text: 'An April 2026 diner enjoyed eating among the house’s collection of old furniture and keepsakes, and found the closing takikomi gohan generous.', source: R + 'B526779860/' },
      ],
      japanese_sources_summary: '公式サイト: くろちくの飲食店舗、築160年の町家、明治中期の骨格をそのままに復元、伝統的な京懐石とおばんざい料理を織り交ぜたオリジナルのおばんざい懐石料理、昼11:30〜14:00 (L.O.13:30)、夜18:00〜21:00 (L.O.20:30)、不定休、昼は百足屋御膳、夜は新町・錦・室町のコース。食べログ: 日本料理、中京区新町通錦小路上ル百足屋町381、日曜休み、年末年始休み、カード可、電子マネー・QR 不可、70席、屋外に喫煙所。口コミ (2024年12月〜2026年9月、英語): 百足屋弁当3,300円 (三段の重箱、刺身、炊き合わせ、焼き魚、黒豆ご飯、赤だし、甘味)、日替わりランチ、京野菜のコース、しめの炊き込みご飯、個室の座敷、庭、おくどさん、能舞台の部屋、祇園祭の山鉾町。',
      confidence: 'medium', sources: [SITE, TB, R + 'B472034474/', R + 'B484248271/', R + 'B496998361/', R + 'B526779860/', R + 'B530937533/', R + 'B535391091/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead, especially in Gion Matsuri season, when the upstairs looks onto the floats. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町通錦小路上ル百足屋町381',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005664, 135.756579); cross-checked: GSI 京都府京都市中京区百足屋町381番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B472034474/'],
    price_note: 'Bento price from 2023; reviewers report ¥4,000–9,999 per person in 2026.', last_checked: TODAY, items: [
      it('', '', 'Mukadeya bento (three-tier obanzai box)', '¥3,300', 'Lunch', 'no', 'no', '2023 review; still served per 2024 reviews.', 'mukadeya_bento'),
      it('', '', 'Obanzai kaiseki dinner course', '', 'Dinner', 'no', 'no', 'April–September 2026.', 'kaiseki'),
    ] }, {
    cuisine: '店独自のおばんざい懐石 (京懐石とおばんざいを合わせたもの) (公式サイト)・昼は百足屋御膳、夜は新町・錦・室町のコース (公式サイト)・百足屋弁当3,300円: 三段の重箱のおばんざい、刺身、炊き合わせ、焼き魚、黒豆ご飯、赤だし、甘味 (2023〜2024年の口コミ)・刺身の日替わりランチ (2024年12月)・京野菜のコースとしめの炊き込みご飯 (2026年4月・9月)',
    neighborhood: '新町錦小路。四条烏丸',
    gf_detail: 'グルテンフリーではない。醤油や出汁で味付けしたおばんざいと懐石、赤だし、炊き込みご飯 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、焼き魚、出汁 (2024〜2026年の口コミ)。',
    notes: '[おばんざい懐石・新町] 祇園祭の山鉾町に建つ、明治中期の骨格を復元した築160年の町家で、店独自の「おばんざい懐石」を。昼は重箱の季節の京料理、夜は京野菜中心のコース。中庭、おくどさん、能舞台のある部屋。京都のくろちくの運営。',
  });
}

save();
