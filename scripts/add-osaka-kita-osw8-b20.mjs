// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), NOTABLE phase, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 20.
//   + 旬魚菜 磯一 新大阪店 Iso Ichi Shin-Osaka (port-direct seafood izakaya by Shin-Osaka, nodoguro clay-pot rice; cheap fish set lunches)
//   + M&DELI JR新大阪駅店 (the Matsusaka-beef katsu sandwich stand inside the Shinkansen gates)
//   + 新大阪 海鮮食堂 おーうえすと Shin-Osaka Kaisen Shokudo O-west (seafood izakaya by the JR east exit, open 11:30 to midnight)
//   + 喫茶サンチョ Kissa Sancho (a Showa-style smokers' kissa in the station's Aji no Koji, breakfast to dinner)
//   - skipped ケラケラ ケイヴ 27085951: chain; 大和企業株式会社 runs about 25 restaurants including five ケラケラ / KELLER KELLER shops (daiwa-kigyo.jp,
//     read 2026-11-02).
//   - skipped メッセ熊子 27102261: same-concept sister of めっせ熊 新大阪店, already in data (osaka_messe_kuma_shin_osaka); a review calls it the shop
//     next to "the neighboring Messe Kuma" (B427158229).
//   Shop counts for the drafted:
//   - 磯一: three shops, 新大阪, 山田 and 江坂 (with an 江坂 annexe), per Gurunavi (web search 2026-11-02); a review calls the Shin-Osaka shop a "sister
//     restaurant" of Esaka. 4 or fewer, not in data: drafted. (Undecided last batch; now counted.)
//   - M&DELI: one specialty shop plus a sales counter in ASTY Kyoto (mdeli.jp, read 2026-11-02); run by 株式会社ライトハウス, which also runs
//     Matsusaka-beef yakiniku restaurants (a 2026 review) — a different concept.
//   - おーうえすと: three shops found, 新大阪, 東三国 and 千里中央 はなれ (Gurunavi, Hot Pepper; web search 2026-11-02). Drafted.
//   - 喫茶サンチョ: one shop (Tabelog; reviews).
//   None is in data/osaka.json by id, name or address. The two station shops share 西中島5-16-1 with several records; their Tabelog points sit 9–49 m
//   from those, none stacked. GSI gives one point for the whole station (69–90 m away) and 80 m for the large Nissei building, so Tabelog points are kept.
//   open_late per Greg's rule (after 22:00): 磯一 23:00 (24:00 Fri) and おーうえすと 24:00 true; M&DELI 21:00 and サンチョ 21:00 false.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27085951', 'chain: 大和企業株式会社, about 25 restaurants incl. five ケラケラ / KELLER KELLER shops (daiwa-kigyo.jp, read 2026-11-02)');
skip('27102261', 'same-concept sister of めっせ熊 新大阪店, already in data as osaka_messe_kuma_shin_osaka (review B427158229)');

