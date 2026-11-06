// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 39.
//   + 茶亭 カエルノウタ Chatei Kaerunouta (health-minded coffee kissa off Oike near Karasuma)
//   + からこ Karako (old Higashiyama-Nijo ramen counter with free side dishes)
//   + 京味菜 わたつね Kyomisai Watatsune (soba and set-meal house on Yanagibaba north of Sanjo)
//   + 本家 田毎 三条本店 Honke Tagoto (soba house on Sanjo-Teramachi since 1868)
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 200`, lane ids 26032688, 26000342; from `next notable
//   200`: 26006054, 26000480. None is in data/kyoto.json by name (カエルノウタ/Kaerunouta, からこ/Karako, わたつね/
//   Watatsune, 田毎/Tagoto — 京料理 御旅町田ごと is the Kyoto-cuisine company 株式会社田ごと, which renamed its own shop
//   from 田毎 to 田ごと in 1938; no source opened links it to this soba house) or address (橋之町755-1, 岡崎徳成町12-3,
//   油屋町94, 石橋町12).
//   Same-name count (same brand or operator only): カエルノウタ, からこ, わたつね — one shop each; 本家 田毎 — 三条寺町本店
//   and a 府庁前店 (official site; Tabelog name search), plus a shop at Monte Mer in Ashiya per an August 2026 review.
//   Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: わたつね 現金払いのみ (cash only; not a charge). None.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-39');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 茶亭 カエルノウタ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032688/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_chatei_kaerunouta', name: '茶亭 カエルノウタ (Chatei Kaerunouta)', category: 'OMNI',
    lat: 35.011095, lng: 135.756426, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Coffee with pudding (including a cascara pudding), cheesecake, cinnamon-sugar toast and sweet-potato karinto; ingredients are not described (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is plant-based; the sweets (pudding, cheesecake) use eggs and dairy (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday and Friday 11:00–22:30; Wednesday 9:00–19:00; Thursday, Saturday and Sunday 10:00–22:30 (Tabelog; hours may change). One drink per person (July 2025). Reservations accepted (Tabelog). Cards (AMEX); no e-money or QR (Tabelog). 12 seats: counters and one table for four (Tabelog). Non-smoking; English menu; take-out; children and strollers welcome (Tabelog). On the Gion Festival procession route, with standing coffee on festival day (July 2026). Near Okane Shrine, about 10 min from Karasuma Oike Stn (Tabelog; August 2026). Opened 3 July 2019 (Tabelog).',
    hours: { 0: day(['11:00', '22:30']), 1: day(['11:00', '22:30']), 2: day(['09:00', '19:00']), 3: day(['10:00', '22:30']), 4: day(['11:00', '22:30']), 5: day(['10:00', '22:30']), 6: day(['10:00', '22:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'West of Karasuma near Oike and Okane Shrine — 10 min from Karasuma Oike Stn',
    cuisine: 'Coffee specialist with a health bent: blends gentle on the stomach, organic and decaf options (September 2026) · health blend ¥850 (April 2026); flannel-drip iced coffee steeped half a day ¥850 (February 2026) · several blends and many single origins, including rare Okinawan coffee at ¥5,300 a cup and Colombia Emerald Mountain ¥1,650 (February and August 2026) · cascara pudding, rich in polyphenols, ¥500 (2026) · cheesecake, cinnamon-sugar toast (March 2025) · sweet-potato karinto with coffee (July 2025)',
    website: null, gmaps: gm('茶亭 カエルノウタ 京都'), menu_url: null,
    notes: '[Coffee · near Oike and Okane Shrine, health-minded kissa] A small, calm, plant-filled coffee room with a counter and one table, run by an owner particular about every detail: health blends, decaf and organic options, and a long list of single origins up to a ¥5,300 Okinawan cup, with a cascara pudding (¥500) on the side. One drink each; open late most nights.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'An April 2025 reviewer writes that “the owner is very particular about the details”, and an August 2025 visitor received advice on which coffee to choose. A February 2026 reviewer noted little inbound-tourist influence here.',
      philosophy: 'Coffee that is kind to the body (2026 reviews).', specialty: 'Health blend; cascara pudding.',
      anecdotes: [
        { text: 'On Gion Festival day in July 2026 the shop served standing coffee to people watching the procession from the cool room.', source: R + 'B532129389/' },
        { text: 'An August 2025 visitor found the advised coffee fruity enough to compare with a fine whisky.', source: R + 'B512403557/' },
      ],
      japanese_sources_summary: '食べログ: 茶亭 カエルノウタ、喫茶店、中京区橋之町755-1 根崎ビル1F、烏丸御池駅から徒歩10分、月・火・金 11:00〜22:30、水 9:00〜19:00、木・土・日 10:00〜22:30、予約可、カード (AMEX) 可、12席、禁煙、英語メニュー、テイクアウト、子ども可、2019年7月3日オープン。口コミ (2025〜2026年、英語): 体にやさしいコーヒーの専門店、ヘルシーブレンド850円、ネルドリップのアイスコーヒー850円、沖縄のコーヒー5,300円、エメラルドマウンテン1,650円、カスカラのプリン500円、ワンドリンク制、店主はこだわりが強い、祇園祭の日は立ち飲みで提供。',
      confidence: 'medium', sources: [TB, R + 'B503233857/', R + 'B504424375/', R + 'B509519486/', R + 'B512403557/', R + 'B522287356/', R + 'B522589981/', R + 'B526389641/', R + 'B532129389/', R + 'B533539800/', R + 'B536178027/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); one drink each; the owner advises on coffee.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区橋之町755-1 根崎ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.011095, 135.756426); cross-checked: GSI 京都府京都市中京区橋之町755番地 (lot) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526389641/', R + 'B522589981/', R + 'B533539800/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Health blend coffee', '¥850', 'Coffee', 'gf', 'vegan', 'April 2026; black.', 'health_blend'),
      it('', '', 'Flannel-drip iced coffee', '¥850', 'Coffee', 'gf', 'vegan', 'February 2026.', 'iced_coffee'),
      it('', '', 'Colombia Emerald Mountain', '¥1,650', 'Coffee', 'gf', 'vegan', 'August 2026.', 'emerald_mountain'),
      it('', '', 'Cascara pudding', '¥500', 'Sweets', 'ask', 'no', '2026.', 'cascara_pudding'),
    ] }, {
    cuisine: '体を気づかうコーヒーの専門店: 胃にやさしいブレンド、オーガニックやデカフェも (2026年9月)・ヘルシーブレンド850円 (2026年4月)、半日かけたネルドリップのアイスコーヒー850円 (2026年2月)・いくつものブレンドとシングルオリジン。珍しい沖縄のコーヒーは1杯5,300円、コロンビアのエメラルドマウンテン1,650円 (2026年2月、8月)・ポリフェノールの多いカスカラのプリン500円 (2026年)・チーズケーキ、シナモンシュガートースト (2025年3月)・コーヒーに添えるさつまいものかりんとう (2025年7月)',
    neighborhood: '烏丸の西、御池と Okane Shrine の近く。烏丸御池駅から徒歩10分',
    gf_detail: '要確認。コーヒーとプリン (カスカラのプリンも)、チーズケーキ、シナモンシュガートースト、さつまいものかりんとう。材料は書かれていない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーは植物性。甘いもの (プリン、チーズケーキ) は卵と乳製品を使う (2025〜2026年の口コミ)。',
    notes: '[コーヒー・御池と Okane Shrine の近く、体にやさしい喫茶] カウンターとテーブル1卓の、緑の多い落ち着いた小さなコーヒー店。細部にこだわる店主が、体にやさしいブレンド、デカフェやオーガニック、1杯5,300円の沖縄のコーヒーまで多くのシングルオリジンを淹れる。カスカラのプリン (500円) も。ワンドリンク制、ほとんどの日は夜遅くまで。',
  });
}

// ================================================================ からこ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000342/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://karako.ehoh.net/index.html';
  const H = day(['11:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_karako_higashiyama_nijo', name: 'からこ (Karako)', category: 'OMNI',
    lat: 35.013903, lng: 135.778182, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen, kara-age, tendon, curry and curry bread (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken-based ramen broth, chashu and kara-age; the free side dishes include vegetables but are not described (2026 reviews).',
    hours_raw: '11:00–14:00 and 17:00–22:00 daily (Tabelog; hours may change). No reservations (Tabelog). Cash only (Tabelog). 15 counter seats and a tatami room upstairs (Tabelog). Smoking allowed — ashtrays on the counter (Tabelog). Free “kuinige” side dishes at the counter: salad, pickles, cold tofu, garlic chives (2026 reviews). Coin parking next door, with ¥100 back (Tabelog). By the Higashiyama-Nijo bus stop, a short walk to ROHM Theatre Kyoto and Heian Shrine, 10 min from Higashiyama Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Nijo, near ROHM Theatre — 10 min from Higashiyama Stn',
    cuisine: 'A long-established Kyoto ramen counter (June 2026) · rich chicken-collagen ramen, lightly salted (January 2026); rich ramen ¥750 (September 2026); rich Chinese soba with chashu (June 2026) · kara-age set meal ¥990 with rice, two pieces of chicken-breast kara-age and ramen — the “most popular dish” (March and May 2026) · service sets with tendon, horumon rice bowl or curry rice (February and August 2026) · curry bread (August 2026) · free all-you-can-eat “kuinige” side dishes (2026)',
    website: SITE, gmaps: gm('からこ ラーメン 東山二条'), menu_url: null,
    notes: '[Ramen · Higashiyama-Nijo, old-school counter] A cheap, old-fashioned ramen counter by the Higashiyama-Nijo bus stop, handy after ROHM Theatre or Heian Shrine: a rich chicken ramen from ¥750, a kara-age set (¥990) and other combos, with free salad, pickles and cold tofu on the counter. Cash only; smoking allowed at the counter; one reviewer found it less than clean.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'No owner is named in the sources read. A February 2026 diner was encouraged by the chef to try the small side dishes on the counter; a June 2026 reviewer found the food cheap and decent but the cleanliness “quite concerning”.',
      philosophy: null, specialty: 'Chicken ramen; kara-age set.',
      anecdotes: [
        { text: 'A May 2026 visitor deliberated about twenty seconds before switching from plain ramen to the kara-age set labelled “most popular”.', source: R + 'B528297013/' },
        { text: 'A September 2026 concert-goer stopped for the chef’s recommended rich ramen after a visit to ROHM Theatre.', source: R + 'B536741108/' },
      ],
      japanese_sources_summary: '店のサイト: 東山二条のラーメン屋 からこ。食べログ: からこ、ラーメン・居酒屋、左京区岡崎徳成町12-3、東山駅から503m、毎日11:00〜14:00、17:00〜22:00、予約不可、現金のみ、カウンター15席と2階に座敷、喫煙可 (カウンターに灰皿)、隣のコインパーキングで100円キャッシュバック。口コミ (2026年、英語): 老舗のラーメン屋、鶏のコラーゲンのラーメン、こってりラーメン750円、唐揚げ定食990円、天丼やホルモン丼、カレーのセット、カレーパン、無料の「Kuinige」のおばんざい、清潔さが気になるとの声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B520326374/', R + 'B521802790/', R + 'B523459964/', R + 'B524944214/', R + 'B528297013/', R + 'B529885259/', R + 'B530746436/', R + 'B532950656/', R + 'B534829945/', R + 'B536741108/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter ramen; cash only; smoking allowed inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎徳成町12-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013903, 135.778182); cross-checked: GSI 京都府京都市左京区岡崎徳成町12番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524944214/', R + 'B536741108/'],
    price_note: 'Prices from March and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rich ramen', '¥750', 'Ramen', 'no', 'no', 'September 2026.', 'kotteri_ramen'),
      it('', '', 'Kara-age set meal (with ramen and rice)', '¥990', 'Sets', 'no', 'no', 'March 2026.', 'karaage_set'),
      it('', '', 'Free side dishes (salad, pickles, cold tofu)', '', 'Sides', 'ask', 'ask', '2026 reviews.', 'kuinige'),
    ] }, {
    cuisine: '京都の老舗のラーメン屋 (2026年6月)・鶏のコラーゲンたっぷりの塩味控えめなラーメン (2026年1月)、こってりラーメン750円 (2026年9月)、チャーシューのこってり中華そば (2026年6月)・ご飯、鶏むねの唐揚げ2個、ラーメンの唐揚げ定食990円が一番人気 (2026年3月、5月)・天丼、ホルモン丼、カレーライスのサービスセット (2026年2月、8月)・カレーパン (2026年8月)・無料で食べ放題の「Kuinige」のおばんざい (2026年)',
    neighborhood: '東山二条、ロームシアター京都の近く。東山駅から徒歩10分',
    gf_detail: 'グルテンフリーではない。小麦のラーメン、唐揚げ、天丼、カレー、カレーパン (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鶏のスープ、チャーシュー、唐揚げ。無料のおばんざいに野菜もあるが中身は書かれていない (2026年の口コミ)。',
    notes: '[ラーメン・東山二条、昔ながらのカウンター] 東山二条のバス停の前の、安くて昔ながらのラーメンのカウンター。ロームシアターや平安神宮の帰りに。750円からのこってり鶏ラーメン、唐揚げ定食 (990円) などのセット、カウンターには無料のサラダ、漬物、冷奴。現金のみ、カウンターで喫煙可。清潔さが気になるとの声も。',
  });
}

