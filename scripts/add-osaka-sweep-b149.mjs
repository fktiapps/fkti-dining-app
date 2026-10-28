// Osaka sweep (2-mile circle around Dotonbori), batch 149 — mom / small-shop phase (all OMNI).
//   + カポ・クラッセ (second-floor Italian run single-handed: ¥1,200 pasta lunch with appetizers; Minami-Senba) — mom
//   + きのこの里 (mushroom courses at night, soup curry at weekday lunch; Minami-Senba)
//   + カレーや デッカオ (Sri Lankan-style curry plates with daily curries and sides; Minami-Senba)
//   + AMBER (bright Italian bistro: pasta lunch, courses with uni cream pasta and wagyu; Kitahorie)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 149);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ カポ・クラッセ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27003833/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'osaka_capo_classe_minamisenba', name: 'カポ・クラッセ (CAPO CLASSE)', category: 'OMNI',
    lat: 34.676258, lng: 135.507191, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta lunch; bread; the omelette and appetizers vary daily — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tuna, bacon and whitebait pastas; cream sauces; cheese.',
    hours_raw: 'Mon–Sat 11:30–14:00 and 18:00–23:00; closed Sun (Tabelog). Lunch often full; reserve online (Tabelog; 2025–2026). Lunch cash only (January 2026); cards accepted otherwise (Tabelog). Run by one person (2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 1-17-5, 2F, up a flight of stairs — 2–3 min from Nagahoribashi Stn',
    cuisine: 'Italian · A Lunch ¥1,200: today\'s assorted appetizers (e.g. Spanish omelette, potato salad, chicken), homemade bread and a pasta in tomato, oil or cream sauce, e.g. tuna and mushroom cream; whitebait, okra and cabbage in oil; coffee +¥100 · Italian dried pasta, cooked firm · dinner à la carte and courses, e.g. caprese with blue cheese · 16 seats at a counter and tables',
    website: null, gmaps: gm('カポ・クラッセ'), menu_url: null,
    notes: "[Italian · a one-person Italian with a ¥1,200 pasta lunch, Minami-Senba] A small second-floor Italian near Nagahoribashi, run single-handed and still quick, that fills up at lunch. The A Lunch (¥1,200) is the draw: a generous plate of the day's appetizers, such as a Spanish omelette and potato salad, warm homemade bread, then a pasta in your choice of tomato, oil or cream sauce, cooked firm from Italian dried pasta; the tuna and mushroom cream is a hit. Coffee is ¥100 more. At night, warm light from the windows and à la carte dishes like a caprese with blue cheese. Lunch is cash only; reserve. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Italian restaurant run by one person (Tabelog; 2025–2026 reviews).', philosophy: null, specialty: 'Pasta lunch.',
      anecdotes: [
        { text: '"For pasta, you can choose from three sauces: tomato, oil, or cream… The sauce, rich with fresh cream, was decadent yet light, making it very enjoyable." — January 2026, A Lunch ¥1,200, tuna and mushroom cream sauce.', source: R + 'B521747406/' },
        { text: '"It\'s impressive how efficiently… everything [is managed] with just one person on duty, and I didn\'t feel like I was waiting at all." — August 2026, oil pasta.', source: R + 'B534473263/' },
      ],
      japanese_sources_summary: '食べログ: カポ・クラッセ、大阪市中央区南船場1-17-5 2F、長堀橋駅から205m、月〜土 11:30〜14:00・18:00〜23:00、日曜休み、予約はネットで、カード可 (昼は現金のみという声)、16席。口コミ(2025年11月〜2026年10月): 階段を上った2階のイタリアン、ひとりで切り盛りしていて手際がいい、昼はいつも混む、Aランチ1,200円 (本日の前菜盛り合わせ: スペイン風オムレツ、ポテトサラダ、鶏むねなど、自家製パン、トマト・オイル・クリームから選ぶパスタ)、ツナと木の子 クリームソース、しらすとおくら キャベツのオイルソース、コーヒー 100円、イタリアの乾麺を硬めに、夜はアラカルトとコース、ブルーチーズのカプレーゼ。',
      confidence: 'medium', sources: [TB, R + 'B516915564/', R + 'B517374556/', R + 'B521747406/', R + 'B527788413/', R + 'B534473263/', R + 'B538213085/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick one of three sauces at lunch (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-17-5 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目17番5号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521747406/', R + 'B516915564/'],
    price_note: 'Prices from November 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('Aランチ', '', 'A Lunch: appetizers, bread and pasta', '¥1,200', 'Lunch', 'no', 'no', 'January 2026.', 'a_lunch'),
      it('ツナと木の子 クリームソース', '', 'Tuna and mushroom cream sauce pasta', '', 'Pasta', 'no', 'no', 'January 2026.', 'tuna_cream'),
      it('しらすとおくら キャベツのオイルソース', '', 'Whitebait, okra and cabbage in oil sauce', '', 'Pasta', 'no', 'no', 'January 2026.', 'shirasu'),
      it('コーヒー', '', 'Coffee with lunch', '¥100', 'Drinks', 'ask', 'ask', 'January 2026.', 'coffee'),
    ] }, {
    cuisine: 'イタリアン・Aランチ1,200円: 本日の前菜盛り合わせ (スペイン風オムレツ、ポテトサラダ、鶏むねなど)、自家製パン、トマト・オイル・クリームから選ぶパスタ (たとえばツナと木の子 クリームソース、しらすとおくら キャベツのオイルソース)、コーヒー +100円・イタリアの乾麺を硬めに・夜はアラカルトとコース、たとえばブルーチーズのカプレーゼ・カウンターとテーブルで16席',
    neighborhood: '中央区南船場1-17-5 2F、階段を上がって。長堀橋駅から徒歩2〜3分',
    gf_detail: 'グルテンフリーではありません。昼はパスタ、パン。オムレツや前菜は日替わりなので確認を。',
    vegan_detail: 'ヴィーガンではありません。ツナ、ベーコン、しらすのパスタ、クリームソース、チーズ。',
    notes: '[イタリアン・南船場、ひとりで切り盛りする1,200円のパスタランチ] 長堀橋近く、ビル2階の小さなイタリアンで、ひとりで切り盛りしていても手際よく、昼は満席になる。目当てはAランチ (1,200円): スペイン風オムレツやポテトサラダなどたっぷりの本日の前菜、温かい自家製パン、それからトマト・オイル・クリームから選ぶパスタは、イタリアの乾麺を硬めにゆでて。ツナと木の子のクリームが好評。コーヒーは+100円。夜は窓からあたたかい明かりがこぼれ、ブルーチーズのカプレーゼなどアラカルトも。昼は現金のみ、予約を。日曜休み。',
  });
}

