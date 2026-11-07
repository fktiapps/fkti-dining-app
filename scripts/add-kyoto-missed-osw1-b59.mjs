// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 59.
//   + 鳥初 鴨川 Tori Hatsu Kamogawa (mizutaki in an old house on Kiyamachi over the Kamo)
//   + 和馬 Kazuma (Kyoto-vegetable and seafood izakaya on Nishikiyamachi)
//   + 京味処 そわか Kyo Ajidokoro Sowaka (family-run hamo and fugu restaurant near Shijo-Tominokoji)
//   + フィゲラス 祇園店 Figueras, Gion (Spanish bar of over 30 years; 2 shops, 株式会社ＭＩＵＲＡ)
//   - ハードロックカフェ 京都, 京家きよみず 錦小路, ホルモン酒場 あかやしろ榮: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26002106, 26022734, 26041946
//   (skipped), 26039036 (skipped), 26018396 (skipped), 26027918, 26041934 (Royal Scene — left for next batch),
//   26000582.
//   None of the four drafted is in data/kyoto.json by name (鳥初/Tori Hatsu, 和馬/Kazuma, そわか/Sowaka, フィゲラス/Figueras)
//   or address (和泉屋町169, 南車屋町287, 西大文字町610-1, 常盤町158 紅屋ビル3F).
//   Same-name count (same brand or operator only): 鳥初, 和馬, そわか — one shop each. フィゲラス — Tabelog lists Gion and
//   Karasuma shops; invoice holder 株式会社ＭＩＵＲＡ (Kyoto, NTA register) — a small local group, flagged.
//   Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: 和馬 付き出し450円(単品注文のみの際発生)・コースご注文時は0円;
//   そわか お通し代としてのチャージ450円。; フィゲラス なし (the English wrongly says a charge applies); 鳥初 none listed.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (和馬 July 2026,
//   フィゲラス).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-59');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26041946', 'ハードロックカフェ 京都: chain — Tabelog’s name search lists Hard Rock Cafe in Yokohama, Ueno, Universal CityWalk Osaka, Tokyo and Kyoto; an international brand');
skip('26039036', '京家きよみず 錦小路: a same-concept branch of a brand already in data — 京家 きよみず 祇をん新橋; Tabelog lists four 京家 きよみず shops (木屋町, 柳馬場本家, 錦小路, 祇をん新橋)');
skip('26018396', 'ホルモン酒場 あかやしろ榮: chain — Tabelog’s name search lists Akayashiro shops (honten, Tokyo honbu, Wagyu Sukiyaki Akayashiro, 榮, 焔, 燈 and more)');

