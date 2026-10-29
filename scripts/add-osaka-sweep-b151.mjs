// Osaka sweep (2-mile circle around Dotonbori), batch 151 — mom / small-shop phase (all OMNI).
//   + 多満喜 (monthly fish-hot-pot course with a sake pairing, cheap weekday lunch; Minami-Senba)
//   + 創作フレンチLemone (late-night creative French bistro: duck, pilaf, courses; Minami-Senba; same building as Ramen Seigo, offset)
//   + 酒パンつつみ (bread-and-drinks bar: toasts, baguettes, sandwiches with wine; Minami-Senba)
//   + ぼっかけや (soba shop by day, soba izakaya by night; Shinmachi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 151);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 多満喜
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27044765/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'osaka_tamaki_minamisenba', name: '多満喜 (Bishu Shunsai Shungyo Tamaki)', category: 'OMNI',
    lat: 34.677931, lng: 135.50302, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based dashi and hot pots; udon or Chinese noodles to finish some months.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-centred courses with dashi throughout.',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:30) and 17:30–23:00 (last order 22:30); Sat 17:30–23:00; closed Sun and public holidays, open on Saturday holidays (Tabelog). ¥500 table charge per person, none with a course (Tabelog). Dislikes handled if told when booking (September 2026). Course prices rising from October 2026 (September 2026 review). Cards accepted (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: day(['17:30', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-1-7, Nippo Higashi-Shinsaibashi Bldg 1F, at the back, under a tall sign — 6 min from Shinsaibashi Stn',
    cuisine: 'Japanese fish and sake · a monthly course around ¥5,000 with a sake pairing, ending in a fish hot pot rather than meat: e.g. Kinmedai shabu-shabu, sea bream shabu-shabu, abalone shabu-shabu, conger eel sukiyaki with egg, whale Harihari hot pot (Oct 2026) · courses run from a starter (e.g. ikura chawanmushi, nagaimo somen) through sashimi (e.g. Kinmedai, Katsuo, Isaki), grilled and steamed dishes (eel, conger eel, sweetfish, duck with water eggplant) to zosui, udon or noodles · sakes such as Zao, Sasaichi, Kinran · weekday lunch: daily set or bento about ¥1,000 · 13 seats',
    website: null, gmaps: gm('多満喜'), menu_url: null,
    notes: "[Japanese · monthly fish hot-pot course with a sake pairing, Minami-Senba] A small, long-running izakaya tucked into the back of a building near Shinsaibashi, with a counter and a few tables. The draw is the monthly course, around ¥5,000 with a glass of sake matched to each dish: a seasonal starter, three kinds of sashimi, grilled and steamed fish, then a fish hot pot as the main, such as Kinmedai shabu-shabu or conger eel sukiyaki, finished with zosui or noodles. The menu changes every month; one diner returns every month. Dislikes are handled if you say so when booking. Weekday lunch is a cheap daily set. Smoking allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Izakaya of seasonal fish and sake (Tabelog; 2015–2026 reviews).', philosophy: 'A monthly course with a fish hot pot as the main and sake matched to each dish (2025–2026 reviews).', specialty: 'Monthly fish hot-pot course with sake pairing.',
      anecdotes: [
        { text: '"What I appreciate the most is that the main dish is a hot pot featuring fish instead of meat." — May 2026, Kinmedai shabu-shabu course.', source: R + 'B113124003/' },
        { text: '"This restaurant offers a luxurious monthly course with a pairing of Japanese sake. And the best part? The course is under JPY 5000…" — July 2025.', source: R + 'B512396593/' },
      ],
      japanese_sources_summary: '食べログ: 多満喜、大阪市中央区南船場3-1-7 日宝東心斎橋ビル １F、心斎橋駅から徒歩6分、細長い大きな看板、月〜金 11:30〜14:00 (L.O. 13:30)・17:30〜23:00 (L.O. 22:30)、土 17:30〜23:00、日・祝休み (土曜の祝日は営業)、チャージ料500円 (コースはなし)、カード可、喫煙可、13席。口コミ(2025年7月〜2026年10月): 月替わりのコースと日本酒のペアリングで約5,000円、メインは魚の鍋 (Kinmedai のshabu-shabu、鯛のshabu-shabu、あわびのshabu-shabu、conger eel のsukiyakiを溶き卵で、鯨の Harihari 鍋)、ikura の茶碗蒸し、刺身3種 (Kinmedai、Katsuo、Isaki など)、焼き物と蒸し物、締めはzosui・udon・中華麺、Zao・Sasaichi・Kinran などの日本酒、苦手なものは予約時に伝えれば対応、2026年10月からコースは値上げ、平日の昼は約1,000円の日替わり。',
      confidence: 'medium', sources: [TB, R + 'B113124003/', R + 'B512396593/', R + 'B533823691/', R + 'B536688707/', R + 'B537644997/', R + 'B537943220/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set monthly course; tell dislikes when booking (2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Swapped a dish for a diner who could not eat figs, after a call ahead (September 2026).', source: R + 'B113124003/' }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-1-7 日宝東心斎橋ビル １F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市中央区南船場三丁目1番7号 (go) 35m — Tabelog point kept (shop is at the back of the building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512396593/', R + 'B537644997/'],
    price_note: 'Course price from a July 2025 review, rising from October 2026; lunch from August 2026.', last_checked: TODAY, items: [
      it('', '', 'Monthly course with sake pairing', '~¥5,000', 'Courses', 'no', 'no', 'July 2025; price rising (September 2026).', 'course'),
      it('', '', 'Weekday lunch set / bento', '¥1,000', 'Lunch', 'ask', 'no', 'August 2026.', 'lunch'),
    ] }, {
    cuisine: '魚と日本酒の和食・月替わりのコースは日本酒のペアリングつきで約5,000円、メインは魚の鍋: たとえば Kinmedai のshabu-shabu、鯛のshabu-shabu、あわびのshabu-shabu、溶き卵で食べる conger eel のsukiyaki、鯨の Harihari 鍋 (2026年10月)・前菜 (ikura の茶碗蒸し、nagaimo somenなど) から刺身 (Kinmedai、Katsuo、Isaki など)、焼き物と蒸し物 (うなぎ、conger eel、鮎、鴨と水なす) を経て、締めはzosui、udon、中華麺・Zao、Sasaichi、Kinran などの日本酒・平日の昼は約1,000円の日替わり・13席',
    neighborhood: '中央区南船場3-1-7 日宝東心斎橋ビル １F の奥、細長い大きな看板。心斎橋駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。醤油のだしと鍋、月によっては締めにudonや中華麺。',
    vegan_detail: 'ヴィーガンではありません。魚が中心のコースで、だしも使う。',
    notes: '[和食・南船場、日本酒のペアリングつき月替わりの魚の鍋のコース] 心斎橋近く、ビルの奥にある小さな長く続く居酒屋で、カウンターとテーブルが少し。目当ては月替わりのコースで、料理ごとに日本酒を1杯合わせて約5,000円: 季節の前菜、3種の刺身、焼き物や蒸し物の魚、そしてメインは Kinmedai のshabu-shabuや conger eel のsukiyakiなど魚の鍋、締めはzosuiか麺。毎月献立が変わり、毎月通うという声も。苦手なものは予約時に伝えれば対応してくれる。平日の昼は手ごろな日替わり。喫煙可。日曜休み。',
  });
}

