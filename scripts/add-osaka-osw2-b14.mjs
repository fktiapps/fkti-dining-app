// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 14 (lane: Tabelog id mod 4 = 1).
//   + Pizzeria & Trattoria Bar Table Nice なんばパークス店 (all-day pizzeria, café and bar with a terrace on Namba Parks 2F; Balnibarbi)
//   + 九州の旬 博多廊 法善寺店 Hakata-ro Hozenji (Kyushu food over four floors of private rooms by Hozenji: live squid, motsunabe, mizutaki)
//   + 冷麺館 心斎橋店 Reimenkan Shinsaibashi (Korean restaurant since 2000 with handmade cold noodles; main shop in Ikuno)
//   + 故郷羊肉串店 Kokyo lamb skewers (Northeast-Chinese lamb skewers and home cooking in Shimanouchi; owner from Yanji, Jilin)
//   No skips: the first four lane candidates were all kept.
//   Chain check:
//   - Table Nice: the official site (© BALNIBARBI Co.,Ltd.) shows one Table Nice; Balnibarbi's ムーラン is in data
//     (osaka_moulin_minamihorie), a different concept, so drafted as a sister concept under the 2026-11-02 ruling.
//   - Hakata-ro: four shops of the Kato Pleasure Group (法善寺店, 大阪店 at Nakanoshima, 福岡本店, 西中洲店; hakatarou-houzenji.jp shop
//     list); none in data. Small group (2–4, none in data): kept; flagged.
//   - Reimenkan: the Tabelog menu names the main shop in Ikuno-ku; a September 2026 diner has eaten at a Kitashinchi branch.
//     Three shops seen, none in data; the official site (reimenkan.com) did not respond. Small group: kept; flagged.
//   - Kokyo: one shop (Tabelog).
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka', TODAY, 'osw2-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Table Nice なんばパークス店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27110441/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://tablenice.jp/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_table_nice_namba_parks', name: 'Pizzeria & Trattoria Bar Table Nice なんばパークス店 (Table Nice Namba Parks)', category: 'OMNI',
    lat: 34.661574, lng: 135.50193, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pizza, pasta, the lunch bread buffet and cakes make up much of the menu; carpaccio, ajillo and salumi are not described (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: no vegan options are described; the menu is meat, seafood and cheese (Tabelog menu).',
    hours_raw: 'Daily 11:00–23:00: lunch 11:00–15:00 (last order), dinner 17:00–23:00 (last order 22:00), café and bar 11:00–23:00 (last order 22:30); closing days follow Namba Parks (Tabelog). The official site gives café and bar last order 22:30 and dinner last order 22:00, and 89 seats (65 inside, 24 terrace) against Tabelog\'s 85 (65 and 20). Reservations: seat-only bookings must order food; no café-only bookings; no bookings for the 12 o\'clock hour; one drink each at dinner (Tabelog). A service charge may be added (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and transport IC and other e-money; no QR. Curtained private rooms for 5–10 (Tabelog). Orders by QR code (October 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nambanaka 2-10-70, Namba Parks 2F (Naniwa-ku) — direct from Nankai Namba central and south exits; 3 min from Namba Stn (Midosuji Line)',
    cuisine: 'All-day pizzeria, trattoria, café and bar: seasonal pizzas (Awaodori chicken cacciatore, sanma marinara-style), pastas, assorted appetizers, carpaccio, ajillo, salumi and cheese (Tabelog menu, October 2026) · lunch with a buffet of about 20 breads, soup curry, soup and rice with a main (September 2026 review) · cakes and parfaits: Basque cheesecake, pistachio-raspberry chiboust, celebration plates; colourful mocktails (reviews) · courses from ¥3,000',
    website: SITE, gmaps: gm('Table Nice なんばパークス'), menu_url: M,
    notes: "[Italian · Namba Parks, all-day pizzeria and terrace café] A big, resort-style pizzeria, café and bar on the 2nd floor of Namba Parks, with a terrace by the Starbucks and a glass front, open from 11 AM to 11 PM. Lunch comes with a buffet of about 20 breads, soup curry and soup; in the afternoon it is a café for cakes and big parfaits, and at night a place for pizza, ajillo and wine. Diners in 2026 like the terrace, the seasonal pizzas and the desserts; one found the fettuccine came out so fast it might have been pre-made, and one thought a single pizza in a ¥3,000 course was thin for three. Orders are by QR code.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; a restaurant of BALNIBARBI Co.,Ltd. (official site)'], origin: null, background: 'The official site shows the © of BALNIBARBI Co.,Ltd. and lists lunch, café & bar and dinner times at Namba Parks 2F. Tabelog gives the opening as 29 April 2019.', philosophy: null, specialty: 'Seasonal pizza; lunch bread buffet; desserts.',
      anecdotes: [
        { text: '"When you order a main dish, you can enjoy all-you-can-eat from about 20 types of bread, soup curry, soup, and rice." — September 2026, lunch.', source: R + 'B536549440/' },
        { text: '"The fettuccine pasta was chewy, but it was served in under 5 minutes, so it might have been pre-made." — September 2026.', source: R + 'B536549440/' },
        { text: '"Through the large glass windows, the interior exudes a stylish vibe reminiscent of a resort destination abroad." — October 2026.', source: R + 'B536893464/' },
        { text: '"I ordered the Basque cheesecake, which was so rich and creamy that it felt like I was eating cheese itself—it was absolutely delicious!" — October 2026, night café.', source: R + 'B537652726/' },
      ],
      japanese_sources_summary: '公式サイト: なんばパークス2F、南海なんば駅中央口・南口直結、御堂筋線なんば駅から徒歩3分、LUNCH 11:00〜15:00 (L.O.)、CAFE&BAR 11:00〜22:30 (L.O.)、DINNER 17:00〜22:00 (L.O.)、定休日は施設に準ずる、全89席 (店内65、テラス24)、© BALNIBARBI Co.,Ltd.。食べログ (英語版): 2019年4月29日オープン、毎日11:00〜23:00、85席 (店内65、テラス20)、カーテンで仕切る個室 (5〜10名)、席のみの予約は料理の注文が必要、カフェのみの予約不可、12時台の予約不可、夜はワンドリンク制、サービス料がかかる場合あり。メニュー (2026年10月): 季節のピザ (Awaodori chicken のカチャトーラ、Sanma のマリナーラ風)、パスタ、前菜盛り合わせ、カルパッチョ、アヒージョ、生ハム、チーズ。口コミ (2026年6月〜10月): ランチは約20種のパン、スープカレー、スープ、ライスの食べ放題付き、テラス席、パフェ、バスクチーズケーキ、ピスタチオとラズベリーのシブースト、記念日プレート、モクテル、QRコードで注文、フェットチーネが早すぎて作り置きかもという声、3,000円のコースのピザ1枚は3人には少ないという声。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B530013988/', R + 'B536511899/', R + 'B536549440/', R + 'B536893464/', R + 'B536964011/', R + 'B537495232/', R + 'B537632158/', R + 'B537652726/', R + 'B537654828/', R + 'B538392230/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders by QR code (October 2026). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中2-10-70 なんばパークス 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing with an October 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (kept: inside Namba Parks; GSI 大阪府大阪市浪速区難波中二丁目10番70号 (go) gives the complex point 112 m away). Same complex as 魚魚魚 (osaka_gyogyogyo_namba_parks, "…なんばパークス 6F"), whose pin is about 9 m away, so not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026, tax included; a service charge may be added; one drink each at dinner. Courses from ¥3,000 (October 2026). Diners report ¥1,000–4,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizers (2–3 people)', '¥2,530', 'À la carte', 'ask', 'no', 'Petite ¥1,210.', 'antipasto_misto'),
      it('', '', 'Sanma marinara-style pizza', '¥1,870', 'Pizza (seasonal)', 'no', 'no', 'Autumn 2026.', 'sanma_pizza'),
      it('', '', 'Soft-shell shrimp and autumn vegetable ajillo', '¥1,540', 'Seasonal', 'ask', 'no', '', 'ajillo'),
      it('', '', 'Buffalo mozzarella and fruit tomato caprese', '¥1,320', 'Cold appetizers', 'ask', 'no', '', 'caprese'),
    ] }, {
    cuisine: '一日中のピッツェリア、トラットリア、カフェ、バー: 季節のピザ (Awaodori chicken のカチャトーラ、Sanma のマリナーラ風)、パスタ、前菜盛り合わせ、カルパッチョ、アヒージョ、生ハムとサラミ、チーズ (食べログのメニュー、2026年10月)・ランチはメインに約20種のパン、スープカレー、スープ、ライスの食べ放題付き (2026年9月の口コミ)・バスクチーズケーキ、ピスタチオとラズベリーのシブースト、記念日プレートなどのケーキとパフェ、色鮮やかなモクテル (口コミ)・コース3,000円〜',
    neighborhood: '浪速区難波中2-10-70 なんばパークス 2F。南海なんば駅中央口・南口直結、なんば駅 (御堂筋線) から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ピザ、パスタ、ランチのパン食べ放題、ケーキが多い。カルパッチョ、アヒージョ、生ハムの説明はない (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。ヴィーガンの選択肢の説明はなく、メニューは肉、魚介、チーズ (食べログのメニュー)。',
    notes: '[イタリアン・なんばパークス、一日中のピッツェリアとテラスカフェ] なんばパークス2階、スターバックスのそばにテラス、ガラス張りの正面のリゾート風の大きなピッツェリア、カフェ、バー。朝11時から夜11時まで。ランチは約20種のパン、スープカレー、スープの食べ放題付き。午後はケーキや大きなパフェのカフェ、夜はピザ、アヒージョ、ワイン。2026年の客はテラス、季節のピザ、デザートを褒める。フェットチーネが早く出すぎて作り置きかもと感じた客や、3,000円のコースでピザ1枚は3人には少ないと感じた客も。注文はQRコード。',
  });
}

