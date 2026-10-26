// Ginza Station half-mile sweep (805 m), batch 101 — unknown-seat tail (all OMNI).
//   + ひなたぼっこ (Hibiya Daibiru B1F diner: ¥500 curry, omurice)
//   + 鉄板焼き屋台 テッちゃん (teppan stall in Shimbashi Yokochō under the tracks; to 5 am)
//   + THE CITY BAKERY BAR & GRILL 銀座インズ (bakery café-bar, opened Dec 2025)
//   + 小諸そば 銀座7丁目店 (stand-up soba chain)
// Skipped: フィールグロット (13116131; only review 2010) and シェフズステージ 銀座スタイル
// (13141522; no reviews, rotating chefs).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ ひなたぼっこ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13289162/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'tokyo_hinata_bokko_uchisaiwaicho', name: 'ひなたぼっこ (Hinata Bokko)', category: 'OMNI',
    lat: 35.670039, lng: 139.756632,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: curry rice, fried horse mackerel and crab cream croquette sets, omurice with sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken curry, omurice, fried fish.',
    hours_raw: 'Mon–Fri 11:30–14:30 and 17:30–22:00; closed Sat and Sun (Tabelog; may change). No reservations. QR-code ordering.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Hibiya Daibiru B1F, Uchisaiwaichō 1-chōme — 2 min from Uchisaiwaichō Stn exit A5',
    cuisine: 'Basement yōshoku diner for office lunches · ¥500 chicken curry · classic omurice with sauce on the side, salad and soup · fried aji and crab cream croquette set · QR ordering', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('ひなたぼっこ 日比谷ダイビル'), menu_url: null,
    notes: "[Yōshoku · the ¥500 curry under Hibiya Daibiru] A larger-than-expected basement diner in the Hibiya Daibiru with the homely feel of an old Western-style canteen or staff cafeteria, ordered by QR code on your phone. The draw is a ¥500 curry rice, sweet at first with a slow-building heat and generous chunks of chicken. Regulars also like the classic omurice: thick, fluffy egg over ketchup rice, with the sauce served separately, plus salad and soup. There's a set of thick fried horse mackerel with crab cream croquette. Weekdays only; dinner too.",
    chef_bio: { chef_name: null, roles: [], origin: 'Hibiya Daibiru B1F (opening date not given)', background: 'No source names the operator.', philosophy: null, specialty: '¥500 curry; omurice.',
      anecdotes: [
        { text: '"★ Curry Rice JPY 500 — The curry is on the sweeter side, with a gentle flavor at first. However, as you continue eating, a gradual spiciness emerges… a good amount of chicken, generously chunked." — August 2026.', source: R + 'B533543014/' },
        { text: '"The Omurice that arrived had a classic appearance, with a large fluffy egg covering the ketchup rice… I appreciated that the sauce was served separately." — October 2026, fifth visit.', source: R + 'B513388227/' },
      ],
      japanese_sources_summary: '食べログ: ひなたぼっこ、千代田区内幸町1-2-2 日比谷ダイビルB1F、内幸町駅A5出口徒歩2分、平日11:30〜14:30・17:30〜22:00、土日休、予約不可、広い席。2026年の口コミ: ふわふわ卵の昔ながらのオムライス(ケチャップライス、ソースは別添え、サラダとスープ付き)、昔の洋食屋や社員食堂のような雰囲気、500円のカレー(甘めから辛さが増す、鶏肉がごろごろ)、QRコードで注文、アジフライとかにクリームコロッケの定食、思ったより広い店内。',
      confidence: 'medium', sources: [TB, R + 'B533543014/', R + 'B513388227/', R + 'B536650562/', R + 'B537180732/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code on your phone.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒100-0011 東京都千代田区内幸町1-2-2 日比谷ダイビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区内幸町一丁目2番 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533543014/'],
    price_note: 'Curry price from an August 2026 review.', last_checked: TODAY, items: [
      it('カレーライス', 'karē raisu', 'Chicken curry rice', '¥500', 'Lunch', 'no', 'no', 'August 2026.', 'curry'),
      it('オムライス', 'omuraisu', 'Omurice with salad and soup', '', 'Lunch', 'no', 'no', 'October 2026.', 'omurice'),
      it('アジフライとかにクリームコロッケ定食', '', 'Fried horse mackerel and crab cream croquette set', '', 'Lunch', 'no', 'no', 'October 2026.', 'aji_crab'),
    ] }, {
    cuisine: '地下の洋食の食堂・500円のチキンカレー・ソース別添えの昔ながらのオムライス(サラダ、スープ付き)・アジフライとかにクリームコロッケの定食・QRで注文',
    neighborhood: '日比谷ダイビルB1F、内幸町一丁目。内幸町駅A5出口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。カレーライス、アジフライやかにクリームコロッケの定食、ソースのオムライス。',
    vegan_detail: 'ヴィーガンではありません。チキンカレー、オムライス、魚のフライ。',
    notes: '[洋食・日比谷ダイビル地下の500円カレー] 日比谷ダイビルの地下にある思ったより広い食堂で、昔の洋食屋や社員食堂のような親しみやすさ。注文はスマホのQRコードで。目当ては500円のカレーライスで、甘めの口当たりから辛さがじわじわ増し、鶏肉がごろごろ入っています。常連は昔ながらのオムライスも好きで、厚くふわふわの卵がケチャップライスを包み、ソースは別添え、サラダとスープ付き。厚いアジフライとかにクリームコロッケの定食も。平日のみ、夜も営業。',
  });
}

