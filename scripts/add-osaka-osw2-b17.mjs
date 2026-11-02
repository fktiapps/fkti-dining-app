// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — worker osw2, batch 17 (lane: Tabelog id mod 4 = 1).
//   + 和牛一頭買い 焼肉ホルモン黒野 ウラなんば本店 Kurono (whole-cattle Oita wagyu yakiniku in Ura Namba, opened 2024)
//   + 炉端の佐藤 大阪難波店 Robata no Sato (robatayaki and about 50 sakes on Takashimaya Osaka's 9th-floor dining floor)
//   + 裏難波スシトフジ Ura Namba Sushi to Fuji (sushi izakaya with red-vinegar rice, oden and izakaya prices)
//   + 力丸 炉ばた焼 たぬき茶屋 Tanuki Chaya (robatayaki where everything is ¥385; live scallops grilled with butter)
//   Skipped (lane order):
//   - なんば 鮨 宮 27117581 — chain: its Tabelog website is the 難波店 page of 栞庵 やましろ (shiorian-yamashiro.com/nanba/), a sushi and
//     kaiseki group with six other shops (銀座, 吉祥寺, 恵比寿, 新宿東口, 北新地, 名古屋 栄); a September 2026 review notes the old name
//     Yamashiro on Tabelog. Same-concept branch of a 7-shop group.
//   - 東京竹葉亭 なんば店 27046861 — chain: the official site lists five shops (リーガロイヤルホテル店, 南御堂店, なんば店, 西宮店, 名古屋店;
//     chikuyotei.com, read 2026-11-02).
//   - 新世界串かつ ぎふや 難波 27142569 — chain: 株式会社イニシエート's press release (3 August 2026) says ぎふや has expanded mainly in
//     Osaka since March 2022 and that its Fukuoka Tenjin shop is the company's 11th (prdesse.com PDF, read 2026-11-02).
//   Chain check of the four kept:
//   - Kurono: one 焼肉ホルモン黒野; the same people run a sukiyaki 黒野 (a different format). None in data.
//   - Robata no Sato: Tokyo Restaurants Factory's brand page lists two 炉端の佐藤 (中目黒本店, 大阪難波店) beside other brands such as
//     ぬる燗佐藤; none in data. Small group: kept; flagged.
//   - Sushi to Fuji: one shop (Tabelog).
//   - Tanuki Chaya: the 力丸 group's brand page lists one たぬき茶屋 (namba); the group runs other formats. None in data.
//   None is in data/osaka.json (grep by name, romaji and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw2-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27117581', 'Chain: なんば 鮨 宮 is the 難波店 of 栞庵 やましろ, a sushi and kaiseki group with six other shops (shiorian-yamashiro.com).');
skip('27046861', 'Chain: 東京竹葉亭 has five shops (chikuyotei.com).');
skip('27142569', 'Chain: ぎふや has about eleven shops; its Fukuoka Tenjin shop is the operator\'s 11th (株式会社イニシエート press release, August 2026).');

