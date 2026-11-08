// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 76.
//   萬 燕楽 26001373 settled first (coordinator, osw8-75): the skip stands. Both Tabelog listings link to zuzu.jp, the 厨厨・燕楽
//   group's official site (read 2026-11-07), which lists 萬'燕楽 (Gion, 075-533-1511, Tabelog's number for 26001373) and 夷川燕楽
//   (075-254-8488, Tabelog's number for 26002693 = kyoto_ebisugawa_enraku) side by side under the group tagline "大人の居酒屋 —
//   おでんと旬の食材を使った創作料理"; both are oden-and-creative-dishes restaurants in renovated old buildings with courses, banquet
//   rooms and maiko by arrangement. Same operator, same concept. Neither listing shows an invoice number.
//   + カオススパイスダイナー 京都三条店 Chaos Spice Diner (spice curry, Kawaramachi-Sanjo; rest)
//   + 創作バル EN_CIEL (basement dining bar with set lunches, Shijo-Karasuma; rest)
//   + グリルグリーン Grill Green (eight-seat steak and French counter, Gion north side; rest)
//   + 中国厨房 祝 Chinese Chubo Iwai (late-night Chinese, Gion Shinbashi; rest)
//   Rest list (mod 6 = 1) after batch 75, nearest-first — skipped:
//   - ステーキハウス京 26042557: thin listing, 2 reviews.
//   Brand check: queue-status.jsonl grepped for カオス, EN_CIEL, グリルグリーン, 祝 — the only hit is 祝い鳥 (27122021, Osaka), an
//   unrelated business. Chaos Spice Diner: a Tabelog name search shows three shops (Yotsubashi Amerikamura and Fukushima in
//   Osaka, and this one) — under the chain line, drafted. None of the four is in data (main aad935f1, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-76');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26001373/', 'brand already in data, same concept and operator: 萬 燕楽 and 夷川 燕楽 (kyoto_ebisugawa_enraku) are both shops of the 厨厨・燕楽 group (zuzu.jp lists both, with the phone numbers Tabelog gives each), oden and creative dishes in renovated old buildings — settled 2026-11-07 at the coordinator\'s request');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26042557/', 'thin listing: 2 reviews');

