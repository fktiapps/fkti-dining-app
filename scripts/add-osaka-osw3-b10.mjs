// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 10.
//   + 寅八商店 心斎橋店 Torahachi Shoten (live Hagi squid and straw-seared Kochi bonito; one of three Torahachi shops)
//   + CAFE ANNON なんば本店 (soufflé pancakes and parfaits in Ura Namba until late evening)
//   + 小籠包と本格中華 堀江ブルー Horie Blue (riverside Chinese with xiaolongbao and dim-sum lunches, Canal Terrace Horie)
//   + Pizzeria CUORERUDINO (wood-fired pizza facing Horie Park since 2012)
//   - skip 叙々苑 大丸心斎橋店 27113486 (national yakiniku chain)
//   - skip そばしゃぶ 総本家 浪花そば 心斎橋本店 27000834 (its Namba Dining Maison branch is in data)
//   Lane: ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-02, after batch 9), in order: 27051802,
//   27101706, 27113486 (skip), 27019090, 27000834 (skip), 27064354 (last two digits 02, 06, 86, 90, 34, 54: each = 2 mod 4).
//   None of the four added is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Chain check. Torahachi: three shops (Umeda, Shinsaibashi, Sannomiya; torahachishoten.com), none in data; kept, like
//   Karen in batch 4. ANNON: this main shop plus a Shinsaibashi shop and たまごとミルク at ららぽーと門真 (cafe-annon.com);
//   none in data; kept. Horie Blue and CUORERUDINO: single shops. Tabelog URLs copied from each listing.txt line 1.
//   open_late: 24:00 or later true; 22:00–23:59 by judgement per the brief (set true here, as in my earlier batches).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-10');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27113486', 'Chain: 叙々苑 is a national yakiniku chain (this is its Daimaru Shinsaibashi branch)');
skip('27000834', 'Chain already in data: 蕎麦しゃぶ総本家 浪花そば なんばダイニングメゾン店 is osaka_naniwa_soba_namba_dining_maison');

