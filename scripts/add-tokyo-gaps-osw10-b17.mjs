// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 17.
//   + 焼きとり おでん さかじ Yakitori Oden Sakaji (60-seat yakitori-and-oden izakaya in private booths, GEMS Ichigaya 4F)
//   + チェルト Certo (25-seat Italian with Australian wines, born in Sydney in 1999, in Yotsuya-sanchome since 2006)
//   + ペザント四番町 Peasant Yonbancho (18-seat basement set-meal diner, "Bancho Shokudo" on the sign; ¥850 sets)
//   + No.4 (48-seat bakery café with terrace by Tysons & Company; French toast and wood-fired pizza, long queues)
//   - 13175058 JAM ORCHESTRA skipped: a private-party and wedding venue (Tabelog: "Private party bookings can be accommodated
//     at your preferred time"; no regular service) — flagged to the coordinator.
//   - 13159215 東京油組総本店 市ヶ谷組 skipped: Tokyo Abura Gumi Sohonten, an abura-soba chain already in data.
//   - 13279134 CHOPPED SALAD DAY 日テレ通り店 skipped: salad chain (12+ shops on a Tabelog name search).
//   Chain check. Sakaji, Certo, Peasant: one listing each. No.4 is the only No.4; Tysons & Company also runs other brands
//   (T.Y.HARBOR, Breadworks) — sister concepts, drafted. None is in data/tokyo.json (grep by name, Tabelog id and address).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13175058', 'JAM ORCHESTRA — a private-party and wedding venue in GEMS Ichigaya 2F (Tabelog: bookings for private parties at your preferred time; reviews 2023–26 are all weddings and company parties); not a restaurant open to individual diners; not researched. Flagged for a ruling.');
skip('13159215', '東京油組総本店 市ヶ谷組 — Tokyo Abura Gumi Sohonten, an abura-soba chain (12+ shops on a Tabelog name search; another branch already in data); not researched.');
skip('13279134', 'CHOPPED SALAD DAY 日テレ通り店 — Chopped Salad Days, a salad chain (12+ shops on a Tabelog name search); not researched.');

