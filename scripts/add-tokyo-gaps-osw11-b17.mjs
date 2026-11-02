// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 17.
//   + Ino Cantonese 日本橋 たかせ (Cantonese seafood courses of owner-chef Kenichi Takase; Tabelog Chinese 100 2023/24/26)
//   + さぶろく Saburoku (Hiroshima-style okonomiyaki and Hiroshima snacks; owner Keisuke Yoshida, ex-Hiroshima Carp)
//   + 鮨處つの田 Sushi Dokoro Tsunoda (Edo-style sushi counter with an ice-cooled wooden refrigerator; about 15 years)
//   + 台湾タロイモスイーツ専門店 連珍 Renchin (taro sweets from a century-old Keelung shop; KYOE PLAZA 1F)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 8 ningyocho` (main repo, 2026-11-02): the first four,
//   183, 184, 184 and 185 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address (堀留町1-8-11, 1-16-5, 3-2-10); Renchin shares 2-10-11 (KYOE PLAZA)
//   with five records on upper floors.
//   Chain check. Renchin: a May 2026 review names two Japanese shops (Ningyocho, Takadanobaba) of the Keelung original —
//   a small group with none in data, drafted (brief working line). Ino Cantonese: the chef's earlier shops (Cantonese
//   Yan Ken Takase, Ginza Chuka Takase) are not in data and this is described as fully independent. Others: single shops.
//   Omitted under the brief's abuse/looks line: Tsunoda reviewers' remarks on the chef's appearance (2022, 2025).
//   Invoice/website checks: marufoods.net (Renchin operator page) answered HTTP 429 on 2026-11-02; not used.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-17');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ Ino Cantonese 日本橋 たかせ
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13273526/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:30', '22:30']); const WE = day(['12:00', '15:00'], ['17:30', '22:30']);
  put({
    id: 'tokyo_ino_cantonese_takase_horidome', name: 'Ino Cantonese 日本橋 たかせ (Ino Cantonese Nihonbashi Takase)', category: 'MOM_AND_POP',
    lat: 35.687603, lng: 139.780984, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the shop may decline bookings with wide-ranging allergies (Tabelog). Courses include dim sum, spring rolls, noodles and soy-based sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood-centred Cantonese courses with meat dishes and Jinhua-ham soups.',
    hours_raw: 'Mon, Thu and Fri 17:30–22:30 (last entry 20:30); Sat and Sun 12:00–15:00 (last entry 13:00) and 17:30–22:30 (last entry 20:30); closed Tue and Wed (Tabelog). Reservations; wide-ranging allergies or dislikes may mean a booking is declined, and requests cannot be taken after arrival; late arrival may mean courses are cut short (Tabelog). Cards; no e-money or QR; service charge 10% (Tabelog). 18 seats: 8 at the counter, 3 tables for 6, a private room for 4 (Tabelog). Non-smoking. Opened August 2022 (June 2026 review).',
    hours: { 0: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Horidomecho 1-8-11, 人形町スクエア 1F, on the main road — 3 min from Ningyocho Stn, 6 min from Kodenmacho Stn, 8 min from Bakuroyokoyama Stn',
    cuisine: '"Innovation Cantonese": Cantonese cooking centred on seafood with seasonal Japanese ingredients, the course renewed every two months (Tabelog) · weekend lunch omakase ¥9,680 including tax and service (June 2026) · standard dinner course ¥14,300 (July 2026); Autumn special course ¥25,800 (September 2026) · signature shrimp with mango mayonnaise (June–October 2026) · dishes in 2026: three seasonal steamed dumplings; Shaoxing-marinated seafood; double-boiled soup of winter melon, Jinhua ham and chicken; Hong Kong-style steamed grouper with ginger and scallion; stir-fried shellfish and abalone with fresh karasumi and XO-style sauce; sweet-and-sour pork with pineapple; char siu pie; a choice of seafood fried rice, shrimp wonton noodles or sesame cold noodles · Chinese tea (September 2026)',
    website: TB, gmaps: gm('Ino Cantonese 日本橋 たかせ'), menu_url: null,
    notes: "[Cantonese · Horidome-cho, refined seafood Cantonese from a former hotel head chef] The independent restaurant of Kenichi Takase, for seven years the first head chef of SENSE at the Mandarin Oriental Tokyo, opened in 2022 near Ningyocho and a Tabelog Chinese 100 pick in 2023, 2024 and 2026. The courses, renewed every two months, are light and seafood-led: Hong Kong-style steamed grouper, double-boiled soups, and the signature shrimp in a fresh mango mayonnaise. The Chinese tea is praised as specialist-grade. Weekend lunch at ¥9,680 is the easier way in; dinner runs from about ¥14,300. One April 2025 diner found it no more than polished hotel Chinese, while a September 2026 visitor ranked it among the best Chinese food ever eaten. A June 2026 reviewer says it holds a Michelin star.",
    chef_bio: { chef_name: 'Kenichi Takase', roles: ['Owner-chef ("Fully Independent Store by Experienced Owner Kenichi Takase", Tabelog shop text)'], origin: null,
      background: 'Per the Tabelog shop text: first head chef of SENSE at the Mandarin Oriental Tokyo for seven years; opened Cantonese Yan Ken Takase and Ginza Chuka Takase before this fully independent restaurant. Opened in August 2022 (June 2026 review). Selected for Tabelog Chinese TOKYO 100 in 2023, 2024 and 2026 (Tabelog). A June 2026 review describes it as Michelin-starred.',
      philosophy: 'Cantonese cooking honed over years, combined with seasonal Japanese ingredients, focusing on texture and aftertaste (Tabelog shop text).', specialty: 'Shrimp with mango mayonnaise; seafood courses.',
      anecdotes: [
        { text: '"By the way, the Chinese tea here rivals that of specialty tea shops, and it was the best I\'ve had in a restaurant." — September 2026.', source: R + 'B504307661/' },
        { text: '"The natural sweetness and fruity acidity of fresh mango shine through." — June 2026, shrimp with mango mayonnaise.', source: R + 'B530708158/' },
        { text: '"I couldn\'t help but have high expectations after seeing the chef\'s background, but the result was just average, easy-to-eat Chinese food." — April 2025.', source: R + 'B504307661/' },
      ],
      japanese_sources_summary: '食べログ: Ino Cantonese 日本橋 たかせ、中華料理、海鮮、中国料理 TOKYO 百名店2023・2024・2026、日本橋堀留町1-8-11 人形町スクエア 1F、人形町駅から徒歩3分、月・木・金17:30〜22:30、土日12:00〜15:00、17:30〜22:30、火・水休み、予約可、アレルギーや苦手な食材が多いと予約を断ることも、カード可、サービス料10%、18席 (カウンター8、テーブル3卓、個室)、Kenichi Takase さんの独立店、Mandarin Oriental Tokyo の SENSE の初代料理長を7年、コースは2か月ごとに替わる。口コミ(2025年4月〜2026年10月): 2022年8月オープン、週末の昼のおまかせ9,680円、夜のスタンダード14,300円、秋の特別コース25,800円、名物の海老のマンゴーマヨネーズ、蒸し点心、香港式の清蒸、中国茶、ミシュランの星という声、平凡なホテル中華だという声も。',
      confidence: 'medium', sources: [TB, R + 'B497805847/', R + 'B504307661/', R + 'B530708158/', R + 'B531766771/', R + 'B532294134/', R + 'B532513245/', R + 'B532989225/', R + 'B536323272/', R + 'B537988321/', R + 'B538182442/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Course-only; book online; arrive on time.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Bookings with wide-ranging allergies or dislikes may be declined; no changes after arrival (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋堀留町1-8-11 人形町スクエア 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated April 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.687603, 139.780984); cross-checked: GSI 東京都中央区日本橋堀留町一丁目8番11号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530708158/', R + 'B532294134/', R + 'B536323272/'],
    price_note: 'Course prices from June–September 2026 reviews (lunch includes tax and service).', last_checked: TODAY, items: [
      it('', '', 'Weekend lunch omakase', '¥9,680', 'Courses', 'ask', 'no', 'June 2026; tax and service included.', 'lunch'),
      it('', '', 'Standard dinner course', '¥14,300', 'Courses', 'ask', 'no', 'July 2026.', 'dinner_std'),
      it('', '', 'Autumn special course', '¥25,800', 'Courses', 'ask', 'no', 'September 2026.', 'dinner_special'),
    ] }, {
    cuisine: '「イノベーション広東」: 魚介を中心に旬の日本の食材を合わせる広東料理、コースは2か月ごとに替わる (食べログ)・週末の昼のおまかせ9,680円、税・サービス料込み (2026年6月)・夜のスタンダードコース14,300円 (2026年7月)、秋の特別コース25,800円 (2026年9月)・名物の海老のマンゴーマヨネーズ (2026年6月〜10月)・2026年の料理: 季節の蒸し点心3種、紹興酒漬けの魚介、冬瓜と金華ハムと鶏の蒸しスープ、ハタの香港式の清蒸、生姜とねぎ、貝と鮑の炒め物に生からすみと XO 風のソース、パイナップルの酢豚、叉焼パイ、海鮮チャーハン、海老ワンタン麺、ごまだれの冷やし麺から選ぶ・中国茶 (2026年9月)',
    neighborhood: '日本橋堀留町1-8-11 人形町スクエア 1F、大通り沿い。人形町駅から徒歩3分、小伝馬町駅から徒歩6分、馬喰横山駅から徒歩8分',
    gf_detail: '予約時に要確認。アレルギーが多いと予約を断ることがある (食べログ)。コースには点心、春巻き、麺、醤油のソースも (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない: 魚介中心の広東料理のコースで、肉料理や金華ハムのスープも。',
    notes: '[広東料理・堀留町、元ホテル料理長の洗練された魚介の広東料理] Mandarin Oriental Tokyo の SENSE で7年初代料理長を務めた Kenichi Takase さんの独立店で、2022年に人形町の近くに開き、2023年、2024年、2026年の食べログ中国料理百名店。2か月ごとに替わるコースは軽やかで魚介が中心。香港式の清蒸、蒸しスープ、名物の生のマンゴーを使った海老のマヨネーズ。中国茶は専門店並みと評判。入りやすいのは週末の昼の9,680円で、夜は約14,300円から。2025年4月には洗練されたホテル中華にすぎないという声もあったが、その後の客は人生でも最高の中華のひとつと書く (2026年9月)。2026年6月の口コミはミシュランの星があるという。',
  });
}

// ================================================================ さぶろく
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13249869/'; const R = TB + 'dtlrvwlst/';
  const WK = day(['17:00', '23:00']); const WE = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_saburoku_ningyocho', name: 'さぶろく (Saburoku)', category: 'MOM_AND_POP',
    lat: 35.684777, lng: 139.78304, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Hiroshima-style okonomiyaki layered with soba or udon noodles and a wheat batter, with sweet sauce; gansu is breaded fish cake.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: okonomiyaki with pork, egg and squid tempura; the snacks are meat, offal and seafood.',
    hours_raw: 'Mon, Tue, Thu and Fri 17:00–23:00; Sat and Sun 11:30–14:00 and 17:00–22:00; closed Wednesday (Tabelog). Reservations recommended — full on weekend evenings (March, June 2026). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; no service or table charge (Tabelog). 13 seats: 7 at the counter by the griddle and two tables at the back (Tabelog); the counter is narrow (August 2026). Non-smoking. Opened 13 August 2020 (Tabelog).',
    hours: { 0: WK, 1: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-16-5, 入山ビル 1F, between Ningyocho and Suitengumae near the Amazake Yokocho crossing — 1 min from Ningyocho Stn (Hibiya Line), 4 min from Suitengumae Stn',
    cuisine: 'Hiroshima-style okonomiyaki made in front of you, with soba or udon, plus Hiroshima snacks (2026 reviews) · classic okonomiyaki with squid tempura and green onion ¥1,450 (July 2026); green-onion, double-vegetable or shiso versions ¥1,550, double vegetables and double soba ¥1,400 (Tabelog menu, 2024) · gansu, a breaded fried fish cake, ¥500; oyster gansu ¥600 (Tabelog menu, 2024); kōne beef (2026) · teppan dishes: asparagus with butter ¥800, squid tentacles with butter ¥800 (Tabelog menu, 2024), horumon with salt, tonpei-yaki with kimchi and cheese, tanuki tofu, cheese omelette, sea urchin with cress (2026) · sake and shochu',
    website: TB, gmaps: gm('さぶろく 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Okonomiyaki · Ningyocho, Hiroshima okonomiyaki from a former Carp player] A small Hiroshima-style okonomiyaki counter run by Keisuke Yoshida, a 2002 draft pick of the Hiroshima Carp (June, July 2026 reviews), with baseball mascots by the door. The okonomiyaki is built on the griddle in front of you with soba or udon and a heap of green onion, using little flour and oil, so it eats lighter than it looks. Regulars, including Hiroshima natives, come for the local snacks too: gansu fish-cake fritters, kōne beef, salted horumon. The mood is relaxed and chatty, with high-school baseball on the TV (August 2026). Dishes are served on foil on the griddle and keep cooking, so eat promptly (March 2026). Book for weekend evenings.",
    chef_bio: { chef_name: 'Keisuke Yoshida', roles: ['Owner ("Owned by former professional baseball player Keisuke Yoshida from the Hiroshima Carp", July 2026 review)', 'The master at the griddle ("Chef K", September 2026 review)'], origin: null,
      background: 'Per 2026 reviews: owner Keisuke Yoshida was a second-round draft pick of the Hiroshima Carp in 2002 (June 2026); the shop opened on 13 August 2020, during the COVID-19 pandemic (Tabelog; September 2026). It has appeared on a YouTube channel of Tunnels (May 2026). A September 2026 regular, on a 13th visit, credits "Chef K" with light, low-oil griddle work.',
      philosophy: null, specialty: 'Hiroshima-style okonomiyaki; gansu.',
      anecdotes: [
        { text: '"Hiroshima-style Okonomiyaki uses significantly less flour compared to Kansai-style, allowing the flavors of the vegetables and other ingredients to shine through." — September 2026, 13th visit.', source: R + 'B429430403/' },
        { text: '"Located in Ningyocho, Saburoku is run by Keisuke Yoshida, who was drafted by the Carp in 2002." — June 2026.', source: R + 'B530942534/' },
        { text: '"…they are served on aluminum foil on the teppan, so if you don’t eat quickly, they continue to cook" — March 2026.', source: R + 'B524491318/' },
      ],
      japanese_sources_summary: '食べログ: さぶろく、お好み焼き、日本橋人形町1-16-5 入山ビル 1F、人形町駅 (日比谷線) から徒歩1分、月・火・木・金17:00〜23:00、土日11:30〜14:00、17:00〜22:00、水曜休み、予約可、カード可、電子マネー・QR不可、サービス料・チャージなし、13席 (カウンター7、テーブル)、禁煙、2020年8月13日オープン、Hiroshima のがんす500円、牡蠣のがんす600円、アスパラのバター焼き800円。口コミ(2026年3月〜9月): 元 Hiroshima Carp の Keisuke Yoshida さんの店、広島風お好み焼きはそばかうどん、ねぎたっぷり、定番1,450円、コーネ、ホルモン塩、とんぺい焼き、週末の夜は満席、ホイルの上で焼け続けるので早めに、カウンターが狭いという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B429430403/', R + 'B430086270/', R + 'B524491318/', R + 'B528668680/', R + 'B530877823/', R + 'B530942534/', R + 'B530982170/', R + 'B532456223/', R + 'B534146540/', R + 'B535245458/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose soba or udon; counter in front of the griddle.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-16-5 入山ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated March–September 2026.' },
    pin_source: `Tabelog ${TB} (35.684777, 139.783040); cross-checked: GSI 東京都中央区日本橋人形町一丁目16番5号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B532456223/'],
    price_note: 'Tabelog menu (updated 2024-03-10) and a July 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Classic Hiroshima okonomiyaki (squid tempura, green onion)', '¥1,450', 'Okonomiyaki', 'no', 'no', 'July 2026.', 'classic'),
      it('', '', 'Okonomiyaki: green onion, double vegetables or shiso', '¥1,550', 'Okonomiyaki', 'no', 'no', 'Tabelog menu, 2024.', 'negi'),
      it('', '', 'Hiroshima gansu', '¥500', 'Snacks', 'no', 'no', 'Tabelog menu, 2024.', 'gansu'),
      it('', '', 'Asparagus grilled with butter', '¥800', 'Teppan', 'ask', 'no', 'Tabelog menu, 2024.', 'asparagus'),
    ] }, {
    cuisine: '目の前で焼く広島風お好み焼き、そばかうどん、Hiroshima のつまみも (2026年の口コミ)・いかの天ぷらとねぎの定番1,450円 (2026年7月)、ねぎ、野菜ダブル、大葉1,550円、野菜ダブル・そばダブル1,400円 (食べログのメニュー、2024年)・がんす (パン粉で揚げたかまぼこ) 500円、牡蠣のがんす600円 (食べログのメニュー、2024年)、コーネ (2026年)・鉄板焼き: アスパラのバター焼き800円、げそのバター焼き800円 (食べログのメニュー、2024年)、塩のホルモン、キムチとチーズのとんぺい焼き、たぬき豆腐、チーズオムレツ、雲丹とクレソン (2026年)・日本酒と焼酎',
    neighborhood: '日本橋人形町1-16-5 入山ビル 1F、人形町と水天宮前の間、Amazake Yokocho の交差点の近く。人形町駅 (日比谷線) から徒歩1分、水天宮前駅から徒歩4分',
    gf_detail: 'グルテンフリーではない: そばかうどんを重ねた広島風お好み焼きで、小麦の生地と甘いソース。がんすはパン粉の衣。',
    vegan_detail: 'ヴィーガンではない: 豚肉、卵、いか天のお好み焼き。つまみも肉、ホルモン、魚介。',
    notes: '[お好み焼き・人形町、元 Carp の選手の広島風お好み焼き] 2002年に Hiroshima Carp からドラフト指名された Keisuke Yoshida さんの小さな広島風お好み焼きのカウンターで (2026年6月、7月の口コミ)、入口には野球のマスコット。お好み焼きは目の前の鉄板でそばかうどんとたっぷりのねぎで重ね、粉も油も控えめなので見た目より軽い。Hiroshima 出身の常連も地元のつまみを目当てに通う。がんす、コーネ、塩のホルモン。テレビには高校野球、気さくでくつろいだ雰囲気 (2026年8月)。料理はホイルにのせて鉄板の上に出るので焼け続ける、早めに食べて (2026年3月)。週末の夜は予約を。',
  });
}

// ================================================================ 鮨處つの田
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13133634/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.sushi-tsunoda.com';
  const H = day(['11:30', '13:30'], ['17:00', '21:30']);
  put({
    id: 'tokyo_sushi_tsunoda_ningyocho', name: '鮨處つの田 (Sushi Dokoro Tsunoda)', category: 'OMNI',
    lat: 35.68626, lng: 139.780153, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Nigiri is served with soy sauce or salt, flounder with a liver sauce (2024–26 reviews); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an Edo-style fish sushi counter.',
    hours_raw: 'Mon–Fri 11:30–13:30 (last order 13:00) and 17:00–21:30 (last order 21:00); closed Sat, Sun and holidays (Tabelog). Reservation only, lunch included (Tabelog; March 2025). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; service charge 10% (Tabelog). 14 seats: 10 at a hinoki counter and two sunken-kotatsu private rooms for 2 and 4; private hire up to 20 (Tabelog; March 2026). Non-smoking. In business about 15 years (December 2025 review).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 3-2-10, 千歳ビル 1F — 3 min from Ningyocho Stn exit A5 (lift at exit A6)',
    cuisine: 'Edo-style sushi with drinking snacks between the pieces, from fish kept in an ice-cooled wooden refrigerator (2022–25 reviews) · omakase ¥17,600 — a hairy-crab appetiser and 14 nigiri including tamago; light course ¥13,200 (10 nigiri and tamago); extra course ¥20,900, book three days ahead (Tabelog menu, 2024) · lunch: nigiri ¥6,000 or special nigiri ¥8,800, 12 pieces with soup (Tabelog menu, 2024) · a March 2026 omakase: fava beans, mozuku and pilot whale; tuna hand roll; shrimp with salt and with soy; flounder wrapped in green onion with its liver; deboned sardine; chawanmushi with lily bulb; sea urchin as nigiri; octopus; lean tuna; lightly grilled nodoguro · otoro and chutoro layered nigiri (April 2023); tuna "brain" (November 2025) · homemade karasumi cured in sake lees; anago from Haneda in summer and Sanriku in autumn (Tabelog menu) · sake, shochu and wine',
    website: SITE, gmaps: gm('鮨處つの田 人形町'), menu_url: TB + 'dtlmenu/',
    notes: "[Sushi · Ningyocho, a drinker's Edo-style counter with an ice-chilled fish box] A ten-seat hinoki sushi counter about fifteen years old (December 2025), whose fish rests in an old-style wooden refrigerator cooled with ice to keep it from drying. The chef is a drinker's chef: small rice, snacks between the nigiri, and plenty of sake (though no drinking while working, May 2022). The omakase is about ¥17,600 for a hairy-crab starter and fourteen pieces; highlights from recent diners include octopus that melts with the rice, flounder with its liver, and sea urchin served as nigiri. The chef is chatty and full of stories about curing and keeping fish (November 2025). Weekday lunch is by reservation, about ¥6,000. Closed weekends.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "The owner is friendly and fun", February 2025 review)', 'Head chef (unnamed; "The head chef is as lively as ever", September 2024 review)'], origin: null,
      background: 'In business about 15 years (December 2025 review). The chef explains traditional refrigeration and preservation methods, the ice-cooled wooden refrigerator and how fish is prepared (November, December 2025). Two staff at lunch (March 2025).',
      philosophy: null, specialty: 'Edo-style omakase with drinking snacks.',
      anecdotes: [
        { text: '"While enjoying the recommended Japanese sake, I suggested, \'How about a drink for you too?\' but … not to drink while working" — May 2022.', source: R + 'B449667377/' },
        { text: '"I learned that the refrigerator uses ice to maintain a cool temperature, which helps keep the fish from drying out." — December 2025.', source: R + 'B519112022/' },
        { text: '"I’ve never had octopus like this before, and I doubt I’ll find it again." — March 2026.', source: R + 'B524874813/' },
      ],
      japanese_sources_summary: '食べログ: 鮨處つの田、寿司、海鮮、創作料理、日本橋人形町3-2-10 千歳ビル1F、人形町駅A5出口から徒歩3分、月〜金11:30〜13:30、17:00〜21:30、土日祝休み、完全予約制、カード可、サービス料10%、14席 (カウンター10、掘りごたつの個室)、貸切20名まで、禁煙、ホームページ sushi-tsunoda.com、おまかせ17,600円、ライト13,200円、特別20,900円、昼のにぎり6,000円・特選8,800円。口コミ(2022年5月〜2026年3月): 約15年、氷で冷やす木の冷蔵庫、つまみと握りを交互に、小ぶりのしゃり、檜のカウンター、話好きの大将、蛸、雲丹の握り、のどぐろ。',
      confidence: 'medium', sources: [TB, SITE, TB + 'dtlmenu/', R + 'B331034888/', R + 'B449667377/', R + 'B467579726/', R + 'B479075180/', R + 'B500725421/', R + 'B501632940/', R + 'B505518728/', R + 'B517530110/', R + 'B519112022/', R + 'B524874813/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Reservation only; dislikes checked at the start (March 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-2-10 千歳ビル１F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews to March 2026.' },
    pin_source: `Tabelog ${TB} (35.686260, 139.780153); cross-checked: GSI 東京都中央区日本橋人形町三丁目2番10号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B524874813/'],
    price_note: 'Tabelog menu, tax included, last updated 2024-07-17; omakase price confirmed by a March 2026 review. Plus 10% service.', last_checked: TODAY, items: [
      it('', '', 'Omakase (hairy crab and 14 nigiri)', '¥17,600', 'Courses', 'ask', 'no', 'Tabelog menu 2024; March 2026.', 'omakase'),
      it('', '', 'Light course (10 nigiri)', '¥13,200', 'Courses', 'ask', 'no', 'Tabelog menu, 2024.', 'light'),
      it('', '', 'Extra course (book 3 days ahead)', '¥20,900', 'Courses', 'ask', 'no', 'Tabelog menu, 2024.', 'extra'),
      it('', '', 'Lunch nigiri (12 pieces, soup)', '¥6,000', 'Lunch', 'ask', 'no', 'Tabelog menu, 2024.', 'lunch'),
      it('', '', 'Lunch special nigiri (12 pieces, soup)', '¥8,800', 'Lunch', 'ask', 'no', 'Tabelog menu, 2024.', 'lunch_special'),
    ] }, {
    cuisine: 'つまみを挟みながら握る江戸前の鮨、魚は氷で冷やす木の冷蔵庫で (2022〜25年の口コミ)・おまかせ17,600円、毛蟹の先付と玉子を含む握り14貫。ライト13,200円 (握り10貫と玉子)。特別コース20,900円、3日前までに予約 (食べログのメニュー、2024年)・昼: にぎり6,000円、特選にぎり8,800円、12貫と汁 (食べログのメニュー、2024年)・2026年3月のおまかせ: そら豆、もずく、ゴンドウクジラ、トロの手巻き、塩と醤油の海老、ねぎを巻いた平目と肝、骨を抜いた鰯、百合根の茶碗蒸し、雲丹の握り、蛸、赤身、炙ったのどぐろ・大トロと中トロを重ねた握り (2023年4月)、マグロの脳天 (2025年11月)・酒粕に漬けた自家製からすみ、夏は Haneda 沖、秋は Sanriku の穴子 (食べログのメニュー)・日本酒、焼酎、ワイン',
    neighborhood: '日本橋人形町3-2-10 千歳ビル1F。人形町駅A5出口から徒歩3分 (エレベーターはA6出口)',
    gf_detail: '要確認。握りは醤油か塩で、平目は肝のたれで (2024〜26年の口コミ)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 魚の江戸前の鮨のカウンター。',
    notes: '[鮨・人形町、氷で冷やす魚の箱がある酒飲みの江戸前のカウンター] 檜のカウンター10席の鮨屋で、約15年 (2025年12月)。魚は乾かないよう氷で冷やす昔ながらの木の冷蔵庫で休ませる。大将は酒飲みの気持ちがわかる人で、しゃりは小ぶり、握りの間につまみ、日本酒もたっぷり (ただし仕事中は飲まない、2022年5月)。おまかせは約17,600円で、毛蟹の先付と握り14貫。最近の客の記憶に残るのは、しゃりと一緒にとろける蛸、肝を添えた平目、軍艦ではなく握りで出す雲丹。大将は話好きで、魚の締め方や保存の話が尽きない (2025年11月)。平日の昼も予約制で約6,000円。土日休み。',
  });
}

