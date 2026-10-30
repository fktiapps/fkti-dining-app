// Osaka sweep (2-mile circle around Dotonbori), batch 218 — mom-phase clean-up: listings near the centre with 30+ reviews passed over without a skip() mark.
//   + 鮨 和恵 Sushi Kazue (8-seat ¥4,400 omakase counter of the 881 Group, Kochi fish; Higashi-Shinsaibashi)
//   + 小川のおかん Ogawa no Okan (fortune-telling dining bar, every staff member a fortune-teller; Bamboo Alley 1F, Amerikamura)
//   + 隠れ家焼肉 漱石 Soseki (8-seat hideaway yakiniku counter; Bamboo Alley 2F, Amerikamura)
//   + 地鶏焼とり 高や Jidori Yakitori Takaya (binchotan yakitori since 2006; Higashi-Shinsaibashi)
//   Chain check: Sushi Kazue belongs to the 881 Group, two of whose counters are already researched records
//   (osaka_sushi_hibiki_soemoncho, osaka_sushi_koshin_higashishinsaibashi) — each runs under its own name and chef, so it is
//   researched like them, not skipped. The other three are single shops (official site / web search found no branches).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 218);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮨 和恵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27154693/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '19:00'], ['19:30', '21:30']);
  put({
    id: 'osaka_sushi_kazue_higashishinsaibashi', name: '鮨 和恵 (Sushi Kazue)', category: 'OMNI',
    lat: 34.671808, lng: 135.505692, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The set course ends with a small ramen of fish-bone broth (wheat noodles) and includes marinated tuna, soy-simmered anago and soy on the nigiri; the Tabelog listing asks diners to note allergies when booking, so say so then.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase with a fish-broth ramen.',
    hours_raw: 'Mon–Sat and holidays, two seatings 17:00–19:00 and 19:30–21:30; closed Sunday; closing days may vary (Tabelog). An August 2026 diner was told the start would move 30 minutes earlier from September; earlier 2026 reviews give 17:30 and 20:00. One course, ¥4,400 for 15 items, with extra nigiri to order afterwards; a drink order is required (January 2026 review). Hard to book (September 2026 reviews). Occasional "sushi gathering" nights with all-you-can-drink, announced on LINE, 8 guests only (October 2026 review). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay; no e-money (Tabelog). 8 counter seats; non-smoking (Tabelog). Opened 6 January 2026 (Tabelog); a September 2026 diner says it was formerly called Sushi Asami.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-1-27, Suocho Wings Building 3F, just off Sakaisuji — 3 min from Nagahoribashi Stn',
    cuisine: 'Omakase sushi counter of the 881 Group (8 seats) · one course ¥4,400, 15 items: three small appetizers, three kinds of sashimi, about 8–10 nigiri, a mini fish-bone paitan ramen and dessert · much of the fish from Sukumo, Kochi · shari of white vinegar or red vinegar to suit the topping · examples (June–October 2026): medai with green eggplant sauce, mozuku vinegar with figs and Shine Muscat grapes, charcoal-grilled eel, vinegar-washed horse mackerel, seared sardine, kuro-mutsu, marinated tuna on red-vinegar rice, bonito with hidden mustard, sea urchin and abalone in a light broth, toro-taku avocado hand roll, anago in white or dark soy, almond tofu · extra nigiri: nodoguro, white shrimp, sea urchin · sake chosen by the chef (about 10–20 kinds), half servings',
    website: null, gmaps: gm('鮨 和恵 東心斎橋'), menu_url: null,
    notes: "[Sushi · Higashi-Shinsaibashi, a ¥4,400 omakase of Kochi fish from women chefs] An eight-seat L-shaped counter on the third floor of a mixed-use building off Sakaisuji, part of the 881 Group, whose sushi counters all charge ¥4,400 for one course but buy and cook in their own way. Here the fish comes largely from Sukumo in Kochi, the owner's home prefecture, and the meal opens with a short video about Kochi's seas. A September 2026 diner calls it the group's only sushi counter run by a woman chef; per a January 2026 review, a chef called Kazue, formerly of the Michelin-listed Sushi Chiharu in Fukushima, joined that month. Expect three appetizers, three sashimi, nigiri on white- or red-vinegar rice to suit each fish, a mini fish-bone ramen in a soup bowl (the broth simmered 3–4 hours, per a June 2026 diner) and almond tofu, then extra nigiri such as nodoguro or sea urchin. A charcoal grill went in during summer 2026 for the eel. Regulars return every few months; a few diners found the fish ordinary, the room cramped and snack-bar-like, and the drinks pricey.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (from Kochi, unnamed in sources)', 'Chef Kazue (named in a January 2026 review)'], origin: 'The owner is from Kochi (August and September 2026 reviews).', background: 'Sushi counter of the 881 Group, whose counters all serve one ¥4,400 course (2026 reviews); opened 6 January 2026 per Tabelog, formerly Sushi Asami (September 2026 review). Per a January 2026 review, Kazue, previously at Sushi Chiharu in Fukushima (listed in the Michelin Guide five years running), joined that month, "making it a duo of female chefs". The listing describes a woman chef with 10 years of experience who trained at a well-known restaurant. The owner cooks at the counter with two staff on drinks (August 2026 review), chooses the sake and installed a charcoal grill for eel in July 2026.', philosophy: 'Fish from the owner\'s home waters in Kochi; rice seasoned with white or red vinegar to suit each topping (June 2026 review).', specialty: 'Kochi fish nigiri; fish-bone paitan ramen to finish.',
      anecdotes: [
        { text: '"This particular restaurant sources many ingredients from Sukumo in Kochi Prefecture… due to the long history of sushi-making here, the nigiri has a beautifully elongated shape." — September 2026, seventh visit.', source: R + 'B523168568/' },
        { text: '"First, the owner, who is from Kochi, showed us a video explaining the ocean currents of Kochi… The owner handled the cooking while two other staff members took care of drinks and cleaning." — August 2026, ¥4,400 course.', source: R + 'B534415581/' },
        { text: '"For the anago, we could choose between white soy sauce and dark soy sauce, so my husband and I each got one." — June 2026.', source: R + 'B524970531/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 和恵、大阪市中央区東心斎橋2-1-27 周防町ウィングスビル 3F、長堀橋駅から徒歩3分、月〜土・祝17:00〜19:00・19:30〜21:30、日曜休み、カード・PayPay可、電子マネー不可、カウンター8席、禁煙、2026年1月6日オープン、アレルギーは予約の備考欄に。店の紹介: 高知県の Sukumo の魚介のコース、経験10年の女性の大将、おまかせコース15品4,400円 (前菜、にぎり、魚介のだしのラーメン、デザート)、大将が選ぶ日本酒10〜20種。口コミ(2026年1月〜10月): 881 Group の店はどこもコース4,400円、高知出身のオーナー、最初に高知の海の動画、ネタに合わせて白酢と赤酢のシャリ、漬けまぐろは赤酢のシャリ、魚のアラを3〜4時間煮たスープのミニラーメン、杏仁豆腐、追加でのどぐろ、白エビ、ウニ、2026年7月に鰻を焼く炭火の焼き台、2026年1月から Sushi Chiharu にいた Kazue さんが加わった、もとは Sushi Asami という店名、ドリンクの注文は必須、日本酒180mlで1,650円、不定期の飲み放題つきのイベントは LINE で告知、無断キャンセルがあってもキャンセル料はとらない、店内が狭い、普通の味だったという声も。',
      confidence: 'medium', sources: [TB, R + 'B523168568/', R + 'B524748019/', R + 'B524970531/', R + 'B530268593/', R + 'B534415581/', R + 'B534903727/', R + 'B536617690/', R + 'B533262452/', R + 'B534866628/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One set course at a small counter; book ahead (2026).' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The Tabelog listing asks diners with allergies to say so in the remarks when booking.'] },
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区東心斎橋2-1-27 周防町ウィングスビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目1番27号 (go) 6m. Same building as Sushi Shizuku Shinsaibashi (osaka_sushi_shizuku_shinsaibashi, 周防町ウィングス 1F); the two Tabelog points are about 3 m apart, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B523168568/', R + 'B536617690/'],
    price_note: 'Course price from the Tabelog listing and 2026 reviews; drink prices from a January 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course, 15 items (ends with a mini fish-bone ramen)', '¥4,400', 'Course', 'no', 'no', 'Tabelog listing; 2026 reviews.', 'omakase'),
      it('', '', 'Extra nigiri (nodoguro, white shrimp, sea urchin and others)', '', 'Add-ons', 'ask', 'no', 'June–October 2026.', 'extra_nigiri'),
      it('', '', 'Sake, 180 ml', '¥1,650', 'Drinks', 'ask', 'ask', 'January 2026.', 'sake'),
      it('', '', 'Sapporo Lager (Akaboshi) beer', '¥880', 'Drinks', 'no', 'ask', 'January 2026.', 'beer'),
    ] }, {
    cuisine: '881 Group のおまかせの鮨のカウンター (8席)・コースは4,400円のひとつで15品: 小鉢3品、刺身3種、にぎり8〜10貫ほど、魚のアラのパイタンのミニラーメン、デザート・魚の多くは高知県の Sukumo から・シャリはネタに合わせて白酢か赤酢・例 (2026年6月〜10月): 目鯛の青茄子あんかけ、いちじくとシャインマスカットのもずく酢、炭火で焼いた鰻、アジの酢洗い、炙りイワシ、黒むつ、赤酢のシャリの漬けまぐろ、からしを忍ばせた鰹、ウニとアワビのやさしいスープ、トロたくアボカドの手巻き、白醤油か濃口の穴子、杏仁豆腐・追加のにぎり: のどぐろ、白エビ、ウニ・大将が選ぶ日本酒 (10〜20種ほど)、半量から',
    neighborhood: '東心斎橋2-1-27 周防町ウィングスビル 3F、堺筋から少し入ったところ。長堀橋駅から徒歩3分',
    gf_detail: '要確認。コースの締めは魚のアラのスープの小さなラーメン (小麦の麺) で、漬けまぐろ、醤油で煮た穴子、にぎりの醤油も。食べログでは予約の備考欄にアレルギーを書くよう案内があるので、そのときに伝えて。',
    vegan_detail: 'ヴィーガンではありません。魚介のおまかせで、魚のスープのラーメンも。',
    notes: '[鮨・東心斎橋、女性の大将が握る高知の魚の4,400円のおまかせ] 堺筋から少し入った雑居ビルの3階にある、L字のカウンター8席の店。881 Group の鮨の店はどこもコース4,400円のひとつだけだが、仕入れや仕立ては店ごとに違う。ここの魚は多くがオーナーの地元、高知県の Sukumo から届き、食事は高知の海の短い動画から始まる。2026年9月の口コミでは、881 Group で唯一女性の大将の鮨の店。2026年1月の口コミによれば、ミシュランに載る Fukushima の Sushi Chiharu にいた Kazue さんがその月から加わった。小鉢3品、刺身3種、魚ごとに白酢か赤酢のシャリで握るにぎり、汁椀で出る魚のアラのミニラーメン (スープは3〜4時間煮るという2026年6月の口コミ)、杏仁豆腐。そのあとにのどぐろやウニなどを追加で。2026年の夏には鰻のために炭火の焼き台も入った。数か月おきに通う常連もいる一方、魚は普通、店内が狭くスナックのよう、飲み物が高いという声も。',
  });
}

