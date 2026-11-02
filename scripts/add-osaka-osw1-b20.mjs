// Osaka sweep (2-mile circle around Dotonbori), REST phase; worker osw1 (lane: Tabelog id mod 4 = 0), batch 20.
//   + 個室ダイニング 神楽 難波店 Kagura (all-private-room seafood and sushi izakaya, courses with drinks, by the Namba exit 14)
//   + 法善寺 浅草 Hozenji Asakusa (fugu, hamo and suppon courses in private rooms at the Hozenji Yokocho entrance)
//   + 肉と魚和バル八 心斎橋店 Wa Baru Hachi (Japanese-Italian izakaya by evening, late-night ramen after 22:00, 2022)
//   + シナモロールカフェ 大阪なんば戎橋店 Cinnamoroll Cafe (Sanrio character café over a goods shop, one of three in Japan)
//   - skip(): KK ラウンジ (two reviews), 榮華亭 難波本店 (chain), 松阪牛焼肉M 法善寺店はなれ (already in data), 道頓堀肉劇場 (chain),
//     焼肉ホルモン 鍵矢 三津寺店 (branch of a shop in data), PASTELERIA SOL (one 2025–26 review).
//   Lane: `queue.mjs osaka next rest 600`, mod-4 = 0, in order: 27157996 六美麻辣湯 (still undecided), 27144928 +, 27148372 skip,
//   27151704 skip, 27001452 +, 27040084 skip, 27086532 skip, 27126340 skip, 27158476 よいもど 心斎橋店 left undecided (opened
//   September 2026; Hot Pepper shows a Kabukicho よいもど opening the same month and a 24-hour よいもど, shop count unknown),
//   27125868 +, 27110628 skip, 27139460 +.
//   Chain check for the four kept: 神楽 難波店, 法善寺 浅草 and 和バル八 are each the only shop of the name in shops.jsonl (gnavi
//   lists only the Shinsaibashi 和バル八); シナモロールカフェ is "one of only three locations in Japan" (March 2026 review), a
//   group of three. None is in data.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-20');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27148372', 'Too thin for a full record: two Tabelog reviews.');
skip('27151704', 'Chain: 七輪焼肉 榮華亭 (eekatei.com) runs all-you-can-eat yakiniku shops in Namba (本店 and 難波店 27006697), Ohatsu Tenjin, Esaka and Umeda-higashi, plus the sister HARU; a review notes "Eekatei has several locations".');
skip('27040084', 'Already in data: osaka_matsusakagyu_yakiniku_m_hozenji_hanare (address_ja "難波1-5-24 だるまビル2F", name "松阪牛焼肉M 法善寺店 はなれ").');
skip('27086532', 'Chain: 肉劇場 (nikugekijyo.com) runs beef-bowl shops in Dotonbori, Shinsaibashi (opened September 2024) and Namba, plus 森友 and its own beef brands; 焼肉劇場 梅田店 is in shops.jsonl.');
skip('27126340', 'Same-concept branch of a shop already in data: 焼肉 ホルモン 鍵矢 (osaka_yakiniku_kagiya_higashishinsaibashi).');
skip('27110628', 'Too thin for a full record: eight reviews, only one in 2025–26 (September 2025); takeaway cake counter.');

