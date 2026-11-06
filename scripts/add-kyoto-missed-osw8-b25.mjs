// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 25.
//   + スペインバル sidra (Spanish bar on Kawabata by Sanjo, open from noon; core list)
//   + 辨慶 東山店 Benkei Higashiyama (late-night Kyoto udon and oden by Gojo Ohashi since 1975; core list)
//   + パパジョンズ 今出川本店 Papa Jon's (cheesecake café by Doshisha University; notable list)
//   + 京料理 かじ Kyoryori Kaji (Kyoto kaiseki on Marutamachi, chef Kenji Kaji; notable list)
//   Picked 2026-11-05 after batch 24. `queue.mjs kyoto-missed next core 200`: スペインバル sidra 26019541, 辨慶 東山店
//   26000803. `next notable 200`: パパジョンズ 今出川本店 26001523, 京料理 かじ 26001007. Same-name check first, same
//   brand or operator only: 辨慶 has its main shop in Nishikyogoku (October 2026 review) — 2 shops, none in data; パパジョンズ
//   has a 六角店 26019796 in our crawls — 2 shops, none in data; no other sidra or 京料理 かじ business (むろまち 加地,
//   kyoto_muromachi_kaji, is an unrelated shop). None of the four is in data/kyoto.json: grep by name and address (孫橋町31,
//   東橋詰町30, 相国寺門前町642, 丸太町通小川東入) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-25');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ スペインバル sidra
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26019541/'; const R = TB + 'dtlrvwlst/';
  const TU = day(['15:00', '23:00']); const H = day(['12:00', '23:00']);
  put({
    id: 'kyoto_spain_bar_sidra', name: 'スペインバル sidra (Spanish Bar sidra)', category: 'OMNI',
    lat: 35.010748, lng: 135.772595, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tapas, terrines, ajillo, paella, fish and chips and a rice-flour Basque cheesecake; no gluten information beyond the cheesecake\'s rice flour (Tabelog; 2022–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetable-garden salad, olives and sweet peppers appear, but most tapas are meat, fish, liver and cheese; no vegan information (2022–2026 reviews).',
    hours_raw: 'Tuesday 15:00–23:00; Wednesday to Sunday and holidays 12:00–23:00 (food last order 22:00, drinks 22:30); closed Monday (Tabelog). Reservations accepted; lunch course from one person ¥3,800 (Tabelog). No service charge (Tabelog original なし). Orders by smartphone — a weak signal can make ordering hard (August 2026). 8 counter seats on the ground floor and 25 at tables in the basement, with sofas and a projector; private hire up to 50; non-smoking, ashtrays outside (Tabelog; April 2026). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). On Kawabata-dori by the Kamo river, south of Oike; 3–4 min walk from Sanjo Stn (Keihan) (Tabelog; June 2026).',
    hours: { 1: TU, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawabata-dori south of Oike, by the Kamo — 3 min walk from Sanjo Stn',
    cuisine: 'Spanish bar of tapas and Spanish wine, sherry and cider, open from midday (Tabelog; 2026 reviews) · escudella-style vegetable terrine and terrine platters, tapas, beef steak, ajillo (Tabelog) · lunch course ¥3,800: three appetisers, vegetable garden, a main, rice-flour Basque cheesecake (Tabelog); lunch sets with salad, rice and miso soup, e.g. spiced grilled lamb ¥1,600, beef bowl (April–June 2026); a ¥2,800 dinner course (February 2026) · e.g. chicken-liver confit, mushroom and chicken terrine (March 2026); paella (July 2026); fish and chips, pâté, potato salad, olives, sweet peppers (October 2026); sheep\'s-milk cheese; a coin-operated self-pour wine bar (August 2026) · about ¥2,000–8,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('スペインバル sidra 川端御池'), menu_url: null,
    notes: '[Spanish bar · Kawabata by the Kamo, open from noon] A Spanish bar on Kawabata-dori by the Kamo, with a counter upstairs and a big basement of sofas, serving terrines, tapas, ajillo, paella and steak with sherry, cider and Spanish wine — plus a coin-operated self-pour wine machine. Lunch sets around ¥1,600, a ¥3,800 lunch course with rice-flour Basque cheesecake, open straight through to 11 pm. Some find dishes salty and prices a bit high. Orders by smartphone. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a Spanish bar for afternoon drinking with colourful dishes, Spanish wines, a ground-floor counter and a basement for dates and groups. Reviewers in 2022–2026 describe accommodating staff, a wide sherry list, and smartphone ordering.',
      philosophy: null, specialty: 'Terrines; rice-flour Basque cheesecake; sherry.',
      anecdotes: [
        { text: 'A July 2026 conference-goer, caught in pouring rain before the last Shinkansen, was grateful to find it open at 4 pm and settled in with cider, cava and paella.', source: R + 'B529408018/' },
        { text: '"Be aware that if your smartphone signal is weak, you might have trouble placing orders." — August 2026.', source: R + 'B534079545/' },
        { text: '"The lamb was cut into bite-sized pieces, and while some were delicious, others were overly salty and tough due to the fat." — February 2026.', source: R + 'B522523392/' },
      ],
      japanese_sources_summary: '食べログ: バル・スペイン料理・ビストロ、左京区川端御池下る孫橋町31-4 ペンタグラム川端御池1F/B1F、京阪三条駅から徒歩3〜4分、火 15:00〜23:00、水〜日・祝 12:00〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、月曜休み、予約可、サービス料なし、1階カウンター8席・地下テーブル25席、貸切50名まで、禁煙 (店先に灰皿)、カード・電子マネー・QR 可、昼飲みのスペインバル、野菜のテリーヌ、タパス、牛ステーキ、アヒージョ、スペインワイン、ランチコース3,800円 (前菜3種、ベジタブルガーデン、メイン、米粉のバスクチーズケーキ)。口コミ (2022年12月〜2026年10月、英語): 鴨川沿いの川端通、ランチはサラダ・ご飯・味噌汁付き、スパイスラムのグリル1,600円、牛丼、2,800円のコース、鶏レバーのコンフィ、パエリア、フィッシュアンドチップス、パテ、羊のチーズ、コインで注ぐワイン、シェリー、シードル、スマホ注文 (電波が弱いと注文しにくい)、塩気が強い・値段がやや高いとの声も。',
      confidence: 'medium', sources: [TB, R + 'B203147759/', R + 'B458683685/', R + 'B481199771/', R + 'B522523392/', R + 'B523880019/', R + 'B526060334/', R + 'B529408018/', R + 'B534079545/', R + 'B537129581/', R + 'B537139810/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smartphone ordering (needs signal); no service charge; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区川端御池下る孫橋町31-4 ペンタグラム川端御池 1F/B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010748, 135.772595); cross-checked: GSI 京都府京都市左京区孫橋町31番地 (lot) 35 m; nearest Kyoto record 111 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B526060334/'],
    price_note: 'Course price from Tabelog; lunch prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (3 appetisers, vegetable garden, main, rice-flour Basque cheesecake)', '¥3,800', 'Lunch', 'ask', 'no', 'Tabelog; from one person.', 'lunch_course'),
      it('', '', 'Spiced grilled lamb lunch set', '¥1,600', 'Lunch', 'ask', 'no', 'April 2026.', 'lamb_lunch'),
      it('', '', 'Rice-flour Basque cheesecake', '', 'Dessert', 'ask', 'no', 'Tabelog.', 'basque_cheesecake'),
      it('', '', 'Paella', '', 'Rice', 'ask', 'no', '', 'paella'),
    ] }, {
    cuisine: 'タパスとスペインワイン、シェリー、シードルのスペインバル、昼から営業 (食べログ、2026年の口コミ)・野菜のテリーヌ (Escudella) やテリーヌの盛り合わせ、タパス、牛ステーキ、アヒージョ (食べログ)・ランチコース3,800円: 前菜3種、ベジタブルガーデン、メイン、米粉のバスクチーズケーキ (食べログ)、サラダ・ご飯・味噌汁付きのランチ (例: スパイスラムのグリル1,600円、牛丼) (2026年4月〜6月)、2,800円の夜のコース (2026年2月)・例: 鶏レバーのコンフィ、きのこと鶏のテリーヌ (2026年3月)、パエリア (2026年7月)、フィッシュアンドチップス、パテ、ポテトサラダ、オリーブ、スイートペッパー (2026年10月)、羊乳のチーズ、コインで注ぐワインのサーバー (2026年8月)・2,000〜8,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '御池の南、鴨川沿いの川端通。三条駅から徒歩3分',
    gf_detail: '要確認。タパス、テリーヌ、アヒージョ、パエリア、フィッシュアンドチップス、米粉のバスクチーズケーキ。チーズケーキの米粉以外にグルテンの情報はない (食べログ、2022〜2026年の口コミ)。',
    vegan_detail: '要確認。ベジタブルガーデン、オリーブ、スイートペッパーはあるが、タパスの多くは肉、魚、レバー、チーズ。ヴィーガンの情報はない (2022〜2026年の口コミ)。',
    notes: '[スペインバル・鴨川沿いの川端通、昼から] 鴨川沿いの川端通のスペインバル。1階はカウンター、地下はソファの広い空間で、テリーヌ、タパス、アヒージョ、パエリア、ステーキをシェリー、シードル、スペインワインと。コインで注ぐセルフのワインサーバーも。ランチは1,600円ほどから、米粉のバスクチーズケーキ付きの3,800円のコースも。夜11時まで通しで営業。塩気が強い、値段がやや高いという声も。注文はスマホで。月曜休み。',
  });
}