// ================================================================ 鉄板焼き屋台 テッちゃん
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13252892/'; const R = TB + 'dtlrvwlst/';
  const d = day(['15:00', '05:00']);
  put({
    id: 'tokyo_teppanyaki_yatai_tecchan_shimbashi', name: '鉄板焼き屋台 テッちゃん (Teppanyaki Yatai Tecchan)', category: 'OMNI',
    lat: 35.667957, lng: 139.758183,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Teppan snacks and modan-yaki (okonomiyaki with noodles, so wheat) at a food-alley stall; no source mentions gluten-free handling.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Only teppan snacks and modan-yaki are mentioned, and no vegan dish is named.',
    hours_raw: 'Daily 15:00–05:00 (Tabelog; may change). Order at each stall in Shimbashi Yokochō.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shimbashi Yokochō (Shimbashi gādo-shita alley under the tracks), Shimbashi 1-chōme — 2 min from Shimbashi Stn',
    cuisine: 'Teppan stall in the Shimbashi Yokochō food alley under the railway · teppan snacks · modan-yaki · live guitar sing-alongs · open to 5 am', cuisine_type: 'okonomiyaki',
    website: 'https://www.hamakura-style.com/works/shinbashi_yokocho/', gmaps: gm('新橋横丁 鉄板焼き屋台 テッちゃん'), menu_url: null,
    notes: "[Teppan · a stall in the Shimbashi Yokochō alley] One of the stalls in Shimbashi Yokochō, a lively, crowded food alley built into the railway underpass where you order separately at each shop, open daily until 5 am. It's a classic second or third stop: teppan snacks and a modan-yaki (okonomiyaki layered with noodles) that one visitor wished they'd ordered more of. There are live guitar sing-alongs, the service gets top marks, and plenty of overseas visitors drop in. Expect about ¥3,000–6,000 with drinks; the taste is rated average to good.",
    chef_bio: { chef_name: null, roles: [], origin: 'Stall in Shimbashi Yokochō (opening date not given)', background: 'Part of the Shimbashi Yokochō food alley (hamakura-style.com).', philosophy: null, specialty: 'Teppan snacks; modan-yaki.',
      anecdotes: [
        { text: '"At Shinbashi Yokocho, ordering wasn\'t seamless and had to be done at each individual shop… the modern yaki I ordered at the end was delicious." — February 2024.', source: R + 'B480419171/' },
        { text: '"Recommended Menu: Live guitar performance, Kanemiya bottle… Customer Service: ★5" — June 2026, after-party for five.', source: R + 'B530321342/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼き屋台 テッちゃん、港区新橋1-13-3、新橋駅から172m、毎日15:00〜翌5:00、新橋横丁(hamakura-style.com)。口コミ(2022〜2026年): 新橋ガード下横丁、21時過ぎでも行列、注文は店ごと、二次会に、締めのモダン焼き、外国人観光客も多い、味は普通との声、2026年6月はギターの生演奏で合唱、接客は星5、金宮のボトル。',
      confidence: 'low', sources: [TB, R + 'B530321342/', R + 'B480419171/', R + 'B481620218/', R + 'B447110123/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at each stall; lively and crowded.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-13-3 新橋横丁',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目13番 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B480419171/'],
    price_note: 'No prices captured; ¥3,000–6,000 in reviews.', last_checked: TODAY, items: [
      it('モダン焼き', 'modan-yaki', 'Modan-yaki (okonomiyaki with noodles)', '', 'Teppan', 'no', 'no', 'February 2024.', 'modanyaki'),
      it('鉄板焼き', 'teppanyaki', 'Teppan snacks', '', 'Teppan', 'ask', 'no', '', 'teppan'),
    ] }, {
    cuisine: '線路下の新橋横丁の鉄板焼き屋台・鉄板のつまみ・モダン焼き・ギターの生演奏で合唱・朝5時まで',
    neighborhood: '新橋横丁(線路下のガード下横丁)、新橋一丁目。新橋駅から徒歩2分',
    gf_detail: '要確認。鉄板のつまみとモダン焼き(麺入りのお好み焼きなので小麦)を出す横丁の屋台。グルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。鉄板のつまみとモダン焼きが挙がっているだけで、ヴィーガンの料理は書かれていません。',
    notes: '[鉄板焼き・新橋横丁の屋台] 線路下の高架に作られたにぎやかで混み合う新橋横丁の屋台の一つで、注文は店ごと、毎日朝5時まで。二軒目、三軒目の定番で、鉄板のつまみと、もっと頼めばよかったという声もあるモダン焼き(麺入りのお好み焼き)を。ギターの生演奏で合唱が始まることも。接客は高評価で、海外からの客も多め。飲んで3,000〜6,000円ほど、味の評価は普通から良いまで。',
  });
}

// ================================================================ THE CITY BAKERY BAR & GRILL 銀座インズ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13317569/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_city_bakery_bar_grill_ginza_inz', name: 'THE CITY BAKERY BAR & GRILL 銀座インズ', category: 'OMNI',
    lat: 35.6745464, lng: 139.7649618,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bakery café-bar built around bread (bottomless bread with the grill dishes, Philly sandwiches, pastries).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: steak, chicken-neck and chorizo ajillo, Philly sandwich; grilled vegetables appear but are not described.',
    hours_raw: 'Hours not listed on Tabelog; reviewers found it open after 21:00 until 23:00, including on a Sunday. No reservations.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza Inz 2 B1F (Ginza-nishi 2-chōme) — by Yūrakuchō Stn',
    cuisine: 'The City Bakery’s café and bar & grill · bakery up front, bar in back · steak, ajillo (chicken neck and chorizo), grilled vegetables · Philly sandwich · bottomless bread · own-vineyard wine · no drink minimum', cuisine_type: 'other',
    website: 'https://thecitybakery.jp/shop/article2848', gmaps: gm('THE CITY BAKERY BAR & GRILL 銀座インズ'), menu_url: null,
    notes: "[Bakery bar & grill · bread, steak and wine in Ginza Inz] Opened December 2025 in the Ginza Inz 2 basement: The City Bakery's shop of bread, cakes and deli up front (with a bright kids' corner), and a calm bar & grill in back with soft jazz. Diners like the steak, a rich chicken-neck and chorizo ajillo mopped up with bottomless bread, grilled vegetables and a robust Philly sandwich. There's a wide wine list including wine from the company's own vineyard, and no one-drink minimum. Useful because it's open late (to about 23:00) and on Sundays, when much of Ginza is shut.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 December 2025 (Tabelog)', background: 'The City Bakery (thecitybakery.jp).', philosophy: null, specialty: 'Bread; ajillo; steak.',
      anecdotes: [
        { text: '"The all-you-can-eat bread is amazing!!! I dipped it generously in the ajillo oil and enjoyed every bite." — July 2026, chicken-neck and chorizo ajillo.', source: R + 'B532192620/' },
        { text: '"THE CITY BAKERY BAR & GRILL in Ginza Inz is open until 11 PM… there was no one-drink policy." — February 2026, Friday after 21:00.', source: R + 'B522647102/' },
      ],
      japanese_sources_summary: '食べログ: THE CITY BAKERY BAR & GRILL 銀座インズ、中央区銀座西2-2先 銀座インズ2 B1F、有楽町駅から144m、予約不可、営業時間の記載なし、2025年12月15日開店、公式サイト thecitybakery.jp。2026年の口コミ: 金曜21時過ぎに23時まで開いていた、カフェとバー&グリルの広い店内、ワインが豊富、焼き野菜とサンドイッチ、1ドリンク制なし、日曜に飲める店として、自社ヴィンヤードのワイン、ステーキ、鶏ネックとチョリソーのアヒージョ、パン食べ放題、パンの購入も、フィリーサンド、奥のジャズの流れるカフェバー、手前のパン売り場とキッズスペース。',
      confidence: 'medium', sources: [TB, R + 'B532192620/', R + 'B522647102/', R + 'B531211378/', R + 'B532706217/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; no drink minimum.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座西2-2先 銀座インズ2 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–August 2026.' },
    pin_source: `OSM Nominatim "THE CITY BAKERY 銀座インズ" (35.6745464, 139.7649618), 28m from the Tabelog point; Tabelog ${TB} gives the same point as another Ginza Inz 2 shop, so the OSM point is used to avoid stacking; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532192620/', R + 'B531211378/'],
    price_note: 'One wine price from a July 2026 review.', last_checked: TODAY, items: [
      it('鶏ネックとチョリソーのアヒージョ', '', 'Chicken-neck and chorizo ajillo', '', 'Grill', 'ask', 'no', 'July 2026.', 'ajillo'),
      it('ステーキ', 'sutēki', 'Steak', '', 'Grill', 'ask', 'no', 'July 2026.', 'steak'),
      it('フィリーサンド', '', 'Philly sandwich', '', 'Sandwiches', 'no', 'no', 'August 2026.', 'philly'),
      it('自社ヴィンヤードのワイン(グラス)', '', 'Own-vineyard wine by the glass', '¥1,200', 'Drinks', 'ask', 'ask', 'July 2026.', 'wine'),
    ] }, {
    cuisine: 'ザ・シティ・ベーカリーのカフェとバー&グリル・手前はパン売り場、奥はバー・ステーキ、アヒージョ(鶏ネックとチョリソー)、焼き野菜・フィリーサンド・パン食べ放題・自社ヴィンヤードのワイン・1ドリンク制なし',
    neighborhood: '銀座インズ2 B1F(銀座西二丁目)。有楽町駅そば',
    gf_detail: 'グルテンフリーではありません。パンが中心のベーカリーのカフェバー(グリル料理にはパン食べ放題、フィリーサンド、焼き菓子)。',
    vegan_detail: 'ヴィーガンではありません。ステーキ、鶏ネックとチョリソーのアヒージョ、フィリーサンド。焼き野菜もありますが中身は書かれていません。',
    notes: '[ベーカリーのバー&グリル・銀座インズでパンとステーキとワイン] 2025年12月に銀座インズ2の地下に開店。手前はザ・シティ・ベーカリーのパン、ケーキ、デリの売り場(明るいキッズスペースも)、奥はジャズの流れる落ち着いたバー&グリルです。人気はステーキ、パン食べ放題でオイルまで楽しむ鶏ネックとチョリソーの濃厚なアヒージョ、焼き野菜、しっかりした味のフィリーサンド。自社のヴィンヤードのものを含めワインが豊富で、1ドリンク制はありません。夜23時ごろまで、日曜も開いているので、銀座の多くの店が休む日に便利です。',
  });
}

// ================================================================ 小諸そば 銀座7丁目店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13056907/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['07:30', '20:00']); const we = day(['10:00', '17:00']);
  put({
    id: 'tokyo_komoro_soba_ginza7', name: '小諸そば 銀座7丁目店 (Komoro Soba Ginza 7-chome)', category: 'OMNI',
    lat: 35.66828, lng: 139.762784,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a stand-up soba and udon chain with tempura, katsu-don and oyako-don sets; the soba ratio is not stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tempura, katsu, chicken and egg bowls; the tsuyu is not described.',
    hours_raw: 'Mon–Fri 7:30–20:00; Sat, Sun and holidays 10:00–17:00 (Tabelog; may change). Ticket machine (cash or transit IC card).',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme (7-10-13) — 6 min from Higashi-Ginza or Ginza Stn',
    cuisine: 'Stand-up soba chain · soba-and-bowl sets (chuck-eye katsu-don set ¥820, oyako-don ¥640) · three-shrimp ten-don set · Sichuan cold soba ¥500 · ticket machine · from 7:30 am', cuisine_type: 'udon_soba',
    website: 'http://www.k-mitsuwa.co.jp/komorodiv/index.html', gmaps: gm('小諸そば 銀座7丁目店'), menu_url: null,
    notes: "[Soba · a fast, cheap bowl in Ginza 7-chōme] A branch of the Komoro Soba stand-up chain, busy at lunch with workers and open from 7:30 am on weekdays. Buy a ticket from the machine (cash or a transit IC card) and your bowl is called in about three minutes. In 2026: a chuck-eye katsu-don set with zaru or hot kake soba (¥820), oyako-don (¥640) with yuzu shichimi and free spring onion, a ten-don set with three big shrimp, and Sichuan-style cold soba with cucumber (¥500). Firm, reliable soba at prices rare in Ginza.",
    chef_bio: { chef_name: null, roles: [], origin: 'Branch of the Komoro Soba chain (Tabelog listing name)', background: 'Chain (k-mitsuwa.co.jp).', philosophy: null, specialty: 'Soba-and-bowl sets.',
      anecdotes: [
        { text: '"Chuck Eye Roll Katsu Rice Bowl Set - JPY 820, tax included. You can choose between zaru soba or kake soba (hot)… Order via a ticket vending machine." — September 2026.', source: R + 'B510940352/' },
        { text: '"Oyakodon (JPY 640)… At 1:07 PM, I was called to pick up my meal." — August 2026.', source: R + 'B515006227/' },
      ],
      japanese_sources_summary: '食べログ: 小諸そば 銀座7丁目店、銀座7-10-13、平日7:30〜20:00、土日祝10:00〜17:00、予約不可、公式サイト k-mitsuwa.co.jp。2026年の口コミ: 立ち食いそばのチェーン、肩ロースカツ丼セット820円(ざるかかけを選択)、券売機、親子丼640円(柚子七味と卓上のねぎ、梅干し)、注文から約3分、昼は職人や会社員で混む、海老3本の天丼セット、そばはコシがある、四川風冷やし中華そば(きゅうりたっぷり)500円、交通系ICで食券。',
      confidence: 'medium', sources: [TB, R + 'B510940352/', R + 'B515006227/', R + 'B534358438/', R + 'B534456420/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-10-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目10番13号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B510940352/', R + 'B515006227/', R + 'B534456420/'],
    price_note: 'Prices from August–September 2026 reviews (tax incl.).', last_checked: TODAY, items: [
      it('肩ロースカツ丼セット', '', 'Chuck-eye katsu-don set with zaru or kake soba', '¥820', 'Sets', 'no', 'no', 'September 2026.', 'katsudon_set'),
      it('親子丼', 'oyakodon', 'Oyako-don', '¥640', 'Rice', 'ask', 'no', 'August 2026.', 'oyakodon'),
      it('四川風冷やしそば', '', 'Sichuan-style cold soba with cucumber', '¥500', 'Soba', 'no', 'no', 'August 2026.', 'sichuan_soba'),
      it('天丼セット', '', 'Ten-don set (three shrimp) with soba', '', 'Sets', 'no', 'no', 'August 2026.', 'tendon_set'),
    ] }, {
    cuisine: '立ち食いそばのチェーン・そばと丼のセット(肩ロースカツ丼セット820円、親子丼640円)・海老3本の天丼セット・四川風冷やしそば500円・券売機・朝7時半から',
    neighborhood: '銀座七丁目(7-10-13)。東銀座駅・銀座駅から徒歩6分',
    gf_detail: 'グルテンフリーではありません。天ぷら、カツ丼、親子丼のセットのある立ち食いそば・うどんのチェーンで、そばの割合は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。天ぷら、カツ、鶏と卵の丼。つゆの中身は書かれていません。',
    notes: '[そば・銀座七丁目で手早く安く] 立ち食いそばチェーン小諸そばの店で、昼は働く人で混み合い、平日は朝7時半から。券売機で食券を買い(現金か交通系IC)、3分ほどで呼ばれます。2026年は肩ロースカツ丼とざるかかけのセット(820円)、柚子七味と無料のねぎで食べる親子丼(640円)、大きな海老3本の天丼セット、きゅうりの四川風冷やしそば(500円)など。コシのある安定したそばを銀座では珍しい値段で。',
  });
}

save();
