// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 43.
//   + 京都まぜ麺 MARUTA Kyoto Mazemen MARUTA (Kyoto-style mazemen with seasonal specials, Marutamachi) — no ramen block:
//     the sources do not give all six dimensions
//   + 晴れ晴゛れ Harebare (dog-friendly izakaya in a 100-year-old house, Kawaramachi Shichijo)
//   + PASTA MORE 京都駅店 Pasta More Kyoto Station (all-day pasta, free large portions, Asty Kyoto)
//   + 京のお晩菜処 六角や 京都店 Rokkakuya (obanzai and oden izakaya, Karasuma Shichijo)
//   Same-name counts first, per brand or operator (2026-11-06): MARUTA — one. 晴れ晴゛れ — one. PASTA MORE — Tabelog lists
//   this shop, Pasta More Ueno and Kyoto Pastamore AEON Mall Rinku Sennan — three; no operator found (a search turned up
//   only the Asty Kyoto landlord) — drafted and flagged. 六角や — the Safari Group site lists two brands, 六角や and 石庵,
//   with this as the only 六角や shop — drafted.
//   Taken on 2026-11-06: `next core 200` (lane) gave MARUTA 26028430 and 晴れ晴゛れ 26037952; `next notable 200` (lane) gave
//   PASTA MORE 26005228 and 六角や 26003530. None is in data/kyoto.json: grep by name and address (高島町338-2, 住吉町354,
//   東塩小路高倉町8-3 アスティ京都, 東境町172 ネオヒルズビル) found none.
//   Service charges per Tabelog's Japanese original: 晴れ晴゛れ 「12/26~1/5迄はサービス料20%を頂戴致します。」; 六角や
//   「380円（税込418円）」; MARUTA and PASTA MORE none listed. No halal claims; no owner deaths in the sources.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-43');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 京都まぜ麺 MARUTA
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26028430/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '15:00'], ['17:30', '22:00']);
  put({
    id: 'kyoto_mazemen_maruta', name: '京都まぜ麺 MARUTA (Kyoto Mazemen MARUTA)', category: 'OMNI',
    lat: 35.017255, lng: 135.768824, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles; fried burdock topping (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but the signature mazemen use dashi and chashu (2026 reviews).',
    hours_raw: '11:30–15:00 and 17:30–22:00; closed irregularly and for training or maintenance — check social media or call (Tabelog). Reservations accepted and advised at weekend lunch (Tabelog; October 2026). Cards, e-money and QR incl. Alipay and WeChat Pay (Tabelog). 17 seats: 6 at the counter and tables (Tabelog). Non-smoking; wheelchair accessible; free Wi-Fi (Tabelog). 10 min east of Marutamachi Stn, 4 min west of Jingu-Marutamachi Stn (Tabelog). Opened 8 December 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kawaramachi Marutamachi — 4 min from Jingu-Marutamachi Stn',
    cuisine: 'Kyoto-style mazemen on large plates (2026 reviews) · the signature white-miso yuzu dashi mazemen with thick noodles (June 2026) · sudachi soy-dashi mazemen, cold or warm, with an onsen egg, fried burdock and green onion (July 2026) · soy mazemen with burdock, chashu, herbs and black shichimi (October 2026); a coriander-heavy Asian mazemen (June 2026) · seasonal specials: corn and mango (July 2026), mizunasu with a charcoal sauce, shiso and myoga (August 2026), and a cold fig mazemen with sakura-smoked chashu for the "fig festival" (September 2026) · sake, shochu and wine; solo drinkers at the counter (June 2026)',
    website: null, gmaps: gm('京都まぜ麺 MARUTA'), menu_url: TB + 'dtlmenu/',
    notes: '[Mazemen · Kawaramachi Marutamachi, Kyoto flavours on noodles] A clean, stylish counter near the Kamo River making soupless mazemen with Kyoto twists — white miso and yuzu dashi, sudachi soy dashi with an onsen egg — plus inventive seasonal bowls such as fig with sakura-smoked chashu. Prices are a little high, so many guests are overseas visitors. Book for weekend lunch. No ramen block: the sources do not cover all six dimensions.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an abura-soba, mazesoba and ramen shop opened 8 December 2016, with vegetarian options. Ramen block not given: the sources do not cover all six ramen dimensions.',
      philosophy: null, specialty: 'White-miso yuzu dashi mazemen; seasonal mazemen.',
      anecdotes: [
        { text: 'An August 2026 regular came back on purpose for the mizunasu mazemen, missed on its last day the year before.', source: R + 'B513238497/' },
        { text: 'A September 2026 visitor arrived 15 minutes after opening to be first for the fig and sakura-smoked chashu mazemen.', source: R + 'B535081290/' },
        { text: 'A July 2026 diner noted the higher prices and the many overseas guests.', source: R + 'B531030804/' },
      ],
      japanese_sources_summary: '食べログ: 油そば・まぜそば・ラーメン、上京区高島町338-2、神宮丸太町駅から徒歩4分、11:30〜15:00・17:30〜22:00、不定休 (研修やメンテナンスで休むことも)、予約可、カード・電子マネー・QR 可、17席、禁煙、車椅子可、ベジタリアンメニューあり、2016年12月8日オープン。口コミ (2026年5月〜10月、英語): 白味噌柚子出汁まぜ麺、すだち醤油出汁まぜ麺 (冷・温、温泉卵、揚げごぼう、ねぎ)、醤油まぜ麺 (ごぼう、チャーシュー、香草、黒七味)、パクチーのアジア風、とうもろこし、マンゴー、水茄子の炭のソース、いちじくと桜チップの燻製チャーシューの冷やしまぜ麺、太麺、外国人の客が多い、週末の昼は予約を。',
      confidence: 'medium', sources: [TB, R + 'B444397361/', R + 'B463215997/', R + 'B513238497/', R + 'B529313738/', R + 'B530038456/', R + 'B530161190/', R + 'B530507841/', R + 'B531030804/', R + 'B531407993/', R + 'B532128191/', R + 'B535081290/', R + 'B538465933/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; many overseas guests (July 2026); book for weekend lunch. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市上京区高島町338-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.017255, 135.768824); cross-checked: GSI 京都府京都市上京区高島町338番地 (lot) 66m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B530038456/', R + 'B532128191/'],
    price_note: 'No item prices found.', last_checked: TODAY, items: [
      it('', '', 'White-miso yuzu dashi mazemen', '', 'Mazemen', 'no', 'no', 'Signature (June 2026).', 'shiromiso_yuzu'),
      it('', '', 'Sudachi soy-dashi mazemen (cold or warm)', '', 'Mazemen', 'no', 'no', 'July 2026.', 'sudachi_mazemen'),
      it('', '', 'Seasonal mazemen', '', 'Seasonal', 'no', 'ask', 'Fig, corn, mango, mizunasu (2026).', 'seasonal_mazemen'),
    ] }, {
    cuisine: '大皿の京風のまぜ麺 (2026年の口コミ)・看板の白味噌柚子出汁まぜ麺、太麺 (2026年6月)・冷か温を選ぶすだち醤油出汁まぜ麺、温泉卵、揚げごぼう、ねぎ (2026年7月)・ごぼう、チャーシュー、香草、黒七味の醤油まぜ麺 (2026年10月)、パクチーたっぷりのアジア風 (2026年6月)・季節限定: とうもろこし、マンゴー (2026年7月)、炭のソースと大葉と茗荷の水茄子 (2026年8月)、「いちじく祭り」の、いちじくと桜チップ燻製チャーシューの冷やしまぜ麺 (2026年9月)・日本酒、焼酎、ワイン。カウンターで一人飲みも (2026年6月)',
    neighborhood: '河原町丸太町。神宮丸太町駅から徒歩4分',
    gf_detail: 'グルテンフリーではない。小麦の太麺、揚げごぼうのトッピング (2026年の口コミ)。',
    vegan_detail: '要確認。食べログではベジタリアンメニューありだが、看板のまぜ麺は出汁とチャーシューを使う (2026年の口コミ)。',
    notes: '[まぜ麺・河原町丸太町、京都の味の汁なし麺] 鴨川近くの清潔でおしゃれなカウンター。白味噌と柚子の出汁、温泉卵のすだち醤油出汁など京都らしいまぜ麺と、いちじくと桜チップの燻製チャーシューなど凝った季節の一杯。値段はやや高めで、外国人の客が多い。週末の昼は予約を。ラーメンの詳細ブロックは情報不足のため省略。',
  });
}

