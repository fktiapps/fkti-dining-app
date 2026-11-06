// Kyoto priority (kyoto-missed), worker osw13, batch 64 — lane: Tabelog id mod 6 = 0.
// Core: カワコーヒー, aotake. Notable: 手鞠鮨と日本茶 宗田, みます屋 おくどはん.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-64');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26017254', 'brand already in data: 松葉 京都駅店 is a branch of the nishin-soba house 総本家にしんそば 松葉, already in kyoto.json as kyoto_matsuba_honten; a brand already in data → skip its other same-concept branches (Greg ruling 2026-11-05)');

// ================================================================ カワコーヒー
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023506/'; const R = TB + 'dtlrvwlst/';
  const E = day(['08:00', '16:30']); const L = day(['11:00', '16:30']);
  put({
    id: 'kyoto_kawa_coffee', name: 'カワコーヒー (kawa COFFEE)', category: 'OMNI',
    lat: 35.017295, lng: 135.765484, cuisine_type: 'kissaten',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: coffee is fine; the food is a castella, toast and an ice sandwich (2021–2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: black coffee and tea are plant-based; the castella comes with butter (2021 review).',
    hours_raw: 'Tabelog: Mon, Tue, Fri 8:00–16:30; Thu, Sat, Sun and holidays 11:00–16:30; closed Wednesday; latest hours on Google Maps. Smoking allowed on the ground floor, so no entry for under-20s (Tabelog); a non-smoking tatami room upstairs looks onto the Imperial Palace trees (2020–2021 reviews). One-hour limit and no laptops (June 2022). 6 seats; take-out; cash only. No espresso and no food menu beyond the castella and toast (Tabelog; reviews).',
    hours: { 0: E, 1: E, 3: L, 4: E, 5: L, 6: L }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Marutamachi-dori facing the Kyoto Imperial Palace — next to the soba shop Hanamomo; about 7 min walk from Marutamachi Stn',
    cuisine: 'A tiny coffee house of carefully roasted, hand-brewed coffee (2020–2026 reviews) · medium-roast mocha ¥690 (October 2026); rich blend ¥500 (April 2021); dark-roast Ethiopian mocha; aged coffee with a fruity aroma (January 2025); coffee soda (August 2020) · the "Kawa castella," served hot and pancake-like with butter, also to take away (2021–2025 reviews); toast lunch with a drink ¥1,200 (December 2022); ice sandwich (July 2023)',
    website: null, gmaps: gm('kawa COFFEE 丸太町 昆布屋町'), menu_url: null,
    notes: '[Coffee · Marutamachi facing the Imperial Palace, a leather-maker’s coffee house] A six-seat coffee house on Marutamachi opposite the Imperial Palace trees, run by a leather craftsman per a 2020 visitor: hand-brewed roasts and aged coffee, and a hot, fluffy "Kawa castella." Smoking downstairs (so no under-20s), a non-smoking tatami room upstairs. One-hour limit, no laptops, cash only. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['The master, not named; a leather craftsman whose handmade work is shown upstairs (August 2020)'], origin: null,
      background: 'Reviewers from 2020 to 2026 describe a small two-floor coffee house beside the soba shop Hanamomo on Marutamachi: smokers downstairs, a non-smoking tatami room and gallery of the owner’s handmade leather goods upstairs, with a view of the Imperial Palace greenery. An October 2026 visitor enjoyed talking with the master during the careful brewing.',
      philosophy: null,
      specialty: 'Kawa castella; aged coffee.',
      anecdotes: [
        { text: 'March 2023: waiting two minutes for a take-away castella in the cold, "even though there was no one in the store, I was asked to wait outside."', source: R + 'B461650081/' },
        { text: '"I was surprised by how fruity and sweet the aroma of the aged coffee was!" — January 2025.', source: R + 'B498631850/' },
        { text: 'October 2026: "The master brewed it with great care and attention. During that time, we engaged in various conversations."', source: R + 'B537849069/' },
      ],
      japanese_sources_summary: '食べログ: kawa COFFEE (カワコーヒー)、喫茶店・カフェ、中京区丸太町通麩屋町西入昆布屋町397、月火金 8:00〜16:30、木土日祝 11:00〜16:30、水曜休み、最新は Google マップで、6席、喫煙可のため20歳未満は入店不可、テイクアウト、カード・電子マネー・QR不可、フードメニューとエスプレッソはなし。口コミ (2020〜2026年、英語): 手打ちそば花桃の隣、1階は喫煙・2階は禁煙の座敷で御所の緑が見える、2階に店主の手作りの革製品、店主は革職人、中煎りモカ690円、リッチブレンド500円、深煎りのエチオピアモカ、熟成珈琲、珈琲ソーダ、カワカステラ (温かくパンケーキのよう、バター)、トーストランチ1,200円、アイスサンド、1時間制でパソコン作業不可、寒い中外で待たされたという声、マスターとの会話。',
      confidence: 'medium', sources: [TB, R + 'B430518725/', R + 'B450144838/', R + 'B458197586/', R + 'B461650081/', R + 'B464119405/', R + 'B464542657/', R + 'B464545337/', R + 'B468448023/', R + 'B498631850/', R + 'B537849069/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Smoking downstairs; one-hour limit; no laptops; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区丸太町通麩屋町西入昆布屋町397',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog reviews dated January 2025 and October 2026.' },
    pin_source: `Tabelog ${TB} (35.017295, 135.765484); GSI matches only the town 昆布屋町 (no lot 397), so loc_precise false; mp_teuchi_soba_hanamomo, the neighbour reviewers name, is 6.3m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537849069/', R + 'B430518725/'],
    price_note: 'Prices from 2021–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Medium-roast mocha', '¥690', 'Coffee', 'ask', 'ask', 'October 2026.', 'coffee'),
      it('', '', 'Kawa castella (hot)', null, 'Sweets', 'no', 'no', '2021–2025.', 'castella'),
    ] }, {
    cuisine: '丁寧に焙煎し淹れるコーヒーの小さな店 (2020〜2026年の口コミ)・中煎りモカ690円 (2026年10月)、リッチブレンド500円 (2021年4月)、深煎りのエチオピアモカ、フルーティーな香りの熟成珈琲 (2025年1月)、珈琲ソーダ (2020年8月)・温かくパンケーキのような「カワカステラ」にバター、持ち帰りも (2021〜2025年の口コミ)。ドリンク付きのトーストランチ1,200円 (2022年12月)、アイスサンド (2023年7月)',
    neighborhood: '丸太町通、京都御所の向かい。手打ちそば花桃の隣。丸太町駅から徒歩約7分',
    gf_detail: '要確認: コーヒーは問題ないが、食べ物はカステラ、トースト、アイスサンド (2021〜2025年の口コミ)。',
    vegan_detail: '要確認: ブラックコーヒーと紅茶は植物性。カステラにはバターが添えられる (2021年の口コミ)。',
    notes: '[コーヒー・御所の向かいの丸太町、革職人のコーヒー店] 御所の緑の向かい、丸太町通の6席のコーヒー店。2020年の口コミでは革職人の店主が営む。丁寧に淹れる焙煎や熟成珈琲に、温かくふわふわの「カワカステラ」。1階は喫煙可 (20歳未満は入店不可)、2階は禁煙の座敷。1時間制、パソコン作業不可、現金のみ。水曜休み。',
  });
}

// ================================================================ aotake
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26007348/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://kyoto.aotake-heigo.com';
  const WD = day(['11:00', '16:30']); const WE = day(['11:00', '17:00']);
  put({
    id: 'kyoto_aotake_shichijo', name: 'aotake', category: 'OMNI',
    lat: 34.989001, lng: 135.762916, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask: tea and tofu shiratama (rice-flour dumplings) may suit, but chiffon and pound cakes are served too (2025–2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: tea and agar jellies may be plant-based; cakes and the vanilla ice cream are not (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon, Thu, Fri 11:00–16:30 (last order 16:00); Sat, Sun and holidays 11:00–17:00; closed Tuesday and Wednesday; seasonal breaks announced (e.g. 10 June to early July). Reservations by phone. No preschool children, to keep the room quiet (Tabelog). 6 chair seats downstairs and a tatami room for 10 upstairs; non-smoking; cash or PayPay only.',
    hours: { 0: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shichijo-Takakura — about 8 min walk from Kyoto Stn',
    cuisine: 'A Japanese-tea café in a Taisho-era machiya with a small courtyard (2025–2026 reviews) · teas served in a pot with hot water for several brews: kabusecha from Wazuka ¥1,400, hojicha, sencha, karigane, Japanese black tea, Chinese tea (2025–2026 reviews) · homemade sweets: tofu shiratama in three flavours ¥400, yuzu-honey agar with sea-salt vanilla ice cream (with karigane ¥1,600), chiffon cake, hojicha pound cake (2025–2026 reviews)',
    website: SITE, gmaps: gm('aotake 七条高倉 材木町'), menu_url: null,
    notes: '[Tea café · Shichijo-Takakura near Kyoto Station, a quiet machiya] A quiet tea room in a Taisho machiya ten minutes from Kyoto Station: a pot of Wazuka kabusecha or hojicha with hot water for three or more brews (the first poured by the owner), with tofu shiratama or yuzu-honey agar, looking onto a tiny courtyard. No young children. One diner found the staff tense (November 2025); another noted mosquito coils and hard chairs. Closed Tuesday and Wednesday.',
    chef_bio: { chef_name: null, roles: ['Owner, not named; pours the first cup (May 2026)'], origin: null,
      background: 'Reviewers in 2025–2026 describe an easily missed old house on Takakura near Shichijo, a Taisho-era machiya with old wooden floors and hanging scrolls, one table for four and one for two downstairs, a tatami room upstairs, a courtyard, homemade tea sweets, and a strong focus on brewing each tea well.',
      philosophy: null,
      specialty: 'Pot-brewed Japanese tea; tofu shiratama.',
      anecdotes: [
        { text: '"The space is quite small, and the staff’s tense demeanor made me feel a bit uneasy" — and no matcha (November 2025).', source: R + 'B524723630/' },
        { text: 'April 2026: "the prices on the menu might make you think, \'Is this for just one cup?\' But they provide a teapot and hot water… about 4 or 5 cups in total."', source: R + 'B525640536/' },
        { text: 'May 2026: mosquito repellent burning at the entrance, "so there were definitely some bugs around," and an average hojicha pound cake.', source: R + 'B529963187/' },
      ],
      japanese_sources_summary: '食べログ: aotake、カフェ・甘味、下京区七条通高倉材木町485、JR京都駅・京阪七条駅から徒歩8分、月木金 11:00〜16:30 (L.O. 16:00)、土日祝 11:00〜17:00、火水休み、6月10日〜7月上旬は休業など、予約可、未就学児は入店不可、1階椅子席6・2階座敷10、禁煙、現金かPayPayのみ。口コミ (2025年3月〜2026年8月、英語): 大正時代の町家、坪庭、急須とお湯で何煎も、和束のかぶせ茶1,400円、ほうじ茶、煎茶、雁ヶ音、和紅茶、中国茶、豆腐白玉3種400円、柚子蜂蜜の寒天と海洋深層水のバニラアイス (雁ヶ音付き1,600円)、シフォンケーキ、ほうじ茶のパウンドケーキ、一煎目は店主が淹れる、店が狭くスタッフが緊張気味・抹茶がないという声、入口の蚊取り線香と虫、椅子が硬い。',
      confidence: 'medium', sources: [TB, SITE, R + 'B503492888/', R + 'B506424662/', R + 'B516860996/', R + 'B517235960/', R + 'B524723630/', R + 'B525640536/', R + 'B527387900/', R + 'B528658563/', R + 'B529963187/', R + 'B533310354/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Quiet room; no preschool children; shoes off upstairs.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通高倉材木町485',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.989001, 135.762916); cross-checked: GSI 京都府京都市下京区材木町485番地 (lot) 35m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517235960/', R + 'B533310354/'],
    price_note: 'Prices from 2025–2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kabusecha from Wazuka (pot, several brews)', '¥1,400', 'Tea', 'ask', 'ask', 'September 2025.', 'japanese_tea'),
      it('', '', 'Tofu shiratama, three flavours', '¥400', 'Sweets', 'ask', 'ask', 'September 2025.', 'shiratama'),
      it('', '', 'Yuzu-honey agar with vanilla ice cream and karigane tea', '¥1,600', 'Set', 'ask', 'no', 'August 2026.', 'kanten'),
    ] }, {
    cuisine: '坪庭のある大正時代の町家の日本茶のカフェ (2025〜2026年の口コミ)・急須とお湯で何煎も楽しむお茶: 和束のかぶせ茶1,400円、ほうじ茶、煎茶、雁ヶ音、和紅茶、中国茶 (2025〜2026年の口コミ)・手作りの甘味: 豆腐白玉3種400円、柚子蜂蜜の寒天とバニラアイス (雁ヶ音付き1,600円)、シフォンケーキ、ほうじ茶のパウンドケーキ (2025〜2026年の口コミ)',
    neighborhood: '七条高倉、京都駅の近く。京都駅から徒歩約8分',
    gf_detail: '要確認: お茶や豆腐白玉は合うかもしれないが、シフォンケーキやパウンドケーキもある (2025〜2026年の口コミ)。',
    vegan_detail: '要確認: お茶や寒天は植物性かもしれないが、ケーキやバニラアイスは不可 (2025〜2026年の口コミ)。',
    notes: '[日本茶カフェ・京都駅近くの七条高倉、静かな町家] 京都駅から10分、大正時代の町家の静かな茶房。和束のかぶせ茶やほうじ茶を急須とお湯で3煎以上 (一煎目は店主が淹れる)、豆腐白玉や柚子蜂蜜の寒天とともに、小さな坪庭を眺めながら。未就学児は不可。スタッフが緊張気味だったという声 (2025年11月) や、蚊取り線香と硬い椅子の声も。火・水曜休み。',
  });
}

// ================================================================ 手鞠鮨と日本茶 宗田
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26030598/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://souden-kyoto.jp/';
  const LD = day(['11:00', '16:00'], ['18:00', '22:00']); const L = day(['11:00', '16:00']);
  put({
    id: 'kyoto_souden_temari', name: '手鞠鮨と日本茶 宗田 (SOUDEN)', category: 'OMNI',
    lat: 35.008906, lng: 135.756719, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura comes with the sets, and the shop says it cannot adjust dishes for allergies (Tabelog; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: temari sushi of fish and roe, chawanmushi, wagyu at dinner (reviews); no individual requests (Tabelog).',
    hours_raw: 'Tabelog: lunch 11:00–16:00 (last order 15:00) Mon and Wed–Sun; dinner 18:00–22:00 (last order 21:30) Wed–Sun; closed Tuesday (and Monday dinner), open on holidays. Reservations: parties over five by phone; changes and cancellations by 16:00 the day before; at least one set per person (preschool children excepted); no individual requests for allergies or dislikes. 30 seats at the counter and tables, a small garden; non-smoking; cards and PayPay; children welcome with notice. Bento to take away (official site). Opened 3 April 2018 (Tabelog).',
    hours: { 0: L, 2: LD, 3: LD, 4: LD, 5: LD, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinmachi-Sanjo — 6 min walk from Karasuma Oike Stn',
    cuisine: 'Bite-size temari sushi, each with its own topping, sauce and garnish, with Japanese tea (official site; reviews) · lunch sets: weekday "Enman" set of thirteen temari, a set with tempura and chawanmushi ¥4,800 (+¥300 for a parfait) (August–September 2026); tea tasting set of gyokuro, karigane and more · dinner "Hanakagari" kaiseki: smoked sashimi, katsuo cutlet, guji matsukasa-age, charcoal-grilled wagyu with black-tea miso, temari of shrimp and caviar, ikura, egg with truffle (September 2026) · seen: sea bream with its roe, marinated mackerel, scallop with black olive and basil cheese, buri with miso (July 2026)',
    website: SITE, gmaps: gm('手鞠鮨と日本茶 宗田 町頭町'), menu_url: SITE,
    notes: '[Temari sushi & tea · Shinmachi-Sanjo, a counter by a small garden] A calm, stylish room with a hearth and a garden where water runs over rock, serving trays of jewel-like temari sushi — each piece its own topping and sauce — with Japanese tea tastings, and a temari kaiseki at night. Lunch around ¥4,800. Some find it more about looks than flavour: one diner thought the sushi pre-made (October 2026). No allergy adjustments. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: ['Not named; operated by 有限会社ミレニアムテクノロジーインク (NTA invoice register for Tabelog’s number T3120002028537)'], origin: null,
      background: 'Opened 3 April 2018 (Tabelog). The official site presents temari sushi and Japanese tea at Shinmachi-Sanjo in four languages, with bento of the same temari to take home. Reviewers in 2026 describe roomy tables and counter, a small garden with spring water, a hearth where tea is prepared, and attentive staff who checked when a diner slowed down (September 2026).',
      philosophy: null,
      specialty: 'Temari sushi set; Japanese tea tasting.',
      anecdotes: [
        { text: 'October 2026: the sushi came within two minutes and "it seemed like the sushi had been pre-made, so it lacked freshness and felt more focused on presentation than flavor."', source: R + 'B537002066/' },
        { text: 'September 2026: a dozen inventive pieces, but "I felt a bit of palate fatigue towards the end" — and the staff asked kindly whether something was wrong when the diner slowed.', source: R + 'B536424285/' },
      ],
      japanese_sources_summary: '公式サイト (souden-kyoto.jp): 手鞠鮨と日本茶 宗田、京都・新町三条、昼の部・夜の部、お弁当 (宗田の手鞠鮨を持ち帰りで)、日本語・英語・繁体字・簡体字、食材が多いので個別の対応は不可。食べログ: 寿司、中京区町頭町110-1、烏丸御池駅から徒歩約6分、昼11:00〜16:00 (L.O. 15:00) 月・水〜日、夜18:00〜22:00 (L.O. 21:30) 水〜日、火曜休み (月曜は夜休み)、祝日は営業、6名以上は電話予約、変更・キャンセルは前日16時まで、1人1セット以上、アレルギー・苦手な食材の個別対応不可、30席、禁煙、カード・PayPay可、2018年4月3日オープン、インボイスは有限会社ミレニアムテクノロジーインク。口コミ (2026年7月〜10月、英語): 平日限定の円満十三手鞠、天ぷらと茶碗蒸し付きのランチ4,800円 (パフェ+300円)、日本茶の飲み比べ (玉露、雁ヶ音)、夜の花篝会席 (燻製の刺身、鰹カツ、ぐじの松笠揚げ、和牛と紅茶味噌の炭火焼き、海老とキャビア・いくら・卵とトリュフの手鞠)、鯛と鯛の子、しめ鯖、帆立と黒オリーブとバジルチーズ、鰤と味噌、庭と湧き水、囲炉裏、作り置きのようで新鮮さに欠けるという声、終盤に味が重なり疲れるという声。',
      confidence: 'medium', sources: [SITE, TB, R + 'B532130717/', R + 'B532815223/', R + 'B533123355/', R + 'B533513878/', R + 'B534553857/', R + 'B535969153/', R + 'B536424285/', R + 'B536606088/', R + 'B536699043/', R + 'B537002066/'] },
    cultural_comfort: { level: 'english', note: 'Official site in English and Chinese; online booking.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区町頭町110-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site live; Tabelog reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.008906, 135.756719); cross-checked: GSI 京都府京都市中京区町頭町110番地 (lot) 40m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535969153/'],
    price_note: 'Price from September 2026; one set per person.', last_checked: TODAY, items: [
      it('', '', 'Temari sushi lunch with tempura and chawanmushi', '¥4,800', 'Lunch', 'no', 'no', 'September 2026; parfait +¥300.', 'temari_sushi'),
      it('', '', 'Japanese tea tasting set', null, 'Tea', 'ask', 'ask', 'August 2026.', 'japanese_tea'),
    ] }, {
    cuisine: '一つずつネタ、ソース、薬味が違う一口の手鞠鮨と日本茶 (公式サイト、口コミ)・昼は平日限定の十三個の「円満」セット、天ぷらと茶碗蒸し付きのセット4,800円 (パフェ+300円) (2026年8〜9月)、玉露や雁ヶ音などの日本茶の飲み比べ・夜は「花篝」の会席: 燻製の刺身、鰹カツ、ぐじの松笠揚げ、和牛の紅茶味噌の炭火焼き、海老とキャビア・いくら・卵とトリュフの手鞠 (2026年9月)・口コミでは鯛と鯛の子、しめ鯖、帆立と黒オリーブとバジルチーズ、鰤と味噌 (2026年7月)',
    neighborhood: '新町三条。烏丸御池駅から徒歩6分',
    gf_detail: 'グルテンフリーではない: セットに天ぷらが付き、アレルギーへの個別対応はできないとのこと (食べログ、口コミ)。',
    vegan_detail: 'ヴィーガン不可: 魚や魚卵の手鞠鮨、茶碗蒸し、夜は和牛 (口コミ)。個別対応はなし (食べログ)。',
    notes: '[手鞠鮨と日本茶・新町三条、小さな庭のカウンター] 囲炉裏と、岩肌を水が流れる小さな庭のある落ち着いた店。一つずつネタとソースの違う宝石のような手鞠鮨を日本茶の飲み比べとともに、夜は手鞠鮨の会席も。昼は4,800円ほど。見た目重視と感じる人もいて、作り置きのようだったという声も (2026年10月)。アレルギーの対応はなし。火曜休み。',
  });
}

// ================================================================ みます屋 おくどはん
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26027328/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '23:00']); const SU = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_mimasuya_okudohan', name: 'みます屋 おくどはん (Mimasuya Okudohan)', category: 'OMNI',
    lat: 35.009077, lng: 135.766531, cuisine_type: 'obanzai',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura, spring rolls and soy-seasoned obanzai (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based obanzai, fish, meat (2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sat 11:30–15:00 (last order 14:30) and 17:30–23:00 (last order 22:30); Sun and holidays 11:30–15:00 and 17:30–22:00; closed Monday. Same-day phone bookings and Tabelog online booking (2026 reviews). 50 seats — 20 downstairs incl. a counter by the open kitchen, 30 upstairs, private rooms for 3–16; non-smoking with a smoking area; children welcome; cards, transit IC, e-money and PayPay. Tabelog lists no service charge.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: SU }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sanjo near Kyoto City Hall — 3 min walk from Kyoto Shiyakusho-mae Stn',
    cuisine: 'An obanzai izakaya in a machiya, named for the Kyoto word for a kamado stove: rice, obanzai and local sake (October 2026) · assorted obanzai of nine kinds ¥1,100 (October 2026), grilled fish of the day in Saikyo miso ¥880, sashimi, agedashi tofu, rice balls, tsukune wrapped in yuba as tempura, spring rolls of mochi, mozzarella and mentaiko, a pork-beef-chicken platter (2026 reviews) · lunch: grilled saba-miso and dashimaki set ¥1,280; Saikyo-yaki with a dessert set and homemade ohagi (October 2026) · courses ¥2,980 and ¥3,980 (October 2026) · Fushimi sake and local beer (reviews)',
    website: null, gmaps: gm('みます屋 おくどはん 丸屋町'), menu_url: null,
    notes: '[Obanzai izakaya · Sanjo near City Hall, a machiya named for its kamado] A two-floor machiya near Kyoto City Hall serving obanzai with Fushimi sake: a nine-kind obanzai platter for ¥1,100, Saikyo-miso grilled fish, yuba-wrapped tsukune tempura, and ¥1,280 lunch sets with homemade ohagi. Courses from ¥2,980. A sister of The みます屋 on Pontocho. One solo diner at the counter felt in the way of the busy kitchen (September 2026). Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Not named in a source; sister shop The みます屋 (Pontocho, 26004114)'], origin: null,
      background: 'Reviewers in 2026 describe a calm machiya restaurant on Sanjo near Kyoto City Hall, its name the Kyoto dialect for a kamado, with a counter facing an open kitchen, partitions upstairs, bright and attentive staff, and a crowd of both tourists and locals. Its name is shared with The みます屋 on Pontocho (26004114 in the crawl).',
      philosophy: null,
      specialty: 'Nine-kind obanzai platter; Saikyo-miso grilled fish.',
      anecdotes: [
        { text: 'September 2026: at the counter "it felt like I was eating in a corner of the busy kitchen, and I felt bad about placing my orders."', source: R + 'B535969249/' },
        { text: '"The name \'Okudohan\' refers to a \'kamado\' in the Kyoto dialect." — October 2026.', source: R + 'B538008196/' },
      ],
      japanese_sources_summary: '食べログ: みます屋 おくどはん、居酒屋・創作料理・日本料理、中京区三条御幸町通上ル丸屋町318-3、京都市役所前駅から徒歩3分、火〜土 11:30〜15:00 (L.O. 14:30)・17:30〜23:00 (L.O. 22:30)、日祝 11:30〜15:00・17:30〜22:00、月曜休み、50席 (1階20、2階30)、個室3〜16名、禁煙 (喫煙所あり)、子供可、カード・交通系IC・電子マネー・PayPay可。口コミ (2026年9月〜10月、英語): 店名は京言葉のかまど、おばんざい9種盛り1,100円、本日の西京焼き880円、お造り、揚げ出し豆腐、おにぎり、つくねの湯葉巻き天ぷら、餅とモッツァレラと明太子の春巻、豚・牛・鶏の盛り合わせ、ランチの鯖味噌焼きとだし巻きの定食1,280円、西京焼きとデザートのセット、手作りのおはぎ、コース2,980円・3,980円、伏見の日本酒、地ビール、カウンターは忙しい厨房の隅のようで注文しづらかったという声、明るく丁寧なスタッフ。',
      confidence: 'medium', sources: [TB, R + 'B534497968/', R + 'B535946733/', R + 'B535969249/', R + 'B536762708/', R + 'B536934326/', R + 'B537927728/', R + 'B538008196/', R + 'B538047281/', R + 'B538127393/', R + 'B538447656/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Obanzai platters to point at; counter or upstairs rooms.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区三条御幸町通上ル丸屋町318-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009077, 135.766531); cross-checked: GSI 京都府京都市中京区丸屋町318番地 (lot) 29m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B538008196/', R + 'B538047281/', R + 'B538447656/'],
    price_note: 'Prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Assorted obanzai, nine kinds', '¥1,100', 'Obanzai', 'ask', 'no', 'October 2026.', 'obanzai'),
      it('', '', 'Grilled fish of the day in Saikyo miso', '¥880', 'Grill', 'ask', 'no', 'October 2026.', 'saikyo_yaki'),
      it('', '', 'Saba-miso and dashimaki lunch set', '¥1,280', 'Lunch', 'ask', 'no', 'October 2026.', 'teishoku'),
    ] }, {
    cuisine: '店名は京言葉の「かまど」、町家のおばんざい居酒屋で、ご飯とおばんざいと地酒 (2026年10月)・おばんざい9種盛り1,100円 (2026年10月)、本日の西京焼き880円、お造り、揚げ出し豆腐、おにぎり、つくねの湯葉巻き天ぷら、餅とモッツァレラと明太子の春巻、豚・牛・鶏の盛り合わせ (2026年の口コミ)・昼は鯖の味噌焼きとだし巻きの定食1,280円、西京焼きのデザートセットと手作りのおはぎ (2026年10月)・コース2,980円・3,980円 (2026年10月)・伏見の日本酒と地ビール (口コミ)',
    neighborhood: '三条御幸町。京都市役所前駅から徒歩3分',
    gf_detail: 'グルテンフリーではない: 天ぷら、春巻、醤油で味付けしたおばんざい (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 出汁のおばんざい、魚、肉 (2026年の口コミ)。',
    notes: '[おばんざい居酒屋・三条御幸町、かまどの名の町家] 市役所近くの2階建ての町家で、伏見の酒とおばんざいを。9種のおばんざい盛り合わせ1,100円、西京焼き、つくねの湯葉巻き天ぷら、昼は手作りのおはぎ付きの1,280円の定食。コースは2,980円から。先斗町の The みます屋 の姉妹店。カウンターは忙しい厨房の隅のようで注文しづらかったという声も (2026年9月)。月曜休み。',
  });
}

save();
