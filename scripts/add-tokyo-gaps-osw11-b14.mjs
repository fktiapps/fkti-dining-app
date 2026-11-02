// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 14.
//   + 松月庵 Shogetsu An (cheap, fast neighbourhood soba shop with ¥800 sets; 50+ years)
//   + 来福亭 Raifuku Tei (yoshoku house founded 1904, omurice and menchi katsu; next to 玉ひで)
//   + わかい Wakai (three-generation Sapporo-style miso ramen in a back alley, Horidome-cho)
//   + 天ぷら やぐち Tempura Yaguchi (8-seat omakase tempura by a 22-year Mikawa Zezankyo disciple; Tabelog Tempura 100 2025)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02): the first four,
//   161, 163, 164 and 166 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address (1-2-9, 1-17-10, 堀留町1-7-16, 2-9-7), except that Raifuku Tei
//   shares 1-17-10 with 鳥料理 玉ひで (tokyo3__294, address_ja "〒103-0013 東京都中央区日本橋人形町1-17-10"): the points are
//   10.5 m apart, and a reviewer places Raifuku Tei "between Tamahide and an old coffee shop" — separate buildings, own pins.
//   Chain check. Shogetsu An: a September 2026 diner mentions a closed "Edobashi Shogetsu An" with the same name; no
//   source links them. Others: single shops. Tempura Yaguchi is an independent shop of a Mikawa Zezankyo disciple.
//   Ramen block left off for Wakai: reviews disagree on richness and do not source clarity (brief LESSONS).
//   Omitted under the brief's abuse line: one August 2026 reviewer's remark on a staff member's looks (Tempura Yaguchi).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 松月庵
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13068109/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:30']);
  put({
    id: 'tokyo_shogetsu_an_ningyocho', name: '松月庵 (Shogetsu An)', category: 'OMNI',
    lat: 35.685308, lng: 139.780872, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba with wheat (a June 2026 diner notes it is not even the typical 2:8), katsudon, ramen and yakisoba.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba served in a bonito broth (March 2026).',
    hours_raw: 'Mon–Fri 11:00–21:30; closed Sat and Sun (Tabelog). Reservations accepted; private hire possible (Tabelog). Cash only — no cards, e-money or QR (Tabelog). Smoking allowed except 11:30–13:00 (Tabelog; a March 2026 diner notes smoking from 13:00). Delivery (June 2026). Packed with office workers at weekday lunch, sometimes a short wait outside; food comes out within about five minutes (2026 reviews). In business at least 50 years (June 2026 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-2-9, a house restaurant — 2 min from Ningyocho Stn, 6 min from Suitengumae Stn, 8 min from Mitsukoshimae Stn',
    cuisine: 'Neighbourhood soba with rice-bowl sets and an evening izakaya menu (2026 reviews) · lunch sets of soba with a rice bowl and salad ¥800 (July–August 2026) — katsudon, gyudon, egg bowl, inari (March–May 2026) · mori soba set with inari ¥800 (May 2026) · tamago-toji soba ¥800 (March 2026) · curry nanban soba ¥850, kake soba ¥450 (September 2026) · chilled tanuki soba (June 2026) · cold noodles ¥700 (August 2026) · weekly specials (2023, 2026) · also ramen and yakisoba (June 2026) · evening: drinks with two dishes ¥1,500 (September 2026)',
    website: TB, gmaps: gm('松月庵 人形町'), menu_url: null,
    notes: "[Soba · Ningyocho, the cheap, fast neighbourhood soba shop] An old-style neighbourhood soba shop, at least fifty years in business, that fills with office workers at weekday lunch. The sets are the draw: soba with a katsudon, gyudon or egg bowl and a salad for ¥800, and kake soba at ¥450. Food arrives within minutes. The soba is thin and chewy in a bonito broth, nothing fancy. In the evening it turns into a soba-shop izakaya, with a ¥1,500 deal of drinks and two dishes. Not every bowl lands: diners found warm soba overcooked in June and cold noodles not cold enough in July and August 2026. Cash only; smoking is allowed outside the 11:30–13:00 lunch window. Weekdays only.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'In business for at least 50 years and offering delivery (June 2026 review). A September 2026 diner had frequented a since-closed "Edobashi Shogetsu An" and found this shop with the same name; no source links the two.',
      philosophy: null, specialty: 'Soba-and-rice-bowl sets.',
      anecdotes: [
        { text: '"The service is incredibly fast" — June 2026.', source: R + 'B529245612/' },
        { text: '"The curry nan-soba costs JPY 850. By the way, the kake-soba is only JPY 450." — September 2026.', source: R + 'B535658138/' },
        { text: '"Warm soba noodles unfortunately give off a strong impression of being overcooked." — June 2026, a seventh visit.', source: R + 'B498795389/' },
      ],
      japanese_sources_summary: '食べログ: 松月庵、そば、丼、ラーメン、日本橋人形町1-2-9、人形町駅から徒歩2分、月〜金11:00〜21:30、土日休み、予約可、貸切可、カード・電子マネー・QR不可、11:30〜13:00は禁煙でそれ以外は喫煙可。口コミ(2023年6月〜2026年9月): そばと丼とサラダのセット800円、もりそばのセット800円、卵とじそば800円、カレー南蛮そば850円、かけそば450円、冷やしたぬき、出前、50年以上、早い、夜は居酒屋のつまみも、温かいそばが伸びていた・冷たい麺が冷えていなかったという声も。',
      confidence: 'medium', sources: [TB, R + 'B467625162/', R + 'B498795389/', R + 'B505038809/', R + 'B529245612/', R + 'B529845610/', R + 'B531312494/', R + 'B533067539/', R + 'B535658138/', R + 'B535775281/', R + 'B79606111/'] },
    cultural_comfort: { level: 'japanese', note: 'A busy local soba shop; quick turnover at lunch; smoking after 13:00.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-2-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated to September 2026.' },
    pin_source: `Tabelog ${TB} (35.685308, 139.780872); cross-checked: GSI 東京都中央区日本橋人形町一丁目2番9号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B505038809/', R + 'B535658138/', R + 'B79606111/'],
    price_note: 'Prices from March–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Soba and rice-bowl set with salad', '¥800', 'Sets', 'no', 'no', 'July–August 2026.', 'set'),
      it('', '', 'Mori soba set with inari', '¥800', 'Sets', 'no', 'no', 'May 2026.', 'mori_set'),
      it('', '', 'Tamago-toji soba', '¥800', 'Soba', 'no', 'no', 'March 2026.', 'tamagotoji'),
      it('', '', 'Curry nanban soba', '¥850', 'Soba', 'no', 'no', 'September 2026.', 'curry_nanban'),
      it('', '', 'Kake soba', '¥450', 'Soba', 'no', 'no', 'September 2026.', 'kake'),
    ] }, {
    cuisine: '丼のセットと夜の居酒屋メニューもある町のそば屋 (2026年の口コミ)・昼はそばと丼とサラダのセット800円 (2026年7月〜8月)、かつ丼、牛丼、玉子丼、いなり (2026年3月〜5月)・もりそばといなりのセット800円 (2026年5月)・卵とじそば800円 (2026年3月)・カレー南蛮そば850円、かけそば450円 (2026年9月)・冷やしたぬきそば (2026年6月)・冷たい麺700円 (2026年8月)・週替わりの定食 (2023年、2026年)・ラーメンと焼きそばも (2026年6月)・夜は飲み物と料理2品で1,500円 (2026年9月)',
    neighborhood: '日本橋人形町1-2-9、一軒家の店。人形町駅から徒歩2分、水天宮前駅から徒歩6分、三越前駅から徒歩8分',
    gf_detail: 'グルテンフリーではない: 小麦の入ったそば (2026年6月の客によれば二八でもない)、かつ丼、ラーメン、焼きそば。',
    vegan_detail: 'ヴィーガンではない: そばは鰹のだし (2026年3月)。',
    notes: '[そば・人形町、安くて早い町のそば屋] 少なくとも50年続く昔ながらの町のそば屋で、平日の昼は会社員でいっぱいになる。目当てはセットで、そばにかつ丼、牛丼、玉子丼とサラダが付いて800円、かけそばは450円。料理は数分で出てくる。そばは細くてコシがあり、鰹のだしで、飾り気はない。夜はそば屋の居酒屋になり、飲み物と料理2品で1,500円。いつも当たりとは限らず、6月には温かいそばが伸びていた、7月と8月には冷たい麺が冷えていなかったという声も。現金のみ。11:30〜13:00以外は喫煙可。平日のみ。',
  });
}

// ================================================================ 来福亭
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13018136/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '13:45'], ['17:00', '19:45']);
  put({
    id: 'tokyo_raifuku_tei_ningyocho', name: '来福亭 (Raifuku Tei)', category: 'OMNI',
    lat: 35.68499, lng: 139.783041, cuisine_type: 'yoshoku',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded menchi katsu and cutlets, hayashi and curry sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg, chicken, pork and beef dishes.',
    hours_raw: 'Mon–Fri 11:30–13:45 and 17:00–19:45; closed Sat and Sun (Tabelog) — though an October 2026 diner had lunch there on a Saturday. Summer break 8–11 August 2026, lunch only 12–14 August (August 2026 review). No reservations. Cash only — no cards, e-money or QR (Tabelog). 12 seats: two tables downstairs and a tatami room upstairs, shoes off (Tabelog; August–October 2026). Non-smoking. Founded in 1904 (August, September 2026 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 1-17-10, an old house between 玉ひで and an old coffee shop (August 2026) — 1 min from Ningyocho Stn exit A1, 5 min from Suitengumae Stn exit A8',
    cuisine: 'Old Tokyo yoshoku (2026 reviews) · omurice ¥850 (October 2026); omurice with a small menchi katsu ¥1,200, the favourite (August–October 2026); mini omurice with hayashi sauce (September 2026) · menchi katsu rice ¥1,100 (August 2026) · katsudon with miso soup and pickles ¥1,200 (June 2026) · pork sauté ¥1,100, crab fried rice ¥850 (June 2026) · chicken rice ¥750, ham salad ¥700 (August 2026) · curry; hamburg steak, ham rice, fried scallops (2026) · beer: small bottle ¥400, medium ¥650 (2026)',
    website: TB, gmaps: gm('来福亭 人形町'), menu_url: null,
    notes: "[Yoshoku · Ningyocho, a 1904 Western-food house beside Tamahide] A tiny yoshoku restaurant in an old house next to 玉ひで, said to date from 1904, with two tables downstairs and a tatami room upstairs where you take off your shoes. The owner's mother carries the plates up the stairs (August 2026). The order most people make is the omurice, ketchup rice in a thin omelette, with a small menchi katsu on the side for ¥1,200; others choose katsudon, pork sauté or the crab fried rice. It feels like a Showa time slip, prices included. One diner found the katsudon a little salty, and another the menchi on the small side. Cash only; weekday lunch and an early dinner until 19:45.",
    chef_bio: { chef_name: null, roles: ['The owner\'s mother serves (August 2026 review)'], origin: null,
      background: 'Founded in 1904 (August, September 2026 reviews). An August 2026 reviewer gives the owner\'s family name as "Oshio", then reports the nameplate outside read "Oshidori"; the two do not match, so no name is recorded.',
      philosophy: null, specialty: 'Omurice with a small menchi katsu.',
      anecdotes: [
        { text: '"When you go up to the second floor, there’s a tatami room. The owner’s mother brings the dishes up with great care." — August 2026.', source: R + 'B535955007/' },
        { text: '"It featured a classic omurice with two green peas on top, and instead of ketchup, it was served with a rich Hayashi sauce." — September 2026, mini omurice.', source: R + 'B534880563/' },
        { text: '"The Menchi Katsu paired well with the sweet sauce and was delicious. … the portion size is on the smaller side." — August 2026.', source: R + 'B533948386/' },
      ],
      japanese_sources_summary: '食べログ: 来福亭、洋食、日本橋人形町1-17-10、人形町駅A1出口から徒歩1分、水天宮前駅A8出口から徒歩5分、月〜金11:30〜13:45、17:00〜19:45、土日休み、予約不可、カード・電子マネー・QR不可、12席、座敷、禁煙。口コミ(2026年6月〜10月): 1904年創業、玉ひでと古い喫茶店にはさまれた古い家、1階にテーブル2つ、2階に座敷、店主のお母さんが料理を運ぶ、オムライス850円、オムライスと小メンチ1,200円、メンチカツライス1,100円、カツ丼1,200円、ポークソテー1,100円、カニチャーハン850円、ハムサラダ700円、チキンライス750円、土曜の昼に行ったという声、カツ丼が少し塩辛い・メンチが小さいという声も。',
      confidence: 'medium', sources: [TB, R + 'B530450637/', R + 'B533715969/', R + 'B533948386/', R + 'B534880563/', R + 'B535250935/', R + 'B535955007/', R + 'B536697080/', R + 'B537477245/', R + 'B538243728/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off for the upstairs tatami room; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-17-10',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB} (35.684990, 139.783041); cross-checked: GSI 東京都中央区日本橋人形町一丁目17番10号 (go) 6m. Same lot number as 鳥料理 玉ひで (tokyo3__294, address_ja "〒103-0013 東京都中央区日本橋人形町1-17-10"), 10.5 m away, and 5.9 m from Shamo Ramen Hiten (1-17-9); a separate house per an August 2026 review, so its own point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530450637/', R + 'B537477245/', R + 'B538243728/', R + 'B533948386/'],
    price_note: 'Prices from June–October 2026 reviews (the Tabelog menu dates from 2010).', last_checked: TODAY, items: [
      it('', '', 'Omurice', '¥850', 'Rice', 'ask', 'no', 'October 2026.', 'omurice'),
      it('', '', 'Omurice with small menchi katsu', '¥1,200', 'Sets', 'no', 'no', 'August–October 2026.', 'omu_menchi'),
      it('', '', 'Menchi katsu rice', '¥1,100', 'Rice', 'no', 'no', 'August 2026.', 'menchi'),
      it('', '', 'Katsudon (with miso soup)', '¥1,200', 'Rice', 'no', 'no', 'June 2026.', 'katsudon'),
      it('', '', 'Pork sauté', '¥1,100', 'Mains', 'ask', 'no', 'June 2026.', 'pork_saute'),
      it('', '', 'Chicken rice', '¥750', 'Rice', 'ask', 'no', 'August 2026.', 'chicken_rice'),
    ] }, {
    cuisine: '昔ながらの東京の洋食 (2026年の口コミ)・オムライス850円 (2026年10月)、いちばん人気のオムライスと小さなメンチカツ1,200円 (2026年8月〜10月)、ハヤシソースのミニオムライス (2026年9月)・メンチカツライス1,100円 (2026年8月)・味噌汁と漬物付きのカツ丼1,200円 (2026年6月)・ポークソテー1,100円、カニチャーハン850円 (2026年6月)・チキンライス750円、ハムサラダ700円 (2026年8月)・カレー、ハンバーグ、ハムライス、ホタテフライも (2026年)・ビール: 小瓶400円、中瓶650円 (2026年)',
    neighborhood: '日本橋人形町1-17-10、玉ひでと古い喫茶店にはさまれた古い家 (2026年8月)。人形町駅A1出口から徒歩1分、水天宮前駅A8出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: 衣を付けたメンチカツやカツ、ハヤシやカレーのソース。',
    vegan_detail: 'ヴィーガンではない: 卵、鶏肉、豚肉、牛肉の料理。',
    notes: '[洋食・人形町、玉ひでの隣の1904年からの洋食の家] 玉ひでの隣の古い家にある小さな洋食店で、1904年創業という。1階にテーブルが2つ、2階は靴を脱いで上がる座敷。店主のお母さんが料理を2階まで運ぶ (2026年8月)。多くの人が頼むのは、薄焼き卵でケチャップライスを包んだオムライスに小さなメンチカツを添えた1,200円。カツ丼、ポークソテー、カニチャーハンを選ぶ人も。値段も含めて昭和にタイムスリップしたよう。カツ丼が少し塩辛い、メンチが小さめという声も。現金のみ。平日の昼と19時45分までの早めの夜。',
  });
}

// ================================================================ わかい
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13041018/'; const R = TB + 'dtlrvwlst/';
  const SAT = day(['11:00', '14:00']); const MON = day(['11:00', '15:00']); const WK = day(['11:00', '15:00'], ['17:30', '22:00']);
  put({
    id: 'tokyo_wakai_horidome', name: 'わかい (Wakai)', category: 'OMNI',
    lat: 35.686921, lng: 139.780551, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat egg noodles; fried rice alongside.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone broth with stir-fried minced pork.',
    hours_raw: 'Mon 11:00–15:00; Tue–Fri 11:00–15:00 and 17:30–22:00; Saturday lunch on the 1st and 4th Saturdays only, 11:00–14:00; closed 2nd and 3rd Saturdays, Sundays and holidays (Tabelog). A December 2025 regular says lunch always ends at 13:30, and an October 2026 diner arrived as the shop was closing for the day. Cash only — no cards, e-money or QR (Tabelog). 30 seats: 10 at the counter, two tables for four and tatami seating; a private room for 8 (Tabelog). Smoking allowed except at some busy times (Tabelog). No reservations. Self-service water (September 2026).',
    hours: { 0: MON, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Horidomecho 1-7-16, a narrow back alley, red noren and brick tiles — 3 min from Ningyocho Stn, 6 min from Kodenmacho Stn',
    cuisine: 'Old-school Sapporo-style miso ramen: bean sprouts and minced pork stir-fried in a wok, then simmered with a pork-bone broth and white-miso seasoning; medium-thick curly yellow egg noodles (2026 reviews) · miso ramen ¥900 (Tabelog menu, January 2026; ¥950 in one August 2026 review) · shoyu and shio ramen; salt butter ramen (2026) · toppings: kuki-wakame seaweed stems ¥100, chashu ¥150–¥200, corn ¥100, butter ¥50, menma (2025–26); miso butter corn ¥1,050 (October 2026) · mini fried rice ¥200, often sold out (2026) · rice · pepper, shichimi, chili oil and grated garlic on the table',
    website: TB, gmaps: gm('わかい 堀留町'), menu_url: TB + 'dtlmenu/',
    notes: "[Ramen · Horidome-cho, three-generation Sapporo miso ramen in a back alley] A Showa-era ramen shop hidden in an alley so narrow that diners doubt their maps, run by three generations of one family: a grandmother, a mother and a son (August 2026). The wok works over high flames, stir-frying bean sprouts and minced pork before the broth and miso go in, in the old Sapporo style. The result is gentle rather than lardy, with curly yellow noodles and an unusual topping of seaweed stems; regulars add corn and butter, or a ¥200 mini fried rice. Celebrity autographs cover the walls, and the shop has appeared in a film (October 2026). Lunch fills with office workers by noon. Cash only; Saturdays only twice a month.",
    chef_bio: { chef_name: null, roles: ['Family-run across three generations — a grandmother, a mother and a son (August, October 2026 reviews)'], origin: null,
      background: 'Per 2026 reviews: a long-established shop; staff are a grandmother, a mother and a son; the master stirs the broth pot and the wok (August, October 2026). Signed photos of celebrities on the walls; the shop has appeared in a film (October 2026).',
      philosophy: null, specialty: 'Miso ramen with stir-fried bean sprouts and minced pork.',
      anecdotes: [
        { text: '"The staff consisted of a grandmother, a mother, and a son, and the kitchen and dining area were bustling with the lively atmosphere of a popular spot." — August 2026.', source: R + 'B405246845/' },
        { text: '"Fire!! Flames erupted from the Chinese wok! I thought I might singe my bangs!" — October 2026.', source: R + 'B536662614/' },
        { text: '"The seaweed topping (JPY 100) is not the thin kind, but rather the stem seaweed, which has a great texture and is delicious." — December 2025.', source: R + 'B520073282/' },
      ],
      japanese_sources_summary: '食べログ: わかい、ラーメン、日本橋堀留町1-7-16、人形町駅から徒歩3分、月曜11:00〜15:00、火〜金11:00〜15:00、17:30〜22:00、第1・第4土曜11:00〜14:00、第2・第3土曜と日祝休み、予約不可、カード・電子マネー・QR不可、30席 (カウンター10、4人席2、座敷)、8人の個室、喫煙可 (時間帯による)、味噌ラーメン900円。口コミ(2023年2月〜2026年10月): 祖母と母と息子の三代の家族、Sapporo 式の味噌ラーメン、もやしとひき肉を中華鍋で炒める、中太の縮れた黄色い卵麺、茎わかめ100円、チャーシュー、コーン、バター、ミニチャーハン200円、昼はいつも13時半に終わるという声、有名人のサイン、映画に出た、具が少ないという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B405246845/', R + 'B434608796/', R + 'B461515961/', R + 'B520073282/', R + 'B528572086/', R + 'B529020979/', R + 'B530120996/', R + 'B534858093/', R + 'B536662614/', R + 'B537753483/'] },
    cultural_comfort: { level: 'japanese', note: 'Menu on the wall only (August 2026); order promptly at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋堀留町1-7-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (menu updated 2026-01-28); reviews to October 2026.' },
    pin_source: `Tabelog ${TB} (35.686921, 139.780551); cross-checked: GSI 東京都中央区日本橋堀留町一丁目7番16号 (go) 14m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B534858093/', R + 'B536662614/'],
    price_note: 'Miso ramen from the Tabelog menu (January 2026); toppings from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('味噌ラーメン', 'miso rāmen', 'Miso ramen', '¥900', 'Ramen', 'no', 'no', 'Tabelog menu, January 2026 (¥950 in one August 2026 review).', 'miso'),
      it('', '', 'Miso butter corn ramen', '¥1,050', 'Ramen', 'no', 'no', 'October 2026.', 'miso_butter_corn'),
      it('', '', 'Kuki-wakame (seaweed stem) topping', '¥100', 'Toppings', 'ask', 'ask', 'December 2025, August 2026.', 'kukiwakame'),
      it('', '', 'Mini fried rice', '¥200', 'Sides', 'ask', 'no', 'May–August 2026.', 'mini_chahan'),
    ] }, {
    cuisine: '昔ながらの Sapporo 式の味噌ラーメン: もやしとひき肉を中華鍋で炒め、豚骨スープと白味噌で煮る。中太の縮れた黄色い卵麺 (2026年の口コミ)・味噌ラーメン900円 (食べログのメニュー、2026年1月。2026年8月のある口コミでは950円)・醤油と塩のラーメン、塩バターラーメンも (2026年)・トッピング: 茎わかめ100円、チャーシュー150円〜200円、コーン100円、バター50円、メンマ (2025〜26年)、味噌バターコーン1,050円 (2026年10月)・ミニチャーハン200円、売り切れることも多い (2026年)・ご飯・卓上に胡椒、七味、ラー油、おろしにんにく',
    neighborhood: '日本橋堀留町1-7-16、狭い裏路地、赤いのれんとれんがのタイル。人形町駅から徒歩3分、小伝馬町駅から徒歩6分',
    gf_detail: 'グルテンフリーではない: 小麦の卵麺。チャーハンも。',
    vegan_detail: 'ヴィーガンではない: 豚骨スープに炒めたひき肉。',
    notes: '[ラーメン・堀留町、裏路地の三代の Sapporo 味噌ラーメン] 地図を見ても不安になるほど狭い路地に隠れた昭和のラーメン店で、祖母、母、息子の三代の家族が営む (2026年8月)。強火の中華鍋でもやしとひき肉を炒め、スープと味噌を合わせる昔の Sapporo 式。ラードは控えめでやさしく、縮れた黄色い麺に珍しい茎わかめがのる。常連はコーンとバターを足したり、200円のミニチャーハンを付けたり。壁には有名人のサインが並び、映画にも出たことがある (2026年10月)。昼は正午までに会社員で埋まる。現金のみ、土曜の営業は月に2回だけ。',
  });
}