// ================================================================ 個室ダイニング 神楽 難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27144928/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'osaka_kagura_namba', name: '個室ダイニング 神楽 難波店 (Koshitsu Dining Kagura)', category: 'OMNI',
    lat: 34.66784, lng: 135.501865, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include sushi, sashimi with soy sauce, fried oysters and cabbage rolls.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood and wagyu courses.',
    hours_raw: 'Daily 17:30–23:00 (food last order 22:00, drinks 22:30) (Tabelog). Reservations accepted (Tabelog). Cards including UnionPay; no e-money or QR (Tabelog). 120 seats, all in private rooms for 2 to 60, smoking and non-smoking rooms; a designated smoking area (Tabelog). Reception on the ground floor, shared with other restaurants in the building, by a large golden lucky cat; rooms upstairs by lift (January and August 2025; August 2026). Mostly courses; one 2025 diner found no à la carte (August 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-5-20, フェローズビル 2F, a few minutes from Namba Stn (1 min from exit 14)',
    cuisine: 'Private-room izakaya of seafood from the fishing port, nigiri sushi and black wagyu, with about 30–40 sakes (Tabelog) · courses with two hours of drinks, listed at ¥6,000, ¥8,000 and ¥10,000 after a ¥3,000 discount: A3 wagyu teppanyaki, three-kind sashimi, a sea bream presentation, nigiri, grilled Tanba black chicken, Hiroshima fried oysters, cabbage rolls (Tabelog, 2026) · all-you-can-drink courses at ¥5,000 (August and December 2025); higher courses with abalone, Ise lobster, simmered kanpachi and steamed eel (August 2026) · à la carte in early 2025: octopus with wasabi, grilled kanpachi collar, a mix-it-yourself potato salad (January 2025)',
    website: null, gmaps: gm('個室ダイニング 神楽 難波店'), menu_url: null,
    notes: "[Izakaya · Namba, private rooms for parties] A large all-private-room izakaya a minute from Namba Station: check in at the shared ground-floor reception by the giant golden lucky cat and take the lift up. It is built for parties and dates: seafood from the fishing port, nigiri sushi and black wagyu in courses with two hours of drinks, ¥5,000 in 2025 and listed from ¥6,000 in 2026. Diners call the food safe and satisfying. Complaints: smoke drifting from smoking rooms, slow drinks (June 2026), rooms more open and noisier than expected (August 2026), and a December 2025 diner found the menu thinner than the listing. Reservation recommended.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed); sakes chosen by the shop owner (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: all private rooms for 2 to 60 guests, nigiri sushi and seafood direct from the fishing port, premium black wagyu and brand meats, 30–40 sakes chosen by the owner; courses with two hours of drinks discounted by ¥3,000.', philosophy: null, specialty: 'Private-room courses with sushi and wagyu.',
      anecdotes: [
        { text: '"Upon arriving near the entrance based on the map, a huge golden beckoning cat greeted us." — January 2025.', source: R + 'B499394897/' },
        { text: '"The food was impressive, featuring a beautifully arranged assorted platter, and the grilled beef was absolutely delicious." — December 2025, an all-you-can-drink course ¥5,000.', source: R + 'B518613930/' },
        { text: '"The reception area is shared with other establishments, and although there are private rooms, they are quite open, making it feel a bit noisy." — August 2026.', source: R + 'B534548527/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 個室ダイニング 神楽 難波店、居酒屋・海鮮・寿司、大阪市中央区難波1-5-20 フェローズビル 2F、なんば駅14番出口から徒歩1分、毎日17:30〜23:00 (料理L.O.22:00、ドリンクL.O.22:30)、予約可、カード (銀聯も) 可、電子マネー・QR 不可、120席、2〜60名の全室個室、喫煙と禁煙の部屋。店の紹介 (英訳): 漁港直送の魚介、にぎり寿司、黒毛和牛やブランドの肉、店主が選ぶ日本酒30〜40種、2時間飲み放題つきのコースが3,000円引きで6,000円、8,000円、10,000円 (A3 和牛の鉄板焼き、刺身3種、鯛の姿造り、にぎり、丹波黒どりの焼き物、広島のかきフライ、ロールキャベツ)。口コミ(2024年8月〜2026年8月): 金の招き猫が目印、1階の受付はほかの店と共用でエレベーターで上の階へ、飲み放題つきのコース5,000円、あわびや伊勢えびのコースも、たこわさ、かんぱちのかま焼き、自分で混ぜるポテトサラダ、喫煙の部屋の煙が気になるという声、飲み物が遅い、部屋が開放的でにぎやか、メニューが掲載と違ったという声。',
      confidence: 'medium', sources: [TB, R + 'B493903611/', R + 'B499394897/', R + 'B499589219/', R + 'B507493836/', R + 'B511674008/', R + 'B512888522/', R + 'B518613930/', R + 'B519163323/', R + 'B530939452/', R + 'B534548527/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course dining in private rooms; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-5-20 フェローズビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目5番20号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B518613930/'],
    price_note: 'Course prices from the Tabelog listing (2026) and 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Seasonal 10-dish course with two hours of drinks', '¥6,000', 'Courses', 'ask', 'no', 'Tabelog listing (discounted from ¥9,000).', 'course_6000'),
      it('', '', 'All-you-can-drink course', '¥5,000', 'Courses', 'ask', 'no', 'August and December 2025 reviews.', 'course_5000'),
    ] }, {
    cuisine: '漁港直送の魚介、にぎり寿司、黒毛和牛の全室個室の居酒屋で、日本酒は30〜40種 (食べログ)・2時間飲み放題つきのコースは3,000円引きで6,000円、8,000円、10,000円: A3 和牛の鉄板焼き、刺身3種、鯛の姿造り、にぎり、丹波黒どりの焼き物、広島のかきフライ、ロールキャベツ (食べログ、2026年)・飲み放題つきのコース5,000円 (2025年8月と12月)。あわび、伊勢えび、かんぱちの煮付け、うなぎの蒸し物の入る上のコース (2026年8月)・2025年初めの単品: たこわさ、かんぱちのかま焼き、自分で混ぜるポテトサラダ (2025年1月)',
    neighborhood: '難波1-5-20、フェローズビル2階。なんば駅14番出口から1分',
    gf_detail: '要確認。グルテンの情報なし。コースには寿司、醤油で食べる刺身、かきフライ、ロールキャベツ。',
    vegan_detail: 'ヴィーガンではありません。魚介と和牛のコース。',
    notes: '[居酒屋・なんば、宴会向きの個室] なんば駅から1分の全室個室の大きな居酒屋で、1階の共用の受付 (大きな金の招き猫が目印) からエレベーターで上の階へ。宴会やデート向きで、漁港直送の魚介、にぎり寿司、黒毛和牛を2時間飲み放題つきのコースで。2025年は5,000円、2026年の掲載は6,000円から。料理は無難で満足という声。不満は、喫煙の部屋の煙、飲み物が遅い (2026年6月)、部屋が思ったより開放的でにぎやか (2026年8月)、2025年12月には掲載よりメニューが少なかったという声。予約がおすすめ。',
  });
}

