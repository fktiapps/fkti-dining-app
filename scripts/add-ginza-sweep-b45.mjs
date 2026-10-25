// Ginza Station half-mile sweep (805 m), batch 45 — small non-Japanese places with 2026 reviews (all OMNI).
//   + BEar Terrace (4F bistro-bar with a terrace, open until 5 a.m. on weekdays; owner not named)
//   + ル スーリール ダンジュ (Shimbashi French run single-handed by a chef from Kyūshū, per reviews; unnamed → OMNI)
//   + ラ ニュイ ブランシュ (basement wine bar with French-Italian food since 2008; owner not named in the shop text)
// Skipped (no review dated 2026): 銀座 川奈, ビストロトレフル, カーエム, ジム・ルーム. Skipped ダルメシアン (May 2026 review has no
// text; a 2025 diner says it barely serves food).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ BEar Terrace
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13318422/'; const R = TB + 'dtlrvwlst/';
  const n = day(['18:30', '05:00']);
  put({
    id: 'tokyo_bear_terrace_ginza7', name: 'BEar Terrace', category: 'OMNI',
    lat: 35.669168, lng: 139.761856,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bistro-bar menu of pizza (Margherita) and pasta (Bolognese) with grated cheese; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: Bolognese and cheese-topped pasta and pizza.',
    hours_raw: 'Mon–Fri 18:30–5:00 (food L.O. 0:00, drinks 4:00); closed weekends and holidays (Tabelog). Cards, IC and QR accepted.',
    hours: { 0: n, 1: n, 2: n, 3: n, 4: n }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme back alley, Ginza STEPS 4F — 3 min from Shimbashi Stn',
    cuisine: 'Bistro-bar with a hidden terrace · pizza and pasta (Bolognese, Margherita) · open until 5 a.m.', cuisine_type: 'other',
    website: null, gmaps: gm('BEar Terrace 銀座7-7-12 銀座STEPS'), menu_url: null,
    notes: "[Bistro-bar · a hidden terrace in Ginza 7-chōme] A fourth-floor bistro-bar in a Ginza 7-chōme back alley, hard to find from the street, with about four counter seats, a stylish terrace looking over the building's outdoor stairs, and a sofa-filled terrace room. Bear motifs decorate it. 2026 diners order chewy pizza and pasta, including a Margherita and a Bolognese (about ¥2,400), and cheese is grated on until you say stop. Music plays, groups gather on the terrace in warm weather, and it stays open until 5 a.m. on weekdays. Expect about ¥2,000–5,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 7-chōme; opening date not found in a source read', background: 'No source names the owner.', philosophy: null, specialty: 'Pizza; Bolognese.',
      anecdotes: [
        { text: '"The pasta came with unlimited cheese, and they generously added a lot unless you said \'stop.\'" — June 2026.', source: R + 'B535569912/' },
        { text: '"The private room on the terrace is equipped with plush sofas, making it incredibly comfortable." — March 2026.', source: R + 'B524930453/' },
      ],
      japanese_sources_summary: '食べログ: BEar Terrace、銀座7-7-12 銀座STEPS 4F、新橋駅から徒歩3分、8席、平日18:30〜翌5:00、土日祝休、カード・IC・QR可、ビストロ&バー。2026年の口コミ: 銀座7丁目の路地裏、カウンター4席ほどとテラス、ソファのテラス個室、マルゲリータとボロネーゼ(2,400円ほど)、チーズはストップと言うまでかけ放題、音楽、2,000〜5,000円。',
      confidence: 'low', sources: [TB, R + 'B524930453/', R + 'B531428886/', R + 'B532805742/', R + 'B535569912/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hard-to-find 4F entrance; terrace best in warm weather; late-night hours.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-7-12 銀座STEPS 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目7番12号 (go) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532805742/', R + 'B531428886/'],
    price_note: 'Pasta and pizza price from a July 2026 review.', last_checked: TODAY, items: [
      it('ボロネーゼ', 'boroneeze', 'Bolognese with grated cheese', '', 'Pasta', 'no', 'no', '', 'bolognese'),
      it('マルゲリータ', 'marugeriita', 'Margherita pizza', '', 'Pizza', 'no', 'no', '', 'margherita'),
    ] }, {
    cuisine: '隠れたテラスのビストロバー・ボロネーゼやマルゲリータ・朝5時まで',
    neighborhood: '銀座七丁目の路地裏、銀座STEPS 4F。新橋駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。マルゲリータなどのピザとボロネーゼなどのパスタにチーズのビストロバーのメニューで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。ボロネーゼやチーズをかけたパスタ・ピザ。',
    notes: '[ビストロバー・銀座7丁目の隠れたテラス] 銀座7丁目の路地裏、通りからは見つけにくいビル4階のビストロバーで、カウンター4席ほど、建物の外階段を望むおしゃれなテラス、ソファを置いたテラスの個室。熊のモチーフが目印。2026年の口コミでは、もちもちのピザとパスタ(マルゲリータとボロネーゼで2,400円ほど)、チーズは「ストップ」と言うまでたっぷり削ってくれます。音楽が流れ、暖かい季節はテラスにグループが集い、平日は朝5時まで。予算は2,000〜5,000円ほど。',
  });
}

