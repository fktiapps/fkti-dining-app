// Kyoto priority (kyoto-missed), worker osw13, batch 50 — lane: Tabelog id mod 6 = 0.
// Core: LOB COFFEE HOUSE, 高台寺 丹虎. Notable: 佳辰, らく山.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-50');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ LOB COFFEE HOUSE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042616/'; const R = TB + 'dtlrvwlst/';
  const MT = day(['09:00', '20:30']); const FS = day(['12:00', '20:30']);
  put({
    id: 'kyoto_lob_coffee_house', name: 'LOB COFFEE HOUSE', category: 'OMNI',
    lat: 35.010890, lng: 135.773713, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the draws are fruit sandwiches and egg sandwiches on bread, toast and cream puffs (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sandwiches filled with whipped cream or egg, butter toast and cream puffs (2026 reviews); coffee and decaf are available.',
    hours_raw: 'Tabelog: Mon–Tue 9:00–20:30; Fri–Sun 12:00–20:30; closed Wednesday and Thursday; hours may change. A July 2026 diner found the door sign saying 1 pm, but the staff said it opens at noon and the sign was out of date. No reservations; waiting outside in the residential alley is discouraged (September 2026). 7 seats: 3 at the counter and two tables for two, with more seats upstairs in an attic room (2026 reviews). Non-smoking; take-out; cards, e-money and QR (Tabelog). No service charge listed on Tabelog. Opened 22 February 2025 (Tabelog).',
    hours: { 0: MT, 1: MT, 4: FS, 5: FS, 6: FS }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A residential alley just north of Keihan Sanjo Stn — 180 m from the station',
    cuisine: 'A tiny, dim coffee house of fruit sandwiches and hand-brewed coffee · seasonal fruit sandwich ¥1,450–1,650 — Yamagata peach with Earl Grey cream, fig with caramel cream, Nagano Purple grapes and pear, chestnut in October (2026 reviews) · egg sandwich, butter toast, fig toast, rum cream puff (2026 reviews) · house blend, iced coffee ¥850, café au lait, decaf; cold brew to take home (2026 reviews) · bread from the bakery "Kurs" (September 2026)',
    website: null, gmaps: gm('LOB COFFEE HOUSE 大菊町'), menu_url: null,
    notes: '[Coffee house · Sanjo-Keihan back alley, fruit sandos] A seven-seat coffee house hidden in a residential alley behind Keihan Sanjo, lit by candles and jazz records, with an attic room upstairs. People come for the seasonal fruit sandwich — Yamagata peach with Earl Grey cream, figs with caramel, grapes and pear — and a chocolatey medium-roast blend; decaf too. A September 2026 diner praised the chic female staff. No queuing outside — neighbours live opposite. Closed Wednesday and Thursday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 22 February 2025 (Tabelog). Reviewers in 2026 describe a small, dimly lit wooden room in a residential alley north of Keihan Sanjo Station, jazz records, candles on the tables, an attic room upstairs, gentle staff, and seasonal fruit sandwiches on bread from a bakery called Kurs.',
      philosophy: null,
      specialty: 'Seasonal fruit sandwich; house blend.',
      anecdotes: [
        { text: 'A September 2026 regular thought the bread was dry once, then learned it came from a different bakery for that period: "When it’s from Kurs, the bread makes all the difference!"', source: R + 'B520522184/' },
        { text: 'The staff warned a July 2026 diner that the peaches were big and might be hard to eat — "honestly, having something that’s both delicious and generous in size is just wonderful."', source: R + 'B531107704/' },
        { text: '"The stylish lighting and the soothing jazz created a wonderful atmosphere, complemented by the chic female staff." — September 2026.', source: R + 'B535170920/' },
      ],
      japanese_sources_summary: '食べログ: LOB COFFEE HOUSE、喫茶店、左京区大菊町134-8、三条京阪駅から180m、月火 9:00〜20:30、金土日 12:00〜20:30、水木休み、予約不可、7席 (カウンター3、2名テーブル2)、禁煙、テイクアウト、カード・電子マネー・QR可、2025年2月22日オープン。口コミ (2026年7月〜10月、英語): 季節のフルーツサンド1,450〜1,650円 (山形の桃とアールグレイのクリーム、無花果とキャラメルのクリーム、ナガノパープルと梨、10月は栗)、たまごサンド、バタートースト、無花果のトースト、ラム酒のシュークリーム、ブレンド、アイスコーヒー850円、カフェオレ、デカフェ、持ち帰りの水出しコーヒー、パンは Kurs のもの、薄暗くジャズのレコードとキャンドル、屋根裏のような2階席、外で待つのは控えて、扉の表示は13時だが実際は12時開店、おしゃれな女性スタッフ。',
      confidence: 'medium', sources: [TB, R + 'B520522184/', R + 'B531107704/', R + 'B534964069/', R + 'B535170920/', R + 'B535398841/', R + 'B535405358/', R + 'B535790470/', R + 'B535893830/', R + 'B536406192/', R + 'B538259027/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; tiny and quiet; no waiting outside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区大菊町134-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010890, 135.773713); cross-checked: GSI 京都府京都市左京区大菊町134番地 (lot) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534964069/', R + 'B538259027/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal fruit sandwich', '¥1,450–1,650', 'Food', 'no', 'no', 'August and October 2026.', 'fruit_sando'),
      it('', '', 'Iced coffee', '¥850', 'Drink', 'ask', 'ask', 'August 2026.', 'coffee'),
    ] }, {
    cuisine: 'フルーツサンドとハンドドリップのコーヒーの小さく薄暗い喫茶・季節のフルーツサンド1,450〜1,650円、山形の桃とアールグレイのクリーム、無花果とキャラメルのクリーム、ナガノパープルと梨、10月は栗 (2026年の口コミ)・たまごサンド、バタートースト、無花果のトースト、ラム酒のシュークリーム (2026年の口コミ)・ブレンド、アイスコーヒー850円、カフェオレ、デカフェ、持ち帰りの水出しコーヒー (2026年の口コミ)・パンは Kurs というベーカリーのもの (2026年9月)',
    neighborhood: '京阪三条駅のすぐ北の住宅街の路地。駅から180m',
    gf_detail: 'グルテンフリーではない: 名物はパンのフルーツサンドとたまごサンド、トースト、シュークリーム (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ホイップクリームや卵のサンド、バタートースト、シュークリーム (2026年の口コミ)。コーヒーとデカフェはある。',
    notes: '[喫茶・三条京阪の路地、フルーツサンド] 京阪三条の裏の住宅街の路地に隠れた7席の喫茶。キャンドルとジャズのレコードの薄暗い店で、2階には屋根裏のような席。目当ては山形の桃とアールグレイのクリーム、無花果とキャラメル、ぶどうと梨などの季節のフルーツサンドと、チョコのような風味の中煎りのブレンド。デカフェも。2026年9月にはおしゃれな女性スタッフという声。向かいは民家なので外で待つのは控えて。水木休み。',
  });
}

