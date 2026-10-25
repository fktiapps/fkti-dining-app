// Ginza Station half-mile sweep (805 m), batch 43 — first non-Japanese candidates from the Tabelog crawl.
//   + Giovanni (6-seat Italian counter run single-handed by chef Yohei Tateno, revived in a Ginza 8-chōme back alley → MOM_AND_POP)
//   + И (Italian, opened 8 May 2026, third shop of the Daikanyama TACUBO group → OMNI)
//   + GOPAN銀座 (Hibiya rice-bowl and sandwich deli, lunch only; owner not named → OMNI)
//   + ラ・メゾン・ド・ビィ (organic, additive-conscious dessert salon with lunch and dinner courses; owner not named → OMNI)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ Giovanni
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13308892/'; const R = TB + 'dtlrvwlst/';
  const d = day(['19:00', '23:00']);
  put({
    id: 'tokyo_giovanni_ginza8', name: 'Giovanni', category: 'MOM_AND_POP',
    lat: 35.666303, lng: 139.763251,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free: a fixed Italian course of pastas (heart-shaped ravioli, capellini, shrimp-broth pasta), fried tortafritta and risotto; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of soft-shelled turtle, caviar, prawn, beef and pork, with mascarpone and panna cotta.',
    hours_raw: 'Mon–Sat 19:00–23:00; closed Sundays (Tabelog). Reservation only, mostly regulars; cancellation slots appear. Cards accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme back alley behind the Hōrai-bashi crossing, Ginza Park Bldg 1F, unsigned door with a painting — 5 min from Tsukiji-shijō or Shiodome Stn',
    cuisine: 'Six-seat Italian counter, one chef · seasonal Japanese ingredients · omakase with wine pairing', cuisine_type: 'other',
    website: null, gmaps: gm('Giovanni 銀座8-15-2 銀座パークビル'), menu_url: null,
    notes: "[Mom & Pop · the one-chef Italian counter] An L-shaped six-seat counter in a Ginza 8-chōme back alley, with no sign, only a painting at the door. Chef Yohei Tateno cooks every course alone. Reviewers say the chef trained for about three and a half years in Italy and Sicily and opened Giovanni in 2019 in Musashi-Koyama. It later moved to Ginza, disappeared for a while, and has now been revived here. The cooking is innovative Italian with seasonal Japanese ingredients, 'food should become a memory'. A summer 2026 omakase (¥77,000 with wine pairing) ran to heart-shaped ravioli in Hamanako soft-shelled-turtle broth, tortafritta with prosciutto, chilled capellini with caviar, drunken botan shrimp, Manyō beef tataki with summer truffle, squid-ink risotto, Kobe pork, shrimp-broth pasta and passion-fruit panna cotta. A non-alcoholic pairing is offered. Seats go mostly to regulars, so watch for cancellations. Expect ¥60,000–100,000 a head.",
    chef_bio: {
      chef_name: 'Yohei Tateno (chef-owner, cooks alone)', roles: ['chef-owner'],
      origin: 'Opened 2019 in Musashi-Koyama; moved to Ginza; revived in Ginza 8-chōme (2026 reviews)',
      background: 'About three and a half years of training in Italy and Sicily (2026 review); works the counter single-handed (Tabelog).',
      philosophy: '"Food should become a memory." (2026 review)', specialty: 'Chilled capellini with caviar; tortafritta.',
      anecdotes: [
        { text: '"After training for about three and a half years in Italy and Sicily, he opened this popular restaurant in 2019, which has become difficult to book." — June 2026.', source: R + 'B530171256/' },
        { text: '"After opening in Musashi-Koyama and relocating to Ginza, this legendary Italian restaurant disappeared for a while. Now, Chef Yohei Tateno has revived \'Giovanni\' in a back alley of Ginza 8-chome." — September 2026.', source: R + 'B535665688/' },
        { text: '"Reservations are mostly filled by regulars, but cancellation slots are available." — September 2026.', source: R + 'B535514177/' },
      ],
      japanese_sources_summary: '食べログ: Giovanni、銀座8-15-2 銀座パークビル1F、築地市場駅・汐留駅から徒歩5分、カウンター6席、月〜土19:00〜23:00、日休、カード可、シェフ Yohei Tateno がひとりで切り盛り。2026年の口コミ: イタリア・シチリアで約3年半修業、2019年に武蔵小山で開店、銀座へ移転後しばらく休業し銀座8丁目の路地裏で復活、看板はなく絵が目印、旬の日本の食材のイタリアン、おまかせ77,000円(ワインペアリング、浜名湖のすっぽんのラビオリ、トルタフリッタと生ハム、キャビアの冷製カッペリーニ、牡丹海老、万葉牛のタタキ、イカ墨のリゾット、神戸ポーク、海老のパスタ、パッションフルーツのパンナコッタ)、ノンアルコールペアリングあり、常連でほぼ満席。',
      confidence: 'medium', sources: [TB, R + 'B530171256/', R + 'B535665688/', R + 'B535514177/', R + 'B535754453/', R + 'B505183889/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Unsigned door; reservation only; six seats around one chef. Non-alcoholic pairing available.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [{ text: 'Course includes fried tortafritta and several pastas.', source: R + 'B530171256/' }], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-15-2 銀座パークビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目15番2号 (go) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530171256/'],
    price_note: 'Course price from a June 2026 review (with wine pairing).', last_checked: TODAY, items: [
      it('おまかせコース(ワインペアリング)', 'omakase koosu', 'Seasonal Italian omakase with wine pairing', '¥77,000', 'Courses', 'no', 'no', '2026.', 'omakase_pairing'),
    ] }, {
    cuisine: 'シェフひとりの6席のイタリアン・旬の日本の食材・ワインペアリングのおまかせ',
    neighborhood: '銀座八丁目、蓬莱橋交差点裏の路地、銀座パークビル1F(看板なし、絵が目印)。築地市場駅・汐留駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。ラビオリ、カッペリーニ、海老のパスタ、揚げたトルタフリッタ、リゾットのコースで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。すっぽん、キャビア、海老、牛、豚、マスカルポーネやパンナコッタのコース。',
    notes: '[個人店・シェフひとりのイタリアン] 銀座八丁目の路地裏、看板はなく絵だけが目印のL字の6席カウンター。シェフの Yohei Tateno がひとりで全ての料理を作ります。口コミによれば、イタリアとシチリアで約3年半修業し、2019年に武蔵小山で開店。銀座へ移り、しばらく姿を消したのち、ここで復活しました。旬の日本の食材を使った革新的なイタリアンで、「料理は記憶になるべき」という考え。2026年夏のおまかせ(ワインペアリング込み77,000円)は、浜名湖のすっぽんの出汁のハート形ラビオリ、生ハムのトルタフリッタ、キャビアの冷製カッペリーニ、酔っ払い牡丹海老、夏トリュフの万葉牛のタタキ、イカ墨のリゾット、神戸ポーク、海老のパスタ、パッションフルーツのパンナコッタ。ノンアルコールのペアリングも。席はほぼ常連で埋まるのでキャンセル枠を狙って。1人6〜10万円ほど。',
  });
}

