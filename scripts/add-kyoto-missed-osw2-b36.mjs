// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 36.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + 琥珀 Kohaku (the bar of Park Hyatt Kyoto, overlooking the Yasaka pagoda) — the hotel’s own bar, like its 八坂 and KYOTO BISTRO
//     records already in data; Park Hyatt is a hotel brand, not a restaurant chain.
//   + lapintaika ラピンタイカ (one-chef Italian and natural-wine room on Higashioji near Sanjo; since 2017)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + 月ヶ瀬 堺町店 Tsukigase (anmitsu kanmidokoro off Sakaimachi-Oike) — the brand’s only other shop is a Takashimaya Kyoto counter.
//   + フリアンディーズ 烏丸店 BOULANGERIE FRIANDISE (neighbourhood bakery by Marutamachi; takeaway only) — a local bakery of about four
//     Kyoto shops (main shop at Kitakujo); none in data.
//   None of the four is in data/kyoto.json: grep by id, name (琥珀/Kohaku — 創作おでん 琥珀 and 創作アジアン 琥珀 are unrelated — ラピンタイカ,
//   月ヶ瀬/Tsukigase, フリアンディーズ/FRIANDISE) and address (桝屋町360 4F, 北門前町499, 丸木材木町675, 少将井御旅町335-2) found none.
//   Service charges: 琥珀 「サービス料15％」 plus, per 2026 reviews, a cover charge and minimum spend for non-staying guests; none listed for
//   the others.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-36');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 琥珀 (Park Hyatt Kyoto)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033529/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '24:00']);
  put({
    id: 'kyoto_kohaku_park_hyatt', name: '琥珀 (Kohaku, Park Hyatt Kyoto)', category: 'OMNI',
    lat: 34.99888, lng: 135.78090782865308, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and whisky bar with light food; no gluten information is published (Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A cocktail bar; no food or vegan information is published (Tabelog).',
    hours_raw: '16:00–24:00 daily (last order 23:30); closed when the hotel requires (Tabelog). Service charge 15% (Tabelog’s Japanese original: 「サービス料15％」). Non-staying guests pay a cover charge of about ¥2,750–2,850 per person and a minimum spend of about ¥6,000–6,600; hotel guests pay no table charge (2025–2026 reviews). Bookings recommended; it fills with overseas visitors (September 2026). 16 seats at a U-shaped counter facing the view; non-smoking, smoking area in the hotel; cards (VISA, Master, JCB, AMEX, Diners); hotel valet parking ¥2,000 for up to 4 hours with a restaurant visit (Tabelog). On the 4th floor of Park Hyatt Kyoto, on the hill near Kodaiji, 964 m from Gion-Shijo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama, Park Hyatt Kyoto — near Kodaiji and the Yasaka pagoda',
    cuisine: 'Hotel bar with original cocktails by skilled bartenders, rare Japanese whiskies and the house craft gin "KI NO BI Seiryu" made with The Kyoto Distillery (Tabelog) · selections from the hotel’s wine bar, e.g. the "Kyoto Tradition" cocktails (December 2023) · from about ¥10,000–15,000 a head for non-staying guests with the cover and minimum (2026 reviews)',
    website: null, gmaps: gm('琥珀 パークハイアット京都'), menu_url: TB,
    notes: "[Bar · Higashiyama, Park Hyatt Kyoto's view of the Yasaka pagoda] The Park Hyatt's 16-seat U-shaped bar, high on the Higashiyama slope, where the floodlit five-storey Yasaka pagoda fills the window — come at sunset. Cocktails, rare Japanese whiskies and a house KI NO BI gin. Outside guests pay a cover (about ¥2,800) and a minimum spend (about ¥6,000) plus 15% service, so expect ¥10,000+. Book ahead.",
    chef_bio: { chef_name: null, roles: ['Hotel bar of Park Hyatt Kyoto; bartenders not named'], origin: null,
      background: 'Per Tabelog’s official introduction: the bar of Park Hyatt Kyoto, with views of the city and the historic five-storey pagoda, original cocktails from skilled bartenders, rare Japanese whiskies and an original craft gin made with The Kyoto Distillery. The hotel’s 八坂 and KYOTO BISTRO are separate records.',
      philosophy: null,
      specialty: 'Cocktails with a view of the Yasaka pagoda.',
      anecdotes: [
        { text: 'A November 2022 visitor recommends coming at sunset, when the bar opens.', source: R + 'B456340285/' },
        { text: 'An August 2026 guest found the bar fully booked with mostly overseas visitors and only one bartender, so drinks came slowly.', source: R + 'B534071205/' },
        { text: 'A January 2026 visitor noted that the cover charge and minimum spend push a visit past ¥10,000 but make booking easier.', source: R + 'B520291768/' },
      ],
      japanese_sources_summary: '食べログ: 琥珀、バー、東山区高台寺桝屋町360 パークハイアット京都4F、祇園四条駅から964m、16:00〜24:00 (L.O. 23:30)、ホテルの営業に準じた休み、サービス料15%、16席 (カウンター)、禁煙 (ホテル内に喫煙所)、カード可、バレーパーキング (レストラン利用で4時間2,000円)。公式紹介: 街並みと五重塔を望む眺め、熟練のバーテンダーのオリジナルカクテル、希少なジャパニーズウイスキー、京都蒸溜所と造ったオリジナルクラフトジン。口コミ (2022〜2026年、英語): 八坂の塔の眺め、夕暮れがおすすめ、U字カウンター、宿泊者以外はカバーチャージ2,750〜2,850円と最低6,000〜6,600円、海外からの客が多い。',
      confidence: 'medium', sources: [TB, R + 'B454639469/', R + 'B456340285/', R + 'B461108082/', R + 'B470025010/', R + 'B470194497/', R + 'B476731852/', R + 'B480482415/', R + 'B514081269/', R + 'B520291768/', R + 'B532342202/', R + 'B534071205/', R + 'B537488466/'] },
    cultural_comfort: { level: 'english', note: 'International hotel bar; mostly overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区高台寺桝屋町360 パークハイアット京都 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998935, 135.780908); GSI could not match 高台寺桝屋町360 (it returned another town 1km away), so not lot-checked; the Tabelog point was 3m from kyoto_kyoto_bistro_park_hyatt (same hotel), so moved about 6m south to keep the pins apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532342202/', R + 'B520291768/'],
    price_note: 'Charges from 2026 reviews; no drinks menu published.', last_checked: TODAY, items: [
      it('', '', 'Cover charge for non-staying guests', '¥2,750', 'Charge', '', '', 'July 2026; ¥2,850 per a January 2026 review.', 'cover'),
      it('', '', 'Original cocktails', '', 'Drinks', '', '', '', 'cocktails'),
    ] }, {
    cuisine: '熟練のバーテンダーのオリジナルカクテル、希少なジャパニーズウイスキー、京都蒸溜所と造ったオリジナルクラフトジン「KI NO BI Seiryu」のホテルバー (食べログ)・ホテルのワインバーのセレクションも、たとえば「Kyoto Tradition」のカクテル (2023年12月)・宿泊者以外はカバーと最低料金で1人1万〜1万5千円ほどから (2026年の口コミ)',
    neighborhood: '東山、パークハイアット京都。高台寺と八坂の塔のそば',
    gf_detail: '要確認。軽食もあるカクテルとウイスキーのバー。グルテンの情報は公開されていない (食べログ)。',
    vegan_detail: '要確認。カクテルバーで、料理やヴィーガンの情報は公開されていない (食べログ)。',
    notes: '[バー・東山、パークハイアット京都から八坂の塔] 東山の坂の上、パークハイアットのU字カウンター16席のバー。窓いっぱいにライトアップされた八坂の五重塔、夕暮れどきがおすすめ。カクテル、希少なジャパニーズウイスキー、オリジナルの KI NO BI ジン。宿泊者以外はカバー (2,800円ほど) と最低料金 (6,000円ほど) にサービス料15%で、1万円以上は見ておきたい。予約を。',
  });
}

