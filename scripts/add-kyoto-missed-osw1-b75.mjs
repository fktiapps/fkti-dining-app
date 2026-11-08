// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 75.
//   + Royal 1382 (antique-and-flower baked-goods café on Sakaimachi; sister of a bakery in Otsu)
//   + 有吉 Ariyoshi (sushi and seasonal small plates down a Gion alley)
//   + 祇園新橋川勝 Gion Shinbashi Kawakatsu (à la carte beef dishes at a counter behind an iron door)
//   - 祇園 京料理 花咲, ハーブス 大丸京都店: skipped (reasons below).
//   Rest list (`queue.mjs kyoto-missed next rest 2000`), nearest-first, lane ids 26000246 (skipped), 26040302,
//   26018348 (skipped), 26023544, 26030882.
//   queue-status.jsonl grepped for each brand (花咲, Royal 1382, ハーブス/HARBS, 有吉, 川勝): no earlier rulings.
//   Data check: none of the three drafted is in data/kyoto.json by name or address (道祐町148, 祇園町北側282-5,
//   橋本町410-7). ぶゞ家 (kyoto_bubuya_gion) sits in a building named ぎおん川勝 at 祇園町北側297 — a different address; no link
//   to 祇園新橋川勝 was found.
//   Same-name count (same brand or operator only): Royal 1382 — a May 2026 reviewer calls it a sister shop of Bakery
//   Ranunculus in Otsu; drafted as a small local group, flagged. 有吉, 川勝 — one shop each. Large-parent list checked.
//   Service charges: none listed on Tabelog for any of the three.
//   Other-diner remarks (Greg 2026-11-06): none used.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-75');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26000246', '祇園 京料理 花咲: brand already in data — same ruling as 26004942: 花咲 is in kyoto.json as kyoto_hanasaki_nishiki (祇園京料理 花咲 錦店, same Kyoto-kaiseki concept); the group site (kyoto-hanasaki.com) says the brand began in Gion and now has four shops; the Gion invoice holder is 株式会社花咲 (NTA register)');
skip('26018348', 'ハーブス 大丸京都店: chain — HARBS is a national cake-café chain');

