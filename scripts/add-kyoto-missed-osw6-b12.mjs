// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 12.
//   + 京辛麺 KYO-KARA 木屋町店 Kyokara Men KYO-KARA Kiyamachi (spicy-noodle bar open until 6:00, Kawaramachi Rokkaku)
//   + 貴久政 Kikuma (10-seat Gion kappo; ¥2,500 lunch set, à la carte at night)
//   + グリル デミ GRILL DEMI (tongue-stew hamburg steak near Marutamachi; Yoshoku WEST Tabelog 100 2025)
//   + epice (vegetable-led French in a Demachiyanagi townhouse, with yoshoku on Sun–Tue)
//   - skip 26005852 鶏がららーめん 門扇 ぎおん本店, 26031208 瓢斗 京都駅前本店, 26024464 RIGOLETTO SMOKE GRILL & BAR
//   Same-name counts first (coordinator, 2026-11-05): 門扇 — a Monsen shop is already in data; 瓢斗 — 7 shops on hyoto.jp;
//   RIGOLETTO — 5 Rigoletto restaurants on huge.co.jp. KYO-KARA: a June 2026 review mentions a sister restaurant; no count of 5+ found, so drafted. 貴久政, グリル デミ
//   and epice are single shops.
//   Taken on 2026-11-05: `next core 200` gave 門扇 (skipped), KYO-KARA 26030548, 貴久政 26000590; `next notable 200` gave
//   グリル デミ 26002516, 瓢斗 (skipped), RIGOLETTO (skipped), epice 26005078.
//   None of the four is in data/kyoto.json: grep by name (KYO-KARA/京辛麺, 貴久政/Kikuma, グリル デミ/GRILL DEMI, epice/エピス)
//   and address (山崎町258, 末吉町78, 巴町80/パルマビル, 真如堂前町105) found none.
//   Ramen block: KYO-KARA is ramen-genre, but the sources describe only spice level, noodle and topping choices — not
//   all six profile dimensions — so the ramen block is left off (lesson of 2026-11-01).
//   No shop asks diners not to post it; no remarks on anyone's looks are recorded (one hygiene remark about the chef's
//   hair at epice is summarised as a kitchen-hygiene criticism without the appearance detail).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26005852', 'same-concept branch of a brand already in data: らーめん門扇 伏水酒蔵店 (Ramen Monsen Fushimi Sakagura-ten) is in data/kyoto.json.');
skip('26031208', 'chain: 瓢斗 lists 7 shops on its official site hyoto.jp (京都駅前本店, 四条烏丸店, 渋谷店, 新橋店, 品川店, 梅田店, 横浜店). Group of 5+ = chain.');
skip('26024464', 'chain (same-name rule, Greg 2026-11-05): RIGOLETTO is a brand of 株式会社HUGE, whose site lists 5 Rigoletto restaurants (Cafe RIGOLETTO 吉祥寺, RIGOLETTO KITCHEN 銀座, RIGOLETTO ROTISSERIE AND WINE スカイツリー, RIGOLETTO TAPAS LOUNGE 仙台, RIGOLETTO SMOKE GRILL & BAR 京都) among 14 brands.');

