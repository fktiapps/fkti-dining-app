// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 3 (lane: Tabelog id mod 4 = 1).
//   + 肉料理とワイン YUZAN 南船場 (bone-in aged beef and grass-fed jibeef horumon over binchotan, since the early 1990s; Yakiniku WEST 100 2020, 2021)
//   + 中国料理 龍門 Chinese Ryomon (Kitahama machi-chuka in a listed retro basement; Tianjin curry fried rice; Chinese WEST 100 2021)
//   + 生餃子製造トコロ てんしんのきもち Tenshin no Kimochi (handmade gyoza by Taisho Station, since 2021; Gyoza 100 2024)
//   + 六覺燈 Rokukaku tei (omakase kushiage with wine in Kuromon Market, since 1980)
//   Skipped: クアアイナ なんばパークス店 27002325 — branch of the KUA`AINA hamburger chain (an April 2026 reviewer: "Despite
//   being a chain"); department-store/mall branch of a national chain.
//   No ramen block for Ryomon or Tenshin no Kimochi, though Tabelog lists "Ramen" / "Taiwanese mixed noodles" among their
//   genres: Ryomon's draw is its fried rice (about 80% of lunch diners order the Tianjin curry fried rice, October 2026), and
//   the noodles (champon, Tianjin noodles, ankake yakisoba) appear in single reviews only, too thin to source a profile;
//   Tenshin no Kimochi is a gyoza house (Gyoza 100) whose mazesoba is a side dish. Precedent: Osaka Ōshō Dotonbori honten
//   (b2, gyoza, no ramen block). Flagged to the integrator.
//   Chain check:
//   - YUZAN: the operator's site (a-nest.co.jp) lists two restaurants, 遊山 and 薪火 全 (Makibi Zen) on Awaji Island; not a chain.
//   - Ryomon: one listing. An October 2026 reviewer notes the nearby "New Shanghai Karamachi Main Store" has the same menu;
//     no ownership link is stated, so none is claimed. Nothing in data (grep 新上海|Shanghai).
//   - Tenshin no Kimochi: one restaurant plus its own frozen-gyoza mail order (official site).
//   - Rokukakutei: the company history lists the Kuromon main shop (founded 1980) and a Ginza shop (2004); a September 2026
//     review also mentions a Daimaru Shinsaibashi food-hall counter; a 六覺燈カフェ opened in 2024 (site news). Small and
//     slow-growing, kept like ル・ピノー. No 六覺燈 record in osaka, tokyo or kyoto data.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27002325', 'Chain: クアアイナ なんばパークス店 is a Namba Parks branch of the KUA`AINA hamburger chain (an April 2026 Tabelog reviewer: "Despite being a chain, it has been selected as one of Tabelog\'s top 100").');

