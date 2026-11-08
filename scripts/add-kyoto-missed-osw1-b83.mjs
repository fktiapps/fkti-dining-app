// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 83.
//   + 京居酒屋 シェリー Kyo Izakaya Sherry (obanzai, tempura and yuba izakaya at the east end of Gojo bridge)
//   + 祇園ろか Gion Roka (seasonal kaiseki in the small luxury hotel SOWAKA on Shimogawara-dori)
//   + ル・パレ・グルマン・スギモト Le Palais Gourmand Sugimoto (classic patisserie with a small café by Sanjo bridge)
//   - チッペンデール, スターバックス・コーヒー からすま京都ホテル店, 栴檀, 岩さき亭: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26001500 (skipped), 26002388 (skipped),
//   26027216 (skipped), 26015618, 26041424, 26001428, 26012420 (skipped).
//   queue-status.jsonl grepped for each brand (チッペンデール, スターバックス, 栴檀, シェリー, ろか, スギモト, 岩さき): only Starbucks
//   has earlier rulings (e.g. 26026909).
//   Data check: none of the three drafted is in data/kyoto.json by name or address. しぇりークラブ (Ishibekoji) and 京味処
//   そわか (Tominokoji) are different shops; 辨慶 東山店 is 11.5 m from シェリー at 東橋詰町30-3.
//   Same-name count (same brand or operator only): one shop each. 祇園ろか is the restaurant of SOWAKA, a single small
//   hotel, not a national or global group (big-chain-hotel rule, Greg 2026-11-08) — drafted, flagged. Large-parent list
//   checked.
//   Service charges: 祇園ろか lunch “Kai” ¥11,000 incl. tax and service (October 2026 review); none listed on Tabelog for
//   the others.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
//   JA text: 祝日 written in full; no bare 天 (天ぷら / 天丼 in full).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-83');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26001500', 'large parent: Hotel Okura hotel — チッペンデール is the bar of ホテルオークラ京都 (big-chain-hotel rule, Greg 2026-11-08; Okura hotels are on the large-parent list)');
skip('26002388', 'chain: Starbucks (same as 26026909)');
skip('26027216', '栴檀: no reviews dated 2025–2026 (latest January 2020)');
skip('26012420', '岩さき亭: too thin to verify — one July 2026 review naming only katsu curry and takeaway bento');