// ================================================================ 辨慶 東山店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000803/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '23:00']);
  put({
    id: 'kyoto_benkei_higashiyama', name: '辨慶 東山店 (Benkei Higashiyama)', category: 'OMNI',
    lat: 34.995633, lng: 135.770088, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon in soy-based dashi, tempura, curry udon and kinpira (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: udon and oden in dashi, with meat, chicken and tempura toppings (2026 reviews).',
    hours_raw: 'Monday to Saturday 11:30–23:00; closed Sunday; hours may change (Tabelog). No reservations (Tabelog). Busy late at night with locals and visitors from abroad (2026 reviews). No cards or QR; e-money accepted (Tabelog). 18 seats: a 10-seat counter and two raised tables for four; smoking allowed (Tabelog). Spend ¥1,000 for a ¥100 coin-parking ticket (Tabelog). Just east of the Gojo Ohashi bridge; 4 min walk from Kiyomizu-Gojo Stn (Keihan) (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gojo Ohashi east end — 4 min walk from Kiyomizu-Gojo Stn',
    cuisine: 'Local udon and oden shop, founded in 1975 as a food stall where drinkers from Gion finished the night, at this site since 1994, named after the warrior-monk Benkei of Gojo bridge legend (October 2026 review) · Benkei udon ¥1,200 with spicy burdock kinpira on the side (June, October 2026) · curry udon, meat curry udon, beef curry udon; sweet kitsune udon; tempura udon; chicken soba; kayaku udon ¥780 (2026 reviews) · sets with white rice, kayaku rice or inari; onigiri (2026 reviews) · Kyoto-style oden, e.g. daikon and egg ¥180 each; large bottled beer ¥650 (October 2026) · about ¥800–2,000 (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('辨慶 東山店 五条'), menu_url: null,
    notes: '[Udon · Gojo Ohashi, late-night bowls since 1975] An old-fashioned counter udon shop at the east end of Gojo bridge, open until 11 pm, where Kyoto has finished its drinking nights since the 1970s: the house Benkei udon (¥1,200) comes with fiercely spicy burdock kinpira on the side, plus a good curry udon, sweet kitsune and Kyoto-style oden for ¥180 a piece. Locals and many visitors from abroad fill it late. Smoking allowed. No cards. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null,
      background: 'An October 2026 reviewer: founded in 1975 as a food stall where people ended a night of drinking in Gion, moved to this site in 1994, named after Musashibō Benkei of the Gojo bridge legend, with two shops — this Higashiyama branch and the main shop in Nishikyogoku. A September 2026 reviewer praised the efficient owner.',
      philosophy: null, specialty: 'Benkei udon with spicy kinpira; curry udon.',
      anecdotes: [
        { text: '"Loved by Kyoto locals for over 50 years!" — an October 2026 visitor who had the namesake Benkei udon with oden on a business-trip night.', source: R + 'B537420217/' },
        { text: '"It\'s spicy—really spicy! But apparently, it becomes addictive!" — June 2026, on the burdock kinpira.', source: R + 'B536070321/' },
        { text: 'An August 2026 local, in at 10:30 pm after an Obon drinking party, found about ten foreign tourists inside and felt a little out of place.', source: R + 'B532979712/' },
        { text: '"The owner is wonderful and works efficiently, a great place!" — September 2026.', source: R + 'B534791536/' },
      ],
      japanese_sources_summary: '食べログ: うどん・おでん、東山区五条大橋東入ル東橋詰町30-3、京阪清水五条駅から徒歩4分、月〜土 11:30〜23:00、日曜休み、予約不可、カード・QR 不可、電子マネー可、18席 (カウンター10、小上がり4名×2卓)、喫煙可、1,000円以上でコインパーキング100円分の券。口コミ (2026年3月〜10月、英語): 1975年に祇園で飲んだあとの締めの屋台として創業、1994年に今の場所へ、名は五条大橋の Musashibō Benkei にちなむ、店は東山店と Nishikyogoku の本店の2軒、辨慶うどん1,200円と辛いきんぴら、カレーうどん、甘いきつね、天ぷらうどん、鶏そば、かやくうどん780円、白ご飯・かやくご飯・いなり、おにぎり、京風のおでん (大根・卵各180円)、大瓶ビール650円、夜遅くまで地元の客と海外の客、店主がてきぱき。',
      confidence: 'medium', sources: [TB, R + 'B504393144/', R + 'B525622000/', R + 'B530485698/', R + 'B530882324/', R + 'B532979712/', R + 'B533124642/', R + 'B534791536/', R + 'B536070321/', R + 'B537420217/', R + 'B537540543/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter udon shop; smoking allowed; no cards (e-money OK); open late.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区五条大橋東入ル東橋詰町30-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.995633, 135.770088); cross-checked: GSI 京都府京都市東山区東橋詰町30番地 (lot) 21 m; kyoto_sushi_kappou_miyuki is 71 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537420217/', R + 'B534791536/'],
    price_note: 'No menu read; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('辨慶うどん', 'Benkei udon', 'Benkei udon (house special, with spicy kinpira)', '¥1,200', 'Udon', 'no', 'no', 'October 2026.', 'benkei_udon'),
      it('', '', 'Kayaku udon', '¥780', 'Udon', 'no', 'no', 'September 2026, tax included.', 'kayaku_udon'),
      it('', '', 'Curry udon', '', 'Udon', 'no', 'no', '', 'curry_udon'),
      it('', '', 'Oden (daikon, egg)', '¥180', 'Oden', 'ask', 'no', 'Each, October 2026.', 'oden'),
    ] }, {
    cuisine: '地元のうどんとおでんの店。1975年に祇園で飲んだあとの締めの屋台として創業、1994年からこの場所、名は五条大橋の伝説の Benkei にちなむ (2026年10月の口コミ)・辨慶うどん1,200円、辛いごぼうのきんぴらが別皿で (2026年6月、10月)・カレーうどん、肉カレーうどん、牛カレーうどん、甘いきつねうどん、天ぷらうどん、鶏そば、かやくうどん780円 (2026年の口コミ)・白ご飯、かやくご飯、いなりのセット、おにぎり (2026年の口コミ)・京風のおでん (大根・卵各180円)、大瓶ビール650円 (2026年10月)・800〜2,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '五条大橋の東詰。清水五条駅から徒歩4分',
    gf_detail: 'グルテンフリーではない。醤油系のだしの小麦のうどん、天ぷら、カレーうどん、きんぴら (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのうどんとおでん、肉、鶏、天ぷらがのる (2026年の口コミ)。',
    notes: '[うどん・五条大橋、1975年からの夜のうどん] 五条大橋の東詰の昔ながらのカウンターのうどん屋。夜11時まで開き、1970年代から京都の飲んだあとの締めの店: 名物の辨慶うどん (1,200円) には激辛のごぼうのきんぴらが別皿で付き、カレーうどん、甘いきつね、1個180円の京風おでんも。夜遅くは地元の客と海外の客でいっぱい。喫煙可。カード不可。日曜休み。',
  });
}

