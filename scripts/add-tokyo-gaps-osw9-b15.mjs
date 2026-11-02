// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 15.
//   + 兼定 Kanesada (old-school sushi counter of 30–40+ years off Roppongi crossing; horse-mackerel box sushi; Kyubey-trained owner)
//   + R2 SUPPER CLUB (DJ lounge bar and restaurant open to 5 am; vegan, vegetarian and halal options claimed by the shop)
//   + 焼鶏 輪 Yakitori Rin (12-seat yakitori with a large list of rare shochu and sake; course from ¥4,500)
//   + SPIGOLA (small Italian with terrace; weekday pasta lunch with salad, tea and dessert; dinner omakase about ¥12,000)
//   Chain / group check (working line of 2026-11-02): R2 SUPPER CLUB's listing offers private hire at its sister R1 (R1TOKYO
//   Bar & Restaurant, 13260955, 6-2-6) — a group of two, none in data, so R2 is drafted as the one shop. None of the four is
//   in data/tokyo, osaka or kyoto by name, Tabelog id or address. No pin offsets needed: Kanesada, SPIGOLA, Rin, Ichi Oku and
//   Provision sit in separate buildings 10–35 m apart. Tabelog URLs copied from each listing.txt line 1. No placeholder hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 兼定
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13001227/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '21:00']);
  put({
    id: 'tokyo_kanesada_roppongi', name: '兼定 (Kanesada)', category: 'OMNI',
    lat: 35.66489, lng: 139.732054, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi with soy sauce, inari and cooked appetizers; nothing is said about gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter.',
    hours_raw: 'Mon–Sat 17:30–21:00; closed Sundays and holidays; hours may change, so check first (Tabelog). 10 seats (an 8-seat counter per an August 2023 diner); whole-shop hire possible. Non-smoking. Cards (VISA, JCB, AMEX, Diners); no e-money or QR. Omakase or à la carte; about ¥20,000–30,000 a head in reviews. A December 2025 regular brought wine. A long-time diner notes it can feel hard for newcomers to enter (January 2016 visit).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 4-4-6, 谷口ビル 1F, a quiet spot just off Roppongi crossing',
    cuisine: 'Traditional Edomae sushi, small nigiri on firm rice (2022–2025 reviews) · the house speciality is horse-mackerel box (pressed) sushi; inari sushi to finish · appetizers such as wakame with gari, grilled nodoguro, mehikari, kawahagi liver, Biwa trout, Tokyo Bay flounder sashimi · nigiri of akami, chutoro, kohada, aori-ika, akagai, sea urchin, ikura (2022–2025 reviews) · omakase course; sake including bottles from the chef\'s home prefecture, Aomori, and shochu with wasabi (wasabi-wari)',
    website: null, gmaps: gm('兼定 六本木4-4-6'), menu_url: null,
    notes: "[Sushi · Roppongi, an old-school counter of forty-odd years] A plain, unflashy sushi counter in a quiet spot just off Roppongi crossing, open since before the bubble years — over 30 to 40 years, per long-time regulars. The owner trained at Kyubey, reviewers say, and the sushi follows that line: small nigiri on notably firm rice, a horse-mackerel box sushi rarely seen in Kanto, inari to finish, and careful appetizers made to go with drink, including sake from Aomori. Regulars of decades call it reliable rather than showy; one notes it can feel hard for newcomers to walk into. Dinner only, Monday to Saturday; reviews in our sources run to December 2025.",
    chef_bio: { chef_name: null, roles: [], origin: 'Aomori (the chef\'s hometown, per an August 2023 diner)',
      background: 'Reviewers write that the owner trained at Kyubey and has run the shop in Roppongi since before the bubble era (May 2022), that the chef came to Tokyo at 16 and has made sushi ever since (August 2023, with the reviewer\'s own caveat), and that the master was selected as one of the "top 100 modern artisans" (September 2022). A December 2025 regular says the shop was originally run by siblings and is now run by Ken, an apprentice who handles the kitchen; an August 2023 diner also mentions "the apprentice Ken".',
      philosophy: null, specialty: 'Horse-mackerel box sushi; small Kyubey-style nigiri.',
      anecdotes: [
        { text: '"Rather than flashiness, it has built its support through meticulous craftsmanship, making it a trustworthy establishment." — December 2025.', source: R + 'B107302767/' },
        { text: '"The signature Aji (Horse Mackerel) pressed sushi is quite rare in the Kanto region." — November 2022.', source: R + 'B457419073/' },
        { text: '"The quality of the ingredients is outstanding, and the sushi is small—just like Kyubey." — May 2022.', source: R + 'B449615254/' },
      ],
      japanese_sources_summary: '食べログ: 兼定、港区六本木4-4-6 谷口ビル1F、月〜土17:30〜21:00、日祝休み、変わることもある、10席、貸切可、禁煙、カード可 (電子マネー・QR不可)。口コミ(2016年〜2025年12月): 六本木で30〜40年以上、店主は Kyubey で修業、小ぶりの握りと硬めのシャリ、名物の鯵の箱寿司、締めのいなり、わかめとガリ、のどぐろの焼き物、めひかり、カワハギの肝、いくらと雲丹、Aomori の日本酒、わさび割り、もとは兄弟で営み今は弟子の Ken が切り盛りという声。',
      confidence: 'low', sources: [TB, R + 'B107302767/', R + 'B140710087/', R + 'B412951430/', R + 'B449615254/', R + 'B457419073/', R + 'B470764326/', R + 'B471806726/', R + 'B493323585/', R + 'B508038097/'] },
    cultural_comfort: { level: 'japanese', note: 'An old regulars\' counter; can feel hard for newcomers (2016 visit).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-4-6 谷口ビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (not shop-maintained) with hours; latest review dated December 2025.' },
    pin_source: `Tabelog ${TB} (35.664890, 139.732054); GSI 東京都港区六本木四丁目4番 (lot) 15m; Ichi Oku (4-4-5) is 10 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B107302767/', R + 'B457419073/'],
    price_note: 'No prices in the sources read; reviewers paid about ¥20,000–30,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Horse-mackerel box (pressed) sushi', '', 'Sushi', 'ask', 'no', 'House speciality (2016–2025 reviews).', 'aji_hakozushi'),
      it('', '', 'Omakase', '', 'Course', 'ask', 'no', '2023–2024 reviews.', 'omakase'),
    ] }, {
    cuisine: '昔ながらの江戸前鮨、硬めのシャリの小ぶりの握り (2022〜2025年の口コミ)・名物は鯵の箱寿司、締めにいなり・つまみ: わかめとガリ、のどぐろの焼き物、めひかり、カワハギの肝、Biwa の鱒、Tokyo Bay の平目の刺身・握り: 赤身、中トロ、小肌、アオリイカ、赤貝、雲丹、いくら (2022〜2025年の口コミ)・おまかせ。大将の故郷 Aomori の日本酒も、焼酎のわさび割り',
    neighborhood: '六本木4-4-6 谷口ビル1F、六本木交差点からすぐの静かな場所',
    gf_detail: '要確認。醤油を使う江戸前鮨で、いなりや火を通したつまみも。グルテンについての説明はない。',
    vegan_detail: 'ヴィーガン不可。鮨のカウンター。',
    notes: '[鮨・六本木、40年ほど続く昔ながらのカウンター] 六本木交差点からすぐの静かな場所にある、飾り気のない鮨のカウンター。長年の常連によればバブルの前から30〜40年以上続く。口コミによれば店主は Kyubey で修業し、鮨もその流れで、硬めのシャリの小ぶりの握り、関東では珍しい鯵の箱寿司、締めのいなり、酒に合うよう丁寧に作ったつまみ。Aomori の日本酒もある。何十年も通う常連は派手さより信頼の店と書き、初めてだと入りにくいという声も。夜のみ、月〜土。手元の口コミは2025年12月まで。',
  });
}

// ================================================================ R2 SUPPER CLUB
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13135514/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.r2sc.jp/jp/';
  const W = day(['18:00', '05:00']); const S = day(['18:00', '23:59']);
  put({
    id: 'tokyo_r2_supper_club_roppongi', name: 'R2 SUPPER CLUB', category: 'OMNI',
    lat: 35.663707, lng: 139.730709, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists gluten-free options, but no gluten-free dishes are named in the sources read; the menu includes pasta (May 2026).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'The shop says vegan, vegetarian and halal options are available for international guests, and a seasonal "Vegetarian Plate" is popular (Tabelog shop text). Ask which dishes are fully vegan.',
    hours_raw: 'Mon–Sat and days before holidays 18:00–05:00 (the shop note gives dinner 19:00–05:00, last order 05:00); Sun 18:00–24:00; open all year (Tabelog). DJ, weekends especially. Dress code: smart, clean clothes (April 2026). No table charge (May 2026); VIP sofa tables need a bottle order. Drinks about ¥1,500–3,000 a glass, food from about ¥1,500 (April 2026). 127 seats: counter, tables, sofas, terrace; basement club floor, private rooms for 2–10 and a VIP floor (Tabelog). Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. Staff from overseas; ordering in Japanese works too (March 2026). Halal options are offered (Tabelog), but no certification is cited. Opened 26 November 2011 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 7-14-23, ラウンドクロス六本木 1F — near Roppongi crossing',
    cuisine: 'A lounge bar and restaurant with a DJ (2026 reviews) · cocktails, especially the well-known yuzu mojito; martinis, gin and tonic, whisky sodas; about 50 drinks on the party menus (Tabelog) · food: Cobb salad, crab pasta (May 2026), a seasonal "Vegetarian Plate" and low-carb à la carte dishes (Tabelog shop text) · party courses with two hours of drinks ¥6,600 (20 or more) and a basement course ¥5,500 (Tabelog) · birthday plates and towers',
    website: SITE, gmaps: gm('R2 SUPPER CLUB 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Lounge bar · Roppongi, a DJ supper club open till 5 am] A stylish Roppongi lounge bar of soft light and sofas, with a DJ upstairs, a club floor below and a VIP floor, open from 6 pm until 5 the next morning. It works both as a late bar — the yuzu mojito is the drink people mention — and, as several 2026 diners discovered, as a place to eat: Cobb salad, crab pasta, a vegetarian plate. The shop advertises vegan, vegetarian and halal options for international guests, and staff are from overseas. Guests found it calmer than a club early on and lively and international after midnight; drinks are on the pricey side but there is no table charge. Dress smartly.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sister venue of R1 (R1TOKYO Bar & Restaurant, 6-2-6), about 3 minutes away (Tabelog shop text)',
      background: 'Opened 26 November 2011 (Tabelog). The shop text mentions a chef who has worked with famous brands creating finger-food courses, and offers private hire at its sister R1, a three-minute walk away. Guests in 2026 describe staff from overseas and an international crowd. No one is named in the sources read.',
      philosophy: 'International guests can feel at ease: vegan, vegetarian and halal options (Tabelog shop text).', specialty: 'Yuzu mojito; DJ lounge until 5 am.',
      anecdotes: [
        { text: '"I ordered the Yuzu Mojito, which is well-known here. It was made with great care, rich in flavor, and perfectly balanced." — May 2026.', source: R + 'B528782774/' },
        { text: '"I initially imagined a "noisy club," but my impression changed for the better." — April 2026.', source: R + 'B527510860/' },
        { text: '"Even past midnight, the atmosphere inside was vibrant and lively, mostly filled with international guests." — October 2026.', source: R + 'B537921404/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): R2 SUPPER CLUB、港区六本木7-14-23 ラウンドクロス六本木1F、月〜土・祝前日18:00〜翌5:00、日18:00〜24:00、年中無休、127席、地下の個室 (2〜10名) と VIP フロア、禁煙、カード可、2011年11月26日オープン、ヴィーガン・ベジタリアン・グルテンフリー・ハラルのメニューあり。店の紹介: 海外のお客様も安心のヴィーガン、ベジタリアン、ハラルのメニュー、ベジタリアンプレート、徒歩3分の R1 の貸切も。パーティーコース6,600円、地下のコース5,500円。口コミ(2026年2月〜10月): DJ、柚子のモヒート、コブサラダ、蟹のパスタ、ドレスコード、チャージなし、海外出身のスタッフ、夜中は海外の客で賑わう。',
      confidence: 'medium', sources: [TB, SITE, R + 'B492440426/', R + 'B523515395/', R + 'B524615625/', R + 'B526162931/', R + 'B527510860/', R + 'B527672924/', R + 'B528782774/', R + 'B528931360/', R + 'B533506066/', R + 'B537921404/'] },
    cultural_comfort: { level: 'english', note: 'Staff from overseas and a largely international crowd (2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木7-14-23 ラウンドクロス六本木 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with party courses and an official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663707, 139.730709); GSI 東京都港区六本木七丁目14番 (lot) 62m; no record within 40 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B526162931/'],
    price_note: 'Course prices from Tabelog (tax included); drink and food ranges from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Party course with 2 hours of drinks (20 guests or more)', '¥6,600', 'Course', 'ask', 'ask', 'Tabelog.', 'party_course'),
      it('', '', 'Basement party course: appetizers, salad, pasta, main, dessert, drinks', '¥5,500', 'Course', 'ask', 'ask', 'Tabelog; basement floor only.', 'basement_course'),
      it('', '', 'Yuzu mojito', '', 'Drinks', '', '', 'May 2026 reviews; cocktails about ¥1,500–3,000.', 'yuzu_mojito'),
    ] }, {
    cuisine: 'DJ のいるラウンジバー兼レストラン (2026年の口コミ)・カクテル、とくに評判の柚子のモヒート。マティーニ、ジントニック、ウイスキーソーダ。パーティーメニューは約50種の飲み物 (食べログ)・料理: コブサラダ、蟹のパスタ (2026年5月)、季節の「ベジタリアンプレート」と糖質を抑えたアラカルト (食べログの店の紹介)・2時間飲み放題付きのパーティーコース6,600円 (20名から)、地下のコース5,500円 (食べログ)・誕生日のプレートやタワー',
    neighborhood: '六本木7-14-23 ラウンドクロス六本木1F。六本木交差点の近く',
    gf_detail: '要確認。食べログにはグルテンフリーのメニューありとあるが、手元の情報ではどの料理かわからない。パスタもある (2026年5月)。',
    vegan_detail: '店は海外のお客様向けにヴィーガン、ベジタリアン、ハラルのメニューがあるとし、季節の「ベジタリアンプレート」が人気 (食べログの店の紹介)。どれが完全なヴィーガンかは確認を。',
    notes: '[ラウンジバー・六本木、朝5時まで開く DJ のサパークラブ] 柔らかな照明とソファの六本木のラウンジバー。上の階に DJ、地下にクラブフロアと VIP フロアがあり、夕方6時から翌朝5時まで。夜遅いバーとして使え (評判は柚子のモヒート)、2026年の客が気づいたように食事もできる: コブサラダ、蟹のパスタ、ベジタリアンプレート。店は海外の客向けにヴィーガン、ベジタリアン、ハラルのメニューを用意し、スタッフも海外出身。早い時間はクラブより落ち着き、夜中は海外の客で賑やか。飲み物は高めだがチャージはない。きれいめの服装で。',
  });
}

// ================================================================ 焼鶏 輪
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13221953/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'tokyo_yakitori_rin_roppongi', name: '焼鶏 輪 (Yakitori Rin)', category: 'OMNI',
    lat: 35.665036, lng: 139.732402, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers come with salt or tare; dishes include chicken tender with wasabi and soy sauce and chicken skin with ponzu (September 2024). Nothing is said about gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori shop; the vegetable dishes come within chicken courses.',
    hours_raw: 'Mon–Sat and days before/after holidays 18:00–23:00 (food last order 22:00, drinks 22:30); closed Sundays and holidays, plus occasional closures (Tabelog). ¥600 appetizer charge and 10% service; à la carte guests pay a ¥700 seat charge instead (Tabelog). 12 seats: 6 at the counter, tables and semi-private rooms for 2–8 with open ceilings; private hire up to 20. Non-smoking; smoking area at the entrance. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. Google Maps shows it as "Yakitori Ring" (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-5-14, アーバンビル 1F, down the street beside HUB Roppongi — 2 min from Roppongi Stn exit 7 (Oedo line), 4 min from exit 6 (Hibiya line)',
    cuisine: 'Yakitori with a long list of drinks: rare shochu, sake and wine chosen with the master\'s pairing advice (2023–2026 reviews) · the classic 10-dish course ¥4,500 with three appetizers, salad, rare chicken tender with wasabi and soy, and seven skewers (September 2024); a chef\'s omakase course (July 2026) · skewers: neck, wings (deboned), tsukune, chōchin, skin, bonjiri, liver, cheese · chicken sashimi; low-temperature liver; chicken skin with ponzu; grilled cheese; atsuage and nagaimo · to finish: oyakodon with minced chicken, chicken zosui, chicken soup or egg over rice · homemade pudding and crème brûlée',
    website: null, gmaps: gm('焼鶏 輪 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Roppongi, a small yakitori known for its rare shochu] A 12-seat yakitori a couple of minutes from Roppongi Station, with a counter and semi-private rooms, where the drinks list is as much the point as the skewers: diners keep mentioning rare shochu and sake, and a master who explains pairings. The ¥4,500 classic course runs from appetizers and rare chicken tender to seven skewers; extras include deboned wings, chōchin, chicken sashimi and an unusual oyakodon made with minced chicken. Reviews from 2023 to 2026 are mostly warm; one February 2025 diner found the head chef harsh with the staff. ¥600 appetizer charge plus 10% service.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Diners describe a master who explains drink pairings (February 2026) and a wide range of rare drinks the shop seems to source through personal connections (September 2024). In November 2025 a repeat diner saw the manager working with a part-timer on one visit, and the manager\'s wife serving drinks on the next. A February 2025 diner found the head chef strict and harsh with the staff. No one is named in the sources read.',
      philosophy: null, specialty: 'Yakitori with rare shochu and sake; minced-chicken oyakodon.',
      anecdotes: [
        { text: '"The variety of drinks was impressive, with many rare shochu options." — November 2023 visit.', source: R + 'B475090412/' },
        { text: '"The chicken wings were deboned and incredibly juicy, served piping hot." — June 2025.', source: R + 'B509010119/' },
        { text: '"Even for first-timers, … kindly guide you to your preferred drinks." — July 2026, chef\'s omakase course.', source: R + 'B532670184/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼鶏 輪、港区六本木4-5-14 アーバンビル1F、大江戸線六本木駅7番出口から徒歩2分、日比谷線6番出口から4分、月〜土・祝前日・祝後日18:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、日祝休み、不定休あり、お通し600円とサービス料10%、アラカルトは席料700円、12席 (カウンター6、テーブル、2〜8名の半個室)、貸切20名まで、禁煙 (入口に喫煙所)、カード可。口コミ(2023年〜2026年7月): 珍しい焼酎や日本酒、10品のコース4,500円、手羽先、ちょうちん、鶏刺し、そぼろの親子丼、鶏雑炊、自家製プリン、店主がお酒の組み合わせを説明。',
      confidence: 'medium', sources: [TB, R + 'B475090412/', R + 'B491987724/', R + 'B509010119/', R + 'B511862558/', R + 'B512758247/', R + 'B517367543/', R + 'B517425636/', R + 'B522795442/', R + 'B526274241/', R + 'B532670184/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff guide you through the drinks list (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-5-14 アーバンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.665036, 139.732402); GSI 東京都港区六本木四丁目5番 (lot) 7m; SPIGOLA (4-4-4) is 17 m and Provision (4-5-13) 20 m away in other buildings; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491987724/'],
    price_note: 'Course price from a September 2024 review; ¥600 appetizer charge and 10% service (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Classic course, 10 dishes incl. seven skewers', '¥4,500', 'Course', 'ask', 'no', 'September 2024 review.', 'classic_course'),
      it('', '', 'Oyakodon with minced chicken (to finish)', '', 'Finish', 'ask', 'no', '2024–2025 reviews.', 'oyakodon'),
    ] }, {
    cuisine: '焼き鳥と、豊富なお酒: 珍しい焼酎、日本酒、ワインを店主が料理に合わせて案内 (2023〜2026年の口コミ)・前菜3種、サラダ、レアのささみのわさび醤油、串7本の定番の10品のコース4,500円 (2024年9月)、おまかせコース (2026年7月)・串: せせり、骨を抜いた手羽先、つくね、ちょうちん、皮、ぼんじり、レバー、チーズ・鶏刺し、低温調理のレバー、鶏皮ポン酢、チーズ焼き、厚揚げと長芋・締め: そぼろの親子丼、鶏雑炊、鶏のスープ、卵かけご飯・自家製プリンとクレームブリュレ',
    neighborhood: '六本木4-5-14 アーバンビル1F、HUB 六本木店の横の道を入る。六本木駅7番出口 (大江戸線) から徒歩2分、6番出口 (日比谷線) から4分',
    gf_detail: '要確認。串は塩かたれで、ささみのわさび醤油や鶏皮ポン酢もある (2024年9月)。グルテンについての説明はない。',
    vegan_detail: 'ヴィーガン不可。焼き鳥の店で、野菜は鶏のコースの中で出る。',
    notes: '[焼き鳥・六本木、珍しい焼酎で知られる小さな焼き鳥店] 六本木駅から2分ほど、カウンターと半個室の12席の焼き鳥店。串と同じくらいお酒が主役で、客は珍しい焼酎や日本酒、組み合わせを説明してくれる店主のことをよく書く。4,500円の定番コースは前菜からレアのささみ、串7本まで。追加で骨抜きの手羽先、ちょうちん、鶏刺し、そぼろで作る珍しい親子丼も。2023〜2026年の口コミはおおむね好評で、2025年2月には店主がスタッフに厳しかったという声も。お通し600円とサービス料10%。',
  });
}

// ================================================================ SPIGOLA
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13132070/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['18:00', '23:00']); const SA = day(['12:00', '15:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_spigola_roppongi', name: 'SPIGOLA', category: 'OMNI',
    lat: 35.665001, lng: 139.732215, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta is the centre of the menu, including handmade pasta, and a porcini cutlet has appeared (June 2026); nothing is said about gluten.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Lunch salads come topped with cheese and the dinner omakase is meat and fish; no vegan dishes are described.',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:30) and 18:00–23:00; Sat 12:00–15:00 and 18:00–23:00; closed Sundays, holidays and over New Year (Tabelog). Weekday lunch is a seasonal special until 30 November (Tabelog), so lunch after that is unconfirmed. Dinner is mainly an omakase of about ¥12,000, with à la carte too (Tabelog). No service charge. 18 seats: 6 at the counter, 8 at tables, 4 on the terrace; private hire up to 20. Non-smoking. Cards, e-money and QR (PayPay, Rakuten Pay, au PAY). Lunch can be booked; dogs welcome (December 2024).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-4-4, メゾン六本木 1F, a narrow alley in Roppongi 4-chome — 1 min from Roppongi Stn exit 7 (Oedo line), 3 min from exit 4a (Hibiya line)',
    cuisine: 'Seasonal Italian (2024–2026 reviews) · lunch with salad (shaved cheese, greens, vegetable jelly), Sayama black tea and dessert such as tiramisu: daily pasta ¥1,800 (porcini and mushroom oil, sea-bream puttanesca, squid ink, smoked salmon in light tomato); Genovese ¥2,200 made with a pesto said to have won a world championship; karasumi pasta; carbonara (2025–2026 reviews) · dinner omakase about ¥12,000 (Tabelog): in June 2026, panzanella with vegetables from Yatsugatake, burrata and peach, chilled corn soup, porcini cutlet, handmade pasta with charcoal-grilled sweetfish and uruka, beef; homemade wild-boar prosciutto and karasumi shortbread (October 2025); bottarga pasta (June 2025) · wine by the glass, chosen by sommelier Miura (August 2024 visit); a duck-themed dinner event (January 2026)',
    website: null, gmaps: gm('SPIGOLA 六本木4-4-4'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Roppongi, a one-person seasonal Italian with a terrace] A small, calm Italian of 18 seats with a counter, an open kitchen and a little terrace (cherry blossoms in spring) in a narrow Roppongi 4-chome alley. It moved here from Meguro and marked its tenth anniversary in 2024. At lunch, the draw is pasta at prices one regular says have not changed in two years — the daily pasta at ¥1,800 or a Genovese made with a prize-winning pesto at ¥2,200, both with a cheese-topped salad, Sayama black tea and dessert. Dinner is an omakase of about ¥12,000 built on the season: porcini, sweetfish with uruka on handmade pasta, homemade wild-boar prosciutto. A June 2026 regular notes one person runs the whole restaurant. Weekday lunch is offered until 30 November.",
    chef_bio: { chef_name: null, roles: [], origin: 'Formerly in Meguro (August 2024 visit)',
      background: 'A long-time regular has followed the restaurant since its Meguro days and celebrated its 10th anniversary in August 2024, leaving the wine to "Sommelier Miura". In June 2026 the same regular notes that one person manages the restaurant, receives porcini alerts by email, and sources vegetables from Yatsugatake. An October 2025 diner mentions the welcoming owner. The owner is not named in the sources read.',
      philosophy: null, specialty: 'Seasonal omakase; daily lunch pasta.',
      anecdotes: [
        { text: '"Even with just one person managing the restaurant, I was once again treated to the best seasonal ingredients in their finest form." — June 2026, omakase.', source: R + 'B11959725/' },
        { text: '"Honestly, the quality is always satisfying, and it\'s a mystery why it\'s not crowded." — October 2025, daily pasta ¥1,800.', source: R + 'B465212446/' },
        { text: '"However, the salad, pasta, and dessert came out quite quickly, so it felt like we were being rushed to leave within an hour." — December 2024, lunch.', source: R + 'B499278472/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): SPIGOLA、港区六本木4-4-4 メゾン六本木1F、大江戸線六本木駅7番出口から徒歩1分、日比谷線4a出口から3分、月〜金11:30〜14:00、18:00〜23:00、土12:00〜15:00、18:00〜23:00、日祝・年末年始休み、平日ランチは11月30日までの季節限定、夜は約12,000円のおまかせが中心でアラカルトも、サービス料なし、18席 (カウンター6、テーブル8、テラス4)、貸切20名まで、禁煙、カード・電子マネー・QR可。口コミ(2024年8月〜2026年6月): Meguro から移転し2024年に10周年、日替わりパスタ1,800円、ジェノベーゼ2,200円、サラダ・Sayama の紅茶・デザート付き、からすみのパスタ、夜は Yatsugatake の野菜、ポルチーニ、鮎とうるかの手打ちパスタ、自家製の猪の生ハム、ソムリエ Miura、犬も可、一人で切り盛り。',
      confidence: 'medium', sources: [TB, R + 'B11959725/', R + 'B465212446/', R + 'B492266323/', R + 'B499278472/', R + 'B501194280/', R + 'B509116933/', R + 'B515764375/', R + 'B518118656/', R + 'B521061042/', R + 'B521328375/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter and terrace; omakase at dinner.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都港区六本木4-4-4 メゾン六本木 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a seasonal lunch notice running to 30 November; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.665001, 139.732215); GSI 東京都港区六本木四丁目4番 (lot) 10m; Ichi Oku (4-4-5) is 10 m, Yakitori Rin (4-5-14) 17 m and Kanesada (4-4-6) 19 m away in other buildings; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B465212446/'],
    price_note: 'Lunch prices from 2025–2026 reviews (with salad, tea and dessert); dinner omakase price from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Lunch: daily pasta with salad, tea, dessert', '¥1,800', 'Lunch', 'ask', 'ask', 'June–October 2025 reviews.', 'pasta_lunch'),
      it('', '', 'Lunch: Genovese with salad, tea, dessert', '¥2,200', 'Lunch', 'no', 'ask', 'July 2025 and December 2024 reviews.', 'genovese'),
      it('', '', 'Dinner omakase', '¥12,000', 'Course', 'ask', 'no', 'Tabelog (about).', 'omakase'),
    ] }, {
    cuisine: '季節のイタリアン (2024〜2026年の口コミ)・昼はサラダ (削ったチーズ、葉野菜、野菜のゼリー)、Sayama の紅茶、ティラミスなどのデザート付き: 日替わりパスタ1,800円 (ポルチーニときのこのオイル、鯛のプッタネスカ、イカ墨、軽いトマトのスモークサーモン)、世界大会で優勝したというペストのジェノベーゼ2,200円、からすみのパスタ、カルボナーラ (2025〜2026年の口コミ)・夜は約12,000円のおまかせ (食べログ): 2026年6月は Yatsugatake の野菜のパンツァネッラ、ブッラータと桃、冷たいコーンスープ、ポルチーニのカツレツ、炭火の鮎とうるかの手打ちパスタ、牛肉。自家製の猪の生ハムとからすみのショートブレッド (2025年10月)、ボッタルガのパスタ (2025年6月)・グラスワインはソムリエの Miura が選ぶ (2024年8月)、鴨の会 (2026年1月)',
    neighborhood: '六本木4-4-4 メゾン六本木1F、六本木4丁目の細い路地。六本木駅7番出口 (大江戸線) から徒歩1分、4a出口 (日比谷線) から3分',
    gf_detail: '要確認。手打ちを含むパスタが中心で、ポルチーニのカツレツも出た (2026年6月)。グルテンについての説明はない。',
    vegan_detail: '要確認。昼のサラダにはチーズがのり、夜のおまかせは肉と魚。ヴィーガンの料理の記載はない。',
    notes: '[イタリアン・六本木、一人で営む季節のイタリアン、テラス付き] 六本木4丁目の細い路地、カウンター、オープンキッチン、小さなテラス (春は桜) の18席の落ち着いたイタリアン。Meguro から移ってきて、2024年に10周年。昼は、ある常連によれば2年間値段が変わらないパスタが目当てで、日替わり1,800円、世界大会で優勝したというペストのジェノベーゼ2,200円、どちらもチーズののったサラダ、Sayama の紅茶、デザート付き。夜は季節のおまかせ (約12,000円): ポルチーニ、うるかと鮎の手打ちパスタ、自家製の猪の生ハム。2026年6月の常連によれば店は一人で切り盛り。平日のランチは11月30日まで。',
  });
}

save();
