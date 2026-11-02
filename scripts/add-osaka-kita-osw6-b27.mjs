// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 27.
//   + うまそうなラーメン屋 Umasou na Ramen Ya (creamy chicken-paitan ramen in a basement, 太融寺町; no ramen block, see below)
//   + 鶏匠 暁 Torisho Akatsuki (binchotan yakitori and mizutaki, Togano-cho)
//   + 堂島雪花菜 Dojima Kirazu (one-man Japanese kitchen with ¥1,100 lunch trays and sake by the dish, 堂島 3-chome)
//   + 酒肆 門 Shushi Mon (kappo izakaya, Tabelog izakaya WEST 100 2025–2026, Nishi-Tenma)
//   - らーめん ぎょうざ 古潭 中津本店 27102127 skipped: flagship of the Kotan ramen chain, already in data (Namba Walk, Namba CITY).
//   - カンジャンケジャン渡 大阪西天満店 27152595 skipped: branch of the Watari kanjang-gejang chain, already in data (Shinsaibashi).
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b26): odd ids in order 27102127, 27152595,
//   27135649, 27062881, 27003849, 27130325. None of the four drafted is in data/osaka.json (grep by id, name and address,
//   2026-11-02).
//   Chain check: Torisho Akatsuki shows no link to 鳥焼酒場 暁 (Shinsaibashi, in data) in a web search; Umasou, Kirazu and
//   Mon show no other shop (Mon moved here from Ohatsu Tenjin; its lunch runs as Shokudo Murakami, May 2026).
//   Umasou na Ramen Ya is ramen-genre, but no source speaks to the broth's oiliness or aroma, so the ramen block is left off.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-27');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27102127', 'らーめん ぎょうざ 古潭 中津本店: flagship of the Kotan ramen chain, already in data (Namba Walk, Namba CITY).');
skip('27152595', 'カンジャンケジャン渡 大阪西天満店: branch of the Watari kanjang-gejang chain, already in data (Shinsaibashi).');

