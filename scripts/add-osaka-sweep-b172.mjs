// Osaka sweep (2-mile circle around Dotonbori), batch 172 — mom phase (≤20 seats, 30+ reviews, nearest-first).
//   + しゃぶ長 (16-seat counter of individual sukiyaki and shabu-shabu pots since 1978; Higashi-Shinsaibashi)
//   + みな都 (15-seat kappo known for dashi, horse sashimi and sea bream chazuke, since 1999; same lot as Shabu Cho)
//   + OPERA Namba (17-seat Spanish pintxos and paella bar; Namba-naka)
//   + SHUN SAI KA NAKA (18-seat creative Chinese, daily menu, to 2 am; Higashi-Shinsaibashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-29';
const { put, skip, save } = openCitySweep('osaka', TODAY, 172);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ しゃぶ長
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27030920/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '13:30'], ['17:30', '23:00']);
  put({
    id: 'osaka_shabu_cho_higashishinsaibashi', name: 'しゃぶ長 (Shabu Cho)', category: 'OMNI',
    lat: 34.672675, lng: 135.503425, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the sukiyaki pot comes with udon in a rich sauce (August 2026); the shabu-shabu dips are house ponzu and sesame sauce, not described for gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu and pork hot-pot shop.',
    hours_raw: 'Mon–Fri 11:30–13:30 and 17:30–23:00 (last order 22:00); Saturday 17:30–23:00; holidays 17:30–22:00; closed Sunday (Tabelog). Long lines at lunch (2026). When full you may be sent to the annex, Shabu Cho Hanare (18-seat L-shaped counter, IH burners) (Tabelog; August 2026). Cards, e-money and QR listed (Tabelog), but lunch was cash only for one diner (August 2026). Non-smoking. Children welcome; no child chairs (Tabelog). Opened 1 November 1978 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['17:30', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-15-25 — 5 min from Shinsaibashi Stn',
    cuisine: 'Sukiyaki and shabu-shabu in individual pots at a 16-seat counter · lunch sukiyaki from ¥1,400; 1.5× meat ¥2,000; large ¥2,400 · lunch set: thin-sliced beef with a pot of udon, shirataki, bean sprouts, green onion and onion in rich sauce, plus rice, pickles, egg and oolong tea, with free rice and tea refills · dinner courses of A5 Wagyu and premium pork · shabu-shabu with house ponzu or sesame sauce · frozen sake (house specialty)',
    website: null, gmaps: gm('しゃぶ長 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Hot pot · individual sukiyaki pots at a 1978 counter with lunch lines, Higashi-Shinsaibashi] A Higashi-Shinsaibashi counter that has served sukiyaki and shabu-shabu since 1978, one pot per guest, and famous for its lunch line. Lunch sukiyaki starts around ¥1,400 (¥2,000 with 1.5× meat): thin-sliced marbled beef to add to a pot of udon, shirataki and vegetables in a rich, slightly sweet sauce, with egg for dipping, rice and oolong tea refilled free. Staff manage the heat if you like. Dinner moves to A5 Wagyu and pork courses, with house ponzu or sesame sauce for shabu-shabu and a signature frozen sake. When it's full you may be seated at the annex nearby. One diner suggests the less fatty cuts. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 November 1978 (Tabelog).', background: 'Sukiyaki and shabu-shabu counter with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: 'A5 Wagyu and selected pork; house ponzu and sesame sauce (Tabelog listing).', specialty: 'Individual-pot sukiyaki.',
      anecdotes: [
        { text: '"The pot came with ingredients like udon, shirataki noodles, bean sprouts, green onions, and onions in a rich sauce, while the thinly sliced meat was served on a separate plate… Refills for rice and oolong tea were free." — August 2026, Sukiyaki with 1.5 times the meat ¥2,000.', source: R + 'B533900691/' },
        { text: '"The staff were very kind, and [prepared] the sukiyaki with great care from start to finish…" — July 2026.', source: R + 'B531462356/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): しゃぶ長、大阪市中央区東心斎橋1-15-25、心斎橋駅から徒歩5分、月〜金11:30〜13:30・17:30〜23:00 (L.O. 22:00)、土17:30〜23:00、祝17:30〜22:00、日曜休み、1978年11月1日開店、カウンター16席、満席時は別の店舗に案内することも、カード・電子マネー・QR可、禁煙、子ども歓迎 (子ども用の椅子なし)、英語・中国語・韓国語のメニュー、A5の和牛と上質な豚のshabu-shabu とsukiyaki 、自家製ponzu とごまだれ、名物の凍結酒。口コミ(2026年4〜9月): 昼はいつも行列、ひとり鍋、昼のsukiyaki 1,400円から、肉1.5倍2,000円、大2,400円、udon ・shirataki・もやし・ねぎ・玉ねぎの入った鍋と別皿の薄切り肉、ご飯・漬け物・卵・烏龍茶つき、ご飯とお茶はおかわり自由、別館のShabu Cho Hanare(L字カウンター18席、IH)、昼は現金のみだったという声、脂の少ない部位がおすすめという声。',
      confidence: 'medium', sources: [TB, R + 'B525919266/', R + 'B527635764/', R + 'B529779304/', R + 'B531462356/', R + 'B533900691/', R + 'B535999582/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean; English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-15-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目15番25号 (go) 8m; same lot as Minato (Minato offset north); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527635764/', R + 'B533900691/'],
    price_note: 'Lunch prices from May–August 2026 reviews; dinner courses about ¥8,000–10,000 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch sukiyaki set', 'from ¥1,400', 'Lunch', 'no', 'no', 'May 2026.', 'sukiyaki'),
      it('', '', 'Lunch sukiyaki, 1.5× meat', '¥2,000', 'Lunch', 'no', 'no', 'August 2026.', 'sukiyaki_15'),
      it('', '', 'Lunch sukiyaki, large', '¥2,400', 'Lunch', 'no', 'no', 'May 2026.', 'sukiyaki_l'),
      it('', '', 'Shabu-shabu (house ponzu or sesame sauce)', '', 'Dinner', 'ask', 'no', 'Tabelog listing; September 2026.', 'shabu'),
    ] }, {
    cuisine: 'カウンター16席でひとり鍋のsukiyaki とshabu-shabu ・昼のsukiyaki 1,400円から、肉1.5倍2,000円、大2,400円・昼のセット: 薄切りの牛肉と、udon ・shirataki・もやし・ねぎ・玉ねぎの入った濃いたれの鍋、ご飯・漬け物・卵・烏龍茶、ご飯とお茶はおかわり自由・夜はA5の和牛と上質な豚のコース・shabu-shabu は自家製ponzu かごまだれ・名物の凍結酒',
    neighborhood: '東心斎橋1-15-25。心斎橋駅から徒歩5分',
    gf_detail: '実質グルテンフリーではありません。sukiyaki の鍋には濃いたれとudon  (2026年8月)。shabu-shabu の自家製ponzu とごまだれのグルテンについての記載なし。',
    vegan_detail: 'ヴィーガンではありません。和牛と豚の鍋の店。',
    notes: '[鍋・東心斎橋、1978年からのひとり鍋のsukiyaki 、昼は行列] 1978年からsukiyaki とshabu-shabu を出す東心斎橋のカウンターで、ひとりひとつの鍋、昼の行列で知られる。昼のsukiyaki は約1,400円から (肉1.5倍で2,000円)。霜降りの薄切り牛肉を、udon ・shirataki・野菜の入ったほんのり甘い濃いたれの鍋に入れ、卵につけて。ご飯と烏龍茶はおかわり自由。火加減は店の人が見てくれる。夜はA5の和牛と豚のコースで、shabu-shabu は自家製ponzu かごまだれ、名物の凍結酒も。満席時は近くの別館に案内されることも。脂の少ない部位がおすすめという声。日曜休み。',
  });
}

