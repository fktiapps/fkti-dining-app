// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 20.
//   + まつおか Matsuoka (eight-seat Japanese counter on Matsubara by Miyagawa-cho; since 2012)
//   + 浜町 Hamacho (Kyoto-style izakaya and courses by the Takase River at Kiyamachi-Sanjo; about 25 years)
//   + 食 京都小川生薬 RESTAURANT (herbal-tea breakfast courses by Nijo Castle, from an herbal-medicine maker; since 2024)
//   + 漬け野菜 イソイズム Tsukeyasai Isoism (pickled-vegetable dining of the 五十家 group near Kyoto Station; since 2016)
//   - 松屋 三条木屋町店 (26006834) and いづう ジェイアール京都伊勢丹店 (26040722): skipped (reasons below).
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane ids 26020154, 26006834 (skipped), 26001176;
//   from `next notable 200`: 26040836, 26040722 (skipped), 26027678. None of the four is in data/kyoto.json: grep by name
//   (まつおか/Matsuoka, 浜町/Hamacho, 小川生薬/Ogawa, イソイズム/Isoism) and address (弓矢町25, 恵比須町448, 二条油小路町272,
//   中居町114) found none.
//   Same-name count (Greg's Samboa ruling): まつおか and 京都小川生薬 single shops. 浜町 has one sister, 先斗町 よし菜 (official
//   site), not in data. イソイズム belongs to the local 五十家 group of differently named shops (coordinator's ruling,
//   2026-11-05; 炭棲堂 already drafted). Service charges checked against Tabelog's Japanese original: none listed for the four;
//   浜町 charges ¥300 a head for private rooms (Tabelog).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26006834', '松屋 三条木屋町店: a same-name chain — 牛めし「松屋」 of 株式会社松屋フーズ, which had 1,408 shops in Japan and 37 abroad across 12 brands as of November 2025 (Mynavi company page, read 2026-11-05)');
skip('26040722', 'いづう ジェイアール京都伊勢丹店: a same-concept branch of a brand already in data — a takeaway sushi counter of いづう, whose Gion main shop is kyoto_izuu');