// ================================================================ うまそうなラーメン屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270103/27135649/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '15:00'], ['18:00', '21:00']);
  put({
    id: 'osaka_umasou_na_ramen_ya', name: 'うまそうなラーメン屋 (Umasou na Ramen Ya)', category: 'OMNI',
    lat: 34.702049, lng: 135.505618, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles; mazesoba too.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: broth simmered from chicken, pork and beef; chicken and pork chashu.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:45) and 18:00–21:00 (last order 20:45); temporary closures on Instagram (Tabelog). No reservations; ticket machine, which did not take ¥1,000 notes (October 2026); cash or PayPay, no cards (Tabelog). No charge (Tabelog). Opened May 10, 2023 (Tabelog). 16 seats: 8 at the counter, 8 at tables; non-smoking (Tabelog). Queues of about 4–6 at lunch and weekend evenings (2023–2026). A stamp card gives a free bowl after three visits (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: '太融寺町, ニュープラザビル B1F — 4 min from Whity Umeda exit M-14, 7 min from Higashi-Umeda Stn',
    cuisine: 'Creamy chicken-paitan ramen in a café-like basement (Tabelog) · rich creamy ramen in shoyu or salt, the broth simmered eight hours from chicken, pork and beef, frothy, with chicken and pork chashu cooked at low temperature, green onion and sweet onion at the bottom; medium-thick, firm noodles (2023–2026) · creamy shoyu ramen with rice ¥1,200 (October 2026); ramen ¥1,000 with a ¥200 soy-sauce "risotto" of rice, cheese and a burner (December 2023); a grilled-cheese risotto-style rice to soak up the broth (October 2026) · autumn-limited Taiwanese mazesoba, not spicy, with diced onion, cubed chashu, nori, fish powder and rice; a horumon mazesoba (October 2026)',
    website: null, gmaps: gm('うまそうなラーメン屋 太融寺町'), menu_url: null,
    notes: "[Ramen · Umeda, Taiyujicho, creamy chicken paitan in a basement] A sixteen-seat basement ramen shop near Higashi-Umeda, opened in 2023, with a café look and a queue at lunch. The draw is a creamy, frothy paitan simmered from chicken, pork and beef, in shoyu or salt, with low-temperature chicken and pork chashu and sweet onion hidden underneath; finish the small pool of broth over rice with toasted cheese. About ¥1,000–1,200; an autumn Taiwanese mazesoba (not spicy) has its own fans. Most diners rave about the richness; one longtime visitor found less soup and drier chashu in October 2026. Ticket machine; cash or PayPay.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null, background: 'Shop text (Tabelog): a hidden ramen shop 7 minutes from Higashi-Umeda, in a basement with a café vibe, for solo diners to enjoy chicken paitan ramen. Opened May 10, 2023. An October 2026 diner read the shop\'s notes on simmering chicken, pork and beef for eight hours.', philosophy: null, specialty: 'Creamy chicken-paitan ramen.',
      anecdotes: [
        { text: '"One sip and you\'re overwhelmed by its intense creaminess, surpassing even Tenkaippin." — October 2026.', source: R + 'B538064538/' },
        { text: '"The noodles had a low water content, providing the perfect texture and bite." — October 2026.', source: R + 'B537735138/' },
        { text: '"The chashu, both chicken breast and pork chuck eye roll, was overcooked and dry compared to before." — October 2026, a return visit.', source: R + 'B475670546/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B475670546/', R + 'B535385796/', R + 'B537185918/', R + 'B537438637/', R + 'B537451365/', R + 'B537515589/', R + 'B537735138/', R + 'B537836812/', R + 'B538064538/', R + 'B538203366/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine; staff take orders in the queue (October 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区太融寺町2-21 ニュープラザビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区太融寺町2番21号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538203366/', R + 'B475670546/'],
    price_note: 'Prices from October 2026 and December 2023 reviews.', last_checked: TODAY, items: [
      it('', '', 'Rich creamy shoyu ramen with rice', '¥1,200', 'Ramen', 'no', 'no', 'October 2026 review.', 'creamy_shoyu_rice'),
      it('', '', 'Chicken paitan ramen', '¥1,000', 'Ramen', 'no', 'no', 'December 2023 review.', 'paitan'),
      it('', '', 'Soy-sauce cheese "risotto" rice (add-on)', '+¥200', 'Rice', 'ask', 'no', 'December 2023 review.', 'risotto'),
    ] }, {
    cuisine: 'カフェのような地下のクリーミーな鶏白湯ラーメン (食べログ)・醤油か塩の濃厚クリーミーラーメン、鶏、豚、牛を8時間煮込んだ泡立つスープ、低温調理の鶏と豚のチャーシュー、青ねぎ、底に甘い玉ねぎ、中太で歯ごたえのある麺 (2023〜2026年)・濃厚クリーミー醤油ラーメンとライス1,200円 (2026年10月)、ラーメン1,000円にご飯とチーズをバーナーで炙る醤油のリゾット200円 (2023年12月)、スープをかける焼きチーズのリゾット風 (2026年10月)・秋限定の辛くない台湾まぜそば、角切りのチャーシュー、玉ねぎ、海苔、魚粉、ご飯つき、ホルモンまぜそば (2026年10月)',
    neighborhood: '太融寺町、ニュープラザビル 地下1階。Whity Umeda の M-14出口から徒歩4分、東梅田駅から7分',
    gf_detail: 'グルテンフリーではありません。小麦の麺、まぜそばも。',
    vegan_detail: 'ヴィーガンではありません。鶏、豚、牛を煮込んだスープ、鶏と豚のチャーシュー。',
    notes: '[ラーメン・梅田太融寺町、地下のクリーミーな鶏白湯] 東梅田の近くの地下にある16席のラーメン店で、2023年オープン。カフェのような店で、昼は行列。目当ては鶏、豚、牛を煮込んだ泡立つクリーミーな白湯で、醤油か塩、低温調理の鶏と豚のチャーシュー、底には甘い玉ねぎ。少なめのスープは最後に炙りチーズのご飯にかけて。1,000〜1,200円ほどで、秋の辛くない台湾まぜそばにもファンがいる。濃厚さを絶賛する声が多い一方、2026年10月に久しぶりに来た人はスープが減りチャーシューがパサついたと感じた。食券制で現金か PayPay。',
  });
}

