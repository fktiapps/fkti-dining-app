// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 11.
//   + 此処は堀江 ニルとコメ Koko wa Horie Niru to Kome (dog-friendly oden and clay-pot rice izakaya, Kitahorie, 2024)
//   + 朋友雑穀食府 Panyu Zakkoku Shokufu (Xi'an and Sichuan cooking, biang biang noodles, Shimanouchi, open to 2 a.m.)
//   + 寿司 なかご 別邸 Sushi Nakago Bettei (red-vinegar sushi with Kanazawa fish, Shinsaibashi, 2020)
//   + タワンタイ TAWANTHAI (Thai restaurant since 1999, Minami-Senba)
//   - skip 27123660 貝バル Baccanale: its Tabelog listing calls itself one of "our chain stores" (shrimp shabu-shabu "from our chain
//     stores"), with a group site at baccanale-bal.com/shinsaibashi/.
//   Lane: mod-4 = 0 ids in `queue.mjs osaka next notable 200` after batch 10: 27145928, 27013808, 27120364, 27123660 (skip),
//   27136664 (焼鳥 ぼんぞ 心斎橋店: "finally arrived in Shinsaibashi", other shops not found; left for a later batch), 27000924.
//   Chain check: Nakago has Sushi Nakago Shinsaibashi, Meat Kaiseki Kissaki (Tabelog remarks) and an Umeda shop (October 2026 review),
//   kept on the group-of-four precedent; Niru to Kome, Panyu and TAWANTHAI are single shops as far as the sources show. None is in
//   data/osaka.json (grep by name, romaji and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27123660', '貝バル Baccanale: the Tabelog listing presents a dish "from our chain stores"; group site baccanale-bal.com/shinsaibashi/; chain.');