// ================================================================ 鳥初 鴨川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26002106/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '21:00']);
  put({
    id: 'kyoto_tori_hatsu_kamogawa', name: '鳥初 鴨川 (Tori Hatsu Kamogawa)', category: 'OMNI',
    lat: 35.000279, lng: 135.769076, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mizutaki — chicken hot pot in a rich, creamy chicken broth — finished with rice porridge, plus small dishes; no gluten information (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken hot pot restaurant (reviews).',
    hours_raw: 'Monday–Saturday 17:00–21:00; closed Sunday; hours may change (Tabelog). Cards and e-money (Tabelog). 120 seats, mostly tatami private rooms; a deck over the Kamo in summer (Tabelog; 2023–2026). Non-smoking (Tabelog). An October 2023 reviewer wrote that the restaurant did not accept foreign guests, while a January 2026 reviewer calls it popular with international visitors — check when booking. On Kiyamachi north of Takatsuji, about 5 min from Hankyu Kawaramachi (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi north of Takatsuji, on the Kamo — 5 min from Hankyu Kawaramachi',
    cuisine: 'Kyoto-style mizutaki in an old house on the Kamo River (reviews) · a rich, creamy chicken broth served first in a small cup to taste, then the hot pot of chicken and vegetables, cooked at the table by the staff (November 2023, November 2025) · finished with rice porridge (2023–2025) · a limited menu built around the hot pot (January 2026) · riverside deck in summer (2023–2026)',
    website: null, gmaps: gm('鳥初 鴨川 木屋町'), menu_url: null,
    notes: '[Mizutaki · Kiyamachi over the Kamo, an old house] A long-established chicken hot pot restaurant in a house said to be over a century old on Kiyamachi, with tatami rooms and a summer deck over the Kamo: staff tend a rich, creamy mizutaki at the table, finished with rice porridge. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Reviewers describe a historic chicken hot pot restaurant in a building said to be over 100 years old (March 2024), with staff who tend each table’s pot and speak in Kyoto dialect (November 2023).',
      philosophy: null, specialty: 'Mizutaki.',
      anecdotes: [
        { text: 'A November 2025 business traveller, booked in by the boss, finished the rice porridge after a perfectly paced pot.', source: R + 'B517142537/' },
        { text: 'A January 2026 diner was back for the second hot pot of the winter.', source: R + 'B526683415/' },
      ],
      japanese_sources_summary: '食べログ: 鳥初 鴨川、日本料理・水炊き、下京区木屋町通高辻上る和泉屋町169、阪急河原町駅から徒歩5分、月〜土 17:00〜21:00、日曜定休、カード・電子マネー可、120席、個室あり、禁煙。口コミ (2023〜2026年、英語): 鴨川沿いの老舗の水炊き、築100年以上とされる建物、座敷、夏の床、はじめにスープを小さな器で、店員が鍋の世話をする、締めの雑炊、2023年10月の口コミには外国人客は受け付けていないとあり、2026年1月の口コミは海外の客にも人気とある。',
      confidence: 'low', sources: [TB, R + 'B474127565/', R + 'B474518916/', R + 'B481260966/', R + 'B500674425/', R + 'B514943141/', R + 'B517142537/', R + 'B526683415/'] },
    cultural_comfort: { level: 'japanese', note: 'Traditional rooms; foreign-guest policy reported differently by reviewers — ask when booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通高辻上る和泉屋町169',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.000279, 135.769076); cross-checked: GSI 京都府京都市下京区和泉屋町169番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices read; reviewers spend ¥8,000–14,999.', last_checked: TODAY, items: [
      it('', '', 'Mizutaki (chicken hot pot) with rice porridge', '', 'Hot pot', 'ask', 'no', '2023–2026 reviews.', 'mizutaki'),
    ] }, {
    cuisine: '鴨川に面した古い家の京風の水炊き (口コミ)・まず濃厚でクリーミーな鶏のスープを小さな器で、それから鶏と野菜の鍋を店員が卓で仕立てる (2023年11月、2025年11月)・締めは雑炊 (2023〜2025年)・鍋を中心にした品数の少ない献立 (2026年1月)・夏は川床 (2023〜2026年)',
    neighborhood: '高辻の北の木屋町、鴨川沿い。阪急河原町から徒歩5分',
    gf_detail: '要確認。濃厚な鶏のスープの水炊きと締めの雑炊、小鉢。グルテンの情報はない (口コミ)。',
    vegan_detail: 'ヴィーガンではない。鶏の水炊きの店 (口コミ)。',
    notes: '[水炊き・鴨川に面した木屋町、古い家] 築100年を超えるとされる木屋町の家の老舗の水炊き店。座敷と夏の鴨川の床で、店員が濃厚でクリーミーな水炊きを卓で仕立て、締めは雑炊。日曜定休。',
  });
}

