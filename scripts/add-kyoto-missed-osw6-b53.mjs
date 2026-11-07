// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 53.
//   + おばんざい TATSUNOSUKE (late-night obanzai izakaya off Kiyamachi) — rest
//   + ちもと Chimoto (Kyoto kaiseki house founded 1718, on the Kamo river at Shijo-ohashi) — rest
//   + PATISSERIE ATELIER S SECOND (couple-run take-away scone and tart shop, Teramachi Shijo) — rest
//   + 京都焼肉 すずき 先斗町本店 Kyoto Yakiniku Suzuki (black wagyu yakiniku in a Pontocho townhouse) — rest
//   - skip 26040070 酒ト和食 ほっこり 京都木屋町本店 (sub-brand of a large parent)
//   - skip 26044618 桶屋久次郎 (Kyoto branch of an overseas group)
//   Rest tier, nearest-first from `next rest 2000`; every shop passed over is skipped with a reason.
//   Same-name counts first (2026-11-07): TATSUNOSUKE — one. ちもと — one in Kyoto (the other "Chimoto" hits are unrelated
//   confectioners; the official site names one sister restaurant). ATELIER S SECOND — the second shop of PATISSERIE ATELIER S
//   (main shop in Kizugawa), a local pair. 京都焼肉 すずき — one. None is in data/kyoto.json by name or address.
//   Service charges per Tabelog's Japanese original: TATSUNOSUKE 「お通し代330円(税込)を頂戴しております。」; ちもと
//   「サービス料15％、ルームチャージ料なし」; ATELIER S SECOND 「なし」 (the English page mistranslates this as a charge);
//   すずき 「個室もチャージ料はいただきません」. No halal claims; no owner deaths; no single-review remarks about other diners kept.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-53');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040070', 'sub-brand of a large parent: 酒ト和食 ほっこり is a J Group Holdings brand (official site on jproject-shop.jp: https://hokkori.jproject-shop.jp/kyoto-kiyamachi/; J Group runs 115 shops per its JPX filing https://www2.jpx.co.jp/disc/30630/140120260529555111.pdf); Tabelog also lists two Nagoya shops.');
skip('26044618', 'branch of a non-local parent: Okeya Kyujiro is a theatrical-omakase group that opened in Montreal in 2020 and Vancouver in 2022 before this Kyoto shop (May 2026 review: https://tabelog.com/en/kyoto/A2601/A260201/26044618/dtlrvwlst/B527666604/).');

