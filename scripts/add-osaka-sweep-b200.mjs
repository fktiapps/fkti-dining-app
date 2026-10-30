// Osaka sweep (2-mile circle around Dotonbori), batch 200 — mom-and-pop queue (≤20 seats, 30+ reviews), nearest-first past ~1 km.
//   + 和風カフェ はらいそ Wafu Cafe Haraiso (one daily brown-rice onigiri set, Showa-retro 2F café; Bakuromachi)
//   + 焼鳥 刻 TOKI Yakitori Toki TOKI (omakase yakitori counter, opened October 2025; Shinmachi)
//   + toiru cafe (dog-friendly café, soft serve shaped like dog breeds; Bakuromachi)
//   - ちひろ菓子店 27112367 skipped: rapidly expanding chain (the Shinmachi shop is its first of 20+).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 200);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 和風カフェ はらいそ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27017328/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '19:00']);
  put({
    id: 'osaka_wafu_cafe_haraiso_bakuromachi', name: '和風カフェ はらいそ (Wafu Cafe Haraiso)', category: 'OMNI',
    lat: 34.678155, lng: 135.502302, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the daily main is often a fried tofu cutlet or croquette, sides have included macaroni salad, and sauces (sesame, miso, ponzu, ketchup) change with the day.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A February 2025 diner found no animal products in that day\'s set (tofu minced cutlet, tofu, bean sprouts, miso soup, brown-rice onigiri), but the menu changes daily, the miso soup\'s stock is not stated, and an earlier set included macaroni salad.',
    hours_raw: 'Mon–Fri 12:00–19:00; closed Saturday, Sunday and public holidays (Tabelog). An August 2026 diner reports last order at 15:30 for the set meal. Cash only (Tabelog; August 2026 review). Reservations accepted (Tabelog). 15 seats, counter and tables; smoking allowed except 11:00–15:00 (Tabelog). Up a steep staircase to the 2nd floor, above a Chinese restaurant (February 2025, October 2025 and January 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Bakuromachi 3-3-14, 2F, one block east of Shinsaibashi-suji — 8 min from Honmachi or Shinsaibashi Stn',
    cuisine: 'Japanese-style café with one daily set (15 seats) · Inaka set meal: a daily tofu-based main (tofu minced cutlet, tofu hamburg, tofu croquettes, lotus root stuffed with tofu), four small sides served on a bamboo leaf, chilled tofu, miso soup, pickles and brown-rice onigiri · choose 1 onigiri ¥800 or 2 ¥850 (January 2025; 2 still ¥850 in May 2026) · coffee or tea after the meal +¥50',
    website: null, gmaps: gm('和風カフェ はらいそ 博労町'), menu_url: null,
    notes: "[Café · Bakuromachi, a quiet Showa-retro room and one healthy daily set] Up a steep, worn staircase above a flashy Chinese restaurant, a dim, hushed room of antique furniture and soft music where the wall clock is audible and most diners eat alone. There is one lunch: the Inaka (country-style) set, built around a daily tofu dish — a minced cutlet with sesame sauce and grated daikon in January 2026, a fluffy tofu hamburg with daikon and ponzu in June 2026 — with four little sides on a bamboo leaf, chilled tofu, miso soup and plain brown-rice onigiri without nori. Pick one or two onigiri (¥800 or ¥850); a coffee after is ¥50. It fills up just after noon on weekdays. A September 2023 diner saw one person running the whole shop. Cash only.",
    chef_bio: { chef_name: null, roles: ['Owner (ran the shop alone on a September 2023 visit)'], origin: null, background: 'Japanese-style café serving a daily brown-rice onigiri set since at least 2018 (April 2018 review). A September 2023 diner thought the owner was running the place single-handedly.', philosophy: null, specialty: 'Daily tofu-based Inaka set with brown-rice onigiri.',
      anecdotes: [
        { text: '"The meal features a daily main dish along with four side dishes, cold tofu, miso soup, and a rural set meal with brown rice onigiri… Coffee or tea after the meal is available for just JPY 50." — January 2026, Inaka set with tofu minced cutlet.', source: R + 'B494258247/' },
        { text: '"The interior is quiet… You can even hear the ticking of the wall clock due to the tranquility." — January 2026.', source: R + 'B494258247/' },
      ],
      japanese_sources_summary: '食べログ: 和風カフェ はらいそ、大阪市中央区博労町3-3-14 2階、本町駅・心斎橋駅から徒歩8分、月〜金12:00〜19:00、土日祝休み、予約可、カード・電子マネー・QR不可、15席、喫煙可 (11時〜15時は禁煙)。口コミ(2018年4月〜2026年8月): 2階への急な階段、1階は中華料理店、昭和レトロで薄暗く静か、アンティークの家具、黒電話、ひとりの女性客が多い、メニューは日替わりの田舎定食のみ、玄米おにぎりを1個か2個 (800円・850円、2025年1月)、主菜は豆腐のメンチカツ、豆腐ハンバーグ、豆腐と野菜のコロッケなど、笹の葉にのせた小鉢4品、冷奴、味噌汁、海苔のないおにぎり、食後のドリンク50円、2025年2月の客は動物性のものなしと、2023年9月の客は店主がひとりで切り盛りしていると、2026年8月の客によるとラストオーダー15時半、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B342351679/', R + 'B470995841/', R + 'B494258247/', R + 'B499611178/', R + 'B500517861/', R + 'B521553763/', R + 'B530583607/', R + 'B538086336/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set only, just order lunch and say 1 or 2 onigiri; cash only (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区博労町3-3-14 新博労ビル2階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May, June and August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町三丁目3番14号 (go) 7m; OSM 和風カフェ はらいそ node/6325570158 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B499611178/', R + 'B538086336/', R + 'B494258247/'],
    price_note: 'Prices from January 2025 reviews; the two-onigiri price confirmed in May 2026.', last_checked: TODAY, items: [
      it('', '', 'Inaka set meal, 1 brown-rice onigiri', '¥800', 'Set meal', 'ask', 'ask', 'January 2025; daily tofu main, sides, chilled tofu, miso soup.', 'inaka1'),
      it('', '', 'Inaka set meal, 2 brown-rice onigiri', '¥850', 'Set meal', 'ask', 'ask', 'January 2025 and May 2026.', 'inaka2'),
      it('', '', 'Coffee or tea after the meal', '¥50', 'Drinks', '', '', 'January 2026.', 'drink'),
    ] }, {
    cuisine: '日替わりの定食がひとつの和風カフェ (15席)・田舎定食: 日替わりの豆腐の主菜 (豆腐のメンチカツ、豆腐ハンバーグ、豆腐と野菜のコロッケ、豆腐を詰めたれんこん)、笹の葉にのせた小鉢4品、冷奴、味噌汁、漬物、玄米おにぎり・おにぎりは1個800円か2個850円 (2025年1月。2026年5月も2個850円)・食後のコーヒーか紅茶は50円',
    neighborhood: '博労町3-3-14 2階、心斎橋筋の1本東。本町駅・心斎橋駅から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。日替わりの主菜は豆腐のメンチカツやコロッケなどの揚げ物が多く、小鉢にマカロニサラダの日もあり、ソース (ごま、味噌、ポン酢、ケチャップ) も日によって変わる。',
    vegan_detail: '要確認。2025年2月の客はその日の定食 (豆腐のメンチカツ、豆腐、もやし、味噌汁、玄米おにぎり) に動物性のものはなかったと。ただしメニューは日替わりで、味噌汁のだしは不明、以前の定食にはマカロニサラダも。',
    notes: '[カフェ・博労町、静かな昭和レトロの部屋と日替わりの体にやさしい定食] 派手な中華料理店の上、古い急な階段をのぼった2階。アンティークの家具に小さな音のBGM、時計の音が聞こえるほど静かで薄暗い部屋で、ひとりで食べる客がほとんど。ランチは田舎定食のみで、日替わりの豆腐の主菜 (2026年1月はごまだれと大根おろしの豆腐のメンチカツ、6月は大根おろしとポン酢のふわふわの豆腐ハンバーグ) に、笹の葉にのせた小鉢4品、冷奴、味噌汁、海苔を巻かない玄米おにぎり。おにぎりは1個か2個 (800円か850円)、食後のコーヒーは50円。平日は12時過ぎに満席に。2023年9月の客は店主がひとりで切り盛りしているのを見ている。現金のみ。',
  });
}

