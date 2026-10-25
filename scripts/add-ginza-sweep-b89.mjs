// Ginza Station half-mile sweep (805 m), batch 89 — all-genre phase (all OMNI).
//   + Värmen (Midtown Hibiya seafood bistro; Daikanyama Ata × Niigata winery collaboration)
//   + つばめグリル 銀座本店 (yōshoku chain's main shop, at its current site since 2025)
//   + 鉄板焼き 銀座 ポルトファーロ 本店 (Italian teppanyaki overlooking the Wako clock)
//   + パイス バスコ (Basque bar-restaurant in a Ginza 7-chōme alley; Granada Inc.)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ Värmen
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13219827/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:00', '15:00'], ['18:00', '22:30']); const we = day(['11:00', '16:30'], ['18:00', '22:30']);
  put({
    id: 'tokyo_varmen_midtown_hibiya', name: 'Värmen (ヴァーメン)', category: 'OMNI',
    lat: 35.673781, lng: 139.758809,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seafood bistro (bouillabaisse, lobster); the lunch mains are pasta, gratin and curry, and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood bouillabaisse, chicken curry, liver bolognese.',
    hours_raw: 'Mon–Fri 11:00–15:00 (L.O. 14:00) and 18:00–22:30 (food L.O. 21:30); Sat, Sun and holidays add a 15:00–16:30 café slot; open year-round except building closures (Tabelog). Lunch limited to 1.5 h, dinner 2.5 h when busy.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tokyo Midtown Hibiya 2F, Yūrakuchō 1-chōme — direct from Hibiya Stn, terrace over Hibiya Park',
    cuisine: 'Seafood bistro by Daikanyama’s Ata with a Niigata winery · bouillabaisse (including a Thai version), lobster · ¥1,800–2,000 lunch sets · park-view terrace', cuisine_type: 'french',
    website: 'https://varmen.jp/', gmaps: gm('Värmen 東京ミッドタウン日比谷'), menu_url: null,
    notes: "[Bistro · seafood and wine above Hibiya Park] Open since 2018 on the second floor of Tokyo Midtown Hibiya, a collaboration between Daikanyama's hard-to-book seafood bistro Ata (Michelin-listed ten years running, per the listing) and Niigata's CAVE DOCCI winery. Its signatures are bouillabaisse and seasonal seafood such as lobster; one diner loved a lighter Thai-style bouillabaisse. Lunch is great value: ¥1,800–2,000 sets with a shared salad platter (with couscous) and a choice of pasta (such as liver bolognese), gratin or curry. There are 38 seats at the entrance bar, counter, tables and a terrace over Hibiya Park, handy before the Hibiya theatres. Walk-ins sometimes get in at Saturday noon.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 29 March 2018 (Tabelog)', background: 'Collaboration of Daikanyama seafood bistro Ata and Niigata winery CAVE DOCCI (Tabelog listing). One reviewer connects the Ata chef to Narisawa.', philosophy: null, specialty: 'Bouillabaisse; seafood.',
      anecdotes: [
        { text: '"I wasn\'t sure if this place had the same lobster bouillabaisse, so I opted for the Thai version instead! … The dish was light yet deeply flavorful." — September 2026.', source: R + 'B536206786/' },
        { text: '"I chose the great value lunch set for JPY 1800, which allows you to select a main dish. I ordered the unique liver bolognese." — October 2026, before a theatre show.', source: R + 'B537570956/' },
      ],
      japanese_sources_summary: '食べログ: Värmen(ヴァーメン)、千代田区有楽町1-1-2 東京ミッドタウン日比谷2F、日比谷駅直結、38席(テーブル16・カウンター8・バー6・テラス8)、平日11:00〜15:00・18:00〜22:30、土日祝は15:00〜16:30も営業、混雑時は昼1.5時間・夜2.5時間制、2018年3月29日開店、公式サイト varmen.jp。店の紹介: ミシュランに10年連続掲載の代官山の魚介ビストロ「ata」と新潟のワイナリー「CAVE DOCCI」のコラボ、ブイヤベースやオマール海老など季節の魚介、入口のバー、日比谷公園を望むテラス。2026年の口コミ: タイ風ブイヤベース、チキンカレーとドリンクのセット2,000円、クスクス入りの盛り合わせ、前菜とパスタ・グラタン・カレーから選ぶランチコース、レバーのボロネーゼの1,800円のランチ、観劇前に、土曜の昼に予約なしで入れた。',
      confidence: 'medium', sources: [TB, R + 'B536206786/', R + 'B537570956/', R + 'B534126485/', R + 'B536818220/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Time limits when busy.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-1-2 東京ミッドタウン日比谷 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都千代田区有楽町一丁目1番 (lot) is 75m off for the large Midtown Hibiya block, so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537570956/', R + 'B534126485/'],
    price_note: 'Lunch prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('ランチセット', '', 'Lunch set: salad platter plus a main (pasta, gratin or curry)', '¥1,800', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_set'),
      it('チキンカレー ドリンクセット', '', 'Chicken curry with drink, salad and platter', '¥2,000', 'Lunch', 'ask', 'no', 'August 2026.', 'chicken_curry'),
      it('レバーのボロネーゼ', '', 'Liver bolognese', '', 'Lunch', 'no', 'no', 'October 2026.', 'liver_bolognese'),
      it('ブイヤベース', '', 'Bouillabaisse (Thai version seen)', '', 'Signature', 'ask', 'no', 'September 2026.', 'bouillabaisse'),
    ] }, {
    cuisine: '代官山「ata」と新潟のワイナリーの魚介ビストロ・ブイヤベース(タイ風も)、オマール海老・1,800〜2,000円のランチセット・日比谷公園を望むテラス',
    neighborhood: '有楽町一丁目、東京ミッドタウン日比谷2F。日比谷駅直結、日比谷公園を望むテラス',
    gf_detail: '要確認。ブイヤベースやオマール海老の魚介ビストロで、ランチのメインはパスタ、グラタン、カレー。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介のブイヤベース、チキンカレー、レバーのボロネーゼ。',
    notes: '[ビストロ・日比谷公園を望む魚介とワイン] 2018年から東京ミッドタウン日比谷の2階にある、予約の取りにくい代官山の魚介ビストロ「ata」(紹介文によるとミシュラン10年連続掲載)と新潟のワイナリー「CAVE DOCCI」のコラボ店。看板はブイヤベースとオマール海老など季節の魚介で、軽やかなタイ風ブイヤベースも好評。昼はお得で、クスクス入りのサラダの盛り合わせに、レバーのボロネーゼなどのパスタ、グラタン、カレーから選ぶ1,800〜2,000円のセット。入口のバー、カウンター、テーブル、日比谷公園を望むテラスで38席、日比谷の劇場の前にも便利。土曜の昼なら予約なしで入れることも。',
  });
}

