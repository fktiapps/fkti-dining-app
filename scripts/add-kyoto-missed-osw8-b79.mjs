// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 79 (2026-11-08).
//   + 祇園 京くらら Gion Kyo Kurara (grilled nama-fu stall opposite Yasaka Shrine, takeaway; rest)
//   + 鳥處 大原家 Toridokoro Ooharaya (couple-run chicken restaurant, Kiyamachi-Oike basement; rest)
//   + おにぎりはつき Onigiri Hatsuki (onigiri shop with eat-in, Nishiki-Karasuma; rest)
//   + 鉄板スタンド酒場 ぽくぽーく Pokupoku (pork-steak teppan bar, Nishiki-Karasuma; rest)
//   Rest list (mod 6 = 1) after batch 78, nearest-first — skipped:
//   - マルミヤJr. 26037925: brand already in data, same concept — sister of マルミヤ亭 (kyoto_marumiya_tei, whose record names it),
//     reviewed for the same pork specialities such as pig's trotters; flagged for the coordinator.
//   - 鉄板 灼奏 26015821: no review dated 2025–26 (latest December 2023).
//   - ギャラリー遊形 26017771: non-restaurant retail — the shop of 柊家 (Hiiragiya ryokan, in data); no 2025–26 review either.
//   - そじ坊 四条烏丸FTスクエア店 26005495: chain — five そじ坊 shops in our crawls.
//   - 祇園かまぼこ いづ萬 26009239: retail food shop (Greg 11-07 ruling) — a kamaboko shop that reviewers (2013, 2023) say was founded
//     in 弘化元年 (1844) by a founder from Izumo, but no official source or stated family succession; flagged.
//   - 肉割烹バル 牛牛 GYUGYU 祇園本店 26026969: no review dated 2025–26 (latest November 2024).
//   - 異世界酒場 パンドラの匣 26040973: thin listing, 6 reviews (a board-game bar).
//   - 丸亀製麺 京都市役所前店 26022091: chain.
//   Brand check: queue-status.jsonl grepped for 京くらら, 大原家, はつき, ぽくぽーく — no entries; none is in data (main 4eb73acc,
//   hidden records included) by name.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-79');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26037925/', 'brand already in data, same concept: マルミヤJr. is the sister of マルミヤ亭 (kyoto_marumiya_tei), reviewed for the same pork specialities — flagged');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26015821/', 'no review dated 2025–26: the newest Tabelog review is from December 2023');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26017771/', 'non-restaurant retail: the gallery shop of 柊家 (Hiiragiya ryokan, in data); also no review dated 2025–26');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26005495/', 'chain: five そじ坊 shops in our crawls (なんばCITY, ハービスPLAZA, 京都ゼスト御池, 四条烏丸FTスクエア, 新大阪ニッセイビル)');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26009239/', 'retail food shop (Greg 11-07 ruling): kamaboko shop said by reviewers (2013, 2023) to date from 1844, but no official source or stated family succession — flagged');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26026969/', 'no review dated 2025–26: the newest Tabelog review is from November 2024');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26040973/', 'thin listing: 6 reviews (board-game bar)');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26022091/', 'chain: 丸亀製麺');

