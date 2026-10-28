// Osaka sweep (2-mile circle around Dotonbori), batch 95 — mom-and-pop phase (all OMNI).
//   + 天麩羅 安藤 (Tabelog Tempura 100 2025; tempura fried in extra-virgin olive oil; Soemoncho B1F)
//   + 由堂 (refined oden and seasonal plates with sake; Higashi-Shinsaibashi)
//   + 南地 末廣鮓 (century-old sushi counter, Kamigata roots now Edomae; Sennichimae)
//   + 鮨 一永 (omakase sushi, thin-spread sweet shrimp; three seatings; Sennichimae B1F)
//   + 淳ちゃん寿し (busy, generous neighborhood sushi bar; toro-taku, aburi salmon)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 95);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 天麩羅 安藤
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27123561/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://tenpura-ando.com';
  put({
    id: 'osaka_tempura_ando_soemoncho', name: '天麩羅 安藤 (Tempura Ando)', category: 'OMNI',
    lat: 34.670152, lng: 135.504208, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat tempura batter throughout the course; katsu sandwich.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: shrimp, fish, sea urchin and beef in the course.',
    hours_raw: 'Mon–Sat one seating at 18:00 (doors 17:45); Sun two seatings at 12:00 and 18:00 (doors 11:45 and 17:45); irregular holidays (Tabelog, staff-maintained). Course only, about ¥20,000–30,000. Cards, PayPay and WeChat Pay accepted (Tabelog). End times not listed.',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Soemoncho 5-2, TM-33 Bldg B1F — 4 min from Namba Walk exit B26',
    cuisine: 'Tabelog Tempura 100 (2025) · omakase tempura course fried in extra-virgin olive oil at low temperature, light and not heavy · opens with a katsu sandwich · several kinds of shrimp, body, heads and roe · seasonal fish, e.g. young ayu; sea urchin; seaweed · vegetables direct from growers: carrot, sweet potato, broccoli, mushroom, lotus root · Kagawa Olive Beef · tencha (tempura rice tea) to finish · about ten seasonal sakes, beer, wine · 8-seat hinoki counter',
    website: OWN, gmaps: gm('天麩羅 安藤 宗右衛門町'), menu_url: null,
    notes: "[Japanese · a Tabelog 100 tempura counter frying in olive oil] A calm basement counter of hinoki wood just off the Soemoncho nightlife strip, open since 2021 and picked for Tabelog's Tempura 100 in 2025. The difference is the oil: extra-virgin olive oil at low temperature, which the shop says soaks in less and drains well, so even a long course stays light. The omakase opens with a surprise katsu sandwich, then runs through seasonal seafood and growers' vegetables: several kinds of shrimp including heads and roe, young ayu, sea urchin, sweet carrots and sweet potato, plus Kagawa Olive Beef, and finishes with tencha. Diners describe the chef as friendly and talkative about the ingredients. About ten seasonal sakes. One seating nightly at 18:00, plus Sunday lunch; book ahead.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Opened 4 June 2021 (Tabelog)', background: 'Tempura counter (official site tenpura-ando.com; Tabelog, staff-maintained); Tabelog Tempura 100 2025.', philosophy: 'Extra-virgin olive oil and low-temperature frying to keep the umami, sweetness and aroma of the ingredients (Tabelog listing).', specialty: 'Olive-oil tempura course.',
      anecdotes: [
        { text: '"The tempura, fried in olive oil, has an astonishingly light batter that doesn\'t weigh you down at all. I was impressed by the precise cooking techniques used for each ingredient. The carrots and sweet potatoes were exceptionally delicious." — August 2026.', source: R + 'B533184059/' },
        { text: '"The course starts with a surprising katsu sandwich, followed by a parade of delicious tempura." — September 2026.', source: R + 'B536518007/' },
      ],
      japanese_sources_summary: '公式 tenpura-ando.com。食べログ(店舗会員): 天麩羅 安藤、大阪市中央区宗右衛門町5-2 TM-33ビル B1F、なんばウォークB26出口から徒歩4分、月〜土18:00一斉スタート(17:45開場)、日は12:00と18:00の2部制、不定休、カード・PayPay・WeChat Pay可、8席、2021年6月4日開店、食べログ 天ぷら 百名店2025、エクストラバージンオリーブオイルで低温調理、素材の旨味・甘み・香り、旬の魚介と産地直送の野菜、香川のオリーブ牛。口コミ(2026年4〜9月): 3回目、旬の素材、季節外れの雲丹、オリーブオイルで軽い、スタッフが親切、檜のカウンター、人参とさつまいも、創作天ぷら、天茶で締め、接待や記念日に、稚鮎、数種類の海老、海苔、雲丹、塩、カウンター7席、話好きな店主、季節で変わるメニュー、ブロッコリー・きのこ・蓮根、海老の頭と卵も、季節の日本酒10種ほど、ビール、ワイン、記念日、カツサンドから始まるコース。',
      confidence: 'medium', sources: [TB, OWN, R + 'B533184059/', R + 'B536518007/', R + 'B514182555/', R + 'B533258151/', R + 'B535565843/', R + 'B536143718/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chef chats about ingredients at the counter (September 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町5-2 TM-33ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町5番2号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536518007/', R + 'B535565843/'],
    price_note: 'Course only; reviewers spent about ¥15,000–30,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase tempura course', '', 'Course', 'no', 'no', 'Katsu sandwich to tencha; 2026.', 'course'),
    ] }, {
    cuisine: '食べログ 天ぷら 百名店(2025)・エクストラバージンオリーブオイルで低温で揚げる軽いおまかせ天ぷらコース・カツサンドから始まる・数種類の海老、身も頭も卵も・稚鮎など旬の魚、雲丹、海苔・産地直送の野菜: 人参、さつまいも、ブロッコリー、きのこ、蓮根・香川のオリーブ牛・締めは天茶・季節の日本酒10種ほど、ビール、ワイン・檜のカウンター8席',
    neighborhood: '中央区宗右衛門町5-2 TM-33ビル B1F。なんばウォークB26出口から徒歩4分',
    gf_detail: 'グルテンフリーではありません。コースを通して小麦の天ぷら衣、カツサンド。',
    vegan_detail: 'ヴィーガンではありません。コースに海老、魚、雲丹、牛肉。',
    notes: '[和食・オリーブオイルで揚げる百名店の天ぷらカウンター] 宗右衛門町の繁華街からすぐの地下にある檜の落ち着いたカウンターで、2021年開店、2025年に食べログの天ぷら百名店に選出。違いは油で、エクストラバージンオリーブオイルを低温で使い、店によれば素材に染み込みにくく油切れがよいので、長いコースでも軽い。おまかせは驚きのカツサンドから始まり、旬の魚介と生産者の野菜へ: 頭や卵まで数種類の海老、稚鮎、雲丹、甘い人参やさつまいも、香川のオリーブ牛、締めは天茶。店主は気さくで素材の話をしてくれるという声。季節の日本酒が10種ほど。毎晩18時の一斉スタート、日曜は昼も。予約を。',
  });
}