// ================================================================ 創作フレンチLemone
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27144388/'; const R = TB + 'dtlrvwlst/';
  const DN = day(['17:00', '01:00']); const LD = day(['11:30', '14:30'], ['17:00', '01:00']);
  put({
    id: 'osaka_lemone_minamisenba', name: '創作フレンチLemone (Lemone)', category: 'OMNI',
    lat: 34.677329, lng: 135.505981, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: baguette; sauces; coated tuna; desserts.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck, venison, foie gras and seafood; butter and cream sauces.',
    hours_raw: 'Mon, Tue, Sat, Sun and public holidays 17:00–01:00; Wed–Fri 11:30–14:30 and 17:00–01:00; last order 00:30; some Mondays closed — see Instagram stories (Tabelog). E-cigarettes only until 22:00, cigarettes after (Tabelog). Cards, e-money and QR accepted (Tabelog).',
    hours: { 0: DN, 1: DN, 2: LD, 3: LD, 4: LD, 5: DN, 6: DN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 2-2-28, Junkei Bldg 1F — 2 min from Nagahoribashi Stn exit 2A',
    cuisine: 'Creative French, à la carte and courses, late · Executive Course: foie gras mousse; three appetizers; scallop and turnip in nage; crab and daikon consommé royale; potage; lobster and foie gras fricassée with black truffle and white port; roast Hokkaido Ezo venison with raspberry red-wine sauce; duck magret pilaf; dessert · à la carte: roast duck breast with bigarade sauce, seafood pilaf, consommé daikon, oyster ajillo with baguette, lightly coated semi-raw tuna, tongue sole mousse with caviar · homemade balsamic vinegar; a sommelier chef for wine pairings · 14 seats: 8 at the counter',
    website: null, gmaps: gm('創作フレンチLemone'), menu_url: null,
    notes: "[French · a late-night creative French bistro, Minami-Senba] A cozy counter-and-table French spot near Nagahoribashi that serves until 1:00, with warm service and a sommelier chef for wine. Order à la carte, such as the roast duck breast with bigarade sauce, the seafood pilaf or the inventive consommé daikon, or book the Executive Course of foie gras mousse, lobster and foie gras fricassée and roast Ezo venison, finishing with a duck pilaf. Even the balsamic is homemade. Seasoning is bold, and some diners find it salty; service can be slow, so it suits a long evening. Lunch Wednesday to Friday.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Creative French bistro (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Duck; French courses.',
      anecdotes: [
        { text: '"The recommended duck and pilaf were outstanding, and among them, the consomme daikon was innovative and incredibly tasty." — August 2026.', source: R + 'B532930805/' },
        { text: '"…we learned that even the balsamic vinegar is homemade, showcasing the chef\'s attention to detail." — August 2026.', source: R + 'B533827775/' },
      ],
      japanese_sources_summary: '食べログ: 創作フレンチLemone、大阪市中央区南船場2-2-28 順慶ビル 1F、長堀橋駅2A出口から徒歩2分、月・火・土・日・祝 17:00〜翌1:00、水〜金 11:30〜14:30・17:00〜翌1:00、L.O. 0:30、月曜は休むことも (Instagram のストーリーズ)、22時までは電子たばこのみ、以降は紙巻きも可、カード・電子マネー・QR可、14席 (カウンター8、6名テーブル1)。口コミ(2026年7〜9月): エグゼクティブコース (フォアグラのムース、前菜3種、ホタテとかぶのナージュ、カニと大根のコンソメロワイヤル、ポタージュ、オマール海老とフォアグラのフリカッセ 黒トリュフと白ポートのソース、北海道の Ezo の鹿のロースト ラズベリーと赤ワインのソース、鴨のマグレのピラフ、デザート)、アラカルトの鴨のロースト ビガラードソース、魚介のピラフ、コンソメ大根、牡蠣のアヒージョ、半生のマグロ、舌平目のムースとキャビア、自家製のバルサミコ、ソムリエのシェフ、味つけは濃いめで塩気が強いという声、提供がゆっくりという声。',
      confidence: 'medium', sources: [TB, R + 'B532930805/', R + 'B533732719/', R + 'B533827775/', R + 'B534329576/', R + 'B534340564/', R + 'B536180264/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter; friendly staff (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-2-28 順慶ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB} (34.677392, 135.505981); same building as Ramen Seigo (osaka_ramen_seigo_minamisenba), pin offset ~7 m south so the two do not stack; GSI 大阪府大阪市中央区南船場二丁目2番28号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533732719/', R + 'B536180264/'],
    price_note: 'No prices in the reviews; JPY 4,000–5,999 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Executive Course', '', 'Courses', 'no', 'no', 'August 2026.', 'executive'),
      it('', '', 'Roast duck breast with bigarade sauce', '', 'Meat', 'ask', 'no', 'September 2026.', 'duck'),
      it('', '', 'Seafood pilaf', '', 'Rice', 'ask', 'no', 'September 2026.', 'pilaf'),
      it('', '', 'Consommé daikon', '', 'Small plates', 'ask', 'no', 'August 2026.', 'daikon'),
      it('', '', 'Oyster ajillo with baguette', '', 'Small plates', 'no', 'no', 'August 2026.', 'ajillo'),
    ] }, {
    cuisine: '創作フレンチ、アラカルトとコース、夜遅くまで・エグゼクティブコース: フォアグラのムース、前菜3種、ホタテとかぶのナージュ、カニと大根のコンソメロワイヤル、ポタージュ、オマール海老とフォアグラのフリカッセ (黒トリュフと白ポートのソース)、北海道の Ezo の鹿のロースト (ラズベリーと赤ワインのソース)、鴨のマグレのピラフ、デザート・アラカルト: 鴨のロースト ビガラードソース、魚介のピラフ、コンソメ大根、バゲットと牡蠣のアヒージョ、薄い衣の半生のマグロ、舌平目のムースとキャビア・自家製のバルサミコ、ワインはソムリエのシェフと・14席: カウンター8席',
    neighborhood: '中央区南船場2-2-28 順慶ビル 1F。長堀橋駅2A出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。バゲット、ソース、衣のマグロ、デザート。',
    vegan_detail: 'ヴィーガンではありません。鴨、鹿、フォアグラ、魚介、バターとクリームのソース。',
    notes: '[フレンチ・南船場、夜遅くまでの創作フレンチのビストロ] 長堀橋近く、カウンターとテーブルの居心地のいいフレンチで、深夜1時まで。あたたかい接客で、ワインはソムリエのシェフと。アラカルトなら鴨のロースト ビガラードソース、魚介のピラフ、意外なコンソメ大根、コースならフォアグラのムース、オマール海老とフォアグラのフリカッセ、Ezo の鹿のロースト、締めの鴨のピラフのエグゼクティブコースを。バルサミコまで自家製。味つけは濃いめで塩気が強いという声も、提供はゆっくりめなので長い夜向き。昼は水〜金曜。',
  });
}

