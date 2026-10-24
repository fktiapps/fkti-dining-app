// Ginza Station half-mile sweep (805 m), batch 29 — leads from the cached san-tatsu scan.
//   + 薬膳Dining&Bar 銀座しんのう (2020; owner-cook 三上康介, brother 隼平 on drinks, their mother helps → MOM_AND_POP)
//   + 銀座スイス (1947 grill, birthplace of katsu curry; 3rd-generation mama 庄子あけみ is named, but no source says the shop
//     is family-owned → OMNI. Its Yaesu underground branch, Tabelog 13268003, is marked Closed; last reviews Sept 2025)
// Parked: ワイン懐石 銀座 囃shiya (Tabelog 13108026 "listing on hold", no reviews since June 2024); Cha Nova (no evidence
// after 2022, no Tabelog listing found); バーデンバーデン (120 seats plus a separate "Baden Baden Stand" listing).
import { openSweep, gm, it, day } from './lib-ginza-sweep.mjs';
const TODAY = '2026-10-24';
const { put, save } = openSweep(TODAY);

// ================================================================ 銀座しんのう
{
  const ST = 'https://san-tatsu.jp/articles/218248/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13253380/'; const R = TB + 'dtlrvwlst/';
  const ld = day(['11:30', '15:00'], ['17:00', '23:00']);
  put({
    id: 'tokyo_yakuzen_ginza_shinnou', name: '薬膳Dining&Bar 銀座しんのう (Yakuzen Dining & Bar Ginza Shinnou)', category: 'MOM_AND_POP',
    lat: 35.670751, lng: 139.768758,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The signature keema curry is minced meat, onion and 20+ spices with no sugar, but its thickening is not described; the cheese version is topped with a Mornay sauce (béchamel with stock and cheese), and the dinner menu has karaage and fries. No gluten-free option is mentioned.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan as described. The curries use minced meat or seafood, the cheese keema carries a cheese sauce, and the herbal soups are made with chicken or fish.',
    hours_raw: 'Mon–Sat 11:30–15:00 (L.O. 14:30) and 17:00–23:00 (L.O. 22:00); closed Sundays and holidays (Tabelog). Lunch is paid in cash, in advance (2026 review). Cards, IC and QR accepted otherwise.',
    hours: { 0: ld, 1: ld, 2: ld, 3: ld, 4: ld, 5: ld }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ginza 3-chōme, a back alley behind the Kabukiza — 2 min from Higashi-Ginza Stn A7',
    cuisine: 'Yakuzen (Chinese-medicine) cooking · herbal keema curry lunch with free herbal tea · 30+ medicinal liqueurs at night', cuisine_type: 'other',
    website: null, gmaps: gm('薬膳Dining&Bar 銀座しんのう 銀座3-11-7'), menu_url: null,
    notes: "[Mom & Pop · the yakuzen kitchen behind the Kabukiza] A two-storey house in the alley behind the Kabukiza, named after Shennong, the Chinese god of farming and medicine. Owner-cook 三上康介 is from Iwate and the son of a cook. Working in a care home's kitchen, the owner heard residents on salt-restricted diets complain about bland food and wanted to serve 'food that keeps you from getting ill' instead. That led to yakuzen school in Tokyo, qualifications as a Chinese-medicine yakuzen practitioner and international yakuzen practitioner, two years of kitchen training, and the shop in 2020. A younger brother, 隼平, a yakuzen coordinator, looks after more than 30 house medicinal liqueurs, and their mother came from Iwate to help. Lunch is herbal curry over Iwate Hitomebore rice from a school friend's family farm, with salad, sides and unlimited herbal teas. The keema is mixed meat, onion and 20+ spices sweetened with liquorice root instead of sugar. In 2023 the cheese keema was ¥1,600, and in 2026 a two-curry plate is ¥1,800. Dinner brings samgyetang, bak kut teh, tandoori chicken and soups adjusted to a body-type check sheet, plus a mulberry-leaf tiramisu sweetened with monk fruit (¥770).",
    chef_bio: {
      chef_name: '三上康介 (owner-cook) with brother 三上隼平 (drinks)', roles: ['owner-cook', 'yakuzen coordinator (brother)'],
      origin: 'Opened 2020 in Higashi-Ginza, near the Iwate antenna shop',
      background: 'From Iwate; culinary school, then a care-home kitchen; trained at a yakuzen school in Tokyo (中医薬膳師, 国際薬膳師, 国際中医師) and worked in restaurants for two years before opening (san-tatsu, 2023).',
      philosophy: '「病気になってから制限する食事じゃなくて、"病気にならないような食事"を提供できればみんな笑顔になれるのかな」',
      specialty: 'Yakuzen keema curry; herbal soups; medicinal liqueurs.',
      anecdotes: [
        { text: '「材料に砂糖は使っていません。最初に感じた甘みはカレーに混ぜ込んでいる"甘草（かんぞう）"という生薬です」', source: ST },
        { text: '「お味噌汁だって1つの薬膳です。季節によって、例えばちょっとミョウガを入れれば、それで春の薬膳になります」', source: ST },
        { text: '"I used the constitution check sheet to assess my body type and had the necessary herbal ingredients added to my ordered herbal soup." — October 2026.', source: R + 'B529087646/' },
      ],
      japanese_sources_summary: 'さんたつ(2023.1.9): 薬膳Dining&Bar 銀座しんのう、東銀座駅A7から徒歩2分の歌舞伎座裏の路地、2020年開店、店主・三上康介さん(岩手出身、料理人の父、老人保健施設の給食から薬膳へ、中医薬膳師・国際薬膳師・国際中医師)、弟で薬膳コーディネーターの隼平さんが30種類以上の薬酒、母も手伝う、薬膳キーマカレー(合挽き肉・玉ねぎ・20種以上のスパイス、砂糖不使用で甘草)、モルネーソース、岩手のひとめぼれ(同級生の実家の特別栽培米)、薬膳チーズキーマカレー1600円、薬膳茶飲み放題、夜はサムゲタン・バクテー・タンドリーチキン・から揚げ・クワの葉のティラミス(羅漢果)。食べログ: 月〜土11:30〜15:00・17:00〜23:00、日祝休、34席、カード・IC・QR可。2026年の口コミ: 2種盛り1,800円、ランチは現金前払い、体質チェックシートで薬膳スープ、デミグラスカレー1,650円、しんのうサラダ(ハーフ)1,650円、桑の葉ティラミス770円。',
      confidence: 'high', sources: [ST, TB, R + 'B516702318/', R + 'B529087646/', R + 'B537282947/', R + 'B537516922/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'The menu explains each dish\'s yakuzen effect; a body-type check sheet guides the dinner soups. Lunch is cash, paid at order.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Cheese keema topped with Mornay sauce (béchamel with stock and cheese).', source: ST }],
      soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Keema curry made with mixed minced meat.', source: ST }],
      staff_allergy_handling: [],
      positives: [], confidence: 'low', last_checked: TODAY,
    },
    mom_and_pop: true, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-11-7 鶴見ビル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; six reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目11番7号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B516702318/', R + 'B537282947/'],
    price_note: 'Cheese keema from the January 2023 san-tatsu feature; other prices from October 2026 reviews.', last_checked: TODAY, items: [
      it('薬膳カレー2種盛り', 'yakuzen karee nishu mori', 'Two yakuzen curries (e.g. keema and seafood), salad, sides, unlimited herbal tea', '¥1,800', 'Lunch', 'ask', 'no', '2026.', 'curry_duo'),
      it('薬膳チーズキーマカレー', 'yakuzen chiizu kiima karee', 'Yakuzen keema curry with Mornay cheese sauce', '¥1,600', 'Lunch', 'no', 'no', '2023.', 'cheese_keema'),
      it('デミグラスカレー', 'demigurasu karee', 'Demi-glace curry', '¥1,650', 'Dinner', 'ask', 'no', '2026.', 'demi_curry'),
      it('しんのうサラダ(ハーフ)', 'shinnou sarada', 'Shinnou salad, half size, goji dressing', '¥1,650', 'Dinner', 'ask', 'ask', '2026.', 'shinnou_salad'),
      it('薬膳スープ', 'yakuzen suupu', 'Herbal soup with chicken or fish, adjusted to your body type', '', 'Dinner', 'ask', 'no', '', 'herbal_soup'),
      it('桑の葉のティラミス', 'kuwa no ha no tiramisu', 'Mulberry-leaf tiramisu (monk-fruit sweetened)', '¥770', 'Dessert', 'ask', 'no', '2026.', 'mulberry_tiramisu'),
      it('薬酒', 'yakushu', 'House medicinal liqueurs (30+)', '', 'Drinks', 'ask', 'ask', '', 'yakushu'),
    ] }, {
    cuisine: '薬膳料理・薬膳茶飲み放題の薬膳キーマカレーランチ・夜は30種以上の薬酒',
    neighborhood: '銀座三丁目、歌舞伎座裏の路地。東銀座駅A7出口から徒歩2分',
    gf_detail: '要確認。名物の薬膳キーマカレーは挽き肉・玉ねぎ・20種以上のスパイスで砂糖不使用ですが、とろみの付け方は書かれていません。チーズキーマにはモルネーソース(ベシャメルにブイヨンとチーズ)、夜はから揚げやポテトフライも。グルテンフリーの選択肢は記載がありません。',
    vegan_detail: '記述上はヴィーガンではありません。カレーは挽き肉か魚介、チーズキーマはチーズソース、薬膳スープは鶏か魚。',
    notes: '[個人店・歌舞伎座裏の薬膳の店] 歌舞伎座裏の路地にある2階建ての一軒家で、店名は古代中国の農耕と医薬の神「神農」から。岩手出身で料理人の父を持つ店主・三上康介さんは、老人保健施設の給食で、塩分制限中の入所者が「味がない」とこぼすのを聞き、「病気にならないような食事」を出したいと薬膳の道へ。上京して薬膳の学校に通い、中医薬膳師・国際薬膳師・国際中医師の資格を取り、2年の料理修業を経て2020年に開店しました。薬膳コーディネーターの弟・隼平さんが30種類以上の自家製薬酒を担当し、岩手から上京した母も店を手伝います。ランチは同級生の実家で作る岩手のひとめぼれに薬膳カレー、サラダと副菜、薬膳茶飲み放題。キーマは合挽き肉・玉ねぎ・20種以上のスパイスで、甘みは砂糖でなく生薬の甘草。2023年は薬膳チーズキーマカレー1,600円、2026年はカレー2種盛り1,800円。夜はサムゲタン、バクテー、タンドリーチキン、体質チェックシートで生薬を加える薬膳スープ、羅漢果で甘みを付けた桑の葉のティラミス(770円)など。',
  });
}

