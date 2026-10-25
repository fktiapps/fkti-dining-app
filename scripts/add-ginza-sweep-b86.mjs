// Ginza Station half-mile sweep (805 m), batch 86 — all-genre phase (all OMNI).
//   + 銀座バードランド (classic yakitori beside Sukiyabashi Jiro; owner not named)
//   + 銀熊茶寮 (teppanyaki in private rooms; tokyo-rf group)
//   + 目白 旬香亭 丸の内店 (second shop of Michelin-listed Mejiro yōshoku)
//   + ラ・プティ・メルスリー ルミネ有楽町店 (cake café chain)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座バードランド
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13004097/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '22:00']);
  put({
    id: 'tokyo_ginza_birdland_yakitori', name: '銀座バードランド (Ginza Birdland)', category: 'OMNI',
    lat: 35.672794, lng: 139.763902,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase yakitori; tsukune comes with an egg-yolk sauce. No source mentions seasonings or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken skewers, liver pâté.',
    hours_raw: 'Tue–Fri 17:00–22:00; Sat 17:00–21:30; closed Sun, Mon and holidays (Tabelog).',
    hours: { 1: d, 2: d, 3: d, 4: d, 5: day(['17:00', '21:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 4-chōme, Tsukamoto Sozan Bldg B1F, by Sukiyabashi crossing (next to Sukiyabashi Jiro) — Ginza Stn C6',
    cuisine: 'Classic Ginza yakitori · omakase course ¥9,800 · odour-free liver, tsukune with egg-yolk sauce, liver pâté · wide drinks list', cuisine_type: 'yakitori',
    website: 'http://ginza-birdland.sakura.ne.jp/index.html', gmaps: gm('銀座バードランド 塚本素山ビル'), menu_url: null,
    notes: "[Yakitori · the Ginza classic beside Sukiyabashi Jiro] A 33-seat basement yakitori restaurant in the same building as Sukiyabashi Jiro, just off Sukiyabashi crossing; look for the chicken sign at Ginza Station exit C6. The omakase course (¥9,800 in 2026) opens with a clean liver pâté, then about eight well-grilled skewers, including clean-tasting liver and tsukune with egg-yolk sauce, with salad and tofu between. Staff keep an eye on each guest's pace, and English-speaking staff draw many overseas visitors. A wide drinks list, with beer at ¥1,080; a 10% service charge is added. Two reviewers found it pricey for what it is.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 4-chōme (opening date not given)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Liver; tsukune.',
      anecdotes: [
        { text: '"I particularly enjoyed the liver, which had no unpleasant odor, and the tsukune topped with egg yolk sauce. It was also nice to enjoy a salad and tofu as palate cleansers between skewers." — September 2026.', source: R + 'B536559808/' },
        { text: '"For two people: Course for JPY 9,800 x 2, Beer (JPY 1,080) x 5." — July 2026.', source: R + 'B531486439/' },
      ],
      japanese_sources_summary: '食べログ: 銀座バードランド、銀座4-2-15 塚本素山ビルB1F、銀座駅C6出口に鶏の絵の看板、33席、火〜金17:00〜22:00、土17:00〜21:30、日月祝休、公式サイト ginza-birdland.sakura.ne.jp。2026年の口コミ: 数寄屋橋交差点そば、すきやばし次郎の隣、英語を話すスタッフ、おまかせコース9,800円(串8本、サービス料10%)、臭みのないレバーのパテ、レバー、卵黄のたれのつくね、箸休めのサラダと豆腐、提供のペースがちょうどよい、ビール1,080円、外国人客が多い、値段の割に高いとの声も。',
      confidence: 'medium', sources: [TB, R + 'B536559808/', R + 'B531486439/', R + 'B530987659/', R + 'B534789187/'] },
    cultural_comfort: { level: 'english', note: 'English-speaking staff (June 2026 review, B530987659).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-2-15 塚本素山ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目2番15号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531486439/'],
    price_note: 'Course price from a July 2026 review.', last_checked: TODAY, items: [
      it('おまかせコース', 'omakase koosu', 'Omakase yakitori course', '¥9,800', 'Courses', 'ask', 'no', 'July 2026.', 'omakase'),
      it('つくね 卵黄だれ', '', 'Tsukune with egg-yolk sauce', '', 'Skewers', 'ask', 'no', '', 'tsukune'),
      it('レバーのパテ', '', 'Chicken liver pâté', '', 'Starters', 'ask', 'no', '', 'liver_pate'),
    ] }, {
    cuisine: '銀座の老舗の焼き鳥・おまかせコース9,800円・臭みのないレバー、卵黄だれのつくね、レバーのパテ・酒の種類が豊富',
    neighborhood: '銀座四丁目、数寄屋橋交差点そばの塚本素山ビルB1F(すきやばし次郎の隣)。銀座駅C6出口',
    gf_detail: '要確認。おまかせの焼き鳥で、つくねは卵黄だれ。味付けやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。鶏の串、レバーのパテ。',
    notes: '[焼き鳥・すきやばし次郎の隣の銀座の老舗] すきやばし次郎と同じビルの地下、数寄屋橋交差点すぐの33席の焼き鳥店。銀座駅C6出口の鶏の看板が目印。おまかせコース(2026年は9,800円)は臭みのないレバーのパテに始まり、よく焼けた串が8本ほど。臭みのないレバーや卵黄だれのつくね、合間にサラダと豆腐。スタッフは客の食べるペースを見てくれ、英語を話すスタッフがいるため海外からの客も多め。酒の種類は豊富でビールは1,080円、サービス料10%。値段の割に高いという声も二つ。',
  });
}

// ================================================================ 銀熊茶寮
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13039211/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '14:00'], ['17:00', '22:30']);
  put({
    id: 'tokyo_ginkuma_saryo_ginza6', name: '銀熊茶寮 (Ginkuma Saryo)', category: 'OMNI',
    lat: 35.671188, lng: 139.760883,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppanyaki of black Wagyu, Ise lobster, abalone and king crab, plus a hamburg lunch; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu, lobster, abalone, crab.',
    hours_raw: 'Mon–Sat 11:30–14:00 (L.O. 13:30) and 17:00–22:30 (L.O. 21:30); holidays 17:00–22:00; closed Sundays (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Nishi-Ginza Bldg 7F — 335 m from Ginza Stn',
    cuisine: 'Teppanyaki in private rooms (up to 12) · black Wagyu, Ise lobster, black abalone, king crab · hamburg lunch over ¥3,000 · shoes off', cuisine_type: 'other',
    website: 'https://tokyo-rf.com/brand/#ginkuma', gmaps: gm('銀熊茶寮 西銀座ビル'), menu_url: null,
    notes: "[Teppanyaki · shoes-off private rooms in Ginza 6-chōme] A calm 34-seat teppanyaki on a seventh floor, open since 2007, where you take your shoes off and sit in private rooms (up to 12) or at sunken horigotatsu counters, with soft piano and jazz. Staff bow you in at the lift. The chef's omakase runs seasonal appetizers, tender black Wagyu and seafood teppan such as black abalone and Ise lobster. A Saturday-lunch hamburg steak (over ¥3,000) won over a sceptic. Attentive, accommodating service suits anniversaries and business dinners; one diner found the seating less suited to client meetings.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 February 2007 (Tabelog)', background: 'Group-run (tokyo-rf.com).', philosophy: null, specialty: 'Black Wagyu teppan.',
      anecdotes: [
        { text: '"The chef\'s omakase course began with seasonal appetizers, followed by the main dish of tender and flavorful black-haired Wagyu beef… black abalone and Ise lobster." — September 2026.', source: R + 'B536482040/' },
        { text: '"When the elevator doors opened on the 7th floor, the staff was already bowing to greet me." — September 2026, lunch.', source: R + 'B536697538/' },
      ],
      japanese_sources_summary: '食べログ: 銀熊茶寮(ぎんくまさりょう)、銀座6-3-11 西銀座ビル7F、銀座駅から335m、34席(掘りごたつのカウンターあり)、月〜土11:30〜14:00・17:00〜22:30、祝17:00〜22:00、日休、2007年2月14日開店、運営 tokyo-rf.com。店の紹介: 厳選の黒毛和牛、タラバガニや伊勢海老など全国の魚介、季節の野菜、最大12名の完全個室。2026年の口コミ: 靴を脱いで上がる、ピアノとジャズの静かな個室、シェフのおまかせ(季節の前菜、黒毛和牛、黒鮑と伊勢海老)、鹿児島のウイスキーのハイボール、エレベーターを降りるとスタッフがお辞儀、土曜ランチの3,000円超のハンバーグ、接待や記念日に、席の配置は商談向きではないとの声も。',
      confidence: 'medium', sources: [TB, R + 'B536482040/', R + 'B536697538/', R + 'B537111372/', R + 'B537776215/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; private rooms.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Responsive to the diner’s inquiries and requests.', source: R + 'B537111372/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-3-11 西銀座ビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目3番11号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536482040/', R + 'B536697538/'],
    price_note: 'No course prices captured; lunch hamburg over ¥3,000 (September 2026).', last_checked: TODAY, items: [
      it('シェフのおまかせコース', '', 'Chef’s omakase: appetizers, black Wagyu, abalone, Ise lobster', '', 'Courses', 'ask', 'no', 'September 2026.', 'omakase'),
      it('ハンバーグランチ', '', 'Hamburg steak lunch', '¥3,000〜', 'Lunch', 'ask', 'no', 'Over ¥3,000, September 2026.', 'hamburg_lunch'),
    ] }, {
    cuisine: '個室の鉄板焼き(最大12名)・黒毛和牛、伊勢海老、黒鮑、タラバガニ・3,000円超のハンバーグランチ・靴を脱いで',
    neighborhood: '銀座六丁目、西銀座ビル7F。銀座駅から335m',
    gf_detail: '要確認。黒毛和牛、伊勢海老、鮑、タラバガニの鉄板焼きと昼のハンバーグで、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛、伊勢海老、鮑、カニ。',
    notes: '[鉄板焼き・銀座六丁目の靴を脱ぐ個室] 2007年開店、ビル7階の落ち着いた34席の鉄板焼きで、靴を脱いで個室(最大12名)か掘りごたつのカウンターへ。ピアノとジャズが静かに流れます。エレベーターを降りるとスタッフがお辞儀で出迎え。シェフのおまかせは季節の前菜、柔らかな黒毛和牛、黒鮑や伊勢海老の鉄板焼き。土曜ランチの3,000円超のハンバーグも好評。丁寧で融通のきくサービスは記念日や接待向きですが、席の配置は商談には向かないという声も。',
  });
}

