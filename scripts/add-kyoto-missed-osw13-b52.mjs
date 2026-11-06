// Kyoto priority (kyoto-missed), worker osw13, batch 52 — lane: Tabelog id mod 6 = 0.
// Core: JUNGLE CAVE, 修伯. Notable: とんかつ豚料理 寿樹, エール新町 (Ailes).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-52');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26037906', 'chain: SCHOOL BUS COFFEE BAKERS is one of 8 SCHOOL BUS COFFEE shops — the company site (schoolbus.coffee) lists COFFEE STOP in Kitahama, Kyoto, Motomachi, Namba Parks, Nakameguro and Fukuoka, COFFEE ROASTERS in Sakai and COFFEE BAKERS at Hyatt Place Kyoto, run by a renovation company (school-bus.jp); 5+ same-brand = chain (Greg ruling 2026-11-05)');
skip('26016564', 'group size unconfirmed: 京都牛懐石 稲吉 (with its basement bar 地階稲吉) — the Tabelog invoice number T4011801013144 belongs to セントラルホールディングス株式会社 (Nagoya registry); a same-name company runs naoto.K, ASAHINA Gastronome, caillou, Galerie ASAHINA and resort-hotel restaurants (careermap.jp), and a 2018 review names the founder as head of the G Communication group; could not confirm which group or how large, so skipped (Greg ruling 2026-11-05)');

