// Osaka sweep (2-mile circle around Dotonbori), batch 92 — mom-and-pop phase (all OMNI).
//   + 旬菜・賀雅 (one-person obanzai, sashimi and tempura counter; Nishi-Shinsaibashi) — mom_and_pop
//   + YAKITORI KIBITAKI 別邸 (dim bar-like yakitori counter with chicken sashimi; Shinsaibashi-suji)
//   + 屋台風かすうどんかすまる 東心斎橋店 (late-night kasu udon and oden until 09:00)
//   + トレボン (long-running Amemura teppan bar: chicken heart, negi modan, yakisoba)
//   + 相合餅 (night-only mochi shop since 1961: grilled yomogi mochi, ohagi; Sennichimae)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-27';
const { put, save } = openCitySweep('osaka', TODAY, 92);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 旬菜・賀雅
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27122388/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://koryori-syunsai-kaga.com/';
  const D = day(['11:00', '14:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_shunsai_kaga_nishishinsaibashi', name: '旬菜・賀雅 (Shunsai Kaga)', category: 'OMNI',
    lat: 34.66924, lng: 135.498925, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tempura, simmered dishes in soy-based broth.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fish, chicken and dashi-based obanzai.',
    hours_raw: 'Mon–Wed and Fri–Sun 11:00–14:00 (L.O. 13:30) and 17:00–23:00 (L.O. 22:30); closed Thursdays (Tabelog, staff-maintained). Reservations taken (April 2026). Cards accepted; no e-money or QR (Tabelog). Children welcome.',
    hours: { 0: D, 1: D, 2: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-6-11, Nippo Crown Bldg 4F, west of Midosuji by Dotonbori — 3 min from Namba Stn exit 25',
    cuisine: 'Seasonal Japanese small plates (koryori) · assorted obanzai, six kinds with a drink set · sashimi platter, or choose three from the day\'s list · tempura: young corn fried in its husk, sweet potato · bamboo shoot simmered in dashi · Spanish-mackerel roe · braised chicken wings · sweet simmered herring · sanma and shirako in season · shochu and sake · 8-seat sunken kotatsu counter plus a table',
    website: OWN, gmaps: gm('旬菜 賀雅 西心斎橋'), menu_url: null,
    notes: "[Japanese · a one-person obanzai counter tucked above Dotonbori] A hideaway on the fourth floor of a building just west of Midosuji, run single-handedly by a chatty, warm owner. There are eight seats at a sunken kotatsu-style counter facing the kitchen and one table, so it suits solo diners and couples. The cooking is homey seasonal Japanese: an assortment of six obanzai with a drink, sashimi you can build from three of the day's fish, light, crisp tempura (young corn in its husk, sweet potato that tastes stone-baked), braised chicken wings, sweet simmered herring and bamboo shoots in dashi. One regular comes two or three times a month, and the owner will adjust dishes to requests. One diner found the prices very reasonable. Lunch and dinner; closed Thursdays.",
    chef_bio: { chef_name: null, roles: ['owner-chef'], origin: null, background: 'Japanese small-plates counter run by one person (2026 reviews; official site koryori-syunsai-kaga.com).', philosophy: null, specialty: 'Obanzai; sashimi; tempura.',
      anecdotes: [
        { text: '"The bamboo shoot simmered in broth was delicious… The braised chicken wings were tender and well-seasoned. The tempura was also delicious, especially the sweet potato, which tasted like stone-baked sweet potatoes." — April 2026.', source: R + 'B526470782/' },
        { text: '"The young corn was fried with its husk, providing a delightful texture and a taste of the natural sweetness of the ingredient. The batter was light and crispy." — May 2026.', source: R + 'B529356958/' },
      ],
      japanese_sources_summary: '公式 koryori-syunsai-kaga.com。食べログ(店舗会員): 旬菜・賀雅、大阪市中央区西心斎橋2-6-11 日宝クラウンビル 4F、大阪難波駅25番出口から徒歩3分、月火水金土日11:00〜14:00(L.O.13:30)・17:00〜23:00(L.O.22:30)、木曜定休、カード可、電子マネー・QR不可、10席、子ども可。口コミ(2025年4月〜2026年10月): 仕事帰りに通う、刺身は3種を選んで盛り合わせ、日替わり、カウンターと奥に4人ほどのテーブル、秋冬はさんまや白子、月に2〜3回通う、予約して2人で、ひとりで切り盛り、気さくな会話、筍の炊いたん、鰆の子、手羽の煮物、さつまいもの天ぷら、にしんの甘露煮、2軒目に、ヤングコーンの皮付き天ぷら、軽い衣、ひとりでも入りやすい、御堂筋の西のビル4階、料理は上品で値段は手頃、要望に合わせてくれる、親切な店主、おばんざい6種と飲み物のセット、刺身盛り合わせ、掘りごたつ式のカウンター8席、話し上手な店主。',
      confidence: 'medium', sources: [TB, OWN, R + 'B526470782/', R + 'B529356958/', R + 'B497905606/', R + 'B530031973/', R + 'B534258602/', R + 'B536743631/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter conversation with the owner; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-6-11 日宝クラウンビル 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目6番11号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526470782/', R + 'B529356958/', R + 'B536743631/'],
    price_note: 'No prices found; dinner spend about ¥4,000–6,000.', last_checked: TODAY, items: [
      it('', '', 'Assorted obanzai (six) with a drink', '', 'Obanzai', 'no', 'no', 'October 2026.', 'obanzai'),
      it('', '', 'Sashimi platter (choose three)', '', 'Fish', 'no', 'no', 'September 2026.', 'sashimi'),
      it('', '', 'Tempura', '', 'Fried', 'no', 'no', 'April–May 2026.', 'tempura'),
      it('', '', 'Braised chicken wings', '', 'Simmered', 'no', 'no', 'April 2026.', 'teba'),
    ] }, {
    cuisine: '旬の小料理・おばんざい6種盛りと飲み物のセット・刺身盛り合わせ、その日の魚から3種選んでも・天ぷら: 皮付きのヤングコーン、さつまいも・筍の炊いたん・鰆の子・手羽の煮物・にしんの甘露煮・季節にはさんまや白子・焼酎と日本酒・掘りごたつ式のカウンター8席とテーブル',
    neighborhood: '中央区西心斎橋2-6-11 日宝クラウンビル4F、道頓堀の御堂筋の西側。なんば駅25番出口から徒歩3分',
    gf_detail: '実際にはグルテンフリーではありません。天ぷら、醤油ベースの煮物。',
    vegan_detail: 'ヴィーガンではありません。魚、鶏肉、だしを使うおばんざい。',
    notes: '[和食・道頓堀の上の隠れ家、ひとりで営むおばんざいのカウンター] 御堂筋のすぐ西のビル4階にある隠れ家で、気さくで話し上手な店主がひとりで切り盛りする。厨房に向かう掘りごたつ式のカウンター8席とテーブル1卓で、ひとりでもふたりでも。料理は家庭的な旬の和食で、おばんざい6種と飲み物のセット、その日の魚から3種選べる刺身、軽くサクサクの天ぷら(皮付きのヤングコーン、石焼き芋のようなさつまいも)、手羽の煮物、にしんの甘露煮、筍の炊いたん。月に2〜3回通う常連もいて、要望に合わせて料理を変えてくれる。値段がとても手頃という声も。昼も夜も、木曜定休。',
  });
}

// ================================================================ YAKITORI KIBITAKI 別邸
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27139632/'; const R = TB + 'dtlrvwlst/'; const OWN = 'https://www.yakitori-kibitaki.com/bettei/';
  put({
    id: 'osaka_yakitori_kibitaki_bettei_shinsaibashi', name: 'YAKITORI KIBITAKI 別邸 (Yakitori Kibitaki Bettei)', category: 'OMNI',
    lat: 34.671235, lng: 135.502086, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: tare-grilled skewers use soy-based sauce; salt skewers not confirmed wheat-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken throughout.',
    hours_raw: 'Daily from 18:00 to 23:00; irregular holidays (Tabelog, staff-maintained). Reservations on the official site or by phone; seatings can be timed (August 2026). Seat charge ¥500 (August 2026). Cards, e-money and QR accepted (Tabelog).',
    hours: ALL(day(['18:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashisuji 2-1-10, Sanbo Bldg 2F — 4 min from Shinsaibashi Stn exit 6',
    cuisine: 'Yakitori, salt or tare · omakase seven skewers ¥2,800 or five · large seseri (neck) and negima · chochin, heart, gizzard, tsukune, quail and quail eggs · chicken sashimi platter ¥1,800, liver sashimi, tataki · cartilage with ume suisho · seat charge ¥500 · 11 counter seats, dim and bar-like',
    website: OWN, gmaps: gm('YAKITORI KIBITAKI 別邸 心斎橋'), menu_url: null,
    notes: "[Yakitori · a dim, bar-like yakitori counter on Shinsaibashi-suji] The second room of Yakitori Kibitaki, one floor below the main shop, open since December 2023: 11 counter seats in a dark, stylish space more like a bar than a yakitori joint. Skewers are big, and the signatures seseri (neck) and negima come full size; take the omakase seven (¥2,800) or five, salt or tare, and look for chochin, heart and quail. Chicken here is served very fresh, with a sashimi platter (¥1,800), liver sashimi and tataki. There's a ¥500 seat charge, and dinner can be a timed seating when the next booking follows. Many guests are from overseas. Book on the official site; when the main shop is full, guests are sent here.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 12 December 2023 (Tabelog)', background: 'Second room of Yakitori Kibitaki, upstairs main shop in the same building (2025–2026 reviews; official site).', philosophy: null, specialty: 'Full-size seseri and negima; chicken sashimi.',
      anecdotes: [
        { text: '"The grilled items were surprisingly large… specialties like seseri (neck meat) and negima (chicken and green onion skewers)… in their full size." — March 2026.', source: R + 'B524959673/' },
        { text: '"I ordered the 7-piece omakase and also tried some intriguing items like liver sashimi and tataki… The chouchin (chicken tail) that I love was there, along with quail skewers." — September 2026.', source: R + 'B536534314/' },
      ],
      japanese_sources_summary: '公式 yakitori-kibitaki.com/bettei/。食べログ(店舗会員): YAKITORI KIBITAKI 別邸、大阪市中央区心斎橋筋2-1-10 サンボアビル 2F、心斎橋駅6番出口から徒歩4分、毎日18:00〜23:00、不定休、公式サイトで予約、カード・電子マネー・QR可、11席、2023年12月12日開店。口コミ(2025年10月〜2026年9月): レバ刺し、せせり(タレ)、ハツ(タレ)、砂肝、うずらの卵は半熟、本店が満席で別邸へ、刺身は5種、焼き物が大きい、せせりとねぎまをフルサイズで、盛り付けがきれい、18時に電話予約で次の予約まで1時間20分、カウンター11席、席料500円、鶏刺し盛り合わせ1,800円、おまかせ7本2,800円、海外の客、軟骨の梅水晶、つくね、本店は3階・別邸は2階、バーのような薄暗いおしゃれな店内、おまかせ7本、レバ刺し、たたき、新鮮、ちょうちん、うずら、串は大きめ、塩少なめも頼める。',
      confidence: 'medium', sources: [TB, OWN, R + 'B524959673/', R + 'B536534314/', R + 'B521008574/', R + 'B534086169/', R + 'B534215380/', R + 'B534820078/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests (August 2026); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-1-10 サンボアビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目1番10号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534086169/', R + 'B536534314/', R + 'B521008574/'],
    price_note: 'Prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Omakase seven skewers', '¥2,800', 'Yakitori', 'no', 'no', 'Five also offered; August–September 2026.', 'omakase7'),
      it('', '', 'Chicken sashimi platter', '¥1,800', 'Sashimi', 'no', 'no', 'August 2026.', 'torisashi'),
      it('', '', 'Liver sashimi', '', 'Sashimi', 'no', 'no', 'February, September 2026.', 'rebasashi'),
      it('', '', 'Seseri (neck) skewer', '', 'Yakitori', 'no', 'no', 'Salt or tare; 2026.', 'seseri'),
      it('', '', 'Seat charge', '¥500', 'Charges', 'no', 'no', 'August 2026.', 'seat'),
    ] }, {
    cuisine: '焼鳥、塩かタレ・おまかせ7本2,800円か5本・フルサイズのせせりとねぎま・ちょうちん、ハツ、砂肝、つくね、うずらとうずらの卵・鶏刺し盛り合わせ1,800円、レバ刺し、たたき・軟骨の梅水晶・席料500円・カウンター11席、薄暗くバーのよう',
    neighborhood: '中央区心斎橋筋2-1-10 サンボアビル2F。心斎橋駅6番出口から徒歩4分',
    gf_detail: '実際にはグルテンフリーではありません。タレ焼きは醤油ベースのたれ、塩焼きも小麦不使用は未確認。',
    vegan_detail: 'ヴィーガンではありません。鶏肉が中心。',
    notes: '[焼鳥・心斎橋筋、バーのような薄暗い焼鳥カウンター] 焼鳥 KIBITAKI の本店の一つ下の階にある別邸で、2023年12月開店、カウンター11席の暗くおしゃれな空間は焼鳥屋というよりバー。串は大きく、看板のせせりとねぎまはフルサイズ。おまかせ7本(2,800円)か5本を塩かタレで、ちょうちん、ハツ、うずらも。鶏はとても新鮮で、鶏刺し盛り合わせ(1,800円)、レバ刺し、たたきも。席料500円、次の予約があると時間制になることも。海外の客が多い。公式サイトで予約を。本店が満席だとこちらに案内される。',
  });
}

// ================================================================ 屋台風かすうどんかすまる 東心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27105746/'; const R = TB + 'dtlrvwlst/';
  const LONG = day(['18:00', '09:00']), MID = day(['20:00', '07:30']);
  put({
    id: 'osaka_kasumaru_kasu_udon_higashishinsaibashi', name: '屋台風かすうどんかすまる 東心斎橋店 (Kasu Udon Kasumaru Higashi-Shinsaibashi)', category: 'OMNI',
    lat: 34.671074, lng: 135.502701, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon; soy-based broth; kara-age.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: kasu (fried beef offal), meat, dashi broth, oden.',
    hours_raw: 'Mon, Tue, Fri–Sun, holidays and the days around them 18:00–09:00 next morning (L.O. 08:30); Wed–Thu 20:00–07:30 (L.O. 06:50); the shop also gives 19:00–09:00 for Fri–Tue; irregular holidays; call to check (Tabelog, staff-maintained). Cards, iD/QUICPay and QR accepted (Tabelog). Uber Eats.',
    hours: { 0: LONG, 1: LONG, 2: MID, 3: MID, 4: LONG, 5: LONG, 6: LONG }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-7-27 — 7 min from Shinsaibashi Stn',
    cuisine: 'Yatai-style kasu udon all night · kasu udon with crisp fried beef-offal kasu, large size · meat kasu udon · kasu curry udon with egg ¥1,250 · chewy, not-too-thick udon in a gently sweet dashi · oden: egg, daikon · kara-age · drinks',
    website: null, gmaps: gm('かすまる 東心斎橋店'), menu_url: null,
    notes: "[Udon · all-night kasu udon, the Minami way to end a night out] A yatai-style udon shop in Higashi-Shinsaibashi, open since 2018, that runs from evening to the next morning, until 09:00 most days. The thing to order is kasu udon: chewy, medium-weight udon in a gently sweet, savory dashi topped with kasu, the crisp-fried beef offal that turns rich and juicy in the broth. Add meat, or go for the kasu curry udon with a raw egg (¥1,250) to mellow it. The oden (egg, daikon) is well soaked and tempts you into another drink; one diner found the kara-age soggy. One diner came to close a company party. Cards and QR accepted; Uber Eats too.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 2 July 2018 (Tabelog)', background: 'Kasu udon shop (Tabelog, staff-maintained).', philosophy: null, specialty: 'Kasu udon.',
      anecdotes: [
        { text: '"I love the texture of the kasu here; it\'s so rich and juicy. The udon has a great chewiness and the broth is delicious. The oden is infused with flavor." — December 2024, kasu udon (large) and oden.', source: R + 'B497722458/' },
        { text: '"I ordered the meat kasu udon, so I got to enjoy both the meat and the kasu… The broth was reliably sweet, and I finished every drop!" — September 2026.', source: R + 'B535395142/' },
      ],
      japanese_sources_summary: '食べログ(店舗会員): 屋台風かすうどんかすまる 東心斎橋店、大阪市中央区東心斎橋2-7-27、心斎橋駅から徒歩7分、月火金土日祝・祝前日・祝後日18:00〜翌9:00(L.O.8:30)、水木20:00〜翌7:30(L.O.6:50)、金〜火は19:00〜翌9:00との記載も、不定休、電話で確認、Uber Eats、カード・iD・QUICPay・QR可、2018年7月2日開店。口コミ(2024年12月〜2026年10月): 飲んだあとの締め、おでんは味が染みている、唐揚げがしなっとしていたという声、柔らかいうどん、近くの別のかすうどん店よりこちら、もちもちで太すぎない麺、だしがおいしい、かすうどん大とおでん(卵、大根)、かすの食感がジューシー、やさしい味、もち米のようなもちもち感、肉かすうどん、甘めのだし、かすカレーうどんと卵1,250円、会社の飲み会の締め。',
      confidence: 'medium', sources: [TB, R + 'B497722458/', R + 'B535395142/', R + 'B486768858/', R + 'B515579797/', R + 'B536149333/', R + 'B537703902/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Late-night yatai-style counter; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-7-27',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current (staff-maintained); reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目7番27号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536149333/', R + 'B497722458/', R + 'B535395142/'],
    price_note: 'One price from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Kasu udon', '', 'Udon', 'no', 'no', 'Large size available; 2024–2026.', 'kasu_udon'),
      it('', '', 'Meat kasu udon', '', 'Udon', 'no', 'no', 'September 2026.', 'niku_kasu'),
      it('', '', 'Kasu curry udon with egg', '¥1,250', 'Udon', 'no', 'no', 'September 2026.', 'kasu_curry'),
      it('', '', 'Oden (egg, daikon)', '', 'Oden', 'no', 'no', 'December 2024.', 'oden'),
    ] }, {
    cuisine: '夜通し営業の屋台風かすうどん・カリッと揚げた牛ホルモンのかすのかすうどん、大盛りも・肉かすうどん・卵入りかすカレーうどん1,250円・太すぎないもちもちのうどんにやさしく甘いだし・おでん: 卵、大根・唐揚げ・お酒',
    neighborhood: '中央区東心斎橋2-7-27。心斎橋駅から徒歩7分',
    gf_detail: 'グルテンフリーではありません。小麦のうどん、醤油ベースのだし、唐揚げ。',
    vegan_detail: 'ヴィーガンではありません。かす(揚げた牛ホルモン)、肉、だし、おでん。',
    notes: '[うどん・ミナミの夜の締め、夜通し営業のかすうどん] 東心斎橋にある屋台風のうどん店で、2018年開店、夕方から翌朝まで、たいてい朝9時まで営業。頼むべきはかすうどんで、もちもちのほどよい太さのうどんにやさしく甘い旨味のだし、カリッと揚げた牛ホルモンのかすがスープでジューシーに。肉を足すか、卵入りのかすカレーうどん(1,250円)でまろやかに。おでん(卵、大根)はよく染みてもう一杯飲みたくなる。唐揚げはしなっとしていたという声も。会社の飲み会の締めに来たという声も。カード・QR可、Uber Eatsも。',
  });
}

