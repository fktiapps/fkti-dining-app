// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 7.
//   + おでん割烹 叶哉 Oden Kappou Kanoya (oden kappo on Kiyamachi near Bukkoji; moved from Gion, here since April 2024)
//   + お酒と食事 うり Osake to Shokuji Uri (alley hideaway for sake and small dishes off Shijo; since 2018)
//   + マダム紅蘭 Madam Koran (Kyoto-style Sichuan in a sukiya house by the Imperial Palace; Chinese WEST Tabelog 100)
//   + 梅園 河原町店 Umezono Kawaramachi ten (amami tea house known for mitarashi dango; Wagashi WEST Tabelog 100 2023, 2026)
//   - 一蘭 京都河原町店 (26018150): skipped as a chain.
//   Picked on 2026-11-05: from `queue.mjs kyoto-missed next core 200`, lane id mod 6 = 2: 26018150 skipped, then 26041106,
//   26031866; from `next notable 200`: 26000642, 26001860. None is in data/kyoto.json: grep by name (一蘭/Ichiran, 叶哉/
//   Kanoya, うり/お酒と食事, 紅蘭/Koran, 梅園/うめぞの/Umezono) and address (天王町157, 足袋屋町317-15, 下御霊前町631,
//   山崎町234) found none.
//   Nearest existing pins: kyoto_kyo_no_musubime 27 m from Kanoya; kyoto_sakedokoro_terayama 2.9 m from Uri's Tabelog point
//   (same lot: Terayama's address_ja is "京都府京都市下京区綾小路通足袋屋町317-11", Uri's 足袋屋町317-15), so Uri's pin is
//   offset to about 5.8 m; mp_monburan 150 m from Koran; kyr_ramen_daisenso_kyoto_kaw 19 m from Umezono.
//   Group checks: 梅園 lists three 甘党茶屋 shops (河原町, 清水, 三条寺町) plus みたらし 京 梅園 西武池袋店 — four of the
//   tea-house concept, none in data, a small group — and two sister formats (うめぞの CAFE&GALLERY, 梅園 oyatsu).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26018150', '一蘭 京都河原町店 (Ichiran Kyoto Kawaramachi): a chain — the official shop list (https://ichiran.com/shop/, read 2026-11-05) names dozens of shops across Japan, Taiwan and New York (e.g. 一蘭本社総本店, 天神店, 浅草店, 渋谷店, あべの店, NY タイムズスクエア店)');

