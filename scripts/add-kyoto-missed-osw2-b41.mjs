// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 41.
//   Queue run from the osw2 worktree, 2026-11-06.
//   core (queue.mjs kyoto-missed next core 200, lane ids in order):
//   + 鴨弘 Kamo Hiro (duck hot pot and "Kyoto-people's" kappo in Shogoin by the Kamo; since 1988)
//   + つけものダイニング おぎひろ家 Tsukemono Dining Ogihiroya (Kyoto-vegetable pickle buffet at Sanjo-Horikawa; since 2023) — invoice
//     株式会社アシスト (Takatsuki); no other outlets found.
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   + 山入り イタリア料理 ろくそう Rokusou (eight-seat Italian of 永谷六方 from Hanase, near Demachiyanagi; since 2019)
//   + 御料理 山上 Oryori Yamagami (late-night kappo with juwari soba lunches near Jingu-Marutamachi)
//   None of the four is in data/kyoto.json: grep by id, name (鴨弘/Kamo Hiro, おぎひろ/Ogihiro, ろくそう/Rokusou, 山上/Yamagami) and
//   address (聖護院蓮華蔵町21-5, 橋東詰町13-2, 革堂内町522-1, 下堤町) found none. Same-name counts: one listing each.
//   Service charges: おぎひろ家 none ("No service charge or additional fees"); none listed for the others; 鴨弘’s site has quoted its duck
//   hot pot as 税/サ込 (tax and service included).
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-41');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鴨弘
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26003373/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www7b.biglobe.ne.jp/~kamohiro/';
  const LD = day(['11:30', '13:30'], ['17:00', '22:00']); const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_kamo_hiro', name: '鴨弘 (Kamo Hiro)', category: 'OMNI',
    lat: 35.01529504786838, lng: 135.77670906045455, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Duck hot pot in a soy-based broth, beef tongue stew, hayashi rice and tempura; no gluten information is published (official site; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: duck hot pot and meat stews (official site).',
    hours_raw: 'Lunch 11:30–13:30 and dinner 17:00–22:00 (last order food 20:30); closed Thursday and at lunch on Sundays and holidays; may close for catering jobs — phone ahead (official site; Tabelog). No service charge listed on Tabelog; the shop’s site has quoted the duck hot pot as tax and service included. 18 seats: a 6-seat counter facing the Kamo River and tatami seating; private hire; non-smoking; cards, e-money and QR (Tabelog; official site). On Reizen-dori just west of Kawabata in Okazaki-Shogoin, 515 m from Jingu-Marutamachi Stn (Tabelog; April 2025). Opened 1988 as a kappo (official site).',
    hours: { 0: LD, 1: LD, 2: LD, 4: LD, 5: LD, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shogoin, by the Kamo River — 515 m from Jingu-Marutamachi Stn',
    cuisine: '"Kyoto-people’s cooking" (京人料理) kappo, known for duck hot pot (official site) · duck hot pot course ¥6,000 (February 2026) with generous cuts of duck · seasonal omakase menus updated each season · lunch: hayashi rice, beef tongue stew ¥1,200 (April 2024), tempura zaru soba set, a 100%-duck simmered hamburg (official site 2024) · New Year osechi to order (official site; reviews)',
    website: SITE, gmaps: gm('鴨弘 聖護院'), menu_url: SITE,
    notes: "[Kappo · Shogoin by the Kamo, duck hot pot since 1988] A long-running neighbourhood kappo with a six-seat counter looking out over the Kamo River toward Mt. Hiei. Its fame is duck hot pot, with thick cuts of duck (course about ¥6,000); lunch is homely yoshoku — hayashi rice and a tender beef tongue stew for about ¥1,200. The owner likes a chat across the counter. Closed Thursday and Sunday lunch.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (店主) not named; born and raised in Kyoto (official site)'], origin: 'Kyoto',
      background: 'Per the official site: opened in 1988 as a kappo in Okazaki-Shogoin; the owner, born and raised in Kyoto, calls the cooking 京人料理 — Kyoto cooking shaped by its people — and serves tongue stew, hayashi rice and duck hot pot as easy introductions to kappo; seasonal omakase menus are posted each season (latest November 2026).',
      philosophy: 'Per the official site: kappo is about conversation across the counter — "won’t you stretch a little and talk with us?"',
      specialty: 'Duck hot pot.',
      anecdotes: [
        { text: 'An April 2025 diner had duck hot pot by the river with the cherry blossoms in full bloom.', source: R + 'B504558332/' },
        { text: 'A February 2026 first-timer for duck hot pot was disappointed by the service.', source: R + 'B523341781/' },
        { text: 'A May 2025 regular came back for the hayashi rice with its rich demi-glace and crunchy onions.', source: R + 'B469544068/' },
      ],
      japanese_sources_summary: '公式サイト: 京人料理 鴨弘 (かもひろ)、京都 平安神宮 鴨鍋、1988年に割烹料理の店として岡崎・聖護院にオープン、カウンターの先に鴨川、背に比叡山、京都で生まれ育った店主の「京人料理」、昼のタンシチュー・ハヤシライス・鴨鍋は割烹の入門に、木曜定休と日祝の昼休み、出張料理などで臨時休業あり、季節のおまかせ料理を更新 (2026年11月5日に冬)、2024年に鴨肉100%の煮込みハンバーグ、鴨鍋は税・サ込で掲載された時期も。食べログ: 鍋・日本料理・揚げ物、左京区聖護院蓮華蔵町21-5、神宮丸太町駅から515m、11:30〜13:30、17:00〜22:00 (料理L.O. 20:30)、18席 (カウンター6、座敷)、禁煙、カード・電子マネー・QR 可。口コミ (2019〜2026年、英語): 鴨鍋コース6,000円 (2026年2月)、ハヤシライス、タンシチュー1,200円、天ざるのセット、冷泉通、桜の頃。',
      confidence: 'medium', sources: [TB, SITE, R + 'B125916091/', R + 'B410846416/', R + 'B443323324/', R + 'B453836776/', R + 'B468843011/', R + 'B469544068/', R + 'B478336782/', R + 'B484359448/', R + 'B497558125/', R + 'B504558332/', R + 'B523341781/'] },
    cultural_comfort: { level: 'japanese', note: 'A conversational kappo counter; phone ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区聖護院蓮華蔵町21-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site updated 5 November 2026 and Tabelog listing; reviews dated through February 2026.' },
    pin_source: `Tabelog ${TB} (35.015295, 135.776709); cross-checked: GSI 京都府京都市左京区聖護院蓮華蔵町21番地 (lot) 69m; 27m from kyoto_hayaokitei_udon; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523341781/', R + 'B484359448/'],
    price_note: 'Prices from April 2024 and February 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Duck hot pot course', '¥6,000', 'Dinner', 'ask', 'no', 'February 2026.', 'kamo_nabe'),
      it('タンシチュー', '', 'Beef tongue stew lunch', '¥1,200', 'Lunch', 'ask', 'no', 'April 2024.', 'tongue_stew'),
      it('ハヤシライス', '', 'Hayashi rice lunch', '', 'Lunch', 'no', 'no', '', 'hayashi'),
    ] }, {
    cuisine: '鴨鍋で知られる「京人料理」の割烹 (公式サイト)・鴨鍋のコース6,000円 (2026年2月)、鴨肉はたっぷり・季節ごとのおまかせ料理・昼: ハヤシライス、タンシチュー1,200円 (2024年4月)、天ざるのセット、鴨肉100%の煮込みハンバーグ (公式サイト、2024年)・お節も (公式サイト、口コミ)',
    neighborhood: '聖護院、鴨川沿い。神宮丸太町駅から515m',
    gf_detail: '要確認。醤油ベースの鴨鍋、タンシチュー、ハヤシライス、天ぷら。グルテンの情報は公開されていない (公式サイト、口コミ)。',
    vegan_detail: 'ヴィーガン不可。鴨鍋と肉の煮込み (公式サイト)。',
    notes: '[割烹・聖護院の鴨川沿い、1988年からの鴨鍋] 鴨川と比叡山を望むカウンター6席の、長く続く町の割烹。名物は厚切りの鴨がたっぷりの鴨鍋 (コース6,000円ほど)。昼はハヤシライスややわらかいタンシチューの家庭的な洋食で1,200円ほど。店主はカウンター越しの会話が好き。木曜と日曜の昼は休み。',
  });
}

// ================================================================ つけものダイニング おぎひろ家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26040507/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://ogihiroya-sanjo.com/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3120901010330';
  const WD = day(['10:00', '16:00'], ['17:00', '21:00']); const WE = day(['07:30', '10:00']);
  put({
    id: 'kyoto_ogihiroya_sanjo', name: 'つけものダイニング おぎひろ家 (Tsukemono Dining Ogihiroya)', category: 'OMNI',
    lat: 35.00865674786495, lng: 135.7527084604043, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: Tabelog lists gluten-free options, and reviewers mention rice-flour kara-age fried in rice oil and brown-rice udon. A gluten-intolerant diner found the take-home pickles contain wheat (grain vinegar), so ask about each pickle (Tabelog; March and July 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Pickles and rice are plant-based, but the soups, kara-age, dashimaki and side dishes are not; nothing vegan is marked (2026 reviews).',
    hours_raw: 'Monday–Wednesday, Friday and the days around holidays 10:00–16:00 (last order 15:30) and dinner 17:00–21:00 (last order 20:30, reservation only); Saturday, Sunday and holidays breakfast 7:30–10:00; closed Thursday (Tabelog). Lunch-only pickle buffet; weekend-only pickle breakfast; set meals at all hours from July 2026; hot-pot banquets for up to 16 with 3 days’ notice (official site). Prices revised from 7 January 2026 (official site). No service charge or other fees (Tabelog). 9 seats; cards, transit IC, iD, QUICPay and PayPay (Tabelog). On Sanjo-dori just east of Horikawa, about 6 min from Nijojo-mae Stn (Tabelog). Opened 26 November 2023 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-Horikawa — 6 min from Nijojo-mae Stn',
    cuisine: 'Dining room of a Kyoto pickle maker, serving additive-free, colour-free Kyoto-vegetable pickles (Tabelog; official site) · lunch-only Kyoto-vegetable pickle buffet with rice (white rice overseen by the eighth-generation Gihei, or 16-grain rice), a dish of the day, clear soup and dessert ¥1,800 (official site) · weekend Kyoto-vegetable pickle morning: four pickles, monthly congee, dashimaki, a dish of the day, warabi-mochi and coffee ¥1,000 (official site) · rice-flour kara-age, shibazuke-simmered hamburg, brown-rice udon, set meals (official site; 2026 reviews)',
    website: SITE, gmaps: gm('つけものダイニング おぎひろ家 三条堀川'), menu_url: SITE,
    notes: "[Japanese · Sanjo-Horikawa, an all-you-can-eat pickle lunch] A rustic little dining room of a Kyoto pickle maker near Nijo Castle. At lunch, help yourself to a buffet of additive-free Kyoto-vegetable pickles — shibazuke, red turnip, burdock, seasonal picks — with fresh rice and soup (¥1,800); weekend mornings bring a ¥1,000 pickle-and-congee breakfast. Rice-flour kara-age appeals to gluten-avoiders, but check the pickles. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Operator 株式会社アシスト (invoice holder); staff not named'], origin: null,
      background: 'Per Tabelog’s official introduction: traditional flavours handed down since the business was founded, Kyoto-vegetable pickles served in a rustic setting, and rice supervised by the eighth-generation Gihei with a 16-grain mix. Opened 26 November 2023 (Tabelog). The invoice number belongs to 株式会社アシスト, registered in Takatsuki, Osaka.',
      philosophy: 'Per the official site: Kyoto vegetables chosen to bring out the umami of each, in pickles made to a recipe handed down since the founding.',
      specialty: 'Kyoto-vegetable pickle buffet.',
      anecdotes: [
        { text: 'A March 2026 diner with gluten intolerance found the pickles on the buffet tasty but discovered wheat in the take-home pickles’ ingredients, and suggests brown-rice udon, kara-age or dashimaki for wheat-allergic guests.', source: R + 'B524610912/' },
        { text: 'A July 2026 visitor loved the rice-flour kara-age fried in rice oil.', source: R + 'B531986601/' },
        { text: 'A March 2026 couple had the weekend pickle breakfast with seasonal pickles such as zucchini and bamboo shoot.', source: R + 'B525101806/' },
      ],
      japanese_sources_summary: '公式サイト (ogihiroya-sanjo.com): つけものダイニングおぎひろ家、京野菜の素材にこだわり創業より受け継がれた伝統の味、2026年1月7日から一部価格改定、土日祝限定の京野菜つけものモーニング1,000円 (日替わりの京野菜つけもの4種、月替わりのお粥、出汁巻き、日替わりの一品、わらび餅、コーヒー)、ランチ限定の京野菜つけものビュッフェ1,800円 (つけもの、ごはん、日替わりの一品、吸い物、デザート、食べ放題)、7月3日から定食4種、鍋宴会 (3日前までの予約で最大16名)、しば漬けの煮込みハンバーグ、玄米うどん。食べログ: 惣菜・デリ、中京区三条通堀川東入橋東詰町13-2、二条城前駅から徒歩6分、月火水金・祝前日・祝後日10:00〜16:00 (L.O. 15:30)・17:00〜21:00 (夜は予約のみ)、土日祝7:30〜10:00、木曜定休、サービス料・追加料金なし、9席、カード・電子マネー・PayPay 可、グルテンフリーメニューあり、2023年11月26日オープン、インボイス T3120901010330 (株式会社アシスト、大阪府高槻市)。公式紹介: 無添加・無着色の京漬物、八代目儀兵衛監修の白米と十六穀米。口コミ (2025〜2026年、英語): 米粉の唐揚げを米油で、持ち帰りの漬物に小麦 (穀物酢) が入っていたという声。',
      confidence: 'medium', sources: [TB, SITE, INV, R + 'B520932119/', R + 'B521858555/', R + 'B523077277/', R + 'B524027246/', R + 'B524610912/', R + 'B525101806/', R + 'B526204931/', R + 'B527542558/', R + 'B527674620/', R + 'B529535580/', R + 'B531358135/', R + 'B531986601/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Buffet at lunch; dinner by reservation only.' },
    safety: { ...SAFETY0,
      positives: [{ text: 'Tabelog lists gluten-free options; reviewers mention rice-flour kara-age fried in rice oil and brown-rice udon.', source: TB, verified: TODAY },
        { text: 'A July 2026 reviewer describes the kara-age as gluten-free, coated in rice flour and fried in rice oil.', source: R + 'B531986601/', verified: TODAY }],
      gf_cross_contamination: [{ text: 'A March 2026 gluten-intolerant diner found wheat (likely grain vinegar) listed in the take-home pickles, and was unsure whether the buffet pickles also contain it.', source: R + 'B524610912/', verified: TODAY }] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条通堀川東入橋東詰町13-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (2026 notices) and Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.008657, 135.752708); cross-checked: GSI 京都府京都市中京区橋東詰町13番地 (lot) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official menu, 2026.', last_checked: TODAY, items: [
      it('京野菜 つけものビュッフェ', '', 'Kyoto-vegetable pickle buffet with rice, soup, dish of the day and dessert', '¥1,800', 'Lunch', 'ask', 'ask', 'Lunch only.', 'pickle_buffet'),
      it('京野菜 つけものモーニング', '', 'Kyoto-vegetable pickle breakfast with congee', '¥1,000', 'Breakfast', 'ask', 'no', 'Weekends and holidays only.', 'pickle_morning'),
      it('', '', 'Rice-flour kara-age', '', 'Dishes', 'ask', 'no', 'Described as gluten-free by a reviewer.', 'komeko_karaage'),
    ] }, {
    cuisine: '京漬物の店のダイニング。無添加・無着色の京野菜のつけもの (食べログ、公式サイト)・ランチ限定の京野菜つけものビュッフェ、ごはん (八代目儀兵衛監修の白米か十六穀米)、日替わりの一品、吸い物、デザートで1,800円 (公式サイト)・土日祝の京野菜つけものモーニング: つけもの4種、月替わりのお粥、出汁巻き、日替わりの一品、わらび餅、コーヒーで1,000円 (公式サイト)・米粉の唐揚げ、しば漬けの煮込みハンバーグ、玄米うどん、定食 (公式サイト、2026年の口コミ)',
    neighborhood: '三条堀川。二条城前駅から徒歩6分',
    gf_detail: '一部あり: 食べログにグルテンフリーメニューありとあり、口コミでは米油で揚げた米粉の唐揚げや玄米うどんも。グルテン不耐症の客が持ち帰りの漬物に小麦 (穀物酢) を見つけたので、漬物ごとに確認を (食べログ、2026年3月・7月の口コミ)。',
    vegan_detail: '要確認。漬物とご飯は植物性だが、吸い物、唐揚げ、出汁巻き、一品はそうではない。ヴィーガンの表示はない (2026年の口コミ)。',
    notes: '[和食・三条堀川、漬物食べ放題の昼] 二条城近くの、京漬物の店の素朴な小さなダイニング。昼は無添加の京野菜のつけもの (しば漬け、赤かぶ、ごぼう、季節のもの) を炊きたてのご飯と吸い物でビュッフェに (1,800円)。週末の朝は漬物とお粥の朝ごはん1,000円。米粉の唐揚げはグルテンを避けたい人にうれしいが、漬物は確認を。木曜休み。',
  });
}

// ================================================================ ろくそう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26033073/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.rokusou2019.com/';
  const INV = 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=3810771647792';
  const H = day(['11:30', '14:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_rokusou', name: '山入り イタリア料理 ろくそう (Rokusou)', category: 'MOM_AND_POP',
    lat: 35.02926723785635, lng: 135.76680940060263, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Seasonal Italian courses with pasta and bread; no gluten information is published (official site).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. A vegetarian course is offered with three days’ notice (lunch 7 dishes ¥8,250, dinner 9 dishes ¥14,850); ask whether it can be made vegan (official site).',
    hours_raw: 'Lunch 11:30–14:00 (last order food 12:30); dinner 18:00–21:30 (last order food 19:30); closed Wednesday and the 2nd Tuesday (Tabelog). Bookings via TableCheck or phone (official site). Courses change monthly; vegetarian course with 3 days’ notice (official site). No service charge listed (Tabelog). 8 seats at a single-board counter, plus a sunken table, in a renovated townhouse where shoes come off; non-smoking; cards and QR (Tabelog; October 2025). Near the north-east corner of the Imperial Palace, about 10 min from Demachiyanagi Stn (601 m) (official site; Tabelog). The invoice is registered to 永谷六方.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North-east of the Imperial Palace — 10 min from Demachiyanagi Stn',
    cuisine: '"Mountain" Italian rooted in the chef’s home of Hanase: seasonal ingredients from across Japan in a monthly course, with Japanese touches (official site) · lunch: light course of 5 dishes ¥6,600; recommended 7 dishes ¥9,350; seasonal specialty 11 dishes ¥12,650 · dinner: light 7 dishes ¥12,650; recommended 9 dishes ¥17,050; special 11 dishes ¥22,550 · vegetarian course, lunch ¥8,250, dinner ¥14,850 (official site, tax included) · e.g. pickled daikon with cheese, yellowtail and daikon salad, homemade sausage with Kujo leek; wine pairings (2024–2026 reviews)',
    website: SITE, gmaps: gm('ろくそう 出町柳 イタリアン'), menu_url: SITE,
    notes: "[Italian · north-east of the Imperial Palace, a Hanase chef's mountain Italian] An eight-seat counter in a renovated townhouse near Demachiyanagi, where chef 永谷六方 — raised among the mountains of Hanase — turns seasonal produce into quiet, aromatic Italian with Japanese touches; the course changes monthly. Lunch from ¥6,600, dinner from ¥12,650; vegetarian courses with three days' notice. Shoes off at the door. Closed Wednesday.",
    chef_bio: { chef_name: '永谷 六方', roles: ['Owner-chef (店主)'], origin: 'Hanase, Kyoto; born 30 June 1980',
      background: 'Per the official site: born 30 June 1980 and raised in Hanase among the mountains, whose seasons and nature remain the foundation of the cooking and the décor; trained at La Barcarola in Niigata, Ristorante Acqua Pazza in Tokyo and Chourakukan Coral in Kyoto; now blends Hanase sensibility with Italian technique to express each season on the plate. The invoice is registered in the owner’s name.',
      philosophy: 'Per the official site: each plate expresses the season, from the food to the tableware and quiet time at the counter.',
      specialty: 'Monthly seasonal Italian course.',
      anecdotes: [
        { text: 'A December 2025 regular on a fourth visit describes the chef as modest and quiet, with the cooking reflecting that personality.', source: R + 'B449983297/' },
        { text: 'An October 2025 lunch guest took off shoes at the entrance and sat by the window at the counter.', source: R + 'B515293535/' },
        { text: 'An August 2026 visitor paired the lunch course with wine.', source: R + 'B533674576/' },
      ],
      japanese_sources_summary: '公式サイト (rokusou2019.com): 山入り イタリア料理 ろくそう、京都出町柳駅近くの8席の小さなレストラン、花脊の自然と季節の恵み、一枚板のカウンター、月替わりの旬のコース。軽めのランチコース5品6,600円、ランチのおすすめ7品9,350円、ランチのスペシャリテ11品12,650円、夜の軽めのコース7品12,650円、夜のおすすめ9品17,050円、特別コース11品22,550円、ベジタリアンコース昼7品8,250円・夜9品14,850円 (3日前までに予約)。店主 永谷六方、1980年6月30日京都花脊出身、新潟『ラ・バルカローラ』、東京『リストランテ・アクアパッツア』、京都『長楽館コーラル』。食べログ: イタリアン、上京区革堂内町522-1、出町柳駅から601m、11:30〜14:00、18:00〜21:30、水曜・第2火曜休み、8席、禁煙、カード・QR 可、ベジタリアンメニューあり、インボイス T3810771647792 (永谷六方)。口コミ (2024〜2026年、英語): 町家を改装、靴を脱ぐ、たくあんとチーズ、鰤と大根のサラダ、九条ねぎの自家製ソーセージ、ワインペアリング。',
      confidence: 'high', sources: [TB, SITE, INV, R + 'B449983297/', R + 'B490399140/', R + 'B497516396/', R + 'B497769138/', R + 'B502865966/', R + 'B515293535/', R + 'B519646564/', R + 'B522066019/', R + 'B525083668/', R + 'B532451747/', R + 'B533174998/', R + 'B533674576/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book via TableCheck; shoes off.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区革堂内町522-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current course prices and Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.029267, 135.766809); cross-checked: GSI 京都府京都市上京区革堂内町522番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE],
    price_note: 'Official course prices (tax included), checked November 2026.', last_checked: TODAY, items: [
      it('軽めのランチコース', '', 'Light lunch course, 5 dishes', '¥6,600', 'Lunch', 'ask', 'ask', '', 'lunch_light'),
      it('ランチのおすすめコース', '', 'Recommended lunch course, 7 dishes', '¥9,350', 'Lunch', 'ask', 'ask', '', 'lunch_rec'),
      it('夜のおすすめコース', '', 'Recommended dinner course, 9 dishes', '¥17,050', 'Dinner', 'ask', 'ask', '', 'dinner_rec'),
      it('ベジタリアンコース', '', 'Vegetarian course (lunch, 7 dishes)', '¥8,250', 'Lunch', 'ask', 'ask', 'Book 3 days ahead; dinner 9 dishes ¥14,850.', 'veg_lunch'),
    ] }, {
    cuisine: '店主のふるさと花脊に根ざした「山入り」のイタリアン。全国の旬の食材を月替わりのコースに、和の要素も (公式サイト)・昼: 軽めのコース5品6,600円、おすすめ7品9,350円、季節のスペシャリテ11品12,650円・夜: 軽めのコース7品12,650円、おすすめ9品17,050円、特別コース11品22,550円・ベジタリアンコース 昼8,250円・夜14,850円 (公式サイト、税込)・例: たくあんとチーズ、鰤と大根のサラダ、九条ねぎの自家製ソーセージ、ワインペアリング (2024〜2026年の口コミ)',
    neighborhood: '御所の北東。出町柳駅から徒歩10分',
    gf_detail: '要確認。パスタやパンのある季節のイタリアンのコース。グルテンの情報は公開されていない (公式サイト)。',
    vegan_detail: '要確認。3日前までの予約でベジタリアンコース (昼7品8,250円、夜9品14,850円) があるので、ヴィーガンにできるか相談を (公式サイト)。',
    notes: '[イタリアン・御所の北東、花脊の料理人の山のイタリアン] 出町柳近くの改装した町家のカウンター8席。花脊の山で育った永谷六方さんが、旬の食材を香り高く静かなイタリアンに、和の要素も添えて。コースは月替わり。昼6,600円から、夜12,650円から、3日前までの予約でベジタリアンコースも。玄関で靴を脱ぐ。水曜休み。',
  });
}

// ================================================================ 御料理 山上
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027367/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'kyoto_oryori_yamagami', name: '御料理 山上 (Oryori Yamagami)', category: 'OMNI',
    lat: 35.01673663786619, lng: 135.77272770047188, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo dishes, tempura and juwari (100% buckwheat) soba with dipping sauce; no gluten information is published (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish-led kappo with dashi (reviews).',
    hours_raw: 'Lunch 11:00–14:00 (soba; only on days a sign is out — irregular); dinner 17:00–23:00; closed Thursday, and 29–31 December; no lunch 29 December–3 January, reservations required 1–3 January (Tabelog; January 2024). Cash only — no cards or e-money (Tabelog). No service charge listed (Tabelog). 18 seats: a 10-seat counter and a private room for 6–8; private hire; smoking allowed per Tabelog. In a narrow lane near Keihan Jingu-Marutamachi Stn (162 m), near Kyoto University Hospital (Tabelog; November 2025).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Jingu-Marutamachi — 162 m from the station',
    cuisine: 'Authentic Japanese cooking until late, with the owner’s juwari soba (Tabelog) · dinner courses made to a budget, e.g. ¥5,000 and ¥10,000 (2022–2025 reviews), with seasonal fish such as grilled sweetfish, matsutake and eel on request (October 2024–October 2025) · lunch soba gozen with tekka-don, tempura, pickles, soba-yu and sesame pudding ¥1,430 (January 2024) · extremely thin juwari soba, good with just salt (November 2025) · sake such as Kubota (reviews)',
    website: null, gmaps: gm('御料理 山上 神宮丸太町'), menu_url: TB,
    notes: "[Kappo · Jingu-Marutamachi, late-night kappo with hand-made soba] A hidden kappo down a lane by Jingu-Marutamachi Station, loved by professors and fellow chefs, serving classic seasonal dishes until 23:00 and ending with the owner's fine juwari soba. Dinner is made to your budget (about ¥5,000–10,000); on days a sign is out, lunch is a soba set with a tekka-don (about ¥1,400). Cash only; smoking allowed. Closed Thursday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef not named; works with a hostess (October 2024)'], origin: null,
      background: 'Per Tabelog’s official introduction: a hidden shop on a narrow street near Jingu-Marutamachi Station, loved by university professors and other restaurant owners, serving authentic Japanese cuisine until late; lunch was started at regulars’ request, with 100% buckwheat soba made by the owner, who even travels to Shinshu for soba tools.',
      philosophy: null,
      specialty: 'Juwari soba to close a kappo dinner.',
      anecdotes: [
        { text: 'An October 2025 regular booked lunch ahead to ask for matsutake and eel.', source: R + 'B493074448/' },
        { text: 'A November 2025 visitor after a hospital appointment came for the lunch-only soba and found it excellent with salt alone.', source: R + 'B516705809/' },
        { text: 'A December 2025 guest was introduced by a Kyoto University professor.', source: R + 'B518231686/' },
      ],
      japanese_sources_summary: '食べログ: 御料理 山上、日本料理・そば、左京区下堤町、神宮丸太町駅から162m、11:00〜14:00、17:00〜23:00、木曜定休、年末12月29〜31日休み、12月29日〜1月3日は昼休み、1月1〜3日は要予約、カード・電子マネー不可、18席 (カウンター10、個室6〜8名)、貸切可、喫煙可。公式紹介: 京阪神宮丸太町駅近くの細い路地の隠れ家、大学教授から同業の店主まで愛される本格日本料理を深夜まで、常連の要望で始めた昼は店主手打ちの十割そば、信州まで道具を買いに行くほど。口コミ (2016〜2025年、英語): 予算に合わせたコース (5,000円、10,000円)、鮎の塩焼き、松茸と鰻、昼のそば御膳1,430円 (鉄火丼、天ぷら、漬物、そば湯、胡麻プリン、2024年1月)、昼は看板が出ている日のみ、店主と女将。',
      confidence: 'medium', sources: [TB, R + 'B277852560/', R + 'B304088352/', R + 'B426353425/', R + 'B472781658/', R + 'B475752056/', R + 'B476012394/', R + 'B482418308/', R + 'B493074448/', R + 'B500276768/', R + 'B516705809/', R + 'B518231686/'] },
    cultural_comfort: { level: 'japanese', note: 'Cash only; smoking allowed; lunch only when the sign is out.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区下堤町',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with year-end notice; reviews dated through December 2025.' },
    pin_source: `Tabelog ${TB} (35.016737, 135.772728); the address has no lot number and GSI resolves 下堤町 only to the town (56m), so not lot-checked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B475752056/', R + 'B426353425/'],
    price_note: 'Prices from 2022–2024 reviews; dinner made to a budget.', last_checked: TODAY, items: [
      it('', '', 'Lunch soba gozen with tekka-don, tempura and dessert', '¥1,430', 'Lunch', 'no', 'no', 'January 2024; lunch only when the sign is out.', 'soba_gozen'),
      it('', '', 'Chef’s recommended dinner course', '¥5,000', 'Dinner', 'ask', 'no', 'Made to a budget; ¥10,000 also requested by reviewers.', 'omakase'),
    ] }, {
    cuisine: '店主手打ちの十割そばもある、深夜までの本格日本料理 (食べログ)・夜は予算に合わせたコース、たとえば5,000円や10,000円 (2022〜2025年の口コミ)、鮎の塩焼き、頼めば松茸や鰻も (2024年10月〜2025年10月)・昼のそば御膳は鉄火丼、天ぷら、漬物、そば湯、胡麻プリン付きで1,430円 (2024年1月)・ごく細い十割そばは塩だけでも (2025年11月)・久保田などの日本酒 (口コミ)',
    neighborhood: '神宮丸太町。駅から162m',
    gf_detail: '要確認。割烹料理、天ぷら、つゆで食べる十割そば。グルテンの情報は公開されていない (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁を使う魚中心の割烹 (口コミ)。',
    notes: '[割烹・神宮丸太町、深夜の割烹と手打ちそば] 神宮丸太町駅近くの路地の隠れ家の割烹。大学教授や同業の料理人に愛され、夜11時まで季節の料理を出し、締めは店主の細い十割そば。夜は予算に合わせて (5,000〜10,000円ほど)、看板が出ている日の昼は鉄火丼付きのそば御膳 (1,400円ほど)。現金のみ、喫煙可。木曜休み。',
  });
}

save();
