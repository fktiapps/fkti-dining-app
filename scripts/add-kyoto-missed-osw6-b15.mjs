// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 15.
//   + FUL (music lounge and natural-wine bar with food, Kawaramachi Sanjo)
//   + 立礼茶室 然美 Ryurei Chashitsu Sabi (tea-and-sweets pairing course, Gion)
//   + 祇園にしむら Gion Nishimura (kaiseki, south Gion; saba sushi)
//   + Trattoria Annamaria (Emilia-Romagna handmade pasta, Umamachi)
//   - skip 26031082 京都ステーキ 南大門 錦店 (sub-brand of a large parent; see below)
//   - skip 26029894 万治カフェ Manji Cafe (official site says the cafe has closed for now)
//   Same-name counts first (2026-11-05): FUL — one shop (ful-kyoto.com; Metropolis); 然美 — two (Gion and Gosho-minami,
//   rustsabi.com), the other not in data; 祇園にしむら — one (gion-nishimura.com); Trattoria Annamaria — one (Instagram);
//   南大門 — Tabelog lists 錦店 (steak), 四条寺町店, an Uji shop and 大丸京都店 under the Nandaimon name, run by 第一物産.
//   Taken on 2026-11-05: `next core 200` gave FUL 26041630, 南大門 錦店 26031082 (skipped), Manji Cafe 26029894 (skipped),
//   然美 26036806; `next notable 200` gave 祇園にしむら 26001724 and Trattoria Annamaria 26040148.
//   None is in data/kyoto.json: grep by name and address (大黒町67-3/フォーラム西木屋町, 祇園町南側570-120 T.T, 570-160,
//   下馬町491/アースコート清水) found none. 然美 shares 祇園町南側570-120 with kyoto_sottaku_tsukamoto_gion and kyoto_gion_fukushi.
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-15');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26031082', 'sub-brand of a large parent: the Tabelog listing gives daiichibussan.co.jp, whose company 株式会社第一物産 runs amusement halls (OMEGA group), franchise shops (天下一品, はなまるうどん, PANCAKE ROOM) and Korean-food retail as well as the 京都焼肉 南大門 yakiniku shops; Tabelog lists four Nandaimon shops in Kyoto (錦 steak, 四条寺町, Uji, 大丸京都).');
skip('26029894', 'existence unclear: the official site (manjicafe-gion.jp) says the cafe has closed for now ("カフェは一旦閉店し") with events and pop-ups planned; a May 2024 review heard it would close temporarily at the end of May 2024. Tabelog still shows Mon, Sat, Sun 11:00–18:00 and one August 2026 review describes a visit. Revisit once the reopening is confirmed.');

