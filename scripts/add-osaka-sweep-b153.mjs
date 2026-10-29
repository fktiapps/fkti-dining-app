// Osaka sweep (2-mile circle around Dotonbori), batch 153 — mom / small-shop phase (all OMNI).
//   + italy_zoo (12-seat Italian with animal decor: vegetable-rich lunch sets, dinner courses; Minami-Senba; same building as Goyakura, 14 m apart)
//   + ディッシュカリー＆レリッシュ (7-seat spice-curry plates, weekly menu; Minami-Senba)
//   + 和sai (Japanese fish lunches and seasonal courses in a renovated house; Ikutamacho)
//   + 新町カリー (dashi-based spice curry with achar sides, run by two people; Shinmachi) — mom
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 153);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ italy_zoo
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27132376/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:30'], ['18:00', '22:30']);
  put({
    id: 'osaka_italy_zoo_minamisenba', name: 'italy_zoo', category: 'OMNI',
    lat: 34.677811, lng: 135.50889, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: homemade pasta; focaccia; sable topping on the soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bacon soup, homemade ham and sausage, pork and wagyu mains; the vegetable appetizers vary — ask.',
    hours_raw: 'Mon, Tue, Wed, Sat, Sun 11:30–14:30 (last order 13:30) and 18:00–22:30 (last order 21:00); Fri 18:00–22:30; closed Thu; irregular closings — see the calendar on Instagram or Google (Tabelog). Dinner cover ¥400 per person (Tabelog). One drink per person with the lunch course (October 2026). Cards and PayPay accepted (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 4: day(['18:00', '22:30']), 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 1-7-8, Dia Palace Junkeimachi 1F, at the back — 6 min from Nagahoribashi Stn',
    cuisine: 'Italian · lunch: A Set (weekdays) ¥1,300 — a salad plate of about seven vegetable appetizers with a mini soup, then pasta; B Set ¥1,800 — soup, appetizers, pasta; lunch course ¥3,200 adds a main (e.g. Chami pork), dessert and a drink · pastas such as spaghettini with homemade sausage and mushroom tomato sauce, shrimp and zucchini linguine, ricotta Amatriciana · dinner course of about 11 dishes, e.g. chicken consommé, salami and homemade ham, a chawanmushi-style sformato of kuruma shrimp, hairy crab and clam, a salad with whey sauce, peach capellini, surf clam risotto, straw-grilled wagyu rump; desserts extra · 12 seats',
    website: null, gmaps: gm('italy_zoo'), menu_url: null,
    notes: "[Italian · a small Italian with animals hidden in the décor, Minami-Senba] A gentle, café-like twelve-seat Italian at the back of a building near Nagahoribashi, with antique furniture, dried flowers and little animals hidden everywhere, even on the door handles. Lunch is excellent value: the ¥1,300 weekday set brings a plate of seven carefully made vegetable appetizers and a mini soup before a well-judged pasta, and the ¥3,200 course adds a main such as braised Chami pork. Dinner is a course of about eleven small, elaborate dishes, explained one by one, from homemade ham to straw-grilled wagyu; desserts cost extra and portions are small. Closed Thursdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Italian restaurant (Tabelog; 2024–2026 reviews).', philosophy: null, specialty: 'Homemade pasta; vegetable appetizers.',
      anecdotes: [
        { text: '"As the name suggests, various animals are hidden throughout the restaurant. Even the door handles feature animal designs." — December 2025, 11-dish course.', source: R + 'B519777432/' },
        { text: '"The vegetable appetizers were served in small portions, with seven varieties!" — July 2026, weekday A Set ¥1,300.', source: R + 'B534494331/' },
      ],
      japanese_sources_summary: '食べログ: italy_zoo、大阪市中央区南船場1-7-8 ダイアパレス順慶町 1F、長堀橋駅から徒歩6分、月・火・水・土・日 11:30〜14:30 (L.O. 13:30)・18:00〜22:30 (L.O. 21:00)、金 18:00〜22:30、木曜休み、不定休あり (Instagram か Google のカレンダー)、夜はお付き出し・コペルト代400円、カード・PayPay 可、12席。口コミ(2024年12月〜2026年10月): 1階の奥のカフェのような空間、アンティークの家具とドライフラワー、店じゅうに隠れた動物、昼は平日の A セット1,300円 (7種ほどの野菜の前菜とミニスープのサラダプレート、パスタ)、B セット1,800円、ランチコース3,200円 (メイン、デザート、ドリンクつき、ワンドリンク制)、自家製ソーセージときのこのトマトソースのスパゲッティーニ、海老とズッキーニのリングイネ、自家製リコッタのアマトリチャーナ、Chami の豚、夜は11品ほどのコース (鶏のコンソメスープ、サラミと自家製ハムの盛り合わせ、車海老、毛蟹、蛤の茶碗蒸し風スフォルマート、ホエイのソースのサラダ、桃のカッペリーニ、北寄貝のリゾット、和牛のランプの藁焼き)、デザートは別料金、量は少なめという声、ていねいな説明。',
      confidence: 'medium', sources: [TB, R + 'B497632376/', R + 'B519777432/', R + 'B533937022/', R + 'B534494331/', R + 'B537188114/', R + 'B538218586/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Each dish explained (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-7-8 ダイアパレス順慶町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区南船場一丁目7番8号 (go) 24m — Tabelog point kept (shop at the back of the building); same building as Goyakura, 14 m apart, no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534494331/', R + 'B537188114/'],
    price_note: 'Prices from July and October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'A Set (weekdays): vegetable salad plate and pasta', '¥1,300', 'Lunch', 'no', 'no', 'July 2026.', 'a_set'),
      it('', '', 'B Set: soup, appetizers, pasta', '¥1,800', 'Lunch', 'no', 'no', 'July 2026.', 'b_set'),
      it('', '', 'Lunch course with main, dessert and drink', '¥3,200', 'Lunch', 'no', 'no', 'October 2026.', 'course'),
      it('', '', 'Dinner course (about 11 dishes)', '', 'Dinner', 'no', 'no', 'December 2025–October 2026; desserts extra.', 'dinner'),
    ] }, {
    cuisine: 'イタリアン・昼: 平日の A セット1,300円 (7種ほどの野菜の前菜とミニスープのサラダプレート、パスタ)、B セット1,800円 (スープ、前菜、パスタ)、ランチコース3,200円はメイン (たとえば Chami の豚)、デザート、ドリンクつき・パスタは自家製ソーセージときのこのトマトソースのスパゲッティーニ、海老とズッキーニのリングイネ、リコッタのアマトリチャーナなど・夜は11品ほどのコース、たとえば鶏のコンソメスープ、サラミと自家製ハムの盛り合わせ、車海老、毛蟹、蛤の茶碗蒸し風スフォルマート、ホエイのソースのサラダ、桃のカッペリーニ、北寄貝のリゾット、和牛のランプの藁焼き。デザートは別料金・12席',
    neighborhood: '中央区南船場1-7-8 ダイアパレス順慶町 1F の奥。長堀橋駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。自家製パスタ、フォカッチャ、スープにのせたサブレ。',
    vegan_detail: 'ヴィーガンではありません。ベーコンのスープ、自家製のハムやソーセージ、豚や和牛のメイン。野菜の前菜は変わるので確認を。',
    notes: '[イタリアン・南船場、小さな動物が隠れたイタリアン] 長堀橋近く、ビルの奥にあるやさしいカフェのような12席のイタリアンで、アンティークの家具とドライフラワー、ドアの取っ手まで小さな動物があちこちに隠れている。昼はとてもお得: 平日の1,300円のセットは、ていねいな7種の野菜の前菜とミニスープのあとに、よく考えられたパスタ。3,200円のコースなら Chami の豚の煮込みなどメインもつく。夜は11品ほどの手のこんだ小皿のコースで、自家製ハムから和牛の藁焼きまで一皿ずつ説明してくれる。デザートは別料金、量は少なめ。木曜休み。',
  });
}

