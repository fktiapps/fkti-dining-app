// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 78.
//   - skip 26030446 じゃまん縁 (same-concept branch of じゃまん, in data)
//   + ル・ガブリエル Le Gabriel (seven-seat bistro off Teramachi with a weekly omurice lunch) — rest
//   + 白川たむら Shirakawa Tamura (seasonal kaiseki with a pastry chef, Shinmonzen) — rest
//   + 風響 京都店 Kazeno Ne (thick-cut katsudon and katsu sandwiches by Sakaimachi-Sanjo) — rest
//   - skip 26041840 ヒルトン京都 (venue inside a big-chain hotel, Greg 11-08 ruling)
//   + 酒処 籠目 Sake Dokoro Kagome (sake-focused counter izakaya on Matsubara) — rest
//   Rest tier, nearest-first from `next rest 2000`. queue-status.jsonl grepped for each brand: ヒルトン京都's rooftop bar was skipped as
//   a large parent (26041812); no rulings for じゃまん, ガブリエル, たむら, 風響 or 籠目.
//   Same-name counts first (2026-11-08): ル・ガブリエル — one. 白川たむら — one. 風響 — one on Tabelog (a collaboration with the
//   Tokyo katsu-sandwich shop HITOKAMI, in a small Kyoto hotel, kyoto soyo_ka — not a big-chain hotel). 籠目 — one. None of the four
//   is in data/kyoto.json.
//   Charges: none listed on Tabelog for the four. No halal claims; no owner deaths; single-review remarks about other diners and staff
//   looks left out.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-78');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26030446', 'same-concept branch of a brand already in data: じゃまん縁 is a horumon and yakiniku sister of ホルモン処 じゃまん (kyoto_horumon_jaman_kawaramachi), both late-night horumon houses (https://tabelog.com/en/kyoto/A2601/A260301/26030446/).');
skip('26041840', 'venue inside a big-chain hotel (Greg 11-08 ruling): ヒルトン京都 is the Hilton Kyoto hotel listing; its rooftop bar was already skipped at 26041812 (https://tabelog.com/en/kyoto/A2601/A260202/26041840/).');

