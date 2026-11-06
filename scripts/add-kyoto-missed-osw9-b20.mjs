// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 20.
//   + 祇をん 段ばた Gion Danbata (genre-free courses for the 24 solar terms in a Gion machiya; Japanese-only bookings) [core]
//   + 京都さしみ丸 Kyoto Sashimi Maru (8-seat à la carte seafood kappo in the Momiji-no-Koji machiya)               [core]
//   + 焼野菜 五十家 Yaki Yasai Isoya (grilled-vegetable izakaya by Kyoto City Hall; coordinator un-skipped it)       [notable]
//   + ルラション RELATION (neighbourhood French bistro near Karasuma-Oike, 25 years in 2026)                          [notable]
//   Same-name counts first: 段ばた 1; さしみ丸 1; 五十家 1 by this name — the 五十家 group is a local Kyoto group of
//   differently named shops (coordinator ruling, 2026-11-05; kyoto_sumizumido_hachijo is a sister concept in data);
//   ルラション 1.
//   Taken in queue order on 2026-11-05: core 26031239, 26033213; notable 26005043 (as instructed), 26002961.
//   None of the four is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 段ばた "なし" (its English says a fee may be added);
//   さしみ丸 "サービス料3%"; 五十家 "サービス料・チャージなし。"; ルラション has no section.
//   Pins: Tabelog points; GSI lot matches 5–136 m (段ばた on the large 祇園町南側570 lot); nearest records 23 m or more.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 祇をん 段ばた
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031239/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_gion_danbata', name: '祇をん 段ばた (Gion Danbata)', category: 'OMNI',
    lat: 35.002788, lng: 135.775142, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi-based courses with handmade pasta, bread, mapo sauce and fried dishes; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dashi is katsuobushi and Rishiri kombu, and courses include fish and wagyu (Tabelog).',
    hours_raw: 'Wed–Sun 12:00–15:00 (last order 13:00) and 18:00–22:00 (last order 19:00); closed every Monday and every other Tuesday (Tabelog). Reservation only. Tabelog states: "We do not accept reservations from foreign customers due to our limited English skills. In the unlikely event that a reservation is made, we will take the liberty of canceling it." Courses: lunch ¥10,000, dinner ¥15,000–18,000, tax included (Tabelog). Service charge: none — Tabelog\'s Japanese original says "なし" (its English says a fee may be added). 10 seats: 6 at the counter, 1 table for 4; wheelchair accessible; non-smoking; BYO allowed; cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). In a machiya down a narrow alley off Hanamikoji south of Shijo; 6 min from Gion-Shijo Stn (Tabelog; 2025–26 reviews).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, off Hanamikoji south of Shijo — 6 min from Gion-Shijo Stn',
    cuisine: 'Genre-free courses that change completely every two weeks with the 24 solar terms, on a dashi of top katsuobushi and Rishiri kombu, mixing French, Italian and Chinese techniques (Tabelog) · lunch ¥10,000, dinner ¥15,000–18,000 (Tabelog) · in reviews: consommé soups, amadai with crisp scales and mapo or cabbage sauce, kadaif-wrapped mushroom duxelles, handmade pasta (crab, octopus and kohlrabi), Ehime sirloin, a choice of rice dishes with refills — chirimen-jako, soy-simmered wagyu, lemon-egg fried rice, mapo tofu — and homemade pudding, matcha and nerikiri (2025–26 reviews)',
    website: 'https://www.danbata.com', gmaps: gm('祇をん 段ばた'), menu_url: null,
    notes: "[Genre-free courses · Gion off Hanamikoji] A ten-seat machiya counter where a husband-and-wife team cooks Japanese-rooted courses with French, Italian and Chinese touches, changing every two weeks with the solar terms. Lunch ¥10,000, dinner from ¥15,000. Note: the shop states on Tabelog that it does not accept bookings from foreign customers, because of limited English, and will cancel any that are made. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources), with a spouse who makes the desserts (2025–26 reviews)'], origin: null,
      background: 'Opened 1 September 2018 (Tabelog). Per 2025–26 reviews: a couple runs the restaurant together — the chef cooks and the spouse makes the desserts (May 2025; May 2026); a September 2026 reviewer speaks of "the chefs" at the counter, so other staff are not ruled out.',
      philosophy: 'Per the operator: playful dishes that invite new flavours, reflecting the 24 solar terms.',
      specialty: 'Crisp-scaled amadai; rice dishes with refills.',
      anecdotes: [
        { text: 'On a solo birthday lunch in August 2025, the couple timed each dish to the diner\'s own pace.', source: R + 'B468029560/' },
        { text: 'A September 2026 regular came across town from Kitano Tenmangu just for lunch, and had seconds of the homemade bread.', source: R + 'B510156666/' },
        { text: 'A first-time June 2026 guest found everyone started at noon, but the pace was adjusted to each table.', source: R + 'B530602731/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 祇をん 段ばた、イノベーティブ・フレンチ・イタリアン、東山区祇園町南側570-128、祇園四条駅から徒歩約6分、水〜日 12:00〜15:00 (L.O. 13:00)・18:00〜22:00 (L.O. 19:00)、毎週月曜と隔週火曜休み、完全予約制、英語が話せないため海外の客の予約は受けず、予約があった場合はキャンセルする、ランチ10,000円・ディナー15,000〜18,000円 (税込)、サービス料: なし、10席 (カウンター6、テーブル1)、2018年9月1日オープン、二十四節気で2週間ごとに替わるコース、上質な鰹節と Rishiri 昆布の出汁、フレンチ・イタリアン・中華の技法。口コミ (2025〜2026年、英語): 夫婦で営む、奥様のデザート、甘鯛の鱗焼き、手打ちパスタ、レモン卵炒飯、麻婆豆腐、ちりめんじゃこ、プリン、抹茶と練り切り。',
      confidence: 'medium', sources: [TB, R + 'B437463636/', R + 'B468029560/', R + 'B509036148/', R + 'B510156666/', R + 'B515702519/', R + 'B518495216/', R + 'B528980649/', R + 'B530602731/', R + 'B534096203/', R + 'B536914134/'] },
    cultural_comfort: { level: 'japanese', note: 'Tabelog says the shop does not accept bookings from foreign customers (limited English) and cancels any made; reservation only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-128',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through September 2026. The official site (danbata.com) refused the connection on 2026-11-05.' },
    pin_source: `Tabelog ${TB} (35.002788, 135.775142); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 136m (a large lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog\'s remarks, tax included (read 2026-11-05).', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥10,000', 'Courses', 'ask', 'no', '', 'lunch'),
      it('', '', 'Dinner course', '¥15,000–18,000', 'Courses', 'ask', 'no', '', 'dinner'),
    ] }, {
    cuisine: '二十四節気に合わせて2週間ごとに全て替わるジャンルにとらわれないコース。上質な鰹節と Rishiri 昆布の出汁に、フレンチ、イタリアン、中華の技法 (食べログ)・昼10,000円、夜15,000〜18,000円 (食べログ)・口コミの料理: コンソメのスープ、鱗を立てた甘鯛に麻婆やキャベツのソース、カダイフで包んだマッシュルームのデュクセル、手打ちパスタ (蟹、蛸とコールラビ)、愛媛のサーロイン、おかわりできるご飯もの (ちりめんじゃこ、醤油で煮た和牛、レモン卵炒飯、麻婆豆腐)、自家製プリン、抹茶と練り切り (2025〜26年の口コミ)',
    neighborhood: '四条の南、花見小路から入った祇園。祇園四条駅から徒歩6分',
    gf_detail: '要確認。出汁のコースに手打ちパスタ、パン、麻婆、揚げ物。グルテンの情報はない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁は鰹節と Rishiri 昆布で、コースには魚と和牛 (食べログ)。',
    notes: '[ジャンルにとらわれないコース・花見小路近くの祇園] 夫婦で営む10席の町家のカウンターで、和を軸にフレンチ、イタリアン、中華を取り入れたコースを二十四節気ごとに替える。昼10,000円、夜15,000円から。注意: 食べログで、英語が話せないため海外の客の予約は受けず、入った予約はキャンセルすると明記している。月曜休み。',
  });
}

// ================================================================ 京都さしみ丸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033213/'; const R = TB + 'dtlrvwlst/';
  const H = day(['15:00', '23:00']);
  put({
    id: 'kyoto_sashimi_maru', name: '京都さしみ丸 (Kyoto Sashimi Maru)', category: 'OMNI',
    lat: 34.998902, lng: 135.766042, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, tempura, fried fish, gratin and spring rolls; no gluten information (Tabelog; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, wagyu and game (Tabelog; 2025–26 reviews).',
    hours_raw: 'Mon–Sat 15:00–23:00 (food last order 22:00, drinks 22:30); 15:00–17:00 by advance booking only; closed Sunday (Tabelog). Service charge 3% — Tabelog\'s Japanese original: "サービス料3%". The food menu shows no prices; the drinks list does (December 2025; July 2026). 8 counter seats; non-smoking; cards, IC cards, QUICPay and PayPay (Tabelog). In "Momiji no Koji", a 100-year-old machiya alley of small restaurants; 8 min from Kiyomizu-Gojo Stn, 10 min from Kawaramachi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Shijo and Gojo, west of the Kamo River — 8 min from Kiyomizu-Gojo Stn',
    cuisine: 'Seasonal kaiseki-level dishes à la carte or as a small omakase: fish from the ports, black wagyu and game, donabe rice; six champagnes (Tabelog) · in reviews: sashimi platters (shima-aji, ishigaki-dai, octopus, straw-smoked first bonito), tempura of large red shrimp, cold chawanmushi, sirloin-cap sukiyaki, thick-cut fried tuna with tartare, fried horse mackerel, rock-oyster gratin, Sichuan-pepper wagyu, cod-milt spring rolls, green curry, crab in vinegar, junsai (2025–26 reviews) · one diner\'s 15 items with four drinks came to ¥14,000 (July 2026)',
    website: null, gmaps: gm('京都さしみ丸'), menu_url: TB + 'dtlmenu/',
    notes: "[Seafood kappo · Momiji no Koji between Shijo and Gojo] Despite the casual name, an eight-seat counter in a century-old machiya alley serving kaiseki-level dishes à la carte — straw-smoked bonito, red-shrimp tempura, rock-oyster gratin, even green curry. The food menu has no prices; expect ¥8,000–15,000 plus 3% service. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; one cook per a September 2026 review)'], origin: null,
      background: 'Opened 16 October 2019 (Tabelog). Per the operator: in "Momiji no Koji", a renovated machiya over 100 years old, serving seasonal kaiseki of port-fresh seafood, black wagyu and game with donabe rice.',
      philosophy: null, specialty: 'Sashimi; red-shrimp tempura.',
      anecdotes: [
        { text: 'A December 2025 New Year\'s Eve diner found it "a bit nerve-wracking" that the food menu listed no prices.', source: R + 'B520022317/' },
        { text: 'Kept waiting in May 2026, a diner was given simmered bamboo shoots as an apology.', source: R + 'B528277920/' },
        { text: 'A September 2026 regular felt rushed with only one person cooking, and wished the dishes used fewer repeat ingredients.', source: R + 'B536326059/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 京都さしみ丸、居酒屋・海鮮・天ぷら、下京区石不動之町682-7 もみじの小路S-3、清水五条駅から徒歩8分、月〜土 15:00〜23:00 (料理 L.O. 22:00、ドリンク L.O. 22:30)、15:00〜17:00は事前予約のみ、日曜休み、サービス料3%、8席 (カウンター)、2019年10月16日オープン、築100年超の町家を改装した「もみじの小路」、漁港直送の魚介、黒毛和牛、ジビエ、土鍋ご飯、シャンパン6種。口コミ (2025年12月〜2026年9月、英語): 料理の品書きに値段がない、刺身の盛り合わせ、大海老の天ぷら、冷やし茶碗蒸し、マグロのフライ、岩牡蠣のグラタン、白子の春巻き、グリーンカレー、一人で調理。',
      confidence: 'medium', sources: [TB, R + 'B519982647/', R + 'B520022317/', R + 'B520143768/', R + 'B523496414/', R + 'B526321887/', R + 'B528277920/', R + 'B530489151/', R + 'B531597756/', R + 'B532382309/', R + 'B536326059/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No prices on the food menu; 3% service; book for 15:00–17:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区石不動之町682-7 もみじの小路S-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998902, 135.766042); cross-checked: GSI 京都府京都市下京区石不動之町682番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'The food menu has no prices (2025–26 reviews); service charge from Tabelog\'s Japanese original.', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', '', 'sashimi_mori'),
      it('', '', 'Tempura of large red shrimp', '', 'Fried', 'no', 'no', '', 'ebi_tempura'),
    ] }, {
    cuisine: '旬の懐石級の料理をアラカルトか小さなおまかせで: 漁港の魚、黒毛和牛、ジビエ、土鍋ご飯、シャンパン6種 (食べログ)・口コミの料理: 刺身の盛り合わせ (しま鯵、イシガキダイ、蛸、藁で燻した初鰹)、大きな赤海老の天ぷら、冷やし茶碗蒸し、サーロインのすき焼き、厚切りマグロのフライとタルタル、鯵フライ、岩牡蠣のグラタン、青い花椒の和牛、白子の春巻き、グリーンカレー、蟹酢、じゅんさい (2025〜26年の口コミ)・15品と飲み物4杯で14,000円という口コミも (2026年7月)',
    neighborhood: '鴨川の西、四条と五条の間。清水五条駅から徒歩8分',
    gf_detail: '要確認。刺身、天ぷら、フライ、グラタン、春巻き。グルテンの情報はない (食べログ、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、和牛、ジビエ (食べログ、2025〜26年の口コミ)。',
    notes: '[魚介の割烹・四条と五条の間のもみじの小路] 気軽な名前とは裏腹に、築100年の町家の路地にある8席のカウンターで懐石級の料理をアラカルトで出す。藁焼きの鰹、海老の天ぷら、岩牡蠣のグラタン、グリーンカレーまで。料理の品書きに値段はなく、8千〜1万5千円ほど+サービス料3%。日曜休み。',
  });
}

// ================================================================ 焼野菜 五十家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26005043/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://yakiyasai-isoya.com';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_yakiyasai_isoya', name: '焼野菜 五十家 (Yaki Yasai Isoya)', category: 'OMNI',
    lat: 35.010207, lng: 135.770169, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Grilled vegetables with miso, ponzu and soy-based sauces, quesadillas and fried rice; no gluten information (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables are the focus, but most plates pair them with squid, pork, chicken, tuna, fish, cheese or a soy-milk dashimaki; ask what can be made without (official site; 2026 reviews).',
    hours_raw: '17:30–23:00 daily (last order 22:30), closing days not fixed (Tabelog); the official site gives 17:00–23:00 every day. Bookings online through the official site or by phone; seat-only bookings (official site; Tabelog). Service charge: none — Tabelog\'s Japanese original: "サービス料・チャージなし。". About 20 seats at a curved counter (November 2026); Tabelog lists smoking as allowed; JCB, AMEX and Diners; QR payments (Tabelog). On Kiyamachi south of Oike; 1 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi south of Oike — 1 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Teppan-grilled seasonal vegetables from the 五十棲農園 farm and partner farms, listed on a blackboard and paired with sauces and a little meat or fish (official site; Tabelog) · menu examples: "infinite tomato" with tuna, shiso and citrus ponzu ¥500, yodare-dori with farm herbs and dukkah ¥850, soy-milk dashimaki ¥750 (official site) · in reviews: arugula with miso-marinated squid, Kamo eggplant with sweet miso, Kujo negi with pork belly and spices, lotus root with saba-miso cream cheese, kiwi and nama-yuba in white miso, daikon miso dengaku, lotus-root quesadilla, fried rice to finish; vegetable sours, red-shiso soda and vegetable juice (2026 reviews)',
    website: SITE, gmaps: gm('焼野菜 五十家 京都'), menu_url: SITE,
    notes: "[Grilled-vegetable izakaya · Kiyamachi by Kyoto City Hall] A stylish curved counter where seasonal vegetables from the owner's family farm are grilled on the teppan and paired with clever sauces — arugula with miso squid, Kamo eggplant with sweet miso, lotus root with saba-miso cream cheese — plus vegetable sours. About ¥3,000–6,000; no service charge. Open nightly.",
    chef_bio: { chef_name: null, roles: ['Operator: the 五十家 group (no person named)'], origin: null,
      background: 'Per the official site: vegetables from 五十棲農園, described as the owner\'s family source, and partner farms. Reviewers call it a shop of "the Isoya group" with other sister restaurants (2026 reviews); a Tabelog review says the group runs seven shops in Kyoto, and our record kyoto_sumizumido_hachijo describes 炭棲堂 as "a new concept from the izakaya group 五十家". An October 2026 reviewer first came about ten years ago.',
      philosophy: 'Per the operator: "Let us grill seasonal vegetables for you."',
      specialty: 'Teppan-grilled vegetables with sauces.',
      anecdotes: [
        { text: 'A September 2026 diner liked the small portions, which made it easy to try many dishes, and the avocado sour.', source: R + 'B534939847/' },
        { text: 'An October 2026 visitor returned after about ten years, remembering the first visit.', source: R + 'B537173889/' },
        { text: 'A non-drinker in October 2026 ordered a soda of red shiso from Ohara.', source: R + 'B537990322/' },
      ],
      japanese_sources_summary: '公式サイト (yakiyasai-isoya.com): 焼野菜 五十家、中京区木屋町通御池下ル下丸屋町421-5 ラディーチェ・マツヤビル 1F、17:00〜23:00 (毎日)、五十棲農園の野菜、無限トマト (ツナ・大葉と柑橘ポン酢) 500円、よだれ鶏 (農園ハーブと自家製デュカ) 850円、豆乳だしまき750円、オンラインか電話で予約、席のみの予約。食べログ: 野菜料理・鉄板焼き、京都市役所前駅から徒歩1分、17:30〜23:00 (L.O. 22:30)、不定休、サービス料・チャージなし、喫煙可、カード (JCB・AMEX・Diners)。口コミ (2026年8〜11月、英語): ルッコラとイカの味噌漬け、賀茂なすの甘味噌、九条ねぎと豚バラ、蓮根と鯖味噌クリームチーズ、大根の味噌田楽、締めの炒飯、野菜のサワー、約20席の曲線のカウンター、五十家グループ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B534939847/', R + 'B535119571/', R + 'B535248019/', R + 'B535975525/', R + 'B536149271/', R + 'B536426187/', R + 'B537173889/', R + 'B537663549/', R + 'B537990322/', R + 'B538554257/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online; blackboard menu changes with the season.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通御池下ル下丸屋町421-5 ラディーチェ・マツヤビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.010207, 135.770169); cross-checked: GSI 京都府京都市中京区下丸屋町421番地 (lot) 63m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the official site (read 2026-11-05).', last_checked: TODAY, items: [
      it('無限トマト', '', '"Infinite tomato" with tuna, shiso and citrus ponzu', '¥500', 'Vegetables', 'ask', 'no', '', 'mugen_tomato'),
      it('よだれ鶏', '', 'Yodare-dori chicken with farm herbs and dukkah', '¥850', 'Small plates', 'ask', 'no', '', 'yodaredori'),
      it('豆乳だしまき', '', 'Soy-milk dashimaki omelette', '¥750', 'Small plates', 'ask', 'no', '', 'tonyu_dashimaki'),
    ] }, {
    cuisine: '五十棲農園と契約農家の旬の野菜を鉄板で焼き、黒板に並べ、ソースや少しの肉や魚と合わせる (公式サイト、食べログ)・品書きの例: ツナと大葉と柑橘ポン酢の無限トマト500円、農園ハーブと自家製デュカのよだれ鶏850円、豆乳だしまき750円 (公式サイト)・口コミの料理: ルッコラとイカの味噌漬け、賀茂なすの甘味噌、九条ねぎと豚バラとスパイス、蓮根と鯖味噌クリームチーズ、キウイと生湯葉の白味噌、大根の味噌田楽、蓮根のケサディーヤ、締めの炒飯。野菜のサワー、赤紫蘇のソーダ、野菜ジュース (2026年の口コミ)',
    neighborhood: '御池の南の木屋町。京都市役所前駅から徒歩1分',
    gf_detail: '要確認。味噌、ポン酢、醤油系のソースの焼き野菜、ケサディーヤ、炒飯。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。野菜が主役だが、多くの皿はイカ、豚、鶏、ツナ、魚、チーズや豆乳だしまきと合わせる。抜いて作れるかは店で確認を (公式サイト、2026年の口コミ)。',
    notes: '[焼き野菜の居酒屋・京都市役所近くの木屋町] おしゃれな曲線のカウンターで、店主の家の農園の旬の野菜を鉄板で焼き、ひと工夫のソースで出す。ルッコラとイカの味噌漬け、賀茂なすの甘味噌、蓮根と鯖味噌クリームチーズ、野菜のサワーも。3千〜6千円ほど、サービス料なし。毎晩営業。',
  });
}

// ================================================================ ルラション
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002961/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '15:00'], D = ['17:30', '22:00'];
  put({
    id: 'kyoto_relation_bistro', name: 'ルラション (RELATION)', category: 'OMNI',
    lat: 35.00965, lng: 135.763087, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bistro plates with sauces, gratin and baguette; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: terrine, steak, lamb, escargot and butter (2026 reviews).',
    hours_raw: 'Mon, Tue, Fri, Sat, Sun 11:30–15:00 (last order 13:30) and 17:30–22:00 (last order 20:30); Thu dinner only; closed Wednesday; lunch bookings until 13:00 (Tabelog). Popular — book; fish can sell out at lunch (2026 reviews). BYO wine at dinner, ¥1,000 per bottle (Tabelog). 16 seats: counter and tables; children welcome; non-smoking; cards, nanaco, iD, Rakuten Pay and au PAY (Tabelog). On Sakaimachi-dori south of Aneyakoji; 5 min from Karasuma-Oike Stn (Tabelog).',
    hours: { 0: day(L, D), 1: day(L, D), 3: day(D), 4: day(L, D), 5: day(L, D), 6: day(L, D) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-dori south of Aneyakoji — 5 min from Karasuma-Oike Stn',
    cuisine: 'Neighbourhood French bistro with big portions: lunch sets of steak (about 140 g, ¥1,600–1,650), fish or the C course with appetizers and dessert; a ¥3,300 dinner prix-fixe with a starter and main (2026 reviews) · Daisen chicken and liver terrine ¥990, escargot simmered in white wine, beef tendon or beef stew in red wine, Bolognese with potato gratin, grilled lamb, chilled corn soup, warm baguette with plenty of butter, gâteau chocolat, blancmange; wine by the glass from ¥600 (2026 reviews)',
    website: null, gmaps: gm('ルラション 京都 堺町'), menu_url: TB + 'dtlmenu/',
    notes: "[French bistro · Sakaimachi near Karasuma-Oike] A neighbourhood bistro marking 25 years in 2026, loved for generous, cheap French cooking: steak lunch about ¥1,650, a huge chicken-liver terrine, escargot, and a ¥3,300 dinner prix-fixe. BYO wine ¥1,000 at dinner. Often full — book. Closed Wednesday; no lunch Thursday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Per 2026 reviews: a bistro celebrating its 25th anniversary in 2026 and long loved by locals (August–September 2026).',
      philosophy: null, specialty: 'Chicken-liver terrine; steak lunch.',
      anecdotes: [
        { text: 'A twelve-time regular got a booking only two days ahead for the 25th-anniversary year — August 2026.', source: R + 'B463881650/' },
        { text: 'A September 2026 couple sharing the dinner set had each dish split onto two plates.', source: R + 'B535115253/' },
        { text: 'The water kept coming, and an October 2026 lunch guest chatted on until closing.', source: R + 'B537360861/' },
      ],
      japanese_sources_summary: '食べログ: ルラション (RELATION)、フレンチ・ステーキ、中京区堺町通姉小路下ル大阪材木町687、烏丸御池駅から徒歩5分、月火金土日 11:30〜15:00 (L.O. 13:30)・17:30〜22:00 (L.O. 20:30)、木曜は夜のみ、水曜休み、ランチ予約は13時まで、16席、子供可、禁煙、ワイン持ち込み可 (夜のみ、1本1,000円)。口コミ (2026年7〜10月、英語): 25周年、ステーキランチ1,600〜1,650円、鶏のテリーヌ (Daisen chicken) 990円、エスカルゴ、ボロネーゼとポテトグラタン、仔羊、ディナーセット3,300円、グラスワイン600円、ガトーショコラ。',
      confidence: 'medium', sources: [TB, R + 'B33111479/', R + 'B463881650/', R + 'B530884552/', R + 'B532734579/', R + 'B535115253/', R + 'B535428204/', R + 'B535610707/', R + 'B537360861/', R + 'B537522302/', R + 'B537871101/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; casual and family-friendly.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通姉小路下ル大阪材木町687',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009650, 135.763087); cross-checked: GSI 京都府京都市中京区大阪材木町687番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535428204/', R + 'B535115253/'],
    price_note: 'No menu read; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set A (steak)', '¥1,650', 'Lunch', 'ask', 'no', 'October 2026 review.', 'lunch_a'),
      it('', '', 'Chicken and liver terrine', '¥990', 'Appetizers', 'ask', 'no', 'October 2026 review.', 'terrine'),
      it('', '', 'Dinner set (appetizer, main, bread, dessert)', '¥3,300', 'Dinner', 'ask', 'no', 'September 2026 review.', 'dinner_set'),
    ] }, {
    cuisine: '量の多い町のフレンチビストロ: ステーキ (約140g、1,600〜1,650円)、魚、前菜とデザート付きの C コースのランチ。前菜とメインを選ぶ3,300円の夜のセット (2026年の口コミ)・鶏とレバーのテリーヌ (Daisen chicken) 990円、白ワインで煮込んだエスカルゴ、牛すじやビーフシチューの赤ワイン煮、ボロネーゼとポテトグラタン、仔羊のグリル、冷製コーンスープ、たっぷりのバターと温かいバゲット、ガトーショコラ、ブランマンジェ。グラスワイン600円から (2026年の口コミ)',
    neighborhood: '姉小路の南の堺町通。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。ソースの料理、グラタン、バゲット。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。テリーヌ、ステーキ、仔羊、エスカルゴ、バター (2026年の口コミ)。',
    notes: '[フレンチビストロ・烏丸御池近くの堺町] 2026年に25周年を迎えた町のビストロ。気前のいい手頃なフレンチが愛され、ステーキランチは1,650円ほど、大きなレバーのテリーヌ、エスカルゴ、夜は3,300円のセット。夜はワインの持ち込み1本1,000円。満席が多いので予約を。水曜休み、木曜は夜のみ。',
  });
}

save();
