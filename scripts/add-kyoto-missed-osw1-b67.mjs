// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 67.
//   + 路地との本 Roji to no Moto (sushi and kappo down a Miyagawa-cho alley; seafood hitsumabushi at lunch)
//   + 和牛料亭 bungo 祇園 Wagyu Ryotei bungo Gion (all-serve Oita Wagyu courses in a listed Shinbashi-dori building)
//   + 京風お好み焼き鉄板焼き 先斗 Kyofu Okonomiyaki Teppanyaki Ponto (Kyoto-style okonomiyaki by Pontocho, open to 3 am)
//   + 金扇 Kin Sen (old-style counter sushi on Teramachi south of Sanjo, cash only)
//   No skips this batch.
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26029760, 26038928, 26040614, 26008358.
//   queue-status.jsonl grepped for each brand (との本, bungo, 先斗, 京風お好み, 金扇): no earlier rulings.
//   None of the four is in data/kyoto.json by name or address (宮川筋5-325-1, 元吉町56, 桜之町406). 材木町176-3 also
//   holds Restaurant muni (kyoto_restaurant_muni_kiyamachi), a different shop in the same building.
//   Same-name count (same brand or operator only): bungo — the brand site lists two shops, 和牛料亭 bungo in Nazuna 京都
//   椿通 and this Gion shop; operator not found — drafted and flagged. 路地との本, 先斗, 金扇 — one shop each. Large-parent
//   list checked.
//   Service charges, checked against the Japanese originals: 路地との本 サービス料を10％頂戴しております (own site), and
//   for foreign guests only 寿司コース 12,000円＋サービス料; bungo — Tabelog says a service fee may be added but its
//   “Original text” shows only “a”, so the amount is not known; 先斗 one food and one drink per person (July 2025 review);
//   none listed for 金扇.
//   Other-diner remarks (Greg 2026-11-06): two November 2025 reviews of 先斗 mention many foreign customers — only
//   two reviews, and not needed, so left out; a single 2025 review of 金扇 about international guests left out; a single
//   2025 review of bungo about meeting a maiko left out.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-67');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 路地との本
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26029760/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://roji-tonomoto.com/';
  const H = day(['11:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_roji_tonomoto', name: '路地との本 (Roji to no Moto)', category: 'OMNI',
    lat: 34.998954, lng: 135.770973, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi with soy sauce, homemade sesame miso and a fish-bone dashi poured over the lunch bowl; dinner adds dishes such as shark fin, Chateaubriand and a choice of soba, curry udon or yuzu ramen to finish. The shop asks guests to mention allergies in advance and says ingredients can be changed (own site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sushi and seafood throughout, with a fish-bone dashi (own site; 2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:00–14:30 and 17:00–23:00; closed Monday (Tabelog). Reservations accepted, same day possible depending on bookings; same-day cancellations are charged 100% (own site). Service charge 10% (own site, original サービス料を10％頂戴しております). Cards; no e-money or QR (Tabelog). 24 seats: 11 at the counter, a 4-seat tatami room and 12 at tables, with private rooms; smoking only in the private room (Tabelog). Down an alley in Miyagawa-cho, about 10 min from Keihan Kiyomizu-Gojo or Gion-Shijo (Tabelog). Opened 22 October 2017 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Miyagawa-cho, north of Matsubara — 10 min from Keihan Kiyomizu-Gojo or Gion-Shijo',
    cuisine: 'Sushi and kappo cooking with seafood of every kind (own site) · rice cooked in a kama once guests arrive and dressed with a gently acidic vinegar just before each nigiri (own site) · dinner course of five dishes (Chateaubriand or shark fin as the main), 7–8 nigiri, a small bowl of hand-made soba, curry udon or yuzu ramen, and dessert, from ¥21,780 including service (own site); omakase courses ¥19,800 and ¥25,800 plus service on Tabelog · 40–50 à la carte dishes and a counter fish case, counter only (own site) · lunch seafood hitsumabushi set ¥4,980: eaten as a bowl, then with wasabi and sesame miso, then with fish-bone dashi poured over (Tabelog; September–November 2026) · ten-piece daily omakase nigiri ¥4,400 with red miso soup (September 2026) · lunch from ¥2,980 (2026 reviews) · sake from Shizuoka, Kyoto and Fukui, and wine (own site)',
    website: SITE, gmaps: gm('路地との本 宮川町'), menu_url: SITE + 'menu',
    notes: '[Sushi and kappo · Miyagawa-cho alley, hitsumabushi at lunch] A sushi and kappo restaurant down a lantern-lit alley in Miyagawa-cho, with a counter, a tatami room and private rooms around a small garden. Lunch is a much-praised seafood hitsumabushi (¥4,980) finished with fish-bone dashi; dinner courses run from about ¥20,000. 10% service charge; for foreign guests only, a ¥12,000 sushi course plus service. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes a chef with over 22 years of experience cooking Japanese food and sushi, with semi-custom dishes on request. A September 2026 diner found the head chef friendly and fun to talk with.',
      philosophy: 'The food, the dishes, the plating and the service are an art of the moment; the aim is for each meal to stay with the guest as a “work” (own site).', specialty: 'Seafood hitsumabushi; sushi.',
      anecdotes: [
        { text: 'A notice dated 10 April 2026 says foreign guests can now order à la carte, and offers a sushi course for foreign guests only — 海外の方限定になりますが、寿司コース 12,000円＋サービス料 (starter, 10–12 nigiri, dessert).', source: SITE },
        { text: 'A November 2026 diner asked for a second bowl of rice, set aside some sea bream, added sesame sauce and poured the fish-bone broth over to make sea-bream chazuke.', source: R + 'B538709902/' },
        { text: 'An October 2026 visitor noted the lunch uses the same fish as the dinner menu.', source: R + 'B538149011/' },
      ],
      japanese_sources_summary: '公式サイト: 祇園・宮川町の和食・寿司「路地との本」、鮨をベースにあらゆる海鮮と料理、コースやアラカルトにシャトーブリアン、フカヒレ、スッポン、ゲストが来てから釜炊きする米、握る直前に合わせる寿司飯と千鳥酢、主に京都の器、坪庭、昼のランチコース7,700円、ちらし寿司セット4,950円、夜の御夕食コース21,780円から (税・サービス料込み)、アラカルト約40〜50品 (カウンターのみ)、サービス料10%、当日キャンセル100%、2026年4月10日のお知らせ: 海外の方もアラカルト可、海外の方限定の寿司コース12,000円＋サービス料、日本酒は磯自慢、蒼空、黒龍など。食べログ: 寿司・日本料理・海鮮、東山区松原上ル宮川筋5-325-1、火〜日 11:00〜14:30、17:00〜23:00、月曜定休、24席、2017年10月22日オープン、料理人歴22年以上。口コミ (2026年、英語): 海鮮ひつまぶし4,980円、おまかせ握り10貫4,400円、ランチは2,980円から、ごま味噌、アラの出汁、ご飯のおかわり。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'menu', SITE + 'about', R + 'B535185243/', R + 'B535658862/', R + 'B535847617/', R + 'B536320666/', R + 'B536570954/', R + 'B537138304/', R + 'B538149011/', R + 'B538638702/', R + 'B538709902/', R + 'B538724119/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Site in English, Chinese and Korean; à la carte and a sushi course for foreign guests; 10% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原上ル宮川筋5-325-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.998954, 135.770973); cross-checked: GSI 京都府京都市東山区宮川筋五丁目325番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu', TB],
    price_note: 'Prices from the shop’s site and Tabelog, tax included; dinner on Tabelog is plus service.', last_checked: TODAY, items: [
      it('', '', 'Seafood hitsumabushi set (lunch)', '¥4,980', 'Lunch', 'ask', 'no', 'Tabelog; September–November 2026.', 'hitsumabushi'),
      it('', '', 'Daily omakase nigiri, ten pieces (lunch)', '¥4,400', 'Lunch', 'ask', 'no', 'September 2026.', 'nigiri10'),
      it('ちらし寿司セット', 'chirashi-zushi setto', 'Chirashi-zushi set (15 a day)', '¥4,950', 'Lunch', 'ask', 'no', 'Own site.', 'chirashi'),
      it('', '', 'Dinner course', 'from ¥21,780', 'Dinner', 'ask', 'no', 'Own site; tax and service included.', 'dinner'),
      it('', '', 'Sushi course for foreign guests only', '¥12,000 + service', 'Dinner', 'ask', 'no', 'Own site, 10 April 2026.', 'foreign'),
    ] }, {
    cuisine: '鮨をベースに、あらゆる海鮮と料理 (公式サイト)・ゲストが来てから釜炊きする米、握る直前に千鳥酢で合わせる寿司飯 (公式サイト)・夜は料理5品 (メインはシャトーブリアンかフカヒレ)、握り7〜8貫、〆のひと口麺 (手打ちそば、名物カレーうどん、柚子ラーメン)、デザートで21,780円から (税・サービス料込み、公式サイト)。食べログではおまかせコース19,800円と25,800円 (サービス料別)・アラカルト約40〜50品とネタケース、カウンターのみ (公式サイト)・昼の海鮮ひつまぶしセット4,980円: まず丼で、次にわさびとごま味噌、最後にアラの出汁をかけて (食べログ、2026年9〜11月)・おまかせ握り10貫4,400円と赤だし (2026年9月)・昼は2,980円から (2026年の口コミ)・日本酒は磯自慢、蒼空、黒龍など、ワインも (公式サイト)',
    neighborhood: '松原上ルの宮川町。京阪清水五条・祇園四条から徒歩10分',
    gf_detail: '要確認。醤油、自家製のごま味噌、昼の丼にかけるアラの出汁を使う寿司。夜はフカヒレ、シャトーブリアン、〆のそば・カレーうどん・柚子ラーメンなど。アレルギーは事前に知らせれば食材を変更できる (公式サイト)。',
    vegan_detail: 'ヴィーガンではない。寿司と海鮮が中心で、出汁はアラ (公式サイト、2026年の口コミ)。',
    notes: '[寿司と割烹・宮川町の路地、昼はひつまぶし] 宮川町の灯籠の灯る路地の奥、坪庭を囲んでカウンター、座敷、個室のある寿司と割烹の店。昼は評判の海鮮ひつまぶし (4,980円) をアラの出汁で締める。夜のコースは約2万円から。サービス料10%。海外の方限定で寿司コース12,000円＋サービス料。月曜定休。',
  });
}

