// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 15.
//   + 珈琲艇CABIN (Coffee Tei Kyabin: ship-themed kissa below street level on the Dotonbori River in Minami-Horie)
//   + 本等鮨 海馬 本店 (Hontou Sushi Kaiba Honten: Kita-Horie sushi and sake house)
//   + 喫酒オルタナ (Kissa Alterna: Shinmachi creative izakaya that ends with soba, from the Sobayoshi group)
//   + 立喰酒場 金獅子 心斎橋パルコ店 (Tachigui Sakaba Kinjishi: standing bar in Shinsaibashi PARCO B2F, open from 11:00)
//   - skipped 27015138 ビアーズテーブル ケラケラ: one of five Keller Keller beer restaurants run by Daiwa Kigyo (chain, 5+)
//   Lane: ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 14):
//   27013126, 27004106, 27015138 (skipped), 27136286, then 27122166 (last two digits 26, 06, 38, 86, 66: each = 2 mod 4).
//   None of the four is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Group checks (working line, 2026-11-02: 2–4 same-concept shops = small group, 5+ = chain).
//   Kaiba: only this main shop found (web search). Alterna: a Sobayoshi group shop, a different concept from its soba
//   shops, none in data. Kinjishi: the "third location" (Tabelog); web search finds four (Shinsaibashi PARCO, Sakaisuji
//   Honmachi, Nishinakajima, Tokyo Yaesu) — a small group, none in data; drafted. Cabin: single shop.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27015138', 'Chain (5+): ビアーズテーブル ケラケラ is one of five Keller Keller-branded beer restaurants (KELLER KELLER, ビアーズテーブル ケラケラ, ケラケラ クランツ, ケラケラ ヴィータ, ケラケラ ケイヴ) on the shop list of the operator Daiwa Kigyo, https://daiwa-kigyo.jp/shop/keller/');