// ================================================================ Royal 1382
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040302/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['11:30', '18:00']); const H = day(['11:30', '22:00']);
  put({
    id: 'kyoto_royal_1382_sakaimachi', name: 'Royal 1382', category: 'OMNI',
    lat: 35.007796, lng: 135.763474, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the menu is scones, cookies, shortbread, financiers, butter sandwiches and cakes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the baked goods are built on butter and cream, served with clotted cream or fresh cream (2026 reviews).',
    hours_raw: 'Monday 11:30–18:00; Tuesday, Wednesday, Friday–Sunday 11:30–22:00; closed Thursday (Tabelog). Some evenings it opens as a café (May 2026). Cashless only — no cash (Tabelog). Choose an antique plate, pick baked goods, order a drink and pay at the till, then sit (April and October 2026). On the ground floor of トレーシア堺町 on Sakaimachi, about 10 min from Karasuma-Oike (Tabelog; April 2026). Opened 28 October 2023 (Tabelog).',
    hours: { 0: MON, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi south of Oike — 10 min from Karasuma-Oike',
    cuisine: 'Baked goods to eat in among antique furniture and dried flowers (2026 reviews) · an-butter scone sandwich ¥583, filled to order with red-bean paste and thick butter — recommended eat-in only (March, August and October 2026) · scones with Rodas clotted cream, warmed on request; snowballs (April 2026) · orange-ganache sandwich cookie ¥385, herb shortbread ¥301, rum galette bretonne ¥273 (March 2026) · burnt-butter financier, chocolate chiffon with cream, Victoria cake, raisin butter sandwich (2026) · flavoured rooibos teas from ¥726, such as black bean (March and October 2026) · cream puffs some days (April 2026)',
    website: null, gmaps: gm('Royal 1382 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Café · Sakaimachi, antiques and flowers] A storybook café filled with antique furniture and flowers, where you choose an antique plate, pick scones, cookies or cakes, and sit with a flavoured tea — try the an-butter scone, filled to order. The chatty owner sometimes reads tarot in the evening. Cashless only; closed Thursday. Flagged: a sister of a bakery in Otsu.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'A May 2026 reviewer calls the shop a sister of Bakery Ranunculus in Otsu, Shiga. Reviewers describe a friendly, talkative owner (April, August and October 2026); one notes that the cream-puff range of the early days has given way to baked goods, scones and cassata (March 2026).',
      philosophy: null, specialty: 'An-butter scone sandwich.',
      anecdotes: [
        { text: 'An August 2026 visitor reports that the owner whimsically offers tarot card readings in the evening.', source: R + 'B534807430/' },
        { text: 'A September 2026 visitor came twice during a four-day stay in Kyoto.', source: R + 'B536138667/' },
      ],
      japanese_sources_summary: '食べログ: Royal 1382、シュークリーム・洋菓子、中京区道祐町148 トレーシア堺町1F、月 11:30〜18:00、火・水・金〜日 11:30〜22:00、木曜定休、キャッシュレスのみ (現金不可)、2023年10月28日オープン。口コミ (2026年、英語): アンティークの家具とドライフラワー、好きなアンティークの皿を選び焼き菓子をのせてレジで飲み物と会計、注文ごとに挟むあんバターのスコーンサンド583円、ロダスのクロテッドクリーム、オレンジガナッシュのサンドクッキー385円、ハーブのショートブレッド、ガレットブルトンヌ、焦がしバターのフィナンシェ、チョコのシフォン、ヴィクトリアケーキ、フレーバールイボスティー726円、大津のベーカリー「Ranunculus」の姉妹店とのこと、気さくな店主、夜はタロット占いも。',
      confidence: 'medium', sources: [TB, R + 'B524391140/', R + 'B526610141/', R + 'B526988900/', R + 'B527093019/', R + 'B527884573/', R + 'B534807430/', R + 'B536010089/', R + 'B536138667/', R + 'B536998066/', R + 'B538626264/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Self-service plates; cashless only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区道祐町148 トレーシア堺町1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007796, 135.763474); cross-checked: GSI 京都府京都市中京区道祐町148番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524391140/', R + 'B526610141/'],
    price_note: 'Prices from March 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'An-butter scone sandwich', '¥583', 'Baked goods', 'no', 'no', 'March 2026.', 'anbutter'),
      it('', '', 'Orange-ganache sandwich cookie (seasonal)', '¥385', 'Baked goods', 'no', 'no', 'March 2026.', 'cookie'),
      it('', '', 'French herb shortbread', '¥301', 'Baked goods', 'no', 'no', 'March 2026.', 'shortbread'),
      it('', '', 'Flavoured rooibos tea', '¥726', 'Drinks', '', '', 'March 2026.', 'rooibos'),
    ] }, {
    cuisine: 'アンティークの家具とドライフラワーの中で食べる焼き菓子 (2026年の口コミ)・注文ごとにあんことたっぷりのバターを挟むあんバターのスコーンサンド583円、イートイン限定のおすすめ (2026年3・8・10月)・温め直せるスコーンとロダスのクロテッドクリーム、スノーボール (2026年4月)・オレンジガナッシュのサンドクッキー385円、ハーブのショートブレッド301円、ラム酒のガレットブルトンヌ273円 (2026年3月)・焦がしバターのフィナンシェ、生クリームを添えたチョコのシフォン、ヴィクトリアケーキ、レーズンバターサンド (2026年)・黒豆などのフレーバールイボスティー726円から (2026年3・10月)・日によってシュークリームも (2026年4月)',
    neighborhood: '御池の南の堺町。烏丸御池から徒歩10分',
    gf_detail: 'グルテンフリーではない。スコーン、クッキー、ショートブレッド、フィナンシェ、バターサンド、ケーキの店 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。焼き菓子はバターとクリームが基本で、クロテッドクリームや生クリームを添える (2026年の口コミ)。',
    notes: '[カフェ・堺町、アンティークと花] アンティークの家具と花に囲まれた絵本のようなカフェ。アンティークの皿を選んでスコーン、クッキー、ケーキをのせ、フレーバーティーと一緒に。注文ごとに挟むあんバターのスコーンがおすすめ。話好きの店主は夜にタロット占いも。キャッシュレスのみ、木曜定休。大津のベーカリーの姉妹店 (要確認)。',
  });
}

