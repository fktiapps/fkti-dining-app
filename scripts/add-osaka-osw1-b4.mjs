// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 4.
//   + 焼肉割烹 YP流 西心斎橋店 Yakiniku Kappou YPryu Nishi-Shinsaibashi (course yakiniku of long-fed heifers, basement by Shinsaibashi Stn, 2022)
//   + リロ珈琲喫茶 Lilo Coffee Kissa (retro second-floor kissaten of LiLo, beans and brew method to order, 2018)
//   + おおさか料理 淺井 Osaka Ryori Asai (Osaka kappo with 150-plus dishes a day, Higashi-Shinsaibashi)
//   + 焼肉割烹 YP流 宗右衛門町本店 Yakiniku Kappou YPryu Souemoncho (the main shop, 2017)
//   - skip 串揚げキッチン だん 心斎橋店 27090744: a brand of the Kushikatsu Bon group, which lists shops in Kitashinchi, Ginza, Kyoto,
//     Paris, Ishibashi, Juso, Shinsaibashi, Umeda and Kobe (kitchen-dan.jp, read 2026-11-01). The next lane id, 27100744, takes its place.
//   Chain check: YP流 is two shops, both here (each official site lists only the other; the two Tabelog listings share one invoice
//   registration number, T2120001190479). Lilo Coffee Kissa is the sister of LiLo Coffee Roasters, already in data as
//   osaka_lilo_coffee_roasters_shinsaibashi (西心斎橋1-10-28); a different shop and format at another address, so kept, and the
//   two records point to each other only through this note. Asai: one restaurant of 株式会社一是 (ichicore.co.jp). None of the four
//   is in data/osaka.json (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27090744', '串揚げキッチン だん 心斎橋店: a brand of the Kushikatsu Bon group (串かつ凡), whose site lists shops in Kitashinchi, Ginza, Kyoto, Paris, Ishibashi, Juso, Shinsaibashi, Umeda and Kobe (kitchen-dan.jp, read 2026-11-01); chain.');

const YP_BG = 'Per the two official sites (ypryu-nishi.com, ypryu-honten.com): "Japanese-style yakiniku that won\'t weigh on your stomach" (胃もたれしない、和の焼肉), using only long-fed heifers chosen for bloodline and producer, such as Noto beef and Yamagata beef, eaten with a washing sauce (洗いダレ), salt and wasabi; the signature is the "flower staircase" platter (花の階段盛り), six cuts set out on a stepped stand; anniversary courses end with a cake in a treasure chest. The founding wish: "to make a place where young customers can look good" (若いお客様でも格好の付けれるお店を作りたい), a "first high-end restaurant", and the site says many guests are twenty-somethings (20代のお客様に数多く御来店). Per the Nishi-Shinsaibashi Tabelog listing, the company\'s representative goes to the auctions personally to buy long-reared female cattle. Two shops: the Souemoncho main shop (opened 29 September 2017) and Nishi-Shinsaibashi (5 June 2022), per Tabelog.';

