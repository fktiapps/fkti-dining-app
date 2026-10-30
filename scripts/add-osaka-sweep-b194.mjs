// Osaka sweep (2-mile circle around Dotonbori), batch 194 — name-revisit queue 2/6 (Greg 2026-10-30: redo the shops
// passed over because the name sounded like a person's), nearest-first.
//   + 酒と肴 よしまさ Sake to Sakana Yoshimasa (fish izakaya, grilled-fish set lunches; Nipponbashi)
//   + 堀江串揚げ 勝新 KATSUSHIN (one-person creative kushiage in rice flour and rice oil; GF on request per the shop; Kitahorie)
//   + まぐろひろし Maguro Hiroshi (tuna specialist: lunch bowls, evening tuna omakase; Minamisenba)
//   + 鉄板焼きとお酒 sAtori家 Teppanyaki to Osake sAtoriya (teppanyaki izakaya, hamburg-steak lunches; Minamisenba)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 194);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 酒と肴 よしまさ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27069059/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '13:30'], ['17:30', '22:30']); const S = day(['17:30', '22:00']);
  put({
    id: 'osaka_sake_to_sakana_yoshimasa_nipponbashi', name: '酒と肴 よしまさ (Sake to Sakana Yoshimasa)', category: 'OMNI',
    lat: 34.664143, lng: 135.506265, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; sashimi and salt-grilled fish are the core, but the sets also carry tempura, fried fish, cutlets and simmered fish, so ask about soy sauce and batter.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish izakaya; sets come with fish and miso soup.',
    hours_raw: 'Mon–Fri 11:30–13:30 (last order 13:30) and 17:30–22:30 (food last order 21:30, drinks 22:00); Sat and holidays 17:30–22:00 (last order 21:30); closed Sunday, and at year-end, New Year and Obon (Tabelog). Dinner ends when ingredients run out; a 2-hour limit may apply when busy; on 30 December courses only (Tabelog). Reservations accepted; the owner prefers phone bookings to online ones, and online bookings get a confirmation call (Tabelog). Cash only: no cards, e-money or QR (Tabelog; May 2026 review). 19 seats: 6 at the counter, 12 at tables; smoking allowed (Tabelog). At lunch, popular items sell out around 12:30, and the grilled fish takes 15 minutes or more (March and August 2026 reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 2-8-16, Nipponbashi Residence 1F, set back from Sakaisuji near Kuromon Market — 5 min from Nipponbashi Stn, about 10 min from Nankai Namba',
    cuisine: 'Fish izakaya, fish delivered direct from the source and sake chosen by the chef (19 seats) · lunch sets: grilled fish set ¥1,200 (a different seasonal fish each day, served with the head), daily special ¥1,000 (a main plus sashimi or grilled fish), special ¥1,300 (sashimi, grilled fish and a fried dish), Irodori gozen ¥1,600 (sashimi, grilled or simmered fish, rolled omelet, small sides), rice refill ¥200 (2026) · grilled fish seen in 2026: kanpachi, renko-dai, flatfish, yume-kasago, akamuromaji, mako-garei · evening: sashimi platter, simmered whole fish, grilled abalone, oden, fried horse mackerel, anago zosui; fish sukiyaki hot pot in the cold months (2+ people) · courses: omakase four dishes ¥3,300 / ¥3,850 / ¥4,400, fish sukiyaki course ¥4,400 or ¥5,500 · sake, shochu',
    website: null, gmaps: gm('酒と肴 よしまさ 日本橋'), menu_url: null,
    notes: "[Fish izakaya · Nipponbashi near Kuromon Market, the grilled-fish lunch counter] A slightly hidden ground-floor izakaya set back from Sakaisuji, where the fish comes direct from the source and the sake is the chef's choice. At lunch, people working nearby come for set meals that read like a seasonal fish chart: the ¥1,200 grilled fish set brings a different whole-headed fish each day — kanpachi, renko-dai, yume-kasago, akamuromaji, mako-garei — and one five-time diner keeps coming back just to see which. The ¥1,300 special adds thick-cut sashimi and a fried dish; portions are generous. Grilling is slow (15 minutes or more) and one person cooks, so come at 11:30; popular items sell out by about 12:30. Evenings are for sashimi platters, simmered fish and, in winter, a fish sukiyaki hot pot. Cash only; the owner, whom one diner found a little shy, prefers bookings by phone.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (one person in the kitchen, March 2026 review)'], origin: null, background: 'Fish izakaya that buys fish direct from the source; the chef chooses the sake (Tabelog, shop-provided). The owner prefers analog ways and asks for reservations by phone (Tabelog). One person works the kitchen (March 2026 review).', philosophy: 'Fresh fish from the source; at lunch a different seasonal fish grilled each day instead of the usual mackerel (June–July 2026 reviews).', specialty: 'Daily grilled-fish set with the head; sashimi platter; fish sukiyaki hot pot.',
      anecdotes: [
        { text: '"This was my fourth time enjoying grilled fish, and each time it has been a different seasonal catch, complete with the head! … This time, it was \'Yume Kasago\'!!!" — July 2026, grilled fish set meal ¥1,200.', source: R + 'B530190397/' },
        { text: '"I decided on the Special Colorful Gozen for JPY 1600… The grilled fish was explained to be Renko Tai… The sashimi was thickly cut and looked fantastic." — May 2026, lunch.', source: R + 'B528031858/' },
      ],
      japanese_sources_summary: '食べログ: 酒と肴 よしまさ、大阪市中央区日本橋2-8-16 日本橋レジデンス 1F、日本橋駅から徒歩5分、南海なんば駅から徒歩8分、月〜金11:30〜13:30・17:30〜22:30 (フードL.O. 21:30、ドリンクL.O. 22:00)、土・祝17:30〜22:00、日曜休み、年末年始・お盆休み、夜は食材がなくなり次第終了、混雑時は2時間制、予約可 (店主はアナログ派で電話予約を希望、ネット予約には店から確認の電話)、カード・電子マネー・QR不可、19席 (カウンター6、テーブル12)、喫煙可。店の紹介: 産地直送の魚と店主が選ぶ日本酒、刺身の盛り合わせ、寒い時期は魚すき鍋 (2名から)、おまかせ4品3300円・3850円・4400円、魚すき鍋コース4400円・5500円。口コミ(2025年3月〜2026年8月): 堺筋沿いのビルの奥、黒門市場の近く、焼魚定食1200円 (毎日ちがう旬の魚、頭つき)、日替わり定食1000円、日替わりスペシャル1300円 (刺身・焼魚・揚げ物)、彩り御膳1600円、ご飯おかわり200円、カンパチ、Renko Tai、カレイ、Yume Kasago、Akamuromaji、Mako-Garei、焼くのに15分以上、厨房はひとり、12時半ごろには売り切れも、夜は刺身の盛り合わせ、魚の煮付け、アワビ焼き、おでん、アジフライ、穴子雑炊、飲み放題、天ぷらが生焼け気味だったという声、少し人見知りの店主、常連と地元の客、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B520674565/', R + 'B521960857/', R + 'B523770525/', R + 'B528004837/', R + 'B528031858/', R + 'B530106697/', R + 'B530190397/', R + 'B534385096/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; the owner prefers phone bookings (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋2-8-16 日本橋レジデンス 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated January–August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋二丁目8番16号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B530190397/', R + 'B521960857/'],
    price_note: 'Lunch prices from June–August 2026 reviews (tax included); course prices from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Grilled fish set meal (fish of the day, with the head)', '¥1,200', 'Lunch', 'ask', 'no', 'July–August 2026.', 'yakizakana'),
      it('', '', 'Daily special set (main plus sashimi or grilled fish)', '¥1,000', 'Lunch', 'ask', 'no', 'June 2026.', 'higawari'),
      it('', '', 'Daily special, "special" (sashimi, grilled fish, fried dish)', '¥1,300', 'Lunch', 'no', 'no', 'June–July 2026.', 'special'),
      it('', '', 'Irodori gozen (sashimi, grilled fish, rolled omelet)', '¥1,600', 'Lunch', 'ask', 'no', 'February and May 2026.', 'irodori'),
      it('', '', 'Fish sukiyaki hot pot course (2+ people)', '¥4,400', 'Courses', 'ask', 'no', 'Tabelog listing; also ¥5,500.', 'uosuki'),
    ] }, {
    cuisine: '産地直送の魚と店主が選ぶ日本酒の魚の居酒屋 (19席)・昼の定食: 焼魚定食1200円 (毎日ちがう旬の魚、頭つき)、日替わり定食1000円 (主菜に刺身か焼魚)、日替わりスペシャル1300円 (刺身、焼魚、揚げ物)、彩り御膳1600円 (刺身、焼魚か煮魚、だし巻き、小鉢)、ご飯おかわり200円 (2026年)・2026年の焼魚: カンパチ、Renko Tai、カレイ、Yume Kasago、Akamuromaji、Mako-Garei・夜: 刺身の盛り合わせ、魚の姿煮、アワビ焼き、おでん、アジフライ、穴子雑炊、寒い時期は魚すき鍋 (2名から)・コース: おまかせ4品3300円・3850円・4400円、魚すき鍋コース4400円か5500円・日本酒、焼酎',
    neighborhood: '日本橋2-8-16 日本橋レジデンス 1F、堺筋から少し奥、黒門市場の近く。日本橋駅から徒歩5分、南海なんば駅から10分ほど',
    gf_detail: '要確認。グルテンの情報なし。刺身と焼魚が中心だが、定食には天ぷら、フライ、カツ、煮魚もあるので、醤油や衣について確認を。',
    vegan_detail: 'ヴィーガンではありません。魚の居酒屋で、定食には魚と味噌汁がつく。',
    notes: '[魚の居酒屋・日本橋、黒門市場の近く、焼魚定食のカウンター] 堺筋から少し奥まったビルの1階の、ちょっと見つけにくい居酒屋。魚は産地直送、日本酒は店主のセレクト。昼は近くで働く人が定食を食べに来て、その中身は旬の魚の図鑑のよう。1200円の焼魚定食は毎日ちがう魚が頭つきで出てくる (カンパチ、Renko Tai、Yume Kasago、Akamuromaji、Mako-Garei)。5回通った人は今日は何の魚かが楽しみで来るという。1300円のスペシャルは厚切りの刺身と揚げ物もついて量もたっぷり。焼くのに15分以上かかり、厨房はひとりなので11時半に行くのがおすすめ。人気の品は12時半ごろには売り切れる。夜は刺身の盛り合わせや煮魚、冬は魚すき鍋。現金のみ。少し人見知りという声の店主は、電話での予約を希望。',
  });
}