// ================================================================ И
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13320874/'; const R = TB + 'dtlrvwlst/';
  const e = day(['17:30', '23:00']), l = day(['17:30', '02:30']);
  put({
    id: 'tokyo_enu_tacubo_ginza', name: 'И (enu)', category: 'OMNI',
    lat: 35.668331, lng: 139.763497,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: an à la carte Italian menu of pastas, appetizers and meat; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: dishes such as chilled corn soup with sea urchin, and meat courses.',
    hours_raw: 'Mon, Tue, Sat and holidays 17:30–23:00 (food L.O. 21:30); Wed–Fri 17:30–2:30 (food L.O. 1:00) (Tabelog). Cards accepted.',
    hours: { 0: e, 1: e, 2: l, 3: l, 4: l, 5: e }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme, GINZA Kamui Bldg 2F (TACUBO dessert shop below) — 5–6 min from Ginza Stn',
    cuisine: 'À la carte Italian from the TACUBO group (opened 2026) · 8-seat counter · late nights midweek', cuisine_type: 'other',
    website: null, gmaps: gm('И enu 銀座7-11-14 GINZAカムイビル'), menu_url: null,
    notes: "[Italian · TACUBO's Ginza counter] An eight-seat counter on a quiet Ginza 7-chōme second floor, opened on 8 May 2026 as the third restaurant of Daikanyama's TACUBO group, with a TACUBO dessert shop downstairs. Unusually for a counter at this level, the menu is à la carte, though courses exist too. 2026 diners mention pasta, meat and appetizers, including a chilled corn soup with sea urchin. Drinks start around ¥3,000 and a meal runs about ¥30,000–50,000, aimed partly at overseas guests. One regular wishes it had an espresso machine. It stays open until 2:30 a.m. Wednesday to Friday.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 8 May 2026 (Tabelog), third shop of the TACUBO group (2026 reviews)', background: 'Group restaurant; no source read names the chef.', philosophy: null, specialty: 'À la carte Italian.',
      anecdotes: [
        { text: '"This is the third location of the TACUBO series, offering only à la carte Italian dishes." — September 2026.', source: R + 'B536369874/' },
        { text: '"Mr. Takubo, please get an espresso machine!" — October 2026.', source: R + 'B534368526/' },
      ],
      japanese_sources_summary: '食べログ: И、銀座7-11-14 GINZAカムイビル2F、銀座駅から徒歩5〜6分、カウンター8席、月火土祝17:30〜23:00、水〜金17:30〜翌2:30、2026年5月8日開店、カード可。2026年の口コミ: 代官山TACUBOグループの3店舗目、アラカルトのイタリアン(コースも)、1階にTACUBOのデザート店、雲丹をのせた冷製コーンスープ、ドリンク3,000円前後から、3〜5万円、インバウンド向けの価格帯。',
      confidence: 'low', sources: [TB, R + 'B536369874/', R + 'B534368526/', R + 'B534608056/', R + 'B537586301/', R + 'B536894624/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter-only, à la carte; drinks priced high. Late hours Wed–Fri.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-11-14 GINZAカムイビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Opened May 2026; Tabelog reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目11番14号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536369874/'],
    price_note: 'No dish prices captured; meals about ¥30,000–50,000 per 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chilled corn soup with sea urchin', '', 'À la carte', 'ask', 'no', '', 'corn_soup'),
      it('', '', 'Pasta (à la carte)', '', 'À la carte', 'no', 'ask', '', 'pasta'),
    ] }, {
    cuisine: 'TACUBOグループのアラカルトのイタリアン(2026年開店)・カウンター8席・平日は深夜まで',
    neighborhood: '銀座七丁目、GINZAカムイビル2F(1階はTACUBOのデザート店)。銀座駅から徒歩5〜6分',
    gf_detail: '実際上グルテンフリーではありません。パスタ、前菜、肉料理のアラカルトのイタリアンで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。雲丹をのせた冷製コーンスープや肉料理など。',
    notes: '[イタリアン・TACUBOの銀座のカウンター] 銀座七丁目の静かなビル2階、8席のカウンターで、代官山TACUBOグループの3店舗目として2026年5月8日に開店。1階にはTACUBOのデザート店。この価格帯のカウンターには珍しくアラカルト中心で、コースもあります。2026年の口コミでは、パスタ、肉、前菜、雲丹をのせた冷製コーンスープなど。ドリンクは3,000円前後からで、1人3〜5万円ほど、インバウンド客も意識した価格。エスプレッソマシンがあればという常連の声も。水〜金は深夜2時半まで営業。',
  });
}

