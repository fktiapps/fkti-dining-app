// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 10.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, lane ids in order):
//   - 肉屋甲 Nikuya Kinoe (26032599) skipped: 甲/KINOE has seven same-name yakiniku shops (see skip)
//   + OICHO おいちょ (charcoal shichirin chicken grill on Teramachi south of Takatsuji)
//   + Bistro × Bar HAKONIWA (rooftop-terrace bistro bar near Sanjo-Gion: BBQ in summer, kotatsu hot pot in winter)
//   notable (queue.mjs kyoto-missed next notable 200, first two lane ids):
//   + Ristorante t.v.b (prix-fixe Italian in a Gion machiya; since 2007)
//   + 亀屋陸奥 Kameya Mutsu (confectioner to Hongan-ji since 1421; matsukaze)
//   None of the added shops is in data/kyoto.json: grep by id, name (おいちょ/OICHO, HAKONIWA/ハコニワ, t.v.b, 亀屋陸奥) and
//   address (京極町497, 西之町216, 祇園町南側570-155, 菱屋町153) found none ("t.v.b" hits only chefs' past workplaces).
//   Same-name counts (Samboa ruling): OICHO — one sister, 鶏焼肉はやし おいちょ (Tabelog crawl); t.v.b — Ristorante t.v.b,
//   祇園t.v.b and Vineria t.v.b (named in other records' chef histories); 亀屋陸奥 — one own shop (the official store page
//   lists only retailers otherwise); HAKONIWA — none found. All under 5, none in data: drafted.
//   Pins: Tabelog /en/ point, cross-checked with GSI only; t.v.b is 187 m from GSI's lot-570 point, so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032599', '肉屋甲 (Nikuya Kinoe): a chain under the 5+ same-name ruling — 株式会社ｋｉｎｏｅ’s official site (kinoe-yd.com) lists seven 甲/KINOE yakiniku shops: 焼肉ダイニング 甲, ヤキニク 甲, 肉屋 甲, 炭火焼肉 KINOE, 西院焼肉 KINOE, 岩倉焼肉 甲 (opened April 2026) and 囲炉裏焼肉 甲 (opened June 2026)');

