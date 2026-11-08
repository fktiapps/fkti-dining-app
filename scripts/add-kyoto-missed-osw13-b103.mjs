// Kyoto priority (kyoto-missed), worker osw13, batch 103 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 総本家 河道屋, 祇園たけうち, GAUCHOブラジルシュラスコ, めし屋エビス.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-07';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-103');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26034750', 'chain: PREMIUM焼肉 听 祇園 — 听 already ruled a chain (eight same-name 听 shops in our crawls; skips 26036634 and 26029417)');

// ================================================================ 総本家 河道屋
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26014542/'; const R = TB + 'dtlrvwlst/';
  const H = day(['08:30', '18:00']);
  put({
    id: 'kyoto_sohonke_kawamichiya', name: '総本家 河道屋 (Sohonke Kawamichiya)', category: 'OMNI',
    lat: 35.009779, lng: 135.766046, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soba houru is made with wheat flour, sugar, eggs and buckwheat flour (August 2025 review, from the package).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soba houru contains eggs (August 2025 review).',
    hours_raw: 'Tabelog: daily 8:30–18:00; open all year except New Year\'s Day; hours and closed days may change, so check before visiting. Cards accepted. Take-away only — the shop sells nothing but soba houru (April 2026 review). A historic townhouse shop on Aneyakoji-dori just west of Gokomachi, about 5 min walk from Kyoto Shiyakusho-mae (Tabelog). The same company (kawamichiya.co.jp) runs the soba restaurant 晦庵 河道屋 nearby.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Aneyakoji-dori west of Gokomachi — 5 min walk from Kyoto Shiyakusho-mae',
    cuisine: 'A long-established Kyoto confectioner that now makes only soba houru — crunchy, lightly sweet buckwheat-flour biscuits in flower and small round shapes (Tabelog; 2025–2026 reviews) · soba houru, 90g bag ¥486 (April 2026) · boxed for souvenirs in Kyoto-style wrapping (2026)',
    website: 'http://www.kawamichiya.co.jp/', gmaps: gm('総本家 河道屋 姉小路'), menu_url: TB + 'dtlmenu/',
    notes: '[Wagashi · Aneyakoji near Kyoto City Hall, a one-product townhouse shop] A centuries-old Kyoto house that sells just one thing: soba houru, crunchy buckwheat biscuits shaped like little flowers, about ¥500 a bag — a classic Kyoto souvenir. Take-away only. Open daily from 8:30.',
    chef_bio: { chef_name: null, roles: ['Confectioner (kawamichiya.co.jp)'], origin: null,
      background: 'A May 2026 reviewer on a sweets stamp tour writes that the confectioner has been around for over 300 years and now specializes only in soba houru; a July 2026 reviewer, citing the shop\'s website, says the biscuit dates from when Kawamichiya sold soba at its confectionery shop. Reviewers note that the Marutamachi soba-boro maker has closed, leaving this house among the makers of the Kyoto classic (2025–2026). The company also runs the soba restaurant 晦庵 河道屋 (kawamichiya.co.jp).',
      philosophy: null,
      specialty: 'Soba houru (buckwheat biscuits).',
      anecdotes: [
        { text: 'February 2026: "The simple, nostalgic flavor is free from unnecessary embellishments. The roasted aroma of buckwheat fills your mouth."', source: R + 'B523448920/' },
        { text: 'March 2026: "As a child, I used to search for the little buds of this bourou and eat only those!"', source: R + 'B525192372/' },
      ],
      japanese_sources_summary: '食べログ: 総本家 河道屋、和菓子、中京区姉小路通御幸町西入ル、地下鉄東西線京都市役所前駅から徒歩約5分、毎日8:30〜18:00、元日以外は営業、営業時間・定休日は変更の可能性あり、カード可、テイクアウト、公式サイト kawamichiya.co.jp。口コミ (2025年8月〜2026年8月、英語): 蕎麦ほうるのみを扱う店、90g入り486円 (2026年4月)、原材料は小麦粉・砂糖・卵・そば粉 (2025年8月)、花形と丸形、300年以上続く菓子屋との記載 (2026年5月)、町家の店構え、京都らしい包装、お土産に。',
      confidence: 'medium', sources: [TB, 'http://www.kawamichiya.co.jp/'].concat(rv(R, ['B512466883', 'B516951523', 'B518892525', 'B523448920', 'B525192372', 'B527115681', 'B528975878', 'B529264796', 'B531648827', 'B532431911', 'B533382951'])) },
    cultural_comfort: { level: 'japanese', note: 'Take-away shop; one product.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市中京区姉小路通御幸町西入ル',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated April, May, July and August 2026.' },
    pin_source: `Tabelog ${TB} (35.009779, 135.766046); the address gives only a street-corner direction (姉小路通御幸町西入ル) with no town or lot, so GSI cannot check it — marked approximate; nearest pin kyoto_nominokoji_yamagishi (hidden) 38m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B527115681/'],
    price_note: 'Price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Soba houru (buckwheat biscuits), 90g bag', '¥486', 'Sweets', 'no', 'no', 'April 2026.', 'soba_houru'),
    ] }, {
    cuisine: '今は蕎麦ほうるだけを作る老舗の菓子屋。花形と小さな丸形の、カリッとして甘さ控えめのそば粉の焼き菓子 (食べログ、2025〜2026年の口コミ)・蕎麦ほうる90g入り486円 (2026年4月)・京都らしい包装の箱入りはお土産に (2026年)',
    neighborhood: '御幸町の西の姉小路通。京都市役所前から徒歩5分',
    gf_detail: 'グルテンフリーではない: 蕎麦ほうるの原材料は小麦粉、砂糖、卵、そば粉 (2025年8月の口コミ、包装の表示)。',
    vegan_detail: 'ヴィーガン不可: 蕎麦ほうるに卵 (2025年8月の口コミ)。',
    notes: '[和菓子・京都市役所近くの姉小路、ひと品だけの町家の店] 蕎麦ほうるだけを売る老舗。花の形のカリッとしたそば粉の焼き菓子で、一袋500円ほど。京都の定番のお土産。持ち帰りのみ。毎日8時半から。',
  });
}

// ================================================================ 祇園たけうち
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26026110/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '22:00']);
  put({
    id: 'kyoto_gion_takeuchi', name: '祇園たけうち (Gion Takeuchi)', category: 'OMNI',
    lat: 35.001851, lng: 135.776837, cuisine_type: 'kaiseki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: omakase courses with Inaniwa udon, crab shumai, fried taro and fried matsutake, and simmered dishes (2022–2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seafood-led Kyoto courses — sashimi, conger eel, sweetfish, crab, sea urchin (2022–2025 reviews).',
    hours_raw: 'Tabelog: Mon, Tue, Thu–Sun 18:00–22:00 (L.O. 20:00); closed Wednesday. Reservations taken; private rooms for 2–8 must be reserved. Service charge: Tabelog\'s Japanese original reads only 「なし」 (none), while a January 2022 reviewer says a service fee is charged — ask. 16 seats: 8 at an L-shaped counter, 8 in tatami rooms on the 2nd floor; private hire up to 20. Non-smoking. Cards. Children welcome. In an alley near Yasaka Shrine, about 10 min walk from Gion-Shijo and 2 min from the Gion bus stop. Opened 1 March 2015.',
    hours: { 0: H, 1: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Gion-machi Minamigawa near Yasaka Shrine — 10 min walk from Gion-Shijo',
    cuisine: 'A small Gion kappo serving a daily-changing omakase of seasonal Kyoto dishes, with a sake list rich in Shiga sake (Tabelog; 2017–2025 reviews) · September 2025: crab and crab miso, asparagus, fried matsutake, sashimi, simmered conger eel with winter melon, grilled kamasu, junsai with pickled plum, turnip with walnut miso, ochazuke, fruit, hojicha blancmange · March 2024: white asparagus, torigai and salmon roe; oysters in a citrus cup; white fish and pea hot pot; daikon with walnut miso and sea urchin; hojicha pudding · August 2022: eel with broth and ume; seared conger eel sashimi; sweetfish; Inaniwa udon; grilled fig · young sweetfish (October 2024)',
    website: 'http://www.giontakeuchi.com/', gmaps: gm('祇園たけうち'), menu_url: TB + 'dtlmenu/',
    notes: '[Kyoto cuisine · Gion near Yasaka Shrine, an alley counter] A quiet alley restaurant whose veteran chef cooks a daily-changing seasonal omakase — conger eel, sweetfish, turnip with walnut miso, hojicha desserts — with plenty of Shiga sake. Good value for Gion at about ¥15,000–20,000, a regular says. Closed Wednesday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Proprietor (unnamed)'], origin: null,
      background: 'The Tabelog listing describes a veteran chef with 44 years of experience cooking a daily omakase from fresh seasonal ingredients; opened 1 March 2015. Reviewers describe an L-shaped counter run front-of-house by the proprietor, many regulars, sake cups chosen by the guest, and value for Gion (a regular of 10+ visits, March 2025). Criticism: a January 2022 couple on the cheaper course found two fish dishes fishy, the seasoning repetitive and the custom of passing finished plates back odd, and advised the higher course; a November 2023 reviewer found the service distant.',
      philosophy: 'A daily-changing omakase so regulars eat something different each visit (Tabelog).',
      specialty: 'Seasonal Kyoto omakase; Japanese sake.',
      anecdotes: [
        { text: 'March 2025: "I have visited this place over 10 times. In the Gion area, it is relatively affordable… You can enjoy authentic Kyoto cuisine that changes with the seasons."', source: R + 'B514779873/' },
        { text: 'September 2025: "The conger eel was expertly deboned, making it easy to eat and elegantly flavored. The turnip paired wonderfully with the sweet walnut miso."', source: R + 'B515701676/' },
      ],
      japanese_sources_summary: '食べログ: 祇園たけうち、日本料理・魚介料理、東山区祇園町南側523-8、京阪祇園四条駅から徒歩10分・市バス祇園から徒歩2分、月・火・木〜日18:00〜22:00 (L.O.20:00)、水曜休み、予約可、個室 (2〜8名、要予約)、サービス料の原文は「なし」、16席 (カウンター8・座敷8)、貸切20名まで、禁煙、カード可、子供可、2015年3月1日オープン、料理歴44年の料理人による日替わりのおまかせ、日本酒が豊富。口コミ (2017年12月〜2025年9月、英語): L字のカウンター、滋賀の地酒が多い、好きな杯を選べる、conger eelと冬瓜、カマスの焼き物、じゅんさい、かぶの胡桃味噌、ほうじ茶のブランマンジェ (2025年9月)、白アスパラ、とり貝、牡蠣、うに (2024年3月)、Inaniwaうどん (2022年8月)、祇園では手頃 (2025年3月)、安いコースで魚の臭みがあったとの声 (2022年1月)、接客がよそよそしいとの声 (2023年11月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B259187364', 'B314629970', 'B445269722', 'B453152984', 'B458315717', 'B474821815', 'B480730545', 'B494149883', 'B514506400', 'B514779873', 'B515701676'])) },
    cultural_comfort: { level: 'japanese', note: 'Counter of regulars and tatami rooms; ask whether a service charge applies.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区祇園町南側523-8',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated March and September 2025.' },
    pin_source: `Tabelog ${TB} (35.001851, 135.776837); GSI lot 京都府京都市東山区祇園町南側523番地 about 38m away; nearest pin kyoto_anzuya_gion_ishiya_hanare 23m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515701676/'],
    price_note: 'No item prices; reviewers spent ¥15,000–29,999 a head (2023–2025).', last_checked: TODAY, items: [
      it('', '', 'Seasonal omakase course', null, 'Course', 'no', 'no', '2022–2025.', 'omakase_course'),
    ] }, {
    cuisine: '日替わりのおまかせで季節の京料理を出す祇園の小さな割烹。滋賀の酒が多い日本酒 (食べログ、2017〜2025年の口コミ)・2025年9月: かにとかに味噌、アスパラ、松茸の揚げ物、刺身、conger eelと冬瓜の炊き合わせ、カマスの焼き物、じゅんさいと梅、かぶの胡桃味噌、お茶漬け、果物、ほうじ茶のブランマンジェ・2024年3月: 白アスパラ、とり貝といくら、柑橘の器の牡蠣、白身魚とえんどう豆の鍋、大根の胡桃味噌とうに、ほうじ茶プリン・2022年8月: 出汁と梅の鰻、conger eelの炙りの刺身、鮎、Inaniwaうどん、焼きいちじく・若鮎 (2024年10月)',
    neighborhood: '八坂神社近くの祇園町南側。祇園四条から徒歩10分',
    gf_detail: 'グルテンフリーではない: Inaniwaうどん、かにしゅうまい、里芋の唐揚げ、松茸の揚げ物、炊き合わせのおまかせ (2022〜2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 刺身、conger eel、鮎、かに、うになど魚介中心の京料理のコース (2022〜2025年の口コミ)。',
    notes: '[京料理・八坂神社近くの祇園、路地のカウンター] 静かな路地の店で、ベテランの料理人が日替わりの季節のおまかせを出す。conger eel、鮎、かぶの胡桃味噌、ほうじ茶の甘味、滋賀の酒も豊富。祇園では手頃で15,000〜20,000円ほどと常連の声。水曜休み。',
  });
}

