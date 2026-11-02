// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 1.
//   + おでんとメシ はなみ堂 Oden to Meshi Hanamidou (private-room izakaya by Ueno Stn; ¥500 all-you-can-eat oden starter)
//   + ハリマ・ケバブ・ビリヤニ Halima Kebab Biryani (Indian/Pakistani biryani house, Higashi-Ueno; Tabelog Curry 100 2017–2020, Asian 100 2022–2024)
//   + coucou! (9-seat wine bar run by one owner-sommelier, with bistro plates; Higashi-Ueno back street)
//   + 東京とんかつ がぶう Tokyo Tonkatsu Gabuu (17-seat counter tonkatsu, brand pork, Tabelog Tonkatsu 100 2026)
// Skipped: 炭焼 やきとん酒場 TONTON 上野店 13276915 — chain (see skip() reason).
// Chain check. Hanamidou: one Tabelog listing (former name 魚匠) and one gurunavi page; no branches found.
//   Halima: Tabelog remarks list three sister shops under other names (Sabera Tikka Biryani, Anas Dosa Biryani,
//   Halal Dosa Biryani); none in data/tokyo.json. coucou!: one shop. Gabuu: run by 株式会社GAVRIFOOD; this is shop no. 1,
//   Harajuku (opened 2026) is no. 2 (PR Times, 17 August 2026); the company's job page plans 100 shops in 5 years —
//   two shops today, kept (doubt noted for the integrator).
// Dedupe: none of the four is in data/tokyo.json by name, Tabelog id or address (上野7-2-5, 東上野3-36-7, 東上野3-25-2,
//   上野4-6-4); no unresearched placeholder at those addresses. Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-1');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13276915', 'chain: 炭焼 やきとん酒場 TONTON 上野店 is one of several TONTON private-room skewer izakaya (corporate Tabelog listing, 100 seats, open 24 hours); other branches found: 完全個室 炭火串焼居酒屋 TONTON 上野駅前本店 and 個室居酒屋 TONTON 新宿東口店 (gurunavi r.gnavi.co.jp/ghzh700/ and /gj0r600/, page titles in search results; the pages returned 503), 個室酒場 TONTON 上野店 (hotpepper.jp list SA11/MT00142/U002).');

