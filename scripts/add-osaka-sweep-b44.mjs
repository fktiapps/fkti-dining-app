// Osaka sweep (2-mile circle around Dotonbori), batch 44 — first MOM phase batch (≤20 seats, any genre), nearest first.
//   + Bon (5th-floor gallery-building kissa overlooking Shochikuza)
//   + 酒場スナフキン (creative oden and regional sake, Shinsaibashi-suji)
//   + きたん 韻 (Tabelog 100 yakiniku, 10-seat omakase, Hozenji Yokocho — company-run)
//   + 季節料理 いちい (oden and seasonal dishes, Hozenji Yokocho — one owner runs the counter → mom_and_pop)
// Skipped: 27056103 (newest review 2018), 27159164 (0 reviews), 27104641 (2 reviews).
// Katsuemon 27133440 and Yakitei Bono 27014856 (newest reviews Jan 2026, corporate-member listings) left in the queue for the next mom batch.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, skip, save } = openCitySweep('osaka', TODAY, 44);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27056103', 'Newest review August 2018; current operation unverified.');
skip('27159164', 'Tabelog listing with 0 reviews; current operation unverified.');
skip('27104641', 'Two reviews only; current operation unverified.');

// ================================================================ Bon
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27053587/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_cafe_bon_dotonbori', name: 'Bon (Café Bon)', category: 'OMNI',
    lat: 34.668887, lng: 135.500665, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Drinks and homemade pudding may suit, but no source covers ingredients; the cakes likely contain wheat.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee and tea are available; cakes, pudding and milk drinks contain dairy or egg.',
    hours_raw: 'Daily 11:30–19:00 (L.O. 18:30) (Tabelog). Reservations taken. QR (PayPay) accepted (Tabelog). Often a single staff member (2023, 2026 reviews).',
    hours: ALL(day(['11:30', '19:00'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-10-7, Gallery Kaori Bldg 5F — across from Osaka Shochikuza',
    cuisine: 'Quiet kissa on the 5th floor of a gallery building · coffee and tea · homemade pudding · cake sets (half-and-half cheese and chocolate) · mixed juice · iced tea and matcha milk ¥600–700 · art on the walls · 15 seats',
    website: 'https://kdtp400.gorp.jp/', gmaps: gm('Bon 道頓堀 喫茶'), menu_url: null,
    notes: "[Kissa · a quiet fifth-floor café opposite Shochikuza] Take the lift to the fifth floor of a gallery building across from Osaka Shochikuza, and the Dotonbori crowds feel far away. Bon is a calm, art-hung kissa of about 15 seats that theatergoers use before a show; you can look down on the theater. The menu is short: coffee, tea, mixed juice, matcha milk, cake sets and a homemade pudding a December 2025 visitor liked. Drinks were around ¥600–700 in August 2026. It's usually run by one person, so service can be slow or brisk; one 2026 visitor found it unfriendly, another the staff kind.",
    chef_bio: { chef_name: null, roles: [], origin: 'Dotonbori 1-chōme, gallery building 5F (Tabelog)', background: 'A café on the floor above a ground-floor gallery; long reviewed (since 2011).', philosophy: null, specialty: 'Coffee; homemade pudding.',
      anecdotes: [
        { text: '"The cafe is conveniently located right in front of the Osaka Shochikuza. It\'s on the 5th floor, and you can actually overlook the theater from the cafe… The pudding was homemade and quite delicious." — December 2025.', source: R + 'B518819153/' },
        { text: '"It seems like the sole employee is having a tough time… The prices were around JPY 600 to 700." — August 2026, iced tea and matcha milk.', source: R + 'B534537914/' },
      ],
      japanese_sources_summary: '食べログ: Bon、大阪市中央区道頓堀1-10-7 ギャラリー香ビル5F、06-6212-7760、予約可、毎日11:30〜19:00(L.O.18:30)、QR(PayPay)可、15席、サイト kdtp400.gorp.jp。口コミ(2011〜2026年): エレベーターで5階に上がると道頓堀の喧騒が遠く、静かで落ち着いた空間、チーズとチョコのハーフのケーキセット、松竹座の斜め向かい、1階はギャラリーで店内にも絵、観劇前の待ち合わせに、ミックスジュース、スタッフ1人、2025年12月は手作りプリンがおいしくスタッフも親切、2026年8月はアイスティーと抹茶ミルクで600〜700円、愛想がなかったという声。',
      confidence: 'low', sources: [TB, R + 'B518819153/', R + 'B534537914/', R + 'B468565714/', R + 'B112684188/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One-person service at times.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-10-7 ギャラリー香ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated December 2025 and August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目10番7号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534537914/', R + 'B518819153/'],
    price_note: 'Drinks about ¥600–700 (August 2026).', last_checked: TODAY, items: [
      it('', '', 'Coffee or tea', '', 'Drinks', 'ask', 'ask', 'December 2025.', 'coffee'),
      it('', '', 'Homemade pudding', '', 'Sweets', 'ask', 'no', 'December 2025.', 'pudding'),
      it('', '', 'Cake set (half cheese, half chocolate)', '', 'Sweets', 'no', 'no', '2012 (menu format).', 'cake_set'),
      it('', '', 'Iced tea / matcha milk', '¥600–700', 'Drinks', 'ask', 'ask', 'August 2026.', 'iced_tea'),
    ] }, {
    cuisine: 'ギャラリーのビル5階の静かな喫茶・コーヒーと紅茶・手作りプリン・ケーキセット(チーズとチョコのハーフ)・ミックスジュース・アイスティーや抹茶ミルク600〜700円・壁に絵・15席',
    neighborhood: '道頓堀1-10-7 ギャラリー香ビル5F。大阪松竹座の向かい',
    gf_detail: '要確認。飲み物や手作りプリンは合うかもしれませんが、材料についての情報はなく、ケーキは小麦を使っていそうです。',
    vegan_detail: '要確認。コーヒーと紅茶はありますが、ケーキ、プリン、ミルクの飲み物は乳や卵を含みます。',
    notes: '[喫茶・松竹座向かいの静かな5階の喫茶] 大阪松竹座の向かい、ギャラリーのビルの5階までエレベーターで上がると、道頓堀の人混みが遠くに感じられます。Bonは絵の飾られた15席ほどの落ち着いた喫茶で、観劇前に使う人も。松竹座を見下ろせます。メニューは少なめで、コーヒー、紅茶、ミックスジュース、抹茶ミルク、ケーキセット、2025年12月の客が気に入った手作りプリン。2026年8月は飲み物が600〜700円ほど。たいてい1人で切り盛りしているので、接客は遅かったりそっけなかったり。2026年には愛想がなかったという人も、親切だったという人も。',
  });
}

// ================================================================ 酒場スナフキン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27072874/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:30']);
  put({
    id: 'osaka_sakaba_snufkin_shinsaibashi', name: '酒場スナフキン (Sakaba Snufkin)', category: 'OMNI',
    lat: 34.669883, lng: 135.502264, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy- and dashi-based oden, gyoza, fried oysters, sake-kasu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden broth (dashi), pork-wrapped items, oysters.',
    hours_raw: 'Tue–Sun and holidays 18:00–23:30 (L.O. 23:00); closed Monday and 29 December–5 January (Tabelog). Phone ahead to check seats. Reservations taken. Cards accepted; no e-money. Now non-smoking (September 2026 review).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-3-5, Nippo Fine Plaza 2F — about 6 min from Shinsaibashi or Namba Stn',
    cuisine: 'Creative oden and a deep regional-sake list · tomato oden · soy-milk sake-kasu oden · Italian-style oden · avocado with wasabi · pork-wrapped baby corn · fried oysters · obanzai · risotto to finish · chilled and warm sake by the board · 14 seats',
    website: null, gmaps: gm('酒場スナフキン 心斎橋'), menu_url: null,
    notes: "[Izakaya · creative oden and regional sake upstairs on Shinsaibashi-suji] A 14-seat second-floor oden bar off Shinsaibashi-suji with a strong local feel and a crowded counter that makes room for you. The oden is the creative kind: tomato, soy-milk sake-kasu, and an Italian-style pot finished with risotto. Avocado with wasabi is a repeat visitor's favourite. The sake list is the other draw, with bottles from all over Japan, some rare in Osaka, split on a blackboard into chilled and warm. Some find the seasoning light or the prices high for what you get. The owner and staff are friendly, and the room went non-smoking in 2026. Phone to check for seats.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shinsaibashi-suji 2-chōme (Tabelog)', background: 'Oden and Japanese sake bar; the owner made it non-smoking (September 2026 review).', philosophy: null, specialty: 'Creative oden; regional sake.',
      anecdotes: [
        { text: '"It seems they source sake from all over Japan, featuring both popular choices and some rare finds not commonly seen in Osaka. On this day, the left half of the blackboard displayed chilled sake, while the right half featured room temperature to warm sake." — July 2026.', source: R + 'B532256660/' },
        { text: '"I was looking forward to repeating the tomato oden and avocado wasabi!… I finished off with the risotto." — March 2026.', source: R + 'B474098399/' },
      ],
      japanese_sources_summary: '食べログ: 酒場スナフキン、大阪市中央区心斎橋筋2-3-5 日宝ファインプラザ2F、050-5869-6942、予約可(空席は電話で)、火〜日・祝18:00〜23:30(L.O.23:00)、月曜と12月29日〜1月5日休み、カード可、電子マネー不可、14席。2026年の口コミ(1〜9月): トマトおでんとアボカドわさび、豚巻きヤングコーン、菜の花、締めのリゾット、イタリアン風おでん、混んだカウンターで詰めてくれた、おでんと牡蠣フライ、餃子の盛り合わせと豆乳酒粕おでん(期待ほどではない、値段の比較)、創作料理が売り、味付けは軽め、日本酒の品揃えが見事、地元感、全国から集めた日本酒(大阪では珍しい銘柄も)、黒板の左が冷酒、右が常温〜燗、おばんざい、店主とスタッフが気さく、店主が禁煙にした。',
      confidence: 'medium', sources: [TB, R + 'B532256660/', R + 'B474098399/', R + 'B537174780/', R + 'B521106707/', R + 'B523123305/', R + 'B531102884/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small local counter; sake listed on a blackboard.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-3-5 日宝ファインプラザ 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated January–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目3番5号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B474098399/', R + 'B523123305/'],
    price_note: 'No dish prices captured; one diner paid ¥4,900 for four dishes and three drinks (February 2026).', last_checked: TODAY, items: [
      it('', '', 'Tomato oden', '', 'Oden', 'no', 'no', 'March 2026.', 'tomato_oden'),
      it('', '', 'Soy-milk sake-kasu oden', '', 'Oden', 'no', 'no', 'February 2026.', 'kasu_oden'),
      it('', '', 'Avocado with wasabi', '', 'Small plates', 'ask', 'ask', 'March 2026.', 'avocado'),
      it('', '', 'Risotto (to finish)', '', 'Finishers', 'no', 'no', 'March 2026.', 'risotto'),
      it('', '', 'Fried oysters', '', 'Small plates', 'no', 'no', 'January 2026.', 'kaki_fry'),
    ] }, {
    cuisine: '創作おでんと豊富な地酒・トマトおでん・豆乳酒粕おでん・イタリアン風おでん・アボカドわさび・豚巻きヤングコーン・牡蠣フライ・おばんざい・締めのリゾット・黒板の冷酒と燗酒・14席',
    neighborhood: '心斎橋筋2-3-5 日宝ファインプラザ2F。心斎橋駅・なんば駅から徒歩約6分',
    gf_detail: '実際にはグルテンフリーではありません。醤油とだしのおでん、餃子、牡蠣フライ、酒粕。',
    vegan_detail: 'ヴィーガンではありません。おでんのだし、豚巻き、牡蠣。',
    notes: '[居酒屋・心斎橋筋の2階の創作おでんと地酒] 心斎橋筋から少し入ったビルの2階、14席のおでんのバーで、地元感が強く、混んだカウンターでも詰めてくれます。おでんは創作系で、トマト、豆乳酒粕、締めにリゾットにするイタリアン風。アボカドわさびを推す再訪の客も。もう一つの目当ては日本酒で、全国から集めた大阪では珍しい銘柄も、黒板に冷酒と燗酒に分けて。味付けが軽い、値段のわりにという声も。店主とスタッフは気さくで、2026年に禁煙になりました。空席は電話で確認を。',
  });
}

