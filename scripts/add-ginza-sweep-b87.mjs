// Ginza Station half-mile sweep (805 m), batch 87 — all-genre phase (all OMNI).
//   + 鳥よし 銀座店 (Corridor-gai branch of Nakameguro yakitori; Tabelog 100)
//   + 炭焼き 銀座まつもと (charcoal Wagyu hamburg and steak, est. 2021)
//   + 1/2 (Nibun no Ichi) (Ginza Sony Park B3 half-size yōshoku; two menu dishes labelled vegan)
//   + 箱根暁庵 銀座三越店 (Hakone soba house's Mitsukoshi branch, est. 2010)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ 鳥よし 銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13016582/'; const R = TB + 'dtlrvwlst/';
  const d = day(['16:00', '22:00']);
  put({
    id: 'tokyo_toriyoshi_ginza', name: '鳥よし 銀座店 (Tori Yoshi Ginza)', category: 'OMNI',
    lat: 35.670566, lng: 139.759774,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori by omakase (with a stop system) or à la carte, plus grilled deep-fried tofu, vegetables, grilled pork and rice dishes; no source describes seasonings or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken-skewer restaurant; grilled deep-fried tofu, bell peppers and shishito appear, but no source says how they are seasoned.',
    hours_raw: 'Daily 16:00–22:00 (L.O. 21:20) (Tabelog). Seating fee ¥1,000.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, Ginza Corridor-gai 1F — 4 min from Yūrakuchō or Ginza Stn',
    cuisine: 'Yakitori, Tabelog Yakitori 100 (2018–2025) · omakase with a stop system or à la carte · neck and chōchin · 18 counter seats', cuisine_type: 'yakitori',
    website: 'https://yakitori-toriyoshi.com/', gmaps: gm('鳥よし 銀座店 銀座コリドー街'), menu_url: null,
    notes: "[Yakitori · the bookable branch of Nakameguro's Tori Yoshi] A 34-seat branch on Ginza Corridor-gai (18 at the counter) of the Nakameguro yakitori house, chosen for Tabelog's Yakitori 100 every listing year from 2018 to 2025. Unlike the main shop, it takes reservations; walk-ins sometimes get a counter seat. Choose omakase, where you say stop when you've had enough, or order à la carte. Regulars rate the chicken neck and chōchin (the egg-bearing oviduct), which sell out, and the grilled deep-fried tofu and bell peppers. Skewers take time, and one sixth-time visitor in October 2026 got an uneven night. Seating fee ¥1,000; dinner runs about ¥10,000–15,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of the Nakameguro main shop', background: 'Multi-shop; registered on Tabelog as a corporate member.', philosophy: null, specialty: 'Neck; chōchin.',
      anecdotes: [
        { text: '"Unlike the Nakameguro main store, you can make reservations here… The yakitori is, of course, delicious, especially the chicken neck and the chouchin (chicken tail)!" — September 2026. (The reviewer\'s gloss; chōchin is normally the oviduct with its unlaid yolk.)', source: R + 'B513629183/' },
        { text: '"Unfortunately, the chouchin and heart were sold out… I opted for the omakase with a stop system." — October 2026, sixth visit.', source: R + 'B537491577/' },
      ],
      japanese_sources_summary: '食べログ: 鳥よし 銀座店、銀座7-2 銀座コリドー街1F、JR有楽町駅・銀座駅から徒歩4分、34席(カウンター18・テーブル16)、毎日16:00〜22:00(L.O. 21:20)、席料1,000円、予約可、2階のカウンター(約15席)のみ貸切可、公式サイト yakitori-toriyoshi.com、焼き鳥百名店 2018・2019・2021・2023・2024・2025。2026年の口コミ: 中目黒本店と違い予約ができる、首とちょうちん、厚揚げやピーマンもうまく焼く、予約なしでカウンターに座れた日も、おまかせ(ストップ制)とアラカルト、ちょうちんとハツが売り切れの日も、焼き手により出来にむらとの声、焼き鳥は少し時間がかかる、つまみ・豚串・ご飯ものまで。',
      confidence: 'medium', sources: [TB, R + 'B513629183/', R + 'B537491577/', R + 'B536333183/', R + 'B537691333/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase with a stop system.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2 銀座コリドー街 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537491577/', R + 'B513629183/'],
    price_note: 'No skewer prices captured; seating fee from Tabelog, ¥21,000 for two with drinks (October 2026).', last_checked: TODAY, items: [
      it('おまかせ(ストップ制)', '', 'Omakase yakitori, stop when full', '', 'Courses', 'ask', 'no', 'October 2026.', 'omakase'),
      it('ちょうちん', 'chōchin', 'Chōchin (oviduct with unlaid yolk)', '', 'Skewers', 'ask', 'no', 'Sells out.', 'chochin'),
      it('首', 'kubi', 'Chicken neck', '', 'Skewers', 'ask', 'no', '', 'neck'),
      it('席料', '', 'Seating fee', '¥1,000', 'Charge', '', '', 'Tabelog.', 'seat_fee'),
    ] }, {
    cuisine: '焼き鳥、食べログ焼き鳥百名店(2018〜2025)・ストップ制のおまかせかアラカルト・首とちょうちん・カウンター18席',
    neighborhood: '銀座七丁目、銀座コリドー街1F。有楽町駅・銀座駅から徒歩4分',
    gf_detail: '要確認。おまかせ(ストップ制)かアラカルトの焼き鳥に、厚揚げ、野菜、豚串、ご飯もの。味付けやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。鶏の串の店で、厚揚げ、ピーマン、ししとうもありますが味付けは書かれていません。',
    notes: '[焼き鳥・予約できる中目黒「鳥よし」の銀座店] 2018年から2025年まで選出のたびに食べログ焼き鳥百名店に入る中目黒の焼き鳥店の、銀座コリドー街にある34席(カウンター18)の支店。本店と違い予約ができ、予約なしでもカウンターに座れることも。おまかせ(満腹になったらストップ)かアラカルトで。常連が推すのは売り切れることもある首とちょうちん、上手に焼いた厚揚げやピーマン。串は少し時間がかかり、2026年10月に6回目だった客は焼きにむらがあったと。席料1,000円、夜は一人1万〜1万5千円ほど。',
  });
}