// ================================================================ 小川のおかん
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27099746/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.ogawanookan.com/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'osaka_ogawa_no_okan_nishishinsaibashi', name: '小川のおかん (Ogawa no Okan)', category: 'OMNI',
    lat: 34.673058, lng: 135.49855, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the menu is wheat-based (curry udon, handmade pasta, takoyaki, naan pizza, tonkatsu, squid tempura), and the dashimaki is made with soy sauce; caprese and the cheese platter are among the few likely exceptions.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: most dishes use meat, seafood, egg, dairy or dashi. Bar snacks such as fries, mixed nuts and the cucumber dish may suit; ask.',
    hours_raw: 'Daily 18:00–24:00 (last order 23:30); closing days not fixed, announced on the official LINE (Tabelog; official site). Table charge ¥2,200 a person including tax (Tabelog); it covers the fortune-telling, which is otherwise free: a printed personality-analysis sheet and an animal card for everyone, then tarot, four pillars of destiny or palm reading at the table (Tabelog; official site; 2025–2026 reviews). Course reservations accepted; seat-only bookings order on the day (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 20 seats: 12 counter, 8 table; whole-shop hire for up to 20; non-smoking (Tabelog). Opened 23 November 2016 (official site). The official site also lists a mapo-tofu lunch shop that opened in September 2024 in the same space; lunch hours are not given.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-9-20, Bamboo Alley 1F, in Amerikamura — 3 min from Shinsaibashi Stn exit 7 or Yotsubashi Stn exit 5',
    cuisine: 'Fortune-telling dining bar, all homemade food (official site; the fries are frozen, it admits) · curry udon ¥1,320 · mapo tofu from a recipe by the owner\'s son ¥1,320 · handmade mentaiko cream pasta ¥1,265 · shrimp or beef-tendon fried rice ¥1,188 · Napolitan ¥1,518 · five-egg dashimaki ¥1,320 · stewed hamburg with egg or cheese ¥1,100 · takoyaki, 10, cooked to order ¥880 · shrimp shumai, shrimp mayo, karaage, tonkatsu · cheese spring rolls, squid tempura, caprese, cheese platter · milk kakigori ¥913–968 · cocktails named for lucky colours and kinds of luck (prices from the official site, read October 2026)',
    website: SITE, gmaps: gm('小川のおかん 西心斎橋'), menu_url: SITE + 'menus',
    notes: "[Izakaya · Amerikamura, a dining bar where every member of staff reads fortunes] A cosy, snack-bar-like room on the ground floor of Bamboo Alley where the cover charge buys a fortune-telling session. Everyone gets a printed personality sheet drawn from each guest's birth date and an animal card, then a reading of choice (tarot, four pillars of destiny or palm reading) at the table, from a staff of fortune-tellers. The owner goes by the shop's name, Ogawa no Okan ('Ogawa's mum'), and per the official site was a bank clerk, then ran an MC and narration company and school, then turned to fortune-telling (25 years of it by 2023); the dashimaki came from studying with a teacher from the owner's cooking days, and the mapo tofu from the owner's son, who trained in a Chinese restaurant. The menu is long and homey (curry udon, mentaiko cream pasta, a five-egg dashimaki, hamburg, takoyaki made to order), with cocktails matched to your lucky colour. Diners mostly come for the readings, some finding them uncannily accurate and others not, and praise the food too; a January 2025 diner saw it fill up soon after 6:30 pm on a weekday.",
    chef_bio: { chef_name: '小川のおかん (Ogawa no Okan)', roles: ['Owner and fortune-teller (goes by the shop name)'], origin: null, background: 'Per the official site: first worked at a bank, quit after a row with a boss, ran a company and school for MCs and narration, passed the company to a friend and became a fortune-teller, with 25 years of fortune-telling as of 2023; reads four pillars of destiny, personality psychology, biorhythms and tarot. Studied dashimaki with a teacher from the owner\'s days as a cook before opening the bar on 23 November 2016. The owner\'s son trained at a Chinese restaurant and wrote the mapo tofu recipe. A head cook and a manager are on the staff list. The bar sits in a group company with a vocal-training school (official site).', philosophy: 'Fortune-telling made open and free, with the talk among friends afterwards as the best part (official site).', specialty: 'Free fortune-telling with drinks; curry udon; mapo tofu; dashimaki.',
      anecdotes: [
        { text: '"While chatting with her, she said, \'Let me take a look at your cards,\' and the tarot reading began, which was surprisingly accurate—what a shock!" — June 2025.', source: R + 'B511630535/' },
        { text: '"For a serious reading of about 30 minutes per person, the charge is only JPY 2000, which is a great deal." — July 2026.', source: R + 'B532705553/' },
      ],
      japanese_sources_summary: '公式サイト: 占いダイニングバー 小川のおかん、2016年11月23日に大阪心斎橋アメ村にオープン、スタッフ全員が占い師で占いは無料 (四柱推命、ISD個性心理学、バイオリズム、タロット、手相)、年間1万人以上を占う、完全手作りのメニュー (ポテト系は冷食)、名物のカレーうどん1,320円、おかんの息子が作ったこだわり麻婆豆腐1,320円、手打ちの明太子クリームパスタ1,265円、大きな大きなだし巻き卵1,320円、煮込みハンバーグ1,100円、オーダー後に焼くたこ焼き (10個) 880円、ミルクかき氷913〜968円、運気アップのカクテル。おかんSTORY: 最初は銀行員、上司と喧嘩してすぐに退職、司会ナレーションの会社・スクール経営、会社を友人に譲渡して占い師に、占い歴25年 (2023年現在)、調理師時代の恩師にだし巻き卵を習う、息子は中華料理屋で修行した麻婆豆腐をレシピ化。グループ会社に Vocal Space B と日本音楽株式会社、2024年9月に小川のおかんを間借りした麻婆豆腐のランチの店。食べログ (店舗会員): 西心斎橋1-9-20 Bamboo Alley 1F、毎日18:00〜24:00 (L.O. 23:30)、不定休、テーブルチャージ2,200円 (税込)、カード・PayPay可、20席 (カウンター12、テーブル8)、貸切20名まで、禁煙。口コミ(2024年10月〜2026年9月): 誕生日から出す性格の分析シートと動物占い、タロットや手相、スナックのような家庭的な雰囲気、平日の18時半ごろからすぐ満席に、当たったという声も当たらなかったという声も、料理もおいしい。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'blank-1', SITE + 'menus', SITE + 'services-9', SITE + 'services-9-3', SITE + 'general-1', R + 'B511107787/', R + 'B511630535/', R + 'B513628211/', R + 'B530352072/', R + 'B532705553/', R + 'B534212623/', R + 'B535472754/'] },
    cultural_comfort: { level: 'japanese', note: 'The draw is fortune-telling conversation with the staff; no source mentions English (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区西心斎橋1-9-20 Bamboo Alley 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目9番20号 (go) 18m. Same building (Bamboo Alley) as 隠れ家焼肉 漱石 on 2F (osaka_yakiniku_soseki_nishishinsaibashi), about 11 m apart on Tabelog, and as Teppan Dining Yo (1F) and Sushi Keyaki (2F), so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menus', SITE + 'services-9', SITE + 'services-9-2', SITE + 'services-9-3'],
    price_note: 'Prices from the official site menu pages (read October 2026; undated, and some prices differ between its pages).', last_checked: TODAY, items: [
      it('カレーうどん', '', 'Curry udon (house specialty)', '¥1,320', 'Rice and noodles', 'no', 'no', 'Official site.', 'curry_udon'),
      it('明太子クリームパスタ', '', 'Mentaiko cream pasta, handmade noodles', '¥1,265', 'Rice and noodles', 'no', 'no', 'Official site.', 'mentaiko_pasta'),
      it('こだわり麻婆豆腐', '', 'Mapo tofu (the owner\'s son\'s recipe)', '¥1,320', 'Hearty dishes', 'ask', 'ask', 'Official site.', 'mapo'),
      it('大きな大きなだし巻き卵', '', 'Big dashimaki omelette (five eggs)', '¥1,320', 'Hearty dishes', 'ask', 'no', 'Official site.', 'dashimaki'),
      it('煮込みハンバーグ', '', 'Stewed hamburg, fried egg or cheese on top', '¥1,100', 'Hearty dishes', 'ask', 'no', 'Official site; ¥1,100 in a January 2025 review.', 'hamburg'),
      it('たこ焼き（10個）', '', 'Takoyaki, 10, cooked to order', '¥880', 'Hearty dishes', 'no', 'no', 'Official site.', 'takoyaki'),
      it('ミルクかき氷　イチゴ', '', 'Milk shaved ice, strawberry', '¥913', 'Dessert', 'ask', 'no', 'Official site.', 'kakigori'),
    ] }, {
    cuisine: '占いダイニングバー、料理は完全手作り (公式サイト、ポテト系は冷食とも)・カレーうどん1,320円・おかんの息子のレシピの麻婆豆腐1,320円・手打ちの明太子クリームパスタ1,265円・海老か牛すじのチャーハン1,188円・ナポリタン1,518円・卵5個のだし巻き卵1,320円・目玉焼きかチーズの煮込みハンバーグ1,100円・注文後に焼くたこ焼き10個880円・海老シュウマイ、えびマヨ、からあげ、ヒレとんかつ・チーズ春巻き、するめの天ぷら、カプレーゼ、チーズの盛り合わせ・ミルクかき氷913〜968円・ラッキーカラーや運気にちなんだカクテル (値段は公式サイト、2026年10月に確認)',
    neighborhood: '西心斎橋1-9-20 Bamboo Alley 1F、アメ村。心斎橋駅7番出口・四ツ橋駅5番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。カレーうどん、手打ちパスタ、たこ焼き、ナンピザ、とんかつ、するめの天ぷらなど小麦の料理が多く、だし巻き卵も醤油入り。カプレーゼやチーズの盛り合わせは数少ない例外かも。',
    vegan_detail: 'ヴィーガンではありません。ほとんどの料理に肉、魚介、卵、乳製品、だし。フライドポテト、ミックスナッツ、キュウリなどのつまみは合うかも、要確認。',
    notes: '[居酒屋・アメ村、スタッフ全員が占い師のダイニングバー] Bamboo Alley の1階にある、スナックのような居心地のいい店で、チャージ料で占いが受けられる。誕生日から出す性格の分析シートと動物占いのカードを全員がもらい、そのあとテーブルでタロット、四柱推命、手相から選んで占い師のスタッフに見てもらう。オーナーは店名どおり「小川のおかん」と名のり、公式サイトによれば銀行員、司会ナレーションの会社とスクールの経営を経て占い師になった (2023年で占い歴25年)。だし巻き卵は調理師時代の恩師に習い、麻婆豆腐は中華料理屋で修行したおかんの息子のレシピ。メニューは家庭的で品数が多く (カレーうどん、明太子クリームパスタ、卵5個のだし巻き、ハンバーグ、注文後に焼くたこ焼き)、ラッキーカラーに合わせたカクテルも。お目当ては占いで、よく当たったという声もあれば当たらなかったという声も。料理もおいしいと好評。平日の18時半ごろに入ったらすぐに満席になったという2025年1月の声も。',
  });
}

