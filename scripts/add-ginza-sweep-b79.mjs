// Ginza Station half-mile sweep (805 m), batch 79 — all-genre phase (all OMNI).
//   + 銀座-LAZY (36-year Italian; precious.jp names 一戸 and chef 石川 but not who owns it → OMNI)
//   + レ・コパン ドゥ ドミニク・ブシェ (Dominique Bouchet bistronomy; part of the Bouchet group)
//   + 焼うおいし川 銀座凛華楼 ("yaki-uo" fish yakiniku by Tsukiji Aozora's founder; Mitsukoshi annex 12F)
//   + 銀座フィッシュバーガー NAGOMI (grilled-fish burgers, Kyōbashi)
// Skipped: 銀座横丁 13292621 (0 reviews). BAR THIRD PLACE LODGE 13288648 (bar) added to skip set.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座-LAZY
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13029353/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://precious.jp/articles/-/1419';
  const d = day(['17:00', '23:00']);
  put({
    id: 'tokyo_ginza_lazy_ginza1', name: '銀座-LAZY (ギンザ・レイジー)', category: 'OMNI',
    lat: 35.674812, lng: 139.766553,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The famous dish is a Gorgonzola and French-bread gratin and a garlic toast comes with the cover; baked oysters, grilled caciocavallo and squid-ink risotto are also on the menu. No source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: Gorgonzola gratin, oysters, squid, cheese.',
    hours_raw: 'Mon–Sat and holidays 17:00–23:00 (L.O. 22:00); closed Sundays (Tabelog). ¥500 cover (garlic toast and water). One September 2026 diner had heard it might close — check.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 1-chōme, Ginza Big West Bldg 7F — 3 min from Ginza-itchōme Stn',
    cuisine: 'Homely Italian and Mediterranean for 36 years · signature Gorgonzola and bread gratin · baked oysters, squid-ink risotto', cuisine_type: 'other',
    website: null, gmaps: gm('銀座-LAZY 銀座ビッグウエストビル'), menu_url: null,
    notes: "[Italian · a 36-year Ginza 1-chōme favourite] A cosy, lively 25-seat Italian on a seventh floor that is easy to miss, serving creative Italian and wider Mediterranean dishes for 36 years. Per Precious, the menu was shaped by Ichinohe (一戸) with chef Ishikawa (石川) to avoid trend-chasing. Everyone orders the Gorgonzola and French-bread gratin (a small size exists), even people who don't like blue cheese. Also popular: baked oysters, Yoshida Farm caciocavallo baked with tomato, squid-ink risotto, sautéed squid and mushrooms, avocado and vegetable plates, and good pasta. A good wine list. Hard to book at times. ¥500 cover includes garlic toast and water. One diner had heard it might be closing, so check.",
    chef_bio: { chef_name: 'Chef 石川 (Ishikawa) (per Precious)', roles: ['chef'], origin: '36 years in business (Tabelog listing)', background: 'Menu created by 一戸 (Ichinohe) with chef 石川 at the opening (Precious); ownership not stated.', philosophy: 'Not a trend-following Italian (Precious).', specialty: 'Gorgonzola bread gratin.',
      anecdotes: [
        { text: '"★★ Gorgonzola Cheese and Bread Gratin (Small Size) ★ Baked Oysters ★ Baked Caciocavallo Cheese from Yoshida Farm with Tomatoes ★ Squid Ink Risotto." — October 2026.', source: R + 'B537403092/' },
        { text: '"I heard the restaurant was closing, but I wonder what happened." — September 2026.', source: R + 'B537271618/' },
      ],
      japanese_sources_summary: '食べログ: 銀座-LAZY(ギンザ・レイジー)、銀座1-4-8 銀座ビックウエストビル7F、25席、月〜土祝17:00〜23:00、日休、サービス料500円(ガーリックトーストとミネラルウォーター)、店の紹介で36年の老舗イタリアン。Precious: 「レイジー」誕生の時、流行のイタリア料理店にはしたくないと一戸さんが石川シェフと練り上げたメニュー、イタリア料理主体でスペインなど地中海の料理やオリジナルも。2026年の口コミ: ゴルゴンゾーラとフランスパンのグラタン(小サイズあり)、焼き牡蠣、吉田牧場のカチョカヴァロとトマトの焼き、イカ墨のリゾット、イカとキノコのソテー、アボカドと野菜、パスタ、ワインが充実、予約が取りにくい、閉店すると聞いたという声も。',
      confidence: 'medium', sources: [TB, PR, R + 'B537403092/', R + 'B513958900/', R + 'B512256284/', R + 'B537271618/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small, lively room; book ahead.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-4-8 銀座ビックウエストビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026 (a closing rumour noted in one review).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目4番8号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537403092/', R + 'B512256284/'],
    price_note: 'No prices captured; ¥500 cover; reviewers spend ¥5,000–10,000.', last_checked: TODAY, items: [
      it('ゴルゴンゾーラとフランスパンのグラタン', '', 'Gorgonzola and French-bread gratin (small size available)', '', 'Signature', 'no', 'no', 'The signature.', 'gorgonzola_gratin'),
      it('焼き牡蠣', 'yaki gaki', 'Baked oysters', '', 'Starters', 'ask', 'no', '', 'baked_oysters'),
      it('イカ墨のリゾット', 'ikasumi no rizotto', 'Squid-ink risotto', '', 'Mains', 'ask', 'no', '', 'squid_risotto'),
    ] }, {
    cuisine: '36年続くアットホームなイタリアンと地中海料理・名物のゴルゴンゾーラとパンのグラタン・焼き牡蠣、イカ墨のリゾット',
    neighborhood: '銀座一丁目、銀座ビックウエストビル7F。銀座一丁目駅から徒歩3分',
    gf_detail: '要確認。名物はゴルゴンゾーラとフランスパンのグラタンで、チャージにガーリックトーストが付きます。焼き牡蠣、カチョカヴァロの焼き、イカ墨のリゾットも。グルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。ゴルゴンゾーラのグラタン、牡蠣、イカ、チーズ。',
    notes: '[イタリアン・銀座一丁目で36年の人気店] 見つけにくいビルの7階にある、こぢんまりとにぎやかな25席のイタリアンで、創作的なイタリア料理と地中海料理を36年。Precious によれば、流行のイタリアンにはしたくないと一戸さんが石川シェフとメニューを練り上げたそう。誰もが頼むのはゴルゴンゾーラとフランスパンのグラタン(小サイズもあり)で、ブルーチーズが苦手な人にも好評。焼き牡蠣、吉田牧場のカチョカヴァロとトマトの焼き、イカ墨のリゾット、イカとキノコのソテー、アボカドと野菜、パスタも人気で、ワインも充実。予約が取りにくいことも。チャージ500円はガーリックトーストと水込み。閉店すると聞いたという声もあるので確認を。',
  });
}

