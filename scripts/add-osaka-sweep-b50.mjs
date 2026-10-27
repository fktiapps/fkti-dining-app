// Osaka sweep (2-mile circle around Dotonbori), batch 50 — mom phase (≤20 seats), nearest first.
//   + 寿司 赤酢 心斎橋店 (8-seat red-vinegar sushi omakase counter, two seatings)
//   + まんまる食堂 (14-seat Chinese tavern off Hozenji Yokocho — filed 'other'; hours conflict on Tabelog)
//   + Steak＆Pizza BLAZE (A5 wagyu steak and Neapolitan pizza, opened November 2025 — filed 'other')
//   + お好み焼き酒場 O (15-seat basement okonomiyaki bar behind Shochikuza — existence 'probable')
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 50);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 寿司 赤酢 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27117533/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sushi_akasu_shinsaibashi', name: '寿司 赤酢 心斎橋店 (Sushi Akasu Shinsaibashi)', category: 'OMNI',
    lat: 34.670086, lng: 135.502061, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-seasoned sushi and simmered anago; the course includes a risotto with parmesan. Ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and seafood omakase.',
    hours_raw: 'Daily 12:00–14:00 and 18:00–22:30; closed irregularly (Tabelog). Dinner runs in two seatings: entry 18:00–20:00 and 20:30–22:30, and all guests start together, so arrive on time (Tabelog). Reservation only. A service charge is added (Tabelog). Cards accepted; no e-money or QR.',
    hours: ALL(day(['12:00', '14:00'], ['18:00', '22:30'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-3-2, Queens Court main building 2F — about 5 min from Namba Stn',
    cuisine: 'Sushi omakase on firm red-vinegar (akazu) rice made without sugar · seasonal omakase course ¥17,600 · chutoro, otoro and marinated lean tuna · abalone with liver sauce and an abalone-liver risotto with truffle and parmesan · nodoguro, sweet shrimp, kombu-cured scallop, bafun uni, simmered anago · miso soup and pudding · udon and curry rice for children · 8 counter seats',
    website: null, gmaps: gm('寿司 赤酢 心斎橋店'), menu_url: null,
    notes: "[Sushi · an 8-seat red-vinegar omakase counter off Shinsaibashi-suji] An eight-seat counter on the second floor of a building just off the Shinsaibashi shopping street, open since 2020 and popular with international guests. The name is the point: the rice is seasoned with red vinegar (akazu), firm and made without sugar. A repeat visitor says the firm rice divides opinion. The seasonal omakase is ¥17,600 (April 2026) and runs to nearly twenty items, with three cuts of tuna, abalone with liver sauce and, unusually, an abalone-liver risotto with truffle and parmesan. Then come nodoguro, sweet shrimp, sea urchin and simmered anago, closing with miso soup and pudding. The head chef is warm and chatty rather than intimidating. Dinner is two fixed seatings where everyone starts together, so be on time. Children are welcome, with udon and curry rice on offer. A service charge is added.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 18 May 2020 (Tabelog)', background: 'Sushi Akasu; a sister shop is in Namba (Tabelog).', philosophy: 'Red-vinegar rice made without sugar (April 2026 review).', specialty: 'Red-vinegar sushi omakase.',
      anecdotes: [
        { text: '"The rice was firm, made without sugar, and had a nice vinegar flavor… In between, there was even a risotto with abalone liver sauce!" — April 2026, omakase ¥17,600.', source: R + 'B526887922/' },
        { text: '"The rice is firm, and as the name suggests, they use red vinegar, which can be quite polarizing." — October 2026, a repeat visitor.', source: R + 'B535201670/' },
      ],
      japanese_sources_summary: '食べログ: 寿司 赤酢 心斎橋店、大阪市中央区心斎橋筋2-3-2 クイーンズコートビル本館2F、予約のみ、毎日12:00〜14:00・18:00〜22:30、夜は2部制(1部は18:00〜20:00、2部は20:30〜22:30の入店で一斉スタート)、定休日不定、サービス料あり、カード可、電子マネー・QR不可、8席(カウンターのみ)、子ども向けにうどんやカレーライス、姉妹店がなんばに、2020年5月18日開店、季節のおまかせコース17,600円。口コミ(2025年10月〜2026年10月): 海外の客が多い、赤酢のシャリと新鮮なネタ、カウンターと板前の技、おまかせ(セイコガニ、生牡蠣、あん肝、鰻、中トロ、大トロ、鮑、リゾット、白子の茶碗蒸し、のどぐろ、車海老、馬糞うに、穴子、とろたく、味噌汁、プリン)、親しみやすい大将、鮑の肝ソースのリゾット(トリュフ、パルメザン)、砂糖を使わない硬めのシャリ、好みが分かれる、商店街からすぐ。',
      confidence: 'medium', sources: [TB, R + 'B526887922/', R + 'B535201670/', R + 'B519290330/', R + 'B522158652/', R + 'B528985486/', R + 'B516284935/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase counter; reservation only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-2 クイーンズコートビル 本館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番2号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B526887922/', R + 'B519290330/'],
    price_note: 'Course price from Tabelog and an April 2026 review; service charge extra.', last_checked: TODAY, items: [
      it('', '', 'Omakase course with seasonal ingredients', '¥17,600', 'Courses', 'no', 'no', 'Tabelog; April 2026.', 'omakase'),
      it('', '', 'Abalone-liver risotto with truffle and parmesan (in the course)', '', 'Courses', 'no', 'no', 'February and April 2026.', 'risotto'),
      it('', '', 'Udon or curry rice for children', '', 'Children', 'no', 'no', 'Tabelog.', 'kids'),
    ] }, {
    cuisine: '砂糖を使わない硬めの赤酢のシャリのおまかせ・季節のおまかせコース17,600円・中トロ、大トロ、漬けの赤身・鮑の肝ソースと鮑の肝のリゾット(トリュフ、パルメザン)・のどぐろ、甘海老、昆布締めの帆立、馬糞うに、煮穴子・味噌汁とプリン・子ども向けにうどんやカレーライス・カウンター8席',
    neighborhood: '心斎橋筋2-3-2 クイーンズコートビル本館2F。なんば駅から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油で味付けする鮨や煮穴子、コースにはパルメザンのリゾットも。予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。魚と魚介のおまかせ。',
    notes: '[鮨・心斎橋筋の8席の赤酢のおまかせ] 心斎橋の商店街からすぐ、ビル2階のカウンター8席で、2020年開店、海外の客も多い店。店名のとおりシャリは赤酢で、砂糖を使わず硬め。硬いシャリは好みが分かれるという声も。季節のおまかせは17,600円(2026年4月)で20品ほど。マグロ3種、鮑の肝ソース、そして珍しい鮑の肝のリゾット(トリュフとパルメザン)。のどぐろ、甘海老、うに、煮穴子と続き、締めは味噌汁とプリン。大将は気さくで、堅苦しさはありません。夜は全員一斉スタートの2部制なので時間厳守で。子ども連れも歓迎で、うどんやカレーライスも。サービス料がかかります。',
  });
}