// ================================================================ ディッシュカリー＆レリッシュ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27106655/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '16:00'], ['16:30', '21:00']);
  put({
    id: 'osaka_dish_curry_relish_minamisenba', name: 'ディッシュカリー＆レリッシュ (Dish curry & relish)', category: 'OMNI',
    lat: 34.677784, lng: 135.509407, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whether the curries use flour or soy is not stated, and the menu changes weekly — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: keema, chicken and squid curries; fried egg; a potato curry may be meat-free — ask.',
    hours_raw: 'Tue–Sat 11:30–16:00 and 16:30–21:00, until sold out; closed Sun–Mon; closed for events and temporarily at times (Tabelog). Weekly-changing menu on Instagram (July 2026). Cash only (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 1-6-16 — between Nagahoribashi and Sakaisuji-Honmachi',
    cuisine: 'Spice curry plates · three-curry assorted plate ¥1,500 with a fried egg and three pickles, e.g. dry keema (with a sansho/Sichuan-pepper tingle), squid tentacle and basil, potato · dry keema curry on turmeric rice with a fried egg · burnt garlic chicken · menu changes weekly · 7 seats, mostly counter',
    website: null, gmaps: gm('ディッシュカリー＆レリッシュ'), menu_url: null,
    notes: "[Curry · weekly spice-curry plates, Minami-Senba] A seven-seat curry counter near Nagahoribashi run by one person, open straight through from lunch into the evening, which makes it a good late lunch. Order the three-curry assorted plate (¥1,500): the curries change weekly, but two diners singled out the dry keema with its numbing, Sichuan-pepper tingle, alongside choices like squid tentacle with basil or a potato curry, all with a fried egg and three crisp pickles to mix in. Spices are well balanced rather than fiery. Check Instagram for the week's menu. Cash only. Closed Sundays and Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Spice curry counter run by one person (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Three-curry plate; dry keema.',
      anecdotes: [
        { text: '"…the keema curry… had a numbing sensation like Sichuan pepper and paired perfectly with the fried egg." — April 2026, assorted platter of three, ¥1,500.', source: R + 'B526605322/' },
        { text: '"The menu seems to change weekly, so I recommend checking… Instagram before you go!" — July 2026.', source: R + 'B532287936/' },
      ],
      japanese_sources_summary: '食べログ: ディッシュカリー＆レリッシュ、大阪市中央区南船場1-6-16、火〜土 11:30〜16:00・16:30〜21:00 (売り切れ次第終了)、日・月休み、イベントや臨時休業あり、カード・電子マネー・QR不可、7席。口コミ(2026年1〜7月): ひとりで営むカウンター、昼から夕方まで通しで開いている、3種のカレーの盛り合わせ1,500円 (目玉焼きと漬物3種)、ドライキーマ (花椒のような痺れ)、イカゲソとバジル、じゃがいものカレー、ターメリックライスのドライキーマカレー、焦がしにんにくのチキン、メニューは週替わり (Instagram)、スパイスはバランスがよい。',
      confidence: 'medium', sources: [TB, R + 'B521326683/', R + 'B526175944/', R + 'B526605322/', R + 'B527056103/', R + 'B527225539/', R + 'B532287936/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; menu changes weekly (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-6-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目6番16号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526605322/', R + 'B527225539/'],
    price_note: 'Price from April–May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Three-curry assorted plate with fried egg', '¥1,500', 'Curry', 'ask', 'no', 'April–July 2026.', 'three'),
      it('', '', 'Dry keema curry on turmeric rice', '', 'Curry', 'ask', 'no', 'April 2026.', 'keema'),
      it('', '', 'Burnt garlic chicken curry', '', 'Curry', 'ask', 'no', 'April 2026.', 'garlic'),
    ] }, {
    cuisine: 'スパイスカレーのプレート・3種のカレーの盛り合わせ1,500円、目玉焼きと漬物3種つき、たとえばドライキーマ (花椒のような痺れ)、イカゲソとバジル、じゃがいも・ターメリックライスに目玉焼きのドライキーマカレー・焦がしにんにくのチキン・メニューは週替わり・ほぼカウンターの7席',
    neighborhood: '中央区南船場1-6-16。長堀橋と堺筋本町のあいだ',
    gf_detail: 'グルテンフリーではありません。カレーに小麦粉や醤油を使うかは書かれておらず、メニューも週替わりなので確認を。',
    vegan_detail: 'ヴィーガンではありません。キーマ、チキン、イカのカレー、目玉焼き。じゃがいものカレーは肉なしかもしれないので確認を。',
    notes: '[カレー・南船場、週替わりのスパイスカレーのプレート] 長堀橋近く、ひとりで営む7席のカレーカウンターで、昼から夜まで通しで開いているので遅めの昼にも。頼むなら3種の盛り合わせ (1,500円): カレーは週替わりだが、花椒のような痺れのあるドライキーマが印象に残るという声も、イカゲソとバジルやじゃがいものカレーなどと、目玉焼きと歯ごたえのいい漬物3種を混ぜながら。スパイスは辛さよりバランス。その週のメニューは Instagram で。現金のみ。日・月曜休み。',
  });
}

