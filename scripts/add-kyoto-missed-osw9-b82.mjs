// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 82.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   + 一楽家 東洞院高辻店 Ichiraku Ya (old-house izakaya near Shijo-Karasuma; seafood-bowl lunches)
//   + 本格炭火焼うなぎ えん 京都三条店 Unagi En (Kansai-style charcoal eel by Sanjo Ohashi; one of two shops, with Hikone)
//   + イル フィーロ Il Filo (Northern Italian counter on Kiyamachi)
//   + 天ぷら割烹 やまもと Tempura Kappo Yamamoto (Gion tempura counter, moved from Takakura-Nijo in 2023)
//   Chain checks: 一楽家 — a Tabelog search for 一楽家 / Ichiraku Ya finds only this izakaya (the other hits are unrelated ramen
//   shops in Kanagawa, Osaka and Kyoto); うなぎ えん — two shops found (Kyoto Sanjo and Hikone; Hot Pepper, Retty, hamoni;
//   a September 2026 reviewer had eaten at the Hikone shop), none in data, so drafted. No brand is a THAN brand
//   (than.co.jp/brands). Same-name counts: none in data or queue-status for 一楽家, フィーロ, うなぎ えん or 天ぷら割烹 やまもと
//   (the やまもと hit in data is グリルやまもと). None is in a hotel.
//   Service charges from Tabelog's Japanese original: イル フィーロ 「席料￥300（税別）」; えん 「無し」; 一楽家 and やまもと have
//   no section.
//   Pins (checked against main, hidden records included): イル フィーロ moved 4m ENE (2.9m from kyoto_tsubakuro_suppon next
//   door); the other three ≥ 16m from every record.
//   JA text: 天ぷら appears only inside longer runs, never as a bare 天.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-82');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 一楽家 東洞院高辻店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019377/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '13:30'], ['17:00', '24:00']); const D = day(['17:00', '24:00']);
  put({
    id: 'kyoto_ichirakuya_higashinotoin', name: '一楽家 東洞院高辻店 (Ichiraku Ya)', category: 'OMNI',
    lat: 35.000865, lng: 135.761154, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and grilled dishes may suit; soy-based bowls and fried dishes are common (2023–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nukazuke cucumbers (2023–25 reviews), but most dishes have fish or meat.',
    hours_raw: 'Mon and Fri 11:30–13:30 and 17:00–24:00; Tue, Wed, Thu, Sat 17:00–24:00; closed Sundays and holidays; lunch until sold out; hours may change (Tabelog). Lunch is three dishes only — seafood bowl, pork bowl, curry (2024 reviews). Cards (JCB, AMEX, Diners only); no e-money or QR (Tabelog). Smoking allowed, at lunch too (Tabelog; February 2024 review). Counter and tatami seats in an old-house interior (November 2023 review). 2 min from Shijo Stn, near Hotel Nikko (Tabelog; November 2023 review).',
    hours: { 0: LD, 1: D, 2: D, 3: D, 4: LD, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashinotoin-Bukkoji, south of Shijo-Karasuma — 2 min from Shijo Stn',
    cuisine: 'Local izakaya with daily sashimi on a whiteboard: assorted sashimi of akabotan shrimp, kanpachi and octopus, nukazuke cucumbers (November 2023); irori-style grill, garlic chives and egg with mayonnaise, fried shrimp, pork belly and vegetables, zosui (January 2025); tuna sashimi, firefly squid in soy, shirasu tofu, ume chazuke (2025); shichirin grilling (July 2026). Lunch: special seafood bowl ¥1,100 with miso soup, pork bowl or curry ¥700 (September 2024)',
    website: null, gmaps: gm('一楽家 東洞院高辻店'), menu_url: null,
    notes: '[Izakaya · Shijo-Karasuma] A smoky, old-farmhouse-style izakaya loved by locals and office workers: daily sashimi, shichirin grilling and cheap stir-fries at night, a big ¥1,100 seafood bowl at lunch. About ¥3,000–6,000; smoking allowed.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'A local izakaya run by a manager with a small, lively staff (January 2025 review); the boss shows the day\'s specials on a small blackboard (January 2025 review).',
      philosophy: null,
      specialty: 'Sashimi; seafood rice bowl at lunch.',
      anecdotes: [
        { text: 'A January 2025 diner found the stir-fried garlic chives and egg topped with mayonnaise a first, and noted the cook shouting thanks at every bill paid.', source: R + 'B498838068/' },
        { text: 'A September 2024 lunch guest was asked straight away whether it would be the seafood bowl, and found the fish hid the rice entirely.', source: R + 'B492546167/' },
        { text: 'A July 2026 office worker meant to have a quick drink and enjoyed grilling on the shichirin.', source: R + 'B532282928/' },
      ],
      japanese_sources_summary: '食べログ: 一楽家 東洞院高辻店、居酒屋・魚介料理・日本料理、下京区、四条烏丸の南、サイトービル1F、地下鉄四条駅から徒歩2分、月・金 11:30〜13:30・17:00〜24:00、火・水・木・土 17:00〜24:00、日曜・祝日休み、昼は売り切れまで、カード可 (JCB・AMEX・Diners)、電子マネー・QR 不可、喫煙可。口コミ (2023〜2026年、英語): 地元の客に愛される居酒屋、古民家のような店内、刺身の盛り合わせ、ぬか漬けのきゅうり、ニラ玉、海老フライ、雑炊、七輪、昼は海鮮丼1,100円、豚丼とカレー700円 (2024年9月)。',
      confidence: 'medium', sources: [TB, R + 'B474279200/', R + 'B480177354/', R + 'B492546167/', R + 'B498838068/', R + 'B512227160/', R + 'B515048076/', R + 'B532282928/'] },
    cultural_comfort: { level: 'japanese', note: 'A local, smoky izakaya; specials on a whiteboard.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院仏光寺下る高橋町613-4 サイトービル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.000865, 135.761154); cross-checked: GSI 京都府京都市下京区高橋町613番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480177354/', R + 'B492546167/'],
    price_note: 'Lunch prices from 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special seafood rice bowl (lunch, with miso soup)', '¥1,100', 'Lunch', 'ask', 'no', 'February and September 2024 reviews.', 'kaisendon'),
      it('', '', 'Homemade pork rice bowl (lunch)', '¥700', 'Lunch', 'ask', 'no', 'September 2024 reviews (¥650 in February 2024).', 'butadon'),
      it('', '', 'Homemade curry rice (lunch)', '¥700', 'Lunch', 'no', 'no', 'September 2024 review.', 'curry'),
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', '2023–26 reviews.', 'sashimi'),
    ] }, {
    cuisine: 'ホワイトボードに日替わりの刺身がある地元の居酒屋: 赤ボタンエビ、カンパチ、タコの刺身の盛り合わせ、きゅうりのぬか漬け (2023年11月)、囲炉裏風の焼き物、マヨネーズのニラ玉、海老フライ、豚バラと野菜の炒め物、雑炊 (2025年1月)、マグロの刺身、ホタルイカの醤油漬け、しらす豆腐、梅茶漬け (2025年)、七輪の焼き物 (2026年7月)。昼は特製の海鮮丼1,100円 (味噌汁付き)、豚丼かカレー700円 (2024年9月)',
    neighborhood: '東洞院仏光寺、四条烏丸の南。四条駅から徒歩2分',
    gf_detail: '要確認。刺身と焼き物は合う可能性があるが、醤油味の丼や揚げ物が多い (2023〜26年の口コミ)。',
    vegan_detail: '要確認。きゅうりのぬか漬け (2023〜25年の口コミ) があるが、ほとんどの料理に魚か肉。',
    notes: '[居酒屋・四条烏丸] 地元の客と会社員に愛される、古民家のような煙たい居酒屋。夜は日替わりの刺身、七輪、安い炒め物、昼はボリュームのある1,100円の海鮮丼。3,000〜6,000円ほど、喫煙可。',
  });
}

