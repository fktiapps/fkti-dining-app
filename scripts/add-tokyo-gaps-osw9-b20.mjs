// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 20.
//   + 知仙 Chisen (24-seat kushiage counter of 45+ years, Zen-temple interior; omakase until you say stop)
//   + THE SUSHI りょうけん THE SUSHI Ryouken (sushi with French touches by chef Yoko Kimoto; all-inclusive omakase with drinks)
//   + リュストル Lustre (French with "umami" from kombu and fish sauce by chef Go Karasawa; opened late 2025)
//   + YAKITORI 燃 es (yakitori with French technique by Daisuke Numano; Tabelog Award Bronze 2025–2026; OMAKASE booking)
//   Chain / group check (working line): YAKITORI 燃 has 本店, WEST (Nishiazabu, where es began) and es — a small group, none in
//   data, so es is drafted. None of the four is in data/tokyo, osaka or kyoto by name, Tabelog id or address.
//   Pins: Lustre (トーマスビル B1F) and 燃 es (宮下ビル 1F) both sit at 7-13-10 with Tabelog points 0 m apart, so Lustre is offset
//   ~9 m west (away from OYOGE and Sushi Ryuma). Tabelog URLs copied from each listing.txt line 1. No placeholder hours.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 知仙
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13007417/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.chisen.info/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'tokyo_chisen_roppongi', name: '知仙 (Chisen)', category: 'OMNI',
    lat: 35.66349, lng: 139.730285, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushiage — skewers fried in batter and breadcrumbs.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fried seafood, meat and vegetable skewers with Japanese small dishes; vegetable skewers share the fryer.',
    hours_raw: 'Tue–Sun 17:00–22:30; closed Mondays and the 1st, 3rd and 5th Sundays of the month (Tabelog). 10% service charge. 24 counter seats; whole-shop hire up to 50. Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money. Same-day bookings often possible (April 2026), but full on some weekdays (June 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 7-16-5 — 2 min from Roppongi Stn exit 4B (Hibiya line), 3 min from exit 7 (Oedo line)',
    cuisine: 'Kushiage with seasonal ingredients and Japanese small dishes (Tabelog shop text) · "kushi omakase": skewers fried one at a time until you say stop (August 2026) · courses (Tabelog, tax included): seasonal course of skewers and small bowls ¥9,000; Chisen set of 11 classic skewers (snow crab, sweet shrimp, asparagus, lotus root…) with rice and fruit ¥9,000; chef\'s special course of the day ¥13,000 (book by the day before) · in 2026: matsutake from Tanba, snow crab, oysters, kombu with herring roe, water octopus, conger eel, sweetfish, burdock wrapped in pork, shirako wrapped in yuba, konnyaku, shrimp shumai, croquettes; natural maitake from the mountains (shop text) · about 20 small dishes such as fresh yuba, wagyu tataki, jellyfish sashimi; cold nameko soba or rice to finish · sake and wine chosen by the owner, a sommelier and SAKE DIPLOMA holder (shop text)',
    website: SITE, gmaps: gm('知仙 六本木7-16-5'), menu_url: TB + 'dtlmenu/',
    notes: "[Kushiage · Roppongi, a long-running kushiage counter with a Zen-temple interior] A 24-seat counter fitted out like a Kamakura Zen temple, open for some 45 years per the shop (over 50, per one 2026 diner), where seasonal ingredients are battered and fried one skewer at a time in front of you until you say stop: Tanba matsutake in autumn, snow crab, oysters, kombu with herring roe, sweetfish. Small Japanese dishes — fresh yuba, wagyu tataki — and cold nameko soba round it out, and the owner, a sommelier with the SAKE DIPLOMA, pairs sake and wine. Diners in 2026 loved the light batter and warm staff; one found the fruit at the end unripe. Courses ¥9,000–13,000; closed Mondays and alternate Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the Tabelog shop text: the Zen-temple-style interior was created 45 years ago; staff visit producing areas such as the mountains where natural maitake grow; the owner is a certified sommelier and SAKE DIPLOMA holder who chooses the sake and wine. A June 2026 diner writes that the shop has been around for over 50 years. No one is named in the sources read.',
      philosophy: 'The finest ingredients delivered together with their stories (Tabelog shop text).', specialty: 'Seasonal kushiage omakase; matsutake skewers.',
      anecdotes: [
        { text: '"Enjoy the "Kushi Omakase" style, where freshly fried skewers are served one by one until you say stop, allowing you to savor at your own pace." — August 2026.', source: R + 'B511729145/' },
        { text: '"I wonder if I\'m the only one who thinks that skewered fried Matsutake is the best way to savor its flavor and texture." — October 2026.', source: R + 'B116718725/' },
        { text: '"Honestly, the staff were even better than the food." — April 2026, seasonal course ¥9,000.', source: R + 'B525991655/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 知仙、港区六本木7-16-5、日比谷線六本木駅4B出口から徒歩2分、大江戸線7番出口から3分、火〜日17:00〜22:30、月曜と第1・3・5日曜休み、サービス料10%、24席 (カウンターのみ)、貸切50名まで、禁煙、カード・PayPay 可。店の紹介: Kamakura の禅寺を模した45年前からの店内、熊のいる山の天然舞茸、ソムリエで SAKE DIPLOMA を持つオーナーが選ぶ日本酒とワイン。コース: 季節のコース9,000円、知仙セット (串11本、ご飯、果物) 9,000円、シェフの特別コース13,000円。口コミ(2026年4月〜10月): ストップと言うまでのおまかせ、Tanba の松茸、ずわい蟹、牡蠣、子持ち昆布、水だこ、鱧、鮎、湯葉で包んだ白子、こんにゃく、締めの冷たいなめこそば、50年以上続くという声、スタッフが温かい。',
      confidence: 'medium', sources: [TB, SITE, R + 'B116718725/', R + 'B511729145/', R + 'B525991655/', R + 'B528033072/', R + 'B530094352/', R + 'B530486393/', R + 'B532270911/', R + 'B535460003/', R + 'B536368571/', R + 'B538221891/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase — say stop when full; menu of the day on the wall.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木7-16-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with courses and an official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663490, 139.730285); GSI 東京都港区六本木七丁目16番 (lot) 24m; OYOGE (7-13-10) is 22 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog (tax included); 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Seasonal course: kushiage and Japanese small bowls', '¥9,000', 'Course', 'no', 'no', 'Tabelog.', 'seasonal'),
      it('', '', 'Chisen set: 11 classic skewers, rice, seasonal fruit', '¥9,000', 'Course', 'no', 'no', 'Tabelog.', 'chisen_set'),
      it('', '', "Chef's special course of the day (book by the day before)", '¥13,000', 'Course', 'no', 'no', 'Tabelog.', 'special'),
    ] }, {
    cuisine: '季節の食材の串揚げと和の小鉢 (食べログの店の紹介)・ストップと言うまで一本ずつ揚げる「串おまかせ」(2026年8月)・コース (食べログ、税込み): 串と小鉢の季節のコース9,000円、ずわい蟹、甘海老、アスパラ、蓮根など定番の串11本とご飯と果物の知仙セット9,000円、その日だけのシェフの特別コース13,000円 (前日までに予約)・2026年: Tanba の松茸、ずわい蟹、牡蠣、子持ち昆布、水だこ、鱧、鮎、豚肉巻きのごぼう、湯葉で包んだ白子、こんにゃく、海老焼売、コロッケ。山の天然舞茸 (店の紹介)・生湯葉、和牛のたたき、くらげの刺身など約20種の小鉢。締めは冷たいなめこそばかご飯・ソムリエで SAKE DIPLOMA を持つオーナーが選ぶ日本酒とワイン (店の紹介)',
    neighborhood: '六本木7-16-5。六本木駅4B出口 (日比谷線) から徒歩2分、7番出口 (大江戸線) から3分',
    gf_detail: 'グルテンフリー不可。串揚げで、衣とパン粉で揚げる。',
    vegan_detail: 'ヴィーガン不可。魚介、肉、野菜の串揚げと和の小鉢のおまかせで、野菜の串も同じ油で揚げる。',
    notes: '[串揚げ・六本木、禅寺のような長く続く串揚げのカウンター] Kamakura の禅寺を模したカウンター24席。店によれば約45年 (2026年の客の一人は50年以上と書く)。季節の食材に衣をつけて目の前で一本ずつ揚げ、ストップと言うまで続く: 秋の Tanba の松茸、ずわい蟹、牡蠣、子持ち昆布、鮎。生湯葉や和牛のたたきなどの小鉢、冷たいなめこそばで締め、ソムリエで SAKE DIPLOMA を持つオーナーが日本酒とワインを合わせる。2026年の客は軽い衣と温かいスタッフを称え、締めの果物が熟していなかったという声も。コースは9,000〜13,000円、月曜と隔週の日曜休み。',
  });
}

