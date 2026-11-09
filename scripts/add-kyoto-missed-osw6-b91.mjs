// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 91.
//   + 京焼肉 ききょう Kyo Yakiniku Kikyo (yakiniku in the 文椿ビルヂング at Sanjo-Karasuma; cold-noodle and daily-special lunches) — rest
//   - skip 26017318 京昆布舗 田なか (retail food shop, Greg 11-07 ruling)
//   + グリル葵 Grill Aoi (long-running yoshoku on Muromachi above Matsubara; head-on fried shrimp) — rest
//   - skip 26027452 ナツキッチン 72Kitchen (thin: no review since 2020)
//   + うまいもんや 室町応援団 Umaimonya Muromachi Oendan (basement izakaya with big lunch sets, Sanjo-Muromachi) — rest
//   + ニューオーモン New Omon (one-man teppan horumon spot on Niomon-dori, open about once a week) — rest
//   Rest tier, nearest-first from `next rest 2000`. Every brand checked against queue-status.jsonl, the THAN brand list
//   (than.co.jp/brands, read 2026-11-08) and the 株式会社WILL ruling (26043489): no matches for ききょう, 田なか, グリル葵,
//   ナツキッチン, 室町応援団 or ニューオーモン. Same-name counts (2026-11-08): one each among those drafted.
//   None of the drafted shops is in data/kyoto.json.
//   Charges (Tabelog, Japanese originals): ききょう 「サ-ビス料、チャ－ジ料なし」; グリル葵 「なし」; ニューオーモン 「チャージ料理なし」
//   (as written; the English reads "Charge without food"); 室町応援団 none listed.
//   No halal claims; no owner deaths; single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-91');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26017318', 'retail food shop (Greg 11-07 ruling): 京昆布舗 田なか sells kombu, dashi and tsukudani to take home (and at department-store fairs), opened 2010 per Tabelog; no eat-in, no founding history or GF/vegan claim sourced (https://kyokonbu.jp/; https://tabelog.com/en/kyoto/A2601/A260301/26017318/).');
skip('26027452', 'thin: ナツキッチン (72Kitchen) has no Tabelog review since 2020 — not enough current sourced detail to draft (https://tabelog.com/en/kyoto/A2601/A260302/26027452/).');

