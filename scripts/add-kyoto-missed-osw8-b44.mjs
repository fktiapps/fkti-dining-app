// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 44.
//   + タンブリーノ Tamburino (couple-run spaghetti counter on Imadegawa, Beatles on the stereo; core list)
//   + 出町カラビンカ Demachi Karabinka (one-person spice-curry counter, black curry; core list)
//   + 権兵衛 Gonbee (Gion udon and oyakodon house, founded 1927 per a review; notable list)
//   + ダニエルズ Daniel's (fresh-pasta Italian behind Daimaru on Nishikikoji; notable list)
//   - うしのほね 本店 26001079 (notable): branch of a brand already in data (うしのほね あなざ, kyoto_ushinohone_anaza);
//     our crawls also list 草風土 うしのほね.
//   Picked 2026-11-06 after batch 43. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips:
//   タンブリーノ 26007085, 出町カラビンカ 26032537. `next notable 200`: 権兵衛 26001337, 26001079 (skipped), ダニエルズ
//   26000929. Same-name check, same brand or operator only: タンブリーノ — one; カラビンカ — one; 権兵衛 — the crawl lists
//   other shops named 権兵衛 (関東煮 権兵衛 and 炭火焼鳥 権兵衛 in Osaka, 権兵衛 in Ueno and Ningyocho), different businesses
//   with no stated link, so not counted; ダニエルズ — three in our crawls, all in Kyoto (Nishiki, Porta, Factory), under
//   five, a small group. None of the four is in data/kyoto.json: grep by name and address (田中下柳町8-12, 真如堂前町98-3,
//   祇園町北側254, 西魚屋町596) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-44');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26001079/', 'branch of a brand already in data: うしのほね (kyoto_ushinohone_anaza); 草風土 うしのほね also in crawls');

