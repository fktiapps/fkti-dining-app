// Ginza Station half-mile sweep (805 m), batch 95 — all-genre phase (all OMNI).
//   + Furutoshi (casual Italian in the Solaria Nishitetsu Hotel; breakfast to dinner)
//   + セント・サワイオリオンズ (Saint Sawai Orions: 1972 bar-restaurant founded by bartender Sawai)
//   + ル・ボヌール (Le Bonheur: French on 3F of the Sun-mi Takamatsu building)
//   + スペインレストラン 銀座エスペロ (Spanish in Ginza for 60+ years; award-winning paella)
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-25';
const { put, save } = openSweep(TODAY);

// ================================================================ Furutoshi
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13131389/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['07:00', '10:00'], ['11:30', '15:00'], ['17:30', '22:00']);
  const sat = day(['07:00', '10:00'], ['11:30', '17:00'], ['17:30', '22:00']);
  const sun = day(['07:00', '10:00'], ['11:30', '17:00'], ['17:30', '21:00']);
  put({
    id: 'tokyo_furutoshi_ginza', name: 'Furutoshi (フルトシ)', category: 'OMNI',
    lat: 35.67084, lng: 139.767289,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Italian courses (antipasti, pasta, a fish or meat main, dessert) with focaccia and grissini; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses include prosciutto, mozzarella, mackerel, yellowtail and meat, though vegetables are a strength.',
    hours_raw: 'Mon–Fri 7:00–10:00, 11:30–15:00 and 17:30–22:00; Sat 7:00–10:00, 11:30–17:00 (café after lunch) and 17:30–22:00; Sun and holidays the same but dinner to 21:00; open year-round with hotel closures (Tabelog). Course L.O. 13:30 lunch, 20:30 dinner.',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: sat, 6: sun }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Solaria Nishitetsu Hotel Ginza 2F, Ginza 4-chōme — 3 min from Higashi-Ginza Stn',
    cuisine: 'Casual Italian for adults (Nishiazabu and Ginza, 20+ years) · six-course plans with a five-item antipasto, choice of pasta and main · free-flow with sparkling wine · hotel breakfast from 7:00', cuisine_type: 'other',
    website: 'https://www.furutoshi-ginza.com/', gmaps: gm('Furutoshi ソラリア西鉄ホテル銀座'), menu_url: null,
    notes: "[Italian · relaxed courses in the Solaria Nishitetsu Hotel] A 48-seat casual Italian on the hotel's second floor, open since 2011, from a restaurant that has served Nishiazabu and Ginza for over 20 years with \"safe ingredients\". Dinner Course A runs six dishes: a soup amuse (potato or sweet potato) with grissini or house focaccia, a five-item antipasto (sakura-shrimp quiche, terrine, mackerel, Shine Muscat with mozzarella and prosciutto), a choice of pasta and a main such as smoky yellowtail, then dessert. Portions are generous, vegetables shine, and free-flow plans include sparkling wine. It also does hotel breakfast from 7 am and weekend café time. Lunch about ¥4,000–5,000, dinner ¥6,000–15,000.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 22 September 2011 (Tabelog)', background: 'Has operated in Nishiazabu and Ginza for over 20 years (Tabelog listing).', philosophy: 'Delicious dishes from safe ingredients (Tabelog listing).', specialty: 'Antipasto platter; course dinners.',
      anecdotes: [
        { text: '"Today\'s appetizer selection of 5 items: … a sakura shrimp quiche… a terrine… mackerel… a bruschetta with dried fruits, and in the center was a dish of Shine Muscat grapes topped with mozzarella and prosciutto." — September 2026, Standard Plan A.', source: R + 'B536118036/' },
        { text: '"The buri (yellowtail) had a smoky aroma that complemented its richness… the portions were generous, and I left feeling full." — October 2026, Dinner Course A, solo.', source: R + 'B537314983/' },
      ],
      japanese_sources_summary: '食べログ: Furutoshi、銀座4-9-2 ソラリア西鉄ホテル銀座2F、東銀座駅徒歩3分、48席、平日7:00〜10:00・11:30〜15:00・17:30〜22:00、土は昼が17:00まで、日祝は夜が21:00まで、年中無休(ホテルに準ずる)、コースのL.O.は昼13:30・夜20:30、2011年9月22日開店、公式サイト furutoshi-ginza.com。店の紹介: 西麻布と銀座で20年以上、安心安全な食材の大人のカジュアルイタリアン、スパークリングワインや生ビール付きの飲み放題、ダブルメインの贅沢コース。2026年の口コミ: スタンダードプランA(6品、パスタとメインを選択)、じゃがいものスープとグリッシーニ、前菜5種(桜海老のキッシュ、テリーヌ、鯖、ドライフルーツのブルスケッタ、シャインマスカットとモッツァレラと生ハム)、さつまいものポタージュ、自家製フォカッチャ、燻香の鰤、量が多い、野菜がおいしい、カジュアルな雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B536118036/', R + 'B537314983/', R + 'B536259845/', R + 'B536772676/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座4-9-2 ソラリア西鉄ホテル銀座 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座四丁目9番2号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536118036/', R + 'B537314983/'],
    price_note: 'No course prices captured; lunch ¥4,000–5,000, dinner ¥6,000–15,000 (Tabelog).', last_checked: TODAY, items: [
      it('ディナーコースA', '', 'Dinner Course A: soup, five antipasti, pasta, main, dessert', '', 'Courses', 'no', 'no', 'October 2026.', 'course_a'),
      it('前菜5種盛り合わせ', '', 'Five-item antipasto', '', 'Antipasti', 'ask', 'no', '', 'antipasto5'),
    ] }, {
    cuisine: '西麻布と銀座で20年以上の大人のカジュアルイタリアン・前菜5種、パスタとメインを選ぶ6品のコース・スパークリングワイン付きの飲み放題・7時からホテルの朝食',
    neighborhood: 'ソラリア西鉄ホテル銀座2F、銀座四丁目。東銀座駅から徒歩3分',
    gf_detail: '要確認。前菜、パスタ、魚か肉のメイン、デザートのイタリアンのコースに、フォカッチャやグリッシーニ。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。コースには生ハム、モッツァレラ、鯖、鰤、肉があります(野菜は得意)。',
    notes: '[イタリアン・ソラリア西鉄ホテルの気軽なコース] ホテル2階の48席のカジュアルイタリアンで2011年開店、「安心安全な食材」で西麻布と銀座で20年以上続く店です。ディナーコースAは6品で、じゃがいもやさつまいものスープにグリッシーニか自家製フォカッチャ、前菜5種(桜海老のキッシュ、テリーヌ、鯖、シャインマスカットとモッツァレラと生ハム)、選べるパスタと燻香の鰤などのメイン、デザート。量が多く野菜がおいしく、飲み放題にはスパークリングワインも。朝7時からのホテルの朝食や週末のカフェタイムも。昼は4,000〜5,000円、夜は6,000〜15,000円ほど。',
  });
}

