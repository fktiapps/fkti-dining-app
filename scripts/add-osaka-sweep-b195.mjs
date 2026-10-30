// Osaka sweep (2-mile circle around Dotonbori), batch 195 — name-revisit queue 3/6 (Greg 2026-10-30: redo the shops
// passed over because the name sounded like a person's), nearest-first.
//   + イタリアンバル食堂チャコ Italian Bar Shokudo Chako (casual Italian bar with natural wine and charcoal-finished Wagyu; Nambanaka)
//   + 鉄板彩菜やまぐち Teppan Saisai Yamaguchi (9-seat U-shaped teppanyaki counter, Black Wagyu and seasonal vegetables; Minami-Senba)
//   + Restaurant つじ川 Restaurant Tsujikawa (French techniques with Japanese ingredients, eaten with chopsticks; Tabelog Innovative 100 2025; Minami-Senba)
//   + 鮨とよたか Sushi Toyotaka (8-seat Edomae counter in the Senba Uraroji machiya, omakase with free-flow drinks; Minami-Senba)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 195);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ イタリアンバル食堂チャコ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27143464/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']); const W = day(['12:00', '23:00']);
  put({
    id: 'osaka_italian_bar_chako_nambanaka', name: 'イタリアンバル食堂チャコ (Italian Bar Shokudo Chako)', category: 'OMNI',
    lat: 34.661079, lng: 135.500318, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The shop says it can leave allergen ingredients out on request but cannot guarantee complete removal or prevent cross-contamination; the menu leans on fresh wheat pasta, bruschetta, fried calamari and fries fried in lard.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu, pork, prosciutto, liver mousse, mussels, sea urchin and cheese run through the menu; even the cover charge is a cheese appetizer.',
    hours_raw: 'Mon, Wed–Fri 17:00–23:00; Sat, Sun and holidays 12:00–23:00 straight through (à la carte or courses, day drinking welcome, no lunch menu); last orders food 22:00, drinks 22:30; closed Tuesday and some long weekends (Tabelog). Weekday lunch for reserved groups only (Tabelog). Regular reservations up to 4 people, 5–8 by phone; one drink minimum at dinner; seats may be limited to about 2 h 20 min when busy; cover charge ¥450 (a cheese appetizer), waived with a course (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 18 seats: 10 at the counter, 8 at tables, plus standing room; non-smoking, smoking area outside; children welcome (one low seat, the rest high chairs); the shop asks guests not to wear strong perfume (Tabelog). Opened 26 August 2024 (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nambanaka 3-9-7 — 6 min from Nankai Namba Stn, south of Namba Parks',
    cuisine: 'Casual Italian bar and diner (18 seats) · specialties: foie gras terrine and prosciutto bruschetta ¥880, sea urchin and potato cream (shredded potato like pasta) ¥1,600, white corn mousse with salmon roe and crab ¥1,380 · A4 Kuroge Wagyu roast steak, slow-cooked and finished over charcoal (200 g ¥3,200), Wagyu and pork hamburg, charcoal-grilled Oita pork, beef stew · Aomori mussels steamed in white wine ¥1,200, then risotto from the broth (+¥700); acqua pazza with risotto or pasta from the broth · fresh pasta from Awaji Noodles: Wagyu Bolognese tagliatelle ¥1,480, cacio e pepe · burrata with fruit, ajillo, fried calamari, lard-fried fries · seasonal blackboard specials · prices from the Tabelog menu updated 16 October 2026 · about 10 wines chosen by a sommelier, mostly natural, from ¥550; Peroni on draft; Japanese craft beer · courses with 2- or 3-hour free-flow drinks ¥5,500 / ¥6,600',
    website: null, gmaps: gm('イタリアンバル食堂チャコ 難波中'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian bar · Nambanaka, a natural-wine diner south of Namba Parks] A small, warm-wood Italian bar a few minutes south of Namba Parks that opened in 2024; one regular is already on a seventh visit. The order to make is the Aomori mussels steamed in white wine, then a risotto made from the broth; diners rave about the acqua pazza done the same way. Around it: foie gras and prosciutto bruschetta, sea urchin over shredded potato in cream, Wagyu roast steak slow-cooked and finished over charcoal (order it early, it takes time), and fresh pasta finished as Bolognese with chunks of braised Wagyu. Handwritten blackboard specials change with the season, and a few dishes, such as a Rossini, are kept for return visits. Wines are mostly natural, from ¥550 a glass. Weekends run from noon straight through to 23:00 for day drinking. It gets lively, so book.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Italian bar and diner that opened on 26 August 2024 (Tabelog); a sommelier picks about 10 wines, mostly natural (Tabelog, shop-provided). Staff described as attentive and kind (September 2026 reviews).', philosophy: 'Italian-inspired dishes from seasonal ingredients to go with wine, in a relaxed setting; guests are asked to skip strong perfume so the food and wine can be smelled (Tabelog, shop-provided).', specialty: 'Mussels steamed in white wine with risotto from the broth; charcoal-finished Wagyu roast; foie gras and prosciutto bruschetta.',
      anecdotes: [
        { text: '"First up was the mussels steamed in white wine. The plump mussels were accompanied by a flavorful broth, and I loved that I could turn the leftover broth into risotto." — September 2026, seventh visit, Today\'s Recommendations from the blackboard.', source: R + 'B516382174/' },
        { text: '"For the finale, we had Bolognese, but instead of ground meat, it was chunks of tender, shredded meat. I was completely moved by this dish." — September 2026, 3-hour free-flow course ¥6,600.', source: R + 'B520577115/' },
      ],
      japanese_sources_summary: '食べログ: イタリアンバル食堂チャコ、大阪市浪速区難波中3-9-7、南海なんば駅から徒歩6分、月・水〜金17:00〜23:00、土日祝12:00〜23:00 (通し営業)、L.O. 料理22:00・ドリンク22:30、火曜休み、平日ランチは貸切予約のみ、予約可 (通常は4名まで)、ディナーはワンドリンク制、混雑時は2時間20分ほど、お通し450円 (コースは不要)、カード・PayPay可、電子マネー不可、18席 (カウンター10、テーブル8)、禁煙 (外に喫煙所)、子供可、強い香水は控えてほしいとのこと、アレルギー食材を抜くことはできるが完全な除去やコンタミは保証できない、オープン日2024年8月26日。メニュー (2026年10月16日更新): フォアグラのテリーヌと生ハムのブルスケッタ880円、ウニとじゃがいものクリーム1600円、A4黒毛和牛のローストステーキ200g 3200円、Aomori のムール貝の白ワイン蒸し1200円 (リゾット700円)、Awaji Noodles の生パスタ、和牛のボロネーゼ1480円、飲み放題つきコース5500円・6600円。口コミ(2025年11月〜2026年10月): ムール貝のあとのリゾット、アクアパッツァのスープのリゾット、黒板の季節のおすすめ、ブラータとメロン、玉ねぎの丸焼き、ロッシーニは2回目から、肉料理は時間がかかるので早めに注文、にぎやか、女性のスタッフがやさしい。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B516382174/', R + 'B520577115/', R + 'B535983404/', R + 'B536451542/', R + 'B537233448/', R + 'B537744135/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (up to 4 by default); English Tabelog menu with prices (2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Shop statement: dishes without allergen ingredients can be made on request, but complete removal and freedom from cross-contamination cannot be guaranteed (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区難波中3-9-7',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (menu updated 16 October 2026); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区難波中三丁目9番7号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', TB],
    price_note: 'Prices from the Tabelog menu updated 16 October 2026 and the Tabelog course list.', last_checked: TODAY, items: [
      it('', '', 'Aomori mussels steamed in white wine (risotto from the broth +¥700)', '¥1,200', 'Warm dishes', 'ask', 'no', 'Tabelog menu, October 2026.', 'mussels'),
      it('', '', 'Foie gras terrine and prosciutto bruschetta', '¥880', 'Specialties', 'no', 'no', 'Each; homemade Madeira sauce.', 'bruschetta'),
      it('', '', 'Sea urchin and potato cream sauce', '¥1,600', 'Specialties', 'ask', 'no', 'Shredded potato in place of pasta.', 'uni_potato'),
      it('', '', 'A4 Kuroge Wagyu roast steak (200 g)', '¥3,200', 'Meat', 'ask', 'no', '150 g ¥2,400, 250 g ¥4,000.', 'wagyu_roast'),
      it('', '', 'Wagyu Bolognese tagliatelle (fresh pasta)', '¥1,480', 'Pasta', 'no', 'no', 'Tabelog menu, October 2026.', 'bolognese'),
      it('', '', 'Course with 2-hour free-flow drinks (9 dishes)', '¥5,500', 'Course', 'ask', 'no', 'Beer +¥1,000; 3 hours ¥6,600.', 'course'),
    ] }, {
    cuisine: 'カジュアルなイタリアンバル・食堂 (18席)・名物: フォアグラのテリーヌと生ハムのブルスケッタ880円、ウニとじゃがいものクリーム (パスタのように細く切ったじゃがいも) 1600円、白とうもろこしのムースといくらと蟹1380円・A4黒毛和牛のローストステーキ、低温で火を入れて炭火で仕上げ (200g 3200円)、和牛と豚のハンバーグ、Oita の豚の炭火焼き、ビーフシチュー・Aomori のムール貝の白ワイン蒸し1200円、残ったスープでリゾット (+700円)、アクアパッツァもスープでリゾットかパスタに・Awaji Noodles の生パスタ: 和牛のボロネーゼのタリアテッレ1480円、カチョエペペ・ブラータとフルーツ、アヒージョ、イカのフライ、ラードで揚げたフライドポテト・黒板の季節のおすすめ・値段は2026年10月16日更新の食べログのメニューから・ソムリエが選ぶワイン10種ほど、自然派が中心で550円から、Peroni の生、国産クラフトビール・2時間か3時間の飲み放題つきコース5500円・6600円',
    neighborhood: '難波中3-9-7。南海なんば駅から徒歩6分、なんばパークスの南',
    gf_detail: '要確認。アレルギー食材を抜くことはできるが、完全な除去やコンタミの防止は保証できないと店は説明。生パスタ、ブルスケッタ、イカのフライ、ラードで揚げたポテトが多い。',
    vegan_detail: 'ヴィーガンではありません。和牛、豚、生ハム、レバームース、ムール貝、ウニ、チーズが中心で、お通しもチーズ。',
    notes: '[イタリアンバル・難波中、なんばパークスの南の自然派ワインの食堂] なんばパークスから南へ数分の、木のぬくもりのある小さなイタリアンバル。2024年のオープンで、もう7回目という常連も。頼むべきは Aomori のムール貝の白ワイン蒸しと、そのスープで作るリゾット。アクアパッツァも同じようにリゾットにでき、評判がいい。ほかにフォアグラと生ハムのブルスケッタ、細く切ったじゃがいもにウニのクリーム、低温で火を入れて炭火で仕上げる和牛のロースト (時間がかかるので早めに注文を)、ほぐした和牛がごろごろ入った生パスタのボロネーゼ。手書きの黒板のおすすめは季節で変わり、ロッシーニなど2回目からの料理も。ワインは自然派が中心で、グラス550円から。週末は昼から23時まで通しで、昼飲みもできる。にぎやかなので予約を。',
  });
}