// ================================================================ lapintaika
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26029971/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_lapintaika', name: 'lapintaika (ラピンタイカ)', category: 'OMNI',
    lat: 35.011666557871166, lng: 135.77822591041684, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta-centred Italian with appetizer platters and braises; no gluten information is published (reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Meat and seafood dominate; nothing vegan is marked (reviews).',
    hours_raw: 'Dinner 18:00–22:00, Tuesday–Sunday; lunch on Saturday and Sunday by reservation only; closed Monday (Tabelog). Cash only — no cards, e-money or QR (Tabelog). No service charge listed (Tabelog). 18 seats; private hire up to 20; non-smoking (Tabelog). An easy-to-miss entrance on Higashioji near Sanjo, 265 m from Higashiyama Stn (Tabelog; December 2023). Opened 21 November 2017 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashioji near Sanjo — 265 m from Higashiyama Stn',
    cuisine: 'Pasta-focused Italian à la carte with a natural-wine list, run by one chef (2023–2026 reviews) · generous appetizer platters in two rounds (meat, then seafood and salads), roast pork, acqua pazza, braised beef cheek, squid-ink pasta with oysters and shungiku, shirasu and cabbage aglio e olio, gorgonzola pasta · weekend lunch of appetizers, pasta, dessert and coffee ¥2,200 (April 2025) (reviews)',
    website: null, gmaps: gm('lapintaika ラピンタイカ 東大路'), menu_url: TB,
    notes: "[Italian · Higashioji near Sanjo, one chef, pasta and natural wine] A calm, easy-to-miss Italian room on Higashioji, near the Rohm Theatre, where one chef cooks a long à la carte list and pours natural wine. The appetizer platters are generous — ask before over-ordering — and the pastas shine, from squid ink with oysters to shirasu-and-cabbage aglio e olio. Dinner from 18:00; weekend lunch by reservation. Cash only. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named; runs it single-handed (May 2025)'], origin: null,
      background: 'Tabelog gives the opening as 21 November 2017. A December 2023 reviewer says it was listed as a Michelin Bib Gourmand in the 2023 guide; a May 2025 reviewer says it is run by a single person with a long à la carte menu and quick service.',
      philosophy: null,
      specialty: 'Pasta; appetizer platters with natural wine.',
      anecdotes: [
        { text: 'An April 2025 pair were warned by the owner that four dishes would be too many for two — and the two-round appetizer platter proved it.', source: R + 'B504888423/' },
        { text: 'A February 2026 diner arriving after a show at the ROHM Theatre found the tuna salad gone but loved the shirasu and cabbage aglio e olio.', source: R + 'B522558526/' },
        { text: 'An October 2024 regular booked the whole room for about ten people after dinner hours.', source: R + 'B468391498/' },
      ],
      japanese_sources_summary: '食べログ: lapintaika (ラピンタイカ)、イタリアン、左京区北門前町499、東山駅から265m、火〜日18:00〜22:00、土日の昼は予約制、月曜定休、カード・電子マネー・QR 不可、18席、20名まで貸切可、禁煙、2017年11月21日オープン。口コミ (2023〜2026年、英語): 東大路通の三条近くで入口がわかりにくい、ミシュランのビブグルマン (2023年)、一人で切り盛り、アラカルトが豊富、ナチュラルワイン、2回に分けて出る前菜の盛り合わせ、ローストポーク、アクアパッツァ、牛ほほ肉の煮込み、牡蠣と春菊のイカ墨パスタ、しらすとキャベツのペペロンチーノ、ゴルゴンゾーラ、昼のコース2,200円 (2025年4月)。',
      confidence: 'medium', sources: [TB, R + 'B468391498/', R + 'B475688684/', R + 'B489423667/', R + 'B493506210/', R + 'B504888423/', R + 'B505214501/', R + 'B506180115/', R + 'B510426848/', R + 'B511536702/', R + 'B518180070/', R + 'B520742088/', R + 'B522558526/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One chef; portions are generous — ask before ordering many dishes.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区北門前町499',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.011667, 135.778226); cross-checked: GSI 京都府京都市左京区北門前町499番地 (lot) 64m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505214501/', R + 'B504888423/'],
    price_note: 'From 2025–2026 reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Weekend lunch: appetizers, pasta, dessert and coffee', '¥2,200', 'Lunch', 'no', 'ask', 'April 2025; reservation only.', 'lunch'),
      it('', '', 'Assorted appetizer platter', '', 'Antipasti', 'ask', 'ask', 'Comes in two rounds.', 'antipasti'),
      it('', '', 'Squid-ink pasta with oysters and shungiku', '', 'Pasta', 'no', 'no', '', 'nero_oyster'),
    ] }, {
    cuisine: '一人のシェフのパスタ中心のアラカルトのイタリアンとナチュラルワイン (2023〜2026年の口コミ)・2回に分けて出るたっぷりの前菜盛り合わせ (肉、それから魚介とサラダ)、ローストポーク、アクアパッツァ、牛ほほ肉の煮込み、牡蠣と春菊のイカ墨パスタ、しらすとキャベツのペペロンチーノ、ゴルゴンゾーラのパスタ・週末の昼は前菜、パスタ、デザート、コーヒーで2,200円 (2025年4月) (口コミ)',
    neighborhood: '三条近くの東大路通。東山駅から265m',
    gf_detail: '要確認。パスタ中心のイタリアンで、前菜の盛り合わせや煮込みも。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: '要確認。肉と魚介が中心で、ヴィーガンの表示はない (口コミ)。',
    notes: '[イタリアン・三条近くの東大路、一人のシェフのパスタとナチュラルワイン] ロームシアター近くの東大路通の、見落としそうな落ち着いたイタリアン。一人のシェフが豊富なアラカルトを作り、ナチュラルワインを注ぐ。前菜の盛り合わせはたっぷりなので頼みすぎに注意。パスタが光り、牡蠣のイカ墨からしらすとキャベツのペペロンチーノまで。夜は18時から、週末の昼は予約制。現金のみ。月曜休み。',
  });
}

