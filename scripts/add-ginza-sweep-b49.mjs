// Ginza Station half-mile sweep (805 m), batch 49 — group and branch places with 2026 reviews (all OMNI).
//   + ブラーチェ・エ・ヴィーノ・ジジーノ (charcoal-grill Italian izakaya, opened 2012, sister of Termini downstairs)
//   + KENZO ESTATE WINERY 銀座店 (wine bar and restaurant of the Napa winery Kenzo Estate, opened 2018)
//   + 鉄板焼 石垣島きたうち牧場 銀座店 (teppanyaki run directly by an Ishigaki Island ranch; also Ishigaki and Osaka)
//   + セージ アンド フェンネル (vegetable-forward dining bar; owner not named)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ ブラーチェ・エ・ヴィーノ・ジジーノ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13151196/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:00', '22:00']), we = day(['16:00', '22:00']);
  put({
    id: 'tokyo_brace_e_vino_gigino', name: 'ブラーチェ・エ・ヴィーノ・ジジーノ (Brace e Vino Gigino)', category: 'OMNI',
    lat: 35.670864, lng: 139.76882,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled meats and vegetables, carpaccio and Wagyu with truffle; no source describes bread, sauces or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: charcoal-grilled meat platters and fish carpaccio; grilled vegetables are also served.',
    hours_raw: 'Tue–Fri 17:00–22:00 (last order); Sat–Sun 16:00–22:00; closed Mondays and occasionally Tuesdays (Tabelog). ¥300 appetiser charge. Wine drinkers only, per a 2026 regular. Cards and PayPay accepted.',
    hours: { 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Suzuki Bldg 2F (Termini on the ground floor) — 1 min from Higashi-Ginza Stn A7',
    cuisine: 'Charcoal-grill Italian izakaya · pick a bottle from the cellar downstairs · sister of Termini', cuisine_type: 'other',
    website: null, gmaps: gm('ブラーチェ・エ・ヴィーノ・ジジーノ 銀座3-11-6 鈴木ビル'), menu_url: null,
    notes: "[Italian · charcoal and the cellar downstairs] A 16-seat second-floor Italian izakaya near Higashi-Ginza Station, open since September 2012, built around the charcoal grill. It is a sister restaurant of Termini on the ground floor. Guests choose a bottle from the cellar downstairs, where each wine has a detailed description, and regulars say the place is for wine drinkers. 2026 diners order assorted charcoal-grilled meats, grilled vegetables, sea-bream carpaccio and charcoal-grilled Wagyu with truffle. A sixteen-visit regular finds it busy even early in the evening. About ¥4,000–10,000 a head, plus a ¥300 appetiser charge.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 September 2012; sister of Termini (Tabelog)', background: 'Group restaurant; no source names the chef.', philosophy: null, specialty: 'Charcoal-grilled meat; cellar wines.',
      anecdotes: [
        { text: '"You can choose your favorite wine from the cellar downstairs and enjoy it with delicious charcoal-grilled dishes." — September 2026.', source: R + 'B536613038/' },
        { text: '"I can understand why only wine drinkers are allowed inside." — September 2026.', source: R + 'B502196615/' },
      ],
      japanese_sources_summary: '食べログ: ブラーチェ・エ・ヴィーノ・ジジーノ、銀座3-11-6 鈴木ビル2F、東銀座駅A7出口から徒歩1分、16席、火〜金17:00〜22:00(L.O.)、土日16:00〜22:00、月休・火曜不定休、お通し300円、2012年9月25日開店、炭火焼きのイタリアン居酒屋、1階「テルミニ」の姉妹店、カード・PayPay可。2026年の口コミ: 炭火焼きの肉の盛り合わせ、焼き野菜、鯛のカルパッチョ、炭火焼きの和牛とトリュフ、地下のセラーでワインを選ぶ、ワインを飲む客向け、16回通う常連、4,000〜10,000円。',
      confidence: 'low', sources: [TB, R + 'B494980501/', R + 'B502196615/', R + 'B536613038/', R + 'B536868233/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'For wine drinkers; pick from the cellar. ¥300 appetiser charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-6 鈴木ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番6号 (go) 7m; same building as 時喰み; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494980501/', R + 'B536868233/'],
    price_note: 'No prices captured; reviewers spend ¥4,000–10,000.', last_checked: TODAY, items: [
      it('炭火焼き肉の盛り合わせ', 'sumibiyaki niku no moriawase', 'Assorted charcoal-grilled meats', '', 'Grill', 'ask', 'no', '', 'grill_platter'),
      it('焼き野菜', 'yaki yasai', 'Grilled vegetables', '', 'Grill', 'ask', 'ask', '', 'grilled_veg'),
      it('鯛のカルパッチョ', 'tai no karupacchio', 'Sea-bream carpaccio', '', 'Starters', 'ask', 'no', '', 'carpaccio'),
    ] }, {
    cuisine: '炭火焼きのイタリアン居酒屋・地下のセラーからボトルを選ぶ・テルミニの姉妹店',
    neighborhood: '銀座三丁目、鈴木ビル2F(1階はテルミニ)。東銀座駅A7出口から徒歩1分',
    gf_detail: '要確認。炭火焼きの肉と野菜、カルパッチョ、トリュフの和牛など。パンやソース、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。炭火焼きの肉の盛り合わせと魚のカルパッチョ。焼き野菜もあります。',
    notes: '[イタリアン・炭火と地下のセラー] 東銀座駅すぐのビル2階、2012年9月開店の16席の炭火焼きのイタリアン居酒屋で、1階「テルミニ」の姉妹店。ワインは地下のセラーで詳しい説明を見ながらボトルを選ぶスタイルで、常連によればワインを飲む人のための店。2026年の口コミでは炭火焼きの肉の盛り合わせ、焼き野菜、鯛のカルパッチョ、トリュフをのせた炭火焼きの和牛。16回通う常連は早い時間から混むと言います。1人4,000〜10,000円ほど、お通し300円。',
  });
}

// ================================================================ KENZO ESTATE WINERY 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13227497/'; const R = TB + 'dtlrvwlst/';
  const e = day(['12:00', '23:00']), l = day(['12:00', '02:00']);
  put({
    id: 'tokyo_kenzo_estate_winery_ginza', name: 'KENZO ESTATE WINERY 銀座店', category: 'OMNI',
    lat: 35.670187, lng: 139.765028,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A winery restaurant with courses and à la carte dishes paired to Kenzo Estate wines; no source describes the food\'s ingredients or a gluten-free option.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No source describes the dishes in enough detail to say.',
    hours_raw: 'Mon, Tue, Sat and holidays 12:00–23:00 (L.O. 22:00); Wed–Fri 12:00–2:00 (food L.O. 22:00, drinks 1:00); closed Sundays (Tabelog). Only Kenzo Estate wines are served, no beer or soft drinks. Cancellation fee ¥11,000 per person for no-shows. Cards accepted.',
    hours: { 0: e, 1: e, 2: l, 3: l, 4: l, 5: e }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 5-chōme, GINZA A5 1F–B1F near GINZA SIX — 1 min from Ginza Stn A5',
    cuisine: 'Napa winery Kenzo Estate\'s Ginza wine bar and restaurant (opened 2018) · Asatsuyu, Murasaki Suzu, Yui · pairing courses', cuisine_type: 'other',
    website: null, gmaps: gm('KENZO ESTATE WINERY 銀座店 銀座5-9-16'), menu_url: null,
    notes: "[Wine · Kenzo Estate's Ginza room] The Ginza outlet of Kenzo Estate, opened in October 2018 near GINZA SIX, with a wine shop and lounge on the ground floor and a counter and private rooms below. It pours only Kenzo Estate's own wines, such as Asatsuyu, Murasaki Suzu and Yui, with no beer or soft drinks. Diners pair them with a course or à la carte dishes chosen to match. It feels calm, almost otherworldly, behind a recessed entrance. It stays open to 2 a.m. Wednesday to Friday. Expect ¥8,000–40,000 a head depending on the pairing. No-shows are charged ¥11,000 per person.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 5 October 2018 (Tabelog)', background: 'Branch of the Kenzo Estate winery; no chef is named in a source read.', philosophy: null, specialty: 'Kenzo Estate wine pairings.',
      anecdotes: [
        { text: '"I was seated at the counter and started with a glass of Asatsuyu, a white wine." — September 2026.', source: R + 'B535742757/' },
        { text: '"It operates quietly near Ginza SIX, and those who don\'t know about it might just walk past." — September 2026.', source: R + 'B536669973/' },
      ],
      japanese_sources_summary: '食べログ: KENZO ESTATE WINERY 銀座店、銀座5-9-16 GINZA A5 1F・B1F、銀座駅A5出口から徒歩1分、16席・個室、月火土祝12:00〜23:00、水〜金12:00〜翌2:00、日休、2018年10月5日開店、KENZO ESTATEのワインのみ(ビール・ソフトドリンクなし)、無断キャンセルは1人11,000円、カード可。2026年の口コミ: GINZA SIX近く、Asatsuyu・Murasaki Suzu・Yui(英文表記)、料理とのペアリング、コースとアラカルト、落ち着いた空間、8,000〜40,000円。',
      confidence: 'low', sources: [TB, R + 'B535742757/', R + 'B536669973/', R + 'B532969434/', R + 'B531091942/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wine-only house; book ahead (no-show fee). Late hours Wed–Fri.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-9-16 GINZA A5 1F・B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目9番16号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535742757/', R + 'B532969434/'],
    price_note: 'No prices captured; reviewers spend ¥8,000–40,000.', last_checked: TODAY, items: [
      it('ペアリングコース', 'peaaringu koosu', 'Course paired with Kenzo Estate wines', '', 'Courses', 'ask', 'ask', '', 'pairing_course'),
      it('', 'asatsuyu', 'Asatsuyu white wine, glass', '', 'Wine', 'gf', 'ask', '', 'asatsuyu'),
    ] }, {
    cuisine: 'ナパのワイナリー KENZO ESTATE の銀座のワインバー&レストラン(2018年開店)・Asatsuyu、Murasaki Suzu、Yui・ペアリングのコース',
    neighborhood: '銀座五丁目、GINZA SIX近くの GINZA A5 1F・B1F。銀座駅A5出口から徒歩1分',
    gf_detail: '要確認。KENZO ESTATE のワインに合わせたコースとアラカルトのワイナリーレストラン。料理の材料やグルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。料理の内容を判断できる記述がありません。',
    notes: '[ワイン・KENZO ESTATE の銀座の部屋] 2018年10月、GINZA SIX近くに開いた KENZO ESTATE の銀座店で、1階はワインショップとラウンジ、地下にカウンターと個室。出すのは自社のワイン(英文の口コミでは Asatsuyu、Murasaki Suzu、Yui など)のみで、ビールやソフトドリンクはありません。ワインに合わせたコースやアラカルトを。少し奥まった入口の先は静かで別世界のよう。水〜金は深夜2時まで。ペアリング次第で1人8,000〜40,000円ほど。無断キャンセルは1人11,000円。',
  });
}