// ================================================================ おでん割烹 叶哉
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041106/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'kyoto_oden_kappo_kanoya', name: 'おでん割烹 叶哉 (Oden Kappou Kanoya)', category: 'OMNI',
    lat: 35.000963, lng: 135.769455, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Oden in dashi with fish cakes, sashimi with soy sauce, simmered and grilled dishes; no gluten information (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden and every simmered dish sit in a fish-based dashi, alongside sashimi and duck (2025–2026 reviews).',
    hours_raw: 'Monday–Saturday and holidays 16:00–23:00; closed Sunday and irregularly (Tabelog). Reservations taken, also through TableCheck; bookings are cancelled after 30 minutes without word (Tabelog). An otoshi of ¥700 per seat (Tabelog). 19 seats: a 13-seat counter, tables and private rooms for 4 and 6; heated tobacco only in a smoking area; cards, e-money and QR payments (Tabelog). 5 min from Hankyu Kyoto Kawaramachi Stn (Tabelog). Opened at this address on 25 April 2024 (Tabelog), after a move from Gion (February 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kiyamachi north of Bukkoji — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Oden kappo: oden in a rich dashi plus the chef\'s own seasonal dishes (2025–2026 reviews) · course ¥9,000, with seasonal sashimi, white fish simmered with vegetables and tender simmered octopus (November 2025) · oden, including egg topped with salmon roe · winter yellowtail, dashimaki, saikyo-yaki, duck simmered with celeriac · matsutake somen and matsutake rice in season (August 2026 visit) · dashi-wari: sake or shochu mixed with dashi · sake, shochu and wine (Tabelog; 2025–2026 reviews)',
    website: null, gmaps: gm('おでん割烹 叶哉 京都'), menu_url: null,
    notes: '[Oden · Kiyamachi, oden kappo with dashi-wari] A bright, modern oden kappo on the Kiyamachi side near Bukkoji, which moved here from Gion in 2024. Besides oden simmered in a deep dashi — the egg topped with salmon roe is a regular\'s favourite — the chef turns out kappo dishes: sashimi, simmered octopus, winter yellowtail, duck with celeriac. Try the dashi-wari, sake or shochu let down with the broth. A ¥9,000 course or à la carte; ¥700 otoshi. A young, quick staff, Showa-era hits on the speakers, a long counter and two private rooms. Open 16:00–23:00, closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed in the sources)'], origin: null,
      background: 'A February 2026 reviewer had loved the shop since it was in Gion and visited after its move; Tabelog gives the opening at this address as 25 April 2024.',
      philosophy: null, specialty: 'Oden; dashi-wari; seasonal kappo dishes.',
      anecdotes: [
        { text: 'A January 2026 group of sixty-somethings from Kanto was told by the taxi driver that the area used to be a geisha district, and was given a private room away from the lively young crowd; the reviewer warned that it can be cold at your feet.', source: R + 'B521179093/' },
        { text: 'Showa-era hit songs played as background music (March 2026).', source: R + 'B523858329/' },
        { text: 'A March 2026 diner, who usually dislikes sake, enjoyed the dashi-wari and noted that every dish came portioned for the party of three.', source: R + 'B525931267/' },
      ],
      japanese_sources_summary: '食べログ: おでん割烹 叶哉、おでん・居酒屋、下京区木屋町通仏光寺上ル天王町157-727、阪急京都河原町駅から徒歩5分、月〜土・祝 16:00〜23:00、日曜休み (ほか不定休)、予約可 (TableCheck)、無断で30分遅れると自動キャンセル、お付きだし料700円、19席 (カウンター13)、個室 (4人・6人)、加熱式たばこのみの喫煙所、カード・電子マネー・QR 可、2024年4月25日オープン。口コミ (2025〜2026年、英語): 祇園から移転、コース9,000円、刺身、白身魚と野菜の炊き合わせ、たこの柔らか煮、いくらをのせた玉子、冬のぶり、だし巻き、西京焼き、鴨と根セロリ、だし割り、松茸のそうめんと松茸ご飯、昭和の歌謡曲。',
      confidence: 'medium', sources: [TB, R + 'B517973154/', R + 'B521179093/', R + 'B523858329/', R + 'B525775945/', R + 'B525931267/', R + 'B527148097/', R + 'B533709984/', R + 'B534654462/', R + 'B535679895/', R + 'B536730659/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead (TableCheck); ¥700 otoshi; cards and QR payments.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区木屋町通仏光寺上ル天王町157-727',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.000963, 135.769455); cross-checked: GSI 京都府京都市下京区天王町157番地 (lot) 50m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517973154/', TB],
    price_note: 'No menu read; course price from a November 2025 review; otoshi from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Course', '¥9,000', 'Courses', 'ask', 'no', 'November 2025.', 'course_9000'),
      it('', '', 'Otoshi (per seat)', '¥700', 'Charges', '', '', 'Tabelog.', 'otoshi'),
      it('', '', 'Dashi-wari (sake or shochu with dashi)', '', 'Drinks', 'ask', 'no', 'March 2026.', 'dashiwari'),
    ] }, {
    cuisine: 'おでん割烹: 濃い出汁のおでんと料理人の季節の料理 (2025〜2026年の口コミ)・コース9,000円、季節の刺身、白身魚と野菜の炊き合わせ、やわらかいたこの煮物 (2025年11月)・いくらをのせた玉子などのおでん・冬のぶり、だし巻き、西京焼き、鴨と根セロリの煮物・季節の松茸のそうめんと松茸ご飯 (2026年8月の訪問)・だし割り: 日本酒か焼酎を出汁で割る・日本酒、焼酎、ワイン (食べログ、2025〜2026年の口コミ)',
    neighborhood: '仏光寺の北の木屋町。京都河原町駅から徒歩5分',
    gf_detail: '要確認。出汁のおでんと練り物、醤油で食べる刺身、煮物や焼き物。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。おでんも煮物も魚の出汁で、ほかに刺身や鴨 (2025〜2026年の口コミ)。',
    notes: '[おでん・木屋町、だし割りのおでん割烹] 仏光寺近くの木屋町側、2024年に祇園から移ってきた明るくモダンなおでん割烹。濃い出汁で煮たおでん (常連のおすすめはいくらをのせた玉子) のほか、刺身、たこの煮物、冬のぶり、鴨と根セロリなどの割烹料理も。だし割り (日本酒や焼酎を出汁で割る) をぜひ。コース9,000円かアラカルト、お付きだし700円。若くてきびきびしたスタッフ、昭和の歌謡曲、長いカウンターと個室が2つ。16時〜23時、日曜休み。',
  });
}