// ================================================================ 本格炭火焼うなぎ えん 京都三条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039633/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '16:00'], ['17:00', '21:30']); const WE = day(['11:30', '16:00'], ['17:00', '21:30']);
  put({
    id: 'kyoto_unagi_en_sanjo', name: '本格炭火焼うなぎ えん 京都三条店 (Unagi En Kyoto Sanjo)', category: 'OMNI',
    lat: 35.009345, lng: 135.773336, cuisine_type: 'unagi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: eel is basted with a soy-based tare; plain shirayaki with wasabi is offered (2025–26 reviews) — ask about soy.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel restaurant.',
    hours_raw: 'Tue–Fri 12:00–16:00 (L.O. 15:00) and 17:00–21:30 (L.O. 20:30); Sat, Sun and holidays 11:30–16:00 and 17:00–21:30; closed Mondays (Tuesday when Monday is a holiday) (Tabelog). No service charge (Tabelog Japanese original 「無し」). Order by QR code (2025–26 reviews). Cards and QR; no e-money (Tabelog). 30 seats: 14 at the counter and tables at the back; non-smoking (Tabelog; August 2026 review). Basement of the Takagi Kaikan on Sanjo-dori east of Sanjo Ohashi, 2 min from Sanjo (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo Ohashi, east bank — 2 min from Sanjo Keihan Stn',
    cuisine: 'Kansai-style jiyaki eel grilled over charcoal, crisp outside and soft inside, with a light, slightly sweet tare: unaju by fillet size from ¥2,970 (half) and ¥4,070 (three-quarter) to ¥5,170 (one eel) (2026), the Shirakaba box of kabayaki and shirayaki with wasabi (August 2025), special hitsumabushi ¥5,500, Yamato-imo tororo ¥440 (August 2026), unagi nishiki with dashimaki ¥3,410 (September 2026); yuba and aosa soup, liver soup +¥150, grilled liver (2025–26)',
    website: null, gmaps: gm('本格炭火焼うなぎ えん 京都三条店'), menu_url: null,
    notes: '[Unagi · Sanjo] A modern basement eel house by Sanjo Ohashi grilling Kansai-style over charcoal — crisp skin, fluffy flesh, light tare — with unaju from about ¥3,000 and hitsumabushi. QR ordering; one of two shops with Hikone.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'One of two shops of the brand, with Hikone in Shiga (Hot Pepper; Retty; September 2026 review). The eel is grilled to order, about 30 minutes (December 2025 review), behind a glass partition at the counter (December 2025 review).',
      philosophy: null,
      specialty: 'Kansai-style charcoal-grilled unaju and hitsumabushi.',
      anecdotes: [
        { text: 'A January 2026 diner who tours eel shops nationwide sensed the craftsmen\'s dedication from the entrance and rated the value top-level.', source: R + 'B521334695/' },
        { text: 'A July 2026 guest staying at the Hilton Kyoto walked over for unaju and was seen off by the owner.', source: R + 'B532631029/' },
        { text: 'A September 2026 family of three ordered three different dishes, and the daughter noticed the dashimaki crowding out the eel in one box.', source: R + 'B536309806/' },
      ],
      japanese_sources_summary: '食べログ: 本格炭火焼うなぎ えん 京都三条店、うなぎ・日本料理・弁当、東山区、三条大橋の東、高樹会館 B1F、京阪・地下鉄三条駅から徒歩2分、火〜金 12:00〜16:00・17:00〜21:30、土日・祝日 11:30〜16:00・17:00〜21:30、月曜休み、サービス料なし、カード・QR 可、30席 (カウンター14)、禁煙。口コミ (2025〜2026年): 関西地焼き、外はカリッと中はふわトロ、注文は QR (2025年12月、日本語)、うな重 (1/2・3/4・1本)、ひつまぶし、白焼き、湯葉とあおさの吸い物、肝吸い、彦根にも店 (2026年9月)。',
      confidence: 'medium', sources: [TB, R + 'B469962604/', R + 'B511837018/', R + 'B518515913/', R + 'B519537574/', R + 'B521334695/', R + 'B524913522/', R + 'B532631029/', R + 'B533458778/', R + 'B536309806/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering suits overseas visitors (December 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区三条通大橋東入大橋町103 高樹会館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009345, 135.773336); cross-checked: GSI 京都府京都市東山区大橋町103番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524913522/', R + 'B533458778/', R + 'B536309806/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Unaju, half eel', '¥2,970', 'Unaju', 'no', 'no', 'March 2026 review.', 'unaju_half'),
      it('', '', 'Unaju Take (three-quarter eel)', '¥4,070', 'Unaju', 'no', 'no', 'March and September 2026 reviews.', 'unaju_take'),
      it('', '', 'Unaju, one eel', '¥5,170', 'Unaju', 'no', 'no', 'July 2026 review.', 'unaju_one'),
      it('', '', 'Special hitsumabushi', '¥5,500', 'Hitsumabushi', 'no', 'no', 'August 2026 review.', 'hitsumabushi'),
      it('', '', 'Unagi nishiki (with dashimaki)', '¥3,410', 'Rice', 'no', 'no', 'September 2026 review.', 'nishiki'),
    ] }, {
    cuisine: '炭火で焼く関西地焼きのうなぎ、外はカリッと中はふわふわ、軽くほんのり甘いたれ: うな重は大きさで1/2 2,970円、3/4 4,070円、1本5,170円 (2026年)、蒲焼きと白焼きをわさびで食べる Shirakaba 重 (2025年8月)、Special のひつまぶし5,500円、Yamato-imo のとろろ440円 (2026年8月)、だし巻きの Unagi Nishiki 3,410円 (2026年9月)、湯葉とあおさの吸い物、肝吸い +150円、肝焼き (2025〜26年)',
    neighborhood: '三条大橋の東。京阪三条駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。醤油のたれで焼く。わさびで食べる白焼きもある (2025〜26年の口コミ)。醤油について要確認。',
    vegan_detail: 'ヴィーガン不可。うなぎの店。',
    notes: '[うなぎ・三条] 三条大橋のそばのモダンな地下のうなぎ屋。炭火の関西地焼きで皮はパリッと身はふわふわ、たれは軽め。うな重は3,000円ほどから、ひつまぶしも。注文は QR、彦根にも店。',
  });
}

