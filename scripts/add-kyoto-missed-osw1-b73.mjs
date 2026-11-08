// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 73.
//   + 京都 お酒の神社 Kyoto Osake no Jinja (shrine-themed izakaya by Sanjo bridge: obanzai, sashimi, sake; opened Feb 2026)
//   + マキシモ MAXIMO (small Tex-Mex taco and tequila bar on Kiyamachi north of Sanjo)
//   + 祇園焼肉 慶尚 Gion Yakiniku Keisho (late-night yakiniku in a Gion back lane, open to 3 am)
//   - 琉球酒場 がじゅ丸, すき家 河原町三条店, 油そば 味の天徳 京都祇園店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26044478, 26005064 (skipped), 26029730,
//   26022764 (skipped), 26038292 (skipped), 26041610.
//   queue-status.jsonl grepped for each brand (お酒の神社, がじゅ丸, マキシモ, すき家, 天徳, 慶尚): only すき家 has an earlier
//   ruling (26005493, osw9-54).
//   Data check: none of the three drafted is in data/kyoto.json by name or address. お酒の神社 shares 中島町98 御所飴ビル with
//   マブルー ハラル ダイニング (2F, kyoto_mabrur_halal_dining); マキシモ shares 恵比須町446 with がじゅ丸 (skipped). A hidden,
//   unverified record “Rin Halal Japanese & Vegetarian” (ChIJ1ZkRawAJAWARUlQkpI7Sh94) sits 3 m from 慶尚’s Tabelog point.
//   Same-name count (same brand or operator only): one shop each; no operators found on Tabelog. Large-parent list checked.
//   Service charges: none listed on Tabelog for any of the three.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-73');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26005064', '琉球酒場 がじゅ丸: too thin to verify — the only 2025–2026 review (January 2026) has no text, and no other current source was found');
skip('26022764', 'すき家 河原町三条店: chain — same ruling as 26005493 (osw9-54)');
skip('26038292', '油そば 味の天徳 京都祇園店: chain — Tabelog’s name search lists 味の天徳 shops in Bubaigawara, Hachioji, Kakio, Hoshigaoka, Shizuoka and Kyoto Shijo-Kiyamachi besides this one');

