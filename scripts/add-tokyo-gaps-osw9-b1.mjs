// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 1.
//   + 鮨 末吉 Sushi Sueyoshi (6-seat omakase sushi counter by Roppongi crossing, opened July 2026; BAR末吉 after 22:00)
//   + 鮨×酒×肴 艶ノコク Sushi × Sake × Sakana Tsuyano Koku (basement sake bar with sushi, open to 05:00; weekday lunch)
//   + 鮨はじめ Sushi Hajime (8-seat late-night sushi counter on Imoaraisaka, opened August 2024)
//   + 宗胡 Sougo (modern shojin kaiseki by Daisuke Nomura of the Daigo family; lunch sets from ¥1,980)
//   Skipped: 寿司赤酢 六本木 13254973 — Sushi Akazu group branch (sushiakazu.com lists 8 shops and recruits franchisees);
//   two Osaka branches already in data (osaka_sushi_akasu_shinsaibashi, osaka_sushi_akazu_namba_premium).
//   Chain check. Sueyoshi: one shop (official site lists only 鮨末吉 / BAR末吉 at one address). Tsuyano Koku: one listing,
//   no branches found (hitosara lists the same address). Hajime: one listing, no branches found. Sougo: two shops, this one
//   and 淡路宗胡 at THE PASONA on Awaji (official site) — not a chain. None is in data/tokyo.json by name, Tabelog id or
//   address (六本木3-11-10, 4-9-1, 6-1-5, 6-1-8); no Tokyo record lies within 170 m of Roppongi Stn except the hidden
//   placeholder tokyo3__409 (ベジタリアンカレー ナマステ), a different shop. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13254973', '寿司赤酢 六本木: Sushi Akazu group branch (sushiakazu.com: 8 shops, franchise recruitment); Osaka branches already in data (osaka_sushi_akasu_shinsaibashi, osaka_sushi_akazu_namba_premium)');

