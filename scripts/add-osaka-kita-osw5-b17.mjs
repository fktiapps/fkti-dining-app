// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), core queue, circle umeda; worker osw5 (lane: Tabelog id even), batch 17.
//   Ids checked for parity: 27086248, 27002682, 27095660 (skip), 27124358, 27140988 (all even).
//   + 焼きふぐ 優ふく 北新地店 Yaki Fugu Yufuku (one-chef fugu counter in Dojima: grilled fugu, eel in summer, ¥1,500 hitsumabushi lunch)
//   + まき埜 Makino (100% buckwheat soba in Fukushima, Tabelog Soba 100 2021/2022/2024/2025)
//   + Panyo 北新地 (teppanyaki and steak by weight in a Kitashinchi basement, since 2021)
//   + 坐 THE (nine-seat yakitori omakase of Kozaka chicken in Dojima, since 2024)
//   - skipped 北新地 串かつ凡 離れ 27095660: chain. The operator Fモトアキラ株式会社 (kitchen-dan.jp, read 2026-11-02) says 串かつ凡 has shops in
//     Osaka, Ginza and Paris, and runs 串揚げキッチンだん and 天婦羅 ぼん次 (osaka_tempura_bonji_kitashinchi, already in data) besides.
//     Four or more same-concept shops across three cities, one abroad; a call for the coordinator, reverse if wanted.
//   Chain check: 優ふく: invoice T5120001117479 → 株式会社イデアプラス (NTA register); no other 優ふく found. まき埜: one shop. Panyo: invoice
//   T9120001240145 → 株式会社リブレ (NTA register); one shop. 坐: a September 2026 reviewer calls it the high-end shop of the Goichi group; a
//   different brand from the group's other shops (none in data), so drafted on its own.
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw5-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27095660', 'chain: 串かつ凡 (Fモトアキラ株式会社), shops in Osaka, Ginza and Paris per kitchen-dan.jp; sister brand 天婦羅 ぼん次 in data; coordinator may reverse');

