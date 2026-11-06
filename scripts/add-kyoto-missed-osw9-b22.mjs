// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 22.
//   + めし処ぽち 四条烏丸 Meshi Dokoro Pochi (oden, tempura and kamameshi izakaya off Shijo-Takakura; 2023)      [core]
//   + ジビエの隠家 Gibier no Nabariya (game-meat bistro in a former coffee shop near Takakura-Takoyakushi)        [core]
//   + 下鴨茶寮 本店 Shimogamo Saryo Honten (ryotei by the Takano River since 1856)                               [notable]
//   + 都季 TOKI (Kyoto-French dining room of HOTEL THE MITSUI KYOTO)                                            [notable]
//   - 鳥さき而光 26043437 skipped (same-concept branch of mp_torisaki)
//   - 茶寮翠泉 高辻本店 26020625 skipped (flagship of a six-shop chain)
//   - 焼肉うしごろ 京都店 26044919 skipped (nine-shop chain)
//   Same-name counts first: めし処ぽち 1 (カジュアルイタリアン ぽっぽちゃん is unrelated); ジビエの隠家 1; 鳥さき — see
//   the skip; 茶寮翠泉 — six shops on its own site; うしごろ — nine on its own site; 下鴨茶寮 — 本店 plus counters at
//   京都駅ポルタ and ジェイアール京都伊勢丹 (our crawl) and 松屋銀座 (a 2024 press release): selling counters of a single
//   ryotei, drafted as the main house (as いづう was); 都季 1 — a hotel restaurant; FORNI in the same hotel is in data
//   as its own record (kyoto_forni_hotel_the_mitsui).
//   Taken in queue order on 2026-11-05: core 26039273, 26037215; notable 26043437 (skip), 26020625 (skip), 26001041,
//   26044919 (skip), 26034899. None of the four drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: ジビエの隠家 "チャージ料 お一人様350円（税込）";
//   下鴨茶寮 "別途サービス料15％（個室）、10%（相室）"; 都季 "サービス料15％（表記料金は税金・サービス料が含まれております。）";
//   ぽち has no section.
//   Pins: ぽち's Tabelog point is 3.6 m from mp_okazuya_ishikawa (same lot, 高材木町221), so moved ~6 m west;
//   下鴨茶寮's GSI lot point is 187 m off, so loc_approx 'single'.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26043437', '鳥さき而光: a same-concept branch of a brand already in data — mp_torisaki (鳥さき, yakitori); the name carries 鳥さき, an April 2026 Tabelog review is titled "A Branch of a Popular Restaurant" and says some staff came from Tori Saki, and an August 2026 review says the owner trained at Tori Saki');
skip('26020625', '茶寮翠泉 高辻本店: flagship of a chain — the official shop page (saryo-suisen.com/shop/, read 2026-11-05) lists six shops: 高辻本店, 新宿店, 渋谷パルコ店, 池袋東武店, 羽田エアポートガーデン店, CIAL横浜店');
skip('26044919', '焼肉うしごろ 京都店: a chain — the official site (ushigoro.com, read 2026-11-05) lists nine Yakiniku Ushigoro shops: 京都店, 西麻布本店, 銀座店, 銀座並木通り店, 横浜店, 表参道店, 新宿三丁目店, 池袋店, 梅田店');

