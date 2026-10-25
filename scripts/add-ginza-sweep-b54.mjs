// Ginza Station half-mile sweep (805 m), batch 54 — four small places with 2026 reviews (all OMNI).
//   + WineBar Pluribus (by-the-glass fine-wine bar with free-flow plans; listed under "vegetable dishes"; owner not named)
//   + AOI (hamburg-steak shop since 1999 on Shōwa-dōri; chef Iwai per a 2026 review; ownership not stated)
//   + ヴァン・ド・レーヴ (wine bistro since 2006; master/owner not named)
//   + カンティーナ ヴィニエトゥッティ (Tsukiji Italian bar since 2013; 741 m; owner not named)
// Skipped: itumo × LOVER (last review March 2024). Left for later as OMNI: ぶりす (group), 五右衛門 ウイング新橋店 (chain), ハウリン.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ WineBar Pluribus
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13287592/'; const R = TB + 'dtlrvwlst/';
  const e = day(['17:00', '23:30']);
  put({
    id: 'tokyo_winebar_pluribus_ginza5', name: 'WineBar Pluribus (ワインバー プルリバス)', category: 'OMNI',
    lat: 35.669615, lng: 139.765569,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A wine bar with a food course; Tabelog lists it under vegetable dishes, but no source describes the food\'s ingredients or a gluten-free option.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog tags it for vegetable dishes, but reviews describe only the wines; no vegan option is described.',
    hours_raw: 'Tue 19:00–23:30; Wed–Sun and holidays 17:00–23:30; closed Mondays (Tabelog). Cards, IC and QR accepted.',
    hours: { 1: day(['19:00', '23:30']), 2: e, 3: e, 4: e, 5: e, 6: e }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme, Kōda Bldg 4F — 3 min from Higashi-Ginza Stn',
    cuisine: 'Fine wine by the glass, temperature-controlled · ¥10,000–11,000 free-flow and course plans · Burgundy and Japanese wines', cuisine_type: 'other',
    website: null, gmaps: gm('WineBar Pluribus 銀座5-11-13 幸田ビル'), menu_url: null,
    notes: "[Wine bar · premium wines by the glass] A calm, elegant 22-seat wine bar on a fourth floor near Higashi-Ginza Station, built around pouring high-quality wines by the glass at the right temperature so you can compare producers. In 2026 diners booked an ¥11,000 premium free-flow from Champagne through white, rosé and red, or a ¥10,000 course. One course began with Léon d'Arblay Champagne and moved on to Meursault and Aloxe-Corton. Staff help choose, including Japanese wines. Tabelog lists it under vegetable dishes, though reviewers describe the food only as delicious.",
    chef_bio: { chef_name: null, roles: [], origin: 'Ginza 5-chōme; opening date not found in a source read', background: 'No source names the owner.', philosophy: null, specialty: 'Fine wine by the glass.',
      anecdotes: [
        { text: '"The concept here is to enjoy high-quality wines by the glass! They serve wines that are temperature-controlled." — August 2026, ¥11,000 free-flow.', source: R + 'B535517152/' },
        { text: '"This JPY 10,000 course began with a beautifully bubbly Champagne (Léon D\'Arblay), followed by aromatic Burgundy wines (Meursault and Aloxe-Corton…)." — October 2026.', source: R + 'B537656632/' },
      ],
      japanese_sources_summary: '食べログ: WineBar Pluribus(ワインバー プルリバス)、銀座5-11-13 幸田ビル4F、東銀座駅から徒歩3分、22席、火19:00〜23:30、水〜日・祝17:00〜23:30、月休、カード・IC・QR可、ジャンルに「野菜料理」。2026年の口コミ: 温度管理した上質なワインをグラスで、11,000円のプレミアム飲み放題、10,000円のコース(レオン・ダルブレのシャンパーニュ、ムルソー、アロース・コルトン)、日本ワインも、落ち着いた空間。',
      confidence: 'low', sources: [TB, R + 'B535517152/', R + 'B537656632/', R + 'B534556244/', R + 'B535484328/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wine-focused; staff guide tastings; free-flow plans available.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-11-13 幸田ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目11番13号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535517152/', R + 'B537656632/'],
    price_note: 'Plan prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('プレミアムワイン飲み放題', '', 'Premium wine free-flow', '¥11,000', 'Plans', 'gf', 'ask', '2026.', 'free_flow'),
      it('コース', 'koosu', 'Wine and food course', '¥10,000', 'Courses', 'ask', 'ask', '2026.', 'course'),
    ] }, {
    cuisine: '温度管理した上質なワインをグラスで・1万〜1.1万円の飲み放題やコース・ブルゴーニュと日本ワイン',
    neighborhood: '銀座五丁目、幸田ビル4F。東銀座駅から徒歩3分',
    gf_detail: '要確認。料理のコースもあるワインバーで、食べログでは野菜料理のジャンルにも入っていますが、料理の材料やグルテンフリーの対応は書かれていません。',
    vegan_detail: '要確認。食べログでは野菜料理のジャンルですが、口コミはワインの話が中心で、ヴィーガンの選択肢は書かれていません。',
    notes: '[ワインバー・上質なワインをグラスで] 東銀座駅近くのビル4階、落ち着いて上品な22席のワインバー。温度管理した上質なワインをグラスで出し、生産者ごとに飲み比べられるのが売り。2026年の客は、シャンパーニュから白・ロゼ・赤までの11,000円のプレミアム飲み放題や、10,000円のコースを。あるコースはレオン・ダルブレのシャンパーニュに始まり、ムルソー、アロース・コルトンへ。日本ワインも含めスタッフが選ぶのを手伝ってくれます。食べログでは野菜料理のジャンルにも入っていますが、口コミでの料理の記述は「美味しい」程度です。',
  });
}

