// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo circles), circle `ueno`, lane osw12, batch 23.
//   + UP TO YOU COFFEE (8-seat Australian-style specialty coffee near Kappabashi)
//   + デリー 上野店 DELHI Ueno (Indian curry since 1956; Tabelog Curry 100 2017–2026) — researched in place of tokyo3__223
//   + 茶々亭 Chacha Tei (banmen mixed noodles and ramen by Uguisudani, to 1:30 am; opened about September 2025)
//   + 多古久 Tako Kyuu (oden and fish izakaya by Yushima Stn)
// Skipped (see skip()): 日高屋 鶯谷店 13118842, 蔵元居酒屋 清龍 上野店 13026645.
// Undecided (no put, no skip): あさが家, まつり屋, ビアバックス, 鳥椿, ルンビニ, サルガム, マ・シェリ (as before);
//   マル超ホルモン404 13241599 — no other マル超ホルモン shop confirmed and no count found.
// Chain check (with Greg's 2026-11-02 rulings and the working line of 4 or fewer shops). DELHI: 上野店 (the 1956 original),
//   銀座店 and アトリエデリー in Yushima (2021) found; a reviewer links it to the Tokyo Bombay shops in Ebisu (a different
//   brand) — small, and the placeholder for it was already in data, so researched in place. UP TO YOU COFFEE, Chacha Tei,
//   Tako Kyuu: one shop each found.
// Dedupe: none is in data/tokyo.json by name, Tabelog id or address except the hidden placeholder tokyo3__223 (デリー 上野店).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('tokyo-gaps', TODAY, 'osw12-23');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('13118842', 'national chain: 日高屋 (Hidakaya); this is the 鶯谷店.');
skip('13026645', 'chain: 蔵元居酒屋 清龍 (run by 清龍酒造) has at least five Tokyo shops — 池袋本店, 南池袋, 神田, 高田馬場, 上野 (Tabelog/Retty listings).');