// ================================================================ めし処ぽち 四条烏丸
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26039273/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_meshidokoro_pochi', name: 'めし処ぽち 四条烏丸 (Meshi Dokoro Pochi Shijo Karasuma)', category: 'OMNI',
    lat: 35.002896, lng: 135.762313, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Tempura, oden on a bonito-and-flying-fish dashi, saikyo-miso grilled pork and kamameshi; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and vegetable tempura is served, but the oden broth is bonito, flying-fish and kombu dashi and most dishes are fish or meat (Tabelog; 2026 reviews).',
    hours_raw: '17:00–22:30 (last order 22:00); closed Tuesday (Tabelog). Bookings online or by phone — call even if online shows full (Tabelog). Ordering by smartphone (June 2026). 30 seats: an 11-seat counter around the kitchen and tables upstairs; private rooms for 6–8, or 12–16 by arrangement; children 3 and over; non-smoking with a smoking space; cards, e-money and PayPay (Tabelog). 5 min from Shijo-Karasuma (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Takakura south of Shijo, near Shijo-Karasuma — 5 min walk',
    cuisine: 'Izakaya of fish, oden, tempura and kamameshi: sashimi platters around chutoro with fish from Kyoto Central Market every morning; year-round oden on a dashi of Matsushimaya Honten bonito, flying fish, dried shiitake and Hidaka kombu; tempura in flour chilled to –26 °C, fried at 165 °C (Tabelog) · in reviews: octopus or shirasu-ume kamameshi, firefly squid, kombu-cured sea bream, straw-grilled yellowtail, whale, water-eggplant tempura, saikyo-miso Kyoto pork, grilled eel, yuba, poke, tokoroten (2026 reviews)',
    website: null, gmaps: gm('めし処ぽち 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: "[Izakaya · near Shijo-Karasuma] A calm, grown-up izakaya with a counter around the kitchen, where the stars are the kamameshi rice pots, oden with playful twists and light tempura — plus market-fresh sashimi. About ¥4,000–6,000. Popular: book, or call even if online looks full. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Operator unnamed in the sources'], origin: null,
      background: 'Opened 17 April 2023 (Tabelog). Per the operator: fish from Kyoto Central Market every morning; oden dashi from Matsushimaya Honten bonito flakes with flying fish, dried shiitake and Hidaka kombu.',
      philosophy: null, specialty: 'Kamameshi; creative oden.',
      anecdotes: [
        { text: 'The first guest of the evening in March 2026 was surprised by a light clear soup as the starter.', source: R + 'B523847970/' },
        { text: 'Fully booked by 7:30 pm on a March 2026 night; the octopus kamameshi was the highlight.', source: R + 'B524481812/' },
        { text: 'An August 2026 pair appreciated the serving chopsticks set out for sharing.', source: R + 'B532901736/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): めし処ぽち 四条烏丸、居酒屋・おでん・海鮮、下京区高材木町221-3、四条烏丸から徒歩5分、17:00〜22:30 (L.O. 22:00)、火曜休み、30席 (カウンター11、テーブル)、個室あり、3歳以上の子供可、2023年4月17日オープン、中トロを中心とした刺身の盛り合わせ、京都中央市場から毎朝届く魚、Matsushimaya Honten の鰹節とあご出汁、干し椎茸、Hidaka 昆布の出汁の創作おでん、マイナス26度の粉で揚げる天ぷら。口コミ (2026年3〜10月、英語): 蛸の釜飯、しらす梅の釜飯、ホタルイカ、鯛の昆布締め、鰤の藁焼き、鯨、水なすの天ぷら、スマホで注文。',
      confidence: 'medium', sources: [TB, R + 'B523847970/', R + 'B523906592/', R + 'B523932704/', R + 'B524481812/', R + 'B528003856/', R + 'B528585525/', R + 'B530998286/', R + 'B532066233/', R + 'B532901736/', R + 'B537144231/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order by smartphone; book ahead.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区高材木町221-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.002896, 135.762383), moved ~6 m west to 135.762313 because mp_okazuya_ishikawa (also 高材木町221) is pinned 3.6 m from the Tabelog point; cross-checked: GSI 京都府京都市下京区高材木町221番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No priced menu read; dishes from Tabelog\'s shop text and 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kamameshi (rice cooked in a pot), e.g. octopus', '', 'Rice', 'ask', 'no', '', 'kamameshi'),
      it('', '', 'Sashimi platter', '', 'Sashimi', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Creative oden', '', 'Oden', 'ask', 'no', '', 'oden'),
    ] }, {
    cuisine: '魚とおでん、天ぷら、釜飯の居酒屋: 京都中央市場から毎朝届く魚の中トロ中心の刺身の盛り合わせ。Matsushimaya Honten の鰹節、あご、干し椎茸、Hidaka 昆布の出汁で一年中出すおでん。マイナス26度に冷やした粉を165度で揚げる天ぷら (食べログ)・口コミの料理: 蛸やしらす梅の釜飯、ホタルイカ、鯛の昆布締め、鰤の藁焼き、鯨、水なすの天ぷら、京都の豚の西京焼き、鰻の蒲焼き、湯葉、ポキ、ところてん (2026年の口コミ)',
    neighborhood: '四条烏丸に近い四条の南の高倉。徒歩5分',
    gf_detail: '要確認。天ぷら、鰹とあごの出汁のおでん、豚の西京焼き、釜飯。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアン対応ありとあり、野菜の天ぷらもあるが、おでんの出汁は鰹、あご、昆布で、料理の多くは魚か肉 (食べログ、2026年の口コミ)。',
    notes: '[居酒屋・四条烏丸近く] 厨房を囲むカウンターのある落ち着いた大人の居酒屋。主役は釜飯、ひと工夫あるおでん、軽い天ぷらと、市場直送の刺身。4千〜6千円ほど。人気なので予約を。ネットで満席でも電話を。火曜休み。',
  });
}

