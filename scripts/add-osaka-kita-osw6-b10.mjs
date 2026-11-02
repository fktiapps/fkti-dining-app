// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 10.
//   + マレーシア ボレ Malaysia Boleh (Malaysian and Nyonya cooking by Umeda Sky Building; halal-marked seasonings per the shop)
//   + pesce&carne MIMOZA ～ミモザ～ (Italian by Ohatsu Tenjin, since 2025)
//   + 地酒だいにんぐやす Jizake Dining Yasu (seafood and local sake izakaya near Higashi-dori, since 2019)
//   + おにく Takumi Oniku Takumi (Omi-beef yakiniku grilled by the staff, Kitashinchi, since 2022)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b9): the first four odd ids, 27004497, 27151503,
//   27111697, 27131803.
//   Chain check: Malaysia Boleh calls itself Osaka's only Malaysian restaurant (official site). MIMOZA: an October 2026 diner
//   was moved to "their second location nearby", so possibly two shops; none in data. Yasu and Takumi: no other shop found.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ マレーシア ボレ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27004497/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://malaysiaboleh-osaka.com/';
  const H = day(['11:30', '14:30'], ['17:30', '23:00']);
  put({
    id: 'osaka_malaysia_boleh_oyodo', name: 'マレーシア ボレ (Malaysia Boleh)', category: 'OMNI',
    lat: 34.703771, lng: 135.489907, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask; the shop takes allergy requests for courses (official site). No gluten information. Noodle dishes (mee goreng, curry noodles with wheat noodles, spicy seafood thick noodles) contain wheat; fried rice, curries and satay use sauces whose ingredients are not listed.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and the menu has vegetable dishes such as stir-fried water spinach and spicy eggplant salad, but the water spinach is cooked with belacan (shrimp paste) per the official site, and curries and noodles often use shrimp or fish seasonings.',
    hours_raw: 'Wed–Mon 11:30–14:30 (last order 14:00) and 17:30–23:00 (last order 22:00); closed Tuesday (official site; Tabelog). Two-hour limit at busy times (Tabelog). Lunch queues around 12:30–13:00 (September 2026). Course bookings from two people, in advance (official site). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, PayPay, d Barai, au PAY (official site; Tabelog). 26 seats (tables and a small counter); private hire for about 30; non-smoking; children and strollers welcome (Tabelog). The official site announces a price revision from 1 December (year not given).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: true, open_late: false },
    neighborhood: 'Facing Umeda Sky Building, 大淀南1-4-20 — 7 min from JR Osaka Stn, 10 min from JR Fukushima Stn',
    cuisine: 'Malaysian cooking based on Nyonya (Chinese-Malay) dishes, with seasonings bought in Malaysia every year and halal-marked seasonings and ingredients, plenty of halal dishes (official site; Tabelog) · coconut keeps the spice mild (Tabelog) · courses (official site; Tabelog, tax included): Penang course ¥4,200 (prawn crackers, tofu and egg roll salad, satay, tom yum goong, stir-fried water spinach, chicken curry and rice, spicy seafood thick noodles, dessert), Malacca course ¥4,700, Makan course with 90-minute all-you-can-drink ¥5,000 · lunch sets about ¥1,000 with soup, salad and dessert (tapioca): nasi goreng, mee goreng, fried rice, curry noodles with coconut broth, kapao rice, yellow and green curries (August–October 2026) · evening: nasi lemak, stir-fried frog with vegetables, spicy eggplant salad, seafood pineapple fried rice (September 2026)',
    website: OFF, gmaps: gm('マレーシア ボレ 大淀南'), menu_url: OFF,
    notes: "[Malaysian · by Umeda Sky Building, Nyonya cooking] A small Malaysian restaurant facing the Umeda Sky Building, which calls itself Osaka's only Malaysian restaurant and has been open about twenty years, per a September 2026 diner. The cooking is based on Nyonya (Chinese-Malay) dishes, made with seasonings the shop brings back from Malaysia each year; the official site says it uses halal-marked seasonings and ingredients so Muslim guests can eat with peace of mind, and Tabelog lists many halal dishes, though it is not described as certified and alcohol is served. Lunch is the bargain, about ¥1,000 for nasi goreng, mee goreng or curry noodles with soup, salad and tapioca, and a queue forms around 12:30. Evening courses start at ¥4,200 (satay, tom yum goong, water spinach with belacan, chicken curry, spicy seafood noodles). Friendly staff who remember regulars. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; signs a notice on the official site)', 'Chef (unnamed) (official site)'], origin: null, background: 'Official site (read 2026-11-02): "大阪唯一のマレーシア料理店" (Osaka\'s only Malaysian restaurant); Nyonya cooking, a fusion of Chinese and Malay food, with many halal dishes; seasonings bought in Malaysia every year to reproduce the authentic taste; "ハラールマーク付きの調味料や食材を使用しておりますので、イスラム教徒のお客様にも安心して" (halal-marked seasonings and ingredients, so Muslim guests can eat with peace of mind); a room decorated with Malaysian goods. A September 2026 diner writes it seems to have been in business for about 20 years.', philosophy: 'Authentic Malaysian taste, made so that every guest can eat with peace of mind (official site).', specialty: 'Nasi goreng and mee goreng lunches; satay; Penang course.',
      anecdotes: [
        { text: '"The staff remembered me, and it felt just like old times." — September 2026, the kapao rice.', source: R + 'B426428988/' },
        { text: '"I arrived at 12:30, but there was a line, so I wandered around for a bit... Even after returning around 1 PM, the line was still there." — 17 September 2026.', source: R + 'B535689337/' },
        { text: '"The meal came with a salad and dessert, tapioca, all for JPY 1000." — September 2026, the curry noodles.', source: R + 'B535159382/' },
      ],
      japanese_sources_summary: '公式サイト: マレーシア ボレ、大阪唯一のマレーシア料理店、スカイビルとうめきたの近く、中華とマレーの料理が融合したニョニャ料理がベース、ハラール対応メニューも豊富、毎年マレーシアで調味料を仕入れ、ハラールマーク付きの調味料や食材を使用、サテー、空芯菜のブラチャン炒め、えびの入ったピリ辛の太麺、ペナンコース4,200円 (クルポ、豆腐卵巻きサラダ、サテー、トムヤムクン、空芯菜、チキンカレー＆ライス、海鮮ピリ辛太麺、本日のデザート、2名から事前予約、アレルギーは相談を)、大阪市北区大淀南1-4-20、11:30〜14:30 (L.O.14:00)、17:30〜23:00 (L.O.22:00)、火曜定休、カード・交通系電子マネー・PayPay・d払い・au PAY 可、12月1日から価格改定のお知らせ。食べログ (店舗会員): マラッカコース4,700円、飲み放題つきのマカンコース5,000円、26席、禁煙、子ども歓迎、混雑時は2時間制、ハラールとベジタリアンのオプション。',
      confidence: 'medium', sources: [TB, OFF, R + 'B426428988/', R + 'B534651197/', R + 'B535080331/', R + 'B535159382/', R + 'B535556335/', R + 'B535689337/', R + 'B535821311/', R + 'B537812649/', R + 'B538010918/', R + 'B538490504/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order from a menu of Malaysian dishes; staff explain the menu (September 2026). A September 2026 diner found few tourists. No English menu listed.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Official site (Penang course): "アレルギーや食べられないものがありましたらご相談下さい" (consult the shop about allergies and foods you cannot eat).', source: OFF }], positives: [{ text: 'Official site: halal-marked seasonings and ingredients are used so that Muslim guests can eat with peace of mind; Tabelog lists halal and vegetarian options. Not described as halal-certified; alcohol is served.', source: OFF }] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区大淀南1-4-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区大淀南一丁目4番20号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OFF, TB, R + 'B535159382/'],
    price_note: 'Courses from the official site and Tabelog (tax included); lunch sets from August–October 2026 reviews. The official site announces a price revision from 1 December.', last_checked: TODAY, items: [
      it('ペナンコース', '', 'Penang course: prawn crackers, tofu and egg roll salad, satay, tom yum goong, water spinach, chicken curry and rice, spicy seafood thick noodles, dessert', '¥4,200', 'Course', 'ask', 'no', 'Official site; October 2026 review.', 'penang_course'),
      it('', '', 'Malacca course', '¥4,700', 'Course', 'ask', 'no', 'Tabelog listing.', 'malacca_course'),
      it('', '', 'Makan course with 90-minute all-you-can-drink', '¥5,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'makan_course'),
      it('', '', 'Lunch set (e.g. nasi goreng, mee goreng, curry noodles) with soup, salad and dessert', '¥1,000', 'Lunch', 'ask', 'ask', 'August–October 2026 reviews.', 'lunch_set'),
    ] }, {
    cuisine: 'ニョニャ料理 (中華とマレーの融合) をベースにしたマレーシア料理、毎年マレーシアで仕入れる調味料、ハラールマーク付きの調味料と食材、ハラール対応のメニューも豊富 (公式サイト、食べログ)・ココナッツで辛さはマイルド (食べログ)・コース (公式サイト、食べログ、税込): ペナンコース4,200円 (クルポ、豆腐卵巻きサラダ、サテー、トムヤムクン、空芯菜、チキンカレー＆ライス、海鮮ピリ辛太麺、デザート)、マラッカコース4,700円、90分飲み放題つきのマカンコース5,000円・ランチのセットはスープ、サラダ、デザート (タピオカ) つきで1,000円ほど: nasi goreng、mee goreng、チャーハン、ココナッツのスープのカレー麺、kapao rice、イエローカレーとグリーンカレー (2026年8〜10月)・夜: nasi lemak、カエルと野菜の炒め物、なすのピリ辛サラダ、海鮮のパイナップルチャーハン (2026年9月)',
    neighborhood: 'スカイビルの前、大淀南1-4-20。JR大阪駅から徒歩7分、JR Fukushima 駅から徒歩10分',
    gf_detail: '要確認。コースのアレルギーは相談に応じる (公式サイト)。グルテンの情報なし。麺料理 (mee goreng、小麦の麺のカレー麺、海鮮ピリ辛太麺) は小麦を含み、チャーハン、カレー、サテーのソースの材料は書かれていない。',
    vegan_detail: '要確認。食べログにはベジタリアンのオプションの表示があり、空芯菜の炒め物やなすのピリ辛サラダなど野菜の料理もあるが、空芯菜はブラチャン (えびのペースト) と炒める (公式サイト)。カレーや麺にもえびや魚の調味料を使うことが多い。',
    notes: '[マレーシア料理・スカイビルの前、ニョニャ料理] スカイビルの前にある小さなマレーシア料理の店で、大阪唯一のマレーシア料理店を名乗り、2026年9月の口コミでは20年ほど続いているとのこと。中華とマレーが融合したニョニャ料理がベースで、調味料は毎年マレーシアで仕入れる。公式サイトではハラールマーク付きの調味料や食材を使い、イスラム教徒のお客さんも安心して食べられるとしていて、食べログにもハラールのメニューが多いとあるが、認証の記載はなく、お酒も出す。お得なのはランチで、nasi goreng、mee goreng、カレー麺にスープ、サラダ、タピオカがついて1,000円ほど、12時半ごろには行列ができる。夜のコースは4,200円から (サテー、トムヤムクン、空芯菜のブラチャン炒め、チキンカレー、海鮮ピリ辛太麺)。常連の顔を覚えている気さくなスタッフ。火曜休み。',
  });
}

