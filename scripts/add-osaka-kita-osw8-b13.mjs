// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 13.
//   + 宝楽 Houraku (Showa-style neighbourhood Chinese by Higashi-Mikuni, mostly delivery and takeaway, lunch sets with rice refills)
//   + とりや、圓 Toriya, En (binchotan yakitori by JR Higashi-Yodogawa since 2004, omakase skewers and chicken sashimi; book ahead)
//   + 鶏魚酒場 炭治郎 Toriuo Sakaba Sumijiro (chicken-and-fish izakaya by Higashi-Mikuni, chicken nanban lunch sets)
//   + Shippoya (izakaya by JR Higashi-Yodogawa since 1994, once known for oxtail and Kyushu vegetables, now with Oita dishes; run by the owner alone)
//   - skipped 煌彩酒家 ファンファン 27109413: sister shop of 中国料理 ファンファン (27111425, 宮原4-3-39, 941 reviews, also an odd id but outside
//     the core phase: 60 seats). Reviews: "a popular sister restaurant of the famed Fan Fan in Shin-Osaka" (November 2023), "Fewer menu items
//     than the main branch" (May 2026). Taking the sister first would, under the same-brand rule, shut out the main shop later; flagged so the
//     coordinator can pull 27111425 forward instead.
//   Chain check of the four added: one shop each on Tabelog; Toriya, En's site (toriya-en.com, read 2026-11-02) lists one shop; web search for
//     炭治郎 found no other branch (2026-11-02).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02); no record within 60 m of any of the four.
//   open_late per the brief: Sumijiro to 24:00 set true; Houraku 21:30, En 23:00 (site: 22:00) and Shippoya 23:00 set false.
//   Gloss rule from the coordinator (2026-11-02): generic dish words in ordinary Japanese even from English sources; Latin only for proper names,
//   specific menu-item names, or when the Japanese dish is ambiguous.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27109413', 'sister shop of 中国料理 ファンファン (27111425, Shin-Osaka, not yet in data); flagged so the main shop can be taken instead');

