// Osaka sweep (2-mile circle around Dotonbori), batch 148 — mom / small-shop phase (all OMNI).
//   + トラットリア バール ジョルノ (17-year adult-oriented trattoria with house rules; pasta lunch three days a week; Kitahorie)
//   + AWA SUSHI 泡鮨 (10-seat sushi omakase with champagne pairing in a champagne hotel; Minami-Senba)
//   + ふら～っと。カレー家 (¥980 chicken katsu curry behind JR Namba; Inari)
//   + Niku Teria カルネバッカ (Italian meat bar: meat platters, beef tongue stew, butter rice; Kitahorie)
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-28';
const { put, save } = openCitySweep('osaka', TODAY, 148);
const ALL = d => ({ 0: d, 1: d, 2: d, 3: d, 4: d, 5: d, 6: d });
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ トラットリア バール ジョルノ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27049913/'; const R = TB + 'dtlrvwlst/';
  const DN = day(['17:30', '22:00']); const LD = day(['12:00', '13:30'], ['17:30', '22:00']);
  put({
    id: 'osaka_trattoria_bar_giorno_kitahorie', name: 'トラットリア バール ジョルノ (Trattoria Bar Giorno)', category: 'OMNI',
    lat: 34.673929, lng: 135.494263, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta-centred menu; bread and grissini; gratin.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: salami in the coperto; meat and seafood mains; the oil-sauce vegetable pasta has anchovies.',
    hours_raw: 'Dinner Tue–Sun 17:30–22:00, quietest around 18:00; lunch Wed, Thu and Sun 12:00–13:30 until sold out; closed Mon, sometimes open on holidays (Tabelog). Dinner coperto ¥330 for Italian salami, grissini and nuts, waived for courses (Tabelog). A per-person minimum order at dinner, set out in the house notes (June 2026). Cards and PayPay accepted (Tabelog).',
    hours: { 1: DN, 2: LD, 3: LD, 4: DN, 5: DN, 6: LD }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitahorie 1-16-17, Amenity Kitahorie 1F — 2 min from Nishi-Ohashi Stn; 4 min from Yotsubashi',
    cuisine: 'Trattoria and wine bar · lunch pasta ¥1,300–1,600 with salad, baguette and an Italian omelette, e.g. spaghetti with anchovies, potato and broccoli in oil sauce; tagliatelle in tomato sauce with Mizuho pork belly and Brussels sprouts · dinner à la carte or courses from ¥6,000: fresh fish carpaccio, ajillo, gratin, tripe stew, steamed vegetables, seafood pasta, steak, duck, Sangen pork; Iberico pork when available · wines chosen with the staff, bottles from about ¥4,000 · 20 seats: 12 at the counter',
    website: null, gmaps: gm('トラットリア バール ジョルノ'), menu_url: null,
    notes: "[Italian · an adult-oriented trattoria and wine bar, Kitahorie] A trattoria near Nishi-Ohashi in its 17th year, billed as a calm place for grown-ups, with house rules set out on the tables and the menu. Read them before you go: dinner carries a ¥330 coperto and a per-person minimum order, and the kitchen can be slow on busy nights. In return you get carefully made pasta, a good wine list chosen with the staff, and dishes like fresh fish carpaccio, tripe stew, duck, Sangen pork and a steak of satisfyingly red meat. Lunch is the easy way in: pasta with salad, bread and an Italian omelette for ¥1,300–1,600, three days a week. Closed Mondays.",
    chef_bio: { chef_name: null, roles: [], origin: 'Open about 17 years (September 2026 review).', background: 'Trattoria and wine bar (Tabelog; 2026 reviews).', philosophy: 'Aimed at calm adults; house notes set out manners and ordering rules (2026 reviews).', specialty: 'Pasta; wine.',
      anecdotes: [
        { text: '"The pasta was delicious, showcasing a great attention to the quality of the noodles." — March 2026.', source: R + 'B527662200/' },
        { text: '"We started with the fresh fish carpaccio, followed by gratin and tripe, and for the main course, we had duck and pork from the Sangen breed, both of which were incredibly tasty." — September 2026.', source: R + 'B536398104/' },
      ],
      japanese_sources_summary: '食べログ: トラットリア バール ジョルノ、大阪市西区北堀江1-16-17 アメニティ北堀江 1F、西大橋駅から約2分、四ツ橋駅から約4分、夜 火〜日 17:30〜22:00 (18時ごろが空いている)、昼 水・木・日 12:00〜13:30 (売り切れ次第終了)、月曜休み (祝日などは営業することも)、夜はコペルト330円 (イタリアのサラミ、グリッシーニ、ナッツ。コースは除く)、カード・PayPay 可、20席 (カウンター12、テーブル8)。口コミ(2026年3〜9月): 開店から約17年、落ち着いた大人向けのトラットリア、テーブルやメニューに細かい注意書き、夜はひとりあたりの最低注文額あり、混むと料理が遅い、ていねいなパスタ、スタッフと選ぶワイン (ボトル約4,000円から)、鮮魚のカルパッチョ、アヒージョ、グラタン、Motsu Nikomi、蒸し野菜、魚介のパスタ、ステーキ、鴨、Sangen の豚、Iberico の豚 (ない日も)、コース6,000円から、昼はサラダ・バゲット・イタリアのオムレツつきのパスタ1,300〜1,600円 (アンチョビとじゃがいもとブロッコリーのオイルソース、Mizuho の豚バラと芽キャベツのトマトソースのタリアテッレ)。',
      confidence: 'medium', sources: [TB, R + 'B527662200/', R + 'B527905678/', R + 'B529633318/', R + 'B535244226/', R + 'B536215205/', R + 'B536398104/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'House rules and a dinner minimum order; read the notes first (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-16-17 アメニティ北堀江 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目16番17号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B535244226/', R + 'B536215205/'],
    price_note: 'Prices from September 2026 reviews and the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Spaghetti with anchovies, potato and broccoli (oil sauce), lunch', '¥1,300', 'Lunch pasta', 'no', 'no', 'With salad, baguette and omelette (September 2026).', 'spaghetti'),
      it('', '', 'Tagliatelle in tomato sauce with Mizuho pork belly, lunch', '¥1,600', 'Lunch pasta', 'no', 'no', 'September 2026.', 'tagliatelle'),
      it('', '', 'Dinner course', '¥6,000', 'Courses', 'no', 'no', 'Lowest-priced course (September 2026).', 'course'),
      it('', '', 'Coperto: salami, grissini and nuts', '¥330', 'Dinner', 'no', 'no', 'Dinner only (Tabelog).', 'coperto'),
    ] }, {
    cuisine: 'トラットリアとワインバー・昼のパスタ1,300〜1,600円 (サラダ、バゲット、イタリアのオムレツつき)、たとえばアンチョビとじゃがいもとブロッコリーのオイルソースのスパゲッティ、Mizuho の豚バラと芽キャベツのトマトソースのタリアテッレ・夜はアラカルトか6,000円からのコース: 鮮魚のカルパッチョ、アヒージョ、グラタン、Motsu Nikomi、蒸し野菜、魚介のパスタ、ステーキ、鴨、Sangen の豚、ある日は Iberico の豚・ワインはスタッフと選ぶ、ボトル約4,000円から・20席: カウンター12席',
    neighborhood: '西区北堀江1-16-17 アメニティ北堀江 1F。西大橋駅から徒歩2分、四ツ橋駅から4分',
    gf_detail: 'グルテンフリーではありません。パスタが中心、パンとグリッシーニ、グラタン。',
    vegan_detail: 'ヴィーガンではありません。コペルトにサラミ、肉と魚介のメイン、野菜のオイルパスタにもアンチョビ。',
    notes: '[イタリアン・北堀江、大人向けのトラットリア兼ワインバー] 西大橋近く、17年目のトラットリアで、落ち着いた大人のための店とうたい、テーブルやメニューに店のルールが書かれている。行く前に読んでおきたい: 夜はコペルト330円とひとりあたりの最低注文額があり、混む夜は料理が遅いことも。そのかわり、ていねいなパスタ、スタッフと選ぶワイン、鮮魚のカルパッチョ、Motsu Nikomi、鴨、Sangen の豚、赤身らしいステーキが楽しめる。入りやすいのは昼で、サラダ・パン・イタリアのオムレツつきのパスタが1,300〜1,600円、週3日。月曜休み。',
  });
}