// ================================================================ JUNGLE CAVE
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26022216/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['18:00', '23:00']); const SA = day(['18:00', '23:00']);
  put({
    id: 'kyoto_jungle_cave', name: 'JUNGLE CAVE (ジャングルケイブ)', category: 'OMNI',
    lat: 35.012073, lng: 135.764687, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: lunch is kara-age, chicken nanban, fried oysters and tonteki in sauce (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat bar — steaks, homemade sausages, fried chicken and pork set meals with miso soup (Tabelog; reviews).',
    hours_raw: 'Tabelog: Mon–Fri lunch 11:30–14:00 (last order 13:30) and dinner 18:00–23:00 (last order 22:00); Sat dinner only 18:00–23:00; closed Sunday, but open on a Sunday before a Monday holiday. Lunch ends when it sells out (Tabelog; September 2026). Phone bookings only in business hours. 20 seats with sofa seating; smoking allowed (Tabelog); no cards or e-money, PayPay accepted. Service charge: none — Tabelog’s Japanese original says 「無し」 (the English auto-translation wrongly says one is added). Opened 22 March 2013 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'West of Kyoto City Hall — about 5 min walk from Kyoto Shiyakusho-mae and Karasuma Oike Stns',
    cuisine: 'A meat bar: homemade sausages, steaks, about ten meat and vegetable snacks, beer, highballs, lemon sours, wine, cocktails (Tabelog) · a one-pound steak with butter and potatoes (November 2025; January 2025) · weekday lunch: two or three set meals a day, listed on a board outside and on Instagram — kara-age set ¥1,100 (October 2025, May 2026), kara-age with homemade tartar ¥1,250 (August 2026), tonteki (pork steak) set ¥1,650–1,680 (August, October 2026), chicken nanban, fried oysters in season (March 2025); big salad, rice and miso soup; rice refills charged (October 2025)',
    website: null, gmaps: gm('JUNGLE CAVE 橘町'), menu_url: null,
    notes: '[Meat bar · west of City Hall, steak and sausages, big lunch plates] A twenty-seat meat bar open since 2013: homemade sausages and steak by the pound at night, and on weekdays two or three hefty set lunches — kara-age, chicken nanban, a tonteki in a rich sauce — that sell out early. Regulars split on the rice: "declining a bit" (September 2025), "a bit too soft" (May 2026). Smoking allowed. PayPay but no cards. Closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 22 March 2013 (Tabelog). The Tabelog blurb calls it a pioneering meat bar — a meat tavern with homemade sausages and steaks, about ten snacks always on, and popular meat set lunches that end when they sell out. An older shop blog (2016) announced dinner from 18:00 daily, Friday-only lunches then, and a "chicken mountain" as its speciality. Reviewers in 2024–2026 describe a lunch board at the entrance, two or three set meals a day, and a menu posted on Instagram.',
      philosophy: null,
      specialty: 'Steak by the pound; homemade sausages; tonteki set lunch.',
      anecdotes: [
        { text: 'A September 2026 diner came for the "famous Tonteki Set Meal" before noon: the chicken nanban was already gone, and the tonteki sold out just after, "marking the end of lunch service."', source: R + 'B537521644/' },
        { text: '"I personally feel that the quality of the rice (white rice) has been declining a bit" — a ten-time lunch regular, September 2025.', source: R + 'B496349335/' },
        { text: 'October 2026: "The Tonteki feels 1.5 times bigger than it looks in the pictures."', source: R + 'B537695130/' },
        { text: 'The fried-oyster set comes once a year in limited numbers — six large oysters with an original tartar sauce (March 2025).', source: R + 'B502339447/' },
      ],
      japanese_sources_summary: '食べログ: JUNGLE CAVE (ジャングルケイブ)、バル・ステーキ・居酒屋、中京区橘町641 京都建設会館別館 1F、京都市役所前駅・烏丸御池駅から徒歩約5分、月〜金 11:30〜14:00 (L.O. 13:30)・18:00〜23:00 (L.O. 22:00)、土 18:00〜23:00、日曜休み (月曜が祝日なら日曜営業)、20席、ソファ席、喫煙可、カード・電子マネー不可、PayPay可、サービス料は原文で「無し」、2013年3月22日オープン、肉バルの先駆け、自家製ソーセージとステーキ、肉と野菜のおつまみ約10種、ランチの肉定食は売り切れ次第終了。店のブログ (2016年): 夕方18時から営業、名物チキンマウンテン。口コミ (2024年6月〜2026年10月、英語): 唐揚げ定食1,100円、自家製タルタル付き1,250円、トンテキ定食1,650〜1,680円、チキン南蛮、季節の牡蠣フライ定食、1ポンドステーキとバターのポテト、ランチは入口の黒板とInstagram、ご飯のおかわりは有料、ご飯の質が落ちた・柔らかすぎるという声、ソースが濃いという声。',
      confidence: 'medium', sources: [TB, 'http://jungle-cave.blogspot.jp/', R + 'B486979271/', R + 'B496349335/', R + 'B500271268/', R + 'B502339447/', R + 'B513933631/', R + 'B515104621/', R + 'B529021747/', R + 'B534725907/', R + 'B537521644/', R + 'B537695130/'] },
    cultural_comfort: { level: 'japanese', note: 'Lunch choices are on a board at the entrance; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区橘町641 京都建設会館別館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.012073, 135.764687); cross-checked: GSI 京都府京都市中京区橘町641番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529021747/', R + 'B534725907/', R + 'B537695130/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('唐揚げ定食', '', 'Kara-age set meal', '¥1,100', 'Lunch', 'no', 'no', 'October 2025, May 2026.', 'karaage'),
      it('', '', 'Kara-age with homemade tartar', '¥1,250', 'Lunch', 'no', 'no', 'August 2026.', 'karaage'),
      it('トンテキ定食', '', 'Tonteki (pork steak) set meal', '¥1,650–1,680', 'Lunch', 'ask', 'no', 'August and October 2026.', 'pork_steak'),
      it('', '', 'One-pound steak', null, 'Dinner', 'ask', 'no', 'January and November 2025.', 'steak'),
    ] }, {
    cuisine: '肉バル: 自家製ソーセージ、ステーキ、肉と野菜のおつまみ約10種、ビール、ハイボール、レモンサワー、ワイン、カクテル (食べログ)・バターとポテトの1ポンドステーキ (2025年1月・11月)・平日ランチは日替わりの定食2〜3種で、入口の黒板とInstagramに。唐揚げ定食1,100円 (2025年10月、2026年5月)、自家製タルタル付き1,250円 (2026年8月)、トンテキ定食1,650〜1,680円 (2026年8月・10月)、チキン南蛮、季節の牡蠣フライ (2025年3月)。サラダたっぷり、ご飯と味噌汁付き。ご飯のおかわりは有料 (2025年10月)',
    neighborhood: '京都市役所の西。京都市役所前駅・烏丸御池駅から徒歩約5分',
    gf_detail: 'グルテンフリーではない: ランチは唐揚げ、チキン南蛮、牡蠣フライ、ソースのトンテキ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 肉バル。ステーキ、自家製ソーセージ、鶏や豚の定食に味噌汁 (食べログ、口コミ)。',
    notes: '[肉バル・市役所の西、ステーキとソーセージ、大盛りランチ] 2013年からの20席の肉バル。夜は自家製ソーセージと1ポンドのステーキ、平日の昼は唐揚げ、チキン南蛮、濃いソースのトンテキなどボリュームのある定食が2〜3種で、早めに売り切れる。ご飯については「質が少し落ちた」(2025年9月)、「柔らかすぎることも」(2026年5月) という声。喫煙可。カード不可でPayPayは可。日曜休み。',
  });
}