// ================================================================ ル スーリール ダンジュ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13179245/'; const R = TB + 'dtlrvwlst/';
  const d = day(['18:00', '23:00']);
  put({
    id: 'tokyo_le_sourire_dange_shimbashi', name: 'ル スーリール ダンジュ (Le Sourire d\'Ange)', category: 'OMNI',
    lat: 35.66744, lng: 139.759965,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: French hors d\'oeuvres courses with pâté, quiche and pasta with bottarga; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: foie-gras terrine, sweetbreads, snow crab, prosciutto and meat mains.',
    hours_raw: 'Mon–Fri and holidays 18:00–23:00; closed Saturdays and Sundays (Tabelog). Lunch only for groups of four or more booking the ¥11,000 course. ¥900 charge. Cards incl. UnionPay accepted.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimbashi 1-chōme, Ueda Bldg 4F — 1 min from Shimbashi Stn (Ginza Line)',
    cuisine: 'One-chef French in Shimbashi · changing hors-d\'oeuvres courses · ¥6,600 five-dish set with two drinks', cuisine_type: 'french',
    website: null, gmaps: gm('ル スーリール ダンジュ 新橋1-10-2 植田ビル'), menu_url: null,
    notes: "[French · the one-chef French in Shimbashi] An eleven-seat French restaurant on a fourth floor by Shimbashi Station that a February 2026 diner calls 'the miracle of Shimbashi'. The chef, from Kyūshū according to a long-time regular, runs it single-handed and still sends dishes out smoothly. The hors-d'oeuvres course changes each visit: prosciutto and pear, red-pepper mousse with snow crab and consommé jelly, foie-gras terrine, grilled whelk with mushrooms, sweetbreads, then a meat main. Portions are generous, and you can ask for smaller ones. In 2026 five à la carte dishes with two drinks came to ¥6,600, finished with bottarga pasta. Solo diners are welcome at the counter for a glass of wine or champagne. There is a ¥900 charge, and lunch is only for groups of four or more booking the ¥11,000 course.",
    chef_bio: { chef_name: null, roles: [], origin: 'Shimbashi 1-chōme; opening date not found in a source read', background: 'Reviewers describe a single owner-chef from Kyūshū; no source names the chef.', philosophy: null, specialty: 'Foie-gras terrine; hors-d\'oeuvres course.',
      anecdotes: [
        { text: '"Despite being run by just one person, the dishes come out smoothly." — February 2026.', source: R + 'B523299466/' },
        { text: '"Since the chef (who is from Kyushu) speaks Japanese, I can request a smaller portion." — a long-time regular, October 2025.', source: R + 'B517366085/' },
      ],
      japanese_sources_summary: '食べログ: ル スーリール ダンジュ、新橋1-10-2 植田ビル4F、新橋駅から徒歩1分、11席、平日・祝18:00〜23:00、土日休、昼は4名以上で11,000円のコースを予約の場合のみ、チャージ900円、カード可(銀聯含む)。口コミ(2024〜2026年): オーナーシェフ(九州出身)がひとりで切り盛り、オードブルのコース(生ハムと洋梨、パプリカのムースとズワイ蟹、フォアグラのテリーヌ、つぶ貝と茸、リ・ド・ヴォー)、量は多めで調整可、2026年2月はアラカルト5品とドリンク2杯で6,600円、からすみのパスタ、「新橋の奇跡」。',
      confidence: 'low', sources: [TB, R + 'B523299466/', R + 'B517366085/', R + 'B493270340/', R + 'B487800047/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; solo diners welcome; ask for smaller portions. ¥900 charge.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Portion sizes adjusted on request.', source: R + 'B517366085/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒105-0004 東京都港区新橋1-10-2 植田ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; latest review February 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都港区新橋一丁目10番 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523299466/', TB],
    price_note: 'À la carte set price from a February 2026 review; lunch course price from Tabelog.', last_checked: TODAY, items: [
      it('アラカルト5品とドリンク2杯', '', 'Five à la carte dishes with two drinks', '¥6,600', 'Sets', 'no', 'no', '2026.', 'alacarte_set'),
      it('ランチコース(4名以上・予約)', 'ranchi koosu', 'Lunch course (groups of four or more, booked)', '¥11,000', 'Courses', 'no', 'no', '', 'lunch_course'),
      it('フォアグラのテリーヌ', 'foagura no teriinu', 'Foie-gras terrine', '', 'Hors d\'oeuvres', 'ask', 'no', '', 'foie_terrine'),
    ] }, {
    cuisine: 'シェフひとりの新橋のフレンチ・替わるオードブルのコース・アラカルト5品とドリンク2杯で6,600円',
    neighborhood: '新橋一丁目、植田ビル4F。新橋駅(銀座線)から徒歩1分',
    gf_detail: '実際上グルテンフリーではありません。パテ、キッシュ、からすみのパスタなどのオードブルのコース。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。フォアグラのテリーヌ、リ・ド・ヴォー、ズワイ蟹、生ハム、肉のメイン。',
    notes: '[フレンチ・新橋のシェフひとりのフレンチ] 新橋駅すぐのビル4階、11席のフレンチで、2026年2月の口コミでは「新橋の奇跡」。長年の常連によればシェフは九州出身で、ひとりで切り盛りしながら料理はスムーズに出てきます。オードブルのコースは毎回替わり、生ハムと洋梨、パプリカのムースとズワイ蟹とコンソメのジュレ、フォアグラのテリーヌ、つぶ貝と茸のハーブ焼き、リ・ド・ヴォー、そして肉のメイン。量はたっぷりで、少なめにも頼めます。2026年はアラカルト5品とドリンク2杯で6,600円、締めにからすみのパスタ。カウンターでワインやシャンパンを一杯だけのひとり客も歓迎。チャージ900円、昼は4名以上で11,000円のコースを予約した場合のみ。',
  });
}