// ================================================================ 高台寺 丹虎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26040960/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kodaiji-tantora.com/';
  const D = day(['17:00', '22:30']); const LD = day(['12:00', '15:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_kodaiji_tantora', name: '高台寺 丹虎 (Kodaiji Tantora)', category: 'OMNI',
    lat: 35.001352, lng: 135.779230, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura kaiseki of wheat-batter tempura and a tendon to finish (official site).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of shrimp, fish, crab, wagyu and soft-shell turtle tempura, with dashi soups (official site).',
    hours_raw: 'Official site: dinner 17:00–22:30 (last entry 19:00); lunch Saturdays, Sundays and holidays 12:00–15:00 (last entry 13:00); closed Tuesday and Wednesday; New Year special opening 30 December–3 January; open daily with lunch 8–16 August 2026. Tabelog lists dinner on Mon, Thu, Fri and the days before and after holidays. Courses only. Service charge 10% (official site; Tabelog, Japanese original 「サービス料10%」). Children only if they eat the full adult course — no children’s menu, half portions, baby food or high chairs; others are refused on the day (Tabelog). 10 counter seats of zelkova; hinoki lockers for each guest (official site; July 2026); non-smoking; English menu; cards, no e-money or QR (Tabelog). Opened 12 January 2024 (Tabelog).',
    hours: { 0: D, 3: D, 4: D, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashiyama, two minutes from Kodaiji Temple — 5 min walk from the Higashiyama-Yasui bus stop',
    cuisine: 'Tempura kaiseki of ingredients named by origin, fried piece by piece at the counter (official site) · dinner courses ¥19,800 (Higashiyama) and ¥24,200 (Yasaka); pre-booked ¥36,300 (Gion) and ¥44,000 (Tantora); weekend lunches ¥12,100 (Nene), ¥15,400 (Gion), ¥22,000 — plus 10% service (official site) · earlier: lunch Yasaka ¥9,680 (January 2026), July Gion Matsuri course ¥16,830 (July 2026) · seen: Kumamoto shrimp, aged Awaji sawara, karasumi daikon, Higo red eggplant, Fujikuro ginkgo, wagyu fillet in shiso, soft-shell turtle fry, Beni Haruka sweet potato with Yamazaki whisky, sea-urchin tempura at market price, mackerel sushi, anago tendon, basil sorbet (official site; 2026 reviews) · crab kaiseki in season (official site)',
    website: SITE, gmaps: gm('高台寺 丹虎 鷲尾町'), menu_url: SITE + 'tenpura/',
    notes: '[Tempura kaiseki · Kodaiji, a ten-seat zelkova counter] Two minutes from Kodaiji Temple, a ten-seat counter where each ingredient is introduced by its origin and fried in front of you: Kumamoto shrimp, aged sawara, Fujikuro ginkgo, and a sweet potato finished with Yamazaki whisky, ending with an anago tendon. Dinner from ¥19,800, weekend lunch from ¥12,100, plus 10%. One diner warned the sea-urchin tempura is market-priced. No young children. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['A chef with long training (official site); not named. Run by G LION (official site links to glion.co.jp)'], origin: null,
      background: 'Per the official site: a tempura kaiseki house two minutes from Kodaiji, the temple of Nene, closing a visit with food; cooked by a chef after long training, looking again at the essence of Kyoto without being bound by form; hinoki lockers for each guest; private hire plans. The site’s recruitment and footer links go to G LION. Opened 12 January 2024 (Tabelog). A January 2026 regular on a fifth visit heard the chef had changed but found the taste unchanged.',
      philosophy: 'Official site: 「形式にとらわれすぎることなく、京都の本質を見つめ直した、至極の天ぷら会席」 — tempura kaiseki that looks again at Kyoto’s essence without being bound by form.',
      specialty: 'Tempura kaiseki; whisky-finished sweet potato.',
      anecdotes: [
        { text: 'A fifth-time regular heard in January 2026 that the chef had changed, but found the food as good as ever.', source: R + 'B493294023/' },
        { text: '"Since the sea urchin tempura is priced at market value, it might be wise to prepare for the cost before ordering." — March 2026.', source: R + 'B532367240/' },
        { text: 'A July 2026 diner says only four reservations are taken a day.', source: R + 'B516469323/' },
      ],
      japanese_sources_summary: '公式サイト (kodaiji-tantora.com): 高台寺 丹虎 (Kodaiji Tantora)、ねねの寺の高台寺から徒歩二分、参拝後の余韻を料理で結ぶ天ぷら会席、長年の修業を経た料理人、形式にとらわれすぎることなく京都の本質を見つめ直した至極の天ぷら会席、夕食: 天ぷら会席 東山19,800円、おまかせ天ぷら会席 八坂24,200円、事前予約限定 祇園36,300円、特別天ぷら会席 丹虎44,000円、土日祝の昼: ねね12,100円、祇園15,400円、丹虎の特別天ぷらランチ22,000円、別途サービス料10%、熊本の才巻海老、京都の唐墨大根、すっぽんフライ、黒毛和牛ヒレ大葉巻、藤九郎銀杏、丹波篠山の無農薬こしひかり、天丼、蟹会席、一人ずつの檜のロッカー、貸切プラン、昼12:00〜15:00 (13時最終入店) 土日祝のみ、夜17:00〜22:30 (19時最終入店)、火曜・水曜休み、年末年始の特別営業、7月の祇園祭コース、採用は G LION。食べログ: 天ぷら・日本料理、東山区高台寺北門前通鷲尾町503-6、サービス料10%、子供は大人と同じコースを食べられる場合のみ (子供メニュー・ハーフ・離乳食・ハイチェアなし、条件に合わない場合は当日入店不可)、カウンター10席、禁煙、英語メニュー、カード可、2024年1月12日オープン。口コミ (2025年5月〜2026年7月、英語): 料理人が替わったが味は変わらない、昼の八坂9,680円 (2026年1月)、祇園祭コース16,830円、熟成の淡路の鰆、肥後の赤茄子、紅はるかと山崎ウイスキー、雲丹の天ぷらは時価、鯖寿司、穴子の天丼、バジルのソルベ、欅のカウンター、1日4組。',
      confidence: 'medium', sources: [TB, SITE, R + 'B493294023/', R + 'B516469323/', R + 'B521437954/', R + 'B521714555/', R + 'B524266345/', R + 'B528025725/', R + 'B531315894/', R + 'B532196355/', R + 'B532367240/', R + 'B532796384/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); each ingredient explained at the counter; online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区高台寺北門前通鷲尾町503-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.001352, 135.779230); cross-checked: GSI 京都府京都市東山区鷲尾町503番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Prices from the official site, tax included; 10% service extra.', last_checked: TODAY, items: [
      it('天ぷら会席｜東山', '', 'Tempura kaiseki "Higashiyama" (dinner)', '¥19,800', 'Dinner', 'no', 'no', '+10% service.', 'tempura_course'),
      it('おまかせ天ぷら会席｜八坂', '', 'Omakase tempura kaiseki "Yasaka" (dinner)', '¥24,200', 'Dinner', 'no', 'no', '+10% service.', 'tempura_course'),
      it('ねね｜京野菜の天ぷらランチ', '', 'Lunch "Nene": Kyoto-vegetable tempura (weekends and holidays)', '¥12,100', 'Lunch', 'no', 'no', '+10% service.', 'tempura_course'),
      it('祇園｜おまかせ天ぷらコース', '', 'Lunch "Gion" omakase tempura', '¥15,400', 'Lunch', 'no', 'no', '+10% service.', 'tempura_course'),
    ] }, {
    cuisine: '産地を名乗る食材を一品ずつ揚げる天ぷら会席 (公式サイト)・夜は東山19,800円と八坂24,200円、事前予約の祇園36,300円と丹虎44,000円、土日祝の昼はねね12,100円、祇園15,400円、22,000円、別途サービス料10% (公式サイト)・以前は昼の八坂9,680円 (2026年1月)、7月の祇園祭コース16,830円 (2026年7月)・これまでの品: 熊本の才巻海老、熟成した淡路の鰆、唐墨大根、肥後の赤茄子、藤九郎銀杏、黒毛和牛ヒレの大葉巻き、すっぽんフライ、山崎ウイスキーをかけた紅はるか、時価の雲丹の天ぷら、鯖寿司、穴子の天丼、バジルのソルベ (公式サイト、2026年の口コミ)・季節の蟹会席 (公式サイト)',
    neighborhood: '東山、高台寺から徒歩2分。東山安井のバス停から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦の衣の天ぷらと〆の天丼の天ぷら会席 (公式サイト)。',
    vegan_detail: 'ヴィーガン不可: 海老、魚、蟹、和牛、すっぽんの天ぷらとだしの椀物のコース (公式サイト)。',
    notes: '[天ぷら会席・高台寺、欅のカウンター10席] 高台寺から2分、カウンター10席で産地を名乗る食材を目の前で一品ずつ揚げる。熊本の才巻海老、熟成の鰆、藤九郎銀杏、山崎ウイスキーで仕上げる紅はるか、〆は穴子の天丼。夜は19,800円から、土日の昼は12,100円から、サービス料10%別。雲丹の天ぷらは時価という声も。小さな子供は不可。火水休み。',
  });
}

// ================================================================ 佳辰
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26011074/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyouchisou-kashin.com/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_kashin_hachijo', name: '佳辰 (Kashin)', category: 'OMNI',
    lat: 34.982870, lng: 135.760556, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a dashi-based kaiseki of soups, simmered dishes, grills and sashimi (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki with clear dashi soups, sashimi, hamo and grilled pork (official site; 2025–2026 reviews).',
    hours_raw: 'Official site: Mon–Sat 18:00–22:00 (L.O. 21:30); closed Sundays and holidays. Tabelog lists Wed–Sat only; hours may change. Courses booked ahead by phone or through the official booking page; 13 or more by phone (official site; 2026 reviews). 35 seats: a counter of 6, four private rooms and tables; shoes off (official site). Smoking: the official site says there are smoking and non-smoking seats; Tabelog says non-smoking with a smoking area in the garden. Cards, e-money and QR (official site). No service charge listed on Tabelog.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'South of Kyoto Station, behind Avanti — 296 m from the station',
    cuisine: 'Family-run Kyoto kaiseki a few minutes from Kyoto Station · courses from ¥6,000–6,600 rising in ¥1,000 steps; ¥8,800 a popular level (2026 reviews) · clear dashi soups, simmered dishes, grills and sashimi with seasonal specials (official site) · seen: hamo appetizer, house Kyoto tofu with fried tofu in white-miso soup, grilled domestic pork (2026 reviews) · a long sake list, including Juyondai one night (2025–2026 reviews)',
    website: SITE, gmaps: gm('佳辰 東九条西山王町'), menu_url: null,
    notes: '[Kaiseki · south of Kyoto Station, a family house] A renovated house behind Avanti, south of Kyoto Station, where a family — the elderly owner couple, their daughter and her husband — cook and serve seasonal kaiseki in private rooms or at a small counter. Courses start around ¥6,000 in ¥1,000 steps, with a long sake list; the daughter, also a chef, speaks fluent English. Good for business dinners; one diner found three hours long. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Family-run: the owner couple, their daughter (also a chef) and her husband (December 2025 review); not named'], origin: null,
      background: 'Per the official site: a hidden kaiseki house near Kyoto Station where guests take their shoes off, keeping Kyoto food culture with a modern touch, loved by local gourmets for many years. A December 2025 regular describes it as run by a husband and wife, both elderly yet still cooking and serving, with their daughter, a chef who speaks fluent English, and her husband; an October 2026 diner saw the father source ingredients and the daughter cook. A July 2026 diner notes a recent renovation.',
      philosophy: 'Official site: listening to the voice of each ingredient, minding heat, seasoning and the space on the plate; kaiseki built to sit well with sake.',
      specialty: 'Seasonal kaiseki; sake pairing.',
      anecdotes: [
        { text: '"Both the husband and wife are quite elderly, yet they are still actively involved in cooking and serving guests. They are truly inspiring." — December 2025.', source: R + 'B300627151/' },
        { text: 'A July 2025 solo diner found the food excellent but the meal long — about three hours — and grew sleepy.', source: R + 'B488066659/' },
        { text: 'Booking by phone in April 2026, a diner was asked whether the meal was for a business meeting.', source: R + 'B525488253/' },
      ],
      japanese_sources_summary: '公式サイト (kyouchisou-kashin.com、多言語): 佳辰、繊細と優雅が香る京都駅至近の隠れ家懐石、靴を脱いで上がる、店主の真心、美味しい日本酒、旬を映す京料理、澄んだ出汁の椀物、煮物、焼き物、刺身、季節の特別メニュー、京都の伝統と現代の感性、長年地元の食通に愛される、素材の声に耳を澄まし火加減や塩梅や盛りの余白に心を配る、日本酒との調和、南区東九条西山王町12、月〜土 18:00〜22:00 (L.O. 21:30)、日曜・祝日休み、分煙 (喫煙席・禁煙席)、カード・電子マネー・QR可、13名以上は電話予約。食べログ: 日本料理、水〜土 18:00〜22:00、35席 (カウンター6、個室4、テーブル)、禁煙 (庭に喫煙所)、公式サイトから予約。口コミ (2024年7月〜2026年10月、英語): 家族経営 (年配の夫婦と娘夫婦)、娘も料理人で英語が流暢、コースは6,000〜6,600円から1,000円刻み、8,800円の懐石、鱧の前菜、自家製の京豆腐とお揚げの白味噌汁、国産豚の焼き物、日本酒が豊富 (十四代も)、接待向き、3時間ほどかかる、改装、アバンティの南の路地。',
      confidence: 'medium', sources: [TB, SITE, R + 'B300627151/', R + 'B488066659/', R + 'B488776289/', R + 'B50244409/', R + 'B516642008/', R + 'B518269062/', R + 'B525488253/', R + 'B525862347/', R + 'B532287422/', R + 'B537189492/'] },
    cultural_comfort: { level: 'english', note: 'The daughter, a chef, speaks fluent English (December 2025); multilingual website; courses booked ahead.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市南区東九条西山王町12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.982870, 135.760556); cross-checked: GSI 京都府京都市南区東九条西山王町12番地 (lot) 25m; kyoto_sumizumido_hachijo (12-7) 10 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B488776289/', R + 'B532287422/', R + 'B537189492/'],
    price_note: 'Course prices from 2026 reviews; courses rise in ¥1,000 steps.', last_checked: TODAY, items: [
      it('', '', 'Kaiseki course, from', '¥6,000–6,600', 'Course', 'ask', 'no', 'August and July 2026.', 'course'),
      it('', '', 'Kaiseki course', '¥8,800', 'Course', 'ask', 'no', 'October 2026.', 'course'),
    ] }, {
    cuisine: '京都駅から数分の家族で営む京懐石・コースは6,000〜6,600円から1,000円刻み、8,800円が人気 (2026年の口コミ)・澄んだ出汁の椀物、煮物、焼き物、刺身と季節の特別メニュー (公式サイト)・これまでの料理: 鱧の前菜、自家製の京豆腐とお揚げの白味噌汁、国産豚の焼き物 (2026年の口コミ)・豊富な日本酒、十四代のある夜も (2025〜2026年の口コミ)',
    neighborhood: '京都駅の南、アバンティの裏。駅から296m',
    gf_detail: '予約時に要確認。グルテンの情報なし。椀物、煮物、焼き物、刺身のだしの懐石 (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 澄んだ出汁の椀物、刺身、鱧、豚の焼き物のある懐石 (公式サイト、2025〜2026年の口コミ)。',
    notes: '[懐石・京都駅南、家族の店] 京都駅の南、アバンティ裏の改装した一軒家。年配の夫婦と娘夫婦の家族で季節の懐石を作り、個室や小さなカウンターで出す。コースは6,000円ほどから1,000円刻みで、日本酒が豊富。料理人でもある娘は英語が流暢。接待にも向く。3時間かかって長かったという声も。日曜休み。',
  });
}