// ================================================================ ル・ガブリエル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26027980/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['17:00', '22:30']);
  put({
    id: 'kyoto_le_gabriel_teramachi', name: 'ル・ガブリエル (Le Gabriel)', category: 'OMNI',
    lat: 35.009799, lng: 135.767023, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: demi-glace and cream sauces on the omurice, beef stroganoff (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg omurice with chicken or salmon, lobster soup, beef stroganoff (2024–26 reviews).',
    hours_raw: 'Mon, Tue and Thu–Sun 11:30–13:30 and 17:00–22:30; closed Wednesday; may change (Tabelog). Lunch is a single weekly omurice, served as soon as you sit (April 2024; October 2025). No e-money (Tabelog). 7 counter seats (Tabelog). Non-smoking (Tabelog). Teramachi Kyara Building 2F, just off the Teramachi arcade (Tabelog; April 2024). Opened 2 August 2016 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi, near the arcade — Kyoto Shiyakusho-mae',
    cuisine: 'Seven-seat counter bistro with jazz · lunch: one weekly omurice with soup and salad, e.g. yuba and vegetable cream (April 2024) · lobster soup; beef stroganoff at dinner (October 2024) · weekly omurice ¥1,000 with demi-glace; blancmange ¥600 (October 2025) · salmon and vegetable cream omurice; chicken demi-glace omurice (July and September 2026)',
    website: null, gmaps: gm('ル・ガブリエル 京都 寺町'), menu_url: TB,
    notes: '[Bistro · Teramachi, since 2016] A tiny seven-seat counter upstairs just off the Teramachi arcade, playing jazz. Lunch is one weekly omurice — demi-glace, cream or yuba — for about ¥1,000, served as soon as you sit, with blancmange to follow; dinner brings bistro dishes such as lobster soup and beef stroganoff. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: a counter bistro opened in August 2016 near Teramachi.',
      philosophy: null, specialty: 'Weekly omurice; bistro dishes.',
      anecdotes: [
        { text: 'An October 2025 lunch guest was served without ordering, since the weekly omurice is the only dish.', source: R + 'B516222361/' },
        { text: 'An April 2024 passer-by followed the sign in for a yuba and vegetable cream omurice, to jazz at the counter.', source: R + 'B482925256/' },
        { text: 'An October 2024 dinner guest called both the lobster soup and the beef stroganoff delicious.', source: R + 'B493472379/' },
      ],
      japanese_sources_summary: '食べログ: ビストロ、中京区天性寺前町541 寺町伽羅 2F、月・火・木〜日11:30〜13:30 と17:00〜22:30、水曜休み、電子マネー不可、カウンター7席、禁煙、2016年8月2日オープン。口コミ (2020年1月〜2026年9月、英語): 昼は週替わりのオムライス1種のみ (スープとサラダ付き)、湯葉と野菜のクリーム、デミグラス、鮭のクリーム、オムライス1,000円、ブランマンジェ600円、夜はオマール海老のスープ、ビーフストロガノフ、ジャズの流れる店。',
      confidence: 'medium', sources: [TB, R + 'B424076657/', R + 'B433846490/', R + 'B440720491/', R + 'B450728356/', R + 'B457542304/', R + 'B459439500/', R + 'B475553169/', R + 'B477962183/', R + 'B482925256/', R + 'B493472379/', R + 'B507884935/', R + 'B516222361/'] },
    cultural_comfort: { level: 'none_needed', note: 'Lunch is a single dish, served without ordering (October 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区天性寺前町541 寺町伽羅 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.009799, 135.767023); cross-checked: GSI 京都府京都市中京区天性寺前町541番地 (lot) 59m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516222361/'],
    price_note: 'Lunch prices from October 2025.', last_checked: TODAY, items: [
      it('', '', 'Weekly omurice lunch (with soup and salad)', '¥1,000', 'Lunch', 'no', 'no', 'October 2025.', 'omurice'),
      it('', '', 'Blancmange', '¥600', 'Dessert', 'ask', 'no', 'October 2025.', 'blancmange'),
      it('', '', 'Beef stroganoff', '', 'Dinner', 'no', 'no', 'October 2024.', 'stroganoff'),
    ] }, {
    cuisine: 'ジャズの流れるカウンター7席のビストロ・昼は週替わりのオムライス1種、スープとサラダ付き、例えば湯葉と野菜のクリーム (2024年4月)・夜はオマール海老のスープ、ビーフストロガノフ (2024年10月)・デミグラスの週替わりオムライス1,000円、ブランマンジェ600円 (2025年10月)・鮭と野菜のクリームのオムライス、鶏のデミグラスのオムライス (2026年7月・9月)',
    neighborhood: '寺町、商店街の近く。京都市役所前',
    gf_detail: 'グルテンフリーではない。オムライスのデミグラスやクリームのソース、ビーフストロガノフ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏や鮭の卵のオムライス、オマール海老のスープ、ビーフストロガノフ (2024〜2026年の口コミ)。',
    notes: '[ビストロ・寺町、2016年から] 寺町の商店街近くのビル2階、ジャズの流れるカウンター7席の小さな店。昼は週替わりのオムライス1種 (デミグラス、クリーム、湯葉など) を1,000円ほどで、座ればすぐに出てくる。食後にブランマンジェ。夜はオマール海老のスープやビーフストロガノフなどのビストロ料理。水曜休み。',
  });
}

