// Ginza Station half-mile sweep (805 m), batch 24 — Shimbashi Ekimae Bldg No. 1 heritage kissaten (724 m).
//   + パーラーキムラヤ (B1F, opened with the building in 1966/67; pudding à la mode)
//   + カフェテラス ポンヌフ (1F, 1967; third manager Uekusa since 2018; Napolitan and hamburg spaghetti)
// Neither is tagged mom-and-pop: no owner or family is named in a source read. Out of radius: 新橋駅前ビル2号館
// (819 m — 千嶋秩父) and ニュー新橋ビル (845 m). 三松 (stand soba) has closed (はるちゃんラーメン took its site).
// Sources: san-tatsu (2022 ×2), Tabelog /en/ listings + dated 2026 reviews. Pins: each shop's own Tabelog geo.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ パーラーキムラヤ
{
  const ST = 'https://san-tatsu.jp/articles/177772/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13056065/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['08:00', '19:30']);
  put({
    id: 'tokyo_parlor_kimuraya_shimbashi', name: 'パーラーキムラヤ (Parlor Kimuraya)', category: 'OMNI',
    lat: 35.666374, lng: 139.759455,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free in practice: Napolitan spaghetti and shrimp pilaf sets. The custard pudding contains no wheat as usually made, but no ingredients are published and the à la mode is assembled with other garnishes.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described: egg-rich custard pudding, vanilla ice cream, cream soda, Napolitan served with grated cheese.',
    hours_raw: 'Mon–Fri 08:00–19:30 (food L.O. 18:30); Sat 11:00–17:30 (food L.O. 16:30); closed Sundays and holidays (Tabelog). Cash only.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['11:00', '17:30']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi Ekimae Bldg No. 1 B1F — connected underground to Shimbashi Stn',
    cuisine: 'Kissaten since the building opened (1966/67) · firm pudding à la mode · Napolitan · cream soda · morning service', cuisine_type: 'kissaten',
    website: null, gmaps: gm('パーラーキムラヤ 新橋駅前ビル1号館'), menu_url: null,
    notes: "[Kissaten · since the Shōwa building opened] A basement coffee parlour that opened with the Shimbashi Ekimae Building itself. San-tatsu gives 1967, and some 2026 diners say 1966, the year the building was finished. A plastic-sample showcase marks the door, and regulars pick up a newspaper on the way to their seats; these days groups of young women come for the jun-kissa boom too. The draw is a classic pudding à la mode: a firm, eggy custard pudding with vanilla ice cream alongside (¥800 in 2022), or just pudding with whipped cream (¥530), or the 'Royal' without ice cream (¥720). There is also Napolitan with Tabasco and grated cheese (¥630) and cream soda (¥530). Shrimp pilaf comes as a set. It opens at 8 a.m. for commuters' morning coffee.",
    chef_bio: {
      chef_name: null, roles: ['kissaten (operator not named in sources read)'],
      origin: 'Opened with the Shimbashi Ekimae Building — 1967 (san-tatsu) or 1966 (2026 diners)',
      background: 'No source read names the owner or operator.',
      philosophy: null,
      specialty: 'Pudding à la mode; Napolitan; cream soda.',
      anecdotes: [
        { text: '新橋駅前ビルの開業と同じくオープンしたお店… サッと慣れた手つきで入り口に置いてある新聞や雑誌を手に取り席に座る常連さんから、最近の純喫茶ブームで訪れる女子グループまで.', source: ST },
        { text: '"I prefer firmer pudding over softer ones, so I was delighted to find it was just the right texture!" — October 2026.', source: R + 'B537709562/' },
      ],
      japanese_sources_summary: 'さんたつ(2022.5.27): パーラーキムラヤ、新橋駅前ビル1号館B1、昭和42年(1967)創業、ビルの開業と同じくオープン、食品サンプルのショーケース、常連と純喫茶ブームの女性客、プリンアラモード800円(固めのカスタードプリン・バニラアイス)、プリン530円、プリンローヤル720円、ナポリタン630円、クリームソーダ530円、営業8:00〜。食べログ: 月〜金8:00〜19:30、土11:00〜17:30、日祝休、現金のみ。2026年の口コミ: 1966年創業とも、海老ピラフのセット、昭和レトロ、店内禁煙。',
      confidence: 'medium', sources: [ST, TB, R + 'B525303917/', R + 'B536439079/', R + 'B537349633/', R + 'B537709562/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Plastic food samples at the door make ordering easy; non-smoking; cash only.' },
    safety: {
      dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'Firm custard pudding with vanilla ice cream.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル1号館 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; Shimbashi Ekimae Bldg No. 1 (GSI lot 新橋二丁目20番); each shop in the building on its own Tabelog geo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537349633/', R + 'B536833603/'],
    price_note: 'Prices from the May 2022 san-tatsu feature; expect increases.', last_checked: TODAY, items: [
      it('プリンアラモード', 'purin aramoodo', 'Pudding à la mode (firm custard pudding, vanilla ice cream)', '¥800', 'Sweets', 'ask', 'no', '2022.', 'pudding_a_la_mode'),
      it('プリン', 'purin', 'Pudding with whipped cream', '¥530', 'Sweets', 'ask', 'no', '2022.', 'pudding'),
      it('プリンローヤル', 'purin rooyaru', 'Pudding Royal (à la mode without ice cream)', '¥720', 'Sweets', 'ask', 'no', '2022.', 'pudding_royal'),
      it('ナポリタン スパゲティ', 'naporitan supagetti', 'Napolitan spaghetti', '¥630', 'Food', 'no', 'no', '2022.', 'napolitan'),
      it('海老ピラフ', 'ebi pirafu', 'Shrimp pilaf (also as a set)', '', 'Food', 'ask', 'no', '', 'shrimp_pilaf'),
      it('クリームソーダ', 'kuriimu sooda', 'Cream soda', '¥530', 'Drinks', 'ask', 'no', '2022.', 'cream_soda'),
    ] }, {
    cuisine: 'ビルと同時開業(1966/67年)の喫茶店・固めのプリンアラモード・ナポリタン・クリームソーダ・モーニング',
    neighborhood: '新橋二丁目、新橋駅前ビル1号館B1F。新橋駅と地下で直結',
    gf_detail: '実際上グルテンフリーではありません。ナポリタンや海老ピラフのセット。カスタードプリンは通常小麦を含みませんが、材料は公表されておらず、アラモードは他の飾りと一緒に盛り付けます。',
    vegan_detail: '記述上はヴィーガンではありません。卵たっぷりのプリン、バニラアイス、クリームソーダ、粉チーズを添えるナポリタン。',
    notes: '[喫茶店・昭和のビルと同時に開業] 新橋駅前ビルの開業と同時にオープンした地下の喫茶店。さんたつでは1967年、2026年の口コミではビル竣工の1966年とされています。入口には食品サンプルのショーケース。常連は慣れた手つきで新聞を取って席に着き、最近は純喫茶ブームで訪れる女性グループも。名物は王道のプリンアラモードで、固めで卵の風味がしっかりのカスタードプリンにバニラアイス(2022年で800円)、プリンとホイップだけの「プリン」(530円)、アイスなしの「プリンローヤル」(720円)も。タバスコと粉チーズを添えるナポリタン(630円)、クリームソーダ(530円)、海老ピラフのセットも。朝8時から、出勤前のモーニングに。',
  });
}

// ================================================================ カフェテラス ポンヌフ
{
  const ST = 'https://san-tatsu.jp/articles/205118/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13024964/'; const R = TB + 'dtlrvwlst/';
  const l = day(['11:00', '14:50']);
  put({
    id: 'tokyo_cafe_terrace_pont_neuf_shimbashi', name: 'カフェテラス ポンヌフ (Café Terrace Pont Neuf)', category: 'OMNI',
    lat: 35.666288, lng: 139.75957,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Thick 2.2 mm spaghetti, hamburg made with professional breadcrumbs, and a house sauce of minced meat and seasonings on both. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The Napolitan uses ham, the hamburg is a beef-and-pork mince, and the house sauce on both contains minced meat.',
    hours_raw: 'Mon–Thu 11:00–14:50; Fri 11:00–14:50 and 18:00/18:30 until sold out (about 21:00); closed Saturdays, Sundays and holidays (Tabelog, 2026). Cash only.',
    hours: { 0: l, 1: l, 2: l, 3: l, 4: day(['11:00', '14:50'], ['18:30', '21:00']) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimbashi 2-chōme, Shimbashi Ekimae Bldg No. 1 1F — 1 min from Shimbashi Stn (Shiodome exit)',
    cuisine: 'Shōwa café terrace (1967) turned yōshoku lunch house · Napolitan · hamburg spaghetti · Pont Neuf burg', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('カフェテラス ポンヌフ 新橋駅前ビル1号館'), menu_url: null,
    notes: "[Yōshoku · Napolitan since the Shōwa boom] 'Pont Neuf', French for 'new bridge', so 'Shin-bashi'. It opened in 1967, a year after the Shimbashi Ekimae Building was finished, as an ordinary jun-kissa of coffee, pudding and sandwiches. Under the second manager, in Japan's boom years, it turned to hearty food for Shimbashi's salarymen: Napolitan first, then hamburg spaghetti, the 'Pont Neuf burg' and hamburg sandwiches. The third manager, Uekusa, began in 2007 helping the long-serving ladies wash dishes, and took over in 2018. He thickened the boiled-ahead spaghetti from 2.0 mm to 2.2 mm. The Napolitan is mellow rather than sharp and uses ham, not bacon. The hamburg, beef-and-pork with pepper and garlic, is finished in the oven. Both share an original sauce of minced meat and seasonings. A food critic's praise made the Napolitan famous. In 2026: Napolitan ¥1,100, hamburg spaghetti ¥1,400, and on Friday nights a bacon-and-cheese Napolitan for ¥2,000. Diners call it a 2026 Tabelog top-100 yōshoku shop.",
    chef_bio: {
      chef_name: '植草 (Uekusa, third manager since 2018)', roles: ['manager (3rd generation of managers)'],
      origin: 'Opened 1967 in Shimbashi Ekimae Bldg No. 1',
      background: 'Uekusa came in around 2007, first helping the long-serving staff with dishes, then cooking; he became the third manager in 2018 when the second retired (san-tatsu, 2022). Not tagged mom-and-pop: no owner is named.',
      philosophy: null,
      specialty: 'Hamburg spaghetti; Napolitan; Pont Neuf burg.',
      anecdotes: [
        { text: '「前の店長は2.0mmのスパゲティだったんですけど、オレが任せてもらうようになってからさらに太くてある程度コシが残る2.2mmに替えました」', source: ST },
        { text: '「あるとき、ウチのナポリタンを食べた料理評論家の方が『ウマい！』って言ってくれてから人気になったみたいですね」', source: ST },
        { text: 'A wandering cardboard artist, Takagi Shiki, fell for the Pont Neuf burg; his sketches hang on the wall.', source: ST },
      ],
      japanese_sources_summary: 'さんたつ(2022.10.25): カフェテラス ポンヌフ、新橋駅前ビル1号館1階、1966年竣工のビルの1年後の1967年オープン、ポンヌフ=新しい橋=新橋、純喫茶として始まり2代目店長の時代にナポリタン・ハンバーグスパゲティ・ポンヌフバーグ・ハンバーグサンド、3代目店長・植草さん(2007年ごろ皿洗いの手伝いから、2018年から店長)、ゆで置きの太麺2.0mm→2.2mm、ハムのナポリタン、牛豚合い挽きのハンバーグをオーブンで、合い挽き肉入りのオリジナルソース、料理評論家の「ウマい！」。食べログ(2026): 月〜木11:00〜14:50、金は夜も、土日祝休。2026年10月の口コミ: ナポリタン1,100円、ハンバーグスパゲティ1,400円、夜限定ベーコンとチーズのナポリタン2,000円、百名店2026。',
      confidence: 'high', sources: [ST, TB, R + 'B312489054/', R + 'B537503644/', R + 'B537736147/', R + 'B537774930/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Weekday lunch only (plus Friday night); the Pont Neuf burg can sell out early. Cash only; big portions.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Thick boiled-ahead spaghetti; hamburg made with professional breadcrumbs (プロ用の特別なパン粉).', source: ST }],
      soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'House sauce of minced meat and seasonings on both Napolitan and hamburg.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-20-15 新橋駅前ビル1号館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; Shimbashi Ekimae Bldg No. 1 (GSI lot 新橋二丁目20番); neighbours はるちゃんラーメン and どさん娘 in the same building, each on its own Tabelog geo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537774930/', R + 'B537736147/', R + 'B537503644/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('ナポリタン', 'naporitan', 'Napolitan (ham, 2.2 mm spaghetti)', '¥1,100', 'Spaghetti', 'no', 'no', 'October 2026.', 'napolitan'),
      it('ハンバーグスパゲティ', 'hanbaagu supagetti', 'Hamburg spaghetti (large portion)', '¥1,400', 'Spaghetti', 'no', 'no', 'October 2026.', 'hamburg_spaghetti'),
      it('ポンヌフバーグ', 'ponnufu baagu', 'Pont Neuf burg (signature hamburg; sells out)', '', 'Mains', 'no', 'no', '', 'pont_neuf_burg'),
      it('ハンバーグサンド', 'hanbaagu sando', 'Hamburg sandwich', '', 'Mains', 'no', 'no', '', 'hamburg_sandwich'),
      it('', '', 'Bacon-and-cheese Napolitan (Friday night only)', '¥2,000', 'Spaghetti', 'no', 'no', 'October 2026.', 'bacon_cheese_napolitan'),
    ] }, {
    cuisine: '1967年開業の昭和のカフェテラスから洋食ランチの店へ・ナポリタン・ハンバーグスパゲティ・ポンヌフバーグ',
    neighborhood: '新橋二丁目、新橋駅前ビル1号館1F。新橋駅汐留口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。太さ2.2mmのスパゲティ、プロ用のパン粉を使うハンバーグ、どちらにもかかる合い挽き肉と調味料のオリジナルソース。グルテンフリーの選択肢はありません。',
    vegan_detail: 'ヴィーガンではありません。ナポリタンはハム入り、ハンバーグは牛豚合い挽き、両方にかかるオリジナルソースにも合い挽き肉が入ります。',
    notes: '[洋食・昭和のナポリタン] 「ポンヌフ」はフランス語で「新しい橋」、つまり「新橋」。1966年竣工の新橋駅前ビルの1年後、1967年にコーヒー・プリン・サンドイッチの普通の純喫茶として開業しました。2代目店長の時代、景気の良い頃に新橋のサラリーマン向けのがっつりメニューに転換し、ナポリタン、ハンバーグスパゲティ、ポンヌフバーグ、ハンバーグサンドが誕生。3代目店長の植草さんは2007年ごろ、昔からいるおばちゃんたちの皿洗いの手伝いから入り、2018年に店長に。ゆで置きのスパゲティを2.0mmから2.2mmに太くしました。ナポリタンは酸味控えめのまろやか系でベーコンではなくハム。牛豚合い挽きにコショウとニンニクを利かせたハンバーグはオーブンで焼き上げ、どちらにも合い挽き肉入りのオリジナルソース。料理評論家の「ウマい！」でナポリタンが有名になったそう。2026年はナポリタン1,100円、ハンバーグスパゲティ1,400円、金曜夜限定のベーコンとチーズのナポリタン2,000円。口コミでは食べログ百名店2026とされています。',
  });
}

save();