// ================================================================ UP TO YOU COFFEE
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13231869/'; const R = TB + 'dtlrvwlst/';
  const D = day(['10:00', '18:00']);
  put({
    id: 'tokyo_up_to_you_coffee_matsugaya', name: 'アップトゥーユーコーヒー (UP TO YOU COFFEE)', category: 'OMNI',
    lat: 35.714966, lng: 139.786209, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: coffee itself has no gluten, but the banana bread, toast and sandwiches are wheat-based; nothing is described as gluten-free.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Vegan — ask: black coffee is vegan, but no plant milk is mentioned and the cakes are not described.',
    hours_raw: 'Daily 10:00–18:00 (Tabelog; may change). No reservations. Cash only (August 2026; Tabelog lists no cards, e-money or QR). 8 seats: a table for two and benches with small tables. Take-away +¥30. Non-smoking.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Matsugaya 2-chōme, near Kappabashi kitchen-tool street — about 10 min from JR Ueno; 8 min from Inaricho',
    cuisine: 'Australian-style specialty coffee from an owner and staff who trained in Australia, per a July 2026 review · hand-drip single origins such as Papua New Guinea (¥850, August 2026), espresso drinks with a choice of beans — café latte, flat white, Americano, "Magic" (double ristretto with less milk, ¥700, July 2026) · banana bread, toast, salad sandwich',
    website: null, gmaps: gm('UP TO YOU COFFEE 松が谷2-31-11'), menu_url: null,
    notes: "[Coffee · Kappabashi, Australian-style coffee in a tiny room] A tiny specialty coffee bar a short walk from Kappabashi kitchen-tool street, run by an owner known in latte art who, like the staff, trained in Australia, and who says the shop placed third in a world competition in the US. Expect flat whites, lattes with your choice of beans, a ristretto 'Magic' and bright light-roast pour-overs, with banana bread or a salad sandwich. Eight seats on benches; cash only. Most reviewers loved the coffee; one July 2026 diner found the iced drip too strong and half-warm, and a September 2026 diner noticed the cake was reheated from frozen.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per a June 2026 review, run by an owner well known in the latte-art world; a July 2026 review says the owner and staff trained in Australia and the shop placed third in a world competition in the US. No source names the owner.', philosophy: null, specialty: 'Flat white; light-roast pour-over.',
      anecdotes: [
        { text: '"I decided to try the Magic, which is made with a double shot of ristretto (a concentrated espresso)." — July 2026, ¥700.', source: R + 'B437556939/' },
        { text: '"When the coffee arrived, I was immediately struck by its rich aroma." — June 2026, light roast.', source: R + 'B531261460/' },
        { text: '"I felt a bit sad to see that the cake wasn\'t freshly baked but rather heated from frozen." — September 2026, banana cake.', source: R + 'B535290140/' },
      ],
      japanese_sources_summary: '食べログ: アップトゥーユーコーヒー、松が谷2-31-11 1F、稲荷町駅から517m、毎日10:00〜18:00、予約不可、カード・電子マネー・QR不可、8席、禁煙。口コミ (2026年6〜10月): オーストラリアで修業した店主とスタッフ、ラテアートで知られる店主、アメリカの世界大会で3位、パプアニューギニアのハンドドリップ850円、フラットホワイト、豆を選べるカフェラテ、ダブルのリストレットの「マジック」700円、バナナブレッド、サラダサンド、テイクアウト+30円、現金のみ、アイスコーヒーが濃く一部ぬるかった、ケーキは冷凍を温めたものという声も。',
      confidence: 'medium', sources: [TB, R + 'B427590263/', R + 'B437556939/', R + 'B530956600/', R + 'B531261460/', R + 'B531725823/', R + 'B532006968/', R + 'B532568271/', R + 'B535290140/', R + 'B537433331/', R + 'B538373050/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter café; cash only; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区松が谷2-31-11 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated June–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区松が谷二丁目31番11号 (go) 1m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B427590263/', R + 'B437556939/'],
    price_note: 'Prices from 2026 reviews; take-away +¥30.', last_checked: TODAY, items: [
      it('', '', 'Hand-drip coffee (Papua New Guinea, medium roast)', '¥850', 'Coffee', 'ask', 'ask', 'August 2026.', 'hand_drip'),
      it('', '', 'Magic (double ristretto with milk)', '¥700', 'Coffee', 'ask', 'no', 'July 2026.', 'magic'),
    ] }, {
    cuisine: 'オーストラリアで修業した店主とスタッフによるオーストラリア風のスペシャルティコーヒー (2026年7月の口コミ)・パプアニューギニアなどのシングルオリジンのハンドドリップ (850円、2026年8月)、豆を選べるエスプレッソのドリンク (カフェラテ、フラットホワイト、アメリカーノ、ミルク少なめのダブルリストレット「マジック」700円、2026年7月)・バナナブレッド、トースト、サラダサンド',
    neighborhood: '松が谷二丁目、かっぱ橋道具街の近く。JR上野駅から約10分、稲荷町駅から8分',
    gf_detail: 'グルテンフリーは要確認。コーヒー自体にグルテンはありませんが、バナナブレッド、トースト、サンドイッチは小麦。グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンは要確認。ブラックコーヒーはヴィーガンですが、植物性ミルクの記載はなく、ケーキの説明もありません。',
    notes: '[コーヒー・かっぱ橋、小さな店のオーストラリア風コーヒー] かっぱ橋道具街から少し歩いたところにある小さなスペシャルティコーヒーの店。ラテアートで知られる店主もスタッフもオーストラリアで修業し、アメリカの世界大会で3位になったとのこと。フラットホワイト、豆を選べるラテ、リストレットの「マジック」、華やかな浅煎りのハンドドリップに、バナナブレッドやサラダサンド。ベンチ8席、現金のみ。口コミの多くはコーヒーを絶賛。2026年7月にはアイスのドリップが濃く半分ぬるかった、9月にはケーキが冷凍を温めたものだったという声も。',
  });
}

