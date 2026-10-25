// Ginza Station half-mile sweep (805 m), batch 92 — all-genre phase (all OMNI).
//   + 筋肉食堂 銀座コリドー店 (high-protein chain; PFC and calories on every item)
//   + HESTIA GINZA (medicinal mushroom hot pot and wagyu; asks about allergies in advance)
//   + 銀座朝食ラボ (Hotel Musse Ginza Meitetsu breakfast buffet)
//   + 個室 炭火焼肉 有田牛 本店 (all-private-room yakiniku; smoking allowed)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 筋肉食堂 銀座コリドー店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13229163/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_kinniku_shokudo_ginza_corridor', name: '筋肉食堂 銀座コリドー店 (Kinniku Shokudo)', category: 'OMNI',
    lat: 35.670471, lng: 139.759694,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. High-protein menu (lean-beef hamburg, skinless grilled chicken, chicken-breast steak, salmon, red-meat platters with salt or wasabi) with calories and PFC listed for every item; gluten and sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat-and-fish protein menu; meals open with a mini protein shake.',
    hours_raw: 'Mon–Fri 11:30–15:00 (L.O. 14:30) and 17:30–23:00 (food L.O. 22:00); Sat 11:30–23:00; Sun and holidays 11:30–20:30 (L.O. 20:00); closures may vary (Tabelog). No cover charge.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: day(['11:30', '23:00']), 6: day(['11:30', '20:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Corridor-gai, Ginza 7-2, 2F (stairs, no lift) — 5 min from Ginza Stn exit C3',
    cuisine: 'High-protein, low-fat chain · calories and PFC on every dish · lean-beef hamburg, 200 g chicken-breast steak, skinless grilled chicken, steaks, salmon · welcome protein shot', cuisine_type: 'other',
    website: 'http://kinnikushokudo.jp', gmaps: gm('筋肉食堂 銀座コリドー店'), menu_url: null,
    notes: "[Health food · the protein canteen on Corridor-gai] A 44-seat branch of the Kinniku Shokudō (\"Muscle Canteen\") chain, open since 2018 up a flight of stairs on Ginza Corridor-gai. Every item lists calories and protein-fat-carb numbers, and meals start with a small cup of protein shake. The signatures are a lean-beef hamburg and a surprisingly moist 200 g chicken-breast steak, plus skinless grilled chicken, domestic beef steaks, salmon and limited red-meat platters, with craft beer or wine. One dieting regular credits it with a 10 kg loss; another diner called the value merely average for Ginza. Seat-only bookings are capped at 90 minutes when busy; no cover charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 November 2018 (Tabelog)', background: 'Chain (kinnikushokudo.jp).', philosophy: 'High protein, low calorie (Tabelog listing).', specialty: 'Lean-beef hamburg; chicken-breast steak.',
      anecdotes: [
        { text: '"I ordered the restaurant\'s signature dish, the \'200g Chicken Breast Steak.\' I was amazed by how moist and juicy it was." — October 2026, weekday lunch.', source: R + 'B537543759/' },
        { text: '"I really appreciated that all the menu items have PFC (Protein, Fat, Carbohydrates) and calorie information." — September 2026, fifth visit.', source: R + 'B497061238/' },
      ],
      japanese_sources_summary: '食べログ: 筋肉食堂 銀座コリドー店、銀座7-2 2F(エレベーターなし)、銀座駅C3出口徒歩5分、44席(ソファ34・カウンター10)、平日11:30〜15:00・17:30〜23:00、土11:30〜23:00、日祝11:30〜20:30、チャージなし、混雑時の席のみ予約は90分、2018年11月30日開店、公式サイト kinnikushokudo.jp。店の紹介: 看板の牛赤身ハンバーグ、国産牛ステーキ、サーモンなど高たんぱく低カロリー、銀座店限定のクラフトビール、スパークリングワインのクーポン、レディースランチ。2026年の口コミ: 全品にPFCとカロリー表示、赤身肉の盛り合わせ(塩かわさび)、来店時に小さなプロテイン、皮なしの鶏の炭火焼きとワイン、名物の鶏むね肉ステーキ200gがしっとり、コスパは普通との声。',
      confidence: 'medium', sources: [TB, R + 'B537543759/', R + 'B497061238/', R + 'B531223170/', R + 'B534819619/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Nutrition numbers on the menu.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [{ text: 'Calories and PFC listed for every menu item.', source: R + 'B497061238/' }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2 2F(銀座コリドー街)',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537543759/', TB],
    price_note: 'No prices captured; lunch ¥1,000–2,000, dinner ¥3,000–10,000 in reviews.', last_checked: TODAY, items: [
      it('牛赤身ハンバーグ', '', 'Lean-beef hamburg', '', 'Signature', 'ask', 'no', 'Tabelog listing.', 'lean_hamburg'),
      it('鶏むね肉ステーキ 200g', '', 'Chicken-breast steak, 200 g', '', 'Signature', 'ask', 'no', 'October 2026.', 'chicken_breast'),
      it('皮なし鶏の炭火焼き', '', 'Skinless charcoal-grilled chicken', '', 'Grill', 'ask', 'no', 'October 2026.', 'skinless_chicken'),
    ] }, {
    cuisine: '高たんぱく低脂質のチェーン・全品にカロリーとPFC表示・牛赤身ハンバーグ、鶏むね肉ステーキ200g、皮なし鶏の炭火焼き、ステーキ、サーモン・来店時のプロテイン',
    neighborhood: '銀座コリドー街、銀座7-2の2F(階段、エレベーターなし)。銀座駅C3出口から徒歩5分',
    gf_detail: '要確認。牛赤身ハンバーグ、皮なしの鶏の炭火焼き、鶏むね肉ステーキ、サーモン、赤身肉の盛り合わせ(塩かわさび)など高たんぱくのメニューで全品にカロリーとPFC表示。グルテンやソースについては書かれていません。',
    vegan_detail: 'ヴィーガンではありません。肉と魚のたんぱく質メニューで、最初に小さなプロテインが出ます。',
    notes: '[ヘルシー・コリドー街のたんぱく質食堂] 2018年からコリドー街の階段を上がった2階にある、「筋肉食堂」チェーンの44席の店。全品にカロリーとたんぱく質・脂質・炭水化物の数値があり、最初に小さなカップのプロテインが出ます。看板は牛赤身ハンバーグと驚くほどしっとりした鶏むね肉ステーキ200gで、皮なしの鶏の炭火焼き、国産牛ステーキ、サーモン、限定の赤身肉の盛り合わせなどに、クラフトビールやワインも。10kg減量したという常連がいる一方、銀座にしてはコスパは普通という声も。混雑時の席のみ予約は90分、チャージなし。',
  });
}

