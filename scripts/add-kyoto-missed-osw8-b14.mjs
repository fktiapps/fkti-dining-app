// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 14.
//   + 刻シラズ Tokishirazu (Belgian beer and European dining, Yanagibaba Rokkaku; core list)
//   + 蕎麦や 竹花 Sobaya Takehana (stone-ground soba by Kennin-ji; core list)
//   + 割烹 しなとみ Kappou Shinatomi (couple-run à la carte kappo east of the Imperial Palace; notable list)
//   + 祇園楽味 Gion Rakumi (Gion Sasaki's "adult kappo izakaya"; notable list)
//   Picked 2026-11-05 after batch 13. `queue.mjs kyoto-missed next core 200`: 本家第一旭 三条河原町店 26044297 (skipped,
//   branch of a brand in data), 刻シラズ 26021929, 蕎麦や 竹花 26023687. `next notable 200`: 割烹 しなとみ 26035813, 祇園楽味
//   26023057. Same-name check first: 第一旭 has 5 shops in our crawls (three already in data); no other 刻シラズ, 竹花 or
//   しなとみ; 祇園楽味 is one of three 楽味 shops of the Gion Sasaki group (祇園楽味, 鮨楽味, 食ばぁー楽味 — official site),
//   none in data. None of the four is in data/kyoto.json: grep by name and address (井筒屋町400, 小松町560, 信富町315,
//   祇園町南側570-206) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26044297', '本家第一旭 三条河原町店: a branch of the 第一旭 ramen brand already in data (kyr_honke_daiichi_asahi_hont, kyr_daiichi_asahi_kumano_ten, kyr_daiichi_asahi_katsura_te); our crawls hold 5 same-name 第一旭 shops (26000873, 26005339, 26041687, 26044297, 27151209) — 5+ same-name shops count as a chain (Greg, 2026-11-05).');