// ================================================================ pesce&carne MIMOZA ～ミモザ～
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27151503/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:00', '22:30']), WE = day(['11:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_mimoza_ohatsu_tenjin', name: 'pesce&carne MIMOZA ～ミモザ～ (pesce & carne MIMOZA ~ Mimoza ~)', category: 'OMNI',
    lat: 34.699152, lng: 135.501192, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses centre on pasta, gnocchi, pizza and baguette with the ajillo (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Courses are built on fish from the market, beef and pork, with cheese sauces and parfaits.',
    hours_raw: 'Mon–Fri 11:30–14:30 (last order food 13:30) and 17:00–22:30 (last order food 21:30, drinks 22:00); Sat, Sun and holidays 11:30–15:00 and 17:00–22:30 (Tabelog). Bookings lapse 15 minutes after the reserved time without contact; same-day bookings within an hour by phone (Tabelog). A 90-minute limit was given on one October 2026 booking. Cover (otoshi) ¥380; a 10% year-end surcharge from early December to 5 January (Tabelog). Cards (VISA, Master, JCB) and PayPay; no e-money (Tabelog). 20 seats (30 standing); non-smoking (Tabelog). Opened 2 September 2025 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'お初天神東門ビル 2F, a minute from Ohatsu Tenjin — 3 min from Higashi-Umeda Stn exit 7',
    cuisine: 'Italian of seasonal ingredients by a young chef from a well-known restaurant; everything homemade, from appetizers to desserts; wines and cocktails chosen by the chef (Tabelog) · lunch: pasta or pizza with salad, soup and a drink ¥2,200, three appetizers +¥500, steak +¥1,500 (October 2026); Awaji beef steak lunch course ¥3,500 and French pork steak ("Marietta") course ¥3,000, one drink minimum (Tabelog) · evening: Mimoza course of fish and meat, 11 dishes, food only ¥6,500 (Tabelog); girls\'-night course with all-you-can-drink (sparkling and wine, no beer) ¥6,000 for women, ¥6,500 for men: three appetizers, seasonal ajillo, the house pasta, pork chuck-eye steak, gnocchi in cheese sauce, a parfait (September–October 2026) · mackerel with ume and gochujang cream pasta (September 2026)',
    website: null, gmaps: gm('pesce&carne MIMOZA 曽根崎'), menu_url: null,
    notes: "[Italian · Ohatsu Tenjin, a young chef's homemade Italian] A twenty-seat second-floor Italian a minute from the Ohatsu Tenjin shrine, opened in September 2025, where a young chef from a well-known restaurant makes everything in house. Most 2026 diners came for the girls'-night course (¥6,000, ¥6,500 for men) with all-you-can-drink sparkling and wine: three appetizers, an ajillo good enough to mop up with baguette, the house pasta, a pork steak and gnocchi in cheese sauce, then a parfait. Lunch is a ¥2,200 pasta or pizza set, with appetizers or a steak as add-ons. Birthdays get the lights dimmed and music for the plate. Complaints: a lunch price rise and thin pasta (October 2026), and a 90-minute booking that ended before the main was finished.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), young, trained at a well-known restaurant (Tabelog)'], origin: null, background: 'Shop text (Tabelog): stylish Italian a minute from Ohatsu Tenjin; authentic Italian with seasonal ingredients; everything homemade from appetizers to desserts; "Passionate Italian Cuisine by a Young Chef from a Renowned Restaurant"; wines and cocktails selected by the chef. Opened 2 September 2025. An October 2026 diner booked here was moved by phone to the restaurant\'s "second location nearby".', philosophy: 'Seasonal produce, everything homemade (Tabelog).', specialty: 'Girls\'-night course; gnocchi with cheese sauce.',
      anecdotes: [
        { text: '"Suddenly, the lights went out, and Disney-like music started playing" as a birthday plate came out — September 2026.', source: R + 'B536467103/' },
        { text: '"The ajillo was so delicious that I could almost drink the oil, and I wanted to ask for more baguette." — October 2026, the girls\'-night course.', source: R + 'B537499742/' },
        { text: '"The main dish arrived just 15 minutes before I was supposed to leave" — October 2026, a booking with a 90-minute limit.', source: R + 'B538011224/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B535670750/', R + 'B536076664/', R + 'B536467103/', R + 'B536497807/', R + 'B536634831/', R + 'B536813118/', R + 'B537380194/', R + 'B537499742/', R + 'B538011224/', R + 'B538063338/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses or lunch sets (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎2-5-37 お初天神東門ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; opened September 2025; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目5番37号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536076664/', R + 'B536813118/'],
    price_note: 'Courses from the Tabelog listing (tax included; ¥380 cover); lunch set and girls\'-night course from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: pasta or pizza with salad, soup and drink (appetizers +¥500, steak +¥1,500)', '¥2,200', 'Lunch', 'no', 'ask', 'October 2026 review.', 'lunch_set'),
      it('', '', 'Awaji beef steak lunch course (one drink minimum)', '¥3,500', 'Lunch', 'ask', 'no', 'Tabelog listing.', 'awaji_beef_lunch'),
      it('', '', 'Girls\'-night course with all-you-can-drink (¥6,500 for men)', '¥6,000', 'Course', 'no', 'no', 'September and October 2026 reviews.', 'girls_night_course'),
      it('', '', 'Mimoza course, 11 dishes of fish and meat, food only', '¥6,500', 'Course', 'ask', 'no', 'Tabelog listing.', 'mimoza_course'),
    ] }, {
    cuisine: '名店出身の若い料理人の季節の食材のイタリアン、前菜からデザートまで自家製、料理人が選ぶワインとカクテル (食べログ)・ランチ: パスタかピザにサラダ、スープ、ドリンクで2,200円、前菜3種はプラス500円、ステーキはプラス1,500円 (2026年10月)、Awaji の牛のステーキのランチコース3,500円と、フランス産豚のステーキのコース (Marietta) 3,000円、ワンドリンク制 (食べログ)・夜: 魚と肉の11品の Mimoza コース、料理のみ6,500円 (食べログ)、飲み放題 (スパークリングとワイン、ビールはなし) つきの女子会コース、女性6,000円、男性6,500円: 前菜3種、季節のアヒージョ、名物のパスタ、豚肩ロースのステーキ、チーズソースのニョッキ、パフェ (2026年9〜10月)・サバと梅、コチュジャンのクリームパスタ (2026年9月)',
    neighborhood: 'お初天神東門ビル 2階、お初天神から1分。東梅田駅7番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースはパスタ、ニョッキ、ピザ、アヒージョに添えるバゲットが中心 (2026年の口コミ)。',
    vegan_detail: '要確認。ヴィーガンの情報なし。コースは市場の魚、牛肉、豚肉、チーズのソース、パフェが中心。',
    notes: '[イタリアン・お初天神、若い料理人の手作りのイタリアン] お初天神から1分のビルの2階、20席のイタリアンで、2025年9月オープン。名店出身の若い料理人がすべて自家製で作る。2026年の口コミの多くは女子会コース (6,000円、男性6,500円) で、スパークリングとワインの飲み放題つき: 前菜3種、バゲットで最後まですくいたくなるアヒージョ、名物のパスタ、豚のステーキ、チーズソースのニョッキ、パフェ。ランチは2,200円のパスタかピザのセットに、前菜やステーキを足せる。誕生日には照明を落として音楽とともにプレートが出てくる。不満の声は、ランチの値上げと細いパスタ (2026年10月)、90分の予約でメインを食べ終わる前に時間になったこと。',
  });
}

