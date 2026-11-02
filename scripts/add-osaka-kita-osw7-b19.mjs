// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), notable queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 19.
//   + トラットリア チェーロ Trattoria Cielo (89-seat trattoria south of Shin-Osaka; ¥1,300 lunch sets; Tabelog Italian WEST 100, 2021/2023/2025)
//   + あたり屋 Atari Ya (2:8 soba and small plates in Higashimikuni; Tabelog Soba WEST 100, 2025)
//   + めっせ熊 新大阪店 Messe Kuma (negi-oko and okonomiyaki in Shin-Osaka Station's Aji no Koji; Okonomiyaki 100, 2018–2019)
//   + cocorono bakery (ココロノ ベーカリー) (small, busy bakery by Nishinakajima-Minamigata, since 2014)
//   Lane check: every id above is even. The first four even ids of `next notable 80 shin-osaka` not already in data; no skips.
//   Chain check:
//   - Messe Kuma (integrator asked for this check): web search (2026-11-02) finds the Shin-Osaka shop and a Tokyo shop in
//     Marunouchi (Pacific Century Place B1, Retty and gurunavi); an October 2026 review says "branches in the Kanto region" but names
//     none. Two known same-concept shops = small group, kept; flagged in the report.
//   - Cielo, Atari Ya and cocorono bakery name no other shop.
//   None of the four is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   No ramen blocks. open_late per Greg's 2026-11-02 ruling (true when the shop closes after 22:00).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ トラットリア チェーロ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27010362/'; const R = TB + 'dtlrvwlst/'; const W = 'http://cielo.in/';
  const D = day(['11:30', '14:00'], ['17:30', '21:30']);
  put({
    id: 'osaka_trattoria_cielo_nishinakajima', name: 'トラットリア チェーロ (Trattoria Cielo)', category: 'OMNI',
    lat: 34.728974, lng: 135.495873, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: the lunch mains are pasta, gratin and risotto, served with bread. Ask about risotto.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: appetiser platters with frittata and panna cotta; seafood and meat mains.',
    hours_raw: 'Wed–Sun 11:30–14:00 and 17:30–21:30; closed Monday and Tuesday (Tabelog). Lunch: no reservations, queue at the door, often a line before opening but quick turnover (Tabelog; October 2026). Dinner: reservations; same-day group cancellations charged 100% (Tabelog). Takeout booked from 11:00 and 17:00 (Tabelog). Cards and e-money accepted; ¥300 a head charge at dinner (Tabelog). 89 seats with terrace and private rooms for 20–30; non-smoking (smoking on the terrace) (Tabelog). Children at lunch only, elementary-school age and up; no sandals, running shirts, tank tops or shorts (Tabelog).',
    hours: { 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島6-3-13 — 7 min from JR Shin-Osaka Stn, 8 min from Nishinakajima-Minamigata (Tabelog), south of Shin-Osaka Station (October 2026)',
    cuisine: 'Southern Italian trattoria (September 2026); Tabelog Italian WEST 100, 2021, 2023 and 2025 (Tabelog) · lunch ¥1,300: choose an appetiser (e.g. a platter of about nine small dishes with frittata, corn panna cotta and the day\'s soup, or a salad) and one of six mains (pasta of the day, gratin, risotto), with bread, a three-piece dessert plate and a drink; large +¥200 (September–October 2026) · pastas: okra and tuna with anchovy butter (September 2026); tuna and cauliflower in anchovy oil (October 2026); gratin of spicy tomato, minced meat and broccoli (October 2026) · dinner: crostini with smoked egg yolk and black truffle, marinated clams with herb sauce, rigatoni with autumn eggplant and gorgonzola, spaghetti with sanma and fresh tomato (October 2026) · house wine by the decanter (September 2026); glass of white ¥550 (October 2026)',
    website: W, gmaps: gm('トラットリア チェーロ 西中島'), menu_url: null,
    notes: "[Italian · Nishinakajima, the ¥1,300 lunch everyone queues for] A big, white, stylish trattoria a few minutes south of Shin-Osaka Station, in the Tabelog Italian 100 three times, best known for its lunch: ¥1,300 buys a platter of about nine small appetisers, a choice of pasta, gratin or risotto, bread, three little desserts and a drink (2026). Expect a line before noon that moves fast (October 2026). At dinner the cooking turns finer: smoked-yolk and truffle crostini, rigatoni with eggplant and gorgonzola, sanma spaghetti, with house wine by the decanter (2026). No lunch bookings; book dinner. Closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog beyond house rules; Tabelog Italian WEST 100 in 2021, 2023 and 2025. Reviewers: a popular trattoria with a lunch line for over a decade (October 2026); excellent service (October 2026).', philosophy: null, specialty: '¥1,300 lunch set; gratin.',
      anecdotes: [
        { text: '"With appetizers, a main dish, dessert, and a drink all for JPY 1,300, I think it\'s an incredible deal." — September 2026, pasta of the day.', source: R + 'B536349832/' },
        { text: '"First up was the appetizer… a delightful assortment of 9 items including homemade frittata and corn panna cotta, which was very satisfying." — October 2026, lunch with a JPY 550 glass of white wine.', source: R + 'B538210136/' },
        { text: '"The rich flavor of Gorgonzola clung beautifully to the chewy rigatoni, enhancing the umami of the autumn eggplant." — October 2026, dinner.', source: R + 'B537245500/' },
      ],
      japanese_sources_summary: '食べログ: トラットリア チェーロ、イタリアン・牛料理・パスタ、イタリアン WEST 百名店 2021・2023・2025、大阪市淀川区西中島6-3-13、JR 新大阪駅から徒歩7分、西中島南方駅から徒歩8分、水〜日11:30〜14:00、17:30〜21:30、月・火休み、ランチは予約不可、ディナーは予約可 (団体の当日キャンセルは100%)、テイクアウトあり、カード・電子マネー可、夜はチャージ300円、89席、テラス、20〜30人の個室、禁煙 (テラスは喫煙可)、子どもはランチのみで小学生以上、サンダル、ランニングシャツ、タンクトップ、短パンは不可。口コミ (2026年9〜10月): 南イタリアのトラットリア、ランチは1,300円で前菜 (約9品の盛り合わせと本日のスープなど) とメイン6種 (パスタ、グラタン、リゾット)、パン、デザート3種、ドリンク、大盛り200円、開店前から行列だが回転は早い、オクラとツナのアンチョビバター、ツナとカリフラワーのアンチョビオイル、辛いトマトとひき肉とブロッコリーのグラタン、夜は燻製の卵黄と黒トリュフのクロスティーニ、ハマグリのマリネ、秋なすとゴルゴンゾーラのリガトーニ、さんまとフレッシュトマトのスパゲッティ、デキャンタのハウスワイン、白ワイン550円。',
      confidence: 'medium', sources: [TB, W, R + 'B535522878/', R + 'B536349832/', R + 'B536541439/', R + 'B537245500/', R + 'B537270433/', R + 'B537443291/', R + 'B537849563/', R + 'B538016097/', R + 'B538210136/', R + 'B538431852/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue for lunch and choose from the set menu; book dinner. Dress code: no sandals, tank tops or shorts. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島6-3-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島六丁目3番13号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536349832/', R + 'B537270433/', R + 'B538210136/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: appetisers, pasta of the day, bread, dessert plate, drink', '¥1,300', 'Lunch', 'no', 'no', 'September–October 2026; large +¥200.', 'lunch_pasta'),
      it('', '', 'Lunch set with gratin', '¥1,300', 'Lunch', 'no', 'no', 'September–October 2026.', 'lunch_gratin'),
      it('', '', 'Lunch set with risotto', '¥1,300', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_risotto'),
      it('', '', 'Glass of white wine', '¥550', 'Drinks', 'ask', 'ask', 'October 2026.', 'white_wine'),
    ] }, {
    cuisine: '南イタリアのトラットリア (2026年9月)。食べログ イタリアン WEST 百名店 2021・2023・2025 (食べログ)・ランチ1,300円: 前菜 (自家製フリッタータ、とうもろこしのパンナコッタ、本日のスープなど約9品の盛り合わせ、またはサラダ) とメイン6種 (本日のパスタ、グラタン、リゾット) から選び、パン、デザート3種、ドリンクつき。大盛り200円 (2026年9〜10月)・パスタ: オクラとツナのアンチョビバター (2026年9月)。ツナとカリフラワーのアンチョビオイル (2026年10月)。辛いトマトとひき肉とブロッコリーのグラタン (2026年10月)・夜: 燻製の卵黄と黒トリュフのクロスティーニ、ハーブのソースの貝のマリネ、秋なすとゴルゴンゾーラのリガトーニ、さんまとフレッシュトマトのスパゲッティ (2026年10月)・デキャンタのハウスワイン (2026年9月)。白ワイン550円 (2026年10月)',
    neighborhood: '西中島6-3-13。JR 新大阪駅から徒歩7分、西中島南方駅から徒歩8分 (食べログ)。新大阪駅の南 (2026年10月)',
    gf_detail: 'メニューとしてはグルテンフリーではありません。ランチのメインはパスタ、グラタン、リゾットで、パンつき。リゾットは要確認。',
    vegan_detail: 'ヴィーガンではありません。前菜にはフリッタータやパンナコッタ、メインは魚介と肉。',
    notes: '[イタリアン・西中島、みんなが並ぶ1,300円のランチ] 新大阪駅の南、歩いて数分の白くておしゃれな大きなトラットリアで、食べログのイタリアン百名店に3回。いちばん有名なのはランチで、1,300円で約9品の前菜の盛り合わせ、パスタかグラタンかリゾット、パン、小さなデザート3種、ドリンク (2026年)。昼前から行列だが早く進む (2026年10月)。夜は料理がもっと繊細に: 燻製の卵黄とトリュフのクロスティーニ、なすとゴルゴンゾーラのリガトーニ、さんまのスパゲッティに、デキャンタのハウスワイン (2026年)。ランチは予約不可、夜は予約を。月曜と火曜休み。',
  });
}