// ================================================================ イル フィーロ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023355/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_il_filo_kiyamachi', name: 'イル フィーロ (Il Filo)', category: 'OMNI',
    lat: 35.010239, lng: 135.770706, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Homemade pasta and bread are wheat; the kitchen adapts courses to requests (August 2025 review).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The kitchen adapts courses to requests (August 2025 review), but dishes use seafood, meat and butter.',
    hours_raw: 'Lunch 12:00–14:00 (reservation required); dinner 18:00–22:00 (last entry); closed Wednesdays and Thursday lunch — the listing is ambiguous; hours may change; a notice says it reopens on 1 November (year not given) (Tabelog). Lunch from ¥2,500 on Fri, Sat and Sun (November 2024 review). Seat charge ¥300 plus tax (Tabelog Japanese original 「席料￥300（税別）」). Cards; no e-money or QR (Tabelog). 18 seats: a 10-seat counter and two tables, a private room for 8; non-smoking; children welcome (Tabelog). Kiyamachi south of Oike, 1 min from Kyoto Shiyakusho-mae (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi, south of Oike — 1 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Northern Italian courses and a la carte with a wide wine list: homemade bread and pasta, ossobuco with marrow (August 2025); white truffle over thin egg pasta, tagliolini or tajarin (December 2025); cold sea-urchin and pumpkin soup, shiitake with bottarga (October 2023); lunch from ¥2,500 (November 2024); about ¥10,000–20,000 at dinner',
    website: null, gmaps: gm('イル フィーロ 木屋町'), menu_url: null,
    notes: '[Italian · Kiyamachi] A counter Italian run like a kappo: a Northern Italian chef cooks courses shaped to each guest, with homemade pasta, ossobuco and white truffles in season, and a deep wine list. About ¥10,000–20,000; ¥300 seat charge.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'A chef specialising in Northern Italian cooking (December 2025 review); Italian food by Japanese chefs, served like a kaiseki counter that takes requests (August 2025 review).',
      philosophy: null,
      specialty: 'Homemade pasta; seasonal truffles.',
      anecdotes: [
        { text: 'A December 2025 regular had white truffle over thin egg pasta and felt it beat the best of Milan.', source: R + 'B518895173/' },
        { text: 'An August 2025 first-timer, introduced by Kurihana, saw a note asking guests to check before taking photos.', source: R + 'B512697116/' },
      ],
      japanese_sources_summary: '食べログ: イル フィーロ、イタリアン・ワインバー・パスタ、中京区の木屋町、御池の南、1F、京都市役所前駅から徒歩1分、昼 12:00〜14:00 (要予約)、夜 18:00〜22:00 (最終入店)、定休日は「水曜と木曜 (昼)」と記載、11月1日に再開と告知 (年の記載なし)、席料300円 (税別)、カード可、電子マネー・QR 不可、18席 (カウンター10)、個室あり、禁煙、子供可。口コミ (2023〜2025年、英語): 北イタリアの料理の料理人、自家製のパンとパスタ、オッソブーコ (2025年8月)、白トリュフ (2025年12月)、割烹のように注文に応じる、昼は2,500円から (2024年11月)。',
      confidence: 'medium', sources: [TB, R + 'B472913226/', R + 'B494889722/', R + 'B511883010/', R + 'B512697116/', R + 'B518895173/', R + 'B532681705/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter dining; ask before taking photos (August 2025 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通御池下ル上大阪町519 １F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (a reopening notice for 1 November, year not given); reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.010225, 135.770665), moved 4m ENE to clear kyoto_tsubakuro_suppon (2.9m); cross-checked: GSI 京都府京都市中京区上大阪町519番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B494889722/'],
    price_note: 'Lunch price from a November 2024 review; ¥300 seat charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch (Fri–Sun)', 'from ¥2,500', 'Lunch', 'ask', 'ask', 'November 2024 review.', 'lunch'),
      it('', '', 'Ossobuco', '', 'Mains', 'ask', 'no', 'August 2025 review.', 'ossobuco'),
    ] }, {
    cuisine: 'ワインの豊富な北イタリアのコースとアラカルト: 自家製のパンとパスタ、骨髄ごとのオッソブーコ (2025年8月)、白トリュフの細いパスタ (2025年12月)、雲丹とかぼちゃの冷たいスープ、しいたけとボッタルガ (2023年10月)、昼は2,500円から (2024年11月)、夜は10,000〜20,000円ほど',
    neighborhood: '木屋町、御池の南。京都市役所前駅から徒歩1分',
    gf_detail: '要確認。自家製のパスタとパンは小麦。注文に応じてコースを調整してくれる (2025年8月の口コミ)。',
    vegan_detail: '要確認。注文に応じてくれる (2025年8月の口コミ) が、魚介、肉、バターを使う。',
    notes: '[イタリアン・木屋町] 割烹のようなカウンターのイタリアン。北イタリアの料理の料理人が客に合わせてコースを作り、自家製パスタ、オッソブーコ、季節の白トリュフと豊富なワイン。10,000〜20,000円ほど、席料300円。',
  });
}