// ================================================================ パパジョンズ 今出川本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001523/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.papajons.co.jp';
  const H = day(['10:00', '19:00']);
  put({
    id: 'kyoto_papa_jons_imadegawa', name: 'パパジョンズ 今出川本店 (Papa Jon\'s Imadegawa)', category: 'OMNI',
    lat: 35.032014, lng: 135.759674, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: cheesecakes on crumb bases, quiche, pies, scones, pizza and lunch plates (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a cheesecake café — cheesecakes, quiche, pizza and dairy-rich lunch dishes (2026 reviews).',
    hours_raw: '10:00–19:00 (food last order 18:00); closed Tuesday per the Tabelog remarks (Tabelog). Reservations accepted (Tabelog). 20 seats incl. a round table for six and sofas; designated smoking area (Tabelog; September 2026). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). Takeaway cakes; children welcome, kids-friendly (Tabelog). Ground floor of コーポマルス, by Doshisha University and the east gate of Shokoku-ji; 3 min walk from Imadegawa Stn (Tabelog; September 2026).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Imadegawa by Doshisha University — 3 min walk from Imadegawa Stn',
    cuisine: 'Long-standing American-style café known for cheesecake, with a 六角 branch (2026 reviews) · New York cheesecake, the favourite; pistachio, honey-lemon and seasonal cheesecakes; a summer cheesecake kakigori; pumpkin pie ¥730 (2026 reviews) · lunch: quiche plate with salad and soup, pizza, curry, scones (July–October 2026) · coffee and tea · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('パパジョンズ 今出川本店'), menu_url: null,
    notes: '[Cheesecake café · Imadegawa by Doshisha, a campus classic] A long-running American-style café beside Doshisha University and Shokoku-ji, famous for its New York cheesecake — plus pistachio and honey-lemon versions, pies and a summer cheesecake kakigori — with quiche, pizza and curry at lunch. Cosy and a little cramped; students at term time, locals and takeaway queues otherwise. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null,
      background: 'Reviewers in 2026 describe a long-established café next to Doshisha University, famous for cheesecake, with polite, friendly staff and steady takeaway trade; our crawls hold a second shop, パパジョンズ 六角店.',
      philosophy: null, specialty: 'New York cheesecake.',
      anecdotes: [
        { text: '"This place has been next to the university for a long time, so if you come at the wrong time, you\'ll find a lot of students." — July 2026, noting prices creeping up.', source: R + 'B532643456/' },
        { text: 'A July 2026 regular, usually loyal to the cheesecakes, tried the summer-only cheesecake kakigori with a yogurt-like sauce.', source: R + 'B536994985/' },
        { text: '"It had a moist texture and was made with sour cream, giving it a mild and not overly rich taste." — October 2026.', source: R + 'B538189678/' },
      ],
      japanese_sources_summary: '食べログ: ケーキ・カフェ・ピザ、上京区烏丸上立売東入ル相国寺門前町642-4 コーポマルス1F、今出川駅から徒歩3分、10:00〜19:00 (料理L.O.18:00)、火曜休み (備考)、予約可、20席、分煙、カード・電子マネー・QR 可、テイクアウト、子ども可。口コミ (2026年6月〜10月、英語): Doshisha University の隣、Shokoku-ji の東門の前、昔からのアメリカンカフェ、ニューヨークチーズケーキが一番人気、ピスタチオ、ハニーレモン、季節のチーズケーキ、チーズケーキのかき氷、パンプキンパイ730円、キッシュのプレート (サラダ・スープ付き)、ピザ、カレー、スコーン、学生が多い時間も、値段が少しずつ上がった。',
      confidence: 'medium', sources: [TB, R + 'B463994071/', R + 'B531198568/', R + 'B531603062/', R + 'B532643456/', R + 'B533805977/', R + 'B535013676/', R + 'B536706670/', R + 'B536825271/', R + 'B536994985/', R + 'B538189678/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order cakes to eat in or take away; cards, e-money and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区烏丸上立売東入ル相国寺門前町642-4 コーポマルス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.032014, 135.759674); cross-checked: GSI 京都府京都市上京区相国寺門前町642番地 (lot) 44 m; nearest Kyoto record 188 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536825271/', R + 'B538189678/'],
    price_note: 'No menu read; one price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'New York cheesecake', '', 'Cakes', 'no', 'no', 'The favourite.', 'ny_cheesecake'),
      it('', '', 'Pumpkin pie', '¥730', 'Cakes', 'no', 'no', 'October 2026.', 'pumpkin_pie'),
      it('', '', 'Quiche plate with salad and soup', '', 'Lunch', 'no', 'no', 'October 2026.', 'quiche_plate'),
    ] }, {
    cuisine: 'チーズケーキで知られる昔からのアメリカンスタイルのカフェ、六角店もある (2026年の口コミ)・一番人気のニューヨークチーズケーキ、ピスタチオ、ハニーレモン、季節のチーズケーキ、夏のチーズケーキのかき氷、パンプキンパイ730円 (2026年の口コミ)・ランチ: サラダとスープ付きのキッシュのプレート、ピザ、カレー、スコーン (2026年7月〜10月)・コーヒーと紅茶・1,000〜2,000円ほど (食べログ)',
    neighborhood: 'Doshisha University の隣、今出川。今出川駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。土台のあるチーズケーキ、キッシュ、パイ、スコーン、ピザ、ランチのプレート (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。チーズケーキ、キッシュ、ピザ、乳製品の多いランチのチーズケーキのカフェ (2026年の口コミ)。',
    notes: '[チーズケーキのカフェ・Doshisha の隣、今出川の定番] Doshisha University と Shokoku-ji の隣、昔からのアメリカンスタイルのカフェ。ニューヨークチーズケーキで有名で、ピスタチオやハニーレモン、パイ、夏のチーズケーキのかき氷も。昼はキッシュ、ピザ、カレー。居心地はよいがやや狭め。学期中は学生、ほかは地元の客と持ち帰りの客。火曜休み。',
  });
}