// ================================================================ 有吉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023544/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_ariyoshi_sushi_gion', name: '有吉 (Ariyoshi)', category: 'OMNI',
    lat: 35.004357, lng: 135.77647, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal small plates, fried anago, marinated fish, then nigiri chosen to taste; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi course of fish and seafood (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday 11:30–14:00 and 17:00–23:00; closed Sunday (Tabelog). Cards: JCB, AMEX and Diners; no e-money (Tabelog). Counter seating (Tabelog). Non-smoking (Tabelog). Through a noren down a narrow Gion alley north of Shijo, about 420 m from Gion-Shijo (Tabelog; 2025–2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion north of Shijo, down an alley — about 420 m from Gion-Shijo',
    cuisine: 'About ten seasonal small plates, then nigiri you choose from a long list (March 2026) · firefly squid, marinated fish and moroko — rare at a sushi bar; fried anago; ikura (March 2025) · small, elegant nigiri served at just the right moments, with dishes that suit sake (April 2025) · appetizers and sushi crafted with care (September 2026)',
    website: null, gmaps: gm('有吉 寿司 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Sushi · Gion alley, small plates then nigiri] A hidden sushi counter down a narrow Gion alley, where a warm, playful chef serves about ten seasonal small plates — firefly squid, moroko, fried anago — then nigiri chosen to taste, at clear, fair prices. Lunch and dinner; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null,
      background: 'Reviewers describe a friendly head chef with a big personality who keeps guests entertained (June 2025, September 2026) and prices that are clear and reasonable (April 2025).',
      philosophy: null, specialty: 'Seasonal small plates and nigiri.',
      anecdotes: [
        { text: 'A March 2025 diner watched the chef drink from a giant wine glass holding two litres of sake — apparently a signature act.', source: R + 'B506273415/' },
        { text: 'A March 2026 first-timer, sent by a gourmet friend, liked that the course does not start until a drink is ordered.', source: R + 'B524925528/' },
      ],
      japanese_sources_summary: '食べログ: 有吉、寿司、東山区祇園町北側282-5、月〜土 11:30〜14:00、17:00〜23:00、日曜定休、カードはJCB・AMEX・Diners、カウンター席、禁煙。口コミ (2025〜2026年、英語): 祇園の細い路地の奥、のれん、約10品の季節の一品のあとに好きな握りを選ぶ、ほたるいか、漬けの魚、もろこ、穴子の唐揚げ、いくら、上品な小ぶりの握り、明朗で手頃な値段、気さくで楽しい大将、2リットルの酒が入る大きなワイングラスで飲む名物の芸。',
      confidence: 'medium', sources: [TB, R + 'B506273415/', R + 'B507046445/', R + 'B508462692/', R + 'B524925528/', R + 'B536352032/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; a chatty chef; JCB, AMEX or Diners only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側282-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.004357, 135.77647); cross-checked: GSI 京都府京都市東山区祇園町北側282番地 (lot) 28m; kyoto_plancha_ken is 7.0 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B506273415/', R + 'B524925528/'],
    price_note: 'No prices found on Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Seasonal small plates then nigiri of your choice', '', 'Course', 'ask', 'no', 'March 2026.', 'course'),
      it('', '', 'Fried anago', '', 'Small plates', 'no', 'no', 'March 2025.', 'anago'),
      it('', '', 'Moroko', '', 'Small plates', 'ask', 'no', 'March 2025.', 'moroko'),
    ] }, {
    cuisine: '約10品の季節の一品のあとに、豊富な中から好きな握りを (2026年3月)・ほたるいか、漬けの魚、寿司屋では珍しいもろこ、穴子の唐揚げ、いくら (2025年3月)・ちょうどよい間で出る小ぶりで上品な握り、酒に合う一品 (2025年4月)・丁寧な一品と寿司 (2026年9月)',
    neighborhood: '四条の北の祇園、路地の奥。祇園四条から約420m',
    gf_detail: '要確認。季節の一品、穴子の唐揚げ、漬けの魚、好みの握り。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚と魚介の寿司のコース (2025〜2026年の口コミ)。',
    notes: '[寿司・祇園の路地、一品から握りへ] 祇園の細い路地の奥にある隠れ家の寿司カウンター。温かく楽しい大将が、ほたるいか、もろこ、穴子の唐揚げなど約10品の季節の一品を出し、そのあと好みの握りを。明朗で手頃な値段。昼と夜、日曜定休。',
  });
}

