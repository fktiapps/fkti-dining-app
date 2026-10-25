// Ginza Station half-mile sweep (805 m), batch 93 — all-genre phase (all OMNI).
//   + 六雁 (Mutsukari: "new Edomae" kappō by chef Yoshihisa Akiyama; Tabelog Award Bronze 2017–18)
//   + やさいの王様 日比谷シャンテ店 (vegetable-forward set meals)
//   + 洋食グリル木村家 (Ginza Kimuraya 3F yōshoku with bottomless house bread)
// CHAYA Natural & Wild Table (already in the data) is corrected separately in
// fix-ginza-chaya-renewal-and-menu-values.mjs.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 六雁
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13005014/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:30', '23:00']);
  put({
    id: 'tokyo_mutsukari_ginza', name: '六雁 (Mutsukari)', category: 'OMNI',
    lat: 35.671736, lng: 139.763749,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Seasonal omakase kaiseki (sesame tofu, sashimi, charcoal-grilled fish, somen, red miso soup, beef shabu with yuba); no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as served: courses include fish, sea urchin, pork and beef, and soups are dashi-based. Vegetables are a signature (a ten-vegetable nikogori terrine); ask whether a vegetable course is possible.',
    hours_raw: 'Mon–Sat 17:30–23:00 (L.O. 20:00); closed Sundays and holidays (Tabelog). 10% service charge. No children under 12.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Ginza Pony Group Bldg 6F–7F, entrance down a stone-paved passage — 1 min from Ginza Stn exit B5',
    cuisine: '"New Edomae Tokyo style" kappō by chef Yoshihisa Akiyama · seasonal omakase · ten-vegetable nikogori · charcoal-grilled ayu · famous shaved ice to finish · Tabelog Award Bronze 2017–18', cuisine_type: 'kaiseki',
    website: 'http://mutsukari.com', gmaps: gm('六雁 銀座 ポニーグループビル'), menu_url: null,
    notes: "[Japanese · Akiyama's \"super kappō\" a minute from Ginza crossing] Open since 2004, a Japanese restaurant over two floors (46 seats), reached along a stone-paved passage scented with incense. The 9-seat counter faces an open kitchen where chef Yoshihisa Akiyama cooks what the listing calls \"new Edomae Tokyo style\". The seasonal omakase might run sesame tofu, conger eel, somen with sea urchin and junsai, charcoal-grilled ayu, beef shabu wrapped round a thick yuba roll, and mushroom or corn rice with red miso soup. It ends with the famous shaved ice (pumpkin in autumn). The signature vegetable dish is a nikogori terrine of ten vegetables. A sake sommelier pairs drinks; service is attentive without hovering. Tabelog Award Bronze 2017 and 2018; dinner ¥20,000–40,000; no under-12s.",
    chef_bio: { chef_name: 'Yoshihisa Akiyama', roles: ['chef'], origin: 'Opened 1 June 2004 (Tabelog)', background: 'Chef of Mutsukari (Tabelog listing). A July 2026 reviewer calls it Michelin-starred.', philosophy: '"Super kappō"; "new Edomae Tokyo style" (Tabelog listing).', specialty: 'Ten-vegetable nikogori; shaved ice.',
      anecdotes: [
        { text: '"When you wrap the yuba in the beef and take a bite, the gentle flavor of the yuba blends beautifully with the umami of the beef." — August 2026, summer course, about the tenth visit.', source: R + 'B449858552/' },
        { text: '"The meal included appetizers, a bite-sized sushi with fresh salmon roe, a soup, grilled returning bonito, charcoal-grilled sweetfish… mushroom rice with Noppe soup, and pumpkin shaved ice." — September 2026.', source: R + 'B535206424/' },
      ],
      japanese_sources_summary: '食べログ: 六雁、銀座5-5-19 銀座ポニーグループビル6F・7F、銀座駅B5出口徒歩1分、46席(カウンター9、6Fテーブル、吹き抜けの個室6名、7Fテーブル)、月〜土17:30〜23:00(L.O. 20:00)、日祝休、サービス料10%、12歳未満不可、2004年6月1日開店、公式サイト mutsukari.com、The Tabelog Award 2017・2018 Bronze。店の紹介: 料理長Yoshihisa Akiyamaの「新江戸前東京スタイル」、「スーパー割烹」、三フロアでオープンキッチン、10種の野菜の季節の煮こごり。2026年の口コミ: 石畳と香の香り、程よい距離の接客、胡麻豆腐、穴子、雲丹と蓴菜の素麺、鮎の炭火焼き、牛しゃぶと湯葉巻き、とうもろこしご飯と赤だし、名物のかき氷、女性ソムリエの日本酒、戻り鰹、松茸、豚肩ロース、きのこご飯とのっぺ汁、かぼちゃのかき氷。',
      confidence: 'medium', sources: [TB, R + 'B449858552/', R + 'B535206424/', R + 'B532452965/', R + 'B467230913/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No children under 12; request the counter when booking.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-5-19 銀座ポニーグループビル 6F・7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目5番19号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535206424/', R + 'B449858552/'],
    price_note: 'No course prices captured; dinner ¥20,000–40,000 in reviews, plus 10% service.', last_checked: TODAY, items: [
      it('おまかせコース', '', 'Seasonal omakase course', '', 'Courses', 'ask', 'no', '', 'omakase'),
      it('季節の煮こごり', '', 'Seasonal nikogori terrine of ten vegetables', '', 'Signature', 'ask', 'ask', 'Tabelog listing.', 'nikogori'),
      it('かき氷', 'kakigōri', 'Shaved ice (seasonal, e.g. pumpkin)', '', 'Dessert', 'ask', 'ask', '', 'kakigori'),
    ] }, {
    cuisine: 'Yoshihisa Akiyama料理長の「新江戸前東京スタイル」の割烹・季節のおまかせ・10種の野菜の煮こごり・鮎の炭火焼き・締めの名物かき氷・食べログアワード2017〜18 Bronze',
    neighborhood: '銀座五丁目、石畳の通路の奥の銀座ポニーグループビル6F・7F。銀座駅B5出口から徒歩1分',
    gf_detail: '予約時に要確認。胡麻豆腐、刺身、魚の炭火焼き、素麺、赤だし、牛しゃぶの湯葉巻きなど季節のおまかせ懐石。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'このままではヴィーガンではありません。コースには魚、雲丹、豚、牛があり、汁物はだしを使います。野菜が看板(10種の野菜の煮こごり)なので、野菜のコースができるか確認を。',
    notes: '[日本料理・銀座の交差点から1分の「スーパー割烹」] 2004年開店、二つのフロアに46席。香の漂う石畳の通路から入ります。カウンター9席はオープンキッチンに面し、料理長のYoshihisa Akiyamaが紹介文のいう「新江戸前東京スタイル」の料理を作ります。季節のおまかせは胡麻豆腐、穴子、雲丹と蓴菜の素麺、鮎の炭火焼き、厚い湯葉巻きを牛しゃぶで包む一品、きのこやとうもろこしのご飯と赤だしなど。締めは名物のかき氷(秋はかぼちゃ)。野菜の看板料理は10種の野菜の煮こごり。日本酒はソムリエが合わせ、接客は丁寧で程よい距離感。食べログアワード2017・2018 Bronze、夜は2万〜4万円、12歳未満不可。',
  });
}