// ================================================================ 宝楽
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27013037/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '21:30']);
  put({
    id: 'osaka_houraku_higashimikuni', name: '宝楽 (Houraku)', category: 'OMNI',
    lat: 34.741834, lng: 135.497021, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: battered kara-age, shumai, spring rolls, gyoza, ramen; soy and oyster-sauce stir-fries.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and shrimp in every set; ramen-style soup.',
    hours_raw: 'Mon–Fri and Sun 11:30–14:30 and 17:00–21:30; Sat 11:30–15:00 and 17:00–21:30 (Tabelog). Reservations accepted (Tabelog). No cards, e-money or QR (Tabelog; June 2024). Tabelog lists 2 seats; a diner counted 2 counter seats and 2 tables (February 2024), and the counter was piled with things (June 2022). Smoking allowed throughout (Tabelog; 2022–2025). Mostly delivery and takeaway: Demae-can (2017), Uber Eats (August 2025), bento sold at the front (2024–2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: day(['11:30', '15:00'], ['17:00', '21:30']), 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: '東三国5-6-2, 2 min from the north exit of Higashi-Mikuni on the Midosuji Line (Tabelog)',
    cuisine: 'Neighbourhood Chinese (Tabelog; reviews) · daily lunch set: a main such as pork kimchi, stir-fried pork and peppers or vegetables in oyster sauce, with kara-age, shumai, a meatball, salad, soup and free rice refills; ¥750 (September 2023), ¥800 (2024), ¥850 (October 2026) · men\'s set: pork with garlic chives, roast pork, kara-age, spring rolls, shumai, kimchi, rice and soup with refills; ¥1,030 (November 2023), ¥1,200 (August 2026) · sweet and sour pork set with fried rice, kara-age, shumai and more ¥1,300 (August 2025) · "Horoyoi Set": a drink with kara-age, shumai, roast pork and kimchi plus one main such as shrimp chili, liver and garlic chives, sweet and sour pork or mapo tofu (May 2026); ¥1,000 (April 2021) · fried rice and ramen sets; gyoza packed with vegetables (June 2024) · shrimp chili bento, fried rice (2019–2020) · a ladies\' set (December 2025)',
    website: null, gmaps: gm('宝楽 東三国 中華'), menu_url: null,
    notes: '[Chinese · Higashi-Mikuni, a Showa-style takeaway canteen with cheap lunch sets] A tiny local Chinese kitchen two minutes from Higashi-Mikuni, where most of the trade goes out by delivery bike and phone, and the few seats inside sit among the bustle of four or five staff (2025–2026). The daily lunch set is the draw: a main such as pork kimchi with kara-age, shumai, salad, soup and endless rice for ¥850 (October 2026), served fast. Evenings bring the "Horoyoi Set", a drink and a spread of small plates. Diners call it greasy and Showa-era but filling; smoking is allowed inside, and it is cash only.',
    chef_bio: { chef_name: null, roles: ['Kitchen and delivery staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a Chinese restaurant two minutes from Higashi-Mikuni; delivery through Demae-can (the listing links its Demae-can page). Per reviews: "There were about three delivery bikes in front of the restaurant" (September 2023); "It seems that takeout is the main service, as there were continuous orders coming in" (February 2024); "about 4 to 5 staff members present" with phone and delivery orders (April 2025); "a slightly greasy, Showa-era local Chinese food atmosphere" (August 2025); some side items tasted pre-prepared or came out lukewarm (2022–2025); "Another impressive aspect was the speed of service" (October 2026).',
      philosophy: null, specialty: 'Daily lunch set with refills; Horoyoi Set.',
      anecdotes: [
        { text: '"With this many options for only JPY 800, it’s an unbeatable price." — February 2024, daily lunch set.', source: R + 'B479685236/' },
        { text: '"If you’re looking for a cheap, fast, and filling Chinese lunch around Higashi-Mikuni, this is definitely a place to remember." — October 2026, daily lunch ¥850.', source: R + 'B536991386/' },
        { text: '"I was a bit surprised to see about five staff members in this cozy little restaurant!" — May 2026.', source: R + 'B528940447/' },
      ],
      japanese_sources_summary: '食べログ: 宝楽、中華料理、大阪市淀川区東三国5-6-2、Midosuji Line の東三国駅北口から徒歩2分、月〜金・日11:30〜14:30、17:00〜21:30、土11:30〜15:00、17:00〜21:30、予約可、カード・電子マネー・QR 不可、2席、喫煙可、Demae-can。口コミ (2017年〜2026年10月): 日替わりランチ750〜850円 (豚キムチ、ピーマンと肉の炒め物など、唐揚げ、焼売、肉団子、サラダ、スープ、ごはんおかわり自由)、Men\'s set 1,030〜1,200円 (ニラと豚、焼豚、唐揚げ、春巻き、焼売、キムチ)、酢豚のセット1,300円、Horoyoi Set (飲み物、唐揚げ、焼売、焼豚、キムチにエビチリ、ニラレバ、酢豚、麻婆豆腐などから1品)、チャーハンとラーメンのセット、野菜たっぷりの餃子、エビチリ弁当、店頭で弁当、配達が中心、Uber Eats、スタッフ4〜5人、昭和の町中華の雰囲気、提供が早い、店内は喫煙可、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B366933590/', R + 'B451140374/', R + 'B471231740/', R + 'B479685236/', R + 'B481322096/', R + 'B486488620/', R + 'B512992501/', R + 'B518992076/', R + 'B520003060/', R + 'B528940447/', R + 'B534390898/', R + 'B536991386/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Daily set written on a board outside (2024). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国5-6-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国五丁目6番2号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536991386/', R + 'B534390898/', R + 'B512992501/', R + 'B528940447/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('日替わりランチ', '', 'Daily lunch set with rice refills', '¥850', 'Lunch', 'no', 'no', 'October 2026.', 'higawari_lunch'),
      it('', '', 'Men\'s set', '¥1,200', 'Sets', 'no', 'no', 'August 2026.', 'mens_set'),
      it('', '', 'Sweet and sour pork set', '¥1,300', 'Sets', 'no', 'no', 'August 2025.', 'subuta_set'),
      it('', '', '"Horoyoi Set": a drink and small plates with one main', '', 'Sets', 'no', 'no', 'May 2026.', 'horoyoi_set'),
    ] }, {
    cuisine: '町の中華 (食べログ、口コミ)・日替わりランチ: 豚キムチ、ピーマンと肉の炒め物、オイスターソースの野菜炒めなどに、唐揚げ、焼売、肉団子、サラダ、スープ、ごはんおかわり自由。750円 (2023年9月)、800円 (2024年)、850円 (2026年10月)・Men\'s set: ニラと豚、焼豚、唐揚げ、春巻き、焼売、キムチ、ごはんとスープはおかわり可。1,030円 (2023年11月)、1,200円 (2026年8月)・酢豚のセット、チャーハン、唐揚げ、焼売など1,300円 (2025年8月)・Horoyoi Set: 飲み物に唐揚げ、焼売、焼豚、キムチ、エビチリ、ニラレバ、酢豚、麻婆豆腐などから1品 (2026年5月)。1,000円 (2021年4月)・チャーハンとラーメンのセット、野菜たっぷりの餃子 (2024年6月)・エビチリ弁当、チャーハン (2019〜2020年)・Ladies’ set (2025年12月)',
    neighborhood: '東三国5-6-2、Midosuji Line の東三国駅北口から2分 (食べログ)',
    gf_detail: 'グルテンフリーではありません。衣の唐揚げ、焼売、春巻き、餃子、ラーメン。醤油やオイスターソースの炒め物。',
    vegan_detail: 'ヴィーガンではありません。どのセットにも肉やエビ。ラーメンのようなスープ。',
    notes: '[中華・東三国、安いランチセットの昭和の町中華] 東三国から2分の小さな町の中華で、注文の多くは配達のバイクと電話で出ていき、店内の少ない席のまわりで4〜5人のスタッフが忙しく動く (2025〜2026年)。目当ては日替わりランチ: 豚キムチなどに唐揚げ、焼売、サラダ、スープ、ごはんおかわり自由で850円 (2026年10月)、出てくるのも早い。夜は飲み物と小皿が並ぶ Horoyoi Set。油っぽい昭和の店という声もあるが、おなかいっぱいになる。店内は喫煙可。現金のみ。',
  });
}

