// Ginza Station half-mile sweep (805 m), batch 82 — all-genre phase (all OMNI).
//   + シャナブール銀座 (cocktail and dining bar since 2013; fresh-fruit cocktails, seasonal food)
//   + 銀座バール・デルソーレ 2Due (Italian bar chain; espresso, pasta lunch, gelato)
//   + JOINT BURGER 銀座 (basement burger bar)
//   + レガル (Vin Barre Cuisine Regal on the Shusse-kaidō alley; charcoal grill and pasta)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ シャナブール銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13159357/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '03:00']);
  put({
    id: 'tokyo_shanabool_ginza7', name: 'シャナブール銀座 (Shanabool GINZA)', category: 'OMNI',
    lat: 35.669917, lng: 139.762209,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail bar with a seasonal food menu (soft roe, meat dishes); dishes are not described in detail.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Fresh-fruit cocktails can be made non-alcoholic, but the food menu is not described.',
    hours_raw: 'Mon–Fri 17:00–03:00 (L.O. 02:30); Sat 17:00–02:00; closed Sundays, holidays and 31 Dec–5 Jan (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['17:00', '02:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme on Azuma-dōri, Ishii Bldg B1F — 5 min from Ginza Stn',
    cuisine: 'Cocktail and dining bar · fresh-fruit cocktails (incl. non-alcoholic), mezcal · seasonal food with sommelier wines · open to 3 a.m.', cuisine_type: 'other',
    website: null, gmaps: gm('シャナブール銀座 銀座7-6-2'), menu_url: null,
    notes: "[Bar · fresh-fruit cocktails and real food, late] A 28-seat basement cocktail and dining bar on Azuma-dōri, open since 2013. It has aged-wood interiors and a back bar of spirits to the ceiling. Bartenders will make almost anything, and the fresh-fruit cocktails are the draw: La France pear, or an omakase fruit cocktail made non-alcoholic on request. Mezcal sodas too. Unusually for a bar, the seasonal food is restaurant quality, with soft roe and meat dishes and wines chosen by a sommelier. Lively with a younger crowd late at night; open to 3 a.m. on weekdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2013 (Tabelog)', background: 'No source names the owner.', philosophy: null, specialty: 'Fresh-fruit cocktails.',
      anecdotes: [
        { text: '"The cocktails made with fresh fruits are incredibly delicious. I highly recommend trying one, especially the cocktail made with freshly squeezed La France pear." — November 2025.', source: R + 'B516756726/' },
        { text: '"I tried the omakase fruit cocktail (I opted for a non-alcoholic version), and it was delicious!" — February 2026.', source: R + 'B523695128/' },
      ],
      japanese_sources_summary: '食べログ: シャナブール銀座、銀座7-6-2 石井ビルB1F、28席(カウンター8・テーブル20)、平日17:00〜翌3:00、土17:00〜翌2:00、日祝・12月31日〜1月5日休、2013年7月1日開店。店の紹介: 本格カクテルとレストラン品質の料理、古材の落ち着いた内装、季節のおすすめとソムリエのワイン。口コミ: 何でも作ってくれるカクテル、生のラ・フランスのカクテル、白子や肉料理、おまかせのフルーツカクテル(ノンアルコールも)、メスカルのソーダ割り、天井まで並ぶバックバー、夜遅くは若い客でにぎわう。',
      confidence: 'low', sources: [TB, R + 'B516756726/', R + 'B523695128/', R + 'B519864366/', R + 'B534283126/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bar; non-alcoholic cocktails available.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-6-2 石井ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated November 2025–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目6番2号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B516756726/', R + 'B523695128/'],
    price_note: 'No prices captured; reviewers spend ¥2,000–8,000.', last_checked: TODAY, items: [
      it('フレッシュフルーツカクテル', '', 'Fresh-fruit cocktail (non-alcoholic on request)', '', 'Drinks', 'ask', 'ask', '2025–26.', 'fruit_cocktail'),
      it('季節の料理', '', 'Seasonal dishes (e.g. soft roe, meat)', '', 'Food', 'ask', 'no', 'December 2025.', 'seasonal_food'),
    ] }, {
    cuisine: 'カクテルとダイニングのバー・フレッシュフルーツのカクテル(ノンアルコールも)、メスカル・季節の料理とソムリエのワイン・深夜3時まで',
    neighborhood: '銀座七丁目のあづま通り沿い、石井ビルB1F。銀座駅から徒歩5分',
    gf_detail: '要確認。季節の料理(白子や肉料理)のあるカクテルバーで、料理の詳しい内容は書かれていません。',
    vegan_detail: '要確認。フルーツカクテルはノンアルコールにもできますが、料理の内容は書かれていません。',
    notes: '[バー・フレッシュフルーツのカクテルと本格料理、深夜まで] あづま通り沿いのビル地下、2013年開店の28席のカクテル&ダイニングバー。古材の内装と天井まで届くバックバー。バーテンダーは何でも作ってくれ、目当てはフレッシュフルーツのカクテル(生のラ・フランスなど、おまかせのフルーツカクテルはノンアルコールにも)。メスカルのソーダ割りも。バーには珍しく季節の料理がレストラン並みで、白子や肉料理、ソムリエが選ぶワインと。夜遅くは若い客でにぎわい、平日は深夜3時まで。',
  });
}

