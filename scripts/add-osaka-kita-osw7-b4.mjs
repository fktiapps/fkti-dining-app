// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw7 (lane: Tabelog id even), batch 4.
//   + モジャカレー 新大阪本店 Moja Curry Shin osaka honten (7-seat curry counter in Shin-Osaka Station; Tabelog Curry WEST 100)
//   + 六文銭 Rokumonsen (local ramen-and-fried-rice shop near Shin-Osaka since 1982, second generation)
//   + 新大阪昼呑み酒場 SAKE ヤシマ Shin Osaka Hirunomi Sakaba SAKE Yashima (daytime sake bar, 50+ sakes, lunch sets and spice curry)
//   + 五條家 Gojo Ya (12-seat kushikatsu counter, creative omakase skewers, run by a couple)
//   - skipped 27003806 段七 新大阪店: a brand of the Kumagoro ramen group; 27060576 串かつ だるま 新大阪駅なか店: Kushikatsu Daruma chain.
//   Lane check: every id above is even. Taken in queue order (nearest first) after the two chain skips.
//   Chain check: Moja Curry, Rokumonsen, SAKE Yashima and Gojo Ya name no other shop on Tabelog; a web search on 2026-11-01 for
//   モジャカレー finds only this Shin-Osaka shop. None is in data/osaka.json (grep by id, name and address, 2026-11-01).
//   Rokumonsen is a ramen shop, but its reviews split across shoyu, shio, miso and tonkotsu bowls and never describe oil, aroma
//   or tare strength, so per the 2026-11-01 lesson there is no ramen block; the bowls are described in cuisine/notes.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw7-4');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27003806', 'chain: a brand of the Kumagoro (熊五郎) ramen group, "operates under various brand names" (January 2017 review) and "Kumagoro\'s little brother" (October 2026 review)');
skip('27060576', 'chain: Kushikatsu Daruma; another Daruma shop in Arde Shin-Osaka (October 2026 review) and two Dotonbori branches in the osaka crawl (27005918, 27012813)');

