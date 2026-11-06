// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 26.
//   + 祇園なか原 Gion Nakahara (small Gion kappo down a narrow alley by Yasaka Shrine)                            [core]
//   + ブランカ Blanca (hard-to-book izakaya of international small plates, north of Sanjo)          [core]
//   + 京都 柳馬場 ほん田亭 Kyoto Yanaginobamba Honda Tei (dashimaki rice bowls at lunch, Goto kue and fish at night) [notable]
//   + ビストロヤナギハラ Bistro Yanagihara (Alsace-trained chef's bistro at Kawaramachi-Nijo; since 2010)           [notable]
//   - 神戸牛 吉祥吉 京都本店 26040329 skipped (吉祥吉 brand, six shops)
//   - 京 うな和 本店 26034563 skipped (うな和, five shops)
//   Same-name counts first (same brand or operator): なか原 1; ブランカ 1 (カサブランカ shops are unrelated); ほん田亭 1;
//   吉祥吉 — its Kyoto site lists 京都本店, 三条河原町 and three 之いち teppanyaki shops (祇園 千久いち, 先斗町, 祇園縄手),
//   and our crawl adds 西心斎橋店: six, see skip; うな和 — 京 うな和 本店, 本店 神宮道, 本店 清水はなれ, 本店 祇園八坂 and
//   大阪うな和 心斎橋 in our crawls: five, see skip; ヤナギハラ 1.
//   Taken in queue order on 2026-11-05: core 26013257, 26023799; notable 26027813, 26040329 (skip), 26034563 (skip),
//   26017103. None of the four is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: ほん田亭 "別途、席料として10%頂いております。";
//   ヤナギハラ "なし"; なか原 and ブランカ have no section.
//   Pins: Tabelog points; GSI lot matches 12–39 m; nearest records 8.7 m or more.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-26');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26040329', '神戸牛 吉祥吉 京都本店: a chain — the brand\'s Kyoto site (kisshokichi-kyoto.com, read 2026-11-05) lists 京都本店, 三条河原町, 祇園 千久いち, 先斗町 之いち and 祇園縄手 之いち, and our crawl also has 神戸牛 吉祥吉 西心斎橋店: six shops of the same brand and operator');
skip('26034563', '京 うな和 本店: a chain — our crawls list five うな和 shops: 京 うな和 本店, 京 うな和 本店 神宮道, 京うな和本店 清水はなれ, 京うな和本店 祇園八坂 and 大阪うな和 心斎橋');

