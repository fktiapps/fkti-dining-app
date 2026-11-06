// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 32.
//   + 鉄板焼・お好み焼 仁 Teppanyaki Okonomiyaki Jin (late-night Kyoto-style okonomiyaki and thin-noodle yakisoba; core list)
//   + 土鍋彩膳 とよあけ Donabe Saizen Toyoake (six-seat clay-pot rice breakfast counter near Shogoin, opened 2026; core list)
//   + 味彩 のと与 Ajisai no Toyo (Kansai-style eel above a Nishiki river-fish shop, since 1912; notable list)
//   + ブーランジェリー モリモリ Boulangerie MoriMori (Nijo Higashinotoin bakery, baked curry bread; notable list)
//   Picked 2026-11-06 after batch 31. `queue.mjs kyoto-missed next core 200`, mod 6 = 1: 26041687, 26023087, 26026909 were
//   skipped in batch 30; 鉄板焼・お好み焼 仁 26009011, 土鍋彩膳 とよあけ 26044747. `next notable 200`: 味彩 のと与 26003761,
//   ブーランジェリー モリモリ 26032453. Same-name check, same brand or operator only: one of each in our crawls (のと正 in
//   Higashiyama is a different name with no stated link). None of the four is in data/kyoto.json: grep by name and address
//   (松屋町48, 蓮華蔵31, 東魚屋町173, 仁王門町11) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-32');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鉄板焼・お好み焼 仁
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26009011/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '16:30'], ['18:00', '02:00']);
  put({
    id: 'kyoto_teppan_okonomiyaki_jin', name: '鉄板焼・お好み焼 仁 (Teppanyaki Okonomiyaki Jin)', category: 'OMNI',
    lat: 35.013629, lng: 135.761768, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat-batter okonomiyaki, negiyaki and chijimi, and yakisoba in a house sauce (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppan dishes of pork, beef, squid and egg, with bonito flakes on top (2025–2026 reviews).',
    hours_raw: 'Daily 11:30–16:30 (last order 16:00) and 18:00–2:00 (food last order 1:00, drinks 1:30); the 2nd and 4th Wednesday closed in the evening, lunch still served (Tabelog). Reservations accepted and advised — full soon after opening (Tabelog; 2025–2026 reviews). No service charge (Tabelog original 無し). Cash only (Tabelog; October 2026). 14 seats at tables with teppan griddles, plus a raised tatami area; non-smoking; children welcome, no strollers inside (Tabelog). Menu on the wall (February and October 2026). Nijo-dori west of Takakura; 5 min walk from Karasuma Oike Stn (Tabelog). Opened 1 May 2008 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nijo-dori west of Takakura — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Old-style okonomiyaki and teppanyaki izakaya (Tabelog; 2025–2026 reviews) · Kyoto beta-yaki okonomiyaki, negiyaki of green onion and beef tendon ¥950, jaga-cheese chijimi (2025–2026 reviews) · yakisoba with very thin noodles in a house sauce, with beef tendon or fried pork fat (2025–2026 reviews) · teppan dishes: tonpei-yaki, its seafood version umihira-yaki, cheese omelette, squid tentacles, spinach with bacon, wagyu outside skirt, gizzard, corn butter (2025–2026 reviews) · Jin yakko: cold tofu with spicy garlic chives (June 2025) · "Otsukaresama" set of two drinks and two small dishes ¥1,650–1,800; strong highballs and "Aka" (2025–2026 reviews) · about ¥3,000–5,000 at night (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('鉄板焼・お好み焼 仁 京都 二条高倉'), menu_url: null,
    notes: '[Okonomiyaki · Nijo Takakura, open till 2 a.m.] A Showa-feeling okonomiyaki and teppan bar where each dish is finished on the griddle at your table: Kyoto-style beta-yaki and negiyaki, very thin-noodle yakisoba many call the best in town, tonpei-yaki, cheese omelette and cold tofu under spicy chives, with an after-work set of two drinks and two snacks. Run by the chef and a second cook; busy and cramped, so book. Cash only. Lunch and late dinner daily.',
    chef_bio: { chef_name: null, roles: ['Head chef and a second cook (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 1 May 2008, okonomiyaki and beta-yaki in an old-fashioned room; registered as an official listing by the shop. Reviewers in 2025–2026 describe two men running the shop, the head chef and what seemed an apprentice (February and August 2026), strong drinks (June 2025) and Kyoto-style yakisoba with very thin noodles (January 2025–October 2026).',
      philosophy: null, specialty: 'Thin-noodle yakisoba; negiyaki.',
      anecdotes: [
        { text: 'A January 2025 regular comes here after almost every after-party in Kyoto and calls the thin-noodle yakisoba the best of the Kyoto yakisoba tried.', source: R + 'B500033066/' },
        { text: 'A March 2025 traveller liked the yakisoba so much that a second plate followed.', source: R + 'B505147660/' },
        { text: 'A February 2026 diner with presbyopia struggled to read the menu on the wall, and noted the house custom of ordering the quick dishes first.', source: R + 'B522254389/' },
      ],
      japanese_sources_summary: '食べログ: お好み焼き・鉄板焼き・居酒屋、中京区二条通高倉西入ル松屋町48-1、烏丸御池駅から徒歩5分、毎日 11:30〜16:30 (L.O.16:00)・18:00〜翌2:00 (料理L.O.1:00、ドリンクL.O.1:30)、第2・第4水曜は夜休み (昼は営業)、予約可、サービス料無し、現金のみ、14席、小上がり、禁煙、子ども可 (ベビーカー不可)、2008年5月1日オープン、昔ながらの空間でお好み焼きとべた焼き。口コミ (2025年1月〜2026年10月、英語): 店主と若い料理人の男性二人、壁のメニュー、京都のべた焼き、ねぎ焼き950円 (すじ)、じゃがチーズチヂミ、極細麺の焼きそば (すじ、揚げた豚の脂)、とん平焼き、海鮮の「Umihira-yaki」、チーズオムレツ、げそ焼き、ほうれん草とベーコン、和牛のハラミ、砂肝、コーンバター、ニラの冷奴「Jin Yakko」、2ドリンク2品の「Otsukaresama」セット1,650〜1,800円、濃いハイボール、「Aka」、予約がおすすめ。',
      confidence: 'medium', sources: [TB, R + 'B410921276/', R + 'B491949831/', R + 'B500033066/', R + 'B503266529/', R + 'B505147660/', R + 'B511264921/', R + 'B518200379/', R + 'B522254389/', R + 'B530975904/', R + 'B537374050/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu on the wall in Japanese; dishes served on your table griddle; book; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通高倉西入ル松屋町48-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013629, 135.761768); cross-checked: GSI 京都府京都市中京区松屋町48番地 (lot) 25 m; kyoto_karucha_cafe is 11 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B491949831/', R + 'B537374050/'],
    price_note: 'Prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Negiyaki (green onion and beef tendon)', '¥950', 'Okonomiyaki', 'no', 'no', 'August 2026.', 'negiyaki'),
      it('「Otsukaresama」セット', 'otsukaresama setto', '"Otsukaresama" set: two drinks and two small dishes', '¥1,800', 'Sets', 'ask', 'ask', 'August 2026; ¥1,650 plus tax in June 2026.', 'otsukare_set'),
      it('', '', 'Draft beer', '¥600', 'Drinks', 'no', 'vegan', 'October 2026.', 'draft_beer'),
      it('', '', 'Corn butter', '¥550', 'Teppan', 'ask', 'no', 'October 2026.', 'corn_butter'),
    ] }, {
    cuisine: '昔ながらのお好み焼きと鉄板焼きの居酒屋 (食べログ、2025〜2026年の口コミ)・京都のべた焼き、ねぎとすじのねぎ焼き950円、じゃがチーズチヂミ (2025〜2026年の口コミ)・自家製ソースの極細麺の焼きそば、すじや揚げた豚の脂入り (2025〜2026年の口コミ)・鉄板料理: とん平焼き、その海鮮版の「Umihira-yaki」、チーズオムレツ、げそ焼き、ほうれん草とベーコン、和牛のハラミ、砂肝、コーンバター (2025〜2026年の口コミ)・ピリ辛のニラをのせた冷奴「Jin Yakko」(2025年6月)・2ドリンクと2品の「Otsukaresama」セット1,650〜1,800円、濃いハイボールと「Aka」(2025〜2026年の口コミ)・夜は3,000〜5,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '高倉の西の二条通。烏丸御池駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。小麦の生地のお好み焼き、ねぎ焼き、チヂミと、ソースの焼きそば (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚、牛、いか、卵の鉄板料理に、かつお節をのせる (2025〜2026年の口コミ)。',
    notes: '[お好み焼き・二条高倉、深夜2時まで] 昭和の香りのお好み焼きと鉄板焼きの店。料理はテーブルの鉄板で仕上がる: 京都のべた焼きやねぎ焼き、京都一との声もある極細麺の焼きそば、とん平焼き、チーズオムレツ、ピリ辛ニラの冷奴、2ドリンク2品の「Otsukaresama」セット。店主ともう一人の料理人の二人で回す。混んで狭いので予約を。現金のみ。昼と深夜まで毎日営業。',
  });
}

// ================================================================ 土鍋彩膳 とよあけ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044747/'; const R = TB + 'dtlrvwlst/'; const BOOK = 'https://www.tablecheck.com/shops/toyouke/reserve';
  const H = day(['07:00', '15:00']);
  put({
    id: 'kyoto_donabe_saizen_toyoake', name: '土鍋彩膳 とよあけ (Donabe Saizen Toyoake)', category: 'OMNI',
    lat: 35.013772, lng: 135.776716, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tabelog\'s feature list ticks gluten-free options, but no detail is given; the course is clay-pot rice, tofu, vegetables and dashimaki in dashi, with soy-based seasonings likely (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks vegan and vegetarian options, but the set course uses dashi throughout, a dashimaki omelette, and fish, crab or beef rice (Tabelog; 2026 reviews).',
    hours_raw: 'Daily 7:00–15:00, seatings from 7:00; closing days may vary (Tabelog; October 2026). Reservation only, online via TableCheck or Instagram — there is no phone (Tabelog remarks; September 2026). No cover charge (Tabelog original チャージ料なし). Children only if able to eat the adult menu; no kids menu (Tabelog). 6 counter seats around the kitchen; non-smoking; free Wi-Fi; English-speaking staff (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 1F of the Daini Kinken building, Shogoin; 1 min from the Shinmanomachi Nijo bus stop, 8–15 min walk from Higashiyama Stn (Tabelog; October 2026). Opened 1 April 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin, near the Shinmanomachi Nijo bus stop — 8–15 min walk from Higashiyama Stn',
    cuisine: 'Clay-pot rice breakfast and lunch course at a six-seat counter (Tabelog; 2026 reviews) · the course: a vegetable surinagashi soup, the chef\'s vegetables, tofu from Kitayama with salt or wasabi, simmered eggplant, and a pale dashimaki from eggs of rice-fed hens (September–October 2026) · clay-pot rice cooked to order, about three bowls a pot: salmon, beef sukiyaki, crab (extra), seasonal rice such as matsutake, hamo or anago; plain rice option (August–October 2026) · toppings of ikura, mentaiko, egg and butter; leftover rice as dashi chazuke, or rice balls in bamboo leaf to take home; dessert (September 2026) · about ¥3,000–5,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('土鍋彩膳 とよあけ 京都 聖護院'), menu_url: null,
    notes: '[Clay-pot rice breakfast · Shogoin, six seats from 7 a.m.] A tiny new counter where the owner-chef cooks a clay pot of rice to order for each guest — salmon, beef sukiyaki, crab or the season\'s matsutake or hamo — after a run of small dishes: vegetable soup, Kitayama tofu to eat with salt, simmered eggplant and a strikingly white dashimaki of rice-fed eggs. Finish with dashi chazuke or take rice balls home. Friendly English-speaking host. Book online only (no phone). Daily from 7:00.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), who runs the counter alone'], origin: null,
      background: 'Per Tabelog: opened 1 April 2026, reservation only, with English-speaking staff; registered as an official listing by the shop. Reviewers in 2026 describe a chef who manages everything alone (August and October 2026), explains each ingredient, recommends sharing pots (September 2026) and chats about Kyoto sights and clay pots.',
      philosophy: null, specialty: 'Clay-pot rice; white dashimaki of rice-fed eggs.',
      anecdotes: [
        { text: 'An October 2026 guest was told the Kitayama tofu has a cheese-like flavour, so salt or wasabi suits it better than soy sauce — and, not usually a wasabi fan, found the pairing a revelation.', source: R + 'B537016714/' },
        { text: 'Before cooking the dashimaki, the chef shows guests the eggs: from rice-fed hens, with yolks almost white (October 2026).', source: R + 'B537016714/' },
        { text: 'A September 2026 family shared crab, salmon and hamo pots on the owner\'s advice and stayed chatting about sights, local food and clay pots.', source: R + 'B536091092/' },
      ],
      japanese_sources_summary: '食べログ: 釜飯、左京区聖護院蓮華蔵31 第二近建ビル 1F、京阪三条駅から徒歩10分、地下鉄東山駅から徒歩8分、市バスの Shinmanomachi Nijo 停留所から徒歩1分、毎日 7:00〜15:00、休みは変わることがある、完全予約制 (TableCheck か Instagram)、チャージ料なし、6席 (カウンター)、禁煙、Wi-Fi、英語対応、子どもは大人と同じ料理を食べられる場合のみ、カード・電子マネー・QR 可、2026年4月1日オープン、ヴィーガン・ベジタリアン・グルテンフリー対応の記載。口コミ (2026年8月〜10月、英語): 電話はなくネット予約のみ、店主一人で営む、すり流し、野菜、京都の Kitayama の豆腐 (塩かわさびで)、茄子の煮浸し、米で育てた鶏の白い卵のだし巻き、注文後に炊く土鍋ご飯 (鮭、牛すき焼き、蟹、松茸、鱧、穴子、白ご飯)、いくら・明太子・卵・バターのトッピング、だし茶漬け、残りは笹で包んだおにぎりに、デザート、3,000〜5,000円ほど。',
      confidence: 'medium', sources: [TB, R + 'B533962140/', R + 'B534246349/', R + 'B535309177/', R + 'B535955305/', R + 'B536091092/', R + 'B536245151/', R + 'B537011151/', R + 'B537016714/', R + 'B537158977/', R + 'B537714415/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking host; book online (TableCheck or Instagram), no phone; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区聖護院蓮華蔵31 第二近建ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; opened 1 April 2026; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013772, 135.776716); cross-checked: GSI 京都府京都市左京区聖護院蓮華蔵町31番地 (lot) 42 m; nearest Kyoto record 166 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535955305/', R + 'B537158977/'],
    price_note: 'No item prices read; about ¥3,000–5,000 (Tabelog; 2026 reviews). Booking: ' + BOOK, last_checked: TODAY, items: [
      it('', '', 'Salmon clay-pot rice course', '', 'Course', 'ask', 'no', 'September–October 2026.', 'salmon_donabe'),
      it('', '', 'Beef sukiyaki clay-pot rice course', '', 'Course', 'ask', 'no', 'August–September 2026.', 'sukiyaki_donabe'),
      it('', '', 'Crab clay-pot rice course', '', 'Course', 'ask', 'no', 'Extra charge; September–October 2026.', 'crab_donabe'),
    ] }, {
    cuisine: '6席のカウンターの土鍋ご飯の朝食と昼のコース (食べログ、2026年の口コミ)・コース: 野菜のすり流し、店主の野菜、塩かわさびで食べるKitayama の豆腐、茄子の煮浸し、米で育てた鶏の卵の白いだし巻き (2026年9〜10月)・注文ごとに炊く土鍋ご飯、1つの鍋で約3杯: 鮭、牛すき焼き、蟹 (追加料金)、松茸・鱧・穴子などの季節のご飯、白ご飯も (2026年8〜10月)・いくら、明太子、卵、バターのトッピング、残りはだし茶漬けに、持ち帰りは笹で包んだおにぎりに、デザート (2026年9月)・3,000〜5,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '聖護院、市バスの Shinmanomachi Nijo 停留所の近く。東山駅から徒歩8〜15分',
    gf_detail: '要確認。食べログにグルテンフリー対応の記載はあるが詳細はない。土鍋ご飯、豆腐、野菜、だし巻きのコースで、醤油系の味付けも考えられる (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにヴィーガン・ベジタリアン対応の記載はあるが、コースはだしを使い、だし巻き卵や、魚、蟹、牛のご飯がある (食べログ、2026年の口コミ)。',
    notes: '[土鍋ご飯の朝食・聖護院、朝7時から6席] 店主が一人で切り盛りする小さな新しいカウンター。前菜 (野菜のすり流し、塩で食べるKitayama の豆腐、茄子の煮浸し、米で育てた鶏の卵の真っ白なだし巻き) のあと、客ごとに土鍋ご飯を炊く: 鮭、牛すき焼き、蟹、季節の松茸や鱧。最後はだし茶漬けに、残りはおにぎりにして持ち帰りも。気さくで英語も話す店主。予約はネットのみ (電話なし)。毎日7時から。',
  });
}

