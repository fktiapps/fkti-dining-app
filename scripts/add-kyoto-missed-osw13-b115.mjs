// Kyoto priority (kyoto-missed), worker osw13, batch 115 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 日東堂, 宝堂 KARASUMA, Mont, STICKS COFFEE 京都押小路. Brands checked against than.co.jp/brands (none match).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-115');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26038104', 'big-chain hotel venue (Greg 11-08 ruling): ザ ロイヤルパークホテル アイコニック 京都 is a hotel of the national Royal Park Hotels chain; Tabelog lists it as a Hotel');
skip('26015730', 'seasonal hanami pop-up, no hours: 花見茶屋 音和 is a tatami tea-house that opens inside Maruyama Park only in cherry-blossom season (Tabelog lists no hours; address just "円山公園"; reviews 2010–2026 all from late March–April, ¥500/hour seat charge, cash only) — flagged for the coordinator, draftable as a seasonal record if wanted');
skip('26005908', 'retail food shop (Greg 11-07 ruling): 音羽屋 is a take-away wagashi shop (yomogi an-mochi, daifuku) run by an owner who may be with his wife (May 2016 review), but no founding date or history is sourced on Tabelog or the web, so it does not meet the historic/old-shop exception; no GF or vegan options are sourced');
skip('26018814', 'chain: 街かど屋 烏丸五条店 — a branch of the Machikadoya cafeteria chain; Tabelog says takeout and delivery only');
skip('26043570', 'Tokyo multi-brand operator: すき焼き十二天 京都 is a branch of a brand also in Marunouchi and Hiroo, Tokyo (February 2026 review); its invoice number T3010401053048 is registered to ソルト・コンソーシアム株式会社, Minato-ku, Tokyo (NTA registry) — same footing as CRAFT倶楽部 / ITOH DINING');

