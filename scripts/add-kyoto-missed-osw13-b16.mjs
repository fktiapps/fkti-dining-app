// Kyoto "what did we miss" pass (kyoto-missed, notable phase) — lane osw13, batch 16.
//   + 大極殿本舗 六角店 Daigokuden Honpo Rokkaku (confectioner founded 1885; machiya tea room famed for Kohaku Nagashi)
//   + 宝泉 JR新幹線京都駅店 Hosen, Kyoto Station (Housendo's azuki tea room inside the Shinkansen gates)
//   + 祇園 末友 Gion Suetomo (末友久史's kaiseki house opposite Kenninji's south gate; since 2009)
//   + 私房菜 すみよし PRIVATE KITCHEN SUMIYOSHI (eleven-seat Chinese near the Kyoto National Museum; since 2018)
//   Taken in queue order from `queue.mjs kyoto-missed next notable 80` on 2026-11-02 (restart of batch 16).
//   None is in data/kyoto.json: grep by name (大極殿/Daigokuden, 宝泉/Hosen — only 鳳泉 Kanton Ryori Hosen, a different
//   shop — 末友/Suetomo, すみよし/Sumiyoshi) and address (堀之上町120, 東塩小路高倉町8-3, 小松町151-73, 妙法院前側町420)
//   found nothing; no record within 60 m of any of the four.
//   Group check: Housendo has four outlets of different formats (本店 shop, 茶寮 宝泉, 京都駅店, 下鴨神社 さるや; official
//   site) — a small group with none in data, so this one is drafted. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-16');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 大極殿本舗 六角店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004652/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_daigokuden_rokkaku', name: '大極殿本舗 六角店 (Daigokuden Honpo Rokkaku)', category: 'OMNI',
    lat: 35.007283, lng: 135.762959, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The signature Kohaku Nagashi is agar jelly with a monthly syrup, and warabi mochi comes with kinako and syrup, but toppings change and no ingredient list is published; the shop is also known for castella (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Agar, syrups, warabi mochi and bean-paste zenzai; monthly toppings vary (Tabelog lists a white-miso and a honey syrup among them) and no ingredient list is published.',
    hours_raw: '10:00–18:00; closed Wednesday (Tabelog). No reservations; when full, write your name for the waiting list (Tabelog); a 30-minute wait on a holiday lunchtime (September 2026). 22 seats: 16 at tables, 6 on tatami (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB) (Tabelog). Children welcome (Tabelog). On Rokkaku-dori, 5 min from Karasuma Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Rokkaku-dori east of Takakura, a late-Edo machiya with a tea room at the back — 5 min from Karasuma Stn',
    cuisine: 'A confectioner founded in 1885 and credited with bringing castella to Kyoto, with a tea room behind the shop (October 2026 review) · signature Kohaku Nagashi: smooth agar jelly with a syrup and toppings that change every month — grape with wine jelly and raisins in September, chestnut and azuki zenzai in October, persimmon in November (Tabelog; 2026 reviews) — ¥950–980, or ¥1,450 with mini warabi mochi (2026 reviews) · very soft warabi mochi with kinako ¥980; zenzai with three kinds of mochi ¥1,500; 相生ぜんざい with white azuki (November 2026); kakigori such as Uji milk (September 2026) · cold hojicha in place of water; matcha · to take away: castella "Harunoya"',
    website: null, gmaps: gm('大極殿本舗 六角店'), menu_url: TB,
    notes: "[Sweets · Rokkaku-dori, the monthly Kohaku Nagashi] Behind a confectioner's shopfront in a late-Edo townhouse — the house dates from 1885 and is credited with bringing castella to Kyoto — a quiet tea room looks onto a small garden. People come for the Kohaku Nagashi: trembling, glass-clear agar under a syrup that changes each month, grape in September, chestnut zenzai in October, persimmon in November. The warabi mochi is so soft it barely holds on the chopsticks. Write your name on the list when it is full; holiday waits run about half an hour. Around ¥1,000; cards accepted; closed Wednesdays.",
    chef_bio: { chef_name: null, roles: ['Long-established confectioner; no person is named in the sources'], origin: null,
      background: 'Per an October 2026 review: founded in 1885 and known for introducing castella to Kyoto; the Rokkaku shop occupies a late-Edo machiya with a tea room at the back overlooking a small garden. Tabelog lists the Kohaku Nagashi syrup for each month of the year. Tabelog Sweets WEST "Tabelog 100" 2018–2020, 2022 and Japanese sweets WEST 2023, 2026.',
      philosophy: null, specialty: 'Kohaku Nagashi; warabi mochi; castella.',
      anecdotes: [
        { text: '"I often stop by here after work on Saturdays to enjoy the Amber Jelly, usually once a month." — October 2026, the Kohaku Nagashi.', source: R + 'B530398356/' },
        { text: '"The warabi mochi was so soft and wobbly that I could barely pick it up with chopsticks." — September 2026.', source: R + 'B536517794/' },
        { text: '"The staff were engaged in casual conversations with each other and occasionally overlooked customers." — September 2026.', source: R + 'B535882709/' },
      ],
      japanese_sources_summary: '食べログ: 大極殿本舗 六角店、甘味処・和菓子、中京区六角通高倉東入ル南側堀之上町120、烏丸駅から徒歩5分、月・火・木〜日 10:00〜18:00、水曜休み、予約不可、満席時は記名順、22席 (テーブル16、座敷6)、カード可、子ども可、毎月変わる Kohaku Nagashi の蜜、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年9〜11月、英語): 1885年創業、京都にカステラを伝えた店、江戸末期の町家の奥の甘味処と坪庭、Kohaku Nagashi、柔らかなわらび餅、相生ぜんざい、かき氷、休日は待ち時間。',
      confidence: 'medium', sources: [TB, R + 'B385565096/', R + 'B530398356/', R + 'B535882709/', R + 'B536120258/', R + 'B536517794/', R + 'B537036410/', R + 'B537141906/', R + 'B537559126/', R + 'B538018876/', R + 'B538041516/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Write your name on the list at the door when full; order at the table.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区六角通高倉東入ル南側堀之上町120',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026; Japanese sweets WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.007283, 135.762959); cross-checked: GSI 京都府京都市中京区堀之上町120番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535882709/', R + 'B538041516/', R + 'B537559126/'],
    price_note: 'No published price list read; prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kohaku Nagashi (agar jelly with the month\'s syrup)', '¥980', 'Tea room', 'ask', 'ask', 'September 2026; ¥950 in October.', 'kohaku_nagashi'),
      it('', '', 'Kohaku Nagashi with mini warabi mochi', '¥1,450', 'Tea room', 'ask', 'ask', 'September 2026.', 'kohaku_set'),
      it('', '', 'Warabi mochi', '¥980', 'Tea room', 'ask', 'ask', 'October 2026.', 'warabi_mochi'),
    ] }, {
    cuisine: '1885年創業で京都にカステラを伝えたとされる菓子店の奥の甘味処 (2026年10月の口コミ)・名物の Kohaku Nagashi: なめらかな寒天に毎月変わる蜜とトッピング (9月はぶどうとワインゼリーとレーズン、10月は栗と小豆のぜんざい、11月は柿) (食べログ、2026年の口コミ)、950〜980円、ミニわらび餅とのセットは1,450円 (2026年の口コミ)・とても柔らかいきなこのわらび餅980円、3種の餅のぜんざい1,500円、白小豆の相生ぜんざい (2026年11月)、宇治ミルクなどのかき氷 (2026年9月)・お水の代わりに冷たいほうじ茶、抹茶・持ち帰りにカステラ「Harunoya」',
    neighborhood: '高倉通の東の六角通、奥に甘味処のある江戸末期の町家。烏丸駅から徒歩5分',
    gf_detail: '要確認。名物の Kohaku Nagashi は寒天に毎月の蜜、わらび餅はきなこと蜜だが、トッピングは変わり、原材料は公開されていない。カステラでも知られる店 (2026年の口コミ)。',
    vegan_detail: '要確認。寒天、蜜、わらび餅、餡のぜんざい。毎月の蜜は変わり (食べログには白味噌や蜂蜜の蜜も)、原材料は公開されていない。',
    notes: '[甘味・六角通、毎月変わる Kohaku Nagashi] 江戸末期の町家の菓子店の奥に、坪庭を望む静かな甘味処。1885年創業で京都にカステラを伝えたとされる店。お目当ては Kohaku Nagashi: ふるふると透きとおる寒天に毎月変わる蜜をかけ、9月はぶどう、10月は栗のぜんざい、11月は柿。わらび餅は箸でつまめないほど柔らかい。満席なら入口で名前を書いて待ち、休日は30分ほど。1,000円前後、カード可、水曜休み。',
  });
}

