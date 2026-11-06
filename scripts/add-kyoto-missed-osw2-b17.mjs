// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority) — lane osw2 (Tabelog id mod 6 = 3), batch 17.
//   core (queue.mjs kyoto-missed next core 200, 2026-11-05, lane ids in order):
//   + 祇園 岩元 Gion Iwamoto (Kyoto kappo in a Gion townhouse off Hanamikoji; since 2009)
//   - 雪梅花 菜根譚 (26002647) skipped: a brand of KIWA Corporation (Tabelog lists kiwa-group.co.jp as its website), whose brand
//     list names about 90 restaurant brands — sub-brand of a large parent, as in osw9-12 (膳處漢ぽっちり).
//   + お茶と晴ル ocha to haru (small Gion tea café of kakigori and warabi mochi; since 2024)
//   notable (queue.mjs kyoto-missed next notable 200, lane ids in order):
//   - ル・プチメック 御池店 (26005029) skipped: chain — 5 ル・プチメック shops in the Tabelog crawl (御池店, 今出川店, JR京都駅,
//     ジェイアール京都伊勢丹店, 新大阪駅店); 今出川店 is already in data/kyoto.json.
//   + カ・デル ヴィアーレ Ca’ del Viale (Piedmont-style ristorante near Nijo; since 1999)
//   - 四条烏丸 三徳六味 (26035503) skipped: chain — 6 三徳六味 shops in the Tabelog crawl (四条烏丸, 錦小路新町, 五条高倉,
//     ESTフードホール, 福島本店, 福島2号店).
//   - 茶寮都路里 京都伊勢丹店 (26000853) skipped: chain — 茶寮都路里 shops named in sources: 祇園本店, 京都伊勢丹店, 大丸心斎橋店
//     (Tabelog crawl), 大丸東京店 (timeout.jp), 高台寺店 (2017 release) = 5.
//   + 老香港酒家京都 Old Hong Kong Restaurant Kyoto (Hong Kong-style Cantonese with dim sum carts in COCON Karasuma; since 2004)
//   None is in data/kyoto.json: grep by id, name (岩元/Iwamoto, 晴ル/Haru — 和食晴ル is a different shop at 神明町, ヴィアーレ/Viale,
//   老香港/Old Hong Kong) and address (祇園町南側570-127, 570-125, 西ノ京千本三条, 水銀屋町620) found none.
//   Same-name counts (Samboa ruling): 岩元, お茶と晴ル, 老香港酒家京都 — one listing each in the crawl (the operator KDA株式会社 began
//   in Kobe’s Ijinkan district); カ・デル ヴィアーレ — one; its operator 株式会社イルヴィアーレ runs five shops of different names
//   (official site) — a small group, drafted.
//   Service charges checked against Tabelog’s Japanese original: 岩元 「サービス料10%」 (private rooms 15–20%); ヴィアーレ
//   「ディナータイムのみテーブルチャージお一人300円」; 老香港 「サービス料10％」; お茶と晴ル none listed.
//   Pins: Tabelog /en/ point, cross-checked with GSI only.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw2-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26002647', '雪梅花 菜根譚: a brand of KIWA Corporation (Tabelog lists kiwa-group.co.jp/xeumeihua_saikontan/ as its website), whose brand list names about 90 restaurant brands — a sub-brand of a large parent, as in osw9-12 (膳處漢ぽっちり)');
skip('26005029', 'chain: 5 ル・プチメック shops in the Tabelog crawl (御池店, 今出川店, JR京都駅, ジェイアール京都伊勢丹店, 新大阪駅店); 今出川店 is already in data/kyoto.json');
skip('26035503', 'chain: 6 三徳六味 shops in the Tabelog crawl (四条烏丸, 錦小路新町, 五条高倉, おでん×スタンド ESTフードホール, 福島本店, 福島2号店)');
skip('26000853', 'chain: 茶寮都路里 shops named in sources — 祇園本店, 京都伊勢丹店, 大丸心斎橋店 (Tabelog crawl), 大丸東京店 (timeout.jp), 高台寺店 (2017 release) = 5');

