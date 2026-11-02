// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 15.
//   Ids checked for parity: 27107700, 27043596, 27141240, 27118502 (all even).
//   + すし 礫 Sushi Sazara (8-seat Kitashinchi sushi counter in a tea-room style, omakase only)
//   + フーロン Hu-Long (modern Chinese counter in Kitashinchi since 2009, Tabelog Chinese WEST 100 2021/2023/2024; weekday lunch)
//   + RYU (Kitashinchi izakaya of small dishes and kamameshi by night, fresh Awaji pasta by day, since 2024)
//   + 串揚げ 名倉 Kushiage Nagura (8-seat kushiage omakase in Dojima, since 2020)
//   Chain check: 礫: invoice T8810531654620 → 山本広孝, an individual (NTA register); one shop (a regular calls it independent since).
//   フーロン: invoice T3810347045687 → 北村　克治, an individual (NTA register); one shop. RYU: invoice T5810870182145 → 松谷　竜二郎, an
//   individual (NTA register); one shop. 名倉: one shop (official site kushiage-nagura.com: the owner's own shop).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ すし 礫
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27107700/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '23:00']);
  put({
    id: 'osaka_sushi_sazara_kitashinchi', name: 'すし 礫 (Sushi Sazara)', category: 'MOM_AND_POP',
    lat: 34.697306, lng: 135.499112, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Nigiri seasoned with a sharp soy sauce, a sweet Kyushu soy sauce or rock salt; a fried shrimp-taro dish and saikyo-grilled fish in the course. The shop invites diners to state dietary restrictions when booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish omakase of sashimi, cooked dishes and sushi.',
    hours_raw: 'Mon–Sat 18:00–23:00; closed Sundays and holidays (Tabelog). Omakase course only, by reservation; overseas guests must give a reachable phone number, email, hotel name and hotel phone, or the booking is cancelled (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), QUICPay; no QR (Tabelog). 8 seats at the counter; private hire up to 20; non-smoking (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曽根崎新地1-6-4, 2F of 日宝ラフォーレ北新地 — 4 min from Kitashinchi Stn',
    cuisine: 'Omakase only: sushi of fish from around Japan, the rice served at body warmth, with many small dishes first, in a counter room styled like a tea room (Tabelog) · omakase course of 18 items ¥17,600 (from August 2025; Tabelog, tax included) · dishes named in 2025–2026: spinach and turnip soup, botan shrimp, marinated mackerel, grilled horse mackerel, abalone with liver sauce, liver with Nara pickles, fried shrimp taro with karasumi mochi, fugu milt, Matsuba crab chawanmushi, crab and abalone, matsutake and sea bream soup, saikyo-grilled fish, grilled nodoguro; nigiri of red-vinegar rice, e.g. swordtip squid, Spanish mackerel, akami, chutoro, nodoguro, a fluffy anago to finish · over 15 sakes, small tasting pours, sake in a wine glass on request; sommelier-chosen wines (Tabelog; 2025–2026)',
    website: null, gmaps: gm('すし 礫 北新地'), menu_url: null,
    notes: "[Sushi · Kitashinchi, an omakase in a tea-room setting] An eight-seat counter on a second floor in Kitashinchi, styled like a tea room with tea utensils on display, run by a chef with a background in Japanese cuisine. There is one menu, an ¥17,600 omakase: a long run of small dishes such as abalone with its liver sauce, karasumi mochi or crab chawanmushi, then nigiri on red-vinegar rice served warm, often with nodoguro and a fluffy anago to finish. Ask to taste the sakes in small pours, or in a wine glass. A January 2026 diner noticed many foreign guests; overseas bookings need full contact details. One January 2026 diner found the nigiri seasonings uneven; most others call it a hidden gem.",
    chef_bio: { chef_name: '山本広孝', roles: ['Owner (the invoice holder)', 'counter staff'], origin: null, background: 'The Tabelog invoice number T8810531654620 is registered to an individual, 山本広孝 (NTA invoice register, read 2026-11-02). Per the shop-maintained Tabelog listing: a relaxing space without formality, inspired by a tea room; sushi from ingredients across Japan served at the right temperature; omakase only from August 2025. A November 2025 regular of twelve visits has come since "before it became independent" and says the chef has a background in Japanese cuisine.', philosophy: 'Each dish "carefully crafted to be savored at the perfect temperature, including the ideal warmth of the sushi rice" (Tabelog).', specialty: 'Omakase of small dishes and red-vinegar nigiri.',
      anecdotes: [
        { text: '"Additionally, you can enjoy Japanese sake in a wine glass if you ask." — November 2025, a twelfth visit.', source: R + 'B401541391/' },
        { text: '"There were many foreign guests as well, all captivated by the chefs\' techniques." — January 2026.', source: R + 'B520488066/' },
        { text: '"Each piece of sushi was beautifully presented on the tatami mat." — September 2025, a second visit.', source: R + 'B502849739/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): すし 礫、寿司・日本料理・海鮮、大阪市北区曽根崎新地1-6-4 日宝ラフォーレ北新地 2F、北新地駅から徒歩4分、月〜土18:00〜23:00、日・祝休み、予約可、海外のお客様は連絡のつく電話番号・メール・ホテル名・ホテルの電話番号が必要、カード・QUICPay 可、QR 不可、8席、貸切20名まで、禁煙、茶室をイメージした空間、全国の厳選素材の寿司をちょうどよい温度で、一品料理、15種以上の日本酒、ソムリエが選ぶワイン、おまかせコースのみ18品17,600円 (2025年8月から)。インボイス登録は個人の山本広孝。口コミ(2025年1月〜2026年8月): 独立前からの常連、和食出身の大将、アワビの蒸し具合、のどぐろの焼き物、日本酒をワイングラスで、赤酢のシャリ、カニとアワビ、松茸と鯛のお椀、穴子、ほうれん草とかぶのスープ、ボタンエビ、しめさば、アジの焼き物、アワビの肝ソース、Nara の漬物、からすみ餅、白子、Matsuba のカニの茶碗蒸し、ケンサキイカ、サワラ、西京焼き、外国人のお客さんも多い、にぎりの味つけがばらばらという声、静かで丁寧な大将、明るい店主。',
      confidence: 'medium', sources: [TB, R + 'B401541391/', R + 'B502849739/', R + 'B511965023/', R + 'B520488066/', R + 'B521065715/', R + 'B521797681/', R + 'B524056647/', R + 'B528074782/', R + 'B534366230/', R + 'B537192973/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase only; Tabelog sets booking rules for overseas guests, and a January 2026 diner saw many foreign guests. No English-language evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-6-4 日宝ラフォーレ北新地 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目6番4号 (go) 11m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'The only menu is the omakase (Tabelog, tax included).', last_checked: TODAY, items: [
      it('', '', 'Omakase course, 18 items', '¥17,600', 'Courses', 'ask', 'no', 'Tabelog; from August 2025.', 'omakase'),
    ] }, {
    cuisine: 'おまかせのみ: 全国の魚の寿司を人肌のシャリで、先に一品がたくさん、茶室のようなカウンター (食べログ)・おまかせコース18品17,600円 (2025年8月から、食べログ、税込)・2025年〜2026年の口コミに出てくる料理: ほうれん草とかぶのスープ、ボタンエビ、しめさば、アジの焼き物、アワビの肝ソース、肝と Nara の漬物、海老芋の揚げ物とからすみ餅、ふぐの白子、Matsuba のカニの茶碗蒸し、カニとアワビ、松茸と鯛のお椀、西京焼き、のどぐろの焼き物。赤酢のシャリのにぎりは剣先イカ、サワラ、赤身、中トロ、のどぐろ、〆はふわふわの穴子・日本酒は15種以上で少量の飲み比べもでき、頼めばワイングラスで。ソムリエが選ぶワイン (食べログ、2025年〜2026年)',
    neighborhood: '曽根崎新地1-6-4、日宝ラフォーレ北新地の2階。北新地駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。にぎりはきりっとした醤油、Kyushu の甘い醤油、岩塩で。コースに海老芋の揚げ物や西京焼きも。予約のときに食事の制限を伝えるよう店が案内している (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。刺身、一品、寿司の魚のおまかせ。',
    notes: '[寿司・北新地、茶室のようなおまかせ] 北新地のビルの2階にある8席のカウンターで、茶道具を飾った茶室のような店。和食出身の大将が握る。メニューは17,600円のおまかせだけ: アワビの肝ソース、からすみ餅、カニの茶碗蒸しなど一品がたくさん続き、それから温かい赤酢のシャリのにぎり、のどぐろやふわふわの穴子で終わることが多い。日本酒は少量の飲み比べや、ワイングラスでも。2026年1月には外国人のお客さんが多かったという声があり、海外からの予約には連絡先の情報が必要。にぎりの味つけがばらばらだったという声もある (2026年1月) が、多くは隠れた名店とほめている。',
  });
}

// ================================================================ フーロン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27043596/'; const R = TB + 'dtlrvwlst/';
  const M = day(['18:00', '22:00']); const T = day(['11:30', '14:00'], ['18:00', '22:00']); const S = day(['18:00', '21:00']);
  put({
    id: 'osaka_hu_long_kitashinchi', name: 'フーロン (Hu-Long)', category: 'MOM_AND_POP',
    lat: 34.697020, lng: 135.498338, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Peking duck, Shanghai crab yakisoba on thin Hong Kong noodles, boiled dumplings, sweet and sour pork and sauced Chinese dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the mapo tofu has a chicken broth, and the menu is of duck, pork, beef, crab and seafood.',
    hours_raw: 'Lunch Tue–Fri 11:30–14:00 (last order 13:30), no bookings, ends when sold out; dinner Mon–Fri 18:00–22:00 (last order 21:30), Sat 18:00–21:00 (last order 20:30); closed Sundays and holidays and occasionally on short notice (Tabelog). Dinner reservation only; call after 14:00 (Tabelog). Dinner service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, d Barai, Rakuten Pay, au PAY; lunch cash or PayPay only (Tabelog). 13 seats: a counter of 9 at the open kitchen and one table of 4; non-smoking (Tabelog). Opened 20 May 2009 (Tabelog).',
    hours: { 0: M, 1: T, 2: T, 3: T, 4: T, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-2-4, 2F of 谷安セストビル, menu board at the foot of the stairs — 3 min from Kitashinchi Stn exit 11-23',
    cuisine: 'Modern Chinese, from Chinois style to home cooking, cooked at an open-kitchen counter (Tabelog) · signature "Shanghai crab yakisoba": ultra-thin Hong Kong noodles under a crab-miso sauce; Shaoxing wine aged 3–5 years in clay jars (Tabelog) · Hu-Long course of eight dishes with Peking duck and braised shark fin ¥10,000 + tax (Tabelog); à la carte in half portions on request (August 2026) · dinner dishes named in 2026: Peking duck, numbing Sichuan-pepper mapo tofu, ebi mayo, sweet and sour pork, beef with green peppers, Shanghai crab yakisoba · weekday lunch: colourful plate lunch (soup, salad, e.g. sweet and sour pork, boiled dumplings, stir-fried seafood, sesame balls and almond jelly) ¥1,500 on the listing (¥1,000 per an August 2026 diner); mapo tofu rice set with salad, chicken soup and dessert ¥1,400; a noodle set on Fridays (Tabelog; June–October 2026)',
    website: null, gmaps: gm('フーロン 北新地 中華'), menu_url: null,
    notes: "[Chinese · Kitashinchi, modern Chinese at a counter] A 13-seat modern Chinese restaurant in Kitashinchi since 2009, on Tabelog's Chinese WEST 100 list in 2021, 2023 and 2024, where you watch the chef at the open kitchen. Dinner is reservation-only: Peking duck without a trace of gaminess, a mapo tofu loud with Sichuan pepper, and the signature Shanghai crab yakisoba of thin Hong Kong noodles under crab miso, with jar-aged Shaoxing wine; the eight-dish course with shark fin is ¥10,000 plus tax and service, and dishes can come in half portions. Weekday lunch is first come: a colourful plate of small dishes or a mapo tofu rice set, about ¥1,400–1,500, cash or PayPay. One cook works the kitchen, so dinner moves slowly (October 2026).",
    chef_bio: { chef_name: '北村克治', roles: ['Owner (the invoice holder)', 'one floor staff member'], origin: null, background: 'The Tabelog invoice number T3810347045687 is registered to an individual, 北村　克治 (NTA invoice register, read 2026-11-02). Per the shop-maintained Tabelog listing: modern Chinese from Chinois style to home cooking, the Shanghai crab yakisoba, jar-aged Shaoxing wine, an open kitchen with a counter; opened 20 May 2009; Tabelog Chinese WEST 100 in 2021, 2023 and 2024. A July 2026 diner writes that it is run by a man and a woman from China; an October 2026 diner saw the chef cooking alone.', philosophy: '"Freshness is important for any ingredient" (Tabelog).', specialty: 'Shanghai crab yakisoba; Peking duck; mapo tofu.',
      anecdotes: [
        { text: '"It is run by a man and woman from China." — July 2026, the colourful plate lunch.', source: R + 'B533520010/' },
        { text: '"I visited this restaurant for a business meeting, and I was able to have the ordered dishes served in smaller portions." — August 2026.', source: R + 'B533004181/' },
        { text: '"Since the chef is working alone, the service is a bit slow." — October 2026, Peking duck shared between two.', source: R + 'B537401295/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): フーロン、中華料理、大阪市北区曽根崎新地1-2-4 谷安セストビル 2F、JR 北新地駅11-23出口から徒歩3分、月18:00〜22:00、火〜金11:30〜14:00と18:00〜22:00、土18:00〜21:00、日・祝休み、臨時休業あり、予約のみ (ランチは予約不可、売り切れ次第終了)、予約の電話は14時以降、ディナーのみサービス料10%、カード・QR 可、ランチは現金と PayPay のみ、13席 (カウンター9、4名のテーブル1)、禁煙、2009年5月20日オープン、食べログ 中国料理 WEST 百名店 2021・2023・2024、モダンな中華、上海蟹の焼きそば (極細の香港麺に蟹味噌のあん)、甕で3〜5年熟成の紹興酒、北京ダックとフカヒレの煮込みの8品のコース10,000円 (税別)、プレートランチ1,500円、麻婆豆腐ごはんセット1,400円。インボイス登録は個人の北村克治。口コミ(2026年6月〜10月): プレートランチ (スープ、サラダ、酢豚、水餃子、海鮮炒め、ごま団子、杏仁豆腐)、金曜だけの麺のランチ、麻婆豆腐 (花椒がしびれる、鶏のスープ)、北京ダック、エビマヨ、酢豚、上海蟹焼きそば、牛肉とピーマンの炒め物、少なめの量にしてもらえる、中国出身の男女で営業という声、シェフひとりなので料理はゆっくり。',
      confidence: 'medium', sources: [TB, R + 'B528436921/', R + 'B530734211/', R + 'B533004181/', R + 'B533520010/', R + 'B534385955/', R + 'B534534557/', R + 'B535623682/', R + 'B537022569/', R + 'B537337284/', R + 'B537401295/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter at an open kitchen; half portions on request (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-2-4 谷安セストビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目2番4号 (go) 6m; no record in data within 30 m (RYU of this batch is about 14 m away at 1-2-3, a different building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534534557/'],
    price_note: 'Course and lunch prices from the Tabelog listing; an August 2026 diner paid ¥1,000 for the plate lunch.', last_checked: TODAY, items: [
      it('', '', 'Hu-Long course: eight dishes with Peking duck and braised shark fin', '¥10,000 + tax', 'Dinner', 'ask', 'no', 'Tabelog; September 2026.', 'hulong_course'),
      it('', '', 'Shanghai crab yakisoba', '', 'Dinner', 'no', 'no', 'Tabelog; August 2026.', 'crab_yakisoba'),
      it('', '', 'Plate lunch set (weekdays)', '¥1,500', 'Lunch', 'ask', 'no', 'Tabelog; July–October 2026.', 'plate_lunch'),
      it('', '', 'Mapo tofu rice set (weekdays)', '¥1,400', 'Lunch', 'ask', 'no', 'Tabelog; June–October 2026.', 'mapo_set'),
    ] }, {
    cuisine: 'シノワから家庭料理までのモダンな中華を、オープンキッチンのカウンターで (食べログ)・名物は「上海蟹の焼きそば」: 極細の香港麺に蟹味噌のあん。甕で3〜5年熟成させた紹興酒 (食べログ)・北京ダックとフカヒレの煮込みの8品のフーロンコース10,000円 (税別、食べログ)。単品は少なめの量にもしてもらえる (2026年8月)・2026年の口コミに出てくる夜の料理: 北京ダック、花椒のしびれる麻婆豆腐、エビマヨ、酢豚、牛肉とピーマンの炒め物、上海蟹の焼きそば・平日のランチ: 色とりどりのプレートランチ (スープ、サラダ、酢豚、水餃子、海鮮炒め、ごま団子、杏仁豆腐など) は食べログでは1,500円 (2026年8月の口コミでは1,000円)、サラダと鶏のスープとデザートつきの麻婆豆腐ごはんセット1,400円、金曜だけの麺のセット (食べログ、2026年6月〜10月)',
    neighborhood: '曽根崎新地1-2-4、谷安セストビルの2階、階段の下にメニューの看板。北新地駅11-23出口から3分',
    gf_detail: '要確認。グルテンの情報なし。北京ダック、極細の香港麺の上海蟹の焼きそば、水餃子、酢豚、ソースの中華料理。',
    vegan_detail: 'ヴィーガンではありません。麻婆豆腐は鶏のスープで、料理は鴨、豚、牛、蟹、魚介。',
    notes: '[中華・北新地、カウンターのモダンな中華] 2009年からの北新地の13席のモダンな中華で、食べログ 中国料理 WEST 百名店に2021・2023・2024年に選ばれた。オープンキッチンで料理する姿が見える。夜は予約のみ: くさみのない北京ダック、花椒のきいた麻婆豆腐、名物の極細の香港麺に蟹味噌のあんの上海蟹の焼きそばを、甕で熟成した紹興酒といっしょに。フカヒレ入りの8品のコースは10,000円 (税・サービス料別)、料理は少なめの量にもできる。平日のランチは先着順で、色とりどりのプレートか麻婆豆腐ごはんのセットが1,400〜1,500円ほど、現金か PayPay。料理人がひとりなので夜はゆっくり (2026年10月)。',
  });
}

// ================================================================ RYU
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27141240/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_ryu_kitashinchi', name: 'RYU', category: 'MOM_AND_POP',
    lat: 34.697054, lng: 135.498487, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lunch is fresh wheat pasta from Awaji with bread; dinner is small dishes and kamameshi, with fresh pasta as an alternative finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the pastas use bacon, chorizo, clams, shirasu, cream and cheese; the small dishes and kamameshi are seasonal and not described as vegetarian.',
    hours_raw: 'Mon–Sat, the day before and after a holiday 11:30–14:00 (last order 13:30) and 18:00–22:00 (last order 22:00); closed Sundays and holidays (Tabelog). Saturday lunch sometimes repeats Friday\'s pasta (September 2026). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay; no e-money (Tabelog). 18 seats, counter and tables; heated tobacco only in a designated area; wheelchair accessible; free Wi-Fi; children and strollers welcome (Tabelog). Opened 13 May 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-2-3, ground floor of 谷安セジエムビル, a large wall sign and a red easel outside — 3 min from Kitashinchi Stn',
    cuisine: 'Izakaya of seasonal small dishes, kamameshi and sake by night, fresh pasta by day (Tabelog) · dinner: seasonal omakase course of seven items finishing with kamameshi or fresh Awaji pasta ¥8,000 (Tabelog, tax included); smaller-sized kamameshi, an egg-over-rice, a rich pudding the shop calls "dragon egg" (Tabelog); kamameshi praised in April 2026 · weekday lunch ¥1,200 (+¥100 for 1.5 times the pasta): two daily fresh pastas from Awaji Men-gyo, e.g. scallop and mentaiko cream, clam Genovese, beef tendon and komatsuna peperoncino, bacon and garlic-shoot tomato, chorizo and shishito tomato, basil cream with green beans and shirasu, with salad, a cold soup and bread (May 2025–October 2026)',
    website: null, gmaps: gm('RYU 北新地 曽根崎新地1-2-3'), menu_url: null,
    notes: "[Izakaya · Kitashinchi, kamameshi by night, fresh pasta by day] A stylish 18-seat izakaya in Kitashinchi, open since 2024, with two lives. At lunch office workers queue at the red easel for ¥1,200 plates of chewy fresh pasta from Awaji, two choices a day such as clam Genovese or mentaiko cream, with salad, a cold soup and bread (¥100 more for a large). At night it serves seasonal small dishes with sake and a kamameshi to finish, or the ¥8,000 omakase course, and a rich pudding to end. Diners call it reasonable for Kitashinchi, and it is easy for solo diners.",
    chef_bio: { chef_name: '松谷竜二郎', roles: ['Owner (the invoice holder)', 'kitchen and floor staff'], origin: null, background: 'The Tabelog invoice number T5810870182145 is registered to an individual, 松谷　竜二郎 (NTA invoice register, read 2026-11-02). Per the shop-maintained Tabelog listing: seasonal small dishes and kamameshi, an extensive sake list, a rich pudding, an upscale yet relaxed room; opened 13 May 2024. Lunch reviews from 2025–2026 name the pasta supplier as Awaji Men-gyo.', philosophy: null, specialty: 'Kamameshi; fresh Awaji pasta lunch.',
      anecdotes: [
        { text: '"The fresh pasta was incredibly chewy!" — September 2025, the bacon and garlic-shoot tomato lunch.', source: R + 'B513354865/' },
        { text: '"Each dish was delicious, and the highlight was definitely the kamameshi, which was incredibly tasty." — April 2026, dinner with colleagues.', source: R + 'B526814133/' },
        { text: '"It\'s a welcoming place for solo female diners as well." — October 2026, the ¥1,200 daily pasta.', source: R + 'B537680236/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): RYU、居酒屋・釜飯、大阪市北区曽根崎新地1-2-3 谷安セジエムビル 1F、北新地駅から3分、大きな壁の看板が目印、月〜土・祝前日・祝後日11:30〜14:00 (L.O.13:30)、18:00〜22:00、日・祝休み、予約可、カード・PayPay 可、電子マネー不可、18席、加熱式たばこのみの喫煙スペース、車いす可、無料 Wi-Fi、子ども・ベビーカー可、2024年5月13日オープン、季節の小鉢と釜飯、日本酒、濃厚なプリン、小さめの釜飯、季節のおまかせコース7品8,000円 (〆は釜飯か Awaji の生パスタ)。インボイス登録は個人の松谷竜二郎。口コミ(2025年5月〜2026年10月): 平日ランチの生パスタ1,200円、大盛り100円、日替わり2種、ホタテと明太子のクリーム、アサリのジェノベーゼ、牛すじと小松菜のペペロンチーノ、ベーコンとにんにくの芽のトマト、チョリソーとししとうのトマト、いんげんとしらすのバジルクリーム、サラダと冷たいスープとパン、Awaji Men-gyo の生パスタ、土曜は金曜のメニューのことも、夜の釜飯がおいしい、北新地にしては手ごろ、ひとりでも入りやすい、赤いイーゼルの看板。',
      confidence: 'medium', sources: [TB, R + 'B507106771/', R + 'B507120818/', R + 'B510829082/', R + 'B513354865/', R + 'B518537239/', R + 'B520890857/', R + 'B526814133/', R + 'B534989117/', R + 'B535249676/', R + 'B537680236/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Two daily lunch pastas ordered by word (May 2025); course or à la carte at night. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-2-3 谷安セジエムビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目2番3号 (go) 13m; no record in data within 30 m (フーロン of this batch is about 14 m away at 1-2-4, a different building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537680236/'],
    price_note: 'The course from the Tabelog listing (tax included); lunch prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fresh pasta lunch with salad, soup and bread (two choices daily)', '¥1,200', 'Lunch', 'no', 'no', 'May 2025–October 2026.', 'pasta_lunch'),
      it('', '', 'Large pasta (1.5 times)', '+¥100', 'Lunch', 'no', 'no', 'May 2025; September 2026.', 'pasta_large'),
      it('', '', 'Seasonal omakase course, seven items, with kamameshi or fresh pasta', '¥8,000', 'Dinner', 'ask', 'no', 'Tabelog.', 'omakase_course'),
    ] }, {
    cuisine: '夜は季節の小鉢と釜飯と日本酒、昼は生パスタの居酒屋 (食べログ)・夜: 〆は釜飯か Awaji の生パスタの季節のおまかせコース7品8,000円 (食べログ、税込)。小さめの釜飯、卵かけごはん、店が「dragon egg」と呼ぶ濃厚なプリン (食べログ)。釜飯が好評 (2026年4月)・平日のランチ1,200円 (パスタ1.5倍は100円追加): Awaji Men-gyo の生パスタが日替わりで2種、たとえばホタテと明太子のクリーム、アサリのジェノベーゼ、牛すじと小松菜のペペロンチーノ、ベーコンとにんにくの芽のトマト、チョリソーとししとうのトマト、いんげんとしらすのバジルクリーム。サラダ、冷たいスープ、パンつき (2025年5月〜2026年10月)',
    neighborhood: '曽根崎新地1-2-3、谷安セジエムビルの1階、大きな壁の看板と赤いイーゼルが目印。北新地駅から3分',
    gf_detail: '要確認。グルテンの情報なし。ランチは Awaji の小麦の生パスタとパン。夜は小鉢と釜飯で、〆は生パスタも選べる。',
    vegan_detail: 'ヴィーガンではありません。パスタにはベーコン、チョリソー、アサリ、しらす、クリーム、チーズ。小鉢と釜飯は季節もので、ベジタリアンの説明はない。',
    notes: '[居酒屋・北新地、夜は釜飯、昼は生パスタ] 2024年からの北新地のおしゃれな18席の居酒屋で、昼と夜で二つの顔。昼は会社員が赤いイーゼルの前にならび、Awaji のもちもちの生パスタが1,200円: アサリのジェノベーゼや明太子クリームなど日替わり2種に、サラダ、冷たいスープ、パン (大盛りは100円追加)。夜は季節の小鉢を日本酒と、〆に釜飯、または8,000円のおまかせコース、最後に濃厚なプリン。北新地にしては手ごろという声が多く、ひとりでも入りやすい。',
  });
}

// ================================================================ 串揚げ 名倉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27118502/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://www.kushiage-nagura.com/';
  const W = day(['17:30', '23:00']);
  put({
    id: 'osaka_kushiage_nagura_dojima', name: '串揚げ 名倉 (Kushiage Nagura)', category: 'OMNI',
    lat: 34.696651, lng: 135.497100, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushiage coated in flour, egg and fine crumbs from French bread dough (official site; Tabelog), plus a homemade curry bread and a ramen to finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and seafood skewers in an egg-and-crumb coat; the dipping sauces include a tentsuyu (official site).',
    hours_raw: 'Mon–Sat, holidays and the day before and after a holiday 17:30–23:00; closed Sundays (Tabelog). Reservations accepted; private hire by phone (Tabelog). Service charge: none (Tabelog original text "なし"; the English translation is wrong). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 8 counter seats; non-smoking; English menu; BYO allowed; school-age children welcome (Tabelog). Opened 7 August 2020 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-3-16, 4F of 堂島メリーセンタービル, west of Kitashinchi — 5 min from Kitashinchi and Nishi-Umeda Stns',
    cuisine: 'Kushiage omakase by an owner with over 20 years in Japanese cuisine: a thin coat (flour, egg and crumb applied as separate steps, with ultra-fine crumbs from French bread dough) fried in rice oil, about 15–20 skewers with dips from sauce to salt, lemon and a tentsuyu with plenty of grated daikon (official site; Tabelog) · courses (official site; Tabelog, tax included): standard, 15 skewers and dessert, ¥12,100; recommended, with abalone, shark fin and caviar, ¥15,400; special, adding strip loin and truffle, ¥18,700; rice or noodles to finish are extra (official site) · skewers named in 2026: potato and mascarpone with caviar, sweet shrimp with its head, okra, horse mackerel, Amanoyuki pork, Yoshida Farm caciocavallo wrapped in nori, abalone with liver sauce and wasabi, corn skewered kernel by kernel, eel rolls, beef with paprika, dried abalone, two kinds of bell pepper, sweet-potato curry bread; extras: a sukiyaki truffle skewer, a shoyu ramen of Daisen chicken broth; a sea urchin jelly and a cabbage salad with house onion dressing to start (January–September 2026)',
    website: OWN, gmaps: gm('串揚げ 名倉 堂島'), menu_url: OWN,
    notes: "[Kushiage · Dojima, a light omakase] An eight-seat kushiage counter west of Kitashinchi whose owner spent twenty years in Japanese cuisine and learned from the Kahala school of creative kushiage. The coat is thin and the oil rice oil, and a regular on a seventh visit felt no heaviness the next day (May 2026). Skewers run from potato and mascarpone under caviar to Yoshida Farm caciocavallo in nori and abalone with its own liver sauce, with dips of sauce, lemon salt or a daikon-heavy tentsuyu. Courses are ¥12,100, ¥15,400 with abalone, shark fin and caviar, or ¥18,700 with truffle; a ramen of Daisen chicken can follow. The chef is warm and explains each skewer; English menu.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null, background: 'Per the official site: an owner with more than twenty years of training in Japanese cuisine; seasonal ingredients chosen at the market; the coat kept thin by separating the flour, egg and crumb steps; frying judged by sound, colour and bubbles. Per the shop-maintained Tabelog listing: techniques passed down from places like "Kahala" and "inspired by legends like Morisawa Kahala"; opened 7 August 2020. An April 2026 diner came after receiving a card at Kahala and found the same cheese served.', philosophy: '"その一瞬を見極める" (judging the moment) (official site).', specialty: 'Kushiage omakase; caciocavallo in nori; abalone with liver sauce.',
      anecdotes: [
        { text: '"Even after eating my fill, I didn\'t feel any heaviness in my stomach the next day." — May 2026, a seventh visit, the ¥12,100 course.', source: R + 'B450666901/' },
        { text: '"We started with a jelly topped with sea urchin, which was an immediate delight." — September 2026, a group of seven at the counter.', source: R + 'B535714930/' },
        { text: '"I tried fried shark fin for the first time, and it was delicious." — September 2026, the luxurious course.', source: R + 'B536525864/' },
      ],
      japanese_sources_summary: '公式サイト: 串揚げ 名倉、北新地の一角、和食の道で20余年の研鑽を積んだ店主のこだわりの串、季節の美味しさ、誕生日・接待・会食・記念日に、旬に重きを置き市場で自ら目利き、粉・卵・パン粉をつける工程を分けて衣を薄く、油の音・色・泡を見極める、素材に合わせて揚げ方を変える、スタンダードコース12,100円、鮑・フカヒレ・キャビアのおすすめコース15,400円、トリュフの特撰コース18,700円、約20種の串、ソース・塩・レモン・鬼おろしたっぷりの天つゆ、〆のご飯ものはコースに含まれない。食べログ (店舗会員): 堂島1-3-16 堂島メリーセンタービル 4F、北新地駅と四つ橋線から徒歩5分、月〜土・祝・祝前日・祝後日17:30〜23:00、日曜休み、予約可、サービス料なし、カード可、電子マネー・QR 不可、カウンター8席、禁煙、英語のメニュー、持ち込み可、小学生から可、2020年8月7日オープン、フランスパンの生地の極細のパン粉と米油、Yoshida Farm のカチョカヴァロ、自家製カレーパン、Kahala で学んだ技。口コミ(2026年1月〜9月): ジャガイモとマスカルポーネとキャビア、甘エビ、オクラ、アジ、Amanoyuki の豚、のりで巻いたチーズ、アワビの肝ソースとわさび、一粒ずつ刺したとうもろこし、うなぎ巻き、牛肉とパプリカ、干しアワビ、2種のピーマン、さつまいものカレーパン、すき焼きトリュフ串、Daisen の鶏のスープの醤油ラーメン、ウニのジュレ、玉ねぎドレッシングのキャベツ、翌日も胃がもたれない、親しみやすい大将、18回通う常連。',
      confidence: 'medium', sources: [TB, OWN, R + 'B434386764/', R + 'B450312131/', R + 'B450666901/', R + 'B526555564/', R + 'B527398330/', R + 'B528312925/', R + 'B534859493/', R + 'B535714930/', R + 'B536525864/', R + 'B537887831/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; the chef explains each skewer (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-16 堂島メリーセンタービル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 71m, within 150 m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, OWN],
    price_note: 'Course prices from the official site and Tabelog (tax included); finishing rice or noodles extra.', last_checked: TODAY, items: [
      it('', '', 'Standard course: 15 kushiage and dessert', '¥12,100', 'Courses', 'no', 'no', 'Official site; May 2026.', 'standard'),
      it('', '', 'Recommended course with abalone, shark fin and caviar', '¥15,400', 'Courses', 'no', 'no', 'Official site; February and September 2026.', 'osusume'),
      it('', '', 'Special course with strip loin and truffle', '¥18,700', 'Courses', 'no', 'no', 'Official site.', 'tokusen'),
    ] }, {
    cuisine: '和食で20年以上の店主の串揚げのおまかせ: 粉・卵・パン粉の工程を分けた薄い衣 (フランスパンの生地の極細のパン粉) を米油で揚げ、15〜20本ほど。ソース、塩、レモン、鬼おろしたっぷりの天つゆで (公式サイト、食べログ)・コース (公式サイト、食べログ、税込): 串15本とデザートのスタンダード12,100円、鮑・フカヒレ・キャビアのおすすめ15,400円、ロースとトリュフの特撰18,700円、〆のご飯ものや麺は別 (公式サイト)・2026年の口コミに出てくる串: ジャガイモとマスカルポーネとキャビア、頭つきの甘エビ、オクラ、アジ、Amanoyuki の豚、のりで巻いた Yoshida Farm のカチョカヴァロ、アワビの肝ソースとわさび、一粒ずつ刺したとうもろこし、うなぎ巻き、牛肉とパプリカ、干しアワビ、2種のピーマン、さつまいものカレーパン。追加: すき焼きトリュフ串、Daisen の鶏のスープの醤油ラーメン。はじめにウニのジュレと玉ねぎドレッシングのキャベツ (2026年1月〜9月)',
    neighborhood: '堂島1-3-16、堂島メリーセンタービルの4階、北新地の西。北新地駅と西梅田駅から5分',
    gf_detail: 'グルテンフリーではありません。串揚げは粉、卵、フランスパンの生地のパン粉の衣 (公式サイト、食べログ)。自家製カレーパンや〆のラーメンも。',
    vegan_detail: 'ヴィーガンではありません。肉と魚介の串を卵とパン粉の衣で、たれには天つゆも (公式サイト)。',
    notes: '[串揚げ・堂島、軽い串のおまかせ] 北新地の西にある8席の串揚げのカウンターで、店主は和食で20年、創作串揚げの Kahala の流れをくむ。衣は薄く油は米油で、7回目の常連は翌日も胃がもたれなかったという (2026年5月)。串はジャガイモとマスカルポーネにキャビア、のりで巻いた Yoshida Farm のカチョカヴァロ、アワビに肝ソースなど、ソース、レモン塩、鬼おろしの天つゆで。コースは12,100円、鮑・フカヒレ・キャビアで15,400円、トリュフで18,700円。〆に Daisen の鶏の醤油ラーメンも。大将はあたたかく、一本ずつ説明してくれる。英語のメニューあり。',
  });
}

save();