// ================================================================ 地酒だいにんぐやす
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27111697/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_jizake_dining_yasu_doyama', name: '地酒だいにんぐやす (Jizake Dining Yasu)', category: 'OMNI',
    lat: 34.703692, lng: 135.5025, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu includes fresh pasta, maitake tempura and spiced fried eggplant; sashimi, sushi rolls and shirako ponzu are usually eaten with soy-based sauces containing wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood and sake izakaya (sashimi, sushi rolls, shirako, clams, yukke).',
    hours_raw: 'From 18:00 until closing, no fixed end; closing days not fixed; bookings outside these hours by arrangement, including lunch, late-night and early-morning private hire (Tabelog). Reservations recommended; often fully booked (2026 reviews). Prices shown before tax; no service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). 14 seats: 7 at the counter, 8 at tables (tables by reservation; parties of 2–3 may be seated at the counter); private hire for 7–15; smoking allowed; bring-your-own drinks (Tabelog). Opened 15 June 2019 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'A third-floor shop (伊勢屋ビル 302) just off Higashi-dori, in the Douyama area — 5 min from Higashi-Umeda, Hankyu Umeda or JR Osaka Stn',
    cuisine: 'Seafood izakaya with local sake, including kimoto-style and aged sakes, and fresh pasta (Tabelog) · large portions: assorted sashimi, tuna maki, ikura, seafood yukke (August 2026); toro-taku hosomaki that looks like a thick roll, negitoro, a tuna and daikon roll (September–October 2026); shirako with ponzu in season; maitake tempura with spice; sake-steamed clams; spiced fried eggplant; shrimp pasta and a fresh-noodle tomato-cream pasta (2026 reviews) · sakes named in reviews: Dewazakura, Hanamura, Nanamizu, Tamako; a sake list with tasting notes (October 2026) · courses for birthdays, dates and business, and hot-pot courses for groups, to budget (Tabelog)',
    website: null, gmaps: gm('地酒だいにんぐやす 堂山町'), menu_url: null,
    notes: "[Izakaya · Umeda, Higashi-dori, fish and sake on a third floor] A fourteen-seat izakaya up in a building just off Higashi-dori, hard to find on a first visit and usually full, where a young, lively crowd orders generous seafood and local sake. The dishes diners keep naming are the toro-taku roll (thin rolls that look like thick ones), shirako with ponzu, a heaped sashimi platter, maitake tempura and, unexpectedly, fresh pasta. Portions are big, so two people should order by halves; spending runs ¥5,000–10,000 with a few drinks. The sake list explains each bottle's character. Downsides in 2026 reviews: smoking allowed, tight seats (one diner sat on a beer crate with a cushion), a bleach smell on entry one October evening, and sashimi that one regular suspected was pre-sliced.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed in the sources read)'], origin: null, background: 'Shop text (Tabelog): local sake including kimoto-style and aged sakes; fresh pasta; banquets and private hire for 7–15; creative dishes to hot pots, tailored to budget and requests. Opened 15 June 2019.', philosophy: 'Accommodate customers\' requests as much as possible (Tabelog).', specialty: 'Toro-taku roll; shirako ponzu; local sake.',
      anecdotes: [
        { text: '"What looks like a thick roll turns out to be a thin roll. Everything is served in generous portions, so I recommend ordering half for two people!" — September 2026.', source: R + 'B536564829/' },
        { text: '"The menu also includes descriptions of the sake\'s characteristics, making it easier to choose." — October 2026.', source: R + 'B537217033/' },
        { text: '"Sitting on a cushion with the plastic box containing the beer was a bit uncomfortable for my backside, though (laughs)." — October 2026.', source: R + 'B538192828/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B534641805/', R + 'B536564829/', R + 'B536579536/', R + 'B536596812/', R + 'B537217033/', R + 'B537911554/', R + 'B538049133/', R + 'B538175615/', R + 'B538192828/', R + 'B538397418/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small, busy counter; a sake list with tasting notes (October 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂山町7-18 伊勢屋ビル 302',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂山町7番18号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No menu prices in the sources read; Tabelog average ¥4,000–4,999 (listing) or ¥6,000–7,999 (reviews), prices before tax.', last_checked: TODAY, items: [
      it('', '', 'Toro-taku hosomaki', '', 'Sushi', 'ask', 'no', 'September–October 2026 reviews.', 'torotaku_maki'),
      it('', '', 'Shirako with ponzu (in season)', '', 'Seafood', 'ask', 'no', 'October 2026 reviews; Tabelog.', 'shirako_ponzu'),
      it('', '', 'Assorted sashimi', '', 'Seafood', 'ask', 'no', '2026 reviews.', 'sashimi_platter'),
      it('', '', 'Fresh pasta (shrimp, or tomato cream)', '', 'Pasta', 'no', 'no', 'September–October 2026 reviews; Tabelog.', 'fresh_pasta'),
    ] }, {
    cuisine: '魚と地酒の居酒屋、生酛や熟成酒など個性的な日本酒、生パスタ (食べログ)・量が多い: 刺身の盛り合わせ、マグロの巻物、いくら、海鮮ユッケ (2026年8月)、太巻きに見える細巻きのトロたく、ねぎとろ、マグロとたくあんの巻物 (2026年9〜10月)、旬の白子ポン酢、スパイスをかけたまいたけの天ぷら、はまぐりの酒蒸し、なすのスパイス揚げ、えびのパスタ、生麺のトマトクリームパスタ (2026年の口コミ)・口コミに出てくる日本酒: Dewazakura、Hanamura、Nanamizu、Tamako。日本酒の特徴を書いたメニュー (2026年10月)・誕生日、デート、接待のコースや、グループ向けの鍋のコースを予算に合わせて (食べログ)',
    neighborhood: 'Higashi-dori から少し入った伊勢屋ビル 302、堂山のあたりの3階。東梅田、阪急梅田、JR大阪駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。生パスタ、まいたけの天ぷら、なすのスパイス揚げがあり、刺身、巻物、白子ポン酢はふつう小麦を含む醤油系のたれで食べる。',
    vegan_detail: 'ヴィーガンではありません。魚と日本酒の居酒屋 (刺身、巻物、白子、はまぐり、ユッケ)。',
    notes: '[居酒屋・梅田、Higashi-dori、3階の魚と日本酒] Higashi-dori から少し入ったビルの上にある14席の居酒屋で、初めてだと入口がわかりにくく、いつも満席。若くにぎやかなお客さんが、量の多い魚料理と地酒を頼む。よく名前が挙がるのは、太巻きに見える細巻きのトロたく、白子ポン酢、山盛りの刺身の盛り合わせ、まいたけの天ぷら、そして意外にも生パスタ。量が多いので2人なら半分の量で頼むくらいがちょうどいい。飲み物を何杯か入れて5,000〜10,000円ほど。日本酒のメニューにはそれぞれの特徴が書いてある。2026年の口コミの不満は、喫煙可、席がせまい (ビールケースにクッションで座った人も)、10月のある夜に入口で漂白剤のにおいがした、刺身が切り置きではと感じた常連がいたこと。',
  });
}

