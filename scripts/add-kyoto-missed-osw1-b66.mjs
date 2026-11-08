// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 66.
//   + 名足 Natari (Japanese–Chinese–ethnic izakaya in the new Kagiya Koji Kaikan, Fuyacho-Takatsuji; opened March 2026)
//   + 酒とお料理 つぐ Sake to Oryori Tsugu (kappo izakaya in a machiya south of Shijo Sakaimachi; 株式会社D-HEART)
//   + 鶏鍋珍 Tori Nabe Chin (Hinai-chicken hot pot by referral at dinner, a walk-in ramen window at lunch; Miyagawa-cho)
//   + カフェキッチン くるん Cafe Kitchen Kurun (omurice and baked spaghetti counter by Nishiki, run by a couple)
//   - 芙蓉苑 火鍋城 京都店, WAGYU SUKIYAKI 極 京都祇園四条, 祇園 セレブリテ, 串焼き 満天 先斗町店, 京屋: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26044796, 26032604 (skipped), 26044646,
//   26045036, 26044112 (skipped), 26033750 (skipped), 26025158 (skipped), 26002898 (skipped), 26040458.
//   queue-status.jsonl grepped for each brand (名足, 芙蓉苑, つぐ, 鶏鍋珍, 極/GOKU, セレブリテ, 満天, 京屋, くるん): only 満天 has an
//   earlier ruling (26027381, osw9-45).
//   None of the four drafted is in data/kyoto.json by name or address (鍵屋町219-1 鍵屋小路会館2階, 小石町120,
//   宮川筋5-34-2, 八百屋町538-1). The only つぐ name match is 茶寮京都よしつぐ, a different shop.
//   Same-name count (same brand or operator only): つぐ — 株式会社D-HEART's site lists SOU（宗）, 酒とお料理 つぐ and
//   BAR 京もーど (宗 is already in data as kyoto_sou_nishihorin) — drafted as a local group, flagged. 名足, 鶏鍋珍,
//   くるん — one shop each. Large-parent list checked.
//   Service charges, checked against Tabelog: none listed for any of the four.
//   Other-diner remarks (Greg 2026-11-06): a single October 2026 report of a celebrity visit at 名足 is left out.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-66');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032604', '芙蓉苑 火鍋城 京都店: chain — the invoice holder T9120001201766 (芙蓉苑株式会社, Osaka) also appears on Tabelog for 芙蓉苑 (島之内), FUYOEN 心斎橋PARCO店 and 芙蓉麻婆麺 十三店, and Tabelog’s name search adds 芙蓉苑 渋谷PARCO店, 芙蓉苑 神戸店 and 芙蓉火鍋城 長堀橋店 — five or more 芙蓉-named shops of an Osaka company');
skip('26044112', 'WAGYU SUKIYAKI 極 京都祇園四条: chain — Tabelog’s name search lists 20+ WAGYU SUKIYAKI 極/GOKU shops (Shinjuku, Roppongi, Asakusa, Ginza, Ueno, Osaka, Naha, Nara, Kyoto Kawaramachi and others)');
skip('26033750', '祇園 セレブリテ: not a place to eat — a take-out patisserie (the shop’s own site lists a boutique with hours 17:00–23:30 and no seating; Tabelog lists no seats)');
skip('26025158', '串焼き 満天 先斗町店: sub-brand of a large parent — same ruling as 26027381 (osw9-45): 串焼き 満天 is a brand of 株式会社ファンインターナショナル (Osaka), which runs nine restaurant brands');
skip('26002898', '京屋: no reviews dated 2025–2026 (latest July 2024)');