// ================================================================ きたん 韻
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27128757/'; const R = TB + 'dtlrvwlst/';
  const D = day(['19:00', '21:30']);
  put({
    id: 'osaka_kitan_in_hozenji', name: 'きたん 韻 (Kitan In)', category: 'OMNI',
    lat: 34.668223, lng: 135.50243, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a set omakase with sauces and tare not described; ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu omakase.',
    hours_raw: 'Mon, Tue, Thu, Fri, Sat — one seating at 19:00 (until 21:30); closed Wednesday and Sunday, plus irregular days (Tabelog; September 2026 review). Reservation only; booked months ahead (two to six months, 2026 reviews). Omakase only. Cards accepted; no e-money or QR. 10% service charge.',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-12 1F, in Hozenji Yokocho — about 5 min from Namba Stn',
    cuisine: 'Tabelog 100 yakiniku and meat kaiseki (Yakiniku/Grill WEST 2023–2026) · omakase ¥19,800, one seating · aged Matsusaka and aged Miyazaki wagyu · wagyu-bone broth with clam · yukhoe · aged tuna and seasonal à la carte · finish with as much yakiniku as you want · wine pairing · 10 counter seats',
    website: null, gmaps: gm('きたん 韻 法善寺'), menu_url: null,
    notes: "[Yakiniku · a 10-seat aged-wagyu omakase in Hozenji Yokocho] A reservation-only counter of ten seats in Hozenji Yokocho, on Tabelog's yakiniku and grill 100 lists every year from 2023 to 2026. There's one seating at 7 pm and one menu, the ¥19,800 omakase, and bookings run months out. It plays like meat kaiseki more than a grill: a broth of wagyu bones and water with a touch of clam, a yukhoe, aged tuna and seasonal plates, all built on aged Matsusaka and aged Miyazaki wagyu bought straight from producers. At the end you can have as much yakiniku as you like, though one diner was already full by then; the chefs grill it in front of you. Wine pairings are good. A 10% service charge applies. A September 2026 review says a restaurant group runs it.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 April 2022 (Tabelog)', background: 'Run by the owner of a restaurant group (September 2026 reviews); wagyu sourced directly from producers in Mie (Matsusaka) and Miyazaki. Tabelog 100: Yakiniku WEST 2023, 2025; Grill WEST 2024, 2026.', philosophy: null, specialty: 'Aged-wagyu omakase.',
      anecdotes: [
        { text: '"There is only one seating that starts at 19:00. The course offered is the Omakase course priced at JPY 19,800… The carefully selected Wagyu, sourced directly from producers in Mie Prefecture (Matsusaka beef) and Miyazaki Prefecture, is prepared right in front of the customers." — September 2026.', source: R + 'B474878675/' },
        { text: '"A broth made solely from Wagyu bones and water, finished with a hint of saltiness from clams." — September 2026.', source: R + 'B536587978/' },
      ],
      japanese_sources_summary: '食べログ: きたん 韻、大阪市中央区道頓堀1-7-12 1F(法善寺)、050-5890-1734、月・火・木・金・土19:00〜21:30、水・日休み・不定休、予算2〜3万円、カード可、電子マネー・QR不可、サービス料10%、10席、2022年4月15日開店、百名店(焼肉WEST 2023・2025、グリルWEST 2024・2026)。2026年の口コミ(6〜9月): 熟成の松阪牛と宮崎牛の焼肉と肉料理、法善寺横丁、10席のカウンター、予約のみで半年先まで埋まる、19時からの一斉スタート、おまかせコース19,800円、生産者から直接仕入れる和牛、最後は好きなだけ焼肉、ワインのペアリング、熟成肉、ユッケ、肉割烹、グループのオーナーの店、和牛の骨と水だけのスープに蛤の塩気、万葉牛、熟成マグロ、季節で変わる一品、シェフが焼く締めの肉、2か月前に予約。',
      confidence: 'medium', sources: [TB, R + 'B474878675/', R + 'B536587978/', R + 'B530000815/', R + 'B535384114/', R + 'B536293104/', R + 'B536650487/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book months ahead; one seating at 19:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-7-12 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog 100 2026; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番12号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B474878675/', R + 'B536587978/'],
    price_note: 'Omakase price from September 2026 reviews; 10% service charge extra.', last_checked: TODAY, items: [
      it('', '', 'Omakase course (one seating, 19:00)', '¥19,800', 'Course', 'no', 'no', 'September 2026.', 'omakase'),
    ] }, {
    cuisine: '食べログ百名店の焼肉と肉割烹(焼肉・グリルWEST 2023〜2026)・おまかせ19,800円、一斉スタート・熟成の松阪牛と宮崎牛・和牛の骨のスープに蛤・ユッケ・熟成マグロと季節の一品・最後は好きなだけ焼肉・ワインのペアリング・カウンター10席',
    neighborhood: '道頓堀1-7-12 1F、法善寺横丁。なんば駅から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。決まったおまかせで、たれや味付けの中身は不明。予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。和牛のおまかせ。',
    notes: '[焼肉・法善寺横丁の10席の熟成和牛おまかせ] 法善寺横丁にある予約制の10席のカウンターで、食べログの焼肉・グリルの百名店に2023年から2026年まで毎年選出。19時の一斉スタートで、メニューは19,800円のおまかせだけ、予約は数か月先まで。焼肉というより肉割烹で、和牛の骨と水だけのスープに蛤の塩気、ユッケ、熟成マグロ、季節の一品と、生産者から直接仕入れる熟成の松阪牛と宮崎牛が主役。最後は好きなだけ焼肉ですが、そこまでで満腹だったという人も。目の前でシェフが焼いてくれます。ワインのペアリングもおすすめ。サービス料10%。2026年9月の口コミでは飲食グループが運営。',
  });
}