// ================================================================ 天ぷら割烹 やまもと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039495/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_tempura_kappo_yamamoto_gion', name: '天ぷら割烹 やまもと (Tempura Kappo Yamamoto)', category: 'OMNI',
    lat: 35.005672, lng: 135.776882, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura counter (wheat batter).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood tempura course (2023–26 reviews).',
    hours_raw: 'Mon–Sat 17:00–22:00; closed Sundays (Tabelog). Cards, e-money and QR (Tabelog). 14 seats at a counter and tatami rooms; heated tobacco only in a smoking area (Tabelog; April 2026 review). English and Traditional Chinese menus (Tabelog); English-speaking staff (December 2024 review). 4th floor of the Higashi-Shinbashi Building east of Hanamikoji on Shinbashi, 7 min from Sanjo or Gion-Shijo (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion Shinbashi, east of Hanamikoji — 7 min from Gion-Shijo Stn',
    cuisine: 'Creative tempura and kappo: an omakase tempura course of appetizers, sashimi, shrimp, anago, seasonal vegetables and fish, the signature karasumi mochi topped with sea urchin, and a tempura rice ball or tempura sushi to finish, with brown-sugar sorbet (2025–26); two salts, curry salt and tentsuyu (2023–25); a la carte sashimi and an uni-ikura bowl (March 2025); about ¥10,000–20,000',
    website: null, gmaps: gm('天ぷら割烹 やまもと 祇園'), menu_url: null,
    notes: '[Tempura · Gion] A fourth-floor tempura counter run by a famously cheerful owner with years in Miyakawacho: creative courses with karasumi mochi and sea urchin, light batter, curry salt, and sake to match. About ¥10,000–20,000.',
    chef_bio: { chef_name: 'Yamamoto (surname only, July 2025 review)', roles: ['Owner-chef'], origin: null,
      background: 'Moved to Gion in March 2023 from Takakura-Nijo (October 2023 and March 2025 reviews); Tabelog gives 19 March 2023 as the opening. Many years in Miyakawacho (April 2026 review). Nicknamed "Sexy Yamamoto" by a July 2025 guest; cheerful and entertaining (2024–26 reviews).',
      philosophy: null,
      specialty: 'Karasumi mochi with sea urchin; tempura sushi.',
      anecdotes: [
        { text: 'A March 2025 birthday party asked for junmai daiginjo when booking and found excellent sake waiting; tempura sushi closed the course.', source: R + 'B502809470/' },
        { text: 'An April 2026 guest was put at ease by the owner\'s smile the moment the door opened, and enjoyed IQOS at the table.', source: R + 'B529981548/' },
        { text: 'A December 2024 diner who usually avoids anago happily finished one here.', source: R + 'B498627296/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら割烹 やまもと、日本料理、東山区林下町427 東新橋ビル4F、京阪三条駅・祇園四条駅から徒歩7分、月〜土 17:00〜22:00、日曜休み、カード・電子マネー・QR 可、14席、個室あり、加熱式たばこのみ喫煙可、英語と繁体字のメニュー、2023年3月19日オープン。口コミ (2023〜2026年、英語): Takakura-Nijo から祇園に移転、店主は Yamamoto さん、Miyakawacho で長く、からすみ餅に雲丹、穴子、カレー塩、最後は天ぷらのおにぎりか天ぷらの寿司、英語の話せるスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B473295030/', R + 'B498627296/', R + 'B502605049/', R + 'B502809470/', R + 'B510763444/', R + 'B526369907/', R + 'B526568252/', R + 'B529981548/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog) and English-speaking staff (December 2024 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区花見小路新橋東入る林下町427 東新橋ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (35.005672, 135.776882); cross-checked: GSI 京都府京都市東山区林下町427番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526568252/', R + 'B529981548/'],
    price_note: 'No item prices found; reviews give ¥10,000–20,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Omakase tempura course', '', 'Courses', 'no', 'no', 'April 2026 reviews.', 'omakase'),
      it('', '', 'Seasonal tempura and sashimi course', '', 'Courses', 'no', 'no', 'March 2025 review.', 'tempura_sashimi'),
    ] }, {
    cuisine: '創作的な天ぷらと割烹: 先付と刺身、海老、穴子、季節の野菜と魚のおまかせのコース、名物のからすみ餅に雲丹、最後は天ぷらのおにぎりか天ぷらの寿司、黒糖のシャーベット (2025〜26年)、2種の塩、カレー塩、天つゆ (2023〜25年)、アラカルトの刺身と雲丹いくら丼 (2025年3月)、10,000〜20,000円ほど',
    neighborhood: '祇園新橋、花見小路の東。祇園四条駅から徒歩7分',
    gf_detail: 'グルテンフリー不可。天ぷらの店 (小麦の衣)。',
    vegan_detail: 'ヴィーガン不可。魚介の天ぷらのコース (2023〜26年の口コミ)。',
    notes: '[天ぷら・祇園] ビル4階の天ぷらのカウンター。Miyakawacho で長く腕をふるった明るい店主が、からすみ餅と雲丹などの創作的なコース、軽い衣、カレー塩、合わせる日本酒で。10,000〜20,000円ほど。',
  });
}

save();