// ================================================================ 鶏匠 暁
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27062881/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://www.torisyo-akatsuki.com/';
  const WD = day(['17:00', '02:00']), SA = day(['17:00', '24:00']);
  put({
    id: 'osaka_torisho_akatsuki_togano', name: '鶏匠 暁 (Torisho Akatsuki)', category: 'OMNI',
    lat: 34.701125, lng: 135.505525, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Skewers are salted to suit each cut, some with sauces; cartilage kara-age and oyakodon are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken, with mizutaki in a chicken broth; grilled seasonal vegetables are on the menu, and Tabelog lists vegetarian options with no detail.',
    hours_raw: 'Tabelog: Mon–Fri 17:00–2:00 (food last order 1:00); Sat 17:00–24:00; holidays 17:00–23:00; closed Sundays, plus some days at Obon and New Year; open until ingredients run out. The official site gives dinner 17:00–23:00 (last order 22:00) and lunch 11:30–14:00 (Tue–Fri on one page); the two differ. Bookings for two may be seated at the counter; 2-hour limit when busy (Tabelog). Appetizer ¥330 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), PayPay; no e-money (Tabelog). 22 seats; heated tobacco only inside, an ashtray for cigarettes at the entrance (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Togano-cho, 兎我野ビル 1F — 7 min from Higashi-Umeda (exit M-14) and Minami-Morimachi Stns',
    cuisine: 'Yakitori of morning-slaughtered chicken over Kishu binchotan, each cut salted and timed by the chef; seasonal vegetables from the farm; oyakodon to finish; mizutaki hot pot in winter (official site; Tabelog) · courses with all-you-can-drink (Tabelog, tax included): Akatsuki ¥5,000 (10 items); Takumi with a sashimi platter ¥5,500 (12 items); Gokumi with mizutaki and yakitori ¥6,000 (9 items) · coupon offers: all-you-can-drink ¥1,650; chicken sashimi platter ¥1,078; limited white-liver sashimi ¥748; sansho highball (Tabelog) · chicken sashimi of gizzard, heart, liver and tenderloin; negima; tsukune with egg yolk; cartilage kara-age; cold tomato, asparagus; fluffy oyakodon; milky collagen chicken soup (2025–2026)',
    website: WEB, gmaps: gm('鶏匠 暁 兎我野町'), menu_url: null,
    notes: "[Yakitori · Togano-cho, morning-fresh chicken over binchotan] A twenty-two-seat yakitori izakaya in Togano-cho, east of Umeda, built on chicken slaughtered that morning and grilled over Kishu binchotan, with the chef adjusting salt and time for each cut. Start with a chicken sashimi platter and the limited white-liver sashimi, then skewers like negima and egg-yolk tsukune, grilled seasonal vegetables, and a creamy oyakodon or the milky collagen soup to finish; in winter there is a mizutaki hot pot. Courses with drinks are ¥5,000–6,000, good value for the area. Tabelog lists hours to 2 am on weekdays, the shop's site 23:00.",
    chef_bio: { chef_name: null, roles: ['Chef and manager (unnamed) at the grill (2025–2026)'], origin: null, background: 'Official site: morning-slaughtered chicken grilled over top-grade Kishu binchotan at up to 1,000°C; cut, skewered and grilled differently for each ingredient; seasonal vegetables direct from producers; oyakodon is the regulars\' favourite finish; hot pot in winter. Tabelog shop text: the chef personally grills every skewer, adjusting saltiness and time for each part.', philosophy: 'Yakitori made with care and no shortcuts (official site).', specialty: 'Chicken sashimi; white liver; oyakodon.',
      anecdotes: [
        { text: '"The chef skillfully grills in silence, exuding coolness." — December 2025.', source: R + 'B522084547/' },
        { text: '"The limited quantity of white liver stands out, along with the fresh chicken sashimi" — January 2026.', source: R + 'B521348798/' },
        { text: '"To finish off, I had the \'Fluffy and Creamy Oyakodon\' and \'Milky Collagen Soup\'!" — November 2025.', source: R + 'B516814356/' },
      ],
      japanese_sources_summary: '公式サイト: こだわりの朝引き鶏を最高級の紀州備長炭で焼く、素材ごとに切り方、打ち方、焼き方を変える、産地直送の旬の野菜、締めは常連の締め率No.1の親子丼、冬は鳥スープの鍋。営業時間は昼11:30〜14:00、夜17:00〜23:00 (L.O.22:00)、日曜休み。',
      confidence: 'medium', sources: [TB, WEB, R + 'B488336361/', R + 'B516814356/', R + 'B516972638/', R + 'B519292610/', R + 'B519293097/', R + 'B520451323/', R + 'B521348798/', R + 'B522084547/', R + 'B533664132/', R + 'B535526176/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the hot pot and sauces (2025–2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区兎我野町3-19 兎我野ビル1階',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and official site; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区兎我野町3番19号 (go) 0m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses and coupon prices from the Tabelog listing (tax included); ¥330 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Akatsuki course with all-you-can-drink, 10 items', '¥5,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'akatsuki_course'),
      it('', '', 'Gokumi course: mizutaki and yakitori with all-you-can-drink, 9 items', '¥6,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'gokumi_course'),
      it('', '', 'Chicken sashimi platter', '¥1,078', 'Dishes', 'ask', 'no', 'Tabelog (coupon price).', 'tori_sashimi'),
      it('', '', 'White-liver sashimi (limited)', '¥748', 'Dishes', 'ask', 'no', 'Tabelog (coupon price).', 'white_liver'),
    ] }, {
    cuisine: '朝引きの鶏を Kishu の備長炭で焼く焼き鳥、部位ごとに塩と焼き時間を変える、産地直送の旬の野菜、締めは親子丼、冬は水炊き (公式サイト、食べログ)・飲み放題つきのコース (食べログ、税込): 暁コース5,000円 (10品)、刺身の盛り合わせつきの匠コース5,500円 (12品)、水炊きと焼き鳥の極味コース6,000円 (9品)・クーポン: 飲み放題1,650円、鶏刺しの盛り合わせ1,078円、数量限定の白レバーの造り748円、山椒ハイボール (食べログ)・砂肝、ハツ、レバー、ささみの鶏刺し、ねぎま、卵黄のつくね、軟骨の唐揚げ、冷やしトマト、アスパラ、ふわとろの親子丼、白濁のコラーゲンの鶏スープ (2025〜2026年)',
    neighborhood: '兎我野町、兎我野ビル 1階。東梅田駅 (M-14出口) と南森町駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。串は部位ごとの塩とたれ、軟骨の唐揚げや親子丼もある。',
    vegan_detail: 'ヴィーガンではありません。鶏肉の店で、水炊きは鶏のスープ。焼いた旬の野菜はあり、食べログにはベジタリアン向けのメニューありとあるが、詳しい説明はない。',
    notes: '[焼き鳥・兎我野町、朝引きの鶏を備長炭で] 梅田の東、兎我野町にある22席の焼き鳥の居酒屋で、その朝さばいた鶏を Kishu の備長炭で焼き、部位ごとに塩と焼き時間を料理人が加減する。まずは鶏刺しの盛り合わせと数量限定の白レバーの造り、それからねぎまや卵黄のつくね、焼いた旬の野菜、締めはふわとろの親子丼か白濁のコラーゲンスープ。冬は水炊きも。飲み放題つきのコースは5,000〜6,000円で、このあたりではお得。食べログでは平日は深夜2時まで、店のサイトでは23時まで。',
  });
}