// ================================================================ AOI
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13025818/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '23:00']), we = day(['11:00', '22:00']);
  put({
    id: 'tokyo_aoi_hamburg_ginza2', name: 'AOI (エーオーアイ)', category: 'OMNI',
    lat: 35.671954, lng: 139.768879,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hamburg steaks of domestic beef and slow-sautéed onions with a secret Japanese-style sauce, garlic sauce or grated daikon and ponzu; no source says whether the patties or sauces contain wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef hamburg steaks.',
    hours_raw: 'Mon–Fri 11:00–23:00; Sat, Sun and holidays 11:00–22:00; closed over New Year (Tabelog). Touch-panel ordering. Cards, IC and QR accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme on Shōwa-dōri, Sanwa Sankō Bldg 1F — 3 min from Higashi-Ginza Stn A2',
    cuisine: 'Hamburg-steak specialist since 1999 · onion-rich domestic-beef patties · garlic, ponzu or Japanese-style sauce', cuisine_type: 'other',
    website: null, gmaps: gm('AOI 銀座2-11-9 三和産工ビル'), menu_url: null,
    notes: "[Hamburg steak · since 1999 on Shōwa-dōri] A casual, diner-like hamburg-steak specialist with a counter and tables, open since 1999 and marking its 28th anniversary on Tabelog. A 2026 regular says chef Iwai trained at a high-end French restaurant in Roppongi. Patties of domestic beef are mixed with plenty of onions sautéed for hours, so tender that chopsticks glide through. Sauces include the house Japanese-style sauce, a garlicky one and grated daikon with ponzu, and doubles are an option. You order on a touch panel; seats are close together. About ¥1,000–2,000 a head, open all day.",
    chef_bio: { chef_name: 'Chef Iwai (per a 2026 review)', roles: ['chef'], origin: 'Opened 1999 (2026 review); Tabelog marks a 28th anniversary', background: 'Trained at a high-end French restaurant in Roppongi (2026 review); ownership not stated.', philosophy: null, specialty: 'Onion-rich hamburg steak.',
      anecdotes: [
        { text: '"AOI has been a beloved hamburger steak specialty restaurant since its opening in 1999." — October 2026.', source: R + 'B537530791/' },
        { text: '"The touch panel ordering system was smooth and efficient. I ordered the grated daikon ponzu hamburger steak." — September 2026.', source: R + 'B536444385/' },
      ],
      japanese_sources_summary: '食べログ: AOI(エーオーアイ)、銀座2-11-9 三和産工ビル1F、東銀座駅A2出口から徒歩3分、21席、平日11:00〜23:00、土日祝11:00〜22:00、年末年始休、カード・IC・QR可、店舗紹介: 玉ねぎたっぷりのふわふわハンバーグで28周年。2026年の口コミ: 1999年開店、六本木の高級フレンチで修業したシェフ Iwai(英文表記)、国産牛と何時間も炒めた玉ねぎ、秘伝の和風ソース、ガーリックの効いたソース、おろしポン酢、ダブル、タッチパネルで注文、席は近め、1,000〜2,000円。',
      confidence: 'low', sources: [TB, R + 'B537530791/', R + 'B536444385/', R + 'B536400476/', R + 'B536659358/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order on the touch panel; casual and quick; open all day.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [{ text: 'Grated daikon with ponzu, and a secret Japanese-style sauce.', source: R + 'B536444385/' }], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座2-11-9 三和産工ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目11番9号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537530791/', R + 'B536444385/'],
    price_note: 'No prices captured; reviewers spend ¥1,000–2,000.', last_checked: TODAY, items: [
      it('ハンバーグ(和風ソース)', 'hanbaagu', 'Hamburg steak with secret Japanese-style sauce and rice', '', 'Mains', 'ask', 'no', '', 'hamburg_wafu'),
      it('おろしポン酢ハンバーグ', 'oroshi ponzu hanbaagu', 'Hamburg steak with grated daikon and ponzu', '', 'Mains', 'ask', 'no', '', 'hamburg_ponzu'),
    ] }, {
    cuisine: '1999年からのハンバーグ専門店・玉ねぎたっぷりの国産牛ハンバーグ・ガーリック、ポン酢、和風ソース',
    neighborhood: '銀座二丁目の昭和通り沿い、三和産工ビル1F。東銀座駅A2出口から徒歩3分',
    gf_detail: '要確認。国産牛と長時間炒めた玉ねぎのハンバーグに、秘伝の和風ソース、ガーリックソース、おろしポン酢。つなぎやソースに小麦を使うかは書かれていません。',
    vegan_detail: 'ヴィーガンではありません。牛肉のハンバーグです。',
    notes: '[ハンバーグ・昭和通りで1999年から] 食堂のような気軽な雰囲気のハンバーグ専門店で、カウンターとテーブル。1999年開店で、食べログでは28周年。2026年の常連によれば、シェフの Iwai(英文の口コミの表記)は六本木の高級フレンチで修業した人。国産牛のミンチに何時間も炒めた玉ねぎをたっぷり混ぜ、箸がすっと入る柔らかさ。ソースは秘伝の和風、ガーリックの効いたもの、おろしポン酢などで、ダブルも。注文はタッチパネル、席は近め。1,000〜2,000円ほど、通し営業。',
  });
}