// ================================================================ 祇園 京くらら Gion Kyo Kurara
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26035069/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://kyokurara.com/';
  const W = day(['11:00', '17:00']); const E = day(['11:00', '18:00']);
  put({
    id: 'kyoto_gion_kyo_kurara', name: '祇園 京くらら (Gion Kyo Kurara)', category: 'OMNI',
    lat: 35.00412256787565, lng: 135.7772482003413, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: everything is made of nama-fu, which is wheat gluten (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nama-fu with white or red miso, kinako or sweet-potato filling may be plant-based, but some versions are wrapped in bacon (December 2025; September 2026).',
    hours_raw: 'Takeaway only — a street-side stall, with somewhere nearby to sit (June 2026). Monday–Friday 11:00–17:00; Saturday, Sunday and holidays 11:00–18:00; hours may change (Tabelog). No reservations (Tabelog). Cards (AMEX), e-money and QR (Tabelog). Grilled to order, about 5–10 minutes, with a number ticket (2026 reviews). Directly opposite Yasaka Shrine; busy at weekends (April 2026). Opened 13 March 2019 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, opposite Yasaka Shrine',
    cuisine: 'Kyoto nama-fu snacks grilled to order (2025–2026 reviews) · nama-fu dengaku with white or red miso; "aburi fu" with sweet miso and kinako, ¥400 for four; colourful three-colour skewers; fried fu with bubu-arare; sweet-potato or strawberry fillings; bacon-wrapped fu (December 2025–September 2026) · about ¥400–1,000 (Tabelog; 2026 reviews) · takeaway only',
    website: WEB, gmaps: gm('祇園 京くらら'), menu_url: null,
    notes: '[Nama-fu snacks · opposite Yasaka Shrine, takeaway] A tiny stall grilling chewy Kyoto nama-fu to order — miso dengaku, "aburi fu" with sweet miso and kinako, colourful skewers and sweet-filled versions — to eat as you walk. Wait about 10 minutes with a number; some find it pricey. Not for coeliacs: fu is wheat gluten.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a small take-out shop opened 13 March 2019 specialising in Kyoto-style nama-fu, directly across from Yasaka Shrine (2025–2026 reviews).',
      philosophy: null, specialty: 'Nama-fu dengaku.',
      anecdotes: [
        { text: 'An April 2026 walker, finding the aburi-mochi shop shut, came here for nama-fu with sweet white miso, ¥400 for four.', source: R + 'B525416383/' },
        { text: 'A December 2025 regular passes the Yasaka Shrine crossing and cannot resist the warm sweet-potato and strawberry fu.', source: R + 'B493944097/' },
        { text: 'An August 2026 visitor waited ten minutes with a number tag for the aburi fu, liked it, but thought it a bit pricey.', source: R + 'B533579360/' },
      ],
      japanese_sources_summary: '食べログ: 和菓子・甘味処、東山区祇園町北側294、祇園四条から489m、月〜金 11:00〜17:00、土・日・祝日 11:00〜18:00、予約不可、カード (AMEX)・電子マネー・QR 可、禁煙、2019年3月13日開店、公式サイトあり。口コミ (2025年12月〜2026年9月、英語): 八坂神社の真向かいの京生麩の持ち帰りの店、注文後に焼く (5〜10分、番号札)、白味噌・赤味噌の田楽、甘い味噌ときなこの炙り麩4本400円、三色の串、ぶぶあられの揚げ麩、紫芋やいちごのあん、ベーコン巻き、近くに座れる場所、週末は混む、高めとの声、店員がそっけなかったとの声 (2025年12月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B493944097/', R + 'B519278810/', R + 'B524639443/', R + 'B525416383/', R + 'B527678277/', R + 'B530556402/', R + 'B533579360/', R + 'B534856120/', R + 'B535096796/', R + 'B536045420/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway stall; order and wait with a number; cards (AMEX), IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側294',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004123, 135.777248); cross-checked: GSI 京都府京都市東山区祇園町北側294番地 (lot) 7 m; nearest existing record 4.2 m (kyoto_hachidaime_gihey_gion, 296); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525416383/', R + 'B533579360/'],
    price_note: 'Prices from April and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Aburi fu (four pieces)', '¥400', 'Nama-fu', 'no', 'ask', 'April and August 2026.', 'aburi_fu'),
      it('', '', 'Nama-fu dengaku', '', 'Nama-fu', 'no', 'ask', 'September 2026.', 'dengaku'),
    ] }, {
    cuisine: '注文後に焼く京の生麩のおやつ (2025〜2026年の口コミ)・白味噌や赤味噌の生麩田楽、甘い味噌ときなこの「炙り麩」4本400円、三色の串、ぶぶあられの揚げ麩、紫芋やいちごのあん、ベーコン巻き (2025年12月〜2026年9月)・400〜1,000円ほど (食べログ、2026年の口コミ)・持ち帰りのみ',
    neighborhood: '祇園、八坂神社の向かい',
    gf_detail: 'グルテンフリー不可。すべて小麦のグルテンである生麩 (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。白味噌や赤味噌、きなこ、紫芋あんの生麩は植物性の可能性があるが、ベーコン巻きもある (2025年12月、2026年9月)。',
    notes: '[生麩のおやつ・八坂神社の向かい、持ち帰り] もちもちの京生麩を注文後に焼く小さな店。味噌田楽、甘い味噌ときなこの「炙り麩」、色とりどりの串、あん入りなどを食べ歩きで。番号札で10分ほど待つ。高めという声も。生麩は小麦のグルテンなのでセリアック病の人は不可。',
  });
}

