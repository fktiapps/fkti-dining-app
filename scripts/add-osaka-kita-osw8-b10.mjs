// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 10.
//   + つけ麺R&S Tsukemen R&S (thick-noodle tsukemen of the Ryusho group by day, Chinese gyoza and dim sum by night; no ramen block)
//   + らーめん キング Ramen King (Maruyoshi-group ramen counter at Minamikata: tuna-bonito shoyu, seafood shio, seasonal crab bowls; no ramen block)
//   + 真水無香 Shinsui Mukou (Shanghai-style Chinese restaurant with lunch sets and autumn drunken crab)
//   + 串焼たなかや Kushiyaki Tanakaya (12-seat skewer counter by JR Higashi-Yodogawa since 2009)
//   - skipped ラーメン ボス豚 西中島店 27150337: closed (Tabelog badge 閉店, 2026-11-02 fetch).
//   Chain check of the four added:
//   - R&S: "One of the three pillars of the Ryusho Group" (September 2025 review), a sister of the Ryusho shop by Higashi-Yodogawa station and of
//     "Mazesoba Ryusho"; a small local group; no Ryusho shop in data (grep "Ryusho" finds none in osaka.json names). Kept, flagged.
//   - Ramen King: noodles from "Maruyoshi Seimenjo" / "the Maruyoshi Group" (2026 reviews) and a listing link to a maguromaruyoshi site; one
//     ramen shop of a small group; kept, flagged.
//   - Shinsui Mukou and Tanakaya: one shop each (Tabelog; kushiyaki-tanakaya.com).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). R&S (東三国4-21-23) is 49 m from osaka_ramen_a_higashimikuni
//   (address_ja "大阪府大阪市淀川区東三国4-19-40"), a different block.
//   No ramen blocks: R&S's 2025 reviews disagree on richness ("quite rich and too thick to drink" vs "a slightly light broth") and say nothing on
//   oiliness; Ramen King's reviews cover a rotating set of bowls with no clarity or oiliness for one bowl. Left off rather than guessed.
//   open_late per the brief: Ramen King (to 01:00/02:00) and Tanakaya (to 01:00 / 24:00) true; R&S (23:00) and Shinsui Mukou (22:30) false.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27150337', 'closed: Tabelog marks ラーメン ボス豚 西中島店 閉店 (fetched 2026-11-02)');