// ================================================================ THE SUSHI りょうけん
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13315626/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '23:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'tokyo_the_sushi_ryouken_roppongi', name: 'THE SUSHI りょうけん (THE SUSHI Ryouken)', category: 'OMNI',
    lat: 35.662024, lng: 139.730831, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A creative sushi omakase with somen, ponzu and a tare option for the anago (2026 reviews); nothing is said about gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and seafood omakase.',
    hours_raw: 'Mon–Sat, holidays and days before/after holidays 18:00–23:00, in two seatings (18:00–20:00 and 20:30–22:30); Sun 17:00–23:00 (17:00–19:00 and 19:30–21:30) (Tabelog). Courses have a two-hour limit; same-day bookings accepted for the all-inclusive course. A 10% service fee is charged to international guests only, for multilingual service (Tabelog course notes). 18 seats: 12 at a hinoki counter and 6 at tables; private rooms for 4–6. Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR. One restroom (October 2026). English explanations for overseas guests (October 2026). Opened December 2025 (October 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 6-2-6, GEMS六本木 B1F, a block off Roppongi-dori — 3 min from Roppongi Stn',
    cuisine: 'Sushi with French and creative touches (2026 reviews) · all-inclusive omakase, 17 dishes with all-you-can-drink sake and wine, ¥14,190 (Tabelog; October 2026); other courses ¥10,890 and ¥12,890 (Tabelog); upgrade the tuna rice ball to an "uni-toro wrap" for +¥2,000 (October 2026) · sushi rice mixed from rice vinegar and red vinegar at the counter and tasted on its own first · in 2026: Sanriku wakame with ponzu, refilled on request; homemade tofu; monkfish-liver mousse with pickled watermelon; chutoro; white squid with charcoal salt; surf-clam nigiri; white peach, sweet shrimp and tomato somen; mussel and winter-melon chawanmushi with saffron; ikura and apple rice bowl with yuzu jelly; smoked mackerel; fluffy anago with salt or tare; uni-toro wrap · Koshino Umesato and other sake, wine',
    website: null, gmaps: gm('THE SUSHI りょうけん 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Roppongi, an all-inclusive creative sushi omakase with drinks] A basement hinoki counter a block off Roppongi-dori, opened in December 2025 under chef Yoko Kimoto, whose background in Michelin-starred French cooking shows in seventeen courses that pair nigiri with things like white peach and sweet-shrimp somen, saffron chawanmushi and ikura with apple; the sushi rice is mixed at the counter and tasted on its own first. The all-inclusive omakase with sake and wine is ¥14,190, and most guests add the uni-toro wrap. Diners in 2026 call it great value with lively presentation and English explanations; others found it too Instagram-minded, or the floor staff unpolished. International guests pay a 10% service fee.",
    chef_bio: { chef_name: 'Yoko Kimoto (as written in the Tabelog shop text)', roles: ['Chef (Tabelog shop text)'], origin: null,
      background: 'Per the Tabelog shop text: chef Yoko Kimoto pursued innovative cooking drawn from experience in Michelin-starred French cuisine and abroad, focused on domestic ingredients and reducing food waste, founded the restaurant "IEN", and has now taken up sushi. An October 2026 reviewer describes the chef as coming from "the Michelin-listed Omotesando HYENE" and says the shop opened in December 2025.',
      philosophy: 'Bringing out the flavours of ingredients with heartfelt hospitality (Tabelog shop text).', specialty: 'All-inclusive omakase; uni-toro wrap.',
      anecdotes: [
        { text: '"… mix rice vinegar and red vinegar to create the sushi rice, which is a rare sight to see, making it a valuable experience." — October 2026, all-inclusive omakase ¥14,190.', source: R + 'B538276281/' },
        { text: '"The elegant aroma of saffron and the deep flavor of the mussels were perfectly infused into the winter melon, creating a unique dish that you won\'t find anywhere else." — September 2026.', source: R + 'B535204561/' },
        { text: '"If you\'re looking to purely enjoy sushi, this might be a bit too lively for you, but the taste isn\'t bad." — October 2026.', source: R + 'B538098551/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): THE SUSHI りょうけん、港区六本木6-2-6 GEMS六本木B1F、六本木駅から徒歩3分、月〜土・祝・祝前日・祝後日18:00〜23:00 (18:00〜20:00、20:30〜22:30の2部制)、日17:00〜23:00、18席 (カウンター12、テーブル6)、4〜6名の個室、禁煙、カード可、海外のお客様のみ多言語対応のためサービス料10%。店の紹介: シェフ Yoko Kimoto (星付きのフレンチと海外での経験、国産食材と食品ロスの削減、「IEN」を開いたのち鮨に挑戦)。コース: 飲み放題付きのオールインクルーシブおまかせ17品14,190円、ほかに10,890円と12,890円。口コミ(2026年9月〜10月): 2025年12月開店、目の前で合わせる赤酢と米酢のシャリ、Sanriku のわかめ、あん肝のムース、白桃と甘海老とトマトのそうめん、ムール貝と冬瓜のサフランの茶碗蒸し、いくらと林檎の丼、ウニトロ巻き (+2,000円)、英語の説明、映え重視という声、フロアのスタッフに不満の声。',
      confidence: 'medium', sources: [TB, R + 'B535204561/', R + 'B535585472/', R + 'B535638559/', R + 'B536066060/', R + 'B536782363/', R + 'B537521723/', R + 'B537688832/', R + 'B538098551/', R + 'B538276281/', R + 'B538310164/'] },
    cultural_comfort: { level: 'english', note: 'English explanations for overseas guests (October 2026); 10% service fee for international guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木6-2-6 GEMS六本木 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with courses; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662024, 139.730831); GSI 東京都港区六本木六丁目2番 (lot) 38m; Kebab Bar (6-2-35) is 29 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538276281/'],
    price_note: 'Course prices from Tabelog (tax included) and October 2026 reviews; 10% service for international guests only.', last_checked: TODAY, items: [
      it('', '', 'All-inclusive omakase, 17 dishes, with all-you-can-drink', '¥14,190', 'Course', 'ask', 'no', 'Tabelog; October 2026 review.', 'all_inclusive'),
      it('', '', 'Uni-toro wrap (upgrade)', '+¥2,000', 'Add-on', 'ask', 'no', 'October 2026 review.', 'uni_toro'),
    ] }, {
    cuisine: 'フレンチと創作の要素を加えた鮨 (2026年の口コミ)・日本酒とワインの飲み放題付きのオールインクルーシブおまかせ17品14,190円 (食べログ、2026年10月)、ほかに10,890円と12,890円のコース (食べログ)。鮪のおにぎりをウニトロ巻きにすると+2,000円 (2026年10月)・カウンターで米酢と赤酢を合わせるシャリを、まずそれだけで味わう・2026年: Sanriku のわかめのポン酢 (おかわり可)、自家製豆腐、あん肝のムースと西瓜の漬物、中トロ、炭塩の白烏賊、北寄貝の握り、白桃と甘海老とトマトのそうめん、ムール貝と冬瓜のサフランの茶碗蒸し、柚子のジュレのいくらと林檎の丼、燻した鯖、塩かたれで食べるふわふわの穴子、ウニトロ巻き・Koshino Umesato などの日本酒、ワイン',
    neighborhood: '六本木6-2-6 GEMS六本木B1F、六本木通りから一本入る。六本木駅から徒歩3分',
    gf_detail: '要確認。そうめん、ポン酢、穴子のたれの選択もある創作鮨のおまかせ (2026年の口コミ)。グルテンについての説明はない。',
    vegan_detail: 'ヴィーガン不可。魚と魚介のおまかせ。',
    notes: '[鮨・六本木、飲み物込みの創作鮨のおまかせ] 六本木通りから一本入った地下の檜のカウンターで、2025年12月にシェフ Yoko Kimoto のもと開店。星付きのフレンチの経験が17品に表れ、握りに白桃と甘海老のそうめん、サフランの茶碗蒸し、いくらと林檎などを合わせる。シャリはカウンターで合わせ、まずそれだけで味わう。日本酒とワイン込みのおまかせは14,190円で、多くの客がウニトロ巻きを追加。2026年の客はお得で演出が楽しく英語の説明もあると書き、映えを狙いすぎ、フロアのスタッフが洗練されていないという声も。海外のお客様はサービス料10%。',
  });
}

