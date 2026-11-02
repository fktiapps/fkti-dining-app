// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), NOTABLE phase, circle shin-osaka; worker osw8 (lane: Tabelog id odd), batch 21.
//   + 焼肉はうす たられば Yakiniku House Tarareba (whole-cow Kagoshima A5 wagyu yakiniku by Hankyu Minamikata, since 2024)
//   + 四季自然喰処たちばな 新大阪本店 Shiki Shizen Kuidokoro Tachibana (a 200-seat Japanese banquet house by Shin-Osaka, homemade tofu lunches)
//   - skipped お好み焼き 京ちゃばな 新大阪駅店 27067381: chain by count, 5 shops (京都駅前, 南新町, 梅田北新地, 新大阪駅, 心斎橋南船場) per
//     shops.jsonl (ids incl. 26005494, 27004020, 27067381, 27008088) and web search; osw1 skipped the brand in batch 15 (coordinator review).
//   - skipped 551蓬莱 アルデ新大阪店 27000813 and 551蓬莱 新幹線新大阪駅店 27080001: chain; about 60 shops in six prefectures (Toyo Keizai; MHLW job-fair
//     sheet, 2023; web search 2026-11-02).
//   - skipped 道頓堀 今井 大阪のれんめぐり店 27060865: same-concept branch of 道頓堀 今井 本店, already in data.
//   - skipped グリルキャピタル東洋亭 新大阪店 27087653: chain; at least five shops (京都北山本店, ポルタ, なんば, 阪急うめだ, 新大阪) per Retty and others
//     (web search 2026-11-02).
//   - left undecided (no skip): BW STATION 27091091: Colowide group; an October 2026 diner paid with Colowide shareholder benefits (B537907653), so it
//     belongs to a large chain group. Flagged: the BW STATION brand count itself was not found.
//   - skipped 肉匠 牛虎 西中島店 27110181: same-concept branch of 肉匠 牛虎, already in data (心斎橋店).
//   - skipped りくろーおじさんの店 JR新大阪駅中央口店 27094671 and 新幹線改札内店 27121695: chain; 11 shops in Osaka Prefecture per a travel site, with a
//     Grand Front shop opened September 2026 (web search 2026-11-02).
//   - left undecided (no skip): エスタシオン カフェタイム 27018941: run by the JR West group (a May 2026 review); flagged, no shop count for the brand found.
//   Shop counts for the drafted:
//   - たられば: one shop (web search 2026-11-02).
//   - たちばな: at least two shops, this 新大阪本店 and a ヒルトンプラザ 大阪本店 / Umeda shop (Hot Pepper; a July 2026 review); drafted as a small group.
//   Not yet counted, left for the next batch: 1ポンドのステーキハンバーグ タケル, ローマ軒, 麺家 新大阪上り, 回転寿司がんこ, Juicer Bar.
//   None is in data/osaka.json by id, name or address. Tachibana is on the 2nd floor of the building whose 1st floor holds 磯一 (33 m apart on
//   Tabelog points); Tarareba 15 m from 福香源 at another address; no new pin within 3 m of another (check-stacked-pins).
//   open_late per Greg's rule (after 22:00): Tarareba 23:00 and Tachibana 23:00 (weekdays) true.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw8-21');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27000813', 'chain: 551蓬莱, about 60 shops in six prefectures (Toyo Keizai; MHLW 2023; web search 2026-11-02)');
skip('27080001', 'chain: 551蓬莱, about 60 shops in six prefectures (Toyo Keizai; MHLW 2023; web search 2026-11-02)');
skip('27060865', 'same-concept branch of 道頓堀 今井 本店, already in data');
skip('27087653', 'chain: グリルキャピタル東洋亭, at least five shops (北山本店, ポルタ, なんば, 阪急うめだ, 新大阪), web search 2026-11-02');
skip('27110181', 'same-concept branch of 肉匠 牛虎, already in data (心斎橋店)');
skip('27094671', 'chain: りくろーおじさんの店, 11 shops in Osaka Prefecture (travel site, web search 2026-11-02)');
skip('27121695', 'chain: りくろーおじさんの店, 11 shops in Osaka Prefecture (travel site, web search 2026-11-02)');
skip('27067381', 'chain by count: 京ちゃばな, 5 shops (京都駅前, 南新町, 梅田北新地, 新大阪駅, 心斎橋南船場) per shops.jsonl (incl. 26005494, 27004020, 27067381, 27008088) and web search; osw1 skipped the brand in batch 15');