// ================================================================ カオススパイスダイナー 京都三条店 Chaos Spice Diner
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26041105/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_chaos_spice_diner_sanjo', name: 'カオススパイスダイナー 京都三条店 (Chaos Spice Diner)', category: 'OMNI',
    lat: 35.009811, lng: 135.76878, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries on saffron, turmeric or white rice are often wheat-free, but toppings such as gai yang and pickles vary; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: keema and chicken curries (2026 reviews).',
    hours_raw: 'Monday–Friday and the day before a holiday 11:30–15:30 (last order 15:00) and 17:00–22:00 (last orders food 21:00, drinks 21:30); Saturday 11:30–22:00; Sunday 11:30–21:00; holidays 11:30–21:00; the day after a holiday 11:30–15:00 and 17:00–21:00; open all year (Tabelog). Reservations accepted (Tabelog). No service charge (Tabelog original なし). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (PayPay, d Barai, Rakuten Pay, au PAY) (Tabelog). 21 seats at the counter and tables (Tabelog). 1F of KUS Kawaramachi, Kawaramachi-Sanjo; 3 min walk from Kyoto Shiyakusho-mae Stn (Tabelog). Moved here from Shinkyogoku; tenth anniversary in August 2026 (August 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: day(['11:30', '22:00']), 6: day(['11:30', '21:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Sanjo, north',
    cuisine: 'Spice-curry diner of layered, aromatic curries plated with vivid pickles and vegetables (2026 reviews) · Chaos keema, a weekly chicken curry and the chef\'s whim curry; two- or three-curry combinations on saffron, turmeric or white rice; spice level from mild up; gai yang (grilled chicken) as a topping (May–August 2026) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('カオススパイスダイナー 京都三条店'), menu_url: null,
    notes: '[Spice curry · Kawaramachi-Sanjo] A colourful, toy-filled curry diner serving combinations of two or three spice curries — keema, a weekly chicken curry, the chef\'s whim — on saffron rice with bright pickles; add grilled gai yang. Level 2 is already hot for beginners. Open daily, cards and QR.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: null,
      background: 'Per reviewers: a spice-curry diner that began in Shinkyogoku and moved to Sanjo, marking its tenth anniversary in August 2026, with a sister shop in Osaka\'s Amerikamura (July–August 2026). A Tabelog name search shows three Chaos Spice Diner shops.',
      philosophy: null, specialty: 'Spice curry combinations; Chaos keema.',
      anecdotes: [
        { text: 'An August 2026 long-time fan from the Shinkyogoku days found the same quirky room, full of Bearbrick figures, now on Sanjo, with a free mini drink or large rice for the tenth anniversary.', source: R + 'B533579386/' },
        { text: 'A July 2026 spice-curry beginner found level 2 already quite hot, and recommends adding the gai yang.', source: R + 'B531288436/' },
        { text: 'A May 2026 late-lunch visitor was seated at once and recommends the three-curry platter for trying everything.', source: R + 'B528620560/' },
      ],
      japanese_sources_summary: '食べログ: カレー・アジア・エスニック、中京区河原町三条上る下丸屋町408 KUS河原町 1F、市役所前駅から徒歩3分、月〜金・祝前日 11:30〜15:30 (L.O.15:00)、17:00〜22:00 (L.O.料理21:00、飲み物21:30)、土 11:30〜22:00、日・祝 11:30〜21:00、祝後日 11:30〜15:00、17:00〜21:00、年中無休、予約可、サービス料なし、カード・電子マネー・QR 可、21席。口コミ (2026年5月〜8月、英語): スパイスカレーのお店、カオスキーマ、週替わりのチキンカレー、気まぐれカレー、2種・3種の盛り合わせ、サフランライス・ターメリックライス・白ご飯、色鮮やかな付け合わせ、辛さはレベル2でも辛い、ガイヤーンのトッピング、新京極から三条に移転し2026年8月に10周年、大阪アメリカ村にも店、Bearbrick がたくさん。',
      confidence: 'medium', sources: [TB, R + 'B528044941/', R + 'B528506422/', R + 'B528620560/', R + 'B530126144/', R + 'B530628761/', R + 'B531256807/', R + 'B531288436/', R + 'B532160170/', R + 'B533020220/', R + 'B533579386/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Open daily; choose spice level; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条上る下丸屋町408 KUS河原町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.009856, 135.768780) moved 5.0 m south to (35.009811, 135.768780): the Tabelog point is 0.8 m from ChIJt7_M95IIAWAREGx8byEDpY4 (Kerala Indian Restaurant), now 5.8 m; GSI 京都府京都市中京区下丸屋町408番地 (lot) 44 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531256807/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Curry combination (two or three curries)', '', 'Curry', 'ask', 'no', '2026 reviews.', 'combo'),
      it('', '', 'Gai yang topping', '', 'Toppings', 'ask', 'no', 'July 2026.', 'gai_yang'),
    ] }, {
    cuisine: '色鮮やかな付け合わせと野菜を添えた、香りの重なるスパイスカレーの店 (2026年の口コミ)・カオスキーマ、週替わりのチキンカレー、気まぐれカレー、サフラン・ターメリック・白ご飯に2種か3種の盛り合わせ、辛さは選べる、ガイヤーンのトッピング (2026年5〜8月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '河原町三条の北',
    gf_detail: '要確認。サフランやターメリックのご飯のスパイスカレーは小麦なしのことが多いが、ガイヤーンや付け合わせによる。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。キーマとチキンのカレー (2026年の口コミ)。',
    notes: '[スパイスカレー・河原町三条] フィギュアの並ぶにぎやかなカレーの店。キーマ、週替わりのチキン、気まぐれカレーを2種か3種、色鮮やかな付け合わせとサフランライスで。ガイヤーンのトッピングも。辛さレベル2でも初心者には辛め。年中無休、カード・QR 可。',
  });
}

