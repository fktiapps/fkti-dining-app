// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 5 (lane: Tabelog id mod 4 = 1).
//   + すし処 錦 Sushi Dokoro Nishiki (Sennichimae sushi-ya of some 40 years: counter, tatami rooms, tora-fugu tecchiri in winter)
//   + 月島屋 Tsukishima Ya (Sennichimae yakiniku of A5 black wagyu; weekend-only lunch with a queue)
//   + 炉端ともつ煮 炎 難波店 Robata Tomotsuni Homura (robata, red-miso motsuni and clay-pot rice by Namba Stn; opened March 2026)
//   + とんかつ しゃぶしゃぶ 新 Tonkatsu Shabushabu Arata (fillet katsu three ways at lunch, TOKYO X pork shabu at night; sister of New Babe)
//   Skipped: しゃぶしゃぶ すき焼き かに食べ放題 和牛と豚...そしてカニ 心斎橋駅前店 27150753 — chain: one of the buffet brands of
//   株式会社ジョージーズ, whose company profile lists 和牛ざんまい, 和牛とカニ, 和牛と豚, 和牛と豚…そしてカニ, 和牛とマグロ,
//   すき焼き串カツはるな and しゃぶしゃぶ豚々 (https://en-gage.net/george_saiyo/, read 2026-11-01); the Tabelog listing links
//   georgees.jp.
//   Chain check of the four kept:
//   - Nishiki: one shop (official site).
//   - Tsukishimaya: one shop (official site).
//   - Homura: the Tabelog name says 難波店, which suggests other shops, but no source I could open names another; a web search
//     hinted at a Tokyo shop of the same name that I could not confirm. Kept; flagged to the integrator.
//   - Arata: a sister restaurant of とんかつ ニューベイブ (four 2026 reviews; its Tabelog text calls it a sister of "New Babe"); a
//     New Babe branch is in data as osaka_new_babe_namba (ニューベイブ 難波店, address_ja "大阪府大阪市浪速区難波中1-14-12").
//     A different brand and format, kept on the Alcyon/Kitan precedent; flagged.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27150753', 'Chain: 和牛と豚...そしてカニ 心斎橋駅前店 is one of seven buffet brands run by 株式会社ジョージーズ (company profile on en-gage.net: 和牛ざんまい, 和牛とカニ, 和牛と豚, 和牛と豚…そしてカニ, 和牛とマグロ and others).');