// ================================================================ 肉料理とワイン YUZAN 南船場
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000597/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.a-nest.co.jp/yuzan.html';
  const H = day(['17:30', '23:00']);
  put({
    id: 'osaka_yuzan_minamisenba', name: '肉料理とワイン YUZAN 南船場 (Niku Ryori to Wine YUZAN Minamisenba)', category: 'OMNI',
    lat: 34.67584, lng: 135.509124, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Seasoning is kept simple, but the shop names a naturally brewed, three-year soy sauce and miso among its seasonings (official site), and dipping sauces of soy, miso and sudachi come with the meat (August 2026); courses end with a spice curry or cold noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an aged-beef and horumon restaurant; the vegetables come with the meat courses and the red-wine shabu-shabu.',
    hours_raw: 'Tue–Sat 17:30–23:00, last order 22:30 (official site); Tabelog gives 17:00–23:00 with last order food 21:30, drinks 22:00, and says closing time can depend on how much meat is left; closed Sunday and Monday, with occasional irregular closures. Reservations by phone (official site) or online (Tabelog). Cancellation: 30% of the course two days before, 50% the day before, 100% on the day (official site; Tabelog gives 50% and 100%). Table charge ¥550 per person (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 47 seats: tables for 4 ×7 and 6 ×2, a private room for 7, rooms up to 15; non-smoking, smoking area on the terrace; whole-restaurant hire up to 50 (Tabelog; official site). Children only when a private room is free (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Semba 1-10-2, in a quiet office district between Nagahoribashi and Matsuyamachi — 3–5 min from Nagahoribashi Stn exit 1',
    cuisine: 'Charcoal-grilled aged beef, all aged on the bone (official site): Omi beef rump and ichibo and older cows from サカエヤ in Kusatsu, Shiga; grazed shorthorn T-bone and misuji from Hokkaido\'s エレゾ; fresh black-wagyu heifers from やまさん牧場, a farm of more than 100 years whose cattle eat fermented pineapple and sugarcane (fillet, shintama and other rare cuts); horumon from fully free-grazing "jibeef" cattle of 様似牧場 in Hokkaido · no chemical seasonings since opening; seasonings named by the shop include three-year-brewed soy sauce and miso from 井上本店, apple and rice vinegar, special salts and Awaji Island sun-dried salt (official site) · courses, tax excluded (official site, read November 2026): own-pace yakiniku course ¥8,500, a modest course ¥10,000, a full run of YUZAN\'s chosen meats ¥13,000 (Kagoshima black wagyu fillet), a block of meat grilled by the chef ¥15,000–25,000; red-wine shabu-shabu ¥12,000, premium ¥15,000 with Chateaubriand · on Tabelog the same yakiniku courses are ¥9,350, ¥11,000 and ¥14,300 with tax · à la carte (tax excluded): seared black-wagyu carpaccio ¥2,300, 100% beef terrine ¥1,800, stewed jibeef horumon ¥850, special salted tongue ¥2,000, meat and horumon platter ¥5,000; a glass of wine with appetizers for solo diners · from reviews: omasum with a miso-based sauce, horumon in tomato sauce, horumon pâté, 40-day and 3-week aged top sirloin, Kikaijima-farm Chateaubriand (January 2025), spice curry with mango chutney to finish (July 2025, June 2026), sudachi sorbet (August 2026) · a walk-in wine cellar chosen by the owner-sommelier',
    website: SITE, gmaps: gm('肉料理とワイン 遊山 南船場'), menu_url: SITE,
    notes: "[Yakiniku · Minami-Semba, bone-in aged beef with a walk-in wine cellar] A quiet, spacious meat-and-wine restaurant in an office district near Nagahoribashi, open since the early 1990s and moved here from Ikuno Ward (a June 2025 diner). Everything is aged on the bone: Omi beef from Shiga, grazed shorthorn from Hokkaido, and black wagyu from a century-old Kagoshima farm; the horumon is from free-roaming Hokkaido ジビーフ (jibeef) cattle, lean and grassy. The owner-chef brings a bone-in block to the table, explains each cut and grills it over Kishu binchotan (January 2025). Start with the seared wagyu carpaccio, a must-order for one returning diner, then a course from ¥9,350 with tax, the red-wine shabu-shabu, or à la carte down to a glass of wine and appetizers for one; finish with the spice curry and mango chutney. Diners pick bottles inside the cellar (January 2026). One diner found the soy, miso and sudachi sauces short of punch. Tabelog Yakiniku WEST 100 2020 and 2021.",
    chef_bio: { chef_name: null, roles: ['Owner-sommelier and owner-chef ("Yasuda" in a September 2024 review; no Japanese source names the owner)', 'Head chef (料理長) grills the blocks at the table (official site)', 'Operator: the company behind a-nest.co.jp, which also runs 薪火 全 (Makibi Zen) on Awaji Island'], origin: null, background: 'The official site gives the founding as 1990 in one place and 1992 in another; Tabelog\'s opening day is 4 November 1993, and its shop text speaks of 34 years and aged Omi beef that draws fans from afar. A June 2025 diner knew it long ago in Ikuno Ward before the move to Minami-Semba. The same operator runs 薪火 全 (Makibi Zen), an 8-seat wood-fire counter in a national park on Awaji Island with one guest room (official site), open on weekends per 2024–2025 reviews. Diners describe the owner-chef explaining each cut\'s origin and rearing (September 2024) and an attentive owner couple (January 2025).', philosophy: '"Seasoning kept to the simplest, so you taste the difference between meats"; no chemical seasonings since opening, "not just delicious, but easy on the body" (official site).', specialty: 'Bone-in aged beef; jibeef horumon; seared wagyu carpaccio; spice curry.',
      anecdotes: [
        { text: '"The carpaccio remains delicious as ever. It\'s a must-order… For the finale, I recommend the curry. Be sure to add mango chutney for a perfect finish." — July 2025, back after five years or more.', source: R + 'B510660571/' },
        { text: '"I was able to enter the wine cellar and choose my wine while receiving explanations!" — January 2026.', source: R + 'B521660351/' },
        { text: '"The Premium Salted Tongue and Aged Omi Beef were surprisingly delicious… The staff kindly explained the characteristics of the meat and the benefits of aged meat." — September 2026.', source: R + 'B536408645/' },
      ],
      japanese_sources_summary: '公式サイト (a-nest.co.jp): 肉料理とワイン 遊山 Yuzan、心斎橋にほど近い静かなエリアの隠れ家レストラン、1990年創業以来 (別の箇所では1992年の創業以来)、熟成肉は全て骨付き、近江牛ランプ・イチボ / 経産牛は滋賀県草津「サカエヤ」、放牧の短角牛 Tボーン / ミスジは北海道エレゾ、創業100年を超える「やまさん牧場」の発酵したパイナップルやさとうきびを食べた雌の黒毛和牛 (ヒレ / シンタマ など希少部位)、ホルモンは北海道の様似牧場の完全放牧「ジビーフ」(日本で一番自由な牛)、化学調味料は一切使用せず、井上本店の天然醸造 三年熟成の醤油と味噌、内堀醸造のりんご酢・米酢、田野屋塩二郎の塩、淡路島の天日塩、クラタペッパー、オーナーソムリエ厳選ワインのセラー、ワインとアテで一人呑みも、個室、最大50名の貸し切り。お料理例 (外税): 自分のペースで焼肉コース8,500円、控えめな量でリーズナブルに10,000円、遊山の厳選肉を一通り13,000円 (発酵食で育った鹿児島県産 黒毛和牛 極上ヒレ)、シェフが焼く塊肉の特別コース15,000〜25,000円 (料理長が目の前で焼く)、赤ワインしゃぶしゃぶ12,000円・プレミアム15,000円 (シャトーブリアン)、炙り黒毛和牛肉のカルパッチョ2,300円、牛肉100%テリーヌ1,800円、ジビーフホルモンの煮込み850円、特上塩タン2,000円、肉盛5,000円、ほろ酔いセット。営業時間 火曜日〜土曜日17:30〜23:00 (L.O.22:30)、予約は電話、キャンセル料は前々日30%・前日50%・当日100%、南船場1-10-2、長堀橋1番出口から徒歩5分。同じ会社の店: 薪火 全 (淡路島の国定公園内、カウンター8席の薪料理専門店、一日一組のゲストルーム)。食べログ (店舗会員): 17:00〜23:00 (L.O. 料理21:30・ドリンク22:00)、日・月休み、チャージ550円、47席、テラスに喫煙所、子どもは個室が空いているときのみ、オープン1993年11月4日、焼肉 WEST 百名店 2020・2021、コース (税込) 9,350円・11,000円・14,300円。口コミ(2024年9月〜2026年9月): オーナーシェフが骨付きの塊肉を持ってきて産地と部位を説明、Kishu binchotan、センマイと味噌ベースのたれ、和牛のカルパッチョ、ホルモンのトマト煮込みとパテ、40日熟成と3週間熟成のトップサーロイン、Kikaijima の牧場のシャトーブリアン、スパイスカレーにマンゴーチャツネ、赤ワインしゃぶしゃぶ、ワインセラーに入って選べる、以前は Ikuno 区、醤油・味噌・sudachi のたれは物足りないという声、sudachi のソルベは酸っぱかったという声。',
      confidence: 'medium', sources: [TB, SITE, 'http://www.a-nest.co.jp/', R + 'B492717552/', R + 'B498669016/', R + 'B499854373/', R + 'B508632551/', R + 'B510660571/', R + 'B514316037/', R + 'B521660351/', R + 'B529752799/', R + 'B534410442/', R + 'B536408645/'] },
    cultural_comfort: { level: 'english', note: 'The official site has an English version; staff explain each cut (2024–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-10-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (notice of November 2025) and shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目10番2号 (go) 12m. Nearest record 珉龍 (osaka_minryu_nagahori, address_ja "大阪府大阪市中央区南船場1-10-16-102") is about 83 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB],
    price_note: 'Prices from the official site, tax excluded (read November 2026); Tabelog lists the yakiniku courses with tax at ¥9,350, ¥11,000 and ¥14,300.', last_checked: TODAY, items: [
      it('自分のペースで焼肉コース', '', 'Own-pace yakiniku course (tax excluded)', '¥8,500', 'Course', 'ask', 'no', 'Official site.', 'yakiniku_course_8500'),
      it('遊山の厳選肉を一通り', '', 'Full course of YUZAN\'s chosen meats, Kagoshima black-wagyu fillet (tax excluded)', '¥13,000', 'Course', 'ask', 'no', 'Official site; ¥14,300 with tax on Tabelog.', 'yakiniku_course_13000'),
      it('赤ワインしゃぶしゃぶ', '', 'Red-wine shabu-shabu, standard course (tax excluded)', '¥12,000', 'Course', 'ask', 'no', 'Official site.', 'red_wine_shabu'),
      it('炙り黒毛和牛肉のカルパッチョ', '', 'Seared black-wagyu carpaccio (tax excluded)', '¥2,300', 'À la carte', 'ask', 'no', 'Official site.', 'carpaccio'),
      it('ジビーフホルモンの煮込み', '', 'Stewed jibeef horumon (tax excluded)', '¥850', 'À la carte', 'ask', 'no', 'Official site.', 'jibeef_stew'),
      it('特上塩タン', '', 'Special salted tongue (tax excluded)', '¥2,000', 'À la carte', 'ask', 'no', 'Official site.', 'salted_tongue'),
    ] }, {
    cuisine: '骨付きで熟成させた牛肉の炭火焼き (公式サイト): 滋賀県草津「サカエヤ」の近江牛ランプ・イチボと経産牛、北海道エレゾの放牧の短角牛 Tボーンとミスジ、創業100年を超える「やまさん牧場」の発酵したパイナップルやさとうきびで育った黒毛和牛の雌牛 (ヒレ、シンタマなど希少部位)、北海道の様似牧場の完全放牧「ジビーフ」のホルモン・創業以来化学調味料は使わず、井上本店の天然醸造 三年熟成の醤油と味噌、りんご酢・米酢、こだわりの塩、淡路島の天日塩 (公式サイト)・コース、外税 (公式サイト、2026年11月に確認): 自分のペースで焼肉コース8,500円、控えめな量でリーズナブルに10,000円、遊山の厳選肉を一通り13,000円 (鹿児島県産 黒毛和牛 極上ヒレ)、シェフが焼く塊肉の特別コース15,000〜25,000円、赤ワインしゃぶしゃぶ12,000円・プレミアム15,000円 (シャトーブリアン)・食べログでは焼肉コースは税込9,350円、11,000円、14,300円・アラカルト (外税): 炙り黒毛和牛肉のカルパッチョ2,300円、牛肉100%テリーヌ1,800円、ジビーフホルモンの煮込み850円、特上塩タン2,000円、肉盛5,000円、一人呑みのほろ酔いセット・口コミから: 味噌ベースのたれのセンマイ、ホルモンのトマト煮込み、ホルモンのパテ、40日熟成と3週間熟成のトップサーロイン、Kikaijima の牧場のシャトーブリアン (2025年1月)、締めのスパイスカレーにマンゴーチャツネ (2025年7月、2026年6月)、sudachi のソルベ (2026年8月)・オーナーソムリエが選ぶワインのセラーに入って選べる',
    neighborhood: '南船場1-10-2、長堀橋と松屋町のあいだの静かなオフィス街。長堀橋駅1番出口から徒歩3〜5分',
    gf_detail: '要確認。グルテンの情報なし。味付けはシンプルだが、調味料に天然醸造 三年熟成の醤油と味噌を挙げていて (公式サイト)、肉には醤油、味噌、sudachi のたれが付く (2026年8月)。締めはスパイスカレーや冷麺。',
    vegan_detail: 'ヴィーガンではありません。熟成牛とホルモンの店で、野菜は肉のコースや赤ワインしゃぶしゃぶの一部。',
    notes: '[焼肉・南船場、骨付き熟成肉とワインセラー] 長堀橋に近いオフィス街の静かで広い肉とワインの店で、1990年代はじめからあり、Ikuno 区から移ってきた (2025年6月の口コミ)。肉はすべて骨付きで熟成: 滋賀の近江牛、北海道の放牧の短角牛、Kagoshima の100年を超える牧場の黒毛和牛。ホルモンは北海道の自由に放牧された「ジビーフ」で、脂が少なく草の香り。オーナーシェフが骨付きの塊肉をテーブルに持ってきて部位を説明し、Kishu binchotanで焼く (2025年1月)。まずは炙り和牛のカルパッチョ (久しぶりに来たある人は必ず頼むと)、それから税込9,350円からのコース、赤ワインしゃぶしゃぶ、あるいはアラカルトで、一人ならグラスワインと前菜だけでも。締めはスパイスカレーにマンゴーチャツネを。ワインはセラーに入って選べる (2026年1月)。醤油、味噌、sudachi のたれは物足りないという声も。食べログ 焼肉 WEST 百名店 2020・2021。',
  });
}