// ================================================================ お酒と食事 うり
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26031866/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:00']);
  put({
    id: 'kyoto_osake_to_shokuji_uri', name: 'お酒と食事 うり (Osake to Shokuji Uri)', category: 'MOM_AND_POP',
    lat: 35.002296, lng: 135.766106, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small Japanese dishes with soy sauce, tempura, saba sushi and oden; no gluten information (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, duck and beef-tendon oden lead the menu, and the vegetable dishes use dashi (2024–2026 reviews).',
    hours_raw: 'Tuesday–Sunday 17:00–22:00; closed Monday; hours may change (Tabelog). Reservations taken; booking a day ahead or the same day is usually enough (Tabelog; December 2024). No service charge and no otoshi charge (Tabelog). Omakase of five dishes ¥6,600 (July, August 2025). Seats: Tabelog lists 11 (4 counter); a 2023 Tabelog Magazine article quoted in an August 2025 review gives 5 counter seats and a table for 4; a December 2025 review adds a near-private table for 6 upstairs, where the toilet is. The chef cooks alone with one hall staff, so service can be slow (August 2026). Non-smoking; cards accepted (Tabelog). At the end of a narrow alley, 282 m from Kyoto Kawaramachi Stn (Tabelog; 2024–2026 reviews). Opened 20 November 2018 (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'An alley south of Shijo near Ayanokoji — 282 m from Kyoto Kawaramachi Stn',
    cuisine: 'Small hideaway for sake and carefully made Japanese dishes, à la carte or a five-dish omakase ¥6,600 (2025 reviews) · obanzai platter, e.g. saba sushi, duck roast, ebi-mame, okra with sesame, tokobushi · sashimi such as Awaji hamo, Akashi sea bream and octopus, shime aji · Kamo eggplant agedashi ¥980, tsurumurasaki ohitashi ¥480, summer vegetable tempura ¥1,280 (July 2025) · miso-grilled tokishirazu salmon, sanbaizu salad with jako · oysters in winter: oyster tempura, oyster rice (December 2025) · oden with tofu and beef tendon, eel, duck (February 2025) · plum wine ¥650; beer ¥700, sake from ¥900, shochu ¥700, highball ¥650 (2025 reviews)',
    website: null, gmaps: gm('お酒と食事 うり 京都'), menu_url: null,
    notes: '[Japanese · Shijo Kawaramachi, a hideaway at the end of an alley] A small, homely restaurant at the end of a narrow alley just off Shijo Kawaramachi, opened in 2018 by a chef who had been head chef at Nikomi Suzuya. Order à la carte or the ¥6,600 five-dish omakase, which covers most of the menu: a plate of obanzai with saba sushi, Awaji hamo or Akashi sea bream, Kamo eggplant agedashi, tempura, oysters in winter. Quiet enough to come alone; good with sake. The chef cooks single-handed, so service can be slow, and some find it pricey for what it is. Closed Monday.',
    chef_bio: { chef_name: 'Kunihiko Kamimon (romaji from a 2023 Tabelog Magazine article quoted in an August 2025 review; a December 2025 review writes "Mr. Uegato"; the kanji is not in a source)', roles: ['Head chef and owner (Tabelog: former head of Nikomi Suzuya; August 2026 review: "The owner runs the kitchen alone")'], origin: null,
      background: 'Per a 2023 Tabelog Magazine article quoted in an August 2025 review: after training at renowned kaiseki and Japanese restaurants, the chef served as head chef at Nikomi Suzuya before opening this small eatery. Tabelog\'s remarks name the shop\'s former post as "Nikomi … Suzuya". Tabelog gives the opening as 20 November 2018.',
      philosophy: null, specialty: 'Obanzai platter with saba sushi; seasonal tempura.',
      anecdotes: [
        { text: 'A December 2025 reviewer, a classmate of the chef from middle and high school, finally came with an old friend over New Year, let the chef choose about six dishes, and ranked the sea-bream tempura among the best ever eaten.', source: R + 'B519809864/' },
        { text: 'A June 2024 visitor singled out a tempura of corn silk.', source: R + 'B523529592/' },
        { text: 'A December 2024 diner found everything good but without a wow factor and not cheap — about ¥18,000 for two.', source: R + 'B498978743/' },
      ],
      japanese_sources_summary: '食べログ: お酒と食事 うり、日本料理・おでん、下京区足袋屋町317-15、京都河原町駅から282m、火〜日 17:00〜22:00、月曜休み、予約可、サービス料・お通し代なし、11席 (カウンター4)、禁煙、カード可、2018年11月20日オープン、Nikomi Suzuya の元料理長。口コミ (2024〜2026年、英語): 細い路地の奥の隠れ家、おまかせ5品6,600円、鯖寿司、鴨ロース、えび豆、とこぶし、Awaji の鱧、Akashi の鯛、賀茂なすの揚げだし980円、夏野菜の天ぷら1,280円、牡蠣の天ぷらと牡蠣ご飯、料理長は一人で厨房、2階に席とお手洗い。',
      confidence: 'medium', sources: [TB, R + 'B479692542/', R + 'B485385249/', R + 'B498978743/', R + 'B502184540/', R + 'B510839237/', R + 'B510923705/', R + 'B519809864/', R + 'B523529592/', R + 'B533621726/', R + 'B534040036/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small and quiet; book a day ahead; no otoshi or service charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区足袋屋町317-15',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} gives (35.002306, 135.766076), 2.9 m from kyoto_sakedokoro_terayama (足袋屋町317-11, same lot); offset about 5 m east to (35.002296, 135.766106) so the two pins are about 5.8 m apart; cross-checked: GSI 京都府京都市下京区足袋屋町317番地 (lot) about 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510839237/', R + 'B510923705/'],
    price_note: 'No menu read; prices from July and August 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase, five dishes', '¥6,600', 'Courses', 'ask', 'no', 'July–August 2025.', 'omakase_5'),
      it('', '', 'Kamo eggplant agedashi', '¥980', 'À la carte', 'ask', 'no', 'July 2025.', 'kamonasu_agedashi'),
      it('', '', 'Tsurumurasaki ohitashi', '¥480', 'À la carte', 'ask', 'no', 'July 2025.', 'tsurumurasaki'),
      it('', '', 'Summer vegetable tempura', '¥1,280', 'À la carte', 'no', 'ask', 'July 2025.', 'natsu_yasai_tempura'),
      it('', '', 'Plum wine', '¥650', 'Drinks', '', '', 'July 2025.', 'umeshu'),
    ] }, {
    cuisine: 'お酒と丁寧な和食の小さな隠れ家。アラカルトか5品のおまかせ6,600円 (2025年の口コミ)・おばんざいの盛り合わせ、たとえば鯖寿司、鴨ロース、えび豆、オクラの胡麻和え、とこぶし・Awaji の鱧、Akashi の鯛やたこ、〆鯵などの刺身・賀茂なすの揚げだし980円、つるむらさきのおひたし480円、夏野菜の天ぷら1,280円 (2025年7月)・ときしらずの味噌焼き、じゃこときゅうりの三杯酢・冬は牡蠣: 牡蠣の天ぷら、牡蠣ご飯 (2025年12月)・豆腐と牛すじのおでん、うなぎ、鴨 (2025年2月)・梅酒650円、ビール700円、日本酒900円から、焼酎700円、ハイボール650円 (2025年の口コミ)',
    neighborhood: '四条の南、綾小路近くの路地。京都河原町駅から282m',
    gf_detail: '要確認。醤油を使う和食の小皿、天ぷら、鯖寿司、おでん。グルテンの情報はない (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。魚、鴨、牛すじのおでんが中心で、野菜の料理にも出汁を使う (2024〜2026年の口コミ)。',
    notes: '[和食・四条河原町、路地の奥の隠れ家] 四条河原町からすぐ、細い路地の奥にある小さくて家庭的な店。Nikomi Suzuya の料理長だった料理人が2018年に開いた。アラカルトか、メニューのほとんどが入る5品のおまかせ (6,600円): 鯖寿司入りのおばんざいの盛り合わせ、Awaji の鱧や Akashi の鯛、賀茂なすの揚げだし、天ぷら、冬は牡蠣。一人でも落ち着けて、日本酒に合う。料理長が一人で作るので提供はゆっくりめで、値段のわりにという声もある。月曜休み。',
  });
}