// ================================================================ まんまる食堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27085956/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://manmaru2015.thebase.in/';
  put({
    id: 'osaka_manmaru_shokudo', name: 'まんまる食堂 (Manmaru Shokudo)', category: 'OMNI',
    lat: 34.668275, lng: 135.502605, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: Chinese stir-fries and sauces; wheat noodles; fried chicken.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, beef and fish dishes.',
    hours_raw: 'Tabelog lists Fri 17:30–22:30, Sat and days before holidays 15:30–22:30, Sun and holidays 15:30–21:00, and closed Mon–Thu and days after holidays, but the same listing also says "Open daily!!" — confirm before visiting. Often fully booked; reserving is recommended (April 2026). Smoking allowed (Tabelog). Cards, e-money and QR accepted.',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-10 — tucked behind Hozenji Yokocho, about 5 min from Namba Stn exit 16',
    cuisine: 'Homey Chinese drinking food with Sichuan touches · laziji (spicy fried chicken with peanuts and cilantro) · mapo tofu · scallion-oil noodles · stir-fried water spinach · yodare chicken · black-vinegar sweet-and-sour pork · Sichuan mapo potato with grilled cheese · Hakata-style chive omelet · chive-and-egg rice bowl · cumin pork skewers · 7-course meal ¥3,000 + tax when reserving · counter and one table, 14 seats',
    website: OWN, gmaps: gm('まんまる食堂 道頓堀'), menu_url: null,
    notes: "[Chinese · a homey Chinese tavern behind Hozenji Yokocho] A small Chinese tavern hidden behind Hozenji Yokocho, with a round counter and one table. A friendly couple runs it, and the atmosphere is homey. One diner said it's neither neighborhood Chinese nor strict Sichuan: basic dishes built on well-studied seasonings. The popular laziji is properly hot, softened by peanuts and cilantro. The Hakata-style chive omelet, fluffy and a little runny with pickled mustard greens, cools things down, and one fan orders a chive-and-egg rice bowl for everyone, every time. Also mapo tofu, stir-fried water spinach, yodare chicken, scallion-oil noodles and a mapo potato with grilled cheese. Tabelog's average is ¥3,000–4,000. It fills up, so book; the reservation course is seven dishes for ¥3,000 plus tax. Look for the shop's sign, not the building name. Tabelog's hours contradict themselves, so check before going.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 24 April 2015 (Tabelog)', background: 'Run by a couple, according to an April 2026 review; one diner chatted with the owner at the round counter (March 2026).', philosophy: 'Well-researched basic seasonings rather than strict Sichuan (March 2026 review).', specialty: 'Laziji; Hakata-style chive omelet.',
      anecdotes: [
        { text: '"The lovely couple running the place creates such a great atmosphere, making both the food and the customers feel comfortable and welcoming." — April 2026.', source: R + 'B526899843/' },
        { text: '"The Razuji was indeed popular and had a strong impact for those who enjoy spicy food, with peanuts adding a nice touch." — June 2026.', source: R + 'B529852534/' },
      ],
      japanese_sources_summary: '食べログ: まんまる食堂、大阪市中央区道頓堀1-7-10 日宝バイストリート横丁ビル、地下鉄なんば駅16番出口から徒歩5分、金17:30〜22:30、土・祝前日15:30〜22:30、日・祝15:30〜21:00、月〜木・祝翌日休み(同じページに「年中無休」とも)、予約可、予約は特製7品コース3,000円(税抜)がおすすめ、カード・電子マネー・QR可、喫煙可、14席(カウンター8、テーブル4〜6)、2015年4月24日開店。口コミ(2026年3〜9月): 本格四川でも町中華でもない基本の調味料を研究した料理、丸いカウンターで店主と会話、ピーマンと豚の炒め、黒酢の酢豚、麻婆豆腐、よだれ鶏、空芯菜炒め、四川麻婆ポテト炙りチーズ、葱油拌面、法善寺横丁の奥の中華酒場、カウンター約10席と4人テーブル1つ、夫婦で切り盛り、予約がおすすめで場所がわかりにくい、ニラ玉丼、アットホームで店主の笑顔、博多風ニラ玉(高菜入り)、辛いラーズージー(ピーナッツ、パクチー)、ビルの名前より店の看板を探して、クミンの豚串、アジフライ。',
      confidence: 'medium', sources: [TB, OWN, R + 'B526899843/', R + 'B529852534/', R + 'B524697819/', R + 'B526277028/', R + 'B534790713/', R + 'B537398960/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; hard to find — look for the shop sign.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-7-10 日宝バイストリート横丁ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番10号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B524697819/', R + 'B529852534/', R + 'B526899843/'],
    price_note: 'Only the reservation course has a listed price (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Special 7-course meal (reservations)', '¥3,000 + tax', 'Courses', 'no', 'no', 'Tabelog.', 'course'),
      it('', '', 'Laziji (spicy fried chicken)', '', 'Mains', 'no', 'no', 'June 2026.', 'laziji'),
      it('', '', 'Hakata-style chive omelet', '', 'Mains', 'ask', 'no', 'June and September 2026.', 'niratama'),
      it('', '', 'Mapo tofu', '', 'Mains', 'no', 'no', 'March and August 2026.', 'mapo'),
      it('葱油拌面', '', 'Scallion-oil noodles', '', 'Noodles', 'no', 'ask', 'March and September 2026.', 'congyou'),
      it('', '', 'Stir-fried water spinach', '', 'Vegetables', 'ask', 'ask', 'April and September 2026.', 'kushinsai'),
      it('四川麻婆ポテト炙りチーズ', '', 'Sichuan mapo potato with grilled cheese', '', 'Mains', 'no', 'no', 'March 2026.', 'mapo_potato'),
      it('', '', 'Chive-and-egg rice bowl', '', 'Rice', 'ask', 'no', 'April 2026.', 'niratama_don'),
    ] }, {
    cuisine: '四川の要素もあるアットホームな中華のつまみ・ラーズージー(ピーナッツとパクチーの辛い鶏の唐揚げ)・麻婆豆腐・葱油拌面・空芯菜炒め・よだれ鶏・黒酢の酢豚・四川麻婆ポテト炙りチーズ・博多風ニラ玉・ニラ玉丼・クミンの豚串・予約は7品コース3,000円(税抜)・カウンターとテーブル1つで14席',
    neighborhood: '道頓堀1-7-10 日宝バイストリート横丁ビル。法善寺横丁の奥、なんば駅16番出口から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。中華の炒め物やたれ、小麦の麺、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。豚、鶏、牛、魚の料理。',
    notes: '[中華・法善寺横丁の奥のアットホームな中華酒場] 法善寺横丁の奥に隠れた小さな中華酒場で、丸いカウンターとテーブルが1つ。気さくな夫婦が切り盛りし、友人の家で食べているような雰囲気。町中華でも本格四川でもなく、基本の調味料をよく研究した料理だという声も。人気のラーズージーはしっかり辛く、ピーナッツとパクチーで和らぎます。ふわっと半熟で高菜入りの博多風ニラ玉が辛さを鎮め、ニラ玉丼は毎回人数分頼むというファンも。麻婆豆腐、空芯菜炒め、よだれ鶏、葱油拌面、麻婆ポテトの炙りチーズも。食べログの平均は3,000〜4,000円。埋まりやすいので予約を。予約のコースは7品で3,000円(税抜)。ビルの名前より店の看板を探して。食べログの営業時間は記載が食い違うので、行く前に確認を。',
  });
}

