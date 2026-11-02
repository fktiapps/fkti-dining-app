// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 7.
//   + 文福 Bunbuku (long-running two-floor izakaya of fish, oden and fugu; clay-pot-rice set lunches)
//   + Bar 内藤 Bar Naito (14-seat basement cocktail bar of owner Naito, ex-OPA Monzen-Nakacho; Tabelog Bar 100 2022)
//   + 人形町 梅田 Ningyocho Umeda (third-generation eel house; signature Umeda-don of eel and pickled plum)
//   + ボラチタ Voracita (20-seat Italian; ¥1,100 pasta lunch, party plans; since 2011)
//   - skipped 13287303 つじ田, 13210427 東京油組総本店, 13108968 松屋 (chains; reasons in skip() below)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 10 ningyocho` (main repo, 2026-11-01): after the three
//   chain skips, the next four in order — Bunbuku 74 m (core by vegtag), Bar Naito 87 m (14 seats), Umeda 122 m (20 seats),
//   Voracita 126 m (20 seats).
//   Dedupe. None is in data/tokyo.json by name or address. Bunbuku (2-6-12) is next to 五十番ビル, the building of
//   tokyo_nanafuku_ningyocho and tokyo_tomita_ningyocho (2-6-11); pins 10 and 13 m apart.
//   Chain check. Umeda, Bunbuku, Bar Naito, Voracita: single shops.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13287303', 'chain branch: つじ田 already in data (tokyo_tsujita_suidobashi; placeholders tokyo3__76 日本橋八重洲店, tokyo3__186 神田御茶ノ水店)');
skip('13210427', 'chain branch: 東京油組総本店 reached 100 shops in Japan with its Toyota branch (press release of 株式会社サッポロ実業, PR TIMES, 20 August 2026) — a rapidly expanding chain');
skip('13108968', 'national chain branch (松屋 gyudon)');