// ================================================================ 焼きとり おでん さかじ
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130904/13265329/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:00', '23:30']); const WE = day(['17:00', '23:30']);
  put({
    id: 'tokyo_yakitori_oden_sakaji_ichigaya', name: '焼きとり おでん さかじ (Yakitori Oden Sakaji)', category: 'OMNI',
    lat: 35.689169, lng: 139.735261, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Skewers come with tare or salt, the oden broth is salt-based, and there are fried dishes such as chicken nanban and fried yuba; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in dashi broth, chicken skewers; Tabelog lists vegetarian options, but the broths are dashi.',
    hours_raw: 'Mon–Fri lunch 11:30–14:30 and dinner 17:00–23:30; Sat, Sun and holidays 17:00–23:30; irregular closing days (Tabelog). Reservations taken, online 24 hours; walk-ins at the counter (Tabelog; December 2025). ¥550 cover charge, included in courses (Tabelog; February 2026). Cards and PayPay; no e-money (Tabelog). 60 seats: 6 at the counter, private booths and a kotatsu room; partitions do not reach the ceiling (May 2026); private hire 20–50; smoking allowed (Tabelog; 2026 reviews). Opened 30 November 2021 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rokubanchō 4-3, GEMS市ヶ谷 4F, a building of restaurants on Nittere-dōri — 3 min from Ichigaya Stn',
    cuisine: 'Izakaya of yakitori from premium local chicken, oden all year, seasonal obanzai and regional sake (Tabelog) · oden in a clear, salt-based broth: daikon, egg, thick fried tofu, beef tendon, fish cakes (2026 reviews) · omakase five skewers ¥1,650, negima, tsukune, thigh, shishito; chilled tomato with tororo kombu ¥418, dashimaki ¥858, chilled stuffed peppers ¥440, fried yuba with eggplant, monaka; oyakodon and a rice-and-broth chazuke to finish (2026 reviews) · lunch sets ¥1,000–1,300: obanzai set, chicken nanban ¥1,200, yakitori set ¥1,300 with five skewers, Sakaji set of yakitori and oden (2025–26 reviews) · regional sakes such as KID and Tanaka Rokugo; beer by the mega mug ¥980; free-flow courses (2025–26 reviews)',
    website: null, gmaps: gm('焼きとり おでん さかじ 市ヶ谷'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · Ichigaya, yakitori and salt-broth oden in private booths] A wood-and-stone izakaya on the fourth floor of the GEMS Ichigaya restaurant building, where almost every seat is a booth. Oden comes in a clear, gentle salt broth — daikon that falls apart, a soft egg, beef tendon — alongside yakitori with tare or salt and small dishes like chilled stuffed peppers and dashimaki, then oyakodon or a broth-poured chazuke to finish. Weekday lunch sets run ¥1,000–1,300. Not everyone was won over: the booths' partitions stop short of the ceiling, one diner found the staff low on energy, and a lunch chicken nanban seemed small for ¥1,200. Smoking allowed; ¥550 cover; open to 23:30.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 30 November 2021 (Tabelog).',
      background: 'No source names the chef or owner. Tabelog (shop text): yakitori of premium local chicken, year-round oden, seasonal obanzai and carefully chosen regional sake, in a calm room of natural wood and stone with private seating throughout. A January 2026 diner noted "the chef\'s attention to detail" in a whelk appetizer.',
      philosophy: null, specialty: 'Salt-broth oden; yakitori.',
      anecdotes: [
        { text: '"The oden served first had a beautifully clear broth, and its refined flavor spread gently with each bite. The Japanese radish was so tender it fell apart with chopsticks." — February 2026, course.', source: R + 'B523282944/' },
        { text: '"Although it was advertised as having all private rooms, the partitions didn\'t reach the ceiling, so conversations might leak over to the next table." — May 2026.', source: R + 'B528641538/' },
        { text: '"It\'s a rare find these days as a \'smoking-friendly\' establishment, making it very convenient for gatherings where some guests smoke." — April 2026.', source: R + 'B526284453/' },
      ],
      japanese_sources_summary: '食べログ: 焼きとり おでん さかじ、居酒屋・焼き鳥・おでん、六番町4-3 GEMS市ヶ谷 4F、市ケ谷駅から徒歩3分、月〜金11:30〜14:30・17:00〜23:30、土日祝17:00〜23:30、不定休、予約可 (ネット予約は24時間)、お通し550円 (コースは込み)、カード・PayPay可、60席 (カウンター6席、個室のテーブル、掘りごたつ)、喫煙可、2021年11月30日オープン、地鶏の焼き鳥、一年中のおでん、季節のおばんざい、地酒。口コミ(2025年〜2026年): 塩ベースのおでん、おまかせ5本1,650円、だし巻き858円、ランチの定食1,000〜1,300円、焼き鳥定食1,300円、親子丼、締めのお茶漬け、仕切りが天井まで届かない。',
      confidence: 'medium', sources: [TB, R + 'B518351601/', R + 'B518369458/', R + 'B521105758/', R + 'B521123776/', R + 'B521123935/', R + 'B522702469/', R + 'B522732886/', R + 'B523282944/', R + 'B526284453/', R + 'B527217089/', R + 'B528641538/', R + 'B533716603/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Booth seating with an ordinary izakaya menu; online booking available.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都千代田区六番町4-3 GEMS市ヶ谷 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with online booking; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.689169, 139.735261); cross-checked: GSI 東京都千代田区六番町4番地 (lot) 73m. The 六番町4-11 building (Buta Base, Maruju, Toka, Tonkatsu Kawamura) is about 28 m away, a different building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B522732886/', R + 'B522702469/', R + 'B521123935/'],
    price_note: 'Prices from January–February 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Omakase assorted skewers, 5 kinds', '¥1,650', 'Yakitori', 'ask', 'no', 'February 2026 review.', 'omakase_5'),
      it('', '', 'Dashimaki tamago', '¥858', 'Small dishes', 'ask', 'no', 'February 2026 review.', 'dashimaki'),
      it('', '', 'Chilled tomato with tororo kombu', '¥418', 'Small dishes', 'ask', 'ask', 'February 2026 review.', 'tomato'),
      it('', '', 'Yakitori set meal (lunch, 5 skewers)', '¥1,300', 'Lunch', 'ask', 'no', 'February 2026 review.', 'yakitori_teishoku'),
      it('', '', 'Chicken nanban set meal (lunch)', '¥1,200', 'Lunch', 'no', 'no', 'January 2026 review.', 'chicken_nanban'),
    ] }, {
    cuisine: '地鶏の焼き鳥、一年中のおでん、季節のおばんざい、地酒の居酒屋 (食べログ)・おでんは澄んだ塩ベースのつゆで、大根、卵、厚揚げ、牛すじ、練り物 (2026年の口コミ)・おまかせ5本1,650円、ねぎま、つくね、もも、ししとう。冷やしトマトのとろろ昆布のせ418円、だし巻き858円、冷たいピーマンの肉詰め440円、湯葉となすの揚げ物、最中。締めは親子丼か、だしをかけるお茶漬け (2026年の口コミ)・ランチの定食1,000〜1,300円: おばんざいの定食、チキン南蛮1,200円、串5本の焼き鳥定食1,300円、焼き鳥とおでんの定食 (2025〜26年の口コミ)・KID や Tanaka Rokugo などの地酒、980円のメガジョッキのビール、飲み放題のコース (2025〜26年の口コミ)',
    neighborhood: '六番町4-3 GEMS市ヶ谷 4F、日テレ通りの飲食店ばかりのビル。市ケ谷駅から徒歩3分',
    gf_detail: '要確認。串はたれか塩、おでんのつゆは塩ベースだが、チキン南蛮や湯葉の揚げ物などもあり、グルテンフリーの記述はない。',
    vegan_detail: 'ヴィーガンではない。おでんはだしのつゆ、鶏の串。食べログではベジタリアンメニューありとあるが、つゆはだし。',
    notes: '[居酒屋・市ヶ谷、個室で焼き鳥と塩のおでん] 飲食店のビル GEMS市ヶ谷の4階、木と石の居酒屋で、ほとんどの席が個室。おでんは澄んだやさしい塩のつゆで、箸で崩れる大根、やわらかい卵、牛すじ。たれか塩の焼き鳥に、冷たいピーマンの肉詰めやだし巻きなどの小皿、締めに親子丼かだしをかけるお茶漬け。平日ランチの定食は1,000〜1,300円。不満の声もあり、個室の仕切りが天井まで届かない、店員に元気がない、ランチのチキン南蛮が1,200円にしては小さいという人も。喫煙可、お通し550円、23:30まで。',
  });
}