// ================================================================ ヴァン・ド・レーヴ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13022678/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['17:30', '23:59']);
  put({
    id: 'tokyo_vin_de_reve_ginza1', name: 'ヴァン・ド・レーヴ (Vin de Rêve)', category: 'OMNI',
    lat: 35.673014, lng: 139.770644,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: a French wine bistro whose classics include an onion tart and a crisp pâté en croûte; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Ezo venison, sea-urchin risotto, pâté en croûte and cheese.',
    hours_raw: 'Mon–Fri 17:30–24:00 (food L.O. 22:30); Sat 17:30–23:00 (food L.O. 22:00); closed Sundays and holidays (Tabelog). Cards and d Barai accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 5: day(['17:30', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 1-chōme, Orchid Ginza Bldg 1F — 4 min from Takarachō Stn A1, 5 min from Ginza-itchōme Stn',
    cuisine: 'French wine bistro since 2006 · onion tart, crunchy salad, pâté en croûte · wine by the glass', cuisine_type: 'french',
    website: null, gmaps: gm('ヴァン・ド・レーヴ 銀座1-20-1 オーキッド銀座ビル'), menu_url: null,
    notes: "[Wine bistro · twenty years in Ginza 1-chōme] A calm 20-seat French wine bistro on a ground floor near Takarachō, open since March 2006, which marked its 20th anniversary with a special menu in 2026. Regulars always order the onion tart and the crunchy salad. Diners also mention a cheese platter, assorted vegetables, Ezo venison, sea-urchin risotto and a crisp pâté en croûte. By-the-glass pairings range from Alsace Riesling to red Burgundy and Pomerol, and small pours are offered to light drinkers. A regular credits the owner's dedication, and the master is a fan of Shōwa-era baseball. About ¥4,000–20,000 a head.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 3 March 2006 (Tabelog)', background: 'Reviewers mention an owner and a master; no source names them.', philosophy: null, specialty: 'Onion tart; pâté en croûte.',
      anecdotes: [
        { text: '"I made a reservation to celebrate the 20th anniversary menu… The course included the usual onion tart and crunchy salad, along with dessert." — March 2026.', source: R + 'B501948002/' },
        { text: '"The assorted vegetables, Ezo deer, and the risotto with sea urchin were all delicious, and the crispy pâté en croûte was fantastic!" — February 2026.', source: R + 'B522544837/' },
      ],
      japanese_sources_summary: '食べログ: ヴァン・ド・レーヴ、銀座1-20-1 オーキッド銀座ビル1F、宝町駅A1出口から徒歩4分・銀座一丁目駅から5分、20席、平日17:30〜24:00、土17:30〜23:00、日祝休、2006年3月3日開店、カード・d払い可。2026年の口コミ: 20周年記念メニュー、いつもの玉ねぎのタルトとクランチーなサラダ、チーズの盛り合わせ、野菜の盛り合わせ、蝦夷鹿、雲丹のリゾット、パテ・アン・クルート、グラスワイン(アルザスのリースリング、ブルゴーニュ、ポムロール)、少なめの注ぎにも対応、オーナーのこだわり、昭和の野球好きのマスター、4,000〜20,000円。',
      confidence: 'low', sources: [TB, R + 'B501948002/', R + 'B522544837/', R + 'B517996286/', R + 'B511751819/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Calm bistro; small wine pours on request.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [{ text: 'Smaller wine pours offered to a light drinker.', source: R + 'B501948002/' }], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座1-20-1 オーキッド銀座ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated February–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目20番1号 (go) 8m; 617 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B501948002/', R + 'B522544837/'],
    price_note: 'No prices captured; reviewers spend ¥4,000–20,000.', last_checked: TODAY, items: [
      it('玉ねぎのタルト', 'tamanegi no taruto', 'Onion tart', '', 'Starters', 'no', 'no', '', 'onion_tart'),
      it('パテ・アン・クルート', 'pate an kuruuto', 'Pâté en croûte', '', 'Starters', 'no', 'no', '', 'pate_croute'),
      it('雲丹のリゾット', 'uni no rizotto', 'Sea-urchin risotto', '', 'Mains', 'ask', 'no', '', 'uni_risotto'),
    ] }, {
    cuisine: '2006年からのフレンチのワインビストロ・玉ねぎのタルト、クランチーなサラダ、パテ・アン・クルート・グラスワイン',
    neighborhood: '銀座一丁目、オーキッド銀座ビル1F。宝町駅A1出口から徒歩4分、銀座一丁目駅から5分',
    gf_detail: '実際上グルテンフリーではありません。定番の玉ねぎのタルトやカリッとしたパテ・アン・クルートがあるフレンチのワインビストロで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: 'ヴィーガンではありません。蝦夷鹿、雲丹のリゾット、パテ・アン・クルート、チーズ。',
    notes: '[ワインビストロ・銀座一丁目で20年] 宝町寄りのビル1階、2006年3月開店の落ち着いた20席のフレンチのワインビストロで、2026年には20周年の特別メニューも。常連が必ず頼むのは玉ねぎのタルトとクランチーなサラダ。チーズの盛り合わせ、野菜の盛り合わせ、蝦夷鹿、雲丹のリゾット、カリッとしたパテ・アン・クルートなども。グラスワインはアルザスのリースリングからブルゴーニュやポムロールの赤まで料理に合わせて、お酒の弱い客には少なめに注いでくれます。常連はオーナーのこだわりを称え、マスターは昭和の野球好き。1人4,000〜20,000円ほど。',
  });
}