// ================================================================ 焼きふぐ 優ふく 北新地店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27086248/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '23:00']); const S = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_yaki_fugu_yufuku_kitashinchi', name: '焼きふぐ 優ふく 北新地店 (Yaki Fugu Yufuku Kitashinchi ten)', category: 'OMNI',
    lat: 34.696769, lng: 135.498283, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Grilled fugu with three dipping sauces, fugu tempura and kara-age, eel tempura, and a pasta to finish the fugu sukiyaki.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fugu and eel restaurant; the hitsumabushi comes with a fugu bone soup and dashi.',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:30) and 18:00–23:00 (last order 22:30); Sat 11:30–14:00 and 17:00–22:00, by advance reservation (Tabelog lists 16:00–22:00 in the table and 17:00–22:00 in the note); closed Sundays and holidays (Tabelog). Lunch reservations for courses only; lunch payment cash only; ¥500 cover at dinner (Tabelog). Cards at dinner (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 11 seats: a counter of 5 and one table of 5 or 6; smoking allowed at dinner, not at lunch; takeout (Tabelog; May 2026). Opened 6 July 2015 (Tabelog). The chef works alone, so dishes take time (May 2026).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-3-33, ground floor of 新地萬年ビル on Kitashinchi\'s Kamidori — 245 m from Kitashinchi Stn',
    cuisine: 'Fugu restaurant whose signature is "yaki fugu": Nagasaki fugu fillets seasoned and grilled lightly, one by one, like yakiniku, with three dips and shredded green onion; also tiger-fugu sukiyaki, conger eel and eel (Tabelog; May 2026) · courses (Tabelog, tax included): yaki fugu course of six dishes (tessa, grilled fugu, fugu kara-age, zosui) ¥11,200; Yufuku course with grilled fugu and fugu sukiyaki finished with pasta ¥13,800; with grilled fugu and tecchiri ¥13,800; a lunch grilled-fugu course with yubiki, sashimi, kara-age and a mini grilled-fugu bowl (May 2026); a Matsuba crab course in season; hire-zake · lunch: grilled-fugu hitsumabushi ¥1,500 (October 2026), fugu tempura hitsumabushi, both with three small dishes, pickles and fugu bone soup; eel hitsumabushi ¥1,800 and unaju (May–July 2026) · summer eel course: eel sashimi with ponzu, uzaku, grilled eel, tempura, kara-age, clay-pot eel rice (July 2026)',
    website: null, gmaps: gm('焼きふぐ 優ふく 北新地'), menu_url: null,
    notes: "[Fugu · Dojima, grilled fugu from a one-man counter] An eleven-seat fugu restaurant on the ground floor of a Kitashinchi building, run by one chef, known from television for 'yaki fugu': Nagasaki fugu fillets seasoned and grilled piece by piece like yakiniku, smoky and sweet. At lunch the ¥1,500 grilled-fugu hitsumabushi (or fugu tempura) comes with three small dishes and a fugu bone soup, and sells out; eat half as it is, then pour on the dashi. Dinner courses run ¥11,200–13,800, with tessa, kara-age and either tecchiri or a fugu sukiyaki finished with pasta; summer adds eel, even eel sashimi. Lunch is cash only and dishes take time, as the chef works alone.",
    chef_bio: { chef_name: null, roles: ['Chef (unnamed), working alone'], origin: null, background: 'Per the shop-maintained Tabelog listing: specialty "Yaki Fugu", lightly grilled; tiger-fugu sukiyaki with an original dipping sauce; conger eel and eel dishes; opened 6 July 2015. The Tabelog invoice number T5120001117479 is registered to 株式会社イデアプラス (NTA invoice register, read 2026-11-02). Two May 2026 diners write that the chef runs it alone.', philosophy: null, specialty: 'Grilled fugu; fugu hitsumabushi.',
      anecdotes: [
        { text: '"The style of enjoying it involves grilling seasoned fugu fillets one by one, similar to yakiniku, allowing you to savor the different flavors and textures of each part." — May 2026, the luxury lunch grilled-fugu course.', source: R + 'B528737993/' },
        { text: '"It features a rare delicacy: eel sashimi, which you eat with ponzu sauce and condiments." — July 2026, the summer eel course.', source: R + 'B531539793/' },
        { text: '"I ate half and turned the rest into hitsumabushi, which was also exquisite!" — October 2026, a visitor on a trip, the ¥1,500 lunch.', source: R + 'B538186045/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 焼きふぐ 優ふく 北新地店、ふぐ・うなぎ・かに、大阪市北区堂島1-3-33 新地萬年ビル 1F、北新地駅から245m、月〜金11:30〜14:00 (L.O.13:30)、18:00〜23:00 (L.O.22:30)、土11:30〜14:00と夜 (予約制)、日・祝休み、ランチの予約はコースのみ、ランチは現金のみ、ディナーはお通し500円、カード可、11席 (カウンター5、テーブル1)、夜は喫煙可・昼は禁煙、テイクアウト、2015年7月6日オープン、名物の焼きふぐ (Nagasaki のふぐを軽くあぶり、3種のたれと白髪ねぎ)、とらふぐのすき焼き、はも、うなぎ、焼きふぐのコース6品11,200円 (てっさ、焼きふぐ、ふぐの唐揚げ、雑炊)、焼きふぐとふぐすき焼き (〆はパスタ) の優ふくコース13,800円、焼きふぐとてっちりのコース13,800円、Matsuba のカニのコース、ひれ酒。インボイス登録は株式会社イデアプラス。口コミ(2026年5月〜10月): 焼きふぐひつまぶし1,500円、ふぐ天ひつまぶし、小鉢3種、漬物、ふぐのあら汁、売り切れも、うなぎのひつまぶし1,800円、うな重、ランチの焼きふぐのコース (湯引き、刺身、唐揚げ、ミニ焼きふぐ丼)、夏のうなぎのコース (うなぎの刺身とポン酢、うざく、白焼き、天ぷら、唐揚げ、土鍋のうなぎごはん)、テレビで紹介、大将ひとりなので時間がかかる、こわそうだがやさしい大将。',
      confidence: 'medium', sources: [TB, R + 'B516143457/', R + 'B528537345/', R + 'B528589193/', R + 'B528737993/', R + 'B530012883/', R + 'B530730547/', R + 'B531539793/', R + 'B532445414/', R + 'B533657052/', R + 'B538186045/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches and courses; an October 2026 diner came on a trip. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_approx: 'block', address_ja: '大阪府大阪市北区堂島1-3-33 新地萬年ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 39m. osaka_steak_teppan_essence (address_ja "大阪府大阪市北区堂島1-3-33 新地萬年ビル 3F", 0 m) and osaka_kokoya_honten_dojima ("…新地萬年ビル 2F", 4 m) are in the same building, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B538186045/'],
    price_note: 'Course prices from the Tabelog listing (tax included); lunch prices from 2026 reviews.', last_checked: TODAY, items: [
      it('焼きふぐひつまぶし', '', 'Grilled-fugu hitsumabushi lunch with small dishes and fugu bone soup', '¥1,500', 'Lunch', 'ask', 'no', 'October 2026.', 'yakifugu_hitsumabushi'),
      it('', '', 'Eel hitsumabushi lunch', '¥1,800', 'Lunch', 'ask', 'no', 'July 2026.', 'unagi_hitsumabushi'),
      it('', '', 'Yaki fugu course, six dishes', '¥11,200', 'Dinner', 'ask', 'no', 'Tabelog.', 'yakifugu_course'),
      it('', '', 'Yufuku course with grilled fugu and fugu sukiyaki', '¥13,800', 'Dinner', 'no', 'no', 'Tabelog; October 2026.', 'yufuku_course'),
    ] }, {
    cuisine: '名物は「焼きふぐ」のふぐの店: Nagasaki のふぐの身を味つけして焼肉のように一枚ずつ軽く焼き、3種のたれと白髪ねぎで。とらふぐのすき焼き、はも、うなぎも (食べログ、2026年5月)・コース (食べログ、税込): てっさ、焼きふぐ、ふぐの唐揚げ、雑炊の焼きふぐコース6品11,200円、焼きふぐと〆にパスタのふぐすき焼きの優ふくコース13,800円、焼きふぐとてっちりのコース13,800円、湯引き・刺身・唐揚げ・ミニ焼きふぐ丼のランチの焼きふぐコース (2026年5月)、季節の Matsuba のカニのコース、ひれ酒・ランチ: 焼きふぐひつまぶし1,500円 (2026年10月)、ふぐ天ひつまぶし、どちらも小鉢3種、漬物、ふぐのあら汁つき。うなぎのひつまぶし1,800円、うな重 (2026年5月〜7月)・夏のうなぎのコース: ポン酢で食べるうなぎの刺身、うざく、白焼き、天ぷら、唐揚げ、土鍋のうなぎごはん (2026年7月)',
    neighborhood: '堂島1-3-33、北新地の上通りの新地萬年ビルの1階。北新地駅から245m',
    gf_detail: '要確認。グルテンの情報なし。3種のたれの焼きふぐ、ふぐの天ぷらと唐揚げ、うなぎの天ぷら、ふぐすき焼きの〆のパスタ。',
    vegan_detail: 'ヴィーガンではありません。ふぐとうなぎの店で、ひつまぶしにはふぐのあら汁と出汁。',
    notes: '[ふぐ・堂島、大将ひとりの焼きふぐ] 北新地のビルの1階にある11席のふぐの店で、大将がひとりで営む。テレビでも紹介された「焼きふぐ」が名物: 味をつけたNagasaki のふぐを焼肉のように一枚ずつ焼き、香ばしくて甘い。昼は1,500円の焼きふぐひつまぶし (ふぐ天も) に小鉢3種とふぐのあら汁、売り切れることも。半分はそのまま、残りは出汁をかけて。夜のコースは11,200〜13,800円で、てっさ、唐揚げに、てっちりか〆がパスタのふぐすき焼き。夏はうなぎも、うなぎの刺身まで。ランチは現金のみ、大将ひとりなので料理は時間がかかる。',
  });
}

// ================================================================ まき埜
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270108/27002682/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:30', '14:00'], ['18:00', '21:30']); const E = day(['11:30', '14:30']);
  put({
    id: 'osaka_soba_makino_fukushima', name: 'まき埜 (Makino)', category: 'OMNI',
    lat: 34.700192, lng: 135.489416, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Diners in 2026 describe the soba as 100% buckwheat, and inaka soba can be eaten with salt; but the dipping sauce is a bonito-and-soy tsuyu and the tempura is wheat-battered, and nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soba is served with a bonito-based tsuyu; tempura of shrimp and vegetables.',
    hours_raw: 'Lunch Mon, Tue, Thu, Fri 11:30–14:00 (last order 13:45), Sat, Sun and holidays 11:30–14:30 (last order 14:00); dinner Mon, Tue, Thu, Fri 18:00–21:30 (last order 21:00); closed Wednesdays (Tabelog). No lunch bookings, and a queue forms before opening (October 2026); dinner bookings for 18:00–18:30 arrivals; one drink per person; children from school age (Tabelog). PayPay only; no cards or e-money (Tabelog). 16 seats: three tables of 4 and a counter of 4; non-smoking (Tabelog).',
    hours: { 0: W, 1: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '福島6-11-13, ground floor of シャトー西梅田, white walls and a wooden door — 10 min from Fukushima and Osaka Stns, 1 min from the Fukushima 6-chome bus stop',
    cuisine: 'Soba of buckwheat milled in house, firm and smooth, with snacks and about ten sakes at night (Tabelog) · regular soba and thick, flat, grey-brown inaka soba (limited), served with wasabi and salt, soba-yu after (September–October 2026) · shrimp tempura zaru soba (two shrimp, one vegetable) ¥1,950 with inaka soba; tempura soba; spicy grated daikon soba; ume grated daikon soba; assorted tempura; a two-colour soba set with tempura about ¥3,000 (2026) · evening: six-snack platter ¥1,600, inaka soba ¥1,200, junmai daiginjo Omachi 180 ml ¥1,500 (October 2026) · Tabelog Soba 100 in 2021, 2022, 2024 and 2025',
    website: null, gmaps: gm('まき埜 福島 そば'), menu_url: null,
    notes: "[Soba · Fukushima, a Soba 100 house] A sixteen-seat soba house in a quiet street between Fukushima and Osaka stations, on Tabelog's Soba 100 list four times, with a queue before the 11:30 opening. The soba is ground in house, 100% buckwheat by diners' accounts: try the thick, flat, grey-brown inaka soba first with just salt, then the dipping sauce, and finish with the thick soba-yu; the shrimp tempura zaru (¥1,950) is the favourite. Evenings are calmer, for sake with small snacks before the soba. Closed Wednesdays; pay by PayPay.",
    chef_bio: { chef_name: null, roles: ['Soba maker and staff (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: soba of house-milled buckwheat, firm and chewy; side dishes and about ten sakes at night; a warm wooden room; Tabelog Soba 100 in 2021, 2022, 2024 and 2025.', philosophy: null, specialty: 'Inaka soba; shrimp tempura zaru.',
      anecdotes: [
        { text: '"I had never tried soba with salt before, but when I dipped a bit in, the rich aroma and sweetness of the soba really stood out" — September 2026, the last serving of inaka soba.', source: R + 'B536529831/' },
        { text: '"We arrived about 10 minutes before opening, and there were already 9 people in line!" — October 2026.', source: R + 'B537491124/' },
        { text: '"The soba is made with 100% buckwheat and has a wonderfully smooth texture." — October 2026, a regular\'s tempura soba.', source: R + 'B508072608/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): まき埜、そば・居酒屋・天ぷら、大阪市福島区福島6-11-13 シャトー西梅田 1F、JR 福島駅・大阪駅から徒歩約10分、市バス福島六丁目から1分、月・火・木・金11:30〜14:00 (L.O.13:45)、18:00〜21:30 (L.O.21:00)、土・日・祝11:30〜14:30 (L.O.14:00)、水曜休み、ランチは予約不可、夜は18:00〜18:30の来店で予約、ワンドリンク制、小学生から、PayPay 可、カード・電子マネー不可、16席 (4名のテーブル3、カウンター4)、禁煙、自家製粉のそば、夜は酒肴と日本酒約10種、食べログ そば 百名店 2021・2022・2024・2025。口コミ(2025年5月〜2026年11月): 十割そば、田舎そば (数量限定、塩とわさびで)、そば湯、えび天ざるそば1,950円、天ぷらそば、辛味おろしそば、梅おろしそば、天ぷら盛り合わせ、二色そばと天ぷら約3,000円、酒肴六種盛り1,600円、田舎蕎麦1,200円、純米大吟醸 雄町180ml 1,500円、開店前に行列、毎週通う常連、白い壁と木の扉ののれん。',
      confidence: 'medium', sources: [TB, R + 'B508072608/', R + 'B536529831/', R + 'B536621971/', R + 'B537491124/', R + 'B537513025/', R + 'B537600320/', R + 'B538133731/', R + 'B538388227/', R + 'B538416891/', R + 'B538496264/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Queue at lunch; PayPay only (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市福島区福島6-11-13 シャトー西梅田 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市福島区福島六丁目11番13号 (go) 22m; nearest other record osaka_nishi_umeda_ranpu 26 m away at a different address (福島6-11-14); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538133731/', R + 'B538416891/'],
    price_note: 'Prices from October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Shrimp tempura zaru soba (inaka soba)', '¥1,950', 'Soba', 'no', 'no', 'October 2026.', 'ebiten_zaru'),
      it('', '', 'Inaka soba', '¥1,200', 'Soba', 'ask', 'no', 'October 2026.', 'inaka_soba'),
      it('', '', 'Six-snack platter', '¥1,600', 'Evening', 'ask', 'no', 'October 2026.', 'shuko'),
    ] }, {
    cuisine: '自家製粉のそばで、しっかりしたコシとなめらかさ。夜は酒肴と日本酒約10種 (食べログ)・ふつうのそばと、太く平たい灰色がかった田舎そば (数量限定) を、わさびと塩で、最後はそば湯 (2026年9月〜10月)・えび天ざるそば (えび2本と野菜1つ) は田舎そばで1,950円、天ぷらそば、辛味おろしそば、梅おろしそば、天ぷら盛り合わせ、天ぷらつきの二色そば約3,000円 (2026年)・夜: 酒肴六種盛り1,600円、田舎蕎麦1,200円、純米大吟醸 雄町180ml 1,500円 (2026年10月)・食べログ そば 百名店 2021・2022・2024・2025',
    neighborhood: '福島6-11-13、シャトー西梅田の1階、白い壁と木の扉。福島駅・大阪駅から10分、福島六丁目のバス停から1分',
    gf_detail: '要確認。2026年の口コミでは十割そばで、田舎そばは塩でも食べられる。ただしつゆはかつおと醤油、天ぷらは小麦の衣で、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。そばはかつおのつゆで、えびと野菜の天ぷら。',
    notes: '[そば・福島、そば百名店] 福島駅と大阪駅の間の静かな通りにある16席のそば屋で、食べログ そば 百名店に4回選ばれ、11時半の開店前から行列。そばは自家製粉で、口コミでは十割: まず太く平たい灰色がかった田舎そばを塩だけで、それからつゆで、最後は濃いそば湯。人気はえび天ざる (1,950円)。夜は落ち着いていて、日本酒と小さな酒肴のあとにそば。水曜休み、支払いは PayPay。',
  });
}

// ================================================================ Panyo 北新地
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27124358/'; const R = TB + 'dtlrvwlst/';
  const W = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'osaka_panyo_kitashinchi', name: 'Panyo 北新地 (Panyo Kitashinchi)', category: 'OMNI',
    lat: 34.697296, lng: 135.499996, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Teppanyaki courses with a mini burger, meat sushi, pasta, garlic rice and a black curry.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu, lobster, abalone and foie gras teppanyaki.',
    hours_raw: 'Mon–Sat 11:00–15:00 (last order 14:00) and 17:00–22:00 (last order 21:00); closed Sundays (Tabelog). Reservations accepted; children by arrangement (Tabelog). Service charge 10%; private room fee ¥5,000 (Tabelog; March 2026). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, nanaco, QUICPay; no QR (Tabelog). 19 seats: a counter of 13 and a private room of 6; e-cigarettes only at every seat (Tabelog). Opened 20 October 2021 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '曽根崎新地1-7-21, basement of エスパス北新地8, a geometric-patterned building — 3 min from Kitashinchi Stn',
    cuisine: 'Teppanyaki and steak, the main meat grilled on the teppan or over charcoal, and à la carte steak by the gram (Tabelog) · courses (Tabelog, tax included): "Panyo Dinner" of nine dishes with the mini Panyo burger, lobster and fillet steak ¥13,800; trial course of corn soup, a choice of seafood and domestic fillet or a rare black-wagyu cut ¥6,600 (with salad, pasta and coffee, July 2026); lunch steak course, fillet by weight, from ¥2,980; a ¥5,000 lunch course (March 2026) · dishes named in 2023–2026: seared black-wagyu sushi with Hokkaido sea urchin, foie gras, Matsusaka beef, live lobster and abalone, bamboo-charcoal hamburger, garlic rice and black curry (+¥999 each), mango pudding, flambé at the counter',
    website: 'https://panyo-kitashinchi.com/', gmaps: gm('Panyo 北新地'), menu_url: null,
    notes: "[Teppanyaki · Kitashinchi, steak by the gram] A black-themed teppanyaki room in a Kitashinchi basement, open since 2021, with a counter and a VIP private room. Order wagyu by weight, or take the nine-dish ¥13,800 course: meat sushi topped with Hokkaido sea urchin, a mini burger, lobster and fillet steak, then garlic rice or the black curry (¥999 extra). The ¥6,600 trial course and the lunch steak from ¥2,980 are the cheaper ways in. Diners praise the flambé and the manager's service; one found the private-room fee a surprise (March 2026). 10% service; e-cigarettes allowed at every seat.",
    chef_bio: { chef_name: null, roles: ['Teppan chefs and a manager (unnamed)'], origin: null, background: 'Per the shop-maintained Tabelog listing: teppanyaki in the basement of エスパス北新地8, steak by weight, counter and private rooms; opened 20 October 2021. The Tabelog invoice number T9120001240145 is registered to 株式会社リブレ (NTA invoice register, read 2026-11-02).', philosophy: null, specialty: 'Steak by the gram; mini Panyo burger.',
      anecdotes: [
        { text: '"The menu is so impressive that I couldn\'t help but ask, \'Is this really just a trial?\'" — July 2026, the ¥6,600 trial course.', source: R + 'B532741234/' },
        { text: '"However, I encountered a bit of trouble during payment when I was surprised by a charge for the private room that I wasn\'t aware of when making the reservation." — March 2026, a ¥5,000 lunch course.', source: R + 'B525672492/' },
        { text: '"The food was excellent, but what truly stood out was the hospitality from the manager." — August 2026.', source: R + 'B533889445/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Panyo 北新地、鉄板焼き・海鮮・ステーキ、大阪市北区曽根崎新地1-7-21 エスパス北新地8 (地下)、JR 北新地駅から3分、東梅田駅・西梅田駅から5分、月〜土11:00〜15:00 (L.O.14:00)、17:00〜22:00 (L.O.21:00)、日曜休み、予約可、サービス料10%、個室料5,000円、カード・電子マネー可、QR 不可、19席 (カウンター13、個室6)、全席電子たばこのみ、2021年10月20日オープン、メインの肉は鉄板焼きか炭火焼き、アラカルトはグラム数を選べる、ミニ Panyo バーガーとロブスターとヒレステーキの Panyo ディナー9品13,800円、コーンスープと選べる魚介とヒレか希少部位の黒毛和牛のお試しコース6,600円、ヒレステーキをグラムで選べるランチ2,980円。インボイス登録は株式会社リブレ。口コミ(2023年11月〜2026年8月): Hokkaido のウニをのせた黒毛和牛の炙り寿司、フォアグラ、Matsusaka の牛、ロブスター、アワビ、竹炭のハンバーグ、ガーリックライスと黒カレー (各999円追加)、マンゴープリン、フランベ、5,000円のランチコース、個室料に驚いたという声、マネージャーの接客がよい、値段のわりにという声。',
      confidence: 'medium', sources: [TB, 'https://panyo-kitashinchi.com/', R + 'B475130757/', R + 'B475393731/', R + 'B476127133/', R + 'B486411245/', R + 'B517680566/', R + 'B524825737/', R + 'B525672492/', R + 'B532326841/', R + 'B532741234/', R + 'B533889445/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses or steak by weight at a counter (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-7-21 エスパス北新地8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目7番21号 (go) 6m; no other record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (tax included; 10% service extra).', last_checked: TODAY, items: [
      it('', '', 'Panyo Dinner: nine dishes with mini burger, lobster and fillet steak', '¥13,800', 'Dinner', 'no', 'no', 'Tabelog.', 'panyo_dinner'),
      it('', '', 'Trial course: soup, seafood, fillet or rare wagyu cut', '¥6,600', 'Dinner', 'ask', 'no', 'Tabelog; July 2026.', 'trial_course'),
      it('', '', 'Lunch steak, fillet by weight', 'from ¥2,980', 'Lunch', 'ask', 'no', 'Tabelog.', 'cut_lunch'),
    ] }, {
    cuisine: '鉄板焼きとステーキで、メインの肉は鉄板か炭火で、アラカルトのステーキはグラム数で選べる (食べログ)・コース (食べログ、税込): ミニ Panyo バーガー、ロブスター、ヒレステーキの9品の「Panyo ディナー」13,800円、コーンスープと選べる魚介と国産ヒレか希少部位の黒毛和牛のお試しコース6,600円 (サラダ、パスタ、コーヒーつき、2026年7月)、ヒレをグラムで選ぶランチのステーキ2,980円から、5,000円のランチコース (2026年3月)・2023年〜2026年の口コミに出てくる料理: Hokkaido のウニをのせた黒毛和牛の炙り寿司、フォアグラ、Matsusaka の牛、活ロブスターとアワビ、竹炭のハンバーグ、ガーリックライスと黒カレー (各999円追加)、マンゴープリン、カウンターでのフランベ',
    neighborhood: '曽根崎新地1-7-21、幾何学模様のビル、エスパス北新地8の地下。北新地駅から3分',
    gf_detail: '要確認。グルテンの情報なし。鉄板焼きのコースにミニバーガー、肉寿司、パスタ、ガーリックライス、黒カレー。',
    vegan_detail: 'ヴィーガンではありません。和牛、ロブスター、アワビ、フォアグラの鉄板焼き。',
    notes: '[鉄板焼き・北新地、グラムで選ぶステーキ] 2021年からの北新地の地下にある黒を基調にした鉄板焼きの店で、カウンターと VIP の個室。和牛をグラム数で頼むか、9品13,800円のコース: Hokkaido のウニをのせた肉寿司、ミニバーガー、ロブスター、ヒレステーキ、それからガーリックライスか黒カレー (999円追加)。6,600円のお試しコースや2,980円からのランチのステーキなら手ごろ。フランベとマネージャーの接客が好評だが、個室料に驚いたという声も (2026年3月)。サービス料10%、全席電子たばこ可。',
  });
}

// ================================================================ 坐
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27140988/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']); const E = day(['12:00', '23:00']);
  put({
    id: 'osaka_yakitori_the_dojima', name: '坐 (THE)', category: 'OMNI',
    lat: 34.696398, lng: 135.497038, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The omakase runs through yakitori, a salad, shumai and side dishes to a ramen or chicken soba, clay-pot rice or mapo tofu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken omakase.',
    hours_raw: 'Mon–Fri, the day before and after a holiday 17:00–23:00 (last order food 21:30, drinks 22:30); Sat, Sun and holidays 12:00–23:00 (last order food 21:00, drinks 22:30) (Tabelog). Reservation only; children only if eating the adult course; elegant dress asked (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money, PayPay, d Barai, Rakuten Pay, au PAY (Tabelog). 9 counter seats; non-smoking (Tabelog). Opened 13 March 2024 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: '堂島1-5-36, 2F of Rich K.BLDG — 4 min from Kitashinchi Stn',
    cuisine: 'Yakitori omakase of rare Kozaka chicken from Kyotanba, slowly grilled over charcoal, with seasonal side dishes, at a nine-seat counter (Tabelog) · omakase course ¥13,800 (Tabelog, tax included) · dishes named in 2026: Kozaka chicken thigh tataki, coarse-ground mince, neck, heart, liver, a salad, shumai; finishes of ramen, chicken soba, clay-pot rice or mapo tofu; chicken aged six days (September 2026); no chicken sashimi, by design (July 2026)',
    website: null, gmaps: gm('坐 焼鳥 堂島 北新地'), menu_url: null,
    notes: "[Yakitori · Dojima, a Kozaka-chicken omakase] A nine-seat yakitori counter on a second floor in Dojima, open since 2024, that grills only Kozaka chicken from Kyotanba, aged for days, over charcoal. The ¥13,800 omakase moves from a thigh tataki and side dishes such as shumai through neck, heart and liver to a finish of ramen, chicken soba or clay-pot rice; there is no chicken sashimi, by design. A September 2026 diner calls it the high-end shop of the Goichi yakitori group. Reservation only; diners praise the friendly head chef, though one in October 2026 wanted more surprise for the price.",
    chef_bio: { chef_name: null, roles: ['Head chef and grill staff (unnamed)', 'manager'], origin: null, background: 'Per the shop-maintained Tabelog listing: an omakase of rare Kozaka chicken from Kyotanba with seasonal ingredients, slowly charcoal-grilled, nine counter seats; opened 13 March 2024. A September 2026 diner calls it "a high-end version of the Goichi Group"; another met the same griller and owner earlier at "Ryoubou"; a July 2026 diner writes that the grillers came from the former "Bird Oka" in Nakameguro.', philosophy: null, specialty: 'Kozaka chicken yakitori omakase.',
      anecdotes: [
        { text: '"The ramen and mapo tofu served as a finale were of such high quality that they could stand alone as a restaurant offering." — August 2026.', source: R + 'B533481424/' },
        { text: '"For the first time, even the liver tasted good to me!" — July 2026.', source: R + 'B533518924/' },
        { text: '"…the chicken soba was especially tasty." — October 2026, with clay-pot rice to finish.', source: R + 'B538214830/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 坐、焼き鳥、大阪市北区堂島1-5-36 Rich K.BLDG 2F、JR 東西線 北新地駅から徒歩4分、月〜金・祝前日・祝後日17:00〜23:00 (L.O.料理21:30、ドリンク22:30)、土・日・祝12:00〜23:00 (L.O.料理21:00、ドリンク22:30)、予約のみ、子どもは大人と同じコースのみ、上品な服装で、カード・電子マネー・QR 可、カウンター9席、禁煙、2024年3月13日オープン、Kyotanba の希少な Kozaka 鶏と旬の食材のおまかせ、炭火でじっくり、おまかせコース13,800円。口コミ(2026年7月〜10月): Kozaka 鶏のもものたたき、粗挽きのミンチ、せせり、ハツ、レバー、サラダ、焼売、〆のラーメン、鶏そば、土鍋ごはん、麻婆豆腐、6日熟成の鶏、刺身はない、Goichi グループの高級版という声、Ryoubou と同じ焼き手と店主という声、中目黒の Bird Oka 出身の焼き手という声、気さくな大将、値段のわりに驚きがもう少しほしいという声、テーブルがべたついていたという声。',
      confidence: 'medium', sources: [TB, R + 'B532249479/', R + 'B532803741/', R + 'B533481424/', R + 'B533518924/', R + 'B535264648/', R + 'B535294553/', R + 'B535591812/', R + 'B535929354/', R + 'B537984321/', R + 'B538214830/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation-only omakase at a counter (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-5-36 Rich K.BLDG 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目5番36号 (go) 4m; nearest other records (堂島メリーセンタービル, 堂島1-3-16) 28–29 m away at a different address; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course price from the Tabelog listing (tax included).', last_checked: TODAY, items: [
      it('', '', 'Omakase course of Kozaka chicken', '¥13,800', 'Courses', 'ask', 'no', 'Tabelog; July–October 2026.', 'omakase'),
    ] }, {
    cuisine: 'Kyotanba の希少な Kozaka 鶏を炭火でじっくり焼く焼き鳥のおまかせに、旬の一品、9席のカウンター (食べログ)・おまかせコース13,800円 (食べログ、税込)・2026年の口コミに出てくる料理: Kozaka 鶏のもものたたき、粗挽きのミンチ、せせり、ハツ、レバー、サラダ、焼売。〆はラーメン、鶏そば、土鍋ごはん、麻婆豆腐。鶏は6日熟成 (2026年9月)。鶏刺しはコンセプトとして出さない (2026年7月)',
    neighborhood: '堂島1-5-36、Rich K.BLDGの2階。北新地駅から4分',
    gf_detail: '要確認。グルテンの情報なし。おまかせは焼き鳥、サラダ、焼売、一品から、〆のラーメン、鶏そば、土鍋ごはん、麻婆豆腐まで。',
    vegan_detail: 'ヴィーガンではありません。鶏のおまかせ。',
    notes: '[焼鳥・堂島、Kozaka 鶏のおまかせ] 2024年からの堂島のビルの2階にある9席の焼き鳥のカウンターで、Kyotanba の Kozaka 鶏だけを数日熟成させて炭火で焼く。13,800円のおまかせは、もものたたきや焼売などの一品から、せせり、ハツ、レバーと続き、〆はラーメン、鶏そば、土鍋ごはん。鶏刺しはコンセプトとして出さない。2026年9月の口コミでは Goichi グループの高級店とのこと。予約のみ。気さくな大将が好評だが、値段のわりに驚きがもう少しほしいという声も (2026年10月)。',
  });
}

save();
