// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 14.
//   + ステーキハウス 野田 お初天神 梅田店 Steak House Noda (counter teppanyaki of A5 wagyu by Ohatsu Tenjin, the owner's magic after dinner)
//   + 大人居酒屋 ぽん Otona Izakaya Pon (seafood and sake izakaya in Doyama, since April 2025)
//   + 北新地 うえはら Kitashinchi Uehara (fish shabu-shabu and whale harihari-nabe in Dojima; ¥1,500 seafood-bowl lunch)
//   + 鶏と○○、時々 魚。 Tori to Marumaru, Tokidoki Sakana (owner-run yakitori and fish courses in 兎我野町, since 2021)
//   - skipped たか鳥 梅田店 27010186: chain. The hotpepper page of the same shop (as 梅田堂山店, 堂山町16-12) lists a related 京橋店 and a brand
//     page; a November 2025 Tabelog reviewer says it "operates as a franchise"; search results also show 西梅田店 and 新梅田食道街店 listings
//     (gnavi, pages returned 503, not cited). A franchise with four or more shops: a call for the coordinator; reverse if wanted.
//   Chain check: 野田: invoice T9810910782033 → 野田　博臣, an individual (NTA register); one shop. ぽん: no invoice shown; no other shop found.
//   うえはら: invoice T7120001164445 → 日本環境コンサルティング株式会社 at the shop's address (NTA register); one shop. 鶏と○○: a tax-exempt
//   business per Tabelog; the owner runs it alone (January 2025 review).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27010186', 'chain: たか鳥 (地鶏専門 たか鳥), a franchise per a November 2025 review; related 京橋店 on hotpepper; coordinator may reverse');

