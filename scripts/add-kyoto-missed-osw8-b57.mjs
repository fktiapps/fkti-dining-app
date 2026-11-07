// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 57.
//   + コイコイ Koikoi (late-opening yakitori and kushikatsu izakaya on Kiyamachi; rest)
//   + 燻吟 かず家 Ibushigin Kazuya (smoked dishes and Japanese sake by the BAL building; rest)
//   + 焼きとり・釜飯 いろはかるた 木屋町本店 Iroha Karuta Kiyamachi (big obanzai, yakitori and kamameshi izakaya; rest)
//   + 肉処 だん炉 京都先斗町店 Nikudokoro Danro (wagyu yakiniku off Pontocho; rest)
//   Rest list (mod 6 = 1) after batch 56, nearest-first — skipped:
//   - 京丹波 錦市場本店 26016931: chain — kyotanba.co.jp/shops (opened 2026-11-07) lists eight 京丹波 shops (Kyoto, Osaka,
//     Nara, Kamakura, Yufuin, Sasayama).
//   Same-name check, same brand or operator only: コイコイ — one (民藝とタイ料理 コイコイ商店 is a different name and genre).
//   かず家 — one. いろはかるた — two in our crawls (木屋町本店 and 京都駅前店); a web search found only these two; one October
//   2025 reviewer calls it a Kyoto-only chain — drafted with a doubt. だん炉 — one in our crawls; a search snippet mentions a
//   Shinsaibashi sister (肉匠 だん炉), not opened — drafted. None is in data/kyoto.json (main 8fd265cb) by name or address
//   (下樵木町198-2, 北車屋町276 永吉ビル1F, 下樵木町197-2, 下憔木町199-1 — BARAMEE in data is at 199-6).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-57');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26016931/', 'chain: eight 京丹波 shops listed on kyotanba.co.jp/shops');