// ================================================================ 月ヶ瀬 堺町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006541/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://tsukigase.jp/shop';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_tsukigase_sakaimachi', name: '月ヶ瀬 堺町店 (Tsukigase)', category: 'OMNI',
    lat: 35.01036346786713, lng: 135.76295301041438, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Anmitsu of agar, bean paste and fruit with syrups, plus kakigori; no ingredient or gluten information is published (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Agar, red beans and fruit are plant-based, but several bowls add ice cream or condensed milk (2026 reviews).',
    hours_raw: '12:00–18:00 (last order 17:30); closed Wednesday and Thursday per Tabelog’s schedule (its note gives Thursday, or the next day after a holiday); hours may change (Tabelog). Queues of a few groups on busy afternoons (August 2026). No service charge listed (Tabelog). 24 seats at tables and a large table; non-smoking; JCB and AMEX, and QR (Tabelog). Down a side path beside an apartment building on Sakaimachi south of Oike, 306 m from Karasuma-Oike Stn (Tabelog; August 2026). Opened 17 November 2006 (Tabelog); the brand’s other shop is a counter in Takashimaya Kyoto (official site).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-Oike — 306 m from Karasuma-Oike Stn',
    cuisine: 'Kyoto kanmidokoro of anmitsu and mitsumame (official site; reviews) · seasonal anmitsu, e.g. peach anmitsu with peach sauce, bean paste and vanilla ice cream ¥1,630 (August 2026), chestnut anmitsu in autumn · agar jelly with smooth bean paste and matcha set · kakigori in summer, including a "shirokuma" bowl (2026 reviews)',
    website: SITE, gmaps: gm('月ヶ瀬 堺町店'), menu_url: SITE,
    notes: "[Sweets · Sakaimachi-Oike, a hidden anmitsu parlour] A calm Kyoto kanmidokoro tucked down a path off Sakaimachi near Oike, beloved by regulars for its anmitsu — agar, gentle bean paste and seasonal fruit such as peach (about ¥1,600) or chestnut — and, in summer, fluffy kakigori. A quiet sweet stop between sights. Afternoons only; closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Operator not named'], origin: null,
      background: 'Per the official site: 京都甘味処 月ヶ瀬, with this Sakaimachi shop and a counter in Takashimaya Kyoto. Tabelog gives the Sakaimachi opening as 17 November 2006. A July 2026 reviewer has come for years for anmitsu and mitsumame.',
      philosophy: null,
      specialty: 'Seasonal anmitsu.',
      anecdotes: [
        { text: 'A September 2026 regular on a tenth visit came for the seasonal chestnut anmitsu.', source: R + 'B513344916/' },
        { text: 'An August 2026 visitor waited about 10–15 minutes and ordered both anmitsu and kakigori.', source: R + 'B534670367/' },
        { text: 'An August 2026 walker was drawn in by the kakigori sign and had a "shirokuma" bowl.', source: R + 'B533876782/' },
      ],
      japanese_sources_summary: '公式サイト (tsukigase.jp): 京都甘味処 月ヶ瀬、堺町店と髙島屋店 (髙島屋京都店5階)。食べログ: 月ヶ瀬 堺町店 (ツキガセ)、甘味処・カフェ・かき氷、中京区堺町通御池下ル丸木材木町675 アーバンライフフォルムズ烏丸御池103、烏丸御池駅から306m、12:00〜18:00 (L.O. 17:30)、水木定休 (備考では木曜、祝日の場合は翌日)、24席、禁煙、JCB・AMEX・QR 可、2006年11月17日オープン。口コミ (2026年、英語): 桃のあんみつ1,630円、栗のあんみつ、寒天とこし餡と抹茶のセット、夏のかき氷 (白くま)、入口がわかりにくい。',
      confidence: 'medium', sources: [TB, SITE, R + 'B475307732/', R + 'B513344916/', R + 'B518750869/', R + 'B532547975/', R + 'B533623998/', R + 'B533642340/', R + 'B533851295/', R + 'B533876782/', R + 'B533932840/', R + 'B534670367/', R + 'B537858333/', R + 'B538763742/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Picture menu; afternoons only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通御池下ル丸木材木町675 アーバンライフフォルムズ烏丸御池103',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010363, 135.762953); cross-checked: GSI 京都府京都市中京区丸木材木町675番地 (lot) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533642340/', R + 'B513344916/'],
    price_note: 'Price from an August 2026 review; seasonal menu.', last_checked: TODAY, items: [
      it('', '', 'Peach anmitsu with vanilla ice cream', '¥1,630', 'Anmitsu', 'ask', 'no', 'Summer.', 'peach_anmitsu'),
      it('', '', 'Chestnut anmitsu', '', 'Anmitsu', 'ask', 'ask', 'Autumn.', 'kuri_anmitsu'),
      it('', '', 'Kakigori', '', 'Kakigori', 'ask', 'ask', 'Summer.', 'kakigori'),
    ] }, {
    cuisine: 'あんみつとみつ豆の京都の甘味処 (公式サイト、口コミ)・季節のあんみつ、たとえば桃のソースと餡とバニラアイスの桃のあんみつ1,630円 (2026年8月)、秋の栗のあんみつ・寒天とこし餡と抹茶のセット・夏はかき氷、白くまも (2026年の口コミ)',
    neighborhood: '堺町御池。烏丸御池駅から306m',
    gf_detail: '要確認。寒天、餡、果物に蜜のあんみつ、かき氷。原材料やグルテンの情報は公開されていない (2026年の口コミ)。',
    vegan_detail: '要確認。寒天、小豆、果物は植物性だが、アイスや練乳がのるものも (2026年の口コミ)。',
    notes: '[甘味・堺町御池、隠れたあんみつの店] 御池近くの堺町から小径を入った、落ち着いた京都の甘味処。常連に愛されるのはあんみつで、寒天、やさしい餡、桃 (1,600円ほど) や栗など季節の果物。夏はふわふわのかき氷。観光の合間の静かな甘味に。午後のみ、水木休み。',
  });
}

