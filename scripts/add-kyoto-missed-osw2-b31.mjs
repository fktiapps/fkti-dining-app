// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 31.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   - 博多かわ屋 京都烏丸四条店 (26032161): chain — 博多かわ屋 has branches across Japan (e.g. 人形町 in Tokyo in the crawl).
//   - スタンプタウン コーヒー ロースターズ (26034339): chain — Stumptown Coffee Roasters, a US roaster with cafés in several cities.
//   + BAR-CERVECERIA xativa シャティバ (Spanish bar at Kiyamachi-Nijo, opposite the Ritz-Carlton)
//   + 京都捏製作所 Kyoto Tsukune Seisakujo (late-night tsukune izakaya off Fuyacho-Nijo; since 2008)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + 食工房 ひろさき Shoku Kobo Hirosaki (kappo counter at Takeya-machi-Shinmachi by a former head chef of 桜川)
//   - 京都祇園うなぎ四代目菊川 (26039727): chain — うなぎ四代目菊川 has five listings in the crawl alone (Kyoto Station Porta, Osaka x3).
//   - ベジョータコンチャ 富小路店 (26019291): chain — the ベジョータ group (コンチャ, ムアムア, ムチョ, マス…), five shops in Kyoto and
//     Osaka per a review; four in the crawl.
//   + 創作料理と京野菜のびすとろ KIZANO (Kyoto-vegetable French bistro facing Higashi-Honganji; since 2010)
//   None of the four drafted is in data/kyoto.json: grep by id, name (シャティバ/xativa, 捏/Tsukune, ひろさき/Hirosaki, キザノ/KIZANO)
//   and address (樋之口町466-2, 尾張町225, 東相生町282, 卓屋町66-1) found none; 京都捏製作所 shares a building with
//   kyoto_isil_isil_fuyacho and シャティバ stands next to kyoto_guu_kiyamachi_nijo (see pins).
//   Service charges: none listed on Tabelog for the four.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-31');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26032161', 'chain: 博多かわ屋 has branches across Japan (Tokyo 人形町 in the crawl)');
skip('26034339', 'chain: Stumptown Coffee Roasters, a US roaster with cafés in several cities');
skip('26039727', 'chain: うなぎ四代目菊川 has five listings in the crawl (Kyoto Station Porta and three in Osaka)');
skip('26019291', 'chain: ベジョータ group (コンチャ, ムアムア, ムチョ, マス), five shops in Kyoto and Osaka per a review; four in the crawl');

