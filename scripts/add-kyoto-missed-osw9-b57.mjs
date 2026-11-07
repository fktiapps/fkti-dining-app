// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 57.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + ヤキニク 七七四 Yakiniku Nanashi (yakiniku by a Kyoto wagyu wholesaler, off Kiyamachi)
//   + ハラールマラータン Halal Malatang (build-your-own malatang off Kiyamachi; opened February 2026) — halal flag left
//     false: the halal claim is the shop's name; no certification found — FLAGGED
//   + 渡半 Watahan (Nishiki Market fish shop of 1897: oysters, fugu, hamo; sashimi to eat on the spot)
//   + 京都 かに銀 河原町店 Kyoto Kanigin (all-you-can-eat crab; Kanigin also in Nagoya and Namba)
//   Same-name counts first: 七七四 0 (a "京都ホルもん酒場774" exists; no link confirmed); マラータン 0; 渡半 0; かに銀 0
//   — Nagoya 名駅店 and a Namba shop found: 3 shops, none in data, drafted one.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: ハラールマラータン 「なし」; かに銀 「なし」;
//   七七四 and 渡半 have no section.
//   Pins (checked against main 51b786a0): 七七四 — Tabelog point 0.7 m from kyoto_thai_kitchen_baramee (same 199-6
//   building), moved 6 m south-south-west (6.6 m); かに銀 — Tabelog point on kyoto_daruma_kawaramachi (same DECK by
//   COAST building), moved 7 m north (7.0 m).
//   Ruling applied: single-review remarks about other diners left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-57');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ヤキニク 七七四
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041937/'; const R = TB + 'dtlrvwlst/';
  const JFG = 'https://japan-food.guide/en/restaurants/2002';
  const D = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yakiniku_nanashi', name: 'ヤキニク 七七四 (Yakiniku Nanashi)', category: 'OMNI',
    lat: 35.005976, lng: 135.770649, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sauce-marinated cuts, beef-tendon stew and wagyu sushi (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2025–26 reviews); Tabelog lists vegetarian options, not described.',
    hours_raw: 'Mon, Tue and Thu–Sun 17:00–23:00 (last order 22:00); closed Wednesday (Tabelog). Japan Food Guide gives 17:00–24:00 with 120-minute seatings for courses. Bookings taken; call for private hire (Tabelog). Cards and iD/QUICPay; no QR (Tabelog). 48 seats: a counter and standing bar downstairs, tables and sunken tatami upstairs; heated-tobacco area downstairs, upstairs non-smoking; terrace; free Wi-Fi (Tabelog; August 2025 review). Solo diners welcome at the counter (August 2025 review). Off Pontocho/Kiyamachi north of Shijo, 4 min from Hankyu Kawaramachi Stn exit 1A (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi–Pontocho, north of Shijo — 4 min from Kawaramachi Stn',
    cuisine: 'Good-value wagyu yakiniku from a Kyoto wagyu wholesaler (Japan Food Guide): courses — 774 recommended ¥5,000, The Best ¥8,000 with chateaubriand and sirloin, 774 Kobe beef ¥10,000 (Japan Food Guide); a set of kimchi, Nanashi salad, heart with ponzu, outside-skirt yukhoe, premium salted tongue, kalbi, wagyu sushi, aged jumbo frankfurter and horumon (August 2025); ribeye, beef-tendon stew, horumon platter; all-you-can-drink course ¥5,000 (August 2025)',
    website: null, gmaps: gm('ヤキニク 七七四 先斗町'), menu_url: TB + 'dtlmenu/',
    notes: "[Wagyu yakiniku · Kiyamachi] A lively two-floor yakiniku off Kiyamachi from a Kyoto wagyu wholesaler: good-value courses from ¥5,000 with salted tongue, yukhoe, horumon and wagyu sushi, up to a Kobe-beef course, and a counter for solo diners. About ¥4,000–6,000. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Run by a well-known Kyoto wagyu wholesale company, per Japan Food Guide. Reviewers also call it "Tachiyaki Niku Nanashi" (August–October 2025).',
      philosophy: 'High-value yakiniku from a wagyu wholesaler (Japan Food Guide).',
      specialty: 'Yukhoe; horumon platter.',
      anecdotes: [
        { text: 'A July 2025 regular who comes at least monthly always orders the horumon platter and wishes for a whole plate of yukhoe.', source: R + 'B510742863/' },
        { text: 'An August 2025 first-timer having yakiniku alone at the counter found the staff friendly and chatty.', source: R + 'B512632229/' },
        { text: 'An April 2026 diner was disappointed that the tongue came frozen and found the prices a little high.', source: R + 'B526290568/' },
      ],
      japanese_sources_summary: '食べログ: ヤキニク 七七四、焼肉・ホルモン、中京区先斗町通四条上ル2丁目下樵木町199-6 1・2F、阪急京都河原町駅1A出口から徒歩約4分、月・火・木〜日 17:00〜23:00 (L.O. 22:00)、水曜休み、予約可、カード・電子マネー可、QR 不可、48席、加熱式たばこの喫煙所 (2階は禁煙)、テラス、立ち飲み、Wi-Fi、飲み放題、ベジタリアンメニュー。Japan Food Guide (英語): 京都の有名な和牛卸の会社による焼肉、774おすすめコース5,000円、ベストコース8,000円、774神戸牛コース10,000円、17:00〜24:00。口コミ (2025年7月〜2026年4月、英語): Tachiyaki Niku Nanashi の名でも、キムチ、ナナシサラダ、ハツポン、ハラミのユッケ、上塩タン、カルビ、和牛寿司、熟成ジャンボフランク、ホルモン、リブロース、牛すじ煮込み、飲み放題コース5,000円、一人でもカウンター、冷凍のタンだったという声。',
      confidence: 'medium', sources: [TB, JFG, R + 'B510742863/', R + 'B511454777/', R + 'B512570970/', R + 'B512632229/', R + 'B515625515/', R + 'B515826902/', R + 'B515988002/', R + 'B516848927/', R + 'B523152645/', R + 'B526290568/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course menus; counter for solo diners.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区先斗町通四条上ル2丁目下樵木町199-6 1・2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.006026, 135.770674) is 0.7 m from kyoto_thai_kitchen_baramee (same building, 199-6), so moved 6 m south-south-west to 35.005976, 135.770649 (6.6 m from it); cross-checked: GSI 京都府京都市中京区下樵木町199番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [JFG],
    price_note: 'Course prices from Japan Food Guide (undated).', last_checked: TODAY, items: [
      it('', '', '774 recommended course', '¥5,000', 'Courses', 'no', 'no', 'Japan Food Guide.', 'course_774'),
      it('', '', '774 Kobe beef course', '¥10,000', 'Courses', 'no', 'no', 'Japan Food Guide.', 'course_kobe'),
    ] }, {
    cuisine: '京都の和牛卸の会社によるお得な和牛の焼肉 (Japan Food Guide): 774おすすめコース5,000円、シャトーブリアンとサーロインのベストコース8,000円、774神戸牛コース10,000円 (Japan Food Guide)。キムチ、ナナシサラダ、ハツポン、ハラミのユッケ、上塩タン、カルビ、和牛寿司、熟成ジャンボフランク、ホルモンのセット (2025年8月)。リブロース、牛すじ煮込み、ホルモン盛り、飲み放題コース5,000円 (2025年8月)',
    neighborhood: '木屋町・先斗町、四条の北。河原町駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。たれの肉、牛すじ煮込み、和牛寿司 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店 (2025〜26年の口コミ)。食べログにベジタリアンメニューとあるが、説明はない。',
    notes: '[和牛焼肉・木屋町] 京都の和牛卸の会社による、木屋町の路地のにぎやかな2階建ての焼肉店。上塩タン、ユッケ、ホルモン、和牛寿司のお得なコースが5,000円から、神戸牛のコースも。一人でもカウンターで。4千〜6千円ほど。水曜休み。',
  });
}