// ================================================================ GAUCHOブラジルシュラスコ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26039982/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['17:00', '23:00']); const WE = day(['11:00', '23:00']);
  put({
    id: 'kyoto_gaucho_churrasco', name: 'GAUCHOブラジルシュラスコ (GAUCHO Brazil Churrasco)', category: 'OMNI',
    lat: 35.005702, lng: 135.776696, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as a whole: a churrasco buffet with sausages, sauces, hot sides and a dessert bar (2025–2026 reviews). The skewered meats are seasoned mainly with salt and pepper (September 2025) — ask about marinades and the sausages.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: all-you-can-eat grilled meats. A salad bar and grilled pineapple are part of the buffet (2025–2026 reviews).',
    hours_raw: 'Tabelog: Mon–Fri and the days before and after holidays 17:00–23:00; Sat and Sun 11:00–23:00; holidays 11:00–22:30; L.O. 22:30; closed the third Tuesday of each month. Reservations taken. 32 seats; private hire for 20–50. Non-smoking. Cards, IC cards, e-money and QR (incl. Alipay, WeChat Pay). English menu and English-speaking staff; Portuguese spoken (November 2025). Children welcome, with a kids\' menu. Football on the screens and signed memorabilia (2026 reviews). On the 1st floor of the サンピアザ off Shinbashi-dori, 6 min walk from Gion-Shijo or Sanjo. Opened 4 August 2023.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinbashi-dori east of Yamato-oji, Gion — 6 min walk from Gion-Shijo',
    cuisine: 'Brazilian all-you-can-eat churrasco: charcoal-grilled meats carved at the table from iron skewers, with a salad, hot-dish and dessert buffet (Tabelog; 2025–2026 reviews) · GAUCHO course: 13 kinds of churrasco, buffet and all-you-can-drink (March 2026) · 15-kind churrasco course (February 2025) · a ¥6,000 course (September 2025) · picanha (sirloin cap), outside skirt, beef chuck, beef hump, ribeye, sausages, chicken, grilled pineapple · caipirinha with cachaça and lime (November 2025) · birthday dessert plate +¥1,000 (May 2026)',
    website: null, gmaps: gm('GAUCHO ブラジルシュラスコ 祇園'), menu_url: TB + 'dtlmenu/',
    notes: '[Brazilian churrasco · Gion off Shinbashi-dori, a meat-on-skewers buffet] Staff circle with charcoal-grilled picanha, skirt steak, sausages and pineapple on iron skewers, carved at your table until you flip your card, plus a salad and dessert buffet and caipirinhas. About ¥6,000–9,000 with drinks. English and Portuguese spoken; football on screen. Lunch on weekends.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 4 August 2023 (Tabelog); operator not identified. Reviewers describe friendly multilingual staff, many overseas guests with Portuguese spoken, a Portuguese birthday song (May 2026), and walls of football signatures including Kyoto Sanga players (January 2026). Criticism: heavy salt (February and September 2025), a high price (February 2025) and a slow pace of meat at times (April 2026).',
      philosophy: null,
      specialty: 'Charcoal-grilled churrasco; salad and dessert buffet.',
      anecdotes: [
        { text: 'February 2025: "The staff brings out large cuts of meat on iron skewers, explaining each cut and carving it for you. It\'s visually impressive."', source: R + 'B502019422/' },
        { text: 'June 2026: "The meat keeps coming, and when you\'re full, you signal with a card provided on the table!"', source: R + 'B530435951/' },
      ],
      japanese_sources_summary: '食べログ: GAUCHOブラジルシュラスコ、シュラスコ、東山区新橋通大和大路東入林下町3-422-2 サンピアザ1F、祇園四条駅・三条駅から徒歩6分、月〜金・祝日の前日・祝日の翌日17:00〜23:00、土・日11:00〜23:00、祝日11:00〜22:30、L.O.22:30、毎月第3火曜休み、予約可、32席、貸切20〜50名、禁煙、カード・電子マネー・QR可、英語メニュー・英語対応スタッフ、子供可・キッズメニューあり、2023年8月4日オープン。口コミ (2025年2月〜2026年10月、英語): 炭火のシュラスコ食べ放題、鉄串の肉をテーブルで切り分け、GAUCHOコース (13種のシュラスコ、ビュッフェ、飲み放題、2026年3月)、ピッカーニャ、ハラミ、ソーセージ、焼きパイナップル、カイピリーニャ、サラダとデザートのビュッフェ、ポルトガル語の誕生日の歌 (2026年5月)、サッカーのサイン、塩が強いとの声 (2025年)、値段が高めとの声 (2025年2月)、肉の出が遅いとの声 (2026年4月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B501469446', 'B502019422', 'B504367464', 'B505665387', 'B513628149', 'B517626194', 'B520765783', 'B524753834', 'B526343761', 'B528232810', 'B530435951', 'B538674020'])) },
    cultural_comfort: { level: 'english_friendly', note: 'English menu and English-speaking staff (Tabelog); Portuguese spoken (November 2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区新橋通大和大路東入林下町3-422-2 サンピアザ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated May, June and October 2026.' },
    pin_source: `Tabelog ${TB} (35.005702, 135.776696); GSI lot 京都府京都市東山区林下町422番地 about 33m away (the full form 林下町3-422-2 resolves to lot 3, 391m off); nearest pin kyoto_gion_gozukon 33m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B513628149/', R + 'B528232810/'],
    price_note: 'Course price from a September 2025 review; reviewers spent ¥6,000–9,999 a head with drinks.', last_checked: TODAY, items: [
      it('', '', 'Churrasco course (all-you-can-eat meats, salad and dessert buffet)', '¥6,000', 'Course', 'no', 'no', 'September 2025.', 'churrasco_course'),
      it('', '', 'GAUCHO course (13 churrasco, buffet, all-you-can-drink)', null, 'Course', 'no', 'no', 'March 2026.', 'gaucho_course'),
      it('', '', 'Caipirinha', null, 'Drink', 'ask', 'ask', 'November 2025.', 'caipirinha'),
    ] }, {
    cuisine: 'ブラジルのシュラスコ食べ放題。炭火で焼いた肉を鉄串からテーブルで切り分け、サラダ・温かい料理・デザートのビュッフェ付き (食べログ、2025〜2026年の口コミ)・GAUCHOコース: 13種のシュラスコ、ビュッフェ、飲み放題 (2026年3月)・15種のシュラスコのコース (2025年2月)・6,000円のコース (2025年9月)・ピッカーニャ、ハラミ、肩肉、こぶ肉、リブロース、ソーセージ、鶏肉、焼きパイナップル・カシャッサとライムのカイピリーニャ (2025年11月)・誕生日のデザートプレート+1,000円 (2026年5月)',
    neighborhood: '大和大路の東、新橋通の祇園。祇園四条から徒歩6分',
    gf_detail: '全体としてグルテンフリーではない: ソーセージ、ソース、温かい料理、デザートのあるシュラスコのビュッフェ (2025〜2026年の口コミ)。串焼きの肉は主に塩こしょうの味付け (2025年9月)。下味やソーセージは要確認。',
    vegan_detail: 'ヴィーガン不可: 焼いた肉の食べ放題。ビュッフェにサラダバーと焼きパイナップル (2025〜2026年の口コミ)。',
    notes: '[ブラジルのシュラスコ・新橋通の祇園、串焼き肉のビュッフェ] 炭火のピッカーニャ、ハラミ、ソーセージ、パイナップルを鉄串で持って回り、カードを裏返すまでテーブルで切り分けてくれる。サラダとデザートのビュッフェ、カイピリーニャも。飲み物込みで6,000〜9,000円ほど。英語とポルトガル語が通じ、サッカー中継あり。土日は昼も営業。',
  });
}

// ================================================================ めし屋エビス
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26038218/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_meshiya_ebisu', name: 'めし屋エビス (Meshiya Ebisu)', category: 'OMNI',
    lat: 35.010309, lng: 135.769335, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a casual izakaya menu with kara-age, pork cutlet, a croquette-style potato salad and soy-based sauces such as the house almond soy sauce (2025–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: beef-heart sashimi, horse-meat tsukune, yellowtail and egg potato salad; the tofu starter comes with chili oil or almond soy sauce (2025–2026 reviews).',
    hours_raw: 'Tabelog: daily 17:00–23:00; closed on irregular days. Reservations taken — reviewers call them a must at weekends (February 2026). Cover: 「お通し代440円」 (¥440 starter charge, Tabelog Japanese original); the starter is tofu with almond soy sauce or peanut chili oil (2026 reviews). 38 seats with a counter, standing space and a 2nd floor; the toilet is upstairs. Non-smoking. Cards and QR payments. English menu; QR-code photo ordering (June 2026). Children welcome. On a narrow street north of the Hilton, near Kyoto Shiyakusho-mae (Tabelog; February 2026 review). Opened 1 October 2022.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'A side street north of the Hilton — near Kyoto Shiyakusho-mae',
    cuisine: 'A popular modern izakaya of small, mostly sub-¥1,000 plates and a long shochu and sake list (Tabelog; 2025–2026 reviews) · signature potato salad with oden egg and croquette, topped with chili oil (2025–2026) · wagyu heart sashimi with garlic (December 2025; June 2026) · seared yellowtail (December 2025) · raw tsukune of horse meat (sakura) (2026) · freshly fried thick tofu; fried taro; kara-age; pork cutlet; toro-taku; young corn (2025–2026) · homemade lemon sour and ginger highball (December 2025)',
    website: null, gmaps: gm('めし屋エビス 京都'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · north of the Hilton near City Hall, a lively small-plates bar] A busy young izakaya of cheap small plates — the chili-oil potato salad with oden egg, wagyu heart sashimi, horse-meat tsukune, seared yellowtail — and a big shochu and sake list, most dishes under ¥1,000. ¥440 cover; book at weekends. Open nightly from 5 pm.',
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)', 'Operator: 株式会社BASE (NTA invoice register)'], origin: null,
      background: 'Opened 1 October 2022 (Tabelog); the invoice registration is 株式会社BASE (NTA). Reviewers describe polite staff, quick service, generous drinks, a message card on a same-day booking (July 2026) and a crowd of locals and young people. Criticism: no standout dish for one February 2026 reviewer; a limited sashimi choice one night (July 2026); an upstairs toilet.',
      philosophy: null,
      specialty: 'Potato salad with oden egg; beef-heart sashimi; shochu.',
      anecdotes: [
        { text: 'December 2025: "The potato salad had a flavor reminiscent of croquettes and paired perfectly with the homemade almond soy sauce."', source: R + 'B519511088/' },
        { text: 'February 2026: "The prices are casual, all under JPY 1000, and the small portions allow you to sample a bit of everything."', source: R + 'B522335274/' },
      ],
      japanese_sources_summary: '食べログ: めし屋エビス、居酒屋・日本料理・創作料理、中京区下丸屋町401-5、地下鉄東西線京都市役所前駅から、毎日17:00〜23:00、不定休、予約可、原文で「お通し代440円」、38席、立ち飲みあり、禁煙、カード・QR決済可、英語メニュー、デジタルメニュー、子供可、2022年10月1日オープン。インボイス登録は株式会社BASE (国税庁)。口コミ (2025年11月〜2026年7月、英語): 焼酎と日本酒が豊富、名物のおでん卵とコロッケのポテトサラダ (ラー油)、和牛ハツの刺身、ぶりのたたき、桜肉の生つくね、揚げたての厚揚げ、里芋の揚げ物、唐揚げ、トンカツ、とろたく、ヤングコーン、自家製レモンサワー、ジンジャーハイボール、お通しはアーモンド醤油やピーナッツラー油の豆腐、ほぼ1,000円以下の小皿、週末は要予約、トイレは2階。',
      confidence: 'medium', sources: [TB, 'https://www.invoice-kohyo.nta.go.jp/regno-search/detail?selRegNo=5130001068259'].concat(rv(R, ['B517918970', 'B519511088', 'B519924365', 'B520137543', 'B521116166', 'B522335274', 'B525854185', 'B529481921', 'B530237772', 'B531744323', 'B532578233', 'B537749398'])) },
    cultural_comfort: { level: 'some_english', note: 'English menu and QR photo ordering (Tabelog; June 2026). ¥440 cover.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区下丸屋町401-5',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated May, June and July 2026.' },
    pin_source: `Tabelog ${TB} (35.010309, 135.769335); GSI lot 京都府京都市中京区下丸屋町401番地 about 36m away; nearest pin kyoto_tempura_tohzan 12m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B522335274/', R + 'B530237772/'],
    price_note: 'Reviewers say most dishes are under ¥1,000 (February 2026); ¥440 cover.', last_checked: TODAY, items: [
      it('', '', 'Potato salad with oden egg and croquette', null, 'Small dish', 'no', 'no', '2025–2026.', 'potato_salad'),
      it('', '', 'Wagyu heart sashimi', null, 'Sashimi', 'ask', 'no', 'December 2025; June 2026.', 'heart_sashimi'),
      it('', '', 'Raw tsukune of horse meat', null, 'Grill', 'ask', 'no', 'February and June 2026.', 'sakura_tsukune'),
      it('', '', 'Seared yellowtail', null, 'Sashimi', 'ask', 'no', 'December 2025.', 'buri_tataki'),
      it('', '', 'Freshly fried thick tofu', null, 'Small dish', 'ask', 'ask', 'January and June 2026.', 'atsuage'),
    ] }, {
    cuisine: 'ほぼ1,000円以下の小皿と豊富な焼酎・日本酒の人気の居酒屋 (食べログ、2025〜2026年の口コミ)・名物のポテトサラダ (おでん卵とコロッケ、ラー油がけ) (2025〜2026年)・和牛ハツの刺身とにんにく (2025年12月・2026年6月)・ぶりのたたき (2025年12月)・桜肉の生つくね (2026年)・揚げたての厚揚げ、里芋の揚げ物、唐揚げ、トンカツ、とろたく、ヤングコーン (2025〜2026年)・自家製レモンサワー、ジンジャーハイボール (2025年12月)',
    neighborhood: '下丸屋町、ヒルトンの北の細い通り。京都市役所前の近く',
    gf_detail: 'グルテンフリーではない: 唐揚げ、トンカツ、コロッケ入りのポテトサラダ、自家製のアーモンド醤油などしょうゆベースのたれ (2025〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛ハツの刺身、桜肉のつくね、ぶり、卵のポテトサラダ。お通しの豆腐はラー油またはアーモンド醤油 (2025〜2026年の口コミ)。',
    notes: '[居酒屋・市役所近くのヒルトンの北、にぎやかな小皿の店] ラー油のおでん卵ポテサラ、和牛ハツ刺し、桜肉のつくね、ぶりのたたきなど安い小皿がほぼ1,000円以下、焼酎と日本酒も豊富な若い居酒屋。お通し440円、週末は予約を。毎晩17時から。',
  });
}

save();