// ================================================================ BAR-CERVECERIA xativa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26020407/'; const R = TB + 'dtlrvwlst/';
  const W = day(['12:00', '14:00'], ['18:00', '23:00']); const S = day(['18:00', '22:00']);
  put({
    id: 'kyoto_bar_cerveceria_xativa', name: 'BAR-CERVECERIA xativa (シャティバ)', category: 'OMNI',
    lat: 35.01313, lng: 135.770228, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Paella and arroz, tapas, pinchos and bread-served ajillo; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A seafood- and meat-led Spanish menu; nothing vegan is marked (reviews).',
    hours_raw: 'Lunch 12:00–14:00 by reservation at least two business days ahead (phone preferred): a paella lunch ¥3,800 with ten tapas, paella, a drink and Basque cheesecake or chocolate cake, for 2–10 people upstairs. Dinner 18:00–23:00 (last order 22:00); Sunday and holidays 18:00–22:00 (last order 21:00); closed Tuesday (Tabelog). No service charge listed (Tabelog). 20 seats: 6 at the counter and 14 at tables, with a 2nd floor for private parties including families with small children; cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR (Tabelog). On Nijo-dori just west of Kiyamachi, opposite The Ritz-Carlton, Kyoto, 272 m from Kyoto-Shiyakusho-mae Stn (Tabelog; 2022–2024 reviews).',
    hours: { 0: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi-Nijo, opposite The Ritz-Carlton — 272 m from Kyoto-Shiyakusho-mae Stn',
    cuisine: 'Spanish regional cooking and homemade tapas with seafood bought daily at the market (Tabelog) · arroz a banda (rice in fish stock), paella; paella lunch ¥3,800 by reservation (Tabelog) · e.g. pinchos, octopus carpaccio, grilled octopus, shrimp ajillo with bread, firefly squid in ink, oven-baked sea bream, fried cod roe with balsamic in winter, grilled beef; Spanish beers and a long wine list (2023–2026 reviews)',
    website: null, gmaps: gm('BAR-CERVECERIA xativa 木屋町二条'), menu_url: TB,
    notes: "[Spanish · Kiyamachi-Nijo, tapas and arroz by the Ritz-Carlton] A friendly little Spanish bar on Nijo-dori opposite The Ritz-Carlton, with a counter downstairs and a room upstairs. Pick pinchos and tapas, then share an arroz a banda or paella made with the day's market seafood; Spanish beers and plenty of wine. A tapas-and-paella lunch (¥3,800) runs by reservation only. Food can be slow when it is full. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner not named'], origin: null,
      background: 'Per Tabelog’s official introduction: authentic Spanish regional dishes and homemade tapas in a quiet spot at Kiyamachi-Nijo, with fresh seafood bought daily at the market; the 2nd floor takes private parties and families with small children.',
      philosophy: null,
      specialty: 'Arroz a banda; tapas and pinchos.',
      anecdotes: [
        { text: 'A November 2024 guest was offered a blanket and had a coat taken before ordering, then chose the arroz a banda over the classic paella.', source: R + 'B496372472/' },
        { text: 'An April 2026 couple upstairs found the food good but the wait very long on a full night.', source: R + 'B526999438/' },
        { text: 'A September 2026 diner found the owner kind, with a wonderful smile.', source: R + 'B536840548/' },
      ],
      japanese_sources_summary: '食べログ: BAR-CERVECERIA xativa (シャティバ)、スペイン料理・バル、中京区木屋町二条西入ル樋之口町466-2、京都市役所前駅から272m、昼12:00〜14:00 (2営業日前までの予約制、パエリアランチ3,800円: タパス10種、パエリア、ドリンク、バスクチーズケーキかガトーショコラ、2階で2〜10名)、夜18:00〜23:00 (L.O. 22:00)、日祝18:00〜22:00、火曜定休、20席 (カウンター6、テーブル14)、カード可、インボイス登録あり。公式紹介: スペインの郷土料理と自家製タパス、アロスアバンダ、市場で毎日仕入れる魚介。口コミ (2022〜2026年、英語): リッツ・カールトン京都の向かい、ピンチョス、タコのカルパッチョ、海老のアヒージョ、ホタルイカのイカ墨、鯛のオーブン焼き、スペインビール、提供が遅いという声も。',
      confidence: 'medium', sources: [TB, R + 'B436808157/', R + 'B452008321/', R + 'B471287752/', R + 'B476520927/', R + 'B496372472/', R + 'B500224517/', R + 'B520982701/', R + 'B525999127/', R + 'B526999438/', R + 'B536840548/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the lunch two business days ahead by phone.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区木屋町二条西入ル樋之口町466-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with current lunch terms; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013093, 135.770228); GSI resolves 樋之口町466-2 only to the town (樋之口町, 40m); the Tabelog point was 5m from kyoto_guu_kiyamachi_nijo (樋之口467-2, next door), so moved about 4m north to keep the pins apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B496372472/', R + 'B526999438/'],
    price_note: 'Lunch price from Tabelog; dishes from reviews.', last_checked: TODAY, items: [
      it('', '', 'Paella lunch: ten tapas, paella, drink and cake (reservation)', '¥3,800', 'Lunch', 'ask', 'no', 'Book two business days ahead.', 'paella_lunch'),
      it('', '', 'Arroz a banda', '', 'Rice', 'ask', 'no', '', 'arroz_a_banda'),
      it('', '', 'Shrimp ajillo with bread', '', 'Tapas', 'no', 'no', '', 'gambas_ajillo'),
    ] }, {
    cuisine: 'スペインの郷土料理と、市場で毎日仕入れる魚介の自家製タパス (食べログ)・アロスアバンダ (魚の出汁の米料理)、パエリア。予約制のパエリアランチ3,800円 (食べログ)・例: ピンチョス、タコのカルパッチョ、タコのグリル、パン付きの海老のアヒージョ、ホタルイカのイカ墨、鯛のオーブン焼き、冬はタラコのフライのバルサミコ、牛肉のグリル。スペインビールとワインも豊富 (2023〜2026年の口コミ)',
    neighborhood: '木屋町二条、リッツ・カールトン京都の向かい。京都市役所前駅から272m',
    gf_detail: '要確認。パエリアやアロス、タパス、ピンチョス、パン付きのアヒージョ。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: '要確認。魚介と肉が中心のスペイン料理で、ヴィーガンの表示はない (口コミ)。',
    notes: '[スペイン・木屋町二条、リッツ・カールトンそばのタパスとアロス] リッツ・カールトン京都の向かい、二条通の小さく親しみやすいスペインバル。1階はカウンター、2階は部屋。ピンチョスやタパスを選び、その日の市場の魚介のアロスアバンダやパエリアを分け合う。スペインビールとワインも充実。タパスとパエリアのランチ (3,800円) は予約制。満席だと料理は遅め。火曜休み。',
  });
}

