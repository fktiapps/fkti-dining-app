// Ginza Station half-mile sweep (805 m), batch 51 — three small places with 2026 reviews (all OMNI).
//   + ろばた 銀座本店 (呂者堂) (robatayaki counter known for Ise lobster, opened 2023; a "honten")
//   + M3 Felice (Higashi-Ginza Italian trattoria, opened 2022; owner not named)
//   + KU RO BE (wine bistro with a U-shaped open-kitchen counter, opened 2011; "wine chef" not named)
// Skipped: アンフォーラ (no reviews).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ ろばた 銀座本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13288699/'; const R = TB + 'dtlrvwlst/';
  const d = day(['17:00', '23:00']);
  put({
    id: 'tokyo_robata_ginza_honten_rojado', name: 'ろばた 銀座本店 (呂者堂 / Robata Ginza Honten)', category: 'OMNI',
    lat: 35.671443, lng: 139.761501,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Robatayaki of Ise lobster, shrimp and fish grilled over charcoal at the counter, with à la carte dishes; no source describes seasoning or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood robatayaki centred on Ise lobster.',
    hours_raw: 'Daily 17:00–23:00; closed irregularly (Tabelog). Cards accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme off Sotobori-dōri past the Miyuki-dōri crossing, Ginza Dei Bldg 201 — 3 min from Ginza Stn C2/C3',
    cuisine: 'Robatayaki with Ise lobster as the star · counter around the grill · opened 2023', cuisine_type: 'izakaya',
    website: null, gmaps: gm('ろばた 銀座本店 銀座6-4-17'), menu_url: null,
    notes: "[Robatayaki · Ise lobster over the coals] A 17-seat robatayaki on a second floor in Ginza 6-chōme, opened in September 2023, with a counter of about ten seats wrapped around the kitchen so you can watch fish grilled over the robata. Its Tabelog text bills Ise lobster as the famous dish and notes plenty of à la carte dishes too. 2026 diners praise the lobster and fragrant grilled dishes, and say each dish comes with an explanation of its ingredients. It suits business dinners and special occasions, at about ¥10,000–20,000 a head. The name 'honten' suggests other branches, though none were checked.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 September 2023 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Ise lobster; robata-grilled fish.',
      anecdotes: [
        { text: '"It\'s a cozy restaurant with only about 10 seats at the counter, where you can also see the fish being grilled over the robata." — July 2026.', source: R + 'B533780211/' },
        { text: '"Among the dishes I tried this time, the most memorable was the Ise lobster." — October 2026.', source: R + 'B537262230/' },
      ],
      japanese_sources_summary: '食べログ: ろばた 銀座本店(呂者堂)、銀座6-4-17 銀座出井ビル201、銀座駅C2・C3出口から徒歩3分、17席、毎日17:00〜23:00、不定休、2023年9月9日開店、名物の伊勢海老とアラカルト、カード可。2026年の口コミ: 炉端を囲むカウンター10席ほど、炭火で焼く魚、食材の説明、伊勢海老、香ばしい焼き物、接待や記念日に、1〜2万円。',
      confidence: 'low', sources: [TB, R + 'B533780211/', R + 'B537262230/', R + 'B537005184/', R + 'B534425915/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter around the grill; staff explain ingredients.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-4-17 銀座出井ビル 201',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目4番17号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537262230/'],
    price_note: 'No prices captured; reviewers spend ¥10,000–20,000.', last_checked: TODAY, items: [
      it('伊勢海老の炉端焼き', 'ise ebi no robatayaki', 'Robata-grilled Ise lobster', '', 'Grill', 'ask', 'no', '', 'ise_ebi'),
      it('炉端焼きの魚', 'robatayaki no sakana', 'Robata-grilled fish', '', 'Grill', 'ask', 'no', '', 'grilled_fish'),
    ] }, {
    cuisine: '伊勢海老が主役の炉端焼き・焼き台を囲むカウンター・2023年開店',
    neighborhood: '銀座六丁目、外堀通りからみゆき通りの交差点を越えた銀座出井ビル201。銀座駅C2・C3出口から徒歩3分',
    gf_detail: '要確認。伊勢海老や海老、魚をカウンターの炉端で焼く料理とアラカルト。味付けやグルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。伊勢海老中心の魚介の炉端焼きです。',
    notes: '[炉端焼き・炭火の伊勢海老] 銀座六丁目のビル2階、2023年9月開店の17席の炉端焼きで、厨房を囲む10席ほどのカウンターから炉端で魚を焼く様子が見られます。食べログでは伊勢海老を名物とし、アラカルトも豊富とのこと。2026年の口コミでは伊勢海老と香ばしい焼き物が好評で、一皿ごとに食材の説明があります。接待や記念日向きで1〜2万円ほど。「本店」の名から支店がありそうですが確認していません。',
  });
}

