// Ginza Station half-mile sweep (805 m), batch 83 — all-genre phase (all OMNI).
//   + SONOKO CAFE 銀座店 (Sonoko Suzuki health café; non-oil, additive-free; Tabelog: vegetarian options, allergy info)
//   + ザ・パントリー 丸の内 (burgers and sandwiches; Tabelog: vegetarian options; sister of a known burger shop)
//   + ESPRIT C. KEI GINZA (Kei Kobayashi × Toraya, Toraya Ginza Bldg 11F)
//   + 鉄板処 めぐろ (Osaka-style teppan, okonomiyaki to steak)
// Skipped: スカイバー スペード 13187116 (last review 2024; skip set).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ SONOKO CAFE 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13042571/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '20:00']);
  put({
    id: 'tokyo_sonoko_cafe_ginza5', name: 'SONOKO CAFE 銀座店', category: 'OMNI',
    lat: 35.670633, lng: 139.765515,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog lists allergy information as available; the vegetable plate is mostly vegetables, avocado and potato but includes couscous (wheat). No gluten-free option is named.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks vegetarian options and a ¥1,700 Vegetable Plate (couscous, carrot râpé, marinated mushrooms, mashed potato, avocado and tomato, red cabbage, salad) is on the menu, but no source says whether the mash or dressings contain dairy or animal products.',
    hours_raw: 'Daily 11:00–20:00 (food L.O. 19:00) (Tabelog). Limited reservations; walk-ins welcome.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Ginza Saiwai Bldg 1F, off the Ginza 4-chōme crossing — Ginza Stn A5',
    cuisine: 'Health café of beauty expert Sonoko Suzuki · non-oil, additive-free cooking · Vegetable Plate ¥1,700, sub-500 kcal hamburg · amazake smoothies', cuisine_type: 'cafe',
    website: 'https://www.sonoko.co.jp/shop.php', gmaps: gm('SONOKO CAFE 銀座店'), menu_url: null,
    notes: "[Café · Sonoko Suzuki's 'beauty café' by the Ginza crossing] A bright 29-seat café just off the Ginza 4-chōme crossing, founded on the ideas of the beauty expert and food researcher Sonoko Suzuki: non-oil cooking, no additives and carefully chosen ingredients. Every meal starts with a little kombu water, said to blunt blood-sugar spikes. The ¥1,700 Vegetable Plate brings couscous, carrot râpé, marinated mushrooms, mashed potato, avocado and tomato, red cabbage and salad. The domestic-meat 'hamburger' (as Tabelog's English puts it) is under 500 kcal, and fermented amazake smoothies (strawberry and tomato, about ¥1,400) are a signature. The add-on dessert (¥700) is a small parfait. Popular with women and solo diners. Tabelog lists vegetarian options and allergy information.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded on the brand of Sonoko Suzuki (Tabelog listing); former name SO CAFE', background: 'Company-run (sonoko.co.jp).', philosophy: '"The foundation of beauty lies in health" — non-oil, additive-free cooking (Tabelog listing).', specialty: 'Healthy plates; amazake smoothies.',
      anecdotes: [
        { text: '"The Vegetable Plate included small portions of couscous, carrot rabe, marinated mushrooms, mashed potatoes, avocado & tomato, purple cabbage, and salad." — October 2026, ¥1,700.', source: R + 'B536651987/' },
        { text: '"They serve kombu water, which is said to help regulate blood sugar levels, as part of the meal!" — September 2026.', source: R + 'B536224726/' },
      ],
      japanese_sources_summary: '食べログ: SONOKO CAFE 銀座店(旧店名 SO CAFE)、銀座5-9-1 銀座幸ビル1F、銀座駅A5出口すぐ、29席(カウンター7・テーブル22)、毎日11:00〜20:00、無休、公式サイト sonoko.co.jp、野菜にこだわり・魚にこだわり・健康メニュー・朝食・アレルギー表示あり・ベジタリアンメニューあり。店の紹介: 美容研究家・料理研究家の鈴木その子が創業、ノンオイル・無添加・厳選素材、国産肉のハンバーグが500kcal未満。2026年の口コミ: 食前の昆布水、野菜プレート1,700円(クスクス、キャロットラペ、マッシュルームのマリネ、マッシュポテト、アボカドとトマト、紫キャベツ、サラダ)、苺とトマトの甘酒スムージー約1,400円、ハンバーグは重くない、セットのデザート700円はミニパフェ、女性や一人客が多い。',
      confidence: 'medium', sources: [TB, R + 'B536651987/', R + 'B536224726/', R + 'B537351095/', R + 'B537624726/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bright café; walk-ins welcome.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists "allergy information available".', source: TB }], positives: [{ text: 'Non-oil, additive-free cooking (Tabelog listing).', source: TB }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-9-1 銀座幸ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目9番1号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536651987/', R + 'B537624726/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('野菜プレート', 'yasai pureeto', 'Vegetable Plate: couscous, carrot râpé, marinated mushrooms, mashed potato, avocado and tomato, red cabbage, salad', '¥1,700', 'Plates', 'no', 'ask', 'October 2026; couscous is wheat.', 'veg_plate'),
      it('甘酒スムージー(苺とトマト)', '', 'Strawberry and tomato amazake smoothie', '¥1,400', 'Drinks', 'ask', 'ask', 'About ¥1,400, October 2026.', 'amazake_smoothie'),
      it('国産肉のハンバーグ', '', 'Domestic-meat hamburg (Tabelog: under 500 kcal)', '', 'Plates', 'ask', 'no', 'Tabelog English says "hamburger".', 'burger'),
    ] }, {
    cuisine: '美容研究家・鈴木その子のヘルシーカフェ・ノンオイル無添加・野菜プレート1,700円、500kcal未満のハンバーグ・甘酒スムージー',
    neighborhood: '銀座五丁目、銀座四丁目交差点すぐの銀座幸ビル1F。銀座駅A5出口',
    gf_detail: '要確認。食べログではアレルギー表示ありとされ、野菜プレートは野菜やアボカド、じゃがいもが中心ですが小麦のクスクスも入り、グルテンフリーの料理は書かれていません。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありとされ、1,700円の野菜プレート(クスクス、キャロットラペ、マッシュルームのマリネ、マッシュポテト、アボカドとトマト、紫キャベツ、サラダ)もありますが、マッシュポテトやドレッシングに乳製品などを使うかは書かれていません。',
    notes: '[カフェ・銀座の交差点すぐの鈴木その子の「美容カフェ」] 銀座四丁目交差点のすぐそば、美容研究家で料理研究家の鈴木その子の考えに基づく明るい29席のカフェ。ノンオイル、無添加、厳選素材がテーマです。食事の前には血糖値の急上昇を抑えるという昆布水が少し。1,700円の野菜プレートは、クスクス、キャロットラペ、マッシュルームのマリネ、マッシュポテト、アボカドとトマト、紫キャベツ、サラダ。国産肉のハンバーグ(食べログの英語では hamburger)は500kcal未満、発酵の甘酒スムージー(苺とトマトで約1,400円)も名物。セットのデザート(700円)は小さなパフェ。女性や一人客が多い店です。食べログにはベジタリアンメニューとアレルギー表示ありと記載。',
  });
}