// ================================================================ あたり屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27005158/'; const R = TB + 'dtlrvwlst/'; const W = 'http://www.atariyasoba.com/';
  const D = day(['11:30', '14:30'], ['18:00', '22:00']);
  put({
    id: 'osaka_atariya_soba_higashimikuni', name: 'あたり屋 (Atari Ya)', category: 'OMNI',
    lat: 34.742587, lng: 135.49532, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the soba is 2:8, with wheat (October 2026); tempura and fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dipping sauce is made with kombu and katsuobushi (October 2026).',
    hours_raw: 'Mon and Wed–Sun 11:30–14:30 (last order 14:00) and 18:00–22:00 (last order 21:30); closed Tuesday (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR accepted (Tabelog). 21 seats, counter and tables; non-smoking; children welcome (Tabelog). No parking: the partner car park scheme has ended (Tabelog). Full at weekend lunch (2026). Renovated and reopened 22 November 2013 (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '東三国5-11-22 — about 350 m from Higashi-Mikuni Stn, in a residential street (Tabelog; September 2026)',
    cuisine: 'Soba and small plates; Tabelog Soba WEST 100, 2025 (Tabelog) · thin, smooth 2:8 soba with a hint of sweetness; dipping sauce of natural kombu and three-year-aged katsuobushi; condiments and sauce served in tin vessels; soba-yu to finish (2026) · zaru soba ¥1,000 (October 2026); tempura zaru soba ¥2,500, tempura of ayu, shrimp, zucchini, pumpkin, sweet potato, shishito and burdock (September–October 2026); hamo tsuke soba ¥2,500 (September 2026); duck-breast zaru soba (September 2026); kamo nanban soba with meatballs (October 2026) · small plates: hamachi sashimi, fresh yuba, spare ribs, small sea bream tempura, kara-age (August 2026); dashimaki tamago, simmered sardines (October 2026) · sake (August 2026)',
    website: W, gmaps: gm('あたり屋 そば 東三国'), menu_url: null,
    notes: "[Soba · Higashimikuni, Soba 100 soba with good small plates] A calm, stylish soba house in the back streets of Higashimikuni, in the Tabelog Soba 100 for 2025, full at weekend lunch (2026). The soba is thin and smooth, 2:8 with a light sweetness, the dip made with kombu and three-year-aged katsuobushi, served with soba-yu at the end (October 2026). Zaru soba is ¥1,000; the tempura zaru, with a hot, crisp spread from ayu to burdock, is ¥2,500 (2026). At night it works as a soba izakaya: fresh yuba, spare ribs, dashimaki and simmered sardines with sake, then kamo nanban (2026). Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; renovated and reopened 22 November 2013; Tabelog Soba WEST 100, 2025 (Tabelog). Reviewers: a calm room with a counter and tables and a large staff (October 2026); care over ingredients, including the green onions and wasabi (October 2026).', philosophy: null, specialty: 'Tempura zaru soba; seasonal tsuke soba.',
      anecdotes: [
        { text: '"The broth seems to be made from natural kombu kelp from Minami Chayabe and three-year-aged katsuobushi." — October 2026, zaru soba for JPY 1,000.', source: R + 'B537965381/' },
        { text: '"The assortment of freshly fried, hot, and crispy tempura included a variety of ingredients like sweetfish, shrimp, zucchini, pumpkin, sweet potato, shishito peppers, and burdock." — September 2026, tempura zaru soba.', source: R + 'B535159132/' },
        { text: '"The variety of side dishes is impressive, ranging from spare ribs to fresh yuba, making it hard to choose what to order." — August 2026.', source: R + 'B534529817/' },
      ],
      japanese_sources_summary: '食べログ: あたり屋、そば、そば WEST 百名店 2025、大阪市淀川区東三国5-11-22、東三国駅から347m、月・水〜日11:30〜14:30 (L.O. 14:00)、18:00〜22:00 (L.O. 21:30)、火曜休み、予約可、カード・電子マネー・QR 可、21席、禁煙、子ども可、駐車場なし (提携の駐車券は終了)、2013年11月22日にリニューアルオープン、サイト atariyasoba.com。口コミ (2026年8〜10月): 住宅街の落ち着いた店、二八の細いそばでほのかな甘み、つゆは天然昆布と3年熟成の鰹節、薬味とつゆは錫の器、そば湯、ざるそば1,000円、天ざる2,500円 (鮎、エビ、ズッキーニ、かぼちゃ、さつまいも、ししとう、ごぼう)、鱧のつけそば2,500円、鴨むね肉のざる、肉団子の入った鴨南蛮、一品はハマチの刺身、生湯葉、スペアリブ、小さな鯛の天ぷら、から揚げ、だし巻き、いわしの煮付け、日本酒、週末の昼は満席。',
      confidence: 'medium', sources: [TB, W, R + 'B534399621/', R + 'B534529817/', R + 'B534631542/', R + 'B535159132/', R + 'B536110053/', R + 'B536270378/', R + 'B536761401/', R + 'B536957349/', R + 'B537965381/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order soba and small plates at the table; condiments cost extra beyond the first. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国5-11-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国五丁目11番22号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537965381/', R + 'B536761401/', R + 'B536110053/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Zaru soba', '¥1,000', 'Soba', 'no', 'no', 'October 2026.', 'zaru'),
      it('', '', 'Tempura zaru soba', '¥2,500', 'Soba', 'no', 'no', 'October 2026.', 'tenzaru'),
      it('', '', 'Hamo tsuke soba', '¥2,500', 'Soba', 'no', 'no', 'September 2026; seasonal.', 'hamo_tsuke'),
      it('', '', 'Dashimaki tamago', '', 'Small plates', 'ask', 'no', 'October 2026.', 'dashimaki'),
    ] }, {
    cuisine: 'そばと一品。食べログ そば WEST 百名店 2025 (食べログ)・細くてなめらかな二八そば、ほのかな甘み。つゆは天然昆布と3年熟成の鰹節。薬味とつゆは錫の器で、しめにそば湯 (2026年)・ざるそば1,000円 (2026年10月)。天ざる2,500円、天ぷらは鮎、エビ、ズッキーニ、かぼちゃ、さつまいも、ししとう、ごぼう (2026年9〜10月)。鱧のつけそば2,500円 (2026年9月)。鴨むね肉のざるそば (2026年9月)。肉団子の入った鴨南蛮 (2026年10月)・一品: ハマチの刺身、生湯葉、スペアリブ、小さな鯛の天ぷら、から揚げ (2026年8月)。だし巻き、いわしの煮付け (2026年10月)・日本酒 (2026年8月)',
    neighborhood: '東三国5-11-22。東三国駅から約350m、住宅街の中 (食べログ。2026年9月)',
    gf_detail: 'グルテンフリーではありません。そばは小麦の入った二八 (2026年10月)。天ぷらや揚げ物も。',
    vegan_detail: 'ヴィーガンではありません。つゆは昆布と鰹節 (2026年10月)。',
    notes: '[そば・東三国、そば百名店のそばとおいしい一品] 東三国の住宅街にある、落ち着いたおしゃれなそば屋で、食べログのそば百名店 2025。週末の昼は満席 (2026年)。そばは細くてなめらかな二八で、ほのかな甘み。つゆは昆布と3年熟成の鰹節で、最後にそば湯 (2026年10月)。ざるそばは1,000円、鮎からごぼうまで揚げたての天ぷらがのる天ざるは2,500円 (2026年)。夜はそば居酒屋として、生湯葉、スペアリブ、だし巻き、いわしの煮付けに日本酒、しめに鴨南蛮 (2026年)。火曜休み。',
  });
}