// ================================================================ ラ ニュイ ブランシュ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13053738/'; const R = TB + 'dtlrvwlst/';
  const n = day(['18:00', '02:00']);
  put({
    id: 'tokyo_la_nuit_blanche_ginza7', name: 'ラ ニュイ ブランシュ (La Nuit Blanche)', category: 'OMNI',
    lat: 35.670618, lng: 139.760356,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine bar with French-Italian dishes (trippa, pasta, risotto); no source describes wheat use beyond the pasta, or a gluten-free option.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: trippa (tripe) and meat and seafood dishes.',
    hours_raw: 'Mon–Sat 18:00–2:00; closed Sundays (Tabelog). Reservation required. Guests with strong perfume, scented fabric softener or tobacco smell may be refused. Cards accepted.',
    hours: { 0: n, 1: n, 2: n, 3: n, 4: n, 5: n }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 7-chōme, Tōken Bldg B1F — 4 min from Ginza Stn, 5 min from Shimbashi Stn',
    cuisine: 'Basement wine bar since 2008 · French wines, Burgundy back-vintages · French-Italian food until 2 a.m.', cuisine_type: 'other',
    website: null, gmaps: gm('ラ ニュイ ブランシュ 銀座7-2-8 東建ビル'), menu_url: null,
    notes: "[Wine bar · Burgundy until 2 a.m.] A dim basement wine bar in Ginza 7-chōme, open since June 2008, for adults who want wine with real food. The house asks guests not to come with strong perfume, scented fabric softener or tobacco smell on their clothes, to protect the aromas. A regular of more than a hundred visits calls the owner its highlight, with deep and opinionated knowledge of French wine. Glasses lean to young vintages and new producers, while bottles run deep in 1990s Burgundy, plus Alsace and the Rhône. A June 2026 diner was served at the counter by a French-speaking Mr Haba. The food is French-Italian, with trippa, pasta and risotto, which the kitchen once made off-menu with shaved white truffle. Book ahead. About ¥15,000–30,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 June 2008 (Tabelog)', background: 'A long-time regular describes a wine-expert owner; a June 2026 diner names a French-speaking Mr Haba at the counter; the shop text does not name the owner.', philosophy: '"This is a place for adults to enjoy wine and food." (Tabelog shop text)', specialty: 'French wine; trippa; pasta.',
      anecdotes: [
        { text: '"The highlight of this place is undoubtedly the owner. His deep knowledge and passion for wine, especially French wines, are remarkable." — a 104-visit regular, May 2026.', source: R + 'B143764169/' },
        { text: '"I requested a risotto that wasn\'t on the menu, and they generously topped it with wonderful white truffle." — November 2025.', source: R + 'B517105190/' },
        { text: '"At the bar counter, served by the knowledgeable Mr. Haba, who is fluent in French…" — June 2026.', source: R + 'B529988956/' },
      ],
      japanese_sources_summary: '食べログ: ラ ニュイ ブランシュ、銀座7-2-8 東建ビルB1F、銀座駅から徒歩4分・新橋駅から5分、12席、月〜土18:00〜翌2:00、日休、要予約、2008年6月1日開店、香水・柔軟剤・ハンドクリーム・煙草の匂いが強い場合は入店を断る場合あり、カード可。2026年の口コミ: ワインに詳しいオーナー、グラスは若いヴィンテージと新しい生産者、ボトルは90年代のブルゴーニュが豊富、アルザス・ローヌ、フランス語を話す Haba 氏(英文表記)、トリッパ、パスタ、白トリュフのリゾット、1.5〜3万円。',
      confidence: 'low', sources: [TB, R + 'B143764169/', R + 'B529988956/', R + 'B524038133/', R + 'B517105190/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation required; avoid strong scents. French spoken at the bar.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-2-8 東建ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated March–June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目2番8号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B143764169/', R + 'B529988956/'],
    price_note: 'No prices captured; reviewers spend ¥15,000–30,000.', last_checked: TODAY, items: [
      it('トリッパ', 'torippa', 'Trippa (tripe)', '', 'Food', 'ask', 'no', '', 'trippa'),
      it('パスタ', 'pasuta', 'Pasta', '', 'Food', 'no', 'ask', '', 'pasta'),
      it('グラスワイン', 'gurasu wain', 'Wine by the glass', '', 'Drinks', 'gf', 'ask', '', 'wine_glass'),
    ] }, {
    cuisine: '2008年からの地下のワインバー・フランスワインとブルゴーニュのバックヴィンテージ・深夜2時までフレンチとイタリアンの料理',
    neighborhood: '銀座七丁目、東建ビルB1F。銀座駅から徒歩4分、新橋駅から5分',
    gf_detail: '要確認。トリッパ、パスタ、リゾットなどフレンチとイタリアンの料理のワインバー。パスタ以外の小麦の使用やグルテンフリーの対応は書かれていません。',
    vegan_detail: '記述上はヴィーガンではありません。トリッパや肉・魚介の料理。',
    notes: '[ワインバー・深夜2時までのブルゴーニュ] 銀座七丁目の薄暗い地下のワインバーで、2008年6月開店。ワインと本格的な料理を楽しむ大人の場所で、香りを守るため強い香水や柔軟剤、煙草の匂いがする客は断ることも、と店は記しています。100回以上通う常連は、フランスワインに深くこだわりの強い知識を持つオーナーこそ一番の魅力と言います。グラスは若いヴィンテージや新しい生産者が中心、ボトルは90年代のブルゴーニュが豊富で、アルザスやローヌも。2026年6月にはフランス語を話す Haba 氏(英文の口コミ)がカウンターで接客。料理はフレンチとイタリアンで、トリッパ、パスタ、メニューにない白トリュフのリゾットを作ってくれたことも。要予約、1人1.5〜3万円ほど。',
  });
}

save();