// ================================================================ 日東堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031312/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_nittodo', name: '日東堂 (Nittodo)', category: 'OMNI',
    lat: 34.998382, lng: 135.779236, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A coffee stand: reviews mention only drinks (coffee, café au lait, coffee milk, iced matcha latte); no food or gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is available, but the signature drinks are made with Kyoto milk (2023–2026 reviews); no plant milk is mentioned.',
    hours_raw: 'Tabelog: Mon, Wed–Sun 10:00–18:00; closed Tuesday; hours may change (a travel guide lists irregular closures). No reservations. Order at the counter on the 1st floor (a shop of tools, stationery and crafts), then sit upstairs — 10 seats on the 2nd floor looking at the Yasaka pagoda (August 2026). Coffee milk also to take away in a glass milk bottle. Cards, e-money and QR codes. Under ¥1,000.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Beside the Yasaka pagoda — Higashiyama',
    cuisine: 'A coffee stand inside a lifestyle-goods shop in an old house by the Yasaka pagoda, best known for its coffee milk in a glass milk bottle (Tabelog; 2022–2026 reviews) · coffee milk with milk from Kyoto, unsweetened (December 2025) · original blend of five beans; café au lait with milk from "Clover Farm" in Kyoto (March 2023) · iced coffee; iced matcha latte (August 2026) · a cold-brew coffee floated on sweetened milk, served in a wine glass (September 2026)',
    website: null, gmaps: gm('日東堂 八坂'), menu_url: null,
    notes: '[Coffee stand · Yasaka pagoda, coffee milk above a goods shop] Order downstairs among the notebooks, ceramics and tools, then take your coffee up to a quiet 2nd-floor room facing the Yasaka pagoda. Known for coffee milk in a retro glass bottle (also to go). Under ¥1,000. One 2024 visitor found the café au lait flat. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A shop in a renovated old house beside the Yasaka pagoda selling everyday tools and goods from around Japan, with a coffee stand (rurubu travel guide). Reviewers describe clothing, ceramics, stationery and notebooks downstairs and a calm café upstairs that stays quiet in a busy tourist area (September 2024; August 2026). The operator is not named in the sources.',
      philosophy: null,
      specialty: 'Coffee milk in a glass milk bottle.',
      anecdotes: [
        { text: 'March 2023: "They blend 5 carefully selected types of beans. The milk used is special milk provided by Clover Farm located in Kyoto."', source: R + 'B463024546/' },
        { text: 'August 2026: "The second floor was cool, private, and had a fantastic view of the Yasaka Pagoda right in front of me."', source: R + 'B534631739/' },
        { text: 'March 2024: "Unfortunately, there was no aroma or flavor of coffee at all. It seemed they reheated pre-dripped coffee in a pot and combined it with milk."', source: R + 'B481265268/' },
      ],
      japanese_sources_summary: '食べログ: 日東堂、カフェ、東山区八坂上町385-4、月・水〜日10:00〜18:00、火曜休み、予約不可、10席、カード・電子マネー・QR可、〜999円。るるぶ: 八坂の塔の真横の古い民家を改装した雑貨店で、全国から集めた暮らしの道具を扱い、コーヒースタンドで本格コーヒーとミルクを混ぜた「コーヒーミルク」を出す。口コミ (2022年7月〜2026年9月、英語): 1階の雑貨とノート、2階の席から八坂の塔、牛乳瓶のコーヒーミルク、5種の豆のブレンド、京都の牧場の牛乳、アイス抹茶ラテ、ワイングラスの水出しコーヒーと甘いミルクの飲み物、2024年3月にはカフェオレに香りがないとの不満。',
      confidence: 'low', sources: [TB, 'https://rurubu.jp/andmore/spot/80122381'].concat(rv(R, ['B463024546', 'B481265268', 'B491235801', 'B520012780', 'B534631739', 'B536572651'])) },
    cultural_comfort: { level: 'friendly', note: 'Order at the 1st-floor counter, then go upstairs; drinks also to take away.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂上町385-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated December 2025 to September 2026.' },
    pin_source: `Tabelog ${TB} (34.998382, 135.779236); GSI lot 京都府京都市東山区八坂上町385番地 about 43m away; nearest pin kyoto_fuminosuke_chaya_honten 46.9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B463024546/', R + 'B520012780/', R + 'B536572651/'],
    price_note: 'No prices given; Tabelog budget under ¥1,000.', last_checked: TODAY, items: [
      it('', '', 'Coffee milk (glass milk bottle)', '', 'Drink', 'ask', 'no', '2025–2026 reviews; Kyoto milk.', 'coffee_milk'),
      it('', '', 'Original blend coffee', '', 'Drink', 'ask', 'ask', 'December 2025.', 'original_blend'),
      it('', '', 'Café au lait', '', 'Drink', 'ask', 'no', 'March 2023 and March 2024.', 'cafe_au_lait'),
      it('', '', 'Iced matcha latte', '', 'Drink', 'ask', 'no', 'August 2026.', 'iced_matcha_latte'),
    ] }, {
    cuisine: '八坂の塔のそばの古い民家の暮らしの道具の店の中のコーヒースタンド。牛乳瓶のコーヒーミルクで知られる (食べログ、2022〜2026年の口コミ)・京都の牛乳の無糖のコーヒーミルク (2025年12月)・5種の豆のオリジナルブレンド、京都の「Clover Farm」の牛乳のカフェオレ (2023年3月)・アイスコーヒー、アイス抹茶ラテ (2026年8月)・甘いミルクに水出しコーヒーを浮かべたワイングラスの飲み物 (2026年9月)',
    neighborhood: '八坂の塔のすぐそば。東山',
    gf_detail: '要確認: コーヒースタンドで、口コミは飲み物 (コーヒー、カフェオレ、コーヒーミルク、アイス抹茶ラテ) のみ。食べ物やグルテンの情報はない。',
    vegan_detail: '要確認: ブラックコーヒーはあるが、名物の飲み物は京都の牛乳を使う (2023〜2026年の口コミ)。植物性ミルクの記載はない。',
    notes: '[コーヒースタンド・八坂の塔、雑貨店の2階でコーヒーミルク] ノートや器、道具が並ぶ1階で注文し、八坂の塔を望む静かな2階の部屋へ。レトロな牛乳瓶のコーヒーミルクが名物 (持ち帰りも)。1,000円未満。2024年にはカフェオレが物足りないとの声も。火曜休み。',
  });
}

// ================================================================ 宝堂 KARASUMA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26028828/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_takarado_karasuma', name: '宝堂 KARASUMA (Takarado Karasuma)', category: 'OMNI',
    lat: 35.002545, lng: 135.756854, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an izakaya menu with tempura (prosciutto and mozzarella, daikon, pickled ginger), kara-age, sukiyaki and motsu-nabe (Tabelog; 2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: thick-cut sashimi, fish collar, chicken wings, beef tendon and meat dishes (2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–24:00 (L.O. 23:00). Reservations taken (courses and sets until the day before); weekday and Saturday nights are often fully booked (May–August 2026). 80 seats: counter, tables, sunken seats, curtained semi-private seats, private rooms for 8–10 and a room for up to 42. Non-smoking. Cards; no e-money or QR codes. All-you-can-drink courses. In a renovated machiya on Ayanokoji, between Muromachi and Shinmachi, 3 min from Shijo / Karasuma.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji, west of Karasuma — 3 min from Shijo / Karasuma',
    cuisine: 'A busy izakaya in a renovated Kyoto townhouse, known for thick-cut sashimi and kamameshi pot rice (Tabelog; 2026 reviews) · thick-cut sashimi; seared bonito with a sesame-oil sauce (July 2026) · kamameshi, e.g. octopus and Kujo green onion, with rice from the Kyoto rice merchant 八代目儀兵衛 (July–September 2026) · tempura of prosciutto and mozzarella, daikon, or pickled ginger · mentaiko-cheese dashimaki (2026) · chicken-wing kara-age with a homemade soy glaze; fried taro; grilled outside skirt; beef tendon (September 2026) · fish collar (kama) (July 2026) · craft beers and shochu; sukiyaki and motsu-nabe (Tabelog)',
    website: null, gmaps: gm('宝堂 KARASUMA'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Shijo-Karasuma, thick sashimi and pot rice in a machiya] A lively, wood-lined izakaya in an old townhouse near Shijo-Karasuma: generous thick-cut sashimi, quirky tempura and kamameshi to finish, with craft beer and shochu. About ¥3,000–6,000. Book ahead, even on weekdays. Orders can be slow when it is full. Open daily to midnight.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A Tabelog corporate member with an official listing; the operator is not named in the sources. Reviewers describe a renovated traditional house with a nostalgic ceiling and walls (May 2026), friendly staff and a full house even on weekdays (July 2026).',
      philosophy: null,
      specialty: 'Thick-cut sashimi; kamameshi.',
      anecdotes: [
        { text: 'September 2026: "The kamameshi was fluffy and delicious, made with rice from the eighth generation Gihei. The chicken wing kara-age was excellent with its homemade soy sauce glaze."', source: R + 'B535397203/' },
        { text: 'July 2026: "When it gets busy with customers, it takes a while for the orders to be taken. However, the food that eventually comes out is surprisingly delicious… The sashimi was cut quite thick."', source: R + 'B531189588/' },
        { text: 'May 2026: "Although it was an all-you-can-drink course, it was disappointing that there was no Japanese sake available."', source: R + 'B528535052/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 宝堂 KARASUMA (タカラドウ カラスマ)、居酒屋・すき焼き・もつ鍋、下京区綾小路通新町東入ル四条町369-4、阪急烏丸駅・地下鉄四条駅から徒歩3分、毎日17:00〜24:00 (L.O.23:00)、予約可 (コースは前日まで)、80席、個室8〜10名、最大42名の部屋、禁煙、カード可・電子マネーとQR不可、飲み放題あり。口コミ (2026年4〜9月、英語): 町家を改装した店、厚切りの刺身、たこと九条ねぎの釜飯、八代目儀兵衛の米、生ハムとモッツァレラの天ぷら、明太チーズのだし巻き、手羽の唐揚げ、牛すじ、かま、混むと注文が遅い、飲み放題に日本酒がない (2026年5月)、平日も満席。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B528535052', 'B531189588', 'B532219968', 'B533519672', 'B534212845', 'B534729501', 'B535397203', 'B535832773'])) },
    cultural_comfort: { level: 'friendly', note: 'Busy izakaya; book ahead; private rooms for groups.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾小路通新町東入ル四条町369-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing with reviews dated April to September 2026.' },
    pin_source: `Tabelog ${TB} (35.002545, 135.756854); GSI lot 京都府京都市下京区四条町369番地 about 58m away; nearest pin kyoto_kemuri_smoked 11.2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532219968/', R + 'B535397203/', R + 'B535832773/'],
    price_note: 'No prices given in reviews; Tabelog budget ¥3,000–3,999.', last_checked: TODAY, items: [
      it('', '', 'Thick-cut sashimi', '', 'Sashimi', 'ask', 'no', '2026 reviews.', 'sashimi'),
      it('', '', 'Octopus and Kujo green onion kamameshi', '', 'Rice', 'ask', 'no', 'July 2026.', 'tako_kamameshi'),
      it('', '', 'Prosciutto and mozzarella tempura', '', 'Fried', 'no', 'no', 'July 2026.', 'nama_ham_tempura'),
      it('', '', 'Chicken-wing kara-age', '', 'Fried', 'no', 'no', 'September 2026.', 'tebasaki_karaage'),
      it('', '', 'Mentaiko-cheese dashimaki', '', 'Egg', 'ask', 'no', 'July 2026.', 'mentai_dashimaki'),
    ] }, {
    cuisine: '京町家を改装したにぎやかな居酒屋。厚切りの刺身と釜飯で知られる (食べログ、2026年の口コミ)・厚切りの刺身、ごま油だれのかつおのたたき (2026年7月)・八代目儀兵衛の米のたこと九条ねぎなどの釜飯 (2026年7〜9月)・生ハムとモッツァレラ、大根、しょうがの漬物の天ぷら、明太チーズのだし巻き (2026年)・自家製しょうゆだれの手羽の唐揚げ、里いもの唐揚げ、ハラミ焼き、牛すじ (2026年9月)・かま (2026年7月)・クラフトビールと焼酎、すき焼きともつ鍋 (食べログ)',
    neighborhood: '綾小路通、烏丸の西。四条・烏丸から徒歩3分',
    gf_detail: 'グルテンフリーではない: 天ぷら (生ハムとモッツァレラ、大根、しょうがの漬物)、唐揚げ、すき焼き、もつ鍋の居酒屋 (食べログ、2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 厚切りの刺身、かま、手羽、牛すじ、肉料理 (2026年の口コミ)。',
    notes: '[居酒屋・四条烏丸、町家で厚切りの刺身と釜飯] 四条烏丸近くの古い町家を改装した、木のぬくもりのあるにぎやかな居酒屋。たっぷりの厚切りの刺身、ひと工夫ある天ぷら、締めの釜飯に、クラフトビールと焼酎。3,000〜6,000円ほど。平日でも予約を。満席だと注文に時間がかかることも。毎日24時まで。',
  });
}