// ================================================================ やさいの王様 日比谷シャンテ店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13113958/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '22:00']);
  put({
    id: 'tokyo_yasai_no_ousama_hibiya_chanter', name: 'やさいの王様 日比谷シャンテ店 (Yasai no Ousama)', category: 'OMNI',
    lat: 35.673267, lng: 139.759889,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Vegetable-heavy set meals with meat or fish (sweet-potato six-grain rice, miso soup, potato salad, demi-glace hamburg); no source mentions gluten-free handling.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The kitchen centres seasonal vegetables, but the set meals come with meat or fish and a honey-mustard potato salad, the miso soup’s dashi is not described, and no vegan dish is named.',
    hours_raw: 'Daily 11:00–22:00 (L.O. 21:00); closes when Hibiya Chanter closes (Tabelog). Bookings only for weekday 11:00 entry. No service charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hibiya Chanter main bldg B2F, Yūrakuchō 1-chōme — 3 min from Hibiya Stn',
    cuisine: 'Vegetable-forward set meals · Yasai no Ousama set (¥2,260) with six-grain sweet-potato rice, seasonal miso soup, glass salad, mini dessert · demi-glace hamburg · green, relaxed room', cuisine_type: 'other',
    website: 'http://www.yasai-no-ohsama.com/', gmaps: gm('やさいの王様 日比谷シャンテ'), menu_url: null,
    notes: "[Healthy set meals · vegetables first under Hibiya Chanter] A 46-seat restaurant on Hibiya Chanter's second basement, open since 2017, that builds creative dishes around seasonal vegetables from across Japan in a green, open room. The house Yasai no Ousama set (¥2,260 in October 2026) has a meat or fish main with six-grain sweet-potato rice, seasonal miso soup, honey-mustard potato salad with lotus root, a glass salad and a mini dessert. A demi-glace hamburg set is also popular. Weekday lunch fills fast, so book the 11:00 entry (the only bookable slot). Reviews range from \"zero guilt, full stomach\" to one diner unimpressed by the vegetables and the dim lighting.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 December 2017 (Tabelog)', background: 'No source names the operator.', philosophy: 'Creative dishes from seasonal vegetables (Tabelog listing).', specialty: 'Vegetable set meals.',
      anecdotes: [
        { text: '"Yasai no Ousama Set Meal (JPY 2260)… The set meal offers both meat and fish dishes, and it comes with a glass salad and a mini dessert." — October 2026, weekday 11:00 booking.', source: R + 'B537626168/' },
        { text: '"I had the demi-glace hamburger steak for lunch. The vegetables are supposed to be their specialty, but I wasn\'t particularly impressed." — October 2026.', source: R + 'B536923939/' },
      ],
      japanese_sources_summary: '食べログ: やさいの王様 日比谷シャンテ店、千代田区有楽町1-2-2 日比谷シャンテ本館B2F、日比谷駅徒歩3分、46席、毎日11:00〜22:00(L.O. 21:00)、休みは日比谷シャンテに準ずる、予約は平日11時のみ、サービス料・チャージなし、全席禁煙、子ども可、ヘルシーメニュー、2017年12月7日開店、公式サイト yasai-no-ohsama.com。店の紹介: 全国の厳選した旬の野菜と食材の創作料理、緑の多い開放的な空間。2026年10月の口コミ: やさいの王様定食2,260円(六穀米のさつまいもご飯、季節の味噌汁、蓮根入りハニーマスタードポテトサラダ、肉か魚、グラスサラダ、ミニデザート)、平日昼は開店後すぐ満席、デミグラスハンバーグ、肉の定食、重すぎずヘルシー、照明が暗めとの声。',
      confidence: 'medium', sources: [TB, R + 'B537626168/', R + 'B536923939/', R + 'B537586981/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the weekday 11:00 slot.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-2-2 日比谷シャンテ 本館 B2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目2番 (lot) 40m within the Hibiya Chanter block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537626168/'],
    price_note: 'Set price from an October 2026 review.', last_checked: TODAY, items: [
      it('やさいの王様定食', '', 'Yasai no Ousama set: meat or fish, sweet-potato six-grain rice, miso soup, potato salad, glass salad, mini dessert', '¥2,260', 'Set meals', 'ask', 'no', 'October 2026.', 'ousama_set'),
      it('デミグラスハンバーグ', '', 'Demi-glace hamburg set', '', 'Set meals', 'no', 'no', 'October 2026.', 'hamburg'),
    ] }, {
    cuisine: '野菜が主役の定食・やさいの王様定食(2,260円、六穀米のさつまいもご飯、季節の味噌汁、グラスサラダ、ミニデザート)・デミグラスハンバーグ・緑の多い落ち着いた店内',
    neighborhood: '日比谷シャンテ本館B2F、有楽町一丁目。日比谷駅から徒歩3分',
    gf_detail: '要確認。肉か魚の付く野菜たっぷりの定食(さつまいもの六穀米、味噌汁、ポテトサラダ、デミグラスハンバーグ)。グルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。旬の野菜が中心ですが、定食には肉か魚とハニーマスタードのポテトサラダが付き、味噌汁のだしは書かれておらず、ヴィーガンの料理は挙げられていません。',
    notes: '[ヘルシー定食・日比谷シャンテの地下で野菜が主役] 2017年から日比谷シャンテ地下2階にある46席の店で、全国の旬の野菜を中心にした創作料理を、緑の多い開放的な空間で。看板のやさいの王様定食(2026年10月は2,260円)は肉か魚の主菜に、六穀米のさつまいもご飯、季節の味噌汁、蓮根入りのハニーマスタードポテトサラダ、グラスサラダ、ミニデザート。デミグラスハンバーグの定食も人気。平日の昼はすぐ満席になるので、予約できる唯一の枠である11時の入店を。「罪悪感ゼロで満腹」という声から、野菜も照明の暗さも今ひとつという声まで。',
  });
}

