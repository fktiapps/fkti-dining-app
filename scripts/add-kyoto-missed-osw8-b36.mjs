// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 36.
//   + dews cafe kyoto (bright Okazaki-Shogoin café, breakfast plates and a vegan Buddha plate; core list)
//   + ニャーヴェトナム 京都店 Nha Vietnam Kyoto (Vietnamese all-day dining by Kyoto Station; core list)
//   + とりこ Toriko (eleven-seat charcoal yakitori counter on Marutamachi; notable list)
//   + 萬寿寺はくらん Manjuji Hakuran (Goto-Islands chef's omakase in a Gojo Karasuma machiya; notable list)
//   - 京都 天ぷら圓堂 岡ざき邸 26027215 (core): chain — six 圓堂 shops in our crawls (岡ざき邸, 河原町ガーデン, 八坂, three in
//     Osaka department stores and Grand Green), over the five-shop line.
//   - どんぐり 京都駅前店 26005291 (core): chain (どんぐり, ruled a chain in earlier batches).
//   - 担担麺 胡 京都駅前店 26035321 (core): branch of a brand already in data (vm_tantanmen_yebisu_ebisu_e, 担担麺 胡 円町店).
//   - 餃子の王将 四条大宮店 26009281 (core): national chain.
//   Picked 2026-11-06 after batch 35. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after the batch-30 skips:
//   26027215 (skipped), dews cafe kyoto 26039905, 26005291 (skipped), 26035321 (skipped), ニャーヴェトナム 京都店 26027719.
//   `next notable 200`: 26023579 and 26041687 skipped earlier; とりこ 26023747, 萬寿寺はくらん 26042371. Same-name check,
//   same brand or operator only: dews cafe — one; ニャーヴェトナム — two in our crawls (this one and Nha Viet Nam
//   Roppongi Hills), under five; とりこ — one (鶏のとりこ 河原町店/梅田店 are a different name and an all-you-can-eat
//   chain with no stated link); 萬寿寺はくらん — one. dews cafe shares its block with LA VOITURE (kyoto_la_voiture, 15 m)
//   but is a separate shop. None of the four is in data/kyoto.json: grep by name and address (円頓美町47-5 京都グランドハイツ,
//   東塩小路町707-2, 信富町325-2, 御供石町360) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-36');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260302/26027215/', 'chain: 圓堂 — six shops in our crawls (Kyoto and Osaka)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26005291/', 'chain: どんぐり');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26035321/', 'chain branch: 担担麺 胡 — 円町店 already in data (vm_tantanmen_yebisu_ebisu_e)');
skip('https://tabelog.com/en/kyoto/A2601/A260203/26009281/', 'national chain: 餃子の王将');