// ================================================================ OICHO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013891/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'kyoto_oicho', name: 'OICHO (おいちょ)', category: 'OMNI',
    lat: 34.999477, lng: 135.766981, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chicken cuts are grilled at the table with salt, sauce or yuzu pepper; the menu also has kushiage, spring rolls, takana fried rice and ponzu dishes; no gluten information is published (Tabelog menu, March 2026; 2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the menu centres on chicken, and the hot pot uses chicken-bone and kombu dashi (Tabelog; Tabelog menu, March 2026).',
    hours_raw: '18:00–24:00; closed Wednesday, but open on Wednesdays before and on holidays (Tabelog). Bookings taken; mention children’s ages; the hot pot needs a booking (Tabelog; April 2026). Table charge ¥330 a head, none for children of elementary age and under (Tabelog). Raw chicken (tataki yukke) to be eaten within 30 minutes of serving (February 2025). 30 seats (9 at the counter, 21 at tables); non-smoking, ashtray outside the door; cards, e-money and PayPay (Tabelog). On Teramachi south of Takatsuji; 5 min from Hankyu Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Teramachi south of Takatsuji — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Chicken you grill yourself over a charcoal shichirin, yakiniku-style, plus chicken sashimi and izakaya dishes (2025–26 reviews) · Kyotanba chicken cuts: thigh ¥630, breast ¥470, harami ¥550, neck ¥550, tender ¥550, skin ¥470, liver ¥520, gizzard ¥630, heart ¥520, tail ¥430, yagen cartilage ¥520 · Kyotanba chicken salt hot pot for one (mizutaki, chicken-bone and kombu dashi, yuzu ponzu) ¥1,880 · 10 assorted kushiage ¥1,320 (Tabelog menu, March 2026) · five-cut grilled and five-kind sashimi platters, chicken tataki yukke, chicken-and-cream-cheese fresh spring rolls, shiso tsukune, takana fried rice (2025–26 reviews) · courses from ¥5,500 with all-you-can-drink (August 2025)',
    website: null, gmaps: gm('OICHO おいちょ 京都 寺町'), menu_url: MENU,
    notes: "[Chicken · Teramachi-Takatsuji, grill-your-own chicken on charcoal] A busy chicken house on Teramachi south of Takatsuji where you order Kyotanba chicken by the cut — thigh, harami, neck, liver, heart — and grill it yourself on a charcoal shichirin, yakiniku-style. Start with the five-kind sashimi platter or the rare tataki yukke, and don't skip the chicken-and-cream-cheese spring rolls. Cuts from ¥430; a one-person salt hot pot (¥1,880) needs booking. Reviewers praise the friendly staff; on busy nights service can be slow. Open to midnight; closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['No person is named in the sources'], origin: null,
      background: 'A sister shop, 鶏焼肉はやし おいちょ, appears in the Tabelog crawl. Reviewers describe a friendly, engaging chef (January 2025) and attentive staff (2026).',
      philosophy: null, specialty: 'Grill-your-own Kyotanba chicken; chicken sashimi; cream-cheese spring rolls.',
      anecdotes: [
        { text: 'A February 2025 diner was told to eat the chicken tataki yukke within 30 minutes of serving.', source: R + 'B501476973/' },
        { text: 'A March 2026 diner was asked about dislikes before the five-cut grilled platter came.', source: R + 'B524588235/' },
        { text: 'An April 2026 diner was warned dishes would take time on a crowded night and could not order the hot pot without a booking.', source: R + 'B526124202/' },
      ],
      japanese_sources_summary: '食べログ: 鳥料理・居酒屋、下京区寺町通高辻下ル京極町497-2、阪急河原町駅から徒歩5分、月・火・木〜日 18:00〜24:00、水曜休み (祝前日・祝日は営業)、予約可 (子供の年齢も)、付き出し1人330円 (小学生以下はなし)、30席 (カウンター9、テーブル21)、禁煙 (入口外に灰皿)、カード・電子マネー・PayPay 可、ベジタリアンメニューあり、メニュー (英語版、2026年3月更新): 京丹波の鶏の炭火焼き (もも630円、むね470円、ハラミ550円、せせり550円、ささみ550円、皮470円、レバー520円、砂肝630円、ハツ520円、ぼんじり430円、やげん軟骨520円)、京丹波鶏の塩鍋 (一人用水炊き) 1,880円、串揚げ10本1,320円。口コミ (2025年1月〜2026年11月、英語): 七輪で自分で焼く、鶏刺し盛り合わせ、鶏たたきユッケ、ささみとクリームチーズの生春巻き、しそつくね、高菜炒飯、飲み放題コース5,500円。',
      confidence: 'medium', sources: [TB, MENU, R + 'B500189916/', R + 'B500606112/', R + 'B501476973/', R + 'B502342233/', R + 'B503996938/', R + 'B510831150/', R + 'B511667723/', R + 'B523038672/', R + 'B524588235/', R + 'B526124202/', R + 'B527716296/', R + 'B538633758/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (the hot pot needs a booking); you grill the chicken yourself; raw chicken on the menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区寺町通高辻下ル京極町497-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (menu March 2026); reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.999477, 135.766981); cross-checked: GSI 京都府京都市下京区京極町497番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Tabelog menu, last updated 19 March 2026 (prices including tax); ¥330 table charge.', last_checked: TODAY, items: [
      it('', '', 'Kyotanba chicken thigh (grill yourself)', '¥630', 'Charcoal grill', 'ask', 'no', '', 'momo'),
      it('', '', 'Chicken harami', '¥550', 'Charcoal grill', 'ask', 'no', '', 'harami'),
      it('', '', 'Kyotanba chicken salt hot pot for one', '¥1,880', 'Hot pot', 'ask', 'no', 'Booking needed.', 'shio_nabe'),
      it('', '', '10 assorted kushiage', '¥1,320', 'Fried', 'no', 'no', '', 'kushiage'),
    ] }, {
    cuisine: '炭火の七輪で焼肉のように自分で焼く鶏と、鶏刺しや居酒屋の料理 (2025〜2026年の口コミ)・京丹波の鶏: もも630円、むね470円、ハラミ550円、せせり550円、ささみ550円、皮470円、レバー520円、砂肝630円、ハツ520円、ぼんじり430円、やげん軟骨520円・京丹波の鶏の塩鍋 (一人用の水炊き、鶏ガラと昆布のだし、柚子ポン酢) 1,880円・串揚げ10本1,320円 (食べログのメニュー、2026年3月)・焼き物5種と鶏刺し5種の盛り合わせ、鶏たたきユッケ、ささみとクリームチーズの生春巻き、しそつくね、高菜炒飯 (2025〜2026年の口コミ)・飲み放題付きコース5,500円から (2025年8月)',
    neighborhood: '高辻の南の寺町。京都河原町駅から徒歩5分',
    gf_detail: '要確認。鶏の部位を塩、たれ、柚子胡椒で卓上で焼く。串揚げ、生春巻き、高菜炒飯、ポン酢の料理もある。グルテンの情報は公開されていない (食べログのメニュー、2026年3月、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、料理は鶏が中心で、鍋は鶏ガラと昆布のだし (食べログ、2026年3月のメニュー)。',
    notes: '[鳥料理・寺町高辻、炭火で自分で焼く鶏] 高辻の南、寺町のにぎやかな鶏の店。京丹波の鶏を部位ごとに頼み、もも、ハラミ、せせり、レバー、ハツを炭火の七輪で焼肉のように自分で焼く。まずは鶏刺し5種の盛り合わせかレアのたたきユッケ、ささみとクリームチーズの生春巻きも。部位は430円から、一人用の塩鍋 (1,880円) は予約が必要。スタッフは好評だが、混む夜は提供に時間がかかることも。24時まで、水曜休み。',
  });
}

