// Osaka sweep (2-mile circle around Dotonbori), batch 217 — mom-phase clean-up: near-centre listings with 30+ reviews
// passed over earlier without a skip() mark (some only because the name sounds like a person's, no longer a reason).
//   + 二代目憲 hirayama Nidaime Norihirayama (Tosa/Kochi izakaya, straw-grilled bonito tataki; Higashi-Shinsaibashi)
//   + 神戸牛すてーきはうす香西 Kobe Beef Steak House Kozai (teppan steak counter, ¥1,540 Wagyu hamburg lunch; Higashi-Shinsaibashi)
//   + なかむら Nakamura (long-running à la carte sushi counter full of regulars; Higashi-Shinsaibashi)
//   + イタメシヤ フジ Itameshiya Fuji (casual charcoal-grill Italian with happy hour; Higashi-Shinsaibashi)
//   Chain checks: none of the four is in data/osaka.json, and no second branch turned up in shops.jsonl or web search.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-10-30';
const { put, skip, save } = openCitySweep('osaka', TODAY, 217);
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 二代目憲 hirayama
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27106684/'; const R = TB + 'dtlrvwlst/';
  const H = day(['18:00', '24:00']);
  put({
    id: 'osaka_nidaime_norihirayama_higashishinsaibashi', name: '二代目憲 hirayama (Nidaime Norihirayama)', category: 'OMNI',
    lat: 34.671427, lng: 135.505149, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; the bonito tataki can be had with salt instead of ponzu or sauce, but tempura, fried oysters and a deep-fried eel dish are on the menu, so ask what is safe.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Tosa fish-and-meat izakaya built around bonito tataki.',
    hours_raw: 'Mon–Sat 18:00–24:00 (last order 23:30); closed Sunday and on a Monday after a public holiday; open until sold out (Tabelog). The shop says it stays closed on days when it cannot get bonito good enough (Tabelog, shop-provided). Reservations accepted; courses for two or more must be booked by the day before (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). Appetizer charge ¥300 (Tabelog). 18 seats; the shop describes 4 counter seats and 3 tables that join for groups, private hire up to 20 (Tabelog). Smoking allowed (Tabelog; an April 2026 review). On the 2nd floor of the Sayoka Building; the building entrance is hard to spot (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 2-4-6, Sayoka Bldg 2F — 2 min from Nagahoribashi Stn Exit 7, 8 min from Shinsaibashi Stn',
    cuisine: 'Tosa (Kochi) izakaya with a sake focus, cooked by an owner from Kochi (Tabelog) · straw-grilled fresh bonito tataki, whole fish sourced by the owner, grilled over burning straw in front of you, thick or thin cut, with salt, wasabi or sauce · Kochi ingredients such as Utsubo, Tougoro and Chambara-gai shellfish; seasonally sunfish, bear and sea turtle (Tabelog) · white shrimp tempura, red beef tataki, grilled eel (shirayaki), straw-grilled mentaiko, Tosa maki, firefly squid, fried oysters, deep-fried eel, steak, tea soba with egg yolk, honey sweet potato ice cream (2025–2026 reviews) · courses with a small hot pot (hamo and eel shabu-shabu, beef shabu-shabu, grouper; 2022–2025 reviews) · all-Kochi sake and shochu, including the chestnut shochu Dabada Hiburi and Suigei sake (Tabelog)',
    website: null, gmaps: gm('二代目憲 hirayama 東心斎橋'), menu_url: null,
    notes: "[Izakaya · Higashi-Shinsaibashi, Kochi-style straw-grilled bonito by Nagahoribashi] A second-floor Tosa-cuisine izakaya two minutes from Nagahoribashi Station, run by an owner from Kochi who sources whole fresh bonito and sears it over flaming straw in front of you — and keeps the shop shut on days the fish isn't good enough. Regulars all give the same advice: order the tataki thick-cut with salt; one reviewer reports that people from Kochi call it the best in Osaka. Around it come Kochi rarities (Utsubo, Tougoro, Chambara-gai clams, and in season sunfish, bear or sea turtle), white shrimp tempura, red-beef tataki, straw-grilled mentaiko and a tea soba finished with egg yolk, with an all-Kochi sake list. Courses for two or more (book a day ahead) bring a small hot pot. Portions are generous; smoking is allowed.",
    chef_bio: { chef_name: null, roles: ['Owner'], origin: 'Kochi (Tabelog, shop-provided)', background: 'Tosa-cuisine izakaya whose owner comes from Kochi and sources the bonito directly (Tabelog, shop-provided). A diner calls the owner quite handsome (September 2025 review).', philosophy: 'Serve only the best bonito: the shop stays closed on days the catch is not up to standard (Tabelog, shop-provided).', specialty: 'Straw-grilled fresh bonito tataki, thick-cut with salt.',
      anecdotes: [
        { text: '"The Katsuo no Tataki here is truly delicious—so much so that people from Kochi say this place is the best in Osaka! I highly recommend trying it thickly sliced with salt." — May 2026.', source: R + 'B529486819/' },
        { text: '"They are famous for their grilled dishes, especially the thick cuts that come with a slit in the middle, allowing you to insert condiments and enjoy them with salt!" — August 2023, a regular\'s second of six visits through November 2025.', source: R + 'B460103914/' },
      ],
      japanese_sources_summary: '食べログ: 二代目憲 hirayama、大阪市中央区東心斎橋2-4-6 さよかビル 2F、長堀橋駅7番出口から徒歩2分、心斎橋駅から徒歩8分、月〜土18:00〜24:00 (L.O. 23:30)、日曜と祝日明けの月曜休み、売り切れ次第終了、予約可 (コースは2名から前日まで)、カード可、電子マネー・QR不可、付き出し一品300円、18席、喫煙可。店の紹介: 高知出身の店主の本格土佐料理、店主が仕入れる丸ごとの生カツオを目の前で藁焼き、良いカツオがない日は休み、厚切りか薄切り、塩・わさび・タレで、Utsubo・Tougoro・Chambara-gai などの高知の食材、季節によってマンボウ・熊・ウミガメ、高知の地酒と焼酎 (Dabada Hiburi、Suigei)、カウンター4席とテーブル3卓、貸切20名まで。口コミ(2025年9月〜2026年10月): 厚切りの塩たたきがいちばん、高知の人も大阪一という、白海老の天ぷら、赤牛のたたき、鰻の白焼き、藁焼きの明太子、土佐巻き、ホタルイカ、カキフライ、鰻の揚げもの、ステーキ、卵黄をからめる茶そば、蜂蜜さつまいものアイス、量が多い、たばこが吸える、ポン酢は別がよかったという声も。',
      confidence: 'medium', sources: [TB, R + 'B460103914/', R + 'B513531458/', R + 'B514643399/', R + 'B520961315/', R + 'B528485831/', R + 'B529486819/', R + 'B537624620/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book courses a day ahead; smoking allowed inside (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-4-6 さよかビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026. The website on the listing (nidaime-nori.com) now shows an unrelated construction-logistics page, so it is not linked.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目4番6号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B537624620/', R + 'B514643399/'],
    price_note: 'No dish prices in the sources; appetizer charge ¥300 (Tabelog).', last_checked: TODAY, items: [
      it('', '', 'Straw-grilled bonito tataki, thick-cut with salt', '', 'Signature', 'ask', 'no', 'October 2026.', 'katsuo'),
      it('', '', 'White shrimp tempura', '', 'À la carte', 'no', 'no', 'October 2026.', 'shiroebi'),
      it('', '', 'Straw-grilled mentaiko', '', 'À la carte', 'ask', 'no', 'October 2026.', 'mentaiko'),
      it('', '', 'Grilled eel (shirayaki)', '', 'À la carte', 'ask', 'no', 'October 2026.', 'shirayaki'),
      it('', '', 'Tea soba with egg yolk', '', 'To finish', 'no', 'no', 'April 2026.', 'chasoba'),
    ] }, {
    cuisine: '日本酒に力を入れた土佐 (高知) 料理の居酒屋、高知出身の店主 (食べログ)・店主が仕入れる丸ごとの生カツオを目の前で藁焼きにしたたたき、厚切りか薄切り、塩・わさび・タレで・Utsubo、Tougoro、Chambara-gai などの高知の食材、季節によってマンボウ、熊、ウミガメ (食べログ)・白海老の天ぷら、赤牛のたたき、鰻の白焼き、藁焼きの明太子、土佐巻き、ホタルイカ、カキフライ、鰻の揚げもの、ステーキ、卵黄をからめる茶そば、蜂蜜さつまいものアイス (2025〜2026年の口コミ)・コースには小鍋 (鱧と鰻のしゃぶしゃぶ、牛しゃぶ、クエ。2022〜2025年の口コミ)・高知の地酒と焼酎のみ、栗焼酎 Dabada Hiburi や Suigei など (食べログ)',
    neighborhood: '東心斎橋2-4-6 さよかビル 2F。長堀橋駅7番出口から徒歩2分、心斎橋駅から徒歩8分',
    gf_detail: '要確認。グルテンの情報なし。カツオのたたきはポン酢やタレのかわりに塩でも食べられるが、天ぷら、カキフライ、鰻の揚げものもあるので、大丈夫なものを確認して。',
    vegan_detail: 'ヴィーガンではありません。カツオのたたきが中心の、魚と肉の土佐料理の居酒屋。',
    notes: '[居酒屋・東心斎橋、長堀橋の高知流カツオの藁焼き] 長堀橋駅から徒歩2分、ビルの2階の土佐料理の居酒屋。高知出身の店主が丸ごとの生カツオを仕入れ、目の前で燃える藁で一気に焼く。良いカツオがない日は店を開けないという。常連のすすめはみな同じで、厚切りを塩で。高知の人も大阪一と言うという口コミも。ほかに高知の珍しい食材 (Utsubo、Tougoro、Chambara-gai、季節によってマンボウ、熊、ウミガメ)、白海老の天ぷら、赤牛のたたき、藁焼きの明太子、卵黄をからめる茶そば。酒はすべて高知のもの。2名からのコース (前日までに予約) には小鍋がつく。量はたっぷりで、店内はたばこが吸える。',
  });
}