// ================================================================ 旬魚菜 磯一 新大阪店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27041309/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:30'];
  const N = day(L, ['17:00', '23:00']); const F = day(L, ['17:00', '00:00']);
  put({
    id: 'osaka_iso_ichi_shin_osaka', name: '旬魚菜 磯一 新大阪店 (Iso Ichi Shin-Osaka)', category: 'OMNI',
    lat: 34.733597, lng: 135.496894, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Fried shrimp, croquettes and tempura are battered; sashimi, simmered fish and clay-pot rice need checking for soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; dashi and fish throughout.',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00) and 17:00–23:00 (food last order 22:00, drinks 22:30); Fridays and days before holidays to 24:00; closed 31 December–2 January (Tabelog). Reservations for dinner; groups of 10 or more by phone; no lunch bookings (Tabelog). Cards; no e-money or QR (Tabelog). 86 seats, counter, sunken-kotatsu and semi-private rooms for 4–8; banquets up to 62 (Tabelog). Non-smoking (Tabelog). Orders by QR code at the table (October 2026). Opened 30 May 2009 (Tabelog).',
    hours: { 0: N, 1: N, 2: N, 3: N, 4: F, 5: N, 6: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '宮原3-4-30 ニッセイ新大阪ビル 1F, 2 min from Shin-Osaka on the Midosuji Line, 7 min from JR Shin-Osaka (Tabelog)',
    cuisine: 'Seafood izakaya with fish sent the same morning from ports around Japan (Tabelog) · three house specialities: natural nodoguro clay-pot rice (takes about 40 minutes), the "Isonori" platter, and "zukushi" dishes cooked several ways (Tabelog; October 2026) · sashimi platters; simmered kinmedai; katsuo tataki; sanma several ways and matsutake dobin-mushi in autumn; crab from late autumn; whale; gratin; avocado and cheese (2026) · monthly special plans; a course with all-you-can-drink around ¥5,000, bottled beer on the basic plan (Tabelog; August 2026) · lunch: grilled fish set of hokke and mackerel ¥1,180; fried shrimp and shrimp cream croquette set just over ¥1,000; free rice refills, a free raw egg, a large bowl of pork miso soup (2026) · a broad sake list, e.g. Mitsui no Kotobuki (September 2026)',
    website: null, gmaps: gm('旬魚菜 磯一 新大阪店'), menu_url: null,
    notes: '[Izakaya · Shin-Osaka, morning-catch fish near the station, and a cheap fish lunch] An 86-seat seafood izakaya in the Nissei building two minutes from the Midosuji Line’s Shin-Osaka, with fish sent the same morning from ports around Japan. The house dish is a clay pot of rice with wild nodoguro (order it early: about 40 minutes), alongside sashimi platters and simmered kinmedai; autumn brings sanma and matsutake dobin-mushi (2026). Lunch is the bargain: grilled fish or fried shrimp sets around ¥1,000–1,180 with free rice and egg. Calm semi-private rooms suit business dinners before the Shinkansen. Open daily to 23:00.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per the shop-maintained Tabelog listing: fresh fish delivered from fishing ports across Japan; three signature dishes, natural nodoguro clay-pot rice, the Isonori platter and "zukushi" cuisine; a monthly special plan; banquets for up to 62. One of three Iso Ichi shops with 山田 and 江坂 (Gurunavi, web search 2026-11-02). Per reviews: "The new Shinosaka location provides the same reassuring quality that comes with being a sister restaurant" (October 2026, a regular of the Esaka shop); "the staff were helpful in recommending dishes" (August 2026); "the staff kindly informed me that [the shop has] white rice on the menu" (October 2026); a diner wished for staff instead of QR ordering (October 2026); prices on the high side for an Osaka izakaya (October 2026).',
      philosophy: 'Fish chosen and cooked to bring out the ingredient (Tabelog).', specialty: 'Nodoguro clay-pot rice; sashimi platters.',
      anecdotes: [
        { text: '"Nodoguro Kamameshi (please note it takes 40 minutes)." — October 2026.', source: R + 'B509022836/' },
        { text: '"For lunch, I chose grilled fish, which included two half fillets of hokke and mackerel. At JPY 1,180..." — August 2026.', source: R + 'B533985740/' },
        { text: '"The simmered golden eye snapper was so good that I mentioned wanting some white rice." — October 2026.', source: R + 'B537673158/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 旬魚菜 磯一 新大阪店、居酒屋・海鮮・鍋、大阪市淀川区宮原3-4-30 ニッセイ新大阪ビル 1F、御堂筋線新大阪駅から徒歩2分、JR 新大阪駅から7分、毎日11:30〜14:30、17:00〜23:00、金・祝前日は24:00まで、12月31日〜1月2日休み、昼は予約不可、カード可、電子マネー・QR 不可、86席、半個室、掘りごたつ、禁煙、2009年5月30日オープン、全国の漁港から朝獲れの鮮魚、3大名物は天然のどぐろの土鍋めし、磯盛り、づくし料理、宴会は62名まで。口コミ (2026年): 新大阪・山田・江坂の系列、江坂店の姉妹店、のどぐろの釜めしは40分、刺身盛り、キンメの煮付け、カツオのたたき、さんま、松茸の土瓶蒸し、カニ、くじら、グラタン、アボカドとチーズ、飲み放題つきコース約5,000円、昼は焼き魚定食1,180円 (ほっけとさば)、エビフライとエビクリームコロッケの定食、ごはんおかわり自由、生卵1個無料、具だくさんの豚汁、QR コードで注文、日本酒。',
      confidence: 'medium', sources: [TB, R + 'B479929481/', R + 'B509022836/', R + 'B531656305/', R + 'B533581193/', R + 'B533721138/', R + 'B533985740/', R + 'B536180404/', R + 'B536376688/', R + 'B536651189/', R + 'B537469734/', R + 'B537673158/', R + 'B537907309/', R + 'B538330221/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code ordering at the table (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原3-4-30 ニッセイ新大阪ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained Tabelog listing with a 2026 notice; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区宮原三丁目4番30号 (go) 80m, a large office building; Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533985740/', R + 'B533581193/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Grilled fish set (lunch)', '¥1,180', 'Lunch', 'ask', 'no', 'August 2026.', 'yakizakana_teishoku'),
      it('', '', 'Fried shrimp and shrimp cream croquette set (lunch)', '', 'Lunch', 'no', 'no', '2026.', 'ebifry_teishoku'),
      it('', '', 'Natural nodoguro clay-pot rice (about 40 minutes)', '', 'Signature', 'ask', 'no', 'October 2026.', 'nodoguro_kamameshi'),
      it('', '', 'Course with all-you-can-drink', '¥5,000', 'Courses', 'ask', 'no', 'August 2026.', 'nomihodai_course'),
    ] }, {
    cuisine: '全国の漁港から朝獲れの鮮魚を届ける海鮮の居酒屋 (食べログ)・3大名物は天然のどぐろの土鍋めし (約40分)、磯盛り、づくし料理 (食べログ、2026年10月)・刺身の盛り合わせ。キンメの煮付け。カツオのたたき。秋はさんまをいろいろに、松茸の土瓶蒸し。晩秋からカニ。くじら。グラタン。アボカドとチーズ (2026年)・月替わりのおすすめプラン。飲み放題つきのコース約5,000円、基本プランは瓶ビール (食べログ、2026年8月)・昼: ほっけとさばの焼き魚定食1,180円。エビフライとエビクリームコロッケの定食は1,000円少し。ごはんおかわり自由、生卵1個無料、大きな豚汁 (2026年)・日本酒もそろう、Mitsui no Kotobuki など (2026年9月)',
    neighborhood: '宮原3-4-30 ニッセイ新大阪ビル 1F、御堂筋線の新大阪駅から2分、JR 新大阪駅から7分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。エビフライ、コロッケ、天ぷらは衣つき。刺身、煮付け、土鍋めしは醤油を確認。',
    vegan_detail: 'ヴィーガンではありません。海鮮の居酒屋で、だしと魚ばかり。',
    notes: '[居酒屋・新大阪、駅近の朝獲れの魚と安い魚の昼ごはん] 御堂筋線の新大阪駅から2分、ニッセイビルの86席の海鮮居酒屋で、魚は全国の漁港からその朝に届く。名物は天然のどぐろの土鍋めし (早めに注文を、約40分)、刺身の盛り合わせ、キンメの煮付け。秋はさんまや松茸の土瓶蒸し (2026年)。お得なのは昼で、焼き魚やエビフライの定食が約1,000〜1,180円、ごはんと卵は無料。落ち着いた半個室は新幹線の前の会食にも。毎日23時まで。',
  });
}

// ================================================================ M&DELI JR新大阪駅店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27057447/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.mdeli.jp/';
  const H = day(['06:30', '21:00']);
  put({
    id: 'osaka_m_and_deli_shin_osaka', name: 'M&DELI JR新大阪駅店 (M&DELI Shin-Osaka)', category: 'OMNI',
    lat: 34.733802, lng: 135.500581, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded beef katsu in toasted bread with sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Matsusaka beef sandwiches.',
    hours_raw: 'Daily 6:30–21:00 (Tabelog; shop site). Take-away only, inside the Shinkansen ticket gates in ASTY Shin-Osaka (Tabelog; site). No cards; transport IC cards and QR accepted (Tabelog); Suica used (October 2026). Opened in 2010, per an August 2026 review.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1 JR東海新大阪駅, ASTY Shin-Osaka inside the Shinkansen gates (Tabelog; shop site)',
    cuisine: 'The "Nakanoshima beef sandwich" (shop site) · 100% Matsusaka beef: lean and marbled slices layered and fried one by one as a mille-feuille katsu, with a slightly sweet sauce sharpened with mustard, in lightly toasted bread (site; 2026) · ¥1,450 (2026); half and regular sizes (March 2025) · a limited croquette sandwich (2026) · other bento and deli items (September 2026)',
    website: SITE, gmaps: gm('M&DELI 新大阪 新幹線改札内'), menu_url: SITE,
    notes: '[Sandwich · Shin-Osaka Station, Matsusaka beef katsu sandwiches for the Shinkansen] A take-away stand inside the Shin-Osaka Shinkansen gates selling one thing above all: the Nakanoshima beef sandwich of 100% Matsusaka beef, layered lean and marbled slices fried as a mille-feuille katsu with sweet sauce and mustard in toasted bread (¥1,450, 2026). It holds up well cold, which is the point: most buy it to eat on the train. Diners split on value, but it outsells the bento queues. Open 6:30–21:00; IC cards and QR, no credit cards.',
    chef_bio: { chef_name: null, roles: ['Shop staff (unnamed)'], origin: null,
      background: 'Per the shop site (mdeli.jp, read 2026-11-02): the Nakanoshima beef sandwich was born at "M デリ＆バーガー" in Nakanoshima; over 3.5 million sold; the company stations a buyer in Mie and buys whole Matsusaka cattle; run by 株式会社ライトハウス; shops at ASTY Shin-Osaka and a sales counter at ASTY Kyoto. Per reviews: Lighthouse "also runs Yakiniku restaurants like Matsusaka Beef Yakiniku M" and the stand opened in 2010 (August 2026); one diner called the value "the worst" (July 2026), another found the batter thick and the fat heavy (June 2026).',
      philosophy: 'A cutlet suits sauce, as kushi-age shows: a slightly sweet sauce with mustard made for the beef katsu (site, translated).', specialty: 'Matsusaka-beef katsu sandwich.',
      anecdotes: [
        { text: '"Even when cold, the bread remained moist, and the meat was astonishingly tender, making it the perfect indulgent treat during my travels." — September 2026.', source: R + 'B535919631/' },
        { text: '"The 100% Matsusaka Beef Sandwich features layers of tender meat arranged in a mille-feuille style, cut into bite-sized pieces." — October 2026.', source: R + 'B538404530/' },
        { text: '"While other bento shops were crowded, this one had a shorter line." — July 2026, ¥1,450.', source: R + 'B515044510/' },
      ],
      japanese_sources_summary: '店のサイト (mdeli.jp): M&DELI、松阪牛専門店、中之島ビーフサンド、大阪中之島の「Mデリ＆バーガー」から誕生した松阪牛100%のビーフサンド、累計350万個、三重に仕入れ担当を置き松阪牛を一頭買い、霜降りと赤身を何層にも重ねて一枚ずつ衣をつけて揚げたビーフカツ、少し甘めのソースにカラシ、軽くトーストしたパン、JR 新大阪駅 ASTY 新大阪 (新幹線改札内) 6:30〜21:00、ASTY 京都にも販売店、株式会社ライトハウス。食べログ: M&DELI JR新大阪駅店、サンドイッチ、テイクアウトのみ、カード不可、交通系電子マネー・QR 可。口コミ (2022年〜2026年10月): 1,450円、ハーフとレギュラー、限定のコロッケサンド、新幹線で食べる、冷めてもおいしい、2010年オープン、松阪牛焼肉 M も運営、割高という声。',
      confidence: 'medium', sources: [SITE, SITE + 'shop/index.html', TB, R + 'B457558318/', R + 'B503746436/', R + 'B515044510/', R + 'B529532077/', R + 'B530786765/', R + 'B533055839/', R + 'B535366285/', R + 'B535919631/', R + 'B536646749/', R + 'B538184663/', R + 'B538404530/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shop site has an English page (read 2026-11-02); grab-and-go counter. No English evidence from reviews.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR東海新大阪駅',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 69m, the station block; Tabelog point kept for the stand inside the gates; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536646749/', R + 'B537076392/'],
    price_note: 'Price from 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('中之島ビーフサンド', '', 'Nakanoshima beef sandwich (100% Matsusaka beef katsu)', '¥1,450', 'Sandwiches', 'no', 'no', 'October 2026.', 'nakanoshima_beef_sand'),
    ] }, {
    cuisine: '中之島ビーフサンド (店のサイト)・松阪牛100%: 赤身と霜降りを重ね、一枚ずつ揚げたミルフィーユのビーフカツに、少し甘めのソースとカラシ、軽くトーストしたパン (店のサイト、2026年)・1,450円 (2026年)。ハーフとレギュラー (2025年3月)・限定のコロッケサンド (2026年)・弁当やデリも (2026年9月)',
    neighborhood: '西中島5-16-1 JR東海新大阪駅、新幹線改札内の ASTY 新大阪 (食べログ、店のサイト)',
    gf_detail: 'グルテンフリーではありません。衣のビーフカツをトーストしたパンとソースで。',
    vegan_detail: 'ヴィーガンではありません。松阪牛のサンドイッチ。',
    notes: '[サンドイッチ・新大阪駅、新幹線で食べる松阪牛のビーフカツサンド] 新大阪の新幹線改札内の持ち帰りの店で、看板は中之島ビーフサンド。松阪牛100%の赤身と霜降りを重ねてミルフィーユのカツにし、甘めのソースとカラシでトーストしたパンに (1,450円、2026年)。冷めてもおいしいのがポイントで、たいてい車内で食べる。値段の評価は分かれるが、駅弁の行列より早く買える。6時半から21時。交通系 IC と QR 可、クレジットカード不可。',
  });
}

// ================================================================ 新大阪 海鮮食堂 おーうえすと
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27092847/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '00:00']);
  put({
    id: 'osaka_kaisen_shokudo_owest_shin_osaka', name: '新大阪 海鮮食堂 おーうえすと (Shin-Osaka Kaisen Shokudo O-west)', category: 'OMNI',
    lat: 34.733426, lng: 135.503070, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Kara-age, tempura, chicken katsu and fries are battered; sashimi and seafood bowls come with soy-based sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya.',
    hours_raw: 'Daily 11:30–24:00 (last order 23:00), straight through the afternoon (Tabelog). Reservations accepted; same-day cancellations charged in full for courses and ¥4,000 a head for tables (Tabelog). Cards, e-money and QR, including Alipay and WeChat Pay (Tabelog). 72 seats, 30 of them sunken kotatsu, shoes off (Tabelog; September 2026). Smoking allowed, except 11:30–13:00 (Tabelog; October 2026). No call button: wave to order (2026). Opened 1 June 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '東中島1-20-2 アネシス新大阪 1F (東淀川区), 2 min from the JR Shin-Osaka east exit, 7 min from the Midosuji Line station (Tabelog)',
    cuisine: 'Seafood izakaya and canteen (Tabelog) · thick-cut sashimi platters, the house pride (2026); a signature cured-mackerel sashimi, 蒼天シメサバ造り (Gurunavi, web search) · lunch: three choices ¥1,100, e.g. salmon and kanpachi sashimi with chicken katsu; seafood bowls with sweet soy sauce, large rice free (September 2026) · grilled shellfish (shrimp, scallop, turban shell), sanma three ways in autumn, seafood salad with ikura, assorted tempura, eel sushi, kara-age, smoky potato salad (2025–2026) · all-you-can-drink with a sashimi platter; drinking from midday (2026)',
    website: null, gmaps: gm('新大阪 海鮮食堂 おーうえすと 東中島'), menu_url: null,
    notes: '[Izakaya · Shin-Osaka east exit, thick-cut sashimi from midday to midnight] A 72-seat seafood izakaya two minutes from the JR Shin-Osaka east exit, open straight through from 11:30 to midnight, so it is the place for a daytime drink by the station (2026). The draw is sashimi cut thick with sharp edges, platters with all-you-can-drink, and autumn sanma three ways; lunch sets are ¥1,100 with free large rice. Busy and loud, with shoes-off sunken seating; smoking is allowed after 13:00, and you call the staff by hand. Cards and QR accepted.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: seafood izakaya and Japanese food; opened 1 June 2016. One of three おーうえすと shops with 東三国 and 千里中央 はなれ (Gurunavi, Hot Pepper; web search 2026-11-02). Per reviews: "If you’re looking to drink in Shin Osaka during the day, Ouesuto is the only choice" (August 2026); "The staff, possibly the manager or a cook, were incredibly kind" (August 2026); no call button, so ordering can take a while (August–September 2026); one returning diner found the fried food poor and the service slipping (September 2026).',
      philosophy: null, specialty: 'Thick-cut sashimi platters.',
      anecdotes: [
        { text: '"What stood out the most was the thick, fresh sashimi with sharp edges. It was exquisite." — October 2026.', source: R + 'B537322885/' },
        { text: '"In a city where there are few places open late at night, this restaurant is a rare find!" — August 2026.', source: R + 'B534764522/' },
        { text: '"I enjoyed the seasonal sanma (mackerel pike) prepared in three different ways." — October 2026.', source: R + 'B537529962/' },
      ],
      japanese_sources_summary: '食べログ: 新大阪 海鮮食堂 おーうえすと、居酒屋・海鮮・日本料理、大阪市東淀川区東中島1-20-2 アネシス新大阪 1F、JR 新大阪駅東口から徒歩2分、毎日11:30〜24:00 (L.O.23:00)、予約可、当日キャンセルはコース100%、席のみはひとり4,000円、カード・電子マネー・QR 可、72席 (うち掘りごたつ30)、喫煙可 (11:30〜13:00は全席禁煙)、2016年6月1日オープン。ぐるなび: 名物の蒼天シメサバ造り。口コミ (2025年10月〜2026年10月): 厚切りの刺身の盛り合わせ、昼は3種から1,100円、海鮮丼は甘い醤油、大盛り無料、貝の焼き物、さんまの三種、いくらの海鮮サラダ、天ぷらの盛り合わせ、うなぎの寿司、唐揚げ、スモークのポテトサラダ、刺身つきの飲み放題、昼飲み、呼び出しボタンなし、にぎやか、喫煙可。',
      confidence: 'medium', sources: [TB, R + 'B515772661/', R + 'B534349156/', R + 'B534427718/', R + 'B534545645/', R + 'B534764053/', R + 'B534764522/', R + 'B535112320/', R + 'B536529431/', R + 'B537079100/', R + 'B537322885/', R + 'B537352564/', R + 'B537529962/', R + 'B538503072/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Alipay and WeChat Pay accepted (Tabelog); no call button. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市東淀川区東中島1-20-2 アネシス新大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市東淀川区東中島一丁目20番2号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536529431/'],
    price_note: 'Lunch price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (three choices)', '¥1,100', 'Lunch', 'ask', 'no', 'September 2026.', 'lunch_set'),
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', '2026.', 'sashimi_mori'),
    ] }, {
    cuisine: '海鮮の居酒屋と食堂 (食べログ)・自慢は厚切りの刺身の盛り合わせ (2026年)。名物の蒼天シメサバ造り (ぐるなび)・昼: 3種から1,100円、サーモンとカンパチの刺身にチキンカツなど。甘い醤油の海鮮丼、大盛り無料 (2026年9月)・貝の焼き物 (エビ、ホタテ、サザエ)、秋はさんまの三種、いくらの海鮮サラダ、天ぷらの盛り合わせ、うなぎの寿司、唐揚げ、スモークのポテトサラダ (2025〜2026年)・刺身の盛り合わせつきの飲み放題。昼から飲める (2026年)',
    neighborhood: '東中島1-20-2 アネシス新大阪 1F (東淀川区)、JR 新大阪駅東口から2分、御堂筋線の駅から7分 (食べログ)',
    gf_detail: '要確認。グルテンの情報なし。唐揚げ、天ぷら、チキンカツ、フライドポテトは衣つき。刺身や海鮮丼は醤油ベースのたれ。',
    vegan_detail: 'ヴィーガンではありません。海鮮の居酒屋。',
    notes: '[居酒屋・新大阪東口、昼から深夜0時までの厚切りの刺身] JR 新大阪駅東口から2分、72席の海鮮居酒屋で、11時半から深夜0時まで通しで開いているので、駅のそばで昼飲みするならここ (2026年)。目当ては角の立った厚切りの刺身、飲み放題つきの盛り合わせ、秋のさんま三種。昼の定食は1,100円で大盛り無料。にぎやかで声が大きくなる店、靴を脱ぐ掘りごたつ席。13時からは喫煙可、注文は手を挙げて。カードと QR 可。',
  });
}

