// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first; worker osw1 (lane: Tabelog id mod 4 = 0), batch 14.
//   + コプチャンち 心斎橋店 Kopuchan Chi (Korean: beef small-intestine gopchang on the hot plate, Shinsaibashi-suji, 2022)
//   + 肉と魚と酒 雄 心斎橋店 Yuu (late izakaya with a hundred-dish Japanese, Western and Chinese menu, Minami-Shinsaibashi)
//   + 難波 鉄板焼き Sublime (Kobe and black wagyu teppanyaki courses, a Namba outpost of Azabu-Juban Sublime)
//   + 海鮮物語 なんば心斎橋店 Seafood Monogatari (shrimp shabu-shabu and sushi upstairs on Dotonbori, open to 2–3 a.m.)
//   - skip(): 地酒蔵大阪 なんば本店, 焼とんya たゆたゆ 難波千日前店, 寿司 なかご 心斎橋, デリス なんばパークス店,
//     炭火焼とり えんや (難波千日前店 and 難波店), ニューミュンヘン 南大使館, 炭火焼鳥 権兵衛 なんばパークス店,
//     カッシーワ クリスタ長堀店, ミゲルフアニ なんばダイニングメゾン店 — chains (reasons in each skip()).
//   Lane: mod-4 = 0 ids in `queue.mjs osaka next notable 400` after batch 13: 27136664 (ぼんぞ) and 27149612 (TORA鶏YA) still
//   undecided; then 27070804 skip, 27043164 skip, 27106924 skip, 27129148 +, 27011752 skip, 27070368 skip, 27065664 +,
//   27005424 skip, 27052496 skip, 27124864 +, 27095260 skip, 27114440 skip, 27105028 skip, 27016196 +.
//   Chain check for the four kept:
//   - コプチャンち: one shop in shops.jsonl; no other branch found (web search 2026-11-02).
//   - 雄: one shop in shops.jsonl; gnavi lists only this shop (web search 2026-11-02).
//   - Sublime (sublime-g.com): a group of different formats (鮨 Sublime in Meieki, French in Ginza and Ebisu) with three
//     teppanyaki shops (Namba, Sublime Premium Ginza, Ebisu); kept on the group-of-four precedent. Not in data.
//   - 海鮮物語: two shops (this and 御堂筋店, 27143991); the listing says bookings may be moved to the Midosuji branch.
//   None of the four is in data/osaka.json (grep by name, romaji and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw1-14');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27070804', 'Chain flagship: 地酒蔵大阪 has five shops in shops.jsonl (なんば本店, 千日前店, グランフロント店, 梅田DDハウス店, 立ち飲み 地酒蔵大阪); reviews mention "several locations" and "another branch across from NGK".');
skip('27043164', 'Chain: たゆたゆ has five shops in shops.jsonl (北新地 本店, 北新地 DX, 天満, 心斎橋, 難波千日前).');
skip('27106924', 'Same-concept branch of a chain already in data: 寿司 なかご (osaka_sushi_nakago_bettei_shinsaibashi, whose background names "sister shops Sushi Nakago Shinsaibashi"); a third sushi shop at Hilton Plaza West (27140627).');
skip('27011752', 'Chain: Delices is run by fujio-food.com; another branch at Daimaru Shinsaibashi (27113516).');
skip('27070368', 'Chain: 炭火焼とり えんや has six shops on enya-food.jp/brand (赤獅子店, 青獅子店, 難波店, 難波3号店, 梅田店, 難波千日前店) plus 焼鳥 えんや 中津店.');
skip('27052496', 'Chain: 炭火焼とり えんや has six shops on enya-food.jp/brand (赤獅子店, 青獅子店, 難波店, 難波3号店, 梅田店, 難波千日前店) plus 焼鳥 えんや 中津店.');
skip('27005424', 'Chain: New Munchen beer halls in Kobe (神戸大使館, 神戸阪急店), Nishinomiya Gardens and Hanshin Umeda besides this shop (Hot Pepper, gnavi, 4travel).');
skip('27095260', 'Chain: 炭火焼鳥 権兵衛 has shops at Namba Parks, Minami-Horie, Chayamachi, Minamimorimachi, Tennoji MIO and Umekita (gnavi).');
skip('27114440', 'Chain: CASSIWA has five shops (Chayamachi, Ohatsu Tenjin, E-ma Umeda, Tennoji MIO Plaza, Crysta Nagahori; Tabelog listing).');
skip('27105028', 'Chain: ミゲルフアニ (ZATO group) has eight shops in Tokyo, Yokohama, Chiba and Osaka (zato.co.jp).');

