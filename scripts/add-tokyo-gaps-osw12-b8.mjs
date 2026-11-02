// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 8.
//   + 炭火焼 鶏奈緒 Sumibiyaki Torinao (16-seat charcoal yakitori by Ueno Stn, one master; opened 2008)
//   + 祥龍刀削麺荘 Shoryu Toshaomen So (knife-cut noodles and cheap Chinese sets by the Iriya exit)
//   + 陣矢 東京油そば伝承館 上野の陣 Jinya (11-seat abura-soba counter, 20+ toppings; opened 2016) — no ramen block (see report)
//   + かっちゃん Kacchan (standing tempura bar under the tracks; ¥1,300 "senbero" with dice; opened 2010)
// Skipped: 鳥光國 上野店 13166480 — chain (see skip()).
// Chain check. Torinao, Shoryu, Kacchan: one shop each found. Jinya: one shop found (the name "東京油そば伝承館" suggests a brand;
//   no other branch found in a web search). Kacchan is not the kushikatsu shop tokyo_kushikatsu_kacchan_ningyocho (東京串カツ
//   かっちゃん, Nihonbashi Ningyocho) — different name, genre and ward.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address (上野7-5-5, 上野7-8-1, 上野7-10-4, 上野6-12-13).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-8');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13166480', 'chain: 鳥光國 上野店 (上野の森さくらテラス) is one of several 鳥光國 shops — gurunavi lists 府中店, さいたま新都心店 and 錦糸町北口店 (page titles in search results, not opened).');