// ================================================================ 堀江串揚げ 勝新
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27107054/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.katsushin-osaka.com/'; const MENU = SITE + 'menu.html'; const ABOUT = SITE + 'about.html';
  const H = day(['18:00', '01:00']);
  put({
    id: 'osaka_horie_kushiage_katsushin_kitahorie', name: '堀江串揚げ 勝新 (KATSUSHIN)', category: 'OMNI',
    lat: 34.673881, lng: 135.495855, cuisine_type: 'other',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'The shop says its kushiage can be made gluten-free and that it caters for wheat allergy on request (「小麦アレルギー、グルテンフリーご対応致します。ご希望の方はお声をお掛け下さい。」, shop site). Reviewers (October 2025–September 2026) describe a rice-flour batter fried in rice oil. But a February 2026 diner mentions breadcrumbs, a May 2026 course included a wheat-gluten (nama-fu) skewer, the fryer is not described as separate, and the dips include soy sauce and sauce. Say so when booking and ask how the gluten-free skewers are fried.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The shop says its kushiage can be made vegetarian (shop site), but vegan is not mentioned; the course mixes seafood and meat, and the dips and the closing chazuke use dashi.',
    hours_raw: 'Mon–Sat 18:00–01:00; closed Sunday (Tabelog; hours may change). The shop site gives 18:00–24:00, last entry 23:00, closed Sunday, and closes early when the day\'s ingredients run out. Reservations accepted, and diners say they are a must: one person runs the shop and it is usually full (July and August 2026 reviews). Cards (JCB, AMEX) and QUICPay; QR payments accepted (Tabelog). 10 seats, about six at the counter and one table for four (August 2026 review); non-smoking (Tabelog). Open about ten years: a regular since the opening mentions a 10th-anniversary chateaubriand skewer (July 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitahorie 1-10-2, 1F — 113 m from Yotsubashi Stn (about 5 min)',
    cuisine: 'Creative kushiage, between kushikatsu and tempura, from the day\'s market produce (10 seats) · omakase skewers until you say stop, or fixed courses of 10, 12, 13, 15 or 20 skewers; a May 2026 diner put it at about ¥300 a skewer · rice-flour batter, 100% Tsuno rice oil from Wakayama (shop site) · salad with fried zucchini to start · skewers seen in 2025–26: angel shrimp, wagyu tenderloin, kisu with crab and mitsuba, lotus root with shiso and minced pork, potato with truffle butter, octopus with Brussels sprouts, Kawachi duck with porcini, whelk with maitake, firefly squid with bamboo shoot, abalone with canola blossoms, roast beef wrapped around foie gras, eel chazuke, dessert skewers · dips: sesame salt, dashi soy sauce, sauce, lemon · aosa dashi chazuke · highballs, wine by the bottle',
    website: SITE, gmaps: gm('堀江串揚げ 勝新 北堀江'), menu_url: MENU,
    notes: "[Kushiage · Kitahorie, a one-person counter of creative skewers in rice flour and rice oil] A ten-seat Horie counter that has turned out creative kushiage for about ten years, with one person doing everything. The shop calls its style halfway between kushikatsu and tempura: market produce in a light rice-flour batter, fried in Wakayama rice oil and finished with a torch, so diners keep eating without feeling heavy. Skewers arrive one by one until you say stop, or in courses of 10 to 20: angel shrimp, wagyu, kisu with crab and mitsuba, Kawachi duck with porcini, a roast-beef-and-foie-gras finale, even an eel chazuke skewer and dessert. A tomato-and-mozzarella salad with hot fried zucchini opens, and the aosa dashi chazuke is a favourite way to finish. Unusually for kushiage, the shop says it can make the skewers gluten-free or vegetarian on request — say so when you book. One November 2025 diner found the batter hard and gritty; a September 2026 diner ranks it No. 1 for skewers.",
    chef_bio: { chef_name: null, roles: ['Owner (runs the shop alone, per July and August 2026 reviews)'], origin: null, background: 'Creative kushiage counter in Kitahorie, open about ten years (July 2026 review, from a regular since the opening). One person cooks and serves (July and August 2026 reviews); a diner describes the master as having a strong personality (August 2026 review).', philosophy: 'Kushiage halfway between kushikatsu and tempura, from seasonal market produce; 100% rice oil, and gluten-free, wheat-allergy, vegetarian and children\'s skewers on request (shop site).', specialty: 'Omakase creative kushiage; aosa dashi chazuke.',
      anecdotes: [
        { text: '"Creative skewers made with rice flour and rice oil. They are simply the best… crispy, light, delicious, and won\'t leave you feeling heavy." — September 2026.', source: R + 'B537053470/' },
        { text: '"I\'ve been coming to this place since it opened 10 years ago. The quality at this price is unbeatable." — July 2026.', source: R + 'B531203171/' },
      ],
      japanese_sources_summary: '店のサイト: 大阪堀江 創作串揚げ 勝新、大阪市西区北堀江1-10-2 都市開発ビル 101、18:00〜23:00最終入店・24時閉店、日曜定休、ネタが売り切れ次第終了。串揚げは「串カツ」と「天ぷら」の中間の料理、ベジタリアン・グルテンフリーにも対応、子供用の串揚げあり、その日に市場で仕入れた旬のものの串揚げ、おまかせ串揚げコース (よいところで声をかける、目安10本・15本・20本)、和歌山県の築野 (つの) 米油100%使用、小麦アレルギー・グルテンフリー対応 (希望の人は声をかける)。食べログ: 堀江串揚げ 勝新、四ツ橋駅から113m、月〜土18:00〜翌1:00、日曜休み、予約可、カード (JCB、AMEX)・QUICPay・QR可、10席、禁煙。口コミ(2025年10月〜2026年9月): 米粉の衣と米油、軽くてもたれない、最後にバーナーで仕上げ、おまかせで好きなところで止める、10・12・13・15・20本のコース、1本300円ほど、最初のサラダと揚げたズッキーニ、天使の海老、和牛ヒレ、キス・カニ・三つ葉、蓮根と大葉の挽肉、トリュフバターのじゃがいも、タコと芽キャベツ、Kawachi の鴨とポルチーニ、つぶ貝と舞茸、ホタルイカと筍、生麩の酢味噌といくら、アワビと菜の花、ローストビーフのフォアグラ巻き、鰻の茶漬け、デザートの串、ごま塩・だし醤油・ソース・レモン、あおさのだし茶漬け、ひとりで営業していていつも満席なので予約は必須、開店から10年の常連、10周年のシャトーブリアンの串、衣が固くてざらついたという声も。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, MENU, R + 'B515767451/', R + 'B523374560/', R + 'B527731453/', R + 'B531203171/', R + 'B533042715/', R + 'B534132902/', R + 'B537053470/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (one-person counter, usually full); mention gluten-free or vegetarian when booking (2026).' },
    safety: { ...SAFETY0,
      gf_cross_contamination: [
        { text: 'A May 2026 omakase included a wheat-gluten (nama-fu) skewer, and a February 2026 diner mentions the shop\'s care over "flour and breadcrumbs"; no separate fryer is described.', source: R + 'B527731453/' },
      ],
      soy_sauce_wheat: [
        { text: 'Dips offered: sesame salt, dashi soy sauce, sauce and lemon (February 2026 review); ask which are wheat-free.', source: R + 'B523374560/' },
      ],
      staff_allergy_handling: [
        { text: 'Shop: 「小麦アレルギー、グルテンフリーご対応致します。ご希望の方はお声をお掛け下さい。」 (wheat allergy and gluten-free catered for; ask).', source: MENU },
      ],
      positives: [
        { text: 'Shop: kushiage can be made vegetarian or gluten-free (「串揚げはベジタリアン・グルテンフリーにも対応しており」); frying oil is 100% Tsuno rice oil.', source: ABOUT },
        { text: 'Reviewers describe a rice-flour batter fried in rice oil (October 2025–September 2026).', source: R + 'B537053470/' },
      ] },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-10-2 都市開発ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; shop site live; reviews dated October 2025–September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目10番2号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B530954880/', R + 'B527731453/'],
    price_note: 'The shop site lists 10 / 15 / 20 skewers at ¥2,400 / ¥3,600 / ¥4,800 before tax (undated); a May 2026 diner puts it at about ¥300 a skewer.', last_checked: TODAY, items: [
      it('勝新おまかせ串揚げコース', '', 'Katsushin omakase kushiage course (stop when you like)', '', 'Courses', 'ask', 'ask', 'Shop site; courses of 10, 13, 15 and 20 skewers in June 2026. Gluten-free on request.', 'omakase'),
      it('お試し5本セット', '', 'Trial set of 5 skewers with a mini salad', '', 'Courses', 'ask', 'ask', 'Shop site (undated).', 'trial5'),
      it('', '', 'Aosa seaweed dashi chazuke', '', 'To finish', 'ask', 'no', 'July 2026.', 'chazuke'),
    ] }, {
    cuisine: '旬の市場の食材の創作串揚げ、「串カツ」と「天ぷら」の中間 (10席)・おまかせで好きなところで止めるか、10・12・13・15・20本のコース。2026年5月の口コミでは1本300円ほど・米粉の衣、和歌山県の築野 (つの) 米油100% (店のサイト)・最初にサラダと揚げたズッキーニ・2025〜26年の串: 天使の海老、和牛ヒレ、キス・カニ・三つ葉、蓮根と大葉の挽肉、トリュフバターのじゃがいも、タコと芽キャベツ、Kawachi の鴨とポルチーニ、つぶ貝と舞茸、ホタルイカと筍、アワビと菜の花、ローストビーフのフォアグラ巻き、鰻の茶漬け、デザートの串・ごま塩、だし醤油、ソース、レモン・あおさのだし茶漬け・ハイボール、ボトルワイン',
    neighborhood: '北堀江1-10-2 都市開発ビル 1F。四ツ橋駅から113m (徒歩5分ほど)',
    gf_detail: '店によると串揚げはグルテンフリーにでき、小麦アレルギーにも希望すれば対応 (「小麦アレルギー、グルテンフリーご対応致します。ご希望の方はお声をお掛け下さい。」、店のサイト)。口コミ (2025年10月〜2026年9月) では衣は米粉で米油で揚げる。ただし2026年2月の口コミはパン粉にもふれていて、2026年5月のコースには生麩の串もあり、別の揚げ油は書かれておらず、つけだれには醤油やソースも。予約のときに伝えて、グルテンフリーの串の揚げ方を確認を。',
    vegan_detail: '要確認。店によると串揚げはベジタリアンにも対応 (店のサイト) だが、ヴィーガンの記載はない。コースは魚介と肉が中心で、つけだれや締めの茶漬けにはだしを使う。',
    notes: '[串揚げ・北堀江、米粉と米油の創作串、ひとりで切り盛りするカウンター] 堀江で10年ほど創作串揚げを出している10席のカウンターで、ひとりですべてをこなす。店が言うには串カツと天ぷらの中間の料理。市場の旬の食材を米粉の軽い衣で和歌山の米油で揚げ、最後にバーナーで仕上げるので、いくらでも食べられてもたれないという声。串はおまかせで止めるまで次々と、または10〜20本のコースで。天使の海老、和牛、キス・カニ・三つ葉、Kawachi の鴨とポルチーニ、締めくくりのローストビーフのフォアグラ巻き、鰻の茶漬けの串やデザートの串まで。最初はトマトとモッツァレラのサラダに揚げたてのズッキーニ、締めはあおさのだし茶漬けが人気。串揚げにはめずらしく、店によると希望すればグルテンフリーやベジタリアンにも対応するので、予約のときに伝えて。2025年11月には衣が固くてざらついたという声もあるが、2026年9月には串揚げで一番という声も。',
  });
}