// ================================================================ 炭焼き 銀座まつもと
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13258683/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:45', '15:00'], ['17:30', '22:00']); const we = day(['11:45', '15:00']);
  put({
    id: 'tokyo_sumiyaki_ginza_matsumoto', name: '炭焼き 銀座まつもと (Sumiyaki Ginza Matsumoto)', category: 'OMNI',
    lat: 35.669649, lng: 139.762322,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled 100% Wagyu hamburg and steak with onion, balsamic and whole-grain mustard sauces; the lunch course adds soup and curry rice. No source lists hamburg ingredients or gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Wagyu hamburg and steak.',
    hours_raw: 'Mon–Fri 11:45–15:00 (L.O. 14:30) and 17:30–22:00 (L.O. 21:30); Sat, Sun and holidays 11:45–15:00; irregular closures (Tabelog). The listing also says "lunch only on Sundays and holidays" — check Saturday dinner. Dinner cover ¥500.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, New Center Bldg 2F, a little down a side street — 5 min from Ginza Stn',
    cuisine: 'Charcoal-grilled 100% black Wagyu hamburg, rare inside, pressed to your doneness on a hot plate · three sauces · ¥3,000 lunch course · steaks and wine at dinner', cuisine_type: 'other',
    website: 'https://ginza-matsumoto.com/', gmaps: gm('炭焼き 銀座まつもと ニューセンタービル'), menu_url: null,
    notes: "[Steak and hamburg · rare charcoal Wagyu hamburg in Ginza 7-chōme] A 36-seat second-floor grill, open since 2021, built around a hamburg of 100% Japanese Black Wagyu ground fresh each morning. Grilled rare over charcoal, it comes sizzling on an iron plate; you press it with a hot lid to the doneness you want, or staff cut it at the table. Three sauces come with it: onion, balsamic and a standout whole-grain mustard. A 200 g hamburg was ¥2,300 in 2026 (brown rice is an option), and the ¥3,000 lunch course adds appetizers, consommé and curry rice. Dinner turns to steaks, seasonal grills and a wine list (cover ¥500), with many overseas visitors. Private rooms for 6–20.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 10 May 2021 (Tabelog)', background: 'Registered on Tabelog as a corporate member.', philosophy: null, specialty: '100% Wagyu charcoal hamburg.',
      anecdotes: [
        { text: '"I opted for the modest 200g Wagyu Hamburg Steak (100% Wagyu) for JPY 2300. The patty, grilled to a perfect rare, was presented on a sizzling hot teppan plate, with a lid pressed down like a branding iron to achieve my desired doneness." — September 2026.', source: R + 'B537082066/' },
        { text: '"They even reheated the teppan that had cooled down while I was chatting over a glass of red wine." — September 2026.', source: R + 'B536202591/' },
      ],
      japanese_sources_summary: '食べログ: 炭焼き 銀座まつもと、銀座7-7-19 ニューセンタービル2F、銀座駅から徒歩5分、36席、平日11:45〜15:00・17:30〜22:00、土日祝11:45〜15:00(日祝はランチのみとの記載も)、不定休、ディナーはカバーチャージ500円、6〜20名の完全個室、2021年5月10日開店、公式サイト ginza-matsumoto.com。店の紹介: 黒毛和牛100%を炭火で焼くハンバーグ、ランチコース3,000円(前菜、自家製コンソメ、メイン、カレーライス)、夜はワインと季節の焼き物、ステーキ。2026年の口コミ: 毎朝挽く国産黒毛和牛で中は真っ赤なレア、熱い鉄の蓋で好みの焼き加減に、和牛ハンバーグ200g 2,300円、玄米、オニオン・バルサミコ・粒マスタードの3種のソース(粒マスタードが一番合う)、席で切り分けてくれる、冷めた鉄板を温め直してくれた、客は海外からの旅行者が多い、昼は約2,000円で夜は6,000円超。',
      confidence: 'medium', sources: [TB, R + 'B537082066/', R + 'B536202591/', R + 'B535145410/', R + 'B535219245/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas visitors (September 2026 review).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-7-19 ニューセンタービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目7番19号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537082066/', TB],
    price_note: 'Hamburg price from a September 2026 review; lunch course from the Tabelog listing.', last_checked: TODAY, items: [
      it('和牛ハンバーグ 200g', '', 'Charcoal-grilled 100% Wagyu hamburg, 200 g, three sauces', '¥2,300', 'Lunch', 'ask', 'no', 'September 2026.', 'hamburg200'),
      it('炭火焼き黒毛和牛100%ハンバーグ ランチコース', '', 'Lunch course: appetizers, consommé, Wagyu hamburg, curry rice', '¥3,000', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'lunch_course'),
      it('カバーチャージ', '', 'Dinner cover charge', '¥500', 'Charge', '', '', 'Tabelog.', 'cover'),
    ] }, {
    cuisine: '黒毛和牛100%の炭焼きハンバーグ、中はレアで鉄板の上で好みの焼き加減に・3種のソース・3,000円のランチコース・夜はステーキとワイン',
    neighborhood: '銀座七丁目、少し脇道に入ったニューセンタービル2F。銀座駅から徒歩5分',
    gf_detail: '要確認。オニオン、バルサミコ、粒マスタードのソースで食べる黒毛和牛100%の炭焼きハンバーグとステーキ、ランチコースにはスープとカレーライス。ハンバーグの材料やグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛のハンバーグとステーキ。',
    notes: '[ステーキ・ハンバーグ・銀座七丁目のレアな炭焼き和牛ハンバーグ] 2021年開店、ビル2階の36席。毎朝挽く黒毛和牛100%のハンバーグが看板で、炭火でレアに焼いて熱い鉄板で出し、熱い鉄の蓋を押し当てて好みの焼き加減にするか、席で切り分けてもらいます。ソースはオニオン、バルサミコ、とくに合う粒マスタードの3種。2026年は200gで2,300円(玄米も選べる)、3,000円のランチコースは前菜、コンソメ、カレーライス付き。夜はステーキ、季節の焼き物、ワイン(カバーチャージ500円)で、海外からの客も多め。6〜20名の個室あり。',
  });
}