// ================================================================ 天ぷら やぐち
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13248312/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:00'], ['18:00', '21:00']);
  put({
    id: 'tokyo_tempura_yaguchi_ningyocho', name: '天ぷら やぐち (Tempura Yaguchi)', category: 'OMNI',
    lat: 35.686161, lng: 139.784024, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: everything is in a wheat-flour batter, and the chef discusses the wheat flour brands used (November 2025).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood-led tempura omakase (shrimp, squid, anago, sea urchin).',
    hours_raw: 'Mon–Wed and Fri–Sun 12:00–14:00 and 18:00–21:00; closed Thursday (Tabelog). Lunch and dinner are both omakase courses; reservations by phone only (Tabelog). Tabelog notes the lunch tendon is sold out (no longer offered). Cards (VISA, Master, JCB, AMEX); no e-money or QR; no service charge (Tabelog). 8 counter seats; private hire possible; non-smoking; from junior-high age (Tabelog). Opened 1 July 2020 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-9-7, 大江戸アクセス2 1F, on Daimon-dori — 5 min from Ningyocho Stn exit A3 or Suitengumae Stn exit 7',
    cuisine: 'Edo-style tempura omakase in the Mikawa Zezankyo tradition, about 17–20 pieces at lunch or dinner (2025–26 reviews) · a 2026 course: turnip with snow-crab sauce, two shrimp and the shrimp heads, sumi-ika and aori-ika, Kumamoto red eggplant, megochi, Kashima clams, fugu milt with truffle salt, oysters, sea urchin wrapped in shiso, anago, ending with a mini kakiage tendon or tencha (February–July 2026) · seasonal: young ayu, mountain vegetables, matsutake, ginkgo (2025–26) · beer, sake and wine · reviewers spent ¥20,000–¥50,000 a head (2025–26)',
    website: TB, gmaps: gm('天ぷら やぐち 人形町'), menu_url: null,
    notes: "[Tempura · Ningyocho, an eight-seat counter from a Mikawa Zezankyo disciple] An eight-seat tempura counter on Daimon-dori, opened in July 2020 by a chef who trained some 22 years at Mikawa Zezankyo under the master Tetsuya Saotome; a certificate signed by Saotome hangs on the wall (March 2026). Lunch and dinner are the same long omakase, often near twenty pieces: two shrimp and their heads, two kinds of squid fried to be told apart, red eggplant gone creamy, clams cooked rare, sea urchin in shiso, anago, then a small kakiage bowl. Diners praise the precise heat, the light finish and the chef's humour and talk across the counter. A May 2025 reviewer calls it Michelin-starred; it was a Tabelog Tempura 100 pick in 2025. One June 2026 diner found some pieces over-dried, the beer warm and the champagne overpriced. Phone bookings only; closed Thursdays.",
    chef_bio: { chef_name: 'Yaguchi or Taniguchi (sources differ: "Yaguchi-san" in a November 2025 review, matching the shop name; "Mr. Taniguchi" / "Chef Taniguchi" in February, March and August 2026 reviews; no kanji source)', roles: ['Owner-chef, about 22 years at Mikawa Zezankyo before opening (May 2025, August 2026 reviews)'], origin: null,
      background: 'Per reviews: trained about 22 years at Mikawa Zezankyo under Tetsuya Saotome before opening on 1 July 2020 (May 2025; February, August 2026); a certificate of mastery signed by Saotome hangs on the wall; during the pandemic the shop sold a ¥2,000 lunch tendon to support Tsukiji wholesalers (March 2026). A May 2025 reviewer describes it as a Michelin one-star restaurant. Selected for Tabelog Tempura 100 in 2025 (Tabelog).',
      philosophy: 'Light tempura that stays easy to eat however many pieces you have (November 2025 review); ingredients chosen for how they suit the frying and batter (February 2026 review).', specialty: 'Edo-style tempura omakase.',
      anecdotes: [
        { text: '"… \'I can say for sure that I have surpassed the 4th stage.\'" — November 2025, asked how far along the chef is toward the goal.', source: R + 'B517851033/' },
        { text: '"I choose based on how it pairs with my frying technique and the batter." — the chef, on Tokushima lotus root, February 2026.', source: R + 'B528026373/' },
        { text: '"The beer was slightly warm, which is unacceptable. The half bottle of champagne was overpriced at JPY 13,000" — June 2026.', source: R + 'B530288757/' },
      ],
      japanese_sources_summary: '食べログ: 天ぷら やぐち、天ぷら、天ぷら百名店2025、日本橋人形町2-9-7 大江戸アクセス2 1F、人形町駅A3出口・水天宮前駅7番出口から徒歩5分、月〜水・金〜日12:00〜14:00、18:00〜21:00、木曜休み、昼も夜もおまかせ、予約は電話のみ、カード可、サービス料なし、カウンター8席、禁煙、中学生から、2020年7月1日オープン、昼の天丼は終了。口コミ(2025年5月〜2026年8月): 店主は Mikawa Zezankyo で Tetsuya Saotome のもと約22年修業、店名は Yaguchi だが口コミでは Taniguchi とも、ミシュラン一つ星という声、17〜20品ほどのおまかせ、海老、墨烏賊、障泥烏賊、赤茄子、蛤、雲丹の大葉巻き、穴子、かき揚げの天丼、人柄と会話、揚げすぎ・ビールがぬるいという声も。',
      confidence: 'medium', sources: [TB, R + 'B506226405/', R + 'B509086986/', R + 'B513653187/', R + 'B515037407/', R + 'B517851033/', R + 'B523838263/', R + 'B528026373/', R + 'B530288757/', R + 'B530391701/', R + 'B533809995/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Phone bookings only; welcoming to international guests (September 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-9-7 大江戸アクセス2 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews to August 2026.' },
    pin_source: `Tabelog ${TB} (35.686161, 139.784024); cross-checked: GSI 東京都中央区日本橋人形町二丁目9番7号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No published course price; Tabelog budget ¥20,000–¥29,999, reviewers ¥20,000–¥50,000 per head (2025–26).', last_checked: TODAY, items: [
      it('', '', 'Omakase tempura course (lunch or dinner)', 'about ¥20,000–¥30,000', 'Courses', 'no', 'no', 'Tabelog budget range; no listed price.', 'omakase'),
    ] }, {
    cuisine: 'Mikawa Zezankyo の流れの江戸前天ぷらのおまかせ、昼も夜も17〜20品ほど (2025〜26年の口コミ)・2026年のコース: かぶのずわい蟹あん、海老2本と海老の頭、墨烏賊と障泥烏賊、Kumamoto の赤茄子、めごち、Kashima の蛤、白子にトリュフ塩、牡蠣、雲丹の大葉巻き、穴子、締めに小さなかき揚げの天丼か天茶 (2026年2月〜7月)・季節の稚鮎、山菜、松茸、銀杏 (2025〜26年)・ビール、日本酒、ワイン・口コミの支払いは一人2万〜5万円 (2025〜26年)',
    neighborhood: '日本橋人形町2-9-7 大江戸アクセス2 1F、Daimon 通り沿い。人形町駅A3出口・水天宮前駅7番出口から徒歩5分',
    gf_detail: 'グルテンフリーではない: すべて小麦粉の衣で、店主は使う小麦粉の銘柄の話もする (2025年11月)。',
    vegan_detail: 'ヴィーガンではない: 魚介中心の天ぷらのおまかせ (海老、烏賊、穴子、雲丹)。',
    notes: '[天ぷら・人形町、Mikawa Zezankyo の弟子の8席のカウンター] Daimon 通りにある8席の天ぷらのカウンター。Mikawa Zezankyo で Tetsuya Saotome のもと約22年修業した店主が2020年7月に開いた。壁には Saotome の署名入りの証書 (2026年3月)。昼も夜も同じ長いおまかせで、20品近くになることも。海老2本と頭、食べ比べられるように揚げた2種の烏賊、とろりとした赤茄子、レアに揚げた蛤、大葉で巻いた雲丹、穴子、最後に小さなかき揚げ丼。火入れの正確さ、軽い仕上がり、カウンター越しの会話とユーモアが好評。2025年5月の口コミはミシュラン一つ星と書き、2025年の食べログ天ぷら百名店に選ばれた。2026年6月には揚げすぎた品があり、ビールがぬるく、シャンパンが高いという声も。予約は電話のみ、木曜休み。',
  });
}

save();
