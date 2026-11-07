// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 58.
//   + 炭火やきとり 恒 Sumibi Yakitori Ko (binchotan yakitori on Fuyacho south of Ayanokoji; rest)
//   + 焼肉飛鳥 Yakiniku Asuka (Kobe-beef-registered wagyu yakiniku by Nishiki Market; rest)
//   + 傘 Kasa (cash-on standing shochu bar in the Kiyamachi Kaikan; rest)
//   + イザカヤ ルツボ Izakaya Rutubo (smoked-food dining bar off Shijo east of the Kamo; rest)
//   Rest list (mod 6 = 1) after batch 57, nearest-first — skipped:
//   - BUBBLE MARKET 京都店 26005285: existence unconfirmed — reviews stop in August 2021 and bubblemarket.net no longer
//     responds (2026-11-07); a search snippet describes it as a tapioca shop.
//   - 神戸牛鉄板焼き 火鉢 祇園店 26045845: thin — no reviews.
//   - 食堂 清水 26016037: brand already in data — reviewers call it the second location of とんかつ清水 (mp_tonkatsu_shimizu),
//     serving the same katsu sandwich.
//   - Ralph's Coffee 京都BAL 26032693: already skipped in batch 51 (global brand).
//   - ルヴォワール 26039395: thin — two reviews.
//   - 島本海苔 26016547: a Nishiki dried-goods (nori, arare, bonito) shop, not a place to eat.
//   Same-name check for the picks, same brand or operator only: 恒 — one. 飛鳥 — one. 傘 — one; a December 2022 reviewer
//   mentions a sister bar next door. ルツボ — three in our crawls (ルツボ, RUTUBO 第2燻製工場, イザカヤ ルツボ; a reviewer
//   mentions a Shijo-Omiya sister) — small group, drafted. None is in data/kyoto.json (main 6d5478e8) by name or address
//   (俵屋町297-1, 梅屋町500-1, 南車屋町287 木屋町会館 1F — いっしん in data is on the 2F, 亀井町54-1).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-58');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260201/26005285/', 'existence unconfirmed: reviews stop August 2021 and bubblemarket.net does not respond');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26045845/', 'thin: no reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26016037/', 'brand already in data: second location of とんかつ清水 (mp_tonkatsu_shimizu) per reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26039395/', 'thin: two reviews');
skip('https://tabelog.com/en/kyoto/A2601/A260201/26016547/', 'not a place to eat: Nishiki dried-goods shop');