// ================================================================ 修伯
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001612/'; const R = TB + 'dtlrvwlst/';
  const AQ = 'http://aquadina.com/kyoto/spot/1404/';
  const H = day(['12:00', '14:00'], ['17:30', '20:30']);
  put({
    id: 'kyoto_shuhaku', name: '修伯 (Shuhaku)', category: 'OMNI',
    lat: 34.998638, lng: 135.778629, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: a French-influenced kaiseki with deep-fried fugu, fig dengaku and a dessert spread of millefeuille, tarts and Mont Blanc (2020–2024 reviews); soy and wheat are likely through the course. Raise it when booking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of fish, sweetfish sushi, mackerel sushi, Kyoto beef and foie gras with dashi (guide; reviews).',
    hours_raw: 'Tabelog: Tue–Sun and holidays, lunch 12:00–14:00 (last order 12:30), dinner 17:30–20:30 (last order 18:30); closed Monday and irregularly; reservations only; children welcome. 10 seats — counter and tatami; private hire possible; non-smoking; cards (Visa, Master, JCB, Amex, Diners), no e-money or QR (Tabelog). An older, undated guide (aquadina) gave lunch from ¥5,250, dinner from ¥10,500 with 10% service at dinner, closing on Mondays and third Sundays, and no cards. Tabelog lists no service charge.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama, near the Yasaka Pagoda — 15 min walk from Gion-Shijo Stn exit 7; 5 min from the Kiyomizu-michi bus stop',
    cuisine: 'Kyoto kaiseki with French ideas, cooked by an owner trained in French cuisine, served kappo-style at a counter (aquadina guide) · lunch course ¥7,000 (November 2020, January 2024); ¥10,000 lunch (May 2018); dinner spend ¥10,000–14,999, up to ¥30,000–39,999 in October 2026 (Tabelog; reviews) · a platter of about 18 vegetables to open (May 2018) · grilled sweetfish sushi, dobin-mushi, sashimi, fig dengaku with white miso, grilled mackerel sushi, Nagano matsutake rice, rice from a kamado (2018–2026 reviews) · a dessert spread of eight or more — Tamba chestnut Mont Blanc, walnut millefeuille, monaka — take as many as you like (2020–2025 reviews)',
    website: null, gmaps: gm('修伯 金園町'), menu_url: null,
    notes: '[Kaiseki · near the Yasaka Pagoda, French-trained, the dessert spread] A ten-seat counter-and-tatami kaiseki near the Yasaka Pagoda, run by an owner trained in French cooking: a platter of a dozen-plus vegetables, grilled sweetfish sushi, rice from a kamado, then a spread of eight-plus French-leaning desserts to take as many as you like. Lunch around ¥7,000. Two older gripes: a sukiyaki finish (2018), a hard-centred mochi in the New Year ozoni (2024). Reservations only; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef, not named; trained in French cuisine (aquadina guide)'], origin: null,
      background: 'Per the aquadina guide (undated): an original Kyoto kaiseki restaurant by an owner who trained in French cooking, serving kappo-style at the counter — Kyoto vegetables arranged as a starter, seasonal fish such as eel and fugu, foie gras and truffle, rice cooked over wood, and about ten desserts to choose from freely. A May 2018 reviewer first came about ten years earlier after reading Hisashi Kashiwai’s book on Kyoto restaurants, which named it a rising star, and said it had received a Michelin star the year before.',
      philosophy: null,
      specialty: 'Vegetable platter; grilled sweetfish sushi; the dessert spread.',
      anecdotes: [
        { text: 'May 2018: "The most prominent change was the owner, who had previously kept a low profile while raising her children, was now present in the restaurant."', source: R + 'B339040762/' },
        { text: 'A November 2020 diner meant to take two desserts of eight, "and then they suggested I try a smaller portion of the walnut millefeuille, so I ended up choosing three."', source: R + 'B432297854/' },
        { text: 'January 2024: deep-fried fugu and karasumi at this price felt generous, "however, I was a bit disappointed that the mochi in the ozoni still had a hard center."', source: R + 'B477816753/' },
        { text: '"In Kyoto, there are many places known for delicious grilled mackerel sushi, but this one is my favorite." — June 2026.', source: R + 'B529696903/' },
      ],
      japanese_sources_summary: '食べログ: 修伯 (しゅうはく)、日本料理、東山区金園町392、京阪祇園四条駅7番出口から徒歩15分、火〜日・祝 12:00〜14:00 (L.O. 12:30)・17:30〜20:30 (L.O. 18:30)、月曜休み・不定休、完全予約制、子供可、10席 (カウンター・座敷)、貸切可、禁煙、カード可。アクアディーナ京都版 (日付なし): フレンチで修業した店主の新感覚のフレンチ風京懐石、カウンター中心で割烹風、昼5,250円〜・夜10,500円〜、京野菜の前菜、鰻・フグ、フォアグラ・トリュフ、〆は薪窯炊きごはん、約10種から好きなだけ選べるデザート、月曜・第3日曜休み、夜のみサービス料10%、カード不可、清水道バス停から徒歩5分。口コミ (2018〜2026年、英語): Hisashi Kashiwai の本で知った、前年にミシュランの星、18種の野菜の盛り合わせ、子育て中は表に出なかった店主が店に、締めのすき焼きは好みでない、昼7,000円、稚鮎の焼き寿司、無花果の田楽、丹波栗のモンブラン、胡桃のミルフィーユ、デザートは好きなだけ、雑煮の餅に芯、焼き鯖寿司、土瓶蒸し、かまどのご飯、長野の松茸ご飯。',
      confidence: 'medium', sources: [TB, AQ, R + 'B339040762/', R + 'B432297854/', R + 'B475910681/', R + 'B477816753/', R + 'B500674331/', R + 'B517002238/', R + 'B529696903/', R + 'B537898043/'] },
    cultural_comfort: { level: 'japanese', note: 'Reservations only; a small counter and tatami room.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区金園町392',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking and reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.998638, 135.778629); cross-checked: GSI 京都府京都市東山区金園町392番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B432297854/', R + 'B477816753/'],
    price_note: 'Prices from reviews; the course changes monthly.', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥7,000', 'Course', 'ask', 'no', 'November 2020 and January 2024.', 'kaiseki_course'),
    ] }, {
    cuisine: 'フレンチの発想を取り入れた京懐石。フレンチで修業した店主がカウンターで割烹風に出す (アクアディーナ)・昼のコース7,000円 (2020年11月、2024年1月)、2018年5月は昼10,000円のコース。夜は1万〜1万5千円ほど、2026年10月には3万円台の声 (食べログ、口コミ)・最初は18種ほどの野菜の盛り合わせ (2018年5月)・鮎の焼き寿司、土瓶蒸し、お造り、無花果の白味噌田楽、焼き鯖寿司、長野の松茸ご飯、かまどで炊くご飯 (2018〜2026年の口コミ)・デザートは8種以上から好きなだけ。丹波栗のモンブラン、胡桃のミルフィーユ、最中など (2020〜2025年の口コミ)',
    neighborhood: '東山、八坂の塔の近く。祇園四条駅7番出口から徒歩15分、清水道バス停から徒歩5分',
    gf_detail: '要確認: フグの唐揚げ、無花果の田楽、ミルフィーユやタルト、モンブランなどのデザートがあるフレンチ風の懐石 (2020〜2024年の口コミ)。醤油や小麦はコースのあちこちに入りそう。予約時に伝えて。',
    vegan_detail: 'ヴィーガン不可: 魚、鮎の寿司、鯖寿司、京都牛、フォアグラ、出汁のコース (ガイド、口コミ)。',
    notes: '[懐石・八坂の塔の近く、フレンチ出身、デザートの盛り合わせ] 八坂の塔の近くにあるカウンターと座敷の10席の懐石。店主はフレンチで修業した人で、十数種の野菜の盛り合わせ、鮎の焼き寿司、かまどのご飯、締めはフレンチ寄りの8種以上のデザートから好きなだけ。昼は7,000円ほど。以前の不満の声は、締めのすき焼き (2018年) と正月の雑煮の餅に芯 (2024年)。完全予約制、月曜休み。',
  });
}

