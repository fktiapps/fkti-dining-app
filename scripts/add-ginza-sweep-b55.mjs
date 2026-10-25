// Ginza Station half-mile sweep (805 m), batch 55 — the three places deferred from b54 (all OMNI).
//   + Bliss / ぶりす (Shimbashi teppanyaki bistro, 618 m; Tabelog website is a group site → OMNI)
//   + 五右衛門 ウイング新橋店 (Japanese-style spaghetti chain branch in the Shimbashi east-exit underground mall, 749 m)
//   + Howlin’ / ハウリン (Ginza 6-chōme Italian and Moldovan-wine bar; reopened May 2026; owner not named)
// Howlin’ ticks vegan / vegetarian / gluten-free options on Tabelog, but no source names a dish → both stay 'ask'.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ Bliss
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13275253/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:30', '23:00']);
  put({
    id: 'tokyo_bliss_teppan_shimbashi1', name: 'Bliss (ぶりす)', category: 'OMNI',
    lat: 35.667626, lng: 139.759351,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the signature course includes a demi-glace hamburg steak and an ajillo served with baguette; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu teppanyaki course with hamburg steak, roast beef, shrimp and a cheese omelette.',
    hours_raw: 'Mon–Fri, and days before and after holidays, 17:30–23:00 (L.O. 22:30); Saturdays by advance reservation only; closed Sundays and holidays (Tabelog). Cards, IC and PayPay accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 1-chōme, I/O Bldg 1F — 1 min from Shimbashi Stn exit 3 (Ginza Line), 3 min from the JR Ginza exit',
    cuisine: 'Teppanyaki bistro · Wagyu and Hitachi-beef hamburg courses ¥5,800–9,800 · wine', cuisine_type: 'other',
    website: null, gmaps: gm('Bliss ぶりす 新橋1-11-2'), menu_url: null,
    notes: "[Teppanyaki bistro · Shimbashi–Ginza border] A calm, grown-up 20-seat teppanyaki bistro (8 counter seats, 12 at tables), open since August 2022 and run under a restaurant group. The cooking is done in front of you at the counter. The most popular Bliss Course (¥9,800, 8 dishes) runs through appetizers, Wagyu roast beef, shrimp and mushroom ajillo with baguette, a salad, a Hitachi-beef and Umesato-pork hamburg steak with demi-glace and cheese, an A5 Wagyu steak with rock salt, onion sauce or kabosu pepper, and a black-truffle and Parmigiano risotto-style omelette. Shorter ¥5,800 and ¥7,000 courses finish with garlic rice and boiled squid. A 2-hour free-flow costs ¥4,200 (October 2026). Children are welcome on reserved Saturdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 August 2022 (Tabelog)', background: 'Tabelog lists a restaurant-group website; a 2026 reviewer says the owner cooks in front of diners, unnamed.', philosophy: null, specialty: 'Wagyu teppanyaki; truffle risotto-style omelette.',
      anecdotes: [
        { text: '"The wonderful owner performs the cooking right in front of you, adding to the Teppan-yaki experience." — October 2026.', source: R + 'B537927957/' },
        { text: '"I opted for the Bliss Course (JPY 9,800) with a 2-hour all-you-can-drink option (JPY 4,200)." — October 2026.', source: R + 'B537080644/' },
      ],
      japanese_sources_summary: '食べログ: Bliss(ぶりす)、新橋1-11-2 I/O 1F、新橋駅3番出口から徒歩1分、20席(カウンター8・テーブル12)、平日・祝前日・祝後日17:30〜23:00、土は要予約、日祝休、2022年8月8日開店、公式サイトは planbuildingtech-group.com、カード・IC・PayPay可。コース: 常陸牛ハンバーグとイカ煮のガーリックライス5,800円、和牛ステーキ7,000円、ぶりすコース9,800円(8品)。2026年10月の口コミ: 鴨のスモーク紅茶ソース、さつまいものゴルゴンゾーラソース、ローストビーフ、キノコのアヒージョ風煮込みとバゲット、常陸牛と梅里豚の特製ハンバーグ(デミグラスとチーズ)、ステーキは岩塩・オニオンソース・かぼす胡椒、黒トリュフとパルミジャーノのリゾット風オムレツ、ワインが充実、目の前で焼くオーナー。',
      confidence: 'medium', sources: [TB, R + 'B537080644/', R + 'B537927957/', R + 'B538026601/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus; counter seats recommended.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-11-2 I/O 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目11番 (lot) 21m; 618 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537080644/', R + 'B537927957/'],
    price_note: 'Course prices from Tabelog (tax incl.); free-flow from an October 2026 review.', last_checked: TODAY, items: [
      it('ぶりすコース(8品)', 'burisu koosu', 'Bliss Course, 8 dishes: roast beef, ajillo, Hitachi-beef hamburg, A5 Wagyu steak, truffle omelette', '¥9,800', 'Courses', 'no', 'no', 'Most popular.', 'bliss_course'),
      it('和牛ステーキとイカ煮のガーリックライスコース', '', 'Wagyu steak (100 g) course with garlic rice and boiled squid, 5 dishes', '¥7,000', 'Courses', 'ask', 'no', '', 'wagyu_course'),
      it('常陸牛ハンバーグとイカ煮のガーリックライスコース', '', 'Hitachi-beef hamburg (130 g) course with garlic rice and boiled squid, 5 dishes', '¥5,800', 'Courses', 'no', 'no', '', 'hamburg_course'),
      it('2時間飲み放題', '', '2-hour free-flow drinks', '¥4,200', 'Drinks', 'gf', 'ask', 'October 2026.', 'free_flow'),
    ] }, {
    cuisine: '鉄板焼きビストロ・和牛と常陸牛ハンバーグのコース5,800〜9,800円・ワイン',
    neighborhood: '新橋一丁目、I/O 1F。銀座線新橋駅3番出口から徒歩1分、JR銀座口から3分',
    gf_detail: '実際上グルテンフリーではありません。看板コースにデミグラスのハンバーグやバゲット付きのアヒージョがあり、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、ローストビーフ、海老、チーズのオムレツなど和牛の鉄板焼きコースです。',
    notes: '[鉄板焼きビストロ・新橋と銀座の境目] カウンター8席とテーブル12席の落ち着いた大人の鉄板焼きビストロで、2022年8月開店、飲食グループの店。カウンターでは目の前で焼き上げます。1番人気のぶりすコース(9,800円・8品)は、前菜、和牛ローストビーフ、海老とキノコのアヒージョとバゲット、サラダ、常陸牛と梅里豚の特製ハンバーグ(デミグラスとチーズ)、岩塩やオニオンソース、かぼす胡椒で食べるA5和牛ステーキ、締めの黒トリュフとパルミジャーノのリゾット風オムレツ。5,800円と7,000円のコースはイカ煮のガーリックライスで締め。2時間飲み放題は4,200円(2026年10月)。土曜は予約制で、子ども連れも歓迎。',
  });
}