// ================================================================ FUL
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041630/'; const R = TB + 'dtlrvwlst/';
  const MENU = 'https://ful-kyoto.com/assets/pdf/2602_ful_food.pdf';
  const A = day(['17:00', '24:00']); const B = day(['17:00', '03:00']);
  put({
    id: 'kyoto_ful_kawaramachi', name: 'FUL', category: 'OMNI',
    lat: 35.007843, lng: 135.769786, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The official food menu marks allergens, including wheat, dish by dish; most of the food is bread, pasta, batter or spring-roll pastry, and even the rice-flour cake is marked as containing wheat (official menu, February 2026).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'The official menu has grilled eggplant vegan nachos (¥850) and a plant-based mark; seasonal vegetables come with a miso, soy-milk and cashew dip (official menu, February 2026; May 2026). Most other dishes have meat, cheese or egg.',
    hours_raw: 'Tue–Thu and Sun 17:00–24:00 (last orders food 23:00, drinks 23:30); Fri–Sat 17:00–03:00 (last orders food 2:00, drinks 2:30); closed Monday (official site; Tabelog gives 17:00–24:00 for Friday and Saturday too). Happy hour from 17:00 — a glass of champagne with prosciutto for ¥2,000 (February 2026). Reservations accepted; courses for 2–10, phone for 11 or more (Tabelog). No minors (Tabelog). 10% service charge in the dining and lounge areas (Tabelog; official menu). 80 seats in three areas — counter, sofas and lounge — standing for 120; private hire for 50 or more; non-smoking, smoking area outside; wheelchair accessible; English menu and English-speaking staff; cards, IC cards, e-money and QR (Tabelog). On a side street off Kawaramachi south of Sanjo, ground floor; 3 min from Sanjo Stn (Tabelog; September 2026).',
    hours: { 1: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Sanjo — 3 min from Sanjo Stn',
    cuisine: 'Music lounge with natural wine, cocktails and bar food, produced by Tomoyuki Tanaka (Fantastic Plastic Machine) (Metropolis; 2026 reviews) · over 120 natural wines in the cellar, Japanese whisky, mezcal (Tabelog) · shake-bag fries ¥800, tacos de carnitas ¥900 a piece, fried chicken ¥900 a piece, grilled eggplant vegan nachos ¥850, savoury Basque cheesecake ¥1,250, shrimp melt ¥1,100 · seasonal vegetables with miso and cashew sauce ¥1,500, burrata with seasonal fruit ¥2,450, Auvergne prosciutto ¥1,550, lampredotto and shiso crostini ¥1,300, wagyu sukiyaki spring roll ¥1,400 · wagyu and porcini lasagna ¥1,600, wagyu sirloin steak ¥3,800, wagyu Philly cheesesteak ¥2,200, dashimaki brioche sandwich with truffle butter ¥1,200, fresh pici peperoncino ¥1,800 · desserts ¥950–1,300 (official menu, February 2026; prices include tax, plus 10% service) · six-dish courses ¥4,500 and ¥6,500 (Tabelog)',
    website: 'https://ful-kyoto.com/', gmaps: gm('FUL 京都 河原町三条'), menu_url: MENU,
    notes: "[Music bar & natural wine · Kawaramachi Sanjo, a forest under ten speakers] A big, dim lounge just off Kawaramachi, produced by Fantastic Plastic Machine's Tomoyuki Tanaka, with a huge tree at its centre, plants everywhere and ten ceiling speakers. Come for natural wine — more than 120 bottles — or cocktails, plus bar food: the dashimaki brioche sandwich, sukiyaki spring rolls, tacos and shake-bag fries. Courses from ¥4,500; 10% service in the lounge. Some find the music too loud. Adults only; until 3:00 on Friday and Saturday.",
    chef_bio: { chef_name: null, roles: ['Bar and restaurant; kitchen staff unnamed'], origin: null,
      background: 'Per Metropolis and 2026 reviews: the "Sound Forest" concept is by producer Tomoyuki Tanaka, known as Fantastic Plastic Machine, music director for the opening and closing ceremonies of the Tokyo 2020 Olympics and Paralympics (February 2026 review); natural wines chosen by sommelier Kei Tashiro and cocktails by bartender Keita Saito (Metropolis). Opened 12 July 2024 (Tabelog).',
      philosophy: null, specialty: 'Natural wine; dashimaki brioche sandwich.',
      anecdotes: [
        { text: 'A January 2026 diner liked the food and service but found the music "as loud as in a movie theater".', source: R + 'B520759588/' },
        { text: 'A November 2025 diner found it noisy and too brightly lit, and was given a table after booking the counter.', source: R + 'B517678486/' },
        { text: 'A March 2026 diner described ten speakers in the ceiling and a huge old tree in the middle of the room.', source: R + 'B524407115/' },
      ],
      japanese_sources_summary: '公式サイト (ful-kyoto.com): 河原町通三条下ル大黒町67-3 フォーラム西木屋町 1F、火〜木・日 17:00〜24:00 (L.O. フード23:00、ドリンク23:30)、金・土 17:00〜翌3:00 (L.O. フード2:00、ドリンク2:30)、月曜定休、フードメニュー (2026年2月) は品ごとにアレルゲン表示。食べログ: バル・バー、三条駅から徒歩約3分、予約可、未成年不可、ダイニング・ラウンジエリアのみサービス料10%、80席、立食120名、禁煙 (屋外に喫煙所)、車椅子可、カード・電子マネー・QR 可、2024年7月12日オープン、ナチュラルワイン120種以上。口コミ (2024年12月〜2026年10月、英語): Tomoyuki Tanaka のプロデュース、だし巻きサンド、すき焼き春巻き、タコス、ハッピーアワー、音楽が大きいという声。',
      confidence: 'medium', sources: [TB, 'https://ful-kyoto.com/', MENU, 'https://metropolisjapan.com/ful-kyoto-bar/', R + 'B496767486/', R + 'B517678486/', R + 'B520759588/', R + 'B522378312/', R + 'B524407115/', R + 'B527888420/', R + 'B530171224/', R + 'B535930045/', R + 'B536828584/', R + 'B536904716/', R + 'B538014760/'] },
    cultural_comfort: { level: 'none_needed', note: 'English menu and English-speaking staff (Tabelog); book online; adults only.' },
    safety: { ...SAFETY0, positives: [{ text: 'The official food menu lists allergens (such as wheat, egg, dairy, shrimp and walnut) for each dish and marks plant-based dishes.', source: MENU, verified: TODAY }] },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区河原町通三条下ル大黒町67-3 フォーラム西木屋町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.007843, 135.769786); GSI resolves 京都府京都市中京区大黒町67番地 (lot) 478 m west — a different 大黒町 — so the pin stays on the Tabelog point, which fits 河原町通三条下ル and the 3-min walk from Sanjo Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, TB],
    price_note: 'Prices from the official food menu (file dated February 2026), tax included, plus 10% service charge; courses from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Dashimaki brioche sandwich with truffle whipped butter', '¥1,200', 'Main', 'no', 'no', 'Official menu: wheat, dairy, egg.', 'dashimaki_sandwich'),
      it('', '', 'Wagyu sukiyaki spring roll', '¥1,400', 'Appetizer', 'no', 'no', 'Official menu: wheat, egg.', 'sukiyaki_spring_roll'),
      it('', '', 'Grilled eggplant vegan nachos', '¥850', 'Snack', 'ask', 'vegan', 'Official menu.', 'vegan_nachos'),
      it('', '', 'Seasonal vegetables with miso and cashew sauce', '¥1,500', 'Appetizer', 'ask', 'ask', 'Official menu.', 'vegetables_miso_cashew'),
      it('', '', 'Wagyu sirloin steak', '¥3,800', 'Main', 'ask', 'no', 'Official menu.', 'wagyu_sirloin'),
      it('', '', 'Six-dish course (2–10 people)', '¥4,500', 'Course', 'ask', 'no', 'Tabelog.', 'course_6'),
    ] }, {
    cuisine: 'Fantastic Plastic Machine の Tomoyuki Tanaka がプロデュースした、ナチュラルワインとカクテルとバーフードのミュージックラウンジ (Metropolis、2026年の口コミ)・セラーにナチュラルワイン120種以上、ジャパニーズウイスキー、メスカル (食べログ)・Shake-Bag のフライドポテト800円、Tacos de Carnitas 1個900円、フライドチキン1個900円、焼き茄子のヴィーガンナチョス850円、塩味のバスクチーズケーキ1,250円、Shrimp Melt 1,100円・季節の野菜 味噌とカシューナッツのソース1,500円、burrata と季節の果物2,450円、Auvergne の生ハム1,550円、lampredotto と大葉のクロスティーニ1,300円、和牛のすき焼き春巻き1,400円・和牛とポルチーニのラザニア1,600円、和牛サーロインステーキ3,800円、和牛の Philly cheesesteak 2,200円、だし巻きのブリオッシュサンド トリュフバター1,200円、生パスタ pici のペペロンチーノ1,800円・デザート950〜1,300円 (公式メニュー、2026年2月。税込、別途サービス料10%)・6品のコース4,500円と6,500円 (食べログ)',
    neighborhood: '三条の南、河原町の一本裏。三条駅から徒歩3分',
    gf_detail: '要確認。公式のフードメニューは品ごとに小麦などのアレルゲンを表示。料理の多くはパン、パスタ、衣、春巻きの皮で、米粉のケーキにも小麦の表示がある (公式メニュー、2026年2月)。',
    vegan_detail: '公式メニューに焼き茄子のヴィーガンナチョス (850円) とプラントベースの表示がある。季節の野菜には味噌・豆乳・カシューナッツのディップ (公式メニュー 2026年2月、2026年5月)。ほかの多くの料理は肉、チーズ、卵を使う。',
    notes: '[ミュージックバー・ナチュラルワイン・河原町三条、10基のスピーカーの森] 河原町の一本裏の大きく薄暗いラウンジ。Fantastic Plastic Machine の Tomoyuki Tanaka のプロデュースで、中央に大木、あちこちに植物、天井に10基のスピーカー。120種以上のナチュラルワインやカクテルに、だし巻きのブリオッシュサンド、すき焼き春巻き、タコス、Shake-Bag のポテトなどのバーフード。コースは4,500円から、ラウンジはサービス料10%。音楽が大きすぎるという声も。未成年不可、金・土は翌3時まで。',
  });
}