// ================================================================ 京都捏製作所
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006637/'; const R = TB + 'dtlrvwlst/';
  const BLOG = 'http://ameblo.jp/tsukuneman/';
  const H = day(['18:00', '04:00']);
  put({
    id: 'kyoto_tsukune_seisakujo', name: '京都捏製作所 (Kyoto Tsukune Seisakujo)', category: 'OMNI',
    lat: 35.01282, lng: 135.76599736043758, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tsukune in many seasonings, kara-age and sake snacks; no gluten information is published (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken-tsukune izakaya (Tabelog).',
    hours_raw: '18:00–04:00 (last order food 03:00, drinks 03:30), Monday–Saturday; closed Sunday (Tabelog). Cash only — no cards, e-money or QR (Tabelog). No service charge listed (Tabelog). 15 seats at a counter and tables; private hire up to 20; smoking allowed per Tabelog. Bookings recommended for early evening (April 2024). Hidden at the back of the 第二ふや町ビル on Fuyacho south of Nijo, 327 m from Kyoto-Shiyakusho-mae Stn (Tabelog; 2025–2026 reviews). Opened 17 April 2008 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Fuyacho-Nijo — 327 m from Kyoto-Shiyakusho-mae Stn',
    cuisine: 'Izakaya specialising in creative chicken tsukune (Tabelog; reviews) · an eight-kind tsukune platter, raw tsukune, tsukune served one by one in different styles; kara-age; a three-snack sake set · sake chosen with care, especially from the San’in region, served warm as kanzake; cheap beer and sours on some nights (2023–2026 reviews)',
    website: BLOG, gmaps: gm('京都捏製作所 麩屋町二条'), menu_url: TB,
    notes: "[Izakaya · Fuyacho-Nijo, creative tsukune until 4 a.m.] A dim little izakaya at the back of a building near City Hall, open until 4 a.m. and devoted to tsukune — try the eight-kind platter or the raw tsukune — with a careful list of San'in sake served warm. Often run single-handed, relaxed for solo drinkers, with Hanshin baseball on the TV. Cash only; smoking allowed. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner not named; often run by one person (February 2025 review)'], origin: null,
      background: 'Per Tabelog: a tsukune-specialist izakaya opened 17 April 2008, with the owner’s blog as its website. A February 2025 reviewer describes it as run by a single person; other reviewers note the San’in sake list, warm sake and a Hanshin Tigers following.',
      philosophy: null,
      specialty: 'Eight-kind tsukune platter; raw tsukune with kanzake.',
      anecdotes: [
        { text: 'A May 2023 late-night guest had the tsukune brought out one at a time, each in a different style, with warm Daigorei sake.', source: R + 'B464682399/' },
        { text: 'A February 2025 solo drinker found the one-person izakaya open until 4 a.m. just right.', source: R + 'B500731928/' },
        { text: 'A June 2025 passer-by came in for a sign offering ¥100 off drinks.', source: R + 'B508741787/' },
      ],
      japanese_sources_summary: '食べログ: 京都捏製作所 (きょうとつくねせいさくしょ)、居酒屋・鳥料理・日本酒バー、中京区麩屋町通二条下ル尾張町225 第二ふや町ビル1F、京都市役所前駅から327m、月〜土18:00〜翌4:00 (料理L.O. 3:00、ドリンクL.O. 3:30)、日曜定休、カード・電子マネー・QR 不可、15席、20名まで貸切可、喫煙可、2008年4月17日オープン、ウェブサイトはアメブロ (tsukuneman)。口コミ (2023〜2026年、英語): 創作つくね、つくね8種盛り、生つくね、山陰の日本酒、燗酒、ワンオペ、朝4時まで、阪神ファン、ビルの奥でわかりにくい。',
      confidence: 'medium', sources: [TB, BLOG, R + 'B464682399/', R + 'B465196417/', R + 'B479535050/', R + 'B483865490/', R + 'B495080824/', R + 'B500268390/', R + 'B500731928/', R + 'B505725272/', R + 'B508741787/', R + 'B527673492/', R + 'B531124497/', R + 'B531546881/'] },
    cultural_comfort: { level: 'japanese', note: 'Hard to find at the back of a building; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区麩屋町通二条下ル尾張町225 第二ふや町ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.012871, 135.765997); cross-checked: GSI 京都府京都市中京区尾張町225番地 (lot) 16m; the Tabelog point is identical to kyoto_isil_isil_fuyacho (same building), so moved about 5m south to keep the pins apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B479535050/', R + 'B483865490/'],
    price_note: 'Dishes from 2024 reviews; no prices published.', last_checked: TODAY, items: [
      it('', '', 'Eight-kind tsukune platter', '', 'Tsukune', 'ask', 'no', '', 'tsukune_8'),
      it('', '', 'Raw tsukune', '', 'Tsukune', 'ask', 'no', '', 'nama_tsukune'),
      it('', '', 'Three sake snacks', '', 'Snacks', 'ask', 'no', '', 'sake_snacks'),
    ] }, {
    cuisine: '創作つくねの居酒屋 (食べログ、口コミ)・つくね8種盛り、生つくね、一本ずつ違う味で出すつくね、唐揚げ、酒の肴3種・山陰を中心に選んだ日本酒を燗で。日によってビールやサワーが安い (2023〜2026年の口コミ)',
    neighborhood: '麩屋町二条。京都市役所前駅から327m',
    gf_detail: '要確認。さまざまな味付けのつくね、唐揚げ、酒の肴。グルテンの情報は公開されていない (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏のつくねの居酒屋 (食べログ)。',
    notes: '[居酒屋・麩屋町二条、朝4時までの創作つくね] 市役所近くのビルの奥の薄暗い小さな居酒屋。朝4時まで開いていて、つくねに専念。8種盛りや生つくねを、山陰の日本酒の燗とともに。一人で切り盛りすることが多く、一人飲みにも気楽。テレビには阪神戦。現金のみ、喫煙可。日曜休み。',
  });
}

