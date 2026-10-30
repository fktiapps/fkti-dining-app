// Osaka sweep (2-mile circle around Dotonbori), batch 214 — mom-phase clean-up: listings near the centre with 30+ reviews passed over without a skip() mark.
//   - 会津屋 なんばウォーク店 27095437 — skipped: branch of Aizuya (official site: 直営店舗 … あわせて11店舗); sister 会津屋 ナンバ店 27001205 in shops.jsonl
//   - 焼きたてチーズタルト専門店PABLO 心斎橋店 27066967 — skipped: PABLO national/overseas chain (official shop list, franchise recruiting)
//   + 長崎堂 心斎橋本店 Nagasaki Do Shinsaibashi honten (castella house founded 1919; head shop on this site since 1951, with a 10-seat tea room)
//   + 焼肉 福家 Yakiniku Fukuya (15-seat Dotonbori yakiniku and offal, Imari beef, salted tongue)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 214);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 会津屋 なんばウォーク店 — chain branch
skip('27095437', '会津屋 なんばウォーク店 (Aizuya Nanba u~o-ku ten): branch of Aizuya, the takoyaki house founded 1933 (Tabelog corporate-member listing; opening day 2016.11.11). The official site aiduya.com (read 2026-10-30) says 「直営店舗 大阪市内を中心に東京お台場店も あわせて11店舗」. Sister branch 会津屋 ナンバ店 27001205 (大阪府大阪市中央区難波5 なんなんタウン5号) is in shops.jsonl. Review: "Aizuya, the birthplace of takoyaki, has a branch in Namba Walk." (September 2026, B535819028); an October 2025 review (listing excerpt) mentions "Aizuya Honten". Not in data/osaka.json; 11-shop chain.');

// ================================================================ PABLO 心斎橋店 — chain
skip('27066967', '焼きたてチーズタルト専門店PABLO 心斎橋店 (Yakitate Cheese Tart Senmon Ten PABLO Shinsaibashi ten): PABLO cheese-tart chain (Tabelog corporate-member listing). The official site pablo3.com (read 2026-10-30) lists 販売店舗 「（イオンモール名取店／越谷レイクタウンmori店／心斎橋本店／ゆめタウン佐賀店）4店舗」 and 「PABLO mini …」 8店舗 in Japan, overseas shops in Macau (2) and Canada (5), and recruits franchisees (フランチャイズ加盟店募集). Review: "I visited the Yakitate Cheese Tart Senmon Ten PABLO Shinsaibashi branch." (September 2026, B535083248). National chain.');

