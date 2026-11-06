// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 35.
//   + しぇりークラブ 京都･石塀小路 Sherry Club (sherry bar and Spanish kitchen in a storehouse on Ishibe-koji; 2008) [core]
//   + みまでり Mimaderi (kushiyaki and obanzai in a lantern-lit machiya near Karasuma Oike)                      [core]
//   + 徳まる Tokumaru (nine-seat Kyoto kappo counter behind City Hall; since 2022)                               [notable]
//   + ERUTAN RESTAURANT BAR (all-day wood-fired pizza and Italian at GOOD NATURE STATION, Kawaramachi)          [notable]
//   Same-name counts first (same brand or operator): Sherry Club — the official site lists Ginza and Kyoto only, none
//   in data, a small group, this one drafted; みまでり 1; 徳まる 1; ERUTAN 1 — the GOOD NATURE STATION restaurant-bar;
//   the building's Hyssop, RAU, TAKAYAMA and VELROSIER are in data as separate shops, and no hotel-wide record covers
//   the hotel's dining (Hyssop was drafted the same way).
//   Taken in queue order on 2026-11-06: core 26007263, 26006651; notable 26038715, 26033315. None is in
//   data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: Sherry Club 「550円（付出代として）」 (an appetizer
//   charge); みまでり 「お一人様200円（コースの場合は除きます）」; 徳まる and ERUTAN have no section.
//   Pins: みまでり's address has no lot number and matches only to town level, so loc_precise false.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-35');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ しぇりークラブ 京都･石塀小路
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26007263/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sherryclub.jp/';
  const W = day(['15:00', '24:00']);
  put({
    id: 'kyoto_sherry_club_ishibekoji', name: 'しぇりークラブ 京都･石塀小路 (Sherry Club Kyoto Ishibekoji)', category: 'OMNI',
    lat: 35.000929, lng: 135.778969, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Iberico ham, olives, marinated sardines, ajillo with bread, paella and venison; no gluten information (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; most dishes are ham, seafood or meat (Tabelog; 2025–26 reviews).',
    hours_raw: 'Tue–Fri 15:00–24:00; Sat 12:00–15:00 and 17:00–24:00; Sun 12:00–23:00 (the official site gives Sun 12:00–22:00); closed Monday (Tabelog; official site). Bookings by phone, Tabelog or e-mail. Charge: Tabelog\'s Japanese original says 「550円（付出代として）」 — ¥550 as an appetizer charge. Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 21 seats per Tabelog — 9 at the counter, 8 at tables; a December 2025 diner counted six counter seats and two tables in a half-basement. Designated smoking area; children welcome (Tabelog). In a converted storehouse on the stone-walled Ishibe-koji lane, a short walk from Yasaka Shrine; 10 min from Gion-Shijo Stn (Tabelog; 2025–26 reviews).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: day(['12:00', '15:00'], ['17:00', '24:00']), 6: day(['12:00', '23:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ishibe-koji lane by Yasaka Shrine — 10 min from Gion-Shijo Stn',
    cuisine: 'A sherry specialist with Spanish food: a deep sherry list explained glass by glass, an omakase three-glass tasting from dry to sweet, rebujito in summer; Iberico ham (imports halted by African swine fever, September 2026), olives, marinated sardines, red prawn and mushroom ajillo, sautéed Ezo venison, seafood paella, cheese matched to sherry, dried Shine Muscat, vanilla ice cream with sherry; a four-dish course (Tabelog; 2025–26 reviews)',
    website: SITE, gmaps: gm('しぇりークラブ 京都 石塀小路'), menu_url: TB + 'dtlmenu/',
    notes: "[Sherry & Spanish · Ishibe-koji by Yasaka Shrine] A hideaway bar in an old storehouse on the stone-walled lane, where the owner talks you through sherries from bone-dry to sweet — try the three-glass tasting — with jamón, ajillo, sardines and paella. About ¥5,000–10,000. Open from mid-afternoon to midnight; closed Monday.",
    chef_bio: { chef_name: null, roles: ['Owner/master (unnamed)'], origin: null,
      background: 'Opened 7 October 2008 (Tabelog); the Kyoto shop of Sherry Club, whose other bar is in Ginza (official site). Reviewers describe the master guiding first-timers at the counter (2025–26).',
      philosophy: 'Sherry for every moment — aperitif, with food, and after (official site).',
      specialty: 'Sherry tastings; paella and ajillo.',
      anecdotes: [
        { text: 'A first-timer in August 2024 was told it was fine to ask anything; by July 2026, on a third yearly visit, nine sherries were tasted while listening to the chef across the counter.', source: R + 'B490818982/' },
        { text: 'An October 2025 visitor noted a "Silence" sign in the alley and wrote that "you won\'t find any foreign guests" here; the barman\'s performances of earlier years seemed to have ended.', source: R + 'B515259218/' },
        { text: 'When a March 2026 guest mentioned how hard sherry is to find back home, the staff looked up places to recommend.', source: R + 'B525218507/' },
        { text: 'A July 2026 regular of the Ginza shop heard that the soda in the rebujito differs between the two bars.', source: R + 'B135127565/' },
      ],
      japanese_sources_summary: '公式サイト: しぇりークラブ、銀座店 (中央区銀座6-3-17) と京都店 (東山区下河原町489-2)、京都店は火〜金 15:00〜24:00、土 12:00〜15:00・17:00〜24:00、日 12:00〜22:00、シェリー酒は辛口から甘口まで食前・食中・食後に。食べログ (店舗会員): しぇりークラブ 京都･石塀小路、スペイン料理・バル・ヨーロッパ料理、祇園四条駅から徒歩10分、月曜休み、付出代550円、21席 (カウンター9・テーブル8)、分煙、カード可、子供可、2008年10月7日オープン、石塀小路の蔵、パエリアとアヒージョ。口コミ (2025年10月〜2026年9月、英語): マスターのシェリーの説明、3種の飲み比べ、イベリコ豚の生ハム (アフリカ豚熱で輸入停止)、イワシのマリネ、えびときのこのアヒージョ、Ezo の鹿肉、魚介のパエリア、半地下の空間、外国人客はいないという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B135127565/', R + 'B490818982/', R + 'B515259218/', R + 'B519778348/', R + 'B525218507/', R + 'B526479855/', R + 'B529654553/', R + 'B529965241/', R + 'B533691559/', R + 'B536381563/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The master explains each sherry at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原町489-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop and the official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.000929, 135.778969); cross-checked: GSI 京都府京都市東山区下河原町489番地 (lot) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu prices read; only the appetizer charge is priced (Tabelog).', last_checked: TODAY, items: [
      it('付出', '', 'Appetizer charge', '¥550', 'Charges', 'ask', 'ask', 'Tabelog.', 'tsukidashi'),
      it('', '', 'Three-sherry tasting (omakase)', '', 'Drinks', 'ask', 'ask', '2026 reviews.', 'sherry_flight'),
      it('', '', 'Seafood paella', '', 'Dishes', 'ask', 'no', '2025–26 reviews.', 'paella'),
    ] }, {
    cuisine: 'シェリー専門のバルとスペイン料理: グラスごとに説明してくれる豊富なシェリー、辛口から甘口までのおまかせ3種の飲み比べ、夏のレブヒート。イベリコ豚の生ハム (アフリカ豚熱で輸入停止、2026年9月)、オリーブ、イワシのマリネ、赤えびやきのこのアヒージョ、Ezo の鹿肉のソテー、魚介のパエリア、シェリーに合わせたチーズ、干しシャインマスカット、シェリーをかけたバニラアイス、4品のコース (食べログ、2025〜26年の口コミ)',
    neighborhood: '八坂神社近くの石塀小路。祇園四条駅から徒歩10分',
    gf_detail: '要確認。生ハム、オリーブ、イワシのマリネ、パンと食べるアヒージョ、パエリア、鹿肉。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあるが、料理の多くは生ハム、魚介、肉 (食べログ、2025〜26年の口コミ)。',
    notes: '[シェリーとスペイン料理・八坂神社近くの石塀小路] 石畳の小路の古い蔵を改装した隠れ家のバル。マスターが辛口から甘口までシェリーを説明してくれる (3種の飲み比べがおすすめ)。生ハム、アヒージョ、イワシ、パエリアと。5千〜1万円ほど。午後から深夜0時まで。月曜休み。',
  });
}

// ================================================================ みまでり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006651/'; const R = TB + 'dtlrvwlst/';
  const E = day(['17:30', '23:00']); const L = day(['11:30', '14:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_mimaderi', name: 'みまでり (Mimaderi)', category: 'OMNI',
    lat: 35.009926, lng: 135.761804, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers with sauce or salt, obanzai in dashi, kara-age, beef cutlet and kitsune udon (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and there are vegetable skewers and salads, but obanzai use dashi (Tabelog; 2026 reviews).',
    hours_raw: 'Mon and Sat 17:30–23:00; Tue–Fri 11:30–14:00 and 17:30–23:00 (last order 22:30); closed Sunday, and the last day of long holidays (Tabelog). Bookings taken; all-you-can-drink courses; lunch queues form after 11:30 (Tabelog; July 2026 review). Charge: Tabelog\'s Japanese original says 「お一人様200円（コースの場合は除きます）」 — ¥200 per person, except with a course. English menu (Tabelog). 44 seats: counter and tables downstairs; tatami, sunken-kotatsu and terrace seats upstairs; parties of up to 30. Designated smoking area. Cards, e-money, PayPay (Tabelog). In a bright machiya with a lantern, two blocks along Anekoji from Karasuma-dori, then left; 3 min from Karasuma Oike Stn (Tabelog).',
    hours: { 0: E, 1: L, 2: L, 3: L, 4: L, 5: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Near Karasuma Oike — 3 min from Karasuma Oike Stn',
    cuisine: 'About 50 kinds of kushiyaki, classic and original, with obanzai (Tabelog): assorted three obanzai — simmered sardines, spinach in white sesame, simmered eggplant — sea bream carpaccio, a ten-vegetable salad, chicken breast with ume and shiso, prosciutto-wrapped mozzarella, five-skewer yakitori platter, kitsune udon with skewers; cheap lunch sets such as beef cutlet, kara-age, or the daily fish (mackerel in miso) with a small "Piccolo Curry"; courses about ¥4,900 ending in beef shigure rice (2026 reviews)',
    website: 'http://www.the-la-mart.com/mimadeli/index.html', gmaps: gm('みまでり 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushiyaki & obanzai · near Karasuma Oike] A lantern-lit machiya izakaya with about fifty kinds of skewers, Kyoto obanzai and local sake, and tatami rooms upstairs for groups. Lunch sets are cheap and draw queues; dinner about ¥3,000–5,000, plus ¥200 per person. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a machiya izakaya of kushiyaki and obanzai; a September 2026 reviewer returning after more than ten years found the lantern still there.',
      philosophy: null, specialty: 'Kushiyaki; obanzai.',
      anecdotes: [
        { text: 'A July 2026 lunch guest walked in at 11:30 and left to find a queue outside.', source: R + 'B532785120/' },
        { text: 'A September 2026 banquet guest praised the kind phone manner; the ¥4,900 course came to ¥4,570 with a coupon.', source: R + 'B535621266/' },
        { text: 'An October 2026 diner enjoyed the playful dish names and thought the place should promote itself more on Tabelog.', source: R + 'B538424397/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): みまでり、串焼き・居酒屋・日本料理、中京区姉小路間之町木之下町、烏丸御池駅から徒歩3分、月土 17:30〜23:00、火〜金 11:30〜14:00・17:30〜23:00、日曜休み (連休最終日も休み)、お一人様200円 (コースは除く)、44席 (2階に座敷・掘りごたつ・テラス、1階にテーブル・カウンター)、30名まで、分煙、カード・電子マネー・PayPay 可、英語メニュー、飲み放題、約50種の串焼きとおばんざい、提灯の町家。口コミ (2026年7〜10月、英語): おばんざい3種盛り (いわしの煮付け、ほうれん草の白ごま和え、なすの煮浸し)、鯛のカルパッチョ、10種の野菜サラダ、鶏むねの梅しそ、生ハム巻きモッツァレラ、焼き鳥5種盛り、串付ききつねうどん、安いランチ (牛カツ、唐揚げ、鯖の味噌煮と小さなカレー)、4,900円のコースと牛しぐれご飯。',
      confidence: 'medium', sources: [TB, R + 'B532785120/', R + 'B533080270/', R + 'B534337935/', R + 'B534350714/', R + 'B534351614/', R + 'B535621266/', R + 'B535697799/', R + 'B535774328/', R + 'B536466979/', R + 'B538424397/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区姉小路間之町木之下町',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009926, 135.761804); the address has no lot number and GSI matched only the town (京都府京都市中京区木之下町), so loc_precise false; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535621266/', TB],
    price_note: 'No menu read; course price from a September 2026 review; charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course (with beef shigure rice)', '¥4,900', 'Courses', 'ask', 'no', 'September 2026 review.', 'course'),
      it('', '', 'Table charge per person (not with courses)', '¥200', 'Charges', 'ask', 'ask', 'Tabelog.', 'table_charge'),
      it('', '', 'Assorted three obanzai', '', 'Obanzai', 'ask', 'ask', 'August 2026 reviews.', 'obanzai3'),
    ] }, {
    cuisine: '定番から創作まで約50種の串焼きとおばんざい (食べログ): おばんざい3種盛り (いわしの煮付け、ほうれん草の白ごま和え、なすの煮物)、鯛のカルパッチョ、10種の野菜サラダ、鶏むねの梅しそ焼き、モッツァレラの生ハム巻き、焼き鳥5種盛り、串付きのきつねうどん。安いランチの定食 (牛カツ、唐揚げ、日替わりの鯖の味噌煮に小さな「Piccolo Curry」)、牛しぐれご飯で締める4,900円ほどのコース (2026年の口コミ)',
    neighborhood: '烏丸御池近く。烏丸御池駅から徒歩3分',
    gf_detail: '要確認。たれや塩の串、出汁のおばんざい、唐揚げ、牛カツ、きつねうどん (2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり野菜の串やサラダもあるが、おばんざいは出汁を使う (食べログ、2026年の口コミ)。',
    notes: '[串焼きとおばんざい・烏丸御池近く] 提灯の灯る町家の居酒屋。約50種の串、京都のおばんざいと地酒、2階には団体向けの座敷。ランチの定食は安く行列も。夜は3千〜5千円ほどで、一人200円のチャージ。日曜休み。',
  });
}

// ================================================================ 徳まる
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26038715/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_tokumaru', name: '徳まる (Tokumaru)', category: 'OMNI',
    lat: 35.012051, lng: 135.766861, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi and soy-based kappo dishes, tempura and a menchi katsu; no gluten information (2024–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and meat kappo cooking in dashi (2024–26 reviews).',
    hours_raw: '17:30–23:00 (last food order 22:00); closed Wednesday, over the New Year and on occasional other days (Tabelog). Bookings taken (Tabelog). Three omakase courses or à la carte from a long daily menu — a few dishes come first, then you order freely; a February 2024 diner found no prices on the menu (Tabelog; 2024–25 reviews). Cards (Tabelog). 9 counter seats; non-smoking (Tabelog). On a back street behind Kyoto City Hall; 5 min from Kyoto Shiyakusho-mae Stn (Tabelog; April 2025 review).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Behind Kyoto City Hall — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Seasonal kappo by omakase or à la carte, with Kagoshima shochu and about ten sakes (Tabelog): omakase ¥14,000 (August 2026); grilled-meat potato salad, nodoguro with grilled eggplant, warm hamo with plum, fig simmered in sake with sesame vinegar (July 2025); black maitake tempura, grilled cod milt, matsutake, eel-tempura rice ball (November 2025); whelk and surf clam, eel with myoga, grouper (August 2026); Biwa trout and aburabouzu (August 2026); a menchi katsu of "Tsuki no Wa Kuma" (April 2025); bamboo-shoot dishes and warabi mochi in spring (2024–26 reviews)',
    website: null, gmaps: gm('徳まる 京都'), menu_url: TB + 'dtlmenu/',
    notes: "[Kappo counter · behind Kyoto City Hall] A white nine-seat counter where the chef cooks the season to order — omakase (about ¥14,000) or à la carte from a long list: nodoguro with eggplant, hamo, black-maitake tempura, an eel-tempura rice ball. About ¥10,000–20,000. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Opened 19 November 2022 (Tabelog). A July 2025 reviewer says it was started by the head chef of "Oshikouji Yuuki", which served Kyoto cuisine à la carte; an August 2026 diner notes it runs mainly with a single chef.',
      philosophy: null, specialty: 'Seasonal à la carte kappo.',
      anecdotes: [
        { text: 'In April 2024 the first dish a regular ordered turned out to be one the "playful" chef had forgotten to source.', source: R + 'B481749675/' },
        { text: 'A November 2025 diner wanted to take the eel-tempura rice ball home, but there were no containers — and asked the shop to consider takeout.', source: R + 'B519095859/' },
        { text: 'A diner of six visits came back at the end of summer 2026 for whelk, surf clam and grouper.', source: R + 'B458203847/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 徳まる、日本料理、中京区亀屋町406、京都市役所前駅から徒歩5分、17:30〜23:00 (L.O. 22:00)、水曜休み (年末年始ほか不定休)、カウンター9席、禁煙、カード可、2022年11月19日オープン、旬の食材のおまかせコース3種と一品料理、鹿児島の焼酎と日本酒10種。口コミ (2024年1月〜2026年8月、英語): 市役所裏の路地、白木のカウンター、おまかせ14,000円、肉じゃがサラダ、のどぐろと焼きなす、鱧の梅肉、いちじくの酒煮、黒舞茸の天ぷら、白子焼き、鰻天むす、grouper、ビワマス、アブラボウズ、Tsuki no Wa Kuma のメンチカツ、品書きに値段がないという声、Oshikouji Yuuki の料理長が始めた店、ほぼ一人の料理人。',
      confidence: 'medium', sources: [TB, R + 'B458203847/', R + 'B478901037/', R + 'B479944483/', R + 'B481749675/', R + 'B489811466/', R + 'B490279857/', R + 'B492576494/', R + 'B511426870/', R + 'B519095859/', R + 'B535082730/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese-only à la carte counter; the menu may not show prices.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区亀屋町406',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.012051, 135.766861); cross-checked: GSI 京都府京都市中京区亀屋町406番地 (lot) 55m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535082730/'],
    price_note: 'No menu read; the omakase price is from an August 2026 review.', last_checked: TODAY, items: [
      it('おまかせ', 'omakase', 'Omakase course', '¥14,000', 'Courses', 'ask', 'no', 'August 2026 review.', 'omakase'),
      it('', '', 'Grilled-meat potato salad', '', 'À la carte', 'ask', 'no', '2025 reviews.', 'nikujaga_salad'),
      it('', '', 'Eel-tempura rice ball', '', 'À la carte', 'no', 'no', 'November 2025 review.', 'unaten_musubi'),
    ] }, {
    cuisine: 'おまかせか一品料理の季節の割烹。鹿児島の焼酎と日本酒10種ほど (食べログ): おまかせ14,000円 (2026年8月)。肉じゃがサラダ、のどぐろと焼きなす、温かい鱧の梅肉、いちじくの酒煮の胡麻酢 (2025年7月)、黒舞茸の天ぷら、白子焼き、松茸、鰻の天むす (2025年11月)、つぶ貝とほっき貝、鰻と茗荷、grouper (2026年8月)、ビワマスとアブラボウズ (2026年8月)、Tsuki no Wa Kuma のメンチカツ (2025年4月)、春は筍料理やわらび餅 (2024〜26年の口コミ)',
    neighborhood: '京都市役所の裏。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。出汁と醤油の割烹料理、天ぷら、メンチカツ。グルテンの情報はない (2024〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁の魚や肉の割烹料理 (2024〜26年の口コミ)。',
    notes: '[割烹のカウンター・京都市役所の裏] 白木の9席のカウンターで、料理人が季節の料理を注文ごとに。おまかせ (14,000円ほど) か長い品書きからの一品で、のどぐろと焼きなす、鱧、黒舞茸の天ぷら、鰻の天むすなど。1万〜2万円ほど。水曜休み。',
  });
}

// ================================================================ ERUTAN RESTAURANT BAR
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26033315/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://goodnaturestation.com/restaurant/erutan/';
  const H = day(['07:00', '10:00'], ['11:30', '17:00'], ['17:30', '23:00']);
  put({
    id: 'kyoto_erutan_good_nature', name: 'ERUTAN RESTAURANT BAR', category: 'OMNI',
    lat: 35.002460, lng: 135.768940, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Wood-fired pizza and pasta are wheat; salads, fish and roast pork also served; no gluten information (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A salad bar with many vegetables and dressings at lunch, but most dishes have cheese, ham, fish or meat (2026 reviews).',
    hours_raw: 'Breakfast 7:00–10:00 (last order 9:30); lunch 11:30–14:00; café 14:00–17:00 (last order 16:30); dinner 17:30–22:00 (last orders food 21:00, drinks 21:30); bar 18:00–23:00 (last order 22:30); irregular closures with the facility; closed 31 December–2 January (Tabelog). Bookings taken; same-day cancellations and no-shows are charged 100% (Tabelog). Cards and PayPay. 95 seats with a counter and sofas, two private rooms for 6–12; wheelchair accessible; children welcome with high chairs; non-smoking; parking in the building (Tabelog). Lunch buffet runs 90 minutes and is often full on weekdays — book (2026 reviews). 1F of GOOD NATURE STATION, just before Takashimaya on Kawaramachi; 2 min from Kyoto-Kawaramachi Stn exit 4 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi south of Shijo — 2 min from Kyoto-Kawaramachi Stn',
    cuisine: 'All-day Italian with a wood-fired oven and local ingredients (Tabelog): lunch buffet of a salad bar, three pizzas, prosciutto sliced to order, Miyama-milk cheese, sides and a pasta main; afternoon tea, in autumn 2026 with Kyoho and Shine Muscat grapes; dinner à la carte or the ERUTAN SPECIARE sharing course ¥5,000 (October 2026) — scallop zuppa, fried hamo with pesto, house tagliolini, shirasu or Kyoto duck and Kujo green onion pizza, Shimanto pork; sawara of the day, genovese; tiramisu and cakes in the café; bar till 23:00 (2025–26 reviews)',
    website: SITE, gmaps: gm('ERUTAN RESTAURANT BAR GOOD NATURE STATION'), menu_url: SITE,
    notes: "[Italian, pizza & bar · Kawaramachi-Shijo] The big, stylish ground-floor dining room of GOOD NATURE STATION, open from breakfast to the late bar: a lunch buffet of salad bar and wood-fired pizza, seasonal afternoon tea, and a ¥5,000 sharing course at night. Lunch ¥2,000–3,000; dinner ¥5,000–8,000. Wheelchair accessible.",
    chef_bio: { chef_name: null, roles: ['Restaurant of GOOD NATURE STATION (no person named)'], origin: null,
      background: 'Opened 9 December 2019; renewed on 15 April (Tabelog). The ground-floor restaurant and bar of GOOD NATURE STATION, whose building also houses Hyssop, RAU, TAKAYAMA and VELROSIER.',
      philosophy: 'Seasonal ingredients and authentic technique, with oven-baked pizza, in a casual setting (Tabelog).',
      specialty: 'Wood-fired pizza; lunch buffet.',
      anecdotes: [
        { text: 'An October 2026 buffet guest liked the Miyama-milk cheese with honey but felt hurried by the next person in the salad line.', source: R + 'B536631455/' },
        { text: 'Turned away by long queues elsewhere near Kawaramachi in October 2026, a visitor found a seat at once in the spacious café at the back.', source: R + 'B537798283/' },
        { text: 'A Friday-night diner in October 2026 found it full by 19:00 and paid just over ¥8,000 each with two glasses of wine.', source: R + 'B538004372/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ERUTAN RESTAURANT BAR、イタリアン・ダイニングバー・パスタ、下京区河原町通四条下ル2丁目稲荷町318-6 GOOD NATURE STATION 1F、京都河原町駅4番出口から徒歩2分、朝食 7:00〜10:00、ランチ 11:30〜14:00、カフェ 14:00〜17:00、ディナー 17:30〜22:00、バー 18:00〜23:00、不定休 (施設に準ずる)、12月31日〜1月2日休み、当日キャンセルは100%、95席、個室2室、車椅子可、子供可 (キッズチェア)、禁煙、施設の駐車場、2019年12月9日オープン、4月15日リニューアル、薪窯のピッツァと地元の食材。口コミ (2025年11月〜2026年11月、英語): ランチビュッフェ (サラダバー、ピッツァ3種、生ハム、美山の牛乳のチーズ、パスタ)、ぶどうのアフタヌーンティー、ERUTAN SPECIARE シェアコース5,000円、鰆、ジェノベーゼ、奥のカフェ。',
      confidence: 'medium', sources: [TB, SITE, R + 'B517533967/', R + 'B536130885/', R + 'B536631455/', R + 'B537798283/', R + 'B537867539/', R + 'B538004372/', R + 'B538126297/', R + 'B538394135/', R + 'B538479969/', R + 'B538561471/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large hotel-complex restaurant; wheelchair accessible.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通四条下ル2丁目稲荷町318-6 GOOD NATURE STATION 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the restaurant and the GOOD NATURE STATION site; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002460, 135.768940); cross-checked: GSI 京都府京都市下京区稲荷町318番地 (lot) 26m; 7.3 m from kyr_chuka_soba_roku, 9.0 m from kyoto_hyssop (same building); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517533967/'],
    price_note: 'No menu read; course price from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'ERUTAN SPECIARE sharing course (7 dishes)', '¥5,000', 'Courses', 'no', 'no', 'October 2026 review.', 'speciare_course'),
      it('', '', 'Lunch buffet with pasta main (90 min)', '', 'Lunch', 'no', 'ask', '2026 reviews.', 'lunch_buffet'),
    ] }, {
    cuisine: '薪窯と地元の食材の終日イタリアン (食べログ): ランチはサラダバー、ピッツァ3種、その場で切る生ハム、美山の牛乳のチーズ、惣菜とメインのパスタのビュッフェ。アフタヌーンティー (2026年秋は巨峰とシャインマスカット)。夜はアラカルトか ERUTAN SPECIARE のシェアコース5,000円 (2026年10月): ホタテのズッパ、鱧のフリットとペスト、自家製タリオリーニ、しらすや Kyoto duck と Kujo ねぎのピッツァ、Shimanto ポーク。日替わりの鰆、ジェノベーゼ。カフェのティラミスとケーキ、23時までのバー (2025〜26年の口コミ)',
    neighborhood: '四条の南の河原町。京都河原町駅から徒歩2分',
    gf_detail: '要確認。薪窯のピッツァやパスタは小麦。サラダ、魚、ローストポークもある。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '要確認。ランチは野菜とドレッシングの多いサラダバーだが、料理の多くはチーズ、ハム、魚、肉 (2026年の口コミ)。',
    notes: '[イタリアン、ピッツァ、バー・河原町四条] GOOD NATURE STATION の1階の広くおしゃれなダイニング。朝食から夜のバーまで。ランチはサラダバーと薪窯ピッツァのビュッフェ、季節のアフタヌーンティー、夜は5,000円のシェアコース。ランチ2千〜3千円、夜5千〜8千円ほど。車椅子可。',
  });
}

save();