// ================================================================ みな都
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000883/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'osaka_minato_kappo_higashishinsaibashi', name: 'みな都 (Minato)', category: 'OMNI',
    lat: 34.672739, lng: 135.503425, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the kitchen is built on dashi, and dishes include tempura, soba and a sesame-sauce chazuke.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based Japanese cooking with fish, crab, beef, whale and horse.',
    hours_raw: 'Tue–Sat 17:30–22:00 (last order 21:00); closed Sunday and Monday (Tabelog). Starter charge ¥500 per person, not on courses (Tabelog). Cards accepted; no e-money or QR (Tabelog). Non-smoking (Tabelog). School-age children and older only (Tabelog). Dress code: no sandals or shorts; guests who talk loudly or wear strong fragrance are asked not to come (Tabelog). First-time discount for registering on LINE (Tabelog; June 2026). Opened 1 October 1999 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-15-25, Ritz Bldg 1F — 5 min from Shinsaibashi or Nagahoribashi Stn',
    cuisine: 'Osaka-style kappo built on dashi (15 seats: 7 at the counter, two tables) · four courses and about 70 à la carte dishes, with prices not shown on the à la carte menu · fish, crab, sea urchin, abalone, Yamagata beef, whale and horse sashimi · Kumamoto horse sashimi · steamed abalone with its liver · crab with crab miso · grilled sesame tofu · grilled sweetfish · fried snapper scales · eggplant and yuba with ginger · lotus-root dumpling · tempura rice ball · sea bream chazuke with sesame sauce · duck soup soba · over 12 kinds of sake · served on Rosanjin-style tableware',
    website: null, gmaps: gm('みな都 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Kappo · a 1999 Osaka kappo known for its dashi, Higashi-Shinsaibashi] A calm 15-seat kappo in Higashi-Shinsaibashi, open since 1999 and proud of its dashi, with four courses and about 70 à la carte dishes on Rosanjin-style tableware. Long-time diners return for the Kumamoto horse sashimi, steamed abalone with liver, grilled sesame tofu, crab with crab miso and fried snapper scales, and one now always finishes with the sea bream chazuke in rich sesame sauce. Prices aren't shown on the à la carte list: one diner paid just over ¥16,000; ¥10,000–15,000 is typical. Over a dozen sakes. It asks for quiet: no sandals or shorts, no strong fragrance, and no children below school age.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 October 1999 (Tabelog).', background: 'Osaka kappo restaurant (Tabelog; 2023–2026 reviews).', philosophy: 'Dashi as the foundation (Tabelog listing).', specialty: 'Dashi-based kappo; horse sashimi; sea bream chazuke.',
      anecdotes: [
        { text: '"…the sea bream chazuke had a rich sesame sauce and broth, keeping the taste strong until the end." — February 2026.', source: R + 'B15305409/' },
        { text: '"I was a bit concerned since the prices for the a la carte menu weren\'t listed, but it turned out to be just over JPY 16,000 for one person… The highlights were the fried white snapper scales, horse sashimi, and grilled sesame tofu." — June 2026.', source: R + 'B530179798/' },
      ],
      japanese_sources_summary: '食べログ: みな都、大阪市中央区東心斎橋1-15-25 リッツビル 1F、心斎橋駅・長堀橋駅から徒歩5分、火〜土17:30〜22:00 (L.O. 21:00)、日・月休み、1999年10月1日開店、先付500円 (コースは無し)、カード可、電子マネー・QR不可、禁煙、15席 (カウンター7、テーブル2)、小学生以上、サンダル・短パン不可、大声や強い香りの方は遠慮を、LINE 登録で初回割引、だしが自慢、魚・蟹・うに・あわび・山形牛・鯨・馬の sashimi、Rosanjin 風の器、コース4種とアラカルト約70品、日本酒12種以上。口コミ(2023年8月〜2026年6月): 熊本の馬の sashimi、あわびの肝、蒸しあわび、蟹味噌と蟹、焼き胡麻豆腐、鮎の塩焼き、白身魚のうろこ揚げ、茄子とyuba の生姜あん、れんこん饅頭、天ぷらのおにぎり、胡麻だれの鯛の chazuke、鴨の温かいそば、アラカルトは値段の表示なし、ひとり16,000円ほどという声。',
      confidence: 'medium', sources: [TB, R + 'B15305409/', R + 'B470292762/', R + 'B470635144/', R + 'B482324388/', R + 'B530179798/', R + 'B532349471/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet room; dress code; school-age children and up (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-15-25 リッツビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目15番25号 (go) 8m; offset 7 m north of the Tabelog point, which it shares with Shabu Cho; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530179798/', R + 'B15305409/'],
    price_note: 'À la carte prices are not shown; about ¥10,000–16,000 per person (Tabelog, reviews) plus ¥500 starter.', last_checked: TODAY, items: [
      it('', '', 'Kumamoto horse sashimi', '', 'À la carte', 'ask', 'no', 'February–June 2026.', 'basashi'),
      it('', '', 'Grilled sesame tofu', '', 'À la carte', 'ask', 'ask', 'February–June 2026.', 'gomadofu'),
      it('', '', 'Sea bream chazuke with sesame sauce', '', 'À la carte', 'ask', 'no', 'February 2026.', 'taichazuke'),
      it('', '', 'Steamed abalone with liver', '', 'À la carte', 'ask', 'no', 'February 2026.', 'awabi'),
    ] }, {
    cuisine: 'だしを軸にした大阪のkappo  (15席: カウンター7、テーブル2)・コース4種とアラカルト約70品、アラカルトは値段の表示なし・魚、蟹、うに、あわび、山形牛、鯨、馬の sashimi・熊本の馬の sashimi・蒸しあわびの肝ソース・蟹と蟹味噌・焼き胡麻豆腐・鮎の塩焼き・白身魚のうろこ揚げ・茄子とyuba の生姜あん・れんこん饅頭・天ぷらのおにぎり・胡麻だれの鯛の chazuke・鴨の温かいそば・日本酒12種以上・Rosanjin 風の器',
    neighborhood: '東心斎橋1-15-25 リッツビル 1F。心斎橋駅・長堀橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。だしが土台で、天ぷら、そば、胡麻だれの chazuke も。',
    vegan_detail: 'ヴィーガンではありません。だしの和食で、魚、蟹、牛、鯨、馬も。',
    notes: '[kappo ・東心斎橋、だしが自慢の1999年からのkappo ] 東心斎橋の落ち着いた15席のkappo で、1999年から、だしが自慢。コース4種とアラカルト約70品をRosanjin 風の器で。長く通う人たちが挙げるのは熊本の馬の sashimi、蒸しあわびの肝、焼き胡麻豆腐、蟹と蟹味噌、白身魚のうろこ揚げで、これからは必ず濃い胡麻だれの鯛の chazuke でしめるという声も。アラカルトは値段の表示がなく、ひとり16,000円ほどだったという声、ふつうは10,000〜15,000円。日本酒は12種以上。静かさを大切にする店で、サンダル・短パン不可、強い香りは遠慮を、未就学児は不可。',
  });
}