// ================================================================ まぐろひろし
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27153836/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:30', '22:30']);
  put({
    id: 'osaka_maguro_hiroshi_minamisenba', name: 'まぐろひろし (Maguro Hiroshi)', category: 'OMNI',
    lat: 34.676041, lng: 135.504199, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the bowls come with wasabi soy sauce and red miso soup, and the evening course includes a tuna burger on a brioche bun and sesame-miso dishes. The shop accepted a no-mayonnaise request made at booking (April 2026), so ask when you reserve.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a tuna specialist; every bowl and course is built on tuna.',
    hours_raw: 'Mon–Sat and public holidays 11:00–14:00 (last order 14:00) and 17:30–22:30 (last order 22:00); closed Sunday, plus irregular days (Tabelog). Lunch bowls without reservation; a June 2026 diner found a queue before 11:00. Evening omakase by reservation, now bookable for one person (April 2026 review). Cards (VISA, Master, JCB, AMEX, Diners), e-money (Rakuten Edy, nanaco, WAON, iD, QUICPay) and PayPay (Tabelog). 10 counter seats; private hire possible; non-smoking, smoking area outside; children of school age welcome; take-out (Tabelog). English, Chinese and Korean menus and English-speaking staff (Tabelog). Opened here on 20 January 2026 per Tabelog; reviewers date the opening to February 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minamisenba 2-11-9, Chisan Mansion Shinsaibashi 104 — 3 min from Nagahoribashi Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Tuna specialist counter, every part of the fish (10 seats) · lunch bowls with red miso soup and pickles: B negitoro bowl ¥2,050 (February 2026; Yamato yam topping +¥100), C half-and-half of lean tuna and negitoro ¥1,980 (June–July 2026), H marinated tuna mix bowl; deep bowls with about 250 g of rice · evening omakase ¥9,900 (April 2026): two of four obanzai (shirasu with sansho oil ¥500, simmered tuna cheek ¥800), a tuna burger on brioche, three nigiri (lean, kama-toro, marinated chu-toro), hand rolls (negitoro, yam and tuna, menegi with sudachi, avocado with nametake, tuna mayo) and a citrus dessert · à la carte: tuna behind the eye with sesame miso ¥800, tuna sashimi with garlic, tuna fish balls, squid and tuna maki on some days · tuna seen in 2026: a 260 kg Nachi-Katsuura fish aged a week, Oma, Canadian · wide sake list, shochu, wine; draft beer ¥800',
    website: null, gmaps: gm('まぐろひろし 南船場'), menu_url: null,
    notes: "[Tuna · Minamisenba, a tuna-only counter from bowls at lunch to omakase at night] A modern Japanese counter three minutes from Nagahoribashi with a whole tuna head in the cold case by the door. It grew out of a members-only tuna club and a borrowed-space lunch counter in Tenjinbashisuji 6-chome that sold out its 30 bowls a day, and moved here in early 2026. Lunch is bowls: negitoro with egg yolk and yam, or the popular half-and-half of marinated lean tuna and creamy negitoro over a deep bowl of rice. Evenings are a ¥9,900 tuna omakase — simmered tuna cheek that falls apart, a tuna burger on brioche, nigiri of lean, kama-toro and marinated chu-toro, then hand rolls — with sake matched to each cut. Diners keep mentioning the owner behind the counter: friendly, funny and full of stories about the fish. One August 2026 diner found the hand rolls too alike.",
    chef_bio: { chef_name: null, roles: ['Owner-chef'], origin: null, background: 'Started as a members-only tuna club, "Maguro Kai" (June 2026 review), then ran lunch in a shared (borrowed) space in Tenjinbashisuji 6-chome, limited to 30 servings, with omakase by referral only; opened its own shop in Minamisenba in early 2026 (February and April 2026 reviews; Tabelog opening date 20 January 2026).', philosophy: 'Every morning fresh tuna chosen at the market, rare cuts and aged tuna, rice blended to suit the fish, and sake matched to each part (Tabelog, shop-provided).', specialty: 'Tuna bowls; tuna omakase with rare cuts and hand rolls.',
      anecdotes: [
        { text: '"The tuna served is aged from a 260kg catch in Kii Katsura… The simmered tuna cheek came with two large chunks… It was tender enough to fall apart with chopsticks." — April 2026, omakase course ¥9,900.', source: R + 'B522444334/' },
        { text: '"The owner, who provides interesting descriptions of the flavors, is very friendly! Oh, and by the way, the owner is really entertaining!" — June 2026.', source: R + 'B532430123/' },
      ],
      japanese_sources_summary: '食べログ: まぐろひろし、大阪市中央区南船場2-11-9 チサンマンション心斎橋 104、長堀橋駅から徒歩3分、心斎橋駅から徒歩5分、月〜土・祝11:00〜14:00・17:30〜22:30 (L.O. 22:00)、日曜休み、不定休あり、予約可、カード・電子マネー・PayPay可、10席 (カウンター)、貸切可、禁煙 (外に喫煙所)、子供可 (小学生から)、テイクアウト、英語・中国語・韓国語のメニュー、英語を話すスタッフ、オープン日2026年1月20日。店の紹介: 和モダンの空間でまぐろを丸ごと、毎朝市場で選ぶ鮮魚、希少部位や熟成まぐろ、ネタに合わせたブレンドのシャリ、部位に合わせる日本酒。口コミ(2026年2月〜10月): Tenjinbashisuji 6-chome の間借り営業から南船場に移転、間借りのころは30食限定、おまかせは紹介制だった、会員制の「Maguro Kai」から始まった、昼はB定食ネギトロ丼2050円 (Yamato (Nebaristar) のトッピング100円)、C定食ハーフ&ハーフ (赤身とネギトロ) 1980円、H定食、赤だし、ご飯は250gほど、11時前から行列、夜はおまかせコース9900円 (おばんざい2品、まぐろバーガー、握り3貫、手巻き、デザート)、しらすの山椒オイル500円、まぐろのほほ肉の煮付け800円、目の裏の身の胡麻味噌和え800円、まぐろのにんにく刺し、つみれ、Nachi-Katsuura の260kgのまぐろを1週間熟成、Oma のまぐろ、カナダのまぐろ、Tanaka Rokujugo などの日本酒、楽しくて話のおもしろい店主、手巻きの味が似ていたという声も。',
      confidence: 'medium', sources: [TB, R + 'B522444334/', R + 'B526948480/', R + 'B527852072/', R + 'B528232040/', R + 'B530577786/', R + 'B532430123/', R + 'B533448493/', R + 'B535607576/', R + 'B537960117/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-11-9 チサンマンション心斎橋 104',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated February–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目11番9号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522444334/', R + 'B530577786/', R + 'B528232040/'],
    price_note: 'Prices from February–July 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'C set: half-and-half bowl (lean tuna and negitoro), with soup', '¥1,980', 'Lunch', 'ask', 'no', 'June–July 2026.', 'halfhalf'),
      it('', '', 'B set: negitoro bowl, with red miso soup', '¥2,050', 'Lunch', 'ask', 'no', 'February 2026.', 'negitoro'),
      it('', '', 'Maguro Hiroshi omakase course', '¥9,900', 'Course', 'no', 'no', 'April 2026; includes a tuna burger on brioche.', 'omakase'),
      it('', '', 'Simmered tuna cheek (obanzai)', '¥800', 'Obanzai', 'ask', 'no', 'April 2026.', 'hoho'),
      it('', '', 'Tuna with sesame miso (from behind the eye)', '¥800', 'À la carte', 'ask', 'no', 'April 2026.', 'gomamiso'),
    ] }, {
    cuisine: 'まぐろを丸ごと味わうまぐろ専門のカウンター (10席)・昼の丼 (赤だしと漬物つき): B定食ネギトロ丼2050円 (2026年2月、Yamato (Nebaristar) のトッピング100円)、C定食ハーフ&ハーフ (赤身とネギトロ) 1980円 (2026年6〜7月)、H定食 (漬けまぐろの丼)、深い丼でご飯は250gほど・夜のおまかせ9900円 (2026年4月): おばんざい4種から2品 (しらすの山椒オイル500円、まぐろのほほ肉の煮付け800円)、ブリオッシュのまぐろバーガー、握り3貫 (赤身、カマトロ、漬け中トロ)、手巻き (ネギトロ、山芋とまぐろ、芽ねぎとすだち、アボカドとなめたけ、ツナマヨ)、柑橘のデザート・一品: 目の裏の身の胡麻味噌和え800円、まぐろのにんにく刺し、つみれ、日によってイカとまぐろの巻き・2026年のまぐろ: 1週間熟成の Nachi-Katsuura の260kg、Oma、カナダ・日本酒が豊富、焼酎、ワイン、生ビール800円',
    neighborhood: '南船場2-11-9 チサンマンション心斎橋 104。長堀橋駅から徒歩3分、心斎橋駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。丼はわさび醤油と赤だしで、夜のコースにはブリオッシュのまぐろバーガーや胡麻味噌の料理も。予約のときのマヨネーズ抜きの希望に応じてくれたので (2026年4月)、予約のときに確認を。',
    vegan_detail: 'ヴィーガンではありません。まぐろ専門店で、丼もコースもすべてまぐろ。',
    notes: '[まぐろ・南船場、昼は丼、夜はおまかせのまぐろ専門カウンター] 長堀橋駅から3分、入口の横の冷蔵ケースに大きなまぐろの頭が飾られた和モダンのカウンター。会員制の「Maguro Kai」と、1日30食で売り切れた Tenjinbashisuji 6-chome の間借りのランチから始まり、2026年のはじめにここへ移った。昼は丼で、卵黄と山芋のネギトロ丼か、漬けの赤身ととろけるネギトロのハーフ&ハーフが人気。ご飯はたっぷり。夜は9900円のまぐろのおまかせ。箸でほぐれるほほ肉の煮付け、ブリオッシュのまぐろバーガー、赤身・カマトロ・漬け中トロの握り、そして手巻き。部位に合わせた日本酒も。カウンターの店主が気さくでおもしろく、まぐろの話が楽しいという声が多い。2026年8月には手巻きの味が似ていたという声も。',
  });
}

