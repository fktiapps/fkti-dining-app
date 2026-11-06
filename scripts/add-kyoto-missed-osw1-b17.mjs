// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 17.
//   + 日本酒と肴 いち陽 Nihonshu to Sakana Ichiyo (sake-and-fish izakaya off Ayanokoji near Karasuma; since 2023)
//   + SOUP CURRY KING 京都新京極店 (Sapporo soup curry, first Kansai shop, on Shinkyogoku; since January 2026)
//   + 個室居酒屋 和ノ音 京都駅前店 Wanone (private-room izakaya by Kyoto Station)
//   + いづ重 Izuju (Kyoto-style pressed sushi below the Yasaka Shrine steps since the late Meiji era)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26039804, 26044172);
//   the first two from `next notable 200` (26042450, 26002550). None is in data/kyoto.json: grep by name (いち陽/Ichiyo,
//   SOUP CURRY KING, 和ノ音/Wanone, いづ重/Izuju) and address (綾材木町199 — kyoto_bistro_maumu is a different shop at 199-4,
//   7 m away — 桜之町407, 東塩小路町736, 祇園町北側292) found no match.
//   Same-name count (Greg's Samboa ruling): いち陽 and いづ重 single shops (いづ重's other outlets are takeaway counters in
//   stations and department stores, per its site). SOUP CURRY KING: two Sapporo shops (本店, セントラル店), a Hiroshima FC shop
//   and this one found — four; the Kyoto shop is opened by 株式会社B級グルメ研究所 (Tokyo) per its press release. 和ノ音: Kyoto,
//   Hiroshima-ekimae, Akihabara-ekimae and Kaihin-Makuhari found — four. Neither reaches five in the sources read; both drafted
//   and flagged for the coordinator.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 日本酒と肴 いち陽
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039804/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_nihonshu_to_sakana_ichiyo', name: '日本酒と肴 いち陽 (Nihonshu to Sakana Ichiyo)', category: 'OMNI',
    lat: 35.002775, lng: 135.763265, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, simmered and grilled fish, with fried dishes (mehikari kara-age, Tochio fried tofu, spring rolls) that are not gluten-free (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-sake izakaya (2025–2026 reviews).',
    hours_raw: '17:00–24:00 daily; irregular closures (Tabelog). Reviewers also describe a ¥1,000 lunch that sells out (November 2025; October 2026); lunch hours are not listed. Reservations accepted; often full (Tabelog; 2025–2026 reviews). Cards accepted; no e-money (Tabelog). 20 seats, counter-centred (Tabelog; March 2026). Near Karasuma, 297 m from Karasuma Stn (Tabelog). Opened 1 August 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ayanokoji east of Karasuma — 297 m from Hankyu Karasuma Stn',
    cuisine: 'Izakaya of fish and a long sake list — two A4 pages, with tastings to find your style (2025–2026 reviews) · sake named by reviewers: Aramasa, Hanayuki, Jikon, Ibi muroka nama genshu (April 2026) · assorted sashimi, fish namero, simmered sawara, teppai, dashimaki, mehikari kara-age, Tochio fried tofu, shrimp spring rolls, grilled squid with chili or shichimi soy (January–August 2026) · charcoal-grilled shark fin, dried firefly squid, mirin-dried fish (August 2026) · matsutake dobin-mushi (October 2026) · most dishes under ¥1,000 (January 2026) · ¥1,000 lunch: two sashimi, a main such as chicken nanban, three sides, miso soup and rice (October 2026)',
    website: null, gmaps: gm('日本酒と肴 いち陽 烏丸'), menu_url: null,
    notes: '[Izakaya · Shijo-Karasuma, sake tastings and fish] A calm, counter-centred izakaya near Karasuma with two pages of sake — Aramasa, Jikon and rarer bottles — where the owner pours you tastings until you find the one you like. The food is fish-led and mostly under ¥1,000 a dish: thick sashimi, namero, simmered sawara, fried mehikari, grilled squid, with matsutake dobin-mushi in autumn. A ¥1,000 lunch set sells out. Book ahead; open nightly to midnight.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who guides the sake choices'], origin: null,
      background: 'Tabelog gives the opening as 1 August 2023. An October 2026 reviewer found the owner friendly and full of knowledge about sake.',
      philosophy: null, specialty: 'Sake tastings matched to taste; sashimi.',
      anecdotes: [
        { text: 'A February 2026 diner, brought by a sake-loving son, was pleased that the shop’s tastings led a wife who rarely drinks sake to say, "I want to go again!"', source: R + 'B522945060/' },
        { text: 'A lunch regular on an eighth visit, in October 2026, finally got in after weeks of finding it closed or full, and had a ¥1,000 set with two sashimi and chicken nanban.', source: R + 'B476299042/' },
      ],
      japanese_sources_summary: '食べログ: 日本酒と肴 いち陽、居酒屋・魚介料理、下京区綾材木町199 1F、烏丸駅から297m、毎日 17:00〜24:00、不定休、予約可、カード可、20席、2023年8月1日オープン。口コミ (2025〜2026年、英語): 日本酒の品揃えが豊富 (A4で2枚)、好みを伝えると試飲させてくれる、Aramasa、Hanayuki、Jikon、Ibi の無濾過生原酒、刺身の盛り合わせ、なめろう、鰆の煮付け、てっぱい、だし巻き、めひかりの唐揚げ、Tochio の油揚げ、松茸の土瓶蒸し、ほとんどの料理が1,000円以下、昼の定食1,000円。',
      confidence: 'medium', sources: [TB, R + 'B476299042/', R + 'B520719102/', R + 'B520886066/', R + 'B522945060/', R + 'B525242858/', R + 'B525808413/', R + 'B528528546/', R + 'B530285027/', R + 'B534044863/', R + 'B538310408/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ask for sake tastings by preference.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区綾材木町199 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002775, 135.763265); cross-checked: GSI 京都府京都市下京区綾材木町199番地 (lot) 19m; kyoto_bistro_maumu (199-4) is 7 m away, a different shop; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B476299042/'],
    price_note: 'No menu read; lunch price from an October 2026 review; most dishes under ¥1,000 per a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (two sashimi, main, three sides, miso soup, rice)', '¥1,000', 'Lunch', 'ask', 'no', 'October 2026.', 'lunch_set'),
    ] }, {
    cuisine: '魚と豊富な日本酒の居酒屋。日本酒のメニューはA4で2枚、試飲して好みの一本を探せる (2025〜2026年の口コミ)・口コミに出る銘柄: Aramasa、Hanayuki、Jikon、Ibi の無濾過生原酒 (2026年4月)・刺身の盛り合わせ、なめろう、鰆の煮付け、てっぱい、だし巻き、めひかりの唐揚げ、Tochio の油揚げ、海老の春巻き、いかの唐辛子焼きや七味醤油焼き (2026年1〜8月)・炭火で焼くふかひれ、ほたるいかの干物、みりん干し (2026年8月)・松茸の土瓶蒸し (2026年10月)・ほとんどの料理が1,000円以下 (2026年1月)・昼の定食1,000円: 刺身2種、チキン南蛮などの主菜、小鉢3品、味噌汁、ご飯 (2026年10月)',
    neighborhood: '烏丸の東、綾小路。阪急烏丸駅から297m',
    gf_detail: '要確認。刺身、煮魚、焼き魚のほか、めひかりの唐揚げ、Tochio の油揚げ、春巻きなど揚げ物はグルテンフリーではない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚と日本酒の居酒屋 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・四条烏丸、日本酒の試飲と魚] 烏丸近くのカウンター中心の落ち着いた居酒屋。日本酒はA4で2枚、Aramasa や Jikon から珍しい銘柄まで、店主が好みを聞いて試飲させてくれる。料理は魚が中心で多くが1,000円以下。厚切りの刺身、なめろう、鰆の煮付け、めひかりの唐揚げ、いか焼き、秋は松茸の土瓶蒸し。1,000円の昼の定食は売り切れ必至。予約がおすすめ、毎晩深夜0時まで。',
  });
}