// ================================================================ おばんざい TATSUNOSUKE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019280/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.tatsunosuke.jp/';
  const H = day(['18:00', '03:00']);
  put({
    id: 'kyoto_obanzai_tatsunosuke', name: 'おばんざい TATSUNOSUKE', category: 'OMNI',
    lat: 35.004722, lng: 135.770194, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, sashimi, grilled fish and dashimaki, but also nyumen, chicken nanban and dumplings (2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, sashimi, grilled fish, pork chashu (2025–26 reviews).',
    hours_raw: 'Daily 18:00–3:00 (last order 2:00); closed irregularly (Tabelog); opens from 17:00 for reservations (official site). Reservations accepted (Tabelog). Appetizer charge ¥330 incl. tax (Tabelog, Japanese text: 「お通し代330円(税込)を頂戴しております。」). Cards and QR incl. PayPay; no e-money (Tabelog). 30 seats: a counter of 6, six tables for 4 and a semi-private room for 4–8 (Tabelog). Smoking allowed at every seat (Tabelog; May 2026). Just off Kiyamachi north of Shijo, 1–3 min from Kyoto-Kawaramachi (official site; Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi, north of Shijo — Kyoto-Kawaramachi',
    cuisine: 'Seasonal obanzai from local ingredients by an owner trained about ten years in Kyoto restaurants, with sashimi from the market (official site; Tabelog) · Tatsunosuke course ¥2,500 plus all-you-can-drink ¥2,200; a ten-dish obanzai course (August–September 2025) · late-night drinks package with snacks ¥2,200 from 21:00 (February 2025) · dashimaki with grated daikon, grilled saury, beef stew, nyumen (January and September 2025) · seasonal cold noodles, seafood rice bowl, chicken nanban, shrimp dumplings (September 2025) · grilled yellowtail belly, tender pork chashu (April 2026); duck breast ¥990, grilled cod roe with daikon ¥600 (August 2026) · shochu chosen at the breweries, sake, fruit liqueurs (official site)',
    website: OF, gmaps: gm('おばんざい TATSUNOSUKE 木屋町'), menu_url: TB,
    notes: '[Obanzai izakaya · Kiyamachi, open to 3 am] A 30-seat izakaya just off Kiyamachi where an owner with about ten years in Kyoto kitchens cooks seasonal obanzai, fluffy dashimaki and fresh market fish, served until 3:00 — good for a late second or third stop. Cheap courses with all-you-can-drink; ¥330 appetizer charge. Smoking allowed throughout.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), about ten years of training in Kyoto Japanese restaurants (official site)'], origin: null,
      background: 'Per the official site: a Japanese izakaya near Kyoto-Kawaramachi serving seasonal obanzai from mainly local ingredients, cooked by an owner who trained for about ten years in Kyoto Japanese restaurants; shochu is chosen on visits to the breweries.',
      philosophy: 'Authentic dishes that can be enjoyed without ceremony (official site).', specialty: 'Seasonal obanzai; dashimaki.',
      anecdotes: [
        { text: 'An October 2026 regular on a sixth visit, back from a transfer to Hamamatsu, noted the usual course still changes with the season.', source: R + 'B482243161/' },
        { text: 'A January 2025 group of about eight squeezed in after a third round of drinks and loved the dashimaki with grated daikon.', source: R + 'B516464493/' },
        { text: 'An August 2026 pair walked in without booking and found the oolong highball strong.', source: R + 'B533703254/' },
      ],
      japanese_sources_summary: '公式サイト: 京都河原町駅から徒歩1分、木屋町通から少し入った和食居酒屋、地元の食材中心の季節のおばんざい、京都の和食店で10年ほど修業した店主、蔵元で選んだ焼酎、飲み放題、コース、通常18時開店、予約で17時から。食べログ: 中京区木屋町通四条上る紙屋町370-1、毎日18:00〜翌3:00 (L.O. 2:00)、不定休、予約可、お通し代330円 (税込)、カード・QR 可、30席 (カウンター6、テーブル、半個室)、全席喫煙可。口コミ (2025年1月〜2026年10月、英語): たつのすけコース2,500円と飲み放題2,200円、21時以降の飲み放題とつまみ2,200円、だし巻き、さんま、ビーフシチュー、にゅうめん、冷たい麺、海鮮丼、チキン南蛮、ハマチのハラ、チャーシュー、鴨ロース990円、たらこと大根600円。',
      confidence: 'medium', sources: [TB, OF, R + 'B482243161/', R + 'B502055894/', R + 'B502506080/', R + 'B504297799/', R + 'B512604842/', R + 'B514295790/', R + 'B514518559/', R + 'B515765014/', R + 'B516464493/', R + 'B524576274/', R + 'B528985365/', R + 'B533703254/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses with all-you-can-drink are the easy order; open very late; smoking allowed. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町通四条上る紙屋町370-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004722, 135.770194); cross-checked: GSI 京都府京都市中京区紙屋町370番地 (lot) 29m; kyoto_chiritori_nabe_isono is 6.1 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B514295790/', R + 'B502506080/', R + 'B533703254/'],
    price_note: 'Prices from 2025–26 reviews; ¥330 appetizer charge.', last_checked: TODAY, items: [
      it('', '', 'Tatsunosuke course', '¥2,500', 'Courses', 'ask', 'no', 'September 2025.', 'course'),
      it('', '', 'All-you-can-drink', '¥2,200', 'Drinks', '', '', 'September 2025.', 'nomihodai'),
      it('', '', 'Duck breast', '¥990', 'À la carte', 'ask', 'no', 'August 2026.', 'kamo_rosu'),
      it('', '', 'Grilled cod roe with daikon', '¥600', 'À la carte', 'ask', 'no', 'August 2026.', 'tarako_daikon'),
      it('', '', 'Appetizer charge', '¥330', 'Charge', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '京都の和食店で10年ほど修業した店主の、地元の食材の季節のおばんざいと市場の刺身 (公式サイト、食べログ)・たつのすけコース2,500円と飲み放題2,200円、おばんざい10品のコース (2025年8月〜9月)・21時からの飲み放題とつまみ2,200円 (2025年2月)・おろし添えのだし巻き、焼きさんま、ビーフシチュー、にゅうめん (2025年1月・9月)・季節の冷たい麺、海鮮丼、チキン南蛮、海老の餃子 (2025年9月)・ハマチのハラの焼き物、やわらかいチャーシュー (2026年4月)、鴨ロース990円、たらこと大根600円 (2026年8月)・蔵元で選んだ焼酎、日本酒、果実酒 (公式サイト)',
    neighborhood: '木屋町、四条の北。京都河原町駅',
    gf_detail: '要確認。おばんざい、刺身、焼き魚、だし巻きのほか、にゅうめん、チキン南蛮、餃子もある (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁のおばんざい、刺身、焼き魚、豚のチャーシュー (2025〜2026年の口コミ)。',
    notes: '[おばんざいの居酒屋・木屋町、深夜3時まで] 木屋町から少し入った30席の居酒屋。京都の和食店で10年ほど修業した店主が、季節のおばんざい、ふわふわのだし巻き、市場の魚を深夜3時まで。二軒目、三軒目に。飲み放題付きの手頃なコース、お通し330円。全席喫煙可。',
  });
}

// ================================================================ ちもと
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26014210/'; const R = TB + 'dtlrvwlst/';
  const OF = 'http://chimoto.jp/';
  const H = day(['12:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_chimoto_shijo', name: 'ちもと (Chimoto)', category: 'OMNI',
    lat: 35.003349, lng: 135.770953, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Kyoto kaiseki — hassun, hamo, grilled ayu, rice dishes (2025–26 reviews); no gluten information. Say so when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based kaiseki with hamo, ayu, octopus and meat (2024–26 reviews).',
    hours_raw: 'Lunch 12:00–15:00, dinner 17:00–22:00; closed irregularly, about twice a month — e.g. Mondays in November 2026 (Tabelog; official site). Reservations accepted (Tabelog). Service charge 15%, no room charge (Tabelog, Japanese text: 「サービス料15％、ルームチャージ料なし」). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 100 seats in rooms incl. sunken-kotatsu rooms, and a summer terrace over the Kamo river (Tabelog; May–September reviews). Designated smoking area in the building (Tabelog). Geisha and maiko entertainment can be arranged (May and June 2026). In a three-storey wooden sukiya building on Nishi-Ishigaki-dori, by the west end of Shijo-ohashi (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Ishigaki, Shijo-ohashi west end — on the Kamo river',
    cuisine: 'Kyoto kaiseki in a 300-year-old house on the Kamo river (official site; 2025–26 reviews) · seasonal courses with a showpiece hassun (February 2025); bean rice (March 2026) · summer riverside terrace with hamo, grilled ayu and octopus rice (July 2024; June 2025; July 2026) · matsutake in autumn (October 2026); a moon-viewing menu (September 2025) · New Year osechi and mail-order dishes (official site)',
    website: OF, gmaps: gm('京料理 ちもと 四条'), menu_url: OF,
    notes: '[Kyoto kaiseki · Shijo-ohashi, a 300-year-old house on the Kamo river] A kaiseki house founded in 1718, in a three-storey wooden sukiya building at the west end of Shijo-ohashi, with river and Higashiyama views from every room and a terrace over the water in summer: hassun, hamo, ayu grilled before you, matsutake in autumn. Geisha can be arranged. 15% service charge.',
    chef_bio: { chef_name: null, roles: ['Proprietress (unnamed) receiving guests (2025–26 reviews)'], origin: null,
      background: 'Per the official site: founded in 1718 on Senbon-dori in Nishijin and run as a restaurant in Kyoto for over 300 years, now in a three-storey wooden sukiya building by Shijo-ohashi; patronised by the kimono trade, painters, writers and kabuki actors. It has one sister restaurant, and prepared dishes for an NHK programme.',
      philosophy: 'Kyoto\'s "best seat in the house" — an unforgettable, out-of-the-ordinary luxury (official site).', specialty: 'Seasonal Kyoto kaiseki; summer riverside terrace.',
      anecdotes: [
        { text: 'A March 2026 guest of nearly twenty years has found the menu different on every visit and came to love the bean rice after years of disliking it.', source: R + 'B462812115/' },
        { text: 'A July 2024 group on the riverside terrace had to leave the melon dessert behind to catch the Shinkansen.', source: R + 'B492428757/' },
        { text: 'A June 2026 dinner began on the open terrace until a shower moved everyone, and the geisha, into a tatami room.', source: R + 'B530103743/' },
      ],
      japanese_sources_summary: '公式サイト: 京料理 ちもと、1718年 (享保3年) に西陣の千本通りで創業、300余年、四条大橋西詰の西石垣通、木造三階建の数奇屋造、鴨川と東山を望む「京の特等席」、和装業界や画家、文化人、歌舞伎役者に愛された、姉妹店が一軒、11月は月曜休み、お節やお取り寄せ。食べログ: 日本料理、下京区西石垣通四条下ル斉藤町140-5、12:00〜15:00、17:00〜22:00、不定休 (月2回)、予約可、サービス料15%、ルームチャージなし、カード可、100席、掘りごたつの部屋、テラス。口コミ (2024年7月〜2026年10月、英語): 八寸、豆ごはん、川床で鱧と鮎、蛸飯、松茸、月見の宴、芸妓を呼べる、女将のもてなし。',
      confidence: 'medium', sources: [TB, OF, R + 'B462271747/', R + 'B462812115/', R + 'B467247185/', R + 'B492428757/', R + 'B505985390/', R + 'B510390598/', R + 'B514018258/', R + 'B528910168/', R + 'B530103743/', R + 'B532419948/', R + 'B532811080/', R + 'B538343064/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course; ask for the river terrace in summer; geisha entertainment can be arranged. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区西石垣通四条下ル斉藤町140-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 closing days posted) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003349, 135.770953); GSI resolves 斉藤町140-5 only to the ward, so the Tabelog pin is kept as approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [OF],
    price_note: 'No course prices found in the sources; Tabelog\'s budget is ¥10,000–19,999; 15% service charge.', last_checked: TODAY, items: [
      it('', '', 'Seasonal kaiseki course', '', 'Courses', 'ask', 'no', '2025–26 reviews.', 'kaiseki'),
      it('', '', 'Riverside terrace course (summer)', '', 'Courses', 'ask', 'no', 'May–September; 2024–26 reviews.', 'kawadoko'),
    ] }, {
    cuisine: '鴨川沿いの300年続く店の京懐石 (公式サイト、2025〜2026年の口コミ)・見事な八寸の季節のコース (2025年2月)、豆ごはん (2026年3月)・夏は川床で鱧、目の前で焼く鮎、蛸飯 (2024年7月、2025年6月、2026年7月)・秋は松茸 (2026年10月)、月見の宴 (2025年9月)・お節やお取り寄せ (公式サイト)',
    neighborhood: '西石垣、四条大橋の西詰。鴨川沿い',
    gf_detail: '要確認。八寸、鱧、焼き鮎、ご飯ものの季節の京懐石 (2025〜2026年の口コミ)。グルテンの情報はない。予約時に伝えて。',
    vegan_detail: 'ヴィーガン不可。鱧、鮎、蛸、肉の出汁の懐石 (2024〜2026年の口コミ)。',
    notes: '[京懐石・四条大橋、鴨川沿いの300年の店] 1718年創業、四条大橋の西詰にある木造三階建の数奇屋造の京料理店。どの部屋からも鴨川と東山、夏は川床も。八寸、鱧、目の前で焼く鮎、秋は松茸。芸妓も呼べる。サービス料15%。',
  });
}

// ================================================================ PATISSERIE ATELIER S SECOND
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043478/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:30']);
  put({
    id: 'kyoto_patisserie_atelier_s_second', name: 'PATISSERIE ATELIER S SECOND', category: 'OMNI',
    lat: 35.002577, lng: 135.767106, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: scones, baked tarts, muffins, financiers and sablés (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: butter-based scones and tarts (2025–26 reviews); no vegan information.',
    hours_raw: 'Wed–Fri 12:00–18:30, only on the days the Kizugawa main shop is closed; in August open daily except Thursday; hours may change (Tabelog). Take-away only, no seating (Tabelog). Cards (JCB) and QR accepted (Tabelog). No service charge (Tabelog, Japanese text: 「なし」 — the English page mistranslates this as a charge). Popular items sell out early (August 2025). On Teramachi-dori south of Shijo, 3 min from Kyoto-Kawaramachi (Tabelog). Opened 8 August 2025 (Tabelog).',
    hours: { 2: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi, south of Shijo — Kyoto-Kawaramachi',
    cuisine: 'Take-away scones and baked tarts from a Kizugawa patisserie (2025–26 reviews) · plain scone ¥390, chocolate chunk ¥480, Setouchi lemon ¥550; peach and Earl Grey baked tart ¥580 (August 2025) · organic Earl Grey and orange scone ¥480 (September 2025); karigane hojicha and chestnut scone ¥550 (December 2025) · berry baked tart, apple and organic Earl Grey baked tart (December 2025) · muffins, financiers, sablés; matcha latte and jelly drinks (2025–26 reviews)',
    website: null, gmaps: gm('PATISSERIE ATELIER S SECOND 寺町'), menu_url: TB,
    notes: '[Take-away pastries · Teramachi Shijo, scones and baked tarts] The Kyoto city outpost of a Kizugawa patisserie run by a couple — the pastry chef bakes at the main shop and the partner sells here: crisp-edged scones (best toasted at home), small fruit tarts, muffins and drinks to go. Open Wednesday to Friday only; favourites sell out early.',
    chef_bio: { chef_name: null, roles: ['Pastry chef (unnamed), baking at the Kizugawa main shop (August 2025)'], origin: null,
      background: 'Per Tabelog: a take-away-only second shop of PATISSERIE ATELIER S, opened in August 2025 and open only on the main shop\'s closing days. An August 2025 review says a couple runs it: the wife bakes at the main shop in Kizugawa and the husband sells here.',
      philosophy: null, specialty: 'Scones; baked fruit tarts.',
      anecdotes: [
        { text: 'An August 2025 visitor recommends toasting the scones at home for a crisp outside and a moist inside.', source: R + 'B511459436/' },
        { text: 'A September 2025 shopper waited behind two groups buying in bulk and was given something extra for the wait.', source: R + 'B514271857/' },
        { text: 'A March 2026 visitor liked the careful explanations but found one berry muffin\'s sauce too sweet.', source: R + 'B523436357/' },
      ],
      japanese_sources_summary: '食べログ: 洋菓子、下京区寺町通四条下ル貞安前之町622、京都河原町駅から徒歩3分、水木金12:00〜18:30、木津川の本店の定休日のみ営業、8月は木曜以外毎日、テイクアウトのみ、カード (JCB)・QR 可、サービス料なし、2025年8月8日オープン。口コミ (2025年8月〜2026年5月、英語): 夫婦で営み、妻が本店で焼き、夫がこちらで販売、プレーンスコーン390円、チョコチャンク480円、Setouchi のレモン550円、桃とアールグレイの焼きタルト580円、オーガニックのアールグレイとオレンジのスコーン480円、Karigane のほうじ茶と栗のスコーン550円、ベリーやりんごの焼きタルト、マフィン、フィナンシェ、サブレ、抹茶ラテ。',
      confidence: 'medium', sources: [TB, R + 'B511459436/', R + 'B514042789/', R + 'B514271857/', R + 'B515084800/', R + 'B516588957/', R + 'B518989114/', R + 'B520147529/', R + 'B523436357/', R + 'B529405159/', R + 'B529498559/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Take-away only; point at the case; come early. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市下京区寺町通四条下ル貞安前之町622',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.002577, 135.767106); cross-checked: GSI 京都府京都市下京区貞安前之町622番地 (lot) 76m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B511459436/', R + 'B518989114/'],
    price_note: 'Prices from August–December 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Plain scone', '¥390', 'Scones', 'no', 'no', 'August 2025.', 'scone_plain'),
      it('', '', 'Setouchi lemon scone', '¥550', 'Scones', 'no', 'no', 'August 2025.', 'scone_lemon'),
      it('', '', 'Karigane hojicha and chestnut scone', '¥550', 'Scones', 'no', 'no', 'December 2025.', 'scone_hojicha'),
      it('', '', 'Peach and Earl Grey baked tart', '¥580', 'Tarts', 'no', 'no', 'August 2025.', 'tart_peach'),
    ] }, {
    cuisine: '木津川のパティスリーのテイクアウトのスコーンと焼きタルト (2025〜2026年の口コミ)・プレーンスコーン390円、チョコチャンク480円、Setouchi のレモン550円、桃とアールグレイの焼きタルト580円 (2025年8月)・オーガニックのアールグレイとオレンジのスコーン480円 (2025年9月)、Karigane のほうじ茶と栗のスコーン550円 (2025年12月)・ベリーの焼きタルト、りんごとオーガニックのアールグレイの焼きタルト (2025年12月)・マフィン、フィナンシェ、サブレ、抹茶ラテ、ゼリードリンク (2025〜2026年の口コミ)',
    neighborhood: '寺町、四条の南。京都河原町駅',
    gf_detail: 'グルテンフリーではない。スコーン、焼きタルト、マフィン、フィナンシェ、サブレ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターのスコーンとタルト (2025〜2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[テイクアウトの焼き菓子・寺町四条、スコーンと焼きタルト] 夫婦で営む木津川のパティスリーの市内の店。本店で焼いたものをこちらで販売。外はさくっとしたスコーン (家で軽く焼いて)、小さな果物の焼きタルト、マフィン、飲み物を持ち帰りで。水〜金のみ、人気の品は早く売り切れる。',
  });
}

// ================================================================ 京都焼肉 すずき 先斗町本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039824/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_yakiniku_suzuki_pontocho', name: '京都焼肉 すずき 先斗町本店 (Kyoto Yakiniku Suzuki)', category: 'OMNI',
    lat: 35.004187, lng: 135.77098, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Black wagyu yakiniku with three house-made sauces, kimchi and namul (Tabelog; 2025–26 reviews); the sauces are likely soy-based; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2024–26 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 14:30), dinner 17:00–22:00 (last order 21:30); closed on building closure days (Tabelog). Reservations accepted; call for same-day changes; parties of 5–8 are split over two tables (Tabelog). Cards incl. UnionPay; no e-money or QR (Tabelog). No charge, even for private rooms (Tabelog, Japanese text: 「個室もチャージ料はいただきません」). 78 seats, with private rooms upstairs in a townhouse (Tabelog; November 2025; June 2026). Non-smoking (Tabelog). At the Shijo end of Pontocho, 2 min from Kyoto-Kawaramachi and Gion-Shijo (Tabelog). Opened 15 August 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Pontocho, Shijo end — Kyoto-Kawaramachi',
    cuisine: 'Black wagyu yakiniku from a meat wholesaler of over 150 years, with three house-made sauces (Tabelog) · lean-cut wagyu gozen at lunch ¥4,400 incl. tax, with three cuts, kimchi, namul, three obanzai, salad, rice and soup (May 2026) · ¥8,000 dinner course with tender kalbi (April 2026); a rare lean-cuts course with tongue, kalbi, sirloin cap, outside knuckle and a signature whole-bone "tsubozuke" kalbi, pumpkin stew (June 2026) · choregi salad with mizuna and greens (November 2025); beef tendon and crab à la carte (October 2026) · hineri mochi dessert (November 2024)',
    website: null, gmaps: gm('京都焼肉 すずき 先斗町本店'), menu_url: TB,
    notes: '[Wagyu yakiniku · Pontocho, a townhouse grill] A 78-seat yakiniku in a Pontocho townhouse, supplied by a meat wholesaler of over 150 years: black wagyu with three house sauces, a ¥4,400 lean-cut lunch gozen with obanzai, and evening courses featuring rare lean cuts and a whole-bone kalbi. Private rooms upstairs with no room charge.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a yakiniku restaurant in a Pontocho townhouse serving black wagyu from a long-established meat wholesaler of more than 150 years, opened in August 2023.',
      philosophy: null, specialty: 'Black wagyu; rare lean cuts.',
      anecdotes: [
        { text: 'An April 2026 host chose it for overseas guests to get a taste of Pontocho without raw fish, and found the staff quietly coached everyone on the grill.', source: R + 'B525879877/' },
        { text: 'A May 2026 pair booked the lean-cut wagyu gozen for a holiday lunch in a townhouse private room.', source: R + 'B529510323/' },
        { text: 'A December 2025 diner was surprised with an anniversary celebration arranged at booking.', source: R + 'B519986105/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・ホルモン・居酒屋、中京区柏屋町169-3、阪急京都河原町駅1A出口・京阪祇園四条駅4番出口から徒歩約2分、11:30〜15:00 (L.O. 14:30)、17:00〜22:00 (L.O. 21:30)、休みは建物に準ずる、予約可、カード可、電子マネー・QR 不可、個室もチャージ料なし、78席、禁煙、2023年8月15日オープン、創業150年以上の老舗精肉卸の黒毛和牛、自家製のたれ3種。口コミ (2024年11月〜2026年10月、英語): 町家の個室、赤身の和牛御膳4,400円、8,000円のコース、希少部位のコースと Tsubozuke の骨付きカルビ、水菜と青菜のサラダ、牛すじ、Hineri Mochi。',
      confidence: 'medium', sources: [TB, R + 'B496315058/', R + 'B502006912/', R + 'B518990114/', R + 'B519986105/', R + 'B520297934/', R + 'B522042994/', R + 'B525879877/', R + 'B526858482/', R + 'B529510323/', R + 'B530828334/', R + 'B535512016/', R + 'B537447044/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course or the lunch gozen; staff explain how to grill each cut; no room charge for private rooms. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区柏屋町169-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004187, 135.770980); GSI resolves 柏屋町169-3 only to the town (27 m away), so the Tabelog pin is kept as approximate; kyoto_pontocho_kiraku is 6.9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529510323/', R + 'B526858482/'],
    price_note: 'Prices from April and May 2026 reviews; no room charge.', last_checked: TODAY, items: [
      it('', '', 'Lean-cut wagyu gozen (lunch)', '¥4,400', 'Lunch', 'ask', 'no', 'Tax included; May 2026.', 'akami_gozen'),
      it('', '', 'Dinner course', '¥8,000', 'Courses', 'ask', 'no', 'April 2026.', 'course_8000'),
      it('', '', 'Whole-bone "tsubozuke" kalbi', '', 'Yakiniku', 'ask', 'no', 'June 2026.', 'tsubozuke_kalbi'),
    ] }, {
    cuisine: '創業150年以上の精肉卸の黒毛和牛を、自家製の3種のたれで (食べログ)・昼は赤身の和牛御膳税込4,400円、3種の肉、キムチ、ナムル、おばんざい3品、サラダ、ご飯、スープ (2026年5月)・やわらかいカルビの8,000円のコース (2026年4月)、タンやカルビなど5種の希少な赤身のコースと名物の骨付きカルビの Tsubozuke、かぼちゃの炊いたもの (2026年6月)・水菜と青菜のサラダ (2025年11月)、牛すじと蟹 (2026年10月)・デザートに Hineri Mochi (2024年11月)',
    neighborhood: '先斗町、四条側の入口。京都河原町駅',
    gf_detail: '要確認。黒毛和牛の焼肉を自家製の3種のたれ、キムチ、ナムルで (食べログ、2025〜2026年の口コミ)。たれは醤油ベースと思われる。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉店 (2024〜2026年の口コミ)。',
    notes: '[和牛焼肉・先斗町、町家の焼肉] 先斗町の町家にある78席の焼肉店。創業150年以上の精肉卸の黒毛和牛を3種の自家製だれで。昼は4,400円の赤身の御膳とおばんざい、夜は希少な赤身や骨付きカルビのコース。2階の個室もチャージなし。',
  });
}

save();
