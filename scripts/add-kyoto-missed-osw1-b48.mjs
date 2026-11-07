// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw1 (Tabelog id mod 6 = 2), batch 48.
//   + アンソレイユ Ensoleillé (plated-dessert counter near Demachiyanagi; dessert courses and parfaits)
//   + 好文舍 Koubunsha (café and gallery in a Meiji-era townhouse west of the Imperial Palace)
//   + メンヤ Menya (pasta and Italian north of Nijo Station; cash only)
//   + とんかつ 棹 京都五条店 Tonkatsu Taku, Kyoto Gojo (five-seat tonkatsu counter; Kyoto branch of a Shiga shop)
//   - 一風堂 イオンモールKYOTO店 (26040470): skipped (reason below).
//   Picked on 2026-11-06: from `queue.mjs kyoto-missed next core 300`, lane ids in queue order 26040470 (skipped),
//   26035298, 26031794, 26003114, 26041838. None of the four drafted is in data/kyoto.json by name (アンソレイユ/Ensoleillé,
//   好文舍/Koubunsha — 好文 (vm_yoshifumi) in data is a different shop in the west of the city, メンヤ/Menya, 棹/Taku) or
//   address (栄町359-1, 甲斐守町118, 聚楽廻南町1-9-104, 中堂寺庄ノ内町1-1).
//   Same-name count (same brand or operator only): アンソレイユ, 好文舍, メンヤ — one shop each in our crawl. とんかつ 棹 —
//   one shop in our crawl; Tabelog's name search lists three (Shiyakushomae, Kyoto Gojo, Seta), and reviewers call this a
//   branch of a well-known Shiga shop (January and July 2026) — a small group, drafted and flagged. Large-parent list checked.
//   Service charges, checked against Tabelog's Japanese original: none listed for any of the four.
//   Halal: no operator in this batch claims halal.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw1-48');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040470', '一風堂 イオンモールKYOTO店: chain — Tabelog’s name search for 一風堂 returns 195 shops nationwide (tabelog.com/en/rstLst/?sw=一風堂), four in Kyoto (Kyoto Porta, Shijo Karasuma, AEON Mall KYOTO, AEON Mall Kyoto Katsuragawa)');