// ================================================================ 焼肉割烹 YP流 西心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27127764/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ypryu-nishi.com/';
  const WD = day(['17:00', '23:00']); const WE = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'osaka_yp_ryu_nishishinsaibashi', name: '焼肉割烹 YP流 西心斎橋店 (Yakiniku Kappou YPryu Nishi-Shinsaibashi)', category: 'OMNI',
    lat: 34.674837, lng: 135.499871, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The meat is eaten with a washing sauce, salt or wasabi (official site), and some courses include a sukiyaki-style seasoning, a fillet-cutlet sandwich and a wagyu dashi chazuke; none is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: course yakiniku of wagyu, with yukhoe, beef dashi and a cutlet sandwich.',
    hours_raw: 'Dinner daily 17:00–23:00 (last order 22:00); lunch Sat, Sun and holidays 11:30–14:30 (last order 14:00); closed on some days, posted on Instagram (official site). Tabelog lists lunch every day, sold out when gone. Dinner is courses only and basically by reservation, with a 2-hour limit; lunch takes no reservations (official FAQ; Tabelog). No service charge; course prices include tax (official FAQ; Tabelog). Cards (VISA, Master, JCB, AMEX), IC cards and other e-money, PayPay (Tabelog). 32 seats: 6 at the counter, tables, semi-private tables and a private room for 6; private hire for 20 or more; non-smoking (Tabelog; FAQ). The entrance is locked: ring the intercom (Tabelog). No sandals or jerseys (Tabelog). Children if the private room is free (official FAQ). Opened 5 June 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 1-1-13, basement of the 東邦ビル, by the Hotel Nikko — 1 min from Shinsaibashi Stn',
    cuisine: 'Course yakiniku of long-fed wagyu heifers (prices from the official site, tax included, read November 2026) · Introductory course (weekdays) ¥5,000 · Challenge course ¥7,000, the one the shop recommends to everyone: three starters, seared yukhoe, a mini bowl of wagyu with sea urchin and salmon roe, the fillet-cutlet sandwich only this branch makes, the six-cut "flower staircase" platter, wagyu dashi chazuke, yuzu sherbet · Heritage course ¥9,000 · Anniversary course ¥10,000 with a cake in a treasure chest · all-you-can-drink ¥2,000 more · extra grilled cuts for course guests, e.g. sirloin cap and ribeye (October 2026) · lunch: a limited wagyu rice box with dashi to pour over, ¥1,500 or ¥3,000 (October 2026) · drinks such as white wine ¥748 (October 2026)',
    website: SITE, gmaps: gm('焼肉割烹 YP流 西心斎橋店'), menu_url: SITE + 'concept/',
    notes: "[Yakiniku · Nishi-Shinsaibashi, the staircase platter] The quieter of the two YP流 shops, down a staircase into a calm, Japanese-modern basement a minute from Shinsaibashi Station, serving 'yakiniku that won't weigh on your stomach': long-fed heifers such as Yamagata beef, eaten with a light washing sauce, salt or wasabi rather than heavy sauce. Dinner is courses only. The ¥7,000 Challenge course is the one to book: seared yukhoe, a wagyu bowl with sea urchin and salmon roe, a thick, tender fillet-cutlet sandwich made only at this branch, then the six-cut 'flower staircase' platter you eat from the top step down (the tongue grilled well, the rest lightly), and wagyu dashi chazuke to finish. Diners in October 2026 found it light to the end and good for dates and business; one birthday party found the young part-time staff short of high-end service. Weekend lunch is a wagyu rice box. Ring the intercom; no sandals.",
    chef_bio: { chef_name: null, roles: ['Representative (unnamed) who buys at the auctions; meat craftsmen at the counter'], origin: null, background: YP_BG, philosophy: '"Japanese-style yakiniku that won\'t weigh on your stomach" (official site).', specialty: 'Flower staircase platter; fillet-cutlet sandwich (this branch only); wagyu dashi chazuke.',
      anecdotes: [
        { text: '"It\'s suggested to grill the tongue well, while the others should be grilled lightly." — October 2026, the Challenge course ¥7,000.', source: R + 'B538219871/' },
        { text: '"Premium Salted Tongue, Sirloin Cap, Top Sirloin, Gluteus Accessorius, Premium Loin, and Special Loin! … personally, I especially loved the Sirloin Cap!" — October 2026, the staircase platter.', source: R + 'B537875544/' },
        { text: '"While the children enjoyed udon, we were constantly amazed by the flavor of the meat." — October 2026, a birthday lunch in the private room.', source: R + 'B538402266/' },
      ],
      japanese_sources_summary: '公式サイト: 焼肉 割烹 YP流 西心斎橋店、大阪市中央区西心斎橋1-1-13 東邦ビル B1F、「胃もたれしない、和の焼肉」、長期飼育の雌牛 (能登牛、山形牛など)、洗いダレ・塩・わさび、名物「花の階段盛り」、記念日コース限定「ケーキ付き宝箱」、西心斎橋店のヘレカツサンド・和牛のお重・タンユッケ・うにいくら丼、カウンターで職人の肉捌き、6名の完全個室、「若いお客様でも格好の付けれるお店を作りたい」、月〜金17:00〜23:00 (L.O.22:00)、土・日・祝11:30〜14:30 (L.O.14:00)・17:00〜23:00、不定休、カード・QR可。コース (税込): 平日限定 入門コース5,000円、挑戦コース7,000円、継承コース9,000円、記念日コース10,000円、飲み放題は2,000円増し。よくあるご質問: ディナーはコースのみ (コースの人は焼物の追加可)、ランチは数量限定の和牛のお重、ディナーは基本予約制、ランチは予約不可、サービス料・チャージ料なし、20名以上で貸切、子どもは個室が空いていれば可。食べログ (店舗会員): 2時間制、32席 (カウンター6、テーブル、半個室、6名個室)、禁煙、入口はオートロックでインターホン、サンダル・ジャージは断ることも、2022年6月5日オープン、代表が競りで長期肥育の雌牛を仕入れる。口コミ(2026年10月): 挑戦コース7,000円、階段盛りの6種、タンはしっかり、ほかは軽く焼く、無煙ロースター、追加の焼物、ランチのお重1,500円と3,000円、出汁をかけてひつまぶし風に、若いアルバイトの接客が物足りないという声。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'jp/shopinfo/', SITE + 'concept/', SITE + 'faq/', R + 'B495584116/', R + 'B506524207/', R + 'B537855851/', R + 'B537875544/', R + 'B537912169/', R + 'B537956795/', R + 'B538013847/', R + 'B538219871/', R + 'B538296842/', R + 'B538402266/'] },
    cultural_comfort: { level: 'english', note: 'Official site and course menu in English, Chinese and Korean; set courses only at dinner.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-1-13 東邦ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目1番13号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'concept/', R + 'B537875544/', R + 'B495584116/'],
    price_note: 'Course prices from the official site (tax included; read 2026-11-01); the ¥7,000 Challenge course matches October 2026 reviews.', last_checked: TODAY, items: [
      it('入門コース', '', 'Introductory course (weekdays)', '¥5,000', 'Courses', 'ask', 'no', 'Official site.', 'nyumon_course'),
      it('挑戦コース', '', 'Challenge course (with fillet-cutlet sandwich and staircase platter)', '¥7,000', 'Courses', 'no', 'no', 'Official site; October 2026.', 'chosen_course'),
      it('継承コース', '', 'Heritage course', '¥9,000', 'Courses', 'no', 'no', 'Official site.', 'keisho_course'),
      it('記念日コース', '', 'Anniversary course (cake in a treasure chest)', '¥10,000', 'Courses', 'no', 'no', 'Official site.', 'kinenbi_course'),
      it('', '', 'Lunch wagyu rice box (limited)', '¥1,500', 'Lunch', 'ask', 'no', 'October 2026 review; ¥3,000 version too.', 'wagyu_oju'),
    ] }, {
    cuisine: '長期肥育の和牛の雌牛のコース焼肉 (値段は公式サイト、税込、2026年11月に確認)・平日限定の入門コース5,000円・店がいちばんすすめる挑戦コース7,000円: 前菜三種、炙りユッケ、和牛とうにいくらのミニ丼、この店だけのヘレカツサンド、6種の「花の階段盛り」、和牛出汁茶漬け、ゆずシャーベット・継承コース9,000円・ケーキ付き宝箱の記念日コース10,000円・飲み放題は2,000円増し・コースの人は焼物を追加できる (2026年10月の口コミ)・ランチ: 数量限定の和牛のお重、出汁をかけても、1,500円か3,000円 (2026年10月)・白ワイン748円など (2026年10月)',
    neighborhood: '西心斎橋1-1-13、東邦ビルの地下1階、Hotel Nikko のそば。心斎橋駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。肉は洗いダレ、塩、わさびで食べ (公式サイト)、コースによってはすき焼き風の味つけ、ヘレカツサンド、和牛出汁茶漬けも出る。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛のコース焼肉で、ユッケ、牛の出汁、カツサンドも。',
    notes: '[焼肉・西心斎橋、花の階段盛り] YP流の2店のうち静かなほう。心斎橋駅から1分、階段を下りた落ち着いた木の地下の店で、「胃もたれしない、和の焼肉」がテーマ。山形牛など長期肥育の雌牛を、重いタレではなく、軽い洗いダレ、塩、わさびで食べる。夜はコースのみ。予約するなら7,000円の挑戦コース: 炙りユッケ、うにといくらの和牛丼、この店だけの厚くやわらかいヘレカツサンド、上の段から食べる6種の「花の階段盛り」(タンはしっかり、ほかは軽く焼く)、締めは和牛出汁茶漬け。2026年10月の口コミでは最後まで軽く、デートや接待に向くという声。誕生日に使った家族は、若いアルバイトの接客が高級店としては物足りなかったそう。週末のランチは和牛のお重。入口はインターホンで、サンダル不可。',
  });
}

