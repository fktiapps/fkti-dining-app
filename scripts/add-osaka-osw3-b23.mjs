// Osaka sweep (2-mile circle around Dotonbori), core leftovers — lane osw3 (Tabelog id mod 4 = 2), batch 23.
//   + 炭火焼肉CoCoRo 本店 (Sumibi Yakiniku CoCoRo: butcher-run charcoal yakiniku on Mitsudera-suji, open to 05:00)
//   + PANAF' African Restaurant & Club (the Expo African restaurant, now a buffet with live music in Amerikamura)
//   + 大和屋本店 (Yamatoya Honten: seasonal kaiseki in private rooms by the Dotonbori River at Nipponbashi)
//   + Osteria Pantera (Shinsaibashi osteria with fresh pasta, focaccia and wine, open from morning)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next core 200` (2026-11-02, after batch 22):
//   27050850, 27154542, 27008618, 27151410 (last two digits 50, 42, 18, 10: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Group checks: CoCoRo — this main shop and a Europe-dori shop (Tabelog; March–April 2026 reviews), none in data; small
//   group. PANAF, Yamatoya Honten and Pantera — no other shops found.
//   Stacked pins: none within 6 m of these four (checked against data/osaka.json).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 炭火焼肉CoCoRo 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27050850/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '05:00']);
  put({
    id: 'osaka_sumibi_yakiniku_cocoro_honten', name: '炭火焼肉CoCoRo 本店 (Sumibi Yakiniku CoCoRo Honten)', category: 'OMNI',
    lat: 34.670346, lng: 135.50512, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Green-onion salted tongue and other salted cuts are the plainest; the ponzu, tare, cold noodles and the tamago-kake-gohan with seasonings are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant, though Tabelog lists vegetarian options and grilled shiitake appears in reviews (September 2026).',
    hours_raw: 'Daily 17:30–05:00 (last orders food 04:15, drinks 04:30); open all year (Tabelog). Reservations; pairs may be seated at the counter; two hours when busy; changes on the day by phone only (Tabelog). Courses with two-hour all-you-can-drink: Ume (10 dishes) ¥5,800, Matsu (12) ¥6,300, Takumi (14) ¥6,800, before tax (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 25 seats with a counter facing the open kitchen; smoking allowed; free Wi-Fi; wheelchair accessible (Tabelog). A monthly limited menu (March 2026). Children\'s dishes and cups on request (October 2026). Opened 3 December 2009 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-3-9, 喜多原ビル 1F, on Mitsudera-suji — 5 min from Namba, Shinsaibashi and Nippombashi Stns',
    cuisine: 'Charcoal yakiniku from a butcher-run shop, with over 30 cuts and offal and over 40 sides (Tabelog) · the signature green-onion salted tongue, grilled on one side; "30-second" lean kalbi with grated daikon ponzu; Sendai-style salted tongue with nozawana; thinly sliced tsurami billed as Osaka\'s best (March–April 2026) · wagyu outside skirt, as yakiniku or as sashimi; tongue and outside skirt under ¥1,000 (March–September 2026) · a "yakiniku shop" tamago-kake-gohan with bonito flakes, green onion and salted kombu; refreshing cold noodles to finish; grilled shiitake (Tabelog; April–September 2026) · a monthly limited dish, celery in March 2026 · over 50 drinks; courses ¥5,800–¥6,800 with two hours of drinks (Tabelog)',
    website: null, gmaps: gm('炭火焼肉CoCoRo 本店 東心斎橋'), menu_url: null,
    notes: "[Yakiniku · Higashi-Shinsaibashi, butcher-run charcoal yakiniku until 5 am] A cosy, long-running yakiniku on Mitsudera-suji, open since 2009 from 17:30 to 5:00, with an open kitchen where the meat is cut in front of you and a counter where the owner shows solo diners how to grill. Order the green-onion salted tongue and the 30-second lean kalbi under grated-daikon ponzu, both grilled on one side, then thin tsurami, wagyu outside skirt and a tamago-kake-gohan, finishing with cold noodles. Regulars of ten years praise the warm, loud service and fair prices; it gets busy after midnight. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: a yakiniku restaurant directly run by a butcher shop, open until 5:00, with over 30 kinds of meat and offal; at the counter the owner teaches the best way to grill; the restroom is checked every hour; opened 3 December 2009. 2026 reviewers mention a sister shop on Europe-dori and a long-serving staff member.',
      philosophy: 'Carefully selected meat that will not upset your stomach, at a fair price (Tabelog).', specialty: 'Green-onion salted tongue; 30-second lean kalbi.',
      anecdotes: [
        { text: '"This is my favorite restaurant that I\'ve been visiting for over 10 years!" — October 2026, a first visit with the family, beef tongue.', source: R + 'B479561036/' },
        { text: '"I usually go to a restaurant on Europe Street, but I heard from the staff that the main branch is just around the corner on Mitterasu Street" — April 2026, green-onion salted tongue.', source: R + 'B527197935/' },
        { text: '"The cheerful shout from the staff when they bring the dishes is also part of the fun!!" — March 2026, the monthly celery special.', source: R + 'B524187298/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭火焼肉CoCoRo 本店 (スミビヤキニクココロ)、焼肉・ホルモン・韓国料理、東心斎橋2-3-9 喜多原ビル 1F、Namba・Shinsaibashi・Nippombashi 駅から徒歩5分、毎日17:30〜5:00 (L.O.料理4:15・ドリンク4:30)、年中無休、予約可 (2名はカウンターのことも)、混雑時は2時間、2時間飲み放題つきのコース (梅10品5,800円・松12品6,300円・匠14品6,800円、税抜)、カード・PayPay可、電子マネー不可、25席、喫煙可、無料Wi-Fi、車椅子可、ベジタリアンメニュー、2009年12月3日オープン、精肉店直営、30種以上の肉とホルモン、40種以上のサイド、50種以上のドリンク、カウンターで店主が焼き方を教える、トイレは1時間ごとに点検。口コミ(2026年3月〜10月): ネギ塩タン、大根おろしポン酢の30秒カルビ、野沢菜の仙台風塩タン、薄切りのツラミ、和牛外ハラミ、ハラミ刺し、焼肉屋の卵かけご飯、冷麺、椎茸、月替わりの限定 (3月はセロリ)、ヨーロッパ通りに姉妹店、子ども用の食器、元気な接客。',
      confidence: 'medium', sources: [TB, R + 'B479561036/', R + 'B523614978/', R + 'B523914095/', R + 'B524081072/', R + 'B524187298/', R + 'B524918951/', R + 'B525320438/', R + 'B525427568/', R + 'B527197935/', R + 'B528762232/', R + 'B535202766/', R + 'B536385976/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Welcoming to overseas guests (October 2026); staff explain the cuts (March 2026). No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-3-9 喜多原ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目3番9号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (read November 2026), before tax.', last_checked: TODAY, items: [
      it('', 'Ume', 'Ume course, 10 dishes, two-hour all-you-can-drink', '¥5,800', 'Courses', 'ask', 'no', 'Tabelog; before tax.', 'ume'),
      it('', 'Matsu', 'Matsu course, 12 dishes, two-hour all-you-can-drink', '¥6,300', 'Courses', 'ask', 'no', 'Tabelog; before tax.', 'matsu'),
      it('', 'Takumi', 'Takumi course, 14 dishes, two-hour all-you-can-drink', '¥6,800', 'Courses', 'ask', 'no', 'Tabelog; before tax.', 'takumi'),
      it('', '', 'Green-onion salted tongue', '', 'Beef', 'ask', 'no', '2026 reviews.', 'negi_shio_tan'),
      it('', '', '30-second lean kalbi with grated daikon ponzu', '', 'Beef', 'ask', 'no', 'March 2026.', 'kalbi30'),
    ] }, {
    cuisine: '精肉店直営の炭火焼肉で、30種以上の肉とホルモン、40種以上のサイド (食べログ)・看板のネギ塩タンは片面だけ焼く。大根おろしポン酢の「30秒」赤身カルビ、野沢菜をのせた仙台風の塩タン、大阪一をうたう薄切りのツラミ (2026年3〜4月)・和牛の外ハラミは焼きでも刺しでも。タンと外ハラミは1,000円以下 (2026年3〜9月)・鰹節、ねぎ、塩昆布の「焼肉屋の卵かけご飯」、締めのさっぱりした冷麺、焼き椎茸 (食べログ、2026年4〜9月)・月替わりの限定、2026年3月はセロリ・50種以上のドリンク、2時間飲み放題つきのコース5,800〜6,800円 (食べログ)',
    neighborhood: '東心斎橋2-3-9 喜多原ビル 1F、Mitsudera-suji 沿い。Namba・Shinsaibashi・Nippombashi 駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ネギ塩タンなど塩の肉がいちばんシンプル。ポン酢、タレ、冷麺、味つけした卵かけご飯の中身は書かれていない。',
    vegan_detail: 'ヴィーガンではありません。焼肉店で、食べログにはベジタリアンメニューの記載があり、口コミには焼き椎茸も (2026年9月)。',
    notes: '[焼肉・東心斎橋、朝5時までの精肉店直営の炭火焼肉] 三津寺筋の小さな老舗の焼肉店で、2009年から17時30分から朝5時まで。オープンキッチンで目の前で肉を切り、カウンターでは店主が1人客に焼き方を教えてくれる。頼むならネギ塩タンと大根おろしポン酢の30秒カルビ、どちらも片面焼き、続いて薄切りのツラミ、和牛の外ハラミ、卵かけご飯、締めに冷麺。10年通う常連は温かくにぎやかな接客と手頃な値段をほめる。深夜過ぎは混む。喫煙可。',
  });
}

// ================================================================ PANAF' African Restaurant & Club
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27154542/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '23:00']); const FS = day(['11:00', '05:00']);
  put({
    id: 'osaka_panaf_african_restaurant_club', name: "PANAF' African Restaurant & Club", category: 'OMNI',
    lat: 34.672288, lng: 135.498763, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog says allergy information is available. Rice dishes, stews and grilled meats are the places to ask; fried shrimp in kataifi, fritters, bread and pita are wheat-based.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options, but the buffet is centred on meat stews, kebabs and fried seafood and the dishes are not labelled in reviews.',
    hours_raw: 'Sun–Thu and holidays 11:00–23:00 (last orders food 22:00, drinks 22:30); Fri and Sat 11:00–22:30 and then as a club from 22:30 to 05:00; closed over the New Year (Tabelog). Buffet from 2 October 2026: lunch 11:00–15:00, ¥2,000 for 90 minutes (¥2,500 with soft drinks); dinner ¥3,800 for 120 minutes (with soft drinks ¥4,500, alcohol ¥5,500, craft beer ¥6,500); an African beer-garden course on the terrace ¥5,000 (Tabelog). Live music every day, from about 20:00 (Tabelog; October 2026). Reservations (Tabelog); the entry queue can be slow (October 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR including Alipay and WeChat Pay (Tabelog). 200 seats with sofas, a counter and a terrace; non-smoking; wheelchair accessible; English menu and English-speaking staff; kids menu (Tabelog). Opened 24 March 2026 (Tabelog).',
    hours: { 0: A, 1: A, 2: A, 3: A, 4: FS, 5: FS, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-6-14, BIG STEP 7F, in Amerikamura — 3 min from exit 8 of Shinsaibashi Stn and exit 5 of Yotsubashi Stn',
    cuisine: 'African buffet with dishes that were popular at the Osaka Expo (Tabelog) · Kenyan kebab, spiced sausage, chebu jen-style rice of beef and vegetables, tagine, mafe (a beef stew rich with peanut butter), a tomato stew of beans and meat, chicken-and-lamb meatballs, pilaf with chunks of meat, rice with raisins, starch balls (October 2026) · fried shrimp wrapped in kataifi, fish fritters, kara-age, salads and bread (October 2026) · a yogurt dessert with grain at the bottom (October 2026) · original juices from African ingredients such as baobab and bissap, African beers and craft beer (Tabelog; October 2026)',
    website: 'https://panaf.jp/', gmaps: gm("PANAF' African Restaurant & Club 心斎橋"), menu_url: null,
    notes: "[African · Amerikamura, the Expo's African restaurant, now a buffet with live music] The African restaurant that drew crowds at the 2025 Osaka Expo, reopened on the 7th floor of Big Step in Amerikamura and since October 2026 a buffet: ¥2,000 at lunch, ¥3,800 at dinner, with a terrace and live African music every night. Try the peanut-rich mafe stew, Kenyan kebab, kataifi shrimp and the rice dishes, and a baobab or bissap juice. Diners in 2026 found it great value and fun; some found the entry queue disorganised, the soups sour or the popular dishes gone at peak times. On Friday and Saturday nights it turns into a club until 5:00.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: an African buffet restaurant with live performances, blending traditional African culture with contemporary flavours, with dishes that were a hit at the Expo; buffet from 2 October 2026; opened 24 March 2026. October 2026 reviewers describe it as the African restaurant from the Osaka Kansai Expo.',
      philosophy: 'Refined African dishes that break the stereotype of Africa (Tabelog).', specialty: 'African buffet; baobab juice.',
      anecdotes: [
        { text: '"I especially loved the Mafe, a rich beef stew made with peanut butter, which had a wonderful buttery aroma." — October 2026, buffet with craft beer ¥6,500.', source: R + 'B537037644/' },
        { text: '"The performers shared stories about their country\'s culture." — October 2026, the ¥2,500 lunch with drinks.', source: R + 'B537634615/' },
        { text: '"There was a long line at the reception. It felt more like the operation was not well organized rather than a shortage of staff." — October 2026, Saturday lunch.', source: R + 'B537692242/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): PANAF\' African Restaurant & Club、アフリカ料理・ビュッフェ・ダイニングバー、西心斎橋1-6-14 BIG STEP 7F、Shinsaibashi 駅8番出口・Yotsubashi 駅5番出口から徒歩3分、日〜木・祝 11:00〜23:00、金土 11:00〜22:30・22:30〜5:00、年末年始休み、10月2日からビュッフェ (ランチ2,000円90分、ソフトドリンク飲み放題つき2,500円、ディナー3,800円120分、ソフトドリンク4,500円・アルコール5,500円・クラフトビール6,500円)、テラスのビアガーデンコース5,000円、毎日ライブ、カード・電子マネー・QR可、200席、テラス、禁煙、車椅子可、英語メニューと英語を話すスタッフ、アレルギー表示、ヴィーガン・ベジタリアンメニュー、キッズメニュー、2026年3月24日オープン、万博で人気の料理。口コミ(2026年10月): ケニアのケバブ、チェブジェン風の牛と野菜のご飯、タジン、ピーナッツバターの牛シチューのマフェ、豆と肉のトマト煮、ミートボール、カダイフ巻きのエビフライ、魚のフリット、唐揚げ、ヨーグルトのデザート、バオバブやビサップのジュース、受付の行列、スープが酸っぱい、料理がなくなるという声も。',
      confidence: 'medium', sources: ['https://panaf.jp/', TB, R + 'B526018835/', R + 'B536651394/', R + 'B536658845/', R + 'B536733671/', R + 'B537037644/', R + 'B537148382/', R + 'B537176774/', R + 'B537249754/', R + 'B537333479/', R + 'B537634615/', R + 'B537692242/', R + 'B538422887/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-6-14 BIG STEP 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with the October 2026 buffet; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目6番14号 (go) 36m (BIG STEP building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [TB],
    price_note: 'Buffet prices from Tabelog (from 2 October 2026), tax included.', last_checked: TODAY, items: [
      it('', '', 'Lunch African buffet, 90 minutes', '¥2,000', 'Buffet', 'ask', 'ask', 'Tabelog; ¥2,500 with soft drinks.', 'lunch_buffet'),
      it('', '', 'Dinner African buffet, 120 minutes', '¥3,800', 'Buffet', 'ask', 'ask', 'Tabelog; with drinks ¥4,500–¥6,500.', 'dinner_buffet'),
      it('', '', 'African beer-garden course on the terrace', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog.', 'beer_garden'),
    ] }, {
    cuisine: '大阪・関西万博で人気だった料理のアフリカ料理のビュッフェ (食べログ)・ケニアのケバブ、スパイスのソーセージ、牛と野菜のチェブジェン風のご飯、タジン、ピーナッツバターのこくがある牛シチューのマフェ、豆と肉のトマト煮、鶏とラムのミートボール、肉の塊のピラフ、レーズンのご飯、でんぷんの団子 (2026年10月)・カダイフ巻きのエビフライ、魚のフリット、唐揚げ、サラダ、パン (2026年10月)・底に穀物の入ったヨーグルトのデザート (2026年10月)・バオバブやビサップなどアフリカの素材のオリジナルジュース、アフリカのビール、クラフトビール (食べログ、2026年10月)',
    neighborhood: '西心斎橋1-6-14 BIG STEP 7F、アメリカ村。Shinsaibashi 駅8番出口・Yotsubashi 駅5番出口から徒歩3分',
    gf_detail: '要確認。食べログによるとアレルギー表示あり。ご飯もの、シチュー、焼いた肉から確認を。カダイフのエビフライ、フリット、パン、ピタは小麦。',
    vegan_detail: '要確認。食べログにヴィーガン・ベジタリアンメニューの記載があるが、ビュッフェは肉のシチュー、ケバブ、海鮮の揚げ物が中心で、口コミでは表示について書かれていない。',
    notes: '[アフリカ料理・アメリカ村、万博のアフリカ料理店がライブつきのビュッフェに] 2025年の大阪・関西万博でにぎわったアフリカ料理店が、アメリカ村の BIG STEP 7階で再開し、2026年10月からビュッフェに。昼2,000円、夜3,800円で、テラスがあり毎晩アフリカ音楽のライブ。ピーナッツの濃いマフェ、ケニアのケバブ、カダイフのエビ、ご飯ものを、バオバブやビサップのジュースと。2026年の口コミではお得で楽しいという声が多く、受付の行列がまとまっていない、スープが酸っぱい、混む時間は人気の料理がなくなるという声も。金土の夜は朝5時までクラブに。',
  });
}

// ================================================================ 大和屋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27008618/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.yamatoyahonten.co.jp/';
  const H = day(['11:00', '16:30'], ['17:00', '21:30']);
  put({
    id: 'osaka_yamatoya_honten_shimanouchi', name: '大和屋本店 (Yamatoya Honten)', category: 'OMNI',
    lat: 34.669214, lng: 135.506492, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi is the plainest; fugu kara-age, sukiyaki and the sauces are wheat or soy based. The shop takes requests for children\'s meals (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, fugu, kue, Kobe beef and Ise lobster kaiseki.',
    hours_raw: 'Daily lunch 11:00–16:30 (last lunch order 14:00) and dinner 17:00–21:30 (last order 20:00); open all year (Tabelog). Reservations; groups of 15–16 or more by phone; rooms for two hours (Tabelog). Kaiseki courses: Umai kaiseki ¥6,600, Ookini course ¥7,700, Tenkomori with fugu, Kobe beef and Ise lobster ¥13,200 (Tabelog). BYO drinks allowed; children\'s lunch sets and meals on request (Tabelog). Fully private rooms for 2 to 100; smoking only in a separate area (Tabelog). Menus in English, Traditional and Simplified Chinese and Korean, and staff who speak them (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimanouchi 2-17-4, by the Dotonbori River across Nipponbashi bridge — 3 min from exit 6 of Nippombashi Stn',
    cuisine: 'Seasonal Kansai kaiseki in private rooms: Kobe beef in spring, sweetfish and conger eel in summer, and more by season (Tabelog) · courses: Umai kaiseki of thin-sliced sea bream and a small wagyu sukiyaki hot pot ¥6,600; Ookini with Kobe beef aburi sushi ¥7,700; Tenkomori with fugu, Kobe beef and Ise lobster on a boat platter ¥13,200 (Tabelog) · kue hot-pot kaiseki with zosui (December 2024–2025); hamo kaiseki ¥8,800 (October 2025); Kobe beef kaiseki; fugu courses of sashimi, kara-age and teppanyaki (January 2026) · sashimi platters of tuna, sea bream and flounder; flounder baked in paper (June 2026)',
    website: SITE, gmaps: gm('大和屋本店 島之内'), menu_url: null,
    notes: "[Kaiseki · Shimanouchi, seasonal Kansai kaiseki by the Dotonbori River] A large Japanese restaurant (and inn) on the Dotonbori River just across Nipponbashi, with fully private rooms for anything from two to a hundred guests, popular for company trips and New Year parties. Courses follow the season: kue hot pot in winter, hamo in summer, Kobe beef, fugu, and a ¥13,200 boat-platter feast of fugu, Kobe beef and Ise lobster. Diners praise the sashimi and the private rooms; several found the service rushed or ordinary for the setting, and one found the abalone disappointing (July 2026). Menus in four languages; lunch and dinner daily.",
    chef_bio: { chef_name: null, roles: ['Kitchen and staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: by the Dotonbori River, serving seasonal dishes from carefully selected ingredients so guests can taste Kansai\'s "shun"; rooms for groups of 2 to 100. An April 2026 reviewer describes staying at Yamatoya as a ryokan with a public bath; June 2026 reviewers came on a company trip.',
      philosophy: 'The seasonal flavours of Kansai (Tabelog).', specialty: 'Seasonal kaiseki; fugu and kue hot pots.',
      anecdotes: [
        { text: '"I was particularly impressed by the Kue hot pot, which had a superb broth and wonderfully tender texture." — December 2024, the kue kaiseki at lunch.', source: R + 'B498341430/' },
        { text: '"The MVP was the flounder wrapped in paper." — June 2026, a company trip.', source: R + 'B529618032/' },
        { text: '"We also had abalone, but it tasted more like tokobushi." — July 2026, a company-trip dinner.', source: R + 'B531904632/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 大和屋本店 (やまとやほんてん)、日本料理・ふぐ・かに、島之内2-17-4、Nippombashi 駅6番出口から徒歩3分、道頓堀川沿い、毎日11:00〜16:30 (昼の L.O.14:00)・17:00〜21:30 (L.O.20:00)、年中無休、予約可 (15名以上は電話)、個室は2時間、旨い会席6,600円 (鯛の薄造り、和牛すき焼きの小鍋)、おおきにコース7,700円 (神戸牛の炙り寿司)、天こ盛り13,200円 (ふぐ、神戸牛、伊勢海老)、2〜100名の完全個室、分煙、持ち込み可、子ども向けのランチセット、英語・中国語 (繁体字・簡体字)・韓国語のメニューとスタッフ、関西の旬、春は神戸牛、夏は鮎と鱧。口コミ(2024年12月〜2026年7月): クエ鍋の会席と雑炊、鱧会席8,800円、神戸牛の会席、ふぐのコース (刺身、唐揚げ、鉄板焼き)、刺身の盛り合わせ、カレイの紙包み焼き、旅館としての滞在、社員旅行、接客が慌ただしい・普通、アワビがトコブシのようだったという声も。',
      confidence: 'medium', sources: [SITE, TB, R + 'B498341430/', R + 'B501860383/', R + 'B511838657/', R + 'B513132564/', R + 'B515025206/', R + 'B517155641/', R + 'B520391237/', R + 'B520993821/', R + 'B525802996/', R + 'B529618032/', R + 'B529669084/', R + 'B531904632/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese (traditional and simplified) and Korean, with staff who speak them (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内2-17-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内二丁目17番4号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (read November 2026), tax included.', last_checked: TODAY, items: [
      it('', 'Umai kaiseki', 'Umai kaiseki (13 dishes, sea bream usuzukuri, wagyu sukiyaki)', '¥6,600', 'Courses', 'ask', 'no', 'Tabelog.', 'umai'),
      it('', 'Ookini', 'Ookini course (15 dishes, Kobe beef aburi sushi)', '¥7,700', 'Courses', 'ask', 'no', 'Tabelog.', 'ookini'),
      it('', 'Tenkomori', 'Tenkomori (16 dishes: fugu, Kobe beef, Ise lobster)', '¥13,200', 'Courses', 'ask', 'no', 'Tabelog.', 'tenkomori'),
      it('', '', 'Hamo kaiseki', '¥8,800', 'Courses', 'ask', 'no', 'October 2025.', 'hamo'),
    ] }, {
    cuisine: '個室で味わう季節の関西の会席: 春は神戸牛、夏は鮎と鱧など季節ごとに (食べログ)・コース: 鯛の薄造りと和牛すき焼きの小鍋の旨い会席6,600円、神戸牛の炙り寿司のおおきにコース7,700円、ふぐ、神戸牛、伊勢海老の舟盛りの天こ盛り13,200円 (食べログ)・クエ鍋の会席と雑炊 (2024年12月〜2025年)、鱧会席8,800円 (2025年10月)、神戸牛の会席、刺身、唐揚げ、鉄板焼きのふぐのコース (2026年1月)・マグロ、鯛、ヒラメの刺身の盛り合わせ、カレイの紙包み焼き (2026年6月)',
    neighborhood: '島之内2-17-4、日本橋を渡った道頓堀川沿い。Nippombashi 駅6番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。刺身がいちばんシンプル。ふぐの唐揚げ、すき焼き、タレは小麦や醤油を使う。子ども向けの料理は要望に応じる (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。魚、ふぐ、クエ、神戸牛、伊勢海老の会席。',
    notes: '[会席・島之内、道頓堀川沿いの季節の関西会席] 日本橋を渡ってすぐ、道頓堀川沿いの大きな日本料理店 (宿も) で、2人から100人まで使える完全個室があり、社員旅行や新年会に人気。コースは季節に合わせ、冬はクエ鍋、夏は鱧、神戸牛やふぐ、ふぐ、神戸牛、伊勢海老の舟盛りの13,200円の宴も。刺身と個室の評判がよく、接客が慌ただしい、場所のわりに普通、アワビが期待外れ (2026年7月) という声も。メニューは4か国語。昼と夜、毎日。',
  });
}

// ================================================================ Osteria Pantera
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27151410/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://osteria-pantera.com/';
  const H = day(['10:30', '23:30']);
  put({
    id: 'osaka_osteria_pantera_shinsaibashi', name: 'Osteria Pantera', category: 'OMNI',
    lat: 34.673769, lng: 135.502192, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The fresh pasta, focaccia, pizza, lasagna and gratin are wheat-based; carpaccio, the fruit, prosciutto and burrata plate and the steak are where to ask.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options; the reviewed dishes are mostly cheese, seafood and meat.',
    hours_raw: 'Daily 10:30–23:30: lunch 10:30–15:00, dinner 15:00–23:30; irregular closures (Tabelog). October 2026 diners give 08:00–23:00 with breakfast coffee and focaccia sandwiches. Reservations; cancelled if unreachable 30 minutes after the time (Tabelog). Lunch course from ¥2,000 with fresh pasta and unlimited bread (Tabelog; October 2026); weekday short course ¥3,800, Pantera course ¥5,000, special course with domestic beef fillet ¥7,200 (Tabelog). Over 50 wines; a sommelier (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR including Alipay (Tabelog). 34 seats with sofas; non-smoking; free Wi-Fi and outlets; children and strollers welcome; English menu and English-speaking staff; takeaway (Tabelog). Tabelog gives the opening day as 3 October 2025; an October 2026 diner says it reopened on 26 September 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 1-3-10, 心斎橋井上ビル 1F, a minute from Daimaru Shinsaibashi — 1 min from exit 5 of Shinsaibashi Stn',
    cuisine: 'Osteria with chewy fresh pasta, freshly baked pizza and focaccia, meat dishes and wine (Tabelog) · focaccia with four cheeses and honey; honey-garlic toast; seasonal fruit (figs, Shine Muscat) with prosciutto and burrata ¥1,680; seared scallop carpaccio ¥1,280; sea-bream carpaccio; bruschetta (October 2026) · pastas: porcini cream, rich tomato cream with shrimp ¥2,300, arrabbiata, lasagna (October 2026) · shrimp and scallop gratin ¥2,000; shrimp and mushroom ajillo; potatoes with truffle salt; roast pork shoulder; domestic beef steak with porcini brown sauce ¥2,980 (October 2026) · affogato; over 50 wines; breakfast coffee and focaccia sandwiches (Tabelog; October 2026)',
    website: SITE, gmaps: gm('Osteria Pantera 心斎橋'), menu_url: null,
    notes: "[Italian · Shinsaibashi, an all-day osteria by Daimaru] A stylish osteria a minute from Daimaru Shinsaibashi, open from morning to late night, with fresh pasta at lunch and small plates and over 50 wines in the evening. Start with the four-cheese and honey focaccia and the fig, prosciutto and burrata plate, then a porcini or tomato-cream fresh pasta and the beef steak with porcini sauce. Lunch courses start at ¥2,000. Diners in October 2026, after it reopened, praised the food, the room and the help with surprise celebrations. English menu.",
    chef_bio: { chef_name: null, roles: ['Kitchen team and sommelier (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: fresh pasta at lunch and small plates and meat dishes with over 50 wines in the evening; courses for gatherings and dates; a sommelier. An October 2026 diner says it reopened on 26 September 2026 and now opens from 8:00 for breakfast.',
      philosophy: 'Casual Italian dining for grown-ups (Tabelog).', specialty: 'Fresh pasta; focaccia.',
      anecdotes: [
        { text: '"Osteria Pantera, an Italian restaurant in Shinsaibashi, has reopened on September 26th." — October 2026, gratin, carpaccio and steak.', source: R + 'B538296858/' },
        { text: '"The pasta had a unique texture that I haven\'t experienced elsewhere" — October 2026, arrabbiata.', source: R + 'B537972926/' },
        { text: '"They now offer a more affordable and casual lunch course, and it seems the menu has changed a bit since my last visit." — October 2026, pizza and fresh-pasta lunch.', source: R + 'B527938185/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Osteria Pantera、イタリアン・パスタ・創作料理、心斎橋筋1-3-10 心斎橋井上ビル 1F、Shinsaibashi 駅5番出口から徒歩1分、Nagahoribashi 駅7番出口から3分、毎日10:30〜23:30 (ランチ10:30〜15:00、ディナー15:00〜23:30)、不定休、予約可 (30分連絡がなければキャンセル)、生パスタのランチコース2,000円から、平日のショートコース3,800円、パンテーラコース5,000円、国産牛フィレのスペシャルコース7,200円、50種以上のワイン、ソムリエ、カード・電子マネー・QR可、34席、禁煙、Wi-Fi、電源、子ども・ベビーカー可、英語メニューと英語を話すスタッフ、ヴィーガン・ベジタリアンメニュー、テイクアウト、オープン日は2025年10月3日。口コミ(2026年10月): 9月26日にリニューアルオープン、朝8時から、4種のチーズとはちみつのフォカッチャ、季節の果物と生ハムとブッラータ1,680円、ホタテの炙りカルパッチョ1,280円、エビとホタテのグラタン2,000円、国産牛のステーキのポルチーニソース2,980円、エビのトマトクリーム2,300円、ポルチーニのクリーム、アラビアータ、ラザニア、トリュフ塩のポテト、アフォガート。',
      confidence: 'medium', sources: [SITE, TB, R + 'B515376004/', R + 'B527938185/', R + 'B530085041/', R + 'B536922094/', R + 'B537270944/', R + 'B537658717/', R + 'B537821138/', R + 'B537972926/', R + 'B538120455/', R + 'B538266170/', R + 'B538277860/', R + 'B538296858/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-3-10 心斎橋井上ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews after the September 2026 reopening.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目3番10号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538296858/', TB],
    price_note: 'Prices from an October 2026 review (after the reopening) and Tabelog courses (read November 2026).', last_checked: TODAY, items: [
      it('', '', 'Seasonal fruit, prosciutto and burrata', '¥1,680', 'Antipasti', 'ask', 'no', 'October 2026.', 'burrata'),
      it('', '', 'Seared scallop carpaccio', '¥1,280', 'Antipasti', 'ask', 'no', 'October 2026.', 'scallop_carpaccio'),
      it('', '', 'Rich tomato cream pasta with shrimp', '¥2,300', 'Pasta', 'no', 'no', 'October 2026.', 'tomato_cream'),
      it('', '', 'Domestic beef steak with porcini brown sauce', '¥2,980', 'Mains', 'ask', 'no', 'October 2026.', 'steak'),
      it('', '', 'Weekday short course', '¥3,800', 'Courses', 'no', 'no', 'Tabelog.', 'short_course'),
    ] }, {
    cuisine: 'もちもちの生パスタ、焼きたてのピザとフォカッチャ、肉料理とワインのオステリア (食べログ)・4種のチーズとはちみつのフォカッチャ、はちみつガーリックトースト、季節の果物 (いちじく、シャインマスカット) と生ハムとブッラータ1,680円、ホタテの炙りカルパッチョ1,280円、鯛のカルパッチョ、ブルスケッタ (2026年10月)・パスタ: ポルチーニのクリーム、エビの濃厚トマトクリーム2,300円、アラビアータ、ラザニア (2026年10月)・エビとホタテのグラタン2,000円、エビとキノコのアヒージョ、トリュフ塩のポテト、豚肩ロースのロースト、国産牛のステーキのポルチーニブラウンソース2,980円 (2026年10月)・アフォガート、50種以上のワイン、朝のコーヒーとフォカッチャサンド (食べログ、2026年10月)',
    neighborhood: '心斎橋筋1-3-10 心斎橋井上ビル 1F、Daimaru Shinsaibashi から1分。Shinsaibashi 駅5番出口から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。生パスタ、フォカッチャ、ピザ、ラザニア、グラタンは小麦。カルパッチョ、果物と生ハムとブッラータ、ステーキから確認を。',
    vegan_detail: '要確認。食べログにヴィーガン・ベジタリアンメニューの記載があるが、口コミの料理はチーズ、魚介、肉が中心。',
    notes: '[イタリアン・心斎橋、Daimaru そばの朝から夜までのオステリア] Daimaru Shinsaibashi から1分のおしゃれなオステリアで、朝から夜遅くまで。昼は生パスタ、夜は小皿料理と50種以上のワイン。4種のチーズとはちみつのフォカッチャ、いちじくと生ハムとブッラータから始めて、ポルチーニやトマトクリームの生パスタ、ポルチーニソースの牛ステーキへ。ランチのコースは2,000円から。2026年10月のリニューアル後の口コミでは料理、空間、サプライズのお祝いの手伝いが好評。英語メニューあり。',
  });
}

save();