// ================================================================ ザ・パントリー 丸の内
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13018904/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '20:00']);
  put({
    id: 'tokyo_the_pantry_marunouchi', name: 'ザ・パントリー 丸の内 (The Pantry)', category: 'OMNI',
    lat: 35.677666, lng: 139.762641,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: burgers and sandwiches on bread; no gluten-free option is mentioned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks vegetarian options and a review headline mentions vegetarian sandwiches, but no vegan item is described.',
    hours_raw: 'Mon–Fri 11:00–20:00 (L.O. 19:30); a second 11:00–18:00 schedule is listed without days; closed Saturdays and over New Year (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marunouchi 3-chōme, Shin-Tokyo Bldg 1F — 5 min from JR Yūrakuchō or Hibiya Stn',
    cuisine: 'Gourmet burgers and sandwiches · hamburger set (90 g or 150 g) with soup and salad ¥1,580–1,880 · teriyaki sandwich ¥1,380 · vegetarian options', cuisine_type: 'other',
    website: 'http://www.thepantry.jp', gmaps: gm('ザ・パントリー 丸の内 新東京ビル'), menu_url: null,
    notes: "[Burgers · light, healthy burgers in Marunouchi] A 30-seat burger and sandwich shop on the ground floor of the Shin-Tokyo Building between Yūrakuchō and Tokyo Station, described as a sister of a well-known burger restaurant. The lunch hamburger set (Jr. 90 g ¥1,580, 150 g ¥1,880) comes with soup and salad or fries; the burger of the day might be teriyaki, topped with avocado, tomato and lettuce, with a light bun and lightly seasoned meat. The teriyaki sandwich (¥1,380) comes as four pieces with fries. Tabelog ticks vegetarian options. Handy before events at the Tokyo International Forum; quiet on weekday evenings.",
    chef_bio: { chef_name: null, roles: [], origin: 'Marunouchi (opening date not given)', background: 'Sister restaurant of a renowned burger shop (2026 review snippet); company website thepantry.jp.', philosophy: null, specialty: 'Burgers and sandwiches.',
      anecdotes: [
        { text: '"I ordered the Hamburger Set (150g) which includes soup and salad for JPY 1880… The burger is topped with avocado, tomato, and lettuce." — October 2026.', source: R + 'B537438012/' },
        { text: '"I ordered the Teriyaki Sandwich for JPY 1,380… it actually filled me up surprisingly well with four pieces and a side of French fries." — August 2026.', source: R + 'B534447005/' },
      ],
      japanese_sources_summary: '食べログ: ザ・パントリー 丸の内(The Pantry)、千代田区丸の内3-3-1 新東京ビル1F、JR有楽町駅・日比谷駅から徒歩5分、30席、平日11:00〜20:00、別に11:00〜18:00の記載(曜日の表示なし)、土・年末年始休、公式サイト thepantry.jp、野菜にこだわり・ベジタリアンメニューあり。2026年の口コミ: ハンバーガーセット150g(スープとサラダ付き)1,880円、Jr.サイズ1,580円、その日のバーガーはテリヤキ、アボカド・トマト・レタス、軽いバンズ、テリヤキサンド1,380円(4切れとポテト)、国際フォーラムの前に、平日の夜は空いている。',
      confidence: 'medium', sources: [TB, R + 'B537438012/', R + 'B534447005/', R + 'B537892157/', R + 'B536469389/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Office-district lunch spot; closed Saturdays.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0005 東京都千代田区丸の内3-3-1 新東京ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区丸の内三丁目3番 (lot) 12m; 675 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537438012/', R + 'B537892157/', R + 'B534447005/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('ハンバーガーセット(150g)', '', 'Hamburger set, 150 g patty, with soup and salad', '¥1,880', 'Lunch', 'no', 'no', 'October 2026.', 'burger_150'),
      it('ハンバーガーセット Jr.(90g)', '', 'Hamburger set, Jr. 90 g', '¥1,580', 'Lunch', 'no', 'no', 'October 2026.', 'burger_jr'),
      it('テリヤキサンド', 'teriyaki sando', 'Teriyaki sandwich with fries', '¥1,380', 'Lunch', 'no', 'no', 'August 2026.', 'teriyaki_sand'),
    ] }, {
    cuisine: 'グルメバーガーとサンドイッチ・スープとサラダ付きのハンバーガーセット(90gか150g)1,580〜1,880円・テリヤキサンド1,380円・ベジタリアンメニュー',
    neighborhood: '丸の内三丁目、新東京ビル1F。JR有楽町駅・日比谷駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。パンのバーガーとサンドイッチで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありとされ、口コミの見出しにもベジタリアンのサンドイッチとありますが、ヴィーガンの品は書かれていません。',
    notes: '[バーガー・丸の内の軽やかでヘルシーなバーガー] 有楽町と東京駅の間、新東京ビル1階にある30席のバーガーとサンドイッチの店で、有名バーガー店の姉妹店とのこと。ランチのハンバーガーセット(Jr. 90gで1,580円、150gで1,880円)はスープとサラダかポテト付き。その日のバーガーはテリヤキなどで、アボカド・トマト・レタスをのせ、バンズは軽く、肉の味つけは控えめ。テリヤキサンド(1,380円)は4切れにポテト。食べログにはベジタリアンメニューありと記載。東京国際フォーラムのイベント前に便利で、平日の夜は静か。',
  });
}

