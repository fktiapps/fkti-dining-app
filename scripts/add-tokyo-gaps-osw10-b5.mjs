// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 5.
//   + 鴨の助 Kamo Nosuke (16-seat soba izakaya, "Oyakodon is a drink!"; duck soba; opened 2022)
//   + すし匠 Sushi Sho Yotsuya (head shop of the Sushi Sho group; Tabelog Silver; booked a year or more ahead)
//   + くすのき 本店 Kusunoki Honten (6-seat tempura counter, Tabelog Silver 2020–2026; apprentices fry a ¥5,500 bara tendon)
//   + IL VECCHIO PLATANO (16-seat Italian with homemade fresh pasta, on a quiet street off Shinmichi-dōri)
//   Chain check. Kamo Nosuke: the listing names one other branch, in Asakusabashi (not in data); two shops. Sushi Sho: the
//   Yotsuya head shop of a group (reviews name shops in New York and at Azabudai Hills); no Sushi Sho shop is in data
//   (tokyo_sushi_iwase only cites the lineage), and the group is not opening branches fast, so kept per Greg's 2026-11-02
//   ruling. Kusunoki: 株式会社くすのき runs this head shop and 天婦羅くすのき 中目黒 (company listing); not in data. Platano:
//   one listing. Skipped 日高屋 四ツ谷店 13281031 (Hidakaya, a chain already in data as tokyo3__316).
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13281031', '日高屋 四ツ谷店 — Hidakaya, a chain already in data (tokyo3__316); not researched.');