// ================================================================ 法善寺 浅草
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001452/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:30']); const SA = day(['12:00', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_hozenji_asakusa', name: '法善寺 浅草 (Hozenji Asakusa)', category: 'OMNI',
    lat: 34.66796, lng: 135.502367, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Courses include tempura, fried fugu and turtle, ponzu, and somen or rice porridge to finish.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fugu, hamo and soft-shell turtle courses.',
    hours_raw: 'Sun–Fri and holidays 17:00–22:30; Sat 12:00–15:00 (last orders 13:30 food, 14:00 drinks) and 17:00–22:30; lunch by reservation made the day before; irregular closing days (Tabelog). Reservations accepted (Tabelog). No service or room charge (Tabelog). Cards; no e-money or QR (Tabelog). 50 seats, all private rooms, tatami rooms, a two-person counter room overlooking Hozenji Yokocho (Tabelog; February 2026). Non-smoking with a smoking area (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: SA, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 1-1-12, at the entrance to Hozenji Yokocho — 5 min from Namba Stn',
    cuisine: 'Long-loved specialist in fugu, hamo and suppon, cooking with skills trained in Kyoto; hamo only from Awaji and Tokushima, bone-cut by hand (Tabelog) · suppon course ¥12,000: seasonal appetizers, fresh blood drink, sashimi, turtle manjū, fried turtle, the turtle hot pot and rice porridge (Tabelog; February–April 2026) · fugu courses: tecchiri, three-year-old fugu with thick slices, thick fried fugu (January–March 2026) · hamo in summer: hamo sukiyaki with somen and porridge, hamo shabu-shabu, poached hamo with umeboshi (June–September 2026) · seasonal kaiseki "Shiki" with all three; sake from across Japan and rare shochu (Tabelog)',
    website: null, gmaps: gm('法善寺 浅草 ふぐ'), menu_url: null,
    notes: "[Fugu and suppon · Hozenji Yokocho, private rooms at the alley's mouth] A long-established Japanese restaurant at the entrance to Hozenji Yokocho, every seat in a private room, some upstairs looking down on the alley. The kitchen trained in Kyoto, and the year turns on three ingredients: fugu in winter (thick slices of three-year-old fugu in tecchiri, fried fugu), hamo from Awaji and Tokushima in summer, as sukiyaki or shabu-shabu, and suppon, whose ¥12,000 course runs from a blood aperitif to a collagen-rich hot pot and porridge. No service or room charge. Saturday lunch by reservation the day before.",
    chef_bio: { chef_name: null, roles: ['Chef trained in Kyoto (unnamed; Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: a long-loved specialist in fugu, hamo and suppon, using skills honed through training in Kyoto; hamo sourced only from Awaji Island and Tokushima, bone-cut with care; a monthly course; all private rooms. Reviews call it a long-established restaurant at the Hozenji Yokocho entrance (July 2026).', philosophy: null, specialty: 'Fugu, hamo and suppon courses.',
      anecdotes: [
        { text: '"I enjoyed a 3-year-old fugu course in a private room." — February 2026.', source: R + 'B523483988/' },
        { text: '"the two-person counter room offers a fantastic view overlooking Hozenji Yokocho." — February 2026.', source: R + 'B522820356/' },
        { text: '"Then came the main event, the hamo sukiyaki, and for the finale, I enjoyed both somen noodles and zosui" — June 2026.', source: R + 'B494030723/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 法善寺 浅草、ふぐ・すっぽん・日本料理、大阪市中央区難波1-1-12、なんば駅から徒歩5分、日〜金・祝17:00〜22:30、土12:00〜15:00・17:00〜22:30、ランチは前日までの予約、不定休、予約可、サービス料・部屋料なし、カード可、電子マネー・QR 不可、50席 (全室個室)、座敷、禁煙 (喫煙所あり)。店の紹介 (英訳): ふぐ、はも、すっぽんの長く愛される専門店、京都で修業した技、はもは Awaji と Tokushima からのみで骨切り、月替わりのコース、季節の会席「四季」、すっぽんのコース12,000円 (先付、生き血、刺身、すっぽんの饅頭、竜田揚げ、丸鍋、雑炊)、全国の季節の日本酒と珍しい焼酎。口コミ(2026年1月〜9月): 3年もののふぐ、厚いてっちり、ふぐの唐揚げ、はものすき焼きとそうめんと雑炊、はもしゃぶ、湯引きのはもと梅肉、法善寺横丁を見下ろす2人用のカウンターの部屋、法善寺横丁の入口の老舗。',
      confidence: 'medium', sources: [TB, R + 'B494030723/', R + 'B522615037/', R + 'B522820356/', R + 'B522985712/', R + 'B523483988/', R + 'B523867837/', R + 'B525080043/', R + 'B527959131/', R + 'B533834838/', R + 'B535494275/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses served in private rooms; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-12',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番12号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B525080043/'],
    price_note: 'Course price from the Tabelog listing; contents confirmed by a March 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Suppon (soft-shell turtle) course', '¥12,000', 'Courses', 'no', 'no', 'Tabelog listing; March 2026 review.', 'suppon_course'),
      it('', '', 'Fugu course (tecchiri)', '', 'Courses', 'ask', 'no', 'January–March 2026 reviews.', 'fugu_course'),
      it('', '', 'Hamo sukiyaki course (summer)', '', 'Courses', 'ask', 'no', 'June 2026 review.', 'hamo_sukiyaki'),
    ] }, {
    cuisine: '京都で修業した技で、ふぐ、はも、すっぽんを出す長く愛される専門店。はもは Awaji と Tokushima からのみで、ていねいに骨切り (食べログ)・すっぽんのコース12,000円: 季節の先付、生き血、刺身、すっぽんの饅頭、竜田揚げ、丸鍋、雑炊 (食べログ、2026年2月〜4月)・ふぐのコース: てっちり、厚く切った3年もののふぐ、厚いふぐの唐揚げ (2026年1月〜3月)・夏のはも: そうめんと雑炊で締めるはものすき焼き、はもしゃぶ、梅肉の湯引き (2026年6月〜9月)・3つを合わせた季節の会席「四季」。全国の日本酒と珍しい焼酎 (食べログ)',
    neighborhood: '難波1-1-12、法善寺横丁の入口。なんば駅から5分',
    gf_detail: '要確認。グルテンの情報なし。コースには天ぷら、ふぐやすっぽんの唐揚げ、ポン酢、締めのそうめんや雑炊。',
    vegan_detail: 'ヴィーガンではありません。ふぐ、はも、すっぽんのコース。',
    notes: '[ふぐ・すっぽん・法善寺横丁、路地の入口の個室] 法善寺横丁の入口の老舗の日本料理の店で、全室個室。2階には路地を見下ろす部屋も。京都で修業した料理で、1年は3つの素材で回る。冬はふぐ (3年ものの厚いてっちり、ふぐの唐揚げ)、夏は Awaji と Tokushima のはもをすき焼きやしゃぶしゃぶで、そしてすっぽん。12,000円のコースは生き血の食前酒から、コラーゲンたっぷりの丸鍋と雑炊まで。サービス料も部屋料もなし。土曜の昼は前日までの予約で。',
  });
}