// ================================================================ レ・コパン ドゥ ドミニク・ブシェ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13197223/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '15:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_les_copains_bouchet_ginza5', name: 'レ・コパン ドゥ ドミニク・ブシェ (Les Copains de Dominique Bouchet)', category: 'OMNI',
    lat: 35.672029, lng: 139.761809,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Prix-fixe bistro courses include pâté, chicken and mushroom pie, shrimp beignets and pear tart, alongside fish and meat with sauces; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pâté, bouillabaisse, sea bream, beef.',
    hours_raw: 'Daily 11:30–15:00 (L.O. 14:00) and 18:00–23:00 (last seating 20:00); closed all of August and late Dec–early Jan (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Ginza MS Bldg B1F, behind Tokyu Plaza — 3 min from Ginza Stn C2/C3',
    cuisine: 'Dominique Bouchet "bistronomy" · prix-fixe with fish or meat · French sommelier and staff · closed in August', cuisine_type: 'french',
    website: 'http://www.lescopains.jp/', gmaps: gm('レ・コパン ドゥ ドミニク・ブシェ 銀座MSビル'), menu_url: null,
    notes: "[French bistro · Dominique Bouchet's bistronomy] A 26-seat basement bistro behind Tokyu Plaza, open since 2016, carrying on the Michelin-starred technique of chef Dominique Bouchet in a warmer bistro style from an open kitchen. Prix-fixe menus let each guest choose fish or meat. October 2026 lunches ran Tosa bonito with mustard, chestnut and truffle soup, sea bream and beef in fine sauces. Earlier French Restaurant Week menus (¥6,000) included shrimp and basil beignets, swordfish, chicken and mushroom pie, and pear tart. French staff and a French sommelier choose and explain wines. Popular for celebrations, and closed through August.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 June 2016 (Tabelog)', background: 'Part of the Dominique Bouchet group (2026 review: "part of the Dominique Bouchet chain").', philosophy: 'Bistronomy — gourmet quality with bistro warmth (Tabelog listing).', specialty: 'Classic bistro dishes with sauces.',
      anecdotes: [
        { text: '"The appetizer, Katsuo from Tosa, had a refreshing mustard flavor. The chestnut and truffle soup was exquisite… The staff from France selected delicious wines." — October 2026.', source: R + 'B537007676/' },
        { text: '"The course menu allows you to choose anything you like, and a French sommelier selects and explains the wines to match your choices." — October 2026.', source: R + 'B537138615/' },
      ],
      japanese_sources_summary: '食べログ: レ・コパン ドゥ ドミニク・ブシェ、銀座5-1-8 銀座MSビルB1F、銀座駅C2・C3出口から徒歩3分、26席(テーブルのみ)、毎日11:30〜15:00・18:00〜23:00(最終入店20:00)、8月いっぱいと年末年始は休み、2016年6月27日開店、公式サイト lescopains.jp。店の紹介: ミシュランの星付きフレンチの技を受け継ぐビストロノミー、ドミニク・ブシェの料理哲学、オープンキッチン。2026年の口コミ: プリフィクスで魚も肉も選べる、土佐のカツオのマスタード、栗とトリュフのスープ、鯛と牛肉のソース、フランス人スタッフとソムリエのワイン選び、お祝い向き、フレンチレストランウィークの6,000円ランチ(海老とバジルのベニエ、メカジキ、鶏とキノコのパイ、洋梨のタルト)、パテ、ブイヤベース、ドミニク・ブシェの系列。',
      confidence: 'medium', sources: [TB, R + 'B537007676/', R + 'B537138615/', R + 'B470812007/', R + 'B536959255/'] },
    cultural_comfort: { level: 'english', note: 'French staff and sommelier (2026 reviews).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-1-8 銀座MSビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目1番8号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537007676/', R + 'B470812007/'],
    price_note: 'Restaurant Week lunch ¥6,000 (2025); regular prices not captured.', last_checked: TODAY, items: [
      it('プリフィクスコース(魚と肉)', '', 'Prix-fixe course with fish and meat', '', 'Courses', 'ask', 'no', 'October 2026.', 'prixfixe'),
      it('栗とトリュフのスープ', '', 'Chestnut and truffle soup', '', 'Courses', 'ask', 'no', 'October 2026.', 'chestnut_soup'),
    ] }, {
    cuisine: 'ドミニク・ブシェのビストロノミー・魚と肉を選べるプリフィクス・フランス人のソムリエとスタッフ・8月休業',
    neighborhood: '銀座五丁目、銀座MSビルB1F、東急プラザの裏。銀座駅C2・C3出口から徒歩3分',
    gf_detail: '要確認。プリフィクスのビストロのコースにパテ、鶏とキノコのパイ、海老のベニエ、洋梨のタルトなど、ソースを添えた魚や肉も。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。パテ、ブイヤベース、鯛、牛肉。',
    notes: '[フレンチビストロ・ドミニク・ブシェのビストロノミー] 東急プラザ裏のビル地下、2016年開店の26席のビストロで、ミシュランの星付きシェフ、ドミニク・ブシェの技をオープンキッチンから温かいビストロのスタイルで。プリフィクスで一人ずつ魚か肉を選べます。2026年10月のランチは、土佐のカツオのマスタード、栗とトリュフのスープ、鯛と牛肉に見事なソース。以前のフレンチレストランウィーク(6,000円)では、海老とバジルのベニエ、メカジキ、鶏とキノコのパイ、洋梨のタルトも。フランス人のスタッフとソムリエがワインを選んで説明してくれます。お祝いに人気で、8月はまるごと休業。',
  });
}