// ================================================================ 宝泉 JR新幹線京都駅店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26006790/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.housendo.com/';
  const WD = day(['09:00', '19:00']); const WE = day(['09:00', '20:00']);
  put({
    id: 'kyoto_hosen_kyoto_station', name: '宝泉 JR新幹線京都駅店 (Hosen, Kyoto Station)', category: 'OMNI',
    lat: 34.98478, lng: 135.759077, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Azuki-bean and chestnut sweets: zenzai with grilled mochi, chestnut kinton made only from Tanba chestnuts and trehalose (October 2026); no full ingredient list is published.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Bean and chestnut sweets are likely candidates, but the matcha float uses ice cream; no full ingredient list is published.',
    hours_raw: 'Shop 9:00–19:00 on weekdays and 9:00–20:00 at weekends and on holidays; tea room 10:00–18:00 (last order 17:45); open every day (Tabelog). Inside the Shinkansen ticket gates on the 2F Hachijo-side concourse, so only Shinkansen passengers can reach it (Tabelog; October 2026). No reservations (Tabelog). 30 seats at tables (Tabelog). Non-smoking (Tabelog). Cards, transport IC cards and QR payment (Tabelog). Staff ask whether you are in a hurry for your train (October 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station, inside the Shinkansen gates on the 2F Hachijo-side concourse',
    cuisine: 'The Kyoto Station outlet of Housendo, an azuki-bean confectioner of Shimogamo that buys top Tanba black soybeans and Tanba dainagon azuki each year and avoids preservatives (official site) · tea room: dainagon zenzai and white-azuki zenzai with grilled mochi ¥1,400; seasonal chestnut shiruko; chestnut kinton with matcha; matcha float ¥1,300; hojicha served alongside (October 2026) · to take away: chestnut kinton ¥490 (Tanba chestnuts and trehalose only), Kamo Aoi with Tanba dainagon azuki (October 2026)',
    website: SITE, gmaps: gm('宝泉 京都駅店'), menu_url: null,
    notes: "[Sweets · Kyoto Station, an azuki tea room inside the Shinkansen gates] The station outlet of Housendo, the Shimogamo bean specialist whose owner travels to Tanba every year for the best black soybeans and dainagon azuki. Behind the souvenir counter is a tea room dressed in Kyoto style, calm despite the crowds: a bowl of dainagon or white-azuki zenzai with grilled mochi, chestnut kinton with matcha in autumn, or a matcha float. Staff check whether you are in a hurry for your train. It is inside the Shinkansen gates, so only for travellers holding a Shinkansen ticket. Zenzai about ¥1,400; open daily.",
    chef_bio: { chef_name: null, roles: ['Housendo outlet; the owner is not named in the sources'], origin: null,
      background: 'Per the official site: Housendo (あずき処 宝泉堂) makes its sweets in Shimogamo; the owner goes to the growing areas each year to secure the best Tanba black soybeans and Tanba dainagon azuki, and the sweets are made without preservatives or unnecessary additives; its outlets are the 本店, the tea house 茶寮 宝泉, this station shop (renovated in summer 2020, inside the Shinkansen gates) and 下鴨神社 さるや. Tabelog Sweets WEST "Tabelog 100" 2018–2020, 2022 and Japanese sweets WEST 2023, 2026.',
      philosophy: 'Care in every single bean: drawing out the flavour of the best Tanba beans without preservatives (official site).', specialty: 'Zenzai; chestnut kinton.',
      anecdotes: [
        { text: '"It\'s also nice that they check if you\'re in a hurry since it\'s within the Shinkansen area." — October 2026.', source: R + 'B537527704/' },
        { text: '"I enjoyed the Dainagon Zenzai (JPY 1,400)." — October 2026, before the train home.', source: R + 'B537390894/' },
        { text: '"The Kurikinton is made solely from Tanba chestnuts and trehalose" — October 2026.', source: R + 'B538335329/' },
      ],
      japanese_sources_summary: '公式サイト (housendo.com): あずき処 宝泉堂、一粒ひとつぶに心をこめて、丹波の黒大豆・丹波大納言小豆を毎年店主自ら産地で確保、保存料や防腐剤を加えない、下鴨でお菓子を作る、店舗は宝泉堂 本店、茶寮 宝泉、宝泉 京都駅店 (新幹線の改札内、2020年夏にリニューアル)、下鴨神社 さるや。食べログ: 甘味処・和菓子、下京区東塩小路高倉町8-3 新幹線 JR京都駅 2F、Hachijo 側の新幹線改札内コンコース、物販は平日9:00〜19:00・土日祝9:00〜20:00、喫茶10:00〜18:00 (L.O.17:45)、無休、予約不可、30席、カード・交通系 IC・QR 可、スイーツ WEST 百名店 2018〜2020・2022、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年10月、英語): 大納言ぜんざい1,400円、白小豆のぜんざい、栗きんとん490円、抹茶フロート1,300円。',
      confidence: 'medium', sources: [SITE, TB, R + 'B486224392/', R + 'B537390894/', R + 'B537527704/', R + 'B537539255/', R + 'B537592845/', R + 'B537935852/', R + 'B538036775/', R + 'B538176172/', R + 'B538335329/', R + 'B538407956/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the table; staff ask about your train time. Shinkansen ticket holders only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路高倉町8-3 新幹線 JR京都駅 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site lists the station shop; ten reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (34.984780, 135.759077); cross-checked: GSI 京都府京都市下京区東塩小路高倉町 (town only, no lot) 199m — pin stays on the Tabelog point inside the station; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537390894/', R + 'B538036775/', R + 'B538176172/'],
    price_note: 'No price list read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Dainagon zenzai with grilled mochi', '¥1,400', 'Tea room', 'ask', 'ask', 'October 2026.', 'zenzai'),
      it('', '', 'Matcha float', '¥1,300', 'Tea room', 'ask', 'no', 'October 2026; with vanilla ice cream.', 'matcha_float'),
      it('', '', 'Chestnut kinton (Tanba chestnuts)', '¥490', 'Takeaway', 'ask', 'ask', 'October 2026.', 'kuri_kinton'),
    ] }, {
    cuisine: '最高級の丹波黒大豆と丹波大納言小豆を毎年仕入れ、保存料を使わない下鴨のあずき処 宝泉堂の京都駅店 (公式サイト)・喫茶: 焼き餅入りの大納言ぜんざいや白小豆のぜんざい1,400円、季節の栗のしるこ、抹茶と栗きんとん、抹茶フロート1,300円、ほうじ茶付き (2026年10月)・持ち帰り: 栗きんとん490円 (丹波の栗とトレハロースだけ)、丹波大納言小豆の Kamo Aoi (2026年10月)',
    neighborhood: '京都駅、新幹線改札内の2階 Hachijo 側コンコース',
    gf_detail: '要確認。小豆と栗の甘味: 焼き餅入りのぜんざい、丹波の栗とトレハロースだけの栗きんとん (2026年10月)。原材料の一覧は公開されていない。',
    vegan_detail: '要確認。豆や栗の甘味は候補になりそうだが、抹茶フロートにはアイスクリーム。原材料の一覧は公開されていない。',
    notes: '[甘味・京都駅、新幹線改札内の小豆の甘味処] 店主が毎年丹波へ出向いて最高の黒大豆と大納言小豆を仕入れる、下鴨の豆の専門店 宝泉堂の駅の店。お土産売り場の奥に京の室礼の喫茶があり、人混みの中でも落ち着く: 焼き餅の入った大納言や白小豆のぜんざい、秋は抹茶と栗きんとん、抹茶フロートも。電車の時間を気にかけてくれる。新幹線の改札内なので、新幹線の切符を持つ人だけが利用できる。ぜんざい1,400円ほど、無休。',
  });
}