// ================================================================ つけ麺R&S
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27119041/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:30'], ['17:30', '23:00']);
  put({
    id: 'osaka_tsukemen_r_and_s_higashimikuni', name: 'つけ麺R&S (Tsukemen R&S)', category: 'OMNI',
    lat: 34.740255, lng: 135.494586, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; gyoza, xiao long bao and other wheat-wrapped dim sum at night.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and chicken white broth; pork and chicken chashu.',
    hours_raw: 'Daily except Wednesday 11:00–14:30 and 17:30–23:00; hours may change (Tabelog). Buy a ticket at the machine inside on the left (¥1,000 notes only; the one outside is for takeaway) (2022, 2024). No cards or e-money; PayPay accepted (Tabelog; December 2025). Counter of 5–6 and a few tables for four; non-smoking (Tabelog; 2024 reviews). Evenings lean to Chinese gyoza and dim sum, with a 90-minute all-you-can-eat boiled-dumpling plan best booked (January 2024; September 2025). Opened 6 September 2020; reopened 12 March 2022 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '東三国4-21-23, about 5 min from Higashi-Mikuni Stn, also walkable from JR Higashi-Yodogawa (Tabelog; 2024 reviews)',
    cuisine: 'Tsukemen with homemade, aged, thick straight noodles; large size free (2024–2025) · three tsukemen: chicken paitan tsukemen ¥950, tangy and rich (January 2025); sweet-and-spicy tsukemen ¥980 with a choice of heat (December 2025); shrimp cream tsukemen ¥1,000, thick with shrimp aroma and a little fresh cream (August and September 2025) · two chashu, black-pepper chicken and grilled pork, half a seasoned egg, menma, mizuna (2022–2024) · cheese rice to finish in the dip ¥80 (2025) · chicken paitan ramen ¥850, dandan noodles ¥880 (August 2025) · evenings: about 20 kinds of gyoza, xiao long bao and Chinese dishes, a 90-minute all-you-can-eat of boiled dumplings (2024–2025)',
    website: null, gmaps: gm('つけ麺R&S 東三国'), menu_url: null,
    notes: "[Tsukemen · Higashi-Mikuni, thick noodles by day, dumplings by night] A small tsukemen shop near Higashi-Mikuni Station, one of the Ryusho group's shops (September 2025), whose homemade, aged, thick straight noodles have a slight green hue and a strong chew, large size free. Pick a dip: the tangy chicken paitan (¥950), a sweet-and-spicy one with the heat you choose (¥980), or the shrimp cream (¥1,000), thick with the aroma of fried shrimp; then hand the bowl back for cheese rice. At night it turns into a Chinese gyoza and dim sum place with Chinese staff and many Chinese customers (2024–2026), including a 90-minute all-you-can-eat of boiled dumplings. Closed Wednesdays; PayPay or cash.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff of the Ryusho group (unnamed)'], origin: null,
      background: 'Per the Tabelog listing: tsukemen and ramen, opened 6 September 2020, reopened 12 March 2022. Per reviews: "a sister restaurant of" the Ryusho shop by Higashi-Yodogawa station (2022–2024); "One of the three pillars of the Ryusho Group, Tsukemen R&S, underwent a renovation during the pandemic … blending the traditional focus on tsukemen with a bar-style setting where you can enjoy gyoza and xiaolongbao" and Ryusho\'s traits are "No chemical additives or preservatives", a "Rich seafood and chicken white broth" and "Homemade, aged, high-hydration noodles" (September 2025); the dim sum is made by "a top-level dim sum chef" (January 2024); "staff members who are Chinese managing the restaurant" in the evening (May 2026).',
      philosophy: null, specialty: 'Shrimp cream tsukemen; thick homemade noodles.',
      anecdotes: [
        { text: '"The original tsukemen, on the other hand, boasts straight, thick noodles that are smooth and chewy, with a slight green hue." — September 2025, shrimp cream tsukemen ¥1,000.', source: R + 'B513510484/' },
        { text: '"The dipping sauce came in a cup similar to a coffee cup, and the handle was quite convenient." — December 2025, sweet-and-spicy tsukemen ¥980.', source: R + 'B519002922/' },
        { text: '"It seems to focus more on Chinese cuisine than ramen, as most of the other customers were enjoying Chinese dishes." — May 2026, an evening visit.', source: R + 'B531042166/' },
      ],
      japanese_sources_summary: '食べログ: つけ麺R&S、つけ麺・ラーメン、大阪市淀川区東三国4-21-23、東三国駅から366m、月・火・木〜日11:00〜14:30、17:30〜23:00、水曜休み、予約不可、カード・電子マネー不可、PayPay 可、禁煙、2020年9月6日オープン、2022年3月12日再開。口コミ(2022年7月〜2026年5月): Ryusho グループの店、店内の券売機 (1,000円札のみ)、自家製の熟成した太いストレート麺、大盛り無料、鶏白湯つけ麺950円、甘辛つけ麺980円 (辛さを選ぶ)、海老クリームつけ麺1,000円、豚と鶏の2種のチャーシュー、味玉、メンマ、水菜、チーズライス80円、鶏白湯ラーメン850円、担々麺880円、夜は約20種の gyoza や小籠包、水 gyoza の食べ放題、中国のスタッフと客。',
      confidence: 'medium', sources: [TB, R + 'B451652945/', R + 'B484731817/', R + 'B486870559/', R + 'B504075871/', R + 'B512645323/', R + 'B513192406/', R + 'B513510484/', R + 'B515040109/', R + 'B519002922/', R + 'B531042166/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine inside the door; Chinese staff and customers in the evening (May 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国4-21-23',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国四丁目21番23号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B513192406/', R + 'B519002922/', R + 'B486870559/'],
    price_note: 'Ticket prices from 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shrimp cream tsukemen (large free)', '¥1,000', 'Tsukemen', 'no', 'no', 'August and September 2025.', 'ebi_cream'),
      it('', '', 'Sweet-and-spicy tsukemen', '¥980', 'Tsukemen', 'no', 'no', 'December 2025.', 'amakara'),
      it('', '', 'Chicken paitan tsukemen', '¥950', 'Tsukemen', 'no', 'no', 'January 2025.', 'toripaitan_tsukemen'),
      it('', '', 'Chicken paitan ramen', '¥850', 'Ramen', 'no', 'no', 'August 2025.', 'toripaitan_ramen'),
      it('', '', 'Cheese rice to finish in the dip', '¥80', 'Rice', 'ask', 'no', 'August and September 2025.', 'cheese_rice'),
    ] }, {
    cuisine: '自家製の熟成した太いストレート麺のつけ麺、大盛り無料 (2024〜2025年)・つけ麺は3種: 鶏白湯つけ麺950円、酸味がありこってり (2025年1月)。辛さを選べる甘辛つけ麺980円 (2025年12月)。海老クリームつけ麺1,000円、とろみがあり海老の香り、生クリームは少し (2025年8月、9月)・黒こしょうの鶏と焼いた豚の2種のチャーシュー、味玉半分、メンマ、水菜 (2022〜2024年)・つけだれで作るチーズライス80円 (2025年)・鶏白湯ラーメン850円、担々麺880円 (2025年8月)・夜: 約20種の gyoza、小籠包、中国料理、90分の水 gyoza 食べ放題 (2024〜2025年)',
    neighborhood: '東三国4-21-23、東三国駅から約5分、JR 東淀川駅からも歩ける (食べログ、2024年の口コミ)',
    gf_detail: 'グルテンフリーではありません。小麦の太い麺。夜は gyoza や小籠包など小麦の皮の点心。',
    vegan_detail: 'ヴィーガンではありません。魚介と鶏の白いスープ、豚と鶏のチャーシュー。',
    notes: '[つけ麺・東三国、昼は太麺、夜は gyoza] 東三国駅の近くの小さなつけ麺の店で、Ryusho グループの店のひとつ (2025年9月)。自家製の熟成した太いストレート麺は少し緑がかっていて、かみごたえがあり、大盛り無料。つけだれは酸味のある鶏白湯 (950円)、辛さを選べる甘辛 (980円)、揚げた小エビの香りのとろりとした海老クリーム (1,000円) から。最後は器を渡してチーズライスに。夜は中国の gyoza と点心の店になり、中国のスタッフと客が多い (2024〜2026年)。90分の水 gyoza の食べ放題も。水曜休み、PayPay か現金。',
  });
}