// ================================================================ 珈琲艇CABIN
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27013126/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://home.cafecabin.net/'; const MENU = 'https://cafemenu.cafecabin.net/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'osaka_coffee_tei_cabin_minamihorie', name: '珈琲艇CABIN (Coffee Tei Kyabin)', category: 'OMNI',
    lat: 34.669356, lng: 135.496653, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The food is toast and hot sandwiches, all on bread; coffee, tea and the flavored drinks are where to start.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cheese toasts, honey toasts and egg and bacon sandwiches; black coffee and straight tea are the plain options.',
    hours_raw: 'Mon, Wed, Thu, Sat, Sun and holidays 09:00–18:00; closed Tuesdays and Fridays, but open when they fall on a holiday (official site; Tabelog). No reservations (Tabelog); the official site links a booking page and space rental. Order by QR code (July–August 2026). Cash only: no cards, e-money or QR (Tabelog). 35 seats: a counter of 5, six tables for four and a terrace of 6; a private room for 8 (Tabelog). Smoking allowed (Tabelog), paper cigarettes (August 2026). Takeaway (Tabelog). A queue at weekend lunchtime (September 2025; September 2026).',
    hours: { 0: H, 2: H, 3: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-4-10 (Nishi-ku), on the Dotonbori River, down the stairs — 4 min from Osaka Namba Stn, 5 min from Namba Stn (Midosuji Line)',
    cuisine: 'Kissa toasts, hot sandwiches and a long drinks list (official site) · the top three sandwiches: the Popeye sandwich, two hot sandwiches on one plate, one of bacon and spinach with a sweet, spicy Japanese seasoning and one of mushroom and onion omelette in butter-soy (half size available); cheese toast with homemade tomato sauce and cheddar, gouda and mozzarella; a lasagna-style hot sandwich of meat sauce, béchamel, soft egg and four cheeses (official site; September 2026) · honey toasts with honeydew honey from New Zealand and Germany: goat cheese and cream cheese; blue cheese and cream cheese; seven cheeses with homemade white sauce and black pepper (official site); fruit sandwich (August 2026) · coffee from ¥500, full-city roast hot and Italian roast iced, beans from Brazil, Colombia, Peru, Indonesia and Vietnam; tea from ¥500, Nilgiri straight and Assam for chai; 25 flavored drinks from ¥600; honey drinks from ¥700 (official site) · cream soda, mixed juice and homemade ginger ale, "a taste unchanged for 40 years" (official site); almond latte, Wiener coffee (2026)',
    website: SITE, gmaps: gm('珈琲艇CABIN 南堀江'), menu_url: MENU,
    notes: "[Kissa · Minami-Horie, a ship-shaped coffee shop on the Dotonbori River] A long-running kissa built like a ship on the bank of the Dotonbori River near Namba: go down the stairs into a dim, wood-and-red-velvet cabin with round portholes, ship models and a mirrored ceiling. The sandwiches are the thing, especially the Popeye, a plate of a spicy-sweet bacon and spinach sandwich and a butter-soy mushroom omelette one, or a thick cheese toast, with one of dozens of drinks; the cream soda, mixed juice and ginger ale have not changed in 40 years, the site says. Order by QR code; cash only and smoking allowed. Diners in 2026 love the setting; several found the staff aloof or unfriendly and the coffee ordinary. Closed Tuesdays and Fridays.",
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)'], origin: null,
      background: 'Per the official site: 珈琲艇CABIN, "Feeling on a boat"; its popular drinks keep "a taste unchanged for 40 years"; it also sells drip-coffee gifts and rents out the space. 2026 reviews describe a long-established, ship-themed coffee shop on the Dotonbori River, reached down a flight of stairs.',
      philosophy: null, specialty: 'Popeye sandwich; cheese toast.',
      anecdotes: [
        { text: '"A ship suddenly appears in Namba, making you wonder, \'What is this?\' But once you descend the stairs, you find a long-established coffee shop" — July 2026, a second visit.', source: R + 'B521951318/' },
        { text: '"By the way, the ceiling is mirrored, which made for some cute photo opportunities." — July 2026, cheese toast and coffee.', source: R + 'B531920477/' },
        { text: '"From the seating arrangement to the checkout, [the staff member] was unfriendly, which left a negative impression." — August 2026.', source: R + 'B534424028/' },
      ],
      japanese_sources_summary: '公式サイト (cafecabin.net): 珈琲艇CABIN、営業時間9:00〜18:00、定休日は火曜と金曜 (祝日は営業)、Feeling on a boat、人気サンドイッチ TOP3: ポパイサンド (甘味とスパイスの効いたベーコンとほうれん草のピリ辛和風テイストと、キノコとバター醤油オムレツのサンドイッチ、ハーフサイズあり)、チーズトースト (自家製トマトソースにチェダー・ゴーダ・モッツァレラなど)、ラザニア風クワトロサンド (自家製ミートソースとベシャメルソースに半熟卵と4種のチーズ)、甘露蜜トースト (ニュージーランドとドイツの甘露蜜3種、ゴートチーズとクリームチーズ、ブルーチーズとクリームチーズ、7種のチーズ)、コーヒー500円から (ホットはフルシティロースト、アイスはイタリアンロースト、ブラジル・コロンビア・ペルー・インドネシア・ベトナムの豆)、紅茶500円から (ストレートはニルギリ、ティーオーレやチャイはアッサム)、フレーバードリンク25種類600円から、ハニードリンク700円から、クリームソーダ・ミックスジュース・自家製ジンジャーエールは40年変わらないテイスト、季節で内容が変わり店内の QR コードのメニューで確認、ギフト、レンタル。食べログ: 予約不可、カード・電子マネー・QR不可、35席 (カウンター5、テーブル4名×6、テラス6)、個室8名、喫煙可、テイクアウト。口コミ(2026年7月〜10月): 船のような内装、丸窓、鏡の天井、階段を下りる、QR で注文、アイスコーヒー500円、ポパイサンド、フルーツサンド、そっけない接客という声。',
      confidence: 'medium', sources: [SITE, MENU, TB, R + 'B521951318/', R + 'B531920477/', R + 'B531972272/', R + 'B532980791/', R + 'B533130329/', R + 'B533892741/', R + 'B534424028/', R + 'B534637591/', R + 'B535401798/', R + 'B535732979/', R + 'B535896160/', R + 'B538495376/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code menu (2026). Cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-4-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and menu site live (November 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目4番10号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B533892741/'],
    price_note: 'Drink starting prices from the official menu site (read November 2026); food prices not published online; iced coffee from an August 2026 review.', last_checked: TODAY, items: [
      it('ポパイサンド', '', 'Popeye sandwich (bacon-spinach and mushroom omelette)', '', 'Food', 'no', 'no', 'Official site.', 'popeye'),
      it('チーズトースト', '', 'Cheese toast with homemade tomato sauce', '', 'Food', 'no', 'no', 'Official site.', 'cheese_toast'),
      it('ラザニア風クワトロサンド', '', 'Lasagna-style hot sandwich with four cheeses', '', 'Food', 'no', 'no', 'Official site.', 'lasagna_sando'),
      it('', '', 'Coffee (hot or iced)', '¥500', 'Drinks', 'ask', 'ask', 'Official site (from ¥500); iced coffee ¥500, August 2026.', 'coffee'),
      it('', '', 'Flavored drinks (25 kinds)', '¥600', 'Drinks', 'ask', 'ask', 'Official site (from ¥600).', 'flavor_drinks'),
    ] }, {
    cuisine: '喫茶のトースト、ホットサンド、豊富なドリンク (公式サイト)・人気のサンド TOP3: ポパイサンドは甘辛い和風のベーコンとほうれん草、キノコと玉ねぎのバター醤油オムレツの2種のホットサンドを1皿に (ハーフあり)、自家製トマトソースにチェダー・ゴーダ・モッツァレラのチーズトースト、ミートソース、ベシャメル、半熟卵と4種のチーズのラザニア風クワトロサンド (公式サイト、2026年9月)・ニュージーランドとドイツの甘露蜜のトースト: ゴートチーズとクリームチーズ、ブルーチーズとクリームチーズ、自家製ホワイトソースと黒胡椒の7種のチーズ (公式サイト)、フルーツサンド (2026年8月)・コーヒー500円から (ホットはフルシティロースト、アイスはイタリアンロースト、ブラジル・コロンビア・ペルー・インドネシア・ベトナムの豆)、紅茶500円から (ストレートはニルギリ、チャイはアッサム)、フレーバードリンク25種類600円から、ハニードリンク700円から (公式サイト)・40年変わらないというクリームソーダ、ミックスジュース、自家製ジンジャーエール (公式サイト)、アーモンドラテ、ウィンナーコーヒー (2026年)',
    neighborhood: '西区南堀江1-4-10、道頓堀川沿い、階段を下りた先。Osaka Namba 駅から徒歩4分、Namba 駅 (Midosuji Line) から5分',
    gf_detail: '要確認。グルテンの情報なし。食事はトーストとホットサンドで、どれもパン。コーヒー、紅茶、フレーバードリンクから確認を。',
    vegan_detail: 'ヴィーガンではありません。チーズトースト、ハニートースト、卵やベーコンのサンド。ブラックコーヒーとストレートティーはシンプル。',
    notes: '[喫茶・南堀江、道頓堀川の船の形の喫茶店] なんばに近い道頓堀川の岸に船のように建つ、長く続く喫茶店。階段を下りると、木と赤い椅子の薄暗い船室に丸窓、船の模型、鏡の天井。目当てはサンドで、甘辛いベーコンとほうれん草とバター醤油のキノコオムレツを1皿にしたポパイサンドや厚いチーズトーストに、たくさんのドリンクから1杯。クリームソーダ、ミックスジュース、ジンジャーエールは40年変わらない味だとサイトにある。QR で注文、現金のみ、喫煙可。2026年の口コミでは空間が大人気で、接客がそっけない、コーヒーは普通という声もいくつか。火曜と金曜は休み。',
  });
}