// ================================================================ AWA SUSHI 泡鮨
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27140068/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'osaka_awa_sushi_minamisenba', name: 'AWA SUSHI 泡鮨 (AWA SUSHI)', category: 'OMNI',
    lat: 34.676193, lng: 135.505224, cuisine_type: 'sushi',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: soy sauce on the sushi; simmered and fried dishes; dobin-mushi dashi. Tell the restaurant when booking and ask.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish omakase.',
    hours_raw: 'Daily 17:00–22:30, last entry 20:30, all guests start together; lunch for private bookings only (Tabelog). Reservation only (May 2026). Cards, transit IC, iD and QR (PayPay, Alipay, WeChat Pay) accepted; no service charge (Tabelog).',
    hours: ALL(day(['17:00', '22:30'])), hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Minami-Senba 2-6-7, inside Cuvée J2 Hôtel Osaka — 1 min from Nagahoribashi Stn via the Crysta Nagahori north 4 elevator',
    cuisine: 'Sushi omakase paired with champagne · several small dishes and about 10–12 nigiri, soup and a seasonal dessert · e.g. abalone steamed for six hours with liver sauce, finished with a little sushi rice; surf clam; anago; uni; medium-fatty tuna; aged fish; deep-fried young sweetfish; Kamochi Ayu; dobin-mushi · champagne pairing by the glass from over 200 champagnes, with a featured house each month · 10 counter seats',
    website: null, gmaps: gm('AWA SUSHI 泡鮨'), menu_url: null,
    notes: "[Sushi · sushi omakase with a champagne pairing, Minami-Senba] A sophisticated ten-seat sushi counter inside a champagne-themed hotel near Nagahoribashi, built around one idea: sushi with champagne. The omakase runs to small dishes and about a dozen nigiri, with standouts like abalone steamed for six hours in its liver sauce (mixed with a little sushi rice at the end), sweet uni, medium-fatty tuna and anago with a rich sauce. The pairing pours a glass every two or three courses from a list of over 200 champagnes, with a featured house each month, and staff guide non-experts well. Dinner only, all guests start together; reserve for an anniversary night. One diner found a grilled fish watery.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Sushi counter in Cuvée J2 Hôtel Osaka (Tabelog; 2026 reviews).', philosophy: 'Sushi paired with champagne (2026 reviews).', specialty: 'Sushi omakase with champagne pairing.',
      anecdotes: [
        { text: '"What stood out the most was the abalone that had been steamed for 6 hours. It was astonishingly tender, and when dipped in the liver sauce, the umami flavor burst forth…" — April 2026, Awa Sushi Omakase Course.', source: R + 'B526519830/' },
        { text: '"I requested the champagne pairing, enjoying one glass with every two to three dishes, totaling five glasses." — April 2026.', source: R + 'B527880585/' },
      ],
      japanese_sources_summary: '食べログ: AWA SUSHI 泡鮨、大阪市中央区南船場2-6-7 Cuvée J2 Hôtel Osaka、長堀橋駅からクリスタ長堀の北4エレベーターで徒歩1分、毎日17:00〜22:30 (最終入店20:30、一斉スタート)、昼は貸切のみ、カード・交通系IC・iD・QR (PayPay、Alipay、WeChat Pay) 可、サービス料なし、カウンター10席。口コミ(2026年4〜9月): シャンパンと鮨の店、予約制、おまかせ (料理数品と握り10〜12貫、汁物、季節のデザート)、6時間蒸したあわびの肝のソース (最後にシャリを少し)、ホッキ貝、anago、ウニ、中トロ、熟成の仕事、稚鮎の揚げ物、Kamochi Ayu、dobin-mushi、200種以上のシャンパンから2〜3品ごとに1杯のペアリング、月替わりの生産者、ていねいなサービス、記念日に、焼き魚が水っぽかったという声。',
      confidence: 'medium', sources: [TB, R + 'B526519830/', R + 'B527880585/', R + 'B528707405/', R + 'B530517294/', R + 'B530807580/', R + 'B536368709/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff recommend champagne for non-experts (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区南船場2-6-7 Cuvée J2 Hôtel Osaka',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区南船場二丁目6番7号 (go) 18m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B526519830/', R + 'B527880585/'],
    price_note: 'No course price in the reviews; JPY 20,000–29,999 per person (Tabelog, reviews).', last_checked: TODAY, items: [
      it('', '', 'Awa Sushi omakase course', '', 'Courses', 'no', 'no', 'April–September 2026.', 'omakase'),
      it('', '', 'Champagne pairing', '', 'Drinks', 'ask', 'ask', 'April 2026; five glasses.', 'pairing'),
    ] }, {
    cuisine: 'シャンパンを合わせる鮨のおまかせ・料理数品と握り10〜12貫ほど、汁物、季節のデザート・たとえば6時間蒸したあわびの肝のソース (最後にシャリを少し)、ホッキ貝、anago、ウニ、中トロ、熟成させた魚、稚鮎の揚げ物、Kamochi Ayu、dobin-mushi・200種以上のシャンパンからグラスで合わせるペアリング、月替わりの生産者・カウンター10席',
    neighborhood: '中央区南船場2-6-7 Cuvée J2 Hôtel Osaka の中。長堀橋駅からクリスタ長堀の北4エレベーターで徒歩1分',
    gf_detail: 'グルテンフリーではありません。鮨に醤油、煮物や揚げ物、dobin-mushiのだし。予約の際に伝えて確認を。',
    vegan_detail: 'ヴィーガンではありません。魚介のおまかせ。',
    notes: '[鮨・南船場、シャンパンを合わせる鮨のおまかせ] 長堀橋近く、シャンパンがテーマのホテルの中にある洗練された10席の鮨カウンターで、鮨とシャンパンを合わせるのが軸。おまかせは料理数品と握り12貫ほどで、6時間蒸したあわびの肝のソース (最後にシャリを少し混ぜて)、甘いウニ、中トロ、濃いたれのanagoなどが印象に残る。ペアリングは200種以上のシャンパンから2〜3品ごとに1杯、生産者は月替わりで、お酒にくわしくなくてもスタッフが案内してくれる。夜のみ、一斉スタート。記念日の夜に予約を。焼き魚が水っぽかったという声も。',
  });
}