// ================================================================ 刻シラズ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26021929/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '24:00']);
  put({
    id: 'kyoto_tokishirazu_belgian_beer', name: 'ベルギービール＆欧風料理 刻シラズ (Tokishirazu)', category: 'OMNI',
    lat: 35.007197, lng: 135.764075, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Beer bar food — fries, pizza, pasta, risotto, carbonnade and course menus — alongside a long beer list; no gluten information (Tabelog; 2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Caprese, marinated vegetables and fries appear, but most dishes are mussels, meat, cheese and seafood (2025–2026 reviews).',
    hours_raw: 'Daily 17:00–24:00 (food last order 23:00, drinks 23:30); irregular closures, and private hire for parties (Tabelog). Reservations accepted (Tabelog). Courses with all-you-can-drink, e.g. 9 dishes + 120 min for ¥4,400 (Tabelog); a ¥4,200 course with two drinks (November 2025). No service or table charge (Tabelog). 44 seats: 8 at the counter, 36 at tables; private hire 20–50+; non-smoking (Tabelog). Cards, e-money and QR (Tabelog). Third floor of プラネシア六角柳馬場, up a steep straight stair (November 2025); 5 min walk from Karasuma Oike Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yanagibaba south of Rokkaku, 3rd floor — 5 min walk from Karasuma Oike Stn',
    cuisine: 'Belgian beer bar with about 120 Belgian beers and European dishes mixing Belgian, Italian and Spanish cooking (Tabelog) · mussels steamed in white wine (in a Staub pot, with fries, or turned into pasta or risotto), beef-cheek carbonnade, waterzooi (Tabelog; 2025–2026 reviews) · sardine and tomato or shrimp and Brussels sprout ajillo, Bismarck pizza, carbonara, caprese, a three-deli platter, thick-cut fries, grilled beef (2025–2026 reviews) · Czech and German beers too — Pilsner Urquell, Weizen, Schöfferhofer, Hoegaarden White (2025–2026 reviews) · bills about ¥4,000–8,000 (Tabelog)',
    website: null, gmaps: gm('刻シラズ 京都 柳馬場六角'), menu_url: null,
    notes: '[Belgian beer · Yanagibaba Rokkaku, 120 Belgian beers] A big third-floor beer hall south of Rokkaku with about 120 Belgian beers plus Czech and German drafts, and generous European plates alongside: white-wine mussels with fries, beef-cheek carbonnade, ajillo, pizza and pasta. Courses with all-you-can-drink make it a party favourite, but there is a counter for two. The stairs are steep after a few beers; one guest found the tables cramped. Open nightly to midnight.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog: one of the largest Belgian beer selections in Kyoto, with about 120 varieties, and European cooking that combines Belgian regional dishes with Italian and Spanish flavours; 53 seats in all, used for parties. Reviewers in 2025–2026 describe banquets with all-you-can-drink, attentive staff and generous portions.',
      philosophy: 'Pairing Belgian beer with European dishes (Tabelog).', specialty: 'Mussels steamed in white wine; Belgian beer.',
      anecdotes: [
        { text: 'An October 2025 couple who missed the Belgian pavilion at the Osaka Expo came here instead, drank Belgian, Czech and German beers, and had the white-wine mussels made into pasta.', source: R + 'B515299348/' },
        { text: 'A November 2025 guest held onto the handrail going down: the stairs run straight up to the third floor and "can be dangerous for those who have had a few drinks."', source: R + 'B517167952/' },
        { text: '"The portion sizes of the food were quite generous, so by the time I had sampled all the beers, I was completely full" — February 2026.', source: R + 'B523035321/' },
        { text: '"However, the tables were a bit cramped, which was unfortunate." — September 2026.', source: R + 'B536454451/' },
      ],
      japanese_sources_summary: '食べログ: バル・イタリアン・ビアバー、中京区柳馬場六角下ル井筒屋町400-1 プラネシア六角柳馬場3F、烏丸御池駅から徒歩5分、毎日 17:00〜24:00 (料理L.O.23:00、ドリンクL.O.23:30)、不定休、予約可、飲み放題付きコース (9品+120分4,400円など)、サービス料・チャージなし、44席 (カウンター8、テーブル36)、貸切20〜50名以上、禁煙、カード・電子マネー・QR 可、ベルギービール約120種、ムール貝の白ワイン蒸し、牛ほほ肉のカルボナード、ワーテルゾーイ。口コミ (2025年8月〜2026年9月、英語): 宴会コース、ムール貝 (パスタやリゾットにも)、アヒージョ、ビスマルク、カルボナーラ、太いフライドポテト、チェコやドイツのビールも、3階までの急な階段、テーブルが狭いとの声 (2026年9月)。',
      confidence: 'medium', sources: [TB, R + 'B511560717/', R + 'B514920992/', R + 'B515299348/', R + 'B515483744/', R + 'B517167952/', R + 'B523035321/', R + 'B524595135/', R + 'B531947383/', R + 'B533294995/', R + 'B536454451/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Third floor up a steep stair; à la carte or all-you-can-drink courses; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳馬場六角下ル井筒屋町400-1 プラネシア六角柳馬場 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.007197, 135.764075); cross-checked: GSI 京都府京都市中京区井筒屋町400番地 (lot) 45 m; kyoto_les_champs_dor is 76 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B517167952/'],
    price_note: 'No menu read; course prices from Tabelog and a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Course: 9 dishes + 120 min all-you-can-drink', '¥4,400', 'Courses', 'no', 'no', 'Tabelog.', 'nomihodai_course'),
      it('', '', 'Course with two drinks', '¥4,200', 'Courses', 'no', 'no', 'November 2025, tax included.', 'two_drink_course'),
      it('', '', 'Mussels steamed in white wine', '', 'European', 'ask', 'no', 'Can be made into pasta or risotto.', 'moules'),
      it('', '', 'Beef-cheek carbonnade', '', 'European', 'ask', 'no', 'Tabelog.', 'carbonnade'),
    ] }, {
    cuisine: 'ベルギービール約120種と、ベルギーの郷土料理にイタリアやスペインの味を合わせた欧風料理のビアバー (食べログ)・ムール貝の白ワイン蒸し (ストウブ鍋で、フライドポテト付き、パスタやリゾットにも)、牛ほほ肉のカルボナード、ワーテルゾーイ (食べログ、2025〜2026年の口コミ)・いわしとトマトや海老と芽キャベツのアヒージョ、ビスマルク、カルボナーラ、カプレーゼ、デリ3種盛り、太いフライドポテト、牛のグリル (2025〜2026年の口コミ)・チェコやドイツのビールも: Pilsner Urquell、ヴァイツェン、Schöfferhofer、Hoegaarden White (2025〜2026年の口コミ)・会計は4,000〜8,000円ほど (食べログ)',
    neighborhood: '六角の南、柳馬場通のビル3階。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。フライドポテト、ピザ、パスタ、リゾット、カルボナード、コース料理などビアバーの料理。グルテンの情報はない (食べログ、2025〜2026年の口コミ)。',
    vegan_detail: '要確認。カプレーゼ、野菜のマリネ、フライドポテトはあるが、ムール貝、肉、チーズ、魚介の料理が中心 (2025〜2026年の口コミ)。',
    notes: '[ベルギービール・柳馬場六角、ベルギービール120種] 六角の南、ビル3階の広いビアバー。ベルギービール約120種にチェコやドイツの生ビールもそろい、量たっぷりの欧風料理を合わせる: フライドポテト付きのムール貝の白ワイン蒸し、牛ほほ肉のカルボナード、アヒージョ、ピザ、パスタ。飲み放題付きのコースで宴会に人気だが、カウンターもある。酔うと階段が急、テーブルが狭いという声も。毎晩24時まで。',
  });
}