// ================================================================ 焼うおいし川 銀座凛華楼
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13312587/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '15:00'], ['17:00', '22:00']), we = day(['11:00', '22:00']);
  put({
    id: 'tokyo_yakiuo_ishikawa_mitsukoshi', name: '焼うおいし川 銀座凛華楼 (Yaki Uo Ishikawa)', category: 'OMNI',
    lat: 35.670903, lng: 139.766114,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish grilled yakiniku-style with house sauces and condiments, sukiyaki-style dishes and cold noodles; the sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish.',
    hours_raw: 'Weekdays 11:00–15:00 and 17:00–22:00 (L.O. 21:00); weekends and holidays 11:00–22:00; closed 1 January (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Mitsukoshi annex 12F, Ginza 4-chōme — near Ginza Stn',
    cuisine: '"Yaki-uo": premium fish grilled like yakiniku at private counters · fatty tuna "special kalbi" · ladies’ lunch, sukiyaki course ¥4,000', cuisine_type: 'other',
    website: 'https://yakiuo-ishikawa.jp/', gmaps: gm('焼うおいし川 銀座凛華楼 三越'), menu_url: null,
    notes: "[Seafood · fish grilled like yakiniku] A 24-seat restaurant on the 12th floor of the Ginza Mitsukoshi annex (13 at the counter, 9 in a private counter room), opened in 2025. It serves 'yaki-uo', a fish version of yakiniku developed over eight years by the founder of Tsukiji Aozora. Premium cuts are grilled in front of you, such as fatty tuna billed as 'special kalbi', with house condiments and sauces. 2026 diners started with the brain, then had fresh mehikari, a yukhoe-like dish and a sukiyaki-style course (just under ¥4,000 plus ¥400 service). The ladies' lunch adds rice with refills, cold noodles and dessert. The grill staff are chatty. Many guests are visitors from Hong Kong and Singapore. A touch salty, and slow at times.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 September 2025 (Tabelog)', background: 'Concept by the founder of Tsukiji Aozora (Tabelog listing, "Ishikawa Tainobu" in the English text); group-run.', philosophy: 'Yakiniku without grilling meat (Tabelog listing).', specialty: 'Yaki-uo (fish yakiniku).',
      anecdotes: [
        { text: '"The first part we had grilled was the brain, and it felt just like yakiniku! Yet, the essence of the fish was still present." — October 2026.', source: R + 'B536737071/' },
        { text: '"The sukiyaki course was just under JPY 4000, with an additional service charge of JPY 400… The clientele was mostly foreign." — October 2026.', source: R + 'B537655526/' },
      ],
      japanese_sources_summary: '食べログ: 焼うおいし川 銀座凛華楼、銀座4-6-16 三越銀座店新館12F、24席(カウンター13・個室カウンター9)、平日11:00〜15:00・17:00〜22:00、土日祝11:00〜22:00、1月1日休、2025年9月25日開店、公式サイト yakiuo-ishikawa.jp。店の紹介: 築地青空の創業者が8年かけた「肉を焼かない焼肉」=焼うお、大トロの「特上カルビ」、自家製の薬味とタレ、赤酢のシャリ。2026年の口コミ: レディースランチ(ご飯おかわり、冷麺、デザート)、目の前で焼く魚、脳天から、ユッケ風やすき焼き風の料理、生のめひかり、すき焼きコース約4,000円+サービス料400円、香港やシンガポールからの客が多い、やや塩辛い、待ち時間も。',
      confidence: 'medium', sources: [TB, R + 'B536737071/', R + 'B537655526/', R + 'B535968895/', R + 'B537999848/'] },
    cultural_comfort: { level: 'english', note: 'Many international guests (2026 review); staff grill and explain.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-6-16 三越銀座店新館 12F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座四丁目6番16号 (go) 88m — the Mitsukoshi annex sits away from the lot centroid; Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537655526/', R + 'B536737071/'],
    price_note: 'Course price from an October 2026 review (+¥400 service).', last_checked: TODAY, items: [
      it('すき焼きコース', 'sukiyaki koosu', 'Sukiyaki-style fish course', '¥4,000', 'Courses', 'ask', 'no', 'Just under ¥4,000, October 2026.', 'sukiyaki_course'),
      it('レディースランチ', 'rediisu ranchi', 'Ladies’ lunch: grilled fish, rice with refills, cold noodles, dessert', '', 'Lunch', 'ask', 'no', 'October 2026.', 'ladies_lunch'),
    ] }, {
    cuisine: '個室カウンターで魚を焼肉のように焼く「焼うお」・大トロの「特上カルビ」・レディースランチ、すき焼きコース約4,000円',
    neighborhood: '三越銀座店新館12F、銀座四丁目。銀座駅の近く',
    gf_detail: '要確認。焼肉のように焼く魚に自家製のタレや薬味、すき焼き風の料理や冷麺も。タレの内容は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚です。',
    notes: '[魚介・焼肉のように焼く魚] 三越銀座店新館12階、2025年開店の24席(カウンター13、個室カウンター9)。築地青空の創業者が8年かけて生んだ「焼うお」、つまり魚の焼肉を出す店です。「特上カルビ」と呼ぶ大トロなど上質な部位を目の前で焼き、自家製の薬味とタレで。2026年の客は脳天から始まり、生のめひかり、ユッケ風の一品、すき焼き風のコース(4,000円弱+サービス料400円)など。レディースランチはご飯おかわり自由、冷麺、デザート付き。焼き手は話し上手。香港やシンガポールからの客も多い店です。やや塩辛く、待ち時間があることも。',
  });
}