// ================================================================ 銀座バール・デルソーレ 2Due
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13038543/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '23:00']), su = day(['11:00', '22:30']);
  put({
    id: 'tokyo_del_sole_2due_ginza2', name: '銀座バール・デルソーレ 2Due (Bar Del Sole)', category: 'OMNI',
    lat: 35.673954, lng: 139.766105,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a pasta, biscotti and tiramisu Italian bar; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: Bolognese, cream pasta, gelato, tiramisu.',
    hours_raw: 'Mon–Sat 11:00–23:00 (food L.O. 22:00); Sun and holidays 11:00–22:30; closures follow the Ginza Belvia building (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: wk, 6: su }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme, Ginza Belvia-kan 1F — near Ginza-itchōme Stn',
    cuisine: 'Italian bar chain · double espresso ¥600, biscotti ¥300 · pasta lunch with salad, gelato and ¥200 drink · tiramisu · terrace', cuisine_type: 'other',
    website: 'https://www.delsole.st/shopinfomation/ginza2due/', gmaps: gm('銀座バール・デルソーレ 2Due'), menu_url: null,
    notes: "[Italian bar · espresso and pasta, Italy-style] A 28-seat branch of the Del Sole Italian bar chain on the ground floor of Ginza Belvia, with lunch terrace seats and the odd Italian customer. Coffee is cheap for Ginza: double espresso ¥600, biscotti ¥300. Lunch sets of Bolognese or cream pasta come with salad and gelato, and set drinks (a macchiato or iced latte) are ¥200. Tiramisu comes in a glass or by the slice. The service can be brusque. Open all day.",
    chef_bio: { chef_name: null, roles: [], origin: 'Chain branch (opening date not given)', background: 'Chain-run (delsole.st).', philosophy: null, specialty: 'Espresso; Bolognese.',
      anecdotes: [
        { text: '"Double espresso for JPY 600 and a biscotti for JPY 300… Given the location in Ginza, this price is quite a bargain." — October 2026.', source: R + 'B537273642/' },
        { text: '"The lunch set featuring Spaghetti Bolognese includes a salad, spaghetti, and gelato." — October 2026.', source: R + 'B537555992/' },
      ],
      japanese_sources_summary: '食べログ: 銀座バール・デルソーレ 2Due、銀座2-4-6 銀座ベルビア館1F、28席、月〜土11:00〜23:00、日祝11:00〜22:30、休みはベルビア館に準ずる、公式サイト delsole.st。2026年10月の口コミ: ダブルエスプレッソ600円とビスコッティ300円、昼はテラス席、イタリア人の客も、ボロネーゼのランチセット(サラダ・スパゲッティ・ジェラート)とマキアート、クリームパスタ、セットのドリンク200円、ティラミス(グラスとカット)、接客はそっけない。',
      confidence: 'medium', sources: [TB, R + 'B537273642/', R + 'B537555992/', R + 'B537682850/', R + 'B537794177/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bar counter; quick coffee or lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-4-6 銀座ベルビア館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目4番6号 (go) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537273642/', R + 'B537682850/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('ダブルエスプレッソ', '', 'Double espresso', '¥600', 'Coffee', 'gf', 'gf', 'October 2026.', 'espresso'),
      it('ビスコッティ', 'bisukottei', 'Biscotti', '¥300', 'Sweets', 'no', 'no', 'October 2026.', 'biscotti'),
      it('ボロネーゼのランチセット', '', 'Bolognese lunch set with salad and gelato', '', 'Lunch', 'no', 'no', 'October 2026; set drink ¥200.', 'bolognese_lunch'),
    ] }, {
    cuisine: 'イタリアンバールのチェーン・ダブルエスプレッソ600円、ビスコッティ300円・サラダとジェラート付きのパスタランチ、ドリンク200円・ティラミス・テラス',
    neighborhood: '銀座二丁目、銀座ベルビア館1F。銀座一丁目駅の近く',
    gf_detail: '実際上グルテンフリーではありません。パスタ、ビスコッティ、ティラミスのイタリアンバールで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。ボロネーゼ、クリームパスタ、ジェラート、ティラミス。',
    notes: '[イタリアンバール・イタリア流のエスプレッソとパスタ] 銀座ベルビア館1階、デルソーレのイタリアンバールチェーンの28席の店で、昼はテラス席、イタリア人客の姿も。コーヒーは銀座にしては安く、ダブルエスプレッソ600円、ビスコッティ300円。ランチはボロネーゼやクリームパスタにサラダとジェラート付きで、セットのドリンク(マキアートやアイスラテ)は200円。ティラミスはグラスとカットの2種。接客はそっけないことも。通し営業。',
  });
}

