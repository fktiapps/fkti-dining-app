// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 83 (2026-11-08).
//   + 鮨 流嘉 Sushi Ryuka (red-vinegar sushi omakase, opened 2025, Gokomachi-Oike; rest)
//   + 海鮮ときどきブタ Kaisen Tokidoki Buta (build-your-own seafood bowls, Karasuma-Bukkoji basement; rest)
//   + 龍馬 三条烏丸 Ryoma (late-night seafood izakaya, Sanjo-Karasuma basement; rest)
//   + 鳥久 Torikyu (mizutaki and kaiseki house of 1896 by Maruyama Park; rest)
//   Rest list (mod 6 = 1) after batch 82, nearest-first — skipped:
//   - 本格焼肉チファジャ 烏丸仏光寺店 26021071: chain — 本格焼肉チファジャ, six shops (same call as 26006761, 26003650).
//   Brand check: queue-status.jsonl grepped for 流嘉, ときどきブタ, 龍馬, 鳥久 — no entries; the other 龍馬 and 鳥久 names in our crawls
//   (割烹 龍馬, 鮨 龍馬, 日本橋 鳥久 and others) are unrelated businesses. None of the four is in data (main 3c1630a9, hidden records
//   included) by name.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-83');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26021071/', 'chain: 本格焼肉チファジャ — six shops in Kyoto, Shiga and Yamanashi; same call as 26006761 and 26003650');