// ================================================================ 白川たむら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26024470/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://shirakawa-tamura.hp.gogo.jp/pc/index.html';
  const H = day(['12:00', '14:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_shirakawa_tamura', name: '白川たむら (Shirakawa Tamura)', category: 'OMNI',
    lat: 35.006349, lng: 135.776168, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal kaiseki with dashi-based soups, grilled fish and desserts by a pastry chef (2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: straw-grilled bonito, ayu sushi, dashi-based soups (2026 reviews).',
    hours_raw: 'Mon–Sat 12:00–14:30 and 18:00–22:00; closed Sunday; may change (Tabelog). Reservations advised (April 2026). Cash or QR only — no cards or e-money (Tabelog). 31 seats: a 9-seat counter, a private room for 4–6 and an upstairs tatami room for 10–16 (Tabelog; January 2026). Non-smoking (Tabelog). On a lane north off Shinmonzen-dori just east of Hanamikoji (Tabelog; October 2026). Opened 1 June 2014 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmonzen, east of Hanamikoji — Gion-Shijo / Sanjo',
    cuisine: 'Seasonal kaiseki with playful seasonal plating and its own pastry chef · beautifully plated courses (September 2025) · seasonally changing menu (November 2025) · Christmas lunch heavy on meat (December 2025) · New Year party with ehomaki before Setsubun; crème brûlée and baked-sweet desserts (January 2026) · short course with a fine soup and grilled fish; summer ayu sushi with fried-bone crackers (August 2026) · Halloween menu: Mont Blanc-like finger food, chilled pumpkin soup, smoked daikon and pear monaka, mushroom and bamboo-shoot soup, bonito seared over straw at the counter (October 2026)',
    website: SITE, gmaps: gm('白川たむら 祇園'), menu_url: TB,
    notes: '[Kaiseki · Shinmonzen, since 2014] A kaiseki restaurant on a lane off Shinmonzen near Hanamikoji, with a counter facing the chef, a private room and an upstairs tatami room. Courses follow the season with playful touches — Halloween plates, ehomaki at Setsubun — bonito seared over burning straw at the counter, and desserts from an in-house pastry chef. Cash or QR only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Head chef/owner (unnamed), praised for warmth (September 2025; August 2026)', 'Pastry chef (unnamed) (January 2026)'], origin: null,
      background: 'Per Tabelog: a Japanese restaurant opened in June 2014 near Shinmonzen in Gion; reviewers note an in-house pastry chef.',
      philosophy: null, specialty: 'Seasonal kaiseki; straw-seared bonito; desserts.',
      anecdotes: [
        { text: 'A January 2026 regular’s party of eight had ehomaki ahead of Setsubun in the upstairs tatami room.', source: R + 'B521873922/' },
        { text: 'An August 2026 diner had the summer ayu sushi, its bones fried into crisp crackers.', source: R + 'B537928945/' },
        { text: 'An October 2026 guest watched bonito seared over straw at the counter during the Halloween menu.', source: R + 'B538344289/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区祇園新門前通花見小路東入一筋目上ル、月〜土12:00〜14:30 と18:00〜22:00、日曜休み、カード・電子マネー不可、QR 可、31席 (カウンター9、個室4〜6、座敷10〜16)、禁煙、2014年6月1日オープン。口コミ (2024年3月〜2026年10月、英語): 季節の会席、パティシエのデザート、恵方巻き、クリームブリュレ、短いコース、鮎の寿司と骨せんべい、ハロウィンの献立 (モンブラン風、冷たいかぼちゃのスープ、燻製の大根と梨の最中)、目の前で藁焼きのかつお、親切な料理長。',
      confidence: 'medium', sources: [TB, SITE, R + 'B241666873/', R + 'B482621010/', R + 'B484751787/', R + 'B492014653/', R + 'B498376910/', R + 'B514276574/', R + 'B517595757/', R + 'B521873922/', R + 'B525871717/', R + 'B537928945/', R + 'B538009243/', R + 'B538344289/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bring cash or a QR payment app; sit at the counter to watch the chef. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園新門前通花見小路東入一筋目上ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.006349, 135.776168); the address has no lot number, so no GSI lot cross-check — approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; reviewers report ¥6,000–29,999 per person.', last_checked: TODAY, items: [
      it('', '', 'Seasonal kaiseki course', '', 'Courses', 'ask', 'no', '2025–26 reviews.', 'kaiseki'),
      it('', '', 'Short course', '', 'Courses', 'ask', 'no', 'August 2026.', 'short_course'),
      it('', '', 'Ayu sushi (summer)', '', 'Seasonal', 'ask', 'no', 'August 2026.', 'ayu_sushi'),
    ] }, {
    cuisine: '遊び心のある季節の盛り付けとパティシエのいる会席・美しい盛り付けのコース (2025年9月)・季節で変わる献立 (2025年11月)・肉の多いクリスマスのランチ (2025年12月)・節分前の恵方巻きの新年会、クリームブリュレと焼き菓子のデザート (2026年1月)・おいしい吸い物と焼き魚の短いコース、夏の鮎の寿司と骨せんべい (2026年8月)・ハロウィンの献立、モンブラン風のひと口、冷たいかぼちゃのスープ、燻製の大根と梨の最中、きのこと筍の吸い物、カウンターで藁焼きのかつお (2026年10月)',
    neighborhood: '新門前、花見小路の東。祇園四条・三条',
    gf_detail: '要確認。出汁の吸い物、焼き魚、パティシエのデザートのある季節の会席 (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。藁焼きのかつお、鮎の寿司、出汁の吸い物 (2026年の口コミ)。',
    notes: '[会席・新門前、2014年から] 花見小路の東、新門前から入った路地の会席の店。料理人と向き合うカウンター、個室、2階の座敷。季節に合わせた遊び心のある献立 (ハロウィンの皿、節分の恵方巻き)、カウンターで藁焼きのかつお、店のパティシエのデザート。現金か QR のみ。日曜休み。',
  });
}

// ================================================================ 風響 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044030/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:00']);
  put({
    id: 'kyoto_kazeno_ne_sakaimachi', name: '風響 京都店 (Kazeno Ne Kyoto)', category: 'OMNI',
    lat: 35.008314, lng: 135.763225, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded pork cutlets in katsudon and katsu sandwiches (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlet bowls and sandwiches with red miso soup (2025–26 reviews).',
    hours_raw: 'Daily 11:00–21:00 (last order 20:00); irregular closures; closes when sold out (Tabelog). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog); a November 2025 visitor found it cash-only at opening. Dine-in or takeaway (December 2025; January 2026). 15 seats: a 6-seat counter and four small tables (Tabelog). Non-smoking (Tabelog). On the ground floor of the small hotel kyoto soyo_ka, Sakaimachi-dori south of Sanjo, across from the Inoda Coffee main shop (Tabelog; November 2025). Opened November 2025 (reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sakaimachi-dori, south of Sanjo — Karasuma Oike',
    cuisine: 'Opened as a collaboration with Tokyo’s HITOKAMI tenderloin katsu sandwich, now chiefly thick-cut pork katsudon (2025–26 reviews) · HITOKAMI tenderloin katsu sandwich set ¥1,800, ten sauces such as rich sauce or seaweed salt; boxes of four to take away (November–December 2025) · tenderloin katsu ¥2,300 (January 2026) · 300 g Kyoto Mochi Pork spencer roll katsudon ¥3,000 with red miso soup; curry topping ¥200 (May 2026) · premium loin katsudon 300 g ¥2,200; large rice +¥100 (October 2026)',
    website: null, gmaps: gm('風響 京都店'), menu_url: TB,
    notes: '[Thick-cut katsudon · Sakaimachi-Sanjo, since 2025] A small counter restaurant in the lobby floor of a boutique hotel opposite Inoda Coffee, which opened with Tokyo’s HITOKAMI tenderloin katsu sandwiches and now centres on 300 g thick-cut Kyoto Mochi Pork katsudon (¥2,200–3,000) with red miso soup. Takeaway sandwiches; reviews are mixed. Open daily to 21:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per reviews: opened in November 2025 in a hotel near Inoda Coffee’s main shop as a collaboration with HITOKAMI, an Aoyama (Tokyo) tenderloin katsu sandwich shop famous at bread festivals; by mid-2026 it had refocused on thick-cut katsudon.',
      philosophy: null, specialty: 'Thick-cut katsudon; tenderloin katsu sandwiches.',
      anecdotes: [
        { text: 'A November 2025 visitor found the opening pushed back from the 8th to the 14th, and payment cash-only at first.', source: R + 'B517219813/' },
        { text: 'A May 2026 diner’s 300 g spencer roll katsu was too big to fit in the bowl.', source: R + 'B529138076/' },
        { text: 'An October 2026 diner was surprised how easy the 300 g loin katsudon was to finish.', source: R + 'B538065803/' },
      ],
      japanese_sources_summary: '食べログ: 食堂・とんかつ・カツ丼、中京区堺町通三条下る道祐町135 kyoto soyo_ka 1F、地下鉄烏丸御池駅から徒歩10分、毎日11:00〜21:00 (L.O. 20:00)、不定休、売り切れ次第終了、カード・電子マネー・QR 可、15席 (カウンター6、テーブル)、禁煙。口コミ (2025年11月〜2026年10月、英語): イノダコーヒ本店の斜め向かいのホテルの1階、東京・青山の HITOKAMI とのコラボのヒレカツサンド1,800円 (ソース10種、4個入りの箱)、のちに厚切りのカツ丼の専門店に、京都もち豚のスペンサーロール300g 3,000円と赤だし、カレー追加200円、上ロース300g 2,200円、評価は賛否。',
      confidence: 'medium', sources: [TB, R + 'B517219813/', R + 'B518184281/', R + 'B518276557/', R + 'B520947794/', R + 'B522351883/', R + 'B529138076/', R + 'B529679732/', R + 'B533809351/', R + 'B535272036/', R + 'B536404889/', R + 'B537329542/', R + 'B538065803/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; takeaway available. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区堺町通三条下る道祐町135 kyoto soyo_ka 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008314, 135.763335), offset 10 m west: the legacy record ChIJezBqHpMJAWARi5BFOEhNolk (Telaviv, Israeli) sits on exactly the same point — flagged in case Kazeno Ne replaced it; cross-checked: GSI 京都府京都市中京区道祐町135番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529138076/', R + 'B538065803/', R + 'B522351883/'],
    price_note: 'Prices from November 2025 to October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Premium loin katsudon (300 g)', '¥2,200', 'Katsudon', 'no', 'no', 'Large rice +¥100; October 2026.', 'loin_don'),
      it('', '', 'Spencer roll katsudon (300 g Kyoto Mochi Pork)', '¥3,000', 'Katsudon', 'no', 'no', 'With red miso soup; May 2026.', 'spencer_don'),
      it('', '', 'HITOKAMI tenderloin katsu sandwich set', '¥1,800', 'Sandwiches', 'no', 'no', 'November 2025–January 2026.', 'katsu_sando'),
    ] }, {
    cuisine: '東京の HITOKAMI のヒレカツサンドとのコラボで開き、今は厚切りの豚のカツ丼が中心 (2025〜2026年の口コミ)・HITOKAMI のヒレカツサンドのセット1,800円、濃厚ソースや海苔塩など10種のソース、持ち帰りの4個入り (2025年11〜12月)・ヒレカツ2,300円 (2026年1月)・京都もち豚のスペンサーロール300gのカツ丼3,000円と赤だし、カレー追加200円 (2026年5月)・上ロースのカツ丼300g 2,200円、ご飯大盛り+100円 (2026年10月)',
    neighborhood: '堺町通、三条の南。烏丸御池',
    gf_detail: 'グルテンフリーではない。カツ丼やカツサンドの衣 (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。豚のカツ丼とカツサンド、赤だし (2025〜2026年の口コミ)。',
    notes: '[厚切りカツ丼・堺町三条、2025年から] イノダコーヒ本店の向かいの小さなホテルの1階の店。東京の HITOKAMI のヒレカツサンドで開き、今は京都もち豚の300gの厚切りカツ丼 (2,200〜3,000円) と赤だしが中心。カツサンドは持ち帰りも。評価は分かれる。毎日21時まで。',
  });
}