// ================================================================ きのこの里
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27045344/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:00', '22:30']); const WE = day(['17:00', '22:30']);
  put({
    id: 'osaka_kinoko_no_sato_minamisenba', name: 'きのこの里 (Kinoko no Sato)', category: 'OMNI',
    lat: 34.677234, lng: 135.498375, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: mushroom tempura and deep-fried dishes; soup curry at lunch; dashi likely soy-seasoned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: the courses are built on mushrooms, but whether the dashi, hot pot and risotto use fish or meat stock is not stated.',
    hours_raw: 'Mon–Fri 11:30–14:30 (last order 14:00) and 17:00–22:30; Sat, Sun and public holidays 17:00–22:30; last order food 21:00, drinks 22:00; irregular closings and New Year break (Tabelog). Weekday lunch is soup curry only; dinner is mushroom cuisine only; some lunch days serve the course — see Instagram (Tabelog). Reserve for dinner (September 2026). Cards accepted (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-10-20, Grand Maison Nishi-Shinsaibashi 1F — 6 min from Shinsaibashi, Yotsubashi or Honmachi Stn',
    cuisine: 'Creative mushroom cuisine at dinner · Bamboo course: mushroom sashimi of several kinds, shiitake dobin-mushi, grilled mushrooms, tempura, a hot pot of many mushrooms, risotto from the hot pot, ice cream (course only) · à la carte too: mushroom hot pot, maitake tempura, grilled or deep-fried shiitake · mushroom sake and gin · weekday lunch: soup curry · 16 seats: 8 at the counter',
    website: null, gmaps: gm('きのこの里'), menu_url: null,
    notes: "[Mushroom · creative mushroom courses, Minami-Senba] A small, pleasant restaurant near Shinsaibashi where nearly everything at dinner is mushrooms. The Bamboo course runs from mushroom sashimi (crunchy yet moist, several kinds) and a shiitake dobin-mushi through grilled mushrooms and tempura to a hot pot crowded with varieties, then a risotto made in the broth and ice cream. Staff explain the mushrooms and how to eat each dish. Seasoning is gentle and the umami is deep. Try the mushroom sake or gin. Weekday lunch is a different menu: soup curry only. Reserve for dinner. One diner got soggy tempura.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Mushroom-themed restaurant (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Mushroom courses; mushroom hot pot.',
      anecdotes: [
        { text: '"I had never tried sashimi made with mushrooms before, and the crunchy yet moist texture with various types was a refreshing experience." — October 2026.', source: R + 'B538209962/' },
        { text: '"The shiitake dobin mushi was especially amazing—I could drink it for a lifetime!" — September 2026.', source: R + 'B536400206/' },
      ],
      japanese_sources_summary: '食べログ: きのこの里、大阪市中央区南船場4-10-20 グランドメゾン西心斎橋 1F、心斎橋・四ツ橋・本町駅から徒歩6分、月〜金 11:30〜14:30 (L.O. 14:00)・17:00〜22:30、土・日・祝 17:00〜22:30、L.O. 料理21:00・ドリンク22:00、年末年始・不定休、平日の昼はスープカレーのみ、夜はきのこの創作料理 (スープカレーなし)、昼にコースの日も (Instagram)、カード可、16席 (カウンター8、テーブル8)。口コミ(2026年9〜10月): Bamboo course (いろいろなきのこの刺身、shiitake の dobin-mushi、焼き物、天ぷら、きのこの鍋、鍋のリゾット、コースだけのアイス)、アラカルトのきのこ鍋、maitake の天ぷら、焼き shiitake、揚げ shiitake、きのこの日本酒とジン、きのこの説明と食べ方を教えてくれる、やさしい味つけ、予約は必須という声、天ぷらがべちゃっとしていたという声。',
      confidence: 'medium', sources: [TB, R + 'B535368776/', R + 'B535530306/', R + 'B536400206/', R + 'B536758288/', R + 'B537878999/', R + 'B538209962/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the mushrooms (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-10-20 グランドメゾン西心斎橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目10番20号 (go) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535530306/', R + 'B536758288/', R + 'B537878999/'],
    price_note: 'No prices in the reviews; JPY 6,000–7,999 at dinner (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Bamboo course', '', 'Courses', 'no', 'ask', 'September–October 2026.', 'bamboo'),
      it('', '', 'Mushroom hot pot', '', 'Hot pot', 'ask', 'ask', 'October 2026.', 'nabe'),
      it('', '', 'Maitake tempura', '', 'Fried', 'no', 'ask', 'October 2026.', 'maitake'),
      it('', '', 'Grilled shiitake', '', 'Grilled', 'ask', 'ask', 'October 2026.', 'shiitake'),
      it('', '', 'Soup curry (weekday lunch)', '', 'Lunch', 'ask', 'ask', 'Tabelog.', 'soupcurry'),
    ] }, {
    cuisine: '夜はきのこの創作料理・Bamboo course: いろいろなきのこの刺身、shiitake の dobin-mushi、焼いたきのこ、天ぷら、たくさんの種類のきのこの鍋、鍋のリゾット、アイス (コースのみ)・アラカルトも: きのこ鍋、maitake の天ぷら、焼きや揚げの shiitake・きのこの日本酒とジン・平日の昼はスープカレー・16席: カウンター8席',
    neighborhood: '中央区南船場4-10-20 グランドメゾン西心斎橋 1F。心斎橋・四ツ橋・本町駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。きのこの天ぷらや揚げ物、昼はスープカレー、だしに醤油を使っていそう。',
    vegan_detail: '確認を。料理はきのこが中心だが、だし、鍋、リゾットに魚や肉のスープを使うかは書かれていない。',
    notes: '[きのこ料理・南船場、きのこの創作コース] 心斎橋近くの小さく居心地のいい店で、夜はほとんどすべてがきのこ。Bamboo course は、しゃきっとしてしっとりした数種のきのこの刺身と shiitake の dobin-mushi から、焼いたきのこ、天ぷら、いろいろなきのこがぎっしりの鍋、そのだしで作るリゾット、アイスまで。店の人がきのこのことや食べ方を説明してくれる。味つけはやさしく、うまみが深い。きのこの日本酒やジンもぜひ。平日の昼は別のメニューでスープカレーのみ。夜は予約を。天ぷらがべちゃっとしていたという声も。',
  });
}

