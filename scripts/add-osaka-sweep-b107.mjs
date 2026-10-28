// Osaka sweep (2-mile circle around Dotonbori), batch 107 — mom / small-shop phase (all OMNI).
//   + 寿司赤酢 大阪なんば PREMIUM (8-seat red-vinegar sushi omakase on an 8F counter with a night view; Soemoncho)
//   + 熟成鮨 利他 なんば心斎橋 (aged-fish sushi omakase ¥14,800, reservation only; Nishi-Shinsaibashi)
//   + あぐー豚しゃぶしゃぶ 豚や 葵 (Okinawan Agu pork shabu-shabu, homemade ponzu, Okinawa soba; Higashi-Shinsaibashi)
//   + ホルモン・ジビエ 明星 (standing bar: horumon, kangaroo, venison, badger; Tabelog tachinomi 100 2025; Sennichimae)
//   + 真夜中キッチン うさぎ (midnight-to-8am counter diner: omurice and izakaya snacks; Higashi-Shinsaibashi)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 107);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 寿司赤酢 大阪なんば PREMIUM
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27146291/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_sushi_akazu_namba_premium', name: '寿司赤酢 大阪なんば PREMIUM (Sushi Akazu Osaka Namba PREMIUM)', category: 'OMNI',
    lat: 34.669591, lng: 135.504207, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-marinated tuna and soy seasoning; simmered anago and eel sauce; miso soup.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish, sea urchin and caviar throughout; egg custard.',
    hours_raw: 'Daily 18:00–22:30 in two seatings, 18:00–20:00 and 20:30–22:30; closing days vary (Tabelog). Reservations taken; families with children not ordering the course are asked to use the sister shop Sushi Akazu in Shinsaibashi (Tabelog). BYO drinks ¥5,000 per bottle (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog).',
    hours: ALL(day(['18:00', '22:30'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Soemoncho 5-8, 8F — 5 min from Namba or Nipponbashi Stn',
    cuisine: 'Edomae sushi omakase on red-vinegar rice · omakase ¥19,800 (September 2026): Hokkaido oysters with ponzu, boiled octopus, bonito tataki, grilled eel with crisp skin, otoro, chutoro and soy-marinated akami of natural bluefin, steamed abalone with liver sauce and rice to mop it up, ikura chawanmushi, squid, sea bream, kohada, Hokkaido sea urchin with caviar, Kumamoto prawn, simmered anago, red miso soup of fish bones, iburigakko and toro-taku hand roll, a pudding-like tamago to finish · firm 10-year-aged akazu rice, white vinegar for some toppings · 8 seats at a single hinoki counter',
    website: null, gmaps: gm('寿司赤酢 大阪なんば PREMIUM'), menu_url: null,
    notes: "[Sushi · red-vinegar sushi omakase at an eight-seat counter with a Namba night view] An eighth-floor, eight-seat counter of single-board hinoki in Soemoncho, open since February 2025, a sister shop of Sushi Akazu in Shinsaibashi. The omakase (¥19,800 in September 2026) runs in two seatings and builds around firm rice seasoned with aged red vinegar; one diner who worried it wouldn't suit loved it. Expect Hokkaido oysters in ponzu, a tuna trio of otoro, chutoro and marinated akami, steamed abalone whose liver sauce you finish over a little rice, sea urchin crowned with caviar, soft simmered anago, then a smoked-daikon toro-taku hand roll and a pudding-like tamago that plays dessert. One diner mentions the friendly chef, others the Minami night view, and two call it an anniversary or date place. BYO costs ¥5,000 a bottle.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 February 2025 (Tabelog)', background: 'Red-vinegar sushi counter; sister shop of Sushi Akazu in Shinsaibashi (Tabelog).', philosophy: 'Firm rice of 10-year-aged red vinegar, white vinegar for some toppings (September 2026 review).', specialty: 'Red-vinegar Edomae sushi omakase.',
      anecdotes: [
        { text: '"The sushi was made with a firm 10-year aged akazu rice, with white vinegar used for certain toppings… after finishing it, I placed the leftover liver sauce on the rice… what surprised me was the additional liver sauce!" — September 2026, omakase ¥19,800.', source: R + 'B536342905/' },
        { text: '"…I was honestly a bit nervous about whether it would suit my taste, but I was pleasantly surprised by how much I loved it." — September 2026, on the red-vinegar rice.', source: R + 'B535807804/' },
      ],
      japanese_sources_summary: '食べログ: 寿司赤酢 大阪なんば PREMIUM、大阪市中央区宗右衛門町5-8 8F、なんば駅・日本橋駅から徒歩5分、毎日18:00〜22:30(1部18:00〜20:00、2部20:30〜22:30)、不定休、予約可、コースを注文しない子ども連れは姉妹店の心斎橋の寿司赤酢へ、持ち込み1本5,000円、カード可(VISA、Master、JCB、AMEX、Diners)、電子マネー・QR不可、カウンター8席、2025年2月2日開店。口コミ(2026年8〜10月): 赤酢のシャリ、8階のカウンター8席、つまみと握りのおまかせ、翡翠茄子と山芋、蛸の煮物、三重の鰆の焼き霜、たれなしの焼き鰻、皮はパリッと、カマトロ・大トロ・漬け赤身、蒸し鮑の肝ソース、いくらの茶碗蒸し、剣先烏賊、新烏賊、北海道の雲丹にキャビア、穴子、魚のアラの味噌汁、いぶりがっこのトロたく手巻き、デザートのような玉子、職人が気さくという声、記念日やデートに、おまかせ19,800円、一枚板の檜のカウンター、なんばの夜景、10年熟成の赤酢の固めのシャリ、一部のネタは白酢、天然の本鮪、肝ソースの追加、赤だし、明石の鯛、鰊、カマス、鰤、甘海老。',
      confidence: 'medium', sources: [TB, R + 'B534556884/', R + 'B535212837/', R + 'B535807804/', R + 'B536342905/', R + 'B537366250/', R + 'B537654359/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter omakase by reservation; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町5-8 8F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町5番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536342905/', R + 'B535807804/'],
    price_note: 'Course price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase course', '¥19,800', 'Course', 'no', 'no', 'September 2026; two seatings.', 'omakase'),
    ] }, {
    cuisine: '赤酢のシャリの江戸前寿司のおまかせ・おまかせ19,800円(2026年9月): 北海道の牡蠣のポン酢、蛸の煮物、鰹のたたき、皮がパリッとした焼き鰻、天然本鮪の大トロ・中トロ・漬け赤身、蒸し鮑の肝ソースを少しのシャリで、いくらの茶碗蒸し、烏賊、鯛、小肌、北海道の雲丹にキャビア、熊本の車海老、煮穴子、アラの赤だし、いぶりがっことトロたくの手巻き、締めはプリンのような玉子・10年熟成の赤酢の固めのシャリ、一部のネタは白酢・一枚板の檜のカウンター8席',
    neighborhood: '中央区宗右衛門町5-8 8F。なんば駅・日本橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。漬け鮪と醤油の味付け、煮穴子と鰻のたれ、味噌汁。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、雲丹、キャビアが中心、茶碗蒸し。',
    notes: '[寿司・なんばの夜景を望むカウンター8席の赤酢の寿司] 宗右衛門町のビル8階、一枚板の檜のカウンター8席で、2025年2月開店、心斎橋の寿司赤酢の姉妹店。おまかせ(2026年9月は19,800円)は二部制で、熟成赤酢の固めのシャリが軸。口に合うか心配だったが大好きになったという声。北海道の牡蠣のポン酢、大トロ・中トロ・漬け赤身の鮪の食べ比べ、肝ソースを少しのシャリで締める蒸し鮑、キャビアをのせた雲丹、柔らかい煮穴子、そしていぶりがっこのトロたく手巻きとデザート役のプリンのような玉子。気さくな職人を挙げる声、ミナミの夜景を挙げる声、記念日やデートの店という声。持ち込みは1本5,000円。',
  });
}