// ================================================================ 目白 旬香亭 丸の内店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13297328/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_mejiro_shunkoutei_marunouchi', name: '目白 旬香亭 丸の内店 (Mejiro Shunkoutei)', category: 'OMNI',
    lat: 35.67795, lng: 139.761063,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: mixed fry, croquettes, fried scallops and oysters, curry rice and hamburg.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg, fried seafood, cutlets.',
    hours_raw: 'Mon–Sat and holidays 11:00–15:00 (L.O. 14:00) and 17:00–22:00 (L.O. 21:00); closed Sundays (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Marunouchi 3-chōme, Nijūbashi Square B1F — direct from Nijūbashimae Stn',
    cuisine: 'Second shop of Michelin-listed Mejiro yōshoku · thick hamburg, mixed fry, croquettes · ¥5,500 free-flow course ending in curry', cuisine_type: 'yoshoku',
    website: 'https://shunkoutei.jp/', gmaps: gm('目白 旬香亭 丸の内店 二重橋スクエア'), menu_url: null,
    notes: "[Yōshoku · Mejiro's Shunkōtei in Marunouchi] The second branch, opened June 2024 in the basement of Nijūbashi Square, of Mejiro Shunkōtei, listed in the Michelin Guide Tokyo ten years running. It serves 'new yet nostalgic' Western dishes with traditional technique. Lunch regulars come for the hamburg-and-fry set (¥1,600: a thick hamburg in slightly bitter demi-glace with fried shrimp and croquette) and the mixed fry (shrimp, squid, tenderloin cutlet, croquette, with optional fried oysters), served with mushroom potage and rice. The ¥5,500 evening course with free-flow runs appetizers, fried scallops, a hamburg main and curry rice to finish. One private room (up to 4).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2024 (Tabelog); second shop of Mejiro Shunkoutei', background: 'Multi-shop (shunkoutei.jp).', philosophy: '"New yet nostalgic Western cuisine" (Tabelog listing).', specialty: 'Hamburg; fried dishes.',
      anecdotes: [
        { text: '"I ordered the mixed fry (shrimp, squid, tenderloin cutlet, and croquette) with an additional topping of fried oysters. The meal also came with a set of mushroom potage and rice." — October 2026.', source: R + 'B537682476/' },
        { text: '"The course started with an assortment of appetizers, followed by fried scallops, and for the main dish, I chose the hamburger steak. The meal concluded with curry rice." — October 2026, ¥5,500.', source: R + 'B537847875/' },
      ],
      japanese_sources_summary: '食べログ: 目白 旬香亭 丸の内店、千代田区丸の内3-2-3 二重橋スクエアB1F、二重橋前駅直結、34席(テーブル・個室1)、月〜土祝11:00〜15:00・17:00〜22:00、日休、2024年6月1日開店、公式サイト shunkoutei.jp。店の紹介: ミシュランガイド東京に10年連続掲載の目白 旬香亭の2号店、「新しくて懐かしい洋食」。2026年10月の口コミ: 厚くて肉々しいハンバーグ、ミックスフライ(海老・イカ・ヒレカツ・コロッケ)に牡蠣フライ追加、マッシュルームのポタージュとライス、飲み放題付きコース5,500円(前菜、帆立のフライ、ハンバーグ、カレーライス)、サクサクのコロッケ。',
      confidence: 'medium', sources: [TB, R + 'B537682476/', R + 'B537847875/', R + 'B531719594/', R + 'B537424364/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Station-connected; private room.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0005 東京都千代田区丸の内3-2-3 二重橋スクエア B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区丸の内三丁目2番 (lot) 35m; 744 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537847875/', R + 'B537682476/', R + 'B531719594/'],
    price_note: 'Course price from an October 2026 review.', last_checked: TODAY, items: [
      it('飲み放題付きコース', '', 'Course with free-flow: appetizers, fried scallops, hamburg, curry rice', '¥5,500', 'Courses', 'no', 'no', 'October 2026.', 'course5500'),
      it('ミックスフライ', 'mikkusu furai', 'Mixed fry: shrimp, squid, tenderloin cutlet, croquette', '', 'Lunch', 'no', 'no', 'October 2026.', 'mixed_fry'),
      it('ハンバーグとフライのセット', '', 'Hamburg and fry set: hamburg in demi-glace, fried shrimp, croquette', '¥1,600', 'Lunch', 'no', 'no', 'October 2026.', 'hamburg_fry'),
    ] }, {
    cuisine: 'ミシュラン掲載の目白の洋食の2号店・厚いハンバーグ、ミックスフライ、コロッケ・カレーで締める飲み放題付きコース5,500円',
    neighborhood: '丸の内三丁目、二重橋スクエアB1F。二重橋前駅直結',
    gf_detail: 'グルテンフリーではありません。ミックスフライ、コロッケ、帆立や牡蠣のフライ、カレーライス、ハンバーグ。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、魚介のフライ、カツ。',
    notes: '[洋食・目白の旬香亭を丸の内で] ミシュランガイド東京に10年連続掲載の「目白 旬香亭」の2号店で、2024年6月に二重橋スクエアの地下に開店。伝統の技で「新しくて懐かしい洋食」を出します。昼の常連が目当てにするのはハンバーグとフライのセット(1,600円、ほろ苦いデミグラスの分厚いハンバーグにエビフライとコロッケ)と、海老・イカ・ヒレカツ・コロッケのミックスフライ(牡蠣フライの追加も)で、マッシュルームのポタージュとライス付き。夜の5,500円の飲み放題付きコースは、前菜、帆立のフライ、ハンバーグのメイン、締めのカレーライス。個室が一つ(4名まで)。',
  });
}

