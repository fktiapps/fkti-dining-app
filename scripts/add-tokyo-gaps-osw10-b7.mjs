// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles) — lane osw10 (circle yotsuya), batch 7.
//   + ただ野 Tadano (20-seat charcoal yakitori in a back lane, about 36 years old; set courses; described as family-run)
//   + とんかつ & 焼鳥 An 四谷 Tonkatsu & Yakitori An Yotsuya (51-seat basement of Hotel Keihan Tokyo Yotsuya; tonkatsu, yakitori,
//     pork shabu-shabu in soba broth)
//   + 四ッ谷haraku-chi Yotsuya haraku-chi (20-seat Fukushima izakaya: Date chicken, mehikari, Fukushima sake)
//   + 三谷 Mitani (6-seat sushi counter with wine and sake pairings; Tabelog Gold 2019–2024 and 2026; no new reservations)
//   Chain check. Tadano, haraku-chi, Mitani: one shop each. An: a second "とんかつ & 焼鳥 An" in Akasaka-mitsuke appears on
//   一休 (search result, not opened); two shops, neither in data; kept. No skips: the first four non-data entries.
//   None is in data/tokyo.json (grep by name, Tabelog id and address). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw10-7');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ただ野
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13000887/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:30', '22:00']);
  put({
    id: 'tokyo_tadano_yakitori_yotsuya', name: 'ただ野 (Tadano)', category: 'OMNI',
    lat: 35.686139, lng: 139.727589, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. The skewers come in a set course and include miso-marinated thigh; the finishes are soboro rice with a ginger-soy seasoning or grilled rice balls in chicken broth. Nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken house; the courses are skewers, chicken broth and minced-chicken rice.',
    hours_raw: 'Mon–Sat 17:30–22:00; closed Sunday, holidays and every other Saturday; hours may change (Tabelog). Reservations taken. Courses only, plus a few chicken dishes à la carte (April 2023). 20 seats: a counter, a table for two and one for four; whole-shop hire possible; smoking allowed (Tabelog; April 2023). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). Spend about ¥6,000–10,000 a head with sake (2025–26 reviews).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-18, フランセビル 1F, round the back — a quiet lane one street behind Shinjuku-dōri, 3 min from Yotsuya Stn (Marunouchi, Namboku), 4 min from JR',
    cuisine: 'Charcoal yakitori by set course, each skewer served straight off the grill (2025 reviews) · the 10-skewer course (renamed from the "yakitori course", July 2026) with appetizer, vegetable salad and chicken broth; a meal course of 6 skewers with pickles and soboro rice; a drinker\'s course of 6 skewers with a stew and chicken broth — ¥3,900, ¥3,500 and ¥3,300 in February 2023; you can stop the course midway (2021 and 2023 reviews) · skewers such as wasabi breast, liver, gizzard, miso-marinated thigh, quail egg, negima and green-onion rolls, tsukune, skin, bonjiri, dango · finishes: soboro rice (a small bowl comes as a bonus with the 10-skewer course), or grilled rice balls in rich chicken broth · Japanese sake picked from the one-sho bottles in the fridge by the door (Tsuru no Koe, Nabeshima, Gakki Masamune named), shochu and sours',
    website: null, gmaps: gm('ただ野 四谷 焼鳥'), menu_url: null,
    notes: "[Yakitori · Yotsuya, a long-running charcoal counter in a back lane] A small, homely yakitori shop at the back of a building one street behind Shinjuku-dōri, run for decades — a January 2025 regular of more than 20 years says it opened 36 years ago — by a master whom diners praise for both the grilling and the welcome. Everything comes as a course of six or ten skewers, each served the moment it leaves the charcoal, from wasabi chicken breast and liver to the soft-boiled quail egg diners rave about; finish with soboro rice or grilled rice balls in chicken broth. Pick your sake from the one-sho bottles in the fridge by the door. Cramped but friendly: the closeness makes it easy to talk to other guests (May 2024), and a solo guest drank at the counter in September 2026. Closed Sundays and alternate Saturdays; smoking is allowed.",
    chef_bio: { chef_name: null, roles: [], origin: 'About 36 years old per a January 2025 regular ("A popular yakitori restaurant established 36 years ago").',
      background: 'No source names the owner. "Warm and welcoming family-run hospitality" (title of a February 2023 review); "the ambiance of the restaurant, along with the owner\'s character and demeanor, is splendid" (August 2022); "At the counter, two staff members are working efficiently" (April 2023); a January 2025 diner has come "for over 20 years… for the master\'s delicious grilled chicken". The website listed on Tabelog (428tadano.com) did not respond on 2026-11-02.',
      philosophy: null, specialty: 'Yakitori course; quail egg; soboro rice.',
      anecdotes: [
        { text: '"I chose the \'10 Skewers Course,\' which has been renamed from the previous \'Yakitori Course\'… for the finish, I ordered the \'Soboro Rice\' in a small bowl." — July 2026, a fifth visit.', source: R + 'B442668145/' },
        { text: '"I was set on the Yakitori Course, but regular customers said the Drinker\'s Course is more than enough… So, I compromised a bit and chose the Meal Course instead." — February 2023.', source: R + 'B461473579/' },
        { text: '"You can choose from a selection of one-sho bottles of Japanese sake from the refrigerator near the entrance." — September 2026.', source: R + 'B536974396/' },
      ],
      japanese_sources_summary: '食べログ: ただ野、居酒屋・焼き鳥、四谷1-18 フランセビル1F 裏側、丸ノ内線・南北線四ツ谷駅から徒歩3分、JR4分、月〜土17:30〜22:00、日曜・祝日休み、土曜は隔週休み、20席、貸切可、喫煙可、カード可。口コミ(2021年12月〜2026年9月): 創業36年、20年以上通う常連、家族経営の温かいもてなし、10本の串のコース (旧「焼き鳥コース」)、食事コース、呑兵衛コース (2023年2月に3,900円・3,500円・3,300円)、うずらの卵、そぼろご飯、焼きおにぎりと鶏スープ、冷蔵庫の一升瓶から選ぶ日本酒、カウンターでひとり飲みも。',
      confidence: 'medium', sources: [TB, R + 'B442668145/', R + 'B451187013/', R + 'B452644098/', R + 'B456248557/', R + 'B461473579/', R + 'B467611531/', R + 'B500501872/', R + 'B501018786/', R + 'B501314155/', R + 'B503228332/', R + 'B530936951/', R + 'B536974396/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses only, so little to order; pick sake from the fridge.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都新宿区四谷1-18 フランセビル 1F 裏側',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated July and September 2026.' },
    pin_source: `Tabelog ${TB} (35.686139, 139.727589); cross-checked: GSI 東京都新宿区四谷一丁目18番地 (lot) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B461473579/', R + 'B442668145/'],
    price_note: 'Course prices from a February 2023 review; likely changed since. Courses still offered in July 2026.', last_checked: TODAY, items: [
      it('', '', 'Yakitori course: appetizer, salad, chicken broth, 10 skewers (now "10 skewers course")', '¥3,900', 'Course', 'ask', 'no', 'February 2023 price; renamed by July 2026.', 'skewer_course_10'),
      it('', '', 'Meal course: appetizer, salad, pickles, soboro rice, 6 skewers', '¥3,500', 'Course', 'ask', 'no', 'February 2023 price.', 'meal_course'),
      it('', '', 'Drinker\'s course: appetizer, stew, chicken broth, 6 skewers', '¥3,300', 'Course', 'ask', 'no', 'February 2023 price.', 'nonbe_course'),
    ] }, {
    cuisine: 'コースで出す炭火の焼き鳥。串は焼き上がるたびに一本ずつ (2025年の口コミ)・10本の串のコース (2026年7月に「焼き鳥コース」から改名) は前菜、野菜サラダ、鶏スープ付き。6本に漬物とそぼろご飯の食事コース、6本に煮物と鶏スープの呑兵衛コース。2023年2月にはそれぞれ3,900円、3,500円、3,300円。途中で止めることもできる (2021年、2023年の口コミ)・串はわさびのささみ、レバー、砂肝、もも味噌焼き、うずらの卵、ねぎま、ねぎ巻き、つくね、皮、ぼんじり、だんごなど・締めはそぼろご飯 (10本のコースには小さな丼がおまけ) か、濃い鶏スープの焼きおにぎり・日本酒は入口の冷蔵庫の一升瓶から選ぶ (Tsuru no Koe、Nabeshima、Gakki Masamune など)。焼酎、サワー',
    neighborhood: '四谷1-18 フランセビル1F 裏側。新宿通りから一本入った静かな路地。四ツ谷駅 (丸ノ内線・南北線) から徒歩3分、JRから4分',
    gf_detail: '要確認。串はコースで出て、もも味噌焼きも。締めは生姜醤油味のそぼろご飯か鶏スープの焼きおにぎり。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。鶏の店で、コースは串、鶏スープ、鶏そぼろのご飯。',
    notes: '[焼き鳥・四谷、路地裏の長く続く炭火のカウンター] 新宿通りから一本入ったビルの裏手にある、小さく家庭的な焼き鳥屋。2025年1月に20年以上通うという常連によれば創業36年で、焼きの腕ももてなしも褒められる大将の店。すべて6本か10本の串のコースで、炭から上がったばかりの一本ずつ: わさびのささみやレバーから、客が絶賛する半熟のうずらの卵まで。締めはそぼろご飯か鶏スープの焼きおにぎり。日本酒は入口の冷蔵庫の一升瓶から選ぶ。狭いが和やかで、ほかの客とも話しやすく (2024年5月)、2026年9月にはカウンターでひとり飲む客も。日曜と隔週の土曜は休み、喫煙可。',
  });
}

// ================================================================ とんかつ & 焼鳥 An 四谷
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13292365/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_tonkatsu_yakitori_an_yotsuya', name: 'とんかつ & 焼鳥 An 四谷 (Tonkatsu & Yakitori An Yotsuya)', category: 'OMNI',
    lat: 35.686783, lng: 139.727538, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: breaded tonkatsu and fried dishes, soba and a soba-broth hot pot; nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The listing ticks "Vegetarian options", but the menu is pork, chicken and beef, and the shabu-shabu is in a soba dipping broth; no vegan dish is named.',
    hours_raw: 'Daily 11:30–15:00 (last order 14:30) and 17:00–23:00 (last order 22:00); New Year hours on the website (Tabelog). Reservations recommended at lunch too (full in September 2026); same-day evening bookings possible (September 2026). Frying takes time: a Sunday lunch cutlet took nearly 20 minutes (August 2026). 51 seats with counter, sofas and private rooms for up to 14; hire up to 42 seated or 70 standing; non-smoking, smoking at a nearby facility (Tabelog). Cards, e-money and QR including PayPay, Alipay and WeChat Pay (Tabelog). English menu and English-speaking staff; wheelchair accessible (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-24, ホテル京阪 東京四谷 B1F — 3 min from JR Yotsuya Stn (Yotsuya exit) or Exit 3 of the Marunouchi/Namboku Lines',
    cuisine: 'Hotel-basement tonkatsu and yakitori tavern: "Fritz" tonkatsu, charcoal skewers, sake and shochu from around Japan (Tabelog) · lunch: premium loin cutlet set ¥1,500 with pork soup, cabbage and pickles, large rice free; special loin cutlet set; tonkatsu and soba set (2026 reviews) · dinner courses, e.g. ¥6,000 with all-you-can-drink: three appetizers, two yakitori, a bite of tonkatsu, then the house pork shabu-shabu in soba dipping broth with unlimited ribbon-sliced daikon, green onion, mizuna or shungiku, soba to finish; one September 2026 version used Okinawan beef (2026 reviews) · yakitori such as tsukune, gizzard, heart',
    website: null, gmaps: gm('とんかつ & 焼鳥 An 四谷 ホテル京阪'), menu_url: null,
    notes: "[Tonkatsu · Yotsuya, a hotel-basement cutlet and yakitori room] In the basement of Hotel Keihan Tokyo Yotsuya, a stylish, high-ceilinged room with an Italian-looking counter that surprises people expecting a cutlet shop. A sign says it revives the tonkatsu of the former Akasaka Fritz, and one diner names the supervising chef as Motoshiro Saito. Lunch is a loin cutlet set from ¥1,500 with free large rice; dinner is courses for groups, built around a pork shabu-shabu cooked in soba broth with unlimited ribbon-sliced daikon and soba to finish. Opinions on the cutlet split: one regular finds it far better than a nearby specialist and another found it pink and juicy inside, while October 2026 diners found it ordinary, unevenly fried, or small and lukewarm, and one called the Fritz claim misleading. Friendly service, English menu, open every day.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'No source names the cooks. October 2026 reviews: a sign says "the famous tonkatsu restaurant \'Akasaka Fritz,\' which used to be at the Nagatacho Prudential Hotel, has reopened"; another diner writes it offers fried foods "under the supervision of Mr. Motoshiro Saito, who aimed to recreate the flavors of the former Fritz in Akasaka" and found the result fell short. A September 2026 diner calls Fritz "the predecessor of Pochi-ken". Tabelog: "Enjoy exquisite fritz tonkatsu, expertly grilled skewers, and a selection of sake and shochu from across the country"; private rooms and hire for up to 70 standing. A search shows another "とんかつ & 焼鳥 An" in Akasaka-mitsuke (一休 listing title; page not opened).',
      philosophy: null, specialty: 'Loin tonkatsu; pork shabu-shabu in soba broth.',
      anecdotes: [
        { text: '"The staff used to seem a bit cold, but recently they have been very friendly, explaining the sauce and serving warm tea at the end of the meal." — October 2026, a fourth visit.', source: R + 'B517962058/' },
        { text: '"I had the impression that it was a tonkatsu and yakitori restaurant, but it turned out to be completely different. The high ceiling and Italian-style counter created a wonderful atmosphere." — October 2026, ¥6,000 drinks course.', source: R + 'B536960779/' },
        { text: '"The cutlet was small, lukewarm, and lacked crispiness… to call this a recreation of Fritz is misleading." — October 2026, premium loin cutlet set.', source: R + 'B537629237/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): とんかつ & 焼鳥 An 四谷、とんかつ・焼き鳥・居酒屋、四谷1-24 ホテル京阪 東京四谷 B1F、JR四ツ谷駅四ツ谷口・地下鉄3番出口から徒歩3分、毎日11:30〜15:00 (L.O.14:30)・17:00〜23:00 (L.O.22:00)、51席、個室14名まで、貸切は着席42名・立食70名、禁煙、カード・電子マネー・QR 可、英語メニュー、車椅子可、フリッツのとんかつ、職人の焼く串、全国の日本酒と焼酎。口コミ(2026年4月〜10月): 特上ロースかつ定食1,500円、ご飯大盛り無料、とんかつとそばのセット、6,000円の飲み放題コース、そばつゆの豚しゃぶ、ピーラー大根食べ放題、締めのそば、Akasaka Fritz の復活という看板、監修は Motoshiro Saito という声、揚げにむらがありぬるかったという声も。',
      confidence: 'medium', sources: [TB, R + 'B517962058/', R + 'B534183466/', R + 'B534649730/', R + 'B536292771/', R + 'B536452996/', R + 'B536647741/', R + 'B536889054/', R + 'B536960779/', R + 'B537094882/', R + 'B537315233/', R + 'B537629237/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists an English menu and English-speaking staff; hotel restaurant.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-24 ホテル京阪 東京四谷 B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.686783, 139.727538); cross-checked: GSI 東京都新宿区四谷一丁目24番地 (lot) 10m. Gyoza Sakaba (tokyo_gyoza_sakaba_yotsuya, address_ja "東京都新宿区四谷1-19 アーバン四谷ビル B1F〜1F") is 23 m away in a different building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536889054/', R + 'B536960779/'],
    price_note: 'Prices from October 2026 reviews; Tabelog menu not read.', last_checked: TODAY, items: [
      it('', '', 'Premium loin cutlet set (lunch)', '¥1,500', 'Lunch', 'no', 'no', 'October 2026 review.', 'loin_katsu_set'),
      it('', '', 'Dinner course with all-you-can-drink (appetizers, yakitori, tonkatsu, pork shabu-shabu in soba broth, soba)', '¥6,000', 'Course', 'no', 'no', 'October 2026 review.', 'course_6000'),
    ] }, {
    cuisine: 'ホテルの地下のとんかつと焼き鳥の酒場: 「フリッツ」のとんかつ、炭火の串、全国の日本酒と焼酎 (食べログ)・昼: 特上ロースかつ定食1,500円 (豚汁、キャベツ、漬物、ご飯大盛り無料)、特ロースかつ定食、とんかつとそばのセット (2026年の口コミ)・夜はコース。たとえば飲み放題付き6,000円: 前菜3品、焼き鳥2本、とんかつひと口、そして名物のそばつゆの豚しゃぶ。ピーラーで薄く切った大根は食べ放題、ねぎ、水菜や春菊、締めはそば。2026年9月には Okinawa の牛のしゃぶしゃぶも (2026年の口コミ)・焼き鳥はつくね、砂肝、ハツなど',
    neighborhood: '四谷1-24 ホテル京阪 東京四谷 B1F。JR四ツ谷駅四ツ谷口、丸ノ内線・南北線3番出口から徒歩3分',
    gf_detail: 'グルテンフリーではない。衣のとんかつと揚げ物、そば、そばつゆの鍋。グルテンフリーの説明はない。',
    vegan_detail: '要確認。食べログにはベジタリアン対応の印があるが、メニューは豚、鶏、牛で、しゃぶしゃぶもそばつゆ。ヴィーガンの料理名はない。',
    notes: '[とんかつ・四谷、ホテルの地下のかつと焼き鳥] ホテル京阪 東京四谷の地下、天井の高いおしゃれな店内にイタリアンのようなカウンター。とんかつ屋を想像して来た人は驚く。看板には元の Akasaka Fritz のとんかつの復活とあり、監修は Motoshiro Saito という客の声も。昼は1,500円からのロースかつ定食でご飯の大盛りは無料。夜はグループ向けのコースが中心で、そばつゆで食べる豚しゃぶに薄切りの大根が食べ放題、締めはそば。かつの評価は分かれ、近くの専門店よりずっといいという常連や、中はピンクでジューシーという客がいる一方、2026年10月には普通、揚げむらがある、小さくてぬるいという声もあり、フリッツの再現というのは言い過ぎだと書いた人も。接客は親切で英語のメニューもあり、毎日営業。',
  });
}

// ================================================================ 四ッ谷haraku-chi
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13231443/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'tokyo_yotsuya_haraku_chi', name: '四ッ谷haraku-chi (Yotsuya haraku-chi)', category: 'OMNI',
    lat: 35.685432, lng: 139.727577, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Fried mehikari and Date chicken kara-age, gyoza and soba are wheat-based, and the horse sashimi comes with miso; nothing gluten-free is described.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Edamame with salt koji appears, but the menu centres on fish, Date chicken and horse, and the appetizer one September 2026 diner received was anglerfish soup.',
    hours_raw: 'Mon–Sat 18:00 to 22:00 last order; closing days not fixed (Tabelog). Reservations recommended on weekdays, which get busy (2024–25 reviews); some dishes sell out (September 2026). 20 seats with a counter; non-smoking; whole-shop hire up to 20; children welcome (Tabelog). Cards (VISA, Master, JCB, AMEX), Suica, iD and PayPay (Tabelog). In a residential lane, about 7 minutes from Yotsuya Station per Tabelog.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-11, BELL ALLEY 1F, down a back lane in a residential pocket — about 7 min from Yotsuya Stn (JR, Marunouchi, Namboku)',
    cuisine: 'Fukushima izakaya: local dishes, Fukushima fish, Date chicken, vegetables and a wide range of Fukushima sake (2024–26 reviews) · fried mehikari (eat the bones too), ika-ninjin, Fukushima-style gyoza, Date chicken steak and kara-age, chicken prosciutto, horse sashimi with spicy or red miso, itawasa and kamaboko, anglerfish soup and fried anglerfish, edamame with salt koji; seasonal specials on a blackboard · finish with soba in a Date chicken meatball dipping soup · Fukushima sake by the glass, poured into a cup you choose, with tasting notes (February 2026); prices on the high side per two diners',
    website: null, gmaps: gm('四ッ谷haraku-chi'), menu_url: null,
    notes: "[Izakaya · Yotsuya, a taste of Fukushima in a back lane] A clean, beige 20-seat izakaya hidden in a residential lane behind Yotsuya Station, run by an owner from Date in Fukushima; the name, one diner explains, is Fukushima dialect for a full stomach. The menu is Fukushima's: crisp fried mehikari you eat bones and all, ika-ninjin of squid and carrot, Fukushima gyoza, tender Date chicken as steak, kara-age or prosciutto, horse sashimi with spicy miso, and to finish, soba in a Date chicken meatball soup. A long list of Fukushima sake comes with tasting notes and a choice of cups. People from Fukushima gather here and chat with the owner. Not everyone felt welcome: a February 2025 diner who arrived an hour before closing got a cold reception, found the sake overpriced and an item left on the table unsanitary. Book ahead on weekdays.",
    chef_bio: { chef_name: null, roles: [], origin: 'The owner is from Date City, Fukushima ("The owner hails from Date City, Fukushima", March 2024).',
      background: 'No source names the owner. "There were people from Fukushima in the restaurant who had friendly conversations with the owner" (January 2024); "This restaurant is run by someone from Fukushima" (February 2025); "The name \'Haraku-chi\' means \'full stomach\' in the Fukushima dialect" (September 2026).',
      philosophy: null, specialty: 'Fried mehikari; Date chicken; Fukushima sake.',
      anecdotes: [
        { text: '"The fried Mejikari from Fukushima is absolutely delicious… you can eat even the bones—what a delight! Honestly, it\'s a beer thief." — August 2025.', source: R + 'B513093318/' },
        { text: '"First, I was amazed by the appetizer: anglerfish soup!" — September 2026, brought by locals from Fukushima.', source: R + 'B536533360/' },
        { text: '"I received a cold reception, possibly because I arrived an hour before closing." — February 2025.', source: R + 'B501984189/' },
      ],
      japanese_sources_summary: '食べログ: 四ッ谷haraku-chi、居酒屋、四谷1-11 BELL ALLEY 1F、四ツ谷駅から徒歩7分、月〜土18:00〜22:00 (L.O.)、不定休、20席、禁煙、貸切20名まで、子ども可、カード・電子マネー・PayPay 可。口コミ(2024年1月〜2026年9月): Fukushima の料理と日本酒、店主は Date 市の出身、店名はFukushima の方言で満腹の意味という声、めひかりのkara-age、いかにんじん、Fukushima の gyoza、Date 鶏のチキンステーキ、馬刺しと辛味噌、あんこうの汁、締めは Date 鶏のつくねのつけ汁のそば、選べるお猪口、平日は混む、2025年2月には冷たい対応だったという声。',
      confidence: 'medium', sources: [TB, R + 'B465141994/', R + 'B478487546/', R + 'B479549592/', R + 'B480114452/', R + 'B481951033/', R + 'B498847841/', R + 'B501984189/', R + 'B502663144/', R + 'B513093318/', R + 'B523541950/', R + 'B535278063/', R + 'B536533360/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Blackboard specials and sake tasting notes in Japanese; counter seats for solo diners.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-11 BELL ALLEY 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated February and September 2026.' },
    pin_source: `Tabelog ${TB} (35.685432, 139.727577); cross-checked: GSI 東京都新宿区四谷一丁目11番地 (lot) 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B536533360/', R + 'B480114452/'],
    price_note: 'No prices found; dishes from 2024–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Fried mehikari', '', 'Fried', 'no', 'no', '2024–26 reviews.', 'mehikari'),
      it('', '', 'Date chicken steak', '', 'Mains', 'ask', 'no', '2024–25 reviews.', 'date_chicken'),
      it('', '', 'Soba with Date chicken meatball dipping soup', '', 'Finish', 'ask', 'no', 'February 2024 and September 2026 reviews.', 'tsukune_soba'),
    ] }, {
    cuisine: 'Fukushima の居酒屋: 郷土料理、Fukushima の魚、Date 鶏、野菜、Fukushima の日本酒をたっぷり (2024〜26年の口コミ)・骨まで食べられるめひかりのkara-age、いかにんじん、Fukushima の gyoza、Date 鶏のチキンステーキやkara-age、鶏の生ハム、辛味噌や赤味噌の馬刺し、板わさとかまぼこ、あんこうの汁とあんこうのkara-age、塩麹の枝豆。黒板には季節のおすすめ・締めは Date 鶏のつくねのつけ汁のそば・Fukushima の日本酒をグラスで。お猪口を選べ、味の説明付き (2026年2月)。値段は高めという声が2件',
    neighborhood: '四谷1-11 BELL ALLEY 1F、住宅街の路地の奥。四ツ谷駅 (JR、丸ノ内線、南北線) から徒歩7分ほど',
    gf_detail: '要確認。めひかりや Date 鶏のkara-age、gyoza、そばは小麦を使い、馬刺しには味噌。グルテンフリーの説明はない。',
    vegan_detail: '要確認。塩麹の枝豆もあるが、メニューは魚、Date 鶏、馬が中心で、2026年9月の客のお通しはあんこうの汁だった。',
    notes: '[居酒屋・四谷、路地裏で味わうFukushima ] 四ツ谷駅の裏、住宅街の路地に隠れた清潔なベージュの20席の居酒屋。店主はFukushima 県 Date 市の出身で、店名はFukushima の方言で満腹の意味だと説明する客も。料理はFukushima のもの: 骨ごと食べるカリッとしためひかりのkara-age、いかと人参のいかにんじん、Fukushima の gyoza、ステーキやkara-ageや生ハムにしたやわらかい Date 鶏、辛味噌の馬刺し、締めは Date 鶏のつくねのつけ汁のそば。Fukushima の日本酒は味の説明付きで、お猪口も選べる。Fukushima の人が集まって店主と話している。歓迎されたと感じなかった人もいて、2025年2月に閉店1時間前に来た客は対応が冷たく、日本酒が高く、テーブルに置き忘れの物があって不衛生だったと書いている。平日は予約を。',
  });
}