// ================================================================ 銀座スイス
{
  const ST = 'https://san-tatsu.jp/articles/205427/';
  const TB = 'https://tabelog.com/en/tokyo/A1301/A130101/13268862/'; const R = TB + 'dtlrvwlst/';
  const YE = 'https://tabelog.com/en/tokyo/A1302/A130201/13268003/';
  const a = day(['11:00', '21:00']);
  put({
    id: 'tokyo_ginza_swiss_honten', name: '銀座スイス 本店 (Ginza Swiss)', category: 'OMNI',
    lat: 35.673063, lng: 139.766159,
    gf_confidence: 'ask', gf_label: 'GF — ask',
    gf_detail: 'Ask. The curry sauce is made without wheat flour (minced meat and vegetables simmered for two weeks), but it is served with a breaded, deep-fried pork cutlet, and the rest of the menu is fried yōshoku: cutlets, fried prawns, croquettes, gratin. Every meal comes with a clam-and-bacon potage whose thickening is not described.',
    vegan_status: 'no', vegan_label: 'Not vegan',
    vegan_detail: 'Not vegan. The curry sauce is simmered with minced meat, every meal comes with a clam-and-bacon potage made with evaporated milk, and the menu is meat and seafood yōshoku.',
    hours_raw: 'Daily 11:00–21:00 (L.O. 20:30) (Tabelog). The original katsu-curry lunch set is limited to 20 a day and can sell out at opening. Cards, IC and PayPay accepted.',
    hours: { 0: a, 1: a, 2: a, 3: a, 4: a, 5: a, 6: a }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ginza 3-chōme on Ginza Gas-tō-dōri, Ōkura Bekkan 2F — 2–3 min from Ginza Stn',
    cuisine: 'Yōshoku since 1947 · birthplace of katsu curry (1948) · clam-and-bacon potage with every meal', cuisine_type: 'yoshoku',
    website: null, gmaps: gm('銀座スイス 銀座3-4-4'), menu_url: null,
    notes: "[Yōshoku · where katsu curry was born] Founder 岡田進之助 had been head chef at Kōjimachi's 宝亭, one of the restaurants that laid the foundations of Western cooking in prewar Japan, and at the Prime Minister's residence. In 1947 the founder opened 'Grill Swiss' to make costly Western food affordable, naming it after neutral, green Switzerland out of a longing for peace. In 1948 the regular Chiba Shigeru, star second baseman of the Yomiuri Giants, wanted to eat a lot and eat fast, and asked for a cutlet on the curry rice. The result was katsu curry, still on the menu as 'Chiba-san's cutlet curry'. The curry sauce is minced meat with onion, carrot, apple and ginger, simmered for two weeks and made without wheat flour. Every meal comes with a clam-and-bacon potage, made with the same bacon supplier and evaporated-milk brand for decades. In 2022 the lunch-only original katsu-curry set was ¥1,430 and limited to 20 a day, the 'Shōwa gratin' ¥2,640 and yōshoku shumai ¥660. The shop moved to this second-floor room in February 2022, and 庄子あけみ, the third-generation mama counting from the founder, looks after the guests. In October 2026 there were queues at opening for the katsu curry, cream croquettes and hamburg-and-fried-prawn lunch sets. A branch in the Yaesu underground mall is marked closed on Tabelog (last reviews September 2025), leaving this as the only shop found.",
    chef_bio: {
      chef_name: '岡田進之助 (founder); floor run by third-generation mama 庄子あけみ', roles: ['founder (former head chef at 宝亭 and the Prime Minister\'s residence)', '3rd-generation mama'],
      origin: 'Opened 1947 as Grill Swiss; moved to Ōkura Bekkan 2F in February 2022',
      background: 'The founder cooked at 宝亭 in Kōjimachi and at the Prime Minister\'s residence before opening (san-tatsu, 2022).',
      philosophy: 'Founded to let more people eat Western food, then expensive, after the war.',
      specialty: 'Original katsu curry; Shōwa gratin; clam-and-bacon potage.',
      anecdotes: [
        { text: '「1948年当時、常連客だったプロ野球巨人軍の名二塁手である千葉茂氏が、お腹がすいてたくさん食べたいし、早く食べたい、ガツンと一気に食べたい、と思いついたのが、カレーライスにカツレツをのせて食べる、というものでした」 — 庄子あけみ.', source: ST },
        { text: 'The bacon for the potage has come from the same producer for years, and the evaporated milk is the same brand — "no other bacon gives the same taste."', source: ST },
        { text: '"Previously, I used to visit their branch at Tokyo Station\'s Yaesu Exit." — October 2026.', source: R + 'B537151422/' },
      ],
      japanese_sources_summary: 'さんたつ(2022.10.31): 銀座スイス、銀座ガス灯通り沿い大倉別館2F(2022年2月移転)、創業者・岡田進之助は麹町「宝亭」と首相官邸の料理長、1947年グリルスイスとして開店、店名は平和への思い、3代目ママ・庄子あけみさん、1948年に巨人軍の千葉茂がカツカレーを考案、元祖カツカレーセット1430円(ランチ限定20食、スープ・サラダ付き)、カレーはひき肉・玉ねぎ・人参・りんご・生姜を2週間煮込み小麦粉不使用、千葉さんのカツレツカレー、あさりとベーコンのポタージュ(エバミルク、同じ業者のベーコン)、スープおかわり220円、昭和のグラタン2640円、洋食屋さんのシュウマイ660円。食べログ: 本店、毎日11:00〜21:00(L.O.20:30)、42席、カード・IC・PayPay可。八重洲地下街の店は閉店表示(最後の口コミ2025年9月)。2026年10月の口コミ: 開店前の行列、ランチB(エビフライ・ヒレカツ)、ハンバーグとエビフライ、クリームコロッケ、千葉さんのプレミアムカツカレー。',
      confidence: 'high', sources: [ST, TB, YE, R + 'B537151422/', R + 'B536721985/', R + 'B537617076/', R + 'B537653133/'],
    },
    cultural_comfort: { level: 'konnichiwa', note: 'Classic yōshoku dining room with counter, tables and semi-private rooms; open daily. Arrive at opening for the limited katsu-curry set.' },
    safety: {
      dedicated_fryer: null,
      gf_cross_contamination: [{ text: 'Katsu curry is a breaded, fried pork cutlet on the curry.', source: ST }],
      soy_sauce_wheat: [], vegan_cross_contact: [{ text: 'Clam-and-bacon potage with evaporated milk comes with every meal; curry simmered with minced meat.', source: ST }],
      staff_allergy_handling: [], positives: [{ text: 'Curry sauce made without wheat flour (小麦粉は使っていない).', source: ST }], confidence: 'medium', last_checked: TODAY,
    },
    mom_and_pop: false, loc_precise: true, address_ja: '〒104-0061 東京都中央区銀座3-4-4 大倉別館 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都中央区銀座三丁目4番4号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [ST, R + 'B536721985/', R + 'B537617076/'],
    price_note: 'Prices from the October 2022 san-tatsu feature; set contents from 2026 reviews.', last_checked: TODAY, items: [
      it('元祖カツカレーセット', 'ganso katsu karee setto', 'Original katsu curry set with soup and salad (lunch, 20 a day)', '¥1,430', 'Lunch', 'no', 'no', '2022.', 'ganso_katsu_curry'),
      it('千葉さんのカツレツカレー', 'chiba-san no katsuretsu karee', "Chiba-san's cutlet curry (all day)", '', 'Curry', 'no', 'no', '', 'chiba_katsu_curry'),
      it('昭和のグラタン', 'shouwa no guratan', 'Shōwa gratin with seafood', '¥2,640', 'Mains', 'no', 'no', '2022.', 'showa_gratin'),
      it('洋食屋さんのシュウマイ', 'youshokuya-san no shuumai', 'Yōshoku shumai topped with diced bacon', '¥660', 'Small plates', 'ask', 'no', '2022.', 'shumai'),
      it('ランチB(エビフライ・ヒレカツ)', 'ranchi B', 'Lunch B: fried prawns and pork fillet cutlet', '', 'Lunch', 'no', 'no', '', 'lunch_b'),
      it('クリームコロッケ盛り合わせ', 'kuriimu korokke', 'Beef and crab cream croquettes', '', 'Mains', 'no', 'no', '', 'croquettes'),
      it('あさりとベーコンのポタージュ(おかわり)', 'potaaju', 'Clam and bacon potage, refill', '¥220', 'Soup', 'ask', 'no', '2022.', 'potage'),
    ] }, {
    cuisine: '1947年創業の洋食・カツカレー発祥の店(1948年)・全食事にあさりとベーコンのポタージュ',
    neighborhood: '銀座三丁目、銀座ガス灯通り沿いの大倉別館2F。銀座駅から徒歩2〜3分',
    gf_detail: '要確認。カレーソースは小麦粉を使わず(ひき肉と野菜を2週間煮込む)ですが、パン粉を付けて揚げたポークカツレツと一緒に出ます。ほかのメニューもカツレツ、エビフライ、コロッケ、グラタンなど揚げ物中心の洋食。全ての食事に付くあさりとベーコンのポタージュのとろみの付け方は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。カレーソースはひき肉で煮込み、全ての食事にエバミルクを使ったあさりとベーコンのポタージュが付き、メニューは肉と魚介の洋食です。',
    notes: '[洋食・カツカレー発祥の店] 創業者の岡田進之助は、戦前の日本の西洋料理の礎を作った麹町「宝亭」や首相官邸の料理長を務めた人物。戦後、高価だった洋食を多くの人に食べてもらいたいと1947年に「グリルスイス」を開店し、緑豊かな永世中立国スイスに平和への思いを込めました。1948年、常連だった巨人軍の名二塁手・千葉茂さんが、たくさん早くガツンと食べたいとカレーライスにカツレツをのせたのがカツカレーの始まりで、今も「千葉さんのカツレツカレー」として残ります。カレーソースはひき肉と玉ねぎ・人参・りんご・生姜を2週間煮込み、小麦粉は不使用。全ての食事に付くあさりとベーコンのポタージュは、長年同じ業者のベーコンと同じ銘柄のエバミルクで作ります。2022年はランチ限定20食の元祖カツカレーセット1,430円、昭和のグラタン2,640円、洋食屋さんのシュウマイ660円。2022年2月に今の2階へ移転し、創業者から数えて3代目のママ・庄子あけみさんが客を迎えます。2026年10月も開店前から行列で、カツカレー、クリームコロッケ、ハンバーグとエビフライのランチが人気。八重洲地下街の店は食べログで閉店表示(最後の口コミは2025年9月)。',
  });
}

save();