// ================================================================ 文福
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13092934/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_bunbuku_ningyocho', name: '文福 (Bunbuku)', category: 'OMNI',
    lat: 35.68601, lng: 139.782938, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi is the plainest choice, but the set lunches lean on fried and tempura dishes (mixed fry, conger-eel tempura), miso soup and chawanmushi made with dashi, and nothing is called gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and vegetable tempura appears in a 2025 review, but the cooking is fish-led: dashi in the miso soup and oden, chawanmushi with clams, fish cakes.',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:30) and 17:00–23:00 (last order 22:30); closed Sat, Sun and holidays; hours may change (Tabelog). Lunch is served on the 3rd floor (January 2026). Reservations accepted (Tabelog). Cards, e-money and QR (Tabelog). Non-smoking; children welcome (Tabelog). On the 2nd and 3rd floors of an older building, up the stairs (2025–26 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-6-12, 渡辺ビル 2F–3F, in a retro building — 3 min from Ningyocho Stn',
    cuisine: 'Long-running izakaya of fish, oden and fugu (Tabelog; 2025–26 reviews) · weekday set lunches about ¥1,050–1,150, each with clay-pot rice with crispy bottom (one refill), miso soup, a small side, pickles and chawanmushi: sashimi set of three fish (October 2025, January 2026); mixed fry of shrimp, white fish and chicken ¥1,050 (August 2025, April 2026); grilled salmon (January 2026); conger-eel tempura special ¥1,150 (July 2025) · dinner: sashimi platters, oden in a clear broth, homemade hanpen, ankimo, conger-eel and vegetable tempura, grilled black cod (2025 reviews) · sake and shochu; a sweet such as candied summer-orange peel or chestnut yokan after dinner (2025)',
    website: TB, gmaps: gm('文福 人形町'), menu_url: null,
    notes: "[Izakaya · Ningyocho, a long-running fish-and-oden izakaya with clay-pot-rice lunches] Up the stairs of a retro building a few minutes from Ningyocho station, an old-established izakaya on two floors. On weekdays the third floor serves set lunches for about ¥1,050: three kinds of sashimi, a mixed fry or grilled salmon, each with clay-pot rice with a crisp bottom, miso soup, pickles and, unusually, a chawanmushi. Diners are often women, and the friendly owner and staff (April 2026) sometimes play Showa-era pop. In the evening it is sashimi platters, oden in a clear broth, homemade hanpen, ankimo and tempura with sake, and a small sweet after the bill (2025). Weekdays only.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "the friendly owner and staff", April 2026 review)'], origin: null,
      background: 'Described as a long-established izakaya beloved in Ningyocho (May and December 2025 reviews). Lunch prices held at ¥1,000 until early 2025, then rose to ¥1,050 (April 2025 review).',
      philosophy: null, specialty: 'Sashimi, oden and homemade hanpen; clay-pot rice set lunches.',
      anecdotes: [
        { text: '"The rice is cooked in a clay pot, which is a nice touch. The crispy bits are just perfect." — January 2026, grilled salmon set, eighth visit.', source: R + 'B475796560/' },
        { text: '"That day, for some reason, they were playing nostalgic songs from the Showa era, like Akina Nakamori." — April 2026, sashimi lunch.', source: R + 'B526616958/' },
        { text: '"The homemade hanpen (fish cake) was fluffy, and the assorted oden had a clear broth that was consistently delicious." — December 2025, dinner.', source: R + 'B519159623/' },
      ],
      japanese_sources_summary: '食べログ: 文福、居酒屋、ふぐ、おでん、日本橋人形町2-6-12 渡辺ビル 2F〜3F、人形町駅から徒歩3分、月〜金11:30〜14:00、17:00〜23:00、土日祝休み、予約可、カード・電子マネー・QR可、禁煙、子ども可、ベジタリアンメニューあり。口コミ(2025年2月〜2026年4月): 人形町の老舗の居酒屋、昼は3階で、刺身定食、ミックスフライ定食1,050円、鮭の塩焼き、穴子の天ぷら1,150円、どれも土鍋ご飯 (おかわり1回)、味噌汁、小鉢、茶碗蒸し付き、夜は刺身の盛り合わせ、透き通ったつゆのおでん、自家製のはんぺん、あん肝、天ぷら、店主とスタッフが気さく、昭和の歌が流れる日も。',
      confidence: 'medium', sources: [TB, R + 'B475796560/', R + 'B507131948/', R + 'B509321019/', R + 'B512162293/', R + 'B515776851/', R + 'B519159623/', R + 'B520708525/', R + 'B526250191/', R + 'B526616958/', R + 'B529177993/'] },
    cultural_comfort: { level: 'japanese', note: 'A short Japanese set-lunch menu; an old-style izakaya upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-6-12 渡辺ビル 2F〜3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February 2025–April 2026.' },
    pin_source: `Tabelog ${TB} (35.686010, 139.782938); cross-checked: GSI 東京都中央区日本橋人形町二丁目6番12号 (go) 4m. Next door to 五十番ビル (tokyo_nanafuku_ningyocho 10 m, tokyo_tomita_ningyocho 13 m); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B512162293/', R + 'B509321019/', R + 'B515776851/'],
    price_note: 'Lunch prices from 2025 reviews; dinner prices not given.', last_checked: TODAY, items: [
      it('', '', 'Sashimi set lunch (three fish, clay-pot rice, miso soup, chawanmushi)', '¥1,050', 'Lunch', 'ask', 'no', 'October 2025.', 'sashimi_teishoku'),
      it('', '', 'Mixed fry set lunch (shrimp, white fish, chicken)', '¥1,050', 'Lunch', 'no', 'no', 'August 2025; April 2026.', 'mix_fry'),
      it('', '', 'Conger-eel tempura set lunch (daily special)', '¥1,150', 'Lunch', 'no', 'no', 'July 2025.', 'anago_ten'),
    ] }, {
    cuisine: '魚、おでん、ふぐの長く続く居酒屋 (食べログ、2025〜26年の口コミ)・平日の昼の定食は1,050〜1,150円ほどで、おこげのある土鍋ご飯 (おかわり1回)、味噌汁、小鉢、漬物、茶碗蒸し付き: 3種の刺身定食 (2025年10月、2026年1月)、海老と白身魚と鶏のミックスフライ1,050円 (2025年8月、2026年4月)、鮭の塩焼き (2026年1月)、日替わりの穴子の天ぷら1,150円 (2025年7月)・夜: 刺身の盛り合わせ、透き通ったつゆのおでん、自家製のはんぺん、あん肝、穴子と野菜の天ぷら、銀だらの焼き物 (2025年の口コミ)・日本酒と焼酎。夜は会計のあとに夏みかんの皮の甘煮や栗蒸し羊羹のような甘味 (2025年)',
    neighborhood: '日本橋人形町2-6-12 渡辺ビル 2F〜3F、レトロなビル。人形町駅から徒歩3分',
    gf_detail: '要確認。刺身がいちばん素朴な選択だが、昼の定食は揚げ物や天ぷら (ミックスフライ、穴子の天ぷら)、出汁の味噌汁と茶碗蒸しが中心で、グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、2025年の口コミには野菜の天ぷらも出てくるが、料理は魚が中心: 味噌汁とおでんの出汁、あさりの茶碗蒸し、練り物。',
    notes: '[居酒屋・人形町、土鍋ご飯の定食の長く続く魚とおでんの居酒屋] 人形町駅から数分、レトロなビルの階段を上がった2フロアの老舗の居酒屋。平日の昼は3階で1,050円ほどの定食: 3種の刺身、ミックスフライ、鮭の塩焼きなどに、おこげのある土鍋ご飯、味噌汁、漬物、それに珍しく茶碗蒸しが付く。女性客が多く、店主とスタッフは気さくで (2026年4月)、昭和の歌が流れる日も。夜は刺身の盛り合わせ、透き通ったつゆのおでん、自家製のはんぺん、あん肝、天ぷらを日本酒と、会計のあとには小さな甘味 (2025年)。平日のみ営業。',
  });
}

// ================================================================ Bar 内藤
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13165260/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '25:00']);
  put({
    id: 'tokyo_bar_naito_ningyocho', name: 'Bar 内藤 (Bar Naito)', category: 'MOM_AND_POP',
    lat: 35.686369, lng: 139.783147, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A cocktail and spirits bar; no food is described in 2026 reviews, and nothing is labelled gluten-free — ask which spirits and mixers suit.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Drinks only in 2026 reviews; some cocktails use cream or liqueurs (a Grasshopper, July 2026).',
    hours_raw: 'Tue–Sun 18:00–01:00; closed Monday (Tabelog) — though a February 2026 diner found it open at 21:00 on a Monday. Cover charge ¥880 (Tabelog). Reservations accepted (Tabelog). Cards and e-money; no QR (Tabelog). 14 seats: 7 at the counter, 7 at tables (Tabelog). Non-smoking. Basement with no mobile signal (June 2026). Opened 10 February 2014 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-7-2, コスモVビル B1F — 3–5 min from Ningyocho Stn',
    cuisine: 'Classic cocktails, seasonal fresh-fruit cocktails and spirits (2026 reviews) · no house signature: the bartender mixes to your taste (June 2026) · in 2026: gin and tonic with Beefeater, martini with Beefeater and Noilly Prat, peach cocktail on Bacardi; a Moscow mule made with fresh new ginger (July 2026); gin buck; Margarita; stirred Stinger with tequila; a Tanegashima rum at 60% (June 2026); frozen Grasshopper; Suze tonic; whiskies · examples of bills: Margarita with cover ¥2,680 (August 2026); three drinks ¥6,930 (July 2026); a martini and a fruit-vodka cocktail ¥8,580 (February 2026)',
    website: TB, gmaps: gm('Bar 内藤 人形町'), menu_url: null,
    notes: "[Bar · Ningyocho, a high-ceilinged basement cocktail bar of owner Naito] Down a stair to a basement with surprisingly high ceilings, a quiet 14-seat bar run by owner Naito, who trained at the renowned OPA in Monzen-Nakacho (July 2026 reviews). It was one of Tabelog's top 100 bars in 2022. There is no fixed signature drink: tell the bartender a spirit or a mood. Diners in 2026 praised a stirred Stinger, a Moscow mule made with fresh new ginger, peach and other seasonal fruit cocktails, and a martini of Beefeater and Noilly Prat. Opinions on the host vary. Some found the master reserved or slow to come over (February and March 2026), and one found prices creeping up, but most call it a calm, grown-up place for a nightcap. Cover ¥880; no phone signal.",
    chef_bio: { chef_name: 'Naito (内藤; surname only, per July 2026 reviews and the shop name)', roles: ['Owner-bartender ("run by owner Naito", July 2026 review)'], origin: null,
      background: 'Per July 2026 reviews: owner Naito trained at the renowned bar OPA in Monzen-Nakacho ("an authentic bar run by a former staff member of the renowned Opa Monzen Nakacho"). Opened 10 February 2014 (Tabelog). Selected for Tabelog Bar 100 in 2022.',
      philosophy: null, specialty: 'Classic and seasonal fresh-fruit cocktails made to the guest\'s taste.',
      anecdotes: [
        { text: '"It was a Moscow Mule made with new ginger, and the aroma was striking." — July 2026.', source: R + 'B435995125/' },
        { text: '"To finish, I ordered a Stinger, which was made by stirring. It was my first time having it prepared this way, and it was truly exceptional." — June 2026.', source: R + 'B529309695/' },
        { text: '"The taste is absolutely delicious, but every time I visit, the prices seem to be getting higher..." — February 2026, fifth visit, ¥8,580.', source: R + 'B497420402/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Bar 内藤、バー、日本橋人形町2-7-2 コスモVビル B1F、火〜日18:00〜翌1:00、月曜休み、チャージ880円、予約可、カード・電子マネー可、QR不可、14席 (カウンター7、テーブル7)、禁煙、2014年2月10日オープン、バー 百名店 2022。口コミ(2026年2月〜8月): Monzen-Nakacho の名店 OPA で修業した店主の内藤さん、天井の高い地下、季節の果物のカクテル、新生姜のモスコミュール、ステアのスティンガー、マティーニ、決まった名物はなく好みに合わせて作る、マスターは寡黙で接客にむらがあるという声、値段が上がったという声も、電波が入らない。',
      confidence: 'medium', sources: [TB, R + 'B435995125/', R + 'B497420402/', R + 'B523221876/', R + 'B524844083/', R + 'B529309695/', R + 'B530041130/', R + 'B531591891/', R + 'B532241203/', R + 'B532340684/', R + 'B533583006/'] },
    cultural_comfort: { level: 'japanese', note: 'An authentic bar with no fixed menu highlights; describe what you like (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-7-2 コスモVビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated February–August 2026.' },
    pin_source: `Tabelog ${TB} (35.686369, 139.783147); cross-checked: GSI 東京都中央区日本橋人形町二丁目7番2号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B533583006/'],
    price_note: 'No drink list published; cover charge from Tabelog; one priced example from August 2026.', last_checked: TODAY, items: [
      it('', '', 'Cover charge', '¥880', 'Charges', '', '', 'Tabelog.', 'cover'),
      it('', '', 'Margarita (with cover)', '¥2,680', 'Cocktails', 'ask', 'ask', 'August 2026, total including cover.', 'margarita'),
    ] }, {
    cuisine: 'クラシックなカクテル、季節の生の果物のカクテル、スピリッツ (2026年の口コミ)・決まった名物はなく、好みに合わせて作る (2026年6月)・2026年には Beefeater のジントニック、Beefeater と Noilly Prat のマティーニ、Bacardi の桃のカクテル、新生姜のモスコミュール (2026年7月)、ジンバック、マルガリータ、テキーラのステアのスティンガー、Tanegashima の60度のラム (2026年6月)、フローズンのグラスホッパー、スーズトニック、ウイスキー・会計の例: マルガリータとチャージで2,680円 (2026年8月)、3杯で6,930円 (2026年7月)、マティーニと果物のウォッカのカクテルで8,580円 (2026年2月)',
    neighborhood: '日本橋人形町2-7-2 コスモVビル B1F。人形町駅から徒歩3〜5分',
    gf_detail: '要確認。カクテルとスピリッツのバーで、2026年の口コミに食べ物は出てこず、グルテンフリーの表示もない。合う酒と割り材を確認して。',
    vegan_detail: '要確認。2026年の口コミでは飲み物だけ。クリームやリキュールを使うカクテルもある (グラスホッパー、2026年7月)。',
    notes: '[バー・人形町、店主内藤さんの天井の高い地下のカクテルバー] 階段を下りると意外なほど天井の高い地下の静かな14席のバーで、店主の内藤さんはMonzen-Nakacho の名店 OPA で修業した (2026年7月の口コミ)。食べログ バー 百名店 2022。決まった名物はなく、ベースの酒や気分を伝えて作ってもらう。2026年の客が褒めたのは、ステアで作るスティンガー、新生姜のモスコミュール、桃など季節の果物のカクテル、Beefeater と Noilly Prat のマティーニ。店主の印象は分かれ、2026年2月と3月には寡黙でなかなか注文を取りに来ないという声、値段が上がってきたという声も。それでも多くは大人の落ち着いた締めの一杯の店という。チャージ880円、電波は入らない。',
  });
}