// ================================================================ 台湾タロイモスイーツ専門店 連珍
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13266334/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '18:00']);
  put({
    id: 'tokyo_renchin_taro_sweets_ningyocho', name: '台湾タロイモスイーツ専門店 連珍 (Renchin)', category: 'OMNI',
    lat: 35.685577, lng: 139.784048, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Cream puffs, roll cakes, egg tarts and baked taro cakes are wheat; taro paste, pudding and taro milk may not be, but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: milk drinks, egg tarts and cream puffs; zongzi with pork and egg yolk.',
    hours_raw: 'Daily 11:00–18:00, including holidays; closing days irregular (Tabelog). Mostly takeaway; 4 seats on benches inside and outside (Tabelog). Reservations by phone or DM (Tabelog). Cards, transport IC and PayPay (Tabelog). Non-smoking; wheelchair accessible; children welcome (Tabelog). Opened 11 December 2021 (Tabelog). Operated by MARUFOODS (Tabelog remarks).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-10-11 1F (the KYOE PLAZA building) on Amazake Yokocho — 2 min from Ningyocho Stn',
    cuisine: 'Taiwanese taro sweets (2026 reviews) · taro milk with small tapioca, iced ¥680 (April–October 2026) · taro pudding with a coconut or almond layer ¥450; taro roll cake, two slices ¥900 (June 2026) · homemade douhua with taro and tapioca balls ¥900 (May 2026) · taro sweets with black rice or coconut; taro cream puffs; egg tarts; baked taro cakes (May–September 2026) · frozen zongzi for the Dragon Boat Festival: Taiwanese-style with pork, egg yolk, shiitake, chestnut and dried shrimp ¥880; black-rice zongzi with taro ¥770 (June 2026) · hot sandwiches (June 2026)',
    website: 'https://marufoods.net/pages/lenjen', gmaps: gm('連珍 人形町'), menu_url: null,
    notes: "[Sweets · Ningyocho, Taiwanese taro desserts from a century-old Keelung shop] A small takeaway counter on the ground floor of the KYOE PLAZA building on Amazake Yokocho, selling taro sweets from a Keelung shop with over a century of history; Japan has two branches, here and Takadanobaba (May 2026). The taro milk (¥680) is thick enough to drink as a paste, with tiny tapioca, and the taro puddings, roll cakes and black-rice taro squares are gently sweet. Everything is packed beautifully for gifts, and in early summer there are frozen Taiwanese zongzi. Prices have crept up (April 2026), and one May 2026 diner found the baked taro cake short on taro flavour. A couple of benches let you eat on the spot.",
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per a May 2026 review: a branch of a long-established shop in Keelung, Taiwan, with over 100 years of history, with Japanese shops in Ningyocho and Takadanobaba. Opened 11 December 2021; operated by MARUFOODS (Tabelog).',
      philosophy: null, specialty: 'Taro milk; taro pudding.',
      anecdotes: [
        { text: '"The shop is a branch of a long-established store in Keelung, Taiwan, with over 100 years of history" — May 2026.', source: R + 'B527294127/' },
        { text: '"The taro pudding features a delightful contrast between the smooth almond layer on top and the slightly grainy taro layer below" — September 2026.', source: R + 'B536018312/' },
        { text: '"The price has been gradually increasing." — April 2026, on taro milk.', source: R + 'B457177069/' },
      ],
      japanese_sources_summary: '食べログ: 台湾タロイモスイーツ専門店 連珍、中華菓子、日本橋人形町2-10-11 1F、人形町駅から徒歩2分、毎日11:00〜18:00、不定休、電話か DM で予約可、カード・交通系IC・PayPay可、4席 (店内外のベンチ)、禁煙、車椅子可、子ども可、テイクアウト、2021年12月11日オープン、MARUFOODS。口コミ(2026年4月〜10月): 台湾の Keelung の100年以上続く老舗の支店、日本は人形町と Takadanobaba、タロイモミルク680円、タロイモプリン450円、ロールケーキ900円、豆花900円、紫米やココナッツのタロイモ菓子、シュークリーム、エッグタルト、ちまき、包装がきれい、値上がりしているという声、焼き菓子はタロイモの味が弱いという声も。',
      confidence: 'medium', sources: [TB, R + 'B457177069/', R + 'B527294127/', R + 'B528041036/', R + 'B528191069/', R + 'B529427284/', R + 'B531389913/', R + 'B534655178/', R + 'B536018312/', R + 'B537666956/', R + 'B538031374/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point at the showcase; takeaway with a couple of benches.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_approx: 'block', address_ja: '東京都中央区日本橋人形町2-10-11 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated April–October 2026.' },
    pin_source: `Tabelog ${TB} gives 35.685608, 139.784060, inside the KYOE PLAZA cluster (on your side 2F, Kokoroba 3F, NAOKI 4F, huit 5F, Ryuen 7F; on your side address_ja "東京都中央区日本橋人形町2-10-11 2F"). Block-level: placed at the free south-east corner of the 6 m spread (6 m from huit and NAOKI, 8.5 m from on your side). GSI 東京都中央区日本橋人形町二丁目10番11号 (go) 3m from the Tabelog point; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B538031374/', R + 'B531389913/', R + 'B528191069/', R + 'B457177069/'],
    price_note: 'Prices from April–October 2026 reviews, tax included.', last_checked: TODAY, items: [
      it('', '', 'Taro milk (iced)', '¥680', 'Drinks', 'ask', 'no', 'April–October 2026.', 'taro_milk'),
      it('', '', 'Taro pudding', '¥450', 'Sweets', 'ask', 'no', 'June 2026.', 'pudding'),
      it('', '', 'Taro roll cake (2 slices)', '¥900', 'Sweets', 'no', 'no', 'June 2026.', 'roll'),
      it('', '', 'Homemade douhua', '¥900', 'Sweets', 'ask', 'ask', 'May 2026.', 'douhua'),
      it('', '', 'Taiwanese-style zongzi (frozen)', '¥880', 'Seasonal', 'ask', 'no', 'June 2026.', 'zongzi'),
    ] }, {
    cuisine: '台湾のタロイモスイーツ (2026年の口コミ)・小さなタピオカ入りのタロイモミルク、アイス680円 (2026年4月〜10月)・ココナッツかアーモンドの層をのせたタロイモプリン450円、タロイモのロールケーキ2切れ900円 (2026年6月)・タロイモとタピオカ団子入りの自家製豆花900円 (2026年5月)・紫米やココナッツのタロイモ菓子、タロイモのシュークリーム、エッグタルト、タロイモの焼き菓子 (2026年5月〜9月)・端午の節句の冷凍ちまき: 豚肉、卵黄、椎茸、栗、干し海老の台湾風880円、タロイモ入りの黒米ちまき770円 (2026年6月)・ホットサンドも (2026年6月)',
    neighborhood: '日本橋人形町2-10-11 1F (KYOE PLAZA の建物)、Amazake Yokocho。人形町駅から徒歩2分',
    gf_detail: '要確認。シュークリーム、ロールケーキ、エッグタルト、焼き菓子は小麦。タロイモあん、プリン、タロイモミルクは違うかもしれないが、グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 牛乳の飲み物、エッグタルト、シュークリーム。ちまきには豚肉と卵黄。',
    notes: '[甘味・人形町、Keelung の100年の老舗の台湾タロイモスイーツ] Amazake Yokocho の KYOE PLAZA の1階にある小さな持ち帰りの店で、台湾の Keelung で100年以上続く店のタロイモスイーツを売る。日本では人形町と Takadanobaba の2店 (2026年5月)。タロイモミルク (680円) はペーストのように濃く、小さなタピオカ入り。タロイモのプリン、ロールケーキ、紫米のタロイモ菓子はどれも甘さ控えめ。包装がきれいで手土産にもよく、初夏には台湾の冷凍ちまきも。値段は少しずつ上がっていて (2026年4月)、2026年5月にはタロイモの焼き菓子は味が弱いという声も。ベンチが少しあってその場でも食べられる。',
  });
}

save();
