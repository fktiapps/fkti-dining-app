// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 54.
//   + 僧伽小野 京都浄教寺 Sanga Ono, Kyoto Jokyoji (Japanese restaurant in a temple hotel; ONO GROUP, Fukuoka)
//   + ソーセージ酒場 Garage19 (homemade sausages and craft beer, open late)
//   + ちりとり鍋 いその Chiritori Nabe Isono (Wagyu-offal chiritori hot pot; 株式会社88 group)
//   + 炭火焼 こてっぱん Sumibi-yaki Kotepan (charcoal yakitori in a townhouse)
//   - 生ホルモンいただき 四条河原町, 名代とんかつ かつくら 四条寺町店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26034782, 26043620, 26043470
//   (skipped), 26043146, 26040680, 26001920 (skipped).
//   None of the four drafted is in data/kyoto.json by name (僧伽小野/Sanga Ono, Garage19, いその/Isono, こてっぱん/Kotepan)
//   or address (貞安前之町620, 市之町240-1, 紙屋町369-1, 紙屋町367-1).
//   Same-name count (same brand or operator only): 僧伽小野 — one in our crawl; Tabelog's name search lists three (Kyoto
//   Jokyoji, Kyoto Shinmachi Bettei, Isshuan in Itoshima); Mitsui Fudosan's release (digitalpr.jp/r/41309) says ONO GROUP
//   runs several food businesses in Fukuoka and this was its first shop outside the prefecture — a non-local group of
//   unknown total size, drafted and flagged. いその — one shop; invoice holder 株式会社８８ (Kyoto, NTA register); a
//   September 2026 review lists sisters 大衆酒場 Momiji and Marufuku in Kawaramachi (ココロ, osw1-53, was also called a
//   Momiji sister) — a local group, flagged. こてっぱん — one in our crawl; a December 2025 review calls it a second branch
//   of a main shop not named — flagged. Garage19 — one shop; a review says it also runs a craft-beer shop in Pontocho.
//   Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: Garage19 お突き出し料として330円(税込み); いその なし
//   (the English wrongly says a charge applies); none listed for the other two.
//   Other-diner remarks (Greg 2026-11-06): single-review remarks about other customers left out (Kotepan July 2025,
//   Isono October 2026).
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-54');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043470', '生ホルモンいただき 四条河原町: chain — Tabelog’s name search lists Nama Horumon Itadaki shops at Namba, Sakaisuji-Honmachi, Ura-Tenjin, Imaizumi, Shijo-Kawaramachi and more');
skip('26001920', '名代とんかつ かつくら 四条寺町店: chain — our crawl has four かつくら shops in Kyoto (Kyoto Porta, Ginkakuji, Shijo-Teramachi, Shijo-Higashinotoin), and Tabelog’s name search lists more at Kansai Airport, Abeno Harukas, Hirakata, Shinjuku Takashimaya, Kawasaki and Kumamoto');