// ================================================================ dews cafe kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26039905/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_dews_cafe_shogoin', name: 'dews cafe kyoto', category: 'OMNI',
    lat: 35.016477, lng: 135.780240, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Breakfast and lunch plates of omelette and vegetables, quiche and cakes; no gluten information (2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Some options: a "Buddha Plate" described as a vegan dish made entirely from plant-based ingredients (April 2026 review); Tabelog lists vegetarian options; oat milk for lattes (January 2026). Other plates use egg, ham and dairy.',
    hours_raw: 'Thursday–Tuesday and holidays 8:00–18:00; closed Wednesday; hours may change (Tabelog). No reservations; takeaway drinks and cakes (Tabelog; January 2026). 20 seats incl. sofas; non-smoking; wheelchair accessible; free Wi-Fi and power outlets; English menu; children and strollers welcome (Tabelog). Cards and e-money; no QR (Tabelog). 3 private parking spaces (Tabelog). 1F of Kyoto Grand Heights in Shogoin, next to LA VOITURE; a walk from Heian Shrine and the Kyocera Museum; about 750 m from Jingu-Marutamachi Stn (Tabelog; 2026 reviews). Opened 1 September 2023, after moving from Kiyamachi (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin, near Heian Shrine and Okazaki — 10 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Bright café focused on vegetables and wellness, with breakfast all day (Tabelog; 2026 reviews) · the dews Plate ¥2,500: a fluffy omelette with broccoli, grilled zucchini and eggplant, carrot râpé, salad, ham, a cold ginger-yogurt soup and fruit (April and August 2026) · a vegan Buddha Plate (April 2026); quiche plate with salad (October 2026) · cakes: spiced carrot cake ¥700 with walnuts and raisins, strawberry shortcake, cheesecake, icing cookies (January–August 2026) · house-roasted coffee; caramel or organic matcha latte ¥800 with fresh or oat milk; chai ¥850; herbal tea; Japanese black tea (2026 reviews) · about ¥1,000–3,000 (Tabelog)',
    website: null, gmaps: gm('dews cafe kyoto 聖護院'), menu_url: null,
    notes: '[Café · Shogoin near Heian Shrine, breakfast to 6 p.m.] A sunny, spacious café with big windows a short walk from Heian Shrine, roasting its own coffee: the hearty dews Plate of omelette and colourful vegetables, a fully plant-based Buddha Plate, quiche, and a well-spiced carrot cake, with oat-milk lattes and chai. Good for a quiet solo hour; English menu, parking. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 1 September 2023, with a focus on vegetables, a health-conscious menu, breakfast and vegetarian options. An August 2026 regular writes that the café moved here from Kiyamachi, and is known for house-roasted coffee and its breakfast.',
      philosophy: 'Vegetables and wellness (Tabelog).', specialty: 'dews Plate; carrot cake.',
      anecdotes: [
        { text: 'In April 2026 even the water came with cherry blossoms floating in it.', source: R + 'B516170580/' },
        { text: 'A January 2026 visitor phoned ahead to take away the carrot cake, and found its spice still tingling long after eating.', source: R + 'B521223476/' },
        { text: 'A March 2026 guest spent a slow breakfast studying and knitting over the vegetable plate.', source: R + 'B524465838/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、左京区聖護院円頓美町47-5 京都グランドハイツ 1F、神宮丸太町駅から753m、木〜火・祝 8:00〜18:00、水曜定休、予約不可、20席、ソファ席、禁煙、車椅子可、Wi-Fi・電源、英語メニュー、子ども・ベビーカー可、テイクアウト、カード・電子マネー可、QR 不可、駐車場3台、2023年9月1日オープン、野菜にこだわる、ヘルシーメニュー、朝食、ベジタリアン対応。口コミ (2025年10月〜2026年10月、英語): LA VOITURE の隣、大きな窓、dews プレート2,500円 (ふわふわのオムレツ、野菜、ハム、生姜とヨーグルトの冷製スープ、果物)、植物性の食材だけのブッダプレート (ヴィーガン)、キッシュのプレート、キャロットケーキ700円、苺のショートケーキ、チーズケーキ、アイシングクッキー、自家焙煎のコーヒー、キャラメルラテ・抹茶ラテ800円 (牛乳かオーツミルク)、チャイ850円、ハーブティー、和紅茶、木屋町から移転。',
      confidence: 'medium', sources: [TB, R + 'B516170580/', R + 'B521223476/', R + 'B521420529/', R + 'B524465838/', R + 'B525878591/', R + 'B532109562/', R + 'B534460546/', R + 'B534565220/', R + 'B535517273/', R + 'B538419734/'] },
    cultural_comfort: { level: 'english', note: 'English menu; order at the counter; cards and IC; parking.' },
    safety: { ...SAFETY0, positives: ['Tabelog lists vegetarian options; a review describes a fully plant-based Buddha Plate (April 2026); oat milk available.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院円頓美町47-5 京都グランドハイツ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.016477, 135.780240); cross-checked: GSI 京都府京都市左京区聖護院円頓美町47番地 (lot) 44 m; kyoto_la_voiture (next door) is 15 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534460546/', R + 'B521223476/', R + 'B532109562/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'dews Plate (omelette, vegetables, soup, fruit)', '¥2,500', 'Plates', 'ask', 'no', 'August 2026.', 'dews_plate'),
      it('', '', 'Buddha Plate (plant-based)', '', 'Plates', 'ask', 'vegan', 'Described as vegan; April 2026.', 'buddha_plate'),
      it('', '', 'Carrot cake', '¥700', 'Cakes', 'no', 'no', 'January 2026.', 'carrot_cake'),
      it('', '', 'Organic matcha latte (oat milk option)', '¥800', 'Drinks', 'ask', 'ask', 'May 2026.', 'matcha_latte'),
    ] }, {
    cuisine: '野菜と健康にこだわる明るいカフェ、朝食は終日 (食べログ、2026年の口コミ)・dews プレート2,500円: ふわふわのオムレツに、ブロッコリー、焼いたズッキーニと茄子、キャロットラペ、サラダ、ハム、生姜とヨーグルトの冷製スープ、果物 (2026年4月・8月)・ヴィーガンのブッダプレート (2026年4月)、サラダ付きのキッシュのプレート (2026年10月)・ケーキ: 胡桃とレーズンのスパイスのきいたキャロットケーキ700円、苺のショートケーキ、チーズケーキ、アイシングクッキー (2026年1〜8月)・自家焙煎のコーヒー、キャラメルラテや有機抹茶ラテ800円 (牛乳かオーツミルク)、チャイ850円、ハーブティー、和紅茶 (2026年の口コミ)・1,000〜3,000円ほど (食べログ)',
    neighborhood: '平安神宮と岡崎に近い聖護院。神宮丸太町駅から徒歩10分',
    gf_detail: '要確認。オムレツと野菜の朝食やランチのプレート、キッシュ、ケーキ。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '一部対応。植物性の食材だけのヴィーガンの「ブッダプレート」があると口コミにある (2026年4月)。食べログにベジタリアン対応の記載、ラテはオーツミルクも選べる (2026年1月)。ほかのプレートは卵、ハム、乳製品を使う。',
    notes: '[カフェ・平安神宮近くの聖護院、朝から18時まで] 平安神宮から歩いてすぐ、大きな窓の明るく広いカフェで、コーヒーは自家焙煎。オムレツと色とりどりの野菜のたっぷりの dews プレート、植物性だけのブッダプレート、キッシュ、スパイスのきいたキャロットケーキ、オーツミルクのラテやチャイ。一人で静かに過ごすのにも。英語メニュー、駐車場あり。水曜休み。',
  });
}

