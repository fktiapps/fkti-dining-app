// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 21.
//   + フルーツカフェ pomp Fruit Cafe pomp (fruit kakigori and parfaits, famous for Okayama white peach; since 2019)
//   + そよいち Soyoi ichi (counter yoshoku carrying on Yoshoku Kiraku's beef cutlet and pork sauté; Tabelog Yoshoku 100 2020, 2022)
//   + 365 サロンゴカフェ 365 Salongo Cafe (rice-bowl lunch with daily side dishes, evening music bar)
//   + 粗挽きそば 手打ち 日本橋福田雅之 Arabiki Soba Teuchi Nihonbashi Fukuda Masayuki (hand-made soba, breakfast from 7:00)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02): the first four,
//   215, 216, 218 and 224 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address (2-21-4, 1-9-6, 1-8-2, 3-1-9). Nearest records: Nihonbashi Sonoji
//   13 m from pomp, Pizza Tane 18 m from Fukuda Masayuki — different addresses, own pins. 中華麺店 喜楽 in data is a different
//   shop from the Yoshoku Kiraku that Soyoi ichi carries on.
//   Chain check. All four are single shops in the sources.
//   Omitted: a reviewer's guess at the Soyoi ichi owner's age from appearance, a reviewer's remark on the Salongo master's
//   looks, and pomp's email address in the Tabelog listing (booking is noted as "by email or Instagram DM").
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ フルーツカフェ pomp
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13237542/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['13:30', '19:30']); const WE = day(['13:00', '18:30']);
  put({
    id: 'tokyo_fruit_cafe_pomp_ningyocho', name: 'フルーツカフェ pomp (Fruit Cafe pomp)', category: 'OMNI',
    lat: 35.686125, lng: 139.784563, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kakigori is shaved ice with fruit and syrups, but parfaits include granola (2026 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: milk syrups, whipped cream and ice cream on most items; ask about fruit-only syrups.',
    hours_raw: 'Mon–Fri and the days before and after holidays 13:30–19:30 (last order 19:00); Sat, Sun and holidays 13:00–18:30 (last order 18:00); changes and typhoon closures posted on Instagram and X (Tabelog). Reservations by email or Instagram DM; please be on time (Tabelog; 2026 reviews). Cards, transport IC, Edy, nanaco, WAON, iD, QUICPay, PayPay and other QR (Tabelog). 14 counter seats (Tabelog). Opened 29 July 2019 (Tabelog). Featured on the TV show ZIP! (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-21-4, 加藤ビル 1F — 2 min from Ningyocho Stn exit A1, 6 min from Suitengumae Stn exit 7',
    cuisine: 'Fruit café of kakigori and parfaits piled with seasonal fruit (Tabelog; 2026 reviews) · Okayama white peach milk kakigori, small ¥2,200, large with a whole peach (August 2026); Earl Grey white peach kakigori ¥1,980 (August 2026); peach chai kakigori; Shine Muscat kakigori with homemade syrup (July 2026) · peach parfait with a whole Okayama Shimizu Hakuto peach over vanilla ice cream, granola and acai; two-peach parfait with a drink about ¥4,900 (July–August 2026) · iced coffee ¥700 (August 2026)',
    website: TB, gmaps: gm('フルーツカフェ pomp 人形町'), menu_url: null,
    notes: "[Sweets · Ningyocho, peach kakigori and whole-peach parfaits] A fourteen-seat counter café devoted to fruit, best known for its Okayama white-peach season: fluffy kakigori under heaps of sliced peach with milk syrup (¥2,200 small), and parfaits crowned with a whole Shimizu Hakuto peach over ice cream, granola and acai (about ¥4,900 with a drink for two peaches). Out of peach season there are other fruits, such as Shine Muscat with homemade syrup. Diners call it a splurge — prices are high — but the fruit quality is the point. Book by Instagram DM or email, especially in peach season; weekday afternoons can be walk-in. It has appeared on ZIP!. Opens from 13:00 or 13:30.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 29 July 2019 (Tabelog). The Okayama white-peach menu is the shop\'s most popular (Tabelog shop text). Featured on ZIP!, with acrylic stands from the visit on display (Tabelog; July 2026).',
      philosophy: '"Luxuriously piled with the finest fruits. Fruits are the main attraction." (Tabelog shop text)', specialty: 'Okayama white peach kakigori and parfaits.',
      anecdotes: [
        { text: '"At the top, there’s a whole juicy peach, creating an impressive visual impact." — July 2026, peach parfait.', source: R + 'B533139723/' },
        { text: '"The peaches were of the Okayama Shimizu Hakuto variety and were medium-sized." — August 2026.', source: R + 'B533456697/' },
        { text: '"However, it is a bit pricey, so I can\'t come here too often." — July 2026.', source: R + 'B533047825/' },
      ],
      japanese_sources_summary: '食べログ: フルーツカフェ pomp、カフェ、かき氷、日本橋人形町2-21-4 加藤ビル 1F、人形町駅A1出口から徒歩2分、月〜金・祝前日・祝後日13:30〜19:30、土日祝13:00〜18:30、営業の変更は Instagram と X で、予約はメールか Instagram の DM、カード・電子マネー・QR可、カウンター14席、2019年7月29日オープン、Okayama の白桃のメニューが人気、ZIP! で紹介。口コミ(2026年7月〜9月): 白桃ミルクのかき氷 (小) 2,200円、大は桃が丸ごと、アールグレイ白桃のかき氷1,980円、桃のチャイのかき氷、シャインマスカット、清水白桃を丸ごとのせたパフェ (バニラアイス、グラノーラ、アサイー)、桃2個のパフェとドリンクで約4,900円、値段は高め、平日の昼は予約なしでも入れることも。',
      confidence: 'medium', sources: [TB, R + 'B532860880/', R + 'B533047825/', R + 'B533139723/', R + 'B533456697/', R + 'B533610796/', R + 'B534259099/', R + 'B534752341/', R + 'B535295820/', R + 'B535351153/', R + 'B535570287/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by Instagram DM in peach season; counter only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-21-4 加藤ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated July–September 2026.' },
    pin_source: `Tabelog ${TB} (35.686125, 139.784563); cross-checked: GSI 東京都中央区日本橋人形町二丁目21番4号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533610796/', R + 'B534259099/', R + 'B533456697/'],
    price_note: 'Prices from July–August 2026 reviews (seasonal menu).', last_checked: TODAY, items: [
      it('', '', 'Okayama white peach milk kakigori (small)', '¥2,200', 'Kakigori', 'ask', 'no', 'August 2026; seasonal.', 'peach_kakigori'),
      it('', '', 'Earl Grey white peach kakigori', '¥1,980', 'Kakigori', 'ask', 'no', 'August 2026; seasonal.', 'earlgrey'),
      it('', '', 'Peach parfait (two peaches) with drink', 'about ¥4,900', 'Parfaits', 'no', 'no', 'August 2026; seasonal.', 'parfait'),
      it('', '', 'Iced coffee', '¥700', 'Drinks', 'ask', 'ask', 'August 2026.', 'coffee'),
    ] }, {
    cuisine: '旬の果物をたっぷりのせたかき氷とパフェの果物のカフェ (食べログ、2026年の口コミ)・Okayama の白桃ミルクのかき氷、小2,200円、大は桃が丸ごと (2026年8月)、アールグレイ白桃のかき氷1,980円 (2026年8月)、桃のチャイのかき氷、自家製シロップのシャインマスカットのかき氷 (2026年7月)・Okayama の清水白桃を丸ごとのせ、バニラアイス、グラノーラ、アサイーを重ねた桃のパフェ、桃2個のパフェとドリンクで約4,900円 (2026年7月〜8月)・アイスコーヒー700円 (2026年8月)',
    neighborhood: '日本橋人形町2-21-4 加藤ビル 1F。人形町駅A1出口から徒歩2分、水天宮前駅7番出口から徒歩6分',
    gf_detail: '要確認。かき氷は果物とシロップだが、パフェにはグラノーラ (2026年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: ほとんどにミルクのシロップ、生クリーム、アイス。果物だけのシロップは要確認。',
    notes: '[甘味・人形町、桃のかき氷と丸ごとの桃のパフェ] 果物を主役にしたカウンター14席のカフェで、いちばん知られているのはOkayama の白桃の季節。ふわふわのかき氷に薄切りの桃を山盛りにしてミルクのシロップ (小2,200円)、パフェは清水白桃を丸ごとのせ、アイス、グラノーラ、アサイーを重ねる (桃2個とドリンクで約4,900円)。桃の季節以外はシャインマスカットの自家製シロップなどほかの果物も。値段は高めでぜいたくだが、果物の質が目当て。桃の季節は Instagram の DM かメールで予約を。平日の昼は予約なしで入れることも。ZIP! で紹介された。13時か13時半から。',
  });
}

// ================================================================ そよいち
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13056047/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '14:00'], ['17:30', '20:00']);
  put({
    id: 'tokyo_soyoichi_ningyocho', name: 'そよいち (Soyoi ichi)', category: 'OMNI',
    lat: 35.684381, lng: 139.782666, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded beef and pork cutlets, menchi katsu and croquettes; the pork sauté is finished with soy sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef and pork dishes, served with tonjiru (pork miso soup).',
    hours_raw: 'Tue–Sat 11:00–14:00 and 17:30–20:00; closed Sunday, Monday and other irregular days (Tabelog). No reservations; queues by noon (2026 reviews). Cards, e-money, PayPay and au PAY; no service charge (Tabelog). 15 counter seats around the kitchen; non-smoking (Tabelog). Opened 7 October 2008 (Tabelog). Free rice refills (2026 reviews).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-9-6, in a back alley near Yamatomo — 2 min from Ningyocho Stn (Hibiya Line), 3 min from Suitengumae Stn',
    cuisine: 'Counter yoshoku carrying on the recipes of Yoshoku Kiraku, founded 1946 (2026 reviews; Tabelog menu) · the two signatures: beef cutlet ¥2,200 (Tabelog menu, 2025; ¥2,400 in an October 2026 review) and pork sauté ¥2,200, flambéed with butter and soy sauce, garlic optional, with macaroni salad and cabbage (2025–26) · pork cutlet ¥2,000; hamburg steak ¥1,550; hayashi rice ¥1,800 (Tabelog menu, 2025) · menchi katsu set ¥1,400, 10 a day (September 2026); katsu curry ¥1,450 after 13:00, 10 a day (September 2026); croquettes; mini curry · sets with tonjiru and free rice refills · sake and wine',
    website: TB, gmaps: gm('そよいち 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Yoshoku · Ningyocho, the beef cutlet and pork sauté of old Kiraku] A fifteen-seat counter yoshoku in a back alley, opened in 2008 by the daughter of the owner of Yoshoku Kiraku (founded 1946) to carry on its dishes (October 2026). The owner runs a fast, flawless kitchen in front of you (September 2026). Everyone comes for two plates: a crisp, tender beef cutlet and a thick pork sauté flambéed in butter and soy sauce, with garlic if you like, each about ¥2,200 with pork miso soup and free rice refills. Ten servings a day of menchi katsu and, after 13:00, katsu curry. A Tabelog Yoshoku 100 pick in 2020 and 2022; queues form by noon. One diner wished for more sauce choices than chuno and Worcestershire (October 2026).",
    chef_bio: { chef_name: null, roles: ['Owner-chef, the daughter of the previous owner of Yoshoku Kiraku (October 2026 review); "the chef (the owner)" (September 2026 review)'], origin: null,
      background: 'Opened 7 October 2008 (Tabelog), carrying on the flavours of Yoshoku Kiraku, founded in 1946 (September, October 2026 reviews); the Tabelog menu describes the pork sauté as carrying on the same flavour from the previous generation of Kiraku. Selected for Tabelog Yoshoku 100 in 2020 and 2022 (Tabelog).',
      philosophy: null, specialty: 'Beef cutlet; pork sauté.',
      anecdotes: [
        { text: '"I watched as the efficient chef (the owner) prepared the dishes with … usual flawless operation" — September 2026.', source: R + 'B507928811/' },
        { text: '"Suddenly, there was a burst of flames, and it turned out to be the pork sauté being flambéed." — October 2026.', source: R + 'B536916331/' },
        { text: '"The previous owner\'s daughter, who now runs the place, is renowned for … delicious Western cuisine" — October 2026.', source: R + 'B537344215/' },
      ],
      japanese_sources_summary: '食べログ: そよいち、洋食、洋食百名店2020・2022、日本橋人形町1-9-6、人形町駅から徒歩2分、火〜土11:00〜14:00、17:30〜20:00、日・月休み、不定休、予約不可、カード・電子マネー・QR可、サービス料なし、カウンター15席、禁煙、2008年10月7日オープン、ビーフカツ2,200円、ポークカツ2,000円、ポークソテー2,200円 (先代の Kiraku の味を受け継ぐ)、ハンバーグ1,550円、ハヤシライス1,800円、豚汁とご飯のおかわり。口コミ(2026年9月〜10月): 1946年創業の洋食 Kiraku の味を継ぐ、先代の娘さんが営む、手際のよい厨房、フランベするポークソテー、ビーフカツ (2,400円という声も)、10食限定のメンチカツ定食1,400円、13時からのカツカレー1,450円、昼は行列、ソースの種類がもう少しほしいという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B507928811/', R + 'B513338293/', R + 'B536106943/', R + 'B536266390/', R + 'B536916331/', R + 'B537344215/', R + 'B537429720/', R + 'B537468415/', R + 'B537948862/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter only; queue at lunch; say if you want garlic on the pork sauté.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-9-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB} (35.684381, 139.782666); cross-checked: GSI 東京都中央区日本橋人形町一丁目9番6号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B513338293/', R + 'B536106943/'],
    price_note: 'Tabelog menu updated 2025-07-27; limited items from September 2026 reviews (beef cutlet ¥2,400 in an October 2026 review).', last_checked: TODAY, items: [
      it('', '', 'Beef cutlet', '¥2,200', 'Mains', 'no', 'no', 'Tabelog menu, 2025.', 'beef_cutlet'),
      it('', '', 'Pork sauté', '¥2,200', 'Mains', 'no', 'no', 'Tabelog menu, 2025; soy sauce.', 'pork_saute'),
      it('', '', 'Hamburg steak', '¥1,550', 'Mains', 'no', 'no', 'Tabelog menu, 2025.', 'hamburg'),
      it('', '', 'Menchi katsu set (10 a day)', '¥1,400', 'Sets', 'no', 'no', 'September 2026.', 'menchi'),
      it('', '', 'Katsu curry (after 13:00, 10 a day)', '¥1,450', 'Sets', 'no', 'no', 'September 2026.', 'katsucurry'),
    ] }, {
    cuisine: '1946年創業の洋食 Kiraku の味を継ぐカウンターの洋食 (2026年の口コミ、食べログのメニュー)・二枚看板: ビーフカツ2,200円 (食べログのメニュー、2025年。2026年10月の口コミでは2,400円) とポークソテー2,200円、バターと醤油でフランベし、にんにくはお好みで、マカロニサラダとキャベツ添え (2025〜26年)・ポークカツ2,000円、ハンバーグ1,550円、ハヤシライス1,800円 (食べログのメニュー、2025年)・1日10食のメンチカツ定食1,400円 (2026年9月)、13時以降1日10食のカツカレー1,450円 (2026年9月)、コロッケ、ミニカレー・定食は豚汁付きでご飯おかわり自由・日本酒とワイン',
    neighborhood: '日本橋人形町1-9-6、Yamatomo の近くの裏路地。人形町駅 (日比谷線) から徒歩2分、水天宮前駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: 衣のビーフカツ、ポークカツ、メンチカツ、コロッケ。ポークソテーは醤油で仕上げる。',
    vegan_detail: 'ヴィーガンではない: 牛肉と豚肉の料理に豚汁。',
    notes: '[洋食・人形町、旧 Kiraku のビーフカツとポークソテー] 裏路地にあるカウンター15席の洋食店で、1946年創業の洋食 Kiraku の先代の娘さんが、その味を継いで2008年に開いた (2026年10月)。目の前の厨房を手際よく切り盛りする (2026年9月)。目当てはふたつの皿で、サクッとやわらかいビーフカツと、バターと醤油でフランベする厚いポークソテー (にんにくはお好みで)。どちらも約2,200円で豚汁付き、ご飯はおかわり自由。メンチカツと、13時以降のカツカレーは各1日10食。2020年と2022年の食べログ洋食百名店で、正午には行列。ソースが中濃とウスターだけなのでもう少し選びたいという声も (2026年10月)。',
  });
}

// ================================================================ 365 サロンゴカフェ
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13115099/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.cafe-salongo.com';
  const MON = day(['11:00', '14:00']); const LB = day(['11:00', '14:00'], ['18:00', '24:00']); const WED = day(['11:00', '14:00'], ['18:30', '24:00']); const WE = day(['18:00', '24:00']);
  put({
    id: 'tokyo_365_salongo_cafe_ningyocho', name: '365 サロンゴカフェ (365 Salongo Cafe)', category: 'OMNI',
    lat: 35.684394, lng: 139.782857, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The lunch side dishes change daily (curries, stews, salads) and sandwiches are on the menu; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: daily side dishes include chicken stew and minced meat; vegetable sides appear (2022 reviews) — ask.',
    hours_raw: 'Lunch Mon–Fri 11:00–14:00; evenings Tue, Thu and Fri 18:00–24:00, Wed 18:30–24:00, Sat and Sun 18:00–24:00 (Tabelog). Reservations accepted; private hire up to 20 (Tabelog). No credit cards at lunch; cards in the evening (Tabelog). 17 seats (Tabelog). Non-smoking at lunch; smoking permitted during bar time (Tabelog). Mostly takeaway at lunch, with tables to eat in (2022–25 reviews). Live music events in the evening (July 2025).',
    hours: { 0: MON, 1: LB, 2: WED, 3: LB, 4: LB, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-8-2, 谷津ビル 1F, off Amazake Yokocho — 3 min from Ningyocho and Suitengumae Stns',
    cuisine: 'Café with a rice-bowl lunch and a music bar at night (Tabelog; 2017–25 reviews) · lunch "bukkake rice": choose from four daily side dishes over rice — two ¥700, three ¥750, all four ¥800 (Tabelog menu, 2020); a four-item lunch box ¥900 (June 2025) · side dishes such as green curry, yellow curry, Malaysian-style chicken stew, spring cabbage with salt kombu, tofu-okra-wakame salad, stir-fried minced meat (2022) · lunch soup ¥100; mozuku from Izena Island, Okinawa with a soft-boiled egg ¥230; daily sandwiches from ¥230 (Tabelog menu, 2020) · evening: drinks and dishes such as moussaka (July 2025)',
    website: SITE, gmaps: gm('365 サロンゴカフェ 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Café · Ningyocho, a rice-bowl lunch counter that turns into a music bar] A small café a few minutes from Ningyocho, where weekday lunch is \"bukkake rice\": pick two, three or all four of the day's side dishes, from coconut curries and a Malaysian chicken stew to salads, piled over rice for well under ¥1,000, mostly taken away by office workers (2022–25 reviews). In the evening it becomes a bar with live music, open until midnight, where one 2025 visitor came for a friend's gig and stayed for the moussaka. The master is kind and welcoming (2017). One 2022 diner found some sides under-seasoned. Lunch is cash only; smoking is allowed at night. Recent reviews are few, so check before going.",
    chef_bio: { chef_name: null, roles: ['The master (unnamed; "a kind heart", December 2017 review)'], origin: null,
      background: 'A café with lunch bento and a music bar at night, hosting live performances (Tabelog; July 2025). The Tabelog lunch menu dates from 2020; reviews run from 2017 to 2025.',
      philosophy: null, specialty: 'Bukkake rice with daily side dishes.',
      anecdotes: [
        { text: '"I ordered the \'4 Dishes (All Included)\' (JPY 800)." — April 2022: green curry, Malaysian-style chicken stew, spring cabbage with salt kombu, tofu-okra-wakame salad.', source: R + 'B447733731/' },
        { text: '"I visited for a friend\'s live performance for the first time." — July 2025.', source: R + 'B510380044/' },
        { text: '"The stir-fried minced meat was a classic version, and while the flavor was decent, it could have been better seasoned." — July 2022.', source: R + 'B452077249/' },
      ],
      japanese_sources_summary: '食べログ: 365 サロンゴカフェ、カフェ、カレー、創作料理、日本橋人形町1-8-2 谷津ビル 1F、人形町駅・水天宮前駅から徒歩3分、昼は月〜金11:00〜14:00、夜は火曜・木曜・金曜18:00〜24:00、水曜18:30〜24:00、土日18:00〜24:00、予約可、貸切20名まで、昼はカード不可、17席、昼は禁煙・バーの時間は喫煙可、ホームページ cafe-salongo.com、昼のぶっかけご飯 (日替わりのおかず2品700円・3品750円・4品800円、2020年のメニュー)。口コミ(2017年9月〜2025年10月): 持ち帰りが多い、グリーンカレー、マレーシア風チキンシチュー、イエローカレー、4品の弁当900円 (2025年6月)、夜はライブ、ムサカ、味付けが物足りないおかずもという声。',
      confidence: 'low', sources: [TB, SITE, TB + 'dtlmenu/', R + 'B293062882/', R + 'B295053387/', R + 'B306852209/', R + 'B426847712/', R + 'B447733731/', R + 'B452077249/', R + 'B504680655/', R + 'B508643477/', R + 'B510380044/', R + 'B514831979/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the day\'s side dishes; lunch cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-8-2 谷津ビル 1F',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog official listing; the latest reviews are from June–October 2025.' },
    pin_source: `Tabelog ${TB} (35.684394, 139.782857); cross-checked: GSI 東京都中央区日本橋人形町一丁目8番2号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB + 'dtlmenu/', R + 'B508643477/'],
    price_note: 'Tabelog lunch menu dated 2020-02-20; a June 2025 lunch box cost ¥900.', last_checked: TODAY, items: [
      it('', '', 'Bukkake rice, four side dishes', '¥800', 'Lunch', 'ask', 'ask', 'Tabelog menu, 2020 (¥900 lunch box, June 2025).', 'bukkake4'),
      it('', '', 'Bukkake rice, two side dishes', '¥700', 'Lunch', 'ask', 'ask', 'Tabelog menu, 2020.', 'bukkake2'),
      it('', '', 'Mozuku with soft-boiled egg', '¥230', 'Lunch', 'ask', 'no', 'Tabelog menu, 2020.', 'mozuku'),
    ] }, {
    cuisine: '昼はご飯のぶっかけ、夜は音楽のバーになるカフェ (食べログ、2017〜25年の口コミ)・昼の「ぶっかけご飯」: 日替わりのおかず4品から選んでご飯にのせる、2品700円、3品750円、4品全部800円 (食べログのメニュー、2020年)、4品の弁当900円 (2025年6月)・おかずはグリーンカレー、イエローカレー、マレーシア風チキンシチュー、春キャベツの塩昆布和え、豆腐とオクラとわかめのサラダ、ひき肉炒めなど (2022年)・昼のスープ100円、Izena Island の早採りもずくと半熟卵230円、日替わりのサンドイッチ230円から (食べログのメニュー、2020年)・夜は飲み物とムサカなどの料理 (2025年7月)',
    neighborhood: '日本橋人形町1-8-2 谷津ビル 1F、Amazake Yokocho から入ったところ。人形町駅・水天宮前駅から徒歩3分',
    gf_detail: '要確認。昼のおかずは毎日替わり (カレー、シチュー、サラダ)、サンドイッチもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: おかずにはチキンシチューやひき肉も。野菜のおかずもある (2022年の口コミ) ので要確認。',
    notes: '[カフェ・人形町、夜は音楽のバーになるご飯の昼のカウンター] 人形町から数分の小さなカフェで、平日の昼は「ぶっかけご飯」。その日のおかずから2品、3品、または4品全部を選んでご飯にのせる。ココナッツのカレーやマレーシア風のチキンシチューからサラダまで1,000円以下で、会社員の持ち帰りが多い (2022〜25年の口コミ)。夜は深夜0時まで開くライブのあるバーになり、2025年には友人のライブに来てムサカを食べた人も。マスターは親切 (2017年)。2022年にはおかずの味付けが物足りないという声も。昼は現金のみ、夜は喫煙可。最近の口コミが少ないので行く前に確認を。',
  });
}