// ================================================================ 和馬
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26022734/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '01:00']);
  put({
    id: 'kyoto_kazuma_nishikiyamachi', name: '和馬 (Kazuma)', category: 'OMNI',
    lat: 35.006579, lng: 135.770305, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Izakaya dishes of seasonal Kyoto vegetables and seafood, plus yakitori; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables from contract farmers in Kyoto feature, but seasonings and dashi are not described (Tabelog).',
    hours_raw: '17:30–1:00 daily (Tabelog). Reservations accepted, including online (Tabelog; April 2026). Otoshi ¥450 when ordering à la carte; none with a course or the à-la-carte free-flow drinks (Tabelog, original 付き出し450円(単品注文のみの際発生)・コースご注文時は0円・単品飲み放題を除く); one drink and one dish per person (Tabelog). Cards including UnionPay, IC cards, iD, QUICPay and QR payments (Tabelog). 52 seats — 6 at the counter, sunken-kotatsu rooms for 4 and 8, tables for 4 (Tabelog). On the ground floor of the Kiyamachi Kaikan along the Takase River, 3 min from Hankyu Kawaramachi (Tabelog; April 2026). Opened 1 January 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishikiyamachi south of Sanjo, on the Takase River',
    cuisine: 'A calm Japanese-style izakaya of seasonal vegetables from Kyoto contract farmers and seasonal seafood (Tabelog; April 2026) · banquet course of 9 dishes with 2 hours of free-flow drinks, ¥5,000 (Tabelog) · yakitori and seafood (Tabelog categories)',
    website: null, gmaps: gm('和馬 西木屋町'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Nishikiyamachi by the Takase, Kyoto vegetables] A quiet, Japanese-style izakaya on the Takase River near Sanjo with semi-private sunken-kotatsu booths, cooking seasonal Kyoto vegetables and seafood, with a ¥5,000 nine-dish course with free-flow drinks. ¥450 otoshi à la carte; open until 1:00.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes vegetables from contract farmers in Kyoto and seasonal seafood, a calm traditional room, and semi-private seating for 2 to 4.',
      philosophy: null, specialty: 'Seasonal Kyoto vegetables and seafood.',
      anecdotes: [
        { text: 'An April 2026 group of six booked online after 17:00 and arrived at 21:15 on a weekday.', source: R + 'B526299272/' },
        { text: 'A July 2026 couple, called in by a staff member outside, cooled off with beer before ramen.', source: R + 'B532157457/' },
      ],
      japanese_sources_summary: '食べログ: 和馬、居酒屋・海鮮・焼き鳥、中京区西木屋町通三条下ル南車屋町287 木屋町会館1F、阪急河原町駅から徒歩3分、毎日17:30〜翌1:00、付き出し450円 (単品注文のみ、コースは0円、単品飲み放題を除く)、1ドリンク1フード、カード・電子マネー・QR決済可、52席 (カウンター6、掘りごたつの個室8名、4名席など)、2014年1月1日オープン、京都の契約農家の旬の野菜と旬の魚介、9品と2時間飲み放題の宴会コース5,000円。口コミ (2026年、英語): 高瀬川沿いの落ち着いた和の居酒屋、ネットで当日予約。',
      confidence: 'low', sources: [TB, R + 'B526299272/', R + 'B532157457/', R + 'B532424476/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One drink and one dish per person; ¥450 otoshi à la carte.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西木屋町通三条下ル南車屋町287 木屋町会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.006579, 135.770245), offset about 5.5 m east to (35.006579, 135.770305) because Nijiya (ChIJLyNa5LcJAWARrcc-BOUsfc8) sits within 4 m and いっしん (kyoto_isshin_motsunabe_kiyamachi, 木屋町会館 2F) has been placed just north; cross-checked: GSI 京都府京都市中京区南車屋町287番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price and otoshi from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Banquet course, 9 dishes, 2-hour free-flow drinks', '¥5,000', 'Courses', 'ask', 'ask', 'Tabelog.', 'course'),
      it('', '', 'Otoshi (à la carte only)', '¥450', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '京都の契約農家の旬の野菜と旬の魚介の落ち着いた和の居酒屋 (食べログ、2026年4月)・9品と2時間飲み放題の宴会コース5,000円 (食べログ)・焼き鳥と魚介 (食べログ)',
    neighborhood: '三条の南の西木屋町、高瀬川沿い',
    gf_detail: '要確認。京野菜と魚介の居酒屋料理と焼き鳥。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。京都の契約農家の野菜が多いが、味付けや出汁については書かれていない (食べログ)。',
    notes: '[居酒屋・高瀬川沿いの西木屋町、京野菜] 三条近くの高瀬川沿いの静かな和の居酒屋。掘りごたつの半個室で、京都の旬の野菜と魚介を。9品と飲み放題の宴会コースは5,000円。単品注文はお通し450円、深夜1時まで。',
  });
}