// ================================================================ ESPRIT C. KEI GINZA
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13296199/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:30', '23:00']);
  put({
    id: 'tokyo_esprit_c_kei_ginza7', name: 'ESPRIT C. KEI GINZA (エスプリ セー ケイ ギンザ)', category: 'OMNI',
    lat: 35.669259, lng: 139.762388,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Inventive à la carte or omakase; dishes have included a Toraya monaka (wafer), pie, spring rolls, fried lobster and a financier. No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: caviar, snow crab, prosciutto, clams, Ezo venison, abalone, lobster.',
    hours_raw: 'Tue–Sat and holidays 17:30–23:00 (L.O. 20:30); closed Sundays and Mondays (Tabelog). 12% service charge.',
    hours: { 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Toraya Ginza Bldg 11F — 5 min from Ginza Stn',
    cuisine: 'Kei Kobayashi × Toraya "gourmet laboratory" · French-rooted à la carte or omakase · caviar and snow crab in a Toraya monaka · ¥20,000–40,000', cuisine_type: 'french',
    website: 'https://www.maisonkei.jp/esprit_c/', gmaps: gm('ESPRIT C. KEI GINZA 虎屋銀座ビル'), menu_url: null,
    notes: "[French · Kei Kobayashi and Toraya's 'gourmet laboratory'] A 30-seat restaurant (12 counter seats around a big open kitchen, tables and a private room) on the 11th floor of the Toraya Ginza Building. It opened in April 2024 as a collaboration between Kei Kobayashi, the Paris chef of three-Michelin-star Restaurant KEI, and the 500-year-old wagashi house Toraya. French at the root but free of genre, with à la carte so you can build your own course, or omakase. October 2026 dishes included an olive-oil and shiso sorbet amuse, caviar and snow crab in a Toraya monaka, tomato and cream sorbet, clams with anchovy, Ezo venison, abalone with bamboo charcoal, matsutake chawanmushi and spring rolls, fried lobster, and a financier with Toraya red-bean paste. 12% service.",
    chef_bio: { chef_name: 'Kei Kobayashi (producer chef, per Tabelog)', roles: ['producer chef'], origin: 'Opened 20 April 2024 (Tabelog)', background: 'Run by Kei Kobayashi (three Michelin stars in France, Restaurant KEI) with Toraya (Tabelog listing; 2026 review).', philosophy: '"Gourmet Laboratory" — French at heart, beyond genre (Tabelog listing).', specialty: 'Caviar and snow crab monaka.',
      anecdotes: [
        { text: '"Next came caviar and snow crab served in a Toraya monaka (wafer)… The finale was a financier like no other! The pairing with Toraya\'s sweet red bean paste was exquisite." — October 2026.', source: R + 'B537291620/' },
        { text: '"The chawanmushi (savory egg custard) was packed with an incredible amount of matsutake mushrooms… the fried lobster was a delightful surprise." — October 2026.', source: R + 'B537868694/' },
      ],
      japanese_sources_summary: '食べログ: ESPRIT C. KEI GINZA(エスプリ セー ケイ ギンザ)、銀座7-8-17 虎屋銀座ビル11F、30席(カウンター12・テーブル12・個室1)、火〜土祝17:30〜23:00、日月休、サービス料12%、2024年4月20日開店、公式サイト maisonkei.jp。店の紹介: フランスのミシュラン三つ星シェフ Kei Kobayashi(英文表記)と500年の歴史の虎屋のコラボ、「美食の研究所」、アラカルトで自分だけのコース、クリスタルキャビア。2026年10月の口コミ: 大きなオープンキッチン、オリーブオイルと大葉のソルベ、マスカットとチーズと生ハム、チーズの花びらのパイ、虎屋の最中にキャビアとズワイガニ、トマトとクリームのソルベ、アンチョビのあさり、蝦夷鹿、竹炭の鮑、松茸たっぷりの茶碗蒸し、松茸の春巻き、オマールのフライ、虎屋のあんこのフィナンシェ、おまかせも。',
      confidence: 'medium', sources: [TB, R + 'B537291620/', R + 'B537868694/', R + 'B537223547/', R + 'B537872905/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open kitchen counter; à la carte or omakase.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-8-17 虎屋銀座ビル 11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目8番17号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537291620/', R + 'B537868694/'],
    price_note: 'No prices captured; reviewers spend ¥20,000–40,000 plus 12% service.', last_checked: TODAY, items: [
      it('キャビアとズワイガニの虎屋最中', '', 'Caviar and snow crab in a Toraya monaka', '', 'À la carte', 'no', 'no', 'October 2026.', 'monaka_caviar'),
      it('オマールのフライ', '', 'Fried lobster', '', 'À la carte', 'no', 'no', 'October 2026.', 'lobster_fry'),
      it('虎屋のあんこのフィナンシェ', '', 'Financier with Toraya red-bean paste', '', 'Dessert', 'no', 'ask', 'October 2026.', 'financier'),
    ] }, {
    cuisine: 'Kei Kobayashi と虎屋の「美食の研究所」・フランス料理を軸にしたアラカルトかおまかせ・虎屋の最中にキャビアとズワイガニ・2万〜4万円',
    neighborhood: '銀座七丁目、虎屋銀座ビル11F。銀座駅から徒歩5分',
    gf_detail: '要確認。創作的なアラカルトかおまかせで、虎屋の最中、パイ、春巻き、オマールのフライ、フィナンシェなどが出ました。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。キャビア、ズワイガニ、生ハム、あさり、蝦夷鹿、鮑、オマール。',
    notes: '[フレンチ・Kei Kobayashi と虎屋の「美食の研究所」] 虎屋銀座ビル11階、大きなオープンキッチンを囲むカウンター12席、テーブル、個室の30席。2024年4月、パリの三つ星「Restaurant KEI」の Kei Kobayashi(英文表記)と、500年の歴史を持つ和菓子の虎屋が組んで開店。フランス料理を軸にジャンルにとらわれない料理を、アラカルトで自分だけのコースにするか、おまかせで。2026年10月は、オリーブオイルと大葉のソルベのアミューズ、虎屋の最中にキャビアとズワイガニ、トマトとクリームのソルベ、アンチョビのあさり、蝦夷鹿、竹炭の鮑、松茸の茶碗蒸しと春巻き、オマールのフライ、虎屋のあんこのフィナンシェなど。サービス料12%。',
  });
}

// ================================================================ 鉄板処 めぐろ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13213025/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '14:30'], ['17:00', '23:30']);
  put({
    id: 'tokyo_teppandokoro_meguro_ginza8', name: '鉄板処 めぐろ (Teppan Dokoro Meguro)', category: 'OMNI',
    lat: 35.66859, lng: 139.759718,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: Osaka-style okonomiyaki, garlic toast with the steak and an omurice-hamburg lunch; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork okonomiyaki, beef, seafood, foie gras, eggs.',
    hours_raw: 'Mon–Fri 11:00–14:30 and 17:00–23:30 (L.O. 23:00); Sat and holidays 11:00–14:30 and 17:00–22:30; closed Sundays (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:00', '14:30'], ['17:00', '22:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Sunwood Bldg 2F — near Shimbashi Stn',
    cuisine: 'Osaka-style teppan from okonomiyaki to steak · ¥9,000 course with foie gras sushi and strip loin · omurice-with-hamburg lunch', cuisine_type: 'okonomiyaki',
    website: 'https://ginza-teppandokoromeguro.com', gmaps: gm('鉄板処 めぐろ 銀座8-5-18'), menu_url: null,
    notes: "[Teppan · Osaka style, okonomiyaki to steak] A 30-seat teppan restaurant (8 at the counter), open since 2017. A young chef grills everything from Osaka-style okonomiyaki to steak, using Tsukiji and Toyosu seafood and beef. The ¥9,000 course in October 2026 ran a fluffy mentaiko omelette, foie gras sushi and a juicy steak with garlic toast. Other menus bring beef-tataki salad, Okukuji eggs with creamy shrimp roe, Tsukiji fish and top sirloin. The pork okonomiyaki is strikingly fluffy. Lunch's Instagram favourite is a runny omurice hiding a thick hamburg. Busy, so book.",
    chef_bio: { chef_name: null, roles: ['chef'], origin: 'Opened 19 September 2017 (Tabelog)', background: 'A young chef per the Tabelog listing, unnamed.', philosophy: 'Simple Osaka basics, grilled at the right temperature (Tabelog listing).', specialty: 'Pork okonomiyaki; steak.',
      anecdotes: [
        { text: '"The mentaiko (spicy cod roe) rolled omelet had a fluffy texture… The foie gras sushi had a melt-in-your-mouth quality." — October 2026, ¥9,000 course.', source: R + 'B536810356/' },
        { text: '"The omurice I was looking forward to featured perfectly runny eggs… What surprised me even more was the hamburger steak inside the omurice!" — October 2026, lunch.', source: R + 'B537408982/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板処 めぐろ、銀座8-5-18 サンウッドビル2F、30席(カウンター8・テーブル22)、平日11:00〜14:30・17:00〜23:30、土祝11:00〜14:30・17:00〜22:30、日休、2017年9月19日開店、公式サイト ginza-teppandokoromeguro.com。店の紹介: 大阪の基本を守り、お好み焼きからステーキまで適温で焼く、築地・豊洲の魚介と牛肉、若いシェフの探究心。2026年10月の口コミ: 9,000円のコース(明太子の玉子焼き、フォアグラの寿司、ステーキとガーリックトースト)、牛たたきのサラダ、奥久慈卵と海老の子のクリーム、築地の鮮魚の鉄板焼き、上サーロイン、ふわふわの豚玉、自家製ハンバーグ、ストリップロインとトースト、昼はハンバーグ入りのとろとろオムライス、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B536810356/', R + 'B537408982/', R + 'B536761446/', R + 'B533164605/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppan; book ahead.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-5-18 サンウッドビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目5番18号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536810356/', R + 'B537408982/'],
    price_note: 'Course price from an October 2026 review.', last_checked: TODAY, items: [
      it('鉄板コース', '', 'Teppan course: mentaiko omelette, foie gras sushi, steak with garlic toast', '¥9,000', 'Courses', 'no', 'no', 'October 2026.', 'course9000'),
      it('豚玉', 'butatama', 'Pork okonomiyaki', '', 'Teppan', 'no', 'no', '', 'butatama'),
      it('ハンバーグ入りオムライス', '', 'Omurice with hamburg inside (lunch)', '', 'Lunch', 'no', 'no', 'October 2026.', 'omurice_hamburg'),
    ] }, {
    cuisine: 'お好み焼きからステーキまでの大阪流の鉄板・フォアグラの寿司やストリップロインの9,000円のコース・ハンバーグ入りオムライスのランチ',
    neighborhood: '銀座八丁目、サンウッドビル2F。新橋駅の近く',
    gf_detail: '実際上グルテンフリーではありません。大阪のお好み焼き、ステーキのガーリックトースト、昼のハンバーグ入りオムライスなどで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。豚玉、牛肉、魚介、フォアグラ、卵。',
    notes: '[鉄板焼き・お好み焼きからステーキまで大阪流] 2017年開店、カウンター8席を含む30席の鉄板焼き。若いシェフが大阪流のお好み焼きからステーキまで、築地・豊洲の魚介と牛肉を焼き上げます。2026年10月の9,000円のコースは、ふわふわの明太子の玉子焼き、フォアグラの寿司、ガーリックトーストを添えたジューシーなステーキ。ほかに牛たたきのサラダ、奥久慈卵と海老の子のクリーム、築地の鮮魚、上サーロインなども。豚玉は驚くほどふわふわ。昼はInstagramで人気の、厚いハンバーグが隠れたとろとろのオムライス。混むので予約を。',
  });
}

save();