// ================================================================ 寅八商店 心斎橋店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27051802/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.torahachishoten.com/shops/shinsaibashi/'; const GROUP = 'https://www.torahachishoten.com/';
  const NEWS = SITE + 'news/posts/cmuma5npb00fq3b6urnwlnuwf/';
  const H = day(['17:00', '00:00']);
  put({
    id: 'osaka_torahachi_shoten_shinsaibashi', name: '寅八商店 心斎橋店 (Torahachi Shoten Shinsaibashi)', category: 'OMNI',
    lat: 34.674127, lng: 135.502504, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The live squid and other sashimi and the bonito tataki (with salt or ponzu) are the plainest; squid legs come back as tempura unless you ask for sashimi, and there are fried dishes, takeaway sushi and soy-based sauces.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a seafood izakaya built on live squid, bonito and sashimi.',
    hours_raw: 'Daily 17:00–24:00; closed 31 December–4 January (Tabelog; official site: no regular closing day). Reservations; if the live squid cannot be landed in bad weather, guests who booked by the day before are told by 15:00 that day; on the day, phone to check (Tabelog). A ¥600 appetizer charge, not on course bookings (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay and Alipay; no e-money (Tabelog). 110 seats: 17 private rooms with sunken horigotatsu (shoes off), 5 tables, 4 counter seats; parties up to 90; non-smoking, with a smoking space outside; wheelchair accessible; children welcome (Tabelog). English, Simplified Chinese and Korean menus with photos (Tabelog). Rooms call staff by an intercom (August 2026). Takeaway of seared mackerel and Tosa-maki sushi (official site). Opened 16 August 2010 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-18-24, X-city SHINSAIBASHI B1F — 2 min from Shinsaibashi Stn (Midosuji Line)',
    cuisine: 'Seafood izakaya built on two signatures (official site): live "swimming" squid sent from Hagi, Yamaguchi, kept in tanks and cut to order, with the legs then cooked as tempura or served as sashimi (2025–2026 reviews); and bonito tataki seared over straw, sent from Kochi, with salt or ponzu (official site; August 2026) · courses with all-you-can-drink: ¥10,000 (120 minutes, online), ¥12,000, ¥15,000; a nine-dish Torahachi course with drinks from ¥2,000 extra; extra squid (50 g to 100 g) or bonito (3 to 6 pieces) for ¥1,300 each (official site, prices from April 2025) · also sashimi platters, fried oysters, water-octopus tempura, sea-bream kamameshi, bonito yukke salad, charcoal-grilled chicken thigh, live-cooked Ise lobster at ¥3,000 per 100 g (August 2026), nodoguro · local sake (nine kinds with the premium drinks plan) and a wide shochu list · diners report ¥5,000–¥19,999 a head (2026)',
    website: SITE, gmaps: gm('寅八商店 心斎橋店'), menu_url: SITE,
    notes: "[Izakaya · Shinsaibashi, live squid and straw-seared bonito underground] Down in a basement near Shinsaibashi station, a sea-themed seafood izakaya of private horigotatsu rooms, opened in 2010 and one of three Torahachi Shoten shops (Umeda and Sannomiya are the others). Two things bring people in: squid sent live from Hagi and cut to order so the flesh is clear and crunchy, its legs returned as tempura; and Kochi bonito seared over burning straw, which one diner prefers with salt. Diners in 2026 add fried oysters, octopus tempura and sea-bream kamameshi, and note that in rough weather the squid may not arrive (the shop warns bookers by 15:00). Most groups take a course with all-you-can-drink (¥10,000–¥15,000). Some find it pricey and a few found the shellfish less fresh than the fish. In September 2026 the shop apologised after social-media criticism of how its nodoguro was described on the menu, explaining it served cut portions of a 1 kg fish and that it had rewritten the menu to show what is served. Open daily to midnight; English menus.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the official site: one of three Torahachi Shoten shops (Umeda, Shinsaibashi, Sannomiya); the signatures are live squid sent direct from Hagi, Yamaguchi, and bonito tataki seared over straw sent direct from Kochi. On 29 September 2026 the shop posted an apology after its nodoguro menu wording was criticised on social media: it had served cut portions of large (1 kg) nodoguro, the menu wording had been misleading, and the menu now states what is actually served. Opened 16 August 2010 (Tabelog). An August 2026 diner had visited the Hatsushitenjin (Umeda) shop before.',
      philosophy: 'Hospitality with fresh swimming squid and straw-seared bonito that other shops cannot copy (official site).', specialty: 'Live squid sashimi; straw-seared bonito tataki.',
      anecdotes: [
        { text: '"The bonito tataki is grilled with straw right after you order it, and it\'s incredibly tasty. You can choose between salt or ponzu, but I highly recommend the salt." — August 2026.', source: R + 'B533403424/' },
        { text: '"Unfortunately, due to bad weather, [the shop] couldn\'t source the swimming squid, which was disappointing." — September 2026, a company gathering of 26.', source: R + 'B535365476/' },
        { text: '"The shellfish like turban shell and oysters had a bit of a fishy smell and weren\'t as great." — October 2026.', source: R + 'B537567419/' },
      ],
      japanese_sources_summary: '公式サイト (torahachishoten.com): 寅八商店の店舗は梅田店、心斎橋店、三宮店。心斎橋店: 泳ぎイカと鰹の藁焼きタタキ、山口県萩直送の「泳ぎイカ」と高知直送の「鰹の藁焼タタキ」、直前まで生簀で泳いでいた活イカ、定休日なし、テイクアウト (炙り鯖寿司、土佐巻き寿司)、コースは2025年4月以降の価格で飲み放題付き12,000円・15,000円、120分飲み放題付きの特別コース10,000円、寅八コース (9品)、泳ぎイカ増量・カツオ増量は各1,300円、2026年9月29日「のどぐろのメニュー表記に関するお詫びと改善のお知らせ」(1kgサイズの大きなのどぐろの切り身を提供していたがメニューの記載が分かりづらく、提供内容がひと目で伝わる表記に修正)。食べログ (店舗会員): 海鮮・居酒屋・郷土料理、東心斎橋1-18-24 X-city SHINSAIBASHI B1F、毎日17:00〜24:00、年末年始休み、悪天候で泳ぎイカが入らない場合あり、お通し600円 (コースは除く)、110席 (個室17、掘りごたつ)、禁煙、車椅子可、英語・中国語・韓国語のメニュー、2010年8月16日オープン。口コミ(2025年10月〜2026年10月): 泳ぎイカ、ゲソは天ぷらに、藁焼きのカツオは塩で、カキフライ、水だこの天ぷら、鯛の釜飯、伊勢海老は100g 3,000円、天候でイカが入らない日も、貝は生臭いという声も。',
      confidence: 'medium', sources: [SITE, GROUP, NEWS, TB, R + 'B461993528/', R + 'B518668328/', R + 'B533403424/', R + 'B534243315/', R + 'B534730845/', R + 'B535055267/', R + 'B535181887/', R + 'B535365476/', R + 'B536418322/', R + 'B536553817/', R + 'B536843054/', R + 'B537567419/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos (Tabelog); order from private rooms by intercom (August 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-18-24 X-city SHINSAIBASHI B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news dated September 2026) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目18番24号 (go) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [SITE, R + 'B461993528/'],
    price_note: 'Course prices from the official site (tax included, prices from April 2025; read November 2026); dishes from 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Special course with 120-minute all-you-can-drink (online)', '¥10,000', 'Courses', 'ask', 'no', 'Official site; September 2026.', 'course_10000'),
      it('', '', 'Luxury course with all-you-can-drink', '¥12,000', 'Courses', 'ask', 'no', 'Official site; August 2026.', 'course_12000'),
      it('', '', 'Live squid sashimi, legs as tempura or sashimi', '', 'Signatures', 'ask', 'no', '2025–2026 reviews.', 'live_squid'),
      it('', '', 'Straw-seared bonito tataki', '', 'Signatures', 'ask', 'no', 'Official site; August 2026.', 'katsuo_tataki'),
      it('', '', 'Extra live squid (50 g to 100 g)', '¥1,300', 'Add-ons', 'ask', 'no', 'Official site.', 'extra_squid'),
    ] }, {
    cuisine: '2つの名物の海鮮居酒屋 (公式サイト): 山口県萩直送の「泳ぎイカ」を生簀から注文ごとにさばき、ゲソは天ぷらか刺身に (2025〜2026年の口コミ)。高知直送の鰹の藁焼きタタキは塩かポン酢で (公式サイト、2026年8月)・飲み放題付きのコース: 10,000円 (120分、ネット予約)、12,000円、15,000円。寅八コース (9品) は飲み放題2,000円から追加。泳ぎイカ (50gを100gに) とカツオ (3貫を6貫に) の増量は各1,300円 (公式サイト、2025年4月以降の価格)・ほかに刺身の盛り合わせ、カキフライ、水だこの天ぷら、鯛の釜飯、カツオのユッケサラダ、鶏ももの炭火焼き、100g 3,000円の伊勢海老 (2026年8月)、のどぐろ・地酒 (プレミアム飲み放題で9種) と焼酎の品ぞろえ・口コミの予算は1人5,000〜19,999円 (2026年)',
    neighborhood: '東心斎橋1-18-24 X-city SHINSAIBASHI B1F。Shinsaibashi 駅 (Midosuji Line) から徒歩2分',
    gf_detail: '要確認。グルテンの情報なし。泳ぎイカなどの刺身とカツオのタタキ (塩かポン酢) がいちばんシンプル。ゲソは頼まなければ天ぷら、揚げ物、持ち帰りの寿司、醤油ベースのたれも。',
    vegan_detail: 'ヴィーガンではありません。泳ぎイカ、カツオ、刺身が中心の海鮮居酒屋。',
    notes: '[居酒屋・心斎橋、地下で泳ぎイカと藁焼きのカツオ] 心斎橋駅に近い地下の、海をテーマにした掘りごたつの個室の海鮮居酒屋。2010年開業で、寅八商店3店のひとつ (ほかに梅田と三宮)。目当ては2つ: 萩から生きたまま届く泳ぎイカは注文ごとにさばかれ、透き通ってパキパキの食感、ゲソは天ぷらに。高知のカツオは藁で焼いたタタキで、塩がおすすめという声。2026年の口コミではカキフライ、水だこの天ぷら、鯛の釜飯も。海が荒れるとイカが入らないことがあり、予約客には当日15時までに連絡がある。多くは飲み放題付きのコース (10,000〜15,000円)。高いという声や、貝は魚ほど新鮮でなかったという声も。2026年9月には、のどぐろのメニュー表記が SNS で指摘されたことを受けて、1kgの大きなのどぐろの切り身を出していたと説明し、提供内容がわかる表記に改めたと謝罪した。毎日24時まで、英語のメニューあり。',
  });
}