// ================================================================ ふら～っと。カレー家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27042361/'; const R = TB + 'dtlrvwlst/';
  const A = day(['11:30', '21:00']); const B = day(['11:30', '17:00']);
  put({
    id: 'osaka_furatto_curry_ya_inari', name: 'ふら～っと。カレー家 (Fura~tto. Curry Ya)', category: 'OMNI',
    lat: 34.665755, lng: 135.492669, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: European-style roux curry; breaded chicken katsu.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: chicken katsu; the curry base is not described — ask.',
    hours_raw: 'Mon, Thu, Fri, Sat 11:30–21:00; Tue–Wed 11:30–17:00 (last order 16:00); closed Sun and public holidays; evenings end when the rice runs out (Tabelog). No cards; PayPay and d Barai accepted (Tabelog). Smoking allowed (Tabelog). Hot inside in summer (July 2026).',
    hours: { 0: A, 1: B, 2: B, 3: A, 4: A, 5: A }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Inari 1-7-30, a quiet street behind JR Namba — about 10 min from JR Namba Stn',
    cuisine: 'European-style curry · chicken katsu curry ¥980: crisp, tender breast-meat katsu over a mild, onion-sweet curry · a spicier curry too · 13 seats',
    website: null, gmaps: gm('ふら～っと。カレー家'), menu_url: null,
    notes: "[Curry · a ¥980 chicken katsu curry behind JR Namba, Inari] A small, warm curry shop on a quiet street about ten minutes from JR Namba that stays open through the afternoon. The order is the chicken katsu curry (¥980): the katsu is the surprise, crisp outside and tender and juicy within, over a mild, homestyle European curry sweet with onion. Some diners find the sauce a little sparse for the rice; there's a spicier curry too. It can be slow when one person is cooking at the lunch rush, smoking is allowed and the room gets hot in summer. Closed Sundays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Curry shop (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Chicken katsu curry.',
      anecdotes: [
        { text: '"While the curry sauce itself wasn\'t particularly unique, the surprise came from the chicken katsu. The exterior was crispy, and the meat was tender, providing an excellent bite." — April 2026, Chicken Katsu Curry ¥980.', source: R + 'B527105131/' },
        { text: '"The curry sauce is primarily sweet from the onions, with a very mild spiciness." — September 2026.', source: R + 'B535397621/' },
      ],
      japanese_sources_summary: '食べログ: ふら～っと。カレー家、大阪市浪速区稲荷1-7-30、JR難波駅から約10分、月・木・金・土 11:30〜21:00、火・水 11:30〜17:00 (L.O. 16:00)、日・祝休み、夜はご飯がなくなり次第終了、カード不可、PayPay・d払い可、喫煙可、13席。口コミ(2026年4〜9月): 静かな通りの小さな店、昼過ぎも開いている、チキンカツカレー980円 (さくっとやわらかい鶏むねのかつ、玉ねぎの甘みのマイルドな欧風カレー)、辛いカレーも、ルーが少なめでご飯が余るという声、混む時間はひとりで回していて待つことも、たばこのにおい、夏は店内が暑い、あたたかい雰囲気。',
      confidence: 'medium', sources: [TB, R + 'B527105131/', R + 'B528598843/', R + 'B528883368/', R + 'B531080210/', R + 'B531824165/', R + 'B535397621/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Simple curry menu; warm welcome (June 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市浪速区稲荷1-7-30',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated September 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市浪速区稲荷一丁目7番30号 (go) 2m; OSM ふら〜っと。カレー家 node/5501367888 6m; same address as Ramen Seisakujo Kanade, 10 m apart, no offset; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B527105131/', R + 'B535397621/'],
    price_note: 'Price from an April 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Chicken katsu curry', '¥980', 'Curry', 'no', 'no', 'April–September 2026.', 'katsu'),
      it('', '', 'Spicy curry', '', 'Curry', 'no', 'ask', 'June 2026.', 'spicy'),
    ] }, {
    cuisine: '欧風カレー・チキンカツカレー980円: さくっとやわらかい鶏むねのかつ、玉ねぎの甘いマイルドなカレー・辛口のカレーも・13席',
    neighborhood: '浪速区稲荷1-7-30、JR難波の裏の静かな通り。JR難波駅から約10分',
    gf_detail: 'グルテンフリーではありません。欧風のルーのカレー、衣をつけたチキンカツ。',
    vegan_detail: 'ヴィーガンではありません。チキンカツ、カレーのベースは不明なので確認を。',
    notes: '[カレー・稲荷、JR難波の裏の980円のチキンカツカレー] JR難波から10分ほど、静かな通りにある小さくあたたかいカレー店で、昼過ぎも開いている。頼むのはチキンカツカレー (980円): 驚くのはかつで、外はさくっと中はやわらかくジューシー、玉ねぎの甘みのある家庭的でマイルドな欧風カレーに。ご飯に対してルーが少なめという声も。辛口のカレーもある。混む昼はひとりで回していて待つことがあり、喫煙可、夏は店内が暑い。日曜休み。',
  });
}