// ================================================================ 炭火やきとり 恒 Sumibi Yakitori Ko
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26019829/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '24:00']);
  put({
    id: 'kyoto_sumibi_yakitori_ko', name: '炭火やきとり 恒 (Sumibi Yakitori Ko)', category: 'OMNI',
    lat: 35.0018180788389, lng: 135.76564022105003, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Charcoal-grilled skewers, some with a fairly strong seasoning; salt can be requested; no gluten information (2022–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken yakitori shop with few side dishes (2022–2026 reviews).',
    hours_raw: 'Daily 17:30–24:00, last order 23:30; irregular closing days (Tabelog). Reservations accepted and often needed (Tabelog; November 2023). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). 23 seats: a counter and tatami seating, shoes off at the entrance; smoking allowed (Tabelog; January 2024). On Fuyacho south of Ayanokoji, marked by lanterns; 8 min walk from Hankyu Kawaramachi Stn (Tabelog; May 2025). Opened 10 March 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Fuyacho south of Ayanokoji — 8 min walk from Kawaramachi Stn',
    cuisine: 'Yakitori grilled by the owner over Kishu binchotan, of Ohyama jidori and Kyoto red jidori, ordered by the skewer (2022–2026 reviews) · basic skewers from ¥220, chicken skin ¥150 (December 2022); white liver; neck; rare cuts such as kokorokori and seikan; chicken tataki; original creations (2022–2025 reviews) · a wide drink list, e.g. a pomegranate highball (November 2023) · about ¥3,000–5,000 (Tabelog; 2022–2026 reviews)',
    website: null, gmaps: gm('炭火やきとり 恒 麩屋町'), menu_url: null,
    notes: '[Yakitori · Fuyacho south of Ayanokoji] A small lantern-lit yakitori shop where the owner grills Oyama and Kyoto red jidori over Kishu binchotan: creamy white liver, neck, rare cuts like kokorokori, and tataki, by the single skewer from about ¥220. Shoes off for the tatami. Seasoning runs strong — ask for salt; one 2026 couple found it pricey, another few snacks beyond skewers. Smoking allowed.',
    chef_bio: { chef_name: null, roles: ['Owner at the grill (unnamed)', 'Staff'], origin: null,
      background: 'Per Tabelog: a yakitori and izakaya opened 10 March 2012 on Fuyacho. Reviewers in 2022–2026 describe the owner grilling over Kishu binchotan, Ohyama jidori and Kyoto red jidori, and an active, skilled staff.',
      philosophy: null, specialty: 'White liver; kokorokori.',
      anecdotes: [
        { text: 'A December 2022 regular found the chicken liver as white as foie gras, and noted prices had risen with ingredient costs — skewers from ¥220.', source: R + 'B445198979/' },
        { text: 'A February 2026 couple found the seasoning strong with no preference asked, and the partner thought it a bit pricey.', source: R + 'B522197936/' },
        { text: 'A May 2026 first-timer enjoyed the charcoal aroma but found few snacks beyond the skewers.', source: R + 'B529070333/' },
      ],
      japanese_sources_summary: '食べログ: 焼鳥・居酒屋、下京区麩屋町通綾小路下ル俵屋町297-1、阪急河原町駅から徒歩8分、毎日 17:30〜24:00 (L.O.23:30)、不定休、予約可、カード (VISA・Master・JCB・AMEX・Diners) 可、23席、喫煙可、2012年3月10日開店。口コミ (2022年1月〜2026年9月、英語): 提灯が目印、靴を脱いで座敷とカウンター、店主が紀州備長炭で焼く、Ohyama jidori と Kyoto Akajidori、1本から注文、串は220円から・皮は150円 (2022年12月)、白レバー、せせり、kokorokori、seikan、鶏のたたき、創作の串、ざくろのハイボール、味が濃いめで好みを聞かれないとの声・やや高いとの声 (2026年2月)、串以外のつまみが少ないとの声 (2026年5月)。',
      confidence: 'medium', sources: [TB, R + 'B445198979/', R + 'B445450971/', R + 'B466525952/', R + 'B477158413/', R + 'B478408974/', R + 'B506282157/', R + 'B518993018/', R + 'B522197936/', R + 'B529070333/', R + 'B535704567/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off for the tatami; order by the skewer; smoking allowed; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区麩屋町通綾小路下ル俵屋町297-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001818, 135.765640); cross-checked: GSI 京都府京都市下京区俵屋町297番地 (lot) 30 m; nearest Kyoto record 53 m away; checked against main 6d5478e8; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B445198979/'],
    price_note: 'Prices from a December 2022 review.', last_checked: TODAY, items: [
      it('', '', 'Basic skewer', '¥220', 'Yakitori', 'ask', 'no', 'From ¥220; December 2022.', 'skewer'),
      it('', '', 'Chicken skin skewer', '¥150', 'Yakitori', 'ask', 'no', 'December 2022.', 'kawa'),
    ] }, {
    cuisine: '店主が紀州備長炭で焼く、Ohyama jidori と Kyoto Akajidoriの1本から頼める焼鳥 (2022〜2026年の口コミ)・串は220円から、皮150円 (2022年12月)、白レバー、せせり、kokorokori や seikan などの希少部位、鶏のたたき、創作の串 (2022〜2025年の口コミ)・ざくろのハイボールなど豊富な飲み物 (2023年11月)・3,000〜5,000円ほど (食べログ、2022〜2026年の口コミ)',
    neighborhood: '綾小路の南の麩屋町通。河原町駅から徒歩8分',
    gf_detail: '要確認。炭火焼きの串で、味付けは濃いめのものも。塩は頼める。グルテンの情報はない (2022〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鶏の焼鳥の店で、ほかの料理は少ない (2022〜2026年の口コミ)。',
    notes: '[焼鳥・綾小路の南の麩屋町] 提灯が灯る小さな焼鳥の店。店主が紀州備長炭でOhyama jidori や Kyoto Akajidoriを焼く。とろりとした白レバー、せせり、kokorokori などの希少部位、たたきを、1本220円ほどから。座敷は靴を脱いで。味は濃いめなので塩を頼むのも手。2026年の客は高め、串以外が少ないと感じた。喫煙可。',
  });
}

// ================================================================ 焼肉飛鳥 Yakiniku Asuka
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039857/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://www.yakinikuasuka.com/';
  const H = day(['14:00', '22:00']);
  put({
    id: 'kyoto_yakiniku_asuka_nishiki', name: '焼肉飛鳥 (Yakiniku Asuka)', category: 'OMNI',
    lat: 35.005163257871246, lng: 135.76553031036002, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: yakiniku with sauces, wagyu rice bowls, kimchi (2024–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant (2024–2025 reviews).',
    hours_raw: 'Monday, Tuesday, Thursday–Sunday and holidays 14:00–22:00; closed Wednesday (Tabelog). In 2024 it opened at 11:30 for lunch (April 2024). Reservations accepted; call if more than 10 minutes late or the booking may be cancelled (Tabelog). A 100-minute limit with last order at 70 minutes (December 2024). No service or seat charge (Tabelog original サービス料・席料はありません。). Cards, e-money and QR (Tabelog). 22 seats: a 10-seat counter on the 1F, tables upstairs (Tabelog; 2024 reviews). Next to Nishiki Market; 3 min walk from Kyoto-Kawaramachi Stn (Tabelog). Opened 15 September 2023 (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Beside Nishiki Market — 3 min walk from Kawaramachi Stn',
    cuisine: 'Wagyu yakiniku at a registered Kobe beef shop (No. 2041), grilling Kobe beef and A5 wagyu from female cattle yourself, also as steak and sukiyaki (Tabelog) · today\'s assorted platter, premium salted tongue, harami, kimchi platter with yam kimchi; special rice (2024–2025 reviews) · lunch, when offered: wagyu rice trio ¥1,800, A5 black wagyu bowl with egg (April–August 2024) · about ¥6,000–10,000 at dinner (Tabelog; 2024 reviews)',
    website: WEB, gmaps: gm('焼肉飛鳥 錦市場'), menu_url: null,
    notes: '[Yakiniku · beside Nishiki Market, Kobe beef] A small Kobe-beef-registered yakiniku by Nishiki Market: grill A5 and Kobe wagyu yourself at the counter, from tongue to harami. Several reviewers note many overseas guests. Criticisms: a 100-minute limit with slow service, cuts not explained, lukewarm beer, and one cold reception in March 2025. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner and staff (unnamed)'], origin: null,
      background: 'Per Tabelog and its website: a wagyu yakiniku opened 15 September 2023 beside Nishiki Market, a registered Kobe beef establishment (No. 2041) using carefully selected female A5 wagyu, for yakiniku, steak and sukiyaki.',
      philosophy: 'Kobe beef and female A5 wagyu (Tabelog).', specialty: 'Kobe beef yakiniku.',
      anecdotes: [
        { text: 'A December 2024 pair spent about ¥30,000 and found the meat top-notch, but the 100-minute limit with slow service left too little time.', source: R + 'B498580301/' },
        { text: 'A March 2025 guest with an overseas companion was handed only the yakiniku menu, got the lunch menu reluctantly, and called the service exceptionally poor.', source: R + 'B503253381/' },
        { text: 'Several reviewers note many overseas guests (April 2024–March 2025).', source: R + 'B513135958/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉・ホルモン・肉バル、中京区梅屋町500-1、京都河原町駅から徒歩3分、錦市場のすぐそば、月・火・木〜日・祝 14:00〜22:00、水曜休み、予約可 (10分以上遅れる場合は電話を)、サービス料・席料なし、カード・電子マネー・QR 可、22席 (カウンター10、テーブル)、2023年9月15日開店、神戸ビーフ指定登録店 (No.2041)、厳選した雌のA5和牛、焼肉・ステーキ・すき焼き。口コミ (2024年4月〜2025年3月、英語): 2024年は11時半から昼営業、和牛の三色丼1,800円、A5黒毛和牛の丼、本日の盛り合わせ、上塩タン、ハラミ、山芋キムチのキムチ盛り合わせ、2階はテーブル、100分制でL.O.70分、外国人客が多いとの声が複数、部位の説明がない・ビールがぬるかったとの声 (2024年10月)、接客がひどかったとの声 (2025年3月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B476491806/', R + 'B484092316/', R + 'B489898708/', R + 'B491065180/', R + 'B493663229/', R + 'B493734434/', R + 'B498580301/', R + 'B503253381/', R + 'B503339742/', R + 'B513135958/'] },
    cultural_comfort: { level: 'english', note: 'Many overseas guests (several reviews); 100-minute limit; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区梅屋町500-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; latest review March 2025.' },
    pin_source: `Tabelog ${TB} (35.005163, 135.765530); cross-checked: GSI 京都府京都市中京区梅屋町500番地 (lot) 42 m; nearest Kyoto record 21 m away; checked against main 6d5478e8; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B484092316/'],
    price_note: 'Price from an April 2024 review; lunch may no longer be served.', last_checked: TODAY, items: [
      it('', '', 'Wagyu rice trio (lunch)', '¥1,800', 'Lunch', 'no', 'no', 'April 2024.', 'trio'),
      it('', '', 'Premium salted tongue', '', 'Yakiniku', 'ask', 'no', 'October 2024.', 'shio_tan'),
    ] }, {
    cuisine: '神戸ビーフ指定登録店 (No.2041) の和牛焼肉。神戸ビーフや雌のA5和牛を自分で焼くほか、ステーキやすき焼きも (食べログ)・本日の盛り合わせ、上塩タン、ハラミ、山芋キムチのキムチ盛り合わせ、特別なご飯 (2024〜2025年の口コミ)・昼営業のあるとき: 和牛の三色丼1,800円、卵をのせたA5黒毛和牛の丼 (2024年4〜8月)・夜は6,000〜10,000円ほど (食べログ、2024年の口コミ)',
    neighborhood: '錦市場のそば。河原町駅から徒歩3分',
    gf_detail: 'グルテンフリー不可。たれの焼肉、和牛の丼、キムチ (2024〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。和牛の焼肉の店 (2024〜2025年の口コミ)。',
    notes: '[焼肉・錦市場のそば、神戸ビーフ] 錦市場のそばの神戸ビーフ指定登録の小さな焼肉の店。カウンターでA5や神戸の和牛をタンからハラミまで自分で焼く。外国人客が多いという口コミが複数。100分制で提供が遅い、部位の説明がない、ビールがぬるい、2025年3月には接客が冷たかったという声も。水曜休み。',
  });
}

// ================================================================ 傘 Kasa
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013001/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '26:00']);
  put({
    id: 'kyoto_kasa_tachinomi_kiyamachi', name: '傘 (Kasa)', category: 'OMNI',
    lat: 35.006670507871796, lng: 135.77023431037196, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Shochu and other drinks with small dishes — pickles, braised pork, oden, chijimi, dashimaki, gyoza; no gluten information (2022–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. ¥100 small dishes include pickled shallots and potato salad, but no ingredient information (2023–2025 reviews).',
    hours_raw: 'Monday–Saturday 18:00–2:00; closed Sunday, though open on some Sundays; closed for the first three days of the New Year and staff trips (Tabelog). Reservations accepted (Tabelog). Cash on delivery — put money in the bowl and staff take from it as you order; no cards or e-money, QR accepted (Tabelog; September 2026). Standing bar; smoking allowed (Tabelog). 1F of the Kiyamachi Kaikan, Nishi-Kiyamachi south of Sanjo; 10 min walk from Sanjo, Gion-Shijo and Kawaramachi Stns (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Kiyamachi south of Sanjo — Kiyamachi Kaikan 1F',
    cuisine: 'Casual standing bar centred on shochu, ¥400–800 a glass, with staff happy to explain (December 2025) · small dishes from ¥100 off a tray, e.g. pickled shallots, potato salad; braised pork belly ¥500; oden, chijimi, dashimaki, gyoza; toro-taku, shime-saba, jaga-butter (2022–2025 reviews) · about ¥1,000–2,000 (Tabelog; 2024–2025 reviews)',
    website: null, gmaps: gm('傘 立ち飲み 木屋町会館'), menu_url: null,
    notes: '[Standing bar · Nishi-Kiyamachi south of Sanjo, shochu] A lively cash-on standing bar in the Kiyamachi Kaikan: drop money in the bowl, pick a shochu from a long list (staff will guide you), and graze ¥100 small dishes or braised pork. Good for one last drink. One December 2024 visitor found the ¥100 dishes little better than supermarket fare. Smoking allowed; closed most Sundays.',
    chef_bio: { chef_name: null, roles: ['Owner and bar staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a standing bar in the Kiyamachi Kaikan, open late, closed for the New Year and company trips. Reviewers in 2022–2025 describe a friendly owner, a shochu-focused list and a cash-on system; a December 2022 reviewer mentions a sit-down sister bar next door.',
      philosophy: null, specialty: 'Shochu; ¥100 small dishes.',
      anecdotes: [
        { text: 'A December 2022 visitor was surprised to find Murao shochu at a standing bar, alongside toro-taku, a dish more often seen in Kanto.', source: R + 'B458250947/' },
        { text: 'A December 2024 New Year\'s Eve visitor found the ¥100 dishes much like convenience-store items, though the dashimaki was good.', source: R + 'B498440964/' },
        { text: 'A November 2025 visitor back after about ten years was relieved to find the interior hardly changed.', source: R + 'B517380085/' },
      ],
      japanese_sources_summary: '食べログ: 立ち飲み、中京区西木屋町通三条下ル南車屋町287 木屋町会館 1F、京阪三条駅・祇園四条駅・阪急河原町駅から徒歩10分、月〜土 18:00〜翌2:00、日曜休み (開ける日もある)、正月三が日と社員旅行は休み、予約可、カード・電子マネー不可、QR 可、喫煙可。口コミ (2022年12月〜2025年12月、英語): キャッシュオン (器にお金を入れて注文ごとに引いてもらう)、焼酎が中心で400〜800円、店員が説明してくれる、100円の小皿 (らっきょう、ポテトサラダなど)、豚の角煮500円、おでん、チヂミ、だし巻き、餃子、とろたく、しめ鯖、じゃがバター、Murao、隣に姉妹店、気さくな店主、100円の小皿はスーパーの惣菜のようとの声 (2024年12月)。',
      confidence: 'medium', sources: [TB, R + 'B320448400/', R + 'B458250947/', R + 'B462407752/', R + 'B498440964/', R + 'B517380085/', R + 'B519792939/', R + 'B521479879/', R + 'B533689365/', R + 'B533728469/', R + 'B533822911/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing; cash-on bowl system or QR; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西木屋町通三条下ル南車屋町287 木屋町会館 １F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006671, 135.770234); cross-checked: GSI 京都府京都市中京区南車屋町287番地 (lot) 12 m; kyoto_isshin_motsunabe_kiyamachi (same building, 2F) is 3.7 m away; checked against main 6d5478e8; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519792939/'],
    price_note: 'Prices from a December 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Small dish from the tray', '¥100', 'Snacks', 'ask', 'ask', 'December 2025.', 'kozara'),
      it('', '', 'Braised pork belly', '¥500', 'Snacks', 'ask', 'no', 'December 2025.', 'kakuni'),
      it('', '', 'Shochu (glass)', '¥400–800', 'Drinks', 'gf', 'vegan', 'December 2025.', 'shochu'),
    ] }, {
    cuisine: '焼酎が中心の気軽な立ち飲み、1杯400〜800円で店員が説明してくれる (2025年12月)・トレーから選ぶ100円からの小皿、例: らっきょう、ポテトサラダ、豚の角煮500円、おでん、チヂミ、だし巻き、餃子、とろたく、しめ鯖、じゃがバター (2022〜2025年の口コミ)・1,000〜2,000円ほど (食べログ、2024〜2025年の口コミ)',
    neighborhood: '三条の南の西木屋町、木屋町会館1階',
    gf_detail: '要確認。焼酎などの飲み物に、漬物、角煮、おでん、チヂミ、だし巻き、餃子の小皿。グルテンの情報はない (2022〜2025年の口コミ)。',
    vegan_detail: '要確認。100円の小皿にらっきょうやポテトサラダもあるが、材料の情報はない (2023〜2025年の口コミ)。',
    notes: '[立ち飲み・三条の南の西木屋町、焼酎] 木屋町会館のにぎやかなキャッシュオンの立ち飲み。器にお金を入れ、豊富な焼酎から選んで (店員が案内してくれる)、100円の小皿や角煮をつまむ。締めの1杯に。2024年12月の客は100円の小皿はスーパーの惣菜並みと感じた。喫煙可、日曜はたいてい休み。',
  });
}

// ================================================================ イザカヤ ルツボ Izakaya Rutubo
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26031931/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://rutubo-kyoto.com';
  const H = day(['12:00', '24:00']);
  put({
    id: 'kyoto_izakaya_rutubo_gion', name: 'イザカヤ ルツボ (Izakaya Rutubo)', category: 'OMNI',
    lat: 35.00205472787548, lng: 135.77263204032366, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Smoked dishes, tempura and fritters, gnocchi, beef-tendon noodles; smoked soy and miso sauces; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Smoked olives, nuts and edamame and stir-fried greens appear, but smoked soy sauce, egg and fish are common; no ingredient information (2026 reviews).',
    hours_raw: 'Daily 12:00–24:00; hours may change (Tabelog). Day drinking from noon, with a senbero (cheap drinks and snacks) option (February and July 2026). Reservations accepted (Tabelog). Cards (VISA, Master, JCB, AMEX); no e-money or QR (Tabelog). Counter, standing room and barrel seats; smoking allowed inside after 21:00 (Tabelog; August 2026). A Showa-retro shop in a back street off Shijo east of the Kamo River, near Miyagawacho; 3 min walk from Keihan Gion-Shijo Stn exit 1 (Tabelog; June 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Off Shijo east of the Kamo, near Miyagawacho — 3 min walk from Gion-Shijo Stn',
    cuisine: 'Dining bar of smoked dishes and Japanese-Western small plates, part of a small group with a Shijo-Omiya sister (2026 reviews) · assorted smoked plate ¥1,500 (cheese, nuts, gizzard, edamame, octopus, quail egg); smoked roast beef, bacon, egg, olives, mentaiko and gizzard (2026 reviews) · homemade fries ¥700, ufu-mayo potato salad ¥800 (April 2026); salsiccia with white ragù and gnocchi; fried figs or persimmon with white sesame; conger and sea bream tempura with smoked salt; bonito katsu; beef-tendon noodles with tomato and sansho (2026 reviews) · highballs, wine, sake, shochu (2026 reviews) · about ¥3,000–6,000 (Tabelog; 2026 reviews)',
    website: WEB, gmaps: gm('イザカヤ ルツボ 祇園四条'), menu_url: null,
    notes: '[Smoked-food bar · off Shijo near Miyagawacho, from noon] A small, Showa-retro dining bar where nearly everything meets the smoker — cheese, gizzards, roast beef, potato salad — alongside inventive plates like bonito katsu, fig fritters and beef-tendon noodles, with highballs and wine from noon. Barrel stools are snug. One September 2026 diner found the bacon tough and the persimmon bland. Smoking after 21:00.',
    chef_bio: { chef_name: null, roles: ['Kitchen and bar staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a dining bar run by RUTUBO (website rutubo-kyoto.com, Instagram rutubo_inc) near Gion-Shijo; our crawls also list ルツボ and RUTUBO 第2燻製工場, and an October 2026 reviewer mentions a Shijo-Omiya sister. Reviewers in 2026 describe homemade smoked dishes and condiments and friendly staff.',
      philosophy: 'Smoked dishes made in-house (2026 reviews).', specialty: 'Assorted smoked plate; smoked roast beef.',
      anecdotes: [
        { text: 'An August 2026 regular loves it despite the slightly uncomfortable barrel seats, for fried figs with white sesame and smoked-salt tempura.', source: R + 'B504378533/' },
        { text: 'An August 2026 diner was most surprised by beef-tendon noodles with tomato, sansho and garlic, mixed at the table.', source: R + 'B534262551/' },
        { text: 'A September 2026 visitor loved the smoked egg but found the smoked bacon tough and the fried persimmon bland.', source: R + 'B536360840/' },
      ],
      japanese_sources_summary: '食べログ: ダイニングバー、東山区亀井町54-1 ウィッシュ河原町 1F、京阪祇園四条駅1番出口から徒歩3分、毎日 12:00〜24:00、営業時間は変わることあり、予約可、カード (VISA・Master・JCB・AMEX) 可、電子マネー・QR 不可、カウンター・立ち飲み、21時以降は店内喫煙可、公式サイト rutubo-kyoto.com。口コミ (2026年2月〜11月、英語): 宮川町の近く、昭和レトロ、樽の椅子、昼から飲める、せんべろあり、燻製の盛り合わせ1,500円 (チーズ、ナッツ、砂肝、枝豆、たこ、うずら卵)、燻製のローストビーフ・ベーコン・卵・オリーブ・明太子、自家製フライドポテト700円、ウフマヨのポテトサラダ800円、白いラグーのサルシッチャとニョッキ、いちじくや柿のフライの白ごまソース、魚の天ぷら (燻製塩)、かつおのカツ、トマトと山椒の牛すじ麺、四条大宮に姉妹店との声、ベーコンが硬い・柿のフライが味気ないとの声 (2026年9月)。',
      confidence: 'medium', sources: [TB, WEB, R + 'B433871381/', R + 'B504378533/', R + 'B523170348/', R + 'B524273832/', R + 'B525778524/', R + 'B528336211/', R + 'B532484821/', R + 'B534262551/', R + 'B536360840/', R + 'B537751504/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and barrel stools; smoking after 21:00; cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区亀井町54-1 ウィッシュ河原町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and website; reviews through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002055, 135.772632); cross-checked: GSI 京都府京都市東山区亀井町54番地 (lot) 20 m; nearest Kyoto record 38.7 m away; checked against main 6d5478e8; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525778524/'],
    price_note: 'Prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Assorted smoked plate', '¥1,500', 'Smoked', 'ask', 'no', 'April 2026.', 'smoked_mori'),
      it('', '', 'Homemade fries', '¥700', 'Small plates', 'ask', 'ask', 'April 2026.', 'fries'),
      it('', '', 'Ufu-mayo potato salad', '¥800', 'Small plates', 'ask', 'no', 'April 2026.', 'potato_salad'),
    ] }, {
    cuisine: '燻製料理と和洋の小皿のダイニングバー、四条大宮に姉妹店のある小さなグループ (2026年の口コミ)・燻製の盛り合わせ1,500円 (チーズ、ナッツ、砂肝、枝豆、たこ、うずら卵)、燻製のローストビーフ・ベーコン・卵・オリーブ・明太子と砂肝 (2026年の口コミ)・自家製フライドポテト700円、ウフマヨのポテトサラダ800円 (2026年4月)、白いラグーのサルシッチャとニョッキ、いちじくや柿のフライの白ごまソース、燻製塩の魚の天ぷら、かつおのカツ、トマトと山椒の牛すじ麺 (2026年の口コミ)・ハイボール、ワイン、日本酒、焼酎 (2026年の口コミ)・3,000〜6,000円ほど (食べログ、2026年の口コミ)',
    neighborhood: '鴨川の東、四条から入った宮川町の近く。祇園四条駅から徒歩3分',
    gf_detail: '要確認。燻製料理、天ぷらやフライ、ニョッキ、牛すじ麺。燻製醤油や味噌のソース。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。燻製のオリーブ、ナッツ、枝豆や青菜の炒め物もあるが、燻製醤油、卵、魚が多い。材料の情報はない (2026年の口コミ)。',
    notes: '[燻製のバー・宮川町近くの四条の裏通り、昼から] ほとんどの料理が燻製をくぐる昭和レトロの小さなダイニングバー。チーズ、砂肝、ローストビーフ、ポテトサラダ、かつおのカツ、いちじくのフライ、牛すじ麺などの創作の皿に、昼からハイボールやワイン。樽の椅子は少し窮屈。2026年9月の客はベーコンが硬く柿が味気ないと感じた。21時以降は喫煙可。',
  });
}

save();