// ================================================================ 祇園 末友
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26009394/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://gionsuetomo.kyoto/'; const ABOUT = 'http://gionsuetomo.kyoto/about/index.html';
  const H = day(['12:00', '15:00'], ['17:00', '22:30']);
  put({
    id: 'kyoto_gion_suetomo', name: '祇園 末友 (Gion Suetomo)', category: 'MOM_AND_POP',
    lat: 34.99886, lng: 135.773253, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Tabelog lists gluten-free options, and the official site says dishes are changed for allergies, religious reasons or dislikes; the standard kaiseki uses soy sauce and miso (official site; Tabelog; 2026 reviews).',
    vegan_status: 'options', vegan_label: 'Some vegan options', vegan_detail: 'A course with no animal ingredients is offered for vegan guests — request it when booking (official site). The standard kaiseki is built on dashi and fish.',
    hours_raw: 'Lunch with entry 12:00–13:00 and dinner with entry 17:00–19:30; closed irregularly, open through the New Year (official site); Tabelog gives 12:00–15:00 and 17:00–22:30. Reservation only, by the day before, by phone (075-496-8799), Ikyu or Tabelog (official site). Cancellation 100% on the day or the day before (official site). Lunch: 八坂懐石 ¥12,100 or kaiseki ¥36,300 / ¥72,600; dinner: kaiseki ¥36,300 / ¥72,600, and from 7 November to 20 March a crab omakase ¥60,500 / ¥72,600 (official site); no service charge (Tabelog). 8 counter seats and 4 private rooms, about 33 seats in all (official site; Tabelog). Foreign-language menus (official site). Maiko entertainment by reservation (official site). Non-smoking (official site). Cards incl. UnionPay; Alipay and WeChat Pay (Tabelog). By taxi, ask for Kenninji\'s south gate on Yasaka-dori (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yasaka-dori in Gion, facing the south gate of Kenninji — tell a taxi "Kenninji south gate"',
    cuisine: 'Kyoto kaiseki of about eight dishes with monthly menus, cooked with "Yasaka water" drawn from 40 m underground; a sakizuke on a seasonal word and a hassun on Kyoto culture; the grilled course is cooked in front of you even in private rooms (official site) · lunch 八坂懐石 ¥12,100; kaiseki ¥36,300 or ¥72,600 at lunch and dinner; winter crab omakase ¥60,500 / ¥72,600 (official site) · a vegan course without animal ingredients on request (official site) · July 2026 lunch: grilled eggplant; a Gion Matsuri hassun with sea-bream sushi in bamboo leaf; abalone soup; grilled turban shell, ayu, oysters and abalone; hamo shabu-shabu with Matsutake; ginger rice · April 2026: rice porridge with ume, temari sushi, charcoal-grilled anago · sake, shochu, wine',
    website: SITE, gmaps: gm('祇園 末友'), menu_url: SITE,
    notes: "[Kaiseki · Gion, a sukiya house facing Kenninji] At the foot of Yasaka-dori, opposite Kenninji's south gate, owner-chef Hisashi Suetomo (末友久史) — trained at a famous ryotei and first head chef of a Gion restaurant — opened in 2009 in a sukiya-style house the owner designed, with a tatami counter, a detached eight-mat room and an upstairs room looking onto the temple. Monthly kaiseki is cooked with deep-well \"Yasaka water\", the grilled course finished in front of you. Unusually, a fully plant-based course can be arranged, and maiko can be booked to entertain. Lunch from ¥12,100, kaiseki ¥36,300; book by the day before. Reviewers in 2026 range from rapt to lukewarm on value.",
    chef_bio: { chef_name: 'Hisashi Suetomo (末友久史; official site: "主人 末友久史 Hisashi Suetomo")', roles: ['Owner-chef (official site)'], origin: null,
      background: 'Per the official site: trained at famous ryotei and became the first head chef of a Gion restaurant; after leaving, prepared for over a year and opened Gion Suetomo, named for the owner, in 2009, in a building designed to Japanese aesthetics, seeing "the house as part of the cuisine"; renovated at ten years to four private rooms; cooks with "Yasaka water" from 40 m underground; sources produce by visiting farms; the spirit of the tea ceremony\'s 和敬清寂; open through the New Year. Tabelog: opened 11 February 2009; Tabelog Award Bronze 2017–2022; Japanese cuisine WEST "Tabelog 100" 2021.',
      philosophy: '"Gentle on the body and gentle on the heart"; conveying good Japanese culture that is being lost (official site).', specialty: 'Monthly kaiseki; grilled course at the table; vegan course.',
      anecdotes: [
        { text: '"The red ume paste in the center enhances the umami of the Yasaka water and dashi." — April 2026.', source: R + 'B525677585/' },
        { text: '"There was a tsukubai with flowing water, and the walls were adorned with countless uchiwa fans, creating a true Gion ambiance." — July 2026.', source: R + 'B531876392/' },
        { text: '"The atmosphere of the restaurant and the room was excellent, but the food was just average." — August 2026.', source: R + 'B533883925/' },
      ],
      japanese_sources_summary: '公式サイト (gionsuetomo.kyoto): 祇園 末友、名料亭で腕を磨いた末友久史が2009年にオープン、「構えも料理の一つ」、自ら設計した数寄屋造り、地下40mから汲み上げる「八坂の水」、季語の先付と京文化の八寸の全8品の懐石、個室でも目の前で焼く焼物、和敬清寂、10周年の改装で個室4部屋、舞妓さんとのお座敷遊び (要予約)、アレルギーや宗教上の理由で料理を変更、ヴィーガン向けの動物性食材を使わないコース、外国語メニュー、昼は八坂懐石12,100円・懐石36,300円・72,600円、夜は懐石36,300円・72,600円、季節料理〜蟹〜 (11月7日〜3月20日) 60,500円・72,600円、前日までに予約、昼12:00〜13:00入店、夜17:00〜19:30入店、不定休、キャンセルは前日・当日100%、全面禁煙、大和大路四条下る四丁目 小松町151-73 建仁寺南門前。食べログ: 日本料理・寿司、33席、チャージなし、グルテンフリー・ヴィーガン・ベジタリアン対応、2009年2月11日オープン、The Tabelog Award Bronze 2017〜2022、日本料理 WEST 百名店 2021。口コミ (2025年1月〜2026年9月、英語): 八坂の水の白粥、祇園祭の八寸、評価の分かれる値ごろ感。',
      confidence: 'high', sources: [SITE, ABOUT, TB, R + 'B377237791/', R + 'B505454531/', R + 'B511938226/', R + 'B513063982/', R + 'B517459954/', R + 'B525677585/', R + 'B531876392/', R + 'B533883925/', R + 'B536463646/', R + 'B98567747/'] },
    cultural_comfort: { level: 'english', note: 'Foreign-language menus and a site in four languages; dietary changes and a vegan course on request when booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区大和大路四条下ル小松町151-73',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site with current prices; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (34.998860, 135.773253); cross-checked: GSI 京都府京都市東山区小松町151番地 (lot) 74m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [SITE],
    price_note: 'Official site (read November 2026); no service charge per Tabelog.', last_checked: TODAY, items: [
      it('八坂懐石', '', 'Yasaka kaiseki (lunch)', '¥12,100', 'Lunch', 'ask', 'no', 'Official site.', 'yasaka_kaiseki'),
      it('懐石料理', '', 'Kaiseki course (lunch or dinner)', '¥36,300 / ¥72,600', 'Course', 'ask', 'no', 'Official site.', 'kaiseki'),
      it('季節料理〜蟹〜', '', 'Seasonal crab omakase (7 Nov–20 Mar)', '¥60,500 / ¥72,600', 'Course', 'ask', 'no', 'Official site.', 'crab'),
    ] }, {
    cuisine: '地下40mから汲み上げる「八坂の水」で仕立てる、月替わりの全8品ほどの京懐石。季語をテーマにした先付、京文化の八寸、個室でも目の前で焼く焼物 (公式サイト)・昼の八坂懐石12,100円、懐石36,300円・72,600円 (昼夜)、冬の蟹のおまかせ60,500円・72,600円 (公式サイト)・依頼すれば動物性食材を使わないヴィーガンのコース (公式サイト)・2026年7月の昼: 焼き茄子、笹の葉の鯛寿司などの祇園祭の八寸、鮑のお椀、Wakasa のさざえ、鮎、牡蠣、鮑の焼き物、松茸と鱧のしゃぶしゃぶ、生姜ご飯・2026年4月: 梅の白粥、手まり寿司、炭火焼きの穴子・日本酒、焼酎、ワイン',
    neighborhood: '祇園の八坂通、建仁寺の南門前。タクシーなら「建仁寺南門」と',
    gf_detail: '予約時に要確認。食べログにはグルテンフリー対応とあり、公式サイトではアレルギーや宗教上の理由、苦手な食材で料理を変更するとある。通常の懐石は醤油や味噌を使う (公式サイト、食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンの客向けに動物性食材を使わないコースがあり、予約時に依頼 (公式サイト)。通常の懐石は出汁と魚が基本。',
    notes: '[懐石・祇園、建仁寺に面した数寄屋] 八坂通の下、建仁寺の南門の向かい。名料亭で修業し祇園の店の初代料理長を務めた主人の末友久史さんが、2009年に自ら設計した数寄屋造りの店を開いた。畳敷きのカウンター、離れのような8畳の座敷、寺を望む2階の部屋。地下深くから汲む「八坂の水」で月替わりの懐石を仕立て、焼物は目の前で仕上げる。動物性食材を使わないコースも頼め、舞妓さんを呼ぶこともできる。昼12,100円から、懐石36,300円、予約は前日まで。2026年の口コミは絶賛から値ごろ感に辛口まで。',
  });
}