// ================================================================ らーめん キング
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27072425/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '15:00'], ['18:00', '01:00']); const B = day(['11:00', '15:00'], ['18:00', '02:00']);
  put({
    id: 'osaka_ramen_king_nishinakajima', name: 'らーめん キング (Ramen King)', category: 'OMNI',
    lat: 34.726663, lng: 135.501233, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles (thick whole-wheat noodles in the mazesoba); gyoza on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, chicken and crab broths, chashu.',
    hours_raw: 'Mon, Tue, Thu and holidays 11:00–15:00 and 18:00–01:00 (last order 00:30); Fri–Sun 11:00–15:00 and 18:00–02:00 (last order 01:30); closed Wednesday for lack of staff; until sold out (Tabelog). Fills right after opening and is busy at 23:00 too (2025–2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), iD, PayPay and d Barai (Tabelog). 15 seats at a counter and tables; non-smoking (Tabelog). Large noodles free (2025–2026). Opened 18 April 2013 (Tabelog).',
    hours: { 0: A, 1: A, 3: A, 4: B, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-6-10, 3 min from Hankyu Minamikata or Nishinakajima-Minamigata Stn (Tabelog)',
    cuisine: 'Ramen of many kinds (Tabelog; reviews) · seafood shio ramen of iriko, kombu, katsuobushi, shijimi and hamaguri, topped with a large hamaguri (Tabelog) · tuna-bonito chuka soba with a seasoned egg ¥1,100, the most popular, "thick yet light" (March and April 2026) · chicken paitan ramen, foamed with a hand blender, ¥1,100 with egg (July and September 2026); spicy chicken paitan (June 2026) · Taiwan mazesoba of thick whole-wheat noodles with chives, chashu, seaweed, egg yolk and spicy mince, with rice to finish (Tabelog; August 2025); curry, salt and spicy versions; Taiwan curry mazesoba with rice ¥1,210 (July 2026) · seasonal bowls: Hanasaki crab miso ramen ¥1,180 (2025), chilled snow-crab tsukemen ¥1,320 (August–September 2026) · grilled or rare chashu; noodles from Maruyoshi Seimenjo; seafood powders, sansho and kombu vinegar on the table (2025–2026)',
    website: 'https://maguromaruyoshi.jbplt.jp/', gmaps: gm('らーめん キング 西中島'), menu_url: null,
    notes: "[Ramen · Nishinakajima-Minamigata, a late-night counter with crab specials] A 15-seat ramen shop three minutes from Minamikata and Nishinakajima-Minamigata stations, open since 2013 and until 1 or 2 a.m., featured on an Asahi Broadcasting TV show (Tabelog). The list is long: a tuna-bonito chuka soba that regulars call the favourite (¥1,100 with egg), a seafood shio built on iriko, shijimi and hamaguri, a blender-foamed chicken paitan, and Taiwan mazesoba on thick whole-wheat noodles, plus seasonal crab bowls such as chilled snow-crab tsukemen (¥1,320, 2026). Noodles come from the group's own Maruyoshi noodle works, and large portions are free. Busy at lunch and after 23:00; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed); two young women on the floor in August and October 2025'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: "Featured on Asahi Broadcasting\'s \'Matsumoto Family\'s Holiday\'"; a seafood shio ramen "made with carefully selected iriko, kombu, katsuobushi, shijimi, and hamaguri"; Taiwan mazesoba; closed Wednesdays "due to staff shortages"; opened 18 April 2013; website maguromaruyoshi.jbplt.jp. Per reviews: "The noodles from Maruyoshi Seimenjo are perfectly balanced" (September 2026); "you can\'t go wrong with the noodles from the Maruyoshi Group" (April 2026); the chicken paitan "features a slightly espuma-style broth made with a hand blender" (July 2026); "The two young female staff members were energetic and provided excellent service" (August 2025).',
      philosophy: null, specialty: 'Tuna-bonito chuka soba; seasonal crab ramen; Taiwan mazesoba.',
      anecdotes: [
        { text: '"I entered around 11 PM, and the place was packed with customers coming in continuously." — March 2026, tuna-bonito chuka soba ¥1,100.', source: R + 'B524189934/' },
        { text: '"A thick layer of homemade crab oil floats on top, enhancing the crab aroma and keeping the heat in." — April 2025, crab miso ramen ¥1,180.', source: R + 'B506042559/' },
        { text: '"They offer a fantastic service where you can get a large size (2 servings) for free." — September 2026, chilled snow-crab tsukemen.', source: R + 'B325472543/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): らーめん キング、ラーメン・台湾まぜそば・餃子、大阪市淀川区西中島3-6-10、Hankyu Minamikata 駅と西中島南方駅から徒歩3分、月・火・木・祝11:00〜15:00、18:00〜翌1:00、金〜日11:00〜15:00、18:00〜翌2:00、水曜休み (人手不足のため)、売り切れまで、カード・iD・PayPay・d払い可、15席、禁煙、2013年4月18日オープン、Asahi Broadcasting の番組で紹介、いりこ、昆布、かつお節、しじみ、はまぐりの魚介の塩ラーメンに大きなはまぐり、台湾まぜそば。口コミ(2025年4月〜2026年9月): いちばん人気のマグロ節の中華そば味玉1,100円、ハンドブレンダーで泡立てる鶏白湯、辛い鶏白湯、台湾まぜそば (塩、辛、カレー)、台湾カレーまぜそば1,210円、季節の Hanasaki のカニの味噌ラーメン1,180円、ズワイガニの冷やしつけ麺1,320円、焼きかレアのチャーシュー、Maruyoshi の製麺所の麺、大盛り無料、深夜も混む、女性スタッフの接客。',
      confidence: 'medium', sources: [TB, 'https://maguromaruyoshi.jbplt.jp/', R + 'B307573132/', R + 'B325472543/', R + 'B506042559/', R + 'B524189934/', R + 'B531718443/', R + 'B531726260/', R + 'B531775990/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; choose noodle size and chashu. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-6-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目6番10号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524189934/', R + 'B506042559/', R + 'B307573132/'],
    price_note: 'Ticket prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tuna-bonito chuka soba with seasoned egg', '¥1,100', 'Ramen', 'no', 'no', 'March 2026.', 'maguro_bushi'),
      it('', '', 'Chicken paitan ramen with seasoned egg', '¥1,100', 'Ramen', 'no', 'no', 'September 2026.', 'tori_paitan'),
      it('', '', 'Taiwan curry mazesoba with small rice', '¥1,210', 'Mazesoba', 'no', 'no', 'July 2026.', 'taiwan_curry_maze'),
      it('', '', 'Chilled snow-crab tsukemen (seasonal)', '¥1,320', 'Tsukemen', 'no', 'no', 'August 2026.', 'kani_tsukemen'),
      it('', '', 'Hanasaki crab miso ramen (seasonal)', '¥1,180', 'Ramen', 'no', 'no', 'April 2025.', 'kani_miso'),
    ] }, {
    cuisine: 'いろいろなラーメン (食べログ、口コミ)・いりこ、昆布、かつお節、しじみ、はまぐりの魚介の塩ラーメンに大きなはまぐり (食べログ)・いちばん人気のマグロ節の中華そば味玉つき1,100円、「濃いのに軽い」(2026年3月、4月)・ハンドブレンダーで泡立てた鶏白湯ラーメン味玉つき1,100円 (2026年7月、9月)。辛い鶏白湯 (2026年6月)・全粒粉の太麺の台湾まぜそば、ニラ、チャーシュー、のり、卵黄、辛いひき肉、最後にごはん (食べログ、2025年8月)。カレー、塩、辛も。台湾カレーまぜそばとごはん1,210円 (2026年7月)・季節の一杯: Hanasaki のカニの味噌ラーメン1,180円 (2025年)、ズワイガニの冷やしつけ麺1,320円 (2026年8〜9月)・焼きかレアのチャーシュー。Maruyoshi の製麺所の麺。卓上に魚粉、山椒、昆布酢 (2025〜2026年)',
    neighborhood: '西中島3-6-10、Hankyu Minamikata 駅と西中島南方駅から徒歩3分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。小麦の麺 (まぜそばは全粒粉の太麺)、サイドに gyoza。',
    vegan_detail: 'ヴィーガンではありません。魚介、鶏、カニのスープとチャーシュー。',
    notes: '[ラーメン・西中島南方、深夜までのカニの限定もある店] 南方駅と西中島南方駅から3分、15席のラーメン店で、2013年から深夜1時か2時まで営業。Asahi Broadcasting の番組で紹介された (食べログ)。メニューは多く、常連がいちばんというマグロ節の中華そば (味玉つき1,100円)、いりこ、しじみ、はまぐりの魚介の塩、ブレンダーで泡立てた鶏白湯、全粒粉の太麺の台湾まぜそば、そしてズワイガニの冷やしつけ麺 (1,320円、2026年) など季節のカニの一杯。麺はグループの Maruyoshi の製麺所から、大盛りは無料。昼も夜11時すぎも混む。水曜休み。',
  });
}

