// Ginza Station half-mile sweep (805 m), batch 85 — all-genre phase (all OMNI).
//   + GINZA BRIO (French-style yōshoku on Hanatsubaki-dōri; private room)
//   + 鰻ひつまぶし備長 三越銀座店 (Nagoya hitsumabushi chain, Mitsukoshi 11F)
//   + はれたりくもったり (Ginza Nine 2 B1F seafood izakaya and set-meal lunch)
//   + orca 銀座醸造所 (microbrewery in a 1985 bar space; brewery tours; NZ grass-fed beef)
// Skipped: LINK DINING 13019691 (2023), キャンディストア・ロック 13022061 (2024).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ GINZA BRIO
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13264365/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:30', '22:00']);
  put({
    id: 'tokyo_ginza_brio_ginza7', name: 'GINZA BRIO (ギンザ ブリオ)', category: 'OMNI',
    lat: 35.669244, lng: 139.761473,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French-style Western dishes such as charcoal-grilled Hitachi-beef tenderloin, à la carte or course; ingredients and methods are not explained in detail, and no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Hitachi beef and other meat dishes.',
    hours_raw: 'Mon–Fri 17:30–22:00 (food L.O. 21:00); closed Sat, Sun and holidays (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme on Hanatsubaki-dōri, Assorti Ginza Hanatsubaki-dōri Bldg 7F — 5 min from Ginza Stn',
    cuisine: 'French-style yōshoku with wine · charcoal-grilled Hitachi-beef tenderloin · course or à la carte · private room for 6', cuisine_type: 'yoshoku',
    website: 'http://ginzabrio.com', gmaps: gm('GINZA BRIO 銀座7-6-10'), menu_url: null,
    notes: "[Yōshoku · French-leaning, on Hanatsubaki-dōri] A calm 31-seat seventh-floor restaurant open since 2021, with a counter, tables and a fully private room for six. A French chef cooks nostalgic yet fresh Western dishes to match wine and whisky. The highlight in April 2026 was a charcoal-grilled Hitachi-beef tenderloin, and lighter Italian-leaning plates suit a second stop. Courses or à la carte; plating is beautiful, portions on the small side, and one diner wanted more explanation of the dishes. Staff are friendly. About ¥5,000–15,000.",
    chef_bio: { chef_name: null, roles: ['chef'], origin: 'Opened 1 October 2021 (Tabelog)', background: 'A French chef per the Tabelog listing, unnamed.', philosophy: null, specialty: 'Charcoal-grilled Hitachi beef.',
      anecdotes: [
        { text: '"We ordered a variety of dishes, but I must highlight the charcoal-grilled Hitachi beef tenderloin!" — April 2026.', source: R + 'B525854838/' },
        { text: '"There is a wide variety of a la carte options available as well. The portions are on the smaller side." — July 2026.', source: R + 'B532765644/' },
      ],
      japanese_sources_summary: '食べログ: GINZA BRIO(ギンザ ブリオ)、銀座7-6-10 アソルティ銀座花椿通りビル7F、31席(完全個室6・テーブル18・カウンター7)、平日17:30〜22:00、土日祝休、2021年10月1日開店、公式サイト ginzabrio.com。店の紹介: フランス人シェフによるワインに合うフレンチ風の洋食、コースとアラカルト。2026年の口コミ: 知多のハイボール、常陸牛ヒレの炭火焼き、2軒目に軽いイタリアン風の料理、落ち着いた大人の空間、親切なスタッフ、器と盛り付けが美しい、量は少なめ、料理の説明がもっと欲しい。',
      confidence: 'low', sources: [TB, R + 'B525854838/', R + 'B532765644/', R + 'B526203724/', R + 'B527107730/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Private room available.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-6-10 アソルティ銀座花椿通りビル 7F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated April–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目6番10号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525854838/'],
    price_note: 'No prices captured; reviewers spend ¥5,000–10,000.', last_checked: TODAY, items: [
      it('常陸牛ヒレの炭火焼き', '', 'Charcoal-grilled Hitachi-beef tenderloin', '', 'Mains', 'ask', 'no', 'April 2026.', 'hitachi_beef'),
      it('コース', 'koosu', 'Course', '', 'Courses', 'ask', 'no', 'July 2026.', 'course'),
    ] }, {
    cuisine: 'ワインに合うフレンチ風の洋食・常陸牛ヒレの炭火焼き・コースかアラカルト・6名の個室',
    neighborhood: '銀座七丁目の花椿通り、アソルティ銀座花椿通りビル7F。銀座駅から徒歩5分',
    gf_detail: '要確認。常陸牛ヒレの炭火焼きなどフレンチ風の洋食をアラカルトかコースで。材料や調理法の説明は少なく、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。常陸牛などの肉料理です。',
    notes: '[洋食・花椿通りのフレンチ寄り] 2021年開店、カウンター、テーブル、6名の完全個室の落ち着いた7階の31席。フランス人シェフが、懐かしくも新しい洋食をワインやウイスキーに合わせて作ります。2026年4月の一番は常陸牛ヒレの炭火焼きで、イタリアン寄りの軽い皿は2軒目にも。コースかアラカルトで、盛り付けは美しく量は少なめ、料理の説明がもっと欲しかったという声も。スタッフは親切。5,000〜15,000円ほど。',
  });
}

