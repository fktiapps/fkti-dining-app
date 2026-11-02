// Osaka sweep (2-mile circle around Dotonbori), core phase backlog, lane id mod 4 = 3; worker osw4, batch 24.
//   + マルホ酒店 ミナミ店 Maruho Saketen Minami (craft beer bar with tacos, Motomachi)
//   + CRITTERS PIZZA (pizza and wine from the Critters Burger team, Amerikamura)
//   + スマイル キッチン ヒマラヤン バル 裏難波店 Smile Kitchen Himalayan Bal (Nepalese, open until 5 a.m.)
//   + 海鮮魚介と日本酒 旬彩和食くつろぎ Shunsai Washoku Kutsurogi (reservation-only seafood izakaya, Higashi-Shinsaibashi)
//   - 27134663 野菜巻き×地鶏×釜飯 難波とんぼ 別館: branch of とんぼ, already in data (osaka_rojiura_sakaba_tonbo_ura_namba).
//   Chain check: マルホ酒店 has its main shop in Kujo (a September 2025 reviewer) — small group. CRITTERS PIZZA is the
//   pizza sister of CRITTERS BURGER (Tabelog shop text), which is in data (osaka_critters_burger_nishishinsaibashi) —
//   a different concept, drafted. スマイル キッチン: one shop (a second was planned, July 2026). くつろぎ: one shop found.
//   None of the four is in data/osaka.json (grep by name, Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27134663', 'branch of a brand in data: 路地裏酒場 とんぼ (osaka_rojiura_sakaba_tonbo_ura_namba)');