// ================================================================ 肉と魚和バル八 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27125868/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:30']);
  put({
    id: 'osaka_wa_baru_hachi_shinsaibashi', name: '肉と魚和バル八 心斎橋店 (Niku to Sakana Wa Baru Hachi)', category: 'OMNI',
    lat: 34.670413, lng: 135.501756, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pizza, pasta, ramen and fried dishes are on the menu; sushi uses sherry-vinegar rice.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat and fish izakaya; the late-night ramen is tonkotsu-based.',
    hours_raw: 'Daily 17:00–23:30, open year-round (Tabelog). From about 22:00 to 5:00 the shop runs as 深夜らぁめん八, a late-night ramen counter (January and May 2026). Reservations accepted; parties of two may be put at the counter (Tabelog). Starter ¥300 before tax (Tabelog). Cards, Rakuten Pay and au PAY; no e-money (Tabelog). 42 seats: counter, two private tatami rooms for 7 (joinable to 14) and one for 10, sunken seating (Tabelog). Smoking allowed; wheelchair accessible (Tabelog). Opened 14 July 2022 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-2-13, 宝山心斎橋ビル 1F, set back from the street — 5 min from Namba Stn exit 14',
    cuisine: 'Izakaya mixing Japanese and Italian: build-your-own ajillo, the chef\'s "Ebi Paradiso" shrimp dish, sushi on sherry-vinegar rice from ¥200, meat sushi (Tabelog) · mini sea-urchin cream risotto, a pink potato salad with a soft-boiled egg, thick-cut sashimi, Taiwanese minced cutlet, meat-wrapped vegetables, onion slices with bonito, wakasagi tempura, fried oysters, low-temperature outside skirt (May 2025–October 2026) · nine-dish course with two hours of drinks ¥4,000; all-you-can-drink ¥1,480 (Tabelog) · late at night as 深夜らぁめん八: shoyu ramen ¥950, light chūka soba with yuzu ¥980 (January and May 2026)',
    website: null, gmaps: gm('肉と魚和バル八 心斎橋店'), menu_url: null,
    notes: "[Izakaya · Shinsaibashi, Japanese-Italian plates and late-night ramen] A private-room izakaya tucked into the back of a ground floor in Minami, mixing Japanese and Italian: build your own ajillo, the chef's signature Ebi Paradiso, and sushi on sherry-vinegar rice from ¥200. A pink potato salad with a hidden soft-boiled egg and a mini sea-urchin risotto are the photogenic picks. Courses with two hours of drinks are ¥4,000. After about 10 p.m. the counter turns into 深夜らぁめん八, serving shoyu ramen (¥950 in January 2026) and a light yuzu chūka soba (¥980) until 5 a.m. Smoking allowed; one diner found the sake list short.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed; signature dish "Ebi Paradiso", Tabelog) and floor staff'], origin: null, background: 'Shop-maintained Tabelog listing: a fusion of Japanese and Italian cuisine, ajillo with chosen ingredients, the chef\'s Ebi Paradiso, sushi on original sherry vinegar from ¥200, all-you-can-drink ¥1,480, private rooms and counter; opened 14 July 2022. Reviews (January and May 2026): the shop becomes 深夜らぁめん八 late at night.', philosophy: null, specialty: 'Ajillo; Ebi Paradiso; sherry-vinegar sushi; late-night ramen.',
      anecdotes: [
        { text: '"The combination of pink potato salad and a soft-boiled egg is irresistibly cute." — August 2025.', source: R + 'B511420445/' },
        { text: '"From around 10:00 PM to 5:00 AM, you can enjoy ramen here. I tried the classic Shoyu Ramen for JPY 950." — January 2026.', source: R + 'B521352348/' },
        { text: '"I was delighted to choose as many ingredients as I liked for the ajillo" — December 2025.', source: R + 'B520400894/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉と魚和バル八 心斎橋店、居酒屋・寿司・イタリアン、大阪市中央区心斎橋筋2-2-13 宝山心斎橋ビル 1F、なんば駅14番出口から徒歩5分、毎日17:00〜23:30、年中無休、予約可 (2人はカウンターのことも)、お通し300円 (税抜)、カード・楽天ペイ・au PAY 可、電子マネー不可、42席 (カウンター、7名の個室2つと10名の個室1つ)、掘りごたつ、喫煙可、車いす可、2022年7月14日オープン。店の紹介 (英訳): 和とイタリアンの融合、好きな具材で作るアヒージョ、シェフの名物の「Ebi Paradiso」、シェリー酢のシャリの寿司が200円、飲み放題1,480円、2時間飲み放題つき9品のコース4,000円。口コミ(2025年5月〜2026年10月): ミニのうにのクリームリゾット、半熟卵の入ったピンクのポテトサラダ、厚い刺身、台湾風のミンチカツ、肉巻き野菜、オニオンスライスとかつお節、わかさぎの天ぷら、かきフライ、低温調理の外ハラミ、夜10時ごろから朝5時までは「深夜らぁめん八」で醤油ラーメン950円とゆずのあっさり中華そば980円、日本酒の種類は少ないという声。',
      confidence: 'medium', sources: [TB, R + 'B507339707/', R + 'B511420445/', R + 'B512084075/', R + 'B512579857/', R + 'B520400894/', R + 'B521352348/', R + 'B522875023/', R + 'B531555578/', R + 'B531762075/', R + 'B538474177/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and private tatami rooms; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区心斎橋筋2-2-13 宝山心斎橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番13号 (go) 2m. Same building as osaka_kiwami_yakiniku_gyugo (address_ja "大阪府大阪市中央区心斎橋筋2-2-13 宝山心斎橋ビル 2F"), pinned 3 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B521352348/', R + 'B531762075/'],
    price_note: 'Prices from the Tabelog listing and January and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sherry-vinegar sushi (per piece, from)', '¥200', 'Sushi', 'ask', 'no', 'Tabelog listing.', 'sherry_sushi'),
      it('', '', 'Nine-dish course with two hours of drinks', '¥4,000', 'Courses', 'ask', 'no', 'Tabelog listing.', 'medio_course'),
      it('', '', 'Late-night shoyu ramen (深夜らぁめん八)', '¥950', 'Late night', 'no', 'no', 'January 2026 review.', 'shoyu_ramen'),
      it('', '', 'Light chūka soba with yuzu (深夜らぁめん八)', '¥980', 'Late night', 'no', 'no', 'May 2026 review.', 'chuka_soba'),
    ] }, {
    cuisine: '和とイタリアンを合わせた居酒屋: 好きな具材で作るアヒージョ、シェフの「Ebi Paradiso」、200円からのシェリー酢のシャリの寿司、肉寿司 (食べログ)・ミニのうにのクリームリゾット、半熟卵の入ったピンクのポテトサラダ、厚切りの刺身、台湾風のミンチカツ、肉巻き野菜、オニオンスライスとかつお節、わかさぎの天ぷら、かきフライ、低温調理の外ハラミ (2025年5月〜2026年10月)・2時間飲み放題つき9品のコース4,000円、飲み放題1,480円 (食べログ)・深夜は「深夜らぁめん八」: 醤油ラーメン950円、ゆずのあっさり中華そば980円 (2026年1月と5月)',
    neighborhood: '心斎橋筋2-2-13、宝山心斎橋ビル1階の奥。なんば駅14番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ピザ、パスタ、ラーメン、揚げ物があり、寿司はシェリー酢のシャリ。',
    vegan_detail: 'ヴィーガンではありません。肉と魚の居酒屋で、深夜のラーメンはとんこつベース。',
    notes: '[居酒屋・心斎橋、和とイタリアンと深夜のラーメン] ミナミのビルの1階の奥にある個室の居酒屋で、和とイタリアンを合わせた料理。好きな具材で作るアヒージョ、シェフの名物の Ebi Paradiso、200円からのシェリー酢のシャリの寿司。半熟卵の入ったピンクのポテトサラダやミニのうにのリゾットは写真映えする。2時間飲み放題つきのコースは4,000円。夜10時ごろからはカウンターが「深夜らぁめん八」になり、朝5時まで醤油ラーメン (2026年1月は950円) やゆずのあっさり中華そば (980円) を出す。喫煙可。日本酒の種類は少ないという声も。',
  });
}