// ================================================================ Mont
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26041368/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '17:00']);
  put({
    id: 'kyoto_mont_kawabata_nijo', name: 'Mont', category: 'OMNI',
    lat: 35.013105, lng: 135.772593, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options, and a November 2025 reviewer says the homemade vegetable curry is gluten-free; the menu also has hot sandwiches, bread plates, parfaits with cereal and pound cake, and dog treats (2024–2025 reviews). Ask about shared kitchen and fryer.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the café says it is particular about vegetables; there is a homemade vegetable curry (November 2025). Sandwiches, parfaits and breakfast plates use cheese, cream, bacon and eggs.',
    hours_raw: 'Tabelog: Mon, Tue, Thu, Sat, Sun 8:30–17:00; closed Wednesday and Friday, plus irregular days; breakfast is served on some days only — see the café\'s Instagram. Reservations taken (rooftop bookings must be cancelled a week ahead or a 100% fee applies). 25 seats (counter, window counter, sofas, tables); smoking only on the terrace. Cards, IC cards, PayPay, d Barai. Dogs welcome inside (in diapers, leash hooks at each seat) and an indoor dog run for a fee; the café\'s corgi Mon-chan greets guests. A hotel on the 2nd floor and a rooftop BBQ rental space on the 3rd. At the Kawabata-Nijo crossing by the Kamo River, 30 s from the bus stop.',
    hours: { 0: H, 1: H, 3: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawabata-Nijo by the Kamo River — 5 min from Keihan Sanjo',
    cuisine: 'A dog-friendly café by the Kamo River with a corgi mascot, antique sofas and gluten-free and vegetarian options (Tabelog; 2024–2026 reviews) · homemade vegetable curry, described as gluten-free (November 2025) · shrimp curry; hot sandwiches (ham and cheese, cheddar); raisin-butter sandwich (August 2024) · breakfast bread plate with salad and bacon, coffee or tea included (August 2025) · parfaits: pineapple ¥900, peach ¥1,100 (August 2024) · kiwi ice cream (February 2026) · homemade lemonade; Mlesna iced teas; smoked cheese · dog treats such as venison pâté (May 2025)',
    website: null, gmaps: gm('Mont 川端二条 カフェ'), menu_url: null,
    notes: '[Café · Kawabata-Nijo, dog-friendly by the Kamo River] A bright, antique-furnished café where dogs are welcome inside and the house corgi Mon-chan does tricks. Curry (a vegetable one said to be gluten-free), hot sandwiches, breakfast plates and tall parfaits. Tabelog lists gluten-free and vegetarian options. About ¥1,000–2,000. Closed Wed and Fri.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A building at the Kawabata-Nijo crossing with a dog café and indoor dog run on the 1st floor, a hotel on the 2nd and a rooftop BBQ and rental kitchen on the 3rd (August 2024 and September 2025 reviews). The corgi Mon-chan, about five and a half in September 2025, is the café\'s mascot; that reviewer was also shown signatures by the manga group CLAMP on display.',
      philosophy: null,
      specialty: 'Dog-friendly café; homemade curries and parfaits.',
      anecdotes: [
        { text: 'November 2025: "I had the homemade vegetable curry and a ham and cheese hot sandwich. It\'s gluten-free and gentle on the body, with spices that are perfectly balanced."', source: R + 'B517273530/' },
        { text: 'August 2025: "It seems that dogs can walk around as long as they wear diapers, and my dog was thrilled to have the freedom to roam."', source: R + 'B511744214/' },
        { text: 'February 2026: "The dog run might be a bit small, though."', source: R + 'B522462302/' },
      ],
      japanese_sources_summary: '食べログ: Mont、カフェ、左京区孫橋町8-4 1F、京阪三条・市役所前から徒歩5分、川端二条バス停から30秒、月・火・木・土・日8:30〜17:00、水・金休み (不定休あり)、モーニングは不定期 (Instagram)、予約可、25席、テラスは喫煙可、カード・交通系IC・PayPay・d払い可、ベジタリアンメニューあり、グルテンフリーメニューあり、野菜にこだわる。口コミ (2024年6月〜2026年7月、英語): 看板犬のコーギー「Mon-chan」、犬は店内可 (おむつ着用)、屋内ドッグラン (有料)、2階はホテル、3階は屋上BBQとレンタルキッチン、自家製野菜カレー (グルテンフリー、2025年11月)、えびカレー、ホットサンド、パイナップルのパフェ900円・桃のパフェ1,100円 (2024年8月)、パンのプレートのモーニング (2025年8月)、ドッグランは少し狭い (2026年2月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B490492957', 'B504166428', 'B507323787', 'B511744214', 'B515810522', 'B517273530', 'B522462302', 'B532329938'])) },
    cultural_comfort: { level: 'friendly', note: 'Dogs inside (a corgi lives there) — note for allergies or fear of dogs.' },
    safety: { ...SAFETY0, positives: ['Tabelog lists gluten-free options and vegetarian options.', 'A November 2025 reviewer describes the homemade vegetable curry as gluten-free.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区孫橋町8-4 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated 2025 to July 2026.' },
    pin_source: `Tabelog ${TB} (35.013105, 135.772593); GSI lot 京都府京都市左京区孫橋町8番地 about 48m away; nearest pin kyoto_akagakiya 28.3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490492957/', R + 'B511744214/', R + 'B517273530/'],
    price_note: 'Parfait prices from August 2024; other prices not given.', last_checked: TODAY, items: [
      it('', '', 'Homemade vegetable curry', '', 'Main', 'ask', 'ask', 'November 2025; described as gluten-free.', 'vegetable_curry'),
      it('', '', 'Shrimp curry', '', 'Main', 'ask', 'no', 'August 2024.', 'shrimp_curry'),
      it('', '', 'Hot sandwich (ham and cheese)', '', 'Sandwich', 'no', 'no', '2025 reviews.', 'hot_sandwich'),
      it('', '', 'Breakfast bread plate (with coffee or tea)', '', 'Breakfast', 'no', 'no', 'August 2025.', 'bread_plate'),
      it('', '', 'Peach parfait', '¥1,100', 'Dessert', 'no', 'no', 'August 2024; pineapple parfait ¥900.', 'peach_parfait'),
    ] }, {
    cuisine: '鴨川沿いの犬と入れるカフェ。看板犬のコーギー、アンティークのソファ、グルテンフリーとベジタリアンのメニュー (食べログ、2024〜2026年の口コミ)・グルテンフリーとされる自家製野菜カレー (2025年11月)・えびカレー、ホットサンド (ハムとチーズ、チェダー)、レーズンバターのサンド (2024年8月)・サラダとベーコンのパンのプレートのモーニング、コーヒーか紅茶つき (2025年8月)・パイナップルのパフェ900円、桃のパフェ1,100円 (2024年8月)・キウイのアイス (2026年2月)・自家製レモネード、Mlesnaのアイスティー、スモークチーズ・鹿肉のパテなど犬のおやつ (2025年5月)',
    neighborhood: '川端二条、鴨川沿い。京阪三条から徒歩5分',
    gf_detail: '要確認: 食べログにグルテンフリーメニューありとあり、2025年11月の口コミでは自家製野菜カレーがグルテンフリー。ホットサンド、パンのプレート、シリアルやパウンドケーキのパフェ、犬のおやつもある (2024〜2025年の口コミ)。調理場や揚げ油の共用は確認を。',
    vegan_detail: '要確認: 食べログにベジタリアンメニューありとあり、野菜にこだわる。自家製野菜カレーがある (2025年11月)。サンド、パフェ、モーニングにはチーズ、クリーム、ベーコン、卵を使う。',
    notes: '[カフェ・川端二条、鴨川沿いの犬と入れる店] 犬が店内に入れ、看板犬のコーギー「Mon-chan」が芸を見せてくれる、アンティーク家具の明るいカフェ。カレー (野菜カレーはグルテンフリーとの声)、ホットサンド、モーニングのプレート、背の高いパフェ。食べログにグルテンフリーとベジタリアンのメニューありとある。1,000〜2,000円ほど。水・金休み。',
  });
}

// ================================================================ STICKS COFFEE 京都押小路
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26042652/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '16:00']);
  put({
    id: 'kyoto_sticks_coffee_oshikoji', name: 'STICKS COFFEE 京都押小路 (Sticks Coffee Kyoto Oshikoji)', category: 'OMNI',
    lat: 35.012322, lng: 135.762974, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: donuts, churros, toast, croissants, sandwiches and French toast (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg puddings, ice cream, lattes and breakfast plates with sausage and scrambled eggs (2026 reviews); no plant milk is mentioned.',
    hours_raw: 'Tabelog: daily 8:00–16:00; hours may change. No reservations. Order at the entrance, then choose a seat (September 2026). Breakfast menu until 13:00 (June 2026). 29 seats: 24 inside, 5 on a dog-friendly terrace. Non-smoking. Cards, e-money and QR codes. Service charge: the English listing says one may apply, but the Japanese original reads 「なし」 (none). Drink-and-dessert sets ¥200–300 off. In a renovated machiya about 150 years old (June 2026), on Oshikoji, 5 min from Karasuma Oike.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji-dori — 5 min from Karasuma Oike',
    cuisine: 'The second branch of a specialty roaster from Yakuuno Kogen in Asago, Hyogo, in a renovated 150-year-old townhouse: coffee, retro puddings, kakigori and churros (2026 reviews) · beans to choose for filter coffee, e.g. a Colombian single farm lot (June 2026); coffee ¥800, latte ¥750 (2026) · retro puddings: sakura (February), lemon, chocolate mint ¥950 (June) · melon pudding à la mode, just under ¥3,000 (June 2026) · kakigori, a new flavour every 20 days over 100 days: fig, peach and milk tea, kuromitsu with Tanba black-soybean kinako (August–September 2026) · coconut donut; churros (cinnamon sugar, matcha, coconut) · breakfast until 13:00: sausage and vegetable toast plate, teriyaki chicken, ham-and-egg croissant, French toast',
    website: null, gmaps: gm('STICKS COFFEE 京都押小路'), menu_url: null,
    notes: '[Coffee and sweets · Oshikoji, a Hyogo roaster in an old townhouse] A calm, wood-lined café in a 150-year-old townhouse from a roaster based in rural Hyogo: choose your beans, then add a retro pudding, crunchy churros or a seasonal kakigori. Breakfast plates until 1 pm. About ¥1,500–3,000. Dog-friendly terrace. The restroom is outside (hot in summer). Open daily 8–4.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A June 2026 reviewer writes that this is the second shop of Sticks Coffee, whose main store is in Yakuuno Kogen, Asago City, Hyogo, set in a renovated Kyoto townhouse about 150 years old with new white wood added. Reviewers praise warm, attentive staff and note many overseas guests (June 2026); seasonal kakigori and puddings are announced on Instagram.',
      philosophy: null,
      specialty: 'Specialty coffee; retro puddings; seasonal kakigori; churros.',
      anecdotes: [
        { text: 'June 2026: "This is the second location of Sticks Coffee, which has its main store in Yakuuno Kogen, Asago City, Hyogo Prefecture. The shop is a renovated traditional Kyoto townhouse that is about 150 years old."', source: R + 'B530536790/' },
        { text: 'August 2026: "The shaved ice is available for 100 days, with a new flavor changing every 20 days, so be sure to check their Instagram!"', source: R + 'B533805273/' },
        { text: 'July 2026: "The restroom was shockingly hot, almost like a sauna! It was outdoors and right in front of the outdoor unit."', source: R + 'B532134662/' },
      ],
      japanese_sources_summary: '食べログ: STICKS COFFEE 京都押小路、コーヒースタンド、中京区竹屋町158-3、烏丸御池から346m、毎日8:00〜16:00、予約不可、29席 (店内24席・犬と入れるテラス5席)、禁煙、カード・電子マネー・QR可、サービス料「なし」。口コミ (2026年2〜10月、英語): 兵庫県朝来市のYakuuno Kogenに本店がある2号店、築約150年の町家を改装、豆を選べるコーヒー、コーヒー800円・ラテ750円、桜・レモン・チョコミントのプリン (950円)、メロンのプリンアラモード3,000円弱、20日ごとに味が替わる100日間のかき氷 (いちじく、桃とミルクティー、黒蜜と丹波黒豆きなこ)、ココナッツのドーナツ、チュロス、13時までのモーニング、入口で注文、屋外のトイレが夏に暑い (2026年7月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B523180646', 'B529065561', 'B529756190', 'B530536790', 'B532134662', 'B533805273', 'B536325277', 'B536745077'])) },
    cultural_comfort: { level: 'friendly', note: 'Order at the entrance, then sit; dog-friendly terrace.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区竹屋町158-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated February to October 2026.' },
    pin_source: `Tabelog ${TB} (35.012322, 135.762974); GSI lot 京都府京都市中京区竹屋町158番地 about 16m away; nearest pin kyoto_da_yuge 20.0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523180646/', R + 'B529756190/', R + 'B536745077/'],
    price_note: 'Prices from February–September 2026 reviews; set discounts ¥200–300.', last_checked: TODAY, items: [
      it('', '', 'Coffee (choice of beans)', '¥800', 'Drink', 'ask', 'ask', 'February 2026.', 'coffee'),
      it('', '', 'Café latte', '¥750', 'Drink', 'ask', 'no', 'June 2026.', 'latte'),
      it('', '', 'Retro pudding (seasonal: sakura, chocolate mint, lemon)', '¥950', 'Dessert', 'ask', 'no', 'February and June 2026.', 'pudding'),
      it('', '', 'Melon pudding à la mode', 'just under ¥3,000', 'Dessert', 'ask', 'no', 'June 2026.', 'melon_pudding'),
      it('', '', 'Seasonal kakigori', '', 'Dessert', 'ask', 'ask', 'August–September 2026; flavour changes every 20 days.', 'kakigori'),
      it('', '', 'Churros (cinnamon sugar, matcha, coconut)', '', 'Dessert', 'no', 'ask', 'June–August 2026.', 'churros'),
    ] }, {
    cuisine: '兵庫県朝来市のYakuuno Kogenの焙煎店の2号店。築150年の町家を改装し、コーヒー、昔ながらのプリン、かき氷、チュロス (2026年の口コミ)・豆を選べるコーヒー、コロンビアの単一農園の豆など (2026年6月)、コーヒー800円、ラテ750円 (2026年)・プリン: 桜 (2月)、レモン、チョコミント950円 (6月)・メロンのプリンアラモード3,000円弱 (2026年6月)・20日ごとに味が替わる100日間のかき氷: いちじく、桃とミルクティー、黒蜜と丹波黒豆きなこ (2026年8〜9月)・ココナッツのドーナツ、チュロス (シナモンシュガー、抹茶、ココナッツ)・13時までのモーニング: ソーセージと野菜のトーストのプレート、照り焼きチキン、ハムエッグのクロワッサン、フレンチトースト',
    neighborhood: '押小路通。烏丸御池から徒歩5分',
    gf_detail: 'グルテンフリーではない: ドーナツ、チュロス、トースト、クロワッサン、サンド、フレンチトースト (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可: 卵のプリン、アイス、ラテ、ソーセージとスクランブルエッグのモーニング (2026年の口コミ)。植物性ミルクの記載はない。',
    notes: '[コーヒーとスイーツ・押小路、兵庫の焙煎店の町家カフェ] 兵庫の山あいに本店がある焙煎店の、築150年の町家を生かした木の落ち着いたカフェ。豆を選んで、昔ながらのプリン、カリッとしたチュロス、季節のかき氷を添えて。13時までモーニング。1,500〜3,000円ほど。犬と入れるテラスあり。トイレは屋外 (夏は暑い)。毎日8〜16時。',
  });
}

save();
