// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 6.
//   + おでんと、アジフライ。 バルチカ03 (oden and thick fried horse mackerel, Innogate Osaka 5F, opened July 2024)
//   + 日本料理 河久 Kawakyu (seasonal Japanese and kaiseki on the 33rd floor of 大阪駅前第3ビル)
//   + 北新地 串揚げ かな山 Kitashinchi Kushiage Kanayama (kushiage courses and snow-aged pork katsu lunches, since 2019)
//   + capi (innovative Italian counter of eight seats in 北新地PLACEビル 6F; Tabelog Innovative 100 2025)
//   Chain check: おでんと、アジフライ。: two shops, this one and 本町本店 (Tabelog remarks); no operator found by web search.
//   Kawakyu: one restaurant; invoice T5120001113783 → 株式会社トップオブオオサカ, head office 梅田1-1-3 (NTA register, read 2026-11-01).
//   Kanayama: one sister shop, "Kushiage Haru Natsu Aki Fuyu" (Tabelog). capi: one shop. None is in data/osaka.json (grep by id,
//   name and address, 2026-11-01). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ おでんと、アジフライ。 バルチカ03
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27143258/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']); const E = day(['11:30', '23:00']);
  put({
    id: 'osaka_oden_to_ajifurai_barchika03', name: 'おでんと、アジフライ。 バルチカ03 (Oden to Ajifurai, Barchika 03)', category: 'OMNI',
    lat: 34.700531, lng: 135.491627, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The fried horse mackerel is breaded (not gluten-free), and oden is simmered in a Kansai-style dashi with fishcakes and a burdock tempura among the pieces; the broth\'s seasoning is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden in a dashi broth with beef tendon and egg, and fried horse mackerel.',
    hours_raw: 'Mon–Fri 17:00–23:00 (last order food 22:00, drinks 22:30); Sat, Sun and holidays 11:30–23:00, daytime drinking welcome (Tabelog). Reservations accepted; parties of three or fewer booked at the counter table may be moved to the counter (Tabelog). Full on a Sunday at 16:30, a short wait (September 2026); fully booked on a weekday at 19:00 (June 2026). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), IC cards and other e-money, QR payment including Alipay and WeChat Pay (Tabelog). 20 seats: a counter of 12 and one counter table of 8; non-smoking (Tabelog). Opened 31 July 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 3-2-123, 5F of Innogate Osaka (イノゲート大阪), Barchika 03 — directly connected to the west exit of JR Osaka Stn',
    cuisine: 'Oden in a golden Kansai-style dashi, classic and creative pieces, and thick fried horse mackerel delivered from Sakai Port, Tottori (Tabelog) · fried horse mackerel in full and half portions, with a choice of sauces (tartar, mentaiko tartar, salt and lemon, ponzu) and fish-bone crackers on the side: ¥780 (June 2026), ¥380 (September 2026) · oden assortment ¥1,720 (June 2026); pieces named in 2026: daikon, potato, beef tendon, soft-boiled egg, konnyaku, thick fried tofu, burdock tempura, sesame tofu, a pouch stuffed with condiments · beef dote-ni in sweet miso ¥680, edamame starter (September 2026) · a wide range of shochu (June 2026) · four people with two drinks each paid ¥14,300 (June 2026)',
    website: null, gmaps: gm('おでんと、アジフライ。 バルチカ03'), menu_url: null,
    notes: "[Oden · Umeda, oden and fried horse mackerel over the station] A neon-lit counter on the fifth floor of Innogate Osaka, straight off the JR west exit, the second shop of an oden bar in Honmachi (Tabelog). It does two things: oden simmered in a golden Kansai dashi (daikon, beef tendon, a soft egg, sesame tofu and a pouch stuffed with condiments that diners single out), and palm-sized fried horse mackerel from Sakai Port, thick, with coarse crumbs, a choice of tartar, mentaiko tartar or salt and lemon, and its fried bones on the side. Weekend doors open at 11:30 for daytime drinking; evenings fill, so book. One June 2026 group found it a little pricey for the size (¥14,300 for four); most diners in 2026 call the fish a must-order.",
    chef_bio: { chef_name: null, roles: ['Kitchen and counter staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: "a skillful tavern near the station" with oden in a golden Kansai-style dashi and "Fried Horse Mackerel delivered fresh from Tottori Sakai Port", pop illustrations and neon inside; the main store is おでんと、アジフライ。 本町本店; opened 31 July 2024.', philosophy: null, specialty: 'Thick fried horse mackerel; Kansai-dashi oden.',
      anecdotes: [
        { text: '"The fish was crispy with coarse breadcrumbs and fluffy on the inside. … It also comes with crispy and fragrant fish bone crackers—delicious!" — September 2026, a Sunday at 16:30.', source: R + 'B535928397/' },
        { text: '"What surprised me was the special condiment pouch. The unique texture combined with the deep-fried tofu and condiments was an amazing match!" — September 2026.', source: R + 'B536688998/' },
        { text: '"The fish was thick and delicious, but I thought JPY 780 was a bit pricey for the size" — June 2026, a weekday at 19:00.', source: R + 'B530858402/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): おでんと、アジフライ。 バルチカ03、居酒屋・おでん、大阪市北区梅田3-2-123 イノゲート大阪 5F、JR 大阪駅西口直結、月〜金17:00〜23:00 (L.O.料理22:00、ドリンク22:30)、土・日・祝11:30〜23:00、週末は昼飲みも、予約可 (3名以下はカウンターへの移動をお願いすることも)、カード・電子マネー・QR 可、20席 (カウンター12、カウンターテーブル8)、禁煙、2024年7月31日オープン、黄金色の関西風だしのおでん、Sakai Port (Tottori) から届く厚いアジフライ、ポップなイラストとネオン、本店は本町本店。口コミ(2026年6月〜10月): アジフライ780円 (6月)・380円 (9月)、フルとハーフ、タルタル、明太タルタル、塩レモン、ポン酢、骨せんべい、おでんの盛り合わせ1,720円、大根、じゃがいも、牛すじ、半熟卵、こんにゃく、厚揚げ、ごぼう天、ごま豆腐、薬味の巾着、牛のどて煮680円、お通しの枝豆、焼酎の種類、4人で14,300円、日曜16時半に満席、女性客が多い。',
      confidence: 'medium', sources: [TB, R + 'B529526911/', R + 'B530858402/', R + 'B531446059/', R + 'B533650031/', R + 'B533665879/', R + 'B534221488/', R + 'B535928397/', R + 'B536141320/', R + 'B536688998/', R + 'B538051007/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter seating; oden by the piece and fried fish with a choice of sauce (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '大阪府大阪市北区梅田3-2-123 イノゲート大阪 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市北区梅田三丁目2番123号 (go) is 261m away (Innogate Osaka is a long building over the tracks), beyond the 150 m check, so the pin rests on the Tabelog point; XIRINGUITO Escribà (osaka_xiringuito_escriba_osaka, same building, 3F) is about 160 m away, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530858402/', R + 'B535928397/'],
    price_note: 'Prices from June and September 2026 reviews; the fried horse mackerel comes in full and half portions, which may explain ¥780 against ¥380.', last_checked: TODAY, items: [
      it('', '', 'Fried horse mackerel (full or half; choice of sauce)', '¥780', 'Fried', 'no', 'no', 'June 2026; ¥380 in September 2026.', 'aji_fry'),
      it('', '', 'Oden assortment', '¥1,720', 'Oden', 'ask', 'no', 'June 2026.', 'oden_moriawase'),
      it('', '', 'Beef dote-ni in sweet miso', '¥680', 'Small plates', 'ask', 'no', 'September 2026.', 'dote_ni'),
    ] }, {
    cuisine: '黄金色の関西風だしで煮た、定番から創作までのおでんと、Sakai Port (Tottori) から届く厚いアジフライ (食べログ)・アジフライはフルとハーフ、ソースはタルタル、明太タルタル、塩レモン、ポン酢から、骨せんべいつき: 780円 (2026年6月)、380円 (2026年9月)・おでんの盛り合わせ1,720円 (2026年6月)、2026年の口コミのおでん: 大根、じゃがいも、牛すじ、半熟卵、こんにゃく、厚揚げ、ごぼう天、ごま豆腐、薬味を詰めた巾着・甘い味噌の牛のどて煮680円、お通しの枝豆 (2026年9月)・焼酎の種類が多い (2026年6月)・4人で2杯ずつ飲んで14,300円 (2026年6月)',
    neighborhood: '梅田3-2-123、イノゲート大阪の5階、バルチカ03。JR 大阪駅西口直結',
    gf_detail: '要確認。グルテンの情報なし。アジフライはパン粉の衣 (グルテンフリーではない)。おでんは関西風のだしで煮て、練り物やごぼう天も入る。だしの味つけの説明はない。',
    vegan_detail: 'ヴィーガンではありません。だしのおでんに牛すじや卵、それにアジフライ。',
    notes: '[おでん・梅田、駅の上のおでんとアジフライ] JR 大阪駅西口からそのまま行けるイノゲート大阪の5階、ネオンのカウンター。本町のおでんの店の2店目。看板はふたつで、黄金色の関西風のだしで煮たおでん (大根、牛すじ、半熟卵、ごま豆腐、薬味を詰めた巾着が好評) と、Sakai Port から届く手のひらほどのアジフライ。厚くて衣は粗め、タルタル、明太タルタル、塩レモンから選べて、骨せんべいもつく。週末は11時半から昼飲みができ、夜は埋まるので予約を。少し高めだという声 (2026年6月、4人で14,300円) もあるが、アジフライは必ず頼むべきという声が多い (2026年)。',
  });
}

// ================================================================ 日本料理 河久
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27007672/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '22:00']);
  put({
    id: 'osaka_kawakyu_ekimae_dai3', name: '日本料理 河久 (Kawakyu)', category: 'OMNI',
    lat: 34.698695, lng: 135.499339, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Kaiseki and set meals with tempura, fu (wheat gluten) in a simmered dish, dashi-based soups and soy-seasoned dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki and set meals built on fish, shellfish and dashi.',
    hours_raw: 'Tue–Sun 11:30–22:00 (last order food 20:30, drinks 21:30); lunch 11:30–15:30 (last order 14:00), open through the afternoon at weekends and on holidays; closed Mondays and 31 December–3 January (Tabelog). Reservations accepted; particular private rooms and window tables cannot be guaranteed; cancellation fee 50% the day before, 100% on the day or for changes in numbers (Tabelog). Service charge 10%, except at tables at lunch (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 230 seats, with twelve private rooms with sunken kotatsu seating for 5 to 50 (Tabelog); completely non-smoking (Tabelog). Bills could not be split (August 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Umeda 1-1-3, 33rd floor (top floor) of 大阪駅前第3ビル, 142 m up — 2 min from Kitashinchi Stn (JR Tozai Line), 7 min from JR Osaka Stn',
    cuisine: 'Seasonal Japanese from set meals to kaiseki, with hamo in summer and fugu in winter, and a first-meal (okuizome) feast for babies (Tabelog) · lunch: makunouchi bento in three tiers of sashimi, simmered, grilled and tempura dishes with rice, clear soup, pickles and dessert ¥1,980 (September 2026); Miyabi gozen; deluxe tempura gozen with three shrimp (August 2026) · Kawakyu kaiseki, monthly: an October 2026 menu of pomegranate black vinegar, purple-sweet-potato tofu and other starters, sashimi, a simmered dish with chestnut, eggplant and fu, grilled sawara, tempura of shrimp, rockfish and vegetables, baby squid, sardine-dumpling soup, mushroom takikomi rice and fruit · banquet plans with two hours of drinks for five or more: Kawakyu kaiseki ¥9,922 (¥9,000 at weekends from 17:00), Ume kaiseki ¥12,100 (Tabelog, tax included) · salt-grilled ayu in an August 2026 lunch kaiseki',
    website: null, gmaps: gm('日本料理 河久 大阪駅前第3ビル'), menu_url: null,
    notes: "[Kaiseki · Umeda, Japanese food 142 m up] A large Japanese restaurant on the 33rd floor of Osaka Ekimae Dai-3 Building, 142 m above Umeda, where the windows look east to the Ikoma mountains and west toward the Akashi Strait (Tabelog). Twelve private rooms with sunken kotatsu seating hold groups of five to fifty, which makes it a favourite for business dinners and family celebrations. Lunch is good value: a three-tier makunouchi bento of sashimi, simmered dishes and tempura for ¥1,980 (September 2026), or tempura and gozen sets. In the evening the monthly Kawakyu kaiseki runs from seasonal starters and sashimi to takikomi rice. Reviews are kind about the view and the price and mixed on the cooking, which some found average, with small windows in some private rooms and noisy clearing of plates (October 2026). Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Kitchen and service staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: authentic Japanese cuisine from set meals to seasonal kaiseki on the 33rd floor, 142 m above ground, with views from the Ikoma mountains in the east to the Akashi Strait; twelve private rooms with sunken kotatsu for 5 to 50. The Tabelog invoice number T5120001113783 is registered to 株式会社トップオブオオサカ, 梅田1-1-3 (NTA invoice register, read 2026-11-01).', philosophy: null, specialty: 'Kawakyu kaiseki; makunouchi bento at lunch.',
      anecdotes: [
        { text: '"Located on the 33rd floor of the Osaka Station Building No. 3, the private room offers a stunning view overlooking the cityscape of Osaka." — August 2026, a Saturday lunch kaiseki with salt-grilled ayu.', source: R + 'B535218509/' },
        { text: '"The makunouchi bento allowed me to sample a variety of dishes at a reasonable price. While the tempura batter felt a bit hard, I actually prefer a crispy texture" — October 2026.', source: R + 'B536982701/' },
        { text: '"The fact that it has private rooms and offers a view of the night skyline was great. However, the view from the private room was somewhat disappointing due to the small windows." — October 2026, a social gathering.', source: R + 'B537936697/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 日本料理 河久、日本料理・しゃぶしゃぶ・海鮮、大阪市北区梅田1-1-3 大阪駅前第3ビル 33F、地上142m、JR 東西線 北新地駅から徒歩2分、火〜日11:30〜22:00 (L.O.料理20:30、ドリンク21:30)、ランチ11:30〜15:30 (L.O.14:00)、土日祝は通し営業、月曜休み、12月31日〜1月3日休み、予約可、キャンセル料 (前日50%、当日100%)、サービス料10% (ランチのテーブル席はなし)、カード・PayPay 可、電子マネー不可、230席、掘りごたつの個室12室 (5〜50名)、全面禁煙、季節の懐石から気軽な定食まで、夏はハモ、冬はふぐ、お食い初め、東は Ikoma の山から西は Akashi Kaikyo まで見わたせる、宴会プラン (5名から、2時間飲み放題つき) 河久の懐石 (Kawakyu kaiseki) 9,922円 (週末17時以降9,000円)、Ume 懐石12,100円。インボイス登録は株式会社トップオブオオサカ (梅田1-1-3)。口コミ(2026年8月〜10月): 幕の内弁当1,980円、Miyabi 御膳、上天ぷら御膳、鮎の塩焼き、10月の河久の懐石 (ざくろの黒酢、紫芋豆腐、刺身、栗、麩、サワラの焼き物、エビとメバルの天ぷら、子持ちの小さなイカ、イワシのつみれのお椀、きのこの炊き込みごはん、果物)、個室から夜景、別会計はできない、天ぷらの衣がかため、お茶のおかわり、片づけの音、個室の窓が小さい、料理はふつうという声も。',
      confidence: 'medium', sources: [TB, R + 'B534614765/', R + 'B535218509/', R + 'B535828258/', R + 'B535901080/', R + 'B536564918/', R + 'B536646864/', R + 'B536982701/', R + 'B537913518/', R + 'B537936697/', R + 'B538458168/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and booked kaiseki in private rooms (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区梅田1-1-3 大阪駅前第3ビル 33F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区梅田一丁目1番3号 (go) 59m; no other record within 80 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536646864/'],
    price_note: 'Banquet plans from the Tabelog listing (tax included); the makunouchi bento from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Makunouchi bento (lunch)', '¥1,980', 'Lunch', 'no', 'no', 'September and October 2026.', 'makunouchi'),
      it('', '', 'Kawakyu kaiseki with two hours of drinks (5 or more)', '¥9,922', 'Banquet plans', 'ask', 'no', 'Tabelog; ¥9,000 at weekends from 17:00.', 'kawakyu_kaiseki'),
      it('', '', 'Ume kaiseki with two hours of drinks (5 or more)', '¥12,100', 'Banquet plans', 'ask', 'no', 'Tabelog.', 'ume_kaiseki'),
    ] }, {
    cuisine: '気軽な定食から懐石までの季節の日本料理、夏はハモ、冬はふぐ、赤ちゃんのお食い初めの膳も (食べログ)・ランチ: 刺身、煮物、焼き物、天ぷらの三段の幕の内弁当にごはん、お吸い物、香の物、デザートで1,980円 (2026年9月)。Miyabi 御膳、エビ3尾の上天ぷら御膳 (2026年8月)・毎月の河久の懐石: 2026年10月はざくろの黒酢、紫芋豆腐などの前菜、刺身、栗とナスと麩の煮物、サワラの焼き物、エビ、メバル、野菜の天ぷら、子持ちの小さなイカ、イワシのつみれのお椀、きのこの炊き込みごはん、果物・5名からの2時間飲み放題つきの宴会プラン: 河久の懐石9,922円 (週末17時以降は9,000円)、Ume 懐石12,100円 (食べログ、税込)・2026年8月の昼の懐石に鮎の塩焼き',
    neighborhood: '梅田1-1-3、大阪駅前第3ビルの最上階33階、地上142m。JR 東西線 北新地駅から徒歩2分、JR 大阪駅から7分',
    gf_detail: '予約時に要確認。グルテンの情報なし。懐石や定食に天ぷら、煮物の麩、だしのお吸い物、醤油で味つけした料理がある。',
    vegan_detail: 'ヴィーガンではありません。魚介とだしの懐石と定食。',
    notes: '[懐石・梅田、142m の日本料理] 大阪駅前第3ビルの最上階、33階、地上142m にある大きな日本料理店で、東は Ikoma の山、西は Akashi Kaikyo まで見わたせる (食べログ)。掘りごたつの個室が12室あり、5〜50名で使えるので、接待や家族のお祝いによく使われる。昼はお得で、刺身、煮物、天ぷらの三段の幕の内弁当が1,980円 (2026年9月)、天ぷらや御膳も。夜は毎月の河久の懐石で、季節の前菜と刺身から炊き込みごはんまで。景色と値段はほめられているが、料理はふつう、個室の窓が小さい、片づけの音が大きいという声もある (2026年10月)。月曜休み。',
  });
}

// ================================================================ 北新地 串揚げ かな山
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27111492/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'osaka_kushiage_kanayama_kitashinchi', name: '北新地 串揚げ かな山 (Kitashinchi Kushiage Kanayama)', category: 'OMNI',
    lat: 34.697845, lng: 135.496605, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: kushiage and tonkatsu, all breaded and fried.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried skewers of meat and seafood alongside the vegetables, from shared oil, with red miso soup.',
    hours_raw: 'Mon–Sat 11:30–14:30 (last order 14:00) and 17:00–23:00 (last order 22:00); closed Sundays (Tabelog). Reservations accepted; the lunch kushiage course needs two days\' notice (Tabelog); lunch is near full at 13:00 on a Friday, so book (October 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats at a crescent-shaped counter by the open kitchen and private rooms for two or four; non-smoking (Tabelog; 2026 reviews). Sommelier on staff (Tabelog). Opened 1 July 2019 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曾根崎新地1-4-25, B1F, on Kitashinchi Hondori — 5 min from Kitashinchi Stn exit 11-5, 5 min from Nishi-Umeda Stn',
    cuisine: 'Kushiage of organic vegetables, domestic meat and seafood, fried in front of you at an open counter (Tabelog) · dinner: omakase course served until you say stop ¥8,800; ten-skewer course with a vegetable platter, rice, soup, a side dish and dessert ¥9,900; ten skewers with all-you-can-drink ¥10,000 (Tabelog, tax included); a September 2026 business dinner on the ¥10,000 plan: vegetable platter, shrimp, swordfish, shiitake in the house broth, eggplant, jako rice, red miso soup, strawberry or yuzu ice cream; grape juice in red or white like wine · lunch, about ten options with white or shiso rice refilled free, grated yam, red miso soup and pickles: snow-room-aged pork loin and fillet katsu ¥1,700, special loin katsu ¥2,100–2,200, 雪室熟成豚特上ヘレかつ (fillet, 60 g × 2) ¥2,200, assorted katsu of minced-meat cutlet, fillet and shrimp ¥1,980, foie-gras minced cutlet ¥2,400, fried shrimp +¥500 (June–October 2026) · beef sirloin chazuke to finish a lunch course (September 2026)',
    website: null, gmaps: gm('北新地 串揚げ かな山'), menu_url: null,
    notes: "[Kushiage · Kitashinchi, skewers and aged-pork katsu] A calm basement kushiage counter on Kitashinchi's main street, opened in 2019, where the cook breads and fries skewers of organic vegetables, domestic meat and seafood in front of a crescent-shaped counter, with private rooms for two or four. Dinner is a ten-skewer course or an omakase that runs until you call stop (¥8,800–10,000), ending with jako rice and red miso soup. Lunch is the bargain and the reason most reviewers come: tonkatsu of snow-room-aged pork, loin and fillet from ¥1,700, a minced-meat cutlet filled with foie gras (¥2,400), shiso rice refilled free and a small bowl of grated yam with wasabi to cut the fat. Book lunch; it fills by 13:00. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Kushiage cook "with years of experience" (unnamed; Tabelog)'], origin: null, background: 'Per the shop-maintained Tabelog listing: "High-quality skewered fried dishes created by a craftsman with years of experience"; organic vegetables, premium domestic meats and seafood, an open kitchen counter to enjoy "sound, aroma, taste, texture and color"; sister restaurant "Kushiage Haru Natsu Aki Fuyu" pairs kushiage with wine; opened 1 July 2019. A July 2019 diner noted courses of ¥6,800 and ¥7,800 at the opening and mainly organic Japanese ingredients.', philosophy: '"Fully experience the sound, aroma, taste, texture and color of our dishes" (Tabelog).', specialty: 'Kushiage omakase; snow-room-aged pork katsu at lunch.',
      anecdotes: [
        { text: '"Upon arriving at 1 PM on a Friday, the restaurant was nearly full, making it difficult for walk-in lunch visits." — October 2026, a third visit, the special fillet katsu for JPY 2,200.', source: R + 'B527536045/' },
        { text: '"The fluffy cutlet is filled with rich foie gras, which pairs perfectly without being overwhelming." — October 2026, the foie-gras minced cutlet for JPY 2,400.', source: R + 'B538107971/' },
        { text: '"Topping the shiso rice with the small bowl of tororo (grated yam) was incredibly delicious, and I even tried to replicate it at home that same night." — September 2026.', source: R + 'B535181406/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 北新地 串揚げ かな山、串揚げ・日本料理・とんかつ、大阪市北区曾根崎新地1-4-25 B1F、Kitashinchi Hondori、JR 東西線 北新地駅11-5出口から徒歩5分、月〜土11:30〜14:30 (L.O.14:00)、17:00〜23:00 (L.O.22:00)、日曜休み、予約可 (ランチの串揚げコースは2日前までに)、カード可、電子マネー・QR 不可、20席、2名・4名の個室、禁煙、ソムリエ、2019年7月1日オープン、オープンキッチンのカウンターで目の前で揚げる、有機野菜と国産の肉と魚介、おまかせ串揚げコース (ストップ制) 8,800円、串揚げ10本のコース9,900円、飲み放題つき10,000円、姉妹店は Kushiage Haru Natsu Aki Fuyu。口コミ(2026年6月〜10月): 雪室熟成豚のロースかつとヘレかつ1,700円、特上ロースかつ2,100円〜2,200円、雪室熟成豚特上ヘレかつ (60g×2) 2,200円、ミンチかつ・ヘレかつ・エビフライの盛り合わせ1,980円、フォアグラのミンチかつ2,400円、エビフライ500円追加、白ごはんかしそごはん (おかわり自由)、わさびのとろろ、赤だし、しば漬け、三日月形のカウンター、ランチは13時にほぼ満席、夜の10本のコースと飲み放題10,000円 (野菜の盛り合わせ、エビ、メカジキ、しいたけ、なす、じゃこごはん、アイス)、ぶどうジュースの赤と白、牛サーロインのお茶漬け。',
      confidence: 'medium', sources: [TB, R + 'B417814970/', R + 'B527536045/', R + 'B535002901/', R + 'B535008635/', R + 'B535181406/', R + 'B535449932/', R + 'B538107971/', R + 'B538241973/', R + 'B538422090/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter kushiage served as a set course; book lunch ahead (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曾根崎新地1-4-25 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目4番25号 (go) 1m; nearest other record osaka_niku_kappo_tomoyuri_kitashinchi (曽根崎新地1-3-26) is 19 m away at a different address, so nothing stacks; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535181406/', R + 'B535002901/', R + 'B538107971/'],
    price_note: 'Courses from the Tabelog listing (tax included); lunch prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Ten-skewer kushiage course with vegetables, rice, soup, side dish and dessert', '¥9,900', 'Dinner', 'no', 'no', 'Tabelog.', 'kushiage_10'),
      it('', '', 'Omakase kushiage course, until you say stop', '¥8,800', 'Dinner', 'no', 'no', 'Tabelog.', 'kushiage_omakase'),
      it('', '', 'Snow-room-aged pork loin and fillet katsu set (lunch)', '¥1,700', 'Lunch', 'no', 'no', 'September 2026.', 'katsu_set'),
      it('雪室熟成豚特上ヘレかつ', '', 'Special snow-room-aged pork fillet katsu, 60 g × 2 (lunch)', '¥2,200', 'Lunch', 'no', 'no', 'October 2026.', 'hire_katsu'),
      it('', '', 'Foie-gras minced cutlet (lunch)', '¥2,400', 'Lunch', 'no', 'no', 'October 2026.', 'foiegras_menchi'),
      it('', '', 'Assorted katsu: minced cutlet, fillet, shrimp (lunch)', '¥1,980', 'Lunch', 'no', 'no', 'September 2026.', 'katsu_assort'),
    ] }, {
    cuisine: '有機野菜、国産の肉、魚介の串揚げを、オープンカウンターで目の前で揚げる (食べログ)・夜: 「ストップ」と言うまで出てくるおまかせコース8,800円、野菜の盛り合わせ、ごはん、汁、小鉢、デザートつきの串10本のコース9,900円、串10本と飲み放題10,000円 (食べログ、税込)。2026年9月の10,000円のプラン: 野菜の盛り合わせ、エビ、メカジキ、店のだしにつけたしいたけ、なす、じゃこごはん、赤だし、いちごか柚子のアイス。ワインのような赤と白のぶどうジュース・ランチは10種ほど、白ごはんかしそごはん (おかわり自由)、とろろ、赤だし、漬物つき: 雪室熟成豚のロースかつとヘレかつ1,700円、特上ロースかつ2,100〜2,200円、雪室熟成豚特上ヘレかつ (60g×2) 2,200円、ミンチかつ、ヘレかつ、エビフライの盛り合わせ1,980円、フォアグラのミンチかつ2,400円、エビフライは500円で追加 (2026年6月〜10月)・ランチのコースの締めに牛サーロインのお茶漬け (2026年9月)',
    neighborhood: '曾根崎新地1-4-25 の地下1階、Kitashinchi Hondori。北新地駅11-5出口から徒歩5分、西梅田駅から5分',
    gf_detail: 'グルテンフリーではありません。串揚げととんかつで、どれもパン粉をつけて揚げる。',
    vegan_detail: 'ヴィーガンではありません。野菜の串もあるが、肉や魚介と同じ油で揚げ、赤だしがつく。',
    notes: '[串揚げ・北新地、串揚げと熟成豚のとんかつ] Kitashinchi Hondori の地下にある落ち着いた串揚げのカウンターで、2019年から。三日月形のカウンターの前で、有機野菜、国産の肉、魚介の串に衣をつけて揚げてくれる。2名・4名の個室も。夜は10本のコースか、ストップと言うまで出てくるおまかせ (8,800〜10,000円) で、最後はじゃこごはんと赤だし。口コミの多くが来るのはお得なランチで、雪室熟成豚のとんかつ、ロースとヘレで1,700円から、フォアグラ入りのミンチかつ (2,400円)、しそごはんはおかわり自由、わさびのとろろが脂をさっぱりさせる。ランチは13時には埋まるので予約を。日曜休み。',
  });
}