// ================================================================ 真水無香
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27008287/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '14:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_shinsui_mukou_nishinakajima', name: '真水無香 (Shinsui Mukou)', category: 'OMNI',
    lat: 34.726102, lng: 135.497114, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Chinese dishes with soy and oyster sauces, noodles, dumplings, fried dishes and Shaoxing-wine marinades; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Shanghai-style Chinese menu of pork, beef, chicken, seafood and crab; garlic water spinach and stir-fried eggplant are not described as made without meat stock.',
    hours_raw: 'Mon–Fri 11:00–14:00 and 17:00–22:30; Sat 17:00–22:30; Sun and holidays 17:00–21:30; open all year; no lunch at weekends (Tabelog). Call ahead for parties of eight or more; drunken crab needs booking in advance, autumn only (Tabelog; November 2014 and 2025 reviews). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 46 seats at tables, areas screened by curtains, whole hire for 20–50; designated smoking area (Tabelog). Parking space out front if free, coin parking next door (March 2025).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: day(['17:00', '22:30']), 6: day(['17:00', '21:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島4-8-4, ground floor of リッツ新大阪南, 3 min from the north exit of Nishinakajima-Minamigata or Hankyu Minamikata (Tabelog)',
    cuisine: 'Shanghai-style Chinese (reviews) · lunch sets with salad, soup, pickles and rice that change daily (November 2025): Hainan chicken rice set ¥980 (August 2026); soupless dandan noodle set with fried rice and almond tofu ¥980 (July 2025, October 2026); yurinchi set ¥980 (May 2025); twice-cooked pork, stir-fried eggplant (2024–2025) · evenings: drunken crab (Shanghai crab in Shaoxing wine) in autumn, booked ahead (2014–2025); Shanghai-style beef and root-vegetable stew, garlic water spinach, sweet and sour pork, seafood crispy rice, xiao long bao, sesame balls, custard buns (March 2025); Sichuan vermicelli, spicy chicken (July 2025) · a ¥6,600 course with shark-fin soup and draft beer included in the drinks plan (October 2025)',
    website: null, gmaps: gm('真水無香 西中島'), menu_url: null,
    notes: "[Chinese · Nishinakajima-Minamigata, a calm Shanghai-style restaurant] A clean, quiet 46-seat Chinese restaurant three minutes from Nishinakajima-Minamigata, serving Shanghai-style cooking that some customers order in Chinese (March 2025). Weekday lunch sets change daily, around ¥980 with salad, soup and pickles, from Hainan chicken rice to soupless dandan noodles with fried rice. In the evening the round tables fill with Shanghai-style beef and root-vegetable stew, garlic water spinach, xiao long bao and seafood crispy rice poured at the table, and in autumn one regular comes every year for the drunken Shanghai crab, which must be ordered in advance (2014–2025). Courses from ¥6,600. Friendly staff who remember faces (2022).",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: Chinese, ramen and izakaya, 46 table seats, open all year, no weekend lunch. Per reviews: "serves authentic Shanghai cuisine" (November 2021); "Unlike typical local Chinese restaurants, this place is kept very clean" (November 2024); "I noticed some customers ordering in Chinese, which suggests it\'s authentic Chinese cuisine" (March 2025); "The staff recalled my visits and remembered me" (November 2022); "the staff were very friendly, chatting with us a lot" (July 2025).',
      philosophy: null, specialty: 'Drunken Shanghai crab (autumn); lunch sets.',
      anecdotes: [
        { text: '"My main goal was to try the \'Drunken Crab.\' All the other dishes are delicious too." — November 2025, a visit made most autumns since 2014.', source: R + 'B49707507/' },
        { text: '"Seafood Crispy Rice: [The staff] poured the sauce right in front of me with a sizzling sound." — March 2025.', source: R + 'B502316121/' },
        { text: '"The photo is of the spicy chicken, which wasn\'t on the menu, but when I asked, [the staff] said it was available." — July 2025.', source: R + 'B509890754/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 真水無香、中華料理・ラーメン・居酒屋、大阪市淀川区西中島4-8-4 リッツ新大阪南 1F、Hankyu Minamikata 駅と西中島南方駅北口から徒歩3分、月〜金11:00〜14:00、17:00〜22:30、土17:00〜22:30、日・祝17:00〜21:30、年中無休、土日祝は昼の営業なし、8名以上は要連絡、カード可、電子マネー・QR 不可、テーブル46席、カーテンで仕切れる席、貸切20〜50名、分煙。口コミ(2014年〜2026年10月): 上海料理、日替わりのランチ定食 (サラダ、スープ、漬物、ごはん)、海南チキンライス980円、汁なし担々麺とチャーハンと杏仁豆腐980円、油淋鶏、回鍋肉、なすの炒め物、秋の酔っぱらい蟹 (要予約)、上海風の牛肉と根菜の煮込み、空心菜のにんにく炒め、酢豚、海鮮おこげ、小籠包、ごま団子、カスタードまん、6,600円のコース、店内はきれい、中国語で注文する客も。',
      confidence: 'medium', sources: [TB, R + 'B443460292/', R + 'B495127558/', R + 'B49707507/', R + 'B502316121/', R + 'B507496835/', R + 'B509343421/', R + 'B509890754/', R + 'B510590501/', R + 'B515491336/', R + 'B516618905/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Some customers order in Chinese (March 2025). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島4-8-4 リッツ新大阪南 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島四丁目8番4号 (go) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B443460292/', R + 'B510590501/', R + 'B515491336/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hainan chicken rice lunch set', '¥980', 'Lunch', 'ask', 'no', 'August 2026.', 'hainan_set'),
      it('', '', 'Soupless dandan noodles with fried rice and almond tofu', '¥980', 'Lunch', 'no', 'no', 'July 2025.', 'shirunashi_tantan'),
      it('', '', 'Drunken Shanghai crab (autumn, book ahead)', '', 'Seasonal', 'ask', 'no', 'November 2025.', 'drunken_crab'),
      it('', '', 'Dinner course with shark-fin soup', '¥6,600', 'Courses', 'ask', 'no', 'October 2025.', 'course_6600'),
    ] }, {
    cuisine: '上海風の中華 (口コミ)・日替わりのランチ定食、サラダ、スープ、漬物、ごはんつき (2025年11月): 海南チキンライス980円 (2026年8月)。汁なし担々麺にチャーハンと杏仁豆腐980円 (2025年7月、2026年10月)。油淋鶏980円 (2025年5月)。回鍋肉、なすの炒め物 (2024〜2025年)・夜: 秋の酔っぱらい蟹 (上海ガニの紹興酒漬け)、要予約 (2014〜2025年)。上海風の牛肉と根菜の煮込み、空心菜のにんにく炒め、酢豚、海鮮おこげ、小籠包、ごま団子、カスタードまん (2025年3月)。四川風の春雨、鶏の辛い炒め (2025年7月)・フカヒレスープの入った6,600円のコース、飲み放題に生ビールも (2025年10月)',
    neighborhood: '西中島4-8-4、リッツ新大阪南の1階。西中島南方駅北口か Hankyu Minamikata 駅から3分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。醤油やオイスターソースの料理、麺、点心、揚げ物、紹興酒漬けの中華。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚肉、牛肉、鶏肉、魚介、カニの上海風の中華で、空心菜やなすの炒め物も肉のスープを使わないとは書かれていない。',
    notes: '[中華・西中島南方、落ち着いた上海料理の店] 西中島南方から3分、清潔で静かな46席の中華料理店で、上海風の料理を出す。中国語で注文する客も (2025年3月)。平日の昼は日替わりの定食で、サラダ、スープ、漬物つき約980円、海南チキンライスから汁なし担々麺とチャーハンまで。夜は丸いテーブルで、上海風の牛肉と根菜の煮込み、空心菜のにんにく炒め、小籠包、目の前でソースをかける海鮮おこげ。秋には酔っぱらい蟹 (上海ガニ) を目当てに毎年来る常連もいて、予約が必要 (2014〜2025年)。コースは6,600円から。顔を覚えてくれる親切なスタッフ (2022年)。',
  });
}