// ================================================================ 京味菜 わたつね
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006054/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['17:00', '20:00']);
  put({
    id: 'kyoto_kyomisai_watatsune', name: '京味菜 わたつね (Kyomisai Watatsune)', category: 'OMNI',
    lat: 35.00923, lng: 135.764093, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Ju-wari (100% buckwheat) soba is on the menu next to ni-hachi soba and udon, but the dipping sauce and broths are soy-and-dashi; tempura, katsudon and fried dishes share the kitchen (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based soba and udon, nishin soba, katsudon, sashimi, oyster rice (2026 reviews).',
    hours_raw: 'Monday–Friday 11:00–15:00 and 17:00–20:00; Saturday 11:00–15:00; closed Sundays and holidays (Tabelog). Same menu at lunch and dinner (September 2026). Reservations accepted (Tabelog). Cash only (Tabelog, original 現金払いのみ). 36 seats: 4 at the counter and 8 tables for four; tatami area (Tabelog). Non-smoking; children welcome (Tabelog). On Yanagibaba just north of Sanjo, between Karasuma Oike and Kyoto Shiyakusho-mae Stns (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: day(['11:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yanagibaba just north of Sanjo — between Karasuma Oike and Kyoto Shiyakusho-mae Stns',
    cuisine: 'A local soba and set-meal house with a long menu and more dishes posted on the walls (2026 reviews) · handmade soba, both ni-hachi and ju-wari; chilled nishin soba; zaru soba with seasonal vegetable tempura (July–October 2026) · katsudon, tendon, limited seafood bowls, miso-nabe udon, oyster rice in winter (2026) · sashimi set meal ¥1,300 with hamo tempura at ¥540 a piece (September 2026); hamo tempura set (August 2026); hamo tempura soba (September 2026) · mushroom takikomi rice, simmered herring (October 2026) · Japanese sake (2026)',
    website: null, gmaps: gm('京味菜 わたつね 柳馬場'), menu_url: null,
    notes: '[Soba and set meals · Yanagibaba-Sanjo, a locals’ canteen] An office-like, always-busy soba house loved by Kyoto workers and regulars: handmade ni-hachi or ju-wari soba, nishin soba, katsudon and tendon, seasonal hamo tempura and winter oyster rice, from a long menu plus wall specials, mostly ¥1,000–2,000. Cash only; closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Reviewers describe a long-loved local restaurant with many regulars and office workers at lunch, kind staff, and few foreign customers (September–October 2026). A July 2026 diner found the soba dipping sauce too thin on two visits.',
      philosophy: null, specialty: 'Handmade soba; set meals.',
      anecdotes: [
        { text: 'A September 2026 diner had heard that upgrading to ju-wari soba was worth it.', source: R + 'B534884140/' },
        { text: 'A September 2026 regular recommends the oyster rice in winter.', source: R + 'B535427032/' },
      ],
      japanese_sources_summary: '食べログ: 京味菜 わたつね、そば・食堂・丼、中京区柳馬場通三条上ル油屋町94 綿常ビル、烏丸御池駅・京都市役所前駅から徒歩、月〜金 11:00〜15:00、17:00〜20:00、土 11:00〜15:00、日・祝定休、予約可、現金のみ、36席 (カウンター4、4人卓8)、禁煙、子ども可。口コミ (2026年、英語と日本語): 地元に長く愛される食堂、手打ちの二八と十割のそば、冷やしにしんそば、天ざる、カツ丼、天丼、味噌鍋うどん、冬は牡蠣ご飯、造りの定食1,300円、鱧の天ぷら1個540円、店員は親切、つゆが薄いとの声も。',
      confidence: 'medium', sources: [TB, R + 'B478833658/', R + 'B498387141/', R + 'B532243199/', R + 'B534320941/', R + 'B534884140/', R + 'B535049973/', R + 'B535155512/', R + 'B535427032/', R + 'B535535032/', R + 'B537321880/'] },
    cultural_comfort: { level: 'japanese', note: 'A locals’ canteen with a Japanese menu booklet and wall specials; few foreign customers (September 2026); cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場通三条上ル油屋町94 綿常ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00923, 135.764093); cross-checked: GSI 京都府京都市中京区油屋町94番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535427032/'],
    price_note: 'Prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Sashimi set meal', '¥1,300', 'Set meals', 'ask', 'no', 'September 2026.', 'sashimi_teishoku'),
      it('', '', 'Hamo tempura (per piece)', '¥540', 'À la carte', 'no', 'no', 'September 2026.', 'hamo_tempura'),
      it('', '', 'Ju-wari soba', '', 'Soba', 'ask', 'no', 'October 2026.', 'juwari_soba'),
      it('', '', 'Nishin soba (chilled)', '', 'Soba', 'no', 'no', 'August 2026.', 'nishin_soba'),
    ] }, {
    cuisine: '地元のそばと定食の店。冊子のメニューに加え壁にも品書き (2026年の口コミ)・手打ちの二八そばと十割そば、冷やしにしんそば、季節の野菜天のざるそば (2026年7〜10月)・カツ丼、天丼、数量限定の海鮮丼、味噌鍋うどん、冬は牡蠣ご飯 (2026年)・造りの定食1,300円、鱧の天ぷら1個540円 (2026年9月)、鱧の天ぷらの定食 (2026年8月)、鱧天そば (2026年9月)・きのこの炊き込みご飯、にしんの炊いたん (2026年10月)・日本酒 (2026年)',
    neighborhood: '三条のすぐ北の柳馬場通。烏丸御池駅と京都市役所前駅の間',
    gf_detail: '要確認。十割そばもあり二八そばやうどんと並ぶが、つゆとだしは醤油と出汁。天ぷら、カツ丼、揚げ物と同じ厨房 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁のそばとうどん、にしんそば、カツ丼、造り、牡蠣ご飯 (2026年の口コミ)。',
    notes: '[そばと定食・柳馬場三条、地元の食堂] 京都の勤め人や常連でいつもにぎわう、事務所のような雰囲気のそば屋。手打ちの二八か十割、にしんそば、カツ丼や天丼、季節の鱧天、冬の牡蠣ご飯など、長いメニューと壁の品書きから。たいてい1,000〜2,000円。現金のみ、日曜休み。',
  });
}