// ================================================================ 焼肉はうす たられば
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27144201/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_yakiniku_house_tarareba_nishinakajima', name: '焼肉はうす たられば (Yakiniku House Tarareba)', category: 'OMNI',
    lat: 34.726531, lng: 135.500336, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: sauces and marinades, sukiyaki-style ribeye, cold noodles and bibimbap.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house with meat sashimi.',
    hours_raw: 'Mon–Sat and days before holidays 17:00–23:00 (last order 22:30); holidays 17:00–22:00 (last order 21:30); closed Sunday; extra closures on social media (Tabelog). Reservations accepted; a table-only booking needs ¥2,000 a head in food and drink (Tabelog). Cards, e-money and QR; no cover charge (Tabelog). 35 seats: 8 at an L-shaped counter on the ground floor, sunken-kotatsu tables upstairs; up to 27 together (Tabelog; September 2026). Orders by tablet or QR code; half portions for solo diners (2026). Strollers can be left downstairs (Tabelog). Opened 2 September 2024 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '西中島3-12-8, 2 min (160 m) from Hankyu Minamikata, 3 min from Nishinakajima-Minamigata; red lanterns for Kagoshima black beef outside (Tabelog; October 2026)',
    cuisine: 'Charcoal yakiniku of Kagoshima black wagyu, A5 female cattle of BMS 10 or above, bought as whole animals (2026) · rare cuts: haneshita, kurimi, misuji, kainomi in a five-cut assortment; premium assortment ¥3,300 (2026) · tongue three ways ¥4,180 (half size available); large ribeye grilled sukiyaki-style with egg yolk or grated ponzu ¥1,760; "yodare" harami ¥990 (September 2026) · sashimi: chicken breast ¥660, premium harami ¥1,870, special tongue ¥1,980; Sakurajima yukhoe (September 2026) · offal platters; jidori chicken, kurobuta pork, koune shabu-shabu (2026) · "Tarare" cold noodles, bibimbap, kimchi, salted cabbage (2026) · courses: ¥4,500 without drinks; ¥6,500 for 18 dishes with all-you-can-drink; ¥8,000 with drinks (2026)',
    website: null, gmaps: gm('焼肉はうす たられば 西中島'), menu_url: null,
    notes: '[Yakiniku · Minamikata, whole-cow Kagoshima wagyu over charcoal] A 35-seat yakiniku house two minutes from Hankyu Minamikata, opened in 2024, that buys whole Kagoshima black wagyu, A5 female cattle, and grills it over charcoal. That means rare cuts like misuji and kainomi alongside thick tongue and a big sukiyaki-style ribeye with egg yolk; brave diners also order tongue or harami sashimi (2026). Solo diners get half portions at the ground-floor counter; groups sit upstairs on sunken kotatsu, with courses from ¥4,500. Order by tablet. Open to 23:00; closed Sundays.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per Tabelog: yakiniku and offal; opened 2 September 2024. Per reviews: "specializes in Kagoshima A5 rank black-haired Wagyu beef with a BMS score of 10 or higher" (September 2026); whole-cattle buying gives "rare parts that are hard to find elsewhere" (August 2026); "the staff provides excellent service, always smiling and accommodating even when dealing with tipsy patrons" (September 2026); a regular on the fifteenth visit (September 2026); one diner booked the counter and was seated upstairs (October 2026); upstairs table chairs bump together (September 2026).',
      philosophy: null, specialty: 'Whole-cow Kagoshima A5 wagyu; tongue three ways.',
      anecdotes: [
        { text: '"A beautiful assortment featuring cuts like Haneshita, Kurimi, Misuji, and Kainomi, all showcasing exquisite marbling." — August 2026, five rare cuts.', source: R + 'B534743437/' },
        { text: '"They even offer half-size portions for solo diners, which is great!" — October 2026.', source: R + 'B537357251/' },
        { text: '"It’s hard to enjoy raw tongue unless it’s really good, but this one was excellent!" — September 2026, special tongue sashimi ¥1,980.', source: R + 'B536640761/' },
      ],
      japanese_sources_summary: '食べログ: 焼肉はうす たられば、焼肉・ホルモン、大阪市淀川区西中島3-12-8、阪急南方駅から徒歩2分、西中島南方駅から3分、月〜土・祝前日17:00〜23:00、祝日17:00〜22:00、日曜休み、席のみの予約はひとり2,000円以上、カード・電子マネー・QR 可、チャージなし、35席 (1階カウンター8、2階掘りごたつ)、2024年9月2日オープン。口コミ (2026年): 鹿児島の黒毛和牛 A5 の雌牛 (BMS10以上) を一頭買い、炭火、希少部位5種 (haneshita、kurimi、misuji、kainomi など)、上肉の盛り合わせ3,300円、タン3種4,180円 (ハーフあり)、大判リブロースのすき焼き風1,760円、よだれハラミ990円、鶏むねの刺身660円、上ハラミの刺身1,870円、特選タンの刺身1,980円、Sakurajima ユッケ、ホルモン、地鶏、黒豚、koune のしゃぶしゃぶ、Tarare 冷麺、ビビンバ、コース4,500円・6,500円・8,000円、タブレットや QR で注文、ひとりならハーフサイズ。',
      confidence: 'medium', sources: [TB, R + 'B491392069/', R + 'B491395226/', R + 'B502257668/', R + 'B528488265/', R + 'B534537521/', R + 'B534743437/', R + 'B535889667/', R + 'B536200413/', R + 'B536321219/', R + 'B536640761/', R + 'B537357251/', R + 'B538056431/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tablet and QR ordering; welcomes solo diners (2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区西中島3-12-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市淀川区西中島三丁目12番8号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536635959/', R + 'B534537521/', R + 'B502257668/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Premium meat assortment', '¥3,300', 'Yakiniku', 'no', 'no', 'August 2026.', 'jo_moriawase'),
      it('', '', 'Large ribeye, sukiyaki-style', '¥1,760', 'Yakiniku', 'no', 'no', 'September 2026.', 'ribeye_yakisuki'),
      it('', '', 'Tongue three ways', '¥4,180', 'Yakiniku', 'ask', 'no', 'September 2026.', 'tan_3shu'),
      it('', '', 'Course without drinks', '¥4,500', 'Courses', 'no', 'no', 'October 2026.', 'course_4500'),
    ] }, {
    cuisine: '炭火で焼く鹿児島の黒毛和牛、BMS10以上の A5 の雌牛を一頭買い (2026年)・希少部位: haneshita、kurimi、misuji、kainomi などの5種盛り。上肉の盛り合わせ3,300円 (2026年)・タン3種4,180円 (ハーフも)。大判リブロースを卵黄かおろしポン酢ですき焼き風に1,760円。よだれハラミ990円 (2026年9月)・刺身: 鶏むね660円、上ハラミ1,870円、特選タン1,980円。Sakurajima ユッケ (2026年9月)・ホルモンの盛り合わせ。地鶏、黒豚、koune のしゃぶしゃぶ (2026年)・Tarare 冷麺、ビビンバ、キムチ、塩キャベツ (2026年)・コース: 飲み物なし4,500円、18品と飲み放題6,500円、飲み放題つき8,000円 (2026年)',
    neighborhood: '西中島3-12-8、阪急南方駅から2分 (160m)、西中島南方駅から3分。鹿児島の黒牛の赤提灯が目印 (食べログ、2026年10月)',
    gf_detail: 'グルテンフリーではありません。たれともみだれ、すき焼き風のリブロース、冷麺、ビビンバ。',
    vegan_detail: 'ヴィーガンではありません。肉の刺身もある和牛の焼肉店。',
    notes: '[焼肉・南方、一頭買いの鹿児島和牛を炭火で] 阪急南方駅から2分、2024年開店の35席の焼肉店で、鹿児島の黒毛和牛 A5 の雌牛を一頭買いして炭火で焼く。だから misuji や kainomi などの希少部位も、厚いタンや卵黄で食べる大判リブロースのすき焼き風もある。タンやハラミの刺身も (2026年)。ひとりなら1階のカウンターでハーフサイズ、団体は2階の掘りごたつで、コースは4,500円から。注文はタブレットで。23時まで。日曜休み。',
  });
}