// ================================================================ 鳥處 大原家 Toridokoro Ooharaya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26017597/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://ooharaya.net/';
  const H = day(['11:30', '14:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_toridokoro_ooharaya', name: '鳥處 大原家 (Toridokoro Ooharaya)', category: 'OMNI',
    lat: 35.01037522492219, lng: 135.77076397771432, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chicken soup, sashimi and salt-grilled wings may be wheat-free, but there are noodles, fried tsukune and sweet sauces; no gluten information (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken specialist (2023–2026 reviews).',
    hours_raw: 'Monday–Wednesday and Friday–Sunday 11:30–14:00 and 17:00–21:30; closed Thursday (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). 16 seats: 9 at the counter, tables for 2–8, one tatami room (Tabelog). Some seats allow smoking (Tabelog). Basement of the MIYUKI building on the east side of Kiyamachi south of Oike; 5 min walk north from Keihan Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi, south of Oike — basement',
    cuisine: 'Chicken restaurant of sashimi, grills, hot pot and rice bowls (Tabelog; 2023–2026 reviews) · lunch sets with a chicken soup to start: oyakodon, yakitori-don, chicken nanban udon, kamo nanban with Kujo negi, tamago kake gohan (February 2023–November 2026) · dinner courses such as the Nishiyama course: chicken breast, gizzard and liver sashimi, steamed chicken with vegetables, salt-grilled wings, fried tsukune; mizutaki hot pot (November 2025; September 2026) · lunch about ¥1,000–2,000, dinner about ¥5,000–6,000 (Tabelog)',
    website: WEB, gmaps: gm('鳥處 大原家 木屋町'), menu_url: null,
    notes: '[Chicken · Kiyamachi-Oike, basement] A small, calm basement counter run by a couple, where a hotel-trained owner serves chicken every way: oyakodon and kamo nanban lunch sets that start with a clear chicken soup, and at night chicken sashimi, salt-grilled wings and mizutaki. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (husband)', 'Partner (wife)'], origin: null,
      background: 'Per reviewers: a chicken specialist run by a couple (August 2023), the owner bringing an impressive hotel background (February 2024), in a tidy basement on Kiyamachi.',
      philosophy: null, specialty: 'Oyakodon; chicken course.',
      anecdotes: [
        { text: 'An August 2023 guest, who phoned on the off-chance and got a table, found the owner working alone that night but serving everything efficiently.', source: R + 'B470271495/' },
        { text: 'A February 2026 Kyoto Marathon runner had kamo nanban heaped with Kujo negi and a rich-yolked tamago kake gohan for lunch.', source: R + 'B522525093/' },
        { text: 'A September 2026 diner on the Nishiyama course began with chicken broth, then breast, gizzard and liver sashimi.', source: R + 'B535296904/' },
      ],
      japanese_sources_summary: '食べログ: 鶏料理・焼き鳥・水炊き、中京区木屋町通御池下る上大阪町515 MIYUKIビル B1F、京阪三条駅から木屋町を北へ5分、月〜水・金〜日 11:30〜14:00、17:00〜21:30、木曜休み、予約可、カード (VISA・Master・JCB・AMEX) 可、電子マネー・QR 不可、16席 (カウンター9、テーブル8、座敷1)、一部喫煙可、公式サイトあり。口コミ (2023年2月〜2026年11月、英語): 夫婦で営む (2023年8月)、ホテル出身の店主 (2024年2月)、昼は鶏スープ付きの親子丼、焼き鳥丼、鶏南蛮うどん、九条ねぎの鴨南蛮、卵かけご飯、夜は Nishiyama コース (ささみ・砂肝・レバーの刺身、蒸し鶏、手羽の塩焼き、つくねの揚げ物)、鶏の鍋、地下でわかりにくい。',
      confidence: 'medium', sources: [TB, WEB, R + 'B460232198/', R + 'B462392180/', R + 'B470271495/', R + 'B477316723/', R + 'B479603302/', R + 'B515797102/', R + 'B517862972/', R + 'B522525093/', R + 'B535296904/', R + 'B538647565/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small basement counter; book for dinner; cards.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区木屋町通御池下る上大阪町515 MIYUKIビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.010375, 135.770764); cross-checked: GSI 京都府京都市中京区上大阪町515番地 (lot) 60 m; nearest existing record 9.9 m (ChIJ8fgL_FHnAGARtiRGS_o5ACY), and kyoto_s_vietnam_kiyamachi (same building, 2F) is 11.8 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515797102/', R + 'B535296904/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Oyakodon lunch set', '', 'Lunch', 'ask', 'no', '2023–2026 reviews.', 'oyakodon'),
      it('', '', 'Nishiyama course', '', 'Courses', 'ask', 'no', 'September 2026.', 'nishiyama'),
    ] }, {
    cuisine: '刺身、焼き物、鍋、丼の鶏料理の店 (食べログ、2023〜2026年の口コミ)・昼は鶏スープ付きの定食: 親子丼、焼き鳥丼、鶏南蛮うどん、九条ねぎの鴨南蛮、卵かけご飯 (2023年2月〜2026年11月)・夜は Nishiyama コースなど: ささみ・砂肝・レバーの刺身、野菜と蒸し鶏、手羽の塩焼き、つくねの揚げ物、水炊き (2025年11月、2026年9月)・昼1,000〜2,000円ほど、夜5,000〜6,000円ほど (食べログ)',
    neighborhood: '木屋町、御池の南、地下',
    gf_detail: '要確認。鶏スープ、刺身、手羽の塩焼きは小麦なしの可能性があるが、麺、揚げたつくね、甘いたれもある。グルテンの情報はない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏料理の専門店 (2023〜2026年の口コミ)。',
    notes: '[鶏料理・木屋町御池、地下] 夫婦で営む落ち着いた地下のカウンター。ホテル出身の店主が鶏をあらゆる形で出す。昼は澄んだ鶏スープから始まる親子丼や鴨南蛮の定食、夜は鶏刺し、手羽の塩焼き、水炊き。木曜休み。',
  });
}