// ================================================================ マルホ酒店 ミナミ店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27120083/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']), SU = day(['16:00', '22:00']);
  put({
    id: 'osaka_maruho_saketen_minami', name: 'マルホ酒店 ミナミ店 (Maruho Saketen Minami)', category: 'OMNI',
    lat: 34.66552, lng: 135.497187, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Tacos come on corn tortillas (Tabelog); the menu also has kara-age, fried rice and salsa chips, and most drinks are beer.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; dishes include pork chashu, kara-age and steak, and nothing is described as vegan.',
    hours_raw: 'Mon–Sat and the day before holidays 17:00–23:00; Sun and holidays 16:00–22:00; closed the day after a holiday (Tabelog). Lunch 12:00–14:00 on listed days, most Tuesdays to Saturdays in October 2026 (Tabelog). A February 2025 reviewer found it opening at 14:00 on Sundays. Reservations accepted (Tabelog); often fully booked or closed on holidays (October 2026). No service or cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, PayPay, Rakuten Pay and au PAY (Tabelog). 32 seats (8 counter, 24 table); non-smoking, ashtray outside; wheelchair accessible; children and strollers welcome; English menu (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Motomachi 1-4-12, Naniwa-ku — 1 min from Namba Stn exit 32 (Yotsubashi Line)',
    cuisine: 'Craft beer bar with over 150 beers, some imported by the company from Europe and New Zealand, plus wine, sake, gin and mezcal; tacos, steak and seasonal small plates supervised by a former Michelin-starred chef (Tabelog shop text) · "hand-rolled" casual taco course on corn tortillas (Tabelog) · about 12 taps of Japanese and overseas beer (February 2025); half pint (about 240 ml) ¥1,080, e.g. DONZOKO "DONNIE\'S" nitro dark lager and NZ Super Pils, salsa chips ¥600 (August 2026) · staff pick beers to your taste, e.g. fruity IPAs (October 2025, October 2026) · mini taco platter of three (June 2026) · course of appetisers, edamame, pork toro chashu, kara-age, fried rice and dessert (September 2025) · "Ate Mori" small-plate set with a half pint (October 2025) · fruit butter (October 2026)',
    website: null, gmaps: gm('マルホ酒店 ミナミ店'), menu_url: null,
    notes: '[Craft beer bar · Namba, 150 beers and tacos] A bright craft-beer bar a minute from Namba Station exit 32, the Minami branch of a Kujo beer shop, with a dozen taps, a fridge of rare imports and tacos to snack on. Tell the counter staff what you like and the staff will pick; half pints were ¥1,080 in August 2026. Many Western customers (May 2026) and an English menu. Closed the day after a holiday.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 4 October 2020; food supervised by a former Michelin-starred chef; beers imported by the company. A September 2025 reviewer names the Kujo main store.', philosophy: null, specialty: 'Craft beer; tacos.',
      anecdotes: [
        { text: '"With many Western customers and friendly staff, it feels just like being in a beer bar abroad!" — May 2026.', source: R + 'B530332083/' },
        { text: '"The staff advised, \'If you let air into your mouth like with wine, the aroma will enhance.\' Amazing!" — October 2026.', source: R + 'B520026648/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): マルホ酒店 ミナミ店、ビアバー・タコス・バル、大阪市浪速区元町1-4-12、なんば駅32番出口 (四つ橋線) から徒歩1分、月〜土・祝前日17:00〜23:00、日・祝16:00〜22:00、祝日の翌日休み、2026年10月は火曜〜土曜の多くの日に12:00〜14:00のランチ、予約可、サービス料・チャージなし、カード・電子マネー・QR 決済可、32席 (カウンター8、テーブル24)、禁煙 (店先に灰皿)、英語のメニュー、ベジタリアン対応の表示、2020年10月4日オープン。クラフトビール150種以上、自社輸入のヨーロッパとニュージーランドのビール、元ミシュランのシェフ監修のタコス、ステーキ、季節のつまみ、コーンのトルティーヤで巻くタコスのコース。口コミ(2024年11月〜2026年10月): タップ約12、ハーフパイント1,080円、サルサとチップス600円、店の人が好みを聞いて選んでくれる、ミニタコス3種、豚トロのチャーシュー、唐揚げ、チャーハン、本店は Kujo、欧米の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B495227142/', R + 'B501015133/', R + 'B508916231/', R + 'B513312846/', R + 'B513858849/', R + 'B515964534/', R + 'B516132659/', R + 'B519905900/', R + 'B519955059/', R + 'B520026648/', R + 'B530075830/', R + 'B530332083/', R + 'B531293189/', R + 'B534569857/', R + 'B538160443/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); many Western customers (May 2026); staff recommend beers by taste.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Dislikes taken into account on a course (review, September 2025).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区元町1-4-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with October 2026 lunch dates; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区元町一丁目4番12号 (go) 11m. No record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534569857/', TB],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Craft beer, half pint (about 240 ml)', '¥1,080', 'Beer', 'no', 'ask', 'August 2026 review.', 'half_pint'),
      it('', '', 'Salsa and chips', '¥600', 'Snacks', 'ask', 'ask', 'August 2026 review.', 'salsa_chips'),
      it('', '', 'Mini taco platter, 3 kinds', '', 'Tacos', 'ask', 'no', 'June 2026 review.', 'mini_tacos'),
      it('', '', 'Casual taco course (corn tortillas)', '', 'Course', 'ask', 'no', 'Tabelog listing.', 'taco_course'),
    ] }, {
    cuisine: '150種以上のクラフトビールのバーで、一部は会社がヨーロッパとニュージーランドから輸入、ワイン、日本酒、ジン、メスカルも。元ミシュランのシェフ監修のタコス、ステーキ、季節のつまみ (食べログの店の紹介)・コーンのトルティーヤで自分で巻くカジュアルなタコスのコース (食べログ)・国内外のビールのタップ約12 (2025年2月)、ハーフパイント (約240ml) 1,080円、たとえば DONZOKO の「DONNIE\'S」のナイトロのダークラガーと NZ Super Pils、サルサとチップス600円 (2026年8月)・好みを伝えると店の人がビールを選んでくれる、フルーティーな IPA など (2025年10月、2026年10月)・ミニタコス3種の盛り合わせ (2026年6月)・前菜、枝豆、豚トロのチャーシュー、唐揚げ、チャーハン、デザートのコース (2025年9月)・つまみの盛り合わせとハーフパイントのセット (2025年10月)・フルーツバター (2026年10月)',
    neighborhood: '浪速区元町1-4-12。なんば駅32番出口 (四つ橋線) から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。タコスはコーンのトルティーヤ (食べログ)。唐揚げ、チャーハン、サルサとチップスもあり、飲み物はほとんどがビール。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあるが、豚トロのチャーシュー、唐揚げ、ステーキなどがあり、ヴィーガンの説明はない。',
    notes: '[クラフトビールのバー・なんば、150種のビールとタコス] なんば駅32番出口から1分の明るいクラフトビールのバーで、Kujo のビール店のミナミ店。タップが12ほど、珍しい輸入ビールの冷蔵庫、つまみにタコス。好みを伝えればカウンターの店の人が選んでくれる。2026年8月はハーフパイントが1,080円。欧米の客が多く (2026年5月)、英語のメニューあり。祝日の翌日は休み。',
  });
}

