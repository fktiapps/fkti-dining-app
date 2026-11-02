// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 11.
//   + 太田鮨 Ota Zushi (9-seat sushi counter, est. 1955, second generation; giant nigiri with five rice sizes at lunch)
//   + Firmamento (8-seat Italian of chef Yuya Daisako, ex-Ryugin; opened September 2025)
//   + 寿限無 担々麺 Jugemu Tantan-men (tantanmen with free rice; Horidome-cho, since 2017)
//   + 横浜家系ラーメン赤家 人形町店 Yokohama Iekei Ramen Akaya (iekei ramen open 11:00–23:00)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 10 ningyocho` (main repo, 2026-11-02): the first four,
//   139, 139, 142 and 147 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address. Shared addresses: Ota Zushi and
//   tokyo_yoshiume_yoshimachitei_ningyocho are both 日本橋人形町1-5-2 (pins 11 m apart). Firmamento is 3F of
//   レイフォリア人形町 (2-7-13), the building of tokyo_reimei_ningyocho (2F); the Tabelog points are 0.2 m apart, so Firmamento
//   is block-level and moved 6 m north.
//   Chain check. Jugemu: reviewers compare it with Hashigo (tokyo_shinamen_hashigo_honten is in data) and call it "from the
//   Hashigo lineage", but no source shows it is a Hashigo branch — drafted as its own shop. Akaya: an unopened web-search snippet
//   suggested other Akaya shops; nothing in data, no sign of rapid expansion, so the record makes no chain claim. Ota Zushi, Firmamento: single shops.
//   Ramen blocks left off for Jugemu and Akaya: reviews do not describe all six dimensions (Jugemu: no clarity or aroma
//   punch beyond spice; Akaya: no oiliness, clarity or aroma) (brief LESSONS).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-11');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 太田鮨
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13003055/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['18:00', '22:00']); const H = day(['11:00', '13:00'], ['18:00', '22:00']);
  put({
    id: 'tokyo_ota_zushi_ningyocho', name: '太田鮨 (Ota Zushi)', category: 'OMNI',
    lat: 35.68508, lng: 139.781741, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri is served with soy sauce, and the ikura gunkan is topped with soy sauce and the scallop with a sweet sauce (2026 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish sushi counter.',
    hours_raw: 'Lunch Tue–Fri from 11:00 to about 13:00, served in rounds of nine; dinner Mon–Fri 18:00–22:00 (last order 21:30), by reservation only; closed Sat, Sun and holidays (Tabelog; 2026 reviews). Lunch is first come, first served — a queue forms before 11:00, with waiting in the tatami area behind the counter and then outside (July–October 2026). Lunch is cash only (August 2026); Tabelog lists JCB, AMEX and Diners cards. 9 counter seats; no private rooms; private hire for up to 20 (Tabelog). No chopsticks — nigiri is eaten by hand, one oshibori each (2026 reviews). Non-smoking. Established 1955, in a 1927 building that survived the air raids; second generation; staffed by the owner, the owner\'s son and the owner\'s sister (July 2026 review).',
    hours: { 0: MON, 1: H, 2: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-5-2, a 1927 building — 3 min from Ningyocho Stn, 5 min from Suitengumae Stn; the same lot as Yoshi Ume Yoshimachi-tei',
    cuisine: 'Nigiri, famously large (2026 reviews) · lunch omakase nigiri: one serving ¥4,600 (up from ¥4,000 in April 2026), 1.5 servings ¥6,900 (more pieces, not bigger) — two pieces of tuna with a hidden second layer of tuna beneath (nakaochi per one August 2026 review, tuna scraps per another), flounder, horse mackerel, amberjack, shrimp, ikura gunkan, tamagoyaki, scallop with sweet sauce, and a roll of your choice (tekka, kappa, ume-shiso, kanpyo) · choose the rice size from five levels, from about three times a normal nigiri (level 1) down to a small Ginza-dinner size (level 5); level 3 is a typical lunch nigiri (July–October 2026) · dinner by reservation',
    website: TB, gmaps: gm('太田鮨 人形町'), menu_url: null,
    notes: "[Sushi · Ningyocho, giant nigiri at a 1955 counter] A nine-seat sushi counter in a 1927 building that survived the war's air raids, founded in 1955 and run by the second generation, with the owner's son now behind the counter too (July 2026). Lunch, Tuesday to Friday, is the famous part. The chef first asks what size of rice you want, on a five-step scale from Ginza-small to a piece the size of a rice ball. There are no chopsticks; you eat by hand. The tuna hides a second layer of tuna beneath. A serving is ¥4,600; 1.5 servings, with more pieces, is ¥6,900. Queues start before 11:00, and the second round waits about 40–45 minutes. Regulars (one reviewer has been 34 times) mix with Instagram-led first-timers and visitors from abroad. Some found the biggest sizes hard to eat. Dinner by reservation; lunch cash only.",
    chef_bio: { chef_name: null, roles: ['Second-generation owner-chef (unnamed; July 2026 review)', 'The owner\'s son, now working at the counter (July 2026 review)'], origin: null,
      background: 'Per a July 2026 review: established in 1955; the building dates from 1927 and survived the air raids; now run by the second generation; the owner\'s son has joined. The chef checks each diner\'s preferred rice size and dislikes before starting (August 2026).',
      philosophy: null, specialty: 'Large nigiri; tuna with a hidden second layer of tuna.',
      anecdotes: [
        { text: '"The chef checks each customer\'s preferred size for the sushi and any dislikes." — August 2026, 34th visit.', source: R + 'B16234429/' },
        { text: '"Level 1: Three times the rice of a regular nigiri … Level 5: The size of sushi at a nighttime Ginza restaurant." — July 2026.', source: R + 'B532443258/' },
        { text: '"When I lifted it to look from the side, I saw another slice of tuna underneath the red meat." — October 2026, size 1.', source: R + 'B537039892/' },
      ],
      japanese_sources_summary: '食べログ: 太田鮨、寿司、日本橋人形町1-5-2、人形町駅から徒歩3分、月18:00〜22:00、火〜金11:00〜13:00ごろ、18:00〜22:00、土日祝休み、夜は予約のみ、カード (JCB、AMEX、Diners)、9席、座敷、貸切20名まで、禁煙。口コミ(2026年7月〜10月): 1955年創業、建物は1927年築で空襲を免れた、二代目、店主と息子さんと店主の姉妹の三人、昼は何回かに分けて、しゃりの大きさを5段階から選ぶ、箸はなく手で、昼の一人前4,600円 (2026年4月に4,000円から値上げ)、1.5人前6,900円、マグロの下にもう一枚のマグロ、いくらの軍艦、甘いツメのホタテ、玉子、巻物は鉄火、かっぱ、梅しそ、かんぴょうから、開店前から行列、昼は現金のみ、大きすぎて食べにくいという声も。',
      confidence: 'medium', sources: [TB, R + 'B16234429/', R + 'B451870185/', R + 'B532427217/', R + 'B532443258/', R + 'B532750280/', R + 'B533182040/', R + 'B534408146/', R + 'B537039892/', R + 'B537417341/', R + 'B537890672/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One fixed lunch set; you choose a rice size by number (1–5); overseas visitors among the diners (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-5-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685080, 139.781741); cross-checked: GSI 東京都中央区日本橋人形町一丁目5番2号 (go) 6m. Same lot as Yoshi Ume Yoshimachi-tei (tokyo_yoshiume_yoshimachitei_ningyocho, address_ja "東京都中央区日本橋人形町1-5-2"), 11 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533182040/', R + 'B534408146/', R + 'B532750280/'],
    price_note: 'Lunch prices from July–October 2026 reviews (¥4,000 until April 2026).', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase nigiri, one serving (rice size 1–5)', '¥4,600', 'Lunch', 'ask', 'no', 'July–October 2026; cash only at lunch.', 'lunch_1'),
      it('', '', 'Lunch omakase nigiri, 1.5 servings', '¥6,900', 'Lunch', 'ask', 'no', 'August 2026.', 'lunch_15'),
    ] }, {
    cuisine: '大きさで知られる握り (2026年の口コミ)・昼のおまかせの握り: 一人前4,600円 (2026年4月に4,000円から)、1.5人前6,900円 (大きさではなく貫数が増える)。マグロ2貫の下にもう一枚のマグロ (2026年8月の口コミでは中落ち、別の口コミでは切れ端)、平目、鯵、間八、海老、いくらの軍艦、玉子、甘いツメのホタテ、巻物は鉄火、かっぱ、梅しそ、かんぴょうから選ぶ・しゃりの大きさは5段階から選ぶ。1は普通の握りの約3倍、5は Ginza の夜の小ぶりな握りほど、3がふつうの昼の握り (2026年7月〜10月)・夜は予約制',
    neighborhood: '日本橋人形町1-5-2、1927年築の建物。人形町駅から徒歩3分、水天宮前駅から徒歩5分。よし梅 芳町亭と同じ番地',
    gf_detail: '要確認。いくらの軍艦には醤油、ホタテには甘いツメ (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚介の鮨のカウンター。',
    notes: '[鮨・人形町、1955年創業のカウンターの大きな握り] 空襲を免れた1927年築の建物にある9席の鮨のカウンター。1955年創業で二代目が営み、いまは息子さんもカウンターに立つ (2026年7月)。有名なのは火〜金の昼で、最初にしゃりの大きさを Ginza 風の小ぶりからおにぎりほどまで5段階で聞かれる。箸はなく手で食べる。マグロの下にはもう一枚マグロが隠れている。一人前は4,600円、貫数の増える1.5人前は6,900円。11時前から行列ができ、二回目の回は40〜45分ほど待つ。常連 (34回来た人も) と、Instagram を見て来た人や海外からの客が並ぶ。いちばん大きいサイズは食べにくいという声も。夜は予約制、昼は現金のみ。',
  });
}

// ================================================================ Firmamento
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13313569/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.firmamento.tokyo/';
  const H = day(['19:00', '23:00']);
  put({
    id: 'tokyo_firmamento_ningyocho', name: 'Firmamento', category: 'MOM_AND_POP',
    lat: 35.686573, lng: 139.783693, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. A set omakase that includes handmade pasta, panelle, suppli and focaccia (2026 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish- and meat-led omakase (squid, sea urchin, eel, soft-shell turtle, suckling pig).',
    hours_raw: 'Mon–Sat and holidays 19:00–23:00; closed Sunday; closing days irregular (Tabelog). One omakase course, about ¥25,000 (May 2026, up from about ¥22,000), plus 10% service (Tabelog); wine or non-alcoholic pairing. Reservations (Tabelog). Cards; no e-money or QR (Tabelog). 8 seats at an L-shaped counter (Tabelog; July 2026). Non-smoking. Opened 4 September 2025 (Tabelog; May 2026 review; an August 2026 review says "opened last spring").',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-7-13, レイフォリア人形町 3F, on Suehiro-dori — 2 min from Ningyocho Stn exit A3, 4 min from Suitengumae Stn exit 7; Reimei is on the floor below',
    cuisine: 'Italian omakase built on Japanese ingredients, menu changing about every two months (2026 reviews) · one course, about ¥25,000 plus 10% (May 2026) · dishes in 2026: panelle of aged Tokushima squid with chickpea and squid ink; suppli of hairy-crab or Bōsō black-abalone risotto with liver sauce; sformato of Rishiri sea urchin with red pepper and junsai; eel risotto with oregano, yuzu and sudachi; tagliolini with clams, butter and truffle; pappardelle with soft-shell turtle and matsutake; conger eel; suckling pig; focaccia with sudachi yeast; two desserts · wine pairing by sommelier Katsuya Kuwahara; a non-alcoholic pairing (2026 reviews)',
    website: SITE, gmaps: gm('Firmamento 人形町'), menu_url: null,
    notes: "[Italian · Ningyocho, an eight-seat Italian counter cooking Japanese ingredients] Opened in September 2025 on the third floor of a new dining building on Suehiro-dori, an L-shaped counter where owner-chef Yuya Daisako cooks a single omakase. The chef trained at ICARO, GUCCI Osteria Tokyo and the Japanese restaurant Ryugin (August 2026). The name means \"sky\", and the shop's idea is Italian dishes stripped down to show Japanese seasonal produce. In 2026 that meant aged Tokushima squid as panelle, abalone suppli over a liver sauce, an eel risotto lifted with yuzu and sudachi, and pappardelle with soft-shell turtle and matsutake. Sommelier Katsuya Kuwahara's pairings win as much praise as the food. Opinions vary between visits: a June 2026 returning diner found 8 of 15 dishes repeated, a September diner noticed an odour in the suckling pig, and an August diner called it the best Italian meal of a lifetime. About ¥25,000 plus service.",
    chef_bio: { chef_name: 'Yuya Daisako (romaji as Tabelog\'s shop text gives it; Tabelog also writes "Yuuya Taisako" and an August 2026 review "Yuya Oisako"; no kanji source found)', roles: ['Owner-chef ("Chef Yuya Oisako, the owner and chef", August 2026 review)', 'Sommelier Katsuya Kuwahara (November 2025 review)'], origin: 'Kanagawa Prefecture; born 1990 (Tabelog chef profile)',
      background: 'Per Tabelog\'s shop text: Firmamento means "sky" in Italian; the dishes express Japanese ingredients and the seasons through Italian cooking, stripping away the unnecessary. Per Tabelog\'s chef profile: born 1990 in Kanagawa Prefecture; trained at ICARO, Nihonryori Ryugin and GUCCIOsteria Tokyo. Per 2026 reviews: the chef trained at ICARO, GUCCI Osteria Tokyo and the three-Michelin-star Japanese restaurant Ryugin (August 2026); Japanese techniques from Ryugin with traditional Italian cooking (May 2026); the sommelier came from Ginza\'s FARO (August 2026). Opened 4 September 2025.',
      philosophy: 'Strip away the unnecessary and value tranquility and space; Japanese ingredients and seasons through Italian cuisine (Tabelog shop text).', specialty: 'Italian omakase of Japanese seasonal produce; handmade pasta.',
      anecdotes: [
        { text: '"The main charm of Firmamento lies in its use of Japanese techniques honed at the renowned Ryugin, alongside traditional Italian cuisine." — May 2026.', source: R + 'B513064963/' },
        { text: '"The second was pappardelle with soft-shell turtle braised in red wine and plenty of matsutake mushrooms. I was thrilled to enjoy matsutake in July!" — August 2026.', source: R + 'B533411499/' },
        { text: '"However, I found the main dish of suckling pig to have a slight odor, which was disappointing." — September 2026, second visit.', source: R + 'B534946988/' },
      ],
      japanese_sources_summary: '食べログ: Firmamento、イタリアン、シェフは1990年生まれ、Kanagawa 出身、日本橋人形町2-7-13 レイフォリア人形町 3F、人形町駅A3出口から徒歩2分、水天宮前駅7番出口から徒歩4分、月〜土・祝19:00〜23:00、日曜休み、不定休、サービス料10%、カード可、電子マネー・QR不可、8席 (カウンター)、禁煙、2025年9月4日オープン、ホームページ firmamento.tokyo、Firmamento はイタリア語で「空」、日本の食材と季節をイタリア料理で。口コミ(2025年11月〜2026年9月): シェフ Yuya Daisako (表記は Taisako、Oisako も)、ICARO、GUCCI Osteria Tokyo、Ryugin で修業、ソムリエの Katsuya Kuwahara さん、コースは約25,000円 (以前は約22,000円)、Tokushima の熟成いかのパネッレ、鮑のスップリ、Rishiri の雲丹のスフォルマート、鰻のリゾット、すっぽんと松茸のパッパルデッレ、ワインのペアリング、メニューは約2か月ごとに変わる、同じ料理が多かったという声や子豚に臭みがあったという声も。',
      confidence: 'medium', sources: [TB, SITE, R + 'B513064963/', R + 'B516467430/', R + 'B527039568/', R + 'B529025952/', R + 'B530837762/', R + 'B531315955/', R + 'B533079398/', R + 'B533411499/', R + 'B533775296/', R + 'B534946988/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course; solo diners and international visitors at the counter (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都中央区日本橋人形町2-7-13 レイフォリア人形町 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated November 2025–September 2026.' },
    pin_source: `Tabelog ${TB} gives 35.686519, 139.783693 — 0.2 m from Reimei (tokyo_reimei_ningyocho, address_ja "東京都中央区日本橋人形町2-7-13 レイフォリア人形町 2F") in the same building. Block-level: Firmamento's pin moved 6 m north so the two are not stacked; GSI 東京都中央区日本橋人形町二丁目7番13号 (go) 8m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513064963/'],
    price_note: 'Course price from a May 2026 review (about ¥25,000, up from about ¥22,000); service charge 10% (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥25,000', 'Courses', 'ask', 'no', 'May 2026 (approximate); plus 10% service.', 'omakase'),
    ] }, {
    cuisine: '日本の食材で組み立てるイタリアンのおまかせ、メニューは約2か月ごとに変わる (2026年の口コミ)・コースはひとつで約25,000円と10% (2026年5月)・2026年の料理: Tokushima の熟成いかのひよこ豆とイカ墨のパネッレ、毛蟹や Bōsō の黒鮑のリゾットのスップリと肝のソース、Rishiri の雲丹と赤ピーマンとじゅんさいのスフォルマート、オレガノと柚子とすだちの鰻のリゾット、あさりとバターとトリュフのタリオリーニ、すっぽんと松茸のパッパルデッレ、鱧、子豚、すだちの酵母のフォカッチャ、デザート2品・ソムリエ Katsuya Kuwahara さんのワインのペアリング、ノンアルコールのペアリングも (2026年の口コミ)',
    neighborhood: '日本橋人形町2-7-13 レイフォリア人形町 3F、Suehiro 通り沿い。人形町駅A3出口から徒歩2分、水天宮前駅7番出口から徒歩4分。下の階に黎明',
    gf_detail: '予約時に要確認。おまかせには手打ちのパスタ、パネッレ、スップリ、フォカッチャも (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚と肉が中心のおまかせ (いか、雲丹、鰻、すっぽん、子豚)。',
    notes: '[イタリアン・人形町、日本の食材を料理する8席のイタリアンのカウンター] 2025年9月、Suehiro 通り沿いの新しい飲食ビルの3階に開いた、L字のカウンター。オーナーシェフの Yuya Daisako さんがおまかせひとつで料理する。ICARO、GUCCI Osteria Tokyo、日本料理の Ryugin で修業した (2026年8月)。店名はイタリア語で「空」で、無駄をそぎ落として日本の季節の食材を見せるイタリア料理がテーマ。2026年には熟成した Tokushima のいかのパネッレ、肝のソースの鮑のスップリ、柚子とすだちの鰻のリゾット、すっぽんと松茸のパッパルデッレ。ソムリエ Katsuya Kuwahara さんのペアリングも料理と同じくらい評判。評価は訪れた回で分かれ、2026年6月に再訪した人は15品のうち8品が前回と同じだったといい、9月には子豚に少し臭みがあったという声も、8月には人生最高のイタリアンという声も。約25,000円とサービス料。',
  });
}

// ================================================================ 寿限無 担々麺
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13214367/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:00', '16:00'], ['17:30', '23:00']); const SAT = day(['11:00', '16:00'], ['17:30', '21:00']);
  put({
    id: 'tokyo_jugemu_tantanmen_horidome', name: '寿限無 担々麺 (Jugemu Tantan-men)', category: 'OMNI',
    lat: 35.687142, lng: 139.781022, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; fried paiko and shumai alongside.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: tantanmen with domestic pork (October 2026), chashu and toppings of chicken or pork.',
    hours_raw: 'Mon–Fri 11:00–16:00 and 17:30–23:00; Sat and holidays 11:00–16:00 and 17:30–21:00; closed Sunday; hours may change (Tabelog). Cash only — no cards, e-money or QR (Tabelog). 16 seats: 6 at the counter, 5 tables for two (Tabelog). Smoking allowed per Tabelog. Rice free with any order (2026 reviews). Opened 3 October 2017 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Horidomecho 1-8-15, a residential back street — 2 min from Ningyocho Stn exit A5',
    cuisine: 'Tantanmen with house-roasted sesame and spice oil; spice level and noodle firmness to order (regular, firm, extra firm) (2026 reviews) · tantanmen ¥1,100 (September 2026); with steamed chicken ¥1,100; paiko tantanmen with crisp fried pork ¥1,250 (September–October 2026); dry tantanmen ¥1,100 with thick noodles and Sichuan pepper (October 2026); hot-and-sour noodles ¥1,000 (October 2026) · Saturday and holiday tantanmen and shumai set ¥1,150 (September 2026); value set of shumai, soft-boiled egg and cucumber · free rice; pickled daikon on the table · works as an izakaya in the evening (September 2026)',
    website: TB, gmaps: gm('寿限無 担々麺 堀留町'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Horidome-cho, sesame-rich tantanmen with free rice] A small tantanmen shop on a residential street a couple of minutes from Ningyocho station, full of office workers at weekday lunch. The broth is built on house-roasted sesame and spice oil, creamy rather than thick, with thin straight noodles (one September 2026 diner found them medium-thick), and you choose the heat and firmness. Most order the paiko tantanmen with a crisp fried pork chop (¥1,250), or the dry version with thick noodles and Sichuan pepper; rice is free to finish the soup. Reviewers compare it, favourably, with the Hashigo tantanmen and its shumai; a July 2026 diner had heard it is from the Hashigo lineage, which no source confirms. Cash only; smoking allowed per Tabelog; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 3 October 2017 (Tabelog). Reviewers in September–October 2026 compare it with Hashigo — "the Tantan-men from the \'Hashigo\' lineage", "a good alternative to Hashigo" — and one wondered whether it belonged to the Hashigo group; no source confirms a link. The origin of tantanmen is written on the wall (October 2026).',
      philosophy: null, specialty: 'Paiko tantanmen; dry tantanmen.',
      anecdotes: [
        { text: '"The rich flavor of the house-roasted sesame is prominent, and the texture is incredibly creamy." — September 2026, paiko tantanmen ¥1,250.', source: R + 'B537469375/' },
        { text: '"This place is a good alternative to Hashigo." — October 2026.', source: R + 'B536837997/' },
        { text: '"The broth was not thick but rather light and smooth, which is why the noodles are thin." — October 2026, paiko tantanmen.', source: R + 'B538000678/' },
      ],
      japanese_sources_summary: '食べログ: 寿限無 担々麺、担々麺、ラーメン、日本橋堀留町1-8-15、人形町駅A5出口から徒歩2分、月〜金11:00〜16:00、17:30〜23:00、土祝11:00〜16:00、17:30〜21:00、日曜休み、カード・電子マネー・QR不可、16席 (カウンター6、2人用テーブル5)、喫煙可、2017年10月3日オープン。口コミ(2026年7月〜10月): 自家焙煎の胡麻と辣油、辛さと麺の硬さを選べる、細いストレート麺、排骨担々麺1,250円、汁なし担々麺1,100円 (太麺、花椒)、酸辣湯麺1,000円、土日祝の担々麺と焼売のセット1,150円、ご飯は無料、はしごに似ているという声、平日の昼は会社員で満席に近い。',
      confidence: 'medium', sources: [TB, R + 'B339495277/', R + 'B530963820/', R + 'B535436452/', R + 'B536528236/', R + 'B536631959/', R + 'B536837997/', R + 'B537469375/', R + 'B537509813/', R + 'B538000678/', R + 'B538142610/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose spice level and noodle firmness; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋堀留町1-8-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July–October 2026.' },
    pin_source: `Tabelog ${TB} (35.687142, 139.781022); cross-checked: GSI 東京都中央区日本橋堀留町一丁目8番15号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530963820/', R + 'B537469375/', R + 'B536631959/', R + 'B538142610/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tantanmen (free rice)', '¥1,100', 'Noodles', 'no', 'no', 'September 2026.', 'tantanmen'),
      it('', '', 'Paiko tantanmen (fried pork chop)', '¥1,250', 'Noodles', 'no', 'no', 'September–October 2026.', 'paiko'),
      it('', '', 'Dry tantanmen', '¥1,100', 'Noodles', 'no', 'no', 'October 2026.', 'shirunashi'),
      it('', '', 'Hot-and-sour noodles', '¥1,000', 'Noodles', 'no', 'no', 'October 2026.', 'sanratan'),
    ] }, {
    cuisine: '自家焙煎の胡麻と辣油の担々麺、辛さと麺の硬さ (普通、硬め、バリカタ) を選べる (2026年の口コミ)・担々麺1,100円 (2026年9月)、蒸し鶏のせ1,100円、カリッと揚げた排骨の排骨担々麺1,250円 (2026年9月〜10月)、太麺と花椒の汁なし担々麺1,100円 (2026年10月)、酸辣湯麺1,000円 (2026年10月)・土日祝の担々麺と焼売のセット1,150円 (2026年9月)、焼売、半熟卵、きゅうりのお得なセット・ご飯は無料、卓上にたくあん・夜は居酒屋のようにも使える (2026年9月)',
    neighborhood: '日本橋堀留町1-8-15、住宅街の裏通り。人形町駅A5出口から徒歩2分',
    gf_detail: 'グルテンフリーではない: 小麦の麺。揚げた排骨や焼売も。',
    vegan_detail: 'ヴィーガンではない: 国産の豚肉を使う担々麺 (2026年10月)、チャーシュー、鶏や豚のトッピング。',
    notes: '[ラーメン・堀留町、ご飯無料の胡麻たっぷりの担々麺] 人形町駅から数分の住宅街の小さな担々麺の店で、平日の昼は会社員で満席近く。スープは自家焙煎の胡麻と辣油で、濃すぎずクリーミー、細いストレート麺、辛さと硬さを選べる。多くはカリッと揚げた排骨の排骨担々麺 (1,250円) か、太麺と花椒の汁なしを頼み、ご飯は無料でスープの締めに。口コミでは、はしごの担々麺や焼売とよく比べられ、評価は高い。現金のみ、食べログでは喫煙可、日曜休み。',
  });
}

// ================================================================ 横浜家系ラーメン赤家 人形町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13307070/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'tokyo_iekei_akaya_ningyocho', name: '横浜家系ラーメン赤家 人形町店 (Yokohama Iekei Ramen Akaya Ningyocho)', category: 'OMNI',
    lat: 35.686888, lng: 139.783637, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles in a tonkotsu-shoyu broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone soy-sauce broth with chashu.',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog). Ticket machine (August 2026); cards and QR, no e-money (Tabelog). A free large serving of noodles and free rice (April–August 2026; a June 2026 review says one or the other); grated garlic and chopped onion free on the table (2026 reviews). Opened February 2025 on the former site of Niku no Marukiyo (August 2026 review). Seats not listed.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-26-1, a red shopfront east of the station — 2–3 min from Ningyocho Stn exit A2 (towards Hamacho Park, left at the first light past the Amazake Yokocho crossing)',
    cuisine: 'Yokohama iekei ramen: tonkotsu-shoyu broth with medium-thick noodles, chashu, spinach and three sheets of nori; noodle firmness, richness and oil to order (2025–26 reviews) · shoyu ramen ¥900 with free large noodles or rice (June 2026); Akamori ramen; miso corn butter ramen; tantan tsukemen ¥1,040 (August 2026) · quail eggs ¥120 · free garlic and chopped onion',
    website: TB, gmaps: gm('横浜家系ラーメン赤家 人形町'), menu_url: null,
    notes: "[Ramen · Ningyocho, Yokohama iekei ramen until 23:00] A red-fronted iekei ramen shop east of Ningyocho station, one of the few of its kind nearby (June 2026), open daily until 23:00. It serves a tonkotsu-shoyu bowl with medium-thick noodles, spinach and nori, set up the iekei way — choose noodle firmness, richness and oil. A large serving of noodles or a bowl of rice is free, and grated garlic and chopped onion sit on the counter. Diners in 2026 called it reliable and good value (¥900 with rice), milder than some iekei, with a tantan tsukemen one August diner especially liked. Others found the broth lacking depth, and one August 2026 bowl arrived cold.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened in February 2025 on the former site of Niku no Marukiyo (August 2026 review). An August 2026 diner was served by two staff, both from abroad.',
      philosophy: null, specialty: 'Iekei ramen with free rice.',
      anecdotes: [
        { text: '"The free large size for rice or noodles is a great deal!" — April 2026.', source: R + 'B527492769/' },
        { text: '"While it doesn\'t have much spiciness or numbing sensation, the aroma of sesame is delightful." — August 2026, tantan tsukemen ¥1,040.', source: R + 'B533384400/' },
        { text: '"Wait, where\'s the steam? My intuition was right; the broth was cold." — August 2026, miso corn butter ramen.', source: R + 'B533054574/' },
      ],
      japanese_sources_summary: '食べログ: 横浜家系ラーメン赤家 人形町店、ラーメン、日本橋人形町2-26-1、毎日11:00〜23:00、予約不可、カード・QR可、電子マネー不可。口コミ(2025年10月〜2026年10月): 赤い外観、豚骨醤油、中太麺、麺の硬さ・味の濃さ・油の量を選べる、醤油ラーメン900円で大盛りかご飯が無料、Akamori ラーメン、味噌コーンバター、担々つけ麺1,040円、うずら120円、にんにくと玉ねぎは卓上で自由に、2025年2月に Niku no Marukiyo の跡地に開店、スタッフは海外の人、深みが足りないという声やスープがぬるかったという声も。',
      confidence: 'medium', sources: [TB, R + 'B526657615/', R + 'B527492769/', R + 'B528918168/', R + 'B530086403/', R + 'B530955883/', R + 'B531036819/', R + 'B531528171/', R + 'B533054574/', R + 'B533384400/', R + 'B537277347/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; iekei customisation (firmness, richness, oil).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-26-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated October 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686888, 139.783637); cross-checked: GSI 東京都中央区日本橋人形町二丁目26番1号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531036819/', R + 'B533384400/'],
    price_note: 'Prices from June–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shoyu (iekei) ramen with free large noodles or rice', '¥900', 'Ramen', 'no', 'no', 'June 2026.', 'iekei'),
      it('', '', 'Tantan tsukemen', '¥1,040', 'Ramen', 'no', 'no', 'August 2026.', 'tantan_tsukemen'),
      it('', '', 'Quail eggs (5)', '¥120', 'Toppings', 'ask', 'no', 'August 2026.', 'uzura'),
    ] }, {
    cuisine: '横浜家系ラーメン: 豚骨醤油のスープに中太麺、チャーシュー、ほうれん草、海苔3枚。麺の硬さ、味の濃さ、油の量を選べる (2025〜26年の口コミ)・醤油ラーメン900円、大盛りかご飯が無料 (2026年6月)。Akamori ラーメン、味噌コーンバター、担々つけ麺1,040円 (2026年8月)・うずら120円・にんにくと刻み玉ねぎは無料',
    neighborhood: '日本橋人形町2-26-1、駅の東の赤い店構え。人形町駅A2出口から徒歩2〜3分 (Amazake Yokocho の交差点を過ぎて Hamacho 公園の方へ、最初の信号を左)',
    gf_detail: 'グルテンフリーではない: 豚骨醤油に小麦の中太麺。',
    vegan_detail: 'ヴィーガンではない: 豚骨醤油のスープにチャーシュー。',
    notes: '[ラーメン・人形町、23時まで開いている横浜家系ラーメン] 人形町駅の東にある赤い店構えの家系ラーメン店で、このあたりでは珍しい (2026年6月)。毎日23時まで。豚骨醤油に中太麺、ほうれん草と海苔で、家系らしく麺の硬さ、味の濃さ、油の量を選ぶ。麺の大盛りかご飯が無料で、カウンターにはおろしにんにくと刻み玉ねぎ。2026年の客は安定していてお得 (ご飯付きで900円) といい、ほかの家系より穏やかという声や、8月には担々つけ麺が特に気に入ったという声も。一方でスープに深みがないという声や、2026年8月にはスープがぬるかったという声も。',
  });
}

save();