// ================================================================ 酒処 籠目
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033986/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_sakedokoro_kagome', name: '酒処 籠目 (Sake Dokoro Kagome)', category: 'OMNI',
    lat: 34.999001, lng: 135.762821, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi, mackerel sushi, oden and snacks for sake, chosen to taste with the staff (2025–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, mackerel sushi and oden (2025–26 reviews).',
    hours_raw: 'Mon–Sat 17:30–23:00 (last food order 22:30); closed Sunday and holidays; a 12:00–14:00 lunch was suspended (Tabelog). Reservations advised, especially on nights the owner works alone; bookings for more than two may not be possible (April 2026). Cash only — no cards, e-money or QR (Tabelog). 11 seats: a 7-seat counter and a semi-private table for four (Tabelog). Smoking in a designated area (Tabelog). On Matsubara-dori, 8 min from Gojo or Shijo-Karasuma (Tabelog; April 2026). Opened 10 January 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Matsubara-dori — Shijo / Gojo',
    cuisine: 'Counter izakaya built around sake the owner selects, with dishes across Japanese, Western and Chinese styles (February 2025) · Furuosen sake from Shiga; proper mackerel sushi (February 2025) · snacks to drinks and hearty dishes (March 2025) · blackboard menu (April 2026) · sashimi, snacks and carbs to finish, suggested to your taste (April 2026) · oden and fish (November 2025)',
    website: null, gmaps: gm('酒処 籠目 京都'), menu_url: TB,
    notes: '[Sake izakaya · Matsubara, since 2020] A small, chatty counter izakaya on Matsubara-dori where the owner picks the sake, including Furuosen from Shiga, and the blackboard runs to sashimi, mackerel sushi, oden and Western- and Chinese-leaning snacks, suggested to your taste. Mostly regulars; book ahead, especially for more than two. Cash only; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed), sometimes working alone (April 2026)'], origin: null,
      background: 'Per Tabelog and reviews: a sake-focused counter izakaya opened in January 2020, which calls itself a "talkative izakaya" (February 2025).',
      philosophy: null, specialty: 'Owner-selected sake; mackerel sushi.',
      anecdotes: [
        { text: 'A February 2025 walk-in, whose first choice was full, was drawn into conversation at once — the owner calls it a talkative izakaya.', source: R + 'B503098819/' },
        { text: 'An April 2026 regular advises booking for nights when the owner works alone.', source: R + 'B527715742/' },
        { text: 'A November 2025 first-timer expected an oden shop and found the other dishes just as good.', source: R + 'B531923366/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・日本料理、下京区杉屋町269-3、地下鉄五条駅・四条烏丸から徒歩8分、月〜土17:30〜23:00 (L.O. 料理22:30)、日曜・祝日休み、昼の営業は休止、現金のみ、11席 (カウンター7、テーブル4)、分煙、2020年1月10日オープン。口コミ (2022年7月〜2026年4月、英語): 店主が選ぶ日本酒、滋賀の Furuosen の酒、本格的な鯖寿司、刺身、おでん、和洋中のつまみ、黒板のメニュー、好みに合わせて提案、話好きの居酒屋、店主ひとりの日は予約を。',
      confidence: 'medium', sources: [TB, R + 'B452305558/', R + 'B455166041/', R + 'B456098048/', R + 'B479947434/', R + 'B488597769/', R + 'B501281398/', R + 'B503098819/', R + 'B504087083/', R + 'B504145291/', R + 'B525400918/', R + 'B527715742/', R + 'B531923366/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Some staff speak English (February 2025); say what flavours you like. Cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区杉屋町269-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through April 2026.' },
    pin_source: `Tabelog ${TB} (34.999001, 135.762821); cross-checked: GSI 京都府京都市下京区杉屋町269番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices in the sources; reviewers report ¥4,000–9,999 per person; cash only.', last_checked: TODAY, items: [
      it('', '', 'Mackerel sushi', '', 'Sushi', 'ask', 'no', 'February 2025.', 'sabazushi'),
      it('', '', 'Oden', '', 'Small plates', 'ask', 'no', 'November 2025.', 'oden'),
      it('', '', 'Owner-selected sake', '', 'Sake', 'ask', 'ask', '2025–26 reviews.', 'sake'),
    ] }, {
    cuisine: '店主が選ぶ日本酒が中心のカウンターの居酒屋、和洋中の料理 (2025年2月)・滋賀の Furuosen の酒、本格的な鯖寿司 (2025年2月)・酒のつまみからしっかりした料理まで (2025年3月)・黒板のメニュー (2026年4月)・好みに合わせて提案される刺身、つまみ、締めの炭水化物 (2026年4月)・おでんと魚 (2025年11月)',
    neighborhood: '松原通。四条・五条',
    gf_detail: '要確認。刺身、鯖寿司、おでん、好みに合わせたつまみ (2025〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、鯖寿司、おでん (2025〜2026年の口コミ)。',
    notes: '[日本酒の居酒屋・松原、2020年から] 松原通の、話好きの小さなカウンターの居酒屋。店主が選ぶ日本酒 (滋賀の Furuosen など) と、刺身、鯖寿司、おでん、和洋中のつまみを黒板から好みに合わせて。常連が多い。予約を、特に3名以上は相談を。現金のみ。日曜休み。',
  });
}

save();