// ================================================================ 洋食グリル木村家
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13023058/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '15:30'], ['16:30', '20:00']);
  put({
    id: 'tokyo_yoshoku_grill_kimuraya_ginza', name: '洋食グリル木村家 (Yoshoku Grill Kimuraya)', category: 'OMNI',
    lat: 35.671712, lng: 139.765227,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every dish comes with unlimited house bread, and the menu is beef stew, gratin and crab cream croquettes. Tabelog says allergy information is available.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef stew, cheese gratin, crab cream croquettes.',
    hours_raw: 'Daily 11:00–15:30 and 16:30–20:00 (L.O. 19:00); closed 31 Dec and 1 Jan (Tabelog). No reservations.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Kimuraya Bldg 3F, Ginza 4-chōme crossing — at Ginza Stn exit A9',
    cuisine: 'Classic yōshoku above the Ginza Kimuraya bakery · bottomless house bread (baguette, round rolls, raisin bread) · beef stew ¥2,900 · gratin ¥2,480 · crab cream croquette · English menu', cuisine_type: 'yoshoku',
    website: 'http://www.ginzakimuraya.jp/', gmaps: gm('洋食グリル木村家 銀座木村家'), menu_url: null,
    notes: "[Yōshoku · bottomless bread above the anpan bakery] The third floor of the Ginza Kimuraya bakery building at Ginza crossing: 48 table seats serving classic yōshoku, with unlimited house bread with every dish. Regulars rave about the wheaty baguette, the soft, slightly sweet round rolls and the raisin bread. The beef stew (¥2,900 in 2026) is packed with beef and balanced sweet-sour; there's also a shrimp gratin (¥2,480), chicken and prosciutto salad (¥1,900), overflowing crab cream croquettes and hamburg curry gratin. No reservations: about 10 groups were waiting at 1 pm on one October day, but seating came within 30 minutes, some by the window. Kids' menu, strollers welcome; English menu; allergy information available.",
    chef_bio: { chef_name: null, roles: [], origin: 'Restaurant floor of the Ginza Kimuraya building', background: 'Run by the Ginza Kimuraya bakery (ginzakimuraya.jp).', philosophy: null, specialty: 'Beef stew; house bread.',
      anecdotes: [
        { text: '"The bread is all-you-can-eat with a variety of delicious options. The baguette, in particular, has a rich wheat flavor, making it a perfect match with the creamy beef stew." — September 2026.', source: R + 'B535793627/' },
        { text: '"I arrived around 1 PM and found about 10 groups waiting, but I was seated within 30 minutes. I even got a window-side table all to myself." — October 2026.', source: R + 'B536950812/' },
      ],
      japanese_sources_summary: '食べログ: 洋食グリル木村家、銀座4-5-7 銀座木村家3F、銀座駅A9出口すぐ、48席(全テーブル)、毎日11:00〜15:30・16:30〜20:00(L.O. 19:00)、12/31・1/1休、予約不可、アレルギー表示あり、英語メニュー、お子様メニュー、ベビーカー可、公式サイト ginzakimuraya.jp。店の紹介: 木村家の自家製パンが食べ放題の昔ながらの洋食、上質な牛肉のビーフシチュー、具がたっぷりのかにクリームコロッケ。2026年の口コミ: ビーフシチュー2,900円、グラタン2,480円、チキンと生ハムのサラダ1,900円、小麦の香るバゲット、少し甘い丸パン、レーズン、かにクリームコロッケとハンバーグカレーグラタン、13時に10組待ちで30分で着席、窓際の席。',
      confidence: 'medium', sources: [TB, R + 'B503838074/', R + 'B535793627/', R + 'B536950812/', R + 'B536531151/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog); no reservations.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists allergy information as available.', source: TB }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-5-7 銀座木村家 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目5番7号 (go) 10m; OSM 銀座木村家 way/449618283 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B503838074/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('ビーフシチュー', 'biifu shichuu', 'Beef stew with unlimited bread', '¥2,900', 'Mains', 'no', 'no', 'September 2026.', 'beef_stew'),
      it('グラタン', 'guratan', 'Shrimp and vegetable gratin', '¥2,480', 'Mains', 'no', 'no', 'September 2026.', 'gratin'),
      it('チキンと生ハムのサラダ', '', 'Chicken and prosciutto salad', '¥1,900', 'Salads', 'ask', 'no', 'September 2026.', 'salad'),
      it('かにクリームコロッケ', '', 'Crab cream croquette', '', 'Mains', 'no', 'no', '', 'crab_croquette'),
    ] }, {
    cuisine: '銀座木村家のパン屋の上の昔ながらの洋食・自家製パン食べ放題(バゲット、丸パン、レーズンパン)・ビーフシチュー2,900円・グラタン2,480円・かにクリームコロッケ・英語メニュー',
    neighborhood: '銀座四丁目交差点の銀座木村家ビル3F。銀座駅A9出口すぐ',
    gf_detail: 'グルテンフリーではありません。どの料理にも自家製パンが食べ放題で付き、ビーフシチュー、グラタン、かにクリームコロッケが中心。食べログにはアレルギー表示ありとあります。',
    vegan_detail: 'ヴィーガンではありません。ビーフシチュー、チーズのグラタン、かにクリームコロッケ。',
    notes: '[洋食・あんぱんの店の上でパン食べ放題] 銀座四丁目交差点の銀座木村家ビル3階、全48のテーブル席で昔ながらの洋食を出し、どの料理にも自家製パンが食べ放題で付きます。常連が絶賛するのは小麦の香るバゲット、やわらかく少し甘い丸パン、レーズンのパン。ビーフシチュー(2026年は2,900円)は牛肉がたっぷりで甘酸っぱさのバランスがよく、海老のグラタン(2,480円)、チキンと生ハムのサラダ(1,900円)、具があふれるかにクリームコロッケ、ハンバーグカレーグラタンも。予約不可で、10月のある日は13時に10組待ちでしたが30分で着席、窓際の席に通されることも。お子様メニュー、ベビーカー可、英語メニュー、アレルギー表示あり。',
  });
}

save();
