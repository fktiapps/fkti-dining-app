// Osaka sweep (2-mile circle around Dotonbori), batch 201 — mom-and-pop phase queue (≤20 seats, 30+ reviews),
// nearest-first past ~1 km.
//   + 中国菜 Yin Yang (Chinese Sai Yin Yang) — Cantonese-leaning Chinese with natural wine, 2F behind the W Osaka; Hakuromachi
//   + #にくといえばまつだ 大阪店 (# Niku to ieba Matsuda Oosaka ten) — wagyu yakiniku counter, the Osaka sister of a Nara shop
//     (two shops in all, kept: not a chain); same building as Yin Yang (1F)
//   + 中菜バル食堂 杏月 (Chusai Baru Shokudo Azuki) — small Chinese bar-diner run by a couple; Minamisenba, same address as Tengan (b197)
//   + お気軽天ぷら処 天神 (Okigaru Tempura Dokoro Tenjin) — Hakata-style everyday tempura counter, the one shop of Patria Co.; Hakuromachi
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 201);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 中国菜 Yin Yang
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27142653/'; const R = TB + 'dtlrvwlst/';
  const D = ['17:30', '22:30']; const L = ['11:30', '14:00'];
  put({
    id: 'osaka_chinese_yin_yang_hakuromachi', name: '中国菜 Yin Yang (Chinese Sai Yin Yang)', category: 'OMNI',
    lat: 34.678051, lng: 135.499425, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: dumplings, shumai, spring rolls, noodle soups and crêpe-wrapped char siu are wheat, and the sauces (black bean, soy-garlic, chili) are not described; nothing is marked gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an à la carte Chinese menu built on pork, chicken, shrimp, squid and fish; no vegan dishes are described.',
    hours_raw: 'Tue–Fri 11:30–14:00 and 17:30–22:30; Mon and Sat 17:30–22:30 (last order 21:50); closed Sunday (Tabelog). Lunch cannot be reserved and is paid in cash or PayPay only; dinner reservations taken, two people usually seated at the counter or a table for two (Tabelog). One drink per person at dinner (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay, Rakuten Pay; no e-money (Tabelog). 17 seats: 7 at the counter, 10 at tables (Tabelog details); the shop text says 6 counter seats, one table for 2 and two tables for 4. Non-smoking; English menu; free Wi-Fi (Tabelog). On the 2nd floor of the 8R Bldg, reached by stairs at the back of the building (January 2025 review). Opened 6 April 2024 (Tabelog).',
    hours: { 0: day(D), 1: day(L, D), 2: day(L, D), 3: day(L, D), 4: day(L, D), 5: day(D) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hakuromachi 4-3-14, 8R Bldg 2F, behind the W Osaka hotel — 4 min walk from Shinsaibashi Stn (Midosuji Line)',
    cuisine: 'Cantonese-leaning Chinese, lightly seasoned, à la carte (17 seats) · market fish and seasonal vegetables · assorted appetizer platter (five kinds, e.g. spicy fried shrimp, yodare chicken, fresh-fish carpaccio, Shaoxing-marinated tomatoes) · mapo tofu with fermented black beans · tom yum fried rice · Cantonese fresh-fish carpaccio · stir-fried squid with black beans · sweet and sour pork · shrimp chili, shrimp mayo · yurinchi · shrimp dumplings, chicken and water chestnut shumai, oyster shumai · char siu wrapped in a crêpe · spring rolls · noodle soup with green onion and char siu · almond tofu · natural wine, Shaoxing wine, turmeric lemon sour · weekday lunch sets about ¥1,200 (April 2026)',
    website: null, gmaps: gm('中国菜 Yin Yang 博労町'), menu_url: null,
    notes: "[Chinese · Hakuromachi, a white, stylish room up the back stairs behind the W Osaka] Easy to miss: climb the stairs at the back of an older, well-renovated building and the second floor opens into a bright, modern room with a counter and tables. A January 2025 reviewer called it the second shop of Tokuchaina, and a September 2026 diner who usually goes to Tokuchaina came here for the first time. The cooking is Cantonese-leaning and gently seasoned, with market fish and seasonal vegetables: start with the assorted appetizer platter, then the mapo tofu sharpened with fermented black beans, a fresh-fish carpaccio, stir-fried squid with black beans, shrimp chili or the tom yum fried rice, and finish with a green-onion and char siu noodle soup. Natural wines and Shaoxing run alongside. Weekday lunch is a few sets (mapo tofu, yurinchi, shrimp chili and a weekly special); an April 2026 diner had the special soy-sauce noodles with four small sides for ¥1,200. Dishes come out at a leisurely pace, so order most of it at once.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Chinese restaurant opened 6 April 2024 (Tabelog). A January 2025 review calls it the second shop of Tokuchaina; a September 2026 reviewer usually eats at Tokuchaina.', philosophy: 'Cantonese-inspired dishes with light seasoning, made from fresh domestic fish and seasonal vegetables bought at the market, paired with natural wine and Shaoxing wine (Tabelog, shop-provided).', specialty: 'Mapo tofu; assorted appetizers; Cantonese-style fresh-fish carpaccio.',
      anecdotes: [
        { text: '"I was pleasantly surprised by the lavishness of the side dishes for lunch! Century egg tofu, pickled mustard greens, menma, and pickles … I think it\'s a great deal to have such a luxurious lunch for just JPY 1200." — April 2026, weekly special Chinese noodles.', source: R + 'B499481592/' },
        { text: '"The Char Siu Wrapped in Crepe was inspired by Peking Duck. The rich sauce was delicious, and the chewy crepe combined with chunky char siu made for a hearty dish." — October 2026.', source: R + 'B537586046/' },
      ],
      japanese_sources_summary: '食べログ: 中国菜 Yin Yang、大阪市中央区博労町4-3-14 8Rビル 2F、心斎橋駅から徒歩4分、火〜金11:30〜14:00・17:30〜22:30、月・土17:30〜22:30 (L.O. 21:50)、日曜休み、ランチは予約不可で現金とPayPayのみ、お一人様ワンドリンク制、カード・PayPay・楽天ペイ可、17席 (カウンター7、テーブル10)、禁煙、英語メニューあり、オープン日2024年4月6日。店の紹介: 広東の要素を取り入れたやさしい味の中国料理、市場で仕入れる国産の鮮魚と季節の野菜、自然派ワインと紹興酒、人気は前菜盛り合わせ、麻婆豆腐、トムヤム炒飯、広東風の鮮魚のカルパッチョ。口コミ(2025年1月〜2026年10月): Tokuchaina の2号店、W Osaka の裏のビルの奥の階段を上った2階、白を基調にしたおしゃれな店内、前菜5種盛り、豆豉の効いた麻婆豆腐、イカと豆豉炒め、黒酢酢豚、海老チリ、エビマヨ、油淋鶏、海老餃子、鶏とクワイの焼売、牡蠣焼売、チャーシューのクレープ包み、春巻き、ネギとチャーシューのスープ麺、杏仁豆腐、ランチは週替わりの中華そばと小鉢4品で1200円、料理はゆっくり出てくる。',
      confidence: 'medium', sources: [TB, R + 'B499481592/', R + 'B528729824/', R + 'B530748751/', R + 'B532085687/', R + 'B534652680/', R + 'B536009325/', R + 'B536929514/', R + 'B537586046/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); lunch is first come, cash or PayPay (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区博労町4-3-14 8Rビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町四丁目3番14号 (go) 6m. Tabelog puts this 2F shop and #にくといえばまつだ 大阪店 (1F, osaka_yakiniku_nikutoieba_matsuda_hakuromachi) about 1.5 m apart in the same building, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499481592/', R + 'B532085687/', R + 'B537586046/'],
    price_note: 'Only the lunch price is from a review (April 2026); dinner prices not given.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetizer platter', '', 'Appetizers', 'ask', 'no', 'February–July 2026.', 'appetizers'),
      it('', '', 'Mapo tofu', '', 'Mains', 'ask', 'ask', 'May–September 2026; also a lunch staple.', 'mapo'),
      it('', '', 'Tom yum fried rice', '', 'Rice', 'ask', 'no', 'Tabelog shop text; January 2025.', 'tomyumrice'),
      it('', '', 'Stir-fried squid with black beans', '', 'Mains', 'ask', 'no', 'February and September 2026.', 'squid'),
      it('', '', 'Shrimp chili', '', 'Mains', 'ask', 'no', 'August 2026; also a lunch staple.', 'ebichili'),
      it('', '', 'Char siu wrapped in a crêpe', '', 'Mains', 'no', 'no', 'October 2026.', 'charsiucrepe'),
      it('', '', 'Shrimp dumplings', '', 'Dim sum', 'no', 'no', 'August and October 2026.', 'shrimpdumpling'),
      it('', '', 'Noodle soup with green onion and char siu', '', 'Noodles', 'no', 'no', 'October 2026.', 'noodlesoup'),
      it('', '', 'Lunch: weekly special Chinese noodles with four small sides', '¥1,200', 'Lunch', 'no', 'no', 'April 2026.', 'lunchnoodle'),
    ] }, {
    cuisine: '広東風のやさしい味の中国料理、アラカルト (17席)・市場の魚と季節の野菜・前菜盛り合わせ (5種、例: 海老の辛味揚げ、よだれ鶏、鮮魚のカルパッチョ、トマトの紹興酒漬け)・豆豉の麻婆豆腐・トムヤム炒飯・広東風の鮮魚のカルパッチョ・イカの豆豉炒め・酢豚・海老チリ、エビマヨ・油淋鶏・海老餃子、鶏とクワイの焼売、牡蠣焼売・チャーシューのクレープ包み・春巻き・ネギとチャーシューのスープ麺・杏仁豆腐・自然派ワイン、紹興酒、ターメリックレモンサワー・平日ランチは1200円ほど (2026年4月)',
    neighborhood: '博労町4-3-14 8Rビル 2F、W Osaka の裏。御堂筋線の心斎橋駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。餃子、焼売、春巻き、スープ麺、チャーシューのクレープ包みは小麦で、ソース (豆豉、油淋鶏のたれ、チリ) の説明もなし。グルテンフリーの表示はありません。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、海老、イカ、魚が中心のアラカルトの中国料理で、ヴィーガンの料理の説明はありません。',
    notes: '[中国料理・博労町、W Osaka の裏の階段を上った白くおしゃれな店] 見落としやすい場所で、古いけれどきれいに改装したビルの奥の階段を上ると、2階にカウンターとテーブルの明るくモダンな店。2025年1月の口コミでは Tokuchaina の2号店で、2026年9月には、いつもは Tokuchaina に行く人が初めてこちらに来た。広東風のやさしい味つけで、市場の魚と季節の野菜を使う。まず前菜盛り合わせ、それから豆豉の効いた麻婆豆腐、鮮魚のカルパッチョ、イカの豆豉炒め、海老チリかトムヤム炒飯、〆にネギとチャーシューのスープ麺。自然派ワインと紹興酒も。平日ランチは数種類 (麻婆豆腐、油淋鶏、海老チリと週替わり) で、2026年4月には週替わりの醤油の中華そばに小鉢4品がついて1200円。料理はゆっくり出てくるので、最初にまとめて頼むのがよい。',
  });
}