// ================================================================ とりや、圓
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27021663/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'osaka_toriya_en_higashiyodogawa', name: 'とりや、圓 (Toriya, En)', category: 'OMNI',
    lat: 34.740974, lng: 135.50399, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers come with salt or tare (soy-based); kara-age and soup chazuke on the side.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout; a few vegetable skewers (tomato, young corn, shiitake) may share the grill.',
    hours_raw: 'Mon, Tue and Thu–Sun 18:00–23:00 (food last order 22:15); closed Wednesday (Tabelog). The shop site gives 18:00–22:00, closed Wednesday, with a monthly calendar (read 2026-11-02). Reservations taken and strongly advised; often fully booked (site; 2023–2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog; site). 18 seats: 8 at the counter, 10 at tables; private hire up to 20; non-smoking; children welcome (Tabelog). A cabbage appetiser is charged, ¥500 (May 2026). Opened 1 March 2004 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '東三国1-3-12, 2 min from JR 東淀川駅, along the tracks north of the west exit; 8 min from Higashi-Mikuni (Tabelog; site; April 2026)',
    cuisine: 'Yakitori grilled over Kishu binchotan, fanned by hand (site) · omakase skewers, 7 or 10, chosen and ordered by the owner from the day\'s rare cuts (site): 7 for ¥1,800 (January 2026), 10 for ¥2,700 (February 2026) · skewers: breast with wasabi, gizzard, neck, liver, heart, skin, tsunagi, quail egg, wings with spices, tsukune with salt or rare, tomato, young corn, yagen cartilage (2023–2026) · chicken sashimi: breast ¥870 (January 2026), liver sashimi ¥900, rare-grilled hen ¥680 (February 2026); sasami-zukuri and liver pâté (site) · fried cartilage ¥500, kara-age, offal stew, eringi with anchovy butter, smoked prosciutto, ginkgo (2025–2026) · to finish: grilled rice ball in tea broth, chicken-soup chazuke ¥700, rice porridge (2025–2026) · seasonal: Iwate duck loin over charcoal; smoked prosciutto with fig (site, August 2026) · sake, shochu and wine chosen by the owner; draft Heartland ¥650 (site; January 2026) · raw tsukune, once famous, dropped after a TV feature brought too many orders (January 2026)',
    website: 'https://www.toriya-en.com/', gmaps: gm('とりや、圓 東三国 焼き鳥'), menu_url: null,
    notes: '[Yakitori · JR Higashi-Yodogawa, binchotan skewers and chicken sashimi, book ahead] An 18-seat yakitori shop two minutes from JR Higashi-Yodogawa, open since 2004 and usually fully booked. The owner grills over Kishu binchotan, fanning by hand, and the omakase of 7 or 10 skewers (¥1,800 or ¥2,700, 2026) runs through rare cuts in a set order, slightly rare and juicy. Chicken sashimi and liver sashimi are the other draw, and a grilled rice ball in tea broth is the usual finish. A diner says the owner trained at Ayamuya (October 2026). Closed Wednesdays; non-smoking; cards accepted.',
    chef_bio: { chef_name: null, roles: ['Owner-grill master (unnamed)'], origin: null,
      background: 'Per the shop site (toriya-en.com, read 2026-11-02): strong-heat Kishu binchotan; the owner judges each cut\'s moisture and fat and fans without pause; the omakase skewers, with the doneness and order chosen by the owner, are "the essence of Toriya, En"; sake, wine and shochu chosen by the owner; seats kept few so each skewer can be grilled with care. Per Tabelog: opened 1 March 2004. Per reviews: "The master, who has proper skills, comes from Ayamuya" (a regular since the opening, October 2026); raw tsukune was dropped after a TV feature by the duo Savannah brought a rush of orders (January 2026); "The staff is very friendly" (April 2026).',
      philosophy: 'Lock the umami inside with charcoal smoke, for "the powerful juiciness of the chicken itself" (site, translated).', specialty: 'Omakase skewers over binchotan; chicken and liver sashimi.',
      anecdotes: [
        { text: '"After the broadcast, we received so many orders for raw tsukune that we stopped offering it." — the staff, January 2026.', source: R + 'B460658927/' },
        { text: '"Sitting right in front of the grill was quite an experience, as I watched delicious dishes being grilled that I hadn’t even ordered." — January 2026.', source: R + 'B520416457/' },
        { text: '"Instead of going for the omakase skewers, I recommend ordering what you really want." — a regular since the opening, October 2026.', source: R + 'B538369842/' },
      ],
      japanese_sources_summary: '店のサイト (toriya-en.com): 新大阪・東淀川の焼き鳥店、紀州備長炭、部位ごとの水分量と脂の乗りを見て団扇を振る、おまかせ串7串・10串は店主が焼き加減と出す順番にこだわる、むね、ずり、せせり、きも、つなぎ、手羽、うずら、かわ、ささみ造り、レバーパテ、期間限定の岩手鴨ロース炭火焼、生ハムスモークといちじく、店主が選ぶ日本酒・ワイン・焼酎、18:00〜22:00、水曜休み、現金とクレジットカード、全席禁煙、予約がおすすめ。食べログ: とりや、圓、焼き鳥・日本酒バー・居酒屋、大阪市淀川区東三国1-3-12、JR 東淀川駅から徒歩2分、月・火・木〜日18:00〜23:00、水曜休み、18席 (カウンター8、テーブル10)、2004年3月1日オープン。口コミ (2023年〜2026年10月): おまかせ7本1,800円、10本2,700円、鶏むねの刺身870円、レバー刺し900円、親鶏のレア焼き680円、軟骨の唐揚げ500円、鶏スープ茶漬け700円、焼きおにぎりの茶漬け、ヤングコーン、キャベツのお通し500円、テレビのあと生のつくねはやめた、店主は Ayamuya 出身、予約がないと入りにくい。',
      confidence: 'medium', sources: ['https://www.toriya-en.com/', TB, R + 'B333445760/', R + 'B460658927/', R + 'B515419760/', R + 'B520416457/', R + 'B520796270/', R + 'B523437744/', R + 'B523636038/', R + 'B529702753/', R + 'B531143145/', R + 'B537650038/', R + 'B538369842/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter in front of the grill; family-friendly (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-3-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and shop site with an October 2026 calendar notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目3番12号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B460658927/', R + 'B523437744/'],
    price_note: 'Prices from January–February 2026 reviews.', last_checked: TODAY, items: [
      it('おまかせ串 7串', '', 'Omakase, 7 skewers', '¥1,800', 'Yakitori', 'ask', 'no', 'January 2026.', 'omakase_7'),
      it('おまかせ串 10串', '', 'Omakase, 10 skewers', '¥2,700', 'Yakitori', 'ask', 'no', 'February 2026.', 'omakase_10'),
      it('', '', 'Chicken breast sashimi', '¥870', 'Sashimi', 'ask', 'no', 'January 2026.', 'mune_sashimi'),
      it('', '', 'Liver sashimi', '¥900', 'Sashimi', 'ask', 'no', 'February 2026.', 'reba_sashi'),
      it('', '', 'Chicken-soup chazuke', '¥700', 'To finish', 'ask', 'no', 'January 2026.', 'tori_chazuke'),
    ] }, {
    cuisine: '紀州備長炭で焼き、団扇であおる焼き鳥 (店のサイト)・おまかせ串7串か10串、店主がその日の希少部位から選んで順に出す (店のサイト)。7本1,800円 (2026年1月)、10本2,700円 (2026年2月)・串: むねのわさび、砂肝、せせり、レバー、ハツ、皮、つなぎ、うずらの卵、スパイスの手羽、塩かレアのつくね、トマト、ヤングコーン、やげん軟骨 (2023〜2026年)・鶏の刺身: むね870円 (2026年1月)、レバー刺し900円、親鶏のレア焼き680円 (2026年2月)。ささみ造りとレバーパテ (店のサイト)・軟骨の唐揚げ500円、唐揚げ、もつ煮、エリンギのアンチョビバター、生ハムのスモーク、銀杏 (2025〜2026年)・締め: 焼きおにぎりの茶漬け、鶏スープの茶漬け700円 (2025〜2026年)・期間限定: 岩手鴨ロース炭火焼、生ハムスモークといちじく (店のサイト、2026年8月)・店主が選ぶ日本酒、焼酎、ワイン。ハートランドの生ビール650円 (店のサイト、2026年1月)・かつて名物だった生のつくねは、テレビのあと注文が殺到してやめた (2026年1月)',
    neighborhood: '東三国1-3-12、JR 東淀川駅から2分、西口を出て線路沿いを北へ。東三国駅から8分 (食べログ、店のサイト、2026年4月)',
    gf_detail: '要確認。グルテンの情報なし。串は塩かたれ (醤油ベース)。唐揚げや茶漬けも。',
    vegan_detail: 'ヴィーガンではありません。ほとんどが鶏。トマト、ヤングコーン、しいたけなどの野菜の串も同じ焼き台。',
    notes: '[焼き鳥・JR 東淀川、備長炭の串と鶏の刺身、要予約] JR 東淀川駅から2分、2004年からの18席の焼き鳥店で、たいてい予約でいっぱい。店主が紀州備長炭で団扇をあおぎながら焼き、おまかせの7本か10本 (1,800円か2,700円、2026年) は希少部位を順に、少しレアでジューシーに出す。鶏の刺身とレバー刺しももうひとつの目当てで、締めは焼きおにぎりの茶漬けが定番。店主は Ayamuya 出身という声も (2026年10月)。水曜休み。全席禁煙。カード可。',
  });
}

