// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 19.
//   + なにわ料理 ごとく Naniwa Ryori Gotoku (father-and-son kappo with ¥1,000 tray lunches, Fukushima 6-chome)
//   + 鶏割烹 ならや Tori Kappou Naraya (Yamato Nikudori chicken kappo with Nara sake, Kitashinchi)
//   + 沖濱そば Okihama Soba (Okinawa soba specialist, Fukushima 6-chome; no ramen block, see below)
//   + 弘屋 Koya (eight-seat creative French wine bar since 2002, Kitashinchi side of 堂島; Tabelog French WEST 100)
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b18): first odd ids 27112939, 27107513,
//   27068211, 27010835. None is in data/osaka.json (grep by id, name and address, 2026-11-02).
//   Chain check: web search found no group for Naraya (its 2018 "はなれ" merged into the main shop); Gotoku, Okihama and
//   Koya show no other shop. Gotoku and Okihama Soba share the street address 福島6-20-19 (Okihama in コーポ盛乃 1F);
//   their Tabelog points are about 8 m apart and both GSI matches are go-level, so neither pin is stacked.
//   Okihama Soba is Okinawa soba served as noodle soup, so cuisine_type ramen; the sources describe the broth (light,
//   bonito and kombu) but nothing on oiliness, clarity or noodle firmness, so the ramen block is left off.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('osaka-kita', TODAY, 'osw6-19');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ なにわ料理 ごとく
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27112939/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:45', '22:00']);
  put({
    id: 'osaka_naniwa_ryori_gotoku', name: 'なにわ料理 ごとく (Naniwa Ryori Gotoku)', category: 'OMNI',
    lat: 34.701391, lng: 135.488595, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lunch trays include tempura and kakiage, marinated tuna and miso soup; dinner is creative Japanese with dashi and soy seasoning.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, tempura, dashi-based dishes.',
    hours_raw: 'Mon–Sat and holidays 11:30–14:00 (last order 13:45) and 17:45–22:00 (last order 21:30); closed Sundays and some holidays; closing times may vary (Tabelog). A June 2025 diner wrote that the shop stays open until 2:30 am; Tabelog gives 22:00. Lunch may end early once the last regulars leave (June 2025). Cash only: no cards or e-money (Tabelog). 17 seats: 6 at the counter, two tables for 4 and three semi-private sunken-seat rooms; non-smoking (Tabelog). About 20 sakes; menus can be tailored if booked ahead (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Fukushima 6-chome — 10 min from JR Fukushima Stn',
    cuisine: 'Seasonal creative Japanese (Naniwa-ryori) with daily specials, omakase courses and about 20 sakes; menus tailored on advance booking (Tabelog) · lunch trays: Maru ¥1,000 and Kaku ¥1,300 with extra tempura and dessert (November 2025); small dishes such as marinated tuna, shrimp tempura and kakiage salted rather than dipped, grilled fish or salmon, tamagoyaki, kinpira, simmered taro or pumpkin, miso soup with a hint of sansho, rice refills, rice pudding or ice cream (2024–2026) · dinner (June 2025): thick-cut katsuo tataki from Kochi, aji wrapped round potato salad and baked, Tokushima hamo fried with green onion and pickled ginger rolled inside; sakes such as Warashiki and Aozora; regular sake events',
    website: null, gmaps: gm('なにわ料理 ごとく 福島'), menu_url: null,
    notes: "[Japanese · Fukushima, tray lunches and sake by night] A seventeen-seat kappo near JR Fukushima, run by a father and son, the chef having trained for years at Japanese restaurants in Nishitenma (June 2025). Lunch is the local secret: a ¥1,000 or ¥1,300 tray of small dishes, marinated tuna, freshly fried kakiage eaten with salt, tamagoyaki, grilled fish and a miso soup scented with sansho, with rice refills and a dessert, at prices unchanged for years. By night it turns to creative washoku and about twenty sakes, like thick Kochi katsuo tataki or hamo fried with ginger. Cash only; lunch fills up; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed) and the chef\'s father or son (June 2025)'], origin: null, background: 'A June 2025 diner: "The restaurant is run by a father-son duo, with the chef having years of experience in washoku establishments in Nishitenma." Shop text (Tabelog): seasonal dishes in a warm atmosphere; authentic creative Japanese cuisine with daily specials, omakase courses and two lunch menus; menus tailored on advance booking; about 20 sakes.', philosophy: null, specialty: 'Kaku tray lunch; katsuo tataki.',
      anecdotes: [
        { text: '"The tempura was served hot and fresh, seasoned with salt instead of dipping sauce, and the kakiage was crispy and delicious." — September 2025, a visitor to the Osaka Expo.', source: R + 'B517916151/' },
        { text: '"The miso soup is delicious with a hint of sansho pepper." — May 2026.', source: R + 'B518961290/' },
        { text: '"You can also opt for a large serving of rice, and the prices have remained unchanged for many years." — April 2026.', source: R + 'B518961290/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B431728768/', R + 'B507870090/', R + 'B508323020/', R + 'B517424774/', R + 'B517916151/', R + 'B518961290/', R + 'B524069348/', R + 'B524505457/', R + 'B526621579/', R + 'B526736393/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Warm hospitality from the chef (June 2025). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-20-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目20番19号 (go) 9m; same street address as osaka_okihama_soba (8 m apart); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B517424774/'],
    price_note: 'Lunch prices from November 2025 and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Maru tray lunch', '¥1,000', 'Lunch', 'no', 'no', 'November 2025 review; 2026 reviews.', 'maru_tray'),
      it('', '', 'Kaku tray lunch, with extra tempura and dessert', '¥1,300', 'Lunch', 'no', 'no', 'November 2025 and May 2026 reviews.', 'kaku_tray'),
    ] }, {
    cuisine: '日替わり、おまかせのコース、日本酒20種ほどの季節の創作和食 (なにわ料理)、予約すれば好みに合わせる (食べログ)・昼のお盆: 丸1,000円、天ぷらとデザートが増える角1,300円 (2025年11月)、まぐろの漬け、海老の天ぷら、塩で食べるかき揚げ、焼き魚や鮭、卵焼き、きんぴら、里芋やかぼちゃの煮物、山椒の香る味噌汁、ご飯のおかわり、ライスプディングかアイス (2024〜2026年)・夜 (2025年6月): 高知の厚切りのカツオのたたき、ポテトサラダをアジで巻いて焼いたもの、徳島の鱧にねぎとガリを巻いた揚げ物、Warashiki や Aozora などの日本酒、日本酒の会も',
    neighborhood: '福島6丁目。JR福島駅から徒歩10分',
    gf_detail: '要確認。グルテンの情報なし。昼のお盆には天ぷらやかき揚げ、まぐろの漬け、味噌汁があり、夜はだしと醤油の創作和食。',
    vegan_detail: 'ヴィーガンではありません。魚、天ぷら、だしの料理。',
    notes: '[和食・福島、昼のお盆と夜の日本酒] JR福島駅の近くにある17席の割烹で、父と息子で営み、料理人はNishitenma の和食店で長く経験を積んだ (2025年6月)。地元の人の楽しみは昼で、1,000円か1,300円のお盆に小鉢がずらり、まぐろの漬け、揚げたてのかき揚げを塩で、卵焼き、焼き魚、山椒の香る味噌汁、ご飯はおかわりでデザートつき、値段は何年も変わらない。夜は創作和食と日本酒20種ほどで、高知の厚いカツオのたたきや鱧のガリ巻き揚げなど。現金のみ、昼は混む、日曜休み。',
  });
}