// ================================================================ 京辛麺 KYO-KARA 木屋町店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26030548/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['18:00', '24:00']); const WK = day(['00:00', '06:00'], ['18:00', '24:00']); const WE = day(['00:00', '06:00'], ['12:00', '15:00'], ['17:00', '24:00']);
  put({
    id: 'kyoto_kyokara_kiyamachi', name: '京辛麺 KYO-KARA 木屋町店 (Kyokara Men KYO-KARA Kiyamachi)', category: 'OMNI',
    lat: 35.007462, lng: 135.769843, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the noodles are Chinese wheat noodles by default; konjac noodles can be chosen, but the soup, gyoza and fried rice are not described as wheat-free (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the spicy noodle soup is egg-thickened, and the sides are gyoza, cartilage and fried rice (2026 reviews).',
    hours_raw: 'Monday 18:00–24:00; Tuesday–Friday 0:00–6:00 and 18:00–24:00; Saturday and Sunday 0:00–6:00, 12:00–15:00 and 17:00–24:00 — in effect evenings through to 6:00 the next morning, with weekend lunch (Tabelog). Reservations accepted (Tabelog); a queue can form before opening (July 2026); full at 3:00 on a September 2026 night. 19 counter seats, dim; non-smoking with ashtrays outside; cards, IC cards, iD, QUICPay, PayPay and other QR (Tabelog). Also on Uber Eats (August 2026). On Rokkaku east of Kawaramachi; 4 min from Sanjo Stn Exit 6 (Tabelog).',
    hours: { 0: MON, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Rokkaku east of Kawaramachi — 4 min from Sanjo Stn',
    cuisine: 'Late-night spicy-noodle bar with drinks (2026 reviews) · Kyokara Men: an egg-thickened spicy soup with a spice level you choose — level 5 is said to be about Shin Ramyun’s heat, regulars go to 20–35 — Chinese or konjac noodles, garlic to taste, toppings such as cilantro and a soft-boiled egg; mega size; a tomato version (2026 reviews) · gyoza and shiso gyoza, tender cartilage, fried rice ¥715 (June 2026), kara-age (2026 reviews)',
    website: null, gmaps: gm('京辛麺 KYO-KARA 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Spicy noodles · Kawaramachi, a bowl until dawn] A dim 19-seat counter off Kawaramachi that serves its 'Kyokara Men' until 6:00 most mornings — the place for a late-night finish. Pick your spice level (5 is about Shin Ramyun, the brave go to 20 and up), your noodles (the konjac noodles are a favourite), garlic and toppings like cilantro; the egg-thickened soup is rich under the heat. Gyoza, shiso gyoza and a ¥715 fried rice round it out. One June 2026 diner got the wrong order. Open from 18:00, through the night.",
    chef_bio: { chef_name: null, roles: ['Restaurant; no staff named'], origin: null,
      background: 'A June 2026 reviewer, an acquaintance of the owner, ordered on the recommendation of staff from a sister restaurant; reviewers note it is open until early morning and also on Uber Eats (2026 reviews).',
      philosophy: null, specialty: 'Kyokara Men with konjac noodles.',
      anecdotes: [
        { text: 'A June 2026 diner received a different dish from the one ordered and found the food average.', source: R + 'B530391078/' },
        { text: '"The staff mentioned it was about as spicy as Shin Ramyeon, so I tried it at level 5" — July 2026.', source: R + 'B532047933/' },
        { text: 'A September 2026 diner arriving just after 3:00 found it full.', source: R + 'B535271000/' },
      ],
      japanese_sources_summary: '食べログ: ラーメン・ダイニングバー、中京区河原町六角東入山崎町258-24、京阪三条駅6番出口から徒歩4分、月 18:00〜24:00、火〜金 0:00〜6:00・18:00〜24:00、土日 0:00〜6:00・12:00〜15:00・17:00〜24:00、予約可、19席、禁煙 (店外に灰皿)、カード・電子マネー・QR 可。口コミ (2026年3〜9月、英語): 京辛麺の辛さを選べる (5で辛ラーメンくらい)、中華麺かこんにゃく麺、にんにく、パクチー、卵、トマト、餃子、しそ餃子、軟骨、炒飯715円、明け方まで営業、注文の間違いの声。',
      confidence: 'low', sources: [TB, R + 'B499179598/', R + 'B530391078/', R + 'B530817787/', R + 'B531283060/', R + 'B531621159/', R + 'B532047933/', R + 'B532738954/', R + 'B533370342/', R + 'B533472905/', R + 'B533519777/', R + 'B533589407/', R + 'B535271000/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose spice level, noodles and toppings when ordering; cards and QR accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町六角東入山崎町258-24',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007462, 135.769843); cross-checked: GSI 京都府京都市中京区山崎町258番地 (lot) 90m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530817787/'],
    price_note: 'Only the fried rice price was read (June 2026).', last_checked: TODAY, items: [
      it('', '', 'Kyokara Men (spice level of your choice; Chinese or konjac noodles)', '', 'Noodles', 'no', 'no', '2026.', 'kyokara_men'),
      it('', '', 'Fried rice', '¥715', 'Rice', 'ask', 'no', 'June 2026.', 'chahan'),
      it('', '', 'Gyoza / shiso gyoza', '', 'Sides', 'no', 'no', 'August 2026.', 'gyoza'),
    ] }, {
    cuisine: 'お酒も飲める夜遅くまでの辛い麺の店 (2026年の口コミ)・京辛麺: 卵でとじた辛いスープで辛さを選べる (5で辛ラーメンくらい、常連は20〜35)、中華麺かこんにゃく麺、にんにくの量、パクチーや半熟卵などのトッピング、メガサイズ、トマトの京辛麺 (2026年の口コミ)・餃子、しそ餃子、軟骨、炒飯715円 (2026年6月)、唐揚げ (2026年の口コミ)',
    neighborhood: '河原町の東の六角。三条駅から徒歩4分',
    gf_detail: '実際にはグルテンフリーではない。麺は基本が中華麺。こんにゃく麺も選べるが、スープ、餃子、炒飯は小麦なしとは書かれていない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。辛いスープは卵でとじ、サイドは餃子、軟骨、炒飯 (2026年の口コミ)。',
    notes: '[辛い麺・河原町、明け方までの一杯] 河原町近くの薄暗い19席のカウンター。たいていの日は朝6時まで京辛麺を出し、夜の締めにちょうどいい。辛さ (5で辛ラーメンくらい、強者は20以上)、麺 (こんにゃく麺が人気)、にんにく、パクチーなどのトッピングを選ぶ。辛さの下の卵とじのスープはコクがある。餃子、しそ餃子、715円の炒飯も。2026年6月には注文違いがあったという声。18時から朝まで。',
  });
}

// ================================================================ 貴久政
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26000590/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_kikuma_gion', name: '貴久政 (Kikuma)', category: 'OMNI',
    lat: 35.005122, lng: 135.773517, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo cooking with dashi and soy-based seasonings: sashimi, simmered dishes, grilled fish, dashimaki, sake-lees soup; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, crab and dashi-based dishes (2025–26 reviews).',
    hours_raw: 'Lunch 11:30–13:30, dinner 17:00–22:00, Monday–Saturday; closed Sunday (Tabelog). Book ahead — 10 seats, and walk-ins have been turned away at lunch (February 2025); a short-notice July 2026 booking was hard to get. White miso soup can be requested when booking (January 2025). 10 seats at the counter plus a sunken-table room for 4 behind sliding doors; non-smoking; cards (Tabelog). On the north side of Gion near Yasaka Shinchi; 5 min from Gion-Shijo Stn (Tabelog; 2025 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'North Gion, Yasaka Shinchi — 5 min from Gion-Shijo Stn',
    cuisine: 'Gion kappo: a fixed lunch and an à la carte dinner (2025–26 reviews) · lunch set ¥2,500 (January 2025, February 2026; ¥1,600 in 2016): starters, sashimi, simmered dishes, dashimaki grilled in front of you, skewer-grilled fish, kasujiru or miso soup from the fish trimmings, pickles and chirimen-sansho with rice refills, dessert · extras from the dinner menu at lunch, e.g. squid and homemade karasumi, bonito tataki (April 2025) · dinner à la carte or a set budget: kabura-mushi, crab in winter, sashimi, clear soup (2025–26 reviews)',
    website: null, gmaps: gm('貴久政 祇園'), menu_url: null,
    notes: "[Kappo · Gion, a ¥2,500 lunch at a ten-seat counter] A small Gion counter where the chef grills dashimaki in front of you and paces each course to your eating. Lunch is one of Kyoto's kappo bargains — a ¥2,500 set of sashimi, simmered dishes, grilled fish, soup and chirimen-sansho rice — with extras like homemade karasumi; at night the menu goes à la carte, with crab and kabura-mushi in winter. Reviewers call the chef friendly and entertaining. Book ahead; closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: null,
      background: 'Reviewers describe a friendly, entertaining head chef (January 2025, February 2026) who watches each guest’s pace (January 2025); a September 2026 reviewer says the restaurant comes from the Tankuma lineage.',
      philosophy: null, specialty: 'Lunch set; dashimaki; karasumi.',
      anecdotes: [
        { text: 'A January 2025 diner asked about white miso soup and was told it depends on the chef’s mood, not the season, and can be requested when booking.', source: R + 'B481774037/' },
        { text: 'A November 2025 diner found the dashimaki gentle but felt the dashi did not quite blend with the egg.', source: R + 'B517099533/' },
        { text: '"The chef was also an entertainer, which made for a relaxing atmosphere." — February 2026.', source: R + 'B522892996/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理、東山区八坂新地末吉町78、祇園四条から徒歩約5分、月〜土 11:30〜13:30・17:00〜22:00、日曜休み、予約可、10席、個室 (掘りごたつ4名、襖で仕切る)、禁煙、カード可。口コミ (2025年1月〜2026年9月、英語): 昼の定食2,500円 (2016年は1,600円)、目の前で焼くだし巻き、串焼きの魚、粕汁、ちりめん山椒、ご飯のおかわり、夜の品書きから追加も可、からすみ、かぶら蒸し、蟹、気さくな大将、Tankuma の流れという記述、要予約。',
      confidence: 'medium', sources: [TB, R + 'B194322535/', R + 'B481774037/', R + 'B495917365/', R + 'B499125878/', R + 'B509000690/', R + 'B515057807/', R + 'B517099533/', R + 'B520042620/', R + 'B522892996/', R + 'B534276453/', R + 'B536828193/', R + 'B78007209/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; lunch is a set; the chef chats at the counter; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区八坂新地末吉町78',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.005122, 135.773517); cross-checked: GSI 京都府京都市東山区末吉町78番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B194322535/', R + 'B499125878/'],
    price_note: 'Lunch price from January 2025 and February 2026 reviews; dinner prices not read.', last_checked: TODAY, items: [
      it('', '', 'Lunch set (starters, sashimi, simmered dishes, dashimaki, grilled fish, soup, rice)', '¥2,500', 'Lunch', 'ask', 'no', 'February 2026.', 'lunch_set'),
      it('', '', 'Dashimaki (grilled to order)', '', 'Dishes', 'ask', 'no', '2025.', 'dashimaki'),
      it('', '', 'Homemade karasumi', '', 'Dishes', 'ask', 'no', 'April 2025.', 'karasumi'),
    ] }, {
    cuisine: '祇園の割烹。昼は定食、夜はアラカルト (2025〜2026年の口コミ)・昼の定食2,500円 (2025年1月、2026年2月。2016年は1,600円): 前菜、刺身、煮物、目の前で焼くだし巻き、串焼きの魚、粕汁かあらの味噌汁、香の物とちりめん山椒、ご飯のおかわり、デザート・昼でも夜の品書きから追加できる。いかと自家製からすみ、かつおのたたき (2025年4月)・夜はアラカルトか予算で: かぶら蒸し、冬の蟹、刺身、お吸い物 (2025〜2026年の口コミ)',
    neighborhood: '祇園の北側、八坂新地。祇園四条駅から徒歩5分',
    gf_detail: '要確認。出汁と醤油の割烹料理: 刺身、煮物、焼き魚、だし巻き、粕汁。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、蟹、出汁の料理 (2025〜2026年の口コミ)。',
    notes: '[割烹・祇園、10席のカウンターの2,500円の昼] 祇園の小さなカウンター。大将が目の前でだし巻きを焼き、食べる速さに合わせて出してくれる。昼は京都の割烹でも手ごろな2,500円の定食で、刺身、煮物、焼き魚、汁、ちりめん山椒のご飯。自家製からすみなども追加できる。夜はアラカルトで、冬は蟹やかぶら蒸し。気さくで楽しい大将という声。要予約、日曜休み。',
  });
}

// ================================================================ グリル デミ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26002516/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '20:30']);
  put({
    id: 'kyoto_grill_demi', name: 'グリル デミ (GRILL DEMI)', category: 'OMNI',
    lat: 35.014817, lng: 135.758495, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: demi-glace sauce, fried shrimp, omurice and beef stew; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: hamburg steak, beef tongue, fried shrimp and egg (2026 reviews).',
    hours_raw: 'Lunch 11:30–14:00, dinner 17:00–20:30 (Tabelog gives 17:30 in its table); closed Monday and the third Tuesday (Tabelog). No reservations (Tabelog), though a September 2026 diner advises booking; queues of 10–16 people at noon, with waits of 20–50 minutes; you order by QR code while queuing, so food comes quickly once seated (August–October 2026). 20 seats (2 counter, 18 table); non-smoking; cards (VISA, Master, JCB), QUICPay, PayPay (Tabelog). In a back street off Ryogaemachi at Ebisugawa, 3 min from Marutamachi Stn (Tabelog).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ryogaemachi at Ebisugawa — 3 min from Marutamachi Stn',
    cuisine: 'Hamburg steak and demi-glace yoshoku (2026 reviews) · signature tongue-stew hamburg steak on a sizzling plate over a burner ¥2,200 (October 2026) · teppan hamburg steak M 200 g with demi-glace and a fried egg ¥1,500 (October 2026) · "ultimate" set of tongue-stew hamburg, thick-cut tongue steak and boiled tongue (August 2026) · hamburg with fried shrimp and tartar, beef tongue stew, demi-glace omurice, ketchup spaghetti on the side; choose hamburg size, egg style and large rice · red wine ¥500 (2026 reviews)',
    website: null, gmaps: gm('グリル デミ 京都 丸太町'), menu_url: null,
    notes: "[Yoshoku · Marutamachi, tongue stew on a sizzling hamburg] A small, storybook-looking yoshoku shop near Marutamachi with a queue most lunchtimes. The order is the tongue-stew hamburg steak (¥2,200) — tender beef tongue in thick demi-glace over a hamburg and fried egg, kept bubbling on a burner — or a plain teppan hamburg (¥1,500 for 200 g); fried shrimp and omurice too. You order by QR code in the queue, so food comes fast. One long-time fan found the demi-glace changed in 2026. Closed Monday and the third Tuesday.",
    chef_bio: { chef_name: null, roles: ['Restaurant; no staff named'], origin: null,
      background: 'Reviewers in 2026 describe a hamburg-steak specialist with queues of locals and tourists, featured on TV programmes such as "Matsuko no Shiranai Sekai" and "Mahō no Restaurant" (October 2026), and in the manga "Karasu no Ito: Kyoto Meshi" (September 2026). Tabelog Yoshoku WEST "Tabelog 100" 2025.',
      philosophy: null, specialty: 'Tongue-stew hamburg steak.',
      anecdotes: [
        { text: 'A September 2026 diner who used to come from Osaka for the demi-glace found its flavour had changed significantly and was taken aback.', source: R + 'B32610829/' },
        { text: '"While waiting, we placed our order via a QR code, which made the process very systematic and smooth." — September 2026.', source: R + 'B536300297/' },
        { text: 'An October 2026 diner who prefers spiced hamburgers with nutmeg found the patty standard but the sauce good.', source: R + 'B538083012/' },
      ],
      japanese_sources_summary: '食べログ: ハンバーグ・洋食・弁当、中京区両替町夷川通室町東入ル巴町80 パルマビル 1F、丸太町駅から徒歩3分、ランチ 11:30〜14:00、ディナー 17:00〜20:30、月曜と第3火曜休み、予約不可、20席 (カウンター2、テーブル18)、禁煙、カード・QUICPay・PayPay 可、洋食 WEST 百名店 2025。口コミ (2026年8〜10月、英語): タンシチューハンバーグ2,200円、鉄板ハンバーグ M 200g 1,500円、Ultimate Set Meal (牛タン3種)、海老フライ、オムライス、ナポリタン、昼は10〜16人の行列、並びながら QR コードで注文、デミグラスの味が変わったという声、テレビや漫画で紹介。',
      confidence: 'medium', sources: [TB, R + 'B18370332/', R + 'B32610829/', R + 'B531096644/', R + 'B534388654/', R + 'B536125193/', R + 'B536300297/', R + 'B536352670/', R + 'B537575058/', R + 'B537994373/', R + 'B538083012/', R + 'B538085476/', R + 'B538414325/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue, then order by QR code on your phone; cards and PayPay accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区両替町夷川通室町東入ル巴町80 パルマビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Yoshoku WEST Tabelog 100 2025.' },
    pin_source: `Tabelog ${TB} (35.014817, 135.758495); cross-checked: GSI 京都府京都市中京区巴町80番地 (lot) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538414325/', R + 'B534388654/'],
    price_note: 'Prices from August and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tongue-stew hamburg steak', '¥2,200', 'Hamburg', 'no', 'no', 'October 2026.', 'tongue_stew_hamburg'),
      it('', '', 'Teppan hamburg steak M 200 g (demi-glace, fried egg)', '¥1,500', 'Hamburg', 'no', 'no', 'October 2026.', 'teppan_hamburg'),
      it('', '', 'Glass of red wine', '¥500', 'Drinks', '', '', 'August 2026.', 'red_wine'),
    ] }, {
    cuisine: 'ハンバーグとデミグラスの洋食 (2026年の口コミ)・名物のタンシチューハンバーグ、固形燃料で熱々のまま2,200円 (2026年10月)・デミグラスと目玉焼きの鉄板ハンバーグ M 200g 1,500円 (2026年10月)・タンシチューハンバーグ、厚切りタンステーキ、ゆでタンのセット (2026年8月)・海老フライとタルタルのハンバーグ、タンシチュー、デミグラスのオムライス、付け合わせのナポリタン。ハンバーグの大きさ、卵の焼き方、ご飯の大盛りを選べる・赤ワイン500円 (2026年の口コミ)',
    neighborhood: '夷川の両替町。丸太町駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。デミグラスソース、海老フライ、オムライス、ビーフシチュー。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ハンバーグ、牛タン、海老フライ、卵 (2026年の口コミ)。',
    notes: '[洋食・丸太町、熱々のタンシチューハンバーグ] 丸太町近くの、絵本のような小さな洋食店。昼はたいてい行列。頼むのはタンシチューハンバーグ (2,200円)。やわらかい牛タンの濃いデミグラスがハンバーグと目玉焼きにかかり、固形燃料で熱々のまま。鉄板ハンバーグ (200gで1,500円)、海老フライ、オムライスも。並びながら QR コードで注文するので、座ればすぐ出てくる。長年のファンの一人は2026年にデミグラスの味が変わったと書く。月曜と第3火曜休み。',
  });
}

// ================================================================ epice
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26005078/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_epice_demachi', name: 'epice', category: 'OMNI',
    lat: 35.028633, lng: 135.767769, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. French courses with bread (refills on request), sauces, ravioli and yoshoku such as shrimp fry on some days; no gluten information (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Vegetables lead every course (the vegetable terrine is the signature), but each course also has fish and meat; no vegan course is described (Tabelog; 2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 13:30), dinner 17:30–22:00 (last order 20:00); closed Wednesday and two weekends a month (Tabelog). From October 2026 yoshoku is served at lunch, with à la carte at dinner, on Sundays, Mondays and Tuesdays, alongside the courses (Tabelog; October 2026). Online bookings cannot choose seats — phone for requests; when paying partly with Tabelog points, the remainder must be cash (Tabelog; May 2026). Service charge 7% at lunch, 10% at dinner (Tabelog). Small dogs allowed in carriers (Tabelog; March 2026). 34 seats: 8 at the counter, 10 at tables and the 16-seat private "Hanare" for groups of 10 or more (Tabelog). Non-smoking; cards (VISA, Master), PayPay (Tabelog). In a townhouse on Teramachi south of Imadegawa, 7 min west of Demachiyanagi Stn (Tabelog).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Teramachi south of Imadegawa — 7 min from Demachiyanagi Stn',
    cuisine: 'Vegetable-led French in a Kyoto townhouse (Tabelog, shop text) · signature vegetable terrine · lunch courses ¥3,520 (May 2026) and about ¥5,500 (March 2026): new-onion soup, pan-seared sea bass, pork steak, desserts such as strawberry (2026 reviews) · dinner full course with an extensive wine list including rare vintages and pairings (September 2026) · Sunday–Tuesday yoshoku from October 2026: beef tongue stew, shrimp fry, fresh-fish carpaccio (Tabelog; October 2026)',
    website: null, gmaps: gm('epice 京都 寺町今出川'), menu_url: TB + 'dtlmenu/',
    notes: "[French · Demachiyanagi, vegetables first in a townhouse] A French restaurant in a Kyoto townhouse on Teramachi near Imadegawa, where vegetables star — start with the much-praised vegetable terrine — before fish and meat. Lunch courses from about ¥3,500 are good value; dinner adds a deep wine list. Since October 2026, Sunday to Tuesday also bring yoshoku such as beef-tongue stew and shrimp fry. Small dogs in carriers are welcome. Reviews are mixed on service: some praise the brisk pace, others found the room noisy or the chef cold to first-timers. Closed Wednesday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog (the shop’s own text): a French full course featuring vegetables in a Kyoto townhouse, with yoshoku added on Sundays–Tuesdays; dogs welcome. An April 2026 visitor found the owner running everything alone that day. Tabelog French WEST "Tabelog 100" 2021.',
      philosophy: null, specialty: 'Vegetable terrine.',
      anecdotes: [
        { text: "\"The staff seemed rushed, and the kitchen noise was constant, with dishes being handled roughly. ... The chef also lacked a sense of cleanliness; hair should be tied back.\" — May 2026.", source: R + 'B527630464/' },
        { text: 'A June 2026 first-time diner felt ignored by the head chef throughout and was put out by having to pay part of the bill in cash after using Tabelog points.', source: R + 'B392008716/' },
        { text: 'A May 2026 diner found the room noisy with large groups, the staff rushed, dishes handled roughly in the kitchen, and the kitchen’s hygiene lacking.', source: R + 'B527630464/' },
        { text: 'An April 2026 diner with a train to catch asked for quick service and got it, with the owner running the room alone.', source: R + 'B526500965/' },
        { text: '"I was absolutely thrilled with the terrine on the first plate." — August 2026.', source: R + 'B534034504/' },
      ],
      japanese_sources_summary: '食べログ: フレンチ・洋食、上京区寺町通今出川下ル真如堂前町105、出町柳駅から今出川通を西へ徒歩7分、11:30〜15:00 (L.O. 13:30)・17:30〜22:00 (L.O. 20:00)、水曜と月2回の週末休み、予約可 (ネット予約は席の指定不可、ポイント利用時の残額は現金)、サービス料 ランチ7％・ディナー10％、34席 (カウンター8、テーブル10、離れの個室16)、禁煙、カード (VISA・Master)・PayPay 可、フレンチ WEST 百名店 2021、野菜が主役のフレンチのフルコース、京町家、日・月・火は洋食も、犬連れ可。口コミ (2026年3〜10月、英語): 野菜のテリーヌ、ランチ3,520円・約5,500円、鱸のポワレ、豚のステーキ、ワイン、10月からの洋食 (タンシチュー、海老フライ)、うるさかった・初めての客に冷たかったという声。',
      confidence: 'medium', sources: [TB, R + 'B113706856/', R + 'B142650928/', R + 'B392008716/', R + 'B524709206/', R + 'B526085305/', R + 'B526500965/', R + 'B527630464/', R + 'B529307635/', R + 'B529689440/', R + 'B532957041/', R + 'B534034504/', R + 'B536608310/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book online or by phone for seat requests; cards and PayPay; small dogs in carriers allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区寺町通今出川下ル真如堂前町105',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.028633, 135.767769); cross-checked: GSI 京都府京都市上京区真如堂前町105番地 (lot) 19m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529307635/', R + 'B524709206/'],
    price_note: 'Lunch course prices from March and May 2026 reviews; plus 7% service at lunch, 10% at dinner (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥3,520', 'Course', 'ask', 'no', 'May 2026.', 'lunch_3520'),
      it('', '', 'Lunch course (vegetable-led, with fish and meat)', 'about ¥5,500', 'Course', 'ask', 'no', 'March 2026.', 'lunch_5500'),
      it('', '', 'Vegetable terrine', '', 'Course', 'ask', 'ask', 'Signature.', 'vegetable_terrine'),
      it('', '', 'Beef tongue stew (Sun–Tue yoshoku)', '', 'Yoshoku', 'no', 'no', 'October 2026.', 'tongue_stew'),
    ] }, {
    cuisine: '京町家の野菜が主役のフレンチ (食べログの店の紹介)・名物の野菜のテリーヌ・ランチコース3,520円 (2026年5月) や約5,500円 (2026年3月): 新玉ねぎのスープ、鱸のポワレ、豚のステーキ、苺などのデザート (2026年の口コミ)・夜のフルコースと、珍しいヴィンテージも揃うワインとペアリング (2026年9月)・2026年10月からの日・月・火の洋食: タンシチュー、海老フライ、鮮魚のカルパッチョ (食べログ、2026年10月)',
    neighborhood: '今出川の南の寺町通。出町柳駅から徒歩7分',
    gf_detail: '要確認。パン (おかわり可)、ソース、ラビオリのフレンチのコースと、日によって海老フライなどの洋食。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。どのコースも野菜が主役 (名物は野菜のテリーヌ) だが、魚と肉も入る。ヴィーガンのコースは書かれていない (食べログ、2026年の口コミ)。',
    notes: '[フレンチ・出町柳、町家で野菜が主役] 今出川近くの寺町通、京町家のフレンチ。主役は野菜で、評判の野菜のテリーヌから始まり、魚と肉へ。3,500円ほどからのランチコースは手ごろで、夜は充実したワインも。2026年10月からは日・月・火にタンシチューや海老フライなどの洋食も。キャリーに入れた小型犬は同伴可。接客の評価は分かれ、テンポの良さをほめる声も、店内がうるさかった、初めての客に大将が冷たかったという声も。水曜休み。',
  });
}

save();
