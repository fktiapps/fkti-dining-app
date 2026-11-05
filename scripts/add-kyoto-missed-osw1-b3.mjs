// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 3.
//   + 活魚居酒屋 マルフク Katsugyo Izakaya Marufuku (live-fish izakaya by the Takase River; hamo and fugu courses)
//   + A kyoto (Japanese-cuisine-and-teppanyaki counter over the Kamo River; opened 9 January 2026)
//   + いとう Ito (one-chef French counter on Furumonzen-dori; French WEST Tabelog 100 2021, 2023, 2025)
//   + カフェ ビブリオティック ハロー! Cafe Bibliotic Hello! (book-lined café-bakery on Nijo-dori; Cafe Tabelog 100 2021, 2022, 2025)
//   Picked on 2026-11-05: the first two with id mod 6 = 2 from `queue.mjs kyoto-missed next core 200` (26037032, 26044184)
//   and from `next notable 200` (26005856, 26000120). None is in data/kyoto.json: grep by name (マルフク/Marufuku, A kyoto,
//   いとう/Ito, ハロー/Hello/Biblio) and address (鍋屋町225, 斎藤町140, 石橋町307, 晴明町650) found none.
//   Nearest existing pins: kyr_men_ya_tori_no_keiji_kyo 32 m from Marufuku; ChIJjWdpVQ0JAWAR-myTPZSlpnY (Cafe & Bar Maru
//   @Keika) 29 m from A kyoto; kyoto_hiiragi_tei 43 m from Ito; kyr_chugoku_ryori_saikaku 123 m from Hello. None within 3 m.
//   Group checks: A kyoto is run by ORI Corporation (Taito-ku, Tokyo), which opened it with the café-bar B kyoto upstairs
//   (a different format); no other shops are named. No group found for Marufuku, Ito or Hello.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 活魚居酒屋 マルフク
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037032/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']); const HS = day(['13:00', '22:30']);
  put({
    id: 'kyoto_katsugyo_izakaya_marufuku', name: '活魚居酒屋 マルフク (Katsugyo Izakaya Marufuku)', category: 'OMNI',
    lat: 35.004141, lng: 135.77066, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fish courses use soy sauce, ponzu and gochujang-soy tare, fried fugu and tempura, and finish with udon, soba or ramen; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a live-fish izakaya; even the shabu-shabu broth is made from conger eel bones with bonito and kombu (2026 reviews).',
    hours_raw: 'Mon–Sat 17:00–23:00 (last food order 22:30, drinks 23:00); Sun 13:00–22:30 (last order 21:30); public holidays 13:00–22:30; closing days vary (Tabelog). Reservations taken; a table booking may be seated at the counter when busy (Tabelog). Charge ¥400 per person (Tabelog). 19 seats: counter, tables, tatami and a private room for 4; non-smoking, ashtray outside; cards accepted, no e-money or QR payments (Tabelog). On the Takase River, 1 min from Hankyu Kawaramachi Stn, 2 min from Gion-Shijo Stn (Tabelog; 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: HS }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi by the Takase River, north of Shijo — 1 min from Hankyu Kawaramachi Stn',
    cuisine: 'Live-fish izakaya: fish prepared to order, with seasonal courses (2024–2026 reviews) · summer: live hamo shabu-shabu course ¥11,000 — sashimi platter, the day\'s tataki, an "unrolled" eel omelette, salt-grilled ayu, hamo shabu-shabu in a broth of hamo bones with bonito and kombu (leftover hamo made into tempura on request), sudachi udon, matcha monaka (July–September 2026) · fugu: torafugu charcoal-grill course ¥9,800 — fugu skin, fugu "kejang" in spicy sauce, tessa, fried fugu, fugu grilled at the table on a shichirin with salt or soy-gochujang tare, fugu nigiri, chawanmushi (September–October 2026) · à la carte: sashimi platters, hamo and Kujo negi champuru, yuba and nagaimo salad, crab cream croquettes, grilled fugu, hirezake · shio or shoyu ramen to finish (November 2024) · sake from around Japan, e.g. Houou Bida ¥1,280, Asahi draft ¥580 (October 2026)',
    website: null, gmaps: gm('活魚居酒屋 マルフク 京都'), menu_url: null,
    notes: '[Izakaya · Kiyamachi, live fish, hamo and fugu] A fish izakaya set back from the Takase River, a minute from Kawaramachi Stn, with a counter, tables and tatami. In summer the draw is the live hamo shabu-shabu course (¥11,000): sashimi, the day\'s tataki, an "unrolled" eel omelette and ayu, then hamo swished through a cloudy broth simmered from hamo bones with bonito and kombu, finished with sudachi udon. The other draw is torafugu, grilled at the table over charcoal (course ¥9,800, September–October 2026). There is plenty à la carte too, with a regional sake list. ¥400 charge; cards accepted; open to 23:00, from 13:00 on Sundays.',
    chef_bio: { chef_name: null, roles: ['Owner and head chef (unnamed in the sources)'], origin: null,
      background: 'Tabelog lists the shop as run by a corporate member. Reviews describe the head chef preparing live fugu to order (March 2024) and the owner helping diners with the first round of the hamo hot pot (July 2026).',
      philosophy: null, specialty: 'Live hamo shabu-shabu (summer); charcoal-grilled torafugu.',
      anecdotes: [
        { text: 'A July 2026 diner learned that the cloudy shabu-shabu broth is hamo bones and heads simmered with bonito and kombu broth and the innards.', source: R + 'B533009000/' },
        { text: '"While the charcoal is heating up, please enjoy this" — the crispy fried fugu that arrives with the grill, October 2026.', source: R + 'B537650813/' },
        { text: 'A September 2026 reviewer had passed the alley countless times without noticing the set-back entrance, and judged the ¥9,800 fugu course exceptionally reasonable.', source: R + 'B535776104/' },
        { text: 'A September 2026 diner noted cat-shaped chopstick rests on the table.', source: R + 'B535358083/' },
      ],
      japanese_sources_summary: '食べログ: 活魚居酒屋 マルフク、居酒屋・海鮮・ふぐ、中京区鍋屋町225 萩原ビル 1F、阪急京都河原町駅から徒歩1分、祇園四条駅から徒歩2分、月〜土 17:00〜23:00 (L.O. 料理22:30)、日 13:00〜22:30、祝日 13:00〜22:30、定休日不定、予約可、チャージ料400円、19席、個室 (4人)、掘りごたつ・座敷、禁煙 (店前に灰皿)、カード可、日本酒・焼酎にこだわり、魚にこだわり。口コミ (2024〜2026年、英語): 活鱧しゃぶしゃぶコース11,000円、刺身盛り合わせ、本日のたたき、う巻きの巻かないもの、鮎の塩焼き、すだちうどん、抹茶モナカ、とらふぐ炭火焼コース9,800円、ふぐのケジャン、てっさ、ふぐ唐揚げ、七輪、ひれ酒、締めのラーメン (塩・醤油)。',
      confidence: 'medium', sources: [TB, R + 'B481437020/', R + 'B482572069/', R + 'B487034731/', R + 'B533009000/', R + 'B535054164/', R + 'B535358083/', R + 'B535776104/', R + 'B535950795/', R + 'B536490670/', R + 'B537650813/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course ahead; ¥400 seat charge; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区鍋屋町225 萩原ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (corporate member); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004141, 135.770660); cross-checked: GSI 京都府京都市中京区鍋屋町225番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B533009000/', R + 'B535776104/', R + 'B537650813/', R + 'B487034731/'],
    price_note: 'No menu read; prices from June 2024 and July–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Live hamo shabu-shabu course (summer)', '¥11,000', 'Courses', 'ask', 'no', 'July 2026.', 'hamo_shabu_course'),
      it('', '', 'Torafugu charcoal-grill course', '¥9,800', 'Courses', 'ask', 'no', 'September 2026, tax included.', 'torafugu_course'),
      it('', '', 'Houou Bida R&A (sake)', '¥1,280', 'Drinks', '', '', 'October 2026.', 'houou_bida'),
      it('', '', 'Asahi draft beer', '¥580', 'Drinks', 'no', '', 'October 2026.', 'asahi_draft'),
    ] }, {
    cuisine: '活魚の居酒屋。注文を受けてから魚をさばき、季節のコースもある (2024〜2026年の口コミ)・夏: 活鱧しゃぶしゃぶコース11,000円。刺身盛り合わせ、本日のたたき、巻かない「う巻き」、鮎の塩焼き、鱧の骨にかつおと昆布を合わせたスープの鱧しゃぶ (残した鱧は頼めば天ぷらに)、すだちうどん、抹茶モナカ (2026年7〜9月)・ふぐ: とらふぐ炭火焼コース9,800円。ふぐの皮、辛いたれのふぐの「ケジャン」、てっさ、ふぐの唐揚げ、卓上の七輪で塩だれか醤油コチュジャンで焼くふぐ、ふぐのにぎり、茶碗蒸し (2026年9〜10月)・一品: 刺身盛り合わせ、鱧と九条ねぎのチャンプルー、湯葉と長芋のサラダ、カニクリームコロッケ、焼きふぐ、ひれ酒・締めに塩か醤油のラーメン (2024年11月)・全国の日本酒、たとえば Houou Bida 1,280円、アサヒの生ビール580円 (2026年10月)',
    neighborhood: '高瀬川沿いの木屋町、四条の北。阪急河原町駅から徒歩1分',
    gf_detail: '要確認。魚のコースに醤油、ポン酢、醤油コチュジャンのたれ、ふぐの唐揚げや天ぷらを使い、締めはうどん、そば、ラーメン。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。活魚の居酒屋で、しゃぶしゃぶのスープも鱧の骨にかつおと昆布 (2026年の口コミ)。',
    notes: '[居酒屋・木屋町、活魚、鱧とふぐ] 河原町駅から1分、高瀬川沿いの少し奥まった魚の居酒屋。カウンター、テーブル、座敷がある。夏の名物は活鱧しゃぶしゃぶのコース (11,000円): 刺身、本日のたたき、巻かない「う巻き」、鮎のあと、鱧の骨をかつおと昆布で炊いた白濁スープで鱧をしゃぶしゃぶ、締めはすだちうどん。もうひとつの名物はとらふぐを卓上の炭火で焼くコース (9,800円、2026年9〜10月)。一品料理も多く、全国の日本酒がそろう。チャージ400円、カード可、23時まで、日曜は13時から。',
  });
}