// ================================================================ 京都 お酒の神社
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044478/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://bastion-cms252.bastion-cms.com/';
  const H = day(['12:00', '22:00']);
  put({
    id: 'kyoto_osake_no_jinja_sanjo', name: '京都 お酒の神社 (Kyoto Osake no Jinja)', category: 'OMNI',
    lat: 35.008974, lng: 135.770709, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai in dashi, sashimi, grilled gyoza, Wagyu sukiyaki and beef-tongue shabu-shabu in a soy-based broth; no gluten information (own site; Tabelog menu; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the obanzai and hot pots are built on dashi, with meat and fish throughout (2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday–Sunday and holidays 12:00–22:00; closed Wednesday (Tabelog). Cards, e-money and QR (Tabelog). 42 seats: 37 at tables and 5 at the counter; groups up to 40 (Tabelog). Heated tobacco only, with a smoking area for cigarettes (Tabelog). Through a narrow entrance on Sanjo-dori, ground floor of 御所飴ビル, 3 min from Keihan Sanjo (Tabelog; March and April 2026). Opened 1 February 2026 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo, west of Sanjo bridge — 3 min from Keihan Sanjo',
    cuisine: 'An izakaya styled like a shrine at night, with sake from Kyoto and across Japan (Tabelog; own site) · Wagyu sukiyaki and beef-tongue shabu-shabu (own site) · obanzai from the counter, five for about ¥2,000–2,200 — duck breast, fish nanban-zuke, grilled eggplant in dashi, Kyoto-style nikujaga, squid and bamboo shoots in sweet vinegar (Tabelog; March and April 2026) · sashimi platters of three or five kinds, ¥2,500–4,500, with fish from the owners’ contacts (Tabelog; March 2026) · simmered sea bream, grilled shrimp, shrimp hot pot finished as a cheese risotto, changja rolled with nagaimo, aji bone senbei (March 2026) · grilled gyoza, “shrine” fried tofu, pickles (Tabelog)',
    website: SITE, gmaps: gm('京都 お酒の神社'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Sanjo by the bridge, a shrine-themed sake bar] Down a narrow entrance on Sanjo-dori, a 42-seat izakaya made up like a shrine at night, with gagaku playing: pick obanzai from the counter, then sashimi platters, sea bream, Wagyu sukiyaki or beef-tongue shabu-shabu, with sake from across Japan. Open from noon; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'The shop’s site and Tabelog describe an izakaya inspired by a shrine at night, popular with guests from Japan and abroad, serving Kyoto sake and dishes meant to convey Japanese food culture. A March 2026 diner was told the fish comes through acquaintances of the shop. No operator was found.',
      philosophy: null, specialty: 'Obanzai; sashimi platters.',
      anecdotes: [
        { text: 'An April 2026 diner, expecting a tourist trap from the gagaku and festive look, found the five-kind sashimi platter arriving like a ryokan boat platter.', source: R + 'B525472260/' },
        { text: 'A March 2026 diner asked for risotto to finish the shrimp hot pot and went back for seconds.', source: R + 'B525704376/' },
      ],
      japanese_sources_summary: '公式サイト: 京都 お酒の神社、神社のような落ち着いた空間で日本酒と和食、海外からも人気の居酒屋、和牛すき焼き、牛タンしゃぶしゃぶ、京都産日本酒。食べログ: 居酒屋、中京区中島町98 御所飴ビル 1F、京阪三条駅から徒歩3分、月・火・木〜日・祝 12:00〜22:00、水曜定休、カード・電子マネー・QR可、42席 (テーブル37、カウンター5)、加熱式たばこのみ、2026年2月1日オープン、本日のおばんざい盛り合わせ2,200円、刺身三種盛り2,500円・五種盛り4,500円、焼き餃子、Shrine Fried Tofu。口コミ (2026年3・4月、英語): 三条通の狭い入口、雅楽、カウンターのおばんざいから5種 (鴨ロース、魚の南蛮漬け、焼き茄子、肉じゃが、いかと筍の甘酢)、舟盛りのような刺身、鯛のあら炊き、焼き海老、海老鍋の締めのチーズリゾット、長芋入りチャンジャ、鯵の骨せんべい。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', SITE, R + 'B525472260/', R + 'B525704376/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Popular with overseas guests (own site); open from noon.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区中島町98 御所飴ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated March and April 2026.' },
    pin_source: `Tabelog ${TB} (35.009024, 135.770709), offset about 5.5 m south to (35.008974, 135.770709) because kyoto_kyogamo_osoba_riku_sanjo sits within 4 m; cross-checked: GSI 京都府京都市中京区中島町98番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included.', last_checked: TODAY, items: [
      it('', '', 'Today’s obanzai assortment', '¥2,200', 'Obanzai', 'ask', 'no', 'Tabelog; March and April 2026.', 'obanzai'),
      it('', '', 'Today’s sashimi platter, five kinds', '¥4,500', 'Sashimi', 'ask', 'no', 'Tabelog; April 2026.', 'sashimi5'),
      it('', '', 'Specialty grilled gyoza', '¥1,000', 'Small plates', 'no', 'no', 'Tabelog.', 'gyoza'),
      it('', '', 'Seasonal greens ohitashi', '¥800', 'Small plates', 'ask', 'no', 'Tabelog; dashi.', 'ohitashi'),
    ] }, {
    cuisine: '夜の神社のような雰囲気の居酒屋、京都と全国の日本酒 (食べログ、公式サイト)・和牛すき焼きと牛タンしゃぶしゃぶ (公式サイト)・カウンターのおばんざいから5種、約2,000〜2,200円: 鴨ロース、魚の南蛮漬け、出汁に浸した焼き茄子、京風の肉じゃが、いかと筍の甘酢 (食べログ、2026年3・4月)・刺身の三種盛り・五種盛り2,500〜4,500円、魚は知り合いから (食べログ、2026年3月)・鯛のあら炊き、焼き海老、締めにチーズリゾットにする海老鍋、長芋入りのチャンジャ、鯵の骨せんべい (2026年3月)・焼き餃子、Shrine Fried Tofu、漬物 (食べログ)',
    neighborhood: '三条大橋の西の三条。京阪三条から徒歩3分',
    gf_detail: '要確認。出汁のおばんざい、刺身、焼き餃子、醤油ベースの割下の和牛すき焼きと牛タンしゃぶしゃぶ。グルテンの情報はない (公式サイト、食べログのメニュー、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。おばんざいと鍋は出汁が基本で、肉と魚が中心 (2026年の口コミ)。',
    notes: '[居酒屋・三条大橋のそば、神社をテーマにした日本酒の店] 三条通の狭い入口の奥、雅楽の流れる夜の神社のような42席の居酒屋。カウンターのおばんざいを選び、刺身の盛り合わせ、鯛、和牛すき焼きや牛タンしゃぶしゃぶを全国の日本酒とともに。昼から営業、水曜定休。',
  });
}

// ================================================================ マキシモ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26029730/'; const R = TB + 'dtlrvwlst/';
  const EARLY = day(['15:00', '23:00']); const LATE = day(['17:00', '23:00']);
  put({
    id: 'kyoto_maximo_kiyamachi', name: 'マキシモ (MAXIMO)', category: 'OMNI',
    lat: 35.00932, lng: 135.769979, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tacos on corn tortillas, nachos and guacamole chips; whether the tortillas or fryer are shared with wheat is not stated (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Guacamole and chips are made in house, but no vegan dishes are named; tacos are mostly beef tongue, pork carnitas and shrimp (2025–2026 reviews).',
    hours_raw: 'Monday, Saturday and Sunday 15:00–23:00; Tuesday–Friday 17:00–23:00; hours may change (Tabelog). Reservations recommended at busy times (May 2025). Cards: AMEX only; no QR (Tabelog). About 6–8 counter seats and a table downstairs, with more upstairs (March 2026). Smoking allowed (Tabelog). On Kiyamachi north of Sanjo (恵比須町446), 4 min from Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 0: EARLY, 1: LATE, 2: LATE, 3: LATE, 4: LATE, 5: EARLY, 6: EARLY }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Sanjo — 4 min from subway Kyoto Shiyakusho-mae',
    cuisine: 'Tex-Mex tacos, nachos and tequila in a small, colourful bar (2025–2026) · beef-tongue and shrimp-avocado tacos; S nachos heaped with meat and cheese; lime sour (May 2025) · a trio of tacos with guacamole on corn tortillas, with cilantro on request; tequila (March 2026) · homemade guacamole with crisp chips; pork carnitas tacos made to order (April 2026) · nachos a regular rates among Japan’s best (April 2026) · tequila cocktails (April 2025)',
    website: 'https://ja-jp.facebook.com/maximo.kyoto/', gmaps: gm('マキシモ 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Tex-Mex · Kiyamachi north of Sanjo, tacos and tequila] A small, colourful taco bar with a counter and an upstairs room, serving generous Tex-Mex tacos on corn tortillas — beef tongue, carnitas, shrimp and avocado — loaded nachos, house guacamole and tequila. Opens mid-afternoon at weekends; book at busy times. AMEX only; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Reviewers describe a small, efficient kitchen behind the counter (March 2026) and a room decorated with baseball memorabilia (April 2025). No operator was found.',
      philosophy: null, specialty: 'Tex-Mex tacos; nachos.',
      anecdotes: [
        { text: 'A March 2026 visitor found the counter full on a Saturday at 5 pm, squeezed onto the one table, and saw later guests sent upstairs.', source: R + 'B524236766/' },
        { text: 'An April 2026 regular calls the nachos among the best in Japan.', source: R + 'B528624002/' },
      ],
      japanese_sources_summary: '食べログ: マキシモ、メキシコ料理・ダイニングバー、中京区恵比須町446、京都市役所前から徒歩4分、月・土・日 15:00〜23:00、火〜金 17:00〜23:00、カードはAMEXのみ、QR不可、喫煙可。口コミ (2025〜2026年、英語): テックスメックスのタコス、牛タンのタコス、海老とアボカドのタコス、ナチョス、自家製ワカモレとチップス、豚のカルニタスのタコス、とうもろこしのトルティーヤ、パクチーは別注文、テキーラとカクテル、カウンター6〜8席とテーブル1卓、2階もあり、野球グッズの飾り。',
      confidence: 'medium', sources: [TB, R + 'B506553394/', R + 'B509443370/', R + 'B524236766/', R + 'B524847236/', R + 'B528624002/', R + 'B530989823/', R + 'B534687913/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small bar; AMEX only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区恵比須町446',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.00932, 135.769979); cross-checked: GSI 京都府京都市中京区恵比須町446番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506553394/', R + 'B530989823/', R + 'B524236766/'],
    price_note: 'No menu prices on Tabelog; items from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef-tongue tacos', '', 'Tacos', 'ask', 'no', 'May 2025; April 2026.', 'lengua'),
      it('', '', 'Pork carnitas tacos', '', 'Tacos', 'ask', 'no', 'April 2026.', 'carnitas'),
      it('', '', 'Nachos with meat and cheese', '', 'Snacks', 'ask', 'no', '2025–2026.', 'nachos'),
      it('', '', 'Homemade guacamole and chips', '', 'Snacks', 'ask', 'ask', 'April 2026.', 'guacamole'),
    ] }, {
    cuisine: '小さくカラフルなバーでテックスメックスのタコス、ナチョス、テキーラ (2025〜2026年)・牛タンと海老アボカドのタコス、肉とチーズたっぷりのSサイズのナチョス、ライムサワー (2025年5月)・とうもろこしのトルティーヤのタコス3種とワカモレ、パクチーは別に頼める、テキーラ (2026年3月)・自家製ワカモレとチップス、注文ごとに作る豚のカルニタスのタコス (2026年4月)・常連が日本一級と言うナチョス (2026年4月)・テキーラのカクテル (2025年4月)',
    neighborhood: '三条の北の木屋町。地下鉄京都市役所前から徒歩4分',
    gf_detail: '要確認。とうもろこしのトルティーヤのタコス、ナチョス、ワカモレとチップス。トルティーヤやフライヤーが小麦と共用かは書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ワカモレとチップスは自家製だが、ヴィーガンの品は書かれておらず、タコスは牛タン、豚のカルニタス、海老が中心 (2025〜2026年の口コミ)。',
    notes: '[テックスメックス・三条の北の木屋町、タコスとテキーラ] カウンターと2階のある小さくカラフルなタコスのバー。とうもろこしのトルティーヤのたっぷりのタコス (牛タン、カルニタス、海老とアボカド)、山盛りのナチョス、自家製ワカモレ、テキーラ。週末は午後から。混む時は予約を。カードはAMEXのみ、喫煙可。',
  });
}

// ================================================================ 祇園焼肉 慶尚
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041610/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_gion_yakiniku_keisho', name: '祇園焼肉 慶尚 (Gion Yakiniku Keisho)', category: 'OMNI',
    lat: 35.004266, lng: 135.776089, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakiniku with house-made sauces and salt, braised Wagyu tendon, namul and kimchi; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant — beef, offal and pork (Tabelog menu).',
    hours_raw: 'Monday–Saturday 18:00–03:00; closed Sunday and holidays (Tabelog). Booking recommended — seating is limited (January 2025); late-night guests arrive after 11 pm (March 2026). Cards; no e-money or QR (Tabelog). 24 table seats (Tabelog). Heated tobacco only (Tabelog). In a Gion back lane, 岡崎ビル 1F, 5 min from the Gion bus stop (Tabelog). Opened 1 August 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo, back lane — 5 min from Gion bus stop',
    cuisine: 'Korean-style yakiniku with house-made sauces, at fair prices (Tabelog) · premium salted beef tongue ¥1,815, salted tongue with green onion ¥1,980, upper outside skirt ¥1,870, premium kalbi ¥1,870, premium loin ¥1,980, assorted horumon ¥1,815 (Tabelog) · heart ¥935, grilled liver, pork and beef intestines ¥990, tripe (Tabelog) · Plum course ¥6,500: braised Wagyu tendon, salad, salted pork kalbi, namul, kimchi, premium loin and kalbi, rice (May 2025) · several kimchi to start; yukhoe and liver (May 2026) · omasum (January 2025) · steamed pork (Tabelog)',
    website: null, gmaps: gm('祇園焼肉 慶尚'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Gion back lane, open till 3 am] A 24-seat Korean-style yakiniku in a Gion back lane, open till 3 am: premium salted tongue, skirt and kalbi with house sauces, a wide offal list, several kimchi to start, and a ¥6,500 course. Book ahead; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text stresses fresh meat and careful cuts at reasonable prices with house-made sauces. Reviewers praise attentive staff (January 2025) and a friendly young server (May 2026). No operator was found.',
      philosophy: null, specialty: 'Premium salted beef tongue; kimchi.',
      anecdotes: [
        { text: 'A May 2026 diner whose planned yakiniku spot was closed came on a whim, and rated the starters, yukhoe and liver above the tongue and skirt.', source: R + 'B529709950/' },
        { text: 'A March 2026 diner booked online after work, found it empty at 10 pm and filling up after 11.', source: R + 'B534875016/' },
      ],
      japanese_sources_summary: '食べログ: 祇園焼肉 慶尚、焼肉・ホルモン・居酒屋、東山区祇園町北側279-6 岡崎ビル 1F、市バス祇園から徒歩5分、月〜土 18:00〜翌3:00、日・祝定休、カード可、テーブル24席、加熱式たばこのみ、2024年8月1日オープン、自家製のたれの韓国焼肉、上塩タン1,815円、ネギ塩タン1,980円、上ハラミ1,870円、上カルビ1,870円、上ロース1,980円、ホルモン盛り合わせ1,815円、ハツ935円、レバー焼き990円、蒸し豚。口コミ (2025〜2026年、英語): 梅コース6,500円 (和牛すじ煮込み、サラダ、豚塩カルビ、ナムル、キムチ、上ロース、上カルビ、ご飯)、数種類のキムチ、ユッケ、ミノ、深夜の客。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B499478571/', R + 'B506962486/', R + 'B522144256/', R + 'B529709950/', R + 'B534875016/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small table-only room; open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側279-6 岡崎ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.004316, 135.776089), offset about 5.5 m south to (35.004266, 135.776089) because a hidden, unverified record, Rin Halal Japanese & Vegetarian (ChIJ1ZkRawAJAWARUlQkpI7Sh94), sits within 3 m; cross-checked: GSI 京都府京都市東山区祇園町北側279番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included; course from a May 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Premium salted beef tongue', '¥1,815', 'Beef', 'ask', 'no', 'Tabelog.', 'tan'),
      it('', '', 'Upper outside skirt', '¥1,870', 'Beef', 'ask', 'no', 'Tabelog.', 'harami'),
      it('', '', 'Premium kalbi', '¥1,870', 'Beef', 'ask', 'no', 'Tabelog.', 'kalbi'),
      it('', '', 'Assorted horumon', '¥1,815', 'Offal', 'ask', 'no', 'Tabelog.', 'horumon'),
      it('', '', 'Plum course', '¥6,500', 'Courses', 'ask', 'no', 'May 2025.', 'ume'),
    ] }, {
    cuisine: '自家製のたれの韓国風焼肉を手頃に (食べログ)・上塩タン1,815円、ネギ塩タン1,980円、上ハラミ1,870円、上カルビ1,870円、上ロース1,980円、ホルモン盛り合わせ1,815円 (食べログ)・ハツ935円、レバー焼き、豚と牛のホルモン990円、ミノ (食べログ)・梅コース6,500円: 和牛すじ煮込み、サラダ、豚塩カルビ、ナムル、キムチ、上ロースと上カルビ、ご飯 (2025年5月)・最初に数種類のキムチ、ユッケとレバー (2026年5月)・ミノ (2025年1月)・蒸し豚 (食べログ)',
    neighborhood: '四条の北の祇園、路地裏。市バス祇園から徒歩5分',
    gf_detail: '要確認。自家製のたれや塩の焼肉、和牛すじ煮込み、ナムル、キムチ。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牛、ホルモン、豚の焼肉の店 (食べログのメニュー)。',
    notes: '[焼肉・祇園の路地裏、深夜3時まで] 祇園の路地裏にある24席の韓国風焼肉。深夜3時まで。自家製のたれで上塩タン、ハラミ、カルビ、豊富なホルモン、最初に数種類のキムチ、6,500円のコースも。予約がおすすめ、日曜定休。',
  });
}

save();
