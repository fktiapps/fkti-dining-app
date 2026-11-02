// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 9.
//   + ビストロolympic Bistro Olympic (casual seafood-led Italian bar in Ura Namba, Hidezo group per reviews; noon to midnight)
//   + 神戸牛すき焼き 牛陣 心斎橋店 Kobe Gyu Sukiyaki Gyujin (Kansai-style sukiyaki in private rooms; Dancin' Diner brand)
//   + うどん 花きり Udon Hanakiri (large Sanuki-style udon house in Minami-Horie, opened 2021)
//   + チョイス Choice (charcoal yakiniku of kuroge wagyu near Amerikamura)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 8):
//   27102290, 27149590, 27122694, 27061466 (last two digits 90, 90, 94, 66: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address; the "オリンピック" and "Choice" hits in data
//   are unrelated text).
//   Chain check. Bistro Olympic: one of a handful of Ura Namba shops listed as sisters on its site (bar pond, 立ち飲みピラフ,
//   お料理 だいち, tide pool, Meguri Osaka, ぱどる); reviews place it in the "Hidezo" group; none of them in data; kept.
//   Gyujin: the only 牛陣 among some 15 brands of 株式会社ダンシンダイナー (d-diner.net brand list), none of which is in data;
//   kept as a single-shop concept and flagged. Hanakiri: one shop (no branch found). Choice: one shop.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-9');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ビストロolympic
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27102290/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://bistro-olympic.com/';
  const D = day(['12:00', '00:00']); const WT = day(['17:00', '00:00']);
  put({
    id: 'osaka_bistro_olympic_uranamba', name: 'ビストロolympic (Bistro Olympic)', category: 'OMNI',
    lat: 34.664201, lng: 135.504102, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The carpaccio of five fish with four sauces, ajillo, a bluefin-cheek steak and fried potatoes sit beside pastas, fried pizza and baguette; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-led Italian bar; the soup of the day served as the appetizer has been a white-fish soup (September 2026) and most plates are fish, meat or cheese.',
    hours_raw: 'Mon, Tue, Fri–Sun 12:00–24:00; Wed–Thu 17:00–24:00; last orders food 23:00, drinks 23:30; one irregular closing day a month; lunch service may close irregularly (official site; Tabelog). Reservations; tables may be shared at a large table, two-hour limit when busy (Tabelog). A cover charge (お通し) applies; a soup of the day comes as the appetizer (Tabelog; 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, iD, QUICPay and PayPay (Tabelog). 41 seats at a counter, tables and an open terrace; the doors are thrown open in fine weather (October 2026); a 4th-floor event space, tide pool, for up to 45; non-smoking; children of school age welcome (official site; Tabelog). Opened 22 December 2017 (Tabelog).',
    hours: { 0: D, 1: D, 2: WT, 3: WT, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 4-19, in Ura Namba between Namba and Nihonbashi — 4 min from Nankai Namba Stn',
    cuisine: 'A casual Italian bar of seafood and wine (official site; 2026 reviews) · the signature carpaccio of five fish (e.g. tuna, yellowtail, kanpachi, returning bonito, salmon, scallop) with four sauces such as balsamic and basil (2026) · soup of the day as the appetizer: chilled potage, white fish and basil, chilled pumpkin (August–October 2026) · ajillo of shrimp or mushroom with baguette, shrimp mayo, fries, octopus and avocado, chicken neck with lotus root and zucchini, lotus root and shrimp in anchovy butter, a bluefin-tuna-cheek steak with onion sauce (2026) · pastas: yam and dashi, bonito and lily bulb in tomato, peperoncino; fried pizza · natural wines including rosé and orange (official site), wines of the day from sweet to dry (October 2026) · courses and all-you-can-drink (Tabelog; September 2026) · about ¥3,000–¥5,000 a head (2026)',
    website: SITE, gmaps: gm('ビストロolympic 難波'), menu_url: null,
    notes: "[Italian · Ura Namba, a noon-to-midnight seafood bistro] A casual, open-fronted Italian bar in Ura Namba, with a counter, tables and a terrace, serving straight through from noon to midnight (from 17:00 on Wednesdays and Thursdays). Reviewers place it in the Hidezo group of fish restaurants, and the fish shows: the dish nearly everyone orders is a carpaccio of five kinds of raw fish with four sauces to mix. Then ajillo, a bluefin-cheek steak, shrimp mayo or a pasta of yam and dashi, with a natural-wine list that runs to orange and rosé. A soup of the day comes as the appetizer. Busy most evenings and fully booked by 18:00 on a Sunday in October 2026, though walk-ins often get in; with the doors open, small insects can find their way in (October 2026). A 4th-floor space hosts parties of up to 45.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; "シェフがこだわり抜いた一皿" on the official site)'], origin: null,
      background: 'Per the official site: a casual, popular-style Italian bar in Ura Namba, open from noon to midnight, with natural wines and a 4th-floor party space; sister shops listed on the site are bar pond, 立ち飲みピラフ, お料理 だいち, tide pool, Meguri Osaka and ぱどる. Several 2026 reviewers say it belongs to the "Hidezo" (also written "Hidezou") group, and one regular of the neighbouring Hidezo says that shop is next door (October 2026). Opened 22 December 2017 (Tabelog).',
      philosophy: 'Casual and authentic at once: photogenic plates for day drinking, dates and parties, any time from noon to midnight (official site).', specialty: 'Carpaccio of five fish with four sauces; natural wine.',
      anecdotes: [
        { text: '"The moment the \'Assorted Carpaccio of 5 Types\' arrived, my excitement skyrocketed! You absolutely have to order this dish when you visit!" — October 2026.', source: R + 'B531758597/' },
        { text: '"I often visit the neighboring Hidezou, but this was my first time here." — October 2026, fully booked by 6 PM on a Sunday.', source: R + 'B537651241/' },
        { text: '"While the open air was nice, it did attract some small bugs, which was a bit unpleasant..." — October 2026.', source: R + 'B537529450/' },
      ],
      japanese_sources_summary: '公式サイト (bistro-olympic.com): ビストロolympic、大阪・ウラなんばにある大衆イタリアン酒場、昼飲みや女子会、デートに、12:00〜24:00 (水・木は17:00〜24:00、L.O. 料理23:00・ドリンク23:30)、定休日は月1回 (不定期)、ナチュールワイン (白・赤・ロゼ・オレンジ)、テラス席、テーブル席、カウンター、4階に最大45名の団体スペース、難波千日前4-19、南海難波駅より徒歩4分、姉妹店: bar pond、立ち飲みピラフ、お料理 だいち、tide pool、Meguri Osaka、ぱどる。食べログ (店舗会員): ビストロ・イタリアン・居酒屋、お通しあり、混雑時は2時間制、相席の大テーブルの場合あり、41席、貸切20〜50名、禁煙、カード・電子マネー・PayPay可、2017年12月22日オープン。口コミ(2026年8月〜10月): 5種のカルパッチョと4種のソース、お通しのスープ、アヒージョ、本まぐろのほほ肉のステーキ、山芋と出汁のパスタ、日曜の夕方は予約で満席、扉を開け放つと小さな虫も、Hidezo のグループの店という声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B531758597/', R + 'B533947678/', R + 'B536319414/', R + 'B536682383/', R + 'B536885584/', R + 'B537416527/', R + 'B537471098/', R + 'B537529450/', R + 'B537651241/', R + 'B537731054/', R + 'B538082085/', R + 'B538251416/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter or table; walk-ins often seated. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前4-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前4番19号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536319414/', R + 'B537416527/'],
    price_note: 'No menu posted online; dishes from August–October 2026 reviews, unpriced.', last_checked: TODAY, items: [
      it('', '', 'Carpaccio of five fish with four sauces', '', 'Starters', 'ask', 'no', 'August–October 2026.', 'carpaccio'),
      it('', '', 'Shrimp or mushroom ajillo with baguette', '', 'Starters', 'no', 'no', 'October 2026.', 'ajillo'),
      it('', '', 'Bluefin-tuna-cheek steak with onion sauce', '', 'Mains', 'ask', 'no', 'October 2026.', 'tuna_cheek'),
      it('', '', 'Pasta of yam and dashi', '', 'Pasta', 'no', 'no', 'October 2026.', 'yam_pasta'),
    ] }, {
    cuisine: '魚介とワインの大衆イタリアン酒場 (公式サイト、2026年の口コミ)・名物は5種の魚のカルパッチョ (まぐろ、ぶり、かんぱち、戻りがつお、サーモン、ホタテなど) にバルサミコやバジルなど4種のソース (2026年)・お通しは本日のスープ: 冷製ポタージュ、白身魚とバジル、冷たいかぼちゃ (2026年8〜10月)・エビやきのこのアヒージョとバゲット、エビマヨ、フライドポテト、タコとアボカド、せせりと蓮根とズッキーニ、蓮根とエビのアンチョビバター、本まぐろのほほ肉のステーキのオニオンソース (2026年)・パスタ: 山芋と出汁、かつおと百合根のトマト、ペペロンチーノ。揚げピザ・ロゼやオレンジを含むナチュールワイン (公式サイト)、甘口から辛口まで日替わりのワイン (2026年10月)・コースと飲み放題 (食べログ、2026年9月)・1人3,000〜5,000円ほど (2026年)',
    neighborhood: '難波千日前4-19、Namba と Nihonbashi の間のウラなんば。南海難波駅より徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。5種のカルパッチョ、アヒージョ、本まぐろのほほ肉のステーキ、フライドポテトの一方で、パスタ、揚げピザ、バゲットも。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介が中心のイタリアン酒場で、お通しのスープは白身魚のスープのことも (2026年9月)、料理の多くは魚、肉、チーズ。',
    notes: '[イタリアン・ウラなんば、昼から深夜までの魚介のビストロ] ウラなんばの開放的な大衆イタリアン酒場。カウンター、テーブル、テラスがあり、昼12時から深夜0時まで通しで営業 (水・木は17時から)。口コミでは Hidezo の魚のグループの店とされ、魚がおいしい。ほぼ全員が頼むのは5種の生の魚のカルパッチョで、4種のソースで食べ比べる。続いてアヒージョ、本まぐろのほほ肉のステーキ、エビマヨ、山芋と出汁のパスタ。ワインはオレンジやロゼも含むナチュール。お通しは本日のスープ。夜はたいてい混み、2026年10月の日曜は18時に予約で満席だったが、飛び込みでも入れることが多い。扉を開け放つと小さな虫が入ることも (2026年10月)。4階には最大45名の貸切スペース。',
  });
}