// ================================================================ Bistro × Bar HAKONIWA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030367/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const WD = day(['12:00', '24:00']); const SUN = day(['12:00', '22:00']);
  put({
    id: 'kyoto_hakoniwa_bistro_bar', name: 'Bistro × Bar HAKONIWA (ハコニワ)', category: 'OMNI',
    lat: 35.006266, lng: 135.773011, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A meat-and-drinks bistro bar: roast-beef bowls with dashi soy sauce, sausages, kara-age, fries, French toast and pancakes; no gluten information is published (Tabelog menu, September 2026; 2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat bowls, BBQ, meat hot pot, kara-age and egg dishes make up the menu (Tabelog menu; 2024–26 reviews).',
    hours_raw: 'Lunch 12:00–16:00, then 16:00–24:00 (last order 23:00) Monday to Saturday, and to 22:00 (last order 21:30) Sundays and holidays; Tabelog also notes 16:00–24:00 in summer and 16:00–22:00 in winter; closed irregularly (Tabelog). Bookings via TableCheck or phone; same-day by phone only, even when online shows full (Tabelog). Rooftop terrace: ¥500 a head unless on a course (Tabelog); summer beer garden and BBQ courses from April; kotatsu seats with hot pot from November to March (Tabelog menu; 2024–26 reviews). Two-hour seating on the all-you-can-drink courses (October 2025). 13 seats inside (5 at the counter, two tables) plus the terrace, up to 20 guests; designated smoking area; cards, e-money and QR (Tabelog). On the 4th floor (B) of the 大西ビル; 3 min from Sanjo Stn, 5 min from Gion-Shijo Stn (Tabelog). Opened 26 February 2018 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WD, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Between Sanjo and Gion-Shijo, east of the Kamo River — 3 min from Sanjo Stn',
    cuisine: 'Bistro bar with a rooftop terrace over the Kyoto streets: lunch bowls and sweets by day, BBQ and drinks by night (2024–26 reviews) · lunch: NIKU bowl of thick roast beef with egg yolk and house dashi soy, finished as meat chazuke, ¥1,950 with extra meat (February 2025); Kyoto-egg hamburg ¥1,200 (February 2025); thick French toast and pancakes made with Uji-tea-fed Kyoto eggs, French toast ¥1,480 (March 2025; November 2025) · food: Happy Roast Beef ¥1,400, chicken-wing gyoza ¥550, fries ¥660, stuffed wing kara-age ¥750, BIG grilled sausages ¥900, kara-age ¥800, atsuage with Kujo green onion ¥550, potato salad ¥550, cheese omelette ¥880 (Tabelog menu, September 2026) · rooftop BBQ courses with all-you-can-drink, e.g. Halloween BBQ ¥5,500 (to 31 October 2026); Afternoon Tea BBQ ¥5,500 (October 2025); winter kotatsu meat hot pot of pork and beef over bean sprouts in a soy broth (2024–26 reviews)',
    website: null, gmaps: gm('Bistro Bar HAKONIWA 京都'), menu_url: MENU,
    notes: "[Bistro bar · Sanjo-Gion, a rooftop terrace for every season] A small fourth-floor bistro bar between Sanjo and Gion-Shijo whose real draw is its rooftop terrace over the city: a beer garden and BBQ courses in the warm months, and kotatsu tables with a meat hot pot from November to March. By day there are roast-beef NIKU bowls you finish as chazuke and French toast made with Uji-tea-fed eggs. Reviewers like the view, the friendly owner and the value; some found the hot pot mild and, in May 2026, the sodas flat. ¥500 terrace charge unless on a course. Open from noon.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed); an August 2026 reviewer found the owner very friendly'], origin: null,
      background: 'Opened 26 February 2018 (Tabelog). The rooftop terrace turns into kotatsu seating with blankets and hand warmers for winter (December 2024; November 2025).',
      philosophy: null, specialty: 'NIKU bowl; rooftop BBQ; winter kotatsu hot pot.',
      anecdotes: [
        { text: 'A December 2024 group was given a large blanket and disposable hand warmers at the group’s rooftop kotatsu.', source: R + 'B499335187/' },
        { text: 'A May 2026 diner found the rooftop view excellent and the meat decent, but the sodas almost flat.', source: R + 'B529106150/' },
        { text: 'A May 2026 diner who left something behind called the next day and was kindly helped.', source: R + 'B527624362/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー・ビアガーデン・肉料理、東山区西之町216-2 大西ビル 4F B、京阪三条駅から徒歩3分、祇園四条駅から徒歩5分、月〜土 12:00〜16:00・16:00〜24:00 (L.O. 23:00)、日・祝 12:00〜16:00・16:00〜22:00 (L.O. 21:30)、夏は16:00〜24:00、冬は16:00〜22:00、不定休、予約は TableCheck か電話 (当日は電話のみ)、屋上テラス席はチャージ1人500円 (コース予約は除く)、13席 (カウンター5、テーブル2)、分煙、カード・電子マネー・QR 可、2018年2月26日オープン、メニュー (英語版、2026年9月更新): 屋上ビアガーデン、ハロウィン BBQ コース5,500円、ハッピーローストビーフ1,400円、手羽先餃子550円、BIG ソーセージ900円、唐揚げ800円、厚揚げと Kujo ねぎ550円、ポテトサラダ550円、チーズオムレツ880円。口コミ (2024年12月〜2026年8月、英語): NIKU 丼1,950円 (肉増し)、Kyo Tamago のハンバーグ1,200円、フレンチトースト1,480円、冬の屋上のこたつと肉鍋、アフタヌーンティー BBQ 5,500円、気さくなオーナー。',
      confidence: 'medium', sources: [TB, MENU, R + 'B498029603/', R + 'B499335187/', R + 'B501256565/', R + 'B502951232/', R + 'B507147417/', R + 'B516137912/', R + 'B517386244/', R + 'B523880332/', R + 'B526834965/', R + 'B527624362/', R + 'B529106150/', R + 'B532110219/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book on TableCheck; same-day by phone (080-6513-0119); ¥500 terrace charge without a course.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区西之町216-2 大西ビル 4F B',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (menu September 2026); reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006266, 135.773011); cross-checked: GSI 京都府京都市東山区西之町216番地 (lot) 69m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B501256565/'],
    price_note: 'Tabelog menu, last updated 16 September 2026 (prices including tax); lunch prices from 2025 reviews; ¥500 terrace charge without a course.', last_checked: TODAY, items: [
      it('', '', 'Happy Roast Beef', '¥1,400', 'Food', 'ask', 'no', '', 'roast_beef'),
      it('', '', 'NIKU bowl (roast beef, extra meat; lunch)', '¥1,950', 'Lunch', 'ask', 'no', 'February 2025.', 'niku_don'),
      it('', '', 'BIG grilled sausages (2)', '¥900', 'Food', 'ask', 'no', '', 'sausages'),
      it('', '', 'Halloween BBQ course with drinks', '¥5,500', 'Course', 'ask', 'no', 'To 31 October 2026.', 'bbq_course'),
    ] }, {
    cuisine: '街を見渡す屋上テラスのあるビストロバー。昼は丼と甘いもの、夜は BBQ とお酒 (2024〜2026年の口コミ)・ランチ: 厚切りのローストビーフに卵黄と自家製のだし醤油、最後は肉茶漬けにする NIKU 丼、肉増しで1,950円 (2025年2月)、Kyo Tamago のハンバーグ1,200円 (2025年2月)、宇治茶で育った Kyo Tamago の厚切りフレンチトーストとパンケーキ、フレンチトースト1,480円 (2025年3月、11月)・料理: ハッピーローストビーフ1,400円、手羽先餃子550円、フライドポテト660円、手羽先の詰め物唐揚げ750円、BIG 焼きソーセージ900円、唐揚げ800円、自家製だし醤油と Kujo ねぎの厚揚げ550円、ポテトサラダ550円、チーズオムレツ880円 (食べログのメニュー、2026年9月)・屋上の飲み放題付き BBQ コース、例えばハロウィン BBQ 5,500円 (2026年10月31日まで)、アフタヌーンティー BBQ 5,500円 (2025年10月)、冬はこたつで豚と牛の肉鍋、もやしの上に肉、醤油ベースのつゆ (2024〜2026年の口コミ)',
    neighborhood: '鴨川の東、三条と祇園四条の間。三条駅から徒歩3分',
    gf_detail: '要確認。肉とお酒のビストロバーで、だし醤油のローストビーフ丼、ソーセージ、唐揚げ、ポテト、フレンチトースト、パンケーキ。グルテンの情報は公開されていない (食べログのメニュー、2026年9月、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。肉の丼、BBQ、肉鍋、唐揚げ、卵料理が中心 (食べログのメニュー、2024〜2026年の口コミ)。',
    notes: '[ビストロバー・三条祇園、四季の屋上テラス] 三条と祇園四条の間、ビル4階の小さなビストロバー。いちばんの魅力は街を見渡す屋上テラスで、暖かい季節はビアガーデンと BBQ コース、11月〜3月はこたつで肉鍋。昼は最後に茶漬けにするローストビーフの NIKU 丼や、宇治茶で育った卵のフレンチトースト。眺め、気さくなオーナー、コスパが好評で、鍋が薄味、2026年5月は炭酸が抜けていたという声も。コースなしのテラスは500円。昼から営業。',
  });
}

// ================================================================ Ristorante t.v.b
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26004765/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ristorante-tvb.com/'; const DIN = SITE + 'dinner.html'; const LUN = SITE + 'lunch.html';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_ristorante_tvb', name: 'Ristorante t.v.b (リストランテ ティー ブイ ビー)', category: 'OMNI',
    lat: 35.002462, lng: 135.775531, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: allergies and dislikes must be told in advance, as day-of changes may not be possible (Tabelog). Courses include pasta, kadaif-wrapped lobster, risotto and desserts (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: prix-fixe courses of seafood, Kameoka beef, pork and dairy desserts (official menu).',
    hours_raw: 'Lunch 12:00 (last order 13:00) and dinner 18:00 (last order 20:00); closed Sunday and some weekdays (official site; Tabelog lists 12:00–15:00 and 18:00–22:00, Monday to Saturday). Booking advised for all meals; phone is easiest 11:00–12:00 and 14:00–16:00 (Tabelog; official site); also via Ikkyu and Pocket Concierge (official site; October 2026). 10% service charge (official site; Tabelog). 14 seats, private rooms for 2, 4 or 6 (Tabelog). Cards, e-money and QR (Tabelog). In a machiya with a modern interior and a wine cellar, in a narrow Gion alley; 7 min from Keihan Gion-Shijo Stn (Tabelog; 2026 reviews). Opened 30 January 2007 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion south of Shijo, in an alley — 7 min from Gion-Shijo Stn',
    cuisine: 'Prix-fixe Italian: choose starters, pasta and main from the day’s list, with sommelier-chosen wine (official site) · lunch ¥6,800 and dinner ¥15,000, plus 10% service; supplements for Canadian lobster in kadaif (+¥1,500), Wakayama abalone and ito-nori risotto (+¥2,500), Kameoka beef misuji (+¥2,500 at lunch) and Australian black truffle (+¥2,000) (official site) · dishes on the current menus: edamame purée with cuttlefish and sea urchin, a salad of 13 vegetables with whelk and truffle-scented egg, chilled pasta with fruit-tomato sauce and ripe white peach with caviar, Nagasaki kasago with okahijiki, Kameoka beef Bolognese with zucchini, roast Wakayama kinmedai, "shirokuma" ice, tiramisu with espresso cookie (official site) · reviewers paid ¥7,480 for lunch (July 2026) and ¥16,500 for a seven-dish dinner (August 2026), with service; three-glass wine pairings (2026 reviews)',
    website: SITE, gmaps: gm('Ristorante t.v.b 祇園'), menu_url: DIN,
    notes: "[Italian · Gion, prix-fixe in a machiya] A fourteen-seat Italian restaurant in a Gion machiya with a modern interior and a wine cellar, opened in 2007. Both lunch (¥6,800) and dinner (¥15,000, plus 10% service) are prix-fixe: pick a starter, a pasta and a main from the day's list — kadaif-wrapped Canadian lobster, chilled tomato capellini with white peach and caviar, Kameoka beef Bolognese, roast kinmedai — and finish with the tiramisu reviewers rave about. A sommelier pairs wine by the glass. Book ahead and mention allergies in advance. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Restaurant of 株式会社ｔｖｂ (invoice T9130001058710); a sommelier chooses the wine; no chef is named in the sources read'], origin: null,
      background: 'Per the official site: Ristorante t.v.b (リストランテ ティ ヴォリオ ベーネ) serves seasonal course food in Gion, with starter, pasta and main chosen from the day’s best ingredients, and wines chosen by a sommelier. Opened 30 January 2007 (Tabelog). Other records in data name 祇園t.v.b and Vineria t.v.b as past workplaces of chefs in those records. The invoice number belongs to 株式会社ｔｖｂ (NTA corporate-number site).',
      philosophy: 'Per the official site: to bring out the appeal of carefully chosen fish, meat and seasonal vegetables, dish by dish.',
      specialty: 'Kadaif-wrapped lobster; chilled tomato capellini; tiramisu.',
      anecdotes: [
        { text: '"I was truly amazed by the best tiramisu I\'ve ever had!" — August 2026.', source: R + 'B534914790/' },
        { text: 'An April 2026 diner liked the salad, white asparagus and foie gras but found the wild-boar ragù a bit too intense.', source: R + 'B526549024/' },
        { text: 'A July 2026 diner explains booking through American Express perks for the ¥7,480 lunch.', source: R + 'B531734521/' },
      ],
      japanese_sources_summary: '公式サイト (ristorante-tvb.com): 京都祇園のイタリアン「リストランテ t.v.b」(リストランテ ティ ヴォリオ ベーネ)、四季折々の旬を映したコース、前菜・パスタ・メインをその日のおすすめから選ぶ、ソムリエ厳選ワイン、東山区祇園町南側570-155、LUNCH 12:00〜13:00 (L.O)、DINNER 18:00〜20:00 (L.O)、日曜日・平日不定休、ディナー15,000円 (税込、サービス料10%別): 枝豆のピュレ 紋甲イカと生ウニ、13種の野菜のサラダとつぶ貝、トリュフ香る煮卵とカラスミ、カナダ産オマール海老のカダイフ巻き (+1,500円)、フルーツトマトソースの冷製パスタ、山梨県産完熟白桃とキャビア、長崎県産カサゴとおかひじきのオイルソース、亀岡牛のボロネーゼソースとズッキーニ、和歌山県産アワビと糸海苔のリゾット (+2,500円)、和歌山県産金目鯛のロースト、京都府産亀岡牛ミスジのロースト、オーストラリア産黒トリュフ (+2,000円)、白くまアイス、ティラミスとざくざくエスプレッソクッキー、ランチ6,800円 (税込、サービス料10%別)。食べログ: イタリアン・ワインバー、電話は11〜12時と14〜16時がつながりやすい、アレルギーや苦手な食材は事前に、サービス料10%、14席、個室 (2・4・6名)、カード・電子マネー・QR 可、2007年1月30日オープン、インボイス T9130001058710 (株式会社ｔｖｂ)。口コミ (2026年4〜10月、英語): 町家の外観とモダンな店内、ワインセラー、オマール海老のカダイフ巻き、冷製カッペリーニ、ティラミス、ランチ7,480円、ディナー16,500円。',
      confidence: 'medium', sources: [TB, SITE, DIN, LUN, R + 'B325118054/', R + 'B526549024/', R + 'B528579745/', R + 'B529440427/', R + 'B531734521/', R + 'B532204440/', R + 'B534366614/', R + 'B534914790/', R + 'B536730088/', R + 'B537241150/', R + 'B537800313/', R + 'B538419241/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (phone, Ikkyu or Pocket Concierge); tell allergies in advance; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-155',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (current menus) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002462, 135.775531); GSI matched only the large lot 祇園町南側570番地, 187m away, so single-point approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [DIN, LUN],
    price_note: 'Official site menus (prices including tax, plus 10% service); dishes change with the season.', last_checked: TODAY, items: [
      it('', '', 'Lunch prix-fixe course', '¥6,800', 'Course', 'ask', 'no', 'Plus 10% service.', 'lunch_course'),
      it('', '', 'Dinner prix-fixe course', '¥15,000', 'Course', 'ask', 'no', 'Plus 10% service.', 'dinner_course'),
      it('カナダ産オマール海老のカダイフ巻き', '', 'Canadian lobster wrapped in kadaif (supplement)', '+¥1,500', 'Course', 'no', 'no', '', 'lobster_kadaif'),
    ] }, {
    cuisine: 'プリフィックスのイタリアン。その日の候補から前菜、パスタ、メインを選び、ソムリエのワインと (公式サイト)・ランチ6,800円、ディナー15,000円、サービス料10%別。カナダ産オマール海老のカダイフ巻き (+1,500円)、和歌山県産アワビと糸海苔のリゾット (+2,500円)、亀岡牛ミスジ (ランチは+2,500円)、オーストラリア産黒トリュフ (+2,000円) (公式サイト)・今のメニューから: 枝豆のピュレ 紋甲イカと生ウニ、13種の野菜のサラダとつぶ貝、トリュフ香る煮卵、フルーツトマトソースの冷製パスタと山梨県産完熟白桃とキャビア、長崎県産カサゴとおかひじき、亀岡牛のボロネーゼとズッキーニ、和歌山県産金目鯛のロースト、白くまアイス、ティラミスとざくざくエスプレッソクッキー (公式サイト)・口コミではランチ7,480円 (2026年7月)、7品のディナー16,500円 (2026年8月)、サービス料込み。3杯のワインペアリング (2026年の口コミ)',
    neighborhood: '四条の南の祇園、路地の中。祇園四条駅から徒歩7分',
    gf_detail: '予約時に要確認。アレルギーや苦手な食材は事前に。当日の変更はできない場合がある (食べログ)。コースにはパスタ、カダイフ巻きのオマール海老、リゾット、デザートが入る (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可。魚介、亀岡牛、豚、乳製品のデザートのプリフィックスのコース (公式メニュー)。',
    notes: '[イタリアン・祇園、町家のプリフィックス] 祇園の町家にある14席のイタリアン。中はモダンでワインセラーがあり、2007年開店。昼 (6,800円) も夜 (15,000円、サービス料10%別) もプリフィックスで、その日の候補から前菜、パスタ、メインを選ぶ。カダイフ巻きのカナダ産オマール海老、白桃とキャビアの冷製トマトのカッペリーニ、亀岡牛のボロネーゼ、金目鯛のロースト、締めは口コミで絶賛のティラミス。ソムリエがグラスワインを合わせる。要予約、アレルギーは事前に。日曜休み。',
  });
}