// ================================================================ 祇園なか原
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26013257/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_gion_nakahara', name: '祇園なか原 (Gion Nakahara)', category: 'OMNI',
    lat: 35.004267, lng: 135.776738, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the shop asks about likes, dislikes and foods guests cannot eat (August 2025); dashi-based kappo with tempura; no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kappo of fish on dashi (2024–26 reviews).',
    hours_raw: 'Mon–Sat 11:30–14:00 and 17:00–22:00; closed Sunday and on Mondays that are holidays (Tabelog). Bookings taken; a nine-course dinner runs about two hours (Tabelog; May 2025). 13 seats: six counter seats, a small raised area and a table; non-smoking; JCB, AMEX and Diners (Tabelog; 2024–25 reviews). Down a very narrow back alley in front of Yasaka Shrine, three streets west of Minami-za (2024–25 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion north of Shijo, in a narrow alley by Yasaka Shrine — 6 min from Gion-Shijo Stn',
    cuisine: 'Small Gion kappo: a mini kaiseki lunch (about ¥5,000–6,000) and dinner courses of around nine dishes (2024–26 reviews) · in reviews: hassun for Hinamatsuri, clam soup, live flounder and guji sashimi, kombu-cured sea bream, grilled moroko, grilled fugu, bamboo shoots grilled, as tempura and simmered, young ayu and koshiabura tempura, sea-bream shuto, round daikon in sea-bream broth with Kujo negi, kamadaki rice to finish (2024–26 reviews)',
    website: null, gmaps: gm('祇園なか原'), menu_url: null,
    notes: "[Kappo · Gion, down a narrow alley] A tiny kappo hidden in one of Gion's narrowest alleys near Yasaka Shrine: seasonal kaiseki with a rich Kansai dashi, finished with kamadaki rice. Mini kaiseki lunch about ¥5,000–6,000; dinner about ¥10,000–19,999. Six counter seats; book. Closed Sunday.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed in the sources)'], origin: null,
      background: 'Per reviews: a couple ran the room with no other servers (March 2024); in August 2024 the owner worked with two apprentices. A November 2024 reviewer heard it had held a Michelin star four years in a row but no longer does.',
      philosophy: null, specialty: 'Mini kaiseki lunch; kamadaki rice.',
      anecdotes: [
        { text: 'A March 2024 diner, there on a furusato-tax voucher, found it more like a calm izakaya than a kaiseki house, the couple working seamlessly but a little rushed.', source: R + 'B481127405/' },
        { text: 'An August 2025 guest was asked about likes, dislikes and any foods to avoid.', source: R + 'B511780830/' },
        { text: '"I heard this place earned Michelin stars 4 years in a row, but it\'s no longer recognized." — November 2024.', source: R + 'B494395806/' },
      ],
      japanese_sources_summary: '食べログ: 祇園なか原、日本料理、東山区祇園町北側286-5、祇園四条駅から446m、月〜土 11:30〜14:00・17:00〜22:00、日曜と祝日の月曜休み、13席 (カウンター)、禁煙、カード (JCB・AMEX・Diners)。口コミ (2024年3月〜2026年7月、英語): 八坂神社前の細い路地、夫婦で営む (2024年3月)、店主と弟子2人 (2024年8月)、ミシュランの星を4年連続で得たが今はない (2024年11月)、ミニ懐石の昼5,000〜6,000円、9品のコース、ひな祭りの八寸、蛤の吸い物、平目やぐじの造り、鯛の昆布締め、もろこ、ふぐ、筍、稚鮎とこしあぶらの天ぷら、鯛の酒盗、丸大根、九条ねぎ、釜炊きのご飯。',
      confidence: 'medium', sources: [TB, R + 'B481127405/', R + 'B483831636/', R + 'B494395806/', R + 'B498621627/', R + 'B503151615/', R + 'B507438804/', R + 'B511780830/', R + 'B519451796/', R + 'B522730791/', R + 'B531285817/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; the alley entrance is hard to find.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町北側286-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.004267, 135.776738); cross-checked: GSI 京都府京都市東山区祇園町北側286番地 (lot) 17m; 8.7 m from kyr_gion_duck_noodles; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B498621627/', R + 'B519451796/'],
    price_note: 'No menu or prices read; reviewers report ¥5,000–6,000 at lunch and ¥10,000–19,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Mini kaiseki lunch', '', 'Lunch', 'ask', 'no', '', 'mini_kaiseki'),
      it('', '', 'Dinner course (about nine dishes)', '', 'Dinner', 'ask', 'no', '', 'dinner_course'),
    ] }, {
    cuisine: '祇園の小さな割烹: 昼のミニ懐石 (5,000〜6,000円ほど) と、9品ほどの夜のコース (2024〜26年の口コミ)・口コミの料理: ひな祭りの八寸、蛤の吸い物、活け平目やぐじの造り、鯛の昆布締め、もろこの焼き物、焼きふぐ、筍の焼き物・天ぷら・炊いたん、稚鮎とこしあぶらの天ぷら、鯛の酒盗、鯛のあらで炊いた丸大根と九条ねぎ、締めの釜炊きご飯 (2024〜26年の口コミ)',
    neighborhood: '四条の北の祇園、八坂神社そばの細い路地。祇園四条駅から徒歩6分',
    gf_detail: '予約時に要確認。好き嫌いや食べられないものを聞いてくれる (2025年8月)。出汁の割烹で天ぷらもある。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁の魚の割烹 (2024〜26年の口コミ)。',
    notes: '[割烹・祇園、細い路地の奥] 八坂神社近くの祇園でも特に細い路地に隠れた小さな割烹。関西らしい出汁の旬の懐石で、締めは釜炊きご飯。昼のミニ懐石は5,000〜6,000円ほど、夜は1万〜2万円ほど。カウンター6席、予約を。日曜休み。',
  });
}