// ================================================================ 晴れ晴゛れ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26037952/'; const R = TB + 'dtlrvwlst/';
  const A = day(['17:30', '23:00']); const B = day(['17:30', '24:00']);
  put({
    id: 'kyoto_harebare_shichijo', name: '晴れ晴゛れ (Harebare)', category: 'OMNI',
    lat: 34.989801, lng: 135.764425, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Izakaya dishes with oden, gyoza, fried corn, soba and soy-seasoned fish (2023–26 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, roast beef, bacon, oden in dashi (2024–26 reviews).',
    hours_raw: 'Sun, Mon, Wed, Thu and holidays 17:30–23:00; Fri, Sat and days before holidays 17:30–24:00; closed Tuesday and the 3rd Wednesday (Tabelog). Reservations by form; 2-hour seating; overseas guests are asked to give a mobile number that works in Japan or the name of the hotel (Tabelog). Online bookings are paid in cash only; otherwise cards, no e-money or QR (Tabelog; January 2026). Service charge 20% from 26 December to 5 January (Tabelog, Japanese text: 「12/26~1/5迄はサービス料20%を頂戴致します。」). 13 seats: 7 at the counter and one tatami room for 6 (Tabelog). Dogs welcome in a bag or cart (Tabelog; 2023–25 reviews). Non-smoking; smoking in the courtyard, or inside if hired privately (Tabelog). In a 100-year-old house at the Kawaramachi Shichijo bus stop; 5 min from Shichijo Stn, 10 min from Kyoto Stn (Tabelog; November 2024). Opened 30 June 2022 (Tabelog).',
    hours: { 0: A, 2: A, 3: A, 4: B, 5: B, 6: A }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kawaramachi Shichijo — 5 min from Shichijo Stn',
    cuisine: 'Kyoto vegetables and fresh seafood in a renovated old house (June 2025) · marbled roast beef, salted grilled Kyoto asparagus, salmon sashimi, thick-cut bacon salad, a pork-and-cabbage omelette with green onion and bean sprouts, bite-size gyoza, fried corn (August 2024) · oden of young corn and bamboo shoot (November 2024), oden with red konnyaku (January 2026); Kyoto vegetable sticks (November 2024) · buri sashimi eaten with senmaizuke; soba (March 2025) · boiled hamo (August 2026) · fresh-squeezed grapefruit sours and sake (2024–25 reviews)',
    website: null, gmaps: gm('晴れ晴れ 河原町七条 居酒屋'), menu_url: TB + 'dtlmenu/',
    notes: '[Izakaya · Kawaramachi Shichijo, dogs welcome in a century-old house] A 13-seat izakaya in a 100-year-old townhouse by the Kawaramachi Shichijo bus stop where dogs can join you at the counter: Kyoto vegetables, sashimi, oden with red konnyaku and homely plates like a pork-and-cabbage omelette. Regulars fill half the counter, and one August 2026 newcomer found the service slow and cool. Closed Tuesday.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an izakaya with seafood and creative dishes, opened 30 June 2022, in a renovated house that a November 2024 review puts at about 100 years old.',
      philosophy: null, specialty: 'Kyoto vegetables; oden; dog-friendly dining.',
      anecdotes: [
        { text: 'An October 2023 guest came for the dog-friendly counter and swapped dog stories with overseas visitors over appetizers, without a common language.', source: R + 'B474330019/' },
        { text: 'A March 2025 couple tried buri sashimi with senmaizuke for the first time and were served one shared soba on two plates.', source: R + 'B503470527/' },
        { text: 'An August 2026 visitor felt regulars came first and found the staff unfriendly to newcomers and the dishes slow.', source: R + 'B533256841/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・海鮮・創作料理、下京区河原町通七条上る住吉町354、七条駅から徒歩5分、京都駅から10分、日月水木祝17:30〜23:00、金土・祝前日17:30〜24:00、火曜と第3水曜休み、フォームで予約、2時間制、外国の客は日本で使える携帯番号かホテル名を、ネット予約は現金のみ、12/26〜1/5はサービス料20%、13席 (カウンター7、座敷6)、ペットはバッグかカートで、禁煙 (中庭に喫煙所)、2022年6月30日オープン。口コミ (2023年10月〜2026年8月、英語): 築100年の家、京野菜と鮮魚、霜降りのローストビーフ、京のアスパラの塩焼き、ベーコンのサラダ、豚とキャベツの卵焼き、一口餃子、とうもろこしの揚げ物、ヤングコーンや筍のおでん、赤こんにゃく、鰤の刺身と千枚漬け、鱧の湯引き、犬と一緒に入れる、常連が多い。',
      confidence: 'medium', sources: [TB, R + 'B473148642/', R + 'B474330019/', R + 'B479328308/', R + 'B489986210/', R + 'B495081847/', R + 'B495635453/', R + 'B503470527/', R + 'B510911533/', R + 'B511306837/', R + 'B513876831/', R + 'B517099036/', R + 'B533256841/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book by form; overseas guests give a Japanese mobile number or hotel name (Tabelog); dogs welcome. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区河原町通七条上る住吉町354',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB} (34.989801, 135.764425); cross-checked: GSI 京都府京都市下京区住吉町354番地 (lot) 30m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B489986210/', R + 'B513876831/'],
    price_note: 'No item prices found; 20% service from 26 December to 5 January (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Oden (with red konnyaku)', '', 'Oden', 'ask', 'no', 'January 2026.', 'oden'),
      it('', '', 'Marbled roast beef', '', 'Dishes', 'ask', 'no', 'August 2024.', 'roast_beef'),
      it('', '', 'Buri sashimi with senmaizuke', '', 'Dishes', 'ask', 'no', 'March 2025.', 'buri_senmai'),
    ] }, {
    cuisine: '古い家を改装した店で京野菜と鮮魚 (2025年6月)・霜降りのローストビーフ、京都のアスパラの塩焼き、サーモンの刺身、厚切りベーコンのサラダ、ねぎともやしの豚とキャベツの卵焼き、一口餃子、とうもろこしの揚げ物 (2024年8月)・ヤングコーンと筍のおでん (2024年11月)、赤こんにゃくのおでん (2026年1月)、京野菜のスティック (2024年11月)・鰤の刺身を千枚漬けと、蕎麦 (2025年3月)・鱧の湯引き (2026年8月)・生搾りグレープフルーツのサワーと日本酒 (2024〜2025年の口コミ)',
    neighborhood: '河原町七条。七条駅から徒歩5分',
    gf_detail: '要確認。おでん、餃子、とうもろこしの揚げ物、蕎麦、醤油の魚料理のある居酒屋 (2023〜2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。刺身、ローストビーフ、ベーコン、出汁のおでん (2024〜2026年の口コミ)。',
    notes: '[居酒屋・河原町七条、築100年の家で犬と一緒に] 河原町七条のバス停前、築100年の町家の13席の居酒屋。犬もカウンターで一緒に。京野菜、刺身、赤こんにゃくのおでん、豚とキャベツの卵焼きのような家庭的な皿。カウンターの半分は常連で、2026年8月には新顔には接客が冷たく遅いとの声も。火曜休み。',
  });
}

