// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 12.
//   + 北新地 黒猫 Kitashinchi Kuroneko (creative French counter with a cat theme, palette of starters, lunch and dinner courses)
//   + 焼き鳥すみえもん Yakitori Sumiemon (Kitashinchi yakitori of Kyoto "Bihaku" chicken at a U-shaped counter, since April 2025)
//   + TOLAH UMEDA (resort-style Italian dining bar in 堂山町 with drink-inclusive courses, since 2021)
//   + やきとり松里 Yakitori Matsuri (Hinai-chicken yakitori course in Dojima, Tabelog Yakitori WEST 100 2023–2025, since 2020)
//   - skipped 元祖 串しゃぶ専門店 まつたけ 堂山店 27110624: a branch; the operator site three-six.jp lists 北新地本店, 堂山店 and a third shop
//     just opened (北新地別邸) — same concept, growing. Under Greg's 2026-11-02 chain ruling this is a call for the coordinator; reverse if wanted.
//   Chain check: 黒猫: invoice T8140001077660 → 株式会社ｉ　ＴＯ　ｉ, 西宮市 (NTA register); two October 2026 reviews name a main shop in
//   Fukushima; not in data; two shops of one concept, kept and flagged. すみえもん: one shop (voix.jp article, 2025: 株式会社hm holder,
//   東京都港区六本木; no other shop named). TOLAH: invoice T1120001253360 → ＴＯＬＡＨ株式会社 at the shop's own address (NTA register); one shop.
//   松里: one shop; an August 2026 diner calls it a sister restaurant of Ichimatsu (a different brand, so drafted on its own).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27110624', 'chain: 元祖 串しゃぶ専門店 まつたけ, 3 shops of one concept with a new one just opened (three-six.jp); coordinator may reverse');