// ================================================================ 中国料理 龍門
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27004617/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '13:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_chugoku_ryori_ryumon_kitahama', name: '中国料理 龍門 (Chinese Ryomon)', category: 'OMNI',
    lat: 34.688996, lng: 135.505936, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu leans on gyoza, spring rolls, yakisoba, champon and other wheat-noodle dishes, kara-age and sauced stir-fries; nothing is said about what goes into the curry fried rice, which diners season with Worcestershire or soy sauce from the table.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg covers the signature fried rice, and the menu is meat, squid and shrimp stir-fries, gyoza and soups; nothing is described as vegan.',
    hours_raw: 'Mon–Fri 11:00–13:00 and 17:30–21:00; closed Saturday and Sunday (Tabelog; reviews). Reservations accepted (Tabelog); group omakase dinners are booked ahead (April 2026), and Friday nights fill up (September 2026). At weekday lunch it fills by noon; the Tianjin curry fried rice can take a while, and staff may suggest another dish (September and October 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). About 50 seats, tatami room, non-smoking (Tabelog). Not a shop-maintained listing.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fushimimachi 2-2-6, basement of 青山ビル, a retro building registered as a tangible cultural property; down a narrow stair through a door on the right — 1 min from Kitahama Stn exit 6',
    cuisine: 'Long-established machi-chuka (local Chinese), menu unchanged since it opened (August 2026) · signature: Tianjin curry fried rice under a thick, soft omelette, ¥1,000, large ¥1,200, with soup (2026); Tianjin fried rice without curry; Tianjin noodles · weekday lunch special of two dishes with rice and soup ¥1,100 (e.g. shrimp chili and mapo glass noodles, August–September 2026) · also: ankake yakisoba (a signature for some regulars), champon with a sweetish thick sauce, ramen, mapo noodles · evening: gyoza made without garlic, spring rolls, salad of Mongolian squid and daikon sprouts, steamed chicken with sesame miso, cold roast pork and cucumber, eggplant and meat miso stir-fry, eggs with wood ear, mapo tofu, sweet-and-sour pork, beef with green peppers · omakase for groups ¥3,500 (April 2026) · Shaoxing wine, hot sake, beer',
    website: null, gmaps: gm('中国料理 龍門 北浜'), menu_url: TB,
    notes: "[Chinese · Kitahama, the curry fried rice under an omelette, in a listed basement] A long-established local Chinese restaurant, over 40 years by one diner's count, down a narrow stair into the basement of a retro Kitahama building registered as a tangible cultural property; you go in through the entrance of the omurice shop Kitakousei and take the door on the right. Weekday lunch fills up by noon, and most diners order the same thing: Tianjin curry fried rice, a mound of curry-flavoured rice under a thick, soft omelette (¥1,000, large ¥1,200), served with a soup that changes day to day. It can take time, so the ¥1,100 two-dish daily lunch is the quick choice. Evenings it turns into a lively group dinner spot: garlic-free gyoza, crisp spring rolls, a Mongolian-squid salad, mapo tofu, ankake yakisoba and plenty of Shaoxing wine. Mind your head on the stairs. Closed at weekends. Tabelog Chinese WEST 100 2021.",
    chef_bio: { chef_name: null, roles: ['Owner and kitchen unnamed in every source read'], origin: null, background: 'A long-established local Chinese restaurant with over 40 years of history (September 2026 review), in the basement of 青山ビル, which reviewers describe as a registered tangible cultural property (September and October 2026). Diners describe an always cheerful, lively owner who welcomes regulars (May 2025) and a lively, assertive hostess with an Osaka manner (October 2026); a reviewer recalls it on TV (August 2026). Tabelog Chinese WEST 100 2021.', philosophy: null, specialty: 'Tianjin curry fried rice; gyoza; Mongolian-squid salad; ankake yakisoba.',
      anecdotes: [
        { text: '"That said, about 80% of the other diners also ordered the Tenshin Curry Fried Rice." — October 2026, two lunches on consecutive days.', source: R + 'B536658370/' },
        { text: '"Please be careful not to bump your head on the narrow stairs at the entrance (even if you know, you\'ll hit it about one out of three times)." — May 2025.', source: R + 'B507474919/' },
        { text: '"The gyoza is delicious even without garlic." — May 2025.', source: R + 'B507474919/' },
      ],
      japanese_sources_summary: '食べログ (英語版): Chinese Ryomon (チュウゴクリョウリ リュウモン)、中国料理・ラーメン、伏見町2-2-6 青山ビル B1F、北浜駅6番出口からすぐ、月〜金11:00〜13:00・17:30〜21:00、土日休み、予約可、カード可、電子マネー・QR不可、50席、座敷、禁煙、中国料理 WEST 百名店 2021。口コミ(2025年5月〜2026年10月): 40年以上の歴史、登録有形文化財のレトロなビルの地下、Kitakousei の入口から入って右の扉から階段を下りる、狭い階段で頭をぶつける、昼は満席、ランチ客の8割が天津カレー炒飯 (1,000円、大盛り1,200円、日替わりのスープ付き)、ふわふわの卵の下にカレー味の炒飯、ソースや醤油をかけても、時間がかかるので日替わりランチ1,100円 (2品、ご飯、スープ) を勧められることも、天津麺、ankake yakisoba、少し甘めのあんの champon、ラーメン、麻婆麺、夜はにんにくなしの gyoza、春巻き、Mongolian squid と kaiware のサラダ、蒸し鶏の胡麻 miso、茄子の肉味噌炒め、きくらげと卵の炒め、麻婆豆腐、酢豚、団体のおまかせ3,500円、紹興酒、元気な店主、開店以来変わらないメニュー、テレビで見た。',
      confidence: 'medium', sources: [TB, R + 'B379311270/', R + 'B494168102/', R + 'B494292655/', R + 'B50635530/', R + 'B507474919/', R + 'B531770267/', R + 'B532362249/', R + 'B533387110/', R + 'B534551577/', R + 'B535026512/', R + 'B535175176/', R + 'B535644248/', R + 'B535649568/', R + 'B535821244/', R + 'B536658370/', R + 'B537566550/', R + 'B537976851/', R + 'B538184784/', R + 'B538202957/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Orders taken verbally; a long Japanese menu, but most lunch diners just order the curry fried rice (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区伏見町2-2-6 青山ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); 2026 reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区伏見町二丁目2番6号 (go) 12m. Nearest record 伝承油そば 子豚の花 (osaka_densho_aburasoba_kobuta_no_hana, address_ja "大阪府大阪市中央区高麗橋2-3-2 日宝高麗橋ビル 1F") is about 121 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535649568/', R + 'B494168102/', R + 'B379311270/'],
    price_note: 'Prices from 2026 reviews (tax included per a September 2026 review).', last_checked: TODAY, items: [
      it('天津カレー炒飯', '', 'Tianjin curry fried rice under an omelette, with soup', '¥1,000', 'Rice', 'ask', 'no', 'September and October 2026 reviews; large ¥1,200.', 'tianjin_curry_fried_rice'),
      it('', '', 'Daily lunch special (two dishes, rice, soup)', '¥1,100', 'Lunch', 'ask', 'no', 'August–October 2026 reviews.', 'daily_lunch'),
      it('', '', 'Gyoza (no garlic)', '', 'Evening dishes', 'no', 'no', 'April 2026 and May 2025 reviews.', 'gyoza'),
      it('', '', 'Mongolian squid and daikon-sprout salad', '', 'Evening dishes', 'ask', 'no', 'October 2026 review.', 'squid_salad'),
      it('', '', 'Omakase for groups', '¥3,500', 'Course', 'ask', 'no', 'April 2026 review.', 'group_omakase'),
    ] }, {
    cuisine: '開店以来メニューが変わらないという昔ながらの町中華 (2026年8月)・名物: ふわふわの厚い卵の下にカレー味の炒飯の天津カレー炒飯1,000円、大盛り1,200円、スープ付き (2026年)、カレーなしの天津炒飯、天津麺・平日の日替わりランチは2品、ご飯、スープで1,100円 (たとえば海老チリと麻婆 harusame、2026年8〜9月)・ほかに常連が名物に挙げるankake yakisoba、少し甘めのあんの champon、ラーメン、麻婆麺・夜はにんにくなしの gyoza、春巻き、Mongolian squid と kaiware のサラダ、蒸し鶏の胡麻 miso、焼豚ときゅうりの辛い冷菜、なす肉味噌炒め、きくらげと卵の炒め、麻婆豆腐、酢豚、ピーマンと牛肉の炒め・団体のおまかせ3,500円 (2026年4月)・紹興酒、熱燗、ビール',
    neighborhood: '伏見町2-2-6 青山ビル B1F。登録有形文化財のレトロなビルで、右の扉から狭い階段を地下へ。北浜駅6番出口から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。メニューは gyoza、春巻き、yakisoba、champon など小麦の麺料理、kara-age、タレの炒め物が多く、名物のカレー炒飯の材料の説明もない。カレー炒飯はテーブルのソースや醤油で味を足す人も。',
    vegan_detail: 'ヴィーガンではありません。名物の炒飯は卵でおおい、メニューは肉、イカ、海老の炒め物、gyoza、スープ。ヴィーガンの説明はない。',
    notes: '[中華・北浜、オムレツの下のカレー炒飯、文化財のビルの地下で] 40年以上という昔ながらの町中華で、登録有形文化財の北浜のレトロなビルの地下へ、狭い階段を下りる。オムライスの店 Kitakousei の入口から入って右の扉へ。平日の昼は正午には満席になり、ほとんどの人が頼むのは天津カレー炒飯: カレー味の炒飯の山を厚くふわふわの卵がおおい (1,000円、大盛り1,200円)、日替わりのスープが付く。時間がかかるので、早く食べたいなら2品の日替わりランチ (1,100円) を。夜はにぎやかな宴会の店になり、にんにくなしの gyoza、パリッとした春巻き、Mongolian squid のサラダ、麻婆豆腐、ankake yakisobaに紹興酒。階段で頭をぶつけないように。土日休み。食べログ 中国料理 WEST 百名店 2021。',
  });
}