// ================================================================ つばめグリル 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13314027/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '14:00'], ['17:00', '21:00']);
  put({
    id: 'tokyo_tsubame_grill_ginza_honten', name: 'つばめグリル 銀座本店 (Tsubame Grill Ginza)', category: 'OMNI',
    lat: 35.675486, lng: 139.766726,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yōshoku: foil-wrapped Tsubame hamburg, Japanese-style hamburg, steak, seafood cream croquette (breaded) and the stuffed-tomato salad; no source lists sauces or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg, steak, cream croquettes.',
    hours_raw: 'Tue–Sun 11:30–14:00 and 17:00–21:00; closed Mondays (Tabelog; hours may change).',
    hours: { 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, Kon’ya Bldg — 1 min from Ginza-itchōme Stn',
    cuisine: 'Yōshoku chain’s Ginza main shop · foil-wrapped Tsubame hamburg · tomato farci salad · seafood cream croquette · steak · most dishes over ¥2,000', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('つばめグリル 銀座本店 紺屋ビル'), menu_url: null,
    notes: "[Yōshoku · Tsubame Grill's Ginza main shop] The flagship of the Tsubame Grill yōshoku chain, at its current site in Ginza 1-chōme since September 2025, with 40 seats and a calm room. The signature is the Tsubame-style hamburg baked in aluminium foil; there are also Japanese-style and seasonal-vegetable hamburgs, steak and a seafood cream croquette. Nearly everyone remarks on the tomato farci salad, a whole chilled tomato with a filling and dressing. Most dishes are over ¥2,000, and lunch orders go through your phone. Children and strollers are welcome, though there are no high chairs.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened at this site 12 September 2025 (Tabelog)', background: 'Chain flagship ("main store", Tabelog listing).', philosophy: null, specialty: 'Foil-wrapped hamburg; tomato farci salad.',
      anecdotes: [
        { text: '"The \'Tomato Farci Salad\' that comes with the set has a delightful balance of acidity and dressing… I also love the signature Tsubame-style Hamburg steak wrapped in aluminum." — August 2026.', source: R + 'B535571910/' },
        { text: '"I visited with my child and was able to bring in a stroller. However, there were no high chairs." — September 2026.', source: R + 'B536323873/' },
      ],
      japanese_sources_summary: '食べログ: つばめグリル 銀座本店、銀座1-2-1 紺屋ビル、銀座一丁目駅徒歩1分、40席、火〜日11:30〜14:00・17:00〜21:00、月休、2025年9月12日開店、子ども可。2026年の口コミ: 銀座本店は初めて、値上がりしたが味は変わらない、和風ハンバーグのセット、トマトのファルシーサラダ、ふかしたじゃがいも、アルミホイル包みのつばめ風ハンバーグ、ステーキ、ベビーカーで入れたがハイチェアはない、ほとんどの料理が2,000円超、スマホで注文、シーフードのクリームコロッケ、季節野菜のハンバーグとグラスワイン。',
      confidence: 'medium', sources: [TB, R + 'B535571910/', R + 'B536323873/', R + 'B536572523/', R + 'B537006354/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by phone at lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-2-1 紺屋ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座一丁目2番1号 (go) is 43m off, so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535571910/', R + 'B536572523/'],
    price_note: 'No exact prices captured; most dishes over ¥2,000 (September 2026).', last_checked: TODAY, items: [
      it('つばめ風ハンブルグステーキ', '', 'Tsubame-style hamburg baked in foil', '', 'Hamburg', 'ask', 'no', '', 'tsubame_hamburg'),
      it('トマトのファルシーサラダ', '', 'Tomato farci salad (whole stuffed tomato)', '', 'Salad', 'ask', 'ask', '', 'tomato_farci'),
      it('シーフードクリームコロッケ', '', 'Seafood cream croquette', '', 'Fried', 'no', 'no', 'September 2026.', 'cream_croquette'),
    ] }, {
    cuisine: '洋食チェーンの銀座本店・アルミホイル包みのつばめ風ハンバーグ・トマトのファルシーサラダ・シーフードのクリームコロッケ・ステーキ・ほとんどが2,000円超',
    neighborhood: '銀座一丁目、紺屋ビル。銀座一丁目駅から徒歩1分',
    gf_detail: '要確認。ホイル包みのつばめ風ハンバーグ、和風ハンバーグ、ステーキ、衣のあるシーフードのクリームコロッケ、トマトのファルシーサラダなどの洋食。ソースやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、ステーキ、クリームコロッケ。',
    notes: '[洋食・つばめグリルの銀座本店] 洋食チェーン「つばめグリル」の本店で、2025年9月から銀座一丁目の今の場所に。40席の落ち着いた店内。看板はアルミホイルで包んで焼くつばめ風ハンバーグで、和風や季節野菜のハンバーグ、ステーキ、シーフードのクリームコロッケも。ほぼ誰もが触れるのが、冷やしたトマトを丸ごと使い具とドレッシングを合わせたトマトのファルシーサラダ。ほとんどの料理が2,000円超で、昼はスマホで注文。子どもやベビーカーも歓迎ですが、ハイチェアはありません。',
  });
}