// ================================================================ 鰻ひつまぶし備長 三越銀座店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13226547/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '15:30'], ['17:00', '21:00']);
  put({
    id: 'tokyo_hitsumabushi_bincho_mitsukoshi', name: '鰻ひつまぶし備長 三越銀座店 (Hitsumabushi Bincho)', category: 'OMNI',
    lat: 35.671061, lng: 139.766139,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: grilled eel glazed with a soy-based tare; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: eel, liver, rolled omelette.',
    hours_raw: 'Daily 11:00–15:30 (L.O. 14:45) and 17:00–21:00 (L.O. 20:00); entry may stop early when the queue is long; closures follow Ginza Mitsukoshi (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Mitsukoshi 11F, Ginza 4-chōme — 1 min from Ginza Stn',
    cuisine: 'Nagoya hitsumabushi (eel grilled without steaming) · Bincho kaiseki course ¥10,950 · rolled omelette, liver', cuisine_type: 'unagi',
    website: 'http://hitsumabushi.co.jp/', gmaps: gm('鰻ひつまぶし備長 三越銀座店'), menu_url: null,
    notes: "[Unagi · Nagoya's Bincho on the Mitsukoshi restaurant floor] The Ginza branch (its second in Tokyo) of Nagoya's long-established Bincho, on the 11th floor of Ginza Mitsukoshi. Eel is grilled directly without steaming, Kansai style: crisp outside, fluffy within. Eat the hitsumabushi as is, then with condiments, then with broth. Portions are generous; a ¾-eel size exists, and the rolled omelette is a good side. The nine-dish Bincho Kaiseki Takumi course (¥10,950) adds crab-miso tofu, bone senbei and grilled liver. Queues form, so book or come early. Many overseas visitors.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 September 2018 (Tabelog); second Tokyo branch of Nagoya Bincho', background: 'Chain-run (hitsumabushi.co.jp).', philosophy: null, specialty: 'Hitsumabushi.',
      anecdotes: [
        { text: '"I ordered the Bincho Kaiseki Takumi Course (9 dishes) for JPY 10,950… Crab Miso Tofu, Bone Senbei (crispy snacks), Grilled Liver." — September 2026.', source: R + 'B531799882/' },
        { text: '"The hitsumabushi was delicious, with the eel perfectly grilled on the outside while remaining fluffy on the inside." — September 2026.', source: R + 'B534926160/' },
      ],
      japanese_sources_summary: '食べログ: 鰻ひつまぶし備長 三越銀座店、銀座4-6-16 銀座三越11F、銀座駅から徒歩1分、32席、毎日11:00〜15:30・17:00〜21:00、混雑時はラストオーダー前に受付終了あり、休みは銀座三越に準ずる、2018年9月25日開店、公式サイト hitsumabushi.co.jp。店の紹介: 名古屋の老舗「備長」の東京2号店、蒸さずに直焼き。2026年9月の口コミ: 備長会席 匠コース(9品)10,950円(蟹味噌豆腐、骨せんべい、肝焼き)、ひつまぶしは量が多く薬味とだしで味変、0.75尾のひつまぶし、だし巻き、関西風の焼き、行列ができるので予約を、外国人客が多い。',
      confidence: 'medium', sources: [TB, R + 'B531799882/', R + 'B534926160/', R + 'B537535523/', R + 'B535857298/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Department-store floor; queue at peak.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-6-16 銀座三越 11F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目6番16号 (go) 76m (department store); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531799882/'],
    price_note: 'Course price from a September 2026 review.', last_checked: TODAY, items: [
      it('ひつまぶし', 'hitsumabushi', 'Hitsumabushi (also ¾-eel size)', '', 'Unagi', 'no', 'no', '', 'hitsumabushi'),
      it('備長会席 匠コース(9品)', '', 'Bincho Kaiseki Takumi course, 9 dishes', '¥10,950', 'Courses', 'no', 'no', 'September 2026.', 'takumi'),
      it('だし巻き', 'dashimaki', 'Rolled omelette', '', 'Sides', 'ask', 'no', '', 'dashimaki'),
    ] }, {
    cuisine: '名古屋のひつまぶし(蒸さずに直焼き)・備長会席 匠コース10,950円・だし巻き、肝焼き',
    neighborhood: '銀座三越11F、銀座四丁目。銀座駅から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。醤油ベースのタレで焼く鰻で、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。鰻、肝、だし巻き。',
    notes: '[うなぎ・三越のレストランフロアの名古屋の備長] 名古屋の老舗「備長」の東京2号店で、銀座三越11階。鰻は蒸さずに直焼きする関西風で、外はパリッと中はふっくら。ひつまぶしはそのまま、薬味で、だしでと味を変えて。量はたっぷりで0.75尾のサイズもあり、だし巻きもおすすめ。9品の「備長会席 匠コース」(10,950円)には蟹味噌豆腐、骨せんべい、肝焼きも。行列ができるので予約か早めに。海外からの客も多い店です。',
  });
}