// ================================================================ 鉄板焼きとお酒 sAtori家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27121829/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '23:30']);
  put({
    id: 'osaka_teppanyaki_satoriya_minamisenba', name: '鉄板焼きとお酒 sAtori家 (Teppanyaki to Osake sAtoriya)', category: 'OMNI',
    lat: 34.676508, lng: 135.501847, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the hamburg steak and steaks come with sauces, and lunch also has tonkatsu, fried chicken and curry, so ask which dishes can be done with salt.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a teppanyaki grill built on beef, pork and seafood; even the vegetable dishes use butter, cream and cheese sauces.',
    hours_raw: 'Mon–Sat 11:30–14:00 (last order 13:30) and 17:30–23:30 (last order 23:00); closed Sunday and public holidays (Tabelog). Reservations accepted; same-day cancellations charged (Tabelog). No cards at lunch; cards, e-money and PayPay otherwise, and a September 2026 diner paid by PayPay at lunch (Tabelog). 18 seats, counter and tables; private hire for 11 or more; smoking allowed in the evening, not at lunch; free Wi-Fi (Tabelog). Call ahead before bringing children (Tabelog). Sister restaurant: Yoshoku-ya Izanagi in Ebisu-cho (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minamisenba 3-6-25, IBC Shinsaibashi east 1F, at the back of the building off a quiet alley — 3 min north of Shinsaibashi Stn',
    cuisine: 'Teppanyaki and drinks, from the counter griddle or the tables (18 seats) · daily blackboard menu · teppan hamburg steak (the house signature), misuji and Kuroge wagyu steaks, tonteki with Awaji onion steak, napa cabbage steak, Awaji onion in browned-butter cream sauce, napa cabbage with Gouda sauce, Kumamoto red eggplant with ginger sauce, smoked daikon with cream cheese, mint vegetable pickles, Akashi octopus sashimi, seared duck prosciutto, scallop bruschetta, potato salad topped with a fried egg, tenderloin cutlet, sukiyaki · lunch about ¥900–1,000 with salad: hamburg steak, tonteki, tonkatsu, beef-tendon curry, weekly special (fried salmon, yuzu-pepper fried chicken); large rice free · party courses with 90-minute all-you-can-drink: hamburg ¥5,680 (food only ¥3,880), creative teppanyaki ¥6,180 (¥4,380), sukiyaki of crossbred beef and Awaji onions ¥6,680 (¥4,880) · sake and wine',
    website: null, gmaps: gm('鉄板焼きとお酒 sAtori家 南船場'), menu_url: null,
    notes: "[Teppanyaki · Minamisenba, a hidden griddle counter for hamburg lunches and wine evenings] Tucked into the back of a building in a quiet Minamisenba alley, past the queue for the ramen shop out front, this calm counter-and-tables grill cooks in front of you. Lunch is busy with people working nearby: a fluffy, juicy teppan hamburg steak with roasted Awaji onions, or tonteki, curry or the weekly special, around ¥1,000 with a big salad and free large rice. In the evening the blackboard turns to the vegetables one regular raves about — a napa cabbage steak that amazed a first-timer, Awaji onions in browned-butter cream — alongside misuji steak, the house hamburg and sukiyaki, with a good sake and wine list. Party courses with all-you-can-drink suit groups; the whole room can be booked for 11 or more.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Teppanyaki izakaya in Minamisenba; the shop describes its dishes as cooked by skilled chefs and runs a sister restaurant, Yoshoku-ya Izanagi, in Ebisu-cho (Tabelog, shop-provided). A diner was back after about three years (August 2026 review).', philosophy: 'A daily blackboard menu paired with sake; cooking at a counter you can watch (Tabelog, shop-provided). Ingredients from the Kansai region (August 2026 review).', specialty: 'Teppan hamburg steak; napa cabbage steak; Awaji onion dishes.',
      anecdotes: [
        { text: '"The standout for me was the Napa cabbage steak… The sweetness and aroma were perfectly highlighted, making it a truly unique dish that only this restaurant could offer." — October 2025, fifth or sixth visit.', source: R + 'B473003844/' },
        { text: '"The Hamburg Steak lunch was juicy and delicious… For just JPY 1,000, it even comes with a salad." — July 2026.', source: R + 'B531449755/' },
      ],
      japanese_sources_summary: '食べログ: 鉄板焼きとお酒 sAtori家、大阪市中央区南船場3-6-25 IBC心斎橋east 1F、心斎橋駅から北へ徒歩3分、月〜土11:30〜14:00 (L.O. 13:30)・17:30〜23:30 (L.O. 23:00)、日曜・祝日休み、予約可、当日キャンセルは料金あり、ランチはカード不可、カード・電子マネー・PayPay可、18席、11名から貸切可、夜は喫煙可・昼は禁煙、Wi-Fiあり、子連れは電話で確認。店の紹介: 心斎橋の路地裏の隠れ家の鉄板焼き、カウンターで目の前で焼く、日替わりの黒板メニューと日本酒、ワインも豊富、アラカルトからコースまで、姉妹店の Yoshoku-ya Izanagi (Ebisu-cho)、ハンバーグのコース5680円 (料理のみ3880円)、創作鉄板焼きコース6180円 (4380円)、交雑牛と淡路島の玉ねぎのすき焼きコース6680円 (4880円)、飲み放題90分。口コミ(2025年9月〜2026年10月): ビルの奥、手前のラーメン店の行列、鉄板ハンバーグ、淡路島の玉ねぎのステーキ、トンテキ、とんかつ、牛すじカレー、週替わり (鮭フライ、柚子胡椒の鶏の揚げ物)、昼は900〜1000円でサラダつき、ご飯大盛り無料、夜は白菜のステーキ、淡路島の玉ねぎの焦がしバタークリームソース、白菜のゴーダチーズソース、熊本の赤なすの生姜ソース、燻製大根とクリームチーズ、ミントのピクルス、ミスジのステーキ、黒毛和牛のステーキ、明石のタコの刺身、鴨の生ハムのあぶり、ホタテのブルスケッタ、目玉焼きをのせたポテトサラダ、ヒレカツ、すき焼き、関西の食材、ソースが少し辛かった、ご飯が柔らかかったという声も。',
      confidence: 'medium', sources: [TB, R + 'B473003844/', R + 'B514570527/', R + 'B520264314/', R + 'B523246044/', R + 'B526322601/', R + 'B531449755/', R + 'B534754131/', R + 'B534947239/', R + 'B535668440/', R + 'B537048456/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No cards at lunch; book for the evening (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場3-6-25 IBC心斎橋east 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (corporate member); reviews dated September 2025–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場三丁目6番25号 (go) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B531449755/', R + 'B537048456/'],
    price_note: 'Lunch prices from July–October 2026 reviews; course prices from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Teppan hamburg steak lunch (with salad)', '¥1,000', 'Lunch', 'ask', 'no', 'July 2026.', 'hamburg'),
      it('', '', 'Daily set lunch (e.g. yuzu-pepper fried chicken)', '¥900', 'Lunch', 'no', 'no', 'October 2026.', 'higawari'),
      it('', '', 'Napa cabbage steak', '', 'À la carte', 'ask', 'no', 'October 2025.', 'hakusai'),
      it('', '', 'Creative teppanyaki course, food only', '¥4,380', 'Courses', 'ask', 'no', 'Tabelog listing; ¥6,180 with 90-minute all-you-can-drink.', 'course'),
    ] }, {
    cuisine: 'カウンターの鉄板かテーブルで、鉄板焼きとお酒 (18席)・日替わりの黒板メニュー・鉄板ハンバーグ (看板)、ミスジと黒毛和牛のステーキ、淡路島の玉ねぎのステーキを添えたトンテキ、白菜のステーキ、淡路島の玉ねぎの焦がしバタークリームソース、白菜のゴーダチーズソース、熊本の赤なすの生姜ソース、燻製大根とクリームチーズ、ミントの野菜のピクルス、明石のタコの刺身、鴨の生ハムのあぶり、ホタテのブルスケッタ、目玉焼きをのせたポテトサラダ、ヒレカツ、すき焼き・ランチは900〜1000円ほどでサラダつき: ハンバーグ、トンテキ、とんかつ、牛すじカレー、週替わり (鮭フライ、柚子胡椒の鶏の揚げ物)、ご飯大盛り無料・飲み放題90分つきのコース: ハンバーグ5680円 (料理のみ3880円)、創作鉄板焼き6180円 (4380円)、交雑牛と淡路島の玉ねぎのすき焼き6680円 (4880円)・日本酒、ワイン',
    neighborhood: '南船場3-6-25 IBC心斎橋east 1F、静かな路地からビルの奥へ。心斎橋駅から北へ徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ハンバーグやステーキにはソース、ランチにはとんかつ、鶏の揚げ物、カレーもあるので、塩で食べられる料理を確認を。',
    vegan_detail: 'ヴィーガンではありません。牛、豚、魚介の鉄板焼きで、野菜の料理にもバター、クリーム、チーズのソースを使う。',
    notes: '[鉄板焼き・南船場、ハンバーグのランチとワインの夜、隠れ家の鉄板カウンター] 南船場の静かな路地のビルの奥、手前のラーメン店の行列を抜けた先にある、カウンターとテーブルの落ち着いた鉄板焼き。目の前で焼いてくれる。昼は近くで働く人に人気で、ふっくらジューシーな鉄板ハンバーグに淡路島の玉ねぎのロースト、またはトンテキ、カレー、週替わりが1000円ほど。サラダもたっぷりで、ご飯大盛りは無料。夜は黒板のメニューに、ある常連が絶賛する野菜料理が並ぶ。初めての連れが驚いた白菜のステーキ、淡路島の玉ねぎの焦がしバタークリーム。ミスジのステーキ、看板のハンバーグ、すき焼きも。日本酒とワインも充実。飲み放題つきのコースはグループ向けで、11名から貸切もできる。',
  });
}

save();