// ================================================================ 京味処 そわか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027918/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['18:00', '23:00']); const WE = day(['12:30', '15:30'], ['18:00', '23:00']);
  put({
    id: 'kyoto_kyo_ajidokoro_sowaka', name: '京味処 そわか (Kyo Ajidokoro Sowaka)', category: 'OMNI',
    lat: 35.00427, lng: 135.764838, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hamo and fugu dishes — hamo shabu-shabu with rice porridge, sashimi, boiled fugu, tempura; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a hamo and fugu restaurant; the shabu-shabu broth is fish-based (2025–2026 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday and Friday 18:00–23:00; Saturday and Sunday 12:30–15:30 and 18:00–23:00; closed Wednesday (Tabelog). Reservations accepted (January 2026). Charge ¥450 as otoshi (Tabelog, original お通し代としてのチャージ450円。). Payment: Tabelog lists cards, e-money, PayPay and Rakuten Pay, but the shop’s own note says only PayPay and Rakuten Pay are accepted for electronic payment — ask. 30 seats, 8 at the counter; sunken-kotatsu seats with partitions; counter non-smoking (Tabelog). On Tominokoji north of Shijo, near exit 12 of Shijo subway (Tabelog).',
    hours: { 0: WD, 1: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Tominokoji north of Shijo — near Shijo subway exit 12',
    cuisine: 'A family-run restaurant for hamo and fugu (January 2026) · hamo course ¥8,800 with a large platter of hamo shabu-shabu and rice porridge from the broth, served even in winter (January 2026) · hamo feasts in Gion Matsuri season (July 2025) · ¥2,000 set of an appetizer, a sashimi platter with hamo and a drink up to ¥600; boiled fugu (July 2026) · Showa-era atmosphere (July 2026)',
    website: null, gmaps: gm('京味処 そわか 富小路'), menu_url: TB + 'dtlmenu/',
    notes: '[Hamo and fugu · Tominokoji near Shijo, family-run] A family-run, Showa-feeling restaurant a short walk from Shijo-Kawaramachi that specialises in hamo — shabu-shabu with a rice-porridge finish, sashimi, a ¥2,000 drinking set — and fugu, even out of season. ¥450 charge; weekend lunch; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A January 2026 diner learned from the owner that the restaurant is family-run. The shop’s Tabelog note mentions an earlier site on Nishikikoji at Muromachi (Hirata Building 1F).',
      philosophy: null, specialty: 'Hamo shabu-shabu.',
      anecdotes: [
        { text: 'A January 2026 caller was surprised to find hamo in winter and booked the ¥8,800 course straight away.', source: R + 'B523404435/' },
        { text: 'A July 2026 visitor, on a second stop, took the ¥2,000 set with hamo sashimi and added boiled fugu.', source: R + 'B533105223/' },
      ],
      japanese_sources_summary: '食べログ: 京味処 そわか、居酒屋・ふぐ・天ぷら、中京区富小路通四条上ル西大文字町610-1、地下鉄四条駅12番出口近く、月火木金 18:00〜23:00、土日 12:30〜15:30・18:00〜23:00、水曜定休、お通し代としてのチャージ450円、カード・電子マネー・QR決済 (PayPay、楽天ペイ) 可、ただし店の備考には電子決済はPayPayと楽天ペイのみ、30席 (カウンター8)、掘りごたつ、カウンターは禁煙、室町通錦小路の Hirata Building から移転。口コミ (2025〜2026年、英語): 家族で営む店、鱧のコース8,800円 (鱧しゃぶの大皿と締めの雑炊)、祇園祭の頃の鱧料理、お通し・鱧入りの刺身・ドリンクの2,000円のセット、湯引きのふぐ、昭和の雰囲気。',
      confidence: 'low', sources: [TB, R + 'B510647132/', R + 'B520015838/', R + 'B523404435/', R + 'B533105223/', R + 'B535547701/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Family-run; ¥450 charge; check payment methods.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路通四条上ル西大文字町610-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.00427, 135.764838); cross-checked: GSI 京都府京都市中京区西大文字町610番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523404435/', R + 'B533105223/'],
    price_note: 'Prices from January and July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hamo course with hamo shabu-shabu and porridge', '¥8,800', 'Courses', 'ask', 'no', 'January 2026.', 'hamo_course'),
      it('', '', 'Set: appetizer, sashimi with hamo, one drink', '¥2,000', 'Sets', 'ask', 'no', 'July 2026.', 'set'),
      it('', '', 'Charge (otoshi)', '¥450', 'Charges', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '鱧とふぐの家族で営む店 (2026年1月)・鱧しゃぶの大皿と締めの雑炊の鱧のコース8,800円、冬でもある (2026年1月)・祇園祭の頃の鱧づくし (2025年7月)・お通し、鱧入りの刺身の盛り合わせ、ドリンク (600円まで) の2,000円のセット。湯引きのふぐ (2026年7月)・昭和の雰囲気 (2026年7月)',
    neighborhood: '四条の北の富小路。地下鉄四条駅12番出口近く',
    gf_detail: '要確認。鱧しゃぶと締めの雑炊、刺身、湯引きのふぐ、天ぷらなど鱧とふぐの料理。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鱧とふぐの店で、しゃぶしゃぶの出汁は魚から (2025〜2026年の口コミ)。',
    notes: '[鱧とふぐ・四条近くの富小路、家族で営む] 四条河原町から少し歩く、昭和の雰囲気の家族で営む店。鱧が専門で、締めの雑炊まで楽しむ鱧しゃぶ、刺身、2,000円のちょい飲みセット、季節を問わずふぐも。チャージ450円、週末は昼も、水曜定休。',
  });
}

// ================================================================ フィゲラス 祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000582/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://figueras-g.com/';
  const A = day(['17:00', '23:00']); const S = day(['17:00', '22:00']);
  put({
    id: 'kyoto_figueras_gion', name: 'フィゲラス 祇園店 (Figueras, Gion)', category: 'OMNI',
    lat: 35.004671, lng: 135.772876, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spanish dishes — ajillo, paella, tortilla, garlic soup, wine-braised beef, tapas — served with bread; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, seafood ajillo, paella, beef and terrines (2025–2026 reviews).',
    hours_raw: 'Tuesday–Saturday 17:00–23:00 (L.O. 22:00); Sunday and holidays 17:00–22:00; closed Monday (Tabelog). Reservations accepted; parties up to 30 (Tabelog). No service charge (Tabelog, original なし — the English translation is wrong). Cards, IC cards, e-money and QR payments (Tabelog). 30 seats over two floors: 4 at the counter, 26 at tables (Tabelog; September 2025). Smoking allowed (August 2025). Up narrow stairs on the 3rd floor of the Beniya Building on Nawate north of Shijo, 2 min from Keihan Gion-Shijo (Tabelog).',
    hours: { 1: A, 2: A, 3: A, 4: A, 5: A, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nawate north of Shijo, Gion — 2 min from Keihan Gion-Shijo',
    cuisine: 'A Spanish bar in Gion for over 30 years, with full courses from ¥4,400 (Tabelog) · ajillo, including scallop and mushroom; paella; Spanish omelette; garlic soup; beef braised in red wine (2025–2026) · prosciutto, olive and ham jelly, potato bread, salad with prosciutto (April and June 2026) · assorted tapas with duck and foie gras terrine (May 2026) · sparkling wine, sangria and sweet wines by the glass; free-flow plans (2025–2026)',
    website: SITE, gmaps: gm('フィゲラス 祇園店'), menu_url: SITE,
    notes: '[Spanish · Gion on Nawate, a 30-year bar] A cosy Spanish bar up narrow stairs on Nawate in Gion, open for over three decades: ajillo, paella, garlic soup, wine-braised beef, prosciutto and potato bread, with good-value wines and courses from ¥4,400. Smoking allowed; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text calls it an authentic Spanish bar in Gion with over 30 years of history. Tabelog’s invoice number T2130001031665 is registered to 株式会社ＭＩＵＲＡ, at the restaurant’s own address (NTA register); Tabelog also lists a Figueras Karasuma.',
      philosophy: null, specialty: 'Ajillo; paella.',
      anecdotes: [
        { text: 'An April 2026 birthday party on a free-flow course had sparkling wine poured from a glass decanter and a dessert made for the occasion.', source: R + 'B526964650/' },
        { text: 'A June 2026 regular was glad the prices had not crept up like elsewhere.', source: R + 'B531378444/' },
      ],
      japanese_sources_summary: '食べログ: フィゲラス 祇園店、スペイン料理・バル・居酒屋、東山区縄手通四条上ル常盤町158 紅屋ビル3F、京阪祇園四条駅から徒歩2分、火〜土 17:00〜23:00 (L.O.22:00)、日祝 17:00〜22:00、月曜定休、予約可、サービス料なし、カード・電子マネー・QR決済可、30席 (カウンター4、テーブル26)、30年以上続く祇園のスペインバル、コース4,400円から、適格請求書 T2130001031665 (株式会社ＭＩＵＲＡ)。口コミ (2025〜2026年、英語): アヒージョ、パエリア、トルティージャ、ガーリックスープ、牛の赤ワイン煮込み、生ハム、オリーブと生ハムのゼリー、ポテトパン、鴨とフォアグラのテリーヌ、スパークリングワイン、サングリア、飲み放題、喫煙可。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=2130001031665', R + 'B511640275/', R + 'B513500977/', R + 'B525619380/', R + 'B526327074/', R + 'B526964650/', R + 'B529222140/', R + 'B531378444/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Narrow stairs to the 3rd floor; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区縄手通四条上ル常盤町158 紅屋ビル ３Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.004721, 135.772876), offset about 5.5 m south to (35.004671, 135.772876) because Ristorante dei CACCIATORI (kyoto_ristorante_dei_cacciatori) sits within 4 m; cross-checked: GSI 京都府京都市東山区常盤町158番地 (lot) 24m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course price from Tabelog; no dish prices read.', last_checked: TODAY, items: [
      it('', '', 'Full course', 'from ¥4,400', 'Courses', 'ask', 'no', 'Tabelog.', 'course'),
      it('', '', 'Ajillo (e.g. scallop and mushroom)', '', 'Tapas', 'ask', 'no', 'April 2026.', 'ajillo'),
      it('', '', 'Paella', '', 'Mains', 'ask', 'no', '2026.', 'paella'),
    ] }, {
    cuisine: '30年以上続く祇園のスペインバル。コースは4,400円から (食べログ)・帆立ときのこなどのアヒージョ、パエリア、スパニッシュオムレツ、ガーリックスープ、牛の赤ワイン煮込み (2025〜2026年)・生ハム、オリーブと生ハムのゼリー、ポテトパン、生ハムのサラダ (2026年4月・6月)・鴨とフォアグラのテリーヌ入りのタパスの盛り合わせ (2026年5月)・グラスのスパークリング、サングリア、甘口ワイン、飲み放題 (2025〜2026年)',
    neighborhood: '四条の北の縄手、祇園。京阪祇園四条から徒歩2分',
    gf_detail: '要確認。アヒージョ、パエリア、トルティージャ、ガーリックスープ、牛の煮込み、タパスとパン。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。生ハム、魚介のアヒージョ、パエリア、牛肉、テリーヌ (2025〜2026年の口コミ)。',
    notes: '[スペイン料理・祇園の縄手、30年のバル] 祇園の縄手、細い階段を上がった3階の居心地のよいスペインバル。30年以上続き、アヒージョ、パエリア、ガーリックスープ、牛の赤ワイン煮込み、生ハムとポテトパンを手頃なワインとともに。コースは4,400円から。喫煙可、月曜定休。',
  });
}

save();