// ================================================================ 京焼肉 ききょう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26007478/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://kyoyakiniku-kikyo.com/';
  const H = day(['11:30', '14:30'], ['17:30', '23:00']); const E = day(['17:30', '23:00']);
  put({
    id: 'kyoto_kyo_yakiniku_kikyo', name: '京焼肉 ききょう (Kyo Yakiniku Kikyo)', category: 'OMNI',
    lat: 35.008762, lng: 135.75889, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakiniku with a house dipping sauce, cold noodles, bibimbap with gochujang, katsu (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, yukhoe, clam sundubu, meat daily specials (2024–26 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sat 11:30–14:30 (last order 14:00) and 17:30–23:00 (last order 22:00); Sunday and holidays 17:30–23:00; closed Wednesday (moved to the 28th when the 29th is a Wednesday) (Tabelog). Lunch is served upstairs on the second floor and ordered by QR code; busy at noon (September 2024, June and September 2026). 「サ-ビス料、チャ－ジ料なし」 — no service or cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay or d Barai (Tabelog), but a September 2026 regular says cards are not taken at lunch. 70 seats, with private space (Tabelog). In the 文椿ビルヂング on Sanjo west of Karasuma (Tabelog; September 2024).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Karasuma — Karasuma Oike',
    cuisine: 'Kyoto-style yakiniku with a house dipping sauce · lunch: daily special ¥900, ¥1,000 with coffee (September and October 2026); wagyu tataki-style rare steak rice bowl (2024–26 reviews); special cold noodles with mini bibimbap ¥1,200 (June 2026); summer tomato cold noodles (March and August 2025) · dinner: yukhoe, meat wrapped with grated daikon and green onion, clam sundubu (December 2024); half portions available (2023 review)',
    website: SITE, gmaps: gm('京焼肉 ききょう 三条烏丸'), menu_url: TB,
    notes: '[Yakiniku · Sanjo-Karasuma] A long-running Kyoto-style yakiniku in the 文椿ビルヂング at Sanjo-Karasuma: good-value weekday lunches upstairs — a ¥900 daily special, wagyu tataki rice bowls, chewy cold noodles with mini bibimbap — and yakiniku, yukhoe and sundubu at night. Closed Wednesday. Bring cash for lunch.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a yakiniku restaurant opened 20 July 2008 in the 文椿ビルヂング at Sanjo-Karasuma.',
      philosophy: null, specialty: 'Kyoto-style yakiniku with a house sauce; cold noodles.',
      anecdotes: [
        { text: 'A September 2026 regular on a sixth visit found the daily special with coffee still came to ¥1,000 — rare value for the area — though cards are not taken at lunch.', source: R + 'B486370537/' },
        { text: 'A June 2026 late-lunch diner ordered by phone upstairs and chose the ¥1,200 special cold noodles with bibimbap, mistaking the gochujang for a pickled plum.', source: R + 'B530971623/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・居酒屋、中京区三条烏丸西入ル御倉町79 文椿ビルヂング 1F-2F、月火木金土11:30〜14:30 (L.O.14:00)・17:30〜23:00 (L.O.22:00)、日・祝日17:30〜23:00、水曜休み (29日が水曜なら28日休み)、サ-ビス料・チャ－ジ料なし、カード・PayPay・d払い可、70席、2008年7月20日オープン。口コミ (2024年9月〜2026年10月、英語): 昼は2階でQRコードで注文、日替わり900円 (コーヒー付き1,000円)、和牛のたたき丼、特製冷麺とミニビビンバ1,200円、夏のトマト冷麺、昼はカード不可との声、夜はユッケ、大根おろしとねぎを巻いた肉、あさりのスンドゥブ、特製のたれ。',
      confidence: 'medium', sources: [SITE, TB, R + 'B486370537/', R + 'B491427918/', R + 'B492661991/', R + 'B497177129/', R + 'B503218186/', R + 'B511436896/', R + 'B530971623/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'For lunch go up to the second floor and order by QR code; bring cash. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条烏丸西入ル御倉町79 文椿ビルヂング 1F-2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008834, 135.758890); cross-checked: GSI 京都府京都市中京区御倉町79番地 (lot) 13m; offset 8 m south so as not to stack on 烏丸DUE (same building, 文椿ビルヂング 1F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486370537/', R + 'B530971623/'],
    price_note: 'Lunch prices from June to October 2026; reviewers report ¥6,000–7,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Daily-special lunch', '¥900', 'Lunch', 'no', 'no', 'October 2026; ¥1,000 with coffee.', 'daily_lunch'),
      it('', '', 'Special cold noodles with mini bibimbap', '¥1,200', 'Lunch', 'no', 'no', 'June 2026.', 'reimen_bibimbap'),
      it('', '', 'Wagyu tataki-style rice bowl', '', 'Lunch', 'no', 'no', 'July and October 2026.', 'wagyu_tataki_don'),
      it('', '', 'Yukhoe', '', 'Dinner', 'no', 'no', 'December 2024.', 'yukhoe'),
    ] }, {
    cuisine: '特製のたれの京風の焼肉・昼は日替わり900円、コーヒー付き1,000円 (2026年9月・10月)、和牛のたたき風の丼 (2024〜2026年の口コミ)、特製冷麺とミニビビンバ1,200円 (2026年6月)、夏のトマト冷麺 (2025年3月・8月)・夜はユッケ、大根おろしとねぎを巻いた肉、あさりのスンドゥブ (2024年12月)、ハーフサイズもあり (2023年の口コミ)',
    neighborhood: '三条烏丸。烏丸御池',
    gf_detail: 'グルテンフリーではない。特製のたれの焼肉、冷麺、コチュジャンのビビンバ、カツ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛、ユッケ、あさりのスンドゥブ、肉の日替わり (2024〜2026年の口コミ)。',
    notes: '[焼肉・三条烏丸] 三条烏丸の文椿ビルヂングの長く続く京風の焼肉店。平日の昼は2階で900円の日替わり、和牛のたたき丼、コシのある冷麺とミニビビンバ、夜は焼肉、ユッケ、スンドゥブ。水曜休み。昼は現金の用意を。',
  });
}

// ================================================================ グリル葵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013718/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '20:00']); const SU = day(['17:00', '21:00']);
  put({
    id: 'kyoto_grill_aoi', name: 'グリル葵 (Grill Aoi)', category: 'OMNI',
    lat: 34.999123, lng: 135.758041, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fried shrimp, cutlets, cream croquettes, fried oysters, hamburg steak (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yoshoku menu of meat, seafood and fried dishes (2025–26 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sat 11:30–14:00 and 17:30–20:00; Sunday 17:00–21:00; closed Wednesday (Tabelog). Charges: 「なし」 (none) (Tabelog). Tabelog lists cards (VISA, Master, JCB, AMEX, Diners), but a November 2025 diner was told cash only — bring cash. 30 seats: a counter with a table behind (Tabelog; October 2026); banquets for 2–25. Will adjust a combination on request (October 2026). On Muromachi-dori just north of Matsubara (April 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Muromachi-Matsubara — Shijo Karasuma',
    cuisine: 'Long-running neighbourhood yoshoku, a former Michelin Bib Gourmand pick (April and November 2026 reviews) · daily lunch of three items — fried shrimp, tenderloin cutlet, hamburg steak — with salad, rice and miso soup ¥1,490 (November 2025) · hamburg steak, two fried shrimp and fried salmon ¥1,595 (April 2026) · large head-on fried shrimp, eaten whole (January and September 2026) · cream croquettes, roast beef, tonteki, beef steak (2026 reviews) · mini course with corn soup, salad, fried shrimp, hamburg steak, ice cream and coffee ¥3,000 (October 2026) · special fried oysters (November 2026)',
    website: null, gmaps: gm('グリル葵 室町 松原'), menu_url: TB,
    notes: '[Yoshoku · Muromachi-Matsubara] An old-style yoshoku on Muromachi just above Matsubara, once on Michelin’s Bib Gourmand list: generous combination plates of hamburg steak, head-on fried shrimp, cutlets and cream croquettes with salad and rice, and a ¥3,000 dinner mini course. Closed Wednesday; Sunday dinner only. Bring cash.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per reviews: a long-established yoshoku restaurant on Muromachi-dori, popular when the area was full of kimono shops, keeping its original flavours (April 2026); formerly a Michelin Bib Gourmand pick (November 2026).',
      philosophy: null, specialty: 'Head-on fried shrimp; hamburg steak.',
      anecdotes: [
        { text: 'A January 2026 diner on a trip home singled out the large head-on fried shrimp, prepared so the whole head can be eaten safely.', source: R + 'B520997600/' },
        { text: 'An October 2026 walk-in wanted hamburg steak and fried shrimp with no matching set; the kitchen made the combination to order, even adjusting the number of shrimp.', source: R + 'B537815467/' },
      ],
      japanese_sources_summary: '食べログ: 洋食・ステーキ、下京区室町通松原上ル高辻町607-2 関ビル1F、月火木金土11:30〜14:00・17:30〜20:00、日17:00〜21:00、水曜休み、チャージ「なし」、カード可、30席 (宴会2〜25名)。口コミ (2025年7月〜2026年11月、英語): 日替わりの盛り合わせ (海老フライ、ヒレカツ、ハンバーグ) 1,490円、ハンバーグと海老フライ2本と鮭フライ1,595円、頭付きの大きな海老フライ、クリームコロッケ、ローストビーフ、トンテキ、ビーフステーキ、ミニコース3,000円 (コーンスープ、サラダ、アイス、コーヒー)、カキフライ、2025年11月は現金のみとの声、注文に合わせて組み合わせてくれる、以前ミシュランのビブグルマン、呉服の店が多かった頃からの店。',
      confidence: 'medium', sources: [TB, R + 'B236462791/', R + 'B512214676/', R + 'B517342759/', R + 'B517927364/', R + 'B520997600/', R + 'B530930154/', R + 'B530969456/', R + 'B534908033/', R + 'B537815467/', R + 'B537984526/', R + 'B538689470/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ask for a custom combination if no set fits; bring cash. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区室町通松原上ル高辻町607-2 関ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.999123, 135.758041); cross-checked: GSI 京都府京都市下京区高辻町607番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517927364/', R + 'B530930154/', R + 'B537984526/'],
    price_note: 'Prices from November 2025 to October 2026.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch (fried shrimp, tenderloin cutlet, hamburg steak)', '¥1,490', 'Lunch', 'no', 'no', 'November 2025.', 'daily_lunch'),
      it('', '', 'Hamburg steak, two fried shrimp and fried salmon', '¥1,595', 'Plates', 'no', 'no', 'April 2026.', 'combo'),
      it('', '', 'Mini course (corn soup, salad, fried shrimp, hamburg steak, ice cream, coffee)', '¥3,000', 'Dinner', 'no', 'no', 'October 2026.', 'mini_course'),
    ] }, {
    cuisine: '長く続く町の洋食店、以前ミシュランのビブグルマン (2026年4月・11月の口コミ)・海老フライ、ヒレカツ、ハンバーグの日替わりの3品盛りにサラダ、ご飯、味噌汁1,490円 (2025年11月)・ハンバーグ、海老フライ2本、鮭フライ1,595円 (2026年4月)・頭まで食べられる大きな頭付きの海老フライ (2026年1月・9月)・クリームコロッケ、ローストビーフ、トンテキ、ビーフステーキ (2026年の口コミ)・コーンスープ、サラダ、海老フライ、ハンバーグ、アイス、コーヒーのミニコース3,000円 (2026年10月)・カキフライ (2026年11月)',
    neighborhood: '室町松原。四条烏丸',
    gf_detail: 'グルテンフリーではない。海老フライ、カツ、クリームコロッケ、カキフライ、ハンバーグ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉、魚介、揚げ物の洋食 (2025〜2026年の口コミ)。',
    notes: '[洋食・室町松原] 室町通松原上ルの昔ながらの洋食店、以前はミシュランのビブグルマン。ハンバーグ、頭付きの海老フライ、カツ、クリームコロッケにサラダとご飯の盛り合わせ、夜は3,000円のミニコース。水曜休み、日曜は夜のみ。現金の用意を。',
  });
}

// ================================================================ うまいもんや 室町応援団
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26025142/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_muromachi_oendan', name: 'うまいもんや 室町応援団 (Umaimonya Muromachi Oendan)', category: 'OMNI',
    lat: 35.008481, lng: 135.7582, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: karaage, tempura, okonomiyaki, motsu nabe with noodles (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried chicken, sashimi, seafood bowls, motsu nabe (2025–26 reviews).',
    hours_raw: 'Mon–Sat 11:30–13:30 and 17:00–23:00 (last order 22:30); closed Sunday and holidays (Tabelog). Lunch fills the moment noon arrives — come before 12:00 (April and May 2026). Shoes off; sunken-kotatsu seating and private rooms (January and July 2026). A smoking area (April and October 2026); Tabelog lists smoking allowed. Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 70 seats (Tabelog). Basement of KB Annex Building on Sanjo east of Muromachi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Muromachi — Karasuma Oike',
    cuisine: 'Basement izakaya with big lunch sets · lunch: "men’s" karaage set, also as a half portion (January 2026); sashimi plus two karaage set ¥1,500 (May 2026); seafood rice bowl (October 2026) · evening: all-you-can-drink courses ending in motsu nabe with noodles or rice (September 2025, March 2026); about ¥3,100 a head for food and two drinks (August 2026)',
    website: null, gmaps: gm('うまいもんや 室町応援団'), menu_url: TB,
    notes: '[Izakaya · Sanjo-Muromachi] A basement izakaya with sunken-kotatsu private rooms near Karasuma Oike: hearty, good-value lunch sets of big karaage, sashimi or seafood bowls that fill the room at noon, and all-you-can-drink courses ending in motsu nabe at night. Shoes off; smoking area. Closed Sunday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog and reviews: an izakaya in the basement of the KB Annex Building near Sanjo-Muromachi, popular with office workers at lunch and for group dinners.',
      philosophy: null, specialty: 'Karaage set lunch; motsu nabe course.',
      anecdotes: [
        { text: 'A May 2026 regular arrived before noon for once and watched the room fill the instant 12:00 struck, over a ¥1,500 set of sashimi and two large karaage.', source: R + 'B528195304/' },
        { text: 'A July 2026 couple, scouting the room for an August banquet, had a sunken-kotatsu private room for just the two and a cheerful welcome from the manager.', source: R + 'B530969417/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮、中京区三条通室町東入ル御倉町64 KBアネックスビル B1F、月〜土11:30〜13:30・17:00〜23:00 (L.O.22:30)、日・祝日休み、カード可、70席 (掘りごたつ)、喫煙可。口コミ (2025年9月〜2026年10月、英語): 昼の男の唐揚げ定食 (ハーフもあり)、刺身と唐揚げ2個の欲張り定食1,500円、海鮮丼、正午に満席、靴を脱いで掘りごたつ、個室、喫煙所あり、夜は飲み放題のコース、しめはもつ鍋に麺かご飯、2杯ずつで一人約3,100円。',
      confidence: 'medium', sources: [TB, R + 'B514198060/', R + 'B522162444/', R + 'B524404213/', R + 'B526992439/', R + 'B528195304/', R + 'B530969417/', R + 'B536563484/', R + 'B536920198/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Arrive before noon for lunch; shoes go in a shoe box. There is a smoking area. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通室町東入ル御倉町64 KBアネックスビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008481, 135.758200); cross-checked: GSI 京都府京都市中京区御倉町64番地 (lot) 54m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528195304/', R + 'B536563484/'],
    price_note: 'Prices from May and August 2026.', last_checked: TODAY, items: [
      it('', '', 'Sashimi and two-karaage set (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'May 2026.', 'yokubari_set'),
      it('', '', 'Karaage set (lunch; half portion available)', '', 'Lunch', 'no', 'no', 'January 2026.', 'karaage_set'),
      it('', '', 'All-you-can-drink course ending in motsu nabe', '', 'Dinner', 'no', 'no', 'March 2026.', 'motsunabe_course'),
    ] }, {
    cuisine: '昼の定食がボリュームたっぷりの地下の居酒屋・昼は男の唐揚げ定食 (ハーフもあり) (2026年1月)、刺身と唐揚げ2個の定食1,500円 (2026年5月)、海鮮丼 (2026年10月)・夜はしめにもつ鍋 (麺かご飯) の飲み放題のコース (2025年9月、2026年3月)、料理と2杯で一人約3,100円 (2026年8月)',
    neighborhood: '三条室町。烏丸御池',
    gf_detail: 'グルテンフリーではない。唐揚げ、天ぷら、お好み焼き、麺のもつ鍋 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。唐揚げ、刺身、海鮮丼、もつ鍋 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・三条室町] 烏丸御池近く、掘りごたつの個室がある地下の居酒屋。昼は大きな唐揚げ、刺身、海鮮丼のお得でボリュームのある定食で正午に満席、夜はもつ鍋で締める飲み放題のコース。靴を脱いで上がる、喫煙所あり。日曜休み。',
  });
}

// ================================================================ ニューオーモン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26034628/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_new_omon', name: 'ニューオーモン (New Omon)', category: 'OMNI',
    lat: 35.011816, lng: 135.775885, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakisoba, pork buns, sauced horumon and stir-fries from the teppan (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: horumon, lamb, chicken, steak and pork dishes (2025–26 reviews).',
    hours_raw: 'Open only one or two weekdays a week, announced on Instagram at the start of the week; 17:00 to about 19:00, last order 18:30 (Tabelog; April 2025, February 2026). The owner has another job (February 2026). No set menu — the owner cooks what the day brings, shared around the teppan; portions shrink as more people come, so it stays cheap (June 2025). 「チャージ料理なし」 as written on Tabelog. Cash only: no cards, e-money or QR (Tabelog). 15 places: five standing at the teppan, a bench table and a small raised tatami room (Tabelog; February 2026). In a former greengrocer’s on Niomon-dori, about ten minutes from Sanjo Keihan (February 2026).',
    hours: {}, hours_status: 'varies',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Niomon-dori — Sanjo Keihan',
    cuisine: 'Teppan horumon and whatever the owner cooks that day · horumon stir-fried with real sansho and garlic, steak, lamb with vegetables, yakisoba with perilla and sansho (June 2025, February 2026) · Hong Kong-style thin-noodle yakisoba (February 2026) · New Year’s Eve special: grilled lamb skewers ¥700, pork-belly buns ¥700 (December 2025) · bottled beer, wine (2025 reviews)',
    website: null, gmaps: gm('ニューオーモン 京都 仁王門'), menu_url: TB,
    notes: '[Teppan horumon · Niomon-dori] A legendary part-time teppan spot in an old greengrocer’s on Niomon-dori: one or two evenings a week, announced on Instagram, the owner grills horumon with sansho, lamb, steak and yakisoba for whoever is standing round the hotplate, shared out among everyone. 17:00 to about 19:00; cash only.',
    chef_bio: { chef_name: null, roles: ['Owner (named in a February 2026 review as Maeda), who cooks alone and has another job'], origin: null,
      background: 'Per Tabelog and reviews: a teppan izakaya opened 17 July 2020 in a retro wooden former greengrocer’s on Niomon-dori, its name taken from the street (February 2026).',
      philosophy: 'Per reviews: no fixed menu — the owner cooks dishes the owner finds delicious and everyone shares (April 2024, April 2025).', specialty: 'Teppan horumon with sansho; yakisoba.',
      anecdotes: [
        { text: 'A May 2025 first-timer sat at a table without knowing the regulars stand round the teppan — next time, the plan is to claim a spot at the hotplate.', source: R + 'B507219755/' },
        { text: 'A July 2025 visitor ended up chatting with the next table and sharing three bottles of wine before the 90 minutes were up.', source: R + 'B509612827/' },
      ],
      japanese_sources_summary: '食べログ: ホルモン・焼肉・焼きそば、左京区和国町370、17:00〜18:30 (L.O.)、不定休 (現在は週1回ほど営業)、チャージ料理なし (原文のまま)、カード・電子マネー・QR 不可、15席 (立ち飲み5、ベンチテーブル3、小上がり7)、2020年7月17日オープン。口コミ (2025年4月〜2026年2月、英語): 営業日は週1〜2日、インスタグラムで告知、店主は別の仕事もある、メニューは決まっておらず鉄板で店主が作る料理をみんなで分ける、人が増えると一人の量が減るので安い、山椒とにんにくのホルモン炒め、ステーキ、ラムと野菜の炒め物、大葉と山椒の焼きそば、香港の細麺の焼きそば、大晦日のラム串700円、角煮まん700円、元八百屋の木造の建物、仁王門通、京阪三条から徒歩約10分。',
      confidence: 'medium', sources: [TB, R + 'B484149526/', R + 'B507219755/', R + 'B509612827/', R + 'B515190716/', R + 'B520864165/', R + 'B522216382/', R + 'B522971369/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Check Instagram for the day; arrive at 17:00 and stand at the teppan. Bring cash. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区和国町370',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (open about once a week); reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.011816, 135.775885); cross-checked: GSI 京都府京都市左京区和国町370番地 (lot) 93m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520864165/'],
    price_note: 'Prices from December 2025; the regular menu changes daily and is unpriced in reviews.', last_checked: TODAY, items: [
      it('', '', 'Teppan horumon with sansho', '', 'Teppan', 'no', 'no', 'June 2025 and February 2026.', 'horumon'),
      it('', '', 'Yakisoba', '', 'Teppan', 'no', 'no', 'June 2025 and February 2026.', 'yakisoba'),
      it('', '', 'Grilled lamb skewers (special night)', '¥700', 'Specials', 'ask', 'no', 'December 2025.', 'lamb_skewer'),
    ] }, {
    cuisine: '鉄板のホルモンと店主のその日の料理・本物の山椒とにんにくのホルモン炒め、ステーキ、ラムと野菜の炒め物、大葉と山椒の焼きそば (2025年6月、2026年2月)・香港の細麺の焼きそば (2026年2月)・大晦日の特別営業のラム串700円、角煮まん700円 (2025年12月)・瓶ビール、ワイン (2025年の口コミ)',
    neighborhood: '仁王門通。京阪三条',
    gf_detail: 'グルテンフリーではない。焼きそば、角煮まん、たれのホルモン、鉄板の炒め物 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ホルモン、ラム、鶏、ステーキ、豚の料理 (2025〜2026年の口コミ)。',
    notes: '[鉄板ホルモン・仁王門通] 仁王門通の元八百屋の建物で営む、知る人ぞ知る鉄板の店。週に1〜2日、インスタグラムで告知し、山椒のホルモン、ラム、ステーキ、焼きそばを鉄板を囲む客みんなで分ける。17時から19時ごろまで、現金のみ。',
  });
}

save();