// ================================================================ 神戸牛すき焼き 牛陣 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27149590/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://d-diner.net/brands/gyujin_shinsaibashi/'; const BRANDS = 'https://d-diner.net/brands/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_kobe_gyu_sukiyaki_gyujin_shinsaibashi', name: '神戸牛すき焼き 牛陣 心斎橋店 (Kobe Gyu Sukiyaki Gyujin Shinsaibashi)', category: 'OMNI',
    lat: 34.671778, lng: 135.50505, cuisine_type: 'sukiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The sukiyaki is seasoned with sugar and soy sauce (official site) and the sets end with udon; shabu-shabu is also offered, but its sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Kobe beef and wagyu sukiyaki and shabu-shabu courses, with raw egg for dipping.',
    hours_raw: 'Daily except Thursday 17:00–23:00 (last order 22:00); holiday periods may differ (official site; Tabelog). Reservations online in Japanese, English or Traditional Chinese (official site). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards, Rakuten Edy, iD, QUICPay, nanaco, WAON, and QR including PayPay, Alipay and WeChat Pay (official site; Tabelog). 46 seats, all in private rooms for 4, 6 or 8; non-smoking; no parking; children welcome (official site; Tabelog). English and Traditional Chinese menus; English-speaking staff (Tabelog). Opened 23 May 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-4-30, グランドジャニスビル 8F — 4 min from Nagahoribashi Stn, 10 min from Shinsaibashi Stn',
    cuisine: 'Kansai-style "grilled" sukiyaki of Kobe beef and wagyu in square iron pans, the meat seared first and seasoned with sugar and soy sauce, the first slice cooked at the table by the staff (official site) · Kobe beef of the top grade as the main (official site); a domestic-beef sukiyaki or shabu-shabu set ¥5,800 (140 g of loin or ribeye, vegetables, udon to finish, the chef\'s homemade dessert), booked online (September–October 2026); courses from ¥5,800 to ¥32,800 (October 2026), including Kobe beef, wagyu and a course with sirloin steak (official site; 2026 reviews) · vegetables: green onion, shungiku, tofu, enoki, shirataki, onion (October 2026) · two eggs to compare, Oita\'s "Ryuu no Tamago" ("Dragon\'s Egg") and Kyoto\'s "Dose", with free refills (September–October 2026) · Sapporo Lager ¥715, Kubota Manju 180 ml ¥1,980 (October 2026)',
    website: SITE, gmaps: gm('神戸牛すき焼き 牛陣 心斎橋店'), menu_url: SITE,
    notes: "[Sukiyaki · Higashi-Shinsaibashi, Kobe beef in private rooms] On the 8th floor of a Higashi-Shinsaibashi building, a sukiyaki house of private rooms decorated with ukiyo-e and ink paintings, opened in May 2025 by the beef-focused restaurant company Dancin' Diner. The style is Kansai sukiyaki: the meat seared in a square iron pan and seasoned with sugar and soy sauce, the first slice cooked in front of you by the staff. Kobe beef is the headline, but most 2026 diners ordered the ¥5,800 domestic-beef set booked online, which comes with udon to finish and a homemade dessert, and enjoyed comparing two dipping eggs. One noted the domestic beef was less marbled than Kobe beef. English menus and English-speaking staff; the room is aimed at overseas visitors as much as business dinners. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: ['Run by 株式会社ダンシンダイナー (Dancin\' Diner), a beef-focused restaurant company (official site)'], origin: null,
      background: 'Per the brand page on d-diner.net: a Kobe beef and wagyu sukiyaki house drawing on long experience supplying high-quality beef, aiming to "lead the way" in bringing wagyu to the world; Kansai-style "grilled" sukiyaki in square iron pans; top-grade Kobe beef as the main; every seat in a private room decorated with ukiyo-e and ink painting, suited to sightseeing, business entertaining and overseas guests. The company runs yakiniku, shabu-shabu and teppanyaki brands in Kansai and Kanto (d-diner.net brand list); this is its only 牛陣. Opened 23 May 2025 (Tabelog).',
      philosophy: 'An unforgettable wagyu experience that blends Japanese culture with Kansai sukiyaki (official site).', specialty: 'Kansai-style Kobe beef sukiyaki; two-egg tasting.',
      anecdotes: [
        { text: '"You can choose between two types of eggs: \'Dragon\'s Egg\' and \'Kyoto Egg,\' both of which are available for unlimited refills." — September 2026, the ¥5,800 set.', source: R + 'B536495304/' },
        { text: '"Compared to Kobe beef and black-haired Wagyu loin, the marbling and melt-in-your-mouth texture were more subtle, but it was tender and delicious." — October 2026.', source: R + 'B538342443/' },
        { text: '"The clientele includes many Japanese customers, and recently, there has been an increase in foreign visitors" — October 2026, Halloween decorations in the rooms.', source: R + 'B538169034/' },
      ],
      japanese_sources_summary: 'ダンシンダイナー公式サイト (d-diner.net): 神戸牛すき焼き 牛陣 心斎橋店、日本文化と関西風すき焼きが融合した究極の和牛体験、和牛の魅力を「先陣を切って世界へお届けする」神戸牛・和牛専門のすき焼き店、鉄鍋で焼き上げ砂糖と醤油で味付けする“焼く”スタイルの関西風すき焼き、最高ランクの神戸牛、最初の一枚をキャストが目の前で焼き上げる、しゃぶしゃぶ、サーロインステーキ付きのコース、全席個室、浮世絵や水墨画、海外からのお客様のおもてなしにも、東心斎橋2-4-30 グランドジャニスビル 8F、長堀橋駅徒歩4分、17:00〜23:00 (L.O.22:00)、木曜定休、全46席 (4名個室3、6名個室3、8名個室2)、カード・電子マネー・コード決済可、英語と繁體中文の予約。ブランド一覧: 焼肉・しゃぶしゃぶ・鉄板焼など牛肉中心の業態を関西・関東で展開。食べログ (店舗会員): すき焼き・しゃぶしゃぶ、英語・繁体字メニュー、英語を話すスタッフ、禁煙、子ども可、2025年5月23日オープン。口コミ(2026年9月〜10月): 国産牛すき焼きかしゃぶしゃぶのセット5,800円 (ロース140g、野菜、締めのうどん、デザート)、コースは5,800〜32,800円、2種類の卵の食べ比べ、Aomori のリブロース、海外からの客も増えている。',
      confidence: 'medium', sources: [SITE, BRANDS, TB, R + 'B528647923/', R + 'B530416203/', R + 'B536022063/', R + 'B536285948/', R + 'B536495304/', R + 'B536504856/', R + 'B537398028/', R + 'B537411218/', R + 'B538169034/', R + 'B538219034/', R + 'B538230523/', R + 'B538342443/'] },
    cultural_comfort: { level: 'english', note: 'English and Traditional Chinese menus and online booking; English-speaking staff (official site; Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-4-30 グランドジャニスビル 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Brand page on d-diner.net (notice dated July 2026) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.671733, 135.505050); same building as Sushi Higuchi (osaka_sushi_higuchi_higashi_shinsaibashi, address_ja "東心斎橋2-4-30 グランドジャニスビル 1F", pinned 1m from this Tabelog point), so this pin is offset ~5m north to keep them apart; GSI 大阪府大阪市中央区東心斎橋二丁目4番30号 (go) 19m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538169034/', R + 'B538219034/'],
    price_note: 'Prices from October 2026 reviews (tax included as reported); no price list on the brand page.', last_checked: TODAY, items: [
      it('', '', 'Domestic-beef sukiyaki or shabu-shabu set (140 g loin, vegetables, udon, dessert)', '¥5,800', 'Sets', 'ask', 'no', 'September–October 2026; online booking.', 'domestic_set'),
      it('', '', 'Kobe beef sukiyaki course', '', 'Courses', 'ask', 'no', 'Official site; courses up to ¥32,800 (October 2026).', 'kobe_course'),
      it('', '', 'Sapporo Lager, medium bottle', '¥715', 'Drinks', 'ask', 'ask', 'October 2026.', 'beer'),
    ] }, {
    cuisine: '神戸牛と和牛の“焼く”関西風すき焼き。角型の鉄鍋で肉を焼いてから砂糖と醤油で味付けし、最初の一枚はキャストが目の前で焼く (公式サイト)・最高ランクの神戸牛がメイン (公式サイト)。国産牛のすき焼きかしゃぶしゃぶのセット5,800円 (ロースかリブロース140g、野菜、締めのうどん、シェフ手作りのデザート)、ネット予約 (2026年9〜10月)。コースは5,800〜32,800円 (2026年10月)、神戸牛、和牛、サーロインステーキ付きのコースも (公式サイト、2026年の口コミ)・野菜: ねぎ、春菊、豆腐、えのき、しらたき、玉ねぎ (2026年10月)・Oita の「Ryuu no Tamago」と Kyoto の「Dose」の2種類の卵の食べ比べ、おかわり自由 (2026年9〜10月)・Sapporo Lager 中瓶715円、Kubota Manju 180ml 1,980円 (2026年10月)',
    neighborhood: '東心斎橋2-4-30 グランドジャニスビル 8F。長堀橋駅から徒歩4分、心斎橋駅から徒歩10分',
    gf_detail: '予約時に要確認。グルテンの情報なし。すき焼きは砂糖と醤油で味付けし (公式サイト)、セットの締めはうどん。しゃぶしゃぶもあるが、たれの説明はない。',
    vegan_detail: 'ヴィーガンではありません。神戸牛と和牛のすき焼き、しゃぶしゃぶのコースで、生卵につけて食べる。',
    notes: '[すき焼き・東心斎橋、個室で神戸牛] 東心斎橋のビルの8階、浮世絵や水墨画で彩った個室だけのすき焼きの店で、牛肉中心の飲食会社ダンシンダイナーが2025年5月に開いた。関西風のすき焼きで、角型の鉄鍋で肉を焼いて砂糖と醤油で味付けし、最初の一枚はキャストが目の前で焼く。看板は神戸牛だが、2026年の口コミの多くはネット予約の国産牛のセット (5,800円、締めのうどんと手作りのデザートつき) で、2種類の卵の食べ比べが好評。国産牛は神戸牛ほどのサシはないという声も。英語のメニューと英語を話すスタッフがあり、観光客にも接待にも向けた店。木曜休み。',
  });
}