// ================================================================ 僧伽小野 京都浄教寺
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26034782/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://digitalpr.jp/r/41309';
  const H = day(['06:30', '11:00'], ['11:30', '15:30'], ['17:00', '21:30']);
  put({
    id: 'kyoto_sanga_ono_jokyoji', name: '僧伽小野 京都浄教寺 (Sanga Ono, Kyoto Jokyoji)', category: 'OMNI',
    lat: 35.00293, lng: 135.767187, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese set meals — sashimi, tempura, grilled fish, unaju, tai chazuke, chirashi — with soy-based seasoning; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A “Jokyoji veggie burger” with chickpea tomato sauce is one lunch main (December 2025, February 2026), and there is a salad buffet, but the miso soup is made with sake lees and dashi is not described.',
    hours_raw: 'Breakfast 6:30–11:00 (L.O. 10:30); lunch 11:30–15:30 (L.O. 14:30); dinner 17:00–21:30 (L.O. 20:30); open year-round (Tabelog). Reservations accepted; private rooms (Tabelog; April 2026). Cards, iD and QUICPay (Tabelog). 70 seats (Tabelog; Mitsui Fudosan release). On the 2nd floor of Mitsui Garden Hotel Kyoto Kawaramachi Jokyoji, built together with Jokyoji temple; a minute from exit 10 of Hankyu Kyoto-Kawaramachi Station (Tabelog). Opened 28 September 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi south of Shijo — Mitsui Garden Hotel Jokyoji, 2F',
    cuisine: 'Seasonal Japanese food in a temple hotel (Tabelog) · lunch: choose two to five mains from about twenty — e.g. eight-kind sashimi with seared battera, roasted salmon with brown-butter soy, chicken tempura with conger simmered in egg, the Jokyoji veggie burger — with a half buffet of rice from a hagama pot, chirashi sushi, salad, sake-lees miso soup and coffee; ¥2,800 for two mains (December 2025 – April 2026) · tai chazuke gozen ¥2,780 at lunch; unaju ¥3,980 (Tabelog; August 2026) · kaiseki for groups and business dinners, served by staff (December 2025, April 2026) · breakfast from 6:30 (Tabelog)',
    website: PR, gmaps: gm('僧伽小野 京都浄教寺'), menu_url: TB + 'dtlmenu/',
    notes: '[Japanese · Mitsui Garden Hotel Jokyoji, half-buffet lunch] A calm, roomy restaurant on the second floor of the temple hotel off Teramachi: a generous lunch of two to five mains — sashimi, tempura, grilled fish — with a buffet of hagama rice, chirashi and salad from ¥2,800, unaju and tai chazuke, and kaiseki with private rooms at night. Open from breakfast.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'A Mitsui Fudosan release (2020) says the restaurant was opened by ONO GROUP, which runs several food businesses in Fukuoka, as the second shop of the Michelin-listed 僧伽小野 一秀庵 in Itoshima and its first outside Fukuoka. Tabelog’s name search also lists a Kyoto Shinmachi Bettei.',
      philosophy: null, specialty: 'Half-buffet lunch; unaju.',
      anecdotes: [
        { text: 'A January 2026 visitor returns every January for lunch, and this time chose three mains — one too many.', source: R + 'B499750807/' },
        { text: 'An April 2026 diner booked a business kaiseki and was glad the staff plated each course.', source: R + 'B528001047/' },
      ],
      japanese_sources_summary: '三井不動産のリリース (2020年): 三井ガーデンホテル京都河原町浄教寺の2階、福岡県内で飲食事業を展開するONO GROUPの僧伽小野 一秀庵の2号店で県外初出店、日本料理、70席。食べログ: 日本料理、下京区寺町通四条下る貞安前之町620、阪急京都河原町駅10番出口から徒歩1分、朝食6:30〜11:00、昼11:30〜15:30、夜17:00〜21:30、年中無休、予約可、カード可、70席、2020年9月28日オープン、鯛茶漬け御膳2,780円、鰻重3,980円。口コミ (2025〜2026年、英語): 20種ほどから主菜を2〜5品選ぶ昼のハーフビュッフェ (羽釜ご飯、ばらちらし、サラダ、酒粕の味噌汁、コーヒー)、主菜2品で2,800円、刺身8種、浄教寺ベジバーガー、サーモン、穴子の卵とじ、個室での会席。',
      confidence: 'medium', sources: [PR, TB, R + 'B499750807/', R + 'B519367636/', R + 'B519543184/', R + 'B520300806/', R + 'B521840123/', R + 'B523479064/', R + 'B523942662/', R + 'B528001047/', R + 'B528791299/', R + 'B533036132/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant; easy to get in at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区寺町通四条下る貞安前之町620 三井ガーデンホテル京都河原町浄教寺 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.00293, 135.767187); cross-checked: GSI 京都府京都市下京区貞安前之町620番地 (lot) 51m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B520300806/'],
    price_note: 'Prices from Tabelog and a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch: two mains with the half buffet', '¥2,800', 'Lunch', 'ask', 'ask', 'December 2025.', 'lunch'),
      it('鯛茶漬け御膳', 'tai chazuke gozen', 'Sea-bream chazuke set', '¥2,780', 'Lunch', 'ask', 'no', 'Tabelog.', 'tai_chazuke'),
      it('鰻重', 'unajū', 'Grilled eel on rice', '¥3,980', 'Mains', 'ask', 'no', 'Tabelog; August 2026.', 'unaju'),
    ] }, {
    cuisine: '寺院と一体のホテルの季節の日本料理 (食べログ)・昼: 20種ほどから主菜を2〜5品選び (刺身8種と炙りばってら、サーモンの焦がしバター醤油、若鶏の天ぷらと穴子の卵とじ、浄教寺ベジバーガーなど)、羽釜ご飯、ばらちらし、サラダ、酒粕の味噌汁、コーヒーのハーフビュッフェ。主菜2品で2,800円 (2025年12月〜2026年4月)・昼の鯛茶漬け御膳2,780円。鰻重3,980円 (食べログ、2026年8月)・宴会や接待の会席は店員が取り分ける (2025年12月、2026年4月)・朝6時半から朝食 (食べログ)',
    neighborhood: '四条の南の寺町。三井ガーデンホテル浄教寺の2階',
    gf_detail: '要確認。刺身、天ぷら、焼き魚、鰻重、鯛茶漬け、ちらしなど醤油で味をつける日本料理の定食。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。昼の主菜にひよこ豆のトマトソースの「浄教寺ベジバーガー」があり (2025年12月、2026年2月)、サラダのビュッフェもあるが、味噌汁は酒粕入りで、出汁については書かれていない。',
    notes: '[日本料理・三井ガーデンホテル浄教寺、ハーフビュッフェの昼] 寺町から入った寺院ホテルの2階の落ち着いた広い店。刺身、天ぷら、焼き魚から2〜5品選び、羽釜ご飯、ちらし、サラダのビュッフェが付くたっぷりの昼が2,800円から。鰻重や鯛茶漬けも、夜は個室で会席。朝食から開く。',
  });
}