// ================================================================ 焼鳥 刻 TOKI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27152330/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yakitori-toki.com/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'osaka_yakitori_toki_shinmachi', name: '焼鳥 刻 TOKI (Yakitori Toki TOKI)', category: 'OMNI',
    lat: 34.676883, lng: 135.495859, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the course includes soy-marinated quail egg, tare-glazed skewers, a monaka wafer, country bread, and a choice of somen or curry to finish, so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken omakase course with duck, egg custard and a cheesecake.',
    hours_raw: 'Mon–Wed, Fri–Sun and holidays 18:00–22:30; closed Thursday (Tabelog). The official site says closing days are irregular. Two fixed seatings, 18:00 and 20:30, everyone starting together; phone if late, since late arrivals join the course mid-way; no children under 12 (Tabelog). Omakase course only, ¥14,300 tax included (Tabelog), plus a 10% service charge from 1 July 2026 (Tabelog); October 2026 reviews paid ¥15,730. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 14 seats by Tabelog; the official site gives a counter of 8 and a private room for 4; non-smoking. Opened 1 October 2025 (Tabelog; official site). Tabelog notes it is unrelated to the other Toki yakitori shops in Higobashi and Namba.',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi 1-20-3, SUKISHA Bldg 1F — 3 min from Yotsubashi Stn; 7 min from Shinsaibashi Stn',
    cuisine: 'Omakase yakitori counter grilling Yamagata and Hinai jidori over Kishu binchotan, with Japanese and French technique (14 seats) · course of about 15 dishes, ¥15,730 with service (October 2026) · examples (October 2026): pâté de campagne in a monaka shell, grilled-maitake consommé, chicken breast with shiso genovese, furisode (shoulder), gizzard, skin-on thigh and neck, wings smoked after grilling, liver with chive sauce, quail egg in soy sauce, fruit tomato with fig oil, Sobue ginkgo, chawanmushi with lily bulb and a porcini-truffle mushroom sauce, Kawachi duck with red wine sauce, tsukune with truffle cheese · finish: karasumi on Miwa somen or spiced curry · pumpkin cheesecake over red bean paste · sake, shochu, wine and champagne pairing, Japanese whisky',
    website: SITE, gmaps: gm('焼鳥 刻 TOKI 新町'), menu_url: null,
    notes: "[Yakitori · Shinmachi, an omakase counter that looks like a sushi bar] Nothing outside says yakitori: inside is a quiet room with a coffered ceiling, natural-stone walls and a counter cut from a 200-year-old hinoki, more like a sushi or kaiseki bar. The owner-chef, born in Osaka and shaped by youth spent in Yamagata, trained at a well-known Kitashinchi yakitori restaurant before opening here in October 2025, and grills mainly Yamagata and Hinai jidori over Kishu binchotan, folding in Japanese and French technique. Two seatings a night run one course of about 15 dishes: a pâté de campagne in a monaka shell, a grilled-maitake consommé, skin-on thigh and neck, crunchy gizzard, wings smoked after grilling, truffle-cheese tsukune, a chawanmushi under porcini-and-truffle sauce, then karasumi somen or spiced curry and a pumpkin cheesecake on red bean paste. One diner describes a young grill master who greets and explains each dish, then grills with total focus at the centre of the counter. Pairings run to wine and champagne as well as sake.",
    chef_bio: { chef_name: null, roles: ['Owner-chef'], origin: 'Born in Osaka; spent youth in Yamagata (official site).', background: 'Trained at a well-known yakitori restaurant in Kitashinchi (official site, Japanese page; the English page says Michelin-starred restaurants) before opening Yakitori Toki on 1 October 2025. Reviewers call the grill master young (October 2026). One October 2026 review says a chef from The Ritz-Carlton supervised the curry and the mushroom sauce.', philosophy: 'Cooking as thanks to people and to the land: ingredients from places tied to the chef\'s life, vegetables picked by the chef at the market, Japanese and French techniques used to take yakitori beyond its usual form (official site).', specialty: 'Omakase yakitori of Yamagata and Hinai jidori over Kishu binchotan.',
      anecdotes: [
        { text: '"The Yamagata chicken is usually raised for about 120 days, but they sometimes extend it to 150-160 days, showing their commitment to the chicken\'s growing environment." — October 2026, omakase course ¥15,730.', source: R + 'B538055088/' },
        { text: '"The chicken wings are bone-in and smoked after grilling, which reduces the fat while enhancing the aroma." — October 2026.', source: R + 'B537810007/' },
      ],
      japanese_sources_summary: '公式サイト: 焼鳥 刻 -TOKI-、大阪市西区新町1丁目20-3 SUKISHA BLD 1階、四ツ橋駅から徒歩3分、心斎橋駅から徒歩7分、2部制18:00〜と20:30〜、カウンター8名と個室4名、不定休、2025年10月1日グランドオープン、北新地の有名店で研鑽を重ねた店主、大阪で生まれ山形で青春を過ごした、山形地鶏や比内地鶏が中心、紀州備長炭、日本料理やフランス料理の技法、野菜は大将自らが市場で目利き、樹齢200年の檜カウンターと自然石の壁、格天井。食べログ: 月火水金土日祝18:00〜22:30、木曜休み、おまかせコース14300円 (税込)、2026年7月1日からサービス料10%、カード可、14席、禁煙、12歳未満不可、遅れたらコースの途中から、肥後橋・なんばの同名店とは無関係。口コミ (2026年10月): ¥15,730のおまかせ約15品、モナカのパテ・ド・カンパーニュ、焼いた舞茸のコンソメ、大葉のジェノベーゼの胸肉、ふりそで、砂ずり、皮付きのももとせせり、焼いてから燻した手羽、トリュフチーズのつくね、茶碗蒸し、締めはからすみそうめんかスパイスカレー、かぼちゃのチーズケーキ、ワインとシャンパーニュのペアリング、若い焼き手、1周年の蘭。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'en/', R + 'B537333535/', R + 'B537659201/', R + 'B537719045/', R + 'B537805756/', R + 'B537810007/', R + 'B538055088/', R + 'B538280509/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a seating (18:00 or 20:30) and arrive on time; English page on the official site (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区新町1-20-3 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current; reviews dated October 2026 (first anniversary).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区新町一丁目20番3号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538055088/', R + 'B538280509/'],
    price_note: 'Course price from Tabelog (tax included) and October 2026 reviews (with service charge).', last_checked: TODAY, items: [
      it('', '', 'Omakase course (about 15 dishes)', '¥14,300 + 10% service (¥15,730)', 'Course', 'ask', 'no', 'Tabelog; October 2026 reviews.', 'course'),
    ] }, {
    cuisine: '山形地鶏と比内地鶏を紀州備長炭で焼く、日本料理とフランス料理の技法のおまかせ焼鳥のカウンター (14席)・約15品のコース、サービス料込み15730円 (2026年10月)・例 (2026年10月): モナカに入れたパテ・ド・カンパーニュ、焼いた舞茸のコンソメ、大葉のジェノベーゼの胸肉、ふりそで、砂ずり、皮付きのももとせせり、焼いてから燻した手羽、ニラのソースのレバー、うずらの卵の醤油漬け、イチジクのオイルのフルーツトマト、Sobue の銀杏、百合根と茸のソース (ポルチーニとトリュフ) の茶碗蒸し、赤ワインソースの Kawachi 鴨、トリュフチーズのつくね・締め: からすみの Miwa そうめんかスパイスカレー・あんこの上のかぼちゃのチーズケーキ・日本酒、焼酎、ワインとシャンパーニュのペアリング、ジャパニーズウイスキー',
    neighborhood: '新町1-20-3 SUKISHA BLD 1階。四ツ橋駅から徒歩3分、心斎橋駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。コースにはうずらの卵の醤油漬け、タレの串、モナカ、田舎パン、締めのそうめんかカレーがあるので、予約のときに確認を。',
    vegan_detail: 'ヴィーガンではありません。鶏のおまかせのコースで、鴨、茶碗蒸し、チーズケーキも。',
    notes: '[焼鳥・新町、すし屋のようなおまかせのカウンター] 外から焼鳥屋とはわからない。中は格天井に自然石の壁、樹齢200年の檜のカウンターの静かな空間で、すしや懐石の店のよう。大阪で生まれ山形で青春を過ごした店主は北新地の有名店で研鑽を重ね、2025年10月にここを開店。山形地鶏や比内地鶏を中心に紀州備長炭で焼き、日本料理とフランス料理の技法も合わせる。2部制で約15品のコースのみ。モナカに入れたパテ・ド・カンパーニュ、焼いた舞茸のコンソメ、皮付きのももとせせり、歯ごたえのある砂ずり、焼いてから燻した手羽、トリュフチーズのつくね、ポルチーニとトリュフのソースの茶碗蒸し、締めはからすみそうめんかスパイスカレー、最後にあんこの上のかぼちゃのチーズケーキ。カウンターの真ん中で若い焼き手があいさつと説明をしながら、集中して焼くという声。日本酒のほか、ワインやシャンパーニュのペアリングも。',
  });
}

