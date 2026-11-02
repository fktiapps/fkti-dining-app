// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 8.
//   + 個室 野菜巻き串と焼き鳥 博多巻きんしゃい 梅田茶屋町店 Hakata Makinshai (Hakata vegetable-wrapped skewers, Chayamachi, since 2018)
//   + 鮨 邂逅 Sushi Kaiko (eight-seat red-vinegar sushi counter in Kitashinchi, since 2023)
//   + おばんざい KURUMI Obanzai KURUMI (Kitashinchi obanzai counter, since 2022)
//   + 北新地 〆。 Kitashinchi Shime. (seafood, sake, and soba or clam ramen to finish, since 2023)
//   - skipped 串かつ でんがな 大阪駅前第3ビル1号店 27092068: chain (the operator's site, dengana.jp, runs a campaign across 42 shops of
//     "串かつ でんがな" and its other brands, with franchise recruiting; read 2026-11-01).
//   - skipped 燦 別邸 北新地店 27137152: expanding chain (okinawa-shabushabu.com lists 燦別邸 shops in Kitashinchi ×2, Toyama, Gifu,
//     Hiroshima, Yokohama and Kobe, a franchise owner, and Okinawa sister brands; read 2026-11-01).
//   Chain check: Makinshai: no other branch found; invoice T5120001190055 → 株式会社炉暖, Nishinari (NTA register). Kaiko: one shop.
//   KURUMI: one shop. Shime.: one shop, with a sister restaurant in Fukuoka supplying kue (Tabelog). None is in data/osaka.json
//   (grep by id, name and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27092068', 'chain: 串かつ でんがな, about 42 shops with its sister brands and franchising (dengana.jp)');
skip('27137152', 'expanding chain: 燦別邸 (Kitashinchi ×2, Toyama, Gifu, Hiroshima, Yokohama, Kobe; franchise; okinawa-shabushabu.com)');