// ================================================================ 鶏割烹 ならや
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27107513/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'osaka_tori_kappou_naraya', name: '鶏割烹 ならや (Tori Kappou Naraya)', category: 'OMNI',
    lat: 34.69706, lng: 135.500124, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include soba, chawanmushi, chicken broth soup, clay-pot rice and tare skewers; write allergies in the booking request (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken and duck kappo; cabbage skewers à la carte.',
    hours_raw: 'Mon–Sat 17:00–23:30 (last order 22:30); closed Sundays, holidays, New Year, Obon and Golden Week; seating may be limited to about 2.5 hours and the shop may close around 23:00 (Tabelog). Courses need advance booking; write allergies or dislikes in the request; private rooms by phone; phones may go unanswered after 17:00 when busy (Tabelog). Service charge 3% (Tabelog). No minors (Tabelog). Opened October 29, 2018 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 20 seats: 8 at the counter, a table for 4, private rooms for 6–8; heated tobacco only, in a designated area (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi, 新日本新地ビル本館 3F — 5 min from Kitashinchi Stn',
    cuisine: 'Chicken kappo of Nara\'s local Yamato Nikudori chicken and Yamato Gamo duck, with sake from Nara (Tabelog) · courses (Tabelog, tax included): omakase seasonal course ¥9,800; the upper version ¥12,000 (2 hours or more); chicken shabu-shabu course ¥8,400 · a Saturday-only yakitori course ¥6,600: appetizers, mozuku soup, chicken sashimi, seven skewers, tsukune with lotus root, clay-pot rice, miso soup (May 2026) · in the seasonal course: chicken and sea urchin hand roll, chawanmushi, soba, chicken rice (June–July 2026) · à la carte: gizzard, heart, obi, skin, bonjiri, negima, duck sashimi, tataki, grilled cabbage skewers, oyakodon, clay-pot rice of chicken, corn and shiso, which can be taken home (2026) · Nara sake; Aka boshi beer (2026)',
    website: null, gmaps: gm('鶏割烹 ならや 北新地'), menu_url: null,
    notes: "[Yakitori · Kitashinchi, Nara chicken kappo] A twenty-seat chicken kappo on a third floor in Kitashinchi, open since 2018, built around Nara's Yamato Nikudori chicken and Yamato Gamo duck with sake from Nara. The ¥9,800 seasonal course goes well beyond skewers: chicken sashimi, a chicken-and-uni hand roll, chawanmushi rich with chicken broth, soba and clay-pot rice; a Saturday-only yakitori course is ¥6,600, and à la carte works too. Diners single out the clay-pot rice (you can take the rest home), the oyakodon and the grilled cabbage skewers. Calm counter, private rooms for business dinners; 3% service; no minors.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed)'], origin: null, background: 'Shop text (Tabelog): chicken kaiseki featuring local Yamato Nikudori chicken and Yamato Gamo duck, with sake from Nara, "the birthplace of sake"; the master chef\'s skill; a calm, high-quality space. Opened October 29, 2018.', philosophy: 'Bringing out the appeal of Yamato chicken (Tabelog).', specialty: 'Yamato Nikudori courses; clay-pot rice.',
      anecdotes: [
        { text: '"This place is more than just a yakitori restaurant; it truly embodies the essence of a chicken kappou, as the name suggests." — June 2026.', source: R + 'B532292882/' },
        { text: '"the grilled cabbage skewers were so good that we ordered them twice! We were also able to take home the clay pot rice as a souvenir" — June 2026.', source: R + 'B530820716/' },
        { text: '"I was pleasantly surprised by the soba, which had a wonderful aroma and taste." — July 2026.', source: R + 'B532799777/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B519567354/', R + 'B528304387/', R + 'B529167928/', R + 'B530820716/', R + 'B531447628/', R + 'B532292882/', R + 'B532799777/', R + 'B534633378/', R + 'B535649973/', R + 'B535684954/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Attentive staff; counter and private rooms (2026). No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Asks guests to write allergies or dislikes in the booking request (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-7-8 新日本新地ビル本館 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目7番8号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B528304387/'],
    price_note: 'Courses from the Tabelog listing (tax included); the Saturday course from a May 2026 review; 3% service charge.', last_checked: TODAY, items: [
      it('', '', 'Omakase seasonal course, 10 items', '¥9,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'seasonal_course'),
      it('', '', 'Omakase seasonal course, upper', '¥12,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'seasonal_upper'),
      it('', '', 'Chicken shabu-shabu course, 8 items', '¥8,400', 'Course', 'ask', 'no', 'Tabelog listing.', 'shabu_course'),
      it('', '', 'Saturday-only yakitori course', '¥6,600', 'Course', 'ask', 'no', 'May 2026 reviews.', 'saturday_course'),
    ] }, {
    cuisine: '奈良の地鶏 Yamato Nikudori と Yamato Gamo の鴨、奈良の日本酒の鶏割烹 (食べログ)・コース (食べログ、税込): おまかせ季節のコース9,800円、上12,000円 (2時間以上)、鶏しゃぶのコース8,400円・土曜限定の焼き鳥コース6,600円: 前菜、もずくのスープ、鶏の刺身、串7本、れんこんのつくね、土鍋ご飯、味噌汁 (2026年5月)・季節のコースには鶏とウニの手巻き、茶碗蒸し、そば、鶏ご飯 (2026年6〜7月)・単品: 砂肝、ハツ、おび、皮、ぼんじり、ねぎま、鴨の刺身、たたき、キャベツの串、親子丼、鶏ととうもろこしとしその土鍋ご飯 (持ち帰りもできる) (2026年)・奈良の日本酒、Aka boshi (2026年)',
    neighborhood: '北新地、新日本新地ビル本館 3階。北新地駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。コースにはそば、茶碗蒸し、鶏スープ、土鍋ご飯、たれの串がある。アレルギーは予約のリクエスト欄に (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。鶏と鴨の割烹で、単品のキャベツの串がある。',
    notes: '[焼き鳥・北新地、奈良の鶏の割烹] 北新地のビルの3階にある20席の鶏割烹で、2018年から。奈良の Yamato Nikudori と Yamato Gamo の鴨、奈良の日本酒が軸。9,800円の季節のコースは串にとどまらず、鶏の刺身、鶏とウニの手巻き、鶏だしの濃い茶碗蒸し、そば、土鍋ご飯まで。土曜限定の焼き鳥コースは6,600円、単品でも頼める。土鍋ご飯 (残りは持ち帰れる)、親子丼、キャベツの串が好評。落ち着いたカウンターと接待向きの個室、サービス料3%、未成年は入れない。',
  });
}

// ================================================================ 沖濱そば
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27068211/'; const R = TB + 'dtlrvwlst/';
  const L = day(['11:30', '14:00']), LD = day(['11:30', '14:00'], ['18:00', '20:30']);
  put({
    id: 'osaka_okihama_soba', name: '沖濱そば (Okihama Soba)', category: 'OMNI',
    lat: 34.701323, lng: 135.488566, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Okinawa soba noodles are wheat, shipped from Okinawa (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: bonito and kombu broth (pork bone too, per a May 2026 diner), pork toppings.',
    hours_raw: 'Mon, Thu, Fri, Sat 11:30–14:00; Tue and Wed 11:30–14:00 and 18:00–20:30; closed Sundays and holidays; irregular closures posted on Instagram (Tabelog). No reservations; queue outside at lunch until called (2026 reviews). Jushi can sell out after 13:00 (May 2026). Opened September 28, 2012 (Tabelog). Cash or PayPay; no cards or e-money (Tabelog). 16 seats: 7 at the counter and two tables for 4–6; non-smoking; children and strollers welcome (Tabelog).',
    hours: { 0: L, 1: LD, 2: LD, 3: L, 4: L, 5: L }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Fukushima 6-chome, at the back of the ground floor of an apartment building (コーポ盛乃) — 10 min from JR Fukushima Stn',
    cuisine: 'Okinawa soba specialist: light, rich broth of kombu and katsuobushi, pork simmered for a long time, noodles shipped from Okinawa (Tabelog) · bowls: sanmai niku soba, soki soba, pota-tama soba with Spam and thin omelette, Okinawan aasa (sea lettuce) soba (Tabelog); mozuku soba; abura-kasu topping; half soki, half sanmai niku (2026) · soki soba ¥1,000 (May 2026) or ¥1,050 (October 2026); sanmai niku soba ¥980 (July 2026); large noodles +¥200, extra large +¥400 (2026) · jushi (Okinawan mixed rice), meat-miso rice as lunch sides (2026) · sanpin tea (2026)',
    website: 'https://freeee.theshop.jp', gmaps: gm('沖濱そば 福島'), menu_url: null,
    notes: "[Ramen · Fukushima, Okinawa soba tucked in an apartment block] A sixteen-seat Okinawa soba shop at the back of an apartment building's ground floor in Fukushima, open since 2012, that an Okinawan friend sent one diner to for the soki soba. The broth is light kombu and bonito, the noodles come from Okinawa, and the soki spare ribs and sanmai belly are braised until they melt; mozuku, aasa seaweed and Spam-and-egg bowls too, from about ¥1,000. Order jushi, the Okinawan mixed rice, before it sells out after one. Expect a short queue at lunch; dinner only Tuesday and Wednesday. Cash or PayPay; sanpin tea poured.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null, background: 'Shop text (Tabelog): an authentic Okinawa soba specialty shop in Fukushima; classic sanmai niku soba and soki soba, plus pota-tama soba and Okinawa-produced aasa soba; broth of kombu and katsuobushi with long-simmered pork, and noodles shipped directly from Okinawa. Opened September 28, 2012.', philosophy: null, specialty: 'Soki soba; jushi.',
      anecdotes: [
        { text: '"The spare ribs in the Soki Soba were so tender that I wondered if they had any cartilage left." — June 2026.', source: R + 'B415488855/' },
        { text: '"The Jushi was even better than what I had previously eaten in Okinawa." — May 2026.', source: R + 'B529657987/' },
        { text: '"The noodles had a light flavor with a gentle aroma of dashi (broth)." — September 2026.', source: R + 'B535743087/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B415488855/', R + 'B449943038/', R + 'B529622682/', R + 'B529657987/', R + 'B530333384/', R + 'B530971180/', R + 'B531356250/', R + 'B533742662/', R + 'B534935046/', R + 'B535743087/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Wait outside until called; quick service (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-20-19 コーポ盛乃 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目20番19号 (go) 2m; same street address as osaka_naniwa_ryori_gotoku (8 m apart); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B529622682/', R + 'B533742662/'],
    price_note: 'Prices from 2026 reviews; soki soba ¥1,000 (May) and ¥1,050 (October).', last_checked: TODAY, items: [
      it('', '', 'Soki soba', '¥1,050', 'Okinawa soba', 'no', 'no', 'October 2026 review; ¥1,000 in May 2026.', 'soki_soba'),
      it('', '', 'Sanmai niku soba', '¥980', 'Okinawa soba', 'no', 'no', 'July 2026 review.', 'sanmai_soba'),
      it('', '', 'Large noodles', '+¥200', 'Options', 'no', 'no', 'July 2026 review.', 'large'),
      it('', '', 'Extra-large noodles', '+¥400', 'Options', 'no', 'no', 'October 2026 review.', 'extra_large'),
    ] }, {
    cuisine: '沖縄そばの専門店: 昆布とかつお節のあっさりして深いスープ、長く煮込んだ豚、沖縄から直送の麺 (食べログ)・三枚肉そば、ソーキそば、ポークと薄焼き卵のポーたまそば、沖縄産のアーサそば (食べログ)、もずくそば、油かすのトッピング、ソーキと三枚肉のハーフ (2026年)・ソーキそば1,000円 (2026年5月) か1,050円 (2026年10月)、三枚肉そば980円 (2026年7月)、大盛り+200円、特盛り+400円 (2026年)・昼のサイドにジューシー (沖縄の炊き込みご飯) や肉味噌ご飯 (2026年)・さんぴん茶 (2026年)',
    neighborhood: '福島6丁目、マンション (コーポ盛乃) の1階の奥。JR福島駅から徒歩10分',
    gf_detail: 'グルテンフリーではありません。沖縄から直送の沖縄そばの麺は小麦 (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。かつお節と昆布のスープ (豚骨も、という2026年5月の声)、豚のトッピング。',
    notes: '[ラーメン・福島、マンションの奥の沖縄そば] 福島のマンションの1階の奥にある16席の沖縄そばの店で、2012年から。沖縄出身の友人にソーキそばをすすめられて来たという人も。スープは昆布とかつお節のあっさり味、麺は沖縄から、ソーキと三枚肉はとろけるまで煮込む。もずく、アーサ、ポークと卵のそばもあり、1,000円ほどから。沖縄の炊き込みご飯ジューシーは13時を過ぎると売り切れることも。昼は少し並ぶ。夜は火・水曜のみ。現金か PayPay、さんぴん茶が出る。',
  });
}

// ================================================================ 弘屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27010835/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_koya_kitashinchi', name: '弘屋 (Koya)', category: 'OMNI',
    lat: 34.696412, lng: 135.498475, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses have included gougères, a corned-beef sandwich, a venison cutlet, a tart and pasta; tell the shop your preferences (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of foie gras, caviar, seafood and Omi beef.',
    hours_raw: 'Mon–Sat 17:00–23:00; closed Sundays and holidays (Tabelog). Short courses from 20:30 (Tabelog). Cancellations for parties of 3 or more at least three days ahead (Tabelog). Drinks are wine and beer only (September 2026). Opened March 3, 2002 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 seats at an L-shaped counter; non-smoking (Tabelog; 2026). Tabelog French WEST 100 in 2023 and 2025.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitashinchi side of 堂島, 二葉ビル 3F — 5 min from Kitashinchi Stn',
    cuisine: 'Creative French course cooking with a large wine list; the chef\'s special course of long-fed Omi beef from Okazaki Farm (Tabelog) · omakase (Tabelog, tax included): about 10 dishes ¥19,800; short course of about 8 dishes from 20:30 ¥15,400, or ¥17,600 with Okazaki Farm wagyu; portion sizes, wines and pairings on request · an April 2026 course: white-miso potage with tomato and basil, white-asparagus bavarois, homemade Okazaki Farm corned beef on rye, gougères, beni haruka with foie gras, loquat and burrata caprese with timut pepper, sakura-shrimp rice with caviar, Ofunato fried oysters with island-garlic ice cream, Loire white asparagus with escargot butter, wild-boar hot pot with mountain vegetables, sirloin of 49-month-fed Okazaki Farm cattle, blueberry tart · an October 2026 course: scallops with escargot butter, tuna yukhoe with white truffle, persimmon and mozzarella caprese, Tsushima katsuo ceviche, caviar with water chestnut, foie gras with blue cheese, a venison cutlet · rice with caviar, matsutake and ginkgo rice, pasta to finish (2026)',
    website: 'http://ko-ya.com/index.php', gmaps: gm('弘屋 北新地 二葉ビル'), menu_url: null,
    notes: "[French · Kitashinchi, an eight-seat wine-bar counter] An eight-seat L-shaped counter on a third floor in Kitashinchi, running since 2002 and on Tabelog's French WEST 100, that calls itself a wine bar but serves an omakase of creative French dishes with Japanese touches: corned beef from Okazaki Farm, caviar-topped rice, foie gras in unexpected pairings, and sirloin from cattle fed for 49 months. About ten dishes cost ¥19,800, a later short course ¥15,400, and the drinks are wine and beer only, with regulars opening grand Bordeaux. Diners love the owner's easy explanations and the relaxed counter; one found the food over-intricate and the room hot in May.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null, background: 'Shop text (Tabelog): a hidden gem for adults near Kitashinchi Station; creative French courses that highlight natural flavours with simple yet refined dishes; the chef\'s special course of long-fed Omi beef; an extensive wine list; a relaxed, homey atmosphere with a comfortable distance from the owner. Opened March 3, 2002. The official site calls it a wine bar in Kitashinchi.', philosophy: null, specialty: 'Omakase with Okazaki Farm Omi beef; wine.',
      anecdotes: [
        { text: '"It\'s perfectly fine whether you talk to other guests or not—there\'s absolutely no discomfort." — August 2023.', source: R + 'B467195860/' },
        { text: '"Although it is a top-tier French restaurant, the atmosphere is relaxed, featuring only counter seating that makes it feel welcoming." — September 2026.', source: R + 'B536234042/' },
        { text: '"The creative French dishes felt a bit too experimental." — May 2026.', source: R + 'B202920464/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, 'http://ko-ya.com/index.php', R + 'B202920464/', R + 'B467195860/', R + 'B499879116/', R + 'B527196079/', R + 'B531396979/', R + 'B532220012/', R + 'B536234042/', R + 'B537164989/', R + 'B537711009/', R + 'B538506538/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter with each dish explained (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-1 二葉ビル 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 60m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Omakase course, about 10 dishes', '¥19,800', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase'),
      it('', '', 'Omakase short course, about 8 dishes, from 20:30', '¥15,400', 'Course', 'ask', 'no', 'Tabelog listing.', 'short'),
      it('', '', 'Omakase short course with Okazaki Farm long-fed wagyu, from 20:30', '¥17,600', 'Course', 'ask', 'no', 'Tabelog listing.', 'short_wagyu'),
    ] }, {
    cuisine: 'ワインの品ぞろえが豊富な創作フレンチのコース、Okazaki Farm の長期肥育のOmi 牛のシェフの特別コース (食べログ)・おまかせ (食べログ、税込): 10品ほど19,800円、20時30分からの8品ほどのショートコース15,400円、Okazaki Farm の和牛つきで17,600円、量やワイン、ペアリングは相談できる・2026年4月のコース: トマトとバジルの白味噌のポタージュ、ホワイトアスパラのババロア、Okazaki Farm の自家製コンビーフとライ麦パン、グジェール、Beni Haruka とフォアグラ、びわとブッラータとティムットペッパーのカプレーゼ、桜海老とキャビアのご飯、Ofunato の牡蠣フライと島にんにくのアイス、ロワールのホワイトアスパラのエスカルゴバター、猪と山菜の鍋、49か月肥育の Okazaki Farm のサーロイン、ブルーベリーのタルト・2026年10月のコース: ホタテのエスカルゴバター、白トリュフのマグロのユッケ、柿とモッツァレラのカプレーゼ、Tsushima のカツオのセビーチェ、キャビアとくわい、フォアグラとブルーチーズ、鹿のカツレツ・キャビアのご飯、松茸と銀杏のご飯、締めのパスタ (2026年)',
    neighborhood: '堂島の北新地寄り、二葉ビル 3階。北新地駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。コースにはグジェール、コンビーフのサンド、鹿のカツレツ、タルト、パスタが出たことがある。好みは相談できる (食べログ)。',
    vegan_detail: 'ヴィーガンではありません。フォアグラ、キャビア、魚介、Omi 牛のコース。',
    notes: '[フレンチ・北新地、8席のワインバーのカウンター] 北新地のビルの3階にあるL字の8席のカウンターで、2002年から。食べログのフレンチ WEST 百名店。ワインバーを名乗るが、出すのは和の要素を入れた創作フレンチのおまかせ: Okazaki Farm のコンビーフ、キャビアをのせたご飯、意外な組み合わせのフォアグラ、49か月肥育の牛のサーロイン。10品ほどで19,800円、遅い時間のショートコースは15,400円、飲み物はワインとビールのみで、常連はボルドーの銘酒を開ける。店主の気さくな説明とくつろげるカウンターが好評で、凝りすぎ、5月は店が暑かったという声も。',
  });
}

save();
