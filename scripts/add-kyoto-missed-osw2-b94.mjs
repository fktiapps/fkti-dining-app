// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 94.
//   Queue run from the osw2 worktree, 2026-11-26. Core and notable tiers have nothing left in this lane, so rest tier,
//   nearest-first (queue.mjs kyoto-missed next rest 2000, lane ids by distance). No integrator prefetch this round:
//   shops fetched by the worker from Tabelog /en/ with 3 s between requests.
//   Rest rule: at least one 2025–26 review and enough sourced detail. Days the sources do not state are left out of hours.
//   + 開花亭 (Kaikatei) — Showa-retro café-restaurant inside Maruyama Park, about 40 years old in 2016 (gurunavi); latest review August 2025;
//     gurunavi shows a "temporarily closed" notice, so existence is 'probable' (decided this round after last round's fetch)
//   + 呑み処 羅真 (izakaya in a basement at Karasuma-Gojo, opened 12 August 2026; Korean dishes too)
//   + 萬端 (Bantan) — chicken restaurant at Kawaramachi-Nijo; the owner's family runs 鳥清 in Nishiki Market (official site)
//   + 魚里ゐ夷 (Toriiebisu) — fish izakaya with a live tank and about 60 sakes on Shinmachi south of Shijo, opened 29 October 2024
//   None of the drafted shops is in data/kyoto.json, hidden records included: grep by id, name and address.
//   Brands: 魚里ゐ夷 is run by 株式会社照水 (NTA invoice register, T4130001029162); gurunavi also lists a 魚里ゐ夷 near Kyoto
//     Station's Hachijo exit and a July 2026 reviewer mentions "other branches" — a small group, size not found (flagged).
//     The other three are single shops.
//   Service charges: none found.
//   Pins: Tabelog /en/ point for each shop, except 羅真 (offset ~6 m south: the Tabelog point is ~2 m from MATT RESTAURANT 2.0
//     in the same basement); not pin-checked by the worker this round (integrator pin-checks).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-26';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-94');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 開花亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26002173/'; const R = TB + 'dtlrvwlst/';
  const GN = 'https://r.gnavi.co.jp/k032500/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_kaikatei_maruyama', name: '開花亭 (Kaikatei)', category: 'OMNI',
    lat: 35.003326017877136, lng: 135.78036197033109, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Curries (including a katsu curry), sandwiches, fried dishes and roll cake; no gluten information is published (gurunavi; Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A seasonal Kyoto-vegetable curry and a curry of fresh wheat gluten, Kujo leek and fried tofu are listed (gurunavi), but no vegan claim or broth information is published.',
    hours_raw: 'Tabelog (official information): 9:00–18:00, closed Wednesday, also closed irregularly. gurunavi: Monday–Friday 11:00–17:00, Saturday, Sunday and holidays 10:00–17:00, open into the evening only during Hanatoro, cherry-blossom and autumn-leaf seasons, closed irregularly. An April 2023 visitor found it opening at 10:30, with lunch from 11:00 and a morning menu before that. gurunavi currently shows a "temporarily closed" notice with no dates; a diner visited in August 2025 — call ahead (075-561-2115). No reservations (Tabelog). No cards (Tabelog). 60 seats (Tabelog; about 60 in an April 2017 review, counter and tables) or 70 with a terrace added in July 2016 (gurunavi). Smoking: Tabelog says allowed (all seats smoking in April 2017); gurunavi says fully non-smoking inside. English menu (gurunavi). Inside Maruyama Park, about 10 minutes on foot from Keihan Gion-Shijo (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Maruyama Park',
    cuisine: 'Café, light meals, curries and drinks by the pond in Maruyama Park, with beer and other drinks (gurunavi) · original curries of Kyoto ingredients: fresh wheat gluten, Kujo leek and fried tofu curry; seasonal Kyoto-vegetable curry (gurunavi) · cola float (August 2025) · morning mixed sandwich with a drink ¥800 (April 2023) · Sakura Ice, a spring treat compared to sakura mochi (March 2022) · fried potatoes and a platter of three sausages (December 2020) · matcha roll cake set with coffee ¥850 (April 2017)',
    website: GN, gmaps: gm('開花亭 円山公園'), menu_url: TB + 'dtlmenu/',
    notes: "[Café · Maruyama Park, a Showa-era café by the pond] A retro café-restaurant inside Maruyama Park, facing the famous weeping cherry and next to Yasaka Shrine, with window seats and antique furnishings: curries, sandwiches, cakes, floats and beer. gurunavi shows a temporary-closure notice, though a diner visited in August 2025 — call ahead. No cards; no bookings.",
    chef_bio: { chef_name: null, roles: ['Operator (not named)'], origin: null,
      background: 'A café-restaurant inside Maruyama Park, in front of the park’s weeping cherry and next to Yasaka Shrine (Tabelog; April 2017 and March 2022 reviews). gurunavi describes it as a shop of 40 years that renovated in July 2016, keeping its character and adding terrace seats. Reviewers describe a nostalgic Showa-era interior with antique furnishings (August 2025) and a retro-chic room with mostly older customers and many long-time regulars (April 2017).',
      philosophy: null,
      specialty: 'Curries of Kyoto ingredients; Sakura Ice in spring.',
      anecdotes: [
        { text: 'In August 2025 a visitor swapped the soda in the cream soda for cola and called the antique-filled room a perfect place for a quiet moment.', source: R + 'B511553191/' },
        { text: 'An April 2023 diner who came for lunch at the 10:30 opening learned that lunch starts at 11:00 and had the morning mixed sandwich with coffee (¥800) at a window table.', source: R + 'B464371090/' },
        { text: 'A March 2022 reviewer returns every spring for the Sakura Ice, eaten on the terrace facing the weeping cherry trees.', source: R + 'B447301620/' },
        { text: 'On a snowy December 2020 day a first-time visitor found the room more spacious than it looks, with many window seats, but the drinks a little pricey and the sausages served with chopsticks only.', source: R + 'B433527468/' },
      ],
      japanese_sources_summary: 'ぐるなび: 円山公園 喫茶・カフェ 開花亭 (マルヤマコウエンキッサカフェカイカテイ)、一時休業中の表示、月〜金11:00〜17:00、土・日・祝10:00〜17:00、花灯路・花見・紅葉の時期のみ夜まで営業、不定休、70席、テラス席、店内全面禁煙、英語メニュー、2016年7月からテラス席、40年続く店がリニューアル、生麩と九条葱とおあげのカレー、季節の京野菜カレー、お酒も呑めます。食べログ: 開花亭 (カイカテイ)、洋食、京都市東山区祇園町北側623 円山公園内、9:00〜18:00、水曜定休、不定休、予約不可、カード不可、60席、喫煙可、2009年のメニュー (エビピラフ、ビーフカレー、カツカレーなど)。口コミ (2017〜2025年、英語と日本語): 抹茶のロールケーキセット850円 (2017年4月)、レトロな店内、しだれ桜の前、Sakura Ice (2022年3月)、フライドポテトとソーセージ3種盛り (2020年12月)、ミックスサンド800円 (2023年4月)、コーラフロート (2025年8月)。',
      confidence: 'low', sources: [GN, TB, TB + 'dtlmenu/', R + 'B269153654/', R + 'B433527468/', R + 'B447301620/', R + 'B464371090/', R + 'B511553191/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (gurunavi); call ahead — gurunavi shows a temporary-closure notice.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側623 円山公園内',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing (corporate member); latest review August 2025. gurunavi shows a "temporarily closed" notice with no dates.' },
    pin_source: `Tabelog ${TB} (35.003326, 135.780362); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B464371090/', R + 'B269153654/', GN],
    price_note: 'Prices from reviews, dated by visit; curry names from gurunavi without prices.', last_checked: TODAY, items: [
      it('生麩と九条葱とおあげのカレー', '', 'Curry of fresh wheat gluten, Kujo leek and fried tofu', '', 'Meals', 'no', 'ask', 'gurunavi.', 'namafu_curry'),
      it('季節の京野菜カレー', '', 'Seasonal Kyoto-vegetable curry', '', 'Meals', 'ask', 'ask', 'gurunavi.', 'yasai_curry'),
      it('ミックスサンド', '', 'Morning mixed sandwich with a drink', '¥800', 'Morning', 'no', 'no', 'April 2023.', 'mix_sand'),
      it('抹茶のロールケーキセット', '', 'Matcha roll cake set with coffee', '¥850', 'Sweets', 'no', 'no', 'April 2017.', 'matcha_roll'),
    ] }, {
    cuisine: '円山公園の池のそばの喫茶、軽食、カレー、お酒も (ぐるなび)・京都の食材のオリジナルカレー、生麩と九条葱とおあげのカレー、季節の京野菜カレー (ぐるなび)・コーラフロート (2025年8月)・モーニングのミックスサンドとドリンク800円 (2023年4月)・桜もちのような春の Sakura Ice (2022年3月)・フライドポテトとソーセージ3種盛り (2020年12月)・抹茶のロールケーキとコーヒーのセット850円 (2017年4月)',
    neighborhood: '円山公園',
    gf_detail: '要確認。カツカレーを含むカレー、サンドイッチ、揚げもの、ロールケーキ。グルテンの情報は公開されていない (ぐるなび、食べログ、口コミ)。',
    vegan_detail: '要確認。季節の京野菜カレーと、生麩と九条葱とおあげのカレーがある (ぐるなび) が、ヴィーガンの表示やだしの情報はない。',
    notes: '[喫茶・円山公園、池のそばの昭和の喫茶] 円山公園の中、名物のしだれ桜の前、八坂神社の隣のレトロな喫茶・レストラン。窓辺の席とアンティークの調度品、カレー、サンドイッチ、ケーキ、フロート、ビール。ぐるなびに一時休業の表示があるが2025年8月の来店記録もあり、電話で確認を。カード不可、予約不可。',
  });
}

// ================================================================ 呑み処 羅真
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26045619/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_nomidokoro_tb26045619', name: '呑み処 羅真', category: 'OMNI',
    lat: 34.997675, lng: 135.759539, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Hot pots, karaage, kimbap, pork kakuni and a mentaiko dashi omelette; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an izakaya of hot pots and meat dishes; the namul platter is the likeliest plant dish, but no vegan information is published (reviews).',
    hours_raw: '17:00–24:00 (last order food 23:00, drinks 23:30); closed Tuesday (Tabelog). Bookings taken; groups of 11–19 and private hire for 25 or more by phone (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 24 seats, with counter seats (Tabelog; October 2026 review). Smoking allowed (Tabelog). The left-hand shop in the basement of a building on Karasuma just north of Gojo, about 3 minutes from Gojo subway station, with a blackboard sign at street level (Tabelog; 2026 reviews). Opened 12 August 2026 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma-Gojo',
    cuisine: 'A casual basement izakaya of hot pots, meat dishes and small plates, with Korean dishes too: kimbap in three kinds (meat kimchi, sausage, crab stick), kimchi, namul with potato and eggplant, yukgaejang ramen; staff recommend the hot pots, the pork kakuni and a wagyu tofu dish; weekly specials on a whiteboard (August 2026) · assorted namul (4 kinds) ¥680, thick-cut fries ¥480, peppers stuffed with meat miso ¥480, salt-grilled beef outside skirt ¥1,580, mentaiko dashi omelette ¥680, pork kakuni ¥780, chicken karaage (5 pieces) ¥720; draft beer ¥580, highball ¥500 (October 2026)',
    website: null, gmaps: gm('呑み処 羅真 京都 五条'), menu_url: R + 'B537694703/',
    notes: "[Izakaya · Karasuma-Gojo, opened 2026] A casual basement izakaya with retro posters and the TV on: hot pots, pork kakuni, salt-grilled beef skirt and a run of Korean dishes — kimbap, namul, kimchi, yukgaejang ramen. Counter seats suit solo drinkers. Open to midnight; closed Tuesday. Smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Owner (not named)'], origin: null,
      background: 'Opened on 12 August 2026 (Tabelog; August 2026 review) in the basement of a building on Karasuma Street near Gojo, one of two shops on that floor (August 2026 review). The room has a casual feel with black-toned retro posters and news on the TV (August 2026).',
      philosophy: null,
      specialty: 'Hot pots; meat-kimchi kimbap.',
      anecdotes: [
        { text: 'An August 2026 visitor admitted it took some courage to head down to the basement alone, then found the room casual and welcoming to a quick first drink; the meat-kimchi kimbap was the popular one.', source: R + 'B534049062/' },
        { text: 'Dropping in after 20:30 on a Sunday in October 2026, a diner got straight in and ran through namul, stuffed peppers, salt-grilled skirt and kakuni, paying ¥50 for a stronger highball.', source: R + 'B537694703/' },
      ],
      japanese_sources_summary: '食べログ: 呑み処 羅真、居酒屋、京都市下京区御供石町368 北阪ビル B1F、地下鉄五条駅から徒歩3分、月・水〜日17:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、火曜定休、予約可、11〜19名と25名以上の貸切は要問い合わせ、カード可 (VISA、Master、JCB、AMEX、Diners、銀聯)、電子マネー不可、PayPay可、24席、喫煙可、オープン日2026年8月12日。口コミ (2026年、英語): 烏丸通のビルの地下、黒板の看板、地下に2軒、レトロなポスター、鍋と肉料理、豚の角煮、キンパ3種 (肉キムチ、ソーセージ、カニカマ)、キムチ、じゃがいもとなすのナムル、ユッケジャンラーメン、週替わりのおすすめはホワイトボード (2026年8月)、生ビール580円、ナムル4種盛り680円、厚切りフライドポテト480円、肉味噌のピーマン詰め480円、牛ハラミの塩焼き1,580円、明太だし巻き680円、豚の角煮780円、唐揚げ5個720円、カウンター席 (2026年10月)。',
      confidence: 'low', sources: [TB, R + 'B534049062/', R + 'B537694703/'] },
    cultural_comfort: { level: 'japanese', note: 'Basement izakaya; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区御供石町368 北阪ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (corporate member); reviews dated August and October 2026.' },
    pin_source: `Tabelog ${TB} (34.997729, 135.759539), moved ~6 m south: the Tabelog point is ~2 m from kyoto_matt_restaurant_2 (MATT RESTAURANT 2.0, address_ja '京都府京都市下京区御供石町368 北坂ビル B1F', the same basement); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537694703/'],
    price_note: 'Prices from an October 2026 review.', last_checked: TODAY, items: [
      it('ナムル4種盛り', '', 'Assorted namul (4 kinds)', '¥680', 'Small plates', 'ask', 'ask', '', 'namul'),
      it('牛ハラミの塩焼き', '', 'Salt-grilled beef outside skirt', '¥1,580', 'Meat', 'ask', 'no', '', 'harami'),
      it('豚の角煮', '', 'Pork kakuni', '¥780', 'Meat', 'no', 'no', '', 'kakuni'),
      it('明太だし巻き', '', 'Mentaiko dashi omelette', '¥680', 'Small plates', 'ask', 'no', '', 'mentai_dashimaki'),
      it('唐揚げ', '', 'Chicken karaage (5 pieces)', '¥720', 'Fried', 'no', 'no', '', 'karaage'),
    ] }, {
    cuisine: '鍋、肉料理、つまみの気軽な地下の居酒屋、韓国料理も。キンパ3種 (肉キムチ、ソーセージ、カニカマ)、キムチ、じゃがいもとなすのナムル、ユッケジャンラーメン。店のおすすめは鍋と肉料理、豚の角煮。週替わりのおすすめはホワイトボードに (2026年8月)・ナムル4種盛り680円、厚切りフライドポテト480円、肉味噌のピーマン詰め480円、牛ハラミの塩焼き1,580円、明太だし巻き680円、豚の角煮780円、唐揚げ5個720円、生ビール580円、ハイボール500円 (2026年10月)',
    neighborhood: '烏丸五条',
    gf_detail: '要確認。鍋、唐揚げ、キンパ、豚の角煮、明太だし巻き。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。鍋と肉料理の居酒屋。植物性の皿はナムルくらいだが、ヴィーガンの情報はない (口コミ)。',
    notes: '[居酒屋・烏丸五条、2026年開業] レトロなポスターとテレビの気軽な地下の居酒屋。鍋、豚の角煮、牛ハラミの塩焼き、キンパ、ナムル、キムチ、ユッケジャンラーメンなどの韓国料理も。カウンター席は一人飲みに。深夜0時まで、火曜休み。喫煙可。',
  });
}