// ================================================================ 神戸牛すてーきはうす香西
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27005525/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '23:00']);
  put({
    id: 'osaka_kobe_beef_steak_house_kozai', name: '神戸牛すてーきはうす香西 (Kobe Beef Steak House Kozai)', category: 'OMNI',
    lat: 34.67279, lng: 135.502587, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; steaks and the hamburg come with salt or a house steak sauce, and courses add corn potage, a homemade dressing and garlic rice, so ask about sauces and seasonings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: teppanyaki courses of Kobe beef, Wagyu and seafood.',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00, last seating 13:30) and 17:00–23:00 (last order 22:00, last seating 21:30); open year-round except the New Year break, 31 December–2 January (Tabelog). Reservations accepted; parties of 5 or more by phone (Tabelog). Cards; PayPay and Alipay; no e-money; no service charge (Tabelog). 12 seats at two 6-seat counters, up to 15 by arrangement; private hire up to 20; non-smoking; free Wi-Fi; English menu; children welcome, kids menu (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 1-17-15, 丸清ビル 2F, just off Shinsaibashi-suji — 3 min from Shinsaibashi Stn Exit 5 or 6',
    cuisine: 'Teppanyaki steak counter (12 seats) · Kobe beef and black Wagyu grilled in front of you · Premium Kobe Beef Loin Steak Course 120g, 7 items ¥15,970; with two seafood items ¥18,170; Special Wagyu Ribeye Steak Course 120g ¥8,800 (Tabelog) · lobster tail and foie gras to order (Tabelog) · a February 2026 course: appetizer, sweet corn potage, shrimp and scallops with lemon butter sauce, salad with homemade dressing and salted kombu, four grilled vegetables, 120 g ribeye (filet on request), garlic rice, dessert · lunch: Wagyu hamburg course from ¥1,540 with salad, corn soup, dessert and coffee; black Wagyu sirloin-and-filet lunch with rice and tsukudani (2026 reviews)',
    website: null, gmaps: gm('神戸牛すてーきはうす香西 東心斎橋'), menu_url: null,
    notes: "[Teppanyaki · Higashi-Shinsaibashi, a Showa-era steak counter with a bargain lunch] Up a flight of stairs in an old building just off Shinsaibashi-suji, a stylish, dimly lit teppan counter that one regular says has a nostalgic Showa feel with a hint of the bubble years. Dinner is courses built around Kobe beef or black Wagyu — ribeye, loin or filet with shrimp and scallops, grilled vegetables and garlic rice — for celebrations and anniversaries. Lunch is the famous deal: a Wagyu hamburg grilled on the teppan in front of you with salad, corn soup, dessert and coffee for ¥1,540, a price a returning diner was surprised to find unchanged in May 2026. Try it with the Andes salt. English menu; open every day.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Teppanyaki steak house serving Kobe beef and Wagyu at the counter (Tabelog, shop-provided). A May 2026 diner remembered the lunch from years earlier.', philosophy: 'The chef prepares the beef in front of each guest, tailored to the guest\'s preferences and pace (Tabelog, shop-provided).', specialty: 'Kobe beef loin and Wagyu ribeye courses; Wagyu hamburg lunch.',
      anecdotes: [
        { text: '"To my surprise, I saw that they were still offering a Wagyu Hamburg Steak grilled right in front of me for just JPY 1540, tax included!" — May 2026, lunch.', source: R + 'B528032396/' },
        { text: '"It has a nostalgic Showa-era vibe with a hint of bubble economy charm." — July 2026, black Wagyu lunch course.', source: R + 'B531211919/' },
      ],
      japanese_sources_summary: '食べログ: 神戸牛すてーきはうす香西 (コウザイ)、大阪市中央区東心斎橋1-17-15 丸清ビル 2F、心斎橋駅5・6番出口から徒歩3分、毎日11:30〜14:30 (L.O. 14:00)・17:00〜23:00 (L.O. 22:00)、年中無休 (12月31日〜1月2日休み)、予約可 (5名以上は電話)、カード可、PayPay・Alipay可、電子マネー不可、サービス料なし、12席 (カウンター6席×2)、禁煙、英語メニューあり、子供可。コース: 神戸牛ロースのステーキコース120g 15970円、海鮮2品つき18170円、和牛リブロースのステーキコース120g 8800円、ランチの和牛ハンバーグのコース1540円から。口コミ(2025年3月〜2026年8月): 古いビルの2階、昭和でバブルの香りの内装、コーンスープ、自家製ドレッシング、海老と帆立のレモンバター、焼き野菜、ガーリックライス、ハンバーグはアンデスの塩とステーキソースで、値段が変わらず驚いた、ランチはお得、焼き手が感じよくイケメンという声も。',
      confidence: 'medium', sources: [TB, R + 'B502284438/', R + 'B522631197/', R + 'B525728332/', R + 'B528032396/', R + 'B529768946/', R + 'B531211919/', R + 'B534518401/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); counter teppanyaki (2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-17-15 丸清ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目17番15号 (go) 2m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B528032396/'],
    price_note: 'Course prices from the Tabelog listing (tax included); the lunch price confirmed by a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Wagyu hamburg lunch course', '¥1,540', 'Lunch', 'ask', 'no', 'Tabelog; May 2026.', 'hamburg'),
      it('', '', 'Special Wagyu Ribeye Steak Course (120 g)', '¥8,800', 'Course', 'ask', 'no', 'Tabelog.', 'ribeye'),
      it('', '', 'Premium Kobe Beef Loin Steak Course (120 g)', '¥15,970', 'Course', 'ask', 'no', 'Tabelog.', 'kobeloin'),
      it('', '', 'Premium Kobe Beef Loin Steak Course with two seafood items (120 g)', '¥18,170', 'Course', 'ask', 'no', 'Tabelog.', 'kobeseafood'),
    ] }, {
    cuisine: '鉄板焼きのステーキのカウンター (12席)・目の前で焼く神戸牛と黒毛和牛・神戸牛ロースのステーキコース120g、7品15970円、海鮮2品つき18170円、和牛リブロースのステーキコース120g 8800円 (食べログ)・ロブスターの尾やフォアグラも注文できる (食べログ)・2026年2月のコース: 前菜、コーンポタージュ、海老と帆立のレモンバターソース、自家製ドレッシングと塩昆布のサラダ、焼き野菜4種、リブロース120g (ヒレにも変更可)、ガーリックライス、デザート・ランチ: サラダ、コーンスープ、デザート、コーヒーつきの和牛ハンバーグのコース1540円から、ご飯と佃煮つきの黒毛和牛のサーロインとヒレのランチ (2026年の口コミ)',
    neighborhood: '東心斎橋1-17-15 丸清ビル 2F、心斎橋筋から少し入ったところ。心斎橋駅5・6番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。ステーキやハンバーグは塩か店のステーキソースで、コースにはコーンポタージュ、自家製ドレッシング、ガーリックライスもあるので、ソースや味つけを確認して。',
    vegan_detail: 'ヴィーガンではありません。神戸牛、和牛、海鮮の鉄板焼きのコース。',
    notes: '[鉄板焼き・東心斎橋、お得なランチの昭和のステーキカウンター] 心斎橋筋から少し入った古いビルの階段を上がると、おしゃれで薄暗い鉄板のカウンター。昭和の雰囲気にバブルの香りも、という常連の声。夜は神戸牛か黒毛和牛のコースで、リブロース、ロース、ヒレに海老と帆立、焼き野菜、ガーリックライス。誕生日や記念日に。名物はランチで、目の前の鉄板で焼く和牛ハンバーグにサラダ、コーンスープ、デザート、コーヒーがついて1540円。2026年5月に久しぶりに来た人は値段が変わっていなくて驚いたという。アンデスの塩で食べるのがおすすめ。英語メニューあり、毎日営業。',
  });
}