// ================================================================ #にくといえばまつだ 大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27131290/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_yakiniku_nikutoieba_matsuda_hakuromachi', name: '#にくといえばまつだ 大阪店 (# Niku to ieba Matsuda Oosaka ten)', category: 'OMNI',
    lat: 34.678061, lng: 135.499438, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the truffle yukke comes with egg-yolk soy sauce, and the menu also has a katsu sandwich, croquettes, pasta and a sansho-miso hot pot that ends in ramen, so ask about marinades and sauces for the grilled cuts.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant.',
    hours_raw: 'Mon, Tue, Thu–Sun and holidays 17:00–23:00 (last order 22:30); closed Wednesday and the 1st and 3rd Thursdays (Tabelog). Reservations taken, online booking via Tabelog; one October 2026 table had a 2-hour limit because of a later booking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR payment (Tabelog). 16 seats: a 10-seat counter and a private room for 6; whole shop for up to 20; non-smoking; sommelier on staff; menu in English and Chinese (Tabelog). Opened 30 August 2022 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hakuromachi 4-3-14 1F — 5 min north of Shinsaibashi Stn (exit 3), 7 min south of Honmachi Stn (exit 13)',
    cuisine: 'Wagyu yakiniku at a full-flat counter, the Osaka sister of Niku to Ieba Matsuda in Nara (16 seats) · Yamato beef from Nara · signature Chateaubriand tongue sliced and grilled in front of you · Chateaubriand, salt tongue, outside skirt, sirloin, lean cuts · wagyu truffle yukke with egg-yolk soy sauce · beef sashimi · kimchi · hamburg steak · croquette · katsu sandwich · garlic fried rice with Chateaubriand · creative dishes (pasta, beef stew, tacos, a monthly seasonal menu) · omakase courses ¥6,000 and ¥11,000 (two or more); wagyu sansho hot pot course ¥8,500 (private room, 3–6 people) · over 100 wines chosen by the sommelier · cold-brewed Yamato tea',
    website: null, gmaps: gm('にくといえばまつだ 大阪店'), menu_url: null,
    notes: "[Yakiniku · Hakuromachi, the Osaka counter of a Nara wagyu shop] The Osaka sister of Niku to Ieba Matsuda in Nara, behind a hidden-feeling entrance: a tea-room-like room with a tokonoma-style backdrop, bamboo and a pine-tree neon sign, and a long full-flat counter where the cooking happens in front of you. Yamato beef from Nara is the point. The signature is the thick-cut Chateaubriand tongue, sliced and grilled at the counter; diners also order the Chateaubriand, outside skirt, the truffle yukke and the beef sashimi, and finish with garlic fried rice studded with Chateaubriand. The kitchen also cooks pasta, beef stew, tacos and a katsu sandwich, and a sommelier pours from over 100 wines. Omakase courses run ¥6,000 or ¥11,000. Several October 2026 diners found the service slow on busy nights; one table had a two-hour limit.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Osaka sister shop of Niku to Ieba Matsuda in Nara (Tabelog, shop-provided); opened 30 August 2022 (Tabelog). Tabelog links the website trio-inc.jp, a TRIO Inc. page that was under maintenance on 30 October 2026. A September 2026 reviewer calls the Nara shop the original.', philosophy: 'Yamato beef grilled cut by cut with matching seasonings, alongside genre-crossing dishes from experienced chefs and sommelier-chosen wines (Tabelog, shop-provided).', specialty: 'Chateaubriand tongue; wagyu truffle yukke; Chateaubriand.',
      anecdotes: [
        { text: '"Watching the tongue being expertly sliced right in front of me and then grilled to perfection with just the right heat was an incredible experience." — September 2026, signature Chateaubriand tongue.', source: R + 'B536157667/' },
        { text: '"I had garlic fried rice topped with small pieces of Chateaubriand, and it was fantastic!" — October 2026.', source: R + 'B538297874/' },
      ],
      japanese_sources_summary: '食べログ: #にくといえばまつだ 大阪店、大阪市中央区博労町4-3-14 1F、心斎橋駅3番出口から北へ徒歩5分、本町駅13番出口から南へ徒歩7分、月火木〜日・祝17:00〜23:00 (L.O. 22:30)、水曜と第1・第3木曜休み、予約可、カード可、電子マネー・QR不可、16席 (カウンター10、個室6)、禁煙、ソムリエあり、英語・中国語メニューあり、オープン日2022年8月30日。店の紹介: 奈良の「にくといえばまつだ」の姉妹店、奈良のブランド牛 Yamato beef、和牛のトリュフユッケ、牛タンのシャトーブリアン、パスタ、ビーフシチュー、タコスなどの創作料理、ソムリエが選ぶ100種以上のワイン、茶室のような和モダンの空間とフルフラットのカウンター、個室あり、おまかせコース6000円・11000円、個室限定の和牛の山椒鍋コース8500円。口コミ(2026年9月〜10月): 目の前で切って焼くシャトーブリアンタン、ハラミ、サーロイン、赤身、牛刺し、キムチ、ハンバーグ、カツサンド、シャトーブリアン入りのガーリックライス、コロッケ、水出しの Yamato tea、提供が遅いという声がいくつか、次の予約で2時間制のことも。',
      confidence: 'medium', sources: [TB, R + 'B536157667/', R + 'B536187090/', R + 'B536776471/', R + 'B537079715/', R + 'B537227934/', R + 'B537407384/', R + 'B537733969/', R + 'B538297874/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); book online; counter grilling (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区博労町4-3-14 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町四丁目3番14号 (go) 5m. Tabelog puts this 1F shop and 中国菜 Yin Yang (2F, osaka_chinese_yin_yang_hakuromachi) about 1.5 m apart in the same building, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536157667/', R + 'B538297874/'],
    price_note: 'Course prices from the Tabelog listing (October 2026).', last_checked: TODAY, items: [
      it('', '', "Today's omakase course (two or more)", '¥6,000', 'Courses', 'ask', 'no', 'Tabelog listing; an October 2026 diner added a katsu sandwich.', 'omakase6000'),
      it('', '', "Today's omakase course (two or more)", '¥11,000', 'Courses', 'ask', 'no', 'Tabelog listing.', 'omakase11000'),
      it('', '', 'Wagyu sansho hot pot course, 6 items (private room only, 3–6 people)', '¥8,500', 'Courses', 'no', 'no', 'Tabelog listing; white-miso broth, ends with ramen.', 'sanshonabe'),
      it('', '', 'Signature Chateaubriand tongue', '', 'Yakiniku', 'ask', 'no', 'September 2026; half portions possible.', 'chateautongue'),
      it('', '', 'Chateaubriand', '', 'Yakiniku', 'ask', 'no', 'September–October 2026.', 'chateaubriand'),
      it('', '', 'Wagyu truffle yukke', '', 'Small dishes', 'ask', 'no', 'Tabelog listing; October 2026.', 'yukke'),
      it('', '', 'Beef sashimi', '', 'Small dishes', 'ask', 'no', 'October 2026.', 'gyusashi'),
      it('', '', 'Garlic fried rice with Chateaubriand', '', 'Rice', 'ask', 'no', 'October 2026.', 'garlicrice'),
      it('', '', 'Katsu sandwich', '', 'Small dishes', 'no', 'no', 'October 2026.', 'katsusando'),
    ] }, {
    cuisine: '奈良の「にくといえばまつだ」の姉妹店、フルフラットのカウンターで和牛の焼肉 (16席)・奈良のブランド牛 Yamato beef・目の前で切って焼く名物のシャトーブリアンタン・シャトーブリアン、塩タン、ハラミ、サーロイン、赤身・卵黄醤油の和牛トリュフユッケ・牛刺し・キムチ・ハンバーグ・コロッケ・カツサンド・シャトーブリアン入りのガーリックライス・創作料理 (パスタ、ビーフシチュー、タコス、月替わりの旬の料理)・おまかせコース6000円と11000円 (2名から)、和牛の山椒鍋コース8500円 (個室、3〜6名)・ソムリエが選ぶ100種以上のワイン・水出しの Yamato tea',
    neighborhood: '博労町4-3-14 1F。心斎橋駅3番出口から北へ徒歩5分、本町駅13番出口から南へ徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。トリュフユッケは卵黄醤油で、カツサンド、コロッケ、パスタ、〆がラーメンの山椒味噌の鍋もあるので、焼く肉のたれや味つけについて確認を。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉の店です。',
    notes: '[焼肉・博労町、奈良の和牛の店の大阪のカウンター] 奈良の「にくといえばまつだ」の姉妹店で、隠れ家のような入口の先に、茶室のような空間。床の間風の背景に竹と松のネオン、長いフルフラットのカウンターで、目の前で料理する。主役は奈良のブランド牛 Yamato beef。名物は厚切りのシャトーブリアンタンで、カウンターで切って焼く。ほかにシャトーブリアン、ハラミ、トリュフユッケ、牛刺し、〆にシャトーブリアン入りのガーリックライス。パスタ、ビーフシチュー、タコス、カツサンドもあり、ソムリエが100種以上のワインから選ぶ。おまかせコースは6000円か11000円。2026年10月には、混む夜は提供が遅いという声がいくつかあり、次の予約で2時間制になった席も。',
  });
}