// ================================================================ 本等鮨 海馬 本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27004106/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_hontou_sushi_kaiba_kitahorie', name: '本等鮨 海馬 本店 (Hontou Sushi Kaiba Honten)', category: 'OMNI',
    lat: 34.673588, lng: 135.49497, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi is the place to start; soy sauce, tempura, simmered fish and grilled eel with sauce are not.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood restaurant.',
    hours_raw: 'Daily 17:00–23:00 (last order 22:30); "open year-round", with occasional closures for menu changes (Tabelog). Tabelog says lunch is currently not served, though a May 2026 diner had a ¥1,200 seafood bowl at lunch. Reservations; courses by the day before; children by phone booking only; course cancellations on the day or the day before are charged 100%, seat-only bookings ¥10,000 a person (Tabelog). An appetizer charge, no service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Rakuten Edy and QR including Alipay and WeChat Pay (Tabelog). 45 seats: a first-floor counter of 11 and two tables, 24 seats upstairs; the first floor is non-smoking, smoking allowed upstairs (Tabelog; May and August 2026). Wheelchair accessible; free Wi-Fi; English menu with photos; English- and Chinese-speaking staff; children welcome, with smaller portions; takeaway (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kita-Horie 1-15-22 (Nishi-ku) — 4 min from exit 4 of Yotsubashi Stn, 3 min from exit 4 of Nishi-Ohashi Stn',
    cuisine: 'Sushi, sashimi and Japanese dishes with sake and wine, using mainly natural, wild ingredients (Tabelog) · courses: Umi ¥8,800 (ten dishes, changing monthly), Kaiba ¥9,800 (eleven), Horse ¥12,800 (eleven, booked by the day before) (Tabelog); an omakase course of about ¥8,000 (May 2026) · sashimi platters; nigiri; toro tekka maki; tempura including conger eel; simmered fish; a cheek steak; lotus-root dumplings; grilled eel (May–July 2026) · half a hairy crab ¥5,800 (August 2026) · highballs ¥680 and ¥980, chuhai from ¥550, draft beer ¥680 (August 2026); Hibiki highball, champagne, sake and wine (2026; Tabelog)',
    website: null, gmaps: gm('本等鮨 海馬 本店 北堀江'), menu_url: null,
    notes: "[Sushi · Kita-Horie, a modern sushi and sake house] A stylish two-floor sushi restaurant in Kita-Horie, a counter downstairs and tables up, serving natural, mostly wild fish as sashimi, nigiri and plenty of cooked dishes, from conger-eel tempura to grilled eel and hairy crab, with sake, wine and highballs. Courses run ¥8,800–¥12,800, and diners in 2026 spent anything from ¥8,000 to ¥30,000. Regulars praise the fish and the balance of rice and topping; one November 2026 regular heard the owner had changed, with the same chefs but only one at the counter, so service was slow. Smoking is allowed upstairs. Dinner daily.",
    chef_bio: { chef_name: null, roles: ['Sushi chefs (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: "real sushi, so you can truly enjoy sake", made from carefully selected, mainly natural ingredients in a modern Japanese room; staff advise on sake and wine pairings. A November 2026 regular writes: "I heard that the owner has changed. However, the main staff and chefs seemed to be the same."',
      philosophy: 'Authentic sushi with sure technique, to be enjoyed with sake (Tabelog).', specialty: 'Sushi and sashimi with sake.',
      anecdotes: [
        { text: '"I heard that the owner has changed. However, the main staff and chefs seemed to be the same." — November 2026, a second visit, noting the turtle outside is gone.', source: R + 'B472910561/' },
        { text: '"The sushi, in particular, had a perfect balance between the rice and toppings" — May 2026, an omakase course of about ¥8,000.', source: R + 'B527388228/' },
        { text: '"Please note that smoking is allowed on the second floor, so if you\'re sensitive to tobacco, it might be best to consult with the staff." — May 2026.', source: R + 'B528022353/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 本等鮨 海馬 本店 (ほんとうずし かいば)、寿司・海鮮・日本料理、西区北堀江1-15-22、Yotsubashi 駅4番出口から徒歩4分、Nishi-Ohashi 駅4番出口から3分、毎日17:00〜23:00 (L.O.22:30)、ランチは現在休止、不定休 (年中無休だがメニュー替えなどで休むことも)、予約可、コースは前日までに、子ども連れは電話予約、当日・前日のコースのキャンセルは100%、席のみの予約は1人1万円、付き出し料あり・サービス料なし、カード・電子マネー・QR可、45席 (1階カウンター11とテーブル2卓、2階24席)、1階禁煙・2階喫煙可、車椅子可、無料Wi-Fi、英語メニュー、英語・中国語を話すスタッフ、子どもは量を少なく、Umi コース8,800円、Kaiba コース9,800円、Horse コース12,800円、主に天然の素材。口コミ(2026年4月〜11月): おまかせ約8,000円、刺身、穴子の天ぷら、鰻の蒲焼、毛蟹ハーフ5,800円、角ハイボール680円、オーナーが変わったと聞いたという声、昼の海鮮丼1,200円 (2026年5月)。',
      confidence: 'medium', sources: [TB, R + 'B472910561/', R + 'B527388228/', R + 'B528022353/', R + 'B528079749/', R + 'B528778506/', R + 'B529667438/', R + 'B531750740/', R + 'B533645385/', R + 'B533866610/', R + 'B535051367/', R + 'B535988624/', R + 'B536245437/'] },
    cultural_comfort: { level: 'english', note: 'English menu with photos and English- and Chinese-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-15-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目15番22号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536245437/'],
    price_note: 'Course prices from Tabelog (read November 2026), tax included; other prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', 'Umi', 'Umi course (ten dishes)', '¥8,800', 'Courses', 'ask', 'no', 'Tabelog.', 'course_umi'),
      it('', 'Kaiba', 'Kaiba course (eleven dishes)', '¥9,800', 'Courses', 'ask', 'no', 'Tabelog.', 'course_kaiba'),
      it('', '', 'Horse course (eleven dishes, book by the day before)', '¥12,800', 'Courses', 'ask', 'no', 'Tabelog.', 'course_horse'),
      it('', '', 'Hairy crab, half', '¥5,800', 'Seafood', 'ask', 'no', 'August 2026.', 'kegani'),
      it('', '', 'Kaku highball', '¥680', 'Drinks', 'ask', 'ask', 'August 2026.', 'highball'),
    ] }, {
    cuisine: '主に天然の素材の寿司、刺身、和食を日本酒やワインと (食べログ)・コース: Umi 8,800円 (10品、月替わり)、Kaiba 9,800円 (11品)、Horse 12,800円 (11品、前日までに予約) (食べログ)、約8,000円のおまかせ (2026年5月)・刺身の盛り合わせ、握り、トロ鉄火巻き、穴子などの天ぷら、煮魚、ほほ肉のステーキ、れんこん饅頭、鰻の蒲焼 (2026年5〜7月)・毛蟹ハーフ5,800円 (2026年8月)・ハイボール680円と980円、酎ハイ550円から、生ビール680円 (2026年8月)、響のハイボール、シャンパン、日本酒、ワイン (2026年、食べログ)',
    neighborhood: '西区北堀江1-15-22。Yotsubashi 駅4番出口から徒歩4分、Nishi-Ohashi 駅4番出口から3分',
    gf_detail: '要確認。グルテンの情報なし。刺身から確認を。醤油、天ぷら、煮魚、タレの鰻は避けて。',
    vegan_detail: 'ヴィーガンではありません。寿司と海鮮の店。',
    notes: '[寿司・北堀江、モダンな寿司と日本酒の店] 北堀江のおしゃれな2階建ての寿司店で、1階はカウンター、2階はテーブル。主に天然の魚を刺身、握り、そして穴子の天ぷら、鰻、毛蟹などたくさんの一品で、日本酒、ワイン、ハイボールと。コースは8,800〜12,800円で、2026年の口コミでは1人8,000円から3万円まで。常連は魚とシャリのバランスをほめる。2026年11月の常連は、オーナーが変わったと聞き、職人は同じだがカウンターが1人で提供が遅かったという。2階は喫煙可。毎日夜の営業。',
  });
}

