// Ginza Station half-mile sweep (805 m), batch 77 — all-genre phase (all OMNI).
//   + キッチンべる (Shimbashi basement yōshoku; husband-and-wife team per a 2026 review, names not found → OMNI)
//   + リストランテクロディーノ (owner Keisuke Kuroda + chef Kouichi Maruyama per Tabelog — owner not the cook → OMNI)
//   + バンカレッラ ジョイア (Kyōbashi Italian trattoria, 2F above an abura-soba shop)
//   + 鉄板焼 かいか (Kōjun Bldg 4F teppan since 2004)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ キッチンべる
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130103/13182998/'; const R = TB + 'dtlrvwlst/';
  const d = day(['11:00', '14:30'], ['17:00', '22:30']);
  put({
    id: 'tokyo_kitchen_belle_shimbashi2', name: 'キッチンべる (Kitchen Belle)', category: 'OMNI',
    lat: 35.66661, lng: 139.759649,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: demi-glace hamburg, crab cream croquettes, breaded cutlets, Neapolitan spaghetti and fried oysters.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, croquettes, cutlets, omurice.',
    hours_raw: 'Mon–Sat 11:00–14:30 (L.O. 14:00) and 17:00–22:30 (L.O. 21:00); closed Sundays (Tabelog).',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 2-chōme, Shinwa Bldg B1F — 1–2 min from JR Shimbashi Ginza exit',
    cuisine: 'Basement yōshoku · omurice, braised hamburg, crab cream croquette, Napolitan, dry curry · mix-and-match sets ¥1,300–1,400', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('キッチンべる 新橋2-19-6'), menu_url: null,
    notes: "[Yōshoku · Shimbashi basement, generous and quick] A long-running 24-seat Western-style diner in a basement a minute from Shimbashi's Ginza exit, run by a husband-and-wife team per a 2026 regular. Names are not given in any source. Salarymen come for big, fast, nostalgic plates in combination sets. Examples: omurice with a braised demi-glace hamburg (¥1,300), hamburg with crab cream croquette (¥1,300), the 'on hamburger' (¥1,400), Napolitan with chicken cutlet, dry curry with ham cutlet, menchi katsu and fried hamo. Sets come with miso soup. Portions are very large. A good fallback when the queue upstairs is long.",
    chef_bio: { chef_name: null, roles: [], origin: 'Long-established (2026 review); opening date not given', background: 'Run by a husband-and-wife team (September 2026 review); names not found in any source.', philosophy: null, specialty: 'Combination yōshoku sets.',
      anecdotes: [
        { text: '"Kitchen Belle is a charming Western-style restaurant run by a husband and wife team, situated in the basement of a building." — September 2026.', source: R + 'B486356565/' },
        { text: '"I had the On Hamburger for JPY 1,400. The portion of the Omurice was particularly large." — September 2026.', source: R + 'B381233152/' },
      ],
      japanese_sources_summary: '食べログ: キッチンべる、港区新橋2-19-6 新和ビルB1F、24席(カウンター7・テーブル4卓)、月〜土11:00〜14:30・17:00〜22:30、日休。2026年の口コミ: 夫婦で営む洋食店、JR新橋駅銀座口から1〜2分、オムライス、ハンバーグ、ナポリタン、カキフライ、組み合わせ自在、オンハンバーグ1,400円、オムライスハンバーグ1,300円、ハンバーグとカニクリームコロッケ1,300円、ナポリタンとチキンカツ、ハムカツのドライカレー、メンチカツ、ハモフライ、味噌汁付き、量が多い、上の店が行列のときに。',
      confidence: 'medium', sources: [TB, R + 'B486356565/', R + 'B381233152/', R + 'B535883379/', R + 'B536134033/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quick salaryman lunch spot.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋2-19-6 新和ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋二丁目19番 (lot) 24m; 689 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B381233152/'],
    price_note: 'Prices from 2024–2026 visits in one review.', last_checked: TODAY, items: [
      it('オムライスハンバーグ', '', 'Omurice with braised demi-glace hamburg', '¥1,300', 'Sets', 'no', 'no', '2024.', 'omu_hamburg'),
      it('ハンバーグとカニクリームコロッケ', '', 'Hamburg and crab cream croquette set', '¥1,300', 'Sets', 'no', 'no', '2025.', 'hamburg_croquette'),
      it('オンハンバーグ', 'on hanbaagu', '"On hamburger" set', '¥1,400', 'Sets', 'no', 'no', 'September 2026.', 'on_hamburg'),
    ] }, {
    cuisine: '地下の洋食・オムライス、煮込みハンバーグ、カニクリームコロッケ、ナポリタン、ドライカレー・組み合わせセット1,300〜1,400円',
    neighborhood: '新橋二丁目、新和ビルB1F。JR新橋駅銀座口から1〜2分',
    gf_detail: 'グルテンフリーではありません。デミグラスのハンバーグ、カニクリームコロッケ、カツ、ナポリタン、カキフライなど。',
    vegan_detail: 'ヴィーガンではありません。ハンバーグ、コロッケ、カツ、オムライス。',
    notes: '[洋食・新橋の地下、早くてたっぷり] 新橋駅銀座口から1分、ビルの地下にある24席の老舗の洋食屋で、2026年の常連によれば夫婦で営んでいます(名前はどの資料にもありません)。会社員がお目当てにするのは、早くてたっぷりの懐かしい組み合わせセット。オムライスと煮込みデミのハンバーグ(1,300円)、ハンバーグとカニクリームコロッケ(1,300円)、オンハンバーグ(1,400円)、チキンカツのナポリタン、ハムカツのドライカレー、メンチカツ、ハモフライなど。セットには味噌汁付き。量はかなり多め。上の階の店が行列のときの頼れる一軒。',
  });
}