// ================================================================ M3 Felice
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13269602/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:00'], ['17:00', '23:59']);
  put({
    id: 'tokyo_m3_felice_higashi_ginza', name: 'M3 Felice (エムサン フェリーチェ)', category: 'OMNI',
    lat: 35.669448, lng: 139.769109,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a pasta-led Italian trattoria (Genovese, pescatore rosso, thick beef-and-basil pasta); no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: seafood pasta, beef pasta, horse-meat tartare and burrata.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–24:00 (L.O. 22:50); holidays 11:30–14:00 and 17:00–23:00; closed Saturdays and Sundays (Tabelog). Cards, IC and QR accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 4-chōme, Ogasawara Bldg 1F — 2 min from Higashi-Ginza Stn A3',
    cuisine: 'Bright Higashi-Ginza trattoria (opened 2022) · pasta lunch (Genovese, pescatore rosso) · ¥6,000 all-you-can-drink course', cuisine_type: 'other',
    website: null, gmaps: gm('M3 Felice 銀座4-14-19 小笠原ビル'), menu_url: null,
    notes: "[Italian · the Higashi-Ginza trattoria] A bright, cosy 18-seat trattoria on a Higashi-Ginza ground floor, opened in March 2022. At lunch a poster outside advertises the Genovese. A May 2026 diner chose the pescatore rosso, piping hot with fresh shrimp and squid in a seafood-rich tomato sauce. Evenings bring fruit with burrata, horse-meat tartare on pickled vegetables, citrus salad and a thick pasta with beef and basil, with a wine list worth talking through. A course with all-you-can-drink was ¥6,000 a head in June 2026, and there is a women's-party course with a free choice of one drink. Lunch is about ¥1,000–2,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 March 2022 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Pescatore rosso; Genovese.',
      anecdotes: [
        { text: '"The Pescatore was served piping hot. The shrimp and squid were incredibly fresh!" — May 2026.', source: R + 'B528975590/' },
        { text: '"The price is also reasonable at JPY 6000 per person for all-you-can-drink." — June 2026.', source: R + 'B530474673/' },
      ],
      japanese_sources_summary: '食べログ: M3 Felice、銀座4-14-19 小笠原ビル1F、東銀座駅A3出口から徒歩2分、18席、平日11:30〜14:00・17:00〜24:00、祝日は〜23:00、土日休、2022年3月7日開店、カード・IC・QR可。2026年の口コミ: 明るいトラットリア、ランチのジェノベーゼ、ペスカトーレ・ロッソ(海老と烏賊)、果物とブッラータ、馬肉のタルタル、柑橘のサラダ、牛肉とバジルの太麺パスタ、飲み放題付きのコース6,000円、女子会コース、昼1,000〜2,000円。',
      confidence: 'low', sources: [TB, R + 'B528975590/', R + 'B530474673/', R + 'B524980925/', R + 'B530404385/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual and bright; good for small groups; closed weekends.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-14-19 小笠原ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目14番19号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530474673/', R + 'B528975590/'],
    price_note: 'Course price from a June 2026 review.', last_checked: TODAY, items: [
      it('ペスカトーレ・ロッソ(ランチ)', 'pesukatoore rosso', 'Pescatore rosso (lunch)', '', 'Lunch', 'no', 'no', '', 'pescatore'),
      it('ジェノベーゼ(ランチ)', 'jenobeeze', 'Genovese (lunch)', '', 'Lunch', 'no', 'ask', '', 'genovese'),
      it('飲み放題付きコース', 'nomihoudai tsuki koosu', 'Course with all-you-can-drink', '¥6,000', 'Courses', 'no', 'no', '2026.', 'course_nomihodai'),
    ] }, {
    cuisine: '東銀座の明るいトラットリア(2022年開店)・パスタのランチ(ジェノベーゼ、ペスカトーレ・ロッソ)・飲み放題付きコース6,000円',
    neighborhood: '銀座四丁目、小笠原ビル1F。東銀座駅A3出口から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。ジェノベーゼ、ペスカトーレ・ロッソ、牛肉とバジルの太麺などパスタ中心のトラットリアで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。魚介や牛肉のパスタ、馬肉のタルタル、ブッラータ。',
    notes: '[イタリアン・東銀座のトラットリア] 東銀座のビル1階、2022年3月開店の明るく居心地のよい18席のトラットリア。昼は店頭のポスターでジェノベーゼを推していますが、2026年5月の客は熱々で新鮮な海老と烏賊、魚介の旨味たっぷりのトマトソースのペスカトーレ・ロッソを。夜は果物とブッラータ、ピクルスを敷いた馬肉のタルタル、柑橘のサラダ、牛肉とバジルの太麺パスタなど、ワイン選びも楽しめます。2026年6月は飲み放題付きのコースが1人6,000円、ドリンク1杯を自由に選べる女子会コースも。昼は1,000〜2,000円ほど。',
  });
}