// ================================================================ リロ珈琲喫茶
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27105524/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://coffee.liloinveve.com';
  const A = day(['13:00', '21:30']); const T = day(['13:00', '19:30']); const W = day(['11:00', '21:30']);
  put({
    id: 'osaka_lilo_coffee_kissa_shinsaibashi', name: 'リロ珈琲喫茶 (Lilo Coffee Kissa)', category: 'OMNI',
    lat: 34.671051, lng: 135.501035, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The coffee itself is plain beans and water; the sweets are cakes such as tiramisu and baked cheesecake, which usually contain wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Black coffee in any brewing method is the plain option; floats come with vanilla or rum-raisin ice cream and the cakes use dairy.',
    hours_raw: 'Mon, Wed, Thu, Fri 13:00–21:30; Tue 13:00–19:30; Sat and Sun 11:00–21:30 (Tabelog). No reservations (Tabelog). A queue forms on the stairs in the afternoon: 20–30 minutes around 14:00–15:00 in October 2026, with orders taken while you wait; about half the waiting customers were taking out. No cards or e-money; PayPay accepted (Tabelog; October 2026). 24 seats, non-smoking, free Wi-Fi and power outlets; takeaway; babies welcome (Tabelog). Opened 6 June 2018 (Tabelog).',
    hours: { 0: A, 1: T, 2: A, 3: A, 4: A, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-7-25, 2F of the 金子ビル, between the Shinsaibashi-suji arcade and Midosuji — 4 min from Shinsaibashi Stn',
    cuisine: 'Specialty coffee roasted in-house, with three bean options and five brewing methods to choose from (Tabelog): siphon, AeroPress and others · Kenya with chocolate and blackberry notes (August 2026), Colombia medium roast by siphon, light-roast Ethiopia, seasonal Mexico · each cup comes with a card describing the beans (2026) · sweets: tiramisu made with the house blend, baked cheesecake, affogato · coffee float with rum-raisin or vanilla ice cream · seasonal coffee-and-dessert pairings, e.g. Mexico coffee with sweet potato, cream and nuts ¥1,300 with a refill pot (October 2026) · beans, brewing gear and LiLo goods to buy',
    website: SITE, gmaps: gm('リロ珈琲喫茶 心斎橋'), menu_url: null,
    notes: "[Kissaten · Shinsaibashi, beans and brew to order] A retro second-floor coffee room between the Shinsaibashi-suji arcade and Midosuji, the sister of LiLo Coffee Roasters in Nishi-Shinsaibashi. The staff explain each bean in detail, then you choose the beans and the method (siphon, AeroPress and more) and get a card describing your cup; a September 2026 couple had a dark Kenya by AeroPress and a medium Colombia by siphon. The room keeps the look of the cocoa shop that was here before (Akatori, per the staff), Showa-era walls, clocks and chairs. Pair a cup with the tiramisu made from the house blend, the rich cheesecake, or a float with rum-raisin ice cream; a seasonal coffee-and-dessert set was ¥1,300 in October 2026. Expect a 20–30 minute queue on the stairs in the afternoon; staff take orders as you wait and explain in English. PayPay or cash.",
    chef_bio: { chef_name: null, roles: ['Baristas (unnamed)'], origin: null, background: 'Shop-maintained (corporate-member) Tabelog listing: specialty coffee roasted in-house, baristas who ask about your taste and mood, three specialty coffees and five brewing methods, seasonal drinks and sweets, beans, equipment and original LiLo goods. Opened 6 June 2018. Sister of LiLo Coffee Roasters at Nishi-Shinsaibashi 1-10-28 (osaka_lilo_coffee_roasters_shinsaibashi; same website). An August 2026 diner was told by the staff that the room was formerly a cocoa specialty shop called Akatori, and that its atmosphere was kept.', philosophy: null, specialty: 'Choice of beans and brewing method; tiramisu with the house blend; coffee float with rum-raisin ice cream.',
      anecdotes: [
        { text: '"I learned from the staff that this used to be a cocoa specialty shop called \'Akatori.\' They have maintained the atmosphere from that time" — August 2026, a Kenya by siphon.', source: R + 'B534586368/' },
        { text: '"The staff explained everything in English very carefully, which made me feel that the place is popular among foreigners!" — October 2026, tiramisu and coffee.', source: R + 'B538034640/' },
        { text: '"While waiting, they kindly took my order in advance, so I was able to enjoy my drink quickly." — October 2026, a seasonal Mexico coffee pairing ¥1,300.', source: R + 'B538040571/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): リロ珈琲喫茶、喫茶店、大阪市中央区心斎橋筋2-7-25 金子ビル 2F、心斎橋駅から徒歩4分、月・水・木・金13:00〜21:30、火13:00〜19:30、土・日11:00〜21:30、予約不可、カード・電子マネー不可、PayPay 可、24席、禁煙、Wi-Fi・電源、テイクアウト、赤ちゃん可、2018年6月6日オープン。店の紹介 (英訳): 自家焙煎のスペシャルティコーヒー、バリスタが好みや気分を聞いてくれる、3種のスペシャルティと5種類の淹れ方、季節のドリンクとスイーツ、豆や器具、オリジナルグッズ。口コミ(2026年8月〜10月): 階段で待つ行列 (20〜30分)、待つ間に注文を聞いてくれる、豆と淹れ方を選べる、サイフォン、Kenya、Colombia、Ethiopia、季節の Mexico とさつまいものペアリング1,300円、ハウスブレンドのティラミス、チーズケーキ、ラムレーズンアイスのフロート、豆の説明カード、昭和レトロの内装、以前は Akatori というココアの店、英語で説明、海外の客が多い、カード不可。',
      confidence: 'medium', sources: [TB, R + 'B534586368/', R + 'B535435306/', R + 'B535982948/', R + 'B536463113/', R + 'B536508822/', R + 'B536973922/', R + 'B537322715/', R + 'B537699470/', R + 'B538034640/', R + 'B538040571/'] },
    cultural_comfort: { level: 'english', note: 'Staff explained the coffees in English to overseas visitors (October 2026); bean cards with each cup.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-7-25 金子ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目7番25号 (go) 6m. ストロベリーマニア (osaka_strawberry_mania_shinsaibashi) is next door at 心斎橋筋2-7-26, a different house number, so both pins stay precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538040571/', R + 'B536463113/'],
    price_note: 'No menu prices on Tabelog; one dated price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal coffee and dessert pairing (with a refill pot)', '¥1,300', 'Coffee', 'ask', 'ask', 'October 2026 review.', 'seasonal_pairing'),
      it('', '', 'Single-origin coffee, brewing method of your choice', '', 'Coffee', 'ask', 'ask', '2026 reviews.', 'single_origin'),
      it('', '', 'Tiramisu made with the house blend', '', 'Sweets', 'no', 'no', 'September and October 2026 reviews.', 'tiramisu'),
      it('', '', 'Coffee float (rum-raisin or vanilla ice cream)', '', 'Coffee', 'ask', 'no', 'August and October 2026 reviews.', 'coffee_float'),
    ] }, {
    cuisine: '自家焙煎のスペシャルティコーヒー、3種の豆と5種類の淹れ方から選べる (食べログ): サイフォン、AeroPress など・チョコレートとブラックベリーの風味の Kenya (2026年8月)、サイフォンの中煎り Colombia、浅煎りの Ethiopia、季節の Mexico・カップごとに豆の説明カード (2026年)・スイーツ: ハウスブレンドのティラミス、ベイクドチーズケーキ、アフォガート・ラムレーズンかバニラのアイスのコーヒーフロート・季節のコーヒーとデザートのペアリング、たとえば Mexico のコーヒーにさつまいも、クリーム、ナッツでおかわりのポットつき1,300円 (2026年10月)・豆、器具、LiLo のグッズも販売',
    neighborhood: '心斎橋筋2-7-25、金子ビルの2階、心斎橋筋商店街と御堂筋の間。心斎橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。コーヒーは豆と水だけだが、スイーツはティラミスやベイクドチーズケーキなどのケーキで、ふつうは小麦を含む。',
    vegan_detail: '要確認。ヴィーガンの情報なし。どの淹れ方でもブラックコーヒーがシンプルな選択肢。フロートはバニラかラムレーズンのアイスで、ケーキには乳製品を使う。',
    notes: '[喫茶店・心斎橋、豆と淹れ方を選ぶ] 心斎橋筋商店街と御堂筋の間の2階にあるレトロなコーヒーの部屋で、西心斎橋の LiLo Coffee Roasters の姉妹店。スタッフが豆の一つひとつをくわしく説明してくれて、豆と淹れ方 (サイフォン、AeroPress など) を選ぶと、そのコーヒーの説明カードがつく。2026年9月の夫婦は、AeroPress の深煎り Kenya とサイフォンの中煎り Colombia。前にあったココアの店 (スタッフによると Akatori) の雰囲気を残した、昭和の壁や時計や椅子の内装。ハウスブレンドで作るティラミス、濃厚なチーズケーキ、ラムレーズンアイスのフロートと一緒に。2026年10月は季節のコーヒーとデザートのセットが1,300円。午後は階段で20〜30分待つことも。待つ間に注文を聞いてくれて、英語でも説明してくれる。PayPay か現金で。',
  });
}