// ================================================================ 名足
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044796/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_natari_kagiya', name: '名足 (Natari)', category: 'OMNI',
    lat: 34.999847, lng: 135.765392, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Meat buns, dan dan noodles, fried rice, spring rolls, chicken tempura and kara-age, ponzu and soy-based dishes; no gluten information (Tabelog menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly meat and fish; a basil salad, a parsley salad and chilled tofu with pickled mustard greens are mentioned without any description of how each is made, and the edamame comes with ago (flying-fish) dashi (2026 reviews).',
    hours_raw: 'Monday–Saturday 16:00–23:00 (L.O. 22:00); closed Sunday (Tabelog). Reservations accepted (Tabelog). Cards; no e-money or QR (Tabelog). 15 seats: 7 at the counter and 8 at tables (Tabelog). Non-smoking with a designated smoking area (Tabelog). On the second floor of the Kagiya Koji Kaikan, up steep stairs (Tabelog; October 2026); about 7 min from Hankyu Kawaramachi (Tabelog). Opened 24 March 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho-Takatsuji, Kagiya Koji Kaikan 2F — 7 min from Hankyu Kawaramachi',
    cuisine: 'An izakaya blending Japanese, Chinese and ethnic cooking (April 2026) · signature meat bun ¥550 with chunky filling (Tabelog; March–October 2026) · dan dan noodles ¥1,200, fried rice ¥1,000, bak kut teh ¥1,600, oyster omelette ¥1,300, salted chicken kara-age ¥950, chicken tempura ¥800, uzaku ¥980, bonito kimchi yukhoe ¥800 (Tabelog) · three-nibble starter plate ¥780 with carrot râpé and burdock (April 2026) · firefly-squid namero, mackerel potato salad, edamame with ago dashi (May 2026) · deep-fried tofu pouch stuffed with squid natto, napa cabbage with yuba as the starter (October 2026) · sake, also by the half serving (October 2026)',
    website: null, gmaps: gm('名足 鍵屋小路会館'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Fuyacho-Takatsuji, meat buns and Asian small plates] A 15-seat second-floor izakaya in the new Kagiya Koji Kaikan, where the owner mixes Japanese, Chinese and Southeast Asian flavours — a much-praised meat bun, bak kut teh, dan dan noodles, fried rice — with sake by the half serving. Cassette tapes on the shelves; popular, and dishes can sell out by 8 pm. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'A March 2026 reviewer writes that the owner trained at a yakitori restaurant, a seafood restaurant and a Chinese restaurant; a July 2026 reviewer writes that the owner comes from Daihō, a charcoal-grill restaurant. Reviewers describe the owner as kind and warm towards solo diners (July and October 2026).',
      philosophy: null, specialty: 'Meat bun.',
      anecdotes: [
        { text: 'The Kagiya Koji Kaikan is a group of small restaurants joined by a private alleyway; Natari opened in it in March 2026 (April 2026 review).', source: R + 'B527163957/' },
        { text: 'A July 2026 visitor arriving at 8 pm found about half the menu already sold out, and noted the many cassette tapes collected as a hobby.', source: R + 'B536108116/' },
        { text: 'An October 2026 solo diner was amused by a sake with a special label for glasses wearers and liked being able to order sake by the half serving.', source: R + 'B538573386/' },
      ],
      japanese_sources_summary: '食べログ: 名足、居酒屋、下京区鍵屋町219-1 鍵屋小路会館2階、阪急河原町駅から徒歩7分、月〜土 16:00〜23:00 (L.O.22:00)、日曜定休、カード可、15席 (カウンター7、テーブル8)、2026年3月24日オープン、名物の肉まん550円、担々麺1,200円、炒飯1,000円、肉骨茶1,600円、牡蠣オムレツ1,300円、うざく980円。口コミ (2026年、英語): 和・中華・エスニックを合わせた料理、肴3種盛り、ほたるいかのなめろう、鯖のポテトサラダ、あご出汁の枝豆、油揚げイカ納豆、日本酒は半合でも注文できる、カセットテープが並ぶ店内。店主は焼き鳥、海鮮、中華の店で修業 (2026年3月)、炭火焼の店「Daihō」の出身 (2026年7月)。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B525465549/', R + 'B527163957/', R + 'B529270049/', R + 'B529356749/', R + 'B530746240/', R + 'B531007437/', R + 'B531164845/', R + 'B536108116/', R + 'B538573386/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter-and-tables izakaya; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区鍵屋町219-1 鍵屋小路会館2階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (corporate member); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.999847, 135.765392); cross-checked: GSI 京都府京都市下京区鍵屋町219番地 (lot) 21m; same building as オステリア エ バール ポレンタ (6 m) and 四川料理と酒Yuan (11 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu (updated 2026-09-04), tax included.', last_checked: TODAY, items: [
      it('名足の肉まん', 'Natari no nikuman', 'Natari meat bun', '¥550', 'Specialty', 'no', 'no', 'Tabelog; October 2026.', 'nikuman'),
      it('', '', 'Dan dan noodles', '¥1,200', 'To finish', 'no', 'no', 'Tabelog.', 'tantanmen'),
      it('', '', 'Fried rice', '¥1,000', 'To finish', 'ask', 'no', 'Tabelog.', 'chahan'),
      it('', '', 'Bak kut teh', '¥1,600', 'Warm', 'ask', 'no', 'Tabelog.', 'bakkutteh'),
      it('油揚げイカ納豆', 'abura-age ika natto', 'Deep-fried tofu pouch with squid natto', '', 'Warm', 'ask', 'no', 'October 2026; served with ponzu.', 'ikanatto'),
      it('', '', 'Uzaku (eel and cucumber)', '¥980', 'Cold', 'ask', 'no', 'Tabelog.', 'uzaku'),
    ] }, {
    cuisine: '和・中華・エスニックを合わせた居酒屋 (2026年4月)・名物の肉まん550円、具がごろごろ (食べログ、2026年3〜10月)・担々麺1,200円、炒飯1,000円、肉骨茶1,600円、牡蠣オムレツ1,300円、塩唐揚げ950円、鶏天800円、うざく980円、鰹のキムチユッケ800円 (食べログ)・人参のラペやごぼうの肴3種盛り780円 (2026年4月)・ほたるいかのなめろう、鯖のポテトサラダ、あご出汁の枝豆 (2026年5月)・油揚げイカ納豆、お通しは白菜と湯葉 (2026年10月)・日本酒は半合でも (2026年10月)',
    neighborhood: '麩屋町高辻、鍵屋小路会館2階。阪急河原町から徒歩7分',
    gf_detail: '要確認。肉まん、担々麺、炒飯、春巻き、鶏天、唐揚げ、ポン酢や醤油の料理。グルテンの情報はない (食べログのメニュー、2026年の口コミ)。',
    vegan_detail: '要確認。肉と魚が中心。バジルのサラダ、パセリのサラダ、青菜の漬物をのせた冷奴があるが作り方は書かれておらず、枝豆はあご出汁 (2026年の口コミ)。',
    notes: '[居酒屋・麩屋町高辻、肉まんとアジアの小皿] 新しい鍵屋小路会館の2階、15席の居酒屋。店主が和・中華・東南アジアの味を合わせ、評判の肉まん、肉骨茶、担々麺、炒飯を出す。日本酒は半合でも。棚にはカセットテープ。人気で、20時には品切れが出ることも。日曜定休。',
  });
}