// ================================================================ めっせ熊 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27017718/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'osaka_messe_kuma_shin_osaka', name: 'めっせ熊 新大阪店 (Messe Kuma Shin-Osaka Ten)', category: 'OMNI',
    lat: 34.733162, lng: 135.499775, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-batter okonomiyaki and negiyaki, yakisoba, sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef tendon, egg, pork and squid; bonito flakes on top.',
    hours_raw: 'Daily 11:00–23:00 (food last order 22:10, drinks 22:30); closed only at New Year (Tabelog). No reservations (Tabelog). Long lines at lunch and weekends; easier after 21:00 or around 17:00 (2026). Weekday lunch sets 11:00–16:00 (October 2026). Cards, e-money and PayPay accepted (Tabelog). 90 seats, 6 at the counter; tables have their own teppan but dishes are cooked in the kitchen (Tabelog; October 2026). Non-smoking; children welcome; takeout; smart-casual dress requested (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島5-16-1, JR Shin-Osaka Station 1F, in the 味の小路 dining arcade outside the ticket gates — 1 min from the central exit (Tabelog)',
    cuisine: 'Osaka okonomiyaki, negiyaki and yakisoba; Tabelog Okonomiyaki 100, 2018 and 2019 (Tabelog) · signature "negi-oko": a mound of finely chopped green onion over the batter, topped with sweet-spicy beef tendon and konnyaku, sauce or soy sauce (May and October 2026); mochi as an extra topping (October 2026) · weekday lunch: "Set Kuma" of okonomiyaki, negiyaki, yakisoba and a fried egg ¥1,280 (October 2026; ¥1,400 with rice and miso soup in another October 2026 review); negiyaki set with yakisoba and fried egg ¥1,050 (October 2026) · teppan dishes: grilled squid, beef tendon, skewers, horumon (2026) · mayonnaise, sauce and aonori on the table; one sauce now, where there used to be several (October 2026)',
    website: null, gmaps: gm('めっせ熊 新大阪店'), menu_url: null,
    notes: "[Okonomiyaki · Shin-Osaka Station, negi-oko before the Shinkansen] A busy 90-seat okonomiyaki hall in Shin-Osaka Station's Aji no Koji arcade, outside the ticket gates, open 11:00 to 23:00 every day. Order the negi-oko, a heap of chopped green onion with sweet-spicy beef tendon and konnyaku, sweet and crunchy once cooked (May 2026). On weekdays the \"Set Kuma\" plate puts okonomiyaki, negiyaki, yakisoba and a fried egg together for about ¥1,300; lunch is cooked ahead, so it comes almost at once (October 2026). Lines are long at lunch and weekends; try around 17:00 or after 21:00 (2026). In the Tabelog Okonomiyaki 100 in 2018 and 2019.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; Tabelog Okonomiyaki 100 in 2018 and 2019 (Tabelog). A Tokyo shop in Marunouchi shares the name (Retty and gurunavi, web search 2026-11-02); an October 2026 review mentions branches in the Kanto region. Reviewers: unchanged after ten years (October 2026); staff grill at the counter (October 2026).', philosophy: null, specialty: 'Negi-oko; Set Kuma.',
      anecdotes: [
        { text: '"The batter is completely hidden under a generous layer of finely chopped green onions." — May 2026, negi-oko.', source: R + 'B484119146/' },
        { text: '"They start preparing the food even before you place your order, so once you sit down and order, it arrives almost immediately." — October 2026, weekday lunch set.', source: R + 'B537842465/' },
        { text: '"After 9 PM, restaurants at Shin-Osaka Station start announcing last orders, but Pronto, Messe Kuma, and Kumako still have plenty of time before closing." — May 2026.', source: R + 'B484119146/' },
      ],
      japanese_sources_summary: '食べログ: めっせ熊 新大阪店、お好み焼き・焼きそば、お好み焼き百名店 2018・2019、大阪市淀川区西中島5-16-1 JR東海新大阪駅 1F 味の小路の中、新大阪駅中央口から徒歩約1分、改札の外、毎日11:00〜23:00 (L.O. 料理22:10、ドリンク22:30)、年末年始のみ休み、予約不可、カード・電子マネー・PayPay 可、90席 (カウンター6)、禁煙、子ども可、テイクアウト、スマートカジュアルでと店。口コミ (2024年4月〜2026年10月): 昼と週末は行列、17時ごろや21時すぎは入りやすい、名物「negi-oko」は細かいねぎをたっぷり、甘辛い牛すじとこんにゃく、ソースか醤油、トッピングにもち、平日ランチ (11〜16時) の「Set Kuma」はお好み焼き、ねぎ焼き、焼きそば、目玉焼きで1,280円 (ごはんとみそ汁つきで1,400円という口コミも)、ねぎ焼きセット1,050円、いか焼き、牛すじ、串、ホルモン、卓上にマヨネーズ、ソース、青のり、ソースは今は1種類、関東にも店がある、テーブルに鉄板があるが料理は厨房で焼く。',
      confidence: 'medium', sources: [TB, R + 'B121297407/', R + 'B466748112/', R + 'B484119146/', R + 'B537497100/', R + 'B537715297/', R + 'B537780327/', R + 'B537842465/', R + 'B538014007/', R + 'B538263536/', R + 'B538385740/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station dining arcade used to Shinkansen travellers and tourists; queue at the door. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR東海新大阪駅 1F 味の小路内',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 82m — GSI places the whole Shin-Osaka Station block; Tabelog's point is inside the station, about 11 m from osaka_moja_curry_shin_osaka in the same 味の小路 arcade; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B466748112/', R + 'B537780327/', R + 'B537497100/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Set Kuma (okonomiyaki, negiyaki, yakisoba, fried egg), weekday lunch', '¥1,280', 'Lunch', 'no', 'no', 'October 2026; ¥1,400 with rice and miso soup per another October 2026 review.', 'set_kuma'),
      it('', '', 'Negiyaki set (negiyaki, yakisoba, fried egg), weekday lunch', '¥1,050', 'Lunch', 'no', 'no', 'October 2026.', 'negiyaki_set'),
      it('', '', 'Negi-oko (green onion, beef tendon, konnyaku)', '', 'Okonomiyaki', 'no', 'no', 'May and October 2026.', 'negi_oko'),
      it('', '', 'Grilled squid', '', 'Teppan', 'ask', 'no', 'October 2026.', 'ika_yaki'),
    ] }, {
    cuisine: '大阪のお好み焼き、ねぎ焼き、焼きそば。食べログ お好み焼き百名店 2018・2019 (食べログ)・名物「negi-oko」: 生地の上に細かいねぎを山盛りにして、甘辛い牛すじとこんにゃくをのせ、ソースか醤油で (2026年5月と10月)。トッピングにもち (2026年10月)・平日ランチ: お好み焼き、ねぎ焼き、焼きそば、目玉焼きの「Set Kuma」1,280円 (2026年10月。ごはんとみそ汁つきで1,400円という別の口コミも)。焼きそばと目玉焼きのねぎ焼きセット1,050円 (2026年10月)・鉄板: いか焼き、牛すじ、串、ホルモン (2026年)・卓上にマヨネーズ、ソース、青のり。ソースは前は何種類もあったが今は1種類 (2026年10月)',
    neighborhood: '西中島5-16-1、JR 新大阪駅1階、改札の外の「味の小路」の中。中央口から徒歩1分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。小麦の生地のお好み焼きとねぎ焼き、焼きそば、ソース。',
    vegan_detail: 'ヴィーガンではありません。牛すじ、卵、豚、いか。上にかつお節。',
    notes: '[お好み焼き・新大阪駅、新幹線の前にnegi-oko] 新大阪駅の改札の外、「味の小路」にある90席のにぎやかなお好み焼きの店で、毎日11時から23時。頼むならnegi-oko: 細かいねぎの山に甘辛い牛すじとこんにゃく、焼くと甘くてシャキシャキ (2026年5月)。平日はお好み焼き、ねぎ焼き、焼きそば、目玉焼きをひと皿にした「Set Kuma」が約1,300円。ランチは先に焼いておくので、すぐ出てくる (2026年10月)。昼と週末は行列が長いので、17時ごろか21時すぎに (2026年)。食べログのお好み焼き百名店 2018・2019。',
  });
}