// ================================================================ PASTA MORE 京都駅店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26005228/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['07:30', '22:00']); const WE = day(['07:00', '22:00']);
  put({
    id: 'kyoto_pasta_more_kyoto_station', name: 'PASTA MORE 京都駅店 (Pasta More Kyoto Station)', category: 'OMNI',
    lat: 34.984639, lng: 135.75978, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a pasta restaurant — spaghetti in tomato, cream, shiso and meat sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: clam, bacon, meat-sauce and cream pastas, sausages (2026 reviews). No vegan information.',
    hours_raw: 'Weekdays and days around holidays 7:30–22:00; weekends and holidays 7:00–22:00; last food order 21:00; breakfast menu until 10:30; closed when the building closes (Tabelog). No reservations (Tabelog). Cards incl. UnionPay, e-money and QR (Tabelog). 50 seats at tables and a counter; phone-charging points (Tabelog; October 2026). Non-smoking (Tabelog). Asty Kyoto, 1 min from the Hachijo East exit of Kyoto Stn (Tabelog). Opened 7 August 2015 (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Stn Hachijo East exit, Asty Kyoto — 1 min',
    cuisine: 'Pasta all day, with a free upsize to large (up to 300 g) (August–October 2026) · Lake Hamana clam pasta, Genovese with spinach and bacon, green onion with yuzu pepper (August–September 2026) · meat-sauce spaghetti, vongole, a tangy thin-noodle Napolitan (September–October 2026) · tomato, shiso and shiso-cream sauces (September 2026) · grilled sausage and beer; happy-hour glass wine (August and November 2026) · breakfast until 10:30 (Tabelog)',
    website: 'https://movia.jpn.com/shops/info/217536', gmaps: gm('PASTA MORE 京都駅店 アスティ'), menu_url: TB,
    notes: '[Pasta · Kyoto Station Hachijo exit, all-day bowls with free upsize] A busy pasta counter inside the station’s Asty mall, open from 7:00 for breakfast to 22:00: clams, Genovese, meat sauce and a tangy thin Napolitan, with large portions at no extra charge. Handy before a Shinkansen; walk-in only; charging points at some seats.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per Tabelog: an Italian, French and pasta restaurant in Asty Kyoto, opened 7 August 2015. Tabelog also lists Pasta More Ueno (Tokyo) and Kyoto Pastamore at AEON Mall Rinku Sennan (Osaka); the operator is not named in the sources found.',
      philosophy: null, specialty: 'Pasta with free large size.',
      anecdotes: [
        { text: 'An October 2026 diner, picking it by elimination before a Shinkansen, was won over by a thin, tangy Napolitan unlike the usual ketchup kind.', source: R + 'B538112838/' },
        { text: 'An October 2026 diner chose the regular size, found it smaller than expected, and wished for the free large.', source: R + 'B536932553/' },
        { text: 'A November 2026 diner found that day’s pasta almost unsalted.', source: R + 'B538615059/' },
      ],
      japanese_sources_summary: '食べログ: イタリアン・フレンチ・パスタ、下京区東塩小路高倉町8-3 アスティ京都1F、京都駅八条東口から徒歩1分、平日7:30〜22:00、土日祝7:00〜22:00 (L.O. 21:00)、モーニングは10:30まで、建物の休館日に準じる、予約不可、カード・電子マネー・QR 可、50席、禁煙、2015年8月7日オープン、上野と りんくう泉南にも同名の店。口コミ (2026年8月〜11月、英語): 大盛り (300gまで) 無料、Lake Hamana のあさりのパスタ、ほうれん草とベーコンのジェノベーゼ、ねぎと柚子胡椒、ミートソース、ボンゴレ、細麺の酸味のあるナポリタン、ソーセージ、ハッピーアワーのグラスワイン、充電できる席。',
      confidence: 'medium', sources: [TB, R + 'B503944907/', R + 'B527493384/', R + 'B534743019/', R + 'B535661662/', R + 'B535801415/', R + 'B536506767/', R + 'B536581745/', R + 'B536932553/', R + 'B537252985/', R + 'B538112838/', R + 'B538600191/', R + 'B538615059/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Walk in; order from the menu; free large size. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: false, loc_approx: 'single', address_ja: '京都府京都市下京区東塩小路高倉町8-3 アスティ京都1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.984639, 135.759780); cross-checked: GSI 京都府京都市下京区東塩小路高倉町 (town only; no lot match) 142m — inside the station complex; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B503944907/', R + 'B534743019/'],
    price_note: 'No item prices found; large size free up to 300 g (2026 reviews).', last_checked: TODAY, items: [
      it('', '', 'Lake Hamana clam pasta', '', 'Pasta', 'no', 'no', 'August 2026.', 'asari_pasta'),
      it('', '', 'Genovese with spinach and bacon', '', 'Pasta', 'no', 'no', 'September 2026.', 'genovese'),
      it('', '', 'Napolitan (thin noodles)', '', 'Pasta', 'no', 'no', 'October 2026.', 'napolitan'),
    ] }, {
    cuisine: '一日中パスタ、大盛り (300gまで) は無料 (2026年8月〜10月)・Lake Hamana のあさりのパスタ、ほうれん草とベーコンのジェノベーゼ、ねぎと柚子胡椒 (2026年8月〜9月)・ミートソース、ボンゴレ、酸味のある細麺のナポリタン (2026年9月〜10月)・トマト、大葉、大葉クリームのソース (2026年9月)・ソーセージのグリルとビール、ハッピーアワーのグラスワイン (2026年8月・11月)・モーニングは10時半まで (食べログ)',
    neighborhood: '京都駅八条東口、アスティ京都。徒歩1分',
    gf_detail: 'グルテンフリーではない。パスタの店 (トマト、クリーム、大葉、ミートソース) (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。あさり、ベーコン、ミートソース、クリームのパスタ、ソーセージ (2026年の口コミ)。ヴィーガンの情報はない。',
    notes: '[パスタ・京都駅八条口、大盛り無料の一日営業] 駅のアスティの中の賑やかなパスタの店。朝7時のモーニングから22時まで、あさり、ジェノベーゼ、ミートソース、酸味のある細いナポリタンを、大盛り無料で。新幹線の前にも。予約不可、充電できる席もある。',
  });
}