// ================================================================ ステーキハウス 野田 お初天神 梅田店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27005532/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '22:00']);
  put({
    id: 'osaka_steak_house_noda_ohatsutenjin', name: 'ステーキハウス 野田 お初天神 梅田店 (Steak House Noda Ohatsutenjin Umeda Ten)', category: 'MOM_AND_POP',
    lat: 34.699390, lng: 135.501496, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The steak is served on bread and the bread is grilled in the meat juices with butter at the end; shrimp crackers and octopus rice crackers come alongside; steak sauces not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu and seafood teppanyaki courses.',
    hours_raw: 'Mon–Sat and holidays 17:00–22:00 (last order 22:00); closed Sundays (Tabelog). Reservations accepted; the celebration and business courses must be booked by 2:00 on the day; one course per child; smart-casual dress code (Tabelog). Service charge (amount not given) (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and other e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 10 counter seats, private hire for 9–10; designated smoking area (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎2-5-33, ground floor of KIYO BLD2, in a quiet lane by Ohatsu Tenjin — 5 min from Higashi-Umeda Stn',
    cuisine: 'Teppanyaki of A5 black wagyu grilled at a round counter in front of you; the most popular order is half fillet, half strip loin (Tabelog) · courses (Tabelog, tax included): special wagyu course with 180 g of fillet or strip loin ¥9,900; celebration course with a surprise message cake ¥13,200; business course ¥14,850 · course dishes: a starter, prawns and mushrooms baked in foil, abalone, scallops and squid on the teppan, salad with salted kombu, grilled vegetables (thick fried tofu, pumpkin, potato, onion, bean sprouts), steak on bread with shrimp crackers, then the bread grilled in the meat juices with butter, octopus rice crackers, flambé (2022–2026) · wine, sake and shochu (Tabelog)',
    website: null, gmaps: gm('ステーキハウス 野田 お初天神'), menu_url: null,
    notes: "[Teppanyaki · Ohatsu Tenjin, wagyu and a magic show] A ten-seat teppanyaki counter in a quiet lane by Ohatsu Tenjin, long-established and full of regulars, where the cheerful owner grills A5 black wagyu in front of you and, after dessert, performs magic tricks. The ¥9,900 course brings prawns baked in foil, grilled vegetables and 180 g of wagyu, best taken half fillet, half strip loin, served on bread that is then crisped in the meat juices and butter. Birthdays get a message cake (¥13,200 course). Diners keep calling it good value for teppanyaki, and the flambé is announced so you can film it.",
    chef_bio: { chef_name: '野田博臣', roles: ['Owner and teppan chef (the invoice holder)', 'magician after dinner'], origin: null, background: 'The Tabelog invoice number T9810910782033 is registered to an individual, 野田　博臣 (NTA invoice register, read 2026-11-02). Per the shop-maintained Tabelog listing: "A Historic Teppanyaki Restaurant with a Homely Atmosphere" near Ohatsu Tenjin, A5 black wagyu grilled by the chef in front of you, "You might even catch a magic show!". A February 2024 diner believed it was founded in 1975. Reviews from 2022 to 2026 describe a cheerful owner ("master") who cooks and then performs magic.', philosophy: null, specialty: 'A5 wagyu half-and-half; magic after the meal.',
      anecdotes: [
        { text: '"Beyond the steak, the butter-soaked bread and octopus rice crackers are also delicious, making for some unique side options." — August 2024, "a fun steakhouse with a cheerful owner".', source: R + 'B142279385/' },
        { text: '"The master even performed some magic tricks at the end, and we were all surprised and enjoyed it together." — December 2024, a birthday.', source: R + 'B496943377/' },
        { text: '"The steak was a half-and-half option, allowing us to enjoy two different flavors, which was very satisfying." — August 2026, dinner with a boss.', source: R + 'B533447488/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ステーキハウス 野田 お初天神 梅田店、ステーキ・鉄板焼き・海鮮、大阪市北区曽根崎2-5-33 KIYO BLD2 1F、お初天神のすぐ近く、東梅田駅から5分、月〜土・祝17:00〜22:00、日曜休み、予約可、サービス料あり、カード・電子マネー・QR 可、10席 (カウンター)、9〜10名で貸切、分煙、スマートカジュアル、A5ランクの黒毛和牛を目の前の鉄板で、ヒレとロースのハーフ&ハーフが人気、180gの黒毛和牛のコース9,900円、メッセージケーキつきの記念日コース13,200円、接待コース14,850円、マジックが見られるかも。インボイス登録は個人の野田博臣。口コミ(2022年5月〜2026年8月): 丸いカウンター、エビとキノコのホイル焼き、もやし炒め、塩昆布のサラダ、焼き野菜 (厚揚げ、かぼちゃ、じゃがいも、玉ねぎ)、アワビ・ホタテ・イカの鉄板焼き、パンとえびせんの上のステーキ、肉汁とバターでパンを焼く、たこせん、フランベ、明るいマスターのマジック、常連が多い、1975年創業という声、テッパンヤキとして安い。',
      confidence: 'medium', sources: [TB, R + 'B115877536/', R + 'B142279385/', R + 'B339484581/', R + 'B449943670/', R + 'B469242224/', R + 'B480722559/', R + 'B490504014/', R + 'B496943377/', R + 'B533447488/', R + 'B536981819/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppanyaki with set courses; the cooking and the magic are visual (2022–2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区曽根崎2-5-33 KIYO BLD2 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated January and August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目5番33号 (go) 11m. osaka_koura_unagi_ohatsutenjin (address_ja "大阪府大阪市北区曽根崎2-5-33 KIYOビルⅡ 1F") is in the same building with its pin 8 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Special wagyu course, 180 g of A5 fillet or strip loin (half and half recommended)', '¥9,900', 'Courses', 'ask', 'no', 'Tabelog; August 2026.', 'wagyu_course'),
      it('', '', 'Birthday and anniversary course with a surprise cake', '¥13,200', 'Courses', 'ask', 'no', 'Tabelog; December 2024.', 'anniversary_course'),
      it('', '', 'Business course', '¥14,850', 'Courses', 'ask', 'no', 'Tabelog; January 2026.', 'business_course'),
    ] }, {
    cuisine: 'A5ランクの黒毛和牛を丸いカウンターの目の前で焼く鉄板焼き、人気はヒレとロースのハーフ&ハーフ (食べログ)・コース (食べログ、税込): ヒレかロース180gの特選和牛コース9,900円、サプライズのメッセージケーキつきの記念日コース13,200円、接待コース14,850円・コースの料理: 前菜、エビとキノコのホイル焼き、アワビ・ホタテ・イカの鉄板焼き、塩昆布のサラダ、焼き野菜 (厚揚げ、かぼちゃ、じゃがいも、玉ねぎ、もやし)、パンとえびせんの上にのせるステーキ、最後に肉汁とバターで焼くパン、たこせん、フランベ (2022年〜2026年)・ワイン、日本酒、焼酎 (食べログ)',
    neighborhood: '曽根崎2-5-33、KIYO BLD2の1階、お初天神のそばの静かな路地。東梅田駅から5分',
    gf_detail: '要確認。グルテンの情報なし。ステーキはパンの上にのせ、最後にパンを肉汁とバターで焼く。えびせんやたこせんも。ステーキのソースの説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛と魚介の鉄板焼きのコース。',
    notes: '[鉄板焼き・お初天神、和牛とマジック] お初天神のそばの静かな路地にある10席の鉄板焼きのカウンターで、老舗で常連が多い。明るい店主が目の前でA5の黒毛和牛を焼き、デザートのあとはマジックを見せてくれる。9,900円のコースはエビのホイル焼き、焼き野菜、180gの和牛 (おすすめはヒレとロースのハーフ&ハーフ) で、ステーキはパンの上に。そのパンを最後に肉汁とバターで焼く。誕生日にはメッセージケーキ (13,200円のコース)。鉄板焼きにしてはお得という声が多く、フランベは撮影できるよう声をかけてくれる。',
  });
}

// ================================================================ 大人居酒屋 ぽん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27147922/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '00:00']); const F = day(['17:00', '02:00']);
  put({
    id: 'osaka_otona_izakaya_pon_doyama', name: '大人居酒屋 ぽん (Otona Izakaya Pon)', category: 'OMNI',
    lat: 34.704179, lng: 135.502644, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Black-vinegar sweet and sour pork, shrimp in kadaif, mehikari tempura, liver pâté on baguette and a shellfish-broth noodle sit beside sashimi and kamameshi.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; the kamameshi is cooked in dashi.',
    hours_raw: 'Mon–Thu, Sun, holidays and the day after a holiday 17:00–24:00 (last order 23:30); Fri, Sat and the day before a holiday 17:00–2:00 (last order 1:30) (Tabelog); no closing day (October 2026). Reservations accepted; cover ¥450 a head (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 16 seats: a counter of 8 and two tables of 4; narrow spacing at the counter (October 2026); smoking allowed (Tabelog). Opened 11 April 2025 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂山町16-12, unit 102 of 中通りレジャービル, a side street in Doyama — 3 min from Higashi-Umeda Stn',
    cuisine: 'Izakaya of fresh seafood in creative dishes and about 20 sakes from around Japan, rare labels included (Tabelog) · signatures: black-vinegar sweet and sour pork (¥2,560 for two), Shaoxing-wine squid, mackerel or sardine rolled with herbs (¥1,980 for two) (Tabelog; 2026) · sashimi platter with salmon roe (¥3,840 for three), red shrimp ¥1,350 for three, buri gari, shrimp in kadaif, mehikari tempura ¥1,360, meat-miso stuffed peppers ¥480, pork kakuni, sake-steamed clams, liver pâté on baguette, salmon and ikura kamameshi (cooked to order), a shellfish-broth noodle ¥1,000, tomato chuhai with black pepper (June–October 2026) · courses (Tabelog, tax included): sashimi and choice of kamameshi ¥4,000; beef yukhoe and seasonal dishes ¥5,000; sake free-flow +¥2,500',
    website: null, gmaps: gm('大人居酒屋 ぽん 堂山'), menu_url: null,
    notes: "[Izakaya · Doyama, seafood and sake for grown-ups] A 16-seat izakaya on a side street in Doyama, open since April 2025 and until 2:00 at weekends, pitched between casual and upscale with about twenty sakes. Diners order the house trio: the sashimi platter (with salmon roe), the mackerel or sardine rolls packed with herbs, and the black-vinegar sweet and sour pork; then a salmon and ikura kamameshi, which takes time, so order it early. Expect about ¥4,000–5,000 a head, plus a ¥450 cover. In October 2026 one diner found the counter cramped and the room noisy, and another found the price high for the portions; most others praise the food.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: a sophisticated izakaya of sake and seasonal seafood, creative dishes such as the black-vinegar sweet and sour pork and the Shaoxing-wine squid, 20 sakes including rare labels from specialty shops; opened 11 April 2025.', philosophy: null, specialty: 'Black-vinegar sweet and sour pork; herb rolls; kamameshi.',
      anecdotes: [
        { text: '"The recommended Tomato Chuhai with black pepper was an unexpected combination, yet refreshing and addictive." — June 2026.', source: R + 'B530826337/' },
        { text: '"In particular, the mackerel and herb rolls were packed with flavor and delicious even without soy sauce!" — July 2026, the three signature dishes.', source: R + 'B531031069/' },
        { text: '"It takes a little time to prepare after ordering, but the result is well worth the wait!" — August 2026, of the kamameshi.', source: R + 'B532862594/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 大人居酒屋 ぽん、居酒屋・海鮮・創作料理、大阪市北区堂山町16-12 中通りレジャービル 102、東梅田駅から徒歩3分、月〜木・日・祝・祝後日17:00〜24:00 (L.O.23:30)、金・土・祝前日17:00〜2:00 (L.O.1:30)、予約可、チャージ450円、カード・電子マネー・QR 可、16席 (カウンター8、4名のテーブル2)、喫煙可、2025年4月11日オープン、厳選した鮮魚の創作料理、黒酢の酢豚、紹興酒のイカ、全国の日本酒20種、刺身と選べる釜めしのコース4,000円、和牛ユッケと季節の料理のコース5,000円、日本酒の飲み放題2,500円。口コミ(2026年6月〜10月): 刺身の盛り合わせ (3人で3,840円、いくら入り)、サバやイワシと薬味の巻物 (2人で1,980円)、黒酢の酢豚 (2人で2,560円)、赤エビ3尾1,350円、ぶりがり、カダイフのエビ、めひかりの天ぷら1,360円、肉みそのピーマン480円、豚の角煮、あさりの酒蒸し、レバーパテとバゲット、鮭といくらの釜めし (時間がかかる)、貝の出汁の麺1,000円、黒こしょうのトマトチューハイ、カウンターがせまく音がにぎやかという声、量のわりに高いという声、定休日なし。',
      confidence: 'medium', sources: [TB, R + 'B530826337/', R + 'B531031069/', R + 'B531982345/', R + 'B532862594/', R + 'B534739879/', R + 'B535332901/', R + 'B537218292/', R + 'B537578978/', R + 'B537770173/', R + 'B538446299/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'À la carte izakaya and two set courses (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町16-12 中通りレジャービル 102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町16番12号 (go) 10m. osaka_ashitani_panchi_doyama is 6 m away but at a different address (堂山町16-11 ハルビル), so this pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537770173/'],
    price_note: 'À la carte prices from an October 2026 review; course prices from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Black-vinegar sweet and sour pork (for two)', '¥2,560', 'À la carte', 'ask', 'no', 'October 2026.', 'kurozu_subuta'),
      it('', '', 'Sardine and herb rolls (for two)', '¥1,980', 'À la carte', 'ask', 'no', 'October 2026.', 'iwashi_roll'),
      it('', '', 'Sashimi platter (for three)', '¥3,840', 'À la carte', 'ask', 'no', 'October 2026.', 'sashimi'),
      it('', '', 'Course with sashimi and a choice of kamameshi', '¥4,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course_4000'),
    ] }, {
    cuisine: '鮮魚の創作料理と、珍しい銘柄もふくむ全国の日本酒約20種の居酒屋 (食べログ)・名物: 黒酢の酢豚 (2人で2,560円)、紹興酒のイカ、サバやイワシと薬味の巻物 (2人で1,980円) (食べログ、2026年)・いくら入りの刺身の盛り合わせ (3人で3,840円)、赤エビ3尾1,350円、ぶりがり、カダイフのエビ、めひかりの天ぷら1,360円、肉みそのピーマン480円、豚の角煮、あさりの酒蒸し、レバーパテとバゲット、注文してから炊く鮭といくらの釜めし、貝の出汁の麺1,000円、黒こしょうのトマトチューハイ (2026年6月〜10月)・コース (食べログ、税込): 刺身と選べる釜めし4,000円、和牛ユッケと季節の料理5,000円、日本酒の飲み放題は2,500円追加',
    neighborhood: '堂山町16-12、中通りレジャービルの102、堂山の裏通り。東梅田駅から3分',
    gf_detail: '要確認。グルテンの情報なし。黒酢の酢豚、カダイフのエビ、めひかりの天ぷら、レバーパテとバゲット、貝の出汁の麺が、刺身や釜めしといっしょにある。',
    vegan_detail: 'ヴィーガンではありません。魚介の居酒屋で、釜めしは出汁で炊く。',
    notes: '[居酒屋・堂山、大人のための魚と日本酒] 堂山の裏通りの16席の居酒屋で、2025年4月から、週末は2時まで。カジュアルと高級の間くらいで、日本酒は20種ほど。人気は三品: いくら入りの刺身の盛り合わせ、薬味たっぷりのサバやイワシの巻物、黒酢の酢豚。それから鮭といくらの釜めし (時間がかかるので早めに)。ひとり4,000〜5,000円ほどと、チャージ450円。2026年10月にはカウンターがせまく音がにぎやかだったという声や、量のわりに高いという声もあるが、ほとんどは料理をほめている。',
  });
}

// ================================================================ 北新地 うえはら
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27011008/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://kitashinchi-uehara.com/';
  const M = day(['17:30', '00:00']); const T = day(['11:30', '13:30'], ['17:30', '00:00']); const S = day(['17:30', '21:00']);
  put({
    id: 'osaka_kitashinchi_uehara_dojima', name: '北新地 うえはら (Kitashinchi Uehara)', category: 'OMNI',
    lat: 34.696946, lng: 135.497205, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Hotpots in a dashi of bonito, kombu and grilled kinmedai, finished with noodles; lunch has nyumen and soy-dressed seafood.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and whale hotpots in bonito dashi (operator site).',
    hours_raw: 'Mon 17:30–24:00 (last order 23:00); Tue–Fri 11:30–13:30 and 17:30–24:00 (last order 23:00); Sat 17:30–21:00 (last order 20:30); closed Sundays and holidays; after 20:00 à la carte only (Tabelog; operator site). Reservations accepted (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 20 seats: a counter of 10 and a sunken-floor private room for 3–10; non-smoking; wheelchair accessible; English menu and English-speaking staff (Tabelog).',
    hours: { 0: M, 1: T, 2: T, 3: T, 4: T, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-3-20, ground floor of CriceNikko薬師堂ビル, behind the Dojima Avanza building on the west side of Kitashinchi — 3 min from Kitashinchi Stn west exit, 2 min from Nishi-Umeda Stn exit 7-B',
    cuisine: 'Japanese restaurant of two hotpots (operator site) · "shabu-suki" of seasonal fish the head chef picks at the market each morning, in a dashi of freshly shaved bonito and kombu with grilled kinmedai bones; firefly squid shabu-shabu in spring (operator site; 2026) · whale "harihari-nabe" with rare cuts, sent direct from a whaling master in Taiji, Wakayama, ¥7,480 a head; whale course of seven dishes ¥16,500; whale sashimi (Tabelog; operator site; June 2026) · courses (Tabelog, tax included, 10% service extra): autumn hamo shabu-shabu ¥13,200; hamo, matsutake and Miyazaki beef ¥16,500; special selection ¥19,800 · after 20:00 à la carte sashimi, straw-grilled fish and kappo dishes (operator site) · weekday lunch only, ¥1,500: seafood bowl (yokowa, sea bream, amberjack, negitoro, shirasu), dashimaki with a meat sauce, nyumen, pickles and a house ice cream of the day (April–May 2026) · about ten sakes, some off the menu, and a sake-koji craft beer (operator site) · antique Ko-Imari, Kutani and Oribe ware (operator site)',
    website: OWN, gmaps: gm('北新地 うえはら'), menu_url: null,
    notes: "[Japanese · Dojima, fish shabu-shabu and whale hotpot] A white-wood counter restaurant on the west side of Kitashinchi, served on antique Ko-Imari and Kutani ware, with two signature hotpots: seasonal fish the head chef picks each morning, swished in a dashi of bonito, kombu and grilled kinmedai, and whale 'harihari-nabe' of rare cuts sent from Taiji in Wakayama (¥7,480 a head). Seasonal courses such as hamo shabu-shabu run ¥13,200–19,800 plus 10% service; after 20:00 you can order à la carte. Weekday lunch is a ¥1,500 bargain: a seafood bowl with thick slices, a meat-sauced dashimaki, nyumen and a house ice cream. English menu, English-speaking staff and wheelchair access.",
    chef_bio: { chef_name: null, roles: ['Head chef and owner (unnamed)', 'floor staff'], origin: null, background: 'Per the official site: the head chef picks seasonal fish at the market every morning; whale meat direct from a whaling master (網元) in 太地町, Wakayama; dishes served on antique Ko-Imari, Kutani and Oribe ware; about ten sakes including unlisted ones. A May 2026 diner found the owner running lunch alone. The Tabelog invoice number T7120001164445 is registered to 日本環境コンサルティング株式会社 at the shop\'s address (NTA invoice register, read 2026-11-02).', philosophy: null, specialty: 'Fish shabu-suki; whale harihari-nabe.',
      anecdotes: [
        { text: '"I think getting all this for JPY 1500 is an incredible deal." — April 2026, the seafood bowl lunch.', source: R + 'B526243237/' },
        { text: '"We also ordered whale sashimi as an extra, which was equally delightful, and our guests were very pleased." — June 2026, a business dinner for eight.', source: R + 'B531608497/' },
        { text: '"for dessert, you can choose from ice cream flavors like matcha, hojicha, black sesame, and coconut." — July 2026, a private booking.', source: R + 'B531965593/' },
      ],
      japanese_sources_summary: '公式サイト: 北新地 うえはら、北新地駅から徒歩3分、大将が目利きする旬魚のしゃぶしゃぶと希少部位の鯨のハリハリ鍋、繊細な一品、古伊万里・九谷焼・織部などの古器、大将が毎朝市場で選ぶ季節の魚の「しゃぶすき鍋」、削りたてのかつおと昆布に焼いた金目鯛のあらを加えた出汁、和歌山県太地町の網元から直送のくじら肉のハリハリ鍋、店主おすすめの隠れ酒をふくむ日本酒約10種、日本酒の麹のクラフトビール、厳選食材コース10品16,500円 (サ別)、20時以降はアラカルト、お造りや藁焼き、記念日のメッセージプレート、白木のカウンター、3〜10名の完全個室。食べログ (店舗会員): 北新地 うえはら、海鮮・しゃぶしゃぶ・日本料理、大阪市北区堂島1-3-20 CriceNikko薬師堂ビル 1F、月17:30〜24:00、火〜金11:30〜13:30と17:30〜24:00、土17:30〜21:00、日・祝休み、サービス料10%、カード・PayPay 可、20席 (カウンター10、掘りごたつの個室)、禁煙、車いす可、英語のメニューと英語を話すスタッフ、ハリハリ鍋7,480円、鯨のコース7品16,500円、秋の鱧しゃぶしゃぶのコース13,200円、鱧・松茸・Miyazaki の牛のコース16,500円、特選コース19,800円。インボイス登録は日本環境コンサルティング株式会社 (店と同じ住所)。口コミ(2026年4月〜7月): 平日のランチ1,500円 (海鮮丼、肉だし巻き、にゅう麺、小鉢、漬物、自家製アイス)、よこわ・鯛・ひらまさ・カンパチ・ネギトロ・釜揚げしらす、ランチは店主ひとり、アイスは抹茶・ほうじ茶・黒ごま・ココナッツなど、鱧のコース、鯨の刺身、鱧と豚のしゃぶしゃぶ、〆の麺。',
      confidence: 'medium', sources: [TB, OWN, R + 'B525721750/', R + 'B525784442/', R + 'B525881720/', R + 'B525924360/', R + 'B526243237/', R + 'B526366439/', R + 'B526620099/', R + 'B528262966/', R + 'B531608497/', R + 'B531965593/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu and English-speaking staff; the official site has an English version; a French-language Google review on the site praises the owner and server.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-20 CriceNikko薬師堂ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site (posts dated 2026-10-30); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 70m, within 150 m; nearest other record osaka_ishinabe_ryori_ken_dojima 17 m away at a different address (堂島1-3-23); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, OWN, R + 'B526243237/'],
    price_note: 'Hotpot and course prices from the Tabelog listing (tax included, 10% service extra); lunch from April–May 2026 reviews.', last_checked: TODAY, items: [
      it('ハリハリ鍋', '', 'Whale harihari-nabe (per person)', '¥7,480', 'Hotpots', 'ask', 'no', 'Tabelog; official site.', 'harihari'),
      it('', '', 'Whale course of seven dishes', '¥16,500', 'Courses', 'ask', 'no', 'Tabelog.', 'whale_course'),
      it('', '', 'Autumn hamo shabu-shabu course', '¥13,200', 'Courses', 'ask', 'no', 'Tabelog.', 'hamo_course'),
      it('', '', 'Weekday lunch: seafood bowl, dashimaki, nyumen, ice cream', '¥1,500', 'Lunch', 'ask', 'no', 'April–May 2026.', 'kaisendon_lunch'),
    ] }, {
    cuisine: '二つの鍋が自慢の和食店 (公式サイト)・大将が毎朝市場で選ぶ季節の魚の「しゃぶすき鍋」、削りたてのかつおと昆布に焼いた金目鯛のあらの出汁、春はホタルイカのしゃぶしゃぶ (公式サイト、2026年)・和歌山県太地町の網元から直送の希少部位の鯨の「ハリハリ鍋」ひとり7,480円、鯨のコース7品16,500円、鯨の刺身 (食べログ、公式サイト、2026年6月)・コース (食べログ、税込、サービス料10%別): 秋の鱧しゃぶしゃぶ13,200円、鱧・松茸・Miyazaki の牛16,500円、特選19,800円・20時以降はアラカルトでお造り、藁焼き、割烹料理 (公式サイト)・平日のランチのみ1,500円: 海鮮丼 (よこわ、鯛、カンパチ、ネギトロ、しらす)、肉の餡のだし巻き、にゅう麺、漬物、日替わりの自家製アイス (2026年4月〜5月)・日本酒は品書きにない隠れ酒をふくめ約10種、日本酒の麹のクラフトビール (公式サイト)・古伊万里、九谷焼、織部の古器 (公式サイト)',
    neighborhood: '堂島1-3-20、CriceNikko薬師堂ビルの1階、北新地の西側の堂島アバンザの裏。北新地駅西口から3分、西梅田駅7-B出口から2分',
    gf_detail: '要確認。グルテンの情報なし。かつおと昆布と焼いた金目鯛の出汁の鍋で、〆は麺。ランチはにゅう麺と醤油の海鮮。',
    vegan_detail: 'ヴィーガンではありません。かつおの出汁の魚と鯨の鍋 (公式サイト)。',
    notes: '[和食・堂島、魚しゃぶと鯨の鍋] 北新地の西側にある白木のカウンターの和食店で、古伊万里や九谷焼の器で出す。名物は二つの鍋: 大将が毎朝選ぶ季節の魚を、かつおと昆布と焼いた金目鯛の出汁にくぐらせるしゃぶすき鍋と、和歌山の太地町から届く希少部位の鯨のハリハリ鍋 (ひとり7,480円)。鱧しゃぶしゃぶなど季節のコースは13,200〜19,800円とサービス料10%、20時以降はアラカルトも。平日のランチは1,500円とお得で、大きな切り身の海鮮丼、肉の餡のだし巻き、にゅう麺、自家製アイス。英語のメニューと英語を話すスタッフ、車いすも可。',
  });
}

save();