// ================================================================ おおさか料理 淺井
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001568/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ichicore.co.jp/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_osaka_ryori_asai_higashishinsaibashi', name: 'おおさか料理 淺井 (Osaka Ryori Asai)', category: 'OMNI',
    lat: 34.672218, lng: 135.504474, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The daily menu runs to 150-plus dishes, including tempura, fried skewers and a beef cutlet, and Osaka cooking is built on dashi and soy sauce. The official menu page asks guests to tell the restaurant about allergies in advance.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Osaka-style cooking of fish, shellfish, whale and meat, seasoned with dashi.',
    hours_raw: 'Mon–Sat 17:00–23:00; holidays 17:00–22:00; closed Sunday (official site). Tabelog lists holidays as closed; ask before a holiday visit. Reservations recommended, preferably by phone (official site; July 2026). Cash or cards (VISA, Master, JCB, AMEX, Diners) (official site). 45 seats: a 16-seat counter, tables for up to 30, private rooms on two floors (1F and 7F); designated smoking area; children welcome with a kids menu (Tabelog; official site). Takeaway: sansho jako, sardines for chazuke and bento boxes (official site). Formerly named おおさか料理 喜川 浅井 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-6-19, ロイヤル中家 1F, in a back street — 4 min from Nagahoribashi Stn, 5 min from Shinsaibashi',
    cuisine: 'Osaka cooking: more than 150 dishes, Japanese, Western and Chinese, on a long handwritten scroll menu that changes daily with the morning market (official site); prices are not shown on it (2026 reviews) · courses (official site, tax included): 竹 seven dishes with rice and dessert ¥14,300, 梅 ¥18,700, 楽 six dishes plus one of your choice ¥22,000; or five dishes left to the chef at ¥14,300 or ¥18,700 · hamo shabu-shabu, tecchiri and crab hot pot on request · dishes in 2026 reviews: assorted sashimi, tender simmered octopus, beef cutlet with a rare centre, hamo with plum, grilled abalone with asparagus in butter, red clam with junsai, tempura of spring vegetables and young ayu, fried whale skewers, eggplant and crab in a thickened sauce, marinated tuna rice bowl with fish broth, Nara-zuke with cream cheese · two diners spent just under ¥30,000 with drinks (June 2026) · to take home: sansho jako ¥2,200, simmered sardines for chazuke ¥2,200, bento from ¥4,320 (official site)',
    website: SITE, gmaps: gm('おおさか料理 淺井 東心斎橋'), menu_url: SITE + 'menu/',
    notes: "[Osaka ryori · Higashi-Shinsaibashi, a 150-dish scroll] A busy Osaka-cuisine counter in a Higashi-Shinsaibashi back street, where a scroll-long handwritten menu of more than 150 dishes is rewritten every day from the morning market and carries no prices; the restaurant was formerly called Kikawa Asai. Sit at the 16-seat counter to watch a kitchen of about seven cooks (May 2026), and order freely: sashimi, tender simmered octopus, hamo in summer, a beef cutlet with a rare centre that one regular never skips, fried whale skewers, Nara-zuke with cream cheese, a tuna bowl with fish broth to finish. Or let the chef choose five dishes (¥14,300 or ¥18,700) or take a course. Two diners spent just under ¥30,000 with drinks (June 2026). Diners praise the dashi and the staff; one found it flawless but unexciting (September 2026). Book by phone. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Kitchen of about seven cooks (unnamed; May 2026 review)'], origin: null, background: 'Per the official site: run by 株式会社一是; "おおさか うまいもん"; the day\'s menu is decided by what comes from the market each morning, with more than 150 dishes on a scroll-like menu, Japanese, Western and Chinese; guests choose freely or leave it to the chef; "the traditional taste and skill of Osaka cuisine". Tabelog gives the former name おおさか料理 喜川 浅井, and a 2020 review calls it a branch from the famous restaurant Kikawa. The official site writes the name 淺井; Tabelog 浅井.', philosophy: '"Seasonal Japanese ingredients, cooked with time and care", to be picked at "with idle chatter" (official site).', specialty: 'Scroll menu of 150-plus dishes; beef cutlet; hamo.',
      anecdotes: [
        { text: '"Upon entering, the first thing that surprises you is the number of chefs! For the size of the restaurant, it seems like only 2 or 3 would be enough, but there are about 7!" — May 2026.', source: R + 'B528216551/' },
        { text: '"Among the dishes, the beef cutlet is a must-try. It\'s perfectly cooked, with a crispy coating and a beautifully rare center." — September 2026, a regular\'s third visit.', source: R + 'B432218875/' },
        { text: '"The menu does not display prices, which can be a bit nerve-wracking at first. However, for two people, we spent just under JPY 30,000" — June 2026.', source: R + 'B530456955/' },
      ],
      japanese_sources_summary: '公式サイト: おおさか料理 淺井、運営は株式会社一是、大阪市中央区東心斎橋1-6-19 ロイヤル中家1F・7F、長堀橋駅から徒歩4分、心斎橋駅から徒歩5分、月〜土17:00〜23:00、祝日17:00〜22:00、日曜定休、カウンター16席、テーブル30席、現金・カード可、予約は電話がおすすめ。「おおさか うまいもん」、日本の旬を活かし手間暇をかけて調理、毎朝市場から仕入れた食材でその日の献立、巻物の如く長いお品書きに常時150種以上、和洋中、好きな料理を選ぶか板前のお任せコース、おおさか料理伝統の味と技。コース (税込): 竹コース14,300円、梅コース18,700円、楽コース22,000円、お任せ5品14,300円・18,700円、鱧しゃぶ・てっちり・カニ鍋も、苦手な食材やアレルギーは事前に。お土産: 山椒じゃこ2,200円、お茶漬け用鰯2,200円、お弁当4,320円〜。食べログ: 旧店名 おおさか料理 喜川 浅井、45席、個室、分煙、子ども・キッズメニュー可、日・祝休み。口コミ(2026年4月〜10月): 値段の書いていない長いお品書き、板前が7人ほど、カウンターがおすすめ、お造り、タコのやわらか煮、ビーフカツ、鱧、梅肉の鱧、アワビとアスパラのバター焼き、赤貝と junsai、春野菜と稚鮎の天ぷら、クジラの串揚げ、なすと蟹のあんかけ、マグロの漬け丼、Nara-zuke とクリームチーズ、2人で3万円弱、だしの深い味わい、電話予約で外国人スタッフが対応、完璧だが面白みはないという声。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'shop/', SITE + 'menu/', SITE + 'souvenir/', R + 'B425253504/', R + 'B432218875/', R + 'B526442894/', R + 'B527225058/', R + 'B528216551/', R + 'B530456955/', R + 'B532972884/', R + 'B535598939/', R + 'B537086771/', R + 'B538087734/'] },
    cultural_comfort: { level: 'english', note: 'The official site has an English version; a foreign staff member took one diner\'s phone booking (August 2026). The menu itself is a handwritten Japanese scroll without prices.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Official menu page: "苦手な食材、アレルギーなどのご要望がございましたら事前にお知らせください" (tell the restaurant about dislikes and allergies in advance).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-6-19 ロイヤル中家 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with a 2026 notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目6番19号 (go) 12m. Neighbours in data at other house numbers (麺や 醤すけ osaka_menya_shosuke_shinsaibashi at 東心斎橋1-6-23, SHUN SAI KA NAKA at 1-6-12), so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu/', SITE + 'souvenir/'],
    price_note: 'Course and takeaway prices from the official site (tax included; read 2026-11-01). À la carte prices are not shown on the menu.', last_checked: TODAY, items: [
      it('竹コース', '', 'Take course: seven dishes with rice and dessert', '¥14,300', 'Courses', 'ask', 'no', 'Official site.', 'take_course'),
      it('梅コース', '', 'Ume course: seven dishes with rice and dessert', '¥18,700', 'Courses', 'ask', 'no', 'Official site.', 'ume_course'),
      it('楽コース', '', 'Raku course: six dishes plus one of your choice', '¥22,000', 'Courses', 'ask', 'no', 'Official site.', 'raku_course'),
      it('お任せ5品', '', 'Five dishes left to the chef', '¥14,300', 'Courses', 'ask', 'no', 'Official site; ¥18,700 version too.', 'omakase_5'),
      it('', '', 'Beef cutlet', '', 'À la carte', 'no', 'no', 'September 2026 and June 2026 reviews.', 'beef_katsu'),
      it('山椒じゃこ', '', 'Sansho jako (to take home)', '¥2,200', 'Takeaway', 'ask', 'no', 'Official site.', 'sansho_jako'),
    ] }, {
    cuisine: 'おおさか料理: 和洋中を取り入れた150種以上の料理が、毎朝の市場に合わせて毎日変わる巻物のように長い手書きのお品書きに並ぶ (公式サイト)。お品書きに値段は書いていない (2026年の口コミ)・コース (公式サイト、税込): 一品料理7品とお食事、デザートの竹コース14,300円、梅コース18,700円、一品料理6品とお好みの単品1品の楽コース22,000円。板前のお任せ5品は14,300円か18,700円・鱧しゃぶ、てっちり、カニ鍋も予約で・2026年の口コミの料理: お造りの盛り合わせ、タコのやわらか煮、中がレアのビーフカツ、梅肉の鱧、アワビとアスパラのバター焼き、赤貝と junsai、春野菜と稚鮎の天ぷら、クジラの串揚げ、なすと蟹のあんかけ、マグロの漬け丼と魚のだし、Nara-zuke とクリームチーズ・2人で飲んで3万円弱 (2026年6月)・お土産: 山椒じゃこ2,200円、お茶漬け用鰯2,200円、お弁当4,320円から (公式サイト)',
    neighborhood: '東心斎橋1-6-19、ロイヤル中家の1階、裏通り。長堀橋駅から徒歩4分、心斎橋駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。毎日150種以上の料理があり、天ぷら、串揚げ、ビーフカツもあって、おおさか料理はだしと醤油が基本。公式サイトのお品書きには、アレルギーは事前に知らせるようにとある。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、クジラ、肉のおおさか料理で、だしを使う。',
    notes: '[おおさか料理・東心斎橋、150品の巻物] 東心斎橋の裏通りにある、いつもにぎわうおおさか料理の店。巻物のように長い手書きのお品書きには、毎朝の市場で決める150種以上の料理が並び、値段は書いていない。旧店名は おおさか料理 喜川 浅井。16席のカウンターに座れば、7人ほどの板前の仕事が見られる (2026年5月)。お造り、タコのやわらか煮、夏の鱧、何度も来ている人がすすめる中がレアのビーフカツ、クジラの串揚げ、Nara-zuke とクリームチーズ、締めにマグロの漬け丼と魚のだしなど、好きに頼める。板前のお任せ5品 (14,300円か18,700円) やコースも。2026年6月は2人で飲んで3万円弱。だしとスタッフが好評で、完璧だが面白みはないという人も (2026年9月)。予約は電話で。日曜休み。',
  });
}