// ================================================================ 京居酒屋 シェリー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26015618/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_kyo_izakaya_sherry', name: '京居酒屋 シェリー (Kyo Izakaya Sherry)', category: 'OMNI',
    lat: 34.995653, lng: 135.769964, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, tempura, gyoza, nama-fu dengaku, yuba rolls and miso-grilled chicken; no gluten information (Tabelog menu; April 2026).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Yuba sashimi, nama-fu dengaku and fried nama-fu with tofu are listed, but nothing is said about dashi or sauces (Tabelog menu).',
    hours_raw: 'Monday, Tuesday, Thursday–Sunday 17:00–22:30 (L.O. food 21:30, drinks 22:00); closed Wednesday and on irregular days (Tabelog). Cards; no e-money or QR (Tabelog). 45 seats: counter, tables, a tatami room for up to 20 and a sunken-kotatsu private room for 6 (Tabelog). Non-smoking; smoking outside (Tabelog). At the east end of Gojo bridge, 2 min from exit 4 of Keihan Kiyomizu-Gojo (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'East end of Gojo bridge — 2 min from Keihan Kiyomizu-Gojo',
    cuisine: 'A Kyoto izakaya of obanzai, tempura and Kyoto ingredients (Tabelog) · five-obanzai plate ¥1,320; supreme seven-kind tempura ¥1,958 (Tabelog) · Kyoto yuba sashimi ¥880; nama-fu dengaku ¥660; fried nama-fu and tofu ¥715; salmon-and-cream-cheese yuba roll ¥935 (Tabelog) · “juicy explosion” gyoza ¥935; miso foil-grilled chicken thigh with Kujo onions ¥968; takowasa ¥418 (Tabelog) · sashimi platter and beef tongue; carefully made obanzai (April 2026)',
    website: null, gmaps: gm('京居酒屋 シェリー'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto izakaya · east end of Gojo bridge, obanzai and tempura] A roomy izakaya by Gojo bridge with a counter, tables, a big tatami room and a kotatsu room: Kyoto obanzai, seven-kind tempura, yuba and nama-fu dishes, sashimi and beef tongue. Good for groups; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes counter and table seats, a tatami room for parties of up to 20 and a kotatsu room for 6. An April 2026 visitor felt the care in each obanzai. No operator was found.',
      philosophy: null, specialty: 'Obanzai; tempura.',
      anecdotes: [
        { text: 'An April 2026 visitor, sent by a friend, came for the obanzai wanted in Kyoto and added a sashimi platter and beef tongue.', source: R + 'B527022096/' },
      ],
      japanese_sources_summary: '食べログ: 京居酒屋 シェリー、居酒屋・日本料理・天ぷら、東山区五条大橋東入ル東橋詰町30、京阪清水五条駅4番出口から東へ徒歩2分、月・火・木〜日 17:00〜22:30 (L.O.料理21:30、飲物22:00)、水曜定休・不定休、カード可、45席、20名までの座敷、6名の掘りごたつ個室、禁煙 (店外に喫煙所)、おばんざい5種盛り1,320円、極上天ぷら7種盛り1,958円、京湯葉の刺身880円、生麩田楽660円、生麩と豆腐の揚げ出し715円、サーモンとクリームチーズの湯葉巻き935円、肉汁爆発餃子935円、鶏ももと九条ねぎの味噌ホイル焼き968円、たこわさ418円。口コミ (2026年4月、英語): 刺身盛り合わせ、牛タン、丁寧なおばんざい。',
      confidence: 'low', sources: [TB, TB + 'dtlmenu/', R + 'B527022096/', R + 'B538076519/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Roomy, with private rooms for groups.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区五条大橋東入ル東橋詰町30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April and October 2026.' },
    pin_source: `Tabelog ${TB} (34.995653, 135.769964); cross-checked: GSI 京都府京都市東山区東橋詰町30番地 (lot) 9m; 辨慶 東山店 (kyoto_benkei_higashiyama) is 11.5 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included.', last_checked: TODAY, items: [
      it('', '', 'Five-obanzai plate', '¥1,320', 'Obanzai', 'ask', 'ask', 'Tabelog.', 'obanzai5'),
      it('', '', 'Supreme seven-kind tempura', '¥1,958', 'Tempura', 'no', 'ask', 'Tabelog.', 'tempura7'),
      it('', '', 'Kyoto yuba sashimi', '¥880', 'Kyoto dishes', 'ask', 'ask', 'Tabelog.', 'yuba'),
      it('', '', 'Nama-fu dengaku', '¥660', 'Kyoto dishes', 'no', 'ask', 'Tabelog.', 'dengaku'),
      it('', '', 'Miso foil-grilled chicken thigh with Kujo onions', '¥968', 'Grilled', 'ask', 'no', 'Tabelog.', 'chicken'),
    ] }, {
    cuisine: 'おばんざい、天ぷら、京の食材の京居酒屋 (食べログ)・おばんざい5種盛り1,320円、極上天ぷら7種盛り1,958円 (食べログ)・京湯葉の刺身880円、生麩田楽660円、生麩と豆腐の揚げ出し715円、サーモンとクリームチーズの湯葉巻き935円 (食べログ)・肉汁爆発餃子935円、鶏ももと九条ねぎの味噌ホイル焼き968円、たこわさ418円 (食べログ)・刺身盛り合わせと牛タン、丁寧なおばんざい (2026年4月)',
    neighborhood: '五条大橋の東詰。京阪清水五条から徒歩2分',
    gf_detail: '要確認。おばんざい、天ぷら、餃子、生麩田楽、湯葉巻き、鶏の味噌焼き。グルテンの情報はない (食べログのメニュー、2026年4月)。',
    vegan_detail: '要確認。湯葉の刺身、生麩田楽、生麩と豆腐の揚げ出しがあるが、出汁やたれについては書かれていない (食べログのメニュー)。',
    notes: '[京居酒屋・五条大橋東詰、おばんざいと天ぷら] カウンター、テーブル、大きな座敷と掘りごたつの部屋がある五条大橋そばの広い居酒屋。京のおばんざい、7種の天ぷら、湯葉や生麩の料理、刺身、牛タン。団体向き、水曜定休。',
  });
}

// ================================================================ 祇園ろか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041424/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gion_roka_sowaka', name: '祇園ろか (Gion Roka)', category: 'OMNI',
    lat: 35.001679, lng: 135.77833, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kaiseki with tempura, saikyo-miso grilled fish, chawanmushi and dashi; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki built on dashi, with fish, Wagyu, crab and abalone (2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (L.O. 13:30) and dinner 17:30–22:00 (L.O. 19:30) daily; closing days may vary (Tabelog). Reservations recommended — tables fill even on weekdays (March 2026). Seasonal special lunch kaiseki “Kai” ¥11,000 incl. tax and service (October 2026). Cards; no e-money or QR (Tabelog). 34 seats with a garden view (Tabelog; October 2026). Non-smoking (Tabelog). In the small hotel SOWAKA, a renovated former ryotei on Shimogawara-dori south of the Yasaka torii, about 10 min from Gion-Shijo (Tabelog; July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogawara-dori south of Yasaka Shrine — 10 min from Gion-Shijo',
    cuisine: 'Kaiseki of seasonal produce at lunch and dinner in a polished, high-ceilinged room by a garden (Tabelog; 2026 reviews) · course with one drink ¥5,000 via a booking site (March 2026); lunch kaiseki ¥11,000 incl. tax and service; Tabelog courses ¥8,200, ¥11,000 and ¥24,000 · a cup of warm dashi to start (June and September 2026) · yuba chawanmushi with corn mousse; Kintoki-carrot dressing on a green salad (June and July 2026) · sashimi with sweet squid; crisp-skinned chicken (May 2026) · grilled spring sawara with saikyo miso, tempura, sakura-shrimp and bamboo rice (April 2026) · “Kai”: yuba chawanmushi, fried hamo, saba sushi, crab with mizuna, Wagyu and abalone (October 2026)',
    website: null, gmaps: gm('祇園ろか SOWAKA'), menu_url: TB + 'dtlmenu/',
    notes: '[Kaiseki · Shimogawara near Yasaka, a hotel garden room] The restaurant of SOWAKA, a small hotel in a renovated ryotei south of Yasaka Shrine: seasonal kaiseki at lunch and dinner by the garden, opening with a cup of warm dashi — courses from about ¥8,000, the ¥11,000 lunch “Kai” including service. Flagged: a hotel restaurant (a single small hotel).',
    chef_bio: { chef_name: null, roles: ['Kitchen and staff (unnamed)'], origin: null,
      background: 'Reviewers describe the restaurant as part of the hotel SOWAKA, a renovated former ryotei that blends Japanese and modern design (July and October 2026), and praise attentive service (June and July 2026). Tabelog’s shop text mentions walls of polished Otsu plaster.',
      philosophy: 'Bringing out seasonal ingredients in kaiseki (Tabelog).', specialty: 'Seasonal kaiseki.',
      anecdotes: [
        { text: 'A June 2026 guest who arrived late in humid weather was handed a chilled towel in place of the hot one.', source: R + 'B529535448/' },
        { text: 'A July 2026 lunch came with the sounds of a Gion Matsuri float dedication outside in the rain.', source: R + 'B531288607/' },
      ],
      japanese_sources_summary: '食べログ: 祇園ろか、日本料理・創作料理、東山区下河原通八坂鳥居前下ル清井町480、祇園四条駅から徒歩約10分、昼 12:00〜15:00 (L.O.13:30)、夜 17:30〜22:00 (L.O.19:30)、不定休、カード可、34席、禁煙、旬の食材の昼のコースと夜の会席、大津磨きの黒い壁、コース8,200円・11,000円・24,000円。口コミ (2026年、英語): ホテルSOWAKAの中、元料亭を改装、庭の緑、温かい出汁から、湯葉の茶碗蒸しととうもろこしのムース、金時人参のドレッシング、甘いイカの刺身、皮のぱりっとした鶏、春の鰆の西京焼き、天ぷら、桜海老と筍のご飯、季節の特別会席「Kai」11,000円 (税・サ込み)、鱧の揚げ物、鯖寿司、蟹と水菜、和牛、鮑、冷たいおしぼり。',
      confidence: 'medium', sources: [TB, R + 'B526851028/', R + 'B529535448/', R + 'B530198190/', R + 'B531288607/', R + 'B531457593/', R + 'B532485866/', R + 'B534257855/', R + 'B535418075/', R + 'B537428388/', R + 'B537495499/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; attentive service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原通八坂鳥居前下ル清井町480',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001679, 135.77833); cross-checked: GSI 京都府京都市東山区清井町480番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537428388/'],
    price_note: 'Course prices from Tabelog and an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥8,200', 'Courses', 'ask', 'no', 'Tabelog.', 'course8200'),
      it('', '', 'Seasonal special lunch kaiseki “Kai” (tax and service included)', '¥11,000', 'Courses', 'ask', 'no', 'October 2026.', 'kai'),
      it('', '', 'Course', '¥24,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course24000'),
    ] }, {
    cuisine: '庭に面した天井の高い部屋で、旬の食材の昼と夜の会席 (食べログ、2026年の口コミ)・予約サイトの1ドリンク付きコース5,000円 (2026年3月)、税・サービス料込みの昼の会席11,000円、食べログのコース8,200円・11,000円・24,000円・最初に温かい出汁 (2026年6・9月)・とうもろこしのムースをのせた湯葉の茶碗蒸し、金時人参のドレッシングのグリーンサラダ (2026年6・7月)・甘いイカの刺身、皮のぱりっとした鶏 (2026年5月)・春の鰆の西京焼き、天ぷら、桜海老と筍のご飯 (2026年4月)・「Kai」: 湯葉の茶碗蒸し、鱧の揚げ物、鯖寿司、蟹と水菜、和牛、鮑 (2026年10月)',
    neighborhood: '八坂神社の南の下河原通。祇園四条から徒歩10分',
    gf_detail: '要確認。天ぷら、西京焼き、茶碗蒸し、出汁の旬の会席。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁の会席で、魚、和牛、蟹、鮑 (2026年の口コミ)。',
    notes: '[会席・八坂近くの下河原、ホテルの庭の部屋] 八坂神社の南、元料亭を改装した小さなホテルSOWAKAの料理店。庭を眺めながら昼も夜も旬の会席を、最初は温かい出汁から。コースは約8,000円から、昼の「Kai」はサービス料込みで11,000円。ホテルの料理店 (小さな単独のホテル、要確認)。',
  });
}

// ================================================================ ル・パレ・グルマン・スギモト
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001428/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '19:00']);
  put({
    id: 'kyoto_le_palais_gourmand_sugimoto', name: 'ル・パレ・グルマン・スギモト (Le Palais Gourmand Sugimoto)', category: 'OMNI',
    lat: 35.009543, lng: 135.775408, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pies, cakes, baumkuchen and madeleines (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream cakes, mousse au fromage and butter pastries (2025–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 10:30–19:00; closed Monday, or the day after when Monday is a holiday (Tabelog). Cash only: no cards, e-money or QR; pay first at the counter (Tabelog; November 2025). 13 seats: 3 at the counter and 5 tables for two, for cake and coffee in the shop; cakes also to take away (Tabelog; January 2026). On Sanjo-dori east of Sanjo bridge, 3 min from exit 1 of Sanjo Keihan (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori east of the bridge — 3 min from Sanjo Keihan',
    cuisine: 'An established patisserie with classic cakes and a small café corner (February 2025, January 2026) · freshly baked apple and cherry pies; apple pie served cold with coffee (February and November 2025) · chantilly chocolate ¥620; blended coffee ¥550, ¥50 off with a cake (January 2026) · mousse au fromage (February 2026) · freshly baked apple cake (April 2026) · baumkuchen, matcha-azuki cake, cherry chocolate, madeleines for gifts (August 2025)',
    website: null, gmaps: gm('ル・パレ・グルマン・スギモト'), menu_url: TB + 'dtlmenu/',
    notes: '[Patisserie café · Sanjo-dori by the bridge, classic cakes] An established little patisserie in deep green just east of Sanjo bridge, with classic cakes, apple and cherry pies baked on site and a homely corner of tables for cake and coffee (¥50 off coffee with a cake); popular cakes sell out by evening. Cash only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe an established shop with a homely owner and a handwritten menu (January and February 2026). No founding date was found.',
      philosophy: null, specialty: 'Apple pie.',
      anecdotes: [
        { text: 'A November 2025 visitor asked staff for a recommendation and was steered to the apple pie, served cold with hot coffee.', source: R + 'B517982095/' },
        { text: 'A freezing February 2026 afternoon brought one visitor in for warm coffee and a mousse au fromage.', source: R + 'B523596628/' },
      ],
      japanese_sources_summary: '食べログ: ル・パレ・グルマン・スギモト、ケーキ・カフェ、東山区三条大橋東3-35、地下鉄三条京阪駅1番出口から徒歩3分、火〜日 10:30〜19:00、月曜定休 (祝日の場合は翌日)、カード・電子マネー・QR不可、13席 (カウンター3、2人掛けテーブル5)、手提げ袋は6円。口コミ (2025〜2026年、英語): 昔ながらのケーキの老舗、焼きたてのアップルパイとチェリーパイ、冷たいアップルパイとコーヒー、前払いで現金のみ、シャンティショコラ620円、ブレンドコーヒー550円 (ケーキと一緒なら50円引き)、ムースオフロマージュ、焼きたてのりんごのケーキ、バウムクーヘン、抹茶小豆のケーキ、マドレーヌ、家庭的な店主、手書きのメニュー、夕方には売り切れも。',
      confidence: 'medium', sources: [TB, R + 'B501831195/', R + 'B512128704/', R + 'B517982095/', R + 'B521305363/', R + 'B523596628/', R + 'B526584646/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small café corner; pay first; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府東山区三条大橋東3-35',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.009543, 135.775408); GSI can place only the town; OSM has a node “Le Palais Gourmand Sugimoto” on Sanjo-dori at this point — kept the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521305363/'],
    price_note: 'Prices from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Apple pie', '', 'Cakes', 'no', 'no', 'November 2025.', 'applepie'),
      it('', '', 'Chantilly chocolate', '¥620', 'Cakes', 'no', 'no', 'January 2026.', 'chantilly'),
      it('', '', 'Blended coffee (¥50 off with a cake)', '¥550', 'Drinks', '', '', 'January 2026.', 'coffee'),
    ] }, {
    cuisine: '昔ながらのケーキと小さなカフェのある老舗のパティスリー (2025年2月、2026年1月)・焼きたてのアップルパイとチェリーパイ、冷たいアップルパイとコーヒー (2025年2・11月)・シャンティショコラ620円、ブレンドコーヒー550円、ケーキと一緒なら50円引き (2026年1月)・ムースオフロマージュ (2026年2月)・焼きたてのりんごのケーキ (2026年4月)・贈り物のバウムクーヘン、抹茶小豆のケーキ、チェリーショコラ、マドレーヌ (2025年8月)',
    neighborhood: '三条大橋の東の三条通。三条京阪から徒歩3分',
    gf_detail: 'グルテンフリーではない。パイ、ケーキ、バウムクーヘン、マドレーヌ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。生クリームのケーキ、ムースオフロマージュ、バターの焼き菓子 (2025〜2026年の口コミ)。',
    notes: '[パティスリーカフェ・三条大橋の東、昔ながらのケーキ] 三条大橋のすぐ東、深緑の小さな老舗のケーキ屋。昔ながらのケーキ、店で焼くアップルパイとチェリーパイ、ケーキとコーヒーの家庭的なテーブル席 (ケーキと一緒ならコーヒー50円引き)。人気のケーキは夕方には売り切れも。現金のみ、月曜定休。',
  });
}

save();