// ================================================================ 五右衛門 ウイング新橋店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13014401/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '22:00']), we = day(['11:00', '21:00']);
  put({
    id: 'tokyo_goemon_wing_shimbashi', name: '五右衛門 ウイング新橋店', category: 'OMNI',
    lat: 35.666309, lng: 139.759034,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat-spaghetti chain; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat-sauce, cod-roe, pork and carbonara spaghetti; no vegan dish is described.',
    hours_raw: 'Mon–Fri 11:00–22:00 (L.O. 21:15); Sat–Sun 11:00–21:00 (L.O. 20:30) (Tabelog). No reservations. Cards, e-money and QR accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi east-exit underground mall (Wing Shimbashi), right by the JR Karasumori exit',
    cuisine: 'Japanese-style spaghetti chain (Yōmenya Goemon) · cod roe, meat sauce, pork shabu, seasonal specials', cuisine_type: 'other',
    website: 'http://www.yomenya-goemon.com', gmaps: gm('五右衛門 ウイング新橋店'), menu_url: null,
    notes: "[Chain · Japanese-style spaghetti] A 20-seat branch of the long-running Goemon spaghetti chain in the underground mall beside the JR Shimbashi Karasumori exit. It stays busy until close, with a short queue at lunch that moves quickly. 2026 regulars order mentaiko and takana, karasumi aglio e olio, pork-shabu pasta, an eggplant, mozzarella and carbonara meat sauce with a soft-boiled egg, and seasonal specials such as an autumn mushroom aglio e olio. Regular portions are small, so a large is worth it. About ¥1,000–2,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'Chain branch (Yōmenya Goemon)', background: 'Chain-run.', philosophy: null, specialty: 'Japanese-style spaghetti.',
      anecdotes: [
        { text: '"Since the regular portion sizes are known to be small, I opted for the large size, which was quite filling." — October 2026.', source: R + 'B537500464/' },
        { text: '"It\'s always crowded until just before closing time." — February 2026 visit.', source: R + 'B469750201/' },
      ],
      japanese_sources_summary: '食べログ: 五右衛門 ウイング新橋店、港区新橋2丁目 東口地下街1号、JR新橋駅烏森口すぐ、20席、平日11:00〜22:00、土日11:00〜21:00、予約不可、カード・電子マネー・QR可、公式サイト www.yomenya-goemon.com。2026年の口コミ: 明太子と高菜、からすみのペペロンチーノ、豚しゃぶのパスタ、茄子とモッツァレラのカルボナーラミートソースに半熟卵、秋限定のキノコのペペロンチーノ、普通盛りは少なめ、閉店間際まで混雑、昼は数人の行列も回転は早い、1,000〜2,000円。',
      confidence: 'medium', sources: [TB, R + 'B537500464/', R + 'B537937049/', R + 'B537978951/', R + 'B469750201/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick chain pasta; no reservations; expect a short queue at lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: false, address_ja: '〒105-0004 東京都港区新橋2丁目 東口地下街1号',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI matched only 東京都港区新橋二丁目 (chome) 186m — underground-mall address with no lot number, so not cross-checked; 749 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537500464/', R + 'B537937049/', R + 'B469750201/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–2,000.', last_checked: TODAY, items: [
      it('明太子と高菜', 'mentaiko to takana', 'Spaghetti with spicy cod roe and pickled mustard greens', '', 'Pasta', 'no', 'no', '', 'mentaiko_takana'),
      it('豚しゃぶのパスタ', 'butashabu no pasuta', 'Pork-shabu spaghetti', '', 'Pasta', 'no', 'no', '', 'pork_shabu'),
      it('茄子とモッツァレラのカルボナーラミートソース', '', 'Eggplant and mozzarella carbonara meat sauce with soft-boiled egg', '', 'Pasta', 'no', 'no', '', 'carbonara_meat'),
    ] }, {
    cuisine: '和風スパゲッティのチェーン(五右衛門)・明太子、ミートソース、豚しゃぶ、季節限定',
    neighborhood: '新橋駅東口地下街(ウイング新橋)、JR烏森口のすぐそば',
    gf_detail: 'グルテンフリーではありません。小麦のスパゲッティのチェーンで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。ミートソース、明太子、豚肉、カルボナーラなどで、ヴィーガンの料理は書かれていません。',
    notes: '[チェーン・和風スパゲッティ] JR新橋駅烏森口そばの地下街にある、老舗スパゲッティチェーン五右衛門の20席の店。閉店間際まで混み、昼は数人並ぶこともありますが回転は早め。2026年の常連は、明太子と高菜、からすみのペペロンチーノ、豚しゃぶのパスタ、半熟卵をのせた茄子とモッツァレラのカルボナーラミートソース、秋限定のキノコのペペロンチーノなど。普通盛りは少なめなので大盛りがおすすめとの声。1,000〜2,000円ほど。',
  });
}