// ================================================================ タンブリーノ Tamburino
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26007085/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:00', '15:00'], ['17:30', '22:30']); const B = day(['11:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_tamburino_imadegawa', name: 'タンブリーノ (Tamburino)', category: 'OMNI',
    lat: 35.028640, lng: 135.774110, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a spaghetti and pizza counter, with focaccia and bruschetta in the sets (2023–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. An aglio e olio and tomato pastas appear, but most pastas use bacon, sausage, fish or cream; no vegan information (2023–2025 reviews).',
    hours_raw: 'Monday, Tuesday and Friday 11:00–15:00 and 17:30–22:30; Wednesday, Saturday and Sunday 11:00–15:00 and 17:30–22:00; closed Thursday (Tabelog). Reservations accepted (Tabelog). No cards; e-money and QR accepted (Tabelog). 16 seats: 8 at the counter and two tables of 4; smoking allowed, except at weekend and holiday lunch (Tabelog). On Imadegawa-dori east of the Kawabata crossing, by a bus stop; 5 min walk from Demachiyanagi Stn (Tabelog; January and August 2024).',
    hours: { 0: A, 1: A, 2: B, 4: A, 5: B, 6: B }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Imadegawa-dori east of Kawabata — 5 min walk from Demachiyanagi Stn',
    cuisine: 'Neighbourhood spaghetti and pizza counter, "feel free to come alone" (May 2023) · about ten pastas from ¥750, sets from ¥800 with a mini salad or focaccia; special lunch of carbonara, bruschetta, mini salad and tea (January 2024–May 2025) · e.g. mentaiko spaghetti, wiener arrabbiata, takana and tuna, spinach Bolognese, aglio e olio, chilled tomato soup pasta with salmon and avocado, a carbonara-style cream pasta with bacon, asparagus and a fried egg (2023–2025 reviews) · pizza Margherita and octopus pizza; a mini curry-flavoured butter rice (2023–2025 reviews) · under ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('タンブリーノ 出町柳 今出川'), menu_url: null,
    notes: '[Spaghetti · Imadegawa by Demachiyanagi, couple-run] A homely sixteen-seat spaghetti counter by a bus stop on Imadegawa, run by a friendly couple to a Beatles soundtrack, with album covers regulars have brought in: about ten pastas from ¥750, such as mentaiko or takana and tuna, cheap lunch sets, and Margherita or octopus pizza. Student-friendly prices. Smoking allowed except at weekend lunch. Closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Owner couple (unnamed) (August 2024 review)'], origin: null,
      background: 'Per Tabelog: a pasta and café counter near Demachiyanagi. Reviewers describe a couple running it (August 2024), a Beatles-loving owner with music and memorabilia on display, some brought in by regulars (August 2024; November 2025), and student-friendly prices near the university (February 2025).',
      philosophy: '"Feel free to stop by even if you\'re alone" (May 2023 review).', specialty: 'Mentaiko spaghetti; set lunches.',
      anecdotes: [
        { text: 'An August 2024 diner, tempted in by the bus stop out front, chatted with the couple over a chilled tomato soup pasta, under Beatles records some say regulars brought in.', source: R + 'B490618101/' },
        { text: 'A November 2025 guest spotted a sign about yellow tomatoes that recalled the ones from Ryukoku.', source: R + 'B516644521/' },
        { text: 'A December 2025 reviewer loved the tomato sauce but thought the pizza dough an overlooked weak point.', source: R + 'B519091454/' },
      ],
      japanese_sources_summary: '食べログ: パスタ・カフェ、左京区田中下柳町8-12、京阪出町柳駅から徒歩5分、月・火・金 11:00〜15:00・17:30〜22:30、水・土・日 11:00〜15:00・17:30〜22:00、木曜定休、予約可、カード不可、電子マネー・QR 可、16席 (カウンター8、4人がけテーブル2)、喫煙可 (土日祝の昼は禁煙)。口コミ (2023年5月〜2025年12月、英語): 「一人でも気軽に」、今出川通沿い、川端の東、バス停の前、夫婦で営む、ビートルズの音楽とレコードジャケット、パスタは約10種で750円から、セットは800円から (ミニサラダやフォカッチャ)、カルボナーラ・ブルスケッタ・ミニサラダ・お茶のスペシャルランチ、明太子スパゲティ、ウインナーのアラビアータ、高菜とツナ、ほうれん草のボロネーゼ、アーリオ・オーリオ、鮭とアボカドの冷製トマトスープパスタ、ベーコンとアスパラのカルボナーラ風 (目玉焼き)、マルゲリータ、たこのピザ、カレー風味のミニバターライス、学生向けの値段、生地がもう一歩との声。',
      confidence: 'medium', sources: [TB, R + 'B465879319/', R + 'B477486105/', R + 'B482902166/', R + 'B490618101/', R + 'B497343717/', R + 'B501909605/', R + 'B502701780/', R + 'B506971640/', R + 'B516644521/', R + 'B519091454/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and two tables; e-money and QR, no cards; smoking allowed except weekend lunch.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区田中下柳町8-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; latest review December 2025.' },
    pin_source: `Tabelog ${TB} (35.028640, 135.774110); cross-checked: GSI 京都府京都市左京区田中下柳町8番地 (lot) 75 m; nearest Kyoto record 63 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506971640/'],
    price_note: 'Prices from a May 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Pasta (single dish)', '¥750', 'Pasta', 'no', 'ask', 'From; May 2025.', 'pasta'),
      it('', '', 'Pasta set with mini salad or mini focaccia', '¥800', 'Lunch', 'no', 'ask', 'From; May 2025.', 'pasta_set'),
    ] }, {
    cuisine: '「一人でも気軽に」の町のスパゲティとピザのカウンター (2023年5月)・パスタは約10種で750円から、ミニサラダかフォカッチャ付きのセットは800円から、カルボナーラ、ブルスケッタ、ミニサラダ、お茶のスペシャルランチ (2024年1月〜2025年5月)・例: 明太子スパゲティ、ウインナーのアラビアータ、高菜とツナ、ほうれん草のボロネーゼ、アーリオ・オーリオ、鮭とアボカドの冷製トマトスープパスタ、ベーコンとアスパラと目玉焼きのカルボナーラ風クリームパスタ (2023〜2025年の口コミ)・マルゲリータとたこのピザ、カレー風味のミニバターライス (2023〜2025年の口コミ)・1,000〜2,000円未満 (食べログ)',
    neighborhood: '川端の東の今出川通。出町柳駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。スパゲティとピザのカウンターで、セットにフォカッチャやブルスケッタ (2023〜2025年の口コミ)。',
    vegan_detail: '要確認。アーリオ・オーリオやトマトのパスタはあるが、多くのパスタにベーコン、ソーセージ、魚、クリームを使う。ヴィーガンの情報はない (2023〜2025年の口コミ)。',
    notes: '[スパゲティ・出町柳の今出川通、夫婦の店] 今出川通のバス停の前の16席の家庭的なスパゲティのカウンター。気さくな夫婦が営み、ビートルズが流れ、常連が持ち込んだというレコードジャケットも。明太子や高菜とツナなど約10種のパスタが750円から、お得なランチセット、マルゲリータやたこのピザ。学生向けの値段。土日の昼以外は喫煙可。木曜休み。',
  });
}

// ================================================================ 出町カラビンカ Demachi Karabinka
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26032537/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00']);
  put({
    id: 'kyoto_demachi_karabinka', name: '出町カラビンカ (Demachi Karabinka)', category: 'OMNI',
    lat: 35.029080, lng: 135.767790, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Spice curries on rice with fried onion and crisp toppings; the roux and toppings are not described for gluten (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature black curry uses beef tendon; specials use chicken or anchovy; egg and cheese toppings (2025–2026 reviews).',
    hours_raw: 'Sunday–Friday and holidays 11:30–15:00; closed Saturday and occasionally on other days, posted monthly on Instagram; rarely an evening 17:00–21:00 (Tabelog). No reservations (Tabelog); a short wait outside at lunch (March 2026). No cards or e-money; QR accepted (Tabelog). 6–8 counter seats; non-smoking (Tabelog; 2025–2026 reviews). At the corner of Teramachi just west of Kawaramachi-Imadegawa; 2–3 min from the Kawaramachi-Imadegawa bus stop, 10 min walk from Demachiyanagi Stn (Tabelog; May 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi west of Kawaramachi-Imadegawa — 10 min walk from Demachiyanagi Stn',
    cuisine: 'Small spice-curry counter (2025–2026 reviews) · black curry of black sesame and beef tendon ¥1,000, mild, creamy and sweet-sesame rich, with crisp flakes, fukujinzuke and a hint of honey (October 2025–May 2026) · "kimagure" curry of the day, changing twice a month, e.g. anchovy chicken ¥1,100, ginger chicken, plum curry (March–September 2026) · toppings: spice egg, runny egg, grilled cheese; fried lotus root and pickled onions (2025–2026 reviews) · about ¥1,000–2,000 (Tabelog)',
    website: null, gmaps: gm('出町カラビンカ カレー'), menu_url: null,
    notes: '[Spice curry · Kawaramachi-Imadegawa, six seats] A tiny counter at the corner of Teramachi where the young owner cooks each plate alone: a mild, deeply sesame-rich black curry of beef tendon for ¥1,000, and a "kimagure" curry of the day that changes twice a month — ginger chicken, plum, anchovy chicken. Add a spice egg. Expect a short wait. QR, no cards. Lunch only; closed Saturday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed, described as young), who cooks alone (June and September 2026)'], origin: null,
      background: 'Per Tabelog: a curry counter at Teramachi-Imadegawa, with closing days posted on Instagram and occasional evening service. Reviewers in 2026 describe an owner who prepares each plate with care alone (March and June 2026); an August 2025 reviewer mentions a Saturday evening pop-up run by another curry cook.',
      philosophy: null, specialty: 'Black curry; kimagure curry.',
      anecdotes: [
        { text: 'An October 2025 walker on the Kamo River path from Sanjo was drawn in by the smell of spices.', source: R + 'B515304715/' },
        { text: 'A June 2026 three-time regular compares the limited ginger chicken curry with another shop\'s ginger dish.', source: R + 'B520684596/' },
        { text: 'An August 2025 dinner guest met a woman running a Saturday pop-up here and called that cook an artist of curry.', source: R + 'B512731678/' },
      ],
      japanese_sources_summary: '食べログ: カレー、上京区真如堂前町98-3 アクアビル 1F、出町柳駅から徒歩10分、市バス・京都バス河原町今出川から徒歩2〜3分、日〜金・祝 11:30〜15:00、土曜定休 (ほかの休みは毎月 Instagram で告知、まれに17:00〜21:00の夜営業)、予約不可、カード・電子マネー不可、QR 可、8席 (カウンター)、禁煙。口コミ (2025年8月〜2026年9月、英語): 寺町の角、カウンター6席、店主一人で営む、黒カレー (黒ごまと牛すじ) 1,000円、マイルドでクリーミー、カリカリのトッピング、福神漬け、はちみつ、月2回替わる気まぐれカレー (アンチョビのチキン1,100円、生姜のチキン、梅)、スパイスエッグ、半熟卵、焼きチーズ、揚げ蓮根、玉ねぎのピクルス、土曜の夜に別の作り手のポップアップがあったとの声 (2025年8月)。',
      confidence: 'medium', sources: [TB, R + 'B512731678/', R + 'B515304715/', R + 'B519323264/', R + 'B520684596/', R + 'B520896352/', R + 'B524997641/', R + 'B525087446/', R + 'B527718416/', R + 'B530399487/', R + 'B536643436/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Six counter seats, wait outside if full; QR, no cards; check Instagram for closures.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区真如堂前町98-3 アクアビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.029080, 135.767790); cross-checked: GSI 京都府京都市上京区真如堂前町98番地 (lot) 34 m; nearest Kyoto record 41 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515304715/', R + 'B536643436/'],
    price_note: 'Prices from October 2025 and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Black curry (black sesame and beef tendon)', '¥1,000', 'Curry', 'ask', 'no', 'October 2025.', 'black_curry'),
      it('', '', 'Kimagure curry of the day', '¥1,100', 'Curry', 'ask', 'no', 'E.g. anchovy chicken; September 2026.', 'kimagure'),
    ] }, {
    cuisine: '小さなスパイスカレーのカウンター (2025〜2026年の口コミ)・黒ごまと牛すじの黒カレー1,000円、マイルドでクリーミー、ごまの甘み、カリカリのトッピング、福神漬け、ほのかなはちみつ (2025年10月〜2026年5月)・月2回替わる「気まぐれ」カレー、例: アンチョビのチキン1,100円、生姜のチキン、梅のカレー (2026年3〜9月)・トッピング: スパイスエッグ、半熟卵、焼きチーズ、揚げ蓮根と玉ねぎのピクルス (2025〜2026年の口コミ)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '河原町今出川の西の寺町。出町柳駅から徒歩10分',
    gf_detail: '要確認。揚げ玉ねぎやカリカリのトッピングをのせたご飯のスパイスカレー。ルウとトッピングのグルテンについての記載はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。名物の黒カレーは牛すじ、気まぐれカレーは鶏やアンチョビ、卵やチーズのトッピング (2025〜2026年の口コミ)。',
    notes: '[スパイスカレー・河原町今出川、6席] 寺町の角の小さなカウンター。若い店主が一人で一皿ずつ作る。マイルドで黒ごまが濃厚な牛すじの黒カレー1,000円と、月2回替わる「気まぐれ」カレー (生姜のチキン、梅、アンチョビのチキン)。スパイスエッグを足して。少し待つことも。QR 可、カード不可。昼のみ、土曜休み。',
  });
}

// ================================================================ 権兵衛 Gonbee
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001337/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:30', '15:00'], ['17:00', '20:00']); const WE = day(['11:30', '20:00']);
  put({
    id: 'kyoto_gonbee_gion', name: '権兵衛 (Gonbee)', category: 'OMNI',
    lat: 35.004150, lng: 135.774317, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat udon and soba with a sweet dipping sauce, tempura; oyakodon in a dashi-soy broth (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based broths, oyakodon, egg dishes and tempura (2026 reviews).',
    hours_raw: 'Monday–Wednesday and Friday 11:30–15:00 and 17:00–20:00; Saturday, Sunday and holidays 11:30–20:00; closed Thursday; hours may change (Tabelog). No reservations (Tabelog). Cash only (Tabelog; October 2026). Tatami seating, shoes off, plus some tables; non-smoking (Tabelog; October 2026). A historic townhouse with a right-to-left signboard on Gion-machi Kitagawa; 5 min walk from Gion-Shijo Stn (Tabelog; October 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Gion, north of Shijo — 5 min walk from Gion-Shijo Stn',
    cuisine: 'Long-established Gion noodle house, founded in 1927 per an October 2026 review · oyakodon ¥1,900 with soft, creamy egg in a savoury, unsweetened dashi and a pinch of sansho (September–October 2026) · keiran udon with ginger-thickened broth and fluffy egg; kitsune udon; egg rice bowl (September–October 2026) · tororo soba ¥2,100; tempura zaru soba (August–October 2026) · sake (Tabelog) · about ¥1,000–3,000 (Tabelog)',
    website: null, gmaps: gm('権兵衛 祇園 うどん'), menu_url: null,
    notes: '[Udon and oyakodon · Gion, a 1927 townhouse] A historic Gion noodle house up on tatami, once named in a magazine as serving Japan\'s best oyakodon: soft, creamy egg in a deep, unsweetened dashi with sansho, a ginger-laced keiran udon and kitsune udon, plus soba. Reviewers say kabuki actors and geisha have long come here. Prices feel high for the portions to some. Cash only; closed Thursday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an udon, soba and oyakodon restaurant in Gion. An October 2026 reviewer writes that it was founded in 1927 and is frequented by kabuki actors and geisha; a September 2026 reviewer recalls a food magazine long ago naming its oyakodon the best in Japan, and finds the restaurant unchanged.',
      philosophy: null, specialty: 'Oyakodon; keiran udon.',
      anecdotes: [
        { text: 'An October 2026 lunch party of three paid ¥9,600 in cash — and the payer, with only ¥10,000 on hand, called it a close call.', source: R + 'B528446612/' },
        { text: 'A September 2026 parent, arriving from Niigata, made a Gonbee oyakodon the first meal back in a city of student days.', source: R + 'B536624814/' },
        { text: 'An October 2026 traveller was sent here by a staff member at a well-known yatsuhashi shop.', source: R + 'B537807848/' },
      ],
      japanese_sources_summary: '食べログ: うどん・そば・親子丼、東山区祇園町北側254、京阪祇園四条駅から徒歩5分、月〜水・金 11:30〜15:00・17:00〜20:00、土日祝 11:30〜20:00、木曜定休、予約不可、カード・電子マネー・QR 不可、座敷とテーブル、禁煙、日本酒。口コミ (2026年8月〜10月、英語): 祇園の老舗、1927年創業 (2026年10月の口コミ)、右から読む看板、町家、靴を脱いで座敷へ、歌舞伎役者や芸妓が通う店との声、昔の料理雑誌で日本一の親子丼と紹介された、親子丼1,900円 (ふわとろの卵、甘くないだし、山椒)、生姜のあんの「けいらん」、きつねうどん、玉子丼、とろろそば2,100円、天ざるそば、そば湯がなかった、現金のみ、祇園らしく高め・量が少なめとの声。',
      confidence: 'medium', sources: [TB, R + 'B309153315/', R + 'B528446612/', R + 'B535699238/', R + 'B536485450/', R + 'B536624814/', R + 'B536882521/', R + 'B537387568/', R + 'B537770036/', R + 'B537807848/', R + 'B538459660/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off, tatami; no reservations; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側254',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004150, 135.774317); cross-checked: GSI 京都府京都市東山区祇園町北側254番地 (lot) 54 m; mp_oito is 5.8 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536485450/', R + 'B535699238/'],
    price_note: 'Prices from August–September 2026 reviews; cash only.', last_checked: TODAY, items: [
      it('', '', 'Oyakodon', '¥1,900', 'Rice bowls', 'no', 'no', 'September 2026.', 'oyakodon'),
      it('', '', 'Tororo soba', '¥2,100', 'Soba', 'no', 'no', 'August 2026.', 'tororo_soba'),
      it('', '', 'Keiran udon', '', 'Udon', 'no', 'no', 'October 2026.', 'keiran'),
    ] }, {
    cuisine: '1927年創業と口コミにある祇園の老舗の麺の店 (2026年10月)・親子丼1,900円、甘くないだしにやわらかくとろりとした卵、山椒をひとつまみ (2026年9〜10月)・生姜のきいたあんにふわふわの卵の「けいらん」うどん、きつねうどん、玉子丼 (2026年9〜10月)・とろろそば2,100円、天ざるそば (2026年8〜10月)・日本酒 (食べログ)・1,000〜3,000円ほど (食べログ)',
    neighborhood: '四条の北の祇園。祇園四条駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。小麦のうどんとそば、甘いつけだれ、天ぷら、だしと醤油の親子丼 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆ、親子丼、卵料理、天ぷら (2026年の口コミ)。',
    notes: '[うどんと親子丼・祇園、1927年からの町家] 座敷に上がる祇園の老舗の麺の店。昔の雑誌で日本一の親子丼と紹介されたという、甘くない深いだしにとろりとした卵と山椒の親子丼、生姜のきいたけいらんうどん、きつねうどん、そばも。歌舞伎役者や芸妓が通う店と口コミにある。量の割に高いと感じる人も。現金のみ、木曜休み。',
  });
}

// ================================================================ ダニエルズ Daniel's
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000929/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_daniels_nishiki', name: 'ダニエルズ (Daniel\'s)', category: 'OMNI',
    lat: 35.004973, lng: 135.762447, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: fresh pasta, focaccia, quiche and pizza (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream and meat pastas, pâté, conger eel, panna cotta (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–15:00 (last order 14:30) and 17:30–22:00 (last order 21:30); closed Monday, or Tuesday when Monday is a holiday (Tabelog). Reservations accepted and advised — a line forms before opening (Tabelog; October 2026). Sparkling water is served (October 2026). 46 seats, banquets up to 30 seated or 50 standing, and a private room on the 3F for 8–20 (Tabelog). Cards, e-money and QR incl. Alipay (Tabelog). 2F of the Glamorous Food building on Nishikikoji at Takakura, above Momoya, just east of Daimaru; from Karasuma or Shijo stations via exit 18 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishikikoji at Takakura, behind Daimaru — 5 min walk from Shijo Karasuma',
    cuisine: 'Fresh-pasta Italian with an "authentic Italian atmosphere", the main shop of a small Kyoto group (Tabelog; October 2026) · lunches about ¥1,200–2,900: a business lunch of salad, fresh pasta and focaccia ¥1,200; the recommended pasta lunch ¥2,070 with an appetiser platter (quiche, pumpkin salad, pâté), pasta, focaccia, panna cotta and coffee; the Bon Appetit lunch ¥2,900; specials +¥600 (September–November 2026) · pastas such as Shinshu pork in tomato cream, pumpkin cream, mushroom tomato, chestnut and bacon, conger eel and edamame in shiso pesto (September–October 2026) · dinner with seasonal fish and meat, wine and champagne; birthday lunch plans (September–October 2026) · lunch ¥2,000–3,000, dinner ¥6,000–8,000 (Tabelog)',
    website: null, gmaps: gm('ダニエルズ 錦小路 高倉'), menu_url: null,
    notes: '[Italian · Nishikikoji behind Daimaru, fresh pasta] The bright, picture-hung main shop of Kyoto\'s Daniel\'s, up a floor on Nishikikoji: generous lunch sets of an appetiser platter, chewy fresh pasta, hot focaccia, dessert and coffee from about ¥2,000 (a ¥1,200 business lunch too), sparkling water on the table, and wine-friendly dinners. Lines before opening — book. Some find it ordinary for the price. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: an Italian with an authentic Italian atmosphere and a 3F private room; registered as an official listing by the operator. Reviewers in October 2026 note several sister restaurants, call this the main branch, and describe sparkling water served at every Daniel\'s.',
      philosophy: 'An authentic Italian atmosphere (Tabelog).', specialty: 'Fresh pasta lunch.',
      anecdotes: [
        { text: 'Two university classmates, from Kanto, reunited here in October 2026 for the first time in five years, after a conference.', source: R + 'B537180613/' },
        { text: 'A September 2026 group of three, turned away once when full, booked ahead and had the pasta split into three plates.', source: R + 'B536104413/' },
        { text: 'A September 2026 diner found the ¥2,900 Bon Appetit lunch good but no better than ordinary, and the room cramped.', source: R + 'B538405071/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・パスタ・ピザ、中京区錦小路通高倉西入ル西魚屋町596 グラマラスフードビル 2F (1階は Momoya)、大丸京都店の錦小路口から東へ、地下鉄四条駅・阪急烏丸駅18番出口から、火〜日 11:30〜15:00 (L.O.14:30)・17:30〜22:00 (L.O.21:30)、月曜定休 (祝日なら翌火曜)、予約可、46席、宴会 着席30名・立食50名、3階に個室 (8〜20名)、カード・電子マネー・QR 可、本格的なイタリアの雰囲気。口コミ (2026年9月〜11月、英語): 本店、姉妹店がいくつか、開店前から行列、炭酸水のサービス、ビジネスランチ1,200円 (サラダ、生パスタ、フォカッチャ)、おすすめのパスタランチ2,070円 (前菜の盛り合わせ、パスタ、フォカッチャ、パンナコッタ、コーヒー)、ボナペティランチ2,900円、スペシャルは+600円、Shinshu の豚のトマトクリーム、かぼちゃのクリーム、きのこのトマト、栗とベーコン、鱧と枝豆の大葉のペスト、夜は季節の魚と肉、ワイン、誕生日のランチプラン、普通・狭いとの声。',
      confidence: 'medium', sources: [TB, R + 'B42734848/', R + 'B536104413/', R + 'B537180613/', R + 'B537554807/', R + 'B537570103/', R + 'B537614755/', R + 'B538380646/', R + 'B538405071/', R + 'B538705902/', R + 'B538748427/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (lines at opening); set lunches; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通高倉西入ル西魚屋町596 グラマラスフードビル 2Ｆ',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.004973, 135.762447); cross-checked: GSI 京都府京都市中京区西魚屋町596番地 (lot) 60 m; kyoto_nishiki_daiyasu is 25 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538748427/', R + 'B537614755/', R + 'B538405071/'],
    price_note: 'Lunch prices from September–November 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Business lunch (salad, fresh pasta, focaccia)', '¥1,200', 'Lunch', 'no', 'no', 'November 2026.', 'business_lunch'),
      it('', '', 'Recommended pasta lunch (appetisers, pasta, focaccia, dessert, coffee)', '¥2,070', 'Lunch', 'no', 'no', 'October 2026.', 'pasta_lunch'),
      it('', '', 'Bon Appetit lunch', '¥2,900', 'Lunch', 'no', 'no', 'September 2026.', 'bon_appetit'),
    ] }, {
    cuisine: '「本格的なイタリアの雰囲気」の生パスタのイタリアン、京都の小さなグループの本店 (食べログ、2026年10月)・ランチは1,200〜2,900円ほど: サラダ、生パスタ、フォカッチャのビジネスランチ1,200円、前菜の盛り合わせ (キッシュ、かぼちゃのサラダ、パテ)、パスタ、フォカッチャ、パンナコッタ、コーヒーのおすすめのパスタランチ2,070円、ボナペティランチ2,900円、スペシャルは+600円 (2026年9〜11月)・パスタ: Shinshu の豚のトマトクリーム、かぼちゃのクリーム、きのこのトマト、栗とベーコン、鱧と枝豆の大葉のペスト (2026年9〜10月)・夜は季節の魚と肉、ワインとシャンパン、誕生日のランチプラン (2026年9〜10月)・昼2,000〜3,000円、夜6,000〜8,000円 (食べログ)',
    neighborhood: '大丸の裏、高倉の錦小路。四条烏丸から徒歩5分',
    gf_detail: 'グルテンフリー不可。生パスタ、フォカッチャ、キッシュ、ピザ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。クリームや肉のパスタ、パテ、鱧、パンナコッタ (2026年の口コミ)。',
    notes: '[イタリアン・大丸の裏の錦小路、生パスタ] 錦小路の2階、絵の飾られた明るい京都の「ダニエルズ」の本店。前菜の盛り合わせ、もちもちの生パスタ、熱々のフォカッチャ、デザート、コーヒーのランチが2,000円ほどから (1,200円のビジネスランチも)、テーブルに炭酸水、夜はワインに合う料理。開店前から行列なので予約を。値段の割に普通と感じる人も。月曜休み。',
  });
}

save();