// ================================================================ 炭火焼 鶏奈緒
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13072609/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '24:00']);
  put({
    id: 'tokyo_sumibiyaki_torinao_ueno', name: '炭火焼 鶏奈緒 (Sumibiyaki Torinao)', category: 'OMNI',
    lat: 35.713322, lng: 139.778373, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled skewers are the norm (a 2021 diner says the tsukune comes with salt only) and chicken tataki and breast with wasabi, plum-shiso or negi-miso are on the menu, but nothing is described as gluten-free; wasabi soy sauce and miso toppings are used.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a charcoal yakitori shop of Miou chicken, including lightly cooked breast, tataki and liver sashimi.',
    hours_raw: 'Mon–Sat 18:00–24:00; closed Sundays and holidays, but open on holidays falling on a Saturday and during Golden Week, summer and New Year holidays (Tabelog). Reservations taken until 19:30 only; courses must be booked by 22:00 the day before. Table charge ¥300 a head. 16 seats: 4 at the counter, 12 at tables. Non-smoking (no smoking space). Cash only (no cards or e-money). No children. The shop asks guests to keep voices down. Opened 5 November 2008 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Ueno 7-chōme, a back street on the Iriya side — 3 min from JR Ueno Stn',
    cuisine: 'Charcoal yakitori of fresh Miou chicken, fanned over the coals; the owner pays attention to how each skewer is cut and threaded (Tabelog) · chef\'s five-skewer platter, chicken tataki, sliced Miou chicken, lightly cooked breast tasting with wasabi, homemade negi-miso and plum-shiso, liver sashimi, cha soba (2022–2026 reviews) · Japanese sake, shochu, Hoppy and fresh-squeezed sours; a certified Sapporo draft-beer shop (September 2026) · table charge ¥300',
    website: null, gmaps: gm('炭火焼 鶏奈緒 上野7-5-5'), menu_url: TB + 'dtlmenu/',
    notes: "[Yakitori · Ueno, a one-man charcoal grill since 2008] A small, smoky yakitori shop on a back street near Ueno Station's Iriya side, open since 2008, with a four-seat counter and a few tables. The owner grills fresh Miou chicken over charcoal, fanning the coals, and serves it from skewers to tataki, lightly cooked breast with wasabi or plum-shiso, and liver sashimi; the drinks list runs to sake, Hoppy and fresh-squeezed sours. In 2025–2026 it was run by one quiet master (July 2025, September 2026; a May 2022 diner saw one cook and one server), and reviewers praise the chicken and the prices; earlier reviews (2021–2022) complained of slow, cool service. Cash only, no children, keep voices low; bookings until 19:30.",
    chef_bio: { chef_name: null, roles: ['Owner, runs the shop alone (July 2025 review)'], origin: 'Opened 5 November 2008 (Tabelog)', background: 'Tabelog\'s listing (corporate member) describes an owner passionate about real meat who sources fresh chicken, grills it over charcoal with a fan, and chooses the cut, skewering and skewer type with care. A July 2025 review: "a cozy little restaurant run by a single master chef"; a September 2026 review: "the master was a pleasant, quiet man". A May 2022 diner described the kitchen run by one person and the floor by another. No source names the owner.', philosophy: '"The owner\'s passion is to let you experience the true deliciousness of real meat" (Tabelog).', specialty: 'Miou chicken yakitori; chicken tataki.',
      anecdotes: [
        { text: '"It\'s a cozy little restaurant run by a single master chef… You can enjoy yakitori at a reasonable price… The yakitori, especially the chicken breast, was delicious!" — July 2025.', source: R + 'B510239018/' },
        { text: '"They specialize in Miou Chicken, so I ordered the tataki. It had a nice texture without any strong flavors, and it was delicious." — September 2026.', source: R + 'B535018211/' },
        { text: '"My food took over 40 minutes to arrive, making this visit a rare disappointment… It\'s a shame because the yakitori was delicious." — May 2022.', source: R + 'B449208357/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭火焼 鶏奈緒、上野7-5-5、上野駅から徒歩3分、月〜土18:00〜24:00、日祝休み (土曜の祝日、ゴールデンウィーク、夏休み、年末年始は営業)、予約は19:30まで、コースは前日22時までに予約、お通し1人300円、16席 (カウンター4、テーブル12)、禁煙、現金のみ、子ども不可、大声での会話は遠慮を、2008年11月5日オープン、店主が新鮮な鶏を炭火でうちわであおいで焼き、串の打ち方や串の種類にもこだわる。口コミ(2021年11月〜2026年9月): つくねは塩のみ、提供に40分以上かかった (2022年5月)、Miou の鶏、おまかせ5本盛り、茶そば、むね肉の食べ比べ (わさび、自家製ねぎ味噌、梅しそ)、トマトとむね肉のわさび和え、レバ刺し、たたき、ホッピー、生搾りのサワー、日本酒、店主一人の小さな店 (2025年7月)、静かでおだやかなマスター、Sapporo Beer の認定店 (2026年9月)。',
      confidence: 'medium', sources: [TB, R + 'B442833637/', R + 'B448595791/', R + 'B449208357/', R + 'B456036409/', R + 'B472455064/', R + 'B499930010/', R + 'B504849260/', R + 'B510239018/', R + 'B535018211/'] },
    cultural_comfort: { level: 'japanese', note: 'Small, quiet shop run by one person; keep voices down; cash only.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区上野7-5-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated 2025 and September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野七丁目5番5号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B472455064/', R + 'B456036409/'],
    price_note: 'Few prices in sources; the breast tasting price is from an October 2023 review. Table charge ¥300.', last_checked: TODAY, items: [
      it('', '', 'Chef\'s five-skewer platter', '', 'Yakitori', 'ask', 'no', 'November 2022 review.', 'omakase_5'),
      it('', '', 'Chicken breast tasting, three ways (wasabi, negi-miso, plum-shiso)', '¥570', 'Chicken', 'ask', 'no', 'October 2023 review.', 'mune_3'),
      it('', '', 'Miou chicken tataki', '', 'Chicken', 'ask', 'no', 'July 2025 and September 2026 reviews.', 'tataki'),
    ] }, {
    cuisine: 'うちわであおいで炭火で焼く新鮮な Miou の鶏の焼き鳥。串の切り方や打ち方にもこだわる (食べログ)・おまかせ5本盛り、鶏のたたき、Miou の鶏の刺身、わさび・自家製ねぎ味噌・梅しそのむね肉の食べ比べ、レバ刺し、茶そば (2022〜2026年の口コミ)・日本酒、焼酎、ホッピー、生搾りのサワー、Sapporo の生ビールの認定店 (2026年9月)・お通し300円',
    neighborhood: '上野七丁目、入谷側の裏通り。JR上野駅から徒歩3分',
    gf_detail: '要確認。焼き鳥は塩が基本 (2021年の口コミではつくねは塩のみ) で、鶏のたたきや、わさび・梅しそ・ねぎ味噌のむね肉もあるが、グルテンフリーの説明はありません。わさび醤油や味噌も使う。',
    vegan_detail: 'ヴィーガンではありません。Miou の鶏の炭火焼き鳥の店で、軽く火を通したむね肉、たたき、レバ刺しも。',
    notes: '[焼き鳥・上野、2008年からの店主一人の炭火焼き] 上野駅の入谷側の裏通りにある小さな煙たい焼き鳥店で、2008年から。4席のカウンターといくつかのテーブル。店主が新鮮な Miou の鶏を炭火でうちわであおぎながら焼き、串からたたき、わさびや梅しその軽く火を通したむね肉、レバ刺しまで出す。飲み物は日本酒、ホッピー、生搾りのサワーなど。2025〜2026年は静かなマスター一人の店 (2025年7月、2026年9月。2022年5月には調理1人と接客1人だったという声も) で、鶏と値段が好評。それ以前 (2021〜2022年) には提供の遅さや接客の冷たさへの不満も。現金のみ、子ども不可、大声は控えて。予約は19時半まで。',
  });
}

// ================================================================ 祥龍刀削麺荘
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13117495/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'tokyo_shoryu_toshaomen_ueno', name: '祥龍刀削麺荘 (Shoryu Toshaomen So)', category: 'OMNI',
    lat: 35.713923, lng: 139.779033, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a knife-cut wheat-noodle shop (the noodles are shaved from wheat dough), with dumplings, fried chicken and soy-based stir-fries.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: noodle soups (shoyu, dandan, mala), mapo tofu, stir-fried meats and dumplings; no vegetable-only dish is described.',
    hours_raw: 'Daily 11:00–23:00; hours may change (Tabelog). 33 seats. Non-smoking. No cards; e-money only via au PAY (Tabelog), and a September 2026 diner found au PAY and cash accepted but not PayPay. Set meals offered at lunch and at night (March 2026). No opening date given.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 7-chōme, 逸品館, at a crossing with a large sign — 1 min from JR Ueno Stn Iriya exit',
    cuisine: 'Knife-cut noodles (toshaomen) shaved straight into the pot by the cook, plus local-style Chinese dishes (Tabelog; reviews) · toshaomen in a light shoyu broth, dandan, spicy mala, and stir-fried; sets with a mini mapo or green-pepper beef bowl ¥900–990 (March 2026) · lunch sets ¥850 with namul, soup and almond tofu, e.g. black-vinegar chicken, chive and egg stir-fry (October–November 2025) · mapo tofu in a clay pot ¥780, spicy stir-fried chicken ¥880 (September 2026) · pork liver and vegetable stir-fry, boiled and pan-fried gyoza, fried rice',
    website: null, gmaps: gm('祥龍刀削麺荘 上野7-8-1'), menu_url: TB + 'dtlmenu/',
    notes: "[Chinese noodles · Ueno, knife-cut noodles by the Iriya exit] A plain Chinese restaurant a minute from Ueno Station's Iriya exit, under a big sign at the crossing, known for toshaomen: thick, uneven, chewy noodles shaved by hand from a block of dough straight into the boiling water. Have them in a light shoyu broth, as dandan or fiery mala soup, or stir-fried, often in a set with a mini mapo or green-pepper beef bowl for about ¥900–990. Weekday lunch sets of about ¥850 add namul, soup and almond tofu. The staff speak Chinese among themselves and good Japanese with customers (March 2026); it is calm at weekday lunch and busy at other times (October 2026). Cash or au PAY only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'A Tabelog listing without a corporate member; a March 2026 review says the restaurant is run by people from overseas who understand Japanese well, and another that staff speak Chinese. No source names the owner or gives an opening date.', philosophy: null, specialty: 'Knife-cut noodles; budget set meals.',
      anecdotes: [
        { text: '"The noodles are crafted using a skilled technique where the chef shaves the dough directly into boiling water, resulting in a delightful texture with varying thickness." — August 2026.', source: R + 'B534469251/' },
        { text: '"The Toshaomen came in a light soy sauce broth, and the Mapo Rice Bowl had a mild spiciness… JPY 990." — March 2026.', source: R + 'B524751891/' },
        { text: '"For payment, it seems that only au Pay and cash are accepted, as PayPay is not available." — September 2026.', source: R + 'B516047469/' },
      ],
      japanese_sources_summary: '食べログ: 祥龍刀削麺荘、上野7-8-1 逸品館、JR上野駅入谷口から徒歩1分、毎日11:00〜23:00、33席、禁煙、カード不可、電子マネーは au PAY のみ。口コミ(2025年9月〜2026年10月): 黒酢の鶏、ニラ玉の定食850円 (もやしのナムル、スープ、杏仁豆腐付き)、交差点の大きな看板、土鍋の麻婆豆腐780円、辛い鶏の炒め物880円、PayPay は使えず au PAY と現金、刀削麺と麻婆丼990円、刀削麺と青椒肉絲丼900円、あっさりした醤油味のスープ、店員は中国語で話す、日本語もよく通じる、担々刀削麺とチャーハン、麻辣の刀削麺、豚レバーと野菜の炒め物、焼き刀削麺と水餃子、生地を鍋に削り入れる、餃子とチャーハン。',
      confidence: 'medium', sources: [TB, R + 'B495518048/', R + 'B513927596/', R + 'B516047469/', R + 'B524751891/', R + 'B525350328/', R + 'B530786879/', R + 'B531521618/', R + 'B531940977/', R + 'B534469251/', R + 'B537347492/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff speak Chinese and good Japanese (March 2026); menu outside with set prices.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-8-1 逸品館',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野七丁目8番1号 (go) 10m; Kotetsu (tokyo_kotetsu_ueno, 上野7-8-23) is 13 m away in a different building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B524751891/', R + 'B525350328/', R + 'B516047469/', R + 'B495518048/'],
    price_note: 'Prices from October 2025–September 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Toshaomen with mini mapo rice bowl', '¥990', 'Sets', 'no', 'no', 'March 2026.', 'tosho_mapo'),
      it('', '', 'Toshaomen with mini green-pepper beef bowl', '¥900', 'Sets', 'no', 'no', 'March 2026.', 'tosho_chinjao'),
      it('', '', 'Lunch set (e.g. black-vinegar chicken) with namul, soup and almond tofu', '¥850', 'Lunch', 'no', 'no', 'October–November 2025.', 'lunch_set'),
      it('', '', 'Mapo tofu in a clay pot', '¥780', 'Dishes', 'no', 'no', 'September 2026.', 'mapo'),
      it('', '', 'Spicy stir-fried chicken', '¥880', 'Dishes', 'no', 'no', 'September 2026.', 'spicy_chicken'),
    ] }, {
    cuisine: '料理人が生地を鍋に削り入れる刀削麺と、町中華の料理 (食べログ、口コミ)・刀削麺はあっさりした醤油のスープ、担々、辛い麻辣、焼きそば風。ミニ麻婆丼や青椒肉絲丼とのセット900〜990円 (2026年3月)・ナムル、スープ、杏仁豆腐付きのランチ定食850円、たとえば黒酢の鶏、ニラ玉 (2025年10月〜11月)・土鍋の麻婆豆腐780円、辛い鶏の炒め物880円 (2026年9月)・豚レバーと野菜の炒め物、水餃子と焼き餃子、チャーハン',
    neighborhood: '上野七丁目、逸品館、大きな看板の交差点。JR上野駅入谷口から徒歩1分',
    gf_detail: 'グルテンフリーではありません。小麦の生地を削る刀削麺の店で、餃子、揚げた鶏、醤油の炒め物もある。',
    vegan_detail: 'ヴィーガンではありません。麺のスープ (醤油、担々、麻辣)、麻婆豆腐、肉の炒め物、餃子で、野菜だけの料理は書かれていません。',
    notes: '[中華の麺・上野、入谷口そばの刀削麺] 上野駅入谷口から1分、交差点の大きな看板の下にある気取らない中華料理店で、名物は刀削麺。生地の塊から沸いた湯に直接削り入れる、太さがふぞろいでもちもちの麺。あっさりした醤油のスープ、担々や激辛の麻辣のスープ、炒めた焼き刀削麺で食べられ、ミニ麻婆丼や青椒肉絲丼とのセットは約900〜990円。平日の約850円のランチ定食にはナムル、スープ、杏仁豆腐が付く。店員どうしは中国語で、客にはよく通じる日本語で話す (2026年3月)。平日の昼は落ち着いていて、時間によってはにぎわう (2026年10月)。支払いは現金か au PAY のみ。',
  });
}