// ================================================================ ジビエの隠家
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26037215/'; const R = TB + 'dtlrvwlst/';
  const W = day(['15:00', '21:00']), E = day(['12:00', '21:00']);
  put({
    id: 'kyoto_gibier_no_nabariya', name: 'ジビエの隠家 (Gibier no Nabariya)', category: 'OMNI',
    lat: 35.005834, lng: 135.762809, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Breaded venison cutlets, menchi-katsu, curry, pasta and baguette; allergies can be noted when booking (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a game-meat restaurant — deer, boar, duck, rabbit, bear, carp (Tabelog; 2026 reviews).',
    hours_raw: 'Mon, Tue, Thu, Fri and days after holidays 15:00–21:00; Wed, Sat, Sun, holidays and days before holidays 12:00–21:00 (lunch menu 12:00–15:00); food last order 20:00, drinks 20:15; closing days not fixed (Tabelog). Charge ¥350 per person — Tabelog\'s Japanese original: "チャージ料 お一人様350円（税込）". No children after 16:00; note allergies when booking (Tabelog). 18 seats: 6 at the counter, 3 tables for 4; 90-minute all-you-can-drink plans; non-smoking; cards (VISA, Master, JCB, Diners) and QR (Tabelog). In a former coffee shop at the back of a building ground floor, 3 min north of Hankyu Karasuma Stn exit 16 (Tabelog; June and October 2026).',
    hours: { 0: W, 1: W, 2: E, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Takakura south of Takoyakushi, behind Daimaru — 3 min from Hankyu Karasuma Stn',
    cuisine: 'Game and wine for beginners and fans: slow-roasted Ezo deer and its liver, roast bear and badger; lunch set of four game meats — venison cutlet, grilled boar, duck menchi-katsu, fried rabbit or quail — game spice curry and European-style deer curry; about ten wines by the glass (Tabelog) · in reviews: house salad with smoked boar, "usamayo" rabbit mayonnaise on baguette ¥800, carp carpaccio, boar and duck prosciutto, marinated pheasant, grilled boar ¥1,000, venison cutlet with demi-glace ¥1,500, venison-cutlet curry ¥1,800, courses ¥4,500 and ¥5,500 with drinks (2026 reviews)',
    website: null, gmaps: gm('ジビエの隠家 京都 高倉'), menu_url: TB + 'dtlmenu/',
    notes: "[Game meat & wine · behind Daimaru near Karasuma] A cosy retro bistro in a former coffee shop serving game that converts sceptics: slow-roasted Ezo deer, boar, duck, rabbit, even bear, plus a four-game lunch plate and venison-cutlet curry. Dinner about ¥4,000–8,000, ¥350 charge; lunch at weekends and Wednesdays. No children after 4 pm.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; a September 2026 reviewer saw one chef working)'], origin: null,
      background: 'Per the operator: game slow-roasted for about 30 minutes to tame its smell; a lunch menu meant for game beginners. Per a June 2026 reviewer, the room was a coffee shop before it became a game restaurant; a September 2026 regular praises how the hunters process the meat.',
      philosophy: null, specialty: 'Roast Ezo deer; four-game lunch plate.',
      anecdotes: [
        { text: 'A September 2026 first-timer who had doubts about venison wrote that it was so good it prompted a first-ever Tabelog review.', source: R + 'B535908767/' },
        { text: 'An April 2026 diner tried koi carpaccio for the first time and found no muddy taste.', source: R + 'B525519837/' },
        { text: 'After a concert at Kamigamo Shrine, an October 2026 couple ended with rabbit "usamayo" that tasted like tuna.', source: R + 'B536742997/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ジビエの隠家、ジビエ料理・バル、中京区高倉通蛸薬師下ル貝屋町558-1、阪急烏丸駅16番出口から北へ徒歩3分、月火木金・祝翌日 15:00〜21:00、水土日・祝・祝前日 12:00〜21:00 (L.O. 料理20:00、ドリンク20:15)、不定休、16時以降は子供不可、チャージ料 お一人様350円 (税込)、18席 (カウンター6、テーブル3)、エゾ鹿のロースト、熊や穴熊のロースト、ジビエ4種のランチ定食、鹿カツ、猪の網焼き、鴨のメンチカツ、兎や鶉の唐揚げ、ジビエのスパイスカレー、グラスワイン約10種、90分飲み放題。口コミ (2026年4〜11月、英語): Usamayo800円、鯉のカルパッチョ、猪と鴨の生ハム、雉のマリネ、鹿カツカレー1,800円、元喫茶店、コース4,500円・5,500円。',
      confidence: 'medium', sources: [TB, R + 'B471080863/', R + 'B504665142/', R + 'B525519837/', R + 'B527920813/', R + 'B534834286/', R + 'B535908767/', R + 'B536742997/', R + 'B537177858/', R + 'B538053454/', R + 'B538541073/'] },
    cultural_comfort: { level: 'konnichiwa', note: '¥350 charge; adults only after 16:00; note allergies when booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉通蛸薬師下ル貝屋町558-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.005834, 135.762809); cross-checked: GSI 京都府京都市中京区貝屋町558番地 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538053454/', R + 'B534834286/'],
    price_note: 'No menu read; prices from September–October 2026 reviews; ¥350 charge per Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Usamayo — rabbit mayonnaise on baguette', '¥800', 'Small plates', 'no', 'no', 'October 2026 review.', 'usamayo'),
      it('', '', 'Grilled wild boar', '¥1,000', 'Mains', 'ask', 'no', 'October 2026 review.', 'grilled_boar'),
      it('', '', 'Venison cutlet with demi-glace', '¥1,500', 'Mains', 'no', 'no', 'October 2026 review.', 'venison_cutlet'),
      it('', '', 'Venison-cutlet curry (lunch)', '¥1,800', 'Lunch', 'no', 'no', 'September 2026 review.', 'venison_curry'),
    ] }, {
    cuisine: '初心者にもファンにもジビエとワイン: じっくり焼くエゾ鹿のローストとレバー、熊や穴熊のロースト。ランチは鹿カツ、猪の網焼き、鴨のメンチカツ、兎か鶉の唐揚げの4種のジビエの定食、ジビエのスパイスカレー、欧風の鹿カレー。グラスワイン約10種 (食べログ)・口コミの料理: 燻製の猪のサラダ、バゲットにのせたUsamayo800円、鯉のカルパッチョ、猪と鴨の生ハム、雉のマリネ、猪の網焼き1,000円、デミグラスの鹿カツ1,500円、鹿カツカレー1,800円、飲み物付きのコース4,500円・5,500円 (2026年の口コミ)',
    neighborhood: '大丸の裏、高倉通蛸薬師下ル。阪急烏丸駅から徒歩3分',
    gf_detail: '要確認。衣をつけた鹿カツ、メンチカツ、カレー、パスタ、バゲット。予約時にアレルギーを書ける (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鹿、猪、鴨、兎、熊、鯉のジビエの店 (食べログ、2026年の口コミ)。',
    notes: '[ジビエとワイン・烏丸近くの大丸の裏] 元喫茶店のレトロで居心地のいいビストロで、苦手な人も変わるジビエを出す。じっくり焼いたエゾ鹿、猪、鴨、兎、熊まで。昼は4種のジビエの定食や鹿カツカレー。夜は4千〜8千円ほど、チャージ350円。昼は水・土・日。16時以降は子供不可。',
  });
}

