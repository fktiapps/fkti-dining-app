// Kyoto priority (kyoto-missed), worker osw13, batch 59 — lane: Tabelog id mod 6 = 0.
// Core: コーヒーポケット, 肉魂 Meat Soul. Notable: Snn, K七.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-59');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ コーヒーポケット
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26019558/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:00', '18:00']);
  put({
    id: 'kyoto_coffee_pocket', name: 'コーヒーポケット (Coffee Pocket)', category: 'MOM_AND_POP',
    lat: 35.012319, lng: 135.759911, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every sandwich and toast is on multigrain wheat bread (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: ham and egg-salad sandwiches, café au lait, cappuccino (reviews).',
    hours_raw: 'Tabelog: Mon–Sat 8:00–18:00; closed Sunday; hours may change (a January 2025 diner says it opens around 7 am). Cash only — no cards, e-money or QR. Smoking allowed at every seat; non-smokers note the smell (2024–2026 reviews). 20 seats at tables per Tabelog ("only 3 tables," January 2025). No reservations.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Karasuma Oike, across from the Kyoto International Manga Museum — about 2 min from Karasuma Oike Stn',
    cuisine: 'A Showa-era kissa of coffee and multigrain-bread sandwiches (2024–2026 reviews) · hot coffee ¥400 (June 2024; January 2025); mixed sandwich ¥550 (January 2025); morning Set B ¥850 — coffee, mixed sandwich, salad, fruit (September 2026); ham toast with café au lait ¥1,100 (December 2025) · coffee from Ogawa Coffee beans and multigrain bread from 進々堂 (October 2025) · cappuccino; banana slices with the sandwich (February 2026)',
    website: null, gmaps: gm('コーヒーポケット 西押小路町'), menu_url: null,
    notes: '[Kissa · Karasuma Oike, a postwar family coffee shop] A red-awninged Showa coffee shop by the Manga Museum, run by a kind couple: ¥400 coffee and mixed sandwiches on multigrain bread, a ¥850 morning set. The sign famously lacks its "T." Smoking is allowed at every seat, and it is cash only. Closed Sunday.',
    chef_bio: { chef_name: 'Keizo (second-generation owner, per an October 2025 review)', roles: ['Run by a husband and wife (January 2025; October 2025; August 2026)'], origin: null,
      background: 'Per an October 2025 diner: founded in 1945 by Setsuko Taniguchi, who fled the air raids with her mother, moved from Kobe to Kyoto and opened the shop just after the war, first selling sweet red-bean soup made from black-market beans; she ran it for 58 years, and in 2011 her eldest son Keizo became the second-generation owner. The same diner relays the story that the wooden "Pocket" sign lacks its "T," to be added when the shop makes its mother proud. Reviewers in 2025–2026 describe a kind couple, red chairs and wooden tables, a television, and an elderly owner (June 2026).',
      philosophy: null,
      specialty: 'Mixed sandwich on multigrain bread.',
      anecdotes: [
        { text: '"This charming, traditional coffee shop is run by a husband and wife team." — January 2025.', source: R + 'B499014083/' },
        { text: 'October 2025: the missing "T" in the wooden sign "symbolizes that when the café becomes a place that makes its mother proud, the \'T\' will finally be added."', source: R + 'B514717675/' },
        { text: '"The smell of tobacco hits my nostrils. Non-smokers might find it uncomfortable." — June 2024.', source: R + 'B486555121/' },
      ],
      japanese_sources_summary: '食べログ: コーヒーポケット、喫茶店・カフェ、中京区押小路通烏丸東入西押小路町99、烏丸御池駅から167m、月〜土 8:00〜18:00、日曜休み、20席、全席喫煙可、カード・電子マネー・QR不可、予約不可。口コミ (2024年6月〜2026年9月、英語): 昭和の喫茶店、夫婦で営む、1945年創業、Setsuko Taniguchi さんが58年営み、2011年に長男の Keizo さんが2代目に、戦後に神戸から京都へ移り闇市の豆でぜんざいを売ったのが始まり、看板の「Pocket」に「T」がない話、Ogawa Coffee の豆、進々堂の雑穀パン、ホットコーヒー400円、ミックスサンド550円、Bセット850円、ハムトーストとカフェオレ1,100円、カプチーノ、7時ごろから開いているという声、マンガミュージアムの向かい、赤いテント、たばこの匂い。',
      confidence: 'medium', sources: [TB, R + 'B486555121/', R + 'B498823297/', R + 'B499014083/', R + 'B499665369/', R + 'B514717675/', R + 'B518288497/', R + 'B522823194/', R + 'B530168828/', R + 'B534558597/', R + 'B535119825/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking allowed throughout; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市中京区押小路通烏丸東入西押小路町99',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.012319, 135.759911); cross-checked: GSI 京都府京都市中京区西押小路町99番地 (lot) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B499014083/', R + 'B535119825/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Hot coffee', '¥400', 'Drink', 'ask', 'ask', 'January 2025.', 'coffee'),
      it('', '', 'Mixed sandwich (multigrain bread)', '¥550', 'Food', 'no', 'no', 'January 2025.', 'sandwich'),
      it('', '', 'Morning Set B (coffee, mixed sandwich, salad, fruit)', '¥850', 'Morning', 'no', 'no', 'September 2026.', 'morning_set'),
    ] }, {
    cuisine: 'コーヒーと雑穀パンのサンドイッチの昭和の喫茶店 (2024〜2026年の口コミ)・ホットコーヒー400円 (2024年6月、2025年1月)、ミックスサンド550円 (2025年1月)、モーニングのBセット850円はコーヒー、ミックスサンド、サラダ、果物 (2026年9月)、ハムトーストとカフェオレで1,100円 (2025年12月)・コーヒーは Ogawa Coffee の豆、パンは進々堂の雑穀パン (2025年10月)・カプチーノ。サンドにはバナナが添えられる (2026年2月)',
    neighborhood: '烏丸御池、京都国際マンガミュージアムの向かい。烏丸御池駅から約2分',
    gf_detail: 'グルテンフリーではない: サンドもトーストもすべて小麦の雑穀パン (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: ハムや卵サラダのサンド、カフェオレ、カプチーノ (口コミ)。',
    notes: '[喫茶店・烏丸御池、戦後から続く家族の喫茶] マンガミュージアムのそば、赤いテントの昭和の喫茶店で、やさしい夫婦が営む。400円のコーヒーと雑穀パンのミックスサンド、850円のモーニング。看板に「T」がないことで知られる。全席喫煙可で現金のみ。日曜休み。',
  });
}