// ================================================================ コイコイ Koikoi
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26012965/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '24:00']); const L = day(['17:00', '27:00']);
  put({
    id: 'kyoto_koikoi_kiyamachi', name: 'コイコイ (Koikoi)', category: 'OMNI',
    lat: 35.00607409787232, lng: 135.77070433036562, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: kushikatsu, yakitori with tare, fries (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakitori, tsukune with raw egg, sashimi, clam soup (2024–2026 reviews).',
    hours_raw: 'Monday–Thursday, Sunday and holidays 17:00–24:00 (last order 23:30); Friday, Saturday and the day before a holiday 17:00–3:00 (last order 2:30); irregular closing days (Tabelog). Reservations accepted, online too (Tabelog; January 2026). Appetizer charge ¥330 — a clam soup (Tabelog original お通し代330円頂戴しております; 2024–2026 reviews). Cards (VISA, Master, JCB, Diners) and e-money; Tabelog says no QR, a June 2026 reviewer used PayPay. 75 seats with kamakura-like semi-private booths; private hire for 25–50 (Tabelog; December 2024). Smoking allowed (October 2025). On Higashi-Kiyamachi north of Shijo; 5 min walk from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: L, 5: L, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Shijo — 5 min walk from Kawaramachi Stn',
    cuisine: 'Casual yakitori and kushikatsu izakaya, open till 3 a.m. at weekends (Tabelog; 2024–2026 reviews) · clam soup as the appetizer; thick-cut sashimi platters; tsukune with raw egg, liver and other skewers; kushikatsu; dashimaki; beef tofu; fries (2024–2026 reviews) · Kirin draft, bakudan lemon sour and mega-size sours (2024–2026 reviews) · about ¥2,000–5,000 (Tabelog; 2024–2026 reviews)',
    website: null, gmaps: gm('コイコイ 木屋町'), menu_url: null,
    notes: '[Izakaya · Kiyamachi north of Shijo, late at weekends] A roomy, casual skewer izakaya with snow-hut-style booths, easy to book on a busy night: a warming clam soup to start, thick-cut sashimi, tsukune with raw egg, kushikatsu and big sours, open till 3 a.m. on Fridays and Saturdays. Some found the skewer choice thin and à la carte pricey. Smoking allowed; ¥330 appetizer.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a yakitori, kushikatsu and izakaya of 75 seats on Higashi-Kiyamachi, open late at weekends. Reviewers in 2024–2026 describe friendly staff and semi-private rooms shaped like kamakura snow huts.',
      philosophy: null, specialty: 'Clam soup appetizer; thick-cut sashimi.',
      anecdotes: [
        { text: 'An April 2024 pair celebrating small wins at the Tenno Sho were surprised by a clam soup appetizer and ordered a second bakudan lemon sour.', source: R + 'B484035139/' },
        { text: 'A January 2026 Saturday-night diner, turned away elsewhere, booked by phone and was seated at once — but found the skewer choice limited, with no chicken skin.', source: R + 'B520560915/' },
        { text: 'A June 2026 pair spent about ¥10,000 and found the drink cups small and à la carte prices high.', source: R + 'B529462029/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥・串揚げ・居酒屋、中京区東木屋町通四条上る二丁目下樵木町198-2、阪急河原町駅から徒歩5分、月〜木・日・祝 17:00〜24:00 (L.O.23:30)、金・土・祝前日 17:00〜翌3:00 (L.O.2:30)、不定休、予約可、お通し代330円、カード (VISA・Master・JCB・Diners)・電子マネー可、QR 不可 (2026年6月の口コミでは PayPay 可)、75席、貸切25〜50名。口コミ (2018年1月、2024年1月〜2026年6月、英語): お通しはあさりのお吸い物、厚切りの刺身の盛り合わせ、卵黄のつくね、レバー、串カツ、だし巻き、肉豆腐、フライドポテト、キリンの生、ばくだんレモンサワー、メガサイズのサワー、かまくらのような半個室、喫煙可、串の種類が少なく鶏皮がなかったとの声 (2026年1月)、カップが小さく単品が高めとの声 (2026年6月)。',
      confidence: 'medium', sources: [TB, R + 'B478460325/', R + 'B484035139/', R + 'B494380540/', R + 'B497371690/', R + 'B506813775/', R + 'B515408823/', R + 'B520560915/', R + 'B524451491/', R + 'B529462029/', R + 'B529865100/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual and lively; smoking allowed; ¥330 appetizer charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東木屋町通四条上る二丁目下樵木町198-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through June 2026.' },
    pin_source: `Tabelog ${TB} (35.006074, 135.770704); GSI gives the same point for 下樵木町197, 198 and 199 (block-level), so kept the Tabelog pin; kyoto_thai_kitchen_baramee (199-6) is 5.4 m away; checked against main 8fd265cb; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the appetizer charge is priced (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Appetizer (clam soup)', '¥330', 'Charge', 'ask', 'no', 'Tabelog; 2024–2026 reviews.', 'otoshi'),
      it('', '', 'Tsukune with raw egg', '', 'Skewers', 'no', 'no', 'October 2025.', 'tsukune'),
    ] }, {
    cuisine: '週末は深夜3時まで開いている気軽な焼鳥と串カツの居酒屋 (食べログ、2024〜2026年の口コミ)・お通しにあさりのお吸い物、厚切りの刺身の盛り合わせ、卵黄のつくねやレバーなどの串、串カツ、だし巻き、肉豆腐、フライドポテト (2024〜2026年の口コミ)・キリンの生、ばくだんレモンサワー、メガサイズのサワー (2024〜2026年の口コミ)・2,000〜5,000円ほど (食べログ、2024〜2026年の口コミ)',
    neighborhood: '四条の北の木屋町。河原町駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。串カツ、たれの焼鳥、フライドポテト (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼鳥、卵黄のつくね、刺身、あさりのお吸い物 (2024〜2026年の口コミ)。',
    notes: '[居酒屋・四条の北の木屋町、週末は深夜まで] かまくらのような半個室のある広く気軽な串の居酒屋。混む夜でも予約しやすい。最初にあさりのお吸い物、厚切りの刺身、卵黄のつくね、串カツ、大きなサワー。金土は深夜3時まで。串の種類が少ない、単品が高いと感じた客も。喫煙可、お通し330円。',
  });
}

// ================================================================ 燻吟 かず家 Ibushigin Kazuya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26026729/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '24:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'kyoto_ibushigin_kazuya', name: '燻吟 かず家 (Ibushigin Kazuya)', category: 'OMNI',
    lat: 35.00641369787177, lng: 135.76966435036977, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Smoked dishes — potato with butter and corn, black edamame, potato salad, salmon with iburi-gakko tartar — and meat miso; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Smoked black edamame and other vegetable dishes exist, but butter, meat miso and fish are common (2026 reviews).',
    hours_raw: 'Monday–Saturday and holidays 17:00–24:00 (last order 23:30); Sunday 17:00–23:00 (last order 22:30) (Tabelog). Reservations accepted; busy at weekends (Tabelog; May 2026). The appetizer is a smoked snack served with a small glass of sake (2026 reviews). First drink ordered with staff, then by QR code (September 2026). Cards, e-money and QR (Tabelog). 32 seats: 7 at the counter, tables and high tables; non-smoking (Tabelog). In front of the south exit of the BAL building, off Kawaramachi south of Sanjo; 4 min walk from Hankyu Kawaramachi Stn (Tabelog). Opened 6 December 2015 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Sanjo, by the BAL building',
    cuisine: 'Izakaya of smoked dishes and Japanese sake, with a monthly sake list, tasting flights and a choice of sake cups (2026 reviews) · smoked potato with butter, corn and garlic; smoked black edamame; smoked potato salad; smoked salmon with iburi-gakko tartar under a smoke-filled glass lid; meat miso; vanilla ice cream with sansho (July–October 2026) · sake by the glass or flight, e.g. Senkin; whisky; all-you-can-drink available (May–October 2026) · about ¥3,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('燻吟 かず家'), menu_url: null,
    notes: '[Sake izakaya · Kawaramachi by BAL, smoked dishes] A bright, sake-mad izakaya where even the appetizer — smoked salmon with iburi-gakko under a smoky glass dome — comes with a little sake. Smoked potato with butter and corn, smoked edamame and a long list of sake by the glass or in flights, with your pick of cup. One May 2026 guest was steered to whisky instead of sake. Non-smoking.',
    chef_bio: { chef_name: null, roles: ['Kitchen and sake staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an izakaya, sake bar and Japanese restaurant opened 6 December 2015 by the BAL building. Reviewers in 2026 describe smoked dishes paired with Japanese sake, staff who recommend sake to taste, and 80s–90s music.',
      philosophy: 'Smoked dishes paired with sake from the first drink (2026 reviews).', specialty: 'Smoked potato with butter and corn; sake flights.',
      anecdotes: [
        { text: 'A September 2026 first-timer opened the glass lid on the appetizer — smoked salmon with iburi-gakko tartar, with a sake — to a burst of smoky aroma.', source: R + 'B535371794/' },
        { text: 'A September 2026 group of six enjoyed picking a sake cup each.', source: R + 'B535715250/' },
        { text: 'A May 2026 guest who came for sake was recommended whisky instead.', source: R + 'B529230747/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本酒バー・日本料理、中京区河原町通三条下ル二丁目東入ル北車屋町276 永吉ビル1F、阪急河原町駅から徒歩4分、BALの南口の前、月〜土・祝 17:00〜24:00 (L.O.23:30)、日 17:00〜23:00 (L.O.22:30)、予約可、カード・電子マネー・QR 可、32席 (カウンター7、テーブル16、ハイテーブル8)、禁煙、2015年12月6日開店。口コミ (2026年3月〜10月、英語): 燻製料理と日本酒、お通しは燻製のつまみに日本酒付き、燻製ポテトバターコーン、燻製の黒枝豆、燻製ポテトサラダ、いぶりがっこのタルタルの燻製サーモン (ガラスの蓋)、肉味噌、山椒のバニラアイス、月替わりの日本酒、飲み比べ、Senkin、おちょこを選べる、最初の1杯のあとは QR 注文、飲み放題あり、80〜90年代の音楽、日本酒目当てでウイスキーを勧められたとの声 (2026年5月)。',
      confidence: 'medium', sources: [TB, R + 'B504250730/', R + 'B525401174/', R + 'B529230747/', R + 'B531214422/', R + 'B535223898/', R + 'B535371794/', R + 'B535715250/', R + 'B535998345/', R + 'B536134128/', R + 'B537979184/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering after the first drink; staff help choose sake; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通三条下ル二丁目東入ル北車屋町276 永吉ビル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006414, 135.769664); cross-checked: GSI 京都府京都市中京区北車屋町276番地 (lot) 9 m; nearest Kyoto record 22 m away; checked against main 8fd265cb; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504250730/', R + 'B536134128/'],
    price_note: 'Dish names from 2026 reviews; no prices given.', last_checked: TODAY, items: [
      it('', '', 'Smoked potato with butter and corn', '', 'Smoked', 'ask', 'no', 'October 2026.', 'potato'),
      it('', '', 'Smoked black edamame', '', 'Smoked', 'ask', 'ask', 'September 2026.', 'edamame'),
      it('', '', 'Sake tasting flight', '', 'Sake', 'gf', 'ask', 'September 2026.', 'flight'),
    ] }, {
    cuisine: '燻製料理と日本酒の居酒屋。月替わりの日本酒、飲み比べ、おちょこを選べる (2026年の口コミ)・燻製ポテトのバターコーンにんにく風味、燻製の黒枝豆、燻製ポテトサラダ、ガラスの蓋に煙をこめたいぶりがっこのタルタルの燻製サーモン、肉味噌、山椒のバニラアイス (2026年7〜10月)・グラスや飲み比べの日本酒、例: Senkin、ウイスキー、飲み放題もあり (2026年5〜10月)・3,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '三条の南の河原町、BALのそば',
    gf_detail: '要確認。燻製のポテトのバターコーン、黒枝豆、ポテトサラダ、いぶりがっこのタルタルのサーモン、肉味噌。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。燻製の黒枝豆など野菜の料理もあるが、バター、肉味噌、魚が多い (2026年の口コミ)。',
    notes: '[日本酒の居酒屋・BALそばの河原町、燻製] お通しのいぶりがっこのタルタルの燻製サーモン (煙をこめたガラスの蓋) にまで日本酒が付く、明るい日本酒好きの居酒屋。燻製ポテトのバターコーン、燻製の枝豆、グラスや飲み比べの日本酒をおちょこを選んで。2026年5月の客は日本酒ではなくウイスキーを勧められた。禁煙。',
  });
}

// ================================================================ いろはかるた 木屋町本店 Iroha Karuta
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26001139/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '24:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'kyoto_iroha_karuta_kiyamachi', name: '焼きとり・釜飯 いろはかるた 木屋町本店 (Iroha Karuta Kiyamachi)', category: 'OMNI',
    lat: 35.00613345520741, lng: 135.77069556758346, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: tempura, yakitori with tare, zaru soba, bacon-wrapped mochi (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: yakitori, salmon and ikura kamameshi, dashi-based obanzai (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday and the day before a holiday 17:00–24:00 (last order 23:15); Sunday 17:00–23:00 (last order 22:15); open all year (Tabelog). Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). 206 seats over several floors, groups up to 90; tatami private rooms for 10 on the 2F and 20 on the 3F (Tabelog). Staff invite passers-by in from the street (May 2026). On Higashi-Kiyamachi north of Shijo; 4 min walk from Keihan Sanjo or Gion-Shijo Stn (Tabelog). A sister shop by Kyoto Station (our crawls; September 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Shijo — 4 min walk from Sanjo or Gion-Shijo Stn',
    cuisine: 'Large Kyoto-style izakaya of obanzai, yakitori and kamameshi (2025–2026 reviews) · kamameshi cooked at the table in about 30 minutes, e.g. bamboo shoot or salmon and ikura (May and August 2026) · yakitori such as heart with tare and skin with salt; tempura of Kujo negi, bamboo shoot, eggplant and corn; yuba sashimi; grilled squid; bacon-wrapped mochi with cheese; zaru soba (2025–2026 reviews) · about ¥2,000–4,000 (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('いろはかるた 木屋町本店'), menu_url: null,
    notes: '[Izakaya · Kiyamachi north of Shijo, kamameshi and obanzai] A big, easy-to-get-into Kyoto izakaya over several floors with tatami rooms for groups: obanzai, yuba sashimi, Kujo-negi tempura, yakitori, and kamameshi cooked at the table — order early, it takes 30 minutes. Some found it chain-like and not especially Kyoto. Open daily.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: the main shop of いろはかるた, an izakaya of 206 seats on Higashi-Kiyamachi; a second shop by Kyoto Station is in our crawls. Reviewers in 2025–2026 describe a Kyoto-only chain with Kyoto touches, friendly staff and quick seating.',
      philosophy: null, specialty: 'Kamameshi; obanzai.',
      anecdotes: [
        { text: 'A May 2026 business traveller waited about 30 minutes, timer in hand, for bamboo-shoot and salmon-and-ikura kamameshi cooked at the table.', source: R + 'B528361268/' },
        { text: 'A December 2025 first-timer liked the variety and prices but found it not very Kyoto.', source: R + 'B519507303/' },
        { text: 'A September 2026 regular since the Kyoto Station shop ten years earlier came in late just for zaru soba and was welcomed with a smile.', source: R + 'B535372805/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・焼鳥・日本料理、中京区東木屋町四条上ル2下樵木町197-2、京阪三条駅・祇園四条駅から徒歩4分、月〜土・祝前日 17:00〜24:00 (L.O.23:15)、日 17:00〜23:00 (L.O.22:15)、年中無休、予約可、カード・電子マネー・QR 可、206席、最大90名、2階 座敷個室10名・3階 座敷個室20名。口コミ (2025年6月〜2026年9月、英語): 京都だけのチェーンとの声、京都駅前店もある、おばんざい、席で炊く釜飯 (約30分、たけのこ、鮭いくら)、ハツのたれ、皮の塩、九条ねぎ・たけのこ・なす・とうもろこしの天ぷら、湯葉刺し、いか焼き、ベーコン巻きの餅チーズ、ざるそば、店員が店先で呼び込み、あまり京都らしくないとの声 (2025年12月)。',
      confidence: 'medium', sources: [TB, R + 'B514870506/', R + 'B519507303/', R + 'B520295870/', R + 'B520416353/', R + 'B524128332/', R + 'B527643261/', R + 'B528361268/', R + 'B531616953/', R + 'B533657245/', R + 'B535372805/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large and easy to get into; tatami rooms for groups; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区東木屋町四条上ル2下樵木町197-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006133, 135.770696); GSI gives the same point for 下樵木町197, 198 and 199 (block-level), so kept the Tabelog pin; コイコイ (this batch) is 6.6 m away and kyoto_thai_kitchen_baramee 11.5 m; checked against main 8fd265cb; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528361268/', R + 'B533657245/'],
    price_note: 'Dish names from 2026 reviews; no prices given.', last_checked: TODAY, items: [
      it('', '', 'Salmon and ikura kamameshi', '', 'Kamameshi', 'ask', 'no', 'May and August 2026.', 'kamameshi'),
      it('', '', 'Yuba sashimi', '', 'Obanzai', 'ask', 'ask', 'May 2026.', 'yuba'),
    ] }, {
    cuisine: 'おばんざい、焼鳥、釜飯の大きな京都風の居酒屋 (2025〜2026年の口コミ)・席で約30分かけて炊く釜飯、例: たけのこ、鮭いくら (2026年5月・8月)・ハツのたれや皮の塩などの焼鳥、九条ねぎ・たけのこ・なす・とうもろこしの天ぷら、湯葉刺し、いか焼き、ベーコン巻きの餅チーズ、ざるそば (2025〜2026年の口コミ)・2,000〜4,000円ほど (食べログ、2025〜2026年の口コミ)',
    neighborhood: '四条の北の木屋町。三条駅・祇園四条駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。天ぷら、たれの焼鳥、ざるそば、ベーコン巻きの餅 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼鳥、鮭いくらの釜飯、だしのおばんざい (2025〜2026年の口コミ)。',
    notes: '[居酒屋・四条の北の木屋町、釜飯とおばんざい] 数フロアに座敷の個室もある、入りやすく大きな京都の居酒屋。おばんざい、湯葉刺し、九条ねぎの天ぷら、焼鳥、席で炊く釜飯 (30分かかるので早めに)。チェーンのようであまり京都らしくないと感じた客も。毎日営業。',
  });
}

// ================================================================ 肉処 だん炉 京都先斗町店 Nikudokoro Danro
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037613/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '23:00']); const WE = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_nikudokoro_danro_pontocho', name: '肉処 だん炉 京都先斗町店 (Nikudokoro Danro Kyoto Pontocho)', category: 'OMNI',
    lat: 35.00599282787248, lng: 135.77105942036454, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: yakiniku with sauces, meat sushi, course dishes (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2023–2026 reviews).',
    hours_raw: 'Monday–Friday and the day before or after a holiday 17:00–23:00 (last orders food 22:00, drinks 22:30); Saturday, Sunday and holidays also 11:30–14:00 (last order 13:30); other irregular closures (Tabelog). Reservations accepted; courses cancelled after 15:00 on the day are charged 50%, table bookings cancelled after 17:00 ¥1,500 per person (Tabelog). Appetizer charge ¥250, none with a course (Tabelog original お通し：250円（コースはお通し料無し）). Cards, e-money and QR (Tabelog). Counter on the 1F, tables on the 2F and 3F; strong ventilation (2023–2025 reviews). Down a lane off Pontocho, north of Shijo; 4 min walk from Hankyu Kawaramachi Stn (Tabelog; June 2023). Opened 20 August 2021 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Off Pontocho north of Shijo — 4 min walk from Kawaramachi Stn',
    cuisine: 'Wagyu yakiniku in a calm, dim townhouse with a meat showcase at the door (2023–2026 reviews) · e.g. premium salted tongue ¥1,380, premium kalbi ¥1,080 (February 2025); rare cuts; Chateaubriand; meat sushi (2024–2026 reviews) · courses, e.g. ¥8,000 (September 2023); 200 g of tenderloin with vegetables grilled in oil in an iron pot (September 2024) · Chita highball (February 2024) · about ¥6,000–10,000 (Tabelog; 2023–2026 reviews)',
    website: null, gmaps: gm('肉処 だん炉 先斗町'), menu_url: null,
    notes: '[Yakiniku · off Pontocho, wagyu in a quiet townhouse] A dim, elegant yakiniku down a lane off Pontocho, with good extraction so the smoke stays off your clothes: salted tongue, kalbi, rare cuts, Chateaubriand and meat sushi, or courses with oil-grilled tenderloin. Some found it average, with rare cuts sold out, or service slow at the far tables. Weekend lunch too.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a yakiniku, Korean and horumon restaurant opened 20 August 2021 off Pontocho, over three floors. Reviewers describe a calm, upscale room and staff who invite passers-by in (2023–2025).',
      philosophy: null, specialty: 'Premium salted tongue; meat sushi.',
      anecdotes: [
        { text: 'A September 2023 birthday couple on the ¥8,000 course found the ventilation kept the smell out of clothes and hair.', source: R + 'B471437285/' },
        { text: 'An October 2025 diner at a far table never got the drinks or the sauce.', source: R + 'B514709541/' },
        { text: 'An October 2025 business group led up to the third floor found the yakiniku average and many rare cuts out of stock.', source: R + 'B515437796/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・韓国料理・ホルモン、中京区下憔木町199-1、阪急河原町駅から徒歩4分、月〜金・祝前後日 17:00〜23:00 (L.O.フード22:00、ドリンク22:30)、土日祝 11:30〜14:00 (L.O.13:30)・17:00〜23:00、ほかに不定休、予約可 (コースは当日15時以降のキャンセルで50%、席のみは当日17時以降1人1,500円)、お通し250円 (コースはお通し料無し)、カード・電子マネー・QR 可、2021年8月20日開店。口コミ (2023年6月〜2026年10月、英語): 先斗町の路地、入口に肉のショーケース、薄暗く落ち着いた店内、1階カウンター・2階と3階テーブル、換気がよい、上塩タン1,380円、上カルビ1,080円、希少部位、シャトーブリアン、肉寿司、8,000円のコース、鉄鍋で油焼きにするヒレ200g、知多のハイボール、遠い席で飲み物とたれが来なかったとの声 (2025年10月)、普通の味で希少部位が品切れとの声 (2025年10月)。',
      confidence: 'medium', sources: [TB, R + 'B470002894/', R + 'B471437285/', R + 'B479251029/', R + 'B492516843/', R + 'B495659641/', R + 'B501983766/', R + 'B509291446/', R + 'B514709541/', R + 'B515437796/', R + 'B537662746/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cancellation charges on bookings; ¥250 appetizer à la carte; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下憔木町199-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.005993, 135.771059); GSI gives the same point for 下樵木町197, 198 and 199 (block-level), so kept the Tabelog pin; nearest Kyoto record 23.9 m away; checked against main 8fd265cb; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501983766/', R + 'B471437285/'],
    price_note: 'Prices from September 2023 and February 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Premium salted tongue', '¥1,380', 'À la carte', 'ask', 'no', 'February 2025.', 'jo_shio_tan'),
      it('', '', 'Premium kalbi', '¥1,080', 'À la carte', 'no', 'no', 'February 2025.', 'jo_kalbi'),
      it('', '', 'Course', '¥8,000', 'Courses', 'no', 'no', 'September 2023.', 'course'),
    ] }, {
    cuisine: '入口に肉のショーケースのある薄暗く落ち着いた町家の和牛の焼肉 (2023〜2026年の口コミ)・例: 上塩タン1,380円、上カルビ1,080円 (2025年2月)、希少部位、シャトーブリアン、肉寿司 (2024〜2026年の口コミ)・コース、例: 8,000円 (2023年9月)、ヒレ200gと野菜を鉄鍋で油焼きに (2024年9月)・知多のハイボール (2024年2月)・6,000〜10,000円ほど (食べログ、2023〜2026年の口コミ)',
    neighborhood: '四条の北、先斗町の路地。河原町駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。たれの焼肉、肉寿司、コースの料理 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉の店 (2023〜2026年の口コミ)。',
    notes: '[焼肉・先斗町の路地、静かな町家で和牛] 先斗町の路地の薄暗く上品な焼肉の店。換気がよく服に煙のにおいがつかない。塩タン、カルビ、希少部位、シャトーブリアン、肉寿司、鉄鍋のヒレのコースも。普通の味、希少部位の品切れ、奥の席は提供が遅いと感じた客も。週末は昼も営業。',
  });
}

save();