// ================================================================ 由堂
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27083805/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.yoshitaka-osaka.jp/';
  const D = day(['18:00', '23:00']);
  put({
    id: 'osaka_yoshitaka_oden_higashishinsaibashi', name: '由堂 (Yoshitaka)', category: 'OMNI',
    lat: 34.671497, lng: 135.503023, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-seasoned oden broth, fried abura kasu, somen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi-based oden, seafood, beef tongue, chicken.',
    hours_raw: 'Tue–Sun 18:00–23:00; closed Mondays (Tabelog, staff-maintained). Reservations advised; hard to book in winter (June 2026). 10% service charge. Cards and PayPay accepted (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-8-5, Nippo New Grand Bldg 2F, at the very back — 8 min from Shinsaibashi or Namba Stn',
    cuisine: 'Refined oden and seasonal Japanese plates · oden: daikon, konnyaku, clams with kuzukiri, green onion with abura kasu, tuna negima, whale saezuri, yuba · oden-broth soup with wild mushrooms and free-range chicken · shime-saba sandwich · hairy crab in the shell · umazurahagi with its liver · junsai with shirasu · yellow garlic chives with beef tongue · sardine tsukune · grilled eel · sashimi · sake and bottled beer · 7 counter seats, 1 table for four',
    website: OWN, gmaps: gm('由堂 東心斎橋 おでん'), menu_url: null,
    notes: "[Japanese · refined oden and sake hidden in Higashi-Shinsaibashi] A quiet, old-Shinsaibashi-style oden counter at the very back of a building's second floor, open since 2014, with classical music playing. The oden is the heart of it, delicately seasoned: daikon, konnyaku, big clams with kuzukiri, green onion with abura kasu, tuna negima, whale saezuri and yuba. Around it come seasonal plates: an oden-broth soup with wild mushrooms and free-range chicken, a shime-saba sandwich, hairy crab packed in its shell, umazurahagi with its liver, a fluffy sardine tsukune that converted a sardine skeptic, crisp grilled eel. Good sake to match. Dinner runs about ¥10,000–20,000 with a 10% service charge, and one table waited a long time for dishes. Book ahead, especially in winter; closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 7 July 2014 (Tabelog)', background: 'Oden and Japanese restaurant (official site yoshitaka-osaka.jp; Tabelog, staff-maintained).', philosophy: null, specialty: 'Oden; seasonal plates with sake.',
      anecdotes: [
        { text: '"First, we have the oden broth soup infused with the umami of natural mushrooms. One sip, and the rich flavor spreads pleasantly." — October 2026, seventh visit.', source: R + 'B502189735/' },
        { text: '"From the oden, we enjoyed the Japanese radish, konnyaku (konjac), clams, and kuzukiri (starch noodles) which were all flavorful… The grilled eel was perfectly crispy on the outside." — May 2026.', source: R + 'B528071984/' },
      ],
      japanese_sources_summary: '公式 yoshitaka-osaka.jp。食べログ(店舗会員): 由堂、大阪市中央区東心斎橋2-8-5 日宝ニューグランドビル 2F、心斎橋駅・なんば駅から徒歩8分、火〜日18:00〜23:00、月曜定休、チャージ料10%、カード・PayPay可、11席(カウンター7、4人掛けテーブル1)、2014年7月7日開店、おでん・和食・日本酒。口コミ(2026年4〜10月): 天然きのこと地鶏のおでん出汁スープ、サッポロ黒ラベル、〆鯖サンド、毛蟹、ウマヅラハギの肝和え、上質なおでん、ビルの2階のいちばん奥、じゅんさいとしらす、大根、こんにゃく、蛤と葛切り、岩もずく、黄ニラと牛タン、春菊ととろろ、刺身の盛り合わせ、鰻の焼き物、冬は予約が取りにくい、ねぎと油かす、鮪のねぎま、鯨のさえずり、湯葉、冷たい素麺の先付け、提供に時間がかかったという声、クラシック音楽、いわしのつくね。',
      confidence: 'medium', sources: [TB, OWN, R + 'B502189735/', R + 'B528071984/', R + 'B526739977/', R + 'B530925820/', R + 'B534786963/', R + 'B535060290/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff recommend dishes on request (August 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-8-5 日宝ニューグランドビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目8番5号 (go) 21m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B502189735/', R + 'B528071984/', R + 'B530925820/'],
    price_note: 'No dish prices found; dinner about ¥10,000–20,000 plus a 10% service charge.', last_checked: TODAY, items: [
      it('', '', 'Oden (daikon, clams with kuzukiri, yuba and more)', '', 'Oden', 'no', 'no', 'May–June 2026.', 'oden'),
      it('', '', 'Oden-broth soup with mushrooms and chicken', '', 'Small plates', 'no', 'no', 'October 2026.', 'dashi_soup'),
      it('', '', 'Shime-saba sandwich', '', 'Small plates', 'no', 'no', 'October 2026.', 'saba_sando'),
      it('', '', 'Sardine tsukune', '', 'Small plates', 'no', 'no', 'August 2026.', 'iwashi_tsukune'),
    ] }, {
    cuisine: '上品なおでんと旬の和食・おでん: 大根、こんにゃく、蛤と葛切り、ねぎと油かす、鮪のねぎま、鯨のさえずり、湯葉・天然きのこと地鶏のおでん出汁スープ・〆鯖サンド・甲羅に詰めた毛蟹・ウマヅラハギの肝和え・じゅんさいとしらす・黄ニラと牛タン・いわしのつくね・鰻の焼き物・刺身・日本酒と瓶ビール・カウンター7席、4人掛けテーブル1卓',
    neighborhood: '中央区東心斎橋2-8-5 日宝ニューグランドビル2F、いちばん奥。心斎橋駅・なんば駅から徒歩8分',
    gf_detail: '実際にはグルテンフリーではありません。醤油で味付けしたおでんの出汁、揚げた油かす、素麺。',
    vegan_detail: 'ヴィーガンではありません。だしのおでん、魚介、牛タン、鶏肉。',
    notes: '[和食・東心斎橋に隠れた上品なおでんと日本酒] ビル2階のいちばん奥にある、古き心斎橋の雰囲気の静かなおでんのカウンターで、2014年開店、クラシック音楽が流れる。主役はやさしい味のおでんで、大根、こんにゃく、大きな蛤と葛切り、ねぎと油かす、鮪のねぎま、鯨のさえずり、湯葉。まわりには季節の一品: 天然きのこと地鶏のおでん出汁スープ、〆鯖サンド、甲羅に詰めた毛蟹、ウマヅラハギの肝和え、いわし嫌いも驚いたふわふわのいわしのつくね、カリッと焼いた鰻。日本酒も合わせて。夜は1万〜2万円ほどでチャージ10%、料理がなかなか出なかったという声も。特に冬は予約を。月曜定休。',
  });
}

