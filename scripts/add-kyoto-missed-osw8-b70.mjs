// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 70.
//   + キッチン ノリタ kitchen NORITA (couple-run Italian down a Fuyacho-Sanjo alley; rest)
//   + マンインザムーン 祇園店 Man in the Moon Gion (Irish pub with no cover charge, Gion Shinbashi; rest)
//   + 祇園おくむら Gion Okumura (kaiseki-style French off Hanamikoji; rest)
//   + Feliz-團斗 Maruto (miso-centred Japanese courses in a Takakura machiya; rest)
//   Rest list (mod 6 = 1) after batch 69, nearest-first — skipped:
//   - 京都一の傳 祇園ハナレ 26044729: branch of a brand house — 京都一の傳 has shops at JR Kyoto Isetan and Roppongi Hills in our
//     crawls besides this one; same kind of call as 土井志ば漬本舗 (26017693); flagged for the coordinator.
//   - 寿しのむさし 三条本店 26003605: brand already in data (kyoto_sushi_no_musashi_hachijo).
//   - 鮨炉まん 26042269: sub-brand of a non-local multi-brand group — the 炉まん brands (炭炉まん, 百炉まん) of
//     ファンインターナショナル; same call as 26039250.
//   Brand check: queue-status.jsonl grepped for ノリタ, マンインザムーン / Pig & Whistle, おくむら, 團斗 / Feliz — no entries.
//   Man in the Moon: a Tabelog name search (2026-11-07) shows Kyoto Station, Karasuma and Gion shops (and one in Shinbashi);
//   Tabelog says Gion is the third, from the people behind the Pig & Whistle pub of 1986 — a small local pub group, drafted.
//   Feliz-團斗's site links one sister, 麺処RAMEN まると — small, drafted. おくむら's site (restaurant-okumura.com) shows one
//   restaurant and an online shop. None is in data/kyoto.json (main 2363029c) by name or address.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-70');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260301/26044729/', 'branch of a brand house: 京都一の傳 (saikyo-yaki maker) — our crawls also hold its JR Kyoto Isetan B1 and Roppongi Hills shops; same kind of call as 土井志ば漬本舗 26017693 — flagged for the coordinator');
skip('https://tabelog.com/en/kyoto/A2601/A260202/26003605/', 'brand already in data: 寿しのむさし (kyoto_sushi_no_musashi_hachijo)');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26042269/', 'sub-brand of a non-local multi-brand group: 炉まん brands of ファンインターナショナル (炭炉まん, 百炉まん, 鮨炉まん); same call as 26039250');