// ================================================================ 此処は堀江 ニルとコメ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27145928/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_niru_to_kome_kitahorie', name: '此処は堀江 ニルとコメ (Koko wa Horie Niru to Kome)', category: 'OMNI',
    lat: 34.672817, lng: 135.491578, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Oden and clay-pot rice are cooked in a broth of chicken stock, bonito-kelp dashi, tomato and shiitake; lunches include fried horse mackerel and fried oysters.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden broth is chicken stock and bonito dashi, and the signature is a chicken-and-egg rice bowl.',
    hours_raw: 'Daily 11:30–15:00 (last order 14:30) and 17:00–23:00 (food last order 22:00, drinks 22:30); occasional closures for training, posted on Instagram (Tabelog). Reservations accepted; say if you bring a pet, with its size and number (Tabelog). Starter ¥418 at dinner, none at lunch (Tabelog). Cards, IC cards and other e-money, and QR payments including PayPay, Alipay and WeChat Pay (Tabelog). 23 seats: a 6-seat counter, six tables for 2 and one for 5; private hire up to 30; non-smoking (Tabelog). Small dogs and other pets welcome inside (Tabelog; 2026 reviews). Children welcome, and food for children under school age may be brought in (Tabelog). Menus in English, simplified Chinese and Korean, with photos (Tabelog). Opened 5 December 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 2-5-10, 2F of the イツキビル — 5 min from Nishi-Ohashi or Nishi-Nagahori Stn',
    cuisine: 'Oden and clay-pot rice, with cheap drinks (Tabelog) · oden in a broth of chicken stock, bonito-kelp dashi, tomato and shiitake, classic and creative: assorted five ¥1,078, "beautiful skin" oden ¥265 (September 2026) · clay-pot rice of chosen rice, cooked to order; the signature "oyakodon you must eat before you die", in a salt or soy version ¥2,398, with lemon to squeeze (September 2026) · small plates: cream cheese with black-bean honey as the starter ¥438, komatsuna and cream cheese with bonito soy ¥418, fresh kimchi with mizuna ¥528, taro kara-age ¥638, three obanzai ¥858, salt chicken wings ¥49 each (September 2026) · lunch: fried horse mackerel and fried oyster set ¥1,200 (August 2026), sweet shrimp chili (October 2026) · draft beer ¥219, mega mug ¥329, chuhai and highballs ¥329 (Tabelog)',
    website: null, gmaps: gm('ニルとコメ 北堀江'), menu_url: null,
    notes: "[Izakaya · Kitahorie, oden and clay-pot rice with your dog] A small second-floor izakaya in Kitahorie that welcomes dogs at the table, done up like a café with dried flowers, driftwood and a tiled counter. The cooking is oden in a broth of chicken stock, bonito-kelp dashi and tomato, and rice cooked to order in a clay pot; the dish to save room for is the oyakodon 'you must eat before you die', creamy egg over the pot rice, in salt or soy (¥2,398 in September 2026). Drinks are a bargain: draft beer ¥219, a mega mug ¥329, and salt chicken wings are ¥49 each. Lunch sets like fried horse mackerel and oysters run about ¥1,200. Diners in 2026 loved the staff, who even played 'wait' games with one guest's dog. English, Chinese and Korean menus.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a dog-friendly izakaya of clay-pot rice from carefully selected rice from professional growers, oden in a broth made in-house from chicken stock, bonito and kelp, tomatoes and shiitake, and very cheap drinks; opened 5 December 2024.', philosophy: null, specialty: 'Clay-pot oyakodon; oden.',
      anecdotes: [
        { text: '"The first dish served was a cute monaka (wafer) shaped like a dog, sitting adorably." — September 2026.', source: R + 'B535838505/' },
        { text: '"I was also surprised by the \'Umashio Teba (Delicious Salt Chicken Wings).\' At just JPY 49 each, they were incredibly affordable" — September 2026.', source: R + 'B536794806/' },
        { text: '"I even got to try the \'wait\' challenge." — September 2026, dinner with a dog.', source: R + 'B535796027/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 此処は堀江 ニルとコメ、居酒屋・おでん・釜飯、大阪市西区北堀江2-5-10 イツキビル 2F、西大橋駅・西長堀駅から徒歩5分、毎日11:30〜15:00 (L.O.14:30)・17:00〜23:00 (料理L.O.22:00)、研修などで臨時休業あり (Instagram)、予約可 (ペットは大きさと数を伝える)、お通し代418円 (税込、ランチはなし)、カード・電子マネー・QR 可、23席 (カウンター6、2人テーブル6、5人テーブル1)、貸切30名まで、禁煙、ペット可、子ども可、未就学児の食べ物の持ち込み可、英語・中国語 (簡体字)・韓国語のメニュー、写真つき、2024年12月5日オープン。店の紹介 (英訳): 土鍋で炊きたてのご飯、名物のおでん、鶏ガラ、かつお昆布、トマト、しいたけのだし、名物の親子丼、生ビール219円、メガジョッキ329円、チューハイとハイボール329円。口コミ(2026年8月〜10月): アジフライとカキフライの定食1,200円、お通しの黒豆はちみつクリームチーズ438円、小松菜とクリームチーズのかつお醤油418円、水菜の生キムチ528円、里芋の唐揚げ638円、おばんざい3種858円、おでん5種1,078円、Beautiful Skin Oden 265円、親子丼 (塩と醤油) 2,398円、Umashio Teba 1本49円、犬の形の最中、犬連れの客が多い、スタッフが親切。',
      confidence: 'medium', sources: [TB, R + 'B534712735/', R + 'B534891774/', R + 'B535191201/', R + 'B535221761/', R + 'B535383576/', R + 'B535796027/', R + 'B535838505/', R + 'B536794806/', R + 'B537335753/', R + 'B538181829/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, simplified Chinese and Korean, with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江2-5-10 イツキビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江二丁目5番10号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535221761/', R + 'B534712735/', TB],
    price_note: 'Prices from August–September 2026 reviews; drink prices from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Clay-pot oyakodon, salt or soy', '¥2,398', 'Clay-pot rice', 'ask', 'no', 'September 2026 review.', 'donabe_oyakodon'),
      it('', '', 'Oden, assorted five', '¥1,078', 'Oden', 'ask', 'no', 'September 2026 review.', 'oden_5'),
      it('', '', 'Salt chicken wing (each)', '¥49', 'Small plates', 'ask', 'no', 'September 2026 review.', 'umashio_teba'),
      it('', '', 'Fried horse mackerel and fried oyster set (lunch)', '¥1,200', 'Lunch', 'no', 'no', 'August 2026 review.', 'aji_kaki_fry'),
      it('', '', 'Draft beer (medium mug)', '¥219', 'Drinks', '', '', 'Tabelog listing.', 'draft_beer'),
    ] }, {
    cuisine: 'おでんと土鍋ご飯、安い飲み物 (食べログ)・鶏ガラ、かつお昆布、トマト、しいたけのだしのおでん、定番と創作: 5種盛り1,078円、Beautiful Skin Oden 265円 (2026年9月)・選んだお米を注文ごとに土鍋で炊く。名物の親子丼は塩か醤油で2,398円、レモンをしぼって (2026年9月)・小皿: お通しの黒豆はちみつクリームチーズ438円、小松菜とクリームチーズのかつお醤油418円、水菜の生キムチ528円、里芋の唐揚げ638円、おばんざい3種858円、Umashio Teba 1本49円 (2026年9月)・ランチ: アジフライとカキフライの定食1,200円 (2026年8月)、エビのチリソース (2026年10月)・生ビール219円、メガジョッキ329円、チューハイとハイボール329円 (食べログ)',
    neighborhood: '北堀江2-5-10、イツキビルの2階。西大橋駅、西長堀駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。おでんと土鍋ご飯は鶏ガラ、かつお昆布、トマト、しいたけのだしで、ランチにはアジフライやカキフライも。',
    vegan_detail: 'ヴィーガンではありません。おでんのだしは鶏ガラとかつおで、名物は鶏と卵の親子丼。',
    notes: '[居酒屋・北堀江、犬と一緒におでんと土鍋ご飯] 北堀江の2階の小さな居酒屋で、犬を連れて席に着ける。ドライフラワー、流木、タイルのカウンターでカフェのような内装。料理は鶏ガラ、かつお昆布、トマトのだしのおでんと、注文ごとに土鍋で炊くご飯。取っておきたいのは名物の親子丼で、とろとろの卵を土鍋のご飯にのせ、塩か醤油で (2026年9月は2,398円)。飲み物は激安で、生ビール219円、メガジョッキ329円、Umashio Teba は1本49円。ランチはアジフライとカキフライなどの定食が1,200円ほど。2026年の口コミではスタッフが好評で、客の犬と「待て」で遊んでくれたという人も。英語、中国語、韓国語のメニューあり。',
  });
}