// ================================================================ ハラールマラータン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044655/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '23:00']); const E = day(['11:00', '27:00']);
  put({
    id: 'kyoto_halal_malatang_kiyamachi', name: 'ハラールマラータン (Halal Malatang)', category: 'OMNI',
    lat: 35.006008, lng: 135.770812, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. You choose the ingredients and noodles — sweet-potato noodles and vermicelli are offered — but broths and sauces are not described (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Build your own bowl from vegetables and tofu, but the broths (beef bone, mala, tomato) are not described as vegan (2026 reviews).',
    hours_raw: 'Sun–Thu 11:00–23:00; Fri and Sat 11:00–3:00 (Tabelog). Bookings taken (Tabelog). Service charge: Tabelog\'s Japanese original says 「なし」 (none). Cards, e-money and QR (Tabelog). 26 seats; non-smoking (Tabelog). Choose ingredients into a bowl and pay by weight — about ¥400 per 100 g (March 2026) — then pick one of about four broths; 80 g of noodles free when the bill passes ¥1,000 (March–August 2026 reviews). Sauces and toppings — sesame sauce, chilli oil, Sichuan pepper oil, nuts — are self-service (March 2026 review). At the end of a narrow side alley off Kiyamachi, 3 min from Hankyu Kawaramachi Stn (Tabelog; August 2026 review). The name advertises halal; no certification was found.',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: E, 5: E, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: true, open_late: true },
    neighborhood: 'Kiyamachi alley, north of Shijo — 3 min from Kawaramachi Stn',
    cuisine: 'Build-your-own malatang (2026 reviews): pick vegetables, tofu, meat balls and more by weight, choose a broth — classic mala, beef bone, tomato — and noodles including sweet-potato noodles and vermicelli; salted-egg dumplings and fried bread as sides',
    website: null, gmaps: gm('ハラールマラータン 木屋町'), menu_url: null,
    notes: "[Malatang · Kiyamachi alley] A build-your-own malatang shop opened in 2026 at the end of a Kiyamachi alley: fill a bowl by weight (about ¥400 per 100 g), pick a mala, beef-bone or tomato broth, and get free noodles over ¥1,000. Open late on weekends. The name advertises halal.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 14 February 2026 (March 2026 review). Two 2026 reviewers note a largely international clientele and staff.',
      philosophy: null, specialty: 'Malatang.',
      anecdotes: [
        { text: 'A March 2026 diner added shrimp to the bowl and enjoyed the self-service sesame sauce, chilli oil and Sichuan pepper oil.', source: R + 'B525583065/' },
        { text: 'A June 2026 diner called it the most authentic malatang tried, praising the salted-egg dumplings and fried bread.', source: R + 'B529729287/' },
        { text: 'An August 2026 diner found some ingredients unlabelled and noted a steady stream of delivery orders.', source: R + 'B533753034/' },
      ],
      japanese_sources_summary: '食べログ: ハラールマラータン、中華料理・中華鍋、中京区下樵木町199-6、阪急河原町駅から徒歩3分、日〜木 11:00〜23:00、金土 11:00〜翌3:00、予約可、サービス料なし、カード・電子マネー・QR 可、26席、禁煙。口コミ (2026年3〜8月、英語): 2026年2月14日オープン、具材を選んで量り売り (100gで約400円)、スープは4種ほど (麻辣、牛骨、トマトなど)、会計1,000円以上で麺80g無料、さつまいも麺や春雨、ごまだれ・ラー油・花椒油・ナッツはセルフ、塩卵の餃子、揚げパン、木屋町の細い路地の奥、店名はハラールを掲げる (認証は確認できず)。',
      confidence: 'low', sources: [TB, R + 'B524030037/', R + 'B524073186/', R + 'B525583065/', R + 'B528899002/', R + 'B529729287/', R + 'B533753034/', R + 'B534287675/'] },
    cultural_comfort: { level: 'none_needed', note: 'Self-service bowl; English and Chinese spoken.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下樵木町199-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006008, 135.770812); cross-checked: GSI 京都府京都市中京区下樵木町199番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524030037/', R + 'B528899002/'],
    price_note: 'Prices from March–May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Malatang ingredients by weight', 'about ¥400 per 100 g', 'Malatang', 'ask', 'ask', 'March 2026 review.', 'malatang'),
      it('', '', 'Noodles, 80 g (free over ¥1,000)', '', 'Malatang', 'ask', 'ask', 'May and August 2026 reviews.', 'noodles'),
    ] }, {
    cuisine: '具材を選ぶマーラータン (2026年の口コミ): 野菜、豆腐、肉団子などを量り売りで選び、麻辣、牛骨、トマトなどのスープと、さつまいも麺や春雨などの麺を選ぶ。サイドに塩卵の餃子と揚げパン',
    neighborhood: '木屋町の路地、四条の北。河原町駅から徒歩3分',
    gf_detail: '要確認。具材と麺を選べ、さつまいも麺や春雨もあるが、スープとたれの説明はない (2026年の口コミ)。',
    vegan_detail: '要確認。野菜や豆腐で組めるが、スープ (牛骨、麻辣、トマト) がヴィーガンかは不明 (2026年の口コミ)。',
    notes: '[マーラータン・木屋町の路地] 2026年に木屋町の路地の奥に開いた、具材を選ぶマーラータンの店。量り売り (100g約400円) の具に、麻辣・牛骨・トマトのスープを選び、1,000円以上で麺が無料。週末は深夜まで。店名にハラールを掲げる。',
  });
}

