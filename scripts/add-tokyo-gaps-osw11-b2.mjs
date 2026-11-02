// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 2.
//   + 万葉軒 ワンタン麺&香港飲茶Dining Manyoken (Hong Kong wonton noodles and dim sum; since July 2021; ramen block)
//   + バンコク ピーナッツ食堂 Bangkok Peanuts Shokudo (Thai, in a Ningyocho back alley since 2012; lunch sets from ¥900)
//   + KUDAN (18-seat shabu-shabu: one broth each, meat cut to order, vegetable bar; since 2014)
//   + 鮨かみなり Sushi Kaminari (9-seat omakase sushi counter, opened December 2024; chef trained at Sushi Saeki)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 80 ningyocho` (main repo, 2026-11-01): the first four,
//   42 m, 89 m, 93 m and 111 m from the circle centre. Core by: Manyoken genre Ramen; Bangkok Peanuts vegtag (Tabelog
//   "Vegetarian options"); KUDAN 18 seats; Kaminari 9 seats; all with 88–528 reviews.
//   Dedupe. None is in data/tokyo.json by name (JA or romaji) or address (日本橋人形町3-7-10, 1-4-6, 3-6-7, 1-5-10).
//   Chain check. Bangkok Peanuts' own site lists two sister shops, バンコックラララ食堂 (Higashi-Nihonbashi) and
//   バンコックポニー食堂 (Shinkawa) — three shops, neither sister in data. Manyoken, KUDAN and Kaminari: single shops.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-2');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 万葉軒 ワンタン麺&香港飲茶Dining
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13260876/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'tokyo_manyoken_ningyocho', name: '万葉軒 ワンタン麺&香港飲茶Dining (Manyoken Wonton Men & Hong Kong Yum Cha Dining)', category: 'OMNI',
    lat: 35.686511, lng: 139.78182, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles and wonton wrappers, dumplings, buns and spring rolls; the noodle soups are seasoned with soy sauce or salt, and the rice bowls come with wonton soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the noodle bowls carry shrimp wontons and chicken chashu, and nearly all the dim sum is shrimp, pork or crab. Stir-fried seasonal vegetables are on the dinner menu, but nothing is described as vegetarian.',
    hours_raw: 'Mon and Wed–Sun 11:00–23:00 (last order 22:00); closed Tuesday (Tabelog). Lunch sets on weekdays; on Sundays and holidays only à la carte, no sets (September and October 2026 reviews). Reservations accepted, even for one at lunch (October 2026); weekend lunchtimes get busy (October 2026). Cards, e-money and QR (PayPay, d Barai, au PAY) (Tabelog). 40 seats: 34 at tables and booths, 6 at the counter; private rooms for groups of 14 or more (Tabelog). Non-smoking; wheelchair accessible; children and strollers welcome; free Wi-Fi; drinks may be brought in after contacting the shop (Tabelog). Opened 1 July 2021 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 3-7-10, 日本橋DOLL-3 1F — 30 seconds from Ningyocho Stn exit A5 (Hibiya Line, Toei Asakusa Line)',
    cuisine: 'Hong Kong wonton noodles and dim sum (prices from the Tabelog menu, tax included, last updated January 2025; checked against 2026 reviews) · specialty shrimp wonton noodles in soy-sauce or salt soup ¥1,000 (¥1,000 in April 2026), with greens, chicken chashu and green onion (July and October 2026); pork kakuni noodles ¥1,100; Hong Kong beef brisket noodles ¥1,100; tantanmen ¥1,000 · beef brisket rice or pork kakuni rice with wonton soup ¥1,100 (October 2026) · lunch sets of wonton noodles with dim sum ¥1,550 (December 2025–October 2026), some with coconut-milk tapioca · homemade dim sum, 2 pieces: shrimp har gow, shrimp and chive dumplings, pork and shrimp shumai ¥550; crab dumpling ¥600; xiaolongbao ¥600; char siu buns ¥650; daikon cake ¥550; shrimp yuba spring rolls ¥580; lotus-leaf sticky rice ¥900 · dinner: char siu fried rice ¥1,100, seafood fried rice ¥1,300, congee, braised beef brisket ¥1,300, XO-sauce seafood ¥2,200, shark-fin soup ¥1,300 · desserts: coconut milk with tapioca ¥500, mango pudding ¥650, almond tofu · banquet courses with 4–5 dim sum ¥4,200–6,200, two-hour all-you-can-drink +¥1,800 (Tabelog) · Shaoxing wine and a range of Chinese teas (2026 reviews)',
    website: TB, gmaps: gm('万葉軒 人形町'), menu_url: MENU,
    notes: "[Ramen · Ningyocho, Hong Kong wonton noodles and dim sum by the station] A Hong Kong noodle and dim sum restaurant half a minute from Ningyocho station, open from 11:00 to 23:00 every day but Tuesday. Tabelog credits the cooking to a dim sum chef trained in Hong Kong with more than 40 years' experience. At lunch it is mostly noodles: plump shrimp wontons, chicken chashu and greens in a soy-sauce or salt soup, often as a set with freshly steamed shumai or har gow (¥1,550 in 2026), or slow-braised beef brisket on noodles or rice. At night the menu turns to dim sum, fried rice, congee and Cantonese dishes, with Shaoxing wine and Chinese teas. The shopfront looks small but the room runs deep, with booths and a counter for solo diners; an April 2026 diner heard Chinese spoken all around and felt abroad, and an October 2026 visitor came after seeing it on TV. No sets on Sundays and holidays; closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Dim sum chef (unnamed; Tabelog: honed skills in Hong Kong, "over 40 years of experience")', 'Owner-chef from Hong Kong (unnamed; Tabelog)'], origin: 'Hong Kong (Tabelog)',
      background: 'Tabelog\'s shop text (machine-translated): exquisite dim sum and Chinese cuisine crafted by a dim sum chef who honed skills in Hong Kong, famous for its dim sum and wonton noodles; handmade dim sum with carefully selected domestic ingredients; "Delicious Dim Sum and Snacks Crafted by a Master Chef with Over 40 Years of Experience"; an owner-chef from Hong Kong. The menu page describes the wonton noodles as handmade wontons with springy noodles in a special soup. Opened 1 July 2021 (Tabelog). An October 2026 diner came after seeing the shop on TV.',
      philosophy: null, specialty: 'Shrimp wonton noodles; homemade Hong Kong dim sum.',
      anecdotes: [
        { text: '"The atmosphere was lively with conversations in Chinese, making it feel like a little trip abroad." — April 2026, salted shrimp wonton noodles ¥1,000 and soup dumplings ¥600.', source: R + 'B501810515/' },
        { text: '"I initially thought it was a small restaurant based on its exterior, but I discovered there were spacious seats in the back, suitable for gatherings of about 10 people!" — October 2026, beef brisket noodle set.', source: R + 'B537851674/' },
        { text: '"It\'s great that you can make a reservation for just one person!" — October 2026, soy sauce wonton noodles on a holiday.', source: R + 'B538430263/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 万葉軒 ワンタン麺&香港飲茶Dining、飲茶・点心、ダイニングバー、ラーメン、中央区日本橋人形町3-7-10 日本橋DOLL-3 1F、人形町駅A5出口から徒歩30秒、月・水〜日11:00〜23:00 (L.O.22:00)、火曜休み、40席 (テーブル・ボックス34席、カウンター6席)、個室は14名から、サービス料なし、カード・電子マネー・QR可、禁煙、車椅子可、子ども可、持ち込み可 (要相談)、2021年7月1日オープン。メニュー (2025年1月更新): 「万葉軒の名物、ワンタン麺は、手作りのワンタンとコシのある麺が絶妙に絡み合い、特製スープがその美味しさを引き立てます」、香港スタイルの飲茶、自慢の海老ワンタン麺 (醤油・塩) 1,000円、香港伝統の牛バラ麺1,100円、点心2個550円から、宴会コース4,200円〜6,200円。口コミ(2025年8月〜2026年10月): 海老ワンタン麺と点心のセット1,550円、青菜、鶏のチャーシュー、ねぎ、ぷりぷりの海老ワンタン、日曜・祝日はセットなし、牛バラご飯にワンタンスープ付き1,100円、奥に広い席、中国語が飛び交う店内、テレビで見て来た人も。',
      confidence: 'medium', sources: [TB, MENU, R + 'B501810515/', R + 'B535641047/', R + 'B535666669/', R + 'B535942793/', R + 'B536675147/', R + 'B537851674/', R + 'B538327264/', R + 'B538327831/', R + 'B538340705/', R + 'B538430263/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English dish names on the Tabelog menu page; set lunches make ordering easy; Chinese spoken in the room (April 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-7-10 日本橋DOLL-3 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated August 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686511, 139.781820); cross-checked: GSI 東京都中央区日本橋人形町三丁目7番10号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, R + 'B501810515/', R + 'B538340705/'],
    price_note: 'Prices from the Tabelog menu (tax included; last updated 8 January 2025); the wonton noodles were still ¥1,000 in April 2026 and the beef brisket rice ¥1,100 in October 2026.', last_checked: TODAY, items: [
      it('', '', 'Specialty shrimp wonton noodles (soy sauce or salt)', '¥1,000', 'Noodles', 'no', 'no', 'Tabelog menu; April 2026.', 'wonton_men'),
      it('', '', 'Shrimp wonton noodles with dim sum (lunch set)', '¥1,550', 'Lunch', 'no', 'no', 'December 2025–October 2026 reviews; not served on Sundays and holidays.', 'wonton_set'),
      it('', '', 'Hong Kong beef brisket noodles', '¥1,100', 'Noodles', 'no', 'no', 'Tabelog menu.', 'brisket_noodles'),
      it('', '', 'Hong Kong beef brisket rice with wonton soup', '¥1,100', 'Rice', 'no', 'no', 'Tabelog menu; October 2026.', 'brisket_rice'),
      it('', '', 'Steamed shrimp dumplings (har gow), 2 pieces', '¥550', 'Dim sum', 'no', 'no', 'Tabelog menu.', 'har_gow'),
      it('', '', 'Pork and shrimp shumai, 2 pieces', '¥550', 'Dim sum', 'no', 'no', 'Tabelog menu.', 'shumai'),
      it('', '', 'Xiaolongbao (Japanese-brand pork), 2 pieces', '¥600', 'Dim sum', 'no', 'no', 'Tabelog menu; ¥600 in April 2026.', 'xiaolongbao'),
      it('', '', 'Coconut milk with tapioca', '¥500', 'Dessert', 'ask', 'ask', 'Tabelog menu.', 'coconut_tapioca'),
    ] }, {
    cuisine: '香港のワンタン麺と点心 (値段は食べログのメニュー、税込み、2025年1月更新。2026年の口コミで確認)・名物の海老ワンタン麺は醤油か塩のスープで1,000円 (2026年4月も1,000円)、青菜、鶏のチャーシュー、ねぎ入り (2026年7月、10月)。豚の角煮麺1,100円、香港伝統の牛バラ麺1,100円、担々麺1,000円・牛バラご飯、豚の角煮ご飯 (ワンタンスープ付き) 1,100円 (2026年10月)・ワンタン麺と点心のランチセット1,550円 (2025年12月〜2026年10月)、ココナッツミルクのタピオカが付くセットも・自家製点心2個: 海老餃子、海老とニラの蒸し餃子、豚肉と海老の焼売550円、蟹の蒸し餃子600円、小籠包600円、チャーシューまん650円、大根餅550円、海老の湯葉巻き580円、蓮の葉のおこわ900円・夜: チャーシュー炒飯1,100円、海鮮炒飯1,300円、お粥、牛バラの煮込み1,300円、海鮮のXO醤炒め2,200円、ふかひれスープ1,300円・デザート: ココナッツミルクのタピオカ500円、マンゴープリン650円、杏仁豆腐・点心4〜5種類の宴会コース4,200〜6,200円、2時間飲み放題+1,800円 (食べログ)・紹興酒と中国茶もいろいろ (2026年の口コミ)',
    neighborhood: '日本橋人形町3-7-10 日本橋DOLL-3 1F。人形町駅A5出口から徒歩30秒 (日比谷線、都営浅草線)',
    gf_detail: 'グルテンフリーではない: 小麦の麺とワンタンの皮、餃子、まん、春巻き。麺のスープは醤油か塩の味付けで、ご飯ものにはワンタンスープが付く。',
    vegan_detail: 'ヴィーガンではない: 麺には海老ワンタンと鶏のチャーシュー、点心もほとんどが海老、豚、蟹。夜のメニューに季節野菜の炒め物はあるが、ベジタリアン向けと書かれた料理はない。',
    notes: '[ラーメン・人形町、駅そばの香港のワンタン麺と点心] 人形町駅から30秒、火曜以外は11時から23時まで開いている香港のワンタン麺と点心の店。食べログによれば、料理を担うのは香港で腕を磨いた経験40年以上の点心師。昼はほぼ麺で、ぷりぷりの海老ワンタン、鶏のチャーシュー、青菜を醤油か塩のスープで。蒸したての焼売や海老餃子とのセット (2026年に1,550円) や、柔らかく煮込んだ牛バラをのせた麺やご飯も人気。夜は点心、炒飯、お粥、広東料理が中心になり、紹興酒や中国茶も。間口は小さいが奥に深く、ボックス席と一人でも座れるカウンターがある。2026年4月の口コミでは周りで中国語が飛び交い海外にいるようだったといい、2026年10月にはテレビで見て来たという人も。日曜・祝日はセットなし、火曜休み。',
  });
}