// ================================================================ 鶏魚酒場 炭治郎
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27088543/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['17:00', '00:00']);
  put({
    id: 'osaka_toriuo_sakaba_sumijiro_higashimikuni', name: '鶏魚酒場 炭治郎 (Toriuo Sakaba Sumijiro)', category: 'OMNI',
    lat: 34.742562, lng: 135.499035, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Battered chicken nanban, kara-age, tempura and fried oysters are out; sashimi and salt-grilled chicken need checking for soy sauce and ponzu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and fish throughout; miso soup with the lunch sets. Tabelog ticks "vegetarian options" but names none.',
    hours_raw: 'Mon–Sat 11:30–13:30 and 17:00–24:00 (last order 23:00); closed Sunday and 31 December–5 January; lunch stops 26 December and resumes 6 January (Tabelog). Reservations accepted; cancel by the day before, or by 14:00 on the day for a change of one or two people, or a fee applies (Tabelog). Cards (VISA, Master, JCB); no e-money or QR (Tabelog). 26 seats, counter and tables; private hire 20–50; non-smoking; children welcome (Tabelog); room for wheelchairs and strollers (February 2026). A small appetiser is served at night (February 2026). Opened 21 October 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東三国2-37-14, 1 min from exit 1 of Higashi-Mikuni on the Midosuji Line, next to "Japan" (Tabelog); in a side street off Shin-Midosuji (September 2025)',
    cuisine: 'Chicken and fish izakaya with charcoal grilling (Tabelog; reviews) · lunch sets with rice, miso soup, a small side and pickles; all under ¥1,000 (2024–2026): chicken nanban set ¥850 (July 2024), ¥900 (2025–2026); "Yamitsuki" kara-age set ¥850–900, sweet and savoury glaze (2024–2025); tsukimi tsukune set, two patties, ¥900 (September 2026); daily specials such as shrimp tempura bowl ¥800 (November 2024); small or large rice ±¥50 · evening: flounder, kanpachi and conger-eel sashimi (2024–2026); grilled jidori and Tanba chicken, neck and tail (2024–2026); grilled chicken neck with yuzu kosho ¥638, with green onion and ponzu ¥693 (January 2026); chicken tender tempura; yagen cartilage with yuzu kosho; fried oysters; grilled edamame; dashimaki tamago; hot pot in winter; shrimp mayo ¥693; garlic butter fries ¥473 (2024–2026) · course with all-you-can-drink ¥4,400 (February 2026) · sake, shochu and awamori (2024–2026)',
    website: null, gmaps: gm('鶏魚酒場 炭治郎 東三国'), menu_url: null,
    notes: '[Izakaya · Higashi-Mikuni, chicken and fish by day and night] A 26-seat izakaya a minute from Higashi-Mikuni Station, tucked into a back street off Shin-Midosuji, built around charcoal-grilled chicken and fresh fish. At lunch the owner often works alone, turning out chicken nanban with plenty of tartar sauce, kara-age or tsukimi tsukune sets for ¥900 in about five minutes (2026). In the evening it fills up for flounder or kanpachi sashimi, grilled jidori neck with yuzu kosho, dashimaki and a long sake and shochu list, or a ¥4,400 course with all-you-can-drink. Open to midnight; closed Sundays; cards accepted.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed) and evening staff'], origin: null,
      background: 'Per Tabelog: an izakaya for chicken and fish, with yakitori and chicken dishes; particular about vegetables and fish; opened 21 October 2015. Per reviews: "Although the owner runs the place alone, the service is efficient, taking less than five minutes from seating to serving" (lunch, September 2026); a young chef ran lunch single-handed and said "Fish is quite expensive, so I can’t keep it under JPY 1000. We do serve it occasionally for lunch, but chicken is our main focus" (October 2026); in the evening, efficient staff (September 2025) or a single staff member (February 2026); "Many of the other customers seemed to be regulars" (July 2024).',
      philosophy: null, specialty: 'Chicken nanban; charcoal-grilled jidori; sashimi.',
      anecdotes: [
        { text: '"A genius combination of seafood and local chicken. Both ingredients are excellent, likely due to high-quality suppliers." — December 2024.', source: R + 'B496900973/' },
        { text: '"The Chicken Nanban was incredibly tender, and the tartar sauce was simply exquisite." — October 2026, ¥900 set.', source: R + 'B537427901/' },
        { text: '"They even have Awamori and some unique Japanese sake, which made it a fun experience." — April 2026.', source: R + 'B527004803/' },
      ],
      japanese_sources_summary: '食べログ: 鶏魚酒場 炭治郎、居酒屋・焼き鳥・鳥料理、大阪市淀川区東三国2-37-14、Midosuji Line の東三国駅1番出口から徒歩1分、Japan のとなり、月〜土11:30〜13:30、17:00〜24:00 (L.O.23:00)、日曜と12月31日〜1月5日休み、予約可 (キャンセルは前日まで)、カード可、電子マネー・QR 不可、26席、貸切20〜50名、禁煙、子ども歓迎、2015年10月21日オープン。口コミ (2024年7月〜2026年10月): ランチはどれも1,000円以下、チキン南蛮定食850〜900円、Yamitsuki の唐揚げ定食850〜900円、月見つくね定食900円、エビ天丼800円、ごはんの大小は50円増減、夜はヒラメ、カンパチ、conger eel の刺身、地鶏や丹波の鶏の炭火焼、鶏の首肉の柚子胡椒焼き638円、ささみの天ぷら、やげん軟骨、カキフライ、焼き枝豆、だし巻き、冬の鍋、エビマヨ、ガーリックバターのポテト、飲み放題つきコース4,400円、日本酒、焼酎、泡盛、昼は店主ひとりで回すことも。',
      confidence: 'medium', sources: [TB, R + 'B134313999/', R + 'B488548189/', R + 'B496900973/', R + 'B497695993/', R + 'B513483628/', R + 'B514128476/', R + 'B522436557/', R + 'B522967584/', R + 'B527004803/', R + 'B535735199/', R + 'B537427901/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats for solo diners; step-free room for wheelchairs (February 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国2-37-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with year-end dates; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国二丁目37番14号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537427901/', R + 'B535735199/', R + 'B514128476/', R + 'B522436557/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('チキン南蛮定食', '', 'Chicken nanban set (lunch)', '¥900', 'Lunch', 'no', 'no', 'October 2026.', 'chicken_nanban_teishoku'),
      it('月見つくね定食', '', 'Tsukimi tsukune set (lunch)', '¥900', 'Lunch', 'ask', 'no', 'September 2026.', 'tsukimi_tsukune_teishoku'),
      it('', '', '"Yamitsuki" kara-age set (lunch)', '¥900', 'Lunch', 'no', 'no', 'September 2025.', 'karaage_teishoku'),
      it('', '', 'Grilled chicken neck with yuzu kosho', '¥638', 'Grilled', 'ask', 'no', 'January 2026.', 'seseri_yuzukosho'),
      it('', '', 'Course with all-you-can-drink', '¥4,400', 'Courses', 'ask', 'no', 'February 2026.', 'nomihodai_course'),
    ] }, {
    cuisine: '鶏と魚の居酒屋、炭火焼き (食べログ、口コミ)・ランチはごはん、みそ汁、小鉢、漬物つきの定食で、どれも1,000円以下 (2024〜2026年): チキン南蛮定食850円 (2024年7月)、900円 (2025〜2026年)。Yamitsuki の唐揚げ定食850〜900円、甘辛いたれ (2024〜2025年)。月見つくね定食、つくね2個で900円 (2026年9月)。日替わりのエビ天丼800円など (2024年11月)。ごはんの小・大は50円引き・増し・夜: ヒラメ、カンパチ、conger eel の刺身 (2024〜2026年)。地鶏や丹波の鶏の炭火焼、首肉や尾の部分 (2024〜2026年)。鶏の首肉の柚子胡椒焼き638円、ねぎポン酢693円 (2026年1月)。ささみの天ぷら、やげん軟骨の柚子胡椒、カキフライ、焼き枝豆、だし巻き卵、冬の鍋、エビマヨ693円、ガーリックバターのフライドポテト473円 (2024〜2026年)・飲み放題つきのコース4,400円 (2026年2月)・日本酒、焼酎、泡盛 (2024〜2026年)',
    neighborhood: '東三国2-37-14、Midosuji Line の東三国駅1番出口から1分、Japan のとなり (食べログ)。Shin-Midosuji から入った横道 (2025年9月)',
    gf_detail: '要確認。グルテンの情報なし。衣のチキン南蛮、唐揚げ、天ぷら、カキフライは不可。刺身や塩焼きの鶏は醤油やポン酢を確認。',
    vegan_detail: 'ヴィーガンではありません。ほとんどが鶏と魚。ランチの定食にはみそ汁。食べログの特徴にベジタリアンメニューありとあるが、どの料理かは書かれていない。',
    notes: '[居酒屋・東三国、昼も夜も鶏と魚] 東三国駅から1分、Shin-Midosuji から入った裏通りの26席の居酒屋で、炭火で焼く鶏と新鮮な魚が中心。昼は店主がひとりで回すことも多く、タルタルたっぷりのチキン南蛮、唐揚げ、月見つくねの定食が900円で、5分ほどで出てくる (2026年)。夜はヒラメやカンパチの刺身、地鶏の首肉の柚子胡椒焼き、だし巻き、日本酒と焼酎の多い品ぞろえ、飲み放題つき4,400円のコースで満席に。深夜0時まで。日曜休み。カード可。',
  });
}