// ================================================================ 堂島雪花菜
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27003849/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:00'], ['17:30', '22:00']), D = day(['17:30', '22:00']);
  put({
    id: 'osaka_dojima_kirazu', name: '堂島雪花菜 (Dojima Kirazu)', category: 'OMNI',
    lat: 34.696065, lng: 135.490699, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Lunch trays include tempura and kakiage, simmered dishes and miso soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, dashi and egg dishes.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:30–22:00; Sat 17:30–22:00; closed Sundays; holidays by reservation; hours may change (Tabelog). Courses by reservation only (Tabelog). Opened September 13, 2005 (Tabelog). Cards (VISA, JCB, AMEX, Diners); no e-money or QR (Tabelog). 18 seats: a sunken counter for about ten and two tables; shoes off; a designated smoking area (Tabelog; 2025–2026). The owner runs it alone, so lunch may turn people away when full (February 2025; June 2026).',
    hours: { 0: LD, 1: LD, 2: LD, 3: LD, 4: LD, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '堂島 3-chome, a hidden Japanese house — 7 min from Nishi-Umeda Stn',
    cuisine: 'Japanese cooking with over 20 sakes and shochu always on, and over 30 wines, mostly Italian (Tabelog) · weekday lunch trays ¥1,100: seasonal gozen of tempura, sashimi, chawanmushi, simmered vegetables, grilled fish and rice dishes in a tiered box, with a small yokan; tempura gozen of shrimp, pumpkin and kakiage; seafood rice bowl (2024–2026) · dinner: a different sake for each dish, often rare bottles (2024); seasonal dishes explained one by one (2025)',
    website: null, gmaps: gm('堂島雪花菜'), menu_url: null,
    notes: "[Japanese · 堂島, a one-man kitchen with sake by the dish] An eighteen-seat Japanese restaurant in a hidden house-like space in 堂島 3-chome, open since 2005 and run single-handed by a stern-looking owner. Weekday lunch is a ¥1,100 tray, seasonal, tempura or a seafood bowl, with chawanmushi made to order and a little yokan; regulars call it remarkable value, though one found the tempura heavy. Dinner is the reason to book: seasonal dishes at a sunken counter, each paired with a different, often rare sake from a list of over twenty, plus Italian wines. Shoes off; holidays by reservation only; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed), working alone (2025–2026)'], origin: null, background: 'Tabelog remarks: over 20 types of sake and shochu at all times and over 30 wines, mainly Italian. Opened September 13, 2005. Diners: the owner runs the place alone (February 2025); "The owner, who has a somewhat stern demeanor, manages everything" alone (June 2026). The Tabelog listing is not shop-maintained.', philosophy: null, specialty: 'Lunch trays; sake pairing at dinner.',
      anecdotes: [
        { text: '"They serve a different Japanese sake for each dish, making for an absolutely delightful experience." — June 2024.', source: R + 'B483422298/' },
        { text: '"The chawanmushi (steamed egg custard) was prepared fresh after I placed my order." — July 2025.', source: R + 'B510753396/' },
        { text: '"Please note that shoes are not allowed inside." — June 2026.', source: R + 'B530030265/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B244611196/', R + 'B429207765/', R + 'B483422298/', R + 'B490997691/', R + 'B494251293/', R + 'B504312807/', R + 'B504948267/', R + 'B507631939/', R + 'B510753396/', R + 'B530030265/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dishes and drinks explained (2025). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区堂島3-2-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (not shop-maintained); reviews dated through June 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島三丁目2番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B507631939/', R + 'B530030265/'],
    price_note: 'Lunch from 2024–2026 reviews; dinner prices were not in the sources.', last_checked: TODAY, items: [
      it('', '', 'Seasonal gozen lunch', '¥1,100', 'Lunch', 'no', 'no', '2024–2025 reviews.', 'seasonal_gozen'),
      it('', '', 'Tempura gozen lunch', '¥1,100', 'Lunch', 'no', 'no', '2025–2026 reviews.', 'tempura_gozen'),
      it('', '', 'Seafood rice bowl lunch', '¥1,100', 'Lunch', 'ask', 'no', 'May 2025 review.', 'kaisendon'),
    ] }, {
    cuisine: '日本酒と焼酎を常時20種以上、イタリア中心のワイン30種以上をそろえる和食 (食べログ)・平日昼のお盆は1,100円: 天ぷら、刺身、茶碗蒸し、煮物、焼き魚、ご飯ものを段重に詰めた季節の御膳と小さな羊羹、海老、かぼちゃ、かき揚げの天ぷら御膳、海鮮丼 (2024〜2026年)・夜: 料理ごとに違う、めずらしい日本酒を合わせる (2024年)、旬の料理を一品ずつ説明 (2025年)',
    neighborhood: '堂島3丁目、隠れ家のような日本家屋。西梅田駅から徒歩7分',
    gf_detail: '要確認。グルテンの情報なし。昼のお盆には天ぷらやかき揚げ、煮物、味噌汁がある。',
    vegan_detail: 'ヴィーガンではありません。魚、だし、卵の料理。',
    notes: '[和食・堂島、ひとりで営む店の料理ごとの日本酒] 堂島3丁目の隠れ家のような家にある18席の和食の店で、2005年から、ちょっと強面の店主がひとりで営む。平日の昼は1,100円のお盆で、季節の御膳、天ぷら御膳、海鮮丼から選べ、茶碗蒸しは注文してから作り、小さな羊羹つき。お得だと常連は言い、天ぷらが重かったという人も。予約して行くなら夜: 掘りごたつのカウンターで旬の料理に、20種以上からめずらしい日本酒を一品ごとに合わせ、イタリアのワインも。靴を脱いで上がる。祝日は予約のみ、日曜休み。',
  });
}

// ================================================================ 酒肆 門
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270102/27130325/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:00'], ['17:00', '23:00']), SA = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_shushi_mon_nishitenma', name: '酒肆 門 (Shushi Mon)', category: 'OMNI',
    lat: 34.696151, lng: 135.501873, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Signatures include anago tempura with green onion and sweet soy, and a mackerel sandwich; ponzu dishes; a tonkatsu lunch.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and wagyu kappo.',
    hours_raw: 'Mon–Fri 11:30–14:00 and 17:00–23:00 (last order 22:30); Sat 11:30–14:00 and 17:00–22:00 (last order 21:30); closed Sundays and holidays (Tabelog). A May 2026 diner says lunch runs under another name, Shokudo Murakami, with its own Tabelog page, so this listing is for dinner. Bookings for 2 or more (Tabelog). Appetizer ¥660 (Tabelog). Opened April 1, 1995 per Tabelog; moved here from Ohatsu Tenjin (April 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, Rakuten Edy, PayPay, d Barai, Rakuten Pay (Tabelog). 14 seats at the counter and tables; non-smoking; wheelchair accessible; children welcome; takeout and delivery (Tabelog). Tabelog izakaya WEST 100 in 2025 and 2026.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SA }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Tenma, across the crossing from Kitashinchi — 4 min from Oebashi Stn, 7 min from Kitashinchi Stn',
    cuisine: 'Kappo izakaya of seasonal Japanese food and fresh seafood, with sake from top breweries and wine chosen by a sommelier (Tabelog) · courses (Tabelog, tax included): seasonal grilled-fish course with the signatures negi-ana and saba sandwich, plus one dish each from the menu ¥11,000; ¥13,200 course of 10 items; luxurious omakase ¥15,000 · signatures: negi-ana, thick crisp anago tempura under green onion with sweet soy; a mackerel sandwich with pickled red turnip (2026) · a May 2026 course: squid with corn, sashimi of bluefin, kamasu, akou, aori ika, akagai and shako, grilled sawara with daikon and myoga, Densuke anago tempura · sawara and caviar risotto (June 2026); hamo somen, tachiuo risotto, ayu rice and nodoguro on an anniversary omakase (June 2026); wagyu grilled on a magnolia leaf, swordfish risotto (June 2026); white amadai with crisp scales, figs with white miso (October 2026) · lunch: pork loin cutlet 160 g ¥1,980 (May 2026)',
    website: 'https://japanese-izakaya-restaurant-6287.business.site/', gmaps: gm('酒肆 門 西天満'), menu_url: null,
    notes: "[Izakaya · Nishi-Tenma, a kappo-grade izakaya by Kitashinchi] A fourteen-seat izakaya just across the road from Kitashinchi, moved here from Ohatsu Tenjin and on Tabelog's izakaya WEST 100 in 2025 and 2026, that cooks like a kappo: thick-cut seasonal sashimi, grilled sawara with caviar, wagyu grilled on a magnolia leaf, hamo somen in summer. Two signatures appear in every course, a crisp anago tempura buried under green onion and a mackerel sandwich with pickled turnip. Courses are ¥11,000–15,000; the young chef wears a sommelier pin and pairs wine and sake. Lunch runs separately as a set-meal shop. One diner disliked the ponzu's seasoning; most found it superb.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed), with a sommelier pin (August 2026)', 'A second cook; one diner guessed the two cooks were father and son, unconfirmed (May 2026)'], origin: null, background: 'Shop text (Tabelog): a kappo izakaya that values communication with customers; seasonal Japanese cuisine with fresh seafood; sake from top breweries and wine chosen by a sommelier; a calm white interior with counter and tables. Opened April 1, 1995 per Tabelog; relocated from Ohatsu Tenjin (April 2026 review). Lunch runs as Shokudo Murakami, with a separate Tabelog page (May 2026 review).', philosophy: 'A dish that evokes Japanese tradition and the four seasons (Tabelog).', specialty: 'Negi-ana; saba sandwich.',
      anecdotes: [
        { text: '"This dish features thick, crispy tempura anago (conger eel) paired with a mountain of green onions and a slightly sweet soy sauce" — June 2026.', source: R + 'B531013465/' },
        { text: '"The leftover ayu rice was wrapped up as onigiri (rice balls) for us to take home." — June 2026, an anniversary omakase.', source: R + 'B485877820/' },
        { text: '"the ponzu sauce had chemical seasonings, which was a letdown for me." — October 2026.', source: R + 'B538327086/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B485877820/', R + 'B528261694/', R + 'B528461049/', R + 'B528699610/', R + 'B528972484/', R + 'B530678746/', R + 'B531013465/', R + 'B533999775/', R + 'B534235815/', R + 'B538327086/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'An August 2026 visitor from overseas enjoyed it; no English menu is listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区西天満2-7-22',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区西天満二丁目7番22号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Courses from the Tabelog listing (tax included); ¥660 appetizer.', last_checked: TODAY, items: [
      it('', '', 'Seasonal grilled-fish course with negi-ana and saba sandwich', '¥11,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'course_11000'),
      it('', '', 'Course of 10 items', '¥13,200', 'Course', 'ask', 'no', 'Tabelog listing; June 2026 review.', 'course_13200'),
      it('', '', 'Luxurious omakase, 10 items', '¥15,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'omakase'),
      it('', '', 'Lunch: pork loin cutlet 160 g', '¥1,980', 'Lunch', 'no', 'no', 'May 2026 review.', 'lunch_katsu'),
    ] }, {
    cuisine: '旬の和食と新鮮な魚介の割烹居酒屋、蔵元の日本酒とソムリエが選ぶワイン (食べログ)・コース (食べログ、税込): 名物のねぎ穴とさばサンドに単品から1品ずつ選べる旬の焼き魚のコース11,000円、10品のコース13,200円、特上のおまかせ15,000円・名物: 厚くカリッとした穴子の天ぷらに山盛りのねぎと甘い醤油のねぎ穴、赤かぶの漬物のさばサンド (2026年)・2026年5月のコース: イカととうもろこし、本マグロ、カマス、アコウ、アオリイカ、赤貝、シャコの刺身、大根とみょうがの鰆の焼き物、Densuke 穴子の天ぷら・鰆とキャビアのリゾット (2026年6月)、記念日のおまかせの鱧そうめん、太刀魚のリゾット、鮎ご飯、のどぐろ (2026年6月)、朴葉焼きの和牛、カジキのリゾット (2026年6月)、白甘鯛の松笠焼き、いちじくの白味噌 (2026年10月)・昼: ロースかつ160g 1,980円 (2026年5月)',
    neighborhood: '西天満、北新地から横断歩道を渡ったところ。大江橋駅から徒歩4分、北新地駅から7分',
    gf_detail: '要確認。グルテンの情報なし。名物は甘い醤油の穴子の天ぷらとさばサンド、ポン酢の料理、昼のとんかつ。',
    vegan_detail: 'ヴィーガンではありません。魚介と和牛の割烹。',
    notes: '[居酒屋・西天満、北新地のそばの割烹のような居酒屋] 北新地から道を渡ったところにある14席の居酒屋で、お初天神から移転し、食べログの居酒屋 WEST 百名店に2025年と2026年に選ばれた。料理は割烹のようで、厚切りの旬の刺身、鰆とキャビア、朴葉焼きの和牛、夏は鱧そうめん。どのコースにも入る名物が2つ、ねぎを山盛りにしたカリッとした穴子の天ぷらと、赤かぶの漬物のさばサンド。コースは11,000〜15,000円、若い料理長はソムリエのバッジをつけ、ワインと日本酒を合わせる。昼は別の名前の定食屋になる。ポン酢の味つけが気になったという人もいるが、ほとんどの人は絶賛。',
  });
}

save();