// ================================================================ 九州の旬 博多廊 法善寺店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27099677/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'http://hakatarou-houzenji.jp/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_hakataro_hozenji', name: '九州の旬 博多廊 法善寺店 (Kyushu no Shun Hakata Ro Houzenji ten)', category: 'OMNI',
    lat: 34.668148, lng: 135.502045, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu mixes sashimi, horse sashimi and grilled dishes with tempura, kara-age, chicken nanban, dumplings, a ramen salad and hot pots (Tabelog menu); soy sauce and broths are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Kyushu seafood, chicken and offal restaurant; no vegan options are described.',
    hours_raw: 'Daily 11:30–15:00 (last order 14:00) and 17:00–23:00 (last order 22:00); open year-round, including the year-end and New Year holidays (Tabelog; official site). Reservations taken, five or more by phone; weekday lunch bookings for one person possible online (July 2026 review). ¥500 cover charge with à la carte, not with courses (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. 40 seats: a first-floor counter and private rooms over four themed floors for 2–20; whole-shop hire for 20–50; non-smoking (Tabelog; reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-6-21, by Hozenji — 3 min from Namba Stn exit 14 (Midosuji Line)',
    cuisine: 'Kyushu food from around the island (Tabelog): live squid sashimi (when in stock), Kumamoto horse sashimi, seasonal sashimi, Hakata motsunabe and mizutaki, Hakata ramen salad, mentaiko rolled omelette, karashi renkon, Nakatsu kara-age, Miyazaki chicken nanban, Beppu chicken tempura, steamed sea-bream head, squid shumai (Tabelog menu, August 2026) · lunch sets: tempura and sushi, black-wagyu sukiyaki, Kyushu chicken rice (reviews) · Kyushu shochu and sake; courses with all-you-can-drink',
    website: SITE, gmaps: gm('博多廊 法善寺店'), menu_url: M,
    notes: "[Izakaya · Hozenji, Kyushu food with private rooms] A Kyushu restaurant by Hozenji, opened in August 2017, with a counter on the ground floor and private rooms over four themed floors, used for business dinners, celebrations and quiet lunches. The menu travels the island: live Yobuko-style squid when it can be had, Kumamoto horse sashimi, Hakata motsunabe and mizutaki, Miyazaki chicken nanban and the Hakata ramen salad. An eight-visit regular notes the squid is often sold out, especially on holidays, and booking a day ahead helps. Weekday lunch sets can be booked for one. Diners in 2026 praise the calm rooms and the service.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; a shop of the Kato Pleasure Group (official site)'], origin: null, background: 'Per the official site (カトープレジャーグループ), Hakata-ro has four shops: Hozenji, Osaka (Mitsui Garden Hotel Osaka Premier, Nakanoshima), Fukuoka main shop (Daimyo) and Nishi-Nakasu. Tabelog describes Kyushu as surrounded by sea with mountains inland, its ingredients "bold and delicate, simple yet expressive", and lists four uniquely themed floors of private rooms. A September 2026 diner recalls opening in 2017.', philosophy: '"Bold and delicate, simple yet expressive" Kyushu ingredients (Tabelog).', specialty: 'Live squid sashimi; Hakata motsunabe; mizutaki.',
      anecdotes: [
        { text: '"I always go there hoping to have squid, but it’s hard to find it in stock, especially during holidays." — September 2026, eighth visit.', source: R + 'B422126666/' },
        { text: '"It\'s rare to find a place that allows solo reservations for weekday lunches, so this was a valuable find." — July 2026, first lunch.', source: R + 'B531093628/' },
        { text: '"After the 2-hour course, we enjoyed an all-you-can-drink plan in the free space on the 4th floor." — September 2026, farewell party.', source: R + 'B535107594/' },
      ],
      japanese_sources_summary: '公式サイト (カトープレジャーグループ): 博多廊 法善寺店、難波1-6-21、ランチ11:30〜15:00 (L.O.14:00)、ディナー17:00〜23:00 (L.O.22:00)。店舗: 法善寺店、大阪店 (中之島3-4-15 三井ガーデンホテル大阪プレミア2F、モーニングあり)、福岡本店 (大名1-1-38 サウスサイドテラス5F)、西中洲店。食べログ (店舗会員、英語版): 2017年8月26日オープン、年中無休、年末年始も通常営業、お通し500円 (コースは除く)、40席、個室 (2〜20名)、貸切20〜50名、禁煙、4つのテーマの階の個室、九州各地の料理と Shochu・日本酒。メニュー (2026年8月): 活いか刺し100g 2,280円〜、Kumamoto 直送の馬刺し、季節の刺身、博多の Ramen サラダ、Mentaiko の Dashimaki、Karashi renkon、Nakatsu の Kara-age、Miyazaki のチキン Nanban、Beppu の chicken tempura、鯛のアラの蒸し物、いかの Shumai、Motsunabe、Mizutaki。口コミ (2026年7月〜10月): いかは品切れが多く特に休日は難しい、前日の予約で Yobuko のいか、1人でも平日ランチ予約可、Tempura と sushi のランチ、黒毛和牛の Sukiyaki 定食、鶏ご飯、4階のフリースペースで飲み放題、落ち着いた個室、接待向き。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B422126666/', R + 'B507530533/', R + 'B511473352/', R + 'B531093628/', R + 'B533412832/', R + 'B534912065/', R + 'B535107594/', R + 'B536215768/', R + 'B537076122/', R + 'B537663325/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; book by phone for five or more. No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-6-21',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and shop-maintained (corporate-member) Tabelog listing with an August 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目6番21号 (go) 5m. Nearest record サロン・ド・テ アルション (osaka_salon_de_the_alcyon_hozenji, "…難波1-6-20", a different building) is about 12 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB, R + 'B511473352/'],
    price_note: 'Tabelog menu last updated August 2026, tax included; ¥500 cover charge with à la carte. Diners report ¥1,000–2,999 at lunch and ¥5,000–14,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Live squid sashimi, per 100 g', '¥2,280', 'Sashimi', 'ask', 'no', 'From ¥2,280; often sold out.', 'ikizukuri_squid'),
      it('', '', 'Kumamoto horse sashimi, three kinds', '¥2,180', 'Sashimi', 'ask', 'no', '', 'basashi'),
      it('', '', 'Hakata ramen salad', '¥980', 'Vegetables', 'no', 'no', 'Specialty.', 'ramen_salad'),
      it('', '', 'Miyazaki chicken nanban', '¥980', 'Fried', 'no', 'no', 'Half ¥530.', 'chicken_nanban'),
      it('', '', 'Mentaiko rolled omelette', '¥980', 'Kyushu dishes', 'ask', 'no', '', 'mentai_dashimaki'),
    ] }, {
    cuisine: '九州各地の料理 (食べログ): 活いか刺し (入荷時)、Kumamoto 直送の馬刺し、季節の刺身、博多の Motsunabe と Mizutaki、博多の Ramen サラダ、Mentaiko の Dashimaki、Karashi renkon、Nakatsu の Kara-age、Miyazaki のチキン Nanban、Beppu の chicken tempura、鯛のアラの蒸し物、いかの Shumai (食べログのメニュー、2026年8月)・ランチ: Tempura と sushi、黒毛和牛の Sukiyaki、九州の鶏ご飯 (口コミ)・九州の Shochu と日本酒、飲み放題付きコース',
    neighborhood: '難波1-6-21、法善寺のそば。なんば駅14番出口 (御堂筋線) から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。刺身、馬刺し、焼き物のほか、Tempura、Kara-age、チキン Nanban、餃子、Ramen サラダ、鍋がある (食べログのメニュー)。しょうゆや出汁の説明はない。',
    vegan_detail: 'ヴィーガンではありません。九州の魚介、鶏、もつの店で、ヴィーガンの選択肢の説明はない。',
    notes: '[居酒屋・法善寺、個室のある九州料理] 法善寺のそば、2017年8月オープンの九州料理の店。1階はカウンター、4つのテーマの階に個室があり、接待、お祝い、静かなランチに使われる。メニューは九州をめぐり、入荷すれば Yobuko のいか、Kumamoto の馬刺し、博多の Motsunabe と Mizutaki、Miyazaki のチキン Nanban、博多の Ramen サラダ。8回通う常連は、いかは品切れが多く、特に休日は難しいと書き、前日の予約が役立つという客も。平日ランチは1人でも予約できる。2026年の客は落ち着いた個室とサービスを褒める。',
  });
}