// ================================================================ 串焼たなかや
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27054131/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kushiyaki-tanakaya.com/';
  const W = day(['18:00', '01:00']); const S = day(['18:00', '00:00']);
  put({
    id: 'osaka_kushiyaki_tanakaya_miyahara', name: '串焼たなかや (Kushiyaki Tanakaya)', category: 'OMNI',
    lat: 34.739837, lng: 135.502766, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with salt or sauce; fried items such as akaten, thick fried tofu and garlic toast are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, beef and offal skewers and seafood.',
    hours_raw: 'Tue–Sat 18:00–01:00 (last order 00:00); Sun and holidays 18:00–24:00 (last order 23:00); closed Monday and the third Sunday of the month (shop site; Tabelog). Reservations accepted and advised: only 12 seats, so phone before coming (shop site; 2024–2026). Cover charge ¥500 before tax (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). 12 counter seats; private hire up to 20; smoking allowed (Tabelog). Opened 30 November 2009 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '宮原2-4-8, 1 min from the west exit of JR Higashi-Yodogawa Stn, 4 min from exit 4 of Higashi-Mikuni (Tabelog)',
    cuisine: 'Skewers of chicken, beef and seafood with daily side dishes (shop site; Tabelog) · big seseri (neck) skewers, salt; negima made with neck meat, sauce; tsukune; chicken thigh (February–August 2026) · special outside skirt skewers, beef harami, wagyu liver (2023–2026) · jidori tataki, chicken sashimi, raw omasum (2024) · scallop skewers, shrimp mayo, heart, gizzard, grilled corn (2024) · daily obanzai and small dishes; akaten (fried red fish cake); shredded cabbage with baby sardines as the starter (2023–2025) · thick fried tofu, garlic toast (June 2026) · about ¥3,000–5,000 a head (2025–2026)',
    website: SITE, gmaps: gm('串焼たなかや 宮原 東淀川'), menu_url: null,
    notes: "[Skewers · Higashi-Yodogawa, a 12-seat counter by the station] A twelve-seat skewer counter a minute from the west exit of JR Higashi-Yodogawa, open since 2009, where the owner chooses the ingredients first and then minds the cut, the skewering and the grill, at everyday prices (shop site). The skewers are big: a juicy seseri, a negima made with neck meat, tsukune, thick outside skirt and beef harami, plus daily small dishes, akaten and garlic toast. Regulars come back again and again for the friendly owner and the attentive woman who works the room (2024–2026). It fills fast, so phone first; open to 1 a.m.; ¥500 cover; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), at the grill', 'A woman who looks after the room (August 2026 review)'], origin: null,
      background: 'Per the shop site (kushiyaki-tanakaya.com, read 2026-11-02): 串焼き たなかや, a 12-seat counter izakaya near JR Higashi-Yodogawa and Higashi-Mikuni; "味も居心地も両方大事" (taste and comfort both matter) is the owner\'s care, so first-timers settle in easily; ingredients are chosen first, then the cut, the skewering and the grilling are attended to, at prices for everyday use; solo diners welcome; phone ahead because seats are few. Per the Tabelog listing: opened 30 November 2009. Per reviews: "The owner is incredibly friendly, and the hostess is smart and attentive" (August 2026); "the owner remembered me as soon as I walked in" after four or five years (March 2025).',
      philosophy: '"味も居心地も両方大事" (both taste and comfort matter; shop site).', specialty: 'Big seseri and negima skewers; outside skirt.',
      anecdotes: [
        { text: '"You rarely come across such large chicken neck skewers. Because they are so big, they are incredibly juicy!! Plus, the meat in the negima … is also chicken neck!!" — August 2026.', source: R + 'B501007598/' },
        { text: '"It\'s been about 4 or 5 years since I last visited. Yet, the owner remembered me as soon as I walked in." — March 2025.', source: R + 'B184725687/' },
        { text: '"The counter seating fills up quickly, but if you\'re dining alone like I often do, you have a good chance of getting a seat." — August 2026.', source: R + 'B484721282/' },
      ],
      japanese_sources_summary: '公式サイト: 串焼き たなかや、JR東淀川駅・大阪メトロ東三国駅近くのカウンター12席の居酒屋、味も居心地も両方大事という店主の心くばり、まず食材を厳選し、切り方・串の刺し方・焼き方にこだわる、お手頃価格、1人飲みも歓迎、来店前に電話を、大阪市淀川区宮原2-4-8、火〜土18:00〜翌1:00 (L.O.0:00)、日・祝18:00〜翌0:00 (L.O.23:00)、月曜と第3日曜休み。食べログ (店舗会員): お通し代500円 (税別)、カード・電子マネー・QR 可、カウンター12席、貸切20名まで、喫煙可、2009年11月30日オープン。口コミ(2023年〜2026年8月): 大きなせせり、ねぎまの肉もせせり、つくね、もも、特上ハラミ、牛ハラミ、和牛のレバー、地鶏のたたき、鶏刺し、生センマイ、ホタテ、エビマヨ、ハツ、砂ずり、焼きとうもろこし、日替わりのおばんざい、akaten、ちりめんのキャベツ、厚揚げ、ガーリックトースト、気さくな店主と気のきく女性スタッフ、予約がおすすめ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B184725687/', R + 'B477848200/', R + 'B484721282/', R + 'B486455110/', R + 'B490357834/', R + 'B492146265/', R + 'B501007598/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A small counter; phone ahead. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原2-4-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the shop site; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区宮原二丁目4番8号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501007598/', R + 'B490357834/', SITE],
    price_note: 'No skewer prices in the listing or reviews; the cover charge is from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Seseri (chicken neck) skewer, salt', '', 'Skewers', 'ask', 'no', 'August 2026.', 'seseri'),
      it('', '', 'Negima of neck meat, sauce', '', 'Skewers', 'no', 'no', 'August 2026.', 'negima'),
      it('', '', 'Special outside skirt skewer', '', 'Skewers', 'ask', 'no', '2023–2024.', 'harami'),
      it('お通し', '', 'Cover charge (otoshi)', '¥500', 'Cover', 'ask', 'ask', 'Tabelog; before tax.', 'otoshi'),
    ] }, {
    cuisine: '鶏、牛、魚介の串焼きと日替わりの一品 (公式サイト、食べログ)・大きなせせりの塩、肉がせせりのねぎまのたれ、つくね、もも (2026年2〜8月)・特上ハラミ、牛ハラミ、和牛のレバー (2023〜2026年)・地鶏のたたき、鶏刺し、生センマイ (2024年)・ホタテ、エビマヨ、ハツ、砂ずり、焼きとうもろこし (2024年)・日替わりのおばんざいや小鉢、akaten、お通しのちりめんじゃことキャベツ (2023〜2025年)・厚揚げ、ガーリックトースト (2026年6月)・ひとり約3,000〜5,000円 (2025〜2026年)',
    neighborhood: '宮原2-4-8、JR 東淀川駅の西口から1分、東三国駅4番出口から4分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。串は塩かたれ。akaten、厚揚げ、ガーリックトーストなどの揚げ物やパンもある。',
    vegan_detail: 'ヴィーガンではありません。鶏、牛、ホルモンの串と魚介。',
    notes: '[串焼き・東淀川、駅前の12席のカウンター] JR 東淀川駅の西口から1分、2009年からの12席の串焼きのカウンターで、店主はまず食材を選び、切り方、串の刺し方、焼き方にこだわり、普段使いの値段で出す (公式サイト)。串は大きく、ジューシーなせせり、肉がせせりのねぎま、つくね、厚切りのハラミや牛ハラミ、日替わりの小鉢、akaten、ガーリックトーストも。気さくな店主と気のきく女性スタッフに、常連が何度も通う (2024〜2026年)。すぐ埋まるので電話してから。深夜1時まで、お通し500円、喫煙可。',
  });
}

save();