// ================================================================ チェルト
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13037999/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.certotokyo.com/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'tokyo_certo_yotsuya', name: 'チェルト (Certo)', category: 'OMNI',
    lat: 35.687526, lng: 139.722653, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Handmade pasta, gratins and risotto are on the menu; nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options; dishes seen in reviews lean on cheese, meat and seafood.',
    hours_raw: 'Mon–Sat 17:00–24:00 (last order 22:30); closed Sunday and holidays (Tabelog). Mondays irregular since January 2026 — open if booked ahead (website). Dinner only since 2017 (Tabelog). Reservations taken; a second-floor private room in the house next door for one group a day (Tabelog; October 2026). ¥550 appetizer charge (Tabelog). Cards and PayPay or au PAY (Tabelog). 25 seats; non-smoking; English menu and English-speaking staff (Tabelog). Take-out, chilled dishes to cook at home and wine sales; Australian wine dinners, e.g. Margaret River on 27 October 2026, ¥15,000 (website). Opened in Yotsuya-sanchome on 15 December 2006 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Suga-chō 1-26, a house restaurant down a back alley off Shinjuku-dōri — 3 min from Yotsuya-sanchome Stn (Exit 3)',
    cuisine: 'Italian with Australian (and New Zealand) wines (Tabelog; 2022–26 reviews) · e.g. pork and chicken liver pâté, green salad with mushrooms, arugula and Parmigiano, tripe gratin, amatriciana (2022); handmade tagliatelle with ragù, blueberry and Gorgonzola risotto, mushroom cheese bake, sweet-potato soup (2023); cacio e pepe, lamb, tiramisu, affogato (2024) · Australian sparkling, Chardonnay, Shiraz, Riesling, Cabernet Sauvignon, Sauvignon Blanc, mostly well priced (2023–24 reviews)',
    website: SITE, gmaps: gm('チェルト 四谷三丁目 イタリアン'), menu_url: null,
    notes: "[Italian · Yotsuya-sanchome, a Sydney-born trattoria with Australian wines] A small house restaurant down a back alley off Shinjuku-dōri that began in Sydney in 1999 as Italian cooking by a Japanese chef with Australian produce, and moved its name to Tokyo in 2006; one diner who knew it in Sydney found the same owner and waitress still here. The list is almost all Australian and New Zealand wine, and the waitress knows it well; the food is homely trattoria fare — liver pâté, tripe gratin, handmade tagliatelle, a lamb main that one diner called the best ever. Regulars count dozens of visits; a February 2026 guest found the courses slow and the room loud. Dinner only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened in Sydney in 1999; in Yotsuya-sanchome since 15 December 2006 (Tabelog).',
      background: 'No source names the chef or owner. Tabelog (shop text): "Certo was born in 1999 in Sydney, Australia. It started as a unique restaurant serving Italian cuisine crafted by a Japanese chef using fresh Australian ingredients. The restaurant has won numerous awards and has been featured in local newspapers." A diner who had visited in Sydney "was surprised to see the owner and waitress from back then still here" (October 2023); another found the chef "relatively young, but quite skilled" (June 2022).',
      philosophy: null, specialty: 'Italian with Australian wines; lamb.',
      anecdotes: [
        { text: '"This was a nostalgic place I visited several times in Sydney♪ I was surprised to see the owner and waitress from back then still here." — October 2023.', source: R + 'B472926979/' },
        { text: '"The lamb was the best I\'ve ever had… the affogato was the best I\'ve ever had!" — November 2024.', source: R + 'B495419839/' },
        { text: '"The food came out one dish at a time every 30 minutes, and I wish I had just left without ordering a main dish." — February 2026.', source: R + 'B522086032/' },
      ],
      japanese_sources_summary: '公式サイト: Certo Wine ＆ Dining、10月27日にマーガレットリバー特集のワイン会 (15,000円)、今年1月から月曜は不定休 (予約があれば開店)、テイクアウト、チルドフード、ワインの販売。食べログ: チェルト、イタリアン・ワインバー・パスタ、須賀町1-26、四谷三丁目駅3番出口から徒歩3分、月〜土17:00〜24:00 (L.O.22:30)、日祝休み、2017年からディナーのみ、お通し550円、25席、個室は1日1組、禁煙、英語のメニューとスタッフ、1999年にシドニーで生まれ、2006年12月15日に四谷三丁目に開店。口コミ(2022年〜2026年): オーストラリアとニュージーランドのワイン、手打ちのタリアテッレ、ラム、料理が出るのが遅いという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B112473957/', R + 'B255605911/', R + 'B390722342/', R + 'B436032399/', R + 'B458010101/', R + 'B472926979/', R + 'B495419839/', R + 'B497638689/', R + 'B502060945/', R + 'B515097847/', R + 'B522086032/', R + 'B536876824/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); Australian regulars (October 2023).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区須賀町1-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own website with an October 2026 wine dinner; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687526, 139.722653); cross-checked: GSI 東京都新宿区須賀町1番地 (lot) 66m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B255605911/', R + 'B472926979/', R + 'B495419839/'],
    price_note: 'No prices published; dishes from 2022–24 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pork and chicken liver pâté', '', 'Antipasti', 'ask', 'no', 'June 2022 review.', 'pate'),
      it('', '', 'Handmade tagliatelle with ragù', '', 'Pasta', 'no', 'no', 'October 2023 review.', 'tagliatelle'),
      it('', '', 'Amatriciana', '', 'Pasta', 'no', 'no', 'June 2022 review.', 'amatriciana'),
      it('', '', 'Lamb', '', 'Mains', 'ask', 'no', 'November 2024 review.', 'lamb'),
    ] }, {
    cuisine: 'オーストラリア (とニュージーランド) のワインと合わせるイタリアン (食べログ、2022〜26年の口コミ)・料理の例: 豚と鶏レバーのパテ、きのこ・ルッコラ・パルミジャーノのグリーンサラダ、トリッパのグラタン、アマトリチャーナ (2022年)。手打ちのタリアテッレのラグー、ブルーベリーとゴルゴンゾーラのリゾット、きのこのチーズ焼き、さつまいものスープ (2023年)。カチョ・エ・ペペ、ラム、ティラミス、アフォガート (2024年)・オーストラリアのスパークリング、シャルドネ、シラーズ、リースリング、カベルネ・ソーヴィニヨン、ソーヴィニヨン・ブラン。手頃なものが多い (2023〜24年の口コミ)',
    neighborhood: '須賀町1-26、新宿通りから入った路地の一軒家。四谷三丁目駅3番出口から徒歩3分',
    gf_detail: '要確認。手打ちパスタ、グラタン、リゾットがある。グルテンフリーの記述はない。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありとあるが、口コミに出てくる料理はチーズ、肉、魚介が中心。',
    notes: '[イタリアン・四谷三丁目、シドニー生まれのトラットリアとオーストラリアワイン] 新宿通りから路地に入った小さな一軒家のレストラン。1999年にシドニーで、日本人シェフがオーストラリアの食材で作るイタリアンとして始まり、2006年に東京に移った。シドニー時代に通った客は、当時の店主とホールの女性が今もいて驚いたという。ワインはほとんどがオーストラリアとニュージーランドで、ホールの女性がよく知っている。料理は家庭的なトラットリアで、レバーのパテ、トリッパのグラタン、手打ちのタリアテッレ、今まででいちばんというラム。何十回も通う常連がいる一方、2026年2月の客は料理が遅く店内がうるさいと書いた。夜のみ、日曜休み。',
  });
}