// ================================================================ 下鴨茶寮 本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001041/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.shimogamosaryo.co.jp/';
  const H = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'kyoto_shimogamo_saryo', name: '下鴨茶寮 本店 (Shimogamo Saryo Honten)', category: 'OMNI',
    lat: 35.034183, lng: 135.77399, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Kyoto kaiseki on dashi, with fu, sushi and tempura-style dishes; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kaiseki of fish, hamo, ayu and dashi (2026 reviews).',
    hours_raw: 'Lunch 11:30–15:00 (last order 13:30) and dinner 17:00–21:00 (last order 20:00); closed Tuesday (Tabelog). Bookings by phone or online (TableCheck) (Tabelog; September 2026). Service charge 15% in private rooms, 10% in shared rooms — Tabelog\'s Japanese original: "別途サービス料15％（個室）、10%（相室）を頂戴いたします". 50 seats in rooms with garden views, private rooms up to 36; children welcome in private rooms only, with a kids\' menu; English menu and English-speaking staff; sommelier; smart casual; parking for about 8 cars; cards, PayPay and d Barai (Tabelog). By the Takano River near Shimogamo Shrine; 9 min from Demachiyanagi Stn (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogamo, by the Takano River near Shimogamo Shrine — 9 min from Demachiyanagi Stn',
    cuisine: 'Kyoto kaiseki and tea kaiseki from a ryotei founded in Ansei 3 (1856), "local ingredients, local methods" with Kyoto vegetables (Tabelog) · courses: ten-dish "Fukuzen" ¥14,300, private-room course ¥22,000, a celebration course ¥27,500 (Tabelog); a lunch course at ¥8,800 and a Japanese-style afternoon tea of saba sushi, nama-fu dengaku and sweets (September 2026) · June–August 2026 menus: minazuki tofu, flounder and shima-aji sashimi, hamo soup with winter melon, bamboo-leaf sushi, river shrimp, anago yawata-maki, grilled ayu and sawara with sansho, matcha (2026 reviews) · takeaway and New Year osechi (official site; August 2026)',
    website: SITE, gmaps: gm('下鴨茶寮 本店'), menu_url: TB + 'dtlmenu/',
    notes: "[Ryotei · Shimogamo, since 1856] A 170-year-old Kyoto ryotei by the Takano River, near Shimogamo Shrine: seasonal kaiseki served in garden-view rooms, with a century-old garden to stroll after. Lunch courses from about ¥8,800, dinner ¥14,300–27,500, plus 10–15% service. English menu and staff. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Ryotei (no person named in the sources)'], origin: null,
      background: 'Per the operator: founded about 170 years ago, in Ansei 3 (1856), in Shimogamo; a ryotei carrying on Kyoto cuisine and tea kaiseki, with tea rooms such as Sansen-an, garden views from every room, and a history of guests among writers and dignitaries. Besides this main house, our crawl lists 下鴨茶寮 counters at 京都駅ポルタ and ジェイアール京都伊勢丹, and a 2024 press release announced a Matsuya Ginza shop with an eat-in corner.',
      philosophy: 'Per the operator: "local ingredients, local methods"; traditional technique with modern creativity.',
      specialty: 'Seasonal Kyoto kaiseki.',
      anecdotes: [
        { text: 'An August 2026 fan came because two idols had visited on a TV show, and was photographed in the garden by the staff.', source: R + 'B534628143/' },
        { text: 'A June 2026 lunch guest loved the minazuki tofu enough to want it sold at department stores.', source: R + 'B462916699/' },
        { text: 'A September 2026 regular brought extended family here to thank those who had travelled far — "a bit pricey".', source: R + 'B536822434/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 下鴨茶寮 本店、日本料理、左京区下鴨宮河町62、出町柳駅から徒歩9分、11:30〜15:00 (L.O. 13:30)・17:00〜21:00 (L.O. 20:00)、火曜休み、別途サービス料15％ (個室)・10% (相室)、50席、個室は36名まで、子供は個室のみ、英語メニュー、ソムリエ、スマートカジュアル、駐車場約8台、創業約170年 (安政三年)、京料理と茶懐石、Sansen-an などの茶室、地元の食材を地元の方法で、Fukuzen 14,300円、22,000円、27,500円のコース。公式サイト (shimogamosaryo.co.jp): 本店の料理の持ち帰り、百貨店の売り場・催事。口コミ (2026年6〜9月、英語): Minazuki 豆腐、鱧の椀、笹寿司、鮎、昼のコース8,800円、和のアフタヌーンティー、庭の散策。',
      confidence: 'medium', sources: [TB, SITE, R + 'B462916699/', R + 'B530558096/', R + 'B530804823/', R + 'B532619630/', R + 'B534278078/', R + 'B534456851/', R + 'B534628143/', R + 'B535501907/', R + 'B536175979/', R + 'B536822434/'] },
    cultural_comfort: { level: 'english', note: 'English menu and English-speaking staff (Tabelog); book ahead; smart casual.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市左京区下鴨宮河町62',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.034183, 135.773990); cross-checked: GSI 京都府京都市左京区下鴨宮河町62番地 (lot) 187m — beyond 150 m, so loc_approx 'single'; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from Tabelog, tax included (read 2026-11-05); service 10–15% extra.', last_checked: TODAY, items: [
      it('', '', 'Fukuzen kaiseki (10 dishes)', '¥14,300', 'Courses', 'ask', 'no', '', 'fukuzen'),
      it('', '', 'Kyoto kaiseki in a private room', '¥22,000', 'Courses', 'ask', 'no', '', 'private_course'),
      it('', '', 'Celebration kaiseki', '¥27,500', 'Courses', 'ask', 'no', '', 'celebration'),
    ] }, {
    cuisine: '安政三年 (1856年) 創業の料亭の京料理と茶懐石。京野菜を使い、地元の食材を地元の方法で (食べログ)・コース: 10品の Fukuzen 14,300円、個室のコース22,000円、祝いのコース27,500円 (食べログ)。昼のコース8,800円や、鯖寿司、生麩田楽、和菓子の和のアフタヌーンティーも (2026年9月)・2026年6〜8月の献立: Minazuki 豆腐、平目としま鯵の造り、冬瓜と鱧の椀、笹寿司、川海老、穴子の八幡巻き、鮎や鰆の山椒焼き、抹茶 (2026年の口コミ)・持ち帰りや正月のおせち (公式サイト、2026年8月)',
    neighborhood: '下鴨神社に近い高野川沿いの下鴨。出町柳駅から徒歩9分',
    gf_detail: '予約時に要確認。出汁の京懐石で、麩、寿司、揚げ物も。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、鱧、鮎、出汁の懐石 (2026年の口コミ)。',
    notes: '[料亭・下鴨、1856年創業] 下鴨神社に近い高野川沿いの創業170年の京都の料亭。庭を望む座敷で旬の懐石を味わい、食後は100年の庭を散策できる。昼のコースは8,800円ほどから、夜は14,300〜27,500円、サービス料10〜15%別。英語メニューと英語を話すスタッフ。火曜休み。',
  });
}