// ================================================================ まつおか
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26020154/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_matsuoka_matsubara', name: 'まつおか (Matsuoka)', category: 'OMNI',
    lat: 34.998578, lng: 135.771606, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Traditional Japanese courses and à la carte built on dashi, with fried dishes (whole fried goby, fried rockfish bones) included; no gluten information (2023–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood courses on dashi (2023–2025 reviews).',
    hours_raw: '17:00–24:00; closed Wednesday; hours may change (Tabelog). Reservations accepted (Tabelog). Cards: JCB, AMEX, Diners; no e-money or QR (Tabelog). 8 counter seats; a private room with a garden view, by request (Tabelog; June 2023). Designated smoking area (Tabelog). Takeaway available (April 2024). On Matsubara-dori west of Yamato-oji, just east of Miyagawa-cho, 387 m from Kiyomizu-Gojo Stn (Tabelog; August 2024). Opened 26 April 2012 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Matsubara-dori by Miyagawa-cho — 387 m from Keihan Kiyomizu-Gojo Stn',
    cuisine: 'Traditional Japanese cooking, omakase or à la carte, built on good dashi and seafood (2023–2025 reviews) · hairy crab, summer hamo, salt-grilled sea bream, Kyoto matsutake (2017–2023 reviews) · live rockfish as sashimi with its liver, the bones fried; a spring Hanakansho hot pot (April 2024) · dengaku, hamo and matsutake soup, grilled nodoguro, rice porridge with seaweed (August 2024) · namerou, uzaku, dashimaki and ochazuke to finish (February 2024) · salted sea bream and fried goby to take away (April 2024) · sake, shochu, wine (Tabelog)',
    website: null, gmaps: gm('まつおか 京都 松原 弓矢町'), menu_url: null,
    notes: '[Japanese · Miyagawa-cho, an eight-seat counter for seafood] A quiet counter on Matsubara just east of the Miyagawa-cho geisha quarter, with a garden-view private room on request. Order omakase or à la carte: rockfish carved live into sashimi, grilled nodoguro, hamo and matsutake soup in late summer, the spring Hanakansho hot pot, and dashimaki or ochazuke to finish. Not cheap — ¥15,000–30,000 a head in reviews — and one 2025 diner felt pushed toward pricey items. Open to midnight; closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'Tabelog gives the opening as 26 April 2012. Reviewers describe faithful traditional Japanese cooking; a 2017 diner came for a meal with geisha.',
      philosophy: null, specialty: 'Hanasansho hot pot; grilled nodoguro.',
      anecdotes: [
        { text: 'An April 2024 regular comes every year for the Hanakansho hot pot, and this time watched a live rockfish turned into sashimi, its liver served and its bones fried.', source: R + 'B448079895/' },
        { text: 'A November 2025 couple spent ¥56,000 for two and felt the chef kept recommending expensive items and talked so much that there was little time to savour the food.', source: R + 'B518586030/' },
      ],
      japanese_sources_summary: '食べログ: まつおか、日本料理、東山区松原通大和大路西入ル弓矢町25、清水五条駅から387m、17:00〜24:00、水曜休み、予約可、カード (JCB、AMEX、Diners)、8席、個室あり (要相談)、分煙、2012年4月26日オープン。口コミ (2017〜2025年、英語): 宮川町の東、伝統的な日本料理、毛蟹、鱧、鯛の塩焼き、松茸、生きたロックフィッシュの造り、Hanakansho の鍋、のどぐろの焼き物、なめろう、うざく、だし巻き、お茶漬け、持ち帰り (塩をした鯛、ハゼの唐揚げ)、1人15,000〜30,000円。',
      confidence: 'low', sources: [TB, R + 'B197638877/', R + 'B237913962/', R + 'B448079895/', R + 'B467097178/', R + 'B470437811/', R + 'B471988057/', R + 'B490993418/', R + 'B514553714/', R + 'B517383352/', R + 'B518586030/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; à la carte prices add up; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区松原通大和大路西入ル弓矢町25',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing; the latest reviews read date from October and November 2025.' },
    pin_source: `Tabelog ${TB} (34.998578, 135.771606); cross-checked: GSI 京都府京都市東山区弓矢町25番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518586030/'],
    price_note: 'No menu or dish prices read; reviewers report ¥15,000–30,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Hanakansho hot pot (spring)', '', 'Seasonal', 'ask', 'no', 'April 2024; price not given.', 'hanakansho_nabe'),
      it('', '', 'Grilled nodoguro', '', 'Grill', 'ask', 'no', 'August 2024; price not given.', 'nodoguro_yaki'),
    ] }, {
    cuisine: '出汁と魚介の伝統的な日本料理、おまかせかアラカルト (2023〜2025年の口コミ)・毛蟹、夏の鱧、鯛の塩焼き、京都の松茸 (2017〜2023年の口コミ)・生きたロックフィッシュの造りと肝、骨の唐揚げ、春のHanakansho の鍋 (2024年4月)・田楽、鱧と松茸の椀、のどぐろの焼き物、海苔の雑炊 (2024年8月)・なめろう、うざく、締めのだし巻きとお茶漬け (2024年2月)・持ち帰りの塩をした鯛やハゼの唐揚げ (2024年4月)・日本酒、焼酎、ワイン (食べログ)',
    neighborhood: '宮川町そばの松原通。京阪清水五条駅から387m',
    gf_detail: '要確認。出汁を軸にした伝統的な日本料理のコースとアラカルト。ハゼの唐揚げや骨の唐揚げなど揚げ物も。グルテンの情報はない (2023〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。出汁と魚介のコース (2023〜2025年の口コミ)。',
    notes: '[日本料理・宮川町、8席のカウンターで魚介] 宮川町の東、松原通の静かなカウンター。庭の見える個室も相談できる。おまかせかアラカルトで、目の前でさばく生きたロックフィッシュの造り、のどぐろの焼き物、晩夏の鱧と松茸の椀、春のHanakansho の鍋、締めのだし巻きやお茶漬け。口コミでは1人15,000〜30,000円と高めで、2025年には高い品を勧められすぎたという声も。深夜0時まで、水曜休み。',
  });
}

// ================================================================ 浜町
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001176/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://hamachodesu.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_hamacho_kiyamachi', name: '浜町 (Hamacho)', category: 'OMNI',
    lat: 35.009268, lng: 135.770112, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kyoto-style dishes of fish, sesame tofu, yuba, nama-fu (wheat gluten) and obanzai, with fried items such as shrimp-gyoza spring rolls, croquettes and fried yuba; no gluten information (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; the menu is mostly fish and meat on dashi (Tabelog; 2026 reviews).',
    hours_raw: 'Official site: 17:00–23:00, irregular closures (8 November 2026 announced); lunch 12:00–15:00 by reservation only, courses only. Tabelog lists 12:00–15:00 and 17:00–23:00 daily. Reservations from 12:30 (official site). Private rooms ¥300 a head (Tabelog). Cards, e-money and QR accepted (Tabelog). 100 seats over three floors: counter and semi-private rooms on the first, a bar counter and sunken kotatsu on the second, private rooms on the third; groups up to 55 (Tabelog; April 2026). Non-smoking; children welcome (Tabelog). English site. By the Takase River, first lane north of Sanjo on Kiyamachi, west side; 3 min from Keihan Sanjo, 2 min from Shiyakusho-mae (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Sanjo, by the Takase River — 3 min from Keihan Sanjo Stn',
    cuisine: 'Kyoto-style izakaya and kaiseki courses with a daily-changing à la carte menu of about 100 dishes (official site; April 2026) · monthly omakase course ¥5,000; autumn courses ¥7,000 and ¥9,000; banquet course ¥3,500; all-you-can-drink plans (official site; 2026 reviews) · fresh sashimi — hamachi, saba, shima-aji, hirame, tai, needle squid (October 2026) · sesame tofu, yuba, nama-fu, Kyoto vegetables, obanzai, shibazuke salad (official site; June 2026) · specialty tsukune, shrimp-gyoza spring rolls, grilled hamachi collar, pork kakuni, scallop gratin croquettes (2026 reviews) · sea bream rice with yuba sauce ¥700, spinach and shirasu ohitashi ¥650 (September 2026) · over 15 local sakes (official site)',
    website: SITE, gmaps: gm('浜町 木屋町三条 京都'), menu_url: SITE,
    notes: '[Izakaya · Kiyamachi-Sanjo, Kyoto dishes by the Takase River] A long-running, three-storey izakaya beside the Takase River just north of Sanjo, with counter seats, sunken-kotatsu rooms and private rooms for groups. The daily menu runs to about a hundred dishes — sashimi of the day, sesame tofu, yuba and nama-fu, specialty tsukune, shrimp-gyoza spring rolls — or take a monthly omakase course from ¥5,000. Over fifteen local sakes. Reviews of the banquet courses are mixed. Open 17:00–23:00; lunch by reservation.',
    chef_bio: { chef_name: null, roles: ['Operated by 株式会社 四季企画 (official site)'], origin: null,
      background: 'Per the official site: run by 株式会社 四季企画, with a sister restaurant, 先斗町 よし菜; a February 2025 blog post marks new noren for the entrance, the first in 25 years since opening.',
      philosophy: 'Kyoto flavour and the tastes of the four seasons (official site).', specialty: 'Sashimi of the day; tsukune; shrimp-gyoza spring rolls.',
      anecdotes: [
        { text: 'A June 2026 couple who stop in on every Kyoto trip were pleased to be remembered by the staff, and never tire of watching the cooks cut sashimi at the counter.', source: R + 'B480035538/' },
        { text: 'A May 2026 banquet guest found drinks slow, the sashimi pieces small and the tsukune and spring rolls only average.', source: R + 'B528182781/' },
        { text: 'A September 2026 diner on a fifth dinner of the day came in at 20:41 just for the ¥700 sea bream rice with yuba sauce.', source: R + 'B535321412/' },
      ],
      japanese_sources_summary: '公式サイト: 四季の味 京都 浜町、中京区河原町通三条上ル恵比須町448-2 (木屋町通三条上ル1筋目西入ル南側、高瀬川畔)、17:00〜23:00、不定休 (2026年11月8日休み)、昼は予約・コースのみ、霜月の月替りおまかせコース5,000円、秋の味覚満喫コース7,000円、秋の京風会席コース9,000円、お得宴会コース3,500円、日替わりの単品、胡麻豆腐、湯葉、生麩、京野菜、おばんざい、地酒15種類以上、姉妹店「先斗町 よし菜」、運営は株式会社 四季企画、開店以来25年ぶりに暖簾を新調 (2025年2月)。食べログ: 100席、個室料1人300円、カード・電子マネー・QR可、禁煙、ベジタリアン対応、子ども可。口コミ (2026年、英語): 刺身、つくね、海老餃子春巻、はまちのかま焼き、湯葉あんかけの鯛ご飯700円、飲み放題付きのコース。',
      confidence: 'medium', sources: [TB, SITE, R + 'B386753243/', R + 'B464668671/', R + 'B480035538/', R + 'B526889901/', R + 'B527342447/', R + 'B528182781/', R + 'B531450404/', R + 'B532072207/', R + 'B535321412/', R + 'B537225929/'] },
    cultural_comfort: { level: 'english', note: 'English site; private rooms ¥300 a head; good for groups.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区木屋町三条上ル恵比須町448-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (menu updated 5 November 2026) and Tabelog; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009268, 135.770112); cross-checked: GSI 京都府京都市中京区恵比須町448番地 (lot) 54m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B535321412/'],
    price_note: 'Course prices from the official site, November 2026; à la carte prices from a September 2026 review.', last_checked: TODAY, items: [
      it('月替りおまかせコース', '', 'Monthly omakase course', '¥5,000', 'Courses', 'ask', 'no', 'Official site, November 2026.', 'omakase_monthly'),
      it('秋の味覚満喫コース', '', 'Autumn flavours course', '¥7,000', 'Courses', 'ask', 'no', 'Official site.', 'autumn_course'),
      it('秋の京風会席コース', '', 'Autumn Kyoto-style kaiseki course', '¥9,000', 'Courses', 'ask', 'no', 'Official site.', 'kaiseki_course'),
      it('お得宴会コース', '', 'Banquet course', '¥3,500', 'Courses', 'ask', 'no', 'Official site.', 'banquet_course'),
      it('', '', 'Sea bream rice with yuba sauce', '¥700', 'Rice', 'ask', 'no', 'September 2026.', 'tai_yuba_meshi'),
    ] }, {
    cuisine: '京風の居酒屋と会席のコース、日替わりの単品は約100品 (公式サイト、2026年4月)・月替りおまかせコース5,000円、秋のコース7,000円と9,000円、宴会コース3,500円、飲み放題も (公式サイト、2026年の口コミ)・刺身: はまち、さば、しまあじ、ひらめ、鯛、針いか (2026年10月)・胡麻豆腐、湯葉、生麩、京野菜、おばんざい、しば漬けのサラダ (公式サイト、2026年6月)・名物のつくね、海老餃子春巻、はまちのかま焼き、豚の角煮、帆立のグラタンコロッケ (2026年の口コミ)・湯葉あんかけの鯛ご飯700円、ほうれん草としらすのおひたし650円 (2026年9月)・地酒15種類以上 (公式サイト)',
    neighborhood: '三条の北の木屋町、高瀬川沿い。京阪三条駅から徒歩3分',
    gf_detail: '要確認。魚、胡麻豆腐、湯葉、生麩 (小麦グルテン)、おばんざいなどの京料理。海老餃子春巻、コロッケ、揚げ湯葉など揚げ物も。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにベジタリアン対応の記載。料理の多くは出汁と魚や肉 (食べログ、2026年の口コミ)。',
    notes: '[居酒屋・木屋町三条、高瀬川沿いの京の味] 三条のすぐ北、高瀬川沿いの3階建ての老舗居酒屋。カウンター、掘りごたつ、宴会向けの個室がある。日替わりの約100品から、その日の刺身、胡麻豆腐、湯葉や生麩、名物のつくね、海老餃子春巻を。月替りのおまかせコースは5,000円から。地酒は15種類以上。宴会コースの評価は分かれる。17時〜23時、昼は予約のみ。',
  });
}

// ================================================================ 食 京都小川生薬 RESTAURANT
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26040836/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kyoto-ogawa.jp/';
  const HW = day(['08:00', '13:30']); const HE = day(['07:30', '15:00']);
  put({
    id: 'kyoto_ogawa_shoyaku_restaurant', name: '食 京都小川生薬 RESTAURANT (Shoku Kyoto Ogawa Shoyaku Restaurant)', category: 'OMNI',
    lat: 35.012432, lng: 135.753558, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Breakfast courses with yudofu, nama-fu (wheat gluten), Handa somen (wheat), granola and small plates; the herbal soup curry is not described for gluten (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses include Agu pork or duck shabu-shabu, dashi broth, yogurt, anago and egg (2026 reviews).',
    hours_raw: 'Official site and Tabelog: 8:00–13:30 on weekdays; 7:30–15:00 on weekends and holidays. Reservations only, all guests start together, 90-minute sessions; a no-show after 15 minutes may be cancelled (Tabelog). A medicinal herbal soup curry was sold by meal ticket at lunch in June–July 2026. Cards accepted; no e-money or QR (Tabelog). 20 seats along a 12 m counter, with semi-private rooms for 4–6 (official site; Tabelog). Non-smoking; wheelchair accessible; children welcome, kids’ menu (Tabelog). English menu (Tabelog). Second floor; a café on the first floor and a one-group villa above (official site). 5 min from Nijojo-mae Stn (official site). Opened 6 April 2024 (Tabelog).',
    hours: { 0: HW, 1: HW, 2: HW, 3: HW, 4: HW, 5: HE, 6: HE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Aburanokoji near Nijo Castle — 5 min from Nijojo-mae Stn',
    cuisine: 'Breakfast courses built around herbal teas from the 小川生薬 herbal-medicine house (official site; 2026 reviews) · seasonal course ¥5,500 (July–August 2026): mulberry-leaf tea, yogurt with barley granola and kuromoji, rich yudofu, a hot pot of Agu pork or domestic duck, vintage 1996 pu-erh, a long plate of Kyoto small dishes (sesame tofu with nama-fu, eggplant with anago, marinated tuna, yuba with sansho), white or mixed-grain rice with refills, Handa somen with karasumi or sudachi, kuromoji gelato · add-ons: dashimaki with yellow chives, grilled rice balls for chazuke, a burdock cocktail (October 2026) · medicinal herbal soup curry of 100 herbs with three chutneys (June–July 2026) · several refillable health teas (2026 reviews)',
    website: SITE, gmaps: gm('京都小川生薬 レストラン 二条城'), menu_url: null,
    notes: '[Breakfast · Nijo Castle, an herbal-tea morning course] A bright second-floor counter, 12 m long, near Nijo Castle, run by an herbal-medicine house, that turns breakfast into a gentle course: mulberry-leaf tea, granola yogurt with kuromoji, creamy yudofu, a small hot pot of duck or Agu pork, a long plate of Kyoto small dishes and Handa somen with karasumi (¥5,500 in 2026). Refillable herbal teas throughout. Reservations only, from 7:30 at weekends; 90-minute sittings.',
    chef_bio: { chef_name: null, roles: ['Run by the herbal-medicine maker 小川生薬 (official site; August 2026 review)'], origin: null,
      background: 'Per the official site: the 京都小川生薬 building has a first-floor café pairing health teas with sweets, this second-floor restaurant, and a one-group villa on the third floor. Tabelog gives the opening as 6 April 2024. An August 2026 reviewer notes the teas as the hospitality of an herbal-medicine manufacturer.',
      philosophy: 'To be the place in central Kyoto closest to nature and health, through drink, food and lodging (official site).', specialty: 'Herbal-tea breakfast course; karasumi Handa somen.',
      anecdotes: [
        { text: 'A June 2026 passer-by was drawn in by a sign for herbal soup curry, got the last serving before 2 p.m., and only at home found the place already saved on Tabelog for its breakfast course.', source: R + 'B529394187/' },
        { text: 'An October 2026 guest at the 7:30 sitting thought the karasumi somen the best dish but wished for a full portion, and finished with grilled rice balls in broth from the hot pot.', source: R + 'B537812840/' },
      ],
      japanese_sources_summary: '公式サイト: 京都小川生薬、中京区油小路通押小路上る二条油小路町272、2F レストラン、カウンター中心の20席 (12mのカウンター)、半個室、完全予約制、自然の恵みを取り入れたコース仕立ての朝食、平日8:00〜13:30、土日祝7:30〜15:00、1F カフェ (健康茶とお茶菓子)、3F は一日一組の宿泊。食べログ: 90分制、一斉スタート、カード可、禁煙、車椅子可、子ども可、英語メニュー、2024年4月6日オープン。口コミ (2026年、英語): 季節のコース5,500円、桑の葉茶、大麦グラノーラのヨーグルト、湯豆腐、アグー豚や国産鴨のしゃぶしゃぶ、1996年のプーアル茶、京のおばんざい、からすみの半田そうめん、黒文字のジェラート、100種の生薬のスープカレー。',
      confidence: 'medium', sources: [TB, SITE, R + 'B529394187/', R + 'B530570058/', R + 'B530613989/', R + 'B530846642/', R + 'B531520581/', R + 'B532016536/', R + 'B532349501/', R + 'B533053225/', R + 'B533664811/', R + 'B537812840/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); reservations only, fixed start times; wheelchair accessible.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区油小路通押小路上る二条油小路町272 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news through 4 November 2026) and Tabelog; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.012432, 135.753558); cross-checked: GSI 京都府京都市中京区二条油小路町272番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532349501/', R + 'B533664811/'],
    price_note: 'No menu read; course price from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal breakfast course (herbal teas, yudofu, hot pot, small dishes, rice, somen, gelato)', '¥5,500', 'Courses', 'no', 'no', 'July–August 2026; somen and nama-fu are wheat.', 'breakfast_course'),
    ] }, {
    cuisine: '生薬の小川生薬の健康茶を軸にした朝食のコース (公式サイト、2026年の口コミ)・季節のコース5,500円 (2026年7〜8月): 桑の葉茶、大麦グラノーラと黒文字のヨーグルト、濃厚な湯豆腐、アグー豚か国産鴨の小鍋、1996年のヴィンテージのプーアル茶、京の小皿の長皿 (生麩の白胡麻豆腐、なすと穴子、まぐろの漬け、湯葉の山椒)、白米か雑穀米のおかわり、からすみやすだちの半田そうめん、黒文字のジェラート・追加: 黄にらのだし巻き、お茶漬け用の焼きおにぎり、ごぼうのカクテル (2026年10月)・100種の生薬のスープカレーと3種のチャツネ (2026年6〜7月)・おかわりできる健康茶が数種 (2026年の口コミ)',
    neighborhood: '二条城近くの油小路通。二条城前駅から徒歩5分',
    gf_detail: '要確認。朝食のコースに湯豆腐、生麩 (小麦グルテン)、半田そうめん (小麦)、グラノーラ、小皿。生薬のスープカレーのグルテンの説明はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。アグー豚や鴨のしゃぶしゃぶ、出汁、ヨーグルト、穴子、卵 (2026年の口コミ)。',
    notes: '[朝食・二条城、生薬の健康茶の朝のコース] 二条城近く、生薬の会社が営む明るい2階の12mのカウンター。朝食をやさしいコースに仕立てる。桑の葉茶、黒文字のグラノーラヨーグルト、濃厚な湯豆腐、鴨かアグー豚の小鍋、京の小皿の長皿、からすみの半田そうめん (2026年に5,500円)。健康茶はおかわり自由。完全予約制、週末は7時半から、90分制。',
  });
}

// ================================================================ 漬け野菜 イソイズム
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26027678/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://isoism.isozumi.jp/';
  const H = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'kyoto_tsukeyasai_isoism', name: '漬け野菜 イソイズム (Tsukeyasai Isoism)', category: 'OMNI',
    lat: 34.98937, lng: 135.758987, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Pickled-vegetable plates, dashimaki, clay-pot rice and grills; fried yuba rolls and a meat-wrapped cutlet with demi-glace are not gluten-free; soy koji used as a topping (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Twelve kinds of pickled vegetables lead the menu, but the plate comes topped with duck, chicken or cheese, the soup and rice use fish and dashi, and the vegetable dishes are not described as plant-only (2026 reviews).',
    hours_raw: 'Lunch from 11:30 in four seatings (11:30, 12:00, 13:00, 13:30); dinner 17:00–23:00 (L.O. 22:00); irregular closures (Tabelog). Reservations accepted; often fully booked, including weekday lunch and weekends (October 2026). Cards: JCB, AMEX, Diners; QR accepted; no e-money (Tabelog). Counter seating (Tabelog). Non-smoking (Tabelog). On Shichijo west of Karasuma, south of Higashi Hongan-ji, 5 min from Kyoto Stn (Tabelog; October 2026). Opened 18 July 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shichijo west of Karasuma, south of Higashi Hongan-ji — 5 min from Kyoto Stn',
    cuisine: '“Tsukeyasai”: pickled and marinated vegetables from the group’s own farm and Kyoto growers, in creative izakaya dishes (2026 reviews) · lunch, one set only: a plate of 12 kinds of pickled vegetables topped with duck, steamed chicken or cheese, onion-broth soup and seasonal clay-pot rice — mackerel with Kujo green onion, or mackerel and mushroom — with a rice ball made from leftovers on request (October–November 2026) · dinner: assorted pickled vegetables, fluffy tofu dashimaki with house soy koji, fried yuba rolls, pork belly wrapped in mizuna, a rare meat-wrapped cutlet of white celery with demi-glace, salmon and maitake clay-pot rice (October 2026) · coffee shochu and other drinks (October 2026)',
    website: SITE, gmaps: gm('漬け野菜 イソイズム 京都駅'), menu_url: null,
    notes: '[Creative izakaya · Kyoto Station, twelve kinds of pickled vegetables] A cheerful spot near Higashi Hongan-ji from the Kyoto izakaya group 五十家, built on “tsukeyasai” — vegetables, many from the group’s own farm, pickled and marinated a dozen ways. Lunch is one set: twelve vegetables with duck, chicken or cheese, a light onion soup and seasonal clay-pot rice. At night add tofu dashimaki, fried yuba and a celery-filled meat cutlet. Lively staff; book ahead, even for weekday lunch.',
    chef_bio: { chef_name: null, roles: ['Operated by the Kyoto izakaya group 五十家 (2026 reviews)'], origin: null,
      background: 'Reviewers place it in the Gojyuya (五十家) group and call it a sister of “Sumisoudo”; the vegetables come from the group’s own farm (October 2026). Tabelog gives the opening as 18 July 2016.',
      philosophy: null, specialty: 'Twelve-vegetable pickled plate; seasonal clay-pot rice.',
      anecdotes: [
        { text: 'An October 2026 lunch party could not finish the clay-pot mackerel rice, and the staff shaped the last bowlful into a rice ball to take away.', source: R + 'B537145770/' },
        { text: 'A September 2026 diner had been to about four of the group’s restaurants and still ranked this the favourite, mostly for the staff.', source: R + 'B536444227/' },
      ],
      japanese_sources_summary: '食べログ: 漬け野菜 イソイズム、創作料理、下京区七条通烏丸西入中居町114、京都駅から徒歩5分、昼は11:30から4部制 (11:30、12:00、13:00、13:30)、夜17:00〜23:00 (L.O.22:00)、不定休、予約可、カード (JCB、AMEX、Diners)、QR可、カウンター席、禁煙、2016年7月18日オープン。口コミ (2026年、英語): 五十家グループ、Sumisoudo の姉妹店、自社農園の京野菜、12種の漬け野菜に鴨や蒸し鶏やチーズ、玉ねぎのスープ、季節の土鍋ご飯 (鯖と Kujo ねぎ)、豆腐のだし巻きと自家製の醤油麹、湯葉の揚げ巻き、水菜の豚バラ巻き、白セロリのレアカツ、コーヒー焼酎。',
      confidence: 'medium', sources: [TB, SITE, R + 'B536444227/', R + 'B536848973/', R + 'B537145770/', R + 'B537231895/', R + 'B537408278/', R + 'B537836230/', R + 'B537910810/', R + 'B537995732/', R + 'B538052474/', R + 'B538574813/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (lunch in four seatings); family-friendly per reviewers.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸西入中居町114',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.98937, 135.758987); cross-checked: GSI 京都府京都市下京区中居町114番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537995732/', R + 'B538574813/'],
    price_note: 'No menu or dish prices read; Tabelog averages ¥2,000–2,999 at lunch, ¥4,000–4,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Lunch set: 12 pickled vegetables, soup, seasonal clay-pot rice', '', 'Lunch', 'ask', 'no', 'October–November 2026; price not given.', 'lunch_set'),
    ] }, {
    cuisine: '「漬け野菜」: グループの自社農園や京都の生産者の野菜を漬けて仕立てる創作居酒屋 (2026年の口コミ)・昼は1種のみ: 12種の漬け野菜に鴨、蒸し鶏、チーズをのせた皿、玉ねぎの出汁のスープ、季節の土鍋ご飯 (鯖と Kujo ねぎ、鯖ときのこ)、残りはおにぎりにしてくれる (2026年10〜11月)・夜: 漬け野菜の盛り合わせ、自家製の醤油麹をのせた豆腐のだし巻き、湯葉の揚げ巻き、水菜の豚バラ巻き、白セロリのレアな肉巻きカツのデミグラス、鮭と舞茸の土鍋ご飯 (2026年10月)・コーヒー焼酎など (2026年10月)',
    neighborhood: '東本願寺の南、烏丸の西の七条通。京都駅から徒歩5分',
    gf_detail: '要確認。漬け野菜の皿、だし巻き、土鍋ご飯、焼き物。湯葉の揚げ巻きやデミグラスの肉巻きカツはグルテンフリーではない。醤油麹ものる (2026年の口コミ)。',
    vegan_detail: '要確認。12種の漬け野菜が主役だが、鴨、鶏、チーズがのり、スープやご飯には魚や出汁。野菜料理が植物性だけかは書かれていない (2026年の口コミ)。',
    notes: '[創作居酒屋・京都駅、12種の漬け野菜] 東本願寺の近く、京都の居酒屋グループ五十家の明るい店。グループの自社農園などの野菜を十数通りに漬ける「漬け野菜」が看板。昼は1種のみで、12種の野菜に鴨、鶏、チーズ、やさしい玉ねぎのスープ、季節の土鍋ご飯。夜は豆腐のだし巻き、湯葉の揚げ巻き、セロリ入りの肉巻きカツも。元気なスタッフ。平日の昼でも予約がおすすめ。',
  });
}

save();