// ================================================================ ソーセージ酒場 Garage19
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043620/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.beerbargarage19.com/';
  const H = day(['18:00', '02:00']);
  put({
    id: 'kyoto_garage19_sausage', name: 'ソーセージ酒場 Garage19 (Sausage Sakaba Garage19)', category: 'OMNI',
    lat: 35.002151, lng: 135.769766, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Homemade sausages and meat dishes with craft beer; no gluten information (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sausage and meat bar (Tabelog; September 2026).',
    hours_raw: 'Tuesday–Sunday and holidays 18:00–2:00 (L.O. food 1:00, drinks 1:30); closed Monday (Tabelog). Reservations accepted (Tabelog). Otoshi charge ¥330 including tax (Tabelog, original お突き出し料として330円(税込み)). Cards, IC cards and e-money (Tabelog). 15 seats: 7 at the counter, 8 at tables (Tabelog). Smoking allowed (September 2026). On the 2nd floor of the Kawaramachi Apex Building 2, about 5 min from Hankyu Kawaramachi Station (Tabelog). Opened 6 September 2024 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Shijo — 5 min from Hankyu Kawaramachi',
    cuisine: 'Homemade sausages and meat dishes, with ingredients rooted in Miyama, Kyoto (Tabelog) · a wide range of craft beer and craft shochu (Tabelog; September 2026) · occasional fish dishes (September 2026) · a garage-style room inspired by an old country garage (Tabelog)',
    website: SITE, gmaps: gm('ソーセージ酒場 Garage19'), menu_url: SITE,
    notes: '[Sausage bar · Kawaramachi 2F, craft beer late] A small garage-style bar a few minutes from Hankyu Kawaramachi, making its own sausages with Miyama ingredients and pouring craft beer and craft shochu until 2:00. ¥330 otoshi; smoking allowed; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes homemade sausages and dishes using ingredients rooted in Miyama, Kyoto, in a room modelled on an old country garage. A September 2026 reviewer says the same people run a craft-beer shop in Pontocho.',
      philosophy: null, specialty: 'Homemade sausages; craft beer.',
      anecdotes: [
        { text: 'A September 2026 reviewer praised the shochu range and the occasional fish dish alongside the sausages.', source: R + 'B535641633/' },
      ],
      japanese_sources_summary: '食べログ: ソーセージ酒場 Garage19、ビアバー・肉料理、下京区市之町240-1 河原町アペックスビル2 2F、阪急河原町駅から徒歩5分、火〜日・祝 18:00〜翌2:00 (L.O.料理1:00、ドリンク1:30)、月曜定休、予約可、お突き出し料330円 (税込)、カード・電子マネー可、15席 (カウンター7、テーブル8)、2024年9月6日オープン、自家製ソーセージ、クラフトビールとクラフト焼酎、京都の Miyama にゆかりの食材、古い田舎のガレージ風の店内。口コミ (2026年9月、英語): 焼酎の種類が多い、先斗町でクラフトビールの店も営む、ときどき魚料理、喫煙可。',
      confidence: 'low', sources: [SITE, TB, R + 'B535641633/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small late-night bar; ¥330 otoshi; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区市之町240-1 河原町アペックスビル2 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; one review, September 2026.' },
    pin_source: `Tabelog ${TB} (35.002151, 135.769766); cross-checked: GSI 京都府京都市下京区市之町240番地 (lot) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Only the otoshi charge is published.', last_checked: TODAY, items: [
      it('', '', 'Homemade sausages', '', 'Food', 'ask', 'no', 'Tabelog.', 'sausage'),
      it('', '', 'Otoshi charge', '¥330', 'Charges', '', '', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '京都の Miyama にゆかりの食材を使う自家製ソーセージと肉料理 (食べログ)・クラフトビールとクラフト焼酎がそろう (食べログ、2026年9月)・ときどき魚料理も (2026年9月)・古い田舎のガレージ風の店内 (食べログ)',
    neighborhood: '四条の南の河原町。阪急河原町から徒歩5分',
    gf_detail: '要確認。自家製ソーセージと肉料理にクラフトビール。グルテンの情報はない (食べログ)。',
    vegan_detail: 'ヴィーガンではない。ソーセージと肉の酒場 (食べログ、2026年9月)。',
    notes: '[ソーセージ酒場・河原町の2階、夜遅くまでクラフトビール] 阪急河原町から数分のガレージ風の小さな店。Miyama の食材で作る自家製ソーセージに、クラフトビールとクラフト焼酎を深夜2時まで。お通し330円、喫煙可、月曜定休。',
  });
}

// ================================================================ ちりとり鍋 いその
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043146/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:00', '24:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'kyoto_chiritori_nabe_isono', name: 'ちりとり鍋 いその (Chiritori Nabe Isono)', category: 'OMNI',
    lat: 35.004711, lng: 135.77026, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chiritori hot pot of Wagyu offal and vegetables in a sweet-spicy sauce, finished with noodles or rice; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu-offal hot pot restaurant (Tabelog; reviews).',
    hours_raw: 'Tuesday–Saturday 17:00–24:00 (L.O. 23:00); Sunday and holidays 17:00–23:00 (L.O. 22:00); closed Monday (Tabelog; September 2026). Reservations accepted; a table booking may be moved to the counter when busy (Tabelog). No service charge (Tabelog, original なし — the English translation is wrong). Cards including UnionPay; no e-money or QR (Tabelog). 27 seats: a U-shaped counter of 19 around an open kitchen and two tables (Tabelog; 2026). No takeaway (September 2026). Two minutes from Hankyu Kyoto-Kawaramachi Station, on the Jukkencho-bashi street just west of the Takase River (Tabelog; 2026). Opened 20 June 2025 (September 2026 review).',
    hours: { 1: A, 2: A, 3: A, 4: A, 5: A, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi north of Shijo, west of the Takase River',
    cuisine: 'Chiritori nabe — Osaka-style hot pot in a shallow square pan — of carefully chosen Wagyu offal from across Japan (Tabelog) · horumon nabe; premium horumon nabe with neck and short rib, ¥2,780 a person for two or more (2026); noodles, ramen or fried rice to finish (2026) · a 2026 limited offer: a Kumamoto A5 strip-loin steak grilled at the counter with a chiritori set for two or more (September–November 2026) · grilled Wagyu loin yukke, today’s sashimi, cream cheese kimchi, cheese risotto (September 2026) · the staff cook the hot pot for you (2026)',
    website: null, gmaps: gm('ちりとり鍋 いその 河原町'), menu_url: TB + 'dtlmenu/',
    notes: '[Chiritori hot pot · Kawaramachi by the Takase River, Wagyu offal] A lively counter around an open kitchen two minutes from Hankyu Kawaramachi, where staff cook Osaka-style chiritori hot pots of Wagyu offal and vegetables in a sweet-spicy sauce (¥2,780 a person), finished with noodles. Open since June 2025; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Manager (unnamed)'], origin: null,
      background: 'Tabelog’s invoice number T3130001055762 is registered to 株式会社８８, Kyoto (NTA register). A September 2026 reviewer lists two sister shops in Kawaramachi, Taishu Sakaba Momiji and Marufuku. Reviewers note the manager grilling the steak at the counter (October 2026).',
      philosophy: null, specialty: 'Premium horumon chiritori nabe.',
      anecdotes: [
        { text: 'A first-time pair in September 2026 skipped the meat version and found the offal-only hot pot plenty, then added ramen.', source: R + 'B536355571/' },
        { text: 'An October 2026 regular came back a year after a first chiritori nabe here, hooked on the broth.', source: R + 'B512250596/' },
      ],
      japanese_sources_summary: '食べログ: ちりとり鍋 いその、焼肉・ホルモン・鍋、中京区紙屋町369-1、阪急京都河原町駅から徒歩2分、火〜土 17:00〜24:00 (L.O.23:00)、日・祝 17:00〜23:00、月曜定休、予約可、サービス料なし、カード可、27席 (カウンター19、テーブル2)、全国から選んだ和牛ホルモンのちりとり鍋、適格請求書 T3130001055762 (株式会社８８)。口コミ (2025〜2026年、英語): 2025年6月20日オープン、上ホルモン鍋1人2,780円 (2人前から)、締めの麺やラーメン、焼き飯、期間限定で熊本のA5サーロインのステーキ付き、和牛ロースの炙りユッケ、刺身、クリームチーズキムチ、チーズリゾット、店員が鍋を作ってくれる、姉妹店は Taishu Sakaba Momiji と Marufuku。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3130001055762', R + 'B510677873/', R + 'B512250596/', R + 'B535893122/', R + 'B536255839/', R + 'B536355571/', R + 'B536606158/', R + 'B538226834/', R + 'B538257233/', R + 'B538339704/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter hot pot; staff cook for you.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区紙屋町369-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004711, 135.77026); cross-checked: GSI 京都府京都市中京区紙屋町369番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535893122/', R + 'B538339704/'],
    price_note: 'Hot-pot price from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Premium horumon chiritori nabe (per person, two or more)', '¥2,780', 'Hot pot', 'ask', 'no', '2026.', 'premium_nabe'),
      it('', '', 'Noodles to finish', '', 'Finish', 'no', 'no', '2026.', 'shime'),
    ] }, {
    cuisine: '全国から選んだ和牛ホルモンの、大阪風の浅い四角い鍋のちりとり鍋 (食べログ)・ホルモン鍋。ネックやカルビの上ホルモン鍋は1人2,780円 (2人前から) (2026年)。締めは麺、ラーメン、焼き飯 (2026年)・2026年の期間限定: 2人前以上のちりとり鍋のセットに、カウンターで焼く熊本のA5サーロインのステーキ (2026年9〜11月)・和牛ロースの炙りユッケ、本日の刺身、クリームチーズキムチ、チーズリゾット (2026年9月)・鍋は店員が作ってくれる (2026年)',
    neighborhood: '四条の北の河原町、高瀬川の西',
    gf_detail: '要確認。甘辛いたれで和牛ホルモンと野菜を煮るちりとり鍋、締めは麺かご飯。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。和牛ホルモンの鍋の店 (食べログ、口コミ)。',
    notes: '[ちりとり鍋・高瀬川そばの河原町、和牛ホルモン] 阪急河原町から2分、オープンキッチンを囲むにぎやかなカウンターで、和牛ホルモンと野菜を甘辛く煮る大阪風のちりとり鍋 (1人2,780円) を店員が作ってくれる。締めは麺で。2025年6月開店、月曜定休。',
  });
}

// ================================================================ 炭火焼 こてっぱん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040680/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-koteppan.com/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_sumibi_kotepan', name: '炭火焼 こてっぱん (Sumibi-yaki Kotepan)', category: 'OMNI',
    lat: 35.004895, lng: 135.770082, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal yakitori with a house tare, chicken wings, fried drumsticks and karaage; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori restaurant (Tabelog; reviews).',
    hours_raw: '17:00–24:00 daily (Tabelog). Reservations accepted; a 2-hour limit may apply (Tabelog; July 2025). Cards (Master, JCB, AMEX, Diners) and QR payments; no e-money (Tabelog). 32 seats over two floors, counter and tables; groups up to 18 (Tabelog; 2025–2026). Self-ordering from your seat (Tabelog). Down a back alley, two minutes from Hankyu Kyoto-Kawaramachi Station (Tabelog; June 2026). Opened 3 March 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi north of Shijo — back alley, 2 min from Hankyu',
    cuisine: 'Charcoal yakitori of fresh chicken from Fushimi, Kyoto, with a homemade secret tare, in a Kyoto townhouse (Tabelog) · skewers such as thigh, tsukune, garlic chicken and shishito; fried eggplant with sauce (December 2025) · chicken wings and fried drumsticks (September 2026) · karaage and fries, easy for children (June 2026) · potato salad, oyakodon (December 2025) · a wide sake and drink list; all-you-can-drink courses (Tabelog; May 2026)',
    website: SITE, gmaps: gm('炭火焼 こてっぱん 河原町'), menu_url: SITE,
    notes: '[Yakitori · Kawaramachi back alley, charcoal and Fushimi chicken] A two-storey townhouse yakitori bar down an alley by Hankyu Kawaramachi, grilling Fushimi chicken over charcoal with a house tare — wings and fried drumsticks are favourites — with a long drink list and self-ordering. Open every evening until midnight.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Tabelog’s shop text describes chicken from Fushimi, Kyoto, grilled over high-quality charcoal with a homemade sauce, in a Kyoto townhouse. A December 2025 reviewer calls it the second branch of a main shop.',
      philosophy: null, specialty: 'Charcoal yakitori; chicken wings.',
      anecdotes: [
        { text: 'A June 2026 group of eight with children found a same-day table upstairs, with karaage and fries for the kids.', source: R + 'B530516920/' },
        { text: 'A September 2026 wing enthusiast came back for the charcoal tebasaki and fried drumsticks.', source: R + 'B535720473/' },
      ],
      japanese_sources_summary: '食べログ: 炭火焼 こてっぱん、焼き鳥・居酒屋・鶏料理、中京区河原町通四条上ル紙屋町367-1、阪急京都河原町駅から徒歩2分、毎日17:00〜24:00、予約可、カード・QR決済可、32席、18名まで、セルフオーダー、2024年3月3日オープン、京都伏見の鶏を備長炭で焼き自家製の秘伝のたれ、京町家。口コミ (2025〜2026年、英語): もも、つくね、にんにく、ししとう、揚げなすのたれ、手羽先、手羽元の唐揚げ、唐揚げ、フライドポテト、ポテトサラダ、親子丼、日本酒、2時間制、2階席、本店の2号店 (2025年12月の口コミ)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B499095540/', R + 'B510548678/', R + 'B519279034/', R + 'B521514493/', R + 'B530516920/', R + 'B530982846/', R + 'B535671920/', R + 'B535693402/', R + 'B535720473/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-ordering; 2-hour limit when busy.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町通四条上ル紙屋町367-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004895, 135.770082); cross-checked: GSI 京都府京都市中京区紙屋町367番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519279034/', R + 'B535720473/'],
    price_note: 'No prices read.', last_checked: TODAY, items: [
      it('', '', 'Yakitori (thigh, tsukune, garlic chicken)', '', 'Yakitori', 'ask', 'no', 'December 2025.', 'yakitori'),
      it('', '', 'Charcoal chicken wings', '', 'Yakitori', 'ask', 'no', 'September 2026.', 'tebasaki'),
      it('', '', 'Fried chicken drumsticks', '', 'Fried', 'ask', 'no', 'September 2026.', 'drumstick'),
    ] }, {
    cuisine: '京都伏見の新鮮な鶏を炭火で焼き、自家製の秘伝のたれで出す京町家の焼き鳥 (食べログ)・もも、つくね、にんにく、ししとうの串、揚げなすのたれ (2025年12月)・手羽先と手羽元の唐揚げ (2026年9月)・子どもも食べやすい唐揚げとポテト (2026年6月)・ポテトサラダ、親子丼 (2025年12月)・日本酒など飲み物が豊富、飲み放題のコースも (食べログ、2026年5月)',
    neighborhood: '四条の北の河原町。阪急から2分の裏路地',
    gf_detail: '要確認。たれの炭火焼き鳥、手羽先、手羽元の唐揚げ、唐揚げ。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。鶏の焼き鳥の店 (食べログ、口コミ)。',
    notes: '[焼き鳥・河原町の裏路地、炭火と伏見の鶏] 阪急河原町そばの路地にある2階建ての町家の焼き鳥屋。伏見の鶏を炭火で焼き自家製のたれで。手羽先や手羽元の唐揚げが人気で、飲み物も豊富、セルフオーダー。毎晩24時まで。',
  });
}

save();