// ================================================================ らく山
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26015952/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'kyoto_rakuzan_gion', name: 'らく山 (Raku Zan)', category: 'OMNI',
    lat: 35.004595, lng: 135.773898, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information; a dashi-based seasonal course with fish somen and assorted platters (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish course — sweetfish, conger eel, octopus, fugu milt, funazushi — on dashi (2022–2026 reviews).',
    hours_raw: 'Tabelog: daily 18:00–23:00 (L.O. 20:00); irregular closures. Reservation only; sweetfish may not be available on a given day (August 2026); a summer meal can take about four hours (August 2026). 17 seats: a counter of 9, and an upstairs private room for 8 that is not in use at present. Non-smoking; cards (JCB, AMEX, Diners), no e-money or QR (Tabelog). No service charge listed on Tabelog.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion, Tominagacho north of Shijo — 215 m from Gion-Shijo Stn',
    cuisine: 'Seasonal Kyoto cooking served as five assorted-platter courses (March 2026) · famous for wild sweetfish the owner catches each morning by tomozuri, and mountain vegetables the owner forages (2025–2026 reviews) · seasons: bamboo shoots in spring, sweetfish in summer, taro in autumn (April 2022) · seen: vinegared hamo, octopus and scallop; fish somen with okra, tororo and sakura shrimp; junsai salad; grilled sweetfish eaten head to tail; New Year beans, taro, pickled sea cucumber, grilled fugu milt, funazushi, roast beef (2022–2026 reviews) · about ¥15,000–20,000 a head (2025–2026 reviews)',
    website: null, gmaps: gm('らく山 祇園 富永町'), menu_url: null,
    notes: '[Kyoto cooking · Gion, the owner’s own sweetfish] A nine-seat counter in Gion where the owner goes out at dawn to catch wild sweetfish by tomozuri and forage mountain greens, then cooks them that evening in generous assorted platters — fish somen, junsai, sweetfish grilled to eat whole. A quiet chef who warms up with jokes, and his wife at the front, keep regulars coming 20 years. Reservation only; a summer meal can run four hours. Sweetfish depends on the catch.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, with his wife front of house (2026 reviews); not named'], origin: null,
      background: 'Reviewers describe a Gion restaurant visited for over twenty years (April 2022), whose owner catches wild sweetfish each morning in the upper reaches of Kyoto rivers by tomozuri and forages mountain vegetables, preparing them the same day; a seemingly stern, taciturn chef who opens up with jokes, and a friendly wife who chats with regulars (2023–2026). A March 2026 diner saw the chef cook alone while two women served about eight guests.',
      philosophy: null,
      specialty: 'Wild sweetfish caught by the owner; seasonal assorted platters.',
      anecdotes: [
        { text: 'A regular of over twenty years times visits to bamboo shoots, sweetfish and taro — and learned here that the base of a bamboo shoot holds the real flavour (April 2022).', source: R + 'B112262945/' },
        { text: '"At first, the chef is quiet and focused on the food, but as the meal progresses, he starts to share jokes." — April 2023.', source: R + 'B501995687/' },
        { text: 'An August 2026 guest was told at booking that sweetfish might not be available, and that the meal could take about four hours.', source: R + 'B533515292/' },
      ],
      japanese_sources_summary: '食べログ: らく山、日本料理、東山区富永町109-2、祇園四条駅から215m、毎日 18:00〜23:00 (L.O. 20:00)、不定休、完全予約制、17席 (1階カウンター9、2階個室8名は現在使用していない)、禁煙、カード (JCB・AMEX・Diners)、電子マネー・QR不可、グルメサイトのページ (gorp.jp)。口コミ (2021年7月〜2026年8月、英語): 20年以上通う常連、春は掘りたての筍、夏は鮎、秋は里芋、店主が朝に友釣りで釣る天然鮎と自ら採る山菜、鱧と蛸と帆立の酢の物、魚そうめん (オクラ、とろろ、桜海老)、じゅんさいのサラダ、頭から食べられる焼き鮎、正月の黒豆・里芋・このわた・ふぐの白子焼き・鮒寿司・ローストビーフ、5品の盛り合わせのコース、寡黙だが冗談も言う大将と気さくな女将、2人の女性が給仕、1人1万5千〜2万円ほど、夏は4時間ほどかかる、鮎がない日もある。',
      confidence: 'medium', sources: [TB, R + 'B112262945/', R + 'B218250644/', R + 'B439232889/', R + 'B466588669/', R + 'B501995687/', R + 'B523850554/', R + 'B525627642/', R + 'B532597095/', R + 'B532877021/', R + 'B533515292/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; a set seasonal course at the counter; allow plenty of time.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区富永町109-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.004595, 135.773898); cross-checked: GSI 京都府京都市東山区富永町109番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No prices published; diners spent about ¥15,000–20,000 a head (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Seasonal course (sweetfish in summer)', '', 'Course', 'ask', 'no', 'Price not given.', 'course'),
    ] }, {
    cuisine: '5回の盛り合わせで出す季節の京料理 (2026年3月)・店主が毎朝友釣りで釣る天然鮎と自ら採る山菜が名物 (2025〜2026年の口コミ)・春は筍、夏は鮎、秋は里芋 (2022年4月)・これまでの料理: 鱧と蛸と帆立の酢の物、オクラ・とろろ・桜海老の魚そうめん、じゅんさいのサラダ、頭から食べられる焼き鮎、正月の黒豆・里芋・このわた・ふぐの白子焼き・鮒寿司・ローストビーフ (2022〜2026年の口コミ)・1人1万5千〜2万円ほど (2025〜2026年の口コミ)',
    neighborhood: '四条の北、祇園の富永町。祇園四条駅から215m',
    gf_detail: '予約時に要確認。グルテンの情報なし。魚そうめんや盛り合わせのある、だしの季節のコース (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鮎、鱧、蛸、ふぐの白子、鮒寿司などのだしの魚のコース (2022〜2026年の口コミ)。',
    notes: '[京料理・祇園、店主が釣る鮎] 祇園のカウンター9席。店主が夜明けに友釣りで天然の鮎を釣り山菜を採って、その晩たっぷりの盛り合わせで出す。魚そうめん、じゅんさい、頭から食べる焼き鮎。寡黙だが冗談も言う大将と女将に、20年通う常連も。完全予約制、夏は4時間かかることも。鮎は釣果しだい。',
  });
}

save();