// ================================================================ 祇園新橋川勝
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030882/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_gion_shinbashi_kawakatsu', name: '祇園新橋川勝 (Gion Shinbashi Kawakatsu)', category: 'OMNI',
    lat: 35.005833, lng: 135.776119, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Beef dishes à la carte — su-gyu (sweet-and-sour beef), menchi katsu, fried aorta, hamburg steak, dan dan noodles, oxtail ramen; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef cuts and offal throughout (2025–2026 reviews).',
    hours_raw: 'Monday, Wednesday–Saturday 18:00–23:00; closed Tuesday and Sunday (Tabelog). Reservations recommended — the counter fills up (January 2025, January 2026). Cards: JCB, AMEX and Diners (Tabelog). Counter only (January 2026). Smoking allowed (Tabelog). Behind an iron door deep inside 日宝アミ祇園, 102, in Gion Shinbashi (Tabelog; January 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion Shinbashi — about 430 m from Keihan Sanjo',
    cuisine: 'À la carte beef dishes from a blackboard of daily specials, each plated per person (January 2026) · signature su-gyu, a beef take on sweet-and-sour pork (January 2026) · tataki, tripe (mino) with ponzu, roast-beef rice bowl, burdock (January 2025) · colourful salads; dan dan noodles; oxtail ramen (April 2026) · fried aorta, hamburg steak, water-eggplant salad, beef shabu-shabu, menchi katsu, keema (August 2026)',
    website: null, gmaps: gm('祇園新橋川勝'), menu_url: TB + 'dtlmenu/',
    notes: '[Beef dining · Gion Shinbashi, a counter behind an iron door] A small counter hidden behind an iron door, with a blackboard of beef dishes ordered à la carte and plated per person — su-gyu sweet-and-sour beef, tripe with ponzu, beef shabu-shabu, menchi katsu — and dan dan noodles or oxtail ramen to finish. Book ahead; smoking allowed; closed Tuesday and Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers describe an owner whose care for the meat shows in the seasoning and plating (January 2026) and who is good company across the counter (August 2026).',
      philosophy: null, specialty: 'Su-gyu (sweet-and-sour beef).',
      anecdotes: [
        { text: 'A January 2026 party of three found every dish plated for each person, and the bill, unknown until the end, fair.', source: R + 'B520849179/' },
        { text: 'An April 2026 regular always orders the colourful salad, and recommends dan dan noodles for spice lovers or oxtail ramen for milder tastes.', source: R + 'B527110981/' },
      ],
      japanese_sources_summary: '食べログ: 祇園新橋川勝、牛料理・ダイニングバー、東山区橋本町410-7 日宝アミ祇園 102、月・水〜土 18:00〜23:00、火・日定休、カードはJCB・AMEX・Diners、喫煙可。口コミ (2025〜2026年、英語): ビルの奥の鉄の扉、カウンターのみ、要予約、黒板の日替わりと名物、人数分に盛り分け、名物のSu-gyu、たたき、ミノポン酢、ローストビーフ丼、彩りのサラダ、担々麺、テールラーメン、大動脈の唐揚げ、ハンバーグ、水茄子のサラダ、牛しゃぶ、メンチカツ、キーマ。',
      confidence: 'medium', sources: [TB, R + 'B499653394/', R + 'B520849179/', R + 'B522144326/', R + 'B527110981/', R + 'B533433449/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; book ahead; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区橋本町410-7 日宝アミ祇園 102',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.005833, 135.776119); cross-checked: GSI 京都府京都市東山区橋本町410番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522144326/', R + 'B533433449/'],
    price_note: 'No prices found; the menu is on a blackboard.', last_checked: TODAY, items: [
      it('', '', 'Su-gyu (sweet-and-sour beef)', '', 'Beef', 'ask', 'no', 'January and August 2026.', 'sugyu'),
      it('', '', 'Tripe (mino) with ponzu', '', 'Beef', 'ask', 'no', 'January 2025; August 2026.', 'mino'),
      it('', '', 'Menchi katsu', '', 'Beef', 'no', 'no', 'August 2026.', 'menchi'),
      it('', '', 'Oxtail ramen', '', 'Noodles', 'no', 'no', 'April 2026.', 'oxtail'),
    ] }, {
    cuisine: '黒板の日替わりから選ぶアラカルトの牛料理、人数分に盛り分け (2026年1月)・名物のSu-gyu (牛の酢豚) (2026年1月)・たたき、ミノのポン酢、ローストビーフ丼、ごぼう (2025年1月)・彩りのサラダ、担々麺、テールラーメン (2026年4月)・大動脈の唐揚げ、ハンバーグ、水茄子のサラダ、牛しゃぶ、メンチカツ、キーマ (2026年8月)',
    neighborhood: '祇園新橋。京阪三条から約430m',
    gf_detail: '要確認。アラカルトの牛料理: Su-gyu、メンチカツ、大動脈の唐揚げ、ハンバーグ、担々麺、テールラーメン。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。牛肉とホルモンの料理 (2025〜2026年の口コミ)。',
    notes: '[牛料理・祇園新橋、鉄の扉の奥のカウンター] 鉄の扉の奥に隠れた小さなカウンター。黒板の牛料理をアラカルトで頼み、人数分に盛り分けて出す。牛の酢豚のSu-gyu、ミノポン酢、牛しゃぶ、メンチカツ、締めに担々麺かテールラーメン。要予約、喫煙可、火・日定休。',
  });
}

save();
