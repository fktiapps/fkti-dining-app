// Osaka sweep (2-mile circle around Dotonbori), batch 77 — mom-and-pop phase (all OMNI).
//   + 鮓 羽室 (six-seat alley sushi counter off Shinsaibashi-suji, opened 2015)
//   + みその (domestic young-chicken specialist beside Hōzenji)
//   + やきとり 陣 (six-seat back-alley yakitori in Souemoncho, open to 3 am)
//   + 一心法善寺 (ten-seat sushi counter by Mizukake Fudō)
//   + 焼肉P貴之助 (six-seat counter yakiniku where the master grills, next door to Hiromiya)
//   No source shows a lone owner, so mom_and_pop stays false throughout.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 77);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 鮓 羽室
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27092060/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_sushi_hamuro', name: '鮓 羽室 (Sushi Hamuro)', category: 'OMNI',
    lat: 34.670315, lng: 135.501026, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy sauce and simmered dishes throughout an omakase.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and seafood counter.',
    hours_raw: 'Mon–Sat 17:00–23:00 (L.O. 22:30); closed Sundays, open holidays, plus irregular days (Tabelog). Hard to reserve (January 2026). Cards accepted (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-6-19, down a narrow alley — 5 min from Shinsaibashi or Namba Stn',
    cuisine: 'Edo-style sushi and sushi kaiseki · omakase, with favorites added on request · seasonal fish: kohada, chutoro, tai, akagai, nodoguro, katsuo tataki · crab · firefly squid with wasabi greens · grilled clams · simmered sea bream · fugu milt in winter · ushiojiru to finish · sake picked by the chef · 6 counter seats',
    website: null, gmaps: gm('鮓 羽室 心斎橋筋'), menu_url: null,
    notes: "[Sushi · a six-seat alley counter off Shinsaibashi-suji] A six-seat sushi counter at the end of a narrow alley, where only the sign shows from the street. It's been open since 2015, and the owner has thirty years of experience. The meal is an omakase of seasonal fish, sushi and small dishes, and you can add favorites. Diners remember the kohada (one called it the best ever), sweet red sea urchin, nodoguro, katsuo tataki, crab, and winter fugu milt. It finishes with ushiojiru. The chef pairs sake to the food. The owner is gentle and the room calm, and regulars keep it full; reservations are hard to get. Courses are good value, drinks less so. Reviewers spent about ¥10,000–30,000.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Opened 31 March 2015 (Tabelog)', background: 'Owner with 30 years of experience (April 2024 review).', philosophy: null, specialty: 'Edo-style sushi omakase.',
      anecdotes: [
        { text: '"The crab, nodoguro (blackthroat sea perch), and katsuo (skipjack tuna) tataki were incredible… The kohada (gizzard shad) was the best I\'ve ever had." — September 2024.', source: R + 'B491499419/' },
        { text: '"The owner has a gentle demeanor, making it a comfortable place to enjoy a leisurely meal. I ordered the omakase and added a few of my favorite dishes." — December 2025.', source: R + 'B519110445/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 鮓 羽室、大阪市中央区心斎橋筋2-6-19、心斎橋駅4B出口・なんば駅14番出口から徒歩5分、月〜土17:00〜23:00(L.O.22:30)、日曜休み(祝日は営業)、不定休あり、カード可、6席、2015年3月31日開店。口コミ(2022年9月〜2026年5月): 常連の多い隠れ家、江戸前の鮨、赤うに、路地の奥に看板だけ、経験30年の主人、刺身の盛り合わせ、赤貝・中トロ・鯛、蟹・のどぐろ・鰹のたたき、大将が選ぶ日本酒、最高のこはだ、締めの潮汁、ホタルイカ、ソフトシェルクラブ、白魚、焼き蛤、鯛のあら炊き、トロとたくあん、小鯵、穏やかな主人、おまかせに好みを追加、鮨懐石、飲み物は高め、コースは割安、予約が取りにくい、蟹、ふぐの白子。',
      confidence: 'medium', sources: [TB, R + 'B491499419/', R + 'B519110445/', R + 'B483696963/', R + 'B504999309/', R + 'B520673219/', R + 'B215301837/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Six-seat counter with regulars; reservations needed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-6-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); newest review May 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目6番19号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B519110445/', R + 'B520673219/'],
    price_note: 'No prices captured; reviewers spent ¥10,000–29,999.', last_checked: TODAY, items: [
      it('', '', 'Omakase (sushi kaiseki)', '', 'Courses', 'no', 'no', 'December 2025–May 2026.', 'omakase'),
    ] }, {
    cuisine: '江戸前の鮨と鮨懐石・おまかせに好みを追加・旬の魚: こはだ、中トロ、鯛、赤貝、のどぐろ、鰹のたたき・蟹・ホタルイカ・焼き蛤・鯛のあら炊き・冬はふぐの白子・締めの潮汁・大将が選ぶ日本酒・カウンター6席',
    neighborhood: '中央区心斎橋筋2-6-19、細い路地の奥。心斎橋駅・なんば駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。おまかせ全体に醤油や煮物。',
    vegan_detail: 'ヴィーガンではありません。鮨と魚介のカウンター。',
    notes: '[鮨・心斎橋筋の路地の6席のカウンター] 通りからは看板しか見えない細い路地の奥にある、カウンター6席の鮨店。2015年開店、主人は経験30年。旬の魚、鮨、小皿のおまかせで、好みを足すこともできる。こはだ(最高だったという声)、甘い赤うに、のどぐろ、鰹のたたき、蟹、冬のふぐの白子が印象に残ったそう。締めは潮汁。大将が料理に合う日本酒を選んでくれる。主人は穏やかで店内は落ち着いており、常連でいっぱい、予約は取りにくい。コースは割安、飲み物は高め。予算は10,000〜30,000円ほど。',
  });
}