// ================================================================ 和sai
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27125938/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_wai_sai_ikutamacho', name: '和sai (Wai Sai)', category: 'OMNI',
    lat: 34.664147, lng: 135.513462, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based simmered fish and dashi; tempura; nyumen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-centred set meals and courses with dashi.',
    hours_raw: 'Mon, Thu–Sun 11:30–15:00 (last order 14:00) and 17:00–23:00 (last order 22:00); closed Tue–Wed (Tabelog). Dishes take time; relax and wait (September 2026). Cards and PayPay accepted (Tabelog).',
    hours: { 0: LD, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ikutamacho 5-26, a renovated house on a quiet street — 5 min from Tanimachi 9-chome Stn exit 3',
    cuisine: 'Japanese seafood · lunch fish set ¥1,650: grilled or simmered fish of the day (e.g. houbou), side dishes and pickles, refillable rice · dinner course ¥5,500: appetizers (e.g. whale), sashimi of several tunas and sea bream, dobin-mushi with sudachi, a whole grilled or simmered fish (e.g. threadfin bream), tempura (eel, mushrooms), clay-pot rice (e.g. with sweetfish), nyumen, red miso soup · a sashimi and sukiyaki course · 20 seats: 8 at the counter',
    website: null, gmaps: gm('和sai'), menu_url: null,
    notes: "[Japanese · seafood lunches and courses in a renovated house, Ikutamacho] A beautifully renovated house on a quiet street near Tanimachi 9-chome, with a counter and tables. Lunch is a choice of grilled or simmered fish, the species a surprise, with side dishes and refillable rice for ¥1,650; the simmered fish is generous and gently seasoned. At night, the ¥5,500 course runs from appetizers and fine sashimi through a dobin-mushi brightened with sudachi and a whole simmered fish to tempura and clay-pot rice, closing with nyumen. Everything is made with care, so it takes time; settle in. Closed Tuesdays and Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Japanese seafood restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Fish set meals; seasonal course.',
      anecdotes: [
        { text: '"I had the option to choose between grilled fish or simmered fish, so I ordered the simmered fish set meal… The simmered fish was Houbou, and it was tender and flavorful with a light taste." — October 2026, lunch ¥1,650.', source: R + 'B536831434/' },
        { text: '"The clay pot was filled with fragrant broth… and then added a squeeze of sudachi for a refreshing burst of flavor…" — October 2026, ¥5,500 course.', source: R + 'B538115519/' },
      ],
      japanese_sources_summary: '食べログ: 和sai、大阪市天王寺区生玉町5-26、谷町九丁目駅3番出口から徒歩5分、月・木〜日 11:30〜15:00 (L.O. 14:00)・17:00〜23:00 (L.O. 22:00)、火・水休み、カード・PayPay 可、20席 (カウンター8、テーブル12)。口コミ(2026年9〜10月): 静かな通りの改装した一軒家、昼は焼き魚か煮魚の定食1,650円 (魚はその日のおまかせ、たとえば houbou、小鉢と漬物、ご飯おかわり自由)、夜は5,500円のコース (鯨などの前菜、数種のマグロと鯛の刺身、sudachi の dobin-mushi、魚の姿焼きか姿煮 (threadfin bream)、うなぎやきのこの天ぷら、鮎の土鍋ご飯、nyumen、赤だし)、刺身と sukiyaki のコース、ていねいに作るので時間がかかる。',
      confidence: 'medium', sources: [TB, R + 'B535625792/', R + 'B536283969/', R + 'B536831434/', R + 'B537872463/', R + 'B538080232/', R + 'B538115519/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose grilled or simmered fish (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市天王寺区生玉町5-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市天王寺区生玉町5番26号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536831434/', R + 'B538115519/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Grilled or simmered fish set (lunch)', '¥1,650', 'Lunch', 'no', 'no', 'October 2026.', 'fish_set'),
      it('', '', 'Seasonal course', '¥5,500', 'Courses', 'no', 'no', 'October 2026.', 'course'),
      it('', '', 'Sashimi and sukiyaki course', '', 'Courses', 'no', 'no', 'September 2026.', 'sukiyaki'),
    ] }, {
    cuisine: '魚の和食・昼は焼き魚か煮魚の定食1,650円 (その日の魚、たとえば houbou、小鉢と漬物、ご飯おかわり自由)・夜は5,500円のコース: 前菜 (鯨など)、数種のマグロと鯛の刺身、sudachi の dobin-mushi、魚の姿焼きか姿煮 (たとえば threadfin bream)、天ぷら (うなぎ、きのこ)、土鍋ご飯 (たとえば鮎)、nyumen、赤だし・刺身と sukiyaki のコースも・20席: カウンター8席',
    neighborhood: '天王寺区生玉町5-26、静かな通りの改装した一軒家。谷町九丁目駅3番出口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。醤油の煮魚とだし、天ぷら、nyumen。',
    vegan_detail: 'ヴィーガンではありません。だしを使う魚中心の定食とコース。',
    notes: '[和食・生玉町、改装した一軒家の魚の昼とコース] 谷町九丁目近くの静かな通りにある、美しく改装した一軒家で、カウンターとテーブル。昼は焼き魚か煮魚を選び、魚はその日のおまかせ、小鉢とおかわり自由のご飯つきで1,650円。煮魚はたっぷりでやさしい味。夜の5,500円のコースは、前菜と上質な刺身から、sudachi を搾る dobin-mushi、魚の姿煮、天ぷら、土鍋ご飯まで、締めは nyumen。ていねいに作るので時間がかかる、ゆっくり構えて。火・水曜休み。',
  });
}