// ================================================================ おでんとメシ はなみ堂
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13289752/'; const R = TB + 'dtlrvwlst/';
  const W = day(['16:00', '23:30']); const E = day(['14:00', '23:30']);
  put({
    id: 'tokyo_oden_to_meshi_hanamido_ueno', name: 'おでんとメシ はなみ堂 (Oden to Meshi Hanamidou)', category: 'OMNI',
    lat: 35.712719, lng: 139.777697, cuisine_type: 'oden',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: the all-you-can-eat oden pot includes shumai and fish cakes such as chikuwa and hanpen, and the menu leans on fried dishes (kara-age, fried oysters, fries). Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden is simmered in the house dashi, and the menu is built on fish, chicken and eggs. Tabelog\'s listing ticks "vegetarian options" but names no dish.',
    hours_raw: 'Mon–Fri and the day before a holiday 16:00–23:30; Sat, Sun and holidays 14:00–23:30; closing days irregular (Tabelog). Reservations online (phone lines may be closed; same-day changes or cancellations are charged 100%). 129 seats, nearly all in private rooms for 2 to over 30 (sunken kotatsu rooms; private hire up to 100). Smoking: Tabelog says a designated area for heated tobacco only, but a July 2026 diner says cigarettes could be smoked at the table — ask. Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money. Children welcome. Multilingual menu (English, Simplified Chinese, Korean), with photos. DAZN and horse racing on screen. Opened 15 October 2023 (Tabelog; former name 魚匠).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ueno 7-chōme, ニューウエノ 2F-D — 1 min from JR Ueno Stn (Asakusa exit side of the central gate); 2 min from the Ginza and Hibiya Line Ueno Stn',
    cuisine: 'Private-room izakaya with an all-you-can-eat oden starter for ¥500 (daikon, egg, konnyaku, hanpen, shirataki, shumai, fish cakes, chikuwa) in a house dashi blended with a long-established dashi wholesaler under a dashi sommelier (Tabelog) · à la carte with 2-hour all-you-can-drink of about 100 drinks from ¥1,078 by coupon (draft beer +¥500; two dishes each, a ¥500 charge listed as a "container fee", and +¥500 on Fri, Sat and the day before a holiday) · 7-dish courses with all-you-can-oden and drinks ¥4,400 and ¥4,950 (Tabelog, tax included) · dishes named in 2026 reviews: grilled mackerel, carpaccio, yakitori, kara-age, fried oysters, skewer platter, sashimi, agedashi tofu, fries, dashi-maki tamago',
    website: null, gmaps: gm('おでんとメシ はなみ堂 上野7-2-5'), menu_url: TB + 'dtlmenu/',
    notes: "[Oden izakaya · Ueno, private rooms a minute from the station] A second-floor izakaya just outside the Asakusa exit side of JR Ueno Station, almost all private rooms, from tables for two up to banquet rooms. Its hook is the starter: for ¥500 you get all the oden you want, simmered in a house blend of dashi made with a long-established dashi wholesaler under a dashi sommelier, from daikon and egg to konnyaku, hanpen, shumai and chikuwa. Diners in 2026 praised the gentle, well-soaked oden (the daikon especially), quick service and a calm room, and ordered grilled mackerel, carpaccio, yakitori, kara-age, fried oysters, agedashi tofu and dashi-maki tamago; several came back many times. Cheap all-you-can-drink coupons and 7-dish courses from ¥4,400 make it a banquet spot. Book online; the phones may be off.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 15 October 2023 (Tabelog; former name 魚匠)', background: 'A corporate-member Tabelog listing; no source names the operator, owner or chef. The house dashi was developed with a long-established dashi wholesaler under the supervision of a dashi sommelier (Tabelog).', philosophy: null, specialty: 'All-you-can-eat oden starter; private rooms.',
      anecdotes: [
        { text: '"I visited Oden to Meshi Hanamidou because they offer all-you-can-eat oden as an appetizer for JPY 500." — August 2026.', source: R + 'B502017512/' },
        { text: '"I love oden and often go to izakayas that serve it, but the taste here is on a whole different level. The daikon radish was particularly well-infused with flavor." — October 2026.', source: R + 'B530649178/' },
        { text: '"Plus, you can smoke regular cigarettes at your table, which is a blessing for smokers." — July 2026.', source: R + 'B532667209/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): おでんとメシ はなみ堂 (旧店名 魚匠)、上野7-2-5 ニューウエノ 2F-D、JR上野駅中央改札から浅草口側へ徒歩1分、月〜金・祝前日16:00〜23:30、土日祝14:00〜23:30、不定休、お通しのおでん食べ放題500円、老舗のだし問屋とだしソムリエの監修で作った特製ブレンドだし、具は大根、玉子、こんにゃく、はんぺん、しらたき、しゅうまい、練り物、ちくわ、単品飲み放題 (約100種) はクーポンで1,078円 (生ビールは+500円、料理2品の注文、500円の料金 (英訳は container fee)、金土・祝前日は+500円)、飲み放題付き7品のコース4,400円・4,950円、129席、2名から30名以上の個室、掘りごたつ、貸切は100名まで、加熱式たばこのみの喫煙所、カードとPayPay、子ども可、英語・中国語・韓国語のメニュー、DAZNと競馬中継、2023年10月15日オープン。口コミ(2026年5月〜10月): 上野駅から近い、個室で落ち着く、おでんはだしがしみてやさしい味、大根、鯖の焼き物とカルパッチョ、焼き鳥、唐揚げ、カキフライ、串の盛り合わせ、刺身、揚げ出し豆腐、ポテト、だし巻き玉子、何度も通う人も、席で紙巻きたばこが吸えたという声 (2026年7月)。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B502017512/', R + 'B519735879/', R + 'B529034543/', R + 'B529034708/', R + 'B530649178/', R + 'B530667910/', R + 'B532667209/', R + 'B534037274/', R + 'B536667457/', R + 'B537466435/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists a menu in English, Simplified Chinese and Korean, with photos; book online.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野7-2-5 ニューウエノ 2F-D',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野七丁目2番5号 (go) 22m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B502017512/', R + 'B529034543/'],
    price_note: 'Prices from the Tabelog listing (tax included; course prices with coupon) and October 2026 reviews.', last_checked: TODAY, items: [
      it('おでん食べ放題 (お通し)', '', 'All-you-can-eat oden starter', '¥500', 'Oden', 'no', 'no', 'Tabelog; October 2026 review.', 'oden_tabehodai'),
      it('', '', 'À la carte 2-hour all-you-can-drink (coupon)', '¥1,078', 'Drinks', 'ask', 'ask', 'Tabelog; August 2026 review; draft beer +¥500.', 'nomihodai'),
      it('', '', '7-dish course with all-you-can-eat oden and 2-hour drinks', '¥4,400', 'Course', 'no', 'no', 'Tabelog (coupon price).', 'course_7'),
      it('', '', '7-dish course with half fried local chicken, sashimi, oden and 2-hour drinks', '¥4,950', 'Course', 'no', 'no', 'Tabelog.', 'course_chicken'),
    ] }, {
    cuisine: '個室の居酒屋。お通しのおでん食べ放題500円 (大根、玉子、こんにゃく、はんぺん、しらたき、しゅうまい、練り物、ちくわ)、だしは老舗のだし問屋とだしソムリエの監修による特製ブレンド (食べログ)・単品と2時間飲み放題 (約100種) はクーポンで1,078円から (生ビールは+500円、料理は1人2品、500円の料金 (英訳は container fee)、金土・祝前日は+500円)・おでん食べ放題と飲み放題付きの7品のコース4,400円・4,950円 (食べログ、税込み)・2026年の口コミに出てくる料理: 鯖の焼き物、カルパッチョ、焼き鳥、唐揚げ、カキフライ、串の盛り合わせ、刺身、揚げ出し豆腐、ポテト、だし巻き玉子',
    neighborhood: '上野七丁目、ニューウエノ 2F-D。JR上野駅中央改札の浅草口側から徒歩1分、銀座線・日比谷線の上野駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。食べ放題のおでん鍋にしゅうまいやちくわ、はんぺんなどの練り物が入り、揚げ物 (唐揚げ、カキフライ、ポテト) も多い。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。おでんは店のだしで煮ており、料理は魚、鶏、卵が中心。食べログには「ベジタリアンメニューあり」の印があるが、料理名は書かれていません。',
    notes: '[おでん居酒屋・上野、駅から1分の個室] JR上野駅の浅草口側を出てすぐ、2階にある居酒屋で、2人用から宴会用までほぼ全席が個室。目玉はお通しで、500円でおでんが食べ放題。だしは老舗のだし問屋とだしソムリエの監修で作ったブレンドで、大根や玉子からこんにゃく、はんぺん、しゅうまい、ちくわまで。2026年の口コミでは、だしがしみたやさしい味のおでん (特に大根)、早い提供、落ち着いた部屋が好評で、鯖の焼き物、カルパッチョ、焼き鳥、唐揚げ、カキフライ、揚げ出し豆腐、だし巻き玉子などが注文されている。何度も通う人も。安い飲み放題のクーポンと4,400円からの7品のコースで宴会向き。予約はネットで (電話は受け付けていないことも)。',
  });
}

// ================================================================ ハリマ・ケバブ・ビリヤニ
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13168753/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_halima_kebab_biryani_higashiueno', name: 'ハリマ・ケバブ・ビリヤニ (Halima Kebab Biryani)', category: 'OMNI',
    lat: 35.711578, lng: 139.780338, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Biryani is basmati rice cooked with curry sauce, and the sets can come with basmati rice instead of naan or roti, but nothing is described as gluten-free; the starters include deep-fried samosa and pakora, the naans and parottas are wheat, and the Tabelog menu was last updated in 2022.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The menu has a vegetarian biryani and many vegetable curries (baingan bharta, chana masala, bhindi, aloo gobi), but the dal is made with butter, several dishes use paneer, cream or yogurt, and the biryani comes with raita; whether ghee or butter goes into the rest is not stated.',
    hours_raw: 'Daily 11:00–15:00 (last order 14:30) and 17:00–22:00 (last order 21:30), holidays included (Tabelog). Lunch reservations only for course meals; book online 11:00–20:00 the day before (Tabelog). Queues at weekday and weekend lunch in October 2026. 50 seats; non-smoking; cards (VISA, Master, JCB, AMEX, Diners), no e-money or QR. Children and babies welcome, kids\' menu. Takeout of the whole menu. No alcohol (a May 2024 diner: "As a halal restaurant, they do not serve alcohol"). Opened 9 June 2014 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: true, open_late: false },
    neighborhood: 'Higashi-Ueno 3-chōme, 1F, near Ueno Mitsui Garden Hotel — 2 min from Inaricho Stn (Ginza Line); a short walk from Ueno Stn',
    cuisine: 'South Indian and Pakistani cooking with halal food, best known for biryani (Tabelog) · chicken biryani set with salad, a spicy red soup, raita and lassi ¥1,150 (October 2026; one October 2026 diner paid ¥1,250); lamb, mutton, shrimp and vegetarian biryani · Muslim set of half biryani, curry and tandoori (October 2026) · 3-curry sets with naan · keema, Karachi karahi, nihari, Goa prawn, Alleppey fish curry, butter chicken · charcoal tandoori, tikka and seekh kebab · on Tabelog\'s Curry 100 list 2017–2020 and Asian & Ethnic TOKYO 100 list 2022–2024',
    website: null, gmaps: gm('ハリマ・ケバブ・ビリヤニ 東上野3-36-7'), menu_url: TB + 'dtlmenu/',
    notes: "[Indian/Pakistani · Higashi-Ueno, the biryani house with a lunch line] A long, narrow restaurant with a set-back entrance between Ueno and Inaricho, cooking South Indian and Pakistani food with halal food and no alcohol. The biryani is the draw: basmati rice layered with curry and cooked slowly without stirring, served in huge portions with raita. In October 2026 the chicken biryani set with salad, a tangy red soup and lassi was ¥1,150, and diners queued at lunch; one diner on a fifth visit stops by whenever in Ueno. There are also lamb, mutton, shrimp and vegetable biryani, a Muslim set of half biryani, curry and tandoori, dozens of curries from keema to Goa prawn, and a charcoal tandoor. Staff handled Japanese and English for a 2024 diner; one October 2026 diner found the service curt. On Tabelog's Curry 100 list 2017–2020 and Asian & Ethnic 100 list 2022–2024. Sister shops: Sabera Tikka Biryani, Anas Dosa Biryani, Halal Dosa Biryani.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 9 June 2014 (Tabelog)', background: 'Tabelog\'s listing (corporate member) speaks of a skilled Indian chef but names no one; the remarks list three sister shops: Sabera Tikka Biryani, Anas Dosa Biryani and Halal Dosa Biryani.', philosophy: '"We will respond to all of our customers\' flavor requests!" (Tabelog).', specialty: 'Biryani; curries; tandoori.',
      anecdotes: [
        { text: '"I chose the Chicken Biryani set with a lassi for JPY 1150… The service from the Indian staff is also enjoyable." — October 2026, public-holiday lunch, fifth visit.', source: R + 'B480839250/' },
        { text: '"I visited Halima Kebab Biryani in Higashi-Ueno during lunchtime, and there was a line outside, which showed just how popular this place is." — October 2026.', source: R + 'B537656477/' },
        { text: '"As a halal restaurant, they do not serve alcohol." — May 2024.', source: R + 'B473906516/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ハリマ・ケバブ・ビリヤニ、東上野3-36-7 1F、稲荷町駅から205m、Ueno Mitsui Garden Hotel の近く、毎日11:00〜15:00 (L.O.14:30)・17:00〜22:00 (L.O.21:30)、ランチの予約はコースのみ、50席、禁煙、カード可、子ども可、キッズメニュー、テイクアウト、2014年6月9日オープン、カレー百名店 2017〜2020、アジア・エスニック TOKYO 百名店 2022〜2024、姉妹店は Sabera Tikka Biryani、Anas Dosa Biryani、Halal Dosa Biryani。メニュー (2022年更新): ベジタリアン・ビリヤニ、野菜のカレー、ダールはバター使用。口コミ(2026年10月): チキンビリヤニとラッシーのセット1,150円 (サラダ、スープ、ライタ付き、1,250円という人も)、量が多い、昼は行列、マトンのハーフビリヤニとバターチキンのムスリムセット、3種のカレーとナン、スタッフの態度がよくなかったという声も。2024年5月の口コミ: ハラールの店でお酒はない。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B473906516/', R + 'B480839250/', R + 'B526938531/', R + 'B537656477/', R + 'B537699037/', R + 'B538022823/', R + 'B538065329/', R + 'B538120080/', R + 'B538356690/', R + 'B538404879/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff speak Japanese and English (March 2024 review); queues at lunch.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区東上野3-36-7 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野三丁目36番7号 (go) 3m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B480839250/', R + 'B538120080/', TB + 'dtlmenu/'],
    price_note: 'Set prices from October 2026 reviews; other dishes are on the Tabelog menu (last updated 2022), without prices here.', last_checked: TODAY, items: [
      it('', '', 'Chicken biryani set with salad, soup, raita and lassi', '¥1,150', 'Biryani', 'ask', 'no', 'October 2026 (two reviews); one October 2026 diner paid ¥1,250.', 'chicken_biryani_set'),
      it('', '', 'Lamb biryani', '', 'Biryani', 'ask', 'no', 'October 2026 review; Tabelog menu.', 'lamb_biryani'),
      it('', '', 'Vegetarian biryani', '', 'Biryani', 'ask', 'ask', 'Tabelog menu (2022); served with raita.', 'veg_biryani'),
      it('', '', 'Muslim set: half biryani, curry, keema chana, tandoori or seekh kebab, salad', '', 'Sets', 'ask', 'no', 'October 2026 review; Tabelog menu.', 'muslim_set'),
      it('', '', 'Three curries with naan', '', 'Curry', 'no', 'ask', 'October 2026 reviews.', 'three_curry_naan'),
    ] }, {
    cuisine: 'ハラールの料理を出す南インドとパキスタンの料理店で、看板はビリヤニ (食べログ)・チキンビリヤニのセット (サラダ、辛めの赤いスープ、ライタ、ラッシー付き) 1,150円 (2026年10月、1,250円だったという人も)、ラム、マトン、海老、ベジタリアンのビリヤニ・ハーフビリヤニとカレーとタンドリーのムスリムセット (2026年10月)・3種のカレーとナンのセット・キーマ、カラチのカラヒ、ニハリ、Goa の海老カレー、Alleppey の魚カレー、バターチキン・炭火のタンドリー、ティッカ、シークカバブ・食べログ カレー百名店 2017〜2020、アジア・エスニック TOKYO 百名店 2022〜2024',
    neighborhood: '東上野三丁目、1F、Ueno Mitsui Garden Hotel の近く。銀座線稲荷町駅から徒歩2分、上野駅からも歩ける',
    gf_detail: '要確認。ビリヤニはバスマティ米をカレーと炊いたもので、セットはナンやロティの代わりにバスマティライスも選べるが、グルテンフリーの説明はありません。前菜には揚げたサモサやパコラ、ナンとパロタは小麦。食べログのメニューは2022年の更新。',
    vegan_detail: '要確認。ベジタリアン・ビリヤニや野菜のカレー (ナスのバルタ、チャナ・マサラ、オクラ、アルゴビ) はあるが、ダールはバターを使い、パニール、生クリーム、ヨーグルトの料理も多く、ビリヤニにはライタが付く。ほかの料理にギーやバターを使うかは書かれていません。',
    notes: '[インド・パキスタン料理・東上野、昼に行列のできるビリヤニの店] 上野と稲荷町の間、入口が少し奥まった細長い店で、南インドとパキスタンの料理をハラールで出し、お酒は置いていない。目当てはビリヤニで、バスマティ米とカレーを重ねて混ぜずにじっくり炊き、ライタを添えて大盛りで出てくる。2026年10月はサラダ、酸味のある赤いスープ、ラッシー付きのチキンビリヤニのセットが1,150円で、昼は行列に。上野に来るたびに寄るという5回目の人も。ラム、マトン、海老、野菜のビリヤニ、ハーフビリヤニとカレーとタンドリーのムスリムセット、キーマから Goa の海老カレーまで数十種のカレー、炭火のタンドールも。スタッフは日本語と英語で対応 (2024年)。2026年10月には接客がそっけなかったという声も。食べログ カレー百名店 2017〜2020、アジア・エスニック百名店 2022〜2024。姉妹店は Sabera Tikka Biryani、Anas Dosa Biryani、Halal Dosa Biryani。',
  });
}