// ================================================================ カレーや デッカオ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27091309/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '15:30']); const LD = day(['11:30', '15:30'], ['18:00', '21:00']);
  put({
    id: 'osaka_curry_ya_dekkao_minamisenba', name: 'カレーや デッカオ (Curry Ya Dekkao)', category: 'OMNI',
    lat: 34.677676, lng: 135.502265, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: whether the curries use wheat is not stated, and sides and daily curries change — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, pork, tuna, squid and clam curries; vegetable sides may be meat-free — ask.',
    hours_raw: 'Mon, Wed, Fri, Sat and public holidays 11:30–15:30 (last order 15:00); Tue and Thu 11:30–15:30 and 18:00–21:00 (last order 20:30); Tue/Thu holidays lunch only; closed Sun (Tabelog). No cards; PayPay accepted (Tabelog). Queues before opening (October 2026).',
    hours: { 0: L, 1: LD, 2: L, 3: LD, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-8-5, Minami-Senba Bldg 2F, a hard-to-spot entrance — 5 min from Shinsaibashi Stn',
    cuisine: 'Sri Lankan-style spice curry plates · Dekkao Special ¥1,300: bone-in chicken curry plus a daily curry, with sides · Mini Dekkao Special ¥1,250 with three sides · Greedy Dekkao Special ¥1,650: chicken curry, two daily curries and four sides · daily curries (about four or five), e.g. komatsuna and pork keema, spicy coconut tuna, clam and tomato, spicy squid (+¥100), vinegar pork · sides such as coconut furikake, stir-fried eggplant, tomato salad, mizuna with coconut · eat each first, then mix everything · 13 seats',
    website: null, gmaps: gm('カレーや デッカオ'), menu_url: null,
    notes: "[Curry · Sri Lankan-style curry plates, Minami-Senba] A busy, homey second-floor curry shop near Shinsaibashi, easy to miss from the street, serving Sri Lankan-style curry adapted to Japanese tastes: spicy but approachable. Build a plate around the bone-in chicken curry and one or two of the four or five daily curries, such as clam and tomato or spicy coconut tuna; the Dekkao Special is ¥1,300 and the Greedy version adds a second curry and more sides for ¥1,650. Taste each curry and side first, then mix it all together. Warm, smiling staff. Expect a line at opening. Mostly lunch; dinner Tuesdays and Thursdays. Closed Sundays. PayPay, no cards.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Sri Lankan-style curry shop (Tabelog; 2026 reviews).', philosophy: 'Sri Lankan curry blended with Japanese cooking to suit Japanese tastes (September 2026 review, citing the owner).', specialty: 'Curry plates with daily curries.',
      anecdotes: [
        { text: '"The standard way to enjoy this meal is to first savor each curry and side dish separately, and then mix them together." — September 2026, Greedy Dekkao Special ¥1,650.', source: R + 'B535919876/' },
        { text: '"The clam and tomato curry, which I tried for the first time, had a wonderful clam flavor and was delicious. It was perfectly spicy, and it paired well with the chicken curry." — September 2026, Dekkao Special ¥1,300.', source: R + 'B536296022/' },
      ],
      japanese_sources_summary: '食べログ: カレーや デッカオ、大阪市中央区南船場3-8-5 南船場ビル 2F、心斎橋駅から徒歩5分、月・水・金・土・祝 11:30〜15:30 (L.O. 15:00)、火・木 11:30〜15:30・18:00〜21:00 (L.O. 20:30)、日曜休み、カード不可、PayPay 可、13席 (カウンター9、4名テーブル1)。口コミ(2026年9〜10月): わかりにくい入口の2階、日本人に合わせたスリランカカレー、デッカオスペシャル1,300円 (チキンと日替わり)、ミニ1,250円 (副菜3種)、欲張りデッカオスペシャル1,650円 (チキン、日替わり2種、副菜4種)、日替わりは4〜5種 (komatsuna と豚のキーマ、ココナッツのツナ、貝とトマト、辛いイカ +100円、豚の酢の料理)、チキンには手羽元がひとつ、副菜 (ココナッツの furikake、なすの炒め物、トマトのサラダ、ココナッツの mizuna)、まずひとつずつ、それから全部混ぜて、笑顔の店の人、開店前から行列。',
      confidence: 'medium', sources: [TB, R + 'B535713205/', R + 'B535726039/', R + 'B535919876/', R + 'B536175396/', R + 'B536296022/', R + 'B536746119/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain how to mix the plate (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-8-5 南船場ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目8番5号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535919876/', R + 'B536175396/', R + 'B536296022/'],
    price_note: 'Prices from September 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Dekkao Special (chicken curry, daily curry, sides)', '¥1,300', 'Curry plates', 'ask', 'no', 'September 2026.', 'special'),
      it('', '', 'Mini Dekkao Special (three sides)', '¥1,250', 'Curry plates', 'ask', 'no', 'September 2026.', 'mini'),
      it('', '', 'Greedy Dekkao Special (two daily curries, four sides)', '¥1,650', 'Curry plates', 'ask', 'no', 'September 2026.', 'greedy'),
      it('', '', 'Spicy squid curry (daily)', '+¥100', 'Daily curry', 'ask', 'no', 'September 2026.', 'squid'),
    ] }, {
    cuisine: 'スリランカ風のスパイスカレーのプレート・デッカオスペシャル1,300円: 骨つきのチキンカレーと日替わりのカレー、副菜つき・ミニ1,250円 (副菜3種)・欲張り1,650円: チキンカレー、日替わり2種、副菜4種・日替わりは4〜5種、たとえば komatsuna と豚のキーマ、辛いココナッツのツナ、貝とトマト、辛いイカ (+100円)、豚の酢の料理・副菜はココナッツの furikake、なすの炒め物、トマトのサラダ、ココナッツの mizuna など・まずひとつずつ、それから全部混ぜて・13席',
    neighborhood: '中央区南船場3-8-5 南船場ビル 2F、入口がわかりにくい。心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。カレーに小麦を使うかは書かれておらず、副菜や日替わりも変わるので確認を。',
    vegan_detail: 'ヴィーガンではありません。チキン、豚、ツナ、イカ、貝のカレー。野菜の副菜は肉なしかもしれないので確認を。',
    notes: '[カレー・南船場、スリランカ風のカレープレート] 心斎橋近く、通りから見落としやすいビル2階のにぎやかで家庭的なカレー店で、日本人の口に合わせたスリランカ風のカレーは、辛いけれど食べやすい。骨つきのチキンカレーに、4〜5種の日替わり (貝とトマト、辛いココナッツのツナなど) から1〜2種を合わせ、デッカオスペシャルは1,300円、欲張りはカレーと副菜が増えて1,650円。まずカレーと副菜をひとつずつ味わい、それから全部混ぜて。笑顔で迎えてくれる店の人。開店時は行列も。ほぼ昼のみ、夜は火・木曜。日曜休み。PayPay 可、カード不可。',
  });
}