// ================================================================ 熟成鮨 利他 なんば心斎橋
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27147889/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_jukusei_sushi_rita_namba', name: '熟成鮨 利他 なんば心斎橋 (Jukusei Sushi Rita Namba Shinsaibashi)', category: 'OMNI',
    lat: 34.669253, lng: 135.49838, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: marinated tuna and soy seasoning; Saikyo-miso yellowtail; Tosa-vinegar jelly.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, shellfish and sea urchin throughout; crab chawanmushi.',
    hours_raw: 'Reservation only. Dinner seatings from 18:00 and from 20:30; lunch on weekends and public holidays from 12:00; closing days vary (Tabelog). 5% service charge from December 2025 (Tabelog). Private hire for 12 or more, at least a month ahead (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay); no e-money or QR (Tabelog).',
    hours: {}, hours_status: 'unknown',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-6-7, s-Front Dotonbori 3F, the grey building beside the parking lot facing APA Hotel Namba Shinsaibashi — 236 m from Osaka-Namba',
    cuisine: 'Aged-fish sushi omakase · aged sushi omakase ¥14,800 (October 2026): about 18 dishes, 10–12 nigiri with sashimi, grilled and simmered dishes and soup · sea bream with Tosa-vinegar jelly finished over binchotan · aori squid flash-frozen and finely scored, with Himalayan salt and sudachi · shima aji aged 7 days · chawanmushi with king and snow crab · Kesennuma bonito seared with ginger · dry-aged chutoro on rice kept at 42°C · Densuke anago shabu-shabu · signature botan ebi with shrimp roe and sea urchin · Saikyo-miso yuan-grilled yellowtail · kinmedai aged 6 days · kanpachi roll with gari, green onion and honey ume · fish-bone soup · "noble cocktail" of the day\'s trimmings with alum-free sea urchin · marinated akami · vanilla pudding · counter and private rooms, 18 seats',
    website: null, gmaps: gm('熟成鮨 利他 なんば心斎橋'), menu_url: null,
    notes: "[Sushi · aged-fish sushi omakase by Dotonbori] A reservation-only sushi counter on the third floor of a new building in Nishi-Shinsaibashi, open since May 2025, built around fish aged for different lengths of time. The ¥14,800 omakase runs to about 18 dishes: sea bream under a Tosa-vinegar jelly finished over binchotan, aori squid flash-frozen and finely scored, seven-day shima aji, dry-aged chutoro on rice kept warmer at 42°C so the fat melts, Densuke anago swished as shabu-shabu, and the signature botan ebi topped with shrimp roe and sea urchin. A fish-bone soup simmered for hours and a vanilla pudding close it. Diners praise the explanations and playful touches; one was surprised with a birthday plate. One diner noticed many overseas guests. There's a 5% service charge. Lunch on weekends.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 1 May 2025 (Tabelog)', background: 'Reservation-only aged-sushi counter (Tabelog; 2026 reviews).', philosophy: '"Ultimate umami with time as an ally": different aging days for each fish and rice temperature varied by topping (October 2026 reviews).', specialty: 'Aged-fish sushi omakase.',
      anecdotes: [
        { text: '"The medium fatty tuna, aged for 14 days, was served with rice at 42 degrees Celsius, the perfect temperature for melting the tuna\'s fat… The signature dish, botan ebi (sweet shrimp), was topped with uni (sea urchin) and egg." — October 2026, aged sushi omakase ¥14,800.', source: R + 'B537653123/' },
        { text: '"A rich soup made by roasting fish bones for about 20 minutes and simmering for 4 hours." — October 2026.', source: R + 'B537868566/' },
      ],
      japanese_sources_summary: '食べログ: 熟成鮨 利他 なんば心斎橋、大阪市中央区西心斎橋2-6-7 s-Front道頓堀 3F(アパホテルなんば心斎橋の前、駐車場横のグレーのビル、新築のため地図に出ない場合あり)、大阪難波から236m、完全予約制、ディナー18:00〜・20:30〜、土日祝ランチ12:00〜、不定休、2025年12月からサービス料5%、12名以上の貸切は1か月前までに相談、カード可(VISA、Master、JCB、AMEX、Diners、銀聯)、電子マネー・QR不可、18席、個室あり、2025年5月1日開店。口コミ(2026年9〜10月): 魚ごとに熟成日数を変える、丁寧な説明、写真への配慮、誕生日のサプライズプレート、熟成鮨おまかせ14,800円、握り10〜12貫と刺身・焼き物・煮物・椀、外国人客が多いという声、土佐酢ジュレの鯛を備長炭で、急速冷凍して包丁を入れたアオリイカにヒマラヤ岩塩とすだち、7日熟成の縞鯵、タラバ蟹とズワイ蟹の茶碗蒸し、気仙沼の鰹の炙りに生姜、ドライエイジングの中トロに42度のシャリ、伝助穴子のしゃぶしゃぶ、名物の牡丹海老に海老の卵と雲丹、西京味噌の鰤の幽庵焼き、6日熟成の金目鯛、ガリ・芽ねぎ・はちみつ梅の勘八の巻き、アラを20分焼いて4時間煮たアラ汁、ミョウバン不使用の塩水雲丹、漬けの赤身、バニラのプリン、「時間を味方につけた究極の旨み」。',
      confidence: 'medium', sources: [TB, R + 'B525249080/', R + 'B537405323/', R + 'B537653123/', R + 'B537803897/', R + 'B537868566/', R + 'B538016944/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests noticed by one diner (October 2026); UnionPay accepted (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-6-7 s-Front道頓堀 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目6番7号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537653123/', R + 'B537803897/'],
    price_note: 'Course price from October 2026 reviews; plus 5% service charge.', last_checked: TODAY, items: [
      it('', '', 'Aged sushi omakase course', '¥14,800', 'Course', 'no', 'no', 'October 2026; plus 5% service charge.', 'omakase'),
    ] }, {
    cuisine: '熟成鮨のおまかせ・熟成鮨おまかせ14,800円(2026年10月): 約18品、握り10〜12貫に刺身、焼き物、煮物、椀・土佐酢ジュレの鯛を備長炭で・急速冷凍して細かく包丁を入れたアオリイカにヒマラヤ岩塩とすだち・7日熟成の縞鯵・タラバ蟹とズワイ蟹の茶碗蒸し・気仙沼の鰹の炙りに生姜・42度のシャリにドライエイジングの中トロ・伝助穴子のしゃぶしゃぶ・名物の牡丹海老に海老の卵と雲丹・西京味噌の鰤の幽庵焼き・6日熟成の金目鯛・ガリ、芽ねぎ、はちみつ梅の勘八の巻き・アラ汁・その日の端材とミョウバン不使用の雲丹の「貴族のカクテル」・漬けの赤身・バニラのプリン・カウンターと個室、18席',
    neighborhood: '中央区西心斎橋2-6-7 s-Front道頓堀 3F、アパホテルなんば心斎橋の前の駐車場横のグレーのビル。大阪難波から236m',
    gf_detail: 'グルテンフリーではありません。漬けの鮪と醤油の味付け、西京味噌の鰤、土佐酢のジュレ。',
    vegan_detail: 'ヴィーガンではありません。魚、貝、雲丹が中心、蟹の茶碗蒸し。',
    notes: '[寿司・道頓堀近く、熟成魚の鮨のおまかせ] 西心斎橋の新しいビル3階、完全予約制の鮨店で、2025年5月開店、魚ごとに熟成の日数を変えるのが軸。14,800円のおまかせは約18品: 土佐酢ジュレの鯛を備長炭で仕上げ、急速冷凍して細かく包丁を入れたアオリイカ、7日熟成の縞鯵、脂が溶けるよう42度と温かめのシャリにのせたドライエイジングの中トロ、しゃぶしゃぶにする伝助穴子、そして海老の卵と雲丹をのせた名物の牡丹海老。数時間煮たアラ汁とバニラのプリンで締め。丁寧な説明や遊び心を評価する声、誕生日のプレートで驚かされた人も。外国人客が多かったという声。サービス料5%。週末は昼も。',
  });
}