// ================================================================ ラ・プティ・メルスリー ルミネ有楽町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130102/13132824/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '21:00']);
  put({
    id: 'tokyo_la_petite_mercerie_lumine_yurakucho', name: 'ラ・プティ・メルスリー ルミネ有楽町店 (la petite mercerie)', category: 'OMNI',
    lat: 35.673559, lng: 139.762962,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a cake café (shortcakes, cheesecake, afternoon tea) with doria and bread lunches.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: cream cakes, cheesecake, bacon doria.',
    hours_raw: 'Daily 11:00–21:00 (L.O. 20:30); closures follow Lumine Yūrakuchō (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Lumine Yūrakuchō, Lumine 1 4F — by Yūrakuchō Stn',
    cuisine: 'Cake café · Mercerie afternoon tea (no booking, even evenings) · strawberry shortcakes, cheesecake · pumpkin and bacon doria lunch', cuisine_type: 'cafe',
    website: 'https://la-petite-mercerie.jp/', gmaps: gm('ラ・プティ・メルスリー ルミネ有楽町'), menu_url: null,
    notes: "[Café · cakes and afternoon tea in Lumine Yūrakuchō] A bright, pretty 30-seat café on Lumine 1's fourth floor, open since 2011. The Mercerie afternoon tea (¥2,500 with a drink) needs no booking, even in the evening; pick a cake, such as a seasonal Shine Muscat shortcake, alongside canelé, cookies with ice cream and a chicken sandwich. Cakes include a pink domestic-strawberry Melusine shortcake and a rich cheesecake; drinks include a sweet-tart raspberry soda. Weekday lunch brings dishes like thick-cut bacon and pumpkin doria with crisp bread. Attentive staff.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 October 2011 (Tabelog)', background: 'Café brand (la-petite-mercerie.jp).', philosophy: null, specialty: 'Shortcakes; afternoon tea.',
      anecdotes: [
        { text: '"Delicious afternoon tea available without reservation even at night!… You can choose a piece of cake, and I went with the limited-time Shine Muscat shortcake!" — September 2026.', source: R + 'B535494723/' },
        { text: '"I ordered the \'Thick-Cut Bacon and Pumpkin Doria.\'… the bread that came with the lunch set was crispy and tasty." — September 2026.', source: R + 'B536507780/' },
      ],
      japanese_sources_summary: '食べログ: ラ・プティ・メルスリー ルミネ有楽町店、千代田区有楽町2-5-1 ルミネ有楽町店 ルミネ1 4F、30席、毎日11:00〜21:00、休みはルミネ有楽町に準ずる、2011年10月28日開店、公式サイト la-petite-mercerie.jp。2026年の口コミ: ラズベリーソーダ、予約なしで夜もアフタヌーンティー、メルスリーアフタヌーンティー(ケーキを選べる、期間限定のシャインマスカットのショートケーキ)、国産苺のメリュジーヌのショートケーキ、チーズケーキ、厚切りベーコンとかぼちゃのドリア、ランチのパン、丁寧な接客。',
      confidence: 'medium', sources: [TB, R + 'B535494723/', R + 'B536507780/', R + 'B535876145/', R + 'B532783217/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No booking needed for afternoon tea.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町2-5-1 ルミネ有楽町店 ルミネ1 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町二丁目5番 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535494723/', R + 'B536507780/'],
    price_note: 'Afternoon tea price from a September 2026 review; reviewers spend under ¥1,000 to ¥3,000.', last_checked: TODAY, items: [
      it('メルスリーアフタヌーンティー', '', 'Mercerie afternoon tea with a cake of your choice', '¥2,500', 'Tea', 'no', 'no', 'September 2026.', 'afternoon_tea'),
      it('国産苺のメリュジーヌのショートケーキ', '', 'Domestic-strawberry Melusine shortcake', '', 'Cakes', 'no', 'no', 'September 2026.', 'melusine'),
      it('厚切りベーコンとかぼちゃのドリア', '', 'Thick-cut bacon and pumpkin doria (lunch)', '', 'Lunch', 'no', 'no', 'September 2026.', 'doria'),
    ] }, {
    cuisine: 'ケーキのカフェ・予約なしで夜もメルスリーアフタヌーンティー・苺のショートケーキ、チーズケーキ・かぼちゃとベーコンのドリアのランチ',
    neighborhood: 'ルミネ有楽町 ルミネ1 4F。有楽町駅のそば',
    gf_detail: 'グルテンフリーではありません。ショートケーキ、チーズケーキ、アフタヌーンティーのケーキカフェで、ドリアやパンのランチも。',
    vegan_detail: 'ヴィーガンではありません。クリームのケーキ、チーズケーキ、ベーコンのドリア。',
    notes: '[カフェ・ルミネ有楽町のケーキとアフタヌーンティー] ルミネ1の4階、2011年開店の明るくかわいい30席のカフェ。メルスリーのアフタヌーンティー(ドリンク付き2,500円)は夜でも予約なしで頼め、季節のシャインマスカットのショートケーキなどケーキを選べ、カヌレ、クッキーとアイス、チキンサンドも。ピンクの苺のスポンジの国産苺のメリュジーヌのショートケーキや濃厚なチーズケーキ、甘酸っぱいラズベリーソーダも。平日の昼は厚切りベーコンとかぼちゃのドリアなどに、カリッとしたパン。接客も丁寧です。',
  });
}

save();