// ================================================================ 和牛料亭 bungo 祇園
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26038928/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://wagyuryotei-bungo.com/gion/';
  put({
    id: 'kyoto_wagyu_ryotei_bungo_gion', name: '和牛料亭 bungo 祇園 (Wagyu Ryotei bungo Gion)', category: 'OMNI',
    lat: 35.00581, lng: 135.774195, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wagyu courses served by the staff — raw-beef dishes, grilled Wagyu, sukiyaki over rice, Kyoto vegetables; no gluten information (own site; 2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every course is built on Wagyu (own site).',
    hours_raw: 'By reservation: lunch seatings 12:00–14:00 and dinner seatings 17:00–20:30 (first sitting from 17:00, second from 20:00) (own site; Tabelog). Closing days not listed. Same-day reservations possible; credit-card payment (own site). The site asks foreign guests to book by email through the booking site (original 海外からお越しのお客様は予約サイトからメールにてお願い致します). Courses are generally for guests of middle-school age and up; a private room costs ¥5,500 a head, waived for children under school age, who can have a ¥3,500 yakiniku-bowl set at dinner; one drink per person (Tabelog). Tabelog says a service fee may be added, but its Japanese original gives no amount. Cards; no e-money or QR (Tabelog). 32 seats: a 10-seat counter and private rooms for 2, 2 (detached), 6 and 8 (Tabelog). Non-smoking (Tabelog). On Shinbashi-dori in a building designated by Kyoto City, 7 min from Keihan Gion-Shijo (own site; Tabelog). Opened 5 February 2023 (own site).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shinbashi-dori — 7 min from Keihan Gion-Shijo',
    cuisine: '“Yakiniku you don’t grill yourself”: Wagyu cooked and served by the staff, led by Oita Wagyu, with Kyoto ingredients and Japanese tableware (own site) · seven dinner courses from ¥19,580 (Advance, sirloin, 10 dishes) to ¥35,200 (Grand Reserve, 15 dishes, counter only), each also offered as an all-grilled version for guests who avoid raw meat (own site) · six lunch courses of Wagyu steak from ¥13,000 to ¥25,000, using Oita, Omi and Kobe (Tajima) beef (own site) · sukiyaki with rice and Kyoto vegetables (January 2025) · fresh yatsuhashi for dessert (February 2025) · freshly cooked rice (July 2026)',
    website: SITE, gmaps: gm('和牛料亭 bungo 祇園'), menu_url: SITE,
    notes: '[Wagyu courses · Gion Shinbashi-dori, all-serve] A Wagyu restaurant in a listed building on Gion’s Shinbashi-dori where staff cook and serve every course of Oita Wagyu — raw-beef dishes, steak, sukiyaki over rice — at a counter or in private rooms. Dinner ¥19,580–35,200, lunch ¥13,000–25,000; all-grilled versions for those who avoid raw meat. Foreign guests are asked to book by email; a service fee may apply. Flagged: the operator was not found.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'The brand site lists two shops: 和牛料亭 bungo inside Nazuna 京都 椿通 and this Gion shop. The operating company was not found. A July 2026 reviewer describes young staff who speak English and are friendly.',
      philosophy: 'Bringing out the true appeal of meat through “yakiniku you don’t grill yourself”, with tableware and drinks chosen to match (own site).', specialty: 'Oita Wagyu courses.',
      anecdotes: [
        { text: 'A January 2025 diner on the Premium course singled out the sukiyaki eaten with rice and the fresh Kyoto vegetables.', source: R + 'B503054282/' },
        { text: 'A July 2026 diner found the cooking more show than substance and wanted a wider wine list, but praised the freshly cooked rice.', source: R + 'B533369106/' },
      ],
      japanese_sources_summary: '公式サイト: 和牛料亭 bungo 祇園、東山区新橋通大和大路東入元吉町56、2023年2月5日グランドオープン、京都市指定の伝統的建造物、オールサーブによる“焼かない焼肉”、おおいた和牛、ディナー7コース (祇園アドバンス19,580円〜グランドリザーブ35,200円、生肉が苦手な方向けの【焼】コースも)、ランチ6コース13,000〜25,000円 (おおいた和牛、近江牛、神戸牛)、カウンター2〜10名、店の間、離れの間、海外からのお客様は予約サイトからメールで、当日予約可、Nazuna 京都 椿通内にも和牛料亭 bungo。食べログ: 予約時間 昼12:00〜14:00、夜17:00〜20:30、中学生以上、個室料1人5,500円、ワンドリンク制、32席、禁煙。口コミ (2025〜2026年、英語): すき焼きとご飯、生八ツ橋のデザート、英語を話す若いスタッフ、炊きたてのご飯。',
      confidence: 'medium', sources: [TB, SITE, 'https://wagyuryotei-bungo.com/', R + 'B502156031/', R + 'B503054282/', R + 'B533369106/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Foreign guests book by email through the booking site; staff cook and serve at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通大和大路東入元吉町56',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own site with 2026 course menus; Tabelog review dated July 2026.' },
    pin_source: `Tabelog ${TB} (35.00581, 135.774195); cross-checked: GSI 京都府京都市東山区元吉町56番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the shop’s 2026 menu; a service fee may be added (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Gion Advance course — top Wagyu sirloin, 10 dishes (also all-grilled)', '¥19,580', 'Dinner', 'ask', 'no', 'Own site.', 'advance'),
      it('', '', 'Gion Special course — top Wagyu Chateaubriand, 10 dishes', '¥23,100', 'Dinner', 'ask', 'no', 'Own site.', 'special'),
      it('', '', 'Gion Premium course — Chateaubriand and sirloin, 12 dishes', '¥26,400', 'Dinner', 'ask', 'no', 'Own site.', 'premium'),
      it('', '', 'Grand Reserve Wagyu course, 15 dishes (counter only)', '¥35,200', 'Dinner', 'ask', 'no', 'Own site.', 'grand'),
      it('', '', 'Gion lunch course — Advance Wagyu sirloin steak, 7 dishes', '¥13,000', 'Lunch', 'ask', 'no', 'Own site.', 'lunch'),
    ] }, {
    cuisine: 'オールサーブによる“焼かない焼肉”。おおいた和牛を中心に、京の食材と和食器で (公式サイト)・ディナーは7コース、祇園アドバンス (サーロイン、10品) 19,580円からグランドリザーブ (15品、カウンター限定) 35,200円まで。生肉が苦手な方向けの【焼】コースも (公式サイト)・ランチは和牛ステーキの6コース、13,000〜25,000円、おおいた和牛、近江牛、神戸牛 (但馬牛) (公式サイト)・すき焼きとご飯、京野菜 (2025年1月)・デザートに生八ツ橋 (2025年2月)・炊きたてのご飯 (2026年7月)',
    neighborhood: '祇園の新橋通。京阪祇園四条から徒歩7分',
    gf_detail: '要確認。スタッフが仕上げて出す和牛のコース。生肉の料理、焼いた和牛、すき焼きとご飯、京野菜。グルテンの情報はない (公式サイト、2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。どのコースも和牛が中心 (公式サイト)。',
    notes: '[和牛のコース・祇園新橋通、オールサーブ] 祇園新橋通の京都市指定の建物で、スタッフがおおいた和牛のコースを焼いて出す。生肉の料理、ステーキ、すき焼きとご飯をカウンターか個室で。夜19,580〜35,200円、昼13,000〜25,000円、生肉が苦手な方には焼きのコース。海外の方はメールで予約。サービス料がかかる場合あり。運営会社は不明 (要確認)。',
  });
}

// ================================================================ 京風お好み焼き鉄板焼き 先斗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040614/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:00', '03:00']);
  put({
    id: 'kyoto_kyofu_okonomiyaki_ponto', name: '京風お好み焼き鉄板焼き 先斗 (Kyofu Okonomiyaki Teppanyaki Ponto)', category: 'OMNI',
    lat: 35.008099, lng: 135.770903, cuisine_type: 'okonomiyaki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Okonomiyaki, yakisoba and udon are wheat; teppan dishes such as yam steak, corn butter, seseri and Wagyu steak are listed, but sauces and the grill are shared and nothing is said about gluten (Tabelog menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the okonomiyaki batter is made with dashi (December 2025, June 2026 reviews); the rest of the menu is pork, beef, seafood and butter dishes (Tabelog menu).',
    hours_raw: 'Daily 12:00–15:00 (L.O. food 14:00, drinks 14:30) and 17:00–03:00 (Tabelog). Reservations accepted (Tabelog). One food and one drink order per person (July 2025 review). Cards and QR; no e-money (Tabelog). 20 seats: three tatami tables for 4 and an 8-seat counter (Tabelog). Smoking allowed (Tabelog). On the second floor of ダイコービル near the Pontocho Kaburenjo, 5 min from Keihan Sanjo (Tabelog; July 2025). Opened 3 February 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi–Pontocho north, near the Kaburenjo — 5 min from Keihan Sanjo',
    cuisine: 'Kyoto-style okonomiyaki and teppanyaki with Kyoto pork and Kujo green onions (Tabelog) · okonomiyaki from ¥1,180 (Kyoto pork, squid) to ¥2,300 (seafood mix); Kujo-negi topping ¥200 (Tabelog) · yakisoba from ¥1,180, Wagyu horumon udon ¥1,680 (Tabelog) · Wagyu horumon yaki ¥1,580, Wagyu strip-loin steak ¥5,000 (Tabelog) · yam steak, corn butter, asparagus and scallop butter, salt-grilled squid (Tabelog) · fluffy batter rich in dashi, not drowned in sauce, cooked by staff at the table (July and December 2025, June 2026) · scallop okonomiyaki with Kujo onions, grilled squid guts (November 2025) · Kyoto whisky and sake (Tabelog)',
    website: null, gmaps: gm('京風お好み焼き鉄板焼き 先斗'), menu_url: TB + 'dtlmenu/',
    notes: '[Okonomiyaki · near the Pontocho Kaburenjo, open to 3 am] A small second-floor teppan bar by Pontocho serving Kyoto-style okonomiyaki — a fluffy, dashi-rich batter heaped with Kujo green onions — plus flat-noodle yakisoba, Wagyu horumon udon and steaks, cooked for you at the counter or tatami tables. Open for lunch and until 3 am; one food and one drink each. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes Kyoto-style okonomiyaki and teppanyaki built on local ingredients such as Kyoto pork and Kujo green onions, with Kyoto whisky for overseas guests. Reviewers praise staff who explain the toppings and recommendations (December 2025, June 2026).',
      philosophy: null, specialty: 'Kyoto-style okonomiyaki; Wagyu horumon udon.',
      anecdotes: [
        { text: 'A July 2025 visitor was surprised to be served a luxurious Pon juice when ordering orange juice.', source: R + 'B510403460/' },
        { text: 'A December 2025 diner arriving just after 10 pm on a Friday found it still quiet, and recommends the horumon.', source: R + 'B518807449/' },
      ],
      japanese_sources_summary: '食べログ: 京風お好み焼き鉄板焼き 先斗、お好み焼き・鉄板焼き・居酒屋、中京区材木町176-3 ダイコービル 2F、京阪三条駅から徒歩5分、毎日 12:00〜15:00、17:00〜翌3:00、カード・QR可、20席 (座敷4名×3、カウンター8)、喫煙可、2022年2月3日オープン、京都ポークと九条ねぎ、和牛ホルモンうどん、京都のウイスキー、お好み焼き1,180〜2,300円、焼きそば、和牛のステーキ。口コミ (2025〜2026年、英語): 先斗町歌舞練場の近く、深夜まで、テーブルで焼いてくれる、ワンフード・ワンドリンク、出汁のきいたふわふわの生地、九条ねぎ、平打ち麺の焼きそば、ホタテのお好み焼き、イカのわた焼き。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B510403460/', R + 'B517354039/', R + 'B518807449/', R + 'B521377019/', R + 'B529846785/', R + 'B530914795/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff cook and explain at the table; one food and one drink each.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区材木町176-3 ダイコービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.008149, 135.770903), offset about 5.5 m south to (35.008099, 135.770903) because Restaurant muni (kyoto_restaurant_muni_kiyamachi), at the same address, sits within 1 m; cross-checked: GSI 京都府京都市中京区材木町176番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/'],
    price_note: 'Prices from Tabelog’s menu, tax included.', last_checked: TODAY, items: [
      it('', '', 'Kyoto pork okonomiyaki', '¥1,180', 'Okonomiyaki', 'no', 'no', 'Tabelog.', 'buta'),
      it('', '', 'Scallop okonomiyaki', '¥1,480', 'Okonomiyaki', 'no', 'no', 'Tabelog; November 2025.', 'hotate'),
      it('', '', 'Seafood mix okonomiyaki', '¥2,300', 'Okonomiyaki', 'no', 'no', 'Tabelog.', 'mix'),
      it('', '', 'Kujo-negi topping', '¥200', 'Toppings', '', '', 'Tabelog.', 'negi'),
      it('', '', 'Wagyu horumon udon', '¥1,680', 'Yakisoba and udon', 'no', 'no', 'Tabelog.', 'horumonudon'),
      it('', '', 'Yam steak', '¥700', 'Teppan', 'ask', 'ask', 'Tabelog.', 'yamaimo'),
      it('', '', 'Wagyu strip-loin steak', '¥5,000', 'Beef', 'ask', 'no', 'Tabelog.', 'steak'),
    ] }, {
    cuisine: '京都ポークと九条ねぎを使う京風お好み焼きと鉄板焼き (食べログ)・お好み焼きは京都ポークやイカの1,180円から海鮮ミックス2,300円まで、九条ねぎのトッピング200円 (食べログ)・焼きそば1,180円から、和牛ホルモンうどん1,680円 (食べログ)・和牛ホルモン焼き1,580円、和牛のステーキ5,000円 (食べログ)・山芋ステーキ、コーンバター、アスパラとホタテのバター焼き、イカの塩焼き (食べログ)・出汁のきいたふわふわの生地、ソースは控えめ、テーブルで焼いてくれる (2025年7・12月、2026年6月)・九条ねぎのせのホタテのお好み焼き、イカのわた焼き (2025年11月)・京都のウイスキーと日本酒 (食べログ)',
    neighborhood: '先斗町の北、歌舞練場の近く。京阪三条から徒歩5分',
    gf_detail: '要確認。お好み焼き、焼きそば、うどんは小麦。山芋ステーキ、コーンバター、せせり、和牛ステーキなどの鉄板焼きもあるが、ソースと鉄板は共用で、グルテンの情報はない (食べログのメニュー)。',
    vegan_detail: 'ヴィーガンではない。お好み焼きの生地に出汁 (2025年12月、2026年6月の口コミ)。ほかは豚、牛、海鮮、バターの料理 (食べログのメニュー)。',
    notes: '[お好み焼き・先斗町歌舞練場の近く、深夜3時まで] 先斗町そばの2階の小さな鉄板の店。出汁のきいたふわふわの生地に九条ねぎをたっぷりのせた京風お好み焼き、平打ち麺の焼きそば、和牛ホルモンうどん、ステーキを、カウンターか座敷で焼いてくれる。昼と、夜は3時まで。ワンフード・ワンドリンク。喫煙可。',
  });
}

// ================================================================ 金扇
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26008358/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '22:00']);
  put({
    id: 'kyoto_kinsen_sushi_teramachi', name: '金扇 (Kin Sen)', category: 'OMNI',
    lat: 35.008205, lng: 135.767056, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Counter sushi and sashimi with soy sauce, anago with sauce, vinegared kizushi; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish counter — sushi, sashimi and grilled fish (2025–2026 reviews).',
    hours_raw: 'Monday, Wednesday–Sunday 16:00–22:00 (L.O. 21:30); closed Tuesday, but open on public holidays (Tabelog). Cash only: no cards, e-money or QR (Tabelog). 23 counter seats (Tabelog). Smoking allowed (Tabelog). On Teramachi in the busy shopping streets south of Sanjo, 8 min from Keihan Sanjo (Tabelog; October 2025). The bill is worked out on an abacus (October 2025).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Teramachi south of Sanjo — 8 min from Keihan Sanjo',
    cuisine: 'An old-style, non-conveyor counter sushi bar where you order piece by piece and chat with the chefs (October 2025) · the famous “bakudan” roll that shows off fatty tuna (May and August 2026) · ikura, kanpachi, torigai, anago, kazunoko, sujiko, marinated tuna (October 2025) · hamo sashimi or hamo otoshi, torigai, anago and kizushi with cold sake (August 2025, August 2026) · aji tataki, squid sashimi, firefly squid with vinegar miso; sea bream, flounder, scallop, octopus, kisu, tekka maki (May 2026) · grilled hamachi collar (February 2026) · bonito sashimi with a highball (April 2025) · about ¥8,000 for two (October 2025)',
    website: null, gmaps: gm('金扇 寿司 寺町'), menu_url: null,
    notes: '[Sushi · Teramachi south of Sanjo, an old-school counter] A long, bright counter of 23 seats on Teramachi where friendly chefs make sushi to order at everyday prices — the house “bakudan” roll, anago, torigai, hamo in summer — and add up the bill on an abacus; one regular has come for nearly 50 years. Cash only; smoking allowed; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Chefs (unnamed)'], origin: null,
      background: 'Reviewers describe friendly chefs at the counter who are easy to talk with (October 2025, April 2026). One regular has come for nearly 50 years, since student days (August 2025).',
      philosophy: null, specialty: 'Bakudan.',
      anecdotes: [
        { text: 'An August 2025 regular has been coming for nearly 50 years, since student days, for fish and drinks without any fuss.', source: R + 'B513503324/' },
        { text: 'An October 2025 diner enjoyed seeing the bill worked out on an abacus.', source: R + 'B515375617/' },
        { text: 'An August 2026 visitor back after a few years noticed the thin-sliced cucumber once served by default had gone, and that prices had risen a little.', source: R + 'B533667426/' },
      ],
      japanese_sources_summary: '食べログ: 金扇、寿司、中京区桜之町406、京阪三条駅から徒歩8分、月・水〜日 16:00〜22:00 (L.O.21:30)、火曜定休 (祝日は営業)、カード・電子マネー・QR不可、カウンター23席、喫煙可。口コミ (2025〜2026年、英語): 寺町の回らない寿司、気さくな板前、そろばんで会計、名物のばくだん、いくら、カンパチ、鳥貝、穴子、数の子、筋子、鮪の漬け、鱧の落とし、きずし、鯵のたたき、ほたるいかの酢味噌、ハマチのカマ焼き、2人で約8,000円、学生時代から50年近く通う客。',
      confidence: 'medium', sources: [TB, R + 'B504814186/', R + 'B513503324/', R + 'B515375617/', R + 'B523351806/', R + 'B526617636/', R + 'B526776854/', R + 'B528344074/', R + 'B533667426/'] },
    cultural_comfort: { level: 'japanese', note: 'Old-style local counter; cash only; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区桜之町406',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.008205, 135.767056); cross-checked: GSI 京都府京都市中京区桜之町406番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533667426/', R + 'B515375617/'],
    price_note: 'No menu prices; about ¥8,000 for two (October 2025).', last_checked: TODAY, items: [
      it('ばくだん', 'bakudan', 'Bakudan (the house fatty-tuna roll)', '', 'Sushi', 'ask', 'no', 'May and August 2026.', 'bakudan'),
      it('', '', 'Anago nigiri', '', 'Sushi', 'ask', 'no', 'October 2025; August 2026.', 'anago'),
      it('', '', 'Hamo otoshi', '', 'Sashimi', 'ask', 'no', 'August 2026.', 'hamo'),
      it('', '', 'Grilled hamachi collar', '', 'Grilled', 'ask', 'no', 'February 2026.', 'kama'),
    ] }, {
    cuisine: '注文ごとに握り、板前と話せる昔ながらの回らない寿司のカウンター (2025年10月)・トロの旨みが生きる名物の「ばくだん」(2026年5・8月)・いくら、カンパチ、鳥貝、穴子、数の子、筋子、鮪の漬け (2025年10月)・鱧の刺身や鱧の落とし、鳥貝、穴子、きずしと冷酒 (2025年8月、2026年8月)・鯵のたたき、イカの刺身、ほたるいかの酢味噌、鯛、平目、ホタテ、タコ、キス、鉄火巻 (2026年5月)・ハマチのカマ焼き (2026年2月)・鰹の刺身とハイボール (2025年4月)・2人で約8,000円 (2025年10月)',
    neighborhood: '三条の南の寺町。京阪三条から徒歩8分',
    gf_detail: '要確認。醤油を使う寿司と刺身、たれの穴子、酢で締めたきずし。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。寿司、刺身、焼き魚の店 (2025〜2026年の口コミ)。',
    notes: '[寿司・三条の南の寺町、昔ながらのカウンター] 寺町の明るい23席のカウンター。気さくな板前が手頃な値段で握る。名物のばくだん、穴子、鳥貝、夏は鱧。会計はそろばん。何十年も通う常連も。現金のみ、喫煙可、火曜定休。',
  });
}

save();