// ================================================================ 都季 TOKI
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26034899/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.hotelthemitsui.com/kyoto/restaurants-bar/toki/';
  const H = day(['12:00', '13:30'], ['17:30', '20:30']);
  put({
    id: 'kyoto_toki_hotel_the_mitsui', name: '都季 (TOKI)', category: 'OMNI',
    lat: 35.013189, lng: 135.752749, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. French courses on a dashi of Fushimi water, with gnocchi, canapés and sauces; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses of ayu, eel, fish and black wagyu (2026 reviews).',
    hours_raw: 'Lunch 12:00–13:30 (last order) and dinner 17:30–20:30 (last order), daily (Tabelog). Bookings taken; tables are held for 2 h 30 min (Tabelog). Service charge 15%, included in the listed prices — Tabelog\'s Japanese original: "サービス料15％（表記料金は税金・サービス料が含まれております。）". Open to non-staying guests (September 2026). 44 seats: a 12-seat counter, dining room, a private room for 6 (room charge ¥19,000) and a 16-seat room (dinner ¥60,000); children under 13 in the private room; smart casual; wheelchair accessible; sommelier; hotel parking free for 2 h with ¥8,000 spent; cards (Tabelog). On the ground floor of HOTEL THE MITSUI KYOTO by Nijo Castle; 3 min from Nijojo-mae Stn exit 2 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo Castle area, in HOTEL THE MITSUI KYOTO — 3 min from Nijojo-mae Stn',
    cuisine: 'Innovative Kyoto French: a French "dashi" made with Fushimizu, the Fushimi sake-brewing water, and Kyoto ingredients; carrot gnocchi in the 7- and 8-course menus (Tabelog) · a ¥12,000 lunch course with a ¥7,000 wine set (September 2026); a weekday private-room lunch ¥15,000 (July 2026); Christmas lunch ¥12,000 (Tabelog) · in reviews: Shiga ayu "water" soup, Kamo eggplant with ayu, eel in a red-wine style, edamame gazpacho, hon-shimeji canapé (2026 reviews)',
    website: SITE, gmaps: gm('TOKI HOTEL THE MITSUI KYOTO'), menu_url: SITE,
    notes: "[Kyoto French · HOTEL THE MITSUI KYOTO by Nijo Castle] The hotel's French dining room, open to non-guests, where chef Tetsuya Asano — formerly executive sous-chef of the Ritz Paris main dining room and Japan's 2027 Bocuse d'Or candidate — builds sauces on a dashi of Fushimi brewing water. Lunch from about ¥12,000, dinner ¥20,000+ (service included). Smart casual; garden views.",
    chef_bio: { chef_name: 'Tetsuya Asano (romaji, per the operator on Tabelog)', roles: ['Head chef'], origin: null,
      background: 'Per the operator on Tabelog: trained at several renowned restaurants in the Netherlands and France before the Ritz Paris; in 2017 the first Japanese executive sous-chef of the main dining room, overseeing the hotel\'s restaurants including the two-Michelin-star Espadon with the executive chef; selected as Japan\'s representative for the Bocuse d\'Or 2027. TOKI opened 3 November 2020 (Tabelog). A June 2026 reviewer says it holds a Michelin star; a September 2026 reviewer says it is listed in the Michelin Guide.',
      philosophy: 'Per the operator: Kyoto ingredients and Kyoto water, with a French "dashi" of Fushimizu.',
      specialty: 'Fushimizu dashi; carrot gnocchi.',
      anecdotes: [
        { text: 'A June 2026 solo traveller chose it for something lighter after heavy French meals, and could have sipped the ayu "water" soup forever.', source: R + 'B530608177/' },
        { text: 'A birthday guest in October 2026 was looked after by a staff member, Nakaba-san, who also explained the local ingredients.', source: R + 'B537146584/' },
        { text: 'An August 2026 lunch guest found the menu gave nothing away beforehand — "an experience far beyond your imagination".', source: R + 'B533990097/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 都季 (TOKI)、イノベーティブ・フレンチ、中京区油小路通二条下ル二条油小路町284 HOTEL THE MITSUI KYOTO 1F、二条城前駅2番出口から徒歩3分、12:00〜13:30 (L.O.)・17:30〜20:30 (L.O.)、利用は予約時刻から2時間30分、サービス料15％ (表記料金は税金・サービス料込み)、44席 (カウンター12、ダイニング、個室6名・部屋代19,000円、16名の部屋・夜60,000円)、13歳未満は個室、スマートカジュアル、ソムリエ、2020年11月3日オープン、Fushimizu で作るフレンチの出汁、人参のニョッキ、料理長 Tetsuya Asano (オランダとフランスで修業、2017年 Ritz Paris のメインダイニングのエグゼクティブ・スーシェフ、ボキューズ・ドール2027日本代表)。口コミ (2026年6〜10月、英語): 鮎の椀、賀茂なすと鮎、鰻の赤ワイン煮風、枝豆のガスパチョ、昼のコース12,000円、ワインセット7,000円、宿泊しなくても利用可。',
      confidence: 'medium', sources: [TB, SITE, R + 'B529774227/', R + 'B530608177/', R + 'B530863195/', R + 'B533716949/', R + 'B533990097/', R + 'B534867687/', R + 'B536040735/', R + 'B536460985/', R + 'B537146584/', R + 'B537255436/'] },
    cultural_comfort: { level: 'english', note: 'Hotel restaurant; smart casual; service included in prices.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区油小路通二条下ル二条油小路町284 HOTEL THE MITSUI KYOTO 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Hotel site and Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013189, 135.752749); cross-checked: GSI 京都府京都市中京区二条油小路町284番地 (lot) 56m; 31 m from kyoto_forni_hotel_the_mitsui in the same hotel; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536040735/', R + 'B536460985/'],
    price_note: 'No current menu read; prices from 2026 reviews (service included per Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Lunch course', '¥12,000', 'Lunch', 'ask', 'no', 'September 2026 review; wine set ¥7,000.', 'lunch'),
      it('', '', 'Weekday private-room lunch', '¥15,000', 'Lunch', 'ask', 'no', 'July 2026 review.', 'private_lunch'),
    ] }, {
    cuisine: 'イノベーティブな京都のフレンチ: 伏見の酒の仕込み水「Fushimizu」で作るフレンチの出汁と京都の食材。7品と8品のコースに人参のニョッキ (食べログ)・昼の12,000円のコースに7,000円のワインセット (2026年9月)、平日の個室ランチ15,000円 (2026年7月)、クリスマスランチ12,000円 (食べログ)・口コミの料理: 滋賀の鮎の椀、賀茂なすと鮎、赤ワイン煮風の鰻、枝豆のガスパチョ、本しめじのカナッペ (2026年の口コミ)',
    neighborhood: '二条城のそば、HOTEL THE MITSUI KYOTO の中。二条城前駅から徒歩3分',
    gf_detail: '予約時に要確認。Fushimizu の出汁のフレンチのコースに、ニョッキ、カナッペ、ソース。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。鮎、鰻、魚、黒毛和牛のコース (2026年の口コミ)。',
    notes: '[京都のフレンチ・二条城そばの HOTEL THE MITSUI KYOTO] 宿泊客以外も利用できるホテルのフレンチ。Ritz Paris のメインダイニングの元エグゼクティブ・スーシェフで、ボキューズ・ドール2027日本代表の Tetsuya Asano シェフが、伏見の仕込み水の出汁でソースを組み立てる。昼は12,000円ほどから、夜は2万円以上 (サービス料込み)。スマートカジュアル、庭の眺め。',
  });
}

save();
