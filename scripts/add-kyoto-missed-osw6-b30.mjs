// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 30.
//   + 飲茶バルSinSin Yum cha Bar SinSin (one-person dim sum bar, Shijo Shinmachi)
//   + MATT RESTAURANT 2.0 (Japanese wine bar with fusion dishes, Karasuma Gojo)
//   + OndoriO (six-course Italian-based menu with cocktail pairing in a machiya, Kiyomizu-Gojo)
//   + 亀屋則克 Kameya Norikatsu (wagashi maker known for hamazuto, Sakaimachi Sanjo; take-away)
//   Same-name counts first, per brand or operator (2026-11-06): SinSin — one. MATT — the operator MATT JAPAN Inc.
//   (mattjapan.com) lists Restaurant 1.0, Restaurant 2.0 (this shop), Restaurant 3.0 (opening in Minato, Tokyo, August 2026)
//   and W/PIZZA°; none in data — a small group, drafted. OndoriO — one (official site). 亀屋則克 — one shop; "Kameya" is a
//   common wagashi shop-name word (data has 亀屋良永, 亀屋清永, 亀屋良長, 亀屋陸奥, 亀屋博永 — separate shops), so not counted.
//   Taken on 2026-11-06: `next core 200` (lane) gave SinSin 26018362 and MATT 26041042; `next notable 200` (lane) gave
//   OndoriO 26040760 and 亀屋則克 26002396. None is in data/kyoto.json: grep by name and address (観音堂町470 道家商事ビル,
//   御供石町368 北坂ビル, 上棟梁町122-2, 大阪材木町702) found none.
//   Service charges per Tabelog's Japanese original: MATT 「サービス料15%(税込)」; OndoriO 「サービス料10%」;
//   SinSin and 亀屋則克 none listed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-30');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 飲茶バルSinSin
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26018362/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_yumcha_bar_sinsin', name: '飲茶バルSinSin (Yum cha Bar SinSin)', category: 'OMNI',
    lat: 35.004278, lng: 135.757392, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dim sum in wheat wrappers — xiao long bao, shumai, shrimp dumplings, wontons — and spring rolls (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat and seafood dim sum menu — shrimp dumplings, shrimp chili, mapo tofu, steamed chicken (2024–26 reviews). No vegan information.',
    hours_raw: '18:00–24:00, closed irregularly; some nights may be reservation only, so check ahead (Tabelog). Reservations accepted (Tabelog). CASH ONLY — no cards, e-money or QR (Tabelog). 16 seats: 8 at the counter, 8 at tables; private hire up to 20 (Tabelog). Smoking: heated tobacco allowed, paper cigarettes after 22:00 at the shop’s discretion, so children are not admitted unless the place is hired privately (Tabelog). Run by one person, so orders slow down when busy (September and October 2024; May 2025). 5 min from Shijo and Karasuma Stns (Tabelog). Opened 13 July 2011 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Shijo Shinmachi — 5 min from Shijo Stn',
    cuisine: 'Dim sum and creative Chinese dishes in small plates from ¥300, made by an owner-chef trained at a hotel Chinese restaurant, with Shaoxing wine (Tabelog, shop text) · appetizer omakase of 3 for ¥1,150, xiao long bao 2 for ¥400, shumai 2 for ¥500 (February 2026) · shrimp dumplings, chive and shrimp dumplings, shark fin dumplings, spicy shrimp wontons (January 2025) · mapo tofu, mapo eggplant, jellyfish, spring rolls (August 2024) · shrimp chili, five-flavour fried rice with sauce (January 2025) · crispy rice with the sauce poured at the table (November 2025) · two paid under ¥8,000 with dessert and no alcohol (November 2025)',
    website: null, gmaps: gm('飲茶バルSinSin 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Dim sum bar · Shijo Shinmachi, Chinese small plates with a drink] A 16-seat bar where one owner-chef, trained in a hotel Chinese kitchen, turns out xiao long bao, shrimp dumplings, spring rolls and mapo tofu in two-piece portions from ¥300, so it is easy to try many things — two ate for under ¥8,000 (November 2025). Shaoxing wine on the side. Cash only; heated tobacco allowed. One person runs it, so it slows when full. 18:00–24:00.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who runs the shop alone (2024–25 reviews)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): a dim sum bar whose owner-chef trained at a hotel Chinese restaurant; opened 13 July 2011. Reviews from September 2024, October 2024 and May 2025 note it is run by one person.',
      philosophy: 'Chinese food in small plates, a little of many things, in a bar anyone can drop into alone (Tabelog, shop text).', specialty: 'Dim sum; mapo tofu; spring rolls.',
      anecdotes: [
        { text: 'A December 2024 diner on a fourth visit took a regular’s tip at the counter — spring rolls and mapo tofu — and found the mapo tofu good enough without rice.', source: R + 'B495552084/' },
        { text: 'A May 2025 diner found the solo owner so organised that the wait never showed, with dim sum served pre-portioned per person.', source: R + 'B508491110/' },
        { text: 'An October 2024 diner found the tripe and the Jinhua-ham mushrooms mild, but the five-item appetizer plate and crisp spring rolls excellent.', source: R + 'B494594577/' },
      ],
      japanese_sources_summary: '食べログ: バル・中華料理・ダイニングバー、中京区四条新町上ル東入ル観音堂町470 道家商事ビル1F、四条駅・烏丸駅から徒歩5分、18:00〜24:00、不定休 (予約のみの日もある)、予約可、カード・電子マネー・QR 不可、16席 (テーブル8、カウンター8)、貸切20名まで、加熱式たばこ可・22時以降は紙巻きも場合により可、子供は貸切時のみ、2011年7月13日オープン。店の紹介 (英訳): 300円からの点心と創作中華、ホテルの中華料理店で修業した店主、紹興酒。口コミ (2024年8月〜2026年8月、英語): 一人で営む、前菜3種1,150円、小籠包2個400円、焼売2個500円、麻婆豆腐、麻婆茄子、春巻き、海老チリ、五目あんかけ炒飯、おこげ、2人で8,000円未満。',
      confidence: 'medium', sources: [TB, R + 'B490049694/', R + 'B492656495/', R + 'B494594577/', R + 'B495552084/', R + 'B500322839/', R + 'B501020785/', R + 'B502475421/', R + 'B508491110/', R + 'B517220299/', R + 'B518389507/', R + 'B521798264/', R + 'B533427348/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order small plates at the counter from one owner-chef; cash only; heated tobacco allowed and no children unless booked privately.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区四条新町上ル東入ル観音堂町470 道家商事ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004323, 135.757392); cross-checked: GSI 京都府京都市中京区観音堂町470番地 (lot) 9m; offset 5 m south of the Tabelog point to keep clear of kyr_torisoba_ayam_ya_karasum (2.1 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521798264/', R + 'B501020785/', R + 'B490049694/'],
    price_note: 'Item prices from a February 2026 review; dishes from ¥300 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers, omakase (3)', '¥1,150', 'Appetizers', 'ask', 'no', 'Steamed chicken with green onion salt, jellyfish, bamboo shoots (February 2026).', 'appetizer_omakase'),
      it('', '', 'Xiao long bao (2)', '¥400', 'Dim sum', 'no', 'no', 'February 2026.', 'xiaolongbao'),
      it('', '', 'Shumai (2)', '¥500', 'Dim sum', 'no', 'no', 'February 2026.', 'shumai'),
      it('', '', 'Mapo tofu', '', 'Dishes', 'ask', 'no', 'August 2024; December 2024.', 'mapo_tofu'),
      it('', '', 'Spring rolls', '', 'Dishes', 'no', 'ask', '2024–25 reviews.', 'spring_rolls'),
    ] }, {
    cuisine: 'ホテルの中華料理店で修業した店主の、300円からの小皿の点心と創作中華、紹興酒とともに (食べログ、店の紹介)・前菜のおまかせ3種1,150円、小籠包2個400円、焼売2個500円 (2026年2月)・海老餃子、ニラと海老の餃子、フカヒレ餃子、海老ワンタンの辛味 (2025年1月)・麻婆豆腐、麻婆茄子、くらげ、春巻き (2024年8月)・海老チリ、五目あんかけ炒飯 (2025年1月)・目の前であんをかけるおこげ (2025年11月)・2人でデザート付き、酒なしで8,000円未満 (2025年11月)',
    neighborhood: '四条新町。四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。小籠包、焼売、海老餃子、ワンタンなど小麦の皮の点心と春巻き (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海老餃子、海老チリ、麻婆豆腐、蒸し鶏など肉と魚介の点心 (2024〜2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[点心バル・四条新町、小皿の中華で一杯] 16席のバル。ホテルの中華で修業した店主が一人で、小籠包、海老餃子、春巻き、麻婆豆腐を2個ずつの小皿で300円から出す。少しずつ色々頼めて、2人で8,000円未満の口コミも。紹興酒も。現金のみ、加熱式たばこ可。一人で営むので混むと遅くなる。18時〜24時。',
  });
}

