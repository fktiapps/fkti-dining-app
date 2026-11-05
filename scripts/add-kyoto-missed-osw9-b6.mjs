// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 6.
//   + 麩房老舗 Fufu Roho (Nishiki Market nama-fu maker; fried nama-fu dengaku to eat in on 2 seats)     [core]
//   + 宮川町 水簾 Miyagawa Cho Suilen (kaiseki in a Miyagawa-cho townhouse; since 2012)                  [core]
//   + グリル小宝 Grill Kodakara (Okazaki yoshoku, omurice with house demi-glace; since 1961 per a review) [notable]
//   + しろはとベーカリー Shirohato Bakery (small bakery near Karasuma Oike; cream buns, whole-grain loaves)   [notable]
//   Taken in queue order on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (lane ids 26005553, 26020313)
//   and `next notable 200` (26000009, 26021765), after batch 5. None is in data/kyoto.json: grep by name (麩房/Fufu,
//   水簾/Suilen/Suiren, 小宝/Kodakara, しろはと/Shirohato) and address (鍛冶屋町211, 宮川筋2-253, 岡崎北御所町46,
//   西押小路町102) found none.
//   Group check: 水簾 has two shops (Kyoto honten and Tokyo Midtown) on its own site — a small group; neither in data.
//   Pins: all four have lot-level GSI matches within 75 m; nearest other records 25 m (Shirohato) or more.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 麩房老舗
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26005553/'; const R = TB + 'dtlrvwlst/';
  const H = day(['09:00', '18:00']);
  put({
    id: 'kyoto_fufu_roho_nishiki', name: '麩房老舗 (Fufu Roho)', category: 'OMNI',
    lat: 35.005125, lng: 135.765934, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the shop sells nama-fu, which is wheat gluten, and its dengaku is fried nama-fu with miso (2023–26 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Nama-fu (wheat gluten with millet, mugwort or sesame) and the house dengaku miso may suit, but no ingredient list is published (2023–26 reviews).',
    hours_raw: '9:00–18:00 every day; hours may change (Tabelog). Takeaway shop with two seats inside for eating the dengaku (Tabelog; October 2024). In April 2023 the dengaku was limited to 100 servings on Saturdays and Sundays (review). Cash only; no bookings (Tabelog; December 2024). In Nishiki Market, east of Fuyacho; 287 m from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishiki Market, east of Fuyacho — 5 min from Kyoto Kawaramachi Stn',
    cuisine: 'Kyoto nama-fu (fresh wheat gluten) maker in Nishiki Market (2023–26 reviews) · Kyoto nama-fu dengaku: bite-size fried nama-fu with house dengaku miso (cooked 8 hours, per a 2023 review) and sesame, ¥756 (December 2024) · mini set of five fried nama-fu (awa, goma, yomogi, white) ¥648 (July 2023) · nama-fu to take home: white, awa, yomogi (yomogi-fu ¥432, December 2024), half sizes available, about a month’s shelf life (February 2025) · kuruma-fu (March 2026)',
    website: 'http://www.fufusa.com/', gmaps: gm('麩房老舗 錦市場'), menu_url: null,
    notes: "[Nama-fu · Nishiki Market, a gluten maker from the 1800s] A nama-fu specialist in Nishiki Market, said by reviewers to date from the Tenpō era (1830s–40s), selling fresh wheat-gluten cakes — plain, millet, sesame, mugwort — to take home, plus hot fried nama-fu dengaku with a long-cooked sweet miso to eat on the two stools inside (about ¥750). Cash only; open daily 9:00–18:00.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Per reviews: a Kyoto nama-fu specialist with nearly 200 years of history (April 2023), in business since the Tenpō era, 1831–1845 (December 2025). The shop website listed on Tabelog (fufusa.com) did not answer on 2026-11-05.',
      philosophy: null, specialty: 'Nama-fu dengaku.',
      anecdotes: [
        { text: '"The nama-fu was cut into bite-sized pieces, topped with rich miso and sesame" — December 2025.', source: R + 'B519757592/' },
        { text: 'A March 2026 visitor bought dengaku to eat under the cherry blossoms in Arashiyama, and kuruma-fu as a gift.', source: R + 'B528852880/' },
        { text: 'A June 2024 buyer found the texture chewy but could not tell the flavours apart, and wished the staff had explained them.', source: R + 'B486935869/' },
      ],
      japanese_sources_summary: '食べログ: 麩房老舗、その他、中京区錦小路通麩屋町東入る鍛冶屋町211、毎日 9:00〜18:00、予約不可、2席、禁煙、カード・電子マネー・QR 不可。口コミ (2023年4月〜2026年3月、英語): 京生麩の専門店、創業200年近く (天保年間)、生麩田楽756円 (2024年12月)、8時間炊いた自家製の田楽味噌、土日は100食限定 (2023年4月)、揚げ生麩の5個セット648円 (粟、ごま、よもぎ、白)、よもぎ麩432円、ハーフサイズあり、賞味期限約1か月、車麩。',
      confidence: 'low', sources: [TB, R + 'B124590354/', R + 'B443803539/', R + 'B463443644/', R + 'B468498774/', R + 'B486935869/', R + 'B493894344/', R + 'B499081704/', R + 'B501924892/', R + 'B519757592/', R + 'B528852880/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point and pay at the counter; two stools inside; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区錦小路通麩屋町東入る鍛冶屋町211',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through March 2026 (December 2025 and March 2026 the most recent).' },
    pin_source: `Tabelog ${TB} (35.005125, 135.765934); cross-checked: GSI 京都府京都市中京区鍛冶屋町211番地 (lot) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B499081704/', R + 'B468498774/'],
    price_note: 'No price list read; prices from 2023–24 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kyoto nama-fu dengaku (fried, with miso)', '¥756', 'Eat in', 'no', 'ask', 'December 2024.', 'namafu_dengaku'),
      it('', '', 'Yomogi-fu (mugwort nama-fu) to take home', '¥432', 'Nama-fu', 'no', 'ask', 'December 2024.', 'yomogi_fu'),
      it('', '', 'Mini set of five fried nama-fu', '¥648', 'Eat in', 'no', 'ask', 'July 2023.', 'mini_set_5'),
    ] }, {
    cuisine: '錦市場の京生麩の店 (2023〜26年の口コミ)・生麩の田楽: 一口大に切って揚げた生麩に、自家製の田楽味噌 (2023年の口コミでは8時間炊く) とごま、756円 (2024年12月)・揚げ生麩5個のミニセット (粟、ごま、よもぎ、白) 648円 (2023年7月)・持ち帰りの生麩: 白、粟、よもぎ (よもぎ麩432円、2024年12月)、ハーフサイズあり、賞味期限は約1か月 (2025年2月)・車麩 (2026年3月)',
    neighborhood: '錦市場、麩屋町の東。京都河原町駅から徒歩5分',
    gf_detail: 'グルテンフリーではない。生麩は小麦のグルテンで、田楽は揚げた生麩に味噌 (2023〜26年の口コミ)。',
    vegan_detail: '要確認。生麩 (粟、よもぎ、ごま入りの小麦グルテン) と自家製の田楽味噌は合うかもしれないが、原材料の一覧は公開されていない (2023〜26年の口コミ)。',
    notes: '[生麩・錦市場、天保からの麩屋] 錦市場の生麩の専門店で、口コミによれば天保年間から続く。白、粟、ごま、よもぎの生麩を持ち帰りで売り、店内の2席では長時間炊いた甘い味噌の揚げ生麩田楽 (750円ほど) を熱々で。現金のみ、毎日9時〜18時。',
  });
}

// ================================================================ 宮川町 水簾
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26020313/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://suiren-group.com/'; const KYOTO = SITE + 'kyoto/'; const EN = SITE + 'en/';
  const H = day(['12:00', '15:00'], ['18:00', '22:00']);
  put({
    id: 'kyoto_miyagawacho_suiren', name: '宮川町 水簾 (Miyagawa Cho Suilen)', category: 'OMNI',
    lat: 35.001397, lng: 135.771472, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Monthly kaiseki with dashi, soy-based sauces, miso and fried courses; no gluten information (official site; 2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the kaiseki courses are built on fish, shellfish, dashi and a meat course (official site; 2025–26 reviews).',
    hours_raw: 'Lunch 12:00–15:00 (last order 13:30), dinner 18:00–22:00 (last order 20:00); closed Monday (Tabelog; official site). Courses only, changing monthly: lunch 9 dishes ¥10,000, dinner 12 dishes ¥20,000, with tax, 10% service extra (official site). 20 seats: a 10-seat counter facing the kitchen and its okudo (kamado) on the first floor, three private rooms upstairs (Tabelog; official site). Children welcome in private rooms (Tabelog). Cards accepted; non-smoking (Tabelog). 3 min from Gion-Shijo Stn exit 1 (official site).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Miyagawa-cho, behind the Minamiza — 3 min from Gion-Shijo Stn',
    cuisine: 'Kyoto kaiseki in a Miyagawa-cho townhouse, changing with the month and with no fixed signature dishes (official site) · lunch 9 dishes ¥10,000, dinner 12 dishes ¥20,000 (official site) · rice cooked in a Nanbu iron pot on the okudo stove, with dashimaki and chirimen sansho, seconds offered (official site; December 2025) · dishes in 2025–26 reviews: soft-shelled turtle chawanmushi, flounder with liver ponzu, hassun with saba sushi, a small hot pot of clams and turnip, a summer consommé served like draft beer, hamo katsu sandwich, herring and eggplant gazpacho-style, Hinamatsuri chirashi bento, New Year white-miso ozoni and mini osechi · sake from around Japan chosen by the head chef (official site)',
    website: KYOTO, gmaps: gm('宮川町 水簾'), menu_url: KYOTO,
    notes: "[Kaiseki · Miyagawa-cho, behind the Minamiza] A kaiseki restaurant in a townhouse in the Miyagawa-cho geisha district, with a ten-seat counter around the kitchen and its okudo (kamado) downstairs and private rooms above. The courses change monthly — playful seasonal touches like a summer consommé served as \"draft beer\" — and end with pot-cooked rice and dashimaki, seconds offered. Lunch ¥10,000, dinner ¥20,000 (+10%). There is a sister shop in Tokyo Midtown. Closed Monday.",
    chef_bio: { chef_name: '島谷宗宏', roles: ['Executive chef (総料理長, official site; "Munehero Shimatani" on its English page)'], origin: null,
      background: 'Opened 22 May 2012 (Tabelog). The group runs this Kyoto honten and a shop in Tokyo Midtown, Akasaka (official site). A December 2025 reviewer saw young chefs working the counter while the head chef was at the Tokyo shop.',
      philosophy: 'Per the official site: like water that turns from raindrops into a stream, cooking should flow flexibly with the seasons and the people; so as not to forget the season or the guest, the shop deliberately keeps no signature or famous dishes.',
      specialty: 'Monthly kaiseki; okudo-cooked rice.',
      anecdotes: [
        { text: 'A July 2026 guest put the service "among the top-tier hospitality experiences in Kyoto".', source: R + 'B530947742/' },
        { text: 'A May 2026 diner found the cooking intricate but lacking surprise, and did not think the ¥20,000 course was worth it — "It\'s more about the location."', source: R + 'B528487573/' },
        { text: 'A New Year guest found the atmosphere hushed — "not one for a casual, lively gathering" — January 2026.', source: R + 'B524791914/' },
      ],
      japanese_sources_summary: '公式サイト (suiren-group.com): 宮川町 水簾 京都本店、四季を映す本格和食・京料理、京町家を活かした空間、ランチ全9品10,000円・ディナー全12品20,000円 (税込、サービス料10%別)、ご飯は精米したての米を南部鉄羽釜でおくどさんで炊く、1階カウンター10席、2階個室3室、総料理長 島谷宗宏、看板料理や名物料理はあえて用意しない、料理長が選んだ全国の地酒、東山区宮川筋2-253、定休日 月曜日、京阪祇園四条駅1番出口から徒歩3分、東京ミッドタウン店。食べログ: 日本料理、昼 12:00〜15:00 (L.O. 13:30)、夜 18:00〜22:00 (L.O. 20:00)、月曜休み、コースのみ、20席、個室、カード可、禁煙、2012年5月22日オープン。口コミ (2025年11月〜2026年9月、英語): すっぽんの茶碗蒸し、鯖寿司、生ビールのようなコンソメ、鱧カツサンド、だし巻きとご飯のおかわり、もてなし、値段に見合わないという声も。',
      confidence: 'medium', sources: [TB, SITE, KYOTO, EN, R + 'B469683319/', R + 'B508637501/', R + 'B517032452/', R + 'B520328142/', R + 'B524791914/', R + 'B528487573/', R + 'B528972135/', R + 'B530947742/', R + 'B532681592/', R + 'B536746228/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; ask for the counter or a private room; English page on the official site.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区宮川筋2-253',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.001397, 135.771472); cross-checked: GSI 京都府京都市東山区宮川筋二丁目253番地 (lot) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [KYOTO],
    price_note: 'Official site prices with tax, 10% service extra (read 2026-11-05).', last_checked: TODAY, items: [
      it('ランチ 全9品', '', 'Lunch kaiseki, 9 dishes', '¥10,000', 'Courses', 'ask', 'no', '', 'lunch_course'),
      it('ディナー 全12品', '', 'Dinner kaiseki, 12 dishes', '¥20,000', 'Courses', 'ask', 'no', '', 'dinner_course'),
    ] }, {
    cuisine: '宮川町の京町家の京料理。月ごとに変わり、看板料理や名物料理はあえて置かない (公式サイト)・ランチ全9品10,000円、ディナー全12品20,000円 (公式サイト)・南部鉄の羽釜でおくどさんで炊くご飯、だし巻きとちりめん山椒、おかわりも (公式サイト、2025年12月)・2025〜26年の口コミに出る料理: すっぽんの茶碗蒸し、肝ポン酢の平目、鯖寿司の八寸、あさりとかぶの小鍋、生ビールに見立てた夏のコンソメ、鱧カツサンド、にしんとなすのガスパチョ仕立て、雛祭りのちらし寿司の弁当、正月の白味噌の雑煮とミニおせち・料理長が選ぶ全国の地酒 (公式サイト)',
    neighborhood: '南座の裏の宮川町。祇園四条駅から徒歩3分',
    gf_detail: '予約時に要確認。月替わりの会席で、出汁、醤油のたれ、味噌、揚げ物を使う。グルテンの情報はない (公式サイト、2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。会席は魚、貝、出汁と肉料理が中心 (公式サイト、2025〜26年の口コミ)。',
    notes: '[京料理・宮川町、南座の裏] 宮川町の花街の京町家にある京料理の店。1階は厨房とおくどさんを囲む10席のカウンター、2階は個室。料理は月替わりで、生ビールに見立てた夏のコンソメのような遊び心もあり、締めは羽釜のご飯とだし巻き、おかわりも。ランチ10,000円、ディナー20,000円 (サービス料10%別)。姉妹店は東京ミッドタウン。月曜休み。',
  });
}

// ================================================================ グリル小宝
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000009/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://grillkodakara.com/grillkodakara/Home.html';
  const H = day(['11:30', '20:30']);
  put({
    id: 'kyoto_grill_kodakara', name: 'グリル小宝 (Grill Kodakara)', category: 'OMNI',
    lat: 35.015858, lng: 135.784776, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: omurice and hayashi rice come under a demi-glace sauce, and the menu runs to fried shrimp, chicken katsu and crab-cream croquettes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the omurice rice holds beef, every main is meat, egg or seafood, and the sauce is demi-glace (2026 reviews).',
    hours_raw: '11:30–20:30; closed Tuesday and Wednesday (official site; Tabelog). No reservations: queues of 10–50 people form before the 11:30 opening, with waits of 30–60 minutes; orders are taken in the line, so food arrives as soon as you sit; evenings are often easier (2026 reviews). 33 seats at tables, no shared tables (Tabelog; October 2026). Takeaway. Cards, IC cards and QR payments; non-smoking (Tabelog). 3 min from the Dobutsuen-mae or Okazakimichi bus stops; 15 min from Higashiyama Stn (Tabelog).',
    hours: { 0: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Okazaki, north of the zoo and Heian Shrine — 3 min from the Dobutsuen-mae bus stop',
    cuisine: 'Old-school yoshoku, famous for omurice (2026 reviews) · omurice: rice with beef, onion and green peas in a thin omelette under the house demi-glace (called "Dobi sauce"), ¥1,540 in October 2026, the small size already large · hayashi rice, hamburg steak, fried shrimp, chicken katsu, crab-cream croquettes, fried rice with table pickles · tomato juice (2026 reviews)',
    website: SITE, gmaps: gm('グリル小宝 岡崎'), menu_url: null,
    notes: "[Yoshoku · Okazaki, the omurice queue] A retro yoshoku in Okazaki that has drawn queues for decades for one dish: omurice — beefy ketchup rice in a soft omelette drowned in a rich house demi-glace (¥1,540; the small is plenty). Hayashi rice, fried shrimp and crab-cream croquettes are the other favourites. Expect 30–60 minutes in line from before the 11:30 opening; your order is taken while you wait. Closed Tuesday and Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog: the name takes one character from Takarabune, the famous Gion yoshoku restaurant where the previous owner trained. An October 2026 review gives the founding year as 1961. Tabelog Yoshoku "Tabelog 100" 2020, 2022 and Yoshoku WEST 2025.',
      philosophy: null, specialty: 'Omurice with house demi-glace.',
      anecdotes: [
        { text: '"When you ask for water, the staff has a wonderful trick, so be sure to request it!" — October 2026.', source: R + 'B508510196/' },
        { text: 'An October 2026 diner noted the Tabelog menu’s old omurice price of ¥970 against the ¥1,540 paid.', source: R + 'B536779610/' },
        { text: 'About 20 people were ahead and 30–40 behind at opening; many left on seeing the line — October 2026.', source: R + 'B533617231/' },
      ],
      japanese_sources_summary: '公式サイト (grillkodakara.com): グリル小宝、左京区岡崎北御所町46、毎週火曜水曜定休、11:30-20:30。食べログ: 洋食・オムライス、市バス動物園前・岡崎道から徒歩3分、月・木〜日 11:30〜20:30、火・水休み、予約不可、33席 (テーブルのみ)、テイクアウト、カード・電子マネー・QR 可、禁煙、店名は先代が修業した祇園の洋食店 Takarabune の一字から、洋食百名店 2020・2022、洋食 WEST 百名店 2025。口コミ (2026年9〜11月、英語): オムライス1,540円、デミグラスソース、ハヤシライス、エビフライ、カニクリームコロッケ、開店前から行列、並んでいる間に注文、1961年創業。',
      confidence: 'medium', sources: [TB, SITE, R + 'B508510196/', R + 'B533617231/', R + 'B536241102/', R + 'B536779610/', R + 'B537849094/', R + 'B538271637/', R + 'B538321294/', R + 'B538470946/', R + 'B538723780/', R + 'B59507282/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue outside; staff take orders in the line; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区岡崎北御所町46',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through November 2026; Yoshoku WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.015858, 135.784776); cross-checked: GSI 京都府京都市左京区岡崎北御所町46番地 (lot) 74m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536779610/'],
    price_note: 'No current menu read; omurice price from an October 2026 review (Tabelog’s posted menu shows an older ¥970).', last_checked: TODAY, items: [
      it('オムライス', '', 'Omurice with house demi-glace', '¥1,540', 'Rice', 'no', 'no', 'October 2026; small size available.', 'omurice'),
      it('', '', 'Hayashi rice', '', 'Rice', 'no', 'no', '', 'hayashi_rice'),
      it('', '', 'Crab-cream croquettes', '', 'Fried', 'no', 'no', '', 'crab_croquette'),
    ] }, {
    cuisine: '昔ながらの洋食、オムライスで有名 (2026年の口コミ)・オムライス: 牛肉、玉ねぎ、グリーンピースのライスを薄焼き卵で包み、自家製のデミグラス ("Dobi sauce" と呼ばれる) をたっぷり、2026年10月 1,540円、小でも大盛り・ハヤシライス、ハンバーグ、エビフライ、チキンカツ、カニクリームコロッケ、卓上の漬物と食べる焼き飯・トマトジュース (2026年の口コミ)',
    neighborhood: '岡崎、動物園と平安神宮の北。市バス動物園前から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。オムライスとハヤシライスはデミグラスソースで、エビフライ、チキンカツ、カニクリームコロッケなど揚げ物も多い (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。オムライスのライスに牛肉が入り、メインはどれも肉、卵、魚介、ソースはデミグラス (2026年の口コミ)。',
    notes: '[洋食・岡崎、オムライスの行列] 岡崎のレトロな洋食店で、長年オムライスを求める行列が絶えない。牛肉入りのケチャップライスをやわらかい卵で包み、濃厚な自家製デミグラスをたっぷりかける (1,540円、小でも十分)。ハヤシライス、エビフライ、カニクリームコロッケも人気。11時半の開店前から並び、待ちは30〜60分。注文は並んでいる間に。火・水曜休み。',
  });
}

// ================================================================ しろはとベーカリー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26021765/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:00', '18:00']);
  put({
    id: 'kyoto_shirohato_bakery', name: 'しろはとベーカリー (Shirohato Bakery)', category: 'OMNI',
    lat: 35.012346, lng: 135.760049, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery — whole-wheat loaves, French bread, cream buns, bagels (some with brown rice) (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Plain loaves such as the 100% whole-wheat bread and brown-rice bagels may suit, but the cream buns use custard and other breads carry butter, cheese or meat; no ingredient list is published (2026 reviews).',
    hours_raw: '10:00–18:00, Tuesday to Saturday; closed Sunday and Monday; hours may change (Tabelog). Takeaway only, no eat-in (Tabelog). Reservations possible (Tabelog). Popular items sell out by afternoon: in September 2026 a door notice at 17:00 said little stock was left (2026 reviews). Cash or PayPay; no cards (Tabelog). Ground floor of ヴィラート押小路, 3 min from Karasuma Oike Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji, north of Karasuma Oike — 3 min from Karasuma Oike Stn',
    cuisine: 'Small neighbourhood bakery of simple, low-priced breads, most around ¥200 (2026 reviews) · cream bun with homemade custard ¥170, the best seller; chocolate cream bun ¥190; anpan ¥190; rye anpan ¥190 · 100% whole-wheat bread, plain and with figs; brown-rice bread; bagels with 20% brown rice, brown-rice cheese bagel, shiso-and-pastrami bagel ¥210 · umashio butter French bread ¥190 (2026 reviews)',
    website: null, gmaps: gm('しろはとベーカリー 京都'), menu_url: null,
    notes: "[Bakery · Karasuma Oike, ¥200 breads] A tiny bakery with a white-dove sign near Karasuma Oike, opened in 2013, known for nostalgic, cheap breads: a soft cream bun with homemade custard (¥170) that reviewers call the best around, anpan, and healthier loaves — 100% whole-wheat bread, brown-rice bagels. Takeaway only; things sell out by late afternoon. Pay cash or PayPay. Closed Sunday and Monday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 22 January 2013 (Tabelog). Tabelog Bread WEST "Tabelog 100" 2020, 2022, 2026.',
      philosophy: null, specialty: 'Cream bun; whole-wheat and brown-rice breads.',
      anecdotes: [
        { text: 'At 17:00 a note on the door read, in effect, "Limited stock available. Please come in if that\'s okay with you"; the reviewer remembered "the kind smile of the elderly lady who served me" — September 2026.', source: R + 'B535453979/' },
        { text: 'The shiso-and-pastrami bagel and rye anpan had just come out of the oven at 11:40 — October 2026.', source: R + 'B528587517/' },
        { text: 'An October 2026 reviewer scored the service "nothing special, neither good nor bad" and found most items sold out by 14:00.', source: R + 'B537604845/' },
      ],
      japanese_sources_summary: '食べログ: しろはとベーカリー、パン・ベーグル・サンドイッチ、中京区西押小路町102-2 ヴィラート押小路 1F、烏丸御池駅から徒歩3分、火〜土 10:00〜18:00、日・月休み、予約可、イートインなし、カード・電子マネー不可、PayPay 可、禁煙、2013年1月22日オープン、パン WEST 百名店 2020・2022・2026。口コミ (2026年8〜10月、英語): クリームパン170円 (自家製カスタード)、チョコクリームパン190円、あんぱん190円、全粒粉100%の食パン、いちじくパン、玄米入りベーグル、しそとパストラミのベーグル210円、Umashio butter French bread 190円、夕方には売り切れ。',
      confidence: 'medium', sources: [TB, R + 'B528587517/', R + 'B534314796/', R + 'B535453979/', R + 'B535587317/', R + 'B536305635/', R + 'B537604845/', R + 'B537777159/', R + 'B537878262/', R + 'B538084165/', R + 'B538407837/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter bakery; PayPay or cash; go before afternoon.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西押小路町102-2 ヴィラート押小路 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Bread WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.012346, 135.760049); cross-checked: GSI 京都府京都市中京区西押小路町102番地 (lot) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536305635/', R + 'B534314796/', R + 'B528587517/', R + 'B537604845/'],
    price_note: 'No price list read; prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('クリームパン', '', 'Cream bun (homemade custard)', '¥170', 'Sweet breads', 'no', 'no', 'September 2026.', 'cream_bun'),
      it('', '', 'Anpan', '¥190', 'Sweet breads', 'no', 'ask', 'August 2026.', 'anpan'),
      it('', '', 'Shiso and pastrami bagel', '¥210', 'Bagels', 'no', 'no', 'October 2026.', 'shiso_pastrami_bagel'),
      it('', '', 'Umashio butter French bread', '¥190', 'Bread', 'no', 'no', 'October 2026.', 'umashio_butter_france'),
      it('', '', '100% whole-wheat bread', '', 'Bread', 'no', 'ask', 'September 2026.', 'whole_wheat_bread'),
    ] }, {
    cuisine: '素朴で手頃なパンの小さな町のパン屋、ほとんどが200円前後 (2026年の口コミ)・一番人気の自家製カスタードのクリームパン170円、チョコクリームパン190円、あんぱん190円、ライ麦のあんぱん190円・全粒粉100%の食パン (プレーン、いちじく)、玄米パン、玄米20%のベーグル、玄米チーズベーグル、しそとパストラミのベーグル210円・Umashio butter French bread 190円 (2026年の口コミ)',
    neighborhood: '烏丸御池の北、押小路。烏丸御池駅から徒歩3分',
    gf_detail: 'グルテンフリーではない。小麦のパン屋で、全粒粉の食パン、フランスパン、クリームパン、ベーグル (玄米入りも) (2026年の口コミ)。',
    vegan_detail: '要確認。全粒粉100%の食パンや玄米のベーグルなどシンプルなパンは合うかもしれないが、クリームパンはカスタード、ほかのパンにはバター、チーズ、肉も入る。原材料の一覧は公開されていない (2026年の口コミ)。',
    notes: '[パン・烏丸御池、200円のパン] 烏丸御池近くの白い鳩の看板の小さなパン屋で、2013年開店。懐かしくて安いパンで知られ、自家製カスタードのやわらかいクリームパン (170円) はこのあたりで一番という声も。あんぱん、全粒粉100%の食パンや玄米のベーグルなど体にやさしいパンも。持ち帰りのみで、夕方には売り切れる。支払いは現金か PayPay。日・月曜休み。',
  });
}

save();