// ================================================================ 鴨の助
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13269896/'; const R = TB + 'dtlrvwlst/'; const IG = 'http://Instagram.com/soba_kamonosuke';
  const H = day(['11:15', '14:30'], ['17:30', '22:00']);
  put({
    id: 'tokyo_kamo_nosuke_yotsuya', name: '鴨の助 (Kamo Nosuke)', category: 'OMNI',
    lat: 35.685827, lng: 139.728174, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing says the soba is pure buckwheat, and the dipping broths and the oyakodon sauce are dashi and soy based; no allergy information is given.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: everything rests on a dashi broth, with duck, chicken and egg at the centre.',
    hours_raw: 'Mon–Fri 11:15–14:30 (last order 14:00) and 17:30–22:00 (last order 21:30); Sat–Sun the same hours, last dinner order 21:00; holidays lunch only; temporary closures posted on Instagram (Tabelog). Lunch: write your name on the waiting list outside (20–30 minutes at weekends per the shop; 30 minutes on an October 2026 holiday); oyakodon diners have a one-hour limit. Dinner is booked out nightly per the shop, so reserve; no-shows are refused future bookings, 10 minutes late counts as a cancellation (Tabelog). Evening appetizer charge ¥500 per seat (Tabelog). 16 seats: a counter of 4 and tables; hire up to 20; non-smoking; wheelchair accessible; no kids\' menu (Tabelog). Cards and e-money (Suica, nanaco, iD, QUICPay); no QR (Tabelog). Menus in English, Chinese and Korean; Chinese- and Korean-speaking staff (Tabelog). Opened 26 March 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-10, 第二上野ビル 1F — 3 min from JR Yotsuya Stn (Akasaka exit) and Exit 2 of the subway',
    cuisine: 'Soba izakaya known for its rich dashi and the oyakodon sold as "Oyakodon is a drink!" (Tabelog) · oyakodon ¥1,680: runny eggs with a rich yolk on top, plenty of dashi and several kinds of chicken and duck (one diner counted four, including tsukune), with lemon, jalapeño vinegar, black pepper and a black shichimi to change the taste, explained on a card on the wall (October 2026) · duck seiro soba ¥1,680; duck dipping soba with white chili oil; duck nanban soba (October 2026) · at night: roast duck loin, grilled duck, potato salad, simmered eggplant, a kamo-negi course, sake, a "soba shop lemon sour" and soba-yu with sake (2026 reviews); a 26 cm "Super Oyakodon is a drink!" for 5–6 people ¥5,000 (Tabelog)',
    website: IG, gmaps: gm('鴨の助 四谷'), menu_url: null,
    notes: "[Soba · Yotsuya, the drinkable oyakodon] A small, modern soba izakaya three minutes from Yotsuya Station whose chopstick wrappers announce \"Oyakodon is a drink!\": a bowl of barely set egg with a rich yolk on top, plenty of dashi and several kinds of chicken and duck, eaten plain and then with lemon, jalapeño vinegar or black shichimi as the card on the wall suggests. October 2026 diners called it the best oyakodon they had eaten; others found the ¥1,680 price high and the meat a little scarce, and one called the shop better at social media than at chicken. The duck soba, cold seiro or with a white chili-oil dip, has its own fans. Lunch means signing the list outside and waiting 20–30 minutes at weekends; dinner is a duck-and-sake izakaya, booked out most nights, with soba or oyakodon to finish. A second shop is in Asakusabashi.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 26 March 2022 (Tabelog); a second shop in Asakusabashi (Tabelog).',
      background: 'No source names the owner or cooks. Corporate-member Tabelog listing: "a soba izakaya known for its rich dashi broth and luxurious oyakodon, famously dubbed \'Oyakodon is a drink!\'"; fully booked every night; Asakusabashi branch two minutes from Asakusabashi Station. An October 2026 diner describes the broth as dashi "combined with homemade chicken stock".',
      philosophy: null, specialty: 'Oyakodon "is a drink"; duck soba.',
      anecdotes: [
        { text: '"There was a paper explaining how to enjoy it, allowing for various flavor changes. The black pepper was a nice touch." — October 2026, a third visit.', source: R + 'B509284302/' },
        { text: '"I arrived at 10:50, and there were already two groups ahead of me who had signed in… The rules for entry were unclear." — October 2026, oyakodon ¥1,680 and duck seiro ¥1,680.', source: R + 'B537173743/' },
        { text: '"This was my first visit with my elderly parent… To be honest, I was skeptical about the lemon for flavor enhancement, but the refreshing aroma and acidity of the lemon surprised me." — October 2026.', source: R + 'B537692269/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鴨の助、そば・居酒屋・親子丼、四谷1-10 第二上野ビル1F、JR四ツ谷駅赤坂口・地下鉄2番出口から徒歩3分、月〜金11:15〜14:30・17:30〜22:00、土日も同じ (夜のL.O.21:00)、祝日は昼のみ、臨時休業は Instagram で、親子丼は1時間制、無断キャンセルは以後お断り、夜はお通し代500円、16席、禁煙、車椅子可、カード・電子マネー可、QR不可、英語・中国語・韓国語のメニュー、2022年3月26日オープン、「親子丼は飲み物です」、26cmの特大親子丼 (5〜6人前) 5,000円、浅草橋店あり。口コミ(2025年6月〜2026年10月): 親子丼1,680円、鴨せいろ1,680円、レモン、ハラペーニョ酢、黒七味、黒こしょう、外の記名表、週末の昼は30分待ち、夜は鴨と日本酒の居酒屋、鴨ロース、鴨南蛮そば。',
      confidence: 'medium', sources: [TB, IG, R + 'B474276682/', R + 'B509284302/', R + 'B537173743/', R + 'B537219137/', R + 'B537260423/', R + 'B537354886/', R + 'B537692269/', R + 'B537743722/', R + 'B537792769/', R + 'B538303841/', R + 'B538376904/', R + 'B538403051/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists menus in English, Chinese and Korean and Chinese- and Korean-speaking staff; sign the list outside at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-10 第二上野ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.685827, 139.728174); cross-checked: GSI 東京都新宿区四谷一丁目10番地 (lot) 49m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537173743/', R + 'B537354886/'],
    price_note: 'Prices from October 2026 reviews and the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Oyakodon ("Oyakodon is a drink!")', '¥1,680', 'Rice bowls', 'ask', 'no', 'September and October 2026 reviews.', 'oyakodon'),
      it('', '', 'Duck seiro soba', '¥1,680', 'Soba', 'ask', 'no', 'October 2026 review.', 'kamo_seiro'),
      it('', '', '26 cm Super Oyakodon for 5–6 people', '¥5,000', 'Rice bowls', 'ask', 'no', 'Tabelog listing.', 'super_oyakodon'),
      it('', '', 'Evening appetizer charge per seat', '¥500', 'Charge', '', '', 'Tabelog listing.', 'otoshi'),
    ] }, {
    cuisine: '濃い出汁と「親子丼は飲み物です」の親子丼で知られるそば居酒屋 (食べログ)・親子丼1,680円: とろとろの卵に濃い黄身、たっぷりの出汁、数種類の鶏と鴨 (つくねを含め4種類と数えた人も)。レモン、ハラペーニョ酢、黒こしょう、黒七味で味を変える食べ方が壁のカードに (2026年10月)・鴨せいろ1,680円、白いラー油のつけ汁の鴨つけそば、鴨南蛮そば (2026年10月)・夜は鴨ロースのロースト、鴨の焼き物、ポテトサラダ、なすの煮びたし、鴨ねぎのコース、日本酒、「蕎麦屋のレモンサワー」、そば湯割り (2026年の口コミ)。5〜6人前の26cmの「特大 親子丼は飲み物です」5,000円 (食べログ)',
    neighborhood: '四谷1-10 第二上野ビル1F。JR四ツ谷駅赤坂口、地下鉄2番出口から徒歩3分',
    gf_detail: '要確認。そばが十割という説明はなく、つけ汁や親子丼のたれは出汁と醤油。アレルギーの案内はない。',
    vegan_detail: 'ヴィーガンではない。すべて出汁が土台で、鴨、鶏、卵が主役。',
    notes: '[そば・四谷、飲める親子丼] 四ツ谷駅から3分の小さなモダンなそば居酒屋で、箸袋には「親子丼は飲み物です」。半熟の卵に濃厚な黄身、たっぷりの出汁と数種類の鶏と鴨の親子丼を、まずはそのまま、それから壁のカードのとおりにレモン、ハラペーニョ酢、黒七味で。2026年10月には人生最高の親子丼という声がある一方、1,680円は高く肉が少ないと感じた人や、鶏よりSNSが上手な店と書いた人も。冷たいせいろや白いラー油のつけ汁の鴨そばにもファンがいる。昼は外の記名表に名前を書き、週末は20〜30分待ち。夜は鴨と日本酒の居酒屋でほぼ毎晩満席、締めはそばか親子丼。浅草橋にも店がある。',
  });
}