// ================================================================ うどん 花きり
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27122694/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:45'], ['17:00', '22:30']);
  put({
    id: 'osaka_udon_hanakiri_minamihorie', name: 'うどん 花きり (Udon Hanakiri)', category: 'OMNI',
    lat: 34.672565, lng: 135.493586, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat-udon house; the sides are tempura, kakiage, kara-age and kushiage, and the broths are dashi and soy-based.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the udon broth is dashi-based and most toppings are chicken, beef, fish cake or tempura.',
    hours_raw: 'Daily 11:00–15:45 (last order 15:15) and 17:00–22:30 (last order 22:00); closed over the New Year only (Tabelog). Lunch sets until 14:00 (October 2026). Reservations accepted (Tabelog). Order on a tablet (October 2026). Cards (VISA, Master, JCB, AMEX, Diners) and e-money (Tabelog). 83 seats: 13 at the counter, tables and 32 on tatami with sunken seating; non-smoking; children and strollers welcome, kids\' menu (Tabelog). Opened 1 May 2021 per Tabelog (an older note on the listing gives June, after the state of emergency).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Horie 1-22-18, ナイロンビル 1F (Nishi-ku) — 4 min from Yotsubashi Stn exit 5 or Nishi-Ohashi Stn exit 4',
    cuisine: 'Sanuki-style udon, firm and chewy (2026 reviews), with a long tablet menu of tempura, sides, kushiage and oden · up to 1.5 servings at no extra charge, or a smaller 0.8 serving (September–October 2026) · kakiage sudachi udon, eaten with soy sauce poured over (March and October 2026); kakiage udon with two large fritters; cold udon with burdock tempura; meat udon; chicken-tempura curry udon; beef-tendon curry udon; duck and chicken paitan udon; limited chicken-miso udon (2026) · lunch sets until 14:00 with a choice of rice: takikomi gohan, white rice, clam rice, takana rice, mentaiko rice; ¥1,100–¥1,400 (September–October 2026); a daily special such as chikuwa-tempura udon ¥1,300 or eel rice ¥1,300 (October 2026) · evenings: kushiage, oden and sake (September 2026)',
    website: null, gmaps: gm('うどん 花きり 南堀江'), menu_url: null,
    notes: "[Udon · Minami-Horie, a big, generous Sanuki-style udon house] Much larger inside than the shopfront suggests, with a counter for solo diners, tables and tatami with sunken seating, this Minami-Horie udon house fills with families, couples, tourists and office workers at weekend lunch. The noodles are firm, chewy Sanuki-style, and you can take up to one and a half servings at no extra cost. Favourites include kakiage udon with two big fritters, a sudachi udon to which you add soy sauce, curry udon with chicken tempura or beef tendon, and duck-and-chicken paitan udon; lunch sets (until 14:00) add a bowl of rice such as takikomi or mentaiko. Evenings bring kushiage, oden and sake. Order on a tablet; food comes fast. Diners differ on the curry, which some found thin. Open daily.",
    chef_bio: { chef_name: null, roles: ['Udon makers (unnamed)'], origin: null,
      background: 'Shop-maintained (corporate-member) Tabelog listing; opened 1 May 2021, with an older remark on the listing that it would open in June after the state of emergency. No official site or branch was found. A September 2026 diner compared the bukkake udon to that of the closed Hagakure.',
      philosophy: null, specialty: 'Kakiage udon; sudachi udon; curry udon.',
      anecdotes: [
        { text: '"This time, the staff informed me to add soy sauce to the udon when it was served. Eating it the correct way made it even more delicious than before." — October 2026, kakiage sudachi udon.', source: R + 'B524940553/' },
        { text: '"On Saturday at 1 PM, the restaurant was nearly full with a diverse crowd including families, groups of friends, couples, tourists, and solo diners." — October 2026, chicken curry udon.', source: R + 'B537112802/' },
        { text: '"I was reminded of the bukkake udon from the now-closed \'Hagakure,\' and it made me happy!" — September 2026.', source: R + 'B535939834/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): うどん 花きり、うどん、西区南堀江1-22-18 ナイロンビル 1F、Yotsubashi 駅5番出口から350m、Nishi-Ohashi 駅4番出口から300m、毎日11:00〜15:45 (L.O.15:15)・17:00〜22:30 (L.O.22:00)、年末年始休み、予約可、カード・電子マネー可、83席 (カウンター13、テーブル38、座敷32)、掘りごたつ、禁煙、子ども・ベビーカー可、お子様メニュー、2021年5月1日オープン (緊急事態宣言の解除後の6月にオープン予定との記載も)。口コミ(2026年3月〜10月): 讃岐風のコシのある麺、1.5玉まで無料、かき揚げすだちうどんは醤油をかけて、かき揚げうどん、ごぼう天のざるうどん、鶏天カレーうどん、牛すじカレーうどん、鴨と鶏の白湯うどん、ランチは14時まで、炊き込みご飯や明太ご飯を選べる、1,100〜1,400円、日替わり、タブレットで注文、串揚げやおでんも、カレーは物足りないという声も。',
      confidence: 'medium', sources: [TB, R + 'B524940553/', R + 'B531275790/', R + 'B535939834/', R + 'B536274235/', R + 'B536417309/', R + 'B536701017/', R + 'B536953813/', R + 'B537112802/', R + 'B538054169/', R + 'B538110544/', R + 'B538376247/', R + 'B538414535/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order on a tablet; plastic food samples outside (September 2026); tourists among the lunch crowd (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-22-18 ナイロンビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目22番18号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536274235/', R + 'B538054169/', R + 'B538110544/'],
    price_note: 'Prices from September–October 2026 reviews (tax included as reported); no menu online.', last_checked: TODAY, items: [
      it('', '', 'Lunch set with udon and a rice bowl', '¥1,100', 'Lunch', 'no', 'no', 'October 2026; ¥1,400 for a kakiage set in September 2026.', 'lunch_set'),
      it('', '', 'Chikuwa-tempura udon (daily special)', '¥1,300', 'Udon', 'no', 'no', 'October 2026.', 'chikuwa_udon'),
      it('', '', 'Kakiage sudachi udon', '', 'Udon', 'no', 'no', 'March and October 2026.', 'sudachi_udon'),
      it('', '', 'Chicken-tempura curry udon', '', 'Udon', 'no', 'no', 'October 2026.', 'curry_udon'),
    ] }, {
    cuisine: 'コシのある讃岐風のうどん (2026年の口コミ)、タブレットの長いメニューには天ぷら、一品、串揚げ、おでんも・1.5玉まで無料、0.8玉も選べる (2026年9〜10月)・醤油をかけて食べるかき揚げすだちうどん (2026年3月と10月)、大きなかき揚げ2つのかき揚げうどん、ごぼう天の冷たいうどん、肉うどん、鶏天カレーうどん、牛すじカレーうどん、鴨と鶏の白湯うどん、期間限定の鶏味噌うどん (2026年)・14時までのランチセットはご飯を選べる: 炊き込みご飯、白ご飯、あさりご飯、高菜ご飯、明太ご飯。1,100〜1,400円 (2026年9〜10月)。日替わりはちくわ天うどん1,300円やうなぎご飯1,300円など (2026年10月)・夜は串揚げ、おでん、日本酒 (2026年9月)',
    neighborhood: '西区南堀江1-22-18 ナイロンビル 1F。Yotsubashi 駅5番出口または Nishi-Ohashi 駅4番出口から徒歩4分',
    gf_detail: 'グルテンフリーではありません。小麦のうどんの店で、一品は天ぷら、かき揚げ、唐揚げ、串揚げ、つゆは出汁と醤油ベース。',
    vegan_detail: 'ヴィーガンではありません。うどんのつゆは出汁ベースで、具の多くは鶏、牛、ちくわ、天ぷら。',
    notes: '[うどん・南堀江、大きくて気前のいい讃岐風のうどん屋] 店構えより中はずっと広く、ひとり向けのカウンター、テーブル、掘りごたつの座敷があり、週末の昼は家族連れ、カップル、観光客、会社員でいっぱい。麺はコシのある讃岐風で、1.5玉まで追加料金なし。人気はかき揚げ2つのかき揚げうどん、醤油をかけるすだちうどん、鶏天や牛すじのカレーうどん、鴨と鶏の白湯うどん。14時までのランチセットは炊き込みや明太などのご飯つき。夜は串揚げ、おでん、日本酒も。注文はタブレットで、出てくるのは早い。カレーは物足りないという声も。毎日営業。',
  });
}

// ================================================================ チョイス
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27061466/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://yakiniku-choice.com';
  const H = day(['11:30', '22:00']);
  put({
    id: 'osaka_yakiniku_choice_nishishinsaibashi', name: 'チョイス (Choice)', category: 'OMNI',
    lat: 34.670322, lng: 135.49919, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Salt-grilled tongue and plain cuts are the simplest; the marinades, tare, horumon stew and spicy miso are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kuroge wagyu and horumon yakiniku restaurant; kimchi and salads are side dishes.',
    hours_raw: 'Tue–Sun 11:30–22:00 (last order 21:30), lunch menu 11:30–14:30; closed Monday (Tabelog). Courses stopped from July (official site); temporary closures posted on Instagram (official site). Lunch set meals booked by phone only; online bookings are for the yakiniku menu, and a "seat only" lunch booking means ordering yakiniku (Tabelog). Late arrivals without contact are treated as cancelled; two hours when busy (Tabelog). Cards (VISA, Master, AMEX, UnionPay); no e-money or QR; no service or table charge (Tabelog). 30 seats with a counter; smoking allowed at the table (Tabelog; March 2026). Menus in Korean, English and Chinese (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-8-33, by Amerikamura — 6 min from Shinsaibashi Stn exit 7, 9 min from Namba Stn exit 25',
    cuisine: 'Charcoal yakiniku of kuroge wagyu (official site) · special cuts ¥2,580 each: outside skirt, brisket, tongue (July 2026); special ribeye and skirt steak (September 2026); thick-cut special tongue 80 g ¥2,480; a platter of top loin, top belly and top skirt 100 g ¥1,780 / 200 g ¥3,560 (official site) · rare cuts such as "kuri" (June 2026) · horumon platter of five ¥1,680 (tsurami, shimacho, hachinosu, jo-mino and more, July 2026); shimacho with grilled garlic and spicy miso (March 2026); fresh omasum (March 2026); the signature horumon stew · choregi salad ¥880; kimchi platter (2026) · lunch menu with set meals (Tabelog; June 2026) · shochu; red wine · about ¥5,000–¥9,999 a head at dinner (2026)',
    website: SITE, gmaps: gm('焼肉 チョイス 西心斎橋'), menu_url: SITE,
    notes: "[Yakiniku · Amerikamura, charcoal wagyu with a smoker-friendly room] A small, calm yakiniku restaurant on the edge of Amerikamura, grilling kuroge wagyu over charcoal, quieter than the usual noisy yakiniku house (March 2026). The special cuts at ¥2,580 (outside skirt, tongue, brisket, ribeye) are the ones diners recommend, with a warning that the regular grades can be tough (March 2026); the horumon is glossy and fresh, from the five-kind platter to the signature horumon stew and raw omasum. Lunch brings set meals at gentler prices. A June 2026 diner found the owner and staff warm, and an August 2026 diner calls it popular with professional baseball players. Smoking is allowed at the tables. Courses were dropped from July (the site gives no year). Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "The owner and staff were friendly and welcoming", June 2026)'], origin: null,
      background: 'Per the official site: charcoal yakiniku of carefully chosen kuroge wagyu near Namba, Shinsaibashi and Amerikamura; courses discontinued from July; temporary closures announced on Instagram. Shop-maintained (corporate-member) Tabelog listing. An August 2026 diner calls it popular with professional baseball players. No opening date is given in the sources read.',
      philosophy: null, specialty: 'Special-grade cuts over charcoal; horumon stew.',
      anecdotes: [
        { text: '"The regular cuts of meat can be a bit tough, so I recommend ordering the higher grades." — March 2026, after a friend\'s concert.', source: R + 'B524382585/' },
        { text: '"The owner and staff were friendly and welcoming, making it a comfortable place even for first-time visitors." — June 2026, lunch with a son.', source: R + 'B530396964/' },
        { text: '"This yakiniku restaurant in Shinsaibashi is popular among professional baseball players, and as a Hanshin fan, I had to check it out." — August 2026.', source: R + 'B533642243/' },
      ],
      japanese_sources_summary: '公式サイト (yakiniku-choice.com): 炭火焼肉 CHOICE、難波・心斎橋・アメリカ村で焼肉を食べるなら、厳選した黒毛和牛の上質の部位、炭火×黒毛和牛、7月よりコース料理の提供を停止、臨時休業は Instagram で、上3種盛合わせ (上ロース・上バラ・上ハラミ) 100g 1,780円・200g 3,560円、特選厚切りタン80g 2,480円、韓国語・英語・繁体字・簡体字のメニュー。食べログ (店舗会員): 焼肉・居酒屋・韓国料理、西心斎橋2-8-33、火〜日 11:30〜22:00 (L.O.21:30)、ランチは11:30〜14:30、月曜休み、ランチの定食は電話予約のみ、混雑時は120分、カード可、電子マネー・QR不可、サービス料・チャージ料なし、30席、喫煙可。口コミ(2026年3月〜9月): 特上の部位2,580円 (外ハラミ、ブリスケ、タン)、ホルモン5種盛り1,680円、名物のホルモン煮込み、生センマイ、チョレギサラダ880円、並の肉は固めなので上の部位を、席でたばこが吸える、プロ野球選手もよく来るという声、店主とスタッフが親切。',
      confidence: 'medium', sources: [SITE, TB, R + 'B515949534/', R + 'B524382585/', R + 'B524848969/', R + 'B525543840/', R + 'B526487828/', R + 'B527546497/', R + 'B530396964/', R + 'B530655288/', R + 'B530796555/', R + 'B532994188/', R + 'B533642243/', R + 'B534350667/'] },
    cultural_comfort: { level: 'english', note: 'English, Korean and Chinese menus on the official site; book online or by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-8-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and the shop-maintained Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目8番33号 (go) 15m. Ebi Shin (osaka_ebi_shin_amemura, address_ja "西心斎橋2-8-33", no building or floor given) shares the street number and is pinned 6m away, so no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B532994188/'],
    price_note: 'Prices from the official site (read November 2026) and a July 2026 review (tax included).', last_checked: TODAY, items: [
      it('上3種盛合わせ', '', 'Top loin, top belly and top skirt platter (100 g)', '¥1,780', 'Wagyu', 'ask', 'no', 'Official site; ¥3,560 for 200 g.', 'top_three'),
      it('特選厚切りタン', '', 'Thick-cut special tongue (80 g)', '¥2,480', 'Wagyu', 'ask', 'no', 'Official site.', 'thick_tongue'),
      it('', '', 'Special outside skirt', '¥2,580', 'Wagyu', 'ask', 'no', 'July 2026.', 'special_harami'),
      it('', '', 'Horumon platter of five', '¥1,680', 'Horumon', 'ask', 'no', 'July 2026.', 'horumon_platter'),
      it('', '', 'Choregi salad', '¥880', 'Sides', 'ask', 'ask', 'July 2026.', 'choregi'),
    ] }, {
    cuisine: '黒毛和牛の炭火焼肉 (公式サイト)・特上の部位は各2,580円: 外ハラミ、ブリスケ、タン (2026年7月)、特上のリブロースとハラミステーキ (2026年9月)、特選厚切りタン80g 2,480円、上ロース・上バラ・上ハラミの上3種盛合わせ100g 1,780円・200g 3,560円 (公式サイト)・希少部位のクリなど (2026年6月)・ホルモン5種盛り1,680円 (ツラミ、シマチョウ、ハチノス、上ミノなど、2026年7月)、焼きにんにくと辛みそで食べるシマチョウ (2026年3月)、生センマイ (2026年3月)、名物のホルモン煮込み・チョレギサラダ880円、キムチの盛り合わせ (2026年)・定食のあるランチ (食べログ、2026年6月)・焼酎、赤ワイン・夜は1人5,000〜9,999円ほど (2026年)',
    neighborhood: '西心斎橋2-8-33、アメリカ村のそば。Shinsaibashi 駅7番出口から徒歩6分、Namba 駅25番出口から徒歩9分',
    gf_detail: '要確認。グルテンの情報なし。塩のタンやシンプルな部位がいちばんシンプルだが、漬けだれ、タレ、ホルモン煮込み、辛みそは説明がない。',
    vegan_detail: 'ヴィーガンではありません。黒毛和牛とホルモンの焼肉店で、キムチやサラダは脇役。',
    notes: '[焼肉・アメリカ村、炭火の和牛とたばこの吸える店] アメリカ村のはずれの、黒毛和牛を炭火で焼く小さく落ち着いた焼肉店で、よくあるにぎやかな焼肉屋より静か (2026年3月)。おすすめは2,580円の特上の部位 (外ハラミ、タン、ブリスケ、リブロース) で、並は固めという忠告も。ホルモンはつやがあって新鮮で、5種盛りから名物のホルモン煮込み、生センマイまで。昼は定食で手ごろに。2026年6月の口コミでは店主とスタッフが親切、8月の口コミではプロ野球選手もよく来るという。席でたばこが吸える。7月からコースはなし (サイトに年の記載はない)。月曜休み。',
  });
}

save();