// ================================================================ 長崎堂 心斎橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001437/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.nagasakido.com/'; const HIST = SITE + 'history/'; const SHOP = SITE + 'shop/'; const LINK = SITE + 'link/';
  const H = day(['10:00', '17:30']);
  put({
    id: 'osaka_nagasakido_shinsaibashi_honten', name: '長崎堂 心斎橋本店 (Nagasaki Do Shinsaibashi honten)', category: 'OMNI',
    lat: 34.671894, lng: 135.501883, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the house sweet is castella (a wheat sponge), and the dorayaki, Waffel wafers and pudding à la mode set are wheat-based too. The liqueur-filled Crystal Bonbon sugar candies and the red-rice sweet might be wheat-free, but no ingredient list was found — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: castella and dorayaki are made with egg, the Waffel has a cream filling, and there is pudding. No vegan statement; the sugar candies are unconfirmed — ask.',
    hours_raw: 'Mon, Tue, Thu–Sun 10:00–17:30; closed Wednesday (Tabelog; official shop page: 営業時間 10:00～17:30, 定休日 毎週水曜日). Hours may change (Tabelog). Reservations accepted (Tabelog); a May 2025 diner notes the red-rice sweet, sold only on the 1st and 15th of the month, can be reserved. Crystal Bonbons sell out: limit of two per person (May 2025 review; a September 2025 diner believed the same), and a May 2025 diner found a line just before the 10:00 opening. Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR payments accepted (Tabelog). 10 seats in the tea room, non-smoking, wheelchair access, children welcome, takeout (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-1-29, on Europe-dori (April 2025 review) — 2 min from Shinsaibashi Stn exit 6',
    cuisine: 'Castella house founded 1919, head shop with a 10-seat tea room · castella with crunchy coarse sugar on the base · Hon-ten set (main-store set) ¥1,100 with coffee or tea: Crystal Bonbon, Rainbow Fragments (kakera) sugar sweets, and castella or the red-rice sweet (May and June 2025) · Crystal Bonbon, sugar candies filled with anisette, maraschino and Cointreau, ¥2,160 a box (May 2025) · chestnut dorayaki ("Kuri Mikasa") ¥183 (March 2025), ¥184 (June 2026) · Ice Dorayaki set (August 2026) · pudding à la mode with a drink (April 2025) · red-rice sweet (赤米寿), sold only on the 1st and 15th · Waffel cream wafers · seasonal castellas: sakura (March 2025), a Myaku-Myaku Expo castella (October 2025) · iced coffee served with jelly (September 2026)',
    website: SITE, gmaps: gm('長崎堂 心斎橋本店'), menu_url: null,
    notes: '[Sweets · Shinsaibashi, a 1919 castella house and its tea room] The head shop of Nagasaki Do, a castella maker founded in Nagasaki in 1919 that moved to Osaka in 1924; the second-generation head put up its sign on this corner of Shinsaibashi-suji in 1951, and the building was renewed in 2013. Downstairs is the shop, with castella, dorayaki, Waffel cream wafers and the jewel-like Crystal Bonbons, thin sugar shells filled with three liqueurs, sold since around 1980 and still so popular that there is a limit of two per person and a line at opening. A small tea room serves the Hon-ten set, only at this shop: Crystal Bonbons, Rainbow Fragments (kakera) sugar sweets and a slice of castella (or the red-rice sweet), with coffee or a pot of tea, for ¥1,100. A big disc music box bought around 1973 still plays; one 2025 diner played it with a special coin. The red-rice sweet is sold only on the 1st and 15th of the month. Diners praise the moist castella with its crunchy sugar base and the kind staff; one April 2025 diner found the bonbons and castella ordinary. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: 'Nagasaki', background: 'Founded in 1919 (Taisho 8) as a castella shop in Dejima, Nagasaki, by the founder, a former Mitsubishi Nagasaki Shipyard employee; moved to Osaka in 1924 as 合資会社長崎堂. The second generation hung the 「本舗 長崎堂」 sign at this address in 1951; the head office is here. A canned castella patent (1934, a second in 1951) and a castella carried on the 1951 Annapurna expedition. Rebuilt in 1960 under the third generation, who in 1982 developed a "restored castella" from a late-Taisho recipe. The fourth generation became president in 2003; the shop was renewed in 2013 with the 「1919長崎堂」 line (all from the official history page). The official shop page lists two own shops (this one and Sumiyoshi) plus sales through supermarkets, airports and Shin-Osaka station. An October 2025 diner found its Waffel at the Expo 2025 official shop. The official group-company page names the Nagasaki Do group as the parent of three brands: Nagasaki Do, QUOLOFUNE (head shop in Jiyugaoka, Tokyo; quolofune.com) and Zen Kashoin (Kyoto; zen-kashoin.com).', philosophy: 'Honest ingredients, made with "the feeling of a mother feeding a child" (official site, 「母親が子どもに食べさせる気持ち」).', specialty: 'Castella; Crystal Bonbon; Hon-ten set in the tea room.',
      anecdotes: [
        { text: '"The presentation was beautiful, and the castella had a layer of crunchy sugar on the bottom, making it sweet and delicious… while waiting, I was able to listen to a mechanical music box!" — June 2025, Main Branch Set ¥1,100.', source: R + 'B510289824/' },
        { text: '"We arrived around 9:45 AM, just before opening. A few elegant ladies from Osaka started to line up. It seems this famous confectionery sells out quickly, with a limit of two pieces per person." — May 2025, Crystal Bonbon ¥2,160.', source: R + 'B507554864/' },
        { text: '"Inside the shop, there is a large disc organ, and I was able to play music with a special coin." — April 2025.', source: R + 'B505392002/' },
      ],
      japanese_sources_summary: '食べログ: 長崎堂 心斎橋本店、和菓子・カフェ・洋菓子、大阪市中央区心斎橋筋2-1-29、心斎橋駅6号出口から徒歩約2分、月・火・木〜日10:00〜17:30、水曜定休、予約可、カード・電子マネー・QRコード決済可、10席、禁煙、車椅子可、子供可、テイクアウト可。公式サイト: 1919年(大正8年)創業、カステラを中心にクリスタルボンボン、虹のかけら、どら焼き、ヴァッフェル。初代荒木源四郎が長崎の出島で菓子店「扇正軒」を創業、1924年に大阪へ移り合資会社長崎堂、1934年に缶詰カステーラの特許、1951年に二代目敏夫が周防町 (現 心斎橋筋2-1-29) に「本舗 長崎堂」の看板、缶詰カステーラがアンナプルナ登山隊の携行食に、1960年に三代目荒木一郎のもと株式会社大阪長崎堂、1973年頃に本店のオルゴールを購入、1980年頃クリスタルボンボン発売、1981年に田辺聖子が本店を訪れ「苺をつぶしながら」に登場、1982年に復元カステーラ、赤米寿は月の一日と十五日のみ、2003年に四代目荒木貴史が代表取締役、2013年に心斎橋本店をリニューアルし「1919長崎堂」、2019年に百周年。店舗: 心斎橋本店と住吉店、ほかに量販店と土産店舗 (関西空港、伊丹空港、新大阪駅ほか)。代表取締役会長 荒木貴史。グループ会社のページ: 長崎堂グループは長﨑堂、黒船 (東京自由が丘に本店)、然花抄院 (京都室町) の3ブランドを統括する運営母体。口コミ (2025年3月〜2026年10月): 本店セット1100円 (クリスタルボンボン、虹のかけら、カステラか赤米寿、コーヒーかポットの紅茶)、クリスタルボンボン2160円で一人二個まで、開店前に行列、栗入りどら焼き183〜184円、アイスどら焼きのセット、プリンアラモード、桜のカステラ、万博のキャラクターのカステラ、ヴァッフェル、底にざらめのしっとりしたカステラ、大きなオルゴールを専用コインで鳴らせる、店員が親切、ボンボンもカステラも普通という人も。',
      confidence: 'medium', sources: [TB, SITE, HIST, SHOP, LINK, R + 'B502596988/', R + 'B502883148/', R + 'B505392002/', R + 'B506978760/', R + 'B507554864/', R + 'B510289824/', R + 'B511512252/', R + 'B524303005/', R + 'B534598110/', R + 'B535812353/', R + 'B537231642/', R + 'B538318386/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from the counter or the tea-room menu; come at the 10:00 opening for the Crystal Bonbons (May 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-1-29',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through October 2026; listed on the official shop page (nagasakido.com/shop, read 2026-10-30).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目1番29号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B502883148/', R + 'B506978760/', R + 'B507554864/', R + 'B510289824/', R + 'B511512252/', R + 'B537231642/'],
    price_note: 'Prices from reviews dated March 2025 to June 2026; each item gives its month.', last_checked: TODAY, items: [
      it('', '', 'Hon-ten set (main-store set): Crystal Bonbon, Rainbow Fragments, castella or red-rice sweet, with coffee or tea', '¥1,100', 'Tea room', 'no', 'no', 'May and June 2025.', 'honten_set'),
      it('', '', 'Ice Dorayaki set', '', 'Tea room', 'no', 'no', 'August 2026.', 'ice_dorayaki_set'),
      it('', '', 'Pudding à la mode (with a drink)', '', 'Tea room', 'no', 'no', 'April 2025.', 'pudding_alamode'),
      it('クリスタルボンボン', '', 'Crystal Bonbon (sugar candies filled with anisette, maraschino and Cointreau; two per person)', '¥2,160', 'Sweets', 'ask', 'ask', 'May 2025.', 'crystal_bonbon'),
      it('', '', 'Chestnut dorayaki ("Kuri Mikasa")', '¥184', 'Sweets', 'no', 'no', 'June 2026; ¥183 in March 2025.', 'kuri_mikasa'),
      it('', '', 'Castella', '', 'Sweets', 'no', 'no', 'Reviews 2025–2026.', 'castella'),
      it('赤米寿', '', 'Red-rice sweet (sold on the 1st and 15th of the month only)', '', 'Sweets', 'ask', 'ask', 'Official history page; May and July 2025 reviews.', 'akamai_sweet'),
      it('ヴァッフェル', '', 'Waffel (cream-filled wafers)', '', 'Sweets', 'no', 'no', 'August 2026.', 'waffel'),
    ] }, {
    cuisine: '1919年創業のカステラの店の本店、10席の喫茶つき・底にざらめのカステラ・本店セット 1100円、コーヒーか紅茶つき: クリスタルボンボン、虹のかけら、カステラか赤米寿 (2025年5月・6月)・アニゼット、マラスキーノ、コアントローの入った砂糖菓子のクリスタルボンボン 一箱2160円 (2025年5月)・栗入りのどら焼き (Kuri Mikasa) 183円 (2025年3月)、184円 (2026年6月)・アイスどら焼きのセット (2026年8月)・飲み物つきのプリンアラモード (2025年4月)・月の一日と十五日だけの赤米寿・クリームをはさんだヴァッフェル・季節のカステラ: 桜 (2025年3月)、万博のキャラクターのカステラ (2025年10月)・ゼリーつきのアイスコーヒー (2026年9月)',
    neighborhood: '心斎橋筋2-1-29、ヨーロッパ通り (2025年4月の口コミ)。昔の周防町 (公式サイト)。心斎橋駅6号出口から徒歩約2分',
    gf_detail: 'グルテンフリーではありません。看板のカステラは小麦の生地で、どら焼き、ヴァッフェル、プリンアラモードのセットも小麦を使う。リキュール入りの砂糖菓子のクリスタルボンボンと赤米寿は小麦なしかもしれないが、原材料は見つからず、要確認。',
    vegan_detail: 'ヴィーガンではありません。カステラとどら焼きは卵入り、ヴァッフェルはクリーム入り、プリンもある。ヴィーガンの表示はなく、砂糖菓子も未確認なので要確認。',
    notes: '[和洋菓子・心斎橋、1919年創業のカステラの店と喫茶] 1919年に長崎で創業し、1924年に大阪へ移ったカステラの店、長崎堂の本店。1951年に心斎橋筋のこの角に看板を掲げ、2013年にリニューアル。1階の店にはカステラ、どら焼き、ヴァッフェル、そして宝石のようなクリスタルボンボン。薄い砂糖の殻に3種のリキュールが入った菓子で、1980年頃の発売から今も人気があり、一人二個まで、開店前には行列も。小さな喫茶ではこの店だけの本店セットが食べられ、クリスタルボンボン、虹のかけら、カステラ (か赤米寿) にコーヒーかポットの紅茶がついて1100円。1973年頃に買った大きなオルゴールが今も鳴り、2025年には専用のコインで鳴らした人も。赤米寿は月の一日と十五日だけ。しっとりして底のざらめがおいしいカステラと親切な店員がほめられ、2025年4月にはボンボンもカステラも普通という人も。水曜定休。',
  });
}