// ================================================================ 喫酒オルタナ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27136286/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.sobayoshi.com/shop/alterna/index.html';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_kissa_alterna_shinmachi', name: '喫酒オルタナ (Kissa Alterna)', category: 'OMNI',
    lat: 34.676962, lng: 135.496325, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the shop says it does not take allergy requests, that everything is made in one kitchen with shared dishes and utensils, and that cross-contamination is possible (Tabelog). The signature cutlets, tempura and soba are wheat-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, beef, salmon, duck and shrimp dishes, soba in dashi, and no allergy or diet requests taken (Tabelog).',
    hours_raw: 'Tabelog lists 17:00–23:00, closed Wednesdays, while its shop text says open daily 17:00–23:00 (last food order 22:00, drinks 22:30, last entry 21:30) and closed on the last day of consecutive holidays; the official site gives 17:00–24:00 (last orders 23:00 and 23:30) and irregular closures. Reservations; the seat type may change on the day (Tabelog). A ¥550 appetizer charge (Tabelog; ¥500 in September 2026). Mobile ordering (September 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, iD, QUICPay and PayPay (Tabelog). 24 seats: 14 at a counter around the open kitchen and 10 at tables (Tabelog; 22 on the official site); smoking outside only; English-speaking staff; children by arrangement, no child cutlery (Tabelog). Opened 17 June 2023 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-8-10, 横山ビル 1F (Nishi-ku), down a back street — 5 min from exit 1-B of Yotsubashi Stn',
    cuisine: 'Restaurant, bar and soba in one: creative izakaya plates finished with soba (official site; Tabelog) · the signature shimi-ton, a juicy rare pork cutlet over soft egg under plenty of sauce, a twist on Osaka tonpei-yaki, ¥2,000 (Tabelog; September 2026); a beef "bisha katsu"; rare salmon cutlet (August–October 2026) · Miracle Ebi Mayo, four large shrimp, ¥1,000; carpaccio ¥1,100; scallops ¥770 for two; fig and prosciutto with white miso; duck; the soba shop\'s potato salad with soft egg; grilled cheese "volcano"; red sausage (September–October 2026) · soba to finish: cold soba with natural-yam foam, sudachi soba, tantan soba (September–October 2026) · craft gin and original cocktails, sake, shochu and wine (Tabelog); Asahi Maruefu and Sapporo Lager on draft or by the bottle (September–October 2026) · a ¥1,650 celebration dessert plate by reservation (Tabelog)',
    website: SITE, gmaps: gm('喫酒オルタナ 新町'), menu_url: null,
    notes: "[Izakaya · Shinmachi, creative plates and soba behind a hieroglyph sign] A dim, stylish back-street izakaya in Shinmachi, run by a soba company and marked by a hieroglyphic sign, with most seats at a counter around the open kitchen and hip-hop on the stereo. The draw is the shimi-ton, a juicy rare pork cutlet over soft egg drowned in sauce, along with Miracle Ebi Mayo, rare salmon cutlet and fig with prosciutto and white miso, all in small, pretty portions. Finish with soba, such as cold soba under natural-yam foam. Diners in 2026 were almost all delighted; one wished for more dishes. The shop takes no allergy requests. Evenings only.",
    chef_bio: { chef_name: null, roles: ['Kitchen team (unnamed)'], origin: null,
      background: 'Per the official site: a directly run shop of the Sobayoshi (そばよし) group, "restaurant × bar × soba", marked by "the world\'s only existing hieroglyphics" on its sign. Per Tabelog: opened 17 June 2023; the specialty is the shimi-ton, a twist on Osaka\'s tonpei-yaki.',
      philosophy: null, specialty: 'Shimi-ton pork cutlet; soba to finish.',
      anecdotes: [
        { text: '"One of my favorite aspects of this place is the opportunity to enjoy soba at the end of the meal." — September 2026, a second visit, cold soba with natural-yam foam.', source: R + 'B533552581/' },
        { text: '"The crispy fried pork cutlet is generously coated with sauce and fluffy eggs, making it a perfect pairing with drinks." — September 2026, the shimi-ton.', source: R + 'B538361666/' },
        { text: '"One downside was the limited food options, which was disappointing." — September 2026.', source: R + 'B536100966/' },
      ],
      japanese_sources_summary: '公式サイト (sobayoshi.com): 喫酒オルタナ、グループ直営店、世界で唯一現存する象形文字が目印、レストラン×酒場×蕎麦、17:00〜00:00 (料理 L.O.23:00、ドリンク L.O.23:30)、不定休、西区新町1-8-10 横山ビル1F、22席、分煙 (屋外に喫煙スペース)、四ツ橋駅・西大橋駅から徒歩5分。食べログ (店舗会員): 居酒屋・そば・創作料理、17:00〜23:00、水曜休み (店の紹介では毎日17:00〜23:00、連休最終日休み)、予約可、お通し550円、カード・電子マネー・PayPay可、24席 (カウンター14、テーブル10)、英語を話すスタッフ、アレルギーには対応しない (同じ厨房・器具でコンタミの可能性)、2023年6月17日オープン、名物の Shimi-ton、クラフトジン、オリジナルカクテル。口コミ(2026年8月〜10月): Shimi-ton 2,000円、Miracle Ebi Mayo 1,000円、カルパッチョ1,100円、レアサーモンカツ、いちじくと生ハムの白味噌、締めの蕎麦 (自然薯の泡の冷たい蕎麦、すだち蕎麦、担々蕎麦)、モバイルオーダー、料理の種類が少ないという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B533552581/', R + 'B534429299/', R + 'B534851891/', R + 'B535095739/', R + 'B536100966/', R + 'B536324340/', R + 'B537164611/', R + 'B537169400/', R + 'B537298702/', R + 'B537477847/', R + 'B538109820/', R + 'B538361666/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (Tabelog); mobile ordering (September 2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The shop does not accommodate allergy requests; all dishes are made in one kitchen with shared dishes and utensils, so cross-contamination is possible; ask by phone before visiting about changes to a meal (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-8-10 横山ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Sobayoshi site and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目8番10号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535095739/', TB],
    price_note: 'Prices from a September 2026 review (as reported) and Tabelog (read November 2026).', last_checked: TODAY, items: [
      it('', 'Shimiton', 'Shimi-ton, rare pork cutlet over soft egg', '¥2,000', 'Signatures', 'no', 'no', 'September 2026.', 'shimiton'),
      it('', 'Miracle Ebi Mayo', 'Miracle Ebi Mayo (four shrimp)', '¥1,000', 'Small plates', 'no', 'no', 'September 2026.', 'ebi_mayo'),
      it('', '', 'Carpaccio', '¥1,100', 'Small plates', 'no', 'no', 'September 2026.', 'carpaccio'),
      it('', '', 'Scallops (two)', '¥770', 'Small plates', 'no', 'no', 'September 2026.', 'scallops'),
      it('', '', 'Celebration dessert plate (reservation)', '¥1,650', 'Dessert', 'no', 'no', 'Tabelog.', 'dessert_plate'),
    ] }, {
    cuisine: 'レストラン、酒場、蕎麦がひとつに。創作の居酒屋料理と締めの蕎麦 (公式サイト、食べログ)・名物の Shimi-ton は、半熟卵の上のジューシーなレアの豚カツにたっぷりのソースで、大阪のとん平焼きのアレンジ。2,000円 (食べログ、2026年9月)。牛の Bisha Katsu、レアサーモンカツ (2026年8〜10月)・大きなエビ4尾の Miracle Ebi Mayo 1,000円、カルパッチョ1,100円、ホタテ2個770円、いちじくと生ハムの白味噌、鴨、蕎麦屋のポテサラ (半熟卵)、焼きチーズの火山、赤ウインナー (2026年9〜10月)・締めの蕎麦: 自然薯の泡の冷たい蕎麦、すだち蕎麦、担々蕎麦 (2026年9〜10月)・クラフトジン、オリジナルカクテル、日本酒、焼酎、ワイン (食べログ)、Asahi Maruefu と Sapporo Lager (2026年9〜10月)・予約制のお祝いのデザートプレート1,650円 (食べログ)',
    neighborhood: '西区新町1-8-10 横山ビル 1F、路地の奥。Yotsubashi 駅1-B出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。店はアレルギーの要望に対応せず、すべて同じ厨房で共用の器や調理器具を使うため、コンタミの可能性があるという (食べログ)。名物のカツ、天ぷら、蕎麦は小麦を使う。',
    vegan_detail: 'ヴィーガンではありません。豚、牛、サーモン、鴨、エビの料理と出汁の蕎麦で、アレルギーや食事制限の要望は受けない (食べログ)。',
    notes: '[居酒屋・新町、象形文字の看板の創作料理と蕎麦] 新町の路地にある薄暗くおしゃれな居酒屋で、蕎麦の会社が営み、象形文字の看板が目印。席の多くはオープンキッチンを囲むカウンターで、ヒップホップが流れる。目当ては Shimi-ton で、半熟卵の上のジューシーなレアの豚カツにソースたっぷり。Miracle Ebi Mayo、レアサーモンカツ、いちじくと生ハムの白味噌も、どれも小さく美しい盛り付け。締めは自然薯の泡の冷たい蕎麦などの蕎麦で。2026年の口コミはほぼ絶賛で、料理の種類がもう少し欲しいという声も。アレルギーの要望は受けない。夜だけの営業。',
  });
}

