// Kyoto priority (kyoto-missed), worker osw13, batch 108 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: スペイン料理 La Masa, おもい川, トモヱ食堂, 和酒季彩ゆう餐.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-108');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26027808', 'chain: 京あめ とにまる ぶんぱく店 — tonimaru.com lists five とにまる shops (shop pages bunpaku, chawanzaka, chazuna, kyotocube, ujibashidori) plus a hotel; a 2023 reviewer calls it "located in various parts of Kyoto"');
skip('26001498', 'big-chain hotel venue (Greg 11-08 ruling): オリゾンテ (orizzonte) is on the 17th floor of ホテルオークラ京都 (Tabelog address; hotel.kyoto/okura)');
skip('26002740', 'chain: 銀座ライオン 京都四条烏丸店 — 銀座ライオン already ruled a chain (Sapporo Lion beer halls; skip 26000607)');

// ================================================================ スペイン料理 La Masa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001990/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '21:00']);
  put({
    id: 'kyoto_la_masa_spanish', name: 'スペイン料理 La Masa', category: 'OMNI',
    lat: 35.011374, lng: 135.766304, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: Tabelog\'s listing marks gluten-free options, and paella is a rice dish, but reviewers name tapas such as eggplant fritters and cakes (2024–2025) and no reviewer describes a gluten-free order.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog\'s listing marks vegan and vegetarian options; the paellas reviewers ate used seafood, rabbit, chicken or sardines (2019–2025).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun and holidays 11:30–21:00 (food L.O. 20:00, drinks 20:30); closed Wednesday. Reservations taken; a reviewer booked the day before on a full weekend night (December 2024). Cards (VISA, Master). 30 seats; a private room for 8; private hire up to 20. Non-smoking. English, Chinese and Korean menus; English-speaking staff; BYO drinks allowed (Tabelog). Children welcome. 2 min from Kyoto Shiyakusho-mae exit 10. Opened 1 July 1998.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Kyoto City Hall, west side — 2 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A long-running Spanish restaurant and bar (since 1998) known for paella, with tapas and Basque dishes (Tabelog; 2018–2025 reviews) · paella of Ishikawa squid with Tango chicken and vegetables; whole grilled sea bream Basque-style (Tabelog) · squid-ink paella; sardine and tomato paella; gazpacho, oysters, tripe stew (November 2023) · half-size paella with Gamagori red shrimp; Spanish omelet; marinated sardines; eggplant fritters (January 2024) · rabbit and chicken paella at lunch (September 2019) · Basque cheesecake, flan, carrot cake (May 2025)',
    website: 'https://www.instagram.com/la_masa_kyoto/', gmaps: gm('スペイン料理 La Masa 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Spanish · near Kyoto City Hall, a paella house since 1998] A friendly, long-running Spanish bar near City Hall with paellas in half sizes — squid ink, sardine and tomato, red shrimp — plus tapas and a house wine; lunch from midday. Tabelog lists vegan, vegetarian and gluten-free options — ask. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 1 July 1998 (Tabelog). A May 2025 reviewer writes that the owner lived in Spain; reviewers describe a cheerful owner and staff who explain the dishes, and a November 2023 reviewer heard that the chef of a well-known Tokyo Spanish restaurant came from here. Criticism: limited lunch choices (March 2019); a May 2025 reviewer found the pre-cut cakes and flan stale and too sweet.',
      philosophy: null,
      specialty: 'Paella; tapas.',
      anecdotes: [
        { text: 'September 2019: "The main dish, paella, was made with rabbit and chicken meat… According to the explanation, traditional paella doesn\'t actually use seafood."', source: R + 'B420108135/' },
        { text: 'November 2023: "The squid ink paella had a rich umami flavor, and it paired wonderfully with the crispy bits, making it my personal favorite."', source: R + 'B474229161/' },
      ],
      japanese_sources_summary: '食べログ: スペイン料理 La Masa、スペイン料理・バル・魚介料理、中京区亀屋町380、地下鉄東西線京都市役所前駅10番出口から徒歩2分、月・火・木〜日・祝日11:30〜21:00 (料理L.O.20:00、ドリンクL.O.20:30)、水曜休み、予約可、カード (VISA・Master) 可、30席、8名の個室、貸切20名まで、禁煙、英語・中国語・韓国語メニュー、英語対応スタッフ、持ち込み可、子供可、ヴィーガン・ベジタリアン・グルテンフリーの対応あり、1998年7月1日オープン、IshikawaのイカとTangoの鶏と野菜のパエリア、バスク風の鯛の丸焼き。口コミ (2018年11月〜2025年5月、英語): イカ墨のパエリア、いわしとトマトのパエリア、ガスパチョ、牡蠣、トリッパ (2023年11月)、ハーフサイズのパエリア、Gamagoriの赤えび、トルティージャ、いわしの白ワインマリネ、なすのフリット (2024年1月)、うさぎと鶏のパエリア (2019年9月)、バスクチーズケーキ、フラン、キャロットケーキ (2025年5月)、スペイン在住経験のある店主、明るい接客、甘味は作り置きとの声 (2025年5月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B402197270', 'B407784694', 'B416023541', 'B416740779', 'B418903528', 'B420108135', 'B420112063', 'B474229161', 'B482601803', 'B496967869', 'B502385494', 'B507193764'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English, Chinese and Korean menus; English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区亀屋町380',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated February and May 2025; no review since May 2025.' },
    pin_source: `Tabelog ${TB} (35.011374, 135.766304); GSI lot 京都府京都市中京区亀屋町380番地 about 12m away; nearest pin kyoto_chez_moi 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B474229161/', R + 'B482601803/'],
    price_note: 'No current item prices; reviewers spent about ¥3,000–8,000 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Squid-ink paella', null, 'Paella', 'ask', 'no', 'November 2023.', 'paella_negra'),
      it('', '', 'Sardine and tomato paella', null, 'Paella', 'ask', 'no', 'November 2023.', 'paella_sardine'),
      it('', '', 'Half-size paella (red shrimp)', null, 'Paella', 'ask', 'no', 'January 2024.', 'paella_half'),
      it('', '', 'Spanish omelet', null, 'Tapas', 'ask', 'no', 'January 2024.', 'tortilla'),
    ] }, {
    cuisine: '1998年からのスペイン料理店兼バル。パエリアが名物で、タパスやバスクの料理も (食べログ、2018〜2025年の口コミ)・IshikawaのイカとTangoの鶏と野菜のパエリア、バスク風の鯛の丸焼き (食べログ)・イカ墨のパエリア、いわしとトマトのパエリア、ガスパチョ、牡蠣、トリッパ (2023年11月)・Gamagoriの赤えびのハーフサイズのパエリア、トルティージャ、いわしのマリネ、なすのフリット (2024年1月)・昼のうさぎと鶏のパエリア (2019年9月)・バスクチーズケーキ、フラン、キャロットケーキ (2025年5月)',
    neighborhood: '京都市役所の西。京都市役所前から徒歩2分',
    gf_detail: '要確認: 食べログではグルテンフリーの対応あり、パエリアは米の料理。ただし口コミにはなすのフリットやケーキも出てきて (2024〜2025年)、グルテンフリーで注文した口コミはない。',
    vegan_detail: '要確認: 食べログではヴィーガン・ベジタリアンの対応あり。口コミのパエリアは魚介、うさぎ、鶏、いわし (2019〜2025年)。',
    notes: '[スペイン料理・京都市役所近く、1998年からのパエリアの店] 市役所近くの気さくな老舗スペインバル。イカ墨、いわしとトマト、赤えびなどのパエリアはハーフサイズも、タパスとハウスワインも。昼から営業。食べログではヴィーガン・ベジタリアン・グルテンフリー対応あり、要確認。水曜休み。',
  });
}

// ================================================================ おもい川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001552/'; const R = TB + 'dtlrvwlst/';
  const H = day(['20:00', '29:00']);
  put({
    id: 'kyoto_omoikawa_bar', name: 'おもい川 (Omoi Kawa)', category: 'OMNI',
    lat: 35.004604, lng: 135.758866, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a food stop: a late-night bar whose snacks include kasujiru (sake-lees soup) in winter (2022–2026 reviews). Ask about drinks.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: snack menu not described beyond kasujiru (2022–2026 reviews). Drinks only otherwise — ask.',
    hours_raw: 'Tabelog: daily 20:00–5:00; closed on irregular days; hours may change. No reservations. Cards (JCB, AMEX). Designated smoking area. At the dead end of a narrow alley on the south side of Nishikikoji just west of Karasuma (2015–2026 reviews); 3 min walk from Shijo or Karasuma stations.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikikoji just west of Karasuma — 3 min walk from Shijo',
    cuisine: 'A lively late-night bar and dining bar down an alley off Nishikikoji, open until 5 am, run by a "mama" who mixes the room (Tabelog; 2015–2026 reviews) · highballs and bourbon soda; kasujiru (sake-lees soup) served in a mug in winter (2022; 2025; February 2026) · drinks and food both praised (2023)',
    website: null, gmaps: gm('おもい川 錦小路 烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Late-night bar · Nishikikoji west of Karasuma, an alley bar till 5 am] A busy, friendly bar at the end of a dark little alley off Nishikikoji, where the owner, the "mama", gets strangers talking over highballs until 5 am; kasujiru soup in winter. About ¥3,000–5,000. Smoking area.',
    chef_bio: { chef_name: null, roles: ['Owner ("mama", unnamed)'], origin: null,
      background: 'Reviewers since 2015 describe a packed, lively bar where the owner — called the "mama", "she" in 2021 and 2026 reviews — remembers regulars, adjusts to each customer and connects guests with one another, with quick young staff and many regulars. A September 2023 reviewer notes that some people might not appreciate the style. The owner is sometimes out early in the evening (2022; April 2026).',
      philosophy: null,
      specialty: 'Late-night drinks and conversation; kasujiru in winter.',
      anecdotes: [
        { text: 'October 2021: "I suspect this friendly vibe is due to Mama\'s knack for connecting customers with one another, which is probably why it always feels this way."', source: R + 'B78285676/' },
        { text: 'September 2023: "The quality of the drinks and food, the entertaining service from the owner, and the overall atmosphere are all outstanding. Some people might not appreciate it, but I believe that\'s a minority opinion."', source: R + 'B471456489/' },
      ],
      japanese_sources_summary: '食べログ: おもい川、バー・ダイニングバー、中京区錦小路通烏丸西入占出山町310-8、地下鉄四条駅から徒歩3分、毎日20:00〜翌5:00、不定休、予約不可、カード (JCB・AMEX) 可、分煙。口コミ (2015年9月〜2026年4月、英語): 錦小路を烏丸から西へ入った細い路地の突き当たり、深夜まで常連でにぎわうバー、客同士をつなぐママ (2021年10月)、ハイボール、バーボンソーダ、冬の粕汁、飲み物も料理もおいしい (2023年)、好みが分かれるかもという声 (2023年9月)、ママが不在の時間も (2026年4月)。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B459202367', 'B468145769', 'B471456489', 'B478657246', 'B485504751', 'B520965654', 'B525841346', 'B78285676'])) },
    cultural_comfort: { level: 'japanese', note: 'A regulars-heavy, talkative late-night bar; no reservations; smoking area.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通烏丸西入占出山町310-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated January, February and April 2026.' },
    pin_source: `Tabelog ${TB} (35.004604, 135.758866); GSI lot 京都府京都市中京区占出山町310番地 about 16m away; nearest pin kyoto_honke_jubei 7.5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B78285676/'],
    price_note: 'No item prices; reviewers spent ¥3,000–4,999.', last_checked: TODAY, items: [
      it('', '', 'Highball', null, 'Drink', 'ask', 'ask', '2021–2026.', 'highball'),
      it('', '', 'Kasujiru (sake-lees soup, winter)', null, 'Snack', 'ask', 'no', 'November 2022; February 2026.', 'kasujiru'),
    ] }, {
    cuisine: '錦小路から入る路地の、朝5時まで開くにぎやかなバー兼ダイニングバー。客同士をつなぐ「ママ」の店 (食べログ、2015〜2026年の口コミ)・ハイボールやバーボンソーダ、冬はマグで出る粕汁 (2022年、2025年、2026年2月)・飲み物も料理もおいしいとの声 (2023年)',
    neighborhood: '烏丸のすぐ西の錦小路。四条から徒歩3分',
    gf_detail: '食事としてはグルテンフリーではない: 深夜のバーで、つまみには冬の粕汁など (2022〜2026年の口コミ)。飲み物は要確認。',
    vegan_detail: 'ヴィーガン不可: つまみは粕汁以外の説明がない (2022〜2026年の口コミ)。ほかは飲み物のみ、要確認。',
    notes: '[深夜のバー・烏丸の西の錦小路、朝5時までの路地のバー] 錦小路の暗い小さな路地の突き当たりにある、にぎやかで気さくなバー。「ママ」が知らない客同士を会話に引き込み、ハイボールで朝5時まで。冬は粕汁も。3,000〜5,000円ほど。喫煙スペースあり。',
  });
}