// ================================================================ 博多巻きんしゃい 梅田茶屋町店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27103676/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '00:00']); const E = day(['12:00', '00:00']);
  put({
    id: 'osaka_hakata_makinshai_chayamachi', name: '個室 野菜巻き串と焼き鳥 博多巻きんしゃい 梅田茶屋町店 (Hakata Makinshai, Umeda Chayamachi)', category: 'OMNI',
    lat: 34.70613, lng: 135.499756, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Vegetable skewers wrapped in pork and grilled, a yakisoba roll, soy-marinated quail eggs, a fried salmon cutlet and kamameshi; nothing is described as gluten-free. One diner felt a stated dislike was not clearly handled (October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the signature vegetables are wrapped in pork or bacon; the rest is yakitori and seafood.',
    hours_raw: 'Mon–Fri 17:00–24:00 (last order food 23:00, drinks 23:30); Sat and Sun 12:00–24:00; holidays listed with last order 23:00; open every day, hours may change with bookings; 26–30 December run on holiday hours (Tabelog). Reservations accepted, phone 14:00–23:00; two-hour limit; bookings cancelled after 15 minutes without notice; online bookings may show slots that are already full (Tabelog). Orders by QR code or tablet (September 2026); one September 2026 diner was charged for another table\'s order and refunded. Cards (VISA, Master, AMEX, Diners) and PayPay; no e-money (Tabelog). 80 seats, private rooms for 2 to 36, counter, tatami and sunken seating; non-smoking (Tabelog). Opened 10 March 2018 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Chayamachi 2-28, 5F of Central茶屋町 — 3 min from Hankyu Osaka-Umeda Stn, 6 min from JR Osaka Stn',
    cuisine: 'Hakata-style vegetable skewers wrapped in pork, yakitori and Hakata dishes in private rooms (Tabelog) · assorted vegetable rolls: six for ¥2,100 (September 2026), ten also served (August 2026); rolls named in 2026: lettuce and pork (the most popular), Hakata green onion, okra with grated yam, daikon oden, mini tomato with bacon and basil, potato, avocado and cheese, enoki, yakisoba, eggplant, pork and shiso · Makinshai potato salad with a soft egg and tobiko ¥680, salt-seared bonito ¥1,100, "gourmet potatoes" under prosciutto and cheese sauce, salmon and ikura kamameshi ¥1,580 (September 2026); soy-marinated quail eggs; goma-kanpachi; mentaiko · sudachi sour ¥700; fruit sours (Tabelog) · courses with two hours of drinks: weekday Meguri course ¥4,000, Maki course ¥5,000 (duck with plum, sashimi, grilled shrimp, two vegetable rolls, rare salmon cutlet, August 2026), Kiwami course ¥5,500 (coupon prices on Tabelog, tax included)',
    website: null, gmaps: gm('博多巻きんしゃい 梅田茶屋町店'), menu_url: null,
    notes: "[Izakaya · Chayamachi, Hakata vegetable skewers in private rooms] A large izakaya on the fifth floor of a Chayamachi building near Hankyu Umeda, built around Hakata's vegetable-wrapped skewers: lettuce, green onion, okra with yam, mini tomato with basil or even yakisoba, rolled in thin pork and grilled over charcoal. Most guests take one of the many private rooms, from rooms for two with a farmhouse look to rooms for thirty-six, and order by QR code. Beyond the skewers, diners liked the potato salad under a soft egg and fish roe, the thick salt-seared bonito, potatoes buried in prosciutto and a salmon and ikura kamameshi (September 2026). Courses with two hours of drinks run ¥4,000–5,500. Reviews note noisy neighbours through the partitions and one billing mix-up that was put right.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: vegetable skewers and Hakata dishes, designer private rooms for 2 to 36, irori menu items; opened 10 March 2018. The Tabelog invoice number T5120001190055 is registered to 株式会社炉暖, Nishinari-ku (NTA invoice register, read 2026-11-01).', philosophy: null, specialty: 'Vegetable-wrapped skewers; Makinshai potato salad.',
      anecdotes: [
        { text: '"My favorite was the most popular, the Lettuce-wrapped Pork. The moment I took a bite, the crispness of the lettuce combined perfectly with the juiciness of the meat!" — September 2026.', source: R + 'B535258840/' },
        { text: '"The room has a unique design, reminiscent of a traditional Japanese dwelling, which adds a charming and fun touch." — August 2026, a private room for two.', source: R + 'B534130529/' },
        { text: '"The partitions created a private room-like atmosphere where we could relax, but unfortunately, the noise from the neighboring table was quite bothersome..." — October 2026.', source: R + 'B536680923/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 個室 野菜巻き串と焼き鳥 博多巻きんしゃい 梅田茶屋町店、居酒屋・創作料理・串焼き、大阪市北区茶屋町2-28 Central茶屋町 5F、阪急大阪梅田駅から徒歩3分、月〜金17:00〜24:00 (L.O.料理23:00、ドリンク23:30)、土・日12:00〜24:00、年中無休、予約状況で時間が変わることも、12月26日〜30日は祝前日扱い、電話は14時〜23時、2時間制、15分の遅れで自動キャンセル、カード・PayPay 可、電子マネー不可、80席、2〜36名の個室、座敷、掘りごたつ、禁煙、2018年3月10日オープン、野菜巻き串と博多の名物、フルーツサワー、いろり料理、飲み放題つきコース4,000円・5,000円・5,500円 (クーポン価格)。インボイス登録は株式会社炉暖 (西成区)。口コミ(2026年8月〜11月): 野菜巻き串6種2,100円、10種、レタス巻き、Hakata ねぎ、オクラととろろ、大根おでん、ミニトマトとベーコンとバジル、じゃがいも、アボカドチーズ、えのき、焼きそば、なす、しそ巻き、うずらの醤油漬け、巻きんしゃいポテトサラダ680円、カツオの塩たたき1,100円、グルメポテト、サーモンといくらの釜めし1,580円、すだちサワー700円、ごまカンパチ、明太子、QR コードやタブレットで注文、ほかの客の注文が会計に入っていた (すぐ返金)、隣の声が聞こえる。',
      confidence: 'medium', sources: [TB, R + 'B510113108/', R + 'B534130529/', R + 'B534324621/', R + 'B535173360/', R + 'B535258840/', R + 'B535500255/', R + 'B535827796/', R + 'B536344550/', R + 'B536680923/', R + 'B538489207/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code or tablet ordering in private rooms (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区茶屋町2-28 Central茶屋町 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区茶屋町2番28号 (go) 8m; no other record within 60 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535173360/', TB],
    price_note: 'À la carte prices from a September 2026 review; course prices from the Tabelog listing (coupon prices, tax included).', last_checked: TODAY, items: [
      it('', '', 'Assorted vegetable-wrapped skewers, six', '¥2,100', 'Skewers', 'ask', 'no', 'September 2026.', 'yasaimaki_6'),
      it('', '', 'Makinshai potato salad with soft egg and tobiko', '¥680', 'Small plates', 'ask', 'no', 'September 2026.', 'potesara'),
      it('', '', 'Salt-seared bonito', '¥1,100', 'Small plates', 'ask', 'no', 'September 2026.', 'katsuo_tataki'),
      it('', '', 'Salmon and ikura kamameshi', '¥1,580', 'Rice', 'ask', 'no', 'September 2026.', 'kamameshi'),
      it('', '', 'Maki course with two hours of drinks', '¥5,000', 'Courses', 'ask', 'no', 'Tabelog; August 2026.', 'maki_course'),
    ] }, {
    cuisine: '博多風の豚で巻いた野菜の串、焼き鳥、博多の料理を個室で (食べログ)・野菜巻きの盛り合わせ: 6種2,100円 (2026年9月)、10種も (2026年8月)。2026年の口コミの巻き: レタスと豚 (いちばん人気)、Hakata ねぎ、オクラととろろ、大根おでん、ミニトマトとベーコンとバジル、じゃがいも、アボカドとチーズ、えのき、焼きそば、なす、豚しそ・半熟卵ととびこの巻きんしゃいポテトサラダ680円、カツオの塩たたき1,100円、生ハムとチーズソースの「グルメポテト」、サーモンといくらの釜めし1,580円 (2026年9月)。うずらの醤油漬け、ごまカンパチ、明太子・すだちサワー700円、フルーツサワー (食べログ)・2時間飲み放題つきのコース: 平日の Meguri コース4,000円、Maki コース5,000円 (鴨の梅ソース、刺身、エビの串、野菜巻き2種、レアのサーモンカツ、2026年8月)、Kiwami コース5,500円 (食べログのクーポン価格、税込)',
    neighborhood: '茶屋町2-28、Central茶屋町の5階。阪急大阪梅田駅から徒歩3分、JR 大阪駅から6分',
    gf_detail: '要確認。グルテンの情報なし。豚で巻いて焼いた野菜の串、焼きそばの巻き、うずらの醤油漬け、サーモンのカツ、釜めし。グルテンフリーの説明はない。苦手なものを伝えたのに対応がはっきりしなかったという声も (2026年10月)。',
    vegan_detail: 'ヴィーガンではありません。看板の野菜は豚やベーコンで巻き、ほかは焼き鳥と魚介。',
    notes: '[居酒屋・茶屋町、個室の博多の野菜巻き串] 阪急梅田に近い茶屋町のビルの5階にある大きな居酒屋で、看板は博多の野菜巻き串: レタス、ねぎ、オクラととろろ、バジルのミニトマト、焼きそばまで、薄い豚で巻いて炭火で焼く。客の多くは個室で、古民家のような2名の部屋から36名の部屋まであり、注文は QR コード。串のほかに、半熟卵ととびこのポテトサラダ、厚いカツオの塩たたき、生ハムに埋もれたポテト、サーモンといくらの釜めしが好評 (2026年9月)。2時間飲み放題つきのコースは4,000〜5,500円。仕切りごしに隣の声が聞こえる、会計にほかの客の注文が入っていた (すぐ直してくれた) という声も。',
  });
}

// ================================================================ 鮨 邂逅
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27138362/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'osaka_sushi_kaiko_kitashinchi', name: '鮨 邂逅 (Sushi Kaiko)', category: 'OMNI',
    lat: 34.697861, lng: 135.497202, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. One omakase of starters and sushi; soy sauce, the usual sushi seasoning, generally contains wheat, and the starters include a dumpling in crab sauce and a shiso sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a single omakase of fish, shellfish, sea urchin and dashi.',
    hours_raw: 'Mon–Sat two seatings, from 18:00 and from 20:30; closed Sundays and holidays (Tabelog). Reservation only (Tabelog). Seasonal omakase ¥25,000, tax included (Tabelog; 2026 reviews). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog). Eight counter seats, whole-shop hire; non-smoking, ashtray in the corridor (Tabelog). Opened 30 September 2023 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-5-8, 2F of ピアースエイトビル — 1 min from Kitashinchi Stn',
    cuisine: 'Omakase of small nigiri on rice seasoned with a blend of three red vinegars, Hokkaido sea urchin and tuna from around Japan, with junmai sake and wine (Tabelog) · seasonal omakase, 12 nigiri with starters, ¥25,000 tax included (Tabelog) · an autumn 2026 course: sanma and eel to start, kinmedai with a shiso sauce and sea grapes, seared kinki with purple sea urchin, a lotus-root dumpling in crab sauce or a chilled soup of horse mackerel and cucumber, then shinko, new squid, kohada, kombu-cured sweet shrimp, clams from Mie, anago, tuna cuts, homemade ikura, a sea-urchin rice bowl, toro-taku with Ariake nori, an egg made with shrimp over two hours, and koji-pickled bettara-zuke (September–October 2026) · spring 2026: bamboo shoot, bonito with mustard, nodoguro with sea urchin',
    website: null, gmaps: gm('鮨 邂逅 北新地'), menu_url: null,
    notes: "[Sushi · Kitashinchi, an eight-seat red-vinegar counter] A quiet eight-seat sushi counter one minute from Kitashinchi Station, opened in 2023, whose logo was brushed by the calligrapher who wrote the label of the whisky Hibiki (Tabelog). One omakase at ¥25,000: a few seasonal starters such as kinmedai in a shiso sauce or seared kinki under purple sea urchin, then twelve small nigiri on firm rice seasoned only with salt and a blend of three red vinegars, one of them made for over 200 years, and a bowl of rice heaped with Hokkaido sea urchin. Diners mention the shinko in its short season, the shrimp-filled tamago cooked for two hours, and a reserved but kind chef (2026). Baseball players and sumo wrestlers are among the regulars, per two September 2026 reviews. Two seatings a night.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: only an omakase course, small sushi on rice made with a blend of three types of red vinegar, Hokkaido sea urchin and tuna from across Japan, junmai sake and wine; the logo by a calligrapher who also wrote the name of the whisky "Hibiki"; opened 30 September 2023. A September 2026 review adds that the traditional red vinegar has been made for over 200 years and the rice is seasoned only with salt and vinegar; reviews note Hanshin Tigers players, sumo wrestlers and other athletes among the guests (September and October 2026).', philosophy: 'Bringing people together over delicious sushi (Tabelog).', specialty: 'Red-vinegar nigiri; sea-urchin rice bowl.',
      anecdotes: [
        { text: '"The head chef, though somewhat reserved, was incredibly gentle and kind, a remarkable person full of knowledge." — October 2026.', source: R + 'B536875481/' },
        { text: '"The shrimp-filled egg was made over two hours✨ When I took a bite, it had a gentle sweetness reminiscent of dessert" — September 2026.', source: R + 'B535897060/' },
        { text: '"This restaurant is frequented by players from the Hanshin Tigers and sumo wrestlers, and I enjoyed the seasonal omakase course priced at JPY 25,000." — September 2026.', source: R + 'B535984073/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 邂逅、寿司、大阪市北区曽根崎新地1-5-8 ピアースエイトビル 2F、北新地駅から徒歩約1分、月〜土 18:00〜と20:30〜の2部制、日・祝休み、完全予約制、カード可、電子マネー・QR 不可、カウンター8席、貸切可、禁煙 (廊下に灰皿)、2023年9月30日オープン、おまかせのみ、3種の赤酢を合わせた小ぶりのシャリ、Hokkaido のウニと各地のマグロ、純米酒とワイン、ロゴは「響」の題字を書いた書家、季節のおまかせコース (握り12貫と前菜など) 25,000円 (税込)。口コミ(2026年4月〜10月): サンマとうなぎ、金目鯛としそのソースと海ぶどう、あぶったキンキと紫ウニ、レンコンのまんじゅうとカニのあん、アジときゅうりの冷たいお椀、新イカ、新子、コハダ、昆布じめの甘エビ、Mie のハマグリ、アナゴ、マグロ、自家製いくら、ウニ丼、Ariake の海苔のトロたく、2時間かけたエビ入りの玉子、べったら漬け、春のたけのことカツオ、のどぐろとウニ、200年以上続く赤酢、塩と酢だけのシャリ、阪神タイガースの選手や力士も来る、物静かでやさしい大将。',
      confidence: 'medium', sources: [TB, R + 'B503843631/', R + 'B504184167/', R + 'B510108113/', R + 'B523612900/', R + 'B535865464/', R + 'B535897060/', R + 'B535917113/', R + 'B535984073/', R + 'B536617123/', R + 'B536875481/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase at an eight-seat counter, reservation only (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区曽根崎新地1-5-8 ピアースエイトビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目5番8号 (go) 21m. Same building as おばんざい KURUMI (osaka_obanzai_kurumi_kitashinchi, this batch, 3F), whose Tabelog point is about 1 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B503843631/'],
    price_note: 'Course price from the Tabelog listing (tax included); 2026 reviews match ¥25,000.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase: 12 nigiri with starters', '¥25,000', 'Course', 'ask', 'no', 'Tabelog; 2026 reviews.', 'omakase'),
      it('', '', 'Sea-urchin rice bowl (in the course)', '', 'Course', 'ask', 'no', 'September–October 2026.', 'uni_don'),
    ] }, {
    cuisine: '3種の赤酢を合わせたシャリの小ぶりの握り、Hokkaido のウニと各地のマグロ、純米酒とワインのおまかせ (食べログ)・季節のおまかせ、握り12貫と前菜、25,000円 (税込、食べログ)・2026年秋のコース: サンマとうなぎ、しそのソースと海ぶどうの金目鯛、あぶったキンキと紫ウニ、カニのあんのレンコンのまんじゅうか、アジときゅうりの冷たいお椀、それから新子、新イカ、コハダ、昆布じめの甘エビ、Mie のハマグリ、アナゴ、マグロ、自家製いくら、ウニ丼、Ariake の海苔のトロたく、2時間かけたエビ入りの玉子、麹で漬けたべったら漬け (2026年9月〜10月)・2026年春: たけのこ、からしのカツオ、のどぐろとウニ',
    neighborhood: '曽根崎新地1-5-8、ピアースエイトビルの2階。北新地駅から徒歩1分',
    gf_detail: '予約時に要確認。グルテンの情報なし。前菜と寿司のおまかせひとつ。寿司にふつう使う醤油はたいてい小麦を含み、前菜にはカニのあんのまんじゅうやしそのソースもある。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、ウニ、だしのおまかせひとつ。',
    notes: '[寿司・北新地、8席の赤酢のカウンター] 北新地駅から1分、2023年に開いた静かな8席の寿司のカウンターで、ロゴはウイスキー「響」の題字を書いた書家によるもの (食べログ)。おまかせは25,000円のひとつだけ: 金目鯛のしそソースや紫ウニをのせたあぶりのキンキなど季節の前菜のあと、塩と3種の赤酢 (ひとつは200年以上つくられてきたもの) だけで合わせたかためのシャリの小ぶりの握りが12貫、そして Hokkaido のウニを山盛りにしたごはん。短い季節の新子、2時間かけたエビ入りの玉子、物静かでやさしい大将の話が口コミに出てくる (2026年)。2026年9月の口コミふたつによると、野球選手や力士も通う。夜は2部制。',
  });
}

