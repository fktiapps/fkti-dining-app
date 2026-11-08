// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 80 (2026-11-08).
//   + マルミヤJr. Marumiya Jr. (pork horumon standing bar and izakaya, Kawaramachi-Oike; coordinator 11-08: a sister concept of
//     マルミヤ亭 in data — a Kawaramachi standing bar vs the Kujo yakiniku — drafted)
//   + 的矢かき 志摩半島 Matoya Kaki Shima Hanto (Mie oysters, Sanjo-Takakura; rest)
//   + 京都つゆしゃぶCHIRIRI 四条烏丸 別邸 (tsuyushabu courses in private rooms, Shijo-Karasuma; rest)
//   + 酒楽 天 河原町五条店 Sakaho Gara Ten (izakaya with lunch sets, Kawaramachi-Gojo; rest)
//   Rest list (mod 6 = 1) after batch 79, nearest-first — skipped:
//   - 薩摩ごかもん 京都四条烏丸本店 26020861: large parent — DD Holdings (its site is dd-holdings.jp).
//   - ATELIER PAGES CAFE 26040889: brand already in data — ATELIER PAGES KYOTO (kyoto_atelier_pages).
//   - しゃぶ庵 祇園店 26040925: chain — six しゃぶ庵 shops in our crawls.
//   - Japanese cuisine Sagano (Hotel Nikko Princess Kyoto) 26004175: inside a big-chain hotel (Greg 2026-11-08 ruling).
//   - カスカード ゼスト御池店 26005519: chain — a Tabelog name search shows eight or more Cascade bakeries.
//   Brand check: queue-status.jsonl grepped for マルミヤ, 的矢, CHIRIRI, 酒楽 — no entries. CHIRIRI: three shops in our crawls (本店,
//   四条烏丸 別邸, 大阪梅田茶屋町店) — under the chain line, drafted. None of the four is in data (main 0cec926b, hidden records
//   included) by name.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-80');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26020861/', 'large parent: 薩摩ごかもん is a DD Holdings brand (dd-holdings.jp)');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26040889/', 'brand already in data: ATELIER PAGES (kyoto_atelier_pages)');
skip('https://tabelog.com/en/kyoto/A2601/A260301/26040925/', 'chain: six しゃぶ庵 shops in our crawls (島之内, 心斎橋, 祇園, 道頓堀EXE, 道頓堀, 黒門)');
skip('https://tabelog.com/en/kyoto/A2601/A260101/26004175/', 'inside a big-chain hotel (Greg 2026-11-08 ruling): Hotel Nikko Princess Kyoto');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26005519/', 'chain: Cascade bakery — a Tabelog name search (2026-11-08) lists eight or more shops');