// ================================================================ シナモロールカフェ 大阪なんば戎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139460/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.cinnamorollcafe.com/namba/';
  const WD = day(['11:00', '21:00']); const WE = day(['10:00', '21:00']);
  put({
    id: 'osaka_cinnamoroll_cafe_namba', name: 'シナモロールカフェ 大阪なんば戎橋店 (Cinnamoroll Cafe Osaka Namba Ebisubashi)', category: 'OMNI',
    lat: 34.667624, lng: 135.501432, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is cakes, curry rice and sweet drinks topped with ice cream.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No vegan information. Many drinks use milk and ice cream; the blue lemon drink and sodas may be simpler.',
    hours_raw: 'Mon–Fri 11:00–21:00; Sat, Sun and holidays 10:00–21:00; last order 20:15; hours may change (Tabelog). Reservations accepted: a ¥1,000-per-person booking charge buys a seat in a 3F room and a limited novelty; the 2F seats take walk-ins, with queues on holidays (August 2026). Cards, e-money and QR payments (Tabelog). Goods shop on 1F, takeaway drinks (March–May 2026).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-5-14, a short walk from the shopping-street entrance by Ebisubashi, with a Sanrio shop opposite',
    cuisine: 'Concept café themed on the Sanrio character Cinnamoroll, one of three in Japan (March 2026) · blue curry rice with star-shaped cheese (March–June 2026) · shortcake ¥1,500, "Cinnamorattecino" ¥800, Cinnamoroll latte, two-layer soda topped with a Cinnamoroll-face vanilla ice cream, a blue lemon drink, Cinnamoroll and milk ice drink ¥990, café au lait (March–September 2026) · limited-time drinks and novelty items (August 2026)',
    website: SITE, gmaps: gm('シナモロールカフェ 大阪なんば戎橋店'), menu_url: null,
    notes: "[Character café · Namba, Cinnamoroll everywhere] A three-storey Cinnamoroll café a short walk from Ebisubashi, one of only three in Japan: goods shop downstairs, a café on 2F and a bookable room on 3F, with the puppy on the walls, placemats and even in the toilets. Order the blue curry rice with star-shaped cheese or a drink crowned with a Cinnamoroll-face ice cream; the shortcake was ¥1,500 and a latte ¥800 in March 2026. Fans adore it; several diners say the food is ordinary and you pay for the setting. Booking costs ¥1,000 a head with a novelty; walk-ins queue on holidays. Popular with overseas visitors and families.",
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed)'], origin: null, background: 'Tabelog: Cinnamoroll Cafe Osaka Namba Ebisubashi, café, open daily. Reviews (March–September 2026): one of three Cinnamoroll Cafe locations in Japan; merchandise on 1F, café on 2F, a reservable 3F room with a ¥1,000 charge and novelty. Official page: cinnamorollcafe.com/namba/.', philosophy: null, specialty: 'Character-themed drinks, curry and cakes.',
      anecdotes: [
        { text: '"I visited the Namba Ebisu Bridge branch of Cinnamoroll Cafe, one of only three locations in Japan." — March 2026.', source: R + 'B524413982/' },
        { text: '"The blue curry features star-shaped cheese, and the curry itself is sweet and delicious!" — June 2026.', source: R + 'B530871318/' },
        { text: '"The drink itself was average in taste, but the ambiance of Cinnamoroll made it more about the experience than the flavor." — August 2026.', source: R + 'B537983649/' },
      ],
      japanese_sources_summary: '食べログ: シナモロールカフェ 大阪なんば戎橋店、カフェ、大阪市中央区難波1-5-14、月〜金11:00〜21:00、土日祝10:00〜21:00 (L.O.20:15)、予約可、カード・電子マネー・QR 可。口コミ(2026年3月〜9月): 日本に3店のシナモロールカフェのひとつ、1階はグッズの店、2階はカフェで予約なしでも入れ休日は行列、予約は1人1,000円で3階の部屋と限定のノベルティ、星形のチーズの青いカレー、ショートケーキ1,500円、シナモラテチーノ800円、ラテ、シナモロールの顔のアイスがのった2層のソーダ、青いレモンのドリンク、シナモロールとミルクのアイスドリンク990円、カフェオレ、トイレまでシナモロール、味はふつうという声も、海外の客や家族連れが多い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B524054336/', R + 'B524413982/', R + 'B526270938/', R + 'B527922888/', R + 'B530871318/', R + 'B534489454/', R + 'B534760033/', R + 'B536400007/', R + 'B536603660/', R + 'B537983649/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas visitors (September 2026); picture-led menu. No English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-5-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official page; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目5番14号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524413982/', R + 'B537983649/'],
    price_note: 'Prices from March and August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Shortcake', '¥1,500', 'Sweets', 'no', 'no', 'March 2026 review.', 'shortcake'),
      it('', '', 'Cinnamorattecino', '¥800', 'Drinks', 'ask', 'no', 'March 2026 review.', 'cinnamorattecino'),
      it('', '', 'Cinnamoroll and milk ice drink', '¥990', 'Drinks', 'ask', 'no', 'August 2026 review.', 'milk_ice_drink'),
      it('', '', 'Blue curry rice with star cheese', '', 'Meals', 'ask', 'no', 'March–June 2026 reviews.', 'blue_curry'),
    ] }, {
    cuisine: 'サンリオのキャラクター、シナモロールのコンセプトカフェで、日本に3店のひとつ (2026年3月)・星形のチーズの青いカレーライス (2026年3月〜6月)・ショートケーキ1,500円、「Cinnamorattecino」800円、シナモロールのラテ、シナモロールの顔のバニラアイスがのった2層のソーダ、青いレモンのドリンク、シナモロールとミルクのアイスドリンク990円、カフェオレ (2026年3月〜9月)・期間限定のドリンクとノベルティ (2026年8月)',
    neighborhood: '難波1-5-14、戎橋の商店街の入口から少し、向かいにサンリオの店',
    gf_detail: '要確認。グルテンの情報なし。メニューはケーキ、カレーライス、アイスをのせた甘いドリンク。',
    vegan_detail: '要確認。ヴィーガンの情報なし。多くのドリンクに牛乳やアイスを使う。青いレモンのドリンクやソーダはシンプルかも。',
    notes: '[キャラクターカフェ・なんば、どこを見てもシナモロール] 戎橋から少しの3階建てのシナモロールカフェで、日本に3店のひとつ。1階はグッズの店、2階はカフェ、3階は予約の部屋で、壁にも、ランチョンマットにも、トイレにもシナモロール。星形のチーズの青いカレーライスや、シナモロールの顔のアイスがのったドリンクを。2026年3月はショートケーキが1,500円、ラテが800円。ファンには楽園で、味はふつうで場所代という声も。予約は1人1,000円でノベルティつき、予約なしは休日に行列。海外の客や家族連れが多い。',
  });
}

save();