// ================================================================ 季節料理 いちい
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27046344/'; const R = TB + 'dtlrvwlst/'; const RES = 'https://yoyaku-ichii.com';
  put({
    id: 'osaka_kisetsu_ryori_ichii_hozenji', name: '季節料理 いちい (Kisetsu Ryori Ichii)', category: 'OMNI',
    lat: 34.668254, lng: 135.502574, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy- and dashi-seasoned oden and seasonal dishes; ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based oden, chicken, clams, fish and whale.',
    hours_raw: 'Daily 17:00–23:30 (L.O. 23:00); irregular closures (Tabelog). Counter only; no children under elementary-school age (Tabelog). Online reservations (yoyaku-ichii.com) — recommended, often full by 7 pm. Cards accepted; no e-money.',
    hours: ALL(day(['17:00', '23:30'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Dotonbori 1-7-10, in Hozenji Yokocho — about 5 min from Namba Stn',
    cuisine: 'Oden and seasonal Japanese dishes · omakase 10-dish course ¥6,000 · clam oden and Tajima-chicken oden in a deep dashi · whale, sardines and seasonal fish · a wide Japanese-sake list (sake omakase) · 10 counter seats, run by one owner',
    website: RES, gmaps: gm('季節料理 いちい 法善寺横丁'), menu_url: RES,
    notes: "[Oden · a one-owner oden counter in Hozenji Yokocho] A ten-seat counter in Hozenji Yokocho, run single-handed by a friendly owner who keeps drinks and dishes moving. The draw is oden in a carefully built dashi, gentle but deep, especially the clam and Tajima-chicken oden. Around it come seasonal plates: whale, sardines, meat and fish. The omakase of ten dishes (¥6,000) is the way in, and there's a broad Japanese-sake list with an omakase pour. It's quiet and calm, good for a slow drink. Book online, as it's often full by 7 pm. With one person running everything, dishes can take a moment. No children under elementary-school age.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Hozenji Yokocho (Tabelog)', background: 'A one-person operation: the owner cooks and serves alone (September–October 2026 reviews). Online reservations at yoyaku-ichii.com.', philosophy: null, specialty: 'Oden; seasonal dishes; Japanese sake.',
      anecdotes: [
        { text: '"The standout dishes were the clam oden and Tajima chicken oden, which were exceptionally tasty. The broth for the oden had been expertly enhanced… The owner was managing everything on [their] own." — October 2026, omakase 10 dishes.', source: R + 'B511803692/' },
        { text: '"This restaurant is run by a single owner, who is very friendly and creates a welcoming atmosphere. I tried the Omakase course for JPY 6000." — October 2026.', source: R + 'B537214472/' },
      ],
      japanese_sources_summary: '食べログ: 季節料理 いちい、大阪市中央区道頓堀1-7-10(法善寺横丁)、050-5872-4561、予約可、毎日17:00〜23:30(L.O.23:00)、不定休、カウンターのみで未就学児は遠慮、カード可、電子マネー不可、10席、予約サイト yoyaku-ichii.com。2026年の口コミ(9〜10月): 19時前には満席、おまかせ10品のコース、蛤のおでんと但馬鶏のおでん、だしの深み、店主が一人で切り盛り、鯨や鰯、ネット予約、おでんと日本酒の店、値段のわりにおいしい、日本酒もおまかせ、一人営業なので少し時間がかかる、気さくな店主、おまかせ6,000円、静かなカウンター、目の前で調理、10品のコース6,000円、伝統的なだしのうま味、日本酒の種類が豊富。',
      confidence: 'medium', sources: [TB, RES, R + 'B511803692/', R + 'B537214472/', R + 'B536334584/', R + 'B537609391/', R + 'B537274004/', R + 'B537782281/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small one-owner counter; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-7-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目7番10号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537214472/', R + 'B537609391/'],
    price_note: 'Course price from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase 10-dish course', '¥6,000', 'Course', 'no', 'no', 'October 2026.', 'omakase'),
      it('', '', 'Clam oden', '', 'Oden', 'no', 'no', 'October 2026.', 'hamaguri'),
      it('', '', 'Tajima-chicken oden', '', 'Oden', 'no', 'no', 'October 2026.', 'tajima'),
      it('', '', 'Sake omakase', '', 'Drinks', 'ask', 'ask', 'September 2026.', 'sake'),
    ] }, {
    cuisine: 'おでんと季節の和食・おまかせ10品のコース6,000円・深いだしの蛤と但馬鶏のおでん・鯨、鰯、季節の魚・日本酒が豊富(日本酒もおまかせ)・店主が一人で切り盛りするカウンター10席',
    neighborhood: '道頓堀1-7-10、法善寺横丁。なんば駅から徒歩約5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油とだしのおでんや季節の料理。予約時に相談を。',
    vegan_detail: 'ヴィーガンではありません。だしのおでん、鶏、蛤、魚、鯨。',
    notes: '[おでん・法善寺横丁の一人営業のおでんカウンター] 法善寺横丁にある10席のカウンターで、気さくな店主が一人で切り盛りし、飲み物も料理も手際よく出してくれます。目当ては丁寧にとっただしのおでんで、やさしいのに深く、特に蛤と但馬鶏。季節の一品は鯨、鰯、肉や魚。入り口はおまかせ10品(6,000円)で、日本酒も種類が多く、おまかせで選んでもらえます。静かで落ち着いていて、ゆっくり飲むのに向いています。19時には満席になることが多いのでネット予約を。一人営業なので料理に少し時間がかかることも。未就学児は不可。',
  });
}

save();