// ================================================================ キッチン ノリタ kitchen NORITA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26018851/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_kitchen_norita', name: 'キッチン ノリタ (kitchen NORITA)', category: 'OMNI',
    lat: 35.00797889786942, lng: 135.76540724038858, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: pizza, pasta and cheesecake (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prosciutto, salsiccia and cheese through the menu; a steamed vegetable salad and pickles may suit — ask (2024–2025 reviews).',
    hours_raw: 'Wednesday–Sunday, holidays and the day before a holiday 17:30–23:00 (last order 22:00); closed Monday and Tuesday, open on a holiday with the closing day moved (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and e-money (IC, iD, QUICPay); no QR (Tabelog). 22 seats: 6 at the counter, 16 at tables; whole-shop hire for 14 or more, up to 20 (Tabelog). Non-smoking; smoking on the terrace (Tabelog). Children welcome (Tabelog). A white, glass-fronted house down an alley beside a hair salon at Fuyacho-Sanjo; 10 min walk from Kyoto Shiyakusho-mae Stn (Tabelog). Opened 7 September 2011 (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho-Sanjo, alley house',
    cuisine: 'Homely Italian dining bar run by a couple, cooking to bring out each ingredient (Tabelog) · carpaccio, homemade pickles, Spanish prosciutto, oven-baked tomatoes with several cheeses, steamed vegetable salad, mushroom ajillo, Kujo-negi and salsiccia pizza, oil-based pasta (2017–2025 reviews) · desserts such as Earl Grey Basque cheesecake and cassata (July 2026) · wine, shochu and cocktails; shio yuzu-shu (Tabelog; January 2020) · about ¥4,000–5,000 (Tabelog)',
    website: null, gmaps: gm('kitchen NORITA 麩屋町'), menu_url: null,
    notes: '[Italian · Fuyacho-Sanjo alley] A bright, white little house down a side alley, run by a husband and wife: carpaccio, prosciutto, oven-baked tomatoes under melted cheeses and a Kujo-negi pizza, with wine and a homely welcome for solo diners. When busy, one cook means waits between dishes. Dinner only; closed Monday and Tuesday.',
    chef_bio: { chef_name: null, roles: ['Chef (husband)', 'Front of house (wife)'], origin: null,
      background: 'Per Tabelog: a cosy, glass-fronted restaurant down a side street by a hair salon at Fuyacho-Sanjo, run by a husband-and-wife team and designed to welcome solo diners; opened 7 September 2011.',
      philosophy: 'Dishes that bring out the best of the ingredients (Tabelog).', specialty: 'Kujo-negi and salsiccia pizza.',
      anecdotes: [
        { text: 'A September 2024 guest stopping in for a light drink worked through pickles, prosciutto, oven-baked tomatoes and a Kujo-negi pizza, praising every vegetable.', source: R + 'B492090538/' },
        { text: 'A May 2025 pair walked in on spec and were promptly seated at the counter for prosciutto, salad, pizza and mushroom ajillo.', source: R + 'B507320185/' },
        { text: 'A July 2026 diner after the Kyoto Culture Museum found everything good but waited a long time between dishes, the owner cooking alone.', source: R + 'B532273939/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・ダイニングバー、中京区麩屋町通三条下ル白壁町438、市役所前駅から徒歩10分、水〜日・祝・祝前日 17:30〜23:00 (L.O.22:00)、月・火休み (祝日は営業し休みをずらす)、予約可、カード (VISA・Master・JCB・AMEX・Diners)・電子マネー (交通系IC・iD・QUICPay) 可、QR 不可、22席 (カウンター6、テーブル16)、14名以上で貸切可、禁煙 (テラスで喫煙可)、子ども可、2011年9月7日開店、麩屋町三条の美容室の横の路地を入ったガラス張りの店、夫婦で営む、一人でも入りやすい。口コミ (2017年1月〜2026年7月、英語): 白い建物、カルパッチョ、自家製ピクルス、スペインの生ハム、トマトのチーズオーブン焼き、蒸し野菜のサラダ、九条ねぎとサルシッチャのピザ、きのこのアヒージョ、オイルパスタ、アールグレイのバスクチーズケーキ、カッサータ、塩ゆず酒、店主一人で調理し料理が出るまで待ったとの声 (2026年7月)。',
      confidence: 'medium', sources: [TB, R + 'B276047170/', R + 'B423561432/', R + 'B492090538/', R + 'B493477906/', R + 'B507320185/', R + 'B532273939/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small alley restaurant; solo-friendly; cards and IC.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通三条下ル白壁町438',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through July 2026.' },
    pin_source: `Tabelog ${TB} (35.007979, 135.765407); cross-checked: GSI 京都府京都市中京区白壁町438番地 (lot) 10 m; nearest existing record 37.8 m (kyoto_fuya_ryuryoku, 439); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B492090538/'],
    price_note: 'No current prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Kujo-negi and salsiccia pizza', '', 'Pizza', 'no', 'no', 'September 2024.', 'pizza'),
      it('', '', 'Oven-baked tomatoes with cheeses', '', 'Antipasti', 'ask', 'no', 'September 2024.', 'tomato'),
    ] }, {
    cuisine: '夫婦で営む家庭的なイタリアンのダイニングバー、素材を生かした料理 (食べログ)・カルパッチョ、自家製ピクルス、スペインの生ハム、トマトのチーズオーブン焼き、蒸し野菜のサラダ、きのこのアヒージョ、九条ねぎとサルシッチャのピザ、オイルパスタ (2017〜2025年の口コミ)・アールグレイのバスクチーズケーキやカッサータなどのデザート (2026年7月)・ワイン、焼酎、カクテル、塩ゆず酒 (食べログ、2020年1月)・4,000〜5,000円ほど (食べログ)',
    neighborhood: '麩屋町三条、路地の一軒家',
    gf_detail: 'グルテンフリー不可。ピザ、パスタ、チーズケーキ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。生ハム、サルシッチャ、チーズが多い。蒸し野菜のサラダやピクルスは要確認 (2024〜2025年の口コミ)。',
    notes: '[イタリアン・麩屋町三条の路地] 路地の奥の明るく白い小さな家で、夫婦が営む。カルパッチョ、生ハム、チーズをのせたトマトのオーブン焼き、九条ねぎのピザにワイン、一人でも気軽に。混むと料理人が一人のため料理の間に待つことも。夜のみ、月・火休み。',
  });
}

// ================================================================ マンインザムーン 祇園店 Man in the Moon Gion
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26021893/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.maninthemoon.jp/';
  const W = day(['14:30', '24:00']); const F = day(['14:30', '25:00']);
  put({
    id: 'kyoto_man_in_the_moon_gion', name: 'マンインザムーン 祇園店 (Man in the Moon Gion)', category: 'OMNI',
    lat: 35.00519363281972, lng: 135.77510885544262, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: beer, battered fish and chips (2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A drinks-first pub; food noted is nachos and fish and chips (2022; September 2026).',
    hours_raw: 'Monday–Thursday and Sunday 14:30–24:00; Friday and Saturday 14:30–1:00 (Tabelog). No cover charge (Tabelog original チャージ料なし); pay at the counter as you order (Tabelog). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX) and IC; no QR (Tabelog). 36 seats at the counter and sofas (Tabelog). Smoking allowed, with separate smoking and non-smoking areas (Tabelog; October 2024). Live music and sports on TV; English menu; English-speaking staff (Tabelog; 2023–2026 reviews). On Shinbashi-dori east of Yamatooji; 6 min walk from Gion-Shijo Stn (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: F, 5: F, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shinbashi, east of Yamatooji',
    cuisine: 'Irish pub of draught and craft beers and whiskies (Tabelog; 2022–2026 reviews) · eight to ten draught towers including Guinness, Heartland, Yona Yona and Japanese craft beer, regular glass about ¾ pint, about ¥850–1,000; a wide whisky shelf including rare bottles (2018–2025 reviews) · pub food: nachos about ¥700, fish and chips with tartar sauce (2022; September 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('Man in the Moon 祇園'), menu_url: null,
    notes: '[Irish pub · Gion Shinbashi] A Dublin-style corner pub in Gion with eight to ten draught taps, a long whisky shelf, sports on the TV and a crowd mostly from overseas — no cover charge, pay as you order. Good fish and chips. Smoking allowed in part of the room. Open from 14:30 until midnight, 1 a.m. at weekends.',
    chef_bio: { chef_name: null, roles: ['Bar staff (unnamed)'], origin: null,
      background: 'Per Tabelog: the third Man in the Moon, after Kyoto Station and Karasuma, from the people behind the British pub Pig & Whistle, open since 1986; a no-charge, cash-on-counter Irish pub styled on a Dublin corner pub with ten draught beer towers.',
      philosophy: null, specialty: 'Draught beer; fish and chips.',
      anecdotes: [
        { text: 'An October 2023 visitor found about 80% of the room from overseas, with a Japanese bartender explaining the beers in fluent English.', source: R + 'B473274264/' },
        { text: 'A December 2024 guest, unsure of the name after asking twice, finally read it off the sign outside: Man in the Moon.', source: R + 'B496701537/' },
        { text: 'A September 2026 pub-goer found the fish and chips, tartar sauce included, excellent and adopted it as a new favourite.', source: R + 'B536406764/' },
      ],
      japanese_sources_summary: '食べログ: パブ・スポーツバー・バー、東山区新橋通大和大路東入2清本町376、京阪祇園四条駅から徒歩6分、月〜木・日 14:30〜24:00、金・土 14:30〜翌1:00、チャージ料なし、キャッシュオンの店、予約可、カード (VISA・Master・JCB・AMEX)・交通系IC 可、QR 不可、36席、喫煙可、ライブ演奏、スポーツ観戦、英語メニュー、1986年からのブリティッシュパブ Pig & Whistle の系列で、京都駅店・烏丸店に続く3号店、ダブリンの街角のパブ風、10種類の生ビールのタワー。口コミ (2018年11月〜2026年9月、英語): 客の多くは海外から、英語を話すスタッフ、ギネス3/4パイント850円 (2018年)、Heartland や Yona Yona 1,000円 (2022年)、クラフトビール、珍しいウイスキー、ナチョス約700円、フィッシュアンドチップス (2026年9月)、喫煙席と禁煙席が分かれる (2024年10月)、壁に外国の紙幣。',
      confidence: 'medium', sources: [TB, WEB, R + 'B142887286/', R + 'B450996046/', R + 'B473274264/', R + 'B493511842/', R + 'B496701537/', R + 'B501193943/', R + 'B512263052/', R + 'B532684240/', R + 'B536406764/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff; mostly overseas guests; no cover charge; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通大和大路東入2清本町376',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005194, 135.775109); cross-checked: GSI 京都府京都市東山区清本町376番地 (lot) 31 m; nearest existing record 15.4 m (kyoto_ueda_coffee_gion); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B450996046/', R + 'B142887286/'],
    price_note: 'Prices from 2018 and 2022 reviews; may have changed.', last_checked: TODAY, items: [
      it('', '', 'Draught beer, regular (about ¾ pint)', '¥1,000', 'Drinks', 'no', 'ask', 'June 2022.', 'draught'),
      it('', '', 'Nachos', '¥700', 'Food', 'ask', 'ask', 'June 2022; about.', 'nachos'),
      it('', '', 'Fish and chips', '', 'Food', 'no', 'no', 'September 2026.', 'fish_chips'),
    ] }, {
    cuisine: '生ビール、クラフトビール、ウイスキーのアイリッシュパブ (食べログ、2022〜2026年の口コミ)・ギネス、Heartland、Yona Yona、国産クラフトビールなど8〜10種の生ビール、通常サイズは約3/4パイントで850〜1,000円ほど、珍しいものも含むウイスキー (2018〜2025年の口コミ)・パブの料理: ナチョス約700円、タルタルソースのフィッシュアンドチップス (2022年、2026年9月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '祇園新橋、大和大路の東',
    gf_detail: 'グルテンフリー不可。ビール、衣のフィッシュアンドチップス (2022〜2026年の口コミ)。',
    vegan_detail: '要確認。飲み物中心のパブで、口コミにある料理はナチョスとフィッシュアンドチップス (2022年、2026年9月)。',
    notes: '[アイリッシュパブ・祇園新橋] ダブリンの街角風の祇園のパブ。8〜10種の生ビール、ずらりと並ぶウイスキー、テレビでスポーツ、客の多くは海外から。チャージなしで注文ごとに支払い。フィッシュアンドチップスがおいしい。店の一部で喫煙可。14時半から24時まで、週末は翌1時まで。',
  });
}

// ================================================================ 祇園おくむら Gion Okumura
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036179/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://restaurant-okumura.com/';
  const H = day(['12:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_gion_okumura', name: '祇園おくむら (Gion Okumura)', category: 'OMNI',
    lat: 35.002441007876115, lng: 135.77537972032565, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses include a tart, gratin, curry and a dessert selection of cakes; Tabelog asks guests to tell the restaurant about allergies when booking (Tabelog; 2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, fugu and wagyu courses (2024–2025 reviews).',
    hours_raw: 'Monday and Thursday–Sunday 12:00–15:00 and 17:30–22:00; closed Tuesday and Wednesday, and in cherry-blossom and autumn-leaf seasons possibly only Tuesday — see the calendar on the official site or Instagram (Tabelog). Reservation only; tell the restaurant about allergies or dislikes when booking; seat requests not guaranteed (Tabelog). Service charge 10% (Tabelog original サービス料10%を頂戴しております。). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 23 seats: 5 at the counter and 8 at tables downstairs, 10 at tables upstairs; private rooms for up to 10, the two upstairs together for 14 (Tabelog). Non-smoking (Tabelog). Children welcome, with a kids\' menu (Tabelog). Tabelog says shoes come off at the entrance; a September 2026 regular found that after a renovation shoes stay on and the ground-floor tatami room is now tables. Off Hanamikoji at the corner of Aoyagi-koji; 5 min walk from Gion-Shijo Stn (Tabelog; September 2026).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'varies',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion, just off Hanamikoji',
    cuisine: 'Kaiseki-style French cuisine in a Gion house of private rooms (official site; Tabelog) · seasonal courses: an amuse of pear and prosciutto, a sweet tart with caviar, assorted small dishes such as crab, chestnut and salmon, abalone, shrimp and scallop seared on hot stones, fugu, Osaka black wagyu, shrimp-yam gratin, a bite of curry, and a dessert selection to choose from (December 2024–December 2025) · wine pairings; non-alcoholic champagne with fruit (2025 reviews) · lunch about ¥8,000–15,000, dinner about ¥15,000–20,000 (Tabelog; 2024–2025 reviews)',
    website: WEB, gmaps: gm('祇園おくむら'), menu_url: null,
    notes: '[Kaiseki-style French · Gion, off Hanamikoji] French cooking served like kaiseki in a quiet Gion house of private rooms: a caviar tart, seasonal small plates, seafood seared on hot stones, fugu or wagyu, and a dessert selection you can pick freely from. About two and a half hours. Reservation only; 10% service charge; children welcome.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: null,
      background: 'Per the official site: Gion Okumura, kaiseki-style French cuisine, with an online shop. Per Tabelog: a reservation-only house of counter, tables and private rooms in Gion.',
      philosophy: null, specialty: 'Kaiseki-style French course; dessert selection.',
      anecdotes: [
        { text: 'A September 2026 regular, back after a long gap, found the house renovated — shoes now stay on and the downstairs tatami room is tables — missing the old ryotei air but praising the food.', source: R + 'B465304676/' },
        { text: 'A November 2025 diner spent two and a half hours over the course in a private room and greedily picked several desserts at the end.', source: R + 'B516954633/' },
        { text: 'A March 2025 guest, taken there by someone else, found the course disjointed and dated.', source: R + 'B505039953/' },
      ],
      japanese_sources_summary: '公式サイト: 祇園おくむら、懐石風フレンチ、オンラインショップあり。食べログ: フレンチ・日本料理、東山区祇園町南側570-6、京阪祇園四条駅から徒歩5分、月・木〜日 12:00〜15:00、17:30〜22:00、火・水休み (桜と紅葉の時期は火曜のみ休みのことあり、公式サイトや Instagram のカレンダーで確認)、完全予約制、アレルギーや苦手な食材は予約時に、サービス料10%、カード可、電子マネー・QR 不可、23席 (1階カウンター5・テーブル8、2階テーブル10)、個室 (最大10名、2階の2室で14名)、禁煙、子ども可・キッズメニューあり、玄関で靴を脱ぐ。口コミ (2024年12月〜2026年9月、英語): 花見小路から入った路地の角 (Aoyagi-koji)、改装で靴のまま上がるようになり1階の座敷はテーブル席に (2026年9月)、洋梨と生ハムのアミューズ、キャビアのタルト、蟹や栗や鮭の小皿、石焼きの鮑・海老・帆立、ふぐ、大阪の黒毛和牛、海老芋のグラタン、ひと口のカレー、好きなだけ選べるデザート、フルーツのノンアルコールシャンパン、コースは約2時間半、物語がなく古いと感じたとの声 (2025年3月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B452817230/', R + 'B465304676/', R + 'B496907145/', R + 'B497254766/', R + 'B501460435/', R + 'B503473704/', R + 'B504470549/', R + 'B505039953/', R + 'B516809170/', R + 'B516954633/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; private rooms; 10% service charge; children welcome; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002441, 135.775380); GSI resolves 祇園町南側570-6 only to the 570 block point (179 m), so the Tabelog pin is kept; kyoto_gion_okada (also 570-6, a different restaurant) is 9.9 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B497254766/'],
    price_note: 'No current course prices in the sources; a December 2024 guest paid about ¥10,000.', last_checked: TODAY, items: [
      it('', '', 'Seasonal course (lunch or dinner)', '', 'Courses', 'ask', 'no', '2024–2026 reviews.', 'course'),
      it('', '', 'Service charge', '10%', 'Charge', 'ask', 'no', 'Tabelog.', 'service'),
    ] }, {
    cuisine: '祇園の個室の一軒家で懐石風のフレンチ (公式サイト、食べログ)・季節のコース: 洋梨と生ハムのアミューズ、キャビアをのせた甘いタルト、蟹・栗・鮭などの小皿の盛り合わせ、石焼きの鮑・海老・帆立、ふぐ、大阪の黒毛和牛、海老芋のグラタン、ひと口のカレー、好きに選べるデザート (2024年12月〜2025年12月)・ワインのペアリング、フルーツのノンアルコールシャンパン (2025年の口コミ)・昼8,000〜15,000円ほど、夜15,000〜20,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '祇園、花見小路のすぐそば',
    gf_detail: '要確認。コースにタルト、グラタン、カレー、ケーキなどのデザート。食べログはアレルギーを予約時に伝えるよう案内 (食べログ、2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚介、ふぐ、和牛のコース (2024〜2025年の口コミ)。',
    notes: '[懐石風フレンチ・祇園、花見小路のそば] 静かな祇園の個室の一軒家で、懐石のように出すフランス料理。キャビアのタルト、季節の小皿、石焼きの魚介、ふぐや和牛、最後は好きなだけ選べるデザート。約2時間半。完全予約制、サービス料10%、子ども可。',
  });
}

// ================================================================ Feliz-團斗 Maruto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030419/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://feliz-malto.com/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_feliz_maruto', name: 'Feliz-團斗 (Maruto)', category: 'OMNI',
    lat: 35.00165078787256, lng: 135.76265331032658, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Miso is the theme of every course, and some miso is barley-based (Oshima barley miso in a July 2026 tasting); the staff ask about restrictions before a course (September 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, sea bass, pork, wagyu sukiyaki and duck in the courses (2026 reviews).',
    hours_raw: 'Tuesday–Sunday 11:30–15:00 (last order 13:30) and 17:00–23:00 (last order 22:00); closed Monday; closed 31 December 2026 to 2 January 2027, no lunch on 3 January (Tabelog). Lunch is courses only (official site). Reservations accepted; seat-only bookings may be asked to take a course (Tabelog). Seat-only bookings are charged ¥715 incl. tax for a three-miso tasting starter, included in courses (Tabelog original 「席のみご予約」の場合、先付【御味噌の三種食べ比べ】715円(税込)を頂いております。). Private rooms ¥1,100 incl. tax per room (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 34 seats; private rooms for 4 downstairs and two for 10 upstairs (Tabelog). Non-smoking (Tabelog). Children from 5; call about younger ones (Tabelog). A machiya on Takakura above Bukkoji; 3 min walk from Hankyu Karasuma Stn (Tabelog). Opened 21 March 2018 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura-Bukkoji, near Shijo-Karasuma',
    cuisine: 'Japanese courses built around miso from breweries across Japan, in a Kyoto machiya (official site; 2026 reviews) · courses from ¥4,000: Otowa 8 dishes ¥5,500, Hiei 9 dishes ¥7,700, Kibune 8 dishes ¥8,800; all-you-can-drink +¥2,420, premium with local sake +¥3,520 (official site) · a three-miso tasting to start, sashimi, sea bass grilled with miso and sansho, corn purée, cheese marinated in miso, slow-cooked Kyoto mochi pork with vegetable sauce, clay-pot rice, miso desserts; A5 wagyu miso sukiyaki and Kyoto duck shabu-shabu (July–October 2026) · lunch about ¥2,000–3,000, dinner about ¥6,000–8,000 (Tabelog)',
    website: WEB, gmaps: gm('Feliz 團斗 高倉'), menu_url: WEB + 'course.html',
    notes: '[Miso kaiseki · Takakura near Shijo-Karasuma, machiya] A townhouse restaurant that makes miso the star: each course opens with three regional misos to compare, then sashimi, sea bass grilled with miso and sansho, miso-marinated cheese and slow-cooked pork, ending with clay-pot rice and even a miso dessert. Courses from ¥4,000; private rooms. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Staff'], origin: null,
      background: 'Per the official site: Feliz-團斗 (read まると), a Kyoto Japanese restaurant serving courses rich in miso and seasonal ingredients from ¥4,000; the site links a sister ramen shop, 麺処RAMEN まると, opened in 2023 near Kiyomizu-dera. Opened 21 March 2018 (Tabelog).',
      philosophy: 'Miso and seasonal ingredients (official site).', specialty: 'Three-miso tasting; Otowa course.',
      anecdotes: [
        { text: 'A July 2026 company party used the private rooms and enjoyed a Gion Matsuri scene drawn in miso powder and the chance to choose the miso for the soup.', source: R + 'B531453465/' },
        { text: 'A July 2026 diner on the ¥5,500 Otowa course tasted a Kyoto rice-koji miso, a Yamaguchi barley miso and a red miso side by side.', source: R + 'B532295794/' },
        { text: 'A September 2026 holiday lunch guest was asked about dislikes and restrictions even though it was a set course.', source: R + 'B536373089/' },
      ],
      japanese_sources_summary: '公式サイト: Feliz‐團斗 (まると)、お味噌と季節の食材のコース4,000円から、飲み放題付き5,500円から、音羽 全8品5,500円、比叡 全9品7,700円、貴船 全8品8,800円、飲み放題 谷 +2,420円・山 (地酒も) +3,520円、ランチはコースのみ、姉妹店に麺処RAMEN まると (清水寺、2023年開店)。食べログ: 日本料理・居酒屋・海鮮、下京区高倉通仏光寺上る西前町377-1、阪急烏丸駅から徒歩3分、火〜日 11:30〜15:00 (L.O.13:30)、17:00〜23:00 (L.O.22:00)、月曜休み、2026年12月31日〜2027年1月2日休み、予約可、席のみ予約は先付の御味噌の三種食べ比べ715円 (税込)、個室料1室1,100円 (税込)、カード可、電子マネー・QR 不可、34席、個室 (1階4名、2階10名×2)、禁煙、5歳以上可、2018年3月21日開店。口コミ (2025年3月〜2026年10月、英語): 町家、全国の味噌の食べ比べ、刺身、すずきの味噌山椒焼き、とうもろこしのピュレ、味噌漬けのチーズ、京都のもち豚の煮込みと野菜のソース、土鍋ご飯、味噌のデザート、A5和牛の味噌すき焼き、京鴨のしゃぶしゃぶ、祇園祭を味噌パウダーで描いた皿 (2026年7月)、コースでも苦手なものを聞いてくれた (2026年9月)。',
      confidence: 'medium', sources: [TB, WEB, WEB + 'course.html', R + 'B503539698/', R + 'B531295909/', R + 'B531453465/', R + 'B532295794/', R + 'B532597324/', R + 'B533440826/', R + 'B533711006/', R + 'B533836649/', R + 'B536373089/', R + 'B538181325/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥715 miso starter on seat-only bookings; private rooms ¥1,100; children from 5; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高倉通仏光寺上る西前町377-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001651, 135.762653); cross-checked: GSI 京都府京都市下京区西前町377番地 (lot) 18 m; nearest existing record 16.9 m (kyoto_petit_poisson_bouillabaisse, 374-1); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB + 'course.html'],
    price_note: 'Prices from the official course page (read 2026-11-07), tax included.', last_checked: TODAY, items: [
      it('', '', 'Otowa course (8 dishes)', '¥5,500', 'Courses', 'ask', 'no', 'Official site.', 'otowa'),
      it('', '', 'Hiei course (9 dishes)', '¥7,700', 'Courses', 'ask', 'no', 'Official site.', 'hiei'),
      it('', '', 'Three-miso tasting starter (seat-only bookings)', '¥715', 'Charge', 'ask', 'no', 'Tabelog.', 'miso_starter'),
    ] }, {
    cuisine: '町家で全国の蔵の味噌を中心にした和食のコース (公式サイト、2026年の口コミ)・コースは4,000円から: 音羽 全8品5,500円、比叡 全9品7,700円、貴船 全8品8,800円、飲み放題 +2,420円、地酒も含むプレミアム +3,520円 (公式サイト)・最初に3種の味噌の食べ比べ、刺身、すずきの味噌山椒焼き、とうもろこしのピュレ、味噌漬けのチーズ、京都のもち豚の煮込みと野菜のソース、土鍋ご飯、味噌のデザート、A5和牛の味噌すき焼き、京鴨のしゃぶしゃぶ (2026年7〜10月)・昼2,000〜3,000円ほど、夜6,000〜8,000円ほど (食べログ)',
    neighborhood: '高倉仏光寺、四条烏丸のそば',
    gf_detail: '要確認。どのコースも味噌が主役で、麦味噌も使う (2026年7月の食べ比べ)。コースでも制限や苦手なものを聞いてくれる (2026年9月)。',
    vegan_detail: 'ヴィーガン不可。コースに刺身、すずき、豚肉、和牛のすき焼き、鴨 (2026年の口コミ)。',
    notes: '[味噌の会席・四条烏丸近くの高倉、町家] 味噌を主役にした町家の店。各地の味噌3種の食べ比べに始まり、刺身、すずきの味噌山椒焼き、味噌漬けのチーズ、もち豚の煮込み、土鍋ご飯、味噌のデザートまで。コースは4,000円から、個室あり。月曜休み。',
  });
}

save();