// ================================================================ SOUP CURRY KING 京都新京極店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044172/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://zaikei.co.jp/releases/3276932/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_soup_curry_king_shinkyogoku', name: 'SOUP CURRY KING 京都新京極店 (Soup Curry King, Kyoto Shinkyogoku)', category: 'OMNI',
    lat: 35.00801, lng: 135.767324, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Soup curry of chicken-bone, vegetable and Japanese dashi broth with deep-fried vegetables; the zangi topping is soy-marinated fried chicken; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every soup is built on chicken bones plus dashi of kombu, niboshi and katsuobushi (Tabelog shop text).',
    hours_raw: '11:00–22:00 (L.O. 21:00) daily, holidays included (Tabelog). No reservations (Tabelog); long queues after opening, quieter mid-afternoon on weekdays (September 2026). Cards and QR accepted; no e-money (Tabelog). A Wednesday discount was signposted in October 2026. 15 counter seats (Tabelog; September 2026). Non-smoking; children welcome (Tabelog). Second floor of the カレッジタウン詩の小路ビル on Shinkyogoku south of Sanjo, near MOVIX (Tabelog; August 2026). Opened 30 January 2026 (Tabelog; press release).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinkyogoku south of Sanjo, near MOVIX — 7 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Sapporo soup curry, the brand’s first Kansai shop: a broth of chicken bones and aromatic vegetables with a Japanese dashi of kombu, niboshi and katsuobushi, plus house spices; choose the heat level and rice size (Tabelog shop text; 2026 reviews) · chicken curry ¥1,430 — a whole leg with potato, carrot, pepper, cabbage and quail egg (October 2026) · chicken and vegetable curry; seafood curry (2026 reviews) · Hokkaido zangi vegetable curry ¥1,760; pork kakuni vegetable curry ¥1,980 (August–October 2026) · toppings such as eggplant, cheese, soft-boiled egg; extra soup (September–October 2026) · plain lassi ¥500 (August 2026)',
    website: PR, gmaps: gm('SOUP CURRY KING 京都新京極店'), menu_url: null,
    notes: '[Soup curry · Shinkyogoku, Sapporo’s soup curry comes to Kyoto] The first Kansai branch of a Sapporo soup-curry name, up a flight on the Shinkyogoku arcade south of Sanjo, opened in January 2026. A light but deep broth of chicken bones and Japanese dashi, piled with crisp fried vegetables and a fall-apart chicken leg (¥1,430), or soy-marinated zangi or pork kakuni; pick your spice level. Fifteen counter seats under lamps and coloured tiles; queues at peak times. Open daily 11:00–22:00.',
    chef_bio: { chef_name: null, roles: ['Operated by 株式会社B級グルメ研究所 (Tokyo), per the opening press release'], origin: null,
      background: 'A press release from 株式会社B級グルメ研究所 announced the grand opening on 30 January 2026 as the brand’s first shop in Kansai. Reviewers describe SOUP CURRY KING as a popular, often-queued Sapporo soup-curry shop, and an August 2026 reviewer notes it among Sapporo’s top 100 restaurants.',
      philosophy: 'An everyday soup curry: light yet deep, keeping Sapporo’s taste while working with local producers (Tabelog shop text).', specialty: 'Chicken soup curry.',
      anecdotes: [
        { text: 'An October 2026 first-timer dreaded tackling a whole chicken leg, then found it shredded easily with a spoon.', source: R + 'B536634330/' },
        { text: 'An October 2026 diner, lured in by a Wednesday-discount sign, ran out of soup halfway and ordered more.', source: R + 'B537015673/' },
      ],
      japanese_sources_summary: '食べログ: SOUP CURRY KING 京都新京極店、カレー・スープカレー、中京区新京極通三条下ル桜之町407-1 カレッジタウン詩の小路ビル2F、京都市役所前駅から354m、毎日 11:00〜22:00 (L.O.21:00)、予約不可、カード・QR可、15席、禁煙、子ども可、2026年1月30日オープン。店の紹介: 鶏ガラと香味野菜のスープに昆布、煮干し、鰹節の和風出汁、オリジナルスパイス、札幌の味を大切に地元の生産者と連携。プレスリリース (株式会社B級グルメ研究所): 2026年1月30日グランドオープン、関西初出店。口コミ (2026年、英語): チキンカレー1,430円、ザンギ野菜カレー1,760円、豚角煮野菜カレー1,980円、プレーンラッシー500円、辛さを選べる、カウンター15席。',
      confidence: 'medium', sources: [TB, PR, R + 'B533801230/', R + 'B533806192/', R + 'B534898793/', R + 'B535277256/', R + 'B535934880/', R + 'B536634330/', R + 'B537015673/', R + 'B537067464/', R + 'B537902656/', R + 'B538449157/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; counter seats only; many visitors from abroad (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新京極通三条下ル桜之町407-1 カレッジタウン詩の小路ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.00801, 135.767324); cross-checked: GSI 京都府京都市中京区桜之町407番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537902656/', R + 'B538449157/', R + 'B533806192/'],
    price_note: 'No menu read; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken soup curry', '¥1,430', 'Soup curry', 'ask', 'no', 'October 2026.', 'chicken_soup_curry'),
      it('', '', 'Hokkaido zangi vegetable soup curry', '¥1,760', 'Soup curry', 'no', 'no', 'October 2026; zangi is fried chicken.', 'zangi_vegetable_curry'),
      it('', '', 'Pork kakuni vegetable soup curry', '¥1,980', 'Soup curry', 'ask', 'no', 'August and October 2026.', 'kakuni_vegetable_curry'),
      it('', '', 'Plain lassi', '¥500', 'Drinks', '', 'no', 'August 2026.', 'plain_lassi'),
    ] }, {
    cuisine: '関西初出店の札幌スープカレー: 鶏ガラと香味野菜のスープに昆布、煮干し、鰹節の和風出汁とオリジナルスパイス、辛さとご飯の量を選べる (食べログの店紹介、2026年の口コミ)・チキンカレー1,430円、骨付きの鶏もも、じゃがいも、にんじん、ピーマン、キャベツ、うずら卵 (2026年10月)・チキン野菜カレー、シーフードカレー (2026年の口コミ)・北海道ザンギ野菜カレー1,760円、豚角煮野菜カレー1,980円 (2026年8〜10月)・なす、チーズ、半熟卵などのトッピング、スープの追加 (2026年9〜10月)・プレーンラッシー500円 (2026年8月)',
    neighborhood: '三条の南の新京極、MOVIX の近く。京都市役所前駅から徒歩7分',
    gf_detail: '要確認。鶏ガラと野菜と和風出汁のスープカレーに素揚げの野菜、ザンギは醤油味の鶏の唐揚げ。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。どのスープも鶏ガラと、昆布、煮干し、鰹節の出汁がベース (食べログの店紹介)。',
    notes: '[スープカレー・新京極、札幌の味が京都に] 札幌のスープカレーの関西初の店。三条の南、新京極のビルの2階に2026年1月に開店。鶏ガラと和風出汁のあっさりと深いスープに、素揚げの野菜と、スプーンでほぐれる骨付きの鶏もも (1,430円)、またはザンギや豚の角煮。辛さは選べる。ランプとタイルのカウンター15席、混む時間は行列。毎日11時〜22時。',
  });
}