// ================================================================ 喫茶サンチョ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27031695/'; const R = TB + 'dtlrvwlst/';
  const H = day(['07:20', '21:00']);
  put({
    id: 'osaka_kissa_sancho_shin_osaka', name: '喫茶サンチョ (Kissa Sancho)', category: 'OMNI',
    lat: 34.733202, lng: 135.499684, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sandwiches, toast, Baumkuchen, demi-glace and fried dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, ginger pork, egg sandwiches, cream.',
    hours_raw: 'Daily 7:20–21:00 (Tabelog). No reservations; seated strictly in order of arrival (Tabelog; February 2026). No cards or e-money; PayPay accepted (Tabelog). 40 seats, three at the counter facing the kitchen and tables along the wall (Tabelog; April 2026). Smoking allowed at every seat (Tabelog; 2026). Full at lunch, with people turned away (May and September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '西中島5-16-1 JR東海新大阪駅 1F 味の小路, just outside the station ticket gates, by the escalator (Tabelog; April and October 2026)',
    cuisine: 'Showa-style kissa with breakfast, lunch and yoshoku (Tabelog; reviews) · morning sets, e.g. set C ¥750; sandwiches such as tuna, cucumber and lettuce, with fruit (2026) · lunch with coffee: hamburg steak with demi-glace; ginger pork set; rice with free refills; ¥50 off without a drink (2026) · Baumkuchen set with a drink ¥850, the burnt Baumkuchen with whipped cream; coffee ¥650 (April 2026) · fruit mitsumame; warabi mochi; 100% fruit mixed juice (2026) · strong blend coffee, iced coffee, café au lait with or without syrup (2026) · a dessert set around ¥1,000 (October 2026)',
    website: null, gmaps: gm('喫茶サンチョ 新大阪駅 味の小路'), menu_url: null,
    notes: '[Kissa · Shin-Osaka Station, a Showa kissa for smokers, from breakfast to dinner] A 40-seat coffee shop in the Aji no Koji arcade on the ground floor of Shin-Osaka Station, just outside the gates, keeping a Showa-era room where smoking is still allowed at every table (2026). Mornings bring sets from ¥750 and sandwiches with fruit; at lunch it fills with demi-glace hamburg steak and ginger pork sets, and the afternoon favourite is burnt Baumkuchen with cream and a strong coffee (¥850 set). Seating is strictly in order of arrival. Open 7:20–21:00; PayPay only. Non-smokers be warned.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: kissa, café and yoshoku; breakfast; smoking allowed. Per reviews: "a charming retro café that remains a smoking establishment, bustling with customers from morning till night" (April 2026); "[The staff] guide customers to [the] seats strictly in the order of arrival" (February 2026); "a classic coffee shop that exudes a Showa retro atmosphere" (August 2026); two diners left or kept it short because of the smoke (July and October 2026).',
      philosophy: null, specialty: 'Breakfast sets; Baumkuchen and coffee.',
      anecdotes: [
        { text: '"The burnt version comes with whipped cream, and it was delicious—not too sweet, just right." — April 2026, Baumkuchen set ¥850.', source: R + 'B526180906/' },
        { text: '"No matter how busy it gets or how mismatched the number of seats and customers may be, [the staff] stick to this system without hesitation." — February 2026.', source: R + 'B504529980/' },
        { text: '"The hustle and bustle of the platform fades away, creating a relaxing atmosphere." — October 2026.', source: R + 'B537047613/' },
      ],
      japanese_sources_summary: '食べログ: 喫茶サンチョ、喫茶店・カフェ・洋食、大阪市淀川区西中島5-16-1 JR東海新大阪駅 1F 味の小路、毎日7:20〜21:00、予約不可、カード・電子マネー不可、PayPay 可、40席、喫煙可、モーニングあり。口コミ (2025年〜2026年11月): 改札の外、エスカレーターで1階へ、昭和レトロの喫茶店、全席喫煙可、来た順に案内、モーニングセット C 750円、ツナときゅうりとレタスのサンドとフルーツ、コーヒーつきランチ、デミグラスのハンバーグ、しょうが焼き定食、ごはんおかわり自由、飲み物なしは50円引き、バウムクーヘンのセット850円 (焦がしバウムクーヘンと生クリーム)、コーヒー650円、フルーツみつまめ、わらび餅、果汁100%のミックスジュース、カフェオレ、昼は満席で断られる人も。',
      confidence: 'medium', sources: [TB, R + 'B475914415/', R + 'B498091795/', R + 'B504529980/', R + 'B526180906/', R + 'B527592025/', R + 'B532905197/', R + 'B533001282/', R + 'B535313376/', R + 'B535836649/', R + 'B537047613/', R + 'B537305529/', R + 'B538514702/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Seated in order of arrival; smoking everywhere (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島5-16-1 JR東海新大阪駅 1F 味の小路',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区西中島五丁目16番1号 (go) 90m, the station block; Tabelog point kept, 9 m from osaka_messe_kuma_shin_osaka in the same arcade, not stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526180906/', R + 'B498091795/'],
    price_note: 'Prices from April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Morning set C', '¥750', 'Breakfast', 'no', 'no', 'April 2026.', 'morning_c'),
      it('', '', 'Baumkuchen set with a drink', '¥850', 'Sweets', 'no', 'no', 'April 2026.', 'baumkuchen_set'),
      it('', '', 'Coffee', '¥650', 'Drinks', 'ask', 'ask', 'April 2026.', 'coffee'),
    ] }, {
    cuisine: 'モーニング、ランチ、洋食の昭和の喫茶店 (食べログ、口コミ)・モーニングセット、たとえば C 750円。ツナときゅうりとレタスなどのサンドにフルーツ (2026年)・コーヒーつきのランチ: デミグラスのハンバーグ、しょうが焼き定食、ごはんはおかわり自由、飲み物なしは50円引き (2026年)・飲み物つきのバウムクーヘンのセット850円、焦がしバウムクーヘンに生クリーム。コーヒー650円 (2026年4月)・フルーツみつまめ、わらび餅、果汁100%のミックスジュース (2026年)・濃いブレンド、アイスコーヒー、シロップあり・なしのカフェオレ (2026年)・デザートつきのセット約1,000円 (2026年10月)',
    neighborhood: '西中島5-16-1 JR東海新大阪駅 1F 味の小路、改札を出てすぐ、エスカレーターのそば (食べログ、2026年4月・10月)',
    gf_detail: 'グルテンフリーではありません。サンド、トースト、バウムクーヘン、デミグラス、揚げ物。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、しょうが焼き、卵のサンド、クリーム。',
    notes: '[喫茶・新大阪駅、喫煙できる昭和の喫茶店、朝から夜まで] 新大阪駅1階の味の小路、改札を出てすぐの40席の喫茶店で、全席で喫煙できる昭和の空間がいまも残る (2026年)。朝は750円からのモーニングとフルーツつきのサンド、昼はデミグラスのハンバーグやしょうが焼きの定食で満席、午後の人気は生クリームを添えた焦がしバウムクーヘンと濃いコーヒー (セット850円)。席は来た順に案内。7時20分から21時。PayPay のみ。たばこが苦手な人は注意。',
  });
}

save();