// ================================================================ 鉄板焼き 銀座 ポルトファーロ 本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13000583/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '16:30'], ['17:30', '21:30']);
  put({
    id: 'tokyo_porto_faro_ginza', name: '鉄板焼き 銀座 ポルトファーロ 本店 (Porto Faro)', category: 'OMNI',
    lat: 35.671318, lng: 139.764517,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian-style teppanyaki courses (Matsusaka beef at lunch); no source describes sauces or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppan beef courses.',
    hours_raw: 'Daily 11:30–15:00 lunch (L.O. 14:00), 14:30–16:30 afternoon (L.O. 16:00), 17:30–21:30 dinner (L.O. 20:00); closes on building closure days (Tabelog). 10% service charge; private room ¥5,000.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Ginza Folly Bldg 8F–9F, on the main crossing — 1 min from Ginza Stn exit A1',
    cuisine: 'Italian teppanyaki by hotel-trained chefs · window tables facing the Wako clock tower · Matsusaka beef lunch · 8F tables, 9F teppan counter', cuisine_type: 'other',
    website: 'https://portofaro.com/', gmaps: gm('ポルトファーロ 銀座フォリービル'), menu_url: null,
    notes: "[Teppanyaki · Italian teppan with a view of the Wako clock] A 40-seat teppanyaki restaurant on the eighth and ninth floors above Ginza crossing. Big windows face the Wako clock tower, and hotel-trained chefs blend Italian ideas with Japanese ones on the teppan. Lunch plans run to Matsusaka beef, which reviewers call the highlight. The window seats are the draw, but they aren't guaranteed; three 2026 reviewers were seated on the upper floor or next to noisy neighbours, and seatings are timed. Staff offer to take photos as plates arrive. Children welcome; 10% service charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza main shop (Tabelog listing name)', background: 'Hotel-trained chefs (Tabelog listing).', philosophy: null, specialty: 'Italian-style teppanyaki.',
      anecdotes: [
        { text: '"The food was delicious overall. The highlight was definitely the Matsusaka beef, which was exquisite. It was a bit disappointing that there was a time limit for our meal." — September 2026, lunch.', source: R + 'B536058818/' },
        { text: '"They kindly offered to take photos when we received our plates and again when we were leaving." — October 2026.', source: R + 'B538033363/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼き 銀座 ポルトファーロ 本店、銀座5-7-19 銀座フォリービル8F、銀座駅A1出口徒歩1分、40席(8Fテーブル・9Fカウンター・個室1、個室料5,000円)、毎日ランチ11:30〜15:00・アフタヌーン14:30〜16:30・ディナー17:30〜21:30、不定休(ビル休館日)、サービス料10%、席の指定不可、子ども可、公式サイト portofaro.com。店の紹介: 和光の時計台を望む大きな窓、ホテルで腕を磨いたシェフのイタリアンの要素を取り入れた鉄板焼き。2026年の口コミ: 松阪牛が絶品、時間制、上の階の端の席で景色が見えなかった声が複数、隣席がうるさかった、料理を受け取るときと帰りに写真を撮ってくれた。',
      confidence: 'medium', sources: [TB, R + 'B536058818/', R + 'B538033363/', R + 'B537338682/', R + 'B536119868/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seat requests not guaranteed.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-7-19 銀座フォリービル 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目7番19号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536058818/'],
    price_note: 'No course prices captured; lunch ¥6,000–8,000 in one review, 10% service.', last_checked: TODAY, items: [
      it('松阪牛ランチ', '', 'Lunch plan with Matsusaka beef', '', 'Lunch', 'ask', 'no', 'September 2026.', 'matsusaka_lunch'),
      it('サービス料', '', 'Service charge', '10%', 'Charge', '', '', 'Tabelog.', 'service'),
    ] }, {
    cuisine: 'ホテル出身のシェフのイタリアン鉄板焼き・和光の時計台を望む窓際席・松阪牛のランチ・8Fテーブル、9F鉄板カウンター',
    neighborhood: '銀座五丁目、銀座四丁目交差点に面した銀座フォリービル8F〜9F。銀座駅A1出口から徒歩1分',
    gf_detail: '要確認。イタリアン風の鉄板焼きのコース(昼は松阪牛)。ソースやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。牛肉の鉄板焼きのコース。',
    notes: '[鉄板焼き・和光の時計台を望むイタリアン鉄板] 銀座の交差点の上、8階と9階にある40席の鉄板焼き。大きな窓から和光の時計台が見え、ホテルで腕を磨いたシェフがイタリアンと和の要素を鉄板で合わせます。昼のプランは松阪牛まであり、口コミで一番の評価。窓際の席が人気ですが指定はできず、2026年には上の階の席や騒がしい隣席に当たったという声が3件、時間制です。料理が届いたときに写真を撮ってくれるサービスも。子ども可、サービス料10%。',
  });
}

// ================================================================ パイス バスコ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13147579/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.paisvasco.jp/';
  const wd = day(['17:30', '02:00']); const sat = day(['15:00', '23:00']);
  put({
    id: 'tokyo_pais_vasco_ginza', name: 'パイス バスコ (Pais Vasco)', category: 'OMNI',
    lat: 35.670481, lng: 139.760607,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Basque dishes such as pil-pil (salt cod slow-cooked in olive oil with garlic and chilli, per the official site), jamón, tortilla, Galician octopus, crab gratin and squid-ink rice; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: salt cod, jamón, octopus, beef; a watercress salad and Basque salad are not described.',
    hours_raw: 'Mon–Fri 17:30–02:00 (L.O. 01:00; Mon food L.O. 22:00); Sat and holidays 15:00–23:00 (L.O. 22:00); closed Sundays (open 15:00–23:00 on holiday Sundays, then closed Monday); rice dishes L.O. 21:30 Mon, Sat and holidays (official site, Tabelog). Charge ¥400.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: sat }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme back alley, entrance down the narrow lane by the vending machines between the Tōgō and Oritchin buildings — 3 min from Ginza Stn exit C3',
    cuisine: 'Basque bar-restaurant in a three-storey red-brick house · pil-pil, pintxos, jamón, txakoli poured from height · 50+ Spanish wines · open to 2 am on weekdays', cuisine_type: 'other',
    website: SITE, gmaps: gm('パイス バスコ 銀座7丁目'), menu_url: null,
    notes: "[Spanish · Basque food in a red-brick Ginza 7-chōme alley house] A three-storey red-brick house at the end of a narrow alley, open since 2012: a bar on the ground floor and tables on the two floors above, 40 seats in all. The kitchen cooks Basque and Spanish classics plus its own dishes. The house signature is pil-pil, salt cod slow-cooked in olive oil with garlic and chilli until cod and oil meld into one; reviewers add Iberian ham, tortilla, Galician octopus, crab gratin, wine-braised beef and squid-ink rice. Txakoli is poured from height in the Basque way, alongside 50+ Spanish wines (mostly by the bottle). Staff with Dalí moustaches set the mood. Open to 2 am on weekdays; charge ¥400; smoking only at the entrance terrace.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 20 September 2012 (Tabelog)', background: 'Run by Granada Inc. (official site).', philosophy: null, specialty: 'Pil-pil; txakoli.',
      anecdotes: [
        { text: '"The staff, sporting Salvador Dalí-style mustaches, really enhance the atmosphere… this time the watercress salad was a delightful discovery." — September 2026, third visit.', source: R + 'B494065727/' },
        { text: '"We started with a toast using Basque sparkling wine, \'Chacoli.\' The pouring method was quite unique!" — October 2026.', source: R + 'B537082818/' },
      ],
      japanese_sources_summary: '公式サイト(paisvasco.jp、Granada Inc.): 銀座7丁目の路地裏の一軒家、スペイン・バスク地方の料理店、バスクやスペインの伝統料理とオリジナル料理、バスクの地酒チャコリなどスペインワイン常時50種類以上、1階はバースタイル・2,3階はテーブル席、郷土料理ピルピル(干しダラをオリーブオイル、ニンニク、唐辛子で沸騰させずに煮る)、チャコリは高い位置から注いで泡立てる、40席、月〜金17:30〜26:00、土祝15:00〜23:00、日休。食べログ: 銀座7-3-16、銀座駅C3出口徒歩3分、東郷ビルとオリッチンビルの自販機横の細い路地の奥、チャージ400円、入口のテラス席のみ喫煙可、2012年9月20日開店。2026年の口コミ: ダリ風の口ひげのスタッフ、クレソンのサラダ、イベリコの生ハム、スペインオムレツ、ガリシア風タコ、チャコリの注ぎ方、タパスの盛り合わせ、バスクサラダ、カニのグラタン、牛肩ロースの赤ワイン煮、イカ墨のリゾット、ワインはボトル中心。',
      confidence: 'high', sources: [SITE, TB, R + 'B494065727/', R + 'B537082818/', R + 'B536862884/', R + 'B535677769/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bar on 1F; tables upstairs.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-3-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目3番16号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B537082818/'],
    price_note: 'No dish prices captured; charge ¥400 (Tabelog).', last_checked: TODAY, items: [
      it('ピルピル', 'pirupiru', 'Pil-pil: salt cod slow-cooked in olive oil, garlic and chilli', '', 'Basque', 'ask', 'no', 'Official site.', 'pilpil'),
      it('チャコリ', 'chakori', 'Txakoli, poured from height', '', 'Drinks', 'ask', 'ask', 'Official site.', 'txakoli'),
      it('イカ墨のリゾット', '', 'Squid-ink risotto', '', 'Rice', 'ask', 'no', 'October 2026.', 'squid_ink_rice'),
      it('チャージ', '', 'Table charge', '¥400', 'Charge', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '赤レンガの3階建ての一軒家のバスク料理とバル・ピルピル、ピンチョス、生ハム、高い位置から注ぐチャコリ・スペインワイン50種以上・平日は26時まで',
    neighborhood: '銀座七丁目の路地裏、東郷ビルとオリッチンビルの自販機横の細い路地の奥。銀座駅C3出口から徒歩3分',
    gf_detail: '要確認。ピルピル(公式サイトによると干しダラをオリーブオイル、ニンニク、唐辛子で煮る)、生ハム、トルティージャ、ガリシア風タコ、カニのグラタン、イカ墨の米料理などのバスク料理。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。干しダラ、生ハム、タコ、牛肉。クレソンのサラダやバスクサラダの内容は書かれていません。',
    notes: '[スペイン料理・銀座七丁目の路地裏の赤レンガの一軒家でバスク料理] 細い路地の奥の赤レンガの3階建てで、2012年開店。1階はバー、上の2フロアはテーブル席で計40席。バスクやスペインの伝統料理にオリジナル料理も。看板は干しダラをオリーブオイル、ニンニク、唐辛子で沸騰させずに煮て渾然一体にしたピルピルで、口コミではイベリコの生ハム、トルティージャ、ガリシア風タコ、カニのグラタン、牛肉の赤ワイン煮、イカ墨の米料理も。チャコリはバスク流に高い位置から注ぎ、スペインワインは50種以上(ボトル中心)。ダリ風の口ひげのスタッフが雰囲気を盛り上げます。平日は26時まで、チャージ400円、喫煙は入口のテラスのみ。',
  });
}

save();