// ================================================================ HESTIA GINZA
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13271910/'; const R = TB + 'dtlrvwlst/';
  const ms = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_hestia_ginza', name: 'HESTIA GINZA', category: 'OMNI',
    lat: 35.66926, lng: 139.762106,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks guests to raise allergies and dislikes in advance. Menu is a medicinal mushroom hot pot, A5 wagyu and seasonal-vegetable courses, plus pasta at lunch; no source says what is gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu steak courses; the mushroom soup’s base is not described.',
    hours_raw: 'Mon–Sat 11:30–15:00 (food L.O. 14:00) and 17:00–23:00 (food L.O. 21:30); Sun 11:30–15:00; closed public holidays (Tabelog). Semi-private rooms +10%, private rooms +20%.',
    hours: { 0: ms, 1: ms, 2: ms, 3: ms, 4: ms, 5: ms, 6: day(['11:30', '15:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Ginza 777 Bldg 2F — 5 min from Ginza Stn exit A2',
    cuisine: 'Medicinal mushroom "detox" hot pot · A5 Ōmi beef and Shinshū beef steak courses · seasonal-vegetable lunch sets from ¥2,000 with mushroom soup · six private rooms', cuisine_type: 'other',
    website: 'https://hestia-ginza.com/', gmaps: gm('HESTIA GINZA 銀座777ビル'), menu_url: null,
    notes: "[Medicinal hot pot · mushroom soup and wagyu in Ginza 7-7-7] A stylish 44-seat second-floor restaurant, open since 2022, built around a medicinal mushroom soup sold as a detox, served as a hot pot, alongside A5 Ōmi beef and fine wine. Fans return for the mushroom hot pot and say they feel great the next day. Lunch sets start at ¥2,000 (a seasonal-vegetable cold pasta came with the mushroom soup, salad and dessert). Dinner courses feature wagyu; one diner rated a Shinshū beef rib-roast steak the highlight but found the course thin for the price. Staff are warm, and there are six private rooms (2–8; +10–20%). The shop asks you to mention allergies when booking.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2022 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Medicinal mushroom hot pot.',
      anecdotes: [
        { text: '"I enjoyed the mushroom hot pot. It was a great detox! I felt fantastic the next day!" — July 2026, second visit.', source: R + 'B531789692/' },
        { text: '"The lunch menu started from just JPY 2000!… I ordered the cold pasta this time. It came with their signature mushroom soup, a salad, and dessert!" — August 2026.', source: R + 'B535346112/' },
      ],
      japanese_sources_summary: '食べログ: HESTIA GINZA、銀座7-7-7 銀座777ビル2F、新橋駅銀座口・銀座駅A2出口から徒歩5分、44席、2〜8名の個室6室(半個室料10%・完全個室料20%)、月〜土11:30〜15:00・17:00〜23:00、日11:30〜15:00、祝休、アレルギーや苦手な食材は事前に相談を、2022年6月1日開店、公式サイト hestia-ginza.com。店の紹介: 高級きのこの薬膳デトックススープ、A5ランクの近江牛、ワイン。2026年の口コミ: きのこ鍋でデトックス、翌日の調子がよい、おしゃれな店内、親切なスタッフ、ランチは2,000円から(季節野菜の冷製パスタ、きのこスープ、サラダ、デザート)、コースは値段の割に物足りないが信州牛リブロースステーキが印象的との声。',
      confidence: 'medium', sources: [TB, R + 'B531789692/', R + 'B535346112/', R + 'B536053583/', R + 'B533053076/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Mention allergies when booking.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Reservation notes ask guests to consult the restaurant in advance about allergies or dislikes.', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-7-7 銀座777ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目7番7号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535346112/'],
    price_note: 'Lunch from ¥2,000 (August 2026); dinner courses ¥10,000–15,000 in one review.', last_checked: TODAY, items: [
      it('薬膳きのこ鍋', '', 'Medicinal mushroom hot pot', '', 'Signature', 'ask', 'ask', '', 'mushroom_pot'),
      it('ランチセット', '', 'Lunch set: main (e.g. cold pasta), mushroom soup, salad, dessert', '¥2,000〜', 'Lunch', 'ask', 'no', 'August 2026.', 'lunch'),
      it('信州牛リブロースステーキ', '', 'Shinshū beef rib-roast steak (course)', '', 'Courses', 'ask', 'no', 'September 2026.', 'shinshu_steak'),
    ] }, {
    cuisine: '薬膳きのこの「デトックス」鍋・A5近江牛や信州牛ステーキのコース・きのこスープ付きの季節野菜のランチ2,000円から・個室6室',
    neighborhood: '銀座七丁目、銀座777ビル2F。銀座駅A2出口から徒歩5分',
    gf_detail: '予約時に要確認。店はアレルギーや苦手な食材を事前に相談するよう求めています。薬膳きのこ鍋、A5和牛、季節野菜のコースに昼はパスタも。グルテンフリーの料理は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛ステーキのコース。きのこスープのベースは書かれていません。',
    notes: '[薬膳鍋・銀座7-7-7のきのこスープと和牛] 2022年開店、ビル2階のおしゃれな44席。デトックスとうたう薬膳きのこスープを鍋で出し、A5近江牛やワインとともに。リピーターはきのこ鍋が目当てで、翌日の調子がよいとか。ランチは2,000円から(季節野菜の冷製パスタにきのこスープ、サラダ、デザート)。夜は和牛のコースで、信州牛リブロースステーキが一番だったが値段の割に物足りないという声も。スタッフは温かく、2〜8名の個室が6室(10〜20%加算)。予約時にアレルギーを伝えるよう案内があります。',
  });
}

// ================================================================ 銀座朝食ラボ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13259557/'; const R = TB + 'dtlrvwlst/';
  const d = day(['07:00', '11:00']);
  put({
    id: 'tokyo_ginza_choshoku_lab', name: '銀座朝食ラボ (Ginza Choshoku Lab)', category: 'OMNI',
    lat: 35.667917, lng: 139.76364,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A 50-minute breakfast buffet of small Japanese and Western dishes made with homemade dashi, plus bread, curry, live sukiyaki and pork shabu-shabu; no dish is labelled for gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based dishes, sukiyaki and pork shabu-shabu.',
    hours_raw: 'Daily 7:00–11:00 (last entry 10:00; 50-minute plan); bookings for the 7:00 entry only; hotel guests take priority (Tabelog). No service or cover charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hotel Musse Ginza Meitetsu 2F, Ginza 7-chōme — 4 min from Higashi-Ginza Stn',
    cuisine: 'Hotel breakfast buffet · small-bowl Japanese and Western dishes in a wooden masu box · live sukiyaki and pork shabu-shabu · curry, bread, desserts · ¥2,700 for 50 min', cuisine_type: 'other',
    website: 'https://choshoku.neu-inc.Tokyo', gmaps: gm('銀座朝食ラボ ホテルミュッセ銀座名鉄'), menu_url: null,
    notes: "[Breakfast · hotel buffet with live sukiyaki] A 46-seat breakfast-only buffet on the second floor of Hotel Musse Ginza Meitetsu, open to non-guests since 2021 (enter from the hotel's second floor, which confuses some). It's a 50-minute all-you-can-eat (¥2,700 in September 2026) of small bowls made with homemade dashi, arranged prettily in a wooden masu box. Staff cook live sukiyaki and pork shabu-shabu in front of you, and there's salad, bread, curry and desserts; the grape juice gets praise. Calm and bright with attentive staff. The common gripe is that 50 minutes feels short; hotel guests take priority when busy.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 July 2021 (Tabelog)', background: 'Hotel restaurant.', philosophy: null, specialty: 'Small-bowl breakfast; live sukiyaki.',
      anecdotes: [
        { text: '"The all-you-can-eat option is JPY 2700 for 50 minutes… You can enjoy all-you-can-eat Sukiyaki and Pork Shabu-Shabu!" — September 2026.', source: R + 'B534793976/' },
        { text: '"Each item is carefully prepared with homemade dashi, and not only is it visually stunning, but the quality of the flavors is exceptional." — September 2026.', source: R + 'B535681033/' },
      ],
      japanese_sources_summary: '食べログ: 銀座朝食ラボ、銀座7-12-9 ホテルミュッセ銀座名鉄2F、東銀座駅徒歩4分、46席、毎日7:00〜11:00(最終入店10:00、50分制)、予約は7:00入店のみ、混雑時は宿泊客優先、サービス料・チャージなし、2021年7月1日開店、公式サイト choshoku.neu-inc.Tokyo。店の紹介: 手作りの和洋の小鉢のホテルビュッフェ。2026年の口コミ: 50分2,700円の食べ放題、ホテル2階からの入口が分かりにくい、すき焼きと豚しゃぶの食べ放題、自家製だしの小鉢、明るく清潔、丁寧なスタッフ、升に盛った料理、サラダ・パン・カレー・デザート、ぶどうジュース、50分は短いとの声。',
      confidence: 'medium', sources: [TB, R + 'B534793976/', R + 'B535681033/', R + 'B536083228/', R + 'B536116210/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buffet; 50-minute limit.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-12-9 ホテルミュッセ銀座名鉄 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目12番9号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534793976/'],
    price_note: 'Buffet price from a September 2026 review.', last_checked: TODAY, items: [
      it('朝食ビュッフェ(50分)', '', 'Breakfast buffet, 50 minutes', '¥2,700', 'Buffet', 'ask', 'no', 'September 2026.', 'buffet'),
      it('すき焼き', 'sukiyaki', 'Live sukiyaki', '', 'Buffet', 'ask', 'no', '', 'sukiyaki'),
      it('豚しゃぶ', '', 'Live pork shabu-shabu', '', 'Buffet', 'ask', 'no', '', 'pork_shabu'),
    ] }, {
    cuisine: 'ホテルの朝食ビュッフェ・升に盛る和洋の小鉢・目の前で作るすき焼きと豚しゃぶ・カレー、パン、デザート・50分2,700円',
    neighborhood: 'ホテルミュッセ銀座名鉄2F、銀座七丁目。東銀座駅から徒歩4分',
    gf_detail: '要確認。自家製だしの和洋の小鉢に、パン、カレー、目の前で作るすき焼きと豚しゃぶの50分の朝食ビュッフェ。グルテンについての表示は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。だしを使った料理、すき焼き、豚しゃぶ。',
    notes: '[朝食・目の前のすき焼き付きホテルビュッフェ] ホテルミュッセ銀座名鉄の2階にある46席の朝食専門ビュッフェで、2021年から宿泊客以外も利用可(ホテル2階からの入口は分かりにくいとの声)。50分の食べ放題(2026年9月は2,700円)で、自家製だしの小鉢を升にきれいに盛れます。すき焼きと豚しゃぶはスタッフが目の前で作り、サラダ、パン、カレー、デザートも。ぶどうジュースが好評。明るく落ち着いた店内で接客も丁寧。よくある不満は50分が短いこと。混雑時は宿泊客優先です。',
  });
}