// ================================================================ 立喰酒場 金獅子 心斎橋パルコ店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27122166/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_tachigui_sakaba_kinjishi_shinsaibashi_parco', name: '立喰酒場 金獅子 心斎橋パルコ店 (Tachigui Sakaba Kinjishi Shinsaibashi paruko ten)', category: 'OMNI',
    lat: 34.673773, lng: 135.501147, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi, marinated mackerel and seared wagyu are where to start; the fried horse mackerel, demi-katsu, shumai, yakisoba, ramen and baguette are wheat-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, pork, chicken and fish; a mitsuba namul (September 2026) is the only vegetable dish described.',
    hours_raw: 'Daily 11:00–23:00; closed 1 January (Tabelog). Lunch set meals at midday, with a cheaper draft beer with lunch and free rice refills (September–October 2026). A ¥500 set of a drink and three small snacks (September 2026). Reservations (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, nanaco, WAON, iD, QUICPay and QR (Tabelog). 40 places: a counter, high tables and standing room, a little cramped (Tabelog; August and October 2026); non-smoking, smoking area nearby; free Wi-Fi; takeaway; children welcome (Tabelog). Opened 18 March 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashisuji 1-8-3, 心斎橋パルコ B2F — 30 seconds from Shinsaibashi Stn (Midosuji Line)',
    cuisine: 'Standing-bar izakaya with a daily-changing menu of fish, meat and sake (Tabelog) · marinated mackerel ¥100; lightly seared wagyu with egg yolk; wagyu; negitoro; pork tongue; meat sushi; loquat with prosciutto (June–October 2026) · fig butter on baguette; beef-tendon fried rice; mitsuba namul (September 2026) · lunch sets from ¥880: Super Ebi Soba (salt yakisoba with sakura shrimp and mayonnaise) with grilled shumai; fried horse mackerel with shiba-zuke tartar; demi-katsu; pork steak; a chuka soba set with kara-age, rice and raw egg (August–October 2026) · the owner\'s choice of local sake; lemon sours (Tabelog; September 2026)',
    website: null, gmaps: gm('立喰酒場 金獅子 心斎橋パルコ'), menu_url: null,
    notes: "[Izakaya · Shinsaibashi PARCO, a standing bar open from 11:00] A standing bar (with high stools) in the B2F food street of Shinsaibashi PARCO, the third shop of Kinjishi, with a daily-changing board of fish and meat and the owner's choice of local sake. It opens at 11:00, so lunch sets from ¥880 (salt yakisoba with shumai, fried horse mackerel with pickle tartar) turn into daytime drinking; try the ¥100 marinated mackerel, seared wagyu with egg yolk or a ¥500 drink-and-three-snacks set. Diners in 2026 praise the value and some dishes; others found it cramped, the portions small, the ramen too salty or some staff off-putting. Open daily to 23:00.",
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: the third Kinjishi, with an upgraded menu alongside the signature dishes, a daily-changing menu and the owner\'s selection of local sake; open from 11:00 for daytime drinking; opened 18 March 2021. A June 2026 diner compares it with the Sakaisuji Honmachi shop.',
      philosophy: null, specialty: 'Daily fish and wagyu small plates with sake.',
      anecdotes: [
        { text: '"Then I found the 500 yen set! You get your choice of drink and three types of snacks!" — September 2026, before a movie.', source: R + 'B524545851/' },
        { text: '"The marinated mackerel was an incredible bargain at just 100 yen." — October 2026.', source: R + 'B537297414/' },
        { text: '"However, the ramen itself is disappointing... It has a strong salty flavor, which overshadows the taste of the dashi." — October 2026, the chuka soba set.', source: R + 'B537295301/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 立喰酒場 金獅子 心斎橋パルコ店 (たちぐいさかば きんじし)、居酒屋・焼肉・海鮮、心斎橋筋1-8-3 心斎橋パルコ B2F、Shinsaibashi 駅から徒歩30秒、毎日11:00〜23:00、1月1日休み、予約可、カード・電子マネー・QR可、40席、カウンター、立ち飲み、禁煙 (近くに喫煙所)、無料Wi-Fi、テイクアウト、子ども可、2021年3月18日オープン、3号店、日替わりのメニュー、店主が選ぶ地酒、11時から昼飲み。口コミ(2026年6月〜10月): 500円のドリンクとおつまみ3品のセット、いちじくバターのバゲット、びわと生ハム、肉寿司、和牛、ネギトロ、豚タン、しめ鯖100円、和牛の炙りと卵黄、ランチ880円から (Super Ebi Soba と焼売、柴漬けタルタルのアジフライ)、デミカツ、ポークステーキ、中華そばの定食、狭い、量が少ない、ラーメンが塩辛いという声。',
      confidence: 'medium', sources: [TB, R + 'B524545851/', R + 'B529912603/', R + 'B534350976/', R + 'B534486484/', R + 'B534600288/', R + 'B535269631/', R + 'B535729659/', R + 'B536269316/', R + 'B536615765/', R + 'B537277349/', R + 'B537295301/', R + 'B537297414/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A standing bar with counter ordering. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-8-3 心斎橋パルコ B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目8番3号 (go) 33m; nearest same-building records 19–22 m away, no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534600288/', R + 'B535729659/', R + 'B537297414/', R + 'B524545851/'],
    price_note: 'Prices from August–October 2026 reviews (as reported); the menu changes daily.', last_checked: TODAY, items: [
      it('', 'Super Ebi Soba', 'Super Ebi Soba and grilled shumai lunch set', '¥880', 'Lunch', 'no', 'no', 'August 2026.', 'ebi_soba_set'),
      it('', '', 'Fried horse mackerel with shiba-zuke tartar lunch set', '¥880', 'Lunch', 'no', 'no', 'September 2026.', 'aji_set'),
      it('', '', 'Marinated mackerel', '¥100', 'Fish', 'ask', 'no', 'October 2026.', 'shime_saba'),
      it('', '', 'Drink and three small snacks set', '¥500', 'Sets', 'ask', 'no', 'September 2026.', 'set500'),
    ] }, {
    cuisine: '日替わりの魚と肉と日本酒の立ち飲み居酒屋 (食べログ)・しめ鯖100円、和牛の炙りと卵黄、和牛、ネギトロ、豚タン、肉寿司、びわと生ハム (2026年6〜10月)・いちじくバターのバゲット、牛すじチャーハン、三つ葉のナムル (2026年9月)・ランチは880円から: 桜えびとマヨの塩焼きそばの Super Ebi Soba と焼き焼売、柴漬けタルタルのアジフライ、デミカツ、ポークステーキ、唐揚げ、ご飯、生卵つきの中華そばの定食 (2026年8〜10月)・店主が選ぶ地酒、レモンサワー (食べログ、2026年9月)',
    neighborhood: '心斎橋筋1-8-3 心斎橋パルコ B2F。Shinsaibashi 駅 (Midosuji Line) から徒歩30秒',
    gf_detail: '要確認。グルテンの情報なし。刺身、しめ鯖、和牛の炙りから確認を。アジフライ、デミカツ、焼売、焼きそば、ラーメン、バゲットは小麦。',
    vegan_detail: 'ヴィーガンではありません。和牛、豚、鶏、魚で、野菜の料理として書かれているのは三つ葉のナムル (2026年9月) だけ。',
    notes: '[居酒屋・心斎橋PARCO、11時からの立ち飲み] 心斎橋PARCO の地下2階の飲食街にある立ち飲み (高い椅子あり) で、金獅子の3号店。日替わりの魚と肉、店主が選ぶ地酒。11時に開くので、880円からのランチ (塩焼きそばと焼売、柴漬けタルタルのアジフライ) がそのまま昼飲みに。100円のしめ鯖、卵黄の和牛の炙り、ドリンクとつまみ3品の500円セットも。2026年の口コミでは安さと料理がほめられる一方、狭い、量が少ない、ラーメンが塩辛い、スタッフの対応がいまひとつという声も。毎日23時まで。',
  });
}

save();