// ================================================================ 南地 末廣鮓
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27026381/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_nanchi_suehiro_zushi_sennichimae', name: '南地 末廣鮓 (Nanchi Suehiro Zushi)', category: 'OMNI',
    lat: 34.668261, lng: 135.504229, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-based nikiri and tsume; no gluten-free handling described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and shellfish throughout.',
    hours_raw: 'Mon–Sat and holidays 17:00–23:00, last entry 21:30; closed Sundays (and Mondays that are holidays, per the listing) (Tabelog, staff-maintained). Cards accepted; no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-7-1, near Aioibashi — 5 min from Nippombashi Stn',
    cuisine: 'Long-established sushi, Kamigata roots now serving Edomae · omakase with appetizers and 12 nigiri, or à la carte · torigai, lightly grilled nodoguro, chutoro · abalone with its liver sauce over rice · anago · sea urchin · 8 seats at an L-shaped white-wood counter',
    website: null, gmaps: gm('南地 末廣鮓 千日前'), menu_url: null,
    notes: "[Sushi · a century-old Minami sushi counter by Aioibashi] An eight-seat counter of pale wood near Aioibashi, a long-established sushi house that one diner dates back more than 100 years, which began with Kamigata (Osaka-style) sushi and now serves Edomae. Book the omakase of appetizers and 12 nigiri, or order à la carte; one diner found the prices reasonable. Highlights in reviews: crisp torigai, thick lightly grilled nodoguro, abalone with its liver sauce over rice, a refined anago, and sea urchin that melts away. Seasoning is balanced, neither too sweet nor too sour. Not every visit lands: one diner found some pieces fishy or too salty. Enter by 21:30; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded over 100 years ago, per a July 2026 review.', background: 'Long-established sushi restaurant; Kamigata sushi roots, now Edomae (July 2026 review; Tabelog, staff-maintained).', philosophy: null, specialty: 'Edomae nigiri; abalone with liver sauce.',
      anecdotes: [
        { text: '"Originally, it was known for Kamigata sushi, but over time it has evolved to serve Edomae sushi… The abalone is served with liver sauce on top of the rice… The anago (conger eel) was exquisite." — July 2026.', source: R + 'B532025176/' },
        { text: '"The Nodoguro was slightly grilled, cut thickly, and left a memorable impression… The seasoning was just right—not too sweet, nor too sour." — August 2024.', source: R + 'B489284065/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 南地 末廣鮓、大阪市中央区千日前1-7-1、日本橋駅から徒歩5分、なんば駅から徒歩10分、月〜土祝17:00〜23:00、21:30までに入店、日曜定休、カード可、電子マネー・QR不可、カウンター8席。口コミ(2024年6月〜2026年7月): 江戸前寿司、白木のL字カウンター、鯵、煮蛤、毛蟹、雲丹、長年通う店、鳥貝、炙ったのどぐろ、中トロ、甘すぎず酸っぱすぎない味付け、鮑と肝ソース、つまみと握りのおまかせ、生臭さや塩辛さが気になったという声、相合橋の近く、気軽な雰囲気、アラカルトも、手頃な値段、握り12貫のおまかせ、創業100年以上、上方寿司から江戸前へ、穴子が絶品。',
      confidence: 'medium', sources: [TB, R + 'B532025176/', R + 'B489284065/', R + 'B486313480/', R + 'B507623110/', R + 'B509406285/', R + 'B515935434/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase or à la carte; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-7-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目7番1号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515935434/', R + 'B532025176/', R + 'B489284065/'],
    price_note: 'No prices found; reviewers spent about ¥10,000–30,000.', last_checked: TODAY, items: [
      it('', '', 'Omakase with appetizers and 12 nigiri', '', 'Course', 'no', 'no', 'October 2025.', 'omakase'),
      it('', '', 'Abalone with liver sauce over rice', '', 'Nigiri', 'no', 'no', 'July 2026.', 'awabi'),
      it('', '', 'Anago', '', 'Nigiri', 'no', 'no', 'July 2026.', 'anago'),
    ] }, {
    cuisine: '上方寿司から江戸前に移った老舗の寿司・つまみと握り12貫のおまかせ、アラカルトも・鳥貝、軽く炙ったのどぐろ、中トロ・鮑の肝ソースのせ・穴子・雲丹・白木のL字カウンター8席',
    neighborhood: '中央区千日前1-7-1、相合橋の近く。日本橋駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油ベースの煮切りとツメ、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚と貝が中心。',
    notes: '[寿司・相合橋近く、ミナミの老舗の寿司カウンター] 相合橋近くの白木のカウンター8席の店で、創業100年以上という声もある老舗、上方寿司から始まり今は江戸前。つまみと握り12貫のおまかせか、アラカルトでも。質のわりに値段が手頃という声。口コミで光るのは、歯ごたえのある鳥貝、厚切りで軽く炙ったのどぐろ、肝ソースをのせた鮑、上品な穴子、とろける雲丹。味付けは甘すぎず酸っぱすぎない。生臭さや塩辛さが気になったという声もある。21時半までに入店、日曜定休。',
  });
}