skip('https://tabelog.com/en/kyoto/A2601/A260101/26027719/', 'chain: ニャーヴェトナム (Nha Viet Nam) — Kyoto, Roppongi Hills, Premier Ginza, Shinjuku Takashimaya and Ebisu (Vietnam-kan) shops (gnavi, aumo, autoreserve; integrator 2026-11-06)');

// ================================================================ とりこ Toriko
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26023747/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_toriko_marutamachi', name: 'とりこ (Toriko)', category: 'OMNI',
    lat: 35.017610, lng: 135.768328, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly salt-grilled skewers with yuzu pepper or homemade sansho miso, but tsukune with tare, chicken sashimi with a sweet soy sauce, pâté on toast and a ramen to finish (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori counter; grilled shiitake and salads are the only plant dishes reviewers mention (2023–2026 reviews).',
    hours_raw: 'Daily 17:00–23:00; closed on irregular days; other times possible by advance arrangement (Tabelog). Reservations accepted and advised — often full (Tabelog; March and December 2024); some days bookings are limited when the chicken is not up to standard (January 2026). No cards or e-money; QR accepted (Tabelog). 11 seats along one long, narrow counter; private hire up to 20; non-smoking (Tabelog; 2023–2024 reviews). Chicken sashimi is served raw (2024 reviews). In a narrow building on Marutamachi-dori just east of Teramachi, by Kawaramachi Marutamachi; easy to miss the first time (Tabelog; September 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi-dori by Kawaramachi — 6 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Charcoal yakitori of Kousaka chicken, raised to be eaten raw, at a long counter (January 2026) · assorted chicken sashimi of five cuts with a sweet soy sauce, explained part by part (2024 reviews) · large skewers: neck, rump, gizzard with garlic, wings, heart, white liver, skin with onion, negima, skirt, two kinds of tsukune (chicken and duck), grilled chicken with Oita yuzu pepper (2024–2026 reviews) · white-liver pâté with small toasts; grilled Ehime shiitake; ginkgo; salads (2024–2026 reviews) · to finish: Toriko soba or a rich chicken-broth ramen, rice with raw egg; cake by the owner\'s wife (2019–2026 reviews) · bottled beer, sake, wine, Yakushima imo shochu · about ¥6,000–10,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('とりこ 焼き鳥 丸太町 寺町'), menu_url: null,
    notes: '[Yakitori · Marutamachi by Kawaramachi] A long, narrow eleven-seat counter grilling hefty, delicately seasoned skewers of Kousaka chicken over charcoal: chicken sashimi of five cuts, neck, rump, white liver, two tsukune and a must-order white-liver pâté on toast, finishing with a rich chicken-broth ramen. The owner runs it with warmth, with sansho from the wife\'s family and cakes baked by the wife for dessert. Book ahead; QR but no cards. Evenings.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who runs the counter alone (July 2026); the wife\'s family supplies sansho, and the wife bakes the desserts (2019, 2023)'], origin: null,
      background: 'Per Tabelog: a yakitori and kushiyaki counter of 11 seats on Marutamachi. Reviewers describe an owner of warm, sincere character (2024–2025), a one-person operation (July 2026), sansho from the wife\'s family (December 2019) and cakes baked by the wife (June 2023), sterile Kousaka chicken and shiitake from Ehime, where the owner has a connection (January 2026), and a regular of over seven years (March 2023).',
      philosophy: 'Bookings limited on days when the chicken does not meet the owner\'s standard (January 2026 review).', specialty: 'Chicken sashimi; white-liver pâté.',
      anecdotes: [
        { text: 'A November 2025 group arrived at 17:00 and, apologising, stayed about three and a half hours.', source: R + 'B517250766/' },
        { text: 'A March 2023 regular has been coming for over seven years and never tires of it.', source: R + 'B465781558/' },
        { text: 'A December 2024 visitor arrived to find it fully booked — and came back.', source: R + 'B496742675/' },
      ],
      japanese_sources_summary: '食べログ: 焼き鳥・串焼き、上京区丸太町通寺町東入ル信富町325-2 丸太町吉成ビル 1F、神宮丸太町駅から363m、毎日 17:00〜23:00、不定休、事前連絡で昼夜いつでも予約に応じる、予約可、カード・電子マネー不可、QR 可、11席 (カウンターのみ)、貸切20名まで、禁煙。口コミ (2019年12月〜2026年7月、英語): 河原町丸太町の北側、細長い建物、長いカウンター、炭火焼き、無菌の Kousaka 鶏、鶏刺し5種の盛り合わせ (甘い醤油)、大ぶりの串 (せせり、ぼんじり、砂肝のにんにく、手羽、ハツ、白レバー、皮と玉ねぎ、ねぎま、ハラミ、鶏と鴨のつくね)、大分の柚子胡椒、自家製の山椒味噌、白レバーのパテとトースト、愛媛の椎茸、銀杏、サラダ、とりこそば、鶏白湯のラーメン、卵かけご飯、奥さんの実家の山椒、奥さんのケーキ、店主一人で営む、仕入れに納得できない日は予約を絞る、Yakushima の芋焼酎、7年以上通う常連。',
      confidence: 'medium', sources: [TB, R + 'B422398241/', R + 'B465781558/', R + 'B466443978/', R + 'B469152662/', R + 'B482172728/', R + 'B492817947/', R + 'B496742675/', R + 'B517250766/', R + 'B521829907/', R + 'B532686772/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only; book ahead; skewers are large, so share; QR but no cards.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区丸太町通寺町東入ル信富町325-2 丸太町吉成ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.017610, 135.768328); cross-checked: GSI 京都府京都市上京区信富町325番地 (lot) 16 m; nearest Kyoto record 48 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496742675/', R + 'B532686772/'],
    price_note: 'No item prices read; about ¥6,000–10,000 (Tabelog; 2024–2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Assorted chicken sashimi (five cuts)', '', 'Sashimi', 'ask', 'no', 'Raw chicken.', 'torisashi'),
      it('', '', 'White-liver pâté with toast', '', 'Small dishes', 'no', 'no', 'January 2026.', 'liver_pate'),
      it('', '', 'Chicken-broth ramen', '', 'To finish', 'no', 'no', 'July 2026.', 'tori_ramen'),
    ] }, {
    cuisine: '生でも食べられる Kousaka 鶏の、長いカウンターの炭火焼き鳥 (2026年1月)・部位ごとに説明のある鶏刺し5種の盛り合わせ、甘い醤油で (2024年の口コミ)・大ぶりの串: せせり、ぼんじり、砂肝のにんにく、手羽、ハツ、白レバー、皮と玉ねぎ、ねぎま、ハラミ、鶏と鴨のつくね2種、大分の柚子胡椒の焼き鳥 (2024〜2026年の口コミ)・白レバーのパテと小さなトースト、愛媛の椎茸焼き、銀杏、サラダ (2024〜2026年の口コミ)・締めはとりこそばか濃厚な鶏白湯のラーメン、卵かけご飯、奥さんのケーキ (2019〜2026年の口コミ)・瓶ビール、日本酒、ワイン、Yakushima の芋焼酎・6,000〜10,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '河原町近くの丸太町通。神宮丸太町駅から徒歩6分',
    gf_detail: '要確認。塩焼きの串に柚子胡椒や自家製の山椒味噌が中心だが、たれのつくね、甘い醤油の鶏刺し、トーストのパテ、締めのラーメンもある (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥のカウンター。植物性の料理として口コミにあるのは椎茸焼きとサラダだけ (2023〜2026年の口コミ)。',
    notes: '[焼き鳥・河原町近くの丸太町] 細長いカウンター11席。Kousaka 鶏を炭火で焼く、大ぶりで繊細な味付けの串: 5種の鶏刺し、せせり、ぼんじり、白レバー、つくね2種、必食の白レバーのパテのトースト、締めは濃厚な鶏白湯のラーメン。店主が温かく一人で切り盛りし、山椒は奥さんの実家から、デザートは奥さんのケーキ。予約を。QR 可、カード不可。夜のみ。',
  });
}