// ================================================================ Howlin’
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13254005/'; const R = TB + 'dtlrvwlst/';
  const e = day(['17:00', '23:00']);
  put({
    id: 'tokyo_howlin_ginza6', name: 'Howlin’ (ハウリン)', category: 'OMNI',
    lat: 35.6708, lng: 139.761682,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog’s listing ticks gluten-free options, but no source names a gluten-free dish; the menu includes fresh pasta, quiche and Neapolitan spaghetti.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog’s listing ticks vegan and vegetarian options and the kitchen stresses vegetables, but no source names a vegan dish; diners mention carrot soup and organic salad alongside eggs, meat and fish.',
    hours_raw: 'Mon–Sat 17:00–23:00 (food L.O. 22:00, drinks 22:30); lunch by course reservation only; closed Sundays and holidays (Tabelog). ¥500 cover. Cards, IC and QR accepted.',
    hours: { 0: e, 1: e, 2: e, 3: e, 4: e, 5: e }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Shinbori Guitar Bldg 2F — 3 min from Ginza Stn exit C3',
    cuisine: 'Casual Italian and wine bar · free-range-egg soufflé omelette, Tosa Akaushi beef · Moldovan wines', cuisine_type: 'other',
    website: null, gmaps: gm('Howlin ハウリン 銀座6-5-12'), menu_url: null,
    notes: "[Italian · Moldovan wine in Ginza 6-chōme] A homey second-floor Italian bar of 22 seats, mostly at the counter, open since 2020. It reopened in May 2026 after the building's renovation. The kitchen builds on carefully sourced ingredients listed on a blackboard: organic eggs from Kuro Fuji Farm, Tosa Akaushi beef, no-till brown rice from Fujisaki Farm and fresh pasta from Awaji Noodle Company. 2026 diners order the fluffy soufflé omelette, carrot soup, organic salad, corn quiche, beef carpaccio, low-temperature roast pork, shrimp ajillo, a spicy curry and Neapolitan pasta. About 25 wines are always open, many from Moldova. Cover ¥500; about ¥5,000–6,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 11 November 2020; reopened May 2026 (Tabelog)', background: 'No source names the owner or chef.', philosophy: '"Healthy and safe ingredients, served at their best" (blackboard, per a 2026 review).', specialty: 'Soufflé omelette of free-range eggs; Moldovan wine.',
      anecdotes: [
        { text: '"Looking at the blackboard, I saw organic eggs from Kuro Fuji Farm, Tosa Akaushi beef, unplowed brown rice from Fujisaki Farm, and Moldovan wine..." — September 2026.', source: R + 'B525511715/' },
        { text: '"I had the carrot soup as an appetizer, an organic salad, and a soufflé omelet." — August 2026.', source: R + 'B533913571/' },
      ],
      japanese_sources_summary: '食べログ: Howlin’(ハウリン)、銀座6-5-12 新堀ギタービル2F、銀座駅C3出口から徒歩3分、22席(カウンター中心)、月〜土17:00〜23:00、昼はコース予約のみ、日祝休、お通し500円、2020年11月11日開店、2026年5月リニューアルオープン、カード・IC・QR可、食べログの設備欄に「ヴィーガン・ベジタリアン・グルテンフリーの選択肢」。店の紹介: 平飼い卵のふわふわオムレツ、Tosa Akaushi 、モルドバとイタリアのワインを常時約25種。2026年の口コミ: Kuro Fuji Farm の有機卵、Fujisaki Farm の不耕起玄米、Awaji Noodle Company の生パスタ、にんじんのスープ、オーガニックサラダ、スフレオムレツ、とうもろこしのキッシュ、牛のカルパッチョ、低温ローストポーク、海老のアヒージョ、辛めのカレー、ナポリタン。',
      confidence: 'medium', sources: [TB, R + 'B525511715/', R + 'B533913571/', R + 'B534349218/', R + 'B536535247/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly counter; mention allergies when booking, as the course notes ask.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Course listing: "If you have any allergies or dislikes, kindly inform our staff when making your reservation."', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-5-12 新堀ギタービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member; reopened May 2026); reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目5番12号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533913571/', R + 'B525511715/'],
    price_note: 'Set prices from Tabelog (tax incl.); dish prices not captured.', last_checked: TODAY, items: [
      it('ハウリンセット 秋 (グラスワイン付き)', '', 'Howlin’ autumn mini course with a glass of wine (1 person and up)', '¥3,800', 'Courses', 'ask', 'ask', 'Tabelog.', 'mini_course'),
      it('飲み放題付きパーティープラン(7品)', '', '2-hour free-flow party plan, 7 seasonal dishes (4–20 people)', '¥6,000', 'Courses', 'ask', 'ask', 'Tabelog.', 'party_plan'),
      it('スフレオムレツ', 'sufure omuretsu', 'Soufflé omelette of free-range eggs', '', 'Mains', 'ask', 'no', '', 'souffle_omelette'),
    ] }, {
    cuisine: '気軽なイタリアンとワインバー・平飼い卵のスフレオムレツ、Tosa Akaushi ・モルドバワイン',
    neighborhood: '銀座六丁目、新堀ギタービル2F。銀座駅C3出口から徒歩3分',
    gf_detail: '要確認。食べログの設備欄にはグルテンフリーの選択肢とありますが、どの料理かは書かれていません。生パスタ、キッシュ、ナポリタンもあります。',
    vegan_detail: '要確認。食べログの設備欄にはヴィーガン・ベジタリアンの選択肢とあり、野菜にもこだわっていますが、どの料理かは書かれていません。口コミにはにんじんのスープやオーガニックサラダのほか、卵、肉、魚の料理。',
    notes: '[イタリアン・銀座六丁目でモルドバワイン] 2020年開店、カウンター中心22席のアットホームな2階のイタリアンバルで、ビル改装を経て2026年5月にリニューアルオープン。黒板にはKuro Fuji Farm の有機卵、Tosa Akaushi 、Fujisaki Farm の不耕起玄米、Awaji Noodle Company の生パスタなど、選んだ食材が並びます。2026年の客は、ふわふわのスフレオムレツ、にんじんのスープ、オーガニックサラダ、とうもろこしのキッシュ、牛のカルパッチョ、低温ローストポーク、海老のアヒージョ、辛めのカレー、ナポリタンなど。ワインはモルドバ産を中心に常時約25種。お通し500円、1人5,000〜6,000円ほど。',
  });
}

save();