// ================================================================ 朋友雑穀食府
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013808/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '02:00']);
  put({
    id: 'osaka_panyu_zakkoku_shokufu_shimanouchi', name: '朋友雑穀食府 (Panyu Zakkoku Shokufu)', category: 'OMNI',
    lat: 34.671178, lng: 135.509488, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the signature biang biang noodles are wide wheat noodles, alongside dumplings, spring rolls and soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: lamb skewers, fish, pork and chicken in Xi\'an and Sichuan dishes.',
    hours_raw: 'Daily 11:00–02:00 (food last order 01:30, drinks 02:00) (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 33 seats at tables, private and semi-private rooms for 4 to 20; private hire for 20–50; smoking allowed (Tabelog). Touch-panel ordering (August 2025). Menus in English, simplified Chinese and Korean with photos; English- and Chinese-speaking staff (Tabelog). Takeaway and delivery (Tabelog; January 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimanouchi 2-6-16, 1F of the 第２右田ビル — 6 min from Nagahoribashi Stn (Sakaisuji Line)',
    cuisine: 'Chinese tavern of Xi\'an and Sichuan cooking, grilled fish, skewers and hot pot (Tabelog) · Xi\'an biang biang noodles, said to be the longest in Japan, pulled by noodle chefs; spicy or not, in a bowl about 50 cm across (Tabelog; July–October 2026) · tomato and egg noodles; other noodle dishes can be made with biang biang noodles (2026 reviews) · dim sum and dishes with spices from the owner\'s home province, Sichuan, numbing and hot (Tabelog) · spicy poached white fish, lamb skewers, spring rolls, hot-and-sour soup dumplings, stir-fried pork lunch with a drink (2026 reviews) · frogs and crayfish on the menu (August 2026) · banquet course of 14 dishes with all-you-can-drink ¥5,000 Mon–Thu, ¥5,300 Fri–Sun, 25% off with a coupon (Tabelog); all-you-can-drink alone ¥1,650 (October 2025) · Qingdao and Harbin beer',
    website: null, gmaps: gm('朋友雑穀食府 島之内'), menu_url: null,
    notes: "[Chinese · Shimanouchi, biang biang noodles until 2 a.m.] A Chinese tavern on Shimanouchi's street of Chinese and Korean restaurants, open from 11 a.m. to 2 a.m., built around Xi'an's biang biang noodles, a single long, wide, chewy noodle the shop calls the longest in Japan, served in a bowl about 50 cm across, spicy or mild. The owner is from Sichuan, so the rest of the menu runs to numbing, spicy dishes: poached white fish in chili, lamb skewers, hot-and-sour dumplings, and frogs and crayfish for the curious. Terracotta-warrior figures stand in the room. Diners who know China call it authentic; the spice is strong for some. Banquet courses with all-you-can-drink are ¥5,000–5,300, cheaper with a coupon. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner from Sichuan (unnamed; Tabelog)', 'Noodle chefs (unnamed)'], origin: 'Sichuan, China (the owner, per Tabelog)', background: 'Shop-maintained Tabelog listing: a Chinese tavern of Xi\'an and Sichuan cooking; biang biang noodles "rumored to be the longest in Japan", made by skilled noodle chefs; spices and herbs from the owner\'s hometown in Sichuan; many TV and media features. An August 2025 diner noted the staff were from abroad but understood Japanese; an August 2026 diner noticed terracotta-warrior figures in the room.', philosophy: null, specialty: 'Biang biang noodles; spicy poached fish.',
      anecdotes: [
        { text: '"The Biang Biang noodles are quite substantial. The bowl is about 50 cm in diameter" — October 2026, a weekend afternoon.', source: R + 'B537465834/' },
        { text: '"Each bowl of Biang Biang Noodles contains only one type of noodle! Haha. Some parts are as soft as wontons, while others are similar to udon!" — July 2026.', source: R + 'B531870404/' },
        { text: '"... thrilled to see the Terracotta Warriors displayed here." — August 2026, a second visit with a parent who loves the history of Xi\'an.', source: R + 'B522015099/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 朋友雑穀食府 (パンユウザッコクショクフ)、中華・飲茶・串焼き、大阪市中央区島之内2-6-16 第２右田ビル １Ｆ、長堀橋駅から徒歩6分、毎日11:00〜翌2:00 (料理L.O.1:30)、予約可、カード・PayPay 可、33席 (テーブル)、4〜20名の個室と半個室、貸切20〜50名、喫煙可、英語・中国語・韓国語のメニュー、英語と中国語のスタッフ、写真つきメニュー、テイクアウト。店の紹介 (英訳): 西安と四川の料理、焼き魚、串、鍋の中国居酒屋、日本一長いといわれる西安のbiang biang の麺、オーナーの故郷の四川の香辛料と薬味、麻と辣、テレビなどで紹介、飲み放題つき14品の宴会コース (月〜木5,000円、金〜日5,300円、クーポンで25%引き)。口コミ(2025年8月〜2026年10月): biang biang の麺 (辛いのと辛くないの)、トマトと卵の麺、直径50cmほどの器、白身魚の激辛煮、羊肉の串、春巻、酸辣湯の餃子、豚肉の炒め物のランチ、カエルとザリガニ、terracotta warrior の飾り、本場の味、香辛料が強い、飲み放題1,650円、デリバリーの配達員が多い。',
      confidence: 'medium', sources: [TB, R + 'B309752713/', R + 'B515233836/', R + 'B515292414/', R + 'B517891840/', R + 'B520475999/', R + 'B522015099/', R + 'B528977562/', R + 'B531870404/', R + 'B535556231/', R + 'B537465834/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English- and Chinese-speaking staff (Tabelog); touch-panel ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内2-6-16 第２右田ビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内二丁目6番16号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B515233836/'],
    price_note: 'Banquet prices from the Tabelog listing; other dishes from 2025–26 reviews without prices.', last_checked: TODAY, items: [
      it('', '', 'Biang biang noodles (spicy or mild)', '', 'Noodles', 'no', 'ask', '2025–26 reviews.', 'biangbiang'),
      it('', '', 'Spicy poached white fish', '', 'Dishes', 'ask', 'no', 'August 2026 review.', 'shuizhu_fish'),
      it('', '', 'Banquet course, 14 dishes with all-you-can-drink (Mon–Thu)', '¥5,000', 'Courses', 'no', 'no', 'Tabelog listing; ¥5,300 Fri–Sun.', 'banquet_course'),
    ] }, {
    cuisine: '西安と四川の料理、焼き魚、串、鍋の中国の居酒屋 (食べログ)・日本一長いといわれる西安のbiang biang の麺を麺職人が手打ちで、辛いのと辛くないの、直径50cmほどの器で (食べログ、2026年7月〜10月)・トマトと卵の麺。ほかの麺料理もbiang biang の麺にできる (2026年の口コミ)・オーナーの故郷の四川の香辛料を使う点心と料理、しびれる辛さ (食べログ)・白身魚の激辛煮、羊肉の串、春巻、酸辣湯の餃子、ドリンクつきの豚肉炒めのランチ (2026年の口コミ)・カエルやザリガニも (2026年8月)・飲み放題つき14品の宴会コース、月〜木5,000円、金〜日5,300円、クーポンで25%引き (食べログ)。飲み放題だけなら1,650円 (2025年10月)・Qingdao と Harbin のビール',
    neighborhood: '島之内2-6-16、第２右田ビルの1階。長堀橋駅 (堺筋線) から徒歩6分',
    gf_detail: 'グルテンフリーではありません。名物のbiang biang の麺は小麦の幅広の麺で、餃子、春巻、醤油ベースのたれも。',
    vegan_detail: 'ヴィーガンではありません。羊肉の串、魚、豚、鶏の西安と四川の料理。',
    notes: '[中華・島之内、夜2時までbiang biang の麺] 島之内の中華と韓国料理の通りにある中国の居酒屋で、朝11時から夜2時まで。主役は西安のbiang biang の麺で、店が日本一長いという1本の幅広でもちもちの麺を、直径50cmほどの器で、辛いのか辛くないので。オーナーは四川の出身で、ほかのメニューはしびれて辛い料理が並ぶ: 白身魚の激辛煮、羊肉の串、酸辣湯の餃子、それにカエルやザリガニも。店内にはterracotta warrior の飾り。中国にくわしい人は本場の味といい、香辛料が強すぎるという人も。飲み放題つきの宴会コースは5,000〜5,300円で、クーポンで安くなる。喫煙可。',
  });
}

// ================================================================ 寿司 なかご 別邸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27120364/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_sushi_nakago_bettei_shinsaibashi', name: '寿司 なかご 別邸 (Sushi Nakago Bettei)', category: 'OMNI',
    lat: 34.674137, lng: 135.502325, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi with soy sauce, sesame-soy dressings and grilled dishes; a course included fried red-vinegar rice chips.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi and fish dishes, with miso soup.',
    hours_raw: 'Daily 12:00–15:00 (last order 14:30) and 17:00–22:30 (last order 21:30); closed over New Year (Tabelog). The lunch sign gives last entry 14:00 (September 2026). Reservations accepted (Tabelog). Starter ¥330 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and PayPay (Tabelog). 34 seats with a counter, sofa and pair seats and private rooms for 2, 4 and 6; private hire for 20–50; non-smoking; children and strollers welcome (Tabelog). Guests are asked not to wear strong perfume or fabric softener, and to take phone calls outside (Tabelog; September 2026). Opened 7 November 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-3-2, 1F of the SOPHIA NEXTビル — 3 min from Shinsaibashi Stn',
    cuisine: 'Red-vinegar sushi of fish from the Japan Sea, centred on Kanazawa and Hokuriku, "high quality at an affordable price", in a monochrome, modern Japanese room (Tabelog) · lunch omakase casual course ¥2,800: a small dish, the day\'s special, eight nigiri, red miso soup (September–October 2026) · autumn "Shinogi" course ¥7,800 in October 2026: isaki in sesame soy, tuna, chutoro, salted bonito tataki, squid, shima-aji, grilled oyster with butter and fried red-vinegar rice chips, grilled salmon, sawara, nameko miso soup, an eel hand roll · bonito carpaccio on the summer menu (September 2026) · sake, shochu and wine',
    website: null, gmaps: gm('寿司 なかご 別邸 心斎橋'), menu_url: null,
    notes: "[Sushi · Shinsaibashi, Japan Sea fish in a modern room] A sleek sushi bar of dark wood and metal three minutes from Shinsaibashi Station, part of the small Nakago group, serving red-vinegar sushi of fish from the Japan Sea around Kanazawa at prices meant for everyday use. Lunch is the deal: a ¥2,800 omakase of a small dish, the day's special, eight nigiri and red miso soup (October 2026). In the evening the autumn 'Shinogi' course (¥7,800) runs from isaki in sesame soy and two cuts of tuna to a butter-grilled oyster and an eel hand roll; sit at the counter to watch the chefs. Diners like the calm, date-worthy room; two in September–October 2026 felt rushed out at the end of a sitting. No strong perfume, please.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs at the counter (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: authentic sushi in a monochrome, modern Japanese designer space; concept "high-quality at an affordable price"; red-vinegar rice; fresh seafood from the Japan Sea centred on Kanazawa; sister shops Sushi Nakago Shinsaibashi and Meat Kaiseki Kissaki. Opened 7 November 2020. An October 2026 diner mentions a Nakago in Umeda.', philosophy: '"High quality at an affordable price" (Tabelog).', specialty: 'Lunch omakase; Shinogi course.',
      anecdotes: [
        { text: '"I chose the [Lunch Limited Omakase Course] for JPY 2,800. The course includes: Today\'s appetizer, Today\'s special dish, 8 pieces of nigiri, Soup" — October 2026.', source: R + 'B536970591/' },
        { text: '"First up was Isaki (grunter) dressed in sesame soy sauce. Next, I savored two pieces of tuna nigiri." — October 2026, the Shinogi course ¥7,800.', source: R + 'B538488756/' },
        { text: '"To maintain the ambiance, we were instructed to make phone calls outside." — September 2026.', source: R + 'B536472608/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 寿司 なかご 別邸、寿司・海鮮・居酒屋、大阪市中央区心斎橋筋1-3-2 SOPHIA NEXTビル 1F、心斎橋駅から徒歩3分、毎日12:00〜15:00 (L.O.14:30)・17:00〜22:30 (L.O.21:30)、年末年始休み、予約可、お通し330円 (税込)、カード・電子マネー・PayPay 可、34席、カウンター、ソファ席、カップルシート、2・4・6名の個室、貸切20〜50名、禁煙、子ども・ベビーカー可、香水や柔軟剤などの強い香りは控えて、2020年11月7日オープン、姉妹店は Sushi Nakago Shinsaibashi と Meat Kaiseki Kissaki。店の紹介 (英訳): モノクロの和モダンのデザイナーズ空間、「上質をリーズナブルに」、赤酢のシャリ、Kanazawa を中心にした日本海の鮮魚。口コミ(2026年9月〜10月): ランチ限定のおまかせカジュアルコース2,800円 (小鉢、本日の一品、にぎり8貫、赤だし)、秋の「Shinogi」コース7,800円 (isaki のごま醤油、マグロ、chutoro、かつおの塩たたき、イカ、shima aji、牡蠣のバター焼き、焼き鮭、sawara、nameko の赤だし、うなぎの手巻き)、夏のかつおのカルパッチョ、電話は店の外で、時間で急かされたという声、Umeda にも店。',
      confidence: 'medium', sources: [TB, R + 'B535437742/', R + 'B536472608/', R + 'B536615759/', R + 'B536815488/', R + 'B536970591/', R + 'B537453942/', R + 'B537603358/', R + 'B537985090/', R + 'B538324366/', R + 'B538488756/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses at lunch and dinner (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-3-2 SOPHIA NEXTビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目3番2号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536970591/', R + 'B537985090/'],
    price_note: 'Course prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase casual course (8 nigiri)', '¥2,800', 'Lunch', 'ask', 'no', 'September and October 2026 reviews.', 'lunch_omakase'),
      it('', '', 'Shinogi course (autumn)', '¥7,800', 'Dinner', 'ask', 'no', 'October 2026 reviews.', 'shinogi_course'),
    ] }, {
    cuisine: 'Kanazawa を中心にした日本海の魚の赤酢の寿司、「上質をリーズナブルに」、モノクロの和モダンな店で (食べログ)・ランチのおまかせカジュアルコース2,800円: 小鉢、本日の一品、にぎり8貫、赤だし (2026年9月〜10月)・2026年10月の秋の「Shinogi」コース7,800円: isaki のごま醤油、マグロ、chutoro、かつおの塩たたき、イカ、shima aji、牡蠣のバター焼きと赤酢のシャリのチップス、焼き鮭、sawara、nameko の赤だし、うなぎの手巻き・夏のメニューのかつおのカルパッチョ (2026年9月)・日本酒、焼酎、ワイン',
    neighborhood: '心斎橋筋1-3-2、SOPHIA NEXTビルの1階。心斎橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。醤油で食べる寿司、ごま醤油のあえ物、焼き物。コースには赤酢のシャリを揚げたチップスも。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚の料理、みそ汁も。',
    notes: '[寿司・心斎橋、日本海の魚のモダンな店] 心斎橋駅から3分、黒い木と金属のスマートな寿司の店で、なかごの小さなグループの店。Kanazawa 周辺の日本海の魚の赤酢の寿司を、ふだん使いできる値段で。お得なのはランチで、小鉢、本日の一品、にぎり8貫、赤だしのおまかせ2,800円 (2026年10月)。夜は秋の「Shinogi」コース (7,800円) で、isaki のごま醤油、2種のマグロから、牡蠣のバター焼き、うなぎの手巻きまで。カウンターなら職人の仕事が見える。落ち着いたデート向きの店という声が多い一方、2026年9月〜10月には時間の終わりに急かされたという人が2人。強い香りは控えて。',
  });
}