// ================================================================ 北新地 黒猫
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27102792/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '14:30'], ['18:00', '22:00']);
  put({
    id: 'osaka_kitashinchi_kuroneko', name: '北新地 黒猫 (Kitashinchi Kuroneko)', category: 'OMNI',
    lat: 34.697760, lng: 135.498726, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The courses include a hot pie, a zeppole that tastes like takoyaki, bread with butter and a black tantanmen as one meat choice; fish, meat and dessert are chosen from several options.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set courses of fish, meat (duck, wagyu, foie gras, pork) and dessert; the soup is a potage; no vegetarian course is mentioned.',
    hours_raw: 'Lunch 12:00–14:30 and dinner 18:00–22:00, Mon, Tue and Thu–Sun; closed Wednesdays and the first and third Tuesday of the month (reservations can be made for closed days) (Tabelog). One drink per person required; no service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 14 seats: a counter of 9 and a private L-shaped counter room for 3–5; whole-shop hire up to 20; non-smoking; wheelchair users asked to call ahead; children welcome (Tabelog). A queue had formed before the 12:00 opening (September 2026).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-9-11, basement of エスパス北新地10 — 20 m east of Kitashinchi Stn exit 11-41',
    cuisine: 'Creative French that also borrows from Italian, Japanese and Chinese cooking, with market fish and seasonal ingredients chosen by the chef (Tabelog) · courses of an amuse, a "palette" of small starters, fish, meat, dessert, bread and coffee, with surcharges for some choices: dinner standard course ¥6,900, with a dessert platter ¥8,500, with the black-cat whole cake ¥8,900 (Tabelog, tax included); a weekday lunch course ¥6,000 (September 2026); a weekend lunch course ¥5,300 (September 2026) · pumpkin potage with homemade popcorn, a zeppole like takoyaki, chawanmushi of mackerel and pumpkin in a black-cat teapot, Ishikawa Spanish mackerel in tomato-basil cream, bonito cooked rare, Hungarian duck with glazed apples and black-vinegar sauce, + foie gras steak ¥1,000, black-wagyu and foie gras "Rossini", autumn "Japanese" parfait +¥600, baked cheesecake (September–October 2026) · signature dishes: Miyazaki black-wagyu roast beef with Hokkaido salmon roe and sea urchin in a wasabi sauce (Tabelog) · wine by the glass ¥700–900 (September 2026)',
    website: null, gmaps: gm('北新地 黒猫'), menu_url: null,
    notes: "[French · Kitashinchi, a creative course with a cat theme] A basement counter in Kitashinchi full of black-cat figurines, where the chef cooks a free-style French course that also borrows from Italian, Japanese and Chinese cooking. Each course opens with a pumpkin potage you scatter with homemade popcorn, then a 'palette' of small, intricate starters, among them a zeppole that tastes like takoyaki, before you pick a fish, a meat (the Hungarian duck with glazed apples is the favourite, foie gras extra) and a dessert such as the autumn parfait. Lunch from about ¥5,300, dinner ¥6,900. Anniversaries are a speciality: message plates and a black-cat whole cake. In October 2026 two men did all the cooking and serving. Its first shop is in Fukushima.",
    chef_bio: { chef_name: null, roles: ['Chef-owner (unnamed) and one other staff member'], origin: null, background: 'Per the shop-maintained Tabelog listing: classic French with a free-spirited twist; the chef sources fresh seafood and seasonal ingredients from the market personally; dishes in French, Italian, Japanese and Chinese styles, "Free Style That Doesn\'t Conform to a \'Type\'". Two October 2026 reviews call the Fukushima shop the main branch. The Tabelog invoice number T8140001077660 is registered to 株式会社ｉ　ＴＯ　ｉ, 西宮市 (NTA invoice register, read 2026-11-02).', philosophy: '"Free Style That Doesn\'t Conform to a \'Type\'" (Tabelog).', specialty: 'Palette of starters; Hungarian duck; black-cat cake.',
      anecdotes: [
        { text: '"Throughout the restaurant, there are various cat-themed decorations, which would delight any cat lover." — September 2026, a weekend lunch course.', source: R + 'B535204186/' },
        { text: '"I was surprised to see that each course had its own chalkboard menu!" — September 2026, a solo weekday lunch.', source: R + 'B535760891/' },
        { text: '"The staff, two gentlemen, handled both cooking and serving" — October 2026, after an earlier visit to the main branch in Fukushima.', source: R + 'B538400840/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 北新地 黒猫、フレンチ・パスタ・洋食、大阪市北区曽根崎新地1-9-11 エスパス北新地10 B1F、北新地駅の出口11-41から東へ20m、月・火・木〜日12:00〜14:30、18:00〜22:00、水曜と第1・第3火曜休み (休みの日も予約できる)、ワンドリンク制、サービス料なし、カード可、電子マネー・QR 不可、14席 (カウンター9、L字カウンターの個室3〜5名)、貸切20名まで、禁煙、車いすは相談、子ども可、市場の鮮魚と旬の食材、フレンチを軸にイタリアン・和・中華も、型にはまらないフリースタイル、宮崎県の黒毛和牛のローストビーフ、ディナーのスタンダードコース6,900円、デザートプレートつき8,500円、黒猫のホールケーキつき8,900円。インボイス登録は株式会社ｉ　ＴＯ　ｉ (西宮市)。口コミ(2024年7月〜2026年10月): かぼちゃのポタージュと自家製ポップコーン、パレットオードブル、たこ焼きのようなゼッポリーネ、黒猫のティーポットの茶碗蒸し、石川県のサワラ、カツオのソテー、ハンガリー産の鴨と黒酢ソース、フォアグラのステーキ、黒毛和牛とフォアグラのロッシーニ、秋の「和」のパフェ、ベイクドチーズケーキ、平日のランチコース6,000円、週末のランチコース5,300円、グラスワイン700〜900円、黒猫の置物がいっぱい、記念日のメッセージプレート、二人で調理と接客、本店は Fukushima。',
      confidence: 'medium', sources: [TB, R + 'B489687316/', R + 'B535204186/', R + 'B535760891/', R + 'B536708801/', R + 'B537336399/', R + 'B537343282/', R + 'B537345676/', R + 'B537449117/', R + 'B537693662/', R + 'B538400840/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter course with choices for fish, meat and dessert, and a chalkboard menu per course (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区曽根崎新地1-9-11 エスパス北新地10 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目9番11号 (go) 5m. osaka_iwai_bettei_kitashinchi (address_ja "大阪府大阪市北区曽根崎新地1-9-11 1F") is at the same lot with its pin 0 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535760891/'],
    price_note: 'Dinner course prices from the Tabelog listing (tax included); lunch prices and surcharges from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dinner standard course', '¥6,900', 'Dinner', 'ask', 'no', 'Tabelog.', 'dinner_standard'),
      it('', '', 'Dinner standard course with the black-cat whole cake', '¥8,900', 'Dinner', 'ask', 'no', 'Tabelog.', 'dinner_cake'),
      it('', '', 'Lunch course (weekday)', '¥6,000', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_weekday'),
      it('', '', 'Foie gras steak added to the duck', '+¥1,000', 'Supplements', 'ask', 'no', 'September 2026.', 'foie_gras'),
    ] }, {
    cuisine: 'フレンチを軸にイタリアン・和・中華も取り入れる創作フレンチ、シェフが市場で選ぶ魚と旬の食材 (食べログ)・アミューズ、小さな前菜を並べた「パレット」、魚、肉、デザート、パン、コーヒーのコースで、選ぶものによって追加料金: ディナーのスタンダードコース6,900円、デザートプレートつき8,500円、黒猫のホールケーキつき8,900円 (食べログ、税込)。平日のランチコース6,000円 (2026年9月)、週末のランチコース5,300円 (2026年9月)・かぼちゃのポタージュと自家製ポップコーン、たこ焼きのようなゼッポリーネ、黒猫のティーポットのサバとかぼちゃの茶碗蒸し、石川県のサワラのトマトとバジルのクリームソース、レアに焼いたカツオ、ハンガリー産の鴨とりんごのグラッセと黒酢ソース、フォアグラのステーキの追加1,000円、黒毛和牛とフォアグラのロッシーニ、秋の「和」のパフェ600円追加、ベイクドチーズケーキ (2026年9月〜10月)・名物: 宮崎県の黒毛和牛のローストビーフに北海道のいくらとウニ、わさびのソース (食べログ)・グラスワイン700〜900円 (2026年9月)',
    neighborhood: '曽根崎新地1-9-11、エスパス北新地10の地下1階。北新地駅の出口11-41から東へ20m',
    gf_detail: '要確認。グルテンの情報なし。コースには熱いパイ、たこ焼きのようなゼッポリーネ、パンとバター、肉の選択肢に黒い担々麺もある。魚、肉、デザートはいくつかから選ぶ。',
    vegan_detail: 'ヴィーガンではありません。魚、肉 (鴨、和牛、フォアグラ、豚)、デザートのコースで、スープはポタージュ。ベジタリアンのコースの話はない。',
    notes: '[フレンチ・北新地、黒猫だらけの創作コース] 北新地の地下のカウンターで、店じゅうに黒猫の置物。シェフがフレンチを軸にイタリアン・和・中華も取り入れた自由なコースを出す。はじめはかぼちゃのポタージュに自家製ポップコーンをのせて、次に小さく手のこんだ前菜を並べた「パレット」、たこ焼きのようなゼッポリーネも。魚、肉 (人気はりんごのグラッセを添えたハンガリー産の鴨、フォアグラは追加)、秋のパフェなどのデザートを選ぶ。ランチは5,300円ほどから、ディナーは6,900円。記念日のメッセージプレートや黒猫のホールケーキも。2026年10月は男性二人で調理と接客をしていた。1号店は Fukushima。',
  });
}

// ================================================================ 焼き鳥すみえもん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27148344/'; const R = TB + 'dtlrvwlst/';
  const VX = 'https://voix.jp/life/?p=52626';
  const W = day(['18:00', '23:00']);
  put({
    id: 'osaka_yakitori_sumiemon_kitashinchi', name: '焼き鳥すみえもん (Yakitori Sumiemon)', category: 'OMNI',
    lat: 34.697299, lng: 135.496974, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with salt or sauce, shishito glazed with soy, chicken sashimi with a special soy sauce; the finishing dishes include chicken ramen and a tsukune rice bowl; mugwort fu is on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori course; the two vegetable skewers come within it.',
    hours_raw: 'Mon–Sat 18:00–23:00 (last order 22:30 per an October 2026 diner); closed Sundays and holidays (Tabelog). Reservations accepted, walk-ins welcome; groups of 6 or more and private hire by phone; children only if eating the adult course; smart-casual dress code (Tabelog). Fills within minutes of opening on weekdays (October 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay, Rakuten Pay, au PAY (Tabelog). 20 seats around a U-shaped counter; non-smoking; free Wi-Fi; one restroom, not separated by gender (Tabelog; October 2026). Opened 2 April 2025 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曽根崎新地1-3-3, ground floor of 好陽ビル — 130 m from Kitashinchi Stn',
    cuisine: 'Yakitori of "Kyo Bihaku Dori", a long-raised white chicken from Miyama in Kyoto, grilled over charcoal in front of a U-shaped counter (Tabelog; October 2026) · the course: ten special skewers and two vegetable skewers, or seven skewers with a salad and two finishing dishes; ¥5,280 in October 2026 reviews, ¥6,280 on the listing now (tax included) · skewers such as breast with plum, heart, gizzard, knee cartilage, tsukune, quail egg in bacon, deboned wing, crisp skin, "giza kawa", thigh with green onion, tenderloin, bonjiri, shishito, zucchini (September–October 2026) · à la carte: chicken sashimi, chicken yukhoe, free-range chicken tataki, spicy "yodare" chicken ¥770, thick fried tofu ¥550, mugwort fu, grilled cherry tomatoes; finishing dishes: "Donemon", a tsukune rice bowl, ¥900, chicken ramen ¥900, grilled rice balls with soup; homemade pudding (October 2026) · sake and shochu from around Japan, wine (Tabelog)',
    website: 'https://www.sumie-mon.com', gmaps: gm('焼き鳥すみえもん 北新地'), menu_url: null,
    notes: "[Yakitori · Kitashinchi, Kyoto chicken at a U-shaped counter] A 20-seat yakitori counter in Kitashinchi, open since April 2025, that grills only Kyoto's long-raised 'Bihaku' white chicken. Most diners take the course of ten skewers and two vegetable skewers, about ¥5,300 in October 2026 (¥6,280 on the listing now), served one at a time with salt or sauce: deboned wings, crisp 'giza kawa' skin, a tender breast and fluffy tsukune are the ones diners name. Add chicken sashimi or yukhoe before, and finish with the tsukune rice bowl 'Donemon' or a light chicken ramen and the house pudding. It fills within minutes on weekdays, so book; walk-ins are welcome. One diner in October 2026 found the flavours mild and the portions of sashimi small.",
    chef_bio: { chef_name: '角田大輔', roles: ['Head yakitori chef', 'grill staff'], origin: null, background: 'Per a 2025 opening article on voix.jp: opened 2 April 2025 by 株式会社hm holder (東京都港区六本木); yakitori chef 角田大輔, ten years of grilling yakitori, trained for more than ten years at a popular members-only yakitori restaurant; 20 counter seats; courses from ¥5,280. Per the shop-maintained Tabelog listing: yakitori chefs with over ten years of experience; "Kyo Bihaku Dori" from Kyoto.', philosophy: null, specialty: 'Kyoto Bihaku chicken skewer course.',
      anecdotes: [
        { text: '"One skewer that particularly stood out was the rare part called \'Giza Kawa.\'" — September 2026, the special skewers course.', source: R + 'B536820409/' },
        { text: '"I made a reservation for 7 PM and the restaurant accommodated my request to leave by 8:20 PM." — October 2026, a second visit.', source: R + 'B524864628/' },
        { text: '"If I had to point out one downside, it would be that there was only one restroom, and it wasn\'t separated by gender." — October 2026.', source: R + 'B537631691/' },
      ],
      japanese_sources_summary: 'voix.jp (2025年): 焼き鳥 すみえもんは2025年4月2日に北新地にオープン、運営は株式会社hm holder (東京都港区六本木)、焼き鳥職人の角田大輔さんは焼き鳥歴10年、人気の会員制の焼き鳥店で10年以上修業、大阪府北区曽根崎新地1-3-3 好陽ビル 1F、JR 北新地駅から徒歩2分、20席 (カウンターのみ)、コースは税込5,280円から、好きなペースで止められるストップ制、18:00〜23:00、日曜・祝日休み、京都府 Miyama の美白どり。食べログ (店舗会員): 焼き鳥すみえもん、月〜土18:00〜23:00、日・祝休み、予約可、6名以上と貸切は電話、子どもは大人と同じコースのみ、スマートカジュアル、カード・電子マネー・QR 可、20席 (カウンター)、禁煙、無料 Wi-Fi、特選串10本と野菜串2本、または串7本とサラダと〆2品のコース6,280円、全国の日本酒と焼酎。口コミ(2026年3月〜10月): 予約がおすすめ、平日も開店から数分で満席、ささみの梅、ハツ、砂肝、ひざなんこつ、つくね、うずらのベーコン巻き、骨を抜いた手羽、皮、giza kawa、ねぎま、ぼんじり、ししとう、ズッキーニ、鶏刺し、鶏ユッケ、地鶏のたたき、Yodare chicken 770円、厚揚げ550円、よもぎ麩、焼きミニトマト、どんぶりの「Donemon」900円、〆の鶏ラーメン900円、焼きおにぎりとスープ、プリン、コース5,280円、トイレはひとつで男女共用、味がおとなしく刺身が小さいという声。',
      confidence: 'medium', sources: [TB, VX, 'https://www.sumie-mon.com', R + 'B524864628/', R + 'B536820409/', R + 'B536830969/', R + 'B536940564/', R + 'B536954958/', R + 'B537118915/', R + 'B537141417/', R + 'B537631691/', R + 'B537760526/', R + 'B537816159/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter course with à la carte add-ons; walk-ins welcome (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-3-3 好陽ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目3番3号 (go) 7m; nearest other records osaka_sushi_sogoro_kitashinchi and osaka_le_comptoir_champagne_shokudo 25–26 m away at different addresses; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537760526/'],
    price_note: 'October 2026 reviews paid ¥5,280 for the course; the Tabelog listing now shows ¥6,280 (tax included). À la carte prices from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kyoto Bihaku chicken course: ten special skewers and two vegetable skewers', '¥5,280', 'Courses', 'ask', 'no', 'October 2026; ¥6,280 on Tabelog now.', 'skewer_course'),
      it('', '', 'Spicy "yodare" chicken', '¥770', 'À la carte', 'ask', 'no', 'October 2026.', 'yodare_dori'),
      it('', '', '"Donemon" tsukune rice bowl', '¥900', 'Finish', 'ask', 'no', 'October 2026.', 'donemon'),
      it('', '', 'Chicken ramen to finish', '¥900', 'Finish', 'no', 'no', 'October 2026.', 'tori_ramen'),
    ] }, {
    cuisine: '京都 Miyama の長く育てた白い鶏「美白どり」を、コの字カウンターの前で炭火で焼く焼き鳥 (食べログ、2026年10月)・コース: 特選串10本と野菜串2本、または串7本とサラダと〆2品。2026年10月の口コミでは5,280円、食べログでは今6,280円 (税込)・串はささみの梅、ハツ、砂肝、ひざなんこつ、つくね、うずらのベーコン巻き、骨を抜いた手羽、パリッとした皮、giza kawa、ねぎま、ささみ、ぼんじり、ししとう、ズッキーニなど (2026年9月〜10月)・一品: 鶏刺し、鶏ユッケ、地鶏のたたき、Yodare chicken 770円、厚揚げ550円、よもぎ麩、焼きミニトマト。〆: つくねのどんぶり「Donemon」900円、鶏ラーメン900円、焼きおにぎりとスープ。自家製プリン (2026年10月)・全国の日本酒と焼酎、ワイン (食べログ)',
    neighborhood: '曽根崎新地1-3-3、好陽ビルの1階。北新地駅から130m',
    gf_detail: '要確認。グルテンの情報なし。串は塩かたれ、醤油をぬったししとう、特製の醤油で食べる鶏刺し。〆に鶏ラーメンとつくねのどんぶり、よもぎ麩もある。',
    vegan_detail: 'ヴィーガンではありません。鶏の焼き鳥のコースで、野菜串2本もコースの中。',
    notes: '[焼鳥・北新地、コの字カウンターで京都の鶏] 2025年4月からの北新地の20席の焼き鳥のカウンターで、京都の長く育てた白い鶏「美白どり」だけを焼く。多くの人は特選串10本と野菜串2本のコースで、2026年10月は5,300円ほど (今の食べログでは6,280円)。塩かたれで1本ずつ出てきて、骨を抜いた手羽、パリッとしたgiza kawa、やわらかいささみ、ふわふわのつくねの名前がよく挙がる。先に鶏刺しやユッケ、〆はつくねのどんぶり「Donemon」かあっさりした鶏ラーメン、それにプリン。平日も開店から数分で満席になるので予約を。予約なしでも入れる。味がおとなしく刺身が小さいという声もある (2026年10月)。',
  });
}