// ================================================================ CRITTERS PIZZA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27109119/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '15:30'], ['17:00', '23:00']), WE = day(['12:00', '23:00']);
  put({
    id: 'osaka_critters_pizza_nishishinsaibashi', name: 'CRITTERS PIZZA', category: 'OMNI',
    lat: 34.6735, lng: 135.49823, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu centres on pizza and pasta, with fried oysters and salads.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; pizzas use mozzarella and the salads prosciutto, and nothing is described as vegan.',
    hours_raw: 'Mon–Fri 12:00–15:30 and 17:00–23:00, happy hour 17:00–19:00; Sat, Sun and holidays 12:00–23:00; open year-round (Tabelog). Reservations accepted (Tabelog); waits at weekday lunch, mostly overseas visitors (April 2026). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, iD and PayPay (Tabelog). 36 seats with counter, sofas and standing bar; non-smoking, smoking area outside; English menu (Tabelog). Music can be loud (July 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-8-22, 第5エースビル 1F, Amerikamura — 3 min from Shinsaibashi Stn and Yotsubashi Stn',
    cuisine: 'Italian and wine bar from the team behind Critters Burger, in a room styled on New York Italian restaurants: pizza, Italian dishes, American and natural wines, homemade desserts and birthday plates (Tabelog shop text) · "CRITTERS PIZZA recommended plan" (food only) ¥3,300: choice of appetisers, pizza, pasta and dessert (March 2026) · lunch set of salad and pizza or pasta under ¥2,000 (March 2026) · Hokkaido mozzarella Margherita (May 2026); buffalo mozzarella Margherita, clam and Parmigiano pizza (September 2026); Cicinielli pizza with Wakayama shirasu (April 2026) · scallop and spinach lemon cream pasta (March 2026); Asian pasta with cilantro as the daily special (July 2026) · fried oysters (January and March 2026) · prosciutto and arugula salad (April 2026) · mojito (July 2026) · chili oil on the table (January 2026)',
    website: null, gmaps: gm('CRITTERS PIZZA 西心斎橋'), menu_url: null,
    notes: '[Pizza · Amerikamura, New York-style Italian from Critters Burger] The pizza-and-wine sister of Critters Burger, a dim, music-filled room in Amemura serving pizza, pasta and natural wine. At lunch a salad with pizza or pasta is under ¥2,000; at night the ¥3,300 plan lets each person pick an appetiser, then share pizza, pasta and dessert. Popular with overseas visitors; English menu; happy hour 17:00–19:00 on weekdays.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 5 November 2018; from Critters Burger (a Tabelog top-100 burger shop), styled on New York Italian restaurants; American and natural wines. CRITTERS BURGER is in data (osaka_critters_burger_nishishinsaibashi).', philosophy: null, specialty: 'Pizza; homemade desserts.',
      anecdotes: [
        { text: '"Even during a weekday lunch, there was a wait, mainly due to inbound tourists. Most of the customers inside were also tourists." — April 2026.', source: R + 'B527104464/' },
        { text: '"I previously visited a burger joint from the same chain and found it delicious, so I decided to try the pizza here as well." — September 2026.', source: R + 'B535112672/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): CRITTERS PIZZA、ピザ・イタリアン・ワインバー、大阪市中央区西心斎橋1-8-22 第5エースビル、心斎橋駅・四ツ橋駅から徒歩3分、月〜金12:00〜15:30、17:00〜23:00 (17:00〜19:00はハッピーアワー)、土日祝12:00〜23:00、年中無休、予約可、カード・電子マネー・PayPay 可、36席、禁煙 (店外に喫煙所)、英語のメニュー、ベジタリアン対応の表示、2018年11月5日オープン。食べログ百名店の Critters Burger のピザとイタリアン、ニューヨークのイタリアンのような店内、アメリカのワインと自然派ワイン、手作りのデザート、誕生日のプレート。口コミ(2026年1月〜9月): 料理のみのおすすめプラン3,300円、サラダとピザかパスタのランチは2,000円以下、Hokkaido のモッツァレラのマルゲリータ、水牛のモッツァレラのマルゲリータ、あさりとパルミジャーノのピザ、Wakayama のしらすのピザ、ホタテとほうれん草のレモンクリームパスタ、パクチーのアジアンパスタ、カキフライ、生ハムとルッコラのサラダ、平日の昼も待ちがあり客は観光客が多い、音楽がやや大きい。',
      confidence: 'medium', sources: [TB, 'https://www.mapple.net/region/a0500000000_g03060700/spot/', R + 'B523214504/', R + 'B524110506/', R + 'B524515439/', R + 'B524703125/', R + 'B524790736/', R + 'B525926322/', R + 'B527075377/', R + 'B527104464/', R + 'B527462785/', R + 'B529306394/', R + 'B531651789/', R + 'B532989470/', R + 'B535112672/', R + 'B536427567/', R + 'B537473289/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); mostly overseas guests at lunch (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-8-22 第５エースビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} 34.673452,135.498211 and GSI 大阪府大阪市中央区西心斎橋一丁目8番22号 (go) 34.673462,135.498123 sit 5 m from 天ぷら互生 心斎橋 (osaka_tempura_gosei_shinsaibashi, same building 2F); pin offset to 34.6735,135.49823, about 9 m from 天ぷら互生 and 23 m from BANCO; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524110506/', R + 'B524790736/', TB],
    price_note: 'Prices from March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'CRITTERS PIZZA recommended plan (appetiser, pizza, pasta, dessert; food only)', '¥3,300', 'Course', 'no', 'no', 'March 2026 review.', 'recommended_plan'),
      it('', '', 'Lunch set: salad with pizza or pasta', 'under ¥2,000', 'Lunch', 'no', 'ask', 'March 2026 review.', 'lunch_set'),
      it('', '', 'Margherita (Hokkaido or buffalo mozzarella)', '', 'Pizza', 'no', 'no', 'May and September 2026 reviews.', 'margherita'),
      it('', '', 'Fried oysters', '', 'Antipasti', 'no', 'no', 'January and March 2026 reviews.', 'kaki_fry'),
    ] }, {
    cuisine: 'Critters Burger のチームのイタリアンとワインバーで、ニューヨークのイタリアンのような店内: ピザ、イタリアン、アメリカのワインと自然派ワイン、手作りのデザート、誕生日のプレート (食べログの店の紹介)・料理のみの「CRITTERS PIZZA おすすめプラン」3,300円: 前菜、ピザ、パスタ、デザートを選ぶ (2026年3月)・サラダとピザかパスタのランチセットは2,000円以下 (2026年3月)・Hokkaido のモッツァレラのマルゲリータ (2026年5月)、水牛のモッツァレラのマルゲリータ、あさりとパルミジャーノのピザ (2026年9月)、Wakayama のしらすのチチニエリ (2026年4月)・ホタテとほうれん草のレモンクリームパスタ (2026年3月)、日替わりのパクチーのアジアンパスタ (2026年7月)・カキフライ (2026年1月・3月)・生ハムとルッコラのサラダ (2026年4月)・モヒート (2026年7月)・卓上にチリオイル (2026年1月)',
    neighborhood: '西心斎橋1-8-22 第5エースビル 1F、アメ村。心斎橋駅・四ツ橋駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ピザとパスタが中心で、カキフライとサラダもある。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあるが、ピザはモッツァレラ、サラダは生ハムで、ヴィーガンの説明はない。',
    notes: '[ピザ・アメ村、Critters Burger のニューヨーク風イタリアン] Critters Burger の姉妹店のピザとワインの店で、アメ村の薄暗く音楽の流れる店内でピザ、パスタ、自然派ワイン。昼はサラダとピザかパスタで2,000円以下、夜は3,300円のプランで前菜をひとりずつ選び、ピザ、パスタ、デザートをシェア。海外からの客に人気で英語のメニューあり。平日の17〜19時はハッピーアワー。',
  });
}