// ================================================================ 肉魂 Meat Soul
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034468/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://lit.link/kyotomeatsoul';
  const H = day(['17:00', '23:30']);
  put({
    id: 'kyoto_niku_tamashii_meat_soul', name: '肉魂 Meat Soul', category: 'OMNI',
    lat: 35.006201, lng: 135.755234, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: yakiniku sauces, a soy-sauce yaki-suki dip, miso and soy flavour sauces, sausages (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku house (Tabelog).',
    hours_raw: 'Tabelog: daily 17:00–23:30 (last order 23:00). 14 seats at the counter and tables, private rooms for 8 and up to 20; non-smoking; wheelchair accessible; menus in English, Chinese and Korean; children welcome; cards, e-money and most QR (Tabelog). Courses around ¥10,000 or à la carte (April 2024). Tabelog lists no service charge. Opened 1 September 2020 (Tabelog; an April 2024 diner says August 2020).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishinotoin-Takoyakushi, near Shijo-Karasuma — about 5–10 min walk from Karasuma Stn',
    cuisine: 'Charcoal yakiniku of long-fattened A5 heifers in a machiya: pure Tajima-Omi beef from Okazaki Farm and Kobe beef from Nishizawa, cows aged 38–50 months (Tabelog blurb) · seen: sea urchin and tongue yukhoe ¥2,900, premium salted tongue ¥2,200, special hanging tender ¥2,400, top sirloin 100 g ¥3,500 as steak, yaki-suki of special loin with egg and miso soy ¥2,200, liver ¥1,000, tripe with wasabi salt ¥1,100, kimchi trio ¥900 (April 2024) · a five-cut platter comparing Kobe, Omi and Matsusaka beef; outside-skirt yukhoe; beef sushi; choregi salad; seafood chige; Milky Queen rice (2024–2026 reviews)',
    website: SITE, gmaps: gm('肉魂 Meat Soul 池須町'), menu_url: null,
    notes: '[Yakiniku · Nishinotoin near Shijo-Karasuma, Omi beef over binchotan] A fourteen-seat machiya yakiniku grilling A5 Omi heifer — plus Kobe and Matsusaka for comparison — over binchotan at the table: sea-urchin tongue yukhoe, thick tongue, yaki-suki dipped in egg. Courses about ¥10,000. Diners call it good value for the beef; one found portions small, the room cramped and the service unsmiling (April 2024). Open nightly until 23:30.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 1 September 2020 (Tabelog). The shop’s Tabelog blurb calls it not a high-end place but a small one that never compromises on meat: A5 heifers fattened 38 to 50 months, from producers such as Okazaki Farm (pure Tajima-Omi beef) and Nishizawa (Kobe beef), grilled over binchotan in a quiet machiya. Reviewers note whole-cattle buying that brings rare cuts at fair prices, a Nishijin-woven exterior, and anniversary plates.',
      philosophy: 'Tabelog blurb: a small yakiniku that pursues the essence of long-term fattening.',
      specialty: 'Sea urchin and tongue yukhoe; Omi beef comparison platter.',
      anecdotes: [
        { text: 'April 2024: the meat was delicious but portions "might be a bit lacking," the room "quite cramped," and the female staff picked up plates "without a smile" — and the anniversary message was origami with marker pen.', source: R + 'B483468170/' },
        { text: 'An April 2025 diner compared Kobe, Omi and Matsusaka side by side: "The Matsusaka Beef was particularly delicious!"', source: R + 'B502962415/' },
      ],
      japanese_sources_summary: '食べログ: 肉魂 Meat Soul、焼肉・ホルモン・牛タン、中京区西洞院蛸薬師上る池須町424-2、烏丸駅から徒歩5分、毎日 17:00〜23:30 (L.O. 23:00)、14席、個室 (8名、10〜20名)、禁煙、車椅子可、英語・中国語・韓国語メニュー、子供可、カード・電子マネー・QR可、2020年9月1日オープン、Okazaki Farm の純但馬血統の近江牛と Nishizawa の神戸牛、38〜50か月肥育のA5雌牛、町家で備長炭の七輪。口コミ (2024年3月〜2026年9月、英語): 雲丹と牛タンのユッケ2,900円、上タン塩2,200円、特選サガリ2,400円、上ロース100g 3,500円、特選ロースの焼きすき (卵と味噌醤油) 2,200円、レバー1,000円、上ミノのわさび塩1,100円、キムチ3種900円、神戸・近江・松阪の5種盛り、ハラミのユッケ、肉寿司、チョレギサラダ、海鮮チゲ、ミルキークイーンのご飯、コースは1万円前後、量が少なめで店内が狭く女性スタッフに笑顔がないという声 (2024年4月)。',
      confidence: 'medium', sources: [TB, SITE, R + 'B482394478/', R + 'B483434985/', R + 'B483468170/', R + 'B483631294/', R + 'B483634356/', R + 'B483686108/', R + 'B484154988/', R + 'B502962415/', R + 'B514823320/', R + 'B535040697/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区西洞院蛸薬師上る池須町424-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.006201, 135.755234); cross-checked: GSI 京都府京都市中京区池須町424番地 (lot) 67m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B483634356/'],
    price_note: 'Prices from April 2024 reviews.', last_checked: TODAY, items: [
      it('', '', 'Sea urchin and beef tongue yukhoe', '¥2,900', 'Meat', 'ask', 'no', 'April 2024.', 'yukhoe'),
      it('', '', 'Premium salted tongue', '¥2,200', 'Meat', 'ask', 'no', 'April 2024.', 'gyutan'),
      it('', '', 'Top sirloin 100 g', '¥3,500', 'Meat', 'ask', 'no', 'April 2024.', 'yakiniku'),
      it('', '', 'Yaki-suki of special loin with egg and miso soy', '¥2,200', 'Meat', 'no', 'no', 'April 2024.', 'yakiniku'),
    ] }, {
    cuisine: '長期肥育のA5雌牛を町家の炭火で焼く焼肉。Okazaki Farm の純但馬血統の近江牛、Nishizawa の神戸牛、38〜50か月の牛 (食べログの紹介文)・口コミでは雲丹と牛タンのユッケ2,900円、上タン塩2,200円、特選サガリ2,400円、上ロース100gをステーキで3,500円、特選ロースの焼きすき (卵と味噌醤油) 2,200円、レバー1,000円、上ミノのわさび塩1,100円、キムチ3種900円 (2024年4月)・神戸・近江・松阪を食べ比べる5種盛り、ハラミのユッケ、肉寿司、チョレギサラダ、海鮮チゲ、ミルキークイーンのご飯 (2024〜2026年の口コミ)',
    neighborhood: '西洞院蛸薬師、四条烏丸の近く。烏丸駅から徒歩5〜10分',
    gf_detail: 'グルテンフリーではない: 焼肉のたれ、焼きすきの醤油、味噌や醤油のたれ、ソーセージ (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛の焼肉店 (食べログ)。',
    notes: '[焼肉・四条烏丸近くの西洞院、備長炭で近江牛] 町家の14席で、A5の近江牛の雌牛 (神戸牛や松阪牛の食べ比べも) を卓上の備長炭で焼く。雲丹と牛タンのユッケ、厚切りタン、卵にくぐらせる焼きすきなど。コースは1万円ほど。肉の割に手頃という声が多い一方、2024年4月には量が少なめ、店内が狭い、スタッフに笑顔がないという声も。毎晩23時半まで。',
  });
}