// ================================================================ Steak＆Pizza BLAZE
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27152873/'; const R = TB + 'dtlrvwlst/';
  const D = day(['15:00', '23:00']);
  put({
    id: 'osaka_steak_pizza_blaze', name: 'Steak＆Pizza BLAZE', category: 'OMNI',
    lat: 34.670026, lng: 135.502244, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat pizza dough is the core of the menu; steak sauces not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu steak, cheese pizzas, ham and bacon.',
    hours_raw: 'Mon, Tue and Thu–Sun 15:00–23:00 (L.O. 22:30); closed Wednesday, with extra closing days posted ahead (Tabelog). Reservations accepted. QR-code ordering on your phone (September 2026). Cards accepted; no e-money or QR payment (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-3-2, Queens Court East 1F — about 8 min from Shinsaibashi or Osaka-Namba Stn',
    cuisine: 'A5 wagyu steak (chuck tender or filet) with salt, wasabi, garlic, soy and truffle · Neapolitan pizza from a high-heat pizza oven, about seven kinds · truffle mushroom and bacon · quattro formaggi with honey · jamón serrano and caprese ¥1,210 · three-appetizer platter ¥1,200 · Caesar salad with house dressing · courses ¥4,290 (solo), ¥6,930 and ¥9,350 · English menu · 20 seats',
    website: null, gmaps: gm('Steak&Pizza BLAZE 心斎橋'), menu_url: null,
    notes: "[Steak and pizza · A5 wagyu and Neapolitan pizza near Shinsaibashi] A stylish, cozy 20-seat steak-and-pizza room on the ground floor of Queens Court East, open since late 2025 and opening at 3 pm, which suits early drinkers. Many guests are visitors from abroad. The menu is in English and Japanese, and the chef speaks both. Steak is the main event: A5 wagyu chuck tender or filet, with salt, wasabi, garlic, soy and truffle on the side. Pizzas come from a high-heat oven with a crisp outside and chewy inside, about seven kinds at 22–24 cm, such as truffle mushroom and bacon or quattro formaggi with honey. Small plates include jamón serrano with caprese (¥1,210) and a Caesar salad grated with plenty of cheese. There's a ¥4,290 course for solo diners. Order by QR code on your phone. One diner found it a little pricey. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 27 November 2025 (Tabelog)', background: 'Casual fine dining; the chef speaks English and Japanese (September 2026 review); pizza dough supervised by an award-winning pizzaiolo (Tabelog).', philosophy: 'A5 wagyu and Neapolitan pizza in a casual setting (Tabelog).', specialty: 'A5 wagyu steak; Neapolitan pizza.',
      anecdotes: [
        { text: '"I appreciated being able to enjoy it with various condiments like salt, wasabi, garlic, soy sauce, and truffle." — September 2026, A5 wagyu chuck tender.', source: R + 'B536398449/' },
        { text: '"The menu was presented in both Japanese and English. The chef, who is foreign, communicated effectively in Japanese." — September 2026.', source: R + 'B536416801/' },
      ],
      japanese_sources_summary: '食べログ: Steak＆Pizza BLAZE、大阪市中央区心斎橋筋2-3-2 クインズコート東館1F、月・火・木〜日・祝15:00〜23:00(L.O.22:30)、水曜休み、9月は臨時休業日の掲載あり、予約可、カード可、電子マネー・QR不可、20席、英語メニューと英語対応スタッフ、2025年11月27日開店、コース(BLAZEコース6,930円・満腹コース9,350円、いずれも偶数人数、おひとり様コース4,290円)、世界的な職人監修の生地のナポリピッツァとA5和牛。口コミ(2026年8〜9月): 海外の客が多い、ハモンセラーノとカプレーゼ1,210円、前菜3種盛り1,200円、和牛のトウガラシのステーキ、トリュフ香るきのことベーコンのピッツァ、400℃以上の窯で短時間で焼く、自家製ドレッシングのシーザーサラダ、ペストのパスタサラダ880円、ツナのリエット770円、ほうれん草とベーコンのスペイン風オムレツ880円、塩・わさび・にんにく・醤油・トリュフで食べるステーキ、ハチミツのクアトロフォルマッジ、テーブル12席とL字カウンター、メニューは日本語と英語、英語も日本語も話すシェフ、トウガラシとフィレ、ピッツァは約7種で22〜24cm、スマホでQR注文、コスパはやや高めという声。',
      confidence: 'medium', sources: [TB, R + 'B536398449/', R + 'B536416801/', R + 'B533218996/', R + 'B533412254/', R + 'B533666347/', R + 'B534523269/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); the chef speaks English (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-2 クインズコート東館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番2号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533218996/', R + 'B534523269/'],
    price_note: 'Course prices from Tabelog; à la carte prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'A5 wagyu chuck tender steak', '', 'Steak', 'ask', 'no', 'August–September 2026.', 'chuck_tender'),
      it('', '', 'A5 wagyu filet steak', '', 'Steak', 'ask', 'no', 'September 2026.', 'filet'),
      it('', '', 'Truffle mushroom and bacon pizza', '', 'Pizza', 'no', 'no', 'August 2026.', 'truffle_pizza'),
      it('', '', 'Quattro formaggi pizza with honey', '', 'Pizza', 'no', 'no', 'September 2026.', 'quattro'),
      it('', '', 'Jamón serrano and caprese', '¥1,210', 'Appetizers', 'ask', 'no', 'August 2026.', 'jamon'),
      it('', '', 'Three-appetizer platter', '¥1,200', 'Appetizers', 'ask', 'no', 'August 2026.', 'antipasti'),
      it('', '', 'Single-person course (no drink)', '¥4,290', 'Courses', 'no', 'no', 'Tabelog.', 'solo'),
      it('', '', '"BLAZE" course (even-numbered groups)', '¥6,930', 'Courses', 'no', 'no', 'Tabelog.', 'blaze'),
      it('', '', 'Manpuku course (even-numbered groups)', '¥9,350', 'Courses', 'no', 'no', 'Tabelog.', 'manpuku'),
    ] }, {
    cuisine: 'A5和牛のステーキ(トウガラシかフィレ、塩・わさび・にんにく・醤油・トリュフで)・高温の窯で焼くナポリピッツァ約7種・トリュフ香るきのことベーコン・ハチミツのクアトロフォルマッジ・ハモンセラーノとカプレーゼ1,210円・前菜3種盛り1,200円・自家製ドレッシングのシーザーサラダ・コース4,290円(おひとり様)、6,930円、9,350円・英語メニュー・20席',
    neighborhood: '心斎橋筋2-3-2 クインズコート東館1F。心斎橋駅・大阪難波駅から徒歩約8分',
    gf_detail: 'グルテンフリーではありません。メニューの中心は小麦のピッツァ生地。ステーキのソースの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。和牛のステーキ、チーズのピッツァ、生ハムやベーコン。',
    notes: '[ステーキとピッツァ・心斎橋近くのA5和牛とナポリピッツァ] クインズコート東館1階の、おしゃれでこぢんまりした20席のステーキとピッツァの店。2025年末の開店で、15時から開くので早い時間から飲みたい人にも。海外からの客も多い店。メニューは日本語と英語で、シェフはどちらも話します。主役はステーキで、A5和牛のトウガラシかフィレを、塩、わさび、にんにく、醤油、トリュフで。ピッツァは高温の窯で外はカリッと中はもちっと、22〜24cmで約7種、トリュフ香るきのことベーコンやハチミツのクアトロフォルマッジなど。小皿はハモンセラーノとカプレーゼ(1,210円)や、チーズをたっぷり削るシーザーサラダ。ひとり用のコースは4,290円。注文はスマホでQRコードから。やや高めに感じたという人も。水曜定休。',
  });
}