// ================================================================ あぐー豚しゃぶしゃぶ 豚や 葵
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27109303/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/'; const OWN = 'https://agu-aoi.shop-pro.jp/';
  const D = day(['17:00', '23:00']);
  put({
    id: 'osaka_agu_buta_shabu_butaya_aoi', name: 'あぐー豚しゃぶしゃぶ 豚や 葵 (Agu Buta Shabushabu Buta ya Aoi)', category: 'OMNI',
    lat: 34.672186, lng: 135.502425, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: ponzu and sesame sauces; Okinawa soba noodles; purple sweet potato tempura.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Agu pork shabu-shabu is the meal; pork broth for zosui and soba.',
    hours_raw: 'Mon–Sat 17:00–23:00 (last entry 21:30); closed Sun; reservation only, and opening follows the first booking; arrive no more than 5 minutes early (Tabelog). Each guest orders a course or the à-la-carte hot pot, or pays a ¥1,000 / ¥550 charge (Tabelog menu). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-16-19, Nippo Suomachi Kaikan 1F — 4–5 min from Shinsaibashi Stn',
    cuisine: 'Okinawan Agu pork shabu-shabu · course ¥5,280: mozuku vinegar starter, Agu pork shabu-shabu, zosui or Okinawa soba, dessert · à-la-carte shabu-shabu hot pot ¥4,620 · Agu meatballs +¥418 · extra Agu pork ¥3,300 · pork arranged like a rose; homemade ponzu with chopped green onion, sesame sauce and yuzu-kosho · pickled island garlic · purple sweet potato tempura ¥748 · rafute ¥1,078 · yuzu mimiga ¥638 · Agu kakuni ¥1,650 · Okinawa soba ¥1,000 with Ishigaki noodles · juushii zosui ¥500 · 6 counter seats, 10 at tables',
    website: OWN, gmaps: gm('豚や 葵 東心斎橋'), menu_url: MENU,
    notes: "[Shabu-shabu · Okinawan Agu pork shabu-shabu in Higashi-Shinsaibashi] A clean, reservation-only shabu-shabu room near Shinsaibashi that serves Okinawa's Agu pork, sliced and arranged like a rose; repeat diners come back for meat that is sweet and \"not greasy at all.\" The ¥5,280 course opens with crunchy mozuku vinegar, then the hot pot, with homemade ponzu heaped with green onion, a sesame sauce and yuzu-kosho; wrap the pork around green onion or pickled island garlic. Staff explain the pot and serve the first round. Finish with zosui or Okinawa soba made with Ishigaki noodles, and add the sweet purple sweet potato tempura. One repeat diner always buys the ponzu to take home. Order a course or the hot pot per person, or a per-head charge applies. There's a second branch in Namba.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Agu pork shabu-shabu restaurant with a Higashi-Shinsaibashi and a Namba shop (official site agu-aoi.shop-pro.jp; Tabelog).', philosophy: null, specialty: 'Agu pork shabu-shabu; homemade ponzu.',
      anecdotes: [
        { text: '"The meat was beautifully arranged in the shape of a rose… You can enjoy it with a dipping sauce filled with plenty of green onions and ponzu, along with yuzu pepper." — August 2026.', source: R + 'B447473457/' },
        { text: '"The initial explanation of the hot pot was thorough… The meat was incredibly delicious, not greasy at all." — February 2026.', source: R + 'B522467493/' },
      ],
      japanese_sources_summary: '公式 agu-aoi.shop-pro.jp: 心斎橋店(06-6226-8402、17:00〜23:00、最終入店21:30、東心斎橋1-16-19 日宝周防町会館 1F)と難波店、ポン酢のオンライン販売。食べログ: あぐー豚しゃぶしゃぶ 豚や 葵、心斎橋駅から徒歩4〜5分、月〜土 17:00〜23:00(L.O. 21:30)、日休み、完全予約制、最初の予約に合わせて開店、予約時間の5分以上前の来店は控える、カード可、電子マネー・QR不可、16席(カウンター6、テーブル10)。メニュー: あぐー豚しゃぶしゃぶコース5,280円(雑炊か沖縄そば、デザート付き)、単品の鍋4,620円、あぐー豚つくね+418円、追加のあぐー豚3,300円、雑炊550円、沖縄そば1,000円(石垣島の麺、自家製ラフテー)、ジューシー雑炊500円、野菜セット880円、刻みねぎ330円、自家製ごまだれ330円、肉味噌きゅうり638円、紅芋の天ぷら748円、ラフテー1,078円、もずく酢418円、柚子ミミガー638円、あぐー豚の角煮1,650円、人数分を注文しない場合はコース1,000円・単品550円。口コミ(2025年1月〜2026年10月): バラの形に盛った豚、甘い脂、ねぎたっぷりのポン酢と柚子胡椒、ポン酢を持ち帰りで買う、締めの雑炊、島らっきょうの漬物、紅芋の天ぷら、辛味噌、もずく、自家製のポン酢とごまだれ、鍋の説明と最初の取り分け、脂っぽくない、沖縄そばの締め、カウンターでも心地よい距離感。',
      confidence: 'medium', sources: [TB, MENU, OWN, R + 'B447473457/', R + 'B473219655/', R + 'B500594360/', R + 'B522467493/', R + 'B534593971/', R + 'B537373332/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the hot pot and serve the first round (February 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-16-19 日宝周防町会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and official site current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目16番19号 (go) 7m; same building as Mayonaka Kitchen Usagi; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [MENU],
    price_note: 'Prices from the Tabelog menu, tax included.', last_checked: TODAY, items: [
      it('', '', 'Agu pork shabu-shabu course (zosui or Okinawa soba, dessert)', '¥5,280', 'Course', 'no', 'no', 'Tabelog menu.', 'course'),
      it('', '', 'Agu pork shabu-shabu hot pot, à la carte', '¥4,620', 'Hot pot', 'no', 'no', 'Tabelog menu.', 'nabe'),
      it('', '', 'Agu pork meatballs (2)', '+¥418', 'Hot pot', 'no', 'no', 'Tabelog menu.', 'tsukune'),
      it('', '', 'Extra Agu pork (per person)', '¥3,300', 'Hot pot', 'no', 'no', 'Tabelog menu.', 'extra_pork'),
      it('', '', 'Purple sweet potato tempura', '¥748', 'Dishes', 'no', 'no', 'Tabelog menu.', 'beniimo_ten'),
      it('', '', 'Rafute', '¥1,078', 'Dishes', 'no', 'no', 'Tabelog menu.', 'rafute'),
      it('', '', 'Mozuku vinegar', '¥418', 'Dishes', 'no', 'no', 'Tabelog menu.', 'mozuku'),
      it('', '', 'Yuzu mimiga (pork ear)', '¥638', 'Dishes', 'no', 'no', 'Tabelog menu.', 'mimiga'),
      it('', '', 'Agu pork kakuni', '¥1,650', 'Dishes', 'no', 'no', 'Tabelog menu.', 'kakuni'),
      it('', '', 'Okinawa soba', '¥1,000', 'Finish', 'no', 'no', 'Tabelog menu.', 'okinawa_soba'),
      it('', '', 'Zosui (per person)', '¥550', 'Finish', 'no', 'no', 'Tabelog menu.', 'zosui'),
      it('', '', 'Juushii zosui', '¥500', 'Finish', 'no', 'no', 'Tabelog menu; after Okinawa soba only.', 'juushii'),
    ] }, {
    cuisine: '沖縄のあぐー豚のしゃぶしゃぶ・コース5,280円: もずく酢、あぐー豚しゃぶしゃぶ、雑炊か沖縄そば、デザート・単品の鍋4,620円・あぐー豚つくね+418円・追加のあぐー豚3,300円・バラの形に盛った豚、ねぎたっぷりの自家製ポン酢、ごまだれ、柚子胡椒・島らっきょうの漬物・紅芋の天ぷら748円・ラフテー1,078円・柚子ミミガー638円・あぐー豚の角煮1,650円・石垣島の麺の沖縄そば1,000円・ジューシー雑炊500円・カウンター6席、テーブル10席',
    neighborhood: '中央区東心斎橋1-16-19 日宝周防町会館 1F。心斎橋駅から徒歩4〜5分',
    gf_detail: 'グルテンフリーではありません。ポン酢とごまだれ、沖縄そばの麺、紅芋の天ぷら。',
    vegan_detail: 'ヴィーガンではありません。あぐー豚のしゃぶしゃぶが主役、雑炊と沖縄そばは豚の出汁。',
    notes: '[しゃぶしゃぶ・東心斎橋、沖縄のあぐー豚のしゃぶしゃぶ] 心斎橋近く、清潔で完全予約制のしゃぶしゃぶの店で、沖縄のあぐー豚をバラの形に盛って出す。甘く「まったく脂っぽくない」肉を目当てに通う人も。5,280円のコースは歯ごたえのあるもずく酢から始まり、鍋はねぎたっぷりの自家製ポン酢、ごまだれ、柚子胡椒で。豚でねぎや島らっきょうを巻いて。鍋の説明と最初の取り分けはスタッフが。締めは雑炊か石垣島の麺の沖縄そば、甘い紅芋の天ぷらも。ポン酢をいつも持ち帰りで買う人も。人数分のコースか鍋を頼まないと一人あたりの料金がかかる。難波にも店舗あり。',
  });
}