// ================================================================ 鮨 末吉
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13324482/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://preview.sueyoshi.pages.dev/'; const IG = 'https://www.instagram.com/roppongi_sueyoshi/';
  const H = day(['12:00', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_sushi_sueyoshi_roppongi', name: '鮨 末吉 (Sushi Sueyoshi)', category: 'OMNI',
    lat: 35.6633, lng: 139.732973, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase only, so swaps must be arranged with the chef. Nothing is called gluten-free; the course includes soy-sauce-marinated and shrimp-miso-soy-sauce red shrimp, tuna braised in miso, karasumi wrapped in mochi, and on some days soft-roe spring rolls with house XO sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fish and seafood, with clam broth and shrimp miso soup.',
    hours_raw: 'Sushi daily 12:00–14:00 (last order 12:30; lunch only with a reservation made by 17:00 the day before) and 17:00–22:00 (last order 20:30) (Tabelog; official site). The official site lists closing days as irregular. From 22:00 to 04:00 the same counter runs as BAR末吉 (Bar Sueyoshi), with 60-minute all-you-can-drink at ¥3,000 (official site). Omakase courses only; seating 90 minutes, all-you-can-drink 60 minutes; arrive on time; seat-only bookings choose a course on arrival (Tabelog). Bookings by phone or online. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 6 counter seats; non-smoking; private hire up to 20. Opened 3 July 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-11-10, Coco Roppongi Building 1F, by Roppongi crossing — 1 min from Roppongi Stn exit 5',
    cuisine: 'Omakase sushi only (official site, tax included, read November 2026): omakase ¥8,800; with 60-minute all-you-can-drink ¥11,000 (the most popular); with hairy-crab starter, sea-urchin nigiri and all-you-can-drink ¥15,400 · domestic fresh hon-maguro from まぐろ大善 at Toyosu, a tuna dealer the site says was founded 400 years ago, with rare cuts such as cheek, neck and tail compared side by side · local fish sent direct by fishermen in Hokkaido, Nagasaki\'s Goto islands and elsewhere · dishes in September–October 2026 courses: clam broth with whelk, Nemuro hokke with fresh wasabi, tuna braised at the counter in Kyoto red miso and Hatcho miso with tofu and daikon, kombu-cured flounder with monkfish liver and nara-zuke, homemade karasumi wrapped in mochi, kazunoko, smoked mackerel, live shirasu from Kashima, red shrimp seared with shrimp-miso soy sauce, grilled eel, anago, tamago, brown-sugar ice cream · sea-urchin nigiri as an extra ¥1,100 (September 2026) · sake and whisky; Ebisu beer',
    website: SITE, gmaps: gm('鮨 末吉 六本木3-11-10'), menu_url: SITE,
    notes: "[Sushi · Roppongi, a six-seat omakase counter steps from the crossing] Opened in July 2026 on the ground floor a few steps from Roppongi Station exit 5: a single hinoki counter for six, omakase only, at a price unusual for Roppongi (¥8,800, or ¥11,000 with an hour of all-you-can-drink sake). The tuna is fresh domestic hon-maguro from まぐろ大善 at Toyosu, a dealer the shop's site says was founded 400 years ago (reviewers link it to Tokugawa Ieyasu), served as rare cuts like neck, cheek and tail; other fish come straight from fishermen around Japan, and you can watch videos of the buying and the tuna cutting as you eat. A course in autumn 2026 ran about 15 to 17 dishes: Nemuro hokke with fresh wasabi, tuna braised in two misos at the counter, karasumi in grilled mochi, smoked mackerel, red shrimp seared with shrimp-miso soy sauce, grilled eel, anago, tamago and brown-sugar ice cream. Diners in 2026 liked the chef's conversation, and one September party got talking with neighbouring guests; one September regular found the second visit less generous (sea urchin had become a ¥1,100 extra). At 22:00 the room turns into BAR末吉 until 4 am. Lunch only with a booking made the day before.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed in the sources read)'], origin: null,
      background: 'Per an October 2026 review, the chef spent over five years travelling to fishing ports around Japan and buys local fish direct from trusted fishermen. An October 2026 diner writes that the chef once ran a restaurant in Germany and has also worked as a bartender. The head chef goes to the market in person (October 2026 review). Opened 3 July 2026 (Tabelog).',
      philosophy: 'To share "excitement" and "fun" with guests through omakase sushi; high quality without stiffness, a place where adults can drop in and relax (official site).', specialty: 'Fresh hon-maguro rare cuts from まぐろ大善; tuna braised in miso; karasumi mochi.',
      anecdotes: [
        { text: '"The chef has spent over five years traveling to fishing ports across the country, sourcing fresh local fish directly from fishermen." — October 2026, ¥11,000 course with all-you-can-drink.', source: R + 'B537047358/' },
        { text: '"The chef has experience running a restaurant in Germany and has also worked as a bartender." — October 2026, ¥15,400 course.', source: R + 'B537434218/' },
        { text: '"The sea urchin I had last time now comes with an additional charge of JPY 1,100, and there were no spring rolls or pickles this time." — September 2026, second visit.', source: R + 'B532539994/' },
        { text: '"It seems to transform into a bar later in the evening, so if you want to enjoy sushi at a leisurely pace, it\'s best to visit early." — September 2026.', source: R + 'B535828370/' },
      ],
      japanese_sources_summary: '公式サイト: 鮨末吉 (一部・おまかせ鮨) とBAR末吉 (二部)、同じカウンター。鮨はディナー17:00〜22:00、ランチ12:00〜14:00 (前日17:00までの予約制)、BARは22:00〜28:00、不定休。おまかせコースのみ (滞在約90分): おまかせ鮨8,800円、飲み放題付き11,000円、毛ガニつまみ・うに握り付き飲み放題付き15,400円 (税込)。創業400年の豊洲「まぐろ大善」から国産の生本まぐろを直接仕入れ、赤身から希少部位まで食べ比べ。北海道や長崎・五島などの漁師直送の地魚を江戸前の技で。檜の一枚板カウンター。BARの飲み放題60分3,000円、延長30分1,500円、白州・響・山崎も。六本木3-11-10 ココ六本木ビル1F。Instagram @roppongi_sueyoshi、@barsueyoshi。食べログ (店舗会員): 6席、カウンターのみ、2026年7月3日オープン、毎日12:00〜14:00、17:00〜22:00、カード可、英語のスタッフ。',
      confidence: 'medium', sources: [TB, SITE, IG, R + 'B532539994/', R + 'B535504048/', R + 'B535828370/', R + 'B535914430/', R + 'B536120825/', R + 'B537047358/', R + 'B537280102/', R + 'B537285120/', R + 'B537434218/', R + 'B537566037/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists English-speaking staff; omakase only, so there is nothing to order; a 2026 diner thought it would suit overseas visitors.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-11-10 ココ六本木ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026. Opened 3 July 2026.' },
    pin_source: `Tabelog ${TB} (35.663300, 139.732973); GSI 東京都港区六本木三丁目11番 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, TB, R + 'B532539994/'],
    price_note: 'Prices from the official site (tax included; read November 2026); the sea-urchin extra from a September 2026 review.', last_checked: TODAY, items: [
      it('おまかせ鮨', '', 'Omakase sushi course', '¥8,800', 'Course', 'ask', 'no', 'Official site; about 90 minutes.', 'omakase'),
      it('飲み放題付き おまかせ鮨', '', 'Omakase sushi with 60-minute all-you-can-drink', '¥11,000', 'Course', 'ask', 'no', 'Official site; Tabelog "most popular".', 'omakase_nomihodai'),
      it('毛ガニつまみ・うに握り付き 飲み放題付きおまかせ鮨', '', 'Omakase with hairy-crab starter, sea-urchin nigiri and all-you-can-drink', '¥15,400', 'Course', 'ask', 'no', 'Official site.', 'omakase_kegani_uni'),
      it('', '', 'Sea-urchin nigiri (extra)', '¥1,100', 'Sushi', 'ask', 'no', 'September 2026 review.', 'uni_extra'),
      it('飲み放題（60分）', '', 'BAR末吉 all-you-can-drink, 60 minutes (from 22:00)', '¥3,000', 'Drinks', '', '', 'Official site; extension 30 min ¥1,500; plus 10% service and tax.', 'bar_nomihodai'),
    ] }, {
    cuisine: 'おまかせ鮨のみ (公式サイト、税込み、2026年11月に確認): おまかせ鮨8,800円、飲み放題60分付き11,000円 (一番人気)、毛ガニつまみ・うに握り付きの飲み放題付き15,400円・豊洲「まぐろ大善」の国産の生本まぐろ (サイトでは創業400年)、ほほ、ネック、尾の身などの希少部位を食べ比べ・北海道や長崎・五島などの漁師から直送の地魚・2026年9月〜10月のコースの例: 貝の出汁とつぶ貝、Nemuro のほっけと生わさび、カウンターで炊く鮪の味噌煮 (Kyoto の赤味噌と Hatcho miso、豆腐と大根)、ひらめの昆布締めとあん肝の奈良漬け、自家製からすみの餅巻き、数の子、鯖の燻製、Kashima の生しらす、海老味噌醤油で炙る赤海老、うなぎの蒲焼き、穴子、玉子、黒糖アイス・うに握りの追加1,100円 (2026年9月)・日本酒とウイスキー、エビスビール',
    neighborhood: '六本木3-11-10 ココ六本木ビル1F、六本木の交差点のそば。六本木駅5番出口から徒歩1分',
    gf_detail: '要確認。おまかせのみなので、差し替えは大将に相談を。グルテンフリーの説明はなく、コースには海老味噌醤油の赤海老、鮪の味噌煮、からすみの餅巻き、日によっては自家製XO醤の白子の春巻きも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介のおまかせで、貝の出汁や海老の味噌汁も出る。',
    notes: '[鮨・六本木、交差点そばの6席のおまかせカウンター] 2026年7月、六本木駅5番出口から数歩の1階に開いた、檜の一枚板のカウンター6席だけの店。おまかせのみで、六本木では珍しい値段 (8,800円、飲み放題1時間付きで11,000円)。まぐろは豊洲「まぐろ大善」の国産の生本まぐろで、サイトによれば創業400年の仲卸 (口コミでは Tokugawa Ieyasu とのゆかりも)。ネック、ほほ、尾の身などの希少部位を出し、ほかの魚は全国の漁師から直送。仕入れやまぐろの解体の動画を見ながら食べられる。2026年秋のコースは15〜17品ほどで、Nemuro のほっけと生わさび、カウンターで炊く二種の味噌の鮪の味噌煮、焼き餅で包んだからすみ、鯖の燻製、海老味噌醤油で炙る赤海老、うなぎの蒲焼き、穴子、玉子、黒糖アイス。2026年の口コミでは大将との会話が楽しいという声が多く、9月のあるグループは隣の客とも打ち解けたという。9月に2度目の客は前回よりうにが1,100円の追加になったと残念がっていた。22時からは同じ店がBAR末吉になり朝4時まで。ランチは前日までの予約制。',
  });
}

// ================================================================ 鮨×酒×肴 艶ノコク
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13265451/'; const R = TB + 'dtlrvwlst/';
  const HITO = 'https://hitosara.com/0031557792/';
  const WD = day(['11:00', '14:00'], ['17:00', '05:00']); const WE = day(['17:00', '05:00']);
  put({
    id: 'tokyo_tsuyano_koku_roppongi', name: '鮨×酒×肴 艶ノコク (Sushi × Sake × Sakana Tsuyano Koku)', category: 'OMNI',
    lat: 35.663922, lng: 139.732564, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Sushi with red-vinegar rice and many small dishes; the weekday lunch has an udon set and omurice with demi-glace (May 2026); soy sauce and miso are likely throughout.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog\'s listing ticks "vegetarian options" and "particular about vegetables", but no vegan dish is named; the menu is built around fish, sushi and sake snacks, and lunch comes with miso soup.',
    hours_raw: 'Mon–Fri lunch 11:00–14:00 (last order 13:30); every day 17:00–05:00 (food last order 04:00, drinks 04:30) (Tabelog). Lunch had paused and resumed in May 2026 (review). Cover charge ¥1,000 a person; private rooms add a ¥1,000 room fee (¥2,000 in all); karaoke ¥2,000 a person (Tabelog). 50 seats: counter, sofa and box seats, private rooms for 2, 4, 6 or 8; heated-tobacco smoking area (Tabelog; an April 2026 diner notes iQOS is allowed). Cards (incl. UnionPay), IC cards, PayPay and au PAY. Children welcome, with a kids\' menu on request (Tabelog). Opened 22 November 2021 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 4-9-1, 佐竹ビル B1F, across from Azabu Police Station — 1 min from Roppongi Stn exit 6',
    cuisine: 'Sake bar with sushi and small dishes: over 300 sakes (400 in another line of the same listing) from 90 ml, three-sake tasting sets and all-you-can-drink (Tabelog) · Edomae-style sushi with red-vinegar rice, fish from Toyosu (February 2026 review); nigiri as an assorted platter (May 2026) · courses with all-you-can-drink sake (Tabelog, tax included, autumn 2026): 7 dishes ¥8,000 (seasonal starters, sashimi, chicken grilled with Saikyo miso, seasonal takikomi rice); 8 dishes ¥10,000 (chawanmushi, sashimi with hon-maguro, wagyu roast, hon-maguro nigiri); 9 dishes with sea urchin ¥16,000 · à la carte in May 2026: firefly squid in soy sauce, pickled mustard greens, dashi-maki tamago, salmon-roe onigiri · weekday lunch (May 2026): seafood lunch, 10 a day, ¥1,980; special udon set ¥1,200; omurice ¥1,100 with sides and soup (cheese +¥100, large +¥200); truffle omurice ¥1,300 (June 2026); soft drinks ¥300',
    website: 'https://site.locaop.jp/tsuyanokoku', gmaps: gm('艶ノコク 六本木4-9-1'), menu_url: TB + 'dtlmenu/',
    notes: "[Sake bar · Roppongi, sushi and sake in a basement until 5 am] Down the stairs of a building facing Azabu Police Station, a minute from Roppongi crossing: a back bar lined with sake bottles, a counter, sofas, box seats with what one diner called a nostalgic snack-bar feel, private rooms and karaoke. The draw is the sake list, over 300 labels poured from 90 ml, in tasting flights or all-you-can-drink, served with red-vinegar sushi and small dishes until 5 am. A May 2026 group of three paid about ¥18,000 after a ¥5,000-a-head sake all-you-can-drink of some 30 labels (each guest must order a dish); others come after the last train or simply to stay till the first one. Courses with all-you-can-drink run ¥8,000–¥16,000. On weekdays it serves a cheap lunch: fluffy omurice, an udon set, and a seafood bowl limited to ten. An August 2026 reviewer says it is popular with celebrities and often used by the media for interviews. A ¥1,000 cover applies; English-speaking staff.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 22 November 2021 (Tabelog). The shop says English-speaking staff are available and offers sake from 90 ml so beginners can find a sake to suit (Tabelog). A regular mentions the manager seeing guests out (June and July 2025 visits).',
      philosophy: 'A sake journey for all the senses — aroma, temperature, aftertaste — for beginners and connoisseurs alike (Tabelog shop text).', specialty: 'Over 300 sakes from 90 ml; red-vinegar sushi; late hours.',
      anecdotes: [
        { text: '"It’s open until 5 AM. This is perfect not only for second or third stops during a night out but also for those who want to enjoy a proper meal to wrap up the evening." — April 2026.', source: R + 'B525905560/' },
        { text: '"Looking at the menu, I saw they offered an all-you-can-drink course featuring about 30 carefully selected types of Japanese sake… we had to order at least one dish per person." — May 2026; about ¥18,000 for three.', source: R + 'B528912268/' },
        { text: '"As a popular spot for celebrities, it’s hard to tell if it’s a bar, sushi restaurant, or supper club." — August 2026.', source: R + 'B532935272/' },
        { text: '"The popular fluffy omurice is exquisite, but the limited-quantity seafood rice bowl of the day is not to be missed." — September 2026, lunch.', source: R + 'B536931300/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨×酒×肴 艶ノコク、港区六本木4-9-1 佐竹ビルB1F、六本木駅6番出口から徒歩1分、月〜金11:00〜14:00 (L.O.13:30)、毎日17:00〜翌5:00 (フードL.O.4:00、ドリンクL.O.4:30)、チャージ料お一人様1000円、個室料1000円 (計2000円)、カラオケ1人2000円、50席、個室2・4・6・8名、加熱式たばこ専用の喫煙所、カード・電子マネー・QR可、子ども可、2021年11月22日オープン。日本酒300種以上を90mlから、3種の飲み比べ、飲み放題。赤酢の江戸前鮨。飲み放題付きコース8,000円・10,000円・16,000円。ひとさら: 日本酒ダイニング 艶ノコク、同じ住所と電話番号。口コミ(2026年2月〜9月): 豊洲の魚、ランチ再開 (海鮮ランチ10食1,980円、特製うどん定食1,200円、オムライス1,100円)、トリュフのオムライス1,300円、日本酒飲み放題約30種で1人5,000円、1人1品の注文が必要、Azabu Police Station の向かい、芸能人に人気、朝5時まで。',
      confidence: 'medium', sources: [TB, HITO, R + 'B472136312/', R + 'B508350023/', R + 'B525140892/', R + 'B525394369/', R + 'B525905560/', R + 'B528912268/', R + 'B529389777/', R + 'B532935272/', R + 'B536449606/', R + 'B536931300/'] },
    cultural_comfort: { level: 'english', note: 'The shop says English-speaking staff are available; menu with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木4-9-1 佐竹ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with autumn 2026 courses; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.663922, 139.732564); GSI 東京都港区六本木四丁目9番 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B472136312/', R + 'B529389777/'],
    price_note: 'Course prices from Tabelog (tax included; autumn 2026); lunch prices from May and June 2026 reviews. ¥1,000 cover in the evening.', last_checked: TODAY, items: [
      it('', '', 'Autumn casual course, 7 dishes, with all-you-can-drink sake', '¥8,000', 'Course', 'ask', 'no', 'Tabelog.', 'course_8000'),
      it('', '', 'Wagyu roast and hon-maguro nigiri course, 8 dishes, with all-you-can-drink sake', '¥10,000', 'Course', 'ask', 'no', 'Tabelog.', 'course_10000'),
      it('', '', 'Sea-urchin and nigiri course, 9 dishes, with all-you-can-drink sake', '¥16,000', 'Course', 'ask', 'no', 'Tabelog.', 'course_16000'),
      it('', '', 'Seafood lunch (10 a day, weekdays)', '¥1,980', 'Lunch', 'ask', 'no', 'May 2026 review.', 'seafood_lunch'),
      it('', '', 'Special udon set (weekday lunch)', '¥1,200', 'Lunch', 'no', 'ask', 'May 2026 review.', 'udon_set'),
      it('', '', 'Omurice with sides and soup (weekday lunch)', '¥1,100', 'Lunch', 'ask', 'no', 'May 2026 review; ketchup or demi-glace; truffle version ¥1,300 (June 2026).', 'omurice'),
    ] }, {
    cuisine: '鮨と肴の日本酒バー: 日本酒300種以上 (同じページの別の箇所では400種) を90mlから、3種の飲み比べ、飲み放題 (食べログ)・赤酢のシャリの江戸前鮨、豊洲の魚 (2026年2月の口コミ)、握りは盛り合わせで (2026年5月)・日本酒飲み放題付きのコース (食べログ、税込み、2026年秋): 7品8,000円 (季節の前菜、お造り、若鶏の西京焼き、季節の炊き込みご飯)、8品10,000円 (茶碗蒸し、本鮪のお造り、和牛のロースト、本鮪中心の握り)、うに付き9品16,000円・2026年5月の一品料理: ホタルイカの醤油漬け、からし菜の漬物、だし巻き玉子、いくらのおにぎり・平日ランチ (2026年5月): 海鮮ランチ10食限定1,980円、特製うどん定食1,200円、小鉢とスープ付きのオムライス1,100円 (チーズ+100円、大盛り+200円)、トリュフのオムライス1,300円 (2026年6月)、ソフトドリンク300円',
    neighborhood: '六本木4-9-1 佐竹ビルB1F、Azabu Police Station の向かい。六本木駅6番出口から徒歩1分',
    gf_detail: '要確認。グルテンフリーの説明はない。赤酢のシャリの鮨と肴が多く、平日ランチにはうどん定食やデミグラスソースのオムライスも (2026年5月)。醤油や味噌はほぼ全体に使われているとみて。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」「野菜にこだわる」とあるが、ヴィーガンの料理名は出ていない。魚、鮨、酒の肴が中心で、ランチには味噌汁が付く。',
    notes: '[日本酒バー・六本木、朝5時まで鮨と日本酒の地下の店] 六本木の交差点から1分、Azabu Police Station の向かいのビルの地下。日本酒の瓶が並ぶバックバー、カウンター、ソファ、ある客がなつかしいスナックのようと書いたボックス席、個室とカラオケもある。目当ては300種を超える日本酒で、90mlから、飲み比べや飲み放題で、赤酢の鮨や肴と朝5時まで。2026年5月の3人組は約30種の日本酒飲み放題 (1人5,000円、1人1品の注文が必要) で約18,000円。終電後に来る人も始発まで過ごす人もいる。飲み放題付きコースは8,000〜16,000円。平日は安いランチもあり、ふわふわのオムライス、うどん定食、10食限定の海鮮丼。2026年8月の口コミでは芸能人に人気で、取材にもよく使われるという。チャージ1,000円、英語を話すスタッフもいる。',
  });
}

// ================================================================ 鮨はじめ
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13300027/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '01:00']); const F = day(['18:00', '03:00']);
  put({
    id: 'tokyo_sushi_hajime_roppongi', name: '鮨はじめ (Sushi Hajime)', category: 'OMNI',
    lat: 35.662581, lng: 139.732524, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Nigiri are seasoned at the counter (some pieces marinated or brushed with sauce, e.g. swordfish soaked a day in sake and mirin, October 2026), and the starters include squid shumai with ponzu (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and seafood counter; the course ends with a crustacean miso soup (October 2026).',
    hours_raw: 'Sun–Thu and holidays 18:00–01:00 (last order 00:30); Fri–Sat 18:00–03:00 (last order 02:30) (Tabelog). A 10% late-night charge applies after 22:00 (Tabelog). Bookings online; arrival times in 15-minute steps (July 2026 review). 8 seats at an L-shaped counter (Tabelog; July 2026 review); non-smoking. Cards, IC cards, e-money and QR (PayPay, Alipay and others) (Tabelog). English menu and English-speaking staff (Tabelog). Opened 8 August 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 6-1-5, グッドワークビル 1F, on Imoaraisaka — 1 min from Roppongi Stn exit 3 (Hibiya / Oedo lines)',
    cuisine: 'Casual counter sushi, omakase or à la carte (Tabelog, tax included): omakase of 10 nigiri including sea urchin, 2 small dishes and miso soup ¥7,700; the same with 90-minute all-you-can-drink sake, shochu, wine and beer ¥11,000; with 60-minute all-you-can-drink without sake ¥9,900 · a six-piece nigiri course with miso soup also offered (October 2026) · shari blended from rice vinegar and red vinegar (July 2026); thick-cut toppings and a little more rice than classic Edomae, by the chef\'s choice (October 2026) · pieces in autumn 2026: natural hon-maguro from Shiogama, horse mackerel, kasugo-dai, striped jack, three sweet shrimp in one piece, grilled sanma with grated daikon, kinmedai, mehikari hand roll with homemade nori tsukudani, swordfish marinated a day, purple sea-urchin gunkan; starters such as squid shumai with homemade ponzu · extras (September 2026): sardine ¥600, tekka maki ¥1,100, half "Hajime roll" (fatty tuna, salmon roe, eel) ¥1,200 · sake list includes Nabeshima, Katsukoma and the chef\'s home-prefecture Koeki Kiku',
    website: null, gmaps: gm('鮨はじめ 六本木6-1-5'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Roppongi, an 8-seat late-night counter on Imoaraisaka] A minute from Roppongi crossing, on the ground floor facing Imoaraisaka: eight seats at an L-shaped counter, open from 18:00 until 1 am, and 3 am at weekends. The young chef, from Saga and previously at Sushi Ryuta in Roppongi, serves an omakase of ten nigiri with sea urchin, two small dishes and miso soup for ¥7,700, or ¥11,000 with 90 minutes of all-you-can-drink sake and wine. The rice blends rice vinegar and red vinegar, the toppings are cut thick and the rice a little generous, on purpose, the chef told an October 2026 diner, because the course has few pieces. Autumn 2026 courses brought Shiogama hon-maguro, kasugo-dai, three sweet shrimp in one piece, grilled sanma, kinmedai and a purple sea-urchin gunkan; a monthly regular adds the Hajime roll of fatty tuna, salmon roe and eel. There is no kitchen, so starters are simple (July 2026). A September 2026 diner counted about half the guests from overseas; others use it as a second stop. A 10% late-night charge applies after 22:00.",
    chef_bio: { chef_name: 'Kazuya (given name only, per a September 2026 review)', roles: ['Head chef (September 2026 review: "the head chef, Kazuya")'], origin: 'Saga Prefecture (October 2026 reviews)',
      background: 'Previously at Sushi Ryuta in Roppongi (Tabelog shop text; October 2026 reviews). Described as a young chef (October 2026 reviews). Opened 8 August 2024; a second-anniversary all-you-can-eat event in August 2026 (review of an invitation event). One regular\'s July and August 2026 visits mention "the owner" pouring sake and chatting; the sources read do not say whether owner and chef are the same person.',
      philosophy: 'Authentic counter sushi, casual and affordable (Tabelog shop text). With only ten pieces in the course, toppings are cut thicker and the rice made a little larger than traditional Edomae for satisfaction (October 2026 review).', specialty: 'Ten-piece omakase with sea urchin; the Hajime roll.',
      anecdotes: [
        { text: '"Thanks to the charming personality of the head chef, Kazuya, I always have a delightful and delicious experience." — September 2026, third monthly visit, ¥11,000 course.', source: R + 'B531760209/' },
        { text: '"I enjoyed the Koeki Kiku sake from Saga Prefecture, which the chef also hails from." — October 2026, value omakase.', source: R + 'B537237155/' },
        { text: '"Given its location in Roppongi, the clientele is a mix of foreigners and locals, about half and half." — September 2026, ¥11,000 course.', source: R + 'B536336036/' },
        { text: '"The restaurant is quite small, with only 8 seats at an L-shaped counter and no kitchen… The rice is a unique blend of rice vinegar and red vinegar." — July 2026.', source: R + 'B531760209/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨はじめ、港区六本木6-1-5 グッドワークビル1F、日比谷線・大江戸線六本木駅3番出口から約1分、月〜木・日・祝18:00〜翌1:00 (L.O.0:30)、金・土18:00〜翌3:00 (L.O.2:30)、22時以降は10%深夜料金、8席、禁煙、カード・電子マネー・QR可、英語メニューと英語を話すスタッフ、2024年8月8日オープン。コース: 握り10貫 (うに入り) と小鉢2品と味噌汁7,700円、日本酒とワインの飲み放題90分付き11,000円、日本酒なしの飲み放題60分付き9,900円。口コミ(2026年7月〜10月): Saga 出身の若い大将、六本木の Sushi Ryuta の出身、Imoaraisaka に面した1階、L字カウンター8席で厨房なし、米酢と赤酢のブレンドのシャリ、厚めのネタ、Shiogama の天然本鮪、春子鯛、甘海老3尾、うに軍艦、はじめ巻き、追加の鰯600円・鉄火巻1,100円、客の半分ほどが海外から。',
      confidence: 'medium', sources: [TB, R + 'B531760209/', R + 'B535021628/', R + 'B535576265/', R + 'B535847568/', R + 'B536318389/', R + 'B536336036/', R + 'B537237155/', R + 'B537267998/', R + 'B537277287/', R + 'B537510750/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); about half the guests were from overseas on a September 2026 night.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-1-5 グッドワークビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662581, 139.732524); GSI 東京都港区六本木六丁目1番 (lot, block centroid) 107m; Sougo (tokyo_sougo_roppongi, 六本木6-1-8) is 28 m away on its own Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531760209/'],
    price_note: 'Course prices from Tabelog (tax included); extras from a September 2026 review. 10% late-night charge after 22:00.', last_checked: TODAY, items: [
      it('', '', 'Omakase: 10 nigiri incl. sea urchin, 2 small dishes, miso soup', '¥7,700', 'Course', 'ask', 'no', 'Tabelog "most popular".', 'omakase'),
      it('', '', 'Omakase with 90-minute all-you-can-drink sake and wine', '¥11,000', 'Course', 'ask', 'no', 'Tabelog.', 'omakase_nomihodai'),
      it('', '', 'Omakase with 60-minute all-you-can-drink (no sake)', '¥9,900', 'Course', 'ask', 'no', 'Tabelog.', 'omakase_nomihodai_nosake'),
      it('', '', 'Sardine nigiri (extra)', '¥600', 'Sushi', 'ask', 'no', 'September 2026 review.', 'iwashi'),
      it('', '', 'Tekka maki (tuna roll)', '¥1,100', 'Sushi', 'ask', 'no', 'September 2026 review.', 'tekka_maki'),
      it('', '', 'Hajime roll, half (fatty tuna, salmon roe, eel)', '¥1,200', 'Sushi', 'ask', 'no', 'September 2026 review.', 'hajime_maki'),
    ] }, {
    cuisine: '気軽なカウンターの鮨、おまかせかアラカルト (食べログ、税込み): うにを含む握り10貫、小鉢2品、味噌汁のおまかせ7,700円、日本酒・焼酎・ワイン・ビールの飲み放題90分付き11,000円、日本酒なしの飲み放題60分付き9,900円・握り6貫と味噌汁のコースも (2026年10月)・シャリは米酢と赤酢のブレンド (2026年7月)、ネタは厚めでシャリも伝統の江戸前より少し大きめ (2026年10月、大将の話)・2026年秋の握り: Shiogama の天然本鮪、鯵、春子鯛、縞鯵、甘海老3尾をひと貫に、大根おろしの焼き秋刀魚、金目鯛、自家製海苔の佃煮のめひかりの手巻き、一日漬けためかじき、紫うにの軍艦。前菜はいかしゅうまいと自家製ポン酢など・追加 (2026年9月): 鰯600円、鉄火巻1,100円、はじめ巻きハーフ (中トロ、いくら、鰻) 1,200円・日本酒は Nabeshima、Katsukoma、大将の地元の Koeki Kiku など',
    neighborhood: '六本木6-1-5 グッドワークビル1F、Imoaraisaka 沿い。六本木駅3番出口から徒歩1分 (日比谷線・大江戸線)',
    gf_detail: '要確認。グルテンフリーの説明はない。握りはカウンターで味付けし、漬けや煮切りのものも (例: 酒とみりんに一日漬けためかじき、2026年10月)。前菜にいかしゅうまいとポン酢も (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介のカウンターで、締めは甲殻類の味噌汁 (2026年10月)。',
    notes: '[鮨・六本木、Imoaraisaka の深夜まで開く8席のカウンター] 六本木の交差点から1分、Imoaraisaka に面した1階。L字のカウンター8席で、18時から深夜1時、週末は3時まで。Saga 出身で六本木の Sushi Ryuta にいた若い大将が、うにを含む握り10貫、小鉢2品、味噌汁のおまかせを7,700円で、日本酒とワインの飲み放題90分付きなら11,000円で出す。シャリは米酢と赤酢のブレンド。貫数が少ないぶんネタを厚く、シャリを少し大きめにしていると、2026年10月の客に大将が話している。2026年秋のコースには Shiogama の本鮪、春子鯛、甘海老3尾のひと貫、焼き秋刀魚、金目鯛、紫うにの軍艦。毎月来る常連は中トロ、いくら、鰻のはじめ巻きを追加する。厨房がないので前菜はシンプル (2026年7月)。2026年9月の客によれば客の半分ほどが海外から。2軒目に使う人も多い。22時以降は10%の深夜料金。',
  });
}

// ================================================================ 宗胡
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13179815/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sougo.tokyo/'; const MENU = SITE + 'menu.html'; const MENU_E = SITE + 'menu_e.html';
  const CHEF = SITE + 'chef.html'; const CHEF_E = SITE + 'chef_e.html'; const ABOUT = SITE + 'about.html'; const ACCESS = SITE + 'access.html'; const POLICY = SITE + 'policy.html';
  const H = day(['11:30', '15:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_sougo_roppongi', name: '宗胡 (Sougo)', category: 'SHOJIN',
    lat: 35.662549, lng: 139.732212, cuisine_type: 'shojin',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask, at least two days ahead: the shop asks for allergies and dietary restrictions two days in advance and adjusts dishes (official site). Nothing is called gluten-free, and 2026 courses included fried spring rolls, corn fritters coated in arare, eggplant with somen, sushi in monaka wafers and a kadaif-topped salad; red miso soup and kombu tsukudani come with the rice.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Shojin (Buddhist vegetarian) cooking. The English site says "Shojin vegetarian… (we can also cater to vegan guests)"; the Japanese site says vegan guests can eat with peace of mind. Say you are vegan when booking (two days ahead). Desserts and drinks include a "cream" zenzai and a ginger latte whose milk is not described; one March 2026 diner wrote that the course had fish, which contradicts the shop\'s own description.',
    hours_raw: 'Mon–Sat lunch 11:30–15:00 (last entry 14:00), dinner 17:30–23:00 (last entry 21:30); closed Sundays and public holidays (official site; Tabelog). 10% service charge on courses, food and drinks (official site). Private room for up to 7, room fee ¥5,000; semi-private room for up to 5, ¥2,000 (official site policy page; Tabelog). Cancellation fees apply (course: 100% same day, 50% the day before). Allergies and dietary needs two days ahead. Bookings via TableCheck, Tabelog or phone. 42 seats: 14 at the counter, tables, box seats, private and semi-private rooms; wheelchair access; designated smoking area; cards, no e-money or QR (Tabelog). Children welcome. Opened 23 February 2015 (Tabelog; the Japanese chef page also says 2015, the English page 2011). A second shop, 淡路宗胡, is at THE PASONA on Awaji Island (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 6-1-8, 六本木グリーンビル 3F, toward Imoaraisaka — 1 min from Roppongi Stn exit 3 (Hibiya / Oedo lines)',
    cuisine: 'Modern shojin ryori (Buddhist vegetarian cooking) served kaiseki-style, menu changed about every three weeks (official site; prices before 10% service) · dinner kaiseki: 蓮 Hasu ¥18,700 (aperitif, 9 dishes, 2 desserts); 禅 Zen ¥15,400 (7 dishes, 1 dessert) · lunch: お昼の御膳 lunch tray ¥1,980 (three seasonal vegetable dishes, seasonal rice, red miso soup, pickles, kombu tsukudani — April 2026); shojin curry set ¥1,980; two-tier bento, 10 a day, ¥6,600; lunch kaiseki ¥13,200 · takeaway: 宗胡弁当 ¥2,500, 真寿箱 ¥4,000 · a set with salad, dessert and drink ¥3,080 (May 2026), desserts such as cold cream zenzai with shiratama and fruit; ginger latte · dishes in 2026: spring rolls, wakame soup, sushi in monaka with avocado or mushroom, vegetable sashimi, eggplant somen, corn fritters in arare, deep-fried sesame tofu, udo or bamboo-shoot rice · a bar for cocktails',
    website: SITE, gmaps: gm('宗胡 六本木6-1-8'), menu_url: MENU_E,
    notes: "[Shojin · Roppongi, modern Buddhist vegetarian kaiseki from a Daigo-family chef] Owner-chef Daisuke Nomura is the eldest son of the family behind 精進料理 醍醐 in Atago, where the chef was third-generation head chef while it held two Michelin stars from 2008 (official site). In 2015 the chef went independent and opened Sougo a minute from Roppongi Station to bring shojin ryori, the vegetarian cooking of Zen temples, to more people: traditional technique with modern touches and a few surprises, in a relaxed room with a counter, tables and private rooms. Dinner is a kaiseki course (¥15,400 or ¥18,700); lunch can be a ¥1,980 tray of seasonal vegetable dishes, rice and red miso soup, a shojin curry, or a lunch kaiseki. The menu changes about every three weeks; 2026 diners remember sushi in crisp monaka wafers, eggplant 'somen' and fried spring rolls, and you may take home the chopsticks and hand towel. The shop caters to vegans and allergies with two days' notice. A 2026 reviewer found the guests mostly from overseas and felt the staff might not understand much Japanese. Closed Sundays and holidays.",
    chef_bio: { chef_name: 'Daisuke Nomura (野村大輔)', roles: ['Owner-chef (Tabelog: "Owner Chef Daisuke Nomura"; official site)'], origin: 'Born in Tokyo into the family that runs 精進料理 醍醐 in Atago, eldest son (official site)',
      background: 'Per the official site: the eldest son of the family that runs the shojin restaurant 醍醐 (Daigo) in Atago, Tokyo; built a career as Daigo\'s third-generation head chef, with two Michelin stars from 2008; went independent in 2015 and opened Shojin 宗胡 (the English page says 2011; Tabelog gives 23 February 2015); teaches and promotes Japanese and shojin cooking in Japan and abroad; named to the Plant Forward Global 50. A second shop, 淡路宗胡, is at THE PASONA, Iwaya, Awaji (official site). A May 2026 diner had heard the restaurant is run by the son of Daigo\'s owner. Daigo itself is a hidden placeholder in this data (tokyo3_kamiya, name "精進料理 醍醐", address_ja "〒105-0002 東京都港区愛宕2-3-1 201").',
      philosophy: '"I want to cook dishes enjoyable for all guests from every generation, every culture, and every diet… the most memorable dishes are those that give me the opportunity to share moments of gratitude with my guests." (official English chef page).', specialty: 'Modern shojin kaiseki; sushi in monaka; vegetable sashimi.',
      anecdotes: [
        { text: '"I truly appreciate how Sogo accommodates vegans, especially those from abroad. It\'s also great that they can cater to those with soy milk allergies!" — January 2026.', source: R + 'B481707498/' },
        { text: '"I was particularly impressed by the sushi in monaka, where rice and vegetables like avocado are sandwiched together, and the eggplant somen, which creatively uses the eggplant as a vessel for the noodles." — May 2026, Zen course.', source: R + 'B528981796/' },
        { text: '"The food was delicious, but it might be better to assume that the staff may not understand much Japanese." — April 2026.', source: R + 'B271360195/' },
        { text: '"For my guest, who is used to spicy and oily vegan dishes, the subtlety seemed to come across as bland." — June 2026, dinner with a vegan guest.', source: R + 'B529946531/' },
      ],
      japanese_sources_summary: '公式サイト (sougo.tokyo): 宗胡 SOUGO、モダンな感性を加えた精進料理を懐石スタイルで、13世紀に禅寺で確立した精進料理、六本木で楽しく美味しく心地よい日本料理を。オーナーシェフ野村大輔は東京愛宕の精進料理醍醐を営む家族の長男、醍醐の三代目料理長、2008年から継続してミシュラン2つ星、2015年に独立して Shojin 宗胡をオープン、精進料理の教育と啓蒙を国内外で、Plant Forward Global 50。お献立: 旬の素材の精進料理、ヴィーガンのお客様にも安心、内容は3週間を目途に入れ替え、アレルギーや食事制限は2日前までに連絡。ディナー17:30〜23:00 (最終入店21:30)、精進懐石 蓮18,700円 (食前酒、料理9品、デザート2品)、禅15,400円 (料理7品、デザート1品)、サービス料10%。ランチ11:30〜15:00 (最終入店14:00)、二段重弁当 (1日10食) 6,600円、お昼の御膳1,980円、shojinカレーセット1,980円、お昼懐石13,200円。お持ち帰り: 宗胡弁当2,500円、真寿箱4,000円。六本木6-1-8 六本木グリーンビル3F、日曜・祝日休み、個室 (7名、室料5,000円)、半個室 (5名、2,000円)。淡路宗胡: 兵庫県淡路市岩屋 THE PASONA 2F。食べログ: 42席、2015年2月23日オープン。口コミ(2026年1月〜8月): お昼の御膳1,980円、サラダ・デザート・ドリンク付き3,080円、カダイフのサラダ、筍ご飯、胡麻豆腐の揚げ物、もなかの寿司、茄子そうめん、箸とおしぼりを持ち帰れる、海外の客が多い、ヴィーガンや豆乳アレルギーにも対応。',
      confidence: 'medium', sources: [TB, SITE, MENU, MENU_E, CHEF, CHEF_E, ABOUT, ACCESS, POLICY, R + 'B271360195/', R + 'B481707498/', R + 'B525151933/', R + 'B525285120/', R + 'B526121539/', R + 'B526380264/', R + 'B528229660/', R + 'B528981796/', R + 'B529946531/', R + 'B532852066/'] },
    cultural_comfort: { level: 'english', note: 'Official site in English, Chinese and Korean; a 2026 diner found the staff and menu geared to overseas guests.' },
    safety: { ...SAFETY0,
      staff_allergy_handling: [
        { text: 'Official site: "Please inform us of any allergies or dietary restrictions at least two days in advance… so that we can prepare variety of dishes accommodating to your request."', source: MENU_E },
        { text: 'Diners with allergies had dishes swapped on advance notice (March 2024 visit) and a soy-milk allergy accommodated (January 2026).', source: R + 'B481707498/' },
      ],
      vegan_cross_contact: [
        { text: 'English site: "Shojin vegetarian… (we can also cater to vegan guests)"; Japanese site: vegan guests can eat with peace of mind.', source: MENU_E },
      ] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-1-8 六本木グリーンビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site with current menu; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.662549, 139.732212); GSI 東京都港区六本木六丁目1番 (lot, block centroid) 78m; Sushi Hajime (tokyo_sushi_hajime_roppongi, 六本木6-1-5) is 28 m away on its own Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, MENU_E, R + 'B526121539/'],
    price_note: 'Prices from the official site (read November 2026); 10% service on courses, food and drinks. Dishes change about every three weeks.', last_checked: TODAY, items: [
      it('精進懐石 蓮', 'Hasu', 'Shojin kaiseki "Hasu": aperitif, 9 dishes, 2 desserts', '¥18,700', 'Course', 'ask', 'ask', 'Official site; tell the shop you are vegan when booking.', 'hasu'),
      it('精進懐石 禅', 'Zen', 'Shojin kaiseki "Zen": 7 dishes, 1 dessert', '¥15,400', 'Course', 'ask', 'ask', 'Official site.', 'zen'),
      it('お昼懐石', '', 'Lunch kaiseki', '¥13,200', 'Lunch', 'ask', 'ask', 'Official site; Tabelog lists 8 items.', 'lunch_kaiseki'),
      it('お昼の御膳', '', 'Lunch tray: seasonal vegetable dishes, rice, red miso soup, pickles', '¥1,980', 'Lunch', 'ask', 'ask', 'Official site; contents April 2026.', 'lunch_gozen'),
      it('shojinカレーセット', '', 'Shojin curry set', '¥1,980', 'Lunch', 'ask', 'ask', 'Official site.', 'shojin_curry'),
      it('二段重弁当', '', 'Two-tier bento (10 a day)', '¥6,600', 'Lunch', 'ask', 'ask', 'Official site.', 'nidanju_bento'),
      it('宗胡弁当', '', 'Sougo bento (takeaway)', '¥2,500', 'Takeaway', 'ask', 'ask', 'Official site.', 'sougo_bento'),
    ] }, {
    cuisine: 'モダンな精進料理を懐石スタイルで。内容は3週間を目途に入れ替え (公式サイト、別途サービス料10%)・夜の精進懐石: 蓮18,700円 (食前酒、料理9品、デザート2品)、禅15,400円 (料理7品、デザート1品)・ランチ: お昼の御膳1,980円 (季節の野菜の小鉢3品、季節のご飯、赤だし、香の物、昆布の佃煮、2026年4月)、shojinカレーセット1,980円、二段重弁当 (1日10食) 6,600円、お昼懐石13,200円・お持ち帰り: 宗胡弁当2,500円、真寿箱4,000円・サラダ、デザート、ドリンク付きのセット3,080円 (2026年5月)、デザートは白玉と果物の冷やしクリームぜんざいなど、ジンジャーラテ・2026年の料理: 春巻き、わかめのスープ、アボカドやきのこのもなか寿司、野菜のお造り、茄子のそうめん、あられ衣のとうもろこしの揚げ物、胡麻豆腐の揚げ出し、うどや筍のご飯・カクテルのバーも',
    neighborhood: '六本木6-1-8 六本木グリーンビル3F、Imoaraisaka 方面。六本木駅3番出口から徒歩1分 (日比谷線・大江戸線)',
    gf_detail: '2日前までに要確認。アレルギーや食事制限は2日前までに伝えれば料理を調整してくれる (公式サイト)。グルテンフリーの説明はなく、2026年のコースには揚げた春巻き、あられ衣のとうもろこしの揚げ物、茄子のそうめん、もなかの寿司、カダイフをのせたサラダも。ご飯には赤だしと昆布の佃煮が付く。',
    vegan_detail: '精進料理 (仏教の菜食)。日本語のサイトには「ヴィーガンのお客様にも安心してお召し上がりいただけます」、英語のサイトには菜食で、ヴィーガンにも対応できるとある。予約時 (2日前まで) にヴィーガンと伝えて。デザートや飲み物には冷やしクリームぜんざいやジンジャーラテもあり、乳の有無は書かれていない。2026年3月の口コミにはコースに魚があったとあるが、店の説明とは食い違う。',
    notes: '[精進料理・六本木、醍醐の家に生まれたシェフのモダンな精進懐石] オーナーシェフの野村大輔は愛宕の精進料理醍醐を営む家族の長男で、醍醐の三代目料理長として2008年からミシュラン2つ星を得ていた (公式サイト)。2015年に独立し、禅寺の菜食である精進料理をもっと多くの人に楽しんでもらおうと、六本木駅から1分の場所に宗胡を開いた。伝統の技法にモダンな感性と少しのサプライズを加え、カウンター、テーブル、個室のあるくつろいだ空間で出す。夜は懐石コース (15,400円か18,700円)。昼は季節の野菜の小鉢とご飯と赤だしの1,980円の御膳、精進カレー、お昼懐石も。献立は3週間ほどで替わり、2026年の客はぱりっとしたもなかの寿司、茄子のそうめん、揚げた春巻きを挙げている。使った箸とおしぼりは持ち帰れる。2日前までに伝えればヴィーガンやアレルギーにも対応。2026年の口コミでは客の多くが海外からで、スタッフには日本語があまり通じないかもしれないとのこと。日曜・祝日休み。',
  });
}

save();