// ================================================================ 萬寿寺はくらん Manjuji Hakuran
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042371/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://manjujihakuran.com/';
  const H = day(['18:00', '21:00']);
  put({
    id: 'kyoto_manjuji_hakuran', name: '萬寿寺はくらん (Manjuji Hakuran)', category: 'OMNI',
    lat: 34.997509, lng: 135.759171, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An omakase with hand rolls, soups, fried dishes, Goto udon and Nagasaki sara udon, and a shrimp-toast hatoshi; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led omakase — abalone, sea urchin, conger eel, sea bream — with beef and pork courses (2025–2026 reviews).',
    hours_raw: 'Daily 18:00–21:00; irregular closing days (Tabelog). Reservation only (Tabelog). Omakase ¥22,000 (May 2025); about ¥30,000–35,000 with drinks (July–August 2026). Cards incl. UnionPay; no e-money or QR (Tabelog). 16 seats: an 8-seat counter and a private room (Tabelog). In a renovated machiya on Manjuji-dori west of Karasuma; 3 min walk from Gojo Stn (Tabelog; 2025–2026 reviews). Opened 7 December 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Manjuji-dori west of Karasuma — 3 min walk from Gojo Stn',
    cuisine: 'Monthly omakase of seasonal Kyoto cooking built on Goto Islands fish, in the generous Noguchi style (2025 reviews) · omakase ¥22,000 (May 2025), e.g. abalone with hokkigai and mirugai, a namero hand roll with shiso and myoga, aburame soup with kinome, seared Tango nodoguro (May 2025) · later: grilled sesame-mackerel sushi roll, guji soup, Lake Biwa trout sashimi, fried matsutake, beef with Manganji pepper; cold chawanmushi with hairy crab, chutoro hand roll, kinmedai and onion soup, Amakusa isaki seared on the skin (September 2025–August 2026) · a Nagasaki hatoshi shrimp toast, Goto udon in Ise-lobster broth, and a run of small rice dishes — shirasu and takana, kakuni don, sara udon, tomato curry (2025–2026 reviews) · sake and wine pairings; about ¥20,000–35,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('萬寿寺はくらん 京都'), menu_url: null,
    notes: '[Japanese omakase · Gojo Karasuma machiya, Goto Islands] A renovated machiya near Gojo Station where chef Yoshida, from Nagasaki\'s Goto Islands and once head chef in the Kyotenjin Noguchi group, cooks a generous monthly omakase: abalone, a three-way sea-urchin tasting, hand rolls, seared nodoguro or isaki, then Nagasaki touches — shrimp-toast hatoshi, Goto udon, sara udon — and a parade of small rice bowls. Reservation only; evenings.',
    chef_bio: { chef_name: 'Yoshida', roles: ['Owner-chef (named by reviewers)', 'Kitchen staff'], origin: 'Goto Islands, Nagasaki (September 2025 review).',
      background: 'Per Tabelog: opened 7 December 2024, a reservation-only Japanese restaurant using seasonal ingredients. Reviewers write that chef Yoshida, from the Goto Islands, trained at places such as Ginza Koju in Tokyo, became head chef at Noguchi Tsugu in the Kyotenjin Noguchi group, and opened a restaurant named by taking one character from the name of each parent (September and December 2025); a December 2025 reviewer congratulates the restaurant on a Michelin star.',
      philosophy: 'Goto Islands ingredients seasoned in a refined Kyoto style, with Noguchi-style generous portions (December 2025 review).', specialty: 'Omakase; Goto udon.',
      anecdotes: [
        { text: 'A December 2025 reviewer explains the name: one character taken from each of the chef\'s parents\' names, as a mark of respect.', source: R + 'B527688871/' },
        { text: 'A May 2026 visitor found the restaurant through a Bilibili video by "Japanese Gourmet Report" and tried sashimi with salt for the first time.', source: R + 'B528812451/' },
        { text: 'A July 2026 guest was too full to reach dessert after the run of rice dishes, and paid ¥34,000 with wine and beer.', source: R + 'B532343186/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、下京区万寿寺通烏丸西入ル御供石町360、地下鉄五条駅から徒歩3分、毎日 18:00〜21:00、不定休、完全予約制、カード可 (銀聯も)、電子マネー・QR 不可、16席 (カウンター8、個室1)、2024年12月7日オープン、旬の食材の日本料理。口コミ (2025年5月〜2026年8月、英語): 改装した町家、月替わりのおまかせ、22,000円 (2025年5月)、飲み物込みで30,000〜35,000円ほど (2026年)、シェフの Yoshida は長崎の Goto 出身、銀座の Koju などで修業、Kyotenjin Noguchi のグループの店で料理長、独立、店名は両親の名から一字ずつ、Goto の食材を京都風に、雲丹の食べ比べ、鮑、手巻き、のどぐろ、イサキ、鱧、Hatoshi、Goto うどん、皿うどん、角煮丼、トマトカレー、ミシュランの星を祝う声 (2025年12月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B506982670/', R + 'B507293158/', R + 'B509176610/', R + 'B513050532/', R + 'B527688871/', R + 'B528812451/', R + 'B530589975/', R + 'B532343186/', R + 'B534793626/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; one omakase; cards incl. UnionPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区万寿寺通烏丸西入ル御供石町360',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; opened 7 December 2024; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (34.997509, 135.759171); cross-checked: GSI 京都府京都市下京区御供石町360番地 (lot) 67 m; nearest Kyoto record 43 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507293158/', R + 'B509176610/'],
    price_note: 'Course price from May 2025 reviews; 2026 totals with drinks about ¥30,000–35,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥22,000', 'Course', 'ask', 'no', 'May 2025.', 'omakase'),
    ] }, {
    cuisine: 'Goto の魚を軸にした、月替わりの季節の京料理のおまかせ、Noguchi 風のたっぷりの量 (2025年の口コミ)・おまかせ22,000円 (2025年5月)、例: 鮑とほっき貝とみる貝、大葉と茗荷のなめろうの手巻き、木の芽のあぶらめのお椀、Tango ののどぐろの炙り (2025年5月)・その後: 炙りのごま鯖の巻き寿司、ぐじのお椀、ビワマスのお造り、走りの松茸の揚げ物、牛と万願寺とうがらし、毛蟹の冷たい茶碗蒸し、中トロの手巻き、金目鯛と玉ねぎのお椀、Amakusa のイサキの皮目の炙り (2025年9月〜2026年8月)・長崎のハトシ、伊勢海老のだしのGoto うどん、小さなご飯ものの続き (しらすと高菜、角煮丼、皿うどん、トマトカレー) (2025〜2026年の口コミ)・日本酒やワインのペアリング、20,000〜35,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '烏丸の西の万寿寺通。五条駅から徒歩3分',
    gf_detail: '要確認。手巻き、お椀、揚げ物、Goto うどん、長崎の皿うどん、海老のトーストのハトシのあるおまかせ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮑、雲丹、鱧、鯛など魚中心のおまかせに、牛や豚の皿 (2025〜2026年の口コミ)。',
    notes: '[日本料理のおまかせ・五条烏丸の町家、Goto] 五条駅近くの改装した町家。長崎の Goto 出身で、Kyotenjin Noguchi のグループで料理長を務めた Yoshida シェフが、たっぷりの月替わりのおまかせを出す。鮑、3種の雲丹の食べ比べ、手巻き、のどぐろやイサキの炙り、そして長崎の味 (ハトシ、Goto うどん、皿うどん) に続く小さなご飯もの。完全予約制、夜のみ。',
  });
}

save();