// ================================================================ 酒とお料理 つぐ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044646/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.d-heart-sou.com/';
  const H = day(['17:30', '23:30']);
  put({
    id: 'kyoto_sake_to_oryori_tsugu', name: '酒とお料理 つぐ (Sake to Oryori Tsugu)', category: 'OMNI',
    lat: 35.002929, lng: 135.763165, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo izakaya cooking on dashi — oden, simmered fish, Saikyo-miso grilled fish, tempura and kara-age, kamameshi; no gluten information (Tabelog menu; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden broth is made from grilled sea-bream bones and beef tendon (Tabelog), the operator stresses dashi as the base of its cooking (D-HEART site), and the menu is built on fish and Wagyu.',
    hours_raw: 'Monday, Tuesday, Thursday–Sunday and holidays 17:30–23:30 (L.O. 23:00); closed Wednesday (Tabelog). The operator’s site lists 17:30–1:00 (L.O. 0:00) with irregular closing days — the Tabelog hours are used. Reservations accepted (Tabelog). Cards and PayPay (Tabelog). 47 seats: an 11-seat counter on the ground floor and 36 seats in tables, tatami and private rooms upstairs (Tabelog). In a machiya south of Shijo on Sakaimachi, 2 min from exit 26 of Shijo/Karasuma stations (Tabelog). Moved here on 1 March 2026 after about 14 years at the old site (D-HEART site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sakaimachi south of Shijo — 2 min from Shijo/Karasuma exit 26',
    cuisine: 'A kappo izakaya of seasonal Japanese dishes in a machiya: seasonal omakase course from ¥5,500 (Tabelog) · omakase sashimi of six kinds ¥1,500; Ozaki Beef tataki ¥2,500 and charcoal-grilled ¥3,000 (Tabelog) · oden in a broth of grilled sea-bream bones and beef tendon, from ¥300 (Tabelog) · kamameshi such as sea bream and ginkgo ¥1,300 or eel and edamame ¥1,500, about 30 minutes (Tabelog) · dashimaki ¥800, homemade karasumi ¥1,200, fried hamo with shiba-zuke tartare ¥1,000, bone senbei ¥650 (Tabelog; September–October 2026) · firefly squid, fried shrimp-taro with sauce, fried eggplant and nama-fu (March–July 2026) · sake and shochu',
    website: SITE, gmaps: gm('酒とお料理 つぐ'), menu_url: TB + 'dtlmenu/',
    notes: '[Kappo izakaya · Shijo Sakaimachi, kamameshi and oden] A calm machiya with an 11-seat counter downstairs and private rooms upstairs, serving seasonal sashimi, oden in a sea-bream-bone broth, kamameshi cooked to order and Ozaki Beef, à la carte or as a course from ¥5,500. Run by D-HEART, which also runs Sou nearby (flagged as a local group). Moved here in March 2026; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed)'], origin: null,
      background: '株式会社D-HEART, which runs several restaurants in Kyoto, says its trained Japanese cooks put dashi first. Its site lists SOU（宗）, 酒とお料理 つぐ and BAR 京もーど; Tsugu moved to this machiya on 1 March 2026 after about 14 years at its earlier site.',
      philosophy: 'Dashi as the base of Japanese cooking, drawing out the taste of the ingredients (D-HEART site).', specialty: 'Kamameshi; oden.',
      anecdotes: [
        { text: 'A March 2026 regular followed the restaurant to its new site and found the cooking as good as before.', source: R + 'B525517811/' },
        { text: 'A July 2026 visitor from Tokyo, whose usual bar was closed, came in for the kamameshi and wished the whole place could move to Kagurazaka.', source: R + 'B532472297/' },
      ],
      japanese_sources_summary: '株式会社D-HEARTのサイト: 京都市内に複数の飲食店を展開、日本料理の基本である出汁にこだわる、SOU（宗）、気軽な割烹居酒屋「酒とお料理 つぐ」(さけとおりょうり つぐ)、BAR 京もーど。つぐは約14年営業した場所から移転し、2026年3月1日に下京区四条堺町下ル小石町120で営業開始。食べログ: 居酒屋、月・火・木〜日・祝 17:30〜23:30 (L.O.23:00)、水曜定休、47席 (1階カウンター11、2階テーブル36)、個室あり、季節のおまかせコース5,500円から、Ozaki Beefのたたき2,500円、焼き鯛のアラと牛すじの出汁のおでん、釜飯、自家製からすみ。口コミ (2026年、英語): ほたるいか、海老芋の唐揚げ、茄子と生麩の揚げ浸し、鱧のフライ柴漬けタルタル。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', SITE, R + 'B524510312/', R + 'B525517811/', R + 'B532472297/', R + 'B533501948/', R + 'B534897927/', R + 'B535660536/', R + 'B537914819/', R + 'B538426205/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or private rooms; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区四条堺町下ル小石町120',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (corporate member) and the operator’s site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002929, 135.763165); cross-checked: GSI 京都府京都市下京区小石町120番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course', 'from ¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Omakase sashimi, six kinds (per person)', '¥1,500', 'Recommended', 'ask', 'no', 'Tabelog.', 'sashimi'),
      it('', '', 'Ozaki Beef tataki', '¥2,500', 'Recommended', 'ask', 'no', 'Tabelog.', 'ozakitataki'),
      it('', '', 'Oden daikon', '¥300', 'Oden', 'ask', 'no', 'Tabelog; sea-bream-bone and beef-tendon broth.', 'odendaikon'),
      it('', '', 'Kamameshi of sea bream and ginkgo', '¥1,300', 'Kamameshi', 'ask', 'no', 'Tabelog; about 30 minutes.', 'kamameshi'),
      it('', '', 'Dashimaki tamago', '¥800', 'Specialty', 'ask', 'no', 'Tabelog.', 'dashimaki'),
      it('', '', 'Fried hamo with shiba-zuke tartare', '¥1,000', 'Specialty', 'no', 'no', 'Tabelog; September 2026.', 'hamofry'),
    ] }, {
    cuisine: '町家で季節の和食を出す割烹居酒屋。季節のおまかせコース5,500円から (食べログ)・おまかせ刺身6種1,500円、Ozaki Beefのたたき2,500円と炭火焼き3,000円 (食べログ)・焼き鯛のアラと牛すじの出汁のおでん、300円から (食べログ)・鯛と銀杏1,300円、鰻と枝豆1,500円などの釜飯、約30分 (食べログ)・だし巻き800円、自家製からすみ1,200円、鱧のフライ柴漬けタルタル1,000円、骨せんべい650円 (食べログ、2026年9〜10月)・ほたるいか、海老芋の唐揚げ湯葉あん、茄子と生麩の揚げ浸し (2026年3〜7月)・日本酒と焼酎',
    neighborhood: '四条堺町下ル。四条・烏丸駅26番出口から徒歩2分',
    gf_detail: '要確認。出汁の割烹居酒屋料理。おでん、煮魚、西京焼き、天ぷらや唐揚げ、釜飯。グルテンの情報はない (食べログのメニュー、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。おでんの出汁は焼き鯛のアラと牛すじ (食べログ)、運営会社は出汁を料理の基本とし (D-HEARTのサイト)、魚と和牛が中心。',
    notes: '[割烹居酒屋・四条堺町、釜飯とおでん] 1階に11席のカウンター、2階に個室のある落ち着いた町家。季節の刺身、焼き鯛のアラの出汁のおでん、注文してから炊く釜飯、Ozaki Beefをアラカルトか5,500円からのコースで。近くの宗と同じD-HEARTの店 (地元のグループとして要確認)。2026年3月に移転、水曜定休。',
  });
}