// ================================================================ 鮨 流嘉 Sushi Ryuka
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043301/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'kyoto_sushi_ryuka', name: '鮨 流嘉 (Sushi Ryuka)', category: 'OMNI',
    lat: 35.01143959786751, lng: 135.76628503042292, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi on red-vinegar rice with soy and cooked side dishes; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi omakase (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday and Thursday–Sunday 18:00–22:30, two seatings at 18:00 and 20:30; closed Wednesday, though a Wednesday may be arranged in advance (Tabelog). Reservations through TableCheck ("Kyoto Sushi Ryuka - 鮨 流嘉"); seat requests may change (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR (Tabelog). 11 seats: 7 at the counter and a private room with a table for 4 (Tabelog). Gokomachi above Oike, a short walk from Kyoto Shiyakusho-mae Stn (Tabelog; September 2025). Opened in summer 2025 (June–August 2025 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gokomachi, above Oike',
    cuisine: 'Counter sushi omakase on red-vinegar rice, pitched as approachable for first-timers (Tabelog; 2025–2026 reviews) · Omakase Ryuka course ¥20,000 incl. tax (September 2025) · thick, generous toppings including wild tuna and unusual seasonal fish such as aburabozu; side dishes; some luxurious pieces with smoked meat, caviar and truffle, served with a smoke flourish (July 2025–February 2026) · about ¥20,000–30,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('鮨 流嘉 御幸町'), menu_url: null,
    notes: '[Sushi · Gokomachi-Oike, 11 seats] A new, glossy sushi counter near City Hall serving a ¥20,000 omakase of thick-cut fish on red-vinegar rice, with seasonal rarities and showy pieces topped with caviar and truffle. Two seatings nightly; book on TableCheck. Some 2026 guests found the service and pairings unpolished.',
    chef_bio: { chef_name: null, roles: ['Sushi chef (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog and reviewers: a sushi counter that opened in summer 2025 near Kyoto City Hall, with a modern, gold-accented interior and an entertaining chef (July 2025–February 2026).',
      philosophy: 'Authentic sushi for everyday Kyoto, easy for first-timers (Tabelog).', specialty: 'Omakase Ryuka course.',
      anecdotes: [
        { text: 'A July 2025 diner discovered unfamiliar seasonal fish such as aburabozu and called the wild tuna the best ever eaten.', source: R + 'B509942369/' },
        { text: 'A February 2026 guest liked the fish but found the pieces piled with smoked meat, caviar and truffle too much luxury on luxury.', source: R + 'B534394119/' },
        { text: 'A January 2026 visitor praised the sushi but found the service let down by a new part-time staff member.', source: R + 'B522437676/' },
      ],
      japanese_sources_summary: '食べログ: 寿司、中京区御幸町通御池上る亀屋町384、市役所前駅のすぐ近く、月・火・木〜日 18:00〜22:30、2部制 (18:00・20:30)、水曜休み (事前相談で可)、予約は TableCheck「Kyoto Sushi Ryuka - 鮨 流嘉」から、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・電子マネー・QR 可、11席 (カウンター7、4名の個室1)。口コミ (2025年6月〜2026年9月、英語): 2025年夏の開店、赤酢のシャリ、厚く贅沢なネタ、天然のまぐろ、あぶらぼうずなど珍しい季節の魚、おまかせ流嘉コース20,000円 (税込)、燻製の肉・キャビア・トリュフをのせた握り、金を使った内装、楽しい料理人、新しいアルバイトの接客が不慣れだったとの声 (2026年1月)、組み合わせがいまひとつとの声 (2026年3月)。',
      confidence: 'medium', sources: [TB, R + 'B509453057/', R + 'B509942369/', R + 'B511187915/', R + 'B515444902/', R + 'B522437676/', R + 'B523976351/', R + 'B525774921/', R + 'B534394119/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on TableCheck; two seatings; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町通御池上る亀屋町384',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.011440, 135.766285); cross-checked: GSI 京都府京都市中京区亀屋町384番地 (lot) 6 m; nearest existing record 7.5 m (kyoto_la_masa_spanish, 380); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515444902/'],
    price_note: 'Price from a September 2025 review, tax included.', last_checked: TODAY, items: [
      it('', '', 'Omakase Ryuka course', '¥20,000', 'Courses', 'ask', 'no', 'September 2025.', 'omakase'),
    ] }, {
    cuisine: '赤酢のシャリのカウンターのおまかせ寿司、初めてでも入りやすい (食べログ、2025〜2026年の口コミ)・おまかせ流嘉コース20,000円 (税込) (2025年9月)・天然のまぐろや、あぶらぼうずなど珍しい季節の魚の厚く贅沢なネタ、一品料理、燻製の肉・キャビア・トリュフをのせた煙の演出の握り (2025年7月〜2026年2月)・20,000〜30,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '御幸町、御池の北',
    gf_detail: '要確認。赤酢のシャリの寿司に醤油、火を通した一品料理。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司のおまかせ (2025〜2026年の口コミ)。',
    notes: '[寿司・御幸町御池、11席] 市役所近くの新しく華やかな寿司のカウンター。20,000円のおまかせで、赤酢のシャリに厚く切ったネタ、季節の珍しい魚、キャビアやトリュフをのせた演出の握り。毎晩2部制、予約は TableCheck で。2026年には接客や組み合わせがまだ粗いという声も。',
  });
}

// ================================================================ 海鮮ときどきブタ Kaisen Tokidoki Buta
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033989/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_kaisen_tokidoki_buta', name: '海鮮ときどきブタ (Kaisen Tokidoki Buta)', category: 'OMNI',
    lat: 35.00101666787191, lng: 135.75932574032248, cuisine_type: 'donburi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Raw-fish bowls may suit, but the marinated salmon and tuna sauces, soy and sauce katsu are not wheat-free; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood bowls, sauce katsu and pork miso soup (Tabelog; 2026 reviews).',
    hours_raw: 'Daily 11:00–21:00 (last order 20:30), closing early when sold out (Tabelog). Reservations through Tabelog only, not by phone; a seat-only booking costs ¥200 unless you order a drink (Tabelog original 席だけ予約の場合のみ200円). Cash only — no cards, e-money or QR (Tabelog). 27 seats: 7 at the counter and tables for 2 and 4 (Tabelog). Take-away available (Tabelog). Daihachi Hase building B1F on Karasuma below Bukkoji; a few minutes from Shijo Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma-Bukkoji, basement',
    cuisine: 'Build-your-own seafood bowls from about 28 toppings, from ¥900 (Tabelog) · bluefin tuna, marinated salmon, negitoro or toro-taku, sea bream, shrimp, shirasu, ikura and egg yolk to add; a Korean-style bowl of tuna, squid, avocado and seaweed; Fukui-style sauce katsu; sea bream ara-jiru or tonjiru (Tabelog; January–August 2026) · weekday "Service C" bowl ¥980 until 14:00; a social-media-only all-you-can-pile marinated salmon bowl ¥2,200, 5 a day by reservation (January–August 2026) · about ¥1,000–2,500 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('海鮮ときどきブタ 烏丸'), menu_url: null,
    notes: '[Seafood bowls · Karasuma-Bukkoji, basement, cash only] A casual basement bowl shop near Shijo-Karasuma where you build a kaisen-don from some 28 toppings — tuna, marinated salmon, negitoro, ikura — from ¥900, or try the Fukui sauce katsu; a cheap weekday set until 2 p.m. Solo-friendly. Some found the fish ordinary for the price.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a seafood-bowl and set-meal shop in a basement near Shijo-Karasuma offering customisable bowls of seasonal fish, bluefin tuna and salmon, and Fukui-style sauce katsu, with friendly staff (2026 reviews).',
      philosophy: null, specialty: 'Marinated salmon bowl.',
      anecdotes: [
        { text: 'A January 2026 salmon lover booked the social-media-only bowl, ¥2,200 and five a day, and piled on marinated salmon until saying stop.', source: R + 'B522291491/' },
        { text: 'A March 2026 diner arriving just before closing was kindly served a cheap and delicious toro-taku bowl.', source: R + 'B524964215/' },
        { text: 'An April 2026 visitor found the tuna fishy and the bowl no better than a chain\'s.', source: R + 'B526235880/' },
      ],
      japanese_sources_summary: '食べログ: 海鮮丼・食堂・海鮮、下京区烏丸通仏光寺下ル大政所町680-1 第八長谷ビル B1F、毎日 11:00〜21:00 (L.O.20:30)、売り切れ次第終了、予約は食べログのみで電話不可、席だけの予約は200円 (ドリンク注文で不要)、カード・電子マネー・QR 不可、27席 (カウンター7、テーブル)、テイクアウト可、約28種から選ぶ海鮮丼900円から、本まぐろ、鮭、福井のソースかつ、鯛のあら汁、豚汁。口コミ (2026年1月〜8月、英語): 平日14時までのサービス丼980円、SNS 限定・予約制で1日5食の漬けサーモンのせ放題2,200円、ねぎとろ・とろたく、鯛、海老、しらす、いくらや卵黄の追加、まぐろ・いか・アボカド・海苔の韓国風の丼、一人でも入りやすい、値段のわりに普通・まぐろが生臭いとの声 (2026年1・4月)。',
      confidence: 'medium', sources: [TB, R + 'B425919558/', R + 'B520790780/', R + 'B521200254/', R + 'B521873174/', R + 'B522291491/', R + 'B524462260/', R + 'B524964215/', R + 'B526235880/', R + 'B531109214/', R + 'B534584024/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; book via Tabelog only; solo-friendly.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通仏光寺下ル大政所町680-1 第八長谷ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.001017, 135.759326); cross-checked: GSI 京都府京都市下京区大政所町680番地 (lot) 33 m; nearest existing record 30.2 m (kyoto_katsuda_katsuzanmai); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B425919558/', R + 'B522291491/', TB],
    price_note: 'Prices from January and August 2026 reviews and Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Weekday "Service C" bowl with miso soup', '¥980', 'Bowls', 'ask', 'no', 'August 2026; until 14:00.', 'service_c'),
      it('', '', 'Marinated salmon bowl, all you can pile (5 a day)', '¥2,200', 'Bowls', 'no', 'no', 'January 2026; by reservation via social media.', 'salmon'),
      it('', '', 'Seafood bowl, from', '¥900', 'Bowls', 'ask', 'no', 'Tabelog.', 'from'),
    ] }, {
    cuisine: '約28種のネタから選ぶ自分好みの海鮮丼、900円から (食べログ)・本まぐろ、漬けサーモン、ねぎとろ・とろたく、鯛、海老、しらす、いくらや卵黄の追加、まぐろ・いか・アボカド・海苔の韓国風の丼、福井のソースかつ、鯛のあら汁や豚汁 (食べログ、2026年1〜8月)・平日14時までの「Service C」980円、SNS 限定の漬けサーモンのせ放題2,200円 (1日5食、予約制) (2026年1〜8月)・1,000〜2,500円ほど (食べログ、2026年の口コミ)',
    neighborhood: '烏丸仏光寺、地下',
    gf_detail: '要確認。生の魚の丼は合う可能性があるが、漬けのたれ、醤油、ソースかつは小麦なしではない。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。海鮮丼、ソースかつ、豚汁 (食べログ、2026年の口コミ)。',
    notes: '[海鮮丼・烏丸仏光寺の地下、現金のみ] 四条烏丸近くの気軽な地下の丼の店。まぐろ、漬けサーモン、ねぎとろ、いくらなど約28種から選ぶ海鮮丼が900円から、福井のソースかつも。平日14時までは安い丼も。一人でも入りやすい。値段のわりに普通という声も。',
  });
}