// ================================================================ なかむら
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27025347/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'osaka_sushi_nakamura_higashishinsaibashi', name: 'なかむら (Nakamura)', category: 'OMNI',
    lat: 34.671425, lng: 135.505352, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; sushi and sashimi come with soy sauce, and simmered dishes and unagi kabayaki are glazed, so ask before ordering.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish and shellfish sushi counter.',
    hours_raw: 'Mon–Sat 16:00–23:00; closed Sunday (Tabelog). Reservations accepted, and the counter is often full by 19:00 (2025–2026 reviews); good fish can run out if you come late (August 2025 review). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). 10 counter seats; non-smoking; takeout (Tabelog). Very small and cramped inside (August 2025 review). One diner saw a menu on the wall plus off-menu dishes (August 2025); another found no menu or prices (July 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashi-Shinsaibashi 2-1-19 — 358 m from Nagahoribashi Stn',
    cuisine: 'À la carte sushi counter (10 seats), ordered a piece at a time · fresh fish shown in a case and a tank, bought that day · sashimi platters made to your taste · live sweet shrimp, botan shrimp, scallops, surf clams, squid, mackerel, fatty tuna, yellowtail, white fish, toro-taku · grilled hamo, hamo deboned in front of you, unagi kabayaki, grilled shrimp, simmered dishes · sake lees soup to finish · beer, shochu',
    website: null, gmaps: gm('なかむら 寿司 東心斎橋2-1-19'), menu_url: null,
    notes: "[Sushi · Higashi-Shinsaibashi, an old-school counter run on regulars] A tiny, long-established sushi counter where almost everyone is a regular — one diner came back after nearly 20 years and was remembered. Fish bought that day sits in the case and the tank; you order à la carte, one piece at a time, and the sashimi platter is put together to your taste. Live sweet shrimp, scallops, botan shrimp and the eel come up again and again in reviews, along with hamo deboned with a satisfying crunch in front of you, and a bowl of sake lees soup to finish. Reviewers find the prices fair for the quality, though one found the rice portions too small to balance the fish. Opens at 16:00, Saturday included; book, because it's often full by 19:00.",
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Long-established sushi counter in Shinsaibashi (August 2025 review); a diner who came often about 20 years ago was remembered on returning (August 2025 review).', philosophy: 'Traditional sushi that balances quality fish with fair prices (August 2025 review).', specialty: 'À la carte nigiri and sashimi; live sweet shrimp; sake lees soup.',
      anecdotes: [
        { text: '"After nearly 20 years, it was touching to be remembered since I used to come here often in my younger days." — August 2025.', source: R + 'B313746744/' },
        { text: '"The conger eel was expertly deboned right in front of me, producing a satisfying sound that felt great." — July 2026.', source: R + 'B531808544/' },
      ],
      japanese_sources_summary: '食べログ: なかむら、大阪市中央区東心斎橋2-1-19、長堀橋駅から358m、月〜土16:00〜23:00、日曜休み、予約可、カード可 (JCB、AMEX、Diners)、電子マネー・QR不可、10席 (カウンター)、禁煙、テイクアウト可。口コミ(2025年8月〜2026年10月): 心斎橋の老舗のすし屋、客の多くは常連、ショーケースと水槽にその日の魚、一貫ずつのお好みで注文、好みに合わせたお造りの盛り合わせ、甘海老、ボタン海老、帆立、ホッキ貝、イカ、鯖、トロ、ハマチ、トロたく、炙った鱧の刺身、目の前で骨切りする鱧、鰻の蒲焼き、焼き海老、炊いたもの、締めに粕汁、20年ぶりでも覚えていてくれた、値段は手ごろ、とても狭い、遅いと魚がなくなる、シャリが小さすぎるという声も、メニューも値段もないという声も。',
      confidence: 'medium', sources: [TB, R + 'B264639645/', R + 'B313746744/', R + 'B511526873/', R + 'B512314858/', R + 'B512526085/', R + 'B528501505/', R + 'B531808544/', R + 'B534733294/'] },
    cultural_comfort: { level: 'japanese', note: 'Regulars\' counter with no posted prices on some visits; order piece by piece (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋2-1-19',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing current; reviews dated August 2025 through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋二丁目1番19号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B511526873/', R + 'B512526085/', R + 'B264639645/'],
    price_note: 'No prices in the sources; reviewers spent about ¥10,000–20,000 a head at dinner (2025–2026).', last_checked: TODAY, items: [
      it('', '', 'Assorted sashimi', '', 'Sashimi', 'ask', 'no', 'August 2025; October 2026.', 'sashimi'),
      it('', '', 'Sweet shrimp (live)', '', 'Sushi', 'ask', 'no', 'August 2025; August 2026.', 'amaebi'),
      it('', '', 'Toro-taku', '', 'Sushi', 'ask', 'no', 'August 2025.', 'torotaku'),
      it('', '', 'Unagi kabayaki', '', 'Small dishes', 'ask', 'no', 'August 2025.', 'unagi'),
      it('', '', 'Sake lees soup', '', 'To finish', 'ask', 'no', 'August 2025.', 'kasujiru'),
    ] }, {
    cuisine: 'お好みのすしのカウンター (10席)、一貫ずつ注文・ショーケースと水槽にその日仕入れた魚・好みに合わせたお造りの盛り合わせ・活きの甘海老、ボタン海老、帆立、ホッキ貝、イカ、鯖、トロ、ハマチ、白身、トロたく・炙った鱧の刺身、目の前で骨切りする鱧、鰻の蒲焼き、焼き海老、炊いたもの・締めに粕汁・ビール、焼酎',
    neighborhood: '東心斎橋2-1-19。長堀橋駅から358m',
    gf_detail: '要確認。グルテンの情報なし。すしと刺身には醤油、炊いたものや鰻の蒲焼きにはタレを使うので、注文の前に確認を。',
    vegan_detail: 'ヴィーガンではありません。魚介のすしのカウンター。',
    notes: '[すし・東心斎橋、常連でにぎわう昔ながらのカウンター] 小さな老舗のすしのカウンターで、客のほとんどが常連。20年ぶりに来て覚えていてもらえたという人も。その日の魚がショーケースと水槽に並び、一貫ずつお好みで注文、お造りの盛り合わせは好みに合わせてくれる。口コミに何度も出てくるのは活きの甘海老、帆立、ボタン海老、鰻、目の前で小気味よい音を立てて骨切りする鱧、締めの粕汁。品質のわりに値段は手ごろという声が多いが、魚に対してシャリが小さすぎるという人も。土曜も16時から。19時には満席のことが多いので予約を。',
  });
}