// ================================================================ ホルモン・ジビエ 明星
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27131587/'; const R = TB + 'dtlrvwlst/';
  const E = day(['17:00', '23:00']); const W = day(['15:00', '23:00']);
  put({
    id: 'osaka_horumon_gibier_myojo_sennichimae', name: 'ホルモン・ジビエ 明星 (Horumon Gibier Myojo)', category: 'OMNI',
    lat: 34.667819, lng: 135.505288, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy-based sauces and marinades; teriyaki; curry.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: offal and game meat are the menu; shungiku namul is the one vegetable side reported.',
    hours_raw: 'Mon, Wed, Thu, Fri 17:00–23:00 (L.O. 22:00); Sat–Sun 15:00–23:00 (L.O. 22:00); closed Tue; check Instagram for days and hours (Tabelog). Line at opening and items sell out; go early (2025–2026 reviews). Weekend curry while it lasts. Menu prices exclude tax (October 2026). Cash only: no cards, e-money or QR (Tabelog).',
    hours: { 0: E, 2: E, 3: E, 4: E, 5: W, 6: W }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Sennichimae 1-2-9, ST Sennichimae Bldg 1F, just off Sennichimae-dori about 100 m north of Tamaseiya — 116 m from Nippombashi Stn',
    cuisine: 'Standing bar for horumon and game · horumon stew ¥480 · Matsusaka beef garlic small intestine ¥580 · Miyazaki beef loin yukhoe, seared, with egg yolk ¥980 · kangaroo tenderloin steak with salt ¥720 · venison, wild boar, pheasant thigh, badger (in a hot pot in winter), camel and sea lion when in stock · raw-safe horse liver, beef tongue and cheek sashimi · liver, more cuts early in the night · heart teriyaki · Nishinari oil horumon · shungiku namul · weekend curry · bottled beer (Akaboshi), shochu, mix-your-own highballs with bottled soda · 16 standing places at a U-shaped counter',
    website: null, gmaps: gm('ホルモン・ジビエ 明星 千日前'), menu_url: null,
    notes: "[Standing bar · horumon and game, from kangaroo to badger, by Nippombashi] A retro standing bar behind a plastic-sheet door just off Sennichimae-dori, picked for Tabelog's tachinomi 100 in 2025, where 1980s and 90s J-pop plays on a big screen and you mix your own highball from bottled soda. The draw is fresh offal and game: Matsusaka beef garlic small intestine (¥580), a seared Miyazaki beef yukhoe with egg yolk (¥980), and a kangaroo tenderloin steak (¥720) diners find tender, juicy and not gamey. Venison and wild boar are staples; pheasant, badger (as a winter hot pot), camel and sea lion turn up when in stock, camel announced on the shop's Instagram. Liver and the rarer cuts go fast, so come at opening; there can be a line. The weekend curry wins praise from the few who order it. Portions are small and prices exclude tax. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 23 August 2022 (Tabelog)', background: 'Standing bar for horumon and game; Tabelog tachinomi 100, 2025 (Tabelog).', philosophy: null, specialty: 'Horumon of Matsusaka and Miyazaki beef; game meats.',
      anecdotes: [
        { text: '"The meat was more tender than I had imagined, with no strong odor or gamey taste, juicy and light… quite similar to the lean meat of Wagyu." — October 2026, kangaroo tenderloin ¥720.', source: R + 'B537693997/' },
        { text: '"Today, I tried badger, kangaroo, and wild boar, and the badger was amazing! However, it seems that grilling it has a strong smell, so it was prepared in a hot pot instead." — September 2026.', source: R + 'B536450184/' },
      ],
      japanese_sources_summary: '食べログ: ホルモン・ジビエ 明星、大阪市中央区千日前1-2-9 ST千日前ビル 1F、日本橋から116m、月・水・木・金 17:00〜23:00(L.O. 22:00)、土日 15:00〜23:00、火休み、営業はInstagramで確認、予約不可、カード・電子マネー・QR不可、立ち飲み16名、2022年8月23日開店、食べログ 立ち飲み 百名店 2025。口コミ(2023年9月〜2026年10月): カンガルーと春菊のナムル、カンガルーは臭みがない、生食できる馬レバー、炙ったロースのユッケに卵、早い時間ほどレバーの種類が多い、焼きレバー、牛タン刺し、ツラミ刺し、鹿のもも、猪、松阪牛レバー、瓶ビール、炭酸を自分で注ぐ酎ハイ、空き瓶は自分で回収箱へ、量は少なめ、週末のカレー、ラクダ(テンダーロイン)はInstagramで入荷を告知、開店直後に行列、トドの刺身は生姜で、穴熊は冬の鍋、子袋、満席が多く売り切れも、雨の日は空く、小腸、レモンだれ、ハツの照り焼き、雉のもも肉、塩と柚子胡椒、西成ホルモン、赤星、ねぎたっぷりの牛タン、にんにく小腸、つかみ、宮崎牛と松阪牛のホルモン、玉製家の約100m北、ビニールの入口、U字カウンター、80〜90年代の歌謡曲の映像、芋焼酎の水割り500円、ホルモン煮込み480円、松阪牛にんにく小腸580円、宮崎牛ロースユッケ980円、カンガルーテンダーロイン720円、価格は税抜き表示がなかったという声、プラスチックのカップ。',
      confidence: 'medium', sources: [TB, R + 'B471036164/', R + 'B498899094/', R + 'B527251741/', R + 'B530046651/', R + 'B536450184/', R + 'B537693997/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Standing counter; self-serve highballs and bottle returns (2023–2026 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-2-9 ST千日前ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目2番9号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537693997/', R + 'B498899094/'],
    price_note: 'Prices from an October 2026 review, before tax.', last_checked: TODAY, items: [
      it('', '', 'Horumon stew', '¥480', 'Horumon', 'no', 'no', 'October 2026; before tax.', 'nikomi'),
      it('', '', 'Matsusaka beef garlic small intestine', '¥580', 'Horumon', 'no', 'no', 'October 2026; before tax.', 'shocho'),
      it('', '', 'Miyazaki beef loin yukhoe', '¥980', 'Beef', 'no', 'no', 'October 2026; before tax.', 'yukhoe'),
      it('', '', 'Kangaroo tenderloin', '¥720', 'Game', 'no', 'no', 'October 2026; before tax.', 'kangaroo'),
      it('', '', 'Venison', '', 'Game', 'no', 'no', 'September 2026.', 'venison'),
      it('', '', 'Wild boar', '', 'Game', 'no', 'no', 'September 2026.', 'boar'),
      it('', '', 'Badger hot pot (winter)', '', 'Game', 'no', 'no', 'September 2026.', 'badger'),
      it('', '', 'Heart teriyaki', '', 'Horumon', 'no', 'no', 'September 2026.', 'hatsu'),
      it('', '', 'Shungiku namul', '', 'Sides', 'ask', 'ask', 'October 2026.', 'namul'),
      it('', '', 'Curry (weekends, limited)', '', 'Rice', 'no', 'no', 'October 2026.', 'curry'),
      it('', '', 'Imo shochu with water', '¥500', 'Drinks', 'ask', 'ask', 'October 2026; before tax.', 'shochu'),
    ] }, {
    cuisine: 'ホルモンとジビエの立ち飲み・ホルモン煮込み480円・松阪牛にんにく小腸580円・炙った宮崎牛ロースのユッケに卵黄980円・塩で食べるカンガルーテンダーロインのステーキ720円・鹿、猪、雉のもも、穴熊(冬は鍋)、入荷時はラクダやトドも・生食できる馬レバー、牛タン刺し、ツラミ刺し・レバーは早い時間ほど種類が多い・ハツの照り焼き・西成の油ホルモン・春菊のナムル・週末のカレー・瓶ビール(赤星)、焼酎、瓶の炭酸で自分で作るハイボール・U字カウンターの立ち飲み16名',
    neighborhood: '中央区千日前1-2-9 ST千日前ビル 1F、千日前通りから少し入った玉製家の約100m北。日本橋駅から116m',
    gf_detail: 'グルテンフリーではありません。醤油ベースのたれと下味、照り焼き、カレー。',
    vegan_detail: 'ヴィーガンではありません。ホルモンとジビエが中心、報告のある野菜の一品は春菊のナムル。',
    notes: '[立ち飲み・日本橋近く、ホルモンとカンガルーから穴熊までのジビエ] 千日前通りから少し入った、ビニールの入口のレトロな立ち飲みで、食べログ 立ち飲み 百名店 2025に選出。大きな画面に80〜90年代の歌謡曲が流れ、ハイボールは瓶の炭酸で自分で作る。目当ては新鮮なホルモンとジビエ: 松阪牛のにんにく小腸(580円)、卵黄をのせた炙りの宮崎牛ユッケ(980円)、柔らかくジューシーで臭みがないと評されるカンガルーテンダーロインのステーキ(720円)。鹿と猪は定番、雉、穴熊(冬は鍋)、ラクダ、トドは入荷次第で、ラクダは店のInstagramで告知。レバーや珍しい部位は早くなくなるので開店直後に、行列ができることも。週末のカレーは頼む人は少ないが評判がいい。量は少なめで価格は税抜き。現金のみ。',
  });
}

