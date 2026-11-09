// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 84 (2026-11-08).
//   + 力餅食堂 Chikara Mochi Shokudo (Kiyomizu 5-chome, near Rokuharamitsuji; rest — a noren-wake family, drafted on its own
//     evidence per Greg's ruling)
//   + リストランテ ストラーダ STRADA (Italian at the Oike-Yanaginobamba corner since 2005; rest)
//   + 寿司処 京都 宙 Edomae Sushi Dokoro Kyoto Sora (ten-seat Edomae sushi, near Kyoto City Hall; rest)
//   + 京都 スエヒロガリ Kyoto Suehiro Gari (yakitori in Shinpukan, Karasuma-Oike; rest)
//   Rest list (mod 6 = 1) after batch 83, nearest-first — skipped:
//   - 牛カツ京都勝牛 四条烏丸SUINA室町店 26044429: chain — 京都勝牛 (same call as 26027478, 26024913).
//   - ITALIAN BAR NISHIKI CORNI 四条烏丸店 26045155: sub-brand of a large multi-brand group — 株式会社THAN lists 27 brands
//     (than.co.jp/brands, read 2026-11-08). Flag: THAN's list also includes 鉄板スタンド酒場 ぽくぽーく (drafted osw8-79,
//     kyoto_teppan_stand_pokupoku) and FULL MOON (kyoto_full_moon_kawaramachi).
//   Brand check: queue-status.jsonl grepped for 力餅食堂 (26011412 was skipped for thin evidence — a different shop), ストラーダ,
//   宙, スエヒロガリ. STRADA is unrelated to Pizza Strada (kyoto_pizza_strada_gion, a Tokyo pizzeria). None of the four is in data
//   (main 12de50d4, hidden records included) by name and address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-84');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26044429/', 'chain: 牛カツ京都勝牛 — eight or more shops; same call as 26027478 and 26024913');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26045155/', 'sub-brand of a large multi-brand group: 株式会社THAN lists 27 brands (than.co.jp/brands, 2026-11-08) — flagged, as THAN also runs ぽくぽーく (kyoto_teppan_stand_pokupoku) and FULL MOON (kyoto_full_moon_kawaramachi) already in data');