// ================================================================ ブランカ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023799/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '21:00']);
  put({
    id: 'kyoto_blanca_izakaya', name: 'ブランカ (Blanca)', category: 'OMNI',
    lat: 35.00968, lng: 135.76652, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Kara-age, fried noodles, shumai and spiced fried dishes; no gluten information (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan in practice: pork, chicken, lamb, shellfish and oysters run through the menu (2025–26 reviews).',
    hours_raw: 'Mon–Sat from 18:00 (last order 21:00 per Tabelog); closed Sunday and some other days (Tabelog). A March 2025 reviewer says there is no time limit and the rice is ready around 21:00. Bookings for the next month open at the start of each month and are hard to get; Saturday walk-ins are possible if you arrive before opening, when the head chef may be away and the menu shorter (Tabelog; April 2026). Cash only — no cards, e-money or QR (Tabelog). 11 seats: 7 at the counter, 4 at a table; a private room for 6 for regulars, with a special course (Tabelog). North of Sanjo; 4 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'North of Sanjo, near Kyoto City Hall — 4 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'An izakaya of small plates with flavours from around the world (2025–26 reviews): pork and cilantro salad with white-sesame dressing, cilantro white tofu, potato namul, kara-age, boiled pork with cucumber and dipping sauce, fig and steamed chicken with sesame, eggplant nanban with tokoroten, sesame tofu, simmered shellfish platter, steamed clams, Miyazu rock oysters, lamb shumai, "Islamic" spiced fried shrimp, salt-fried chicken with corn, Thai-style fried noodles, rice ready around 9 pm; rum-raisin ice cream and coffee awamori · Friday special course ¥6,000 (May 2026)',
    website: null, gmaps: gm('ブランカ 京都 御幸町三条'), menu_url: null,
    notes: "[Izakaya · near Sanjo and Kyoto City Hall] One of Kyoto's hardest-to-book izakaya, loved by restaurant people after hours: eleven seats and a stream of small, deeply flavoured plates — cilantro and white-sesame salad, lamb shumai, spiced fried shrimp, Thai-style noodles. About ¥4,000–10,000. Cash only; bookings open monthly; closed Sunday.",
    chef_bio: { chef_name: 'Tetsu-san (as a November 2025 reviewer calls the chef)', roles: ['Head chef'], origin: null,
      background: 'Per reviews: a popular izakaya that restaurant workers visit after hours (May 2026); a November 2025 reviewer had eaten the chef\'s cooking at an inn the chef runs with a friend in Yura before coming here. When the head chef is away on Saturdays the staff run a shorter menu (April 2026).',
      philosophy: null, specialty: 'Cilantro and white-sesame dishes; small plates for drinking.',
      anecdotes: [
        { text: 'An April 2026 regular walked in on a Saturday before opening, knowing walk-ins are possible then — though the head chef was off and the menu limited.', source: R + 'B120510605/' },
        { text: 'A June 2026 diner in Kyoto on a typhoon night phoned for a cancellation and got a table.', source: R + 'B531269739/' },
        { text: 'A party of five in November 2025 found a separate room next door and missed only chatting with Tetsu-san at the counter.', source: R + 'B518057101/' },
      ],
      japanese_sources_summary: '食べログ: ブランカ、居酒屋、中京区御幸町三条上ル丸屋町334、京都市役所前駅から248m、月〜土 18:00〜21:00 (L.O. 21:00)、日曜休み・不定休、翌月の予約は毎月はじめに受付、カード・電子マネー・QR 不可、11席 (カウンター7、テーブル4)、常連向けの個室6名 (特別コース)、禁煙。口コミ (2025年3月〜2026年7月、英語): パクチーと豚の白胡麻サラダ、パクチー白和え、ポテトナムル、唐揚げ、茹で豚、無花果と蒸し鶏、茄子の南蛮とところてん、貝の盛り合わせ、Miyazu の岩牡蠣、羊の焼売、イスラム風の海老フライ、タイ風焼きそば、金曜の特別コース6,000円、土曜は開店前なら予約なしでも、料理長 Tetsu-san、Yura の宿。',
      confidence: 'medium', sources: [TB, R + 'B120510605/', R + 'B468807189/', R + 'B502654073/', R + 'B512857424/', R + 'B518057101/', R + 'B518834467/', R + 'B529308016/', R + 'B531269739/', R + 'B532171345/', R + 'B532819231/'] },
    cultural_comfort: { level: 'japanese', note: 'Hard to book (next month opens at the start of each month); cash only; mostly regulars (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区御幸町三条上ル丸屋町334',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.009680, 135.766520); cross-checked: GSI 京都府京都市中京区丸屋町334番地 (lot) 39m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529308016/'],
    price_note: 'No menu read; the Friday course price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Friday special course', '¥6,000', 'Courses', 'ask', 'no', 'May 2026 review.', 'friday_course'),
      it('', '', 'Pork and cilantro salad with white-sesame dressing', '', 'Small plates', 'ask', 'no', '', 'cilantro_salad'),
    ] }, {
    cuisine: '世界の味を取り入れた小皿の居酒屋 (2025〜26年の口コミ): パクチーと豚の白胡麻ドレッシングのサラダ、パクチーの白和え、ポテトナムル、唐揚げ、茹で豚ときゅうりのたれ、無花果と蒸し鶏の胡麻和え、茄子の南蛮とところてん、胡麻豆腐、貝の煮物の盛り合わせ、蒸し蛤、Miyazu の岩牡蠣、羊の焼売、イスラム風のスパイスの海老フライ、鶏ととうもろこしの塩唐揚げ、タイ風焼きそば、21時ごろ炊き上がるご飯。ラムレーズンのアイスとコーヒー泡盛・金曜の特別コース6,000円 (2026年5月)',
    neighborhood: '三条の北の御幸町、京都市役所の近く。京都市役所前駅から徒歩4分',
    gf_detail: '要確認。唐揚げ、焼きそば、焼売、スパイスの揚げ物。グルテンの情報はない (2025〜26年の口コミ)。',
    vegan_detail: '実際にはヴィーガン不可。豚、鶏、羊、貝、牡蠣が並ぶ (2025〜26年の口コミ)。',
    notes: '[居酒屋・三条近くの御幸町] 京都でも特に予約の取りにくい居酒屋で、飲食店の人が仕事帰りに通う。11席で、パクチーと白胡麻のサラダ、羊の焼売、スパイスの海老フライ、タイ風焼きそばなど味の濃い小皿が次々と。4千〜1万円ほど。現金のみ、予約は毎月はじめに翌月分、日曜休み。',
  });
}