// ================================================================ A kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26044184/'; const R = TB + 'dtlrvwlst/';
  const NEWS = 'https://haveagood-holiday.com/en/articles/a-kyoto-b-kyoto-gion-shijo-dining-cafe-bar-opening';
  const H = day(['11:30', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_a_kyoto', name: 'A kyoto', category: 'OMNI',
    lat: 35.002977, lng: 135.770798, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Omakase courses use house soy marinades, white miso, sukiyaki sauce, spring-roll wrappers and panko; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fixed omakase courses built on fish and black wagyu, with dashi in the soups and side dishes (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30, dinner 17:30–22:00; closed Tuesday and occasionally on other days, announced on Instagram (Tabelog). Reservations taken; the whole room can be booked by phone (Tabelog). A service charge is added (Tabelog). 12 counter seats, with a terrace view of the Kamo River (Tabelog; 2026 reviews). Menu in English and English-speaking staff (Tabelog); about 70% of guests were from abroad on a September 2026 visit. Non-smoking; cards and QUICPay, no QR payments (Tabelog). Through a gate, on the right; 2 min from Kawaramachi or Gion-Shijo Stn (Tabelog; September 2026). Opened 9 January 2026 (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By the Kamo River near Shijo — 2 min from Gion-Shijo Stn',
    cuisine: 'Counter that joins Japanese cuisine and teppanyaki, centred on black wagyu and Kyoto vegetables; the course changes on the first day of odd-numbered months (opening article, January 2026) · lunch "light" omakase, 8 dishes, ¥8,000 (September 2026) · omakase, 10 dishes (about 1 hour 30 minutes), ¥12,000 (August 2026) · autumn 2026 dishes: tuna marinated in house soy sauce, Fushimi fig with white miso and mascarpone, horse mackerel and taro spring rolls, black wagyu sukiyaki on the teppan with a northern-Kyoto egg yolk, pomegranate sorbet, amadai and eggplant dengaku, pumpkin dashi soup, black wagyu tenderloin 60–80 g with salt, wasabi and salted kombu, Kyoto rice with pickles, miso-and-yogurt gelato (September–November 2026) · wine by the glass ¥1,300, Premium Malt\'s draft ¥1,000, Ichiro\'s Malt highball (August–September 2026)',
    website: NEWS, gmaps: gm('A kyoto 鉄板焼 京都 斎藤町'), menu_url: null,
    notes: '[Teppanyaki & Japanese · Kiyamachi, a Kamo River counter] A new (January 2026) twelve-seat counter in a renovated machiya more than a century old, with a terrace view over the Kamo River. Two chefs — one for Japanese dishes, one for the teppan — cook an omakase that runs from marinated tuna and a fig with white miso through wagyu sukiyaki on the griddle to a black wagyu tenderloin, then Kyoto rice and a miso-and-yogurt gelato. Omakase ¥8,000 (lunch, 8 dishes) or ¥12,000 (10 dishes). English menu and English-speaking staff; on one September 2026 visit about 70% of the guests were from abroad. Closed Tuesday; book ahead.',
    chef_bio: { chef_name: null, roles: ['Run by ORI Corporation, Taito-ku, Tokyo (opening article)', 'A team of four: manager, Japanese-cuisine chef, teppanyaki chef and a server (September 2026 review)'], origin: null,
      background: 'Per an opening article of 6 January 2026: ORI Corporation opened A kyoto (teppanyaki, ground floor) and B kyoto (a tea-and-gin café-bar upstairs) on 9 January 2026 in a renovated Kyoto machiya more than 100 years old, finished by experienced plasterers. A September 2026 reviewer adds that the Japanese-cuisine chef has a background in French cooking.',
      philosophy: null, specialty: 'Black wagyu tenderloin teppanyaki; omakase of Japanese dishes and teppanyaki.',
      anecdotes: [
        { text: 'A September 2026 reviewer worried that the name sounded aimed at inbound tourists, found that about 70% of the guests were from abroad, and concluded that Japanese guests enjoy it just as much.', source: R + 'B535620393/' },
        { text: 'Before the sukiyaki, the day’s meat is shown to the guest with the green onions and onions (September 2026).', source: R + 'B527338370/' },
        { text: 'The northern-Kyoto egg yolk served with the sukiyaki comes from hens fed paprika and fish powder, which a September 2026 reviewer credits for its deep colour.', source: R + 'B527338370/' },
      ],
      japanese_sources_summary: '食べログ: A kyoto、鉄板焼き・日本料理、下京区斎藤町140-6 1F、阪急京都河原町駅・京阪祇園四条駅から徒歩2分、11:30〜14:30・17:30〜22:00、火曜休み (ほか不定休、インスタグラムで告知)、予約可、サービス料あり、カウンター12席、テラス、英語メニュー・英語の話せるスタッフ、カード・QUICPay 可、2026年1月9日オープン。開業記事 (2026年1月6日、英語): ORI Corporation (東京都台東区)、築100年以上の京町家、1階が A kyoto、2階が茶とジンのカフェバー B kyoto、黒毛和牛と京野菜、コースは奇数月の1日に替わる。口コミ (2026年8〜11月、英語): ランチのおまかせ8品8,000円、おまかせ10品12,000円、鴨川の眺め、黒毛和牛ヒレ80g、味噌とヨーグルトのジェラート。',
      confidence: 'medium', sources: [TB, NEWS, R + 'B527338370/', R + 'B534388722/', R + 'B534446287/', R + 'B534507179/', R + 'B534550575/', R + 'B535620393/', R + 'B536613776/', R + 'B536616475/', R + 'B536685047/', R + 'B538576928/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); most guests are from abroad (September 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区斎藤町140-6 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 9 January 2026) and an opening article; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002977, 135.770798); cross-checked: GSI 京都府京都市下京区斎藤町140番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527338370/', R + 'B534388722/', R + 'B535620393/'],
    price_note: 'No menu read; prices from August–September 2026 reviews; the course changes every two months.', last_checked: TODAY, items: [
      it('', '', 'Lunch omakase, 8 dishes', '¥8,000', 'Courses', 'ask', 'no', 'September 2026.', 'lunch_omakase'),
      it('', '', 'Omakase, 10 dishes', '¥12,000', 'Courses', 'ask', 'no', 'August 2026.', 'omakase_10'),
      it('', '', 'Wine by the glass', '¥1,300', 'Drinks', '', '', 'September 2026.', 'glass_wine'),
    ] }, {
    cuisine: '日本料理と鉄板焼きを合わせたカウンター。黒毛和牛と京野菜が中心で、コースは奇数月の1日に替わる (開業記事、2026年1月)・ランチの軽めのおまかせ8品8,000円 (2026年9月)・おまかせ10品 (約1時間半) 12,000円 (2026年8月)・2026年秋の料理: 自家製醤油漬けの鮪、伏見の無花果の白和えとマスカルポーネ、鯵と里芋の春巻き、北部の京都の卵黄で食べる鉄板の黒毛和牛すき焼き、ざくろのソルベ、甘鯛と茄子の田楽、かぼちゃの出汁スープ、塩、わさび、塩昆布で食べる黒毛和牛ヒレ60〜80g、京都のご飯と漬物、味噌とヨーグルトのジェラート (2026年9〜11月)・グラスワイン1,300円、プレミアムモルツの生1,000円、Ichiro\'s Malt のハイボール (2026年8〜9月)',
    neighborhood: '四条近くの鴨川沿い。祇園四条駅から徒歩2分',
    gf_detail: '要確認。おまかせのコースに自家製の醤油漬け、白味噌、すき焼きのたれ、春巻きの皮、パン粉を使う。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚と黒毛和牛中心のおまかせで、スープや付け合わせに出汁を使う (2026年の口コミ)。',
    notes: '[鉄板焼きと日本料理・木屋町、鴨川を望むカウンター] 2026年1月に開いた12席のカウンター。築百年を超える町家を改装し、テラスから鴨川を望む。日本料理と鉄板の2人の料理人が、鮪の漬けや無花果の白和えから、鉄板の和牛すき焼き、黒毛和牛ヒレ、京都のご飯、味噌とヨーグルトのジェラートまでのおまかせを作る。おまかせは8,000円 (ランチ8品) か12,000円 (10品)。英語のメニューと英語の話せるスタッフがあり、2026年9月のある日は客の約7割が海外から。火曜休み、要予約。',
  });
}

// ================================================================ いとう
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26005856/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['12:00', '13:30'], ['17:00', '22:00']); const WE = day(['11:30', '13:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_seiyo_chubo_ito', name: 'いとう (Ito)', category: 'MOM_AND_POP',
    lat: 35.006783, lng: 135.777492, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the chef builds each course around what the guest asks for on the phone, no bread is served, and the courses lean on fish, vegetables and rice; sauces are not described for gluten (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. Every course has a large plate of a dozen or more Kyoto vegetables, but the rest is fish and meat; requests are discussed by phone (2024–2026 reviews).',
    hours_raw: 'Tue–Fri 12:00–13:30 and 17:00–22:00; Sat–Sun 11:30–13:00 and 17:00–22:00; closed Monday (Tabelog). Reservation only, by phone; dinner is the main service and lunch is not often served (2023 reviews). A January 2026 reviewer advises phoning rather than booking online, because the chef asks about preferences, portion size and the main dish. 10 counter seats; non-smoking; cards accepted (Tabelog). On Furumonzen-dori; 344 m from Higashiyama Stn (Tabelog).',
    hours: { 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Furumonzen-dori, Higashiyama — 5 min walk from Higashiyama Stn',
    cuisine: 'Classic French as an omakase, cooked by one chef at a U-shaped counter and tailored to each booking (Tabelog; 2023–2026 reviews) · amuse of raw fish, e.g. sawara, aori squid, persimmon and prosciutto · a plate of a dozen or more Kyoto vegetables named for the month, with an "essence of beets" · ancient rice with sea urchin and truffle, or with fugu or salmon roe · fish such as live mackerel · Southdown milk lamb from Ishida Farm, or Omi beef rump · Uji hojicha; dessert only on request, e.g. blancmange · a deep, mainly Burgundy wine list (Tabelog; 2023–2026 reviews) · a tailored course cost ¥12,000 (January 2026)',
    website: null, gmaps: gm('いとう フレンチ 京都 古門前'), menu_url: null,
    notes: '[French · Higashiyama, a one-chef counter in its third decade] A ten-seat U-shaped counter on Furumonzen-dori in Higashiyama where owner-chef Tsutomu Ito has cooked alone for more than twenty years. The course is set on the phone: the chef asks what you like, how much you eat and which main you want, then builds an omakase around Kyoto vegetables (a dozen-plus on one plate), the season\'s fish, ancient rice with sea urchin and truffle, and lamb or Omi beef. The wine list is the other draw, mostly Burgundy, with old vintages. Some reviewers found the chef\'s firm views on wine and photos uncomfortable; others found the chef humble and pleasant. A tailored course cost ¥12,000 in January 2026; Tabelog’s dinner average is ¥15,000–19,999. Phone to book; closed Monday.',
    chef_bio: { chef_name: 'Tsutomu Ito (romaji from a February 2024 review; the kanji is not in a source)', roles: ['Owner-chef (February 2024 review: "The owner-chef, Tsutomu Ito, manages everything"; Tabelog: "Owner-chef Ito")'], origin: null,
      background: 'Reviews describe a one-person counter run for 22 years (September 2025) or 23 years (January 2026). Tabelog\'s introduction calls the shop "Seiyo Chubo Ito" and describes classic French courses, a Kyoto seasonal vegetable platter, domestic Southdown lamb and wines mainly from Burgundy. Tabelog French WEST "Tabelog 100" 2021, 2023 and 2025.',
      philosophy: 'Per a January 2026 review: guests may customise everything from the ingredients to the shape of the menu.',
      specialty: 'Kyoto seasonal vegetable plate; ancient rice with sea urchin and truffle; Southdown lamb.',
      anecdotes: [
        { text: 'A July 2023 lunch guest who ordered sparkling water was told that wine is standard and that the sauces would be made lighter without it, and found the meal uncomfortable.', source: R + 'B467881074/' },
        { text: 'A February 2024 reviewer notes that the seasoning is adjusted for wine drinkers and non-drinkers, and that older guests who do not drink are welcome.', source: R + 'B480306883/' },
        { text: 'A June 2025 diner praised the dishes, the house wine and the handwritten menu but felt the master\'s manner suggested only those who understand the cooking can appreciate it.', source: R + 'B509047730/' },
        { text: '"It\'s rare to find a restaurant that serves a 1960 vintage Palmer" — October 2026.', source: R + 'B536628717/' },
        { text: '"The chef mentioned that the restaurant mainly caters to regulars, with many doctors as patrons." — July 2023.', source: R + 'B467881074/' },
      ],
      japanese_sources_summary: '食べログ: いとう、フレンチ、東山区古門前通石橋町307、東山駅から344m、火〜金 12:00〜13:30・17:00〜22:00、土日 11:30〜13:00・17:00〜22:00、月曜休み、完全予約制、10席、禁煙、カード可、ワインにこだわり、魚にこだわり、フレンチ WEST 百名店 2021・2023・2025。店の紹介 (英訳): オーナーシェフの Ito によるクラシックなフレンチのコース、京の旬野菜の盛り合わせ、国産サウスダウン種の羊、ブルゴーニュ中心のワイン。口コミ (2023〜2026年、英語): オーナーシェフ Tsutomu Ito がひとりで営む、22〜23年、電話で好みを聞いて作るおまかせ、古代米とウニとトリュフ、京野菜の皿、パンなし、デザートは別注文、ワインを飲まない客にはソースを軽く。',
      confidence: 'medium', sources: [TB, R + 'B465959273/', R + 'B467881074/', R + 'B470623108/', R + 'B480306883/', R + 'B509047730/', R + 'B511158449/', R + 'B518600266/', R + 'B521050963/', R + 'B523070637/', R + 'B536628717/'] },
    cultural_comfort: { level: 'japanese', note: 'Booking is by phone and the chef asks your preferences in detail; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市東山区古門前通石橋町307',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; French WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.006783, 135.777492); cross-checked: GSI 京都府京都市東山区石橋町307番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B521050963/'],
    price_note: 'No menu; courses are set per booking. One tailored lunch course cost ¥12,000 (January 2026).', last_checked: TODAY, items: [
      it('', '', 'Omakase course, tailored by phone', '¥12,000', 'Courses', 'ask', 'ask', 'January 2026; smaller portions, beef main.', 'omakase'),
    ] }, {
    cuisine: 'ひとりのシェフが U 字のカウンターで作る、予約ごとに組み立てるクラシックなフレンチのおまかせ (食べログ、2023〜2026年の口コミ)・アミューズは鰆、アオリイカ、柿、生ハムなどの生の魚・月の名を付けた十数種の京野菜の皿と「ビーツのエッセンス」・古代米にウニとトリュフ、またはふぐやいくら・活けの鯖などの魚・Ishida Farm のサウスダウン種の乳飲み仔羊か近江牛のランプ・宇治のほうじ茶、デザートは別注文 (たとえばブランマンジェ)・ブルゴーニュ中心の豊富なワイン (食べログ、2023〜2026年の口コミ)・好みに合わせたコースが12,000円 (2026年1月)',
    neighborhood: '東山の古門前通。東山駅から徒歩5分',
    gf_detail: '予約の電話で要確認。シェフが電話で好みを聞いてコースを組み、パンは出ない。魚、野菜、ご飯が中心だが、ソースのグルテンについての情報はない (2024〜2026年の口コミ)。',
    vegan_detail: '予約の電話で要確認。どのコースにも十数種の京野菜の大皿があるが、ほかは魚と肉。要望は電話で相談 (2024〜2026年の口コミ)。',
    notes: '[フレンチ・東山、ひとりで営むカウンター] 東山の古門前通、U 字形の10席のカウンターで、オーナーシェフの Tsutomu Ito が20年以上ひとりで料理を作る。コースは電話で決まり、好み、量、メインを聞いたうえで、十数種を一皿に盛る京野菜、旬の魚、ウニとトリュフの古代米、仔羊か近江牛のおまかせを組む。ワインも目当てのひとつで、ブルゴーニュ中心、古いヴィンテージもある。ワインや写真についてのシェフのこだわりが居心地悪かったという声と、謙虚で感じがよいという声がある。2026年1月は好みに合わせたコースが12,000円、食べログのディナーの平均は15,000〜19,999円。電話で予約、月曜休み。',
  });
}

// ================================================================ カフェ ビブリオティック ハロー!
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000120/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://cafe-hello.jp/';
  const H = day(['11:30', '23:00']);
  put({
    id: 'kyoto_cafe_bibliotic_hello', name: 'カフェ ビブリオティック ハロー! (Cafe Bibliotic Hello!)', category: 'OMNI',
    lat: 35.013766, lng: 135.764165, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Most food is wheat-based — tarts, cakes, sandwiches, pasta and bread from the bakery — alongside hayashi rice; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Cakes and tarts use cream, cheese and eggs; drinks such as juices, black coffee and tea suit, but no vegan information is given (2026 reviews).',
    hours_raw: '11:30–23:00 every day (Tabelog). The official site, last updated in 2017, gives 11:30–24:00 with last order 23:00, and a ground-floor bakery (Hello Bakery) closed on Monday. No reservations; a queue can form at lunch (October 2026). Fruit sandwiches from 14:00 (October 2026). 45 seats on two floors; the upstairs is quieter (September 2026). No smoking inside, allowed in the small back garden; cash only — no cards, e-money or QR payments (Tabelog). 6 min walk from Kyoto Shiyakusho-mae Stn exit 9 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Nijo-dori at Yanagibaba — 6 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Café and bakery behind banana trees, with a library wall of bookshelves (2026 reviews; official site) · breakfast and lunch plates, hayashi rice, sandwiches, seafood and tomato pasta · fruit tarts in seven kinds, e.g. mango tart ¥900; Basque cheesecake ¥750; gâteau chocolat; fruit sandwiches from 14:00 · banana lassi ¥900, mixed fruit lassi, shakes, juices, Mandheling coffee ¥750, Yakushima grape tea, wine (September–October 2026)',
    website: SITE, gmaps: gm('Cafe Bibliotic Hello! 京都'), menu_url: null,
    notes: '[Café · Nijo, a book-lined café behind banana trees] A café on Nijo-dori that you spot by the banana trees and potted plants at the door: inside, warm wood, a wall of bookshelves like a library, sofas and music, with a quieter upstairs. Lunch plates, hayashi rice and pasta, then seven kinds of fruit tart (mango ¥900), Basque cheesecake and lassis through the afternoon and evening, with wine. Open 11:30–23:00 every day; no bookings and a line at lunchtime; many guests are visitors from abroad. One reviewer rated the room above the drinks and found some staff curt. Cash only.',
    chef_bio: { chef_name: null, roles: ['Operator not named in the sources'], origin: null,
      background: 'The official site (copyright 2012, last news 2017) lists the café, a ground-floor bakery (Hello Bakery) and a rental gallery upstairs (Halo Galo). Tabelog Cafe "Tabelog 100" 2021, 2022 and Cafe WEST 2025.',
      philosophy: null, specialty: 'Fruit tarts; lassis.',
      anecdotes: [
        { text: '"Inside, the warm wooden decor, along with a wall full of bookshelves reminiscent of a library, creates a spacious and inviting atmosphere" — September 2026.', source: R + 'B536199913/' },
        { text: 'A September 2026 visitor loved the room, the hours and the music but found the hot drink poorly made and some staff surprisingly curt.', source: R + 'B535054196/' },
        { text: '"The signal is weak, and while there seems to be Wi-Fi, it\'s not really available." — October 2026.', source: R + 'B537334692/' },
        { text: 'An October 2026 visitor waited about ten minutes at 13:00 on a Sunday and noted that more than half the customers were from abroad.', source: R + 'B538039102/' },
      ],
      japanese_sources_summary: '公式サイト (cafe-hello.jp、最終更新2017年): Cafe Bibliotic Hello!、中京区二条柳馬場東入ル晴明町650、11:30〜24:00 (ラストオーダー23時)、1階ハローベーカリー (11:30〜23:00、月曜休み)、2階ハロー画廊 (レンタルギャラリー)。食べログ: カフェ・パン、毎日11:30〜23:00、予約不可、45席、店内禁煙 (奥の小さな庭で喫煙可)、カード・電子マネー・QR 不可、カフェ百名店 2021・2022、カフェ WEST 百名店 2025。口コミ (2026年9〜10月、英語): バナナの木の入口、図書館のような本棚、2階は静か、7種のフルーツタルト、マンゴータルト900円、バスクチーズケーキ750円、バナナラッシー900円、マンデリン750円、ハヤシライス、フルーツサンドは14時から、海外からの客が多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B535054196/', R + 'B535427316/', R + 'B535798789/', R + 'B536199913/', R + 'B537085362/', R + 'B537334692/', R + 'B537542276/', R + 'B537912137/', R + 'B537930731/', R + 'B538039102/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wait at the door at busy times; many guests from abroad; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条通柳馬場東入ル晴明町650',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Cafe WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.013766, 135.764165); cross-checked: GSI 京都府京都市中京区晴明町650番地 (lot) 36m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537334692/', R + 'B538039102/'],
    price_note: 'No menu read; prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Mango tart', '¥900', 'Cakes', 'no', 'no', 'October 2026.', 'mango_tart'),
      it('', '', 'Basque cheesecake', '¥750', 'Cakes', 'ask', 'no', 'October 2026.', 'basque_cheesecake'),
      it('', '', 'Banana lassi', '¥900', 'Drinks', '', 'no', 'October 2026.', 'banana_lassi'),
      it('', '', 'Mandheling coffee', '¥750', 'Drinks', '', '', 'October 2026.', 'mandheling'),
    ] }, {
    cuisine: 'バナナの木の奥のカフェとベーカリー。図書館のような本棚の壁 (2026年の口コミ、公式サイト)・モーニングとランチのプレート、ハヤシライス、サンドイッチ、魚介とトマトのパスタ・7種のフルーツタルト、たとえばマンゴータルト900円、バスクチーズケーキ750円、ガトーショコラ、フルーツサンドは14時から・バナナラッシー900円、ミックスフルーツラッシー、シェイク、ジュース、マンデリン750円、Yakushima のぶどうのお茶、ワイン (2026年9〜10月)',
    neighborhood: '二条通、柳馬場の東。京都市役所前駅から徒歩6分',
    gf_detail: '要確認。タルト、ケーキ、サンドイッチ、パスタ、ベーカリーのパンなど小麦のものが多く、ほかにハヤシライス。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。ケーキやタルトはクリーム、チーズ、卵を使う。ジュース、ブラックのコーヒー、お茶などは合うが、ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[カフェ・二条、バナナの木と本棚のカフェ] 入口のバナナの木と鉢植えが目印の、二条通のカフェ。中は温かい木の内装に図書館のような本棚の壁、ソファ、音楽、2階は静か。ランチのプレート、ハヤシライス、パスタのあとは、午後から夜まで7種のフルーツタルト (マンゴー900円)、バスクチーズケーキ、ラッシー、ワインも。毎日11時半〜23時、予約不可で昼は行列、海外からの客が多い。飲み物より空間がよく、そっけないスタッフもいたという口コミも。現金のみ。',
  });
}

save();