// ================================================================ 立礼茶室 然美
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26036806/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'kyoto_ryurei_chashitsu_sabi', name: '立礼茶室 然美 (Ryurei Chashitsu Sabi)', category: 'OMNI',
    lat: 35.001968, lng: 135.77437, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A fixed course of five sweets with teas; the sweets change monthly and use mochi (gyuhi), miso, herbs and fruit; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as served: the July 2026 sweets included fermented milk and caramel (July 2026). Ask when booking.',
    hours_raw: '12:00–18:00 daily, open year-round, by reservation only (Tabelog); three sittings a day (July 2026). One course: the tea-and-sweets kaiseki, ¥7,700 with tax, with the same price whether the paired drinks are alcoholic or not (July and September 2026). 8 counter seats; private hire; non-smoking; cards only, no e-money or QR (Tabelog). Second floor of a building on the 570 block south of Shijo in Gion, 7 min from Gion-Shijo Stn (Tabelog). A second shop, 然美 御所南, is listed on the official site.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south of Shijo — 7 min from Gion-Shijo Stn',
    cuisine: 'Tea-and-sweets pairing in a standing-style tea room (ryurei), as a monthly course (Tabelog; 2026 reviews) · tea and sweets kaiseki ¥7,700: five sweets with five or six teas, two of them tea cocktails in the alcohol pairing (July and September 2026) · July 2026: passion fruit, coconut and caramel; mango with matcha gin; corn with mitarashi; peach, fermented milk and gyuhi; cold-brewed gyokuro, hojicha with cardamom and timur pepper (July 2026) · February 2026: gyokuro, blended hojicha and matcha with five sweets (February 2026) · pickles to finish, for sale (March and June 2026)',
    website: 'https://rustsabi.com/', gmaps: gm('立礼茶室 然美 祇園'), menu_url: null,
    notes: "[Tea & sweets course · Gion, a monthly pairing at an 8-seat counter] A hushed second-floor counter south of Shijo where each guest gets one course: five seasonal sweets, each paired with a tea brewed in front of you — gyokuro, hojicha with spice, matcha — with tea cocktails if you choose the alcohol pairing, at the same ¥7,700. Expect fruit, herbs and miso in the sweets, and pickles to finish. Book a sitting; one March 2026 guest found the service lacking.",
    chef_bio: { chef_name: null, roles: ['Tea room; staff unnamed'], origin: null,
      background: 'Per the official site: founded by the contemporary artist Taiga Takahashi (1995–2022). Opened 4 December 2021 (Tabelog). The shop text speaks of "rust" — the beauty of change over time and imperfection — and of sukiya-style architecture (Tabelog).',
      philosophy: 'Per Tabelog (the shop’s own text): the beauty of imperfection and imbalance, "the essence hidden deep within gradually seeps out with the passage of time."',
      specialty: 'Tea and sweets kaiseki.',
      anecdotes: [
        { text: 'A March 2026 diner found the course dragging, had a drink taken away unfinished, and saw a fallen sweet taken to the back and fixed by hand; the diner did not plan to return.', source: R + 'B525130903/' },
        { text: 'A September 2026 diner felt the teas and sweets each leave room for the other, more a flow than a series of peaks.', source: R + 'B536900845/' },
        { text: '"The first cup of tea was truly exquisite, with a flavor reminiscent of dashi that I had never encountered before" — April 2026.', source: R + 'B527962899/' },
      ],
      japanese_sources_summary: '公式サイト (rustsabi.com): 立礼茶室「然美」、祇園と御所南、創設者は現代芸術家の髙橋大雅 (1995〜2022)。食べログ: カフェ、東山区祇園町南側570-120 T.T 2F、祇園四条駅から徒歩7分、12:00〜18:00、要予約、年中無休、カウンター8席、貸切可、禁煙、カード可 (電子マネー・QR 不可)、2021年12月4日オープン、店の紹介は Rust (時を経た変化の美) と不完全の美、数寄屋造り。口コミ (2024年10月〜2026年9月、英語): 茶菓懐石7,700円、1日3部制、ノンアルコールとアルコールは同額、甘味5品とお茶、ほうじ茶にカルダモン、抹茶ジン、最後に漬物、接客に不満という声。',
      confidence: 'medium', sources: [TB, 'https://rustsabi.com/gion/', R + 'B494823462/', R + 'B522478230/', R + 'B525130903/', R + 'B525242044/', R + 'B526940458/', R + 'B527152495/', R + 'B527782673/', R + 'B527962899/', R + 'B528403479/', R + 'B530753750/', R + 'B532510588/', R + 'B536900845/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a sitting ahead; one fixed course; choose alcoholic or non-alcoholic pairing; cards only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-120 T.T 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001968, 135.774370); GSI resolves 京都府京都市東山区祇園町南側570番地 (lot, the large 570 block, not 570-120) 184 m away, so the pin stays on the Tabelog point; shares 570-120 with kyoto_sottaku_tsukamoto_gion and kyoto_gion_fukushi; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B532510588/', R + 'B536900845/'],
    price_note: 'Course price from July and September 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Tea and sweets kaiseki (five sweets with teas; alcoholic or non-alcoholic pairing)', '¥7,700', 'Course', 'ask', 'no', 'July and September 2026.', 'chaka_kaiseki'),
    ] }, {
    cuisine: '立礼の茶室で味わう、お茶と甘味の月替わりのペアリングコース (食べログ、2026年の口コミ)・茶菓懐石7,700円: 甘味5品とお茶5〜6種、アルコールのペアリングではうち2杯がお茶のカクテル (2026年7月・9月)・2026年7月: パッションフルーツ・ココナッツ・キャラメル、マンゴーと抹茶ジン、とうもろこしとみたらし、桃・発酵乳・求肥、水出しの玉露、カルダモンと timur pepper のほうじ茶 (2026年7月)・2026年2月: 玉露、ブレンドほうじ茶、抹茶と甘味5品 (2026年2月)・締めの漬物は購入もできる (2026年3月・6月)',
    neighborhood: '四条の南の祇園。祇園四条駅から徒歩7分',
    gf_detail: '要確認。甘味5品とお茶の決まったコースで、甘味は月替わり。求肥、味噌、ハーブ、果物を使う。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'このままではヴィーガン不可。2026年7月の甘味には発酵乳とキャラメルが入る (2026年7月)。予約時に確認を。',
    notes: '[茶菓懐石・祇園、8席のカウンターで月替わりのペアリング] 四条の南、静かな2階のカウンター。コースは一つで、季節の甘味5品に、目の前で淹れるお茶を合わせる。玉露、スパイスのほうじ茶、抹茶。アルコールのペアリングならお茶のカクテルも入り、値段は同じ7,700円。甘味には果物、ハーブ、味噌、締めに漬物。予約制。2026年3月の客は接客に不満を書く。',
  });
}