// ================================================================ coucou!
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13292794/'; const R = TB + 'dtlrvwlst/';
  const W = day(['15:00', '23:00']); const E = day(['13:00', '22:00']);
  put({
    id: 'tokyo_coucou_wine_bar_higashiueno', name: 'coucou!', category: 'OMNI',
    lat: 35.710824, lng: 139.780215, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Some plates on the menu may be naturally free of wheat (carrot râpé, stuffed tomato, lily bulb with silken tofu, fried potatoes, beef cheek in red wine), but nothing is described as gluten-free; the liver mousse comes with baguette and the spring rolls use wrappers.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mixed nuts, carrot râpé, lily bulb with silken tofu and fried potatoes are on the menu, but how each is made is not stated; most plates use egg, cheese, ham, liver or meat.',
    hours_raw: 'Tue–Fri 15:00–23:00; Sat, Sun and holidays 13:00–22:00; closed Monday and some other days, posted on Instagram and Facebook (Tabelog). Reservations taken; groups by phone. Table charge ¥500 (Tabelog menu). 9 seats with counter seating (Tabelog); non-smoking. Cards (VISA, Master, JCB, AMEX, Diners), e-money and PayPay. Food is cooked by the one owner, so plates can take time — order early (Tabelog menu; reviews). Opened 6 January 2024 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: W, 5: E, 6: E }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Ueno 3-chōme, 鈴木ビル 1F, a residential back street — 5 min from Ueno Stn and Inaricho Stn',
    cuisine: 'Small wine bar with bistro plates; the owner-sommelier picks wines from France and beyond, mainly Burgundy, with natural wines too (Tabelog) · menu (Tabelog, January 2026, tax included): basil mixed nuts ¥500, egg mayonnaise ¥350, carrot râpé ¥600, stuffed tomato ¥1,050, lily bulb and silken tofu ¥650, red salad ¥1,000, bang bang chicken with mimolette ¥1,050, serrano ham and salami salad ¥1,050, fried Kita Akari potatoes ¥750, lamb spring roll ¥800, soufflé omelette over mushroom duxelles ¥1,200, beef cheek braised in red wine ¥1,900, baguette ¥350, cheese platter from ¥1,000, Earl Grey crème brûlée ¥800 · chicken-liver mousse with cocoa ¥1,050 and glasses at ¥1,300–1,700 (September 2026) · bottles chosen in the cellar, around ¥10,000 (October 2026) · table charge ¥500',
    website: null, gmaps: gm('coucou! 東上野3-25-2 鈴木ビル'), menu_url: TB + 'dtlmenu/',
    notes: "[Wine bar · Higashi-Ueno, one owner-sommelier and a cellar] A nine-seat bar on a quiet back street between Ueno and Inaricho, run by one owner who is a sommelier with a long background in French cooking. Some plates are popular dishes carried over from an earlier French restaurant (Tabelog). You can choose a bottle inside the cellar (no prices on the bottles; ask, around ¥10,000 in October 2026) or let the owner pour by the glass to match the food, mostly Burgundy, with natural wines. Diners in 2025–2026 praised the stuffed tomato filled with crab salad, the soufflé omelette over mushrooms, chicken-liver mousse with cocoa, beef cheek braised in red wine and an Earl Grey crème brûlée; in 2026 a seasonal starter of Shine Muscat grapes came first. Open from 15:00 on weekdays and 13:00 at weekends, so good for an afternoon glass. With one person cooking, food takes time. Closed Mondays.",
    chef_bio: { chef_name: null, roles: ['Owner-sommelier, runs the bar alone (Tabelog; reviews)'], origin: 'Opened 6 January 2024 (Tabelog)', background: 'Tabelog\'s listing (corporate member): an owner-sommelier with long experience in French cuisine, who selects wines from France and around the world, natural wines included, and serves popular dishes carried over from an earlier French restaurant (as the listing puts it, "inherited from the previous French restaurant"). Reviewers in 2025–2026 say the owner runs the place alone. No source names the owner.', philosophy: null, specialty: 'Wine by the glass matched to the food; stuffed tomato; soufflé omelette.',
      anecdotes: [
        { text: '"Since the owner runs the place alone, the food takes a bit of time to prepare… they don\'t serve tea. So, I had a light rosé instead." — December 2025.', source: R + 'B513974523/' },
        { text: '"This wine bar is run by a single owner who is also a sommelier… The wine selection is impressive, with a visible wine cellar stocked with a significant number of bottles." — June 2026.', source: R + 'B530494308/' },
        { text: '"You get to enter the wine cellar and choose your preferred bottle. Since the prices are not listed on the bottles, you\'ll need to ask the owner for the price, which typically ranges around JPY 10,000 per bottle." — October 2026.', source: R + 'B538110689/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): coucou!、東上野3-25-2 鈴木ビル 1F、上野駅・稲荷町駅から徒歩5分、火〜金15:00〜23:00、土日祝13:00〜22:00、月曜と不定休 (Instagram と Facebook で告知)、9席、禁煙、カード・電子マネー・PayPay 可、チャージ500円、2024年1月6日オープン、フレンチの経験が長いオーナーソムリエがフランスを中心に世界のワインを選ぶ (ブルゴーニュ中心、自然派も)、以前のフレンチの店から受け継いだ人気の料理。メニュー (2026年1月): キャロットラペ600円、トマトのファルシ1,050円、百合根と絹豆腐650円、きのこのスフレオムレツ1,200円、牛ほほ肉の赤ワイン煮1,900円、アールグレイのクレームブリュレ800円など。口コミ(2025年12月〜2026年10月): オーナーが一人で営むので料理に時間がかかる、紅茶はない、料理に合わせてワインを提案、お通しにシャインマスカット、蟹のサラダを詰めたトマト、鶏レバーのムース (ココア) 1,050円、グラスワイン1,300円・1,700円、セラーで好きなボトルを選ぶ (約1万円)、白いにんじんを使ったキャロットラペ、鹿肉のバインミー。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B513974523/', R + 'B529066859/', R + 'B530494308/', R + 'B533139191/', R + 'B533980364/', R + 'B535153513/', R + 'B536078508/', R + 'B536756659/', R + 'B538110689/', R + 'B538296377/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'One owner pours and cooks; tell the owner what wine you like and it is chosen for you.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都台東区東上野3-25-2 鈴木ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing (menu updated January 2026); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区東上野三丁目25番2号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B536078508/'],
    price_note: 'Prices from the Tabelog menu (updated 1 January 2026, tax included) and a September 2026 review; table charge ¥500.', last_checked: TODAY, items: [
      it('', '', 'Stuffed tomato (crab salad)', '¥1,050', 'Cold plates', 'ask', 'no', 'Tabelog menu ("recommended"); crab per an August 2026 review.', 'tomato_farci'),
      it('キャロットラペ', '', 'Carrot râpé (white carrots in October 2026)', '¥600', 'Cold plates', 'ask', 'ask', 'Tabelog menu; October 2026 review.', 'carrot_rapee'),
      it('', '', 'Lily bulb and silken tofu', '¥650', 'Cold plates', 'ask', 'ask', 'Tabelog menu ("recommended").', 'yurine_tofu'),
      it('', '', 'Soufflé omelette over mushroom duxelles', '¥1,200', 'Hot plates', 'ask', 'no', 'Tabelog menu ("recommended").', 'souffle_omelette'),
      it('', '', 'Beef cheek braised in red wine', '¥1,900', 'Hot plates', 'ask', 'no', 'Tabelog menu.', 'beef_cheek'),
      it('', '', 'Chicken-liver mousse with cocoa, with baguette', '¥1,050', 'Cold plates', 'no', 'no', 'September 2026 review.', 'liver_mousse'),
      it('', '', 'Earl Grey crème brûlée', '¥800', 'Dessert', 'ask', 'no', 'Tabelog menu.', 'creme_brulee'),
      it('', '', 'Wine by the glass', '¥1,300–1,700', 'Wine', 'ask', 'ask', 'September 2026 review.', 'glass_wine'),
    ] }, {
    cuisine: 'ビストロの料理を出す小さなワインバー。オーナーソムリエがフランスを中心に世界からワインを選び、ブルゴーニュが中心で自然派も (食べログ)・メニュー (食べログ、2026年1月、税込み): バジル風味のミックスナッツ500円、エッグマヨ350円、キャロットラペ600円、トマトのファルシ1,050円、百合根と絹豆腐650円、赤いサラダ1,000円、ミモレットのバンバンジー1,050円、セラーノハムとサラミのサラダ1,050円、Kita Akari のフライドポテト750円、仔羊の春巻き800円、きのこのデュクセルのスフレオムレツ1,200円、牛ほほ肉の赤ワイン煮1,900円、バゲット350円、チーズの盛り合わせ1,000円から、アールグレイのクレームブリュレ800円・ココア風味の鶏レバーのムース1,050円、グラスワイン1,300〜1,700円 (2026年9月)・ボトルはセラーで選んで約1万円 (2026年10月)・チャージ500円',
    neighborhood: '東上野三丁目、鈴木ビル 1F、住宅街の裏通り。上野駅・稲荷町駅から徒歩5分',
    gf_detail: '要確認。小麦を使わないかもしれない皿 (キャロットラペ、トマトのファルシ、百合根と絹豆腐、フライドポテト、牛ほほ肉の赤ワイン煮) もあるが、グルテンフリーの説明はありません。レバームースにはバゲットが付き、春巻きは皮を使う。',
    vegan_detail: '要確認。ミックスナッツ、キャロットラペ、百合根と絹豆腐、フライドポテトはメニューにあるが、作り方は書かれていません。ほとんどの皿に卵、チーズ、ハム、レバー、肉を使う。',
    notes: '[ワインバー・東上野、オーナーソムリエ一人とワインセラー] 上野と稲荷町の間の静かな裏通りにある9席の小さな店で、フランス料理の経験が長いソムリエのオーナーが一人で営む。料理の一部は、以前のフレンチの店から受け継いだ人気の皿 (食べログ)。ワインはセラーに入ってボトルを選ぶ (ボトルに値段はなく、尋ねる。2026年10月は約1万円) か、料理に合わせてグラスで選んでもらう。ブルゴーニュが中心で自然派も。2025〜2026年の口コミで好評なのは蟹のサラダを詰めたトマト、きのこの上のスフレオムレツ、ココア風味の鶏レバーのムース、牛ほほ肉の赤ワイン煮、アールグレイのクレームブリュレ。2026年は季節のお通しにシャインマスカットが出た。平日15時、週末13時から開くので昼からの一杯にも。料理は一人で作るので時間がかかる。月曜休み。',
  });
}

// ================================================================ 東京とんかつ がぶう
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13308066/'; const R = TB + 'dtlrvwlst/';
  const PR = 'https://prtimes.jp/main/html/rd/p/000000005.000155297.html'; const JOB = 'https://herp.careers/v1/gavrifood/E949i2kLlTwq';
  const D = day(['11:30', '15:00'], ['17:30', '21:00']);
  put({
    id: 'tokyo_tonkatsu_gabuu_okachimachi', name: '東京とんかつ がぶう (Tokyo Tonkatsu Gabuu)', category: 'OMNI',
    lat: 35.708611, lng: 139.774119, cuisine_type: 'katsu',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: every main is a breaded, deep-fried cutlet in fresh breadcrumbs (also menchi katsu and fried shrimp), and each seat must order a set meal.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a pork-cutlet specialist; every set is pork (menchi katsu and seafood fries too).',
    hours_raw: 'Daily 11:30–15:00 (food last order 14:00) and 17:30–21:00 (food last order 20:00); closing days irregular, posted on Instagram (Tabelog). Buy tickets at the vending machine from 15 minutes before opening; seated in order of arrival. Reservations through Tabelog only (no phone); dinner is by reservation per an October 2026 review, though a sign welcomes walk-ins. 17 counter seats; each seat orders at least one set meal. Cashless: cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (PayPay, d Barai, Rakuten Pay, au PAY, Alipay, WeChat Pay); "cash not accepted" (October 2026 review). Non-smoking; children, babies and strollers welcome; stairs at the entrance, no elevator. Opened 25 April 2025 (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Ueno 4-chōme, OGSⅡ B1F, near Ameyoko — 2 min from JR Okachimachi Stn, Ueno-Okachimachi Stn (Oedo Line) and Ueno-Hirokoji Stn (Ginza Line)',
    cuisine: 'Tonkatsu from brand pork, fried slowly at low temperature in fresh breadcrumbs (Tabelog; reviews) · premium loin set ¥3,278 (Sanemon or Maru pork), ¥3,938 (Rokubaku Kurobuta), ¥4,378 (TOKYO X); special premium loin ¥3,828–5,038; fillet ¥3,498–4,378; special fillet ¥4,048–5,258 (Tabelog menu, January 2026, tax included) · Gabu omakase set of premium loin, special loin, fillet and menchi katsu ¥6,600 · menchi katsu ¥528 (October 2026) · rice from a hagama pot, cabbage with truffle dressing and red miso soup, refills free · salt, soy sauce, wasabi, mustard and sauce · Tabelog Tonkatsu 100 2026',
    website: null, gmaps: gm('東京とんかつ がぶう 上野4-6-4'), menu_url: TB + 'dtlmenu/',
    notes: "[Tonkatsu · Okachimachi, brand pork at a basement counter] A 17-seat counter around an open kitchen in a basement near Ameyoko, opened in April 2025 by a new company whose head chef trained at Tonkatsu Keita in Nishi-Ogikubo; in about ten months it made Tabelog's Tonkatsu 100 list for 2026, the fastest of that year's new picks. Choose loin or fillet and then the pork: Sanemon, Maru pork, Rokubaku Kurobuta or TOKYO X, from ¥3,278 a set; the cutlets are fried slowly at low temperature in a light coat of fresh breadcrumbs, cut thick and served pink, with a strip of the fat. Rice from a hagama pot, cabbage with a truffle dressing and red miso soup are refilled free. Buy tickets at the machine; it is cashless. In October 2026 diners waited about 30 minutes at Saturday lunch, found premium cuts sold out by evening, and one long-time regular felt the food had slipped since a change of management. Book dinner on Tabelog.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 25 April 2025 (Tabelog; PR Times)', background: 'Run by 株式会社GAVRIFOOD (Ginza, founded May 2024; representative director 大沼康宏, per a PR Times release of 17 August 2026). This Ueno-Okachimachi shop is the company\'s first; the second, in Harajuku, opened in 2026 (PR Times). The company\'s job page says its head chef trained at とんかつけい太, which it ranks fifth nationally in Tabelog\'s tonkatsu category, and that the company plans 100 shops across five brands in five years. Reviews in May 2025 and October 2026 say the shop is run by a chef from Keita in Nishi-Ogikubo; an October 2026 regular wrote of a change in management. No source gives the chef\'s name in romaji.', philosophy: null, specialty: 'Brand-pork loin and fillet cutlets; menchi katsu.',
      anecdotes: [
        { text: '"A Tonkatsu restaurant run by the chef from Keita in Nishi-Ogikubo. The interior features only a counter… The taste is on par with or even better than Keita." — May 2025.', source: R + 'B510302503/' },
        { text: '"On a Saturday just past noon, there were six people ahead of me, and it took about 30 minutes to be seated." — October 2026, Special Premium Loin of Maru pork.', source: R + 'B537947286/' },
        { text: '"The change in management has unfortunately led to a decline in attention to detail, flavor, portion sizes… there were more items unavailable than ever before." — October 2026, third visit.', source: R + 'B510302503/' },
      ],
      japanese_sources_summary: 'PR TIMES (2026年8月17日): 株式会社GAVRIFOOD (本社 東京都中央区、代表取締役 大沼康宏、2024年5月設立) が2号店「東京とんかつ がぶう 原宿店」を開業、1号店の上野御徒町店は2025年4月25日の開業から約10か月で「食べログ とんかつ 百名店 2026」に選出、新規選出26店舗の中で最速。求人ページ (herp.careers): 料理長は食べログとんかつ部門全国5位の「とんかつけい太」で腕を磨いた、5年間で5ブランド100店舗の展開を計画。食べログ (店舗会員): 上野4-6-4 OGSⅡ B1F、JR御徒町駅から徒歩2分、毎日11:30〜15:00 (L.O.14:00)・17:30〜21:00 (L.O.20:00)、不定休 (Instagram で告知)、開店15分前から券売機で食券、予約は食べログのみ、カウンター17席、1席1定食以上、禁煙、子ども・ベビーカー可、エレベーターなし、上ロースかつ定食3,278円から (2026年1月のメニュー)、がぶうおまかせ定食6,600円。口コミ(2025年5月〜2026年10月): Nishi-Ogikubo のけい太出身の料理人、低温でじっくり揚げる、ご飯・キャベツ (トリュフのドレッシング)・赤だしはおかわり自由、土曜の昼に30分待ち、夜は売り切れが多い、現金不可、経営が変わって質が落ちたという常連の声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', PR, JOB, R + 'B510302503/', R + 'B537814670/', R + 'B537947286/', R + 'B537961480/', R + 'B538024754/', R + 'B538151310/', R + 'B538151497/', R + 'B538183603/', R + 'B538196362/', R + 'B538310084/'] },
    cultural_comfort: { level: 'english', note: 'Tabelog lists a menu in English and Simplified Chinese and a digital menu; tickets from a machine; many overseas guests (October 2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野4-6-4 OGSⅡ B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Corporate-member Tabelog listing (menu updated January 2026); PR Times release of 17 August 2026; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野四丁目6番4号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB + 'dtlmenu/', TB, R + 'B538151310/'],
    price_note: 'Prices from the Tabelog menu (updated 7 January 2026, tax included), the listing\'s set menu and an October 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Premium loin cutlet set (Sanemon or Maru pork)', '¥3,278', 'Set meals', 'no', 'no', 'Tabelog menu; Sanemon at ¥3,278 in October 2026. Rokubaku Kurobuta ¥3,938, TOKYO X ¥4,378.', 'jo_rosu'),
      it('', '', 'Special premium loin cutlet set', '¥3,828', 'Set meals', 'no', 'no', 'Tabelog menu; up to ¥5,038 for TOKYO X.', 'toku_jo_rosu'),
      it('', '', 'Fillet cutlet set (Sanemon or Maru pork)', '¥3,498', 'Set meals', 'no', 'no', 'Tabelog menu; up to ¥4,378 for TOKYO X.', 'hire'),
      it('', '', 'Special fillet cutlet set', '¥4,048', 'Set meals', 'no', 'no', 'Tabelog menu; up to ¥5,258 for TOKYO X.', 'toku_hire'),
      it('', '', 'Gabu omakase set: premium loin, special loin, fillet and menchi katsu', '¥6,600', 'Set meals', 'no', 'no', 'Tabelog listing ("most popular").', 'omakase'),
      it('', '', 'Menchi katsu', '¥528', 'Sides', 'no', 'no', 'October 2026 review.', 'menchi'),
    ] }, {
    cuisine: 'ブランド豚を生パン粉で低温でじっくり揚げるとんかつ (食べログ、口コミ)・上ロースかつ定食3,278円 (Sanemon か Maru pork)、3,938円 (Rokubaku Kurobuta)、4,378円 (TOKYO X)、特上ロース3,828〜5,038円、ヒレ3,498〜4,378円、特上ヒレ4,048〜5,258円 (食べログのメニュー、2026年1月、税込み)・上ロース、特上ロース、ヒレ、メンチカツのがぶうおまかせ定食6,600円・メンチカツ528円 (2026年10月)・羽釜で炊くご飯、トリュフのドレッシングのキャベツ、赤だしはおかわり自由・塩、醤油、わさび、からし、ソース・食べログ とんかつ百名店 2026',
    neighborhood: '上野四丁目、OGSⅡ B1F、Ameyoko の近く。JR御徒町駅、大江戸線上野御徒町駅、銀座線上野広小路駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。メインはすべて生パン粉の衣で揚げたかつ (メンチカツ、海老フライも)。1席1定食の注文が必要。',
    vegan_detail: 'ヴィーガンではありません。とんかつの専門店で、定食はすべて豚肉 (メンチカツや魚介のフライも)。',
    notes: '[とんかつ・御徒町、地下のカウンターでブランド豚] Ameyoko の近くの地下、オープンキッチンを囲む17席のカウンター。2025年4月に新しい会社が開いた店で、料理長はNishi-Ogikubo の「とんかつけい太」で腕を磨いた人。約10か月で食べログ とんかつ百名店 2026 に、その年の新規選出で最速で選ばれた。ロースかヒレを選び、豚を Sanemon、Maru pork、Rokubaku Kurobuta、TOKYO X から選ぶ (定食3,278円から)。低温でじっくり揚げた軽い生パン粉の衣のかつは厚切りで断面はほんのりピンク、脂身も添えて出てくる。羽釜のご飯、トリュフのドレッシングのキャベツ、赤だしはおかわり自由。食券は券売機で、現金は使えない。2026年10月の口コミでは土曜の昼に約30分待ち、夜には上のかつが売り切れ、経営が変わって質が落ちたという常連の声も。夜は食べログで予約を。',
  });
}

save();