// ================================================================ リュストル
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13308442/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://lustre-roppongi.jp/';
  const D = day(['18:00', '22:30']); const LD = day(['12:00', '15:00'], ['18:00', '22:30']);
  put({
    id: 'tokyo_lustre_roppongi', name: 'リュストル (Lustre)', category: 'OMNI',
    lat: 35.663736, lng: 139.730194, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Courses have included a kataifi-wrapped scallop, an abalone beignet, tarts and croquettes (2026 reviews); nothing is said about gluten.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: set French courses of seafood, veal and lamb; a kombu-based non-alcoholic pairing is offered (June 2026), but no vegan course is described.',
    hours_raw: 'Tue 18:00–22:30 (food last order 20:00); Wed–Sat 12:00–15:00 (last order 13:00) and 18:00–22:30 (last order 20:00); closed Sundays and Mondays; holidays follow the weekday (Tabelog). 10% service charge. 18 seats: 6 at the counter and private rooms for 8 and 4 (room fee ¥22,000 if fewer than 4). Non-smoking. Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR. Wine is expensive — glasses over ¥3,000 (July 2026). A host meets guests at street level; little phone signal in the basement (June 2026). Opened in late 2025 (reviewers say October or November 2025).',
    hours: { 1: D, 2: LD, 3: LD, 4: LD, 5: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 7-13-10, トーマスビル B1F, next to OYOGE — 2 min from Roppongi Stn exit 4b (Hibiya line) or exit 7 (Oedo line)',
    cuisine: '"Umami French" that adds kombu and fish sauce to classic and modern technique (Tabelog shop text; June 2026) · lunch course ¥7,700 with an optional 3-glass pairing ¥6,600 (February 2026); dinner course ¥22,000 (May 2026) · in 2026: amuse-bouche of sakura-shrimp tart, horse-mackerel tartare with Yamagata dashi, brandade croquettes; chilled corn soup; snow crab and avocado cannelloni with caviar; kataifi scallop with Kanzuri sauce; Ezo abalone beignet with turnip; managatsuo with beurre blanc; rockfish with a classic sauce; roast veal; Sisteron lamb; desserts by a pastry chef · wine pairings, mainly French, and a non-alcoholic pairing of kombu-based drinks',
    website: SITE, gmaps: gm('リュストル 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[French · Roppongi, \"umami French\" under the chandeliers] Down a stair beside the OYOGE taiyaki shop, a hushed basement of chandeliers and Lladró porcelain with a six-seat counter and private rooms, opened in late 2025. Chef Go Karasawa — formerly of Ginza Le Can and Esquisse — cooks \"umami French\", folding kombu and fish sauce into classic dishes: kataifi-wrapped scallop with Kanzuri, Ezo abalone beignet, managatsuo in beurre blanc, Sisteron lamb. A sommelier with Tour d'Argent and Apicius experience runs the pairings, including a non-alcoholic one built on kombu. Diners in 2026 praise the warmth and precision; wine is pricey. Lunch ¥7,700, dinner about ¥22,000.",
    chef_bio: { chef_name: 'Go Karasawa (as written in 2026 reviews; "Karasawa" in the Tabelog shop text)', roles: ['Chef (Tabelog shop text)'], origin: 'Niigata (February 2026 review)',
      background: 'Per the Tabelog shop text: started cooking in 2003 and trained at Ginza Le Can and Esquisse, working in both classic and modern styles, with a signature use of kombu and fish-sauce umami; the sommelier, Kudo, has worked at Tour d\'Argent Tokyo and Apicius. 2026 reviewers add earlier posts at Monna Lisa, Ajiru and La Clé de Voûte and a head-chef role at Algo in Kojimachi, and a February 2026 diner calls Niigata the chef\'s hometown. A September 2026 Pommery dinner review mentions a "Chef Onuma".',
      philosophy: '"Umami French" (June 2026 review).', specialty: 'Kombu-and-fish-sauce umami in French dishes; kombu non-alcoholic pairing.',
      anecdotes: [
        { text: '"… here, unique pairings were offered, such as drinks made from carefully extracted kombu kelp broth." — June 2026, seasonal omakase lunch.', source: R + 'B529724716/' },
        { text: '"I enjoyed the JPY 7700 course with a pairing. Each dish was beautifully presented, and the detailed explanations made the experience even more enjoyable." — May 2026.', source: R + 'B522954165/' },
        { text: '"The wine prices are steep, with even the cheapest champagne costing nearly JPY 20,000 including tax." — July 2026.', source: R + 'B531868150/' },
      ],
      japanese_sources_summary: '食べログ: リュストル、港区六本木7-13-10 トーマスビルB1F、日比谷線六本木駅4b出口・大江戸線7番出口から徒歩2分、火18:00〜22:30 (料理L.O.20:00)、水〜土12:00〜15:00 (L.O.13:00)、18:00〜22:30、日月休み、祝日は曜日どおり、サービス料10%、18席 (カウンター6、個室8席と4席、4名未満の個室利用は22,000円)、禁煙、カード可。店の紹介: シェフ Karasawa (2003年から、Ginza Le Can や Esquisse で修業、昆布と魚醤のうま味)、ソムリエ Kudo (Tour d\'Argent Tokyo、Apicius)、Lladró の装飾とシャンデリア。口コミ(2026年2月〜9月): 昼のコース7,700円とペアリング6,600円、夜のコース22,000円、「うま味フレンチ」、カダイフの帆立と Kanzuri のソース、Ezo の鮑のベニエ、マナガツオのブールブラン、Sisteron の仔羊、昆布を使ったノンアルコールのペアリング、ワインは高い、シェフの故郷は Niigata という声、2025年秋開店。',
      confidence: 'medium', sources: [TB, SITE, R + 'B522954165/', R + 'B525422791/', R + 'B526262961/', R + 'B528324081/', R + 'B529724716/', R + 'B529730576/', R + 'B529841647/', R + 'B530460947/', R + 'B531868150/', R + 'B534729250/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter or private rooms; detailed explanations of each dish.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木7-13-10 トーマスビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.663736, 139.730294), 0 m from YAKITORI 燃 es (tokyo_yakitori_moe_es_roppongi, same lot 7-13-10, 1F), so offset ~9 m west, away from OYOGE (now 24 m) and Sushi Ryuma (30 m); GSI 東京都港区六本木七丁目13番 (lot) 44m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522954165/', R + 'B529841647/'],
    price_note: 'Course prices from February and May 2026 reviews; 10% service.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥7,700', 'Lunch', 'ask', 'no', 'February and May 2026 reviews.', 'lunch'),
      it('', '', 'Wine pairing, 3 glasses (lunch)', '¥6,600', 'Drinks', '', '', 'February 2026 review.', 'pairing'),
      it('', '', 'Dinner course', '¥22,000', 'Course', 'ask', 'no', 'May 2026 review.', 'dinner'),
    ] }, {
    cuisine: '古典とモダンの技法に昆布と魚醤を加える「うま味フレンチ」(食べログの店の紹介、2026年6月)・昼のコース7,700円、3杯のペアリング6,600円 (2026年2月)、夜のコース22,000円 (2026年5月)・2026年: 桜海老のタルト、Yamagata のだしの鯵のタルタル、ブランダードのコロッケのアミューズ、冷たいとうもろこしのスープ、ずわい蟹とアボカドのカネロニとキャビア、Kanzuri のソースのカダイフ巻きの帆立、蕪を添えた Ezo の鮑のベニエ、マナガツオのブールブラン、伝統的なソースのめばる、仔牛のロースト、Sisteron の仔羊、パティシエのデザート・フランス中心のワインペアリングと、昆布を使ったノンアルコールのペアリング',
    neighborhood: '六本木7-13-10 トーマスビルB1F、OYOGE の隣。六本木駅4b出口 (日比谷線)・7番出口 (大江戸線) から徒歩2分',
    gf_detail: '要確認。カダイフの帆立、鮑のベニエ、タルト、コロッケが出た (2026年の口コミ)。グルテンについての説明はない。',
    vegan_detail: 'ヴィーガン不可。魚介、仔牛、仔羊のフレンチのコース。昆布のノンアルコールのペアリングはある (2026年6月) が、ヴィーガンのコースの記載はない。',
    notes: '[フレンチ・六本木、シャンデリアの下の「うま味フレンチ」] OYOGE の隣の階段を下りた、シャンデリアと Lladró の陶器の静かな地下で、カウンター6席と個室。2025年秋の開店。Ginza Le Can や Esquisse 出身のシェフ Go Karasawa が、昆布や魚醤を古典の料理に溶け込ませる「うま味フレンチ」を作る: Kanzuri の帆立のカダイフ巻き、Ezo の鮑のベニエ、マナガツオのブールブラン、Sisteron の仔羊。Tour d\'Argent と Apicius 出身のソムリエがペアリングを担い、昆布を使ったノンアルコールのものも。2026年の客は温かさと精密さを称え、ワインは高め。昼7,700円、夜は約22,000円。',
  });
}