// ================================================================ 鉄板彩菜やまぐち
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27109157/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'osaka_teppan_saisai_yamaguchi_minamisenba', name: '鉄板彩菜やまぐち (Teppan Saisai Yamaguchi)', category: 'OMNI',
    lat: 34.675827, lng: 135.507029, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the Wagyu is served with salt, ponzu or soy sauce (March 2026), so ask for salt, and check the garlic rice, potage and appetizers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Wagyu teppanyaki counter; appetizers include prosciutto, and the meal comes with red miso soup.',
    hours_raw: 'Tue–Sun and holidays 11:30–14:00 (last order 13:30) and 17:30–21:00 (last order 20:30); closed Monday, open when Monday is a holiday (Tabelog). Reservations accepted; birthday plates and anniversary courses on request (Tabelog; 2025–2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, d Barai, Rakuten Pay, au PAY; no e-money; no cover charge (Tabelog). 9 seats around a U-shaped counter; non-smoking, ashtray outside; children welcome; private use up to 20 (Tabelog). Instagram @saisai_yamaguchi (linked in an October 2023 review). Opened 17 January 2019 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 1-18-24, AXIS Minami-Senba 1F — 4 min from Nagahoribashi Stn',
    cuisine: 'Teppanyaki of Black Wagyu and seasonal vegetables at a 9-seat U-shaped counter · the shop names Yamagata beef · lunch (Tabelog lunch menu, April 2025): Teppan Black Wagyu lunch ¥3,180 (salad, potage, grilled vegetables, 100 g top sirloin, rice, red miso soup, pickles, frozen dessert, coffee or tea), special Black Wagyu steak lunch ¥4,280, strip loin ¥5,780, fillet ¥6,080; garlic rice +¥700 · steak rice bowl ¥1,280, 10 a day (October 2025) · dinner courses ¥7,080 / ¥9,200 / ¥12,000 / premium ¥17,000: assorted appetizers, potage, salad, grilled vegetables, Wagyu, garlic rice · live lobster and abalone by reservation (2022 menu) · sake, shochu, wine; non-alcoholic red-wine juice',
    website: null, gmaps: gm('鉄板彩菜やまぐち 南船場'), menu_url: TB + 'dtlmenu/lunch/',
    notes: "[Teppanyaki · Minami-Senba, a nine-seat Wagyu counter near Nagahoribashi] A quiet, stylish counter of nine seats wrapped around the teppan, so every seat watches the grilling, with art pieces around the room. The owner-chef grills Black Wagyu (the shop names Yamagata beef) and seasonal vegetables in front of you; diners praise the vegetables as much as the meat, a rich potage served hot or cold, a small assortment of appetizers, and garlic rice to finish, with salt, ponzu or soy sauce for the beef. Lunch is the deal: a Black Wagyu set from ¥3,180, or a limited steak rice bowl. Dinner courses run ¥7,080 to ¥17,000. The service is homey: staff have arranged birthday plates and cakes, lent a shawl to a pregnant guest, and the chef likes to chat after the meal.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (grills at the counter, per 2023–2025 reviews)'], origin: null, background: 'Teppanyaki counter that opened on 17 January 2019 (Tabelog). Reviewers describe a warm, humble owner who grills in front of guests and tells entertaining stories after the meal (October 2023, April 2025 reviews).', philosophy: 'Carefully chosen beef and vegetables grilled in front of guests; particular about where the vegetables come from (Tabelog, shop-provided; October 2026 review).', specialty: 'Black Wagyu steak; grilled seasonal vegetables; garlic rice.',
      anecdotes: [
        { text: '"The star of the meal, the Black Wagyu Top Sirloin, had just the right amount of marbling… allowing me to enjoy it with salt, ponzu, or soy sauce." — March 2026, Black Wagyu Saisai Course ¥7,080.', source: R + 'B525223144/' },
        { text: '"Since I was pregnant, a female staff member kindly lent me a shawl when I sat down… The chef grilled the vegetables and meat right in front of us." — July 2025, course.', source: R + 'B510849538/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板彩菜やまぐち、大阪市中央区南船場1-18-24 AXIS南船場 1F、長堀橋駅から徒歩4分、火〜日・祝11:30〜14:00 (L.O. 13:30)・17:30〜21:00 (L.O. 20:30)、月曜休み (祝日は営業)、予約可、カード・PayPay・d払い・楽天ペイ・au PAY可、電子マネー不可、チャージなし、9席 (U字のカウンター)、禁煙 (外に灰皿)、子供可、貸切20名まで、オープン日2019年1月17日、Yamagata 産の牛肉と季節の野菜。コース: 黒毛和牛彩菜ディナーコース7080円、黒毛和牛おまかせディナーコース9200円、特選黒毛和牛おまかせディナーコース12000円、特選黒毛和牛おまかせプレミアムコース17000円、ランチ3180円・4280円・5780円・6080円 (ガーリックライス+700円)。口コミ(2023年7月〜2026年10月): 店主が目の前で焼く、前菜の盛り合わせ、ポタージュ、焼き野菜、塩・ポン酢・醤油で食べる和牛、ガーリックライス、限定10食のステーキ丼1280円 (2025年10月)、誕生日のプレート、妊婦にショールを貸してくれた、ノンアルコールの赤ワインのジュース。',
      confidence: 'medium', sources: [TB, TB + 'party/', TB + 'dtlmenu/lunch/', R + 'B475400476/', R + 'B504691626/', R + 'B510849538/', R + 'B515748033/', R + 'B525223144/', R + 'B537192418/', R + 'B538190183/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppanyaki; book for dinner (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場1-18-24 AXIS南船場 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場一丁目18番24号 (go) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/lunch/', TB + 'party/', R + 'B515748033/', R + 'B525223144/'],
    price_note: 'Lunch prices from the Tabelog lunch menu (updated April 2025) and course list; steak bowl from an October 2025 review; dinner course confirmed in a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Teppan Black Wagyu lunch (100 g top sirloin, salad, potage, vegetables, rice, miso soup)', '¥3,180', 'Lunch', 'ask', 'no', 'Garlic rice +¥700.', 'lunch_wagyu'),
      it('', '', 'Special Black Wagyu steak lunch', '¥4,280', 'Lunch', 'ask', 'no', 'Adds assorted appetizers.', 'lunch_special'),
      it('', '', 'Steak rice bowl (10 a day)', '¥1,280', 'Lunch', 'ask', 'no', 'October 2025.', 'steak_don'),
      it('黒毛和牛彩菜ディナーコース', '', 'Black Wagyu Saisai dinner course (7 items)', '¥7,080', 'Dinner course', 'ask', 'no', 'March 2026.', 'course_saisai'),
      it('特選黒毛和牛おまかせプレミアムコース', '', 'Special Black Wagyu omakase premium course (9 items)', '¥17,000', 'Dinner course', 'ask', 'no', 'Tabelog course list.', 'course_premium'),
    ] }, {
    cuisine: '9席のU字のカウンターで黒毛和牛と季節の野菜の鉄板焼き・店は Yamagata 産の牛肉と紹介・ランチ (食べログのランチメニュー、2025年4月): 鉄板黒毛和牛ランチ3180円 (サラダ、ポタージュ、焼き野菜、top sirloin 100g、ご飯、赤だし、香の物、氷菓、コーヒーか紅茶)、特選黒毛和牛ステーキランチ4280円、サーロイン5780円、フィレ6080円、ガーリックライス+700円・限定10食のステーキ丼1280円 (2025年10月)・ディナーコース7080円、9200円、12000円、プレミアム17000円: 前菜の盛り合わせ、ポタージュ、サラダ、焼き野菜、和牛、ガーリックライス・活オマール海老と活アワビは予約で (2022年のメニュー)・日本酒、焼酎、ワイン、ノンアルコールの赤ワインのジュース',
    neighborhood: '南船場1-18-24 AXIS南船場 1F。長堀橋駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。和牛は塩、ポン酢、醤油で (2026年3月) 食べるので塩を頼み、ガーリックライス、ポタージュ、前菜も確認を。',
    vegan_detail: 'ヴィーガンではありません。和牛の鉄板焼きのカウンターで、前菜には生ハム、食事には赤だしも。',
    notes: '[鉄板焼き・南船場、長堀橋近くの9席の和牛カウンター] 鉄板をU字に囲む9席だけの、静かでおしゃれなカウンター。どの席からも焼くところが見え、店内にはアートも。店主が黒毛和牛 (店は Yamagata 産の牛肉と紹介) と季節の野菜を目の前で焼く。肉と同じくらい野菜がおいしいという声が多く、温かくても冷たくてもおいしいポタージュ、少しずつの前菜の盛り合わせ、締めのガーリックライス。肉は塩、ポン酢、醤油で。お得なのはランチで、黒毛和牛のランチが3180円から、限定のステーキ丼も。ディナーのコースは7080円から17000円。誕生日のプレートやケーキを用意してくれたり、妊婦にショールを貸してくれたりと家庭的なもてなしで、食後には店主の話も楽しい。',
  });
}