// ================================================================ 力餅食堂 Chikara Mochi Shokudo (Kiyomizu 5-chome)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019421/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_chikara_mochi_shokudo_kiyomizu5', name: '力餅食堂 (Chikara Mochi Shokudo, Kiyomizu 5-chome)', category: 'OMNI',
    lat: 34.99763440787949, lng: 135.77638051027637, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat udon and noodles; ohagi and mochi may suit but share the kitchen (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Kinako ohagi, red rice and inari-zushi may be plant-based, but udon comes in a dashi broth (2026 reviews).',
    hours_raw: 'Monday–Saturday 11:00–20:00 (last order 19:30); closed Sunday; hours may change (Tabelog). No reservations; busy at weekend lunch and with overseas visitors, shared tables (May–October 2026). Cash only — no cards, e-money or QR (Tabelog). 21 seats at four tables (Tabelog). Smoking allowed (Tabelog). Take-away (Tabelog). Kiyomizu 5-chome near Rokuharamitsuji and Rokudo Chinnoji (2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kiyomizu 5-chome, near Rokuharamitsuji',
    cuisine: 'Neighbourhood udon and sweets diner of the 力餅食堂 name (2026 reviews) · chikara udon with soft grilled mochi, kitsune udon with sweet fried tofu, curry udon, beef-tendon ankake udon, a light shoyu chuka soba with thick chashu; red rice and inari-zushi (January–October 2026) · kinako ohagi and other mochi sweets (May–August 2026) · under about ¥1,000–2,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('力餅食堂 清水5丁目 六波羅'), menu_url: null,
    notes: '[Udon and mochi diner · near Rokuharamitsuji, cash only] A homely 力餅食堂 near Rokuharamitsuji serving gentle-dashi udon — chikara udon with grilled mochi, kitsune, curry, beef-tendon ankake — with red rice, inari and kinako ohagi. Popular at lunch; share a table. Smoking allowed. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per reviewers: one of the Kyoto diners carrying the 力餅食堂 name, near Rokuharamitsuji and Rokudo Chinnoji, with young staff alongside the old hands (January 2026), loved locally and busy with visitors (2026 reviews). Drafted on its own evidence under Greg\'s ruling that noren-wake families such as 力餅食堂 are not chains.',
      philosophy: null, specialty: 'Chikara udon; red rice.',
      anecdotes: [
        { text: 'A January 2026 visitor on a twelfth Chikara Mochi visit was glad to see young staff carrying the shop on, and praised the beef-tendon ankake udon.', source: R + 'B521026636/' },
        { text: 'An April 2026 diner came casually for curry udon and rated it among the best udon in Kyoto, along with the red rice.', source: R + 'B526342565/' },
        { text: 'An October 2026 regular on the way to Rokuharamitsuji got the last inari-zushi to go with a chikara udon.', source: R + 'B515014340/' },
      ],
      japanese_sources_summary: '食べログ: 食堂・うどん・和菓子、東山区清水5-120、月〜土 11:00〜20:00 (L.O.19:30)、日曜休み、予約不可、カード・電子マネー・QR 不可、21席 (6人掛け3卓、3人掛け1卓)、喫煙可、テイクアウト可。口コミ (2026年1月〜10月、英語): 六波羅蜜寺と六道珍皇寺の近く、焼いたもちの力うどん、きつねうどん、カレーうどん、牛すじのあんかけうどん、あっさり醤油の中華そばと厚いチャーシュー、赤飯、いなり寿司、きなこのおはぎ、若いスタッフも (2026年1月)、ほかの力餅より少し高め (2026年6月)、海外の客も多く相席。',
      confidence: 'medium', sources: [TB, R + 'B507349390/', R + 'B515014340/', R + 'B521026636/', R + 'B523300862/', R + 'B526342565/', R + 'B527568241/', R + 'B527740375/', R + 'B530623934/', R + 'B532421838/', R + 'B533836587/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; shared tables at busy times; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水5-120',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.997634, 135.776381); cross-checked: GSI 京都府京都市東山区清水五丁目120番地 (lot) 55 m; nearest existing record 67.8 m (kyr_nekomata); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527740375/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Chikara udon (with grilled mochi)', '', 'Udon', 'no', 'no', 'May and October 2026.', 'chikara'),
      it('', '', 'Kinako ohagi', '', 'Sweets', 'ask', 'ask', 'August 2026.', 'ohagi'),
    ] }, {
    cuisine: '力餅食堂の名を持つ町のうどんと甘味の食堂 (2026年の口コミ)・焼いたもちのやわらかい力うどん、甘いきつねのきつねうどん、カレーうどん、牛すじのあんかけうどん、あっさり醤油と厚いチャーシューの中華そば、赤飯、いなり寿司 (2026年1〜10月)・きなこのおはぎなどのもちの甘味 (2026年5〜8月)・1,000〜2,000円未満ほど (食べログ、2026年の口コミ)',
    neighborhood: '清水5丁目、六波羅蜜寺のそば',
    gf_detail: 'グルテンフリー不可。小麦のうどんと麺。おはぎやもちは合う可能性があるが同じ厨房 (2026年の口コミ)。',
    vegan_detail: '要確認。きなこのおはぎ、赤飯、いなり寿司は植物性の可能性があるが、うどんはだし (2026年の口コミ)。',
    notes: '[うどんともちの食堂・六波羅蜜寺のそば、現金のみ] 六波羅蜜寺近くの家庭的な力餅食堂。やさしいだしのうどん (焼きもちの力うどん、きつね、カレー、牛すじのあんかけ) に赤飯、いなり、きなこのおはぎ。昼は混み相席も。喫煙可。日曜休み。',
  });
}