// ================================================================ アンソレイユ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26035298/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'kyoto_ensoleille_demachi', name: 'アンソレイユ (Ensoleillé)', category: 'OMNI',
    lat: 35.027446, lng: 135.769051, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Plated desserts and parfaits that use crêpes, tart cases, meringue, cookies and financiers; no gluten information (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Desserts built on cream, cheese mousse, milk crêpes, crème brûlée and ice cream; a granita and fruit pastes appear, but nothing is described as dairy- or egg-free (2025–2026 reviews).',
    hours_raw: 'Hours and days off are not fixed — check before visiting (Tabelog). Reservation only, through TableCheck (Tabelog); an April 2026 visitor was let in without a booking on a Sunday afternoon, and a September 2025 day was a parfait-only “free day”. Cards, IC cards, iD and QUICPay; no QR payments (Tabelog). 7 seats: 5 at the counter and a sofa for 2–3 (Tabelog). Children welcome on the sofa seats (Tabelog). About 4 min on foot from the Kawaramachi-Imadegawa bus stop, 8 min from Keihan Demachiyanagi Station (Tabelog). A January 2025 reviewer heard the shop would move by the end of 2025; reviews from July 2025 place it at 栄町359-1.',
    hours: {}, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Near Kawaramachi-Imadegawa — 8 min from Demachiyanagi Stn',
    cuisine: 'Assiette desserts made in front of you at the counter (July 2025) · seasonal dessert courses: ¥6,680 in April 2025 (white-miso crème brûlée, nanohana and hassaku tart, hon-mirin parfait, shungiku ice cream, strawberry and white-miso crêpe, tea sweets); a New Year course ¥5,500 (January 2025); a peach course with peach soup and shortcake (August 2025); an autumn peach, fig and autumn-vegetable course (September 2026) · parfaits: Shine Muscat ¥2,980 (September 2025), sakura and strawberry ¥2,880 (April 2026), peach (July 2025, August 2026), chestnut (September 2026) · natsumikan and fuki-no-to vacherin ¥1,800 (April 2026) · mandarin milk crêpe (August 2026), chestnut mille-feuille (October 2026) · baked goods',
    website: 'https://ensoleille27.thebase.in/', gmaps: gm('アンソレイユ 上京区栄町'), menu_url: null,
    notes: '[Plated desserts · near Kawaramachi-Imadegawa, dessert courses and parfaits] A seven-seat counter with antique fittings and dried flowers where the owner, who has a French cooking background, assembles seasonal dessert courses and parfaits in front of you — vegetables, miso and herbs alongside the fruit. Reservation only through TableCheck, and slots go fast.',
    chef_bio: { chef_name: null, roles: ['Owner-pâtissière (unnamed)'], origin: null,
      background: 'An April 2025 reviewer says the owner has French culinary experience and pairs seasonal fruit with vegetables and other ingredients. An April 2026 visitor found one woman, the owner, running the shop alone.',
      philosophy: null, specialty: 'Seasonal plated dessert courses; parfaits.',
      anecdotes: [
        { text: 'A June 2025 guest came back the very next day because the cherry-and-chocolate parfait had been too good.', source: R + 'B507953477/' },
        { text: 'A July 2025 visitor who found a free slot arrived early and watched a queue form before opening.', source: R + 'B511283470/' },
      ],
      japanese_sources_summary: '食べログ: アンソレイユ、スイーツ・カフェ・ケーキ、上京区栄町359-1 1F、河原町今出川バス停から徒歩4分、京阪出町柳駅から徒歩8分、営業時間と定休日は不定、完全予約制 (TableCheck)、カード・電子マネー可、7席 (カウンター5、ソファ2〜3)。口コミ (2025〜2026年、英語): 目の前で作るアシェットデセール、フランス料理の経験がある店主、店主ひとりで営む、デザートコース6,680円 (2025年4月)、新年のコース5,500円、桃のコース、シャインマスカットのパフェ2,980円、桜と苺のパフェ2,880円、ヴァシュラン1,800円、ミルクレープ、栗のミルフィーユ。',
      confidence: 'medium', sources: [TB, R + 'B497590479/', R + 'B499148887/', R + 'B505437143/', R + 'B507953477/', R + 'B511283470/', R + 'B513423267/', R + 'B513930905/', R + 'B526883136/', R + 'B529038352/', R + 'B535658909/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only via TableCheck; seven seats; hours vary.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区栄町359-1 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.027446, 135.769051); cross-checked: GSI 京都府京都市上京区栄町359番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505437143/', R + 'B513930905/', R + 'B526883136/'],
    price_note: 'Prices from 2025–2026 reviews; the menu changes with the season.', last_checked: TODAY, items: [
      it('', '', 'Seasonal dessert course', '¥6,680', 'Courses', 'ask', 'ask', 'April 2025.', 'dessert_course'),
      it('', '', 'Shine Muscat parfait', '¥2,980', 'Parfaits', 'ask', 'ask', 'September 2025.', 'muscat_parfait'),
      it('', '', 'Sakura and strawberry parfait', '¥2,880', 'Parfaits', 'ask', 'ask', 'April 2026; white-miso cream.', 'sakura_parfait'),
      it('', '', 'Natsumikan and fuki-no-to vacherin', '¥1,800', 'Desserts', 'ask', 'ask', 'April 2026; meringue and ice cream.', 'vacherin'),
    ] }, {
    cuisine: 'カウンターで目の前で作るアシェットデセール (2025年7月)・季節のデザートコース: 2025年4月は6,680円 (白味噌のクレームブリュレ、菜の花と八朔のタルト、本みりんのパフェ、春菊のアイス、苺と白味噌のクレープ、お茶菓子)、新年のコース5,500円 (2025年1月)、桃のスープやショートケーキの桃のコース (2025年8月)、秋の桃といちじくと秋野菜のコース (2026年9月)・パフェ: シャインマスカット2,980円 (2025年9月)、桜と苺2,880円 (2026年4月)、桃 (2025年7月、2026年8月)、栗 (2026年9月)・夏みかんとふきのとうのヴァシュラン1,800円 (2026年4月)・みかんのミルクレープ (2026年8月)、栗のミルフィーユ (2026年10月)・焼き菓子',
    neighborhood: '河原町今出川の近く。出町柳駅から徒歩8分',
    gf_detail: '要確認。クレープ、タルト、メレンゲ、クッキー、フィナンシェを使うアシェットデセールとパフェ。グルテンの情報はない (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。クリーム、チーズのムース、ミルクレープ、クレームブリュレ、アイスが中心。グラニテや果物のパートもあるが、乳や卵を使わないとは書かれていない (2025〜2026年の口コミ)。',
    notes: '[アシェットデセール・河原町今出川近く、デザートコースとパフェ] アンティークの家具とドライフラワーの7席のカウンター。フランス料理の経験がある店主が、果物に野菜や味噌、ハーブを合わせた季節のデザートコースやパフェを目の前で仕上げる。TableCheck での完全予約制で、枠はすぐ埋まる。',
  });
}