// ================================================================ 渡半
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26017769/'; const R = TB + 'dtlrvwlst/';
  const D = day(['09:00', '17:30']);
  put({
    id: 'kyoto_watahan_nishiki', name: '渡半 (Watahan)', category: 'OMNI',
    lat: 35.005003, lng: 135.765699, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Raw oysters and sashimi are naturally wheat-free, but fried fugu and soy for dipping are served (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish shop (2025–26 reviews).',
    hours_raw: 'Mon and Wed–Sun 9:00–17:30; closed Tuesday; hours may change (Tabelog). A shop card quoted in a December 2025 review gives 11:00–18:00, closed Tuesday. Takeaway; a few seats (5 per Tabelog) to eat sashimi and oysters on the spot with a drink (Tabelog; 2024–26 reviews). No bookings (Tabelog). Cards, e-money and QR (Tabelog). Non-smoking (Tabelog). In Nishiki Market at Fuyacho, about 4 min from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market at Fuyacho — 4 min from Kawaramachi Stn',
    cuisine: 'A Nishiki fish shop specialising in fugu, hamo and oysters (December 2025 review): raw oysters to compare from Hokkaido, Miyagi and Mie, sashimi packs of wild sea bream, kampachi, akagai and hamo, sea urchin, fried fugu, fugu fins for hire-zake to take home; canned beer and hot sake to drink on the spot (2023–26 reviews)',
    website: null, gmaps: gm('渡半 錦市場'), menu_url: null,
    notes: "[Fish shop · Nishiki Market] A fishmonger in Nishiki Market since 1897, now in its fourth generation, specialising in fugu, hamo and oysters: pick big raw oysters, sea urchin or a sashimi pack at the front and eat them on the spot with beer or hot sake. About ¥1,000–3,000. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Fourth-generation owner (unnamed)'], origin: null,
      background: 'Founded in 1897 as a fresh-fish retailer by Watanabe Hanshichi; now run by the fourth generation and focused on preparing and selling fugu, hamo and oysters (December 2025 review).',
      philosophy: null, specialty: 'Raw oysters; fugu.',
      anecdotes: [
        { text: 'A December 2025 visitor compared plump raw oysters from Hokkaido and Miyagi.', source: R + 'B520010516/' },
        { text: 'Invited in by the staff at the corner in February 2026, a visitor had hot sake, oysters from Hokkaido and Mie, and akagai sashimi.', source: R + 'B522399955/' },
        { text: 'A May 2025 visitor liked choosing sashimi and a drink at the entrance and eating outside, though prices felt touristy.', source: R + 'B509636844/' },
      ],
      japanese_sources_summary: '食べログ: 渡半、その他、中京区錦小路麩屋町東入桝屋町503、京都河原町駅から299m、月・水〜日 9:00〜17:30、火曜休み、予約不可、カード・電子マネー・QR 可、5席、禁煙、テイクアウト、鮮魚・惣菜。口コミ (2023年8月〜2026年2月、英語): 1897年創業、初代 Watanabe Hanshichi から4代目、鮮魚店からふぐ・鱧・牡蠣の調理・加工・販売に、天然の鯛・カンパチ・赤貝の刺身パック、殻付き牡蠣、ふぐの唐揚げ、ひれ酒用のふぐのひれ、北海道・宮城・三重の生牡蠣、ウニ、缶ビールと熱燗、店先で食べる、名刺には 11:00〜18:00・火曜休み。',
      confidence: 'medium', sources: [TB, R + 'B520010516/', R + 'B522399955/', R + 'B509636844/', R + 'B509636809/', R + 'B515231463/', R + 'B512193329/', R + 'B471071062/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Market stall; point at the fish.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路麩屋町東入桝屋町503',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.005003, 135.765699); cross-checked: GSI 京都府京都市中京区桝屋町503番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520010516/'],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Raw oysters', '', 'Shellfish', 'ask', 'no', 'December 2025 and February 2026 reviews.', 'nama_kaki'),
      it('', '', 'Sashimi pack', '', 'Sashimi', 'ask', 'no', 'December 2025 review.', 'sashimi_pack'),
    ] }, {
    cuisine: 'ふぐ、鱧、牡蠣を専門にする錦の鮮魚店 (2025年12月の口コミ): 北海道・宮城・三重の生牡蠣の食べ比べ、天然の鯛・カンパチ・赤貝・鱧の刺身パック、ウニ、ふぐの唐揚げ、持ち帰りのひれ酒用のふぐのひれ。その場で缶ビールや熱燗も (2023〜26年の口コミ)',
    neighborhood: '錦市場の麩屋町。河原町駅から徒歩4分',
    gf_detail: '要確認。生牡蠣や刺身は小麦を使わないが、ふぐの唐揚げや付けの醤油もある (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮮魚店 (2025〜26年の口コミ)。',
    notes: '[鮮魚・錦市場] 1897年から錦市場にある4代目の魚屋で、ふぐ、鱧、牡蠣が専門。店先で大きな生牡蠣やウニ、刺身パックを選び、ビールや熱燗とその場で。千〜3千円ほど。火曜休み。',
  });
}