// ================================================================ すし処 錦
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001245/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sushidokoro-nishiki.com/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_sushidokoro_nishiki_sennichimae', name: 'すし処 錦 (Sushi Dokoro Nishiki)', category: 'OMNI',
    lat: 34.668023, lng: 135.503961, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi and sashimi come with soy sauce, the set courses include tempura and the fugu course a fugu kara-age; plain nigiri or sashimi without soy sauce may be possible, but nothing is stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood restaurant; nothing is described as vegan.',
    hours_raw: 'Mon–Sat 17:00–23:00 (counter last order 22:30; tatami rooms 17:30–22:30, last order 22:00); closed Sunday and Monday holidays (official site; Tabelog). Courses and hot pots by reservation, two days ahead; tatami rooms booked two days ahead, for 3 or more; online bookings may be followed by a phone call; a booking is cancelled if you are 20 minutes late without calling, and same-day cancellations are charged (Tabelog). Per Tabelog, reservations for guests from overseas are taken only through a hotel. 5% service charge in the tatami rooms (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Seats: a 12-seat L-shaped counter (official site; Tabelog says 10) and 18–20 tatami seats with sunken tables upstairs, private rooms for 2–20; non-smoking; children only in the tatami rooms; takeout (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-7-6, a minute east of Hozenji (Tabelog) — 3 min from Nipponbashi Stn, 6 min from Namba Stn',
    cuisine: 'Sushi and fish dishes from fish bought each morning at the Osaka central wholesale market (official site) · nigiri per piece, tax included (official site): from ¥550 (kohada, house tamagoyaki, saba, hamachi, ebi, ikura, maguro, kanpachi, ken-ika, hirame, akagai, scallop, tsubugai), from ¥770 (anago, uni, fugu, unagi), from ¥1,980 (toro, abalone, kuruma ebi); thin rolls from ¥2,200, toro rolls ¥4,180 · omakase kaiseki, booked two days ahead: ¥7,535 (three appetizers, sashimi, grilled fish, tempura, chawanmushi, vinegared dish, five nigiri, red miso soup, fruit) and ¥8,800 (with dobin-mushi), from ¥11,000 on request · winter tecchiri courses of live tora-fugu, three-year fish of about 1.8 kg, ¥13,200 and ¥17,200; extra grilled shirako ¥2,750, fugu kara-age ¥3,850, tessa ¥2,530 (official site) · saba bo-zushi with gyuhi kombu, a take-home favourite; rice a blend of old and new Noto Koshihikari (official site) · from reviews: hamo sashimi with plum, salad roll, blue crab, grilled kinki, young ayu tempura (June 2026); simmered sea-bream head, dobin-mushi, grilled eel (June 2026); toro-taku to finish (February 2026) · sake from around Japan, several from Ehime; a house shochu (official site; June 2026)',
    website: SITE, gmaps: gm('すし処 錦 千日前'), menu_url: SITE + 'oshinagaki/',
    notes: "[Sushi · Sennichimae, an old-school Minami sushi-ya where you order what you like] A long-established sushi restaurant of some 40 years (a December 2025 diner) on a lively Sennichimae street east of Hozenji, with an L-shaped counter downstairs and tatami rooms above. Fish come from the central wholesale market each morning, and the draw is ordering à la carte from the glass case rather than a fixed, all-start-together course, which diners in 2025–2026 say is now rare: sashimi, grilled kinki, simmered sea-bream head, dobin-mushi, then nigiri from ¥550 a piece. Winter brings live tora-fugu tecchiri courses (¥13,200 and up), and the saba bo-zushi with gyuhi kombu is the house souvenir. A regular of more than 30 years praises the head chef's warmth and the talkative owner; one June 2026 diner found the ¥7,535 course ordinary for the price. Many of the floor staff are from abroad and speak good Japanese (June and September 2026). Per Tabelog, overseas visitors can book only through a hotel.",
    chef_bio: { chef_name: null, roles: ['Head chef and owner, both unnamed in every source read'], origin: null, background: 'A Minami sushi restaurant of about 40 years (December 2025 review) that a regular has visited for more than 30 years (July 2026). Per the official site, the fish are chosen each morning at the Osaka central wholesale market (the head chef buys at the eastern market for the kaiseki), fugu are three-year fish of about 1.8 kg, and the sushi rice is a house blend of old and new Noto Koshihikari; drinking water and the rice water are 財宝 spring water from Kagoshima. Diners describe a warm, cheerful head chef and a talkative, attentive owner (2025–2026), and floor staff from abroad with excellent Japanese (June and September 2026). One June 2026 diner noted several Ehime sakes and guessed the owner might be from Ehime.', philosophy: '"The same topping may not be there tomorrow": each day\'s best seafood, cooked to bring out its flavour (official site).', specialty: 'À la carte sushi and fish dishes; tora-fugu tecchiri; saba bo-zushi.',
      anecdotes: [
        { text: '"In today\'s world of sushi restaurants that all offer set courses with a simultaneous start, this place stands out as a rare gem where you can enjoy your favorite items while looking at the traditional display case." — September 2026.', source: R + 'B536703575/' },
        { text: '"I\'ve been coming here for over 30 years since my first visit… The warm and cheerful character of the head chef, along with the talkative yet attentive owner, creates a wonderful atmosphere." — July 2026.', source: R + 'B531770484/' },
        { text: '"When you think of summer in Osaka, you think of hamo (pike eel). The hamo was thick and fluffy, and paired perfectly with plum sauce." — June 2026, on a 41st visit.', source: R + 'B111813550/' },
      ],
      japanese_sources_summary: '公式サイト: すし処 錦、毎朝大阪中央卸売市場でその日一番の新鮮な魚を仕入れ、お寿司、一品料理、鍋料理、会席料理、お座敷で鍋宴会 (20名まで)、個室、宴会は前日までに予約、おまかせ宴会コース7,535円 (税込)〜、錦の鍋宴会コース13,200円〜 (河豚は3年物、1.8kg前後)。おしながき (税込): 寿司ネタ1貫550円〜 (こはだ、特製玉子焼き、さば、はまち、えび、いくら、まぐろ、かんぱち、剣いか、ひらめ、赤貝、貝柱、つぶ貝)、770円〜 (穴子、うに、ふぐ、うなぎ)、1,980円〜 (とろ、あわび、車えび)、細巻2,200円〜、とろ鉄火巻・ねぎとろ巻・たくとろ巻4,180円、活とらふぐのてっちりコース13,200円・17,200円 (二日前までの予約)、焼白子2,750円、ふぐ唐揚3,850円、てっさ2,530円、料理長おまかせ会席7,535円・8,800円 (11,000円〜も)、お座敷はサービス料5%、日本酒は久保田 萬寿、呉春、愛媛の吹毛剣、五億年など。こだわり: さば棒寿司は求肥昆布で、シャリは能登産コシヒカリの古米・新米のブレンド、和らぎの水と炊飯に鹿児島・財宝温泉水、当店ブランドの焼酎。店舗案内: カウンター12席、座敷20席 (掘りごたつ、3〜20名)、個室。千日前1丁目7-6、17:00〜23:00 (お座敷は22:00ラストオーダー)、日曜日・月曜日の祝日休み。食べログ (店舗会員): Hozenji から東へ1分、日本橋駅から3分、28席 (カウンター10、座敷18)、20分連絡がなければキャンセル、当日キャンセルは料金、海外からの客の予約はホテル経由のみ、カード可、禁煙、子どもは座敷のみ。口コミ(2025年9月〜2026年9月): 創業40年、L字のカウンターと2階の座敷、ネタケースを見て好きなものを、刺身盛り合わせ、ふぐ刺し、白子の醤油焼き、ハマチのカマ、活甘海老、土瓶蒸し、鯛のあら炊き、鰻の蒲焼、toro-taku、鱧と梅、サラダ巻き、渡り蟹、きんきの塩焼き、稚鮎の天ぷら、30年以上通う常連、明るい料理長と話好きの店主、海外から来たスタッフ、7,535円のコースはふつうだったという声。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'oshinagaki/', SITE + 'kodawari/', SITE + 'location/', R + 'B111813550/', R + 'B323883316/', R + 'B513420990/', R + 'B523851665/', R + 'B524149480/', R + 'B529398073/', R + 'B530614346/', R + 'B530625018/', R + 'B531770484/', R + 'B536703575/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order à la carte from the fish case at the counter; per Tabelog, overseas guests book through a hotel (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-7-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and shop-maintained (corporate-member) Tabelog listing (summer-holiday notice for August 2026); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目7番6号 (go) 1m. Nearest records are at other house numbers: 創作鉄板 銀 (osaka_sosaku_teppan_gin_sennichimae, address_ja "大阪府大阪市中央区千日前1-7-7 Leesビル 2F") about 23 m and 相合餅 (osaka_aioi_mochi_sennichimae, "…千日前1-7-3") about 24 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'oshinagaki/'],
    price_note: 'Prices from the official menu page (tax included; undated, read November 2026).', last_checked: TODAY, items: [
      it('寿司ネタ 1貫', '', 'Nigiri, per piece (kohada, tamagoyaki, saba, hamachi, maguro and more)', '¥550', 'Sushi', 'ask', 'no', 'Official site; from ¥550.', 'nigiri_550'),
      it('とろ・あわび・車えび 1貫', '', 'Nigiri of toro, abalone or kuruma ebi, per piece', '¥1,980', 'Sushi', 'ask', 'no', 'Official site; from ¥1,980.', 'nigiri_1980'),
      it('おまかせ会席', '', 'Omakase kaiseki (appetizers, sashimi, grilled fish, tempura, chawanmushi, 5 nigiri), book 2 days ahead', '¥7,535', 'Course', 'no', 'no', 'Official site; tempura.', 'kaiseki_7535'),
      it('活とらふぐ てっちりコース', '', 'Live tora-fugu tecchiri course (yubiki, fugu sashimi, hot pot, zosui, fruit)', '¥13,200', 'Hot pot', 'ask', 'no', 'Official site; ¥17,200 with grilled shirako and fugu kara-age.', 'tecchiri'),
      it('さば棒寿司', '', 'Saba bo-zushi with gyuhi kombu', '', 'Sushi', 'ask', 'no', 'Official site; recommended to take home.', 'saba_bozushi'),
    ] }, {
    cuisine: '毎朝大阪中央卸売市場で仕入れる魚の寿司と一品料理 (公式サイト)・寿司ネタ1貫 (税込、公式サイト): 550円〜 (こはだ、特製玉子焼き、さば、はまち、えび、いくら、まぐろ、かんぱち、剣いか、ひらめ、赤貝、貝柱、つぶ貝)、770円〜 (穴子、うに、ふぐ、うなぎ)、1,980円〜 (とろ、あわび、車えび)、細巻2,200円〜、とろ鉄火巻・ねぎとろ巻・たくとろ巻4,180円・二日前までの予約のおまかせ会席: 7,535円 (前菜3種盛、お刺身盛り合わせ、焼魚、天麩羅盛り合わせ、茶碗蒸し、酢の物、おまかせにぎり5貫、赤だし、フルーツ)、8,800円 (土瓶蒸し付き)、11,000円〜も・冬は活とらふぐのてっちりコース13,200円・17,200円 (3年物、1.8kg前後の河豚)、別注で焼白子2,750円、ふぐ唐揚3,850円、てっさ2,530円 (公式サイト)・求肥昆布で仕上げるさば棒寿司はお土産に、シャリは能登産コシヒカリの古米と新米のブレンド (公式サイト)・口コミから: 鱧の sashimi と梅、サラダ巻き、渡り蟹、きんきの焼き物、稚鮎の天ぷら (2026年6月)、鯛のあら炊き、土瓶蒸し、鰻 (2026年6月)、締めの toro-taku (2026年2月)・全国の日本酒、愛媛の酒もいくつか、店のブランドの焼酎 (公式サイト、2026年6月)',
    neighborhood: '千日前1-7-6。日本橋駅から徒歩3分、なんば駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。寿司と刺身は醤油で食べ、会席には天麩羅、ふぐのコースにはふぐ唐揚も。醤油なしのにぎりや刺身はできるかもしれないが、説明はない。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚介の店で、ヴィーガンの説明はない。',
    notes: '[寿司・千日前、好きなものを頼めるミナミの昔ながらの寿司屋] 創業40年ほど (2025年12月の口コミ) の老舗の寿司屋で、法善寺の東のにぎやかな千日前の通りにあり、1階はL字のカウンター、2階は座敷。魚は毎朝中央卸売市場から。決まったコースを一斉スタートで、ではなくネタケースを見てアラカルトで頼めるのが魅力で、2025〜2026年の口コミではいまは珍しいという声: 刺身、きんきの焼き物、鯛のあら炊き、土瓶蒸し、そしてにぎりは1貫550円から。冬は活とらふぐのてっちりコース (13,200円〜)、求肥昆布のさば棒寿司はお土産の名物。30年以上通う常連は料理長の明るさと話好きの店主をほめる。7,535円のコースは値段の割にふつうという声も (2026年6月)。ホールには海外から来たスタッフも多く、日本語が上手 (2026年6月、9月)。食べログによれば、海外からの客の予約はホテル経由のみ。',
  });
}