// ================================================================ 鉄板焼 石垣島きたうち牧場 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13157915/'; const R = TB + 'dtlrvwlst/';
  const a = day(['11:30', '15:30'], ['17:30', '23:00']);
  put({
    id: 'tokyo_ishigakijima_kitauchi_bokujou_ginza', name: '鉄板焼 石垣島きたうち牧場 銀座店 (Teppanyaki Ishigakijima Kitauchi Bokujō)', category: 'OMNI',
    lat: 35.670941, lng: 139.761274,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan courses of the ranch\'s own beef with tiger pufferfish, sweet shrimp, consommé, soy-soaked salmon-roe rice and mushroom fried rice; no source describes a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef and seafood teppan course.',
    hours_raw: 'Daily 11:30–15:30 and 17:30–23:00; open year-round (Tabelog). One group per day in the private space, per a 2026 diner. Cards accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Ginza Shinyo Bldg 1F — 3 min from Ginza Stn C2',
    cuisine: 'Teppanyaki of Ishigaki Island ranch beef · only about six head shipped a month (Tabelog) · branch of a ranch-run group', cuisine_type: 'other',
    website: null, gmaps: gm('石垣島きたうち牧場 銀座店 銀座6-4-10'), menu_url: null,
    notes: "[Teppanyaki · beef from the ranch's own island] The Ginza branch of a teppanyaki group run directly by Kitauchi Ranch on Ishigaki Island, with restaurants on Ishigaki and in Osaka as well. The ranch raises only female black-haired wagyu of the Tajima line and ships about six head a month, according to its Tabelog text. Courses centre on the ranch's 'premium beef', from rare inner-thigh and Red Coral steaks to beef carpaccio. They also include tiger-pufferfish carpaccio and charcoal-grilled pufferfish, sweet shrimp, consommé, salmon-roe rice and a mushroom fried rice. A September 2026 diner booked the whole room for one group but found the courses simple for the price. Expect ¥20,000–50,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 July 2013 (Tabelog); branch of the Ishigakijima Kitauchi Ranch group', background: 'Ranch-run group with Ishigaki, Osaka and Tokyo restaurants (2024 review); no chef is named.', philosophy: null, specialty: 'Ishigaki Kitauchi ranch beef.',
      anecdotes: [
        { text: '"This is a teppanyaki restaurant directly managed by Ishigakijima Kitauchi Ranch located in Ishigaki Island, Okinawa. There are locations in Ishigaki Island, Osaka, and Tokyo." — December 2024.', source: R + 'B498877424/' },
        { text: '"This restaurant accommodates only one group per day, allowing you to enjoy your meal in a private space." — September 2026.', source: R + 'B536586646/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼 石垣島きたうち牧場 銀座店、銀座6-4-10 銀座シンヨービル1F、銀座駅C2出口から徒歩3分、16席、毎日11:30〜15:30・17:30〜23:00、年中無休、2013年7月3日開店、カード可、店舗紹介: 直営牧場で但馬の血統の黒毛和牛の雌のみを長期肥育、月に約6頭のみ出荷。口コミ: 石垣島・大阪・東京に店舗、内もものレア、ふぐのカルパッチョと炭火焼き、甘海老、コンソメ、いくらご飯、茸のガーリックライス、2026年9月は1日1組の貸切、2〜5万円。',
      confidence: 'low', sources: [TB, R + 'B498877424/', R + 'B536586646/', R + 'B473348684/', R + 'B434950221/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private teppan room; book ahead; high prices.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [{ text: 'Salmon-roe rice soaked in soy sauce.', source: R + 'B473348684/' }], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-10 銀座シンヨービル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番10号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536586646/', R + 'B473348684/'],
    price_note: 'No prices captured; reviewers spend ¥20,000–50,000.', last_checked: TODAY, items: [
      it('鉄板焼きコース', 'teppanyaki koosu', 'Teppan course with Kitauchi ranch beef', '', 'Courses', 'ask', 'no', '', 'teppan_course'),
    ] }, {
    cuisine: '石垣島の直営牧場の牛の鉄板焼き・月に約6頭のみ出荷(食べログ)・牧場直営グループの支店',
    neighborhood: '銀座六丁目、銀座シンヨービル1F。銀座駅C2出口から徒歩3分',
    gf_detail: '要確認。自社牧場の牛にとらふぐ、甘海老、コンソメ、醤油漬けのいくらご飯、茸のガーリックライスの鉄板コース。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。牛肉と魚介の鉄板コースです。',
    notes: '[鉄板焼き・自社の島の牧場の牛] 石垣島のきたうち牧場が直営する鉄板焼きの銀座店で、石垣島と大阪にも店があります。食べログの店舗紹介によれば、但馬牛の血統の黒毛和牛の雌だけを育て、出荷は月に約6頭。コースの主役は牧場の「プレミアム牛」で、内もものレアや「レッドコーラル」のステーキ、牛のカルパッチョ、とらふぐのカルパッチョと炭火焼き、甘海老、コンソメ、いくらご飯、茸のガーリックライスなど。2026年9月には1日1組の貸切で楽しんだものの、値段の割にシンプルとの声も。予算は2〜5万円ほど。',
  });
}

// ================================================================ セージ アンド フェンネル
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13206647/'; const R = TB + 'dtlrvwlst/';
  const e = day(['17:00', '23:00']);
  put({
    id: 'tokyo_sage_and_fennel_ginza8', name: 'セージ アンド フェンネル (sage & fennel)', category: 'OMNI',
    lat: 35.669637, lng: 139.759411,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Vegetable-heavy courses (deli plate, bagna cauda, salad) with pasta, duck and lobster; no source describes a gluten-free option.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu leans on vegetables (deli plate, bagna cauda, salad), but courses include duck, wagyu and lobster, and bagna cauda is traditionally made with anchovy; no vegan option is described.',
    hours_raw: 'Sun–Thu 17:00–23:00 (L.O. 22:00); Sat lunch 11:00–14:30; closed Fridays (Tabelog). Course bookings via OZmall, per a 2026 diner. Cards accepted.',
    hours: { 0: e, 1: e, 2: e, 3: e, 5: day(['11:00', '14:30']), 6: e }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme back alley, Ryūō Bldg 2F — 3 min from Shimbashi Stn exit 5',
    cuisine: 'Vegetable-forward dining bar · deli plate, bagna cauda, roast duck · courses with free-flow sparkling', cuisine_type: 'other',
    website: null, gmaps: gm('セージ アンド フェンネル 銀座8-2-14 竜王ビル'), menu_url: null,
    notes: "[Dining bar · vegetables first] A calm, clean 16-seat second-floor dining bar in a Ginza 8-chōme back alley, near Hibiya Park. Its Tabelog text promotes courses with unlimited sparkling wine and lobster or wagyu on large platters. Diners note the vegetables above all. A December 2025 visit brought a deli plate of small dishes, a 'cordial' bagna cauda and roast duck breast with arugula and wild berries. A June 2026 holiday lunch of appetizer, salad, main, pasta and dessert left a diner full but light, at a good price for the area. Women's-party omakase courses can be booked through OZmall. Expect ¥3,000–10,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 8-chōme; opening date not found in a source read', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Deli plate; bagna cauda; roast duck.',
      anecdotes: [
        { text: '"I was able to enjoy a variety of vegetables, and even though I was full, my stomach felt light." — June 2026.', source: R + 'B529991967/' },
        { text: '"I made a reservation through OZmall, as it seems that course reservations cannot be made through Tabelog." — April 2026.', source: R + 'B526639214/' },
      ],
      japanese_sources_summary: '食べログ: セージ アンド フェンネル、銀座8-2-14 竜王ビル2F、新橋駅5番出口から徒歩3分、16席、日〜木17:00〜23:00、土11:00〜14:30、金休、カード可、店舗紹介: スパークリング飲み放題付きでオマール海老や和牛の大皿のコース。口コミ(2025〜2026年): デリプレート、バーニャカウダ、鴨胸のロースト(ルッコラとベリー)、前菜・サラダ・メイン・パスタ・デザートのランチ、野菜たっぷりで軽い、女子会のおまかせコースはOZmallで予約、3,000〜10,000円。',
      confidence: 'low', sources: [TB, R + 'B529991967/', R + 'B526639214/', R + 'B536968305/', R + 'B526348019/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm upstairs room; book courses via OZmall. Closed Fridays.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-2-14 竜王ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目2番14号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536968305/', R + 'B529991967/'],
    price_note: 'No prices captured; reviewers spend ¥3,000–10,000.', last_checked: TODAY, items: [
      it('デリプレート', 'deri pureeto', 'Deli plate of small vegetable dishes', '', 'Starters', 'ask', 'ask', '', 'deli_plate'),
      it('バーニャカウダ', 'baanya kauda', 'Bagna cauda', '', 'Starters', 'ask', 'ask', 'Traditionally made with anchovy; ask.', 'bagna_cauda'),
      it('鴨胸のロースト', 'kamomune no roosuto', 'Roast duck breast with arugula and wild berries', '', 'Mains', 'ask', 'no', '', 'duck'),
      it('ランチコース', 'ranchi koosu', 'Lunch: appetizer, salad, main, pasta, dessert (Sat)', '', 'Lunch', 'no', 'ask', '', 'lunch_course'),
    ] }, {
    cuisine: '野菜中心のダイニングバー・デリプレート、バーニャカウダ、鴨のロースト・スパークリング飲み放題のコース',
    neighborhood: '銀座八丁目の路地裏、竜王ビル2F。新橋駅5番出口から徒歩3分',
    gf_detail: '要確認。デリプレート、バーニャカウダ、サラダなど野菜の多いコースに、パスタ、鴨、オマール海老。グルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。野菜中心(デリプレート、バーニャカウダ、サラダ)ですが、コースには鴨・和牛・オマール海老もあり、バーニャカウダは伝統的にアンチョビを使います。ヴィーガンの選択肢は書かれていません。',
    notes: '[ダイニングバー・野菜が主役] 日比谷公園近く、銀座8丁目の路地裏のビル2階、落ち着いて清潔な16席のダイニングバー。食べログではスパークリング飲み放題付きでオマール海老や和牛を大皿で出すコースを打ち出しています。客が口をそろえるのは野菜の多さで、2025年12月はデリプレート、バーニャカウダ、ルッコラとベリーを添えた鴨胸のロースト。2026年6月の休日ランチは前菜・サラダ・メイン・パスタ・デザートで、満腹でも胃が軽く、この界隈では手頃とのこと。女子会のおまかせコースはOZmallから予約。予算は3,000〜10,000円ほど。',
  });
}

save();