// ================================================================ 亀屋陸奥
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26002071/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kameyamutsu.jp/'; const ABOUT = SITE + 'about/'; const MATSU = SITE + 'products/matsukaze/'; const OTHER = SITE + 'products/other/'; const STORE = SITE + 'store/';
  const H = day(['08:30', '17:00']);
  put({
    id: 'kyoto_kameya_mutsu', name: '亀屋陸奥 (Kameya Mutsu)', category: 'OMNI',
    lat: 34.989502, lng: 135.753322, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the signature matsukaze is made of wheat flour, sugar, malt syrup and white miso (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The matsukaze’s listed ingredients are wheat flour, sugar, malt syrup and white miso, with poppy seeds; the rakugan 憶昔 is sugar, white bean paste, rice flour, wasanbon, hama-natto and cinnamon (official site) — none lists animal products, but ask.',
    hours_raw: '8:30–17:00; closed Wednesday and 1–3 January (official site; Tabelog). Takeaway only (Tabelog). Seasonal sweets (fresh wagashi, warabi-mochi, mizu-yokan, manju) are sold only at this main shop (official site). Matsukaze is also sold at Nishi Hongan-ji’s shops, Kyoto Takashimaya, JR Kyoto Isetan and station shops (official site). Cards, e-money and QR (Tabelog). Opposite Nishi Hongan-ji, north of Shichijo on Nishinakasuji-dori, by the Shichijo-Horikawa bus stop; about 12 min walk from Kyoto Stn (official site).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Opposite Nishi Hongan-ji, north of Shichijo — 12 min walk from Kyoto Stn',
    cuisine: 'Confectioner to Hongan-ji, founded by tradition in 1421 (official site) · 松風 (matsukaze): a fermented dough of wheat flour, sugar, malt syrup and white miso baked in a 45.5 cm pan, scattered with poppy seeds and cut into strips — said to have begun as rations during the 石山合戦 siege; 8 pieces ¥700 (August–October 2026), cut-end value bags; 西六條寺内松風 made with hama-natto instead of white miso (official site; 2026 reviews) · 憶昔 (soft rakugan with hama-natto and cinnamon), 滴翠 (sugar-glazed fu-yaki senbei), おいまつ yokan, ogura and Uji-matcha yokan, 一会 wasanbon, 季の詞 higashi (official site) · seasonal fresh wagashi, warabi-mochi, mizu-yokan, shonin manju, kurakake manju at the main shop only (official site); monaka ¥220 (September 2026)',
    website: SITE, gmaps: gm('亀屋陸奥 西本願寺'), menu_url: SITE + 'products/list/',
    notes: "[Wagashi · Nishi Hongan-ji, the matsukaze of a 600-year-old confectioner] An old confectioner opposite Nishi Hongan-ji that by its own history has supplied the temple's offerings since 1421. Its famous 松風 is a chewy, bread-like slab of fermented wheat dough, white miso and malt syrup, baked in a huge pan and scattered with poppy seeds — said to have started as siege rations in the 石山合戦, and named from a poem by 顕如. Eight pieces ¥700; cut-end bags are a bargain. Seasonal wagashi are sold only here. Takeaway only; 8:30–17:00, closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['株式会社亀屋陸奥 (founded as a company in 1964; official site); no person is named in the sources read'], origin: null,
      background: 'Per the official site: founded, by tradition, in 1421; supplier of offerings to Hongan-ji from about the time 蓮如 (Rennyo) led it; during the 石山合戦 (from 1570) a sweet first made as rations became matsukaze, named after 顕如’s poem once Hongan-ji settled at 六条堀川 (1591); around 1660 the house received a cypress turtle said to have floated in Hideyoshi’s Jurakudai pond, the 亀 of its name, and in 1715 the title 陸奥大掾 from the court; matsukaze specimens won silver at the 1900 Paris Exposition; incorporated in 1964. 司馬遼太郎 wrote matsukaze into 『燃えよ剣』 and 『関ヶ原』. Tabelog Wagashi WEST "Tabelog 100" 2026 (official site news, 29 September 2026).',
      philosophy: 'Per the official site: to keep the taste handed down since the Warring States period and pass it on to the next era, one sheet at a time.',
      specialty: '松風; 憶昔; seasonal wagashi.',
      anecdotes: [
        { text: 'A September 2026 visitor found the shop closed on its Wednesday holiday and bought matsukaze inside Nishi Hongan-ji instead.', source: R + 'B536405311/' },
        { text: 'An October 2026 buyer of the value bag found about 20 pieces, including broken ones — "quite a bargain".', source: R + 'B538578091/' },
        { text: 'A September 2026 visitor noticed a steady stream of local customers buying gifts.', source: R + 'B535423715/' },
      ],
      japanese_sources_summary: '公式サイト (kameyamutsu.jp): 1421年創業、京都・西本願寺前の老舗和菓子店 亀屋陸奥、本願寺御用達の御供物司、応永28年 (1421年) 創業と伝わる、蓮如上人のころから御供物の調達、石山合戦の籠城の中で松風の原型、1591年に本願寺が六条堀川へ移り「松風」と名づけられる (顕如上人の歌)、1660年頃に豊臣秀吉ゆかりの檜造りの亀を拝領、1715年に「陸奥大掾」の御宣旨、1900年パリ万国博覧会で銀賞、1964年に株式会社亀屋陸奥、松風は小麦粉、砂糖、麦芽飴、白味噌を自然発酵させ、直径約45.5cm の一文字鍋で焼きケシの実を振る、西六條寺内松風 (浜納豆)、徳用袋、憶昔 (落雁)、滴翠 (麩焼煎餅)、季節のお菓子は本店のみ、下京区西中筋通七条上る菱屋町153、8:30〜17:00 (水曜日定休)、七条堀川バス停前、京都駅から徒歩約12分、取扱店舗: 西本願寺売店、京都高島屋、JR京都伊勢丹ほか、2026年9月29日 食べログ 和菓子・甘味処 WEST 百名店 2026 選出。食べログ: 和菓子、テイクアウトのみ、1月1日〜3日休み、カード・電子マネー・QR 可。口コミ (2026年6〜10月、英語): 松風8枚700円、もなか220円、徳用袋。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MATSU, OTHER, STORE, R + 'B530917348/', R + 'B532798436/', R + 'B533371109/', R + 'B533704514/', R + 'B533745737/', R + 'B535071384/', R + 'B535423715/', R + 'B536218535/', R + 'B536405311/', R + 'B536581038/', R + 'B537926169/', R + 'B538578091/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway counter; matsukaze also sold inside Nishi Hongan-ji.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西中筋通七条上ル菱屋町153',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news September 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989502, 135.753322); cross-checked: GSI 京都府京都市下京区菱屋町153番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537926169/', R + 'B535423715/'],
    price_note: 'Prices from August–October 2026 reviews; the official price list is on its product-list page.', last_checked: TODAY, items: [
      it('松風', '', 'Matsukaze, 8 pieces', '¥700', 'Wagashi', 'no', 'ask', 'Wheat flour, sugar, malt syrup, white miso.', 'matsukaze_8'),
      it('', '', 'Monaka', '¥220', 'Wagashi', 'no', 'ask', 'September 2026.', 'monaka'),
    ] }, {
    cuisine: '1421年創業と伝わる本願寺御用達の菓子司 (公式サイト)・松風: 小麦粉、砂糖、麦芽飴、白味噌を自然発酵させ、直径45.5cm の鍋で焼いてケシの実を振り短冊に切る。石山合戦の兵糧が始まりと伝わる。8枚700円 (2026年8〜10月)、切れ端の徳用袋。白味噌の代わりに浜納豆の西六條寺内松風 (公式サイト、2026年の口コミ)・憶昔 (浜納豆と肉桂のしっとりした落雁)、滴翠 (グラニュー糖を塗った麩焼煎餅)、おいまつ、小倉羊羹、抹茶羊羹、一会 (和三盆)、季の詞 (干菓子) (公式サイト)・生菓子、わらび餅、水羊羹、しょうにん饅頭、くらかけ饅頭など季節のお菓子は本店のみ (公式サイト)。もなか220円 (2026年9月)',
    neighborhood: '西本願寺の向かい、七条の北。京都駅から徒歩12分',
    gf_detail: 'グルテンフリーではない。名物の松風は小麦粉、砂糖、麦芽飴、白味噌で作る (公式サイト)。',
    vegan_detail: '要確認。松風の材料は小麦粉、砂糖、麦芽飴、白味噌、ケシの実、落雁の憶昔は砂糖、白餡、米粉、和三盆、浜納豆、肉桂 (公式サイト)。動物性の材料は書かれていないが確認を。',
    notes: '[和菓子・西本願寺、600年の菓子司の松風] 西本願寺の向かい、自らの歴史では1421年から本願寺の御供物を調えてきた老舗。名物の松風は、小麦粉と白味噌と麦芽飴を発酵させた生地を大きな鍋で焼き、ケシの実を振った、もっちりしたパンのような菓子。石山合戦の籠城の兵糧が始まりで、名は顕如上人の歌からと伝わる。8枚700円、切れ端の徳用袋がお得。季節の生菓子は本店だけ。持ち帰りのみ、8時半〜17時、水曜休み。',
  });
}

save();