// ================================================================ バンコク ピーナッツ食堂
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13137879/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'http://bkk-peanuts.com/'; const SISTERS = SITE + 'free/sisters'; const SMENU = SITE + 'menu';
  const H = day(['11:15', '15:00'], ['17:30', '23:00']);
  put({
    id: 'tokyo_bangkok_peanuts_shokudo_ningyocho', name: 'バンコク ピーナッツ食堂 (Bangkok Peanuts Shokudo)', category: 'OMNI',
    lat: 35.685664, lng: 139.781565, cuisine_type: 'thai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Rice dishes and rice noodles make up much of the menu, but nothing is called gluten-free, and Thai sauces here include oyster sauce (pad thai) and soy-sauce seasoning (beef tendon rice noodles, October 2026); shrimp toast, fried snacks and Khao Soi\'s wheat noodles are out.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists "vegetarian options", but no dish is named as vegetarian; Thai fish sauce runs through the cooking (the railway fried rice smells of it, March 2026), and the curries, salads and stir-fries listed use chicken, pork or seafood. The shop says it can leave out chili or coriander (official site), so ask what it can make without fish sauce and meat.',
    hours_raw: 'Daily 11:15–15:00 (last order 14:30) and 17:30–23:00 (last order 22:00); closed only over the New Year holidays (Tabelog). A July 2026 diner found lunch starting at 11:00. Reservations accepted; seating time may be limited when busy (Tabelog). 40 seats incl. a counter; private hire for 20–50 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; no service charge (Tabelog). Non-smoking (Tabelog). Every dish can be taken away (Tabelog). Opened 23 February 2012 (Tabelog; official site: since 2012).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-4-6, 藤和ビル 1F, at the end of a narrow back alley — 1 min from Ningyocho Stn exit A6 (Hibiya Line), 4 min from Suitengumae Stn exit 8 (Hanzomon Line)',
    cuisine: 'Thai home and street cooking · lunch (every day, with salad and coconut-tapioca dessert): mini set of two of gapao, green curry or Chiang Mai curry over rice with a fried egg ¥900 (December 2025–October 2026); green curry with chicken and eggplant ¥850, add a mini gapao rice ¥150 or mini tom yum rice noodles ¥150 (September 2026); Gaeng Chiang Mai (pork and vegetable curry) ¥850 (September 2026); Khao Soi; khao man gai with both boiled and fried chicken; beef-tendon rice noodles (Kway Teow Nuea Pui); larb gai sets (2026 reviews) · dinner: tom yum goong, red curry with shrimp, pad thai, gai yang, "tiger\'s tears" grilled pork, fresh spring rolls, som tam, stir-fried pea shoots, railway fried rice, fried tofu with Thai herb salad (2026 reviews); a winter Thai suki hot pot (Tabelog) · courses: 9 dishes with 1.5 h all-you-can-drink ¥4,200; 10 dishes with 2 h ¥5,000 (Tabelog) · Singha, Chang, Leo and Heartland beer (2026 reviews), Thai wines (Tabelog)',
    website: SITE, gmaps: gm('バンコク ピーナッツ食堂 人形町'), menu_url: SMENU,
    notes: "[Thai · Ningyocho, a back-alley Thai canteen open every day] A roomy Thai restaurant at the end of a narrow alley a minute from Ningyocho station, open for lunch and dinner every day of the year but New Year since 2012. The cook, per the shop's own site, is from Uttaradit and learned at Thai street stalls from the age of 15; staff greet you in Thai (October 2026). Lunch is the draw: a mini set of gapao and a curry over rice with a fried egg, salad and coconut tapioca for ¥900, or a green curry for ¥850 with ¥150 add-ons of mini gapao or tom yum noodles. One diner back for an eighth time in October 2026 has worked through Khao Soi, larb gai sets and beef-tendon rice noodles; another came for the khao man gai. At night it serves tom yum goong, grilled pork and chicken, som tam and stir-fries with Thai beers, and courses with all-you-can-drink. Diners find the heat mild and tuned to Japanese tastes; the shop says it will adjust spice and leave out coriander. Everything can be taken away. A September 2026 diner called the prices unbelievably low.",
    chef_bio: { chef_name: null, roles: ['Cook from Uttaradit, Thailand (unnamed; official site)'], origin: 'Uttaradit, Thailand (the cook, per the official site)',
      background: 'The official site: a Thai restaurant in a back alley of Ningyocho, Chuo-ku, since 2012, where a cook from Uttaradit who gained experience at Thai street stalls from age 15 serves unpretentious, tasty Thai food. Its sister-shop page lists two more: バンコックラララ食堂 (Higashi-Nihonbashi 3-1-4 2F) and バンコックポニー食堂 (Shinkawa 2-12-17, マルコウ八重洲通りビル 1F). Opened 23 February 2012 (Tabelog).',
      philosophy: 'Bring out the ingredients with a balance of spicy, sweet, salty and sour (Tabelog shop text).', specialty: 'Lunch mini sets of gapao and Thai curries; khao man gai.',
      anecdotes: [
        { text: '"Upon entering, the staff greeted me in Thai." — October 2026, mini half set ¥900.', source: R + 'B536893096/' },
        { text: '"The railway fried rice is made with long-grain rice, similar to what you find at Thai train stations, and has a delicious aroma reminiscent of fish sauce." — March 2026, dinner.', source: R + 'B469301357/' },
        { text: '"In any case, I was amazed by the unbelievable low prices." — September 2026, green curry ¥850 with ¥150 mini gapao and mini tom yum noodles.', source: R + 'B536203798/' },
      ],
      japanese_sources_summary: '公式サイト (bkk-peanuts.com): 中央区人形町の路地裏にあるタイ料理屋、15歳からタイの屋台で経験を積んだウタラディット出身のコックが気取らない美味しいタイ料理を、since 2012、毎日売り切れの人気のカオマンガイはランチで、卓上のタイ調味料セット、宴会では辛いものが苦手な方には別皿で辛くない料理、パクチー抜きも対応、姉妹店はバンコックラララ食堂 (東日本橋3-1-4 2F) とバンコックポニー食堂 (新川2-12-17 マルコウ八重洲通りビル1F)。食べログ (店舗会員): タイ料理、カレー、ダイニングバー、日本橋人形町1-4-6 藤和ビル 1F、毎日11:15〜15:00 (L.O.14:30)、17:30〜23:00 (L.O.22:00)、年末年始のみ休み、40席、カード可、電子マネー・QR不可、サービス料なし、禁煙、全品テイクアウト可、ベジタリアンメニューあり、コース4,200円 (9品、1.5時間飲み放題) と5,000円 (10品、2時間飲み放題)、2012年2月23日オープン。口コミ(2025年3月〜2026年10月): ミニセット900円 (ガパオ、グリーンカレー、チェンマイカレーから2品、目玉焼き、サラダ、タピオカ)、グリーンカレー850円にミニガパオ150円、ミニトムヤム麺150円、ゲーンチェンマイ (豚肉と野菜のチェンマイカレー) 850円、カオソーイ、カオマンガイ、牛すじのライスヌードル、辛さは控えめ、タイ語で迎えてくれる、周りは再開発の工事中。',
      confidence: 'medium', sources: [TB, MENU, SITE, SISTERS, SMENU, R + 'B437792404/', R + 'B469301357/', R + 'B519102890/', R + 'B532029862/', R + 'B536203798/', R + 'B536356041/', R + 'B536627063/', R + 'B536652631/', R + 'B536893096/', R + 'B537660175/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch is a short list of numbered sets; staff greet in Thai (October 2026); spice can be adjusted on request (official site; Tabelog menu).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-4-6 藤和ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated March 2025–October 2026. The official site\'s news stops in 2017.' },
    pin_source: `Tabelog ${TB} (35.685664, 139.781565); cross-checked: GSI 東京都中央区日本橋人形町一丁目4番6号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B519102890/', R + 'B536203798/', R + 'B536356041/', TB],
    price_note: 'Lunch prices from 2025–26 reviews; course prices from Tabelog (read November 2026). The à la carte menu on Tabelog dates from 2015 and is not used for prices.', last_checked: TODAY, items: [
      it('', '', 'Lunch mini set: two of gapao, green curry or Chiang Mai curry, with salad and tapioca', '¥900', 'Lunch', 'ask', 'ask', 'February and October 2026.', 'mini_set'),
      it('', '', 'Green curry with chicken and eggplant (lunch)', '¥850', 'Lunch', 'ask', 'no', 'September 2026.', 'green_curry'),
      it('', '', 'Mini gapao rice add-on (lunch)', '¥150', 'Lunch', 'ask', 'no', 'September 2026.', 'mini_gapao'),
      it('', '', 'Mini tom yum rice noodles add-on (lunch)', '¥150', 'Lunch', 'ask', 'no', 'September 2026; comes with two shrimp.', 'mini_tomyum'),
      it('ゲーンチェンマイ（豚肉と野菜のチェンマイカレー）', '', 'Gaeng Chiang Mai: pork and vegetable curry (lunch)', '¥850', 'Lunch', 'ask', 'no', 'September 2026 (photo caption).', 'gaeng_chiang_mai'),
      it('', '', 'Course: 9 dishes with 1.5 h all-you-can-drink', '¥4,200', 'Courses', 'ask', 'ask', 'Tabelog; official site.', 'course_9'),
      it('', '', 'Course: 10 dishes with 2 h all-you-can-drink', '¥5,000', 'Courses', 'ask', 'ask', 'Tabelog.', 'course_10'),
    ] }, {
    cuisine: 'タイの家庭料理と屋台料理・ランチ (毎日、サラダとココナッツのタピオカ付き): ガパオ、グリーンカレー、チェンマイカレーから2品をご飯と目玉焼きにのせたミニセット900円 (2025年12月〜2026年10月)。鶏肉と茄子のグリーンカレー850円に、ミニガパオご飯150円やミニトムヤムのライスヌードル150円を追加できる (2026年9月)。ゲーンチェンマイ (豚肉と野菜のチェンマイカレー) 850円 (2026年9月)。カオソーイ、茹で鶏と揚げ鶏の両方がのるカオマンガイ、牛すじのライスヌードル、ラープガイのセット (2026年の口コミ)・夜: トムヤムクン、海老のレッドカレー、パッタイ、ガイヤーン、「虎の涙」の豚の焼き物、生春巻き、ソムタム、豆苗の炒め物、鉄道チャーハン、揚げ豆腐とタイハーブのサラダ (2026年の口コミ)。冬はタイスキの鍋 (食べログ)・コース: 9品と1.5時間飲み放題4,200円、10品と2時間飲み放題5,000円 (食べログ)・Singha、Chang、Leo、ハートランドのビール (2026年の口コミ)、タイのワイン (食べログ)',
    neighborhood: '日本橋人形町1-4-6 藤和ビル 1F、細い路地の奥。人形町駅A6出口から徒歩1分 (日比谷線)、水天宮前駅8番出口から徒歩4分 (半蔵門線)',
    gf_detail: '要確認。ご飯ものやライスヌードルが多いが、グルテンフリーの説明はなく、タイの調味料にはオイスターソース (パッタイ) や醤油の味付け (牛すじのライスヌードル、2026年10月) も。エビパン、揚げ物、カオソーイの小麦の麺は避けて。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあるが、ベジタリアン向けと名前の付いた料理はない。タイの魚醤 (ナンプラー) が料理全体に使われ (2026年3月、鉄道チャーハンはナンプラーの香り)、口コミのカレー、サラダ、炒め物は鶏、豚、魚介入り。辛さ抜きやパクチー抜きには対応する (公式サイト) ので、ナンプラーと肉を使わずに作れるものを確認して。',
    notes: '[タイ料理・人形町、毎日開いている路地裏のタイ食堂] 人形町駅から1分、細い路地の奥の広いタイ料理店で、2012年から年末年始以外は毎日昼も夜も営業。店のサイトによれば、コックはウタラディット出身で15歳からタイの屋台で経験を積んだ人。タイ語で迎えてくれる (2026年10月)。昼が人気で、ガパオとカレーをご飯と目玉焼きにのせたミニセットにサラダとココナッツのタピオカが付いて900円、グリーンカレー850円には150円でミニガパオやトムヤムの麺を追加できる。2026年10月に8回目の来店をした人はカオソーイ、ラープガイのセット、牛すじのライスヌードルと食べ進め、カオマンガイ目当ての人も。夜はトムヤムクン、豚や鶏の焼き物、ソムタム、炒め物をタイのビールと、飲み放題付きのコースも。辛さは控えめで日本人向けという声が多く、店は辛さの調整やパクチー抜きにも応じる。全品持ち帰り可。2026年9月の口コミは信じられない安さと書く。',
  });
}

// ================================================================ KUDAN
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13171060/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'https://kudan-shabushabu.com/';
  const WK = day(['12:00', '14:30'], ['18:00', '22:00']); const WE = day(['17:00', '22:00']);
  put({
    id: 'tokyo_kudan_ningyocho', name: 'KUDAN', category: 'OMNI',
    lat: 35.686911, lng: 139.781518, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plain meat and vegetables cooked in the kombu broth are the simplest choice, but the sukiyaki, medicinal, mala and soy-milk broths and the dipping sauces are not described, and the finishing noodles (udon, Chinese noodles, pho) are wheat or not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: every broth is built on the shop\'s own dashi of kombu and bonito (official site), and the menu is meat-centred; the vegetable bar alone is plant-based.',
    hours_raw: 'Tue–Fri lunch 12:00–14:30 (last order 14:00) and dinner 18:00–22:00 (last order 21:00); Sat, Sun and holidays 17:00–22:00; the day before a holiday 18:00–23:00; closed Monday (Tabelog). A February 2026 diner found lunch on Wednesdays and Thursdays only, with Tuesdays to follow from March. Reservations accepted, incl. online with a ¥500 discount on courses (Tabelog). Orders by phone (mobile ordering) (official site; November 2025 review). Cards, Suica-type e-money, QR (PayPay, Rakuten Pay, au PAY) (Tabelog). 18 seats; private hire for up to 18 (official site). Non-smoking; children welcome; drinks may be brought in (Tabelog). Opened 23 July 2014 (Tabelog).',
    hours: { 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-6-7, 人形町共同ビル 1F — 2 min from Ningyocho Stn (Hibiya Line, Toei Asakusa Line), 7 min from Suitengumae Stn (Hanzomon Line)',
    cuisine: 'Shabu-shabu with one pot per person: choose a broth (kombu, Japanese dashi, sukiyaki, medicinal, mala, soy milk; all built on house kombu-and-bonito dashi, official site; tomato cheese in July 2026) · meat cut to order (official site; March 2026): Black Wagyu chuck eye roll, Iwate\'s Iwachu pork loin and shoulder, sangen pork belly (Canadian pork, per the menu), Chiba chicken thigh, chicken tsukune · sets with 120 g of meat, 90-minute free vegetables and rice, and finishing noodles: Iwachu pork ¥3,580; Wagyu and Iwachu pork ¥4,100; Black Wagyu chuck eye roll ¥4,780; special Black Wagyu ¥6,600 · 2-hour all-you-can-eat courses: Iwachu pork ¥5,650; Wagyu chuck and Iwachu pork ¥6,700 (preschoolers free; ¥2,000 off for elementary pupils and over-65s) (Tabelog menu, tax included, updated 1 November 2026) · self-serve vegetable bar; curry at the buffet (April 2026) · lunch hot pots with free salad and rice about ¥1,000 (November 2025); spicy clay-pot beef with 150 g meat (February 2026) · side dishes: dashi-maki tamago ¥660, tripe sashimi ¥380, daily roast beef ¥980 (official site) · Tokyo sake 澤乃井, 5–6 kinds (official site)',
    website: SITE, gmaps: gm('KUDAN しゃぶしゃぶ 人形町'), menu_url: MENU,
    notes: "[Shabu-shabu · Ningyocho, a small hot-pot room where everyone picks a broth] An 18-seat shabu-shabu restaurant two minutes from Ningyocho station, where each diner gets a pot and chooses a broth: kombu, Japanese dashi, sukiyaki, medicinal, mala or soy milk, all on the house kombu-and-bonito dashi. The meat is sliced only when you order it (Black Wagyu and Iwate's Iwachu pork are the stars) and vegetables come from a self-serve bar. Dinner is a set with 120 g of meat from about ¥3,600 or an all-you-can-eat course from ¥5,650; diners in 2025–26 praised the marbled beef, with one finding the beef better than the pork. Weekday lunch is a small hot pot with help-yourself salad and rice for about ¥1,000. It fills up early: a February 2026 diner saw the owner or manager working alone and turning the OPEN sign round to keep up. A calm room, popular with groups; closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner or manager (unnamed; working alone at a February 2026 weekday lunch)'], origin: null,
      background: 'Opened 23 July 2014 (Tabelog). The official site: shabu-shabu all-you-can-eat centred on Black Wagyu, with Saga beef and Iwate\'s Iwachu pork; meat is never pre-cut but sliced to each order to keep its colour and flavour; six broths on a house additive-free dashi of kombu and bonito; a vegetable bar by the counter; two IH burners per table and mobile ordering; Tokyo sake from 澤乃井 of 青梅; private hire for up to 18. A Google review on the site notes one person running lunch (ワンオペ).',
      philosophy: 'Serve the meat at its best by cutting each slice to order and keeping its time in the air as short as possible (official site).', specialty: 'One-pot-per-person shabu-shabu with a choice of six broths; meat sliced to order.',
      anecdotes: [
        { text: '"The meat is sliced fresh after you order, making it tender and incredibly delicious—I ended up eating more than I intended!" — March 2026, all-you-can-eat dinner.', source: R + 'B523873283/' },
        { text: '"I brought some friends from overseas, and it was their first time trying the soy milk hot pot." — February 2026, lunch.', source: R + 'B523343310/' },
        { text: '"The cozy interior may be small, but it allows for attentive service, which is wonderful." — April 2026.', source: R + 'B527114727/' },
      ],
      japanese_sources_summary: '公式サイト (kudan-shabushabu.com): 人形町駅徒歩2分、黒毛和牛・国産豚のしゃぶしゃぶ食べ放題、夏は旨辛の麻辣湯しゃぶしゃぶ、お肉はすべて注文後にオーダーカット、黒毛和牛、佐賀牛、岩手県産岩中豚、昆布と鰹から取る自家製の無添加合わせ出汁をベースに昆布、和風出汁、すき焼き、薬膳、麻辣湯、豆乳の6種類、一人ずつ選べる、野菜はカウンター前の野菜バーで食べ放題、出汁巻き玉子660円、ガツ刺し380円、日替わりローストビーフ980円、青梅の地酒「澤乃井」を常時5〜6種、冷やおろし1合1,200円、黒毛和牛のしゃぶしゃぶ食べ放題コース6,500円、和牛＆岩中豚セット3,780円、1テーブルに2口のIH、モバイルオーダー、18名まで貸切、日本橋人形町3-6-7 人形町共同ビル 1F。食べログ (店舗会員): 火〜金12:00〜14:30・18:00〜22:00、土日祝17:00〜22:00、月曜休み、18席、2014年7月23日オープン、メニュー (2026年11月1日更新): 岩中豚セット3,580円、和牛＆岩中豚セット4,100円、黒毛和牛肩ロースセット4,780円、特選黒毛和牛セット6,600円、食べ放題5,650円・6,700円。口コミ(2025年10月〜2026年10月): 肉は注文ごとに切る、野菜はセルフで食べ放題、昼は1,000円ほどの鍋にサラダとご飯が食べ放題、店主か店長がひとりで切り盛り、豆乳鍋、トマトチーズ鍋、霜降りの牛肉。',
      confidence: 'medium', sources: [TB, MENU, SITE, R + 'B516482923/', R + 'B516798253/', R + 'B517499190/', R + 'B523260064/', R + 'B523343310/', R + 'B523873283/', R + 'B524120762/', R + 'B527114727/', R + 'B532097393/', R + 'B537157599/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'The official site has an English page; ordering is by phone (mobile order); an overseas group enjoyed it in February 2026.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-6-7 人形町共同ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a menu updated 1 November 2026; official site with posts to October 2026; reviews dated October 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686911, 139.781518); cross-checked: GSI 東京都中央区日本橋人形町三丁目6番7号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, SITE, R + 'B517499190/'],
    price_note: 'Dinner prices from the Tabelog menu (tax included; updated 1 November 2026); side-dish prices from the official site; lunch from a November 2025 review.', last_checked: TODAY, items: [
      it('岩中豚セット', '', 'Iwachu pork set: 120 g meat, vegetables, finishing noodles', '¥3,580', 'Shabu-shabu sets', 'ask', 'no', 'Tabelog menu.', 'iwachu_set'),
      it('和牛＆岩中豚セット', '', 'Wagyu and Iwachu pork set', '¥4,100', 'Shabu-shabu sets', 'ask', 'no', 'Tabelog menu; ¥3,780 on the official site.', 'wagyu_iwachu_set'),
      it('', '', 'Black Wagyu chuck eye roll set', '¥4,780', 'Shabu-shabu sets', 'ask', 'no', 'Tabelog menu.', 'wagyu_set'),
      it('', '', 'All-you-can-eat course, Iwachu pork (2 h)', '¥5,650', 'All-you-can-eat', 'ask', 'no', 'Tabelog menu.', 'tabehodai_pork'),
      it('', '', 'All-you-can-eat course, Wagyu chuck and Iwachu pork (2 h)', '¥6,700', 'All-you-can-eat', 'ask', 'no', 'Tabelog menu; ¥6,500 on the official site.', 'tabehodai_wagyu'),
      it('出汁巻き玉子', '', 'Dashi-maki tamago', '¥660', 'Side dishes', 'ask', 'no', 'Official site.', 'dashimaki'),
      it('', '', 'Lunch hot pot with free salad and rice', '¥1,000', 'Lunch', 'ask', 'no', 'November 2025.', 'lunch_nabe'),
    ] }, {
    cuisine: '一人ずつ鍋で食べるしゃぶしゃぶ。出汁を選べる (昆布、和風出汁、すき焼き、薬膳、麻辣湯、豆乳。どれも昆布と鰹の自家製の合わせ出汁がベース、公式サイト。2026年7月にはトマトチーズも)・肉は注文ごとにカット (公式サイト、2026年3月): 黒毛和牛の肩ロース、岩手県産岩中豚のロースと肩ロース、三元豚のバラ (メニューによればカナダ産)、Chiba の鶏もも、鶏のつくね・肉120g、90分の野菜とご飯の食べ放題、締めの麺付きのセット: 岩中豚3,580円、和牛＆岩中豚4,100円、黒毛和牛肩ロース4,780円、特選黒毛和牛6,600円・2時間の食べ放題コース: 岩中豚5,650円、和牛肩ロースと岩中豚6,700円 (未就学児は無料、小学生と65歳以上は2,000円引き) (食べログのメニュー、税込み、2026年11月1日更新)・セルフの野菜バー、カレーも (2026年4月)・昼はサラダとご飯が食べ放題の鍋が1,000円ほど (2025年11月)、肉150gの辛い土鍋の牛 (2026年2月)・一品: 出汁巻き玉子660円、ガツ刺し380円、日替わりローストビーフ980円 (公式サイト)・東京の地酒「澤乃井」を5〜6種 (公式サイト)',
    neighborhood: '日本橋人形町3-6-7 人形町共同ビル 1F。人形町駅から徒歩2分 (日比谷線、都営浅草線)、水天宮前駅から徒歩7分 (半蔵門線)',
    gf_detail: '要確認。昆布の出汁で肉と野菜をしゃぶしゃぶするのがいちばん簡単だが、すき焼き、薬膳、麻辣湯、豆乳の出汁とつけだれの中身は説明がなく、締めの麺 (うどん、中華麺、フォー) は小麦か説明なし。',
    vegan_detail: 'ヴィーガンではない: どの出汁も店で取る昆布と鰹の出汁がベース (公式サイト) で、肉が中心のメニュー。植物性なのは野菜バーだけ。',
    notes: '[しゃぶしゃぶ・人形町、一人ずつ出汁を選ぶ小さな鍋の店] 人形町駅から2分、18席のしゃぶしゃぶの店で、一人ひとつの鍋に出汁を選ぶ: 昆布、和風出汁、すき焼き、薬膳、麻辣湯、豆乳。どれも店で取る昆布と鰹の出汁がベース。肉は注文を受けてから切り (主役は黒毛和牛と岩手の岩中豚)、野菜はセルフの野菜バーから。夜は肉120gのセットが3,600円ほどから、食べ放題のコースは5,650円から。2025〜26年の口コミでは霜降りの牛肉が好評で、豚より牛がおすすめという声も。平日の昼はサラダとご飯が食べ放題の小さな鍋が1,000円ほど。昼は早く埋まり、2026年2月には店主か店長がひとりで切り盛りし、混むと入口の OPEN の札を外していたという。落ち着いた店内で、グループにも人気。月曜休み。',
  });
}

// ================================================================ 鮨かみなり
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13303974/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'https://sushi-kaminari.com/'; const KODAWARI = SITE + 'kodawari.html';
  const EVE = day(['17:30', '23:00']); const SUN = day(['12:00', '14:30'], ['17:30', '23:00']);
  put({
    id: 'tokyo_sushi_kaminari_ningyocho', name: '鮨かみなり (Sushi Kaminari)', category: 'OMNI',
    lat: 35.685281, lng: 139.782138, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. An omakase of sushi and small dishes: some pieces come with kombu soy sauce, others can be had with salt (September 2026), and the rice is seasoned with red and black vinegar (official site); simmered anago with sauce, a fried mehikari and miso soup also appeared in 2026 courses. Nothing is called gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase with no other menu.',
    hours_raw: 'Mon–Sat 17:30–23:00; Sunday 12:00–14:30 (one seating, starting together at 12:00) and 17:30–23:00; closing days irregular (official site). Tabelog lists Mondays as closed. After 20:00 seats may be free — phone first (official site; Tabelog). Omakase only; reservations through the official site; private hire for 6 or more; children at the counter must order an adult course, à la carte possible in the private counter room (official site; Tabelog). 9 counter seats plus a private counter room for 4–6 (official site; Tabelog). Cards incl. UnionPay; no e-money or QR (Tabelog; official site). Non-smoking. Opened 3 December 2024 (Tabelog).',
    hours: { 1: EVE, 2: EVE, 3: EVE, 4: EVE, 5: EVE, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-5-10, 日本橋芸者新道ビル 1F, in a narrow alley — 3 min from Ningyocho Stn (Hibiya Line, Toei Asakusa Line), 5 min from Suitengumae Stn (Hanzomon Line)',
    cuisine: 'Omakase sushi: 6–7 small dishes, about 10 pieces of nigiri, a toro-takuan roll and tamago · omakase ¥27,000; Sunday-only lunch omakase ¥16,000 (Tabelog, tax included) · tuna from 石司 (Ishiji, per Tabelog), fish from Toyosu market and from the chef\'s home region of Kansai (official site), e.g. Akashi anago, sea bream, cuttlefish and Spanish mackerel (2026 reviews) · shari blended from red and black vinegar (official site) · 2026 courses included squid somen, hairy crab with asparagus, monkfish liver, straw-grilled bonito from Kesennuma, plum chawanmushi, hokki clam swished in a broth of its own liver, Hokkaido sea urchin, a salmon-roe rice bowl and a castella-style tamago · extra pieces and rolls (kanpyo, uni) on request · about 20 sakes chosen by the chef, incl. sake from the chef\'s home town Himeji and rare labels such as 十四代, 黒龍 and 新政, served from 720 ml bottles (official site)',
    website: SITE, gmaps: gm('鮨かみなり 人形町'), menu_url: MENU,
    notes: "[Sushi · Ningyocho, a young chef's 9-seat omakase counter] A bright nine-seat counter behind a double sliding door in a narrow Ningyocho alley, opened in December 2024 by Daiki Araki (named in a September 2026 review), who trained for ten years at Sushi Saeki and comes from a sushi family, per Tabelog. The chef's home ground is Himeji (official site), and the fish follows: Akashi anago, sea bream and cuttlefish alongside Toyosu catch and tuna from 石司. A course runs to six or seven small dishes, then about ten nigiri on red-and-black-vinegar rice, and ends with a toro-takuan roll and a castella-like tamago (¥27,000; Sunday lunch ¥16,000). Two repeat diners in 2026 note the rice changing and improving, and praise the chef's warmth; one August 2026 diner noted the shop carries the name of the owner's father. There are about 20 sakes, some from Himeji. Book through the shop's site; Sunday is the only lunch.",
    chef_bio: { chef_name: 'Daiki Araki (romaji from a September 2026 review; no kanji source found)', roles: ['Head chef (大将 on the official site; "The head chef, Mr. Daiki Araki", September 2026 review)'], origin: 'Himeji (the chef\'s home town, 姫路, per the official site)',
      background: 'Per Tabelog\'s shop text: opened 3 December 2024 on Ningyocho\'s Kogiku Street, led by a chef raised in a sushi family who honed skills for 10 years at "Sushi Saeki". A September 2026 review names the head chef Daiki Araki and says the chef trained for a long time at Sushi Saeki; an August 2026 review says the shop "carries on the name of the owner\'s father". Reviewers in 2026 describe the chef as young and charming, and a woman served in the dining room in August 2026. The official site says the chef picks about 20 sakes, including sake from the chef\'s home town of Himeji.',
      philosophy: 'Seasonal fish from Toyosu and the Kansai home ground, kept at a strictly controlled temperature, with small dishes that show the chef\'s playfulness (official site).', specialty: 'Omakase nigiri on red-and-black-vinegar shari; Akashi fish; 石司 tuna.',
      anecdotes: [
        { text: '"I asked the chef, \'Isn\'t this a bit too much?\' [The chef] replied, \'I\'m serving a lot since I have a day off tomorrow.\'" — September 2026.', source: R + 'B535267282/' },
        { text: '"A new restaurant located down a small alley. It carries on the name of the owner\'s father, and even the oshibori (wet towels) have a touch of humor." — August 2026, Sunday lunch.', source: R + 'B535246639/' },
        { text: '"The rice has become softer than before, yet it still has a nice firmness to it." — October 2026, seventh visit.', source: R + 'B507296265/' },
      ],
      japanese_sources_summary: '公式サイト (sushi-kaminari.com): 鮨かみなり、日本橋人形町1-5-10 日本橋芸者新道ビル 1F、人形町駅から徒歩3分、水天宮前駅から徒歩5分、月〜土17:30〜23:00、日曜12:00〜14:30 (12:00一斉スタート)・17:30〜23:00、不定休、日曜のみ昼夜営業、20時以降は空き次第、カウンター9席、個室あり (6名まで)、6名以上で貸切、カード可、電子マネー・QR不可、全席禁煙、魚は豊洲市場や地元関西から、温度管理を徹底、大将の遊び心が光る一品料理、赤酢と黒酢をブレンドしたしゃり、マグロは「石司」から、大将が全国から選ぶ20種類ほどの日本酒、大将の地元・姫路の地酒や十四代、黒龍、新政も、四合瓶で提供、日曜限定のランチは要予約。食べログ (店舗会員): 2024年12月3日オープン、おまかせコース27,000円、日曜限定ランチ16,000円、9席。口コミ(2025年10月〜2026年10月): 若く気さくな大将、Daiki Araki、Sushi Saeki で長く修業、Akashi の穴子や鯛、昆布醤油か塩で、梅の茶碗蒸し、ホッキ貝のしゃぶしゃぶ、とろたく巻き、カステラのような玉子、しゃりが変わってきた、店名はオーナーの父の名から。',
      confidence: 'medium', sources: [TB, MENU, SITE, KODAWARI, R + 'B507296265/', R + 'B522585164/', R + 'B528169765/', R + 'B533408148/', R + 'B535113609/', R + 'B535246639/', R + 'B535267282/', R + 'B535866619/', R + 'B536318593/', R + 'B537207185/'] },
    cultural_comfort: { level: 'japanese', note: 'Omakase only with no printed menu or prices (October 2026); book through the shop\'s Japanese site, which has a translate button.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-5-10 日本橋芸者新道ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated October 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685281, 139.782138); cross-checked: GSI 東京都中央区日本橋人形町一丁目5番10号 (go) 27m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, MENU, SITE],
    price_note: 'Course prices from Tabelog (tax included; read November 2026). The Tabelog menu page (January 2025) gave the omakase as from ¥25,000 incl. tax and service.', last_checked: TODAY, items: [
      it('', '', 'Omakase course: seasonal small dishes and nigiri', '¥27,000', 'Courses', 'ask', 'no', 'Tabelog set menu; 6–7 dishes, about 10 nigiri, toro-takuan roll.', 'omakase'),
      it('', '', 'Sunday-only lunch omakase', '¥16,000', 'Courses', 'ask', 'no', 'Tabelog set menu; 12:00 start, booking required (official site).', 'sunday_lunch'),
    ] }, {
    cuisine: 'おまかせの鮨: 6〜7品の一品、握り10貫ほど、とろたく巻き、玉子・おまかせコース27,000円、日曜限定の昼のおまかせ16,000円 (食べログ、税込み)・マグロは「石司」から、魚は豊洲市場と大将の地元・関西から (公式サイト)。たとえば Akashi の穴子、鯛、墨烏賊、鰆 (2026年の口コミ)・赤酢と黒酢をブレンドしたしゃり (公式サイト)・2026年のコースには、いかそうめん、毛蟹とアスパラ、あん肝、Kesennuma の藁焼きの鰹、梅の茶碗蒸し、肝のだしでしゃぶしゃぶするホッキ貝、Hokkaido の雲丹、いくらの小丼、カステラのような玉子・追加の握りや巻物 (かんぴょう、雲丹) も・大将が選ぶ20種類ほどの日本酒。大将の地元・姫路の地酒や、十四代、黒龍、新政といった珍しい銘柄も、四合瓶で (公式サイト)',
    neighborhood: '日本橋人形町1-5-10 日本橋芸者新道ビル 1F、細い路地。人形町駅から徒歩3分 (日比谷線、都営浅草線)、水天宮前駅から徒歩5分 (半蔵門線)',
    gf_detail: '予約時に要確認。鮨と一品のおまかせで、昆布醤油で食べるものと塩で食べられるものがあり (2026年9月)、しゃりは赤酢と黒酢 (公式サイト)。煮穴子のツメ、めひかりの揚げ物、味噌汁も2026年のコースに出た。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚介のおまかせだけ。',
    notes: '[鮨・人形町、若い大将の9席のおまかせカウンター] 人形町の細い路地、二重の引き戸の奥にある明るい9席のカウンター。2024年12月に開いた店で、2026年9月の口コミによれば大将は Daiki Araki。食べログによれば鮨屋の家に育ち、Sushi Saeki で10年修業した。大将の地元は姫路 (公式サイト) で、魚も Akashi の穴子、鯛、墨烏賊などに豊洲の魚、マグロは「石司」から。コースは6〜7品の一品、赤酢と黒酢のしゃりの握りが10貫ほど、とろたく巻きとカステラのような玉子で締める (27,000円、日曜の昼は16,000円)。2026年に何度も通う2人の客はしゃりが変わって良くなってきたと書き、大将の温かさを褒める。2026年8月の口コミでは店名はオーナーの父の名を継いだものという。日本酒は20種類ほどで姫路の地酒も。予約は店のサイトから、昼は日曜だけ。',
  });
}

save();