// ================================================================ トモヱ食堂
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040450/'; const R = TB + 'dtlrvwlst/';
  const D = ['17:00', '23:00']; const WD = day(['11:30', '15:00'], D); const WE = day(D);
  put({
    id: 'kyoto_tomoe_shokudo', name: 'トモヱ食堂 (Tomoe Shokudo)', category: 'OMNI',
    lat: 35.008262, lng: 135.760548, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki and Kyoto beta-yaki with udon, tenkasu and sauce; lunch of kara-age, katsu, fried fish and curry (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork, squid, egg and bonito flakes; teppan horumon; fried lunches (2024–2026 reviews).',
    hours_raw: 'Tabelog: lunch Mon, Tue, Thu, Fri 11:30–15:00 (L.O. 14:30); dinner Mon, Tue, Thu–Sun 17:00–23:00 (L.O. 22:30); closed Wednesday; dinner also closed the 2nd and 4th Thursday; no lunch on weekends or holidays. Reservations taken. Cards, IC, e-money and QR. 27 seats: 11 at the counter, 16 at sunken tables. Non-smoking. Children welcome. 2nd floor of 烏丸アネックス on Sanjo-dori, 2 min from Karasuma-Oike exit 5. Opened 23 November 2023.',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-dori near Karasuma-Oike — 2 min walk from Karasuma-Oike',
    cuisine: 'Spice curry and set-meal lunches, and okonomiyaki and teppanyaki at night, including Kyoto-style beta-yaki (Tabelog; 2024–2026 reviews) · beta udon modern (pork, squid, udon) ¥1,150, mixed green onion +¥200; chicken cartilage ¥600; wagyu horumon mix ¥800; aka-bakudan ¥550; Yebisu bottle ¥680 (June 2024) · kara-age lunch ¥1,000 with free large rice (April 2025; April 2026) · pork cutlet set ¥1,000 (August 2024) · lunches of beef-tendon curry, baked curry, fried horse mackerel, ginger pork, simmered hamburg (2024–2026) · yakisoba, tonpei-yaki (January 2025)',
    website: null, gmaps: gm('トモヱ食堂 烏丸御池'), menu_url: TB + 'dtlmenu/',
    notes: '[Okonomiyaki & lunch sets · Sanjo-dori by Karasuma-Oike, an upstairs diner] A friendly second-floor diner: weekday lunch sets of kara-age, fried fish or curry for about ¥1,000 with free large rice, then light Kyoto-style okonomiyaki, beta-yaki and teppan dishes at night. About ¥3,000–5,000 at dinner. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 23 November 2023 (Tabelog). A June 2024 reviewer describes a gentle middle-aged owner with a young man and woman on staff and many overseas guests; a December 2025 reviewer says the owner prepares most of the dishes himself, so food can take time, and lunch reviewers praise cheerful women staff (2024–2025). Lunch was paused in mid-2024 and later resumed. Criticism: a heavy, greasy kara-age (January 2026); cabbage left crunchy in one okonomiyaki (June 2024).',
      philosophy: null,
      specialty: 'Kyoto beta-yaki okonomiyaki; lunch set meals.',
      anecdotes: [
        { text: 'January 2025: "It felt more like a nice teppan-yaki restaurant\'s okonomiyaki rather than the heavy type you might expect!"', source: R + 'B499199659/' },
        { text: 'April 2026: "When my lunch arrived, it included four large pieces of fried chicken, miso soup, pickles, salad, and a small side dish."', source: R + 'B526994527/' },
      ],
      japanese_sources_summary: '食べログ: トモヱ食堂、お好み焼き・カレー、中京区梅忠町20-1 烏丸アネックス2F、地下鉄烏丸御池駅5番出口から徒歩2分、昼は月・火・木・金11:30〜15:00 (L.O.14:30)、夜は月・火・木〜日17:00〜23:00 (L.O.22:30)、水曜休み、夜は第2・第4木曜休み、土日・祝日の昼は休み、予約可、カード・交通系IC・電子マネー・QR可、27席 (カウンター11・掘りごたつ16)、禁煙、子供可、2023年11月23日オープン、昼はスパイスカレーと定食、夜はお好み焼きと鉄板焼き、京風の「べた焼き」。口コミ (2024年4月〜2026年4月、英語): べたうどんモダン1,150円、ねぎまぜ+200円、鶏なんこつ600円、和牛ホルモンミックス800円、「赤ばくだん」550円、瓶ビール680円 (2024年6月)、唐揚げランチ1,000円 (ご飯大盛り無料)、とんかつ定食1,000円、牛すじカレー、焼きカレー、アジフライ、豚の生姜焼き、煮込みハンバーグ、焼きそば、とん平焼き、ほとんどの料理を店主が一人で作る (2025年12月)、唐揚げが重いとの声 (2026年1月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B483405441', 'B490589111', 'B499199659', 'B499514170', 'B504267259', 'B511713348', 'B519215267', 'B520634643', 'B521754273', 'B523055067', 'B523156138', 'B526994527'])) },
    cultural_comfort: { level: 'some_english', note: 'Staff used to overseas guests (June 2024).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区梅忠町20-1 烏丸アネックス 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated January, February and April 2026.' },
    pin_source: `Tabelog ${TB} (35.008262, 135.760548); GSI lot 京都府京都市中京区梅忠町20番地 about 31m away; nearest pin kyoto_maison_de_frouge 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483405441/', R + 'B504267259/'],
    price_note: 'Prices from June 2024 and April 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beta udon modern (pork, squid, udon)', '¥1,150', 'Okonomiyaki', 'no', 'no', 'June 2024.', 'beta_udon_modern'),
      it('', '', 'Wagyu horumon mix (teppan)', '¥800', 'Teppan', 'no', 'no', 'June 2024.', 'horumon_mix'),
      it('', '', 'Kara-age lunch set', '¥1,000', 'Lunch', 'no', 'no', 'April 2025; April 2026.', 'karaage_lunch'),
      it('', '', 'Baked curry lunch', null, 'Lunch', 'no', 'no', 'September 2025.', 'yaki_curry'),
    ] }, {
    cuisine: '昼はスパイスカレーと定食、夜はお好み焼きと鉄板焼き、京風の「べた焼き」も (食べログ、2024〜2026年の口コミ)・べたうどんモダン (豚・イカ・うどん) 1,150円、ねぎまぜ+200円、鶏なんこつ600円、和牛ホルモンミックス800円、赤ばくだん550円、瓶ビール680円 (2024年6月)・ご飯大盛り無料の唐揚げランチ1,000円 (2025年4月、2026年4月)・とんかつ定食1,000円 (2024年8月)・牛すじカレー、焼きカレー、アジフライ、豚の生姜焼き、煮込みハンバーグのランチ (2024〜2026年)・焼きそば、とん平焼き (2025年1月)',
    neighborhood: '烏丸御池近くの三条通。烏丸御池から徒歩2分',
    gf_detail: 'グルテンフリーではない: うどん、天かす、ソースのお好み焼きやべた焼き、昼は唐揚げ、カツ、フライ、カレー (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚、イカ、卵、かつお節のお好み焼き、鉄板のホルモン、揚げ物のランチ (2024〜2026年の口コミ)。',
    notes: '[お好み焼きとランチ定食・烏丸御池近くの三条通、2階の食堂] 気さくな2階の食堂。平日の昼は唐揚げ、フライ、カレーの定食が1,000円ほどでご飯大盛り無料、夜は軽めの京風お好み焼き、べた焼き、鉄板料理。夜は3,000〜5,000円ほど。水曜休み。',
  });
}

// ================================================================ 和酒季彩ゆう餐
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041044/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_washu_kisai_yusan', name: '和酒季彩ゆう餐 (Wasyu Kisai Yusan)', category: 'OMNI',
    lat: 34.997047, lng: 135.762454, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura (pistachio, firefly squid, shiso-wrapped swordfish), ham katsu and soy-based dishes (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, dashimaki with mentaiko and shirasu, duck, chicken and pork (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 17:00–24:00 (food L.O. 23:00, drinks 23:30); closed Wednesday and the 1st and 3rd Tuesday; hours may change. Reservations taken — walk-ins were turned away on a full holiday night (February 2026); same-day booking by Instagram DM worked (July 2026). Starter charge ¥500 — Tabelog, Japanese original 「お突き出し500円」. Cards. Heated tobacco in a smoking area in the hall; a reviewer was allowed to smoke inside (October 2026). L-shaped counter of about eight and two tables for four (April 2026). 2nd floor of building 5 of the 湯浅会館 at Gojo-Takakura, a renovated complex of small restaurants (2025–2026 reviews). Opened 29 March 2024.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo-Takakura, in the Yuasa Kaikan complex — near Gojo Station',
    cuisine: 'A sake-focused izakaya with a high ceiling and courtyard view, serving careful Kyoto-leaning small plates and its own label of sake (Tabelog; 2025–2026 reviews) · pistachio tempura ¥850; small taro and octopus simmered ¥1,000; dashimaki with mentaiko and shirasu ¥1,000 (June 2025) · four-item starter plate; sashimi platter; firefly-squid and mountain-vegetable tempura (April 2025) · Kyoto duck breast; charcoal-grilled Tanba black chicken; Unzen ham katsu; snap peas with steamed chicken in mentaiko mayo (2026) · grilled rice balls with oysters; crab chawanmushi (February 2026) · black "jet-black" shrimp mayo coloured with bamboo charcoal (October 2026) · house sake "Yusan"; Japanese gin',
    website: null, gmaps: gm('和酒季彩ゆう餐 湯浅会館'), menu_url: TB + 'dtlmenu/',
    notes: '[Sake izakaya · Gojo-Takakura, upstairs in the Yuasa Kaikan] A small, stylish sake bar-izakaya in a renovated old building, pouring a long list of sake (including its own label) with creative plates — pistachio tempura, mentaiko dashimaki, crab chawanmushi — at about ¥5,000–8,000. ¥500 starter charge; book ahead at weekends. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'Opened 29 March 2024 (Tabelog). A July 2026 reviewer writes that it is run by the owner and a male part-time staff member; a September 2025 reviewer describes a friendly manager training new staff. Reviewers praise the sake list, served in tin cups (September 2025), and the setting. Criticism: thin duck (April 2025), quality that comes at a price (April 2025), and flavors a bit lacking overall (July 2026).',
      philosophy: null,
      specialty: 'Japanese sake; creative small plates.',
      anecdotes: [
        { text: 'June 2025: "The Pistachio Tempura is a must-try dish. It was the perfect accompaniment that made me want to keep drinking Japanese sake."', source: R + 'B507999034/' },
        { text: 'September 2025: "As this is a sake-focused establishment, there were many unique options available… The use of tin glasses showed the seriousness and high standards this restaurant has for its sake."', source: R + 'B514832894/' },
      ],
      japanese_sources_summary: '食べログ: 和酒季彩ゆう餐、居酒屋、下京区五条高倉上がる亀屋町172 湯浅会館5号館2F、五条駅から306m、月・火・木〜日17:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、水曜と第1・第3火曜休み、予約可、原文で「お突き出し500円」、カード可、加熱式たばこのみ館内に喫煙所、2024年3月29日オープン。口コミ (2025年4月〜2026年10月、英語): 日本酒中心の居酒屋、高い天井と坪庭の眺め、ピスタチオの天ぷら850円、小芋とたこの炊いたん1,000円、明太子としらすのだし巻き1,000円 (2025年6月)、4品のお通し、刺身の盛り合わせ、ほたるいかと山菜の天ぷら、京鴨、Tanba黒鶏の炭火焼、Unzenハムカツ、スナップえんどうと蒸し鶏の明太マヨ、牡蠣の焼きおにぎり、蟹の茶碗蒸し、竹炭の真っ黒なエビマヨ (2026年10月)、オリジナルの日本酒「ゆう餐」、錫の器、店主と男性アルバイトで営む (2026年7月)、鴨が薄い・値段なりとの声 (2025年4月)、味がやや物足りないとの声 (2026年7月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B505184373', 'B505545676', 'B507999034', 'B514832894', 'B523193712', 'B526920012', 'B527005902', 'B532594919', 'B536068388', 'B537350123', 'B538260197', 'B538679458'])) },
    cultural_comfort: { level: 'japanese', note: '¥500 starter charge; book ahead at weekends.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区五条高倉上がる亀屋町172 湯浅会館5号館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated September and October 2026.' },
    pin_source: `Tabelog ${TB} (34.997009, 135.762501) sits 0.1m from kyoto_yamamoto_ryoriten (same 湯浅会館, 亀屋町172), so moved about 6m northwest to (34.997047, 135.762454), at least 6.1m from every pin; GSI matches a different 亀屋町172 about 625m west — marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B507999034/'],
    price_note: 'Prices from a June 2025 review; ¥500 starter charge.', last_checked: TODAY, items: [
      it('', '', 'Pistachio tempura', '¥850', 'Tempura', 'no', 'ask', 'June 2025; 2026.', 'pistachio_tempura'),
      it('', '', 'Small taro and octopus, simmered', '¥1,000', 'Small dish', 'ask', 'no', 'June 2025.', 'koimo_tako'),
      it('', '', 'Dashimaki with mentaiko and shirasu', '¥1,000', 'Small dish', 'ask', 'no', 'June 2025; 2026.', 'mentai_dashimaki'),
      it('', '', 'House sake "Yusan"', null, 'Drink', 'ask', 'ask', 'April 2025; 2026.', 'house_sake'),
    ] }, {
    cuisine: '高い天井と坪庭の眺めの、日本酒中心の居酒屋。京都らしい丁寧な小皿とオリジナルの日本酒 (食べログ、2025〜2026年の口コミ)・ピスタチオの天ぷら850円、小芋とたこの炊いたん1,000円、明太子としらすのだし巻き1,000円 (2025年6月)・4品のお通し、刺身の盛り合わせ、ほたるいかと山菜の天ぷら (2025年4月)・京鴨、Tanba黒鶏の炭火焼、Unzenハムカツ、スナップえんどうと蒸し鶏の明太マヨ (2026年)・牡蠣の焼きおにぎり、蟹の茶碗蒸し (2026年2月)・竹炭で黒くしたエビマヨ (2026年10月)・オリジナルの日本酒「ゆう餐」、ジャパニーズジン',
    neighborhood: '湯浅会館の中、五条高倉。五条駅の近く',
    gf_detail: 'グルテンフリーではない: ピスタチオ、ほたるいか、しそ巻きのかじきの天ぷら、ハムカツ、しょうゆベースの料理 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、明太子としらすのだし巻き、鴨、鶏、豚 (2025〜2026年の口コミ)。',
    notes: '[日本酒の居酒屋・五条高倉、湯浅会館の2階] 改装した古い建物に入る、小さくおしゃれな日本酒の居酒屋。オリジナル銘柄を含む豊富な日本酒に、ピスタチオの天ぷら、明太だし巻き、蟹の茶碗蒸しなど工夫のある小皿で5,000〜8,000円ほど。お通し500円、週末は予約を。水曜休み。',
  });
}

save();