// ================================================================ みその
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27033563/'; const R = TB + 'dtlrvwlst/'; const OWN = 'http://tori-misono.com/';
  const D = day(['17:00', '22:30']);
  put({
    id: 'osaka_misono_hozenji', name: 'みその (Misono)', category: 'OMNI',
    lat: 34.667868, lng: 135.50248, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: kara-age, simmered and sauced dishes.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken specialist.',
    hours_raw: 'Mon–Sat 17:00–22:30 (L.O. 22:00); closed Sunday (Tabelog). Reserve: fills within minutes (December 2025). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-2-10, Hōzenji MEOTO Bldg 1F — next to Mizukake Fudō',
    cuisine: 'Chicken specialist using domestic young chickens · chicken sashimi platter · chicken thigh tataki with garlic · tebasaki and nankotsu kara-age · grilled cartilage and gizzards · liver yakitori and simmered liver · chicken skin, and fried chicken skin wrapped with green onion · spicy simmered chicken skin with rice · spicy tofu stew · dry curry omurice · mizutaki course with rice porridge · counter, tatami and a private table',
    website: OWN, gmaps: gm('みその 法善寺 鶏料理'), menu_url: null,
    notes: "[Japanese · a chicken specialist beside Hōzenji] A chicken restaurant in the building next to Mizukake Fudō, cooking domestically raised young chickens from sashimi to rice. The assorted chicken sashimi is fresh and bouncy, the thigh tataki hits hard with garlic, and the kara-age, especially the crisp wings, is a favorite; one diner ordered four plates of grilled cartilage. Look also for fried chicken skin rolled with green onion, liver, gizzards and a spicy simmered chicken skin to eat over rice. Courses run to mizutaki, refined in chicken flavor, with rice porridge, and there is a dry curry omurice. Service is quiet but kind, with plates split for groups. Seats fill within minutes, so reserve. Sake is limited; beer and shochu are there.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Chicken specialist using domestically raised young chickens; official site tori-misono.com (Tabelog).', philosophy: null, specialty: 'Chicken sashimi; kara-age; mizutaki.',
      anecdotes: [
        { text: '"The sashimi was fresh and had a nice bounce. The kara-age was juicy with a strong meaty flavor… The tataki was robust with a great garlic kick." — October 2025.', source: R + 'B515152496/' },
        { text: '"We started with chicken breast and wings, followed by a delicious mizutaki (chicken hot pot). The refined flavor of the chicken in the mizutaki was outstanding." — March 2026, course.', source: R + 'B524273654/' },
      ],
      japanese_sources_summary: '公式 tori-misono.com。食べログ(店舗会員): みその、大阪市中央区難波1-2-10 法善寺MEOUTOビル1F、法善寺水掛不動尊の隣のビル、月〜土17:00〜22:30(L.O.22:00)、日曜休み、カード可、電子マネー・QR不可、国産の若鶏を使った鶏料理の専門店。口コミ(2025年2月〜2026年3月): 誕生日にコース、刺身・手羽先・ドライカレー、カウンターと座敷、なんこつ唐揚げ、鶏刺し、手羽先唐揚げ、レバー焼き、ドライカレーオムライス、サラダ、レバー煮、鶏皮、チゲ、日本酒の種類は少なめ、焼酎、奥の個室のテーブル、刺身は新鮮で弾力、ジューシーな唐揚げ、にんにくの効いたたたき、ねぎを巻いた鶏皮揚げ、取り分けてくれる、ピリ辛の鶏皮煮とご飯、焼きなんこつ4皿、予約なしで入れたがすぐ満席、刺身の盛り合わせ、砂肝、口数は少ないが親切、コースの水炊きと雑炊。',
      confidence: 'medium', sources: [TB, OWN, R + 'B515152496/', R + 'B524273654/', R + 'B496488446/', R + 'B501673580/', R + 'B519445489/', R + 'B489018343/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter and tatami; reservations recommended.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-2-10 法善寺MEOUTOビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); newest review March 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目2番10号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B496488446/', R + 'B515152496/'],
    price_note: 'No prices captured; reviewers spent ¥5,000–7,999.', last_checked: TODAY, items: [
      it('', '', 'Assorted chicken sashimi', '', 'Chicken', 'ask', 'no', 'December 2025.', 'torisashi'),
      it('', '', 'Tebasaki kara-age', '', 'Fried', 'no', 'no', 'February–December 2025.', 'tebasaki'),
      it('', '', 'Grilled chicken cartilage', '', 'Grill', 'ask', 'no', 'October 2025.', 'nankotsu_yaki'),
      it('', '', 'Dry curry omurice', '', 'Rice', 'no', 'no', 'December 2025–March 2026.', 'dry_curry_omurice'),
      it('', '', 'Mizutaki course with rice porridge', '', 'Courses', 'ask', 'no', 'March 2026.', 'mizutaki'),
    ] }, {
    cuisine: '国産の若鶏を使った鶏料理の専門店・鶏刺しの盛り合わせ・にんにくの効いたもものたたき・手羽先となんこつの唐揚げ・焼きなんこつと砂肝・レバー焼きとレバー煮・鶏皮、ねぎを巻いた鶏皮揚げ・ご飯に合うピリ辛の鶏皮煮・チゲ・ドライカレーオムライス・雑炊で締める水炊きのコース・カウンター、座敷、個室のテーブル',
    neighborhood: '中央区難波1-2-10 法善寺MEOUTOビル 1F。水掛不動尊の隣',
    gf_detail: '実際にはグルテンフリーではありません。唐揚げ、煮物、たれの料理。',
    vegan_detail: 'ヴィーガンではありません。鶏料理の専門店。',
    notes: '[和食・法善寺横の鶏料理の専門店] 水掛不動尊の隣のビルにある鶏料理の店で、国産の若鶏を刺身からご飯ものまで。鶏刺しの盛り合わせは新鮮で弾力があり、もものたたきはにんにくがしっかり、唐揚げ、特にカリッとした手羽先が人気で、焼きなんこつを4皿頼んだ人も。ねぎを巻いた鶏皮揚げ、レバー、砂肝、ご飯にのせるピリ辛の鶏皮煮も。コースは鶏の旨みが上品な水炊きと雑炊、ドライカレーオムライスも。接客は口数は少なくても親切で、大人数には取り分けてくれる。すぐ満席になるので予約を。日本酒は少なめ、ビールと焼酎はあります。',
  });
}