// ================================================================ コプチャンち 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27129148/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['10:00', '15:00'], ['16:00', '24:00']); const WE = day(['10:00', '24:00']);
  put({
    id: 'osaka_kopuchan_chi_shinsaibashi', name: 'コプチャンち 心斎橋店 (Kopuchan Chi)', category: 'OMNI',
    lat: 34.674439, lng: 135.502017, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The gopchang is grilled in a secret sauce, and chijimi pancakes are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an offal and pork-belly Korean restaurant; stews include seafood and offal.',
    hours_raw: 'Mon–Fri 10:00–15:00 (last order 14:30) and 16:00–24:00; Sat, Sun and holidays 10:00–24:00; food last order 23:00, drinks 23:30 (Tabelog). Reservations accepted, also on the day (Tabelog; September 2026). Cards, e-money and QR payments (Tabelog). 48 seats, sofas, sports screen; heated-tobacco smoking area (Tabelog). Children and strollers welcome; wheelchair accessible (Tabelog). Opened 15 April 2022 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 1-2-7, LERIFA心斎橋ビル 1F — 3 min from Shinsaibashi Stn exit 5',
    cuisine: 'Korean restaurant specialising in kopchang (beef small intestine), grilled on a hot plate in a secret sauce, finished with bokkeumbap fried in the pan; beef samgyeopsal (Tabelog) · kopchang with perilla leaves, bossam, rice with chanja (July 2026) · samgyeopsal sets with green chillies (July–September 2026) · sundubu jjigae with seafood or offal, gyeran-jjim, seolleongtang and jjigae lunch sets; chijimi; kimchi and namul side dishes (June–September 2026) · courses with all-you-can-drink (Tabelog; 2026 reviews)',
    website: null, gmaps: gm('コプチャンち 心斎橋店'), menu_url: null,
    notes: "[Korean · Shinsaibashi, gopchang under club lights] A bright, Instagram-styled Korean restaurant three minutes from Shinsaibashi Station, built around kopchang: beef small intestine grilled on a hot plate in the house sauce, wrapped in perilla leaves, and finished as fried rice in the same pan. Lunch from 10 a.m. runs to sundubu, seolleongtang and samgyeopsal sets; at night it fills with young groups and K-pop, with all-you-can-drink courses. The sundubu spice level is fixed, so ask if you are sensitive to heat. Bills over ¥10,000 earn a spin of the gacha at the till (August 2026). English, Chinese and Korean menus; Korean-speaking staff.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed); Korean-speaking staff (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: a gopchang specialist landed in Shinsaibashi, "Korean\'s favourite"; club-like, photogenic interior; kopchang grilled on a hot plate with a secret sauce, bokkeumbap to finish, and beef samgyeopsal "available only here in Kansai". Opened 15 April 2022.', philosophy: null, specialty: 'Kopchang on the hot plate; samgyeopsal; sundubu.',
      anecdotes: [
        { text: '"The horumon was juicy (be careful, it\'s hot!) and delicious when wrapped in Korean perilla leaves." — July 2026.', source: R + 'B531833775/' },
        { text: '"The Sundubu didn\'t allow for spice level selection, so if you\'re sensitive to spice, be sure to consult with the staff before ordering." — August 2026.', source: R + 'B534367908/' },
        { text: '"if your bill exceeds JPY 10,000, you can spin a gacha at the register!" — August 2026.', source: R + 'B532875263/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): コプチャンち 心斎橋店、韓国料理・ホルモン・居酒屋、大阪市中央区心斎橋筋1-2-7 LERIFA心斎橋ビル 1F、心斎橋駅5番出口から徒歩3分、月〜金10:00〜15:00・16:00〜24:00、土日祝10:00〜24:00、予約可、カード・電子マネー・QR 可、48席、加熱式たばこの喫煙所、子ども可、英語・中国語・韓国語のメニュー、韓国語のスタッフ、2022年4月15日オープン。店の紹介 (英訳): コプチャン (牛の小腸) の専門店、秘伝のたれで鉄板で焼く、締めのポックンパ、関西でここだけという牛のサムギョプサル。口コミ(2026年6月〜9月): えごまの葉で包むコプチャン、ポッサム、チャンジャ、青唐辛子つきのサムギョプサル、海鮮やホルモンのスンドゥブチゲ、ケランチム、ソルロンタンのランチ、チヂミ、キムチとナムル、飲み放題、K-POP、若い客が多い、1万円以上でガチャ。',
      confidence: 'medium', sources: [TB, R + 'B529479111/', R + 'B531313335/', R + 'B531833775/', R + 'B532233885/', R + 'B532875263/', R + 'B534367908/', R + 'B535518898/', R + 'B535874712/', R + 'B537816930/', R + 'B538214234/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos, Korean-speaking staff (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-2-7 LERIFA心斎橋ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目2番7号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B531833775/', R + 'B529479111/'],
    price_note: 'No dated prices in the sources read.', last_checked: TODAY, items: [
      it('', '', 'Kopchang (beef small intestine) on the hot plate', '', 'Grill', 'ask', 'no', 'Tabelog; July 2026.', 'kopchang'),
      it('', '', 'Bokkeumbap fried in the pan to finish', '', 'Grill', 'ask', 'no', 'Tabelog listing.', 'bokkeumbap'),
      it('', '', 'Sundubu jjigae set (seafood or offal)', '', 'Lunch', 'ask', 'no', 'June 2026 review.', 'sundubu_set'),
    ] }, {
    cuisine: 'コプチャン (牛の小腸) の専門の韓国料理の店で、秘伝のたれで鉄板で焼き、締めは鍋でポックンパ。牛のサムギョプサルも (食べログ)・えごまの葉で包むコプチャン、ポッサム、チャンジャのご飯 (2026年7月)・青唐辛子つきのサムギョプサルのセット (2026年7月〜9月)・海鮮やホルモンのスンドゥブチゲ、ケランチム、ソルロンタンやチゲのランチのセット。チヂミ、キムチとナムルの小皿 (2026年6月〜9月)・飲み放題つきのコース (食べログ、2026年の口コミ)',
    neighborhood: '心斎橋筋1-2-7、LERIFA心斎橋ビル1階。心斎橋駅5番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。コプチャンは秘伝のたれで焼き、チヂミもある。',
    vegan_detail: 'ヴィーガンではありません。ホルモンとサムギョプサルの韓国料理の店で、チゲには海鮮やホルモンが入る。',
    notes: '[韓国料理・心斎橋、クラブのような店のコプチャン] 心斎橋駅から3分の、明るく写真映えする韓国料理の店で、主役はコプチャン。牛の小腸を鉄板で店のたれで焼き、えごまの葉で包んで、最後は同じ鉄板でポックンパに。朝10時からのランチはスンドゥブ、ソルロンタン、サムギョプサルのセット。夜は K-POP が流れ若いグループでにぎわい、飲み放題つきのコースも。スンドゥブは辛さを選べないので、辛いのが苦手なら相談を。1万円以上でレジのガチャが回せる (2026年8月)。英語、中国語、韓国語のメニューがあり、韓国語を話すスタッフも。',
  });
}

// ================================================================ 肉と魚と酒 雄 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27065664/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '02:00']);
  put({
    id: 'osaka_niku_sakana_sake_yuu_shinsaibashi', name: '肉と魚と酒 雄 心斎橋店 (Niku to Sakana to Sake Yuu)', category: 'OMNI',
    lat: 34.670624, lng: 135.502166, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is wide: sashimi and grilled eel sit beside gyoza, tempura, croquettes and dan dan noodles.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat and fish izakaya, as the name says.',
    hours_raw: 'Mon–Sat 17:00–2:00 the next morning (last order 1:30); closed Sundays, though it may open for group events (Tabelog). Reservations accepted; same-day bookings by phone; a 2-hour limit when full; December courses +¥500 (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay (Tabelog). 61 seats: counter, a tatami room for 6–14, tables, a 16-seat room on 2F and basement rooms for 4–20 (Tabelog). Smoking allowed (Tabelog; September 2026). All-you-can-drink ¥1,980 for two hours, also with à la carte (September–October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinsaibashi-suji 2-2-10, 新日本三ツ寺ビル 1F, among snack bars — 5 min from Shinsaibashi and Namba Stns',
    cuisine: 'Izakaya of meat, fish and sake with Japanese, Western and Chinese dishes, about a hundred on the menu plus a blackboard of daily specials (Tabelog; September 2026) · six-kind sashimi platter ¥3,300 (or ¥1,980 for two, half ¥1,500) of kanpachi, hirame, sawara, bluefin tuna, salmon, shime-saba, buri or tai (September–October 2026) · black-truffle "Celebu" pork gyoza ¥680, bluefin toro and takuan roll in Korean seaweed ¥900, black wagyu tataki ¥980, shrimp and mushroom ajillo ¥780, omurice ¥780, chocolate fondant ¥770 (September 2026) · Peking duck ¥1,200–1,320, domestic grilled eel (half) ¥1,800, black wagyu shigureni rice bowl ¥1,200, 10-skewer yakitori platter ¥1,800, tempura platter ¥980, mapo tofu, dan dan noodles, yodare chicken (September–October 2026) · courses with 2 hours of drinks from ¥5,000 (A4 wagyu, sashimi, dim sum; hot-pot courses) (Tabelog)',
    website: null, gmaps: gm('肉と魚と酒 雄 心斎橋'), menu_url: null,
    notes: "[Izakaya · Minami-Shinsaibashi, a hundred dishes until 2 a.m.] A hideaway izakaya on the ground floor of a building of snack bars in Minami-Shinsaibashi, with a menu of about a hundred dishes that runs from thick-cut sashimi to Peking duck, so everyone in a mixed group finds something to order. Favourites in September 2026 were the black-truffle pork gyoza (¥680), a bluefin toro and takuan roll to wrap in Korean seaweed (¥900) and black wagyu tataki (¥980); a half grilled eel was ¥1,800 in October 2026. All-you-can-drink is ¥1,980 for two hours even with à la carte. Rooms on three floors suit groups. It was nearly full after 11 p.m. on an October night; one diner found the busy staff hard to catch. Smoking allowed. Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Chefs and floor staff (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a hidden gem in Minami with carefully chosen sake from across Japan, fresh fish, selected meat, Osaka specialities and authentic Chinese dishes; signature black-truffle gyoza; private rooms for small and large groups; smoking allowed.', philosophy: null, specialty: 'Black-truffle gyoza; sashimi platters; a Japanese, Western and Chinese menu.',
      anecdotes: [
        { text: '"With around 100 menu items, it\'s quite a challenge to choose." — September 2026.', source: R + 'B535550867/' },
        { text: '"I visited after 11 PM, and the restaurant was almost full, which clearly shows its popularity." — October 2026.', source: R + 'B536888346/' },
        { text: '"Domestic Grilled Eel (Half) for JPY 1800. Isn\'t that incredibly cheap?" — October 2026.', source: R + 'B536926120/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 肉と魚と酒 雄 心斎橋店、居酒屋・海鮮・焼き鳥、大阪市中央区心斎橋筋2-2-10 新日本三ツ寺ビル 1F、心斎橋駅・なんば駅から徒歩5分、月〜土17:00〜翌2:00 (L.O.1:30)、日曜定休、予約可、カード・電子マネー・PayPay 可、61席 (座敷、テーブル、2階、地下の個室)、喫煙可、2時間飲み放題つきのコース5,000円から。店の紹介 (英訳): ミナミの隠れ家、全国の日本酒、新鮮な魚、こだわりの肉、大阪の名物、本格中華、名物の黒トリュフの餃子。口コミ(2026年9月〜10月): メニューは100品ほど、黒板の日替わり、刺身の盛り合わせ6種3,300円、黒トリュフの餃子680円、本まぐろのトロたく海苔巻900円、黒毛和牛のたたき980円、えびとマッシュルームのアヒージョ780円、オムライス780円、北京ダック1,200〜1,320円、国産のうなぎ (ハーフ) 1,800円、焼き鳥10本1,800円、天ぷら980円、麻婆豆腐、担々麺、よだれ鶏、飲み放題1,980円、23時過ぎでもほぼ満席、喫煙可、忙しくてスタッフを呼びにくいという声。',
      confidence: 'medium', sources: [TB, R + 'B516725045/', R + 'B535446210/', R + 'B535550867/', R + 'B535894617/', R + 'B535985373/', R + 'B536120505/', R + 'B536663527/', R + 'B536888346/', R + 'B536926120/', R + 'B537199900/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Large menu and a blackboard of specials; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区心斎橋筋2-2-10 新日本三ツ寺ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番10号 (go) 26m. Same building as 餃子 ちびすけ (osaka_gyoza_chibisuke_minamishinsaibashi, address_ja "心斎橋筋2-2-10 新日本三ツ寺ビル 1F-9", 26 m) and お好み焼 三平 (osaka_okonomiyaki_sanpei_shinsaibashi, "心斎橋筋2-2-10 新日本三ツ寺ビル 1F", 21 m), so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535550867/', R + 'B536926120/', R + 'B536120505/'],
    price_note: 'Prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Black-truffle "Celebu" pork gyoza', '¥680', 'Dishes', 'no', 'no', 'September 2026 review.', 'truffle_gyoza'),
      it('', '', 'Bluefin toro and takuan roll in Korean seaweed', '¥900', 'Dishes', 'ask', 'no', 'September 2026 reviews.', 'toro_taku'),
      it('', '', "Today's sashimi assortment (6 kinds)", '¥3,300', 'Sashimi', 'ask', 'no', 'September 2026 review.', 'sashimi_6'),
      it('', '', 'Domestic grilled eel (half)', '¥1,800', 'Dishes', 'ask', 'no', 'October 2026 review.', 'unagi_half'),
    ] }, {
    cuisine: '肉と魚と酒の居酒屋で、和・洋・中の料理は100品ほど、黒板の日替わりも (食べログ、2026年9月)・刺身の盛り合わせ6種3,300円 (2人前は1,980円、ハーフ1,500円)、かんぱち、ひらめ、さわら、本まぐろ、サーモン、しめさば、ぶり、鯛など (2026年9月〜10月)・黒トリュフの豚の「Celebu」餃子680円、韓国のりで巻く本まぐろのトロたく海苔巻900円、黒毛和牛のたたき980円、えびとマッシュルームのアヒージョ780円、オムライス780円、フォンダンショコラ770円 (2026年9月)・北京ダック1,200〜1,320円、国産のうなぎ (ハーフ) 1,800円、黒毛和牛のしぐれ煮の丼1,200円、焼き鳥10本の盛り合わせ1,800円、天ぷらの盛り合わせ980円、麻婆豆腐、担々麺、よだれ鶏 (2026年9月〜10月)・2時間飲み放題つきのコース5,000円から (A4の和牛、刺身、点心、鍋のコース) (食べログ)',
    neighborhood: '心斎橋筋2-2-10、スナックやバーの入る新日本三ツ寺ビル1階。心斎橋駅・なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。刺身やうなぎの横に、餃子、天ぷら、コロッケ、担々麺も並ぶ。',
    vegan_detail: 'ヴィーガンではありません。店の名前のとおり肉と魚の居酒屋。',
    notes: '[居酒屋・南心斎橋、深夜2時まで100品] 南心斎橋のスナックの入るビルの1階の隠れ家の居酒屋で、メニューは100品ほど。厚切りの刺身から北京ダックまであり、好みの違うグループでもそれぞれ食べたいものが頼める。2026年9月の人気は黒トリュフの豚の餃子 (680円)、韓国のりで巻く本まぐろのトロたく (900円)、黒毛和牛のたたき (980円)。2026年10月はうなぎのハーフが1,800円。飲み放題は単品の注文でも2時間1,980円。3つの階に部屋があり、グループ向き。10月のある夜は23時過ぎでもほぼ満席で、忙しいスタッフを呼びにくいという人も。喫煙可。日曜休み。',
  });
}

