// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw8 (Tabelog id mod 6 = 1), batch 46.
//   + ととや Totoya (fishmonger's set-meal and standing bar by the Kyoto Central Wholesale Market; core list)
//   + ジェルメ Germer (couple-run bakery and reservation dinner bistro near Ginkakuji; core list)
//   + (THISIS)SHIZEN (Shinpuhkan café of anko flower bouquets on ice cream; notable list)
//   + やぐ羅 本店 Yagura Honten (nishin soba and udon by the Minamiza on Shijo; notable list)
//   - 燻とん あくた川 烏丸今出川店 26041435 (core): branch of a brand already in data (総代 麺家 あくた川,
//     kyr_sodai_menya_akutagawa); our crawls list 初代 麺家 あくた川 and 麺家よし川 (Osaka) too.
//   Picked 2026-11-06 after batch 45. `queue.mjs kyoto-missed next core 200`, mod 6 = 1, after earlier skips: ととや
//   26005573, 26041435 (skipped), ジェルメ 26021401. `next notable 200`: (THISIS)SHIZEN 26034745, やぐ羅 本店 26001631.
//   Same-name check, same brand or operator only: ととや — the crawl also lists ととや in Arakicho, Tokyo, and ととや山新 in
//   Nihonbashi; one web search ("ととや 朱雀 京都 立ち食い 寿司 鰻 店舗") found the Kyoto shop described as run by a fish
//   dealer and no link to Tokyo; under five, so drafted. ジェルメ — one. (THISIS)SHIZEN — one. やぐ羅 — one. None of the four
//   is in data/kyoto.json: grep by name and address (朱雀北ノ口町64, 浄土寺西田町3, 場之町586-2 新風館 1F SHIZEN,
//   東山区中之町211) found none.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw8-46');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('https://tabelog.com/en/kyoto/A2601/A260202/26041435/', 'branch of a brand already in data: あくた川 (kyr_sodai_menya_akutagawa)');