// ================================================================ TOLAH UMEDA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27125282/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '23:00']); const E = day(['11:00', '23:00']);
  put({
    id: 'osaka_tolah_umeda_doyama', name: 'TOLAH UMEDA', category: 'OMNI',
    lat: 34.703384, lng: 135.502528, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The courses centre on pasta, thin pizza, focaccia and fritto, with a starter platter, grilled chicken and caprese alongside.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s feature list ticks "vegetarian options" and "particular about vegetables", and the starter platter holds vegetable dishes (frittata, marinated eggplant, pumpkin), but no vegan dish is named.',
    hours_raw: 'Mon–Fri 12:00–23:00, Sat, Sun and holidays 11:00–23:00 (last order 22:00); closing days not fixed; New Year and long holidays may differ (Tabelog). Reservations accepted; seat choice not guaranteed (terrace included); 20 or more by phone; easiest to call 14:00–17:00 on weekdays; luggage not kept (Tabelog). Dinner seat-only bookings ¥400 + tax a head for the starter (Tabelog). Drink-inclusive courses run 90 minutes to two hours (August and October 2026). Cards (VISA, Master, JCB, AMEX), IC cards, PayPay (Tabelog). 45 seats at tables, a counter and an open terrace; private rooms with sofas for 6 to over 30; parties up to 40 seated or 60 standing; non-smoking; children and strollers welcome (Tabelog). Opened 22 September 2021 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂山町7-22, 4F of ステージ中通りビル, a 2020 building on the Higashi-Nakadori shopping street near HEP — 8 min from the Umeda stations, 6 min from Nakazakicho Stn',
    cuisine: 'Resort-style Italian dining bar: colourful seasonal plates at lunch, wine and drink-inclusive courses at night (Tabelog) · lunch set of a starter platter, all-you-can-eat freshly baked focaccia and a choice of three pastas ¥1,870 (October 2026) · dinner: standard plan of five seasonal starters, pasta, creamy chicken stew and dessert ¥3,300; nine-dish course with two hours of drinks ¥4,000; premium course with ten starters and wine in the free-flow ¥5,000 (Tabelog, tax included) · ten-starter platter (pumpkin in mustard, vegetable frittata, prosciutto, salmon carpaccio, sweet-potato salad, caprese, mortadella, marinated eggplant, mimolette and potato salad), wagyu and cheese meat pasta, fries with whipped butter, grilled young chicken with lemon butter, gelato (October 2026); porcini cream pasta, tuna and anchovy pasta with autumn vegetables (September 2026); thin margherita, mushroom ajillo, a cheese platter (August–September 2026) · message plates for celebrations (Tabelog)',
    website: null, gmaps: gm('TOLAH UMEDA'), menu_url: null,
    notes: "[Italian · east of Umeda, drink-inclusive courses and a terrace] A large Italian dining bar on the fourth floor of a new building on the Higashi-Nakadori shopping street east of Umeda, dressed as a resort, with a terrace and sofa-lined private rooms that take birthday groups and company parties. At lunch about ¥1,900 buys a starter platter, a pasta and all the warm focaccia you want; at night the draw is the ¥5,000 course with two hours of drinks, wine included, that starts with ten colourful starters before a wagyu-and-cheese pasta, fries with whipped butter and grilled chicken. Diners in 2026 praise the portions and the price; several found the service slow when it was busy, and one October 2026 group had dessert ten minutes before its time was up.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: "Umeda\'s resort dining for special moments", seasonal colourful dishes at lunch and a hideaway for adults at night, drink-inclusive courses from ¥4,000; opened 22 September 2021. The Tabelog invoice number T1120001253360 is registered to ＴＯＬＡＨ株式会社 at the shop\'s own address (NTA invoice register, read 2026-11-02).', philosophy: null, specialty: 'Ten-starter platter; drink-inclusive courses.',
      anecdotes: [
        { text: '"When our bread plate was empty, the staff kindly offered us more focaccia, which we appreciated!" — October 2026, the ¥1,870 lunch set.', source: R + 'B536762974/' },
        { text: '"The appetizer platter alone is satisfying with its generous portion!" — October 2026, a birthday dinner for nine.', source: R + 'B537722206/' },
        { text: '"Although we were told we had 90 minutes, the food took a long time to arrive, and dessert was served only 10 minutes before the end." — October 2026.', source: R + 'B538051181/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): TOLAH UMEDA、イタリアン・ダイニングバー・パスタ、大阪市北区堂山町7-22 ステージ中通りビル 4F、梅田の各駅から徒歩8分、中崎町駅から6分、月〜金12:00〜23:00、土・日・祝11:00〜23:00 (L.O.22:00)、不定休、予約可、席の指定はできない、20名以上は電話、荷物は預からない、ディナーの席のみ予約はお通し400円 (税別)、カード・交通系IC・PayPay 可、45席 (テーブル、カウンター、テラス)、ソファの個室、着席40名・立食60名、禁煙、子ども・ベビーカー可、ベジタリアンメニューあり、野菜にこだわる、2021年9月22日オープン、リゾートのような空間、季節の料理、スタンダードプラン3,300円、9品と2時間飲み放題4,000円、前菜10種とワインも飲み放題のプレミアム5,000円、メッセージプレート。インボイス登録は ＴＯＬＡＨ株式会社 (店と同じ住所)。口コミ(2026年8月〜10月): 前菜の盛り合わせ、焼きたてのフォカッチャ食べ放題、3種から選ぶパスタのランチ1,870円、前菜10種 (かぼちゃのマスタードマリネ、野菜のフリッタータ、生ハム、サーモンのカルパッチョ、さつまいものサラダ、カプレーゼ、モルタデッラ、なすのマリネ、ミモレットとポテトサラダ)、和牛とチーズのミートパスタ、ホイップバターのフライドポテト、若鶏のグリルとレモンバターソース、ジェラート、ポルチーニのクリームパスタ、マグロとアンチョビのパスタ、薄いマルゲリータ、きのこのアヒージョ、チーズの盛り合わせ、個室で誕生日会、量が多く安い、混むと料理が遅いという声、デザートが終わりの10分前だったという声。',
      confidence: 'medium', sources: [TB, R + 'B533353155/', R + 'B535284521/', R + 'B535710603/', R + 'B536310434/', R + 'B536762974/', R + 'B536792968/', R + 'B537532530/', R + 'B537722206/', R + 'B537751226/', R + 'B538051181/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and drink-inclusive courses; online booking (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町7-22 ステージ中通りビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町7番22号 (go) 11m; nearest other record osaka_jizake_dining_yasu_doyama 34 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536762974/'],
    price_note: 'Course prices from the Tabelog listing (tax included); the lunch set from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: starter platter, focaccia refills and a pasta', '¥1,870', 'Lunch', 'no', 'ask', 'October 2026.', 'lunch_set'),
      it('', '', 'Standard dinner plan', '¥3,300', 'Dinner', 'no', 'no', 'Tabelog.', 'standard_plan'),
      it('', '', 'Nine-dish course with two hours of drinks', '¥4,000', 'Dinner', 'ask', 'no', 'Tabelog.', 'course_4000'),
      it('', '', 'Premium course with ten starters and two hours of drinks including wine', '¥5,000', 'Dinner', 'ask', 'no', 'Tabelog; October 2026.', 'premium_course'),
    ] }, {
    cuisine: 'リゾートのようなイタリアンのダイニングバー: 昼は季節の色あざやかな料理、夜はワインと飲み放題つきのコース (食べログ)・ランチは前菜の盛り合わせ、焼きたてのフォカッチャ食べ放題、3種から選ぶパスタで1,870円 (2026年10月)・ディナー: 季節の前菜5種、パスタ、鶏のクリーム煮、デザートのスタンダードプラン3,300円、9品と2時間飲み放題のコース4,000円、前菜10種でワインも飲み放題のプレミアムコース5,000円 (食べログ、税込)・前菜10種 (かぼちゃのマスタードマリネ、野菜のフリッタータ、生ハム、サーモンのカルパッチョ、さつまいものサラダ、カプレーゼ、モルタデッラ、なすのマリネ、ミモレットとポテトサラダ)、和牛とチーズのミートパスタ、ホイップバターのフライドポテト、若鶏のグリルとレモンバターソース、ジェラート (2026年10月)。ポルチーニのクリームパスタ、秋野菜とマグロとアンチョビのパスタ (2026年9月)。薄いマルゲリータ、きのこのアヒージョ、チーズの盛り合わせ (2026年8月〜9月)・お祝いのメッセージプレート (食べログ)',
    neighborhood: '堂山町7-22、ステージ中通りビルの4階。梅田の各駅から徒歩8分、中崎町駅から6分',
    gf_detail: '要確認。グルテンの情報なし。コースはパスタ、薄いピッツァ、フォカッチャ、フリットが中心で、前菜の盛り合わせ、若鶏のグリル、カプレーゼも。',
    vegan_detail: '要確認。食べログの特徴に「ベジタリアンメニューあり」「野菜にこだわる」とあり、前菜には野菜の料理 (フリッタータ、なすのマリネ、かぼちゃ) もあるが、ヴィーガンの料理の名前はない。',
    notes: '[イタリアン・堂山、飲み放題のコースとテラス] 梅田の東の商店街にある新しいビルの4階の大きなイタリアンのダイニングバーで、リゾートのような内装にテラスとソファの個室、誕生日会や会社の宴会によく使われる。昼は1,900円ほどで前菜の盛り合わせとパスタ、焼きたてのフォカッチャは食べ放題。夜の人気は5,000円の2時間飲み放題 (ワインも) のコースで、色あざやかな前菜10種から、和牛とチーズのパスタ、ホイップバターのフライドポテト、若鶏のグリルと続く。2026年の口コミでは量と値段をほめる声が多いが、混むとサービスが遅いという声もあり、時間の10分前にデザートが出たグループも (2026年10月)。',
  });
}

