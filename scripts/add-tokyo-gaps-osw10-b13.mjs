// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 13.
//   + 肉懐石 凜然 Niku Kaiseki Rinzen (14-seat wagyu kaiseki with a premium free-flow drinks option)
//   + すし秀 其ノ弐 Sushi Hide Sono Ni (15-seat sushi; the 23-year-old Sushi Hide renewed in November 2018)
//   + 宝来 Horai (8-seat family-run machi-chuka, weekday lunch only: back-fat ramen and jumbo shumai)
//   + 焼肉 六六六 Yakiniku 666 (28-seat yakiniku of lean Mikumanogyu and Mansukagyu wagyu, mostly in private rooms)
//   Chain check. All four are single listings; no other branch found. No skips: the first four non-data entries.
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-13');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 肉懐石 凜然
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13266624/'; const R = TB + 'dtlrvwlst/'; const PARTY = TB + 'party/';
  const H = day(['12:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_niku_kaiseki_rinzen_yotsuya', name: '肉懐石 凜然 (Niku Kaiseki Rinzen)', category: 'OMNI',
    lat: 35.687327, lng: 139.724552, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking: the shop asks guests to tell it about allergies or dietary restrictions in advance (Tabelog). Courses include a Chateaubriand katsu sandwich, sukiyaki and soy-based sauces, so wheat is in several dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef kaiseki with dashi-based dishes and seafood.',
    hours_raw: 'Daily lunch 12:00–14:30 (last order 13:30) and dinner 17:00–23:00 (last order 22:30) (Tabelog). Reservation only; allergies and dietary needs in advance; children only if in the upper years of elementary school order the course (Tabelog). Service charge 10% (Tabelog). 14 seats: a private counter for 4 with an open kitchen and table rooms; private rooms for 2–8; hire up to 20; non-smoking (Tabelog; October 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). The à la carte menu offered at opening has been dropped (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-11-19, 大村ビル 1F, on Shinjuku-dōri — 5–6 min from Yotsuya-sanchome Stn, 7 min from Yotsuya Stn',
    cuisine: 'Wagyu kaiseki: Japanese courses built on premium black wagyu (Tabelog names Kobe beef and "Ota beef" heifers; 2026 diners were served Tajima beef) with seasonal seafood and vegetables (Tabelog; 2026 reviews) · Omakase Rinzen course ¥19,800, or ¥22,000 with two hours of free-flow drinks; December course ¥22,000 / ¥24,000; a lunch version ¥13,200; a ¥7,000 lunch course (Tabelog courses; September 2026) · typical dishes: Tajima beef yukhoe with Kaluga caviar (and black truffle), matsutake and shrimp shinjo or a matsutake clear soup, tongue wrapped in matsutake, Chateaubriand katsu sandwich, hamburg steak with mushroom sauce, charcoal-grilled Tajima beef with fresh wasabi, sukiyaki, matsutake rice with pickles and miso soup, seasonal dessert (August–October 2026) · the free-flow list includes champagne, wines, sake such as Hakurakusei and Kuheiji, Yamazaki, Hakushu and Hibiki whisky, and ROCOCO beer (2026 reviews)',
    website: null, gmaps: gm('肉懐石 凜然 四谷'), menu_url: PARTY,
    notes: "[Kaiseki · Yotsuya, wagyu kaiseki with a generous free-flow] A dark, modern Japanese room on Shinjuku-dōri where premium wagyu is cooked kaiseki-style, course by course, in front of a four-seat private counter or in table rooms. The Omakase Rinzen course (¥19,800, or ¥22,000 with two hours of drinks) opens with beef yukhoe under Kaluga caviar and runs through a Chateaubriand katsu sandwich, charcoal-grilled beef with fresh wasabi and sukiyaki to matsutake rice in autumn; what regulars rave about is the free-flow list, with champagne, premium sake and Yamazaki and Hakushu whisky. One regular counts a dozen visits. Not every visit pleased: a September 2026 lunch diner found the ¥7,000 course small, especially the rice, and headed the review \"a restaurant catering to foreign tourists\"; another missed the old à la carte menu. Reservation only; 10% service.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the chef or owner. Tabelog: Japanese cuisine of Kobe beef and "Ota beef" heifers (as machine-translated), seasonal seafood and mountain produce, gratitude to producers across Japan; concept "providing customers with a memorable experience". 2026 reviewers describe the beef as Tajima beef and note the chef cooking at the private counter.',
      philosophy: '"Providing customers with a memorable experience" (Tabelog).', specialty: 'Wagyu caviar yukhoe; Chateaubriand katsu sandwich; free-flow drinks.',
      anecdotes: [
        { text: '"I can\'t even count how many times I\'ve visited this beloved restaurant… we enjoyed a seasonal course priced at JPY 22,000, featuring plenty of matsutake mushrooms." — September 2026, a 12th visit.', source: R + 'B449025804/' },
        { text: '"Whiskey lovers will appreciate that Yamazaki, Hakushu, and Hibiki are included in the all-you-can-drink selection." — September 2026.', source: R + 'B535049667/' },
        { text: '"A restaurant catering to foreign tourists… I was surprised by how little there was, especially the rice." — September 2026, ¥7,000 lunch course.', source: R + 'B536901709/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉懐石 凜然、牛肉料理・ステーキ、四谷2-11-19 大村ビル1F、四谷三丁目駅から徒歩6分、四ツ谷駅7分、毎日12:00〜14:30 (L.O.13:30)・17:00〜23:00 (L.O.22:30)、完全予約制、アレルギーは事前に、子どもは小学校高学年からコース注文、サービス料10%、14席、個室あり、禁煙、カード可、Kobe beef と「Ota beef」の未経産牛の和食、季節の魚介と山の幸、おまかせ凜然コース19,800円 (2時間飲み放題付き22,000円)、ランチ13,200円。口コミ(2026年8月〜10月): Tajima 牛、カルーガキャビアのユッケ、松茸のしんじょうやお吸い物、松茸巻きのタン、シャトーブリアンのカツサンド、炭火焼き、すき焼き、松茸ご飯、飲み放題にシャンパーニュや Yamazaki・Hakushu、ランチのコースは量が少ないという声、アラカルトはなくなった。',
      confidence: 'medium', sources: [TB, PARTY, R + 'B449025804/', R + 'B453679891/', R + 'B453842341/', R + 'B463880491/', R + 'B501082835/', R + 'B504681555/', R + 'B535049667/', R + 'B536827373/', R + 'B536901709/', R + 'B536969739/', R + 'B538169362/', R + 'B538187341/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses only, booked ahead; dishes explained at the counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷2-11-19 大村ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with December 2026 courses; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687327, 139.724552); cross-checked: GSI 東京都新宿区四谷二丁目11番地 (lot) 18m. TIPHARETH Coffee (tokyo_tiphareth_coffee_yotsuya, address_ja "東京都新宿区四谷2-11-18 磯合ビル 1F") is 8 m away and Shio Tsukemen Toka (tokyo_shio_tsukemen_toka_yotsuya, "東京都新宿区四谷2-11 龍文堂ビル 1F") 14 m, both in other buildings; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [PARTY, R + 'B536901709/'],
    price_note: 'Course prices from the Tabelog course page (tax included; 10% service on top).', last_checked: TODAY, items: [
      it('', '', 'Omakase Rinzen course', '¥19,800', 'Course', 'ask', 'no', 'Tabelog course page.', 'rinzen_course'),
      it('', '', 'Omakase Rinzen course with 2 hours of free-flow drinks', '¥22,000', 'Course', 'ask', 'no', 'Tabelog course page.', 'rinzen_freeflow'),
      it('', '', 'Lunch Rinzen course', '¥13,200', 'Course', 'ask', 'no', 'Tabelog course page.', 'lunch_rinzen'),
      it('', '', 'Lunch course', '¥7,000', 'Course', 'ask', 'no', 'September 2026 review.', 'lunch_7000'),
    ] }, {
    cuisine: '肉懐石: 上質な黒毛和牛 (食べログには Kobe beef と「Ota beef」の未経産牛、2026年の客には Tajima 牛) と季節の魚介、野菜の和食のコース (食べログ、2026年の口コミ)・おまかせ凜然コース19,800円、2時間飲み放題付き22,000円。12月のコース22,000円・24,000円、ランチ版13,200円、7,000円のランチコース (食べログのコース、2026年9月)・料理の例: カルーガキャビア (と黒トリュフ) をのせた Tajima 牛のユッケ、松茸と海老のしんじょうや松茸のお吸い物、松茸巻きのタン、シャトーブリアンのカツサンド、きのこソースのハンバーグ、生わさびで食べる炭火焼き、すき焼き、松茸ご飯と香の物と味噌汁、季節のデザート (2026年8〜10月)・飲み放題にはシャンパーニュ、ワイン、Hakurakusei や Kuheiji などの日本酒、Yamazaki・Hakushu・Hibiki、ROCOCO のビール (2026年の口コミ)',
    neighborhood: '四谷2-11-19 大村ビル1F、新宿通り沿い。四谷三丁目駅から徒歩5〜6分、四ツ谷駅から7分',
    gf_detail: '予約時に要確認: アレルギーや食事制限は事前に伝えるよう店が案内している (食べログ)。コースにはシャトーブリアンのカツサンド、すき焼き、醤油ベースのたれがあり、小麦を使う皿もいくつか。',
    vegan_detail: 'ヴィーガンではない。出汁を使う料理や魚介もある牛肉の懐石。',
    notes: '[懐石・四谷、飲み放題の充実した肉懐石] 新宿通りの黒を基調にしたモダンな和の店で、上質な和牛を懐石仕立てでコースにする。4席の個室カウンターでは目の前で調理し、テーブルの個室も。おまかせ凜然コース (19,800円、2時間飲み放題付き22,000円) はカルーガキャビアをのせた牛のユッケに始まり、シャトーブリアンのカツサンド、生わさびの炭火焼き、すき焼き、秋なら松茸ご飯へ。常連が絶賛するのは飲み放題で、シャンパーニュ、上等な日本酒、Yamazaki や Hakushu まで入る。12回通ったという常連も。満足しなかった人もいて、2026年9月のランチの客は7,000円のコースは量が少なくご飯が特に少ないと書き、口コミの見出しは「外国人観光客向けの店」。開店当初のアラカルトがなくなったのを残念がる人も。予約制、サービス料10%。',
  });
}

// ================================================================ すし秀 其ノ弐
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13006757/'; const R = TB + 'dtlrvwlst/'; const PARTY = TB + 'party/';
  const WD = day(['11:30', '13:30'], ['17:30', '22:30']); const SAT = day(['17:30', '22:30']);
  put({
    id: 'tokyo_sushi_hide_sono_ni_yotsuya', name: 'すし秀 其ノ弐 (Sushi Hide Sono Ni)', category: 'OMNI',
    lat: 35.688655, lng: 139.725192, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sushi is seasoned at the counter and the omakase includes cooked appetizers; the staff checked a companion\'s allergies on one October 2025 visit, but nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase, including whale on some days.',
    hours_raw: 'Mon–Fri lunch 11:30–13:30 and dinner 17:30–22:30; Sat dinner only; closed Sunday and holidays (Tabelog). Reservations taken; lunch can end early when the sushi rice runs out, so call first (May 2024). Dinner is one of two omakase courses (Tabelog). 15 seats: a counter, a 4-person private room, tatami and sunken seating; hire up to 20; non-smoking (Tabelog; March 2024). Cards and PayPay or Rakuten Pay; no e-money (Tabelog). Renewed in November 2018 after 23 years as Sushi Hide (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya Sanei-cho 12-4, 竹田ビル 1F — 7 min from JR Yotsuya Stn, 6 min from Yotsuya-sanchome, 5 min from Akebonobashi',
    cuisine: 'Sushi with many small dishes, good for drinkers (2023–26 reviews) · dinner omakase in two kinds, ¥16,500 and ¥19,800 (also ¥25,000 on the course page) (Tabelog); a ¥15,000 course in 2023 · e.g. Miura edamame, mozuku, steamed abalone with whale bacon, Shimane "donchicchi" horse mackerel, house shiokara, Hokkaido ankimo, junsai, young ayu, firefly squid with bamboo shoots, large oysters, then nigiri such as kohada, ikura, katsuo and zuwai crab, tamago (2023–26 reviews) · lunch: bara chirashi or nigiri, ¥3,500 each, made piece by piece at the counter (May 2024) · a wide sake list and wines chosen to go with sushi (2023–24 reviews)',
    website: null, gmaps: gm('すし秀 其ノ弐 四谷'), menu_url: PARTY,
    notes: "[Sushi · Yotsuya, a renewed neighbourhood sushi counter] On a Sanei-cho street with several sushi shops, a calm, clean counter that served Yotsuya for 23 years as Sushi Hide and reopened, renewed, as \"Sono Ni\" (number two) in November 2018. The omakase leans on small dishes — house shiokara, steamed abalone with whale bacon, Shimane horse mackerel, young ayu in spring — before a modest run of nigiri, with plenty of sake and some wines to match; one diner calls it perfect for drink lovers, another wished for more nigiri. Lunch is a ¥3,500 chirashi or nigiri set, best at the counter. A quiet, watchful head chef and several apprentices; regulars can make the counter lively. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Sushi Hide for 23 years in Yotsuya, renewed as すし秀 其ノ弐 in November 2018 (Tabelog).',
      background: 'No source names the chef. Tabelog (corporate-member listing): "After 23 years of satisfying food lovers in Yotsuya, we renewed our restaurant in November 2018… Sushi Hideo No. 2" (machine-translated); dinner is only two omakase courses. Reviews describe a quiet head chef who picked up on a diner\'s dislikes and offered alternatives (August 2023), "the number of apprentices" (October 2025), and a scene of the TV drama Ousama ni Sasagu Kusuriyubi shot at the shop late at night (May 2024).',
      philosophy: null, specialty: 'Omakase with many appetizers.',
      anecdotes: [
        { text: '"When seated at a table, the sushi is served on a plate, while at the counter, each piece is hand-crafted upon order, making the counter experience feel more worthwhile!" — May 2024, ¥3,500 nigiri lunch.', source: R + 'B456794569/' },
        { text: '"A sushi restaurant with plenty of appetizers and fewer nigiri, perfect for drink lovers… The homemade shio-kara is truly delicious." — May 2025.', source: R + 'B507242916/' },
        { text: '"Steamed abalone with whale bacon… Donchicchi horse mackerel from Shimane Prefecture." — July 2026, omakase.', source: R + 'B531042635/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): すし秀 其ノ弐、寿司・魚介・日本酒バー、四谷三栄町12-4 竹田ビル1F、JR四ツ谷駅から徒歩7分、曙橋駅5分、四谷三丁目駅6分、月〜金11:30〜13:30・17:30〜22:30、土17:30〜22:30、日祝休み、15席、個室 (4名)、座敷・掘りごたつ、貸切20名まで、禁煙、カード・PayPay・楽天ペイ可、四谷で23年続けた「すし秀」を2018年11月にリニューアル、夜はおまかせ2種、コース16,500円・19,800円・25,000円。口コミ(2023年8月〜2026年7月): つまみが多く握りは少なめ、自家製の塩辛、蒸し鮑とクジラのベーコン、Shimane の donchicchi あじ、稚鮎、昼はばらちらしか握りで3,500円、日本酒とワイン、職人が多い、ドラマ Ousama ni Sasagu Kusuriyubi の撮影。',
      confidence: 'medium', sources: [TB, PARTY, R + 'B456794569/', R + 'B458562761/', R + 'B469982305/', R + 'B471742821/', R + 'B472981225/', R + 'B475700383/', R + 'B488410504/', R + 'B497098405/', R + 'B500739816/', R + 'B507242916/', R + 'B515533850/', R + 'B531042635/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase at dinner; two set choices at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷三栄町12-4 竹田ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated April and July 2026.' },
    pin_source: `Tabelog ${TB} (35.688655, 139.725192); cross-checked: GSI 東京都新宿区四谷三栄町12番4号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [PARTY, R + 'B456794569/'],
    price_note: 'Course prices from the Tabelog course page; lunch price from a May 2024 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥16,500', 'Course', 'ask', 'no', 'Tabelog course page; also ¥19,800 and ¥25,000.', 'omakase'),
      it('', '', 'Nigiri lunch or bara chirashi lunch', '¥3,500', 'Lunch', 'ask', 'no', 'May 2024 review.', 'lunch'),
    ] }, {
    cuisine: 'つまみの多い、飲む人向けの鮨 (2023〜26年の口コミ)・夜はおまかせ2種、16,500円と19,800円 (コースのページには25,000円も) (食べログ)。2023年は15,000円のコース・たとえば Miura の枝豆、もずく、蒸し鮑とクジラのベーコン、Shimane の donchicchi あじ、自家製の塩辛、Hokkaido のあん肝、じゅんさい、稚鮎、筍とほたるいか、大きな牡蠣、それからこはだ、いくら、かつお、ずわい蟹の握り、玉子 (2023〜26年の口コミ)・昼はばらちらしか握りで各3,500円、カウンターなら一貫ずつ握る (2024年5月)・日本酒が豊富で、鮨に合うワインも (2023〜24年の口コミ)',
    neighborhood: '四谷三栄町12-4 竹田ビル1F。JR四ツ谷駅から徒歩7分、四谷三丁目駅から6分、曙橋駅から5分',
    gf_detail: '要確認。握りはカウンターで味付けして出し、おまかせには加熱したつまみも。2025年10月には連れのアレルギーを確認してくれたが、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。魚介のおまかせで、日によってクジラも。',
    notes: '[鮨・四谷、リニューアルした街の鮨のカウンター] 鮨屋が何軒か並ぶ三栄町の通りの、落ち着いた清潔なカウンター。すし秀として四谷で23年営み、2018年11月に「其ノ弐」としてリニューアルした。おまかせはつまみが中心で、自家製の塩辛、クジラのベーコンを添えた蒸し鮑、Shimane のあじ、春の稚鮎のあとに控えめな数の握り。日本酒が豊富でワインも。飲む人にぴったりという声もあれば、握りがもっとほしかったという人も。昼は3,500円のちらしか握りで、カウンターがおすすめ。寡黙で目配りのきく大将と大勢の弟子。常連でカウンターがにぎやかになることも。日曜休み。',
  });
}

// ================================================================ 宝来
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13069470/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '13:30']);
  put({
    id: 'tokyo_horai_wakaba_yotsuya', name: '宝来 (Horai)', category: 'OMNI',
    lat: 35.685083, lng: 139.724364, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles, wontons and shumai, soy-based broths.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-fat ramen, chashu, meat shumai and wontons.',
    hours_raw: 'Mon, Tue, Thu, Fri 11:00–13:30; closed Wednesday, Saturday, Sunday and holidays (Tabelog). Weekday lunch only; a line of 3–5 outside around noon (2026 reviews); the jumbo shumai sells out (2026 reviews). No reservations; order by voice (June 2026). Cash only (Tabelog). 8 seats at a U-shaped counter; non-smoking (Tabelog; September 2026).',
    hours: { 0: H, 1: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Wakaba 2-5, in a quiet residential pocket near Suga Shrine — 7 min from Yotsuya-sanchome Stn, 10 min from Yotsuya Stn',
    cuisine: 'Family-run neighbourhood Chinese (machi-chuka) (2026 reviews) · ramen in regular or "special" versions — the special has back fat for a sweeter, richer broth: special wonton noodles ¥950 (¥850 with less noodles), special chashu wonton ramen ¥1,150, special menma, takana wonton and miso chashu ramen; large +¥50, wontons +¥100 (2026 reviews) · jumbo shumai ¥100 each, the house favourite; wonton soup ¥200 with five large wontons; five-ingredient fried rice ¥850 (2026 reviews)',
    website: null, gmaps: gm('宝来 若葉 中華'), menu_url: null,
    notes: "[Chinese · Yotsuya, a family-run lunch counter near Suga Shrine] An eight-seat U-shaped counter in a quiet residential pocket near Suga Shrine, open just two and a half hours on four weekdays and still packed, with construction workers and office regulars lining up outside. Order by voice: a \"special\" ramen gets a spoonful of back fat that sweetens and enriches the soy broth, with wontons, chashu or spicy takana on top, and almost everyone adds a jumbo shumai at ¥100, if it hasn't sold out. A ¥200 wonton soup and a moist five-ingredient fried rice are the other quiet stars. Most bowls cost about ¥1,000. Regulars chat with the owner at the counter. Cash only.",
    chef_bio: { chef_name: null, roles: ['Family-run (August 2026 review)'], origin: null,
      background: 'No source names the owner. "Considering it was during the Obon holiday and it\'s a family-run place, there was a high chance they might be closed" (August 2026); "listening to the conversations between the local regulars and the owner" (April 2026).',
      philosophy: null, specialty: 'Special (back-fat) ramen; jumbo shumai.',
      anecdotes: [
        { text: '"The difference between the regular wonton noodle soup and the special version is not in the ingredients, but in the broth—one has back fat while the other does not." — August 2026.', source: R + 'B518599733/' },
        { text: '"What amazed me was the wonton soup for just JPY 200. In a small bowl, there were five large, slippery wontons." — June 2026.', source: R + 'B530150906/' },
        { text: '"Special Chashu Wonton Ramen JPY 1150, Jumbo Shumai (1 piece) JPY 100… by after 12, it was fully packed and there was a line outside." — May 2026.', source: R + 'B528614470/' },
      ],
      japanese_sources_summary: '食べログ: 宝来、中華料理・ラーメン、若葉2-5、四谷三丁目駅から徒歩7分、四ツ谷駅10分、月・火・木・金11:00〜13:30、水土日祝休み、予約不可、カード・電子マネー・QR不可、8席 (カウンター)、禁煙。口コミ(2026年2月〜9月): 家族経営、Suga Shrine の近く、U字のカウンター、背脂入りの「特製」、特製ワンタン麺950円、特製チャーシューワンタン麺1,150円、高菜ワンタン、味噌チャーシュー、大盛り +50円、ジャンボシューマイ1個100円、ワンタンスープ200円、五目チャーハン850円、昼に3〜5人の行列、口頭で注文。',
      confidence: 'medium', sources: [TB, R + 'B492730306/', R + 'B518599733/', R + 'B522034863/', R + 'B523315185/', R + 'B524208692/', R + 'B527467619/', R + 'B527656759/', R + 'B528378434/', R + 'B528614470/', R + 'B530150906/', R + 'B533897841/', R + 'B536529267/'] },
    cultural_comfort: { level: 'japanese', note: 'No ticket machine or tablet; order by voice in Japanese; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区若葉2-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.685083, 139.724364); cross-checked: GSI 東京都新宿区若葉二丁目5番地 (lot) 41m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B528614470/', R + 'B518599733/', R + 'B530150906/'],
    price_note: 'Prices from May–September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special chashu wonton ramen (with back fat)', '¥1,150', 'Ramen', 'no', 'no', 'May 2026 review.', 'tokusei_chashu_wonton'),
      it('', '', 'Special wonton noodles', '¥950', 'Ramen', 'no', 'no', 'August 2026 review (¥850 with less noodles).', 'tokusei_wonton'),
      it('', '', 'Jumbo shumai, one piece', '¥100', 'Sides', 'no', 'no', 'May and September 2026 reviews.', 'jumbo_shumai'),
      it('', '', 'Wonton soup', '¥200', 'Sides', 'no', 'no', 'June 2026 review.', 'wonton_soup'),
      it('', '', 'Five-ingredient fried rice', '¥850', 'Rice', 'ask', 'no', 'June 2026 review.', 'gomoku_chahan'),
    ] }, {
    cuisine: '家族経営の街中華 (2026年の口コミ)・ラーメンは普通と「特製」があり、特製は背脂入りで甘みとコクが増す: 特製ワンタン麺950円 (麺少なめで850円)、特製チャーシューワンタン麺1,150円、特製メンマ、高菜ワンタン、味噌チャーシュー麺。大盛り +50円、ワンタン追加 +100円 (2026年の口コミ)・名物のジャンボシューマイは1個100円、大きなワンタンが5個入るワンタンスープ200円、五目チャーハン850円 (2026年の口コミ)',
    neighborhood: '若葉2-5、Suga Shrine に近い静かな住宅街。四谷三丁目駅から徒歩7分、四ツ谷駅から10分',
    gf_detail: 'グルテンフリーではない。小麦の麺、ワンタン、シューマイ、醤油のスープ。',
    vegan_detail: 'ヴィーガンではない。背脂のラーメン、チャーシュー、肉のシューマイとワンタン。',
    notes: '[中華・四谷、Suga Shrine 近くの家族経営の昼のカウンター] Suga Shrine に近い静かな住宅街の、U字のカウンター8席。平日4日の昼に2時間半だけ開くのに満席で、工事の人や会社員の常連が外に並ぶ。注文は口頭で。「特製」のラーメンは背脂が入って醤油のスープが甘くこってりし、ワンタン、チャーシュー、辛い高菜をのせて。ほとんどの人が売り切れていなければ1個100円のジャンボシューマイを足す。200円のワンタンスープと、しっとりした五目チャーハンも隠れた名物。たいてい1,000円前後。カウンターでは常連が店主と話している。現金のみ。',
  });
}

// ================================================================ 焼肉 六六六
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130903/13276803/'; const R = TB + 'dtlrvwlst/'; const PARTY = TB + 'party/';
  const WD = day(['11:00', '14:30'], ['17:00', '23:30']); const WE = day(['11:00', '14:30'], ['17:00', '23:00']);
  put({
    id: 'tokyo_yakiniku_666_yotsuya', name: '焼肉 六六六 (Yakiniku 666)', category: 'OMNI',
    lat: 35.687435, lng: 139.724319, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salted tongue and plain grilled cuts can be eaten with salt, but the tare, sukiyaki-style dishes, cold noodles and bibimbap are wheat- or soy-based; nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku; kimchi and salads are the only plant sides named.',
    hours_raw: 'Mon–Fri 11:00–14:30 and 17:00–23:30; Sat, Sun and holidays 11:00–14:30 and 17:00–23:00; closing days not fixed (Tabelog). Reservations taken. Service charge 10% (Tabelog). 28 seats: a counter of 4, four private rooms and one room for 8; strollers only in the room for 8; hire up to 20 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Paid parking behind the shop (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 2-11-15, JLBグランエクリュ 1F, on Shinjuku-dōri by a golden cow statue — 5 min from Exit 3 of Yotsuya-sanchome Stn, 7–8 min from Yotsuya Stn',
    cuisine: 'Wagyu yakiniku of lean, flavourful cuts from farmers chosen for taste: about 90 head of Mikumanogyu and 7 of Mansukagyu a year (Tabelog) · courses of 19 dishes ¥8,500, 23 dishes ¥11,000, 25 dishes ("Kachofugetsu") ¥14,300, and Shinra Bansho ¥22,000 (Tabelog) · e.g. rare salt-grilled thick tongue, beef offal stew, meat sushi, seared tawara yukhoe with uni and ikura, a six-cut wagyu platter (tri-tip, flap, knuckle, top sirloin, outside knuckle and a sixth cut the reviews translate as "chicken breast"), Murasaki beef sirloin mille-feuille, oxtail soup, beef curry, cold noodles, stone-grilled bibimbap (2026 reviews) · à la carte: thick tongue, upper tripe, an assorted platter ¥12,000 (June 2026)',
    website: null, gmaps: gm('焼肉 六六六 四谷'), menu_url: PARTY,
    notes: "[Yakiniku · Yotsuya, lean rare wagyu in private rooms] A calm, concrete-and-wood yakiniku by a golden cow on Shinjuku-dōri — the name, one diner learned, is read \"Mutsumi\" — specialising in lean, chewy wagyu from small farms: about 90 head a year of Mikumanogyu and 7 of the rarer Mansukagyu. Most tables are private rooms, and the courses run from 19 to 25 small dishes, from rare thick tongue and seared yukhoe with uni and ikura to a six-cut platter and a sirloin mille-feuille, with cold noodles to finish. Diners agree on the quality of the meat; several 2026 visitors found the courses small for the price and the drinks dear, one found the service slow and the bill shown openly, another missed any greeting or explanation, and one found an overseas staff member's Japanese hard to follow but praised the effort. 10% service.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the owner. Tabelog (corporate-member listing): carefully selected wagyu, "90 head of \'Mikumanogyu\' and 7 head of \'Mansukagyu\' each year"; a lineup of lean cuts from farmers who prioritise taste, with less marbling for a more satisfying chew. An August 2026 diner: "The name is read as \'Mutsumi.\'"',
      philosophy: 'Adult yakiniku: high-quality meat and good sake in a calm space (Tabelog).', specialty: 'Lean wagyu courses.',
      anecdotes: [
        { text: '"Dining at \'Yakiniku 666\' in Yotsuya. The name is read as \'Mutsumi.\' It\'s about a 5-minute walk from Yotsuya Sanchome Station, marked by a golden cow statue." — August 2026.', source: R + 'B535099620/' },
        { text: '"Overall, I have no complaints about the quality of the meat. However, the portion size of the course is quite small for the price." — May 2026, Shinra Bansho course.', source: R + 'B529137014/' },
        { text: '"The loin melts in your mouth, while the short ribs have just the right amount of chewiness without being overly fatty—simply exquisite." — July 2026.', source: R + 'B535769433/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼肉 六六六、焼肉・ホルモン・韓国料理、四谷2-11-15 JLBグランエクリュ1F、四谷三丁目駅3番出口から徒歩5分、月〜金11:00〜14:30・17:00〜23:30、土日祝11:00〜14:30・17:00〜23:00、不定休、サービス料10%、28席 (カウンター4、個室4、8名の個室1)、カード可、Mikumanogyu を年90頭、Mansukagyu を年7頭、赤身の旨みを重視、コース19品8,500円・23品11,000円・25品14,300円・森羅万象22,000円。口コミ(2026年5月〜10月): 店名の読みは「Mutsumi」という声、金の牛の像、厚切りタン、肉寿司、雲丹といくらの俵ユッケ、6種の盛り合わせ、サーロインのミルフィーユ、冷麺、肉の質は高いが量が少なく値段が高いという声、接客の説明が少ないという声。',
      confidence: 'medium', sources: [TB, PARTY, R + 'B529137014/', R + 'B530025387/', R + 'B531012254/', R + 'B531112228/', R + 'B533824380/', R + 'B534040937/', R + 'B535099620/', R + 'B535477689/', R + 'B535525850/', R + 'B535769433/', R + 'B537013668/', R + 'B538354446/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses or à la carte; self-grill in private rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷2-11-15 JLBグランエクリュ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687435, 139.724319); cross-checked: GSI 東京都新宿区四谷二丁目11番地 (lot) 8m. Niku Kaiseki Rinzen (tokyo_niku_kaiseki_rinzen_yotsuya, "東京都新宿区四谷2-11-19 大村ビル 1F") is 24 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [PARTY, R + 'B530025387/'],
    price_note: 'Course prices from the Tabelog course page (tax included; 10% service on top).', last_checked: TODAY, items: [
      it('', '', '19-dish course', '¥8,500', 'Course', 'ask', 'no', 'Tabelog course page.', 'course_19'),
      it('', '', '25-dish Kachofugetsu course', '¥14,300', 'Course', 'ask', 'no', 'Tabelog course page; September 2026 review.', 'kachofugetsu'),
      it('', '', 'Shinra Bansho course', '¥22,000', 'Course', 'ask', 'no', 'Tabelog course page.', 'shinra_bansho'),
      it('', '', 'Assorted wagyu platter', '¥12,000', 'À la carte', 'ask', 'no', 'June 2026 review.', 'assorted_platter'),
    ] }, {
    cuisine: '味を重視する生産者の、赤身のうまい和牛の焼肉: Mikumanogyu を年に約90頭、Mansukagyu を7頭 (食べログ)・コースは19品8,500円、23品11,000円、25品の「花鳥風月」14,300円、森羅万象22,000円 (食べログ)・たとえばレアで出す厚切りの塩タン、牛もつ煮、肉寿司、雲丹といくらをのせた炙りの俵ユッケ、6種の和牛の部位の盛り合わせ、Murasaki 牛のサーロインのミルフィーユ、テールスープ、牛すじカレー、冷麺、石焼ビビンバ (2026年の口コミ)・アラカルト: 厚切りタン、上ミノ、盛り合わせ12,000円 (2026年6月)',
    neighborhood: '四谷2-11-15 JLBグランエクリュ1F、新宿通りの金の牛の像のそば。四谷三丁目駅3番出口から徒歩5分、四ツ谷駅から7〜8分',
    gf_detail: '要確認。塩タンや焼いただけの部位は塩で食べられるが、たれ、すき焼き風の料理、冷麺、ビビンバは小麦や醤油を使う。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。和牛の焼肉で、植物性で名前が出るのはキムチとサラダくらい。',
    notes: '[焼肉・四谷、個室で食べる赤身の希少な和牛] 新宿通りの金の牛の像のそばにある、コンクリートと木の落ち着いた焼肉店。店名の読みは「Mutsumi」だとある客は聞いた。小さな生産者の赤身のかみごたえのある和牛が専門で、Mikumanogyu を年に約90頭、さらに希少な Mansukagyu を7頭。席はほとんど個室で、コースは19〜25品の小皿が続く: レアの厚切りタン、雲丹といくらの炙りユッケ、6種の盛り合わせ、サーロインのミルフィーユ、締めの冷麺。肉の質はみな褒めるが、2026年にはコースが値段の割に少なく飲み物が高いという声が複数、提供が遅く会計が丸見えだったという人、あいさつや説明がなかったという人、海外出身のスタッフの日本語が少しわかりにくかったが一生懸命だったという人も。サービス料10%。',
  });
}

save();