// ================================================================ モジャカレー 新大阪本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27012792/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '14:30'], ['17:00', '20:00']);
  put({
    id: 'osaka_moja_curry_shin_osaka', name: 'モジャカレー 新大阪本店 (Moja Curry Shin osaka honten)', category: 'OMNI',
    lat: 34.733063, lng: 135.499793, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The shop describes "a rich, slow-cooked roux" (roux is usually thickened with wheat flour), and a hamburg steak is among the toppings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature is curry under sweet-simmered beef, and nothing is described as vegan; the base sauce is not described.',
    hours_raw: 'Daily 11:00–14:30 and 17:00–20:00 (Tabelog). No reservations; takeaway orders can be booked (Tabelog). No cards or e-money; PayPay accepted (Tabelog). 7 counter seats, tight enough that a bag on the chair blocks the way (October 2026); non-smoking; children welcome; takeaway (Tabelog). Water is self-service; fukujinzuke sits on the counter, and other pickles cost ¥50 (October 2026). Most orders arrive in a minute or so; the hamburg-steak curry takes about 12 minutes (October 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1, in the 味の小路 (Aji no Koji) food alley on the ground floor of JR Shin-Osaka Station (Tabelog)',
    cuisine: 'Curry: "Mojya Curry" of a house spice blend and a rich, slow-cooked roux, with a choice of toppings (Tabelog) · negi beef curry, the house favourite: sweet-simmered thin-sliced beef and a heap of chopped green onion over the curry, ¥1,200 (October 2026), ¥1,250 spicy, ¥1,300 with large rice (October 2026) · BIG hamburg-steak curry ¥1,400 (October 2026) · plain Moja curry (October 2026) · spice level from mild to very hot, and the rice amount, chosen when ordering (October 2026) · a smooth, fairly runny sauce, sweet first, the heat building as you eat; one diner compared it with Osaka "Madras" curry (October 2026)',
    website: null, gmaps: gm('モジャカレー 新大阪本店'), menu_url: null,
    notes: "[Curry · Shin-Osaka Station, a 7-seat counter in Aji no Koji] A tiny curry counter in the food alley on the ground floor of Shin-Osaka Station, on Tabelog's Curry WEST 100 list in 2023, 2024 and 2026, with signed celebrity photos on the wall. Its curry was created by a chef from Bangladesh, and \"moja\" means delicious in Bengali (October 2026). Most diners order the negi beef curry: thin beef simmered sweet, a pile of crunchy green onion, and a smooth sauce that starts sweet and lets the heat build, about ¥1,200–1,300 with the spice level and rice amount to your choice (October 2026). It usually arrives within a minute, which suits a traveller with a Shinkansen to catch. Seven seats only, cramped with luggage; the queue moves fast.",
    chef_bio: { chef_name: null, roles: ['Counter staff (unnamed)'], origin: 'The curry was created by a chef from Bangladesh (October 2026 review).', background: 'Per an October 2026 review: "The signature dish is a curry created by a chef from Bangladesh, featuring a perfect balance of sweetness and spiciness. \'Moja\' means \'delicious\' in Bengali." Per the Tabelog listing: a unique blend of spices and a rich, slow-cooked roux, balancing flavour and aroma so that depth comes through the heat. Tabelog Curry WEST 100: 2023, 2024, 2026.', philosophy: '"A curry flavor you\'ll never forget!" (Tabelog, translated).', specialty: 'Negi beef curry.',
      anecdotes: [
        { text: '"I was shocked when my order arrived in just one minute. So fast!" — October 2026, the negi beef curry for JPY 1,200.', source: R + 'B537553072/' },
        { text: '"Many customers seem to have a routine of saying, \'When I come to Shin-Osaka Station, I start here and end here.\'" — October 2026.', source: R + 'B538402736/' },
        { text: '"While waiting for my curry, I noticed many signed photos of celebrities adorning the walls." — October 2026.', source: R + 'B538337141/' },
      ],
      japanese_sources_summary: '食べログ: モジャカレー 新大阪本店、カレー、食べログ カレー WEST 百名店 2023・2024・2026、大阪市淀川区西中島5-16-1 JR新大阪駅 1F 味の小路、毎日11:00〜14:30、17:00〜20:00、予約不可 (テイクアウトは予約可)、カード・電子マネー不可、PayPay 可、7席 (カウンター)、禁煙、子ども可、テイクアウト。店の紹介: 独自のスパイスとじっくり煮込んだルーの Mojya Curry、辛さの中にも深み、トッピングでお好みに。口コミ(2026年10月): ネギビーフカレー1,200〜1,300円、BIG ハンバーグカレー1,400円、辛さとごはんの量を選べる、約1分で出てくる、なめらかでさらっとしたルー、甘くてあとから辛い、Bangladesh 出身の料理人が考えたカレー、Moja は Bengali で「おいしい」、壁に有名人のサイン、福神漬けはカウンターに、水はセルフ、せまいカウンター。',
      confidence: 'medium', sources: [TB, R + 'B537553072/', R + 'B537780706/', R + 'B537969823/', R + 'B538139484/', R + 'B538197397/', R + 'B538235531/', R + 'B538237825/', R + 'B538337141/', R + 'B538368187/', R + 'B538402736/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A seven-seat counter; choose spice level and rice amount when ordering. No English menu listed and no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR新大阪駅 1F 味の小路',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description (Curry WEST 100 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 81m (the station lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537553072/', R + 'B537969823/', R + 'B538197397/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Negi beef curry', '¥1,200', 'Curry', 'ask', 'no', 'October 2026; ¥1,300 with large rice.', 'negi_beef_curry'),
      it('', '', 'BIG hamburg-steak curry', '¥1,400', 'Curry', 'ask', 'no', 'October 2026; about 12 minutes.', 'hamburg_curry'),
      it('', '', 'Moja curry (plain)', '', 'Curry', 'ask', 'ask', 'October 2026.', 'moja_curry'),
    ] }, {
    cuisine: 'カレー: 独自のスパイスとじっくり煮込んだルーの「Mojya Curry」、トッピングを選べる (食べログ)・いちばん人気はネギビーフカレー: 甘く煮た薄切りの牛肉と、たっぷりの刻みねぎ。1,200円 (2026年10月)、辛口1,250円、ごはん大盛り1,300円 (2026年10月)・BIG ハンバーグカレー1,400円 (2026年10月)・ふつうの Moja カレー (2026年10月)・辛さは甘口からかなりの辛口まで、ごはんの量も注文のときに選ぶ (2026年10月)・なめらかでややさらっとしたルーで、最初は甘く、食べるうちに辛さがくる。大阪の「Madras」カレーを思い出すという人も (2026年10月)',
    neighborhood: '西中島5-16-1、JR 新大阪駅の1階の飲食街、味の小路の中 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。店は「じっくり煮込んだルー」と説明していて (ルーはふつう小麦粉でとろみをつける)、トッピングにハンバーグもある。',
    vegan_detail: 'ヴィーガンではありません。看板は甘く煮た牛肉をのせたカレーで、ヴィーガンの説明はない。ルーのベースの説明もない。',
    notes: '[カレー・新大阪駅、味の小路の7席のカウンター] 新大阪駅の1階の飲食街にある小さなカレーのカウンターで、食べログのカレー WEST 百名店に2023年、2024年、2026年に選ばれた。壁には有名人のサイン。カレーは Bangladesh 出身の料理人が考えたもので、「Moja」は Bengali で「おいしい」という意味 (2026年10月)。多くの人が頼むのはネギビーフカレー: 甘く煮た薄切りの牛肉に、シャキシャキの刻みねぎがたっぷり。なめらかなルーは最初は甘く、だんだん辛さがくる。辛さとごはんの量を選んで約1,200〜1,300円 (2026年10月)。たいてい1分ほどで出てくるので、新幹線の前にちょうどいい。7席だけで、荷物があるとせまいが、回転は早い。',
  });
}

// ================================================================ 六文銭
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27013240/'; const R = TB + 'dtlrvwlst/';
  const W = day(['10:45', '21:00']);
  put({
    id: 'osaka_rokumonsen_nishimiyahara', name: '六文銭 (Rokumonsen)', category: 'OMNI',
    lat: 34.733488, lng: 135.494507, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles; the sets add fried rice, Tianjin rice or rice balls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ramen with chashu in soy, salt, miso or tonkotsu broths; one diner found a rich pork-bone broth (August 2026).',
    hours_raw: 'Tabelog\'s hours grid: Mon–Fri 10:45–21:00, Sat 10:45–15:00, closed Sunday. The listing\'s own note says otherwise: Mon–Fri 11:00–15:00 and from 18:00; Sat, Sun and holidays 11:00–21:00; closed 31 December–3 January. Hours may change (Tabelog). No reservations; no cards; e-money accepted; no QR payment (Tabelog). 15 seats at a counter and tables; non-smoking; takeaway; children welcome (Tabelog). A line at weekday noon (May and August 2026); food comes fast (April and September 2026). Open since 1982 and now run by the second generation (an August 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: day(['10:45', '15:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西宮原1丁目8-1, ground floor of ロイヤルハイツ — 5–7 min from the north exit of Shin-Osaka Stn (Midosuji Line), 7–9 min from the JR Shinkansen gates, 9–11 min from the JR east gates (Tabelog)',
    cuisine: 'Local ramen-and-fried-rice shop: ramen in shoyu, shio, miso or tonkotsu (May 2026) · shoyu ramen ¥850 (April 2026): thin straight noodles, chashu, menma, bean sprouts, green onion and a spicy miso paste to stir in · "half-chan" set of ramen and a half portion of fried rice, close to a full one, ¥1,100 (April and May 2026), ¥1,200 (August 2026) · ramen with mini fried rice, miso, ¥1,080 (April 2026) · shoyu ramen with two large plain rice balls ¥1,000 (August 2026); a free cold tofu came with it in May 2026 · ramen with mini Tianjin rice, just over ¥1,000 (September 2026) · one August 2026 diner had a rich Kyushu-style tonkotsu',
    website: null, gmaps: gm('六文銭 西宮原1-8-1'), menu_url: null,
    notes: "[Ramen · Nishimiyahara, a 1982 ramen-and-fried-rice counter] A small local ramen shop a few minutes' walk from the north exit of Shin-Osaka Station, open since 1982 and now in its second generation (August 2026), with red uniforms and a red sign that one diner tied to the Sanada clan's red armour behind the name (May 2026). The bowls are plain and old-style: a light shoyu ramen with thin straight noodles, bean sprouts and a dab of spicy miso to stir in, or shio, miso and tonkotsu, mostly ordered as a ¥1,100–1,200 set with a half portion of fried rice that is nearly a full one (2026). Office workers line up at noon, food comes fast, and the staff chat with everyone (May 2026). Diners call it ordinary in the best sense: nothing showy, easy to eat every day.",
    chef_bio: { chef_name: null, roles: ['Second-generation owner (unnamed) and counter staff'], origin: null, background: 'No shop description on Tabelog. Per an August 2026 review: "it was established quite a while ago, in 1982, and is currently run by the second generation." A May 2026 diner: "The staff were very chatty, engaging in conversation with various customers," and the uniforms and sign are red.', philosophy: null, specialty: 'Shoyu ramen with half fried rice.',
      anecdotes: [
        { text: '"The staff were very chatty, engaging in conversation with various customers. It was the first time I had seen someone talk so much in a ramen shop! (laughs)" — May 2026, the half-chan ramen.', source: R + 'B528307852/' },
        { text: '"Although it was a half portion of fried rice, it was surprisingly substantial, close to a regular serving." — August 2026, the half-chan ramen for JPY 1,200.', source: R + 'B537404242/' },
        { text: '"Above all, I was amazed by the speed of service." — September 2026, a Saturday lunch of shoyu ramen and mini Tianjin rice.', source: R + 'B534994677/' },
      ],
      japanese_sources_summary: '食べログ: 六文銭、ラーメン、大阪市淀川区西宮原1丁目8-1 ロイヤルハイツ1F、Midosuji 線 新大阪駅北口から徒歩5〜7分、JR 新大阪駅の新幹線改札から7〜9分、東改札から9〜11分、表では月曜〜金曜10:45〜21:00、土10:45〜15:00、日曜休み、備考では月曜〜金曜11:00〜15:00、18:00〜、土・日・祝11:00〜21:00、12月31日〜1月3日休み、予約不可、カード不可、電子マネー可、QR 不可、15席、禁煙、テイクアウト、子ども可。口コミ(2026年1月〜9月): 1982年創業で今は二代目、醤油・塩・味噌・とんこつ、醤油ラーメン850円、細いストレート麺、チャーシュー、メンマ、もやし、ねぎ、辛味噌、半チャンラーメン1,100〜1,200円、半分でもほぼ一人前のチャーハン、味噌のラーメンとミニチャーハン1,080円、おにぎりセット1,000円、ミニ天津飯のセット、昼は行列、出てくるのが早い、よくしゃべるスタッフ、赤い制服と看板。',
      confidence: 'medium', sources: [TB, R + 'B520879075/', R + 'B525495321/', R + 'B525500171/', R + 'B528307852/', R + 'B528554913/', R + 'B530939404/', R + 'B534433317/', R + 'B534994677/', R + 'B537274602/', R + 'B537404242/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A busy local lunch counter; choose shoyu, shio, miso or tonkotsu. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西宮原1丁目8-1 ロイヤルハイツ1Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西宮原一丁目8番1号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530939404/', R + 'B520879075/', R + 'B537404242/', R + 'B534433317/'],
    price_note: 'Prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Shoyu ramen', '¥850', 'Ramen', 'no', 'no', 'April 2026.', 'shoyu_ramen'),
      it('', '', 'Half-chan set: ramen and half fried rice', '¥1,100', 'Sets', 'no', 'no', 'April and May 2026; ¥1,200 in August 2026.', 'hanchan'),
      it('', '', 'Miso ramen with mini fried rice', '¥1,080', 'Sets', 'no', 'no', 'April 2026.', 'miso_mini_chahan'),
      it('', '', 'Shoyu ramen with two rice balls', '¥1,000', 'Sets', 'no', 'no', 'August 2026.', 'onigiri_set'),
    ] }, {
    cuisine: '地元のラーメンとチャーハンの店: 醤油、塩、味噌、とんこつのラーメン (2026年5月)・醤油ラーメン850円 (2026年4月): 細いストレート麺、チャーシュー、メンマ、もやし、ねぎ、まぜて食べる辛味噌・ラーメンと半チャーハン (半分でもほぼ一人前) のセット1,100円 (2026年4月と5月)、1,200円 (2026年8月)・味噌のラーメンとミニチャーハン1,080円 (2026年4月)・醤油ラーメンと具のない大きなおにぎり2つのセット1,000円 (2026年8月)。2026年5月は冷ややっこのサービスも・ラーメンとミニ天津飯のセット、1,000円ちょっと (2026年9月)・2026年8月には Kyushu 風の濃いとんこつを食べた人も',
    neighborhood: '西宮原1丁目8-1、ロイヤルハイツの1階。Midosuji 線 新大阪駅北口から徒歩5〜7分、JR の新幹線改札から7〜9分、東改札から9〜11分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。ラーメンは小麦の麺で、セットにはチャーハン、天津飯、おにぎりがつく。',
    vegan_detail: 'ヴィーガンではありません。醤油、塩、味噌、とんこつのスープにチャーシュー。濃い豚骨のスープだったという人も (2026年8月)。',
    notes: '[ラーメン・西宮原、1982年からのラーメンとチャーハンの店] 新大阪駅北口から歩いて数分の小さな地元のラーメン店で、1982年から、今は二代目 (2026年8月)。制服と看板は赤で、店の名前に関係する Sanada の赤い鎧とつなげて考えた客も (2026年5月)。ラーメンは素朴で昔ながら: 細いストレート麺にもやし、辛味噌を少しのせたあっさりした醤油ラーメン。塩、味噌、とんこつもあり、たいていは1,100〜1,200円の半チャーハンのセットで頼む。半分でもほぼ一人前 (2026年)。昼は会社員が並び、すぐに出てきて、スタッフはだれとでもよく話す (2026年5月)。ふつうだけど、毎日でも食べられるという声が多い。',
  });
}