// ================================================================ 京都 かに銀 河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040365/'; const R = TB + 'dtlrvwlst/';
  const W = day(['16:00', '23:00']); const E = day(['12:00', '23:00']);
  put({
    id: 'kyoto_kanigin_kawaramachi', name: '京都 かに銀 河原町店 (Kyoto Kanigin)', category: 'OMNI',
    lat: 35.006606, lng: 135.769482, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Boiled and grilled crab, but the 63-item buffet includes sushi with soy, kara-age and other fried dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an all-you-can-eat crab and seafood restaurant (2026 reviews).',
    hours_raw: 'Mon–Fri and the day before holidays 16:00–23:00; Sat, Sun and holidays 12:00–23:00 (lunch at weekends and holidays only); last orders food 22:00, drinks 22:30; open year-round (Tabelog). Bookings taken (Tabelog). Service charge: Tabelog\'s Japanese original says 「なし」 (none). Cards and PayPay; no e-money (Tabelog). 134 seats at 37 tables; non-smoking (Tabelog). The buffet runs 100 minutes with last order at 70 (October 2026 review). 5F of Kawaramachi DECK by COAST, 6 min from Hankyu Kawaramachi Stn exit 3 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, north of Shijo — DECK by COAST 5F',
    cuisine: 'All-you-can-eat crab (2026 reviews): the M-size snow crab course of 63 items ¥9,349 with soft drinks — snow crab and red snow crab, grill-it-yourself crab, sushi such as kohada, shrimp, hamachi and squid, negitoro hand rolls, kara-age with grated daikon, unatama rice bowl; all-you-can-drink alcohol extra (October 2026)',
    website: null, gmaps: gm('京都 かに銀 河原町店'), menu_url: TB + 'dtlmenu/',
    notes: "[Crab buffet · Kawaramachi] A big all-you-can-eat crab restaurant on the 5th floor of DECK by COAST: snow crab and red snow crab, grill-your-own crab, sushi and hot dishes, 63 items in 100 minutes for about ¥9,349. Weekend lunch too. Sister shops in Nagoya and Namba.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Part of the Kanigin crab-buffet shops, with others at Nagoya Station and in Namba (Gurunavi; HotPepper).',
      philosophy: null, specialty: 'Snow crab buffet.',
      anecdotes: [
        { text: 'An October 2026 diner found the 100-minute limit flew by peeling crab.', source: R + 'B536922745/' },
        { text: 'An October 2026 diner focused on the genuine snow crab, packed with meat, over the red snow crab.', source: R + 'B538164428/' },
        { text: 'A diner bringing an American friend in October 2026 for crab in Japan found many European and American guests there.', source: R + 'B537812305/' },
      ],
      japanese_sources_summary: '食べログ: 京都 かに銀 河原町店、かに・しゃぶしゃぶ・寿司、中京区奈良屋町291 河原町DECK by COAST 5F、阪急京都河原町駅3番出口から約6分、月〜金・祝前日 16:00〜23:00、土日祝 12:00〜23:00 (昼は土日祝のみ)、料理 L.O. 22:00、ドリンク L.O. 22:30、無休、予約可、サービス料なし、カード・PayPay 可、電子マネー不可、134席 (37卓)、禁煙。ぐるなび・ホットペッパー: 名古屋 かに銀 名駅店、難波の店。口コミ (2026年10月、英語): M サイズのずわい蟹食べ放題コース全63品9,349円 (ソフトドリンク付き)、ずわい蟹と紅ずわい蟹、無料の焼き網、こはだ・海老・はまち・げそなどの寿司、ねぎとろの手巻き、唐揚げのおろしポン酢、うなたま丼、アルコール飲み放題は別料金、100分制 (L.O. 70分)。',
      confidence: 'medium', sources: [TB, 'https://r.gnavi.co.jp/3jheej0z0000', R + 'B536922745/', R + 'B536964522/', R + 'B537348398/', R + 'B537419032/', R + 'B537464381/', R + 'B537812305/', R + 'B537820854/', R + 'B538037255/', R + 'B538164428/', R + 'B538501354/'] },
    cultural_comfort: { level: 'none_needed', note: 'Buffet ordering; many overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区奈良屋町291 河原町DECK by COAST 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006543, 135.769482) coincides with kyoto_daruma_kawaramachi (same DECK by COAST building, 8F), so moved 7 m north to 35.006606 (7.0 m from it); cross-checked: GSI 京都府京都市中京区奈良屋町291番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536964522/', R + 'B537419032/'],
    price_note: 'Course price from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'M-size snow crab all-you-can-eat course (63 items, soft drinks)', '¥9,349', 'Courses', 'ask', 'no', 'October 2026 reviews.', 'kani_tabehodai'),
      it('', '', 'Sushi (in the buffet)', '', 'Courses', 'ask', 'no', 'October 2026 reviews.', 'sushi'),
    ] }, {
    cuisine: '蟹の食べ放題 (2026年の口コミ): ソフトドリンク付きの M サイズのずわい蟹のコース全63品9,349円。ずわい蟹と紅ずわい蟹、自分で焼く蟹、こはだ・海老・はまち・げそなどの寿司、ねぎとろの手巻き、唐揚げのおろしポン酢、うなたま丼。アルコールの飲み放題は別料金 (2026年10月)',
    neighborhood: '河原町、四条の北。DECK by COAST 5F',
    gf_detail: '要確認。茹でたり焼いたりの蟹だが、63品のビュッフェに醤油の寿司、唐揚げなどの揚げ物がある (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。蟹と海鮮の食べ放題の店 (2026年の口コミ)。',
    notes: '[蟹の食べ放題・河原町] DECK by COAST 5F の大きな蟹の食べ放題の店。ずわい蟹と紅ずわい蟹、自分で焼く蟹、寿司や料理の63品を100分で約9,349円。土日祝は昼も。名古屋と難波にも店がある。',
  });
}

save();