// ================================================================ 京都 柳馬場 ほん田亭
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027813/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:30', '14:30'];
  put({
    id: 'kyoto_yanaginobamba_hondatei', name: '京都 柳馬場 ほん田亭 (Kyoto Yanaginobamba Honda Tei)', category: 'OMNI',
    lat: 35.010132, lng: 135.763762, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashimaki bowls with dashi, soy-based sauces and soboro; fish courses; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg and dashi bowls with chicken, meat or eel; fish courses (Tabelog; 2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:00) daily except Tuesday; dinner Mon 17:30–21:00, Wed–Sun and days before/after holidays 17:30–22:30 (food last order 21:30), holidays 17:30–21:30; closed Tuesday (Tabelog). Lunch takes no bookings and is cash only (May 2026); dinner courses can be booked (Tabelog). Seat charge 10% — Tabelog\'s Japanese original: "別途、席料として10%頂いております。". 26 seats: about 10 at the counter and sunken-floor tables; non-smoking, smoking outside; cards incl. UnionPay (Tabelog; July 2026). On Yanaginobamba-dori; 3 min from Karasuma-Oike Stn exit 3-1 (Tabelog).',
    hours: { 0: day(L, ['17:30', '21:00']), 2: day(L, ['17:30', '22:30']), 3: day(L, ['17:30', '22:30']), 4: day(L, ['17:30', '22:30']), 5: day(L, ['17:30', '22:30']), 6: day(L, ['17:30', '22:30']) }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Yanaginobamba-dori near Oike — 3 min from Karasuma-Oike Stn',
    cuisine: 'Two faces: at lunch, Kyoto-style dashimaki rice bowls — a thick, dashi-heavy rolled omelette made in the "Kyomaki" way — with chicken soboro and golden ginger sauce ¥1,430, meat soboro ¥1,430, mentaiko, or eel (half sizes) (2026 reviews); at night, fish from a live tank prepared with ikejime, line-caught wild kue from Nagasaki\'s Goto Islands as nabe, Awaji fugu, yellowtail shabu-shabu and fish courses from ¥5,000 (Tabelog; January 2026)',
    website: null, gmaps: gm('京都 柳馬場 ほん田亭'), menu_url: TB + 'dtlmenu/',
    notes: "[Dashimaki bowls & seafood · near Karasuma-Oike] By day, a queue for rice bowls crowned with a huge, wobbly Kyoto dashimaki omelette (about ¥1,430, cash, no bookings); by night, a fish restaurant with live-tank seafood, Goto-island kue hot pot and fugu, courses from ¥5,000 plus a 10% seat charge. Closed Tuesday.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; chats with guests at the counter per the operator and reviews)'], origin: null,
      background: 'Per the operator: fish kept alive in tanks and dispatched with ikejime by optical fibre; wild kue line-caught off Nagasaki\'s Goto Islands shipped alive; fugu from Awaji. A July 2026 reviewer watched the dashimaki made in the "Kyomaki" way, with more dashi and no air.',
      philosophy: null, specialty: 'Kyoto dashimaki rice bowl; kue nabe.',
      anecdotes: [
        { text: 'The staff also recommended good matcha-parfait shops — February 2026.', source: R + 'B523349482/' },
        { text: 'An October 2026 diner found the bowl lovely at first but a little monotonous, and the staff\'s coordination slightly uneven.', source: R + 'B537261830/' },
        { text: 'Another October 2026 guest was offered the chance to film the sauce being poured.', source: R + 'B537611209/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 京都 柳馬場 ほん田亭、海鮮・日本料理、中京区柳八幡町75-6 LS京都ビル 1F、烏丸御池駅3-1出口から徒歩3分、昼11:30〜14:30 (L.O. 14:00)、夜 月17:30〜21:00、水〜日・祝前後17:30〜22:30、祝日17:30〜21:30、火曜休み、別途席料として10%、26席 (掘りごたつとカウンター)、カード可、生け簀の魚を光ファイバーで神経締め、Nagasaki の Goto Islands の一本釣りの天然クエの鍋、Awaji のふぐ、5,000円からの魚のコース、冬は鰤しゃぶと天然とらふぐ。口コミ (2026年1〜10月、英語): 京だし巻き丼 鶏そぼろ金あんかけ1,430円、肉そぼろ1,430円、明太子、鰻、京巻き、昼は現金のみ・予約不可。',
      confidence: 'medium', sources: [TB, R + 'B521003792/', R + 'B523349482/', R + 'B523904465/', R + 'B527679801/', R + 'B528706588/', R + 'B531367451/', R + 'B537243099/', R + 'B537261830/', R + 'B537319795/', R + 'B537611209/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Lunch: queue, cash only; dinner: book; 10% seat charge.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柳八幡町75-6 LS京都ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.010132, 135.763762); cross-checked: GSI 京都府京都市中京区柳八幡町75番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527679801/', R + 'B537611209/', TB],
    price_note: 'Bowl prices from May and October 2026 reviews; course floor from Tabelog\'s shop text; 10% seat charge at dinner per Tabelog.', last_checked: TODAY, items: [
      it('京だし巻き丼 鶏そぼろ金あんかけ', '', 'Kyoto dashimaki bowl, chicken soboro with golden sauce', '¥1,430', 'Lunch', 'ask', 'no', 'Cash only at lunch.', 'dashimaki_don'),
      it('', '', 'Fish course (dinner)', '¥5,000~', 'Dinner', 'ask', 'no', 'Plus 10% seat charge.', 'fish_course'),
    ] }, {
    cuisine: '昼と夜で二つの顔: 昼は「京巻き」で出汁をたっぷり含ませた厚いだし巻きの京だし巻き丼。鶏そぼろ金あんかけ1,430円、肉そぼろ1,430円、明太子、鰻 (ハーフあり) (2026年の口コミ)。夜は生け簀の魚を神経締めで、Nagasaki の Goto Islands の一本釣りの天然クエの鍋、Awaji のふぐ、鰤しゃぶ、5,000円からの魚のコース (食べログ、2026年1月)',
    neighborhood: '御池近くの柳馬場通。烏丸御池駅から徒歩3分',
    gf_detail: '要確認。出汁と醤油系のあんやそぼろのだし巻き丼、魚のコース。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵と出汁に鶏、肉、鰻をのせた丼と魚のコース (食べログ、2026年の口コミ)。',
    notes: '[だし巻き丼と魚・烏丸御池近く] 昼は大きくふるふるの京風だし巻きをのせた丼に行列 (1,430円ほど、現金のみ、予約不可)。夜は生け簀の魚、Goto Islands のクエ鍋やふぐの魚料理の店で、コースは5,000円から、席料10%別。火曜休み。',
  });
}

// ================================================================ ビストロヤナギハラ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26017103/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '21:30']);
  put({
    id: 'kyoto_bistro_yanagihara', name: 'ビストロヤナギハラ (Bistro Yanagihara)', category: 'OMNI',
    lat: 35.013648, lng: 135.768788, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Bistro dishes with sauces, pâtés, bread and croutons; the omakase can be adjusted on request (December 2024); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: charcuterie, foie gras, venison, salmon and trout (2024–26 reviews).',
    hours_raw: 'Mon, Tue, Fri, Sat, Sun 17:30–21:30 (last order 19:30); closed Wednesday and Thursday (Tabelog). Bookings needed, often a month or two ahead, also online (2025 reviews). Service charge: none — Tabelog\'s Japanese original says "なし". 10 seats: tables and 2 at the counter; non-smoking; cards (Tabelog). Portions are large — staff suggest two starters and one main for two (2025–26 reviews). At Kawaramachi-Nijo; 5 min from Kyoto Shiyakusho-mae Stn (Tabelog).',
    hours: { 0: H, 1: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi-Nijo, north of Kyoto City Hall — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Classic French bistro from an Alsace-trained chef (April 2025): charcuterie platter of liver pâté, rillettes, smoked chicken, pâté de campagne, house roast ham and sauerkraut ¥1,540 per person; thick-cut smoked Shinshu salmon ¥3,080; white or German asparagus with egg sauce; mushroom salad; gazpacho with foie gras and venison; saffron trout; chicken-liver mousse (2024–26 reviews) · omakase course ¥8,800 (October 2024; February 2026) or à la carte; wine to match',
    website: null, gmaps: gm('ビストロヤナギハラ 京都'), menu_url: null,
    notes: "[French bistro · Kawaramachi-Nijo] A ten-seat bistro run by an Alsace-trained chef since 2010: generous charcuterie, thick-cut smoked salmon, foie gras and game, with good wine. Omakase ¥8,800 or à la carte (portions are large). Book well ahead; dinner only, closed Wednesday and Thursday.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; trained in Alsace per an April 2025 reviewer)'], origin: null,
      background: 'Opened 12 December 2010 (Tabelog). An April 2025 reviewer calls it a Bib Gourmand bistro run by a chef trained in Alsace; a December 2024 guest returned after about eight years.',
      philosophy: null, specialty: 'Charcuterie; thick-cut smoked salmon.',
      anecdotes: [
        { text: 'An October 2024 birthday party praised the service of "the beautiful staff member (the owner\'s wife?)", though the crab tartare could have had more crab.', source: R + 'B493224826/' },
        { text: 'A December 2024 guest who could not eat much had the omakase adjusted so every dish could be enjoyed.', source: R + 'B497462896/' },
        { text: 'An April 2025 diner was advised that two starters and one main would be plenty.', source: R + 'B505396627/' },
      ],
      japanese_sources_summary: '食べログ: ビストロヤナギハラ、フレンチ・ビストロ、中京区河原町二条上る清水町358、京都市役所前駅から徒歩5分、月火金土日 17:30〜21:30 (L.O. 19:30)、水木休み、サービス料: なし、10席 (テーブル、カウンター2)、禁煙、カード可、2010年12月12日オープン。口コミ (2024年10月〜2026年9月、英語): アルザスで修業したシェフ、ビブグルマン、シャルキュトリーの盛り合わせ1人1,540円、Shinshu サーモンの燻製3,080円、ホワイトアスパラ、マッシュルームのサラダ、フォアグラと鹿のガスパチョ、鱒のサフラン、鶏レバーのムース、おまかせコース8,800円、量が多い、予約は1〜2か月前。',
      confidence: 'medium', sources: [TB, R + 'B493224826/', R + 'B497462896/', R + 'B504440639/', R + 'B505396627/', R + 'B516009948/', R + 'B516475773/', R + 'B523211688/', R + 'B529089197/', R + 'B532597252/', R + 'B536183996/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a month or two ahead; generous portions.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区河原町二条上る清水町358',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.013648, 135.768788); cross-checked: GSI 京都府京都市中京区清水町358番地 (lot) 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B504440639/', R + 'B523211688/'],
    price_note: 'No menu read; prices from 2024–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥8,800', 'Courses', 'ask', 'no', 'October 2024 and February 2026 reviews.', 'omakase'),
      it('', '', 'Charcuterie assortment (per person)', '¥1,540', 'Starters', 'ask', 'no', 'April 2025 review.', 'charcuterie'),
      it('', '', 'Thick-cut smoked Shinshu salmon', '¥3,080', 'Starters', 'ask', 'no', 'April 2025 review.', 'smoked_salmon'),
    ] }, {
    cuisine: 'アルザスで修業したシェフのクラシックなビストロ (2025年4月): レバーのパテ、リエット、燻製の鶏、パテ・ド・カンパーニュ、自家製のローストハム、シュークルートのシャルキュトリー盛り合わせ1人1,540円、厚切りの Shinshu サーモンの燻製3,080円、卵のソースのホワイトアスパラ、マッシュルームのサラダ、フォアグラと鹿のガスパチョ、鱒のサフラン、鶏レバーのムース (2024〜26年の口コミ)・おまかせコース8,800円 (2024年10月、2026年2月) かアラカルト。合わせるワイン',
    neighborhood: '京都市役所の北の河原町二条。京都市役所前駅から徒歩5分',
    gf_detail: '予約時に要確認。ソースの料理、パテ、パン、クルトン。おまかせは希望に合わせて調整してくれる (2024年12月)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。シャルキュトリー、フォアグラ、鹿、サーモン、鱒 (2024〜26年の口コミ)。',
    notes: '[フレンチビストロ・河原町二条] アルザスで修業したシェフの10席のビストロで、2010年から。たっぷりのシャルキュトリー、厚切りのサーモンの燻製、フォアグラやジビエに、合うワイン。おまかせ8,800円かアラカルト (量は多め)。早めの予約を。夜のみ、水・木曜休み。',
  });
}

save();