// ================================================================ 食工房 ひろさき
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26014167/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_shoku_kobo_hirosaki', name: '食工房 ひろさき (Shoku Kobo Hirosaki)', category: 'MOM_AND_POP',
    lat: 35.016196147861685, lng: 135.7575048904771, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo-style Japanese cooking with soy, ponzu and dashi; no gluten information is published (reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal fish-led kappo, e.g. fugu and crab in winter (reviews).',
    hours_raw: '17:00–22:00, last entry 20:30; closed irregularly (Tabelog). Bookings recommended. Cash only — no cards, e-money or QR (Tabelog). No service charge listed (Tabelog). 10 seats: a 6-seat counter and a semi-private tatami room for 4; non-smoking (Tabelog). Omakase about ¥27,000 (May 2023); recent reviewers spend ¥20,000–39,999 (2025–2026). On Takeya-machi-dori near Shinmachi, 191 m from Marutamachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takeya-machi-Shinmachi — 191 m from Marutamachi Stn',
    cuisine: 'Simple, ingredient-led kappo cooking at the counter, omakase or by request (reviews) · e.g. in winter fugu sashimi with fresh shirako and skin, ponzu and spring onion, crab, and a crab clay-pot rice (February 2025); spring dishes in March 2026 · omakase about ¥27,000 (May 2023) · sake and wine (Tabelog)',
    website: null, gmaps: gm('食工房 ひろさき 竹屋町'), menu_url: TB,
    notes: "[Kappo · Marutamachi, a veteran's quiet counter] A small, unfussy kappo counter near Marutamachi Station run by a chef who spent years as head chef of Kiyamachi's 桜川. No flourishes — just seasonal fish and vegetables cooked with deep skill: winter fugu with shirako, crab clay-pot rice, the first tastes of spring. Six counter seats and one small room; omakase runs about ¥20,000–30,000. Cash only. Book ahead.",
    chef_bio: { chef_name: 'Hirosaki (family name per a May 2023 review)', roles: ['Chef-owner'], origin: null,
      background: 'Per reviews: the chef went independent after many years — about 30, per a November 2015 reviewer — at 桜川 on Kiyamachi, including as its head chef (2011 and 2015 reviews). Reviewers in 2015 and 2017 said the restaurant had one Michelin star. A January 2025 regular has followed it for 25 years, since an earlier location. A May 2023 reviewer was welcomed by Mr. Hirosaki and a female member of staff.',
      philosophy: 'Per a 2011 review: cooking that brings out the natural flavour of seasonal ingredients with as little handling as possible.',
      specialty: 'Seasonal omakase; winter fugu and crab.',
      anecdotes: [
        { text: 'A February 2025 regular had fugu sashimi mixed with fresh shirako and skin, and a crab clay-pot rice.', source: R + 'B493853973/' },
        { text: 'A February 2017 first-timer asked for extra dishes at the end and was happily obliged.', source: R + 'B245833933/' },
        { text: 'A January 2025 regular has been coming for 25 years, since the restaurant’s earlier location.', source: R + 'B501184568/' },
      ],
      japanese_sources_summary: '食べログ: 食工房 ひろさき、日本料理、中京区竹屋町通新町東相生町282、丸太町駅から191m、17:00〜22:00 (最終入店20:30)、不定休、カード・電子マネー・QR 不可、10席 (カウンター6、半個室の座敷4)、禁煙。口コミ (2011〜2026年、英語): 木屋町の桜川で長年 (約30年) 料理長を務めた料理人が独立、ミシュラン一つ星とする2015年・2017年の口コミ、素材の味を生かす料理、おまかせ27,000円 (2023年5月)、冬の河豚と白子、蟹の土鍋ご飯、25年来の常連 (2025年1月)。',
      confidence: 'medium', sources: [TB, R + 'B111540721/', R + 'B117891465/', R + 'B20990854/', R + 'B245833933/', R + 'B451265592/', R + 'B460018011/', R + 'B473508481/', R + 'B493853973/', R + 'B501184568/', R + 'B525374264/', R + 'B90807381/'] },
    cultural_comfort: { level: 'japanese', note: 'Small counter, cash only; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区竹屋町通新町東相生町282',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; most recent review March 2026.' },
    pin_source: `Tabelog ${TB} (35.016196, 135.757505); GSI could not match 東相生町282 (it returned a different town 845m away), so not lot-checked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B473508481/', R + 'B493853973/'],
    price_note: 'From reviews; no menu published.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥27,000', 'Course', 'ask', 'no', 'May 2023.', 'omakase'),
      it('', '', 'Fugu sashimi with shirako (winter)', '', 'Seasonal', 'ask', 'no', '', 'fugu'),
      it('', '', 'Crab clay-pot rice (winter)', '', 'Seasonal', 'ask', 'no', '', 'kani_donabe'),
    ] }, {
    cuisine: 'カウンターでいただく、素材を生かした簡素な割烹料理。おまかせでも好みでも (口コミ)・例: 冬は白子と皮を合わせた河豚のお造りとポン酢と葱、蟹、蟹の土鍋ご飯 (2025年2月)、2026年3月は春の料理・おまかせは27,000円ほど (2023年5月)・日本酒とワイン (食べログ)',
    neighborhood: '竹屋町新町。丸太町駅から191m',
    gf_detail: '要確認。醤油、ポン酢、出汁を使う割烹料理。グルテンの情報は公開されていない (口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚が中心の季節の割烹で、冬は河豚や蟹 (口コミ)。',
    notes: '[割烹・丸太町、ベテランの静かなカウンター] 丸太町駅近くの、気取らない小さな割烹のカウンター。木屋町の桜川で長く料理長を務めた料理人の店。飾り気はなく、季節の魚と野菜を確かな腕で: 冬の河豚と白子、蟹の土鍋ご飯、春の走り。カウンター6席と小部屋がひとつ、おまかせは2万〜3万円ほど。現金のみ。予約を。',
  });
}

// ================================================================ KIZANO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26015691/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kizano.jp/'; const LUNCH = SITE + 'index.php?data=./data/l3/'; const DINNER = SITE + 'index.php?data=./data/l4/'; const RECRUIT = SITE + 'index.php?data=./data/l8/';
  const H = day(['11:30', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_bistro_kizano', name: '創作料理と京野菜のびすとろ KIZANO (KIZANO)', category: 'OMNI',
    lat: 34.990687427878825, lng: 135.76043738021738, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French-based courses with bread or rice, soups, mousses and desserts; no gluten information is published (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Courses are built on Kyoto vegetables but the mains are fish, pork, duck or beef; nothing vegan is offered on the published menus (official site).',
    hours_raw: 'Lunch 11:30–15:00 (last entry 13:30); dinner 18:00–22:00 (last entry 20:00); closed Monday and irregularly (official site). Course menus only for now; bookings of up to 6 people, about 2 hours a table; late cancellations or changes may be charged (official site). Cash only — no cards, cashless payments or local coupons (official site). Prices revised from 1 November (official site). No service charge listed (Tabelog). 16 seats per the official site (18 per Tabelog); non-smoking; children by prior arrangement; private hire for 15–20 (official site). On Karasuma-dori facing Higashi-Honganji, on the 1st floor of ベルセゾン京都駅前, about 7–10 min from JR Kyoto Stn (official site). Opened 26 March 2010 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Facing Higashi-Honganji on Karasuma-dori — 7–10 min from Kyoto Stn',
    cuisine: 'French-based creative cooking with Kyoto vegetables from contract farms and Kyoto seasonings, served on Japanese tableware with chopsticks (official site) · lunch: bistro lunch ¥3,850 (amuse, appetizer platter, soup, a main of the day’s fish, Kyoto mochi-pork with Saikyo-miso Chaliapin sauce or beef steak +¥990, bread or rice, desserts, drink); KIZANO lunch ¥5,280 · dinner: bistro course ¥5,830 (e.g. Kyoto leek and squash mousse, five-item seasonal appetizer platter, mushroom potage, duck breast rôti; marbled beef +¥1,980); KIZANO course ¥7,260 · anniversary course with a whole cake ¥8,800; party plan ¥8,250 (official site, tax included) · wines by the bottle from ¥4,620, by the glass ¥770 (official site)',
    website: SITE, gmaps: gm('びすとろ KIZANO 東本願寺'), menu_url: DINNER,
    notes: "[French · facing Higashi-Honganji, Kyoto-vegetable bistro] A small bistro across Karasuma-dori from Higashi-Honganji, a short walk from Kyoto Station, run by a chef couple. Courses showcase Kyoto vegetables in French dress, eaten with chopsticks off Japanese plates: a pretty five-item appetizer platter, a seasonal potage, then fish, Kyoto pork or duck. Lunch ¥3,850–5,280, dinner ¥5,830–7,260. Cash only; groups up to six. Closed Monday.",
    chef_bio: { chef_name: null, roles: ['Run by a chef couple (official recruiting page); names not given'], origin: null,
      background: 'Per the official site: French-based creative cooking with Kyoto vegetables from contract farms and seafood sent direct from the producing areas; the most popular dish is the seasonal appetizer platter; the restaurant is run by a chef and spouse as a small, homely team. Opened 26 March 2010 (Tabelog).',
      philosophy: 'Per the official site: Kyoto vegetables and local seasonings in Kyoto-style French, eaten with chopsticks from Japanese tableware.',
      specialty: 'Seasonal appetizer platter of Kyoto vegetables.',
      anecdotes: [
        { text: 'A July 2025 visitor was told to mix the cold potato soup with the melon sorbet, and found it even better.', source: R + 'B504118084/' },
        { text: 'An August 2026 diner chose it from a book on business dining and found the room full of women at a Saturday dinner.', source: R + 'B534212385/' },
        { text: 'A December 2024 weekday lunch found every table taken by women enjoying wine.', source: R + 'B497678260/' },
      ],
      japanese_sources_summary: '公式サイト (kizano.jp): 創作料理と京野菜のびすとろ KIZANO、京都駅すぐ東本願寺前、契約農家の京野菜と京都の調味料のフレンチベースの創作料理、和食器と箸で、一番人気は旬の前菜盛り合わせ、産地直送の魚介、下京区卓屋町66-1 ベルセゾン京都駅前1階、ランチ11:30〜15:00 (最終入店13:30)、ディナー18:00〜22:00 (最終入店20:00)、月曜定休・不定休、現金のみ、予約は6名まで・2時間程度、当面はコースのみ、11月1日から価格改定。ランチ: びすとろランチ3,850円、KIZANOランチ5,280円。ディナー: びすとろコース5,830円、KIZANOコース7,260円。記念日コース8,800円、パーティープラン8,250円。総席数16席、全面禁煙、子連れは事前連絡。求人: シェフ夫婦で経営。食べログ: 創作料理・フレンチ、18席、2010年3月26日オープン。',
      confidence: 'high', sources: [TB, SITE, LUNCH, DINNER, RECRUIT, R + 'B497678260/', R + 'B501454303/', R + 'B502976866/', R + 'B504118084/', R + 'B509907645/', R + 'B510374987/', R + 'B512244690/', R + 'B521744517/', R + 'B529806520/', R + 'B534212385/', R + 'B534520005/', R + 'B535509169/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course menus only; cash only; groups of up to six.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区不明門通下珠数屋町上ル卓屋町66-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current course prices and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.990687, 135.760437); cross-checked: GSI 京都府京都市下京区卓屋町66番地 (lot) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [LUNCH, DINNER],
    price_note: 'Official course prices (tax included), checked November 2026.', last_checked: TODAY, items: [
      it('びすとろランチ', '', 'Bistro lunch course', '¥3,850', 'Lunch', 'ask', 'no', 'Beef steak main +¥990.', 'bistro_lunch'),
      it('KIZANOランチ', '', 'KIZANO lunch course', '¥5,280', 'Lunch', 'ask', 'no', '', 'kizano_lunch'),
      it('びすとろコース', '', 'Bistro dinner course', '¥5,830', 'Dinner', 'ask', 'no', 'Marbled beef main +¥1,980.', 'bistro_course'),
      it('KIZANOコース', '', 'KIZANO dinner course', '¥7,260', 'Dinner', 'ask', 'no', '', 'kizano_course'),
    ] }, {
    cuisine: '契約農家の京野菜と京都の調味料を使うフレンチベースの創作料理を、和食器と箸で (公式サイト)・ランチ: びすとろランチ3,850円 (先付、前菜盛り合わせ、スープ、本日の魚料理か京の都もち豚のグリル西京味噌シャリアピンソース、牛肉のステーキは+990円、パンかごはん、デザート、飲み物)、KIZANO ランチ5,280円・ディナー: びすとろコース5,830円 (たとえば京葱と栗かぼちゃのムース、旬の前菜五種盛り合わせ、キノコのポタージュ、鴨胸肉のロティ。国産牛の霜降りステーキは+1,980円)、KIZANO コース7,260円・ホールケーキ付きの記念日コース8,800円、パーティープラン8,250円 (公式サイト、税込)・ワインはボトル4,620円から、グラス770円 (公式サイト)',
    neighborhood: '烏丸通、東本願寺の前。京都駅から徒歩7〜10分',
    gf_detail: '要確認。パンかごはん付きのフレンチベースのコースで、スープ、ムース、デザートも。グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: '要確認。京野菜が中心のコースだが、メインは魚、豚、鴨、牛。公開されているメニューにヴィーガンの用意はない (公式サイト)。',
    notes: '[フレンチ・東本願寺前、京野菜のびすとろ] 京都駅から歩いてすぐ、烏丸通をはさんで東本願寺の向かいの、シェフ夫婦の小さなびすとろ。京野菜をフレンチに仕立てたコースを、和食器と箸で: 華やかな前菜五種盛り、季節のポタージュ、魚か京都の豚か鴨。昼3,850〜5,280円、夜5,830〜7,260円。現金のみ、予約は6名まで。月曜休み。',
  });
}

save();