// ================================================================ 京のお晩菜処 六角や 京都店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26003530/'; const R = TB + 'dtlrvwlst/';
  const OF = 'https://www.safari-grp.com/brands/rokkakuya/shops/kyoto/';
  const H = day(['17:00', '22:30']);
  put({
    id: 'kyoto_rokkakuya_kyoto', name: '京のお晩菜処 六角や 京都店 (Rokkakuya)', category: 'OMNI',
    lat: 34.989341, lng: 135.758408, cuisine_type: 'obanzai',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Obanzai, oden, miso dengaku and a tomato-and-yuba gratin (2026 reviews); no gluten information.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: oden and obanzai in dashi, braised pork, horse mackerel (2026 reviews).',
    hours_raw: '17:00–22:30 daily (Tabelog). Reservations accepted and advised; a queue forms before opening, and busy nights have a 90-minute limit (Tabelog; July–August 2026). Seating charge ¥418 including tax (Tabelog, Japanese text: 「380円（税込418円）」). Cards, e-money and PayPay (Tabelog). 40 seats including a window counter where the oden is cooked; shoes off at the entrance (Tabelog; July–August 2026). Non-smoking (Tabelog). Basement of ネオヒルズビル on Shichijo west of Karasuma; 5 min from Kyoto Stn (Tabelog). Opened 17 January 2013 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Karasuma Shichijo — 5 min from Kyoto Stn',
    cuisine: 'Kyoto obanzai, oden and creative Japanese dishes with sake (Tabelog; September 2026) · obanzai served cool and quickly; piping-hot miso dengaku and grilled eggplant with miso (August–September 2026) · oden by the piece, chosen at the counter (August 2026) · braised pork, marinated horse mackerel, a tomato-and-yuba gratin (July–August 2026) · courses ending in dashi chazuke (August and October 2026)',
    website: OF, gmaps: gm('京のお晩菜処 六角や 京都店'), menu_url: TB + 'dtlmenu/',
    notes: '[Obanzai izakaya · Kyoto Stn north, oden and obanzai by the piece] A busy basement izakaya near Kyoto Station where you take your shoes off and pick oden from the pot at the counter, alongside Kyoto obanzai, miso dengaku and a surprising tomato-and-yuba gratin, with sake. Book — there is a queue at opening. ¥418 seating charge. Open daily from 17:00.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Per the Safari Group site: one of the group’s two brands (六角や and 石庵), with this Kyoto shop listed as the 六角や location. Opened 17 January 2013 (Tabelog).',
      philosophy: null, specialty: 'Obanzai; oden.',
      anecdotes: [
        { text: 'An August 2026 visitor with a 17:00 booking found a line already outside before opening.', source: R + 'B533036036/' },
        { text: 'An August 2026 visitor called the tomato-and-yuba gratin the biggest surprise of the night.', source: R + 'B537171288/' },
        { text: 'A July 2026 pair could stay only 90 minutes because of later bookings.', source: R + 'B532641102/' },
      ],
      japanese_sources_summary: 'サファリグループのサイト: ブランドは六角やと石庵、六角やは京都駅前店。食べログ: 居酒屋・おでん・日本料理、下京区七条通烏丸西入東境町172 ネオヒルズビル B1F、京都駅から徒歩5分、17:00〜22:30、無休、予約可、席料380円 (税込418円)、カード・電子マネー・PayPay 可、40席、禁煙、2013年1月17日オープン。口コミ (2026年7月〜10月、英語): おばんざい、熱々の味噌田楽、茄子の味噌焼き、一つずつ頼めるおでん、豚の角煮、鯵のマリネ、トマトと湯葉のグラタン、締めの出汁茶漬け、靴を脱いで上がる、開店前から行列、混雑時は90分。',
      confidence: 'medium', sources: [TB, OF, R + 'B532641102/', R + 'B532716297/', R + 'B532724129/', R + 'B533036036/', R + 'B535228262/', R + 'B535775743/', R + 'B536089687/', R + 'B536425139/', R + 'B536485686/', R + 'B537171288/', R + 'B537795670/', R + 'B538059586/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book ahead; shoes off; point to oden at the counter; ¥418 seating charge. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区七条通烏丸西入東境町172 ネオヒルズビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Group site and Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989341, 135.758408); cross-checked: GSI 京都府京都市下京区東境町172番地 (lot) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B536089687/'],
    price_note: 'No item prices found; ¥418 seating charge (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Oden (by the piece)', '', 'Oden', 'ask', 'no', 'August 2026.', 'oden'),
      it('', '', 'Grilled eggplant with miso', '', 'Obanzai', 'ask', 'ask', 'August–September 2026.', 'nasu_dengaku'),
      it('', '', 'Tomato and yuba gratin', '', 'Dishes', 'ask', 'no', 'August 2026.', 'yuba_gratin'),
      it('', '', 'Seating charge', '¥418', 'Charge', '', '', 'Tabelog.', 'charge'),
    ] }, {
    cuisine: '京のおばんざい、おでん、創作和食を日本酒と (食べログ、2026年9月)・すぐ出る常温のおばんざい、熱々の味噌田楽と茄子の味噌焼き (2026年8月〜9月)・カウンターで一つずつ選べるおでん (2026年8月)・豚の角煮、鯵のマリネ、トマトと湯葉のグラタン (2026年7月〜8月)・締めは出汁茶漬けのコース (2026年8月・10月)',
    neighborhood: '烏丸七条。京都駅から徒歩5分',
    gf_detail: '要確認。おばんざい、おでん、味噌田楽、トマトと湯葉のグラタン (2026年の口コミ)。グルテンの情報はない。',
    vegan_detail: 'ヴィーガン不可。出汁のおでんとおばんざい、豚の角煮、鯵 (2026年の口コミ)。',
    notes: '[おばんざいの居酒屋・京都駅北、一つずつ選ぶおでんとおばんざい] 京都駅近くの賑やかな地下の居酒屋。靴を脱いで上がり、カウンターの鍋からおでんを選び、京のおばんざい、味噌田楽、意外なトマトと湯葉のグラタンを日本酒と。開店前から並ぶので予約を。席料418円。毎日17時から。',
  });
}

save();