// ================================================================ 酒パンつつみ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121191/'; const R = TB + 'dtlrvwlst/';
  const A = day(['18:00', '23:59']); const B = day(['18:00', '02:00']);
  put({
    id: 'osaka_sake_pan_tsutsumi_minamisenba', name: '酒パンつつみ (Sake Pan Tsutsumi)', category: 'OMNI',
    lat: 34.676931, lng: 135.507534, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bread bar — toasts, baguettes and sandwiches.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter, cheese, egg, prosciutto and duck on most bread; the namul and some salads may be meat-free — ask.',
    hours_raw: 'Wed, Thu, Sun 18:00–24:00; Fri–Sat 18:00–02:00; closed Mon–Tue; irregular closings (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Can be slow with one staff member (October 2026).',
    hours: { 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Minami-Senba 1-13-15, Nagahori Sanei Plaza 2F — 3 min from Nagahoribashi Stn',
    cuisine: 'Bread and drinks bar · CHE Sandwich ¥800 (cheese, hash browns, egg) · baguettes and toasts: aosa butter; salt kombu with cream cheese; prosciutto and new onion yukhoe ¥600; duck with cheddar; sausage pizza toast ¥800; corn potage toast; homemade egg sandwich · small plates: water eggplant and prosciutto salad ¥550 (with avocado); baked mushrooms with seaweed mayo ¥650; namul · carrot cake ¥350 · wine by the bottle from ¥3,800, incl. domestic bottles from Hitomi Winery; craft gins, shochu, grape beer · 20 seats incl. standing',
    website: null, gmaps: gm('酒パンつつみ'), menu_url: null,
    notes: "[Bar · a bread-and-drinks bar, Minami-Senba] A stylish little second-floor bar near Nagahoribashi built around bread with wine. Order the CHE Sandwich (¥800), crisp hash browns with gooey cheese and egg, then work through baguettes and toasts topped with aosa butter, salt kombu and cream cheese, or a prosciutto and new onion yukhoe; the water eggplant and prosciutto salad is a cool side. Wines sit in a fridge for you to choose, from ¥3,800 a bottle including domestic labels, plus craft gin and grape beer. With one person on the floor it can be slow. Cash only. Open late Fridays and Saturdays; closed Mondays and Tuesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Bread and wine bar (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Toasts and sandwiches with wine.',
      anecdotes: [
        { text: '"…the CHE Sandwich… it\'s a perfect combination of cheese, hash browns, and egg. The crispy hash browns paired with the gooey cheese and egg create an amazing harmony!" — May 2026, CHE Sandwich ¥800.', source: R + 'B460705104/' },
        { text: '"The Aosa Butter Sandwich had a delightful fresh scent of the ocean, and the Corn Potage Toast truly tasted like corn potage, which was quite interesting." — June 2026.', source: R + 'B530699810/' },
      ],
      japanese_sources_summary: '食べログ: 酒パンつつみ、大阪市中央区南船場1-13-15 長堀三栄プラザ 2F、長堀橋駅から徒歩3分、水・木・日 18:00〜24:00、金・土 18:00〜翌2:00、月・火休み、不定休、カード・電子マネー・QR不可、20席 (立ち飲み含む)。口コミ(2026年5〜10月): パンとお酒のバー、CHE サンド800円 (チーズ、ハッシュポテト、卵)、aosa バターのバゲット、塩 kombu とクリームチーズ、生ハムと新玉ねぎの yukhoe 600円、鴨とチェダー、ソーセージのピザトースト800円、コーンポタージュのトースト、自家製の卵サンド、水なすと生ハムのサラダ550円、きのこの海苔マヨ焼き650円、namul、キャロットケーキ350円、冷蔵庫から選ぶワイン (ボトル3,800円から、Hitomi Winery など国産も)、クラフトジン、焼酎、ぶどうのビール、店の人がひとりで時間がかかることも。',
      confidence: 'medium', sources: [TB, R + 'B460705104/', R + 'B530699810/', R + 'B532962738/', R + 'B535555339/', R + 'B535793247/', R + 'B536707225/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pick wine from the fridge; bread cut to share (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-13-15 長堀三栄プラザ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目13番15号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B460705104/'],
    price_note: 'Prices from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'CHE Sandwich (cheese, hash browns, egg)', '¥800', 'Bread', 'no', 'no', 'May 2026.', 'che'),
      it('', '', 'Prosciutto and new onion yukhoe on baguette', '¥600', 'Bread', 'no', 'no', 'May 2026.', 'yukhoe'),
      it('', '', 'Sausage pizza toast', '¥800', 'Bread', 'no', 'no', 'May 2026.', 'pizza_toast'),
      it('', '', 'Water eggplant and prosciutto salad', '¥550', 'Small plates', 'ask', 'no', 'May 2026.', 'mizunasu'),
      it('', '', 'Carrot cake', '¥350', 'Dessert', 'no', 'ask', 'May 2026.', 'carrot'),
    ] }, {
    cuisine: 'パンとお酒のバー・CHE サンド800円 (チーズ、ハッシュポテト、卵)・バゲットやトースト: aosa バター、塩 kombu とクリームチーズ、生ハムと新玉ねぎの yukhoe 600円、鴨とチェダー、ソーセージのピザトースト800円、コーンポタージュのトースト、自家製の卵サンド・小皿: アボカド入りの水なすと生ハムのサラダ550円、きのこの海苔マヨ焼き650円、namul・キャロットケーキ350円・ワインはボトル3,800円から、Hitomi Winery など国産も、クラフトジン、焼酎、ぶどうのビール・立ち飲みを含め20席',
    neighborhood: '中央区南船場1-13-15 長堀三栄プラザ 2F。長堀橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。パンのバーで、トースト、バゲット、サンド。',
    vegan_detail: 'ヴィーガンではありません。ほとんどのパンにバター、チーズ、卵、生ハム、鴨。namul や一部のサラダは肉なしかもしれないので確認を。',
    notes: '[バー・南船場、パンとお酒のバー] 長堀橋近く、ビル2階のおしゃれな小さなバーで、パンとワインが主役。まずはカリカリのハッシュポテトにとろけるチーズと卵の CHE サンド (800円)、それから aosa バター、塩 kombu とクリームチーズ、生ハムと新玉ねぎの yukhoe などのバゲットやトーストを。水なすと生ハムのサラダはさっぱり。ワインは冷蔵庫から選べ、ボトル3,800円から、国産も。クラフトジンやぶどうのビールも。ひとりで回していると時間がかかることも。現金のみ。金・土は深夜まで、月・火曜休み。',
  });
}