// ================================================================ 鮨 一永
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27139479/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sushi_ichiei_sennichimae', name: '鮨 一永 (Sushi Ichiei)', category: 'OMNI',
    lat: 34.668099, lng: 135.504542, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy-based seasoning in the omakase; no gluten-free handling described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish and shellfish omakase.',
    hours_raw: 'Seatings daily 12:00–14:00, 17:00–19:00 and 19:30–21:30; irregular holidays (Tabelog, staff-maintained). Reservation only in practice; booked out for a while in October 2026. Omakase about ¥25,000 (September 2026). Photos allowed without shutter sound or flash. Cards accepted; no e-money or QR (Tabelog).',
    hours: ALL(day(['12:00', '14:00'], ['17:00', '19:00'], ['19:30', '21:30'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-6-10, B1F — 3 min from Kintetsu Nippombashi Stn',
    cuisine: 'Omakase sushi about ¥25,000 · signature thin-spread sweet shrimp with rock salt and sudachi · clam soup · appetizers such as kue shabu-shabu, grilled kinmedai shabu-shabu, eel and cucumber in rice paper Peking-duck style, abalone with liver sauce, ankimo, sesame mackerel · nigiri: clam, white fish, akami, chutoro, squid, sea urchin, ikura, shima-aji, biwamasu · fish bought direct from producers and Toyosu · sake · 7-seat hinoki counter',
    website: null, gmaps: gm('鮨 一永 千日前'), menu_url: null,
    notes: "[Sushi · a young omakase counter with a sweet-shrimp signature in Sennichimae] A seven-seat hinoki counter in a basement off Sennichimae, open since October 2023, which one regular says has been a Michelin Guide Kyoto-Osaka selected restaurant in 2025 and 2026. The omakase (about ¥25,000) opens with clam soup and the signature: sweet shrimp spread paper-thin, eaten with rock salt and sudachi. Appetizers are inventive, such as eel and cucumber wrapped Peking-duck style, kue or kinmedai shabu-shabu, abalone with liver sauce, before nigiri of seasonal fish the chef sources directly from producers and Toyosu. The chef seems reserved at first but warms up; the host is friendly. Three seatings a day; book well ahead.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: 'Opened 12 October 2023 (Tabelog)', background: 'Omakase sushi counter (Tabelog, staff-maintained); Michelin Guide Kyoto-Osaka selected restaurant 2025 and 2026, per an October 2026 review.', philosophy: 'Fish sourced directly from producing areas and fishermen, plus Toyosu (September 2026 review).', specialty: 'Thin-spread sweet shrimp; omakase.',
      anecdotes: [
        { text: '"One of the restaurant\'s specialties is the thinly spread sweet shrimp served with rock salt and a squeeze of sudachi (Japanese citrus) on the side." — September 2026, omakase ¥25,000.', source: R + 'B536418111/' },
        { text: '"The sushi ingredients are sourced directly by the chef, who visits the production areas and sometimes purchases from fishermen, as well as acquiring necessary ingredients from Toyosu Market." — September 2026.', source: R + 'B535121532/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 鮨 一永、大阪市中央区千日前1-6-10 千寿ビル B1F、近鉄日本橋駅から徒歩3分、なんば駅から徒歩6分、毎日12:00〜14:00・17:00〜19:00・19:30〜21:30の部制、不定休、カード可、電子マネー・QR不可、2023年10月12日開店、撮影はシャッター音とフラッシュなしで。口コミ(2026年9〜10月): 6回目、ミシュランガイド京都・大阪2025・2026セレクテッドという声、甘海老(シート状の刺身)、鰻と胡瓜のライスペーパー巻き、天草のクエしゃぶ、胡麻鯖、あん肝、網走の金目鯛の炙りしゃぶ、北京ダック風の鰻と胡瓜、千葉の黒鮑と肝ソース、燻製大根巻き、茗荷と胡麻の巻物、ビワマス・いくら・縞鯵、雑居ビルの7席のカウンター、職人気質の店主、親しみやすいオーナー、産地や漁師から直接と豊洲から仕入れ、きんきの湯引き、炙り金目鯛、額の絵、檜のカウンター、おまかせ25,000円、蛤のお椀、甘海老に岩塩とすだち、白身・赤身・中トロ・イカ・雲丹、予約は今なら取りやすいという声、しばらく満席という声。',
      confidence: 'medium', sources: [TB, R + 'B536418111/', R + 'B535121532/', R + 'B516081593/', R + 'B527809760/', R + 'B536477127/', R + 'B537735880/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-6-10 千寿ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目6番10号 (go) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536418111/', R + 'B527809760/'],
    price_note: 'Omakase price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥25,000', 'Course', 'no', 'no', 'September 2026.', 'omakase'),
      it('', '', 'Thin-spread sweet shrimp with rock salt and sudachi', '', 'Signature', 'no', 'no', 'September–October 2026.', 'amaebi'),
    ] }, {
    cuisine: 'おまかせ寿司25,000円ほど・名物はシート状に薄く広げた甘海老に岩塩とすだち・蛤のお椀・つまみ: クエしゃぶ、金目鯛の炙りしゃぶ、ライスペーパーで巻いた北京ダック風の鰻と胡瓜、鮑の肝ソース、あん肝、胡麻鯖・握り: 蛤、白身、赤身、中トロ、イカ、雲丹、いくら、縞鯵、ビワマス・産地から直接と豊洲から仕入れる魚・日本酒・檜のカウンター7席',
    neighborhood: '中央区千日前1-6-10 千寿ビル B1F。近鉄日本橋駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではありません。おまかせに醤油ベースの味付け、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚と貝のおまかせ。',
    notes: '[寿司・千日前、甘海老が名物の若いおまかせカウンター] 千日前の地下にある檜のカウンター7席の店で、2023年10月開店、ミシュランガイド京都・大阪の2025・2026年のセレクテッドだという常連の声も。おまかせ(25,000円ほど)は蛤のお椀と名物から始まり、薄く広げた甘海老を岩塩とすだちで。北京ダック風に巻いた鰻と胡瓜、クエや金目鯛のしゃぶしゃぶ、肝ソースの鮑など工夫のあるつまみのあと、店主が産地や豊洲から直接仕入れる旬の魚の握りへ。店主は最初は口数が少ないが打ち解けてくる、接客も気さく。1日3部制、早めの予約を。',
  });
}