// ================================================================ 難波 鉄板焼き Sublime
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27124864/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://sublime-g.com/shop/namba-teppan/';
  const H = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_namba_teppanyaki_sublime', name: '難波 鉄板焼き Sublime (Namba Teppanyaki Sublime)', category: 'OMNI',
    lat: 34.666786, lng: 135.501697, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Steak comes with bonito soy sauce, onion soy sauce, salt and wasabi; one October 2026 diner who asked ahead had dietary restrictions met.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu and seafood teppanyaki courses.',
    hours_raw: 'Daily 12:00–15:00 and 17:00–23:00; open year-round; no phone cancellations outside opening hours (Tabelog). Reservations accepted (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 38 seats: an 8-seat counter at the teppan, private rooms (Tabelog; October 2026). Non-smoking; children welcome (Tabelog). Bottled water ¥660 a litre (October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba 3-4-13, 味わいばしビル 6F (the building with a Baskin-Robbins) — 2 min from Namba Stn',
    cuisine: 'Teppanyaki of Kobe beef and black wagyu, a collaboration with Azabu-Juban Sublime, which the shop says held a Michelin star in the 2018–2020 Tokyo guides (Tabelog; official site) · lunch course of soup, a lean and strip-loin steak comparison and dessert ¥3,800 (Tabelog; October 2026) · Classic course: an appetizer box (scallop and shrimp tartare, smoked salmon pâté, wagyu roast beef yukhoe), eel and eggplant terrine, black wagyu in mushroom bouillon shabu-shabu style, live Hyogo abalone on the teppan with Burgundy butter, seasonal vegetables, sirloin and lean wagyu, rice, red miso soup and pickles or garlic rice (+¥1,200), seared wagyu sirloin sushi (¥3,500), ice cream (August 2026) · Christmas courses ¥12,000–18,000 with Yamagata beef (Tabelog, 2026)',
    website: SITE, gmaps: gm('難波 鉄板焼き Sublime'), menu_url: null,
    notes: "[Teppanyaki · Namba, wagyu and live abalone at the counter] A sixth-floor teppanyaki room two minutes from Namba Station, run with Azabu-Juban Sublime, the Tokyo restaurant the shop says held a Michelin star three years running. At the eight-seat counter the chef grills black wagyu and live Hyogo abalone, still moving in front of you, with Burgundy butter. Lunch is the way in: a lean and strip-loin comparison course for ¥3,800. The dinner Classic course adds an appetizer box, a wagyu shabu-shabu and wagyu sirloin sushi. A sushi bar on the same floor belongs to the same group. One October 2026 birthday diner found the course rushed at about an hour, and bottled water was ¥660. A 10% service charge applies.",
    chef_bio: { chef_name: null, roles: ['Teppanyaki chefs (unnamed)'], origin: null, background: 'Shop-maintained Tabelog listing: a collaboration with Azabu-Juban Sublime, "featured in the Michelin Guide Tokyo for 2018, 2019, and 2020"; the finest Kobe beef on the teppan; private rooms. Official site (sublime-g.com) lists 名駅 鮨 Sublime, 難波 鉄板焼き Sublime, 銀座 フレンチ Sublime, Premium 銀座 鉄板焼き Sublime and 恵比寿 鉄板焼き Sublime. Reviews (August 2026) note that a sushi restaurant on the same floor is a sister shop.', philosophy: null, specialty: 'Wagyu and live-abalone teppanyaki courses.',
      anecdotes: [
        { text: '"A giant abalone still moving right in front of me!" — August 2026.', source: R + 'B532973675/' },
        { text: '"I visited this restaurant on a date with my girlfriend, and I’m glad I chose it for a special occasion." — October 2026; dietary restrictions raised in advance were accommodated.', source: R + 'B536801770/' },
        { text: '"However, the course was served within about an hour, and the overall pace of the dishes was a bit too fast for my liking." — October 2026.', source: R + 'B537069825/' },
      ],
      japanese_sources_summary: '公式サイト (sublime-g.com): 店舗は名駅 鮨 Sublime、難波 鉄板焼き Sublime、銀座 フレンチ Sublime、Premium 銀座 鉄板焼き Sublime、恵比寿 鉄板焼き Sublime、2018年・2019年・2020年度ミシュラン3年連続の星。食べログ (店舗会員): 難波 鉄板焼き Sublime、ステーキ・鉄板焼き・日本料理、大阪市中央区難波3-4-13 味わいばしビル 6-D、なんば駅から徒歩2分、毎日12:00〜15:00・17:00〜23:00、年中無休、予約可、サービス料10%、カード可、電子マネー・QR 不可、38席、個室、禁煙、子ども可、麻布十番 Sublime とのコラボの店、神戸牛の鉄板焼き、ランチの赤身とサーロインの食べ比べのコース3,800円、クリスマスのコース12,000円と18,000円。口コミ(2026年7月〜10月): 前菜の箱、穴子となすのテリーヌ、きのこのブイヨンの黒毛和牛のしゃぶしゃぶ、兵庫の活あわびの鉄板焼き、サーロインと赤身、ガーリックライス1,200円、和牛サーロインの炙り寿司3,500円、アイス、カウンター8席、同じ階の寿司の店は姉妹店、事前に相談した食事制限に対応、コースが1時間ほどで早すぎたという声、水が1リットル660円。',
      confidence: 'medium', sources: [TB, SITE, R + 'B531831551/', R + 'B532066585/', R + 'B532973675/', R + 'B532994821/', R + 'B533500249/', R + 'B533693114/', R + 'B533715338/', R + 'B536801770/', R + 'B537069825/', R + 'B537653784/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course dining at the counter or in private rooms; no English menu evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '大阪府大阪市中央区難波3-4-13 味わいばしビル 6-D',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing and group site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目4番13号 (go) 11m. Same building as osaka_robata_motsuni_homura_namba (address_ja "大阪府大阪市中央区難波3-4-13 味わいばしビル 3F"), pinned 2 m away, so this pin is block-level; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B533693114/'],
    price_note: 'Prices from the Tabelog listing (2026) and an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch course: lean and strip-loin wagyu comparison', '¥3,800', 'Lunch', 'ask', 'no', 'Tabelog listing; October 2026.', 'lunch_course'),
      it('', '', 'Garlic rice (change from white rice)', '¥1,200', 'Classic course', 'ask', 'no', 'August 2026 review.', 'garlic_rice'),
      it('', '', 'Seared black wagyu sirloin sushi', '¥3,500', 'Classic course', 'ask', 'no', 'August 2026 review.', 'niku_sushi'),
    ] }, {
    cuisine: '麻布十番 Sublime とのコラボの、神戸牛と黒毛和牛の鉄板焼き。麻布十番の店はミシュランガイド東京2018〜2020で星 (店の説明、食べログ、公式サイト)・ランチのコースはスープ、赤身とサーロインの食べ比べ、デザートで3,800円 (食べログ、2026年10月)・クラシックのコース: 前菜の箱 (ほたてとえびのタルタル、スモークサーモンのパテ、和牛のローストビーフのユッケ風)、穴子となすのテリーヌ、きのこのブイヨンでしゃぶしゃぶ風の黒毛和牛、ブルゴーニュバターの兵庫の活あわびの鉄板焼き、季節の野菜、サーロインと赤身、ご飯と赤だしと漬物かガーリックライス (1,200円追加)、和牛サーロインの炙り寿司 (3,500円)、アイス (2026年8月)・山形牛のクリスマスのコース12,000〜18,000円 (食べログ、2026年)',
    neighborhood: '難波3-4-13、味わいばしビル6階 (サーティワンのあるビル)。なんば駅から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。ステーキには鰹節醤油、玉ねぎ醤油、塩、わさび。2026年10月に事前に相談した人は食事制限に対応してもらえた。',
    vegan_detail: 'ヴィーガンではありません。和牛と魚介の鉄板焼きのコース。',
    notes: '[鉄板焼き・なんば、カウンターで和牛と活あわび] なんば駅から2分のビルの6階の鉄板焼きの店で、麻布十番 Sublime とのコラボ。店によると麻布十番の店は3年連続でミシュランの星。8席のカウンターでシェフが黒毛和牛と、目の前でまだ動く兵庫の活あわびを焼き、ブルゴーニュバターで。入り口はランチで、赤身とサーロインの食べ比べのコースが3,800円。夜のクラシックのコースには前菜の箱、和牛のしゃぶしゃぶ、和牛サーロインの寿司も。同じ階の寿司の店は姉妹店。2026年10月の誕生日の客はコースが1時間ほどで早すぎたと感じ、水は660円だったそう。サービス料10%。',
  });
}