// ================================================================ お好み焼き酒場 O
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27110200/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://www.dining-o.com';
  put({
    id: 'osaka_okonomiyaki_sakaba_o', name: 'お好み焼き酒場 O (Okonomiyaki Sakaba O)', category: 'OMNI',
    lat: 34.668069, lng: 135.500797, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-flour okonomiyaki batter, tenkasu, yakisoba, gyoza; okonomiyaki sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg in the batter, pork, beef tendon, squid.',
    hours_raw: 'Daily 11:30–15:00 (L.O. 14:00) and 17:00–23:00 (L.O. 22:00); closed 31 December–5 January (Tabelog). Tabelog also posts a temporary closure from 1 September to 18 October. No reservations; waits of 30–60 minutes (August 2025, March 2026). One order per person (August 2025); okonomiyaki must be ordered at once, with no extra okonomiyaki later (March 2026). Non-smoking at lunch, smoking allowed at night (Tabelog). Cards, e-money and PayPay accepted.',
    hours: ALL(day(['11:30', '15:00'], ['17:00', '23:00'])), hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-7-15, B1F — behind Shochikuza, about 2 min from Namba Stn',
    cuisine: 'Osaka okonomiyaki cooked for you by the staff, with crisp tenkasu · pork-tama · beef-tendon and Kujo green onion salt yakisoba · dote-yaki · grilled squid legs · bite-sized gyoza · squid with green onion and mayo-ponzu · spicy cucumber · sours · lunch ¥1,000–2,000, dinner ¥3,000–4,000 · 11 counter and 4 table seats',
    website: OWN, gmaps: gm('お好み焼き酒場 O 難波'), menu_url: null,
    notes: "[Okonomiyaki · a basement okonomiyaki bar behind Shochikuza] A small, clean basement okonomiyaki bar behind Shochikuza, two minutes from Namba, open since 2018 and now mostly full of visitors from abroad. The staff cook the okonomiyaki for you, and it's beautifully shaped and topped with crisp tenkasu. One visitor liked that it stays open past 10 pm. The surprise hit is the salt yakisoba with beef tendon and Kujo green onion, and the dote-yaki is tender with beer. Lines run 30 minutes to an hour; you wait at the door and order from the menu while you queue. Order all your okonomiyaki at once, since you can't add more later, and there's a one-order-per-person rule. One lunch diner found it merely average. Tabelog posted a temporary closure from 1 September to 18 October, and the newest review is from March 2026, so check before going.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 19 September 2018 (Tabelog)', background: 'Okonomiyaki izakaya with a dashi-forward batter and fresh thick yakisoba noodles (Tabelog); official site dining-o.com.', philosophy: 'Crisp outside, fluffy inside (Tabelog).', specialty: 'Okonomiyaki; beef-tendon salt yakisoba.',
      anecdotes: [
        { text: '"What really surprised me was the \'Beef Tendon and Kujo Green Onion Salt Yakisoba.\' It was truly amazing." — November 2025, lunch.', source: R + 'B521863786/' },
        { text: '"It turns out we had to place our order for okonomiyaki right away, as additional orders for it were not allowed later." — March 2026, after an hour in line.', source: R + 'B524844817/' },
      ],
      japanese_sources_summary: '公式 dining-o.com。食べログ: お好み焼き酒場 O、大阪市中央区難波1-7-15 江戸安ビルB1F、なんば駅から徒歩2分、毎日11:30〜15:00(L.O.14:00)・17:00〜23:00(L.O.22:00)、年末年始(12/31〜1/5)休み、臨時休業(9月1日〜10月18日)の掲載、予約不可、カード・電子マネー・PayPay可、15席(カウンター11、テーブル4)、昼は禁煙・夜は喫煙可、2018年9月19日開店、だしの効いたお好み焼きと生の太麺の焼きそば、外はカリッと中はふわっと。口コミ(2024年8月〜2026年3月): 夜10時過ぎも営業、海外の客が多い、店主もスタッフも笑顔、豚玉、どて焼き、イカゲソ焼き、カリカリの天かす、昼もワンドリンク制で味は普通という声、一口餃子はおいしい、30分以上並ぶ、地下で扉の前に並ぶ、並びながら注文、1人1品の注文制、スタッフが焼いてくれる、牛すじと九条ねぎの塩焼きそば、1時間待ち、お好み焼きは最初にまとめて注文で追加不可、ピリ辛きゅうり、イカとねぎのマヨポン、少し甘めの豚玉、松竹座の裏の地下。',
      confidence: 'medium', sources: [TB, OWN, R + 'B521863786/', R + 'B524844817/', R + 'B491137874/', R + 'B515554557/', R + 'B515569253/', R + 'B504845004/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; menu handed out while you queue.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-7-15 江戸安ビル B1F',
    existence: { status: 'probable', checked: TODAY, note: 'Staff-maintained Tabelog listing with current hours and a posted temporary closure (1 September–18 October); newest review March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目7番15号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491137874/', R + 'B521863786/', R + 'B524844817/', R + 'B504845004/'],
    price_note: 'No prices captured; Tabelog budget ¥1,000–1,999 lunch, ¥3,000–3,999 dinner.', last_checked: TODAY, items: [
      it('', '', 'Pork okonomiyaki (buta-tama)', '', 'Okonomiyaki', 'no', 'no', 'August 2024; March 2026.', 'butatama'),
      it('', '', 'Beef-tendon and Kujo green onion salt yakisoba', '', 'Yakisoba', 'no', 'no', 'November 2025.', 'shio_yakisoba'),
      it('', '', 'Dote-yaki (simmered beef tendon)', '', 'Small plates', 'no', 'no', 'August 2024.', 'doteyaki'),
      it('', '', 'Bite-sized gyoza', '', 'Small plates', 'no', 'no', 'April 2025.', 'gyoza'),
      it('', '', 'Squid with green onion and mayo-ponzu', '', 'Small plates', 'no', 'no', 'March 2026.', 'ika_mayopon'),
      it('', '', 'Spicy cucumber', '', 'Small plates', 'ask', 'ask', 'March 2026.', 'kyuri'),
    ] }, {
    cuisine: 'スタッフが焼く大阪のお好み焼き、カリカリの天かす・豚玉・牛すじと九条ねぎの塩焼きそば・どて焼き・イカゲソ焼き・一口餃子・イカとねぎのマヨポン・ピリ辛きゅうり・サワー・予算は昼1,000〜2,000円、夜3,000〜4,000円・カウンター11席とテーブル4席',
    neighborhood: '難波1-7-15 江戸安ビルB1F。松竹座の裏、なんば駅から徒歩約2分',
    gf_detail: 'グルテンフリーではありません。小麦粉のお好み焼きの生地、天かす、焼きそば、餃子、お好み焼きソース。',
    vegan_detail: 'ヴィーガンではありません。生地に卵、豚肉、牛すじ、イカ。',
    notes: '[お好み焼き・松竹座の裏の地下のお好み焼き酒場] なんば駅から2分、松竹座の裏の地下にある小さく清潔なお好み焼き酒場で、2018年開店、今は海外の客が中心。お好み焼きはスタッフが焼いてくれて、形もきれいで、カリカリの天かすがのります。夜10時過ぎまで開いているのがありがたいという人も。意外な人気は牛すじと九条ねぎの塩焼きそばで、どて焼きはやわらかくビールに合います。行列は30分〜1時間で、扉の前で待ちながらメニューを見て注文。お好み焼きは後から追加できないので最初にまとめて頼み、1人1品は注文を。昼は普通だったという声も。食べログには9月1日〜10月18日の臨時休業の掲載があり、最新の口コミは2026年3月なので、行く前に確認を。',
  });
}

save();