// ================================================================ Snn
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26043078/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '22:00']);
  put({
    id: 'kyoto_snn_nijo', name: 'Snn', category: 'OMNI',
    lat: 35.017895, lng: 135.749028, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta is the draw, with bread and steamed dumplings (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: venison, duck, beef, squid, fish and cheese dishes (2025–2026 reviews).',
    hours_raw: 'Tabelog: 16:00–22:00; closed Wednesday; hours may change. Counter seats only around an open kitchen; book ahead — often full, and phone bookings were turned away (2026 reviews); reservations by phone (August 2026). Cards; no e-money or QR. À la carte only — build your own course (June 2026). Most dishes are cooked by one chef, so waits of 10–40 minutes between plates are common (2025–2026 reviews). Tabelog lists no service charge.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Omiya-Marutamachi, north of Nijo Castle — about 10 min walk from Nijojo-mae Stn',
    cuisine: 'A counter bistro of pasta and seasonal plates with natural wine (2025–2026 reviews) · seen: aonori-butter and karasumi bread ¥750, Kyoto red-chicken and coriander steamed dumplings ¥1,580, aged potatoes ¥950, mentaiko squid with aged potatoes ¥2,320, charcoal-grilled Kishu duck ¥4,600, Kumano beef sirloin ¥4,800, summer venison ¥4,200, octopus ¥3,000, almond panna cotta ¥950–1,100 (2025–2026 reviews) · pasta ¥2,400: aglio e olio, managatsuo with summer vegetables and karasumi, squid ink with bell pepper, Kyoto vegetables, on noodles from an Awaji maker (2025–2026 reviews) · wine by the glass ¥1,100–1,500, sake, homemade lemon gin soda ¥900 (reviews)',
    website: null, gmaps: gm('Snn 大宮通丸太町'), menu_url: null,
    notes: '[Bistro & pasta · Omiya-Marutamachi, a counter for pasta lovers] A counter-only bistro north of Nijo Castle, an offshoot of the Karasuma Oike izakaya To and called syn until May 2025: seasonal plates — steamed red-chicken dumplings, charcoal duck and venison — and the pastas regulars rank their best. Mostly one cook, so dishes can take 10–40 minutes; one diner felt regulars got more attention. Book early. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Not named; "mostly prepared by a single chef" (January 2026)'], origin: null,
      background: 'A May 2026 regular calls it an independent offshoot of the popular izakaya To in Karasuma Oike, and a July 2025 diner says it was renamed from syn in May 2025. Reviewers in 2025–2026 describe a stylish counter around an open kitchen in a building that does not look like a restaurant from outside, natural wines, warm staff, and slow but improving service.',
      philosophy: null,
      specialty: 'Pasta; seasonal small plates.',
      anecdotes: [
        { text: 'July 2025: "The first dish was served in about 10 minutes, but the second one took over 40 minutes," and glasses were only refilled on request — "Tourists should be prepared for this experience."', source: R + 'B510496579/' },
        { text: 'A three-time regular, May 2026: "Every visit updates my definition of \'delicious.\'"', source: R + 'B510496579/' },
        { text: 'June 2026: the fried Kamo eggplant with aged-potato sauce was "a bit on the salty side."', source: R + 'B530251031/' },
      ],
      japanese_sources_summary: '食べログ: Snn、ダイニングバー、上京区大宮通丸太町上ル1-847、二条城前駅から670m、16:00〜22:00、水曜休み、カード可、電子マネー・QR不可。口コミ (2025年7月〜2026年10月、英語): 烏丸御池の人気居酒屋 To からの独立、2025年5月に syn から改名、カウンターのみでオープンキッチン、ほぼ一人のシェフが調理するので料理の間が10〜40分、予約必須で電話予約、アラカルトのみ、パスタが人気 (アーリオ・オーリオ、マナガツオと夏野菜とからすみ、イカスミとピーマン、京野菜、淡路の製麺所の麺)、青のりバターとからすみのパン750円、京都の赤鶏とパクチーの蒸し餃子1,580円、熟成じゃがいも950円、明太子のイカと熟成じゃがいも2,320円、紀州鴨の炭火焼き4,600円、熊野牛ランプ4,800円、夏の鹿4,200円、蛸3,000円、アーモンドのパンナコッタ、グラスワイン1,100〜1,500円、日本酒、自家製レモンジンソーダ900円、常連と初めての客で対応に差があるという声、加茂茄子の揚げ物が塩辛いという声。',
      confidence: 'medium', sources: [TB, R + 'B510496579/', R + 'B527992379/', R + 'B529690966/', R + 'B530251031/', R + 'B530987603/', R + 'B532058461/', R + 'B532310181/', R + 'B534799301/', R + 'B535093835/', R + 'B536281374/'] },
    cultural_comfort: { level: 'japanese', note: 'Phone booking; slow service; one diner felt newcomers got less attention (July 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区大宮通丸太町上ル1-847',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017895, 135.749028); cross-checked: GSI 京都府京都市上京区一町目847番地 (lot) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B510496579/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Pasta (e.g. aglio e olio)', '¥2,400', 'Pasta', 'no', 'no', 'January 2026; July 2025.', 'pasta'),
      it('', '', 'Kyoto red-chicken and coriander steamed dumplings', '¥1,580', 'Plates', 'no', 'no', 'May 2026.', 'dumpling'),
      it('', '', 'Charcoal-grilled Kishu duck', '¥4,600', 'Plates', 'ask', 'no', 'May 2026.', 'duck'),
      it('', '', 'Aged potato roast with romesco', '¥950', 'Plates', 'ask', 'ask', 'July 2025; January 2026.', 'potato'),
    ] }, {
    cuisine: 'パスタと季節の皿を自然派ワインと楽しむカウンターのビストロ (2025〜2026年の口コミ)・口コミでは青のりバターとからすみのパン750円、京都の赤鶏とパクチーの蒸し餃子1,580円、熟成じゃがいも950円、明太子のイカと熟成じゃがいも2,320円、紀州鴨の炭火焼き4,600円、熊野牛ランプ4,800円、夏の鹿4,200円、蛸3,000円、アーモンドのパンナコッタ950〜1,100円 (2025〜2026年)・パスタは2,400円で、アーリオ・オーリオ、マナガツオと夏野菜とからすみ、イカスミとピーマン、京野菜。麺は淡路の製麺所のもの (2025〜2026年の口コミ)・グラスワイン1,100〜1,500円、日本酒、自家製レモンジンソーダ900円 (口コミ)',
    neighborhood: '大宮丸太町、二条城の北。二条城前駅から徒歩約10分',
    gf_detail: 'グルテンフリーではない: 名物はパスタで、パンや蒸し餃子も (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 鹿、鴨、牛、イカ、魚、チーズの料理 (2025〜2026年の口コミ)。',
    notes: '[ビストロとパスタ・大宮丸太町、パスタ好きのカウンター] 二条城の北にあるカウンターだけのビストロ。烏丸御池の居酒屋 To から独立し、2025年5月に syn から改名。京都の赤鶏の蒸し餃子、炭火の鴨や鹿などの季節の皿と、常連が一番と言うパスタ。ほぼ一人で作るので料理の間が10〜40分かかることも、常連の方が手厚いと感じたという声も。予約は早めに。水曜休み。',
  });
}