// ================================================================ デリー 上野店 (in place of tokyo3__223)
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13003605/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:50', '21:30']);
  put({
    id: 'tokyo3__223', name: 'デリー 上野店 (DELHI Ueno)', category: 'OMNI',
    lat: 35.708256, lng: 139.771271, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: curry over rice, but the roux bases are not described and there is no gluten-free statement.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the curries are chicken-, shrimp- or meat-based (Kashmir, Delhi, korma, butter chicken, tandoori); no vegan curry is named.',
    hours_raw: 'Daily 11:50–21:30; 2–3 January 11:50–19:30 (last order); closed 31 December–1 January (Tabelog). An October 2026 reviewer queued for a "12:50 opening"; a November 2026 reviewer queued at 11:50 for the opening. No reservations; queues of 10–20 at weekend lunch, shorter mid-afternoon. Cash only. 15 seats (8 at the counter, 7 at small tables); cramped. Non-smoking. Opened 28 February 1956.',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Yushima 3-chōme (Bunkyō) — 2 min from Ueno-Hirokoji; 4 min from Yushima; 7 min from JR Okachimachi',
    cuisine: 'Indian curry since 1956, famous for the very spicy Kashmir curry; Tabelog Curry 100 2017–2026 · menu (Tabelog, February 2025): Delhi, Indian, Continental curry ¥1,230; Bengal, Shahi ¥1,270; Kashmir, dry curry ¥1,350; strong dry curry ¥1,400; chicken balti ¥1,420; korma ¥1,450; butter chicken ¥1,500; daily special from ¥1,500 · 2026 reviews: Indian curry ¥1,230 and eggplant pickles ¥210 (November); korma ¥1,450 (October); Delhi curry ¥1,700 (November); special curry set with rasam, salad and a drink ¥2,200, or a tandoori set with four chicken tikka (October)',
    website: null, gmaps: gm('デリー 上野店 湯島3-42-2'), menu_url: TB + 'dtlmenu/',
    notes: "[Curry · Ueno-Hirokoji, Tokyo's 1956 Indian curry house] A small, old-fashioned Indian curry shop near Ueno-Hirokoji, open since 1956 and in Tabelog's Curry 100 almost every year. The famous order is the Kashmir curry — a thin, fiercely spicy sauce with complex spices — but the menu runs from a mild korma (¥1,450) and butter chicken to a shrimp-topped strong dry curry, served fast in silver bowls with rice. Most curries cost ¥1,230–1,500, and a set with rasam and salad is ¥2,200. Expect a queue at weekend lunch; seating is tight, cash only. Some find the Kashmir milder than its reputation; others find it too hot.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened 28 February 1956 (Tabelog)', background: 'Tabelog official listing; the same family of shops includes a Ginza branch and Atelier Delly in Yushima (opened December 2021, Time Out Tokyo summary). An October 2026 reviewer calls it the predecessor of the Tokyo Bombay shops in Ebisu. No source names the owner.', philosophy: null, specialty: 'Kashmir curry.',
      anecdotes: [
        { text: '"Upon tasting it, I found it to be indeed very spicy, but it had a complex heat from the spices that made it more than just plain hot." — October 2026, Kashmir curry.', source: R + 'B457121901/' },
        { text: '"The curry that was served came in a silver bowl, generously filled, with a deep and impressive color." — October 2026.', source: R + 'B537997722/' },
        { text: '"The Kashmir Curry was milder than the one at Ebisu Bombay, surprisingly not too spicy" — October 2026.', source: R + 'B538005153/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): デリー 上野店、文京区湯島3-42-2、上野広小路駅から徒歩2分、湯島駅から4分、JR御徒町駅から7分、毎日11:50〜21:30、1月2〜3日は11:50〜19:30、12月31日〜1月1日休み、予約不可、カード・電子マネー不可、15席 (カウンター8、テーブル7)、禁煙、1956年2月28日オープン、食べログ カレー 百名店 2017〜2026。メニュー (2025年2月): デリーカレー・インドカレー1,230円、カシミールカレー1,350円、コルマカレー1,450円、バターチキン1,500円、ドライカレー1,350円、ストロングドライカレー1,400円。口コミ (2026年10〜11月): 名物のカシミールカレーはとても辛く複雑なスパイス、銀の器、提供が早い、週末の昼は10〜20人の行列、席は狭い、現金のみ、スペシャルカレーセット2,200円、デリーカレー1,700円 (2026年11月)、恵比寿のボンベイの前身という声。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B457121901/', R + 'B537903420/', R + 'B537967161/', R + 'B537974953/', R + 'B537997722/', R + 'B538005153/', R + 'B538035972/', R + 'B538038717/', R + 'B538259912/', R + 'B538457550/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter shop; queue outside; cash only; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都文京区湯島3-42-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (Curry TOKYO 100, 2026); reviews dated October–November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都文京区湯島三丁目42番2号 (go) 4m; ${TODAY}`,
  }, { verified: 'partial', confidence: 'medium', sources: [TB + 'dtlmenu/', R + 'B537967161/', R + 'B538457550/'],
    price_note: 'Prices from the Tabelog menu (updated February 2025); a November 2026 diner paid ¥1,700 for the Delhi curry (¥1,230 on the menu).', last_checked: TODAY, items: [
      it('', '', 'Kashmir curry', '¥1,350', 'Curry', 'ask', 'no', 'Tabelog menu, February 2025.', 'kashmir'),
      it('', '', 'Indian curry', '¥1,230', 'Curry', 'ask', 'no', 'Tabelog menu 2025; November 2026.', 'indian'),
      it('', '', 'Korma curry', '¥1,450', 'Curry', 'ask', 'no', 'Tabelog menu 2025; October 2026.', 'korma'),
      it('', '', 'Butter chicken', '¥1,500', 'Curry', 'ask', 'no', 'Tabelog menu, February 2025.', 'butter_chicken'),
      it('', '', 'Strong dry curry', '¥1,400', 'Curry', 'ask', 'no', 'Tabelog menu, February 2025.', 'strong_dry'),
      it('', '', 'Special curry set (curry, rasam, salad, soft drink)', '¥2,200', 'Sets', 'ask', 'no', 'October 2026.', 'special_set'),
    ] }, {
    cuisine: '1956年からのインドカレー、名物はとても辛いカシミールカレー。食べログ カレー 百名店 2017〜2026・メニュー (食べログ、2025年2月): デリー、インド、コンチネンタルカレー1,230円、ベンガル、シャヒ1,270円、カシミール、ドライカレー1,350円、ストロングドライカレー1,400円、チキンバルティ1,420円、コルマ1,450円、バターチキン1,500円、日替わり1,500円から・2026年の口コミ: インドカレー1,230円となすのピクルス210円 (11月)、コルマ1,450円 (10月)、デリーカレー1,700円 (11月)、ラッサム、サラダ、ドリンク付きのスペシャルカレーセット2,200円、チキンティッカ4個のタンドリーセット (10月)',
    neighborhood: '湯島三丁目 (文京区)。上野広小路駅から徒歩2分、湯島駅から4分、JR御徒町駅から7分',
    gf_detail: 'グルテンフリーは要確認。カレーとライスですが、ルウの説明はなく、グルテンフリーの表示もありません。',
    vegan_detail: 'ヴィーガンではありません。カレーは鶏、海老、肉がベース (カシミール、デリー、コルマ、バターチキン、タンドリー)。ヴィーガンのカレーはありません。',
    notes: '[カレー・上野広小路、1956年からのインドカレー] 上野広小路近くの小さく昔ながらのインドカレー店で、1956年から、食べログのカレー百名店にほぼ毎年選ばれています。名物はカシミールカレーで、さらっとしたソースに複雑なスパイスの強烈な辛さ。ほかにマイルドなコルマ (1,450円)、バターチキン、海老ののったストロングドライカレーまで、銀の器ですぐに出てきます。カレーは1,230〜1,500円が中心で、ラッサムとサラダ付きのセットは2,200円。週末の昼は行列、席は狭く、現金のみ。カシミールは評判ほど辛くないという声も、辛すぎるという声も。',
  });
}

// ================================================================ 茶々亭
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131104/13313783/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '01:30']);
  put({
    id: 'tokyo_chacha_tei_uguisudani', name: '茶々亭 (Chacha Tei)', category: 'OMNI',
    lat: 35.72105, lng: 139.780411, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: thick wheat noodles with soy-sauce or salt tare, and ramen.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: banmen is topped with shredded meat, chashu and a seasoned egg; ramen with back fat.',
    hours_raw: 'Daily 11:00–1:30 (Tabelog; may change). No reservations. Cash only. Non-smoking. Opened about September 2025 (a 1st-anniversary offer in September 2026).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: true },
    neighborhood: 'Negishi 1-chōme — about 3 min from JR Uguisudani',
    cuisine: 'Chinese "banmen" mixed noodles — thick, chewy noodles mixed with the sauce at the bottom of the bowl, topped with a soft-boiled egg, green onion, menma, shredded meat, lemon and a spicy condiment — plus ramen (reviews) · banmen or mazesoba in salt or soy sauce ¥750; noodles up to 600 g at lunch; rice sets (September–October 2026); ¥500 anniversary price in September 2026 · back-fat ramen with garlic; bottled beer · spicy miso on the table',
    website: null, gmaps: gm('茶々亭 根岸1-1-17'), menu_url: null,
    notes: "[Mixed noodles · Uguisudani, banmen until 1:30 am] A small noodle shop near Uguisudani Station serving banmen, a Chinese-style mixed noodle: thick, chewy noodles that you toss with a salt or soy tare from the bottom of the bowl, with a soft egg, green onion, menma, shredded meat and a squeeze of lemon (¥750). Add the spicy miso from the table if you want heat. There is ramen too, including a back-fat bowl, and the shop opens from 11:00 until 1:30, making it a late-night stop after drinks around Uguisudani. Cash only. The exterior can look off-putting, but reviewers in 2026 found the food light and satisfying.",
    chef_bio: { chef_name: null, roles: [], origin: 'Opened about September 2025 (1st-anniversary offer, September 2026 review)', background: 'Tabelog listing. No source names the owner.', philosophy: null, specialty: 'Banmen (mixed noodles).',
      anecdotes: [
        { text: '"The sauce and condiments cling to the noodles, delivering an explosion of umami, texture, and spice that is simply outstanding!" — August 2026, banmen.', source: R + 'B534211630/' },
        { text: '"While it\'s not very spicy on its own, you can add the spicy miso on the table to kick up the heat significantly." — August 2026.', source: R + 'B534696259/' },
        { text: '"However, the taste is surprisingly refreshing and not overly strong." — September 2026, banmen.', source: R + 'B536739358/' },
      ],
      japanese_sources_summary: '食べログ: 茶々亭、根岸1-1-17、鶯谷駅から222m、毎日11:00〜翌1:30、予約不可、カード・電子マネー・QR不可、禁煙。口コミ (2026年8〜10月): 名物の拌麺 (まぜそば)、塩か醤油、750円、太くもちもちの麺に半熟卵、ねぎ、メンマ、肉そぼろ、レモン、辛い薬味、卓上の辛味噌、昼は麺を600gまで増量可、ご飯のセット、2026年9月は1周年で500円、背脂にんにくのラーメン、瓶ビール、現金のみ、外観は入りにくいが味はさっぱり。',
      confidence: 'medium', sources: [TB, R + 'B515542263/', R + 'B534211630/', R + 'B534696259/', R + 'B535497152/', R + 'B535609335/', R + 'B536739358/', R + 'B537109476/', R + 'B537702262/', R + 'B538103042/', R + 'B538280759/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small noodle shop; cash only; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区根岸1-1-17',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated August–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区根岸一丁目1番17号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535497152/', R + 'B538103042/'],
    price_note: 'Prices from September–October 2026 reviews (tax included).', last_checked: TODAY, items: [
      it('', '', 'Banmen / mazesoba (salt or soy sauce)', '¥750', 'Noodles', 'no', 'no', 'September–October 2026.', 'banmen'),
    ] }, {
    cuisine: '中国風の「拌麺」: 太くもちもちの麺を丼の底のたれと混ぜ、半熟卵、ねぎ、メンマ、肉そぼろ、レモン、辛い薬味をのせたもの。ラーメンも (口コミ)・塩か醤油の拌麺 (まぜそば) 750円、昼は麺を600gまで増量可、ご飯のセット (2026年9〜10月)、2026年9月は1周年で500円・背脂にんにくのラーメン、瓶ビール・卓上に辛味噌',
    neighborhood: '根岸一丁目。JR鶯谷駅から約3分',
    gf_detail: 'グルテンフリーではありません。醤油か塩のたれの小麦の太麺と、ラーメン。',
    vegan_detail: 'ヴィーガンではありません。拌麺には肉そぼろ、チャーシュー、味玉。ラーメンには背脂。',
    notes: '[まぜそば・鶯谷、深夜1時半までの拌麺] 鶯谷駅近くの小さな麺の店で、中国風のまぜそば「拌麺」が名物: 太くもちもちの麺を丼の底の塩か醤油のたれと混ぜ、半熟卵、ねぎ、メンマ、肉そぼろ、レモンをしぼって (750円)。辛さが欲しければ卓上の辛味噌を。背脂のラーメンなどもあり、11:00から翌1:30まで営業で、鶯谷で飲んだあとの締めにも。現金のみ。外観は入りにくそうですが、2026年の口コミではさっぱりしておいしいという声。',
  });
}

// ================================================================ 多古久
{
  const TB = 'https://tabelog.com/en/tokyo/A1311/A131101/13008517/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '23:00']);
  put({
    id: 'tokyo_tako_kyuu_ueno', name: '多古久 (Tako Kyuu)', category: 'OMNI',
    lat: 35.708912, lng: 139.770218, cuisine_type: 'oden',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'GF — ask: oden in a light soy-sauce broth, with fish cakes such as hanpen; sashimi and grilled fish are on the menu too, but nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the oden broth and fish cakes are fish-based; sashimi, saikyo-grilled fish, octopus, oysters.',
    hours_raw: 'Wed–Sun 18:00–23:00 (last order 22:30); closed Mondays and Tuesdays (Tabelog). Reservations needed — by phone Wed–Sun from 12:00, or by Instagram DM; in the winter season (October–March) bookings are for 18:00–19:00 or after 20:15, seats are limited to 1.5 hours (2 hours otherwise), and walk-ins are taken if there is room. Appetizer ¥330. Cash only. 20 seats (14 at the counter, 6 at tables). Non-smoking (smoking outside). Take-out.',
    hours: { 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Ueno 2-chōme, 長谷川ビル 1F — 1 min from Yushima Stn Exit 2; 5 min from Ueno-Hirokoji',
    cuisine: 'Long-established oden and fish izakaya (Tabelog; reviews) · oden served from a big copper pot behind the counter in a light soy-sauce broth: daikon, egg, konnyaku, shirataki, grilled tofu, hanpen, whelk, kinchaku, chicken negima, potato, baby octopus and oyster skewers · sashimi platter, marinated mackerel, saikyo-grilled black cod, cabbage with mentaiko, mozuku, homemade nukazuke · sake and shōchū',
    website: null, gmaps: gm('多古久 上野2-11-8'), menu_url: null,
    notes: "[Oden · Yushima, a traditional oden counter by the station] A long-established oden izakaya a minute from Yushima Station, behind a white noren, where the owner ladles oden from a big copper pot behind the counter: soft, sweet daikon, eggs, hanpen, whelk, potatoes and kinchaku in a light soy broth. Around it are good sashimi, saikyo-grilled fish and simple pickles, with sake and shōchū. It feels nostalgic and calm, and suits solo diners too (October 2026). Booking is the rule, especially from October to March, when slots are 18:00–19:00 or after 20:15 and tables turn after 90 minutes; cash only, closed Mondays and Tuesdays. One April 2026 diner called the staff quirky.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Tabelog official listing; a June 2026 review describes the owner serving oden from a large pot behind the counter. No source names the owner.', philosophy: null, specialty: 'Oden.',
      anecdotes: [
        { text: '"Inside, the entrance features a large copper pot filled with oden, making a powerful impression." — October 2026.', source: R + 'B536936960/' },
        { text: '"The flavors were incredibly comforting, with a gentle broth that wasn\'t too strong, making it perfect to pair with drinks." — October 2026.', source: R + 'B537244002/' },
        { text: '"Quirky staff, but the seasonal dishes and potato oden are truly delightful." — April 2026.', source: R + 'B528639289/' },
      ],
      japanese_sources_summary: '食べログ (公式情報): 多古久、上野2-11-8 長谷川ビル 1F、湯島駅2番出口から徒歩1分、上野広小路駅から5分、JR御徒町駅・上野駅から7分、水〜日18:00〜23:00 (L.O.22:30)、月火休み、予約制 (電話は水〜日12時以降、ほかはSNSのDM)、冬 (10〜3月) は18〜19時か20:15以降の予約、冬は1時間半制 (ほかは2時間)、空きがあれば予約なしも可、お通し330円、カード・電子マネー・QR不可、20席 (カウンター14、テーブル6)、禁煙 (外で喫煙可)、テイクアウト。口コミ (2026年3〜10月): 銅の大鍋のおでん、大根、卵、こんにゃく、しらたき、焼き豆腐、はんぺん、つぶ貝、巾着、ねぎま、じゃがいも、イイダコやカキの串、刺身の盛り合わせ、しめさば、銀だらの西京焼き、キャベツの明太子、もずく、自家製のぬか漬け、店員が個性的という声も。',
      confidence: 'medium', sources: [TB, R + 'B525174805/', R + 'B526499284/', R + 'B528639289/', R + 'B530962948/', R + 'B534974835/', R + 'B536936960/', R + 'B537244002/', R + 'B537462750/', R + 'B537996089/', R + 'B538396545/'] },
    cultural_comfort: { level: 'japanese', note: 'A traditional oden counter; booking by phone; cash only; no English menu is listed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都台東区上野2-11-8 長谷川ビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated March–October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 東京都台東区上野二丁目11番8号 (go) 5m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB],
    price_note: 'No item prices found; dinner about ¥4,000–6,000 a head (Tabelog); appetizer ¥330.', last_checked: TODAY, items: [
      it('', '', 'Appetizer (otōshi)', '¥330', 'Charges', 'ask', 'no', 'Tabelog listing.', 'otoshi'),
    ] }, {
    cuisine: '老舗のおでんと魚の居酒屋 (食べログ、口コミ)・カウンターの奥の大きな銅の鍋から出す、薄口醤油のおでん: 大根、卵、こんにゃく、しらたき、焼き豆腐、はんぺん、つぶ貝、巾着、ねぎま、じゃがいも、イイダコやカキの串・刺身の盛り合わせ、しめさば、銀だらの西京焼き、キャベツの明太子、もずく、自家製のぬか漬け・日本酒と焼酎',
    neighborhood: '上野二丁目、長谷川ビル 1F。湯島駅2番出口から徒歩1分、上野広小路駅から5分',
    gf_detail: 'グルテンフリーは要確認。薄口醤油のだしのおでんに、はんぺんなどの練り物。刺身や焼き魚もありますが、グルテンフリーの説明はありません。',
    vegan_detail: 'ヴィーガンではありません。おでんのだしや練り物は魚由来。刺身、西京焼き、タコ、カキ。',
    notes: '[おでん・湯島、駅前の昔ながらのおでんのカウンター] 湯島駅から1分、白いのれんの老舗のおでん居酒屋で、店主がカウンターの奥の大きな銅の鍋からおでんをよそってくれます: やわらかく甘い大根、卵、はんぺん、つぶ貝、じゃがいも、巾着を薄口のだしで。刺身、西京焼き、シンプルな漬物も好評で、日本酒と焼酎を。懐かしく落ち着いた雰囲気で、ひとりでも入りやすい (2026年10月)。予約が基本で、特に10〜3月は18〜19時か20:15以降の枠、90分制。現金のみ、月火休み。2026年4月には店員が個性的という声も。',
  });
}

save();