// ================================================================ 京料理 かじ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001007/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:30', '22:30']);
  put({
    id: 'kyoto_kyoryori_kaji', name: '京料理 かじ (Kyoryori Kaji)', category: 'MOM_AND_POP',
    lat: 35.017273, lng: 135.754526, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto kaiseki courses with dashi, soy-based sauces and hamo dishes; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal kaiseki of hamo, sea bream, tuna and sea urchin, on dashi (2026 reviews).',
    hours_raw: 'Monday, Tuesday and Thursday to Sunday 12:00–15:00 (last entry 13:30) and 17:30–22:30 (last entry 20:30); closed Wednesday (Tabelog). Reservations accepted; guests coming from overseas are asked to book (online or by phone) after arriving in Japan; seating type cannot always be chosen (Tabelog). A private-room charge of 15% for two guests and 10% for three or more (Tabelog original 個室料＜2名様15%＞、＜3名様以上10％＞頂戴いたします). Courses: lunch from ¥5,000; dinner of 10 dishes from ¥6,000, monthly course ¥8,000 (July–September 2026). A kaiseki for children (August 2026). 60 seats: a 10-seat counter, tables and private rooms (up to 25) facing a courtyard; non-smoking; free Wi-Fi (Tabelog). Cards incl. UnionPay; QR incl. Alipay and WeChat Pay (Tabelog). On Marutamachi-dori east of Ogawa, near the Imperial Palace; 5 min walk from Marutamachi Stn exit 4 (Tabelog). Opened July 2001 (July 2026 review).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marutamachi east of Ogawa, near the Imperial Palace — 5 min walk from Marutamachi Stn',
    cuisine: 'Kyoto kaiseki of seasonal courses, on the site of Fujiwara no Yorimichi\'s former Koyo-in, for over 20 years (Tabelog) · lunch-only course ¥5,000 — umeshu aperitif, hamo and shinjo soup, sea bream, tuna and hamo sashimi (July 2026) · evening course of 10 dishes from ¥6,000; "Yuki" and "Roku" courses; monthly course ¥8,000 (July–September 2026) · hamo in many forms in summer, hamo shabu-shabu; suppon hot pot at year\'s end (2026 reviews) · mugwort ice cream and sorbets (August–September 2026) · a wide list of rare sake (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('京料理 かじ 丸太町'), menu_url: null,
    notes: '[Kaiseki · Marutamachi by the Imperial Palace, Kyoto cuisine at fair prices] A Kyoto-cuisine house on Marutamachi-dori since 2001, where chef Kenji Kaji — trained at an old Kyoto ryotei and head chef for 15 years at a Takagamine ryotei — serves seasonal courses from ¥5,000 at lunch and ¥6,000–8,000 at dinner, rich in hamo in summer, with rare sake. Counter or courtyard private rooms (10–15% room charge). The chef even waves children goodbye. Guests from overseas are asked to book after arriving in Japan. Closed Wednesday.',
    chef_bio: { chef_name: 'Kenji Kaji', roles: ['Owner-chef', 'Staff'], origin: null,
      background: 'Per Tabelog: chef Kenji Kaji trained at a long-established Kyoto ryotei and was head chef for 15 years at a ryotei in Takagamine; the restaurant stands on the site of the Koyo-in, the residence of Fujiwara no Yorimichi, founder of Byodo-in, and has served Kyoto cuisine for over 20 years; Tabelog presents the cooking as by craftsmen selected as "Modern Master Craftsmen". A July 2026 reviewer gives the opening as July 2001 and mentions an OAD 2026 listing.',
      philosophy: 'Sharing the beauty of Japanese cuisine through seasonal courses (Tabelog).', specialty: 'Seasonal Kyoto kaiseki; hamo.',
      anecdotes: [
        { text: 'An August 2026 family found the master chef especially kind to the children — serving the children a kaiseki too and coming outside to wave goodbye.', source: R + 'B535637471/' },
        { text: 'An August 2026 diner on the Roku course found the online menu\'s appetiser missing and a slightly off sea urchin, but called it great value overall.', source: R + 'B533433283/' },
        { text: 'A July 2026 diner noted the evening course of 10 dishes starts at ¥6,000, tax included.', source: R + 'B531218586/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、中京区丸太町通小川東入ル南側、丸太町駅4番出口から徒歩5分、月・火・木〜日 12:00〜15:00 (入店13:30まで)・17:30〜22:30 (入店20:30まで)、水曜休み、予約可、海外からの方は来日後に (オンラインか電話で) 予約を、席の種類は希望に添えないことも、個室料 2名15%・3名以上10%、60席 (カウンター10、テーブル、個室は最大25名)、禁煙、Wi-Fi、カード (銀聯も)・QR (Alipay、WeChat Pay も) 可、Byodo-in を建てた Fujiwara no Yorimichi の邸宅 Koyo-in の跡地で20年以上京料理、京都の老舗料亭で修業し Takagamine の料亭で15年料理長を務めた料理人 Kenji Kaji、"Modern Master Craftsmen" に選ばれた職人の京料理、珍しい日本酒。口コミ (2026年6月〜10月、英語): 2001年7月開店、OAD 2026、昼のコース5,000円 (梅酒、鱧のしんじょうのお椀、鯛・まぐろ・鱧のお造り)、夜は10品6,000円から、月替わり8,000円、鱧しゃぶ、年末のすっぽん鍋、よもぎのアイス、子どもの懐石も、料理人が外まで見送り。',
      confidence: 'medium', sources: [TB, R + 'B525501804/', R + 'B530897691/', R + 'B531218586/', R + 'B531825730/', R + 'B531862892/', R + 'B533433283/', R + 'B535637471/', R + 'B536034843/', R + 'B536076459/', R + 'B538196251/'] },
    cultural_comfort: { level: 'relay', note: 'The shop asks guests coming from overseas to book (online or by phone) only after arriving in Japan; private rooms carry a 10–15% charge; cards and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区丸太町通小川東入ル南側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017273, 135.754526); the address has no town or lot (丸太町通小川東入ル南側) and GSI matches only the ward, so loc_precise false; kyoto_kuriya is 118 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531825730/', R + 'B531218586/', R + 'B536034843/'],
    price_note: 'Course prices from July–September 2026 reviews; 10–15% private-room charge.', last_checked: TODAY, items: [
      it('', '', 'Lunch-only course', '¥5,000', 'Lunch', 'ask', 'no', 'July 2026.', 'lunch_5000'),
      it('', '', 'Evening course of 10 dishes', '¥6,000', 'Dinner', 'ask', 'no', 'From ¥6,000, July 2026.', 'dinner_6000'),
      it('', '', 'Monthly course', '¥8,000', 'Dinner', 'ask', 'no', 'September 2026.', 'monthly_8000'),
    ] }, {
    cuisine: '季節のコースの京料理。Byodo-in を建てた Fujiwara no Yorimichi の邸宅 Koyo-in の跡地で20年以上 (食べログ)・昼限定コース5,000円: 梅酒の食前酒、鱧としんじょうのお椀、鯛・まぐろ・鱧のお造り (2026年7月)・夜は10品6,000円からのコース、「雪」「六」のコース、月替わりのコース8,000円 (2026年7月〜9月)・夏はいろいろな鱧、鱧しゃぶ、年末はすっぽん鍋 (2026年の口コミ)・よもぎのアイスやシャーベット (2026年8月〜9月)・珍しい日本酒が豊富 (食べログ、2026年の口コミ)',
    neighborhood: '小川の東の丸太町通、御所の近く。丸太町駅から徒歩5分',
    gf_detail: '要確認。だし、醤油系のたれ、鱧の料理のある京料理のコース。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鱧、鯛、まぐろ、うにの、だしを使う季節の会席 (2026年の口コミ)。',
    notes: '[京料理・御所近くの丸太町通、手頃な京料理] 2001年から丸太町通にある京料理の店。京都の老舗料亭で修業し、Takagamine の料亭で15年料理長を務めた Kenji Kaji が、昼は5,000円から、夜は6,000〜8,000円の季節のコースを、夏は鱧たっぷりで、珍しい日本酒とともに出す。カウンターか中庭に面した個室 (個室料10〜15%)。子ども連れを外まで見送ってくれることも。海外からの客には来日後の予約を求めている。水曜休み。',
  });
}

save();
