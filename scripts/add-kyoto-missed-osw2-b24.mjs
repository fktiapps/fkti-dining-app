// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 24.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, lane ids in order):
//   - 京都イタリアン 欧食屋 Kappa (26027685): already in data as kyo_oshokuya_kappa — skipped (left unmarked in batch 23).
//   + SHAVA LIVA (all-day modern Italian café-lounge at Kawaramachi-Oike; since 2008)
//   + 洋風居酒屋 水田食堂 Mizuta Shokudo (one-person Western-style izakaya counter near Kyoto-Shiyakusho-mae; since 2022)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - 和醸良麺 すがり 高倉二条 group shop (26035887): same-concept branch of a brand already in data (kyr_wajo_ryomen_sugari) — skipped.
//   + 御料理 味舌 Mashita (Gion kaiseki on Shijo-dori; since 1979)
//   + ryu no hige by MITATE (Kyoto cuisine × French × sushi in a Shijo-Karasuma hotel; since 2004, here since 2022)
//   None of the four drafted is in data/kyoto.json: grep by id, name (SHAVA/シャバ, 水田食堂, 味舌, 龍のひげ/ryu no hige/MITATE) and
//   address (FIS ビル, 下丸屋町401-10, 祇園町北側246, 大政所町678) found none.
//   Same-name counts (same brand or operator): SHAVA LIVA, 水田食堂, 味舌 — one listing each in the crawl; ryu no hige — the only
//   restaurant of MITATE Inc. (嵐山MITATE is in the past tense on the group site; siro is a white-chocolate brand).
//   Service charges checked against Tabelog’s Japanese original: SHAVA LIVA 「サービス料無し、チャージ料無し」; 味舌
//   「1Fカウンター席テーブル席、二階個室一律サービス料10%」 — the official course prices are 税サ込 (tax and service included);
//   水田食堂 and ryu no hige none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-24');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26027685', 'already in data as kyo_oshokuya_kappa');
skip('26035887', 'same-concept branch of 和醸良麺 すがり already in data (kyr_wajo_ryomen_sugari); Tabelog remarks call すがり the fourth shop of the Takakura Nijo group (sugari.net)');