// ================================================================ 鶏鍋珍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045036/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '24:00']);
  put({
    id: 'kyoto_torinabe_chin_miyagawacho', name: '鶏鍋珍 (Tori Nabe Chin)', category: 'OMNI',
    lat: 34.999152, lng: 135.771191, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chicken-broth hot pot finished with ramen, chicken spring rolls with sweet bean sauce, pasta; the lunch ramen uses wheat noodles. No gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: everything is built on a Hinai-chicken broth simmered for about two days (Tabelog; 2026 reviews).',
    hours_raw: '11:00–24:00 daily (Tabelog). Dinner is a members-only, referral-only chicken hot-pot course at ¥18,000 a head; lunch serves soba and ramen without reservations (Tabelog). One or two groups a day at dinner (2026 reviews). Cards, e-money and QR, including Alipay and WeChat Pay (Tabelog). 6 seats: 2 at the counter and a table for 4, with private rooms (Tabelog; October 2026). Smoking allowed (Tabelog). In a narrow lane in Miyagawa-cho, 5 min from Keihan Gion-Shijo (Tabelog). Opened 6 April 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Miyagawa-cho — 5 min from Keihan Gion-Shijo',
    cuisine: 'Hot pot of Hinai jidori chicken from Akita in a rich broth simmered about two days, with Italian-style dishes (Tabelog) · dinner course with all-you-can-drink ¥18,000: unseasoned Hinai broth to start, tuna and fig tartare with yogurt-lemon sauce, Hinai-chicken spring rolls with sweet bean sauce, cold fettuccine with sweet shrimp, then the hot pot finished with ramen and a porridge of crushed glutinous rice (October 2026) · lunch at the three-seat ramen window: foamed chicken paitan ramen ¥2,000 with Hinai tsukune, sudachi or yuzu-kosho to change the taste (June 2026)',
    website: null, gmaps: gm('鶏鍋珍 宮川町'), menu_url: TB + 'dtlmenu/',
    notes: '[Chicken hot pot · Miyagawa-cho, Hinai jidori] A tiny Miyagawa-cho house where a former Italian chef serves a Hinai-chicken hot-pot course with Italian touches — dinner is referral-only, one or two groups a day, ¥18,000 with drinks. At lunch a three-seat ramen window serves foamed chicken paitan ramen to anyone. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers describe the owner as a young former Italian chef (May and October 2026). The premises hold three parts: Tori Nabe Chin, Take Away Myou and the Ramen Window Yatsugare (June 2026).',
      philosophy: '“Eating the broth” — the chicken is used to the last drop (May 2026 review).', specialty: 'Hinai-chicken hot pot.',
      anecdotes: [
        { text: 'An October 2026 diner says the course opens with plain Hinai broth, served without any seasoning.', source: R + 'B538056847/' },
        { text: 'At the lunch ramen window the broth is whipped into a foam so it clings to the noodles (June 2026).', source: R + 'B529870517/' },
      ],
      japanese_sources_summary: '食べログ: 鶏鍋珍、水炊き・パスタ・ラーメン、東山区宮川筋5-34-2、京阪祇園四条駅から徒歩5分、毎日 11:00〜24:00、夜は会員制 (紹介制) の鶏鍋コース1人18,000円、昼は予約なしで蕎麦とラーメン、6席 (カウンター2、テーブル4)、喫煙可、2026年4月6日オープン、秋田の比内地鶏を約2日炊いた濃厚な鶏白湯の鍋とイタリアンの技法の料理、1日1組。口コミ (2026年、英語): 元イタリアンの若い店主、Tori Nabe Chin・Take Away Myou・Ramen Window Yatsugareの3つの区画、泡系の鶏白湯ラーメン2,000円、春巻きと甘いソース、甘海老の冷製フェットチーネ、締めのラーメンと粥。',
      confidence: 'medium', sources: [TB, R + 'B528051413/', R + 'B528138435/', R + 'B529870517/', R + 'B532856337/', R + 'B538056847/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dinner by referral only; lunch ramen is open to all.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区宮川筋5-34-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026. Dinner is referral-only.' },
    pin_source: `Tabelog ${TB} (34.999152, 135.771191); GSI 京都府京都市東山区宮川筋五丁目 (chome only) 93m; OSM reverse gives 松原通, 弓矢町/辰巳町 and does not confirm the 宮川筋5 address — kept the Tabelog point, marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price from Tabelog; ramen price from a June 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Hinai-chicken hot-pot course with all-you-can-drink (referral only)', '¥18,000', 'Dinner', 'no', 'no', 'Tabelog; October 2026; ends with ramen.', 'course'),
      it('', '', 'Foamed chicken paitan ramen (lunch)', '¥2,000', 'Lunch', 'no', 'no', 'June 2026.', 'ramen'),
    ] }, {
    cuisine: '秋田の比内地鶏を約2日炊いた濃厚なスープの鍋と、イタリアンの料理 (食べログ)・飲み放題付きの夜のコース18,000円: 味付けしない比内地鶏のスープから、鮪と無花果のタルタルにヨーグルトとレモンのソース、比内地鶏の春巻きに北京ダックのような甘いソース、甘海老の冷製フェットチーネ、鍋、締めのラーメンと砕いた餅米の粥 (2026年10月)・昼は3席のラーメン窓口で泡系の鶏白湯ラーメン2,000円、比内地鶏のつみれ、すだちや柚子胡椒で味を変える (2026年6月)',
    neighborhood: '宮川町。京阪祇園四条から徒歩5分',
    gf_detail: '要確認。締めにラーメンを入れる鶏鍋、甘いソースを添えた春巻き、パスタ。昼のラーメンは小麦の麺。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。すべて約2日炊いた比内地鶏のスープが基本 (食べログ、2026年の口コミ)。',
    notes: '[鶏鍋・宮川町、比内地鶏] 宮川町の小さな家で、元イタリアンのシェフが比内地鶏の鍋のコースにイタリアンの料理を合わせる。夜は紹介制で1日1〜2組、飲み放題付き18,000円。昼は3席のラーメン窓口で、誰でも泡系の鶏白湯ラーメンが食べられる。喫煙可。',
  });
}

// ================================================================ カフェキッチン くるん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040458/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '16:00']);
  put({
    id: 'kyoto_cafe_kitchen_kurun', name: 'カフェキッチン くるん (Cafe Kitchen Kurun)', category: 'OMNI',
    lat: 35.004692, lng: 135.763217, cuisine_type: 'yoshoku',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omurice on bouillon demi-glace rice with ketchup and hashed-beef sauces, and baked spaghetti; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the menu is omurice (egg, butter, hashed beef) and baked spaghetti such as bacon and vegetable (2025–2026 reviews).',
    hours_raw: 'Monday, Thursday–Sunday 11:00–16:00; closed Tuesday and Wednesday; may close early when sold out (Tabelog). No reservations (Tabelog). No cards or e-money; d Barai accepted (Tabelog). 7 counter seats (Tabelog). Second floor, up stairs, a minute from Nishiki market, about 300 m from Karasuma (Tabelog; 2025–2026 reviews). Opened 29 October 2023 (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-Nishiki, 2F — a minute from Nishiki market',
    cuisine: 'Omurice and baked spaghetti, with coffee (2025–2026) · omurice combination with both ketchup and hashed-beef sauce, ¥1,100 in September 2025 and ¥1,200 by 2026, with a mini salad · fluffy egg wrapped round bouillon demi-glace rice rather than ketchup rice (July 2026) · baked spaghetti such as bacon and vegetable (August 2025) · sometimes omurice only, as at the end of 2025',
    website: null, gmaps: gm('カフェキッチン くるん'), menu_url: TB + 'dtlmenu/',
    notes: '[Omurice · Sakaimachi by Nishiki, a couple’s seven-seat counter] A tiny second-floor counter a minute from Nishiki market where a couple serves neatly wrapped omurice — ketchup, hashed-beef sauce or both — and baked spaghetti at lunch. One cook does everything, so expect a wait at busy times. No cards; closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owners (a couple, unnamed)'], origin: null,
      background: 'Reviewers describe the shop as run by a couple (August 2025, February and August 2026), with the husband cooking everything alone (August 2025).',
      philosophy: null, specialty: 'Omurice.',
      anecdotes: [
        { text: 'A September 2025 Saturday visitor waited 10 minutes for a seat and 30 more for the food; the staff apologised sincerely, which made the wait easier.', source: R + 'B513293583/' },
        { text: 'At the end of December 2025 the menu was omurice only.', source: R + 'B519829940/' },
      ],
      japanese_sources_summary: '食べログ: カフェキッチン くるん、オムライス・パスタ・カフェ、中京区八百屋町538-1 日宝堺町錦ビル 2F、月・木〜日 11:00〜16:00、火・水定休、売り切れ次第閉店、予約不可、カード不可、d払い可、カウンター7席、2023年10月29日オープン。口コミ (2025〜2026年、英語): 夫婦で営む、ご主人が一人で調理、オムライスの合いがけ (ケチャップとハッシュドビーフ) 1,100〜1,200円とミニサラダ、ケチャップライスではなくブイヨンのデミグラスライス、ベーコンと野菜などの焼きスパゲッティ、錦小路から1分、階段で2階。',
      confidence: 'medium', sources: [TB, R + 'B512613419/', R + 'B513293583/', R + 'B513851215/', R + 'B518169548/', R + 'B519829940/', R + 'B521590575/', R + 'B523866962/', R + 'B525688019/', R + 'B531532675/', R + 'B534728142/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; no cards.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区八百屋町538-1 日宝堺町錦ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004742, 135.763217), offset about 5.5 m south to (35.004692, 135.763217) because 大衆酒場 メモリー (kyoto_taishu_sakaba_memory), in the same building, sits within 1 m; cross-checked: GSI 京都府京都市中京区八百屋町538番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525688019/', R + 'B513851215/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omurice combination (ketchup and hashed-beef sauce), with mini salad', '¥1,200', 'Omurice', 'ask', 'no', 'April 2026; ¥1,100 in September 2025.', 'omurice'),
      it('', '', 'Baked spaghetti (e.g. bacon and vegetable)', '', 'Pasta', 'no', 'no', 'August 2025.', 'bakedpasta'),
    ] }, {
    cuisine: 'オムライスと焼きスパゲッティ、コーヒーも (2025〜2026年)・ケチャップとハッシュドビーフの合いがけオムライス、2025年9月は1,100円、2026年は1,200円、ミニサラダ付き・ケチャップライスではなくブイヨンのデミグラスライスをふわふわの卵で包む (2026年7月)・ベーコンと野菜などの焼きスパゲッティ (2025年8月)・2025年末のようにオムライスだけの日も',
    neighborhood: '堺町錦、2階。錦市場から1分',
    gf_detail: '要確認。ブイヨンのデミグラスライスのオムライスにケチャップやハッシュドビーフのソース、焼きスパゲッティ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。オムライス (卵、バター、ハッシュドビーフ) とベーコンと野菜などの焼きスパゲッティ (2025〜2026年の口コミ)。',
    notes: '[オムライス・錦の堺町、夫婦の7席のカウンター] 錦市場から1分、2階の小さなカウンター。夫婦が、きれいに包んだオムライス (ケチャップ、ハッシュドビーフ、合いがけ) と焼きスパゲッティを昼に出す。調理は一人なので、混む時間は待つことも。カード不可、火・水定休。',
  });
}

save();