// ================================================================ おばんざい KURUMI
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270103/27132546/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '00:00']);
  put({
    id: 'osaka_obanzai_kurumi_kitashinchi', name: 'おばんざい KURUMI (Obanzai KURUMI)', category: 'OMNI',
    lat: 34.697849, lng: 135.497198, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Over twenty obanzai a day, with soy-marinated, fried and Western-style dishes (ravioli, gratin, shumai, hamburg); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: obanzai of fish, meat and dashi; some vegetable dishes appear daily but are not described.',
    hours_raw: 'Mon–Fri 17:30–24:00 (last order food 23:00, drinks 23:30); closed Saturdays, Sundays and holidays (Tabelog). Reservations accepted; very popular, full 18:00–20:00, often walk-in seats later in the evening (October 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 15 seats: 9 at the counter and a semi-private room for 6; smoking allowed (Tabelog). Takeaway: a five-kind obanzai bento ¥1,300, same-day orders and delivery (Tabelog). Opened 24 March 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-5-8, 3F of ピアースエイトビル — 5 min from Kitashinchi Stn',
    cuisine: 'Daily obanzai of seasonal ingredients, light courses and à la carte, with sake, domestic and overseas whisky and wine (Tabelog) · KURUMI course of grilled fish, six obanzai and a choice of meat dish ¥6,050 (Tabelog, tax included) · recommended: potato salad, soy-marinated red shrimp (Tabelog) · dishes in 2026 reviews: young sweetfish nanban, "adult" potato salad, small wagyu hamburg, yodare chicken, spicy glass noodles, homemade beef jerky (February); fried young burdock, mozzarella ravioli (March); curry to finish (May); conger-eel nanban (July); braised beef tendon, goya champuru, tsukune simmered with winter melon, saikyo-grilled black cod (July); homemade shumai, seafood gratin (August–October); simmered quail eggs, marinated conger eel (October) · about seven or eight sakes, e.g. Handorikawa, Toyo Bijin, Momo no Shizuku (August and October 2026) · obanzai bento of five kinds ¥1,300 (Tabelog)',
    website: null, gmaps: gm('おばんざい KURUMI 北新地'), menu_url: null,
    notes: "[Obanzai · Kitashinchi, a counter of small seasonal dishes] A warm, wood-lined counter on the third floor of a Kitashinchi building, open on weekday nights since 2022, where more than twenty obanzai a day sit on the counter and come out in small bowls, so you can try many. Expect Japanese and Western small plates side by side: young sweetfish nanban, potato salad, simmered quail eggs, homemade shumai, a small wagyu hamburg, mozzarella ravioli, seafood gratin and a curry to finish, with a short list of good sakes. A young owner and a small team run it, and the owner's hospitality is why one regular has been 36 times (October 2026). It is full from 18:00 to 20:00, so book or come late; one October 2026 diner found the bill about 20% higher than expected. Smoking is allowed; closed weekends.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed) and staff'], origin: null, background: 'Per the shop-maintained Tabelog listing: daily seasonal obanzai, light courses and à la carte, recommended potato salad and soy-marinated red shrimp, a range of whiskies and wines, a cozy wooden hideaway; opened 24 March 2022. A July 2026 diner saw "the young owner and a young female assistant" running it; an October 2026 diner, two women; a regular praises the owner\'s hospitality (October 2026, a 36th visit).', philosophy: null, specialty: 'Daily obanzai; homemade shumai; potato salad.',
      anecdotes: [
        { text: '"When you go, it\'s always packed, especially from 6 PM to 8 PM. However, the later hours are a good time to aim for" — October 2026, a 36th visit.', source: R + 'B500155994/' },
        { text: '"With over 20 types of obanzai available, we decided to try different dishes from last time. The homemade beef jerky was so delicious that we ordered it again." — February 2026, a business trip.', source: R + 'B519848689/' },
        { text: '"These hot, juicy dumplings had a great texture!" — October 2026, the homemade shumai.', source: R + 'B536978462/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): おばんざい KURUMI、居酒屋・日本料理、大阪市北区曽根崎新地1-5-8 ピアースエイトビル 3F、北新地駅から徒歩5分、月〜金17:30〜24:00 (L.O.料理23:00、ドリンク23:30)、土・日・祝休み、予約可、カード可、電子マネー・QR 不可、15席 (カウンター9、半個室6)、喫煙可、テイクアウト、2022年3月24日オープン、季節の食材の日替わりおばんざい、軽めのコースとアラカルト、ポテトサラダと赤エビの醤油漬け、国内外のウイスキーとワイン、木のぬくもりの隠れ家、焼き魚と6種のおばんざいと選べる肉料理の KURUMI コース6,050円、おばんざい5種の弁当1,300円 (当日注文・配達)。口コミ(2026年2月〜10月): 20種以上のおばんざい、小鮎の南蛮漬け、大人のポテトサラダ、和牛の小さなハンバーグ、よだれ鶏、ピリ辛春雨、自家製ビーフジャーキー、新ごぼうの素揚げ、モッツァレラのラビオリ、締めのカレー、ハモの南蛮、牛すじ煮込み、ゴーヤチャンプルー、冬瓜とつくねの煮物、銀ダラの Saikyo 焼き、自家製シュウマイ、シーフードグラタン、うずらの煮卵、ハモのマリネ、日本酒7〜8種、18時〜20時は満席、遅い時間はねらい目、若い店主と女性のスタッフ、36回通う常連、思ったより2割ほど高いという声。',
      confidence: 'medium', sources: [TB, R + 'B457936167/', R + 'B497180246/', R + 'B500155994/', R + 'B519848689/', R + 'B528966795/', R + 'B529181381/', R + 'B533023695/', R + 'B534259668/', R + 'B536978462/', R + 'B537363143/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter with the day\'s obanzai on display; book ahead for 18:00–20:00 (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区曽根崎新地1-5-8 ピアースエイトビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目5番8号 (go) 20m. Same building as 鮨 邂逅 (osaka_sushi_kaiko_kitashinchi, this batch, 2F), whose Tabelog point is about 1 m away, so both pins are block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'Course and bento prices from the Tabelog listing (tax included); obanzai prices not given in the sources read.', last_checked: TODAY, items: [
      it('', '', 'KURUMI course: grilled fish, six obanzai, a choice of meat dish', '¥6,050', 'Course', 'ask', 'no', 'Tabelog.', 'kurumi_course'),
      it('', '', 'Obanzai bento, five kinds (takeaway)', '¥1,300', 'Takeaway', 'ask', 'no', 'Tabelog.', 'obanzai_bento'),
      it('', '', 'Homemade shumai', '', 'Obanzai', 'no', 'no', 'August and October 2026.', 'shumai'),
      it('', '', 'Potato salad', '', 'Obanzai', 'ask', 'ask', 'Tabelog; July 2026.', 'potesara'),
    ] }, {
    cuisine: '季節の食材の日替わりのおばんざい、軽いコースとアラカルト、日本酒、国内外のウイスキー、ワイン (食べログ)・焼き魚、おばんざい6種、選べる肉料理の KURUMI コース6,050円 (食べログ、税込)・おすすめはポテトサラダと赤エビの醤油漬け (食べログ)・2026年の口コミの料理: 小鮎の南蛮、大人のポテトサラダ、小さな和牛ハンバーグ、よだれ鶏、ピリ辛春雨、自家製ビーフジャーキー (2月)、新ごぼうの素揚げ、モッツァレラのラビオリ (3月)、締めのカレー (5月)、ハモの南蛮 (7月)、牛すじ煮込み、ゴーヤチャンプルー、冬瓜とつくねの煮物、銀ダラの Saikyo 焼き (7月)、自家製シュウマイ、シーフードグラタン (8月〜10月)、うずらの煮卵、ハモのマリネ (10月)・日本酒は7〜8種、たとえば Handorikawa、Toyo Bijin、Momo no Shizuku (2026年8月・10月)・おばんざい5種の弁当1,300円 (食べログ)',
    neighborhood: '曽根崎新地1-5-8、ピアースエイトビルの3階。北新地駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。毎日20種以上のおばんざいで、醤油漬け、揚げ物、ラビオリ、グラタン、シュウマイ、ハンバーグなど洋風の料理もある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚、肉、だしのおばんざい。野菜の料理も毎日あるが、説明はない。',
    notes: '[おばんざい・北新地、季節の小鉢のカウンター] 北新地のビルの3階、木のぬくもりのあるカウンターで、2022年から平日の夜だけ。毎日20種以上のおばんざいがカウンターに並び、小鉢で出てくるので、いろいろ試せる。和と洋の小皿が並ぶ: 小鮎の南蛮、ポテトサラダ、うずらの煮卵、自家製シュウマイ、小さな和牛ハンバーグ、モッツァレラのラビオリ、シーフードグラタン、締めのカレー、それに少数精鋭の日本酒。若い店主と少人数のスタッフで切り盛りしていて、そのもてなしで36回通う常連も (2026年10月)。18時〜20時は満席なので、予約するか遅めに。思ったより2割ほど高かったという声も (2026年10月)。喫煙可、土日休み。',
  });
}

// ================================================================ 北新地 〆。
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27136768/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '01:00']); const S = day(['17:00', '23:00']);
  put({
    id: 'osaka_kitashinchi_shime', name: '北新地 〆。 (Kitashinchi Shime.)', category: 'OMNI',
    lat: 34.697762, lng: 135.495798, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi, fried oysters, menchi katsu, soba and clam ramen to finish; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; the soba and ramen are served in dashi or clam broth.',
    hours_raw: 'Mon–Fri 17:00–1:00; Sat 17:00–23:00, reservation only; closed Sundays and holidays (Tabelog). Reservations accepted; private rooms in principle for four or more (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards and PayPay (Tabelog). 20 seats: 6 at the counter, 8 at tables, a private room of 6; heated tobacco in a designated area, cigarettes outside; e-cigarettes allowed in private rooms (Tabelog; March 2026). Opened 1 July 2023 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '曾根崎新地1-3-19, 5F-E of 北新地ビルディング — a few seconds from underground-mall exit C60 ("Doichika" in a July 2026 review); 3 min from Nishi-Umeda Stn, 5 min from Kitashinchi Stn',
    cuisine: 'Seasonal seafood and sake, with soba or a rich clam ramen to finish (Tabelog) · July 2026 à la carte (tax included): sashimi assortment for one ¥1,800 (e.g. Nagasaki sea snail, Kagoshima tuna and amberjack, Miyagi salmon, Kagawa scallop), Goto Islands oysters ¥900, firefly squid in soy ¥700, clams steamed in sake ¥1,200, dried chicken wings (2) ¥600, Hiroshima fried oyster ¥300, sakura menchi katsu ¥600, mochi tofu ¥400, potato salad ¥800, seared duck ¥1,200, dashimaki ¥800, mori soba ¥1,200 · homemade tofu, uzaku, mackerel in miso (April 2026) · courses with soba or ramen to finish: 6 dishes ¥8,000, 7 dishes with horse sashimi ¥10,000; Nagasaki kue hotpot course ¥13,000, the kue from Goto Islands through a sister restaurant in Fukuoka; each with 120 minutes of drinks for ¥2,000 more, sake ¥2,000 more (Tabelog, tax included) · sake, wine and fruit liqueurs from around Japan (Tabelog)',
    website: 'https://www.instagram.com/shime.kitashinchi/', gmaps: gm('北新地 〆。'), menu_url: null,
    notes: "[Izakaya · Kitashinchi, seafood and a noodle to finish] A calm fifth-floor izakaya in the Kitashinchi Building, a few steps from an underground-mall exit, named for the shime, the noodle that ends a night: soba or a rich clam ramen. Before that come generous sashimi platters served one per person (Nagasaki sea snail, Kagoshima tuna and amberjack, a seared Kagawa scallop), big Goto Islands oysters, firefly squid, homemade tofu and dashimaki, at prices diners call fair for Kitashinchi (2025–26). There is also a kue hotpot course with fish from the Goto Islands. Private rooms suit business dinners, and e-cigarettes are allowed there. Open until 1:00 on weekdays; Saturday by booking only.",
    chef_bio: { chef_name: null, roles: ['Chef and staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: seasonal seafood and selected sake, finishing with soba or ramen, "the chef\'s special dishes"; courses include Nagasaki kue hotpot with fish from the Goto Islands "delivered directly from our sister restaurant in Fukuoka"; opened 1 July 2023. A July 2026 diner mentions the shop\'s duck mascot.', philosophy: null, specialty: 'Sashimi platter; clam ramen or soba to finish.',
      anecdotes: [
        { text: '"The assorted sashimi platter (JPY 1,800, tax included) was served individually, making it easy to eat, which was a thoughtful touch." — July 2026.', source: R + 'B531359583/' },
        { text: '"Although Kitashinchi has a reputation for being upscale, I was pleasantly surprised by how affordable this place was." — December 2025.', source: R + 'B519361310/' },
        { text: '"The soba served at the end was also very tasty, further enhancing my satisfaction with the meal." — March 2026.', source: R + 'B523792695/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 北新地 〆。、居酒屋・海鮮・ラーメン、大阪市北区曾根崎新地1-3-19 北新地ビルディング 5F-E、JR 北新地駅から徒歩5分、西梅田駅から3分、月〜金17:00〜翌1:00、土17:00〜23:00 (予約のみ)、日・祝休み、予約可、個室は原則4名から、カード・電子マネー・PayPay 可、20席 (カウンター6、テーブル8、個室6)、加熱式たばこは喫煙スペース、紙たばこは外、2023年7月1日オープン、旬の魚介と日本酒、締めのそばかラーメン、アサリの濃厚なラーメン、全国の日本酒・ワイン・果実酒、6品のコース8,000円、馬刺しつき7品10,000円、Nagasaki のクエ鍋コース13,000円 (Fukuoka の姉妹店から Goto のクエ)、120分飲み放題は2,000円追加。口コミ(2025年12月〜2026年9月): 刺身の盛り合わせ1人前1,800円 (Nagasaki のつぶ貝、Kagoshima のマグロとカンパチ、Miyagi のサーモン、Kagawa のホタテ)、Goto の生ガキ900円、ホタルイカの醤油漬け700円、アサリの酒蒸し1,200円、干した手羽600円、Hiroshima のカキフライ300円、桜のメンチかつ600円、もち豆腐400円、ポテトサラダ800円、鴨のたたき1,200円、だし巻き800円、もりそば1,200円、自家製豆腐、うざく、サバのみそ煮、個室では電子たばこ可、アヒルのマスコット、北新地にしては手頃。',
      confidence: 'medium', sources: [TB, R + 'B488736092/', R + 'B518967253/', R + 'B519361310/', R + 'B523792695/', R + 'B531019444/', R + 'B531359583/', R + 'B531423408/', R + 'B531861704/', R + 'B533123041/', R + 'B535531273/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter, tables and private rooms; Saturday by reservation (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区曾根崎新地1-3-19 北新地ビルディング 5F-E',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目3番19号 (go) 11m. Same building as osaka_tempura_kisaka_kitashinchi (address_ja "大阪府大阪市北区曽根崎新地1-3-19 北新地ビルディング 7F"), whose pin is about 2 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B531423408/', R + 'B531861704/', TB],
    price_note: 'À la carte prices from July 2026 reviews (tax included); courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Sashimi assortment, one person', '¥1,800', 'Seafood', 'ask', 'no', 'July 2026.', 'sashimi'),
      it('', '', 'Fresh oyster (Goto Islands)', '¥900', 'Seafood', 'ask', 'no', 'July 2026.', 'nama_kaki'),
      it('', '', 'Dashimaki omelette', '¥800', 'Small plates', 'ask', 'no', 'July 2026.', 'dashimaki'),
      it('', '', 'Mori soba to finish', '¥1,200', 'Shime', 'ask', 'no', 'July 2026.', 'mori_soba'),
      it('', '', 'Clam ramen to finish', '', 'Shime', 'no', 'no', 'Tabelog.', 'asari_ramen'),
      it('', '', 'Kitashinchi course, 6 dishes, soba or ramen to finish', '¥8,000', 'Courses', 'ask', 'no', 'Tabelog.', 'course_6'),
    ] }, {
    cuisine: '季節の魚介と日本酒、締めはそばか濃厚なアサリのラーメン (食べログ)・2026年7月のアラカルト (税込): 1人前の刺身の盛り合わせ1,800円 (Nagasaki のつぶ貝、Kagoshima のマグロとカンパチ、Miyagi のサーモン、Kagawa のホタテなど)、Goto の生ガキ900円、ホタルイカの醤油漬け700円、アサリの酒蒸し1,200円、干した手羽 (2本) 600円、Hiroshima のカキフライ300円、桜のメンチかつ600円、もち豆腐400円、ポテトサラダ800円、鴨のたたき1,200円、だし巻き800円、もりそば1,200円・自家製豆腐、うざく、サバのみそ煮 (2026年4月)・締めにそばかラーメンのつくコース: 6品8,000円、馬刺しつき7品10,000円、Fukuoka の姉妹店を通した Goto のクエの Nagasaki のクエ鍋コース13,000円。どれも120分飲み放題は2,000円、日本酒つきはさらに2,000円 (食べログ、税込)・全国の日本酒、ワイン、果実酒 (食べログ)',
    neighborhood: '曾根崎新地1-3-19、北新地ビルディングの5F-E。地下街の C60 出口から数秒、西梅田駅から3分、北新地駅から5分',
    gf_detail: '要確認。グルテンの情報なし。刺身、カキフライ、メンチかつ、締めのそばとアサリのラーメン。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介の居酒屋で、そばやラーメンはだしやアサリのスープ。',
    notes: '[居酒屋・北新地、魚介と締めの麺] 北新地ビルディングの5階、地下街の出口からすぐの落ち着いた居酒屋で、店名のとおり夜の締めの麺、そばか濃厚なアサリのラーメンが看板。その前に、1人前ずつ出てくる刺身の盛り合わせ (Nagasaki のつぶ貝、Kagoshima のマグロとカンパチ、あぶった Kagawa のホタテ)、大きな Goto の生ガキ、ホタルイカ、自家製豆腐、だし巻きを。北新地にしては手頃だという声 (2025〜26年)。Goto のクエを使った鍋のコースも。個室は接待向きで、電子たばこ可。平日は1時まで、土曜は予約のみ。',
  });
}

save();