// ================================================================ マルミヤJr. Marumiya Jr.
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26037925/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:30', '24:00']);
  put({
    id: 'kyoto_marumiya_jr', name: 'マルミヤJr. (Marumiya Jr.)', category: 'OMNI',
    lat: 35.01029757786919, lng: 135.76930178040925, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: horumon curry, noodles to finish and soy-based simmered dishes (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork and offal specialist (2025–2026 reviews).',
    hours_raw: 'Daily 16:30–24:00; closing days irregular (Tabelog). Reservations accepted (Tabelog). Seat charge ¥200 per person before tax (Tabelog original お座席はおひとり様200円（税別）のチャージあり). Cards (VISA, Master, JCB, AMEX, Diners), e-money (IC, iD, QUICPay) and PayPay (Tabelog). 28 places: 12 at tables, 6 at the counter and about 10 standing (Tabelog). Smoking allowed; e-cigarettes only at the standing counter (Tabelog). Renovated in 2025, reopening in July, with solid-wood tables (June 2025; May 2026); an August 2026 reviewer says the name has changed. Nakagawa building 1F on Kawaramachi above Sanjo; 1 min walk from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 22 July 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi, near Kyoto City Hall',
    cuisine: 'Pork and horumon izakaya with a standing counter, sister of the Kujo pork house マルミヤ亭 (2025–2026 reviews) · steamed pork, braised and boiled pig\'s trotters, pig\'s face, a sashimi platter, beef heart sashimi, omasum with spicy and salt-oil sauces, simmered tongue and liver, horumon skewers grilled on a shichirin, pork tenderloin, toro horumon, shin (October 2025–August 2026) · oyster potato salad, egg salad, grilled rice balls, horumon curry, noodles to finish (2025–2026 reviews) · all-you-can-drink courses about ¥6,000; the earlier ¥1,000 senbero set has been dropped (April 2025; May 2026) · about ¥3,000–6,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('マルミヤJr. 河原町'), menu_url: null,
    notes: '[Pork horumon bar · Kawaramachi by City Hall] The city-centre sister of Kujo\'s pork house マルミヤ亭: steamed pork and pig\'s trotters, offal sashimi, horumon grilled over charcoal and a pork-heavy menu, at tables, counter or standing. Freshly renovated; ¥200 seat charge; smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: a pork and horumon izakaya with standing seats opened 22 July 2022, the sister of マルミヤ亭 (kyoto_marumiya_tei) in Kujo; renovated and reopened in July 2025 (June 2025; May 2026). An August 2026 reviewer notes the restaurant\'s name has changed.',
      philosophy: null, specialty: 'Pig\'s trotters; horumon.',
      anecdotes: [
        { text: 'A March 2025 Saturday drinker had the then ¥1,000 senbero set of steamed pork, kimchi and bean sprouts with a draught beer.', source: R + 'B502210282/' },
        { text: 'A February 2026 diner, a Kujo pork-house regular, found the pig\'s trotters spot on and praised the beef heart sashimi.', source: R + 'B523196719/' },
        { text: 'A May 2026 returnee missed the senbero set but liked the renovation and its solid-wood tables.', source: R + 'B529002380/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・立ち飲み、中京区河原町通三条上る下丸屋町401-6 中川ビル 1F、地下鉄市役所前駅から徒歩1分、毎日 16:30〜24:00、不定休、予約可、お座席は1人200円 (税別) のチャージ、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー (交通系IC・iD・QUICPay)・PayPay 可、28席 (テーブル12、カウンター6、立ち飲み約10)、喫煙可 (立ち飲みは電子たばこのみ)、2022年7月22日開店。口コミ (2025年2月〜2026年8月、英語): 九条のマルミヤ亭の姉妹店、蒸し豚、豚足、豚の顔の煮物、刺身の盛り合わせ、ハツ刺し、センマイ、タンとレバーの煮込み、七輪のホルモン串、ヒレ、トロホルモン、すね、牡蠣のポテトサラダ、卵のサラダ、焼きおにぎり、ホルモンカレー、締めの麺、飲み放題のコース6,000円 (2025年4月)、1,000円のせんべろセットは終了 (2026年5月)、改装して7月に再開 (2025年6月)、店名が変わった (2026年8月)。',
      confidence: 'medium', sources: [TB, R + 'B461060087/', R + 'B487707765/', R + 'B502210282/', R + 'B507731554/', R + 'B514703515/', R + 'B523196719/', R + 'B529002380/', R + 'B530819078/', R + 'B532105856/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥200 seat charge; standing counter; smoking allowed; cards, IC and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条上る下丸屋町401-6 中川ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026; an August 2026 reviewer says the name has changed.' },
    pin_source: `Tabelog ${TB} (35.010298, 135.769302); cross-checked: GSI 京都府京都市中京区下丸屋町401番地 (lot) 39 m; nearest existing record 3.3 m (kyoto_meshiya_ebisu, 401-5); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B487707765/', TB],
    price_note: 'Course price from an April 2025 review; seat charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Braised pig\'s trotters', '', 'Pork', 'ask', 'no', '2025–2026 reviews.', 'tonsoku'),
      it('', '', 'Course with all-you-can-drink', '¥6,000', 'Courses', 'no', 'no', 'April 2025.', 'course'),
      it('', '', 'Seat charge (before tax)', '¥200', 'Charge', 'ask', 'no', 'Tabelog.', 'seat'),
    ] }, {
    cuisine: '九条の豚肉の店マルミヤ亭の姉妹店で、立ち飲みもある豚とホルモンの居酒屋 (2025〜2026年の口コミ)・蒸し豚、豚足、豚の顔、刺身の盛り合わせ、ハツ刺し、二種のたれのセンマイ、タンとレバーの煮込み、七輪で焼くホルモン串、ヒレ、トロホルモン、すね (2025年10月〜2026年8月)・牡蠣のポテトサラダ、卵のサラダ、焼きおにぎり、ホルモンカレー、締めの麺 (2025〜2026年の口コミ)・飲み放題のコース約6,000円、1,000円のせんべろセットは終了 (2025年4月、2026年5月)・3,000〜6,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '河原町、市役所のそば',
    gf_detail: 'グルテンフリー不可。ホルモンカレー、締めの麺、醤油の煮込み (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚とホルモンの専門店 (2025〜2026年の口コミ)。',
    notes: '[豚ホルモンの酒場・河原町、市役所のそば] 九条の豚肉の店マルミヤ亭の街なかの姉妹店。蒸し豚や豚足、ホルモンの刺身、炭火で焼くホルモンなど豚づくしを、テーブル、カウンター、立ち飲みで。改装したばかり。席料200円、喫煙可。',
  });
}

// ================================================================ 的矢かき 志摩半島 Matoya Kaki Shima Hanto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038681/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_matoya_kaki_shima_hanto', name: '的矢かき 志摩半島 (Matoya Kaki Shima Hanto)', category: 'OMNI',
    lat: 35.008595, lng: 135.76268, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Raw oysters with lemon may suit, but the house ponzu, fried oysters, croquettes and gratin are not wheat-free; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an oyster house with Matsusaka beef croquettes (2026 reviews).',
    hours_raw: 'Monday and Wednesday–Sunday 11:30–14:30 and 17:00–22:00; holidays 11:00–14:30 and 17:00–22:00; closed Tuesday (Tabelog). Reservations accepted (Tabelog). No service charge (Tabelog original なし). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 38 seats: a counter in front, four tables for four at the back by a courtyard, a private room for six (Tabelog; October 2026). Non-smoking (Tabelog). Shirotori building 1F on Sanjo east of Takakura, opposite the Museum of Kyoto; 4 min walk from Karasuma-Oike Stn (Tabelog; July 2026). Opened 9 December 2022 (Tabelog).',
    hours: { 0: L, 2: L, 3: L, 4: L, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-Takakura, opposite the Museum of Kyoto',
    cuisine: 'Oyster house of Matoya oysters and other produce from Shima in Mie Prefecture (2026 reviews) · raw Matoya oysters with lemon and a house ginger ponzu, vinegared oysters, fried oysters with tartar, grilled oysters, oyster gratin and dengaku; large rock oysters in summer, cut into three (March–October 2026) · lunch sets such as the Matoya oyster lunch, a Matsusaka beef croquette lunch ¥1,300, a croquette and menchi katsu lunch, an oyster set ¥2,700 (March–October 2026) · lunch about ¥1,000–3,000, dinner about ¥6,000–8,000 (Tabelog)',
    website: null, gmaps: gm('的矢かき 志摩半島 三条高倉'), menu_url: null,
    notes: '[Oyster house · Sanjo-Takakura] A calm Sanjo oyster house serving Matoya oysters from Mie raw with a ginger ponzu, vinegared, fried or grilled, plus summer rock oysters and good-value lunches like the Matsusaka beef croquette set. Counter in front, tables by a courtyard. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per reviewers: an oyster shop of Matoya in Mie Prefecture offering produce from Shima, opened 9 December 2022 (Tabelog), with a long counter and tables by a courtyard (2026 reviews).',
      philosophy: null, specialty: 'Raw Matoya oysters.',
      anecdotes: [
        { text: 'A June 2026 regular on a third rock-oyster season says each oyster is so big it is cut into three, and swears by the house ginger ponzu.', source: R + 'B508738530/' },
        { text: 'A July 2026 visitor coming out of the Museum of Kyoto opposite stopped for raw Matoya oysters and a glass of wine.', source: R + 'B531721160/' },
        { text: 'A September 2026 diner hunting for a proper potato-and-beef croquette lunch found one here, with a menchi katsu.', source: R + 'B536439927/' },
      ],
      japanese_sources_summary: '食べログ: かき・オイスターバー・居酒屋、中京区三条高倉東入桝屋町55 三条高倉白鳥ビル 1F、地下鉄烏丸御池駅から徒歩4分、月・水〜日 11:30〜14:30、17:00〜22:00、祝日 11:00〜14:30、17:00〜22:00、火曜休み、予約可、サービス料なし、カード可、電子マネー・QR 不可、38席、6名の個室、禁煙、2022年12月9日開店。口コミ (2026年3月〜10月、英語): 三重県志摩の的矢かきと食材、生がきにレモンと自家製の生姜ポン酢、酢がき、カキフライとタルタル、焼きがき、グラタン、田楽、夏は大きな岩がきを3つに切る、昼は的矢かきの定食、松阪牛のコロッケ定食1,300円、コロッケとメンチカツの定食、かきのセット2,700円、手前にカウンター、奥に中庭の見える4人掛け4卓、京都文化博物館の向かい。',
      confidence: 'medium', sources: [TB, R + 'B508421850/', R + 'B508738530/', R + 'B513185098/', R + 'B523803317/', R + 'B524760287/', R + 'B525892714/', R + 'B527227112/', R + 'B531721160/', R + 'B536439927/', R + 'B537892137/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No service charge; lunch sets; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条高倉東入桝屋町55 三条高倉白鳥ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008550, 135.762680) moved 5.0 m north to (35.008595, 135.762680): the Tabelog point is 2.7 m from kyoto_nichijo_sahan (same building, 3F), now 7.1 m; GSI 京都府京都市中京区桝屋町55番地 (lot) 22 m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527227112/', R + 'B537892137/'],
    price_note: 'Prices from May and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Matsusaka beef croquette lunch', '¥1,300', 'Lunch', 'no', 'no', 'May 2026.', 'croquette_lunch'),
      it('', '', 'Oyster lunch set (raw and fried oysters)', '¥2,700', 'Lunch', 'no', 'no', 'October 2026.', 'oyster_set'),
      it('', '', 'Raw Matoya oysters', '', 'Oysters', 'ask', 'no', '2026 reviews.', 'raw_oyster'),
    ] }, {
    cuisine: '三重県志摩の的矢かきと食材のかきの店 (2026年の口コミ)・生の的矢かきにレモンと自家製の生姜ポン酢、酢がき、タルタルのカキフライ、焼きがき、かきグラタン、田楽、夏は3つに切る大きな岩がき (2026年3〜10月)・昼は的矢かきの定食、松阪牛のコロッケ定食1,300円、コロッケとメンチカツの定食、かきのセット2,700円 (2026年3〜10月)・昼1,000〜3,000円ほど、夜6,000〜8,000円ほど (食べログ)',
    neighborhood: '三条高倉、京都文化博物館の向かい',
    gf_detail: '要確認。レモンの生がきは合う可能性があるが、ポン酢、カキフライ、コロッケ、グラタンは小麦なしではない。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。かきの店で松阪牛のコロッケも (2026年の口コミ)。',
    notes: '[かきの店・三条高倉] 三重の的矢かきを生で生姜ポン酢と、酢がき、フライ、焼きで出す落ち着いた三条のかきの店。夏は岩がき、昼は松阪牛のコロッケ定食などお得な定食も。手前にカウンター、奥に中庭の見えるテーブル。火曜休み。',
  });
}

// ================================================================ 京都つゆしゃぶCHIRIRI 四条烏丸 別邸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041633/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://chiriri-kyoto.myshopify.com/';
  const W = day(['11:30', '15:00'], ['17:00', '21:30']); const S = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_tsuyushabu_chiriri_bettei', name: '京都つゆしゃぶCHIRIRI 四条烏丸 別邸', category: 'OMNI',
    lat: 35.00127999787206, lng: 135.76031896032447, cuisine_type: 'sukiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: dashi-and-soy dipping broth, tempura and soba to finish (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork shabu-shabu, Omi beef sushi and sashimi courses (2026 reviews).',
    hours_raw: 'Monday–Saturday 11:30–15:00 (last drinks 14:30) and 17:00–21:30 (last orders food 20:30, drinks 21:00); Sunday and holidays 11:30–15:00 and 17:00–21:00; closing days vary (Tabelog). Reservations accepted; 100% charge for same-day cancellation (Tabelog). Service charge 10% (Tabelog original サービス料 10％). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 90 seats, all in private rooms for 2 to 20 (Tabelog; September 2026). A traditional building on a quiet street, 1 min walk from Shijo or Hankyu Karasuma Stn (Tabelog; September 2026). Opened 4 December 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shijo-Karasuma, Bukkoji',
    cuisine: 'Tsuyushabu — thin-sliced pork swished in hot water and eaten in a layered Japanese dashi with heaps of white leek and yuzu kosho — in a traditional house of private rooms (2026 reviews) · the Ibuki course ¥7,980: appetiser, three kinds of sashimi, Iwate Hakkinton pork belly tsuyushabu with vegetables, Omi beef nigiri, a seasonal dish such as tempura of late-season hamo, matsutake and eggplant, soba cooked in the broth to finish, dessert (September–October 2026) · about ¥8,000–10,000 (Tabelog)',
    website: WEB, gmaps: gm('京都つゆしゃぶCHIRIRI 四条烏丸 別邸'), menu_url: null,
    notes: '[Tsuyushabu · Shijo-Karasuma, private rooms] A calm traditional house of private rooms for Kyoto "tsuyushabu": paper-thin Iwate pork dipped in hot water, then in a gentle dashi with a mountain of white leek and yuzu kosho, in a course with sashimi, Omi beef nigiri and soba to finish. 10% service; full charge for same-day cancellations.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog and reviewers: the Shijo-Karasuma annex of Kyoto Tsuyushabu CHIRIRI, opened 4 December 2024, serving tsuyushabu courses in a traditional building of private rooms (2026 reviews). Our crawls show two other CHIRIRI shops, the main shop and one in Osaka.',
      philosophy: null, specialty: 'Hakkinton pork tsuyushabu.',
      anecdotes: [
        { text: 'A September 2026 lunch guest had the Ibuki course with Omi beef nigiri and Iwate Hakkinton pork, finding the fatty belly surprisingly light.', source: R + 'B535326208/' },
        { text: 'An October 2026 diner noted the pork is sliced to 0.8 mm and blooms like white flowers in the hot water; the Ibuki course was ¥7,980.', source: R + 'B536847652/' },
        { text: 'A September 2026 guest brought a mother to lunch and found the leek-heavy tsuyushabu easy for older diners.', source: R + 'B536219126/' },
      ],
      japanese_sources_summary: '食べログ: しゃぶしゃぶ・すき焼き・日本料理、下京区仏光寺通烏丸東入上柳町325、地下鉄四条駅・阪急烏丸駅から徒歩1分、月〜土 11:30〜15:00 (飲み物 L.O.14:30)、17:00〜21:30 (L.O.料理20:30、飲み物21:00)、日・祝日 11:30〜15:00、17:00〜21:00、不定休、予約可、当日キャンセルは100%、サービス料10%、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・PayPay 可、電子マネー不可、90席、個室 (2〜20名)、2024年12月4日開店、公式サイトあり。口コミ (2026年9月〜10月、英語): つゆしゃぶ (0.8mm の薄切りの豚をお湯にくぐらせ、白ねぎと柚子胡椒たっぷりの何段階も重ねただしで)、Ibuki コース7,980円 (前菜、刺身3種、岩手の Hakkinton 豚のばらのつゆしゃぶと野菜、近江牛のにぎり、名残り鱧・松茸・かぼちゃ・なすの天ぷらなど季節の一品、締めのそば、デザート)、全室個室、落ち着いた和の建物。',
      confidence: 'medium', sources: [TB, WEB, R + 'B535226171/', R + 'B535326208/', R + 'B535641644/', R + 'B536055910/', R + 'B536219126/', R + 'B536779222/', R + 'B536847652/', R + 'B537032105/', R + 'B537523022/', R + 'B537663922/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private rooms; 10% service; 100% same-day cancellation; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区仏光寺通烏丸東入上柳町325',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001280, 135.760319); cross-checked: GSI 京都府京都市下京区上柳町325番地 (lot) 18 m; nearest existing record 57.6 m (kyoto_tachinomi_torizuki); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536847652/'],
    price_note: 'Price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Ibuki course (Hakkinton pork tsuyushabu, Omi beef nigiri)', '¥7,980', 'Courses', 'no', 'no', 'October 2026.', 'ibuki'),
    ] }, {
    cuisine: '個室の和の建物で、ごく薄い豚をお湯にくぐらせ、白ねぎと柚子胡椒たっぷりのだしで食べる「つゆしゃぶ」(2026年の口コミ)・Ibuki コース7,980円: 前菜、刺身3種、岩手の Hakkinton 豚のばらのつゆしゃぶと野菜、近江牛のにぎり、名残り鱧・松茸・なすの天ぷらなど季節の一品、だしで煮る締めのそば、デザート (2026年9〜10月)・8,000〜10,000円ほど (食べログ)',
    neighborhood: '四条烏丸、仏光寺',
    gf_detail: 'グルテンフリー不可。だしと醤油のつけだし、天ぷら、締めのそば (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚しゃぶ、近江牛のにぎり、刺身のコース (2026年の口コミ)。',
    notes: '[つゆしゃぶ・四条烏丸、全室個室] 落ち着いた和の建物の個室で京都の「つゆしゃぶ」。薄い岩手の豚をお湯にくぐらせ、たっぷりの白ねぎと柚子胡椒のやさしいだしで、刺身や近江牛のにぎり、締めのそばのコースとともに。サービス料10%、当日キャンセルは全額。',
  });
}

// ================================================================ 酒楽 天 河原町五条店 Sakaho Gara Ten
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26003437/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://sakahogaraten-kawaramatigojyouten-izakaya-kiyomizu-gojo.com';
  const W = day(['11:30', '14:00'], ['17:30', '24:00']);
  put({
    id: 'kyoto_sakaho_gara_ten_gojo', name: '酒楽 天 河原町五条店 (Sakaho Gara Ten)', category: 'OMNI',
    lat: 34.99613458787751, lng: 135.7671763002677, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: tempura, croquettes, chicken katsu, Kyushu soy sauce and udon to finish (2018–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, horse sashimi and motsu-nabe (Tabelog; 2023–2026 reviews).',
    hours_raw: 'Monday–Saturday 11:30–14:00 (last order 13:30) and 17:30–24:00 (Tabelog). Tabelog also lists Sunday and holidays 17:30–24:00 but says Sundays are usually a day off, open for private bookings or in busy periods, so Sunday is left out here; holidays 17:30–24:00 (Tabelog). Reservations accepted; same-day, after 19:30 the next day and groups of 11 or more by phone (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), e-money and QR (Tabelog). 39 seats: 8 at the counter and sunken-kotatsu tables; a semi-private room for 6; private hire for over 30 (Tabelog). Smoking allowed on weekdays; no smoking inside on Saturdays, Sundays and holidays, with a smoking area outside (Tabelog). Kyoei Daiichi building B1F, 2 min walk from Keihan Kiyomizu-Gojo Stn (Tabelog). Opened 8 April 2002 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Gojo, near Kiyomizu-Gojo',
    cuisine: 'Long-running izakaya of seasonal fish with Kyushu soy sauce and horse sashimi (Tabelog) · sashimi boat platters, premium horse sashimi with mane and heart, squid tempura, yuba sashimi, nameko, agedashi tofu, whole sanma in autumn, motsu-nabe; udon to finish (2023–2026 reviews) · weekday lunch sets such as crab cream croquette ¥850, chicken katsu, daily specials like chicken with yuzu-pepper sauce; coffee +¥100 (2018–2025 reviews) · all-you-can-drink courses for groups (September 2026) · lunch under ¥1,000, dinner about ¥4,000–6,000 (Tabelog; 2023–2026 reviews)',
    website: WEB, gmaps: gm('酒楽 天 河原町五条'), menu_url: null,
    notes: '[Izakaya · Kawaramachi-Gojo, basement] A friendly basement izakaya open since 2002: sashimi with sweet Kyushu soy, horse sashimi, seasonal fish and motsu-nabe at night, and cheap weekday lunch sets for local office workers. Smoking allowed on weekdays only. Sunday hours vary.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: an izakaya of seasonal ingredients opened 8 April 2002 near Kiyomizu-Gojo, known for sashimi with Kyushu soy sauce and horse sashimi. A September 2026 reviewer who often holds gatherings here praises the friendly owner.',
      philosophy: 'Seasonal ingredients (Tabelog).', specialty: 'Horse sashimi; sashimi platter.',
      anecdotes: [
        { text: 'A March 2026 solo traveller from Kanto, turned away everywhere for two hours on a weekend, finally found a seat here for squid tempura and yuba sashimi.', source: R + 'B524269853/' },
        { text: 'A September 2026 group of ten on an all-you-can-drink course got a whole sanma on the sashimi plate, and the owner treated the group to ice cream.', source: R + 'B535647515/' },
        { text: 'A December 2025 business traveller found it a quick izakaya lunch but hard going as a non-smoker.', source: R + 'B518342215/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・もつ鍋、下京区西橋詰町796 京栄第一ビル B1F、京阪清水五条駅から徒歩約2分、月〜土 11:30〜14:00 (L.O.13:30)、17:30〜24:00、日・祝日 17:30〜24:00 と記載しつつ日曜は基本休み (貸切や繁忙期は営業)、予約可 (当日・翌日19:30以降・11名以上は電話で)、カード (VISA・Master・JCB・AMEX・Diners・銀聯)・電子マネー・QR 可、39席 (カウンター8、掘りごたつ)、6名の半個室、30名以上で貸切可、喫煙可 (土日祝日は店内終日禁煙、店外に喫煙所)、2002年4月8日開店、九州の醤油の刺身と上馬刺し。口コミ (2018年8月〜2026年9月、英語): 刺身の舟盛り、馬のたてがみとハツ、いかの天ぷら、湯葉の刺身、なめこ、揚げ出し豆腐、秋のさんま、締めのうどん、昼のカニクリームコロッケ定食850円、チキンカツ、柚子胡椒のたれの鶏の日替わり、コーヒー +100円、飲み放題のコース、気さくな店主 (2026年9月)、喫煙できる店で非喫煙者にはつらい (2025年12月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B376136285/', R + 'B411871937/', R + 'B462204432/', R + 'B463712223/', R + 'B475250557/', R + 'B517292694/', R + 'B518342215/', R + 'B524269853/', R + 'B535647515/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed on weekdays; phone for same-day bookings; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西橋詰町796 京栄第一ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (34.996135, 135.767176); cross-checked: GSI 京都府京都市下京区西橋詰町796番地 (lot) 21 m; nearest existing record 4.4 m (kyoto_2eme_maison, 794); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B463712223/'],
    price_note: 'Price from a January 2023 review.', last_checked: TODAY, items: [
      it('', '', 'Crab cream croquette lunch set', '¥850', 'Lunch', 'no', 'no', 'January 2023.', 'croquette'),
      it('', '', 'Premium horse sashimi', '', 'Sashimi', 'ask', 'no', 'November 2023.', 'basashi'),
    ] }, {
    cuisine: '九州の醤油の刺身と馬刺しの、長く続く季節の魚の居酒屋 (食べログ)・刺身の舟盛り、たてがみとハツの上馬刺し、いかの天ぷら、湯葉の刺身、なめこ、揚げ出し豆腐、秋のさんま、もつ鍋、締めのうどん (2023〜2026年の口コミ)・平日の昼はカニクリームコロッケ定食850円、チキンカツ、柚子胡椒のたれの鶏など日替わり、コーヒー +100円 (2018〜2025年の口コミ)・団体向けの飲み放題のコース (2026年9月)・昼1,000円未満、夜4,000〜6,000円ほど (食べログ、2023〜2026年の口コミ)',
    neighborhood: '河原町五条、清水五条のそば',
    gf_detail: 'グルテンフリー不可。天ぷら、コロッケ、チキンカツ、九州の醤油、締めのうどん (2018〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。刺身、馬刺し、もつ鍋 (食べログ、2023〜2026年の口コミ)。',
    notes: '[居酒屋・河原町五条、地下] 2002年から続く気さくな地下の居酒屋。夜は甘い九州醤油の刺身、馬刺し、季節の魚、もつ鍋、平日の昼は近くで働く人向けの安い定食。喫煙は平日のみ可。日曜の営業は不定。',
  });
}

save();