// ================================================================ とんかつ豚料理 寿樹
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26037930/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_tonkatsu_juju', name: 'とんかつ豚料理 寿樹 三条神宮道本店 (Tonkatsu Juju)', category: 'OMNI',
    lat: 35.009439, lng: 135.781518, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tonkatsu in bread panko, served with tonkatsu sauce and soy sauce (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork tonkatsu shop; sets come with pork miso soup and meat miso (2026 reviews).',
    hours_raw: 'Tabelog: daily 11:30–15:00 and 17:00–21:00. Low-temperature frying takes 20–30 minutes, stated on the menu (October 2026); waits of about 30 minutes at peak (October 2026). Booking advised; phone is more reliable (Tabelog). 26 table seats; non-smoking, smoking in front of the shop; English menu; children and strollers welcome; cards, e-money and QR (Tabelog). Service charge: none — Tabelog’s Japanese original says 「なし」. Opened 14 July 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Sanjo — 1 min walk east of Higashiyama Stn; near the Kyocera Museum',
    cuisine: 'Tonkatsu fried slowly at low temperature from named pork brands (2026 reviews) · Kyoto pork loin ¥2,500; special Kyoto loin 200 g ¥3,000; Hayashi SPF pork from Chiba, loin 150 g ¥2,700; also Iwachu SPF (Iwate), TOKYO X (Ibaraki), Hakkinton (Iwate) when in stock; loin, tenderloin and Spencer roll (September–October 2026 reviews) · every order a set: rice with one free refill, white-miso tonjiru, meat miso, pickles, cabbage with sesame dressing (October 2026) · seven condiments — tonkatsu sauce, two salts, sesame oil, wasabi, yuzu pepper, mustard (October 2026) · warabi mochi (October 2026)',
    website: null, gmaps: gm('とんかつ豚料理 寿樹 五軒町'), menu_url: null,
    notes: '[Tonkatsu · Higashiyama-Sanjo, low-temperature fried, by pork brand] A tonkatsu shop a minute from Higashiyama Station where you pick the pig — Kyoto brand pork, Hayashi SPF, TOKYO X — and wait 20–30 minutes while it fries slowly at low temperature. Sets of ¥2,500–3,000 with white-miso tonjiru and seven condiments. Gripes: a strong frying-oil smell that stays on clothes (September 2026), and a lukewarm crust for one diner (October 2026). English menu. Open daily.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 14 July 2022 (Tabelog). Reviewers in 2026 describe a shop of two tables for two and five for four, a menu that names each pork brand and farm, a note that low-temperature frying takes 20–30 minutes, and a menu sheet crediting its suppliers: an organic Kyoto sauce, panko made from in-house bread, a Kyoto soy sauce, cold-pressed sesame oil from Nantan, salt from Kyotango, rice from Koka in Shiga, and white miso from an old Miyagawacho shop.',
      philosophy: null,
      specialty: 'Low-temperature tonkatsu; Kyoto brand pork loin.',
      anecdotes: [
        { text: '"I was bothered by the strong smell of frying oil that lingered while I was in the restaurant. Even after leaving, my clothes smelled like oil." — September 2026.', source: R + 'B536496438/' },
        { text: 'A September 2026 diner came back two weeks later for dinner and found less meat miso, less pepper and the pork rarer than at lunch — "a bit disappointed this time."', source: R + 'B535627236/' },
        { text: 'An October 2026 diner praised a staff member as "very charming, attentive," with a voice so gentle "I found myself thinking, \'Maybe I should order another serving\' (laughs)."', source: R + 'B536585227/' },
        { text: 'A first-timer in October 2026 found the light-coloured crust not piping hot — "for a hungry girl like me, it felt a bit too upscale."', source: R + 'B536804311/' },
      ],
      japanese_sources_summary: '食べログ: とんかつ豚料理 寿樹 三条神宮道本店 (Juju)、とんかつ・しゃぶしゃぶ、東山区五軒町117、地下鉄東西線東山駅から東へ徒歩1分、毎日 11:30〜15:00・17:00〜21:00、予約は早めに・電話が確実、テーブル26席、禁煙 (店の前で喫煙可)、英語メニュー、子供・ベビーカー可、カード・電子マネー・QR可、サービス料は原文で「なし」、2022年7月14日オープン。口コミ (2026年8月〜10月、英語): 低温でじっくり揚げるので20〜30分、京都のブランド豚、林SPFポーク (千葉)、岩手の SPF 豚、TOKYO X、Hakkinton、京都ポークロース2,500円、京都特選ロース200g 3,000円、林SPFポーク ロース150g 2,700円、ご飯はおかわり1回無料、白味噌の豚汁、肉味噌、漬物、キャベツに胡麻ドレッシング、7種の薬味、わらび餅、揚げ油の匂いが服に残る、夜は肉味噌が少なめ、女性スタッフの丁寧な接客。',
      confidence: 'medium', sources: [TB, R + 'B534681597/', R + 'B534889025/', R + 'B535231062/', R + 'B535627236/', R + 'B536496438/', R + 'B536585227/', R + 'B536802117/', R + 'B536804311/', R + 'B538398144/', R + 'B538473085/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu; expect a 20–30 minute wait for the frying.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区五軒町117',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009439, 135.781518); cross-checked: GSI 京都府京都市東山区五軒町117番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535231062/', R + 'B536802117/', R + 'B536804311/'],
    price_note: 'Prices from September–October 2026 reviews; sets include rice, tonjiru and cabbage.', last_checked: TODAY, items: [
      it('', '', 'Kyoto pork loin set', '¥2,500', 'Tonkatsu', 'no', 'no', 'October 2026.', 'tonkatsu'),
      it('', '', 'Special Kyoto pork loin set (200 g)', '¥3,000', 'Tonkatsu', 'no', 'no', 'September 2026.', 'tonkatsu'),
      it('林SPFポーク ロース(150g)', '', 'Hayashi SPF pork loin set (150 g, Chiba)', '¥2,700', 'Tonkatsu', 'no', 'no', 'October 2026.', 'tonkatsu'),
    ] }, {
    cuisine: 'ブランド豚を低温でじっくり揚げるとんかつ (2026年の口コミ)・京都ポークロース2,500円、京都特選ロース200g 3,000円、林SPFポーク (千葉) ロース150g 2,700円。入荷があれば岩手の SPF 豚、TOKYO X (茨城)、Hakkinton (岩手) も。ロース、ヒレ、スペンサーロール (2026年9〜10月の口コミ)・すべて定食で、ご飯 (おかわり1回無料)、白味噌の豚汁、肉味噌、漬物、胡麻ドレッシングのキャベツ付き (2026年10月)・薬味は7種。とんかつソース、2種の塩、胡麻油、わさび、柚子胡椒、からし (2026年10月)・わらび餅 (2026年10月)',
    neighborhood: '三条神宮道、東山。東山駅から東へ徒歩1分。京セラ美術館の近く',
    gf_detail: 'グルテンフリーではない: パン粉のとんかつに、とんかつソースや醤油 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 豚のとんかつ店。定食には豚汁と肉味噌が付く (2026年の口コミ)。',
    notes: '[とんかつ・三条神宮道、低温揚げ、豚の銘柄を選ぶ] 東山駅から1分のとんかつ店。京都のブランド豚、林SPFポーク、TOKYO X などから豚を選び、低温でじっくり揚げるので20〜30分待つ。定食は2,500〜3,000円で、白味噌の豚汁と7種の薬味付き。不満の声は、服に残る揚げ油の匂い (2026年9月) と、衣が熱々でなかったという声 (2026年10月)。英語メニューあり。無休。',
  });
}