// ================================================================ 陣矢 東京油そば伝承館 上野の陣
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13203712/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '22:00']);
  put({
    id: 'tokyo_jinya_aburasoba_ueno', name: '陣矢 東京油そば伝承館 上野の陣 (Jinya Tokyo Abura-soba Denshokan)', category: 'OMNI',
    lat: 35.715247, lng: 139.779245, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: abura-soba is wheat noodles in a soy-based tare; no gluten-free noodle is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: toppings include fish powder, cheese and egg, and a "special broth" is served on the side; no plant-based tare is described.',
    hours_raw: 'Daily 11:00–22:00 (last order 21:45); closing days irregular, posted on Instagram @jinya.ueno (Tabelog). No reservations. Meal tickets from a cash-only vending machine (April 2026); Tabelog lists no cards or e-money. 11 counter seats. Non-smoking. Takeout. Opened 13 December 2016 (Tabelog). A male staff member ran the shop alone on 3 May 2026.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ueno 7-chōme, on a quiet street 100 m left of JR Ueno Stn Iriya exit — 1 min walk',
    cuisine: 'Tokyo-style abura-soba (soupless oil noodles) with Kaikarou noodles and the house tare, and over 20 toppings to build your own bowl (Tabelog) · abura-soba ¥800 (May 2026 review) or ¥900 (another May 2026 review); two servings ¥1,000 (April 2026); the default size goes up to 2.5 servings (375 g) · spring Jinya set with bean sprouts, fried onions, fish powder, cheese and a side of special broth ¥1,100 (May 2026) · carbonara-style and super-spicy miso versions · table vinegar, chili oil and Jinya chili pepper · eating challenges of 5 servings (1.5 kg) and 10 servings (3 kg) in 20 minutes for a gift certificate (Tabelog)',
    website: null, gmaps: gm('陣矢 東京油そば伝承館 上野の陣'), menu_url: TB + 'dtlmenu/',
    notes: "[Abura-soba · Ueno, build-your-own oil noodles by the Iriya exit] An 11-seat counter a minute from Ueno Station's Iriya exit, serving Tokyo-style abura-soba since 2016: chewy, medium-thick noodles from Kaikarou tossed in a sesame-scented tare in an oversized bowl, then sharpened with table vinegar and chili oil and topped from a list of more than 20 extras (fish powder, cheese, fried onions, a soft egg). Bowls run about ¥800–1,100, with two and even 2.5 servings at little extra; there are 1.5 kg and 3 kg eating challenges. Reviewers in 2026 liked the light, customisable bowls and the quiet street with no queue; one found the standard bowl plain. Buy a ticket from the cash-only machine; one person may be running the counter (May 2026).",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 13 December 2016 (Tabelog)', background: 'A corporate-member Tabelog listing; the noodles are Kaikarou\'s special noodles (Tabelog). An October 2026 diner asked the owner for recommendations; on 3 May 2026 one staff member was running the shop alone. No source names the operator or owner.', philosophy: '"Healthy Aburasoba" (Tabelog).', specialty: 'Abura-soba with 20+ toppings.',
      anecdotes: [
        { text: '"The aroma of sesame oil was delightful. It suggested to pour a generous amount of vinegar and chili oil, and when I did, it created a surprisingly delicious flavor." — April 2026.', source: R + 'B526751156/' },
        { text: '"The set, which included a generous amount of toppings for an additional JPY 200 on the JPY 900 Abura-soba, felt like a great deal." — May 2026, spring Jinya set.', source: R + 'B528965179/' },
        { text: '"I ordered the Abura-soba for JPY 800. The Abura-soba was served in a large bowl and was moderately delicious, but it didn\'t have any standout features." — May 2026.', source: R + 'B515459506/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 陣矢 東京油そば伝承館 上野の陣、上野7-10-4、上野駅入谷口から徒歩1分 (左へ100m)、毎日11:00〜22:00 (L.O.21:45)、不定休 (Instagram で告知)、予約不可、カウンター11席、禁煙、カード・電子マネー不可、テイクアウト、2016年12月13日オープン、ヘルシー油そば、Kaikarou の特製麺とたれ、トッピング20種以上、5玉 (1.5kg)・10玉 (3kg) を20分で完食すると商品券。口コミ(2025年10月〜2026年10月): 油そば800円 (2026年5月)、900円という人も (2026年5月)、2玉1,000円、2.5玉 (375g)、春の陣矢セット1,100円 (もやし、フライドオニオン、魚粉、チーズ、特製スープ)、大きな丼で混ぜやすい、ごま油の香り、酢とラー油、カルボナーラ風、激辛味噌、券売機は現金のみ、静かな通りで並ばない、男性スタッフ一人で営業 (2026年5月)、店主におすすめを聞いた (2026年10月)。',
      confidence: 'medium', sources: [TB, R + 'B515459506/', R + 'B526751156/', R + 'B526762643/', R + 'B528965179/', R + 'B529626342/', R + 'B531648908/', R + 'B536336768/', R + 'B537270502/', R + 'B537397066/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Ticket machine (cash only); toppings and noodle amount chosen at the machine.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-10-4',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野七丁目10番4号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B515459506/', R + 'B526762643/', R + 'B528965179/'],
    price_note: 'Prices from April–May 2026 reviews (tax included); two reviews in May 2026 give ¥800 and ¥900 for the plain abura-soba.', last_checked: TODAY, items: [
      it('', '', 'Abura-soba', '¥800', 'Abura-soba', 'no', 'no', 'May 2026 review; ¥900 in another May 2026 review.', 'abura_soba'),
      it('', '', 'Abura-soba, two servings', '¥1,000', 'Abura-soba', 'no', 'no', 'April 2026.', 'abura_soba_2'),
      it('', '', 'Spring Jinya set: abura-soba with bean sprouts, fried onions, fish powder, cheese and special broth', '¥1,100', 'Abura-soba', 'no', 'no', 'May 2026.', 'jinya_set'),
    ] }, {
    cuisine: 'Kaikarou の麺と店のたれの東京の油そば。20種以上のトッピングで自分の一杯に (食べログ)・油そば800円 (2026年5月の口コミ) か900円 (2026年5月の別の口コミ)、2玉1,000円 (2026年4月)、並で2.5玉 (375g) まで・もやし、フライドオニオン、魚粉、チーズ、特製スープ付きの春の陣矢セット1,100円 (2026年5月)・カルボナーラ風や激辛味噌も・卓上の酢、ラー油、陣矢の唐辛子・5玉 (1.5kg) と10玉 (3kg) を20分で食べる大食いチャレンジで商品券 (食べログ)',
    neighborhood: '上野七丁目、JR上野駅入谷口を出て左へ100mの静かな通り。徒歩1分',
    gf_detail: 'グルテンフリーではありません。油そばは小麦の麺に醤油のたれで、グルテンフリーの麺の話はありません。',
    vegan_detail: 'ヴィーガンではありません。トッピングに魚粉、チーズ、卵があり、特製スープも付く。植物性のたれの説明はありません。',
    notes: '[油そば・上野、入谷口そばの自分で作る油そば] 上野駅入谷口から1分、2016年からの11席のカウンターの東京の油そばの店。Kaikarou のもちもちした中太麺をごま油の香るたれで大きな丼で和え、卓上の酢とラー油で味を変え、20種以上のトッピング (魚粉、チーズ、フライドオニオン、半熟卵など) から選ぶ。一杯は約800〜1,100円で、2玉や2.5玉も少しの追加で。1.5kgと3kgの大食いチャレンジもある。2026年の口コミでは軽くて自分好みにできる一杯と、並ばずに入れる静かな通りが好評。並の一杯は普通だったという声も。食券は現金のみの券売機で、一人で営業していることも (2026年5月)。',
  });
}

// ================================================================ かっちゃん
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13115189/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '21:45']);
  put({
    id: 'tokyo_kacchan_tempura_ueno', name: 'かっちゃん (Kacchan)', category: 'OMNI',
    lat: 35.711043, lng: 139.775026, cuisine_type: 'tempura',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a tempura stand (wheat batter); the alternative set is oden.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the tempura set includes shrimp and the tempura is served with tentsuyu; the other set is oden.',
    hours_raw: 'Daily 11:00–21:45 (last order 21:30); open all year (Tabelog). No reservations; phone may not be answered while open. Standing only, about 20 places. Non-smoking; smoking outside only. Cash only (no cards, e-money or QR). 60-minute limit on the senbero set (April and October 2026 reviews). Opened 31 March 2010 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ueno 6-chōme, under the elevated tracks between Ueno and Okachimachi, the sixth shop from Ueno Station (by UNIQLO), at the Ameyoko entrance — 2 min from JR Ueno Stn Shinobazu exit',
    cuisine: 'Standing tempura bar · the "senbero" set: ¥1,300 buys four dice to spend on up to four drinks (a sour costs one die, beer two) plus a freshly fried tempura assortment — shrimp, potato, pumpkin, eggplant, lotus root, carrot — or an oden set (2026 reviews); one October 2026 reviewer gives ¥1,400 · extra tempura such as conger eel, a bite-size curry and a daily special (oden in October 2026) at extra cost · drinks include draft beer, Kaku and Riku highballs, imo shochu ISAINA with soda, shikuwasa and ponzu sours, sake Mio',
    website: null, gmaps: gm('かっちゃん 上野6-12-13 天ぷら 立ち飲み'), menu_url: null,
    notes: "[Standing tempura bar · Ueno, the dice senbero under the tracks] A busy stand-up bar under the railway between Ueno and Okachimachi, at the Ameyoko entrance, open from 11 am. Hand over ¥1,300 and you get four dice in a wooden masu: spend them on up to four drinks (a sour is one die, a beer two) and receive a plate of freshly fried tempura — shrimp, eggplant, lotus root, pumpkin and more — or an oden set instead. Extras like conger-eel tempura cost more. Diners in October 2026 loved the crisp tempura, the friendly crowd and the value, but note the drinks are on the light side and there is a 60-minute limit when it's busy; one reviewer paid ¥1,400. Standing only, cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 31 March 2010 (Tabelog)', background: 'A corporate-member Tabelog listing; no source names the operator, owner or cook.', philosophy: null, specialty: 'Senbero set of tempura and four drinks.',
      anecdotes: [
        { text: '"When you hand over JPY 1,300, you receive four dice, and you can order your favorite drinks based on the dice rolls… All the drinks are a bit on the lighter side." — October 2026.', source: R + 'B536810585/' },
        { text: '"The tempura included shrimp, potato, pumpkin, eggplant, and lotus root. The cost performance is excellent, and the tempura is freshly fried, crispy, and delicious!" — October 2026.', source: R + 'B537185929/' },
        { text: '"Although the 60-minute time limit felt a bit rushed, I managed to finish all my drinks within the time." — April 2026.', source: R + 'B525295802/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): かっちゃん、上野6-12-13、JR上野駅不忍口から徒歩2分、上野と御徒町の間の高架下、上野駅から6軒目 (UNIQLO 側)、毎日11:00〜21:45 (L.O.21:30)、年中無休、予約不可、立ち飲み約20人、禁煙 (外で喫煙)、現金のみ、2010年3月31日オープン。口コミ(2026年4月〜10月): 1,300円のせんべろでサイコロ4つ、サワーは1つ、ビールは2つ、揚げたての天ぷらの盛り合わせ (海老、じゃがいも、かぼちゃ、なす、れんこん、にんじん) かおでんのセット、60分制、1,400円だったという声、穴子の天ぷら、ひと口カレー、日替わりはおでんの盛り合わせ、ハイボール、ISAINA のソーダ割り、シークワーサーサワー、ポン酢サワー、日本酒 Mio、飲み物は薄め、店員と隣の客がにぎやかで親切。',
      confidence: 'medium', sources: [TB, R + 'B525295802/', R + 'B536738906/', R + 'B536810585/', R + 'B536895292/', R + 'B536938030/', R + 'B537185929/', R + 'B537206006/', R + 'B537811051/', R + 'B537912725/', R + 'B538053453/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Dice system for drinks; other customers and staff explain it (October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野6-12-13',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野六丁目12番13号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537811051/', R + 'B537206006/', R + 'B536938030/'],
    price_note: 'Prices from April–October 2026 reviews (tax included); one October 2026 review gives ¥1,400 for the set.', last_checked: TODAY, items: [
      it('', '', 'Senbero set: tempura assortment and up to four drinks (four dice)', '¥1,300', 'Sets', 'no', 'no', 'April and October 2026; ¥1,400 in one October 2026 review.', 'senbero_tempura'),
      it('', '', 'Senbero set: oden and up to four drinks', '¥1,300', 'Sets', 'ask', 'no', 'April and October 2026.', 'senbero_oden'),
    ] }, {
    cuisine: '立ち飲みの天ぷらの店・「せんべろ」: 1,300円でサイコロ4つ。サワーは1つ、ビールは2つで最大4杯と、揚げたての天ぷらの盛り合わせ (海老、じゃがいも、かぼちゃ、なす、れんこん、にんじん) かおでんのセット (2026年の口コミ)。2026年10月の口コミの一つでは1,400円・穴子などの追加の天ぷら、ひと口カレー、日替わり (2026年10月はおでん) は別料金・飲み物は生ビール、Kaku と Riku のハイボール、芋焼酎 ISAINA のソーダ割り、シークワーサーやポン酢のサワー、日本酒 Mio など',
    neighborhood: '上野六丁目、上野と御徒町の間の高架下、上野駅から6軒目 (UNIQLO 側)、Ameyoko の入口。JR上野駅不忍口から徒歩2分',
    gf_detail: 'グルテンフリーではありません。天ぷらの立ち飲み (小麦の衣) で、もう一つのセットはおでん。',
    vegan_detail: 'ヴィーガンではありません。天ぷらのセットに海老が入り、天つゆも付く。もう一つのセットはおでん。',
    notes: '[天ぷらの立ち飲み・上野、高架下のサイコロのせんべろ] 上野と御徒町の間の高架下、Ameyoko の入口にある朝11時からのにぎやかな立ち飲み。1,300円を払うと升に入ったサイコロが4つ。最大4杯の飲み物に使い (サワーは1つ、ビールは2つ)、揚げたての天ぷらの盛り合わせ (海老、なす、れんこん、かぼちゃなど) か、代わりにおでんのセットが付く。穴子の天ぷらなどの追加は別料金。2026年10月の口コミでは、サクサクの天ぷら、気さくな客、安さが好評だが、飲み物は薄めで、混むと60分制。1,400円だったという人も。立ち飲み、現金のみ。',
  });
}

save();