// ================================================================ リストランテクロディーノ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13127605/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '23:30']);
  put({
    id: 'tokyo_ristorante_kurodino_ginza3', name: 'リストランテクロディーノ (ristorante KURODINO)', category: 'OMNI',
    lat: 35.673038, lng: 139.765737,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses centre on handmade pasta; the kitchen tailors à la carte dishes to preferences (2026 review), but no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: anago, veal ragù, duck.',
    hours_raw: 'Mon–Sat 18:00–23:30 (food L.O. 21:30); closed Sundays, holidays and the 1st and 3rd Mondays (Tabelog). 10% service charge.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme, Ginza Optica 6F — near Ginza-itchōme Stn',
    cuisine: 'Refined Italian with handmade pasta · 500+ wines, 20 by the glass · ¥12,000 "Giuria" course · private rooms', cuisine_type: 'other',
    website: 'http://kurodino.com', gmaps: gm('リストランテクロディーノ 銀座オプティカ'), menu_url: null,
    notes: "[Italian · quietly excellent, with 500 wines] A calm 24-seat Italian on a sixth floor in Ginza 3-chōme, open since 2011, with private rooms that suit business dinners. Tabelog lists owner Keisuke Kuroda and chef Kouichi Maruyama. The cellar holds more than 500 bottles, with about 20 wines by the glass, pairings and non-alcoholic cocktails. The ¥12,000 'Menu Giuria' in August 2026 ran anago carpione with summer-vegetable stew and salsa verde, fregnacce with veal ragù, and roast Kyoto duck with passion-fruit sauce. À la carte (pistachio pasta) is tailored to taste. Diners praise the consistency and the clear explanations of food and wine. 10% service.",
    chef_bio: { chef_name: 'Kouichi Maruyama (chef); owner Keisuke Kuroda (Tabelog)', roles: ['chef'], origin: 'Opened 14 June 2011 (Tabelog)', background: 'Tabelog names owner Keisuke Kuroda and a separate chef, Kouichi Maruyama.', philosophy: 'Cooking that makes the most of ingredients (Tabelog listing).', specialty: 'Handmade pasta; duck.',
      anecdotes: [
        { text: '"I opted for the JPY 12,000 course \'MENU GIURIA\'… The pasta featured flat noodles called fregnacce with veal ragù… roasted Kyoto duck… complemented by a passion fruit sauce." — August 2026.', source: R + 'B435276838/' },
        { text: '"They kindly accommodated my preferences, tailoring the dishes to my liking. I was particularly pleased to find a pistachio pasta on the menu." — July 2026.', source: R + 'B534096798/' },
      ],
      japanese_sources_summary: '食べログ: リストランテクロディーノ(ristorante KURODINO)、銀座3-4-17 銀座オプティカ6F、24席、個室あり、月〜土18:00〜23:30、日祝・第1第3月曜休、サービス料10%、2011年6月14日開店、公式サイト kurodino.com。店の紹介: オーナー Keisuke Kuroda、シェフ Kouichi Maruyama(英文表記)、ボトル500種以上・グラス約20種、ペアリング、ノンアルコールカクテル、手打ちパスタ、コース12,000円(MENU GIURIA)。2026年の口コミ: 穴子のカルピオーネと夏野菜の煮込みとサルサヴェルデ、仔牛のラグーのフレニャッチェ、京鴨のロースト パッションフルーツのソース、かぶの葉のスープ、ピスタチオのパスタ、好みに合わせてくれる、料理とワインの説明が丁寧、個室での接待。',
      confidence: 'medium', sources: [TB, R + 'B435276838/', R + 'B534096798/', R + 'B531108448/', R + 'B535724309/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Good for business dinners; private rooms.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'À la carte dishes tailored to the diner’s preferences.', source: R + 'B534096798/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-4-17 銀座オプティカ 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated June–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目4番17号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B435276838/'],
    price_note: 'Course price from Tabelog (tax incl.); 10% service extra.', last_checked: TODAY, items: [
      it('MENU GIURIA', '', 'Seasonal course: amuse, anago carpione, handmade pasta, roast duck', '¥12,000', 'Courses', 'ask', 'no', 'Tabelog; August 2026.', 'giuria'),
    ] }, {
    cuisine: '手打ちパスタの上質なイタリアン・ワイン500種以上(グラス20種)・12,000円の「GIURIA」コース・個室',
    neighborhood: '銀座三丁目、銀座オプティカ6F。銀座一丁目駅の近く',
    gf_detail: '要確認。手打ちパスタが中心のコースで、アラカルトは好みに合わせてくれますが(2026年の口コミ)、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。穴子、仔牛のラグー、鴨。',
    notes: '[イタリアン・静かな実力派、ワイン500種] 銀座三丁目のビル6階、2011年開店の落ち着いた24席のイタリアンで、個室は接待にも。食べログにはオーナー Keisuke Kuroda、シェフ Kouichi Maruyama(英文表記)とあります。ボトルは500種以上、グラスは約20種、ペアリングやノンアルコールカクテルも。2026年8月の12,000円の「MENU GIURIA」は、夏野菜の煮込みとサルサヴェルデを添えた穴子のカルピオーネ、仔牛のラグーのフレニャッチェ、パッションフルーツのソースの京鴨のロースト。アラカルト(ピスタチオのパスタなど)は好みに合わせてくれます。品質の安定と、料理とワインの丁寧な説明が好評。サービス料10%。',
  });
}

// ================================================================ バンカレッラ ジョイア
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13127154/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '14:00'];
  put({
    id: 'tokyo_bancarella_gioia_kyobashi3', name: 'バンカレッラ ジョイア (Bancarella Gioia)', category: 'OMNI',
    lat: 35.675576, lng: 139.768181,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A meat-strong trattoria (sausages, roast chicken, carpaccio, tripe) that also serves pasta and a potato gratin; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sausages, chicken, tripe, anchovy gratin, braised hamburg.',
    hours_raw: 'Lunch Mon–Fri 11:00–14:00; dinner Tue–Thu 17:00–22:30, Fri to 23:00, Sat and holidays 17:00–22:00; closed Sundays (Tabelog).',
    hours: { 0: day(L), 1: day(L, ['17:00', '22:30']), 2: day(L, ['17:00', '22:30']), 3: day(L, ['17:00', '22:30']), 4: day(L, ['17:00', '23:00']), 5: day(['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyōbashi 3-chōme, Sankyō Bldg 2F (above an abura-soba shop) — near Ginza-itchōme and Kyōbashi Stns',
    cuisine: 'Small meat-forward Italian trattoria · juicy sausages, crisp roast chicken, thick sawara carpaccio · hamburg-only weekday lunch', cuisine_type: 'other',
    website: null, gmaps: gm('バンカレッラ ジョイア 京橋3-3-12'), menu_url: null,
    notes: "[Italian · a little meat-loving trattoria in Kyōbashi] A 24-seat second-floor trattoria (6 at the counter) on a quiet Kyōbashi street, open since 2011, above an abura-soba shop. Weekday lunch is a single braised hamburg plate, hearty for the price. Evenings bring an assortment of five appetizers, juicy sausages, crisp-skinned chicken, roasted onion, tripe, potato and anchovy gratin, a thick sawara carpaccio and pasta. Wine is poured generously, the staff are friendly and the crowd is calm. Book, as it fills up. The restroom is outside, a floor up, and there's no bag storage under the wall seats.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 14 March 2011 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Sausages; meat dishes.',
      anecdotes: [
        { text: '"The sausages were particularly juicy and packed with flavor. The chicken had a crispy skin and was delicious!" — October 2026.', source: R + 'B537912263/' },
        { text: '"I ordered roasted onions, tripe, potato and anchovy gratin, and sawara carpaccio… the sawara carpaccio stood out with its thickness." — August 2026.', source: R + 'B534566586/' },
      ],
      japanese_sources_summary: '食べログ: バンカレッラ ジョイア、京橋3-3-12 山京ビル2F(1階は油そば)、24席(カウンター6・テーブル18)、昼は平日11:00〜14:00、夜は火〜木17:00〜22:30・金〜23:00・土祝17:00〜22:00、日休、2011年3月14日開店。2026年の口コミ: ランチは煮込みハンバーグのプレートのみ、前菜5種盛り、ソーセージ、皮がパリッとした鶏、玉ねぎのロースト、トリッパ、じゃがいもとアンチョビのグラタン、厚切りの鰆のカルパッチョ、パスタ、ワインはなみなみ、親切なスタッフ、予約がおすすめ、トイレは外の上の階、壁際の席に荷物入れがない。',
      confidence: 'medium', sources: [TB, R + 'B537912263/', R + 'B534566586/', R + 'B483363164/', R + 'B537870950/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small trattoria; book for dinner.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0031 東京都中央区京橋3-3-12 山京ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区京橋三丁目3番12号 (go) 6m; 573 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537912263/', R + 'B483363164/'],
    price_note: 'No prices captured; reviewers spend ¥4,000–8,000 at dinner.', last_checked: TODAY, items: [
      it('煮込みハンバーグのランチ', '', 'Braised hamburg lunch plate (weekdays)', '', 'Lunch', 'ask', 'no', 'August 2026.', 'hamburg_lunch'),
      it('自家製ソーセージ', '', 'Sausages', '', 'Mains', 'ask', 'no', '', 'sausage'),
      it('鰆のカルパッチョ', '', 'Thick-cut sawara carpaccio', '', 'Starters', 'ask', 'no', '', 'sawara'),
    ] }, {
    cuisine: '肉が自慢の小さなイタリアンのトラットリア・ジューシーなソーセージ、皮がパリッとした鶏、厚切りの鰆のカルパッチョ・平日昼はハンバーグのみ',
    neighborhood: '京橋三丁目、山京ビル2F(1階は油そば)。銀座一丁目駅・京橋駅の近く',
    gf_detail: '要確認。ソーセージ、ローストチキン、カルパッチョ、トリッパなど肉中心のトラットリアですが、パスタやじゃがいものグラタンも。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。ソーセージ、鶏、トリッパ、アンチョビのグラタン、煮込みハンバーグ。',
    notes: '[イタリアン・京橋の肉好きの小さなトラットリア] 京橋の静かな通り、油そばの店の上の2階にある24席(カウンター6)のトラットリアで、2011年開店。平日のランチは煮込みハンバーグのプレートだけですが、値段の割にボリューム満点。夜は前菜5種盛り、ジューシーなソーセージ、皮がパリッとした鶏、玉ねぎのロースト、トリッパ、じゃがいもとアンチョビのグラタン、厚切りの鰆のカルパッチョ、パスタなど。ワインはなみなみ、スタッフは親切で客層も落ち着いています。満席になるので予約を。トイレは店外の上の階、壁際の席には荷物入れがありません。',
  });
}

// ================================================================ 鉄板焼 かいか
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13010483/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '15:00'], ['17:00', '23:00']), su = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'tokyo_teppanyaki_kaika_ginza6', name: '鉄板焼 かいか (Teppanyaki Kaika)', category: 'OMNI',
    lat: 35.669965, lng: 139.762614,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A teppan course of seafood, beef and vegetables, but one lunch course included grilled nama-fu (fresh wheat gluten); no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef, seafood, sashimi.',
    hours_raw: 'Daily lunch 11:30–15:00 (last seating 13:30); dinner Mon–Sat 17:00–23:00 (last seating 21:00), Sun and holidays 17:00–21:00 (last seating 19:00) (Tabelog).',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: wk, 6: su }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Kōjun Bldg 4F — 3 min from Ginza Stn A1/A2',
    cuisine: 'Teppanyaki since 2004 · ingredients shown before cooking · Kobushi lunch course ¥7,650 · garlic rice', cuisine_type: 'other',
    website: 'http://ginza-kaika.com/', gmaps: gm('鉄板焼 かいか 交詢ビル'), menu_url: null,
    notes: "[Teppanyaki · Kōjun Building counter since 2004] A 23-seat teppanyaki (13 at the counter plus a private room for up to ten) on the fourth floor of the Kōjun Building, open since 2004. The day's fish, meat and vegetables are shown before cooking. The August 2026 'Kobushi' lunch course (¥7,650) ran appetizers, sashimi, seafood with a stylish sauce, top sirloin butt, grilled vegetables with nama-fu, garlic rice and dessert. Staff are calm and attentive, and the chef is friendly, which suits birthdays. The garlic rice gets the strongest praise; one diner found the strip loin too fatty.",
    chef_bio: { chef_name: null, roles: ['chef'], origin: 'Opened 1 October 2004 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Teppan courses; garlic rice.',
      anecdotes: [
        { text: '"They showed us the fish, meat, and vegetables that would be served today, and I was so excited!" — August 2026.', source: R + 'B533765926/' },
        { text: '"I made a reservation for the Kobushi Course (JPY 7650) for lunch… I was particularly happy to see grilled vegetables paired with the nama-fu." — August 2026.', source: R + 'B537913383/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼 かいか(テッパンヤキ カイカ)、銀座6-8-7 交詢ビル4F、銀座駅A1・A2出口から徒歩3分、23席(カウンター13・個室2〜10名)、ランチは毎日11:30〜15:00(最終入店13:30)、ディナーは月〜土17:00〜23:00(最終入店21:00)・日祝17:00〜21:00(最終入店19:00)、2004年10月1日開店、公式サイト ginza-kaika.com。2026年8月の口コミ: その日の魚・肉・野菜を見せてくれる、前菜と刺身、おしゃれなソースの魚、こぶしコース7,650円(魚介、イチボ、生麩と焼き野菜、ガーリックライス、デザート)、女性スタッフの丁寧な接客、気さくなシェフ、ガーリックライスが絶品、ストリップロインは脂が多めとの声。',
      confidence: 'medium', sources: [TB, R + 'B537913383/', R + 'B533765926/', R + 'B537737342/', R + 'B469860559/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter teppan; good for celebrations.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-8-7 交詢ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目8番7号 (go) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537913383/'],
    price_note: 'Lunch course price from an August 2026 review.', last_checked: TODAY, items: [
      it('こぶしコース(ランチ)', '', 'Kobushi lunch course: appetizers, seafood, top sirloin butt, vegetables with nama-fu, garlic rice, dessert', '¥7,650', 'Courses', 'ask', 'no', 'August 2026.', 'kobushi'),
      it('ガーリックライス', 'gaarikku raisu', 'Garlic rice', '', 'Rice', 'ask', 'no', '', 'garlic_rice'),
    ] }, {
    cuisine: '2004年からの鉄板焼き・焼く前に食材を見せてくれる・こぶしコース(ランチ)7,650円・ガーリックライス',
    neighborhood: '銀座六丁目、交詢ビル4F。銀座駅A1・A2出口から徒歩3分',
    gf_detail: '要確認。魚介、牛肉、野菜の鉄板焼きのコースですが、ランチコースに生麩(小麦のグルテン)の焼き物が出たことも。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。牛肉、魚介、刺身。',
    notes: '[鉄板焼き・交詢ビルで2004年から] 交詢ビル4階、2004年開店の23席(カウンター13と最大10名の個室)の鉄板焼き。その日の魚、肉、野菜を焼く前に見せてくれます。2026年8月の「こぶし」ランチコース(7,650円)は、前菜、刺身、おしゃれなソースの魚介、イチボ、生麩を添えた焼き野菜、ガーリックライス、デザート。スタッフは落ち着いて丁寧、シェフは気さくで、誕生日にもぴったり。いちばん評判なのはガーリックライスで、ストリップロインは脂が多いと感じた客も。',
  });
}

save();