// ================================================================ ペザント四番町
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130904/13006410/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '18:00']);
  put({
    id: 'tokyo_peasant_yonbancho_ichigaya', name: 'ペザント四番町 (Peasant Yonbancho)', category: 'OMNI',
    lat: 35.688835, lng: 139.735731, cuisine_type: 'shokudo',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded chicken katsu, fried oysters, katsu curry and hayashi sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: meat and fish set meals with miso soup and a raw egg.',
    hours_raw: 'Mon–Sat 12:00–18:00; closed Sunday and holidays (Tabelog — "hours may change"). A June 2026 diner ate there at 18:00 on a weekday. No reservations; queues on the stairs and pavement around 13:00 (Tabelog; October 2026). Cash only (Tabelog; June 2026). 18 seats in the basement, counter and tables; non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yonbanchō 4-13, 井上ビル B1F, on Nittere-dōri next to an abura-soba shop — 3 min from Ichigaya Stn',
    cuisine: 'Old-style set-meal diner, mostly Western-style dishes (2026 reviews) · Yonbancho set ¥850: chicken katsu and ginger pork with rice, a large miso soup, a raw egg, a small side and pickles; Otanoshimi set; recommended set of tuna cubes and chicken katsu ¥850 (2026 reviews) · hayashi rice ¥750, katsu curry ¥820, katsu hayashi ¥820, hamburg steak set ¥820, ginger pork set ¥820, fillet cutlet set ¥870, fried oyster set ¥950 with four large oysters (2026 reviews) · spicy konnyaku and pickles on the table (October 2026)',
    website: null, gmaps: gm('ペザント四番町'), menu_url: null,
    notes: "[Set meals · Ichigaya, a cheap and fast basement diner] Down a stair on Nittere-dōri under a weathered blue sign reading \"Bancho Shokudo\", an old, dim, cramped diner where ¥850 still buys the Yonbancho set: chicken katsu and ginger pork with a mound of rice, a big bowl of miso soup and a raw egg for tamago-kake-gohan. Hayashi rice, katsu curry, hamburg steak and fried oysters all come in under ¥1,000, and food lands within minutes of ordering. The owner passes plates over the counter with a word of warning when they are heavy; regulars and students queue on the stairs at one o'clock. One diner found the katsu hayashi sauce watery. Cash only; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the owner. Reviewers: "the chef handed me a plate with everything except the main dish… kindly warned me, \'Be careful, it\'s heavy\'" (October 2026); "The owner managed to squeeze me into a spot at the back of the counter… The charming interactions with the beloved owner and customers added to the experience" (October 2026). The sign reads "Bancho Shokudo", with "Peasant" in smaller letters (August 2026).',
      philosophy: null, specialty: 'Yonbancho set (chicken katsu and ginger pork).',
      anecdotes: [
        { text: '"I raised four fingers and ordered the Yonbancho Set Meal for JPY 850… After settling the bill, I noticed four or five people waiting on the stairs and three or four more on the sidewalk." — October 2026.', source: R + 'B538303249/' },
        { text: '"In deep ocean-like blue, the yellow letters boldly say \'Bancho Shokudo.\' Next to it, the name \'Peasant\' is written in smaller letters." — August 2026.', source: R + 'B534413263/' },
        { text: '"The fried oysters were crispy and quite large, with four pieces served… At under JPY 1000, it offers excellent value for money." — October 2026.', source: R + 'B536909880/' },
      ],
      japanese_sources_summary: '食べログ: ペザント四番町、定食・食堂、四番町4-13 井上ビル B1F、市ケ谷駅から241m、月〜土12:00〜18:00、日祝休み、予約不可、カード・電子マネー・QR不可、18席、禁煙。口コミ(2026年): 地下の昔ながらの定食屋、看板は「Bancho Shokudo」、Yonbancho 定食850円 (チキンカツと生姜焼き、ご飯、味噌汁、生卵、小鉢、漬物)、おすすめ定食（マグロブツ・チキンカツ）850円、ハヤシライス750円、カツカレー820円、ハンバーグ定食820円、カキフライ定食950円、昼1時ごろには階段に行列、現金のみ。',
      confidence: 'medium', sources: [TB, R + 'B440485806/', R + 'B502901311/', R + 'B523945309/', R + 'B528139000/', R + 'B530239311/', R + 'B530853216/', R + 'B531637512/', R + 'B532561776/', R + 'B533144724/', R + 'B534413263/', R + 'B536909880/', R + 'B538303249/'] },
    cultural_comfort: { level: 'japanese', note: 'Order by voice at the counter; menu posted outside on the ground floor; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'single', address_ja: '東京都千代田区四番町4-13 井上ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.688835, 139.735731); GSI resolves only to 東京都千代田区四番町4番地 (lot) about 190 m away, more than 150 m, so the Tabelog point stands as loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534413263/', R + 'B538303249/', R + 'B532561776/'],
    price_note: 'Prices from August–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Yonbancho set (chicken katsu and ginger pork)', '¥850', 'Set meals', 'no', 'no', 'October 2026 review.', 'yonbancho_teishoku'),
      it('おすすめ定食（マグロブツ・チキンカツ）', '', 'Recommended set: tuna cubes and chicken katsu', '¥850', 'Set meals', 'no', 'no', 'June–July 2026 reviews.', 'osusume'),
      it('', '', 'Fried oyster set', '¥950', 'Set meals', 'no', 'no', 'June and October 2026 reviews.', 'kaki_fry'),
      it('', '', 'Hamburg steak set', '¥820', 'Set meals', 'no', 'no', 'August 2026 review.', 'hamburg'),
      it('', '', 'Hayashi rice', '¥750', 'Rice', 'no', 'no', 'August 2026 review.', 'hayashi'),
      it('', '', 'Katsu curry', '¥820', 'Rice', 'no', 'no', 'August 2026 review.', 'katsu_curry'),
    ] }, {
    cuisine: '洋食が中心の昔ながらの定食屋 (2026年の口コミ)・Yonbancho 定食850円: チキンカツと生姜焼きにご飯、大きめの味噌汁、生卵、小鉢、漬物。Otanoshimi 定食。おすすめ定食（マグロブツ・チキンカツ）850円 (2026年の口コミ)・ハヤシライス750円、カツカレー820円、カツハヤシ820円、ハンバーグ定食820円、生姜焼き定食820円、ヒレカツ定食870円、大きなカキフライが4個のカキフライ定食950円 (2026年の口コミ)・テーブルにはピリ辛のこんにゃくと漬物 (2026年10月)',
    neighborhood: '四番町4-13 井上ビル地下1階、日テレ通り沿いの油そばの店の隣。市ケ谷駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。衣をつけて揚げたチキンカツ、カキフライ、カツカレー、ハヤシのソース。',
    vegan_detail: 'ヴィーガンではない。肉や魚の定食に味噌汁と生卵。',
    notes: '[定食・市ヶ谷、安くて早い地下の食堂] 日テレ通り、色あせた青い「Bancho Shokudo」の看板の下の階段を下りると、古くて薄暗く狭い食堂。今も850円で Yonbancho 定食が食べられる。チキンカツと生姜焼きに山盛りのご飯、大きな味噌汁、卵かけご飯用の生卵。ハヤシライス、カツカレー、ハンバーグ、カキフライもみな1,000円以下で、注文して数分で出てくる。店主はカウンター越しに皿を渡し、重いときはひと声かけてくれる。昼1時には常連や学生が階段に並ぶ。カツハヤシのソースが水っぽかったという人も。現金のみ、日曜休み。',
  });
}