// ================================================================ 蕎麦や 竹花
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023687/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:30']);
  put({
    id: 'kyoto_sobaya_takehana', name: '蕎麦や 竹花 (Sobaya Takehana)', category: 'OMNI',
    lat: 35.000792, lng: 135.774706, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, yuba tempura and dashi-and-soy broths; the soba is stone-milled and handmade, but no source says it is 100% buckwheat (Tabelog; 2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba served in dashi broth, with shrimp tempura, herring and chicken teriyaki among the toppings (2024–2026 reviews).',
    hours_raw: '11:00–21:30 (last order 21:00); closed Monday and the second Tuesday of the month (Tabelog). No reservations (Tabelog); short waits around lunchtime (January 2025). Cash only — no cards, e-money or QR (Tabelog). 16 seats: 8 at the counter and four tables for two (Tabelog). About 20 m east of Kennin-ji, 7 min walk from Gion-Shijo Stn (Keihan) (Tabelog). Sake and shochu for daytime drinking (Tabelog; May 2025).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Just east of Kennin-ji, south Gion — 7 min walk from Gion-Shijo Stn',
    cuisine: 'Small soba shop of handmade, stone-milled soba (Tabelog) · thin noodles, hot or cold (2024–2026 reviews) · tempura soba or tempura zaru soba ¥1,790; nishin soba ¥1,390; tororo soba ¥1,190 (2024–2026 reviews) · ume tororo soba with tororo kombu, lemon soba, chicken teriyaki soba, mori soba with shrimp tempura, nishin oroshi soba (2024–2026 reviews) · yuba tempura and small dishes with sake (2024–2025 reviews)',
    website: null, gmaps: gm('蕎麦や 竹花 京都'), menu_url: null,
    notes: '[Soba · beside Kennin-ji, thin handmade noodles] A 16-seat soba shop a few steps from Kennin-ji, serving thin, stone-milled handmade soba from late morning to evening: ume tororo, lemon soba, nishin soba and tempura zaru, mostly ¥1,190–1,790, with sake and small dishes for daytime drinking. Reviews split on the noodles — praised for the cut and lightness, faulted by some for lacking firmness in hot broth. Cash only, no bookings. Closed Monday and the second Tuesday.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed in the sources)'], origin: null,
      background: 'Per Tabelog: authentic handmade soba from stone-milled flour; children welcome. A May 2026 reviewer says the shop has been near Kennin-ji for a long time; a September 2024 reviewer describes an old building with a newer interior.',
      philosophy: null, specialty: 'Ume tororo soba; lemon soba; tempura zaru soba.',
      anecdotes: [
        { text: 'The soba came with a little plover-shaped flag stuck in pickled daikon — "The cute Chidori flag" (September 2024).', source: R + 'B508700262/' },
        { text: 'A November 2024 diner found the noodles in hot chicken teriyaki soba too soft, "falling apart" on the chopsticks.', source: R + 'B496587455/' },
        { text: '"The fact that this soba shop allows for daytime drinking makes it a must-visit." — May 2025.', source: R + 'B506724428/' },
        { text: '"The broth tasted somewhat commercial … On the positive side, the soba was expertly cut" — April 2026.', source: R + 'B525665272/' },
      ],
      japanese_sources_summary: '食べログ: そば、東山区小松町560-2、京阪祇園四条駅から徒歩約7分、Kennin-ji の東約20m、火〜日 11:00〜21:30 (L.O.21:00)、月曜と第2火曜休み、予約不可、カード・電子マネー・QR 不可、16席 (カウンター8、2人席4)、日本酒・焼酎、子ども可、石臼挽きの手打ちそば。口コミ (2024年1月〜2026年5月、英語): 細いそば、天ぷらそば・天ざる1,790円、にしんそば1,390円、とろろそば1,190円、梅とろろ、レモンそば、照り焼きチキンそば、湯葉の天ぷら、昼飲み、千鳥の旗、温かいそばはコシが弱いとの声も。',
      confidence: 'medium', sources: [TB, R + 'B478800733/', R + 'B495227941/', R + 'B496587455/', R + 'B498565892/', R + 'B506724428/', R + 'B508700262/', R + 'B510385254/', R + 'B525665272/', R + 'B528141288/', R + 'B538516884/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Cash only; no reservations; small counter shop.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府東山区小松町560-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through May 2026.' },
    pin_source: `Tabelog ${TB} (35.000792, 135.774706); cross-checked: GSI 京都府京都市東山区小松町560番地 (lot) 133 m; kyoto_sottaku_tsukamoto_gion is 128 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B495227941/', R + 'B528141288/'],
    price_note: 'No menu read; prices from November 2024 and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Tempura soba / tempura zaru soba', '¥1,790', 'Soba', 'no', 'no', 'November 2024.', 'tempura_soba'),
      it('', '', 'Nishin soba', '¥1,390', 'Soba', 'no', 'no', 'November 2024.', 'nishin_soba'),
      it('', '', 'Tororo soba', '¥1,190', 'Soba', 'no', 'no', 'May 2026.', 'tororo_soba'),
      it('', '', 'Lemon soba', '', 'Soba', 'no', 'no', '', 'lemon_soba'),
    ] }, {
    cuisine: '石臼挽きの手打ちそばの小さな店 (食べログ)・細めのそば、温かいのも冷たいのも (2024〜2026年の口コミ)・天ぷらそば・天ざる1,790円、にしんそば1,390円、とろろそば1,190円 (2024〜2026年の口コミ)・とろろ昆布付きの梅とろろそば、レモンそば、照り焼きチキンのそば、海老天のもりそば、にしんおろしそば (2024〜2026年の口コミ)・湯葉の天ぷらや小皿で日本酒も (2024〜2025年の口コミ)',
    neighborhood: 'Kennin-ji のすぐ東、祇園の南。祇園四条駅から徒歩7分',
    gf_detail: 'グルテンフリーではない。天ぷら、湯葉の天ぷら、だしと醤油のつゆ。そばは石臼挽きの手打ちだが、十割とする情報はない (食べログ、2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆのそばで、海老天、にしん、照り焼きチキンなどがのる (2024〜2026年の口コミ)。',
    notes: '[そば・Kennin-ji のそば、細い手打ちそば] Kennin-ji から数歩の16席のそば屋。石臼挽きの細い手打ちそばを昼前から夜まで出す: 梅とろろ、レモンそば、にしんそば、天ざるなど、多くは1,190〜1,790円。日本酒と小皿で昼飲みもできる。そばの評価は分かれ、切りの良さや軽さをほめる声と、温かいつゆではコシが弱いという声がある。現金のみ、予約不可。月曜と第2火曜休み。',
  });
}

// ================================================================ 割烹 しなとみ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26035813/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'kyoto_kappo_shinatomi', name: '割烹 しなとみ (Kappou Shinatomi)', category: 'MOM_AND_POP',
    lat: 35.017783, lng: 135.767851, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kappo courses and à la carte with dashi, white and red miso, tempura, karasumi mochi, fried fugu and saba sushi; no gluten information (2022–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a kappo of fish, shellfish, sea urchin, Tanba black wagyu and dashi-based dishes (Tabelog; 2022–2025 reviews).',
    hours_raw: '17:30–22:00, last entry 19:00, no second sitting; for same-day bookings call by 18:00; closed Wednesday and about twice a month (Tabelog). Reservation only; Tabelog bookings are seated by the house — call for the counter or a private room; reservations cannot be taken from anyone without a Japanese phone number (Tabelog). Tabelog\'s machine-translated note says bookings are for course meals, while reviewers 2022–2025 ordered à la carte. 10% service charge (Tabelog). 7 counter seats and private rooms for 2–3; non-smoking (Tabelog). Cards and PayPay (Tabelog). East of the Imperial Palace near Teramachi and Marutamachi; 10 min walk from Jingu-Marutamachi (Keihan) or Shiyakusho-mae (subway) (Tabelog; 2023, 2025 reviews).',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'East of the Imperial Palace, near Teramachi and Marutamachi — 10 min walk from Jingu-Marutamachi Stn',
    cuisine: 'Kappo of seasonal fish, Kyoto vegetables and Tanba black wagyu, as a course tailored to the day or à la carte (Tabelog) · e.g. smoked Lake Biwa bream and wild-vegetable tempura (March 2022); grilled hon-moroko, small turnip with crab sauce (January 2023); sweetfish with roe simmered with sansho, matsutake tempura, anago shirayaki, uni tofu (November 2023); white-miso soup, winter sawara, anago, karasumi mochi, ebi-imo with crab sauce, charcoal-grilled Kyoto black wagyu with uni, shirasu rice (November 2024); clams with aonori sauce, grilled fugu, shirako, fuki-no-tō chawanmushi (March 2025); Akashi sea bream and octopus, Awaji hamo, hamo with matsutake, saba sushi (September 2025) · white-miso hot pot (August 2024) · sake, shochu, wine; beer and sake by the glass around ¥1,000 (Tabelog; March 2025) · bills about ¥20,000–29,999 (Tabelog)',
    website: null, gmaps: gm('割烹 しなとみ 京都'), menu_url: null,
    notes: '[Kappo · east of the Imperial Palace, à la carte by a couple] A seven-seat kappo counter east of the Imperial Palace, opened in 2021 by chef Shuichi Takahashi after kappo work in Gion, with the hostess in the room. Take a course built around the day, or order à la carte — grilled hon-moroko, sweetfish with roe, white-miso hot pot, wagyu with sea urchin — at an unhurried pace. Bills run ¥20,000–30,000 with 10% service; one 2024 guest found it a little dear. Reservations need a Japanese phone number. Closed Wednesday.',
    chef_bio: { chef_name: 'Shuichi Takahashi', roles: ['Owner-chef', 'Hostess (unnamed)'], origin: null,
      background: 'A March 2025 reviewer: "Chef Shuichi Takahashi, who gained experience at kappou in Gion, opened this establishment in 2021"; the shop\'s name reflects its location (the address is 信富町). An August 2024 reviewer: "Apparently, the chef used to work at Umezu in Gion." Reviewers describe a couple — "Authentic Kappou Cuisine by a Warm Couple" (November 2023), "both the owner and the hostess were very pleasant" (October 2025).',
      philosophy: '"We do not rush our guests, so please take your time and enjoy your meal" (the shop\'s statement, quoted March 2025).', specialty: 'À la carte kappo; white-miso hot pot; grilled river fish.',
      anecdotes: [
        { text: '"Moreover, the fact that the maru-nabe (round hot pot) is served in smaller pots is simply outstanding." — March 2022.', source: R + 'B447146350/' },
        { text: 'A November 2023 diner singled out sweetfish with roe simmered with sansho — a sauce worth pouring over rice at home.', source: R + 'B477251872/' },
        { text: '"However, I felt that the price was a bit high for what I received." — February 2024.', source: R + 'B480587726/' },
        { text: '"The grilled fugu was surprisingly flavorful, reminiscent of fried chicken" — March 2025.', source: R + 'B502529590/' },
      ],
      japanese_sources_summary: '食べログ: 日本料理・魚介料理、上京区信富町315-4、神宮丸太町駅・市役所前駅から徒歩10分、月火木〜日 17:30〜22:00 (最終入店19:00、二回転制なし、当日予約は18時まで)、水曜と月2回の不定休、完全予約制、食べログ予約は席の指定不可、日本の電話番号がない方の予約不可、サービス料10%、7席 (カウンター)、2〜3名の個室、禁煙、カード・PayPay 可、旬の魚介、京野菜、Tanba の黒毛和牛、コースとアラカルト。口コミ (2022年3月〜2025年10月、英語): 店主 Shuichi Takahashi は祇園の割烹で経験を積み2021年に開店、梅津にいたとの話 (2024年8月)、夫婦の店、本もろこ、子持ち鮎、白味噌の鍋、ふぐの焼き物、白子、蛤、鯖寿司、値段がやや高いとの声 (2024年2月)。',
      confidence: 'medium', sources: [TB, R + 'B447146350/', R + 'B457241951/', R + 'B459595987/', R + 'B477251872/', R + 'B480587726/', R + 'B490933045/', R + 'B502529590/', R + 'B507773230/', R + 'B514103034/', R + 'B515705279/'] },
    cultural_comfort: { level: 'relay', note: 'Reservations only, and not from anyone without a Japanese phone number; ask a hotel to book. 10% service; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市上京区信富町315-4',
    existence: { status: 'probable', checked: TODAY, note: 'Tabelog listing with booking terms; latest review October 2025.' },
    pin_source: `Tabelog ${TB} (35.017783, 135.767851); cross-checked: GSI 京都府京都市上京区信富町315番地 (lot) 9 m; kyoto_madam_koran is 38 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B457241951/', R + 'B514103034/'],
    price_note: 'No menu prices read; bills ¥20,000–29,999 (Tabelog), plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Course of the day', '', 'Course', 'ask', 'no', '', 'course'),
      it('', '', 'White-miso hot pot', '', 'À la carte', 'ask', 'no', 'August 2024.', 'shiromiso_nabe'),
      it('', '', 'Grilled hon-moroko', '', 'À la carte', 'ask', 'no', 'Winter.', 'honmoroko'),
    ] }, {
    cuisine: '旬の魚介、京野菜、Tanba の黒毛和牛を、その日に合わせたコースかアラカルトで出す割烹 (食べログ)・例: Lake Biwa の燻製の鯛と山菜の天ぷら (2022年3月)、本もろこの焼き物、小かぶの蟹あんかけ (2023年1月)、子持ち鮎の山椒煮、松茸の天ぷら、穴子の白焼き、うに豆腐 (2023年11月)、白味噌のお椀、さわら、穴子、からすみ餅、海老芋の蟹あんかけ、京都の黒毛和牛とうにの炭火焼き、生しらすご飯 (2024年11月)、蛤の青のりあん、ふぐの焼き物、白子、ふきのとうの茶碗蒸し (2025年3月)、Akashi の鯛とたこ、Awaji の鱧、鱧と松茸、鯖寿司 (2025年9月)・白味噌の鍋 (2024年8月)・日本酒、焼酎、ワイン、ビールやグラスの日本酒は1,000円ほど (食べログ、2025年3月)・会計は2万〜3万円ほど (食べログ)',
    neighborhood: 'Kyoto Imperial Palace の東、寺町丸太町の近く。神宮丸太町駅から徒歩10分',
    gf_detail: '要確認。だし、白味噌と赤味噌、天ぷら、からすみ餅、ふぐの焼き物、鯖寿司のある割烹のコースとアラカルト。グルテンの情報はない (2022〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚、貝、うに、Tanba の黒毛和牛、だしの料理の割烹 (食べログ、2022〜2025年の口コミ)。',
    notes: '[割烹・Kyoto Imperial Palace の東、夫婦のアラカルト] Kyoto Imperial Palace の東にあるカウンター7席の割烹。祇園の割烹で経験を積んだ Shuichi Takahashi が2021年に開き、女将が客席を務める。その日に合わせたコースのほか、アラカルトで本もろこの焼き物、子持ち鮎、白味噌の鍋、和牛とうにの炭火焼きなどをゆっくり楽しめる。会計は2万〜3万円ほどでサービス料10%、2024年の客はやや高いと書いている。予約は日本の電話番号が必要。水曜休み。',
  });
}