// ================================================================ JOINT BURGER 銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13283805/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['12:00', '22:00']);
  put({
    id: 'tokyo_joint_burger_ginza7', name: 'JOINT BURGER 銀座 (ジョイントバーガー)', category: 'OMNI',
    lat: 35.669916, lng: 139.761204,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: burgers on buns with fries; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: 100%-beef patties, bacon, cheese.',
    hours_raw: 'Mon–Sat 12:00–22:00; Sun and holidays 12:00–21:00 (Tabelog). Online payment.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: wk, 6: day(['12:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Shūhō Bldg B1F — in the bar district, near Ginza Stn',
    cuisine: 'Basement burger bar · 100%-beef bacon cheeseburger, crisp fries · beer · ¥2,000–3,000', cuisine_type: 'other',
    website: null, gmaps: gm('JOINT BURGER 銀座 秀芳ビル'), menu_url: null,
    notes: "[Burgers · a bar-style basement in Ginza 7-chōme] A 28-seat burger joint opened in 2023 in a basement among Ginza 7-chōme's bars. Burgers use 100%-beef patties, such as the bacon cheeseburger, with fries that stay crisp to the end, plus beer (Heineken and others). Reasonable for Ginza, smoke-free, quick, with payment handled online. Eat with your hands; no cutlery is provided.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 August 2023 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Bacon cheeseburger.',
      anecdotes: [
        { text: '"The burger featured a 100% beef patty that really brought out the meat\'s flavor, and with the addition of bacon and cheese." — July 2026.', source: R + 'B533080454/' },
        { text: '"The fries were unexpectedly crispy! The frying was just perfect." — January 2026.', source: R + 'B521733274/' },
      ],
      japanese_sources_summary: '食べログ: JOINT BURGER 銀座(ジョイントバーガー)、銀座7-5-16 秀芳ビルB1F、28席(カウンター6・テーブル22)、月〜土12:00〜22:00、日祝12:00〜21:00、2023年8月4日開店。2026年の口コミ: ジューシーなバーガー、カリカリのポテト、銀座にしては手頃、たばこの匂いがない、会計はオンライン、飲み屋街の地下でバーのような雰囲気、提供が早い、フォークやナイフはない、牛100%パティのベーコンチーズバーガー、ハイネケン。',
      confidence: 'medium', sources: [TB, R + 'B533080454/', R + 'B521733274/', R + 'B524684931/', R + 'B525031845/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual; online payment.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-5-16 秀芳ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目5番16号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533080454/'],
    price_note: 'No prices captured; reviewers spend ¥2,000–3,000.', last_checked: TODAY, items: [
      it('ベーコンチーズバーガー', '', 'Bacon cheeseburger (100% beef)', '', 'Burgers', 'no', 'no', 'July 2026.', 'bacon_cheese'),
      it('フライドポテト', 'furaido poteto', 'Fries', '', 'Sides', 'ask', 'ask', '', 'fries'),
    ] }, {
    cuisine: '地下のバーガーバー・牛100%のベーコンチーズバーガー、カリカリのポテト・ビール・2,000〜3,000円',
    neighborhood: '銀座七丁目、秀芳ビルB1F。飲み屋街、銀座駅の近く',
    gf_detail: 'グルテンフリーではありません。バンズのバーガーとポテトで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。牛100%のパティ、ベーコン、チーズ。',
    notes: '[バーガー・銀座七丁目のバーのような地下] 2023年、銀座七丁目の飲み屋街のビル地下に開いた28席のバーガーの店。牛100%パティのベーコンチーズバーガーなどに、最後までカリカリのポテト、ハイネケンなどのビール。銀座にしては手頃で、禁煙、提供も早く、会計はオンライン。カトラリーはないので手で。',
  });
}