// ================================================================ リストランテ ストラーダ STRADA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26003479/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.strada-kyoto.com/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_ristorante_strada', name: 'リストランテ ストラーダ (STRADA)', category: 'OMNI',
    lat: 35.011185277867064, lng: 135.76437839042165, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses include handmade pasta and bread; fish and meat mains may suit; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: antipasti of ham and smoked salmon, fish and meat courses (2026 reviews).',
    hours_raw: 'Tuesday–Sunday and holidays 11:30–15:00 (last orders food 13:30, drinks 14:00) and 18:00–22:00 (food 20:30, drinks 21:00); closed Monday, the fourth Tuesday of the month and irregular days (Tabelog). Reservations accepted (Tabelog). Service charge 10% at dinner and in private rooms (Tabelog original ディナータイムおよび個室をご利用の場合、別途サービス料10%を頂戴いたします。). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 30 seats and private rooms (Tabelog; June 2026). A stone-fronted building at the north-east corner of Oike and Yanaginobamba; 3 min walk from Karasuma-Oike or Kyoto Shiyakusho-mae Stn (Tabelog; May 2026). Opened 1 April 2005 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oike-Yanaginobamba, near City Hall',
    cuisine: 'Italian ristorante of courses in a stone-fronted building (2026 reviews) · lunch course about ¥4,400: a generous assorted antipasto, handmade pasta, a main such as sautéed amadai with crisp skin, dessert; Sicilian olive oil with the bread (May–August 2026) · antipasti of house-smoked salmon, ham and melon, horse meat; wine pairings (June–October 2026) · lunch about ¥5,000–8,000, dinner about ¥10,000–15,000 (Tabelog)',
    website: WEB, gmaps: gm('リストランテ ストラーダ 御池'), menu_url: null,
    notes: '[Italian · Oike-Yanaginobamba] A long-standing Italian behind a stone facade near City Hall: a good-value ¥4,400 lunch course of lavish antipasti, handmade pasta and crisp-skinned amadai, and richer dinners with wine pairings; private rooms with a storybook feel. 10% service at dinner. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: an Italian restaurant opened 1 April 2005 at the corner of Oike and Yanaginobamba. Reviewers in 2026 describe a stone exterior, a calm interior with private rooms and regulars who return for anniversaries.',
      philosophy: null, specialty: 'Assorted antipasti; handmade pasta.',
      anecdotes: [
        { text: 'A September 2026 couple, back again for a wedding anniversary, started with horse meat and the assorted antipasti the couple always loves.', source: R + 'B513967882/' },
        { text: 'A June 2026 group booked a private room for the lunch course and felt like walking into Harry Potter.', source: R + 'B532784201/' },
        { text: 'A May 2026 lunch guest in heavy rain watched the room fill up, and singled out the crisp-skinned sautéed amadai.', source: R + 'B530411584/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン、中京区御池通柳馬場北東角、地下鉄烏丸御池駅・市役所前駅から徒歩3分、火〜日・祝日 11:30〜15:00 (L.O.料理13:30、飲み物14:00)、18:00〜22:00 (L.O.料理20:30、飲み物21:00)、月曜・第4火曜・不定休、予約可、ディナーと個室はサービス料10%、カード (VISA・Master・JCB・AMEX・Diners) 可、電子マネー・QR 不可、30席、2005年4月1日開店、公式サイトあり。口コミ (2026年4月〜10月、英語): 石造りの外観、落ち着いた店内と個室、昼のコース4,400円 (たっぷりの前菜の盛り合わせ、手打ちパスタ、甘鯛のソテー、デザート)、シチリアのオリーブオイル、自家製のスモークサーモン、生ハムとメロン、馬肉、ワインのペアリング、記念日に通う常連。',
      confidence: 'medium', sources: [TB, WEB, R + 'B246301530/', R + 'B300074370/', R + 'B513967882/', R + 'B526558919/', R + 'B529416818/', R + 'B530411584/', R + 'B532784201/', R + 'B533185429/', R + 'B533430591/', R + 'B538104073/'] },
    cultural_comfort: { level: 'konnichiwa', note: '10% service at dinner and in private rooms; book ahead; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区御池通柳馬場北東角',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.011185, 135.764378); the address is a street-corner description without town or lot, and GSI matches only a different town, so the Tabelog pin is kept; nearest existing record 95.5 m (kyoto_fudo); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B300074370/', R + 'B533430591/'],
    price_note: 'Price from July and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥4,400', 'Courses', 'no', 'no', 'July and August 2026.', 'lunch'),
    ] }, {
    cuisine: '石造りの建物のコースのイタリアン (2026年の口コミ)・昼のコース4,400円ほど: たっぷりの前菜の盛り合わせ、手打ちパスタ、皮がパリッとした甘鯛のソテーなどの主菜、デザート、パンにシチリアのオリーブオイル (2026年5〜8月)・自家製のスモークサーモン、生ハムとメロン、馬肉の前菜、ワインのペアリング (2026年6〜10月)・昼5,000〜8,000円ほど、夜10,000〜15,000円ほど (食べログ)',
    neighborhood: '御池柳馬場、市役所のそば',
    gf_detail: '要確認。コースに手打ちパスタとパン。魚や肉の主菜は合う可能性。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。生ハムやスモークサーモンの前菜、魚と肉のコース (2026年の口コミ)。',
    notes: '[イタリアン・御池柳馬場] 市役所近くの石造りの外観の老舗イタリアン。豪華な前菜、手打ちパスタ、皮のパリッとした甘鯛の4,400円のお得な昼のコース、夜はワインのペアリングとともに。物語のような個室も。夜はサービス料10%。月曜休み。',
  });
}