// ================================================================ やきとり松里
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27119656/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '22:30']); const F = day(['15:30', '22:30']);
  put({
    id: 'osaka_yakitori_matsuri_dojima', name: 'やきとり松里 (Yakitori Matsuri)', category: 'OMNI',
    lat: 34.697303, lng: 135.494952, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers are seasoned with chicken fat, snow salt and a sweet soy sauce; the course also has a chicken shumai, and ramen is an extra.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Hinai-chicken yakitori course; grilled eggplant, grapes, persimmon and the refillable daikon come within it.',
    hours_raw: 'Seatings of two hours: 15:30–17:30 (Fri and Sat only), 18:00–20:00 and 20:30–22:30; closing days not fixed, mainly Sundays (Tabelog). Reservations; the full fee for a same-day cancellation; 30 minutes late counts as a cancellation; children only at the 15:30 seating and only if eating the adult course; smart-casual dress code (Tabelog). No service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 12 seats: a counter of 8 facing the grill and a private room for 4; non-smoking (Tabelog; October 2026). Opened 6 November 2020 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島2-2-33, ground floor (east) of RESビル堂島ビル, the door left of the building\'s main entrance — 5 min from Kitashinchi Stn exit C69, 5 min south of Nishi-Umeda Stn',
    cuisine: 'Yakitori course of Hinai chicken from Akita, one of Japan\'s three great native breeds, also used in the soup and side dishes (Tabelog) · dinner course of 16 dishes ¥13,200; with four glasses of sake or wine ¥17,800 (Tabelog, tax included) · breast with plum, refillable "refreshing daikon" in olive oil, sweet soy and lemon, negima, a large quail egg, aged chicken prosciutto in nori, gizzard, thigh confit, wings, neck, Shizuoka peanuts, chicken shumai, heart, tsukune, bonjiri, chochin, white liver with white balsamic, grilled eggplant, grilled grapes or persimmon, chawanmushi, and a seasonal rice to finish, corn or matsutake (July–October 2026) · extras after the course: white liver, seseri, shoyu ramen (July–October 2026) · sake, shochu and wine (Tabelog)',
    website: null, gmaps: gm('やきとり松里 堂島'), menu_url: null,
    notes: "[Yakitori · Dojima, a Hinai-chicken course] A refined, dim 12-seat yakitori counter in Dojima, on Tabelog's Yakitori WEST 100 list in 2023, 2024 and 2025, whose chef trained at Ichimatsu in Kitashinchi, the shop credited with the yakitori course. Every skewer is Hinai chicken from Akita, seasoned with chicken fat, snow salt or a sweet soy sauce and timed to each diner's pace, and the 16-dish course weaves in grilled grapes, aged chicken prosciutto, a chicken shumai and a seasonal rice. The olive-oil daikon between skewers is refillable; one diner heard of a guest who ate 33 plates (September 2026). Course ¥13,200, or ¥17,800 with four drinks; two-hour seatings, the first at 15:30 on Fridays and Saturdays. English menu and English-speaking staff.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (named in a July 2026 review as Wada)', 'grill staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: the chef comes from "Ichimatsu", the birthplace of yakitori courses; Hinai chicken from Akita in yakitori, soups and side dishes; opened 6 November 2020; Tabelog Yakitori WEST 100 in 2023, 2024 and 2025. A July 2026 diner names the owner as Wada, trained under Takeda at Ichimatsu in Kitashinchi, and writes that the shop is where Ichimatsu used to be; an August 2026 diner was sent by Ichimatsu as its sister restaurant; a July 2026 regular wrote that a new 大将 has taken over from the previous one.', philosophy: null, specialty: 'Hinai-chicken yakitori course.',
      anecdotes: [
        { text: '"You can have unlimited slices of Japanese radish!" — July 2026, the Hinai chicken course.', source: R + 'B531456059/' },
        { text: '"I heard that one customer even had 33 plates!" — September 2026, of the refreshing daikon.', source: R + 'B535811864/' },
        { text: '"Located in Osaka, it attracts numerous food enthusiasts from both Japan and around the world" — October 2026, the course with four drinks.', source: R + 'B537319966/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): やきとり松里、焼き鳥・鶏料理、大阪市北区堂島2-2-33 RESビル堂島ビル 1F 東、北新地駅のC69出口から徒歩5分、1部15:30〜17:30 (金・土のみ)、2部18:00〜20:00、3部20:30〜22:30、各2時間、不定休 (おもに日曜)、当日キャンセルは100%、30分の遅れはキャンセル扱い、子どもは15:30の部で大人と同じコースのみ、スマートカジュアル、サービス料なし、カード可、電子マネー・QR 不可、12席 (カウンター8、4名の個室)、禁煙、英語と中国語のメニュー、英語・中国語・韓国語のスタッフ、2020年11月6日オープン、食べログ 焼き鳥 WEST 百名店 2023・2024・2025、秋田の比内地鶏を焼き鳥とスープと一品に、シェフは焼き鳥のコースの元祖「Ichimatsu」の出身、16品のディナーコース13,200円、日本酒かワイン4杯つき17,800円。口コミ(2026年7月〜10月): 前大将の時代からの常連が新大将になってから2度目、比内地鶏を見せてから一つずつ焼く、大将が客それぞれのペースに合わせて出す (日本語の口コミ)、店主は Wada さん、Kitashinchi の Ichimatsu で Takeda さんに修業、Ichimatsu の姉妹店として紹介された、焼きにムラがあったという声、ささみの梅、おかわりできる大根 (Refreshing Daikon)、ねぎま、うずらの卵、熟成の鶏の生ハムの海苔巻き、砂肝、ももコンフィ、手羽、せせり、ピーナッツ、鶏焼売、ハツ、つくね、ぼんじり、ちょうちん、白レバーと白いバルサミコ、焼きなす、焼きぶどう、柿、茶碗蒸し、とうもろこしや松茸のごはん、追加の白レバーと醤油ラーメン、国内と海外から食通が集まるという声。',
      confidence: 'medium', sources: [TB, R + 'B531286131/', R + 'B531456059/', R + 'B532738719/', R + 'B533096776/', R + 'B533799755/', R + 'B534660057/', R + 'B535811864/', R + 'B537302760/', R + 'B537319966/', R + 'B537644820/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists a menu in English and Simplified Chinese and staff who speak English, Chinese and Korean; an October 2026 diner says it draws food lovers from Japan and around the world.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島2-2-33 RESビル堂島ビル 1F 東',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島二丁目2番33号 (go) 11m; nearest other record osaka_sushi_tiger_osaka_kitashinchi 60 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537319966/'],
    price_note: 'Course prices from the Tabelog listing (tax included); an October 2026 review matches ¥17,800.', last_checked: TODAY, items: [
      it('', '', 'Dinner course of 16 dishes, Hinai-chicken yakitori and seasonal dishes', '¥13,200', 'Courses', 'ask', 'no', 'Tabelog.', 'course_16'),
      it('', '', 'Dinner course with four glasses of sake or wine', '¥17,800', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'course_pairing'),
      it('', '', 'Refreshing daikon (refillable, within the course)', '', 'Courses', 'ask', 'ask', 'July and September 2026.', 'sappari_daikon'),
      it('', '', 'Shoyu ramen (extra after the course)', '', 'Extras', 'no', 'no', 'July 2026.', 'shoyu_ramen'),
    ] }, {
    cuisine: '日本三大地鶏のひとつ、秋田の比内地鶏の焼き鳥のコースで、スープや一品にも使う (食べログ)・16品のディナーコース13,200円、日本酒かワイン4杯つき17,800円 (食べログ、税込)・ささみの梅、オリーブオイルと甘い醤油とレモンでおかわりできる大根 (Refreshing Daikon)、ねぎま、大きなうずらの卵、熟成した鶏の生ハムの海苔巻き、砂肝、ももコンフィ、手羽、せせり、静岡のピーナッツ、鶏焼売、ハツ、つくね、ぼんじり、ちょうちん、白いバルサミコの白レバー、焼きなす、焼きぶどうや柿、茶碗蒸し、〆は季節のごはん (とうもろこしや松茸) (2026年7月〜10月)・コースのあとの追加: 白レバー、せせり、醤油ラーメン (2026年7月〜10月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '堂島2-2-33、RESビル堂島ビルの1階の東、ビルの正面入口の左のドア。北新地駅のC69出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。串の味つけは鶏の脂、雪塩、甘い醤油。コースには鶏焼売もあり、ラーメンは追加。',
    vegan_detail: 'ヴィーガンではありません。比内地鶏の焼き鳥のコースで、焼きなす、ぶどう、柿、おかわりできる大根もコースの中。',
    notes: '[焼鳥・堂島、比内地鶏のコース] 堂島の落ち着いた暗めの12席の焼き鳥のカウンターで、食べログ 焼き鳥 WEST 百名店に2023・2024・2025年に選ばれた。シェフは焼き鳥のコースの元祖とされる北新地の Ichimatsu の出身。串はすべて秋田の比内地鶏で、鶏の脂、雪塩、甘い醤油で味をつけ、客それぞれのペースに合わせて出す。16品のコースには焼きぶどう、熟成した鶏の生ハム、鶏焼売、季節のごはんも。串の合間のオリーブオイルの大根はおかわりでき、33皿食べた客もいたとか (2026年9月)。コースは13,200円、ドリンク4杯つきで17,800円。2時間制で、金・土は15:30の部も。英語のメニューと英語を話すスタッフあり。',
  });
}

save();