// ================================================================ Restaurant つじ川
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27078695/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '22:00']); const W = day(['12:00', '14:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_restaurant_tsujikawa_minamisenba', name: 'Restaurant つじ川 (Restaurant Tsujikawa)', category: 'OMNI',
    lat: 34.67737, lng: 135.50286, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the course builds on dashi and miso, and includes homemade focaccia, a fermented-butter pie and several desserts, so ask when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the courses run on fish, shellfish, foie gras and beef, with dashi-based sauces.',
    hours_raw: 'Tue–Fri 18:00–22:00; Sat and Sun 12:00–14:00 and 18:00–22:00; closed Monday (Tabelog). Reservation only, online or by phone; same-day seats sometimes available by phone; departure times within two hours of the booking are not accepted (Tabelog). Cash only since 6 July 2026, when the shop\'s card processor went bankrupt; no split bills; 5% service charge at dinner (Tabelog). 12 seats: 8 at an L-shaped counter, one table of 4; non-smoking; no children (Tabelog). Tabelog Innovative/Creative Top 100, 2025. Opened 21 April 2014 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 3-2-28, Taiyo Bldg — 5 min from Shinsaibashi, Honmachi or Nagahoribashi Stn',
    cuisine: 'French techniques with Japanese ingredients such as dashi and miso, eaten with chopsticks (12 seats) · omakase course of 12–13 dishes ¥14,770, with focaccia baked in house and a choice of five homemade desserts (Tabelog; September 2026 review) · menu changes about eight times a year · examples: root celery mousse with Ezo abalone, sea urchin and three-flavor vinegar; sea bream tartare with turnip and pear; sautéed scallops with shiitake, balsamic and seaweed; foie gras mousse with persimmon and fermented-butter pie; isaki with burdock purée and sea bream dashi espuma; domestic beef fillet with roast sweet potato and porcini; grilled matsutake risotto (September 2026); grilled eel with truffle sauce over rice (May 2026) · desserts such as chocolate terrine, matcha madeleine, brown sugar pudding, white sesame blancmange, honey and pepper ice cream · weekend lunch course (cash only) · wine-focused list, sweet wines with the foie gras',
    website: 'http://www.tsujikawa.osaka.jp', gmaps: gm('Restaurant つじ川 南船場'), menu_url: TB + 'party/',
    notes: "[French-Japanese · Minami-Senba, a couple-run counter for French food you eat with chopsticks] A small counter between Shinsaibashi and Honmachi, open since 2014 and in Tabelog's Innovative 100 for 2025, where French techniques of taking a dish apart and rebuilding it meet Japanese dashi, miso and seasonal fish. The single omakase runs 12 or 13 dishes for ¥14,770 — think a root celery mousse with Ezo abalone and sea urchin, foie gras mousse with persimmon, isaki with burdock and a sea bream dashi foam, a beef fillet main that regulars call the best part, and a grilled matsutake risotto to finish — then five desserts, and you may choose all of them. The homemade focaccia comes with refills; diners warn to pace yourself. A couple runs the room warmly. Weekend lunch is a good-value way in. Pay cash: the card processor went under in July 2026.",
    chef_bio: { chef_name: null, roles: ['Chef (cooks in front of the counter)'], origin: null, background: 'Opened on 21 April 2014 (Tabelog); Tabelog Innovative/Creative Top 100 in 2025. Run by a couple, per two reviews by the same diner (July 2024, September 2026).', philosophy: 'French deconstruction and reconstruction applied to Japanese ingredients such as dashi and miso; a seasonal menu changed about eight times a year, easy to eat with chopsticks (Tabelog, shop-provided).', specialty: 'Omakase French-Japanese course; homemade focaccia; five desserts.',
      anecdotes: [
        { text: '"The focaccia is tasty, but be careful not to overindulge, as it may prevent you from enjoying the five desserts at the end… The couple running the place provides warm and pleasant service." — September 2026, omakase course, ¥14,770 with service charge.', source: R + 'B489038639/' },
        { text: '"Usually, I\'m not surprised by the main dish at any course meal, even if it\'s delicious, but this was shockingly good." — May 2026, roasted domestic beef fillet with pumpkin and balsamic.', source: R + 'B528884298/' },
      ],
      japanese_sources_summary: '食べログ: Restaurant つじ川、大阪市中央区南船場3丁目2-28 タイヨービル、心斎橋・本町・長堀橋駅から徒歩5分、火〜金18:00〜22:00、土日12:00〜14:00・18:00〜22:00、月曜休み、完全予約制、予約から2時間以内の退店は不可、2026年7月6日にカード会社が倒産したため現金のみ、割り勘不可、ディナーはサービス料5%、12席 (カウンター8、テーブル4)、禁煙、子供不可、食べログ 創作料理・イノベーティブ 百名店 2025、オープン日2014年4月21日。店の紹介: フレンチの解体と再構築の技法に、だしや味噌などの和の食材、年に8回ほど変わる季節のメニュー、自家製の焼きたてフォカッチャ、5種のデザート、おまかせコース14770円。口コミ(2024年7月〜2026年9月): ご夫婦の温かいサービス、L字のカウンター、ウニとEzo のアワビ、鯛のタルタル、帆立のソテー、フォアグラのムースと柿、イサキとごぼう、国産牛フィレ、焼き松茸のリゾット、鰻のトリュフソースご飯、5種のデザート、フォカッチャのお代わり、ランチは現金のみ。',
      confidence: 'medium', sources: [TB, TB + 'party/', R + 'B489038639/', R + 'B528884298/', R + 'B534023254/', R + 'B534576935/', R + 'B535574610/', R + 'B535888608/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; bring cash (since July 2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3丁目2-28 タイヨービル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (cash-only notice dated July 2026, Xmas 2026 course); reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目2番28号 (go) 18m, on the normalised address 南船場3-2-28 (the listing's 「3丁目2-28」 matched only the chome); same building as ANNIE's Diner and Hana Usagi; the OSM hit つけ麺 つじ田 (143m) is a different shop; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'party/', R + 'B489038639/', R + 'B528884298/'],
    price_note: 'Course price from the Tabelog course list and a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase full course (12–13 dishes, focaccia, five desserts)', '¥14,770', 'Course', 'ask', 'no', 'Tabelog; September 2026.', 'course'),
      it('', '', 'Domestic beef fillet (course main)', '', 'Course', 'ask', 'no', 'May and September 2026.', 'beef'),
      it('', '', 'Homemade focaccia (refills offered)', '', 'Course', 'no', 'ask', 'August–September 2026.', 'focaccia'),
      it('', '', 'Five desserts', '', 'Dessert', 'ask', 'no', 'May–September 2026.', 'desserts'),
    ] }, {
    cuisine: 'だしや味噌など和の食材にフレンチの技法、おはしで食べる (12席)・おまかせコース12〜13品14770円、店で焼くフォカッチャと選べる自家製の5種のデザート (食べログ、2026年9月の口コミ)・メニューは年に8回ほど変わる・例: 根セロリのムースと Ezo のアワビ、ウニ、三杯酢、鯛のタルタルとカブと梨、帆立のソテーと椎茸とバルサミコと海苔、フォアグラのムースと柿と発酵バターのパイ、イサキとごぼうのピュレと鯛のだしのエスプーマ、国産牛フィレと焼き芋とポルチーニ、焼き松茸のリゾット (2026年9月)、鰻のトリュフソースご飯 (2026年5月)・デザートはショコラのテリーヌ、抹茶のマドレーヌ、黒糖のプリン、白ごまのブランマンジェ、はちみつと胡椒のアイスなど・週末のランチのコース (現金のみ)・ワインに力を入れ、フォアグラには甘口ワイン',
    neighborhood: '南船場3丁目2-28 タイヨービル。心斎橋・本町・長堀橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。だしと味噌を使うコースで、自家製フォカッチャ、発酵バターのパイ、デザートも出るので予約のときに確認を。',
    vegan_detail: 'ヴィーガンではありません。コースは魚、貝、フォアグラ、牛が中心で、ソースにもだし。',
    notes: '[和のフレンチ・南船場、ご夫婦の店のおはしで食べるフレンチのカウンター] 心斎橋と本町のあいだの小さなカウンターで、2014年から。食べログ 創作料理・イノベーティブ 百名店 2025にも選ばれた。フレンチの解体と再構築の技法を、和のだしや味噌、旬の魚と合わせる。おまかせは12〜13品で14770円。根セロリのムースに Ezo のアワビとウニ、フォアグラのムースと柿、イサキとごぼうと鯛のだしの泡、常連がいちばんと言う牛フィレ、締めは焼き松茸のリゾット。最後は5種のデザートで、全部選んでもいい。自家製のフォカッチャはお代わりできるが、食べすぎ注意という声。ご夫婦の温かいサービス。週末のランチはお得な入口。支払いは現金で (2026年7月にカード会社が倒産)。',
  });
}