// ================================================================ Niku Teria カルネバッカ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27086843/'; const R = TB + 'dtlrvwlst/';
  const D = day(['17:00', '23:59']);
  put({
    id: 'osaka_niku_teria_carne_bacca_kitahorie', name: 'Niku Teria カルネバッカ (Niku Teria Carne Bacca)', category: 'OMNI',
    lat: 34.67401, lng: 135.493856, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: pasta; baguette; hamburg steak; sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a meat bar; butter rice; the shungiku salad may be meat-free — ask.',
    hours_raw: 'Mon, Tue, Thu–Sun and public holidays 17:00–24:00 (last order 23:00); closed Wed (Tabelog). All-you-can-drink courses, e.g. 2 hours ¥5,500 (June 2026). Cards and QR (PayPay, d Barai, au PAY) accepted (Tabelog). Smoking allowed (Tabelog).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kitahorie 1-22-26 — 2 min from Nishi-Ohashi Stn; 5 min from Yotsubashi',
    cuisine: 'Italian meat bar · appetizer platter ¥1,500 (pumpkin and sweet potato salad, potato salad, ham) · homemade charcuterie · luxurious platter of chicken, pork and beef ¥2,280 · signature beef tongue stew in Hebereke sauce ¥2,600, with baguette · sirloin cap carpaccio, seared · beef tataki salad; shungiku salad · natto ajillo · hamburg steak · Butcher\'s Bolognese · butter rice with meat to finish · courses with 2-hour all-you-can-drink ¥5,500 · 20 seats: 6 at the counter',
    website: null, gmaps: gm('Niku Teria カルネバッカ'), menu_url: null,
    notes: "[Italian · a friendly Italian meat bar, Kitahorie] A stylish meat bar near Nishi-Ohashi that works for a solo glass at the counter or a group party at the tables. The signature is the slow-simmered beef tongue stew (¥2,600), tender enough to melt, with a baguette for the sauce; add the platter of chicken, pork and beef (¥2,280), the seared sirloin cap carpaccio and the homemade charcuterie, and finish with the butter rice topped with meat. Natto ajillo and a shungiku salad are unusual extras. Friendly staff; courses with two hours of drinks are ¥5,500. One diner found a group course thin and one had a Tabelog booking go unseen. Smoking allowed. Closed Wednesdays.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Italian meat bar (Tabelog; 2026 reviews).', philosophy: null, specialty: 'Beef tongue stew; meat platters.',
      anecdotes: [
        { text: '"The slowly simmered beef tongue is melt-in-your-mouth tender, and you\'ll want to add a baguette to soak up every drop of the sauce." — February 2026, Beef Tongue Stew ¥2,600.', source: R + 'B521914743/' },
        { text: '"The standout dish was the Beef Sirloin Cap Carpaccio. It was a rare cut, seared over high heat…" — October 2026, all-you-can-drink course.', source: R + 'B521914743/' },
      ],
      japanese_sources_summary: '食べログ: Niku Teria カルネバッカ、大阪市西区北堀江1-22-26、西大橋駅から徒歩2分、心斎橋・四ツ橋駅から5分、月・火・木〜日・祝 17:00〜24:00 (L.O. 23:00)、水曜休み、カード・QR (PayPay、d払い、au PAY) 可、喫煙可、20席 (カウンター6、テーブル14)。口コミ(2026年2〜10月): イタリアンの肉バル、前菜の盛り合わせ1,500円 (かぼちゃとさつまいものサラダ、ポテトサラダ、ハム)、自家製シャルキュトリ、鶏・豚・牛の肉の盛り合わせ2,280円、看板の牛タンのシチュー Hebereke 2,600円、sirloin cap のカルパッチョ、牛の tatakiのサラダ、shungiku のサラダ、natto のアヒージョ、ハンバーグ、Butcher\'s Bolognese、締めの肉のせバターライス、2時間飲み放題のコース5,500円、気さくな店の人、誕生日のプレートにも対応、団体のコースは物足りなかった・食べログの予約が確認されていなかったという声。',
      confidence: 'medium', sources: [TB, R + 'B521914743/', R + 'B530811783/', R + 'B531252191/', R + 'B531842925/', R + 'B536136512/', R + 'B536469436/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Friendly staff; birthday plates on request (July 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区北堀江1-22-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区北堀江一丁目22番26号 (go) 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521914743/'],
    price_note: 'Prices from February and June 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Beef tongue stew (Hebereke)', '¥2,600', 'Meat', 'no', 'no', 'February 2026.', 'tongue'),
      it('', '', 'Luxurious meat platter (chicken, pork, beef)', '¥2,280', 'Meat', 'ask', 'no', 'February 2026.', 'platter'),
      it('', '', 'Appetizer platter', '¥1,500', 'Starters', 'ask', 'no', 'February 2026.', 'antipasto'),
      it('', '', 'Butter rice with meat', '', 'Finish', 'ask', 'no', 'February–October 2026.', 'butter_rice'),
      it('', '', 'Course with 2-hour all-you-can-drink', '¥5,500', 'Courses', 'no', 'no', 'June 2026.', 'course'),
    ] }, {
    cuisine: 'イタリアンの肉バル・前菜の盛り合わせ1,500円 (かぼちゃとさつまいものサラダ、ポテトサラダ、ハム)・自家製シャルキュトリ・鶏、豚、牛の盛り合わせ2,280円・看板の牛タンのシチュー Hebereke 2,600円、バゲットとともに・強火であぶった sirloin cap のカルパッチョ・牛の tatakiのサラダ、shungiku のサラダ・natto のアヒージョ・ハンバーグ・Butcher\'s Bolognese・締めの肉のせバターライス・2時間飲み放題のコース5,500円・20席: カウンター6席',
    neighborhood: '西区北堀江1-22-26。西大橋駅から徒歩2分、四ツ橋駅から5分',
    gf_detail: 'グルテンフリーではありません。パスタ、バゲット、ハンバーグ、ソース。',
    vegan_detail: 'ヴィーガンではありません。肉バル、バターライス。shungiku のサラダは肉なしかもしれないので確認を。',
    notes: '[イタリアン・北堀江、気さくなイタリアンの肉バル] 西大橋近くのおしゃれな肉バルで、カウンターでひとり一杯にも、テーブルで団体の飲み会にも。看板はじっくり煮込んだ牛タンのシチュー (2,600円) で、とろけるやわらかさ、ソースはバゲットで。鶏・豚・牛の盛り合わせ (2,280円)、あぶった sirloin cap のカルパッチョ、自家製シャルキュトリも頼み、締めは肉をのせたバターライス。natto のアヒージョや shungiku のサラダも変わり種。気さくな店の人で、2時間飲み放題のコースは5,500円。団体のコースが物足りなかった、食べログの予約が確認されていなかったという声も。喫煙可。水曜休み。',
  });
}

save();