// ================================================================ OPERA Namba
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27152375/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'osaka_opera_namba_spanish', name: 'OPERA Namba', category: 'OMNI',
    lat: 34.666049, lng: 135.498403, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; pintxos sit on French bread (August 2026), and the paella and grilled dishes are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A shiitake pintxo is on the counter (August 2026); breads and sauces are not described.',
    hours_raw: 'Daily 17:30–23:30; irregular closures (Tabelog). Seat charge ¥300 (Tabelog). Two-hour seating; no children of middle-school age or younger; no birthday plates; all guests should arrive together (Tabelog). Cards and PayPay accepted; no e-money (Tabelog). Non-smoking (Tabelog). Opened 8 October 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba-naka 1-4-21, Tamizu Bldg 1F, on a side street — 3 min from Namba Stn',
    cuisine: 'Spanish pintxos and paella with Japanese seasonal touches (17 seats: 10 at the counter, 2 tables) · pintxos laid out at the counter on French bread: shiitake, shrimp and zucchini, vongole, asparagus and prosciutto, chicken, sardine with tomato, shirasu and avocado · prosciutto and chorizo · cheese platter · seasonal seafood paella · grilled whole octopus tentacle · grilled marbled beef · French fries with cheese · 13 wines by the glass, about 30 bottles from ¥5,000',
    website: null, gmaps: gm('OPERA Namba 難波中'), menu_url: TB + 'dtlmenu/',
    notes: "[Spanish · a pintxos counter with Japanese twists, Namba] A small Spanish bar on a side street near Namba Station, the Namba branch of an OPERA in Honmachi, opened October 2025. The pintxos sit in a row at the counter like a sushi display, each on French bread with its own sauce: shiitake, shrimp and zucchini, vongole, sardine with tomato, shirasu and avocado. Order the seasonal seafood paella and the grilled octopus early, since they take time. Thirteen wines by the glass. It's often full and service can be slow; one diner saw a single person running it. Two-hour limit, ¥300 seat charge, no children.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 October 2025; a second shop after OPERA in Honmachi (Tabelog; August 2026 review).', background: 'Spanish pintxos bar with a staff-maintained Tabelog listing (Tabelog; 2026 reviews).', philosophy: 'Spanish dishes with seasonal Japanese ingredients (Tabelog listing).', specialty: 'Pintxos; seasonal paella.',
      anecdotes: [
        { text: '"Right in front of the counter seats is the pinchos counter, reminiscent of a sushi bar… Even the French bread at the bottom was tasty." — August 2026.', source: R + 'B536271940/' },
        { text: '"Since the main dishes and paella take some time to prepare, we ordered those right away… Since it was a one-person operation, we took our time sipping wine while we waited." — August 2026.', source: R + 'B534093092/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員の公式情報): OPERA Namba、大阪市浪速区難波中1-4-21 田水ビル 1F、なんば駅から徒歩3分、毎日17:30〜23:30、不定休、2025年10月8日開店、席料300円、2時間制、中学生以下は入店不可、バースデープレート不可、全員そろってから入店、カード・PayPay可、電子マネー不可、禁煙、17席 (カウンター10、テーブル2)、グラスワイン13種・ボトル約30種、季節の和の食材を使ったピンチョスとパエリア。口コミ(2026年8〜10月): 本町の OPERA の難波店、カウンターに並ぶピンチョス (しいたけ、海老とズッキーニ、ボンゴレ、アスパラと生ハム、鶏、いわしのトマトソース、shirasu とアボカド)、生ハムとチョリソー、チーズ盛り合わせ、季節の魚介のパエリア、たこの足のグリル、霜降り牛のグリル、チーズのフライドポテト、ボトルワインは5,000円から、ひとりで回していて提供が遅いという声、いつも満席。',
      confidence: 'medium', sources: [TB, R + 'B534093092/', R + 'B535833149/', R + 'B536271940/', R + 'B536287032/', R + 'B536709455/', R + 'B537092952/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose pintxos from the counter display; two-hour limit (Tabelog; 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中1-4-21 田水ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Staff-maintained Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中一丁目4番21号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534093092/', R + 'B536709455/'],
    price_note: 'No dish prices in the reviews; about ¥5,000–6,000 per person (Tabelog) plus ¥300 seat charge; bottles from ¥5,000.', last_checked: TODAY, items: [
      it('', '', 'Pintxos (daily selection on French bread)', '', 'Pintxos', 'no', 'ask', 'August–October 2026.', 'pintxos'),
      it('', '', 'Seasonal seafood paella', '', 'Paella', 'ask', 'no', 'August 2026.', 'paella'),
      it('', '', 'Grilled octopus', '', 'Grill', 'ask', 'no', 'August–October 2026.', 'pulpo'),
    ] }, {
    cuisine: '和の季節の食材を合わせたスペインのピンチョスとパエリア (17席: カウンター10、テーブル2)・カウンターに並ぶフランスパンのピンチョス: しいたけ、海老とズッキーニ、ボンゴレ、アスパラと生ハム、鶏、いわしのトマトソース、shirasu とアボカド・生ハムとチョリソー・チーズの盛り合わせ・季節の魚介のパエリア・たこの足のグリル・霜降り牛のグリル・チーズのフライドポテト・グラスワイン13種、ボトル約30種は5,000円から',
    neighborhood: '難波中1-4-21 田水ビル 1F、路地の店。なんば駅から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ピンチョスはフランスパンにのる (2026年8月)。パエリアやグリルの説明なし。',
    vegan_detail: '要確認。しいたけのピンチョスはある (2026年8月) が、パンやソースの説明なし。',
    notes: '[スペイン料理・難波、和を取り入れたピンチョスのカウンター] なんば駅近くの路地にある小さなスペインバルで、本町の OPERA の難波店、2025年10月開店。カウンターには鮨のネタケースのようにピンチョスが並び、それぞれフランスパンにのって違うソースで。しいたけ、海老とズッキーニ、ボンゴレ、いわしのトマトソース、shirasu とアボカドなど。季節の魚介のパエリアとたこのグリルは時間がかかるので先に注文を。グラスワインは13種。満席が多く提供は遅めで、ひとりで回していたという声も。2時間制、席料300円、子どもは不可。',
  });
}