// ================================================================ 私房菜 すみよし
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26030839/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sumiyoshi.storeinfo.jp';
  const H = day(['11:30', '14:00'], ['17:30', '21:00']);
  put({
    id: 'kyoto_private_kitchen_sumiyoshi', name: '私房菜 すみよし (PRIVATE KITCHEN SUMIYOSHI)', category: 'OMNI',
    lat: 34.992407, lng: 135.774734, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chinese dishes with soy-based sauces, dumplings, fried rice and fried dishes; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of seafood, pork, chicken and shark fin; mapo tofu with meat (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00 and dinner 17:30–21:00; closed Tuesday (Tabelog). Reservations accepted and recommended for the 11 seats (a counter of 7 and one table for 4); phone 14:30–17:00 (Tabelog); online booking was used for lunch in 2026 (August 2026). No table charge (Tabelog). Non-smoking (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) (Tabelog). Children and strollers welcome (Tabelog). 1 min from the Umamachi bus stop; about 10 min from Kiyomizu-Gojo Stn (Tabelog). Opened 20 March 2018 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama, just north of the Kyoto National Museum, ground floor of メゾン・ナイアーデ — 1 min from the Umamachi bus stop',
    cuisine: 'Kyoto-leaning Chinese — a "new sensation of Chinese cuisine" (Tabelog shop text) — with set lunches and dinner courses (2026 reviews) · lunch A ¥2,500: appetiser salad of bang bang chicken, seared sea bream and jellyfish with nuts; two dim sum (xiaolongbao and shrimp dumplings); Sichuan mapo tofu; rice; dessert (August–September 2026); B and S lunches with steamed shark-fin soup or black-vinegar sweet-and-sour pork; an XO fried rice set · dinner "Seiryu" course ¥10,000: Chinese-style sea bream sashimi, shark fin, Peking duck, sweet sea bream, beef with Matsutake, fried rice with crisp rice, fried almond jelly (October 2026) · Shaoxing wine, sake, shochu, wine',
    website: SITE, gmaps: gm('私房菜 すみよし 京都'), menu_url: null,
    notes: "[Chinese · Higashiyama, a hideaway counter by the National Museum] A stylish, dim, jazz-playing room of eleven seats just north of the Kyoto National Museum, serving Chinese food with a Kyoto touch. Lunch is the bargain: for ¥2,500, a bang bang chicken salad with seared sea bream and jellyfish that one diner called the best ever, xiaolongbao and shrimp dumplings, and a fiery Sichuan mapo tofu. Dinner courses run to shark fin, Peking duck and a Chinese-style sea bream sashimi (the Seiryu course, ¥10,000). Small and popular, so book. In October 2026 one diner liked the food but found the mostly part-time floor staff left dishes unexplained and plates uncleared. Closed Tuesdays.",
    chef_bio: { chef_name: null, roles: ['Chef-run counter; no person is named in the 2026 sources'], origin: null,
      background: 'Tabelog: Chinese, dim sum and Sichuan; opened 20 March 2018; Chinese WEST "Tabelog 100" 2023, 2024, 2026; the shop text promises a "new sensation of Chinese cuisine" with Kyoto-style dishes in a hidden spot for adults. A September 2026 diner says it is featured in the Michelin Guide.',
      philosophy: null, specialty: 'Bang bang chicken with sea bream; mapo tofu; Chinese-style sea bream sashimi.',
      anecdotes: [
        { text: '"It\'s the best Bang Bang Chicken I\'ve ever had in my life." — September 2026.', source: R + 'B535930038/' },
        { text: '"The quality for JPY 2,500 was amazing!" — August 2026, lunch set A.', source: R + 'B534747916/' },
        { text: '"The staff, who were mostly part-timers, didn’t provide explanations or clear the plates." — October 2026.', source: R + 'B538318818/' },
      ],
      japanese_sources_summary: '食べログ: 私房菜 すみよし (PRIVATE KITCHEN SUMIYOSHI)、中華・飲茶・四川料理、東山区妙法院前側町420 メゾン・ナイアーデ 1F、Umamachi バス停から徒歩1分、月・水〜日 11:30〜14:00・17:30〜21:00、火曜休み、予約可 (電話は14:30〜17:00)、11席 (カウンター7、テーブル1)、チャージなし、カード可、子ども・ベビーカー可、2018年3月20日オープン、中国料理 WEST 百名店 2023・2024・2026、京都らしい料理で「中華料理の新感覚」。口コミ (2026年8〜10月、英語): ランチ A 2,500円 (バンバンジーと鯛のサラダ、小籠包と海老餃子、麻婆豆腐)、フカヒレの蒸しスープ、夜の Seiryu コース10,000円、アルバイト中心のホールに不満の声も。',
      confidence: 'medium', sources: [TB, R + 'B497669693/', R + 'B533714885/', R + 'B534130988/', R + 'B534738957/', R + 'B534747916/', R + 'B535930038/', R + 'B536095680/', R + 'B536296604/', R + 'B536825880/', R + 'B538318818/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and dinner courses; book ahead for one of eleven seats.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区妙法院前側町420 メゾン・ナイアーデ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Chinese WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (34.992407, 135.774734); cross-checked: GSI 京都府京都市東山区妙法院前側町 (town only, no lot) 238m — pin stays on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534747916/', R + 'B536825880/'],
    price_note: 'No published price list read; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch set A (appetisers, two dim sum, mapo tofu, rice, dessert)', '¥2,500', 'Lunch', 'ask', 'no', 'August–September 2026.', 'lunch_a'),
      it('', '', 'Seiryu dinner course', '¥10,000', 'Dinner', 'ask', 'no', 'October 2026.', 'seiryu'),
    ] }, {
    cuisine: '京都らしさのある中華、「中華料理の新感覚」(食べログの店舗紹介)。ランチのセットと夜のコース (2026年の口コミ)・ランチ A 2,500円: バンバンジー、炙った鯛、くらげのナッツのサラダ、点心2種 (小籠包と海老餃子)、四川の麻婆豆腐、ご飯、デザート (2026年8〜9月)。B や S のランチはフカヒレの蒸しスープや黒酢の酢豚、XO 醤の炒飯のセットも・夜の「Seiryu」コース10,000円: 中華風の鯛の刺身、フカヒレ、北京ダック、甘鯛、松茸と牛肉、揚げた米を加えた炒飯、揚げた杏仁豆腐 (2026年10月)・紹興酒、日本酒、焼酎、ワイン',
    neighborhood: '東山、京都国立博物館のすぐ北、メゾン・ナイアーデの1階。Umamachi バス停から徒歩1分',
    gf_detail: '要確認。醤油ベースのソース、点心、炒飯、揚げ物のある中華。グルテンの情報なし (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚介、豚、鶏、フカヒレのコースで、麻婆豆腐にも肉 (2026年の口コミ)。',
    notes: '[中華・東山、国立博物館そばの隠れ家カウンター] 京都国立博物館のすぐ北、ジャズの流れるほの暗くおしゃれな11席で、京都らしさのある中華を出す。お得なのはランチ: 2,500円で、炙った鯛とくらげのバンバンジーのサラダ (人生一という声も)、小籠包と海老餃子、しびれる四川の麻婆豆腐。夜はフカヒレ、北京ダック、中華風の鯛の刺身のコース (Seiryu コース10,000円)。小さな人気店なので予約を。2026年10月には、料理は良いがアルバイト中心のホールが料理の説明も皿の片付けもしなかったという声も。火曜休み。',
  });
}

save();