// ================================================================ 焼肉ホルモン黒野 ウラなんば本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27142677/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const W = day(['16:00', '23:00']); const E = day(['11:00', '23:00']);
  put({
    id: 'osaka_yakiniku_kurono_ura_namba', name: '和牛一頭買い 焼肉ホルモン黒野 ウラなんば本店 (Wagyu Ittougai Yakiniku Horumon Kurono Ura nanba honten)', category: 'OMNI',
    lat: 34.66465, lng: 135.505051, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Meat comes with a Kyushu-style or a regular sauce, or salt and wasabi; the menu also has bibimbap soup and namul (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu yakiniku restaurant; kimchi and namul are sides and are not described.',
    hours_raw: 'Mon–Fri, holidays and the days around them 16:00–23:00; Sat and Sun 11:00–23:00 (last food order 22:00, drinks 22:30) (Tabelog). Reservations taken; course changes by phone three days ahead; same-day drops in party size are charged (courses in full, tables ¥5,000 a head) (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay, Alipay, WeChat Pay; no e-money. 120 seats: counter, tables and a second-floor room for up to 50 (Tabelog; reviews).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 4-34, Ura Namba — 5 min from Kintetsu Nippombashi and Namba Stns',
    cuisine: 'Yakiniku of Oita wagyu (grade 4 and above, fed rice and beer lees) bought as whole cattle through direct ties with the Oita Livestock Public Corporation and farms (Tabelog menu) · yukhoe, thick-cut tongue, rare cuts, thick ribeye with tsukimi ponzu, premium wagyu roast beef, tail soup "passed down from my mother", "Dad\'s" skirt soup, hot bibimbap soup, sweet-potato brûlée (Tabelog menu, October 2026; reviews) · courses from about ¥5,000–6,500; all-you-can-drink from ¥6,500 for groups',
    website: TB, gmaps: gm('焼肉ホルモン黒野 ウラなんば本店'), menu_url: M,
    notes: "[Yakiniku · Ura Namba, whole-cattle Oita wagyu] A large, clean yakiniku in Ura Namba, opened in September 2024, built on Oita wagyu bought as whole cattle through direct ties with Oita farms, so courses run from tongue and yukhoe to rare cuts at modest prices. A tail soup said to come from the owner's mother finishes the meal. Diners in 2026 praise the light fat, the green-onion sauce and the value, and families come on weekday evenings; one September diner found the meat sinewy and the service slow. Groups use the second floor.",
    chef_bio: { chef_name: null, roles: ['Owner unnamed (Tabelog)'], origin: null, background: 'Per the Tabelog menu, the house wanted to share Oita wagyu at a great value and visited the Oita Livestock Public Corporation, farms and fattening ranches to set up direct partnerships; its tail soup of beef bones is "passed down from my mother". Tabelog says celebrities come incognito. Opened 29 September 2024.', philosophy: '"The perfect everyday beef you can enjoy any time" (Tabelog menu).', specialty: 'Whole-cattle Oita wagyu; tail soup.',
      anecdotes: [
        { text: '"They offer both Kyushu-style and regular sauces, but the Oita beef is so exquisite that just salt and wasabi are enough." — September 2026.', source: R + 'B535610834/' },
        { text: '"The meat had a lot of sinew and was difficult to chew." — September 2026.', source: R + 'B535051818/' },
        { text: '"Even on a weekday evening, it was quite lively with families dining in." — October 2026.', source: R + 'B537773861/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 和牛一頭買い 焼肉ホルモン黒野 ウラなんば本店、難波千日前4-34、近鉄日本橋駅・なんば駅から徒歩5分、2024年9月29日オープン、月〜金・祝16:00〜23:00、土日11:00〜23:00、120席 (カウンター、テーブル、個室)、2階は50名まで、飲み放題付き6,500円〜、おおいた和牛の一頭買い、母から受け継いだテールスープ、芸能人もお忍びで。メニュー (2026年10月): おおいた和牛 (肉質4等級以上、米とビール粕で肥育)、大分県畜産公社や牧場と直接取引、厚切りリブロースの月見ポン酢、石焼ビビンバスープ、自家製カタラーナ、さつまいものブリュレ、親父のハラミスープ、和牛ローストビーフ。口コミ (2026年8月〜10月): コースでタン、ユッケ、希少部位、ねぎだれ、脂が軽い、九州のタレと普通のタレ、塩とわさびで十分、平日の夜も家族連れでにぎわう、筋が多く提供が遅いという声も (9月)。',
      confidence: 'medium', sources: [TB, M, R + 'B526008109/', R + 'B534310776/', R + 'B534406355/', R + 'B534730040/', R + 'B535051818/', R + 'B535213016/', R + 'B535610834/', R + 'B536786762/', R + 'B536930136/', R + 'B537773861/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pays with Alipay and WeChat Pay (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前4-34',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an October 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前4番34号 (go) 9m. Nearest record アレグロペッシェ (osaka_allegro_pesce_namba, "…難波千日前4-35") is about 15 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026, tax included. Courses about ¥5,000–6,500 (2026 reviews). Diners report ¥5,000–9,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Thick ribeye with tsukimi ponzu (per person)', '¥900', 'Autumn', 'ask', 'no', 'Photo shows two servings.', 'ribeye_ponzu'),
      it('', '', 'Hot bibimbap soup', '¥1,200', 'Autumn', 'ask', 'no', '', 'bibimbap_soup'),
      it('', '', '"Dad\'s" beef skirt soup', '¥680', 'Autumn', 'ask', 'no', '', 'harami_soup'),
      it('', '', 'Homemade sweet-potato brûlée', '¥500', 'Autumn', 'ask', 'no', 'Limited.', 'imo_brulee'),
    ] }, {
    cuisine: '一頭買いのおおいた和牛 (肉質4等級以上、米とビール粕で肥育) の焼肉。大分県畜産公社や牧場と直接取引 (食べログのメニュー)・ユッケ、厚切りタン、希少部位、厚切りリブロースの月見ポン酢、和牛ローストビーフ、「母から受け継いだ」テールスープ、親父のハラミスープ、石焼ビビンバスープ、さつまいものブリュレ (食べログのメニュー、2026年10月、口コミ)・コース約5,000〜6,500円、団体向け飲み放題付き6,500円〜',
    neighborhood: '難波千日前4-34、裏なんば。近鉄日本橋駅・なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。肉は九州のタレ、普通のタレ、塩とわさびで、ビビンバスープやナムルもある (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。和牛の焼肉店で、キムチとナムルはサイド。説明はない。',
    notes: '[焼肉・裏なんば、一頭買いのおおいた和牛] 2024年9月オープンの裏なんばの大きくきれいな焼肉店。大分の牧場との直接取引で一頭買いするおおいた和牛で、タンやユッケから希少部位までのコースを手頃な値段で出す。締めは店主の母から受け継いだというテールスープ。2026年の客は軽い脂、ねぎだれ、お得さを褒め、平日の夜は家族連れも。9月の客の1人は筋が多く提供も遅かったと書く。団体は2階を使う。',
  });
}

// ================================================================ 炉端の佐藤 大阪難波店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27104381/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const BRAND = 'https://tokyo-rf.com/brand/';
  const W = day(['11:00', '14:30'], ['17:00', '22:00']); const E = day(['11:00', '22:00']);
  put({
    id: 'osaka_robata_no_sato_namba', name: '炉端の佐藤 大阪難波店 (Robata no Sato Osaka namba ten)', category: 'OMNI',
    lat: 34.663705, lng: 135.50233, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Robata-grilled fish, meat and vegetables (some with butter soy sauce or miso) sit beside tempura and Kyoto-style oden (Tabelog menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish-and-sake robatayaki; vegetable dishes such as grilled shiitake or peppers exist but are not described.',
    hours_raw: 'Mon–Fri 11:00–14:30 (last order 14:00) and 17:00–22:00 (last order 21:00); Sat, Sun and holidays 11:00–22:00 with a 14:30 lunch cut-over (last order 21:00); closing days follow Takashimaya Osaka (Tabelog). Reservations taken. ¥580 appetizer charge (Tabelog). Cards (incl. UnionPay), transport IC and other e-money, QR incl. Alipay and WeChat Pay. 32 seats (12 counter, 20 table); non-smoking (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 5-1-18, Takashimaya Osaka 9F (Namba Dining Maison) — 1 min from Namba Stn (Midosuji Line) and Nankai Namba',
    cuisine: 'Robatayaki and Japanese sake: seasonal fish, meat and vegetables grilled over charcoal (scallops with butter soy sauce, true hokke, fatty mackerel, Saroma wagyu, chicken neck), tempura, Kyoto-style oden; over 20 seasonal dishes such as yellowtail sashimi and thin-sliced kawahagi (Tabelog menu, October 2026) · lunch sets: tai-meshi gozen, a seasonal 12-item gozen, charcoal-grilled chicken (reviews) · about 50 sakes (Juyondai, Aramasa, Jikon, Nabeshima, Tanaka and more), a Tanaka sake festival from 6 November; all-you-can-drink sake courses from one person',
    website: BRAND, gmaps: gm('炉端の佐藤 大阪難波店'), menu_url: M,
    notes: "[Izakaya · Namba Takashimaya 9F, robata and fifty sakes] A calm robatayaki on the 9th-floor dining floor of Takashimaya Osaka, the Osaka shop of a Nakameguro original, open since 2018. Seasonal fish and vegetables are grilled over charcoal behind the counter, alongside tempura and Kyoto-style oden, with about fifty sakes including rare labels and all-you-can-drink sake courses even for one. Lunch gozen sets are a quiet holiday option. Diners in 2026 enjoy the sake range and the food; one found service slow and courses thin, another that a favourite dish had shrunk.",
    chef_bio: { chef_name: null, roles: ['Kitchen staff unnamed; a brand of Tokyo Restaurants Factory (brand page)'], origin: null, background: 'Per the Tokyo Restaurants Factory brand page, 炉端の佐藤 has a Nakameguro main shop and this Osaka Namba shop, beside the group\'s ぬる燗佐藤 sake bars (Roppongi, Ginza, Marunouchi, Grand Front Osaka and more). Tabelog gives the opening as 15 June 2018.', philosophy: null, specialty: 'Robatayaki with Japanese sake.',
      anecdotes: [
        { text: '"However, it seemed like there weren\'t any experienced staff members, as both the food and drinks took too long to be served." — September 2026, sake course.', source: R + 'B536465664/' },
        { text: '"I absolutely love the Sea Bream with sesame sauce, but I noticed the portion has gotten smaller." — October 2026.', source: R + 'B448170598/' },
        { text: '"Robata no Sato offers all-you-can-drink courses starting from just one person." — October 2026, kaiseki course.', source: R + 'B490402209/' },
      ],
      japanese_sources_summary: 'Tokyo Restaurants Factory のブランドページ: 炉端の佐藤 中目黒本店、炉端の佐藤 大阪難波店、ぬる燗佐藤 (六本木本店、銀座コリドー、大坂 グランフロント大阪南館7F、丸の内など)。食べログ (英語版): 炉端の佐藤 大阪難波店、難波5-1-18 なんばダイニングメゾン 9F (高島屋大阪店)、なんば駅・南海なんば駅から徒歩1分、2018年6月15日オープン、平日11:00〜14:30・17:00〜22:00、土日祝11:00〜22:00、高島屋の休みに準ずる、お通し580円、32席 (カウンター12、テーブル20)、禁煙、日本酒約50種 (十四代、新政、而今、鍋島、田中など)、11月6日から田中の酒祭り、海鮮・肉・野菜の炉端焼きと京風おでん。メニュー (2026年10月): ぶりの刺身、かわはぎの薄造り、九州のしいたけ、京都の万願寺とうがらし、さばの塩焼き、サロマ和牛、天ぷら盛り合わせ、若鶏のせせり炭火焼き、帆立のバター醤油、真ほっけ。口コミ (2026年9月〜10月): 日本酒の飲み放題 (1人から)、鯛めし御膳、季節の12品御膳、炭火焼きの鶏の定食、提供が遅いという声、好物の量が減ったという声。',
      confidence: 'medium', sources: [TB, M, BRAND, R + 'B381253998/', R + 'B448170598/', R + 'B490402209/', R + 'B535474269/', R + 'B536465664/', R + 'B536930636/', R + 'B537028183/', R + 'B537738473/', R + 'B538134936/', R + 'B538271249/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Pays with Alipay and WeChat Pay (Tabelog). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波5-1-18 なんばダイニングメゾン 9F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Brand page and Tabelog listing with an October 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波五丁目1番18号 (go) 5m. Same building (Takashimaya Osaka) as 鯛塩そば 灯花 (osaka_tai_shio_soba_toka_namba, "…なんばダイニングメゾン 8F"), whose pin sits on the GSI point, so this pin is set about 7 m north-west of it to avoid stacking; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026, tax included; ¥580 appetizer charge. Diners report ¥1,000–2,999 at lunch and ¥5,000–9,999 at dinner.', last_checked: TODAY, items: [
      it('', '', 'Scallops grilled with butter soy sauce', '¥1,280', 'Robata', 'no', 'no', '', 'hotate_butter'),
      it('', '', 'True hokke from Hokkaido', '¥1,500', 'Robata', 'ask', 'no', '', 'shin_hokke'),
      it('', '', 'Saroma wagyu steak over charcoal', '¥2,580', 'Robata', 'ask', 'no', '', 'saroma_wagyu'),
      it('', '', 'Shrimp, hamo and seasonal vegetable tempura', '¥1,980', 'Seasonal', 'no', 'no', '', 'tempura'),
    ] }, {
    cuisine: '炉端焼きと日本酒: 季節の魚、肉、野菜の炭火焼き (帆立のバター醤油、真ほっけ、さばの塩焼き、サロマ和牛、若鶏のせせり)、天ぷら、京風おでん、ぶりの刺身やかわはぎの薄造りなど20品以上の季節の料理 (食べログのメニュー、2026年10月)・ランチは鯛めし御膳、季節の12品御膳、炭火焼きの鶏 (口コミ)・十四代、新政、而今、鍋島、田中など約50種の日本酒、11月6日から田中の酒祭り、1人から頼める日本酒の飲み放題コース',
    neighborhood: '難波5-1-18 高島屋大阪店 9F (なんばダイニングメゾン)。なんば駅 (御堂筋線)・南海なんば駅から徒歩1分',
    gf_detail: '要確認。グルテンの情報なし。炭火で焼く魚、肉、野菜 (バター醤油や味噌のものも) のほか、天ぷらと京風おでんがある (食べログのメニュー)。',
    vegan_detail: 'ヴィーガンではありません。魚と日本酒の炉端焼きの店で、しいたけや万願寺とうがらしの焼き物はあるが説明はない。',
    notes: '[居酒屋・なんば高島屋9階、炉端と50種の日本酒] 高島屋大阪店9階のレストランフロアにある落ち着いた炉端焼きで、中目黒の本店の大阪の店、2018年から。カウンターの奥で季節の魚や野菜を炭火で焼き、天ぷらや京風おでんも。日本酒は希少な銘柄を含め約50種で、1人からでも日本酒の飲み放題コースが頼める。ランチの御膳は休日の静かな選択肢。2026年の客は日本酒の品揃えと料理を楽しむ。提供が遅くコースが物足りないという声や、好物の皿が小さくなったという声も。',
  });
}

// ================================================================ 裏難波スシトフジ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27141205/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const W = day(['17:00', '23:30']); const E = day(['12:00', '15:00'], ['16:00', '23:30']);
  put({
    id: 'osaka_ura_namba_sushi_to_fuji', name: '裏難波スシトフジ (Ura Namba Sushi to Fuji)', category: 'OMNI',
    lat: 34.666412, lng: 135.50499, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sushi is served with soy sauce, and the menu also has tempura, fried smelt and oden (Tabelog menu; reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and oden izakaya; no vegan options are described.',
    hours_raw: 'Mon–Fri and the days around holidays 17:00–23:30 (last food order 22:30, drinks 23:00); Sat, Sun and holidays 12:00–15:00 (last order 14:30) and 16:00–23:30; closed 31 December–2 January and some irregular days (Tabelog). Reservations taken; the Sushi Gokai course by phone; pairs may be seated at the counter (Tabelog). No table charge. Cards (incl. UnionPay) and e-money. 70 seats; heated tobacco only in a designated area (Tabelog); a diner could vape at the seat (August 2026). Orders mainly by QR code (August 2026 review).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 2-5-7 2F, Ura Namba — 2 min from Kintetsu Nippombashi; 6 min from Namba Stn',
    cuisine: 'Sushi at izakaya prices with fish sent direct from around Japan, rice in a blend of Edomae red vinegar and Kansai rice vinegar served warm (Tabelog): the chef\'s five-piece set that changes each order, a tuna roll called "I want to hug you", the limited Fuji platter, two-piece nigiri from ¥176, wagyu sushi, sea urchin from Hokkaido and Kumamoto, house-aged bluefin (Tabelog menu, April 2026) · house oden, sashimi platters, grilled fish, sake-steamed clams, fried smelt (reviews) · happy hour',
    website: TB, gmaps: gm('裏難波スシトフジ'), menu_url: M,
    notes: "[Sushi · Ura Namba, red-vinegar sushi at izakaya prices] A clean, spacious second-floor sushi izakaya on Sennichimae's central street, opened in April 2024, pairing red-vinegar sushi rice with house oden at modest prices. Diners in 2026 like the tuna, the grilled fish and the quick staff, and several note many visitors from abroad arriving with guidebooks; one found the tuna pricey, another bits of shell in the raw oysters. It is easy to miss from the street.",
    chef_bio: { chef_name: null, roles: ['Head sushi chef unnamed (Tabelog)'], origin: null, background: 'Per Tabelog, fish comes direct from across Japan, the rice blends Edomae red vinegar with Kansai rice vinegar and is served at a warm temperature, and the soy sauce is chosen to bring out the fish; the head chef changes the five-piece set\'s toppings each time. Opened 11 April 2024.', philosophy: '"Authentic sushi at izakaya prices" (Tabelog).', specialty: 'Red-vinegar sushi; house oden.',
      anecdotes: [
        { text: '"It\'s popular among inbound tourists, who often come in with guidebooks in hand." — October 2026, third visit.', source: R + 'B521329673/' },
        { text: '"Of course, the sushi was great, but the grilled fish was surprisingly delicious for such a low price." — August 2026.', source: R + 'B534150481/' },
        { text: '"The sushi was fresh and quite tasty, but when we ordered the raw oysters, there were some shell fragments left, which affected the texture negatively." — August 2026.', source: R + 'B537241656/' },
      ],
      japanese_sources_summary: '日本語の情報源は未確認。食べログ (英語版): 裏難波スシトフジ、千日前2-5-7 2F、近鉄日本橋駅から徒歩2分、2024年4月11日オープン、平日17:00〜23:30、土日祝12:00〜15:00・16:00〜23:30、12月31日〜1月2日休み・不定休、70席、加熱式たばこのみの喫煙所、チャージなし、全国から直送の魚、江戸前の赤酢と関西の米酢を合わせた温かいシャリ、居酒屋価格の本格寿司、自家製おでん、ハッピーアワー。メニュー (2026年4月): 大将おまかせ5貫1,209円、「抱きしめたい」まぐろの巻物4,399円、限定5食の富士盛り2,749円、和牛のにぎり、北海道と熊本のうに、にぎりは2貫176円〜、自家熟成の本まぐろ。口コミ (2026年8月〜10月): まぐろ、焼き魚が安くておいしい、刺身盛り、酒蒸し、わかさぎの唐揚げ、おでん、QRコードで注文、席で電子たばこ可、きれいで広い、外国からの客が多い、まぐろは高めという声、生牡蠣に殻が残っていたという声。',
      confidence: 'medium', sources: [TB, M, R + 'B521329673/', R + 'B522567319/', R + 'B533360305/', R + 'B533419781/', R + 'B533860397/', R + 'B534150481/', R + 'B536465916/', R + 'B537241656/', R + 'B538087833/', R + 'B538132487/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many visitors from abroad (2026 reviews); orders mainly by QR code. No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-5-7 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with an April 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前二丁目5番7号 (go) 7m. Nearest record (osaka_gion_duck_noodles_namba, "…千日前2-4-10") is about 28 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated April 2026, tax included; no table charge. Diners report ¥3,000–7,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Chef\'s five-piece sushi, per person', '¥1,209', 'Signature', 'ask', 'no', 'Toppings change each order.', 'omakase_5'),
      it('', '', 'Fuji platter (limited, 5 a day)', '¥2,749', 'Signature', 'ask', 'no', '', 'fuji_mori'),
      it('', '', 'House-aged bluefin red-meat nigiri, two pieces', '¥548', 'Nigiri', 'ask', 'no', '', 'maguro_akami'),
      it('', '', 'Wagyu strip-loin nigiri, two pieces', '¥1,099', 'Meat sushi', 'ask', 'no', '', 'wagyu_sushi'),
    ] }, {
    cuisine: '全国から直送の魚で居酒屋価格の寿司。江戸前の赤酢と関西の米酢を合わせた温かいシャリ (食べログ): 注文ごとに変わる大将おまかせ5貫、「抱きしめたい」まぐろの巻物、限定の富士盛り、2貫176円〜のにぎり、和牛のにぎり、北海道と熊本のうに、自家熟成の本まぐろ (食べログのメニュー、2026年4月)・自家製おでん、刺身盛り、焼き魚、酒蒸し、わかさぎの唐揚げ (口コミ)・ハッピーアワー',
    neighborhood: '千日前2-5-7 2F、裏なんば。近鉄日本橋駅から徒歩2分、なんば駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。寿司はしょうゆで、天ぷら、わかさぎの唐揚げ、おでんもある (食べログのメニュー、口コミ)。',
    vegan_detail: 'ヴィーガンではありません。寿司とおでんの居酒屋で、ヴィーガンの選択肢の説明はない。',
    notes: '[寿司・裏なんば、居酒屋価格の赤酢の寿司] 千日前の中央通りのビル2階、2024年4月オープンのきれいで広い寿司居酒屋。赤酢のシャリの寿司と自家製おでんを手頃な値段で出す。2026年の客はまぐろ、焼き魚、手早いスタッフを褒め、ガイドブックを手にした外国からの客が多いと何人もが書く。まぐろは高め、生牡蠣に殻が残っていたという声も。通りからは見落としやすい。',
  });
}

// ================================================================ 力丸 炉ばた焼 たぬき茶屋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27064757/'; const R = TB + 'dtlrvwlst/'; const M = TB + 'dtlmenu/';
  const SITE = 'https://www.rikimarugroup.com/brands/tanukichaya/shops/namba/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'osaka_tanuki_chaya_sennichimae', name: '力丸 炉ばた焼 たぬき茶屋 (Tanuki Chaya)', category: 'OMNI',
    lat: 34.666691, lng: 135.504288, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Robata-grilled seafood, vegetables and skewers come with salt, soy sauce or butter; fried dishes are on the menu too (Tabelog menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: grilled vegetables exist (yam, eggplant, shiitake, corn) but butter and shared grills are used; no vegan options are described.',
    hours_raw: 'Daily 16:00–23:00 (last food order 22:30, drinks 22:45); closed 31 December and 1 January (Tabelog). Reservations taken, same day online too (September 2026 review). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; Osaka City Premium Vouchers accepted (Tabelog). 138 seats with counter and private rooms for 6–8; non-smoking (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 2-6-9, by Namba Walk exit 25 — 3 min from Namba Stn (Midosuji Line)',
    cuisine: 'Robatayaki where almost everything is ¥385: live scallops grilled with butter, turban shells, large clams, sea-bream head, fatty mackerel, hokke, whole squid, mentaiko, natural large shrimp (¥770); grilled yam, eggplant, corn, avocado; yakitori and skewers; grilled rice balls (Tabelog menu, October 2026; reviews) · all-you-can-drink courses from ¥4,000; the "Reiwa" course ¥5,000',
    website: SITE, gmaps: gm('たぬき茶屋 千日前'), menu_url: M,
    notes: "[Izakaya · Sennichimae, ¥385 robatayaki] A big, Japanese-style robatayaki of the 力丸 group beside Namba Walk exit 25, open from 4 PM, where nearly every grilled item costs ¥385. Enter through a round door to a counter facing the grill and the displayed seafood; the butter-grilled live scallop is the signature. Diners in 2026 love the value, the fresh shellfish and the show at the counter, and note the room fills with tourists; one found the meat in a course overcooked and the sashimi weak. Children enjoy the counter.",
    chef_bio: { chef_name: null, roles: ['Grill staff unnamed; a shop of the 力丸 group (brand page)'], origin: null, background: 'Per the 力丸 group\'s brand page, たぬき茶屋 has one shop, in Namba; Tabelog gives the opening as 25 April 2012. An August 2026 diner remembers visiting the site before it was called Tanuki Chaya; an October 2026 diner came after a good visit to a sister shop in Umeda.', philosophy: null, specialty: 'Butter-grilled live scallops; ¥385 robata.',
      anecdotes: [
        { text: '"The atmosphere is inviting as you enter through the round door, leading to the counter seats where you can see the robatayaki being prepared right in front of you." — August 2026.', source: R + 'B533217641/' },
        { text: '"The place was almost full, packed with tourists!!!" — July 2026, second visit.', source: R + 'B532725748/' },
        { text: '"We had kids with us, and it seemed that only the counter seats were available, but the children were thrilled, so it worked out well." — September 2026.', source: R + 'B536421072/' },
      ],
      japanese_sources_summary: '力丸グループのブランドページ: たぬき茶屋 難波店。食べログ (英語版): 力丸 炉ばた焼 たぬき茶屋、千日前2-6-9、なんばウォーク25番出口すぐ、2012年4月25日オープン、毎日16:00〜23:00、12月31日と1月1日休み、138席、6〜8名の個室、禁煙、大阪市プレミアム商品券2026可、全品350円 (税込385円)、名物は活ほたてのバター焼き、飲み放題の宴会4,000円〜、「特製たぬき」令和コース5,000円。メニュー (2026年10月): 活ほたて、さざえ、大あさり、鯛のかぶと、とろさば、ほっけ、いか一杯焼き、明太子、天然大海老770円、長芋、なす、しいたけ、とうもろこし、アボカド、焼き鳥と串、焼きおにぎり。口コミ (2026年7月〜10月): 安くておいしい、新鮮な貝、丸い扉からカウンターへ、目の前で焼く、観光客でいっぱい、子ども連れでもカウンターで喜ぶ、コースの肉が焼きすぎ・刺身は今ひとつという声、梅田の姉妹店から来た客。',
      confidence: 'medium', sources: [TB, M, SITE, R + 'B531969685/', R + 'B532382712/', R + 'B532725748/', R + 'B533217641/', R + 'B533388549/', R + 'B533981492/', R + 'B534926298/', R + 'B534974200/', R + 'B536421072/', R + 'B538296317/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many tourists (July 2026). No English menu or English-speaking staff found in the sources.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前2-6-9',
    existence: { status: 'confirmed', checked: TODAY, note: 'Group brand page and Tabelog listing with an October 2026 menu; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前二丁目6番9号 (go) 10m. Nearest record さかなのじんべえ (osaka_sakana_no_jinbee_namba, "…千日前2-6-6") is about 21 m away, so the pin stays precise; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [M, TB],
    price_note: 'Tabelog menu last updated October 2026, tax included; most items ¥385. All-you-can-drink courses from ¥4,000. Diners report ¥2,000–5,999 a head.', last_checked: TODAY, items: [
      it('', '', 'Live scallop grilled with butter', '¥385', 'Seafood', 'ask', 'no', 'Signature.', 'hotate_butter'),
      it('', '', 'Grilled turban shell', '¥385', 'Seafood', 'ask', 'no', '', 'sazae'),
      it('', '', 'Grilled natural large shrimp', '¥770', 'Seafood', 'ask', 'no', '', 'ebi'),
      it('', '', 'Tsukune skewer', '¥385', 'Skewers', 'ask', 'no', '', 'tsukune'),
    ] }, {
    cuisine: 'ほぼ全品385円の炉端焼き: 活ほたてのバター焼き、さざえ、大あさり、鯛のかぶと、とろさば、ほっけ、いか一杯焼き、明太子、天然大海老 (770円)、長芋、なす、とうもろこし、アボカドの焼き物、焼き鳥と串、焼きおにぎり (食べログのメニュー、2026年10月、口コミ)・飲み放題付きコース4,000円〜、令和コース5,000円',
    neighborhood: '千日前2-6-9、なんばウォーク25番出口すぐ。なんば駅 (御堂筋線) から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。炉端で焼く魚介、野菜、串は塩、しょうゆ、バターで、揚げ物もある (食べログのメニュー)。',
    vegan_detail: 'ヴィーガンではありません。長芋、なす、しいたけ、とうもろこしの焼き物はあるが、バターや共用の焼き台を使い、ヴィーガンの選択肢の説明はない。',
    notes: '[居酒屋・千日前、385円の炉端焼き] なんばウォーク25番出口の横、力丸グループの和の雰囲気の大きな炉端焼きで、夕方4時から開き、焼き物はほぼ全部385円。丸い扉を入ると焼き台と並んだ魚介に面したカウンターがあり、名物は活ほたてのバター焼き。2026年の客は安さ、新鮮な貝、カウンターの実演を愛し、観光客でいっぱいだと書く。コースの肉が焼きすぎ、刺身は今ひとつという声も。子どもはカウンターを喜ぶ。',
  });
}

save();
