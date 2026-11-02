// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 18.
//   Ids checked for parity: 27121170, 27146002, 27098038, 27132612 (all even).
//   Recheck of the batch-17 skip of 北新地 串かつ凡 離れ (27095660): the operator page kitchen-dan.jp/bon/ (read 2026-11-02) lists five
//   串かつ凡 shops: 北新地 (大阪), 北新地・離れ (大阪), 銀座 (東京), 御所南 (京都), Paris (フランス). Five, so the skip stands; not redrafted.
//   + 深夜食堂 しまながし Shinya Shokudo Shimanagashi (late-night Japanese-Western-Chinese dishes in Dojima, to 1:30)
//   + 北新地 天ぷら 拾幸 Kitashinchi Tempura Juko (10-seat tempura counter in Dojima since December 2024; lunch since May 2026)
//   + 鮨おぎ堂 Sushi Ogido (six-seat Edomae counter of aged fish and red-vinegar rice in Dojima, since 2017)
//   + 焼鳥 鳥中前 Yakitori Torinakamae (14-seat yakitori omakase in Kitashinchi since 2023, cashless)
//   Chain check: しまながし: Tabelog names the operator as Hyperion Co., Ltd.; no other shop found. 拾幸: invoice T9120902017922 → 株式会社岡部
//   (NTA register); the official site names this one shop. おぎ堂: one shop. 鳥中前: one shop found.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-18');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 深夜食堂 しまながし
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27121170/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '01:30']); const S = day(['18:00', '01:00']);
  put({
    id: 'osaka_shinya_shokudo_shimanagashi', name: '深夜食堂 しまながし (Shinya Shokudo Shimanagashi)', category: 'OMNI',
    lat: 34.696371, lng: 135.496934, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Beef cutlet, horumon curry rice, yakisoba, sweet-potato tempura and zaru soba sit beside sashimi and simmered dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the curry uses bonito dashi and offal; the menu is of meat and fish dishes.',
    hours_raw: 'Tue–Sat 18:00–1:30; Sun 18:00–1:00; closed Mondays (Tabelog). Reservations accepted; few online slots (September 2026). Starter charge ¥600 (Tabelog). Ordering by QR code on your phone (September 2026). Cards (VISA, Master, JCB, AMEX, Diners), QUICPay; no QR payment (Tabelog). 11 seats: a counter of 7 and a private room for 4; heated tobacco only; wheelchair accessible (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-5-35, 4F of 堂島レジャービル — 5 min from Kitashinchi Stn',
    cuisine: 'Late-night à la carte that crosses Japanese, Western and Chinese cooking, with sake and shochu (Tabelog) · signatures: "bifukatsu" beef cutlet in a light batter with the house sauce, and horumon curry rice of small intestine, vegetables and bonito dashi (Tabelog) · dishes named in September–October 2026: Yamagata-style cold tofu with dashi as the starter, red shrimp marinated in Shaoxing wine, grilled chicken-neck yakisoba, green-pepper salad, nagaimo kimchi, zaru soba, fried rice, hamo in broth, toro-taku, sweet-potato tempura, pork and cabbage stew, pork kimchi, sake-lees soup, tuna with egg yolk and soy, steamed eel',
    website: null, gmaps: gm('深夜食堂 しまながし 堂島'), menu_url: null,
    notes: "[Izakaya · Dojima, a late-night diner] An eleven-seat late-night diner on a fourth floor in Dojima, open until 1:30, with an owner at the counter and two cooks behind. The menu crosses Japanese, Western and Chinese cooking: the light-battered beef cutlet with house sauce and the horumon curry rice are the signatures, with red shrimp marinated in Shaoxing wine, a chicken-neck yakisoba and seasonal fish. Order from your phone; there is a ¥600 starter charge. Diners in 2026 call it good value for Kitashinchi and best as a second stop; one found the toro-taku dry.",
    chef_bio: { chef_name: null, roles: ['Owner at the counter (unnamed)', 'two kitchen cooks and floor staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: creative dishes beyond Japanese, Western and Chinese categories, the beef cutlet and horumon curry rice, sake and shochu; operated by Hyperion Co., Ltd. A September 2026 diner describes the owner at the counter with two chefs and hall staff in the kitchen, and a name drawn from "shimanagashi" ingredients, leftovers from popular restaurants.', philosophy: null, specialty: 'Beef cutlet; horumon curry rice.',
      anecdotes: [
        { text: '"The staff consists of the owner at the counter, along with two chefs and hall staff in the kitchen!" — September 2026.', source: R + 'B536235034/' },
        { text: '"This is definitely a place I want to return to when I\'m hungry at night in Kitashinchi." — October 2026, the cutlet, yakisoba and sashimi.', source: R + 'B537869460/' },
        { text: '"As the name suggests, it might be better to visit here as a second stop to enjoy some tasty bites." — October 2026, a business dinner for three.', source: R + 'B538291626/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 深夜食堂 しまながし、日本料理、大阪市北区堂島1-5-35 堂島レジャービル 4F、北新地駅から徒歩5分、火〜土18:00〜1:30、日18:00〜1:00、月曜休み、運営は Hyperion Co., Ltd.、予約可、お通し600円、カード・QUICPay 可、QR 不可、11席 (カウンター7、4名の個室)、加熱式たばこのみ、車いす可、和洋中の枠をこえた創作料理、名物のビフカツと自家製ソース、小腸と野菜とかつおだしのホルモンカレーライス、日本酒と焼酎。口コミ(2026年9月〜10月): Yamagata のだしの冷奴、紹興酒漬けの赤エビ、せせりの焼きそば、ピーマンのサラダ、長芋キムチ、ざるそば、チャーハン、鱧のお椀、トロたく (かたかったという声)、さつまいもの天ぷら、豚とキャベツの煮込み、豚キムチ、粕汁、マグロの卵黄醤油、うなぎの蒸し物、スマホで注文、カウンターに店主と厨房に料理人2人、北新地にしては手ごろ、2軒目向きという声。',
      confidence: 'medium', sources: [TB, R + 'B535432506/', R + 'B536235034/', R + 'B536260151/', R + 'B536346232/', R + 'B536346595/', R + 'B536397646/', R + 'B537036133/', R + 'B537608792/', R + 'B537869460/', R + 'B538291626/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ordering by QR code on your phone (September 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区堂島1-5-35 堂島レジャービル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目5番35号 (go) 3m. 鮨おぎ堂 of this batch (osaka_sushi_ogido_dojima, "堂島1-5-35 堂島レジャービル 2F") is in the same building with its pin 3 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'The starter charge from Tabelog; dish prices not given in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Beef cutlet with house sauce', '', 'Signature', 'no', 'no', 'Tabelog; September–October 2026.', 'bifukatsu'),
      it('', '', 'Horumon curry rice', '', 'Signature', 'ask', 'no', 'Tabelog; September 2026.', 'horumon_curry'),
      it('', '', 'Starter charge', '¥600', 'Charges', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '和洋中をこえた深夜のアラカルトと日本酒、焼酎 (食べログ)・名物: 軽い衣と自家製ソースのビフカツ、小腸と野菜とかつおだしのホルモンカレーライス (食べログ)・2026年9月〜10月の口コミに出てくる料理: お通しのYamagata のだしの冷奴、紹興酒漬けの赤エビ、せせりの焼きそば、ピーマンのサラダ、長芋キムチ、ざるそば、チャーハン、鱧のお椀、トロたく、さつまいもの天ぷら、豚とキャベツの煮込み、豚キムチ、粕汁、マグロの卵黄醤油、うなぎの蒸し物',
    neighborhood: '堂島1-5-35、堂島レジャービルの4階。北新地駅から5分',
    gf_detail: '要確認。グルテンの情報なし。ビフカツ、ホルモンカレーライス、焼きそば、さつまいもの天ぷら、ざるそばが、刺身や煮物といっしょにある。',
    vegan_detail: 'ヴィーガンではありません。カレーはかつおだしとホルモン、料理は肉と魚。',
    notes: '[居酒屋・堂島、夜遅くまでの食堂] 堂島のビルの4階にある11席の深夜食堂で、1時半まで。カウンターに店主、厨房に料理人が2人。メニューは和洋中をこえていて、名物は軽い衣に自家製ソースのビフカツとホルモンカレーライス、ほかに紹興酒漬けの赤エビ、せせりの焼きそば、季節の魚。注文はスマホで、お通し600円。2026年の口コミでは北新地にしては手ごろ、2軒目向きという声が多い。トロたくがかたかったという声も。',
  });
}

// ================================================================ 北新地 天ぷら 拾幸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27146002/'; const R = TB + 'dtlrvwlst/';
  const OWN = 'https://tempra-juko.com/';
  const W = day(['11:30', '14:00'], ['17:30', '21:30']);
  put({
    id: 'osaka_tempura_juko_dojima', name: '北新地 天ぷら 拾幸 (Kitashinchi Tempura Juko)', category: 'OMNI',
    lat: 34.696723, lng: 135.498834, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura counter; nearly every course item is battered and fried.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, fish and beef tempura, sashimi and dashi dishes.',
    hours_raw: 'Mon–Sat 11:30–14:00 (last order 13:30) and 17:30–21:30; closed Sundays, holidays and the first and third Saturdays (Tabelog; official site). Lunch began 20 May 2026 (Tabelog). Reservations accepted; same-day bookings possible (September 2026). Service charge 10% at dinner (September–October 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 10 counter seats; non-smoking; English menu (Tabelog). Opened 23 December 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂島1-2-17, 2F of 大日ビル — 5 min from Kitashinchi Stn',
    cuisine: 'Tempura counter in the lineage of 天宗 in Gion, Kyoto (official site): light batter in specially chosen oil, with dips of bonito salt, Awaji seaweed salt, sudachi and tentsuyu (Tabelog; October 2026) · courses (Tabelog, tax included, 10% service extra): "TENKO" of 17 items with two shrimp, starter, sashimi, simmered dish and seasonal fruit ¥17,000; short TENKO of 15 items ¥14,000; "SHUKO" anniversary course with a toast of wine ¥20,000 · tempura named in 2026: kuruma shrimp with the head, Himeji lotus root, beef loin sandwich, asparagus, makomotake, ayu, ribbonfish in shiso, maitake, sardine under sea urchin; starters of persimmon namasu, whelk, sansho-simmered eel, black edamame, barracuda sushi roll; a dobin-mushi of the first matsutake and soba to finish (September–October 2026) · lunch since May 2026: tempura set (two shrimp, anago, vegetables, kakiage, with tendon sauce or dashi chazuke) ¥2,500; lunch courses (October 2026)',
    website: OWN, gmaps: gm('天ぷら 拾幸 北新地'), menu_url: null,
    notes: "[Tempura · Dojima, a light tempura counter] A ten-seat tempura counter in Dojima, open since December 2024 by a chef in the line of 天宗 in Gion, Kyoto, frying in a chosen oil so the batter stays light enough to finish with fruit. The ¥17,000 TENKO course runs from small seasonal starters and sashimi through two kuruma shrimp (head and all), lotus root, a beef-loin sandwich and sardine under sea urchin, with bonito salt or Awaji seaweed salt. Since May 2026 there is lunch: a ¥2,500 tempura set ending in kakiage over rice with dashi. 10% service at dinner; English menu.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)', 'counter staff'], origin: null, background: 'Per the official site: 天富羅 拾幸 (じゅこう), a tempura specialist in Kitashinchi-Dojima, whose craftsman is "京都祇園『天宗』の流れを汲む" (of the line of 天宗 in Gion, Kyoto). Per the shop-maintained Tabelog listing: prawns chosen by the head chef; light batter in specially selected oil; opened 23 December 2024; lunch from 20 May 2026. The Tabelog invoice number T9120902017922 is registered to 株式会社岡部 (NTA invoice register, read 2026-11-02).', philosophy: '"Lightly battered tempura that won\'t weigh you down" (Tabelog).', specialty: 'Tempura course; kakiage chazuke at lunch.',
      anecdotes: [
        { text: '"The ability to choose between katsuobushi salt, Awaji Island seaweed salt, and tempura dipping sauce to complement the dishes was a nice touch." — October 2026, a second visit.', source: R + 'B522278479/' },
        { text: '"I had the kakiage (mixed tempura) with ochazuke (tea over rice), and the dashi (broth) was delicious too!" — October 2026, the Saturday tempura set lunch.', source: R + 'B537759335/' },
        { text: '"The dobin mushi featured the first matsutake mushrooms of the season." — September 2026, a same-day booking.', source: R + 'B534857767/' },
      ],
      japanese_sources_summary: '公式サイト: 天富羅 拾幸 (じゅこう)、大阪・北新地 堂島の天富羅専門店、京都祇園『天宗』の流れを汲む職人が厳選食材を一品ずつ揚げる天ぷらのコース、堂島1丁目2-17 大日ビル2階、月〜土11:30〜14:00 (第1・第3土曜は定休)、17:30〜21:30、予約可、禁煙、10席。食べログ (店舗会員): 北新地 天ぷら 拾幸、天ぷら・日本料理、日・祝休み、第1・第3土曜休み、2026年5月20日からランチ、カード可、電子マネー・QR 不可、カウンター10席、英語のメニュー、2024年12月23日オープン、えび2本をふくむ旬の天ぷら12種、だしの先付、刺身、煮物、季節の果物、TENKO 17品17,000円、TENKO (ショート) 15品14,000円、記念日の SHUKO とワインの乾杯20,000円。インボイス登録は株式会社岡部。口コミ(2026年9月〜10月): サービス料10%、車えびは頭つき、Himeji のれんこん、牛ロースのサンド、アスパラ、まこもだけ、鮎、太刀魚のしそ巻き、舞茸、ウニをのせたいわし、柿なます、つぶ貝、うなぎの山椒煮、黒枝豆、カマスの棒寿司、松茸の土瓶蒸し、〆のそば、かつおぶしの塩、Awaji の藻塩、すだち、天つゆ、ランチの天ぷら定食2,500円 (えび2本、穴子、野菜、かき揚げ、天丼のたれや天茶)、当日予約もできた。',
      confidence: 'medium', sources: [TB, OWN, R + 'B519136297/', R + 'B520398881/', R + 'B522278479/', R + 'B523480329/', R + 'B534857767/', R + 'B535706578/', R + 'B537092866/', R + 'B537099905/', R + 'B537759335/', R + 'B538106785/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu; dishes explained at the counter (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-2-17 大日ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and the official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目2番17号 (go) 10m; no other record within 30 m. The official site's schema coordinates sit about 200 m west and were not used; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537092866/'],
    price_note: 'Course prices from the Tabelog listing (tax included, 10% service extra at dinner); lunch from an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'TENKO course, 17 items', '¥17,000', 'Dinner', 'no', 'no', 'Tabelog; September–October 2026.', 'tenko'),
      it('', '', 'TENKO short course, 15 items', '¥14,000', 'Dinner', 'no', 'no', 'Tabelog.', 'tenko_short'),
      it('', '', 'Premium tempura set lunch', '¥2,500', 'Lunch', 'no', 'no', 'October 2026.', 'tempura_lunch'),
    ] }, {
    cuisine: '京都祇園の天宗の流れをくむ天ぷらのカウンター (公式サイト): 厳選した油で軽い衣、かつおぶしの塩、Awaji の藻塩、すだち、天つゆで (食べログ、2026年10月)・コース (食べログ、税込、サービス料10%別): えび2本、先付、刺身、煮物、季節の果物の17品の「TENKO」17,000円、15品の TENKO ショート14,000円、ワインで乾杯する記念日の「SHUKO」20,000円・2026年の口コミに出てくる天ぷら: 頭つきの車えび、Himeji のれんこん、牛ロースのサンド、アスパラ、まこもだけ、鮎、太刀魚のしそ巻き、舞茸、ウニをのせたいわし。先付は柿なます、つぶ貝、うなぎの山椒煮、黒枝豆、カマスの棒寿司。松茸の土瓶蒸しと〆のそば (2026年9月〜10月)・2026年5月からランチ: 天ぷら定食 (えび2本、穴子、野菜、かき揚げ、天丼のたれか天茶で) 2,500円、ランチのコースも (2026年10月)',
    neighborhood: '堂島1-2-17、大日ビルの2階。北新地駅から5分',
    gf_detail: 'グルテンフリーではありません。天ぷらのカウンターで、コースのほとんどが衣をつけて揚げたもの。',
    vegan_detail: 'ヴィーガンではありません。えび、魚、牛肉の天ぷら、刺身、だしの料理。',
    notes: '[天ぷら・堂島、軽い衣の天ぷらカウンター] 2024年12月からの堂島の10席の天ぷらのカウンターで、京都祇園の天宗の流れをくむ職人が、選んだ油で軽く揚げ、最後の果物まで重くならない。17,000円の TENKO は季節の先付と刺身から、頭つきの車えび2本、れんこん、牛ロースのサンド、ウニをのせたいわしと続き、かつおぶしの塩や Awaji の藻塩で。2026年5月からはランチも: 2,500円の天ぷら定食で、最後はかき揚げをごはんにのせてだしで。夜はサービス料10%、英語のメニューあり。',
  });
}

// ================================================================ 鮨おぎ堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27098038/'; const R = TB + 'dtlrvwlst/';
  const W = day(['18:00', '21:00']);
  put({
    id: 'osaka_sushi_ogido_dojima', name: '鮨おぎ堂 (Sushi Ogido)', category: 'OMNI',
    lat: 34.696343, lng: 135.496936, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Edomae sushi with soy-cured toppings and simmered anago in sauce; the shop asks diners to state allergies when booking (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood omakase.',
    hours_raw: 'Daily 18:00–21:00, closing days not fixed (Tabelog); open on Sundays when booked (December 2024). Reservations by the day before (August 2023); the shop may phone to confirm; tell it of dislikes or allergies (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 6 seats at a hinoki counter; whole-shop hire for small groups of up to four (January 2026); non-smoking (Tabelog). Opened 17 April 2017 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: W }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂島1-5-35, 2F of 堂島レジャービル, left from the lift — 3 min from Nishi-Umeda Stn, 5 min from Kitashinchi Stn',
    cuisine: 'Edomae sushi of aged fish on red-vinegar rice, about ten pieces, after small dishes that suit sake, in an omakase (Tabelog) · Tabelog-only course of ten pieces with seasonal seafood dishes ¥11,000 (Tabelog, tax included) · named in 2023–2026: tuna aged two weeks, seko crab, simmered eel, grilled barracuda, stick sushi, chawanmushi of new onion and crab, sea urchin, kohada, sardine, firefly squid, salmon roe, small nigiri, toro-taku roll as an extra · local sakes and wines chosen by the chef (Tabelog)',
    website: null, gmaps: gm('鮨おぎ堂 堂島'), menu_url: null,
    notes: "[Sushi · Dojima, aged fish on red-vinegar rice] A six-seat hinoki counter on a second floor in Dojima, open since 2017, where the chef works largely alone through small dishes for sake and then about ten small nigiri of aged fish, tuna aged two weeks among them, on red-vinegar rice. The Tabelog-only course is ¥11,000, a bargain for the area, though drinks can double the bill (January 2026). Book a day ahead; the entrance is hard to find, left from the lift. A May 2026 diner from Hokkaido was won over.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), largely working alone'], origin: null, background: 'Per the shop-maintained Tabelog listing: an omakase of seasonal dishes and about ten pieces of sushi of aged fish and red-vinegar rice; local sake and wine chosen by the chef; six hinoki counter seats; opened 17 April 2017. A November 2023 diner writes that the chef manages "pretty much all by himself".', philosophy: null, specialty: 'Aged-fish Edomae sushi.',
      anecdotes: [
        { text: '"The sushi is aged sushi." — August 2023; the same diner was told the tuna is aged two weeks.', source: R + 'B429867769/' },
        { text: '"The course is priced at JPY 11,000, which is quite a bargain for this area." — January 2026, a private booking for four.', source: R + 'B520583470/' },
        { text: '"I\'m from Hokkaido and I love sushi, often enjoying it back home." — May 2026, a first visit.', source: R + 'B531221482/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨おぎ堂、寿司、大阪市北区堂島1-5-35 堂島レジャービル 2F、西梅田駅から徒歩3分、北新地駅から5分、毎日18:00〜21:00、不定休、予約可、苦手なものやアレルギーは事前に、確認の電話がくることも、カード可、電子マネー・QR 不可、檜のカウンター6席、禁煙、2017年4月17日オープン、熟成させた魚と赤酢のシャリの寿司約10貫と酒に合う一品のおまかせ、大将が選ぶ地酒とワイン、食べログ限定の10貫と季節の魚介のコース11,000円。口コミ(2023年8月〜2026年5月): 2週間熟成のマグロ、セコガニ、穴子の煮物、カマスの焼き物、棒寿司、新玉ねぎとカニの茶碗蒸し、ウニ、コハダ、イワシ、ホタルイカ、いくら、小ぶりのにぎり、追加のトロたく、日曜も予約があれば営業、前日までに予約、ほぼ大将ひとり、4名まで貸切、飲み物で会計が倍に、入口がわかりにくい、エレベーターを降りて左、Hokkaido 出身の人も満足。',
      confidence: 'medium', sources: [TB, R + 'B314539454/', R + 'B429867769/', R + 'B480051463/', R + 'B480641724/', R + 'B499399830/', R + 'B507386029/', R + 'B520583470/', R + 'B523623505/', R + 'B528339283/', R + 'B531221482/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase at a six-seat counter; online booking available (November 2024). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市北区堂島1-5-35 堂島レジャービル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目5番35号 (go) 6m. 深夜食堂 しまながし of this batch (osaka_shinya_shokudo_shimanagashi, "堂島1-5-35 堂島レジャービル 4F") is in the same building with its pin 3 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B520583470/'],
    price_note: 'Course price from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Tabelog-only course: ten pieces of sushi and seasonal seafood dishes', '¥11,000', 'Courses', 'ask', 'no', 'Tabelog; January 2026.', 'tabelog_course'),
    ] }, {
    cuisine: '熟成させた魚と赤酢のシャリの江戸前寿司を約10貫、その前に酒に合う一品のおまかせ (食べログ)・食べログ限定の10貫と季節の魚介の料理のコース11,000円 (食べログ、税込)・2023年〜2026年の口コミに出てくるもの: 2週間熟成のマグロ、セコガニ、穴子の煮物、カマスの焼き物、棒寿司、新玉ねぎとカニの茶碗蒸し、ウニ、コハダ、イワシ、ホタルイカ、いくら、小ぶりのにぎり、追加のトロたく・大将が選ぶ地酒とワイン (食べログ)',
    neighborhood: '堂島1-5-35、堂島レジャービルの2階、エレベーターを降りて左。西梅田駅から3分、北新地駅から5分',
    gf_detail: '要確認。グルテンの情報なし。醤油で漬けたネタや、たれの穴子の江戸前寿司。アレルギーは予約のときに伝えるよう店が案内している (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介のおまかせ。',
    notes: '[寿司・堂島、熟成の魚と赤酢のシャリ] 2017年からの堂島のビルの2階にある、檜のカウンター6席の寿司屋で、大将がほぼひとりで営む。酒に合う一品から、2週間熟成のマグロなど熟成させた魚の小ぶりのにぎりを赤酢のシャリで約10貫。食べログ限定のコースは11,000円とこのあたりではお得だが、飲み物で会計が倍になったという声も (2026年1月)。前日までに予約を。入口はわかりにくく、エレベーターを降りて左。2026年5月には Hokkaido 出身の人も満足していた。',
  });
}

// ================================================================ 焼鳥 鳥中前
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27132612/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']); const E = day(['16:00', '23:00']);
  put({
    id: 'osaka_yakitori_torinakamae_kitashinchi', name: '焼鳥 鳥中前 (Yakitori Torinakamae)', category: 'OMNI',
    lat: 34.697347, lng: 135.500372, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The yakitori is seasoned with salt; the thigh tataki is served with salt or soy sauce; finishes of a soboro rice bowl or chicken-soup chazuke with grilled rice balls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken omakase with chicken soup; the vegetable skewers come within it.',
    hours_raw: 'Mon–Fri 17:00–23:00; Sat, Sun and holidays 16:00–23:00 (Tabelog). Bookings before 20:00 are for the omakase only, à la carte added after; à la carte bookings after 20:00 with a ¥660 seat charge (Tabelog). Cashless only: cards (VISA, Master, JCB, AMEX, Diners), IC cards, iD, QUICPay, PayPay (Tabelog). 14 seats at a U-shaped counter; non-smoking; English menu and English-speaking staff; children welcome (Tabelog; October 2026). Opened 11 January 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曽根崎新地1-8-3, 4F of 遅ビル, an alley off the main Kitashinchi streets, up a staircase — 3 min from Kitashinchi Stn',
    cuisine: 'Yakitori omakase grilled over charcoal, mostly with salt (Tabelog; October 2026) · courses (Tabelog, tax included): today\'s omakase of 14 items, thigh tataki, a chicken-fat salad with shungiku and crisp skin, eight skewers, two vegetable skewers, yuzu daikon, chicken soup ¥5,500; special assorted omakase of 15 items with two special dishes and a choice of chicken soboro bowl or chicken-soup chazuke ¥7,700 · skewers named in October 2026: breast with wasabi, heart, gizzard, bonjiri, eggplant, shishito, quail egg; specials such as chicken harami chanja · sake such as Nagano\'s 19 POCO A POCO, wine and highballs (October 2026)',
    website: null, gmaps: gm('焼鳥 鳥中前 北新地'), menu_url: null,
    notes: "[Yakitori · Kitashinchi, a good-value omakase] A fourteen-seat yakitori counter round a U-shaped grill, four floors up in a Kitashinchi alley, open since 2023 and featured in JAL's in-flight magazine. Two omakase courses, ¥5,500 and ¥7,700, open with a chicken-thigh tataki and a salad of shungiku and crisp skin, then large salt-grilled skewers such as wasabi breast and bonjiri, and end with a chicken-soup chazuke over grilled rice balls or a soboro bowl. Diners in October 2026 call it a bargain for Kitashinchi; booking is advised. Cashless only; English menu and English-speaking staff.",
    chef_bio: { chef_name: null, roles: ['Grill chefs and staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: "A Hidden Gem for Blissful Moments Featured in JAL\'s In-Flight Magazine", carefully grilled yakitori at an excellent price, counter seating; opened 11 January 2023.', philosophy: null, specialty: 'Salt-grilled yakitori omakase; chicken-soup chazuke.',
      anecdotes: [
        { text: '"The staff explained the dishes before grilling, checking if we were okay with raw chicken." — October 2026, a Saturday at 4 PM.', source: R + 'B537988120/' },
        { text: '"The finishing touch, the ochazuke (tea over rice), was exquisite, and I highly recommend trying it!" — October 2026.', source: R + 'B538380746/' },
        { text: '"As the restaurant was quite full, I believe reservations are essential." — October 2026, the ¥7,700 course.', source: R + 'B538284657/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼鳥 鳥中前、焼き鳥、大阪市北区曽根崎新地1-8-3 遅ビル 4F、北新地駅から徒歩3分、月〜金17:00〜23:00、土・日・祝16:00〜23:00、20時までの予約はおまかせのみ、20時以降はアラカルトの予約も (席料660円、突き出しつき)、キャッシュレスのみ (カード、電子マネー、PayPay)、カウンター14席、禁煙、英語のメニューと英語を話すスタッフ、子ども可、2023年1月11日オープン、JAL の機内誌に掲載、本日のおまかせ14品5,500円 (もものたたき、鶏油と春菊とパリパリの皮のサラダ、串8本、野菜串2本、柚子大根、鶏スープ)、特選おまかせ15品7,700円 (逸品2品と〆の鶏そぼろ丼か鶏スープ茶漬け)。口コミ(2026年10月): コの字のカウンター、ささみのわさび、ハツ、砂肝、ぼんじり、なす、ししとう、うずら、鶏ハラミのチャンジャ、焼きおにぎりの鶏スープ茶漬け、卵黄のそぼろ丼、Nagano の日本酒、ワイン、ハイボール、生の鶏が大丈夫か確認してくれる、予約が必要なほど満席、階段で4階へ。',
      confidence: 'medium', sources: [TB, R + 'B537465783/', R + 'B537620839/', R + 'B537855248/', R + 'B537988120/', R + 'B538027676/', R + 'B538225204/', R + 'B538274963/', R + 'B538284657/', R + 'B538380746/', R + 'B538383113/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu and English-speaking staff.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-8-3 遅ビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目8番3号 (go) 5m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included); October 2026 reviews match ¥7,700.', last_checked: TODAY, items: [
      it('', '', 'Today\'s omakase, 14 items', '¥5,500', 'Courses', 'ask', 'no', 'Tabelog.', 'omakase_5500'),
      it('', '', 'Special assorted omakase, 15 items with a finishing dish', '¥7,700', 'Courses', 'ask', 'no', 'Tabelog; October 2026.', 'omakase_7700'),
      it('', '', 'À la carte seat charge with a starter (after 20:00)', '¥660', 'Charges', 'ask', 'ask', 'Tabelog.', 'seat_charge'),
    ] }, {
    cuisine: '炭火で焼く、塩が中心の焼き鳥のおまかせ (食べログ、2026年10月)・コース (食べログ、税込): もものたたき、鶏油と春菊とパリパリの皮のサラダ、串8本、野菜串2本、柚子大根、鶏スープの14品の本日のおまかせ5,500円、逸品2品と〆の鶏そぼろ丼か鶏スープ茶漬けの15品の特選おまかせ7,700円・2026年10月の口コミに出てくる串: ささみのわさび、ハツ、砂肝、ぼんじり、なす、ししとう、うずら。逸品は鶏ハラミのチャンジャなど・日本酒 (Nagano の 19 POCO A POCO など)、ワイン、ハイボール (2026年10月)',
    neighborhood: '曽根崎新地1-8-3、遅ビルの4階、北新地の路地の階段の上。北新地駅から3分',
    gf_detail: '要確認。グルテンの情報なし。焼き鳥は塩が中心で、もものたたきは塩か醤油で。〆は鶏そぼろ丼か焼きおにぎりの鶏スープ茶漬け。',
    vegan_detail: 'ヴィーガンではありません。鶏のおまかせで鶏スープつき。野菜串もコースの中。',
    notes: '[焼鳥・北新地、お得な焼き鳥のおまかせ] 北新地の路地のビルの4階、コの字の焼き台をかこむ14席の焼き鳥のカウンターで、2023年から。JAL の機内誌にも載った。おまかせは5,500円と7,700円の2つで、もものたたきと春菊とパリパリの皮のサラダから始まり、ささみのわさびやぼんじりなど大きな塩焼きの串、〆は焼きおにぎりの鶏スープ茶漬けかそぼろ丼。2026年10月の口コミでは北新地にしてはお得という声が多く、予約がおすすめ。キャッシュレスのみ、英語のメニューと英語を話すスタッフあり。',
  });
}

save();