// ================================================================ 味彩 のと与
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26003761/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00']);
  put({
    id: 'kyoto_ajisai_notoyo_nishiki', name: '味彩 のと与 (Ajisai no Toyo)', category: 'OMNI',
    lat: 35.004941, lng: 135.764301, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: eel grilled with a house tare (soy-based), served over rice; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel and river-fish restaurant (Tabelog).',
    hours_raw: '11:00–15:00 (last order 14:30); closed Wednesday, or the next weekday when Wednesday is a holiday (Tabelog). Reservations accepted; a booking is held 30 minutes (Tabelog); fills quickly at lunch, so book (August 2026). 22 seats: tables for up to 4 and a sunken kotatsu area for 8; private hire up to 20; non-smoking (Tabelog). Menus in English, Chinese and Korean with photos; children and babies welcome — strollers left on the 1F (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 2F above the family river-fish shop in Nishiki Market, up the stairs beside it; 7 min walk from Karasuma or Shijo stations (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki Market by Yanaginobanba, 2F — 7 min walk from Karasuma Stn',
    cuisine: 'Kansai-style eel of a river-fish shop founded in 1912, grilled over binchotan with the house tare — crisp outside, fluffy inside (Tabelog) · unadon from ¥2,100; jo-unadon with more than half an eel ¥3,700 with liver soup; a whole-eel bowl ¥4,800; hitsumabushi (2026 reviews) · Ajisai Unagi Gozen sets of five items with small dishes, eel roll and dessert: half eel ¥4,500, two-thirds ¥5,000, whole ¥6,000 (Tabelog) · grilled eel liver ¥700; carp sashimi (August–October 2026) · eel and river fish to take away at the 1F shop (2025–2026 reviews) · about ¥3,000–5,000 (Tabelog)',
    website: null, gmaps: gm('味彩 のと与 錦市場'), menu_url: null,
    notes: '[Eel · Nishiki Market, upstairs from the river-fish shop] A quiet townhouse-style room above a river-fish shop in busy Nishiki Market, serving its eel since 1912: Kansai-style, grilled over binchotan until the skin crackles, glazed with a sweetish house tare. Bowls from ¥2,100 by the portion (half, two-thirds, whole), hitsumabushi and gozen sets with eel roll and dessert. The kitchen and floor, grill master included, are all women. English menu. Lunch only; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['All-female team including the grill master (Tabelog)'], origin: null,
      background: 'Per Tabelog: established in 1912 as an eel restaurant run by a river-fish specialist, grilling over binchotan with a house sauce; a cosy townhouse-style space upstairs staffed entirely by women, the grill master included, and welcoming to solo women diners; registered as an official listing by the shop. Reviewers in 2025–2026 describe the river-fish shop on the 1F and eel to take away.',
      philosophy: 'A welcoming room for locals, families and travellers (Tabelog).', specialty: 'Kansai-style grilled eel.',
      anecdotes: [
        { text: 'A July 2026 regular came, as every year, for the Day of the Ox and was glad the prices had not changed since the year before.', source: R + 'B511024891/' },
        { text: 'A September 2026 diner who used to think of Kaneyo for eel in Kyoto now finds the grilling here more meticulous.', source: R + 'B535107152/' },
        { text: 'Through the window by the entrance, a June 2026 guest climbing the stairs could see the eel being grilled under the noren.', source: R + 'B530467138/' },
      ],
      japanese_sources_summary: '食べログ: うなぎ、中京区錦小路通柳馬場東入東魚屋町173 2F、阪急烏丸駅・地下鉄四条駅から徒歩約7分、11:00〜15:00 (L.O.14:30)、水曜定休 (祝日は営業し振替休み)、予約可 (30分を過ぎると取り消しの場合あり)、22席、掘りごたつ、貸切20名まで、禁煙、英語・中国語・韓国語の写真付きメニュー、子ども可 (ベビーカーは1階に)、カード・電子マネー・QR 可。店の紹介: 1912年創業、川魚の専門店が営むうなぎ店、自家製のたれと備長炭、外はカリッと中はふんわり、町家風の空間、焼き手を含め女性スタッフのみ、「Ajisai Unagi Gozen」5品 (半身4,500円、3分の2 5,000円、1本6,000円)。口コミ (2025年7月〜2026年10月、英語): 1階は川魚の店で持ち帰り、2階が食事処、関西風のカリッとした鰻、甘めのたれ、うな丼2,100円、上うな丼3,700円 (肝吸い付き)、一本の丼4,800円、ひつまぶし、肝焼き700円、薄切りの鯉、土用の丑の日。',
      confidence: 'medium', sources: [TB, R + 'B511024891/', R + 'B529495005/', R + 'B530467138/', R + 'B531712479/', R + 'B533469063/', R + 'B533874959/', R + 'B534887916/', R + 'B535107152/', R + 'B536283670/', R + 'B537335900/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean picture menus; book for lunch; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通柳馬場東入東魚屋町173 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004941, 135.764301); cross-checked: GSI 京都府京都市中京区東魚屋町173番地 (lot) 15 m; nearest Kyoto record 68 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B529495005/', R + 'B533469063/', R + 'B537335900/'],
    price_note: 'Gozen prices from Tabelog (tax included); bowl prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Unadon', '¥2,100', 'Bowls', 'no', 'no', 'August 2026.', 'unadon'),
      it('', '', 'Jo-unadon (over half an eel) with liver soup', '¥3,700', 'Bowls', 'no', 'no', 'June 2026.', 'jo_unadon'),
      it('', '', 'Whole-eel bowl ("Ippon no Se Don")', '¥4,800', 'Bowls', 'no', 'no', 'October 2026.', 'ippon_don'),
      it('', '', 'Ajisai Unagi Gozen (two-thirds eel, five items)', '¥5,000', 'Sets', 'no', 'no', 'Tabelog course.', 'gozen_23'),
      it('', '', 'Grilled eel liver', '¥700', 'À la carte', 'no', 'no', 'October 2026.', 'kimoyaki'),
    ] }, {
    cuisine: '1912年創業の川魚の店の関西風の鰻、自家製のたれと備長炭で外はカリッと中はふんわり (食べログ)・うな丼2,100円から、半身以上の上うな丼3,700円 (肝吸い付き)、一本の丼4,800円、ひつまぶし (2026年の口コミ)・「Ajisai Unagi Gozen」 5品 (小鉢、う巻き、デザート): 半身4,500円、3分の2 5,000円、1本6,000円 (食べログ)・肝焼き700円、薄切りの鯉 (2026年8〜10月)・1階の店で鰻と川魚の持ち帰り (2025〜2026年の口コミ)・3,000〜5,000円ほど (食べログ)',
    neighborhood: '錦市場、柳馬場の東の2階。烏丸駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。醤油系の自家製のたれで焼く鰻をご飯にのせる。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鰻と川魚の店 (食べログ)。',
    notes: '[鰻・錦市場、川魚の店の2階] にぎやかな錦市場の川魚の店の上、静かな町家風の座敷。1912年から続く鰻は関西風で、備長炭で皮がパリッとするまで焼き、甘めの自家製のたれで仕上げる。丼は半身、3分の2、1本と量を選べて2,100円から。ひつまぶし、う巻きとデザート付きの御膳も。焼き手を含め女性だけで営む。英語メニューあり。昼のみ、水曜休み。',
  });
}