// ================================================================ 三谷
{
  const TB = 'https://tabelog.com/en/tokyo/A1309/A130902/13042204/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:30']);
  put({
    id: 'tokyo_sushi_mitani_yotsuya', name: '三谷 (Mitani)', category: 'MOM_AND_POP',
    lat: 35.687544, lng: 139.727882, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask through the person who books: the omakase uses soy-based seasonings (e.g. dashi soy sauce with the uni) and includes fried dishes (fried kuro-mutsu, fried abalone, hairy crab croquette); nothing gluten-free is described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase with dashi and caviar.',
    hours_raw: 'Wed–Sun 18:00–22:30 (last order 22:00); closed Monday and Tuesday; no lunch (Tabelog). Booking: reservation only and no new reservations accepted (Tabelog); diners get in through regulars\' invitations or rebook a year or two ahead (2024–26 reviews). 6 counter seats, all starting together; whole-counter hire for up to 6 (Tabelog; July 2026). Spend about ¥60,000–100,000+ per head with the pairing; one guest who switched the pairing to champagne paid ¥300,000 (September 2026). Non-alcoholic tea pairing on request (July 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog).',
    hours: { 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Yotsuya 1-22-1 — 4 min from JR Yotsuya Stn, 5 min from the Marunouchi/Namboku Lines',
    cuisine: 'Omakase of appetizers then nigiri, each paired with a drink chosen for that piece: Burgundy-led wines, champagne, rare sake such as Juyondai, or cold-brewed Yame teas (2024–26 reviews) · July–October 2026 courses included Yoichi bafun uni with kuzu and dashi soy sauce, Awaji sea bream with shade-grown Shizuoka wasabi, Funka Bay botan shrimp, tuna sliced thin like prosciutto with Nakatsugawa caviar or a salmon-roe egg sauce, fried kuro-mutsu, grilled akamutsu, hairy crab croquette, kohada from off Haneda, then about 18–20 pieces of nigiri ending with anago, salt and sweet sauce, and Ariake nori · rice cooked several times with the salt adjusted to each topping (July 2026); Edo Kiriko plates (October 2026)',
    website: null, gmaps: gm('三谷 四谷 鮨'), menu_url: null,
    notes: "[Sushi · Yotsuya, the six-seat counter with no new bookings] Tabelog Gold seven times (2019–2024 and 2026), a six-seat wooden counter a few minutes from Yotsuya Station where chef Mitani serves an omakase that diners describe as a pairing performance as much as a sushi meal: each appetizer and every few pieces of nigiri arrive with a drink chosen for them, from Burgundy and old champagne to rare sake or cold-brewed Yame tea, and the rice is reseasoned for each topping. Ingredients are named by their fisherman or maker, such as Awaji sea bream, Yoichi uni, Nakatsugawa caviar and Ariake nori, and the course runs to about 25 servings ending in anago. Diners praise the chef's warm smile and the hospitality of the floor staff. It takes no new reservations: seats go to regulars, who often rebook a year or two ahead, and their guests. Expect ¥60,000 to well over ¥100,000 a head.",
    chef_bio: { chef_name: 'Mitani', roles: ['Chef (reviews: "the chef, Mr. Mitani"; "I greeted the lively chef Mitani")'], origin: null,
      background: 'Tabelog: Mitani (三谷, ミタニ); Tabelog Award Silver 2017, 2018 and 2025, Gold 2019–2024 and 2026; Sushi TOKYO "Tabelog 100" 2021, 2022, 2025; reservation only, no new reservations. Reviews: "The chef, who tells a story of gratitude through sushi after overcoming various challenges, along with the floor staff, provides remarkable hospitality" (July 2026); "The chef\'s warm smile… was also fantastic" (October 2026). No source gives the chef\'s given name or the kanji of the chef\'s name.',
      philosophy: null, specialty: 'Sushi with drink pairings; anago to finish.',
      anecdotes: [
        { text: '"After a two-year wait, I finally had the chance to visit again… We enjoyed my favorite, Chateau d\'Yquem, and concluded with a final course of 20 pieces of anago (sea eel) served with two types: salt and sweet sauce." — September 2026.', source: R + 'B495790713/' },
        { text: '"On this day, I requested a non-alcoholic pairing and enjoyed three types of cold-brewed Yame tea." — July 2026.', source: R + 'B532992982/' },
        { text: '"Since I can\'t drink those, they kindly switched everything to champagne for me. The cost was JPY 300,000 per person." — September 2026.', source: R + 'B535948450/' },
      ],
      japanese_sources_summary: '食べログ: 三谷 (ミタニ)、寿司、四谷1-22-1、JR四ツ谷駅から徒歩4分、丸ノ内線・南北線5分、水〜日18:00〜22:30 (L.O.22:00)、月火休み、昼の営業なし、完全予約制、新規の予約は受け付けていない、6席 (カウンターのみ)、貸切6名まで、禁煙、カード可、食べログアワード Silver 2017・2018・2025、Gold 2019〜2024・2026、寿司 TOKYO 百名店2021・2022・2025。口コミ(2024年11月〜2026年10月): 一品ごとのワインや日本酒のペアリング、Yame の水出し茶のノンアルコールのペアリング、Yoichi のうに、Awaji の真鯛、Nakatsugawa のキャビア、締めの穴子、予約は1〜2年待ち、1人6万〜10万円以上。',
      confidence: 'medium', sources: [TB, R + 'B144787338/', R + 'B415291290/', R + 'B441155478/', R + 'B495790713/', R + 'B506869903/', R + 'B508658457/', R + 'B532596804/', R + 'B532992982/', R + 'B533620277/', R + 'B535948450/', R + 'B537498548/', R + 'B7967191/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase with pairing, everyone starts together; reachable only through a regular\'s booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都新宿区四谷1-22-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (Gold 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.687544, 139.727882); cross-checked: GSI 東京都新宿区四谷一丁目22番地 (lot) 31m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B415291290/', R + 'B495790713/', R + 'B535948450/'],
    price_note: 'No published menu; per-person totals with pairing from 2024–26 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase with drink pairing (per person, typical total)', '¥60,000–100,000+', 'Course', 'ask', 'no', '2024–26 reviews.', 'omakase_pairing'),
    ] }, {
    cuisine: '前菜から握りまでのおまかせで、一品ごとに合わせた飲み物: ブルゴーニュ中心のワイン、シャンパーニュ、Juyondai などの日本酒、Yame の水出し茶 (2024〜26年の口コミ)・2026年7〜10月のコース: Yoichi のバフンウニに葛と出汁醤油、Awaji の真鯛と Shizuoka の日陰で育ったわさび、Funka Bay のぼたん海老、生ハムのように薄く切った鮪に Nakatsugawa のキャビアやいくらの卵黄だれ、黒むつの揚げ物、焼いた赤むつ、毛蟹のコロッケ、Haneda 沖のこはだ、それから18〜20貫ほどの握り、締めは塩とつめの穴子、Ariake の海苔・シャリは何度も炊き、ネタごとに塩を調整 (2026年7月)。Edo Kiriko の器 (2026年10月)',
    neighborhood: '四谷1-22-1。JR四ツ谷駅から徒歩4分、丸ノ内線・南北線5分',
    gf_detail: '予約する人を通して要確認。おまかせには醤油ベースの味付け (うにの出汁醤油など) と揚げ物 (黒むつ、あわび、毛蟹のコロッケ) がある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない。出汁とキャビアも使う魚介のおまかせ。',
    notes: '[鮨・四谷、新規の予約を受けない6席のカウンター] 食べログのゴールドに7回 (2019〜2024年、2026年)。四ツ谷駅から数分の木のカウンター6席で、Mitani の大将が握るおまかせは、客いわく鮨の食事であると同時にペアリングの舞台。前菜一品ごと、握り数貫ごとに、そのために選んだブルゴーニュや古いシャンパーニュ、珍しい日本酒、Yame の水出し茶が出て、シャリはネタごとに塩を調整する。Awaji の真鯛、Yoichi のうに、Nakatsugawa のキャビア、Ariake の海苔と産地や作り手の名が並び、25品ほどで締めは穴子。大将の温かい笑顔とホールのもてなしも好評。新規の予約は受けておらず、席は1〜2年先まで予約を入れる常連とその連れのもの。1人6万円から10万円を大きく超える。',
  });
}

save();