// ================================================================ はれたりくもったり
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13013374/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '13:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_haretari_kumottari_ginza_nine', name: 'はれたりくもったり (Haretari Kumottari)', category: 'OMNI',
    lat: 35.66773, lng: 139.760244,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: fried squid, croquettes, menchi katsu and curry sit alongside sashimi and grilled fish; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, menchi katsu, crab croquettes.',
    hours_raw: 'Mon–Fri 11:30–13:30 and 17:00–23:00 (L.O. 22:00); closed Sat, Sun and holidays (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Nine 2 B1F, under the expressway in Ginza 8-chōme — near Shimbashi Stn',
    cuisine: 'Shōwa-retro seafood izakaya · sashimi, simmered and grilled fish · fried aori squid ¥1,600 · grilled-fish set ¥2,300 · lunch croquette sets', cuisine_type: 'izakaya',
    website: null, gmaps: gm('はれたりくもったり 銀座ナイン2'), menu_url: null,
    notes: "[Izakaya · Shōwa-retro seafood under the expressway] A 33-seat seafood izakaya in the basement of Ginza Nine 2, with a retro Shōwa feel and a family-like welcome that keeps regulars coming. Seafood is the strength: sashimi that wins over non-sashimi people, simmered, fried and grilled dishes. In October 2026 orders included a ¥2,300 grilled-fish set of thick, crisp-skinned mackerel, fried aori squid with sudachi (¥1,600) and salted yam fries (¥1,400). The weekday lunch includes menchi katsu and crab cream croquette sets with careful miso soup and sides, plus curry and kara-age; some items sell out early.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza Nine 2 (opening date not given)', background: 'No source names the owner.', philosophy: null, specialty: 'Seafood; grilled fish.',
      anecdotes: [
        { text: '"Everything from the sashimi to the simmered dishes, fried items, and grilled dishes is delicious… I also really appreciate the family-like atmosphere." — October 2026.', source: R + 'B536897366/' },
        { text: '"Fried Aori Ika, JPY 1,600; Fried Potato with Yam, JPY 1400" — October 2026, with a ¥2,300 grilled-fish set.', source: R + 'B537350458/' },
      ],
      japanese_sources_summary: '食べログ: はれたりくもったり、銀座8-4 ギンザナイン2 B1F、33席、平日11:30〜13:30・17:00〜23:00、土日祝休。2026年の口コミ: 刺身、煮物、揚げ物、焼き物がどれも美味しい、家族的な雰囲気、焼き魚御膳2,300円(鯖)、アオリイカの唐揚げ1,600円(すだち)、長芋のフライ1,400円、ランチはメンチカツとカニクリームコロッケの定食、丁寧な味噌汁と小鉢、魚介・カレー・唐揚げ・コロッケ、品切れも、昭和レトロな店内。',
      confidence: 'low', sources: [TB, R + 'B536897366/', R + 'B537350458/', R + 'B537833200/', R + 'B531889040/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Weekdays only; friendly regulars’ spot.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-4 ギンザナイン2 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 東京都中央区銀座八丁目4番 (lot) 129m — Ginza Nine is a long building under the expressway; Tabelog point kept; 557 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537350458/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('焼き魚御膳', 'yakizakana gozen', 'Grilled-fish set (mackerel)', '¥2,300', 'Sets', 'ask', 'no', 'October 2026.', 'yakizakana'),
      it('アオリイカの唐揚げ', '', 'Fried aori squid with sudachi', '¥1,600', 'Small plates', 'no', 'no', 'October 2026.', 'ika_karaage'),
      it('長芋のフライ', '', 'Salted yam fries', '¥1,400', 'Small plates', 'ask', 'ask', 'October 2026.', 'yam_fries'),
    ] }, {
    cuisine: '昭和レトロな魚介の居酒屋・刺身、煮魚、焼き魚・アオリイカの唐揚げ1,600円・焼き魚御膳2,300円・ランチはコロッケ定食',
    neighborhood: '銀座八丁目、高速道路下のギンザナイン2 B1F。新橋駅の近く',
    gf_detail: '実際上グルテンフリーではありません。刺身や焼き魚のほか、イカの唐揚げ、コロッケ、メンチカツ、カレーなどで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。魚介、メンチカツ、カニクリームコロッケ。',
    notes: '[居酒屋・高速道路下の昭和レトロな魚介の店] ギンザナイン2の地下にある33席の魚介の居酒屋で、昭和レトロな雰囲気と家族的なもてなしで常連が通う店。強みは魚介で、刺身が苦手な人でも美味しいと感じる刺身、煮物、揚げ物、焼き物。2026年10月の注文は、厚くて皮がパリッとした鯖の焼き魚御膳(2,300円)、すだちを添えたアオリイカの唐揚げ(1,600円)、塩をふった長芋のフライ(1,400円)。平日の昼はメンチカツやカニクリームコロッケの定食で、味噌汁や小鉢も丁寧、カレーや唐揚げも。早めに品切れになるものも。',
  });
}