// ================================================================ フリアンディーズ 烏丸店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26015769/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:00', '19:00']);
  put({
    id: 'kyoto_friandise_karasuma', name: 'フリアンディーズ 烏丸店 (BOULANGERIE FRIANDISE)', category: 'OMNI',
    lat: 35.01494356786336, lng: 135.7602778304625, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery of breads, Danish pastries and sandwiches (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Many pastries use butter, eggs, cheese or meat; nothing vegan is marked (2026 reviews).',
    hours_raw: '7:00–19:00 daily; hours may change (Tabelog). Takeaway only — no eat-in (Tabelog). Cash, e-money and QR; no cards (Tabelog). No service charge listed (Tabelog). Near Karasuma-Marutamachi, a short walk from Marutamachi Stn (189 m), handy for a picnic in the Imperial Palace grounds or by the Kamo (Tabelog; March 2026). One of a small local chain whose main shop is at Kitakujo (March 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Marutamachi — 189 m from Marutamachi Stn',
    cuisine: 'Neighbourhood boulangerie from 7 a.m. (2026 reviews) · croissants and chocolate croissants, Danish pastries such as pear Danish ¥250 (October 2026), sweet potato ¥230 (September 2026), quiche Lorraine with edamame, curry bread, potato and crispy sausage bread · sandwiches: katsu mix, avocado-cheese-tomato, crust-on sandwiches (2026 reviews)',
    website: null, gmaps: gm('フリアンディーズ 烏丸店'), menu_url: TB,
    notes: "[Bakery · Karasuma-Marutamachi, a 7 a.m. local boulangerie] A green-fronted neighbourhood bakery near Marutamachi Station, open from 7:00 every day — pick up croissants, a pear Danish (about ¥250), curry bread or a katsu sandwich for a picnic in the Imperial Palace grounds or by the Kamo River. Takeaway only; cards not taken, but e-money and QR are.",
    chef_bio: { chef_name: null, roles: ['Operator not named'], origin: null,
      background: 'Per a March 2026 review: a beloved local bakery whose main branch is at Kitakujo. Reviewers describe a wide range of savoury and sweet breads and sandwiches.',
      philosophy: null,
      specialty: 'Danish pastries; sandwiches.',
      anecdotes: [
        { text: 'A March 2026 cyclist bought bread here for lunch by the Kamo River, noting the bike parking out front.', source: R + 'B525069441/' },
        { text: 'An October 2026 regular on a fourth visit took home a pear Danish for ¥250.', source: R + 'B530410947/' },
        { text: 'A July 2026 customer returned after a long gap for the crust-on sandwiches remembered fondly.', source: R + 'B533877543/' },
      ],
      japanese_sources_summary: '食べログ: フリアンディーズ 烏丸店 (FRIANDISE)、パン・サンドイッチ・ベーグル、中京区少将井御旅町335-2、丸太町駅から189m、7:00〜19:00、カード不可・電子マネーと QR 可、イートインなし。口コミ (2026年、英語): 地元で愛されるパン屋、本店は Kitakujo、クロワッサン、パン・オ・ショコラ、洋梨のデニッシュ250円、さつまいも230円、枝豆のキッシュ・ロレーヌ、カレーパン、カツサンド、アボカドとチーズとトマトのサンド、耳付きのサンドイッチ、自転車を停めやすい。',
      confidence: 'medium', sources: [TB, R + 'B524561032/', R + 'B525069441/', R + 'B525691780/', R + 'B528629781/', R + 'B529314938/', R + 'B530053089/', R + 'B530095217/', R + 'B530410947/', R + 'B531348992/', R + 'B533406209/', R + 'B533877543/', R + 'B537024617/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-serve bakery; point and pay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区少将井御旅町335-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014944, 135.760278); cross-checked: GSI 京都府京都市中京区少将井御旅町335番地 (lot) 63m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530410947/', R + 'B533406209/'],
    price_note: 'Prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pear Danish', '¥250', 'Pastries', 'no', 'no', 'October 2026.', 'pear_danish'),
      it('', '', 'Sweet potato bread', '¥230', 'Breads', 'no', 'ask', 'September 2026.', 'sweet_potato'),
      it('', '', 'Katsu mix sandwich', '', 'Sandwiches', 'no', 'no', '', 'katsu_sand'),
    ] }, {
    cuisine: '朝7時からの町のブーランジェリー (2026年の口コミ)・クロワッサンとパン・オ・ショコラ、洋梨のデニッシュ250円 (2026年10月)、さつまいも230円 (2026年9月)、枝豆のキッシュ・ロレーヌ、カレーパン、ポテトとパリパリソーセージのパン・カツミックス、アボカドとチーズとトマト、耳付きのサンドイッチ (2026年の口コミ)',
    neighborhood: '烏丸丸太町。丸太町駅から189m',
    gf_detail: 'グルテンフリー不可。パン、デニッシュ、サンドイッチの小麦のパン屋 (2026年の口コミ)。',
    vegan_detail: '要確認。多くのパンにバター、卵、チーズ、肉を使う。ヴィーガンの表示はない (2026年の口コミ)。',
    notes: '[パン・烏丸丸太町、朝7時からの町のパン屋] 丸太町駅近くの緑の店構えのパン屋。毎日朝7時から。クロワッサン、洋梨のデニッシュ (250円ほど)、カレーパン、カツサンドを買って、御苑や鴨川でピクニックに。持ち帰りのみ。カードは不可、電子マネーと QR は可。',
  });
}

save();