// ================================================================ 祇園楽味
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26023057/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://gionsasaki.com/rakumi.html';
  const H = day(['17:30', '23:00']);
  put({
    id: 'kyoto_gion_rakumi', name: '祇園楽味 (Gion Rakumi)', category: 'OMNI',
    lat: 35.002728, lng: 135.776723, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. You choose ingredients and cooking methods, so dishes vary — tempura, gratin, hamburg steak and curry appear alongside sashimi and grilled fish; no gluten information (official site; 2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a counter built around fish, crab, sea urchin and wagyu from the day\'s ingredient box (official site; 2025–2026 reviews).',
    hours_raw: 'Monday to Saturday 17:30–23:00; closed Sunday and the second and fourth Monday (Tabelog). The official site (page last updated 2022) lists two dinner sittings, 17:30–20:20 (last entry 18:30) and 20:30–23:00 (last entry 21:30), a lunch from 12:00 or 12:30, and irregular closures. Reservations up to the end of the second month ahead (official site). Average about ¥20,000 at dinner and ¥7,000 at lunch (official site); reviewers spent ¥15,000–49,999 (2025–2026). 14 seats at a counter; private hire possible; non-smoking (Tabelog). Cards and e-money (Tabelog). Facing Minamiza-koji in Gion south of Shijo, near Yasaka Shrine; 5 min walk from Gion-Shijo Stn (Tabelog; August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Gion south of Shijo, near Yasaka Shrine — 5 min walk from Gion-Shijo Stn',
    cuisine: '"Adult kappo izakaya" of Gion Sasaki: the day\'s ingredients from around Japan and abroad are laid out in a box, and you choose the ingredient and the cooking method, over the charcoal at the centre of the counter (official site) · grilling, frying, simmering, steaming — even a Chinese wok (March 2026) · e.g. small turnip with crab sauce, sashimi of tuna, sea bream, sea urchin and beef tataki, crab in white miso, crab gratin, tenderloin steak (December 2025); simmered nodoguro, wagyu steak, karasumi (February 2026); shrimp topped with sea urchin (March 2026); hamburg steak, corn tempura, curry (July 2026) · bills about ¥20,000–30,000 (official site; Tabelog)',
    website: WEB, gmaps: gm('祇園楽味 京都'), menu_url: null,
    notes: '[Kappo izakaya · Gion, choose your ingredient and cooking] Gion Sasaki\'s "adult kappo izakaya" on Minamiza-koji: a high-ceilinged 14-seat counter where a young, cheerful team shows you the day\'s ingredient box and cooks whatever you pick, however you like — grilled over the central charcoal, simmered, fried, even wok-tossed — in portions you set. Nodoguro, crab gratin, wagyu, corn tempura and curry are favourites. Expect ¥20,000–30,000 or more. Listed in OAD 2026 (per a reviewer). Closed Sunday and the second and fourth Monday.',
    chef_bio: { chef_name: null, roles: ['A young team of chefs (unnamed), of the Gion Sasaki group'], origin: null,
      background: 'Per the official site, one of the Gion Sasaki group\'s shops (with Gion Sasaki, Sushi Rakumi and Shoku Bar Rakumi), themed "大人の割烹居酒屋" (an adult kappo izakaya). An August 2026 reviewer: opened in November 2013, "known as a restaurant run by the chef of \'Gion Sasaki\'", and listed in OAD Top Restaurants 2026; a March 2026 reviewer thought it is run by the owner\'s son. Reviewers in 2026 describe a young, energetic team of chefs.',
      philosophy: 'Guests choose the ingredients and decide with the chefs how each is cooked (official site).', specialty: 'Ingredients cooked to order over charcoal; nodoguro; crab gratin.',
      anecdotes: [
        { text: '"I think this is the first time I\'ve seen a Chinese wok in a Japanese restaurant!" — March 2026.', source: R + 'B537892421/' },
        { text: 'A March 2026 guest took the suggestion of sea urchin on top of shrimp for sashimi — "that luxurious combination!"', source: R + 'B534643873/' },
        { text: '"Be careful not to overindulge, as it can impact your budget!" — September 2026.', source: R + 'B536334350/' },
      ],
      japanese_sources_summary: '公式サイト (祇園さゝ木): 祇園楽味、テーマは「大人の割烹居酒屋」、全国各地や時には世界から仕入れた旬の食材をネタ箱に並べ、客が選んだ食材の食べ方を相談して決める、カウンター中央の炭火、昼12:00・12:30〜、夜は17:30〜20:20 (最終入店18:30) と20:30〜23:00 (最終入店21:30)、平均予算は昼7,000円・夜20,000円、日曜・第2第4月曜・不定休、予約は2か月先の末日まで、東山区祇園町南側570-206、グループに祇園さゝ木、鮨楽味、食ばぁー楽味。食べログ: 日本料理、月〜土 17:30〜23:00、14席、禁煙、カード・電子マネー可。口コミ (2025年12月〜2026年9月、英語): 若い料理人たち、のどぐろの煮付け、和牛ステーキ、蟹グラタン、とうもろこしの天ぷら、ハンバーグ、カレー、中華鍋も、2013年11月開店、OAD 2026。',
      confidence: 'medium', sources: [WEB, TB, R + 'B489315988/', R + 'B520867756/', R + 'B526012815/', R + 'B531983683/', R + 'B532720168/', R + 'B534643873/', R + 'B535360634/', R + 'B536334350/', R + 'B537892421/', R + 'B537905579/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; staff show the ingredients and explain choices; cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市東山区祇園町南側570-206',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (Gion Sasaki group) and Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.002728, 135.776723); GSI matches only the large lot 京都府京都市東山区祇園町南側570番地, 265 m away, so loc_precise false; kyoto_yamaguchi_gion is 26 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [WEB],
    price_note: 'No menu prices; official averages about ¥20,000 at dinner and ¥7,000 at lunch.', last_checked: TODAY, items: [
      it('', '', 'Crab gratin', '', 'À la carte', 'no', 'no', 'December 2025.', 'crab_gratin'),
      it('', '', 'Simmered nodoguro', '', 'À la carte', 'ask', 'no', 'February 2026.', 'nodoguro_nitsuke'),
      it('', '', 'Corn tempura', '', 'À la carte', 'no', 'ask', 'July 2026.', 'corn_tempura'),
      it('', '', 'Wagyu steak', '', 'À la carte', 'ask', 'no', '', 'wagyu_steak'),
    ] }, {
    cuisine: '祇園さゝ木の「大人の割烹居酒屋」: 全国や世界から仕入れたその日の食材をネタ箱に並べ、客が食材と食べ方を選び、カウンター中央の炭火で火入れする (公式サイト)・焼く、揚げる、煮る、蒸す、中華鍋も (2026年3月)・例: 小かぶの蟹あんかけ、まぐろ、鯛、うに、牛のたたきのお造り、蟹の白味噌、蟹グラタン、ヒレステーキ (2025年12月)、のどぐろの煮付け、和牛ステーキ、からすみ (2026年2月)、海老にうにをのせたお造り (2026年3月)、ハンバーグ、とうもろこしの天ぷら、カレー (2026年7月)・会計は2万〜3万円ほど (公式サイト、食べログ)',
    neighborhood: '四条の南の祇園、Yasaka Shrine の近く。祇園四条駅から徒歩5分',
    gf_detail: '要確認。食材と調理法を選ぶので料理はさまざま: お造りや焼き魚のほか、天ぷら、グラタン、ハンバーグ、カレーも。グルテンの情報はない (公式サイト、2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。ネタ箱の魚、蟹、うに、和牛が中心のカウンター (公式サイト、2025〜2026年の口コミ)。',
    notes: '[割烹居酒屋・祇園、食材と調理法を選ぶ] 祇園さゝ木の「大人の割烹居酒屋」。天井の高いカウンター14席で、若く元気な料理人たちがその日のネタ箱を見せ、選んだ食材を好みの調理法で、好みの量で仕上げる: 中央の炭火で焼く、煮る、揚げる、中華鍋まで。のどぐろ、蟹グラタン、和牛、とうもろこしの天ぷら、カレーが人気。会計は2万〜3万円以上。口コミによると OAD 2026 に掲載。日曜と第2・第4月曜休み。',
  });
}

save();