// ================================================================ ぼっかけや
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27011368/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'osaka_bokkake_ya_shinmachi', name: 'ぼっかけや (Bokkake Ya)', category: 'OMNI',
    lat: 34.677949, lng: 135.4974, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based dipping sauce and dashi; tempura. Ju-wari soba itself is listed by diners, but whether it is 100% buckwheat today and how it is cooked is unconfirmed — ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi in the sauces; fish and meat small plates.',
    hours_raw: 'Mon–Sat 11:30–14:30 (last food order 14:00) and 17:30–22:00 (last food order 21:30); public holidays close 21:30; closed Sun; some holidays closed — see Tabelog or Instagram (Tabelog). Lunch busy and small (2026). Cards and PayPay accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-2-13, Shinmachi Bldg 1F — 3 min from Yotsubashi Stn north exit 1A or Honmachi Stn',
    cuisine: 'Soba shop with a soba izakaya at night · Ju-wari soba, thin and fragrant, good with just salt · Bokkake soba · Iso Karami Soba with seaweed, sudachi and spicy grated daikon · cold oroshi-bukkake soba with very spicy daikon · Yamato Tororo Soba ¥1,450 · walnut soba · lunch sets: soba with a miso tempura rice bowl (burdock tempura) · Nozawana onigiri · evenings: five assorted small plates, dashi omelette, seasoned beans, grilled iwana, omakase sake snacks, courses · sakes such as Daishinshu and Igarashi; Yona Yona Ale · 20 seats: 5 at the counter',
    website: null, gmaps: gm('ぼっかけや'), menu_url: null,
    notes: "[Soba · a soba shop that turns into a soba izakaya, Shinmachi] A small soba shop near Yotsubashi that has served thin, fragrant Ju-wari soba for many years, packed at lunch and a relaxed soba izakaya at night. At lunch, try the Iso Karami Soba with seaweed, sudachi and spicy daikon, or a set of cold soba with a miso tempura rice bowl; the grated daikon is fiercely hot, and the soba is good with just salt. In the evening, order the five-piece small-plate platter, a dashi omelette and grilled iwana with sake, then finish with Bokkake soba. Counter seats are tight. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Diners recall visits nearly 20 years ago (September 2026 review).', background: 'Soba shop and soba izakaya (Tabelog; 2008–2026 reviews).', philosophy: null, specialty: 'Ju-wari soba; soba with sake snacks.',
      anecdotes: [
        { text: '"The dish was beautifully presented with plenty of seaweed and slices of sudachi arranged like a floral pattern, topped with spicy daikon radish." — October 2026, Iso Karami Soba.', source: R + 'B115643878/' },
        { text: '"I tried it first with salt. Delicious! It paired perfectly. The salt really enhanced the flavor of the soba itself… What surprised me was the grated daikon! It was incredibly spicy…" — October 2026, grated soba and miso tempura rice bowl set.', source: R + 'B536595118/' },
      ],
      japanese_sources_summary: '食べログ: ぼっかけや、大阪市西区新町1-2-13 新町ビル 1F、四ツ橋駅北1A出口・本町駅から徒歩3分、月〜土 11:30〜14:30 (L.O. 料理14:00)・17:30〜22:00 (L.O. 料理21:30)、祝日は21:30まで、日曜休み、祝日の休みは Tabelog か Instagram で、カード・PayPay 可、20席 (カウンター5)。口コミ(2008年〜2026年10月): 昼は混む小さなそば店、夜はそば居酒屋、細く香りのいい Ju-wari のそば、塩で食べてもおいしい、ぼっかけそば、Iso Karami Soba (海藻、sudachi、辛い大根おろし)、冷たいoroshi-bukkake (大根おろしがとても辛い)、Yamato Tororo Soba 1,450円、くるみのそば、昼はそばと味噌の天丼 (ごぼうの天ぷら) のセット、Nozawana のおにぎり、夜は小皿5種盛り、だしの卵焼き、豆、iwana の塩焼き、おまかせの酒の肴、コース、Daishinshu・Igarashi などの日本酒、Yona Yona Ale、カウンターは狭い。',
      confidence: 'medium', sources: [TB, R + 'B115643878/', R + 'B531954634/', R + 'B534414683/', R + 'B536559716/', R + 'B536595118/', R + 'B537471461/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick, attentive staff (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-2-13 新町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目2番13号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B115643878/', R + 'B536559716/', R + 'B536595118/'],
    price_note: 'Only one dish price in the reviews; lunch JPY 1,000–1,999, dinner JPY 4,000–4,999 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Iso Karami Soba', '', 'Soba', 'no', 'no', 'October 2026.', 'iso'),
      it('', '', 'Yamato Tororo Soba', '¥1,450', 'Soba', 'no', 'no', 'August 2026.', 'tororo'),
      it('', '', 'Cold grated-daikon soba with miso tempura rice bowl', '', 'Lunch sets', 'no', 'no', 'October 2026.', 'set'),
      it('', '', 'Bokkake soba', '', 'Soba', 'no', 'no', 'October 2026.', 'bokkake'),
      it('', '', 'Five assorted small plates', '', 'Evening', 'ask', 'no', 'July–October 2026.', 'otsumami'),
    ] }, {
    cuisine: 'そば店、夜はそば居酒屋・細く香りのいい Ju-wari のそば、塩だけでも・ぼっかけそば・海藻、sudachi、辛い大根おろしの Iso Karami Soba・とても辛い大根おろしの冷たいoroshi-bukkake・Yamato Tororo Soba 1,450円・くるみのそば・昼のセット: そばと味噌の天丼 (ごぼうの天ぷら)・Nozawana のおにぎり・夜は小皿5種盛り、だしの卵焼き、豆、iwana の塩焼き、おまかせの酒の肴、コース・Daishinshu、Igarashi などの日本酒、Yona Yona Ale・20席: カウンター5席',
    neighborhood: '西区新町1-2-13 新町ビル 1F。四ツ橋駅北1A出口・本町駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。醤油のつゆとだし、天ぷら。Ju-wari のそばと書かれているが、今も十割かどうか、ゆで方などは未確認なので確認を。',
    vegan_detail: 'ヴィーガンではありません。つゆにだし、魚や肉の小皿。',
    notes: '[そば・新町、夜はそば居酒屋になるそば店] 四ツ橋近くの小さなそば店で、細く香りのいい Ju-wari のそばを長く出し、昼は満席、夜は落ち着いたそば居酒屋になる。昼は海藻、sudachi、辛い大根おろしの Iso Karami Soba か、冷たいそばと味噌の天丼のセットを。大根おろしはかなり辛く、そばは塩だけでもおいしい。夜は小皿5種盛り、だしの卵焼き、iwana の塩焼きを日本酒とともに、締めはぼっかけそば。カウンターは狭め。日曜休み。',
  });
}

save();