// ================================================================ CAFE ANNON なんば本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27101706/'; const R = TB + 'dtlrvwlst/'; const SITE = 'https://cafe-annon.com/';
  const W = day(['08:00', '22:45']); const S = day(['08:30', '22:45']);
  put({
    id: 'osaka_cafe_annon_namba', name: 'CAFE ANNON なんば本店 (CAFE ANNON Namba)', category: 'OMNI',
    lat: 34.664258, lng: 135.504136, cuisine_type: 'cafe',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The soufflé pancakes and parfaits with langue de chat or monaka are wheat-based; the anmitsu (soft serve, bean paste, shiratama, kanten) and plain drinks are the dishes to ask about.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: soufflé pancakes, Cremia soft serve, cream and parfaits are all egg and dairy based; coffee and tea come plain.',
    hours_raw: 'Mon–Sat and holidays 08:00–22:45; Sun 08:30–22:45; last entry and last order 21:30 (Tabelog; official site, "may change"). No fixed closing day; occasional short days, e.g. 08:00–17:30 on 29 October (official site) and on 10 November (Tabelog). Web and dated reservations are suspended; same-day queueing at the shop only, with a LINE notice when your turn nears (official site; July and October 2026). Private rooms can be booked through Tabelog, except Fridays, weekends and holidays (official site; Tabelog). Birthday plate ¥350, ordered 2–3 days ahead (Tabelog). Cards and QR (PayPay, Alipay, WeChat Pay); no e-money (Tabelog). 39 seats: 10 on 1F with an open kitchen, 29 on 2F with a private room; non-smoking; children welcome, kids\' menu (official site; Tabelog). English, Chinese and Korean menus with photos; QR mobile ordering (Tabelog; October 2026). Opened 9 November 2017 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: W, 6: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 4-20, in Ura Namba — 5 min from Namba Stn (Nankai, Midosuji Line)',
    cuisine: 'Soufflé pancakes made to order and parfaits, in a Japanese room of Ryukyu tatami and wood (official site) · soufflé pancakes cooked one by one on a copper griddle, about 20 minutes (October 2026): the plain NON pancake, fruit and strawberry pancakes, chocolate-banana, Japanese-style pancakes with black syrup, matcha syrup, shiratama and monaka (2026) · parfaits topped with Cremia soft serve: strawberry and melon with langue de chat, coffee jelly, chocolate, matcha (official site; 2026) · Anmitsu NON ¥1,500 with a set coffee ¥300 (August 2026); Shirokuma kakigori (July 2026) · coffee brewed by siphon cup by cup; Ronnefeldt teas (tea ¥580, August 2026); mixed juice; floats; café latte (official site; 2026)',
    website: SITE, gmaps: gm('CAFE ANNON なんば本店'), menu_url: SITE,
    notes: "[Café · Ura Namba, soufflé pancakes until late] A calm two-storey café of Ryukyu tatami and wood in Ura Namba, named for the Japanese word for peace and quiet, open from breakfast until 22:45. The draw is soufflé pancakes made to order on a copper griddle, so light they vanish on the tongue (allow about 20 minutes), alongside parfaits crowned with Cremia soft serve and a generous anmitsu. Coffee is brewed by siphon a cup at a time and the teas are Ronnefeldt. Online booking is suspended: queue at the shop and LINE pings you when your turn comes (20 minutes on a July 2026 Sunday night; six groups ahead in October). Many guests are overseas visitors. Private rooms upstairs can be booked on weekdays.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Per the official site: a hideaway café in Namba Sennichimae/Ura Namba built around "a space to take your time"; ANNON means 安穏, calm and at ease; 1F is an open kitchen, 2F has private rooms and tables for solo guests; everything is made after ordering; pancakes from a house batter recipe; siphon coffee; Ronnefeldt tea; Cremia soft serve in the parfaits. The same company runs a Shinsaibashi shop and たまごとミルク at ららぽーと門真 (opened 17 April 2023). Opened 9 November 2017 (Tabelog).',
      philosophy: 'A space to take your time; every dish made carefully after you order (official site).', specialty: 'Soufflé pancakes; Cremia parfaits; siphon coffee.',
      anecdotes: [
        { text: '"These pancakes are meticulously cooked one by one on a copper griddle after receiving your order. As a result, it takes about 20 minutes to serve" — October 2026, an evening visit.', source: R + 'B537630211/' },
        { text: '"It seemed to be quite popular among foreign tourists, and there was a 20-minute wait to get in." — July 2026, a Sunday around 8 PM.', source: R + 'B532565364/' },
        { text: '"I asked if [the staff] could remove the chocolate and banana since I don\'t like them together, and [the staff] kindly did." — October 2026.', source: R + 'B538401397/' },
      ],
      japanese_sources_summary: '公式サイト (cafe-annon.com): CAFE ANNON なんば本店、観光客でにぎわう難波千日前・裏なんばの隠れ家的カフェ、「ゆっくり過ごせる空間」がコンセプト、琉球畳と木のぬくもりの和テイスト、ふわとろスフレパンケーキ、サイフォンで一杯ずつ淹れるコーヒー、ANNON は《安穏》の意、1階はオープンキッチン、2階に個室とお一人様のテーブル席、全メニュー注文後に作る、紅茶はロンネフェルト、パフェのソフトクリームはクレミア、WEB予約・日時指定予約は停止中で店頭での当日順番待ちのみ、個室のみ食べログで予約 (金土日祝除く)、8:00〜22:45 (最終入店とL.O.21:30)、10月29日は短縮営業、定休日なし、1階10席・2階29席、心斎橋店、たまごとミルク (ららぽーと門真、2023年4月17日オープン)。食べログ (店舗会員): カフェ・パンケーキ・スイーツ、日曜は8:30から、誕生日プレート350円、カード・QR可、英語・中国語・韓国語のメニュー、2017年11月9日オープン。口コミ(2026年7月〜10月): 銅板で1枚ずつ焼くスフレパンケーキは約20分、クレミアのパフェ、アンみつ NON 1,500円、セットのコーヒー300円、紅茶580円、LINE で順番を知らせてくれる、海外からの客も多い。',
      confidence: 'medium', sources: [SITE, TB, R + 'B532257843/', R + 'B532565364/', R + 'B532980041/', R + 'B533515887/', R + 'B534067334/', R + 'B535439387/', R + 'B536083440/', R + 'B536821599/', R + 'B537085922/', R + 'B537474604/', R + 'B537630211/', R + 'B538401397/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos; QR mobile ordering (Tabelog; October 2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前4-20',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (October notice) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前4番20号 (go) 8m; 7m from Bistro Olympic (osaka_bistro_olympic_uranamba, next door at 千日前4-19); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B533515887/'],
    price_note: 'Prices from an August 2026 review (tax included as reported); the official site shows menus without prices in the pages read.', last_checked: TODAY, items: [
      it('', '', 'Anmitsu NON (soft serve, bean paste, shiratama, kanten)', '¥1,500', 'Sweets', 'ask', 'no', 'August 2026.', 'anmitsu'),
      it('', '', 'Soufflé pancakes (NON)', '', 'Pancakes', 'no', 'no', 'September–October 2026.', 'souffle_pancake'),
      it('', '', 'Coffee as a set drink (siphon)', '¥300', 'Drinks', 'ask', 'ask', 'August 2026.', 'set_coffee'),
      it('', '', 'Tea (Ronnefeldt)', '¥580', 'Drinks', 'ask', 'ask', 'August 2026.', 'tea'),
    ] }, {
    cuisine: '注文ごとに焼くスフレパンケーキとパフェ、琉球畳と木の和の店内 (公式サイト)・銅板で1枚ずつ焼くスフレパンケーキは約20分 (2026年10月): プレーンの NON、フルーツや苺のパンケーキ、チョコバナナ、黒蜜や抹茶蜜、白玉、最中の和のパンケーキ (2026年)・クレミアのソフトクリームをのせたパフェ: 苺とメロンにラングドシャ、コーヒーゼリー、チョコレート、抹茶 (公式サイト、2026年)・アンみつ NON 1,500円とセットのコーヒー300円 (2026年8月)、しろくまのかき氷 (2026年7月)・サイフォンで一杯ずつ淹れるコーヒー、ロンネフェルトの紅茶 (2026年8月は580円)、ミックスジュース、フロート、カフェラテ (公式サイト、2026年)',
    neighborhood: '難波千日前4-20、裏なんば。南海本線・御堂筋線の難波駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。スフレパンケーキやラングドシャ、最中のパフェは小麦を使う。アンみつ (ソフトクリーム、餡、白玉、寒天) とシンプルな飲み物は確認を。',
    vegan_detail: 'ヴィーガンではありません。スフレパンケーキ、クレミアのソフトクリーム、生クリーム、パフェはどれも卵と乳製品。コーヒーと紅茶はそのままでも。',
    notes: '[カフェ・裏なんば、夜まで食べられるスフレパンケーキ] 裏なんばの、琉球畳と木の落ち着いた2階建てのカフェで、名前は《安穏》から。朝から22時45分まで営業。目当ては銅板で注文ごとに焼く、口の中で消えるほど軽いスフレパンケーキ (約20分かかる)。クレミアのソフトクリームのパフェやたっぷりのアンみつも。コーヒーはサイフォンで一杯ずつ、紅茶はロンネフェルト。ネット予約は停止中で、店頭で順番待ちをすると LINE で知らせてくれる (2026年7月の日曜の夜は20分待ち、10月は6組待ち)。海外からの客も多い。2階の個室は平日なら予約できる。',
  });
}