// ================================================================ 四季自然喰処たちばな 新大阪本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270301/27005733/'; const R = TB + 'dtlrvwlst/';
  const L = ['11:00', '15:00'];
  const WD = day(L, ['17:00', '23:00']); const WE = day(L, ['17:00', '22:00']);
  put({
    id: 'osaka_shiki_shizen_tachibana_shin_osaka', name: '四季自然喰処たちばな 新大阪本店 (Shiki Shizen Kuidokoro Tachibana)', category: 'OMNI',
    lat: 34.733869, lng: 135.496749, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Tofu dishes with dashi, sashimi with soy sauce; tempura, croquettes and udon are wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the zaru tofu is eaten with dashi (June 2026); fish and pork in the sets.',
    hours_raw: 'Mon–Fri 11:00–15:00 and 17:00–23:00 (food last order 22:00, drinks 22:30); Sat, Sun and holidays 11:00–15:00 and 17:00–22:00; closed over New Year (Tabelog). Reservations accepted; private rooms carry a ¥1,000 fee per group (Tabelog; September 2026). Cards and QR (PayPay, au PAY); no e-money (Tabelog). 200 seats; a tatami room for up to 120; private rooms for 4 to over 30 (Tabelog). Non-smoking (Tabelog). Reached under cover from Shin-Osaka exit 4 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '宮原3-4-30 ニッセイ新大阪ビル 2F, 2 min from exit 4 of Shin-Osaka (JR and Midosuji Line), by a covered walkway (Tabelog; July 2026)',
    cuisine: 'Japanese food built around homemade tofu, with fish and banquet courses (Tabelog; reviews) · the signature homemade tofu, smooth and rich in soybean flavour; zaru tofu served warm with dashi; chilled tofu, rice and soup refillable at lunch (2025–2026) · lunch sets: sashimi and zaru tofu ¥1,454 (August 2025), ¥1,600 (August 2026); dashimaki and tempura set with mentaiko and chilled tofu; simmered fish set; grilled pork belly with crab cream croquette; "colourful" gozen; yuba and shrimp tempura udon; a more lavish matsukado set (2025–2026) · evening: elaborate appetisers, sea bream and salmon sashimi, tempura, pork shabu-shabu, Osaka water eggplant in season, roast beef (2026) · course with 2-hour all-you-can-drink ¥5,000; extensions by ordering a la carte (2026)',
    website: null, gmaps: gm('四季自然喰処たちばな 新大阪本店'), menu_url: null,
    notes: '[Izakaya · Shin-Osaka, a big Japanese banquet house with homemade tofu] A 200-seat Japanese restaurant on the second floor of the Nissei building, reached under cover from Shin-Osaka exit 4, with private rooms and a tatami hall for 120. Its pride is homemade tofu: at lunch, sets of sashimi or dashimaki and tempura come with zaru or chilled tofu and free refills of tofu, rice and soup, around ¥1,450–1,600 (2025–2026). Evenings turn to banquet courses with all-you-can-drink from ¥5,000, sashimi and seasonal Osaka water eggplant. Busy with office workers at noon. Open to 23:00 on weekdays.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: izakaya, seafood and fugu; particular about fish; health menu; private rooms; reached directly from Shin-Osaka exit 4 "without worrying about rain". A second shop in Umeda (Hilton Plaza, per Hot Pepper; "I had been to Tachibana in Umeda for dinner before", July 2026). Per reviews: "The signature dish, homemade tofu, boasts a smooth texture and rich soybean flavor" (June 2026); "even after the all-you-can-drink time was over, I could extend it for an hour by ordering a la carte" (June 2026); the tatami room suited a family with a baby (August 2026); one diner found the overseas staff short on smiles (July 2026).',
      philosophy: null, specialty: 'Homemade tofu; Japanese lunch sets.',
      anecdotes: [
        { text: '"I imagined the cold zaru tofu, so I was surprised when it was warm! But eating it with the dashi was refreshing." — June 2026, simmered fish set.', source: R + 'B530408056/' },
        { text: '"Chilled tofu, rice, and soup are all refillable." — September 2026.', source: R + 'B489642135/' },
        { text: '"The seasonal water eggplant from Osaka was delicious." — June 2026.', source: R + 'B530722481/' },
      ],
      japanese_sources_summary: '食べログ: 四季自然喰処たちばな 新大阪本店、居酒屋・海鮮・ふぐ、大阪市淀川区宮原3-4-30 ニッセイ新大阪ビル 2F、新大阪駅4番出口から徒歩2分、雨にぬれずに来られる、月〜金11:00〜15:00、17:00〜23:00、土日祝11:00〜15:00、17:00〜22:00、年末年始休み、予約可、個室は1組1,000円、カード・QR 可、電子マネー不可、200席、座敷は120名まで、禁煙。口コミ (2025年〜2026年10月): 名物の自家製豆腐、温かいざる豆腐をだしで、冷ややっこ・ごはん・汁はおかわり自由、刺身とざる豆腐の定食1,454〜1,600円、だし巻きと天ぷらの定食 (明太子と冷ややっこつき)、煮魚の定食、豚バラ焼きとカニクリームコロッケ、Colorful gozen、湯葉と海老天のうどん、Matsukado のセット、夜は前菜、鯛とサーモンの刺身、天ぷら、豚しゃぶ、大阪の水なす、ローストビーフ、2時間飲み放題つきのコース5,000円、梅田にも店。',
      confidence: 'medium', sources: [TB, R + 'B426556399/', R + 'B489642135/', R + 'B530408056/', R + 'B530722481/', R + 'B531578697/', R + 'B532390498/', R + 'B533358069/', R + 'B533640103/', R + 'B534006735/', R + 'B534116096/', R + 'B536568683/', R + 'B537462813/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Tatami rooms suit families; tablet ordering for drinks (August 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市淀川区宮原3-4-30 ニッセイ新大阪ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; GSI 大阪府大阪市淀川区宮原三丁目4番30号 (go) 48m, a large office building; Tabelog point kept, 33 m from osaka_iso_ichi_shin_osaka on the ground floor; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534006735/', R + 'B534116096/'],
    price_note: 'Prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sashimi and zaru tofu lunch set', '¥1,600', 'Lunch', 'ask', 'no', 'August 2026.', 'sashimi_zarudofu'),
      it('', '', 'Course with 2-hour all-you-can-drink', '¥5,000', 'Courses', 'ask', 'no', 'August 2026.', 'nomihodai_course'),
    ] }, {
    cuisine: '自家製の豆腐を中心に、魚と宴会コースの和食 (食べログ、口コミ)・名物の自家製豆腐はなめらかで大豆の味が濃い。ざる豆腐は温かいまま、だしで。昼は冷ややっこ、ごはん、汁がおかわり自由 (2025〜2026年)・昼の定食: 刺身とざる豆腐1,454円 (2025年8月)、1,600円 (2026年8月)。明太子と冷ややっこつきのだし巻きと天ぷらの定食。煮魚の定食。豚バラ焼きとカニクリームコロッケ。Colorful gozen。湯葉と海老天のうどん。少し豪華な Matsukado のセット (2025〜2026年)・夜: 手のこんだ前菜、鯛とサーモンの刺身、天ぷら、豚しゃぶ、旬の大阪の水なす、ローストビーフ (2026年)・2時間飲み放題つきコース5,000円。単品を頼めば延長も (2026年)',
    neighborhood: '宮原3-4-30 ニッセイ新大阪ビル 2F、新大阪駅4番出口 (JR、御堂筋線) から屋根のある通路で2分 (食べログ、2026年7月)',
    gf_detail: '要確認。グルテンの情報なし。だしで食べる豆腐、醤油の刺身。天ぷら、コロッケ、うどんは小麦。',
    vegan_detail: 'ヴィーガンではありません。ざる豆腐はだしで食べる (2026年6月)。定食には魚や豚。',
    notes: '[居酒屋・新大阪、自家製豆腐の大きな和食の宴会処] 新大阪駅4番出口から屋根づたいに行けるニッセイビル2階の200席の和食店で、個室と120名の座敷がある。自慢は自家製の豆腐: 昼は刺身やだし巻きと天ぷらの定食に、ざる豆腐か冷ややっこがつき、豆腐、ごはん、汁はおかわり自由で約1,450〜1,600円 (2025〜2026年)。夜は5,000円からの飲み放題つきの宴会コース、刺身、旬の大阪の水なす。昼はサラリーマンで混む。平日は23時まで。',
  });
}

save();