// ================================================================ 海鮮物語 なんば心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27016196/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://kaisenstory.com/';
  const H = day(['17:00', '02:00']); const FS = day(['17:00', '03:00']);
  put({
    id: 'osaka_kaisen_monogatari_namba_shinsaibashi', name: '海鮮物語 なんば心斎橋店 (Seafood Monogatari)', category: 'OMNI',
    lat: 34.668852, lng: 135.502098, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Raw shrimp is dipped in soy sauce, the hot pot ends with ramen, and kushikatsu and tempura are on the menu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya; the hot pots are shrimp and crab broths.',
    hours_raw: 'Mon–Thu and Sun 17:00–2:00 (food last order 1:00, drinks 1:30); Fri and Sat 17:00–3:00 (food 2:00, drinks 2:30) (Tabelog). Reservations accepted; held 15 minutes; you may be sent to the Midosuji branch when full (Tabelog; October 2026). Cards, e-money and QR payments including Alipay and WeChat Pay (Tabelog). 56 seats: counter facing the fish preparation, tables, tatami and sunken seating; a view over Dotonbori (Tabelog; October 2026). Smoking allowed (Tabelog). English, Chinese and Korean menus with photos; English, Chinese and Korean-speaking staff (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: FS, 5: FS, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Dotonbori 1-6-12, ニコービル 2F, overlooking Dotonbori — 5 min from Namba Stn',
    cuisine: 'Seafood izakaya known for shrimp shabu-shabu: large red shrimp eaten raw with soy sauce first, then their heads simmered into a miso, mala or other broth for shabu-shabu, finished with ramen or rice (Tabelog; August–October 2026) · shrimp shabu-shabu courses ¥4,000–5,500 (Tabelog); crab and shrimp shabu-shabu with grilled crab miso (August and October 2026) · sashimi boat platters, "overflowing" sushi, sushi pizza on fried rice with cheese, temari spoon sushi, grilled shellfish and crab shell, grilled eel skewers, fried hamo, kushikatsu, crab cream croquettes (August–October 2026)',
    website: SITE, gmaps: gm('海鮮物語 なんば心斎橋店'), menu_url: null,
    notes: "[Seafood · Dotonbori, shrimp shabu-shabu above the street] A second-floor seafood izakaya on Dotonbori, five minutes from Namba Station, with a view over the street and kitchen open until 2 a.m. (3 a.m. at weekends). The thing to order is shrimp shabu-shabu: big red shrimp you first eat raw with soy sauce, then swish through a broth made rich with their own heads, finishing with ramen in the pot; a crab-and-shrimp version comes with grilled crab miso. Courses run ¥4,000–5,500. Around it are sashimi boats, overflowing sushi, a cheese-loaded sushi pizza and Osaka kushikatsu. It is busy; when full you may be sent to the sister shop on Midosuji, so call ahead. Smoking allowed. English, Chinese and Korean menus and staff.",
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed); multilingual staff (Tabelog)'], origin: null, background: 'Shop-maintained Tabelog listing: sushi and izakaya, original shrimp shabu-shabu (raw in soy sauce, then shabu-shabu in a miso broth, ramen to finish), sashimi platters, overflowing sushi and grilled shellfish from fresh seafood; a counter to watch the fish prepared; two shops (this and the Midosuji branch).', philosophy: null, specialty: 'Shrimp shabu-shabu; sashimi boats.',
      anecdotes: [
        { text: '"Since the shrimp can be eaten raw, you can enjoy it as sashimi, lightly shabu-shabu for a rare taste, or cooked thoroughly" — August 2026.', source: R + 'B533727933/' },
        { text: '"With the a la carte hot pot, you can enjoy up to 7 shrimp per person." — October 2026.', source: R + 'B536823900/' },
        { text: '"There are two locations, and I was directed to a different one from this one. I recommend calling ahead to confirm." — October 2026.', source: R + 'B538494055/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 海鮮物語 なんば心斎橋店、居酒屋・海鮮・串揚げ、大阪市中央区道頓堀1-6-12 ニコービル2F、なんば駅から徒歩5分、月〜木・日17:00〜翌2:00、金土17:00〜翌3:00、予約可 (15分を過ぎると取り消し、混雑時は御堂筋店へ案内することも)、カード・電子マネー・QR (Alipay、WeChat Pay も) 可、56席、カウンター、座敷、掘りごたつ、喫煙可、英語・中国語・韓国語のメニューとスタッフ、えびしゃぶのコース4,000〜5,500円。店の紹介 (英訳): えびしゃぶ (生で醤油、味噌のだしでしゃぶしゃぶ、締めはラーメン)、刺身の盛り合わせ、こぼれ寿司、貝焼き。口コミ(2026年8月〜10月): 生で食べられる大きな赤えび、頭を入れて濃くなるだし、味噌や麻辣のだし、かにとえびのしゃぶしゃぶとかにみその網焼き、舟盛り、寿司ピザ、手まりのスプーン寿司、かに甲羅焼き、うなぎの串、はもの天ぷら、串カツ、かにクリームコロッケ、道頓堀の眺め、もう1店に案内されたので電話で確認をという声。',
      confidence: 'medium', sources: [TB, SITE, R + 'B533727933/', R + 'B534475316/', R + 'B534484564/', R + 'B535655668/', R + 'B536310432/', R + 'B536406700/', R + 'B536823900/', R + 'B536867708/', R + 'B537994747/', R + 'B538494055/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos and staff who speak them (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区道頓堀1-6-12 ニコービル2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区道頓堀一丁目6番12号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB],
    price_note: 'Course prices from the Tabelog listing (2026).', last_checked: TODAY, items: [
      it('', '', 'Shrimp shabu-shabu course (from 5 p.m. seating)', '¥4,000', 'Courses', 'no', 'no', 'Tabelog listing.', 'ebi_shabu_course'),
      it('', '', 'Spicy mala shrimp shabu-shabu course', '¥5,500', 'Courses', 'no', 'no', 'Tabelog listing.', 'mala_ebi_shabu_course'),
      it('', '', 'Crab and shrimp shabu-shabu', '', 'Hot pot', 'ask', 'no', 'August and October 2026 reviews.', 'kani_ebi_shabu'),
      it('', '', 'Sushi pizza', '', 'Sushi', 'ask', 'no', 'August–September 2026 reviews.', 'sushi_pizza'),
    ] }, {
    cuisine: 'えびしゃぶで知られる海鮮の居酒屋: 大きな赤えびをまず生で醤油で食べ、頭を入れて濃くなった味噌や麻辣などのだしでしゃぶしゃぶ、締めはラーメンかご飯 (食べログ、2026年8月〜10月)・えびしゃぶのコース4,000〜5,500円 (食べログ)。かにみその網焼きつきのかにとえびのしゃぶしゃぶ (2026年8月と10月)・刺身の舟盛り、こぼれ寿司、揚げたご飯にチーズの寿司ピザ、手まりのスプーン寿司、貝焼きとかに甲羅焼き、うなぎの串、はもの天ぷら、串カツ、かにクリームコロッケ (2026年8月〜10月)',
    neighborhood: '道頓堀1-6-12、道頓堀を見下ろすニコービル2階。なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。生のえびは醤油で、鍋の締めはラーメン、串カツや天ぷらもある。',
    vegan_detail: 'ヴィーガンではありません。海鮮の居酒屋で、鍋はえびとかにのだし。',
    notes: '[海鮮・道頓堀、通りを見下ろすえびしゃぶ] なんば駅から5分、道頓堀に面したビルの2階の海鮮の居酒屋で、通りを見下ろす眺めがあり、料理は深夜2時まで (週末は3時まで)。頼むべきはえびしゃぶで、大きな赤えびをまず生で醤油で食べ、頭でうまみの出ただしにくぐらせ、最後は鍋でラーメンに。かにとえびの版にはかにみその網焼きがつく。コースは4,000〜5,500円。ほかに刺身の舟盛り、こぼれ寿司、チーズたっぷりの寿司ピザ、大阪の串カツも。混んでいて、満席なら御堂筋の姉妹店に案内されることもあるので電話で確認を。喫煙可。英語、中国語、韓国語のメニューとスタッフ。',
  });
}

save();