// ================================================================ レガル
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13059903/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['18:00', '02:30']);
  put({
    id: 'tokyo_regal_shusse_kaido_ginza8', name: 'レガル (Vin Barre Cuisine Regal)', category: 'OMNI',
    lat: 35.668421, lng: 139.760595,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled meat, scallops, bagna cauda, oysters and carpaccio sit beside Neapolitan pasta and vongole; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat, scallops, oysters, clams; bagna cauda sauce normally contains anchovy.',
    hours_raw: 'Mon–Fri 18:00–02:30 (food L.O. 01:30); closed Sat, Sun and holidays; check current hours (Tabelog). 10% service charge.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 8-chōme on the "Shusse-kaidō" alley between Kenban-dōri and Namiki-dōri — near Shimbashi',
    cuisine: 'Wine bar and kitchen in a back alley · charcoal-grilled meat, Neapolitan pasta, vongole · bagna cauda, oysters · open late', cuisine_type: 'other',
    website: null, gmaps: gm('Regal 銀座8-6-9 出世街道'), menu_url: null,
    notes: "[Wine bar · charcoal grill on Ginza's 'Shusse-kaidō'] A 28-seat wine bar and kitchen behind a heavy door on the narrow 'Shusse-kaidō' (success road) alley in Ginza 8-chōme. It has a 9-seat counter downstairs and tables and a private room upstairs, where smoking is allowed. The cooking is careful rather than flashy: classic Neapolitan pasta, vongole with big clams, meat grilled over charcoal (served on a crystal plate), butter scallops, bagna cauda, fresh oysters and carpaccio. Some diners found other dishes average, and once the oven was down. Weeknights to 2:30 a.m. 10% service.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 8-chōme (opening date not given)', background: 'No source names the owner.', philosophy: null, specialty: 'Charcoal-grilled meat; Neapolitan pasta.',
      anecdotes: [
        { text: '"The meat, grilled over charcoal, is fragrant and releases its rich flavors with every bite." — June 2026.', source: R + 'B530287106/' },
        { text: '"The fresh oysters and carpaccio were quite delicious! However, everything else was just average… many items were unavailable because the oven was broken." — September 2026.', source: R + 'B536610649/' },
      ],
      japanese_sources_summary: '食べログ: Vin Barre Cuisine Regal(レガル)、銀座8-6-9、見番通りと並木通りの間の路地「出世街道」、28席(1階カウンター9・2階テーブル19)、平日18:00〜翌2:30、土日祝休、サービス料10%。店の紹介: 王道のナポリタン、クリスタルプレートの肉のグリル。2026年の口コミ: 大きなあさりのボンゴレ、2階の個室で喫煙可、炭火焼きの肉、バターの帆立、バーニャカウダ、生牡蠣、カルパッチョ、重い扉の落ち着いた空間、ほかはふつうとの声、オーブン故障で品切れも。',
      confidence: 'low', sources: [TB, R + 'B530287106/', R + 'B536610649/', R + 'B535720527/', R + 'B524915463/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hidden alley; smoking upstairs.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-6-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目6番9号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535720527/', R + 'B524915463/'],
    price_note: 'No prices captured; reviewers spend ¥5,000–15,000.', last_checked: TODAY, items: [
      it('ボンゴレ', 'bongore', 'Vongole with large clams', '', 'Pasta', 'no', 'no', 'March 2026.', 'vongole'),
      it('炭火焼きの肉', '', 'Charcoal-grilled meat on a crystal plate', '', 'Mains', 'ask', 'no', '', 'charcoal_meat'),
      it('バーニャカウダ', 'baanya kauda', 'Bagna cauda', '', 'Starters', 'ask', 'no', 'September 2026.', 'bagna_cauda'),
    ] }, {
    cuisine: '路地裏のワインバーとキッチン・炭火焼きの肉、ナポリタン、ボンゴレ・バーニャカウダ、生牡蠣・深夜営業',
    neighborhood: '銀座八丁目、見番通りと並木通りの間の路地「出世街道」。新橋寄り',
    gf_detail: '要確認。炭火焼きの肉、帆立、バーニャカウダ、生牡蠣、カルパッチョのほか、ナポリタンやボンゴレも。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。肉、帆立、牡蠣、あさり。バーニャカウダのソースにはふつうアンチョビが入ります。',
    notes: '[ワインバー・銀座の「出世街道」の炭火焼き] 銀座八丁目の細い路地「出世街道」、重い扉の奥にある28席のワインバー&キッチン。1階はカウンター9席、2階はテーブルと喫煙可の個室。料理は派手さより丁寧さで、王道のナポリタン、大きなあさりのボンゴレ、炭火で焼いた肉(クリスタルプレートで)、バターの帆立、バーニャカウダ、生牡蠣、カルパッチョなど。ほかの料理はふつうという声や、オーブンの故障で品切れが多かった日も。平日は深夜2時半まで、サービス料10%。',
  });
}

save();