// ================================================================ SHAVA LIVA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007225/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.shavaliva.com/'; const LUNCH = SITE + 'menu/lunch'; const DINNER = SITE + 'menu/dinner'; const MORNING = SITE + 'menu/morning'; const CONCEPT = SITE + 'concept';
  const WD = day(['09:00', '11:00'], ['11:30', '22:00']); const WE = day(['11:30', '22:30']);
  put({
    id: 'kyoto_shava_liva', name: 'SHAVA LIVA (シャバ リバ)', category: 'OMNI',
    lat: 35.010332694942214, lng: 135.7687871993993, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, bread, toast sets, risotto croquettes and demi-glace sauces; no gluten information is published (official menus).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a salad bar comes with lunch, but nothing vegan is marked (Tabelog; official menus).',
    hours_raw: 'Wednesday–Friday: breakfast 9:00–11:00, lunch 11:30–14:00, café 14:00–18:00, dinner 18:00–22:00 (last order 21:00). Saturday, Sunday and holidays: lunch 11:30–16:00, café 16:00–18:00, dinner 18:00–22:30 (last order 21:30). Closed Monday and Tuesday; New Year 2026–27 closed 31 December–4 January (Tabelog). No service or cover charge (Tabelog’s Japanese original: 「サービス料無し、チャージ料無し」). 72 seats with sofa seating and an outdoor terrace; pets only on the terrace; non-smoking, with a smoking space outside; children welcome; cards, transit IC, iD and QUICPay; bookings via Tabelog (Tabelog; 2026 reviews). Ground floor of the FIS Building at the south-west corner of Kawaramachi-Oike, reached by escalator from the Kawaramachi south exit of Kyoto-Shiyakusho-mae Stn (Tabelog). Opened 21 October 2008 (Tabelog).',
    hours: { 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Oike — 1 min from Kyoto-Shiyakusho-mae Stn',
    cuisine: 'Modern Italian café-lounge from breakfast to bar (official site) · morning sets ¥600–800: hot sandwiches, honey toast, toast with sausage and fried egg (official menu) · lunch ¥1,200 with bread or rice and a salad buffet: weekly lunch, homemade hamburg steak with demi-glace (10 a day), beef Bolognese with balsamic reduction, autumn salmon and mizuna spaghetti in Saikyo-miso cream, shio-koji roast chicken, roast pork loin chasseur; half pasta +¥400, set drink +¥100 (official menu, autumn 2026) · Wednesday 150 g beef ribeye with red-wine sauce ¥1,300 (2026 reviews) · dinner à la carte: cheese, jamón serrano, bagna cauda ¥1,000, caprese with buffalo bocconcini, risotto croquettes (official menu) · party plans with all-you-can-drink from ¥4,500 (Tabelog)',
    website: SITE, gmaps: gm('SHAVA LIVA 河原町御池'), menu_url: LUNCH,
    notes: "[Italian · Kawaramachi-Oike, all-day café-lounge] A big, sofa-filled lounge on the corner of Kawaramachi and Oike, straight off the subway escalator, serving from 9:00 breakfast sets to late wine. Lunch is the draw: about ¥1,200 for pasta, hamburg steak or a roast, with bread or rice and a help-yourself salad bar, and a drink for ¥100 more; Wednesdays bring a 150 g ribeye. Dinner is Italian small plates and pasta. Popular — book lunch. Dogs welcome on the terrace. Closed Monday and Tuesday.",
    chef_bio: { chef_name: null, roles: ['Head chef (料理長) not named'], origin: null,
      background: 'Per the official concept page: modern Italian from seasonal ingredients, with the head chef’s own methods and homemade sauces, served from morning to bar in a lounge of designer furniture also used for wedding after-parties. Opened 21 October 2008 (Tabelog).',
      philosophy: 'Per the official site: to be used "hotel-like" for every scene of the day, as if relaxing in the living room of a friend’s house.',
      specialty: 'Lunch sets with the salad buffet; Wednesday ribeye.',
      anecdotes: [
        { text: 'A family at a May 2026 dinner found the prices so low that the Tokyo-based daughter wondered aloud how the place survives.', source: R + 'B527674382/' },
        { text: 'A May 2026 guest lunched on the shaded terrace with a dog.', source: R + 'B528027942/' },
        { text: 'An October 2026 diner arrived at 11:30 opening for the Wednesday ribeye and found it already fully booked.', source: R + 'B536947715/' },
      ],
      japanese_sources_summary: '公式サイト (shavaliva.com): Cafe & Lounge SHAVA LIVA、京都市役所前、河原町御池交差点南西角下がる FISビル1F、旬の食材のモダンイタリアン、料理長のアイデアの調理法と自家製ソース、ソファ席中心、ウェディング二次会。モーニング600〜800円、ランチ1,200円 (パンorライス・サラダブッフェ付、自家製ハンバーグ1日10食、ボロネーゼ、秋鮭と水菜の西京味噌クリーム、塩麴の鶏ロースト、豚ロースのシャスールソース)、パスタハーフ+400円、セットドリンク+100円、ディナーのアンティパスト (バーニャカウダ1,000円など)。食べログ: イタリアン・居酒屋・カフェ、サービス料・チャージ料なし、72席、テラス席 (ペットはテラスのみ)、子供可、ベジタリアンメニューあり、水〜金 朝9:00〜、土日祝11:30〜22:30、月火定休、2008年10月21日オープン。口コミ (2026年3〜10月、英語): 水曜の牛リブロース150g 1,300円、ワイン+100円、満席が多い。',
      confidence: 'medium', sources: [TB, SITE, CONCEPT, MORNING, LUNCH, DINNER, R + 'B489528743/', R + 'B508850699/', R + 'B515003525/', R + 'B524235696/', R + 'B527674382/', R + 'B528027942/', R + 'B529754869/', R + 'B529965759/', R + 'B533316729/', R + 'B533568015/', R + 'B536947715/', R + 'B537249608/'] },
    cultural_comfort: { level: 'english', note: 'The official menus give English names for every dish.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町御池南西角下ル ＦＩＳビル １Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news October 2026) and Tabelog listing with 2026–27 New Year hours; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010333, 135.768787); the address gives a corner, not a lot, and GSI resolves 河原町御池 only to the ward, so not lot-checked; the point sits at the south-west corner of Kawaramachi-Oike as the address describes; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH, MORNING, DINNER, R + 'B529754869/'],
    price_note: 'Official menus (autumn 2026); Wednesday ribeye from 2026 reviews.', last_checked: TODAY, items: [
      it('自家製手ごねハンバーグ 特製デミグラスソース', '', 'Homemade hamburg steak with demi-glace, bread or rice and salad buffet', '¥1,200', 'Lunch', 'ask', 'no', '10 a day.', 'hamburg'),
      it('赤ワインでじっくり煮込んだ牛粗ミンチ肉のスパゲッティボロネーゼ', '', 'Beef Bolognese with balsamic reduction, bread and salad buffet', '¥1,200', 'Lunch', 'no', 'no', '', 'bolognese'),
      it('秋鮭と水菜の西京味噌クリームソーススパゲッティ', '', 'Autumn salmon and mizuna spaghetti in Saikyo-miso cream', '¥1,200', 'Lunch', 'no', 'no', '', 'salmon_saikyo_pasta'),
      it('', '', 'Wednesday beef ribeye (150 g) with red-wine sauce', '¥1,300', 'Lunch', 'ask', 'no', 'Wednesdays only (2026 reviews).', 'wednesday_ribeye'),
      it('モーニングセット', '', 'Morning set: toast, sausage, fried egg, salad, coffee or tea', '¥700', 'Morning', 'no', 'no', '', 'morning_set'),
      it('季節野菜をたっぷりと使ったバーニャカウダ', '', 'Bagna cauda with seasonal vegetables', '¥1,000', 'Dinner', 'ask', 'no', '', 'bagna_cauda'),
    ] }, {
    cuisine: '朝からバーまでのモダンイタリアンのカフェラウンジ (公式サイト)・モーニングセット600〜800円: ホットサンド、ハニートースト、トーストとソーセージと目玉焼き (公式メニュー)・ランチ1,200円 (パンかライスとサラダブッフェ付): 週替わりランチ、自家製ハンバーグのデミグラスソース (1日10食)、バルサミコのレディクション添えのボロネーゼ、秋鮭と水菜の西京味噌クリームスパゲッティ、塩麴の鶏のロースト、豚ロースのシャスールソース。パスタハーフ+400円、セットドリンク+100円 (公式メニュー、2026年秋)・水曜は牛リブロース150gの赤ワインソース1,300円 (2026年の口コミ)・夜のアラカルト: チーズ、ハモンセラーノ、バーニャカウダ1,000円、水牛モッツァレラのカプレーゼ、リゾットのコロッケ (公式メニュー)・飲み放題付きの宴会プラン4,500円から (食べログ)',
    neighborhood: '河原町御池。京都市役所前駅から徒歩1分',
    gf_detail: '要確認。パスタ、パン、トーストのセット、リゾットのコロッケ、デミグラスソース。グルテンの情報は公開されていない (公式メニュー)。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありとされ、ランチにはサラダバーが付くが、ヴィーガンの表示はない (食べログ、公式メニュー)。',
    notes: '[イタリアン・河原町御池、一日中使えるカフェラウンジ] 河原町通と御池通の角、地下鉄のエスカレーターを上がってすぐの、ソファの並ぶ大きなラウンジ。朝9時のモーニングから夜のワインまで。目当てはランチで、パスタやハンバーグ、ローストが1,200円ほど、パンかライスとセルフのサラダバー付き、ドリンクは+100円。水曜は150gのリブロース。夜はイタリアンの小皿とパスタ。人気なのでランチは予約を。犬連れはテラス席で。月火休み。',
  });
}

// ================================================================ 洋風居酒屋 水田食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038707/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_mizuta_shokudo', name: '水田食堂 (Mizuta Shokudo)', category: 'OMNI',
    lat: 35.0103703378692, lng: 135.7694810804099, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, kara-age, fried hamo and baguette; no gluten information is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu changes with the day’s ingredients and leans on pork, chicken and seafood; nothing vegan is marked (2026 reviews).',
    hours_raw: '17:00–22:00 (last order food 21:00, drinks 21:30); closed Wednesday and irregularly (Tabelog). Two-hour limit; bookings strongly advised — weekends fill weeks ahead (Tabelog; August–October 2026). No charge listed (Tabelog). 10 counter seats (11 per an October 2026 review); no one under 20 admitted; non-smoking; cards (VISA, Master, JCB), no QR (Tabelog). 2nd floor of the Tanaka Building, 5 min from Keihan Sanjo Stn (Tabelog). Opened 30 November 2022 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Kyoto-Shiyakusho-mae Stn — 5 min from Keihan Sanjo Stn',
    cuisine: 'Western-style izakaya of Italian-based dishes that change with the day’s ingredients (Tabelog; 2026 reviews) · signature low-temperature roast pork (chashu) · tandoori chicken kara-age · fig and prosciutto salad · salmon and lemon cream pasta · uni and scallop carbonara · fried hamo with fried maitake · garlic mussels in white wine · tuna and avocado with aioli · homemade sausage when available (2026 reviews)',
    website: null, gmaps: gm('洋風居酒屋 水田食堂 京都'), menu_url: TB,
    notes: "[Izakaya · Kyoto-Shiyakusho-mae, one-person Italian-leaning counter] A ten-seat L-shaped wooden counter on a second floor near City Hall, run single-handed by a cook with over 20 years in Italian kitchens — cooking, pouring and billing alone without the pace flagging. The melting roast pork is the must-order; tandoori kara-age, fig and prosciutto salad and creamy pastas follow. Dinner only, adults only (20+), and book ahead: weekends fill up. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-cook, not named; runs the shop alone'], origin: null,
      background: 'Per Tabelog’s official introduction: a chef with over 20 years’ experience cooking fusion dishes that blend Italian and Western food, at a 10-seat counter. Reviewers in August and November 2026 describe the master cooking, serving drinks and billing alone; an October 2026 reviewer gives over 20 years in Italian cooking. Opened 30 November 2022 (Tabelog).',
      philosophy: 'Per Tabelog’s official introduction: warm hospitality and "ichigo ichie" at a counter where every seat sees the cooking.',
      specialty: 'Signature low-temperature roast pork; tandoori chicken kara-age.',
      anecdotes: [
        { text: 'An August 2026 guest with a fig allergy had the fig salad made with white peach instead.', source: R + 'B534637473/' },
        { text: 'An October 2026 diner learned that the owner, a hard-rock fan, plays Southern All Stars live footage every night because some guests were disappointed when it was switched to other artists.', source: R + 'B538729935/' },
        { text: 'A September 2026 guest booked a month ahead for a holiday evening and found the counter almost fully reserved.', source: R + 'B535836392/' },
      ],
      japanese_sources_summary: '食べログ: 洋風居酒屋 水田食堂、バル・イタリアン・居酒屋、中京区下丸屋町401-10 田中ビル2F、京阪三条駅から徒歩5分、京都市役所前駅から95m、17:00〜22:00 (料理L.O. 21:00、ドリンクL.O. 21:30)、水曜・不定休、2時間制、L字カウンター10席、20歳未満入店不可、禁煙、カード可 (VISA・Master・JCB)、2022年11月30日オープン。公式紹介: イタリアンと洋食を融合させた料理、20年以上の経験のシェフ、名物のやわらかいローストポーク。口コミ (2026年5〜11月、英語): マスターが一人で切り盛り、イチジクと生ハムのサラダ、タンドリーチキンの唐揚げ、雲丹と帆立のカルボナーラ、鱧のフライ、イチジクのアレルギーで白桃に替えてくれた。',
      confidence: 'medium', sources: [TB, R + 'B529340274/', R + 'B530991105/', R + 'B532405544/', R + 'B533748145/', R + 'B534637473/', R + 'B535571009/', R + 'B535642092/', R + 'B535836392/', R + 'B537602346/', R + 'B538254522/', R + 'B538495149/', R + 'B538729935/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One person runs the counter; book ahead.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'A guest with a fig allergy had the fig and prosciutto salad made with white peach instead (August 2026).', source: R + 'B534637473/', verified: false }] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区下丸屋町401-10 田中ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.01037, 135.769481); cross-checked: GSI 京都府京都市中京区下丸屋町401番地 (lot) 23m; 27m from kyoto_tempura_tohzan and 37m from kyoto_teori_hilton; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535836392/', R + 'B538729935/', R + 'B530991105/'],
    price_note: 'Dishes from 2026 reviews; no prices published; the menu changes daily.', last_checked: TODAY, items: [
      it('', '', 'Signature low-temperature roast pork', '', 'Dishes', 'ask', 'no', '', 'roast_pork'),
      it('', '', 'Tandoori chicken kara-age', '', 'Dishes', 'no', 'no', '', 'tandoori_karaage'),
      it('', '', 'Fig and prosciutto salad', '', 'Dishes', 'ask', 'no', 'Seasonal.', 'fig_prosciutto_salad'),
      it('', '', 'Salmon and lemon cream pasta', '', 'Pasta', 'no', 'no', '', 'salmon_lemon_pasta'),
      it('', '', 'Uni and scallop carbonara', '', 'Pasta', 'no', 'no', '', 'uni_scallop_carbonara'),
      it('', '', 'Fried hamo (pike conger)', '', 'Dishes', 'no', 'no', 'Seasonal.', 'fried_hamo'),
    ] }, {
    cuisine: 'イタリアンを基にした料理がその日の食材で変わる洋風居酒屋 (食べログ、2026年の口コミ)・名物の低温のローストポーク (チャーシュー)・タンドリーチキンの唐揚げ・イチジクと生ハムのサラダ・サーモンのレモンクリームパスタ・雲丹と帆立のカルボナーラ・鱧のフライと舞茸のフライ・ムール貝のガーリック白ワイン蒸し・マグロとアボカドのアイオリソース・あれば自家製ソーセージ (2026年の口コミ)',
    neighborhood: '京都市役所前駅の近く。京阪三条駅から徒歩5分',
    gf_detail: '要確認。パスタ、唐揚げ、鱧のフライ、バゲット。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。献立はその日の食材で変わり、豚、鶏、魚介が中心。ヴィーガンの表示はない (2026年の口コミ)。',
    notes: '[居酒屋・京都市役所前、一人で回すイタリアン寄りのカウンター] 市役所近くのビルの2階、木のL字カウンター10席。イタリアンの厨房で20年以上の料理人が一人で切り盛りし、調理も飲み物も会計もこなしながら、料理の流れは途切れない。必ず頼みたいのはとろけるローストポーク、続いてタンドリーチキンの唐揚げ、イチジクと生ハムのサラダ、クリーム系のパスタ。夜のみ、20歳以上のみ。週末は埋まるので予約を。水曜休み。',
  });
}