// ================================================================ 小籠包と本格中華 堀江ブルー
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27019090/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '15:30'], ['18:00', '23:30']); const WE = day(['11:00', '15:30'], ['17:00', '23:30']);
  put({
    id: 'osaka_horie_blue_minamihorie', name: '小籠包と本格中華 堀江ブルー (Horie Blue)', category: 'OMNI',
    lat: 34.669428, lng: 135.495908, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Xiaolongbao, dim sum and most Chinese sauces use wheat or soy sauce; congee, rice and salad-bar items at lunch are the places to start asking.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: Chinese dishes of pork, seafood and chicken; dim sum fillings are meat or seafood.',
    hours_raw: 'Mon–Fri 11:30–15:30 (last order 15:00) and 18:00–23:30 (last order 23:00); Sat, Sun and holidays 11:00–15:30 and 17:00–23:30; closed 1–2 January only (Tabelog). Reservations; walk-ins found room at a weekday lunch (October 2026). Dinner adds a table charge of ¥330, ¥660 or ¥1,100 a person depending on the seat (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 72 seats, couple seats, sofas, private rooms for 2 to over 30; standing parties up to 150; non-smoking; children welcome (Tabelog). On the 2nd floor by the canal, with a night view; window views were blocked by construction in September 2026.',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Horie 1-5-26, キャナルテラス堀江 東棟 2F, by the canal — 3 min from JR Namba, Osaka-Namba (Kintetsu, Hanshin) or Namba Stn (Yotsubashi Line)',
    cuisine: 'Modern Chinese with xiaolongbao and dim sum in a blue-lit room (2026 reviews) · lunch: Chinese "gozen" set with a choice of main (e.g. six dim sum, sweet-and-sour pork) ¥2,189, with soup, salad bar, free Chinese tea and tea, and white rice or congee with refills (October 2026); a dim-sum lunch with afternoon tea for ¥1,700 more; the Yang Guifei course of dim sum, congee, afternoon-tea sweets (peach, mango) and Chinese tea ¥2,700 (September 2026) · dinner: an assortment of eight Chinese appetizers, juicy xiaolongbao, sweet-and-sour pork, shrimp fried rice, seafood and meat dishes; à la carte revamped in October 2026; courses and all-you-can-eat (Tabelog; October 2026) · shochu, wine and cocktails',
    website: null, gmaps: gm('小籠包と本格中華 堀江ブルー'), menu_url: null,
    notes: "[Chinese · Minami-Horie, xiaolongbao by the canal] On the second floor of Canal Terrace Horie, a stylish Chinese restaurant lit in blue, with couple seats, sofas and big windows over the river and the night view. Lunch is the bargain: a Chinese set with a main of your choice (around ¥2,200) comes with soup, a salad bar, free Chinese tea and congee refills, or the Yang Guifei set adds afternoon-tea sweets for ¥2,700. At night the draw is juicy xiaolongbao, an eight-kind appetizer plate, sweet-and-sour pork and shrimp fried rice, from an à la carte menu rewritten in October 2026. Reviews are mostly warm; one September 2026 diner found a sticky floor and a table that needed wiping, and construction blocked the window view that month. Dinner adds a table charge of ¥330–¥1,100. Closed only on 1–2 January.",
    chef_bio: { chef_name: null, roles: ['Kitchen and staff (unnamed)'], origin: null,
      background: 'Shop-maintained (corporate-member) Tabelog listing; no opening date or official site found. The listing says the kitchen is particular about fish, shochu, wine and cocktails, with a health-conscious menu; it was closed for renovation on 7–10 April 2025. A regular reports the dinner à la carte menu was revamped in October 2026.',
      philosophy: null, specialty: 'Xiaolongbao; dim-sum lunches; eight-kind appetizer plate.',
      anecdotes: [
        { text: '"With homemade dim sum, a salad bar, soup, and all-you-can-drink Chinese tea, the Afternoon Set for JPY 2700 is an incredible deal!" — September 2026, the Yang Guifei set.', source: R + 'B536545172/' },
        { text: '"After sitting down, a staff member mentioned [the staff] would wipe the table because it was a bit dirty." — September 2026, an 11:30 lunch booking.', source: R + 'B536414625/' },
        { text: '"I heard that the dinner a la carte menu at Horie Blue has been revamped, so I decided to check it out." — October 2026, a repeat visit.', source: R + 'B202666647/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 小籠包と本格中華 堀江ブルー、中華料理・ダイニングバー・小籠包、西区南堀江1-5-26 キャナルテラス堀江 東棟 2F、JR Namba 駅から徒歩3分、平日11:30〜15:30 (L.O.15:00)・18:00〜23:30 (L.O.23:00)、土日祝11:00〜15:30・17:00〜23:30、1月1日・2日のみ休み、ディナーはテーブルチャージ330円・660円・1,100円、カード・PayPay可、72席、個室、立食150名、禁煙、夜景、子ども可、2025年4月7日〜10日は改装で休業。口コミ(2026年4月〜10月): 川沿いの夜景、青い照明、カップルシート、中華八種前菜盛り合わせ、小籠包、中華御膳ランチ2,189円 (スープ、サラダバー、中国茶飲み放題、お粥おかわり)、楊貴妃のアフタヌーンティーランチ2,700円、点心ランチにアフタヌーンティー追加1,700円、酢豚、エビチャーハン、ディナーのアラカルトを一新、床がべたついていたという声、工事で窓の景色が見えない日も。',
      confidence: 'medium', sources: [TB, R + 'B202666647/', R + 'B536394249/', R + 'B536414625/', R + 'B536545172/', R + 'B536602698/', R + 'B536717843/', R + 'B537031121/', R + 'B537141630/', R + 'B537852146/', R + 'B537932536/', R + 'B538013565/', R + 'B538227641/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set lunches with a salad and tea bar; book for dinner. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-5-26 キャナルテラス堀江 東棟 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目5番26号 (go) 36m (a multi-building canal-side complex); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537852146/', R + 'B536545172/', R + 'B536717843/'],
    price_note: 'Lunch prices from September–October 2026 reviews (tax included as reported); dinner adds a table charge.', last_checked: TODAY, items: [
      it('', '', 'Chinese gozen lunch (choice of main; soup, salad bar, tea, congee refills)', '¥2,189', 'Lunch', 'ask', 'no', 'October 2026.', 'gozen_lunch'),
      it('', '', 'Yang Guifei lunch: dim sum, congee, afternoon tea, Chinese tea', '¥2,700', 'Lunch', 'no', 'no', 'September 2026.', 'yang_guifei'),
      it('', '', 'Xiaolongbao', '', 'Dinner', 'no', 'no', 'October 2026.', 'xiaolongbao'),
      it('', '', 'Assortment of eight Chinese appetizers', '', 'Dinner', 'ask', 'no', 'April and October 2026.', 'eight_appetizers'),
    ] }, {
    cuisine: '青い照明の店内で、小籠包と点心のモダンな中華 (2026年の口コミ)・ランチ: メインを選べる中華御膳2,189円 (例: 点心6種、酢豚)、スープ、サラダバー、中国茶と紅茶の飲み放題、白ご飯かお粥のおかわりつき (2026年10月)。点心ランチにアフタヌーンティーを1,700円で追加。点心、お粥、アフタヌーンティーのお菓子 (桃、マンゴー)、中国茶の楊貴妃コース2,700円 (2026年9月)・ディナー: 中華八種前菜盛り合わせ、肉汁たっぷりの小籠包、酢豚、エビチャーハン、魚介や肉の料理。2026年10月にアラカルトを一新。コースや食べ放題も (食べログ、2026年10月)・焼酎、ワイン、カクテル',
    neighborhood: '南堀江1-5-26 キャナルテラス堀江 東棟 2F、川沿い。JR Namba 駅、Osaka-Namba 駅 (Kintetsu、Hanshin)、Namba 駅 (Yotsubashi Line) から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。小籠包、点心、多くの中華のたれは小麦や醤油を使う。ランチのお粥、ご飯、サラダバーから確認を。',
    vegan_detail: 'ヴィーガンではありません。豚、魚介、鶏の中華料理で、点心の具も肉か魚介。',
    notes: '[中華・南堀江、川沿いの小籠包] キャナルテラス堀江の2階、青い照明のおしゃれな中華で、カップルシートやソファ、川と夜景を望む大きな窓。お得なのは昼で、メインを選べる中華御膳 (2,200円ほど) にスープ、サラダバー、中国茶の飲み放題、お粥のおかわりがつき、楊貴妃のセットはアフタヌーンティーのお菓子つきで2,700円。夜は肉汁たっぷりの小籠包、八種の前菜盛り合わせ、酢豚、エビチャーハンで、アラカルトは2026年10月に一新。口コミはおおむね好評だが、2026年9月には床がべたつき、テーブルを拭き直されたという声や、工事で窓の景色が見えなかった日も。夜はテーブルチャージ330〜1,100円。1月1日・2日のみ休み。',
  });
}

// ================================================================ Pizzeria CUORERUDINO
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27064354/'; const R = TB + 'dtlrvwlst/'; const SITE = 'http://www.cuorerudino.com/';
  const H = day(['11:30', '22:00']);
  put({
    id: 'osaka_pizzeria_cuorerudino_minamihorie', name: 'Pizzeria CUORERUDINO', category: 'OMNI',
    lat: 34.671786, lng: 135.494915, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Pizza, pasta and the yudane bread are wheat; the appetizer plates, salads and meat dishes such as the T-bone steak are where to start asking.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The site describes vegetable-heavy dishes based on Italian home cooking, but nothing is labelled vegan; most pizzas carry mozzarella.',
    hours_raw: 'Daily 11:30–22:00: lunch 11:30–15:30 (last order 14:30), dinner 17:00–22:00 (last order 21:00), café on weekdays 11:30–22:00 (last order 21:00); open all year (Tabelog). Reservations, but not for café or drinks only; weekend lunch bookings only for 11:30–12:00 and 13:30–15:00; seats cannot be chosen (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), IC cards, e-money and PayPay (Tabelog). 70 seats with sofas, a counter and a terrace (dogs welcome on the terrace, October 2026); private rooms and hire for 10 to over 50; non-smoking, with an ashtray by the door; children welcome; takeaway and delivery (Tabelog; official site). Opened 6 April 2012 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Minami-Horie 1-14-26, facing the south side of Horie Park, behind Orange Street — 5 min from Yotsubashi Stn exit 6',
    cuisine: 'Wood-fired pizza with a chewy yet crisp crust, robust meat dishes and vegetable-rich home-style plates, with plenty of wine (official site) · pizza: Margherita ¥1,530, Pescatore, melanzane with fried eggplant and anchovy, a seasonal Stagione ¥2,650, the day\'s lunch pizza (2026) · lunch: weekly pasta lunch with appetizers and yudane bread ¥1,380, monthly fresh-pasta lunch ¥1,580, pasta set ¥2,100, pizza set from ¥2,500 (September 2026); yudane bread with salted butter as an extra · appetizers: an assortment for two ¥2,400 (quiche, prosciutto, rice croquettes, pâté, bonito tataki, soup, October 2026), grapes with buffalo mozzarella and prosciutto, grilled octopus with basil potato salad (October 2026) · CUORERUDINO T-bone steak at dinner (from February 2026), kakigori in summer 2026, a party plan with 90 minutes of drinks (official site) · Heartland draft ¥800 (October 2026); wine and cocktails',
    website: SITE, gmaps: gm('Pizzeria CUORERUDINO 南堀江'), menu_url: SITE,
    notes: "[Pizza · Minami-Horie, wood-fired pizza facing Horie Park] A big, lively pizzeria opposite Horie Park, open since 2012, with a large wood-fired oven at the back, sofas, a counter and a terrace where dogs are welcome. The pizza has a soft, thin base and a chewy-crisp rim (Margherita ¥1,530), and diners rave about the yudane bread drenched in salted butter that comes with lunch. Lunch sets with appetizers start at ¥1,380 and are popular; at night the appetizer platter, pastas and, since February 2026, a T-bone steak come out, with plenty of wine. Weekend lunch bookings are limited to certain times. Open every day.",
    chef_bio: { chef_name: null, roles: ['Kitchen team (unnamed)'], origin: null,
      background: 'Per the official site: pizza that is chewy yet crisp to bite, punchy meat dishes, vegetable-rich side dishes based on Italian home cooking and a full wine list; takeout, delivery and party plans; a T-bone steak at dinner from February 2026 and kakigori from June 2026. Opened 6 April 2012 (Tabelog).',
      philosophy: null, specialty: 'Wood-fired pizza; yudane bread with butter; appetizer platters.',
      anecdotes: [
        { text: '"I went for lunch on the terrace with my beloved dog." — October 2026, a pasta lunch.', source: R + 'B536691053/' },
        { text: '"Fluffy Yudane bread with plenty of salted butter!!! I keep coming back for this lunch just to have it." — September 2026.', source: R + 'B537467187/' },
        { text: '"At first glance, it might seem like a trendy family restaurant popular with young people and families with small children, but it pleasantly defies expectations." — September 2026, a first dinner.', source: R + 'B536537576/' },
      ],
      japanese_sources_summary: '公式サイト (cuorerudino.com): 堀江・四ツ橋のイタリアン ピッツェリア クオーレルディーノ、もっちりだけどサクッとした歯切れのピッツァ、がっつりパンチのある肉料理、イタリアンマンマをベースにした野菜たっぷりの惣菜、ワインも充実、テイクアウト、デリバリー、パーティープラン、2026年2月にディナー限定の CUORERUDINO T-BONE STEAK、2026年6月にかき氷、2026年9月に90分飲み放題付きのパーティープラン。食べログ (店舗会員): ピザ・カフェ・イタリアン、南堀江1-14-26、Horie Park の南側の目の前、毎日11:30〜22:00 (ランチ11:30〜15:30、ディナー17:00〜22:00、平日はカフェも)、年中無休、土日祝のランチは予約できる時間が限られる、カード・電子マネー・PayPay可、70席、テラス、貸切可、禁煙 (入口の横に灰皿)、子ども可、2012年4月6日オープン。口コミ(2026年9月〜10月): 大きな薪窯、マルゲリータ1,530円、湯種パンと塩バター、パスタランチ1,380円、前菜盛り合わせ2人前2,400円、季節のスタジオーネ2,650円、テラスに犬と、家族連れも多い。',
      confidence: 'medium', sources: [SITE, TB, R + 'B489288649/', R + 'B536537576/', R + 'B536691053/', R + 'B537467187/', R + 'B537519455/', R + 'B537521994/', R + 'B537706082/', R + 'B538008821/', R + 'B538029272/', R + 'B538306806/', R + 'B538389852/', R + 'B538390038/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'A large, casual pizzeria; book lunch at the allowed weekend times. No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市西区南堀江1-14-26',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news dated September 2026) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市西区南堀江一丁目14番26号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537467187/', R + 'B537521994/', R + 'B538390038/'],
    price_note: 'Prices from September–October 2026 reviews (tax included as reported).', last_checked: TODAY, items: [
      it('', '', 'Margherita', '¥1,530', 'Pizza', 'no', 'no', 'October 2026.', 'margherita'),
      it('', '', 'Weekly pasta lunch (appetizers, yudane bread)', '¥1,380', 'Lunch', 'no', 'ask', 'September 2026.', 'pasta_lunch'),
      it('', '', 'Pizza set (appetizers, dessert, drink)', '¥2,500', 'Lunch', 'no', 'no', 'September 2026; from ¥2,500.', 'pizza_set'),
      it('', '', 'Assorted appetizers for two', '¥2,400', 'Starters', 'ask', 'no', 'October 2026.', 'antipasti'),
      it('', '', 'Seasonal Stagione pizza', '¥2,650', 'Pizza', 'no', 'no', 'October 2026.', 'stagione'),
    ] }, {
    cuisine: '薪窯で焼く、もっちりしてサクッとした歯切れのピッツァ、がっつりした肉料理、イタリアンマンマの野菜たっぷりの惣菜、ワインも充実 (公式サイト)・ピッツァ: マルゲリータ1,530円、ペスカトーレ、揚げなすとアンチョビのメランザーネ、季節のスタジオーネ2,650円、ランチの日替わりピッツァ (2026年)・ランチ: 前菜と湯種パンの週替わりパスタランチ1,380円、月替わりの生パスタランチ1,580円、パスタセット2,100円、ピッツァセット2,500円から (2026年9月)。塩バターたっぷりの湯種パンは追加で・前菜: 2人前の盛り合わせ2,400円 (キッシュ、生ハム、ライスコロッケ、パテ、カツオのたたき、スープ、2026年10月)、ぶどうとブッファラのモッツァレラと生ハム、タコのグリルとバジルのポテトサラダ (2026年10月)・2026年2月からディナー限定の CUORERUDINO T-BONE STEAK、2026年夏のかき氷、90分飲み放題付きのパーティープラン (公式サイト)・ハートランドの生800円 (2026年10月)、ワインとカクテル',
    neighborhood: '南堀江1-14-26、Horie Park の南側の目の前、Orange Street の裏。Yotsubashi 駅6番出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。ピッツァ、パスタ、湯種パンは小麦。前菜の盛り合わせ、サラダ、T-bone ステーキなどの肉料理から確認を。',
    vegan_detail: '要確認。サイトにはイタリアンマンマをベースにした野菜たっぷりの惣菜とあるが、ヴィーガンの表示はなく、多くのピッツァにはモッツァレラ。',
    notes: '[ピッツァ・南堀江、Horie Park の前の薪窯ピッツァ] Horie Park の向かいの、2012年からの大きくにぎやかなピッツェリア。奥に大きな薪窯、ソファ、カウンター、犬も連れて行けるテラス。ピッツァは薄くやわらかい生地にもっちりサクッとした縁 (マルゲリータ1,530円)、ランチの塩バターたっぷりの湯種パンが絶賛されている。前菜つきのランチは1,380円からで人気、夜は前菜の盛り合わせ、パスタ、2026年2月からは T-bone ステーキも、ワインとともに。土日のランチは予約できる時間が限られる。毎日営業。',
  });
}

save();