// ================================================================ YAKITORI 燃 es
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13259508/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '23:00']);
  put({
    id: 'tokyo_yakitori_moe_es_roppongi', name: 'YAKITORI 燃 es (YAKITORI Moe es)', category: 'OMNI',
    lat: 35.663735, lng: 139.730295, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mostly salt-grilled skewers (the liver is the one with sauce, per the shop), with crackers, a chicken crepe and egg noodles in the course (2026 reviews; Tabelog shop text).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori omakase ending in chicken consommé noodles.',
    hours_raw: 'Mon–Sat 18:00–23:00; closed Sundays and on irregular days (Tabelog). Reservations only through OMAKASE (Tabelog); book 2–3 weeks ahead (October 2026). Seatings start at set times; a later "short" course is cheaper (October 2026). 10% service charge. 16 seats: 12 at the counter and a private room for 4. Non-smoking. No children. Cards; no e-money or QR. Sommelier on staff. Opened 15 June 2021 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Roppongi 7-13-10, 宮下ビル 1F, in a back alley of the Roppongi club district — about 3–5 min from Roppongi Stn',
    cuisine: 'Yakitori with French technique, mainly Himekko jidori from Ehime (2026 reviews; Tabelog shop text) · omakase: appetizers such as chicken rillettes with crackers and a beet and coconut-yogurt soup, about 10–11 skewers, then chicken consommé noodles with homemade egg noodles (Tabelog shop text) · courses ¥7,700 (tax and service included) and ¥8,000 for the short course, ¥15,000 (October 2026) · skewers: breast, hōrōrō, Miyazaki thigh, neck, heart, gizzard, tsukune, walnut negima, skin, knee cartilage, liver cooked by rest-and-carry-over heat to a rare-like texture (the only skewer with sauce), Brussels sprouts, eggplant, shiitake; extras like duck · nyumen and pudding to finish · Japanese wines and sake, sommelier',
    website: null, gmaps: gm('YAKITORI 燃 es 六本木'), menu_url: null,
    notes: "[Yakitori · Roppongi, French-technique yakitori that takes two weeks to book] A twelve-seat counter in a Roppongi back alley, the high-end branch of the YAKITORI 燃 group, where chef Daisuke Numano grills Himekko jidori from Ehime with French technique: chicken rillettes and a beet soup to start, around eleven skewers — the liver rested in foil until creamy, the tsukune everyone mentions — and a clear chicken consommé with homemade egg noodles to finish. Tabelog Award Bronze 2025 and 2026 and a Tabelog yakitori 100 regular. Diners in 2026 rank it the best yakitori around and good value; book through OMAKASE, ideally two or three weeks ahead. No children.",
    chef_bio: { chef_name: 'Daisuke Numano (as written in the Tabelog shop text)', roles: ['Chef (Tabelog shop text)'], origin: 'Tokyo (born 1981)',
      background: 'Per the Tabelog shop text: born in 1981 in Tokyo; after university started as a yakitori cook at a popular shop in Tamachi at 22; learned French cooking at a referral-only French restaurant to master heat; took over the grill at "YAKITORI燃WEST" in Nishiazabu in 2014; restarted in Roppongi as "YAKITORI燃es" in 2022. An October 2026 reviewer adds that YAKITORI 燃 was founded by Toshiaki Abe in 2002 and that es opened in June 2021, evolving from the Nishiazabu WEST shop. The Tabelog Award Bronze 2025 and 2026; Tabelog yakitori 100 in 2022–2025.',
      philosophy: 'Simple ingredients transformed by fire and passion (as an October 2026 reviewer explains the name).', specialty: 'Foil-rested liver; chicken consommé noodles.',
      anecdotes: [
        { text: '"Every skewer is delicious, but the tsukune (chicken meatballs) and the tender chicken liver are exceptional." — October 2026.', source: R + 'B537597455/' },
        { text: '"I made a reservation for the "Omakase Course at JPY 7,700 (tax and service included)" about 2-3 weeks ago." — October 2026.', source: R + 'B537724409/' },
        { text: '"It had a refined flavor with a rich broth that was easy to enjoy even after indulging in yakitori." — October 2026, ¥15,000 course.', source: R + 'B537148655/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): YAKITORI 燃 es、港区六本木7-13-10 宮下ビル1F、六本木駅から徒歩3分、月〜土18:00〜23:00、日休み、不定休、サービス料10%、16席 (カウンター12、4名の個室)、禁煙、子ども不可、ソムリエ、予約は OMAKASE のみ、2021年6月15日オープン、The Tabelog Award 2025・2026 Bronze、焼き鳥 百名店 2022〜2025。店の紹介: シェフ Daisuke Numano (1981年 Tokyo 生まれ、Tamachi の焼き鳥店から、紹介制のフレンチで火入れを学び、2014年に Nishiazabu の「YAKITORI燃WEST」の焼き場、2022年に六本木で「YAKITORI燃es」として再出発)、アルミホイルで休ませるレバー、鶏ガラと胸肉のコンソメと卵たっぷりの自家製麺のラーメン。口コミ(2026年6月〜10月): Ehime の Himekko 地鶏、7,700円・8,000円・15,000円のコース、鶏のリエット、ビーツのスープ、つくね、にゅうめんとプリン、日本のワイン、2〜3週間前に予約、創業者は Toshiaki Abe という声。',
      confidence: 'medium', sources: [TB, R + 'B442968741/', R + 'B537076698/', R + 'B537148655/', R + 'B537396691/', R + 'B537597455/', R + 'B537724409/', R + 'B538034001/', R + 'B538177881/', R + 'B538268294/', R + 'B538378520/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set omakase at the counter; book via OMAKASE.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木7-13-10 宮下ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with The Tabelog Award 2026 Bronze; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663735, 139.730295); GSI 東京都港区六本木七丁目13番 (lot) 45m; Lustre (same lot, B1F) is the one offset; OYOGE is 17 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537724409/', R + 'B538177881/', R + 'B537148655/'],
    price_note: 'Course prices from October 2026 reviews; 10% service (included in the ¥7,700 quote).', last_checked: TODAY, items: [
      it('', '', 'Omakase course (later seating)', '¥7,700', 'Course', 'ask', 'no', 'October 2026 review; tax and service included.', 'omakase_short'),
      it('', '', 'Omakase course', '¥8,000', 'Course', 'ask', 'no', 'October 2026 reviews; noodles and dessert extra.', 'omakase'),
      it('', '', 'Omakase course with noodles', '¥15,000', 'Course', 'ask', 'no', 'October 2026 review.', 'omakase_full'),
    ] }, {
    cuisine: 'フレンチの技法を使う焼き鳥、主に Ehime の Himekko 地鶏 (2026年の口コミ、食べログの店の紹介)・おまかせ: 鶏のリエットとクラッカー、ビーツとココナッツヨーグルトのスープなどの前菜、串約10〜11本、締めは卵たっぷりの自家製麺の鶏のコンソメのラーメン (店の紹介)・コース7,700円 (税・サービス料込み)、短いコース8,000円、15,000円 (2026年10月)・串: むね、ホロホロ鳥、Miyazaki のもも、せせり、ハツ、砂肝、つくね、胡桃のねぎま、皮、げんこつ、余熱で火を入れるレア感のあるレバー (唯一のたれ)、芽キャベツ、茄子、椎茸。追加で鴨も・締めのにゅうめんとプリン・日本のワインと日本酒、ソムリエ',
    neighborhood: '六本木7-13-10 宮下ビル1F、六本木のクラブ街の路地裏。六本木駅から徒歩約3〜5分',
    gf_detail: '要確認。串はほとんど塩焼きで、たれはレバーのみ (店の紹介)。コースにはクラッカー、鶏のクレープ、卵の麺も (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の焼き鳥のおまかせで、締めは鶏のコンソメの麺。',
    notes: '[焼き鳥・六本木、予約は2週間先、フレンチの技法の焼き鳥] 六本木の路地裏のカウンター12席。YAKITORI 燃 の高級ブランドで、シェフ Daisuke Numano が Ehime の Himekko 地鶏をフレンチの技法で焼く。鶏のリエットとビーツのスープに始まり、串は約11本 (ホイルで休ませてとろりとさせたレバー、皆が挙げるつくね)、締めは自家製の卵麺の澄んだ鶏のコンソメ。The Tabelog Award 2025・2026 Bronze、焼き鳥 百名店の常連。2026年の客は知るかぎり最高の焼き鳥でお得と書く。予約は OMAKASE で、2〜3週間前に。子ども不可。',
  });
}

save();