// ================================================================ エール新町 (Ailes)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020734/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.kyoto-restaurant.jp/';
  const H = day(['11:30', '14:15'], ['17:30', '22:00']);
  put({
    id: 'kyoto_ailes_shinmachi', name: 'エール新町 (Ailes Shinmachi)', category: 'OMNI',
    lat: 35.001579, lng: 135.756818, cuisine_type: 'french',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pâté en croûte, a millefeuille-style starter, onion gratin soup, baguette refills and cakes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: French courses of terrines, fish, duck, lamb, pork and wagyu (official site; 2026 reviews).',
    hours_raw: 'Official site: lunch 11:30–14:15 (last order 13:15), dinner 17:30–22:00 (last order 20:00); closed Wednesday (irregular in December). Tabelog adds 2–4 other closed days a month. Courses only, one per person; no children of primary-school age or younger, and no guests who do not order a course (official site; Tabelog says under 10). Same-day cancellations or changes are charged 100% (official site). 30 table seats, private room for 6 (guarantee ¥20,000 lunch / ¥30,000 dinner), parties up to 50; non-smoking with a smoking spot in front; wheelchair accessible; cards (Visa, Master, JCB, Amex, Diners) and PayPay (official site; Tabelog) — though a July 2026 diner noted "they only accept cash." Service charge: none — Tabelog’s Japanese original says 「頂いておりません」. Opened 2 July 2012 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A brick building near Shijo-Karasuma — 3–4 min walk from Shijo Stn',
    cuisine: 'Classic French courses with Kyoto vegetables and seasonal seafood (official site) · courses, tax included: a weekday prix-fixe lunch ¥3,000 (green salad, soup, main, dessert, bread, coffee); prix-fixe courses ¥4,000 and ¥5,000; chef’s omakase ¥6,500 (amuse, hors d’oeuvre, soup, grilled abalone, kuroge wagyu, dessert); a ¥12,000 omakase at Shinmachi only; course-plus-drink plans (official site) · Fleur lunch with a drink ¥3,600 (August 2026) · seen: pâté en croûte, vichyssoise, burdock potage, seafood gâteau on grilled eggplant, mussels, sea bass, herb-crusted pork, duck, lamb stew, a hamburg steak, 100 g kuroge wagyu upgrade, matcha mousse (2026 reviews) · birthday and anniversary courses (official site)',
    website: SITE + 'shinmachi.html', gmaps: gm('エール新町 船鉾町'), menu_url: SITE + 'menu.html',
    notes: '[French · Shijo-Karasuma, a brick building with a French flag] A thirty-seat French dining room in a retro brick building with a French flag, sister to the original Ailes in Muromachi (2005). Prix-fixe courses from ¥3,000 at weekday lunch to a ¥6,500 chef’s omakase — terrines, sea bass, duck, lamb stew, with baguette refills. 2026 diners keep calling it rare value for Kyoto. Courses only; no young children; 100% same-day cancellation. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; run by 株式会社エール (president 太田 篤), which also runs Ailes Muromachi'], origin: null,
      background: 'Per the official site: Ailes — imagined as "La table des anges", the angels’ table — opened in Muromachi-Oike in September 2005; today it runs two restaurants, the second being Ailes Shinmachi near Shijo-Karasuma, an at-home but serious French restaurant with diners from the neighbourhood and far away. The company, 株式会社エール (20 staff), also does catering, take-out, delicatessen and an online shop started for regulars who moved away. The Shinmachi shop opened 2 July 2012 (Tabelog).',
      philosophy: 'Official site: to obey the law in handling food, waste no food, and judge by what is good and kind to people and the planet.',
      specialty: 'Prix-fixe French lunch; pâté en croûte.',
      anecdotes: [
        { text: '"The cost performance is also quite rare in Kyoto" — though the private room for six "was a bit small." — June 2026.', source: R + 'B530876150/' },
        { text: 'A September 2026 first-timer was tempted to go all out, "but my companion suggested, \'This is more than enough,\'" and took the recommended lunch.', source: R + 'B536032806/' },
        { text: 'August 2026: the baguette came with refills; "the fluffy white bread was even tastier, but it seems that one wasn’t available for refills."', source: R + 'B533853121/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-restaurant.jp): Ailes (エール)、「天使たちの食卓」をイメージして2005年9月に室町御池で開業、現在は四条烏丸の Ailes 新町と2店舗、アットホームな本格フレンチ、株式会社エール (中京区橋本町、代表取締役社長 太田 篤、従業員20名、飲食・ケータリング・物販)、新町店は下京区船鉾町400、ランチ11:30〜14:15 (L.O. 13:15)、ディナー17:30〜22:00 (L.O. 20:00)、水曜休み (12月は不定休)、カード可、四条駅から徒歩4分、レンガ作りのレトロな建物にフランス国旗、京野菜と旬の魚介、平日のプリフィクスのランチ3,000円、プリフィックス4,000円・5,000円、シェフお任せ6,500円 (鮑のグリル、黒毛和牛のポワレ)、新町店のみのスペシャリテ12,000円、税込、人数分のコースを注文、小学生以下とコースを頼まない客は不可、当日のキャンセル・変更は100%。食べログ: フレンチ・イタリアン、30席、個室6名 (保証金 昼2万円・夜3万円)、宴会50名、禁煙 (店頭に喫煙所)、車椅子可、PayPay可、サービス料は原文で「頂いておりません」、10歳未満不可、2012年7月2日オープン、水曜と月2〜4日休み。口コミ (2026年6月〜10月): パテ・アン・クルート、ヴィシソワーズ、ごぼうのポタージュ、焼き茄子の上の魚介のガトー、ムール貝、スズキのポワレ、香草パン粉の豚、鴨、仔羊の煮込み、ハンバーグ、黒毛和牛100gへの変更、オニオングラタンスープ、フルールコース ドリンク付き3,600円、バゲットはおかわり可、個室は少し狭い、京都では珍しいコスパ、現金のみという声も。',
      confidence: 'high', sources: [SITE, SITE + 'shinmachi.html', SITE + 'thought.html', SITE + 'menu.html', TB, R + 'B529972601/', R + 'B530876150/', R + 'B531523402/', R + 'B532367570/', R + 'B533853121/', R + 'B534494965/', R + 'B536032806/', R + 'B536294534/', R + 'B537918046/', R + 'B537997487/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Prix-fixe courses explained at the table; courses only, no young children.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区船鉾町400',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live with current courses; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.001579, 135.756818); cross-checked: GSI 京都府京都市下京区船鉾町400番地 (lot) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu.html', R + 'B536294534/'],
    price_note: 'Official site, tax included; one course per person.', last_checked: TODAY, items: [
      it('', '', 'Weekday prix-fixe lunch (salad, soup, main, dessert, bread, coffee)', '¥3,000', 'Course', 'no', 'no', 'Official site; weekdays only.', 'set_course'),
      it('フルールコース・プリフィックス', '', 'Fleur prix-fixe course', '¥4,000', 'Course', 'no', 'no', 'Official site; ¥3,600 with a drink at lunch in August 2026.', 'set_course'),
      it('', '', 'Chef’s omakase (amuse, hors d’oeuvre, soup, grilled abalone, kuroge wagyu, dessert)', '¥6,500', 'Course', 'no', 'no', 'Official site.', 'set_course'),
      it('', '', 'Shinmachi-only chef’s omakase', '¥12,000', 'Course', 'no', 'no', 'Official site.', 'set_course'),
    ] }, {
    cuisine: '京野菜と旬の魚介を使うクラシックなフレンチのコース (公式サイト)・税込のコース: 平日のプリフィクスのランチ3,000円 (グリーンサラダ、スープ、メイン、デザート、パン、食後の飲み物)、プリフィックス4,000円・5,000円、シェフお任せ6,500円 (アミューズ、オードブル、スープ、鮑のグリル、黒毛和牛、デザート)、新町店のみのお任せ12,000円、ドリンク付きのプランも (公式サイト)・2026年8月はフルールコースのドリンク付きランチ3,600円・口コミではパテ・アン・クルート、ヴィシソワーズ、ごぼうのポタージュ、焼き茄子に魚介のガトー、ムール貝、スズキ、香草パン粉の豚、鴨、仔羊の煮込み、ハンバーグ、黒毛和牛100gへの変更、抹茶のムース (2026年)・誕生日・記念日のコース (公式サイト)',
    neighborhood: '四条烏丸近くのレンガの建物。四条駅から徒歩3〜4分',
    gf_detail: 'グルテンフリーではない: パテ・アン・クルート、ミルフィーユ仕立ての前菜、オニオングラタンスープ、おかわりできるバゲット、ケーキ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: テリーヌ、魚、鴨、仔羊、豚、黒毛和牛のフレンチのコース (公式サイト、2026年の口コミ)。',
    notes: '[フレンチ・四条烏丸、フランス国旗のレンガの建物] フランス国旗が目印のレトロなレンガの建物にある30席のフレンチ。2005年に室町で始まったエールの2号店。平日ランチのプリフィクス3,000円から6,500円のシェフお任せまで、テリーヌ、スズキ、鴨、仔羊の煮込みなど。バゲットはおかわり可。2026年の口コミでは京都では珍しいコスパという声が多い。コースのみ、小学生以下は不可、当日キャンセルは100%。水曜休み。',
  });
}

save();