// ================================================================ カンティーナ ヴィニエトゥッティ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13162424/'; const R = TB + 'dtlrvwlst/';
  const wk = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_cantina_vini_tutti_tsukiji', name: 'カンティーナ ヴィニエトゥッティ (CANTINA VINI TUTTI)', category: 'OMNI',
    lat: 35.668427, lng: 139.771211,
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: an Italian bar whose lunches are lasagna and weekly pasta specials; no gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan as described: Bolognese lasagna and meat dishes.',
    hours_raw: 'Mon–Fri 11:30–14:30 (L.O. 14:00) and 17:00–23:00 (L.O. 22:30); Sun and holidays 17:00–23:00; closed Saturdays; dinner closed on irregular days (Tabelog). Lunch paid in cash per a 2026 diner. Cards, IC and d Barai accepted.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk, 6: day(['17:00', '23:00']) }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tsukiji 2-chōme near the Heisei-dōri / Matsuya-dōri crossing, East Ginza Bldg 1F — 3 min from Tsukiji Stn',
    cuisine: 'Neighbourhood Italian bar "Tutti" since 2013 · ¥1,300 lasagna lunch, weekly pasta · wine', cuisine_type: 'other',
    website: null, gmaps: gm('カンティーナ ヴィニエトゥッティ 築地2-12-16'), menu_url: null,
    notes: "[Italian · the Tsukiji neighbourhood bar] A 21-seat Italian bar on a Tsukiji side street, open since September 2013, known locally as 'Tutti', with a wooden front, a red noren and sofa seats along the walls. Lunch crowds arrive just after 11:30 for weekly pasta specials and the homemade Bolognese avocado lasagna (¥1,300 in September 2026), served with a salad. One diner noted it seems baked in a large batch and reheated. In the evening it is a casual wine bar with a wide food menu built around pasta. One 2026 diner paid cash at the table for lunch. About ¥1,000–2,000 at lunch and ¥4,000–6,000 at dinner.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 September 2013 (Tabelog)', background: 'No source names the owner or chef.', philosophy: null, specialty: 'Lasagna; weekly pasta.',
      anecdotes: [
        { text: '"I ordered the \'Homemade Bolognese Avocado Lasagna\' for JPY 1,300." — September 2026.', source: R + 'B493922233/' },
        { text: '"CANTINA VINI TUTTI is affectionately known as \'Tutti,\' an Italian bar that offers a casual dining experience… a charming wooden exterior adorned with a striking red noren." — September 2026.', source: R + 'B536535960/' },
      ],
      japanese_sources_summary: '食べログ: カンティーナ ヴィニエトゥッティ、築地2-12-16 イースト銀座びる1F、築地駅から徒歩3分、21席、平日11:30〜14:30・17:00〜23:00、日祝17:00〜23:00、土休、夜は不定休、2013年9月22日開店、カード・IC・d払い可。2026年の口コミ: 「トゥッティ」の愛称、木の外観に赤いのれん、壁沿いのソファ席、週替わりパスタのランチ、自家製ボロネーゼとアボカドのラザニア1,300円(サラダ付き)、昼は現金で席で会計、パスタ中心のアラカルト、昼1,000〜2,000円・夜4,000〜6,000円。',
      confidence: 'low', sources: [TB, R + 'B493922233/', R + 'B536535960/', R + 'B536580001/', R + 'B537738481/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual neighbourhood spot; bring cash for lunch; closed Saturdays.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0045 東京都中央区築地2-12-16 イースト銀座びる 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区築地二丁目12番16号 (go) 9m; 741 m from Ginza Stn; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B493922233/', R + 'B536580001/'],
    price_note: 'Lunch price from a September 2026 review.', last_checked: TODAY, items: [
      it('自家製ボロネーゼとアボカドのラザニア', '', 'Homemade Bolognese and avocado lasagna with salad (lunch)', '¥1,300', 'Lunch', 'no', 'no', '2026.', 'lasagna'),
      it('週替わりパスタ', 'shuugawari pasuta', 'Weekly pasta special (lunch)', '', 'Lunch', 'no', 'ask', '', 'weekly_pasta'),
    ] }, {
    cuisine: '2013年からの築地の町のイタリアンバル「トゥッティ」・1,300円のラザニアランチ、週替わりパスタ・ワイン',
    neighborhood: '築地二丁目、平成通りと松屋通りの交差点近く、イースト銀座びる1F。築地駅から徒歩3分',
    gf_detail: '実際上グルテンフリーではありません。ランチはラザニアと週替わりのパスタのイタリアンバルで、グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。ボロネーゼのラザニアや肉料理。',
    notes: '[イタリアン・築地の町のバル] 築地の路地の21席のイタリアンバルで、2013年9月開店。地元では「トゥッティ」と呼ばれ、木の外観に赤いのれん、壁沿いにソファ席。昼は11時半を過ぎると人が集まり、週替わりのパスタや自家製のボロネーゼとアボカドのラザニア(2026年9月で1,300円、サラダ付き)。まとめて焼いて温め直しているようだとの声も。夜はパスタを中心に料理の豊富な気軽なワインバル。2026年には昼を席で現金で払ったとの口コミも。昼は1,000〜2,000円、夜は4,000〜6,000円ほど。',
  });
}

save();