// ================================================================ SHUN SAI KA NAKA
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27017003/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '02:00']);
  put({
    id: 'osaka_shun_sai_ka_naka_higashishinsaibashi', name: 'SHUN SAI KA NAKA', category: 'OMNI',
    lat: 34.672029, lng: 135.504882, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; Chinese dishes use sauces such as a Hong Kong-style sauce and sweet-and-sour, and the menu changes daily.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plenty of vegetables, such as stir-fried water spinach (July 2026); sauces and stocks are not described.',
    hours_raw: 'Mon, Tue, Thu, Fri 18:00–02:00; Saturday 17:00–02:00; Sunday and holidays 17:00–24:00 (food last order an hour before close); closed Wednesday; occasional closures announced on social media (Tabelog). Smoking at every seat (Tabelog). Cards and QR accepted; no e-money (Tabelog). No voicemail reservations (Tabelog). Opened 4 April 2014 (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: day(['17:00', '02:00']), 6: day(['17:00', '00:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-6-12, Asano Bldg B1 — 5 min from Nagahoribashi Stn exit 7',
    cuisine: 'Creative Chinese with a daily menu (18 seats: 6 at the counter and sunken kotatsu tables) · roast char siu ¥1,100 · cuttlefish with Hong Kong-style sauce ¥1,400 · spicy stir-fried oysters ¥1,500 · steamed Shanghai crab with abalone-liver sauce ¥4,000 (season) · sweet-and-sour spare ribs · fried chicken neck · green pepper and beef · braised beef; beef tataki · clams with thick glass noodles · stir-fried water spinach · soup noodles · fried rice or ramen on request · New Year course with all-you-can-drink ¥6,600',
    website: null, gmaps: gm('SHUN SAI KA NAKA 東心斎橋'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese · a basement creative-Chinese counter open to 2 am, Higashi-Shinsaibashi] A cozy basement Chinese restaurant in Higashi-Shinsaibashi with six counter seats and sunken kotatsu tables, open until 2 am most nights. The menu changes daily and leans seasonal and vegetable-rich, with diners comparing it to hotel Chinese at izakaya prices: roast char siu (¥1,100), cuttlefish in Hong Kong sauce (¥1,400), plump spicy stir-fried oysters (¥1,500), sweet-and-sour spare ribs, braised beef, clams with thick glass noodles, and soup noodles two diners single out. Ask and the kitchen will make fried rice or ramen off the menu. Portions suit sharing among two or three. Smoking at every seat. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 4 April 2014 (Tabelog).', background: 'Creative Chinese restaurant (Tabelog; 2025–2026 reviews).', philosophy: 'Daily-changing menu with seasonal ingredients (October–November 2025 reviews).', specialty: 'Creative Chinese small plates.',
      anecdotes: [
        { text: '"This restaurant offers hotel-quality Chinese food at izakaya prices… the beef tataki and the soup noodles were especially outstanding!!!" — 2025–2026 review.', source: R + 'B512176776/' },
        { text: '"…if you ask, they will even make fried rice or ramen that isn\'t listed… I highly recommend the sweet and sour spare ribs, kara-age chicken neck, and green pepper beef stir-fry…" — August 2026.', source: R + 'B533359146/' },
      ],
      japanese_sources_summary: '食べログ: SHUN SAI KA NAKA、大阪市中央区東心斎橋1-6-12 アサノビル B1、長堀橋駅7番出口から徒歩5分、月・火・木・金18:00〜翌2:00、土17:00〜翌2:00、日・祝17:00〜24:00 (料理L.O. は閉店1時間前)、水曜休み、臨時休業はSNSで、2014年4月4日開店、全席喫煙可、カード・QR可、電子マネー不可、18席 (カウンター6、掘りごたつ)。口コミ(2025年9月〜2026年8月): 日替わりのメニュー、季節の食材と野菜が多い、ホテルのような中華を居酒屋の値段でという声、焼きチャーシュー1,100円、イカの香港ソース1,400円、牡蠣のピリ辛炒め1,500円、上海蟹の姿蒸しあわび肝ソース4,000円、スペアリブの甘酢、鶏の首の kara-age、ピーマンと牛肉の炒め物、牛の煮込み、牛の tataki、あさりと太い春雨、空芯菜、汁そば、頼めばメニューにないチャーハンやラーメンも、正月の飲み放題つきコース6,600円、2〜3人で分けるのにちょうどいい量。',
      confidence: 'medium', sources: [TB, R + 'B411559502/', R + 'B512176776/', R + 'B517440067/', R + 'B518123359/', R + 'B533359146/', R + 'B534856160/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; smoking at every seat (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-6-12 アサノビル B1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目6番12号 (go) 4m; 15 m from Mabomen Majin (separate building), no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B411559502/', R + 'B512176776/'],
    price_note: 'Prices from 2025–2026 reviews; the menu changes daily.', last_checked: TODAY, items: [
      it('', '', 'Roast char siu', '¥1,100', 'Chinese', 'ask', 'no', '2025–2026.', 'charsiu'),
      it('', '', 'Cuttlefish with Hong Kong-style sauce', '¥1,400', 'Chinese', 'ask', 'no', '2025–2026.', 'squid'),
      it('', '', 'Spicy stir-fried oysters', '¥1,500', 'Chinese', 'ask', 'no', '2025–2026.', 'oysters'),
      it('', '', 'Steamed Shanghai crab with abalone-liver sauce', '¥4,000', 'Chinese', 'ask', 'no', '2025–2026.', 'crab'),
      it('', '', 'New Year course with all-you-can-drink', '¥6,600', 'Courses', 'ask', 'no', 'January 2026.', 'newyear'),
    ] }, {
    cuisine: '日替わりの創作中華 (18席: カウンター6と掘りごたつ)・焼きチャーシュー1,100円・イカの香港ソース1,400円・牡蠣のピリ辛炒め1,500円・上海蟹の姿蒸しあわび肝ソース4,000円 (季節)・スペアリブの甘酢・鶏の首の kara-age・ピーマンと牛肉の炒め物・牛の煮込み、牛の tataki・あさりと太い春雨・空芯菜の炒め物・汁そば・頼めばチャーハンやラーメンも・正月の飲み放題つきコース6,600円',
    neighborhood: '東心斎橋1-6-12 アサノビル B1。長堀橋駅7番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。香港風のソースや甘酢などのたれを使い、メニューは日替わり。',
    vegan_detail: '要確認。空芯菜の炒め物など野菜は多い (2026年7月) が、たれやスープの説明なし。',
    notes: '[中華・東心斎橋、深夜2時まで開く地下の創作中華] 東心斎橋の地下にある居心地のいい中華で、カウンター6席と掘りごたつ、ほとんどの日は深夜2時まで。メニューは日替わりで季節の食材と野菜が多く、ホテルのような中華を居酒屋の値段でという声も。焼きチャーシュー (1,100円)、イカの香港ソース (1,400円)、大ぶりの牡蠣のピリ辛炒め (1,500円)、スペアリブの甘酢、牛の煮込み、あさりと太い春雨、ふたりが挙げる汁そば。頼めばメニューにないチャーハンやラーメンも作ってくれる。2〜3人で分けるのにちょうどいい量。全席喫煙可。水曜休み。',
  });
}

save();