// ================================================================ 寿司処 京都 宙 Edomae Sushi Dokoro Kyoto Sora
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037835/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_sushi_dokoro_sora', name: '寿司処 京都 宙 (Edomae Sushi Dokoro Kyoto Sora)', category: 'OMNI',
    lat: 35.01203176786704, lng: 135.76599402042908, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Edomae sushi of aged fish with soy; Tabelog asks guests to mention allergies or restrictions when booking (Tabelog; 2023–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter (2022–2025 reviews).',
    hours_raw: 'Wednesday–Sunday and holidays 11:30–13:30 (last order 12:30) and 17:00–22:00 (last order 20:00); closed Monday and Tuesday, holidays included (Tabelog). Reservations accepted; mention allergies or restrictions when booking (Tabelog). No service charge (Tabelog original 無し). Cards (VISA, Master, JCB, AMEX, Diners), iD and QR (PayPay, d Barai, Rakuten Pay, au PAY) (Tabelog). Ten counter seats (Tabelog; November 2022). Vine Oak building 1F south unit; 3 min walk from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 1 July 2022 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Kyoto City Hall, Tachibana-cho',
    cuisine: 'Edomae sushi of aged fish at a ten-seat counter (Tabelog; 2022–2025 reviews) · dinner courses, about three to choose from; additional pieces of unusual fish; seared otoro (November 2022–March 2024) · lunch of nigiri or a generous bara chirashi of aged fish; bonito and negitoro (June 2024; January 2025) · lunch about ¥1,000–3,000, dinner about ¥10,000–20,000 (Tabelog; 2024–2025 reviews)',
    website: null, gmaps: gm('寿司処 京都 宙'), menu_url: null,
    notes: '[Edomae sushi · near City Hall, 10 seats] A friendly, unstuffy ten-seat counter serving Edomae sushi of aged fish — a choice of dinner courses with unusual extra pieces and seared otoro, and good-value nigiri or bara chirashi at lunch. No service charge. Closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Sushi chef (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: an Edomae sushi counter opened 1 July 2022 near Kyoto City Hall, known for aged fish and a friendly, approachable chef (2023–2025 reviews).',
      philosophy: null, specialty: 'Aged-fish nigiri; bara chirashi.',
      anecdotes: [
        { text: 'A February 2023 diner, anxious at first because there were no reviews yet, found an easy-going chef and unusual extra pieces.', source: R + 'B460913681/' },
        { text: 'A January 2025 lunch guest had the bara chirashi, generous with aged fish full of flavour.', source: R + 'B500628026/' },
        { text: 'A November 2025 guest found the chef approachable, unlike stiff traditional sushi bars, and the experience worth the price.', source: R + 'B519102303/' },
      ],
      japanese_sources_summary: '食べログ: 寿司・日本料理・海鮮、中京区橘町612 バインオーク 1F 南号室、市役所前駅から徒歩3分、水〜日・祝日 11:30〜13:30 (L.O.12:30)、17:00〜22:00 (L.O.20:00)、月・火休み (祝日も)、予約可 (アレルギーや苦手は予約時に)、サービス料無し、カード (VISA・Master・JCB・AMEX・Diners)・iD・QR (PayPay・d払い・楽天ペイ・au PAY) 可、カウンター10席、2022年7月1日開店。口コミ (2022年11月〜2025年11月、英語、来店の記録は2026年8月まで): 熟成した魚の江戸前寿司、夜は3種ほどのコース、珍しいネタの追加、炙りの大とろ、昼は握りかばらちらし、かつおとねぎとろ、気さくな料理人。',
      confidence: 'low', sources: [TB, R + 'B456468426/', R + 'B460913681/', R + 'B481453742/', R + 'B487077405/', R + 'B500628026/', R + 'B519102303/', R + 'B459625727/', R + 'B532252355/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter of ten; no service charge; cards, iD and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区橘町612 バインオーク 1F 南号室',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; written reviews through November 2025, visits logged February and August 2026 (a third visit by a regular).' },
    pin_source: `Tabelog ${TB} (35.012032, 135.765994); cross-checked: GSI 京都府京都市中京区橘町612番地 (lot) 4 m; nearest existing record 3.9 m (kyoto_yakitori_kyoto_tachibana, same building B1F); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B500628026/'],
    price_note: 'No item prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Bara chirashi (lunch)', '', 'Lunch', 'ask', 'no', 'January 2025.', 'chirashi'),
      it('', '', 'Omakase course (dinner)', '', 'Courses', 'ask', 'no', '2022–2025 reviews.', 'omakase'),
    ] }, {
    cuisine: 'カウンター10席の熟成魚の江戸前寿司 (食べログ、2022〜2025年の口コミ)・夜は3種ほどのコース、珍しいネタの追加、炙りの大とろ (2022年11月〜2024年3月)・昼は握りか熟成魚たっぷりのばらちらし、かつおとねぎとろ (2024年6月、2025年1月)・昼1,000〜3,000円ほど、夜10,000〜20,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '市役所の近く、橘町',
    gf_detail: '要確認。醤油を使う熟成魚の江戸前寿司。食べログはアレルギーや制限を予約時に伝えるよう案内 (食べログ、2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。寿司のカウンター (2022〜2025年の口コミ)。',
    notes: '[江戸前寿司・市役所の近く、10席] 気取らないカウンター10席の熟成魚の江戸前寿司。夜は選べるコースに珍しいネタの追加や炙りの大とろ、昼はお得な握りやばらちらし。サービス料なし。月・火休み。',
  });
}

// ================================================================ 京都 スエヒロガリ Kyoto Suehiro Gari
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034037/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['16:00', '22:00']);
  put({
    id: 'kyoto_suehiro_gari_shinpukan', name: '京都 スエヒロガリ (Kyoto Suehiro Gari)', category: 'OMNI',
    lat: 35.00930958786709, lng: 135.7607270404053, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled skewers may suit, but tare, chicken sukiyaki and oyakodon use soy; the kitchen adjusted a course for a guest who could not eat liver (May 2026). No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori and chicken specialist (2026 reviews).',
    hours_raw: 'Daily 11:00–14:00 (last order 13:30) and 16:00–22:00 (last orders food 21:00, drinks 21:30); hours and closing days follow the Shinpukan complex (Tabelog). Reservations accepted; a booking is cancelled if there is no contact 30 minutes after the time (Tabelog). Courses take priority, so extras may not be available (June 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR (Tabelog). 22 seats; dimly lit (Tabelog; July 2026). Shinpukan 1F, 1 min walk from Karasuma-Oike Stn (Tabelog). Opened 11 June 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Oike, Shinpukan',
    cuisine: 'Yakitori and chicken dishes in Shinpukan (Tabelog; 2026 reviews) · lunch: oyakodon set, chicken sukiyaki gozen ¥1,600, the "Lucky" lunch course of skewers such as shinron (above the heart) and heart, chicken breast (May–October 2026) · evening yakitori courses with all-you-can-drink around ¥6,000 (June–July 2026) · lunch about ¥1,000–2,500, dinner about ¥4,000–7,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('京都 スエヒロガリ 新風館'), menu_url: null,
    notes: '[Yakitori · Karasuma-Oike, Shinpukan] A dim, stylish yakitori counter inside Shinpukan by Karasuma-Oike station: oyakodon or chicken-sukiyaki sets at lunch, and at night careful skewers of rarer cuts in all-you-can-drink courses. Book the evening — courses come first.',
    chef_bio: { chef_name: null, roles: ['Grill and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a yakitori and chicken restaurant opened 11 June 2020 on the first floor of Shinpukan, with lunch sets and evening courses and friendly staff (2026 reviews).',
      philosophy: null, specialty: 'Yakitori course; oyakodon.',
      anecdotes: [
        { text: 'A May 2026 lunch guest who cannot eat chicken liver had it taken off the Lucky course, and tried shinron and heart for the first time.', source: R + 'B528259295/' },
        { text: 'A July 2026 group of eight got a same-day booking for the all-you-can-drink yakitori course, about ¥6,000 each.', source: R + 'B530966720/' },
        { text: 'A June 2026 diner on the cheapest course could not add more skewers, as ingredients were kept for bookings.', source: R + 'B530408042/' },
      ],
      japanese_sources_summary: '食べログ: 焼き鳥・鶏料理、中京区烏丸通姉小路下ル場之町586-2 (新風館 1F)、烏丸御池駅から徒歩1分、毎日 11:00〜14:00 (L.O.13:30)、16:00〜22:00 (L.O.料理21:00、飲み物21:30)、施設の営業に準ずる、予約可 (30分連絡なしはキャンセル)、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・電子マネー・QR 可、22席、2020年6月11日開店。口コミ (2026年5月〜10月、英語): 昼は親子丼の定食、鶏すき焼き御膳1,600円、ラッキーコース (心ろん、ハツなど)、むね肉、夜は飲み放題付きの焼き鳥コース6,000円ほど、レバーが苦手と伝えると外してくれた (2026年5月)、予約を優先するので追加できなかったとの声 (2026年6月)、薄暗くおしゃれな店内。',
      confidence: 'medium', sources: [TB, R + 'B498053512/', R + 'B528259295/', R + 'B529391073/', R + 'B530408042/', R + 'B530577590/', R + 'B530966720/', R + 'B532339127/', R + 'B533017626/', R + 'B535988762/', R + 'B538160365/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the evening; courses first; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸通姉小路下ル場之町586-2 新風館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009310, 135.760727); cross-checked: GSI 京都府京都市中京区場之町586番地 (lot) 89 m — the Shinpukan block; nearest existing record 20.3 m (vm_hon_to_yasai_oyoy_book_a), kyoto_tentora_shinpukan 23.0 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538160365/', R + 'B530966720/'],
    price_note: 'Prices from July and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chicken sukiyaki gozen (lunch)', '¥1,600', 'Lunch', 'no', 'no', 'October 2026.', 'sukiyaki'),
      it('', '', 'Yakitori course with all-you-can-drink', '¥6,000', 'Courses', 'ask', 'no', 'July 2026; about.', 'course'),
      it('', '', 'Oyakodon set', '', 'Lunch', 'no', 'no', 'July and September 2026.', 'oyakodon'),
    ] }, {
    cuisine: '新風館の焼き鳥と鶏料理 (食べログ、2026年の口コミ)・昼は親子丼の定食、鶏すき焼き御膳1,600円、心ろんやハツなどの串の「ラッキー」コース、むね肉 (2026年5〜10月)・夜は飲み放題付きの焼き鳥コース6,000円ほど (2026年6〜7月)・昼1,000〜2,500円ほど、夜4,000〜7,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '烏丸御池、新風館',
    gf_detail: '要確認。塩の串は合う可能性があるが、たれ、鶏すき焼き、親子丼は醤油。レバーが苦手な客のためにコースを変えてくれた (2026年5月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。焼き鳥と鶏料理の店 (2026年の口コミ)。',
    notes: '[焼き鳥・烏丸御池、新風館] 烏丸御池駅すぐの新風館の中の薄暗くおしゃれな焼き鳥の店。昼は親子丼や鶏すき焼きの定食、夜は珍しい部位もていねいに焼く串の飲み放題付きコース。夜は予約を、コースが優先。',
  });
}

save();