// ================================================================ 真夜中キッチン うさぎ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27013814/'; const R = TB + 'dtlrvwlst/';
  const N = day(['00:00', '08:00']);
  put({
    id: 'osaka_mayonaka_kitchen_usagi', name: '真夜中キッチン うさぎ (Mayonaka Kitchen Usagi)', category: 'OMNI',
    lat: 34.672126, lng: 135.502425, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: macaroni salad; ketchup and sauces; izakaya snacks.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg omurice, sausages, pork kimchi, mackerel and octopus.',
    hours_raw: 'Tue–Sun 00:00–08:00; closed Mon; hours may change (Tabelog). A 2024 review gave 23:00–08:00. One drink per person required (2024, May 2026). Blackboard menu. Cash only: no cards, e-money or QR (Tabelog; May 2026).',
    hours: { 1: N, 2: N, 3: N, 4: N, 5: N, 6: N }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-16-19, Nippo Suomachi Kaikan 1F, no big sign, curtained sliding door — 389 m from Shinsaibashi Stn',
    cuisine: 'After-midnight counter diner and izakaya · omurice ¥780 (May 2026): ketchup rice under rich egg with a tangy, thick ketchup · macaroni salad with a hint of curry ¥300 (2024) · potato salad · octopus-shaped red sausages · pork kimchi · "stamina" · marinated mackerel, octopus sashimi · soup · lemon chuhai, sweet potato highball · one drink minimum · 10 seats at a U-shaped counter',
    website: null, gmaps: gm('真夜中キッチン うさぎ 東心斎橋'), menu_url: null,
    notes: "[Late-night diner · omurice and izakaya snacks from midnight to 8 am in Higashi-Shinsaibashi] A ten-seat U-shaped counter with no big sign, behind a curtain and sliding door in Higashi-Shinsaibashi, that keeps reverse hours: midnight to 8 am, Tuesday to Sunday. The owner calls it a casual izakaya, so order a drink, but the dish to get is the omurice (¥780), the most popular to one diner: fragrant ketchup rice under rich egg with a tangy, thick ketchup. The macaroni salad with a hint of curry, octopus-shaped red sausages and pork kimchi go with a lemon chuhai; there's also marinated mackerel and octopus sashimi. One diner found it packed at 5:30 am; another has come for over 10 years. Spend runs about ¥1,400. Cash only.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Late-night counter diner (Tabelog; 2022–2026 reviews).', philosophy: 'A casual izakaya with a drink order required, in the owner\'s words (May 2026 review).', specialty: 'Omurice.',
      anecdotes: [
        { text: '"The most popular dish, the omurice, had a homey feel with fragrant ketchup rice and the rich taste of the eggs, paired with a tangy and thick ketchup—absolutely delightful!" — August 2024, omurice ¥700.', source: R + 'B490342101/' },
        { text: '"It\'s now 3 AM, so I placed my order! … According to the owner, it\'s a casual izakaya, and a drink order is mandatory. The classic Omurice is just JPY 780!" — May 2026.', source: R + 'B528983054/' },
      ],
      japanese_sources_summary: '食べログ: 真夜中キッチン うさぎ、大阪市中央区東心斎橋1-16-19 日宝周防町会館 1F、心斎橋から389m、火〜日 0:00〜8:00、月休み、予約可、カード・電子マネー・QR不可、カウンター10席。口コミ(2022年4月〜2026年5月): 早朝まで営業、オムライス、マカロニサラダ、U字カウンター、メニューが豊富、ポテトサラダ、赤ウインナー、豚キムチ、芋のハイボール、23時〜8時という声(2024年)、大きな看板がない、のれんと引き戸、スポットライト、ワンドリンク制、レモンチューハイ560円、オムライス700円、マカロニサラダ300円(カレー風味)、朝5時半に満席、タコさんウインナー、スープ、10年以上通う人も、スタミナ、店主の人柄、しめ鯖、たこ刺し、深夜0時〜朝8時、黒板メニュー、オムライス780円、店主いわく気軽な居酒屋でドリンク注文は必須、現金のみ、客単価約1,400円。',
      confidence: 'medium', sources: [TB, R + 'B448738872/', R + 'B490342101/', R + 'B495201164/', R + 'B505840554/', R + 'B506306045/', R + 'B528983054/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Blackboard menu; one-drink minimum (May 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-16-19 日宝周防町会館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; newest review May 2026.' },
    pin_source: `Tabelog ${TB} (34.672179, 135.502699, 31 m from GSI); placed at GSI 大阪府大阪市中央区東心斎橋一丁目16番19号 (go) building, ~7 m from Buta ya Aoi (same building) so the two do not stack; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B490342101/', R + 'B528983054/'],
    price_note: 'Prices from 2024 and May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omurice', '¥780', 'Food', 'no', 'no', 'May 2026.', 'omurice'),
      it('', '', 'Macaroni salad', '¥300', 'Food', 'no', 'no', 'August 2024.', 'macaroni'),
      it('', '', 'Octopus-shaped red sausages', '', 'Food', 'no', 'no', 'October 2024.', 'sausage'),
      it('', '', 'Pork kimchi', '', 'Food', 'no', 'no', 'April 2022.', 'butakimu'),
      it('', '', 'Marinated mackerel', '', 'Food', 'no', 'no', 'May 2025.', 'shimesaba'),
      it('', '', 'Lemon chuhai', '¥560', 'Drinks', 'ask', 'ask', 'August 2024.', 'lemon_chuhai'),
    ] }, {
    cuisine: '深夜0時からのカウンターの食堂兼居酒屋・オムライス780円(2026年5月): ケチャップライスに濃厚な卵、酸味のある濃いケチャップ・カレー風味のマカロニサラダ300円(2024年)・ポテトサラダ・タコさんウインナー・豚キムチ・スタミナ・しめ鯖、たこ刺し・スープ・レモンチューハイ、芋のハイボール・ワンドリンク制・U字カウンター10席',
    neighborhood: '中央区東心斎橋1-16-19 日宝周防町会館 1F、大きな看板はなく、のれんと引き戸。心斎橋駅から389m',
    gf_detail: 'グルテンフリーではありません。マカロニサラダ、ケチャップやソース、居酒屋のつまみ。',
    vegan_detail: 'ヴィーガンではありません。卵のオムライス、ウインナー、豚キムチ、しめ鯖、たこ。',
    notes: '[深夜食堂・東心斎橋、深夜0時から朝8時のオムライスとつまみ] 東心斎橋、大きな看板もなく、のれんと引き戸の奥にあるU字カウンター10席の店で、営業は逆転の深夜0時から朝8時、火〜日。店主いわく気軽な居酒屋なのでドリンクは注文を、ただ頼むべきはある客いわく一番人気のオムライス(780円): 香ばしいケチャップライスに濃厚な卵、酸味のある濃いケチャップ。カレー風味のマカロニサラダ、タコさんウインナー、豚キムチはレモンチューハイと。しめ鯖やたこ刺しも。朝5時半に満席だったという声、10年以上通う人も。客単価は約1,400円。現金のみ。',
  });
}

save();