// ================================================================ 生餃子製造トコロ てんしんのきもち
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270401/27121713/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.gyouza.net/';
  const H = day(['11:00', '24:00']);
  put({
    id: 'osaka_tenshin_no_kimochi_taisho', name: '生餃子製造トコロ てんしんのきもち (Nama Gyoza Seizo Tokoro Tenshin no Kimochi)', category: 'OMNI',
    lat: 34.666369, lng: 135.478704, cuisine_type: 'gyoza',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every gyoza is wrapped in wheat dough made from Hokkaido Haruyutaka flour (Tabelog), and the menu adds fried gyoza, mazesoba and soy-based dipping sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the gyoza are meat- or shrimp-filled, and the courses add oysters, chicken and beef; nothing is described as vegan.',
    hours_raw: 'Daily 11:00–24:00 (last order food 23:00, drinks 23:30), open year-round; set lunches until 14:00, and lunch ends when the rice runs out (Tabelog). Lunch reservations only for the 11:00 opening, and a booking is cancelled if you are not there when called; from 14:00 one drink per person (Tabelog). The phone may go unanswered at lunch. Cards (VISA, Master, JCB, AMEX), PayPay and au PAY; no e-money (Tabelog). 44 seats: 12 at the counter, 34 at tables; non-smoking; hire for 20–50 (Tabelog). Children welcome all day, kids menu (Tabelog). English menu, menu with photos, digital menu (Tabelog). Takeout; frozen gyoza by mail order (official site). Opened 6 April 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sangenya-nishi 1-2-11, Taisho — 1 min from JR and Osaka Metro Taisho Stn; 6 min from Dome-mae and Dome-mae Chiyozaki Stns (Kyocera Dome)',
    cuisine: 'Handmade gyoza from a workshop on the premises: the dough of 100% Hokkaido Haruyutaka wheat is kneaded and every dumpling wrapped by hand daily, with no preservatives (Tabelog; official site) · plates of two, ¥380–580 (October 2026): pan-fried gyoza bursting with juice, boiled gyoza, crispy fried gyoza, fried gyoza with tartar sauce, steamed gyoza in rich sesame sauce, truffle gyoza, shrimp dumplings, "Tenshin-style" gyoza, two kinds of steamed shumai; extra pieces to order singly; garlic-free (2026 reviews) · lunch sets until 14:00: fried gyoza set ¥1,180 with herb-and-coriander salad, soup and zha cai (October 2026); a set of boiled and pan-fried gyoza with Chinese chawanmushi (November 2026); four kinds of gyoza with rice ¥1,720 (October 2026) · Taiwanese mazesoba, mapo tofu, Taiwanese paper-wrapped chicken, beef katsu with black pepper sauce · seasonal banquet with fresh oysters, 12 items, ¥5,000 until 31 January; party courses with all-you-can-drink, from about ¥2,000 (October 2026) · Tsingtao beer, shochu, cocktails · frozen gyoza by mail, 24 or 96 pieces (official site)',
    website: SITE, gmaps: gm('てんしんのきもち 大正'), menu_url: TB,
    notes: "[Gyoza · Taisho, handmade gyoza by the station, open to midnight] A spacious gyoza tavern a minute from Taisho Station, handy before a game or concert at Kyocera Dome, where the wrappers are rolled from Hokkaido Haruyutaka wheat and every dumpling is wrapped by hand in the workshop on site. Plates of two (¥380–580) let you compare: juicy pan-fried, chewy boiled, crisp fried, fried with tartar sauce, and the favourite of one October 2026 diner, steamed gyoza in a rich sesame sauce; staff explain which sauce goes with which, and there's no garlic. Lunch sets (fried gyoza set ¥1,180) come with an herb salad, soup and self-serve zha cai; the pickled mustard greens alone won over one returning diner. Evenings bring Taiwanese mazesoba, mapo tofu and all-you-can-drink courses. One drink per person after 2 pm, and one diner found dishes cooling when served all at once. Tabelog Gyoza 100 2024.",
    chef_bio: { chef_name: null, roles: ['Kitchen and owner unnamed in every source read'], origin: null, background: 'Per the official site, the shop makes everything by hand, from kneading the dough to wrapping, "going against the times" of mechanisation for quality, and sells its preservative-free frozen gyoza online; site posts from February 2021 announce the gyoza tavern with an attached workshop opening in April in Taisho-ku and a switch to Tsumagoi highland cabbage. Tabelog\'s opening day is 6 April 2021; Gyoza 100 2024. Diners describe kind staff who explain how to eat each kind (October 2026).', philosophy: '"No preservatives, all handmade": an analogue process kept on purpose, to make gyoza that digital efficiency cannot (official site).', specialty: 'Handmade gyoza: pan-fried, boiled, fried and sesame-sauce steamed.',
      anecdotes: [
        { text: '"The chewy steamed gyoza coated in rich sesame sauce is a match made in heaven! You can really taste the sesame flavor, making it my top pick!" — October 2026, four kinds of gyoza and rice for ¥1,720.', source: R + 'B537175161/' },
        { text: '"Particularly noteworthy is the appetizer, the pickled mustard greens… so delicious that it could overshadow the star of the show, the gyoza." — October 2026, lunch.', source: R + 'B525829142/' },
        { text: '"As expected from a gyoza specialty shop, the gyoza was chewy and juicy. Plus, it was garlic-free, so I could enjoy it without worry." — October 2026, fried gyoza set ¥1,180.', source: R + 'B538251183/' },
      ],
      japanese_sources_summary: '公式サイト: 日式飲茶 点心の気持ち、大阪市大正区三軒屋西1-2-11、工房併設の餃子レストラン、食べログ2024年餃子百名店選出、保存料無添加オールハンドメイド餃子、生地の練り上げから包む工程まですべてハンドメイド、機械化・効率化が進む時代に逆行するアナログな工程、冷凍餃子通販 (96個4,980円、24個1,980円、セール価格)、2021年2月のお知らせ: 餃子工房併設の餃子酒場を4月に大阪市大正区にオープン、国産食材のみ使用、嬬恋高原キャベツ。食べログ (店舗会員、英語版): Nama Gyoza Seizo Tokoro Tenshin no Kimochi、大正駅から徒歩1分、毎日11:00〜24:00 (L.O. 料理23:00・ドリンク23:30)、年中無休、ランチ定食は14時まで、ご飯がなくなり次第終了、ランチの予約は11時の開店のみ、14時以降はワンドリンク制、カード・PayPay・au PAY可、44席 (カウンター12、テーブル34)、禁煙、貸切20〜50名、子ども可、キッズメニュー、英語メニュー、写真付きメニュー、テイクアウト、オープン2021年4月6日、餃子 百名店 2024、北海道産小麦 Haruyutaka 100%の皮、牡蠣と点心の宴会コース12品5,000円 (1月31日まで)。口コミ(2026年2月〜11月): 1皿2個で380〜580円、焼き餃子、水餃子、揚げ餃子、タルタルの揚げ餃子、胡麻だれの蒸し餃子、トリュフ餃子、海老餃子、にんにくなし、焼き餃子定食1,180円 (香菜のサラダ、スープ、zha caiとセロリのおかわり自由)、4種と ご飯1,720円、水餃子と焼き餃子の定食と中華風の chawanmushi、前菜の漬物 (pickled mustard greens)、台湾 mazesoba、飲み放題のコース2,000円から、店員さんが食べ方を説明、一度に出てきて冷めたという声、ワンドリンク制を後から知らされたという声、Kyocera Dome の近く。',
      confidence: 'medium', sources: [TB, SITE, R + 'B525829142/', R + 'B537175161/', R + 'B537477979/', R + 'B537626325/', R + 'B537936894/', R + 'B537947914/', R + 'B538251183/', R + 'B538396067/', R + 'B538427084/', R + 'B538447964/'] },
    cultural_comfort: { level: 'english', note: 'English menu, photo menu and a digital menu (Tabelog); staff explain each gyoza (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市大正区三軒家西1-2-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official mail-order site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市大正区三軒家西一丁目2番11号 (go) 6m. Nearest record このめん たまらん (osaka_konomen_tamaran_taisho, address_ja "大阪府大阪市大正区三軒家西1-4-20") is about 84 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537626325/', R + 'B538251183/', R + 'B537175161/'],
    price_note: 'Prices from October 2026 reviews; the banquet course from the shop-maintained Tabelog course page.', last_checked: TODAY, items: [
      it('', '', 'Pan-fried gyoza (2 pieces)', '', 'Gyoza', 'no', 'no', 'October 2026; plates ¥380–580.', 'yaki_gyoza'),
      it('', '', 'Steamed gyoza in sesame sauce', '', 'Gyoza', 'no', 'no', 'October 2026.', 'sesame_gyoza'),
      it('', '', 'Fried gyoza with tartar sauce', '', 'Gyoza', 'no', 'no', 'October 2026.', 'tartar_fried_gyoza'),
      it('', '', 'Fried gyoza lunch set (salad, soup, pickles)', '¥1,180', 'Lunch set', 'no', 'no', 'October 2026.', 'gyoza_lunch_set'),
      it('', '', 'Four kinds of gyoza with rice', '¥1,720', 'Lunch set', 'no', 'no', 'October 2026.', 'gyoza_four_kinds'),
      it('', '', 'Seasonal banquet with fresh oysters and dim sum (12 items, until 31 January)', '¥5,000', 'Course', 'no', 'no', 'Tabelog course page.', 'oyster_banquet'),
    ] }, {
    cuisine: '店内の工房で作る手作り餃子: 北海道産小麦 Haruyutaka 100%の生地を毎日練り、ひとつずつ手で包む、保存料無添加 (食べログ、公式サイト)・1皿2個で380〜580円 (2026年10月): 肉汁があふれる焼き餃子、水餃子、パリッとした揚げ餃子、タルタルの揚げ餃子、濃厚な胡麻だれの蒸し餃子、トリュフ餃子、海老餃子、2種の蒸し shumai、1個から追加できる、にんにくなし (2026年の口コミ)・14時までのランチ定食: 焼き餃子定食1,180円 (香菜のサラダ、スープ、zha cai、2026年10月)、水餃子と焼き餃子に中華風の chawanmushiの定食 (2026年11月)、4種の餃子とご飯1,720円 (2026年10月)・台湾 mazesoba、麻婆豆腐、台湾風のペーパーチキン、黒胡椒ソースの厚切り牛 katsu・1月31日までの生牡蠣と点心の宴会コース12品5,000円、飲み放題付きのコースは2,000円ほどから (2026年10月)・Tsingtao ビール、焼酎、カクテル・冷凍餃子の通販 24個・96個 (公式サイト)',
    neighborhood: '大正区三軒家西1-2-11。JR・大阪メトロ大正駅から徒歩1分、ドーム前駅・ドーム前千代崎駅 (Kyocera Dome) から徒歩6分',
    gf_detail: 'グルテンフリーではありません。どの餃子も北海道産小麦 Haruyutakaの皮 (食べログ) で、揚げ餃子、まぜそば、醤油ベースのたれも。',
    vegan_detail: 'ヴィーガンではありません。餃子の具は肉や海老で、コースには牡蠣、鶏、牛も。ヴィーガンの説明はない。',
    notes: '[餃子・大正、駅前の手作り餃子、夜12時まで] 大正駅から1分、Kyocera Dome の試合やライブの前にも便利な広々とした餃子酒場で、皮は北海道産小麦 Haruyutaka、店内の工房でひとつずつ手で包む。1皿2個 (380〜580円) で食べ比べを: 肉汁たっぷりの焼き、もちもちの水、パリッとした揚げ、タルタルの揚げ、そして2026年10月のある人のいちばんは濃厚な胡麻だれの蒸し餃子。どのたれが合うか店員さんが教えてくれ、にんにくは使わない。ランチの定食 (焼き餃子定食1,180円) には香菜のサラダ、スープ、取り放題のzha cai付きで、再訪したある人は前菜の漬物だけで心をつかまれたと。夜は台湾 mazesoba、麻婆豆腐、飲み放題のコースも。14時以降はワンドリンク制で、一度に出てきて冷めたという声も。食べログ 餃子 百名店 2024。',
  });
}