// ================================================================ GOPAN銀座
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13274954/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_gopan_ginza_hibiya', name: 'GOPAN銀座 (Gopan Ginza)', category: 'OMNI',
    lat: 35.673146, lng: 139.760478,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as described: sandwiches ("sand pan") with fries alongside rice bowls; no gluten-free claims are made, and the rice bowls\' sauces are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: keema curry, pulled pork, taco rice with ground meat, onsen egg.',
    hours_raw: 'Mon, Wed–Fri 11:00–14:30; Tue 11:00–15:00; closed weekends and holidays (Tabelog). Mostly takeaway; a six-seat counter. Cards, IC and PayPay accepted.',
    hours: { 0: day(['11:00', '14:30']), 1: day(['11:00', '15:00']), 2: day(['11:00', '14:30']), 3: day(['11:00', '14:30']), 4: day(['11:00', '14:30']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yūrakuchō 1-chōme (Hibiya) alley, entered through a FamilyMart — within 5 min of Ginza, Hibiya or Yūrakuchō Stn',
    cuisine: '"Gohan + pan" lunch deli · daily rice bowls and sandwiches · ¥350 coffee, ¥450 frappés', cuisine_type: 'other',
    website: null, gmaps: gm('GOPAN銀座 有楽町1-2-4'), menu_url: null,
    notes: "[Deli · rice and bread for office lunches] A tiny lunch deli tucked into a Hibiya alley, reached through a FamilyMart, whose name joins 'gohan' (rice) and 'pan' (bread). Office workers take away a daily-changing rice bowl or a 'sand pan' sandwich; the sandwich set adds a mini salad and fries. 2026 orders included taco rice (¥780) and pulled pork, with Wednesday curry days (keema ¥680, onsen egg +¥100, in 2024). Drinks are cheap for the area: a banana frappé was ¥450 and blended coffee ¥350 in March 2026, with ¥100 off if you bring back the sleeve. There is a six-seat counter for eating in, but food still comes boxed.",
    chef_bio: { chef_name: null, roles: [], origin: 'Hibiya; opening date not found in a source read', background: 'No source names the owner.', philosophy: null, specialty: 'Daily rice bowls; sand-pan sandwiches.',
      anecdotes: [
        { text: '"I ordered the Taco Rice (JPY 780). It looked compact in the box, but surprisingly, it was quite filling and satisfying." — September 2026.', source: R + 'B535113319/' },
        { text: '"I took away a Banana Frappe (JPY 450) and a blended coffee (JPY 350). If you bring back the sleeve next time, you can get a discount of JPY 100." — March 2026.', source: R + 'B525549328/' },
      ],
      japanese_sources_summary: '食べログ: GOPAN銀座、有楽町1-2-4(ファミリーマートから入る)、6席、月水木金11:00〜14:30・火11:00〜15:00、土日祝休、カード・IC・PayPay可。口コミ: 「ごはん」と「パン」、サンドパン(ミニサラダとポテトのセット)、日替わり丼、水曜はカレー(2024年キーマ680円+温玉100円)、プルドポーク、2026年はタコライス780円、バナナフラッペ450円・ブレンドコーヒー350円(スリーブ持参で100円引き)。',
      confidence: 'low', sources: [TB, R + 'B535113319/', R + 'B525549328/', R + 'B486673406/', R + 'B502327948/', R + 'B472039672/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Takeaway-first lunch counter; hard to find (through a FamilyMart).' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0006 東京都千代田区有楽町1-2-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目2番4号 (go) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535113319/', R + 'B525549328/', R + 'B486673406/'],
    price_note: 'Prices from Tabelog reviews (2024–2026).', last_checked: TODAY, items: [
      it('タコライス', 'takoraisu', 'Taco rice bowl', '¥780', 'Rice bowls', 'ask', 'no', '2026.', 'taco_rice'),
      it('サンドパン(セット)', 'sando pan', 'Sandwich set with mini salad and fries', '', 'Sandwiches', 'no', 'ask', '', 'sand_pan'),
      it('ブレンドコーヒー', 'burendo koohii', 'Blended coffee', '¥350', 'Drinks', 'gf', 'vegan', '2026.', 'coffee'),
      it('バナナフラッペ', 'banana furappe', 'Banana frappé', '¥450', 'Drinks', 'ask', 'ask', '2026.', 'frappe'),
    ] }, {
    cuisine: '「ごはん+パン」のランチデリ・日替わり丼とサンド・コーヒー350円、フラッペ450円',
    neighborhood: '有楽町一丁目(日比谷)の路地、ファミリーマートから入る。銀座・日比谷・有楽町駅から徒歩5分以内',
    gf_detail: '記述上はグルテンフリーではありません。サンドパン(ポテト付き)と丼。グルテンフリーの表示はなく、丼のたれも書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。キーマカレー、プルドポーク、挽き肉のタコライス、温玉。',
    notes: '[デリ・会社員の昼のごはんとパン] 日比谷の路地、ファミリーマートの中から入る小さなランチデリで、店名は「ごはん」と「パン」から。会社員は日替わりの丼か「サンドパン」を持ち帰ります。サンドのセットはミニサラダとポテト付き。2026年はタコライス(780円)やプルドポーク、水曜はカレーの日(2024年でキーマ680円、温玉+100円)。ドリンクはこの界隈では安く、2026年3月でバナナフラッペ450円・ブレンドコーヒー350円、スリーブを持参すれば100円引き。6席のカウンターで食べられますが、料理は箱で出てきます。',
  });
}

// ================================================================ ラ・メゾン・ド・ビィ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13296803/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['12:00', '20:00']), we = day(['11:00', '20:00']);
  put({
    id: 'tokyo_la_maison_de_bi_ginza', name: 'ラ・メゾン・ド・ビィ (La Maison de Bi)', category: 'OMNI',
    lat: 35.671091, lng: 139.763187,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. An organic, additive-conscious dessert salon (parfaits, financiers, afternoon tea) with lunch and dinner courses; no gluten-free claim is made, and baked goods such as financiers usually contain wheat flour.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Organic fruit parfaits and coffee are the focus, but cream, butter and meat courses also appear; no vegan option is described.',
    hours_raw: 'Tue–Fri 12:00–20:00; Sat, Sun and holidays 11:00–20:00 (food L.O. 19:30); closed Mondays (Tabelog). 10% service charge after 18:00. Cards and IC accepted.',
    hours: { 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme on Miyuki-dōri, HULIC & New GINZA MIYUKI5 9F — 5 min from Ginza Stn',
    cuisine: 'Organic dessert salon · fruit parfaits and single-origin coffee · afternoon tea from ¥15,000 · courses', cuisine_type: 'sweets',
    website: null, gmaps: gm('ラ・メゾン・ド・ビィ 銀座5-5-12'), menu_url: null,
    notes: "[Sweets · the organic dessert salon] A ninth-floor dessert salon on Miyuki-dōri devoted to organic and additive-free ingredients, with private rooms for two or four. Reviewers describe parfaits built from naturally farmed fruit, such as an Amazon-cacao parfait with hand-picked Balangon banana from the Philippines and a Shine Muscat parfait. They come with light-roast single-origin coffees like Kenyan Tim Factory and Geisha. There are also hōjicha financiers and an organic afternoon tea from ¥15,000. The chef comes from pastry, and the salon now serves lunch and dinner courses with wine, about ¥10,000–30,000. A 10% service charge applies after 18:00.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 5-chōme; opening date not found in a source read', background: 'A 2026 diner says the chef has a pastry background; no source names the owner.', philosophy: null, specialty: 'Organic fruit parfaits; afternoon tea.',
      anecdotes: [
        { text: '"This dessert shop … offers sweets that go beyond the realm of additive-free ingredients." — September 2025.', source: R + 'B513105162/' },
        { text: '"Since the chef has a background as a pastry chef, the desserts were particularly delicious." — March 2026.', source: R + 'B526824015/' },
      ],
      japanese_sources_summary: '食べログ: ラ・メゾン・ド・ビィ、銀座5-5-12 HULIC&New GINZA MIYUKI5 9F、銀座駅から徒歩5分、20席・個室(2名・4名)、火〜金12:00〜20:00、土日祝11:00〜20:00、月休、18時以降サービス料10%、カード・IC可、オーガニックのアフタヌーンティー15,000円〜。口コミ(2025〜2026年): 無添加を超えたスイーツ、アマゾンカカオとバランゴンバナナのパフェ、シャインマスカットのパフェ、ケニアや ゲイシャの浅煎りコーヒー、ほうじ茶のフィナンシェ、ランチ・ディナーのコース、パティシエ出身のシェフ。',
      confidence: 'low', sources: [TB, R + 'B513105162/', R + 'B514653497/', R + 'B510187963/', R + 'B512398326/', R + 'B526824015/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet salon with private rooms; book for afternoon tea or courses.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-5-12 HULIC&New GINZA MIYUKI5 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目5番12号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B513105162/', R + 'B510187963/'],
    price_note: 'Afternoon tea price from the Tabelog listing; no other prices captured.', last_checked: TODAY, items: [
      it('オーガニック アフタヌーンティー', 'oogaanikku afutanuun tii', 'Organic afternoon tea', '¥15,000–', 'Sweets', 'ask', 'ask', '', 'afternoon_tea'),
      it('季節のパフェ', 'kisetsu no pafe', 'Seasonal organic fruit parfait', '', 'Sweets', 'ask', 'ask', '', 'parfait'),
      it('ほうじ茶のフィナンシェ', 'houjicha no finanshe', 'Hōjicha financier', '', 'Sweets', 'no', 'no', '', 'financier'),
      it('浅煎りコーヒー', 'asairi koohii', 'Light-roast single-origin coffee', '', 'Drinks', 'gf', 'vegan', '', 'coffee'),
    ] }, {
    cuisine: 'オーガニックのデザートサロン・果物のパフェとシングルオリジンのコーヒー・アフタヌーンティー15,000円〜・コース',
    neighborhood: '銀座五丁目のみゆき通り、HULIC&New GINZA MIYUKI5 9F。銀座駅から徒歩5分',
    gf_detail: '要確認。オーガニック・無添加にこだわるデザートサロン(パフェ、フィナンシェ、アフタヌーンティー)とランチ・ディナーのコース。グルテンフリーの表示はなく、フィナンシェなどの焼き菓子には一般に小麦粉が使われます。',
    vegan_detail: '要確認。オーガニックの果物のパフェとコーヒーが中心ですが、クリームやバター、肉のコースもあり、ヴィーガンの選択肢は書かれていません。',
    notes: '[スイーツ・オーガニックのデザートサロン] みゆき通りのビル9階、オーガニックと無添加の素材にこだわるデザートサロンで、2名・4名の個室も。口コミでは、自然栽培の果物を使ったパフェ(アマゾンカカオとフィリピンの手摘みのバランゴンバナナ、シャインマスカットなど)に、ケニアのティム・ファクトリーやゲイシャの浅煎りコーヒー。ほうじ茶のフィナンシェや、15,000円からのオーガニックのアフタヌーンティーも。パティシエ出身のシェフで、今はワインと合わせるランチ・ディナーのコース(1〜3万円ほど)も出しています。18時以降はサービス料10%。',
  });
}

save();