// ================================================================ ととや Totoya
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26005573/'; const R = TB + 'dtlrvwlst/';
  const F = day(['11:30', '14:30'], ['16:00', '20:30']); const S = day(['11:00', '14:30'], ['16:00', '20:30']); const T = day(['11:30', '14:30']);
  put({
    id: 'kyoto_totoya_central_market', name: 'ととや (Totoya)', category: 'OMNI',
    lat: 34.989298, lng: 135.741488, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Sashimi and seafood bowls are served with soy; fried dishes such as conger eel, tuna cutlet and tempura are on the menu; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fishmonger\'s seafood restaurant; the miso soup is a red-miso fish-based soup (2026 reviews).',
    hours_raw: 'Monday, Thursday and Friday 11:30–14:30 and 16:00–20:30; Tuesday lunch only 11:30–14:30; Saturday 11:00–14:30 and 16:00–20:30; food last order 20:00; closed Wednesday, Sunday and holidays, and on Kyoto Central Wholesale Market closing days (Tabelog). Retail counter 11:00–20:00 (to 18:00 on Tuesday) (Tabelog). Reservations accepted; 45-minute limit at breakfast and lunch (Tabelog). Prices exclude tax (Tabelog original すべて外税となっております。). Cards, e-money and QR (Tabelog). About 20 seats: set meals at the back, standing izakaya at the front where you pick drinks and fish yourself (2026 reviews). West of the entrance to the Kyoto Central Wholesale Market; 3 min walk from Umekoji-Kyotonishi Stn (Tabelog).',
    hours: { 0: F, 1: T, 3: F, 4: F, 5: S }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'By the Kyoto Central Wholesale Market — 3 min walk from Umekoji-Kyotonishi Stn',
    cuisine: 'Fishmonger with a set-meal room and a standing bar beside the central market (2026 reviews) · lunch: sashimi set of five or six kinds with red miso soup; tuna two-colour bowl ¥1,000; seafood bowl; mixed fry set with tuna cutlet; fried conger eel with tartare; shrimp tempura set (May–October 2026) · evenings: pick-your-own sashimi such as otoro, chutoro, conger eel and eel, dashimaki, sardine, aji tempura, with sake such as Jozen Mizunotai junmai ginjo from Niigata (June–July 2026) · tekka maki and sashimi to take away from the shop front (2026 reviews) · about ¥1,000–3,000 (Tabelog)',
    website: null, gmaps: gm('ととや 京都 中央卸売市場'), menu_url: null,
    notes: '[Seafood · by the Central Wholesale Market, Umekoji] A fish shop at the market gate with a busy set-meal room behind: thick sashimi sets with a rich red miso soup, a ¥1,000 two-tuna bowl, crisp fried conger eel. In the evening the front turns into a standing bar where you choose your fish and drinks. Closes with the market. A few find it ordinary. Closed Wednesday, Sunday and holidays.',
    chef_bio: { chef_name: null, roles: ['Fishmonger kitchen and counter staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a sushi, eel and standing-bar listing beside the Kyoto Central Wholesale Market, with retail sales, lunch and izakaya hours; registered as an official listing by the shop. Reviewers in 2026 describe a fish market with a dining area at the back, daily dishes that change with the market\'s catch, and an evening standing bar.',
      philosophy: null, specialty: 'Sashimi set; tuna bowl.',
      anecdotes: [
        { text: 'A September 2026 guest came for fried conger eel, worried it would be gone, and was told to ask for more tartare sauce.', source: R + 'B536288043/' },
        { text: 'An August 2026 family stopped in after playing in Umekoji Park, and found it good but not distinctive.', source: R + 'B533519277/' },
        { text: 'An October 2026 diner praised the savvy service of the woman at the counter.', source: R + 'B537494639/' },
      ],
      japanese_sources_summary: '食べログ: 寿司・うなぎ・立ち飲み、下京区朱雀北ノ口町64番地、JR梅小路京都西駅から徒歩3分、京都市中央卸売市場の入口の西側、月・木・金 11:30〜14:30・16:00〜20:30、火 11:30〜14:30、土 11:00〜14:30・16:00〜20:30、料理L.O.20:00、水・日・祝休み (市場の休みに準ずる)、小売は11:00〜20:00 (火曜は18:00まで)、予約可 (朝と昼は45分制)、すべて外税、カード・電子マネー・QR 可。口コミ (2026年5月〜10月、英語): 魚屋の奥の食事処、約20席、市場の仕入れで日替わり、お造り定食 (5〜6種、赤だし)、まぐろの二色丼1,000円、海鮮丼、ミックスフライ定食 (まぐろカツ)、鱧フライとタルタル、海老天定食、夜は前の立ち飲みで魚と飲み物を選ぶ、大トロ、中トロ、鱧、鰻、だし巻き、いわし、あじの天ぷら、日本酒、鉄火巻きの持ち帰り、平凡との声。',
      confidence: 'medium', sources: [TB, R + 'B37612462/', R + 'B473895061/', R + 'B529300077/', R + 'B530667949/', R + 'B532263554/', R + 'B533519277/', R + 'B534572829/', R + 'B535006313/', R + 'B536288043/', R + 'B537494639/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set meals at the back, standing bar at the front; 45-minute limit at lunch; prices plus tax; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区朱雀北ノ口町64番地',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (34.989298, 135.741488); cross-checked: GSI 京都府京都市下京区朱雀北ノ口町64番地 (lot) 54 m; nearest Kyoto record 160 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B529300077/'],
    price_note: 'One price from a May 2026 review; prices exclude tax.', last_checked: TODAY, items: [
      it('', '', 'Tuna two-colour rice bowl', '¥1,000', 'Lunch', 'ask', 'no', 'May 2026.', 'maguro_nishoku'),
      it('', '', 'Sashimi set (red miso soup)', '', 'Lunch', 'ask', 'no', '2026 reviews.', 'sashimi_teishoku'),
      it('', '', 'Fried conger eel', '', 'Lunch', 'no', 'no', 'September 2026.', 'hamo_fry'),
    ] }, {
    cuisine: '中央市場のそばの、定食の部屋と立ち飲みのある魚屋 (2026年の口コミ)・昼: 5〜6種のお造り定食と赤だし、まぐろの二色丼1,000円、海鮮丼、まぐろカツのミックスフライ定食、タルタルの鱧フライ、海老天定食 (2026年5〜10月)・夜: 大トロ、中トロ、鱧、鰻など自分で選ぶお造り、だし巻き、いわし、あじの天ぷら、日本酒 (例: 新潟の Jozen Mizunotai 純米吟醸) (2026年6〜7月)・店頭で鉄火巻きやお造りの持ち帰り (2026年の口コミ)・1,000〜3,000円ほど (食べログ)',
    neighborhood: '中央卸売市場のそば。梅小路京都西駅から徒歩3分',
    gf_detail: '要確認。お造りや海鮮丼は醤油で食べ、鱧フライ、まぐろカツ、天ぷらなどの揚げ物もある。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚屋の魚介の店。味噌汁は魚の赤だし (2026年の口コミ)。',
    notes: '[魚・梅小路の中央市場のそば] 市場の入口の魚屋の奥ににぎやかな定食の部屋。厚切りのお造り定食と濃い赤だし、1,000円のまぐろの二色丼、カリッとした鱧フライ。夜は店先が立ち飲みになり、魚と飲み物を自分で選ぶ。市場の休みに合わせて休む。平凡と感じる人も。水・日・祝休み。',
  });
}

// ================================================================ ジェルメ Germer
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26021401/'; const R = TB + 'dtlrvwlst/';
  const A = day(['12:00', '22:00']); const B = day(['13:00', '22:00']);
  put({
    id: 'kyoto_germer_jodoji', name: 'ジェルメ (Germer)', category: 'OMNI',
    lat: 35.026490, lng: 135.791234, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: a bakery of croissants, pain de mie, campagne and Danish, with pastry-wrapped terrines at dinner (2024–2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: buttery viennoiserie, bacon épi, crab-cream Danish and a game and foie-gras dinner course (2024–2026 reviews).',
    hours_raw: 'Wednesday, Thursday, Saturday and Sunday 12:00–22:00; Friday 13:00–22:00; closed Monday and Tuesday; bread sales 12:00–21:00 until sold out, restaurant from 18:00; hours may change (Tabelog). The dinner course is by reservation only (August 2026). A small shop — reservations accepted (Tabelog). Cards (JCB, AMEX, Diners); no e-money or QR (Tabelog). 8 seats: 4 at the counter and 4 at a table; non-smoking, ashtray outside (Tabelog). Just off Shirakawa-dori near Ginkakuji; Ginkakuji-michi bus stop, 15 min walk from Demachiyanagi Stn (Tabelog; August 2026).',
    hours: { 2: A, 3: A, 4: B, 5: A, 6: A }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Jodoji near Ginkakuji, off Shirakawa-dori — Ginkakuji-michi bus stop',
    cuisine: 'Bakery by day and a small bistro and wine bar by night, run by a couple (Tabelog; 2024–2026 reviews) · bread: moist, buttery croissant ¥330, pain de mie and raisin pain de mie, whole-wheat campagne, French bread, bacon épi ¥330, seasonal Danish such as crab cream, granola, cheesecake (2024–2026 reviews) · dinner: a reservation-only course of about seven dishes with rare ingredients — foie gras from Maison Mito, ikejime fish, game from Miyama, local farm produce — incl. a pâté en croûte of venison, boar, pork and foie gras (August 2026) · bread from about ¥330, dinner ¥20,000–30,000 (2024–2026 reviews)',
    website: null, gmaps: gm('ジェルメ Germer 浄土寺 パン'), menu_url: null,
    notes: '[Bakery and bistro · near Ginkakuji, couple-run] A tiny bakery off Shirakawa-dori whose croissant some call the best in Kyoto — moist, buttery, crisp — with pain de mie, campagne and Danish that sell out fast; prices are not always posted, and some find prices high. By night, the chef and wife serve an eight-seat, reservation-only course of rare ingredients, from Maison Mito foie gras to Miyama game. Closed Monday and Tuesday.',
    chef_bio: { chef_name: 'Okamoto', roles: ['Chef and baker, Mr. Okamoto (as named by reviewers)', 'The wife of the chef, who runs the shop together (May 2024; August 2026)'], origin: null,
      background: 'Per Tabelog: a bread, bistro and wine-bar shop near Ginkakuji with bread sales from midday and a restaurant from 18:00. Reviewers describe the couple who run it, chef Okamoto, called a bread artist after a TV feature (February 2025), and a dinner course built on carefully sourced ingredients such as foie gras from Maison Mito, nerve-killed fish and game from Miyama (August 2026).',
      philosophy: 'Carefully sourced, rare ingredients (August 2026 review).', specialty: 'Croissant; pâté en croûte.',
      anecdotes: [
        { text: 'An August 2026 eleven-time regular advises buying bread a few times and asking about the ingredients before booking the dinner course, to build trust with the couple.', source: R + 'B419646586/' },
        { text: 'A February 2025 visitor, drawn by a TV feature, watched the croissants sell out through the window and settled happily for a bacon épi and a crab-cream Danish.', source: R + 'B501363742/' },
        { text: 'A November 2025 shopper found no prices posted and paid ¥780 for one loaf.', source: R + 'B516834474/' },
      ],
      japanese_sources_summary: '食べログ: パン・ビストロ・ワインバー、左京区浄土寺西田町3、市バス銀閣寺道、叡山電鉄出町柳駅から徒歩15分、水・木・土・日 12:00〜22:00、金 13:00〜22:00、月・火定休、パンの販売は12:00〜21:00 (売り切れまで)、レストランは18:00から、予約可、カード (JCB・AMEX・Diners) 可、電子マネー・QR 不可、8席 (カウンター4、テーブル4)、禁煙 (外に灰皿)。口コミ (2024年5月〜2026年8月、英語): 銀閣寺の近く、白川通から少し入る、夫婦で営む、パンの職人の Okamoto シェフ (テレビで紹介)、しっとりしたバターのクロワッサン330円、食パン、レーズンの食パン、全粒粉のカンパーニュ、バゲット、ベーコンエピ330円、季節のデニッシュ (蟹クリーム)、グラノーラ、チーズケーキ、値札がなく1個780円との声、夜は予約のみのコース約7品 (Maison Mito のフォアグラ、神経締めの魚、Miyama のジビエ、地元の野菜、鹿と猪と豚とフォアグラのパテ・アン・クルート)。',
      confidence: 'medium', sources: [TB, R + 'B419646586/', R + 'B489603944/', R + 'B493658627/', R + 'B495641173/', R + 'B501363742/', R + 'B515325438/', R + 'B516834474/', R + 'B523883501/', R + 'B532201338/', R + 'B534002987/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Bread from midday, sells out; dinner by reservation only; cards (JCB, AMEX, Diners).' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '京都府京都市左京区浄土寺西田町3',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through August 2026.' },
    pin_source: `Tabelog ${TB} (35.026490, 135.791234); cross-checked: GSI 京都府京都市左京区浄土寺西田町3番地 (lot) 14 m; nearest Kyoto record 119 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534002987/'],
    price_note: 'Bread prices from an August 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Croissant', '¥330', 'Bread', 'no', 'no', 'August 2026.', 'croissant'),
      it('', '', 'Bacon épi', '¥330', 'Bread', 'no', 'no', 'August 2026.', 'bacon_epi'),
      it('', '', 'Dinner course (about seven dishes)', '', 'Dinner', 'no', 'no', 'Reservation only; August 2026.', 'dinner_course'),
    ] }, {
    cuisine: '昼はパン屋、夜は小さなビストロとワインバー、夫婦で営む (食べログ、2024〜2026年の口コミ)・パン: しっとりバターのクロワッサン330円、食パンとレーズンの食パン、全粒粉のカンパーニュ、バゲット、ベーコンエピ330円、蟹クリームなど季節のデニッシュ、グラノーラ、チーズケーキ (2024〜2026年の口コミ)・夜: 予約のみの約7品のコース、Maison Mito のフォアグラ、神経締めの魚、Miyama のジビエ、地元の農家の野菜など希少な食材、鹿と猪と豚とフォアグラのパテ・アン・クルート (2026年8月)・パンは330円ほどから、夜は20,000〜30,000円 (2024〜2026年の口コミ)',
    neighborhood: '銀閣寺近くの浄土寺、白川通から入る。市バス銀閣寺道',
    gf_detail: 'グルテンフリー不可。クロワッサン、食パン、カンパーニュ、デニッシュのパン屋で、夜はパイ包みのテリーヌも (2024〜2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。バターのヴィエノワズリー、ベーコンエピ、蟹クリームのデニッシュ、ジビエとフォアグラのコース (2024〜2026年の口コミ)。',
    notes: '[パンとビストロ・銀閣寺の近く、夫婦の店] 白川通から入った小さなパン屋。京都一との声もあるしっとりバターのクロワッサン、食パン、カンパーニュ、デニッシュはすぐ売り切れる。値札がないこともあり高めと感じる人も。夜はシェフと奥さんが8席で予約のみのコースを出し、Maison Mito のフォアグラや Miyama のジビエなど希少な食材を使う。月・火休み。',
  });
}

// ================================================================ (THISIS)SHIZEN
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26034745/'; const R = TB + 'dtlrvwlst/'; const WEB = 'https://thisis.website/shizen/';
  const H = day(['10:00', '19:00']);
  put({
    id: 'kyoto_thisis_shizen_shinpukan', name: 'ディス イズ シゼン ((THISIS)SHIZEN)', category: 'OMNI',
    lat: 35.009366, lng: 135.759950, cuisine_type: 'sweets',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Anko (sweet bean paste) flowers over ice cream; no information on cones, toppings or gluten (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. The flowers are shaped from bean paste, but sit on dairy ice cream (vanilla or matcha); no vegan information (2026 reviews).',
    hours_raw: 'Daily 10:00–19:00; hours may change (Tabelog). No reservations; queues at weekends (Tabelog; 2026 reviews). Cards, e-money and QR (Tabelog). Limited seating with a view of the courtyard; non-smoking (Tabelog; September 2026). 1F of Shinpuhkan, on Karasuma-dori south of Aneyakoji; about 165 m from Karasuma Oike Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinpuhkan 1F, Karasuma — 2 min walk from Karasuma Oike Stn',
    cuisine: 'Café of "ice bouquets": flowers piped from coloured sweet bean paste over ice cream, finished in front of you (2026 reviews) · ROSE MIX ¥1,950, choose three of seven or eight bean-paste flavours such as coffee, beet or ramune (August–September 2026) · seasonal AJISAI hydrangea ¥1,850, with vanilla or matcha ice cream (September–October 2026) · WANKO BOUQUET dog ¥1,350, e.g. caramel (September 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('(THISIS)SHIZEN 新風館'), menu_url: null,
    notes: '[Sweets · Shinpuhkan, Karasuma Oike] A museum-like café of plants and art where bean paste is piped into roses, hydrangeas or a puppy over ice cream, finished leaf by leaf before your eyes — a photo first, a dessert second. Flavours run from coffee to beet and ramune. Around ¥1,350–1,950; queues on weekends and many visitors from abroad. Some find the taste ordinary or very sweet. Open daily.',
    chef_bio: { chef_name: null, roles: ['Café staff (unnamed), who finish each bouquet at the counter'], origin: null,
      background: 'Per Tabelog: a café in Shinpuhkan with a website at thisis.website/shizen. Reviewers in 2026 describe an interior of plants, art and tableware like a museum or botanical garden, seasonal flower designs, and staff who finish the leaves of each order in front of the guest.',
      philosophy: null, specialty: 'Ice bouquet of bean-paste flowers.',
      anecdotes: [
        { text: 'An August 2026 visitor who expected ice cream found the rose was made of bean paste — and the ramune flavour a revelation.', source: R + 'B534746973/' },
        { text: 'A September 2026 guest photographed the staff adding the front paws to a caramel dog bouquet.', source: R + 'B537527701/' },
        { text: 'A September 2026 visitor found the taste average but the presentation worth nearly ¥2,000.', source: R + 'B535776204/' },
      ],
      japanese_sources_summary: '食べログ: カフェ、中京区烏丸通姉小路下ル場之町586-2 新風館 1F、烏丸御池駅から165m、毎日 10:00〜19:00、予約不可、カード・電子マネー・QR 可、禁煙。口コミ (2026年8月〜10月、英語): あんこの花を目の前で仕上げるアイスのブーケ、ROSE MIX 1,950円 (7〜8種のあんから3種、コーヒー、ビーツ、ラムネなど)、季節の AJISAI 1,850円 (バニラか抹茶のアイス)、WANKO BOUQUET 1,350円 (キャラメルの犬)、植物とアートの美術館のような店内、中庭の見える席、週末は行列、外国人客が多い、味は普通・甘いとの声。',
      confidence: 'medium', sources: [TB, WEB, R + 'B534746973/', R + 'B535371643/', R + 'B535542425/', R + 'B535644832/', R + 'B535776204/', R + 'B536364655/', R + 'B536705027/', R + 'B537296596/', R + 'B537527701/', R + 'B538058284/'] },
    cultural_comfort: { level: 'english', note: 'Order at the counter; queues at weekends; cards, IC and QR.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区烏丸通姉小路下ル場之町586-2 新風館 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.009366, 135.759950); cross-checked: GSI 京都府京都市中京区場之町586番地 (lot) 44 m; kyoto_mr_maurices_italian_ace (Shinpuhkan) is 20 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535542425/'],
    price_note: 'Prices from a September 2026 review, tax included.', last_checked: TODAY, items: [
      it('', '', 'ROSE MIX (three bean-paste flavours on ice cream)', '¥1,950', 'Sweets', 'ask', 'no', 'September 2026.', 'rose_mix'),
      it('', '', 'AJISAI (hydrangea, seasonal)', '¥1,850', 'Sweets', 'ask', 'no', 'September 2026.', 'ajisai'),
      it('', '', 'WANKO BOUQUET (dog)', '¥1,350', 'Sweets', 'ask', 'no', 'September 2026.', 'wanko'),
    ] }, {
    cuisine: '「アイスのブーケ」のカフェ: 色とりどりのあんこの花をアイスの上に絞り、目の前で仕上げる (2026年の口コミ)・ROSE MIX 1,950円、7〜8種のあん (コーヒー、ビーツ、ラムネなど) から3種 (2026年8〜9月)・季節の AJISAI (紫陽花) 1,850円、バニラか抹茶のアイス (2026年9〜10月)・WANKO BOUQUET (犬) 1,350円、例: キャラメル (2026年9月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '烏丸の新風館の1階。烏丸御池駅から徒歩2分',
    gf_detail: '要確認。アイスの上のあんこの花。コーンやトッピング、グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: '要確認。花はあんこだが、乳製品のアイス (バニラか抹茶) の上にのる。ヴィーガンの情報はない (2026年の口コミ)。',
    notes: '[スイーツ・烏丸御池の新風館] 植物とアートの美術館のようなカフェ。あんこをバラや紫陽花、子犬の形にアイスの上に絞り、目の前で葉を仕上げる。まず写真、それからデザート。あんはコーヒーからビーツ、ラムネまで。1,350〜1,950円ほど、週末は行列で外国人客が多い。味は普通、甘いと感じる人も。無休。',
  });
}

// ================================================================ やぐ羅 本店 Yagura Honten
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26001631/'; const R = TB + 'dtlrvwlst/'; const WEB = 'http://www.yagura-net.com/';
  const WK = day(['11:30', '21:00']); const WE = day(['11:00', '21:00']);
  put({
    id: 'kyoto_yagura_honten_shijo', name: 'やぐ羅 本店 (Yagura Honten)', category: 'OMNI',
    lat: 35.003974, lng: 135.772757, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not GF: wheat udon and soba in soy-dashi broths, tempura, and a thickened curry broth (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broths, herring, chirimen, chicken and egg (2026 reviews).',
    hours_raw: 'Monday–Friday 11:30–21:00; Saturday and Sunday 11:00–21:00; irregular closing days (Tabelog). No reservations (Tabelog); usually a quick table even at lunch (October 2026). Prices exclude tax (Tabelog original すべて外税となっております。). Cash only — no cards, e-money or QR (Tabelog). 34 seats; non-smoking; children welcome (Tabelog). On Shijo-dori opposite the Minamiza, by the north-east corner of Kawabata-Shijo; 1 min walk from Gion-Shijo Stn (Tabelog; July 2026).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shijo-dori opposite the Minamiza — 1 min walk from Gion-Shijo Stn',
    cuisine: 'Long-established soba and udon shop on Shijo (2026 reviews) · nishin soba ¥1,580, with chirimen-sansho rice +¥400 (March 2026) · yuba ankake soba ¥1,480 and yuba ankake udon (March–April 2026) · Kyoto tanuki udon of chopped fried tofu and Kujo negi in thick sauce; ankake curry soba; tempura zaru soba with chirimen-sansho rice; oyakodon (March–October 2026) · about ¥1,000–2,000 (Tabelog)',
    website: WEB, gmaps: gm('やぐ羅 本店 四条'), menu_url: null,
    notes: '[Soba and udon · Shijo opposite the Minamiza] A long-established noodle shop a minute from Gion-Shijo Station, playing old festive koto music: famous nishin soba with sweet-simmered herring, silky yuba ankake soba, Kyoto-style tanuki udon in a thick sauce with Kujo negi, curry udon and a rich oyakodon. Usually easy to get in even amid the crowds. Cash only; prices plus tax.',
    chef_bio: { chef_name: null, roles: ['Kitchen and floor staff (unnamed)'], origin: null,
      background: 'Per Tabelog: a soba, udon and curry shop on Shijo near Gion with a website at yagura-net.com; registered as an official listing by the shop. Reviewers in 2026 call it a long-established soba shop famous for nishin soba, across from the Kyoto Minamiza.',
      philosophy: null, specialty: 'Nishin soba; yuba ankake.',
      anecdotes: [
        { text: 'A March 2026 diner learned that in Kyoto "tanuki" means chopped fried tofu in a thick sauce, not tempura bits.', source: R + 'B523935004/' },
        { text: 'A March 2026 first-timer had yuba ankake soba to traditional New Year-style music, the room nearly full at 17:30.', source: R + 'B523821453/' },
        { text: 'An October 2026 guest got a table quickly at lunch despite the station-side location.', source: R + 'B538193700/' },
      ],
      japanese_sources_summary: '食べログ: そば・うどん・カレー、東山区中之町211、京阪祇園四条駅から徒歩1分 (川端四条の交差点の北東から祇園方面へ)、月〜金 11:30〜21:00、土日 11:00〜21:00、不定休、予約不可、すべて外税、カード・電子マネー・QR 不可、34席、禁煙、子ども可。口コミ (2026年3月〜10月、英語): 南座の向かい、老舗のそば屋、にしんそば1,580円、ちりめん山椒ご飯+400円、湯葉あんかけそば1,480円、湯葉あんかけうどん、刻み揚げと九条ねぎのあんの京風のたぬきうどん、あんかけのカレーそば、天ざるそばとちりめん山椒ご飯、親子丼、正月のような和の音楽、昼でも入りやすい。',
      confidence: 'medium', sources: [TB, WEB, R + 'B523821453/', R + 'B523838710/', R + 'B523935004/', R + 'B526632359/', R + 'B527136967/', R + 'B528862163/', R + 'B531596053/', R + 'B532081801/', R + 'B538193700/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No reservations; cash only; prices plus tax.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区中之町211',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official Tabelog listing; reviews through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003974, 135.772757); cross-checked: GSI 京都府京都市東山区中之町211番地 (lot) 2 m; nearest Kyoto record 25 m away; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B523838710/'],
    price_note: 'Prices from a March 2026 review; prices exclude tax; cash only.', last_checked: TODAY, items: [
      it('', '', 'Nishin soba (herring)', '¥1,580', 'Soba', 'no', 'no', 'March 2026.', 'nishin_soba'),
      it('', '', 'Yuba ankake soba', '¥1,480', 'Soba', 'no', 'no', 'March 2026.', 'yuba_ankake'),
      it('', '', 'Chirimen-sansho rice (add-on)', '+¥400', 'Rice', 'ask', 'no', 'March 2026.', 'chirimen_gohan'),
    ] }, {
    cuisine: '四条通の老舗のそばとうどんの店 (2026年の口コミ)・にしんそば1,580円、ちりめん山椒ご飯+400円 (2026年3月)・湯葉あんかけそば1,480円、湯葉あんかけうどん (2026年3〜4月)・刻み揚げと九条ねぎのあんの京風のたぬきうどん、あんかけのカレーそば、天ざるそばとちりめん山椒ご飯、親子丼 (2026年3〜10月)・1,000〜2,000円ほど (食べログ)',
    neighborhood: '南座の向かいの四条通。祇園四条駅から徒歩1分',
    gf_detail: 'グルテンフリー不可。醤油とだしの小麦のうどんとそば、天ぷら、とろみのカレーのつゆ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。だしのつゆ、にしん、ちりめん、鶏、卵 (2026年の口コミ)。',
    notes: '[そばとうどん・南座の向かいの四条] 祇園四条駅から1分の老舗の麺の店。正月のような和の音楽が流れる。甘く煮たにしんの名物のにしんそば、なめらかな湯葉のあんかけそば、九条ねぎのあんの京風のたぬきうどん、カレーうどん、濃厚な親子丼。人出の多い場所でも入りやすい。現金のみ、外税。',
  });
}

save();