// ================================================================ 六覺燈
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27000401/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.rokukakutei.co.jp/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'osaka_rokukakutei_kuromon', name: '六覺燈 (Rokukaku tei)', category: 'OMNI',
    lat: 34.665465, lng: 135.506454, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: an omakase of battered and deep-fried kushiage, with homemade bread; the shop does not say its batter is wheat-free, and a September 2026 diner mentions rice-flour bread, not batter.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog marks "vegetarian options" and the course comes with a vegetable platter, but the 20 skewers are mostly seafood and meat, and nothing is said about the batter, oil or sauces.',
    hours_raw: 'Mon, Tue, Thu–Sun 17:00–22:00 (last order 21:30); closed Wednesday and over New Year (official site; Tabelog). Lunch ended in December 2022 (site news). Reservations online or by phone; a second seating from 20:30 lasts 90 minutes (Tabelog course page). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 60 seats including a counter; non-smoking; private hire for 20–60 (Tabelog; official site). Children welcome; children are charged only for what is eaten (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 1-21-16, 2F of たこそうビル inside the Kuromon Market arcade — 3 min from Nipponbashi Stn (Sakaisuji and Sennichimae Lines) and Kintetsu Nippombashi Stn',
    cuisine: 'Omakase kushiage with wine; there is no menu, only the course (official site) · course ¥10,800 with tax: about 20 creative skewers starting with a live-killed kuruma prawn, a vegetable platter, homemade bread, homemade dessert and coffee (official site; Tabelog) · seasonal ingredients from Kuromon Market and producers around Japan (official site) · skewers in 2026 reviews: kuruma prawn, beef fillet, scallop, edamame or pea croquette, tonburi with minced chicken, myoga with pork fillet, anago with makomo, hamo, ginkgo, duck, shiitake, salmon, kisu with mitsuba, lotus root, cheese; extra skewers to order (August–September 2026) · vegetables to dip in sauce or salt as you like, rice-flour bread and bagels with cheese cream, a choice of three desserts, pudding (2026) · each skewer comes with a suggested salt or sauce; the sauce pot is your own (August 2026) · a large wine cellar, wines chosen by a sommelier to suit each guest',
    website: SITE, gmaps: gm('六覺燈 黒門'), menu_url: SITE + 'home/menu',
    notes: "[Kushiage · Kuromon Market, an omakase of 20 skewers with wine] A kushiage house upstairs in the Kuromon Market arcade, founded in 1980 and here since 1995, that serves only an omakase: about 20 skewers (¥10,800), from a live-killed kuruma prawn through seasonal pairings like tonburi with minced chicken, myoga with pork fillet and anago with makomo, each with its suggested salt or sauce. A light, crisp batter keeps people eating, vegetables come to dip between skewers, and just when you're full the rice-flour bread arrives. Skewers keep coming until you say stop. A sommelier pairs wine, a big part of the house's identity; one regular uses it as the benchmark for kushikatsu in Osaka. Finish with the pudding. Closed Wednesday; there is a Ginza branch. The name comes from a mentor's advice to cherish the \"six senses\".",
    chef_bio: { chef_name: null, roles: ['Kitchen unnamed; the company 株式会社 六覺燈 is led by representative director 水野幾郎 (official company page)'], origin: null, background: 'Per the company page: founded in Konohana-ku, Osaka, in November 1980; moved into Kuromon Market, Nipponbashi, in June 1995; incorporated as 株式会社 六覺燈 in September 1998; a Ginza shop opened in October 2004. A wine importer, 株式会社エイマーケット (A-MARKeT, founded 2012), is listed alongside. Site news: lunch ended December 2022; a 六覺燈カフェ opened in April 2024; a new brand, 燈のひとさじ, in 2026. A September 2026 reviewer also mentions a counter in the Daimaru Shinsaibashi food hall. Per the site, the name comes from a master\'s advice on entering the kitchen to value the "six senses": sight, hearing, smell, taste, touch and the cook\'s sense; "燈" is a vow not to let the first light go out. The site says the shop chose kushikatsu after studying many cuisines, because it goes with any drink and can take on any genre. Diners describe a friendly distance with the frying master at the counter (August 2026).', philosophy: '"Stick to the obvious": cleanliness, good ingredients, effort to please and enjoying the work are all taken as given (official site).', specialty: 'Omakase kushiage of about 20 skewers; wine pairing.',
      anecdotes: [
        { text: '"The combinations of ingredients are unique, such as tonburi with minced chicken, myoga with pork tenderloin, and anago with makomo mushrooms." — August 2026.', source: R + 'B534740140/' },
        { text: '"Even when you think you\'re full, the light and crispy batter makes you want to keep going for just one more, and then another." — September 2026.', source: R + 'B535218249/' },
        { text: '"Personally, I use the quality and price range of this restaurant as a benchmark to evaluate other kushikatsu places." — September 2026.', source: R + 'B535662902/' },
      ],
      japanese_sources_summary: '公式サイト: 六覺燈 黒門本店、串揚げ専門店、黒門市場のアーケードの中、1980年創業、全国の生産者から直送される旬の食材、メニュー表はなく全ておまかせのコース、苦手な食材は申し付けを、おまかせコース 活〆車海老をはじめとする創作串20本・お野菜盛合せ・自家製パン・自家製デザート・コーヒー 10,800円 (税込)、17時〜22時、年末年始・水曜日休み、60席、全席禁煙、カード可、手作りのパンとデザート、世界の銘醸地に自ら足を運んで仕入れたワイン。六覺燈について: 「六覚を大事にしろ」という親方の言葉 (視覚・聴覚・嗅覚・味覚・触覚と料理人のセンス)、初心を忘れず燈を消さない、「あたりまえにこだわる」、串かつはどんな飲み物とも相性が良い。会社概要: 株式会社 六覺燈、代表取締役 水野幾郎、1980年11月 大阪市此花区で創業、1995年6月 黒門市場内に移転、1998年9月 法人化、2004年10月 銀座店オープン、株式会社エイマーケット (ワイン輸入販売、代表取締役 水野冨貴子)。お知らせ: 2022年12月 ランチ営業終了、2024年4月 六覺燈カフェオープン、2026年10月 新ブランド「燈のひとさじ」、冬季休暇 2025年12月31日〜2026年1月7日。食べログ (店舗会員): 日本橋1-21-16 たこそうビル 2F、日本橋駅から徒歩3分、L.O.21:30、20時30分からの90分のコース、サービス料10%、ベジタリアンメニューありの表示、子どもは食べた分だけ。口コミ(2026年8月〜10月): 車海老、牛ヒレ、帆立、edamame のコロッケ、トンブリと鶏のミンチ、茗荷と豚ヒレ、Anago と Makomo、Hamo、銀杏、鴨、Shiitake、鮭、キスと三つ葉、蓮根、チーズ、野菜は食べ放題、米粉のパンとベーグルにチーズクリーム、デザートは3種から、プリン、ストップと言うまで出てくる、串ごとに塩かソースをすすめる、ソースは一人ずつ、ワインとの組み合わせ、銀座と大丸心斎橋のフードホールにも店がある、軽い衣。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'home/about', SITE + 'home/menu', SITE + 'home/honten', SITE + 'company_overview', R + 'B534504697/', R + 'B534740140/', R + 'B535218249/', R + 'B535662902/', R + 'B536036725/', R + 'B536401453/', R + 'B536501889/', R + 'B537754811/', R + 'B537864379/', R + 'B538030977/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course, no menu; tell staff your dislikes and say stop when full (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Official menu page: tell the staff which ingredients you cannot eat.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-21-16 たこそうビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news to October 2026) and shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目21番16号 (go) 13m. Nearest record 煮干しらーめん玉五郎 黒門 (osaka_niboshi_ramen_tamagoro_kuromon, address_ja "大阪府大阪市中央区日本橋2-4-1") is about 23 m away at a different address, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'home/honten', TB],
    price_note: 'Course price from the official shop page and the Tabelog course page (tax included, read November 2026); 10% service charge extra (Tabelog).', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Omakase course: about 20 creative skewers, vegetable platter, homemade bread, dessert, coffee', '¥10,800', 'Course', 'no', 'no', 'Official site; Tabelog.', 'omakase_course'),
    ] }, {
    cuisine: 'ワインと楽しむおまかせの串揚げ、メニュー表はなくコースのみ (公式サイト)・コース10,800円 (税込): 活〆車海老をはじめとする創作串20本ほど、お野菜盛合せ、自家製パン、自家製デザート、コーヒー (公式サイト、食べログ)・黒門市場と全国の生産者から直送される旬の食材 (公式サイト)・2026年の口コミに出てくる串: 車海老、牛ヒレ、帆立、edamame やえんどう豆のコロッケ、トンブリと鶏のミンチ、茗荷と豚ヒレ、Anago と Makomo、Hamo、銀杏、鴨、Shiitake、鮭、キスと三つ葉、蓮根、チーズ。追加の串も (2026年8〜9月)・野菜は好きなだけ塩かソースで、米粉のパンとベーグルにチーズクリーム、デザートは3種から、プリン (2026年)・串ごとに塩かソースをすすめてくれ、ソースは一人ずつ (2026年8月)・ワインの在庫が豊富で、ソムリエが好みに合わせて選ぶ',
    neighborhood: '日本橋1-21-16 たこそうビル 2F、黒門市場のアーケードの中。日本橋駅 (堺筋線・千日前線)、近鉄日本橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げる串揚げのおまかせで、自家製パンも。衣に小麦を使わないという説明はなく、2026年9月の口コミに出てくる米粉はパンのこと。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあり、コースには野菜の盛り合わせが付くが、20本の串はほとんど魚介と肉で、衣、油、ソースについての説明はない。',
    notes: '[串揚げ・黒門市場、20本のおまかせ串とワイン] 黒門市場のアーケードの中の2階にある串揚げの店で、1980年創業、1995年からこの場所。出すのはおまかせだけで、串20本ほど (10,800円)。活〆車海老にはじまり、トンブリと鶏のミンチ、茗荷と豚ヒレ、Anago と Makomoといった季節の組み合わせが続き、串ごとに塩かソースをすすめてくれる。軽くパリッとした衣でつい手が伸び、串のあいだに野菜をつまみ、満腹かと思えば米粉のパンが出てくる。ストップと言うまで串は続く。ソムリエが合わせるワインもこの店の看板で、大阪の串かつを測るものさしにしているという人も。締めはプリンを。水曜休み。銀座にも店がある。店名は「六覚 (五感と料理人のセンス) を大事にしろ」という親方の言葉から。',
  });
}

save();