// ================================================================ 個室居酒屋 和ノ音 京都駅前店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26042450/'; const R = TB + 'dtlrvwlst/';
  const HW = day(['16:00', '24:00']); const HE = day(['12:00', '24:00']);
  put({
    id: 'kyoto_wanone_kyoto_ekimae', name: '個室居酒屋 和ノ音 京都駅前店 (Wanone, Kyoto Ekimae)', category: 'OMNI',
    lat: 34.988018, lng: 135.760514, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, yakitori, hot pot and many fried dishes (kara-age, Tochio fried tofu, agedashi), with hegi soba to finish; no gluten information (October 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, chicken, beef and shrimp-broth dishes (October 2026 reviews).',
    hours_raw: '16:00–24:00 Monday–Friday; 12:00–24:00 Saturday, Sunday and holidays (food L.O. 23:00, drinks 23:30) (Tabelog). Reservations accepted; no-show after 15 minutes without notice; same-day changes charged for food; in December two dishes and a drink per person and a 2-hour limit (Tabelog). Cards: VISA, Master; no e-money or QR (Tabelog). 100 seats in private rooms for 2 to 30+, parties up to 130 seated; a terrace (Tabelog). Smoking allowed (Tabelog); paper cigarettes permitted (October 2026). QR-code ordering; English menu (Tabelog; October 2026). 3 min from Kyoto Station (Tabelog).',
    hours: { 0: HW, 1: HW, 2: HW, 3: HW, 4: HW, 5: HE, 6: HE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'In front of Kyoto Station, north side — 3 min on foot',
    cuisine: 'Private-room izakaya of fish, yakitori and Japanese small plates, with all-you-can-drink courses (Tabelog; October 2026 reviews) · Shiki no Kaze course, 8 dishes with 2 hours’ all-you-can-drink, ¥6,500 (¥5,500 on offer in October 2026) · sashimi platters, three-delicacy platter, Saikyo-miso cream cheese, soy-marinated quail eggs, grilled skate wing, offal stew, beef-tendon stew, Tochio fried tofu with natto, red-shrimp shabu-shabu, wagyu gunkan, hand-rolled salmon-and-roe sushi, kara-age, hegi soba, warabi mochi, tiramisu (October 2026 reviews)',
    website: null, gmaps: gm('個室居酒屋 和ノ音 京都駅前店'), menu_url: null,
    notes: '[Izakaya · Kyoto Station, private rooms near the trains] A big private-room izakaya three minutes from Kyoto Station, open from 4 p.m. on weekdays and noon at weekends until midnight — handy for an early drink before a train or a group dinner. Order by QR code from sashimi platters, Saikyo-miso cream cheese, offal stew and red-shrimp shabu-shabu, and finish with hegi soba; all-you-can-drink courses from about ¥5,500. Smoking is allowed, and reviewers split between praise and complaints of slow service.',
    chef_bio: { chef_name: null, roles: ['Operator not named in the sources; other 和ノ音 shops are listed in Hiroshima, Akihabara and Kaihin-Makuhari'], origin: null,
      background: 'Not stated in the sources read. Other shops under the 和ノ音 name appear on Gurunavi and Hot Pepper in Hiroshima (Hiroshima-ekimae), Tokyo (Akihabara-ekimae) and Chiba (Kaihin-Makuhari).',
      philosophy: null, specialty: 'Private rooms; hegi soba to finish.',
      anecdotes: [
        { text: 'An October 2026 group, unsure where to go after a meeting, landed here and found everything at least good — just over ¥8,000 a head for a hearty meal.', source: R + 'B537057467/' },
        { text: 'An October 2026 diner found the portions tiny, the food arriving all at once near the end of a timed drinks plan, and a problem with the bill.', source: R + 'B537711287/' },
      ],
      japanese_sources_summary: '食べログ: 個室居酒屋 和ノ音 京都駅前店、居酒屋・焼き鳥・魚介、下京区東塩小路町736、京都駅から徒歩3分、月〜金 16:00〜24:00、土日祝 12:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、予約可、カード (VISA、Master)、100席、個室 (2〜30人以上)、喫煙可、テラス、英語メニュー、飲み放題。口コミ (2026年10月、英語): Shiki no Kaze のコース8品と2時間飲み放題6,500円 (5,500円の特典)、刺身の盛り合わせ、珍味三種、クリームチーズの西京味噌漬け、もつ煮、Tochio の油揚げ、赤海老のしゃぶしゃぶ、和牛の軍艦、へぎそば、QRコードで注文。',
      confidence: 'low', sources: [TB, R + 'B537057467/', R + 'B537450271/', R + 'B537516558/', R + 'B537602614/', R + 'B537711287/', R + 'B537756516/', R + 'B537874001/', R + 'B538194242/', R + 'B538209696/', R + 'B538401087/'] },
    cultural_comfort: { level: 'english', note: 'English menu and QR ordering (Tabelog; October 2026); smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東塩小路町736',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; all ten reviews read date from October 2026.' },
    pin_source: `Tabelog ${TB} (34.988018, 135.760514); cross-checked: GSI 京都府京都市下京区東塩小路町736番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537756516/'],
    price_note: 'No menu read; course price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Shiki no Kaze course, 8 dishes with 2-hour all-you-can-drink', '¥6,500', 'Courses', 'ask', 'no', 'October 2026; ¥5,500 on offer then.', 'shiki_no_kaze_course'),
    ] }, {
    cuisine: '魚、焼き鳥、和の小皿の個室居酒屋、飲み放題のコースも (食べログ、2026年10月の口コミ)・Shiki no Kaze のコース、8品と2時間飲み放題で6,500円 (2026年10月は5,500円の特典)・刺身の盛り合わせ、珍味三種、クリームチーズの西京味噌漬け、うずら卵の醤油漬け、えいひれ焼き、もつ煮、牛すじ煮込み、Tochio の油揚げの納豆のせ、赤海老のしゃぶしゃぶ、和牛の軍艦、手巻きの親子寿司、唐揚げ、へぎそば、わらび餅、ティラミス (2026年10月の口コミ)',
    neighborhood: '京都駅前、北側。徒歩3分',
    gf_detail: '要確認。刺身、焼き鳥、鍋のほか、唐揚げ、Tochio の油揚げ、揚げ出しなど揚げ物が多く、締めはへぎそば。グルテンの情報はない (2026年10月の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、鶏、牛、海老の出汁の料理 (2026年10月の口コミ)。',
    notes: '[居酒屋・京都駅、駅前の個室] 京都駅から徒歩3分の大きな個室居酒屋。平日は16時、週末は12時から深夜0時まで開いていて、電車前の早めの一杯や宴会に便利。QRコードで、刺身の盛り合わせ、クリームチーズの西京味噌漬け、もつ煮、赤海老のしゃぶしゃぶを頼み、締めはへぎそば。飲み放題のコースは約5,500円から。喫煙可。口コミは絶賛と、提供の遅さへの不満に分かれる。',
  });
}

// ================================================================ いづ重
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002550/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-izuju.com/'; const SHOP = SITE + 'shop/';
  const H = day(['10:30', '17:00']);
  put({
    id: 'kyoto_gion_izuju', name: 'いづ重 (Izuju)', category: 'OMNI',
    lat: 35.003975, lng: 135.777086, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto pressed sushi with sweet-simmered fillings, kombu and tare-grilled hamo; the awafu roll uses wheat-gluten fu; no gluten information (official site).',
    vegan_status: 'limited', vegan_label: 'Limited vegan', vegan_detail: 'Limited: most sushi is fish, but the site offers shojin (Buddhist vegetarian) sushi boxes to order, the awafu roll is cooked shojin-style, and there is an eight-seaweed roll; the inari is simmered fried tofu — ask about the simmering (official site).',
    hours_raw: '10:30–17:00, Monday, Tuesday and Friday–Sunday and holidays; closed Wednesday and Thursday (a holiday closure moves to the next day); may close early when sold out (Tabelog; official site for the closed days). The official English page gives older hours to 19:00. No reservations for tables; takeaway with or without ordering ahead (official site). Saba-zushi orders suspended for lack of good mackerel (official site; Tabelog, end of April 2026; July–September 2026 reviews). Reopened 5 September after a long renovation closure, its longest since 1945 (official site). Cards: VISA, Master, JCB, AMEX, Diners; no e-money or QR (Tabelog). 20 seats: tables and two semi-private tatami booths for three (Tabelog). Non-smoking; children welcome; English menu (Tabelog). At the northwest corner of the crossing below the Yasaka Shrine steps (official site).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, below the Yasaka Shrine steps — 8 min from Keihan Gion-Shijo Stn',
    cuisine: 'Kyoto-style pressed, rolled and saba sushi made almost unchanged since the late Meiji founding (official site) · saba sugata-zushi of Tsushima mackerel — suspended until good fish returns (official site) · jo-hako-zushi, the layered box of tai, egg, shrimp and seasonal fish ¥2,160 · Kyoto maki ¥1,200 · inari ¥950 with hemp seeds, yuzu and burdock in the rice; a winter version with grilled Kujo green onion · guji (amadai) sugata-zushi ¥5,160 · kodai sasamaki ¥1,620 · aji (shima-aji) sushi ¥1,500 · Kyoto chirashi ¥1,560; hamo chirashi ¥1,800 in season; awafu roll ¥600; seaweed roll ¥900 (official site, prices before tax) · reviewers paid ¥2,200 for aji sushi, ¥990 for inari and ¥440–550 for sasamaki of ayu, eel or matsutake (September 2026)',
    website: SITE, gmaps: gm('いづ重 祇園'), menu_url: SHOP,
    notes: '[Sushi · Gion, Kyoto pressed sushi below Yasaka Shrine] An old sushi house at the foot of the Yasaka Shrine steps, making Kyoto sushi — pressed boxes, saba-zushi, rolls — much as it has since the late Meiji era. The famous saba-zushi is on hold until good mackerel returns (the owner would rather not sell than sell poor fish), but the layered jo-hako box, shima-aji sushi, inari with crunchy hemp seeds and seasonal sasamaki carry on. No bookings; arrive at 10:30 to beat the queue. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), who signs the site’s notices and explains each sushi'], origin: null,
      background: 'Per the official site: Kyoto sushi made by methods kept almost unchanged since the founding in the late Meiji era, more than a hundred years from the first-generation owner, 重吉. The shop reopened on a 5 September after its longest closure since the forced evacuations at the end of the war in 1945. Takeaway is also sold at counters in Kyoto Station, the Takashimaya stores in Kyoto and Osaka, and Abeno Harukas. A July 2026 reviewer calls the owner a living encyclopedia of Gion and Kyoto.',
      philosophy: '“Better to give up and not sell than to sell poor mackerel” — the owner’s note on suspending saba-zushi (official site); keep old methods alive so that Kyoto sushi has a future (official site).', specialty: 'Saba sugata-zushi; jo-hako-zushi.',
      anecdotes: [
        { text: 'An August 2026 lunch guest was told the small batch of rice had run out and to come back in an hour; on return the empty room filled up fast.', source: R + 'B533933070/' },
        { text: 'An August 2026 diner nearly left on hearing there was no mackerel sushi, but was offered hamo and ayu sushi instead.', source: R + 'B533814543/' },
        { text: 'A September 2026 diner arrived on the very day the inari came back, and liked the crunch of hemp seeds in the rice.', source: R + 'B535930997/' },
      ],
      japanese_sources_summary: '公式サイト: 京寿司の老舗 祇園石段下 いづ重、東山区祇園町北側292-1、八坂神社の石段下の交差点北西角、明治の創業からほとんど変わらない製法、初代重吉より百年以上、鯖寿司受付中止 (良いサバが獲れないため)、9月5日に営業再開 (昭和20年の強制疎開以来の長期休業)、水・木曜定休、上箱寿司2,160円、巻寿司1,200円、いなり寿司950円 (苧の実、柚子、ごぼう)、焼九条葱入り大人のいなり寿司 (10〜3月)、ぐぢ姿寿司5,160円、小鯛笹巻1,620円、あじ寿司1,500円、京ちらし1,560円、鱧ちらし1,800円、粟麩巻600円 (精進料理の手法、精進の寿司折りにも対応)、海藻巻900円 (いずれも税抜)、お持ち帰りは京都駅構内、高島屋京都店・大阪店、あべのハルカスでも。食べログ: 10:30〜17:00、水・木休み、売り切れ次第終了、予約不可、カード可、20席、禁煙、英語メニュー、鯖不漁のため鯖の料理は休止 (2026年4月末時点)。口コミ (2026年、英語): あじ寿司2,200円、いなり3個990円、笹巻、鱧ちらし、上箱寿司。',
      confidence: 'medium', sources: [TB, SITE, SHOP, SITE + 'english-page/', R + 'B503864017/', R + 'B532695388/', R + 'B533396276/', R + 'B533814543/', R + 'B533933070/', R + 'B535930997/', R + 'B535932202/', R + 'B536109489/', R + 'B537011350/', R + 'B538650760/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog) and an English page on the site; no reservations; tatami booths and tables.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側292-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.003975, 135.777086); cross-checked: GSI 京都府京都市東山区祇園町北側292番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SHOP, R + 'B535932202/'],
    price_note: 'Official site prices are before tax; a September 2026 review paid ¥2,200 for aji sushi and ¥990 for inari, so in-shop prices may be higher.', last_checked: TODAY, items: [
      it('上箱寿司', '', 'Jo-hako-zushi, layered box sushi', '¥2,160', 'Sushi', 'ask', 'no', 'Official site, before tax.', 'jo_hako_zushi'),
      it('巻寿司', '', 'Kyoto maki (shiitake, kanpyo, mitsuba, egg)', '¥1,200', 'Sushi', 'ask', 'no', 'Official site, before tax.', 'kyo_maki'),
      it('いなり寿司', '', 'Inari sushi with hemp seeds, yuzu and burdock', '¥950', 'Sushi', 'ask', 'ask', 'Official site, before tax; ¥990 for three in September 2026.', 'inari'),
      it('ぐぢ姿寿司', '', 'Guji (amadai) sugata-zushi', '¥5,160', 'Sushi', 'ask', 'no', 'Official site, before tax.', 'guji_sugata'),
      it('小鯛笹巻', '', 'Kodai sasamaki', '¥1,620', 'Sushi', 'ask', 'no', 'Official site, before tax.', 'kodai_sasamaki'),
      it('あじ寿司', '', 'Aji (shima-aji) sushi', '¥1,500', 'Sushi', 'ask', 'no', 'Official site, before tax; ¥2,200 in September 2026.', 'aji_zushi'),
      it('粟麩巻', '', 'Awafu roll (shojin-style)', '¥600', 'Sushi', 'no', 'ask', 'Official site, before tax.', 'awafu_maki'),
      it('海藻巻', '', 'Eight-seaweed roll', '¥900', 'Sushi', 'ask', 'ask', 'Official site, before tax.', 'kaiso_maki'),
    ] }, {
    cuisine: '明治末の創業からほとんど変わらない製法の京寿司、押し寿司、巻寿司、鯖寿司 (公式サイト)・対馬の真鯖の鯖姿寿司は良い鯖が戻るまで休止 (公式サイト)・鯛、玉子、海老、季節の魚を重ねる上箱寿司2,160円・京巻き1,200円・苧の実、柚子、ごぼう入りのいなり寿司950円、冬は焼き九条葱入りも・ぐぢ姿寿司5,160円・小鯛笹巻1,620円・縞あじのあじ寿司1,500円・京ちらし1,560円、季節の鱧ちらし1,800円、粟麩巻600円、海藻巻900円 (公式サイト、税抜)・口コミではあじ寿司2,200円、いなり990円、鮎、鰻、松茸の笹巻440〜550円 (2026年9月)',
    neighborhood: '祇園、八坂神社の石段下。京阪祇園四条駅から徒歩8分',
    gf_detail: '要確認。甘辛く炊いた具、昆布、タレ焼きの鱧などの京寿司。粟麩巻は小麦の麩を使う。グルテンの情報はない (公式サイト)。',
    vegan_detail: '一部対応。ほとんどの寿司は魚だが、精進の寿司折りの注文に対応し、粟麩巻は精進料理の手法、八種の海藻巻もある。いなりの揚げを炊く出汁は確認を (公式サイト)。',
    notes: '[寿司・祇園、八坂神社石段下の京寿司] 八坂神社の石段下に構える京寿司の老舗。明治の末から、箱寿司、鯖寿司、巻寿司をほぼ変わらぬ製法で作る。名物の鯖寿司は良い鯖が戻るまで休止中 (悪い鯖を売るより売らない方がいいという店主の判断)。それでも上箱寿司、縞あじの寿司、苧の実がカリッとするいなり、季節の笹巻は健在。予約不可、行列を避けるなら10時半に。水・木休み。',
  });
}

save();