// ================================================================ 鮨とよたか
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27126993/'; const R = TB + 'dtlrvwlst/';
  const TC = 'https://www.tablecheck.com/sushi-toyotaka'; const SU = 'https://www.sembauraroji.com';
  const L = day(['12:00', '14:30'], ['18:00', '23:00']); const N = day(['18:00', '23:00']);
  put({
    id: 'osaka_sushi_toyotaka_minamisenba', name: '鮨とよたか (Sushi Toyotaka)', category: 'OMNI',
    lat: 34.677425, lng: 135.498335, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the omakase includes soy-marinated tuna, anago with glaze, miso soup and dishes with soy sauce, so ask when booking (the shop adjusts for dislikes told in advance, per a May 2026 review).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fish and shellfish, with a bonito-dashi anago shabu-shabu.',
    hours_raw: 'Mon, Wed–Sun 12:00–14:30 and 18:00–23:00; Tue 18:00–23:00 (Tabelog). The Senba Uraroji site lists 17:00–22:30 (last order 22:00). Reservation only (Tabelog); a May 2026 diner booked by phone and paid a deposit through a text-message link. Cards accepted; no e-money or QR (Tabelog). 8 counter seats; non-smoking (Tabelog). Allow about 2.5 hours for the dinner course (July 2026 review). Inside Senba Uraroji, a renovated machiya with several restaurants; the entrance down the alley is easy to miss (Senba Uraroji site; 2026 reviews). Opened 13 December 2021 (Tabelog).',
    hours: { 0: L, 1: N, 2: L, 3: L, 4: L, 5: L, 6: L }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 4-10-22, Senba Uraroji 1F (end of the alley) — 6 min from Shinsaibashi or Yotsubashi Stn',
    cuisine: 'Edomae sushi counter (8 seats) mixing Tokyo and Kansai technique: aged, vinegar- or kombu-cured and simmered fish on red-vinegar rice · omakase with free-flow drinks ¥20,000, about 20–22 dishes (July–August 2026; TableCheck), sake among 15–20 kinds; lunch omakase nigiri with free-flow drinks ¥10,000 (TableCheck) · a May 2026 diner paid ¥16,000 for the only course · typical summer course (July–August 2026): toro-taku of aged tuna with miso-pickled takuan, abalone in chilled seawater, aged Akashi sea bream, corn chawanmushi, mackerel sushi, octopus and sweetfish, Densuke anago shabu-shabu with grated daikon and ponzu, then nigiri (swordtip squid, aged flounder, scallop, horse mackerel, marinated tuna, o-toro, hokkigai, shima ebi, sea urchin gunkan piled high, anago with salt and yuzu), miso soup from the shabu-shabu broth, watermelon',
    website: SU, gmaps: gm('鮨とよたか 南船場 船場裏路地'), menu_url: TC,
    notes: "[Sushi · Minami-Senba, an alley-end Edomae counter where the drinks are included] At the far end of the Senba Uraroji alley, in a renovated machiya, an eight-seat wooden counter serves what diners call Osaka-style Edomae sushi: fish aged for days, cured with vinegar or kombu, or simmered, on mild red-vinegar rice. The dinner omakase (¥20,000 in summer 2026) includes free-flow drinks, sake among them, so drinkers find it a rare bargain. It runs to about 20 dishes: it opens with a toro-taku hand roll of aged tuna and miso-pickled daikon, peaks with a shabu-shabu of a 700 g Densuke anago, and ends with a sea urchin gunkan stuffed and heaped with urchin, miso soup from the anago broth, and watermelon. Portions are generous; ask for smaller nigiri if needed. The chef is friendly and chats across the counter. Reservation only; budget 2.5 hours.",
    chef_bio: { chef_name: null, roles: ['Sushi chef'], origin: null, background: 'Trained at Edomae sushi restaurants in Tokyo and at sushi shops in Kyoto (August 2026 review); another August 2026 review adds Nagoya and says the chef wanted to be a sushi chef since childhood. Time Out Osaka (July 2022) introduced the shop as Edomae sushi made by a woman sushi chef who had won a Michelin Bib Gourmand; the 2026 reviews read do not say whether the same chef is at the counter. Opened 13 December 2021 (Tabelog).', philosophy: 'Bring out each fish with Edomae methods — aging, curing with vinegar or kombu, simmering — so each piece is a dish in itself (Tabelog and Senba Uraroji site, shop-provided).', specialty: 'Aged-fish omakase; Densuke anago shabu-shabu; sea urchin gunkan.',
      anecdotes: [
        { text: '"Densuke refers to those over 300g, and this one was 700g… The grated daikon is so good you could drink it!" — July 2026, omakase course with free drinks ¥20,000.', source: R + 'B532751605/' },
        { text: '"I was able to enjoy scallops, which I usually dislike, for the first time in my life!" — May 2026, ¥16,000 course.', source: R + 'B527985138/' },
      ],
      japanese_sources_summary: '食べログ: 鮨とよたか、大阪市中央区南船場4-10-22 船場裏路地 1F、心斎橋駅・四ツ橋駅から徒歩6分、月・水〜日12:00〜14:30・18:00〜23:00、火18:00〜23:00、完全予約制、カード可、電子マネー・QR不可、8席、禁煙、オープン日2021年12月13日。店の紹介 (食べログ・船場裏路地のサイト): 新鮮な魚を寝かせたり、お酢や昆布で締めたり、煮付けたり、江戸前の技法で一貫一貫を一つの料理に。船場裏路地のサイトでは17:00〜22:30 (L.O. 22:00)、南船場に残された町家を再生した飲食店の施設。TableCheck: お任せコース＋フリードリンク20000円、ランチ限定お任せ握り＋フリードリンク10000円。Time Out Osaka (2022年7月): ミシュランビブグルマンを獲得した女性寿司職人が握る江戸前寿司。口コミ(2026年5月〜8月): 東京の江戸前と京都の鮨店で修業 (名古屋もという声)、子供のころから鮨職人を目指した、赤酢のシャリ、熟成のトロたく、氷水のアワビ、熟成した Akashi の鯛、とうもろこしの茶碗蒸し、鯖寿司、Densuke の穴子のしゃぶしゃぶ、ウニを盛った軍艦、穴子のだしの味噌汁、スイカ、日本酒15〜20種、苦手なネタは事前に伝えれば対応、電話で予約しSMSでデポジット、路地の入口がわかりにくい、気さくな大将。',
      confidence: 'medium', sources: [TB, TC, SU, 'https://www.timeout.jp/osaka/ja/レストラン/sembauraroji', R + 'B527985138/', R + 'B528086650/', R + 'B532751605/', R + 'B533186387/', R + 'B533355995/', R + 'B533662337/', R + 'B534703404/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only, by phone with a deposit; drinks included in the course (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場4-10-22 船場裏路地 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–August 2026; listed on the Senba Uraroji site and TableCheck.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場四丁目10番22号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TC, R + 'B532751605/', R + 'B534703404/'],
    price_note: 'Prices from TableCheck and July–August 2026 reviews; a May 2026 review gives ¥16,000.', last_checked: TODAY, items: [
      it('お任せコース＋フリードリンク', '', 'Omakase course with free-flow drinks (about 20 dishes)', '¥20,000', 'Course', 'ask', 'no', 'July–August 2026; TableCheck.', 'course'),
      it('ランチ限定お任せ握り＋フリードリンク', '', 'Lunch omakase nigiri with free-flow drinks', '¥10,000', 'Lunch', 'ask', 'no', 'TableCheck.', 'lunch'),
      it('', '', 'Densuke anago shabu-shabu (in the course)', '', 'Course', 'ask', 'no', 'July–August 2026.', 'anago_shabu'),
      it('', '', 'Sea urchin gunkan (in the course)', '', 'Course', 'ask', 'no', 'July–August 2026.', 'uni'),
    ] }, {
    cuisine: '東京と関西の技を合わせた江戸前の鮨のカウンター (8席): 寝かせた魚、酢や昆布で締めた魚、煮た魚を赤酢のシャリで・お任せコース＋フリードリンク20000円、20〜22品ほど (2026年7〜8月、TableCheck)、日本酒は15〜20種・ランチ限定お任せ握り＋フリードリンク10000円 (TableCheck)・2026年5月の口コミではコースのみ16000円・夏のコースの例 (2026年7〜8月): 熟成まぐろと味噌漬けのたくあんのトロたく、冷たい海水のアワビ、熟成した Akashi の鯛、とうもろこしの茶碗蒸し、鯖寿司、タコと鮎、Densuke の穴子のしゃぶしゃぶ (大根おろしとポン酢)、握り (剣先イカ、熟成ヒラメ、帆立、アジ、漬けまぐろ、大トロ、ホッキ貝、シマエビ、ウニを山盛りにした軍艦、塩とゆずの穴子)、しゃぶしゃぶのだしの味噌汁、スイカ',
    neighborhood: '南船場4-10-22 船場裏路地 1F (路地の奥)。心斎橋駅・四ツ橋駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。お任せには漬けまぐろ、ツメの穴子、味噌汁、醤油を使う料理があるので予約のときに確認を (苦手なものは事前に伝えれば対応してくれたという2026年5月の口コミも)。',
    vegan_detail: 'ヴィーガンではありません。魚介のお任せで、穴子のしゃぶしゃぶはかつおのだし。',
    notes: '[鮨・南船場、路地の奥の飲み放題つき江戸前のカウンター] 町家を再生した船場裏路地の、いちばん奥にある8席の木のカウンター。大阪流の江戸前鮨と呼ばれ、何日も寝かせた魚、酢や昆布で締めた魚、煮た魚を、やわらかな赤酢のシャリで握る。夜のお任せ (2026年夏は20000円) は日本酒も含むフリードリンクつきで、飲む人にはめずらしいお得さ。全部で20品ほど。最初は熟成まぐろと味噌漬けのたくあんのトロたく、山場は700gの Densuke の穴子のしゃぶしゃぶ、最後はウニを中にも上にも盛った軍艦、穴子のだしの味噌汁、スイカ。量が多いので、握りを小さめにしてもらうことも。大将は気さくでカウンター越しの会話も楽しい。完全予約制で、2時間半はみておきたい。',
  });
}

save();