// ================================================================ 祇園 岩元
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26013915/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://gion-iwamoto.jp/'; const MENU = SITE + 'menu/'; const INFO = SITE + 'shopinfo/'; const LAW = SITE + 'tradelaw/';
  const H = day(['11:30', '14:30'], ['17:30', '22:30']);
  put({
    id: 'kyoto_gion_iwamoto', name: '祇園 岩元 (Gion Iwamoto)', category: 'MOM_AND_POP',
    lat: 35.002684, lng: 135.775206, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kaiseki with dashi and soy, anago rice boxes with tare and seasonal dishes; Tabelog lists vegetarian options but no gluten information is published (official menu; Tabelog).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. Tabelog lists vegetarian options; courses otherwise centre on fish, dashi and Omi Hime wagyu (meat can be swapped for fish), and no vegan course is published (official menu; Tabelog).',
    hours_raw: 'Lunch 11:30–14:30 (last order 13:00) and dinner 17:30–22:30 (last order 21:00; Tabelog gives 17:30–22:00, last order 20:00); closed irregularly (official site; Tabelog). Service charge 10%; 2nd-floor private rooms 15%, or 20% for two guests (official site; Tabelog’s Japanese original agrees). Cancellation 80% the day before and 100% on the day; lunch 100% the day before or on the day (official site). Seats: a one-plank counter of 8 and a window counter of 3 facing the moss garden on the 1st floor; private rooms of 8 and 16 upstairs; up to 26 (official site; Tabelog lists 30); non-smoking; wheelchair accessible; children from elementary-school age (Tabelog). Cards accepted (Tabelog). Geiko and maiko can be booked for banquets in the private rooms (official site). Off Hanamikoji near Ichiriki, south of Shijo; 5–7 min from Gion-Shijo Stn (official site; March 2025). Opened 7 July 2009 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Off Hanamikoji in Gion, south of Shijo — 5 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kaiseki of seasonal ingredients, with charcoal-grilled Omi Hime wagyu (official site) · lunch: half Kyoto anago rice box ¥2,530, Kyoto anago rice box ¥3,850, ogi bento ¥5,280 (4 or more), seasonal courses ¥8,800 and ¥12,100 · dinner: seasonal courses ¥12,100, ¥16,500 and ¥22,000 — sakizuke, hassun, owan, sashimi, grilled Omi Hime wagyu (or fish), a warm dish, rice and dessert · à la carte at night, e.g. sashimi from ¥1,320 · New Year courses ¥14,300 (lunch) and ¥19,800 (dinner) (official menu; service extra) · all-you-can-drink with courses for groups (May 2025) · wines chosen by a well-known sommelier (official site) · osechi supervised by the restaurant (2025 reviews)',
    website: SITE, gmaps: gm('祇園 岩元 花見小路'), menu_url: MENU,
    notes: "[Kaiseki · Gion, a townhouse kappo off Hanamikoji] A Gion townhouse just off Hanamikoji, with a one-plank counter, a window counter facing a moss garden and private tatami rooms upstairs, where you can book geiko or maiko for a banquet. Seasonal Kyoto kaiseki from ¥8,800 at lunch and ¥12,100 at dinner, its grilled course centred on charcoal-grilled Omi Hime wagyu (or fish if you prefer), plus an anago rice box lunch from ¥2,530. Reviewers find it classic rather than surprising, and good for entertaining. 10% service (more in private rooms).",
    chef_bio: { chef_name: '岩元 勝己', roles: ['Representative (代表責任者) on the shop’s commercial-law notice; reviewers describe an owner who explains each dish, with a head chef (料理長) not named'], origin: null,
      background: 'The official site’s commercial-law notice names 岩元 勝己 as the responsible representative of 祇園 岩元. Per the official site: authentic, artistic Kyoto cuisine with seasonal ingredients, Kyoto vegetables and fresh seafood, made easy to enjoy; the delicate cooking of the head chef; Omi Hime wagyu, raised longest in Shiga, grilled over charcoal; osechi supervised by the restaurant offered through Kyoto’s furusato-nozei programme (2021 notice). Opened 7 July 2009 (Tabelog). A July 2024 honeymoon couple describe the owner adjusting dishes for a pregnant guest and explaining each in English with a picture booklet.',
      philosophy: 'Per the official site: make the most of each season’s ingredients, beautiful to the eye as well as the palate, in relaxed Gion style.',
      specialty: 'Seasonal kaiseki; charcoal-grilled Omi Hime wagyu; Kyoto anago rice box.',
      anecdotes: [
        { text: 'A July 2024 honeymoon couple had forgotten to say the wife was pregnant and could not eat raw food; the owner adjusted the dishes on the spot and explained each one in English with a picture booklet.', source: R + 'B488865967/' },
        { text: 'A January 2025 diner in a private room could hear the neighbouring room clearly and found the drinks list limited.', source: R + 'B500857736/' },
        { text: 'A May 2025 group of nine had a ¥12,000 course with all-you-can-drink in the tatami room.', source: R + 'B483346087/' },
      ],
      japanese_sources_summary: '公式サイト (gion-iwamoto.jp): 祇園 岩元、花街祇園の京町家、一枚板のカウンター、坪庭を眺める窓際のカウンター、個室、季節素材の味を最大限に活かした芸術的な本格京料理を気軽に、近江姫和牛の炭火焼、料理長の繊細な料理、舞妓さん・芸妓さんとのお座敷、席: 1階カウンター8席・庭の見えるカウンター3席・2階個室8席と16席・最大26席、サービス料10%・2階個室15%・2名20%、キャンセル料 前日80%・当日100% (ランチは前日・当日100%)、11:30〜14:30 (L.O. 13:00)・17:30〜22:30 (L.O. 21:00)、不定休、東山区祇園町南側570-127、祇園四条駅より徒歩7分、メニュー: 京半あなご重2,530円、京あなご重3,850円、扇弁当5,280円、季節料理コース 昼8,800円・12,100円、夜12,100円・16,500円・22,000円 (サービス料別)、お肉が苦手な方は魚に変更可、特定商取引法の表記: 代表責任者 岩元 勝己。食べログ: 日本料理、30席、禁煙、車椅子可、ベジタリアンメニュー、小学生以上、2009年7月7日オープン。口コミ (2024〜2026年、英語)。',
      confidence: 'medium', sources: [TB, SITE, MENU, INFO, LAW, R + 'B483346087/', R + 'B488865967/', R + 'B491035304/', R + 'B492993292/', R + 'B496712841/', R + 'B500857736/', R + 'B502425661/', R + 'B516251927/', R + 'B518422665/', R + 'B524870425/'] },
    cultural_comfort: { level: 'english', note: 'The owner explained dishes in English with a picture booklet (July 2024); service 10–20%.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-127',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through March 2026.' },
    pin_source: `Tabelog ${TB} (35.002684, 135.775206); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 148m — a large lot block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu (service extra on courses).', last_checked: TODAY, items: [
      it('京あなご重', '', 'Kyoto anago rice box (lunch)', '¥3,850', 'Lunch', 'ask', 'no', 'Half box ¥2,530.', 'anago_ju'),
      it('季節料理コース', '', 'Seasonal kaiseki course (lunch)', '¥8,800', 'Lunch', 'ask', 'no', 'Also ¥12,100 with Omi Hime wagyu.', 'lunch_course'),
      it('季節料理コース', '', 'Seasonal kaiseki course with Omi Hime wagyu (dinner)', '¥12,100', 'Dinner', 'ask', 'no', 'Also ¥16,500 and ¥22,000; meat can be swapped for fish.', 'dinner_course'),
    ] }, {
    cuisine: '季節の素材の京料理の会席と、近江姫和牛の炭火焼 (公式サイト)・昼: 京半あなご重2,530円、京あなご重3,850円、扇弁当5,280円 (4名から)、季節料理コース8,800円と12,100円・夜: 季節料理コース12,100円、16,500円、22,000円 (先付、八寸、お椀、造り、近江姫和牛の焼き物 (魚に変更可)、温物、ご飯、水物)・夜はアラカルトも、お造り1,320円から・年末年始のコース 昼14,300円、夜19,800円 (公式メニュー、サービス料別)・グループのコースには飲み放題も (2025年5月)・著名なソムリエが選んだワイン (公式サイト)・店が監修したおせち (2025年の口コミ)',
    neighborhood: '四条の南、祇園の花見小路の脇。祇園四条駅から徒歩5分',
    gf_detail: '予約時に要確認。だしと醤油の京料理の会席、たれのあなご重、季節の料理。食べログではベジタリアンメニューありだが、グルテンの情報は公開されていない (公式メニュー、食べログ)。',
    vegan_detail: '予約時に要確認。食べログではベジタリアンメニューあり。コースは魚、だし、近江姫和牛が中心 (肉は魚に変更可) で、ヴィーガンのコースは公開されていない (公式メニュー、食べログ)。',
    notes: '[日本料理・祇園、花見小路の脇の町家の割烹] 花見小路のすぐ脇の祇園の町家。一枚板のカウンター、苔の庭を眺める窓際のカウンター、2階の座敷の個室があり、芸妓さんや舞妓さんを呼ぶ宴会もできる。季節の京料理の会席は昼8,800円から、夜12,100円から。焼き物は近江姫和牛の炭火焼 (魚にも変更可)。昼は2,530円からのあなご重も。口コミでは驚きより王道の京料理で、接待向きとの声。サービス料10% (個室はそれ以上)。',
  });
}

// ================================================================ お茶と晴ル
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26041869/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:30', '17:00']);
  put({
    id: 'kyoto_ocha_to_haru', name: 'お茶と晴ル (ocha to haru)', category: 'OMNI',
    lat: 35.003083, lng: 135.775328, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Warabi mochi with kinako and kuromitsu, Uji matcha kakigori with azuki and shiratama, and zenzai; no ingredient or gluten information is published (2025–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The kakigori comes with condensed milk on the side and the matcha latte has milk; warabi mochi, zenzai and plain teas may suit, but no ingredient list is published (2025–26 reviews).',
    hours_raw: '12:30–17:00 daily except Wednesday (Tabelog). Bookings taken (Tabelog); kakigori can sell out (May 2026). About 7–12 seats: a counter of 5 and a table, with a small garden at the entrance where guests wait (Tabelog lists 12; October 2025 and October 2026 reviews describe a counter and one table). Cash only — no cards, e-money or QR (Tabelog). Down a side street south of Hanamikoji past the Gion Kobu theatre (October 2025); 4 min from Gion-Shijo Stn (Tabelog). Opened 1 May 2024 (Tabelog); an August 2025 reviewer calls the building 90 years old.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Side street south of Hanamikoji in Gion — 4 min from Gion-Shijo Stn',
    cuisine: 'Small Gion tea café (2025–26 reviews) · Uji matcha kakigori with spring-water ice, azuki and three shiratama, extra matcha syrup and condensed milk on the side ¥1,600 · warabi mochi with kinako and kuromitsu, as a set with a drink ¥1,700 (matcha or matcha latte ¥1,750) · zenzai · hojicha in a pot ¥800, sencha, matcha latte hot or iced',
    website: null, gmaps: gm('お茶と晴ル 祇園'), menu_url: TB,
    notes: "[Sweets · Gion, matcha kakigori and warabi mochi] A quiet little tea café down a side street south of Hanamikoji, entered past a tiny waiting garden into a dim room with a counter and one table, birdsong and running water in the background. Order the huge Uji matcha kakigori (¥1,600) with azuki, shiratama and extra matcha syrup, or the soft warabi mochi set with a matcha latte (about ¥1,750). Some find the sets pricey and service slow. Cash only; 12:30–17:00, closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Not named in any source found'], origin: null,
      background: 'Opened 1 May 2024 (Tabelog). An August 2025 reviewer describes the shop as a 90-year-old Japanese café building in Gion. Reviewers note the spring-water ice and rich matcha syrup (2025).',
      philosophy: null,
      specialty: 'Uji matcha kakigori; warabi mochi.',
      anecdotes: [
        { text: 'An October 2025 kakigori fan made this the 74th bowl of the summer and finished with hot hojicha in a ceramic pot.', source: R + 'B515668567/' },
        { text: 'A May 2026 visitor found the famous kakigori sold out and had warabi mochi instead.', source: R + 'B528315756/' },
        { text: 'A September 2026 visitor found the service slow and the ¥1,750 set a bit high.', source: R + 'B536439071/' },
      ],
      japanese_sources_summary: '食べログ: お茶と晴ル、甘味処・かき氷、東山区祇園町南側570-125、祇園四条駅から徒歩4分、12:30〜17:00、水曜休み、予約可、12席、個室あり、カード・電子マネー・QR 不可、2024年5月1日オープン。口コミ (2025年8月〜2026年10月、英語): Uji 抹茶のかき氷1,600円 (湧き水の氷、小豆、白玉3つ、抹茶蜜と練乳を別添え)、わらび餅とドリンクのセット1,700円 (抹茶・抹茶ラテは1,750円)、ぜんざい、ほうじ茶800円、カウンター5席とテーブル、入口の待合の小さな庭、築90年という声。',
      confidence: 'low', sources: [TB, R + 'B511185587/', R + 'B515668567/', R + 'B518267033/', R + 'B527524831/', R + 'B528315756/', R + 'B529056367/', R + 'B531448506/', R + 'B531733926/', R + 'B534370545/', R + 'B536439071/', R + 'B537339207/', R + 'B537744863/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; tiny room; kakigori may sell out.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側570-125',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003083, 135.775328); cross-checked: GSI 京都府京都市東山区祇園町南側570番地 (lot) 132m — a large lot block; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515668567/', R + 'B536439071/'],
    price_note: 'Prices from October 2025 and September 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', 'kakigori', 'Uji matcha kakigori with azuki and shiratama', '¥1,600', 'Sweets', 'ask', 'ask', 'Condensed milk on the side.', 'matcha_kakigori'),
      it('', 'warabi mochi', 'Warabi mochi set with a drink', '¥1,700', 'Sweets', 'ask', 'ask', '¥1,750 with matcha or matcha latte.', 'warabi_set'),
      it('', 'hojicha', 'Hojicha in a pot', '¥800', 'Drinks', '', 'vegan', '', 'hojicha'),
    ] }, {
    cuisine: '祇園の小さな甘味処 (2025〜2026年の口コミ)・Uji 抹茶のかき氷、湧き水の氷に小豆と白玉3つ、抹茶蜜と練乳を別添えで1,600円・きな粉と黒蜜のわらび餅、ドリンクとのセット1,700円 (抹茶か抹茶ラテは1,750円)・ぜんざい・急須のほうじ茶800円、煎茶、温かい・冷たい抹茶ラテ',
    neighborhood: '祇園、花見小路の南の脇道。祇園四条駅から徒歩4分',
    gf_detail: '要確認。きな粉と黒蜜のわらび餅、小豆と白玉のUji 抹茶のかき氷、ぜんざい。原材料やグルテンの情報は公開されていない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。かき氷には練乳が別添えで、抹茶ラテには牛乳。わらび餅、ぜんざい、お茶は合いそうだが、原材料は公開されていない (2025〜2026年の口コミ)。',
    notes: '[甘味・祇園、抹茶のかき氷とわらび餅] 花見小路の南の脇道にある静かな小さな甘味処。小さな待合の庭を抜けると、カウンターとテーブル1つの薄暗い部屋に鳥の声と水の音。大きなUji 抹茶のかき氷 (1,600円) に小豆、白玉、追加の抹茶蜜、またはやわらかいわらび餅と抹茶ラテのセット (1,750円ほど) を。セットが高め、提供が遅いという声も。現金のみ、12:30〜17:00、水曜休み。',
  });
}

// ================================================================ カ・デル ヴィアーレ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26001159/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.watanabechef.com/ca-del-viale/'; const MENU = 'https://www.watanabechef.com/ca-del-viale-menu/'; const GRP = 'https://www.watanabechef.com/';
  const CORP = 'https://www.houjin-bangou.nta.go.jp/henkorireki-johoto.html?selHouzinNo=9130001040404';
  const H = day(['11:30', '14:30'], ['18:00', '22:00']);
  put({
    id: 'kyoto_ca_del_viale', name: 'カ・デル ヴィアーレ (Ca’ del Viale)', category: 'OMNI',
    lat: 35.008664, lng: 135.74132, cuisine_type: 'italian',
    gf_confidence: 'options', gf_label: 'Some GF options', gf_detail: 'Some GF options: the official menu says gluten-free pasta made from rice flour or corn flour is available, and the group runs a gluten-free deli (AL CAMINO). Cross-contact in a kitchen making fresh wheat pasta is not addressed — ask (official site). Reviewers also had a rice-flour chocolate cake for dessert (2025).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The restaurant is known for Kyoto and organic vegetables, with vegetable marinades and seasonal vegetable plates, but most dishes use ham, cheese, egg pasta or meat, and no vegan menu is published (official site; 2025–26 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00) and dinner 18:00–22:00 (last order 21:30); Tabelog lists Wednesday to Sunday and holidays, closed Monday and Tuesday (open when a holiday falls on either); the official site gives closed every Monday (open on holidays). Dinner table charge ¥300 per person (Tabelog’s Japanese original: 「ディナータイムのみテーブルチャージお一人300円」). 48 seats: a wide counter by the open kitchen and tables on the 1st floor (about 16 seated, 40 standing), and the 2nd floor for private parties of 10–24 (official site; Tabelog). Cards, iD and PayPay (Tabelog). Coin parking next door (September 2026). A white detached house on the north side of Sanjo-dori west of Senbon, with the group’s Paninoteca take-out counter at the front; 3–5 min from Nijo Stn (official site; Tabelog). Opened 1999 (official site; December 2025 review).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sanjo-dori west of Senbon, near Nijo Castle — 3 min from Nijo Stn',
    cuisine: 'Northern Italian, mainly Piedmontese, with Kyoto and organic vegetables, house hams and handmade pasta (official site) · antipasto Il Viale of seasonal vegetables and Italian hams ¥4,950, five antipasti ¥4,400, Kyoto mortadella (house original) ¥1,980, speck ¥2,200, cold fedelini with sea urchin ¥6,050 or caviar ¥13,200, burrata with sweet tomatoes ¥2,750, vegetable marinades ¥2,750, scallops with bottarga ¥4,730, tripe and chickpeas ¥2,200, ginger consommé ¥990 · handmade pasta such as egg-yolk tajarin; gluten-free rice- or corn-flour pasta on request (official menu, tax included) · lunch courses from ¥5,500–6,000 (2026 reviews) · seasonal European produce such as white asparagus, fresh porcini and white truffle · a large Piedmont wine list, magnum Barolo',
    website: SITE, gmaps: gm('カ・デル ヴィアーレ 二条'), menu_url: MENU,
    notes: "[Italian · Nijo, a Piedmontese ristorante with Kyoto vegetables] A white house near Nijo Station where chef Watanabe — a Piedmont wine lover who goes to the harvest there each year — has cooked northern Italian food with Kyoto and organic vegetables since 1999. Start with the showpiece platter of seasonal vegetables and house hams, then handmade pasta such as egg-yolk tajarin or cold fedelini with sea urchin, with Piedmontese wine; white truffle, porcini and white asparagus arrive in season. Gluten-free rice- or corn-flour pasta is offered. Lunch courses from about ¥5,500; ¥300 table charge at dinner.",
    chef_bio: { chef_name: '渡辺 (Watanabe)', roles: ['Owner-chef of the Il Viale group (株式会社イルヴィアーレ); given name not published'], origin: null,
      background: 'Per the group site: chef Watanabe first went to Italy at 21 to see Ferraris and Ducatis, was won over by the food, trained at well-known Italian restaurants in Kyoto and Tokyo, worked for a time on a farm in Kamigamo, and opened Cucina Il Viale at Horikawa-Oike in 1999; Kyoto-vegetable pasta met resistance at first ("put some bacon in it"), but ten years of keeping to it led to running five shops — Ca’ del Viale, TAVERNA il Viale, the gluten-free deli AL CAMINO, PANINOTECA and LA RISOTTERIA in the Daimaru Kyoto store; the chef goes to Piedmont every year to help with the grape harvest. The invoice number belongs to 株式会社イルヴィアーレ (NTA). Tabelog Italian WEST "Tabelog 100" 2023 (Tabelog). A March 2025 reviewer found the chef cooking at the counter with an assistant.',
      philosophy: 'Per the group site: "本当に美味しいものはいつか認められる" — truly good food is recognised in time.',
      specialty: 'Antipasto of Kyoto vegetables and house hams; handmade tajarin; Piedmont wine.',
      anecdotes: [
        { text: 'A March 2025 diner was surprised to see chef Watanabe cooking at the counter despite running several shops.', source: R + 'B505333737/' },
        { text: 'An April 2026 regular was shown how to cut the extra-thick imported asparagus lengthwise with a knife.', source: R + 'B440317438/' },
        { text: 'A May 2026 diner found the vegetable assortment salty and the bread a bit dry, but loved the zucchini and pecorino pappardelle.', source: R + 'B529273826/' },
      ],
      japanese_sources_summary: 'il Viale の公式サイト (watanabechef.com): 本店カ・デル ヴィアーレ (本格リストランテ)、11:30〜14:00 (L.O.)・18:00〜21:30 (L.O.)、定休日 毎月曜日 (祝日は営業)、JR二条駅近くの一軒家、店先にパニーノテカ、自家製ハムと地元京都の旬の野菜の前菜、自家製手打ちパスタ、白アスパラガス・ポルチーニ茸・白トリュフ、北イタリアピエモンテ州の料理とワイン、渡辺シェフ、2階は10〜24名で貸切、メニュー (税込): イル ヴィアーレスペシャル4,950円、前菜5種盛り4,400円、京都モルタデッラ1,980円、生うにの冷たいフェッデリーニ6,050円、キャビアの冷たいフェッデリーニ13,200円、ブッラータチーズ2,750円、いろいろなお野菜のマリネ2,750円、ホタテ貝のソテー カラスミ風味4,730円、トリッパとひよこ豆のトマト煮込み2,200円、生姜風味のコンソメスープ990円、グルテンフリー 米粉・トウモロコシ粉パスタご用意、渡辺シェフの経歴 (21歳で初めてイタリアへ、京都と東京の有名イタリア料理店で修業、上賀茂の農家で畑仕事、1999年堀川御池に Cucina Il Viale を開店、現在5店舗)。食べログ: イタリアン・パスタ、中京区西ノ京千本三条西入ル北側、水〜日・祝 11:30〜14:30・18:00〜22:00、月・火休み (祝日は営業)、ディナーのみテーブルチャージ300円、48席、カード・iD・PayPay 可、インボイス T9130001040404 (株式会社イルヴィアーレ)、イタリアン WEST 百名店 2023。口コミ (2024〜2026年、英語)。',
      confidence: 'medium', sources: [TB, SITE, MENU, GRP, CORP, R + 'B434985373/', R + 'B440317438/', R + 'B503505584/', R + 'B505333737/', R + 'B515024221/', R + 'B518474929/', R + 'B522555306/', R + 'B529204916/', R + 'B529273826/', R + 'B533599207/', R + 'B537680489/', R + 'B537796349/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR-code menu (October 2026); ¥300 table charge at dinner.' },
    safety: { ...SAFETY0, confidence: 'low',
      positives: [{ text: 'The official menu states that gluten-free pasta made from rice flour or corn flour is available (グルテンフリー 米粉、トウモロコシ粉パスタご用意ございます).', source: MENU, verified: TODAY }],
      gf_cross_contamination: [{ text: 'No source says how the gluten-free pasta is cooked — the kitchen makes fresh wheat pasta daily, so shared water, pans and surfaces are possible; confirm with the restaurant.', source: MENU, verified: TODAY }] },
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区西ノ京千本三条西入ル北側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (New Year 2027 notice) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008664, 135.74132); GSI could not match the address (no lot number; matched only the ward) — Tabelog point kept; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu (tax included; ¥300 table charge at dinner).', last_checked: TODAY, items: [
      it('季節のお野菜とイタリアンハムの盛り合わせ イル ヴィアーレスペシャル', '', 'Antipasto Il Viale of seasonal vegetables and Italian hams', '¥4,950', 'Antipasti', 'ask', 'no', '', 'antipasto_viale'),
      it('いろいろなお野菜のマリネ', '', 'Marinated vegetables', '¥2,750', 'Antipasti', 'ask', 'ask', '', 'veg_marinade'),
      it('生うにの冷たいフェッデリーニ', '', 'Cold fedelini with sea urchin', '¥6,050', 'Antipasti', 'ask', 'no', 'Ask for gluten-free pasta.', 'uni_fedelini'),
      it('グルテンフリーパスタ', '', 'Gluten-free pasta (rice or corn flour)', '', 'Pasta', '', '', 'On request; price not published.', 'gf_pasta'),
    ] }, {
    cuisine: '京野菜と有機野菜、自家製ハム、手打ちパスタの北イタリア、主にピエモンテの料理 (公式サイト)・季節のお野菜とイタリアンハムの盛り合わせ イル ヴィアーレスペシャル4,950円、前菜5種盛り4,400円、京都モルタデッラ (当店オリジナル) 1,980円、スペック2,200円、生うにの冷たいフェッデリーニ6,050円、キャビアの冷たいフェッデリーニ13,200円、ブッラータチーズと甘いトマト2,750円、いろいろなお野菜のマリネ2,750円、ホタテ貝のソテー カラスミ風味4,730円、トリッパとひよこ豆のトマト煮込み2,200円、生姜風味のコンソメスープ990円・卵黄たっぷりのタヤリンなど手打ちパスタ、米粉かトウモロコシ粉のグルテンフリーパスタも (公式メニュー、税込)・ランチのコースは5,500〜6,000円ほどから (2026年の口コミ)・白アスパラガス、ポルチーニ、白トリュフなどヨーロッパの旬の食材・豊富なピエモンテのワイン、マグナムのバローロ',
    neighborhood: '二条城に近い、千本の西の三条通。二条駅から徒歩3分',
    gf_detail: 'グルテンフリーの選択肢あり: 公式メニューに米粉とトウモロコシ粉のグルテンフリーパスタを用意とあり、グループにはグルテンフリー専門のデリ (AL CAMINO) もある。小麦の手打ちパスタを作る厨房での混入には触れていないので要確認 (公式サイト)。デザートに米粉のチョコレートケーキが出た口コミも (2025年)。',
    vegan_detail: '要確認。京野菜や有機野菜で知られ、野菜のマリネや季節の野菜の皿もあるが、多くはハム、チーズ、卵のパスタ、肉を使い、ヴィーガンのメニューは公開されていない (公式サイト、2025〜2026年の口コミ)。',
    notes: '[イタリアン・二条、京野菜のピエモンテ料理のリストランテ] 二条駅近くの白い一軒家。毎年ピエモンテのぶどうの収穫に行くワイン好きの渡辺シェフが、1999年から京野菜と有機野菜で北イタリア料理を作る。まずは季節の野菜と自家製ハムの名物の盛り合わせ、次に卵黄のタヤリンや生うにの冷たいフェッデリーニなどの手打ちパスタをピエモンテのワインと。季節には白トリュフ、ポルチーニ、白アスパラも。米粉かトウモロコシ粉のグルテンフリーパスタもある。ランチのコースは5,500円ほどから、夜はテーブルチャージ300円。',
  });
}

// ================================================================ 老香港酒家京都
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26000745/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://oldhongkong-kyoto.net/'; const GREET = SITE + 'greetings'; const LUNCH = SITE + 'lunch';
  const H = day(['11:30', '15:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_old_hong_kong_restaurant', name: '老香港酒家京都 (Old Hong Kong Restaurant Kyoto)', category: 'OMNI',
    lat: 35.003244, lng: 135.75917, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cantonese dim sum, noodles, fried dishes and sauces such as black vinegar and oyster; no gluten information is published (official site; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dim sum, seafood from the live tank, roast and braised meats, shark fin and abalone; a July 2026 buffet diner found few vegetable dishes (official site; 2026 reviews).',
    hours_raw: 'Lunch 11:30–15:30 (last order 15:00), dinner 17:00–22:00 (last order 21:00); open every day except two building closure days a year (official site; Tabelog). Service charge 10% (Tabelog’s Japanese original: サービス料10％; official site). No same-day cancellations (Tabelog); for the dim sum buffet, call if late — after 5 minutes without notice the booking is cancelled (official site). 92 seats with 5 private rooms for 2–60 (extra fee); non-smoking (smoking room in the building); wheelchair accessible; cards, UnionPay and PayPay (Tabelog). Take-away of nearly every dish by reservation (official site). In the basement of COCON KARASUMA, directly linked to Shijo Stn exit 2 and Hankyu Karasuma Stn exit 23 (Tabelog). The group began in Kobe’s Ijinkan district; this shop opened with COCON KARASUMA in December 2004 (official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'COCON KARASUMA basement at Shijo-Karasuma — 1 min from Shijo Stn',
    cuisine: 'Hong Kong-style Cantonese with dim sum carts and a live seafood tank (official site) · Hong Kong dim sum course, 90-minute order buffet from eight carts: about 15 starters, soup, 20 steamed, 10 grilled and 10 fried dim sum, Chinese vegetables, congee, noodle soup, baked sweets and desserts, ¥5,000 (children ¥2,500) · lunch courses ¥6,600 and ¥8,800; weekly chef’s lunch ¥2,280 including tax and service (official lunch page) · shark fin, dried abalone, Buddha-jumps-over-the-wall soup, kiln-roasted Peking duck, live-tank seafood (official site) · Shanghai crab in season, drunken crab, steamed soft-shelled turtle and shark fin soup, frog (2026 reviews) · weekday-evening dim sum buffet (from February 2026) · Shaoxing wine from the jar',
    website: SITE, gmaps: gm('老香港酒家京都 COCON烏丸'), menu_url: LUNCH,
    notes: "[Chinese · Shijo-Karasuma, Hong Kong dim sum from the carts] A big Hong Kong-style Cantonese restaurant in the basement of COCON KARASUMA, run since 2004 by a Kobe-born group whose cooks are from Hong Kong and Guangdong. The draw is the dim sum course: for ¥5,000 eight carts roll round with about sixty kinds of dim sum, congee, noodles and desserts for 90 minutes. Evenings bring shark fin, abalone, live-tank seafood, Peking duck and Shanghai crab in season. A longtime regular complains prices have doubled in two years. 10% service; open daily.",
    chef_bio: { chef_name: '陳 李富', roles: ['総料理長 (head chef) since 2026; with 料理相談役 劉 錦超 and general manager 陳 暁冬; operator KDA株式会社'], origin: 'Guangdong (official site).',
      background: 'Per the official site: the restaurant began in Kobe’s Ijinkan district and opened in Kyoto with COCON KARASUMA in December 2004, operated by KDA株式会社. Head chef 陳 李富 (born 1964 in Guangdong) cooked Hong Kong food for ten years from 1982, joined 老香港酒家 after coming to Japan in 1992, became sous-chef in 2018 and head chef in 2026; culinary adviser 劉 錦超 (born 1965 in Taishan, Guangdong) joined in 2004, was head chef from 2018 and specialises in dried shark fin, abalone and shiitake, and Buddha-jumps-over-the-wall soup; general manager 陳 暁冬 (born 1972 in Beijing) says eight dim sum carts run 365 days a year and nine cooks visit Hong Kong regularly to research. Tabelog Chinese WEST "Tabelog 100" 2021, 2023 and 2024 (Tabelog).',
      philosophy: 'Per the general manager on the official site: "没有最好 只有更好" — there is no best, only better.',
      specialty: 'Dim sum from the carts; shark fin and abalone; live-tank seafood.',
      anecdotes: [
        { text: 'An October 2026 regular on an eighth visit was shocked by a ¥45,000 bill, finding prices up 1.5 times on a year and double on two years, especially the drunken crab.', source: R + 'B455159948/' },
        { text: 'A June 2026 family arrived early on a hot day and were let in before opening time.', source: R + 'B470200529/' },
        { text: 'A May 2026 diner, still hungry after an unsatisfying meal next door, was kindly seated just for fried rice.', source: R + 'B529386058/' },
      ],
      japanese_sources_summary: '公式サイト (oldhongkong-kyoto.net): 老香港酒家京都 (オールドホンコンレストランキョウト)、広東料理の伝統と最新のトレンドを融合した香港料理、活魚水槽の海鮮料理、ワゴンサービスの飲茶、香港出身の調理人、テーブルサイドで個別に盛付け、神戸異人館街が発祥、2004年12月 COCON烏丸のオープンと同時に開業、KDA株式会社、総支配人 陳暁冬 (ちん・ぎょうとう、1972年北京生まれ)、料理相談役 劉錦超 (りゅう・きんちょう、1965年広東省台山市生まれ)、総料理長 陳李富 (ちん・りふう、1964年広東省生まれ、1992年来日、2026年総料理長)、8台のワゴン、香港式飲茶コース (90分の時間制オーダーバイキング) 5,000円・小学生2,500円・幼児1,500円、昼のコース6,600円・8,800円、シェフのおまかせランチ2,280円 (税サ込)、別途サービス料10%、下京区烏丸通四条下ル水銀屋町620 COCON烏丸地下1階、ランチ11:30〜15:30 (L.O. 15:00)、ディナー17:00〜22:00 (L.O. 21:00)、年中無休 (年2日の全館休館日を除く)。食べログ: 中華料理・飲茶、92席、個室5室、禁煙、車椅子可、カード・銀聯・PayPay 可、当日キャンセル不可、中国料理 WEST 百名店 2021・2023・2024。口コミ (2020〜2026年、英語)。',
      confidence: 'medium', sources: [TB, SITE, GREET, LUNCH, R + 'B433116181/', R + 'B455159948/', R + 'B470200529/', R + 'B501474146/', R + 'B524549636/', R + 'B528018687/', R + 'B529386058/', R + 'B531921525/', R + 'B532400286/', R + 'B532480579/', R + 'B534429820/', R + 'B535760206/'] },
    cultural_comfort: { level: 'english', note: 'English site; large room with carts — point at what you want; 10% service.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通四条下ル水銀屋町620 COCON烏丸 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news September 2026) and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003244, 135.75917); cross-checked: GSI 京都府京都市下京区水銀屋町620番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH],
    price_note: 'Official lunch page (tax included; 10% service extra except the chef’s lunch).', last_checked: TODAY, items: [
      it('香港式飲茶コース', 'yum cha', 'Hong Kong dim sum course, 90-minute order buffet', '¥5,000', 'Lunch', 'ask', 'no', 'Children ¥2,500.', 'yumcha_buffet'),
      it('お昼のコース', '', 'Lunch course No. 6', '¥6,600', 'Lunch', 'ask', 'no', 'No. 8 ¥8,800.', 'lunch_course'),
      it('シェフのおまかせランチ', '', 'Weekly chef’s lunch (weekdays)', '¥2,280', 'Lunch', 'ask', 'no', 'Tax and service included.', 'chef_lunch'),
    ] }, {
    cuisine: '飲茶のワゴンと活魚水槽のある香港スタイルの広東料理 (公式サイト)・香港式飲茶コース、8台のワゴンの90分のオーダーバイキング: 前菜約15種、スープ、蒸し物約20種、焼き物約10種、揚げ物約10種、中国野菜、中国粥、汁そば、焼き菓子、デザート、5,000円 (小学生2,500円)・昼のコース6,600円と8,800円、週替わりのシェフのおまかせランチ2,280円 (税サ込) (公式のランチページ)・フカヒレ、干し鮑、佛跳牆、釜焼き北京ダック、活魚水槽の海鮮 (公式サイト)・季節の上海蟹、酔っ払い蟹、すっぽんとフカヒレの蒸しスープ、カエル (2026年の口コミ)・平日夜の飲茶バイキング (2026年2月から)・甕出しの紹興酒',
    neighborhood: '四条烏丸の COCON烏丸 地下。四条駅から徒歩1分',
    gf_detail: '要確認。広東の点心、麺、揚げ物、黒酢やオイスターなどのソース。グルテンの情報は公開されていない (公式サイト、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。点心、活魚水槽の海鮮、焼き物や煮込みの肉、フカヒレ、鮑。2026年7月のバイキングの口コミでは野菜の料理が少ないという声 (公式サイト、2026年の口コミ)。',
    notes: '[中華・四条烏丸、ワゴンで回る香港の飲茶] COCON烏丸の地下にある大きな香港スタイルの広東料理店。神戸発祥のグループが2004年から営み、料理人は香港や広東の出身。目当ては飲茶のコースで、5,000円で90分、8台のワゴンが約60種の点心、粥、麺、デザートを運んでくる。夜はフカヒレ、鮑、活魚水槽の海鮮、北京ダック、季節の上海蟹も。長年の常連は2年で値段が倍になったと嘆く。サービス料10%、毎日営業。',
  });
}

save();