// ================================================================ おにぎりはつき Onigiri Hatsuki
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042791/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '17:00']);
  put({
    id: 'kyoto_onigiri_hatsuki', name: 'おにぎりはつき (Onigiri Hatsuki)', category: 'OMNI',
    lat: 35.00514697786967, lng: 135.76052524036336, cuisine_type: 'shokudo',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A plain salt onigiri is rice, salt and nori, but fillings such as tuna mayo, bento toppings and grilled onigiri may contain soy or wheat; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A salt onigiri with nori is plant-based; check the miso soup\'s dashi and each filling (2025–2026 reviews).',
    hours_raw: 'Tuesday–Saturday 9:00–17:00; Sunday 9:00–15:00; closed Monday; hours may change (Tabelog). Order and pay at the register first; eat in or take away — the nori differs between the two (April 2025). Cards, e-money and QR (Tabelog). Reservations accepted (Tabelog). In the former Eitaro site, a few metres west of Daimaru Kyoto; 2 min walk from Shijo or Karasuma Stn (Tabelog; April 2025). Opened 24 March 2025 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: day(['09:00', '15:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishiki-Karasuma, west of Daimaru',
    cuisine: 'Onigiri shop of Niigata "Shinnosuke" rice and Ariake Sea nori, with an eat-in space (2025–2026 reviews) · about 40 kinds, e.g. salmon ¥390, salt, grilled onigiri, seasonal salmon butter, tuna mayo with yuzu takana ¥440, a "bento" onigiri topped with octopus sausage, meatball and omelette (March 2025–September 2026) · miso soup set +¥250–300, e.g. aosa seaweed miso soup; set with miso soup about ¥1,000 (March 2025–December 2025) · about ¥400–1,500 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('おにぎりはつき 烏丸'), menu_url: null,
    notes: '[Onigiri · Nishiki-Karasuma, from 9 a.m.] A bright onigiri shop near Daimaru that opens at 9, making some forty rice balls from premium Niigata rice and Ariake nori — from plain salt to salmon butter and yuzu-takana tuna mayo — to eat in with miso soup or take away. Order and pay first. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per reviewers: an onigiri specialist opened 24 March 2025 in the former Eitaro site near Shijo-Karasuma, using 100% Niigata "Shinnosuke" rice and Ariake Sea nori, with attentive staff (2025–2026 reviews).',
      philosophy: 'The rice and the nori are the stars (March 2025).', specialty: 'Salt onigiri with nori.',
      anecdotes: [
        { text: 'An April 2025 visitor explained the system: order and pay at the register first, and the nori differs for eating in and taking away.', source: R + 'B503763322/' },
        { text: 'A December 2025 guest had the cute "bento" onigiri with octopus sausage and an aosa miso soup set, touched by the staff\'s care.', source: R + 'B519140436/' },
        { text: 'An August 2026 diner noted the onigiri are about ¥400 each and the miso set ¥300, and might skip the set with a pricier filling.', source: R + 'B534221855/' },
      ],
      japanese_sources_summary: '食べログ: おにぎり、中京区元法然寺町683 烏丸錦ビル 1F、四条駅・烏丸駅から徒歩2分、火〜土 9:00〜17:00、日 9:00〜15:00、月曜休み、予約可、カード・電子マネー・QR 可、テイクアウト、2025年3月24日開店。口コミ (2025年3月〜2026年9月、英語): 新潟の「Shinnosuke」と有明海の海苔のおにぎり専門店、以前は Eitaro の場所、最初にレジで注文と会計、店内と持ち帰りで海苔が違う (2025年4月)、約40種類、鮭390円、塩、焼きおにぎり、季節の鮭バター、柚子高菜とツナマヨ440円、たこさんウインナーなどの弁当おにぎり、味噌汁セット +250〜300円、あおさの味噌汁、ていねいな接客。',
      confidence: 'medium', sources: [TB, R + 'B503763322/', R + 'B503765927/', R + 'B503818021/', R + 'B503822977/', R + 'B504523102/', R + 'B505127497/', R + 'B519140436/', R + 'B520940190/', R + 'B534221855/', R + 'B537630348/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay first; eat in or take away; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区元法然寺町683 烏丸錦ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005147, 135.760525); cross-checked: GSI 京都府京都市中京区元法然寺町683番地 (lot) 29 m; nearest existing record 14.8 m (kyoto_ishiyaki_jidori_torikura); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503765927/', R + 'B537630348/'],
    price_note: 'Prices from March 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Salmon onigiri', '¥390', 'Onigiri', 'ask', 'no', 'March 2025.', 'salmon'),
      it('', '', 'Tuna mayo with yuzu takana onigiri', '¥440', 'Onigiri', 'ask', 'no', 'September 2026.', 'tunamayo'),
      it('', '', 'Salt onigiri', '', 'Onigiri', 'ask', 'ask', 'March 2025; December 2025.', 'salt'),
    ] }, {
    cuisine: '新潟の「Shinnosuke」と有明海の海苔のおにぎりの店、店内でも食べられる (2025〜2026年の口コミ)・約40種類: 鮭390円、塩、焼きおにぎり、季節の鮭バター、柚子高菜とツナマヨ440円、たこさんウインナーやミートボール、卵焼きをのせた「弁当」おにぎり (2025年3月〜2026年9月)・味噌汁セット +250〜300円、あおさの味噌汁、味噌汁付きのセット約1,000円 (2025年3〜12月)・400〜1,500円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '錦烏丸、大丸の西',
    gf_detail: '要確認。塩むすびは米、塩、海苔だが、ツナマヨ、弁当の具、焼きおにぎりなどは醤油や小麦の可能性。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。海苔の塩むすびは植物性。味噌汁のだしと各具材は確認を (2025〜2026年の口コミ)。',
    notes: '[おにぎり・錦烏丸、朝9時から] 大丸近くの明るいおにぎりの店で朝9時開店。新潟の上等な米と有明の海苔で、塩むすびから鮭バター、柚子高菜のツナマヨまで約40種類を、味噌汁と店内で、または持ち帰りで。先に注文と会計を。月曜休み。',
  });
}