// ================================================================ 新大阪昼呑み酒場 SAKE ヤシマ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27120988/'; const R = TB + 'dtlrvwlst/';
  const S = day(['12:00', '18:00']); const L = day(['12:00', '21:30']);
  put({
    id: 'osaka_sake_yashima_nishinakajima', name: '新大阪昼呑み酒場 SAKE ヤシマ (Shin Osaka Hirunomi Sakaba SAKE Yashima)', category: 'OMNI',
    lat: 34.730686, lng: 135.496738, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Small home-style dishes, spice curries, chicken tempura and a Thursday pasta are on the menu; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nothing is labelled vegan or vegetarian. The spice curry of lotus root and beans (July 2026) and the bean-and-vegetable curry plate (June 2026) may suit, but neither is described as meat- or fish-free, and most side dishes include meat or fish.',
    hours_raw: 'Mon and Sat 12:00–18:00; Wed, Thu and Fri 12:00–21:30; closed Tue and Sun (Tabelog). Reservations accepted (Tabelog). Cards (AMEX only), e-money and QR payments (Tabelog). 18 seats: a counter downstairs and tables on the second floor (May and July 2026); non-smoking; private hire (Tabelog). Lunch can be slow with two staff: one July 2026 diner waited 40 minutes. Sake events now and then (May 2026). Opened 6 January 2021 (Tabelog).',
    hours: { 0: S, 2: L, 3: L, 4: L, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島7-9-15 — about 3 min from Exit 7 of Shin-Osaka Stn (Midosuji Line) (March 2026); a big sake bottle marks the front (June 2026)',
    cuisine: 'Daytime sake bar with healthy lunches and spice curry (Tabelog) · over 50 sakes, poured in 90 ml, 60 ml or 45 ml (March 2026), cold or warmed in the warmer on the counter (May 2026) · lunch: daily set with a main, two small side dishes and miso soup ¥1,000 (May 2026); deluxe gozen of two daily dishes and a half spice curry with brown rice ¥1,300 (June 2026: stuffed peppers, hamburg steak, a curry of lotus root, edamame, chickpeas and kidney beans, with simmered white-fish head on the side); "Hirunomi Set" of two dishes, two small bowls and two 60 ml sakes ¥1,500 (May 2026); combination spice curry of mackerel green curry and a lotus-root-and-bean dry keema (July 2026); chicken tempura (June 2026) · evening: the chef\'s pasta on Thursdays, sanma pasta in September 2026 · Omi beef tendon and red konnyaku unohana with a glass of Kitajima sake ¥600, a Japanese Sake Go-Around Osaka set (October 2026)',
    website: null, gmaps: gm('新大阪昼呑み酒場 SAKE ヤシマ 西中島7-9-15'), menu_url: null,
    notes: "[Sake bar · Nishinakajima, daytime drinking by Shin-Osaka] A daytime sake bar a few minutes from Shin-Osaka Station, marked by a giant sake bottle out front, opened in 2021 to serve sake from noon: over 50 kinds, poured in 45, 60 or 90 ml so you can try several, cold or warmed in the warmer on the counter, and the owner chose a kanzake for one May 2026 diner. The food is light and home-style: ¥1,000–1,300 lunch plates of small side dishes and a half portion of spice curry over brown rice, heavy on beans and lotus root, or a ¥1,500 \"Hirunomi Set\" that comes with two small sakes (2026). One business traveller stopped in for lunch and two small sakes before the Shinkansen back to Nagoya (May 2026). Two people run it, so lunch can be slow, 40 minutes on one July 2026 day; come with time to spare. Thursdays bring the chef's pasta.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) who chooses the warm sakes, and one other staff member'], origin: null, background: 'Per the Tabelog listing: a daytime sake specialist at the gateway to Osaka, with healthy lunches and spice curry and over 50 sakes chosen to go with the side dishes, served warm from lunchtime; opened 6 January 2021. Reviewers: the owner chose a kanzake (May 2026); "There were only two staff members, so it took a little while to prepare the food" (May 2026); occasional sake events (May 2026).', philosophy: '"Homemade dishes that are gentle on the body," paired with sake (March 2026 review, quoting the shop).', specialty: 'Kanzake at noon; spice curry; Hirunomi Set.',
      anecdotes: [
        { text: '"The standard serving is 90ml, but you can also choose 60ml or 45ml, which is great for those who want to try a variety." — March 2026.', source: R + 'B524369025/' },
        { text: '"While chilled sake is great, it\'s wonderful to find a place that serves delicious kanzake." — May 2026, the JPY 1,500 lunch set with two sakes before a Shinkansen back to Nagoya.', source: R + 'B528550988/' },
        { text: '"I entered the restaurant at 12:15 PM, but my food was served at 12:55 PM." — July 2026, the combination spice curry.', source: R + 'B531054645/' },
      ],
      japanese_sources_summary: '食べログ: 新大阪昼呑み酒場 SAKE ヤシマ、居酒屋・日本酒バー、大阪市淀川区西中島7-9-15、月・土12:00〜18:00、水・木・金12:00〜21:30、火・日休み、予約可、カード (AMEX)・電子マネー・QR 可、18席、禁煙、貸切可、2021年1月6日オープン。店の紹介: 新大阪駅からすぐの昼から日本酒の店、体にやさしいランチとスパイスカレー、昼からお燗、おかずに合う50種以上の日本酒。口コミ(2026年3月〜10月): Midosuji 線7番出口から約3分、90ml、60ml、45ml、日替わり定食1,000円、日替わり2品と半分のスパイスカレーと玄米の御膳1,300円、ピーマンの肉詰め、ハンバーグ、レンコンと豆のカレー、白身魚のかぶと煮、日本酒2杯つきの昼呑みセット1,500円、サバのグリーンカレーとレンコンと豆のドライキーマ、とり天、木曜はシェフのパスタ、サンマのパスタ、Omi の牛すじと赤こんにゃくの卯の花、Kitajima の日本酒、店主が選ぶお燗、2階にテーブル、日本酒のイベント、スタッフ2人で昼は時間がかかる、大きな酒瓶の看板。',
      confidence: 'medium', sources: [TB, R + 'B524369025/', R + 'B528527968/', R + 'B528550988/', R + 'B529853905/', R + 'B530239651/', R + 'B531054645/', R + 'B531340709/', R + 'B532373943/', R + 'B536196699/', R + 'B536591447/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Sake by the small glass, cold or warmed; lunch sets of small dishes. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島7-9-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with the shop\'s own description; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島七丁目9番15号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528527968/', R + 'B528550988/', R + 'B530239651/', R + 'B536591447/'],
    price_note: 'Prices from 2026 reviews, each dated in its note.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch set', '¥1,000', 'Lunch', 'ask', 'no', 'May 2026.', 'higawari'),
      it('', '', 'Deluxe gozen: two daily dishes and half spice curry with brown rice', '¥1,300', 'Lunch', 'ask', 'no', 'June 2026.', 'deluxe_gozen'),
      it('', '', '"Hirunomi Set": two dishes, two small bowls, two 60 ml sakes', '¥1,500', 'Lunch', 'ask', 'no', 'May 2026.', 'hirunomi_set'),
      it('', '', 'Lotus-root-and-bean dry keema curry', '', 'Curry', 'ask', 'ask', 'July 2026; part of a combination plate.', 'bean_keema'),
      it('', '', 'Omi beef tendon and red konnyaku unohana with a glass of sake', '¥600', 'Evening', 'ask', 'no', 'October 2026.', 'unohana_set'),
    ] }, {
    cuisine: '体にやさしいランチとスパイスカレーの昼呑みの日本酒の店 (食べログ)・日本酒は50種以上、90ml、60ml、45ml で (2026年3月)、冷やか、カウンターの燗つけ器でお燗に (2026年5月)・昼: メイン、小鉢2つ、みそ汁の日替わり定食1,000円 (2026年5月)。日替わり2品と玄米の半分のスパイスカレーの御膳1,300円 (2026年6月: ピーマンの肉詰め、ハンバーグ、レンコン、枝豆、ひよこ豆、金時豆のカレー、白身魚のかぶと煮も)。おかず2品、小鉢2つ、60ml の日本酒2杯の「昼呑みセット」1,500円 (2026年5月)。サバのグリーンカレーとレンコンと豆のドライキーマのあいがけ (2026年7月)。とり天 (2026年6月)・夜: 木曜はシェフのパスタ、2026年9月はサンマのパスタ・Omi の牛すじと赤こんにゃくの卯の花と Kitajima の日本酒で600円、日本酒めぐりのセット (2026年10月)',
    neighborhood: '西中島7-9-15。Midosuji 線 新大阪駅7番出口から約3分 (2026年3月)。店の前の大きな酒瓶が目印 (2026年6月)',
    gf_detail: '要確認。グルテンの情報なし。家庭的な小皿、スパイスカレー、とり天、木曜のパスタがある。グルテンフリーの説明はない。',
    vegan_detail: '要確認。ヴィーガンやベジタリアンの表示はない。レンコンと豆のスパイスカレー (2026年7月) や豆と野菜のカレーの皿 (2026年6月) は合うかもしれないが、肉や魚が入らないとは書かれておらず、おかずのほとんどは肉か魚。',
    notes: '[日本酒バー・西中島、新大阪の昼呑み] 新大阪駅から数分の昼呑みの日本酒の店で、店の前の大きな酒瓶が目印。2021年に開き、昼から日本酒を出す: 50種以上を45、60、90ml で選べるので、いろいろ試せる。冷やでも、カウンターの燗つけ器でお燗でも。店主がお燗の酒を選んでくれた人も (2026年5月)。料理は軽くて家庭的: 小鉢と玄米の半分のスパイスカレー (豆とレンコンがたっぷり) の1,000〜1,300円の昼の定食や、小さなグラスの日本酒が2杯つく1,500円の「昼呑みセット」(2026年)。新幹線で Nagoya に帰る前に寄った出張の人も (2026年5月)。2人で回しているので昼は時間がかかり、2026年7月のある日は40分。時間に余裕をもって。木曜はシェフのパスタ。',
  });
}