// ================================================================ KU RO BE
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13126421/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['18:00', '23:00']);
  put({
    id: 'tokyo_ku_ro_be_ginza6', name: 'KU RO BE (クロベ)', category: 'OMNI',
    lat: 35.670305, lng: 139.763227,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a wine bistro whose signature is sea-urchin peperoncino pasta, with carpaccio, seasonal plates and tea pudding; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sea-urchin pasta, carpaccio, bonito and meat mains.',
    hours_raw: 'Mon–Thu 18:00–23:00 (food L.O. 22:30); Fri 18:00–23:30; Sat and holidays 18:00–22:00; closed Sundays (Tabelog). Cards accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: day(['18:00', '23:30']), 5: day(['18:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Konomi Bldg 3F — 2 min from Ginza Stn',
    cuisine: 'Wine bistro since 2011 · U-shaped open-kitchen counter · signature sea-urchin peperoncino · snacks from ¥500', cuisine_type: 'other',
    website: null, gmaps: gm('KU RO BE 銀座6-8-6 木の実ビル'), menu_url: null,
    notes: "[Wine bistro · the sea-urchin peperoncino] A wine bistro on a Ginza 6-chōme third floor, loved by regulars since April 2011. A spacious open kitchen sits inside a U-shaped counter, and there is a private room with wall murals for four to six. A 'wine chef' chooses the wines to go with the food. Snacks start at ¥500, and a chef's selection of five dishes is available. The signature finish is sea-urchin peperoncino, with carpaccio, seasonal plates such as young corn and bonito, and a tea pudding. One June 2026 regular spent about ¥10,000 with four or five drinks, and another keeps a bottle of whisky there for highballs. The blackboard menu changes over time.",
    chef_bio: { chef_name: null, roles: ['wine chef'], origin: 'Opened 27 April 2011 (Tabelog)', background: 'A 2026 reviewer mentions wines chosen by the "wine chef"; no source names the owner.', philosophy: null, specialty: 'Sea-urchin peperoncino.',
      anecdotes: [
        { text: '"A hidden gem bistro loved by regulars for 15 years… a selection of wines carefully chosen by the wine chef." — May 2026.', source: R + 'B528394892/' },
        { text: '"I opted for the chef\'s selection of 5 dishes and added the signature Uni Peperoncino as a finishing touch." — June 2026.', source: R + 'B522903231/' },
      ],
      japanese_sources_summary: '食べログ: KU RO BE、銀座6-8-6 木の実ビル3F、銀座駅から徒歩2分、18席・壁画のある個室(4〜6名)、月〜木18:00〜23:00、金〜23:30、土祝18:00〜22:00、日休、2011年4月27日開店、カード可。2026年の口コミ: 15年続く常連に愛されるワインビストロ、U字のカウンターとオープンキッチン、ワインシェフが選ぶワイン、500円からのつまみ、おまかせ5品、名物の雲丹のペペロンチーノ、カルパッチョ、ヤングコーンや鰹、紅茶のプリン、キープしたウイスキーのハイボール、黒板のメニュー、1万円ほど。',
      confidence: 'low', sources: [TB, R + 'B528394892/', R + 'B522903231/', R + 'B529902540/', R + 'B531350428/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter around the open kitchen; bottle-keep available; groups of three or more may not fit the counter.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-8-6 木の実ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated May–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目8番6号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522903231/', R + 'B528394892/'],
    price_note: 'Snacks from ¥500 (May 2026 review).', last_checked: TODAY, items: [
      it('雲丹のペペロンチーノ', 'uni no peperonchiino', 'Sea-urchin peperoncino (signature)', '', 'Pasta', 'no', 'no', '', 'uni_peperoncino'),
      it('おまかせ5品', 'omakase gohin', "Chef's selection of five dishes", '', 'Courses', 'ask', 'no', '', 'omakase5'),
      it('つまみ', 'tsumami', 'Wine snacks', '¥500–', 'Small plates', 'ask', 'ask', '2026.', 'snacks'),
    ] }, {
    cuisine: '2011年からのワインビストロ・U字のオープンキッチンのカウンター・名物の雲丹のペペロンチーノ・つまみ500円から',
    neighborhood: '銀座六丁目、木の実ビル3F。銀座駅から徒歩2分',
    gf_detail: '実際上グルテンフリーではありません。名物の雲丹のペペロンチーノ(パスタ)に、カルパッチョ、季節の皿、紅茶のプリン。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。雲丹のパスタ、カルパッチョ、鰹、肉のメイン。',
    notes: '[ワインビストロ・雲丹のペペロンチーノ] 銀座六丁目のビル3階、2011年4月から常連に愛されるワインビストロ。広いオープンキッチンをU字のカウンターが囲み、4〜6名の壁画のある個室も。ワインは料理に合わせて「ワインシェフ」が選びます。つまみは500円から、おまかせ5品も。締めの名物は雲丹のペペロンチーノで、カルパッチョ、ヤングコーンや鰹などの季節の皿、紅茶のプリンも。2026年6月の常連は4〜5杯飲んで1万円ほど、ウイスキーをキープしてハイボールを楽しむ常連も。黒板のメニューは時々替わります。',
  });
}

save();