// ================================================================ orca 銀座醸造所
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13194178/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['16:00', '23:00']);
  put({
    id: 'tokyo_orca_ginza_brewery', name: 'orca 銀座醸造所 (orca Ginza Brewery)', category: 'OMNI',
    lat: 35.667585, lng: 139.762713,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a craft brewery (barley beer); no gluten-free beer or dish is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: New Zealand grass-fed beef, Wagyu.',
    hours_raw: 'Mon–Fri 16:00–23:00 (food 16:00–22:15); Sat and holidays 14:00–22:00; Sun 13:00–21:00 (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['14:00', '22:00']), 6: day(['13:00', '21:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 8-chōme, Shōkin Bldg B1 — 6 min from Ginza Stn, 7 from Shimbashi',
    cuisine: 'Basement microbrewery · ~10 house craft beers, 3-beer tasting ¥2,200 · brewery tours · New Zealand grass-fed beef', cuisine_type: 'other',
    website: 'https://brewinbar.com', gmaps: gm('orca 銀座醸造所 正金ビル'), menu_url: null,
    notes: "[Craft beer · a microbrewery under Ginza 8-chōme] A 33-seat brewery restaurant (formerly Brew In Bar & Nature) in the basement space of a bar founded in 1985. Small stainless tanks brew about ten house beers, and staff show guests the brewhouse. The three-beer tasting is ¥2,200, with small fries at ¥900. Food runs to New Zealand grass-fed beef (one diner found it sinewy; the Wagyu had sold out) and many appetizers. Mostly overseas visitors, relaxed and unhurried. Opens mid-afternoon at weekends.",
    chef_bio: { chef_name: null, roles: [], origin: 'In a space inherited from a bar founded in 1985 (Tabelog); former name Brew In Bar & Nature', background: 'Company website brewinbar.com.', philosophy: null, specialty: 'House-brewed craft beer.',
      anecdotes: [
        { text: '"3 Craft Beer Tasting (JPY 2200)… You can choose from 10 different craft beers brewed here." — October 2026.', source: R + 'B537718996/' },
        { text: '"They actually showed us the beer brewing facility, explaining about the barley and machinery." — October 2026.', source: R + 'B537056661/' },
      ],
      japanese_sources_summary: '食べログ: orca 銀座醸造所(オルカ、旧店名 ブリューインバー & ナチュール)、銀座8-11-12 正金ビルB1、銀座駅から徒歩6分・新橋駅から7分、33席(カウンター5・ソファ12・テーブル16)、平日16:00〜23:00、土祝14:00〜22:00、日13:00〜21:00、公式サイト brewinbar.com。店の紹介: 1985年創業の老舗バーの空間を受け継いだ醸造所レストラン、できたてのビール、ニュージーランドのグラスフェッドビーフ。2026年の口コミ: 自家醸造のクラフトビール約10種、醸造所の見学、3種の飲み比べ2,200円、ポテト(小)900円、前菜が豊富、外国人客が多い、和牛は品切れでNZ牛は筋が多かったとの声。',
      confidence: 'medium', sources: [TB, R + 'B537718996/', R + 'B537056661/', R + 'B534949959/', R + 'B537785394/'] },
    cultural_comfort: { level: 'english', note: 'Mostly international guests (2026 review); brewery tours.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座8-11-12 正金ビル B1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座八丁目11番12号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537718996/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('クラフトビール3種飲み比べ', '', 'Three-beer house craft tasting', '¥2,200', 'Beer', 'no', 'ask', 'October 2026.', 'tasting'),
      it('フライドポテト(小)', '', 'Small fries', '¥900', 'Food', 'ask', 'ask', 'October 2026.', 'fries'),
      it('ニュージーランド産グラスフェッドビーフ', '', 'New Zealand grass-fed beef', '', 'Food', 'ask', 'no', '', 'nz_beef'),
    ] }, {
    cuisine: '地下のマイクロブルワリー・自家醸造のクラフトビール約10種、3種飲み比べ2,200円・醸造所の見学・ニュージーランドのグラスフェッドビーフ',
    neighborhood: '銀座八丁目、正金ビルB1。銀座駅から徒歩6分、新橋駅から7分',
    gf_detail: 'グルテンフリーではありません。大麦のクラフトビールの醸造所で、グルテンフリーのビールや料理は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。ニュージーランドのグラスフェッドビーフ、和牛。',
    notes: '[クラフトビール・銀座八丁目の地下のマイクロブルワリー] 1985年創業のバーの地下空間を受け継いだ33席の醸造所レストラン(旧店名 ブリューインバー & ナチュール)。小さなステンレスタンクで約10種のビールを造り、醸造所も案内してくれます。3種の飲み比べは2,200円、ポテト(小)900円。料理はニュージーランドのグラスフェッドビーフ(筋が多かった、和牛は品切れという声も)や豊富な前菜。客の多くは海外からで、ゆったりした雰囲気。週末は午後から営業。',
  });
}

save();