// ================================================================ セント・サワイオリオンズ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13014983/'; const R = TB + 'dtlrvwlst/';
  const d = day(['13:00', '23:00']);
  put({
    id: 'tokyo_saint_sawai_orions_ginza', name: 'セント・サワイオリオンズ (Saint Sawai Orions)', category: 'OMNI',
    lat: 35.670134, lng: 139.760182,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Bar food (wagyu roast beef, Spaghetti Vivalentino, pasta) and a caramel pudding parfait; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu roast beef, pudding.',
    hours_raw: 'Mon–Fri 13:00–18:00 café time (one drink each) and 18:00–23:00 dinner (L.O. 22:00; two orders each, incl. a drink); closed Sat, Sun and holidays; 10% service charge (Tabelog). From 1 November smoking is allowed all day and under-20s may not enter.',
    hours: { 0: d, 1: d, 2: d, 3: d, 4: d }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 7-chōme, New Ginza Bldg 10F — 3 min from Ginza Stn',
    cuisine: 'Showa-era bar-restaurant since 1972 · ~150 cocktails and many whiskies · wagyu roast beef · pudding parfait finished at the table · live piano · smoking allowed (all day from 1 Nov)', cuisine_type: 'other',
    website: 'https://orions.tokyo', gmaps: gm('セント・サワイオリオンズ ニューギンザビル'), menu_url: null,
    notes: "[Bar · a 1972 Ginza bar-restaurant with live piano] Founded in 1972 by the celebrated bartender Sawai, a 10th-floor bar-restaurant styled like a 1950s European dining bar, with 49 seats (8 at the counter, about 40 on sofas). Live piano plays through the evening. The house signatures are a special wagyu roast beef served since opening and a lavish caramel pudding parfait created by the house pastry chef and finished in front of you (¥2,200), plus Spaghetti Vivalentino, about 150 cocktails and plenty of whisky. Weekday afternoons are café time (iced coffee ¥1,200); until 5 pm you may bring cake from the affiliated shop downstairs at no charge. Evenings carry a ¥1,650 cover and two orders each. From 1 November smoking is allowed all day and under-20s may not enter.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1972 by bartender Sawai (Tabelog listing; August 2026 review)', background: 'The founder\'s given name is romanised inconsistently in the machine-translated listing, so only the surname is used.', philosophy: null, specialty: 'Wagyu roast beef; pudding parfait; cocktails.',
      anecdotes: [
        { text: '"The cover charge was JPY 1650, and the pudding was JPY 2200, which is quite pricey. However, the atmosphere was lovely with live piano music playing continuously." — August 2026.', source: R + 'B533412976/' },
        { text: '"You can take away cakes from the affiliated cake shop on the first floor until 5 PM without any charge, and enjoy them here. The fruit cake is delicious!" — August 2026.', source: R + 'B532971946/' },
      ],
      japanese_sources_summary: '食べログ: セント・サワイオリオンズ、銀座7-3-13 ニューギンザビル10F、銀座駅徒歩3分、49席(カウンター8・ソファ約40)、平日13:00〜18:00カフェタイム(1ドリンク制)・18:00〜23:00ディナー(2オーダー制、L.O. 22:00)、土日祝休、サービス料10%、11月1日から終日喫煙可で20歳未満入店不可(それまではカフェタイム禁煙、18時以降喫煙可)、公式サイト orions.tokyo。店の紹介: 1972年創業、世界に知られるバーテンダーSawai氏の伝統の味、創業以来の「厳選和牛の特製ローストビーフ」、パティシエの「プリンパフェ」、ウイスキーと約150種のカクテル、1950年代のヨーロッパのレストランバーの雰囲気。2026年の口コミ: アイスコーヒー1,200円、1階の系列のケーキ店のケーキを17時まで無料で持ち込める、チャージ1,650円、プリン2,200円、生ピアノ、伝説のバーテンダーSawai氏が1972年に創業、ローストビーフ、スパゲッティ ヴィヴァレンティーノ、目の前で仕上げるプリン。',
      confidence: 'medium', sources: [TB, R + 'B533412976/', R + 'B532971946/', R + 'B533945296/', R + 'B536666114/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order minimums; smoking allowed; adults only from 1 Nov.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座7-3-13 ニューギンザビル 10F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (notes a 1 November policy change); reviews dated August–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座七丁目3番13号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533412976/', R + 'B532971946/'],
    price_note: 'Prices from August 2026 reviews; plus 10% service.', last_checked: TODAY, items: [
      it('プリンパフェ', '', 'Pudding parfait, finished at the table', '¥2,200', 'Dessert', 'ask', 'no', 'August 2026.', 'pudding_parfait'),
      it('特製ローストビーフ', '', 'Special wagyu roast beef', '', 'Signature', 'ask', 'no', '', 'roast_beef'),
      it('スパゲッティ ヴィヴァレンティーノ', '', 'Spaghetti Vivalentino (sweet-spicy tomato)', '', 'Pasta', 'no', 'ask', 'September 2026.', 'vivalentino'),
      it('アイスコーヒー', '', 'Iced coffee (café time)', '¥1,200', 'Drinks', 'ask', 'ask', 'August 2026.', 'iced_coffee'),
      it('チャージ', '', 'Evening cover charge', '¥1,650', 'Charge', '', '', 'August 2026.', 'cover'),
    ] }, {
    cuisine: '1972年からの昭和のバーレストラン・約150種のカクテルとウイスキー・和牛のローストビーフ・席で仕上げるプリンパフェ・生ピアノ・喫煙可(11月1日から終日)',
    neighborhood: '銀座七丁目、ニューギンザビル10F。銀座駅から徒歩3分',
    gf_detail: '要確認。バーの料理(和牛のローストビーフ、スパゲッティ ヴィヴァレンティーノ、パスタ)とカラメルのプリンパフェ。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。和牛のローストビーフ、プリン。',
    notes: '[バー・生ピアノの流れる1972年の銀座のバーレストラン] 名バーテンダーのSawai氏が1972年に創業した、1950年代のヨーロッパのダイニングバー風のビル10階の店で、49席(カウンター8、ソファ約40)。夜は生ピアノが流れます。看板は創業以来の特製和牛ローストビーフと、パティシエ考案で目の前で仕上げる豪華なカラメルのプリンパフェ(2,200円)、スパゲッティ ヴィヴァレンティーノ、約150種のカクテルと豊富なウイスキー。平日の午後はカフェタイム(アイスコーヒー1,200円)で、17時までは下の系列店のケーキを無料で持ち込めます。夜はチャージ1,650円で一人2オーダー。11月1日からは終日喫煙可、20歳未満は入店できません。',
  });
}