// ================================================================ 人形町 梅田
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13003026/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'https://unagi-umeda.jp/';
  const H = day(['11:00', '15:00'], ['17:00', '21:30']);
  put({
    id: 'tokyo_ningyocho_umeda', name: '人形町 梅田 (Ningyocho Umeda)', category: 'OMNI',
    lat: 35.686038, lng: 139.780865, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The eel is finished in an aged house sauce (Tabelog menu) and the Umeda-don is seasoned with pickled plum and sauce; the white-grilled eel served with wasabi and salt (October 2026) is the plainest option. Nothing is called gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel house; even the chawanmushi uses bonito dashi (Tabelog menu).',
    hours_raw: 'Tue–Sun and holidays 11:00–15:00 (last order 14:00) and 17:00–21:30 (last order 20:30); closed Monday, or Tuesday when Monday is a holiday (Tabelog). Book ahead — September 2026 walk-ins were turned away. Umeda-don and Koume-don are eat-in only (Tabelog menu). Cards and PayPay; no e-money (Tabelog). 20 seats: 3 tables downstairs, 7 upstairs; one restroom, on the ground floor (Tabelog; September 2026). Non-smoking; children and strollers welcome (Tabelog). Reopened in February 2026 after a renewal, under the third generation (September 2026 review; Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-4-2, 梅田ビル — 1 min from Ningyocho Stn exit A5 (Hibiya Line, Toei Asakusa Line)',
    cuisine: 'Edo-style eel house (prices from the Tabelog menu, tax included, updated July 2026) · signature Umeda-don: a whole grilled eel over rice layered with pickled-plum paste and nori, a "forbidden" Edo pairing — Umeda-don gozen with liver soup, a small dish and five pickles ¥6,800; Koume-don with half an eel ¥3,800 · unaju gozen: regular ¥4,400, jō (one eel) ¥6,600, special (1.5 eels) ¥8,800 · grilled eel shirayaki or kabayaki ¥4,620; special grilled liver, about seven a day, ¥1,320; liver soup ¥880; eel chawanmushi ¥1,200; eel roll ¥2,800 · eel course of 13 items with eel hot pot ¥14,300 · domestic eel grilled over charcoal using the house "hyakute-gaeshi" turning technique; reviewers in September 2026 were served Lake Hamana eel · monthly sake; Umeda lemon sour; genmaicha highball',
    website: SITE, gmaps: gm('人形町 梅田 うなぎ'), menu_url: MENU,
    notes: "[Unagi · Ningyocho, a third-generation eel house with an eel-and-plum bowl] An eel specialist a minute from Ningyocho station, run by the third generation and reopened after a renewal in February 2026. Its claim is the Umeda-don: a whole charcoal-grilled eel over rice spread with pickled plum and nori, a pairing old Edo superstition warned against. The shop says it has served this since the first generation. Most 2026 diners loved how the plum's tartness cut the rich eel. One September diner found the plum and sauce clashed but rated the Lake Hamana eel and the liver soup among the best of the year. Plain unaju, white-grilled eel and an eel course with hot pot are there too. Seats fill: book, especially at lunch. Open Sundays; closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Third-generation owner (unnamed; Tabelog; September 2026 review)'], origin: null,
      background: 'Tabelog\'s shop text: a long-loved Edo-style eel specialist where the third generation continues techniques passed down from the first; the Umeda-don of eel and pickled plum has been served "since the days of our first generation"; domestic eel chosen daily from the best regions; grilled over charcoal above 1,300 °C with the "hyakute-gaeshi" technique; aged sauce; renewed interior. A September 2026 review says the shop reopened in February 2026 under the third generation. Website unagi-umeda.jp (Tabelog).',
      philosophy: 'An ancient yet contemporary flavour — the eel-and-plum pairing stylish Edo people enjoyed (Tabelog menu).', specialty: 'Umeda-don (eel and pickled plum); liver soup.',
      anecdotes: [
        { text: '"Between the rice and the eel, there was a thin layer of plum paste that balanced the richness of the eel with a refreshing acidity." — September 2026, Koume-don.', source: R + 'B535183025/' },
        { text: '"I found the flavors to be simply \'sour and salty,\' which clashed significantly with the sweet and savory sauce of the grilled eel." — September 2026, Umeda-don.', source: R + 'B535610705/' },
        { text: '"This is a rare eel restaurant that is open on Sundays." — October 2026, Umeda-don gozen ¥6,800.', source: R + 'B536773633/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 人形町 梅田、うなぎ、日本料理、日本橋人形町3-4-2 梅田ビル、人形町駅A5出口から徒歩1分、火〜日・祝11:00〜15:00 (L.O.14:00)、17:00〜21:30 (L.O.20:30)、月曜休み (祝日は営業し翌火曜休み)、カード・PayPay可、電子マネー不可、20席 (1階3卓、2階7卓)、禁煙、子ども可、ホームページ unagi-umeda.jp、初代から三代目へ受け継ぐ江戸の技、うなぎと梅干しの「Umeda-don」、毎月の日本酒。メニュー (2026年7月): 特製 Umeda-don 御膳6,800円、Koume-don 3,800円、うな重御膳4,400円・6,600円・8,800円、白焼き・蒲焼き4,620円、肝焼き1,320円、肝吸い880円、うなぎのコース14,300円。口コミ(2026年4月〜10月): 2026年2月に三代目でリニューアル、梅とうなぎがよく合うという声が多い、合わないという声も、Hamana 湖の鰻、肝吸いが絶品、予約がおすすめ、日曜も営業。',
      confidence: 'medium', sources: [TB, MENU, SITE, R + 'B525746485/', R + 'B535183025/', R + 'B535610705/', R + 'B536273088/', R + 'B536309921/', R + 'B536310274/', R + 'B536757748/', R + 'B536769175/', R + 'B536773633/', R + 'B537015616/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu with photos (Tabelog); set gozen make ordering simple; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-4-2 梅田ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a menu updated July 2026; reopened February 2026; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686038, 139.780865); cross-checked: GSI 東京都中央区日本橋人形町三丁目4番2号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, TB],
    price_note: 'Prices from the Tabelog menu (tax included; updated 28 July 2026); the Umeda-don gozen was ¥6,800 in October 2026.', last_checked: TODAY, items: [
      it('', '', 'Special Umeda-don gozen: whole eel and pickled plum over rice, liver soup, small dish, pickles', '¥6,800', 'Umeda-don', 'ask', 'no', 'Tabelog menu; eat-in only.', 'umeda_don'),
      it('', '', 'Koume-don: half eel with pickled plum, liver soup, pickles', '¥3,800', 'Umeda-don', 'ask', 'no', 'Tabelog menu; September 2026.', 'koume_don'),
      it('', '', 'Unaju gozen, regular', '¥4,400', 'Unaju', 'ask', 'no', 'Tabelog menu.', 'unaju_nami'),
      it('', '', 'Special unaju gozen, 1.5 eels', '¥8,800', 'Unaju', 'ask', 'no', 'Tabelog menu.', 'unaju_toku'),
      it('', '', 'White-grilled eel (shirayaki)', '¥4,620', 'Grilled', 'ask', 'no', 'Tabelog menu; served with wasabi and salt (October 2026).', 'shirayaki'),
      it('', '', 'Liver soup', '¥880', 'Sides', 'ask', 'no', 'Tabelog menu.', 'kimosui'),
      it('', '', 'Eel course, 13 items, with eel hot pot', '¥14,300', 'Courses', 'ask', 'no', 'Tabelog set menu.', 'course'),
    ] }, {
    cuisine: '江戸風のうなぎ屋 (値段は食べログのメニュー、税込み、2026年7月更新)・名物の Umeda-don: ご飯に梅干しのペーストと海苔、その上に鰻一尾。江戸の「食い合わせ」の組み合わせ。肝吸い、小鉢、香の物5種の Umeda-don 御膳6,800円、鰻半尾の Koume-don 3,800円・うな重御膳: 並4,400円、上 (一尾) 6,600円、特 (一尾半) 8,800円・白焼きか蒲焼き4,620円、1日7食ほどの特製肝焼き1,320円、肝吸い880円、鰻の茶碗蒸し1,200円、う巻き2,800円・鰻鍋の付く13品のうなぎのコース14,300円・国産の鰻を店に伝わる「Hyakute-gaeshi」で炭火で焼く。2026年9月には Hamana 湖の鰻・毎月の日本酒、Umeda のレモンサワー、玄米茶ハイボール',
    neighborhood: '日本橋人形町3-4-2 梅田ビル。人形町駅A5出口から徒歩1分 (日比谷線、都営浅草線)',
    gf_detail: '要確認。鰻は熟成させた秘伝のたれで仕上げ (食べログのメニュー)、Umeda-don は梅干しとたれで味付け。わさびと塩の白焼き (2026年10月) がいちばん素朴。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: うなぎ屋で、茶碗蒸しにも鰹の出汁 (食べログのメニュー)。',
    notes: '[うなぎ・人形町、うなぎと梅干しの丼の三代目のうなぎ屋] 人形町駅から1分のうなぎ専門店で、三代目が継ぎ、2026年2月にリニューアルして再開した。看板は Umeda-don で、梅干しと海苔を敷いたご飯に炭火で焼いた鰻を一尾、江戸の迷信で食い合わせとされた組み合わせで、店によれば初代から出している。2026年の多くの客は梅の酸味が鰻の脂を切ると喜ぶが、9月には梅とたれが合わないとしつつ、Hamana 湖の鰻と肝吸いは今年いちばんと書いた人も。普通のうな重、白焼き、鰻鍋のコースもある。席は埋まるので、特に昼は予約を。日曜も営業、月曜休み。',
  });
}

// ================================================================ ボラチタ
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13129674/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['11:30', '14:00'], ['18:00', '21:00']); const SAT = day(['18:00', '21:00']);
  put({
    id: 'tokyo_voracita_ningyocho', name: 'ボラチタ (Voracita)', category: 'OMNI',
    lat: 35.686805, lng: 139.780954, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pasta, focaccia and breaded cutlets are central; the carpaccio, marinated octopus, salads and veal tagliata may be simpler, but nothing is called gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Garlic-and-olive-oil pastas and salads are on the menu, but the lunch salad has boiled egg and most pastas and dishes use seafood, meat or cheese.',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:30) and 18:00–21:00; Sat 18:00–21:00; closed Sundays, holidays and the third Saturday of the month (Tabelog). Service charge 10% and coperto ¥330 per person (Tabelog). Whole-restaurant parties for 12 or more (14 on Fridays); all-you-can-drink ¥1,700 for an hour, +¥850 per 30 minutes (Tabelog). Cards and PayPay; no e-money (Tabelog). 20 seats; non-smoking (Tabelog). Run by two people including the chef (April 2026). Opened 1 August 2011 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-5-8, 日本橋センチュリー21 1F — 2 min from Ningyocho Stn, 7 min from Suitengumae Stn',
    cuisine: 'Trattoria-style Italian with generous portions (2025–26 reviews) · weekday lunch ¥1,100: a choice of pasta (130 g or 150 g at no extra cost) with a large salad and focaccia — clam aglio e olio, sardine, olive and caper tomato sauce, pork and green-pea tomato sauce (January–October 2026) · dinner à la carte: sea bream or fish carpaccio, prosciutto, octopus marinated with orange, fried mehikari, trippa, veal tagliata, Milanese cutlet, squid-ink pasta, Bolognese, penne with prosciutto and mushrooms, risotto (2025–26 reviews); small-shrimp and seaweed spaghetti (Tabelog) · a solo-diner set of snacks and wine (December 2025) · Italian wines; all-you-can-drink of beer and wine ¥1,700 an hour (Tabelog; June 2026)',
    website: TB, gmaps: gm('ボラチタ 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian · Ningyocho, a hideaway trattoria with a ¥1,100 pasta lunch] A 20-seat Italian two minutes from Ningyocho station, run since 2011 by the chef and one other (April 2026). Office workers come for the weekday lunch: ¥1,100 buys a pasta of your choice (a larger portion is free), a big salad with boiled egg, and focaccia; the clam aglio e olio is the standing order of more than one regular. Evenings are relaxed and good value, with octopus marinated with orange, fried mehikari, a Milanese cutlet, squid-ink pasta and Italian wines. An hour of all-you-can-drink beer and wine is ¥1,700, and the room can be booked whole for parties of 12 or more. Service can stretch at busy times. Closed Sundays and the third Saturday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; the restaurant "seems to be run by two people, including the chef", April 2026 review)'], origin: null,
      background: 'Opened 1 August 2011 (Tabelog). Tabelog\'s shop text: "Adult\'s hideaway Italian"; authentic Italian with outstanding value; banquets welcome. A December 2025 regular describes year-end parties here with all-you-can-drink and staff who handed out film memorabilia.',
      philosophy: null, specialty: 'Pasta lunch with salad and focaccia; generous à la carte for sharing.',
      anecdotes: [
        { text: '"The lunch for JPY 1100 offers a choice of five types of pasta, with free extra noodles. The salad portion is generous." — April 2026.', source: R + 'B525816125/' },
        { text: '"The marinated octopus was lightly dressed with vinegar, almost like a carpaccio!" — June 2026, dinner with all-you-can-drink.', source: R + 'B529324488/' },
        { text: '"When it comes to pasta, I always come here." — March 2026, clam aglio e olio lunch.', source: R + 'B525894868/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ボラチタ、イタリアン、パスタ、ワインバー、日本橋人形町3-5-8 日本橋センチュリー21 1F、人形町駅から徒歩2分、月〜金11:30〜14:00、18:00〜21:00、土18:00〜21:00、日祝と第3土曜休み、サービス料10%、コペルト330円、カード・PayPay可、20席、禁煙、2011年8月1日オープン、12名以上で貸切 (金曜は14名以上)、1時間飲み放題1,700円、30分延長850円。口コミ(2025年12月〜2026年10月、写真の見出しに「イワシとオリーブ・ケッパーのトマトソース」「水蛸のマリネ」): 平日のランチはパスタ、サラダ、フォカッチャで1,100円、大盛り無料、あさりのアーリオオーリオ、量が多く値段が手ごろ、夜は真鯛のカルパッチョ、水蛸のマリネ、めひかりのフライ、ミラノ風カツレツ、イカ墨のパスタ、料理人を含め2人で切り盛り。',
      confidence: 'medium', sources: [TB, R + 'B295549283/', R + 'B520095523/', R + 'B521020340/', R + 'B525723177/', R + 'B525816125/', R + 'B525894868/', R + 'B526085851/', R + 'B528209606/', R + 'B529324488/', R + 'B537054181/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A short pasta list at lunch; Italian dishes by name at night.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-5-8 日本橋センチュリー21 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated December 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686805, 139.780954); cross-checked: GSI 東京都中央区日本橋人形町三丁目5番8号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B525816125/', R + 'B537054181/', TB],
    price_note: 'Lunch from January–October 2026 reviews; drinks plan from Tabelog; 10% service and ¥330 coperto at dinner (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Weekday pasta lunch with salad and focaccia (free large portion)', '¥1,100', 'Lunch', 'no', 'ask', 'January–October 2026.', 'pasta_lunch'),
      it('', '', 'All-you-can-drink (beer and wine), 1 hour', '¥1,700', 'Drinks', '', '', 'Tabelog; +¥850 per 30 minutes.', 'nomihodai'),
    ] }, {
    cuisine: '量の多いトラットリア風のイタリアン (2025〜26年の口コミ)・平日のランチ1,100円: 好きなパスタ (130gか150g、追加料金なし) に大盛りのサラダとフォカッチャ。あさりのアーリオオーリオ、イワシとオリーブ・ケッパーのトマトソース、豚ひき肉とグリーンピースのトマトソース (2026年1月〜10月)・夜のアラカルト: 真鯛や鮮魚のカルパッチョ、生ハム、オレンジでマリネした水蛸、めひかりのフライ、トリッパ、仔牛のタリアータ、ミラノ風カツレツ、イカ墨のパスタ、ボロネーゼ、生ハムときのこのペンネ、リゾット (2025〜26年の口コミ)。小海老と生海苔のスパゲッティ (食べログ)・一人用のつまみとワインのセット (2025年12月)・イタリアワイン、ビールとワインの1時間飲み放題1,700円 (食べログ、2026年6月)',
    neighborhood: '日本橋人形町3-5-8 日本橋センチュリー21 1F。人形町駅から徒歩2分、水天宮前駅から徒歩7分',
    gf_detail: '要確認。パスタ、フォカッチャ、カツレツが中心。カルパッチョ、水蛸のマリネ、サラダ、仔牛のタリアータは比較的シンプルかもしれないが、グルテンフリーの説明はない。',
    vegan_detail: '要確認。にんにくとオリーブオイルのパスタやサラダはあるが、昼のサラダには茹で卵が入り、パスタや料理の多くは魚介、肉、チーズを使う。',
    notes: '[イタリアン・人形町、1,100円のパスタランチの隠れ家トラットリア] 人形町駅から2分、2011年から料理人ともう一人で切り盛りする (2026年4月) 20席のイタリアン。会社員は平日のランチに来て、1,100円で好きなパスタ (大盛り無料)、茹で卵ののった大きなサラダ、フォカッチャ。あさりのアーリオオーリオを決まって頼む人も。夜は気軽でお手ごろで、オレンジでマリネした水蛸、めひかりのフライ、ミラノ風カツレツ、イカ墨のパスタをイタリアワインと。ビールとワインの飲み放題は1時間1,700円、12名以上なら貸切も。混む時間は手が回らないことも。日曜と第3土曜休み。',
  });
}

save();