// ================================================================ 龍馬 三条烏丸 Ryoma
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26030443/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '27:00']);
  put({
    id: 'kyoto_ryoma_sanjo_karasuma', name: '龍馬 三条烏丸 (Ryoma)', category: 'OMNI',
    lat: 35.008569411135426, lng: 135.7608251640525, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: fried dishes and soy-based simmered fish (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and chicken izakaya (2024–2026 reviews).',
    hours_raw: 'Monday–Saturday 18:00–3:00 (last orders food 2:00, drinks 2:30); closed Sunday (Tabelog). Reservations accepted; banquet courses (Tabelog). The appetiser is grilled at the table on a small charcoal grill and was thought pricey (September 2024; August 2026). Cards; no e-money (Tabelog). 70 seats with a counter and a sunken-kotatsu room for 14 (Tabelog). Non-smoking since April 2020 (Tabelog). No phone signal in the basement (November 2024). Sanjo COHJU building B1F, Sanjo east of Karasuma, near the Museum of Kyoto (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo-Karasuma, basement',
    cuisine: 'Late-night seafood izakaya with fish delivered daily and a long menu (Tabelog; 2024–2026 reviews) · an appetiser of dried fish such as flying-fish fins, sardines or shrimp grilled on a shichirin; sashimi of fish rare in Kyoto, simmered aburabozu, charcoal-grilled black chicken, grilled items and hot pots (June 2024–September 2026) · about ¥4,000–8,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('龍馬 三条烏丸'), menu_url: null,
    notes: '[Seafood izakaya · Sanjo-Karasuma basement, till 3 a.m.] A big, busy basement izakaya open until 3 a.m., with fish from around Japan, charcoal-grilled chicken and an appetiser you grill yourself on a shichirin. Popular with students and office workers; non-smoking. The appetiser charge is on the high side. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a 70-seat seafood izakaya near Sanjo-Karasuma open until 3 a.m. with seasonal seafood delivered daily and banquet courses (2024–2026 reviews).',
      philosophy: 'Seasonal seafood delivered daily (Tabelog).', specialty: 'Shichirin-grilled appetiser; sashimi.',
      anecdotes: [
        { text: 'A June 2026 diner found fish here that are rarely seen in Kyoto, at fair prices.', source: R + 'B530156656/' },
        { text: 'A November 2025 group, finding the Oike bars closing early, came here for a second round and grilled the appetiser on the shichirin.', source: R + 'B517247490/' },
        { text: 'An August 2026 regular enjoyed the charcoal-grilled black chicken but felt the once-rare sashimi had become ordinary.', source: R + 'B534751328/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・鍋、中京区三条通烏丸東入ル梅忠町24 三条COHJUビル B1F、京都文化博物館の近く、月〜土 18:00〜翌3:00 (L.O.料理2:00、飲み物2:30)、日曜休み、予約可、宴会コース、カード可、電子マネー不可、70席、14名の掘りごたつの個室、2020年4月から店内禁煙。口コミ (2024年6月〜2026年9月、英語): 七輪で焼く先付 (とびうおのひれ、いわし、海老など)、京都では珍しい魚の刺身、あぶらぼうずの煮付け、黒鶏の炭火焼き、焼き物、鍋、メニューが豊富、学生から会社員まで、お通しがやや高いとの声、地下で電波がない (2024年11月)、刺身が普通になったとの声 (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B487162422/', R + 'B495191683/', R + 'B495523000/', R + 'B517247490/', R + 'B519018776/', R + 'B521822563/', R + 'B530156656/', R + 'B534751328/', R + 'B534752023/', R + 'B535282199/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late night; non-smoking; appetiser charged; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通烏丸東入ル梅忠町24 三条COHJUビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.008569, 135.760825); cross-checked: GSI 京都府京都市中京区梅忠町24番地 (lot) 49 m; nearest existing record 21.8 m (kyoto_maison_de_frouge); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534752023/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Shichirin-grilled appetiser', '', 'Appetiser', 'ask', 'no', 'August 2026; charged.', 'otoshi'),
      it('', '', 'Charcoal-grilled black chicken', '', 'Grill', 'ask', 'no', 'August 2026.', 'chicken'),
    ] }, {
    cuisine: '毎日届く魚と品数の多い深夜までの海鮮居酒屋 (食べログ、2024〜2026年の口コミ)・七輪で焼くとびうおのひれ、いわし、海老などの先付、京都では珍しい魚の刺身、あぶらぼうずの煮付け、黒鶏の炭火焼き、焼き物、鍋 (2024年6月〜2026年9月)・4,000〜8,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '三条烏丸、地下',
    gf_detail: 'グルテンフリー不可。揚げ物と醤油の煮魚 (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介と鶏の居酒屋 (2024〜2026年の口コミ)。',
    notes: '[海鮮居酒屋・三条烏丸の地下、深夜3時まで] 深夜3時まで開く大きくにぎやかな地下の居酒屋。全国の魚、炭火の鶏、自分で七輪で焼く先付。学生や会社員に人気、禁煙。お通しはやや高め。日曜休み。',
  });
}