// ================================================================ cocorono bakery
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27082704/'; const R = TB + 'dtlrvwlst/'; const W = 'http://cocoronobakery.com/';
  const E = day(['07:30', '17:00']);
  put({
    id: 'osaka_cocorono_bakery_nishinakajima', name: 'ココロノ ベーカリー (cocorono bakery)', category: 'OMNI',
    lat: 34.726307, lng: 135.497931, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Hard breads such as baguette and olive rustic may be plain, but no source lists ingredients; most items have butter, cream, egg, cheese or meat.',
    hours_raw: 'Wed 11:00–17:00; Thu–Sat 7:30–17:00; Sun 7:30–14:00; closed Monday and Tuesday; hours may change (Tabelog). Takeout only; cash only (Tabelog). Busy at midday, with up to 20 people queuing at the till (October 2026); some breads sell out by late afternoon (October 2026). Non-smoking; children welcome (Tabelog). Opened 4 December 2014 (Tabelog).',
    hours: { 2: day(['11:00', '17:00']), 3: E, 4: E, 5: E, 6: day(['07:30', '14:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: '西中島4-2-3, 西中島ビル 101 — 3 min from Exit 1 of Nishinakajima-Minamigata Stn (Tabelog)',
    cuisine: 'Small neighbourhood bakery with soft and hard breads at low prices (2026) · savoury: oil sardine and mushroom tomato pizza ¥270, green-onion miso bacon ¥260, spicy sausage and cheese ¥280, chunky bacon fromage ¥260, smoked cheese and bacon ¥250 (September 2026); croque monsieur, sausage and egg-salad pie (October 2026); baked curry bread, smoked-egg green curry bread (August 2026); stuffed pepper bread, mentaiko and shiso bread (October 2026) · sweet: "adult cream bun" of bitter chocolate custard and rum-soaked griotte cherries ¥200, special cream bun ¥230, melon bread ¥200 (October 2026); almond croissant with berry jam; brown-sugar cream-cheese mélange (October 2026) · hard breads: baguette, olive rustic, rye peanut anpan, mountain loaf (October 2026)',
    website: W, gmaps: gm('cocorono bakery 西中島'), menu_url: null,
    notes: "[Bakery · Nishinakajima, a busy little bakery with ¥200 breads] A small bakery a few minutes from Nishinakajima-Minamigata Station, open since 2014, where the line at the till can reach 20 people at midday (October 2026). Prices are low, most breads ¥200–280, from savoury green-onion miso bacon and oil-sardine pizza to the much-loved \"adult cream bun\" of bitter chocolate custard and rum cherries (2026). The hard breads, olive rustic and baguette, win praise too (October 2026). Go early: curry bread and favourites sell out by late afternoon (October 2026). Takeout only; cash only; closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Bakery staff (unnamed)'], origin: null, background: 'No shop description on Tabelog; opened 4 December 2014; website and blog (Tabelog). Reviewers: several staff, with fresh bread brought out continuously (September–October 2026).', philosophy: null, specialty: 'Adult cream bun; savoury breads.',
      anecdotes: [
        { text: '"Despite the small space, there were about 20 people waiting in line at the register..." — October 2026.', source: R + 'B502976240/' },
        { text: '"This brioche bun is filled with slightly bitter chocolate custard cream and griotte cherries infused with rum." — October 2026, adult cream bun for JPY 200.', source: R + 'B537320080/' },
        { text: '"Overall, the portions are small and the prices are very reasonable." — October 2026.', source: R + 'B536674506/' },
      ],
      japanese_sources_summary: '食べログ: cocorono bakery (ココロノ ベーカリー)、パン、大阪市淀川区西中島4-2-3 西中島ビル 101、西中島南方駅1番出口から徒歩3分、水11:00〜17:00、木〜土7:30〜17:00、日曜7:30〜14:00、月・火休み、現金のみ、禁煙、子ども可、テイクアウト、2014年12月4日オープン、サイトとブログ。口コミ (2025年7月〜2026年10月): 小さな店で昼はレジに20人ほど並ぶことも、安い、オイルサーディンときのこのトマトピザ270円、ねぎ味噌ベーコン260円、辛いソーセージとチーズ280円、ごろごろベーコンのフロマージュ260円、スモークチーズとベーコン250円、クロックムッシュ、ソーセージとたまごサラダのパイ、焼きカレーパン、燻製卵のグリーンカレーパン、ピーマンの肉詰めのパン、明太子と大葉のパン、「大人のクリームパン」(ほろ苦いチョコのカスタードとラム漬けのグリオットチェリー) 200円、特製クリームパン230円、メロンパン200円、アーモンドクロワッサン、黒糖クリームチーズのメランジ、バゲット、オリーブのリュスティック、ライ麦のピーナッツあんぱん、山型の食パン、夕方には売り切れも。',
      confidence: 'medium', sources: [TB, W, R + 'B502976240/', R + 'B511237976/', R + 'B535046210/', R + 'B535848522/', R + 'B536595498/', R + 'B536674506/', R + 'B537081203/', R + 'B537119934/', R + 'B537320080/', R + 'B537445405/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick breads with tongs and a tray, then queue to pay; cash only. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-2-3 西中島ビル 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目2番3号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537320080/', R + 'B535046210/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Adult cream bun (chocolate custard, rum cherries)', '¥200', 'Sweet breads', 'no', 'no', 'October 2026.', 'otona_cream'),
      it('', '', 'Special cream bun', '¥230', 'Sweet breads', 'no', 'no', 'October 2026.', 'tokusei_cream'),
      it('', '', 'Melon bread', '¥200', 'Sweet breads', 'no', 'no', 'October 2026.', 'melon_pan'),
      it('', '', 'Green-onion miso bacon bread', '¥260', 'Savoury breads', 'no', 'no', 'September 2026.', 'negi_miso_bacon'),
    ] }, {
    cuisine: 'やわらかいパンもハードなパンも安い、町の小さなパン屋 (2026年)・おかず系: オイルサーディンときのこのトマトピザ270円、ねぎ味噌ベーコン260円、辛いソーセージとチーズ280円、ごろごろベーコンのフロマージュ260円、スモークチーズとベーコン250円 (2026年9月)。クロックムッシュ、ソーセージとたまごサラダのパイ (2026年10月)。焼きカレーパン、燻製卵のグリーンカレーパン (2026年8月)。ピーマンの肉詰めのパン、明太子と大葉のパン (2026年10月)・甘い系: ほろ苦いチョコのカスタードとラム漬けのグリオットチェリーの「大人のクリームパン」200円、特製クリームパン230円、メロンパン200円 (2026年10月)。ベリージャムのアーモンドクロワッサン。黒糖クリームチーズのメランジ (2026年10月)・ハード系: バゲット、オリーブのリュスティック、ライ麦のピーナッツあんぱん、山型の食パン (2026年10月)',
    neighborhood: '西中島4-2-3、西中島ビル 101。西中島南方駅1番出口から徒歩3分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。小麦のパン屋。',
    vegan_detail: '要確認。バゲットやオリーブのリュスティックなどのハードなパンはシンプルかもしれないが、材料の情報はない。ほとんどはバター、クリーム、卵、チーズ、肉入り。',
    notes: '[パン・西中島、200円台のパンのにぎやかな小さなパン屋] 西中島南方駅から数分の、2014年からの小さなパン屋で、昼はレジに20人ほど並ぶことも (2026年10月)。値段は安く、ほとんど200〜280円。ねぎ味噌ベーコンやオイルサーディンのピザから、ほろ苦いチョコのカスタードとラムのチェリーの人気の「大人のクリームパン」まで (2026年)。オリーブのリュスティックやバゲットなどのハードなパンも評判 (2026年10月)。カレーパンなどの人気のパンは夕方には売り切れるので早めに (2026年10月)。持ち帰りのみ。現金のみ。月曜と火曜休み。',
  });
}

save();