// ================================================================ 祇園にしむら
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001724/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '20:00']);
  put({
    id: 'kyoto_gion_nishimura', name: '祇園にしむら (Gion Nishimura)', category: 'MOM_AND_POP',
    lat: 35.002728, lng: 135.775877, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A kaiseki of dashi and soy, with saba sushi, tempura and sesame tofu (2024–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-led kaiseki built on dashi (2023–26 reviews).',
    hours_raw: 'Mon–Sat from 17:00, last entry 20:00; closed Sunday (official site; Tabelog). Reservation only; the phone may be hard to reach during service (Tabelog). 17% service charge (Tabelog). 20 seats: a counter (8 per Tabelog; six per a June 2024 review) and tatami private rooms for 2 to 20, some upstairs with a courtyard view; counter non-smoking (Tabelog; 2024–26 reviews). Cards accepted (official site). Down a lane on the 570 block south of Shijo in Gion, 370 m from Gion-Shijo Stn (Tabelog; January 2024).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south of Shijo — 370 m from Gion-Shijo Stn',
    cuisine: 'Gion kaiseki of about 9–10 dishes, known for sesame tofu and saba sushi (2024–26 reviews) · sesame tofu; clear soups of sea bream, suppon or conger eel; sashimi of Akashi sea bream and Nagasaki tuna; saba sushi; hassun with karasumi, monkfish liver and herring; tempura of eggplant, sweet potato and chestnut; Matsuba crab; white-miso ozoni at New Year; sea-bream chazuke with sesame to finish (2023–26 reviews) · courses ¥12,000 (June 2024); bills about ¥20,000–30,000 a head (2025–26 reviews) · saba sushi to take away (official site) · sake',
    website: 'http://www.gion-nishimura.com/', gmaps: gm('祇園にしむら'), menu_url: null,
    notes: "[Kaiseki · Gion, sesame tofu and saba sushi down a lane] A traditional kaiseki house tucked into a Gion back lane, with a counter and tatami rooms, some upstairs over a courtyard. Chef Akihiko Nishimura's nine or ten dishes run from a silky sesame tofu and a clear dashi soup through sashimi and a famous saba sushi to sea-bream chazuke; the saba sushi is also sold to take home. One June 2026 diner found the seasoning on the strong side. Reviewers spent about ¥20,000–30,000 a head; a 17% service charge applies. Mon–Sat evenings, reservation only.",
    chef_bio: { chef_name: 'Akihiko Nishimura', roles: ['Chef (October 2025 review)'], origin: null,
      background: 'Per an October 2025 reviewer: a renowned Kyoto-cuisine restaurant in Gion where chef Akihiko Nishimura cooks a delicate seasonal kaiseki around the counter. A December 2023 diner found the head chef and the hostess warm and cheerful; an April 2025 diner enjoyed the chef’s stories.',
      philosophy: null, specialty: 'Sesame tofu; saba sushi.',
      anecdotes: [
        { text: 'A June 2026 diner liked everything but found the flavours strong — the saba sushi salty, the sesame tofu rich — and was left thirsty.', source: R + 'B530575734/' },
        { text: 'A June 2024 diner, there with a friend from abroad, was put at ease by the friendly chef at the six-seat counter.', source: R + 'B486666403/' },
        { text: 'A January 2024 party was shown to a tatami room with a sunken table, its own restroom and a view of the courtyard.', source: R + 'B478148039/' },
      ],
      japanese_sources_summary: '公式サイト (gion-nishimura.com): 祇園町南側570-160、営業は午後5時から午後8時最終入店、カード可、鯖寿司「八坂の雪」を販売。食べログ: 日本料理、完全予約制、営業中は電話がつながりにくい、月〜土 17:00〜20:00、日曜休み、サービス料17%、20席 (カウンター8席と座敷)、個室2〜20名、カウンターは禁煙。口コミ (2023年6月〜2026年6月、英語): 料理長 Akihiko Nishimura、胡麻豆腐、鯖寿司、鯛茶漬け、すっぽんの椀、八寸、2階の個室と坪庭、12,000円のコース (2024年6月)、味がやや濃いという声 (2026年6月)。',
      confidence: 'medium', sources: [TB, 'http://www.gion-nishimura.com/', R + 'B467395891/', R + 'B476330141/', R + 'B478148039/', R + 'B483092401/', R + 'B486666403/', R + 'B489037648/', R + 'B505440592/', R + 'B518160762/', R + 'B519269152/', R + 'B523658513/', R + 'B525594954/', R + 'B530575734/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (phone may be busy during service); omakase course; cards accepted; 17% service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-160',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB} (35.002728, 135.775877); GSI resolves 京都府京都市東山区祇園町南側570番地 (lot, the large 570 block, not 570-160) 195 m away, so the pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B486666403/'],
    price_note: 'Course price from a June 2024 review; 2025–26 bills of about ¥20,000–30,000 a head; 17% service charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course', '¥12,000', 'Course', 'ask', 'no', 'June 2024.', 'kaiseki_course'),
      it('', '', 'Saba sushi "Yasaka no Yuki" (to take away)', '', 'Takeaway', 'ask', 'no', 'Official site; no price shown.', 'saba_sushi'),
    ] }, {
    cuisine: '胡麻豆腐と鯖寿司で知られる、9〜10品の祇園の懐石 (2024〜2026年の口コミ)・胡麻豆腐、鯛・すっぽん・鱧の椀、Akashi の鯛と Nagasaki のまぐろのお造り、鯖寿司、からすみ・あん肝・にしんの八寸、茄子・さつまいも・栗の天ぷら、松葉蟹、正月の白味噌の雑煮、締めは胡麻の鯛茶漬け (2023〜2026年の口コミ)・コース12,000円 (2024年6月)、1人約20,000〜30,000円 (2025〜2026年の口コミ)・鯖寿司の持ち帰り (公式サイト)・日本酒',
    neighborhood: '四条の南の祇園。祇園四条駅から370m',
    gf_detail: '要確認。出汁と醤油の懐石で、鯖寿司、天ぷら、胡麻豆腐が出る (2024〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。魚が中心で出汁を使う懐石 (2023〜2026年の口コミ)。',
    notes: '[懐石・祇園、路地の奥の胡麻豆腐と鯖寿司] 祇園の路地の奥の懐石の店。カウンターと座敷、2階には坪庭を望む個室。料理長 Akihiko Nishimura の9〜10品は、なめらかな胡麻豆腐、澄んだ出汁の椀、お造り、名物の鯖寿司、締めの鯛茶漬け。鯖寿司は持ち帰りもできる。2026年6月の客は味付けがやや濃いと書く。口コミでは1人20,000〜30,000円ほどで、サービス料17%がかかる。月〜土の夜、完全予約制。',
  });
}

