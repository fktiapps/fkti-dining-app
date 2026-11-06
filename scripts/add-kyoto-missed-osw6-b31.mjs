// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 31.
//   + スマイルバーガー 清水寺店 Smile Burger Kiyomizudera (burger shop on Higashioji below Kiyomizu-zaka)
//   + そのば Sonoba (juwari soba on the owner's own pottery, Gojo Tominokoji; in the Michelin Guide)
//   + ドミニク・ブシェ・キョート・ル・レストラン Dominique Bouchet Kyoto Le Restaurant (French, The Westin Miyako Kyoto)
//   + 遊亀 祇園店 Yuki Gion (izakaya run by the Shiga sake brewer Okamura Honke)
//   Same-name counts first, per brand or operator (2026-11-06): Smile Burger — one in Kyoto; Tabelog's search also shows
//   unrelated Smile Burgers near Dokkyodaigakumae, Miyoshi and Shin-Koiwa stations, which share only the name; a March 2024
//   review says this shop is run by a local design company. そのば — one. Dominique Bouchet — data has the sister concept
//   ドミニク・ブシェ・キョート・ル・テッパンヤキ in the same hotel and Les Copains de Dominique Bouchet in Tokyo; the hotel
//   page names Dominique Bouchet Tokyo and Les Copains as the chef's other two restaurants — a small group, and this is a
//   different concept, so drafted. The Westin has no hotel-wide record (洛空 Raku is its own record). 遊亀 — one on Tabelog.
//   Taken on 2026-11-06: `next core 200` (lane) gave Smile Burger 26005144 and そのば 26039638; `next notable 200` (lane)
//   gave Le Restaurant 26033296 and 遊亀 26015626. None is in data/kyoto.json: grep by name and address (清水4-188-1,
//   本塩竈町533-3 — shared with kyoto_this_is_ormary_store, a different business — 粟田口華頂町1 — shared with the hotel's
//   other two records — 富永町111-1) found none.
//   Service charges per Tabelog's Japanese original: Le Restaurant 「15%」; 遊亀 「440円（税込）」 (a per-person charge, the
//   appetizer per a September 2026 review); Smile Burger one-drink minimum from ¥300 (Tabelog remarks); そのば none listed.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-31');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ スマイルバーガー 清水寺店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005144/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_smile_burger_kiyomizudera', name: 'スマイルバーガー 清水寺店 (Smile Burger Kiyomizudera)', category: 'OMNI',
    lat: 34.996178, lng: 135.776824, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every burger comes in a soft white bun (2023–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and chicken burgers with cheese and bacon options (2022–26 reviews). No vegan information.',
    hours_raw: '11:00–20:00; closed Tuesday, with irregular closures (Tabelog). Reservations accepted (Tabelog). One-drink minimum for eating in, from ¥300 (Tabelog). Cards (JCB, AMEX, Diners), no e-money (Tabelog). 9 seats: 6 at tables and a sofa for 2–3 (Tabelog). Smoking outside the shop (May 2022). On Higashioji near the foot of Kiyomizu-zaka (March 2024); 2–3 min from the Gojozaka or Kiyomizu-michi bus stops (Tabelog). Lunch queues on busy days (August 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashioji below Kiyomizu-zaka — 2–3 min from Gojozaka bus stop',
    cuisine: 'Big American-style burgers in a soft, chewy white bun, patties grilled after you order, served with potato chips and pickles rather than fries (2020–26 reviews) · teriyaki burger with chips ¥1,300, Coke ¥300 (March 2024) · Smile cheeseburger ¥1,450 (November 2024) · salsa burger (August and October 2023), teriyaki chicken burger (November 2024), bacon cheeseburger (January 2025), the Quattro burger (March 2024) · canned soft drinks, drip coffee (2023–26 reviews)',
    website: 'http://www.smileburger.com/', gmaps: gm('smile burger 清水寺店'), menu_url: TB + 'dtlmenu/',
    notes: '[Burgers · Higashioji by Kiyomizu-zaka, a break from Japanese food] A nine-seat burger shop on the bus route to Kiyomizu-dera, open since 2008, its shelves lined with miniature cars. Thick patties grilled to order in a soft white bun, with potato chips and pickles; most burgers run ¥1,300–1,450, plus one drink each. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per a March 2024 review: opened in 2008 and run by the local design company Kyoto Shokunin Katagi. A January 2025 diner thought it was run by a couple; an August 2026 diner found one man working alone.',
      philosophy: null, specialty: 'Burgers in a white bun; salsa and teriyaki burgers.',
      anecdotes: [
        { text: 'A June 2020 diner called it the best-tasting of all the gourmet burgers tried, and a relief for anyone tired of Japanese food in Kyoto.', source: R + 'B468821794/' },
        { text: 'An October 2023 passer-by was drawn in by the smell of grilling meat, though missed having fries instead of chips.', source: R + 'B473215610/' },
        { text: 'An August 2026 diner shared the room with a foreign couple and then a group of six from overseas at the bench table in the middle.', source: R + 'B534307437/' },
      ],
      japanese_sources_summary: '食べログ: ハンバーガー・カフェ・アメリカ料理、東山区清水4-188-1、五条坂・清水道バス停から徒歩2〜3分、11:00〜20:00、火曜休み (不定休あり)、予約可、店内はワンドリンク制 (300円から)、カード可 (JCB・AMEX・Diners)、9席。口コミ (2020年6月〜2026年8月、英語): 白いバンズ、注文後に焼くパティ、ポテトチップスとピクルス付き、照り焼きバーガー1,300円、スマイルチーズバーガー1,450円、サルサバーガー、ミニカーの棚、2008年開店、地元のデザイン会社の経営 (2024年3月)。',
      confidence: 'medium', sources: [TB, R + 'B451273660/', R + 'B468821794/', R + 'B470181038/', R + 'B473215610/', R + 'B482193166/', R + 'B494765346/', R + 'B495791374/', R + 'B498505223/', R + 'B516495517/', R + 'B517711902/', R + 'B527861972/', R + 'B534307437/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order a burger and a drink at the table; many overseas visitors (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水4-188-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026. The official site returned 403 on 2026-11-06.' },
    pin_source: `Tabelog ${TB} (34.996178, 135.776824); cross-checked: GSI 京都府京都市東山区清水四丁目188番地 (lot) 64m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B482193166/', R + 'B495791374/'],
    price_note: 'Prices from March and November 2024 reviews; one-drink minimum (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Teriyaki burger with chips', '¥1,300', 'Burgers', 'no', 'no', 'March 2024.', 'teriyaki_burger'),
      it('', '', 'Smile cheeseburger', '¥1,450', 'Burgers', 'no', 'no', 'November 2024.', 'smile_cheeseburger'),
      it('', '', 'Salsa burger', '', 'Burgers', 'no', 'no', 'August and October 2023.', 'salsa_burger'),
      it('', '', 'Soft drink (required with a meal)', '¥300', 'Drinks', '', 'vegan', 'Coke or sparkling water (2024).', 'drink'),
    ] }, {
    cuisine: '白くもちっとしたバンズの大きなアメリカ風バーガー。パティは注文を受けてから焼き、ポテトではなくポテトチップスとピクルスが付く (2020〜2026年の口コミ)・照り焼きバーガー (チップス付き) 1,300円、コーラ300円 (2024年3月)・スマイルチーズバーガー1,450円 (2024年11月)・サルサバーガー (2023年8月・10月)、照り焼きチキンバーガー (2024年11月)、ベーコンチーズバーガー (2025年1月)、Quattro バーガー (2024年3月)・缶のソフトドリンク、ドリップコーヒー (2023〜2026年の口コミ)',
    neighborhood: '清水坂の下の東大路通。五条坂バス停から徒歩2〜3分',
    gf_detail: 'グルテンフリーではない。どのバーガーも白いバンズ (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。牛肉や鶏肉のバーガーにチーズやベーコン (2022〜2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[ハンバーガー・清水坂の東大路通、和食の合間に] 清水寺へのバス通りにある9席のハンバーガー店。2008年から営業し、棚にはミニカーが並ぶ。注文後に焼く厚いパティを白いバンズで、ポテトチップスとピクルスを添えて。バーガーは1,300〜1,450円ほどで、一人1ドリンク制。火曜休み。',
  });
}

// ================================================================ そのば
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26039638/'; const R = TB + 'dtlrvwlst/';
  const MI = 'https://guide.michelin.com/en/kyoto-region/kyoto/restaurant/sonoba';
  const H = day(['11:30', '15:00']);
  put({
    id: 'kyoto_sonoba', name: 'そのば (Sonoba)', category: 'OMNI',
    lat: 34.994483, lng: 135.764049, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The soba is juwari, 100% buckwheat milled in-house (Michelin Guide; July 2026 review), but the dipping sauce and broths are soy-based and the menu has sushi and dashimaki. No gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba served in dashi broths and dipping sauce (July 2026), with herring, duck, hamo and fish sushi on the menu (2026 reviews).',
    hours_raw: '11:30–15:00; closed Wednesday and Thursday (Tabelog). The Michelin Guide lists Saturday and Sunday to 17:00. No reservations (Tabelog); order and pay at the entrance before sitting at two large shared tables (October 2026). Queues are usual: five waiting before opening on a weekday, 30 min to an hour on summer weekends (July 2026), 15–20 min in September 2026. Cards, e-money and QR (Tabelog). 14 seats (Tabelog). Children welcome (Tabelog). On Tominokoji north of Rokujo; 407 m from Gojo Stn (Tabelog). Opened 7 July 2023 (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tominokoji north of Rokujo — 407 m from Gojo Stn',
    cuisine: 'Handmade juwari soba of buckwheat milled in-house, served on tableware the owner makes; the cold mori soba is the signature, and a seasonal soba changes monthly (Michelin Guide) · July’s chilled soba with hamo in a Manganji pepper broth with umeboshi (July 2026) · sudachi soba ¥2,100 (August 2026), duck dipping soba, walnut mazesoba (September and October 2026), nishin soba (June 2026) · bonito sushi, saba sushi, aji bo-zushi — saba can sell out (June–October 2026) · dashimaki omelette; drinks at lunchtime (2026 reviews)',
    website: null, gmaps: gm('そのば 蕎麦 京都 本塩竈町'), menu_url: TB + 'dtlmenu/',
    notes: '[Soba · Gojo Tominokoji, juwari soba on the owner’s own pottery] A bright, renovated room where the owner — soba maker and potter — serves 100% buckwheat soba milled in-house on plates from the studio, with a monthly seasonal bowl and sides of bonito or saba sushi. In the Michelin Guide, and reviewers call it a Bib Gourmand. Expect a queue; order and pay at the door. One July 2026 diner found the noodles clumpy and the soba-yu lukewarm. Lunch only; closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), a soba maker who also makes pottery (Michelin Guide)'], origin: null,
      background: 'Per the Michelin Guide: the proprietor is a soba craftsman who makes pottery, mills buckwheat in-house for handmade juwari soba, serves it on tableware of the owner’s own making, and designed the industrial-style interior with recycled materials. Reviewers (June–August 2026) call it a Michelin Bib Gourmand, and mention a pottery space where visitors can try making pottery (August 2026). Opened 7 July 2023 (Tabelog).',
      philosophy: null, specialty: 'Juwari mori soba; monthly seasonal soba; bonito sushi.',
      anecdotes: [
        { text: 'An August 2026 diner came for the soba and left raving about the bonito sushi, wanting a whole roll to take home.', source: R + 'B533464943/' },
        { text: 'A July 2026 diner noticed reggae playing and a staff vibe unlike a usual soba shop.', source: R + 'B532156966/' },
        { text: 'A July 2026 diner found the soba weak in aroma and clumpy, the wasabi ordinary and the soba-yu lukewarm, though the dipping sauce was well balanced.', source: R + 'B531337037/' },
      ],
      japanese_sources_summary: '食べログ: そば、下京区富小路六条上る本塩竈町533-3、五条駅から407m、11:30〜15:00、水木休み、予約不可、カード・電子マネー・QR 可、14席、子供可、2023年7月7日オープン。Michelin Guide (英語): 店主は蕎麦職人で陶芸家、自家製粉の手打ち十割蕎麦を自作の器で、もり蕎麦が看板、月替わりの季節の蕎麦、店主が設計した再生素材の内装。口コミ (2026年6月〜10月、英語): ビブグルマン、鱧と Manganji の唐辛子の冷たい蕎麦、すだち蕎麦2,100円、鴨のつけ蕎麦、くるみのまぜそば、にしん蕎麦、鰹の寿司、鯖寿司、鯵の棒寿司、だし巻き、入口で注文と会計、大きな相席のテーブル2つ、行列、陶芸体験。',
      confidence: 'medium', sources: [TB, MI, R + 'B530913199/', R + 'B531337037/', R + 'B532156966/', R + 'B532353058/', R + 'B532425360/', R + 'B533464943/', R + 'B533657600/', R + 'B535292856/', R + 'B535618727/', R + 'B537294698/', R + 'B537444332/', R + 'B538097750/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue, then order and pay at the entrance; shared tables. More than half the guests were from overseas (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区富小路六条上る本塩竈町533-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Michelin Guide listing and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.994438, 135.764049); cross-checked: GSI 京都府京都市下京区本塩竈町533番地 (lot) 44m; offset 5 m north of the Tabelog point because kyoto_this_is_ormary_store shares the address and sat 4.9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MI, R + 'B538097750/', R + 'B533657600/', R + 'B537294698/'],
    price_note: 'One item price from an August 2026 review; the Michelin Guide gives its lowest price band.', last_checked: TODAY, items: [
      it('', '', 'Mori soba (juwari)', '', 'Soba', 'ask', 'no', 'Signature (Michelin Guide; July 2026).', 'mori_soba'),
      it('', '', 'Sudachi soba', '¥2,100', 'Soba', 'ask', 'no', 'Limited-time (August 2026).', 'sudachi_soba'),
      it('', '', 'Seasonal soba of the month', '', 'Soba', 'ask', 'no', 'Hamo and Manganji pepper in July 2026.', 'monthly_soba'),
      it('', '', 'Bonito sushi', '', 'Sides', 'ask', 'no', '2026 reviews.', 'katsuo_sushi'),
      it('', '', 'Saba sushi', '', 'Sides', 'ask', 'no', 'Can sell out (July and October 2026).', 'saba_sushi'),
    ] }, {
    cuisine: '自家製粉の手打ち十割蕎麦を店主自作の器で。看板はもり蕎麦、季節の蕎麦は月替わり (Michelin Guide)・7月は鱧と Manganji の唐辛子の出汁に梅干しの冷たい蕎麦 (2026年7月)・すだち蕎麦2,100円 (2026年8月)、鴨のつけ蕎麦、くるみのまぜそば (2026年9月・10月)、にしん蕎麦 (2026年6月)・鰹の寿司、鯖寿司、鯵の棒寿司 (鯖は売り切れることも) (2026年6月〜10月)・だし巻き、昼から飲む客も (2026年の口コミ)',
    neighborhood: '六条の北の富小路通。五条駅から407m',
    gf_detail: '要確認。蕎麦は自家製粉の十割 (Michelin Guide、2026年7月の口コミ)。ただしつゆや出汁は醤油を使い、寿司やだし巻きもある。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。蕎麦は出汁やつゆで出し (2026年7月)、にしん、鴨、鱧、魚の寿司もある (2026年の口コミ)。',
    notes: '[蕎麦・五条富小路、店主の器で十割蕎麦] 明るく改装した店。蕎麦職人で陶芸家の店主が、自家製粉の十割蕎麦を自作の器で出す。月替わりの季節の蕎麦と、鰹や鯖の寿司も。Michelin Guide に掲載され、口コミではビブグルマン。行列が普通で、入口で注文と会計。2026年7月には蕎麦がまとまり、蕎麦湯がぬるかったという声も。昼のみ、水木休み。',
  });
}

// ================================================================ ドミニク・ブシェ・キョート・ル・レストラン
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26033296/'; const R = TB + 'dtlrvwlst/';
  const HP = 'https://www.miyakohotels.ne.jp/westinkyoto/restaurant/153028/index.html';
  const H = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_dominique_bouchet_restaurant', name: 'ドミニク・ブシェ・キョート・ル・レストラン (Dominique Bouchet Kyoto Le Restaurant)', category: 'OMNI',
    lat: 35.008539, lng: 135.787407, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Classic French courses with sauces, bread and pastry desserts (2025–26 reviews); the hotel publishes a food-allergy guide on the restaurant page. No gluten information found.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Butter sauces and seafood and meat courses (2025–26 reviews); a vegetable course dish appears ("Vegetable Symphony", February and March 2025), but no vegan information.',
    hours_raw: 'Lunch 11:30–14:30, dinner 17:00–22:00 (last entry 20:00); closed Wednesday except holidays (hotel page; Tabelog). Reservations accepted (Tabelog). Lunch from ¥10,000, dinner from ¥20,000, tax and service included (hotel page); service charge 15% (Tabelog, Japanese text: 「15%」). Cards (incl. UnionPay), Suica-type e-money and QR incl. Alipay and WeChat Pay (Tabelog). 54 seats and private rooms; wheelchair accessible (Tabelog). No children below elementary-school age except in private rooms; jackets recommended for men (Tabelog). On the 3rd floor of The Westin Miyako Kyoto, 2 min from Keage Stn; free hotel bus from Kyoto Stn Hachijo exit (Tabelog). Opened 27 November 2019 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Keage, in The Westin Miyako Kyoto — 2 min from Keage Stn',
    cuisine: 'French cuisine supervised by Dominique Bouchet, who holds a Michelin star in Tokyo, cooked by chef 左古 昂 as an "evolved classic" of Japanese ingredients and French technique, with light, deep sauces and a cellar of about 300 wines (hotel page) · lunch courses from ¥10,000 such as HARMONIE — corn from Murata Farm, lobster Parmentier with caviar butter, Kyoto sea bass with Basque sauce, braised oxtail with truffle mash (June 2026); weekday course SOLEIL (hotel page) · dinner from ¥20,000; the Heritage course with blue lobster jelly, sea urchin and caviar (April 2026) · abalone Rossini, Kamiseya venison, a winter vegetable "symphony" (February 2025) · à la carte at lunch; a dessert wagon (November 2025)',
    website: HP, gmaps: gm('Dominique Bouchet Kyoto Le RESTAURANT'), menu_url: HP,
    notes: '[French · Keage, Dominique Bouchet’s dining room in The Westin Miyako] The Westin Miyako’s main French restaurant, supervised by the Paris chef Dominique Bouchet and run by chef 左古 昂: blue lobster jelly with sea urchin and caviar, lobster Parmentier in caviar butter, sauces that are rich but light, a dessert wagon and city views. Lunch from ¥10,000, dinner from ¥20,000 including service. Reviewers find drinks and water pricey. No young children; jacket suggested. Closed Wednesday.',
    chef_bio: { chef_name: '左古 昂', roles: ['Chef since April 2022 (hotel page)', 'Supervised by Dominique Bouchet'], origin: null,
      background: 'Per the hotel page: Dominique Bouchet was chef at La Tour d’Argent and Hôtel de Crillon in Paris, opened Restaurant Dominique Bouchet in Paris’s 8th arrondissement in 2004, and besides Kyoto runs Dominique Bouchet Tokyo in Ginza and the bistro Les Copains de Dominique Bouchet. Chef 左古 昂 trained at Dominique Bouchet Tokyo in Ginza before coming to Kyoto, and has led this kitchen since April 2022. An April 2026 reviewer calls the chef Sako. The same hotel houses Dominique Bouchet Kyoto Le Teppanyaki.',
      philosophy: 'An "evolved classic": carefully chosen Japanese ingredients with traditional French technique, and sauces that are "deep yet light" (hotel page).', specialty: 'Blue lobster jelly with sea urchin and caviar; lobster Parmentier.',
      anecdotes: [
        { text: 'A March 2025 diner found the wine fairly priced for a luxury hotel and the 15% service charge stiff, and noted guests in T-shirts admitted despite the jacket advice.', source: R + 'B502325496/' },
        { text: 'A January 2026 regular felt the signature blue lobster had become smaller than before.', source: R + 'B520735403/' },
        { text: 'A June 2025 diner on a third visit asked ahead for Beluga caviar and finished with a choice from a wide range of teas.', source: R + 'B509742675/' },
      ],
      japanese_sources_summary: 'ホテルのページ: 東京でミシュラン一つ星のドミニク・ブシェ監修のフレンチ、左古シェフ (左古 昂、2022年4月から、銀座の Dominique Bouchet Tokyo で研修)、"進化形クラシック"、「味わい深いのに軽やか」なソース、約300種のカーヴ、ランチ11:30〜14:30、ディナー17:00〜22:00 (最終入店20:00)、水曜休み (祝日を除く)、ランチ10,000円〜、ディナー20,000円〜 (税・サービス料込み)、平日限定コース「SOLEIL」、食物アレルギー対応のご案内。食べログ: フレンチ、東山区粟田口華頂町1、蹴上駅から徒歩2分、ウェスティン都ホテル京都3階、サービス料15%、54席、個室、未就学児不可 (個室は可)、男性はジャケット推奨、2019年11月27日オープン。口コミ (2025年1月〜2026年7月、英語): ブルーオマールのジュレとウニとキャビア、オマールのパルマンティエ、デザートワゴン、飲み物と水が高い。',
      confidence: 'medium', sources: [TB, HP, R + 'B498673204/', R + 'B501994174/', R + 'B502325496/', R + 'B504091116/', R + 'B507028335/', R + 'B509742675/', R + 'B516897583/', R + 'B520319478/', R + 'B520735403/', R + 'B527751445/', R + 'B531016743/', R + 'B532952212/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course; staff explain each dish (January 2025). Jacket suggested for men; no children under elementary age except in private rooms. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区粟田口華頂町1 ウェスティン都ホテル京都 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel page and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.008539, 135.787407); cross-checked: GSI 京都府京都市東山区粟田口華頂町1番地 (lot) 100m; kyoto_dominique_bouchet_teppanyaki in the same hotel is 53 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [HP, R + 'B531016743/', R + 'B527751445/'],
    price_note: 'Hotel page: lunch from ¥10,000, dinner from ¥20,000, tax and service included (2026-11-06).', last_checked: TODAY, items: [
      it('', '', 'Lunch course (e.g. HARMONIE)', 'from ¥10,000', 'Lunch', 'ask', 'ask', 'Hotel page; HARMONIE in June 2026.', 'lunch_course'),
      it('', '', 'Dinner course (e.g. Heritage)', 'from ¥20,000', 'Dinner', 'ask', 'ask', 'Hotel page; Heritage in April 2026.', 'dinner_course'),
      it('', '', 'Blue lobster jelly with sea urchin and caviar', '', 'Signature', 'ask', 'no', '2025–26 reviews.', 'homard_gelee'),
      it('', '', 'Lobster Parmentier with caviar butter', '', 'Signature', 'ask', 'no', '2025–26 reviews.', 'homard_parmentier'),
    ] }, {
    cuisine: '東京でミシュラン一つ星のドミニク・ブシェ監修、左古 昂シェフが日本の食材と伝統的なフランス料理の技法で作る"進化形クラシック"。「味わい深いのに軽やか」なソース、約300種のワイン (ホテルのページ)・ランチは10,000円からで、HARMONIE のコースなど: Murata Farm のとうもろこし、オマールのパルマンティエ (キャビアバター)、Kyoto のスズキのバスク風ソース、牛テールの煮込みとトリュフのマッシュ (2026年6月)、平日限定の SOLEIL (ホテルのページ)・ディナーは20,000円から。Heritage のコースでブルーオマールのジュレとウニとキャビア (2026年4月)・アワビのロッシーニ、Kamiseya の鹿、冬の野菜の「シンフォニー」 (2025年2月)・ランチはアラカルトも、デザートワゴン (2025年11月)',
    neighborhood: '蹴上、ウェスティン都ホテル京都の中。蹴上駅から徒歩2分',
    gf_detail: '要確認。ソース、パン、焼き菓子のデザートのあるフレンチのコース (2025〜2026年の口コミ)。レストランのページに食物アレルギー対応の案内がある。グルテンの情報は見つからない。',
    vegan_detail: '要確認。バターのソース、魚介と肉のコース (2025〜2026年の口コミ)。野菜の一皿 (2025年2月・3月) もあるが、ヴィーガンの情報はない。',
    notes: '[フレンチ・蹴上、ウェスティン都ホテルのドミニク・ブシェ] ウェスティン都ホテル京都のフレンチ。パリのドミニク・ブシェが監修し、左古 昂シェフが率いる。ブルーオマールのジュレとウニとキャビア、キャビアバターのオマールのパルマンティエ、濃いのに軽いソース、デザートワゴン、街の眺め。ランチ10,000円から、ディナー20,000円から (サービス料込み)。飲み物と水は高めとの声。未就学児不可、ジャケット推奨。水曜休み。',
  });
}

// ================================================================ 遊亀 祇園店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26015626/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_yuki_gion', name: '遊亀 祇園店 (Yuki Gion)', category: 'OMNI',
    lat: 35.004489, lng: 135.774337, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a menu: vegetable tempura, corn kakiage, fried nama-fu (wheat gluten), nanban-zuke (2026 reviews); soy sauce throughout.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and sake izakaya — sashimi, hamo, dashimaki, oden in dashi (2026 reviews).',
    hours_raw: '16:00–23:00 (last order 22:00); closed Tuesday (Tabelog). Reservations accepted, and advised at dinner (June 2026); reservations taken until 19:00 (March 2026). Table charge ¥440 per person (Tabelog, Japanese text: 「440円（税込）」; an appetizer, ¥430 in September 2026). Cards (VISA, Master, JCB, AMEX) and QR incl. Alipay and WeChat Pay, no e-money (Tabelog). 58 seats at a counter downstairs and tatami upstairs; non-smoking, smoking area outside (Tabelog). Children and strollers welcome, second floor only (Tabelog). 5 min from Gion-Shijo Stn (Tabelog). Opened 16 December 2009 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, north of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Sake straight from the Shiga brewery Okamura Honke — its 金亀 range poured by rice-polishing ratio from 20% to 90% — with fresh fish at everyday prices (Tabelog, shop text; June and September 2026) · seasonal sake ¥660, hamo bone crackers ¥418, bluefin chutoro ¥1,309, oden ¥209, whelk ¥594 (September 2026) · hamo sashimi, flatfish sashimi, grilled bamboo shoots (April and July 2026) · fried nama-fu, dashimaki, grilled chicken neck, vegetable tempura (April 2026) · saba sushi with ginger and shiso, nanban-zuke (June 2026) · simmered chicken liver, corn tempura, grilled ayu (August 2026)',
    website: 'https://kin-kame.co.jp/stores/#store01', gmaps: gm('遊亀 祇園店'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Gion, a sake brewer’s own bar] A busy two-floor izakaya in Gion run by the Shiga brewer Okamura Honke, pouring its 金亀 sake by polishing ratio — taste the 60% against the 70% — alongside hamo, sashimi, dashimaki and fried nama-fu at prices reviewers call fair for Gion. Many overseas guests; book for dinner. ¥440 table charge. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), trained at a well-known Kyoto restaurant (Tabelog, shop text)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): an izakaya run directly by Okamura Honke, the Shiga sake brewery, serving its sake and fresh fish; the owner trained at a famous Kyoto restaurant. The brewery’s site (kin-kame.co.jp) describes 株式会社 岡村本家 of Toyosato, Shiga, founded in 安政元年 and maker of 金亀 and 大星, and lists the restaurants that pour its sake. A June 2026 review calls the shop a former direct operation of the brewery. Opened 16 December 2009 (Tabelog).',
      philosophy: null, specialty: 'The brewery’s sake by polishing ratio; hamo; fresh fish.',
      anecdotes: [
        { text: 'A June 2026 sake novice compared the 60% (dry) and 70% (rich) and could clearly taste the difference.', source: R + 'B530742473/' },
        { text: 'A regular on a 13th visit in July 2026 ordered flatfish sashimi and was surprised by the generous portion.', source: R + 'B487392629/' },
        { text: 'An August 2026 diner found the downstairs counter narrow and not very clean, and staff slow to grasp questions, but every dish beat expectations.', source: R + 'B533666002/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮、東山区富永町111-1、祇園四条駅から徒歩5分、16:00〜23:00 (L.O. 22:00)、火曜休み、予約可、440円（税込）、カード・QR 可、58席 (カウンター、座敷)、禁煙 (外に喫煙所)、子供は2階のみ、2009年12月16日オープン、店の紹介 (英訳): 滋賀の酒蔵 岡村本家の直営、蔵直送の酒と新鮮な魚、京都の名店で修業した店主。岡村本家のサイト: 滋賀県豊郷町、創業安政元年、金亀・大星。口コミ (2026年3月〜11月、英語): 精米歩合20〜90%の飲み比べ、季節の酒660円、鱧の骨せんべい418円、本鮪中トロ1,309円、おでん、バイ貝、鱧の刺身、生麩の揚げ物、だし巻き、鯖寿司、外国人の客が多い。',
      confidence: 'medium', sources: [TB, 'https://kin-kame.co.jp/stores/', R + 'B372710717/', R + 'B382977193/', R + 'B487392629/', R + 'B525437896/', R + 'B526078815/', R + 'B526391146/', R + 'B527443026/', R + 'B527519014/', R + 'B530742473/', R + 'B533666002/', R + 'B536231006/', R + 'B538586893/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter downstairs, tatami upstairs; sake listed by polishing ratio, so check prices (September 2026). Many overseas guests, but one August 2026 diner found staff slow to grasp questions. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区富永町111-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004489, 135.774337); cross-checked: GSI 京都府京都市東山区富永町111番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536231006/'],
    price_note: 'Prices from a September 2026 review; ¥440 table charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Seasonal sake (glass)', '¥660', 'Sake', '', 'ask', 'September 2026.', 'seasonal_sake'),
      it('', '', 'Hamo bone crackers', '¥418', 'Snacks', 'ask', 'no', 'September 2026.', 'hamo_senbei'),
      it('', '', 'Bluefin tuna chutoro', '¥1,309', 'Sashimi', 'ask', 'no', 'September 2026.', 'chutoro'),
      it('', '', 'Oden (ito-konnyaku)', '¥209', 'Oden', 'ask', 'no', 'September 2026.', 'oden'),
      it('', '', 'Table charge', '¥440', 'Charge', '', '', 'Tabelog.', 'table_charge'),
    ] }, {
    cuisine: '滋賀の酒蔵 岡村本家から直送の酒 (金亀を精米歩合20〜90%で) と新鮮な魚を手頃に (食べログの店の紹介、2026年6月・9月)・季節の酒660円、鱧の骨せんべい418円、本鮪中トロ1,309円、おでん209円、バイ貝594円 (2026年9月)・鱧の刺身、カレイの刺身、焼き筍 (2026年4月・7月)・生麩の揚げ物、だし巻き、せせりの焼き物、野菜の天ぷら (2026年4月)・生姜と大葉入りの鯖寿司、南蛮漬け (2026年6月)・鶏レバーの煮物、とうもろこしの天ぷら、鮎の焼き物 (2026年8月)',
    neighborhood: '祇園、四条の北。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。野菜の天ぷら、とうもろこしのかき揚げ、生麩の揚げ物、南蛮漬け (2026年の口コミ)。醤油も全体に使う。',
    vegan_detail: 'ヴィーガン不可。魚と酒の居酒屋 (刺身、鱧、だし巻き、出汁のおでん) (2026年の口コミ)。',
    notes: '[居酒屋・祇園、酒蔵の店] 滋賀の酒蔵 岡村本家が営む祇園の2階建ての居酒屋。金亀を精米歩合ごとに出し、60%と70%を飲み比べられる。鱧、刺身、だし巻き、生麩の揚げ物を、祇園にしては手頃な値段で。外国人の客も多く、夜は予約を。席料440円。火曜休み。',
  });
}

save();