// ================================================================ 本家 田毎 三条本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000480/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.tagoto.com/';
  const H = day(['11:00', '15:15'], ['17:00', '21:00']);
  put({
    id: 'kyoto_honke_tagoto_sanjo', name: '本家 田毎 三条本店 (Honke Tagoto, Sanjo)', category: 'OMNI',
    lat: 35.008789, lng: 135.767615, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soba of domestic buckwheat flour with kombu-and-katsuobushi dashi (Tabelog shop text); the buckwheat ratio is not stated, and the menu has udon, tempura and duck soba (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every broth and dipping sauce uses katsuobushi dashi (Tabelog shop text).',
    hours_raw: 'Lunch 11:00–15:15 (L.O. 14:45), dinner 17:00–21:00 (L.O. 20:20); no closing days in October–November 2026 (official site). Tabelog: 11:00–21:00 daily. Reservations accepted (Tabelog). Cards (Tabelog). 76 seats: 42 at tables and 34 on tatami overlooking the courtyard; a 2nd-floor room for up to 25 (Tabelog shop text). First floor non-smoking; smoking allowed on the second floor (Tabelog). On Sanjo-dori just east of Teramachi, 4 min from Kyoto Shiyakusho-mae Stn (Tabelog). Founded in the first year of Meiji (1868) (official site; Tabelog shop text).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori east of Teramachi — 4 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Soba since 1868, made with the finest domestic buckwheat flour, kombu and katsuobushi (Tabelog shop text) · duck soba ¥1,720 with yuzu pepper; duck seiro ¥1,720 (May and November 2026) · limited misogi soba ¥1,600 (May 2026) · nishin soba (May 2026) · weekday lunch service menu: konoha-don with cold oroshi soba (May 2026); daily special of soba with kinugasa-don (September 2026); “ten-toro” mini tororo bowl with mentaiko (June 2026) · yuba rolls (August 2026) · local-sake snack set for ¥400 extra with duck, kamaboko and tsukudani (June 2026) · Tateyama sake (July 2026) · the official menu opens with an “ebi-taishi” dish (official site)',
    website: SITE, gmaps: gm('本家 田毎 三条本店'), menu_url: SITE,
    notes: '[Soba · Sanjo-Teramachi, since 1868] A spacious old soba house on the Sanjo arcade with tables and tatami looking onto a courtyard garden. Duck soba (¥1,720) is the summer favourite; also nishin soba, yuba rolls, weekday lunch sets of soba with a small rice bowl, and a sake set with snacks. Easy for solo diners; busy just before noon. Sake prices have risen, one regular notes.',
    chef_bio: { chef_name: null, roles: ['Kitchen (unnamed)'], origin: null,
      background: 'Founded in the first year of Meiji (1868) (official site). An October 2026 reviewer lists notable past guests including Hara Tatsuhiro, Natori Yuko and the Emoto family. An August 2026 diner remembers a branch at Monte Mer in Ashiya; the official site lists the Sanjo-Teramachi main shop and a shop in front of the prefectural office.',
      philosophy: 'Keeping the flavours and traditions since the founding (Tabelog shop text).', specialty: 'Duck soba; nishin soba.',
      anecdotes: [
        { text: 'A July 2026 regular of six visits found the sake prices sharply higher than before.', source: R + 'B457634635/' },
        { text: 'An August 2026 diner came at 8:10 pm for a fourth dinner of the day, craving the yuba rolls remembered from the Ashiya shop.', source: R + 'B532938258/' },
      ],
      japanese_sources_summary: '公式サイト: お蕎麦処 本家 田毎、京都 寺町三条、創業明治元年、三条寺町本店と府庁前店、10〜11月は定休日なし、昼11時〜15時15分 (L.O.14時45分)、夜17時〜21時 (L.O.20時20分)。食べログ: そば・日本料理・うどん、中京区三条通寺町東入ル石橋町12、京都市役所前駅から徒歩4分、11:00〜21:00、予約可、カード可、76席 (テーブル42、中庭の見える座敷34、2階の個室は25名まで)、1階は禁煙、2階は喫煙可。店の紹介: 明治元年創業、国産の上質なそば粉、昆布、鰹節で創業以来の味。口コミ (2026年、英語): 鴨そば1,720円、鴨せいろ1,720円、限定のみそぎそば1,600円、にしんそば、平日のランチサービス、湯葉巻き、地酒とあてのセット、日本酒が値上がりしたとの声、芦屋の Monte Mer にも店があったとの声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B457634635/', R + 'B522727207/', R + 'B529057769/', R + 'B529609194/', R + 'B529690695/', R + 'B530012367/', R + 'B532938258/', R + 'B533173273/', R + 'B538374028/', R + 'B538632063/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Official site in English and Chinese as well as Japanese; spacious and easy for solo diners; a mix of overseas and Japanese guests (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通寺町東入ル石橋町12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with October–November 2026 notice; Tabelog reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.008789, 135.767615); cross-checked: GSI 京都府京都市中京区石橋町12番地 (lot) 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529057769/', R + 'B538632063/'],
    price_note: 'Prices from May and November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Duck soba', '¥1,720', 'Soba', 'ask', 'no', 'May 2026.', 'kamo_soba'),
      it('', '', 'Duck seiro', '¥1,720', 'Soba', 'ask', 'no', 'November 2026.', 'kamo_seiro'),
      it('', '', 'Misogi soba (limited)', '¥1,600', 'Soba', 'ask', 'no', 'May 2026.', 'misogi_soba'),
      it('', '', 'Nishin soba', '', 'Soba', 'ask', 'no', 'May 2026.', 'nishin_soba'),
    ] }, {
    cuisine: '明治元年からのそば。国産の上質なそば粉、昆布、鰹節 (食べログの店の紹介)・鴨そば1,720円と柚子胡椒、鴨せいろ1,720円 (2026年5月、11月)・限定のみそぎそば1,600円 (2026年5月)・にしんそば (2026年5月)・平日のランチサービス: 木の葉丼と冷たいおろしそば (2026年5月)、そばと衣笠丼の日替わり (2026年9月)、明太子のミニとろろ丼「Ten Toro」(2026年6月)・湯葉巻き (2026年8月)・400円追加で鴨、蒲鉾、佃煮のあてと地酒のセット (2026年6月)・Tateyama の日本酒 (2026年7月)・公式のおしながきの最初は「えび太子」(公式サイト)',
    neighborhood: '寺町の東の三条通。京都市役所前駅から徒歩4分',
    gf_detail: '要確認。国産のそば粉と昆布と鰹節の出汁のそば (食べログの店の紹介)。そば粉の割合は書かれておらず、うどん、天ぷら、鴨そばも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。つゆとだしはすべて鰹節の出汁 (食べログの店の紹介)。',
    notes: '[そば・三条寺町、1868年から] 三条のアーケードにある、中庭を望むテーブルと座敷の広々とした老舗のそば屋。夏の人気は鴨そば (1,720円)。にしんそば、湯葉巻き、平日はそばと小丼のランチ、あてと地酒のセットも。ひとりでも入りやすく、正午前から混む。日本酒が値上がりしたとの常連の声も。',
  });
}

save();