// ================================================================ 粗挽きそば 手打ち 日本橋福田雅之
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13250653/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['11:00', '15:00']); const WK = day(['07:00', '08:45'], ['11:00', '15:00']); const SUN = day(['11:00', '14:30']);
  put({
    id: 'tokyo_fukuda_masayuki_soba_ningyocho', name: '粗挽きそば 手打ち 日本橋福田雅之 (Arabiki Soba Teuchi Nihonbashi Fukuda Masayuki)', category: 'MOM_AND_POP',
    lat: 35.686343, lng: 139.779709, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the ni-hachi and arabiki soba contain wheat, the dipping sauce is soy-based, and there is tempura. 100% buckwheat (ju-wari) soba is offered, but the sauce still has soy (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba sauce made with bonito dashi; duck, pork and fish toppings.',
    hours_raw: 'Mon 11:00–15:00; Tue–Fri breakfast 07:00–08:45 and lunch 11:00–15:00; Sun and holidays 11:00–14:30, not every week; closed Saturday (Tabelog). Evenings by reservation only (October 2026). Opening days posted on the website and LINE (Tabelog). No reservations for lunch; orders are taken while you wait and tables are shared (October 2026). QR codes accepted (PayPay, d Barai, au PAY); no cards or e-money (Tabelog). 6 seats: a table for four and one for two (October 2026). Non-smoking (Tabelog). Arabiki soba can sell out by a late lunch (December 2025).',
    hours: { 0: MON, 1: WK, 2: WK, 3: WK, 4: WK, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-1-9, 小島ビル 1F, in a back alley — 3 min from Ningyocho Stn exit A5 (Asakusa Line)',
    cuisine: 'Hand-made soba in three styles — thick, coarse-ground arabiki; ju-wari (100% buckwheat); ni-hachi (2025–26 reviews) · arabiki soba, 300 g, ¥1,000 (October 2026) · maitake tempura seiro ¥1,350; ju-wari soba with kakiage rice bowl ¥1,400; arabiki soba with three tempura; kakiage soba; duck soba; tororo soba; chilled special bukkake soba (October 2026) · breakfast sets with rice, salad, onsen egg and soba-yu: ju-wari soba with pork-belly dipping sauce ¥1,300, duck seiro with arabiki soba ¥1,100 (December 2025, October 2026) · salmon and shirasu rice bowl (October 2026) · sake',
    website: TB, gmaps: gm('粗挽きそば 手打ち 日本橋福田雅之'), menu_url: null,
    notes: "[Soba · Ningyocho, coarse-ground hand-made soba, breakfast from 7 a.m.] A six-seat soba shop in a back alley, named for its owner Masayuki Fukuda, who worked at a milling company in Tochigi before making soba (April 2025). The draw is arabiki soba: thick, rustic, coarse-ground noodles with a deep buckwheat flavour, a generous 300 g for ¥1,000. Ju-wari (all-buckwheat) and ni-hachi are also offered, with tempura, duck or tororo. On weekdays it opens at 7:00 for breakfast sets of soba with rice, salad and an onsen egg. Seating is shared and orders are taken in the queue, so the wait is short. No cards or e-money, but QR payment works. Closed Saturdays; evenings by reservation.",
    chef_bio: { chef_name: 'Masayuki Fukuda', roles: ['Owner ("The owner, who has experience working at a milling company in Tochigi Prefecture, is a skilled chef", April 2025 review); the shop bears the name Fukuda Masayuki'], origin: null,
      background: 'Per reviews: the owner worked at a milling company in Tochigi Prefecture (April 2025); the shop is named after the owner (October 2026). Evenings are by reservation only (October 2026).',
      philosophy: null, specialty: 'Arabiki (coarse-ground) soba.',
      anecdotes: [
        { text: '"It comes in a generous 300g portion for just JPY 1000, which is a great value!" — October 2026, arabiki soba.', source: R + 'B536843320/' },
        { text: '"I arrived at 7:10, and out of the six seats, three were already taken." — October 2026, breakfast soba.', source: R + 'B516742563/' },
        { text: '"Since I arrived for a late lunch, the Arabiki Soba was sold out, and only the Ju-wari Soba was available." — December 2025.', source: R + 'B518372867/' },
      ],
      japanese_sources_summary: '食べログ: 粗挽きそば 手打ち 日本橋福田雅之、そば、日本橋人形町3-1-9 小島ビル 1F、人形町駅A5出口から徒歩3分、月曜11:00〜15:00、火〜金7:00〜8:45、11:00〜15:00、日祝11:00〜14:30 (不定)、土曜休み、営業日はホームページと LINE で、予約不可、カード・電子マネー不可、QR可、6席、禁煙、朝食あり。口コミ(2025年4月〜2026年10月): 店主は Tochigi の製粉会社で働いた経験、粗挽きそば300gで1,000円、十割そば、二八そば、舞茸天せいろ1,350円、十割そばとかき揚げ丼1,400円、鴨そば、とろろそば、朝は7時から、十割の肉汁つけそばのセット1,300円、鴨せいろ1,100円、相席、並んでいるうちに注文、夜は予約のみ、粗挽きは売り切れることも。',
      confidence: 'medium', sources: [TB, R + 'B441666565/', R + 'B516742563/', R + 'B518372867/', R + 'B536591996/', R + 'B536843320/', R + 'B536871342/', R + 'B537088045/', R + 'B537725489/', R + 'B538236168/', R + 'B538344057/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order while you queue; shared tables; no cards (QR accepted).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-1-9 小島ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.686343, 139.779709); cross-checked: GSI 東京都中央区日本橋人形町三丁目1番9号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536843320/', R + 'B536871342/', R + 'B537088045/', R + 'B516742563/'],
    price_note: 'Prices from December 2025–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Arabiki soba (300 g)', '¥1,000', 'Soba', 'no', 'no', 'October 2026.', 'arabiki'),
      it('', '', 'Maitake tempura seiro', '¥1,350', 'Soba', 'no', 'no', 'October 2026.', 'maitake'),
      it('', '', 'Ju-wari soba with kakiage rice bowl', '¥1,400', 'Sets', 'no', 'no', 'October 2026.', 'kakiage_don'),
      it('', '', 'Breakfast: ju-wari soba with pork dipping sauce set', '¥1,300', 'Breakfast', 'no', 'no', 'October 2026.', 'breakfast'),
    ] }, {
    cuisine: '3種の手打ちそば、太くて粗挽きの粗挽きそば、十割そば、二八そば (2025〜26年の口コミ)・粗挽きそば300g 1,000円 (2026年10月)・舞茸天せいろ1,350円、十割そばとかき揚げ丼1,400円、粗挽きそばと天ぷら3種、かき揚げそば、鴨そば、とろろそば、冷やし特製ぶっかけそば (2026年10月)・ご飯、サラダ、温泉卵、そば湯付きの朝のセット: 十割そばの豚バラのつけ汁1,300円、粗挽きそばの鴨せいろ1,100円 (2025年12月、2026年10月)・鮭としらすの丼 (2026年10月)・日本酒',
    neighborhood: '日本橋人形町3-1-9 小島ビル 1F、裏路地。人形町駅A5出口 (浅草線) から徒歩3分',
    gf_detail: 'グルテンフリーではない: 二八と粗挽きは小麦入り、つけ汁は醤油ベース、天ぷらもある。十割そばもあるがつゆは醤油 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガンではない: そばつゆは鰹の出汁、鴨、豚、魚のトッピング。',
    notes: '[そば・人形町、朝7時からの粗挽きの手打ちそば] 裏路地にある6席のそば屋で、店名は店主の福田雅之さんの名前。店主はそばを打つ前に Tochigi の製粉会社で働いていた (2025年4月)。目当ては粗挽きそばで、太く素朴でそばの風味が濃く、300gと量も多くて1,000円。十割と二八もあり、天ぷら、鴨、とろろで。平日は朝7時から開き、ご飯、サラダ、温泉卵付きのそばの朝定食。相席で、並んでいるうちに注文を取るので待ち時間は短い。カードと電子マネーは不可、QR 決済は可。土曜休み、夜は予約のみ。',
  });
}

save();