// ================================================================ タワンタイ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000924/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'osaka_tawanthai_minamisenba', name: 'タワンタイ (TAWANTHAI)', category: 'OMNI',
    lat: 34.676534, lng: 135.504552, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Rice-noodle and rice dishes are common in Thai cooking, but sauces (oyster, soy, fish sauce) are not described, and fried spring rolls and soft-shell crab are battered.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: most dishes use fish sauce, chicken, pork or shrimp.',
    hours_raw: 'Mon–Sat 11:00–14:30 (last order 14:00) and 17:00–22:00 (last order 21:00); closed Sunday (Tabelog). Takeaway and Uber Eats until 21:00 (Tabelog). Reservations accepted for dinner indoors; none at lunch or for the terrace (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, iD, QUICPay, PayPay and Rakuten Pay; coupons cannot be combined with PayPay (Tabelog; August 2026). 30 seats at tables, sofa seats and an open terrace; non-smoking, terrace included; children welcome, no children\'s chairs; no pets (Tabelog). Busy at weekday noon (September 2026). Opened 5 December 1999 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-6-21, 1F of the グラン・ビルド心斎橋 — 5 min from Nagahoribashi Stn, 7 min from Shinsaibashi',
    cuisine: 'Thai cooking made easy for first-timers, with a photo menu and short descriptions (Tabelog) · lunch sets, e.g. a curry and soup set, the "S-SET" of rice with a daily side and vermicelli soup (September–October 2026); tom yum noodles ¥1,050, spicy but adjustable with table condiments, no coriander (September 2026) · gapao rice, tom kha gai (Tabelog) · pad thai, pad see ew, pad kee mao, khao man gai, gai yang, green curry, yellow curry with soft-shell crab, satay with peanut sauce, fried and fresh spring rolls, minced-pork salad and omelette (2026 reviews) · Thai drinks and wine (Tabelog)',
    website: null, gmaps: gm('TAWANTHAI 南船場'), menu_url: null,
    notes: "[Thai · Minami-Senba, a Thai kitchen since 1999] A long-running Thai restaurant on a Minami-Senba corner with an open terrace, busy with nearby office workers at weekday lunch. The menu is long and pictured, so first-timers can point: gapao rice, khao man gai, pad thai and the rarer pad see ew and pad kee mao, yellow curry with soft-shell crab, satay with peanut sauce, and a spicy tom yum noodle soup (¥1,050 at lunch in September 2026) that comes without coriander and with condiments to tune the heat. Lunch sets pair a curry or rice dish with soup. Regulars from nearby offices come back again and again; one solo diner found the minced-pork salad hot enough to sweat. Closed Sundays; no lunch bookings.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: authentic Thai cooking made easy to enjoy, a menu with photos and simple descriptions; opened 5 December 1999.', philosophy: '"Authentic Thai cuisine that feels just like being in Thailand" (Tabelog).', specialty: 'Pad thai; tom yum noodles; khao man gai.',
      anecdotes: [
        { text: '"I tried the Tom Yum noodles for JPY 1050. The soup is really tasty. There\'s no cilantro included." — September 2026, lunch.', source: R + 'B534784484/' },
        { text: '"I work nearby, and whenever I go out for lunch with friends, we always choose this place because it\'s delicious!" — September 2026.', source: R + 'B537828432/' },
        { text: '"The soft-shell crab with yellow curry and the satay with peanut sauce were delicious!" — October 2026.', source: R + 'B538156708/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): タワンタイ (TAWANTHAI)、タイ料理・カレー・ダイニングバー、大阪市中央区南船場2-6-21 グラン・ビルド心斎橋 １Ｆ、長堀橋駅から徒歩5分、心斎橋駅から徒歩7分、月〜土11:00〜14:30 (L.O.14:00)・17:00〜22:00 (L.O.21:00)、日曜休み、テイクアウトと Uber Eats は21時まで、予約可 (ランチとテラス席は不可)、カード・電子マネー・PayPay・楽天ペイ可、30席、ソファ席、オープンテラス、禁煙 (テラスも)、子ども可、ペット不可、1999年12月5日オープン。店の紹介 (英訳): 日本人にも食べやすい本格タイ料理、写真と説明つきのメニュー、gapao rice、tom kha gai。口コミ(2026年8月〜10月): khao man gai、tom yum の麺1,050円 (パクチーなし、調味料で辛さを調整)、pad thai、gapao rice、エビの春巻、グリーンカレー、ひき肉のサラダ、ひき肉のオムレツ、gai yang、pad kee mao、pad see ew、ソフトシェルクラブのイエローカレー、サテのピーナッツソース、カレーとスープのランチセット、平日の昼は混む、クーポンを使うと PayPay 不可。',
      confidence: 'medium', sources: [TB, R + 'B489311699/', R + 'B534784484/', R + 'B535105023/', R + 'B535845352/', R + 'B535855991/', R + 'B536216369/', R + 'B537828432/', R + 'B537944122/', R + 'B538094976/', R + 'B538156708/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Photo menu with short descriptions (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-6-21 グラン・ビルド心斎橋 １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目6番21号 (go) 12m. gelamu (osaka_gelamu_shinsaibashi) is at 南船場2-6-29, a different house number; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534784484/'],
    price_note: 'One dated price from a September 2026 review; no menu prices on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Tom yum noodles (lunch)', '¥1,050', 'Noodles', 'ask', 'no', 'September 2026 review.', 'tomyum_noodle'),
      it('', '', 'Khao man gai', '', 'Rice', 'ask', 'no', 'August and September 2026 reviews.', 'khao_man_gai'),
      it('', '', 'Pad thai', '', 'Noodles', 'ask', 'no', 'September 2026 reviews.', 'pad_thai'),
    ] }, {
    cuisine: '初めてでも食べやすいタイ料理、写真と短い説明のメニュー (食べログ)・ランチのセット、たとえばカレーとスープのセット、日替わりの一品とスープ春雨の「S-SET」(2026年9月〜10月)。tom yum の麺1,050円、辛いがテーブルの調味料で調整でき、パクチーなし (2026年9月)・gapao rice、tom kha gai (食べログ)・pad thai、pad see ew、pad kee mao、khao man gai、gai yang、グリーンカレー、ソフトシェルクラブのイエローカレー、ピーナッツソースのサテ、揚げ春巻と生春巻、ひき肉のサラダとオムレツ (2026年の口コミ)・タイのお酒とワイン (食べログ)',
    neighborhood: '南船場2-6-21、グラン・ビルド心斎橋の1階。長堀橋駅から徒歩5分、心斎橋駅から7分',
    gf_detail: '要確認。グルテンの情報なし。タイ料理は米の麺やご飯の料理が多いが、たれ (オイスター、醤油、ナンプラー) の説明はなく、揚げ春巻とソフトシェルクラブは衣つき。',
    vegan_detail: 'ヴィーガンではありません。ほとんどの料理にナンプラー、鶏、豚、エビを使う。',
    notes: '[タイ料理・南船場、1999年からのタイ料理] 南船場の角にオープンテラスのある老舗のタイ料理の店で、平日の昼は近くの会社員でにぎわう。メニューは長く写真つきなので、初めてでも指さしで頼める: gapao rice、khao man gai、pad thai、めずらしいpad see ewとpad kee mao、ソフトシェルクラブのイエローカレー、ピーナッツソースのサテ、辛いtom yum の麺 (2026年9月の昼は1,050円) はパクチーなしで、調味料で辛さを調整できる。ランチはカレーやご飯ものとスープのセット。近くの会社から何度も通う人がいて、ひき肉のサラダで汗をかくほど辛かったという人も。日曜休み、ランチの予約は不可。',
  });
}

save();