// ================================================================ おにく Takumi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27131803/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://oniku-takumi.foodie.jp';
  put({
    id: 'osaka_oniku_takumi_kitashinchi', name: 'おにく Takumi (Oniku Takumi)', category: 'OMNI',
    lat: 34.697597, lng: 135.498726, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include a chateaubriand katsu sandwich (bread and breading), cold noodles, beef curry and meat grilled with tare, which is usually soy-based with wheat; ask for salt-grilled cuts.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku restaurant of Omi beef, with oxtail soup.',
    hours_raw: 'Daily from 17:00, closing time not given; lunch on request; open Sundays and holidays; closing days not fixed (Tabelog). Courses can be booked 12:00–24:30 (Tabelog). Reservation only (Tabelog). Service charge 8%; bring-your-own wine ¥3,000 a bottle; free birthday or anniversary plate (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money, PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay (Tabelog). 16 seats: 4 at the counter, 12 at tables, semi-private rooms for 2 and 4; smoking allowed, though guests may be asked to refrain (Tabelog). Opened 16 October 2022 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, 杉の家ビル B1F — 3 min from Kitashinchi Stn exit 11-41',
    cuisine: 'High-end yakiniku of Omi beef where, on courses, staff grill every piece for you (Tabelog) · courses (Tabelog, tax included): Omi Beef Delight course A ¥15,000 (12 dishes: wagyu tongue, strip loin, salt- and sauce-grilled cuts, horumon, appetizers, oxtail soup simmered 12–13 hours, gyudon and cold noodles); course B ¥18,000 (13 dishes) with a rare chateaubriand katsu sandwich · à la carte now available (Tabelog): tongue, sirloin eaten with egg yolk and rice, grilled broccoli salad, cold noodles (June 2026) · kimchi to start, the katsu sandwich, grilled beef over rice (October 2026); rice with meat and egg yolk (January 2026); curry with beef cutlet on request (May 2024); kuzu cold noodles (June 2024) · wines imported from France and Italy (Tabelog)',
    website: OFF, gmaps: gm('おにく Takumi 北新地'), menu_url: null,
    notes: "[Yakiniku · Kitashinchi, Omi beef grilled for you] A basement yakiniku room in Kitashinchi where you don't touch the grill: on the courses, staff cook each cut of Omi beef in front of you and bring it to the table at its peak, between appetizers and an oxtail soup simmered for half a day. The ¥15,000 course runs from tongue and strip loin through horumon to gyudon and cold noodles; the ¥18,000 course adds a rare chateaubriand katsu sandwich that diners call the best thing on the menu. À la carte is now possible, and in June 2026 the owner came to grill one table's sirloin. Wines come from France and Italy; 8% service. Semi-private rooms suit business dinners; smoking is allowed, and one December 2025 diner was put off by loud regulars.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; grilled at the table in a June 2026 review)', 'Manager and grilling staff (unnamed) (2024–2026 reviews)'], origin: null, background: 'Shop text (Tabelog): a high-end yakiniku restaurant a short walk from Kitashinchi Station; top-quality wagyu, Omi beef the speciality; courses in which staff grill the meat in front of the guest; wines sourced directly from France and Italy; a homemade oxtail soup simmered 12–13 hours. Opened 16 October 2022.', philosophy: 'Great emphasis on the meat selection, cutting technique and grilling (Tabelog).', specialty: 'Omi beef course; chateaubriand katsu sandwich.',
      anecdotes: [
        { text: '"Since it was an attended course, I didn\'t have to cook, which made it so easy to enjoy my meal." — December 2024, a fifth visit.', source: R + 'B463044096/' },
        { text: '"The katsu sandwich was especially outstanding." — October 2026.', source: R + 'B536801337/' },
        { text: '"I was particularly impressed by the rice topped with meat and egg yolk—it was simply amazing!" — January 2026, course A.', source: R + 'B492675410/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B463044096/', R + 'B484901883/', R + 'B485928617/', R + 'B487208024/', R + 'B492675410/', R + 'B497104784/', R + 'B512911114/', R + 'B528452497/', R + 'B530328195/', R + 'B536801337/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff grill the meat and explain each cut on courses (2024–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-6-23 杉の家ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated January, June and October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目6番23号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included; 8% service extra).', last_checked: TODAY, items: [
      it('', '', 'Omi Beef Delight course A (12 dishes, staff-grilled)', '¥15,000', 'Course', 'ask', 'no', 'Tabelog listing; January 2026 review.', 'course_a'),
      it('', '', 'Course B with rare chateaubriand katsu sandwich (13 dishes)', '¥18,000', 'Course', 'no', 'no', 'Tabelog listing.', 'course_b'),
    ] }, {
    cuisine: 'コースではスタッフが目の前で焼いてくれる、Omi の牛の高級焼肉 (食べログ)・コース (食べログ、税込): Omi の牛を堪能する A コース15,000円 (12品: 和牛のタン、ロース、塩とタレの焼き物、ホルモン、前菜、12〜13時間煮込んだ自家製テールスープ、牛丼と冷麺)、レアのシャトーブリアンのカツサンドつきの B コース18,000円 (13品)・アラカルトも始めた (食べログ): タン、卵黄とご飯で食べるサーロイン、焼きブロッコリーのサラダ、冷麺 (2026年6月)・最初のキムチ、カツサンド、焼肉のせご飯 (2026年10月)、肉と卵黄のご飯 (2026年1月)、頼めば牛カツのカレー (2024年5月)、kuzu の冷麺 (2024年6月)・フランスとイタリアから直輸入のワイン (食べログ)',
    neighborhood: '北新地、杉の家ビル 地下1階。北新地駅11-41出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コースにはシャトーブリアンのカツサンド (パンと衣)、冷麺、牛肉のカレー、タレ焼き (ふつう小麦を含む醤油ベース) がある。塩焼きの部位を頼んで。',
    vegan_detail: 'ヴィーガンではありません。Omi の牛の焼肉の店で、テールスープもある。',
    notes: '[焼肉・北新地、焼いてもらうOmi の牛] 北新地の地下の焼肉店で、自分では焼かない店。コースではスタッフがOmi の牛の部位をひとつずつ目の前で焼き、いちばんいいタイミングでテーブルに出してくれる。前菜や半日煮込んだテールスープもはさみながら。15,000円のコースはタンとロースからホルモン、締めの牛丼と冷麺まで、18,000円のコースにはいちばんおいしいという声の多い、レアのシャトーブリアンのカツサンドがつく。今はアラカルトもでき、2026年6月にはオーナーがテーブルでサーロインを焼いてくれたという。ワインはフランスとイタリアから、サービス料8%。半個室は接待向き。喫煙可で、2025年12月には常連客がうるさかったという声も。',
  });
}

save();