// ================================================================ AMBER
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27140944/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:30'], ['17:30', '23:00']);
  put({
    id: 'osaka_amber_kitahorie', name: 'AMBER', category: 'OMNI',
    lat: 34.673438, lng: 135.492317, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta; baguette and bread; tiramisu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, wagyu, crab, uni and swordfish dishes; cream and butter.',
    hours_raw: 'Tue–Sun and public holidays 11:30–15:30 (last order 14:30) and 17:30–23:00 (last order food 22:00); closed Mon, and the Tue after a Monday holiday; other irregular closings — see Instagram highlights (Tabelog). Reserve; often full (2026). Cards, e-money and QR accepted (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 2-4-20, High Forest 1 — 5 min from Yotsubashi or Nishi-Ohashi Stn',
    cuisine: 'Italian bistro and meat bar · pasta lunch with potato potage, bread and salad, e.g. tomato pasta with swordfish and spinach · dinner courses and à la carte: braised beef cheek, uni cream pasta, black-haired wagyu, sirloin cap steak, crab risotto, fig butter baguette; dessert plate with homemade tiramisu · birthday plates on request · 20 seats at tables',
    website: null, gmaps: gm('AMBER'), menu_url: null,
    notes: "[Italian · a bright, casual Italian bistro, Kitahorie] A bright, warm Italian in western Kitahorie, a short walk from Yotsubashi, casual enough for families at lunch and lively at dinner. Lunch is pasta with potage, bread and salad, such as a fresh tomato pasta with swordfish and spinach. At night, courses and à la carte run to braised beef cheek, a rich uni cream pasta for mopping up with baguette, melt-in-the-mouth black-haired wagyu, sirloin cap steak and crab risotto, ending with homemade tiramisu. Birthday plates on request; friendly staff. It fills up, so reserve. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Has a sister café (October 2026 review).', background: 'Italian bistro (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Pasta; beef dishes.',
      anecdotes: [
        { text: '"The braised beef cheek was incredibly tender, and the uni cream pasta was rich and paired perfectly with the baguette." — September 2026, course.', source: R + 'B535841984/' },
        { text: '"I had the fig butter baguette, crab risotto, and sirloin cap steak. Everything was absolutely delicious." — October 2026.', source: R + 'B538095753/' },
      ],
      japanese_sources_summary: '食べログ: AMBER、大阪市西区北堀江2-4-20 ハイフォレスト1、四ツ橋・西大橋駅から徒歩5分、心斎橋駅から11分、火〜日・祝 11:30〜15:30 (L.O. 14:30)・17:30〜23:00 (L.O. 料理22:00)、月曜休み (月曜が祝日なら翌火曜休み)、不定休あり (Instagram のハイライト)、カード・電子マネー・QR可、20席 (テーブル)。口コミ(2026年9〜10月): 明るくあたたかい店、昼はポタージュ・パン・サラダつきのパスタ (メカジキとほうれん草のトマトソース)、夜はコースとアラカルト (牛ほほ肉の煮込み、ウニのクリームパスタ、黒毛和牛、sirloin cap のステーキ、カニのリゾット、いちじくバターのバゲット、自家製ティラミス)、誕生日のプレート、気さくな店の人、子ども連れの昼にも、いつも満席で予約を、姉妹店のカフェ、4人で分けるには量が少なめという声。',
      confidence: 'medium', sources: [TB, R + 'B535800246/', R + 'B535841984/', R + 'B536198629/', R + 'B536421402/', R + 'B537712441/', R + 'B538095753/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual; families welcome at lunch (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江2-4-20 ハイフォレスト1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江二丁目4番20号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535800246/', R + 'B535841984/', R + 'B538095753/'],
    price_note: 'No prices in the reviews; about ¥10,000 per person for a course with drinks (September 2026).', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch with potage, bread and salad', '', 'Lunch', 'no', 'no', 'September 2026.', 'lunch'),
      it('', '', 'Uni cream pasta', '', 'Pasta', 'no', 'no', 'September 2026.', 'uni'),
      it('', '', 'Braised beef cheek', '', 'Meat', 'ask', 'no', 'September 2026.', 'cheek'),
      it('', '', 'Crab risotto', '', 'Rice', 'ask', 'no', 'October 2026.', 'risotto'),
      it('', '', 'Homemade tiramisu', '', 'Dessert', 'no', 'no', 'September–October 2026.', 'tiramisu'),
    ] }, {
    cuisine: 'イタリアンのビストロ兼肉バル・昼はポタージュ、パン、サラダつきのパスタ、たとえばメカジキとほうれん草のトマトパスタ・夜はコースとアラカルト: 牛ほほ肉の煮込み、ウニのクリームパスタ、黒毛和牛、sirloin cap のステーキ、カニのリゾット、いちじくバターのバゲット、自家製ティラミスのデザートプレート・誕生日のプレートも・テーブル20席',
    neighborhood: '西区北堀江2-4-20 ハイフォレスト1。四ツ橋・西大橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。パスタ、バゲットとパン、ティラミス。',
    vegan_detail: 'ヴィーガンではありません。牛肉、黒毛和牛、カニ、ウニ、メカジキの料理、クリームとバター。',
    notes: '[イタリアン・北堀江、明るくカジュアルなイタリアンのビストロ] 四ツ橋から少し歩いた北堀江の西側、明るくあたたかいイタリアンで、昼は子ども連れでも入りやすく、夜はにぎやか。昼はポタージュ・パン・サラダつきのパスタで、たとえばさっぱりしたメカジキとほうれん草のトマトパスタ。夜はコースやアラカルトで、牛ほほ肉の煮込み、バゲットでぬぐいたい濃厚なウニのクリームパスタ、とろける黒毛和牛、sirloin cap のステーキ、カニのリゾット、締めは自家製ティラミス。誕生日のプレートも頼め、店の人は気さく。満席になりやすいので予約を。月曜休み。',
  });
}

save();