// ================================================================ マダム紅蘭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26000642/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://madam-ko-ran.com/'; const ABOUT = SITE + 'about.html'; const REASON = SITE + 'reason.html';
  const H = day(['11:30', '14:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_madam_koran', name: 'マダム紅蘭 (Madam Koran)', category: 'OMNI',
    lat: 35.017596, lng: 135.767502, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Chinese dishes with oyster and soy-based sauces, dumplings, ramen and fried dishes; no gluten information (official site; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Seasonal Kyoto-vegetable dishes and vegetable oil are used, but the happosai rests on a Chinese stock and most dishes carry meat or seafood (official site; 2026 reviews).',
    hours_raw: 'Tabelog: Wednesday–Sunday 11:30–14:00 and 17:00–21:00, closed Monday and Tuesday. The official site gives lunch 11:30–14:30 (last order 14:00) and dinner 17:00–21:30 (last order 21:00), and closed Monday (open on a holiday, then closed the next day); its front page says closed Monday and the fourth Tuesday. Reservations taken by phone; often full at lunch (2026 reviews). Lunch: Chinese bento with soup ¥1,600; mini kaiseki ¥3,000, from two people, ordered by 13:30 (October 2026). Takeaway by phone (official site). 30 seats: chairs on the ground floor, tatami rooms up a steep stair; children from primary-school age (official site; 2026 reviews). Non-smoking; cards, e-money and PayPay (Tabelog). 2 min from the Kawaramachi Marutamachi bus stop; 5 min west of Jingu-Marutamachi Stn (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi at Marutamachi, south-east of the Imperial Palace — 5 min from Jingu-Marutamachi Stn',
    cuisine: 'Sichuan-based Chinese made light for Japanese palates, with vegetable oil and few spices, in a 90-year-old sukiya house (official site) · seasonal Kyoto-vegetable dishes four times a year, e.g. Kamo eggplant mapo, manganji peppers with squid and cashews; spring sakura dongpo pork (official site; August 2026) · "refined happosai" on a carefully made Chinese stock (official site) · Dongpo burger: braised pork belly in a mantou, a takeaway favourite; ¥400 as an add-on to the mini kaiseki (official site; September 2026) · lunch: Chinese bento with soup ¥1,600 (shrimp tempura, shumai, sweet and sour pork); mini kaiseki ¥3,000 (appetizers, squid with oyster sauce, fried mackerel, shrimp mayo, xiaolongbao, chashu ramen, dessert) (2026 reviews) · tantanmen, xiaolongbao, steamed chicken with scallion and ginger, burdock with beef and peppers (2026 reviews)',
    website: SITE, gmaps: gm('マダム紅蘭 京都'), menu_url: REASON,
    notes: '[Chinese · Marutamachi, Kyoto-style Sichuan in a sukiya house] A Chinese restaurant south-east of the Imperial Palace in a 90-year-old all-cypress sukiya house that was the main home of a confectioner: chairs downstairs, tatami rooms up a steep stair. The cooking is Sichuan at heart but gentle, with seasonal Kyoto vegetables four times a year — the Kamo eggplant mapo in summer is a favourite. Lunch is the mini kaiseki (¥3,000, two or more) or a ¥1,600 Chinese bento; reviewers rate the kaiseki and the xiaolongbao well and are cooler on the bento. The Dongpo burger (pork belly in a mantou) also sells as a gift. Book ahead; closed Monday.',
    chef_bio: { chef_name: null, roles: ['Kitchen and owners not named on the official site'], origin: null,
      background: 'Per the official site: the restaurant occupies a renovated 90-year-old sukiya-style house of solid hinoki that was once the main house of a confectioner; the motto is to serve first the flavours the cook finds delicious, with original recipes. A September 2026 reviewer notes Michelin recognition. Tabelog Chinese WEST "Tabelog 100" 2021, 2023, 2024 and 2026.',
      philosophy: 'Per the official site: 「まず自分が美味しいと思った味覚をお客様に提供する」 — serve the guest, first of all, what one has found delicious oneself.',
      specialty: 'Kamo eggplant mapo; Dongpo burger; mini kaiseki lunch.',
      anecdotes: [
        { text: 'A September 2026 diner who ordered the mini kaiseki added a Dongpo burger (¥400) and wished for one each: "light and elegant, melting in the mouth".', source: R + 'B535224769/' },
        { text: 'An October 2026 walk-in found the bento small and asked, "Is this really Chinese cuisine?", while noting the steep stairs.', source: R + 'B536587693/' },
        { text: 'An August 2026 regular called it the best Chinese food in Kyoto for the price, and found the restaurant fully booked that day.', source: R + 'B534730806/' },
      ],
      japanese_sources_summary: '公式サイト (madam-ko-ran.com): マダム紅蘭〜京町家でいただく本格的チャイニーズ〜、京都御所の東南、築90年の菓子匠の本家跡を改築した総檜造りの数寄屋建築、「まず自分が美味しいと思った味覚をお客様に提供する」、基本は中国四川料理だが植物油脂を使い香辛料もほとんど使わず、日本人の口に合うようにあっさり、京野菜の季節限定メニューが年に四回 (朝掘り竹の子、賀茂なす、万願寺唐辛子、ゆり根など)、上品な八宝菜、春限定のさくらの東坡肉、東坡バーガー (お土産に人気)、テイクアウトは電話で、定休日は月曜日 (祝日は営業で翌日代休)、トップページでは月曜と第四火曜、ランチ11:30〜14:30 (L.O. 14:00)、ディナー17:00〜21:30 (L.O. 21:00)、1階はイス席、お子様は小学生以上。食べログ: 中華料理・四川料理・担々麺、中京区寺町丸太町下御霊前町631-2、水〜日、月火休み、30席、個室、禁煙、カード・電子マネー・PayPay 可、中国料理 WEST 百名店 2021・2023・2024・2026。',
      confidence: 'medium', sources: [TB, SITE, ABOUT, REASON, R + 'B520435560/', R + 'B534730806/', R + 'B535224769/', R + 'B536249146/', R + 'B536387474/', R + 'B536573850/', R + 'B536587693/', R + 'B537404990/', R + 'B537770815/', R + 'B538399667/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone to book; shoes off for the upstairs tatami rooms; ask for chairs if sitting on the floor is hard (official site).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区寺町丸太町下御霊前町631-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through October 2026; Chinese WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.017596, 135.767502); GSI matches only the town 京都府京都市中京区下御霊前町 (centroid 74 m away), not the lot, so the pin rests on the Tabelog point, consistent with the official "丸太町通寺町東入北側"; nearest other record mp_monburan is 150 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536587693/', R + 'B537770815/', R + 'B535224769/'],
    price_note: 'No price list read; lunch prices from September–October 2026 reviews.', last_checked: TODAY, items: [
      it('お昼の中華重 スープ付', '', 'Chinese lunch bento with soup', '¥1,600', 'Lunch', 'ask', 'no', 'October 2026.', 'chuka_ju'),
      it('', '', 'Mini kaiseki lunch (from two people)', '¥3,000', 'Lunch', 'ask', 'no', 'October 2026.', 'mini_kaiseki'),
      it('東坡バーガー', '', 'Dongpo burger (pork belly in a mantou), add-on to the mini kaiseki', '¥400', 'Lunch', 'no', 'no', 'September 2026.', 'tonpo_burger'),
    ] }, {
    cuisine: '築90年の数寄屋建築で、植物油を使い香辛料を控えて日本人の口に合わせた四川ベースの中国料理 (公式サイト)・年に四回の京野菜の季節メニュー、たとえば賀茂なすマーボー、万願寺唐辛子とイカとカシューナッツの炒め、春のさくらの東坡肉 (公式サイト、2026年8月)・丁寧な中華スープの「上品な八宝菜」(公式サイト)・東坡バーガー: 角煮をマントウにはさんだお土産の人気品、ミニ懐石の追加で400円 (公式サイト、2026年9月)・ランチ: スープ付きのお昼の中華重1,600円 (海老の天ぷら、焼売、酢豚)、ミニ懐石3,000円 (前菜、イカのオイスター炒め、鯖の揚げ物、エビマヨ、小籠包、チャーシュー麺、デザート) (2026年の口コミ)・担々麺、小籠包、蒸し鶏のねぎ生姜だれ、ごぼうと牛肉とピーマンの炒め (2026年の口コミ)',
    neighborhood: '京都御所の東南、寺町丸太町。神宮丸太町駅から徒歩5分',
    gf_detail: '要確認。オイスターソースや醤油のたれの中国料理、点心、ラーメン、揚げ物。グルテンの情報はない (公式サイト、2026年の口コミ)。',
    vegan_detail: '要確認。季節の京野菜の料理と植物油を使うが、八宝菜は中華スープがベースで、ほとんどの料理に肉か魚介が入る (公式サイト、2026年の口コミ)。',
    notes: '[中華・丸太町、数寄屋の京風四川] 京都御所の東南、菓子匠の本家だった築90年の総檜の数寄屋で味わう中国料理。1階はイス席、2階は急な階段を上がった座敷。四川がベースだがやさしい味で、年に四回の京野菜の季節メニューがあり、夏の賀茂なすマーボーが人気。昼はミニ懐石 (3,000円、2人から) か1,600円の中華重。口コミの評価はミニ懐石と小籠包が高く、中華重は控えめ。角煮をマントウにはさんだ東坡バーガーはお土産にも。要予約、月曜休み。',
  });
}

// ================================================================ 梅園 河原町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26001860/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://umezono-kyoto.com/'; const SHOP = SITE + 'kawaramachi/'; const MENU = SHOP + 'menu/';
  const H = day(['10:30', '19:30']);
  put({
    id: 'kyoto_umezono_kawaramachi', name: '梅園 河原町店 (Umezono Kawaramachi ten)', category: 'OMNI',
    lat: 35.007553, lng: 135.769262, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mitarashi dango, shiratama, warabi mochi and kanten are starch- and rice-based, but the mitarashi sauce is soy-based and baked matcha sweets also appear; no ingredient list is published (official menu; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Dango, warabi mochi, zenzai and kakigori with bean paste are mostly plant-based, but cream, ice cream, milk kakigori and parfaits use dairy; no ingredient list is published (official menu).',
    hours_raw: '10:30–19:30 every day (Tabelog). The group closed 7–9 January in its New Year notice (official site). No reservations; a short wait at busy times (Tabelog; September, October 2026). At least one item per person; three dango can be ordered with a drink (September, October 2026); hojicha is served free (November 2026). Prices across 梅園 were revised from 1 October 2026 (official site). Cards, e-money and PayPay (Tabelog). Non-smoking; takeaway (Tabelog). On Kawaramachi south of Sanjo, 6 min from Keihan Sanjo Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-dori south of Sanjo — 6 min from Keihan Sanjo Stn',
    cuisine: 'Amami tea house known for its small, square, grilled mitarashi dango (2026 reviews) · mitarashi dango, five sticks ¥600; with matcha or brown-sugar warabi mochi ¥1,070; with kinako shiratama ¥900; with anmitsu ¥1,170; with a small parfait ¥1,350; amami tenshin assortment ¥1,110 · warabi mochi ¥950; anmitsu with kuromitsu ¥950–1,250; Uji chilled zenzai ¥1,150; matcha cream with azuki ¥1,200 · kakigori, e.g. Uji kintoki shiratama with matcha warabi mochi ¥1,680, brown-sugar shiratama with warabi mochi ¥1,550 (official menu) · green tea ¥750 (September–October 2026)',
    website: SHOP, gmaps: gm('梅園 河原町店'), menu_url: MENU,
    notes: '[Wagashi café · Kawaramachi Sanjo, mitarashi dango since the 1920s] A long, narrow tea house on Kawaramachi south of Sanjo, founded in 1927 according to a reviewer, where a pot of mitarashi dango greets you at the door. The dango are small, square and grilled until charred at the edges, under a glossy sweet-soy sauce (¥600 for five); pair them with warabi mochi, anmitsu or, in summer, an Uji kintoki kakigori. Hojicha comes free. Most reviewers love the dango; one from Kanto found the sauce far sweeter than expected. Open daily 10:30–19:30; no bookings.',
    chef_bio: { chef_name: null, roles: ['Run by 甘党茶屋 京 梅園 (official site); no staff named'], origin: null,
      background: 'Per the official site, 梅園 runs three 甘党茶屋 tea houses in Kyoto (河原町店, 清水店, 三条寺町店), the café うめぞの CAFE&GALLERY, 梅園 oyatsu at ジェイアール京都伊勢丹, みたらし 京 梅園 at 西武池袋, and an online shop; its うめぞの茶房 closed on 20 October 2025. A September 2026 review dates the shop to 1927. Tabelog Wagashi WEST "Tabelog 100" 2023 and 2026.',
      philosophy: null, specialty: 'Mitarashi dango; warabi mochi; kakigori.',
      anecdotes: [
        { text: '"I never really liked Mitarashi Dango, but the ones here were different!" — September 2026.', source: R + 'B536055528/' },
        { text: 'An October 2026 visitor from Kanto found the dango overwhelmingly sweet compared with the sweet-and-salty style back home.', source: R + 'B537618150/' },
        { text: '"As soon as I entered the shop, I was captivated by the pot filled with Mitarashi Dango." — November 2026.', source: R + 'B538722931/' },
      ],
      japanese_sources_summary: '公式サイト (umezono-kyoto.com): 甘党茶屋 京 梅園 河原町店、メニュー: 甘味点心1,110円、みたらし団子と抹茶わらび餅・黒糖わらび餅1,070円、みたらし団子ときなこ白玉900円、みたらし団子600円、みたらし団子と小さいパフェ1,350円、みたらし団子とあんみつ黒みつ添え1,170円、宇治冷やしぜんざい1,150円、わらび餅950円、白玉あんみつ黒みつ添え950円、かき氷 (宇治金時白玉＋抹茶わらび餅1,680円など)。店舗: 河原町店、清水店、三条寺町店、うめぞの CAFE&GALLERY、梅園 oyatsu ジェイアール京都伊勢丹店、みたらし 京 梅園 西武池袋店、2026年10月1日から全店で価格改定、うめぞの茶房は2025年10月20日に閉店。食べログ: 甘味処、中京区河原町三条下る山崎町234-4、毎日10:30〜19:30、予約不可、カード・電子マネー・PayPay 可、禁煙、テイクアウト可、和菓子・甘味処 WEST 百名店 2023・2026。口コミ (2026年9〜11月、英語): 1927年創業、四角い小さなみたらし団子、焦げ目、ほうじ茶付き、一人一品。',
      confidence: 'medium', sources: [TB, SITE, SHOP, MENU, R + 'B536055528/', R + 'B536196363/', R + 'B536251010/', R + 'B536275786/', R + 'B537075893/', R + 'B537359382/', R + 'B537414656/', R + 'B537618150/', R + 'B538443394/', R + 'B538722931/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at least one item each; no bookings; cards and PayPay.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町三条下る山崎町234-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October 2026 price notice) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.007553, 135.769262); cross-checked: GSI 京都府京都市中京区山崎町234番地 (lot) 44m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU],
    price_note: 'Official menu page, undated; whether it already shows the prices revised on 1 October 2026 is not stated. A November 2026 review paid ¥600 for five dango.', last_checked: TODAY, items: [
      it('みたらし団子', '', 'Mitarashi dango, five sticks', '¥600', 'Dango', 'ask', 'ask', 'November 2026 review agrees.', 'mitarashi'),
      it('みたらし団子と抹茶わらび餅', '', 'Mitarashi dango with matcha warabi mochi', '¥1,070', 'Dango sets', 'ask', 'ask', '', 'mitarashi_matcha_warabi'),
      it('みたらし団子とあんみつ黒みつ添え', '', 'Mitarashi dango with anmitsu and kuromitsu', '¥1,170', 'Dango sets', 'ask', 'ask', '', 'mitarashi_anmitsu'),
      it('わらび餅', '', 'Warabi mochi', '¥950', 'Cold sweets', 'ask', 'ask', '', 'warabimochi'),
      it('宇治金時白玉＋抹茶わらび餅', '', 'Kakigori: Uji kintoki with shiratama and matcha warabi mochi', '¥1,680', 'Kakigori', 'ask', 'ask', '', 'uji_kintoki_kakigori'),
    ] }, {
    cuisine: '小さな四角い焼きみたらし団子で知られる甘味処 (2026年の口コミ)・みたらし団子5本600円、抹茶か黒糖のわらび餅と1,070円、きなこ白玉と900円、あんみつと1,170円、小さいパフェと1,350円、甘味点心1,110円・わらび餅950円、黒みつのあんみつ950〜1,250円、宇治冷やしぜんざい1,150円、冷やし抹茶クリーム小豆1,200円・かき氷: 宇治金時白玉＋抹茶わらび餅1,680円、黒糖白玉＋黒糖わらび餅1,550円など (公式メニュー)・緑茶750円 (2026年9〜10月)',
    neighborhood: '三条の南の河原町通。京阪三条駅から徒歩6分',
    gf_detail: '要確認。みたらし団子、白玉、わらび餅、寒天はでんぷんや米が中心だが、みたらしのたれは醤油ベースで、抹茶の焼き菓子もある。原材料は公開されていない (公式メニュー、2026年の口コミ)。',
    vegan_detail: '要確認。団子、わらび餅、ぜんざい、あんのかき氷は植物性が中心だが、クリーム、アイス、みるくのかき氷、パフェは乳製品を使う。原材料は公開されていない (公式メニュー)。',
    notes: '[甘味・河原町三条、1920年代からのみたらし団子] 三条の南の河原町通、奥に長い甘味処。口コミによれば1927年創業で、入口にみたらし団子の鍋が迎える。団子は小さな四角で、ふちが焦げるまで焼き、つやのある甘い醤油だれ (5本600円)。わらび餅、あんみつ、夏は宇治金時のかき氷と合わせて。ほうじ茶付き。団子は好評だが、関東の人には甘すぎたという声も。毎日10時半〜19時半、予約不可。',
  });
}

save();