// ================================================================ ブーランジェリー モリモリ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26032453/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:30', '18:00']);
  put({
    id: 'kyoto_boulangerie_morimori', name: 'ブーランジェリー モリモリ (Boulangerie MoriMori)', category: 'OMNI',
    lat: 35.013795, lng: 135.760047, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a wheat bakery — baguettes of Hokkaido wheat, croissants, pies and curry bread (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Baguettes and plain loaves may suit, but there is no ingredient information; most items use butter, cream, cheese or beef curry (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 7:30–18:00; closed Monday and some irregular days; hours may change (Tabelog). Bread can be reserved from a single item (Tabelog). Cash or PayPay only (Tabelog original 現金、PayPay払いのみ). Self-service, except chilled items; breads come bagged (March and August 2026). Takeaway only; a paid car park next door (Tabelog). Nijo-dori west of Higashinotoin; about 300 m from Marutamachi Stn (Tabelog). Opened 28 May 2019 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-dori west of Higashinotoin — a short walk from Marutamachi Stn',
    cuisine: 'Small neighbourhood bakery, mostly savoury breads at about ¥250–300 (May 2026) · baked (not fried) beef curry bread ¥250–260, featured on the TV show "Matsuko\'s Unknown World" (March–August 2026) · baguette of Hokkaido wheat ¥340; sliced loaf and round bread of the same dough (May and August 2026) · pain au chocolat ¥280, triangle chocolate pie ¥420, apple pie ¥420, canelé ¥320 (March–October 2026) · Gorgonzola with honey ¥230, cream cheese and honey raisin, chocolate orange, cream bread (March–August 2026) · under ¥1,000 (Tabelog)',
    website: null, gmaps: gm('ブーランジェリー モリモリ 京都 二条'), menu_url: null,
    notes: '[Bakery · Nijo Higashinotoin, south of Marutamachi] A small bakery with a big savoury range at everyday prices: its baked beef curry bread, as seen on TV, a chewy high-hydration dough, Hokkaido-wheat baguettes, Gorgonzola and honey, cream cheese and raisin, plus croissants, apple pie and canelés. Bread can be reserved by phone even one piece. Cash or PayPay only. Open from 7:30; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Baker and staff (unnamed)'], origin: null,
      background: 'Per Tabelog: opened 28 May 2019; reservations taken from one bread. Reviewers in 2026 describe a charming small shop in an area thick with bakeries, a baked curry bread featured on "Matsuko\'s Unknown World" (May and June 2026), and a soft, chewy high-hydration dough (June 2026).',
      philosophy: null, specialty: 'Baked curry bread.',
      anecdotes: [
        { text: 'A May 2026 bread tourist made this the second stop on a walk from Shio Pan Jiro to Nishiki Market, buying the baked curry bread seen on "Matsuko\'s Unknown World" and a Hokkaido-wheat baguette.', source: R + 'B529169685/' },
        { text: 'An August 2026 shopper found the sliced loaf and the round bread, made from the same dough, so different in texture as to seem like two products.', source: R + 'B535366372/' },
      ],
      japanese_sources_summary: '食べログ: パン、中京区二条通東洞院西入仁王門町11、丸太町駅から308m、火〜日 7:30〜18:00、月曜定休と不定休、パン1個から予約可、現金と PayPay のみ、禁煙、隣に有料駐車場、2019年5月28日オープン。口コミ (2026年3月〜10月、英語): 小さなパン屋、惣菜パンが多い、250〜300円ほど、冷蔵品以外はセルフ、袋入り、テレビ「Matsuko’s Unknown World」で紹介された焼きカレーパン250〜260円、北海道産小麦のバゲット340円、食パンと丸パン、パン・オ・ショコラ280円、三角チョコパイ420円、アップルパイ420円、カヌレ320円、ゴルゴンゾーラとはちみつ230円、クリームチーズとはちみつレーズン、チョコオレンジ、クリームパン、加水の多いもちもちの生地。',
      confidence: 'medium', sources: [TB, R + 'B523858106/', R + 'B524950223/', R + 'B526236165/', R + 'B529169685/', R + 'B530457590/', R + 'B530918218/', R + 'B532819134/', R + 'B534763792/', R + 'B535194377/', R + 'B535366372/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service bagged breads; pay in cash or PayPay; reserve by phone if needed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通東洞院西入仁王門町11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013795, 135.760047); cross-checked: GSI 京都府京都市中京区仁王門町11番地 (lot) 4 m; nearest Kyoto record 90 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529169685/', R + 'B524950223/'],
    price_note: 'Prices from March–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Baked curry bread', '¥260', 'Bread', 'no', 'no', 'May 2026.', 'curry_pan'),
      it('', '', 'Baguette (Hokkaido wheat)', '¥340', 'Bread', 'no', 'ask', 'May 2026.', 'baguette'),
      it('', '', 'Pain au chocolat', '¥280', 'Viennoiserie', 'no', 'no', 'October 2026.', 'pain_choco'),
      it('', '', 'Canelé', '¥320', 'Sweets', 'no', 'no', 'October 2026.', 'canele'),
    ] }, {
    cuisine: '惣菜パンが多い小さな町のパン屋、250〜300円ほど (2026年5月)・テレビ番組「Matsuko’s Unknown World」で紹介された、揚げない牛肉の焼きカレーパン250〜260円 (2026年3〜8月)・北海道産小麦のバゲット340円、同じ生地の食パンと丸パン (2026年5月・8月)・パン・オ・ショコラ280円、三角チョコパイ420円、アップルパイ420円、カヌレ320円 (2026年3〜10月)・ゴルゴンゾーラとはちみつ230円、クリームチーズとはちみつレーズン、チョコオレンジ、クリームパン (2026年3〜8月)・1,000円未満 (食べログ)',
    neighborhood: '東洞院の西の二条通。丸太町駅から歩いてすぐ',
    gf_detail: 'グルテンフリー不可。北海道産小麦のバゲット、クロワッサン、パイ、カレーパンの小麦のパン屋 (2026年の口コミ)。',
    vegan_detail: '要確認。バゲットや食パンは合うかもしれないが原材料の情報はない。多くはバター、クリーム、チーズ、牛肉のカレーを使う (2026年の口コミ)。',
    notes: '[パン・二条東洞院、丸太町の南] 惣菜パンが豊富で手頃な小さなパン屋。テレビで紹介された焼きカレーパン、加水の多いもちもちの生地、北海道産小麦のバゲット、ゴルゴンゾーラとはちみつ、クリームチーズとレーズン、クロワッサン、アップルパイ、カヌレ。パンは1個から電話で予約可。現金か PayPay のみ。7時半から、月曜休み。',
  });
}

save();