// ================================================================ 銀座フィッシュバーガー NAGOMI
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13273538/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '23:59']);
  put({
    id: 'tokyo_ginza_fish_burger_nagomi_kyobashi', name: '銀座フィッシュバーガー NAGOMI', category: 'OMNI',
    lat: 35.675509, lng: 139.767913,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: burgers and hot dogs on buns; spring rolls and nuggets too.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, eel, shrimp, crab burgers, chicken nuggets.',
    hours_raw: 'Daily 11:00–24:00; closed 29 Dec–4 Jan; no lunch reservations (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyōbashi 3-chōme, TM Ginza Bldg 1F — between Ginza-itchōme and Kyōbashi Stns',
    cuisine: 'Fish-burger specialist · grilled minced-mackerel patty ¥1,000, soft-shell crab, eel, salmon, shrimp · mackerel hot dog · terrace', cuisine_type: 'other',
    website: null, gmaps: gm('銀座フィッシュバーガー NAGOMI 京橋'), menu_url: null,
    notes: "[Burgers · fish, not beef] A 26-seat fish-burger specialist on a ground floor between Ginza-itchōme and Kyōbashi, open since 2022, with sofa, counter and terrace seats. Rather than battered and fried, the signature mackerel burger (¥1,000) uses a grilled patty of minced fish, with a free dip such as wasabi tartar. Others include a soft-shell crab burger with nuggets (¥1,750), an eel special, shrimp and salmon burgers, mackerel spring rolls and a seafood hot dog. Diners find them light, and the nuggets surprisingly good. Open until midnight.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 August 2022 (Tabelog)', background: 'No source names the operator.', philosophy: null, specialty: 'Grilled mackerel burger.',
      anecdotes: [
        { text: '"While chain restaurants usually serve fish burgers that are battered and fried, this place offers a healthier option with a grilled fish patty made from minced fish." — October 2026, ¥1,000 mackerel burger.', source: R + 'B538016414/' },
        { text: '"Soft Shell Crab Burger + Chicken Nuggets (JPY 1750)" — July 2026.', source: R + 'B531094246/' },
      ],
      japanese_sources_summary: '食べログ: 銀座フィッシュバーガー NAGOMI、京橋3-4-1 TM銀座ビル1F、26席(ソファ・カウンター・テラス)、毎日11:00〜24:00、12月29日〜1月4日休、ランチの予約不可、2022年8月8日開店。2026年の口コミ: 鯖のフィッシュバーガー1,000円(揚げずに焼いた魚のすり身のパティ、わさびタルタルのディップ無料)、ジンジャーエール200円、ソフトシェルクラブバーガーとナゲット1,750円、鰻のスペシャル、海老・サーモン・鯖、鯖の春巻き、シーフードのホットドッグ、ナゲットも美味しい、京橋のれん巡りのスタンプ。',
      confidence: 'medium', sources: [TB, R + 'B538016414/', R + 'B531094246/', R + 'B537552470/', R + 'B531044030/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter service; open late.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0031 東京都中央区京橋3-4-1 TM銀座ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区京橋三丁目4番1号 (go) 2m; 552 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538016414/', R + 'B531094246/'],
    price_note: 'Prices from July–October 2026 reviews.', last_checked: TODAY, items: [
      it('鯖のフィッシュバーガー', '', 'Mackerel fish burger (grilled minced-fish patty)', '¥1,000', 'Burgers', 'no', 'no', 'October 2026.', 'saba_burger'),
      it('ソフトシェルクラブバーガーとナゲット', '', 'Soft-shell crab burger with chicken nuggets', '¥1,750', 'Burgers', 'no', 'no', 'July 2026.', 'softshell'),
      it('鯖のホットドッグ', '', 'Mackerel hot dog', '', 'Burgers', 'no', 'no', '', 'saba_dog'),
    ] }, {
    cuisine: 'フィッシュバーガーの専門店・焼いた鯖のすり身のパティ1,000円、ソフトシェルクラブ、鰻、サーモン、海老・鯖のホットドッグ・テラス',
    neighborhood: '京橋三丁目、TM銀座ビル1F。銀座一丁目駅と京橋駅の間',
    gf_detail: 'グルテンフリーではありません。バンズのバーガーやホットドッグ、春巻きやナゲットも。',
    vegan_detail: 'ヴィーガンではありません。魚、鰻、海老、カニのバーガー、チキンナゲット。',
    notes: '[バーガー・牛ではなく魚] 銀座一丁目と京橋の間、1階にある26席のフィッシュバーガー専門店で、2022年開店。ソファ、カウンター、テラス席。揚げるのではなく、魚のすり身を焼いたパティの鯖バーガー(1,000円)が看板で、わさびタルタルなどのディップは無料。ほかにソフトシェルクラブバーガーとナゲット(1,750円)、鰻のスペシャル、海老やサーモンのバーガー、鯖の春巻き、シーフードのホットドッグも。軽くて食べやすく、ナゲットも意外と美味しいと好評。夜12時まで営業。',
  });
}

save();
