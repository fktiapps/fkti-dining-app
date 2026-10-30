// Osaka sweep (2-mile circle around Dotonbori), batch 209 — mom-and-pop phase (≤20 seats, 30+ reviews).
//   + 福満屋 Fukumitsuya (one-person Chinese bistro, 13 seats; Tokuimachi, Tanimachi 4-chome) — no ramen block
//   + チャイナ ダイニング アルファ China Dining Alpha (couple-run Chinese, 18 seats, opposite Isshinji Temple) — no ramen block
//   + 炭焼き鶏とつくねの店 空音 Sumiyaki Tori to Tsukune no Mise Kuune (couple-run: soupless tantanmen at lunch, yakitori at night; Awajicho)
//   + 担々麵＆中華バル 辣将軍 Tantanmen & Chuka Bar Karashogun (tantanmen and mapo specialist, 20 seats; Enokojima, Awaza) — ramen block
//   Tabelog URLs copied from each listing.txt line 1. Romaji names from shops.jsonl `en` (Tabelog English).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 209);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 福満屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270104/27010361/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:30', '23:00']);
  put({
    id: 'osaka_fukumitsuya_tokuimachi', name: '福満屋 (Fukumitsuya)', category: 'OMNI',
    lat: 34.684033, lng: 135.514352, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the menu runs to gyoza, spring rolls, kara-age, sweet-and-sour pork, dan dan noodles and crispy yakisoba, and sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: pork, chicken, shrimp, squid and scallop dishes; nothing described as vegan.',
    hours_raw: 'Mon–Sat 18:30–23:00 (last order 22:30); closed Sunday and public holidays, and over Golden Week, Obon and New Year (Tabelog). Reservations accepted; private hire for 8 or more with a minimum order of ¥4,000 a head (Tabelog). Cards (VISA, Master, JCB, AMEX) (Tabelog). The English listing\'s automatic translation mentions a 10% service charge, but the original Japanese text it shows says なし (none). 13 seats: 7 at the counter, 6 at tables; smoking allowed (Tabelog; a November 2025 review confirms smoking inside). One person cooks and serves, so dishes can take a while at busy times (Tabelog; 2025 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokuimachi 2-2-14, 1F (same address as Jinsei Yumeji Tokumen) — 3 min from Tanimachi 4-chome Stn exit 4',
    cuisine: 'Bistro-style Chinese counter (13 seats) · evening drink set ¥1,100: one drink with nuts, jellyfish salad, bang bang chicken, kara-age and spring rolls (March 2025) · tasting ("trial") set ¥1,600: jellyfish, bang bang chicken, spring rolls, kara-age, grilled gyoza, sweet-and-sour pork, a mini dan dan noodles (April 2025) · sweet-and-sour pork on a bed of fried spring-roll skins ¥1,180 (March 2025) · mapo tofu served bubbling in a cast-iron pot · shrimp, scallop and cheese egg stir-fry · spicy beef and lettuce fried rice · seafood crispy yakisoba · shrimp with mayonnaise · twice-cooked pork · draft beer ¥450, two kinds of Shaoxing wine (2025)',
    website: null, gmaps: gm('福満屋 徳井町'), menu_url: null,
    notes: "[Chinese · Tanimachi 4-chome, a one-person bistro counter] A dark, slightly forbidding front opens onto a black, bar-like room with a hand-painted dragon on the wall, seven counter seats and a couple of tables. One chef, with 30 years in Chinese kitchens by the shop's own account, cooks and serves everything, so dishes come at their own pace; diners say the wait pays. Solo drinkers start with the ¥1,100 evening set (a drink plus five small plates) or the ¥1,600 tasting set that ends in a mini dan dan noodles, numbing and properly spicy. The sweet-and-sour pork sits on a bed of crisp fried spring-roll skins, the mapo tofu arrives bubbling in a cast-iron pot with a rich, deep flavour rather than Sichuan heat, and a regular never skips the shrimp, scallop and cheese egg stir-fry. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner-chef'], origin: null, background: 'A Chinese chef with 30 years of experience (Tabelog, shop-provided text). Diners describe a one-person operation in which the owner cooks and serves (March, June and August 2025 reviews).', philosophy: 'Authentic Chinese cooking that brings out the natural flavour of the ingredients, at reasonable prices, with counter seats for solo diners (Tabelog, shop-provided text).', specialty: 'Mapo tofu; sweet-and-sour pork on fried spring-roll skins; set menus.',
      anecdotes: [
        { text: '"It seems the owner manages everything alone, so there was a bit of a wait from ordering to serving, but it was a perfect amount of time to enjoy my mild buzz." — March 2025, evening drink set ¥1,100.', source: R + 'B503202635/' },
        { text: '"I love Mapo Tofu, and I\'ve had it at many Chinese restaurants, but this might be my favorite! It\'s not the typical Sichuan style; it has a rich and deep flavor." — February 2026.', source: R + 'B522852714/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 福満屋、大阪市中央区徳井町2-2-14 大阪屋徳井ビル 1F、谷町四丁目駅4番出口から徒歩3分、月〜土18:30〜23:00 (L.O. 22:30)、日祝休み、GW・お盆・年末年始休み、予約可、8名以上の貸切は1人4000円以上、カード可 (VISA、Master、JCB、AMEX)、サービス料なし、13席 (カウンター7、テーブル6)、喫煙可。店の紹介: 中華の料理人歴30年、素材の味を生かした本格中華を手頃な値段で、カウンター中心で一人でも気軽に、混雑時は提供に時間がかかることも。口コミ(2025年2月〜2026年7月): 中華ビストロ、黒を基調にしたバーのような店内に手描きの龍、店主が一人で調理と接客、夜の晩酌セット1100円、お試しセット1600円 (クラゲ、bang bang chicken、春巻き、kara-age、焼き gyoza、酢豚、ミニ担々麺)、揚げた春巻きの皮にのせた酢豚1180円、鉄鍋で熱々の mapo tofu、海老とホタテとチーズの卵炒め、牛肉とレタスのピリ辛炒飯、海鮮のかた焼きそば、生ビール450円、紹興酒は甘口と辛口、店内喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B490757726/', R + 'B501238613/', R + 'B503202635/', R + 'B503479019/', R + 'B509527271/', R + 'B517024992/', R + 'B522852714/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter, one person cooking and serving; smoking allowed (Tabelog, 2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市中央区徳井町2-2-14 大阪屋徳井ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区徳井町二丁目2番14号 (go) 9m; OSM 中華ビストロ福満屋 node/6401604586 2m. 徳麺 (osaka_jinsei_yumeji_tokumen_tokuimachi) is at the same address with a Tabelog point about 3 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503202635/', R + 'B501238613/'],
    price_note: 'Prices from March–April 2025 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Evening drink set (drink + 5 small plates)', '¥1,100', 'Sets', 'no', 'no', 'March 2025.', 'evening_set'),
      it('', '', 'Tasting set (7 dishes, ends with mini dan dan noodles)', '¥1,600', 'Sets', 'no', 'no', 'April 2025.', 'trial_set'),
      it('', '', 'Sweet-and-sour pork on fried spring-roll skins', '¥1,180', 'Main', 'no', 'no', 'March 2025.', 'subuta'),
      it('', '', 'Mapo tofu', '', 'Main', 'ask', 'no', '2025–2026.', 'mapo'),
      it('', '', 'Shrimp, scallop and cheese egg stir-fry', '', 'Main', 'ask', 'no', 'July 2026.', 'egg_stirfry'),
      it('', '', 'Draft beer', '¥450', 'Drinks', '', '', 'April 2025.', 'beer'),
    ] }, {
    cuisine: 'ビストロ風の中華のカウンター (13席)・夜の晩酌セット1100円: ドリンク1杯とナッツ、クラゲ、bang bang chicken、kara-age、春巻き (2025年3月)・お試しセット1600円: クラゲ、bang bang chicken、春巻き、kara-age、焼き gyoza、酢豚、ミニ担々麺 (2025年4月)・揚げた春巻きの皮にのせた酢豚1180円 (2025年3月)・鉄鍋で熱々の mapo tofu・海老とホタテとチーズの卵炒め・牛肉とレタスのピリ辛炒飯・海鮮のかた焼きそば・海老マヨ・回鍋肉・生ビール450円、紹興酒は2種類 (2025年)',
    neighborhood: '徳井町2-2-14 大阪屋徳井ビル 1F (人生夢路 徳麺と同じ住所)。谷町四丁目駅4番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。gyoza、春巻き、kara-age、酢豚、担々麺、かた焼きそばなどがあり、たれの説明もなし。',
    vegan_detail: '実質ヴィーガンではありません。豚、鶏、海老、イカ、ホタテの料理。ヴィーガンの記載なし。',
    notes: '[中華・谷町四丁目、一人で切り盛りするビストロのカウンター] 少し入りにくい暗い外観の奥は、黒を基調にしたバーのような店内で、壁には手描きの龍、カウンター7席とテーブルが少し。店の紹介によれば中華の料理人歴30年の店主が、調理も接客も一人でこなすので、料理は少し待つこともあるが待つ価値ありという声。一人飲みなら、ドリンクと小皿5品の晩酌セット1100円か、ミニ担々麺で締めるお試しセット1600円から。担々麺はしびれてしっかり辛い。酢豚はパリッと揚げた春巻きの皮の上に、mapo tofu は鉄鍋でぐつぐつのまま出てきて、四川の辛さより濃く深い味。海老とホタテとチーズの卵炒めは毎回頼むという常連も。店内は喫煙可。',
  });
}