// ================================================================ トレボン
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27045320/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_trebon_amemura', name: 'トレボン (Trebon)', category: 'OMNI',
    lat: 34.670572, lng: 135.499268, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat okonomiyaki batter and yakisoba; sauce on a shared teppan.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork, chicken, squid, egg and offal on a shared teppan.',
    hours_raw: 'Daily 17:00–23:00 per Tabelog; one regular says 17:00–22:00 with irregular days; call to check (September 2026). Cash only: no cards, e-money or QR (Tabelog). Reservations generally not taken; phone first. Smoking allowed.',
    hours: ALL(day(['17:00', '23:00'])), hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Nishi-Shinsaibashi 2-9-5, 1F, in Amerikamura — about 8 min from Shinsaibashi Stn',
    cuisine: 'Long-running Amemura teppan counter · chicken heart ¥500, the specialty · negi modan-yaki ¥1,400 · pork tamagoyaki ¥1,000 · yakisoba ¥1,000 with aonori and pickled ginger · tonpei-yaki · grilled lettuce, Moroccan green beans · teppan konnyaku with ponzu and green onion · grilled squid legs · salted chicken cartilage and skin · tofu, nagaimo · okonomiyaki · highballs · 10 counter seats',
    website: null, gmaps: gm('トレボン 西心斎橋 鉄板'), menu_url: null,
    notes: "[Okonomiyaki · a long-running Amemura teppan bar loved by regulars] A ten-seat counter around the teppan in Amerikamura, busy with locals from opening and hard to get into: one diner made it in on two of five tries. Start with the chicken heart (¥500), the house specialty, juicy with a 'magic' seasoning, then work through the vegetable list that regulars swear by: grilled lettuce, crisp Moroccan green beans, teppan konnyaku with ponzu. The tonpei-yaki, pork tamagoyaki and negi modan-yaki (¥1,400) are the heartier choices, and the yakisoba comes the classic way with aonori and pickled ginger. The cook is friendly. Sauce smoke clings to clothes, so dress casually. Cash only; generally no reservations, so call first.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Long-established teppan and okonomiyaki counter in Amerikamura (2026 reviews).', philosophy: null, specialty: 'Chicken heart; teppan vegetables; okonomiyaki.',
      anecdotes: [
        { text: '"The first must-try dish at Trebon is the Chicken Heart (Hatsu). It\'s incredibly juicy, and the seasoning is just perfect!… The second dish you absolutely have to try is the Moroccan Green Beans." — September 2026.', source: R + 'B535266948/' },
        { text: '"The yakisoba is served in the classic style, topped generously with aonori (seaweed) and beni shoga (pickled ginger). The grilled meat, piled high with green onions, was seasoned perfectly." — June 2026.', source: R + 'B531081175/' },
      ],
      japanese_sources_summary: '食べログ: トレボン、大阪市中央区西心斎橋2-9-5 日宝三津寺ビル1F、毎日17:00〜23:00、カード・電子マネー・QR不可、10席、喫煙可、カウンター。口コミ(2026年1〜9月): アメ村のお気に入り、ハツ、軟骨、焼きレタス、とんぺい焼き、ゲソ焼き、豆腐、漬物、電話で2席予約して2軒目に、気さくな店主、目の前の鉄板、ハツ500円、ねぎモダン1,400円、豚玉子焼き1,000円、焼きそば1,000円、予約不可で5回中2回しか入れない、店員のおすすめはハツ、老舗の鉄板焼き、カウンターのみ、平日18時でもにぎわう、地元の人に人気、青のりと紅しょうがの焼きそば、ねぎたっぷりの焼き肉、ソースの匂いが服につく、10年ぶり、予約不可・現金のみ・不定休、電話で確認、魔法の味付け、モロッコいんげん、こんにゃくのポン酢、焼きレタスは味濃いめ、軟骨と皮は塩、キャベツのとんぺい焼き、裏メニューのかすとキャベツ炒め、豆腐、長芋、お好み焼き、17時〜22時。',
      confidence: 'medium', sources: [TB, R + 'B535266948/', R + 'B531081175/', R + 'B481294303/', R + 'B521107809/', R + 'B523990482/', R + 'B523997341/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter of regulars; no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-9-5 日宝三津寺ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目9番5号 (go) 10m; same building as Ohara; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B523990482/', R + 'B535266948/', R + 'B531081175/'],
    price_note: 'Prices from a February 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken heart', '¥500', 'Teppan', 'no', 'no', 'February 2026.', 'hatsu'),
      it('', '', 'Negi modan-yaki', '¥1,400', 'Okonomiyaki', 'no', 'no', 'February 2026.', 'negi_modan'),
      it('', '', 'Pork tamagoyaki', '¥1,000', 'Teppan', 'no', 'no', 'February 2026.', 'buta_tamago'),
      it('', '', 'Yakisoba', '¥1,000', 'Noodles', 'no', 'no', 'February 2026.', 'yakisoba'),
      it('', '', 'Moroccan green beans', '', 'Teppan', 'no', 'ask', 'September 2026.', 'morocco'),
    ] }, {
    cuisine: 'アメ村の老舗の鉄板カウンター・名物のハツ500円・ねぎモダン焼き1,400円・豚玉子焼き1,000円・青のりと紅しょうがの焼きそば1,000円・とんぺい焼き・焼きレタス、モロッコいんげん・ポン酢とねぎの鉄板こんにゃく・ゲソ焼き・塩の軟骨と皮・豆腐、長芋・お好み焼き・ハイボール・カウンター10席',
    neighborhood: '中央区西心斎橋2-9-5 1F、アメ村。心斎橋駅から徒歩8分ほど',
    gf_detail: 'グルテンフリーではありません。小麦のお好み焼きの生地と焼きそば、共用の鉄板でソース。',
    vegan_detail: 'ヴィーガンではありません。豚肉、鶏肉、イカ、卵、ホルモンを共用の鉄板で。',
    notes: '[お好み焼・アメ村、常連に愛される老舗の鉄板バー] アメ村の鉄板を囲むカウンター10席の店で、開店から地元の客でにぎわい、なかなか入れない(5回中2回だけ入れたという声)。まずは名物のハツ(500円)、ジューシーで「魔法の」味付け。次に常連が推す野菜メニュー: 焼きレタス、カリッとしたモロッコいんげん、ポン酢の鉄板こんにゃく。とんぺい焼き、豚玉子焼き、ねぎモダン焼き(1,400円)はしっかり系、焼きそばは青のりと紅しょうがの王道。作り手は気さく。ソースの匂いが服につくのでカジュアルな服で。現金のみ、基本は予約不可なので電話で確認を。',
  });
}