// ================================================================ ル・ボヌール
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13014860/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:00', '14:30'], ['17:00', '21:30']); const we = day(['11:00', '15:00'], ['17:00', '20:30']);
  put({
    id: 'tokyo_le_bonheur_sunmi_ginza', name: 'ル・ボヌール (Le Bonheur)', category: 'OMNI',
    lat: 35.67124, lng: 139.760992,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Classic French courses (abalone, lobster, foie gras, wagyu steak) whose sauces are not described; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood, foie gras and wagyu courses.',
    hours_raw: 'Mon–Fri 11:00–14:30 and 17:00–21:30; Sat, Sun and holidays 11:00–15:00 and 17:00–20:30; open year-round except New Year (Tabelog).',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: we, 6: we }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 6-chōme, Sun-mi Takamatsu Bldg 3F, just off Sukiyabashi crossing — 3 min from Ginza Stn',
    cuisine: 'Classic French in private rooms · lunch courses from ¥3,850, dinner from ¥11,000 · anniversary and steak courses · in a 10-storey restaurant building with a ground-floor concierge', cuisine_type: 'french',
    website: 'http://www.takamatsu-inc.co.jp/honten.htm', gmaps: gm('ル・ボヌール サンミ高松 銀座'), menu_url: null,
    notes: "[French · private-room classics in the Sun-mi Takamatsu building] The French floor (52 seats, mostly private rooms) of Sun-mi Takamatsu, a 10-storey restaurant building just off Sukiyabashi crossing where a concierge greets you on the ground floor. The listing calls the food a modern take on classic nouvelle cuisine from a long-serving chef, using abalone, lobster, foie gras and wagyu. Lunch courses start at ¥3,850 and dinner at ¥11,000, including anniversary and steak courses. It's a standby for business meals, introductions and celebrations, and the privacy is the draw. Recent reviews are few; one 2026 diner found it pricey for the location but matched by the quality.",
    chef_bio: { chef_name: null, roles: [], origin: 'Main branch of the Sun-mi restaurants (Tabelog listing)', background: 'Part of Takamatsu’s Sun-mi restaurant building (takamatsu-inc.co.jp).', philosophy: 'Modern take on classic nouvelle cuisine (Tabelog listing).', specialty: 'Classic French courses.',
      anecdotes: [
        { text: '"You can savor well-chosen ingredients like abalone, lobster, foie gras, and Wagyu beef, embodying the essence of French cuisine… Since almost every room is private, I didn\'t encounter any other guests." — 2022, business dinner.', source: R + 'B443715258/' },
        { text: '"The entire building is dedicated to the restaurant… Given its location, the prices were somewhat higher, but the quality of the dishes matched the cost." — March 2026, weekday lunch.', source: R + 'B524105090/' },
      ],
      japanese_sources_summary: '食べログ: ル・ボヌール、銀座6-3-9 Sun-mi高松3F、銀座駅徒歩3分、52席、座敷、平日11:00〜14:30・17:00〜21:30、土日祝11:00〜15:00・17:00〜20:30、年末年始以外無休、子ども可、公式サイト takamatsu-inc.co.jp。店の紹介: 旬の素材の本格フレンチ、伝統的なヌーヴェル・キュイジーヌを現代風に、長年腕を磨いたシェフ、厳選の高級食材、ディナーコース11,000円から(記念日・ステーキコース)、ランチコース3,850円から、10階建てのレストランビル「Sun-mi本店」で1階のコンシェルジュが案内。口コミ: ほぼ全室個室で商談や顔合わせ向き、鮑・オマール・フォアグラ・和牛の古典的なフレンチ、白身魚のコロッケのアミューズ(2022年)、2026年3月の昼は値段は高めだが質に見合う。',
      confidence: 'low', sources: [TB, R + 'B443715258/', R + 'B524105090/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Concierge on the ground floor.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座6-3-9 Sun-mi高松 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current with course prices; most recent review March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座六丁目3番9号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course starting prices from the Tabelog listing.', last_checked: TODAY, items: [
      it('ランチコース', '', 'Lunch course', '¥3,850〜', 'Courses', 'ask', 'no', 'Tabelog listing.', 'lunch_course'),
      it('ディナーコース', '', 'Dinner course (anniversary and steak options)', '¥11,000〜', 'Courses', 'ask', 'no', 'Tabelog listing.', 'dinner_course'),
    ] }, {
    cuisine: '個室で古典的なフレンチ・ランチコース3,850円から、ディナー11,000円から・記念日やステーキのコース・1階にコンシェルジュのいる10階建てのレストランビル',
    neighborhood: '銀座六丁目、数寄屋橋交差点からすぐのSun-mi高松3F。銀座駅から徒歩3分',
    gf_detail: '要確認。鮑、オマール、フォアグラ、和牛ステーキの古典的なフレンチのコースで、ソースは書かれていません。グルテンフリーの対応の記載もありません。',
    vegan_detail: 'ヴィーガンではありません。魚介、フォアグラ、和牛のコース。',
    notes: '[フレンチ・Sun-mi高松の個室で古典を] 数寄屋橋交差点のすぐそば、1階でコンシェルジュが迎える10階建てのレストランビルSun-mi高松の、フレンチのフロア(52席、ほぼ個室)。紹介文によれば、長年腕を磨いたシェフが伝統的なヌーヴェル・キュイジーヌを現代風に仕上げ、鮑、オマール、フォアグラ、和牛を使います。ランチコースは3,850円から、ディナーは11,000円からで、記念日やステーキのコースも。商談、顔合わせ、お祝いの定番で、個室の落ち着きが魅力。最近の口コミは少なく、2026年の客は場所柄高めでも質に見合うとしています。',
  });
}

