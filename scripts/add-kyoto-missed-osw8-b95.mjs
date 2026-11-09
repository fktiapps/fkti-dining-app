// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 95 (2026-11-08).
//   + ゴジョーコーヒー ファクトリー Gojo Coffee Factory (roastery café by Umamachi, Shibutani-dori; rest)
//   + 串揚げと煮込み 裏スタンド Kushiage to Nikomi Ura Stand (creative kushiage and dote-ni, Kawaramachi-Ebisugawa; rest)
//   + スミヤ ピン SUMIYA PINN (charcoal grill and wine bar, Shinmachi-Oike; rest)
//   + ぐりる 金星 Grill Kinsei (long-running omakase French kaiseki, moved from Gion to Okazaki; rest)
//   + 西村衛生ボーロ本舗 Nishimura Eisei Boro Honpo (boro maker founded 1893, Ainomachi-Nijo; takeaway only; rest — drafted
//     under Greg's 11-08 ruling that particularly historic take-home shops qualify on a sourced founding date)
//   Rest list (mod 6 = 1) after batch 94, nearest-first — skipped:
//   - 伊藤久右衛門 清水坂店 26039161: chain — 伊藤久右衛門 lists 12 shops (itohkyuemon.co.jp/corporate/shop, 2026-11-08).
//   Brand check: queue-status.jsonl, than.co.jp/brands and the WILL brands checked — none matches. SUMIYA PINN is a sister of
//   Sake Park Pinn (May 2026 review), not in data. None of the five is in data (main 51fcb398, hidden records included).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-95');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26039161/', 'chain: 伊藤久右衛門 — 12 shops listed on itohkyuemon.co.jp/corporate/shop (2026-11-08)');