// ================================================================ やきとり 陣
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27060489/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '03:00']);
  put({
    id: 'osaka_yakitori_jin_souemoncho', name: 'やきとり 陣 (Yakitori Jin)', category: 'OMNI',
    lat: 34.670177, lng: 135.502527, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tare-glazed skewers; seasoning not described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken skewers and chicken broth.',
    hours_raw: 'Mon–Sat 18:00–3:00 am; closed Sunday (Tabelog). Six counter seats; call ahead (2016 review). Cash only: no cards or e-money (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Souemoncho 6-25, a back alley — 8 min from Namba Stn',
    cuisine: 'Back-alley yakitori · bonjiri, skin, negima, tsukune, yagen nankotsu · low-temperature chicken liver sashimi and grilled liver · chicken thigh tataki · gizzard · red sausage · yam kimchi · smashed cucumber · chicken-broth chazuke · 6 counter seats',
    website: null, gmaps: gm('やきとり 陣 宗右衛門町'), menu_url: null,
    notes: "[Yakitori · a six-seat back-alley counter in Souemoncho] A tiny yakitori counter so deep in a Souemoncho back alley that one diner would never have found it unaided. The current owner took over in January 2014 and kept the name. Skewers are generous and thick: bonjiri, skin, negima, tsukune and yagen nankotsu are favorites. The house draw for some is the chicken liver sashimi, cooked at low temperature. Also on the board: thigh tataki, gizzard, red sausage, a spicy yam kimchi, smashed cucumber, and a chazuke in chicken broth to finish. It's a proper old-school local joint. One diner waited a while for orders. Only six seats, so call ahead. Open until 3 am; closed Sundays. Cash only.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: 'Current owner took over 11 January 2014, keeping the name (Tabelog)', background: 'Back-alley yakitori counter (Tabelog, staff-maintained).', philosophy: null, specialty: 'Yakitori; low-temperature liver sashimi.',
      anecdotes: [
        { text: '"When I think of Jin, I can\'t help but crave… liver sashimi! It\'s cooked at a low temperature, and the texture is so amazing that I always want more!" — September 2023.', source: R + 'B496370880/' },
        { text: '"The interior is cozy, with about five counter seats, making it easy to connect with the chef." — October 2026.', source: R + 'B537906368/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): やきとり 陣、大阪市中央区宗右衛門町6-25、なんば駅から徒歩8分、月〜土18:00〜翌3:00、日曜休み、カード・電子マネー不可、カウンター6席、喫煙可、2014年1月11日に経営者が替わり店名はそのまま。口コミ(2016年5月〜2026年10月): 宗右衛門町の路地裏の小さな焼き鳥店、ぼんじり・皮・ねぎま、大ぶりの肉、長芋キムチ、たたききゅうり、鶏がらスープの鶏茶漬け、朝3時ごろまで、電話で確認を、L字カウンター、昔ながらの店、つくねとやげん軟骨、刺身、低温調理のレバ刺し、注文が出るまで時間がかかったという声、カウンター5席ほど、赤ウインナー、鶏レバ刺し、レバー焼き、もものたたき、もものたれ、砂肝。',
      confidence: 'medium', sources: [TB, R + 'B496370880/', R + 'B537906368/', R + 'B189988804/', R + 'B362416980/', R + 'B474541963/', R + 'B513519427/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Six-seat counter in a back alley.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町6-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); newest review October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町6番25号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537906368/', R + 'B474541963/'],
    price_note: 'No prices captured; reviewers spent ¥2,000–5,999.', last_checked: TODAY, items: [
      it('', '', 'Yakitori: bonjiri, skin, negima, tsukune', '', 'Skewers', 'ask', 'no', '2016–2023 reviews.', 'yakitori'),
      it('', '', 'Chicken liver sashimi (low-temperature)', '', 'Chicken', 'ask', 'no', 'October 2026.', 'reba_sashi'),
      it('', '', 'Chicken thigh tataki', '', 'Chicken', 'ask', 'no', 'October 2026.', 'momo_tataki'),
      it('', '', 'Chicken chazuke', '', 'Finish', 'ask', 'no', 'Chicken broth; 2016 review.', 'tori_chazuke'),
    ] }, {
    cuisine: '路地裏の焼き鳥・ぼんじり、皮、ねぎま、つくね、やげん軟骨・低温調理の鶏レバ刺しとレバー焼き・もものたたき・砂肝・赤ウインナー・長芋キムチ・たたききゅうり・鶏がらスープの鶏茶漬け・カウンター6席',
    neighborhood: '中央区宗右衛門町6-25、路地裏。なんば駅から徒歩8分',
    gf_detail: '実際にはグルテンフリーではありません。たれの串、味付けの中身は不明。',
    vegan_detail: 'ヴィーガンではありません。鶏の串と鶏がらスープ。',
    notes: '[焼き鳥・宗右衛門町の路地裏の6席のカウンター] 教えてもらわなければたどり着けなかったという声もある宗右衛門町の路地裏にある小さな焼き鳥のカウンター。2014年1月に今の経営者が引き継ぎ、店名はそのまま。串は大ぶりで、ぼんじり、皮、ねぎま、つくね、やげん軟骨が人気。低温調理の鶏レバ刺しを目当てにする人も。ほかに、もものたたき、砂肝、赤ウインナー、ピリ辛の長芋キムチ、たたききゅうり、締めは鶏がらスープの茶漬け。昔ながらの町の焼き鳥店。注文が出るまで時間がかかったという声も。6席だけなので電話で確認を。朝3時まで、日曜定休。現金のみ。',
  });
}

// ================================================================ 一心法善寺
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27025496/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '22:00']);
  put({
    id: 'osaka_isshin_hozenji', name: '一心法善寺 (Isshin Hozenji)', category: 'OMNI',
    lat: 34.668004, lng: 135.502532, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy sauce, tare on eel (uzaku).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi counter. A kabocha maki was once on the menu (2016); ask.',
    hours_raw: 'Tue–Sun 17:00–22:00; closed Monday (Tabelog). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 1-1-8, Hōzenji — by Mizukake Fudō, 5 min from Namba Stn',
    cuisine: 'Sushi counter · sashimi · blue crab · rock oysters · uzaku · abalone gunkan · tekka maki and toro tekka · small dishes · Kamo Tsuru Gold sake with gold-leaf petals · 10 counter seats',
    website: null, gmaps: gm('一心 法善寺 寿司'), menu_url: null,
    notes: "[Sushi · a ten-seat counter by Hōzenji's Mizukake Fudō] A long-established sushi counter in the Hōzenji lanes, close to Mizukake Fudō, with ten seats and the calm air of a long-established shop. The head chef is particular about fish, and once turned away a red clam that wasn't fresh enough. Blue crab is a long-running highlight. A July 2026 dinner ran from sashimi and rock oysters to uzaku, an abalone gunkan and tekka maki, with Kamo Tsuru Gold sake, which carries petal-shaped gold leaf. Stories of the shop's history come with the meal. It is pricey: reviewers spent ¥15,000–30,000, and one walk-in felt the bill outran the value. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Sushi counter in Hōzenji (Tabelog, staff-maintained).', philosophy: null, specialty: 'Seasonal fish; blue crab.',
      anecdotes: [
        { text: '"I actually wanted to order my favorite red clam, but it was deemed not fresh enough upon opening, so I couldn\'t have it… This time, the standout ingredient was the blue crab." — February 2024.', source: R + 'B482156163/' },
        { text: '"We also enjoyed a unique Japanese sake, Kamo Tsuru Gold, which features cherry blossom petal-shaped pure gold leaf." — July 2026.', source: R + 'B529983901/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 一心法善寺、大阪市中央区難波1-1-8、なんば駅から徒歩5分、火〜日17:00〜22:00、月曜休み、カード可、電子マネー・QR不可、カウンター10席、20人まで貸切可。口コミ(2015年6月〜2026年7月): 渡り蟹、トロ鉄火の持ち帰り、目の前で握る、かぼちゃ巻き、老舗の落ち着いた雰囲気、予約なしで値段と内容が見合わないと感じた声、若い大将、最初の3品はおいしかった、いくらは残念、魚の目利き、鮮度が足りない赤貝は出さない、高め、刺身、岩牡蠣、うざく、鮑の軍艦、鉄火巻き、Kamo Tsuru Gold(金箔入り)、水掛不動のそば、店の歴史の話。',
      confidence: 'medium', sources: [TB, R + 'B482156163/', R + 'B529983901/', R + 'B102555242/', R + 'B278196678/', R + 'B405124403/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ten-seat counter.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波1-1-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); newest review July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波一丁目1番8号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529983901/', R + 'B482156163/'],
    price_note: 'No prices captured; reviewers spent ¥15,000–29,999.', last_checked: TODAY, items: [
      it('', '', 'Blue crab', '', 'Seafood', 'ask', 'no', 'February 2024.', 'watarigani'),
      it('', '', 'Uzaku', '', 'Small plates', 'no', 'no', 'July 2026.', 'uzaku'),
      it('', '', 'Abalone gunkan', '', 'Sushi', 'no', 'no', 'July 2026.', 'awabi_gunkan'),
      it('', '', 'Tekka maki', '', 'Sushi', 'no', 'no', 'July 2026.', 'tekka'),
    ] }, {
    cuisine: '鮨のカウンター・刺身・渡り蟹・岩牡蠣・うざく・鮑の軍艦・鉄火巻きとトロ鉄火・小皿・金箔の花びら入りのKamo Tsuru Gold・カウンター10席',
    neighborhood: '中央区難波1-1-8、法善寺。水掛不動のそば、なんば駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油、うざくの鰻のたれ。',
    vegan_detail: 'ヴィーガンではありません。鮨のカウンター。かぼちゃ巻きがあったことも(2016年)。要確認。',
    notes: '[鮨・法善寺の水掛不動そばの10席のカウンター] 水掛不動に近い法善寺の路地にある鮨のカウンターで、10席、老舗のような落ち着いた雰囲気。大将は魚にこだわり、鮮度が足りない赤貝は出さなかったことも。渡り蟹は長年の名物。2026年7月の夕食は、刺身、岩牡蠣からうざく、鮑の軍艦、鉄火巻きまで、花びら形の金箔入りのKamo Tsuru Goldと一緒に。店の歴史の話も楽しめる。値段は高めで15,000〜30,000円ほど、予約なしで入った客は値段に見合わないと感じたそう。月曜定休。',
  });
}

// ================================================================ 焼肉P貴之助
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27101225/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_yakiniku_p_takanosuke', name: '焼肉P貴之助 (Yakiniku P Takano Suke)', category: 'OMNI',
    lat: 34.670187, lng: 135.502501, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: marinated meats and yukhoe sauce; miso with the senmai.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakiniku counter.',
    hours_raw: 'Daily 18:00–2:00 am; closing days may vary (Tabelog); one diner noted 3 am (February 2025). Cash only: no cards, e-money or QR (Tabelog). Smoking allowed (Tabelog).',
    hours: ALL(day(['18:00', '02:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Souemoncho 6-25, in a narrow alley next to Hiromiya — 5 min from Namba Stn',
    cuisine: 'Counter yakiniku grilled by the master · half-size portions to try more · white senmai with sesame oil and salt, and miso · aburi yukke · wagyu tataki · salted tongue · outside skirt · wagyu kalbi · cheek and tripe · Korean cold tofu with kimchi and seaweed · 6 counter seats',
    website: null, gmaps: gm('焼肉P貴之助 宗右衛門町'), menu_url: null,
    notes: "[Yakiniku · a six-seat alley counter where the master grills] A hidden yakiniku counter in a narrow Souemoncho alley, next door to Hiromiya. There are no grills at the seats: the master grills each cut and serves it at its best, so up to about seven diners squeeze in close. Portions are about half the usual size, so you can try many cuts. Start with white senmai, when there is any, with sesame oil, salt and a moreish miso. Then go to aburi yukke, wagyu tataki, salted tongue, outside skirt and kalbi. A Korean-style cold tofu with kimchi and seaweed is a side. It's easy to drop by alone, and the owner suits the room. Open late, to 2 am. Cash only; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['owner'], origin: null, background: 'Counter yakiniku; the owner grills for guests (2022–2026 reviews).', philosophy: null, specialty: 'Senmai; yukke; counter-grilled cuts.',
      anecdotes: [
        { text: '"The master cooks and serves the meat, so there are no grills on the tables… Each serving is smaller than average, at about half the size of portions in other restaurants, allowing you to try a variety of dishes." — September 2024.', source: R + 'B491294687/' },
        { text: '"Both the yukke and tataki were incredibly fresh and delicious! What\'s more, the owner grills the meat for you!" — August 2026.', source: R + 'B534616739/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 焼肉P貴之助、大阪市中央区宗右衛門町6-25、なんば駅から徒歩5分、毎日18:00〜翌2:00、休みは変わることも、カード・電子マネー・QR不可、カウンター6席、20人まで貸切可、喫煙可。口コミ(2022年12月〜2026年8月): 細い路地の隠れ家、一人でも入りやすい、ユッケとハラミ、焼き加減がちょうどいい、見た目より味の多彩なメニュー、白センマイは数が少ない、朝3時まで、カウンターのみ、マスターが焼いてくれる、韓国風冷奴、センマイ刺しにごま油と塩、味噌、塩タン、ほほ、ミノ、旧清流会館とホテルの隣の路地、ヒロミヤの隣、7人ほどで満席、量は半分ほどで品数を楽しめる、炙りユッケ、和牛たたき、和牛カルビ。',
      confidence: 'medium', sources: [TB, R + 'B491294687/', R + 'B534616739/', R + 'B457640578/', R + 'B461022197/', R + 'B483920472/', R + 'B484350278/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Six-seat counter; the owner grills.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町6-25',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); newest review August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町6番25号 (go) 15m; next to Hiromiya; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534616739/', R + 'B484350278/'],
    price_note: 'No prices captured; reviewers spent ¥2,000–7,999.', last_checked: TODAY, items: [
      it('', '', 'White senmai (sesame oil, salt, miso)', '', 'Raw', 'ask', 'no', 'April 2024.', 'senmai'),
      it('', '', 'Aburi yukke', '', 'Raw', 'no', 'no', 'August 2026.', 'aburi_yukke'),
      it('', '', 'Salted tongue', '', 'Grill', 'ask', 'no', 'April 2024–August 2026.', 'shio_tan'),
      it('', '', 'Outside skirt', '', 'Grill', 'ask', 'no', 'August 2026.', 'harami'),
      it('', '', 'Wagyu kalbi', '', 'Grill', 'no', 'no', 'August 2026.', 'kalbi'),
    ] }, {
    cuisine: 'マスターが焼くカウンターの焼肉・量は半分ほどで品数を楽しめる・ごま油と塩、味噌で食べる白センマイ・炙りユッケ・和牛たたき・塩タン・ハラミ・和牛カルビ・ほほとミノ・キムチと韓国のりの韓国風冷奴・カウンター6席',
    neighborhood: '中央区宗右衛門町6-25、ヒロミヤの隣の細い路地。なんば駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。たれに漬けた肉やユッケのたれ、センマイの味噌。',
    vegan_detail: 'ヴィーガンではありません。焼肉のカウンター。',
    notes: '[焼肉・マスターが焼く路地の6席のカウンター] 宗右衛門町の細い路地、ヒロミヤの隣にある隠れ家の焼肉カウンター。席にコンロはなく、マスターが一切れずつ焼いて一番いい状態で出してくれるので、7人ほどがぎゅっと並んで座る。量は普通の半分ほどで、いろいろな部位を試せる。まずはあれば白センマイを、ごま油と塩、やみつきになる味噌で。続いて炙りユッケ、和牛たたき、塩タン、ハラミ、カルビ。キムチと韓国のりの韓国風冷奴も。一人でも入りやすく、店主の人柄が店の雰囲気に合う。深夜2時まで。現金のみ、喫煙可。',
  });
}

save();