// ================================================================ スペインレストラン 銀座エスペロ
{
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13244977/'; const R = TB + 'dtlrvwlst/';
  const wd = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'tokyo_ginza_espero_spanish', name: 'スペインレストラン 銀座エスペロ (Ginza Espero)', category: 'OMNI',
    lat: 35.670796, lng: 139.763581,
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella (including squid ink), ajillo, tortilla, stuffed squid and salads sit alongside pasta and bread; no source mentions gluten-free handling.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood paella, prosciutto hamburg, anchovies, sea-urchin sauce.',
    hours_raw: 'Mon–Fri 11:30–15:00 (L.O. 14:00) and 17:00–22:30 (L.O. 21:30); Sat 11:30–16:00 and 17:00–22:30; Sun and holidays 11:30–16:00 and 17:00–22:00 (Tabelog).',
    hours: { 0: wd, 1: wd, 2: wd, 3: wd, 4: wd, 5: day(['11:30', '16:00'], ['17:00', '22:30']), 6: day(['11:30', '16:00'], ['17:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 5-chōme (5-6-10) B1F — 1 min from Ginza Stn',
    cuisine: 'Spanish in Ginza for 60+ years · award-winning paella (international fideuà championship honours, 2014) · ajillo, tortilla, squid with sea-urchin sauce · ¥1,600 choose-your-own lunch', cuisine_type: 'other',
    website: 'http://ginza-espero.com/', gmaps: gm('スペインレストラン 銀座エスペロ'), menu_url: null,
    notes: "[Spanish · six decades of paella a minute from Ginza crossing] A 50-seat basement Spanish restaurant that has served Ginza for over 60 years and was renovated in 2020. It won double honours at the International Fideuà Championship in Spain in 2014, and its paella is made by a chef who is a certified judge; the paella can sell out at lunch. The ¥1,600 lunch lets you mix options such as shrimp-and-mushroom pasta and a prosciutto-studded hamburg. At night, try tomato and anchovy salad, mushroom ajillo, stuffed squid with a standout sea-urchin sauce and squid-ink paella. Queues at weekday lunch; some find the salad and tortilla salty.",
    chef_bio: { chef_name: null, roles: [], origin: 'In Ginza for over 60 years; renovated and relisted 30 March 2020 (Tabelog)', background: 'Chef is a certified paella judge (Tabelog listing).', philosophy: null, specialty: 'Paella; fideuà.',
      anecdotes: [
        { text: '"Stuffed Spear Squid with Sea Urchin Sauce — The sauce is exceptional. I highly recommend trying it. Squid Ink Paella." — October 2026.', source: R + 'B538014374/' },
        { text: '"Even on a weekday, there was a line both when I entered and when I left. I want to come back to try the famous paella, which was already sold out." — October 2026, ¥1,600 lunch.', source: R + 'B537823724/' },
      ],
      japanese_sources_summary: '食べログ: スペインレストラン 銀座エスペロ、銀座5-6-10 B1F、銀座駅徒歩1分、50席、平日11:30〜15:00・17:00〜22:30、土11:30〜16:00・17:00〜22:30、日祝11:30〜16:00・17:00〜22:00、時間制限なし、2020年3月30日開店(改装)、公式サイト ginza-espero.com。店の紹介: 銀座で60年以上の本格スペイン料理、2020年改装、2014年6月4日にスペインのフィデウア国際大会でダブル受賞、公認審査員のシェフによる受賞歴多数のパエリア。2026年10月の口コミ: 1,600円の選べるランチ(海老ときのこのパスタ、生ハム入りハンバーグ)、平日も行列、パエリアは売り切れ、サラダが塩辛い、トマトとアンチョビのサラダ、マッシュルームのアヒージョ、スペインオムレツは少し塩辛い、ヤリイカの詰め物の雲丹ソース、イカ墨のパエリア、蟹のクレープ。',
      confidence: 'medium', sources: [TB, R + 'B538014374/', R + 'B537823724/', R + 'B537734830/', R + 'B538051587/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queues at weekday lunch.' },
    safety: { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座5-6-10 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座五丁目6番10号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537734830/', R + 'B538014374/'],
    price_note: 'Lunch price from October 2026 reviews.', last_checked: TODAY, items: [
      it('ランチ', '', 'Choose-your-own lunch (e.g. shrimp-and-mushroom pasta, prosciutto hamburg)', '¥1,600〜', 'Lunch', 'no', 'no', 'October 2026.', 'lunch'),
      it('イカ墨のパエリア', '', 'Squid-ink paella', '', 'Paella', 'ask', 'no', 'October 2026.', 'squid_ink_paella'),
      it('ヤリイカの詰め物 雲丹ソース', '', 'Stuffed spear squid with sea-urchin sauce', '', 'Tapas', 'ask', 'no', 'October 2026.', 'stuffed_squid'),
      it('マッシュルームのアヒージョ', '', 'Mushroom ajillo', '', 'Tapas', 'ask', 'ask', 'October 2026.', 'ajillo'),
    ] }, {
    cuisine: '銀座で60年以上のスペイン料理・受賞歴のあるパエリア(2014年フィデウア国際大会)・アヒージョ、トルティージャ、ヤリイカの雲丹ソース・1,600円の選べるランチ',
    neighborhood: '銀座五丁目(5-6-10)B1F。銀座駅から徒歩1分',
    gf_detail: '要確認。パエリア(イカ墨も)、アヒージョ、トルティージャ、イカの詰め物、サラダのほか、パスタやパンも。グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚介のパエリア、生ハム入りハンバーグ、アンチョビ、雲丹ソース。',
    notes: '[スペイン料理・銀座の交差点から1分、60年のパエリア] 銀座で60年以上続き、2020年に改装した地下の50席のスペイン料理店。2014年にスペインのフィデウア国際大会でダブル受賞し、パエリアは公認審査員のシェフが作ります(昼は売り切れることも)。1,600円のランチは海老ときのこのパスタや生ハム入りのハンバーグなどを組み合わせて。夜はトマトとアンチョビのサラダ、マッシュルームのアヒージョ、雲丹ソースが絶品のヤリイカの詰め物、イカ墨のパエリアを。平日の昼は行列、サラダやトルティージャが塩辛いという声も。',
  });
}

save();