// ================================================================ ゴジョーコーヒー ファクトリー Gojo Coffee Factory
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26032717/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.gojocoffeefactory.com/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_gojo_coffee_factory', name: 'ゴジョーコーヒー ファクトリー (Gojo Coffee Factory)', category: 'OMNI',
    lat: 34.99267951788226, lng: 135.77523163022715, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF for food: toast, sandwiches, taiyaki, French toast and gâteau; coffee itself is fine (2022–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Black coffee is plant-based; food includes egg, cheese and meat; no plant milk mentioned (2022–2025 reviews).',
    hours_raw: 'Thursday–Tuesday 9:00–18:00; closed Wednesday; hours may change (Tabelog). Order and pay at the counter by the entrance first, then sit (October 2024; May 2025). Reservations accepted (Tabelog). No cards or e-money; QR accepted (Tabelog). Non-smoking; free Wi-Fi (Tabelog). A coffee roaster on site (June 2024). Just off Higashioji on Shibutani-dori, 2 min from the Umamachi bus stop (Tabelog; November 2025). Opened 23 November 2018 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umamachi, Shibutani-dori',
    cuisine: 'Roastery café with house-roasted coffee, morning sets and light meals (2022–2025 reviews) · Benkei Blend dark roast ¥400; cappuccino (April 2022; December 2025) · morning set of toast, salad, fried egg, coffee and apple (May 2023; October 2024) · spicy curry, cheese hamburg sandwich, French toast (April 2022–May 2025) · taiyaki made to order; gâteau chocolat ¥500 (June 2024; December 2025) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('Gojo Coffee Factory'), menu_url: null,
    notes: '[Coffee · Shibutani-dori near Gojozaka] A stylish, quiet roastery café: fresh-roasted coffee such as the dark Benkei Blend, good-value morning sets, curry and sandwiches, and hot taiyaki made to order. Order at the counter first. No cards (QR OK). Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Roaster and staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a café opened 23 November 2018 with a roasting machine on site, serving house-roasted coffee with breakfast sets, curries, sandwiches and freshly made taiyaki (2022–2025 reviews).',
      philosophy: null, specialty: 'House-roasted coffee; taiyaki.',
      anecdotes: [
        { text: 'A June 2024 visitor recommended the taiyaki, made to order and served hot, alongside freshly roasted coffee.', source: R + 'B486526003/' },
        { text: 'A May 2023 guest who came for lunch curry found a morning set of toast, salad, fried egg, coffee and an apple instead — a great deal.', source: R + 'B465163179/' },
        { text: 'A December 2025 coffee break paired the dark Benkei Blend with a gâteau chocolat.', source: R + 'B519822698/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、東山区常盤町459-13、市バス「馬町」から徒歩2分、清水五条駅から徒歩10分ほど、木〜火 9:00〜18:00、水曜休み、予約可、カード・電子マネー不可、QR 可、禁煙、Wi-Fi、2018年11月23日開店、公式サイトあり。口コミ (2022年4月〜2025年12月、英語): 店内に焙煎機、先に入口のレジで注文と支払い、Benkei ブレンド (深煎り) 400円、カプチーノ、トースト・サラダ・目玉焼き・コーヒー・りんごのモーニング、辛口のカレー、チーズハンバーグサンド、フレンチトースト、注文後に焼くたい焼き、ガトーショコラ500円、静かで落ち着いた店内。',
      confidence: 'medium', sources: [TB, WEB, R + 'B448188836/', R + 'B465163179/', R + 'B466871622/', R + 'B486135801/', R + 'B486526003/', R + 'B493800627/', R + 'B495403737/', R + 'B495718010/', R + 'B510843795/', R + 'B519822698/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter first; QR payments; no cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区常盤町459-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through December 2025.' },
    pin_source: `Tabelog ${TB} (34.992680, 135.775232); cross-checked: GSI 京都府京都市東山区常盤町459番地 (lot) 36 m; nearest existing record 54.5 m (kyoto_private_kitchen_sumiyoshi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519822698/'],
    price_note: 'Prices from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Benkei Blend (dark roast)', '¥400', 'Coffee', 'ask', 'vegan', 'December 2025.', 'benkei'),
      it('', '', 'Gâteau chocolat', '¥500', 'Sweets', 'no', 'no', 'December 2025.', 'gateau'),
    ] }, {
    cuisine: '自家焙煎のコーヒー、モーニング、軽食のカフェ (2022〜2025年の口コミ)・深煎りのBenkei ブレンド400円、カプチーノ (2022年4月、2025年12月)・トースト・サラダ・目玉焼き・コーヒー・りんごのモーニング (2023年5月、2024年10月)・辛口のカレー、チーズハンバーグサンド、フレンチトースト (2022年4月〜2025年5月)・注文後に焼くたい焼き、ガトーショコラ500円 (2024年6月、2025年12月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '馬町、渋谷通',
    gf_detail: '料理はグルテンフリー不可。トースト、サンド、たい焼き、フレンチトースト、ガトー。コーヒーは問題なし (2022〜2025年の口コミ)。',
    vegan_detail: '要確認。ブラックコーヒーは植物性、料理は卵、チーズ、肉。植物性ミルクの記載はない (2022〜2025年の口コミ)。',
    notes: '[コーヒー・五条坂の近くの渋谷通] 静かでしゃれた焙煎所のカフェ。深煎りのBenkei ブレンドなど焙煎したてのコーヒー、お得なモーニング、カレーやサンド、注文後に焼く熱々のたい焼き。先にレジで注文。カード不可 (QR 可)。水曜休み。',
  });
}

// ================================================================ 串揚げと煮込み 裏スタンド Ura Stand
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034853/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_ura_stand_kushiage', name: '串揚げと煮込み 裏スタンド (Kushiage to Nikomi Ura Stand)', category: 'OMNI',
    lat: 35.01561657786557, lng: 135.7685547504635, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: breaded kushiage, and dote-ni in a miso-soy sauce (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-tendon dote-ni, duck, shrimp and meat skewers (2025–2026 reviews).',
    hours_raw: 'Daily including holidays 17:00–23:00 (last orders food 22:00, drinks 22:30); closing days not fixed; hours may change (Tabelog). Reservations accepted; book ahead at weekends (Tabelog; October 2026). Cash only (Tabelog original 現金決済のみ). Counter and spacious seating; non-smoking (Tabelog). Skewers are served one piece each, so order enough for the table (November 2025). 5 min walk from Kyoto Shiyakusho-mae Stn. Opened 8 October 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Ebisugawa',
    cuisine: 'Stylish kushiage and nikomi bar with creative skewers and natural wine (2025–2026 reviews) · signature dote-ni platter of daikon, konnyaku, atsuage, beef tendon and egg with shichimi and yuzu (November 2025–May 2026) · light, crisp kushiage such as eggplant and big shrimp with a pickle tartare; asparagus wrapped in meat; duck (January–July 2026) · potato salad and creative small plates (January–May 2026) · about ¥2,000–5,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('串揚げと煮込み 裏スタンド'), menu_url: null,
    notes: '[Kushiage and dote-ni · Kawaramachi-Ebisugawa, cash only] A design-minded little bar for creative kushiage — eggplant, big shrimp with pickle tartare — and a yuzu-scented dote-ni platter, with natural wine and a friendly owner. Book at weekends. Cash only.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog and reviewers: a kushiage and stew bar opened 8 October 2020, with carefully chosen plates and chairs, warm service and a friendly owner (2025–2026 reviews).',
      philosophy: null, specialty: 'Dote-ni platter; creative kushiage.',
      anecdotes: [
        { text: 'A November 2025 diner expecting an oden stand found a stylish kushikatsu bar serving dote-ni instead.', source: R + 'B517487399/' },
        { text: 'A December 2025 solo diner was told any time between 5 and 7 p.m. was fine for a weekday booking.', source: R + 'B519055107/' },
        { text: 'An October 2026 regular calls it a favourite Kyoto izakaya for warm service that fills the heart as well as the stomach.', source: R + 'B515692719/' },
      ],
      japanese_sources_summary: '食べログ: 串揚げ・おでん、中京区西革堂町190-1、市役所前駅から徒歩5分、毎日 (祝日も) 17:00〜23:00 (L.O.料理22:00、飲み物22:30)、不定休、予約可、現金決済のみ、禁煙、2020年10月8日開店。口コミ (2025年10月〜2026年10月、英語): 器や椅子にこだわったおしゃれな店、名物のどて煮の盛り合わせ (大根、こんにゃく、厚揚げ、牛すじ、卵、七味と柚子)、なすの串カツ、大えびとピクルスのタルタル、アスパラの肉巻き、鴨、ポテトサラダ、自然派ワイン、串は1本ずつ、気さくな店主、週末は予約を。',
      confidence: 'medium', sources: [TB, R + 'B515692719/', R + 'B517182079/', R + 'B517487399/', R + 'B519055107/', R + 'B520383890/', R + 'B520998829/', R + 'B527736847/', R + 'B530294435/', R + 'B530730263/', R + 'B531566400/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; book at weekends.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区西革堂町190-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.015617, 135.768555); cross-checked: GSI 京都府京都市中京区西革堂町190番地 (lot) 49 m; nearest existing record 28.3 m (kyoto_nikumon_kawaramachi); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527736847/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Dote-ni platter (5 kinds)', '', 'Nikomi', 'no', 'no', 'May 2026.', 'doteni'),
      it('', '', 'Big shrimp kushiage with pickle tartare', '', 'Kushiage', 'no', 'no', 'May 2026.', 'ebi'),
    ] }, {
    cuisine: '創作の串揚げと煮込み、自然派ワインのおしゃれな店 (2025〜2026年の口コミ)・名物のどて煮の盛り合わせ (大根、こんにゃく、厚揚げ、牛すじ、卵、七味と柚子) (2025年11月〜2026年5月)・軽くサクッとした串揚げ (なす、ピクルスのタルタルの大えび)、アスパラの肉巻き、鴨 (2026年1〜7月)・ポテトサラダや工夫の小皿 (2026年1〜5月)・2,000〜5,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '河原町夷川',
    gf_detail: 'グルテンフリー不可。衣の串揚げ、味噌と醤油のどて煮 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛すじのどて煮、鴨、えびや肉の串 (2025〜2026年の口コミ)。',
    notes: '[串揚げとどて煮・河原町夷川、現金のみ] こだわりの器の小さな店。なすや大えびのピクルスタルタルなど創作の串揚げに柚子香るどて煮の盛り合わせ、自然派ワイン、気さくな店主。週末は予約を。現金のみ。',
  });
}

// ================================================================ スミヤ ピン SUMIYA PINN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26026987/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_sumiya_pinn', name: 'スミヤ ピン (SUMIYA PINN)', category: 'OMNI',
    lat: 35.010347147865126, lng: 135.7566523304186, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled meats and marinated sardines may suit, but pasta, pâté toasts and sauces involve wheat (2026 reviews). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled meats, fish, prosciutto and cheese (2026 reviews).',
    hours_raw: 'Tuesday–Saturday 17:00–24:00 (last order 23:00); closed Monday; Sunday not stated, so left out; hours may change (Tabelog). Reservations advised — often fully booked (Tabelog; February–July 2026). No service or cover charge (Tabelog original サービス料、チャージなし). Cards (VISA, Master, JCB, AMEX, Diners) and QR (PayPay, Rakuten Pay, au PAY); no e-money (Tabelog). 25 seats, mainly counter, with two semi-private spots for solo diners; non-smoking; sports screenings (Tabelog; March 2026). MsOIKE 1F; 3 min walk from Karasuma-Oike Stn. Opened 10 December 2015 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi-Oike',
    cuisine: 'Lively Italian-leaning bar of charcoal-grilled meats, vegetables and wine, sister to Sake Park Pinn (2026 reviews) · popular assorted appetisers of fresh vegetables (February–July 2026) · satoimo and blue-cheese potato salad; Spanish-style marinated sardines; mushroom pâté; prosciutto; carbonara and other pastas (March–July 2026) · a wide wine list (April 2026) · about ¥4,000–6,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('SUMIYA PINN 新町御池'), menu_url: TB + 'dtlmenu/',
    notes: '[Charcoal grill and wine · Shinmachi-Oike] A buzzing, counter-led bar of charcoal-grilled meat and vegetables, a famous appetiser platter, satoimo-blue-cheese potato salad and good pasta, with plenty of wine and a friendly owner. No service charge. Book.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog and reviewers: a charcoal-grill bar opened 10 December 2015 near Karasuma-Oike, a sister of Sake Park Pinn (May 2026), always busy and run by a friendly owner (February 2026).',
      philosophy: null, specialty: 'Assorted appetisers; charcoal grill.',
      anecdotes: [
        { text: 'A March 2026 pair liked the two tucked-away seats meant for solo diners and the rich satoimo-blue-cheese potato salad.', source: R + 'B524447449/' },
        { text: 'A May 2026 fan of Sake Park Pinn discovered this sister shop and its charcoal-grill menu.', source: R + 'B529283801/' },
        { text: 'An April 2026 diner found some snacks salty but the pasta excellent.', source: R + 'B528065933/' },
      ],
      japanese_sources_summary: '食べログ: 鶏料理・肉料理・焼き鳥、中京区新町通御池下ル新明町74-5 MsOIKE 1F、烏丸御池駅から徒歩3分、火〜土 17:00〜24:00 (L.O.23:00)、月曜休み、予約可、サービス料、チャージなし、カード (VISA・Master・JCB・AMEX・Diners)・QR (PayPay・楽天ペイ・au PAY) 可、電子マネー不可、25席、禁煙、スポーツ観戦、2015年12月10日開店。口コミ (2026年2〜7月、英語): Sake Park Pinn の姉妹店、いつも満席のにぎやかな店、前菜の盛り合わせ、炭火焼、里芋とブルーチーズのポテトサラダ、スペイン風のいわしのマリネ、きのこのパテ、生ハム、カルボナーラ、パスタ、ワインが豊富、一人向けの席が2つ、気さくな店主。',
      confidence: 'medium', sources: [TB, R + 'B522601802/', R + 'B523013007/', R + 'B524244414/', R + 'B524447449/', R + 'B525030071/', R + 'B525357655/', R + 'B528065933/', R + 'B529283801/', R + 'B532279664/', R + 'B533105472/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; no service charge; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区新町通御池下ル新明町74-5 MsOIKE 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.010347, 135.756652); Tabelog writes 新明町, which GSI does not know; GSI 京都府京都市中京区神明町74番地 (lot) is 9.9 m away and the neighbour kyoto_kyoryori_fujimoto is at 神明町72 — the address is kept as Tabelog gives it; nearest existing record 12.5 m (kyoto_kyoryori_fujimoto); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524447449/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Assorted appetisers', '', 'Starters', 'ask', 'ask', 'February 2026.', 'antipasti'),
      it('', '', 'Satoimo and blue-cheese potato salad', '', 'Starters', 'ask', 'no', 'March 2026.', 'potesara'),
    ] }, {
    cuisine: 'Sake Park Pinn の姉妹店、炭火焼の肉や野菜とワインのにぎやかなイタリアン寄りのバル (2026年の口コミ)・人気の新鮮な野菜の前菜の盛り合わせ (2026年2〜7月)・里芋とブルーチーズのポテトサラダ、スペイン風のいわしのマリネ、きのこのパテ、生ハム、カルボナーラなどのパスタ (2026年3〜7月)・豊富なワイン (2026年4月)・4,000〜6,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '新町御池',
    gf_detail: '要確認。炭火焼の肉やいわしのマリネは合う可能性があるが、パスタ、パテのトースト、ソースは小麦 (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。炭火焼の肉、魚、生ハム、チーズ (2026年の口コミ)。',
    notes: '[炭火焼とワイン・新町御池] カウンター中心のにぎやかなバル。炭火焼の肉と野菜、名物の前菜の盛り合わせ、里芋とブルーチーズのポテサラ、おいしいパスタにワインもたっぷり、気さくな店主。サービス料なし。予約を。',
  });
}

// ================================================================ ぐりる 金星 Grill Kinsei
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001391/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_grill_kinsei_okazaki', name: 'ぐりる 金星 (Grill Kinsei)', category: 'OMNI',
    lat: 35.01356156786966, lng: 135.77728359043664, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — tell the restaurant of allergies or foods you cannot eat a few days ahead (Tabelog). An omakase French kaiseki ending with a curry (2019–2026 reviews). No gluten information.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. Tabelog lists vegetarian options; the omakase centres on meat and fish (Tabelog; 2019–2026 reviews).',
    hours_raw: 'Thursday–Tuesday and holidays 12:00–14:30 (last order 13:30) and 17:00–23:00 (last order 21:30); closed Wednesday; lunch only for reservations made by the previous day (Tabelog). Tell the restaurant about allergies a few days ahead (Tabelog). Service charge 5% per group (Tabelog original 1組当たりサービス料5％). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 16 seats: 8 at the counter, 8 at tables; non-smoking, smoking area outside; wheelchair accessible; take-out (Tabelog). Imperial Okazaki 1F, near Higashiyama-Nijo bus stop, 10–15 min walk from Sanjo Keihan or Higashiyama Stn (Tabelog). Moved here from Gion in 2019 (2019–2023 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Okazaki, Nijo-Higashioji',
    cuisine: 'Omakase French kaiseki — Western dishes served kaiseki-style and eaten with chopsticks, at a long-running Kyoto grill (2019–2026 reviews) · lunch course about ¥6,000 with a drink (March 2026); dinner about ¥15,000–20,000 (Tabelog; October 2026) · six appetisers to open the dinner course; a signature curry to finish; Royal Copenhagen tableware (March 2023; October 2026) · katsu sandwich to take away (July 2020) · vegetarian options (Tabelog)',
    website: null, gmaps: gm('ぐりる 金星 岡崎'), menu_url: null,
    notes: '[French kaiseki · Okazaki] A long-loved omakase grill that moved from Gion to Okazaki: course after course of French-leaning dishes eaten with chopsticks, from six appetisers to the famous closing curry, cooked by one chef. Lunch by booking the day before. 5% service. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Per reviewers: a pioneer of Kyoto’s omakase style, first at Shijo-Kiyamachi and then in Gion, reopening at Okazaki in 2019 (May–June 2019; March 2023); now cooked single-handed (August 2025) and loved by long-time regulars (December 2023; October 2026).',
      philosophy: null, specialty: 'French kaiseki; closing curry.',
      anecdotes: [
        { text: 'A May 2019 regular from the Shijo-Kiyamachi days came to the reopening at the new Okazaki address.', source: R + 'B414951036/' },
        { text: 'A March 2026 guest after the Kyocera Museum of Art called the ¥6,000 lunch with a drink an incredible value.', source: R + 'B524319457/' },
        { text: 'An August 2025 diner marvelled that one person could turn out such a range of dishes — at Gion-level prices.', source: R + 'B512598724/' },
      ],
      japanese_sources_summary: '食べログ: 創作料理・フレンチ・ステーキ、左京区仁王門通新高倉東入正往寺町462-2 インペリアル岡崎 1F、東山駅や三条京阪から徒歩10〜15分、木〜火・祝日 12:00〜14:30 (L.O.13:30)、17:00〜23:00 (L.O.21:30)、水曜休み、昼は前日までの予約のみ、アレルギーは数日前までに、1組当たりサービス料5％、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、16席 (テーブル8、カウンター8)、禁煙 (外に喫煙所)、車いす可、テイクアウト、ベジタリアンの選択肢あり。口コミ (2019年5月〜2026年10月、英語): おまかせの洋食懐石の草分け、四条木屋町から祇園を経て2019年に岡崎へ、箸で食べるフレンチ、前菜6種、しめのカレー、Royal Copenhagenの器、一人で調理 (2025年8月)、昼のコース6,000円 (1ドリンク付き、2026年3月)、カツサンドの持ち帰り、長年の常連。',
      confidence: 'medium', sources: [TB, R + 'B414951036/', R + 'B419730053/', R + 'B428627281/', R + 'B463762445/', R + 'B476858322/', R + 'B512598724/', R + 'B523927368/', R + 'B524319457/', R + 'B536665190/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book (lunch by the day before); tell allergies a few days ahead; 5% service.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks for allergies and foods you cannot eat a few days before the booking (Tabelog)'] },
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区仁王門通新高倉東入正往寺町462-2 インペリアル岡崎 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013562, 135.777284); cross-checked: GSI 京都府京都市左京区正往寺町462番地 (lot) 79 m; nearest existing record 9.1 m (kyoto_cha_to_koji_tsukiakari, same building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B524319457/'],
    price_note: 'Price from a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch course with one drink', '¥6,000', 'Lunch', 'ask', 'ask', 'March 2026; book by the day before.', 'lunch'),
    ] }, {
    cuisine: '箸で食べる洋食を懐石仕立てにした、長く続く京都のぐりるのおまかせのフレンチ懐石 (2019〜2026年の口コミ)・1ドリンク付きの昼のコース6,000円ほど (2026年3月)、夜15,000〜20,000円ほど (食べログ、2026年10月)・夜のコースの最初に前菜6種、しめの名物のカレー、Royal Copenhagenの器 (2023年3月、2026年10月)・持ち帰りのカツサンド (2020年7月)・ベジタリアンの選択肢 (食べログ)',
    neighborhood: '岡崎、二条東大路',
    gf_detail: '予約時に要確認。アレルギーや苦手な食材は数日前までに (食べログ)。しめにカレーの出るおまかせのフレンチ懐石 (2019〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: '予約時に要確認。食べログにベジタリアンの選択肢ありとあるが、おまかせは肉と魚が中心 (食べログ、2019〜2026年の口コミ)。',
    notes: '[フレンチ懐石・岡崎] 祇園から岡崎に移った長く愛されるおまかせのぐりる。前菜6種から名物のしめのカレーまで、箸でいただくフレンチ寄りのコースを料理人が一人で。昼は前日までに予約。サービス料5%。水曜休み。',
  });
}

// ================================================================ 西村衛生ボーロ本舗 Nishimura Eisei Boro Honpo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26011807/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://eiseiboro.com';
  const H = day(['10:00', '16:00']);
  put({
    id: 'kyoto_nishimura_eisei_boro', name: '西村衛生ボーロ本舗 (Nishimura Eisei Boro Honpo)', category: 'OMNI',
    lat: 35.014280327864256, lng: 135.7617586404548, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A 2016 reviewer says the boro is made with potato starch from Minami-Tokachi, Hokkaido, but the shop’s site lists no ingredients, so wheat or other allergens are unconfirmed.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Ingredients are not listed on the official site; boro biscuits often contain egg — not confirmed here.',
    hours_raw: 'TAKEAWAY ONLY — a boro biscuit shop with no seating. Monday–Friday 10:00–16:00; closed Saturday, Sunday and holidays (official site; Tabelog). Founded in Meiji 26 (1893) by 西村元吉 (official site); family succession not sourced. Suitable as a baby snack from about 7 months — have water ready (Tabelog). 1 min walk from Marutamachi Stn exit 7 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ainomachi-Nijo, Goshominami',
    cuisine: 'Takeaway-only maker of eisei boro — light, melt-in-the-mouth biscuits — on one site south of the Imperial Palace since 1893 (official site; 2016–2026 reviews) · the original boro, a ¥162 bag in 2016; vegetable boro and purple sweet-potato boro; seasonal gift packages such as a Christmas boot (2016–2026 reviews) · described as additive-free (May 2026) · under ¥1,000 (Tabelog)',
    website: WEB, gmaps: gm('西村衛生ボーロ本舗'), menu_url: null,
    notes: '[Takeaway only · boro biscuits since 1893, Ainomachi-Nijo] A tiny old shop south of the Imperial Palace that has made only eisei boro since 1893: light, gentle biscuits loved by babies and grandparents alike, in plain, vegetable and purple sweet-potato versions. Takeaway only. Weekdays only.',
    chef_bio: { chef_name: null, roles: ['Makers (unnamed)'], origin: null,
      background: 'Per the official site: founded in Meiji 26 (1893) by 西村元吉 south of the Kyoto Imperial Palace, devoted for more than 130 years to eisei boro alone, baked carefully every day from simple ingredients. Family succession is not stated in the sources.',
      philosophy: 'Simple ingredients, baked carefully every day (official site).', specialty: 'Eisei boro.',
      anecdotes: [
        { text: 'A May 2016 buyer recalled a TV advert with maiko, and bought the original boro made with Minami-Tokachi potato starch for ¥162.', source: R + 'B198805712/' },
        { text: 'An August 2024 parent says a toddler hunts the boro down wherever it is hidden at home.', source: R + 'B482717248/' },
        { text: 'A January 2025 visitor drawn in by a sign was puzzled to find no “fresh boro” on the shelves.', source: R + 'B500090847/' },
      ],
      japanese_sources_summary: '公式サイト: 「明治26年、創業者西村元吉の手によって、」、「京都御所南の地に生まれ130有余年。」、「衛生ボーロ一筋に歩んでまいりました。」、「シンプルな材料で毎日丹念に焼き上げております。」、営業 10:00〜16:00、土・日・祝日休み。食べログ: 和菓子、中京区間之町二条上ル夷町580、丸太町駅7番出口から徒歩1分ほど、月〜金 10:00〜16:00、テイクアウト、7か月ごろから赤ちゃんのおやつに (水を用意して)。口コミ (2016年5月〜2026年5月、英語): 北海道の Minami-Tokachi の片栗粉 (2016年)、元祖のボーロ162円 (2016年)、野菜のボーロ、紫芋のボーロ、季節の箱 (クリスマスのブーツなど)、無添加 (2026年5月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B198805712/', R + 'B437564565/', R + 'B475856049/', R + 'B482717248/', R + 'B500090847/', R + 'B522457526/', R + 'B528958145/'] },
    cultural_comfort: { level: 'none_needed', note: 'Takeaway only; weekdays 10:00–16:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区間之町二条上ル夷町580',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews through May 2026.' },
    pin_source: `Tabelog ${TB} (35.014280, 135.761759); cross-checked: GSI 京都府京都市中京区夷町580番地 (lot) 30 m; nearest existing record 32.3 m (kyoto_ludens); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B198805712/'],
    price_note: 'Price from a May 2016 review; likely changed.', last_checked: TODAY, items: [
      it('', '', 'Eisei boro (original)', '¥162', 'Takeaway', 'ask', 'ask', 'May 2016.', 'boro'),
    ] }, {
    cuisine: '1893年から京都御所の南で衛生ボーロだけを焼くテイクアウトの店 (公式サイト、2016〜2026年の口コミ)・元祖のボーロ (2016年に162円)、野菜のボーロ、紫芋のボーロ、クリスマスのブーツなど季節の箱 (2016〜2026年の口コミ)・無添加との声 (2026年5月)・1,000円未満 (食べログ)',
    neighborhood: '間之町二条、御所南',
    gf_detail: '要確認。2016年の口コミでは北海道の Minami-Tokachi の片栗粉を使うとあるが、公式サイトに原材料の記載はなく、小麦などのアレルゲンは未確認。',
    vegan_detail: '要確認。公式サイトに原材料の記載はない。ボーロは卵を使うことが多いが、ここでは未確認。',
    notes: '[テイクアウトのみ・1893年からのボーロ、間之町二条] 御所南で1893年から衛生ボーロ一筋の小さな老舗。赤ちゃんからお年寄りまで好まれるやさしいボーロを、元祖、野菜、紫芋で。持ち帰りのみ。平日のみ営業。',
  });
}

save();