// ================================================================ スマイル キッチン ヒマラヤン バル
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27121131/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '05:00']);
  put({
    id: 'osaka_smile_kitchen_himalayan_bal_ura_namba', name: 'スマイル キッチン ヒマラヤン バル 裏難波店 (Smile Kitchen Himalayan Bal Ura Namba)', category: 'OMNI',
    lat: 34.663444, lng: 135.504156, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sets centre on naan (plain and cheese) with curry; dal bhat and biryani are rice-based alternatives, and momo and chow mein are wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and Spinach (search result) describes a dedicated vegan menu; vegetable pakora and dal bhat are on the menu (April 2026). Ask which curries are made without ghee or dairy.',
    hours_raw: 'Daily 11:00–05:00, last order 03:00; closing days may vary (Tabelog). A May 2026 reviewer heard it is now open 24 hours; Google Maps and Tabelog disagreed. Lunch menu until 17:00 (June 2024). Reservations accepted; smokers should call ahead (Tabelog). No service or cover charge; cards (AMEX) only, no e-money or QR payment (Tabelog). 28 seats on the 1st floor with standing counter, members-only private room upstairs (Tabelog). Some staff speak little Japanese (July and September 2026). Delivery via Uber Eats and others (2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 7-15, JBGビル 1F, Ura-Namba — 4 min from Nankai Namba Stn south exit',
    cuisine: 'Nepalese and Indian curry house: all-you-can-eat and drink ¥3,300 with papad, salad, cheese naan, biryani, momo, tandoori chicken and sausage, spicy fries (July 2026; September 2025) · cheese naan curry set ¥1,050, kebab curry set ¥850 with lassi (January 2026); cheese naan set with tandoori chicken, salad and drink (March 2026) · biryani plate with fried egg, chicken tikka and two sides (June 2026); chicken biryani, very spicy (July 2026) · dal bhat with two curries and egg (August 2025; April 2026) · vegetable pakora (April 2026) · momo, 6 pieces ¥600, vegetable chow mein ¥750 (May 2026) · chicken sekuwa (August 2026) · all-you-can-eat naan set (September 2026) · spice level on request',
    website: null, gmaps: gm('スマイルキッチン ヒマラヤンバル 裏難波'), menu_url: null,
    notes: '[Nepalese · Ura-Namba, naan and biryani until 5 a.m.] A small, friendly Nepalese curry house in Ura-Namba open from 11:00 to 5:00, serving naan sets, biryani, dal bhat and momo. Order the cheese naan set (about ¥1,050) or the biryani plate; the ¥3,300 all-you-can-eat-and-drink is a regulars\' favourite. Some staff speak little Japanese, so point at the menu. Cards are AMEX only.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing: opened 7 January 2021. A July 2026 regular says the owner and four staff run it and a second shop nearby is planned.', philosophy: null, specialty: 'Cheese naan; biryani; dal bhat.',
      anecdotes: [
        { text: '"The owner joined us later, and the conversation flowed even more. We enjoyed eating, drinking, and chatting" — July 2026, a sixth visit.', source: R + 'B434776746/' },
        { text: '"I had some questions while ordering, but I struggled because ... didn\'t understand Japanese. Fortunately, someone who could communicate with me came out to help." — July 2026.', source: R + 'B532226572/' },
        { text: '"There are many Indian and Nepalese restaurants in Namba, but few offer biryani." — June 2026.', source: R + 'B434931280/' },
      ],
      japanese_sources_summary: '食べログ: スマイル キッチン ヒマラヤン バル 裏難波店、ネパール料理・カレー、大阪市中央区難波千日前7-15 JBGビル 1F、南海なんば駅南口から徒歩4分、毎日11:00〜翌5:00 (L.O. 3:00)、休みは変わる場合あり、予約可 (喫煙する人は事前に電話を)、サービス料・チャージなし、カードは AMEX のみ、電子マネー・QR 決済不可、28席、2階は会員制の個室、ベジタリアン対応の表示、2021年1月7日オープン。口コミ(2024年6月〜2026年9月): 食べ飲み放題3,300円、チーズナンのカレーセット1,050円、ケバブのカレーセット850円、ビリヤニのプレート、ダルバート、野菜のパコラ、モモ6個600円、野菜のチャウメン750円、チキンセクワ、ナン食べ放題のセット、辛さは選べる、24時間営業になったという声、日本語があまりわからないスタッフもいるという声、オーナーとスタッフ4人、2号店の予定。',
      confidence: 'medium', sources: [TB, 'https://spinach.guide/venues/smile-kitchen-77098/', R + 'B434575827/', R + 'B434776746/', R + 'B434931280/', R + 'B486408879/', R + 'B492473386/', R + 'B498470203/', R + 'B512109951/', R + 'B514945583/', R + 'B520437948/', R + 'B521039449/', R + 'B528980049/', R + 'B532226572/', R + 'B533618665/', R + 'B535128561/', R + 'B536368270/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Some staff speak little Japanese (July and September 2026); point at the menu. No English-menu evidence on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前7-15 JBGビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前7番15号 (go) 3m. Same address as 源兵衛 なんば店 (osaka_genbee_namba) 8 m away on its own point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B520437948/', R + 'B528980049/', TB],
    price_note: 'Prices from January–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Cheese naan curry set', '¥1,050', 'Sets', 'no', 'no', 'January 2026 review.', 'cheese_naan_set'),
      it('', '', 'Kebab curry set with lassi', '¥850', 'Sets', 'no', 'no', 'January 2026 review.', 'kebab_set'),
      it('', '', 'Biryani plate (fried egg, chicken tikka, sides)', '', 'Rice', 'ask', 'no', 'June 2026 review.', 'biryani_plate'),
      it('', '', 'Dal bhat', '', 'Rice', 'ask', 'ask', 'August 2025 and April 2026 reviews.', 'dal_bhat'),
      it('', '', 'Momo, 6 pieces', '¥600', 'Small plates', 'no', 'no', 'May 2026 review.', 'momo'),
      it('', '', 'All-you-can-eat and drink', '¥3,300', 'Course', 'ask', 'no', 'July 2026 review.', 'tabehodai'),
    ] }, {
    cuisine: 'ネパールとインドのカレーの店: パパド、サラダ、チーズナン、ビリヤニ、モモ、タンドリーチキンとソーセージ、スパイシーなポテトの食べ飲み放題3,300円 (2026年7月、2025年9月)・チーズナンのカレーセット1,050円、ケバブのカレーセット850円とラッシー (2026年1月)、タンドリーチキン、サラダ、飲み物つきのチーズナンのセット (2026年3月)・目玉焼き、チキンティッカ、副菜2品のビリヤニのプレート (2026年6月)、とても辛いチキンビリヤニ (2026年7月)・カレー2種と卵のダルバート (2025年8月、2026年4月)・野菜のパコラ (2026年4月)・モモ6個600円、野菜のチャウメン750円 (2026年5月)・チキンセクワ (2026年8月)・ナン食べ放題のセット (2026年9月)・辛さは注文時に',
    neighborhood: '難波千日前7-15 JBGビル 1F、裏なんば。南海なんば駅南口から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。セットはナン (プレーンとチーズ) とカレーが中心。ダルバートとビリヤニはご飯で、モモとチャウメンは小麦。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあり、Spinach (検索結果) にはヴィーガンのメニューがあるとある。野菜のパコラやダルバートもある (2026年4月)。ギーや乳製品を使わないカレーはどれか確認を。',
    notes: '[ネパール料理・裏なんば、朝5時までナンとビリヤニ] 裏なんばの小さく気さくなネパールのカレーの店で、11時から翌5時まで、ナンのセット、ビリヤニ、ダルバート、モモ。チーズナンのセット (1,050円ほど) かビリヤニのプレートを。3,300円の食べ飲み放題は常連の定番。日本語があまりわからないスタッフもいるので、メニューを指さして。カードは AMEX のみ。',
  });
}