// ================================================================ 五條家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27034196/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:30', '22:00']);
  put({
    id: 'osaka_gojoya_nishinakajima', name: '五條家 (Gojo Ya)', category: 'OMNI',
    lat: 34.730279, lng: 135.497232, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every skewer is battered and deep-fried (kushikatsu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fried skewers, mostly meat and seafood (beef, shrimp, eel, scallop, conger, squid with sea-urchin sauce); vegetable skewers come in the same run.',
    hours_raw: 'Mon–Fri 17:30–22:00; closed Sat, Sun and holidays (Tabelog). Reservations accepted (Tabelog), and reviewers advise phoning ahead (April, July and October 2025). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR payment (Tabelog). Seat charge ¥300 (Tabelog\'s original text: 席料300円). 12 seats at a U-shaped counter; smoking allowed (Tabelog; June 2020). Lunch, once a line-out for pork-cutlet sets, has stopped (a May 2021 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島7-3-3, 末広ハイツ 101 — 10 min from JR Shin-Osaka, 6 min from the subway station (Tabelog); just south of Exit 7 of the Midosuji Line (June 2020), on a corner of back alleys west of Shin-Midosuji, easy to miss behind a sliding door (June 2022)',
    cuisine: 'Kushikatsu omakase only: skewers keep coming until you say stop, or a trial course of 10 for ¥2,500 (July 2025; January 2026) · four sauces on the counter, and you lay each skewer by the sauce it goes with (July 2025) · skewers named in 2025–2026: beef, shrimp, eel with tofu, chicken breast with yam, kisu with mitsuba, satoimo dengaku, okra with bacon and cheese, shimeji wrapped in meat, minced-onion stuffing, octopus, scallop, conger eel, quail egg, squid with sea-urchin sauce, kelp with roe, pork, negima, mochi with cheese · dessert: sorbet, and a fried chocolate skewer (July 2025) · sake, shochu, wine, beer (Tabelog; 2025)',
    website: null, gmaps: gm('五條家 西中島7-3-3'), menu_url: null,
    notes: "[Kushikatsu · Nishinakajima, a couple's creative skewer counter] A 12-seat U-shaped counter behind a sliding door and a white noren on a back-alley corner near Shin-Osaka, run by a long-serving couple (2020–2021 reviews). There is no menu to choose from: the chef fries small, light-battered skewers one at a time and sets them before you until you say stop, or you take a trial ten for ¥2,500 (2025–2026). The classics are here, beef and shrimp, but people come for the inventions: eel with tofu, okra with bacon and cheese, squid under sea-urchin sauce, kelp with roe, a sweet satoimo dengaku. Four sauces sit on the counter, and each skewer is laid beside the one it should meet. The skewers are small, so some diners leave wanting more (2025). Weekday evenings only; phone ahead. Smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Chef at the fryer and partner (an unnamed couple)'], origin: null, background: 'No shop description on Tabelog. Reviewers: "The experienced couple running the place provides a warm atmosphere" (June 2020); a long-established kushikatsu restaurant run by a skilled chef and the chef\'s wife, which used to draw lines for its pork-cutlet lunch sets; the same diner believed lunch had stopped because "the couple is now elderly" (May 2021).', philosophy: null, specialty: 'Creative kushikatsu omakase.',
      anecdotes: [
        { text: '"Four types of sauces were placed on the table, and freshly fried skewers were served in a bamboo tube on the counter. You\'re supposed to place the skewer in the same spot as the sauce you want to use." — July 2025, the trial 10-skewer course for JPY 2,500.', source: R + 'B510590862/' },
        { text: '"Before I knew it, I found myself saying, \'One more, one more,\' and ended up completely overindulging, but I have no regrets whatsoever." — October 2025, the omakase.', source: R + 'B514967936/' },
        { text: '"The skewer, coated in a thin and delicate batter, is surprisingly light and crispy." — January 2026, the 10-skewer omakase for JPY 2,500.', source: R + 'B521683099/' },
      ],
      japanese_sources_summary: '食べログ: 五條家、串揚げ、大阪市淀川区西中島7-3-3 末広ハイツ101、JR 新大阪駅から徒歩10分、地下鉄 新大阪駅から6分、月〜金17:30〜22:00、土・日・祝休み、予約可、カード可、電子マネー・QR 不可、席料300円、12席 (カウンターのみ)、喫煙可。口コミ(2020年6月〜2026年1月): Midosuji 線7番出口の南、路地のかど、白いのれんと串かつのちょうちん、引き戸、U 字のカウンター、ベテランの夫婦が切り盛り、昔は昼のとんかつ定食に行列、今は夜だけ、おまかせのみで「ストップ」まで、お試し10本2,500円、ソースは4種類で串を置く場所で決まる、牛肉、エビ、うなぎと豆腐、鶏むねと山芋、キスと三つ葉、里芋の田楽、オクラとベーコンとチーズ、しめじの肉巻き、ホタテ、穴子、うずら、イカのウニソース、子持ち昆布、豚、ねぎま、もちチーズ、デザートにシャーベットとチョコレートの串、電話で予約がおすすめ、串は小さめ。',
      confidence: 'medium', sources: [TB, R + 'B427377440/', R + 'B450643548/', R + 'B458689669/', R + 'B494335285/', R + 'B504870227/', R + 'B510590862/', R + 'B514967936/', R + 'B515026933/', R + 'B521683099/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase only, skewers until you say stop; book by phone. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島7-3-3 末広ハイツ１０１',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島七丁目3番3号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B510590862/', R + 'B521683099/', R + 'B514967936/'],
    price_note: 'Course price from July 2025 and January 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kushikatsu omakase, trial course of 10 skewers', '¥2,500', 'Omakase', 'no', 'no', 'July 2025; January 2026.', 'omakase_10'),
      it('', '', 'Kushikatsu omakase, until you say stop', '', 'Omakase', 'no', 'no', 'October 2025.', 'omakase_stop'),
    ] }, {
    cuisine: '串かつのおまかせのみ: 「ストップ」と言うまで出てくるか、お試しの10本2,500円 (2025年7月、2026年1月)・カウンターにソースが4種類、串を置く場所でどのソースかが決まる (2025年7月)・2025〜2026年の口コミに出てくる串: 牛、エビ、うなぎと豆腐、鶏むねと山芋、キスと三つ葉、里芋の田楽、オクラとベーコンとチーズ、しめじの肉巻き、玉ねぎのミンチの詰め物、タコ、ホタテ、穴子、うずらの卵、イカのウニソース、子持ち昆布、豚、ねぎま、もちチーズ・デザート: シャーベットと、揚げたチョコレートの串 (2025年7月)・日本酒、焼酎、ワイン、ビール (食べログ、2025年)',
    neighborhood: '西中島7-3-3、末広ハイツ101。JR 新大阪駅から徒歩10分、地下鉄の新大阪駅から6分 (食べログ)。Midosuji 線7番出口のすぐ南 (2020年6月)。Shin-Midosuji の西、路地の角で、引き戸なので見落としやすい (2022年6月)',
    gf_detail: 'グルテンフリーではありません。串はどれも衣をつけて揚げる串かつ。',
    vegan_detail: 'ヴィーガンではありません。揚げた串のおまかせで、ほとんどが肉と魚介 (牛、エビ、うなぎ、ホタテ、穴子、イカのウニソース)。野菜の串も同じ流れで出てくる。',
    notes: '[串かつ・西中島、夫婦の創作串のカウンター] 新大阪の近く、路地の角に引き戸と白いのれんの、U 字のカウンター12席の店で、長く続けているベテランの夫婦が切り盛り (2020〜2021年の口コミ)。メニューから選ぶことはなく、大将が軽い衣の小さな串をひとつずつ揚げて、「ストップ」と言うまで出してくれる。お試しの10本なら2,500円 (2025〜2026年)。牛やエビの定番もあるが、目当ては創作の串: うなぎと豆腐、オクラとベーコンとチーズ、ウニソースのイカ、子持ち昆布、甘い里芋の田楽。カウンターにはソースが4種類あり、串を置く場所でどのソースで食べるかが決まる。串は小さめなので、もの足りないという人も (2025年)。平日の夜だけ。電話で予約を。喫煙可。',
  });
}

save();