// ================================================================ 月島屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27020009/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.tukishimaya.com/';
  const D = day(['17:00', '23:30']); const WE = day(['12:00', '15:00'], ['17:00', '23:30']);
  put({
    id: 'osaka_tsukishimaya_sennichimae', name: '月島屋 (Tsukishima Ya)', category: 'OMNI',
    lat: 34.665671, lng: 135.50428, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Much of the meat is sauced (a slightly sweet soy-based tare, June 2026), the courses end with ramen, cold noodles or gukbap, and there is chijimi; salt-grilled tongue and other salt cuts may be simpler, but nothing is stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant; kimchi, namul, salad and grilled vegetables are sides.',
    hours_raw: 'Daily 17:00–23:30 (last order 23:00); lunch on Saturday and Sunday only, 12:00–15:00; open all year except over New Year (official site; Tabelog). Dinner bookings for 2 or more; weekend lunch bookings only at 12:00 for 4 or more; otherwise write your name on the board (people start at 10:00 or half an hour before opening, 2026 reviews). Tabelog lists cards and PayPay; a July 2026 diner says cards are no longer accepted and paid by PayPay. 50 seats: 20 at tables on 1F, 30 on 2F in private tatami rooms with sunken seating for 2–18; smoking only in the private rooms (Tabelog; official site).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 2-7-13, Ura Namba — 2 min from Namba Stn exit B25 (Midosuji Line), 4 min from Nipponbashi Stn exit 10',
    cuisine: 'Yakiniku of A5 black wagyu chosen for flavour whatever the region, at moderate prices through the shop\'s own buying route (official site) · sets (official menu, read November 2026): Tsukishima set of kalbi, loin and belly ¥4,980; premium set of kalbi, loin and kainomi ¥6,500; limited three-cut platter of special loin, ichibo and Chateaubriand (salt) ¥4,400; tongue trio ¥2,500; horumon tasting of five ¥1,680 · wagyu à la carte: belly ¥1,480, kalbi and loin ¥1,880, harami ¥2,200, ichibo and premium kalbi ¥2,300, fillet ¥3,200, Chateaubriand 130 g ¥5,500; kurashita loin sukiyaki-style with egg ¥2,200; yaki-shabu ¥3,000; Kobe beef loin ¥3,800–6,800 and Kobe beef nigiri ¥1,280; special thick or thin salted tongue ¥2,880, salted tongue ¥1,880 · courses, tax included, booked the day before: Sennichimae ¥5,500, Tsukishima ¥6,800, Takumi ¥9,800, each ending with ramen, cold noodles or gukbap and dessert (official site) · weekend lunch: yakiniku set meal, large ¥1,980 (140–150 g), with rice, soup, kimchi, namul and Korean seaweed; with cold noodles ¥2,380 (2026) · from reviews: black-wagyu tail braised in soy sauce ¥780 (July 2026), yukhoe, tongue sashimi, stone-grilled bibimbap · wine, sake, shochu, cocktails',
    website: SITE, gmaps: gm('焼肉 月島屋 千日前'), menu_url: SITE + 'menu.html',
    notes: "[Yakiniku · Ura Namba, A5 wagyu at fair prices and a weekend lunch worth the queue] A two-floor yakiniku house in Sennichimae, tables downstairs and private tatami rooms upstairs, that buys A5 black wagyu by taste rather than by brand through its own supply route, which diners agree keeps prices kind. At night start with the Tsukishima set (¥4,980 for 300 g of kalbi, loin and belly), the salted tongue whose sweetness one regular raves about, and the soy-braised wagyu tail; one October 2026 diner came for the Chateaubriand (¥5,500 for 130 g), a bargain. The famous deal is the weekend-only lunch: a large yakiniku set of 140–150 g of wagyu with rice and soup for ¥1,980, with names written on a board from 10 am. Many inbound diners at lunch (September 2026). One September 2026 group found the meat average for the price.",
    chef_bio: { chef_name: null, roles: ['Owner and kitchen unnamed in every source read'], origin: null, background: 'Per the official site, the shop chooses the best A5 black wagyu of the season regardless of origin and buys it through its own route to keep prices reasonable; its motto is "delicious, fun, comfortable" (美味しく。楽しく。心地よく。). A June 2026 diner was told it uses only female black wagyu. Diners describe friendly, attentive staff from booking to bill (2026).', philosophy: '"Delicious. Fun. Comfortable." (official site).', specialty: 'Weekend yakiniku lunch; Tsukishima set; salted tongue; Chateaubriand.',
      anecdotes: [
        { text: '"You need to write your name down at 10 AM and wait until the opening at noon, but it\'s worth it for the weekend-only lunch." — August 2026.', source: R + 'B294183149/' },
        { text: '"I asked the staff how much meat was included. The regular size is 110-120g, and the large size is 140-150g." — September 2026, weekend lunch.', source: R + 'B535792452/' },
        { text: '"Here, you can enjoy Chateaubriand for just JPY 5,500 (you can get 120g of it!)" — October 2026.', source: R + 'B538221943/' },
      ],
      japanese_sources_summary: '公式サイト: 月島屋、難波千日前の焼肉屋、個室あり、産地にこだわらずその時期にいちばん美味しいA5ランクの黒毛和牛、独自のルートで仕入れリーズナブルな値段、1階はテーブル席20席、2階は個室、千日前2-7-13、17:00〜23:30 (L.O.23:00)、ランチ (土日のみ) 12:00〜15:00、年中無休 (年末年始は休み)、モットーは「美味しく。楽しく。心地よく。」。お品書き: 月島セット (カルビ・ロース・バラ) 4,980円、上セット (上カルビ・上ロース・カイノミ) 6,500円、特撰三種盛 (特上ロース・イチボ・シャトーブリアン、塩) 4,400円、タンづくし2,500円、ホルモン味くらべ1,680円、バラ1,480円、カルビ・ロース1,880円、ハラミ2,200円、イチボ・上カルビ2,300円、ヘレ3,200円、シャトーブリアン (130グラム) 5,500円、クラシタロースのすき焼き風2,200円、特製焼きしゃぶ3,000円、神戸牛ロース3,800円〜特選6,800円、神戸牛握り寿司1,280円、特撰塩タン2,880円、塩タン1,880円、焼肉屋のラーメン1,380円。宴会コース (税込、前日までに予約): 千日前コース5,500円、月島コース6,800円、匠コース9,800円、締めは醤油ラーメン・冷麺・クッパから。食べログ (店舗会員): 夜は2名から予約、土日ランチの予約は12時に4名以上のみ、カード・PayPay可、50席 (1F 20、2F 30)、個室のみ喫煙可、掘りごたつ、2〜18名の個室。口コミ(2026年4月〜10月): 土日ランチは10時から名前を書いて待つ、大盛りの焼肉定食1,980円 (140〜150g)、冷麺付き2,380円、韓国海苔、わかめスープ、雌の黒毛和牛だけ、甘めで軽い醤油のタレ、月島セット300g、塩タン、黒毛和牛テールの醤油煮780円、Yukke、タンの sashimi、石焼 bibimbap、海外の客が多い、カードは使えなくなりPayPayで払ったという声、値段の割にふつうという声。',
      confidence: 'medium', sources: [TB, SITE, SITE + 'menu.html', SITE + 'party.html', SITE + 'company.html', R + 'B294183149/', R + 'B477246658/', R + 'B501125586/', R + 'B529576105/', R + 'B533792499/', R + 'B535345181/', R + 'B535792452/', R + 'B538068446/', R + 'B538125578/', R + 'B538221943/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Write your name on the board for weekend lunch; many inbound diners (2026). No English menu found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-7-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前二丁目7番13号 (go) 7m. Nearest record 炭火焼き鳥 鴨尽 (osaka_sumibi_yakitori_kamojin_namba) is about 37 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE + 'menu.html', SITE + 'party.html', R + 'B529576105/'],
    price_note: 'Prices from the official menu and course pages (read November 2026; courses tax included) and 2026 reviews for lunch.', last_checked: TODAY, items: [
      it('月島セット', '', 'Tsukishima set: kalbi, loin, belly', '¥4,980', 'Sets', 'ask', 'no', 'Official menu; 300 g per a July 2026 review.', 'tsukishima_set'),
      it('特撰三種盛', '', 'Limited trio: special loin, ichibo, Chateaubriand (salt), 140 g', '¥4,400', 'Sets', 'ask', 'no', 'Official menu.', 'tokusen_sanshu'),
      it('シャトーブリアン', '', 'Chateaubriand, 130 g', '¥5,500', 'Wagyu', 'ask', 'no', 'Official menu.', 'chateaubriand'),
      it('塩タン', '', 'Salted tongue', '¥1,880', 'Tongue', 'ask', 'no', 'Official menu.', 'shio_tan'),
      it('千日前コース', '', 'Sennichimae course (booked the day before)', '¥5,500', 'Course', 'no', 'no', 'Official site; chijimi, ramen or noodles.', 'sennichimae_course'),
      it('', '', 'Weekend lunch yakiniku set meal, large (140–150 g)', '¥1,980', 'Weekend lunch', 'ask', 'no', 'June–September 2026 reviews.', 'weekend_lunch'),
    ] }, {
    cuisine: '産地にこだわらずその時期にいちばん美味しいA5の黒毛和牛を、独自のルートでリーズナブルに (公式サイト)・盛り合わせ (公式のお品書き、2026年11月に確認): 月島セット (カルビ・ロース・バラ) 4,980円、上セット (上カルビ・上ロース・カイノミ) 6,500円、限定の特撰三種盛 (特上ロース・イチボ・シャトーブリアン、塩) 4,400円、タンづくし2,500円、ホルモン味くらべ1,680円・和牛のアラカルト: バラ1,480円、カルビ・ロース1,880円、ハラミ2,200円、イチボ・上カルビ2,300円、ヘレ3,200円、シャトーブリアン130グラム5,500円、玉子にからめるクラシタロースのすき焼き風2,200円、特製焼きしゃぶ3,000円、神戸牛ロース3,800〜6,800円、神戸牛握り寿司1,280円、特撰塩タン2,880円、塩タン1,880円・前日までに予約する宴会コース (税込): 千日前5,500円、月島6,800円、匠9,800円、締めは醤油ラーメン・冷麺・クッパから一品とデザート (公式サイト)・土日ランチ: 大盛りの焼肉定食1,980円 (140〜150g)、ご飯、スープ、キムチ、ナムル、韓国海苔付き、冷麺付きは2,380円 (2026年)・口コミから: 黒毛和牛テールの醤油煮780円 (2026年7月)、Yukke、タンの sashimi、石焼 bibimbap・ワイン、日本酒、焼酎、カクテル',
    neighborhood: '千日前2-7-13、裏なんば。なんば駅B25出口 (御堂筋線) から徒歩2分、日本橋駅10番出口から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。多くの肉はタレで (甘めで軽い醤油のタレ、2026年6月)、コースの締めはラーメン、冷麺、クッパで、チヂミも。塩のタンなどはシンプルかもしれないが、説明はない。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉の店で、キムチ、ナムル、サラダ、焼き野菜はサイド。',
    notes: '[焼肉・裏なんば、手ごろなA5和牛と並ぶ価値のある土日ランチ] 千日前の2フロアの焼肉店で、1階はテーブル、2階は掘りごたつの個室。A5の黒毛和牛を産地ではなく味で選び、独自のルートで仕入れるので値段がやさしい、と口コミも口をそろえる。夜はまず月島セット (カルビ、ロース、バラで300g、4,980円) と、ある常連が甘さをほめる塩タン、黒毛和牛テールの醤油煮を。2026年10月のある人はお得なシャトーブリアン (130gで5,500円) が目当てだった。いちばん有名なのは土日だけのランチで、和牛140〜150gの大盛りの焼肉定食がご飯とスープ付きで1,980円、朝10時から名前を書いて待つ人も。ランチは海外の客が多い (2026年9月)。2026年9月のある団体は値段の割にふつうだったと。',
  });
}

// ================================================================ 炉端ともつ煮 炎 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27154297/'; const R = TB + 'dtlrvwlst/'; const P = TB + 'party/';
  const H = day(['16:30', '23:00']);
  put({
    id: 'osaka_robata_motsuni_homura_namba', name: '炉端ともつ煮 炎 難波店 (Robata Tomotsuni Homura Nanba ten)', category: 'OMNI',
    lat: 34.666805, lng: 135.501689, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The offal stew is in red miso, and the menu has fried oysters, kara-age, spring rolls and sauced tsukune; sashimi with salt and wasabi and salt-grilled skewers may be simpler, but nothing is stated.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a robata and offal-stew izakaya of seafood, chicken, pork and wagyu; nothing is described as vegan.',
    hours_raw: 'Daily 16:30–23:00, open all year (Tabelog). Reservations accepted; groups of 6 or more must book a course; a booking is cancelled with a 100% charge if you are 15 minutes late without calling, and same-day changes in numbers are charged (Tabelog). Appetizer charge ¥550 per person, waived for course bookings (Tabelog); the appetizer is a small red-miso motsuni (October–November 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, and QR including PayPay, Alipay and WeChat Pay (Tabelog). 80 seats with a counter and private rooms for 2 to 30+; heated tobacco allowed at every seat (Tabelog; October 2026). Opened 11 March 2026 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-4-13, 3F of 味わいばしビル — 1 min from Namba Stn exits B15 and B17 (Midosuji and Sennichimae Lines)',
    cuisine: 'Robatayaki, handmade skewers and slow-cooked motsuni, with seasonal seafood (Tabelog) · courses, tax included (Tabelog): seasonal course with all-you-can-drink ¥5,000 (7 items); "colorful charcoal grill" course, food only ¥6,000 (9 items: red-miso offal stew, today\'s sashimi, steamed seasonal vegetables and pork, rare sirloin-cap skewers, clay-pot rice of minced chicken and four mushrooms), the most booked · à la carte from 2026 reviews: rare wagyu sirloin-cap skewer with mustard, extra-large shrimp skewer, negima, gizzard, seseri, chicken breast with wasabi, soft-cartilage tsukune with egg, vegetable-wrapped skewers, six-piece sashimi platter, seafood yukhoe, salmon tartare with Korean seaweed, mackerel wrapped in shiso, grilled mackerel, fried oysters, fist-sized kara-age, soft-boiled-egg potato salad, sweet potato with honey butter, a counter-only scallop carbonara spring roll · clay-pot kamameshi (about 30 minutes), e.g. mackerel and ginger, or corn with butter and soy; leftovers made into onigiri to take home (October 2026) · a wide range of sake and shochu, cocktails; all-you-can-drink ¥2,500 (October 2026)',
    website: null, gmaps: gm('炉端ともつ煮 炎 難波店'), menu_url: P,
    notes: "[Izakaya · Namba, robata, red-miso motsuni and clay-pot rice by the station] A large modern izakaya opened in March 2026 on the third floor of a building a minute from Namba Station, with a counter in front of the grill, sunken-table seating and private rooms. The ¥550 appetizer is a small bowl of sweet-savoury red-miso offal stew; then robata and skewers over charcoal, the rare wagyu sirloin-cap skewer with mustard being the dish diners single out, alongside big shrimp skewers, chicken breast with wasabi and a day's sashimi platter. Leave room for the clay-pot rice, which takes about 30 minutes and comes in a pot big enough that leftovers go home as onigiri. Staff know sake well. Several diners in October 2026 found it on the pricey side (about ¥8,000 for two drinks, a side and a clay pot). Heated tobacco is allowed at the tables.",
    chef_bio: { chef_name: null, roles: ['Kitchen and operator unnamed in every source read'], origin: null, background: 'Opened 11 March 2026 (Tabelog). Per the Tabelog shop text, a robata and yakitori izakaya focused on seasonal ingredients, grilled dishes and handmade skewers, with vegetable-wrapped skewers and slow-cooked motsuni. Diners describe quick, unscripted service and staff well versed in Japanese sake (October 2026).', philosophy: '"First, we want you to experience the flames of our robata grill" (Tabelog course page).', specialty: 'Red-miso motsuni; rare wagyu sirloin-cap skewer; clay-pot rice.',
      anecdotes: [
        { text: '"I ordered various skewers, but the standout was definitely the \\"Rare Sirloin Cap Skewer.\\" It was an unexpected combination to have Wagyu sirloin cap with mustard, and it was absolutely delicious!" — November 2026, at the counter.', source: R + 'B538466253/' },
        { text: '"I highly recommend ordering the Kamameshi (rice cooked in a pot). It was incredibly delicious. The portion is generous, and you can take leftovers home." — October 2026.', source: R + 'B538051341/' },
        { text: '"After having two drinks and ordering a side and a clay pot, I ended up spending about JPY 8000." — October 2026.', source: R + 'B538169601/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): Robata Tomotsuni Homura Nanba ten、居酒屋・炉端焼き・焼鳥、難波3-4-13 味わいばしビル 3F、なんば駅B15・B17出口から徒歩1分、毎日16:30〜23:00、年中無休、6名以上はコース予約、15分遅れて連絡がなければ100%のキャンセル料、お通し550円 (コース予約は無料)、カード・電子マネー・QR (PayPay、Alipay、WeChat Pay など) 可、80席、カウンター、2〜30名以上の個室、全席で加熱式たばこ可、オープン2026年3月11日。店の説明: 旬の食材にこだわる炉端焼きと焼鳥、手作りの串、野菜巻き串、じっくり煮込んだもつ煮、日本酒と焼酎。コース (税込): 旬の野菜コース飲み放題付き5,000円 (7品)、炭火焼きのコース料理のみ6,000円 (9品、赤味噌のもつ煮、本日の刺身、旬の野菜と豚の蒸し物、イチボのレア串、鶏ミンチと4種のきのこの土鍋ご飯)、いちばん人気。口コミ(2026年10月〜11月): お通しの赤味噌のもつ煮、イチボのレア串に辛子、特大の海老串、negima、sunagimo、seseri、ささみのわさび、軟骨入りつくねと卵、6種の刺身盛り、海鮮 yukhoe、韓国海苔と鮭のタルタル、鯖の大葉巻き、鯖の焼き物、牡蠣フライ、こぶし大の kara-age、半熟卵のポテトサラダ、さつまいものハニーバター、カウンター限定の帆立のカルボナーラ春巻き、30分かかるkamameshi (鯖と生姜、とうもろこしとバター醤油)、残りはonigiriにして持ち帰り、日本酒に詳しいスタッフ、飲み放題2,500円、値段は高めという声、電子たばこ可。',
      confidence: 'medium', sources: [TB, P, R + 'B535362398/', R + 'B537107562/', R + 'B537462340/', R + 'B537667972/', R + 'B537856988/', R + 'B538051341/', R + 'B538054120/', R + 'B538115032/', R + 'B538169601/', R + 'B538466253/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seats in front of the grill; no English evidence found (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-4-13 味わいばしビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with bookable courses; opened March 2026; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目4番13号 (go) 9m. Nearest record 金龍ラーメン 戎橋店 (osaka_kinryu_ramen_ebisubashi) is about 44 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [P, R + 'B537667972/'],
    price_note: 'Course prices from the shop-maintained Tabelog course pages (tax included); no à la carte prices found.', last_checked: TODAY, items: [
      it('', '', 'Charcoal grill course, food only (9 items)', '¥6,000', 'Course', 'ask', 'no', 'Tabelog; the most booked.', 'charcoal_course'),
      it('', '', 'Seasonal vegetable course with all-you-can-drink (7 items)', '¥5,000', 'Course', 'ask', 'no', 'Tabelog.', 'seasonal_course'),
      it('', '', 'Rare wagyu sirloin-cap skewer', '', 'Skewers', 'ask', 'no', 'Tabelog; November 2026 review.', 'ichibo_skewer'),
      it('', '', 'Clay-pot kamameshi', '', 'Rice', 'ask', 'no', 'October 2026 reviews; about 30 minutes.', 'kamameshi'),
    ] }, {
    cuisine: '炉端焼き、手作りの串、じっくり煮込んだもつ煮と旬の魚介 (食べログ)・コース (税込、食べログ): 旬の野菜コース飲み放題付き5,000円 (7品)、いちばん人気の炭火焼きのコース料理のみ6,000円 (9品: 赤味噌のもつ煮、本日の刺身、旬の野菜と豚の蒸し物、イチボのレア串、鶏ミンチと4種のきのこの土鍋ご飯)・2026年の口コミのアラカルト: 辛子で食べる和牛イチボのレア串、特大の海老串、negima、sunagimo、seseri、ささみのわさび、軟骨入りつくねと卵、野菜巻き串、6種の刺身盛り、海鮮 yukhoe、韓国海苔と鮭のタルタル、鯖の大葉巻き、焼き鯖、牡蠣フライ、こぶし大の kara-age、半熟卵のポテトサラダ、さつまいものハニーバター、カウンター限定の帆立のカルボナーラ春巻き・30分ほどかかる土鍋のkamameshi (鯖と生姜、とうもろこしとバター醤油など)、残りはonigiriにして持ち帰り (2026年10月)・日本酒と焼酎が豊富、カクテル、飲み放題2,500円 (2026年10月)',
    neighborhood: '難波3-4-13 味わいばしビル 3F。なんば駅B15・B17出口 (御堂筋線・千日前線) から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。もつ煮は赤味噌で、牡蠣フライ、kara-age、春巻き、タレのつくねも。刺身や塩の串はシンプルかもしれないが、説明はない。',
    vegan_detail: 'ヴィーガンではありません。魚介、鶏、豚、和牛の炉端ともつ煮の居酒屋で、ヴィーガンの説明はない。',
    notes: '[居酒屋・なんば、駅前で炉端と赤味噌のもつ煮と土鍋ご飯] 2026年3月に開いた大きなモダンな居酒屋で、なんば駅から1分のビルの3階。炉端の前のカウンター、掘りごたつ、個室がある。お通し (550円) は甘辛い赤味噌のもつ煮。それから炭火の炉端と串で、いちばん名前が挙がるのは辛子で食べる和牛イチボのレア串、ほかに大きな海老串、ささみのわさび、本日の刺身盛り。締めの土鍋のkamameshiは30分ほどかかり、量が多いので残りはonigiriにして持ち帰れる。日本酒に詳しいスタッフも。2026年10月には値段は高めという声がいくつか (2杯と一品とkamameshiで8,000円ほど)。加熱式たばこは席で吸える。',
  });
}

// ================================================================ とんかつ しゃぶしゃぶ 新
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27148553/'; const R = TB + 'dtlrvwlst/'; const P = TB + 'party/';
  const H = day(['11:00', '23:00']);
  put({
    id: 'osaka_tonkatsu_shabushabu_arata_nipponbashi', name: 'とんかつ しゃぶしゃぶ 新 (Tonkatsu Shabushabu Arata)', category: 'OMNI',
    lat: 34.666298, lng: 135.505634, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried tonkatsu, with menchi katsu, shrimp tempura and chicken katsu to add; the TOKYO X shabu-shabu at night comes with ponzu, which is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets and pork shabu-shabu, with egg soup and pork miso soup.',
    hours_raw: 'Daily 11:00–23:00; lunch last order 16:00; dinner last order 22:00 for shabu-shabu, 22:30 for tonkatsu and drinks (Tabelog). Reservations by phone preferred (the shop asks, because of online booking fees); bookings may be cancelled 15 minutes late without a call, and a late arrival still leaves 2 hours after the booked time (Tabelog). Ordering by QR code; water self-service; rice refills ¥220 (October 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR payment (Tabelog). 22 seats with a counter; non-smoking; free Wi-Fi; children welcome (Tabelog). Menus in English, Simplified Chinese and Korean, with photos; English-speaking staff (Tabelog). Opened 9 May 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nipponbashi 1-19-6, 2F of the W building, Ura Namba — 1 min from Nipponbashi Stn exit 5 (Sakaisuji and Sennichimae Lines)',
    cuisine: 'Tonkatsu by day, TOKYO X pork-belly shabu-shabu by night; a sister of とんかつ ニューベイブ (Tabelog) · lunch set meals, tax included (Tabelog course pages): Hayashi SPF rib-roast set ¥3,190, half roast and fillet ¥3,630, fried low then high · fillet katsu set, small ¥1,980 (September–October 2026), cut rare and pink inside · one set, three ways: a slightly sweet-spicy fig sauce, a sour curry sauce for katsu curry, and an egg soup to dip in for a katsudon effect; also natural salt (a Spanish flake salt, September 2026) and mustard soy sauce · add-ons: menchi katsu, shrimp tempura, chicken katsu, TOKYO X pork miso soup; cabbage or daikon salad; rice in three sizes · warabi mochi (October 2026) · evening: TOKYO X shabu-shabu courses with ponzu, lettuce and mitsuba (October 2026) · sake, shochu, beer, highballs',
    website: null, gmaps: gm('とんかつ しゃぶしゃぶ 新 日本橋'), menu_url: P,
    notes: "[Tonkatsu · Ura Namba, a pink fillet katsu eaten three ways] A small second-floor sister of the Tabelog 100 tonkatsu house New Babe, opened in May 2025 a minute from Nipponbashi Station: tonkatsu at lunch, TOKYO X pork-belly shabu-shabu at night. The fillet katsu (small ¥1,980) is fried at low then high heat until the crust is light and the inside pink and moist; the rib roast is Hayashi SPF pork. The fun is in the set: dip into the slightly sweet fig sauce, then the sour curry sauce for a katsu curry, then the egg soup for a katsudon, with Spanish flake salt and mustard soy sauce on the side. Order by QR code; rice refills are ¥220. One October 2026 diner found the fillet a little too red; another found the shabu-shabu meat less sweet than expected.",
    chef_bio: { chef_name: null, roles: ['Kitchen and operator unnamed; a sister restaurant of とんかつ ニューベイブ (Tabelog shop text; 2026 reviews)'], origin: null, background: 'Opened 9 May 2025 (Tabelog; a June 2025 review). The Tabelog shop text calls it a sister establishment of the Tabelog 100 restaurant "New Babe", specialising in tonkatsu and TOKYO X pork-belly shabu-shabu; reviewers in 2025–2026 place New Babe in Taniyon and a sign reads "New Style of New Babe" (November 2025). Diners describe two kind women serving at lunch and smart, friendly service (September–October 2026).', philosophy: null, specialty: 'Fillet katsu set eaten three ways; TOKYO X shabu-shabu.',
      anecdotes: [
        { text: '"The rare pink color really boosts your excitement!… taking a bite reveals a moist and tender experience that\'s truly impressive! The coating is light and crispy." — September 2026, fillet cutlet lunch.', source: R + 'B535830490/' },
        { text: '"If you dip it in curry sauce, it transforms into a katsu curry dish. Additionally, dipping the katsu into the egg soup gives it a katsu don style." — September 2026, small fillet katsu set.', source: R + 'B536806865/' },
        { text: '"The slices of meat were on the smaller side, but there were plenty of them, which made it enjoyable." — October 2026, TOKYO X shabu-shabu course.', source: R + 'B537889190/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員、英語版): Tonkatsu Shabushabu Arata、とんかつ・しゃぶしゃぶ・日本料理、日本橋1-19-6 w棟 2F、日本橋駅5番出口から徒歩1分、毎日11:00〜23:00、ランチのL.O.16:00、夜はしゃぶしゃぶ22:00・とんかつとドリンク22:30、予約はできれば電話で (ネット予約の手数料が負担)、15分遅れて連絡がなければキャンセルの場合あり、カード可、電子マネー・QR不可、22席、禁煙、Wi-Fi、子ども可、英語・簡体字・韓国語メニュー、写真付き、英語を話すスタッフ、オープン2025年5月9日。店の説明: 食べログ百名店「New Babe」の姉妹店、とんかつと TOKYO X の豚バラしゃぶしゃぶ。ランチ限定 (税込): Hayashi SPF のロース定食3,190円、ロースとヘレのハーフ3,630円、低温と高温で揚げる、いちじくのソース、酸味のあるカレーソース、卵のスープで3通りに、天然塩とからし醤油も、Menchi katsu、海老の tempura、ささみの katsu、TOKYO X の豚汁の追加。口コミ(2025年6月〜2026年10月): Taniyon の New Babe の姉妹店、ヒレかつ定食 (小) 1,980円、ピンク色の断面、軽い衣、スペインの塩、キャベツか大根のサラダ、ご飯の量を選べる、warabi mochi、QR コードで注文、水はセルフ、ご飯のおかわり220円、夜は TOKYO X のしゃぶしゃぶコース、ポン酢、レタスと三つ葉、英語メニュー、少し赤すぎたという声、思ったより甘くなかったという声。',
      confidence: 'medium', sources: [TB, P, R + 'B508308376/', R + 'B517385746/', R + 'B535830490/', R + 'B536180191/', R + 'B536806865/', R + 'B537374752/', R + 'B537463054/', R + 'B537889190/', R + 'B538257998/', R + 'B538305620/'] },
    cultural_comfort: { level: 'english', note: 'Menus in English, Chinese and Korean; English-speaking staff (Tabelog); QR-code ordering (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区日本橋1-19-6 w棟 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with bookable lunch sets; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区日本橋一丁目19番6号 (go) 5m. 鮨 あまと 裏難波 (osaka_sushi_amato_ura_namba, address_ja "大阪府大阪市中央区日本橋1-19-6 福喜ビル 2F") shares the house number under a different building name and is pinned about 13 m away, so neither is stacked; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [P, R + 'B508308376/', R + 'B538305620/'],
    price_note: 'Lunch set prices from the shop-maintained Tabelog course pages (tax included) and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fillet katsu set, small (fig sauce, curry sauce, egg soup)', '¥1,980', 'Lunch set', 'no', 'no', 'September–October 2026 reviews.', 'hire_katsu_small'),
      it('', '', 'Hayashi SPF rib-roast set (lunch)', '¥3,190', 'Lunch set', 'no', 'no', 'Tabelog course page.', 'roast_set'),
      it('', '', 'Half roast and half fillet set (lunch)', '¥3,630', 'Lunch set', 'no', 'no', 'Tabelog course page.', 'half_half_set'),
      it('', '', 'TOKYO X pork-belly shabu-shabu course (evening)', '', 'Shabu-shabu', 'ask', 'no', 'October 2026 review.', 'tokyo_x_shabu'),
    ] }, {
    cuisine: '昼はとんかつ、夜は TOKYO X の豚バラしゃぶしゃぶ。とんかつ ニューベイブの姉妹店 (食べログ)・ランチの定食 (税込、食べログのコースページ): Hayashi SPF のロース定食3,190円、ロースとヘレのハーフ3,630円、低温と高温で揚げる・Hire katsu 定食 (小) 1,980円 (2026年9〜10月)、中はレアのピンク色・ひとつの定食を3通りに: やや甘辛いいちじくのソース、katsu curryになる酸味のあるカレーソース、katsudonのようにつける卵のスープ。天然塩 (スペインのフレーク塩、2026年9月) とからし醤油も・追加: Menchi katsu、海老の tempura、ささみの katsu、TOKYO X の豚汁。キャベツか大根のサラダ、ご飯は3サイズ・warabi mochi (2026年10月)・夜: ポン酢とレタス、三つ葉の TOKYO X のしゃぶしゃぶコース (2026年10月)・日本酒、焼酎、ビール、ハイボール',
    neighborhood: '日本橋1-19-6 w棟 2F、裏なんば。日本橋駅5番出口 (堺筋線・千日前線) から徒歩1分',
    gf_detail: 'グルテンフリーではありません。衣をつけて揚げるとんかつで、Menchi katsu、海老の tempura、ささみの katsuの追加も。夜の TOKYO X のしゃぶしゃぶはポン酢で、説明はない。',
    vegan_detail: 'ヴィーガンではありません。豚のかつと豚のしゃぶしゃぶで、卵のスープや豚汁も。',
    notes: '[とんかつ・裏なんば、ピンクのHire katsuを3通りに] 食べログ百名店のとんかつ「New Babe」の姉妹店で、2025年5月に日本橋駅から1分のビルの2階に開いた小さな店。昼はとんかつ、夜は TOKYO X の豚バラしゃぶしゃぶ。Hire katsu (小1,980円) は低温と高温で揚げ、衣は軽く中はしっとりピンク。ロースは Hayashi SPF の豚。楽しいのは定食の食べ方で、やや甘辛いいちじくのソース、酸味のあるカレーソースでkatsu curry、卵のスープでkatsudon風、スペインのフレーク塩とからし醤油も。注文は QR コードで、ご飯のおかわりは220円。2026年10月にはヘレが少し赤すぎたという声や、しゃぶしゃぶの肉が思ったより甘くなかったという声も。',
  });
}

save();