// ================================================================ toiru cafe
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27152790/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://www.hotpepper.jp/strJ004492884/';
  const H = day(['08:00', '20:00']);
  put({
    id: 'osaka_toiru_cafe_bakuromachi', name: 'toiru cafe', category: 'OMNI',
    lat: 34.678262, lng: 135.501143, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the soft serve comes in a cup or a cone (waffle cone on Hot Pepper), the faces are sugar candy, and scones are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dairy soft serve with a rich milk flavour.',
    hours_raw: 'Daily 8:00–20:00, food last order 19:30 (Tabelog); Hot Pepper lists Tuesday as the closing day and soft serve until 19:30 on Mondays, so check Tuesdays. Order at a self-service touch panel (September 2026 reviews). Reservations through Tabelog (August 2026 review). Cards (VISA, Master, JCB, UnionPay), PayPay, d Barai, Rakuten Pay, Alipay (Tabelog). 20 seats (Tabelog; Hot Pepper says 24), sofa seating, wheelchair access, free Wi-Fi, non-smoking (Tabelog). Dogs welcome inside, with a menu for dogs; children and strollers welcome; English, Traditional Chinese and Korean menus (Tabelog; Hot Pepper). Opened 27 November 2025 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Bakuromachi 3-6-8, between Shinsaibashi and Honmachi — 5 min from Shinsaibashi Stn',
    cuisine: 'Dog-friendly café (20 seats) · soft serve topped with a dog face in sugar candy: 12 dog breeds and 2 cats (September 2026), e.g. Yorkshire terrier chocolate ¥690, Pomeranian vanilla ¥690 (August 2026), Maltese vanilla; cup or cone · scone ¥450 · matcha and hojicha drinks · dog food menu',
    website: null, gmaps: gm('toiru cafe 博労町'), menu_url: null,
    notes: "[Café · Bakuromachi, soft serve dressed as your favourite dog] A white, wood-trimmed café opened in late 2025 where dogs come in with their owners and the soft serve wears a sugar-candy face of a dog breed: twelve breeds and two cats to choose from on the touch-panel, in a cup or a cone. Diners rate the ice cream itself rich and milky, around ¥690–750 (August 2026), and there are scones, matcha and hojicha drinks, and a menu for the dogs. One August 2026 diner found the faces vary in neatness and the room a little food-court-like; on a Sunday it was packed. Open from 8 am; Tuesday hours conflict between listings.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Dog-friendly café that opened on 27 November 2025 (Tabelog).', philosophy: 'A break for people walking their dogs, with soft serve designed after dog breeds and meals for dogs (Tabelog, shop-provided).', specialty: 'Dog-breed soft serve.',
      anecdotes: [
        { text: '"You can choose from 12 different dog designs for the soft serve, all of which are incredibly cute. There are also 2 cat options available." — September 2026, Maltese vanilla.', source: R + 'B536123769/' },
        { text: '"Dog Soft Serve Ice Cream - JPY 750 / Scone - JPY 450" — August 2026.', source: R + 'B533862244/' },
      ],
      japanese_sources_summary: '食べログ: toiru cafe、大阪市中央区博労町3-6-8、心斎橋駅から徒歩5分、8:00〜20:00 (フードL.O. 19:30)、予約可、カード・PayPay・d払い・楽天ペイ・Alipay可、20席、禁煙、ペット可、テイクアウト、英語・繁体字・韓国語のメニュー、子供・ベビーカー可、車椅子可、オープン日2025年11月27日。ホットペッパー: 月・水〜日8:00〜20:00、火曜定休、月曜のソフトクリームは19時30分まで、ワンちゃん専用メニューあり。口コミ(2026年8月〜9月): 犬の顔のソフトクリーム、犬12種と猫2種、ヨークシャーテリアのチョコとポメラニアンのバニラ各690円、ソフト750円とスコーン450円、カップかコーン、セルフのタッチパネルで注文、濃いミルクの味、見た目にばらつき、日曜は満席。',
      confidence: 'medium', sources: [TB, HP, R + 'B533363908/', R + 'B533862244/', R + 'B534010442/', R + 'B534426366/', R + 'B535734096/', R + 'B536123769/', R + 'B537484340/'] },
    cultural_comfort: { level: 'english', note: 'English menu and touch-panel ordering (Tabelog; 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区博労町3-6-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区博労町三丁目6番8号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534010442/', R + 'B533862244/'],
    price_note: 'Prices from August 2026 reviews; Hot Pepper lists soft serve from ¥660.', last_checked: TODAY, items: [
      it('', '', 'Dog soft serve, Yorkshire terrier (chocolate)', '¥690', 'Soft serve', 'ask', 'no', 'August 2026.', 'yorkie'),
      it('', '', 'Dog soft serve, Pomeranian (vanilla)', '¥690', 'Soft serve', 'ask', 'no', 'August 2026.', 'pom'),
      it('', '', 'Scone', '¥450', 'Sweets', 'ask', 'ask', 'August 2026.', 'scone'),
    ] }, {
    cuisine: '犬と入れるカフェ (20席)・犬の顔の飴細工をのせたソフトクリーム: 犬12種と猫2種 (2026年9月)、例: ヨークシャーテリアのチョコ690円、ポメラニアンのバニラ690円 (2026年8月)、マルチーズのバニラ、カップかコーン・スコーン450円・抹茶やほうじ茶のドリンク・ワンちゃん専用メニュー',
    neighborhood: '博労町3-6-8、心斎橋と本町のあいだ。心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ソフトクリームはカップかコーン (ホットペッパーではワッフル) で、顔は飴細工、スコーンもある。',
    vegan_detail: 'ヴィーガンではありません。濃いミルクのソフトクリーム。',
    notes: '[カフェ・博労町、好きな犬の顔のソフトクリーム] 2025年の終わりにできた白と木のカフェ。犬と一緒に入れて、ソフトクリームには犬の顔の飴細工。タッチパネルで犬12種と猫2種から選び、カップかコーンで。ソフトクリームそのものも濃いミルクの味と好評で、690〜750円 (2026年8月)。スコーン、抹茶やほうじ茶のドリンク、犬のためのメニューも。2026年8月の客は顔の出来にばらつきがあり、少しフードコートのようだと。日曜は満席だった。朝8時から。火曜の営業はサイトによって違う。',
  });
}

// ================================================================ skipped
skip('27112367', 'ちひろ菓子店 (Chihiro Kashiten, Shinmachi main store): chain flagship — over 20 shops across Kansai, Tokyo and Nagoya since 2019 (October 2026 Tabelog review B537559771; recruiting page lists 7 shops in Osaka city plus Minoh, Suita, Nishinomiya); rapidly expanding chain');

save();