// ================================================================ 相合餅
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27019340/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:30', '01:30']);
  put({
    id: 'osaka_aioi_mochi_sennichimae', name: '相合餅 (Aioi Mochi)', category: 'OMNI',
    lat: 34.66807, lng: 135.504221, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Mochi is made from glutinous rice, but no source lists the ingredients of the mochi, anko or kinako.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Red-bean mochi and ohagi contain no obvious animal products, but no source lists the ingredients.',
    hours_raw: 'Mon–Sat 17:30–01:30; closed Sundays; hours may change (Tabelog). Evenings only. PayPay accepted; cards (JCB, AMEX, Diners) per Tabelog. Takeout from one piece.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Sennichimae 1-7-3, on the Aioibashi street off Dotonbori toward Nipponbashi — near Hozenji',
    cuisine: 'Mochi shop since 1961, night only · grilled mochi ¥200: white or yomogi (mugwort), filled with red-bean paste, eaten hot · warabi mochi ¥350 · ohagi, five for ¥900: kinako, smooth or chunky anko · shiso mochi · vacuum-packed mochi to take home · no additives, so eat soon · 7 seats',
    website: null, gmaps: gm('相合餅 千日前'), menu_url: null,
    notes: "[Japanese sweets · a 1961 night-only mochi shop off Dotonbori] A long-established mochi shop on the Aioibashi street near Hozenji, founded in 1961 and relocated nearby, that opens only in the evening and stays open until 01:30, made for a sweet stop after drinking. Get the grilled mochi (¥200) hot from the grill: white or yomogi, charred, stretchy and filled with red-bean paste, best eaten on the spot (one diner's takeaway stuck to the bag). There's also warabi mochi (¥350), ohagi five for ¥900 in kinako and smooth or chunky anko, and shiso mochi. Mochi is made without additives, so it doesn't keep; vacuum packs are available for souvenirs. The owner is friendly. PayPay accepted; closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Founded 1961 (2025–2026 reviews); relocated from Sennichimae 1-5-14 (Tabelog).', background: 'Traditional mochi shop (Tabelog; 2025–2026 reviews).', philosophy: 'No additives, per one diner (April 2026).', specialty: 'Grilled yomogi mochi.',
      anecdotes: [
        { text: '"It has a wonderful yomogi aroma and is served hot and delicious. I also purchased a set of 5 Ohagi for JPY 900. You can choose your favorite combination from kinako, smooth red bean paste, and chunky red bean paste." — November 2025.', source: R + 'B516249712/' },
        { text: '"With a nice char, this mochi is truly delicious! The chewy texture combined with the aroma of the char and the sweetness of the red bean paste creates a delightful experience!" — July 2026, grilled mochi ¥200.', source: R + 'B531685425/' },
      ],
      japanese_sources_summary: '食べログ: 相合餅、大阪市中央区千日前1-7-3(千日前1-5-14から移転)、日本橋駅から209m、月〜土17:30〜翌1:30、日曜定休、カード(JCB、AMEX、Diners)・QR可、7席。口コミ(2025年10月〜2026年8月): 夜の道頓堀の餅、気さくな店主、17時から、飲んだあとの休憩やお土産に、70年近い歴史という声、無添加なので日持ちしない、真空パックの餅、白餅、しそ餅、よもぎ餅、焼き餅(よもぎ)200円、おはぎ5個900円(きなこ、こしあん、つぶあん)、夜のみ、現金かPayPay、1961年創業、法善寺近くの相合橋筋商店街、深夜1時半まで、インバウンド客、草餅、1個から持ち帰り、懐かしい雰囲気、焼き餅は熱々、わらび餅350円、持ち帰ると袋にくっつく。',
      confidence: 'medium', sources: [TB, R + 'B516249712/', R + 'B531685425/', R + 'B501760166/', R + 'B517982904/', R + 'B524585192/', R + 'B533204246/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Evening shop; many inbound tourists nearby (November 2025); no English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区千日前1-7-3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区千日前一丁目7番3号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516249712/', R + 'B533204246/', R + 'B531685425/'],
    price_note: 'Prices from November 2025–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Grilled mochi (white or yomogi)', '¥200', 'Mochi', 'ask', 'ask', 'August 2026.', 'yakimochi'),
      it('', '', 'Warabi mochi', '¥350', 'Mochi', 'ask', 'ask', 'August 2026.', 'warabi'),
      it('', '', 'Ohagi, five pieces', '¥900', 'Mochi', 'ask', 'ask', 'Kinako, smooth or chunky anko; November 2025.', 'ohagi'),
      it('', '', 'Shiso mochi', '', 'Mochi', 'ask', 'ask', 'April 2026.', 'shiso'),
    ] }, {
    cuisine: '1961年創業、夜だけ開く餅の店・焼き餅200円: 白かよもぎ、あん入りで熱々を・わらび餅350円・おはぎ5個900円: きなこ、こしあん、つぶあん・しそ餅・持ち帰りの真空パック・無添加なので早めに・7席',
    neighborhood: '中央区千日前1-7-3、道頓堀から日本橋方面の相合橋筋。法善寺の近く',
    gf_detail: '要確認。餅はもち米だが、餅、あん、きなこの原材料を示す情報はありません。',
    vegan_detail: '要確認。あんの餅やおはぎに明らかな動物性食材はないが、原材料の情報はありません。',
    notes: '[和菓子・道頓堀そば、1961年創業の夜だけの餅屋] 法善寺近くの相合橋筋にある老舗の餅屋で、1961年創業、近くから移転、夕方から深夜1時半まで夜だけ開き、飲んだあとの甘いものにぴったり。焼き餅(200円)は焼きたての熱々を: 白かよもぎ、香ばしい焦げ目で伸びがよく、あん入り。その場で食べるのがいちばん(持ち帰ったら袋にくっついたという声)。わらび餅(350円)、きなこやこしあん・つぶあんのおはぎ5個900円、しそ餅も。無添加なので日持ちせず、お土産には真空パックを。店主は気さく。PayPay可、日曜定休。',
  });
}

save();