// ================================================================ 隠れ家焼肉 漱石
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27139255/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '02:00']); const S = day(['18:00', '24:00']);
  put({
    id: 'osaka_yakiniku_soseki_nishishinsaibashi', name: '隠れ家焼肉 漱石 (Soseki)', category: 'OMNI',
    lat: 34.673022, lng: 135.498435, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the yukke comes with its own sauce, the cold noodles are Korean-style noodles in beef-bone broth (ingredients not stated), and marinades are not described. Salt-and-lemon cuts such as the green-onion tongue may be simpler; ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a domestic-beef yakiniku and offal counter.',
    hours_raw: 'Mon–Sat, holidays and the days before and after them 18:00–02:00 (last order 01:30); Sunday 18:00–24:00 (last order 23:00); closed only over the New Year (Tabelog). Reservations accepted, online too (Tabelog; October 2026 review). Service and table charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay, d Barai, au PAY; no e-money (Tabelog). 8 counter seats; whole-shop hire for up to 20; smoking allowed (Tabelog; an October 2026 review: at all seats). Opened 17 November 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-9-20, Bamboo Alley 2F, in Amerikamura — about 3 min from Shinsaibashi or Yotsubashi Stn',
    cuisine: 'Hideaway yakiniku counter of domestic beef (8 seats) · omakase course, 11 items ¥7,000 (Tabelog) · signature Kujo green-onion-wrapped thick tongue with lemon · ume-shio horumon: grilled colon with honey plum and chopped shiso · limited daily special outside skirt · premium loin · fresh liver, lightly seared, with sesame oil and salt · toro-taku yukke with egg yolk, wrapped in nori · omasum sashimi · fresh-made kimchi served in a cocktail glass · Soseki cold noodles with sudachi in clear beef-bone broth · sweet-potato brûlée with vanilla ice cream · sake, shochu, wine, highballs',
    website: 'https://www.instagram.com/souseki_shinsaibashi', gmaps: gm('隠れ家焼肉 漱石 心斎橋'), menu_url: null,
    notes: "[Yakiniku · Amerikamura, an eight-seat hideaway counter open until 2 am] Up a flight of stairs on the second floor of a busy building in Amerikamura, a dimly lit eight-seat counter grilling only domestic beef chosen for low odour and fat. Diners keep to the same run of signatures: thick tongue wrapped round sweet Kujo green onion, the ume-shio horumon whose honey-plum tartness and shiso cut the rich colon (one diner who seldom eats horumon could not stop), a lightly seared fresh liver with sesame oil, a toro-taku yukke to wrap in nori, a quickly seared outside skirt, then cold noodles bright with sudachi and a sweet-potato brûlée whose plate gets a powdered-sugar cat. Cat figurines dot the room; one diner took the owner for a cat lover. Good for a date; Tabelog puts the budget at ¥6,000–7,999, and there is a 10% service charge. Smoking is allowed at the counter.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Yakiniku counter opened on 17 November 2023 (Tabelog, shop-maintained); domestic beef chosen for low odour and fat, sourced through the shop\'s own channels (Tabelog). Cat figurines around the room; "It seems the owner is a cat lover" (October 2026 review). Attentive male staff (October 2026 review).', philosophy: 'Only high-quality domestic beef, in a calm hideaway (Tabelog).', specialty: 'Kujo green-onion-wrapped tongue; ume-shio horumon; sweet-potato brûlée.',
      anecdotes: [
        { text: '"Among them, I was particularly impressed by the signature dish, \'Ume Shio Horumon\'. I usually don\'t eat Horumon much, but this one was so delicious that I couldn\'t help but keep eating it." — October 2026.', source: R + 'B536202868/' },
        { text: '"To finish off, a plate of baked sweet potato and vanilla ice cream was served. The adorable cat art made with powdered sugar warmed my heart." — October 2026, course.', source: R + 'B537734885/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 隠れ家焼肉 漱石、焼肉・ホルモン、大阪市中央区西心斎橋1-9-20 2F、御堂筋線心斎橋駅から徒歩3分、月〜土・祝・祝前日・祝後日18:00〜翌2:00 (L.O. 1:30)、日曜18:00〜24:00 (L.O. 23:00)、年末年始のみ休み、予約可、サービス料・チャージ料10%、カード・PayPay・d払い・au PAY可、電子マネー不可、8席、貸切20名まで、喫煙可、2023年11月17日オープン。店の紹介: アメ村のビルの2階の大人の隠れ家、においと脂の少ない国産牛だけ、独自のルートで仕入れ、九条ネギを包んだタン、数量限定の特選ハラミ、梅と塩で食べるホルモン、注文を受けてから作る発酵させないキムチ、おまかせコース11品7,000円。口コミ(2026年9月〜10月): Bamboo Alley の2F、カウンター8席、暗めの照明、スダチの冷麺、さつまいものブリュレとバニラアイス、粉砂糖の猫の絵、店内に猫の置物、センマイの刺身、全席喫煙可、デート向き。',
      confidence: 'medium', sources: [TB, R + 'B536202868/', R + 'B536899802/', R + 'B537225969/', R + 'B537734885/', R + 'B538174990/', R + 'B538210328/', R + 'B538223249/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter; book ahead; smoking allowed (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区西心斎橋1-9-20 Bamboo Alley 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋一丁目9番20号 (go) 7m. Tabelog gives 1-9-20 2F with no building name; an October 2026 review (${R}B536202868/) gives "2F Bamboo Alley, 1-9-20 Nishi Shinsaibashi". Same building as 小川のおかん on 1F (osaka_ogawa_no_okan_nishishinsaibashi), about 11 m apart on Tabelog, and as Sushi Keyaki (2F, 3 m) and Teppan Dining Yo (1F), so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537225969/', R + 'B538174990/'],
    price_note: 'Course price from the Tabelog listing; reviews give no à la carte prices.', last_checked: TODAY, items: [
      it('', '', 'Omakase course, 11 items (Japanese beef)', '¥7,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase'),
      it('', '', 'Kujo green-onion-wrapped tongue (signature)', '', 'Meat', 'ask', 'no', 'October 2026.', 'negi_tongue'),
      it('', '', 'Ume-shio horumon (colon with honey plum and shiso; signature)', '', 'Offal', 'ask', 'no', 'October 2026.', 'ume_horumon'),
      it('', '', 'Toro-taku yukke with egg yolk', '', 'Small dishes', 'ask', 'no', 'October 2026.', 'yukke'),
      it('', '', 'Soseki cold noodles with sudachi', '', 'To finish', 'ask', 'no', 'October 2026.', 'reimen'),
      it('', '', 'Sweet-potato brûlée with vanilla ice cream (signature)', '', 'Dessert', 'ask', 'no', 'October 2026.', 'brulee'),
    ] }, {
    cuisine: '国産牛の隠れ家焼肉のカウンター (8席)・おまかせコース11品7,000円 (食べログ)・名物の九条ネギを包んだ厚切りのタン、レモンで・はちみつ梅と刻んだ大葉で食べるホルモン・数量限定の特選ハラミ・上ロース・さっと炙ったレバー、ごま油と塩で・卵黄をのせて海苔で巻くトロたくのユッケ・センマイの刺身・カクテルグラスに盛った作りたてのキムチ・スダチをのせた澄んだ牛骨スープの冷麺・さつまいものブリュレとバニラアイス・日本酒、焼酎、ワイン、ハイボール',
    neighborhood: '西心斎橋1-9-20 Bamboo Alley 2F、アメ村。心斎橋駅・四ツ橋駅から徒歩3分ほど',
    gf_detail: '要確認。グルテンの情報なし。ユッケには専用のタレ、冷麺は牛骨スープの韓国冷麺 (麺の材料は不明)、下味の説明もない。九条ネギのタンなど塩とレモンで食べるものはシンプルかも、要確認。',
    vegan_detail: 'ヴィーガンではありません。国産牛の焼肉とホルモンのカウンター。',
    notes: '[焼肉・アメ村、深夜2時まで開いているカウンター8席の隠れ家] アメ村のにぎやかなビルの2階、階段を上った先にある照明を落としたカウンター8席の店で、においと脂の少ない国産牛だけを焼く。頼む料理はみな同じ名物の流れ。甘い九条ネギを包んだ厚切りのタン、はちみつ梅と大葉で脂ののったホルモンをさっぱり食べる一品 (ホルモンはあまり食べないという人も箸が止まらなかった)、ごま油でさっと炙ったレバー、海苔で巻くトロたくのユッケ、強火でさっと焼くハラミ。締めはスダチの冷麺と、粉砂糖で猫を描いた皿のさつまいものブリュレ。店内には猫の置物があり、オーナーは猫好きらしいという声。デート向きで、食べログの予算は6,000〜7,999円、サービス料10%。カウンターは喫煙可。',
  });
}

// ================================================================ 地鶏焼とり 高や
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27004771/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'osaka_yakitori_takaya_higashishinsaibashi', name: '地鶏焼とり 高や (Jidori Yakitori Takaya)', category: 'OMNI',
    lat: 34.67337, lng: 135.504419, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; yakitori tare is usually soy-based, and there is a breaded chicken-breast cheese fry. Ask for salt-grilled skewers.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken skewers, chicken sashimi and chicken soup; grilled vegetables such as ginkgo are on the menu, but nothing is described as vegan.',
    hours_raw: 'Mon and Wed–Sun 17:30–23:00 (last order 22:00); closed Tuesday (Tabelog). Reservations accepted, online through Tabelog even late at night (January 2026 review); groups of 6 or more must book a course (Tabelog); same-day bookings often possible and walk-ins come in (2025–2026 reviews). Charge ¥500 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). 20 seats: 10 counter, 10 table; whole-shop hire for 20–50; smoking allowed (Tabelog). Opened 7 March 2006 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: "Higashi-Shinsaibashi 1-7-23, T'z Bldg 2F, toward Sakaisuji — 4 min from Shinsaibashi or Nagahoribashi Stn",
    cuisine: 'Jidori yakitori over binchotan, with wine and shochu (20 seats) · omakase course, 10 items, with 2-hour all-you-can-drink ¥5,500 (Tabelog; ¥5,000 in September 2025); also without drinks · jidori sashimi platter, seared chicken tataki · skewers: negima, tsukune, heart, gizzard, neck, cartilage, breast · chicken-breast cheese fry · tamagoyaki · liver pâté · ginkgo, tomato-bacon · beef marushin and tongue · grilled lamb · chicken soup, onigiri, chicken zosui to finish · wide shochu list, sake, wine',
    website: null, gmaps: gm('地鶏焼とり 高や 東心斎橋'), menu_url: null,
    notes: "[Yakitori · Higashi-Shinsaibashi, a 20-year-old binchotan yakitori upstairs] A second-floor yakitori and wine bar between Shinsaibashi and Namba, nearer Sakaisuji, open since 2006, in a wood-toned Japanese room with a counter close to the staff and spacious tables. The draw is jidori over binchotan: sashimi and seared tataki of chicken, then skewers; one regular orders at least five tsukune every time, and diners also like the liver pâté, the grilled lamb, and beef marushin and tongue. The omakase with two hours of all-you-can-drink is ¥5,500, which a 2025 diner called great value; a chicken zosui makes a filling finish. Diners call the owner and staff friendly and the room relaxed; one found every skewer good but none unforgettable. Smoking is allowed, and same-day bookings usually work.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Yakitori and izakaya opened on 7 March 2006 (Tabelog, shop-maintained); jidori grilled slowly over binchotan charcoal (Tabelog). "A friendly owner and staff" (February 2026 review).', philosophy: 'Chicken dishes with carefully chosen wine and sake, in a calm, modern Japanese room (Tabelog).', specialty: 'Jidori skewers; tsukune; chicken sashimi.',
      anecdotes: [
        { text: '"I absolutely love the tsukune (chicken meatballs) and always order at least five! The liver pâté is also delicious." — February 2026.', source: R + 'B522207356/' },
        { text: '"Yakitori restaurants can be harsh; each skewer is like a business card." — July 2026, omakase course.', source: R + 'B532033842/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 地鶏焼とり 高や、焼き鳥・居酒屋・ダイニングバー、大阪市中央区東心斎橋1-7-23 T\'zビル 2F、心斎橋駅・長堀橋駅から徒歩4分、月・水〜日17:30〜23:00 (L.O. 22:00)、火曜休み、予約可 (6名以上はコース)、チャージ500円、カード可、電子マネー・QR不可、20席 (カウンター10、テーブル10)、貸切20〜50名、喫煙可、2006年3月7日オープン。店の紹介: 地鶏を備長炭でじっくり焼く、串焼きと地鶏の刺身の盛り合わせ、厳選したワインと日本酒、木のぬくもりと和の落ち着いた空間、2時間飲み放題つきのおまかせコース10品5,500円。口コミ(2025年9月〜2026年7月): 2階で外からは何の店かわかりにくい、鶏の刺身、たたき、ねぎま、つくね、ハツ、砂肝、せせり、軟骨、むね、鶏むねのチーズフライ、卵焼き、レバーパテ、銀杏、トマトベーコン、牛のマルシン、タン、ラム、鶏スープ、おにぎり、雑炊、焼酎の種類が多い、気さくなオーナーとスタッフ、当日でも予約しやすい、どれもおいしいが決め手の一本がないという声も。',
      confidence: 'medium', sources: [TB, R + 'B515294275/', R + 'B520021167/', R + 'B521164358/', R + 'B522207356/', R + 'B526878508/', R + 'B527208985/', R + 'B532033842/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tables; smoking allowed; courses for groups (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: "大阪府大阪市中央区東心斎橋1-7-23 T'zビル 2F",
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目7番23号 (go) 7m. Same building number as mahoroba 鉄板 心斎橋 (osaka_mahoroba_teppan_shinsaibashi, address_ja 大阪府大阪市中央区東心斎橋1-7-23, no floor given), whose Tabelog point is about 6 m away, and 3 m from Tempura Etsu (1-7-22) next door, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B515294275/', R + 'B522207356/'],
    price_note: 'Course price from the Tabelog listing; reviews give no à la carte prices.', last_checked: TODAY, items: [
      it('', '', 'Omakase course, 10 items, with 2-hour all-you-can-drink', '¥5,500', 'Course', 'ask', 'no', 'Tabelog listing; ¥5,000 in September 2025.', 'omakase'),
      it('', '', 'Jidori sashimi platter', '', 'Chicken', 'ask', 'no', 'Tabelog listing; 2025–2026 reviews.', 'sashimi'),
      it('', '', 'Tsukune', '', 'Skewers', 'ask', 'no', 'February–March 2026.', 'tsukune'),
      it('', '', 'Chicken zosui', '', 'To finish', 'ask', 'no', 'September 2025.', 'zosui'),
      it('', '', 'Liver pâté', '', 'Small dishes', 'ask', 'no', 'February 2026.', 'pate'),
    ] }, {
    cuisine: '備長炭で焼く地鶏の焼き鳥とワイン、焼酎 (20席)・おまかせコース10品、2時間飲み放題つき5,500円 (食べログ、2025年9月は5,000円)、飲み放題なしも可・地鶏の刺身の盛り合わせ、鶏のたたき・串: ねぎま、つくね、ハツ、砂肝、せせり、軟骨、むね・鶏むねのチーズフライ・卵焼き・レバーパテ・銀杏、トマトベーコン・牛のマルシンとタン・ラム・締めに鶏スープ、おにぎり、鶏雑炊・焼酎の種類が多い、日本酒、ワイン',
    neighborhood: "東心斎橋1-7-23 T'zビル 2F、堺筋寄り。心斎橋駅・長堀橋駅から徒歩4分",
    gf_detail: '要確認。グルテンの情報なし。焼き鳥のタレはふつう醤油ベースで、衣をつけた鶏むねのチーズフライも。塩焼きの串を頼んで。',
    vegan_detail: 'ヴィーガンではありません。鶏の串、鶏の刺身、鶏スープ。銀杏などの焼き野菜はあるが、ヴィーガンの説明はない。',
    notes: '[焼き鳥・東心斎橋、創業20年、備長炭の焼き鳥の2階の店] 心斎橋となんばのあいだ、堺筋寄りにある、2006年からの焼き鳥とワインの店。2階の木のぬくもりのある和の空間に、スタッフとの距離が近いカウンターとゆったりしたテーブル。お目当ては備長炭の地鶏で、鶏の刺身とたたきのあとに串。つくねを毎回5本は頼むという常連も。レバーパテ、ラム、牛のマルシンとタンも好評。2時間飲み放題つきのおまかせは5,500円で、コスパがいいという2025年の声。締めの鶏雑炊でおなかいっぱいに。気さくなオーナーとスタッフ、落ち着いた雰囲気という声。どの串もおいしいが忘れられない一本はなかったという声も。喫煙可で、当日の予約もたいてい取れる。',
  });
}

save();