// ================================================================ Shippoya
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27027999/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_shippoya_higashiyodogawa', name: 'Shippoya', category: 'OMNI',
    lat: 34.74129, lng: 135.504173, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Tori-ten, kara-age and fried dishes are battered; ask about the rest.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oxtail, chicken and fish dishes. The vegetable salad, pickles and Tabelog\'s "vegetarian options" tick are the only leads; ask about dressings and dashi.',
    hours_raw: 'Wed–Sun, holidays and the days before and after 17:00–23:00 (food last order 22:00, drinks 22:30); closed Monday and Tuesday; may also close on irregular days (Tabelog). Reservations accepted; parties by phone (Tabelog). No cards or e-money; PayPay accepted (Tabelog). 21 seats: 5 at the counter, one table for 4 and 12 on tatami; private hire up to 20; non-smoking, smoking outside (Tabelog; April 2024). Children and babies welcome, kids menu, strollers welcome; takeaway (Tabelog). Opened 28 July 1994 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '東三国1-4-31, 2 min from JR 東淀川駅, along the tracks north of the west exit, behind a brick front (Tabelog; October 2025)',
    cuisine: 'Izakaya (Tabelog) · now (October 2025): renovated, serving Oita dishes such as "Ryukyu" and tori-ten, and kara-age made with the shop\'s broth · the name comes from tail (shippo) dishes (April 2024): oxtail hot pot finished with rice, grilled tail, "Shippo-yaki" (2020–2025); a diner still hoped to try the tail in May 2026 · vegetables sourced from Kumamoto and Kyushu (November 2020): the "luxury vegetable salad", half ¥780 (2019, 2024), with Batten Nasu from Kumamoto and Shizuka tomato from Hyogo (April 2024); homemade pickles ¥300 (2019) · Kenken bonito with homemade salsa and soy-koji ¥1,100; white asparagus with tuna kimchi ¥600 (April 2024) · shime-saba and fried tuna (April 2025) · beef-tendon dishes, wiener and beef-tendon fried rice (2020–2024) · highballs ¥440, wine bottles, sake chosen with the owner\'s advice (2024–2025)',
    website: null, gmaps: gm('Shippoya 東三国 東淀川駅'), menu_url: null,
    notes: '[Izakaya · JR Higashi-Yodogawa, a 1994 tail-and-vegetable izakaya now cooking Oita food] A 21-seat izakaya along the tracks two minutes from JR Higashi-Yodogawa, open since 1994, with a small counter and a tatami room. It made its name with tail dishes (shippo means tail) such as oxtail hot pot, and with a salad of rare vegetables from Kumamoto and Kyushu (2019–2024). A new chef took over (November 2024), and after a renovation it now serves Oita dishes such as "Ryukyu" and tori-ten (October 2025). The owner runs it alone, so food can take a while (April 2025), but gives good sake advice (December 2025). Closed Mondays and Tuesdays; PayPay, no cards.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), running the shop alone'], origin: null,
      background: 'Per Tabelog: opened 28 July 1994; izakaya particular about vegetables and fish; English-speaking staff listed. Per reviews: "The name Shippo Ya may sound fantastical, but it essentially means a place that serves tails" (April 2024); "They are committed to sourcing vegetables from Kumamoto and the Kyushu region" and "family-owned and closely connected to the community rather than being a chain" (November 2020); delivery begun during COVID-19 (2020); "The chef has changed, and the pickled cabbage is no longer available" (November 2024); "Since the owner runs the place alone, the wait time from ordering to receiving your food can be quite long" (April 2025); "Previously, the restaurant was known for its tail dishes … but it has since been renovated to offer Oita cuisine" (October 2025); "The owner\'s advice on Japanese sake is very helpful" (December 2025).',
      philosophy: null, specialty: 'Oita dishes (Ryukyu, tori-ten); tail dishes.',
      anecdotes: [
        { text: '"Every vegetable is carefully selected, and I felt as if I was savoring the essence of each ingredient." — September 2024, on the vegetable salad, from a customer returning after 20 years.', source: R + 'B112651739/' },
        { text: '"You can enjoy local specialties like Ryukyu and Tori Ten." — October 2025.', source: R + 'B515564186/' },
        { text: '"The tail is perfectly simmered to a tender texture, yet retains its rich flavor." — December 2023, tail hot pot.', source: R + 'B475824217/' },
      ],
      japanese_sources_summary: '食べログ: Shippoya、居酒屋、大阪市淀川区東三国1-4-31、JR 東淀川駅から徒歩2分、水〜日・祝・祝前日・祝後日17:00〜23:00 (L.O. 料理22:00、ドリンク22:30)、月・火休み、不定休あり、予約可、カード・電子マネー不可、PayPay 可、21席 (カウンター5、テーブル4、座敷12)、貸切20名まで、禁煙、英語を話せるスタッフ、子ども・赤ちゃん歓迎、キッズメニュー、テイクアウト、1994年7月28日オープン。口コミ (2016年〜2026年5月): 店名は尻尾から、テールの鍋、テールの焼き物、熊本と九州の野菜、Luxury Vegetable Salad のハーフ780円、Batten Nasu、Shizuka tomato、自家製の漬物、Kenken 鰹1,100円、しめ鯖、マグロのフライ、2024年11月に料理人が替わった、店主ひとりで料理に時間がかかる (2025年4月)、改装して大分の料理に、Ryukyu、とり天、唐揚げ (2025年10月)、店主の日本酒のアドバイス (2025年12月)。',
      confidence: 'low', sources: [TB, R + 'B112651739/', R + 'B291373956/', R + 'B423053010/', R + 'B475824217/', R + 'B483395815/', R + 'B496345594/', R + 'B505085611/', R + 'B515564186/', R + 'B518803332/', R + 'B529119425/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tabelog lists English-speaking staff, not confirmed in reviews since the owner began running the shop alone. Kids menu and tatami seating (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市淀川区東三国1-4-31',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; short reviews dated April and May 2026; the current menu (Oita dishes) is sourced only to October 2025.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区東三国一丁目4番31号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483395815/', R + 'B515564186/'],
    price_note: 'Few current prices; the April 2024 prices predate the change of chef.', last_checked: TODAY, items: [
      it('とり天', '', 'Tori-ten (Oita-style chicken tempura)', '', 'Oita dishes', 'no', 'no', 'October 2025.', 'toriten'),
      it('', '', '"Ryukyu" (Oita dish)', '', 'Oita dishes', 'ask', 'no', 'October 2025.', 'ryukyu'),
      it('', '', 'Luxury vegetable salad, half', '¥780', 'Vegetables', 'ask', 'ask', 'April 2024, before the change of chef.', 'yasai_salad_half'),
    ] }, {
    cuisine: '居酒屋 (食べログ)・いま (2025年10月): 改装して、Ryukyu やとり天など大分の料理と、店のだしを使った唐揚げ・店名は尻尾の料理から (2024年4月): ご飯で締めるテールの鍋、テールの焼き物、Shippo-yaki (2020〜2025年)。2026年5月にもテールを食べたいという声・熊本と九州から仕入れる野菜 (2020年11月): Luxury Vegetable Salad のハーフ780円 (2019年、2024年)、熊本の Batten Nasu、兵庫の Shizuka tomato (2024年4月)。自家製の漬物300円 (2019年)・Kenken 鰹に自家製のサルサソースと醤油麹1,100円。白アスパラのマグロキムチ600円 (2024年4月)・しめ鯖とマグロのフライ (2025年4月)・牛すじの料理、ウインナーと牛すじのチャーハン (2020〜2024年)・ハイボール440円、ボトルのワイン、店主に相談して選ぶ日本酒 (2024〜2025年)',
    neighborhood: '東三国1-4-31、JR 東淀川駅から2分、西口から線路沿いを北へ、れんがの外観 (食べログ、2025年10月)',
    gf_detail: '要確認。グルテンの情報なし。とり天、唐揚げ、揚げ物は衣つき。ほかは確認を。',
    vegan_detail: 'ヴィーガンではありません。テール、鶏、魚の料理。手がかりは野菜サラダ、漬物、食べログの特徴のベジタリアンメニューありだけ。ドレッシングとだしは確認を。',
    notes: '[居酒屋・JR 東淀川、1994年からのテールと野菜の居酒屋、いまは大分の料理] JR 東淀川駅から2分、線路沿いの21席の居酒屋で、1994年から。小さなカウンターと座敷がある。テールの鍋など尻尾の料理 (店名の由来) と、熊本や九州の珍しい野菜のサラダで知られた (2019〜2024年)。新しい料理人に替わり (2024年11月)、改装後は Ryukyu やとり天など大分の料理を出す (2025年10月)。店主がひとりで切り盛りするので料理に時間がかかることも (2025年4月)、日本酒の相談に乗ってくれる (2025年12月)。月・火休み。PayPay 可、カード不可。',
  });
}

save();