// ================================================================ Trattoria Annamaria
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26040148/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']); const W = day(['12:00', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_trattoria_annamaria', name: 'Trattoria Annamaria', category: 'OMNI',
    lat: 34.992147, lng: 135.776954, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The menu is built on handmade wheat pasta (tagliatelle, bigoli, tortellini) and Modena breads such as tigelle and gnocco fritto; the meat mains and cured meats may be options (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Northern Italian cooking centred on meat, cheese and cream; no seafood is served (Tabelog; 2026 reviews).',
    hours_raw: 'Dinner Tue–Sun 17:00–22:00 (last seating 21:00); lunch Sat, Sun and holidays 12:00–14:30 (last seating 13:00), by reservation made by the day before; closed Monday (open on holidays) and irregularly — check Instagram for closures (Tabelog). Lunch set ¥2,750 or a two-pasta lunch course ¥5,500 (September 2026). Dinner booking advised — full on a holiday evening (September 2026). 14 seats at five tables; no service charge (Tabelog, Japanese text). Non-smoking; cards and IC cards (Tabelog). Up the hill east of Gojo, next to the Shimobamacho post office; 4 min from the Umamachi bus stop, 15 min from Kiyomizu-Gojo Stn (Tabelog; September 2026).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: W, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umamachi, east of Gojo — 4 min from the Umamachi bus stop',
    cuisine: 'Emilia-Romagna and northern Italian trattoria of handmade pasta by a chef who trained at Ristorante Antica Moka (Tabelog, shop text) · no seafood (Tabelog) · tagliatelle, bigoli from an extruder, tortellini in brodo, lasagne, gargati; Bolognese ragù, cream pesto, cacio e pepe, Genovese with cream (2026 reviews) · prosciutto with gnocco fritto, tigelle, homemade prosciutto cotto, Modena pickles, ricotta with jam and balsamic (2026 reviews) · Bolognese-style cotoletta, Piedmont beef tartare, ossobuco, wine-braised beef cheek, grilled beef (Tabelog; 2025–26 reviews) · tiramisu, panna cotta (2026 reviews) · lunch set ¥2,750 (soup, antipasti, a pasta; Bolognese or tagliatelle +¥550 each), lunch course with two pastas ¥5,500 (September 2026) · Peroni ¥990–1,100, limoncello ¥880 (September 2026)',
    website: 'https://instagram.com/trattoria_annamaria', gmaps: gm('Trattoria Annamaria 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Umamachi, Emilia-Romagna pasta up the hill] A 14-seat trattoria up the slope east of Gojo, where a chef trained at Antica Moka in Emilia-Romagna rolls tagliatelle by hand, presses bigoli and floats tortellini in brodo. Lunch on weekends is a bargain — soup, a plate of antipasti with gnocco fritto and prosciutto, and a pasta for ¥2,750 — booked by the day before. Dinners add Modena tigelle, cotoletta and slow-braised meats, and tiramisu. No seafood, no service charge. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): the chef trained at Ristorante Antica Moka, known for handmade pasta, in Emilia-Romagna; a September 2026 reviewer places the training in Modena. Opened 12 October 2023 (Tabelog) in a space that had been a classic French restaurant (October 2026 regular).',
      philosophy: 'Per Tabelog (the shop’s own text): traditional northern Italian dishes as they are actually eaten locally.',
      specialty: 'Handmade pasta.',
      anecdotes: [
        { text: 'A July 2026 diner asked to try more dishes and was given half portions of the prosciutto and gnocco fritto and slightly smaller pastas.', source: R + 'B531831852/' },
        { text: 'A September 2026 diner swapped the bigoli for gargati, a short Veneto pasta, with the cream pesto.', source: R + 'B536064898/' },
        { text: 'A regular since before the opening marked the third anniversary in October 2026, noting the evening second course takes 45 minutes to prepare.', source: R + 'B473401793/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・パスタ、東山区下馬町491 アースコート清水 1F、馬町バス停から徒歩4分、清水五条駅から徒歩15分、火〜金 17:00〜22:00、土日 12:00〜14:30・17:00〜22:00、ランチ最終入店13:00、ディナー最終入店21:00、ランチは前日までの予約制、月曜休み (祝日は営業)・不定休、サービス料なし、14席、禁煙、カード・交通系IC可、2023年10月12日オープン、Antica Moka で修業したシェフのエミリア・ロマーニャの手打ちパスタ、魚介は出さない。口コミ (2025〜2026年10月、英語と日本語): ランチセット2,750円、パスタ2種のランチコース5,500円、tagliatelle、bigoli、tortellini in brodo、tigelle、gnocco fritto、ティラミス、3周年。',
      confidence: 'medium', sources: [TB, R + 'B473401793/', R + 'B530813838/', R + 'B531353896/', R + 'B531831852/', R + 'B534192761/', R + 'B535104817/', R + 'B535180999/', R + 'B536064898/', R + 'B536304939/', R + 'B536574209/', R + 'B536823997/', R + 'B538506728/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by phone (lunch by the day before); staff explain the pasta shapes; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下馬町491 アースコート清水 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.992147, 135.776954); cross-checked: GSI 京都府京都市東山区下馬町491番地 (lot) 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535180999/', R + 'B536304939/', R + 'B535104817/'],
    price_note: 'Prices from September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: soup, antipasti, one handmade pasta', '¥2,750', 'Lunch', 'no', 'no', 'September 2026.', 'lunch_set'),
      it('', '', 'Ragù Bolognese (lunch supplement)', '+¥550', 'Lunch', 'no', 'no', 'September 2026.', 'bolognese_supplement'),
      it('', '', 'Lunch course with two pastas', '¥5,500', 'Lunch', 'no', 'no', 'September 2026.', 'lunch_course'),
      it('', '', 'Limoncello', '¥880', 'Drinks', '', '', 'September 2026.', 'limoncello'),
    ] }, {
    cuisine: 'Antica Moka で修業したシェフの、エミリア・ロマーニャと北イタリアの手打ちパスタのトラットリア (食べログの店の紹介)・魚介は出さない (食べログ)・tagliatelle、押し出しの bigoli、tortellini in brodo、ラザニア、gargati。ボロネーゼ、クリーム入りのペスト、cacio e pepe、クリームのジェノベーゼ (2026年の口コミ)・生ハムと gnocco fritto、tigelle、自家製の prosciutto cotto、Modena のピクルス、リコッタとジャムとバルサミコ (2026年の口コミ)・ボローニャ風のカツレツ、Piedmont の牛肉のタルタル、ossobuco、牛ほほ肉の赤ワイン煮、牛肉のグリル (食べログ、2025〜2026年の口コミ)・ティラミス、パンナコッタ (2026年の口コミ)・ランチセット2,750円 (スープ、前菜、パスタ1品。ボロネーゼ、tagliatelle はそれぞれ+550円)、パスタ2種のランチコース5,500円 (2026年9月)・ペローニ990〜1,100円、リモンチェッロ880円 (2026年9月)',
    neighborhood: '五条の東、馬町。馬町バス停から徒歩4分',
    gf_detail: '要確認。手打ちの小麦のパスタ (tagliatelle、bigoli、tortellini) と tigelle や gnocco fritto などのパンが中心。肉料理や生ハムなら可能性がある (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。肉、チーズ、クリームが中心の北イタリア料理。魚介は出さない (食べログ、2026年の口コミ)。',
    notes: '[イタリアン・馬町、坂の上のエミリア・ロマーニャのパスタ] 五条の東の坂を上がった14席のトラットリア。エミリア・ロマーニャの Antica Moka で修業したシェフが、tagliatelle を手で延ばし、bigoli を押し出し、tortellini をブロードに浮かべる。週末のランチはスープ、gnocco fritto と生ハムの前菜、パスタで2,750円と割安で、前日までに予約。夜は Modena の tigelle、カツレツ、煮込みの肉、ティラミスも。魚介なし、サービス料なし。月曜休み。',
  });
}

save();