// ================================================================ くつろぎ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27053871/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_shunsai_washoku_kutsurogi_higashishinsaibashi', name: '海鮮魚介と日本酒 旬彩和食くつろぎ (Shunsai Washoku Kutsurogi)', category: 'OMNI',
    lat: 34.67473, lng: 135.50465, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include sashimi, hot pots finished with udon or zosui, tempura, fried oysters and grilled seafood skewers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya of sashimi, abalone, fugu, monkfish and fish hot pots.',
    hours_raw: 'Daily 17:00–01:00, by reservation only; hours vary with ingredients and custom; lunch or late-night private banquets on request a day ahead (Tabelog). Cancellations from 23:00 three days before (ten days in December) are charged in full; à la carte bookings ¥4,000 a person (Tabelog). Charges: cover ¥660–880 (dogs too), seat ¥220, same-day ¥220, 5% service, 10% after 22:00, special rates on holidays and the day before (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, and QR payment (Tabelog). About 60 seats with open kitchen counter, sunken-kotatsu rooms and sofa rooms for 2–30; smoking and non-smoking areas plus a smoking room (Tabelog); smoking inside (March 2026). Seating can be cramped (December 2025, January 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-9-19, ミトオリアートビル 2F — 2 min from Nagahoribashi Stn exit 5-A, 4–5 min from Shinsaibashi Stn',
    cuisine: 'Reservation-only seafood izakaya with creative Japanese cooking, seasonal vegetables, fish bought daily, and many sakes and shochu (Tabelog shop text) · live abalone and live rock oysters raw or cooked, monkfish, tiger fugu, winter buri, autumn matsutake; grilled live abalone, sashimi platters, uni grilled rice balls, shabu-shabu of fresh Hokkaido octopus (Tabelog shop text) · courses with drinks: ¥6,000 course of appetiser, salad, sashimi, octopus shabu-shabu, fried fish, simmered shellfish and udon to finish, with a hot pot of octopus, yellowtail or sea bream; sea-bream head simmered or grilled +¥1,800 (January 2026); Senzen course of wasabi salad, seafood and tobiko salad, four-kind sashimi, duck breast, seafood skewer, fried potatoes, fried oysters, chicken and jellyfish salad, negitoro rice (January 2026); Chizuru course (November 2025); Yuetsu course of 9 dishes with junmai daiginjo (March 2026) · "gout hot pot" (March and December 2025) · buri shabu (June 2026) · salmon kizushi, firefly squid in soy, butter-soy scallops (February 2025) · yellowtail skewers, goya tempura (August 2025) · tempura, shrimp mayo, tempura rice balls (July 2026)',
    website: null, gmaps: gm('旬彩和食くつろぎ 東心斎橋'), menu_url: null,
    notes: '[Seafood izakaya · Higashi-Shinsaibashi, sake and seafood by reservation] A second-floor seafood izakaya near Nagahoribashi, open only by booking, with sunken-kotatsu rooms and a long sake and shochu list. Book a course: sashimi, an octopus or yellowtail shabu-shabu and the grilled seafood skewers, with all-you-can-drink; the "gout hot pot" is the showpiece. Many small charges stack up (cover, seat, 5% service, 10% after 22:00), and smoking is allowed in parts of the room.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): opened 9 October 2010; reservation only; staff choose seafood daily; creative Japanese cooking with seasonal vegetables.', philosophy: null, specialty: 'Seafood courses; "gout hot pot".',
      anecdotes: [
        { text: '"I thought the place would be noisy with young people since it was trending on social media, but the atmosphere was calm with mostly adult customers" — March 2025.', source: R + 'B503289763/' },
        { text: '"The sashimi was garnished with sea bream head, and for an additional JPY 1,800, you could have it as simmered or grilled" — January 2026, a New Year party course.', source: R + 'B521193118/' },
        { text: '"It was quite cold because the entrance door wasn\'t closed properly. You can smoke inside the restaurant." — March 2026.', source: R + 'B524706171/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 海鮮魚介と日本酒 旬彩和食くつろぎ、居酒屋・ふぐ・あんこう、大阪市中央区東心斎橋1-9-19 ミトオリアートビル 2F、長堀橋駅5-A出口から徒歩2分、毎日17:00〜翌1:00、完全予約制、キャンセル料あり、チャージ660〜880円 (ペットも同じ)、席料220円、当日料金220円、サービス料5%、22時以降は深夜料金10%、カード・電子マネー・QR 決済可、約60席、掘りごたつと個室、分煙 (喫煙室あり)、2010年10月9日オープン。毎日仕入れる魚介と季節の野菜の創作和食、日本酒と焼酎、活けあわび、岩牡蠣、あんこう、とらふぐ、寒ブリ、松茸、ウニの焼きおにぎり、Hokkaido の生だこのしゃぶしゃぶ。口コミ(2025年2月〜2026年7月): 6,000円の飲み放題コース (たこしゃぶ、締めはうどん)、鯛のあら炊きは+1,800円、Senzen・Chizuru・Yuetsu のコース、「痛風鍋」、ブリしゃぶ、鮭の生寿司、ホタテのバター醤油、ブリの串、ゴーヤの天ぷら、天むす、席がせまいという声、店内でたばこが吸えるという声。',
      confidence: 'medium', sources: [TB, R + 'B467619738/', R + 'B496740559/', R + 'B499155195/', R + 'B503289763/', R + 'B509470406/', R + 'B511589253/', R + 'B516394251/', R + 'B519265199/', R + 'B521193118/', R + 'B524384424/', R + 'B524706171/', R + 'B528586641/', R + 'B529804288/', R + 'B530113599/', R + 'B531843387/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; set courses; partitioned rooms. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-9-19 ミトオリアートビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} 34.674669,135.504615 sits 1 m from 塩そば 時空 OSAKA (osaka_shio_soba_jikuu_osaka, same building 1F); pin offset to 34.67473,135.50465, about 9 m from 時空 and 20 m from 希望軒 心斎橋長堀店. GSI 大阪府大阪市中央区東心斎橋一丁目9番19号 (go) is 5 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521193118/', TB],
    price_note: 'Course price from a January 2026 review; charges from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Course with all-you-can-drink (sashimi, octopus shabu-shabu, fried fish, simmered shellfish, udon)', '¥6,000', 'Course', 'no', 'no', 'January 2026 review.', 'course_6000'),
      it('', '', 'Sea-bream head, simmered or grilled (add-on)', '+¥1,800', 'Course add-on', 'ask', 'no', 'January 2026 review.', 'tai_kabuto'),
      it('', '', '"Gout hot pot"', '', 'Hot pot', 'ask', 'no', 'March and December 2025 reviews.', 'tsufu_nabe'),
      it('', '', 'Grilled seafood skewers', '', 'Grill', 'ask', 'no', 'August 2025 and March 2026 reviews.', 'gyokai_kushi'),
    ] }, {
    cuisine: '完全予約制の海鮮居酒屋で、毎日仕入れる魚と季節の野菜の創作和食、日本酒と焼酎がたくさん (食べログの店の紹介)・活けあわびと活けの岩牡蠣を生でも火を通しても、あんこう、とらふぐ、冬の寒ブリ、秋の松茸。活けあわびの焼き物、刺身の盛り合わせ、ウニの焼きおにぎり、Hokkaido の生だこのしゃぶしゃぶ (食べログの店の紹介)・飲み放題つきのコース: 前菜、サラダ、刺身、たこしゃぶ、揚げ魚、貝の煮物、締めのうどんの6,000円のコースで、鍋はたこ、ぶり、鯛から選ぶ。刺身に添えた鯛の頭は+1,800円で煮付けか焼き物に (2026年1月)、わさびサラダ、海鮮ととびこのサラダ、刺身4種、鴨ロース、名物の魚介の串、皮つきのフライドポテト、カキフライ、鶏とくらげのサラダ、ねぎとろご飯のコース (2026年1月)、別のコース (2025年11月)、純米大吟醸つきの9品のコース (2026年3月)・「痛風鍋」(2025年3月・12月)・ブリしゃぶ (2026年6月)・鮭の生寿司、ホタルイカの醤油漬け、ホタテのバター醤油 (2025年2月)・ブリの串、ゴーヤの天ぷら (2025年8月)・天ぷら、エビマヨ、天むす (2026年7月)',
    neighborhood: '東心斎橋1-9-19 ミトオリアートビル 2F。長堀橋駅5-A出口から徒歩2分、心斎橋駅から徒歩4〜5分',
    gf_detail: '要確認。グルテンの情報なし。コースには刺身、締めがうどんか雑炊の鍋、天ぷら、カキフライ、魚介の焼き串がある。',
    vegan_detail: 'ヴィーガンではありません。刺身、あわび、ふぐ、あんこう、魚の鍋の海鮮居酒屋。',
    notes: '[海鮮居酒屋・東心斎橋、予約制の日本酒と海鮮] 長堀橋近くのビルの2階、予約のみの海鮮居酒屋で、掘りごたつの個室と日本酒・焼酎の長いリスト。コースを予約して、刺身、たこかぶりのしゃぶしゃぶ、魚介の焼き串を飲み放題と。見せ場は「痛風鍋」。チャージ、席料、サービス料5%、22時以降は10%と細かい料金が重なる。店内の一部で喫煙可。',
  });
}

save();