// ================================================================ 焼肉割烹 YP流 宗右衛門町本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27100744/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ypryu-honten.com/';
  const WD = day(['17:00', '23:00']); const WE = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'osaka_yp_ryu_souemoncho', name: '焼肉割烹 YP流 宗右衛門町本店 (Yakiniku Kappou YPryu Souemoncho)', category: 'OMNI',
    lat: 34.669613, lng: 135.505652, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Three of the nine grilled cuts in the plate courses come in sauce, the courses end with wagyu sukiyaki, and other dishes include beef shigureni and a soy-milk bun in a thickened sauce; salt-grilled cuts with wasabi are the plainest, but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: course yakiniku of wagyu, with yukhoe, sukiyaki and beef dashi.',
    hours_raw: 'Dinner daily 17:00–23:00 (last order 22:00); lunch Sat, Sun and holidays 11:30–14:30 (last order 14:00); closed on some days and on 31 December and 1 January (official site; Tabelog). Tabelog lists lunch every day; one diner found 15 lunch bowls a day and a queue before opening (October 2026). Reservations with a 2-hour limit; cancellations within 2 days are charged in full (Tabelog). No service charge; course prices include tax (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay and Alipay (Tabelog). 32 seats: 8 at the counter, tables, a curtained semi-private room for 4 and a private room for 5–8; private hire for 20–50; non-smoking, ashtray outside; free Wi-Fi (Tabelog). The entrance is locked: ring the intercom (Tabelog). From late October 2026 single dishes can be ordered here too (official site news, 26 October 2026). Opened 29 September 2017 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Souemoncho 1-12, basement of the セントラルビル on the east side of Souemoncho — 3 min from Nippombashi Stn, 5 min from Namba',
    cuisine: 'Course yakiniku of long-fed wagyu heifers, plated (prices from the official site, tax included, read November 2026) · each plate course has nine grilled cuts, three of tongue, three salt-grilled and three in sauce, plus wagyu sukiyaki dipped in egg: meat-only omakase ¥5,500, Souemoncho course with starters, rice and dessert ¥7,700 (the most popular per an October 2026 review), Kobe beef course with a mini steak ¥10,000, anniversary course with a cake in a treasure chest ¥10,000, premium anniversary ¥12,000, clay-pot course ending with tongue and salmon-roe rice ¥11,000; all-you-can-drink ¥2,000 more · the "flower staircase" platter of six cuts in other courses (October 2026) · house dishes: wagyu dashi chazuke, a soy-milk bun in a warm thickened sauce (official site) · cuts named in October 2026 reviews: Yamagata, Omi, Kobe and Kagoshima beef, tongue three ways, misuji, chuck tender, ribeye, sirloin cap · starters of three kimchi and three namul, seared yukhoe with egg yolk, beef shigureni, wakame soup, yuzu sherbet · lunch: wagyu and salmon-roe bowl with broth, 15 a day (October 2026), or the same courses as dinner',
    website: SITE, gmaps: gm('焼肉割烹 YP流 宗右衛門町本店'), menu_url: SITE + 'concept/',
    notes: "[Yakiniku · Souemoncho, the YP流 main shop] The first YP流, behind a locked door in a basement on the east side of Souemoncho, a minute from Dotonbori: course yakiniku of long-fed wagyu heifers, served with salt, wasabi or a light washing sauce, 'yakiniku that won't weigh on your stomach'. The ¥7,700 Souemoncho course is the favourite: kimchi and namul, seared yukhoe with egg yolk, three cuts of tongue, three salt-grilled and three sauce-grilled cuts from Yamagata, Omi or Kobe beef, then wagyu sukiyaki, rice and yuzu sherbet; staff time each plate to your pace and butcher at the counter in front of you. The shop says some 2,000 parties a year come for anniversaries, with cake in a treasure chest. Lunch at weekends brings a limited wagyu and salmon-roe bowl or the full course; one diner found the lunch meat thin for the price (October 2026). From late October 2026 single dishes can be ordered too. Ring the intercom.",
    chef_bio: { chef_name: null, roles: ['Meat craftsmen at the counter (unnamed)'], origin: null, background: YP_BG + ' The Souemoncho site adds that about 2,000 parties a year choose the shop for anniversaries, and that it serves its own wagyu dashi chazuke and a soy-milk bun in warm sauce. Tabelog notes guests include young people, couples and international travellers, and points business diners to the quieter Nishi-Shinsaibashi shop.', philosophy: '"Japanese-style yakiniku that won\'t weigh on your stomach" (official site).', specialty: 'Plate courses of nine cuts with wagyu sukiyaki; flower staircase platter.',
      anecdotes: [
        { text: '"Moreover, I appreciated how they timed the serving of the next meat based on my pace." — October 2026, the Pure Yakiniku Course ¥7,700.', source: R + 'B526459787/' },
        { text: '"Watching the butchering process right in front of me added to the overall experience! There were many young regulars dining alone" — October 2026, a first visit.', source: R + 'B536973599/' },
        { text: '"I was delighted to learn that I could enjoy the same course for lunch as I would for dinner" — October 2026, the last day of a trip to Osaka.', source: R + 'B537682080/' },
      ],
      japanese_sources_summary: '公式サイト: 焼肉 割烹 YP流 宗右衛門町本店、大阪市中央区宗右衛門町1-12 セントラルビル地下1階、「胃もたれしない、和の焼肉」、長期飼育の雌牛 (能登牛、山形牛など)、洗いダレ・塩・わさび、名物「花の階段盛り」、年間2,000組が記念日に利用、記念日コース限定「ケーキ付き宝箱」、和牛出汁茶漬けと豆乳まんじゅう、カウンターで職人の肉捌き、個室は5名から、月〜金17:00〜23:00 (L.O.22:00)、土・日・祝11:30〜14:30 (L.O.14:00)・17:00〜23:00、不定休、2026年10月26日から本店限定で単品利用。コース (税込): 肉おまかせ5,500円、宗右衛門町コース7,700円、神戸牛コース10,000円、記念日コース10,000円、プレミアム記念日コース12,000円、土鍋コース11,000円 (焼肉9種〈タン3種・塩焼き3種・タレ焼き3種〉＋和牛のすき焼き)、飲み放題は2,000円増し。食べログ (店舗会員): 2時間制、2日前からのキャンセルは100%、32席 (カウンター8、テーブル、4名の半個室、5〜8名の個室)、貸切20〜50名、禁煙、Wi-Fi、入口はオートロックでインターホン、12月31日・1月1日休み、2017年9月29日オープン、若い人、カップル、海外の旅行者にも人気。口コミ(2026年10月): 宗右衛門町コース7,700円、炙りユッケ、タン3種、Yamagata・Omi・Kobe・Kagoshima の牛、和牛のすき焼き、しぐれ煮、わかめスープ、ゆずシャーベット、目の前の肉捌き、ペースに合わせて出してくれる、ランチは1日15食の和牛といくらの丼、ランチの肉が薄く割高という声。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'jp/shopinfo/', SITE + 'concept/', R + 'B526459787/', R + 'B529550786/', R + 'B536888994/', R + 'B536973599/', R + 'B537064474/', R + 'B537487424/', R + 'B537524501/', R + 'B537639312/', R + 'B537682080/', R + 'B537784738/'] },
    cultural_comfort: { level: 'english', note: 'Official site and courses in English, Chinese and Korean; international travellers among the guests (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町1-12 セントラルビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site with October 2026 news; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町1番12号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'concept/', R + 'B526459787/'],
    price_note: 'Course prices from the official site (tax included; read 2026-11-01); the ¥7,700 course matches an October 2026 review.', last_checked: TODAY, items: [
      it('肉おまかせ', '', 'Meat-only omakase: nine grilled cuts and wagyu sukiyaki', '¥5,500', 'Courses', 'no', 'no', 'Official site.', 'niku_omakase'),
      it('宗右衛門町コース', '', 'Souemoncho course: nine grilled cuts, wagyu sukiyaki, starters, rice, dessert', '¥7,700', 'Courses', 'no', 'no', 'Official site; October 2026.', 'souemoncho_course'),
      it('神戸牛コース', '', 'Kobe beef course with a mini steak', '¥10,000', 'Courses', 'no', 'no', 'Official site.', 'kobe_course'),
      it('記念日コース', '', 'Anniversary course (cake in a treasure chest)', '¥10,000', 'Courses', 'no', 'no', 'Official site.', 'kinenbi_course'),
      it('土鍋コース', '', 'Clay-pot course (tongue and salmon-roe rice)', '¥11,000', 'Courses', 'no', 'no', 'Official site.', 'donabe_course'),
    ] }, {
    cuisine: '長期肥育の和牛の雌牛のコース焼肉、皿盛り (値段は公式サイト、税込、2026年11月に確認)・皿盛りのコースはどれも焼肉9種 (タン3種、塩焼き3種、タレ焼き3種) と卵で食べる和牛のすき焼き: 肉おまかせ5,500円、前菜・ご飯・デザートつきの宗右衛門町コース7,700円 (2026年10月の口コミではいちばん人気)、ミニステーキつきの神戸牛コース10,000円、ケーキ付き宝箱の記念日コース10,000円、プレミアム記念日コース12,000円、締めが牛タンといくらの土鍋ご飯の土鍋コース11,000円。飲み放題は2,000円増し・ほかのコースでは6種の「花の階段盛り」(2026年10月)・名物: 和牛出汁茶漬け、温かいあんかけの豆乳まんじゅう (公式サイト)・2026年10月の口コミに出てくる肉: Yamagata、Omi、Kobe、Kagoshima の牛、3種のタン、さまざまな部位・前菜は3種のキムチと3種のナムル、卵黄の炙りユッケ、牛のしぐれ煮、わかめスープ、ゆずシャーベット・ランチ: 1日15食の和牛といくらの丼 (出汁をかけても) (2026年10月)、または夜と同じコース',
    neighborhood: '宗右衛門町1-12、宗右衛門町の東側のセントラルビルの地下1階。日本橋駅から徒歩3分、なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。皿盛りのコースの焼肉9種のうち3種はタレ焼きで、締めは和牛のすき焼き。ほかにしぐれ煮や、あんかけの豆乳まんじゅうも。塩焼きとわさびがいちばんシンプルだが、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛のコース焼肉で、ユッケ、すき焼き、牛の出汁も。',
    notes: '[焼肉・宗右衛門町、YP流の本店] 道頓堀から1分、宗右衛門町の東側のビルの地下、オートロックの扉の奥にある最初の YP流。長期肥育の和牛の雌牛を、塩、わさび、軽い洗いダレで食べるコース焼肉で、「胃もたれしない、和の焼肉」。人気は7,700円の宗右衛門町コース: キムチとナムル、卵黄の炙りユッケ、タン3種、Yamagata、Omi、Kobe などの牛の塩焼き3種とタレ焼き3種、それから和牛のすき焼き、ご飯、ゆずシャーベット。ペースに合わせて肉を出してくれて、カウンターでは目の前で肉を捌く。店によると年間2,000組ほどが記念日に訪れ、ケーキ付き宝箱で祝う。週末のランチは数量限定の和牛といくらの丼か、夜と同じコース。ランチの肉が薄く割高だったという人も (2026年10月)。2026年10月末からは単品でも頼める。入口はインターホンで。',
  });
}

save();