// ================================================================ イタメシヤ フジ
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27115958/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']); const F = day(['17:00', '24:00']); const S = day(['15:00', '24:00']);
  put({
    id: 'osaka_itameshiya_fuji_higashishinsaibashi', name: 'イタメシヤ フジ (Itameshiya Fuji)', category: 'OMNI',
    lat: 34.672054, lng: 135.505058, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information; pizza, pasta and gratin are central, and some dishes use soy-based sauces (abalone risotto with liver soy sauce), so ask what can be made without wheat.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: charcoal-grilled meats, seafood and cheese run through the menu; no vegan dishes are mentioned.',
    hours_raw: 'Tue–Thu 17:00–23:00 (last order 22:00); Fri 17:00–24:00 (last order 23:00); Sat–Sun 15:00–24:00 (last order 23:00); closed Monday (Tabelog). Happy hour with cheap drinks until 18:00 (December 2024 review): a wine decanter ¥400 (April 2026), sparkling wine ¥350 (May 2025). All-you-can-drink available (January 2026 review). Reservations accepted; no service charge (Tabelog). Cards, transport IC, iD, QUICPay, PayPay, d Barai, Rakuten Pay, au PAY (Tabelog). 16 seats: 10 at the counter and a private room for 6 (up to 8); private hire up to 20; non-smoking, smoking area outside; children welcome (Tabelog). Opened 27 January 2020 (Tabelog).',
    hours: { 1: W, 2: W, 3: W, 4: F, 5: S, 6: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Higashi-Shinsaibashi 1-6-10, リップル周防町 1F — 3 min from Nagahoribashi Stn, 6 min from Shinsaibashi Stn',
    cuisine: 'Casual Italian with a charcoal grill and wine (16 seats) · Fuji assorted appetizer platter of about 8 dishes (smoked salmon, water eggplant with mascarpone, potato salad) · smoked chicken wings, smoked in front of you · charcoal-grilled beef, pork and lamb; three-meat platter (Angus outside skirt, beef tongue) · pizza stretched and baked to order (Margherita; sakura shrimp and bamboo shoots in spring; squid, shrimp and mushroom) · pasta (aglio e olio, cold tomato cappellini, squid and sudachi cold pasta, horse mackerel and mitsuba green pasta) · abalone risotto with liver soy sauce · eggplant Bolognese · vegetable gratin · acqua pazza · venison · figs with prosciutto and mascarpone · roast beef course · 18 wines (Tabelog), highballs, coffee',
    website: null, gmaps: gm('イタメシヤ フジ 東心斎橋'), menu_url: null,
    notes: "[Italian · Higashi-Shinsaibashi, charcoal grill, pizza and a cheap happy hour] A casual Italian near Nagahoribashi with a counter at the front and a private room at the back, where meat and vegetables go over charcoal and pizzas are stretched and baked to order. Everyone starts with the Fuji appetizer platter of about eight small dishes; regulars then order the smoked chicken wings (smoked in front of you), a three-meat grill platter, and the abalone risotto with liver soy sauce. Seasonal specials change — a spring pizza of sakura shrimp and bamboo shoots, cold tomato cappellini in summer. Happy hour runs until 18:00 with wine by the decanter for a few hundred yen, and weekends open at 15:00. On an October 2026 visit the chef was working alone and the food still came quickly.",
    chef_bio: { chef_name: null, roles: ['Chef'], origin: null, background: 'Casual Italian that opened on 27 January 2020 (Tabelog); a frequent diner has come since it opened (August 2026 review). The chef ("the master") was cooking alone on an October 2026 visit.', philosophy: 'Carefully selected beef, pork and lamb over charcoal with crisp, fluffy pizzas and wines to match (Tabelog, shop-provided); a creative, seasonal menu with distinctive sauces (May 2026 review).', specialty: 'Fuji assorted appetizers; smoked chicken wings; abalone risotto with liver soy sauce.',
      anecdotes: [
        { text: '"I always order the smoked chicken wings, and they smoke them right in front of you." — April 2026, happy hour, sixth visit.', source: R + 'B472544329/' },
        { text: '"Although the master was working solo, we didn\'t have to wait long, and the prices were reasonable." — October 2026, family dinner.', source: R + 'B537215787/' },
      ],
      japanese_sources_summary: '食べログ: イタメシヤ フジ、大阪市中央区東心斎橋1-6-10 リップル周防町 1F、長堀橋駅から徒歩3分・心斎橋駅から徒歩6分、火〜木17:00〜23:00、金17:00〜24:00、土日15:00〜24:00、月曜休み、予約可、サービス料なし、カード・交通系IC・iD・QUICPay・PayPay・d払い・楽天ペイ・au PAY可、16席 (カウンター10、個室6名×1)、禁煙 (外に喫煙所)、子供可、オープン日2020年1月27日。店の紹介: 炭火で焼く牛・豚・羊、カリッとふんわりのピザ、厳選ワイン18種。口コミ(2023年9月〜2026年10月): フジの前菜盛り合わせ8種、目の前で燻す手羽先のスモーク、炭火焼き3種盛り (アンガスのハラミ、牛タン)、注文を受けてから伸ばして焼くピザ (マルゲリータ、桜海老と筍)、アーリオオーリオ、冷製トマトのカッペリーニ、イカとすだちの冷製パスタ、鯵と三つ葉のパスタ、肝醤油のアワビのリゾット、茄子のボロネーゼ、アクアパッツァ、鹿、いちじくと生ハムとマスカルポーネ、ローストビーフのコース、18時までのハッピーアワーでデキャンタのワイン400円、飲み放題あり、マスターがひとりでも待たされず値段も手ごろ。',
      confidence: 'medium', sources: [TB, R + 'B472544329/', R + 'B496966305/', R + 'B510568583/', R + 'B519568927/', R + 'B522655635/', R + 'B533226321/', R + 'B536607638/', R + 'B537215787/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual counter and private room; happy hour until 18:00 (2026).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市中央区東心斎橋1-6-10 リップル周防町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区東心斎橋一丁目6番10号 (go) 7m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B472544329/', R + 'B496966305/', R + 'B537215787/'],
    price_note: 'Happy-hour drink prices from April 2026 and May 2025 reviews; no food prices in the sources.', last_checked: TODAY, items: [
      it('', '', 'Fuji assorted appetizer platter (about 8 dishes)', '', 'Appetizers', 'ask', 'no', 'October 2026.', 'antipasti'),
      it('', '', 'Smoked chicken wings', '', 'Charcoal grill', 'ask', 'no', 'April 2026.', 'wings'),
      it('', '', 'Charcoal-grilled three-meat platter', '', 'Charcoal grill', 'ask', 'no', 'August 2025.', 'grill3'),
      it('', '', 'Pizza (Margherita or seasonal)', '', 'Pizza', 'no', 'no', 'April 2026; October 2026.', 'pizza'),
      it('', '', 'Abalone risotto with liver soy sauce', '', 'Main', 'ask', 'no', 'January 2026.', 'risotto'),
      it('', '', 'Wine decanter (happy hour)', '¥400', 'Drinks', '', '', 'April 2026.', 'wine'),
    ] }, {
    cuisine: '炭火とワインのカジュアルなイタリアン (16席)・フジの前菜盛り合わせ8種ほど (スモークサーモン、水茄子とマスカルポーネ、ポテトサラダ)・目の前で燻す手羽先のスモーク・炭火焼きの牛、豚、羊、3種盛り (アンガスのハラミ、牛タン)・注文を受けてから伸ばして焼くピザ (マルゲリータ、春は桜海老と筍、イカと海老ときのこ)・パスタ (アーリオオーリオ、冷製トマトのカッペリーニ、イカとすだちの冷製、鯵と三つ葉の緑のパスタ)・肝醤油のアワビのリゾット・茄子のボロネーゼ・野菜たっぷりのグラタン・アクアパッツァ・鹿・いちじくと生ハムとマスカルポーネ・ローストビーフのコース・ワイン18種 (食べログ)、ハイボール、コーヒー',
    neighborhood: '東心斎橋1-6-10 リップル周防町 1F。長堀橋駅から徒歩3分、心斎橋駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。ピザ、パスタ、グラタンが中心で、醤油を使う料理 (肝醤油のアワビのリゾット) もあるので、小麦なしでできるものを確認して。',
    vegan_detail: 'ヴィーガンではありません。炭火焼きの肉、魚介、チーズがメニューの中心で、ヴィーガンの料理の記載なし。',
    notes: '[イタリアン・東心斎橋、炭火とピザと安いハッピーアワー] 長堀橋駅近くのカジュアルなイタリアン。入口にカウンター、奥に個室があり、肉や野菜を炭火で焼き、ピザは注文を受けてから生地を伸ばして焼く。まずはみなフジの前菜盛り合わせ (小皿8種ほど)。常連はそのあと、目の前で燻す手羽先のスモーク、炭火焼きの3種盛り、肝醤油のアワビのリゾットを頼む。季節の料理も変わり、春は桜海老と筍のピザ、夏は冷製トマトのカッペリーニ。18時までのハッピーアワーはデキャンタのワインが数百円で、土日は15時から。2026年10月はマスターがひとりで料理していたが、待たされなかったという。',
  });
}

save();