// ================================================================ 中菜バル食堂 杏月
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27146910/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://azuki0107.com/';
  const H = day(['11:30', '14:30'], ['17:00', '22:30']);
  put({
    id: 'osaka_chinese_azuki_minamisenba', name: '中菜バル食堂 杏月 (Chusai Baru Shokudo Azuki)', category: 'OMNI',
    lat: 34.677885, lng: 135.505351, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: xiaolongbao, gyoza, shumai, spring rolls, dan dan noodles, champon and Shanghai yakisoba are wheat, and the sauces (black vinegar, soy-based yurinchi dressing) are not described; nothing is marked gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an à la carte Chinese menu of pork, chicken, beef, shrimp and squid dishes; no vegan dishes are described.',
    hours_raw: 'Official site: 11:30–14:30 (last order 14:30) and 17:00–22:30 (food last order 21:30, drinks 22:00); closed Sunday and public holidays. Tabelog: Mon–Fri 11:30–15:00 and 17:00–21:30, Sat 11:30–15:00 and 17:00–21:00; closed Sunday, public holidays and the 1st and 3rd Saturdays. A September 2026 diner says the shop opens every other Saturday. Reservations by phone or on Tabelog, recommended for the evening; lunch draws a queue (April 2026 review). Cards, transport IC, iD, QUICPay, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 14 seats, seven tables for two; private hire for up to 20; non-smoking, smoking area outside; wheelchair access; children welcome; take-out and delivery; English and Chinese menu with photos (Tabelog). Opened 7 January 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamisenba 2-8-2 1F — about 5 min from Nagahoribashi Stn, 8 min from Sakaisuji-Honmachi Stn',
    cuisine: 'Chinese bar-diner, small plates and drinks (14 seats) · Shanghai yakisoba with a sweet sauce · xiaolongbao · gyoza and shrimp gyoza · shumai · black-vinegar sweet and sour pork · yurinchi · spicy mapo tofu · horoniku (braised pork) fried rice, mapo fried rice · potato salad with apple · drunken shrimp · shrimp chili, ebi mayo · yodare chicken · beef tataki, octopus carpaccio · spring rolls with snap peas and cheese · sesame balls, peach manju · lunch sets ¥900–1,200 (dan dan noodles, yurinchi, mapo tofu, seafood champon, daily special ¥1,000) · course with all-you-can-drink ¥5,000; all-you-can-drink ¥1,800 with à la carte',
    website: WEB, gmaps: gm('中菜バル食堂 杏月 南船場'), menu_url: null,
    notes: "[Chinese · Minamisenba, a small Chinese bar-diner run by a warm couple] Chinese restaurant, bar and diner in one, as one diner puts it: fourteen seats at two-person tables near Nagahoribashi, opened in January 2025. A March 2026 regular credits a husband-and-wife team with the warm, attentive service; another diner was greeted by the friendly woman serving with thanks for an earlier group visit, and says Google suggests 'Azuki Oneesan' when you search the shop. Repeat diners come back for the sweet Shanghai yakisoba, piping-hot xiaolongbao with black vinegar, crisp gyoza, black-vinegar sweet and sour pork and a surprisingly good potato salad with apple; the yurinchi reportedly draws a lunch queue. Lunch is three fixed sets plus a daily special (seafood champon ¥1,200 in February 2026, a mapo curry in April). Courses with all-you-can-drink suit groups, and the whole room can be booked for 20.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Opened 7 January 2025 (Tabelog). Described by a March 2026 regular as run by a husband-and-wife team; a November 2025 diner was seen off at the door by the manager.', philosophy: 'Authentic Chinese at reasonable prices, with dishes that suit drinks (official site and Tabelog, shop-provided).', specialty: 'Spicy mapo tofu; yurinchi; Shanghai yakisoba; xiaolongbao.',
      anecdotes: [
        { text: '"Additionally, the warm and attentive service from the husband-and-wife team is another charm of this place, making it a very comfortable dining experience." — March 2026, third visit.', source: R + 'B517470952/' },
        { text: '"There\'s always a very friendly lady serving, and she remembered me, saying, \'Thank you for visiting us with your group the other day.\' I was quite touched." — April 2026, mapo curry lunch special.', source: R + 'B527574445/' },
      ],
      japanese_sources_summary: '公式サイト: 中菜バル食堂 杏月、大阪市中央区南船場2-8-2 1階、長堀橋駅2B出口から徒歩約6分、11:30〜14:30・17:00〜22:30 (料理L.O. 21:30、ドリンクL.O. 22:00)、日曜・祝日休み、贅沢な中華をリーズナブルに、旨辛麻婆豆腐、特製油淋鶏、台湾ソーセージと中国野菜の塩炒め、黒酢だれの塩麹豚雲白肉、ホロ肉炒飯、胡麻団子、カスタードももまんじゅう、2種の小籠包・麻婆豆腐・丸鶏の半羽揚げクミン塩添え・海老入り黄金炒飯の杏月コース、生ビールを含む30種類以上の飲み放題、貸切は20名まで、日替りランチ、エビとネギの天津飯ランチ、ご飯と小鉢付きの担々麺ランチ、おすすめはネギだく油淋鶏ランチ。食べログ: 月〜金11:30〜15:00・17:00〜21:30、土11:30〜15:00・17:00〜21:00、第1・第3土曜休み、14席 (2名テーブル×7)、禁煙、車椅子可、子供可、テイクアウト・デリバリー、英語・中国語メニュー、オープン日2025年1月7日。口コミ(2025年1月〜2026年9月): 開店時のランチ1000円、2025年2月に900〜980円、担々麺、海鮮ちゃんぽんランチ1200円、日替わり1000円、麻婆カレー、ランチは行列、夫婦の温かい接客、看板のお姉さん、上海焼きそば、小籠包、焼き餃子、黒酢酢豚、りんご入りのポテサラ、酔っ払い海老、コース飲み放題付き5000円、飲み放題1800円、土曜は隔週営業。',
      confidence: 'medium', sources: [TB, WEB, R + 'B500141622/', R + 'B517470952/', R + 'B522490700/', R + 'B525467474/', R + 'B525865469/', R + 'B527289379/', R + 'B527574445/', R + 'B529754028/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu with photos (Tabelog); small room, book for dinner (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市中央区南船場2-8-2 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current; reviews dated February–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目8番2号 (go) 6m. Same address and floor as 沖縄麺処 天願 南船場本店 (osaka_okimen_tengan_minamisenba, address_ja 大阪府大阪市中央区南船場2-8-2 宮本ビル 1F), whose Tabelog point is about 5 m away, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB, R + 'B500141622/', R + 'B522490700/', R + 'B525865469/', R + 'B527289379/'],
    price_note: 'Prices from reviews dated February 2025 to June 2026; the official site gives no prices.', last_checked: TODAY, items: [
      it('', '', 'Shanghai yakisoba', '', 'Noodles', 'no', 'no', 'November 2025–September 2026.', 'shanghaiyakisoba'),
      it('', '', 'Xiaolongbao', '', 'Dim sum', 'no', 'no', 'November 2025–September 2026.', 'xiaolongbao'),
      it('', '', 'Grilled gyoza', '', 'Dim sum', 'no', 'no', 'November 2025–September 2026.', 'gyoza'),
      it('', '', 'Black-vinegar sweet and sour pork', '', 'Mains', 'ask', 'no', 'November 2025–March 2026.', 'kurozusubuta'),
      it('旨辛麻婆豆腐', '', 'Spicy mapo tofu', '', 'Mains', 'ask', 'ask', 'Official site; April 2026.', 'mapo'),
      it('ホロ肉炒飯', '', 'Braised pork fried rice', '', 'Rice', 'ask', 'no', 'Official site; November 2025.', 'horonikuchahan'),
      it('', '', 'Potato salad with apple', '', 'Small dishes', 'ask', 'ask', 'November 2025–September 2026.', 'potatosalad'),
      it('', '', 'Lunch: dan dan noodles with rice and side dish', '¥900–980', 'Lunch', 'no', 'no', 'February 2025 price; dish on the official site.', 'tantanlunch'),
      it('', '', 'Lunch: seafood champon', '¥1,200', 'Lunch', 'no', 'no', 'February 2026.', 'champon'),
      it('ネギだく油淋鶏ランチ', '', 'Lunch: yurinchi with plenty of green onion', '', 'Lunch', 'ask', 'no', 'Official site (recommended lunch).', 'yurinchilunch'),
      it('', '', 'Course with all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'May 2026.', 'course'),
    ] }, {
    cuisine: '中国料理のバル兼食堂、小皿とお酒 (14席)・甘めのたれの上海焼きそば・小籠包・焼き餃子と海老餃子・焼売・黒酢酢豚・油淋鶏・旨辛麻婆豆腐・ホロ肉炒飯、麻婆炒飯・りんご入りのポテトサラダ・酔っ払い海老・海老チリ、エビマヨ・よだれ鶏・牛のたたき、タコのカルパッチョ・スナップエンドウとチーズの春巻き・胡麻団子、ももまんじゅう・ランチ900〜1200円 (担々麺、油淋鶏、麻婆豆腐、海鮮ちゃんぽん、日替わり1000円)・飲み放題付きコース5000円、アラカルトに飲み放題1800円',
    neighborhood: '南船場2-8-2 1F。長堀橋駅から徒歩5分ほど、堺筋本町駅から徒歩8分',
    gf_detail: 'グルテンフリーではありません。小籠包、餃子、焼売、春巻き、担々麺、ちゃんぽん、上海焼きそばは小麦で、ソース (黒酢、醤油ベースの油淋鶏のたれ) の説明もなし。グルテンフリーの表示はありません。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、牛、海老、イカの料理が中心のアラカルトの中国料理で、ヴィーガンの料理の説明はありません。',
    notes: '[中国料理・南船場、温かい夫婦が営む小さな中華バル食堂] ある客いわく、中華料理店とバルと食堂がひとつになった店。長堀橋の近く、2人用テーブルで14席、2025年1月に開店。2026年3月の常連は、夫婦の温かく気配りのある接客を魅力に挙げる。接客する親しみやすい女性は、少し前に団体で来た客を覚えていてお礼を言い、店名を検索すると「Azuki Oneesan」が候補に出るという声も。何度も来る人のお目当ては甘めの上海焼きそば、黒酢を添えた熱々の小籠包、パリッとした餃子、黒酢酢豚、意外なほどおいしいりんご入りのポテサラ。油淋鶏はランチに行列ができるという。ランチは定番3種と日替わり (2026年2月は海鮮ちゃんぽん1200円、4月は麻婆カレー)。飲み放題付きのコースは宴会向きで、20名まで貸切もできる。',
  });
}

// ================================================================ お気軽天ぷら処 天神
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27120349/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://tenjin.patria-d.co.jp/'; const CO = 'https://patria-d.co.jp/';
  const H = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_tempura_tenjin_hakuromachi', name: 'お気軽天ぷら処 天神 (Okigaru Tempura Dokoro Tenjin)', category: 'OMNI',
    lat: 34.678487, lng: 135.501638, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: everything is wheat-batter tempura, and the tentsuyu is cut with a soy-sauce kaeshi (official site). Moshio sea salt is offered as an alternative dip, but the batter itself is wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the tentsuyu is made with dashi from kombu and bonito, mackerel and sardine flakes (official site), and vegetables share the fryer with shrimp, fish and chicken. A vegetable set (six vegetables and an onion-and-corn kakiage) exists.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:30) and 17:00–22:00 (last order 21:30) (Tabelog and the official site\'s top page); the operator\'s shop page gives 17:00–21:30 (last order 21:00) and irregular closing days, and an August 2026 regular says the shop closes early in the evening. Open Sundays, holidays, Obon and Golden Week; closed over New Year; ad hoc closures announced on Facebook and Instagram (Tabelog). Cards (VISA, Master, JCB, AMEX), transport IC, iD, QUICPay, PayPay, Alipay, WeChat Pay; no service or cover charge (Tabelog). 16 seats: 6 at the counter, 12 at tables (Tabelog; the official site says 18). Non-smoking, smoking area by the entrance; children welcome, step at the entrance; menu in English, Chinese and Korean with photos (Tabelog). Reservations by phone (Tabelog); courses from two people, one free drink each when booked by phone (official site), though the site\'s contact box also says no reservations.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hakuromachi 3-4-11 — 4 min walk from Shinsaibashi Stn, 5 min from Honmachi Stn',
    cuisine: 'Everyday Hakata-style tempura, fried in front of you a few pieces at a time (16 seats) · 100% rice oil · tempura set meals with rice (free refills, white or barley) and miso soup: Tamago (soft-boiled egg tempura) ¥1,350, Tenjin ¥1,200, vegetable ¥1,000, angel shrimp ¥1,700, Osusume ¥1,550, large anago ¥1,700, large shrimp ¥1,500, Kiwami ¥2,450, tororo ¥1,200, monthly special ¥1,400 · evening sets and a seasonal assortment · drink sets from ¥1,000 (draft beer and three tempura) · mentaiko tencha · course ¥3,200 (two or more) · Seto Inland Sea moshio salt, house tentsuyu · free daikon pickles on the table · à la carte from ¥140',
    website: WEB, gmaps: gm('お気軽天ぷら処 天神 博労町'), menu_url: WEB,
    notes: "[Tempura · Hakuromachi, Hakata-style everyday tempura between Honmachi and Shinsaibashi] The name joins Tenjin, the Fukuoka district known for its crowd of casual tempura shops, with 'the god of tempura' (official site). Tempura is fried in 100% rice oil and brought to you a few pieces at a time, so it arrives piping hot: lunch is a set with rice that is cooked continuously in small cookers and refilled free (white or barley), miso soup and homemade daikon pickles on the table. The favourite is the Tamago set, whose soft-boiled egg tempura goes over the rice; others go for 'angel shrimp' (from New Caledonia, one regular heard), kisu, sardines, cheese-stuffed chikuwa or a dorayaki tempura with butter. In the evening, ¥1,000 buys a beer with shrimp, eggplant and chicken tempura. The shop is the only restaurant of Patria Co., whose site names the manager as Takimoto Youhei, from Hokkaido; an August 2026 regular noticed new staff and a new potato salad.",
    chef_bio: { chef_name: '瀧本 耀平 (Takimoto Youhei)', roles: ['Manager (per the operator\'s site)'], origin: 'Hokkaido (operator\'s site)', background: 'Named as manager of the shop on the site of Patria Co., which runs it as its only restaurant from the same address; the site describes a manager who is earnest and passionate rather than high-energy, answers customers\' requests in the tempura, and trains the frying staff in a spirit of "no waste, precise". The site is undated, and an August 2026 regular noticed the staff had changed recently. Patria\'s representative director, 冨安 美絵子 (Tomiyasu Mieko), is from Fukuoka, studied at Saga University aiming to teach art, went into martial arts as a student and after graduating, and founded the company after retiring (operator\'s site).', philosophy: 'Freshly fried tempura served straight from the fryer in front of the diner, to make tempura casual and familiar (official site).', specialty: 'Tamago tempura set (soft-boiled egg tempura); angel shrimp.',
      anecdotes: [
        { text: '"I ordered the popular Tamago Tempura (JPY 1350). The shrimp was plump and juicy, and the eggplant was crispy. I enjoyed the Tamago Tempura on top of my rice, and it was delicious when mixed with the tempura scraps." — September 2026.', source: R + 'B535980774/' },
        { text: '"You can get three pieces of freshly fried tempura (chicken tempura, eggplant tempura, and shrimp tempura) along with a bottle of beer for just JPY 1000!" — August 2026, a regular of a few years.', source: R + 'B534328445/' },
      ],
      japanese_sources_summary: '公式サイト: お気軽天ぷら処 天神、大阪市中央区博労町3-4-11、11:00〜15:00 (L.O. 14:30)・17:00〜22:00 (L.O. 21:30)、定休日なし (年末年始を除く)、18席、店名は大衆向けの天ぷら屋で賑わう福岡の「天神」と「天ぷらの神様」から、目の前で揚げたてを出す天ぷら専門店、こめ油100%、瀬戸内海の海水の藻塩、昆布とカツオ・鯖・イワシの節の出汁に醤油ベースのかえしの天つゆ、小さな炊飯器で炊き続けるご飯はお代わり無料、麦ご飯に変更可、卓上の自家製大根の漬物、玉子天ぷら定食1350円 (一番人気)、天神天ぷら定食1200円、野菜天ぷら定食1000円、天使の海老天ぷら定食1700円、おすすめ天ぷら定食1550円、大穴子1700円、大海老1500円、極2450円、とろろ1200円、10月の月替りかつお天ぷら定食1400円、夜の旬定食2100円、天神夜定食1600円、旬天盛り1950円、ちょい呑み生ビールセット1000円、明太子天茶600円、コース3200円 (2人前から)。株式会社パトリア: 天神が唯一の店舗、店長は北海道出身の瀧本 耀平、代表取締役は福岡県出身の冨安 美絵子 (佐賀大学で美術の教員を目指し、格闘技の道へ、引退後に起業)。食べログ: 毎日11:00〜15:00・17:00〜22:00、16席 (カウンター6、テーブル12)、アレルギーはスタッフに直接、英語・中国語・韓国語メニュー。口コミ(2025年9月〜2026年10月): 博多風の気軽な天ぷら、3つずつ2回に分けて揚げたて、玉子定食、ご飯のお代わり、帆立とあおさのかき揚げ450円、天使の海老、キス、イワシ、チーズちくわ、豚天、季節の鰻、牡蠣、どら焼き天ぷらバター、スタッフが替わりポテサラが出るように、夜は早めに閉まる。',
      confidence: 'medium', sources: [TB, WEB, CO, CO + 'shop', CO + 'company', R + 'B513815070/', R + 'B531535847/', R + 'B532331459/', R + 'B532648320/', R + 'B534328445/', R + 'B535980774/', R + 'B536431559/', R + 'B537551130/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu in English, Chinese and Korean with photos (Tabelog); walk-in set meals (2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The Tabelog listing asks diners with allergies or other important requests to speak to the staff directly.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町3-4-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current (October menu); reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町三丁目4番11号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [WEB, R + 'B513815070/', R + 'B535980774/', R + 'B534328445/'],
    price_note: 'Prices from the official site\'s October 2026 menu, tax included.', last_checked: TODAY, items: [
      it('玉子 天ぷら定食', '', 'Tamago tempura set (shrimp, chicken, two vegetables, seafood, mentaiko, soft-boiled egg)', '¥1,350', 'Set meals', 'no', 'no', 'Official site; most popular. Same price in September 2025 and September 2026 reviews.', 'tamago'),
      it('天神 天ぷら定食', '', 'Tenjin tempura set (6 pieces)', '¥1,200', 'Set meals', 'no', 'no', 'Official site.', 'tenjin'),
      it('野菜 天ぷら定食', '', 'Vegetable tempura set (six vegetables, onion-and-corn kakiage)', '¥1,000', 'Set meals', 'no', 'no', 'Official site; tentsuyu and fryer are not vegan.', 'yasai'),
      it('天使の海老 天ぷら定食', '', 'Angel shrimp tempura set', '¥1,700', 'Set meals', 'no', 'no', 'Official site.', 'tenshinoebi'),
      it('おすすめ 天ぷら定食', '', 'Osusume tempura set (angel shrimp and soft-boiled egg)', '¥1,550', 'Set meals', 'no', 'no', 'Official site; August 2026.', 'osusume'),
      it('大穴子 天ぷら定食', '', 'Large anago tempura set', '¥1,700', 'Set meals', 'no', 'no', 'Official site.', 'anago'),
      it('極 天ぷら定食', '', 'Kiwami tempura set (angel shrimp, sea urchin, seafood kakiage)', '¥2,450', 'Set meals', 'no', 'no', 'Official site.', 'kiwami'),
      it('ちょい呑み 生ビールセット', '', 'Draft beer set with shrimp, chicken and eggplant tempura', '¥1,000', 'Drink sets', 'no', 'no', 'Official site; bottled-beer version ¥1,150 on the site, ¥1,000 per an August 2026 regular.', 'beerset'),
      it('明太子 天茶', '', 'Mentaiko tencha (evening only)', '¥600', 'Evening', 'no', 'no', 'Official site.', 'tencha'),
      it('', '', 'Course (two or more)', '¥3,200', 'Courses', 'no', 'no', 'Official site: appetizers, seven tempura, mentaiko tencha, yuzu sorbet.', 'course'),
    ] }, {
    cuisine: '博多風の気軽な天ぷら、目の前で数個ずつ揚げたて (16席)・こめ油100%・ご飯 (お代わり無料、白か麦) と味噌汁つきの天ぷら定食: 玉子 (半熟玉子天) 1350円、天神1200円、野菜1000円、天使の海老1700円、おすすめ1550円、大穴子1700円、大海老1500円、極2450円、とろろ1200円、月替り1400円・夜の定食と旬の盛り合わせ・お酒のセット1000円から (生ビールと天ぷら3品)・明太子天茶・コース3200円 (2人前から)・瀬戸内海の藻塩、自家製の天つゆ・卓上の大根の漬物は無料・一品140円から',
    neighborhood: '博労町3-4-11。心斎橋駅から徒歩4分、本町駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。すべて小麦の衣の天ぷらで、天つゆは醤油ベースのかえし (公式サイト)。藻塩でも食べられますが、衣そのものが小麦です。',
    vegan_detail: 'ヴィーガンではありません。天つゆは昆布とカツオ・鯖・イワシの節の出汁 (公式サイト) で、野菜も海老、魚、鶏と同じ油で揚げます。野菜6種と玉ねぎとコーンのかき揚げの野菜定食はあります。',
    notes: '[天ぷら・博労町、本町と心斎橋のあいだの博多風の気軽な天ぷら] 店名は、大衆向けの天ぷら屋で賑わう福岡の「天神」と「天ぷらの神様」から (公式サイト)。こめ油100%で揚げ、数個ずつ目の前から出すので熱々。昼は定食で、小さな炊飯器で炊き続けるご飯はお代わり無料 (白か麦)、味噌汁、卓上に自家製の大根の漬物。一番人気は玉子定食で、半熟玉子天をご飯にのせる。ほかに「天使の海老」 (ニューカレドニア産と聞いたという常連も)、キス、イワシ、チーズちくわ、どら焼き天ぷらバターも。夜は1000円でビールと海老・茄子・鶏の天ぷら。株式会社パトリアの唯一の店で、サイトによると店長は北海道出身の瀧本 耀平さん。2026年8月の常連は、スタッフが替わってポテサラが出るようになったと書いている。',
  });
}

save();
