// Tokyo gaps sweep (1-mile circles between the existing Tokyo clusters), circle roppongi — lane osw9, batch 5.
//   + SUZU CAFE 六本木 (hotel-lobby café with chandeliers: breakfast, lunch sets with drink bar, Dutch pancakes, dinner)
//   + たんや又兵衛 六本木本店 Tanya Matabee (black-wagyu tongue specialist, aged 30 days, since the late 1980s)
//   + 鰻いち黒船 Una Ichi Kurofune (eel grilled over charcoal and straw; ¥6,600 eel course; opened April 2025)
//   + 鮨 とき Sushi Toki (8-seat omakase counter with aged fish; opened April 2025)
//   Chain check. SUZU CAFE: a job listing seen in search results put it at five shops (three in Tokyo, two in Hiroshima);
//   none in data/tokyo.json or data/hiroshima.json. Tanya Matabee: the Roppongi head shop; an April 2025 reviewer mentions
//   a Ginza shop; not in data. Una Ichi Kurofune: the SAWAICHI GROUP site (sawaichi.jp) lists 澤いち 本店, 炭屋 and
//   鰻いち黒船, all in Roppongi; none in data. Sushi Toki: one listing. None is in data/tokyo.json by name, Tabelog id or
//   address. Sushi Toki's address (六本木3-9-4 ロイヤルビル B1F) and Tabelog point match Roppongi Kinme Sushi
//   (tokyo_roppongi_kinme_sushi, address_ja "東京都港区六本木3-9-4 六本木ロイヤルビル B1F"): two 8-seat counters listed in one
//   basement, both reviewed in 2026, so Toki's pin is offset 8 m east. SUZU CAFE (3-10-1) is 8 m from Roppongi Kakishin
//   (tokyo_kakishin_roppongi, 3-10-11), a different building. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw9-5');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ SUZU CAFE 六本木
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13214732/'; const R = TB + 'dtlrvwlst/';
  const H = day(['06:45', '10:00'], ['11:00', '22:00']);
  put({
    id: 'tokyo_suzu_cafe_roppongi', name: 'SUZU CAFE 六本木', category: 'OMNI',
    lat: 35.663607, lng: 139.733475, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free; the menu is pasta, pizza, bread, Dutch pancakes, tarts and cheesecake, with taco rice, hamburg steak and a vegetable plate among the few rice or non-wheat mains (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog ticks "vegetarian options" and an October 2026 diner had a vegetable-packed "Healthy Plate", but no vegan dish is named; pastas use cream, butter and bacon.',
    hours_raw: 'Daily: breakfast 06:45–10:00 (last order 09:45); 11:00–22:00 — lunch 11:00–15:00, café 15:00–18:00, dinner 18:00–22:00 (Tabelog). Closed over New Year except for breakfast. Bookings by phone or online (may be paused at times); reservations recommended for the café hours (October 2026). QR ordering (September 2026). In the hotel 相鉄フレッサイン東京六本木. 68 seats including sofas and a private room for 2 to 6 (¥2,200 for two hours); whole-venue hire for 30–80. Non-smoking. Cards, IC/e-money and QR. Children welcome. Wi-Fi was weak for one October 2026 diner.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-10-1, 相鉄フレッサイン東京六本木 1F — 1 min from Roppongi Stn (Hibiya / Oedo lines)',
    cuisine: 'Café-restaurant with antique sofas and chandeliers (Tabelog shop text) · lunch with salad and drink bar (2026 reviews): monthly fresh pasta ¥1,320 (e.g. bacon and mushroom with butter soy sauce, sukiyaki-style), Margherita pizza, taco rice ¥1,320, homemade hamburg steak with demi-glace ¥1,580, vegetable-packed Healthy Plate ¥1,450; SUZU lunch course of 7 items ¥2,750 (Tabelog) · Dutch pancakes (berry, caramel banana or mango) ¥990, café latte ¥930 (October 2026); retro pudding, burnt-caramel cheesecake, strawberry tart · dinner: beef-steak course with two hours of drinks ¥4,950; girls\'-night plan of 7 items with a dessert plate ¥3,400 (Tabelog) · breakfast from 06:45',
    website: null, gmaps: gm('SUZU CAFE 六本木'), menu_url: TB + 'dtlmenu/',
    notes: "[Café · Roppongi, a chandeliered café open from breakfast to dinner] On the ground floor of a hotel (相鉄フレッサイン東京六本木) a minute from Roppongi Station, a big, bright café full of antique sofas and original furniture, lit at night by chandeliers. It serves breakfast from 6:45, then good-value lunch sets — a monthly fresh pasta, pizza or taco rice for ¥1,320, hamburg steak for ¥1,580 — with salad and a drink bar, sweets in the afternoon, and courses and parties at night. The oven-baked Dutch pancakes and a retro, Showa-style pudding are the café favourites. A regular who comes every fortnight had the kitchen make an off-menu salmon and gorgonzola cream pasta because the staff remembered it was a favourite; another diner found the cooking more rota than heart. Book for afternoon tea; QR ordering.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Café-restaurant on the ground floor of the hotel 相鉄フレッサイン東京六本木 (Tabelog address). A job listing seen in web search results described SUZU CAFE as five shops, three in Tokyo and two in Hiroshima (not opened; for the chain check only).',
      philosophy: 'A playful room of antique sofas and original furniture, bright by day and chandeliered by night (Tabelog shop text).', specialty: 'Dutch pancakes; lunch sets with drink bar.',
      anecdotes: [
        { text: '"The staff asked, \'Are you sure you don\'t want the salmon pasta?\' but it wasn\'t on the lunch menu… \'The kitchen can make it for you!\'" — October 2026, sixth visit.', source: R + 'B530288588/' },
        { text: '"These pancakes are quite unique, known as Dutch pancakes… Baked in the oven, they have a lovely golden crust." — October 2026, ¥990.', source: R + 'B537992961/' },
        { text: '"The place doesn’t have a chef who puts a lot of heart into the dishes." — October 2026, Healthy Plate ¥1,450.', source: R + 'B537682814/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): SUZU CAFE 六本木、港区六本木3-10-1 相鉄フレッサイン東京六本木1F、六本木駅から徒歩1分、毎日6:45〜10:00 (朝食)、11:00〜22:00 (ランチ11:00〜15:00、カフェ15:00〜18:00、ディナー18:00〜22:00)、年末年始休み (朝食は営業)、68席、個室2〜6名 (2時間2,200円)、貸切30〜80名、禁煙、カード・電子マネー・QR可。アンティークのソファとシャンデリア、名物はダッチパンケーキ。コース: ランチコース2,750円、ディナーの飲み放題付きステーキコース4,950円、女子会プラン3,400円。口コミ(2026年9月〜10月): ランチはサラダとドリンクバー付き、月替わりの生パスタ1,320円、タコライス1,320円、ハンバーグ1,580円、ヘルシープレート1,450円、ダッチパンケーキ990円、カフェラテ930円、レトロなプリン、QR注文。',
      confidence: 'medium', sources: [TB, R + 'B530288588/', R + 'B534963326/', R + 'B535253686/', R + 'B535260688/', R + 'B536556177/', R + 'B536780143/', R + 'B537682814/', R + 'B537721964/', R + 'B537992961/', R + 'B538429152/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'QR ordering and set lunches; no English service is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-10-1 相鉄フレッサイン東京六本木 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.663607, 139.733475); GSI 東京都港区六本木三丁目10番 (lot) 20m; Roppongi Kakishin (tokyo_kakishin_roppongi, 3-10-11) is 8 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B536556177/', R + 'B537992961/'],
    price_note: 'Lunch and café prices from September–October 2026 reviews; courses from Tabelog (tax included).', last_checked: TODAY, items: [
      it('', '', 'Lunch: this month\'s fresh pasta, with salad and drink bar', '¥1,320', 'Lunch', 'no', 'ask', 'September 2026 review.', 'lunch_pasta'),
      it('', '', 'Lunch: taco rice, with salad and drink bar', '¥1,320', 'Lunch', 'ask', 'no', 'September 2026 review.', 'taco_rice'),
      it('', '', 'Lunch: homemade hamburg steak with demi-glace', '¥1,580', 'Lunch', 'ask', 'no', 'September 2026 review.', 'hamburg'),
      it('', '', 'Healthy Plate (vegetables, with two small breads)', '¥1,450', 'Lunch', 'ask', 'ask', 'October 2026 review.', 'healthy_plate'),
      it('', '', 'Very Berry Dutch pancake', '¥990', 'Sweets', 'no', 'no', 'October 2026 review.', 'dutch_pancake'),
      it('', '', 'SUZU lunch course, 7 items', '¥2,750', 'Course', 'no', 'ask', 'Tabelog.', 'lunch_course'),
    ] }, {
    cuisine: 'アンティークのソファとシャンデリアのカフェレストラン (食べログの店の紹介)・サラダとドリンクバー付きのランチ (2026年の口コミ): 月替わりの生パスタ1,320円 (例: ベーコンときのこのバター醤油、すき焼き風)、マルゲリータ、タコライス1,320円、デミグラスソースの手ごねハンバーグ1,580円、野菜たっぷりのヘルシープレート1,450円。SUZUランチコース7品2,750円 (食べログ)・ダッチパンケーキ (ベリー、キャラメルバナナ、マンゴー) 990円、カフェラテ930円 (2026年10月)。レトロなプリン、焦がしキャラメルのチーズケーキ、苺のタルト・ディナー: 2時間飲み放題付きのビーフステーキコース4,950円、デザートプレート付きの女子会プラン7品3,400円 (食べログ)・朝食は6時45分から',
    neighborhood: '六本木3-10-1 相鉄フレッサイン東京六本木1F。六本木駅から徒歩1分 (日比谷線・大江戸線)',
    gf_detail: '要確認。グルテンフリーの説明はない。パスタ、ピザ、パン、ダッチパンケーキ、タルト、チーズケーキが中心で、タコライス、ハンバーグ、野菜のプレートが数少ないご飯もの・小麦以外の料理 (2026年の口コミ)。',
    vegan_detail: '要確認。食べログには「ベジタリアンメニューあり」とあり、2026年10月の客は野菜たっぷりの「ヘルシープレート」を食べたが、ヴィーガンの料理名はない。パスタには生クリーム、バター、ベーコンを使う。',
    notes: '[カフェ・六本木、朝食から夕食までのシャンデリアのカフェ] 六本木駅から1分、相鉄フレッサインの1階にある広く明るいカフェで、アンティークのソファや店オリジナルの家具が並び、夜はシャンデリアが灯る。朝6時45分から朝食、昼はサラダとドリンクバー付きのお得なランチ (月替わりの生パスタ、ピザ、タコライスが1,320円、ハンバーグが1,580円)、午後はスイーツ、夜はコースや貸切パーティー。カフェの人気はオーブンで焼くダッチパンケーキと昭和レトロなプリン。2週間おきに通う常連は、好物だと覚えていたスタッフのおかげでメニューにないサーモンとゴルゴンゾーラのクリームパスタを作ってもらった。一方で、料理に作り手の心が感じられず決まった料理を回しているだけと感じた客も。午後のカフェは予約がおすすめ、注文はQRコードで。',
  });
}

// ================================================================ たんや又兵衛 六本木本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13001217/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '23:00']);
  put({
    id: 'tokyo_tanya_matabee_roppongi', name: 'たんや又兵衛 六本木本店 (Tanya Matabee Roppongi)', category: 'OMNI',
    lat: 35.662623, lng: 139.733957, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Besides grilled tongue, the menu has miso-marinated tongue, a croquette or minced cutlet with the set meal, tongue soup and congee (2024–2025 reviews); seasonings are not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef-tongue house (grilled and raw tongue, beef sashimi, liver); grilled vegetables such as shiitake and asparagus come alongside (September 2026).',
    hours_raw: 'Mon–Sat 17:30–23:00; closed Sundays and public holidays (Tabelog). 10% service charge. 16 seats: a counter, a tatami area and a private room; private hire up to 20. Non-smoking. Cards; no e-money or QR. Children welcome. Spending is high: Tabelog\'s review average is ¥20,000–29,999, and 2026 diners reported ¥40,000–80,000 a person.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-13-8, 斎藤ビル 2F — 3 min from Roppongi Stn',
    cuisine: 'Beef-tongue specialist using only Japanese black wagyu (Tabelog shop text) · fresh, never-frozen "nama tan" aged 30 days; only the rare "tan shin" core, about 300 g a tongue, is used · recommended course with tongue, sagari and beef sashimi, 9 items, ¥23,590 (Tabelog, tax included) · in 2024–2026 reviews: thick grilled tongue, raw tongue, tongue sashimi, a skewer of three large pieces of tongue (October 2026), miso-marinated tongue, beef sashimi, liver, grilled shiitake and asparagus, a beef-tongue set meal with soup (December 2025), congee to finish · sake and shochu',
    website: null, gmaps: gm('たんや又兵衛 六本木本店'), menu_url: TB + 'dtlmenu/',
    notes: "[Beef tongue · Roppongi, a black-wagyu tongue specialist of over 35 years] Up a flight in an old building three minutes from Roppongi Station, a 16-seat tongue house the shop says has been going for 36 or 37 years on one rule: use only the truly good parts of Japanese black wagyu. The tongue is fresh, never frozen, and aged 30 days, and only its tender core — about 300 g a tongue — is served: grilled thick, as sashimi or raw, or as a skewer of three huge pieces. Courses add sagari, beef sashimi and vegetables, and a bowl of congee finishes the night. Diners call it the best tongue in Japan, and one has been coming for over 30 years, since its original location; the bills are high (¥40,000 or more a head in 2026 reviews). There is also a Ginza shop, a 2025 diner noted. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Roppongi head shop (本店); open 36–37 years per the Tabelog shop text',
      background: 'The Tabelog shop text calls it a 36-year-old hidden spot and, elsewhere, says it has held to "only using the truly good parts of black wagyu" for 37 years. A September 2024 reviewer has eaten here for over 30 years, since its original location, and noted gas grilling; an April 2025 diner was surprised to learn there is also a Ginza shop.',
      philosophy: '"Only using the truly good parts of black wagyu beef" (Tabelog shop text).', specialty: '30-day-aged black-wagyu tongue core ("tan shin"); raw tongue.',
      anecdotes: [
        { text: '"I was amazed to be able to enjoy raw tongue, but the moment I took a bite, my entire concept of tongue was completely shattered." — September 2026.', source: R + 'B535622833/' },
        { text: '"I enjoyed skewers made from just three pieces of large tongue… The price was quite high, but it’s a dish I want to try before I die." — October 2026.', source: R + 'B537185990/' },
        { text: '"I\'ve been coming here for longer than 30 years, starting from the original location…" — September 2024.', source: R + 'B492435491/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): たんや又兵衛 六本木本店、港区六本木3-13-8 斎藤ビル2F、六本木駅から徒歩3分、月〜土17:30〜23:00、日祝休み、サービス料10%、16席、個室あり、座敷、禁煙、カード可、子ども可。店の紹介: 36年 (別の箇所では37年) の歴史、黒毛和牛の冷凍しない生のタン (Nama Tan) を30日熟成、1本から約300gしか取れない芯 (Tan Shin) だけを使う、おすすめコース9品23,590円 (タン、Sagari、牛刺し)。口コミ(2024年8月〜2026年10月): 生のタン、タン刺し、厚切りの焼きタン、大きなタン3切れの串、味噌漬けのタン、牛刺し、レバー、椎茸とアスパラ、締めの粥、銀座にも店があるという声、30年以上通う客、2026年は1人4万〜8万円の客も。',
      confidence: 'medium', sources: [TB, R + 'B312496849/', R + 'B490379738/', R + 'B492435491/', R + 'B502278987/', R + 'B516707411/', R + 'B519133604/', R + 'B522661250/', R + 'B532783771/', R + 'B535622833/', R + 'B537185990/'] },
    cultural_comfort: { level: 'japanese', note: 'No English menu or English-speaking staff is listed on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-13-8 斎藤ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.662623, 139.733957); GSI 東京都港区六本木三丁目13番 (lot) 26m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from Tabelog (tax included; read November 2026), plus 10% service. No à la carte prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Recommended course: black-wagyu tongue, sagari and beef sashimi, 9 items', '¥23,590', 'Course', 'ask', 'no', 'Tabelog.', 'tongue_course'),
    ] }, {
    cuisine: '黒毛和牛だけを使う牛タンの専門店 (食べログの店の紹介)・冷凍しない生のタン (Nama Tan) を30日熟成し、1本から約300gしか取れない芯 (Tan Shin) だけを使う・タン、Sagari、牛刺しのおすすめコース9品23,590円 (食べログ、税込み)・2024〜2026年の口コミ: 厚切りの焼きタン、生のタン、タン刺し、大きなタン3切れの串 (2026年10月)、味噌漬けのタン、牛刺し、レバー、焼き椎茸とアスパラ、スープ付きの牛タン定食 (2025年12月)、締めの粥・日本酒と焼酎',
    neighborhood: '六本木3-13-8 斎藤ビル2F。六本木駅から徒歩3分',
    gf_detail: '要確認。グルテンフリーの説明はない。焼きタンのほかに味噌漬けのタン、定食のコロッケかメンチカツ、スープ、粥など (2024〜2025年の口コミ)。味付けの説明はない。',
    vegan_detail: 'ヴィーガン不可。牛タンの店 (焼きタン、生のタン、牛刺し、レバー)。椎茸やアスパラなどの焼き野菜は添えて出る (2026年9月)。',
    notes: '[牛タン・六本木、35年を超える黒毛和牛のタンの専門店] 六本木駅から3分、古いビルの2階にある16席の牛タンの店。店によれば36〜37年、黒毛和牛の本当においしい部分だけを使うことを守ってきた。タンは冷凍せず30日熟成し、1本から約300gの柔らかな芯だけを出す。厚切りで焼くか、刺身や生で、または大きな3切れの串で。コースには Sagari、牛刺し、野菜が加わり、締めは粥。口コミでは日本一のタンとの声が多く、以前の場所の頃から30年以上通う客も。値段は高く、2026年の口コミでは1人4万円以上。銀座にも店があると2025年の客が書いている。日曜・祝日休み。',
  });
}

// ================================================================ 鰻いち黒船
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13306273/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sawaichi.jp/index.html';
  const H = day(['11:30', '15:00'], ['17:00', '21:00']);
  put({
    id: 'tokyo_una_ichi_kurofune_roppongi', name: '鰻いち黒船 (Una Ichi Kurofune)', category: 'OMNI',
    lat: 35.663957, lng: 139.734176, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nothing is called gluten-free. Most eel is glazed with a house sauce simmered with eel bones (Tabelog), and the hot pot and hitsumabushi use broth; the shirayaki is grilled without sauce and eaten with wasabi (October 2026).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel house; the course\'s side dishes (egg tofu, uzaku, eel liver) and hot pot are built on eel and dashi.',
    hours_raw: 'Daily 11:30–15:00 (food last order 14:30) and 17:00–21:00; closed on public holidays, though it may open on Sundays and holidays (check Instagram) (Tabelog). The dinner course is by reservation only. No service or cover charge. 14 seats: 4 at the counter, two tables for 4 and two for 2. Non-smoking. Cards (incl. UnionPay) and PayPay. Menu in English, Chinese and Korean. Takeaway and delivery. Opened 15 April 2025 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-9-12, 源氏ビル 1F — 3 min from Roppongi Stn (Hibiya line), 5 min (Oedo line)',
    cuisine: 'Eel grilled over charcoal and straw, glazed with a house sauce simmered with eel bones (Tabelog shop text) · unaju, hitsumabushi (¥2,800, October 2026) and unagi tamagoyaki · reservation-only dinner course, 10 dishes, ¥6,600 (Tabelog, tax included): in October 2026 four starters (egg tofu, uzaku, simmered eel liver, edamame or ginkgo), "unaretsu" (eel in a thick egg sauce), half an eel shirayaki with grilled maitake, an eel hot pot with burdock, green onion, mitsuba and grilled tofu, a mini hitsumabushi eaten three ways, seasonal fruit · sake, shochu and sours',
    website: SITE, gmaps: gm('鰻いち黒船 六本木3-9-12'), menu_url: TB + 'dtlmenu/',
    notes: "[Unagi · Roppongi, eel grilled over charcoal and straw] A calm, wood-panelled eel shop a few minutes from Roppongi Station, opened in April 2025 by the group behind the Roppongi kaiseki restaurant 澤いち. The eel is grilled over charcoal and then straw for a smoky, crisp skin, and glazed with a house sauce simmered with eel bones. At lunch, hitsumabushi was ¥2,800 in October 2026 and a large eel still comes in under ¥4,000; at night the ¥6,600 reservation-only course runs through eel liver, uzaku, eel in egg sauce, a sauce-free shirayaki, an eel hot pot and a mini hitsumabushi finished with broth — a price October 2026 diners found remarkable for Roppongi. Fourteen seats, counter and tables, busy with both bookings and walk-ins; no service charge. Menus in English, Chinese and Korean.",
    chef_bio: { chef_name: null, roles: [], origin: 'SAWAICHI GROUP, Roppongi (official site)',
      background: 'One of three Roppongi shops of the SAWAICHI GROUP, with 澤いち 本店 and 炭屋 (group site sawaichi.jp). October 2026 reviewers describe 澤いち as a long-established Roppongi kaiseki restaurant ("for 26 years", one says). Opened 15 April 2025 (Tabelog).',
      philosophy: 'Authentic Japanese eel at an affordable price (Tabelog shop text).', specialty: 'Charcoal- and straw-grilled eel; the ¥6,600 eel course.',
      anecdotes: [
        { text: '"This dish allows you to fully enjoy the natural deliciousness of the eel without any sauce. The skin, grilled over high heat with charcoal and straw, was fragrant." — October 2026, dinner course.', source: R + 'B537285118/' },
        { text: '"Even if you order a large portion, the price remains under JPY 4,000 for one eel." — October 2026, lunch.', source: R + 'B537607401/' },
        { text: '"Despite being a high-end evening course, it’s a pleasant surprise that there are no service or cover charges." — October 2026.', source: R + 'B538001394/' },
      ],
      japanese_sources_summary: '公式サイト (sawaichi.jp): 澤いち SAWAICHI GROUP、六本木の日本料理、店舗は澤いち 本店、炭屋、鰻いち黒船。食べログ (店舗会員): 鰻いち黒船、港区六本木3-9-12 源氏ビル1F、日比谷線六本木駅から徒歩3分、毎日11:30〜15:00 (L.O.14:30)・17:00〜21:00、祝日休み (日祝も営業の場合あり、Instagramで案内)、サービス料・チャージなし、14席、禁煙、カード・PayPay可、英語・中国語・韓国語のメニュー、テイクアウトとデリバリー、2025年4月15日オープン。炭と藁で焼き、鰻の骨で炊いた自家製のたれ。予約制のディナーコース10品6,600円。口コミ(2026年10月): 前菜4種、Uzaku、肝、うなぎの卵とじ、白焼きと舞茸、鰻の鍋、ミニひつまぶし、ひつまぶし2,800円、予約と飛び込みの客で満席。',
      confidence: 'medium', sources: [TB, SITE, R + 'B537262398/', R + 'B537285118/', R + 'B537304677/', R + 'B537498010/', R + 'B537607401/', R + 'B537766164/', R + 'B538001394/', R + 'B538160700/', R + 'B538198613/', R + 'B538426989/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Menu in English, Chinese and Korean, with photos (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-9-12 源氏ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and group site; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB} (35.663957, 139.734176); GSI 東京都港区六本木三丁目9番 (lot) 28m; Roppongi Kinme Sushi (tokyo_roppongi_kinme_sushi, 3-9-4) is 13 m away in another building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538426989/'],
    price_note: 'Course price from Tabelog (tax included); hitsumabushi price from an October 2026 review. No service or cover charge.', last_checked: TODAY, items: [
      it('', '', 'Dinner eel course, 10 dishes (reservation only)', '¥6,600', 'Course', 'ask', 'no', 'Tabelog "most popular".', 'una_course'),
      it('', '', 'Hitsumabushi', '¥2,800', 'Eel', 'no', 'no', 'October 2026 review.', 'hitsumabushi'),
    ] }, {
    cuisine: '炭と藁で焼き、鰻の骨で炊いた自家製のたれで仕上げる鰻 (食べログの店の紹介)・うな重、ひつまぶし (2,800円、2026年10月)、鰻の玉子焼き・予約制のディナーコース10品6,600円 (食べログ、税込み): 2026年10月は前菜4種 (玉子豆腐、Uzaku、肝の煮物、枝豆または銀杏)、とろみのある玉子あんの Unaretsu、半身の白焼きと焼き舞茸、ごぼう・ねぎ・三つ葉・焼き豆腐の鰻の鍋、三通りで食べるミニひつまぶし、季節の果物・日本酒、焼酎、サワー',
    neighborhood: '六本木3-9-12 源氏ビル1F。六本木駅から徒歩3分 (日比谷線)、5分 (大江戸線)',
    gf_detail: '要確認。グルテンフリーの説明はない。鰻の多くは鰻の骨で炊いた自家製のたれで焼き (食べログ)、鍋とひつまぶしには出汁を使う。白焼きはたれなしで、わさびで食べる (2026年10月)。',
    vegan_detail: 'ヴィーガン不可。鰻の店で、コースの前菜 (玉子豆腐、Uzaku、肝) や鍋も鰻と出汁が中心。',
    notes: '[鰻・六本木、炭と藁で焼く鰻] 六本木駅から数分の、木の内装の落ち着いた鰻の店。六本木の日本料理店「澤いち」のグループが2025年4月に開いた。鰻は炭で焼いてから藁で炙り、皮は香ばしくパリッと、鰻の骨で炊いた自家製のたれで仕上げる。昼はひつまぶしが2,800円 (2026年10月)、大盛りでも鰻一尾で4,000円を切る。夜の予約制の6,600円のコースは肝、Uzaku、玉子あんの鰻、たれなしの白焼き、鰻の鍋、出汁をかけて締めるミニひつまぶしと続き、2026年10月の客は六本木でこの値段は驚きと書いた。カウンターとテーブルの14席で、予約と飛び込みの客でにぎわう。サービス料なし。英語、中国語、韓国語のメニューあり。',
  });
}

// ================================================================ 鮨 とき
{
  const TB = 'https://tabelog.com/en/tokyo/A1307/A130701/13308789/'; const R = TB + 'dtlrvwlst/';
  const E = day(['18:00', '23:00']); const L = day(['11:30', '14:00'], ['18:00', '23:00']);
  put({
    id: 'tokyo_sushi_toki_roppongi', name: '鮨 とき (Sushi Toki)', category: 'OMNI',
    lat: 35.663848, lng: 139.734331, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking; the shop asks for food preferences and allergies at reservation, as same-day requests may not be possible (Tabelog). Nothing is called gluten-free; pieces are seasoned with soy sauce, homemade nori soy sauce, fish sauce or yuzu pepper, and a crab and shark-fin dish comes with fish noodles (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edomae sushi omakase.',
    hours_raw: 'Dinner Mon–Sat 18:00–23:00; lunch Wed–Sat 11:30–14:00; closed Sundays and public holidays (Tabelog). Reservation only; same-day bookings may not be possible; date changes cost 100% of the course on the day, 50% the day before. 8 seats at an L-shaped counter in a semi-basement; private hire up to 20. Non-smoking. Cards (incl. UnionPay); no e-money or QR. School-age children who eat the same menu are welcome. Opened 17 April 2025 (Tabelog).',
    hours: { 0: E, 1: E, 2: L, 3: L, 4: L, 5: L }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Roppongi 3-9-4, ロイヤルビル B1F, up a small alley — 1 min from Roppongi Stn exit 5 (Roppongi Kinme Sushi is listed in the same basement)',
    cuisine: 'Edomae sushi omakase with aged fish (Tabelog shop text; 2026 reviews) · OMAKASE course ¥18,700; seasonal short course, two groups a day, ¥12,100; chef\'s omakase for newcomers ¥7,700; lunch of 9 nigiri and miso soup ¥4,400, Wed–Sat (Tabelog, tax included) · signature "Toki hand roll" of crab, sea urchin and tobiko (Akita tobiko, per an August 2026 diner) · in summer 2026: first bonito with homemade nori soy sauce, a gari roll of Donchicchi horse mackerel from Shimane, isaki aged 5–8 days, shima-aji aged 4 days to a week, kohada cured 2–6 days, marinated tuna, aori-ika with fish sauce and sudachi, kinmedai with yuzu pepper, ebodai, kombu-cured sweet shrimp, seared botan shrimp, purple sea urchin, otoro, anago, kanpyo roll, miso soup; a crab and shark-fin sauce over fish noodles, finished with rice; grilled eggplant with mozuku · red-vinegar shari (July 2026) · sake and shochu',
    website: null, gmaps: gm('鮨 とき 六本木3-9-4'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Roppongi, an 8-seat omakase built on aged fish] In a semi-basement off a small alley a minute from Roppongi Station, an eight-seat L-shaped counter where Chef Yasuhiko (as one reviewer names the chef) ages and cures each fish to its own timetable — isaki for a week, kohada for up to six days, shima-aji for four. The ¥18,700 omakase opens with the signature hand roll of crab, sea urchin and tobiko and mixes nigiri on red-vinegar rice with small dishes, including a crab and shark-fin sauce over fish noodles that you finish by stirring in rice. A ¥7,700 course is aimed at first-timers and younger diners, and lunch from Wednesday to Saturday is 9 nigiri with miso soup for ¥4,400. Diners in 2026 found the chef warm and chatty — a Doraemon fan, with figures hidden around the room. Reservations only. Roppongi Kinme Sushi is listed in the same basement.",
    chef_bio: { chef_name: 'Yasuhiko (given name only, as written by one reviewer in March and July 2026)', roles: ['Chef at the counter (reviews: "Chef Yasuhiko")'], origin: null,
      background: 'Reviewers in 2026 describe a young chef who ages and cures fish carefully; an August 2026 diner heard the chef came from a restaurant that created hand rolls, and that the chef\'s mother is from Akita, where the tobiko comes from. July 2026 reviewers mention stories from the chef\'s training days and a love of Doraemon. Opened 17 April 2025 (Tabelog). The sources read do not say who owns it.',
      philosophy: 'A course for those who find sushi restaurants intimidating, so the younger generation can feel closer to sushi (Tabelog, chef\'s omakase).', specialty: 'Aged nigiri; the Toki hand roll; crab and shark-fin fish noodles.',
      anecdotes: [
        { text: '"The Isaki (aged for 1 week) and Shima Aji (aged for 4 days) revealed deep umami and rich fat developed through time." — July 2026, second visit, ¥18,700 omakase.', source: R + 'B525152664/' },
        { text: '"There are also hidden Doraemon figures in the restaurant, making it fun to search for them." — July 2026.', source: R + 'B532825142/' },
        { text: '"The chef suggested adding some rice to the leftover sauce, and it was delightful." — July 2026, crab and shark fin with fish noodles.', source: R + 'B533341535/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 鮨 とき、港区六本木3-9-4 ロイヤルビルB1F、六本木駅5番出口から徒歩1分、月〜土18:00〜23:00、水〜土11:30〜14:00、日祝休み、完全予約制、当日の日程変更は100%、前日は50%、カウンター8席、禁煙、カード可、2025年4月17日オープン。コース: OMAKASE 18,700円、季節のおまかせショートコース (1日2組) 12,100円、大将のおまかせ7,700円、ランチは握り9貫と味噌汁4,400円。アレルギーは予約時に。口コミ(2026年3月〜8月): Yasuhiko 大将、熟成と仕込みの握り、蟹・雲丹・とびこの手巻き (Toki hand roll)、Shimane の Donchicchi 鯵のガリ巻き、蟹とふかひれの魚の麺、赤酢のシャリ、ドラえもん好き。',
      confidence: 'medium', sources: [TB, R + 'B525152664/', R + 'B532187505/', R + 'B532347139/', R + 'B532523190/', R + 'B532618097/', R + 'B532618108/', R + 'B532790032/', R + 'B532825142/', R + 'B533054414/', R + 'B533341535/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase only, booked in advance; no English service is listed on Tabelog.' },
    safety: { ...SAFETY0, staff_allergy_handling: [{ text: 'Tabelog: "Please inform us of any food preferences or allergies when making your reservation, as we may not be able to accommodate requests on the day of your visit."', source: TB }] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都港区六本木3-9-4 ロイヤルビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with current lunch and courses; reviews dated through August 2026. Roppongi Kinme Sushi (opened November 2025) is listed at the same B1F; both have 2026 reviews.' },
    pin_source: `Tabelog ${TB} (35.663848, 139.734243), the same point as Roppongi Kinme Sushi (tokyo_roppongi_kinme_sushi, address_ja "東京都港区六本木3-9-4 六本木ロイヤルビル B1F", 35.66385, 139.734242), so offset 8 m east; GSI 東京都港区六本木三丁目9番 (lot) 37m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course and lunch prices from Tabelog (tax included; read November 2026).', last_checked: TODAY, items: [
      it('', '', 'OMAKASE course', '¥18,700', 'Course', 'ask', 'no', 'Tabelog.', 'omakase'),
      it('', '', 'Seasonal omakase short course (two groups a day)', '¥12,100', 'Course', 'ask', 'no', 'Tabelog.', 'short_course'),
      it('', '', 'Chef\'s omakase for first-timers', '¥7,700', 'Course', 'ask', 'no', 'Tabelog.', 'chef_omakase'),
      it('', '', 'Lunch: 9 nigiri and miso soup (Wed–Sat)', '¥4,400', 'Lunch', 'ask', 'no', 'Tabelog shop text.', 'lunch'),
    ] }, {
    cuisine: '熟成させた魚の江戸前鮨のおまかせ (食べログの店の紹介、2026年の口コミ)・OMAKASEコース18,700円、季節のおまかせショートコース (1日2組) 12,100円、初めての人向けの大将のおまかせ7,700円、ランチは握り9貫と味噌汁4,400円、水〜土 (食べログ、税込み)・名物は蟹、雲丹、とびこの手巻き (Toki hand roll)(とびこは Akita のもの、2026年8月の客)・2026年夏: 自家製の海苔醤油の初鰹、Shimane の Donchicchi 鯵のガリ巻き、5〜8日熟成のいさき、4日〜1週間の縞鯵、2〜6日締めた小肌、鮪の漬け、魚醤とすだちのアオリイカ、柚子胡椒の金目鯛、えぼ鯛、昆布締めの甘海老、炙りのぼたん海老、紫雲丹、大トロ、穴子、かんぴょう巻き、味噌汁。蟹とふかひれのあんを魚の麺にかけ、最後にご飯を入れる一品、焼き茄子ともずく・赤酢のシャリ (2026年7月)・日本酒と焼酎',
    neighborhood: '六本木3-9-4 ロイヤルビルB1F、小さな路地の奥。六本木駅5番出口から徒歩1分 (同じ地下に六本木きんめ鮨も)',
    gf_detail: '予約時に要確認。食べ物の好みやアレルギーは予約時に伝えるよう店は求めている (当日は対応できない場合あり、食べログ)。グルテンフリーの説明はない。握りは醤油、自家製の海苔醤油、魚醤、柚子胡椒で味付けし、蟹とふかひれの料理には魚の麺 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。江戸前鮨のおまかせ。',
    notes: '[鮨・六本木、熟成の魚のカウンター8席のおまかせ] 六本木駅から1分、小さな路地の奥の半地下にあるL字カウンター8席。ある口コミが Yasuhiko 大将と書く料理人が、いさきは1週間、小肌は最大6日、縞鯵は4日と、魚ごとに熟成や締めの日数を変える。18,700円のおまかせは蟹、雲丹、とびこの名物の手巻きに始まり、赤酢のシャリの握りと小皿が交互に出る。魚の麺に蟹とふかひれのあんをかけ、最後にご飯を混ぜる一品も。7,700円のコースは初めての人や若い世代向けで、水〜土のランチは握り9貫と味噌汁で4,400円。2026年の客は大将の温かく話しやすい人柄をほめ、ドラえもん好きで店内に人形が隠れているという。完全予約制。同じ地下に六本木きんめ鮨もある。',
  });
}

save();