// ================================================================ 御料理 味舌
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000265/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kyoto-mashita.com/'; const MENU = SITE + 'cuisine/index.html'; const ABOUT = SITE + 'about/index.html'; const ENG = SITE + 'eng/index.html';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gion_mashita', name: '御料理 味舌 (Mashita)', category: 'OMNI',
    lat: 35.00396267787463, lng: 135.77375621034216, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki seasoned with soy and miso, with nama-fu (wheat gluten), a cold udon or soba course and wheat-based sweets; no gluten information is published (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dashi is made daily from freshly shaved katsuobushi and kombu, and the courses are built on fish (Tabelog official introduction; 2026 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order 13:30); dinner 17:30–22:00 (last order 19:30); closed Sunday, but open on long weekends (official site; Tabelog). New Year special courses only, 26 December–3 January, with no lunch 26–31 December (official site). Course prices include tax and service (official menu: 税サ込; Tabelog’s Japanese original: 「1Fカウンター席テーブル席、二階個室一律サービス料10%」). Private rooms upstairs ¥3,300 (2–4 guests) or ¥5,500 (5–12) per room. Cancellation 50% from a week before, 100% from 3 days before (official site). About 30 seats: a 9-seat counter and 6 table seats downstairs, two private rooms upstairs; children under 6 are seated in the private rooms (Tabelog). Cards accepted, but the ¥7,500 tenshin lunch is cash only; non-smoking with a smoking area (official site; Tabelog). On the north side of Shijo-dori, the tenth door east of the police box at Shijo-Nawate, about 1 min from Gion-Shijo Stn (official site). Opened 9 December 1979 (Tabelog); one Michelin star in the Kyoto–Osaka 2020 guide (official English page).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, Shijo-dori — 1 min from Gion-Shijo Stn',
    cuisine: 'Classic Kyoto kaiseki around a dashi made daily from shaved katsuobushi and kombu, with house-made seasonal wagashi (official site; Tabelog) · courses, tax and service included: 寿 about 8 dishes ¥11,000 (lunch only), 雪 about 10 ¥16,000, 月 about 11 ¥22,000, 花 about 12 ¥28,000, omakase at market price; weekday-lunch tenshin of about 7 dishes ¥7,500; children’s courses ¥6,000 and ¥7,500 (official menu) · e.g. conger eel and edamame kuzu dumpling soup, a hassun with grilled nama-fu and Camembert or Tokishirazu salmon, a cold udon or tororo soba mid-course, steamed conger-eel rice, matsutake and hamo chirashi (2026 reviews)',
    website: SITE, gmaps: gm('御料理 味舌 祇園'), menu_url: MENU,
    notes: "[Kaiseki · Gion, a Shijo-dori classic since 1979] A kaiseki house tucked a step off the bustle of Shijo-dori in Gion, with a nine-seat counter downstairs and private rooms above. A long-time regular calls it the standard of Kyoto cooking: delicate, umami-deep dashi, seasonal fish, a noodle course midway and house-made sweets. Courses run ¥11,000–28,000 with tax and service included; the weekday ¥7,500 lunch (cash only) is the gentle way in. Michelin one star (2020). Families with small children get a private room. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner and head chef not named'], origin: null,
      background: 'Per the official site: seasonal ingredients carefully chosen, hot dishes served hot and cold ones well chilled, each dish made with heart; seasonal wagashi made in-house. Per Tabelog’s official introduction: the dashi is made every day from freshly shaved katsuobushi and kombu. Opened 9 December 1979 (Tabelog). Listed with one Michelin star in the Kyoto–Osaka 2020 guide (official English page).',
      philosophy: 'Per the official site: 「温かいものは温かいうちに、冷たいものはうんと冷やして」 — hot things while hot, cold things well chilled.',
      specialty: 'Kyoto kaiseki built on the house dashi; seasonal hassun.',
      anecdotes: [
        { text: 'A guest returning in August 2026 found that a long-time assistant of the former head chef now leads the kitchen, and judged the essence of the cooking unchanged.', source: R + 'B117090124/' },
        { text: 'For an early Mother’s Day lunch in May 2026, told in advance, the kitchen tied the soup bowl with red and white mizuhiki.', source: R + 'B527952841/' },
        { text: 'A January 2026 guest who asked ahead for hon-moroko, though it was early in the season, was told at the counter that the fish had been found.', source: R + 'B509106269/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-mashita.com): 京都 祇園の懐石料理 御料理 味舌、四条通のにぎわいから一歩入った別世界、季節の食材を吟味し温かいものは温かいうちに冷たいものはうんと冷やして、食後の和菓子も手作り。コース (税サ込): 寿 8品あまり11,000円 (昼のみ)、雪16,000円、月22,000円、花28,000円、おまかせ時価、点心 (平日昼のみ) 7,500円は現金のみ、お子様メニュー6,000円・7,500円、2F個室料3,300円・5,500円、キャンセル料1週間前から50%・3日前から100%。席数30席あまり (カウンター9席、テーブル6席、2階個室2室)、12:00〜15:00 (L.O. 13:30)、17:30〜22:00 (L.O. 19:30)、京阪祇園四条駅から東へ約1分、四条縄手北東角交番より東へ10軒目、東山区祇園町北側246。英語ページ: ミシュランガイド京都・大阪2020で一つ星。年末年始は特別コースのみ (12月26日〜1月3日)。食べログ: 日曜定休 (連休は営業)、サービス料10%、6歳未満は個室、カード・交通系IC可、1979年12月9日オープン。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, ENG, R + 'B117090124/', R + 'B509106269/', R + 'B514822212/', R + 'B524327150/', R + 'B524800117/', R + 'B527952841/', R + 'B529097963/', R + 'B530062989/', R + 'B536487881/', R + 'B536674880/', R + 'B537302635/'] },
    cultural_comfort: { level: 'english', note: 'English pages and an English reservation form on the official site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側246',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site taking 2027 New Year osechi orders; Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003963, 135.773756); cross-checked: GSI 京都府京都市東山区祇園町北側246番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official course menu (tax and service included), checked November 2026.', last_checked: TODAY, items: [
      it('点心', 'tenshin', 'Weekday lunch course, about 7 dishes', '¥7,500', 'Course', 'ask', 'no', 'Weekday lunch only; cash only.', 'tenshin'),
      it('寿', 'kotobuki', 'Course of about 8 dishes, starter to sweet', '¥11,000', 'Course', 'ask', 'no', 'Lunch only.', 'kotobuki'),
      it('雪', 'yuki', 'Course of about 10 dishes', '¥16,000', 'Course', 'ask', 'no', '', 'yuki'),
      it('月', 'tsuki', 'Course of about 11 dishes', '¥22,000', 'Course', 'ask', 'no', '', 'tsuki'),
      it('花', 'hana', 'Course of about 12 dishes', '¥28,000', 'Course', 'ask', 'no', '', 'hana'),
      it('お子様メニュー', '', 'Children’s course: starter, soup, rice, Japanese plate, dessert', '¥6,000', 'Children', 'ask', 'no', '¥7,500 with sashimi.', 'kids'),
    ] }, {
    cuisine: '削りたての鰹節と昆布で毎日ひく出汁を軸にした正統の京懐石、季節の和菓子も手作り (公式サイト、食べログ)・コース (税サ込): 寿 8品あまり11,000円 (昼のみ)、雪 10品あまり16,000円、月 11品あまり22,000円、花 12品あまり28,000円、おまかせは時価。平日昼の点心 7品あまり7,500円。お子様メニュー6,000円・7,500円 (公式メニュー)・例: 鱧と枝豆の葛まんじゅうのお椀、焼いた生麩とカマンベールや Tokishirazu の鮭の八寸、途中の冷たいうどんやとろろ蕎麦、鰻の蒸しご飯、松茸と鱧のちらし寿司 (2026年の口コミ)',
    neighborhood: '祇園、四条通。祇園四条駅から徒歩1分',
    gf_detail: '要確認。醤油と味噌で味付けする京懐石で、生麩、途中に冷たいうどんや蕎麦、小麦を使う和菓子も。グルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁は毎日削りたての鰹節と昆布でひき、コースは魚が中心 (食べログの公式紹介、2026年の口コミ)。',
    notes: '[懐石・祇園、1979年からの四条通の老舗] 祇園の四条通のにぎわいから一歩入った懐石の店。1階にカウンター9席、2階に個室。長年の常連は京料理の基準と呼ぶ: 繊細で旨みの深い出汁、季節の魚、途中の麺、手作りの和菓子。コースは税サ込で11,000〜28,000円、平日昼の7,500円 (現金のみ) が入りやすい。ミシュラン一つ星 (2020年)。小さな子供連れは個室へ。日曜休み。',
  });
}