// ================================================================ MATT RESTAURANT 2.0
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041042/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '24:00']); const WE = day(['12:00', '24:00']);
  put({
    id: 'kyoto_matt_restaurant_2', name: 'MATT RESTAURANT 2.0', category: 'OMNI',
    lat: 34.997748, lng: 135.759546, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Signature dishes use wheat — the Wagyu cigarette in thin pastry, Kyoto-style rigatoni, apple pie (2024–25 reviews); breadcrumb garnishes (May 2024). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly Wagyu, duck, octopus and oyster dishes (2024–25 reviews); a king oyster mushroom cappuccino and a seasonal vegetable soup appear, but no vegan information.',
    hours_raw: 'Mon–Fri 17:00–24:00; Sat, Sun, holidays and the days before and after holidays 12:00–24:00; last order food 22:00, drinks 23:30; closing days vary (Tabelog). Lunch last order 16:00 (Tabelog, shop text). Reservations accepted (Tabelog). Service charge 15% (Tabelog, Japanese text: 「サービス料15%(税込)」). Cards, e-money and PayPay (Tabelog). 12 seats: 8 at an open-kitchen counter and a 4-seat chef’s table with a ¥10,000 seat fee that includes a special dish from Chef MATT and a glass of Japanese wine each (Tabelog). Non-smoking; children welcome, kids menu; no very casual dress (Tabelog). Basement of 北坂ビル; 4 min from Shijo Stn, 5 min from Gojo Stn (Tabelog). Opened 20 April 2024 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma Gojo, in a basement — 4 min from Shijo Stn',
    cuisine: 'A Japanese-wine bar with fusion dishes under the concept "DISCOVER NEW JAPAN" — Kyoto vegetables and Wagyu with Italian and global influences, about 120 Japanese wines with free tastings (Tabelog, shop text; May 2025) · Wagyu cigarette, minced Wagyu rolled in thin pastry (2024–25 reviews) · aosa seaweed risotto, Kyoto duck (May 2024) · spicy octopus ¥2,400, Seoul-style spicy stew ¥3,600 (May 2024) · king oyster mushroom cappuccino, oysters (January 2025) · MATT KYOTO lunch set: grilled romaine Caesar, Wagyu cigarette, Kyoto vegetable soup, Kyoto-style rigatoni, Earl Grey apple pie (April 2025) · charcoal tiramisu and apple pie in a café set; a dessert course (July 2024, May 2025)',
    website: 'https://mattjapan.com', gmaps: gm('MATT RESTAURANT 2.0 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Japanese wine bar · Karasuma Gojo, fusion plates in an all-white basement] An all-white basement with a U-shaped counter and Showa pop on the speakers, pouring about 120 Japanese wines — taste before you choose — with fusion plates such as the Wagyu cigarette, aosa risotto and Kyoto-style rigatoni. Lunch on weekends and holidays. Reviewers praise the wine guidance but call it pricey, with a 15% service charge. Open to midnight.',
    chef_bio: { chef_name: 'MATT', roles: ['Chef (named on Tabelog as "Chef MATT")'], origin: null,
      background: 'Per the official site (mattjapan.com): MATT JAPAN Inc., founded in Kyoto in 2023, runs Restaurant 1.0 (reworked everyday street food), Restaurant 2.0 (modern Japanese dining, this shop; the site says it was established in Kyoto in April 2023, while Tabelog gives an opening day of 20 April 2024), Restaurant 3.0 (a "gastronomic show" opening in Minato, Tokyo, in August 2026) and W/PIZZA°, and also lists SAMURAI SAUVIGNON, a wine served here (May 2024).',
      philosophy: '"DISCOVER NEW JAPAN": Japanese ingredients such as Kyoto vegetables and Wagyu, combined with world cuisines (Tabelog, shop text).', specialty: 'Wagyu cigarette; Japanese wine.',
      anecdotes: [
        { text: 'A May 2025 diner noted the clash of a stark white room with retro Showa pop, and the chance to sample wines before choosing.', source: R + 'B512296887/' },
        { text: 'A December 2024 diner found it expensive and was not left full, and was told the knowledgeable wine server held no sommelier qualification.', source: R + 'B497208857/' },
        { text: 'A May 2025 group booked the night before for a birthday and still got a birthday plate.', source: R + 'B507130659/' },
      ],
      japanese_sources_summary: '食べログ: ワインバー・イノベーティブ・イタリアン、下京区御供石町368 北坂ビル B1F、四条駅から徒歩4分・五条駅から徒歩5分、平日17:00〜24:00、土日祝と祝前日・祝後日12:00〜24:00 (L.O. 料理22:00、ドリンク23:30)、予約可、サービス料15%(税込)、カード・電子マネー・PayPay 可、12席 (オープンキッチンのカウンター8、シェフズテーブル4、席料10,000円)、禁煙、子供可、2024年4月20日オープン、コンセプト "DISCOVER NEW JAPAN"、日本ワイン約120種。公式サイト: MATT JAPAN、Restaurant 1.0・2.0・3.0、W/PIZZA°。口コミ (2024年5月〜2025年8月、英語): 和牛のシガレット、アオサのリゾット、Kyoto の鴨、蛸のスパイシー2,400円、ランチセット、炭のティラミス、アップルパイ、高めの価格。',
      confidence: 'medium', sources: [TB, 'https://mattjapan.com', R + 'B484688884/', R + 'B484727065/', R + 'B485868420/', R + 'B495897831/', R + 'B497208857/', R + 'B498140055/', R + 'B502466055/', R + 'B505673983/', R + 'B507130659/', R + 'B508063433/', R + 'B512296887/', R + 'B513394916/'] },
    cultural_comfort: { level: 'english', note: 'The menu is in English (December 2024) and the shop text says it draws foreign tourists; staff explain the wines (August 2025). 15% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区御供石町368 北坂ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official group site and Tabelog listing; reviews dated through August 2025.' },
    pin_source: `Tabelog ${TB} (34.997748, 135.759546); cross-checked: GSI 京都府京都市下京区御供石町368番地 (lot) 96m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B485868420/', R + 'B508063433/'],
    price_note: 'Two item prices from a May 2024 review; 15% service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Spicy octopus', '¥2,400', 'Dishes', 'ask', 'no', 'May 2024.', 'spicy_octopus'),
      it('', '', 'Seoul spicy stew', '¥3,600', 'Dishes', 'ask', 'ask', 'May 2024.', 'seoul_stew'),
      it('', '', 'Wagyu cigarette', '', 'Dishes', 'no', 'no', 'Minced Wagyu in thin pastry (2024–25 reviews).', 'wagyu_cigarette'),
      it('', '', 'MATT KYOTO lunch set', '', 'Lunch', 'no', 'no', 'Caesar, Wagyu cigarette, soup, rigatoni, apple pie (April 2025).', 'matt_kyoto_lunch'),
      it('', '', 'Service charge', '15%', 'Charge', '', '', 'Tabelog.', 'service_charge'),
    ] }, {
    cuisine: '"DISCOVER NEW JAPAN" がコンセプトの日本ワインのバー。Kyoto の野菜や和牛にイタリアンや世界の料理を合わせ、日本ワイン約120種は試飲してから選べる (食べログの店の紹介、2025年5月)・和牛を薄い生地で巻いた和牛のシガレット (2024〜2025年の口コミ)・アオサのリゾット、Kyoto の鴨 (2024年5月)・蛸のスパイシー2,400円、Seoul 風の辛い煮込み3,600円 (2024年5月)・エリンギのカプチーノ、牡蠣 (2025年1月)・MATT KYOTO のランチセット: ロメインのシーザーサラダ、和牛のシガレット、Kyoto の野菜のスープ、Kyoto 風のリガトーニ、アールグレイのアップルパイ (2025年4月)・カフェセットの炭のティラミスとアップルパイ、デザートのコース (2024年7月、2025年5月)',
    neighborhood: '烏丸五条、ビルの地下。四条駅から徒歩4分',
    gf_detail: '要確認。看板料理に小麦を使う (薄い生地の和牛のシガレット、Kyoto 風のリガトーニ、アップルパイ) (2024〜2025年の口コミ)。パン粉の飾りも (2024年5月)。グルテンの情報はない。',
    vegan_detail: '要確認。和牛、鴨、蛸、牡蠣の料理が中心 (2024〜2025年の口コミ)。エリンギのカプチーノや野菜のスープもあるが、ヴィーガンの情報はない。',
    notes: '[日本ワインのバー・烏丸五条、真っ白な地下でフュージョン] U字のカウンターに昭和のポップスが流れる真っ白な地下の店。日本ワイン約120種を試飲して選べ、和牛のシガレット、アオサのリゾット、Kyoto 風のリガトーニなどのフュージョン料理と。土日祝は昼から。ワインの案内は好評だが、価格は高めとの声があり、サービス料15%。24時まで。',
  });
}

// ================================================================ OndoriO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040760/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '21:30']); const L = day(['12:00', '14:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_ondorio', name: 'OndoriO', category: 'OMNI',
    lat: 34.993379, lng: 135.771546, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A set six-course menu that has included lasagna, pasta and churros (May and September 2026); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as served: one set course with duck and pâté de campagne (May and September 2026). No vegan information.',
    hours_raw: 'Dinner in two sittings, 17:00–19:00 and 19:30–21:30 (official site); Wed–Sun dinner, plus lunch 12:00–14:00 on Sat, Sun and holidays; closed Monday and Tuesday and some other days each month (Tabelog; official site). Reservation only; seating limited to 2 hours; groups of 4 or more call the shop (Tabelog). Service charge 10% (Tabelog, Japanese text: 「サービス料10%」). Cards (incl. UnionPay), e-money and PayPay (Tabelog). 14 counter seats in a renovated machiya with no sign (Tabelog; March 2026); private hire up to 20 (Tabelog). Non-smoking; no children below junior-high age; English menu (Tabelog). Residential street south of Gojo; 8 min from Kiyomizu-Gojo Stn (Tabelog). Opened 7 December 2023 (Tabelog).',
    hours: { 2: D, 3: D, 4: D, 5: L, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama, Yamato-oji south of Gojo — 8 min from Kiyomizu-Gojo Stn',
    cuisine: 'One six-course menu, Italian- and French-based and changing monthly, each dish paired with a "savory cocktail" built on aroma (official site; Tabelog) · six dishes with cocktail pairing ¥14,800, with non-alcoholic pairing ¥13,600, food only ¥9,800 (Tabelog) · cocktails of about 4–5% alcohol, mixed at the counter with dry ice and distilling glassware (March and September 2026) · churros with pâté de campagne and strawberries (May 2026) · lasagna, pasta, duck (September 2026) · a birthday dessert plate (Tabelog; October 2026)',
    website: 'https://ondorio.jp/', gmaps: gm('OndoriO 京都 東山'), menu_url: TB + 'dtlmenu/',
    notes: '[Cocktail-paired Italian · Kiyomizu-Gojo, six courses in a machiya] An unsigned machiya with a dim counter, where six seasonal Italian-French dishes each come with a low-alcohol "savory cocktail" — ¥14,800, ¥13,600 with alcohol-free pairings, or ¥9,800 for food alone. Churros with pâté de campagne stood out for one May 2026 diner. Reservation only, two sittings; 10% service charge; no young children. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site (ondorio.jp): the name, read オンドリオ, is coined from the story of a boy in one theory of the word “cocktail” — the Mexican rooster’s tail. The food is “genreless”, based on Italian and French cooking, and the drinks are savory cocktails designed to mirror or contrast each dish’s aroma, in what the site calls “Aroma Pairing”. Opened 7 December 2023 (Tabelog).',
      philosophy: 'Free thinking and mixing: cooking and making cocktails with the spirit of that boy (official site).', specialty: 'Six-course aroma pairing with cocktails.',
      anecdotes: [
        { text: 'A March 2026 diner was steered toward soft-drink pairings at first, since the cocktails run about 4–5%, then switched to the alcoholic ones from the second glass.', source: R + 'B525316430/' },
        { text: 'A May 2026 diner found the churros with pâté de campagne and strawberries a memorable cross of savory and sweet.', source: R + 'B534681617/' },
        { text: 'A June 2026 diner found the portions too generous and wished for a smaller, cheaper course.', source: R + 'B532294743/' },
      ],
      japanese_sources_summary: '公式サイト: 読みはオンドリオ、カクテルの語源の一つ「メキシコのオンドリの尻尾説」の少年の話から作った言葉、料理とカクテルのペアリングのおまかせ1コース、イタリアンとフレンチをもとにしたジャンルレス料理、セイボリーなカクテル、東山区大和大路通五条下る二丁目上棟梁町122番地2、夜は2部制17:00〜19:00・19:30〜21:30、昼は土日祝12:00〜14:00、月火と不定休。食べログ: 予約のみ、2時間制、サービス料10%、カード・電子マネー・PayPay 可、14席、中学生未満不可、英語メニュー、2023年12月7日オープン、6品とカクテル6杯14,800円、ノンアルコール13,600円、料理のみ9,800円。口コミ (2026年3月〜10月、英語): 町家の改装、看板なし、ドライアイス、蒸留器、パテ・ド・カンパーニュのチュロス、ラザニア、鴨。',
      confidence: 'medium', sources: [TB, 'https://ondorio.jp/', R + 'B525285534/', R + 'B525316430/', R + 'B525633784/', R + 'B529268930/', R + 'B531532548/', R + 'B532294743/', R + 'B534210054/', R + 'B534681617/', R + 'B535059556/', R + 'B535996371/', R + 'B537131155/', R + 'B537685920/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog) and an English official site; book online; one set course, alcohol-free pairing available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区上棟梁町122-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.993379, 135.771546); cross-checked: GSI 京都府京都市東山区上棟梁町122番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog’s set menus (tax included); 10% service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase, 6 dishes with cocktail pairing', '¥14,800', 'Dinner', 'ask', 'no', 'Tabelog.', 'course_cocktail'),
      it('', '', 'Seasonal omakase, 6 dishes with non-alcoholic pairing', '¥13,600', 'Dinner', 'ask', 'no', 'Tabelog.', 'course_nonalc'),
      it('', '', 'Seasonal omakase, 6 dishes (food only)', '¥9,800', 'Dinner', 'ask', 'no', 'Tabelog.', 'course_food'),
      it('', '', 'Service charge', '10%', 'Charge', '', '', 'Tabelog.', 'service_charge'),
    ] }, {
    cuisine: 'イタリアンとフレンチをもとにした月替わりの6品のコース1つ。料理ごとに香りで合わせた「セイボリーなカクテル」を出す (公式サイト、食べログ)・6品とカクテルのペアリング14,800円、ノンアルコールのペアリング13,600円、料理のみ9,800円 (食べログ)・アルコール4〜5%ほどのカクテルを、ドライアイスや蒸留器を使ってカウンターで作る (2026年3月・9月)・パテ・ド・カンパーニュと苺のチュロス (2026年5月)・ラザニア、パスタ、鴨 (2026年9月)・誕生日のデザートプレート (食べログ、2026年10月)',
    neighborhood: '東山、五条の南の大和大路通。清水五条駅から徒歩8分',
    gf_detail: '要確認。ラザニア、パスタ、チュロスが入ったこともある6品のコース (2026年5月・9月)。グルテンの情報はない。',
    vegan_detail: 'このままではヴィーガン不可。鴨やパテ・ド・カンパーニュの入るコース1つ (2026年5月・9月)。ヴィーガンの情報はない。',
    notes: '[カクテルと合わせるイタリアン・清水五条、町家で6品] 看板のない町家の薄暗いカウンター。季節のイタリアン・フレンチ6品に、それぞれアルコールの軽い「セイボリーなカクテル」を合わせる。14,800円、ノンアルコールのペアリングで13,600円、料理のみ9,800円。2026年5月の口コミではパテ・ド・カンパーニュのチュロスが印象的。予約のみの2部制、サービス料10%、中学生未満不可。月火休み。',
  });
}

// ================================================================ 亀屋則克
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002396/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_kameya_norikatsu', name: '亀屋則克 (Kameya Norikatsu)', category: 'OMNI',
    lat: 35.008986, lng: 135.763349, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagashi such as warabi mochi with kinako, kuzuyaki, manju and steamed castella layers (2026 reviews); no ingredient information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean-paste and starch sweets, but the yomogi dumplings contain egg white (March 2026) and the castella layer of one sweet is egg-based (June 2026).',
    hours_raw: 'Mon and Wed–Sat 9:00–17:00; closed Tuesday and Sunday (Tabelog). Take-away only: sweets are chosen from samples while seated in the traditional style, with no showcase (July and October 2026). Orders by phone; some items such as kuri kinton by reservation (Tabelog; October 2026). Cards, e-money and QR (Tabelog). On Sakaimachi north of Sanjo; 395 m from Karasuma Oike Stn (Tabelog). Fresh sweets can sell out (March 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi north of Sanjo — 395 m from Karasuma Oike Stn',
    cuisine: 'Kyoto wagashi to take away (Tabelog) · hamazuto, the signature: a clam shell filled with yellow kanten jelly and miso-flavoured fermented beans, eaten with the shell as a scoop; seasonal, over by October; keeps over 7 days (official site; May, July and October 2026) · warabi mochi ¥480, October to about April, and kuri kinton ¥570 by reservation (October 2026) · seasonal fresh sweets, about six kinds at a time, and dry sweets from wooden moulds (July 2026) · minazuki in three kinds (June 2026) · yomogi dumplings, joyo manju, three-colour dango, miso kashiwa mochi (March and May 2026) · hamazuto and three items ¥2,040 (July 2026)',
    website: 'https://www.kameyanorikatsu.com/', gmaps: gm('亀屋則克'), menu_url: 'https://www.kameyanorikatsu.com/',
    notes: '[Wagashi · Sakaimachi Sanjo, the clam-shell sweet] An old wagashi house selling in the traditional seated style, from samples rather than a showcase. Known for hamazuto — a real clam shell of yellow jelly over miso-flavoured beans, a tea-ceremony sweet (July 2026) — and, October to about April, a very thin warabi mochi (¥480). Seasonal fresh sweets change through the year. Take-away only; closed Tuesday and Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the official site: 御菓子司 亀屋則克, maker of seasonal fresh sweets and dry sweets, whose signature is 浜土産 (はまづと). Reviews give the history differently: moved from Fukui to Kyoto in 1916 (May 2026), founded in 1916 (October 2026), founded in 1926 (July 2026); the founding year is not confirmed here.',
      philosophy: null, specialty: 'Hamazuto; warabi mochi; seasonal fresh wagashi.',
      anecdotes: [
        { text: 'A July 2026 buyer was told the sweets keep 4–5 days refrigerated and the hamazuto over a week, and heard the shop is favoured by a Kyoto tea teacher.', source: R + 'B531510261/' },
        { text: 'A June 2026 visitor came for two rainy-season sweets — one of rain and rainbows, one of three green layers — and got both.', source: R + 'B530317258/' },
        { text: 'An October 2026 buyer carried a box of warabi mochi flat all the way home to Saitama.', source: R + 'B537962322/' },
      ],
      japanese_sources_summary: '公式サイト: 御菓子司 亀屋則克、代表銘菓「浜土産」(はまづと)、中京区堺町通三条上ル、上生菓子とお干菓子。食べログ: 和菓子、中京区堺町通三条上ル大阪材木町702、烏丸御池から395m、月・水〜土 9:00〜17:00、火日休み、テイクアウト、カード・電子マネー・QR 可。口コミ (2026年3月〜9月・10月、英語): 座売り、見本から選ぶ、浜土産は蛤の殻に寒天と浜納豆、わらび餅480円 (10月〜4月頃)、栗きんとん570円 (予約)、水無月3種、よもぎ団子、薯蕷饅頭、三色団子、味噌の柏餅、創業の年は口コミにより1916年と1926年。',
      confidence: 'medium', sources: [TB, 'https://www.kameyanorikatsu.com/', R + 'B523847923/', R + 'B524470885/', R + 'B527421045/', R + 'B530317258/', R + 'B530884793/', R + 'B530922323/', R + 'B531510261/', R + 'B531770730/', R + 'B532562001/', R + 'B532694604/', R + 'B536878046/', R + 'B537962322/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sit at the front and choose from samples as staff introduce each sweet (June and October 2026); take-away only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通三条上ル大阪材木町702',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008986, 135.763349); cross-checked: GSI 京都府京都市中京区大阪材木町702番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537962322/', R + 'B531510261/', R + 'B530922323/'],
    price_note: 'Prices from October and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hamazuto (clam-shell jelly)', '', 'Signature', 'ask', 'ask', 'Seasonal; over 7 days’ keeping (July 2026).', 'hamazuto'),
      it('', '', 'Warabi mochi', '¥480', 'Seasonal', 'ask', 'ask', 'October to about April (October 2026).', 'warabi_mochi'),
      it('', '', 'Kuri kinton', '¥570', 'Seasonal', 'ask', 'ask', 'By reservation (October 2026).', 'kuri_kinton'),
      it('', '', 'Yomogi dumplings', '', 'Fresh sweets', 'ask', 'no', 'Contain egg white (March 2026).', 'yomogi_dango'),
    ] }, {
    cuisine: '持ち帰りの京菓子 (食べログ)・代表の浜土産: 蛤の殻に黄色い寒天と味噌風味の浜納豆、殻ですくって食べる季節の菓子で、10月には終わり、7日以上もつ (公式サイト、2026年5月・7月・10月)・わらび餅480円 (10月〜4月頃)、予約の栗きんとん570円 (2026年10月)・季節の上生菓子は一度に6種ほど、木型のお干菓子 (2026年7月)・水無月3種 (2026年6月)・よもぎ団子、薯蕷饅頭、三色団子、味噌の柏餅 (2026年3月・5月)・浜土産と3品で2,040円 (2026年7月)',
    neighborhood: '堺町通、三条の北。烏丸御池駅から395m',
    gf_detail: '要確認。きな粉のわらび餅、葛焼き、饅頭、カステラの層のある菓子など (2026年の口コミ)。原材料の情報はない。',
    vegan_detail: '要確認。餡と澱粉の菓子が中心だが、よもぎ団子には卵白が入り (2026年3月)、カステラの層の菓子もある (2026年6月)。',
    notes: '[和菓子・堺町三条、蛤の殻の菓子] ショーケースではなく、座売りで見本から選ぶ古い和菓子屋。名物の浜土産は本物の蛤の殻に黄色い寒天と味噌風味の豆を入れた茶席の菓子 (2026年7月)。10月〜4月頃は薄く伸ばしたわらび餅 (480円) も。季節の上生菓子が一年を通して変わる。持ち帰りのみ、火日休み。',
  });
}

save();