// ================================================================ 淳ちゃん寿し
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27025956/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '22:00']);
  put({
    id: 'osaka_junchan_zushi_sennichimae', name: '淳ちゃん寿し (Jun-chan Zushi)', category: 'OMNI',
    lat: 34.668241, lng: 135.50443, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: soy sauce, sweet-vinegar dressings; no gluten-free handling described.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish and crab throughout.',
    hours_raw: 'Tue–Sun 17:30–22:00; closed Mondays; until sold out (Tabelog, staff-maintained). Reservations recommended, often full; same-day bookings worked (2026). Cards accepted; no e-money or QR (Tabelog). Non-smoking, smoking area outside.',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-6-16 — 5 min from Namba Stn, a block off Dotonbori',
    cuisine: 'Lively, generous neighborhood sushi bar · toro-taku roll, the favorite (one toro item per table), toro tekka · aburi salmon, aburi scallops · eel, anago, kanpachi, hirame, akami · big sashimi platters: toro, kazunoko, scallop, flounder, sea bream, geoduck · crab-claw sunomono, vinegared platter · kani miso · squid with sea urchin · grilled scallops · sake · no prices listed · counter and tables, 19 seats, wheelchair accessible',
    website: null, gmaps: gm('淳ちゃん寿し 千日前'), menu_url: null,
    notes: "[Sushi · a busy, generous Minami sushi bar regulars rebook] A popular 19-seat sushi bar a block off Dotonbori, usually full, with regulars who book the same day and come back often. Portions are big: oversized toppings, huge rolls and sashimi platters piled with toro, kazunoko, scallops, flounder and geoduck. The favorite is the toro-taku roll (only one toro item per table, so choose between it and the toro tekka); aburi salmon, rare and juicy, comes close behind, with eel and anago. Start with the crab-claw sunomono in sweet vinegar or the kani miso, which pull you toward sake. There's no price list, but two diners paid about ¥17,000 with drinks. Popular items sell out; one diner found the rolls unevenly cut. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Sushi bar (Tabelog, staff-maintained; 2026 reviews).', philosophy: null, specialty: 'Toro-taku roll; aburi salmon.',
      anecdotes: [
        { text: '"My favorites are toro-taku, aburi salmon, aburi scallops, and eel!… The aburi salmon is rare and incredibly juicy!" — September 2026, fifth visit.', source: R + 'B489232415/' },
        { text: '"You can only order one item that has \'toro\' in it… this time I went for toro tekka! It was packed with toro, and the portion was huge." — September 2026.', source: R + 'B536600188/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 淳ちゃん寿し、大阪市中央区千日前1-6-16、なんば駅から徒歩5分、火〜日17:30〜22:00、月曜定休、売り切れ次第終了、カード可、電子マネー・QR不可、19席、禁煙(店外に喫煙所)、車椅子可。口コミ(2026年7〜10月): 予約、トロは1テーブル1品、巻物がお得、トロたく、炙りサーモン、炙りホタテ、鰻、穴子、カンパチ、ヒラメ、ネタが大きい、巻物が大きい、蟹爪の酢の物、鮪の赤身、刺身盛り合わせ、蟹味噌、数の子、ホタテ、ヒラメ、鯛、みる貝、当日予約でも入れた、つまみの質が高い、つまみ3品と握り、冷酒2本とビールで1万1千円ほど、接客がよい、満席、コスパがよい、値段の表示なし、蟹爪は必食、トロ鉄火、2人で1万7千円ほど、酢の物の盛り合わせ(蟹爪、鯵、北寄貝、数の子)、イカと雲丹の刺身、焼きホタテ、トロたくの切り方が不揃いという声、品切れ多数。',
      confidence: 'medium', sources: [TB, R + 'B489232415/', R + 'B536600188/', R + 'B513164811/', R + 'B532672220/', R + 'B534497205/', R + 'B537247015/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No price list; staff service praised (August 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-6-16',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目6番16号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B489232415/', R + 'B536600188/', R + 'B537247015/'],
    price_note: 'No price list; about ¥8,500 a person with drinks (September 2026).', last_checked: TODAY, items: [
      it('', '', 'Toro-taku roll', '', 'Rolls', 'no', 'no', 'One toro item per table; 2026.', 'torotaku'),
      it('', '', 'Aburi salmon', '', 'Nigiri', 'no', 'no', 'August–October 2026.', 'aburi_salmon'),
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'no', 'no', 'August 2026.', 'sashimi'),
      it('', '', 'Crab-claw sunomono', '', 'Small plates', 'no', 'no', 'September–October 2026.', 'kanizume'),
    ] }, {
    cuisine: 'にぎやかでボリュームのある町の寿司屋・人気のトロたく巻(トロは1テーブル1品)、トロ鉄火・炙りサーモン、炙りホタテ・鰻、穴子、カンパチ、ヒラメ、赤身・トロ、数の子、ホタテ、ヒラメ、鯛、みる貝の大きな刺身盛り合わせ・蟹爪の酢の物、酢の物の盛り合わせ・蟹味噌・イカと雲丹・焼きホタテ・日本酒・値段の表示なし・カウンターとテーブルで19席、車椅子可',
    neighborhood: '中央区千日前1-6-16、道頓堀から一本入る。なんば駅から徒歩5分',
    gf_detail: '実際にはグルテンフリーではありません。醤油、甘酢、グルテンフリーの対応は書かれていません。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、蟹が中心。',
    notes: '[寿司・ミナミ、常連が通い続けるボリュームの寿司屋] 道頓堀から一本入った人気の19席の寿司屋で、いつも満席、当日予約で何度も通う常連も。量が多く、ネタは大きく、巻物も大きく、刺身盛り合わせにはトロ、数の子、ホタテ、ヒラメ、みる貝がどっさり。一番人気はトロたく巻(トロのつく品は1テーブル1品なので、トロ鉄火とどちらか)、レアでジューシーな炙りサーモン、鰻や穴子が続く。まずは甘酢の蟹爪の酢の物や蟹味噌で日本酒に。値段の表示はないが、2人で飲んで1万7千円ほどだったという声。人気の品は売り切れることも、巻物の切り方が不揃いだったという声も。月曜定休。',
  });
}

save();