// ================================================================ 好文舍
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26031794/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://koubunsha.amebaownd.com/';
  const H = day(['10:30', '18:00']);
  put({
    id: 'kyoto_koubunsha_goshonishi', name: '好文舍 (Koubunsha)', category: 'OMNI',
    lat: 35.024002, lng: 135.75356, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Drinks plus toast (anko, butter), wagashi and seasonal specials such as white-miso zoni; sweets brought in from OHAYO biscuit are allowed with a drink (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Coffee, green tea, matcha, shiso juice and homemade ume juice are plant-based; the toast comes with butter and the New Year zoni with bonito flakes (2025–2026 reviews).',
    hours_raw: '10:30–18:00; closed Sunday (official site; Tabelog); some exhibitions open on a Sunday (official site, June 2026). No reservations (Tabelog), though a table for a family with children can be booked by phone (Tabelog). Cards, IC cards and QR payments (Tabelog). 11 seats: 5 in the coffee room, 6 in the tatami room; all seating is Japanese-style, shoes off, with floor chairs on request (Tabelog; April 2025). Children welcome — no order needed for a child; milk and baby food may be brought in (Tabelog). Down a narrow alley about 5 min from the Horikawa-Nakadachiuri bus stop (Tabelog). Opened 1 December 2018 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Goshonishi, west of the Imperial Palace — 5 min from the Horikawa-Nakadachiuri bus stop',
    cuisine: 'A café and gallery in a Meiji-era townhouse that was once a kimono dyeing and cleaning shop, with a small garden and tatami rooms (April 2025) · hand-drip coffee ¥600 and anko toast ¥350 (January 2025); butter toast ¥250, drinks from ¥650, homemade ume juice with soda (September 2025) · matcha latte ¥650 (March 2025); green tea in a glass pot, nerikiri, anko-butter toast (January 2025); usucha with the day’s wagashi (October 2025) · New Year white-miso zoni ¥700 and a hanabira-mochi set ¥1,300 (January 2026) · cakes from OHAYO biscuit nearby may be brought in with a drink (2025 reviews)',
    website: SITE, gmaps: gm('好文舍 上京区甲斐守町'), menu_url: SITE,
    notes: '[Café and gallery · Goshonishi, an old townhouse down an alley] A quiet tatami café at the end of a narrow alley west of the Imperial Palace, in a Meiji-era townhouse with a small garden and changing craft exhibitions. Coffee, matcha and green tea with anko toast or the day’s wagashi, and you may bring cakes from OHAYO biscuit nearby. Shoes off; closed Sunday.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed)'], origin: null,
      background: 'The official site calls it a café and gallery west of the Imperial Palace. An April 2025 reviewer describes a Meiji-era townhouse once used as a kimono dyeing and cleaning shop, with an alcove, antiques and works by Kyoto-linked artists for sale; the owner took orders (April 2025) and shared banana chips from a friend’s antique shop (September 2025).',
      philosophy: null, specialty: 'Anko toast; green tea and matcha.',
      anecdotes: [
        { text: 'A January 2025 visitor called the glass-pot green tea the best tea of a lifetime.', source: R + 'B500424096/' },
        { text: 'An April 2025 guest, sent down the street by the staff at OHAYO biscuit, almost missed the noren-hung entrance.', source: R + 'B505415723/' },
      ],
      japanese_sources_summary: '公式サイト: 好文舍、京都御所西のカフェ・ギャラリー、営業10:30〜18:00、日曜定休、展示会の案内。食べログ: カフェ・喫茶店、上京区甲斐守町118、堀川中立売バス停から徒歩5分、予約不可、カード・電子マネー・QR決済可、11席 (喫茶室5、座敷6)、全席和室で座椅子あり、子ども連れ歓迎、2018年12月1日オープン。口コミ (2025〜2026年、英語): 路地奥の明治の町家、もとは着物の染めと洗いの店、小さな庭、ギャラリー、ハンドドリップのコーヒー600円、あんトースト350円、バタートースト250円、抹茶ラテ650円、自家製の梅ジュース、練り切り、白味噌の雑煮700円、花びら餅のセット1,300円、OHAYO biscuit のお菓子の持ち込み可 (ドリンクの注文が必要)。',
      confidence: 'medium', sources: [SITE, TB, R + 'B499611158/', R + 'B500424096/', R + 'B501487604/', R + 'B503933767/', R + 'B505415723/', R + 'B513908292/', R + 'B516208473/', R + 'B520068319/', R + 'B536321825/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; tatami seating with floor chairs; hard to find down an alley.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区甲斐守町118',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (2026 exhibitions) and Tabelog; reviews dated through January 2026.' },
    pin_source: `Tabelog ${TB} (35.024002, 135.75356); cross-checked: GSI 京都府京都市上京区甲斐守町118番地 (lot) 47m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B499611158/', R + 'B503933767/', R + 'B513908292/', R + 'B520068319/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Coffee', '¥600', 'Drinks', 'gf', 'vegan', 'January 2025.', 'coffee'),
      it('', '', 'Matcha latte', '¥650', 'Drinks', 'ask', 'ask', 'March 2025.', 'matcha_latte'),
      it('', '', 'Anko toast', '¥350', 'Food', 'no', 'ask', 'January 2025.', 'anko_toast'),
      it('白味噌の雑煮', '', 'White-miso zoni (New Year)', '¥700', 'Seasonal', 'ask', 'no', 'January 2026; bonito flakes.', 'zoni'),
    ] }, {
    cuisine: 'もとは着物の染めと洗いの店だった明治の町家のカフェとギャラリー。小さな庭と座敷 (2025年4月)・ハンドドリップのコーヒー600円、あんトースト350円 (2025年1月)。バタートースト250円、ドリンクは650円から、自家製梅ジュースのソーダ割り (2025年9月)・抹茶ラテ650円 (2025年3月)。ガラスのポットの緑茶、練り切り、あんバタートースト (2025年1月)。薄茶とその日の和菓子 (2025年10月)・新年の白味噌の雑煮700円、花びら餅のセット1,300円 (2026年1月)・近くの OHAYO biscuit のケーキはドリンクを頼めば持ち込める (2025年の口コミ)',
    neighborhood: '御所西。堀川中立売バス停から徒歩5分',
    gf_detail: '要確認。ドリンクにトースト (あん、バター)、和菓子、白味噌の雑煮などの季節のもの。OHAYO biscuit のお菓子はドリンクを頼めば持ち込める (2025〜2026年の口コミ)。',
    vegan_detail: '要確認。コーヒー、緑茶、抹茶、しそジュース、梅ジュースは植物性。トーストにはバター、新年の雑煮にはかつお節 (2025〜2026年の口コミ)。',
    notes: '[カフェとギャラリー・御所西、路地奥の町家] 御所の西、細い路地の奥にある静かな座敷のカフェ。小さな庭のある明治の町家で、工芸の展示が入れ替わる。コーヒー、抹茶、緑茶にあんトーストやその日の和菓子。近くの OHAYO biscuit のケーキも持ち込める。靴を脱いで上がる。日曜定休。',
  });
}

// ================================================================ メンヤ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26003114/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['18:00', '21:30']);
  put({
    id: 'kyoto_menya_nijo', name: 'メンヤ (Menya)', category: 'OMNI',
    lat: 35.014801, lng: 135.742348, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pasta restaurant — wheat pasta with bread and salad at lunch, pizza at dinner (2024–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Two to four pastas a day, mostly oil- or tomato-based; most described pastas have bacon, sausage, fish or cheese, and nothing is described as vegan (2025–2026 reviews).',
    hours_raw: 'Lunch 12:00–14:30 (L.O. 14:00); dinner 18:00–21:30 (L.O. food 21:00, drinks 21:30); closed Tuesday and public holidays (Tabelog). Reservations accepted (Tabelog). Cash only — no cards, e-money or QR payments (Tabelog). 18 seats: 6 at the counter, 12 at tables (Tabelog). On the west side of Senbon-Oshikoji, under 10 min north of Nijo Station (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Senbon-Oshikoji — under 10 min north of Nijo Stn',
    cuisine: 'A neighbourhood pasta and Italian restaurant — once a thick-noodle pasta shop, Italian under a new chef for more than ten years (October 2026) · lunch sets of the day’s pasta with salad and bread, about ¥1,000 (June 2026); special pasta lunch with a soufflé omelette ¥1,300, large +¥300 (October 2026) · pastas such as amatriciana (March 2026), carbonara and tomato cream (February 2025), bacon and spring cabbage in butter-cheese sauce (May 2025), shirasu and oil sardine (October 2026) · famous fluffy cheese omelette in a cocotte ¥780 (October 2026) · grilled meat of the day, such as venison or Iberico pork (October 2026) · small dinner course with salad, omelette, pasta and pizza (October 2024)',
    website: null, gmaps: gm('メンヤ 中京区聚楽廻南町'), menu_url: null,
    notes: '[Pasta · north of Nijo Station, the fluffy cheese omelette] A casual local Italian a short walk north of Nijo Station: a few pastas of the day served as a cheap lunch set with salad and bread, a much-loved soufflé-style cheese omelette baked in a cocotte, and grilled meats at night. Cash only; closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Manager (unnamed)'], origin: null,
      background: 'A longtime regular (October 2026) remembers Menya opening as a pasta shop with homemade thick noodles; the name stayed, the chef changed, and it has been an Italian restaurant for more than ten years. A March 2025 regular calls the manager handsome, polite and friendly, and thanks at the register despite the rush.',
      philosophy: null, specialty: 'Pasta of the day; soufflé cheese omelette.',
      anecdotes: [
        { text: 'A March 2025 regular who skips the salad sometimes gets a little extra pasta instead.', source: R + 'B480255914/' },
        { text: 'An October 2026 regular never orders pasta when alone — just the omelette and the meat of the day.', source: R + 'B112486733/' },
      ],
      japanese_sources_summary: '食べログ: メンヤ、パスタ・イタリアン、中京区聚楽廻南町1-9-104、二条駅から北へ徒歩10分以内、千本押小路の西側、昼12:00〜14:30 (L.O.14:00)、夜18:00〜21:30、火曜・祝日休み、予約可、現金のみ、18席 (カウンター6、テーブル12)、禁煙。口コミ (2024〜2026年、英語): 自家製の太麺のパスタの店として開店、料理人が代わってイタリアンになって10年以上、日替わりのパスタのランチ約1,000円、オムレツ付きのパスタランチ1,300円、大盛+300円、アマトリチャーナ、カルボナーラ、チーズのふわふわオムレツ780円、日替わりの肉のグリル、ディナーの小さなコース。',
      confidence: 'medium', sources: [TB, R + 'B112486733/', R + 'B122705730/', R + 'B480255914/', R + 'B493424519/', R + 'B501906271/', R + 'B502009758/', R + 'B507255709/', R + 'B529650489/', R + 'B536982561/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual neighbourhood Italian; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区聚楽廻南町1-9-104',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.014801, 135.742348); cross-checked: GSI 京都府京都市中京区聚楽廻南町1番地 (lot) 46m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B112486733/', R + 'B536982561/', R + 'B529650489/'],
    price_note: 'Prices from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Lunch: pasta of the day with salad and bread', 'about ¥1,000', 'Lunch', 'no', 'ask', 'June 2026.', 'pasta_lunch'),
      it('', '', 'Special pasta lunch with omelette', '¥1,300', 'Lunch', 'no', 'no', 'October 2026; large +¥300.', 'special_lunch'),
      it('', '', 'Famous fluffy cheese omelette', '¥780', 'À la carte', 'ask', 'no', 'October 2026.', 'omelette'),
    ] }, {
    cuisine: '近所のパスタとイタリアンの店。もとは太麺のパスタの店で、料理人が代わって10年以上イタリアン (2026年10月)・日替わりのパスタにサラダとパンのランチ、約1,000円 (2026年6月)。ふわふわのオムレツ付きのパスタランチ1,300円、大盛+300円 (2026年10月)・アマトリチャーナ (2026年3月)、カルボナーラ、トマトクリーム (2025年2月)、ベーコンと春キャベツのバターチーズソース (2025年5月)、しらすとオイルサーディン (2026年10月)・ココットで焼くチーズのふわふわオムレツ780円 (2026年10月)・鹿肉やイベリコ豚など日替わりの肉のグリル (2026年10月)・サラダ、オムレツ、パスタ、ピザのディナーの小さなコース (2024年10月)',
    neighborhood: '千本押小路。二条駅から北へ徒歩10分以内',
    gf_detail: 'グルテンフリーではない。小麦のパスタの店で、ランチにはパンとサラダ、夜はピザも (2024〜2026年の口コミ)。',
    vegan_detail: '要確認。日替わりのパスタは2〜4種で、オイル系かトマト系が中心。書かれているパスタはベーコン、ソーセージ、魚、チーズを使うものが多く、ヴィーガンのものは書かれていない (2025〜2026年の口コミ)。',
    notes: '[パスタ・二条駅の北、ふわふわのチーズオムレツ] 二条駅から北へすぐの気取らないイタリアン。日替わりのパスタにサラダとパンの手頃なランチ、ココットで焼くスフレのようなチーズオムレツが人気で、夜は肉のグリルも。現金のみ、火曜定休。',
  });
}

// ================================================================ とんかつ 棹 京都五条店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26041838/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '18:00']); const B = day(['11:30', '20:00']);
  put({
    id: 'kyoto_tonkatsu_taku_gojo', name: 'とんかつ 棹 京都五条店 (Tonkatsu Taku, Kyoto Gojo)', category: 'OMNI',
    lat: 34.998161, lng: 135.73674, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded, deep-fried pork cutlets and shrimp tempura (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork cutlets with pork-miso soup in every set (2025–2026 reviews).',
    hours_raw: 'Monday and Thursday 11:30–18:00 (L.O. 17:30); Friday and Saturday 11:30–20:00 (L.O. 19:30); Sunday 11:30–15:00 (L.O. 14:30); closed Tuesday and Wednesday and over the New Year holidays (Tabelog). Reservations accepted (Tabelog); a waiting area when full (October 2026). Cards and QR payments; no e-money (Tabelog). 5 counter seats (Tabelog). English menu (Tabelog). Children welcome, counter only (Tabelog). About 7 min on foot from JR Tambaguchi Station (Tabelog). Opened 12 September 2024 (Tabelog).',
    hours: { 0: A, 3: A, 4: B, 5: B, 6: day(['11:30', '15:00']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Chudoji, near Gojo — 7 min from JR Tambaguchi Stn',
    cuisine: 'A five-seat tonkatsu counter, the Kyoto branch of a Shiga tonkatsu shop (January and July 2026) · loin cutlet gozen ¥2,200, tenderloin (2 pieces) gozen ¥2,200, half-and-half at the same price, rib-roast gozen ¥2,680 (July 2026) · the regulars’ favourite: Spencer roll of Kyoto Mochi Pork (2025–2026) · Manpuku gozen with shrimp tempura and two cutlets (August 2026) · cutlets fried slowly at low temperature, best with salt (July 2026) · free refills of rice and cabbage, pork-miso soup, pickles, basil mayonnaise for the vegetables, yuzu sorbet to finish (2025–2026)',
    website: null, gmaps: gm('とんかつ 棹 京都五条店'), menu_url: null,
    notes: '[Tonkatsu · near Tambaguchi, a five-seat counter] A tiny counter, the Kyoto branch of a Shiga tonkatsu shop, frying tender, low-temperature pork cutlets — loin, tenderloin, rib roast and a much-loved Spencer roll — as ¥2,200–2,680 sets with free rice and cabbage, pork-miso soup and a yuzu sorbet. Book ahead; closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed)'], origin: null,
      background: 'Reviewers call it a branch of a famous Shiga restaurant (July 2026) and of what one thought the best tonkatsu in Otsu (January 2026); Tabelog’s name search lists Taku shops at Shiyakushomae, Kyoto Gojo and Seta. An August 2025 regular praises the service of the owner and the owner’s wife; an October 2026 regular says the chef remembers past conversations.',
      philosophy: null, specialty: 'Spencer roll; loin and tenderloin cutlets.',
      anecdotes: [
        { text: 'An October 2026 regular who had once mentioned loving tamago kake gohan found the chef still remembered it.', source: R + 'B504380992/' },
        { text: 'An October 2025 diner asked for a third cabbage refill and got it without hesitation.', source: R + 'B516383495/' },
      ],
      japanese_sources_summary: '食べログ: とんかつ 棹 京都五条店、とんかつ、下京区中堂寺庄ノ内町1-1、JR丹波口駅から徒歩7分、月・木 11:30〜18:00、金・土 11:30〜20:00、日 11:30〜15:00、火・水定休、年末年始休み、予約可、カード・QR決済可、カウンター5席、英語メニューあり、2024年9月12日オープン。口コミ (2025〜2026年、英語): 滋賀の有名店の支店、ロースかつ御膳2,200円、ヒレかつ (2枚) 御膳2,200円、半々も同じ値段、リブロース御膳2,680円、Kyoto Mochi Pork の Spencer roll、エビフライの満腹御膳、低温でじっくり揚げる、ご飯とキャベツはおかわり自由、豚汁、柚子のシャーベット。',
      confidence: 'medium', sources: [TB, 'https://tabelog.com/en/rstLst/?sw=%E3%81%A8%E3%82%93%E3%81%8B%E3%81%A4+%E6%A3%B9', R + 'B498234458/', R + 'B504380992/', R + 'B516383495/', R + 'B521191362/', R + 'B528253010/', R + 'B531411368/', R + 'B531749636/', R + 'B533378423/', R + 'B536392876/', R + 'B537035454/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Five counter seats — book ahead; English menu.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区中堂寺庄ノ内町1-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `GSI 京都府京都市下京区中堂寺庄ノ内町1番地 (lot) (34.998161, 135.73674). Tabelog ${TB} gives (34.998334, 135.739515), 253m east, which OSM Nominatim reverse-geocodes to the neighbouring 壬生松原町; OSM has no point for the shop, so the lot is used and marked approximate; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531749636/'],
    price_note: 'Prices from a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Loin cutlet gozen', '¥2,200', 'Gozen', 'no', 'no', 'July 2026.', 'rosu_gozen'),
      it('', '', 'Tenderloin cutlet (2 pieces) gozen', '¥2,200', 'Gozen', 'no', 'no', 'July 2026; half-and-half at the same price.', 'hire_gozen'),
      it('', '', 'Rib-roast gozen', '¥2,680', 'Gozen', 'no', 'no', 'July 2026.', 'rib_gozen'),
    ] }, {
    cuisine: '5席のとんかつのカウンター。滋賀のとんかつ店の京都の支店 (2026年1月・7月)・ロースかつ御膳2,200円、ヒレかつ (2枚) 御膳2,200円、半々も同じ値段、リブロース御膳2,680円 (2026年7月)・常連のお気に入りは Kyoto Mochi Pork の Spencer roll (2025〜2026年)・エビフライとかつ2種の満腹御膳 (2026年8月)・低温でじっくり揚げ、塩で食べるのがおすすめ (2026年7月)・ご飯とキャベツはおかわり自由、豚汁、漬物、野菜にはバジルのマヨネーズ、締めに柚子のシャーベット (2025〜2026年)',
    neighborhood: '中堂寺、五条の近く。JR丹波口駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。衣をつけて揚げた豚かつとエビフライ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない。豚かつと、どの御膳にも豚汁 (2025〜2026年の口コミ)。',
    notes: '[とんかつ・丹波口近く、5席のカウンター] 滋賀のとんかつ店の京都の支店の小さなカウンター。低温で揚げるやわらかい豚かつ (ロース、ヒレ、リブロース、人気の Spencer roll) を2,200〜2,680円の御膳で。ご飯とキャベツはおかわり自由、豚汁と柚子のシャーベット付き。予約がおすすめ、火・水定休。',
  });
}

save();