// ================================================================ capi
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27121230/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:50', '23:15']);
  put({
    id: 'osaka_capi_kitashinchi', name: 'capi', category: 'OMNI',
    lat: 34.69803, lng: 135.497912, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. The omakase course includes brioche, pasta, a tart and sweets.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a single omakase course of seafood, caviar, wagyu, duck and dairy.',
    hours_raw: 'Mon–Sat two seatings, meals starting 18:00 and 20:45 (Tabelog lists 17:50–20:30 and 20:35–23:15; arrive about ten minutes early); closed Sundays, holidays and some other days (Tabelog). Reservation only, online for one or two and by phone for more (Tabelog; July 2025 review). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Eight counter seats; non-smoking; whole-shop hire up to 20 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-10-2, 6F of 北新地PLACEビル — 5 min from Kitashinchi Stn (JR Tozai Line)',
    cuisine: 'Innovative Italian omakase at an eight-seat counter, wines from around the world with pairings (Tabelog) · seasonal omakase course ¥26,000; with Japanese black-wagyu chateaubriand ¥31,000; with a cheesecake to take home ¥30,950 (Tabelog, tax included) · signatures in 2025–26 reviews: brioche baked in house (leftovers can go home), caviar with cauliflower and squid (or with grilled eggplant and aori squid), and "explosive seafood", a baked crab risotto · a July 2025 course: horse mackerel and okra tart with karasumi, fried corn with bresaola, abalone with buffalo mozzarella and junsai, managatsuo with manganji pepper, Kamo eggplant with summer truffle, Kyoto Nanatani duck with black truffle · December 2025: yamame, kue with endive, lily root with white truffle, Nanatani duck, oyster with Shimonita onion · January 2026: sea urchin with turnip, pasta of milt and cabbage; about ¥50,000 with pairing · August 2026: sweetfish pasta, crab paella · Basque cheesecake to take away (June 2026)',
    website: null, gmaps: gm('capi 北新地'), menu_url: null,
    notes: "[Italian · Kitashinchi, an eight-seat innovative counter] A small counter on the sixth floor of the Kitashinchi PLACE building where an owner-chef cooks one omakase of Italian-rooted dishes built on pairing ingredients, with a sommelier's wines from around the world. The listing says it has held a Michelin star in Kyoto and Osaka every year since 2022, and Tabelog named it an Innovative 100 in 2025. Diners remember the house brioche, the caviar with squid and cauliflower, Kyoto Nanatani duck and the \"explosive seafood\", a baked crab risotto; two 2025 diners note the chef came from Ponte Vecchio and find the cooking closer to classic Italian than avant-garde. The course is ¥26,000–31,000 plus 10% service; with pairing expect about ¥50,000 (January 2026). Two seatings a night; book ahead. Steak Ron is on the ground floor of the same building.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources read)', 'Sommelier'], origin: null, background: 'Per the shop-maintained Tabelog listing: "Capi has been awarded a Michelin star for four consecutive years in Kyoto and Osaka since 2022"; the owner-chef presents innovative Italian cuisine through an omakase course; wines chosen by the sommelier, with pairings; Tabelog Innovative 100 2025. Per reviews: opened in 2021 (July 2025); the chef "hailing from Ponte Vecchio" (May and December 2025).', philosophy: '"Explore the infinite possibilities of \'ingredient x ingredient\'" (Tabelog course text).', specialty: 'Omakase course; caviar with squid; "explosive seafood" crab risotto; brioche.',
      anecdotes: [
        { text: '"This fluffy brioche had a distinct sweetness and paired wonderfully with all the dishes." Leftovers can be taken home. — July 2025.', source: R + 'B510030913/' },
        { text: '"The aroma of crab was truly \'explosive.\' Some parts were slightly charred, adding a nice textural contrast." — December 2025, of the bakuretsu seafood.', source: R + 'B521805110/' },
        { text: '"I highly recommend the Basque cheesecake for takeout as it was incredibly tasty." — June 2026, a birthday dinner with the wine pairing.', source: R + 'B530636395/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): capi、イノベーティブ、大阪市北区曽根崎新地1-10-2 北新地PLACEビル 6F、JR 東西線 北新地駅から徒歩5分、月〜土の2部制 (18:00開始、20:45開始、10分前に来店)、日・祝と不定休、完全予約制、サービス料10%、カード可、電子マネー・QR 不可、カウンター8席、禁煙、2022年から4年連続でミシュランの星 (京都・大阪)、オーナーシェフのイノベーティブなイタリアン、ソムリエが選ぶ世界のワインとペアリング、季節の食材のおまかせコース26,000円、黒毛和牛シャトーブリアンのコース31,000円、チーズケーキのおみやげつき30,950円、食べログ 創作料理・イノベーティブ 百名店 2025。口コミ(2025年5月〜2026年8月): 2021年オープン、Ponte Vecchio 出身のシェフ、ブリオッシュ (残りは持ち帰り可)、キャビアとカリフラワーとイカ、アジとオクラのタルト、ブレザオラ、アワビとモッツァレラとじゅんさい、マナガツオ、Kamo なすと夏トリュフ、Kyoto の Nanatani 鴨、Bakuretsu Seafood (カニのリゾット)、Shimonita ネギとカキ、ウニとかぶ、白子とキャベツのパスタ、ペアリング込みで約50,000円、誕生日のプレート、持ち帰りのバスクチーズケーキ、鮎のパスタ、カニのパエリア、サービスはカジュアルという声。',
      confidence: 'medium', sources: [TB, R + 'B508980421/', R + 'B510030913/', R + 'B511578134/', R + 'B513427738/', R + 'B517138481/', R + 'B518272874/', R + 'B521805110/', R + 'B522372170/', R + 'B530636395/', R + 'B533041850/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One omakase course at a counter, booked online or by phone (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市北区曽根崎新地1-10-2 北新地PLACEビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with current courses; reviews dated through August 2026 (only a few each year).' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目10番2号 (go) 10m. Same building as ステーキ ロン (osaka_steak_ron_kitashinchi, address_ja "大阪府大阪市北区曽根崎新地1-10-2 北新地プレイス 1F"), whose Tabelog point is about 1 m away, so the pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B522372170/'],
    price_note: 'Course prices from the Tabelog listing (tax included, plus 10% service); a January 2026 diner paid about ¥50,000 with pairing on the ¥31,000 course.', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course', '¥26,000', 'Course', 'ask', 'no', 'Tabelog.', 'omakase'),
      it('', '', 'Omakase course with black-wagyu chateaubriand', '¥31,000', 'Course', 'ask', 'no', 'Tabelog; January 2026.', 'omakase_chateaubriand'),
      it('', '', 'Basque cheesecake to take away', '', 'Takeaway', 'no', 'no', 'June 2026.', 'basque_cheesecake'),
    ] }, {
    cuisine: '8席のカウンターのイノベーティブなイタリアンのおまかせ、世界のワインとペアリング (食べログ)・季節のおまかせコース26,000円、黒毛和牛シャトーブリアンつき31,000円、おみやげのチーズケーキつき30,950円 (食べログ、税込)・2025〜26年の口コミの看板: 店で焼くブリオッシュ (残りは持ち帰れる)、キャビアとカリフラワーとイカ (または焼きなすとアオリイカ)、カニを焼いたリゾットの「Bakuretsu Seafood」・2025年7月のコース: アジとオクラとからすみのタルト、揚げたとうもろこしとブレザオラ、アワビとバッファローモッツァレラとじゅんさい、マナガツオと Manganji とうがらし、Kamo なすと夏トリュフ、Kyoto の Nanatani 鴨と黒トリュフ・2025年12月: ヤマメ、クエとアンディーブ、百合根と白トリュフ、Nanatani 鴨、Shimonita ネギとカキ・2026年1月: ウニとかぶ、白子とキャベツのパスタ、ペアリング込みで約50,000円・2026年8月: 鮎のパスタ、カニのパエリア・持ち帰りのバスクチーズケーキ (2026年6月)',
    neighborhood: '曽根崎新地1-10-2、北新地PLACEビルの6階。JR 東西線 北新地駅から徒歩5分',
    gf_detail: '予約時に要確認。グルテンの情報なし。おまかせコースにはブリオッシュ、パスタ、タルト、甘いものが入る。',
    vegan_detail: 'ヴィーガンではありません。魚介、キャビア、和牛、鴨、乳製品のおまかせコースひとつ。',
    notes: '[イタリアン・北新地、8席のイノベーティブなカウンター] 北新地PLACEビルの6階にある小さなカウンターで、オーナーシェフが食材の組み合わせを追うイタリアンのおまかせをひとつだけ出し、ソムリエが世界のワインを合わせる。食べログによると2022年から毎年ミシュランの星を受け、2025年に食べログ 創作料理・イノベーティブ 百名店。口コミで心に残る皿は、店のブリオッシュ、イカとカリフラワーとキャビア、Kyoto の Nanatani 鴨、カニを焼いたリゾットの「Bakuretsu Seafood」。2025年の口コミふたつでは、シェフは Ponte Vecchio の出身で、料理は前衛的というより本格的なイタリアンだそう。コースは26,000〜31,000円に別途サービス料10%、ペアリングを入れると約50,000円 (2026年1月)。夜は2部制なので予約を。同じビルの1階はステーキ ロン。',
  });
}

save();