// ================================================================ チャイナ ダイニング アルファ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270203/27050265/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_china_dining_alpha_tennoji', name: 'チャイナ ダイニング アルファ (China Dining Alpha)', category: 'OMNI',
    lat: 34.653235, lng: 135.513133, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; dishes include dan dan noodles, shumai, spring rolls, fried chicken and Chinese sauces. The shop asks diners to mention allergies when booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: pork, chicken, beef and shrimp dishes; nothing described as vegan.',
    hours_raw: 'Mon, Wed–Sun 11:30–15:00 (last order 14:30) and 18:00–22:00 (last order 21:00); closed Tuesday and the 1st and 3rd Monday (Tabelog). Dinner by reservation only; reservations taken for dinner only; tell the shop about allergies or dislikes when booking (Tabelog). No cards or e-money; PayPay and d Barai accepted (Tabelog). 18 seats; non-smoking; children and strollers welcome; English menu and English-speaking staff (Tabelog). Tabelog\'s remarks note a move from Ōsu 3-30-6, Naka Ward, Nagoya (no date given).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tennoji Ward, Lions Mansion Yuhigaoka 102 (address 2-1-9), across from Isshinji Temple — 8 min from Shitennoji-mae Yuhigaoka Stn or JR Tennoji Stn',
    cuisine: 'Refined Chinese with Sichuan roots (18 seats) · lunch: spicy dan dan noodles ¥1,000 with half fried rice ¥250 (October 2025), chilled dan dan noodles in summer ¥1,200, sweet-and-sour pork set ¥1,450 with soup, bang bang chicken and lychee (September 2026), curry fried rice set ¥1,300 with two pieces of kara-age (September 2026), shrimp chili set, mapo rice, Taiwanese-style ramen, daily noodle specials · dinner (reserve): course ¥5,500 (September 2024); à la carte such as fried chicken with lemon sauce ¥1,210, shrimp chili ¥1,760, stir-fried pork with garlic stems ¥1,540, cashew chicken ¥1,650, snow crab and cheese spring rolls (2) ¥770, shumai (3) ¥720 (September 2025)',
    website: null, gmaps: gm('チャイナ ダイニング アルファ 天王寺'), menu_url: null,
    notes: "[Chinese · Tennoji, a couple-run hideaway across from Isshinji Temple] An easy-to-miss restaurant in the ground floor of an apartment block facing Isshinji Temple. Diners say the owner-chef spent 15 years as head chef of a well-known restaurant and won the grand prize at a Chinese cooking competition, and a newspaper article on the wall tells of years leading a renowned Sichuan kitchen; celebrity autographs hang here and there. The cooking is refined rather than greasy. Lunch is good value: the signature dan dan noodles (choose the heat), sweet-and-sour pork set with soup and lychee, or a light, spicy curry fried rice with the house kara-age. Dinner is by reservation: a ¥5,500 course might bring stir-fried beef with miso tucked into steamed buns and sizzling crispy rice. Regulars mention the warmth of the master and the master's wife, and an owner who sees guests out the door.",
    chef_bio: { chef_name: null, roles: ['Owner-chef'], origin: null, background: 'Served 15 years as head chef at a famous restaurant and won the grand prize in a Chinese cooking competition (September 2025 and September 2026 reviews, the latter citing the shop\'s Tabelog page). A newspaper article displayed in the restaurant says the master was head chef at a renowned Sichuan restaurant for many years (September 2024 review). Runs the shop with the master\'s wife (July 2025 and September 2024 reviews). Tabelog notes a move from Ōsu, Nagoya.', philosophy: null, specialty: 'Dan dan noodles; sweet-and-sour pork; dinner courses.',
      anecdotes: [
        { text: '"The master and his wife are very friendly and enjoyable to talk to. Every visit feels great." — July 2025, course meal.', source: R + 'B495366784/' },
        { text: '"Unlike the heavy, greasy style of local Chinese food, this dish features a refined fried rice base topped with a light and spicy curry flavor." — September 2026, curry fried rice set ¥1,300.', source: R + 'B535066696/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): チャイナ ダイニング アルファ、大阪市天王寺区逢阪2-1-9 ライオンズマンション夕陽丘102、四天王寺前夕陽ケ丘駅・天王寺駅・恵美須町駅から徒歩8分、月水〜日11:30〜15:00 (L.O. 14:30)・18:00〜22:00 (L.O. 21:00)、火曜と第1・第3月曜休み、夜は予約のみ、アレルギーは予約時に、カード・電子マネー不可、PayPay・d払い可、18席、禁煙、子供・ベビーカー可、英語メニュー・英語のスタッフあり、名古屋市中区大須3-30-6から移転。口コミ(2024年6月〜2026年10月): 一心寺の向かい、ハンバーガー店の隣、見つけにくい隠れ家、有名店で料理長を15年、中華料理のコンクールで大賞、店内の新聞記事に四川料理の名店の料理長だったと、有名人のサイン、マスターと奥さんがあたたかい、帰りに外まで見送り、ランチは担々麺1000円と半炒飯250円、夏の冷やし担々麺1200円、酢豚ランチ1450円 (スープ、bang bang chicken、ライチ)、カレー炒飯セット1300円 (kara-age 2個)、海老チリ、台湾風ラーメン、夜は予約でコース5500円、牛肉の味噌炒めを蒸したての饅頭にはさんで、おこげのあんかけ、揚げた若鶏のレモンソース1210円、海老チリ1760円、ニンニクの芽と豚の炒め1540円、カシューナッツ炒め1650円、ずわい蟹とチーズの春巻き770円、shumai 720円。',
      confidence: 'medium', sources: [TB, R + 'B491243478/', R + 'B495366784/', R + 'B501531482/', R + 'B514061747/', R + 'B535066696/', R + 'B535344647/', R + 'B536786789/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff; dinner by reservation only (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市天王寺区逢阪2-1-9 ライオンズマンション夕陽丘102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区逢阪二丁目1番9号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B501531482/', R + 'B514061747/', R + 'B535344647/', R + 'B535066696/', R + 'B491243478/'],
    price_note: 'Prices from reviews dated September 2024 to September 2026; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Spicy dan dan noodles', '¥1,000', 'Lunch', 'no', 'no', 'October 2025; half fried rice +¥250.', 'tantanmen'),
      it('', '', 'Sweet-and-sour pork lunch set', '¥1,450', 'Lunch', 'ask', 'no', 'September 2026; with soup, bang bang chicken and lychee.', 'subuta_lunch'),
      it('', '', 'Curry fried rice set with kara-age', '¥1,300', 'Lunch', 'ask', 'no', 'September 2026.', 'curry_fried_rice'),
      it('', '', 'Dinner course', '¥5,500', 'Course', 'ask', 'no', 'September 2024; reservation only.', 'course'),
      it('', '', 'Fried young chicken with lemon sauce', '¥1,210', 'À la carte', 'ask', 'no', 'September 2025.', 'lemon_chicken'),
      it('', '', 'Shrimp in chili sauce', '¥1,760', 'À la carte', 'ask', 'no', 'September 2025.', 'ebichili'),
    ] }, {
    cuisine: '四川がルーツの上品な中華 (18席)・ランチ: ピリ辛の担々麺1000円と半炒飯250円 (2025年10月)、夏の冷やし担々麺1200円、酢豚ランチ1450円 (スープ、bang bang chicken、ライチ付き、2026年9月)、kara-age 2個付きのカレー炒飯セット1300円 (2026年9月)、海老チリのセット、mapo rice、台湾風ラーメン、日替わりの麺・ディナー (予約制): コース5500円 (2024年9月)。アラカルトは揚げた若鶏のレモンソース1210円、海老チリ1760円、ニンニクの芽と豚の炒め1540円、カシューナッツと鶏の炒め1650円、ずわい蟹とチーズの春巻き (2本) 770円、shumai (3個) 720円 (2025年9月)',
    neighborhood: '天王寺区逢阪2-1-9 ライオンズマンション夕陽丘102、一心寺の向かい。四天王寺前夕陽ケ丘駅、JR天王寺駅から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。担々麺、shumai、春巻き、kara-age、中華のたれなど。アレルギーは予約のときに伝えるよう店が案内 (食べログ)。',
    vegan_detail: '実質ヴィーガンではありません。豚、鶏、牛、海老の料理。ヴィーガンの記載なし。',
    notes: '[中華・天王寺、一心寺の向かいの夫婦の隠れ家] 一心寺の向かい、マンションの1階にある見落としそうな店。有名店で料理長を15年務め、中華料理のコンクールで大賞を取った店主という声があり、壁の新聞記事には四川料理の名店の料理長を長く務めたとある。有名人のサインもあちこちに。料理は脂っこくなく上品。ランチがお得で、看板の担々麺 (辛さを選べる)、スープとライチ付きの酢豚のセット、あっさりピリ辛のカレー炒飯と自慢の kara-age。夜は予約制で、5500円のコースには牛肉の味噌炒めを蒸したての饅頭にはさむ一皿や、じゅっと音を立てるおこげのあんかけも。マスターと奥さんのあたたかさ、外まで見送ってくれる店主の話をする常連も。',
  });
}