// ================================================================ 個室 炭火焼肉 有田牛 本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13203400/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['17:00', '23:00']);
  put({
    id: 'tokyo_arita_gyu_honten_ginza', name: '個室 炭火焼肉 有田牛 本店 (Sumibi Yakiniku Arita Gyu)', category: 'OMNI',
    lat: 35.669783, lng: 139.759526,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal yakiniku of Arita wagyu, offal and green-onion-wrapped tongue with dashi, plus cold noodles; sauces are not described. The booking form asks about allergies.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant.',
    hours_raw: 'Mon–Fri 17:00–23:00 (L.O. 22:00); Sat 17:00–22:00 (L.O. 21:00); closed Sundays and holidays (Tabelog). Courses by reservation; cancellation fees apply.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: day(['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Meikō Bldg 2F, Corridor-gai between Shimbashi and Yūrakuchō — 3 min from Shimbashi Stn',
    cuisine: 'All-private-room charcoal yakiniku of Arita wagyu (2025 World Steak Challenge gold, per the listing) · green-onion-wrapped tongue in dashi · offal · cold noodles · pick your own packed meat · smoking allowed', cuisine_type: 'other',
    website: 'http://platinumfish.jp/shoplist/sumibi-yakiniku-aritagyu/', gmaps: gm('個室 炭火焼肉 有田牛 本店 銀座'), menu_url: null,
    notes: "[Yakiniku · private-room Arita wagyu on Corridor-gai] Since 2017 every seat here has been a fully private room, and smoking is allowed at the table, so it's a business-dinner standby but not for smoke-sensitive diners. The house beef is Arita wagyu, which the listing says won gold at the 2025 World Steak Challenge. The famous dish is a limited green-onion-wrapped tongue, bundled like an inari pouch and served with dashi; there's also offal and cold noodles, and à la carte diners pick their meat from packed portions. A gentle charcoal fire means no rushing. Courses with all-you-can-drink keep it reasonable, and ask about rare sake off the menu. The booking form asks about allergies.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 September 2017 (Tabelog)', background: 'Group-run (platinumfish.jp).', philosophy: null, specialty: 'Arita wagyu; green-onion-wrapped tongue.',
      anecdotes: [
        { text: '"The tongue wrapped with green onions, resembling a pouch-like inari, was deliciously tricky to handle!… The restaurant offers private rooms and allows smoking." — March 2026, course.', source: R + 'B525419501/' },
        { text: '"The charcoal grill isn’t too strong, allowing for a slow and steady cooking process without the need to rush flipping the meat." — September 2026.', source: R + 'B535226418/' },
      ],
      japanese_sources_summary: '食べログ: 個室 炭火焼肉 有田牛 本店、銀座8-2-15 明興ビル2F、コリドー街の新橋駅と有楽町駅の中間、新橋駅徒歩3分、平日17:00〜23:00、土17:00〜22:00、日祝休、全席完全個室、席で喫煙可、コースは要予約、キャンセル料あり、予約時に初来店かとアレルギー・苦手な食材を記入、2017年9月4日開店、公式サイト platinumfish.jp。店の紹介: 2025年ワールドステーキチャレンジ金賞、ミシュランシェフも認める黒毛和牛、人気No.1のだしで食べるネギ巻きタン、冷麺、新鮮なホルモン、パック詰めの肉を選べる(アラカルトのみ)。2026年の口コミ: いなりのようなネギ巻きタン、個室で喫煙可、メニューにない希少な日本酒を頼めることも、炭火が強すぎずゆっくり焼ける、飲み放題付きで手頃、接待向き。',
      confidence: 'medium', sources: [TB, R + 'B525419501/', R + 'B535226418/', R + 'B529669803/', R + 'B537037697/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; smoking allowed at the table.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [],
      staff_allergy_handling: [{ text: 'Table bookings ask guests to note food allergies and dislikes.', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-2-15 明興ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目2番15号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525419501/', TB],
    price_note: 'No prices captured; ¥8,000–15,000 in reviews.', last_checked: TODAY, items: [
      it('ネギ巻きタン', '', 'Green-onion-wrapped tongue with dashi', '', 'Signature', 'ask', 'no', 'Limited quantity.', 'negi_tan'),
      it('ホルモン', 'horumon', 'Offal', '', 'Yakiniku', 'ask', 'no', '', 'horumon'),
      it('冷麺', 'reimen', 'Cold noodles', '', 'Noodles', 'ask', 'no', '', 'reimen'),
    ] }, {
    cuisine: '全室個室の有田牛の炭火焼肉(紹介文によると2025年ワールドステーキチャレンジ金賞)・だしで食べるネギ巻きタン・ホルモン・冷麺・パックの肉を選べる・喫煙可',
    neighborhood: '銀座八丁目、明興ビル2F。コリドー街の新橋と有楽町の間、新橋駅から徒歩3分',
    gf_detail: '要確認。有田牛の炭火焼肉、ホルモン、だしで食べるネギ巻きタン、冷麺。たれは書かれていません。予約時にアレルギーを記入する欄があります。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉店。',
    notes: '[焼肉・コリドー街の個室で有田牛] 2017年から全席が完全個室で、席での喫煙も可。接待の定番ですが、煙が苦手な人には向きません。牛肉は紹介文によると2025年ワールドステーキチャレンジで金賞の有田牛。名物は数量限定のネギ巻きタンで、いなりのように包んでだしで食べます。ホルモンや冷麺もあり、アラカルトならパック詰めの肉を自分で選べます。炭火が穏やかで急がず焼けます。飲み放題付きのコースなら手頃で、メニューにない希少な日本酒を頼めることも。予約時にアレルギーを尋ねられます。',
  });
}

save();