// ================================================================ 鳥久 Torikyu
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004469/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_torikyu_maruyama', name: '鳥久 (Torikyu)', category: 'OMNI',
    lat: 35.004930977875716, lng: 135.7790940903482, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mizutaki chicken broth may suit, but it is served with ponzu, and kaiseki and sukiyaki use soy; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken mizutaki, beef and fish (2024–2026 reviews).',
    hours_raw: 'Daily 11:00–22:00 (last orders food 20:30, drinks 21:00); closing days irregular (Tabelog). Reservations accepted (Tabelog). No charge for appetisers (Tabelog original お通し代なし). Cash only — no cards, e-money or QR; ask about payment for banquets (Tabelog). 200 tatami seats; private rooms for 2 to over 30 (Tabelog). A designated smoking area (Tabelog). In the north woods of Maruyama Park, next to Yasaka Shrine; about 15 min by car from Kyoto Stn (Tabelog; February 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Maruyama Park, by Yasaka Shrine',
    cuisine: 'Kyoto kaiseki and hot-pot house of more than a century in Maruyama Park (Tabelog) · mizutaki of Nagoya Cochin chicken in a rich broth with homemade ponzu, finished as rice porridge, e.g. Wakadori mizutaki ¥6,600 (February 2024–October 2026) · Yasaka gozen with oboro tofu, hamo and red miso soup; yudofu kaiseki; wagyu steak gozen; summer sukiyaki (May 2024–August 2026) · lunch about ¥3,000–5,000, dinner about ¥5,000–8,000 (Tabelog)',
    website: null, gmaps: gm('鳥久 円山公園'), menu_url: null,
    notes: '[Mizutaki and kaiseki · Maruyama Park] A ryokan-like house in Maruyama Park, said to date from 1896, serving Nagoya Cochin chicken mizutaki in private tatami rooms — rich broth, homemade ponzu, porridge to finish — plus yudofu and seasonal Kyoto gozen. Kind, attentive staff. Cash only.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a renowned restaurant of over 100 years in Maruyama Park, serving seasonal Kyoto kaiseki and hot pots such as mizutaki. A November 2024 reviewer gives its founding as 1896.',
      philosophy: 'Seasonal Kyoto kaiseki and traditional hot pots (Tabelog).', specialty: 'Nagoya Cochin mizutaki.',
      anecdotes: [
        { text: 'A March 2024 former university club member came back for a farewell party, as the club always had, and the staff kept out of the room during speeches.', source: R + 'B482485787/' },
        { text: 'A May 2024 visitor\'s mother felt cold and the staff promptly brought a lap blanket.', source: R + 'B484748805/' },
        { text: 'An October 2026 birthday party had the Wakadori mizutaki at ¥6,600 and a complimentary agedashi tofu.', source: R + 'B538243115/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・鍋、東山区円山公園北林、毎日 11:00〜22:00 (L.O.料理20:30、飲み物21:00)、不定休、予約可、お通し代なし、カード・電子マネー・QR 不可、宴会の支払いは相談、200席 (座敷)、個室 (2名〜30名以上)、分煙、創業100年以上の老舗、円山公園で季節の京懐石と水炊きなどの鍋。口コミ (2024年2月〜2026年10月、英語): 八坂神社の隣、旅館のような雰囲気、名古屋コーチンの水炊きと自家製ポン酢、締めのおかゆ、若鶏の水炊き6,600円 (2026年10月)、1896年創業との声 (2024年11月)、Yasaka 御膳 (おぼろ豆腐、鱧、赤だし)、湯豆腐の会席、和牛ステーキの御膳、夏のすき焼き、ていねいな接客。',
      confidence: 'medium', sources: [TB, R + 'B480011445/', R + 'B482485787/', R + 'B484748805/', R + 'B486046777/', R + 'B495418748/', R + 'B519512600/', R + 'B524268458/', R + 'B532247019/', R + 'B533850212/', R + 'B538243115/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; private tatami rooms; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区円山公園北林',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004931, 135.779094); the address (円山公園北林) has no town or lot and GSI finds no match, so the Tabelog pin is kept; nearest existing record 69.3 m (kyoto_gion_maruyama_kagaribi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538243115/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Wakadori mizutaki', '¥6,600', 'Hot pot', 'ask', 'no', 'October 2026.', 'mizutaki'),
    ] }, {
    cuisine: '円山公園の100年以上続く京懐石と鍋の店 (食べログ)・名古屋コーチンの濃いスープの水炊きと自家製ポン酢、締めのおかゆ、若鶏の水炊き6,600円など (2024年2月〜2026年10月)・おぼろ豆腐・鱧・赤だしのYasaka 御膳、湯豆腐の会席、和牛ステーキの御膳、夏のすき焼き (2024年5月〜2026年8月)・昼3,000〜5,000円ほど、夜5,000〜8,000円ほど (食べログ)',
    neighborhood: '円山公園、八坂神社のそば',
    gf_detail: '要確認。水炊きの鶏のスープは合う可能性があるがポン酢を添え、会席やすき焼きは醤油を使う。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の水炊き、牛肉、魚 (2024〜2026年の口コミ)。',
    notes: '[水炊きと会席・円山公園] 1896年創業ともいわれる、円山公園の旅館のような店。個室の座敷で名古屋コーチンの水炊き (濃いスープ、自家製ポン酢、締めのおかゆ)、湯豆腐や季節の京の御膳も。ていねいな接客。現金のみ。',
  });
}

save();