// ================================================================ すし匠
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13000852/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '13:30'], ['18:00', '22:30']); const N = day(['18:00', '22:30']);
  put({
    id: 'tokyo_sushi_sho_yotsuya', name: 'すし匠 (Sushi Sho Yotsuya)', category: 'OMNI',
    lat: 35.685586, lng: 139.728328, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Nigiri are seasoned at the counter, and the course mixes in cooked dishes (fried scallops, simmered clams, ankimo with Nara pickles) and a castella-style omelette; nothing gluten-free is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an omakase of fish and shellfish.',
    hours_raw: 'Mon, Wed, Fri lunch 11:30–13:30 and dinner 18:00–22:30; Tue, Thu, Sat dinner 18:00–22:30; closed Sunday, Mondays that are holidays, Golden Week and New Year (Tabelog). Booking: Tabelog says reservations for the following month open on the 1st of each month; 2026 diners book TableCheck or Omakase and often take their next seat a year to eighteen months ahead before leaving. 14 seats: 11 at the counter and a 3-seat private tatami room; non-smoking (Tabelog). Cards (VISA, JCB, AMEX, Diners), but not at lunch (Tabelog). Children welcome (Tabelog). Spend about ¥40,000–60,000 a head with drinks (2025–26 reviews).',
    hours: { 0: L, 1: N, 2: L, 3: N, 4: L, 5: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-11, 陽臨堂ビル 1F — 4 min from Yotsuya Stn (JR Chuo, Marunouchi, Namboku)',
    cuisine: 'Edomae sushi omakase that alternates small dishes and nigiri, a style one reviewer says began here (2026 reviews) · about 28 items in roughly 90 minutes (October 2026): appetizers such as sea grapes, octopus, sweet shrimp, grilled barracuda or mehikari, fried scallops, abalone; nigiri on rice seasoned with red and white vinegar, e.g. kasugo, kohada, Matsukawa flounder, sumi-ika, bonito, sardine, kawahagi, seared kinmedai, nodoguro roll · after the course, extras: ankimo with Nara pickles or pickled watermelon rind, "ohagi", toro-taku, two kinds of uni side by side, aged fatty tuna; a castella-style tamago and ice cream to close (2025–26 reviews) · sake, shochu and wine · about ¥40,000–60,000 per person with drinks',
    website: null, gmaps: gm('すし匠 四谷'), menu_url: null,
    notes: "[Sushi · Yotsuya, the Sushi Sho head shop] The Yotsuya head shop of the Sushi Sho group, a long-time Tabelog Silver (2018–2020, 2026) and Sushi 100 pick, where the omakase weaves small dishes between nigiri, a rhythm one 2026 regular says started here. Expect around 28 servings in an hour and a half from a fast, cheerful team: grilled fish, abalone, kohada and kinmedai on red- and white-vinegar rice, then extras ordered at the end, above all the ankimo with Nara pickles and the house \"ohagi\". Reviewers praise the bright yuzu and sudachi seasoning and the easygoing counter. Seats go a year or more ahead, so most guests book the next visit before leaving; the following month opens on the 1st on Tabelog's note. Chef Katsumata, whose stories at the counter 2026 diners enjoyed, was leaving Yotsuya in autumn 2026, and one regular writes that a third-generation chef takes over from November, with the first generation in New York and the second at Azabudai Hills.",
    chef_bio: { chef_name: null, roles: ['Head shop of the Sushi Sho group ("This is the main branch of the Sushi Sho group!", September 2026)'], origin: null,
      background: 'Reviews name the counter chef as Katsumata (July–October 2026: "Chef Katsumata is as cheerful and entertaining as ever"; "I visited Sushi Sho just before Chef Katsumata left Yotsuya"). An October 2026 regular on a fourth visit: "Starting in November, the third-generation chef will take over. The first-generation chef is now in New York, and the second-generation chef is at Azabudai Hills." A September 2026 diner mentions a sister shop, Terakoya. Tabelog awards: Bronze 2017, Silver 2018–2020 and 2026; Sushi TOKYO "Tabelog 100" 2021, 2022, 2025.',
      philosophy: null, specialty: 'Alternating otsumami and nigiri; ankimo with Nara pickles; ohagi.',
      anecdotes: [
        { text: '"My next reservation is also a year and a half away, so far in advance that I might forget about it… I\'m now enjoying it as if it were an attraction." — October 2026, ¥47,000 per person.', source: R + 'B470059978/' },
        { text: '"An impressive 28 dishes! To be able to serve this in just over 90 minutes is a testament to the skill and teamwork of this renowned establishment." — October 2026.', source: R + 'B485397654/' },
        { text: '"I was amazed by the presentation of two types of uni (sea urchin), reminiscent of a double scoop of ice cream." — September 2026, lunch.', source: R + 'B537742748/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): すし匠 (Sushi Sho Yotsuya)、寿司、四谷1-11 陽臨堂ビル1F、四ツ谷駅から徒歩4分、月・水・金11:30〜13:30・18:00〜22:30、火・木・土18:00〜22:30、日曜・祝日の月曜・GW・年末年始休み、翌月の予約は毎月1日から、14席 (カウンター11、個室・座敷3)、禁煙、カード可 (ランチは不可)、子ども可、食べログアワード Bronze 2017、Silver 2018〜2020・2026、寿司 TOKYO 百名店2021・2022・2025。口コミ(2025年3月〜2026年10月): つまみと握りを交互に出す、28品を90分ほどで、赤酢と白酢のシャリ、追加のあん肝と Nara 漬け、おはぎ、トロたく、2種のうに、1人4〜6万円、次の予約は1年〜1年半先、TableCheck と Omakase で予約、Katsumata の大将が四谷を離れ、11月から三代目という声。',
      confidence: 'medium', sources: [TB, R + 'B289760986/', R + 'B401585523/', R + 'B470059978/', R + 'B482836364/', R + 'B485397654/', R + 'B493051714/', R + 'B530964617/', R + 'B535627350/', R + 'B536606769/', R + 'B536673794/', R + 'B537742748/', R + 'B538092323/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase at the counter; extras ordered at the end; book through TableCheck or Omakase.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-11 陽臨堂ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing, Tabelog Silver 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.685586, 139.728328); cross-checked: GSI 東京都新宿区四谷一丁目11番地 (lot) 63m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B470059978/', R + 'B538092323/'],
    price_note: 'No published menu; per-person totals with drinks and extras from 2025–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course with extras and drinks (per person, typical total)', '¥47,000–50,000', 'Course', 'ask', 'no', 'October 2026 reviews.', 'omakase_total'),
    ] }, {
    cuisine: 'つまみと握りを交互に出す江戸前のおまかせ。この形はここから始まったという口コミも (2026年の口コミ)・約90分で28品ほど (2026年10月): 海ぶどう、たこ、甘えび、焼いたかますやめひかり、ほたてのフライ、あわびなどのつまみ。握りは赤酢と白酢のシャリで、春子、こはだ、すみいか、かつお、いわし、かわはぎ、炙った金目鯛、のどぐろの巻物など・コースのあとに追加: Nara 漬けや西瓜の皮の漬物を添えたあん肝、「おはぎ」、トロたく、2種のうにの食べ比べ、熟成のトロ。締めはカステラのような玉子とアイス (2025〜26年の口コミ)・日本酒、焼酎、ワイン・飲み物込みで1人4〜6万円ほど',
    neighborhood: '四谷1-11 陽臨堂ビル1F。四ツ谷駅 (JR中央線、丸ノ内線、南北線) から徒歩4分',
    gf_detail: '予約時に要確認。握りはカウンターで味付けして出し、コースにはほたてのフライ、はまぐりの煮物、Nara 漬けのあん肝、カステラのような玉子も。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。魚介のおまかせ。',
    notes: '[寿司・四谷、すし匠の本店] すし匠グループの四谷の本店。食べログのシルバー (2018〜2020、2026年) や寿司百名店の常連で、おまかせはつまみと握りを交互に出す。2026年の常連によれば、この流れはここが始まり。明るくきびきびしたチームが1時間半で28品ほどを出す: 焼き魚、あわび、赤酢と白酢のシャリのこはだや金目鯛、そして最後に追加で頼むNara 漬けのあん肝と名物の「おはぎ」。柚子とすだちをきかせた明るい味付けと、気取らないカウンターが好評。席は1年以上先まで埋まり、多くの客は帰る前に次の予約を入れる。食べログの案内では翌月分の予約は毎月1日から。2026年の客に話で人気の Katsumata の大将は2026年秋に四谷を離れ、ある常連によれば11月から三代目が継ぎ、初代は New York、二代目は Azabudai Hills にいるという。',
  });
}

// ================================================================ くすのき 本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13223239/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kusunoki-official.co.jp/'; const RECRUIT = SITE + 'recruit/'; const CM = 'https://www.careermap.jp/corporations/78207';
  put({
    id: 'tokyo_kusunoki_honten_yotsuya', name: 'くすのき 本店 (Kusunoki Honten)', category: 'OMNI',
    lat: 35.685998, lng: 139.728068, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura in a wheat batter, with a tendon sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kuruma prawns, fish and shellfish run through every course and bowl; the egg tofu came with a dashi jelly (September 2026).',
    hours_raw: 'Reservation only. Courses: Wed–Fri from 18:00, Sat from 13:00; tempura-bowl seatings Sat 18:00–19:40; on other days 12:00–15:00 and 17:00–21:00 depending on the day; closed Monday and Sunday; hours may vary (Tabelog). The ~¥100,000 course is hard to book: 2026 diners caught released seats on Omakase; the bara tendon seatings (35 minutes, apprentices frying) are booked through Tabelog. Changing date, time or party size incurs the cancellation fee; no extra guests including small children; no third-party booking agents; a solo party wanting all 6 seats pays for 6 courses; no strong perfume (Tabelog). 6 seats at a hinoki counter; non-smoking (Tabelog; September 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Opened in Yotsuya 14 June 2018 (Tabelog).',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-9-4, フローラ四谷 1F, with no noren or visible sign — 3 min from Yotsuya Stn',
    cuisine: 'Tempura courses joined to full Japanese cuisine (company listing): the house claims its frying leaves no oil mark on the paper through a 2½-hour course, kuruma prawn is the only fixed item, and the rest follows the day\'s best from Toyosu (official site) · course about ¥100,000 (Tabelog budget; "over ¥80,000" per a September 2026 diner): e.g. corn soup, sweet shrimp, corn, maitake, autumn eggplant, ginkgo, eel, crab, sea urchin fried bare in batter, abalone as sashimi and tempura (September 2026) · Kusunoki bara tendon ¥5,500, or with one dish (egg tofu with karasumi, mozuku soup, pickles) ¥5,940, fried by young chefs in 35-minute seatings: kuruma or sweet shrimp, small shrimp, anago, whitebait, eggplant, manganji pepper, asparagus, sawara, maitake as the season turns; rice 200 g, more or less on request; a yuzu-sesame shichimi (2026 reviews) · Taiwanese teas from about ¥880, which the owner sources in Taiwan (September 2026); wine and sake',
    website: SITE, gmaps: gm('くすのき 本店 四谷'), menu_url: null,
    notes: "[Tempura · Yotsuya, a six-seat Silver counter and its apprentices' bowl] No noren, no sign: a six-seat hinoki counter with an old ice-cooled refrigerator, where the founder, 楠, or a senior fryer cooks a ~¥100,000 course that has won a Tabelog Silver every year since 2020. The company's story starts in a kappo kitchen at 16; years in ryotei led to running a tempura counter inside one, a shop in Nagoya, then the move to Yotsuya to show the craft to the world. The site claims its tempura leaves no oil on the paper over a 2½-hour course, and that only the kuruma prawn never changes. Diners in September 2026 marvelled at the eggplant and at sea urchin fried bare in batter. The way in for most people is the bara tendon: young chefs fry a bowl of shrimp, anago, whitebait and vegetables for ¥5,500 in 35-minute seatings, light and crisp for most, a little oily for one. The course is hard to book; the tendon is booked on Tabelog.",
    chef_bio: { chef_name: '楠忠師 (Kusunoki)', roles: ['Founder, representative director and lead fryer of 株式会社くすのき (company listing; official site: "代表であり、代表職人でもある楠")'], origin: 'Started in a kappo restaurant at 16, years in ryotei, then a tempura counter inside a ryotei, a shop in Kita-ku, Nagoya, and the move to Yotsuya (official site).',
      background: 'Per the official site: entered the trade at a kappo at 16; trained for decades in ryotei and, as sous-chef, was given the tempura counter inside one; reworked tempura from first principles of Japanese cuisine; a regional TV appearance in Nagoya (Kita-ku) filled the shop for weeks; moved to Yotsuya to take tempura to the world; sold bento during the April 2020 closure; a third fryer, 橋本祐輔, debuted after the founder and 市原; the company marked 20 years on 13 September 2023. Company listing (careermap): 代表取締役 楠忠師 (furigana クスノキタダシ), 株式会社くすのき, 四谷1-9-4 フローラ四谷1階, sister shop 天婦羅くすのき 中目黒, 12 employees (October 2025). Awards on the site: Tabelog Silver 2020–2025, Tempura 100 2023 and 2025, OAD Japan Top Restaurants 17th (2024) and 16th (2025); Tabelog also lists Silver 2026 and Tempura 100 2022. Reviewers call the founder "Master Kusunoki" and mention courses fried by "Chef Hashimoto".',
      philosophy: '"しあわせの源" — to spread happiness through good food and a pleasant space; "天ぷらは世界に通じる料理" (official site).', specialty: 'Tempura course; bara tendon.',
      anecdotes: [
        { text: '"Inside the restaurant, there\'s an old-fashioned refrigerator that uses ice… Instead of wrapping it in seaweed, they fry the sea urchin directly in the batter." — September 2026, the course fried by the master.', source: R + 'B536347718/' },
        { text: '"The bara-age included sweet shrimp, edamame, asparagus, whitebait, small shrimp, anago (conger eel), and eggplant… I finished everything in just over 20 minutes. Normally, this place would cost around JPY 100,000, but I got a small glimpse of it today." — September 2026, bara tendon.', source: R + 'B535018678/' },
        { text: '"The Bara Tendon didn\'t quite exceed my expectations and felt a bit oily." — September 2026.', source: R + 'B535429883/' },
      ],
      japanese_sources_summary: '公式サイト (kusunoki-official.co.jp): しあわせの源、最大の特徴は「油ぎれ」(約2時間半のコースで敷紙に油染みがつかない)、年中出す定番ネタは車海老のみ、豊洲市場から選りすぐりの素材、食べログシルバー2020〜2025年、百名店2023・2025年、OAD 2024年17位・2025年16位、代表であり代表職人の楠は16歳で割烹料理店へ、料亭で修行を積み、副料理長として料亭の一角の天ぷら店を任される、名古屋市北区で地方番組に出演、東京四谷へ移転、2020年4月の休業中は弁当、橋本祐輔が3人目の揚げ手、2023年9月13日に創業20周年。キャリアマップ: 株式会社くすのき、代表取締役 楠忠師 (クスノキタダシ)、四谷1-9-4 フローラ四谷1階、天婦羅くすのき 中目黒、従業員12人。食べログ (店舗会員): 完全予約制、コースは水〜金18:00〜、土13:00〜、天丼は土18:00〜19:40、月曜・日曜休み、6席 (カウンター)、2018年6月14日オープン。口コミ(2026年8月〜10月): 弟子が揚げるばら天丼5,500円 (一品付き5,940円)、35分、ご飯200g、台湾茶、檜のカウンター、氷の冷蔵庫、うにの天ぷら。',
      confidence: 'medium', sources: [SITE, RECRUIT, CM, TB, R + 'B455526089/', R + 'B534170201/', R + 'B534193349/', R + 'B534210662/', R + 'B535018678/', R + 'B535025224/', R + 'B535427419/', R + 'B535429883/', R + 'B535573823/', R + 'B536347718/', R + 'B537128662/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only (Omakase for the course, Tabelog for the tendon); each dish explained at the counter (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-9-4 フローラ四谷 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site, company listing (October 2025) and shop-maintained Tabelog listing (Silver 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.685998, 139.728068); cross-checked: GSI 東京都新宿区四谷一丁目9番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534193349/', R + 'B537128662/', R + 'B535025224/'],
    price_note: 'Tendon prices from August–September 2026 reviews; course level from the Tabelog budget.', last_checked: TODAY, items: [
      it('', '', 'Kusunoki bara tendon (apprentice-fried, 35-minute seating)', '¥5,500', 'Tendon', 'no', 'no', 'August 2026 review.', 'bara_tendon'),
      it('', '', 'One dish + bara tendon', '¥5,940', 'Tendon', 'no', 'no', 'September 2026 review.', 'tendon_plus'),
      it('', '', 'Taiwanese tea (small glass)', '¥880', 'Drinks', '', '', 'September 2026 review.', 'taiwan_tea'),
      it('', '', 'Tempura course', '¥100,000', 'Course', 'no', 'no', 'Tabelog budget; approximate.', 'course'),
    ] }, {
    cuisine: '天ぷらと本格的な日本料理を合わせたコース (会社情報): 約2時間半のコースで敷紙に油染みがつかない「油ぎれ」が自慢、年中出す定番ネタは車海老だけで、ほかは豊洲市場のその日の素材 (公式サイト)・コースは約10万円 (食べログの予算。2026年9月の客は8万円以上と): たとえばとうもろこしのスープ、甘えび、とうもろこし、舞茸、秋なす、銀杏、鰻、蟹、海苔で巻かずに衣だけで揚げたうに、刺身と天ぷらのあわび (2026年9月)・くすのきのばら天丼5,500円、一品付きで5,940円 (卵豆腐のからすみのせ、もずくのスープ、漬物)。若手が揚げる35分の枠で、車海老や甘えび、小えび、穴子、白魚、なす、万願寺唐辛子、アスパラ、さわら、舞茸など季節で替わる。ご飯は200gで増減可、柚子とごまの七味 (2026年の口コミ)・台湾茶880円ほどから、店主が台湾で仕入れる (2026年9月)。ワイン、日本酒',
    neighborhood: '四谷1-9-4 フローラ四谷1F、のれんも目立つ看板もない。四ツ谷駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。小麦の衣の天ぷらに天丼のたれ。',
    vegan_detail: 'ヴィーガンではない。どのコースにも丼にも車海老、魚、貝。卵豆腐には出汁のジュレ (2026年9月)。',
    notes: '[天ぷら・四谷、6席のシルバーのカウンターと弟子の丼] のれんも看板もない、檜のカウンター6席と昔ながらの氷の冷蔵庫。創業者の楠さんや上の揚げ手が揚げる10万円ほどのコースは、2020年から毎年食べログのシルバー。会社の物語は16歳の割烹に始まり、料亭での長い修行、料亭の中の天ぷら店を任され、名古屋の店を経て、天ぷらを世界に伝えようと四谷へ。サイトによれば2時間半のコースで敷紙に油がつかず、変わらないのは車海老だけ。2026年9月の客は秋なすと、衣だけで揚げたうにに驚いた。多くの人の入口はばら天丼で、若い料理人が海老、穴子、白魚、野菜を揚げた丼を35分の枠で5,500円。ほとんどの人には軽くさっくりで、ひとりには少し油っぽかった。コースは予約が取りにくい。天丼は食べログで予約。',
  });
}

// ================================================================ IL VECCHIO PLATANO
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13052783/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:30', '21:30']);
  put({
    id: 'tokyo_il_vecchio_platano_yotsuya', name: 'イル ベッキオ プラタノ (IL VECCHIO PLATANO)', category: 'OMNI',
    lat: 35.685381, lng: 139.728339, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The pasta is homemade fresh pasta and bread comes with the meals; dinner courses also have a main dish and salads and soups, but nothing gluten-free is mentioned.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu is handwritten; soups (e.g. pumpkin, cabbage consommé) and salads come with the sets, but no vegan dish is named and the consommé was served with prosciutto grissini.',
    hours_raw: 'Mon–Sat 11:30–14:00 and 17:30–21:30; closed Sunday (Tabelog), though a November 2025 diner ate a late Sunday lunch here. Reservations taken; private room and private hire possible (Tabelog). 16 seats including a counter (Tabelog; April 2025). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-11-19, 小山ビル 2F, on a quiet street away from Shinmichi-dōri — a few minutes from Yotsuya Stn (JR, Tokyo Metro)',
    cuisine: 'Small Italian restaurant with homemade fresh pasta and a handwritten menu (2025–26 reviews) · lunch: pasta from four with soup or salad ¥1,300 (August and November 2025), e.g. Odawara fish with broccoli in olive oil, Hiroshima oyster and zucchini cream; "Casa" lunch with salad, soup, homemade bread and dessert (cold tuna and eggplant pasta +¥450, August 2026); "Piano" course ¥2,200 with pudding (February 2026); a ladies\' set with pasta, salad, dessert and coffee (April 2025) · dinner course ¥4,400: salad and soup, pasta, a main and dessert, coffee extra (September 2026); à la carte such as a shrimp appetizer and gnocchi with gorgonzola (December 2025); lasagna · desserts: caramelised pudding, cinnamon pudding, watermelon jelly',
    website: null, gmaps: gm('IL VECCHIO PLATANO 四谷'), menu_url: null,
    notes: "[Italian · Yotsuya, fresh pasta on a quiet back street] A 16-seat second-floor trattoria on a calm street a few minutes from the station, away from the Shinmichi-dōri crowds, with a handwritten menu and homemade fresh pasta. Lunch is a pasta from four with soup or salad for ¥1,300, or a fuller set with homemade bread and dessert; at night a ¥4,400 course runs from salad and soup through pasta and a main to dessert, and one September 2026 diner was surprised with flowers for a birthday. Reviews of 2025–26 like the owner-chef's attentive service, the gnocchi with gorgonzola and the pudding; one February 2026 diner found the fresh pasta overcooked and another found the course bland, and a May 2026 diner was served something different from the handwritten sign. Closed Sundays on the listing.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (reviews, November–December 2025)'], origin: null,
      background: 'No source names the owner-chef. "Both the owner-chef and the female staff member… left a positive impression, and the handwritten menu added a warm touch" (November 2025); "the owner provided attentive service" (November 2025); "The owner was a very nice person" (December 2025). Corporate-member Tabelog listing with no opening date given.',
      philosophy: null, specialty: 'Homemade fresh pasta; pudding.',
      anecdotes: [
        { text: '"I ordered the olive oil pasta with local fish from Odawara and broccoli, accompanied by a consomme soup with napa cabbage. The soup came with grissini sprinkled with prosciutto." — November 2025, ¥1,300 lunch.', source: R + 'B518784320/' },
        { text: '"The dinner course, which includes dessert, is priced at JPY 4,400… they surprised me for my birthday with beautiful flowers and a lovely presentation!" — September 2026.', source: R + 'B536344524/' },
        { text: '"The homemade pasta didn\'t quite meet expectations; it seemed overcooked and had a grainy texture." — February 2026, ¥2,200 lunch.', source: R + 'B523373295/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): イル ベッキオ プラタノ (IL VECCHIO PLATANO)、イタリアン、四谷1-11-19 小山ビル2F、月〜土11:30〜14:00・17:30〜21:30、日曜休み、16席、個室あり、貸切可、カード可。口コミ(2020年11月〜2026年9月): 手書きのメニュー、自家製の生パスタ、ランチはパスタとスープかサラダで1,300円、Odawara の魚とブロッコリー、Hiroshima の牡蠣とズッキーニのクリーム、ピアノコース2,200円、カーサランチ、夜のコース4,400円、ゴルゴンゾーラのニョッキ、プリン、誕生日の花、オーナーシェフ。',
      confidence: 'low', sources: [TB, R + 'B432689477/', R + 'B482370289/', R + 'B507742312/', R + 'B511889533/', R + 'B517637667/', R + 'B518784320/', R + 'B519567573/', R + 'B523373295/', R + 'B523376356/', R + 'B528607381/', R + 'B533271428/', R + 'B536344524/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Handwritten Japanese menu; check the dish when ordering (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-11-19 小山ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.685381, 139.728339); cross-checked: GSI 東京都新宿区四谷一丁目11番地 (lot) 73m. Sushi Sho (tokyo_sushi_sho_yotsuya, address_ja "東京都新宿区四谷1-11 陽臨堂ビル 1F") is 23 m away in a different building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B518784320/', R + 'B523376356/', R + 'B536344524/'],
    price_note: 'Prices from 2025–26 reviews; Tabelog lists no menu.', last_checked: TODAY, items: [
      it('', '', 'Pasta lunch with soup or salad', '¥1,300', 'Lunch', 'no', 'ask', 'August and November 2025 reviews.', 'pasta_lunch'),
      it('', '', 'Piano lunch course (with pudding)', '¥2,200', 'Lunch', 'no', 'ask', 'February 2026 reviews.', 'piano_course'),
      it('', '', 'Dinner course (salad, soup, pasta, main, dessert)', '¥4,400', 'Course', 'ask', 'ask', 'September 2026 review.', 'dinner_course'),
    ] }, {
    cuisine: '自家製の生パスタと手書きのメニューの小さなイタリアン (2025〜26年の口コミ)・ランチ: 4種から選ぶパスタにスープかサラダで1,300円 (2025年8月・11月)。たとえば Odawara の魚とブロッコリーのオイルソース、Hiroshima の牡蠣とズッキーニのクリーム。サラダ、スープ、自家製パン、デザート付きの「カーサ」ランチ (まぐろとなすの冷製パスタは +450円、2026年8月)、プリン付きの「ピアノ」コース2,200円 (2026年2月)、パスタ、サラダ、デザート、コーヒーのレディースセット (2025年4月)・夜のコース4,400円: サラダとスープ、パスタ、メイン、デザート、コーヒーは別料金 (2026年9月)。アラカルトでえびの前菜、ゴルゴンゾーラのニョッキ (2025年12月)、ラザニア・デザート: カラメルのプリン、シナモンのプリン、すいかのゼリー',
    neighborhood: '四谷1-11-19 小山ビル2F、新道通りから離れた静かな通り。四ツ谷駅 (JR、東京メトロ) から数分',
    gf_detail: '要確認。パスタは自家製の生パスタで、食事にはパンが付く。夜のコースにはメインやサラダ、スープもあるが、グルテンフリーの説明はない。',
    vegan_detail: '要確認。メニューは手書きで、セットにはスープ (かぼちゃ、白菜のコンソメなど) とサラダが付くが、ヴィーガンの料理名はなく、コンソメには生ハムのグリッシーニが添えられていた。',
    notes: '[イタリアン・四谷、静かな裏通りの生パスタ] 駅から数分、新道通りのにぎわいから離れた静かな通りのビル2階にある16席のトラットリア。手書きのメニューと自家製の生パスタ。ランチは4種から選ぶパスタにスープかサラダで1,300円、自家製パンとデザートの付くセットも。夜は4,400円のコースでサラダとスープからパスタ、メイン、デザートまで。2026年9月には誕生日に花のサプライズを受けた客も。2025〜26年の口コミではオーナーシェフの細やかな接客、ゴルゴンゾーラのニョッキ、プリンが好評。一方、2026年2月には生パスタがゆですぎだったという客と、味がぼやけていたという客がいて、2026年5月の客は手書きの看板と違う料理が出たという。食べログでは日曜休み。',
  });
}

save();