// ================================================================ 創作バル EN_CIEL
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042251/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:00'], ['18:00', '24:00']); const D = day(['18:00', '24:00']);
  put({
    id: 'kyoto_sosaku_bar_en_ciel', name: '創作バル EN_CIEL', category: 'OMNI',
    lat: 35.00258728787149, lng: 135.76115281033708, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: fried lunches (menchi katsu, croquettes, ham cutlet), pork cutlet curry and pasta (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried pork and chicken, sea bream collar, prosciutto and duck (2024–2026 reviews).',
    hours_raw: 'Monday and Wednesday–Friday 11:30–14:00 (last order 13:30) and 18:00–24:00; Tuesday lunch only, 11:30–14:00; Saturday and Sunday 18:00–24:00 (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR (Tabelog). 30 seats plus 4 more, counter and sofas; private hire for 20–50; karaoke (Tabelog). Heated tobacco only, in a designated area (Tabelog). Basement of the Yamaichi Central building, 3 min walk from Hankyu Karasuma or Shijo Stn (Tabelog).',
    hours: { 0: LD, 1: day(['11:30', '14:00']), 2: LD, 3: LD, 4: LD, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, basement',
    cuisine: 'Creative dining bar in a basement: daily set lunches, then small plates, pasta and drinks at night (2024–2026 reviews) · lunch from a daily board: A or B ¥900, C ¥1,000, A+B ¥1,200 — e.g. mixed fry of ham cutlet, croquettes and mini pork cutlets, simmered sea bream collar, menchi katsu, spring rolls, pork cutlet curry ¥1,100, with salad and miso soup (December 2024–October 2025) · evenings: a ¥1,000 quick-drink set of a drink and two small plates (karaage, prosciutto, duck pastrami, Iberico salami, nuts); Caesar salad, eggplant arrabbiata, meat, yuzu sorbet; courses with all-you-can-drink (Tabelog; 2025–2026 reviews) · lunch about ¥1,000, dinner about ¥2,000–4,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('創作バル EN_CIEL 四条烏丸'), menu_url: null,
    notes: '[Dining bar · Shijo-Karasuma basement] A calm, friendly basement bar with good-value set lunches — fried plates, simmered fish, katsu curry with salad and miso soup from ¥900 — and at night creative small plates, pasta and a ¥1,000 drink-and-two-plates set. Karaoke and group hire too. Lunch only on Tuesday; dinner only at weekends.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a creative dining bar in a Shijo-Karasuma basement serving daily lunches and evening dishes, praised for warm, attentive service (2024–2026 reviews).',
      philosophy: null, specialty: 'Set lunch; pasta.',
      anecdotes: [
        { text: 'A January 2025 visitor, curious about the lunch sign, had the ¥900 mixed fry of ham cutlet, croquettes and three mini pork cutlets, fried crisp.', source: R + 'B498915458/' },
        { text: 'A January 2026 diner found it open on New Year\'s Day evening when most places were shut, and was grateful for the welcome.', source: R + 'B520140697/' },
        { text: 'An August 2025 lunch guest liked the value of the ¥1,200 combination, though found it a little salty.', source: R + 'B511786266/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・バル、下京区元悪王子町55-2-1 山一セントラルビル B1F、阪急烏丸駅・地下鉄四条駅から徒歩3分、月・水〜金 11:30〜14:00 (L.O.13:30)、18:00〜24:00、火 11:30〜14:00、土・日 18:00〜24:00、予約可、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・電子マネー・QR 可、30席 (+4席)、20〜50名で貸切可、カラオケ、加熱式たばこのみ喫煙所、飲み放題のコース。口コミ (2024年12月〜2026年8月、英語): 地下の隠れ家、日替わりのランチ (A・B 900円、C 1,000円、A+B 1,200円)、ミックスフライ (ハムカツ、コロッケ、ミニとんかつ)、鯛のあら炊き、メンチカツ、春巻き、カツカレー1,100円、サラダと味噌汁付き、夜は1杯と2品の1,000円のちょい飲みセット (唐揚げ、生ハム、鴨のパストラミ、イベリコのサラミ、ナッツ)、シーザーサラダ、なすのアラビアータ、ゆずのシャーベット、元日の夜も営業 (2026年1月)、温かい接客、少し塩辛いとの声 (2025年8月)。',
      confidence: 'medium', sources: [TB, R + 'B496971177/', R + 'B498915458/', R + 'B504098046/', R + 'B511786266/', R + 'B516348054/', R + 'B518275156/', R + 'B520140697/', R + 'B520500547/', R + 'B530818491/', R + 'B533285123/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Basement bar; set lunches; heated tobacco area; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区元悪王子町55-2-1 山一セントラルビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.002587, 135.761153); cross-checked: GSI 京都府京都市下京区元悪王子町55番地 (lot) 21 m; nearest existing record 17.1 m (kyoto_miyakoyasai_kamo_karasuma); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B511786266/', R + 'B516348054/', R + 'B504098046/'],
    price_note: 'Prices from March–October 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Set lunch A or B', '¥900', 'Lunch', 'no', 'no', 'August 2025; daily menu.', 'lunch_ab'),
      it('', '', 'Pork cutlet curry lunch', '¥1,100', 'Lunch', 'no', 'no', 'October 2025.', 'katsu_curry'),
      it('', '', 'Quick-drink set (a drink and two small plates)', '¥1,000', 'Evening', 'ask', 'no', 'March 2025.', 'quick_set'),
    ] }, {
    cuisine: '地下の創作ダイニングバー。昼は日替わりの定食、夜は小皿、パスタと酒 (2024〜2026年の口コミ)・昼は日替わり: A・B 900円、C 1,000円、A+B 1,200円 (ハムカツ・コロッケ・ミニとんかつのミックスフライ、鯛のあら炊き、メンチカツ、春巻きなど)、カツカレー1,100円、サラダと味噌汁付き (2024年12月〜2025年10月)・夜は1杯と2品の1,000円のちょい飲みセット (唐揚げ、生ハム、鴨のパストラミ、イベリコのサラミ、ナッツ)、シーザーサラダ、なすのアラビアータ、肉料理、ゆずのシャーベット、飲み放題のコース (食べログ、2025〜2026年の口コミ)・昼1,000円ほど、夜2,000〜4,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条烏丸、地下',
    gf_detail: 'グルテンフリー不可。揚げ物のランチ (メンチカツ、コロッケ、ハムカツ)、カツカレー、パスタ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚と鶏の揚げ物、鯛のあら、生ハム、鴨 (2024〜2026年の口コミ)。',
    notes: '[ダイニングバー・四条烏丸の地下] 落ち着いた気さくな地下のバー。昼は揚げ物や煮魚、カツカレーにサラダと味噌汁の900円からのお得な定食、夜は創作の小皿、パスタ、1杯と2品の1,000円のセット。カラオケや貸切も。火曜は昼のみ、週末は夜のみ。',
  });
}

// ================================================================ グリルグリーン Grill Green
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027359/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_grill_green_gion', name: 'グリルグリーン (Grill Green)', category: 'OMNI',
    lat: 35.00454449787517, lng: 135.776620320346, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled steak, abalone and lobster are naturally wheat-free, but the signature egg sandwich and curry are not; no gluten information (2017–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak, abalone, lobster, caviar and escargot (2017–2024 reviews).',
    hours_raw: 'Monday–Thursday and Saturday 18:00–22:00; closed Friday and Sunday; hours may change (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money (Tabelog). Eight counter seats; private hire (Tabelog). Non-smoking (Tabelog). F Building 1F on the north side of Gion; 2 min walk from the Yasaka-jinja-mae bus stop, 7 min from Gion-Shijo Stn (Tabelog). Opened 17 December 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north side, near Yasaka Shrine',
    cuisine: 'Eight-seat counter of steak and French cooking with a deep wine list (Tabelog; 2017–2025 reviews) · steak cooked to order, Chateaubriand, abalone (pre-ordered), lobster, caviar, white corn, seasonal potage, escargot (2017–2024 reviews) · the classic finish of curry and an egg sandwich (2017–2020 reviews) · wine and champagne pairings (July 2024) · about ¥15,000–20,000 (Tabelog)',
    website: null, gmaps: gm('グリルグリーン 祇園'), menu_url: null,
    notes: '[Steak and French · Gion north side, 8 seats] A long-running eight-seat counter where a seasoned chef grills steak and Chateaubriand and cooks abalone, lobster and seasonal potage, ending with the house curry and egg sandwich regulars always order; strong on wine and champagne. Dinner only; closed Friday and Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Per Tabelog: a French and steak counter of eight seats opened 17 December 2015. Reviewers (2017–2025) describe a chef of long experience, regulars who pre-order abalone, and a curry and egg sandwich to finish.',
      philosophy: null, specialty: 'Steak; egg sandwich and curry.',
      anecdotes: [
        { text: 'A February 2019 regular pre-ordered abalone and, as always, finished with the egg sandwich and curry.', source: R + 'B451791807/' },
        { text: 'A July 2024 celebration had caviar, abalone, lobster, Chateaubriand and white corn with wine and champagne pairings.', source: R + 'B488009463/' },
        { text: 'An August 2020 bar-hopper, brought by a regular, ordered only the egg sandwich and curry, feeling slightly guilty given the steak courses.', source: R + 'B429215295/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・ステーキ・サンドイッチ、東山区祇園町北側347-28 Fビル 1F、京阪祇園四条駅から徒歩約7分、市バス八坂神社前から徒歩2分、月〜木・土 18:00〜22:00、金・日休み、予約可、カード可、電子マネー不可、カウンター8席、貸切可、禁煙、2015年12月17日開店。口コミ (2017年8月〜2025年5月、英語): ステーキ、シャトーブリアン、予約で鮑、オマール、キャビア、白とうもろこし、季節のポタージュ、エスカルゴ、締めのカレーとたまごサンド、ワインとシャンパンのペアリング (2024年7月)、アイスプラント (2025年5月)、老舗。',
      confidence: 'low', sources: [TB, R + 'B257823748/', R + 'B429215295/', R + 'B451791807/', R + 'B488009463/', R + 'B495203189/', R + 'B496739366/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Eight-seat counter; book ahead; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側347-28 Fビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through May 2025.' },
    pin_source: `Tabelog ${TB} (35.004544, 135.776620); GSI resolves only the large 347 block (89 m), so the Tabelog pin is kept; nearest existing record 5.5 m (kyoto_pingping_gion); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B451791807/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Steak', '', 'Mains', 'ask', 'no', '2019 reviews.', 'steak'),
      it('', '', 'Egg sandwich', '', 'Finish', 'no', 'no', '2017–2020 reviews.', 'egg_sando'),
      it('', '', 'Curry', '', 'Finish', 'ask', 'no', '2017–2020 reviews.', 'curry'),
    ] }, {
    cuisine: 'ワインの充実したカウンター8席のステーキとフランス料理 (食べログ、2017〜2025年の口コミ)・焼きたてのステーキ、シャトーブリアン、予約で鮑、オマール、キャビア、白とうもろこし、季節のポタージュ、エスカルゴ (2017〜2024年の口コミ)・締めの定番はカレーとたまごサンド (2017〜2020年の口コミ)・ワインとシャンパンのペアリング (2024年7月)・15,000〜20,000円ほど (食べログ)',
    neighborhood: '祇園北側、八坂神社のそば',
    gf_detail: '要確認。焼いたステーキ、鮑、オマールは小麦を使わないが、名物のたまごサンドとカレーは不可。グルテンの情報はない (2017〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ステーキ、鮑、オマール、キャビア、エスカルゴ (2017〜2024年の口コミ)。',
    notes: '[ステーキとフレンチ・祇園北側、8席] 長く続くカウンター8席の店。経験豊かな料理人がステーキやシャトーブリアン、鮑、オマール、季節のポタージュを作り、常連は最後に必ずカレーとたまごサンド。ワインとシャンパンも充実。夜のみ、金・日休み。',
  });
}

// ================================================================ 中国厨房 祝 Chinese Chubo Iwai
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033431/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://iwai-kyoto.jp/';
  const H = day(['18:00', '27:00']);
  put({
    id: 'kyoto_chugoku_chubo_iwai', name: '中国厨房 祝 (Chinese Chubo Iwai)', category: 'OMNI',
    lat: 35.00545384787454, lng: 135.7764575103553, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: gyoza, spring rolls, shumai, beef noodles and soy-based sauces (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, shrimp, seafood and duck dishes (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 18:00–3:00 (last order 2:30); closed Sunday (Tabelog). Reservations accepted; courses ¥500 cheaper if booked by the day before (Tabelog; March 2026). Cash only — no cards, e-money or QR (Tabelog). 26 seats including a counter; private hire (Tabelog). Smoking allowed (Tabelog). Wheelchair accessible (Tabelog). Spice level adjustable (Tabelog). Sasaki building 1F, Gion Shinbashi area; 6 min walk from Gion-Shijo, Sanjo or Sanjo Keihan Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Gion Shinbashi, Hayashishita-cho',
    cuisine: 'Late-night Chinese of Cantonese and Sichuan dishes tuned to Japanese tastes (Tabelog) · winged pan-fried gyoza, shrimp chilli, salt-fried shrimp, scallop and squid, spicy celery and pork mince with Sichuan pepper in house wrappers, sweet-and-sour pork, spicy chicken, beef with green peppers, fried rice, Peking duck, century egg, jellyfish, spicy beef noodles (April 2025–September 2026) · set for 2–5 of one drink and five dishes ¥5,000; all-you-can-drink courses ¥4,000 (booked ahead) to ¥7,700 (Tabelog; October 2025–March 2026) · about ¥3,000–5,000 (Tabelog; 2025–2026 reviews)',
    website: WEB, gmaps: gm('中国厨房 祝 祇園'), menu_url: null,
    notes: '[Chinese · Gion Shinbashi, till 3 a.m.] A no-frills Gion Chinese kitchen that cooks properly until 3 a.m.: winged gyoza, big shrimp in chilli sauce, Sichuan-peppered pork mince to wrap, Peking duck, with good-value all-you-can-drink courses for groups. Spice adjustable. Cash only; smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: an experienced chef cooking Cantonese, Sichuan and other Chinese dishes adjusted to Japanese tastes, with sets and celebration courses. Reviewers in 2025–2026 describe authentic cooking, quick service and a plain, slightly worn room.',
      philosophy: 'Chinese dishes suited to Japanese tastes, spice adjustable (Tabelog).', specialty: 'Winged gyoza; shrimp chilli.',
      anecdotes: [
        { text: 'A September 2025 regular calls it a "home for Chinese food" and always orders the spicy celery and pork mince, wrapped in house skins, extra hot.', source: R + 'B514652701/' },
        { text: 'An October 2025 party of ten had the ¥7,700 all-you-can-drink course — gyoza, shark-fin soup, salt-fried shrimp — and praised how fast drinks came.', source: R + 'B514994584/' },
        { text: 'A September 2026 pair found the room a little worn but the gyoza wings beautifully crisp, about ¥8,000 for two with eight drinks.', source: R + 'B536264944/' },
      ],
      japanese_sources_summary: '食べログ: 中華・居酒屋・餃子、東山区林下町419 佐々木ビル 1F、京阪祇園四条駅9番出口・地下鉄三条京阪駅・京阪三条駅から徒歩6分、月〜土 18:00〜翌3:00 (L.O.2:30)、日曜休み、予約可、カード・電子マネー・QR 不可、26席、貸切可、喫煙可、車椅子可、公式サイトあり、経験豊富な料理人の広東・四川にとどまらない日本人向けの中華、辛さは調整可、2〜5名の1ドリンク5品5,000円のセット、前日までの予約で500円引きの祝いコース。口コミ (2025年4月〜2026年9月、英語): 羽根つき餃子、エビチリ、海老・帆立・いかの塩炒め、セロリと豚ひき肉の山椒炒めを自家製の皮で包む、酢豚、辛い鶏、チンジャオロース、炒飯、北京ダック、ピータン、くらげ、辛い牛肉麺、飲み放題のコース (4,000円・7,700円)、提供が早い、店内はやや古い。',
      confidence: 'medium', sources: [TB, WEB, R + 'B507858456/', R + 'B510985718/', R + 'B511936132/', R + 'B514652701/', R + 'B514807302/', R + 'B514994584/', R + 'B515608107/', R + 'B524670403/', R + 'B536264944/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; late night; smoking allowed; wheelchair accessible.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区林下町419 佐々木ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005454, 135.776458); cross-checked: GSI 京都府京都市東山区林下町419番地 (lot) 11 m; nearest existing record 20.3 m (kyoto_gion_gozukon); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B524670403/'],
    price_note: 'Set price from Tabelog; course price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Set for 2–5: one drink and five dishes', '¥5,000', 'Sets', 'no', 'no', 'Tabelog.', 'set'),
      it('', '', 'All-you-can-drink course (booked a day ahead)', '¥4,000', 'Courses', 'no', 'no', 'March 2026.', 'course'),
      it('', '', 'Winged pan-fried gyoza', '', 'Dumplings', 'no', 'no', 'October 2025; September 2026.', 'gyoza'),
    ] }, {
    cuisine: '日本人の好みに合わせた広東・四川などの深夜の中華 (食べログ)・羽根つき餃子、エビチリ、海老・帆立・いかの塩炒め、自家製の皮で包むセロリと豚ひき肉の山椒炒め、酢豚、辛い鶏、チンジャオロース、炒飯、北京ダック、ピータン、くらげ、辛い牛肉麺 (2025年4月〜2026年9月)・2〜5名の1ドリンク5品5,000円のセット、飲み放題のコースは前日予約で4,000円から7,700円まで (食べログ、2025年10月〜2026年3月)・3,000〜5,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '祇園新橋、林下町',
    gf_detail: 'グルテンフリー不可。餃子、春巻き、焼売、牛肉麺、醤油のたれ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚肉、海老、魚介、鴨の料理 (2025〜2026年の口コミ)。',
    notes: '[中華・祇園新橋、深夜3時まで] 深夜3時までしっかり料理を出す飾らない祇園の中華。羽根つき餃子、大きな海老のエビチリ、山椒の効いた豚ひき肉を包んで、北京ダック、団体向けのお得な飲み放題のコースも。辛さは調整可。現金のみ、喫煙可。日曜休み。',
  });
}

save();
