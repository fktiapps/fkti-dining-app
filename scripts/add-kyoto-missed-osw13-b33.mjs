// Kyoto "what did we miss" pass (kyoto-missed) — lane osw13 (Tabelog id mod 6 = 0), batch 33.
// Kyoto priority (Greg, 2026-11-05): 2 shops from `next core`, 2 from `next notable`, lane only.
//   core:    + BASSANOVA 京都店 (Tokyo's green-curry ramen shop, Kyoto branch since 2023; no ramen block — see report)
//            + 秀秀生煎 京都本店 Shushu Shenjian (Shanghai pan-fried soup dumplings, same building)
//   notable: + 丸久小山園 西洞院店 / 茶房 元庵 Marukyu Koyamaen (tea house's shop and tea room; Cafe WEST 100 2025)
//            + 京・富小路 天ぷら吉川 Tempura Yoshikawa (ryokan tempura counter since 1964; Tempura 100)
//   None is in data/kyoto.json: grep by name (BASSANOVA/バサノバ, 秀秀 — the "Shu Shu" hit is 酒厨 Shuz —, 丸久小山園/
//   元庵/Marukyu, 吉川/Yoshikawa) and address (式部町259 舟木ビル, 西洞院御池下ル, 松下町135) found none.
//   Same-name counts (Samboa ruling): BASSANOVA — Shindaita, Harajuku (reopened June 2026) and Kyoto per search
//   results and reviews, under 5; 秀秀生煎 — one shop found; 丸久小山園 — the official site lists 4 directly run shops,
//   all in Kyoto (headquarters, Nishinotoin, JR Kyoto Isetan, Kyoto Takashimaya), only Nishinotoin with a tea room;
//   吉川 — a single ryokan. No page asks diners not to post on gourmet sites.
//   Pins: GSI only (no OSM). No new pin within 3 m of another (check-stacked-pins run before hand-off).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-33');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ BASSANOVA 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039706/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['16:00', '21:00']);
  put({
    id: 'kyoto_bassanova', name: 'BASSANOVA 京都店 (BASSANOVA Kyoto)', category: 'OMNI',
    lat: 35.006617, lng: 135.766751, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat ramen noodles in every bowl (2023–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the green-curry, tom yum and laksa broths come with chicken chashu, and one diner tasted a seafood base (June 2025).',
    hours_raw: 'Tabelog: every day 11:00–15:00 and 16:00–21:00; hours may change. A diner in July 2024 found it open on a Wednesday although a website listed Wednesday as closed; it once stayed open late at night (December 2023). Ticket machine; no reservations; cards and QR, though one diner found PayPay missing (Tabelog; 2023 review). Counter and some tables; non-smoking (Tabelog; January 2024). Opened 1 July 2023 (Tabelog). At the back of the 舟木ビル off the Teramachi Kyogoku arcade, an entrance that is easy to miss (2024 reviews); 5 min walk from Kawaramachi Stn.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Off the Teramachi arcade north of Shijo — 5 min walk from Kawaramachi Stn',
    cuisine: 'Thai-style ramen from the Shindaita (Tokyo) shop known for green-curry ramen (reviews) · green curry ramen — creamy coconut broth, mild heat, medium-thick curly noodles, grilled chicken chashu, menma, wood ear, red onion and greens — ¥1,200 (2024–January 2026), ¥1,700 (July 2026); tom yum kung ramen ¥1,200 (January 2026); laksa ramen ¥1,300 (November 2024); cold versions in summer · toppings: coriander ¥200, egg ¥200, chicken chashu ¥250; chashu rice bowl ¥600; a cheese risotto to finish the soup (2024–2025 reviews) · beer',
    website: TB, gmaps: gm('BASSANOVA 京都店'), menu_url: TB,
    notes: "[Ramen · Teramachi, Thai curry ramen] The Kyoto branch, opened July 2023, of BASSANOVA, the Shindaita ramen shop that made green-curry ramen its name: a creamy, gently spiced coconut broth with curly noodles and grilled chicken chashu, plus tom yum and laksa versions and cold bowls in summer. Hidden at the back of a building off the Teramachi arcade. Prices rose in 2026 (green curry ¥1,700 in July); some diners now find it pricey for the portion. 11:00–15:00, 16:00–21:00.",
    chef_bio: { chef_name: null, roles: ['Kyoto branch of BASSANOVA (Tokyo)'], origin: null,
      background: 'Per reviews: BASSANOVA began in Shindaita, Tokyo, nearly 20 years before a December 2023 visit, first known for Hakata noodles in a rich pork-bone broth with Japanese dashi and then for Thai curry ramen; a January 2024 diner names locations in Shindaita and Shinjuku and calls Kyoto the first in Kansai, opened in July 2023 (Tabelog: 1 July 2023). A December 2023 diner noticed the noodles are now medium-thin and chewy rather than Hakata-style.',
      philosophy: null,
      specialty: 'Green curry ramen.',
      anecdotes: [
        { text: 'A March 2025 diner said it tasted almost the same as Nissin’s instant green curry ramen — "In a way, it made me appreciate the greatness of Nissin!"', source: R + 'B502598032/' },
        { text: 'A July 2026 regular found the green curry ramen lukewarm, with cold toppings, and wondered whether ¥1,700 was worth it.', source: R + 'B520571848/' },
        { text: '"I have visited BASSANOVA several times since it opened in Shindaita nearly 20 years ago." — December 2023.', source: R + 'B475922386/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン、中京区式部町259 舟木ビル 1F、毎日11:00〜15:00・16:00〜21:00、予約不可、カード・QR 可、電子マネー不可、カウンター、禁煙、2023年7月1日オープン。口コミ (2023年10月〜2026年8月、英語): 東京・新代田発、グリーンカレーラーメン1,200円 (2026年7月は1,700円)、トムヤムクンラーメン1,200円、ラクサラーメン1,300円、冷やしもあり、パクチー200円、煮卵200円、鶏チャーシュー250円、チャーシュー丼600円、締めのチーズリゾット、中太の縮れ麺、券売機、入口がわかりにくい。',
      confidence: 'medium', sources: [TB, R + 'B473537755/', R + 'B475922386/', R + 'B477315231/', R + 'B487839572/', R + 'B502072360/', R + 'B502598032/', R + 'B504376831/', R + 'B511216962/', R + 'B520571848/', R + 'B533426210/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the ticket machine; three soups to choose from; no bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区式部町259 舟木ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (35.006617, 135.766751); cross-checked: GSI 京都府京都市中京区式部町259番地 (lot) 13m; shares the 舟木ビル with kyoto_shushu_shenjian, whose pin is set 6 m south; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520571848/', R + 'B487839572/'],
    price_note: 'Ticket-machine prices from 2024–2026 reviews; prices rose in 2026.', last_checked: TODAY, items: [
      it('', '', 'Green curry ramen', '¥1,700', 'Ramen', 'no', 'no', 'July 2026 (¥1,200 earlier).', 'green_curry_ramen'),
      it('', '', 'Tom yum kung ramen', '¥1,200', 'Ramen', 'no', 'no', 'January 2026.', 'tom_yum_ramen'),
      it('', '', 'Laksa ramen', '¥1,300', 'Ramen', 'no', 'no', 'November 2024.', 'laksa_ramen'),
      it('', '', 'Chashu rice bowl', '¥600', 'Rice', 'ask', 'no', 'July 2024.', 'chashu_don'),
    ] }, {
    cuisine: '東京・新代田のグリーンカレーラーメンの店のタイ風ラーメン (口コミ)・グリーンカレーラーメン: ココナッツのクリーミーなスープ、辛さは控えめ、中太の縮れ麺、焼いた鶏チャーシュー、メンマ、きくらげ、紫玉ねぎ、葉物、1,200円 (2024年〜2026年1月)、1,700円 (2026年7月)・トムヤムクンラーメン1,200円 (2026年1月)、ラクサラーメン1,300円 (2024年11月)、夏は冷やしも・トッピング: パクチー200円、煮卵200円、鶏チャーシュー250円、チャーシュー丼600円、スープに入れる締めのチーズリゾット (2024〜2025年の口コミ)・ビール',
    neighborhood: '四条の北、寺町通のアーケードから入ったところ。河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: どの丼も小麦の麺 (2023〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: グリーンカレー、トムヤム、ラクサのスープに鶏チャーシュー、魚介の土台を感じた客も (2025年6月)。',
    notes: '[ラーメン・寺町、タイカレーのラーメン] グリーンカレーラーメンで知られる新代田の BASSANOVA が2023年7月に開いた京都店。辛さ控えめのクリーミーなココナッツのスープに縮れ麺と焼いた鶏チャーシュー、トムヤムやラクサもあり、夏は冷やしも。寺町のアーケードから入ったビルの奥で見つけにくい。2026年に値上がりし (グリーンカレーは7月に1,700円)、量の割に高いと感じる客も。11時〜15時、16時〜21時。',
  });
}

// ================================================================ 秀秀生煎 京都本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26036994/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:30']);
  put({
    id: 'kyoto_shushu_shenjian', name: '秀秀生煎 京都本店 (Shushu Shenjian Kyoto)', category: 'OMNI',
    lat: 35.006565, lng: 135.766732, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pan-fried soup dumplings in a wheat wrapper, scallion-oil noodles and wontons (Tabelog; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the dumplings are pork (or shrimp and pork) in chicken stock (Tabelog), though side dishes such as dried tofu salad and wood ear with mustard greens appear in the sets (2026 reviews).',
    hours_raw: 'Tabelog: 11:00–20:30, closed Tuesday. Bookings by phone only (Tabelog; diners also booked through Tabelog in 2025–2026). 10 seats at five tables for two; non-smoking; children and strollers welcome (Tabelog). PayPay only, no cards or e-money (Tabelog). Order by smartphone; self-service water (June 2026). Takeaway and delivery (Tabelog; April 2025). English menu (Tabelog). Opened 18 January 2022 (Tabelog). In the 舟木ビル off the Teramachi arcade, behind a large xiaolongbao model at the door (August 2026); 5 min walk from Kawaramachi Stn.',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Off the Teramachi arcade north of Shijo — 5 min walk from Kawaramachi Stn',
    cuisine: 'Shanghai-style pan-fried soup dumplings (shengjian), handmade and wrapped just before cooking with fresh pork and a chicken stock (Tabelog) · original pork and green-skinned shrimp-and-pork shengjian, with black vinegar · sets: Manpuku set ¥1,780 (April 2026); four dumplings with two small sides (dried tofu salad, wood ear with pickled mustard greens, spicy kombu) and Chinese tea such as white-peach oolong (2026) · Shanghai scallion-oil noodles ¥580, Sichuan red-oil wontons · Tsingtao beer, highballs',
    website: TB, gmaps: gm('秀秀生煎 京都本店'), menu_url: TB,
    notes: "[Soup dumplings · Teramachi, Shanghai shengjian] A 10-seat Shanghai-style shop for pan-fried soup dumplings — crisp-bottomed, wrapped to order and full of hot broth (bite carefully, add black vinegar) — in the original pork or a green-skinned shrimp version, sold in sets with small sides and Chinese tea. Manpuku set ¥1,780 (2026). Reviews split: many love the juicy dumplings; a November 2025 diner found the noodles and wontons poor and the service cold. 11:00–20:30, closed Tuesday; PayPay only.",
    chef_bio: { chef_name: null, roles: ['Shop (operator not named on the sources read)'], origin: null,
      background: 'Tabelog’s introduction: opened in January 2022 (opening day 18 January 2022), proud of handmade xiaolongbao wrapped just before cooking with flavourful chicken stock and fresh pork, three good-value sets for drinking, and a retro Shanghai interior. An April 2025 diner heard from staff that Uber Eats couriers collect often; another found the room full of overseas guests.',
      philosophy: null,
      specialty: 'Pan-fried soup dumplings (shengjian).',
      anecdotes: [
        { text: '"I still wonder why the skin is green, but the burst of shrimp flavor is irresistible." — April 2025.', source: R + 'B504823798/' },
        { text: 'A November 2025 diner found the dumplings full of soup but the scallion-oil noodles and wontons disappointing, and the male staff member expressionless and cold.', source: R + 'B516463142/' },
        { text: '"The staff kindly explained how to eat the hot xiaolongbao, and there were instructions on the menu as well." — September 2026.', source: R + 'B537086065/' },
      ],
      japanese_sources_summary: '食べログ: 小籠包・バル・居酒屋、中京区式部町259-1 舟木ビル 1F、11:00〜20:30、火曜定休、予約は電話のみ、10席 (2名テーブル×5)、禁煙、子連れ・ベビーカー可、PayPay のみ (カード・電子マネー不可)、テイクアウト・デリバリー、英語メニュー、2022年1月18日オープン、包みたての手作り焼き小籠包、鶏がらスープと新鮮な豚肉、3種のお得なセット、レトロな上海の店内。口コミ (2025年4月〜2026年9月、英語): 豚の生煎と緑の皮の海老入り、黒酢、満腹セット1,780円、葱油拌麺580円、紅油抄手、干し豆腐の和え物、白桃烏龍茶、スマホで注文。',
      confidence: 'medium', sources: [TB, R + 'B504823798/', R + 'B507126388/', R + 'B516463142/', R + 'B520572746/', R + 'B521735454/', R + 'B526003832/', R + 'B529390151/', R + 'B535819833/', R + 'B536561487/', R + 'B537086065/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'English menu (Tabelog) and smartphone ordering; staff explain how to eat the dumplings; PayPay only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区式部町259-1 舟木ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006620, 135.766732), set 6 m south so as not to sit on kyoto_bassanova (same 舟木ビル, 式部町259; 2 m apart on Tabelog); cross-checked: GSI 京都府京都市中京区式部町259番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526003832/'],
    price_note: 'No published menu; prices from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Manpuku set (pan-fried soup dumplings with sides and soup)', '¥1,780', 'Sets', 'no', 'no', 'April 2026.', 'manpuku_set'),
      it('', '', 'Shanghai scallion-oil noodles', '¥580', 'Noodles', 'no', 'ask', 'April 2026.', 'scallion_oil_noodles'),
    ] }, {
    cuisine: '包みたての手作りの上海式焼き小籠包 (生煎)、新鮮な豚肉と鶏がらスープ (食べログ)・豚のオリジナルと緑の皮の海老と豚、黒酢で・セット: 満腹セット1,780円 (2026年4月)、焼き小籠包4個に小皿2品 (干し豆腐の和え物、きくらげと高菜、ピリ辛昆布) と白桃烏龍茶などの中国茶 (2026年)・上海葱油拌麺580円、四川の紅油抄手・青島ビール、ハイボール',
    neighborhood: '四条の北、寺町通のアーケードから入ったところ。河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 小麦の皮の焼き小籠包、葱油の麺、ワンタン (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 小籠包は豚 (または海老と豚) と鶏がらスープ (食べログ)。セットには干し豆腐の和え物やきくらげと高菜などの小皿もある (2026年の口コミ)。',
    notes: '[焼き小籠包・寺町、上海の生煎] 10席の上海式焼き小籠包の店。底はカリッと、注文ごとに包み、熱いスープがたっぷり (かじる時は注意、黒酢で)。豚のオリジナルと緑の皮の海老入りがあり、小皿と中国茶とのセットで。満腹セット1,780円 (2026年)。評価は分かれ、多くは小籠包をほめるが、2025年11月の客は麺とワンタンがいまひとつで接客が冷たいと書いた。11時〜20時半、火曜休み、支払いは PayPay のみ。',
  });
}

// ================================================================ 丸久小山園 西洞院店 (茶房 元庵)
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26006904/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.marukyu-koyamaen.co.jp/motoan.html'; const CO = 'https://www.marukyu-koyamaen.co.jp/company.html';
  const H = day(['09:30', '18:00']);
  put({
    id: 'kyoto_marukyu_koyamaen_motoan', name: '丸久小山園 西洞院店 茶房 元庵 (Marukyu Koyamaen Nishinotoin, Motoan)', category: 'OMNI',
    lat: 35.010151, lng: 135.755058, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The tea room serves matcha and other teas with wagashi, ice cream, a matcha roll cake and summer shaved ice (official menu); the sweets are not described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The teas themselves (matcha, sencha, gyokuro, hojicha, genmaicha) suit, but the ice creams, roll cake and cream teas use dairy, and the wagashi are not described (official menu).',
    hours_raw: 'Official site: shop 9:30–18:00; tea room 10:30–17:00 last order (closing 17:30); closed every Wednesday, the third Tuesday and the New Year. Tabelog gives Wednesday closed (open on holidays). No reservations for seats; the take-home matcha roll cake (¥3,780 a 15 cm roll) is by phone order only, not on the day, collected at the shop (official site). The tea room seats about 10–13 and includes a two-mat tea room (no tea ceremony performed) facing a garden; non-smoking; children welcome (official site; Tabelog). Cards, IC and QR payments (Tabelog). On Nishinotoin-dori south of Oike; 6 min walk from Karasuma Oike or Nijojo-mae stations (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishinotoin-dori south of Oike — 6 min walk from Karasuma Oike Stn',
    cuisine: 'Shop and tea room of the Uji tea house Marukyu Koyamaen, founded in the Genroku era (official site; October 2026 review) · usucha 「雅の院」 (this shop only) with wagashi ¥1,595; 「長安」 usucha ¥2,035 or koicha ¥2,860 with wagashi; gyokuro 「滴の院」 with wagashi ¥2,255; hojicha with wagashi ¥1,430 · Uji matcha ice cream ¥990, Kyoto hojicha ice cream ¥880; matcha roll cake set ¥1,925 (a slice ¥1,100, sold out daily) · summer: matcha shaved ice ¥1,210, matcha-azuki shaved ice ¥1,320; winter: matcha zenzai · koicha rice until 14:00 (official menu, tax included) · matcha, gyokuro and sencha to buy, soft-serve to take away in summer (2025–2026 reviews)',
    website: SITE, gmaps: gm('丸久小山園 西洞院店 元庵'), menu_url: SITE,
    notes: "[Tea room · Nishinotoin-Oike, an Uji tea house's own shop] The Kyoto shop of Marukyu Koyamaen, a tea house from the Genroku era: buy matcha and gyokuro in front, then sit in the small tea room Motoan at the back, looking onto a garden, for usucha and wagashi (from ¥1,595), Uji matcha ice cream (¥990) or the matcha roll cake set (¥1,925), with shaved ice in summer. Cafe WEST Tabelog 100 2025. No bookings for seats; the tea room is small. 9:30–18:00 (tea room to 17:00 last order), closed Wednesdays and the third Tuesday.",
    chef_bio: { chef_name: null, roles: ['Directly run shop of the tea company 丸久小山園 (Uji)'], origin: null,
      background: 'Per the official site: Marukyu Koyamaen’s directly run shops are all in Kyoto — the headquarters shop, this Nishinotoin shop with the tea room 元庵, and counters in JR Kyoto Isetan and Kyoto Takashimaya; the Nishinotoin shop sells matcha, gyokuro, sencha and genmaicha and matcha sweets, and its tea room includes a proper two-mat tea room where the menu can be enjoyed without a tea ceremony. An October 2026 review gives the founding as the Genroku era and the tea room as a renovated 100-year-old townhouse. Tabelog Cafe WEST "Tabelog 100" 2025.',
      philosophy: null,
      specialty: 'Usucha with wagashi; matcha roll cake.',
      anecdotes: [
        { text: 'An August 2026 buyer of the summer Uji matcha kanten jelly was disappointed to find the matcha in a separate packet to sprinkle on.', source: R + 'B509602658/' },
        { text: 'A September 2026 visitor’s friend quoted the Southern Song poet Lu You on the rainy Kyoto afternoon over a cup of matcha.', source: R + 'B532137996/' },
        { text: '"Although it\'s a bit away from the bustling area, there are many foreign visitors." — September 2026.', source: R + 'B536434421/' },
      ],
      japanese_sources_summary: '公式サイト (marukyu-koyamaen.co.jp): 西洞院店・茶房「元庵」、ショップは抹茶・玉露・煎茶・玄米茶と抹茶のお菓子、茶房は抹茶・煎茶・ほうじ茶と和菓子のセット、アイスクリーム、ロールケーキ (席数13)、本格的な二畳の茶室 (茶道の点前はなし)、中京区西洞院通御池下ル西側、茶房10:30〜17:00ラストオーダー (17:30閉店)、売店9:30〜18:00、毎週水曜日・第3火曜日・年末年始休み、メニュー (税込): 抹茶「雅の院」(西洞院店限定) 薄茶と和菓子1,595円、宇治抹茶アイスクリーム990円、京ほうじ茶アイスクリーム880円、抹茶「長安」薄茶と和菓子2,035円・濃茶と和菓子2,860円、玉露「滴の院」と和菓子2,255円、ほうじ茶と和菓子1,430円、抹茶のロールケーキセット1,925円 (1カット1,100円、予約不可・売り切れ次第終了)、抹茶かき氷「京氷室」1,210円・抹茶あずき氷1,320円 (夏季のみ)、抹茶ぜんざい (冬季のみ)、濃茶の薄葉ごはん1,600円 (午後2時まで)、持ち帰りのロールケーキ1本3,780円 (完全事前電話予約制)。会社概要: 直営店は京都のみ (本社直売店、西洞院店・茶房元庵、ジェイアール京都伊勢丹店、京都高島屋店)。食べログ: カフェ・甘味処・かき氷、水曜休み (祝日は営業)、10席、禁煙、子供可、カード・電子マネー・QR 可、カフェ WEST 百名店 2025。',
      confidence: 'medium', sources: [TB, SITE, CO, R + 'B509602658/', R + 'B532137996/', R + 'B534330144/', R + 'B535186016/', R + 'B535340360/', R + 'B535812181/', R + 'B536434421/', R + 'B536887706/', R + 'B537255908/', R + 'B538284306/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order tea sets from a short menu in the small tea room; the official site has Chinese pages; no bookings.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区西洞院通御池下ル西側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Cafe WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.010151, 135.755058); GSI resolves the lot-less address only to 中京区 (ward), so the pin rests on the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE],
    price_note: 'Official tea-room menu, tax included.', last_checked: TODAY, items: [
      it('抹茶「雅の院」薄茶（温）と和菓子', '', 'Usucha 「雅の院」 (this shop only) with wagashi', '¥1,595', 'Tea', 'ask', 'ask', '', 'usucha_miyabi'),
      it('抹茶「長安」濃茶と和菓子', '', 'Koicha 「長安」 with wagashi', '¥2,860', 'Tea', 'ask', 'ask', '', 'koicha_choan'),
      it('宇治抹茶アイスクリーム', '', 'Uji matcha ice cream', '¥990', 'Sweets', 'ask', 'no', '', 'matcha_ice'),
      it('抹茶のロールケーキセット', '', 'Matcha roll cake with a drink', '¥1,925', 'Sweets', 'no', 'no', 'Sold out daily; no reservations.', 'roll_cake_set'),
      it('抹茶かき氷「京氷室」', '', 'Matcha shaved ice (summer)', '¥1,210', 'Sweets', 'ask', 'ask', 'Summer only.', 'matcha_kakigori'),
    ] }, {
    cuisine: '元禄年間創業の宇治の茶の老舗、丸久小山園の店と茶房 (公式サイト、2026年10月の口コミ)・薄茶「雅の院」(西洞院店限定) と和菓子1,595円、「長安」の薄茶2,035円・濃茶2,860円 (和菓子付き)、玉露「滴の院」と和菓子2,255円、ほうじ茶と和菓子1,430円・宇治抹茶アイスクリーム990円、京ほうじ茶アイスクリーム880円、抹茶のロールケーキセット1,925円 (1カット1,100円、毎日売り切れ次第終了)・夏: 抹茶かき氷1,210円、抹茶あずき氷1,320円、冬: 抹茶ぜんざい・濃茶の薄葉ごはん (14時まで) (公式メニュー、税込)・抹茶、玉露、煎茶の販売、夏は持ち帰りのソフトクリーム (2025〜2026年の口コミ)',
    neighborhood: '御池の南の西洞院通。烏丸御池駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報はない。茶房は抹茶などのお茶と和菓子、アイスクリーム、抹茶のロールケーキ、夏のかき氷 (公式メニュー)。お菓子の中身は書かれていない。',
    vegan_detail: '要確認。お茶 (抹茶、煎茶、玉露、ほうじ茶、玄米茶) は合うが、アイスクリーム、ロールケーキ、クリームティーは乳製品を使い、和菓子の中身は書かれていない (公式メニュー)。',
    notes: '[茶房・西洞院御池、宇治の茶舗の直営店] 元禄年間からの茶舗、丸久小山園の京都の店。手前で抹茶や玉露を買い、奥の小さな茶房「元庵」で庭を眺めながら薄茶と和菓子 (1,595円から)、宇治抹茶アイスクリーム (990円)、抹茶のロールケーキセット (1,925円)、夏はかき氷。カフェ WEST 百名店 2025。席の予約は不可で、茶房は小さい。9時半〜18時 (茶房は17時ラストオーダー)、水曜と第3火曜休み。',
  });
}

// ================================================================ 京・富小路 天ぷら吉川
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001150/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.kyoto-yoshikawa.co.jp/'; const MEAL = SITE + 'meal/'; const ABOUT = SITE + 'about/';
  const H = day(['11:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_tempura_yoshikawa', name: '京・富小路 天ぷら吉川 (Kyo Tominokoji Tempura Yoshikawa)', category: 'OMNI',
    lat: 35.010321, lng: 135.764807, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the official site says the restaurant cannot cater for gluten-free diets; the cooking is battered tempura.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the official site says vegan diets cannot be catered for; a vegetarian menu is offered for an extra charge.',
    hours_raw: 'Official site and Tabelog: tempura counter lunch 11:00–13:30 last order (closes 15:00), dinner 17:30–20:00 last order (closes 22:00); private rooms lunch 12:00–13:30 and dinner 17:30–19:30 last order; closed Tuesday and Wednesday (may open by season; counter closed 31 Dec and 1 Jan). Reservation only; same-day changes to numbers or diet requests cannot be accommodated; cancellation fees apply; 30 minutes late without contact counts as a cancellation (Tabelog). Service charge: private rooms 15%, counter 5% at dinner only (Tabelog; official site). Counter: no children aged 5 or under; private rooms take children with a kids’ course from ¥3,000 (official site; Tabelog). About 100 seats: 8 private rooms with garden views, a hall for up to 25, and the counter (8 seats per Tabelog; 11 per an August 2026 review); designated smoking area, e-cigarettes only in private rooms; paid parking for 3 cars by reservation (Tabelog). English menu and English-speaking staff (Tabelog). Cards, no e-money or QR (Tabelog). Tominokoji south of Oike; 5 min walk from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Tominokoji south of Oike — 5 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Kyoto itamae tempura at a counter made from the ryokan’s tea room in 1964, and tempura kaiseki in garden rooms (official site) · counter lunch ¥6,600: 12 pieces — starting and ending with shrimp, with seasonal vegetables (okra, lily bulb, pumpkin, Kamo eggplant), conger eel, squid, scallop, manakatsuo — with rice, red miso soup and pickles; add-ons such as kakiage, tendon or tencha (+¥1,100) (2026 reviews) · dinner and private-room courses with sashimi and 14 pieces, finishing with kakiage rice bowl or tempura chazuke; special hamo, crab, fugu and kue courses (official site; August 2026) · matcha salt and tempura dashi (October 2026) · vegetarian menu for an extra charge (official site)',
    website: SITE, gmaps: gm('天ぷら吉川 富小路'), menu_url: MEAL,
    notes: "[Tempura · Tominokoji-Oike, a ryokan's tea-room counter] A cooking ryokan founded in 1952 in an early-Taisho sukiya house with part of a garden attributed to Kobori Enshu; in 1964 it turned the tea room into a tempura counter, rare in Kyoto then. Counter lunch of 12 pieces, shrimp first and last, ¥6,600 (2026); dinners and garden-room kaiseki cost more. Tempura Tabelog 100 2022, 2023, 2025. The house cannot cater for vegan or gluten-free diets. One June 2026 diner found the batter thick and the service hurried. Closed Tuesday and Wednesday; reservation only.",
    chef_bio: { chef_name: null, roles: ['Cooking ryokan (料理旅館) and tempura counter; no chef named'], origin: null,
      background: 'Per the official site: Yoshikawa opened in 1952 on its present site as an inn; the sukiya building dates from the early Taisho era, and the main garden, about a third of the property, is older and is said to be by Kobori Enshu; the house was once the home of the poet 江馬天江, who was involved in founding what is now Ritsumeikan University, and works by 太田垣蓮月 and 富岡鉄斎 remain; the eight rooms are each furnished differently; itamae tempura, then rare in Kyoto, began in 1964, the year of the Tokyo Olympics, in a converted tea room. Tabelog gives the opening day as 1 February 1952. Diners in October 2026 had come for over 20 and 30 years; one notes more tourists, including overseas guests, than before.',
      philosophy: 'Per the official site: to be a cooking ryokan where guests feel as relaxed as on coming home ("okaeriyasu").',
      specialty: 'Counter tempura lunch; kakiage.',
      anecdotes: [
        { text: '"I\'ve been coming here for 30 years… I always place an additional order at the end, and that’s for the kakiage." — October 2026.', source: R + 'B526607425/' },
        { text: 'A June 2026 diner found the lily bulb and pumpkin slightly hard, the batter thick, and the serving and handling of utensils hurried.', source: R + 'B529011197/' },
        { text: 'A July 2026 family celebrated a daughter’s wedding with a tempura course in a garden-view private room during the Gion Festival.', source: R + 'B448132304/' },
      ],
      japanese_sources_summary: '公式サイト (kyoto-yoshikawa.co.jp): 料理旅館・天ぷら 吉川、京都御苑近く、戦後に料理旅館として創業、「退享園」(退去園) と呼ばれた小堀遠州作と伝わる庭園、豪商の住まいの数奇屋造りの館。吉川について: 1952年に片泊まりの宿として創業、建物は大正初期、庭は小堀遠州作と聞き及ぶ、漢詩人の江馬天江の住まい、太田垣蓮月尼や富岡鉄斎の作品、八室のしつらえはすべて異なる、1964年の東京オリンピックに合わせて茶室を改装して板前天ぷらを始めた。お食事: お昼12:00〜13:30 L.O. (15時閉館)、夜17:30〜19:30 L.O. (22時閉館)、天ぷら会席、ハモ・蟹・フグ・クエの特別コース、消費税・奉仕料15%別、ベジタリアン対応 (追加料金)、ヴィーガン・グルテンフリーは対応致しかねます、天ぷらカウンター 11:00〜13:30 L.O.・17:30〜20:00 L.O.、奉仕料5% (昼のカウンターは消費税のみ)、5歳以下は不可、カウンター貸切 (最大10名)、法事やお子様メニュー。食べログ: 天ぷら・日本料理・料理旅館、中京区富小路通御池下ル松下町135、火・水曜休み、完全予約制、100席 (個室8、広間最大25名、カウンター8席)、英語メニュー・英語のスタッフ、カード可、駐車場3台 (要予約)、1952年2月1日オープン、天ぷら百名店 2022・2023・2025。口コミ (2026年6月〜10月、英語): カウンターのランチ6,600円で12品、海老で始まり海老で終わる、天茶+1,100円、抹茶塩と天つゆ、30年通う客。',
      confidence: 'medium', sources: [TB, SITE, MEAL, ABOUT, R + 'B448132304/', R + 'B459246951/', R + 'B466377061/', R + 'B526607425/', R + 'B529011197/', R + 'B532283666/', R + 'B532913463/', R + 'B533365211/', R + 'B537052397/', R + 'B538010206/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); reservation only; vegetarian menu on request (extra charge).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区富小路通御池下ル松下町135',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Tempura Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.010321, 135.764807); cross-checked: GSI 京都府京都市中京区松下町135番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B532283666/', MEAL],
    price_note: 'Course prices on the official site did not render; counter lunch price from July–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Counter tempura lunch (12 pieces, rice, red miso soup, pickles)', '¥6,600', 'Counter', 'no', 'no', 'July–August 2026.', 'counter_lunch'),
      it('天茶', '', 'Add-on: tempura chazuke', '+¥1,100', 'Counter', 'no', 'no', 'July 2026.', 'tencha'),
    ] }, {
    cuisine: '1964年に旅館の茶室を改装したカウンターの京都の板前天ぷらと、庭に面した座敷の天ぷら会席 (公式サイト)・カウンターのランチ6,600円: 海老で始まり海老で終わる12品、オクラ、百合根、かぼちゃ、賀茂茄子などの季節の野菜、鱧、いか、帆立、まながつお、ご飯、赤だし、香の物、追加でかき揚げ、天丼、天茶 (+1,100円) (2026年の口コミ)・夜や個室のコースはお造りと14品、締めはかき揚げ丼か天茶、ハモ・蟹・フグ・クエの特別コース (公式サイト、2026年8月)・抹茶塩と天つゆ (2026年10月)・ベジタリアン対応 (追加料金) (公式サイト)',
    neighborhood: '御池の南の富小路通。京都市役所前駅から徒歩5分',
    gf_detail: 'グルテンフリーではない: 公式サイトにグルテンフリーには対応できないとあり、料理は衣をつけた天ぷら。',
    vegan_detail: 'ヴィーガン不可: 公式サイトにヴィーガンには対応できないとある。ベジタリアンには追加料金で対応。',
    notes: '[天ぷら・富小路御池、料理旅館の茶室のカウンター] 1952年創業の料理旅館。大正初期の数寄屋の館に、小堀遠州作と伝わる庭の一部が残る。1964年、当時京都では珍しかった板前天ぷらのカウンターを茶室を改装して始めた。カウンターの昼は海老で始まり海老で終わる12品で6,600円 (2026年)、夜や庭に面した座敷の会席はさらに高い。天ぷら百名店 2022・2023・2025。ヴィーガンとグルテンフリーには対応できないと店が案内している。2026年6月の客は衣が厚く給仕が慌ただしいと感じた。火・水曜休み、完全予約制。',
  });
}

save();