// ================================================================ 冷麺館 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27004305/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const L = ['11:30', '15:00'];
  const MW = day(L, ['17:30', '22:00']); const F = day(L, ['17:30', '22:30']); const SA = day(L, ['17:00', '22:30']); const SU = day(L, ['17:00', '22:00']);
  put({
    id: 'osaka_reimenkan_shinsaibashi', name: '冷麺館 心斎橋店 (Korean Cold Noodles Kan Shinsaibashi ten)', category: 'OMNI',
    lat: 34.674706, lng: 135.503128, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The handmade cold noodles are not described; the menu also has chijimi, bibim noodles, hot pot with udon or ramen to finish, and yakiniku (Tabelog menu; reviews). Tabelog asks diners to note allergies when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Korean restaurant of yakiniku, soups and hot pots; the cold-noodle broth and kimchi are not described.',
    hours_raw: 'Mon–Wed 11:30–15:00 (last order 14:30) and 17:30–22:00 (last order 21:30); Fri the same until 22:30; Sat 11:30–15:00 and 17:00–22:30; Sun 11:30–15:00 and 17:00–22:00; closed Thursday, subject to change (Tabelog). Reservations taken; no time limit except 2 hours when busy; allergies and dislikes can be noted when booking (Tabelog). Cards (VISA, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). Set meals at dinner too (September 2026 review).',
    hours: { 0: MW, 1: MW, 2: MW, 4: F, 5: SA, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-19-23, 尾形ビル 1F — 5 min from Shinsaibashi Stn; 7 min from Nagahoribashi Stn',
    cuisine: 'Korean restaurant built on handmade cold noodles, opened so that cold noodles could be a casual meal as in Ikuno, where the main shop is (Tabelog menu) · cold noodles with chewy handmade noodles and a light broth, bone-in kalbi cold noodles, bibim noodles; samgyeopsal, chijimi, steamed pork, tail soup, kimchi stew, tetchan hot pot with udon or ramen to finish; set meals (yakiniku, kalbi soup, tail soup) with rice; lunch sets with bibimbap or cold noodles (Tabelog menu, February 2025; reviews)',
    website: TB, gmaps: gm('冷麺館 心斎橋店'), menu_url: M,
    notes: "[Korean · Higashi-Shinsaibashi, handmade cold noodles since 2000] A Korean restaurant five minutes from Shinsaibashi Station, there since 2000, the Minami shop of a cold-noodle house whose main shop is in Ikuno-ku, where cold noodles are an everyday meal like udon. The handmade noodles are chewy in a light broth; diners in 2026 also order the samgyeopsal, chijimi, steamed pork, tail soup and hot pot, and praise the kimchi served alongside. Portions are made for sharing. A regular of 20 years calls everything delicious and cheap; a September 2026 diner who knows the Kitashinchi branch felt less satisfied here. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed (Tabelog)'], origin: null, background: 'Per the Tabelog menu, the main shop is in Ikuno-ku, an area with many Korean residents of Japan, where cold noodles are as casual a choice as udon or okonomiyaki; usually eaten to finish a yakiniku meal, so the house created a place to enjoy a bowl of cold noodles on its own. Per Tabelog, the Shinsaibashi shop has been in Minami for 26 years (opened 18 April 2000) and promoted Korean food long before the recent Korean wave.', philosophy: '"A place where you can casually enjoy a bowl of cold noodles" (Tabelog menu).', specialty: 'Handmade cold noodles.',
      anecdotes: [
        { text: '"The noodles are handmade, with a strong chewy texture that pairs perfectly with the light broth." — September 2026, bone-in kalbi cold noodles.', source: R + 'B535990362/' },
        { text: '"I\'ve been coming to this restaurant for over 20 years since I was a child." — September 2026.', source: R + 'B536052532/' },
        { text: '"For some reason, my satisfaction level felt different from the Kitashinchi branch." — September 2026, first visit to Shinsaibashi.', source: R + 'B537351834/' },
        { text: '"The kimchi that came as a side was incredibly tasty!" — July 2026, bibimbap set with cold noodles.', source: R + 'B531415950/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認 (公式サイト reimenkan.com は応答なし)。食べログ (英語版): 冷麺館 心斎橋店、東心斎橋1-19-23 尾形ビル1F、2000年4月18日オープン、ミナミで26年、韓流ブームの前から韓国料理、手作りの冷麺、Kimchi stew、Samgyeopsal、Chijimi、月〜水11:30〜15:00・17:30〜22:00、金は22:30まで、土11:30〜15:00・17:00〜22:30、日11:30〜15:00・17:00〜22:00、木曜休み、予約時にアレルギーや苦手な食材を記入可、混雑時は2時間制。メニュー (2025年2月): 本店のある Ikuno では冷麺が udon や okonomiyaki と同じくらい気軽、Yakiniku の締めの冷麺を気軽な一杯にと冷麺館が生まれた、セット、定食 (Yakiniku、Kalbi スープ、テールスープ)、Tetchan 鍋 (締めは udon か ramen)。口コミ (2026年7月〜9月): 手作りの麺のもちもち感とあっさりスープ、骨付き Kalbi の冷麺1,750円、Bibim 麺、Samgyeopsal、蒸し豚、テールスープ、付け合わせの Kimchi、量が多く分け合う、20年通う客、Kitashinchi の店の方が満足という声。',
      confidence: 'medium', sources: [TB, M, R + 'B510242045/', R + 'B531247152/', R + 'B531415950/', R + 'B532701924/', R + 'B534212576/', R + 'B535104740/', R + 'B535990362/', R + 'B536050358/', R + 'B536052532/', R + 'B537351834/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-19-23 尾形ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026. The official site (reimenkan.com) did not respond on 2026-11-02.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目19番23号 (go) 3m. Nearest record (osaka_mugen_next_halal_ramen, "…東心斎橋1-19-22", a different building) is about 15 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [M, TB, R + 'B535990362/'],
    price_note: 'Tabelog menu last updated February 2025, tax included. Bone-in kalbi cold noodles ¥1,750 (September 2026). Diners report ¥1,000–5,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Bone-in kalbi cold noodles', '¥1,750', 'Cold noodles', 'ask', 'no', 'September 2026.', 'kalbi_reimen'),
      it('', '', 'Tail soup set meal', '¥1,650', 'Set meals', 'ask', 'no', 'Menu 2025.', 'tail_soup_set'),
      it('', '', 'Tetchan hot pot, small, with udon or ramen to finish', '¥2,480', 'Hot pot', 'no', 'no', 'Menu 2025.', 'tetchan_nabe'),
      it('', '', 'Set A: two handmade cold noodles, chijimi, salted tongue', '¥4,050', 'Sets', 'no', 'no', 'Menu 2025.', 'set_a'),
    ] }, {
    cuisine: '手作りの冷麺を軸にした韓国料理店。本店のある Ikuno のように冷麺を気軽な一杯にと生まれた (食べログのメニュー)・もちもちの手作りの麺とあっさりスープの冷麺、骨付き Kalbi の冷麺、Bibim 麺。Samgyeopsal、Chijimi、蒸し豚、テールスープ、Kimchi stew、締めが udon か ramen の Tetchan 鍋。ご飯付きの定食 (Yakiniku、Kalbi スープ、テールスープ)、Bibimbap や冷麺のランチセット (食べログのメニュー、2025年2月、口コミ)',
    neighborhood: '東心斎橋1-19-23 尾形ビル1F。心斎橋駅から徒歩5分、長堀橋駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。手作りの冷麺の説明はなく、Chijimi、Bibim 麺、締めが udon か ramen の鍋、Yakiniku もある (食べログのメニュー、口コミ)。食べログでは予約時にアレルギーを記入できる。',
    vegan_detail: 'ヴィーガンではありません。Yakiniku、スープ、鍋の韓国料理店で、冷麺のスープや Kimchi の説明はない。',
    notes: '[韓国料理・東心斎橋、2000年からの手作り冷麺] 心斎橋駅から5分、2000年からの韓国料理店で、Ikuno に本店がある冷麺の店のミナミの店。Ikuno では冷麺は udon のような日常の食事。手作りの麺はもちもちで、スープはあっさり。2026年の客は Samgyeopsal、Chijimi、蒸し豚、テールスープ、鍋も頼み、付け合わせの Kimchi を褒める。量は分け合う前提。20年通う常連はどれもおいしく安いと言い、Kitashinchi の店を知る2026年9月の客はここでは満足度が違ったと書く。木曜休み。',
  });
}

// ================================================================ 故郷羊肉串店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27005197/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_kokyo_yoniku_kushi_shimanouchi', name: '故郷羊肉串店 (Fushang Ryang Ruchai Ten)', category: 'OMNI',
    lat: 34.669243, lng: 135.508499, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The skewers are seasoned with chili, sesame and cumin; the menu also has dumplings, glass noodles and sauced stir-fries (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a lamb-skewer and Northeast-Chinese restaurant; vegetable stir-fries such as eggplant, pepper and potato are not described.',
    hours_raw: 'Daily 17:00–24:00 (last order 23:00) (Tabelog). Reservations taken; a January 2026 pair walked in. No cards or e-money; PayPay accepted (Tabelog). 64 seats incl. tatami; non-smoking; private hire for 20 or more (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimanouchi 2-17-22, by the Dotonbori River — 5 min from Nippombashi Stn exit 6',
    cuisine: 'Lamb skewers and home cooking of Northeast China, based on the lamb food of Yanji, Jilin, where the owner was born (Tabelog) · mutton skewers with chili, sesame and cumin grilled over charcoal at the table, lamb tendon, heart, cartilage and spare-rib skewers; stir-fries such as di san xian (eggplant, pepper, potato), garlic sprouts with pork, tomato and egg, mapo eggplant, sweet and sour pork, offal; boiled dumplings, fried rice, Northeast vegetables (Tabelog menu, October 2026; reviews) · Qingdao beer, Chinese liquor',
    website: TB, gmaps: gm('故郷羊肉串店 島之内'), menu_url: M,
    notes: "[Chinese · Shimanouchi, Yanji-style lamb skewers] A Northeast-Chinese restaurant near the Dotonbori River, run on the lamb cooking of Yanji in Jilin, where the owner grew up: small cubes of mutton dusted with chili, sesame and cumin and grilled over charcoal at your table, ¥220 a skewer in September 2026. Regulars come back for the skewers with Qingdao beer, the di san xian of eggplant, pepper and potato and the boiled dumplings; portions are big and made for groups. A January 2026 diner found all the floor staff were from China and the flavours like a trip there; a March diner was sometimes unsure of being understood in Japanese. The street around it has Chinese shops and a Chinese grocery across the road. Pay by cash or PayPay; no cards.",
    chef_bio: { chef_name: null, roles: ['Owner unnamed, born and raised in Yanji, Jilin, China (Tabelog)'], origin: 'Yanji, Jilin Province, China (Tabelog)', background: 'Per Tabelog, the dishes are based on the lamb cuisine of Yanji City in Jilin Province, where the owner was born and raised; lamb leg is grilled over charcoal on a grill set at the table, and lamb is presented as high-protein and low-fat. Tabelog gives the opening as 29 June 2002.', philosophy: '"Deliciousness without borders" (Tabelog).', specialty: 'Mutton skewers with cumin and chili.',
      anecdotes: [
        { text: '"As of September 2026, lamb skewers are priced at a very affordable JPY 220." — September 2026.', source: R + 'B536038200/' },
        { text: '"All the staff in the dining area were from China." — January 2026.', source: R + 'B535518497/' },
        { text: '"The potatoes are fluffy, the eggplant is tender, and the bell peppers are perfectly cooked and incredibly tasty." — October 2026, di san xian.', source: R + 'B503102598/' },
        { text: '"I can feel that a Chinatown is starting to form, with Chinese restaurants on both sides and across the street." — October 2026, first visit.', source: R + 'B536823711/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 故郷羊肉串店、島之内2-17-22、日本橋駅6番出口から徒歩約5分、道頓堀川沿い、店主の出身地である中国 Jilin 省 Yanji 市の羊料理がもと、テーブルの炭火で焼く羊のもも肉、毎日17:00〜24:00 (L.O.23:00)、カード・電子マネー不可、PayPay可、64席、座敷、禁煙、20名以上で貸切。メニュー (2026年10月): 羊肉串220円 (唐辛子、ごま、クミン、炭火)、羊のすじ、ハツ、軟骨、スペアリブの串、Di san xian (なす、ピーマン、じゃがいも)、にんにくの芽と豚肉炒め、トマトと卵炒め、Mapo なす、酢豚、ホルモン炒め。口コミ (2026年1月〜10月): 羊肉串と Qingdao ビール、Di san xian、水餃子、チャーハン、東北の野菜、量が多くグループ向き、ホールのスタッフは全員中国出身 (1月)、日本語が通じているか不安な時があったという声 (3月)、向かいに中国食材店、60歳の誕生日祝いにも。',
      confidence: 'medium', sources: [TB, M, R + 'B262121023/', R + 'B503102598/', R + 'B503876513/', R + 'B515897274/', R + 'B522778569/', R + 'B526457084/', R + 'B535518497/', R + 'B536038200/', R + 'B536823711/', R + 'B538128961/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'All the floor staff were from China (January 2026); a March 2026 diner was sometimes unsure of being understood in Japanese. No English menu found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区島之内2-17-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an October 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区島之内二丁目17番22号 (go) 15m. Nearest record (osaka_anhui_gyuniku_hanmen_shimanouchi, "…島之内2-10-9") is about 53 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026, tax included. Diners report ¥2,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Mutton skewer with chili, sesame and cumin', '¥220', 'Skewers', 'ask', 'no', 'Charcoal-grilled at the table.', 'yangrou_chuan'),
      it('', '', 'Lamb spare-rib skewer', '¥800', 'Skewers', 'ask', 'no', '', 'lamb_rib_skewer'),
      it('', '', 'Stir-fried eggplant, bell pepper and potato (di san xian)', '¥1,300', 'Stir-fry', 'ask', 'no', '', 'di_san_xian'),
      it('', '', 'Mapo eggplant', '¥1,500', 'Stir-fry', 'ask', 'no', '', 'mapo_eggplant'),
      it('', '', 'Chinese sweet and sour pork', '¥1,800', 'Stir-fry', 'ask', 'no', '', 'subuta'),
    ] }, {
    cuisine: '店主が生まれた中国 Jilin 省 Yanji の羊料理がもとの羊肉串と中国東北の家庭料理 (食べログ)・唐辛子、ごま、クミンをまぶしテーブルの炭火で焼く羊肉串、羊のすじ、ハツ、軟骨、スペアリブの串。Di san xian (なす、ピーマン、じゃがいも)、にんにくの芽と豚肉炒め、トマトと卵炒め、Mapo なす、酢豚、ホルモン炒め、水餃子、チャーハン、東北の野菜 (食べログのメニュー、2026年10月、口コミ)・Qingdao ビール、中国の酒',
    neighborhood: '島之内2-17-22、道頓堀川のそば。日本橋駅6番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。串は唐辛子、ごま、クミンの味付けで、餃子、春雨、タレの炒め物もある (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。羊肉串と中国東北料理の店で、なす、ピーマン、じゃがいもなどの野菜炒めの説明はない。',
    notes: '[中華・島之内、Yanji 風の羊肉串] 道頓堀川近くの中国東北料理の店で、店主が育った Jilin の Yanji の羊料理がもと。小さな角切りの羊肉に唐辛子、ごま、クミンをまぶし、テーブルの炭火で焼く。2026年9月で1本220円。常連は串と Qingdao ビール、なす・ピーマン・じゃがいもの Di san xian、水餃子のために通う。量が多くグループ向き。2026年1月の客はホールのスタッフが全員中国出身で、中国を旅しているような味だったと書き、3月の客は日本語が通じているか不安な時があったと書く。周りには中国の店が並び、向かいには中国食材店。支払いは現金かPayPayで、カードは使えない。',
  });
}

save();