// ================================================================ 萬端
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002719/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoto-bantan.com/'; const MENU = SITE + 'menu/index.html'; const CONCEPT = SITE + 'concept/index.html';
  const L = day(['12:00', '13:00'], ['18:00', '22:30']); const D = day(['18:00', '22:30']);
  put({
    id: 'kyoto_bantan_nijo', name: '萬端 (Bantan)', category: 'OMNI',
    lat: 35.01335125711887, lng: 135.76856707870024, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Yakitori is served mainly with tare (October 2026); the menu runs to karaage, chicken katsu, minced-chicken croquettes, mizutaki and sukiyaki; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant; the hot-pot soup is simmered from chicken bones for 10 hours (official site).',
    hours_raw: 'Lunch Tuesday–Friday 12:00–13:00 (last order); dinner Tuesday–Sunday and holidays 18:00–22:00 last order (Tabelog); the official site gives dinner as 18:00–22:30 (last order 22:00), closed irregularly. Monday is not listed (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 48 seats on the 2nd and 3rd floors (Tabelog): counter, tables and a sunken-kotatsu tatami room for up to 24 (official site; 2011–2012 reviews); private hire for 20–50 (Tabelog). Smoking: allowed in April 2012 (review); not stated on Tabelog now. Up a spiral staircase in the Bantan Building at the northwest corner of Kawaramachi-Nijo, 3 minutes from Kyoto Shiyakusho-mae station (official site; Tabelog; 2011–2012 reviews).',
    hours: { 1: L, 2: L, 3: L, 4: L, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi-Nijo',
    cuisine: 'Chicken restaurant using same-morning-slaughtered jidori: yakitori, mizutaki hot pot of a soup simmered 10 hours from chicken bones, karaage lunch (official site) · house specials on the official menu (undated): sanzoku-yaki ¥1,800, duck loin ¥1,400, tataki ¥800, jibu-ni ¥800, chicken mince omelette ¥500; chicken sashimi platter ¥1,300; assorted 10 skewers ¥1,600; oyakodon ¥800; soup chazuke ¥600; mizutaki or sukiyaki ¥4,500 · yakitori mainly with tare; a set of 10 skewers ¥1,900; finishing with soup chazuke (October 2026) · mizutaki of milky broth with raw fresh chicken, vegetables, fu, kuzu noodles and tofu, then rice porridge (March 2010) · three lunch sets at ¥850 — karaage, grated-daikon hamburg, chicken in chili sauce (April 2012)',
    website: SITE, gmaps: gm('萬端 京都 河原町二条'), menu_url: MENU,
    notes: "[Chicken · Kawaramachi-Nijo, from a Nishiki Market poultry family] Up a spiral staircase at Kawaramachi-Nijo, a chicken restaurant led by an owner whose family runs Nishiki Market’s 鳥清: yakitori, chicken sashimi, sanzoku-yaki, and mizutaki in a 10-hour chicken soup. Weekday karaage lunches. A Showa-retro room; an October 2026 diner got in without waiting.",
    chef_bio: { chef_name: null, roles: ['Owner (not named); family home is 鳥清 in Nishiki Market (official site)'], origin: null,
      background: 'The owner’s family home is 鳥清, a poultry shop in Nishiki Market, and the owner leads the restaurant on that experience (official site). A 2009 reviewer describes 鳥清 as a chicken and duck specialist with a 90-year history and says the meat comes from there; a 2012 reviewer calls 萬端 a long-established chicken specialist with roots in Nishiki Market. Reviews from 2006 onward mention magazine coverage (Danchu and others, August 2009). An October 2026 reviewer calls it a Showa-retro restaurant.',
      philosophy: 'Only same-morning-slaughtered jidori, so many cuts can be served fresh (official site).',
      specialty: 'Sanzoku-yaki; mizutaki in a 10-hour chicken soup.',
      anecdotes: [
        { text: 'An October 2026 diner, craving yakitori, found the place on Google, had the 10-skewer set for ¥1,900 — mostly with tare, no choice of salt — and finished with soup chazuke; it was easy to get in without waiting.', source: R + 'B537800209/' },
        { text: 'In June 2011 a diner set on the sanzoku-yaki (¥1,800) asked whether it was too much for one, was shown the dish, and gave up until a return with friends.', source: R + 'B116472412/' },
        { text: 'A March 2006 first-timer was handed a notebook and brush pen on the way out to leave contact details and comments.', source: R + 'B116809947/' },
        { text: 'An August 2009 yakitori hunter found the skewers cut very small and thought them gas-grilled, not charcoal, and judged the restaurant better for its other chicken dishes.', source: R + 'B111165887/' },
      ],
      japanese_sources_summary: '公式サイト: 京のTORI処 萬端 (ばんたん)、京都・三条の焼鳥居酒屋、店主の実家「錦市場 鳥清」の経験が活きる鳥料理専門店、朝引き地鶏のみ使用、水炊き鍋は鳥ガラを10時間煮込むスープ、昼 (火〜金) 12:00〜13:00、夜18:00〜22:30 (L.O.22:00)、不定休、京都府京都市中京区二条通河原町西入榎木町65 バンタンビル2〜3F、掘りごたつのお座敷は24名まで、京阪三条駅歩8分、地下鉄京都市役所前駅歩3分。メニュー (日付なし): 山賊焼1,800円、鴨ロース1,400円、たたき800円、じぶ煮800円、そぼろオムレツ500円、お造り盛り合わせ1,300円、鶏てっさ1,200円、ヤキトリ (一人前2串) 320円、おまかせ串盛り合わせ (10種) 1,600円、親子丼800円、スープ茶漬け600円、すき焼き・水たき4,500円、ランチは毎日3種類、唐揚げ定食。食べログ: 萬端、鳥料理・水炊き・居酒屋、昼 火〜金12:00〜13:00 (L.O.)、夜 火〜日・祝18:00〜22:00 (L.O.)、不定休、カード可、48席、貸切20〜50名。口コミ (2006〜2026年、英語): らせん階段、カウンター・テーブル・座敷、焼き鳥はたれが中心、10本セット1,900円、スープ茶漬け、昭和レトロ (2026年10月)、山賊焼、鳥刺し、水炊き、唐揚げ定食850円 (2012年4月)。',
      confidence: 'medium', sources: [SITE, CONCEPT, MENU, TB, R + 'B111165887/', R + 'B116472412/', R + 'B116577984/', R + 'B116809947/', R + 'B118408600/', R + 'B118435128/', R + 'B537800209/'] },
    cultural_comfort: { level: 'japanese', note: 'Up a spiral staircase; book by phone for groups.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通河原町西入榎木町65 バンタンビル 2・3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; review dated October 2026.' },
    pin_source: `Tabelog ${TB} (35.013351, 135.768567); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [MENU, R + 'B537800209/'],
    price_note: 'Official-site menu, undated (its 10-skewer platter is ¥1,600; an October 2026 diner paid ¥1,900 for a 10-skewer set).', last_checked: TODAY, items: [
      it('山賊焼', '', 'Sanzoku-yaki (salt-grilled chicken thigh)', '¥1,800', 'House specials', 'ask', 'no', 'A large dish (June 2011 review).', 'sanzokuyaki'),
      it('じぶ煮', '', 'Jibu-ni (simmered chicken)', '¥800', 'House specials', 'ask', 'no', '', 'jibuni'),
      it('お造り盛り合わせ', '', 'Chicken sashimi platter', '¥1,300', 'Sashimi', 'ask', 'no', '', 'torisashi'),
      it('おまかせ串盛り合わせ（10種）', '', 'Chef’s choice of 10 skewers', '¥1,600', 'Grill', 'ask', 'no', '¥1,900 in October 2026.', 'kushi10'),
      it('親子丼', '', 'Oyakodon', '¥800', 'Rice', 'ask', 'no', '', 'oyakodon'),
      it('水たき', '', 'Mizutaki hot pot', '¥4,500', 'Hot pot', 'ask', 'no', '', 'mizutaki'),
    ] }, {
    cuisine: '朝引き地鶏の鳥料理。焼き鳥、鳥ガラを10時間煮込んだスープの水炊き鍋、唐揚げのランチ (公式サイト)・公式サイトのメニュー (日付なし): 山賊焼1,800円、鴨ロース1,400円、たたき800円、じぶ煮800円、そぼろオムレツ500円、お造り盛り合わせ1,300円、おまかせ串盛り合わせ (10種) 1,600円、親子丼800円、スープ茶漬け600円、水たき・すき焼き4,500円・焼き鳥はたれが中心、10本セット1,900円、締めはスープ茶漬け (2026年10月)・白濁のスープに生の新鮮な鶏、野菜、麩、くずきり、豆腐の水炊き、締めは雑炊 (2010年3月)・唐揚げ、おろしハンバーグ、鶏のチリソースの3種のランチ各850円 (2012年4月)',
    neighborhood: '河原町二条',
    gf_detail: '要確認。焼き鳥はたれが中心 (2026年10月)。唐揚げ、チキンカツ、鶏ミンチとおからのコロッケ、水炊き、すき焼きなど。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。鳥料理の店で、鍋のスープは鳥ガラを10時間煮込む (公式サイト)。',
    notes: '[鳥料理・河原町二条、錦市場の鳥屋の家] 河原町二条のらせん階段を上がった先、錦市場の鳥清が実家の店主の鳥料理の店。焼き鳥、鶏の造り、山賊焼、10時間煮込んだスープの水炊き。平日昼は唐揚げなどのランチ。昭和レトロの店内、2026年10月の客は待たずに入れた。',
  });
}

// ================================================================ 魚里ゐ夷
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041893/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://toriiebisu-kyoto.com/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_toriiebisu_shijo', name: '魚里ゐ夷 (Toriiebisu)', category: 'OMNI',
    lat: 35.00276665787002, lng: 135.7568734303419, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Live-tank sashimi, tempura, simmered and grilled fish, Kyoto oden and obanzai; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; the oden broth is made with katsuobushi and kombu (official site).',
    hours_raw: '17:00–23:30 daily including holidays (last order food 22:30, drinks 23:00); open year-round apart from the New Year break (Tabelog). Bookings online or by phone (official site). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 90 seats: counter, sunken seats, a private room with a courtyard on the 1st floor, and tank-view and semi-private seats on the 2nd floor (Tabelog; official site). Non-smoking, with a smoking room by the restrooms (Tabelog; September 2026 review). Children welcome (Tabelog). On Shinmachi south of Shijo, 3 minutes from Karasuma station exit 26 (Tabelog). Opened 29 October 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma',
    cuisine: 'Fish izakaya with a live tank: fish scooped from the tank as ikizukuri (horse mackerel, flounder), tempura, simmered and grilled fish, Kyoto oden in a katsuobushi-and-kombu broth, seasonal obanzai, and about 60 sakes from around Japan including limited releases and an original junmai, with a choose-three tasting set; seafood hot-pot course with all-you-can-drink of over 40 sakes ¥6,000 (official site) · sea bream shabu-shabu course ¥7,000 with sashimi, obanzai, fried sea bream and zosui (October 2026) · summer sashimi platter of bluefin tuna, yellowtail, ayu, flounder and turban shell, sliced conger eel with plum paste and bonito flakes, tempura of kisu and peppers, grilled horumon yakisoba, giant homemade French toast (July 2026) · nama-fu dengaku, namero, toro-taku roll, dashimaki (August 2026) · red konnyaku (September 2026)',
    website: SITE, gmaps: gm('魚里ゐ夷 京都 新町四条'), menu_url: SITE,
    notes: "[Izakaya · Shijo-Karasuma, live tank and sake] A large fish izakaya with a live tank, courtyard private room and semi-private booths: ikizukuri from the tank, Kyoto oden, obanzai and about 60 sakes. All-you-can-drink courses with sake from ¥6,000 are popular for work dinners. Open daily to 23:30.",
    chef_bio: { chef_name: null, roles: ['Operator: 株式会社照水 (NTA invoice register)'], origin: null,
      background: 'Opened on 29 October 2024 (Tabelog); the official site marked its second anniversary in October 2026. The invoice registration on Tabelog (T4130001029162) belongs to 株式会社照水 of Shimogyo, Kyoto (NTA invoice register). gurunavi also lists a 魚里ゐ夷 near the Hachijo exit of Kyoto Station; a September 2026 reviewer understood the shop was originally near Kyoto Station, and a July 2026 reviewer had been to “their other branches” several times.',
      philosophy: 'Fish kept alive in the tank until it is prepared (official site).',
      specialty: 'Live-tank ikizukuri; Kyoto oden; sake all-you-can-drink courses.',
      anecdotes: [
        { text: 'An April 2026 company party of eight took a private room for the ¥6,000 all-you-can-drink course and was impressed by the well-known sake names on the list.', source: R + 'B519589709/' },
        { text: 'Another April 2026 diner on a ¥7,000 course felt the portions small — one piece of obanzai and one piece of fried sea bream each — while praising the fresh sashimi and the private room.', source: R + 'B526024047/' },
        { text: 'In September 2026 a diner at the popular shop found several dishes out of stock without being told at ordering, and met red konnyaku for the first time.', source: R + 'B535264563/' },
        { text: 'A September 2026 traveller liked the deep counter with room for the plates but noted smoke from the smoking room in front of the restrooms.', source: R + 'B537559294/' },
      ],
      japanese_sources_summary: '公式サイト: 魚里ゐ夷 (とりいえびす)、京都・四条烏丸、店内の生簀からすくい上げた魚をその場で捌き活け造りや焼き物に、天ぷら、煮つけ、京おでん (かつお節と昆布の出汁)、季節のおばんざい、全国の銘酒と限定酒約60種、オリジナル純米酒、3種の飲み比べ、40種以上の日本酒を含む飲み放題付きの海鮮鍋コース6,000円 (税込)、1階に中庭付きの完全個室、2階に生簀を望む席と半個室、京都府京都市下京区新町通四条下ル四条町365-1、075-741-7075、Instagram toriiebisu_kyoto、2026年10月に2周年。食べログ: 魚里ゐ夷、居酒屋・海鮮・おでん、毎日17:00〜23:30 (料理L.O.22:30、ドリンクL.O.23:00)、年中無休、カード可、電子マネー・QR不可、90席、個室あり、禁煙 (喫煙ブースあり)、子ども歓迎、オープン日2024年10月29日、適格請求書 T4130001029162。国税庁の適格請求書発行事業者公表サイト: 株式会社照水 (京都市下京区)。ぐるなび: 京都駅八条口近くの魚里ゐ夷 (南区東九条西山王町16)。口コミ (2025〜2026年、英語): 飲み放題の日本酒、鯛しゃぶコース7,000円、刺身、おばんざい、鯛の唐揚げ、雑炊 (2026年10月)、量が少ないという声 (2026年4月)、品切れが多い (2026年9月)、喫煙室の煙 (2026年9月)、ほかの店舗にも (2026年7月)。',
      confidence: 'medium', sources: [SITE, TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=4130001029162', 'https://gurunavi.com/en/ka38002/rst', R + 'B517206588/', R + 'B519589709/', R + 'B526024047/', R + 'B530977785/', R + 'B532211024/', R + 'B532262031/', R + 'B533656248/', R + 'B535264563/', R + 'B536074231/', R + 'B536873294/', R + 'B537559294/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Online booking on the official site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区新町通四条下ル四条町365-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news dated October 2026) and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002767, 135.756873); not pin-checked by the worker; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [SITE, R + 'B536873294/'],
    price_note: 'Course prices from the official site (tax included) and an October 2026 review.', last_checked: TODAY, items: [
      it('海鮮鍋コース', '', 'Seafood hot-pot course with all-you-can-drink (over 40 sakes)', '¥6,000', 'Courses', 'ask', 'no', 'Official site, tax included.', 'kaisen_nabe'),
      it('', '', 'Sea bream shabu-shabu course', '¥7,000', 'Courses', 'ask', 'no', 'October 2026 review.', 'tai_shabu'),
      it('京おでん', '', 'Kyoto oden', '', 'À la carte', 'ask', 'no', 'Katsuobushi-and-kombu broth.', 'oden'),
      it('活け造り', '', 'Ikizukuri from the live tank', '', 'À la carte', 'ask', 'no', '', 'ikezukuri'),
    ] }, {
    cuisine: '生簀のある魚の居酒屋。生簀からすくった魚の活け造り (真鯵、平目)、天ぷら、煮つけ、焼き物、かつお節と昆布の出汁の京おでん、季節のおばんざい、限定酒やオリジナル純米酒を含む全国の日本酒約60種と3種の飲み比べ、40種以上の日本酒の飲み放題付きの海鮮鍋コース6,000円 (公式サイト)・刺身、おばんざい、鯛の唐揚げ、雑炊の鯛しゃぶコース7,000円 (2026年10月)・本まぐろ、ぶり、鮎、平目、さざえの夏の刺身盛り、きすととうがらしの天ぷら、ホルモン焼きそば、大きな自家製フレンチトースト (2026年7月)・生麩田楽、なめろう、トロたく巻き、だし巻き (2026年8月)・赤こんにゃく (2026年9月)',
    neighborhood: '四条烏丸',
    gf_detail: '要確認。生簀の魚の活け造り、天ぷら、煮つけ、焼き物、京おでん、おばんざい。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の居酒屋で、おでんの出汁はかつお節と昆布 (公式サイト)。',
    notes: '[居酒屋・四条烏丸、生簀と日本酒] 生簀、中庭付きの個室、半個室のある大きな魚の居酒屋。生簀の魚の活け造り、京おでん、おばんざい、約60種の日本酒。日本酒の飲み放題付きのコースは6,000円から、会社の宴会にも。毎日23:30まで。',
  });
}

save();