// ================================================================ 炭焼き鶏とつくねの店 空音
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27045338/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '12:45'], ['17:30', '21:30']);
  put({
    id: 'osaka_kuune_awajicho', name: '炭焼き鶏とつくねの店 空音 (Sumiyaki Tori to Tsukune no Mise Kuune)', category: 'OMNI',
    lat: 34.686921, lng: 135.508797, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Lunch is wheat-noodle dan dan noodles or chicken mapo tofu; at night, yakitori and tsukune come in several flavours (salt, shiso-kombu, miso mayonnaise), and tare is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant; the noodles and mapo tofu are topped with minced chicken.',
    hours_raw: 'Mon–Fri 11:30–12:45 (last entry for lunch) and 17:30–21:30; Sat 17:30–21:30; closed Sunday, public holidays and every other Saturday — check the monthly calendar (Tabelog). Lunch serves only dan dan noodles and chicken mapo tofu; order and pay at once (2023–2025 reviews); mostly business people at lunch (2022 review). Yakitori and tsukune at night. Cards (VISA, Master, JCB) and PayPay; no e-money (Tabelog). 15 seats: 7 at the counter, two tables of 4; non-smoking (Tabelog). Bentos under the name Kuune Bento (Instagram kuune_obento, per Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['17:30', '21:30']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Awajicho 1-2-8, Rejoice Awajicho 1F — about 6–7 min from Kitahama or Sakaisuji-Hommachi Stn',
    cuisine: 'Charcoal-grilled chicken and tsukune by night, soupless dan dan noodles by day (15 seats) · lunch: dry black dan dan noodles, simple black-sesame version ¥800 (December 2025, April 2026) or with Sichuan spices ¥830 (November 2025), topped with spiced minced chicken, bok choy, pickled ginger, kaki-pi crackers and nuts; seafood mala noodles; chilled versions in summer; extra noodles ×1.5 ¥100, rice (100 g) ¥50, soft-boiled egg; chicken mapo tofu · dinner: yakitori (heart, gizzard, thigh with green onion) and tsukune in salt, shiso-kombu or miso-mayonnaise, shrimp and cheese tsukune, chicken wings, chicken sashimi course, Kuune course ¥2,500 (February 2024), egg rice to finish, uncommon sake, black-sesame shochu',
    website: 'https://www.instagram.com/kuune0917/', gmaps: gm('空音 淡路町'), menu_url: null,
    notes: "[Yakitori · Awajicho, a couple's tsukune bar that sells dan dan noodles at lunch] A dim, homey room on the ground floor of Rejoice Awajicho, run by a couple: the chef in the kitchen, the partner out front. At night it is a charcoal yakitori and tsukune bar — order skewers singly to try more, with salt, shiso-kombu or miso-mayo tsukune, shrimp and cheese versions, and egg rice to finish. At lunch the counter fills with office workers for just two things: chicken mapo tofu, eaten like curry, and soupless dan dan noodles, the house signature. Flat, chewy noodles come in a curry plate under spiced minced chicken, black and white sesame and tahini, bok choy, sushi-style pickled ginger and crunchy kaki-pi; pick the simple black-sesame bowl or the numbing Sichuan one, add rice to mop up the sauce, and borrow the apron provided. One noodle critic found the flavour lacking; most come back.",
    chef_bio: { chef_name: null, roles: ['Chef', 'Front of house'], origin: null, background: 'Run by two people, the head chef in the kitchen and a hostess serving customers (December 2022 review); described as a couple (December 2023 and February 2024 reviews).', philosophy: null, specialty: 'Charcoal-grilled chicken and tsukune; soupless dan dan noodles; chicken mapo tofu.',
      anecdotes: [
        { text: '"In the evening, they serve yakitori, but during lunch, they focus on tantanmen." — November 2025, dry black tantanmen with Sichuan spices ¥830.', source: R + 'B517342667/' },
        { text: '"The restaurant is run by two people: the head chef in the kitchen and the hostess serving customers." — December 2022.', source: R + 'B457582231/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 炭焼き鶏とつくねの店 空音、大阪市中央区淡路町1-2-8 リジョイス淡路町 1F、北浜駅・堺筋本町駅から徒歩7分、月〜金11:30〜12:45 (ランチ最終入店)・17:30〜21:30、土17:30〜21:30、日祝と隔週土曜休み (月の営業カレンダーで)、予約可、カード (VISA、Master、JCB)・PayPay可、電子マネー不可、15席 (カウンター7、4人テーブル2)、禁煙、弁当は Kuune Bento (インスタ kuune_obento)。口コミ(2022年12月〜2026年7月): 夜は焼鳥とつくね、昼は担々麺と鶏の mapo tofu だけ、ランチは注文時に先払い、汁なし黒担々麺のシンプル黒ごま800円、四川スパイス830円、平打ちのもちもちした太麺、スパイスの鶏ミンチ、青梗菜、寿司屋のようなガリ、柿ピー、ナッツ、黒白のごまと芝麻醤、カレー皿で出てくる、麺1.5倍100円、ご飯100g50円、半熟卵、海鮮麻辣、夏は冷やし、エプロンあり、卓上に花椒、厨房の大将と接客の女性の二人で、夫婦で営む、つくねは塩・しそ昆布・味噌マヨ、海老つくね、チーズつくね、手羽、鶏刺しのコース、空音のコース2500円 (2024年2月)、締めの卵かけご飯、珍しい日本酒、黒ごま焼酎、物足りないという声も。',
      confidence: 'medium', sources: [TB, R + 'B457582231/', R + 'B475790679/', R + 'B479218010/', R + 'B491335437/', R + 'B517342667/', R + 'B522741871/', R + 'B526420180/', R + 'B533353839/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch: order and pay at once; noon queues of office workers (2023–2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区淡路町1-2-8 リジョイス淡路町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); lunch reviews dated through July 2026; the latest fetched dinner reviews are from 2023–2024.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区淡路町一丁目2番8号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517342667/', R + 'B522741871/', R + 'B526420180/', R + 'B479218010/'],
    price_note: 'Lunch prices from November 2025–April 2026 reviews; a May 2025 review gives ¥850 for the Sichuan bowl. Course price from February 2024.', last_checked: TODAY, items: [
      it('', '', 'Dry black dan dan noodles, simple black sesame', '¥800', 'Lunch noodles', 'no', 'no', 'December 2025, April 2026.', 'kuro_tantan'),
      it('', '', 'Dry black dan dan noodles with Sichuan spices', '¥830', 'Lunch noodles', 'no', 'no', 'November 2025.', 'sichuan_tantan'),
      it('', '', 'Extra noodles (×1.5)', '¥100', 'Toppings', 'no', 'no', 'April 2026.', 'oomori'),
      it('', '', 'Rice (100 g)', '¥50', 'Toppings', '', '', 'November 2025.', 'rice'),
      it('', '', 'Chicken mapo tofu', '', 'Lunch', 'ask', 'no', 'January 2026.', 'mapo'),
      it('', '', 'Kuune course (salad, four chicken cuts, choice of tsukune)', '¥2,500', 'Dinner course', 'ask', 'no', 'February 2024.', 'course'),
    ] }, {
    cuisine: '夜は炭焼きの鶏とつくね、昼は汁なし担々麺 (15席)・ランチ: 汁なし黒担々麺、シンプル黒ごま800円 (2025年12月、2026年4月)、四川スパイス830円 (2025年11月)。スパイスの鶏ミンチ、青梗菜、ガリ、柿ピー、ナッツをのせて。海鮮麻辣の麺、夏は冷やしも。麺1.5倍100円、ご飯 (100g) 50円、半熟卵。鶏の mapo tofu・夜: 焼鳥 (ハツ、砂肝、ねぎま)、つくねは塩・しそ昆布・味噌マヨ、海老とチーズのつくね、手羽、鶏刺しのコース、空音のコース2500円 (2024年2月)、締めの卵かけご飯、珍しい日本酒、黒ごま焼酎',
    neighborhood: '淡路町1-2-8 リジョイス淡路町 1F。北浜駅・堺筋本町駅から徒歩6〜7分ほど',
    gf_detail: '要確認。昼は小麦の麺の担々麺か鶏の mapo tofu。夜の焼鳥とつくねは塩、しそ昆布、味噌マヨなど味がいろいろで、たれの説明はなし。',
    vegan_detail: 'ヴィーガンではありません。鶏の店で、担々麺と mapo tofu にも鶏ミンチ。',
    notes: '[焼鳥・淡路町、昼は担々麺を出す夫婦のつくねの店] リジョイス淡路町の1階、照明を落とした家庭的な店で、厨房の大将と接客の女性、夫婦二人で営む。夜は炭焼きの焼鳥とつくねの店で、串は1本から頼めるのでいろいろ試せる。つくねは塩、しそ昆布、味噌マヨ、海老やチーズも。締めは卵かけご飯。昼は会社員でカウンターが埋まり、メニューは鶏の mapo tofu (カレーのように食べる) と看板の汁なし担々麺の二つだけ。平打ちのもちもちした麺がカレー皿で出てきて、上にはスパイスの鶏ミンチ、黒と白のごまと芝麻醤、青梗菜、寿司屋のようなガリ、カリッとした柿ピー。シンプルな黒ごまか、しびれる四川を選び、ご飯を足して残ったたれまで。エプロンも用意。麺にうるさい客には物足りないという声もあるが、多くはまた来る。',
  });
}

// ================================================================ 担々麵＆中華バル 辣将軍
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270105/27095877/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_karashogun_enokojima', name: '担々麵＆中華バル 辣将軍 (Tantanmen & Chuka Bar Karashogun)', category: 'OMNI',
    lat: 34.683283, lng: 135.485421, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tantanmen shop built on wheat noodles; the mapo rice and bar dishes are not described for gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: the menu runs to fried chicken, shrimp and clams, and no plant-based tantanmen or mapo is mentioned.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 18:00–23:00; Sat and public holidays 18:00–23:00 (no lunch); closed Sunday (Tabelog). Obon: dinner only on 11–16 August (Tabelog). One May 2025 diner found it closed on weekends. Reservations accepted; no cards, other payment not listed (Tabelog). 20 seats; no smoking at lunch, smoking allowed in the evening bar hours (Tabelog). Spice is chosen when ordering, in five levels per a February 2025 review; lunch queues of office workers (2025 reviews). Opened 20 November 2016 (Tabelog). The Tabelog address reads 江子之島, a slip for 江之子島.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['18:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Enokojima 1-6-2, 1F (same address as Men LABO Yuisou) — 1 min from Awaza Stn exit 10 (Sennichimae Line), near Utsubo Park',
    cuisine: 'Sichuan-style tantanmen and mapo tofu from a Chinese chef (20 seats) · about ten kinds of tantanmen (February 2025), each with a choice of thin, medium-thick or flat noodles (October 2025): original Sichuan tantanmen ¥935 (February 2025), white-sesame tantanmen, Gold tantanmen, dry (soupless) tantanmen · mapo noodles ¥990, extra spicy +¥100 (July 2026) · lunch sets pairing tantanmen with mapo rice, with salad and canned mandarin: A or B set ¥950 before tax (2025), ¥1,045 with tax (February 2026), C set of half portions under ¥1,000 (August 2026) · fried rice ¥680 (April 2025) · evening bar dishes: fried peanuts, pickled mustard greens, yurinchi, stir-fried chives and egg, shrimp, clams · beer, sake, shochu, wine, cocktails',
    website: null, gmaps: gm('辣将軍 江之子島'), menu_url: null,
    notes: "[Ramen · Awaza, a Sichuan tantanmen counter under a painted Shoki] A small Chinese bar in an office building a minute from Awaza Station, behind a bold sign, where the owner is said to have painted the imposing wall mural of Shoki, and the chef speaks Chinese. Tantanmen is the point: around ten kinds, five spice levels, and three noodles to choose from (thin, medium-thick, or the rarer flat ones). The original Sichuan bowl brings numbing peppercorn and star anise, the white-sesame one is tangier and gentle, and 'regular' heat already makes some diners sweat — though others found medium mild. At lunch, office workers queue for sets pairing tantanmen with the even hotter mapo rice; dishes come as they are ready, finished with a few canned mandarin segments. A regular since opening felt the flavours drifted in September 2026, and another diner got overcooked noodles, but the owner's generosity (free rice, almond tofu, a rounded-down bill) wins people over.",
    chef_bio: { chef_name: null, roles: ['Owner-chef'], origin: 'From "the mainland" per a February 2025 review; Tabelog calls the cooking "authentic Sichuan delicacies by a Chinese chef".', background: 'Opened 20 November 2016 (Tabelog). The owner chats casually with customers (February 2025 review), the chef speaks Chinese (May 2025 review), the owner is said to have painted the Shoki mural (March 2025 review), and a single chef runs the kitchen (September 2026 review, a regular since opening).', philosophy: 'Rich Sichuan-style tantanmen where spice, aroma and umami come together (Tabelog, shop-provided text).', specialty: 'Tantanmen; mapo tofu.',
      anecdotes: [
        { text: '"The generous owner treated us to rice and almond tofu, and even rounded down the bill for us." — August 2026, Gold tantanmen.', source: R + 'B534568962/' },
        { text: '"For the tantanmen, I had the choice of thin, medium-thick, or flat noodles. I thought, \'Isn\'t flat tantanmen quite rare?\'" — October 2025, B mapo rice set ¥950 before tax.', source: R + 'B515052188/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 担々麵＆中華バル 辣将軍、大阪市西区江子之島1-6-2 奥内第8ビル1F (江之子島の誤記)、阿波座駅10番出口から徒歩1分、月〜金11:30〜14:00・18:00〜23:00、土祝18:00〜23:00、日曜休み、お盆は8月11〜16日夜のみ、予約可、カード不可、20席、ランチは禁煙・バータイムは喫煙可、オープン日2016年11月20日。店の紹介: 中国人の料理人による本格四川料理、大阪初の本格四川の濃厚担々麺。口コミ(2024年5月〜2026年9月): 店主は本土の出身で気さくに客と話す、料理人は中国語を話す、壁の Shoki の絵は店主が描いたという、辛さ5段階、担々麺は10種類ほど、麺は細麺・中太麺・平打ち麺から、四川風の担々麺935円、mapo noodles 990円 (激辛+100円)、白ごまの担々麺は酸味寄り、Gold 担々麺、汁なしの担々麺、ランチは担々麺と mapo rice のセット (Aセット・Bセット950円税別、2026年2月は税込1045円、Cセットはハーフで1000円以下)、サラダとみかんの缶詰、炒飯680円、夜はピーナッツ揚げ、ザーサイ、yurinchi、ニラ玉、海老、あさり、花椒と八角の香り、普通でも汗だくという声と辛くないという声、オープン以来の常連が2026年9月に味のぶれを感じた、麺がのびていたという声、ご飯と杏仁豆腐をサービスしてくれて端数もまけてくれた。',
      confidence: 'medium', sources: [TB, R + 'B501749648/', R + 'B502403984/', R + 'B515052188/', R + 'B531990155/', R + 'B532586010/', R + 'B533255755/', R + 'B534568962/', R + 'B536198303/'] },
    ramen: {
      broth_base: [], broth_texture: 'unknown', tare: ['other'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: null, shape: null, hydration: null, handmade: false, notes: 'Choice of thin, medium-thick or flat noodles with each tantanmen (October 2025); the flat ones chewy (August 2026); thin noodles firm in the mapo noodles (July 2026); one February 2026 diner got overcooked noodles.' },
      regional_style: [], sub_genre: ['tantanmen', 'shirunashi tantanmen'],
      signature_bowl: 'Original Sichuan tantanmen ¥935 (February 2025); an April 2025 review gives ¥850 for the original tantanmen.',
      chashu: null,
      notable_toppings: ['Sichuan pepper', 'star anise'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Broth not described; no plant-based bowl is mentioned.' },
      pantheon: 'Awaza\'s Sichuan tantanmen bar: ten bowls, five heat levels and three noodles, with numbing peppercorn, star anise and rich sesame, beside a fiery mapo rice.',
      profile: { richness: 3, oiliness: 3, clarity: 1, tare_strength: 3, noodle_firmness: 3, aroma_punch: 4 },
      profile_basis: {
        richness: [R + 'B536198303/', '"The tantanmen has a rich sesame flavor" (September 2026), against "slightly lacking in richness" (' + R + 'B496424976/, November 2024) — mid-scale.'],
        oiliness: [R + 'B531990155/', 'Oil not described in any fetched review — mid-scale.'],
        clarity: [R + 'B536198303/', 'Sesame tantanmen ("rich sesame flavor", September 2026) — opaque.'],
        tare_strength: [R + 'B485091046/', 'White-sesame tantanmen "leaned more towards a tangy flavor" (May 2024); seasoning strength not otherwise described — mid-scale.'],
        noodle_firmness: [R + 'B532586010/', '"Firm, thin noodles" (July 2026) and chewy flat noodles (' + R + 'B533255755/, August 2026), against overcooked noodles (' + R + 'B522226198/, February 2026) — mid-scale.'],
        aroma_punch: [R + 'B531990155/', '"The flavor of the Sichuan peppercorns was quite prominent" (July 2026); "the aroma of star anise and other spices" (' + R + 'B501749648/, February 2025).'],
      },
      confidence: 'medium', sources: [R + 'B536198303/', R + 'B531990155/', R + 'B532586010/', R + 'B533255755/', R + 'B501749648/', R + 'B515052188/'], last_checked: TODAY,
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose spice level (and noodle type) when ordering; no cards; the chef speaks Chinese (2025 reviews).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市西区江之子島1-6-2 奥内第8ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区江之子島一丁目6番2号 (go) 5m, looked up with the listing's 江子之島 corrected to 江之子島. Men LABO Yuisou (osaka_men_labo_yuisou_awaza) is at the same address with a Tabelog point about 2 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B501749648/', R + 'B532586010/', R + 'B515052188/', R + 'B504688071/'],
    price_note: 'Prices from February 2025–July 2026 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Original Sichuan tantanmen', '¥935', 'Noodles', 'no', 'no', 'February 2025; ¥850 in an April 2025 review.', 'tantanmen'),
      it('', '', 'Mapo noodles', '¥990', 'Noodles', 'no', 'no', 'July 2026; extra spicy +¥100.', 'mapo_men'),
      it('', '', 'White-sesame tantanmen', '', 'Noodles', 'no', 'no', 'March 2026.', 'shirogoma'),
      it('', '', 'Dry (soupless) tantanmen', '', 'Noodles', 'no', 'no', 'July 2026.', 'shirunashi'),
      it('', '', 'Lunch B set (mapo rice, mini tantanmen, salad, dessert)', '¥950 + tax', 'Lunch', 'no', 'no', 'October 2025.', 'set_b'),
      it('', '', 'Fried rice', '¥680', 'Rice', 'ask', 'no', 'April 2025.', 'chahan'),
    ] }, {
    cuisine: '中国人の料理人による四川風の担々麺と mapo tofu (20席)・担々麺は10種類ほど (2025年2月)、麺は細麺・中太麺・平打ち麺から選べる (2025年10月): 四川風の担々麺935円 (2025年2月)、白ごまの担々麺、Gold 担々麺、汁なしの担々麺・mapo noodles 990円、激辛は+100円 (2026年7月)・ランチは担々麺と mapo rice のセット、サラダとみかんの缶詰付き: AセットとBセット950円 (税別、2025年)、税込1045円 (2026年2月)、ハーフずつのCセット1000円以下 (2026年8月)・炒飯680円 (2025年4月)・夜のバーの料理: ピーナッツ揚げ、ザーサイ、yurinchi、ニラ玉、海老、あさり・ビール、日本酒、焼酎、ワイン、カクテル',
    neighborhood: '江之子島1-6-2 奥内第8ビル1F (麺LABO 唯奏と同じ住所)。阿波座駅10番出口 (千日前線) から徒歩1分、Utsubo Park の近く',
    gf_detail: 'グルテンフリーではありません。小麦の麺の担々麺の店。mapo rice や夜の料理もグルテンの説明なし。',
    vegan_detail: '実質ヴィーガンではありません。yurinchi、海老、あさりなどがあり、植物性の担々麺や mapo の記載なし。',
    notes: '[ラーメン・阿波座、Shoki の絵の下の四川担々麺] 阿波座駅から1分、オフィスビルの1階で目立つ看板の小さな中華バル。壁いっぱいの Shoki の絵は店主が描いたといい、料理人は中国語を話す。主役は担々麺で、10種類ほど、辛さは5段階、麺は細麺・中太麺・珍しい平打ち麺から。四川風の一杯は花椒のしびれと八角の香り、白ごまの一杯は酸味寄りでやさしい。普通の辛さでも汗だくになる人もいれば、中辛でも辛くないという人も。昼は会社員が並び、担々麺とさらに辛い mapo rice のセットが人気。料理はできた順に出てきて、最後にみかんの缶詰が少し。オープン以来の常連が2026年9月に味のぶれを感じたり、麺がのびていたという声もあるが、ご飯や杏仁豆腐をサービスして端数までまけてくれる店主の気前のよさにひかれる客も。',
  });
}

save();