// ================================================================ No.4
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130904/13189835/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://www.tysons.jp/no4/';
  const H = day(['08:00', '21:00']);
  put({
    id: 'tokyo_no4_yonbancho_ichigaya', name: 'No.4', category: 'OMNI',
    lat: 35.688212, lng: 139.736137, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A bakery café of wheat breads, French toast and wood-fired pizza; Tabelog notes allergy information is available.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and a falafel sandwich is on the menu (October 2026); breads and French toast use butter, eggs and cream.',
    hours_raw: 'Daily 8:00–21:00 (last food order 20:00, drinks 20:30); breakfast menu 8:00–10:45, lunch menu from 11:00; closed over New Year (Tabelog). Reservations by phone only, from 17:00 (Tabelog; 17:30 on the website); otherwise a waiting list — 38th in line at 9:50 on an April Sunday, over two hours from 11:05 on an October Sunday, 5–15 groups on weekday mornings (2026 reviews). Bread to take away from 11:30; weekends and holidays only 8 popular items (website); take-out customers walk straight in (October 2026). Orders by QR code; coffee refills free (October 2026). Cards, e-money and QR accepted (Tabelog). 48 seats with a terrace; pets only on the engawa space; non-smoking; children and strollers welcome (Tabelog). Opened 1 December 2015 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yonbanchō 5-9, a house-style building with a leafy terrace — 5 min from Ichigaya Stn and from Kōjimachi Stn',
    cuisine: 'Bakery café from Tysons & Company: bread of domestic wheat for breakfast, wood-fired pizza at lunch, T.Y.HARBOR craft beer in the evening (Tabelog) · French toast of yudane brioche with salted whipped butter ¥1,680–1,740, French toast combo with mini salad, bacon and fried egg ¥1,980–2,020, seasonal pumpkin French toast ¥2,480 to 31 October and sakura French toast in April (2026 reviews) · falafel sandwich, burrito, pumpkin soup (October 2026) · breads: croissant, cream bun, country bread, quiche, sausage Danish, salt bread, mentaiko French bread, cereal bread (2025–26 reviews) · coffee ¥600–650 with free refills (2026 reviews)',
    website: SITE, gmaps: gm('No.4 四番町 カフェ'), menu_url: SITE,
    notes: "[Café · Ichigaya, the bakery café with the queue] A bakery café with a leafy terrace in quiet Yonbanchō, open from 8 a.m. for French toast of yudane brioche with salted whipped butter, then wood-fired pizza and, at night, craft beer from the same company's T.Y.HARBOR brewery. The seasonal French toasts — pumpkin in October, sakura in April — draw regulars every year, and the bread counter (croissants, country loaves, quiche, sausage Danish) is worth the trip alone. The catch is the wait: two hours on a Sunday, 38th in line before ten, many overseas visitors among them; take-out buyers walk straight in. Prices run high and drinks are extra. Open daily.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 December 2015 by Tysons & Company (website; Tabelog).',
      background: 'No source names a chef. Website: "Not a café, not a restaurant, not a bakery. No.4 is a space to enjoy \'handcraft\' freely from morning to night" (translated); run by Tysons & Company, which also brews T.Y.HARBOR beer. A reviewer bought bread from Breadworks Omotesando, "which seems to be part of the same chain" (October 2026) — a sister brand.',
      philosophy: '"The most important element in food is people" (website recruiting page, translated).', specialty: 'French toast; breads; wood-fired pizza.',
      anecdotes: [
        { text: '"Every year, I look forward to the Pumpkin French Toast at No.4… this time it was JPY 2480, which is a JPY 100 increase." — October 2026, a seventh visit.', source: R + 'B458674447/' },
        { text: '"We arrived at 11:05 and ended up waiting for over two hours. We finally got in around 13:40." — October 2026, a Sunday.', source: R + 'B538042022/' },
        { text: '"If you opt for takeout, you can surprisingly get in quite easily. The display of delicious breads is impressive." — October 2026.', source: R + 'B208955053/' },
      ],
      japanese_sources_summary: '公式サイト: No.4、カフェでもレストランでもベーカリーでもない、朝から晩まで「ハンドクラフト」を楽しめる空間、四番町5-9、予約は17:30以降、テイクアウトは11時30分から、土日祝は人気の8品のみ。食べログ: カフェ・パン・ピザ、麹町駅・市ケ谷駅から徒歩5分、毎日8:00〜21:00 (L.O.料理20:00、ドリンク20:30)、朝食8:00〜10:45、年末年始休み、カード・電子マネー・QR可、48席、テラス、禁煙、2015年12月1日オープン、国産小麦のパン、薪窯のピザ、T.Y.HARBOR のクラフトビール。口コミ(2025年〜2026年): フレンチトースト1,680〜1,740円、かぼちゃのフレンチトースト2,480円、コーヒーはおかわり自由、長い行列、テイクアウトはすぐ入れる。',
      confidence: 'medium', sources: [TB, SITE, R + 'B208955053/', R + 'B458674447/', R + 'B485848752/', R + 'B519114284/', R + 'B537962186/', R + 'B538042022/', R + 'B538190704/', R + 'B538203119/', R + 'B538404796/', R + 'B538444716/', R + 'B538477267/', R + 'B538519080/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by QR code at the table; many overseas visitors (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'single', address_ja: '東京都千代田区四番町5-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Own website (Halloween Fair 2026) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.688212, 139.736137); GSI resolves only to 東京都千代田区四番町5番地 (lot) about 180 m away, more than 150 m, so the Tabelog point stands as loc_approx single; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538190704/', R + 'B538404796/', R + 'B537962186/', R + 'B538444716/'],
    price_note: 'Prices from October–November 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Yudane brioche French toast with salted whipped butter', '¥1,680', 'Breakfast', 'no', 'no', 'October 2026 review (¥1,740 in November 2026).', 'french_toast'),
      it('', '', 'French toast combo (mini salad, bacon, fried egg)', '¥1,980', 'Breakfast', 'no', 'no', 'October 2026 review (¥2,020 in another).', 'ft_combo'),
      it('', '', 'Pumpkin French toast (seasonal, to 31 October)', '¥2,480', 'Seasonal', 'no', 'no', 'October 2026 reviews.', 'pumpkin_ft'),
      it('', '', 'Coffee (free refills)', '¥650', 'Drinks', 'ask', 'ask', 'October 2026 reviews (¥600 in one).', 'coffee'),
    ] }, {
    cuisine: 'Tysons & Company のベーカリーカフェ: 朝は国産小麦のパン、昼は薪窯のピザ、夜は T.Y.HARBOR のクラフトビール (食べログ)・yudane のブリオッシュに塩ホイップバターのフレンチトースト1,680〜1,740円、ミニサラダ・ベーコン・目玉焼き付きのセット1,980〜2,020円、季節のかぼちゃのフレンチトースト2,480円 (10月31日まで)、4月は桜のフレンチトースト (2026年の口コミ)・ファラフェルのサンドイッチ、ブリトー、かぼちゃのスープ (2026年10月)・パン: クロワッサン、クリームパン、カンパーニュ、キッシュ、ソーセージのデニッシュ、塩パン、明太フランス、シリアルのパン (2025〜26年の口コミ)・コーヒー600〜650円でおかわり自由 (2026年の口コミ)',
    neighborhood: '四番町5-9、緑の多いテラスのある一軒家風の建物。市ケ谷駅、麹町駅から徒歩5分',
    gf_detail: '要確認。小麦のパン、フレンチトースト、薪窯のピザのベーカリーカフェ。食べログにはアレルギー表示ありとある。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありで、ファラフェルのサンドイッチもある (2026年10月)。パンやフレンチトーストにはバター、卵、クリームを使う。',
    notes: '[カフェ・市ヶ谷、行列のできるベーカリーカフェ] 静かな四番町の緑のテラスのあるベーカリーカフェ。朝8時からyudane のブリオッシュに塩ホイップバターのフレンチトースト、昼は薪窯のピザ、夜は同じ会社の T.Y.HARBOR のクラフトビール。10月のかぼちゃ、4月の桜と季節のフレンチトーストを毎年楽しみにする常連もいて、クロワッサン、カンパーニュ、キッシュ、ソーセージのデニッシュが並ぶパンの売り場だけでも行く価値がある。難点は待ち時間で、日曜は2時間、朝10時前に38番目ということも。海外からの客も多い。テイクアウトならすぐ入れる。値段は高めで飲み物は別。年中無休。',
  });
}

save();