// ================================================================ 鉄板スタンド酒場 ぽくぽーく Pokupoku
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044525/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:30']);
  put({
    id: 'kyoto_teppan_stand_pokupoku', name: '鉄板スタンド酒場 ぽくぽーく (Pokupoku)', category: 'OMNI',
    lat: 35.005067, lng: 135.760307, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: gyoza and teppan dishes with soy-based sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork-steak teppan bar (2026 reviews).',
    hours_raw: 'Daily 16:00–23:30 (last orders food 22:30, drinks 23:00); closing days vary (Tabelog). Reservations accepted — not to be confused with other shops in the building; two-person bookings may be given a wall standing table (Tabelog; August 2026). Table seat charge ¥360, none at the standing counter or with the Pokupoku salad or a course (Tabelog original 立飲み席は頂いておりません。テーブル席のみお席料金360円頂戴しております。※ぽくぽーくサラダのご提供・コースご利用の場合は頂いておりません。). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 66 places: 58 at tables, 8 standing (Tabelog). Smoking allowed (Tabelog). Wisteria building 2F, by the Daimaru car park; 4 min walk from Shijo or Hankyu Karasuma Stn (Tabelog). Opened 26 February 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishiki-Karasuma, by Daimaru',
    cuisine: 'Teppan standing bar built around thick-cut pork steak (2026 reviews) · pork steak by weight (e.g. the 350 g "Rookie" for three) with truffle soy sauce; small teppan plates, gyoza; a salad as the starter (April–September 2026) · cheap drinks such as a ¥100 lemon sour; courses with three hours of all-you-can-drink ¥5,000 (April–August 2026) · about ¥2,000–3,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('鉄板スタンド酒場 ぽくぽーく 烏丸'), menu_url: null,
    notes: '[Teppan bar · Nishiki-Karasuma, 2F] A busy, cheap standing-and-table bar opened in 2026, famous for thick pork steaks grilled on the teppan with truffle soy sauce, plus small plates and ¥100 lemon sours. Tables carry a ¥360 seat charge; the standing counter does not. Smoking allowed; can be cramped and slow when full.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a teppan standing bar opened 26 February 2026 near Daimaru Kyoto, popular from the start for pork steak; an April 2026 reviewer took it to be a sister of a restaurant called Fuhufu.',
      philosophy: null, specialty: 'Thick-cut pork steak.',
      anecdotes: [
        { text: 'A June 2026 trio of women shared the 350 g "Rookie" pork steak and were surprised by the ¥100 lemon sour.', source: R + 'B530694699/' },
        { text: 'An August 2026 pair who had booked were put at a narrow wall standing table, the only option for two, and held back on ordering.', source: R + 'B534555490/' },
        { text: 'A September 2026 solo drinker found the pork steak fattier than expected and was unsure about returning.', source: R + 'B534563272/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・鉄板焼き・餃子、中京区元法然寺町685 ウィステリアビル 2F、四条駅・阪急烏丸駅から徒歩4分、大丸の駐車場の隣、毎日 16:00〜23:30 (L.O.料理22:30、飲み物23:00)、不定休、予約可 (同じビルの他店と間違えないよう)、立飲み席は席料なし、テーブル席のみ席料360円 (ぽくぽーくサラダやコースの場合はなし)、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・PayPay 可、電子マネー不可、66席 (テーブル58、立飲み8)、喫煙可、2026年2月26日開店。口コミ (2026年4月〜9月、英語): 厚切りのポークステーキ (350g の「Rookie」など)、トリュフ醤油、小皿の鉄板料理、餃子、お通しはサラダ、レモンサワー100円、3時間飲み放題のコース5,000円、Fuhufu の姉妹店との声 (2026年4月)、2人の予約は壁際の立ちテーブルだったとの声 (2026年8月)、飲み物が遅い・脂が多いとの声。',
      confidence: 'medium', sources: [TB, R + 'B525970185/', R + 'B527205390/', R + 'B529129906/', R + 'B530694699/', R + 'B530947195/', R + 'B533361210/', R + 'B533631994/', R + 'B534555490/', R + 'B534563272/', R + 'B534586854/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥360 table charge (none standing); smoking allowed; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区元法然寺町685 ウィステリアビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; opened February 2026; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005067, 135.760362) moved 5.0 m west to (35.005067, 135.760307): the Tabelog point is 2.7 m from kyoto_ishiyaki_jidori_torikura (same building, 1F), now 7.6 m; GSI 京都府京都市中京区元法然寺町685番地 (lot) 20 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530694699/', R + 'B527205390/', TB],
    price_note: 'Prices from April and June 2026 reviews and Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Pork steak "Rookie" (350 g)', '', 'Teppan', 'no', 'no', 'June 2026.', 'pork_steak'),
      it('', '', 'Course with 3 hours all-you-can-drink', '¥5,000', 'Courses', 'no', 'no', 'April 2026.', 'course'),
      it('', '', 'Table seat charge', '¥360', 'Charge', 'ask', 'no', 'Tabelog; none standing or with the Pokupoku salad or a course.', 'seat'),
    ] }, {
    cuisine: '厚切りのポークステーキが主役の鉄板の立ち飲み酒場 (2026年の口コミ)・グラムで選ぶポークステーキ (3人で350g の「Rookie」など) とトリュフ醤油、鉄板の小皿、餃子、お通しはサラダ (2026年4〜9月)・100円のレモンサワーなど安い飲み物、3時間飲み放題のコース5,000円 (2026年4〜8月)・2,000〜3,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '錦烏丸、大丸のそば',
    gf_detail: 'グルテンフリー不可。餃子と醤油系のたれの鉄板料理 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ポークステーキの鉄板酒場 (2026年の口コミ)。',
    notes: '[鉄板酒場・錦烏丸、2階] 2026年開店のにぎやかで安い立ち飲みとテーブルの酒場。鉄板で焼く厚切りのポークステーキをトリュフ醤油で、小皿と100円のレモンサワーも。テーブル席は席料360円、立ち飲みは不要。喫煙可。混むと狭く遅いことも。',
  });
}

save();