// ================================================================ 新町カリー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27151467/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '16:00']);
  put({
    id: 'osaka_shinmachi_curry', name: '新町カリー (Shimmachi Curry)', category: 'OMNI',
    lat: 34.677316, lng: 135.491716, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: one base is made with Shodoshima soy sauce; dashi bases; whether other sauces use flour is unknown — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken broth or katsuobushi dashi bases; meat and fish keema.',
    hours_raw: 'Mon–Sat 11:00–16:00; closed Sun; irregular closings (Tabelog). Shrimp curry Thu–Sat only (March 2026). Cash only (Tabelog; September 2026). Opened around August 2025; first anniversary in 2026 (reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shinmachi 2-11-12 1F, under a green awning near the Life supermarket — 4 min from Nishi-Ohashi Stn',
    cuisine: 'Dashi-based spice curry · pick a base — chicken broth with Shodoshima soy sauce, or katsuobushi dashi with soy milk — and a keema — chicken and pork, or fish (cod) — with sides such as gizzard achar and salmon achar: ¥1,450–1,500 · add-ons ¥200: squid and clam broth Thai curry, homemade egg masala; cilantro · specials: shrimp curry (Thu–Sat), San Gen pork and squid, spicy chicken plate · truffle crackers with homemade cream cheese; potato salad · 10 seats',
    website: null, gmaps: gm('新町カリー'), menu_url: null,
    notes: "[Curry · dashi-based spice curry, Shinmachi] A small curry counter under a green awning in Shinmachi, run by two people whose bright, attentive service, remembering returning faces, is half the appeal. The curry is light and soupy, built on dashi rather than heat: choose a chicken-broth base with Shodoshima soy sauce or a katsuobushi dashi with soy milk, then chicken-and-pork or fish keema, and mix in the sides, such as a crunchy gizzard achar. Add the ¥200 squid and clam Thai curry if it's on. Shrimp curry Thursdays to Saturdays. Open through 4 pm, handy for a late lunch. Cash only. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened around August 2025 (September 2025 review).', background: 'Spice curry shop run by two people (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Dashi-based keema curry.',
      anecdotes: [
        { text: '"The umami of the Japanese-style dashi is irresistible, and I couldn\'t help but keep eating." — October 2026, Rich Beef and Pork Keema (Japanese-style dashi) with cilantro.', source: R + 'B514291475/' },
        { text: '"Among them, the gizzard achar stands out with its satisfying crunch and is absolutely exquisite." — September 2026, fish keema + sides ¥1,450.', source: R + 'B534950905/' },
      ],
      japanese_sources_summary: '食べログ: 新町カリー、大阪市西区新町2-11-12 1F、西大橋駅から282m、月〜土 11:00〜16:00、日曜休み、不定休、カード・電子マネー・QR不可、10席 (カウンター約7、4名テーブル1)。口コミ(2025年9月〜2026年10月): 2025年8月ごろ開店、2026年に1周年、緑のテントの小さな店、ふたりで営み客の顔を覚えている、だしのスパイスカレー、ベースは鶏出汁と小豆島醤油か、かつお節の和だしと豆乳、キーマは鶏と豚か魚 (たら)、副菜 (砂肝のアチャール、サーモンのアチャール)、（鶏出汁&小豆島醬油）魚ｷｰﾏ+副菜（1,450円）、スルメイカ&あさり出汁のタイｶﾚｰ（200円）、自家製エッグマサラ（200円）、パクチー、海老のカレーは木〜土、San Gen の豚とイカの限定、スパイシーチキンのプレート、トリュフのクラッカーと自家製クリームチーズ、ポテトサラダ、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B514291475/', R + 'B534598957/', R + 'B534950905/', R + 'B534993305/', R + 'B535371005/', R + 'B536734163/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the options and remember returning diners (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町2-11-12 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町二丁目11番12号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534950905/', R + 'B534598957/'],
    price_note: 'Prices from August–September 2026 reviews.', last_checked: TODAY, items: [
      it('（鶏出汁&小豆島醬油）魚ｷｰﾏ+副菜', '', 'Fish keema with sides (chicken broth & Shodoshima soy sauce base)', '¥1,450', 'Curry', 'no', 'no', 'September 2026.', 'fish_keema'),
      it('スルメイカ&あさり出汁のタイｶﾚｰ', '', 'Squid and clam broth Thai curry (add-on)', '+¥200', 'Add-ons', 'ask', 'no', 'September 2026.', 'thai'),
      it('自家製エッグマサラ', '', 'Homemade egg masala (add-on)', '+¥200', 'Add-ons', 'ask', 'no', 'September 2026.', 'egg'),
      it('', '', 'Curry combo', '¥1,500', 'Curry', 'no', 'no', 'August 2026.', 'combo'),
    ] }, {
    cuisine: 'だしのスパイスカレー・ベースは鶏出汁と小豆島醤油か、かつお節の和だしと豆乳、キーマは鶏と豚か魚 (たら)、砂肝やサーモンのアチャールなどの副菜つきで1,450〜1,500円・追加200円: スルメイカ&あさり出汁のタイカレー、自家製エッグマサラ、パクチーも・限定: 海老のカレー (木〜土)、San Gen の豚とイカ、スパイシーチキンのプレート・トリュフのクラッカーと自家製クリームチーズ、ポテトサラダ・10席',
    neighborhood: '西区新町2-11-12 1F、Life のスーパーの近くの緑のテント。西大橋駅から徒歩4分',
    gf_detail: 'グルテンフリーではありません。ベースのひとつに小豆島の醤油、だしのベース。ほかのソースに小麦粉を使うかは不明なので確認を。',
    vegan_detail: 'ヴィーガンではありません。鶏出汁かかつお節のだしのベース、肉と魚のキーマ。',
    notes: '[カレー・新町、だしのスパイスカレー] 新町の緑のテントの小さなカレー店で、ふたりで営み、明るくていねいな接客と、また来た客の顔を覚えていてくれるのも魅力。カレーは辛さよりだしが主役の軽いさらりとしたタイプ: 鶏出汁と小豆島醤油か、かつお節の和だしと豆乳のベースを選び、鶏と豚か魚のキーマ、砂肝のアチャールなどの副菜を混ぜて。あれば200円のスルメイカとあさりのタイカレーも。海老のカレーは木〜土曜。16時まで開いていて遅めの昼にも。現金のみ。日曜休み。',
  });
}

save();