// ================================================================ 焼肉 福家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27006731/'; const R = TB + 'dtlrvwlst/';
  const SJ = 'https://savorjapan.com/0004044086';
  const H = day(['17:00', '24:00']);
  put({
    id: 'osaka_yakiniku_fukuya_dotonbori', name: '焼肉 福家 (Yakiniku Fukuya)', category: 'OMNI',
    lat: 34.668633, lng: 135.50515, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: no gluten information; sauces and marinades are not described. The salted tongue is seasoned with sesame oil and a house salt-and-pepper blend (Tabelog menu) — ask about the seasoning. Cold noodles, bibimbap and gukbap round out the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef and offal yakiniku house. Seasonal local grilled vegetables, salads and namul are on the menu, but nothing is described as vegan — ask.',
    hours_raw: 'Mon–Wed and Fri–Sun 17:00–24:00 (last order 23:30); closed Thursday; open straight through 28 December–4 January (Tabelog, shop-maintained listing). Savor Japan (USEN) instead lists Tue–Sun and holidays 17:00–24:00, closed Monday — call to check. Reservations accepted; phone 06-6211-2667 (Tabelog). Cards accepted; no e-money or QR payments (Tabelog). 15 seats: 6 at the counter and two tables of 4; whole-shop booking for up to 20 (Tabelog). Smoking allowed (Tabelog; a May 2023 diner: the whole restaurant allows smoking). Average ¥8,000–9,999 a head (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-3-1, the quieter east end of Dotonbori — 4 min from Kintetsu Nippombashi Stn, 7 min from Namba',
    cuisine: 'Small yakiniku and offal house, Imari beef and black wagyu · noodle appetizer on arrival (warm in March 2025, cold in May 2026) · specialty salted tongue, thin slices grilled quickly and wrapped round green onion and lemon ¥1,980 (premium) / ¥1,100 (regular) · outside skirt from ¥1,210, special premium ¥3,180, served last · premium mino tripe ¥1,100, special ¥1,430 · wagyu tetchan (small intestine) ¥990 · heart, honeycomb tripe, omasum, red omasum and other wagyu offal ¥880 each · yukhoe · red-meat cuts ¥2,750 · tenderloin ¥3,300 · chateaubriand ¥7,480 · seasonal local grilled vegetables ¥440 · kimchi ¥550 · cold noodles ¥990 · stone-grilled bibimbap ¥1,100 · chuhai with whole seasonal fruit · sake (menu prices from the Tabelog menu page, last updated March 2021)',
    website: null, gmaps: gm('焼肉 福家 道頓堀'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Dotonbori, a 15-seat offal and salted-tongue house] A small yakiniku counter at the quiet east end of Dotonbori, with six counter seats and two tables, known for Imari beef and fresh wagyu offal. Dinner opens with a bowl of noodles as an appetizer, and the staff grill the first piece; several diners started with the specialty salted tongue: thin slices seared quickly and wrapped round a heap of green onion with lemon. The owner steers the order, recommending rare cuts and the tripe, and the outside skirt comes last, after which no more meat is served (a December 2024 diner). Diners praise the honeycomb tripe, mino, tetchan, yukhoe and thick-cut tongue, and the staff\'s grilling; a 2023 diner found the lean cuts average next to the offal. Expect about ¥8,000–10,000 a head. Diners call the owner friendly and entertaining, and the shop has been on TV and is said to be a favourite of Yoshimoto comedians. Smoking is allowed; book ahead. Closed Thursday on Tabelog (Monday on Savor Japan).',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in sources)'], origin: null, background: 'Shop-maintained (corporate-member) Tabelog listing headed "Dotonbori Premium Salted beef tongue". A beloved local yakiniku restaurant serving Imari beef (September 2024 review); "All the meat is made from Imari beef" (October 2025 review). Savor Japan photo captions: 「伊万里牛をはじめとした厳選の黒毛和牛」, 「希少な黒毛和牛100％のタン『名物塩タン』」, 「日本酒ソムリエが選ぶ、肉に合う季節の日本酒」. The owner and two staff members taught a family to grill (October 2024 review). An October 2025 diner came after seeing it on TV; a May 2023 diner heard it is popular with Yoshimoto comedians. Onions and green onions from Osaka (November 2022 review).', philosophy: 'Each piece of meat carefully selected, and the owner talks passionately about quality (October 2025 review).', specialty: 'Salted tongue wrapped round green onion; outside skirt as the last dish; wagyu offal.',
      anecdotes: [
        { text: '"I\'ve been told that the outside skirt (harami) is served last, and once it comes out, they won\'t serve any more meat. However, once I tasted it, I understood why." — December 2024.', source: R + 'B497833676/' },
        { text: '"I ordered my favorites, tongue and outside skirt, but the chef advised me to eat the outside skirt first, as it would leave me wanting more after trying other dishes. So, I changed my order to start with the fresh omasum" — September 2025.', source: R + 'B514796764/' },
        { text: '"The cold noodles served as an appetizer were delicious! … Above all, the owner was kind, friendly, and a wonderful person!" — May 2026.', source: R + 'B529607603/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉 福家 (フクヤ)、焼肉・ホルモン・居酒屋、大阪市中央区道頓堀1-3-1、近鉄日本橋駅から徒歩4分、なんば駅から徒歩7分、月〜水・金〜日17:00〜24:00 (L.O. 23:30)、木曜定休、12月28日〜1月4日も休まず営業、予約可、カード可、電子マネー・QRコード決済不可、15席 (カウンター6席、4人がけテーブル2卓)、貸切は20人まで、喫煙可、平均8000〜9999円。食べログのメニュー (2021年3月更新): 名物の塩タン、薄切りのタンをさっと焼いてねぎとレモンを巻く 1980円 (上)・1100円、ハラミ1210円から、特上は3180円で最後に、ミノ1100円・特上1430円、黒毛和牛のテッチャン990円、ハツやハチノスなどの和牛ホルモン各880円、赤身2750円、ヒレ3300円、シャトーブリアン7480円、季節の地野菜の焼き野菜440円、キムチ550円、冷麺990円、石焼ビビンバ1100円、季節の果物まるごとのチューハイ。Savor Japan (USEN): 焼肉福家、火〜日・祝 17:00〜24:00、月曜定休、カード可、喫煙可、カウンター席、写真の説明に「伊万里牛をはじめとした厳選の黒毛和牛」「名物塩タン」「特選ハラミ」「特上ミノ」「テッチャン」「日本酒ソムリエが選ぶ、肉に合う季節の日本酒」。口コミ (2022年8月〜2026年8月): 伊万里牛、最初に麺の前菜 (温かい麺、冷麺)、最初の一枚やタンは店員が焼いてくれる、ハラミが出たら最後、店主のおすすめで希少部位、ハチノスやミノがおいしい、ユッケ、赤身は普通という声も、店主が気さくで楽しい、テレビで見て来たという人、吉本の芸人に人気という話、全席喫煙、誕生日に小さなアイスケーキ、大阪産の玉ねぎやねぎ。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', SJ, R + 'B454552668/', R + 'B456961154/', R + 'B465786992/', R + 'B492122909/', R + 'B493203908/', R + 'B497833676/', R + 'B502909272/', R + 'B512993596/', R + 'B514796764/', R + 'B515124132/', R + 'B515153057/', R + 'B515470952/', R + 'B529607603/', R + 'B532869266/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter shop; staff grill the first piece and explain how to grill the rest (2024–2026 reviews). Smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-3-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目3番1号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B497833676/', R + 'B502909272/', R + 'B529607603/'],
    price_note: 'Prices from the Tabelog menu page (last updated 30 March 2021); 2025–2026 reviews name the dishes but give no prices, so expect increases.', last_checked: TODAY, items: [
      it('', '', 'Specialty salted tongue, premium (thin slices wrapped round green onion and lemon)', '¥1,980', 'Meat', 'ask', 'no', 'Tabelog menu (2021); seasoned with sesame oil and a house salt-and-pepper blend.', 'salted_tongue_premium'),
      it('', '', 'Salted tongue, regular', '¥1,100', 'Meat', 'ask', 'no', 'Tabelog menu (2021).', 'salted_tongue'),
      it('', '', 'Special premium outside skirt (the last dish)', '¥3,180', 'Meat', 'ask', 'no', 'Tabelog menu (2021); also listed at ¥3,080.', 'harami_special'),
      it('', '', 'Special premium mino tripe', '¥1,430', 'Offal', 'ask', 'no', 'Tabelog menu (2021).', 'mino_special'),
      it('', '', 'Wagyu tetchan (small intestine)', '¥990', 'Offal', 'ask', 'no', 'Tabelog menu (2021).', 'tetchan'),
      it('', '', 'Wagyu offal: heart, honeycomb tripe, omasum, red omasum and more (each)', '¥880', 'Offal', 'ask', 'no', 'Tabelog menu (2021).', 'horumon_each'),
      it('', '', 'Chateaubriand', '¥7,480', 'Meat', 'ask', 'no', 'Tabelog menu (2021).', 'chateaubriand'),
      it('', '', 'Seasonal local grilled vegetables', '¥440', 'Vegetables', 'ask', 'ask', 'Tabelog menu (2021).', 'grilled_veg'),
      it('', '', 'Cold noodles', '¥990', 'Rice / noodles', 'no', 'ask', 'Tabelog menu (2021).', 'cold_noodles'),
      it('', '', 'Stone-grilled bibimbap with egg', '¥1,100', 'Rice / noodles', 'ask', 'no', 'Tabelog menu (2021).', 'stone_bibimbap'),
    ] }, {
    cuisine: '伊万里牛と黒毛和牛の小さな焼肉・ホルモンの店・最初に麺の前菜 (2025年3月は温かい麺、2026年5月は冷麺)・名物の塩タン、薄切りをさっと焼いてねぎとレモンを巻く 1980円 (上)・1100円・ハラミ1210円から、特上3180円で最後に・ミノ1100円、特上1430円・和牛のテッチャン990円・ハツ、ハチノス、センマイなどの和牛ホルモン各880円・ユッケ・赤身2750円・ヒレ3300円・シャトーブリアン7480円・季節の地野菜の焼き野菜440円・キムチ550円・冷麺990円・石焼ビビンバ1100円・季節の果物まるごとのチューハイ・日本酒 (値段は食べログのメニュー、2021年3月更新)',
    neighborhood: '道頓堀1-3-1、道頓堀の東の静かなあたり。近鉄日本橋駅から徒歩4分、なんばから徒歩7分',
    gf_detail: 'グルテンフリーとは言えません。グルテンの情報はなく、タレや下味の説明もない。塩タンはごま油と店の塩こしょうで味つけ (食べログのメニュー)、味つけは要確認。ほかに冷麺、ビビンバ、クッパ。',
    vegan_detail: 'ヴィーガンではありません。牛肉とホルモンの焼肉の店。季節の地野菜の焼き野菜、サラダ、ナムルはあるが、ヴィーガンの説明はなく要確認。',
    notes: '[焼肉・道頓堀、15席のホルモンと塩タンの店] 道頓堀の東の静かなあたりにある小さな焼肉の店で、カウンター6席とテーブル2卓。伊万里牛と新鮮な和牛ホルモンで知られる。最初に麺の前菜が出て、最初の一枚は店員が焼いてくれる。名物の塩タンから始めた人が多く、薄切りをさっと焼き、たっぷりのねぎとレモンを巻いて食べる。店主が注文の順を案内し、希少部位やホルモンをすすめてくれ、ハラミは最後で、それが出たらもう肉は出ない (2024年12月の口コミ)。ハチノス、ミノ、テッチャン、ユッケ、厚切りのタン、店員の焼き方がほめられ、2023年には赤身はホルモンにくらべて普通という声も。一人8000〜10000円ほど。店主は気さくで楽しいと評判で、テレビに出たこともあり、吉本の芸人に人気という話も。喫煙可、予約がおすすめ。食べログでは木曜定休 (Savor Japan では月曜定休)。',
  });
}

save();