// ================================================================ K七
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26042664/'; const R = TB + 'dtlrvwlst/';
  const LD = day(['11:30', '14:30'], ['17:00', '22:00']); const D = day(['17:00', '22:00']);
  put({
    id: 'kyoto_k7_kenana', name: 'K七 (Kenana)', category: 'OMNI',
    lat: 34.989338, lng: 135.746304, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta lunches, bread from a bakery, shumai and ramen on special days (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, game, clams, chicken broths, pudding (2025–2026 reviews).',
    hours_raw: 'Tabelog: Sat, Sun, Mon and holidays lunch 11:30–14:30 and dinner 17:00–22:00; Tue–Fri dinner only 17:00–22:00; irregular days off, posted on Instagram (@k.nana.kyoto). Reservations by Instagram message or the online booking link in its profile (TableCheck, January 2026). One drink per person (2026 reviews). 16 seats per Tabelog (about 13 — 5 at the counter and a table for 8 — per a January 2026 diner); non-smoking; children welcome; cards. Some days it serves limited ramen or a daily menu instead of the bistro (August 2025; July 2026). Opened 29 January 2025 (Tabelog).',
    hours: { 0: LD, 1: D, 2: D, 3: D, 4: D, 5: LD, 6: LD }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shichijo near Umekoji Park — 4–5 min walk from JR Umekoji-Kyotonishi Stn',
    cuisine: 'An à la carte bistro, Italian-leaning, from the team behind the shared-kitchen pop-up Kawauzo Shokudo (2026 reviews) · lunch course about ¥3,000: carrot potage, a salad such as yokowa with hassaku and new onion, two breads from Yoshida Bakery, a choice of four pastas (e.g. clams with new-seaweed cream and spring cabbage), coffee (January–February 2026) · a biryani plate ¥2,200 with venison and turnip curry and crab-bisque coconut curry; strawberry vacherin ¥900 (January 2026) · dinner: buri, game such as wild boar, grilled vegetables and squid with romesco, natural wines (2025–2026 reviews) · ramen days: chilled salt ramen of jidori and shellfish ¥1,700, chilled shoyu ramen; pork, shrimp and corn shumai ¥400; firm pudding ¥600; red-shiso juice ¥700 (2025–2026 reviews)',
    website: 'https://www.instagram.com/k.nana.kyoto/', gmaps: gm('K七 西酢屋町'), menu_url: null,
    notes: '[Bistro · Shichijo near Umekoji Park, from the Kawauzo Shokudo pop-up] A small à la carte bistro opened in 2025 by the people behind the shared-kitchen pop-up Kawauzo Shokudo: pasta lunch courses around ¥3,000, a biryani plate, game and natural wine at night, a firm pudding — and irregular ramen days that draw a crowd. One drink per person. Book by Instagram; days off posted there.',
    chef_bio: { chef_name: null, roles: ['Not named in a source'], origin: null,
      background: 'Opened 29 January 2025 (Tabelog). A February 2026 diner explains the name: the shared-space restaurant Kawauzo Shokudo became K七, from the initial of the old shop and its new street, Shichijo. Reviewers in 2025–2026 describe a stylish, calm room near Umekoji Park, à la carte so you order only what you like, house coffee "k.nana.coffee", and special days with a daily menu or limited ramen.',
      philosophy: null,
      specialty: 'Pasta lunch; irregular ramen days; pudding.',
      anecdotes: [
        { text: '"The shared space restaurant, Kawauzo Shokudo, has transformed into K七 (Kenana), combining the initials of the previous establishment with the newly chosen location on Shichijo Street." — February 2026.', source: R + 'B524213584/' },
        { text: 'A January 2026 lunch had a few groups waiting at noon — "this place is really popular!"', source: R + 'B512913409/' },
      ],
      japanese_sources_summary: '食べログ: K七 (kenana)、レストラン、下京区西酢屋町2-3、JR梅小路京都西駅から徒歩5分、土日月祝 11:30〜14:30・17:00〜22:00、火〜金 17:00〜22:00、不定休 (Instagram で告知)、予約は Instagram の DM かプロフィールの予約リンク、16席、禁煙、子供可、カード可、2025年1月29日オープン。口コミ (2025年8月〜2026年8月、英語): シェアスペースの食堂 Kawauzo Shokudo が七条通に移って K七 に、アラカルトのビストロ、イタリアン寄り、ランチコース3,000円ほど (人参のポタージュ、よこわと八朔と新玉ねぎのサラダ、Yoshida Bakery のパン2種、4種から選ぶパスタ、k.nana.coffee のコーヒー)、ビリヤニのプレート2,200円 (鹿と聖護院かぶのカレー、蟹のビスクのココナッツカレー)、苺のヴァシュラン900円、夜は鰤、猪などのジビエ、季節の焼き野菜とイカのロメスコ、自然派ワイン、不定期のラーメンの日 (地鶏と貝の冷やし塩ラーメン1,700円、冷やし醤油ラーメン)、焼売400円、固めのプリン600円、赤紫蘇ジュース700円、ワンドリンク制。',
      confidence: 'medium', sources: [TB, 'https://www.instagram.com/k.nana.kyoto/', R + 'B512913409/', R + 'B520624776/', R + 'B520765399/', R + 'B521660435/', R + 'B522841937/', R + 'B524213584/', R + 'B525084277/', R + 'B530875930/', R + 'B531490639/', R + 'B534839664/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book through Instagram; one drink per person.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区西酢屋町2-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.989338, 135.746304); cross-checked: GSI 京都府京都市下京区西酢屋町2番地 (lot) 43m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B512913409/', R + 'B531490639/', R + 'B521660435/'],
    price_note: 'Prices from 2026 reviews; one drink per person.', last_checked: TODAY, items: [
      it('', '', 'Lunch course (soup, salad, bread, pasta, coffee)', 'about ¥3,000', 'Lunch', 'no', 'no', 'January 2026.', 'pasta_lunch'),
      it('', '', 'Biryani plate', '¥2,200', 'Lunch', 'ask', 'no', 'January 2026.', 'biryani'),
      it('', '', 'Pudding', '¥600', 'Dessert', 'ask', 'no', 'July 2026.', 'pudding'),
      it('', '', 'Chilled salt ramen (ramen day)', '¥1,700', 'Special', 'no', 'no', 'July 2026.', 'ramen'),
    ] }, {
    cuisine: 'シェアキッチンの Kawauzo Shokudo の人たちが開いた、イタリアン寄りのアラカルトのビストロ (2026年の口コミ)・ランチコースは3,000円ほどで、人参のポタージュ、よこわと八朔と新玉ねぎなどのサラダ、Yoshida Bakery のパン2種、4種から選ぶパスタ (あさりと新海苔のクリーム、春キャベツなど)、コーヒー (2026年1〜2月)・ビリヤニのプレート2,200円は鹿と聖護院かぶのカレー、蟹のビスクのココナッツカレー付き。苺のヴァシュラン900円 (2026年1月)・夜は鰤、猪などのジビエ、焼き野菜とイカのロメスコ、自然派ワイン (2025〜2026年の口コミ)・ラーメンの日は地鶏と貝の冷やし塩ラーメン1,700円、冷やし醤油ラーメン。豚と海老ととうもろこしの焼売400円、固めのプリン600円、赤紫蘇ジュース700円 (2025〜2026年の口コミ)',
    neighborhood: '七条、梅小路公園の近く。JR梅小路京都西駅から徒歩4〜5分',
    gf_detail: 'グルテンフリーではない: パスタのランチ、パン、焼売、ラーメンの日のラーメン (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚、ジビエ、あさり、鶏のスープ、プリン (2025〜2026年の口コミ)。',
    notes: '[ビストロ・梅小路公園近くの七条、Kawauzo Shokudo から] シェアキッチンの Kawauzo Shokudo の人たちが2025年に開いた小さなアラカルトのビストロ。3,000円ほどのパスタのランチコース、ビリヤニのプレート、夜はジビエと自然派ワイン、固めのプリン。不定期のラーメンの日は行列も。ワンドリンク制。予約と休みは Instagram で。',
  });
}

save();