// ================================================================ 1/2 (Nibun no Ichi)
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13305952/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ginzasonypark.com/nibunnoichi/';
  const d = day(['11:00', '21:00']);
  put({
    id: 'tokyo_nibun_no_ichi_ginza_sony_park', name: '1/2 (Nibun no Ichi)', category: 'OMNI',
    lat: 35.672066, lng: 139.763148,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly half-size yōshoku (katsu toast, croquettes, Napolitan, doria, omurice); Tabelog says allergy information is available, but no source names a gluten-free dish.',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'Two à la carte dishes are labelled vegan on the official menu: chickpea and fava-bean falafel steak, and maitake hummus (¥800 each, October 2026). Everything else on the menu (katsu, hamburg, omurice, cheese, cream desserts) is not vegan; ask about the soup and sides.',
    hours_raw: 'Daily 11:00–21:00 (food L.O. 20:00, drinks 20:30); weekdays 15:30–17:30 desserts and drinks only; closed on Ginza Sony Park closing days and over New Year (official site, Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Sony Park B3F, Ginza 5-chōme — at Ginza Stn exit B9',
    cuisine: 'Half-size yōshoku plates (two classics on one plate, ¥1,200–2,800) · two vegan dishes · kissaten desserts · natural-wine list · cashless only', cuisine_type: 'yoshoku',
    website: SITE, gmaps: gm('Nibun no Ichi Ginza Sony Park'), menu_url: SITE,
    notes: "[Yōshoku · half-size plates under Ginza Sony Park] Opened January 2025 three floors below Ginza Sony Park, run by Sony Enterprise, with 36 seats at low and high tables around a centre kitchen, under the old SONY neon sign from the Sony Building roof. Every plate pairs two yōshoku classics at half size, such as Napolitan with an egg sandwich (¥1,200), Ginza miso curry with katsu toast, or a hamburg with crab-cream croquette (¥1,900), so you can try several. Two à la carte dishes are labelled vegan: falafel steak and maitake hummus. Desserts include pudding à la mode (¥800) and a chocolate parfait; the wine list leans natural. Some find the portions small for the price. Cashless only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 January 2025 (Tabelog)', background: 'Run by Sony Enterprise Co., Ltd. (official site).', philosophy: '"A little less — that\'s what makes it good" (ちょっと少ない、だから良い, official site).', specialty: 'Half-size plates; katsu toast.',
      anecdotes: [
        { text: '"This restaurant operates on the concept of serving dishes at about half the usual size… the smaller portions allowed me to sample a variety of dishes." — October 2026.', source: R + 'B537644534/' },
        { text: '"I ordered the pudding à la mode, which was JPY 800… I think the cost performance is poor." — October 2026.', source: R + 'B537108103/' },
      ],
      japanese_sources_summary: '公式サイト(ginzasonypark.com/nibunnoichi、Sony Enterprise): [ Nibun no Ichi ]、銀座5-3-1 Ginza Sony Park B3、11:00〜21:00(L.O. 20:00)、平日15:30〜17:30はデザートとドリンクのみ、休業はGinza Sony Parkの休園日と年末年始、現金不可・キャッシュレスのみ、ハイテーブルとローテーブル各20席程度、6〜8名の個室、元ソニービル屋上の "SONY" ネオン。メニュー: 洋食の定番二種を一皿にした1/2プレート(大人のナポリタン×たまごサンド1,200円、銀座味噌カレー×銀座カツトースト1,600円、クラシックオムライス×牛バラハヤシライス1,600円、半熟卵onハンバーグ×かにクリームコロッケ1,900円、三種のきのこのドリア×銀座牛カツトースト2,800円ほか)、アラカルトにひよこ豆とそら豆のファラフェルステーキ[ヴィーガン]800円、舞茸のフムス[ヴィーガン]800円、デザートにプリン・ア・ラ・モード800円など、ナチュラルワイン中心。食べログ: 36席、2025年1月26日開店、アレルギー表示あり、英語メニューあり。2026年の口コミ: 半分ほどのサイズで色々試せる、チョコレートパフェ、カレーとカツサンド、量が少ない・割高との声も。',
      confidence: 'high', sources: [SITE, TB, R + 'B537644534/', R + 'B537108103/', R + 'B537444760/', R + 'B535955633/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu with photos (Tabelog).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Tabelog lists allergy information as available.', source: TB }], positives: [{ text: 'Two dishes labelled [ヴィーガン] on the official menu.', source: SITE }], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-3-1 Ginza Sony Park B3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site lists an upcoming 27 October closure; Tabelog reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目3番1号 (go) 25m; ${TODAY}`,
  }, { verified: 'authoritative', confidence: 'high', sources: [SITE],
    price_note: 'Official menu page as fetched 2026-10-25 (tax included).', last_checked: TODAY, items: [
      it('ひよこ豆とそら豆のファラフェルステーキ', '', 'Chickpea and fava-bean falafel steak [vegan]', '¥800', 'À la carte', 'ask', 'yes', 'Labelled vegan.', 'falafel'),
      it('舞茸のフムス', '', 'Maitake hummus [vegan]', '¥800', 'À la carte', 'ask', 'yes', 'Labelled vegan.', 'hummus'),
      it('大人のナポリタン × タマゴたまごサンド', '', 'Napolitan with king-oyster mushroom × egg sandwich', '¥1,200', '1/2 plates', 'no', 'no', '', 'napolitan_egg'),
      it('銀座味噌カレー × 銀座カツトースト', '', 'Ginza miso spice curry × katsu toast', '¥1,600', '1/2 plates', 'no', 'no', '', 'curry_katsu'),
      it('クラシックオムライス × 牛バラハヤシライス', '', 'Classic omurice × beef-belly hayashi rice', '¥1,600', '1/2 plates', 'ask', 'no', '', 'omurice_hayashi'),
      it('半熟卵 on ハンバーグ × かにクリームコロッケ', '', 'Hamburg with soft egg × crab-cream croquette', '¥1,900', '1/2 plates', 'no', 'no', '', 'hamburg_croquette'),
      it('三種のきのこのドリア × 銀座牛カツトースト', '', 'Three-mushroom doria × beef-katsu toast', '¥2,800', '1/2 plates', 'no', 'no', '', 'doria_gyukatsu'),
      it('プリン・ア・ラ・モード', '', 'Pudding à la mode', '¥800', 'Desserts', 'ask', 'no', '', 'pudding'),
    ] }, {
    cuisine: '半分サイズの洋食プレート(定番二種を一皿に、1,200〜2,800円)・ヴィーガンの料理が二品・喫茶のデザート・ナチュラルワイン・キャッシュレスのみ',
    neighborhood: '銀座五丁目、Ginza Sony Park B3F。銀座駅B9出口すぐ',
    gf_detail: '要確認。カツトースト、コロッケ、ナポリタン、ドリア、オムライスなど半分サイズの洋食が中心。食べログにはアレルギー表示ありとありますが、グルテンフリーの料理は書かれていません。',
    vegan_detail: '公式メニューでヴィーガンと表示されたアラカルトが二品: ひよこ豆とそら豆のファラフェルステーキ、舞茸のフムス(各800円、2026年10月)。そのほか(カツ、ハンバーグ、オムライス、チーズ、クリームのデザート)はヴィーガンではありません。スープや付け合わせは確認を。',
    notes: '[洋食・Ginza Sony Parkの地下の半分サイズのプレート] 2025年1月、Ginza Sony Parkの地下3階に開店、運営はソニー・エンタープライズ。センターキッチンを囲むローテーブルとハイテーブルの36席で、かつてソニービルの屋上にあった "SONY" のネオンが灯ります。どの皿も洋食の定番二種を半分サイズで盛り合わせ、大人のナポリタン×たまごサンド(1,200円)、銀座味噌カレー×銀座カツトースト、ハンバーグ×かにクリームコロッケ(1,900円)など、いろいろ試せます。アラカルトにはヴィーガン表示のファラフェルステーキと舞茸のフムス。デザートはプリン・ア・ラ・モード(800円)やチョコレートパフェ、ワインはナチュラル中心。値段の割に量が少ないという声も。現金不可。',
  });
}

// ================================================================ 箱根暁庵 銀座三越店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13115793/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '21:00']);
  put({
    id: 'tokyo_hakone_akatsukian_ginza_mitsukoshi', name: '箱根暁庵 銀座三越店 (Hakone Akatsuki An)', category: 'OMNI',
    lat: 35.670807, lng: 139.766,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: buckwheat noodles with a wheat binder are standard (one reviewer judged these about 2:8, but no source publishes the ratio), the tsuyu is a soy-sauce dipping sauce, and tempura is on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dipping sauce is made with a blend of Makurazaki katsuobushi (bonito), for both hot and cold soba.',
    hours_raw: 'Daily 11:00–21:00 (L.O. 20:30); closed on Ginza Mitsukoshi closing days (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Mitsukoshi New Bldg 11F restaurant floor, Ginza 4-chōme — 3 min from Ginza Stn',
    cuisine: 'Stone-milled, hand-made soba from the Hakone soba house · charcoal-black soba · tororo zaru ¥1,800 · duck tsukesoba · no break between lunch and dinner', cuisine_type: 'udon_soba',
    website: 'http://www.mitsukoshi.co.jp/shop?omeNextPageName=/pc/store/jsp/1210/restaurant/index.jsp#floor11', gmaps: gm('箱根暁庵 銀座三越'), menu_url: null,
    notes: "[Soba · Hakone's Akatsuki An on the Mitsukoshi restaurant floor] The Ginza Mitsukoshi branch, since 2010, of the Hakone soba house. Buckwheat is stone-milled in-house every day and the noodles are made by hand in view; the head chef, Ozaki, learned directly from soba master Kunihiro Takahashi. The dipping sauce blends several Makurazaki katsuobushi, with different broths for hot and cold soba. The striking dish is a smooth, firm, jet-black charcoal soba. Tororo zaru (¥1,800 in 2026) and tender duck tsukesoba are regulars' picks. Open straight through the afternoon, it is handy for a 4 pm lunch, and families and overseas visitors fill the 34 seats (six counter, six semi-private). Kind, attentive staff.",
    chef_bio: { chef_name: 'Ozaki (head chef)', roles: ['head chef'], origin: 'Branch opened 11 September 2010 (Tabelog)', background: 'Learned soba-making directly from master Kunihiro Takahashi (Tabelog listing). Department-store branch of a Hakone shop.', philosophy: null, specialty: 'Stone-milled hand-made soba; charcoal soba.',
      anecdotes: [
        { text: '"The soba was blackened with charcoal, smooth yet firm in texture… The soba broth was pure white, thick, and delicious." — September 2026.', source: R + 'B536274035/' },
        { text: '"I ordered the Tororo Zaru for JPY 1800. The soba had a great texture and a wonderful aroma!" — October 2026.', source: R + 'B537848491/' },
      ],
      japanese_sources_summary: '食べログ: 箱根暁庵 銀座三越店、銀座4-6-16 銀座三越11F、銀座駅から徒歩3分、34席(カウンター6・テーブル22・半個室6)、毎日11:00〜21:00(L.O. 20:30)、休みは銀座三越に準ずる、2010年9月11日開店。店の紹介: 毎日石臼で自家製粉し目の前で手打ち、そば打ちの名人に直接学んだ料理長、枕崎の鰹節を数種合わせたつゆで温と冷でだしを変える。2026年の口コミ: 炭で黒くした真っ黒なそば(なめらかでコシがある)、そば湯は白く濃い、とろろざる1,800円、鴨つけそば、昼の時間を外した16時でも食べられる、海外からの客や家族連れが多い、カウンターで荷物を椅子に置くよう勧めてくれた親切なスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B536274035/', R + 'B537848491/', R + 'B537237419/', R + 'B536622470/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store restaurant floor.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-6-16 銀座三越 新館11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座四丁目6番16号 (go) is 93m off for the large Mitsukoshi block, so the Tabelog pin is kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537848491/', R + 'B536274035/'],
    price_note: 'Tororo zaru price from an October 2026 review.', last_checked: TODAY, items: [
      it('とろろざる', 'tororo zaru', 'Chilled soba with grated yam', '¥1,800', 'Soba', 'no', 'no', 'October 2026.', 'tororo_zaru'),
      it('黒いそば', '', 'Charcoal-black soba', '', 'Soba', 'no', 'no', 'September 2026.', 'black_soba'),
      it('鴨つけそば', '', 'Duck dipping soba', '', 'Soba', 'no', 'no', 'September 2026.', 'kamo_tsuke'),
    ] }, {
    cuisine: '箱根の蕎麦店の石臼挽き手打ちそば・炭で黒いそば・とろろざる1,800円・鴨つけそば・昼夜通し営業',
    neighborhood: '銀座四丁目、銀座三越 新館11Fのレストラン街。銀座駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。そばはつなぎに小麦粉を使うのが普通で(口コミで二八ほどとの感想はありますが割合は公表されていません)、つゆは醤油、天ぷらもあります。',
    vegan_detail: 'ヴィーガンではありません。つゆには枕崎の鰹節を数種合わせて使い、温と冷の両方とも。',
    notes: '[そば・三越のレストラン街の箱根暁庵] 2010年からある箱根の蕎麦店の銀座三越店。毎日石臼で自家製粉し、目の前で手打ちします。料理長はそば打ちの名人に直接学んだ人。つゆは枕崎の鰹節を数種合わせ、温と冷でだしを変えています。目を引くのは炭で黒くした、なめらかでコシのある真っ黒なそば。とろろざる(2026年は1,800円)と柔らかな鴨つけそばも人気。通し営業なので16時の遅い昼にも便利で、34席(カウンター6、半個室6)には家族連れや海外からの客も。親切で気の利くスタッフ。',
  });
}

save();