// ================================================================ ryu no hige by MITATE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037081/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://mitate.co.jp/ryunohige/'; const GROUP = 'https://mitate.co.jp/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=9130001053455';
  const H = day(['12:00', '15:30'], ['18:00', '21:30']);
  put({
    id: 'kyoto_ryu_no_hige', name: 'ryu no hige by MITATE (龍のひげ)', category: 'MOM_AND_POP',
    lat: 35.00087123787219, lng: 135.75991882032062, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fixed courses fusing Kyoto cuisine, French cooking, sushi and fermentation, ending in kamameshi and a dessert buffet; no gluten information is published (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fixed courses with sushi, fish and optional meat; no vegan course is published (official site).',
    hours_raw: 'Lunch 12:00–15:30 (last entry 13:30); dinner 18:00–21:30 (last entry 19:30); closed Tuesday and Wednesday (official site; Tabelog). Dinner resumed with the renewal in 2026 (official site). No-shows are charged 100% (Tabelog). 24 seats with a counter, sofa seating and a semi-private room; wheelchair accessible; children welcome at lunch, but under-10s are asked not to come at dinner; cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR (Tabelog). On the 1st floor of Daiwa Roynet Hotel Kyoto Shijo-Karasuma, 213 m from Shijo Stn (Tabelog). Here since 2022; first opened 2004 in Nakagyo (group site).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma, in Daiwa Roynet Hotel — 213 m from Shijo Stn',
    cuisine: 'Story-led courses fusing Kyoto cuisine and French, with sushi and fermentation at dinner (official site) · lunch Story Teller: 6 dishes, kamameshi and a seasonal dessert buffet ¥5,500, ¥7,700 with a meat course · dinner Luxury Story Teller: 6 dishes, sushi and seasonal dessert ¥11,000, ¥14,300 with meat (official site, tax included) · dishes themed on Kyoto landmarks such as Heian Shrine’s torii and To-ji, served from a "travel bag" set on the table (2026 reviews)',
    website: SITE, gmaps: gm('ryu no hige by MITATE 四条烏丸'), menu_url: SITE,
    notes: "[French · Shijo-Karasuma, Kyoto-landmark story courses] A playful Kyoto–French course restaurant in a Shijo-Karasuma hotel: lunch opens with a little suitcase on the table holding the cutlery and an itinerary, and bite-sized dishes take you round Kyoto's sights before a clay-pot rice and an all-you-can-eat dessert table. Dinner, back since the 2026 renewal, pairs French dishes with sushi. Lunch ¥5,500–7,700, dinner ¥11,000–14,300. Some find the portions small; most love the show. No under-10s at dinner. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: 'Koji Mitate (見舘 孝司)', roles: ['Chef-owner; MITATE Inc.'], origin: 'Kyoto Prefecture, born 1973',
      background: 'Per the group site: drawn to cooking by a father who was a cook, worked in another job after school, then trained in Kyoto restaurants in Kyoto cuisine, kaiseki and kappo, and studied French cooking independently. Opened 龍のひげ in Nakagyo in 2004, fusing Kyoto cuisine and French; opened 嵐山MITATE in 2015; held a special dinner show in Italy; started the white-chocolate brand amana by MITATE, since renamed siro (Daimaru Umeda shop April 2025). 龍のひげ moved to Daiwa Roynet Hotel Kyoto Shijo-Karasuma in 2022. The invoice number belongs to 株式会社ＭＩＴＡＴＥ.',
      philosophy: 'Per the group site: "素材の声に耳を澄ませ" — listen to the voice of the ingredients and express the delicacy of Kyoto cuisine and the depth of French in one plate.',
      specialty: 'Story Teller courses themed on Kyoto; French × sushi dinner course.',
      anecdotes: [
        { text: 'A January 2026 lunch began with a travel bag on the table holding the glasses, cutlery and a blanket, and a menu laid out like a travel itinerary.', source: R + 'B521447430/' },
        { text: 'A June 2026 guest asked for quick service because a friend was short of time, and the kitchen kept pace.', source: R + 'B529421985/' },
        { text: 'A fan since the Arashiyama days liked how a single wine was paired with different dishes by changing its aroma (May 2026).', source: R + 'B537237628/' },
      ],
      japanese_sources_summary: 'グループサイト (mitate.co.jp): 京の雅とフレンチの洗練、見舘孝司シェフ、1973年京都府生まれ、料理人だった父の影響、別の職業を経て京都の料理店で修業、京料理・会席・割烹料理、フレンチは独学、2004年 京都中京区に龍のひげ開業、2015年 嵐山MITATE開業、2022年 ダイワロイネットホテル京都四条烏丸1Fへ移転、ホワイトショコラブランド amana by MITATE を siro に改称、2025年4月 siro 大丸梅田店。店舗サイト: フレンチ×寿司×発酵、リニューアルでディナー営業再開、ランチ ストーリーテラー5,500円・肉料理付き7,700円 (6品+釜飯+季節のデザート)、ディナー ラグジュアリーストーリーテラー11,000円・肉料理付き14,300円 (6品+寿司+季節のデザート)、昼12:00〜15:30 (最終入店13:30)、夜18:00〜21:30 (最終入店19:30)、火水定休。食べログ: フレンチ・日本料理、24席、車椅子可、夜は10歳未満不可、無断キャンセル100%、インボイス T9130001053455 (株式会社ＭＩＴＡＴＥ)。',
      confidence: 'high', sources: [TB, SITE, GROUP, INV, R + 'B498060320/', R + 'B498066266/', R + 'B517796698/', R + 'B520196426/', R + 'B521447430/', R + 'B528910084/', R + 'B529392874/', R + 'B529421985/', R + 'B531331968/', R + 'B535184201/', R + 'B537237628/', R + 'B538721577/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Japanese-language site; staff explain each themed dish.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区大政所町678 ダイワロイネットホテル京都四条烏丸 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (renewal with dinner) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.000871, 135.759919); cross-checked: GSI 京都府京都市下京区大政所町678番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE],
    price_note: 'Official course prices (tax included), checked November 2026.', last_checked: TODAY, items: [
      it('ストーリーテラー', '', 'Lunch Story Teller: 6 dishes, kamameshi, seasonal dessert', '¥5,500', 'Lunch', 'ask', 'no', '', 'story_teller'),
      it('ストーリーテラー（肉料理付き）', '', 'Lunch Story Teller with a meat course', '¥7,700', 'Lunch', 'ask', 'no', '', 'story_teller_meat'),
      it('ラグジュアリーストーリー テラー', '', 'Dinner Luxury Story Teller: 6 dishes, sushi, seasonal dessert', '¥11,000', 'Dinner', 'ask', 'no', '', 'luxury_story_teller'),
      it('ラグジュアリーストーリー テラー（肉料理付き）', '', 'Dinner Luxury Story Teller with a meat course', '¥14,300', 'Dinner', 'ask', 'no', '', 'luxury_story_teller_meat'),
    ] }, {
    cuisine: '京料理とフレンチを融合させた物語仕立てのコース、夜は寿司と発酵も (公式サイト)・昼のストーリーテラー: 6品と釜飯と季節のデザートビュッフェで5,500円、肉料理付き7,700円・夜のラグジュアリーストーリーテラー: 6品と寿司と季節のデザートで11,000円、肉料理付き14,300円 (公式サイト、税込)・平安神宮の大鳥居や東寺など京都の名所をテーマにした料理を、テーブルの「旅行かばん」から始める (2026年の口コミ)',
    neighborhood: '四条烏丸、ダイワロイネットホテル内。四条駅から213m',
    gf_detail: '要確認。京料理、フレンチ、寿司、発酵を融合させたコースで、最後は釜飯とデザートビュッフェ。グルテンの情報は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司、魚、選べる肉料理のコースで、ヴィーガンのコースは公開されていない (公式サイト)。',
    notes: '[フレンチ・四条烏丸、京都の名所をめぐる物語のコース] 四条烏丸のホテルに入る、遊び心のある京料理とフレンチのコースの店。昼はテーブルの小さなスーツケースにカトラリーと旅程表が入っていて、一口サイズの料理で京都の名所をめぐり、土鍋ご飯と食べ放題のデザートで締める。2026年のリニューアルで戻った夜は、フレンチと寿司を組み合わせる。昼5,500〜7,700円、夜11,000〜14,300円。量が少ないという声もあるが、演出は好評。夜は10歳未満不可。火水休み。',
  });
}

save();
