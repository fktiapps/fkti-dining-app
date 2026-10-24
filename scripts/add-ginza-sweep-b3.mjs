// Ginza Station half-mile sweep (805 m), batch 3 — ramen. Researched 2026-10-24.
//   + 萬福 (since the 1920s; third-generation Kubo family) · 船見坂 (Hakodate shio; owner-run since 2014)
//   + 谷ラーメン (owner-run, under the JR tracks at Yūrakuchō) · 芳蘭 (late-night Hibiya basement)
//   + 銀座 梵天 (company-run tsukesoba)
// Sources: san-tatsu features, Gendai, Tabelog /en/ listings + dated 2026 reviews. Pins: Tabelog geo + GSI
// (+ OSM). Run from the repo root. Idempotent.
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);
const TBR = id => `https://tabelog.com/en/tokyo/A1301/${id}/`;

// ================================================================ 萬福
{
  const TB = TBR('A130101/13002324'); const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/articles/270659/'; const GD = 'https://gendai.media/articles/-/115422';
  const l1 = ['11:00', '15:00'], ev = ['17:00', '22:00'];
  put({
    id: 'tokyo_ginza_manpuku', name: '萬福 (Manpuku)', category: 'MOM_AND_POP',
    lat: 35.67129, lng: 139.769496,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. A neighbourhood Chinese diner (machi-chūka). The chuka soba is thin curly wheat noodles in a soy-sauce soup, and its tare is the soy-based chashu sauce. The rest of the menu is fried rice, gyoza and stir-fries from one wok kitchen. No gluten-free dish is mentioned in any source.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The soup combines seafood and meat stocks, the chashu is soy-braised pork thigh, and the signature pork rice is fried with chopped chashu. No vegetarian dish is mentioned.',
    hours_raw: 'Mon 11:00–14:30 & 17:00–22:00; Tue, Wed, Thu, Sat 11:00–15:00 & 17:00–22:00; Fri 11:30–15:00 & 17:00–22:00; closed Sundays and holidays. Cash only. Reservations for banquets only.',
    hours: { 0: day(['11:00', '14:30'], ev), 1: day(l1, ev), 2: day(l1, ev), 3: day(l1, ev), 4: day(['11:30', '15:00'], ev), 5: day(l1, ev) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ginza 2-chōme (old Kobikichō), near Kabuki-za — 2 min from Higashi-Ginza, 6 min from Ginza exit A8',
    cuisine: 'Machi-chūka since the Taishō era · chuka soba, pork rice, set meals', cuisine_type: 'ramen',
    website: null, gmaps: gm('萬福 東京都中央区銀座2-13-13'), menu_url: null,
    notes: "[Mom & Pop · since the 1920s] Manpuku began as a chuka-soba street stall in the Taishō era. In 1929 the founder opened a shop in old Kobikichō, close to Kabuki-za. He had trained in Western cooking, so it ran as a 'Western and Chinese' (西支料理) restaurant; the faded wooden sign by the door still says so. His grandson Kubo Hidetaka is the third owner and has turned the menu towards Chinese food. Pork rice is the one Western dish left: ketchup fried rice made with the house chashu instead of chicken. The chuka soba keeps the soup the earlier generations made: a soy soup of seafood and meat stocks with a hint of ginger and negi oil, thin curly noodles, and a triangle of thin omelette on top. The wooden building was rebuilt in 2003 but kept its old frontage, and some families have been coming for four generations. Cash only.",
    chef_bio: {
      chef_name: '久保英恭 (Kubo Hidetaka)', roles: ['third-generation owner'],
      origin: 'Born and raised in Ginza; the shop founded as a Taishō-era stall, in Kobikichō since 1929',
      background: "Kubo's grandfather, the founder, worked from early morning till night; the family lived simply in the stall years. Kubo gave up a university-era dream after an injury, trained in other Chinese restaurants at his father's insistence, and took over from his father at about 25. Under him the Western dishes (omurice, cutlets) gave way to more Chinese ones, such as liver and chives and ebi-tama.",
      philosophy: "「先代からスープの味を変えてない」 — the soup has not changed since the previous generations.",
      specialty: 'Chuka soba with a triangle omelette; pork rice (ketchup fried rice with chashu); set meals.',
      anecdotes: [
        { text: "It ran as a 西支料理 (Western-and-Chinese) restaurant, because the founder came from Western cooking; the old wooden sign by the door still faintly reads 「西支料理」.", source: ST },
        { text: "Pork rice, the last Western dish, uses the house chashu rather than chicken or bacon: 「うちは西支料理なので、鶏肉やベーコンを入れないんです」.", source: ST },
        { text: "The tare is the chashu braising sauce; the soup recipe is secret.", source: ST },
        { text: "The shop is among 28 Ginza institutions that made collaboration T-shirts with Uniqlo; Manpuku's carries its chuka soba.", source: ST },
        { text: "「今や、家族４代でお見えになるお客さまもいらっしゃいます」 — some families now come four generations deep.", source: ST },
      ],
      japanese_sources_summary: 'さんたつ(2023.10.25): 大正時代に屋台から、昭和4年(1929)に旧木挽町に店舗。初代は洋食出身で西支料理店。3代目・久保英恭さん(祖父が初代、25歳頃に父から継承)。2003年改築。中華そば800円・ポークライス950円(当時)。醤油スープは魚介と動物系、ショウガ、ネギ油、細めのちぢれ麺、豚モモのチャーシュー、メンマ・ほうれん草・ナルト・三角の薄焼き卵。現代ビジネス: 屋台時代から約100年変わらぬ中華そば。食べログ: 27席、現金のみ、日祝休。',
      confidence: 'high', sources: [ST, GD, TB, R + 'B537318535/', R + 'B537523131/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A retro brick-fronted diner with counter and tables; cash only. Families and regulars; reservations only for banquets.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Thin curly ramen noodles; fried rice, gyoza and stir-fries come from the same wok kitchen.', source: ST }],
      soy_sauce_wheat: [{ text: 'The tare for the chuka soba is the chashu braising sauce, and the chashu is braised in soy sauce (しっかりと醤油で煮込まれて).', source: ST }],
      vegan_cross_contact: [{ text: 'The soup combines seafood and meat stocks (魚介と動物系); pork rice is fried with chopped chashu.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['gyokai', 'blend'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: ['negi'], richness: 'assari',
      noodles: { thickness: 'thin', shape: 'wavy', hydration: null, handmade: false, notes: 'Thin, slightly curly noodles with a smooth swallow.' },
      regional_style: ['Tokyo shoyu'], sub_genre: ['ramen'],
      signature_bowl: '中華そば — ¥800 in 2023 — with a triangle of thin omelette, naruto, spinach and menma.',
      chashu: 'Pork thigh braised firmly in soy sauce — fibrous and old-school, the opposite of rare low-temperature chashu.',
      notable_toppings: ['triangle of thin omelette', 'naruto', 'spinach', 'menma'],
      gf: { status: 'no', note: 'Wheat noodles, soy tare.' },
      vegan: { status: 'no', note: 'Seafood and meat soup; pork chashu.' },
      pantheon: "A pre-war Tokyo shoyu bowl kept almost as it was. Its soup of seafood and meat stocks goes back to the street-stall years, and it is still dressed the old way, with naruto, spinach and a triangle of omelette. Gentle, gingery and dark-coloured but never salty.",
      profile: { richness: 2, oiliness: 2, clarity: 3, tare_strength: 2, noodle_firmness: 2, aroma_punch: 2 },
      profile_basis: {
        richness: [ST, '「あっさり系の醤油スープ」.'],
        oiliness: [ST, '「ネギ油のコクと香り」 — a little negi oil.'],
        clarity: [ST, '「醤油の色が濃い」 — a dark soy colour.'],
        tare_strength: [ST, '「醤油の色が濃いが、あっさりとして塩辛すぎないまろやかなスープ」.'],
        noodle_firmness: [ST, '「喉越しがいい細めのちぢれ麺」.'],
        aroma_punch: [ST, '「ほんのり香るショウガ」 and negi oil.'],
      },
      confidence: 'high', sources: [ST, GD], last_checked: TODAY,
    },
    mom_and_pop: true,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目13番13号 (go) 4m; OSM node 6303381286 「萬福」 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, GD, R + 'B519332110/', R + 'B537523131/'],
    price_note: 'No published menu. The two prices come from the 2023 san-tatsu feature, and the beer from an October 2026 review. Other dishes are known by name only.', last_checked: TODAY, items: [
      it('中華そば', 'chuuka soba', 'Chuka soba (shoyu; triangle omelette, naruto, spinach, menma)', '¥800', 'Noodles', 'no', 'no', '2023 price.', 'chuka_soba'),
      it('ポークライス', 'pooku raisu', 'Pork rice — ketchup fried rice with chashu (the last Western dish)', '¥950', 'Rice', 'ask', 'no', '2023 price.', 'pork_rice'),
      it('やきめし', 'yakimeshi', 'Fried rice', '', 'Rice', 'ask', 'no', '2023 feature.', 'fried_rice'),
      it('レバニラ炒め', 'reba nira itame', 'Liver and garlic-chive stir-fry', '', 'Set meals', 'ask', 'no', '2023 feature; ordered October 2026.', 'reba_nira'),
      it('エビ玉', 'ebi tama', 'Prawn omelette', '', 'Set meals', 'ask', 'no', '2023 feature.', 'ebi_tama'),
      it('', '', 'Gyoza (very large)', '', 'Sides', 'no', 'no', 'October 2026 review.', 'gyoza'),
      it('ゴマだれ冷やし中華', 'gomadare hiyashi chuuka', 'Cold chuka noodles with sesame sauce', '', 'Noodles', 'no', '', 'Gendai feature.', 'hiyashi_chuka_goma'),
      it('', '', 'Bottled beer (medium)', '¥600', 'Drinks', 'no', '', 'October 2026 review. Beer is brewed from barley malt.', 'beer'),
    ] }, {
    cuisine: '大正からの町中華・中華そば・ポークライス・定食',
    neighborhood: '銀座二丁目(旧木挽町)、歌舞伎座のそば。東銀座駅から徒歩2分、銀座駅A8出口から徒歩6分',
    gf_detail: 'グルテンフリーではありません。町中華で、中華そばは細めのちぢれ麺(小麦)に醤油スープ、かえしはチャーシューの醤油ダレです。ほかにやきめし・餃子・炒め物があり、すべて一つの中華鍋の厨房で作ります。グルテンフリーの料理はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。スープは魚介と動物系を合わせたもので、チャーシューは醤油で煮た豚モモ肉、看板のポークライスも刻んだチャーシュー入りです。ベジタリアン向けの料理はどの情報源にも見当たりません。',
    notes: '[個人店・大正創業] 大正時代に中華そばの屋台として始まり、1929年に歌舞伎座に近い旧木挽町に店を構えました。初代は洋食の出身で、「西支料理」(洋食と中華)の店として営業。戸口の古い木札には今もその文字が残ります。初代の孫で3代目の久保英恭さんの代で中華のメニューが増え、洋食で残るのはポークライスだけです。鶏肉ではなく自家製チャーシューを使ったケチャップのやきめしです。中華そばは先代から変わらないスープで、魚介と動物系の醤油スープにほんのりショウガとネギ油、細めのちぢれ麺、三角の薄焼き卵がのります。木造の店は2003年に建て替えましたが、昔の外観を残しています。家族4代で通う客もいます。現金のみ。',
  });
}

// ================================================================ 船見坂
{
  const TB = TBR('A130101/13004985'); const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/articles/271754/';
  const late = ['11:00', '04:00'];
  put({
    id: 'tokyo_ginza_funamizaka', name: '函館らーめん 船見坂 (Funamizaka)', category: 'MOM_AND_POP',
    lat: 35.671413, lng: 139.769279,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: "Not gluten-free. The noodles are made to an early-Shōwa recipe from coarse-ground wheat flour, and the chashu is braised in soy sauce and mirin. Gyoza and a soy-sauce ramen are also on the menu. No gluten-free noodle is mentioned.",
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The clear soup is simmered from kombu, dried scallop, chicken frames, pork bones and vegetables, and every bowl carries pork-belly chashu.',
    hours_raw: 'Mon–Sat 11:00–04:00 (last order 03:30); Sun & holidays 11:00–22:00. Cards and IC payments accepted.',
    hours: { 0: day(late), 1: day(late), 2: day(late), 3: day(late), 4: day(late), 5: day(late), 6: day(['11:00', '22:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 2-chōme, near Kabuki-za — 1–3 min from Higashi-Ginza',
    cuisine: 'Hakodate-style shio ramen ("early-Shōwa Hakodate ramen") · miso · tsukesoba', cuisine_type: 'ramen',
    website: null, gmaps: gm('船見坂 東京都中央区銀座2-12-11'), menu_url: null,
    notes: "[Mom & Pop · Hakodate shio] A Hakodate ramen shop near Kabuki-za, open since 2001 under the banner 'early-Shōwa Hakodate ramen'. Its founder had been won over by ramen on a trip to Hakodate. The present owner, Kiribayashi Masahiko, once cooked at a well-known Chinese restaurant and worked here in 2010–12. He left to run his own shop, and when that site was cleared in 2014 he took this one over; regulars greeted him with 'welcome back'. The bowl to order is shio soba. It is a golden, clear soup of Hokkaido ma-kombu, dried scallop, chicken frames, pork bone and vegetables, seasoned with Bizen rock salt. The noodles are rebuilt from an early-Shōwa recipe with coarse wheat flour and coloured with gardenia, because the old recipe comes out grey. The chashu sits in a soy-and-mirin tare that has been topped up for years. The room is fitted out like a Hokkaido fishing-port shack, and it is open until 4 a.m.",
    chef_bio: {
      chef_name: '桐林正彦 (Kiribayashi Masahiko)', roles: ['owner (since 2014)'],
      origin: 'Shop founded 2001 by its first owner; Ginza 2-chōme',
      background: "Kiribayashi came to cooking through a student job in a ramen shop and later cooked at a well-known Chinese restaurant, but preferred ramen because 'you see the customer's reaction in front of you'. He worked at Funamizaka from 2010, went independent in 2012, and took over this shop in 2014 when his own was cleared for redevelopment.",
      philosophy: "He keeps the founder's 'early-Shōwa Hakodate ramen' as the base and adjusts it to the times. The shio soba's stock proportions now make it a little richer, because customers prefer richer bowls.",
      specialty: 'Shio soba (Bizen rock salt, kombu–scallop–chicken–pork clear soup); early-Shōwa-recipe noodles; long-topped-up chashu tare.',
      anecdotes: [
        { text: "「再オープンすると、知った顔がたくさんお見えになって『おかえり』って言われました」 — on reopening in 2014, many familiar faces came in and said 'welcome back'.", source: ST },
        { text: 'The noodles follow an early-Shōwa recipe with coarse-ground flour; made that way they come out grey, so they are coloured with gardenia (クチナシ).', source: ST },
        { text: "The salt is Bizen rock salt, chosen by the founder for its plain, old-fashioned taste.", source: ST },
        { text: "The chashu tare has been topped up continuously — 「時間と共に仕上がっている最高の調味料」.", source: ST },
      ],
      japanese_sources_summary: 'さんたつ(2023.11.07): 船見坂、2001年に函館ラーメン店として開業、2014年に桐林正彦さんが譲り受け(2010年から約2年勤務、2012年独立)。“昭和初期の函館ラーメン”。スープは北海道産真昆布・干し貝柱・鶏ガラ・トンコツ・野菜の清湯、塩ダレは備前岩塩。麺は昭和初期のレシピで粗挽き小麦粉、クチナシで着色。チャーシューは豚バラ、醤油とみりんの継ぎ足しダレ。塩そば800円(当時)。食べログ: 17席、月〜土11:00〜翌4:00、日祝11:00〜22:00、交通系IC可。',
      confidence: 'high', sources: [ST, TB, R + 'B462208328/', R + 'B481497166/', R + 'B537140497/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'A small, retro counter with a few tables; overseas visitors are common near Kabuki-za. Cards and IC payments accepted. Open until 4 a.m. except Sundays.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'The noodles are made from coarse-ground wheat flour (粗めに挽いた小麦粉); gyoza are on the menu.', source: ST }],
      soy_sauce_wheat: [{ text: 'The chashu is seasoned in a soy-sauce and mirin tare; miso and shoyu ramen are also served.', source: ST }],
      vegan_cross_contact: [{ text: 'The clear soup is kombu, dried scallop, chicken frames, pork bone and vegetables; pork-belly chashu on top.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['gyokai', 'chicken', 'tonkotsu', 'vegetable'], broth_texture: 'chintan', tare: ['shio', 'miso', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thin', shape: null, hydration: null, handmade: false, notes: 'Special-order thin noodles to an early-Shōwa recipe, coarse-ground wheat, coloured with gardenia; slightly firm with a crisp bite.' },
      regional_style: ['Hakodate shio'], sub_genre: ['ramen', 'tsukemen'],
      signature_bowl: '塩そば (shio soba) — ¥800 in 2023; 特製塩そば ¥1,200 in September 2026.',
      chashu: 'Thick pork belly, seasoned in a soy-and-mirin tare that has been topped up for years.',
      notable_toppings: ['menma', 'spinach', 'negi', 'naruto', 'nori', 'yuzu-koshō offered for the shio soba (2023)'],
      gf: { status: 'no', note: 'Wheat noodles; soy-braised chashu.' },
      vegan: { status: 'no', note: 'Chicken, pork and scallop soup.' },
      pantheon: "Hakodate shio as it might have tasted in the early Shōwa years: a golden clear soup of kombu, scallop, chicken and pork, seasoned with plain rock salt over crisp, firm noodles rebuilt from an old recipe. Mellow at first, with a clean, sharp finish.",
      profile: { richness: 3, oiliness: 2, clarity: 5, tare_strength: 3, noodle_firmness: 4, aroma_punch: 1 },
      profile_basis: {
        richness: [ST, '「まろやか」; the owner has made it 「少し濃厚」 than the founder\'s.'],
        oiliness: [ST, 'A 清湯 (clear soup); no oil described.'],
        clarity: [ST, '「透き通った黄金スープ」; a 2026 diner praised the clarity (' + R + 'B537140497/).'],
        tare_strength: [ST, '「最初はまろやかな口当たりだが、後味はキリッとしている」.'],
        noodle_firmness: [ST, '「ちょっと固めなんですよ。食感的にもサクサクっと歯切れがいい」.'],
        aroma_punch: [ST, 'No aroma oil; yuzu-koshō and garlic are optional at the table.'],
      },
      confidence: 'high', sources: [ST, R + 'B537140497/'], last_checked: TODAY,
    },
    mom_and_pop: true,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座二丁目12番11号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B123993530/', R + 'B462208328/', R + 'B481497166/', R + 'B532992196/', R + 'B504957411/'],
    price_note: 'No published menu. Prices come from the 2023 feature (shio soba) and from what Tabelog reviewers paid in September–October 2026.', last_checked: TODAY, items: [
      it('塩そば', 'shio soba', 'Shio soba (Hakodate-style salt ramen)', '¥800', 'Ramen', 'no', 'no', '2023 price.', 'shio_soba'),
      it('特製塩そば', 'tokusei shio soba', 'Special shio soba', '¥1,200', 'Ramen', 'no', 'no', 'Paid by Tabelog reviewers, September 2026.', 'tokusei_shio_soba'),
      it('味噌らーめん', 'miso raamen', 'Miso ramen (slightly thicker wavy noodles)', '', 'Ramen', 'no', 'no', 'A reviewer paid ¥1,200 with corn and nori added, September 2026.', 'miso_ramen'),
      it('つけそば', 'tsuke soba', 'Tsukesoba (salt dipping broth)', '¥1,100', 'Tsukemen', 'no', 'no', 'Tabelog reviewer, September 2026.', 'tsukesoba'),
      it('', '', 'Clam (asari) soba', '', 'Ramen', 'no', 'no', 'On the menu per 2026 reviewers.', 'asari_soba'),
      it('', '', 'Seafood wonton noodles', '', 'Ramen', 'no', 'no', 'On the menu per 2026 reviewers.', 'seafood_wonton_men'),
      it('', '', 'Tanmen', '', 'Ramen', 'no', 'no', 'October 2026 review.', 'tanmen'),
      it('', '', 'Handmade gyoza', '', 'Sides', 'no', 'no', '2023 feature; 2026 reviews.', 'gyoza'),
      it('', '', 'Hakodate mini rice bowl (Hokkaido seafood)', '', 'Rice', 'ask', 'no', '2023 feature.', 'hakodate_mini_don'),
    ] }, {
    cuisine: '函館塩ラーメン(“昭和初期の函館ラーメン”)・味噌・つけそば',
    neighborhood: '銀座二丁目、歌舞伎座のそば。東銀座駅から徒歩1〜3分',
    gf_detail: 'グルテンフリーではありません。麺は昭和初期のレシピで粗挽きの小麦粉から作り、チャーシューは醤油とみりんのタレで味付けしています。餃子や醤油ラーメンもあります。グルテンフリーの麺はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。澄んだスープは昆布・干し貝柱・鶏ガラ・豚骨・野菜を煮込んだもので、どの一杯にも豚バラのチャーシューがのります。',
    notes: '[個人店・函館塩] 2001年から歌舞伎座近くで「昭和初期の函館ラーメン」を掲げる函館ラーメン店。創業者が函館で食べたラーメンに感銘を受けて開きました。今の店主・桐林正彦さんは有名中華料理店のコック出身で、2010〜12年にここで働いた後に独立。自分の店が2014年に立ち退きになり、この店を譲り受けました。常連からは「おかえり」と迎えられたそうです。頼むべきは塩そば。北海道産真昆布・干し貝柱・鶏ガラ・豚骨・野菜の黄金色の清湯を備前岩塩で仕上げます。麺は昭和初期のレシピを粗挽き小麦で再現したもので、昔のレシピだと灰色になるためクチナシで色付け。チャーシューは何年も継ぎ足してきた醤油とみりんのタレに漬けます。店内は北海道の漁港の小屋をイメージした造りで、深夜4時まで営業しています。',
  });
}

// ================================================================ 谷ラーメン
{
  const TB = TBR('A130102/13022529'); const R = TB + 'dtlrvwlst/';
  const wk = day(['11:00', '13:30'], ['17:00', '19:30']);
  put({
    id: 'tokyo_yurakucho_tani_ramen', name: '谷ラーメン (Tani Ramen)', category: 'MOM_AND_POP',
    lat: 35.676615, lng: 139.764904,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. A shoyu ramen counter with wheat ramen noodles, wontons and fried rice. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. Diners describe a clear pork-bone (tonkotsu) and chicken soup, and the bowls carry pork chashu and meat wontons.',
    hours_raw: 'Mon–Fri 11:00–13:30 & 17:00–19:30; closed Saturdays, Sundays and holidays. Cash only. The ticket machine outside does not take the new banknotes, so the owner changes them inside.',
    hours: { 0: wk, 1: wk, 2: wk, 3: wk, 4: wk }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Marunouchi 3-chōme, under the JR tracks opposite Tokyo International Forum — 3 min from JR Yūrakuchō, 5 min from Tokyo Stn Yaesu South',
    cuisine: 'Old-school shoyu ramen · wonton-men · fried rice (weekdays only)', cuisine_type: 'ramen',
    website: null, gmaps: gm('谷ラーメン 東京都千代田区丸の内3-7-11'), menu_url: null,
    notes: "[Mom & Pop · under the tracks] A small weekday-only ramen shop under the JR viaduct opposite Tokyo International Forum. An 18-time regular dates it to the late 1960s. The soup is a clear, golden pork-bone and chicken stock with soy sauce, which diners call rich in collagen umami yet clean. The noodles come from Maruyama Seimen, and the chashu is pork leg. The usual order is ramen with half fried rice, or wonton-men. You buy a ticket from the machine outside, which will not take the new banknotes, so the owner changes them for you inside. It has 12 seats, including a small tatami area at lunch. Cash only, and closed at weekends.",
    chef_bio: {
      chef_name: null, roles: ['owner-operator'],
      origin: 'Under the JR tracks, Marunouchi 3-chōme; dated by a long-time regular to 1967–68',
      background: 'A long-running owner-run ramen shop. No owner name or founding story appears in any source found; the founding date comes from a regular\'s review (which gives both 1967 and 1968).',
      philosophy: null,
      specialty: 'Clear pork-bone and chicken shoyu ramen; wonton-men; half fried rice.',
      anecdotes: [
        { text: "The machine outside rejected a ¥1,000 note; the owner explained that it cannot take the new bills and changed it inside — two customers that day.", source: R + 'B535593959/' },
        { text: 'An 18-time regular: a beautifully clear tonkotsu broth rich in collagen umami, medium-thick noodles from Maruyama Seimen, and chashu from the pork leg.', source: R + 'B464330698/' },
      ],
      japanese_sources_summary: '食べログ: 谷ラーメン、千代田区丸の内3-7-11(国際フォーラム向かいのJR高架下)、月〜金11:00〜13:30・17:00〜19:30、土日祝休、12席(座敷はランチのみ)、現金のみ、サービス料・お通し代なし。2026年の口コミ: 券売機は新紙幣不可で店内で両替、ラーメン+半チャーハン1,140〜1,190円、チャーシューワンタンメン1,050円、チャーハン800円。常連は創業1967〜68年とする。',
      confidence: 'medium', sources: [TB, R + 'B464330698/', R + 'B488974908/', R + 'B535593959/'],
    },
    cultural_comfort: { level: 'japanese', note: 'Ticket machine (old-style banknotes only; the owner changes new ones), cash only, weekday lunch and early evening only.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Wheat ramen noodles; wontons and fried rice from the same small kitchen.', source: R + 'B464330698/' }],
      soy_sauce_wheat: [{ text: 'The soup is finished with soy sauce ("the mellow depth of soy sauce").', source: R + 'B488974908/' }],
      vegan_cross_contact: [{ text: 'A clear pork-bone and chicken stock; pork-leg chashu.', source: R + 'B488974908/' }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['tonkotsu', 'chicken'], broth_texture: 'chintan', tare: ['shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'straight', hydration: null, handmade: false, notes: 'From Maruyama Seimen; described as firm medium-thick by one regular and chewy medium-thin straight by another.' },
      regional_style: ['Tokyo shoyu'], sub_genre: ['ramen'],
      signature_bowl: 'ラーメン + 半チャーハン (ramen with half fried rice), ¥1,140–1,190 in 2026.',
      chashu: 'Pork leg (rear) chashu.',
      notable_toppings: ['chashu', 'wontons (wonton-men)'],
      gf: { status: 'no', note: 'Wheat noodles, soy tare.' },
      vegan: { status: 'no', note: 'Pork-bone and chicken soup.' },
      pantheon: 'A Shōwa salaryman bowl under the railway arches: a clear, collagen-rich pork-bone and chicken soup with soy sauce, eaten at speed with half a plate of fried rice.',
      profile: { richness: 3, oiliness: 2, clarity: 4, tare_strength: 3, noodle_firmness: 4, aroma_punch: 1 },
      profile_basis: {
        richness: [R + 'B464330698/', 'Rich in collagen-derived umami.'],
        oiliness: [R + 'B464330698/', 'Described as beautifully clear; no oil mentioned.'],
        clarity: [R + 'B488974908/', 'A clear, golden broth.'],
        tare_strength: [R + 'B488974908/', 'The mellow depth of soy sauce.'],
        noodle_firmness: [R + 'B464330698/', 'Firm medium-thick noodles.'],
        aroma_punch: [R + 'B488974908/', 'No aroma oil or garlic described.'],
      },
      confidence: 'medium', sources: [R + 'B464330698/', R + 'B488974908/'], last_checked: TODAY,
    },
    mom_and_pop: true,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区丸の内三丁目7番11号 (go) 3m; OSM node 6303337092 「谷ラーメン」 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488974908/', R + 'B535730540/', R + 'B535593959/', R + 'B535309406/'],
    price_note: 'No published menu; prices are what Tabelog reviewers paid in September–October 2026. Names come from machine-translated reviews.', last_checked: TODAY, items: [
      it('ラーメン', 'raamen', 'Ramen (clear pork-bone and chicken shoyu)', '', 'Ramen', 'no', 'no', '', 'ramen'),
      it('', '', 'Ramen + half fried rice', '¥1,140', 'Sets', 'no', 'no', '¥1,140–1,190 paid in 2026.', 'ramen_half_chahan'),
      it('', '', 'Wonton-men', '', 'Ramen', 'no', 'no', 'September 2026 review.', 'wonton_men'),
      it('', '', 'Chashu wonton-men', '¥1,050', 'Ramen', 'no', 'no', 'September 2026 review.', 'chashu_wonton_men'),
      it('', '', 'Chashu ramen', '', 'Ramen', 'no', 'no', 'October 2026 review.', 'chashu_ramen'),
      it('', '', 'Fried rice', '¥800', 'Rice', 'ask', 'no', 'September 2026 review.', 'fried_rice'),
    ] }, {
    cuisine: '昔ながらの醤油ラーメン・ワンタンメン・チャーハン(平日のみ)',
    neighborhood: '丸の内三丁目、東京国際フォーラム向かいのJR高架下。JR有楽町駅から徒歩3分、東京駅八重洲南口から徒歩5分',
    gf_detail: 'グルテンフリーではありません。小麦のラーメン麺、ワンタン、チャーハンの醤油ラーメン店で、グルテンフリーの選択肢はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。口コミでは澄んだ豚骨と鶏のスープとされ、豚のチャーシューと肉餡のワンタンがのります。',
    notes: '[個人店・ガード下] 東京国際フォーラム向かい、JR高架下にある平日だけのラーメン店です。18回通う常連によれば1960年代後半の創業。スープは澄んだ黄金色の豚骨と鶏に醤油を合わせたもので、コラーゲンの旨味が濃いのにすっきりしていると評されます。麺は丸山製麺、チャーシューは豚のもも肉。定番はラーメンと半チャーハン、またはワンタンメンです。店外の券売機は新紙幣が使えないため、店内で店主が両替してくれます。座敷(昼のみ)を含めて12席。現金のみ、土日は休み。',
  });
}

// ================================================================ 芳蘭
{
  const TB = TBR('A130102/13002736'); const R = TB + 'dtlrvwlst/';
  const ms = ['11:00', '02:00'];
  put({
    id: 'tokyo_hibiya_horan', name: '芳蘭 (Hōran)', category: 'OMNI',
    lat: 35.672684, lng: 139.760199,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. Miso, shoyu and curry ramen on curly wheat noodles, with shumai and wontons (wheat wrappers). No gluten-free option is mentioned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask',
    vegan_detail: "No vegan dish is mentioned in any source. The signature miso bowl comes with two pork shumai, and the soup stock itself is not described. Treat it as not vegan unless the staff tell you otherwise.",
    hours_raw: 'Mon–Sat 11:00–02:00; Sun & holidays 11:00–24:00. Cash only. Smoking is allowed throughout.',
    hours: { 0: day(ms), 1: day(ms), 2: day(ms), 3: day(ms), 4: day(ms), 5: day(ms), 6: day(['11:00', '24:00']) }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Yūrakuchō 1-chōme (TS Hibiya Bldg B1F), on the Hibiya side of the JR tracks — 3 min from Hibiya Stn',
    cuisine: 'Late-night basement ramen · miso ramen with giant shumai · butter ramen · curry ramen', cuisine_type: 'ramen',
    website: null, gmaps: gm('芳蘭 東京都千代田区有楽町1-2-9'), menu_url: null,
    notes: "[Ramen · late night] A basement ramen shop in Hibiya that you cannot see from the street, open until 2 a.m. six nights a week. The order everyone remembers is the miso shumai ramen: a large bowl of mild miso soup and curly noodles with wood ear and green onion, and two large shumai floating in it. Miso and shoyu butter ramen cost the same with or without butter. A curry ramen is built on the ramen broth. There are drinks and snacks for a late crowd. Smoking is allowed throughout, and payment is cash only.",
    chef_bio: {
      chef_name: null, roles: [],
      origin: 'Hibiya / Yūrakuchō',
      background: 'No owner, operator or founding history is given in any source read.',
      philosophy: null,
      specialty: 'Miso ramen with two large shumai; miso / shoyu butter ramen; curry ramen.',
      anecdotes: [
        { text: "A first-timer asked whether the shumai came on the side and was told they are in the ramen — two sizeable shumai floating in the bowl.", source: R + 'B534865592/' },
        { text: 'Butter costs nothing extra on the miso and shoyu ramen, so regulars always take it.', source: R + 'B536746263/' },
      ],
      japanese_sources_summary: '食べログ: 芳蘭、千代田区有楽町1-2-9 TS日比谷ビルB1F、月〜土11:00〜翌2:00、日祝11:00〜24:00、33席、現金のみ、喫煙可。2026年の口コミ: 味噌しゅうまいラーメン1,600円(大きなしゅうまい2個入り)、味噌バター・醤油バターラーメン各1,350円(バター追加は同額)、カレーラーメン、ワンタン麺。',
      confidence: 'low', sources: [TB, R + 'B534865592/', R + 'B536746263/', R + 'B535579995/'],
    },
    cultural_comfort: { level: 'japanese', note: 'A smoky basement counter, cash only and smoking allowed. Best as a late-night stop.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Curly wheat noodles; shumai and wontons on the menu.', source: R + 'B534865592/' }],
      soy_sauce_wheat: [{ text: 'Shoyu butter ramen and wonton noodles in soy sauce are on the menu.', source: R + 'B536746263/' }],
      vegan_cross_contact: [{ text: 'The miso ramen carries two large pork shumai.', source: R + 'B534865592/' }],
      staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['other'], broth_texture: null, tare: ['miso', 'shoyu'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'medium', shape: 'wavy', hydration: null, handmade: null, notes: 'Curly noodles that hold the slightly thick miso soup.' },
      regional_style: [], sub_genre: ['ramen'],
      signature_bowl: '味噌しゅうまいラーメン (miso ramen with two big shumai), ¥1,600 in September 2026.',
      chashu: null,
      notable_toppings: ['two large shumai', 'wood ear mushroom', 'green onion', 'butter (free)'],
      gf: { status: 'no', note: 'Wheat noodles and shumai.' },
      vegan: { status: 'ask', note: 'Stock not described; shumai are pork.' },
      pantheon: 'A Shōwa-style late-night miso bowl with a Hibiya quirk: the shumai go into the soup. Mild miso, curly noodles and free butter make it a last stop after drinks.',
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 2, noodle_firmness: 3, aroma_punch: 2 },
      profile_basis: {
        richness: [R + 'B536746263/', 'Not too heavy, but a slightly thick texture that clings to the noodles.'],
        oiliness: [R + 'B536746263/', 'Butter melts in and adds richness.'],
        clarity: [R + 'B536746263/', 'A slightly thick miso soup — not clear.'],
        tare_strength: [R + 'B534865592/', 'The miso flavour was mild.'],
        noodle_firmness: [null, 'Not described in any source read; scored at the midpoint.'],
        aroma_punch: [null, 'Not described in any source read; scored low-mid.'],
      },
      confidence: 'low', sources: [R + 'B534865592/', R + 'B536746263/'], last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都千代田区有楽町一丁目2番9号 (go) 18m; OSM node 6303385085 「芳蘭」 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534865592/', R + 'B536746263/', R + 'B535579995/', R + 'B536747442/'],
    price_note: 'No published menu; prices are what Tabelog reviewers paid in September–October 2026, from machine-translated reviews.', last_checked: TODAY, items: [
      it('', '', 'Miso shumai ramen (two large shumai in the bowl)', '¥1,600', 'Ramen', 'no', 'no', 'September 2026 review.', 'miso_shumai_ramen'),
      it('', '', 'Miso butter ramen', '¥1,350', 'Ramen', 'no', 'ask', 'October 2026 review; butter at no extra cost.', 'miso_butter_ramen'),
      it('', '', 'Shoyu butter ramen', '¥1,350', 'Ramen', 'no', 'ask', 'October 2026 review.', 'shoyu_butter_ramen'),
      it('', '', 'Curry ramen (curry made with the ramen broth)', '', 'Ramen', 'no', 'ask', 'September–October 2026 reviews.', 'curry_ramen'),
      it('', '', 'Wonton noodles (shoyu)', '', 'Ramen', 'no', 'no', 'October 2026 review.', 'wonton_men'),
      it('', '', 'Braised pork ramen (about 15 minutes)', '', 'Ramen', 'no', 'no', 'September 2026 review.', 'kakuni_ramen'),
    ] }, {
    cuisine: '深夜営業の地下のラーメン店・しゅうまい入り味噌ラーメン・バターラーメン・カレーラーメン',
    neighborhood: '有楽町一丁目(TS日比谷ビルB1F)、JR高架の日比谷側。日比谷駅から徒歩3分',
    gf_detail: 'グルテンフリーではありません。味噌・醤油・カレーのラーメンはちぢれた小麦麺で、しゅうまいやワンタン(小麦の皮)もあります。グルテンフリーの選択肢はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガン向けの料理はどの情報源にも見当たりません。看板の味噌ラーメンには豚のしゅうまいが2個入り、スープのダシは書かれていません。店員に確認できない限り、ヴィーガンではないと考えてください。',
    notes: '[ラーメン・深夜営業] 外からは見えない日比谷の地下のラーメン店で、週6日は深夜2時まで営業。名物は味噌しゅうまいラーメンで、大きな丼にマイルドな味噌スープとちぢれ麺、きくらげとネギ、そこに大きなしゅうまいが2個浮かびます。味噌バター・醤油バターはバターの有無で値段が同じ。カレーラーメンはラーメンのスープで作ったカレーです。お酒とつまみもあり、夜遅い客が集まります。全席喫煙可、現金のみ。',
  });
}

// ================================================================ 銀座 梵天
{
  const TB = TBR('A130101/13126793'); const R = TB + 'dtlrvwlst/';
  const ST = 'https://san-tatsu.jp/articles/272180/';
  const d1 = ['11:00', '00:30'];
  put({
    id: 'tokyo_ginza_bonten', name: '銀座 梵天 (Ginza Bonten)', category: 'OMNI',
    lat: 35.673475, lng: 139.768625,
    gf_confidence: 'no', gf_label: 'Not gluten-free',
    gf_detail: 'Not gluten-free. The signature tsukesoba uses extra-thick wheat noodles, the Japanese-style ramen uses ultra-thin noodles from Mikawaya Seimen, and gyoza are on the menu. No gluten-free noodle is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The spicy dipping sauce is built on a chicken-frame (鶏ガラ) stock with shredded chashu and menma, and the house chashu is pork loin.',
    hours_raw: 'Daily 11:00–00:30 (Tabelog; the 2023 feature gave 11:00–24:00, to 1:00 Fri–Sun). Cash only.',
    hours: { 0: day(d1), 1: day(d1), 2: day(d1), 3: day(d1), 4: day(d1), 5: day(d1), 6: day(d1) }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ginza 1-chōme, a lane off Ginza Yanagi-dōri — 1 min from Ginza-itchōme exit 10',
    cuisine: 'Spicy tsukesoba "Machine Gun" (麻辛丸) · Japanese-style ramen', cuisine_type: 'ramen',
    website: null, gmaps: gm('銀座 梵天 東京都中央区銀座1-9-12'), menu_url: null,
    notes: "[Ramen · tsukesoba] A 20-seat shop opened in 2011, decorated like an old farmhouse with beams and handwritten menus on the walls. The president chose the décor and the name; the manager, Satō Hikaru, says the name was probably picked because the characters look cool. The draw is 麻辛丸, read 'machine gun', a registered trademark. Extra-thick, chewy noodles that taste of wheat go into a red, sour-hot dip on a chicken-frame base, with shredded chashu and house menma. Pork-loin chashu is the top topping. There is also a very light Japanese-style ramen on ultra-thin noodles. Office workers come at lunch, hotel guests in the afternoon and drinkers late at night. There is an English and Korean menu. Cash only.",
    chef_bio: {
      chef_name: '佐藤光 (Satō Hikaru, manager)', roles: ['manager', 'company-run (a 社長 owns the shop)'],
      origin: 'Ginza 1-chōme; opened 17 April 2011',
      background: "Run by a manager for the company's president, who named the shop and chose its old-farmhouse interior. The staff write the menus by hand.",
      philosophy: null,
      specialty: 'Spicy tsukesoba 麻辛丸 (trademarked); pork-loin chashu; ultra-thin-noodle Japanese-style ramen.',
      anecdotes: [
        { text: "「『梵天』という店名は社長がつけたんですけど、おそらく字面がカッコいいからだと思います（笑）」.", source: ST },
        { text: '麻辛丸 ("machine gun") is a registered trademark; the maker of its extra-thick noodles is "a secret".', source: ST },
        { text: 'Lunch is local office workers, afternoons are tourists checking into hotels, and nights are drinkers after a last bowl.', source: ST },
        { text: 'An October 2026 diner noticed the menu had English and Korean versions.', source: R + 'B537786879/' },
      ],
      japanese_sources_summary: 'さんたつ(2023.11.11): 銀座 梵天、銀座1-9-12、2011年開店、店長・佐藤光さん、店名と古民家風の内装は社長の好み。つけそば麻辛丸(マシンガン)並980円(当時)・登録商標、極太麺(製麺所は秘密)、つけダレは鶏ガラベースの旨辛、細切りチャーシュー・自家製メンマ入り。追加チャーシュー400円(豚ロース)、味玉150円、和風ラーメン950円(極細針麺・三河屋製麺)。20席。食べログ: 開店2011年4月17日、毎日11:00〜翌0:30、現金のみ。',
      confidence: 'high', sources: [ST, TB, R + 'B537015263/', R + 'B536603233/', R + 'B537786879/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'English and Korean menus (October 2026 review). Counter and tables, families and groups common. Cash only; open past midnight.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Extra-thick wheat noodles for the tsukesoba; ultra-thin noodles from 三河屋製麺 for the Japanese-style ramen.', source: ST }],
      soy_sauce_wheat: [],
      vegan_cross_contact: [{ text: 'The spicy dip is on a chicken-frame base (ベースの鶏ガラスープ) with shredded chashu and menma.', source: ST }],
      staff_allergy_handling: [], positives: [], confidence: 'medium', last_checked: TODAY,
    },
    ramen: {
      broth_base: ['chicken'], broth_texture: null, tare: ['other'], aroma_oil: [], richness: 'medium',
      noodles: { thickness: 'thick', shape: null, hydration: null, handmade: false, notes: 'Extra-thick, chewy noodles that taste of wheat (maker kept secret); ultra-thin "needle" noodles from 三河屋製麺 for the Japanese-style ramen.' },
      regional_style: [], sub_genre: ['tsukemen', 'ramen'],
      signature_bowl: 'つけそば 麻辛丸 (machine-gun spicy tsukesoba) — ¥980 regular in 2023; a large tsukemen was ¥1,080 in October 2026.',
      chashu: 'Large slices of house pork-loin chashu — the most-ordered topping (+¥400 in 2023).',
      notable_toppings: ['pork-loin chashu', 'seasoned egg', 'house menma', 'shredded chashu in the dip'],
      gf: { status: 'no', note: 'Wheat noodles.' },
      vegan: { status: 'no', note: 'Chicken-frame base; chashu in the dip.' },
      pantheon: "A Ginza tsukesoba built around a trademarked hit: wheat-forward extra-thick noodles plunged into a red, sour-and-spicy dip whose chicken-frame base keeps it drinkable.",
      profile: { richness: 3, oiliness: 3, clarity: 2, tare_strength: 4, noodle_firmness: 4, aroma_punch: 4 },
      profile_basis: {
        richness: [ST, '「ベースの鶏ガラスープに深みがあり、すんなり完食できる」.'],
        oiliness: [null, 'Not described in any source read; scored at the midpoint.'],
        clarity: [ST, 'A strongly red, spicy dipping sauce (赤みの強い旨辛タレ) — not a clear soup.'],
        tare_strength: [ST, '「辛味と酸味があわさった刺激」.'],
        noodle_firmness: [ST, 'Extra-thick noodles with a mochi-mochi chew.'],
        aroma_punch: [ST, 'A spicy-sour hit that the writer says "shoots you through" (撃ち抜かれる).'],
      },
      confidence: 'medium', sources: [ST], last_checked: TODAY,
    },
    mom_and_pop: false,
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座一丁目9番12号 (go) 12m; OSM node 11234854612 「銀座梵天」 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B537015263/', R + 'B536603233/'],
    price_note: 'No published menu. 2023 prices come from the san-tatsu feature, and two 2026 prices from Tabelog reviews.', last_checked: TODAY, items: [
      it('つけそば 麻辛丸(並)', 'tsukesoba mashingan', 'Machine-gun spicy tsukesoba (regular)', '¥980', 'Tsukemen', 'no', 'no', '2023 price; registered trademark.', 'mashingan_tsukesoba'),
      it('', '', 'Large tsukemen', '¥1,080', 'Tsukemen', 'no', 'no', 'October 2026 review.', 'tsukemen_large'),
      it('', '', 'Marutoku ramen', '¥1,100', 'Ramen', 'no', 'no', 'October 2026 review.', 'marutoku_ramen'),
      it('和風ラーメン', 'wafuu raamen', 'Japanese-style ramen (very light soup, ultra-thin noodles)', '¥950', 'Ramen', 'no', 'no', '2023 price.', 'wafu_ramen'),
      it('追加チャーシュー', 'tsuika chaashuu', 'Extra pork-loin chashu', '¥400', 'Toppings', '', 'no', '2023 price.', 'chashu_extra'),
      it('味玉', 'ajitama', 'Seasoned egg', '¥150', 'Toppings', '', 'no', '2023 price.', 'ajitama'),
      it('', '', 'Gyoza', '', 'Sides', 'no', 'no', 'Listed on Tabelog categories.', 'gyoza'),
    ] }, {
    cuisine: '旨辛つけそば「麻辛丸(マシンガン)」・和風ラーメン',
    neighborhood: '銀座一丁目、銀座柳通りから入った路地。銀座一丁目駅10番出口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。看板のつけそばは極太の小麦麺、和風ラーメンは三河屋製麺の極細麺で、餃子もあります。グルテンフリーの麺はどの情報源にも見当たりません。',
    vegan_detail: 'ヴィーガンではありません。旨辛のつけダレは鶏ガラベースで細切りチャーシューとメンマ入り、自家製チャーシューは豚ロースです。',
    notes: '[ラーメン・つけそば] 2011年開店、梁や手書きメニューが古民家を思わせる20席の店です。内装と店名は社長の好みで、店長の佐藤光さんいわく店名は「字面がカッコいいから」。名物は登録商標の「麻辛丸(マシンガン)」。小麦の香るもちもちの極太麺を、鶏ガラベースの赤く酸っぱ辛いつけダレ(細切りチャーシューと自家製メンマ入り)で食べます。人気トッピングは豚ロースのチャーシュー。超あっさりの和風ラーメンは極細麺です。昼は近隣の会社員、午後はホテルに入った観光客、夜は飲んだ後の客でにぎわいます。英語・韓国語メニューあり、現金のみ。',
  });
}

save();
