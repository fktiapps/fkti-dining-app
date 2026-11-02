// Osaka sweep (2-mile circle around Dotonbori), rest phase, notable-first — lane osw3 (Tabelog id mod 4 = 2), batch 6.
//   + ままごとや Mamagoto Ya (seasonal Japanese à la carte and courses, 15-seat counter, since 1987; Nishi-Shinsaibashi)
//   + アミチェ 心斎橋本店 Amitie (French since 1980, 6F hideaway, second-generation owner 下村 and chef 中川)
//   + 新町蕎麦切り てるてる Shinmachi Sobakiri Teruteru (couple-run soba bar; five soba, 十割 and 二八 at one price)
//   + あばらや Abara Ya (Ura Namba sushi house known for battera; since 1955 per a review)
//   Lane: the first four ids with id mod 4 = 2 in `queue.mjs osaka next notable 80` (2026-11-01, after batch 5):
//   27001262, 27000838, 27084982, 27001206 (last two digits 62, 38, 82, 06: each = 2 mod 4).
//   None is in data/osaka.json (grep by Tabelog id, name, romaji and address).
//   Chain check: all four are single shops (Amitie's official site lists only this one; "本店" is in the Tabelog name only).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw3-6');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ままごとや
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27001262/'; const R = TB + 'dtlrvwlst/';
  const W = day(['17:00', '23:00']); const S = day(['17:00', '22:30']);
  put({
    id: 'osaka_mamagotoya_nishishinsaibashi', name: 'ままごとや (Mamagoto Ya)', category: 'OMNI',
    lat: 34.674069, lng: 135.499275, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. A fish-led Japanese kitchen: sashimi, grilled eel and dobin-mushi sit beside tempura and dishes in dashi and soy-based sauces; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: seasonal fish, eel, crab and beef, with dashi-based dishes throughout.',
    hours_raw: 'Mon–Fri 17:00–23:00 (last order 22:00); Sat 17:00–22:30 (last order 21:30); closed Sunday (Tabelog). Reservations; a 100% fee for same-day cancellation of a booked course (Tabelog). À la carte or courses; the seasonal course was ¥12,000 (September 2026); the à la carte menu shows no prices (July 2026). Cards (VISA, Master, JCB, AMEX, Diners) and PayPay; no e-money (Tabelog). 25 seats: a 15-seat counter and tatami/semi-private rooms for 4 and 6, horigotatsu seating; private hire for 20–50; non-smoking, with an ashtray at the entrance; parking at Daimaru nearby (Tabelog). Opened 2 March 1987 (Tabelog).',
    hours: { 0: W, 1: W, 2: W, 3: W, 4: W, 5: S }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 1-10-4, エースビル 5F — 2 min from Shinsaibashi Stn (Midosuji Line); near Daimaru Shinsaibashi',
    cuisine: 'Seasonal Japanese cooking, à la carte or as a course (2026 reviews) · seasonal course ¥12,000 (September 2026); a sake-pairing course (October 2026) · autumn 2026: assorted sashimi, dobin-mushi of matsutake and conger eel, crab with sweet potato in a thick sauce, scallop and sea-urchin tempura, crab miso, grilled eel both shirayaki and with sauce, Chateaubriand, grilled rice balls, wasanbon ice cream (September–October 2026) · summer 2026: hamo with fine bone-cutting, ayu, wild eel, a lotus-root dumpling, sweet grilled asparagus (June 2026) · sake from around Japan, e.g. Nabeshima and Kuro Ryu (June 2026); a five-sake selection on staff advice (September 2026) · diners report ¥6,000–¥19,999 a head (2026)',
    website: null, gmaps: gm('ままごとや 西心斎橋'), menu_url: null,
    notes: "[Japanese · Shinsaibashi, a 1987 counter for seasonal à la carte] On the fifth floor of a building near Daimaru, a calm Japanese room with a fifteen-seat counter and two semi-private tatami rooms, open since 1987. One diner says the way to eat here is à la carte from a long seasonal list with no prices shown: in autumn 2026 dobin-mushi of matsutake and conger eel, crab with sweet potato, scallop and sea-urchin tempura, eel grilled two ways and Chateaubriand, finished with grilled rice balls and wasanbon ice cream; in summer, finely bone-cut hamo, ayu and wild eel. There is also a ¥12,000 seasonal course and a sake pairing, and staff explain each dish and suggest sake from around Japan. Old Western classics play in a Japanese room (June 2026). Used for business dinners and for entertaining overseas guests (October 2026). Closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Chefs and staff (unnamed)'], origin: null,
      background: 'Shop-maintained (corporate-member) Tabelog listing; opened 2 March 1987; the listing says the kitchen is particular about fish and about sake and shochu. No owner or chef is named in the sources read, and no official site was found.',
      philosophy: null, specialty: 'Seasonal à la carte; eel; dobin-mushi.',
      anecdotes: [
        { text: '"I didn\'t go for the course, but I think the best way to enjoy this place is by sticking to the a la carte options." — July 2026.', source: R + 'B531289695/' },
        { text: '"The atmosphere of the restaurant was very much Japanese cuisine, yet [the restaurant] played classic Western music from the past, which added a nice touch!" — June 2026, a course.', source: R + 'B529728101/' },
        { text: '"I visited this restaurant to entertain foreign guests." — October 2026, à la carte from sashimi to Chateaubriand.', source: R + 'B538169056/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ままごとや、日本料理・海鮮・天ぷら、西心斎橋1-10-4 エースビル 5F、Shinsaibashi 駅から徒歩2分、月〜金 17:00〜23:00 (L.O.22:00)、土 17:00〜22:30 (L.O.21:30)、日曜休み、予約可、コース予約の当日キャンセルは100%、カード・PayPay可、25席 (カウンター15、座敷4・6)、半個室2室、掘りごたつ、貸切20〜50名、禁煙 (入口前に灰皿)、近くに Daimaru の駐車場、日本酒・焼酎にこだわり、魚にこだわり、1987年3月2日オープン。口コミ(2026年5月〜10月): アラカルトがおすすめ、値段の書かれていないお品書き、季節のコース12,000円、日本酒のペアリング、松茸と鱧の土瓶蒸し、カニ味噌、シャトーブリアン、鰻の白焼きと蒲焼き、焼きおにぎり、和三盆のアイス、鱧の骨切り、鮎、天然の鰻、Nabeshima や Kuro Ryu の日本酒、昔の洋楽のクラシック、接待に。',
      confidence: 'medium', sources: [TB, R + 'B269937228/', R + 'B508732086/', R + 'B529281657/', R + 'B529728101/', R + 'B530350264/', R + 'B531289695/', R + 'B531450227/', R + 'B531654493/', R + 'B534356679/', R + 'B534887671/', R + 'B537501544/', R + 'B538169056/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain each dish and suggest sake (2026); a guest brought overseas visitors (October 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋1-10-4 エースビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.674028, 135.499283); same エースビル as Sakuichi Honten (osaka_sakuichi_honten, address_ja "西心斎橋1-10-3 エースビル 3F・4F", pinned 1m from this Tabelog point), so this pin is offset ~5m north to keep them apart. GSI for 西心斎橋1-10-4 gives a point 13m south that coincides with Shojin Sushi Minamo (osaka_shojin_sushi_minamo), so it is not used; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B534887671/', R + 'B508732086/', R + 'B538169056/'],
    price_note: 'No menu posted online and à la carte prices are not shown; the course price is from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Seasonal course', '¥12,000', 'Course', 'ask', 'no', 'September 2026.', 'course'),
      it('', '', 'Dobin-mushi of matsutake and conger eel', '', 'À la carte', 'ask', 'no', 'September–October 2026.', 'dobin_mushi'),
      it('', '', 'Grilled eel, shirayaki and with sauce', '', 'À la carte', 'ask', 'no', 'September–October 2026.', 'eel'),
      it('', '', 'Scallop and sea-urchin tempura', '', 'À la carte', 'no', 'no', 'October 2026.', 'tempura'),
      it('', '', 'Wasanbon ice cream', '', 'Dessert', 'ask', 'no', 'September 2026.', 'wasanbon_ice'),
    ] }, {
    cuisine: '季節の日本料理をアラカルトかコースで (2026年の口コミ)・季節のコース12,000円 (2026年9月)、日本酒のペアリングのコース (2026年10月)・2026年の秋: お造りの盛り合わせ、松茸と鱧の土瓶蒸し、カニとさつまいものあんかけ、ホタテとウニの天ぷら、カニ味噌、鰻の白焼きと蒲焼き、シャトーブリアン、焼きおにぎり、和三盆のアイス (2026年9〜10月)・2026年の夏: 骨切りの鱧、鮎、天然の鰻、蓮根まんじゅう、甘い焼きアスパラ (2026年6月)・全国の日本酒、たとえば Nabeshima や Kuro Ryu (2026年6月)、店の人のすすめで5種類の飲み比べ (2026年9月)・口コミの予算は1人6,000〜19,999円 (2026年)',
    neighborhood: '西心斎橋1-10-4 エースビル 5F。Shinsaibashi 駅から徒歩2分、Daimaru Shinsaibashi の近く',
    gf_detail: '予約時に要確認。グルテンの情報なし。魚が中心の和食で、お造り、鰻の焼き物、土瓶蒸しの一方、天ぷら、出汁や醤油のたれの料理も。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。季節の魚、鰻、カニ、牛肉が中心で、出汁を使う料理が多い。',
    notes: '[日本料理・心斎橋、1987年からの季節のアラカルトのカウンター] Daimaru に近いビルの5階、15席のカウンターと座敷の半個室が2つある落ち着いた和の店で、1987年から。アラカルトがおすすめという声もあり、値段の書かれていない季節のお品書きから選ぶ。2026年の秋は松茸と鱧の土瓶蒸し、カニとさつまいも、ホタテとウニの天ぷら、白焼きと蒲焼きの鰻、シャトーブリアン、締めに焼きおにぎりと和三盆のアイス。夏は骨切りした鱧、鮎、天然の鰻。12,000円の季節のコースや日本酒のペアリングもあり、店の人が一皿ずつ説明し、全国の日本酒を勧めてくれる。和の店内に昔の洋楽のクラシックが流れる (2026年6月)。接待や海外からの客のもてなしにも (2026年10月)。日曜休み。',
  });
}

// ================================================================ アミチェ 心斎橋本店
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27000838/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.ami-gr1980.com/'; const LUNCH = SITE + 'amitielunch/index.html'; const DINNER = SITE + 'amitiedinner/index.html';
  const SHOP = SITE + 'shop/index.html'; const CONCEPT = SITE + 'concept/index.html';
  const H = day(['11:30', '14:30'], ['17:00', '21:30']);
  put({
    id: 'osaka_amitie_shinsaibashi', name: 'アミチェ 心斎橋本店 (Amitie Shinsaibashi)', category: 'MOM_AND_POP',
    lat: 34.672603, lng: 135.502131, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. The site says courses are built around each guest\'s preferences and allergies, but nothing is called gluten-free; courses include bread, and the fish course at dinner comes in a donabe with a sauce meant for bread.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask when booking. Vegetables from contract farms open every course and the site promises courses adjusted to preferences, but the courses are built on fish and meat (wagyu, venison, Iberico pork) and no vegan menu is listed.',
    hours_raw: 'Tue–Sun lunch 11:30–14:30 (last order 13:30; 13:00 at weekends), dinner 17:00–21:30 (last order 19:30; 21:00 close on Sundays and holidays); closed Monday (the next day when Monday is a holiday) and one irregular day a month (official site; Tabelog); November 2026 closures listed for the 2nd, 5th, 9th, 16th, 18th, 24th and 30th (official site). Only Christmas courses 19–26 December (official site), when Tabelog asks that children of elementary age and under not come. Prices include tax and a 10% service charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and QR (PayPay, d Barai, Rakuten Pay, au PAY); no e-money (Tabelog). 26 seats (Tabelog; 28 on the official site), tables set apart, semi-private curtained spaces for 2 to 8; non-smoking, smoking on the terrace; wheelchair accessible; children welcome, children\'s plate ¥2,800 booked ahead, no high chairs or changing tables (Tabelog). On the 6th floor; the lift is at the back of the building (September 2026).',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 1-5-31, 心斎橋ラ・シーンビル 6F — 1 min from Daimaru Shinsaibashi, 3 min from Shinsaibashi Stn exit 6',
    cuisine: 'French courses built on vegetables from contract farms, fish sent straight from the market and wagyu, venison and Iberico pork (official site; prices include tax and service, read November 2026) · lunch: full-course lunch ¥5,000 online (normally ¥6,000), the lighter Déjeuner ¥4,000 (limited days), chef\'s courses A ¥9,500, B ¥12,500, C ¥16,500 · dinner: Petit Bonheur ¥6,000, Menu Bonheur ¥7,500, Gourmand ¥8,000 online, chef\'s courses A ¥9,500, B ¥12,500, C ¥16,500 with luxury ingredients; anniversary courses with a message on the dessert plate · wine pairings of three or four glasses chosen by the chef and sommelier · 2026 dishes: an opening plate of rare, colourful vegetables each explained, sea urchin and tomato jelly, onion potage, chestnut soup, fish in a donabe at dinner, aged venison, beef with optional foie gras, matcha desserts (June–October 2026)',
    website: SITE, gmaps: gm('アミチェ 心斎橋 フランス料理'), menu_url: DINNER,
    notes: "[French · Shinsaibashi, a 1980 hideaway above the arcade] A minute from Daimaru, up a lift at the back of a building to the sixth floor, a French restaurant founded in 1980 that calls itself a hideaway for 45 years. The site's promise is a relaxed room rather than hotel formality, and the second-generation owner 下村 runs it with chef 中川. Courses open with a plate of rare vegetables from contract farms, each explained at the table, then fish sent straight from the market (cooked in a donabe at dinner) and meat such as wagyu or venison, with foie gras as an extra; repeat guests are promised different dishes. Lunch from ¥4,000, dinner from ¥6,000, tax and service included. Popular for birthdays and anniversaries: diners in 2026 describe messages written on dessert plates, photos taken at the table and a celebration plate for a wedding. Closed Mondays and one other day a month.",
    chef_bio: { chef_name: '中川 (chef; surname only, as written)', roles: ['Owner: 下村, second generation (official site: 店主 下村, 2代目店主)', 'Chef: 中川 (official site)', 'Sommelier on staff (Tabelog)'], origin: null,
      background: 'Per the official site: the founder joined 志摩観光ホテル at 賢島 in Mie, gained service experience at a French restaurant in Osaka, and founded Amitie in 1980 with a dozen-odd seats, moving into this building\'s 6th floor when it was completed in 1988. The second-generation owner keeps the founder\'s idea of a relaxed place for real French food, alongside a chef "who loves food and wine too much". Vegetables come from contract farms that build the soil to grow Italian vegetables; wagyu and venison are carefully handled to remove gaminess; fish arrives straight from the market. The site aims to build each course around the guest\'s tastes and allergies and to serve repeat guests different dishes.',
      philosophy: 'Not hotel-style formality but a relaxed room, kind-to-the-body ingredients and real French food; forget about manners, wine orders and dress codes (official site).', specialty: 'Vegetable starter plates; fish in a donabe; anniversary courses.',
      anecdotes: [
        { text: '"The owner\'s thoughtful hospitality makes me feel as if I\'ve returned home" — August 2026, a second visit.', source: R + 'B486154033/' },
        { text: '"I visited this restaurant for a memorable anniversary dinner on the day we registered our marriage." — August 2026, aged venison main.', source: R + 'B533775863/' },
        { text: '"Be careful, as the elevator is located at the back." — September 2026.', source: R + 'B535578962/' },
      ],
      japanese_sources_summary: '公式サイト (ami-gr1980.com): 1980年創業 フランス料理のお店、心斎橋 大丸より徒歩1分、ビル6階の隠れ家、隠れ続けて45年、店主 下村 シェフ 中川。どんなお店: 三重県賢島の志摩観光ホテルに入社後、大阪のフランス料理店でサービスの経験を積み、1980年に「アミチェ」を創業、当初は10数席、1988年に今のビルができて移転、先代の気持ちを大切に2代目店主として、料理とワインが好きすぎるシェフと共に、契約農家の自然野菜、黒毛和牛や鹿肉、イベリコ豚、市場直送の魚、ディナーの魚料理は土鍋仕立て、記念日コースはデザートの皿にメッセージ、好みやアレルギーを考慮してコースを作る、2回目以降は違った料理を。ランチ: フルコースランチ5,000円 (通常6,000円、ネット予約)、シェフおまかせコース A 9,500円・B 12,500円・C 16,500円、デジュネ4,000円 (数量・曜日限定)。ディナー: シェフおまかせコース A 9,500円・B 12,500円・C 16,500円、グルマンコース8,000円 (ネット限定)、ムニュ・ボヌール7,500円、プチ・ボヌール6,000円。店舗情報: ラ・シーンビル6F、ランチ L.O. 13時30分、ディナー L.O. 19時30分、21時30分閉店、月曜定休 (祝日の場合は翌日) と不定休月1回、28席、カーテンスペース2〜8名、各種カードと QR 決済。クリスマス (12月19日〜26日) は限定コースのみ。食べログ (店舗会員): フレンチ、税・サービス料10%込み、26席、半個室、禁煙 (テラスで喫煙可)、車椅子可、お子様プレート2,800円、ソムリエ。口コミ(2026年6月〜10月): 珍しい野菜の前菜を一つずつ説明、ウニとトマトのジュレ、玉ねぎのポタージュ、栗のスープ、熟成した鹿肉、フォアグラの追加、デザートにお祝いのメッセージ、写真を撮ってくれる、エレベーターは奥。',
      confidence: 'medium', sources: [SITE, LUNCH, DINNER, SHOP, CONCEPT, TB, R + 'B26807296/', R + 'B466621528/', R + 'B486154033/', R + 'B530913839/', R + 'B532810207/', R + 'B533139449/', R + 'B533775863/', R + 'B534203741/', R + 'B535578962/', R + 'B536927607/', R + 'B536990693/', R + 'B538090908/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Set courses explained dish by dish; book online through the official site. No English evidence found.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Official site: courses are made with the guest\'s preferences and allergies in mind.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋1-5-31 心斎橋ラ・シーンビル 6F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (November 2026 closing days) and the shop-maintained Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋一丁目5番31号 (go) 11m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [LUNCH, DINNER],
    price_note: 'Prices from the official site (tax and service included; read November 2026).', last_checked: TODAY, items: [
      it('フルコースランチ', '', 'Full-course lunch (online booking)', '¥5,000', 'Lunch', 'ask', 'ask', 'Official site; ¥6,000 otherwise; June 2026.', 'full_lunch'),
      it('デジュネ', '', 'Déjeuner, lighter lunch with a choice of fish or meat', '¥4,000', 'Lunch', 'ask', 'ask', 'Official site; limited days.', 'dejeuner'),
      it('ムニュ・ボヌール', '', 'Menu Bonheur dinner course', '¥7,500', 'Dinner', 'ask', 'ask', 'Official site.', 'bonheur'),
      it('グルマンコース', '', 'Gourmand dinner course (online only)', '¥8,000', 'Dinner', 'ask', 'no', 'Official site; fish and roast Japanese beef.', 'gourmand'),
      it('シェフおまかせコース', '', 'Chef\'s course A (also B ¥12,500, C ¥16,500)', '¥9,500', 'Dinner', 'ask', 'ask', 'Official site.', 'chef_course'),
    ] }, {
    cuisine: '契約農家の野菜、市場直送の魚、黒毛和牛や鹿肉、イベリコ豚のフランス料理のコース (公式サイト、税・サービス料込み、2026年11月に確認)・ランチ: フルコースランチ5,000円 (ネット予約、通常6,000円)、軽めのデジュネ4,000円 (曜日・数量限定)、シェフおまかせコース A 9,500円・B 12,500円・C 16,500円・ディナー: プチ・ボヌール6,000円、ムニュ・ボヌール7,500円、グルマンコース8,000円 (ネット限定)、高級食材のシェフおまかせコース A 9,500円・B 12,500円・C 16,500円。記念日コースはデザートの皿にメッセージ・シェフとソムリエが選ぶ3種類、4種類のワインペアリング・2026年の料理: 一つずつ説明のある珍しい色とりどりの野菜の前菜、ウニとトマトのジュレ、玉ねぎのポタージュ、栗のスープ、ディナーの土鍋仕立ての魚、熟成した鹿肉、フォアグラを追加できる牛肉、抹茶のデザート (2026年6〜10月)',
    neighborhood: '心斎橋筋1-5-31 心斎橋ラ・シーンビル 6F。大丸より徒歩1分、Shinsaibashi 駅6番出口から徒歩3分',
    gf_detail: '予約時に要確認。公式サイトには好みやアレルギーを考慮してコースを作るとあるが、グルテンフリーの説明はない。コースにはパン、ディナーの土鍋仕立ての魚はパンにつけて食べるソース。',
    vegan_detail: '予約時に要確認。契約農家の野菜がどのコースにも出て、好みに合わせたコースをうたうが、魚と肉 (黒毛和牛、鹿肉、イベリコ豚) が中心で、ヴィーガンのメニューは載っていない。',
    notes: '[フレンチ・心斎橋、1980年からのビル6階の隠れ家] 大丸から1分、ビルの奥のエレベーターで6階へ。1980年創業、「隠れ続けて45年」のフランス料理店。ホテルのような堅苦しさではなく、ほっとできる空間をうたい、2代目店主の下村さんがシェフの中川さんと店に立つ。コースは契約農家の珍しい野菜の前菜から始まり、テーブルで一つずつ説明、続いて市場直送の魚 (夜は土鍋仕立て)、和牛や鹿肉などの肉、フォアグラの追加も。2回目以降は違う料理を出すという。昼は4,000円から、夜は6,000円から、税・サービス料込み。誕生日や記念日に人気で、2026年の口コミではデザートの皿のメッセージ、写真を撮ってくれた、結婚のお祝いのプレート、という声。月曜と月1回の不定休。',
  });
}

// ================================================================ 新町蕎麦切り てるてる
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270201/27084982/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '22:00']); const SUN = day(['11:30', '14:00'], ['18:00', '22:00']);
  put({
    id: 'osaka_shinmachi_sobakiri_teruteru', name: '新町蕎麦切り てるてる (Shinmachi Sobakiri Teruteru)', category: 'OMNI',
    lat: 34.676838, lng: 135.494171, cuisine_type: 'udon_soba',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. 十割 (100% buckwheat) soba is offered at the same price as 二八 (June 2026) and in a duck dipping soba (January 2026), but the dipping sauces are soy-based and most soba here is a wheat blend (二八, seiro, sarashina); nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the soba dipping sauce and broth are dashi-based, and the side dishes include duck, fish and egg.',
    hours_raw: 'Thu–Sat 18:00–22:00; Sun 11:30–14:00 and 18:00–22:00; closed Monday to Wednesday; until sold out (Tabelog). A diner gives the evening last order as 21:30 (October 2026). Reservations only for the 18:00 opening (Tabelog). The Sunday lunch draws a queue: 5 to 10 or more people before 11:30, and an hour\'s wait for later arrivals (May–June 2026); evenings can be quiet (June 2026). Cards and QR accepted; no e-money; no service charge (Tabelog). Seating: 3–4 at the counter, two tables for four and a raised table for five or six (2026 reviews). Non-smoking; no small children (Tabelog). No rice dishes, as a sign at the door says (August 2026).',
    hours: { 3: D, 4: D, 5: D, 6: SUN }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shinmachi 1-31-3, ダイヤパレス四ツ橋 1F, on 新町南通り — 3 min from Nishi-Ohashi Stn exit 2',
    cuisine: 'Hand-cut soba with sake and small dishes (2026 reviews) · five kinds of soba, chosen per serving (about 130 g): seiro, coarse-ground seiro, coarse-ground inaka, sarashina and grilled buckwheat; 十割 and 二八 at the same price; the day\'s choice varies (October 2026) · もり蕎麦 ¥950 (April and June 2026), two servings ¥1,900; duck soba ¥1,700 (May 2026); 100%-buckwheat duck dipping soba ¥1,900 (January 2026); grated-yam bukkake; spicy grated-daikon soba; matcha soba (May 2026) · small dishes: 板わさ with wasabi and sea-urchin miso ¥480, 辛味大根じゃこおろし ¥480, ホタルイカ沖漬け ¥480 (June 2026), soba-yaki-miso ¥550, dashimaki ¥750, sobagaki ¥1,150 (2026), Kyoto sawara ¥1,800, Toyama firefly squid with vinegar miso ¥900 (April 2026) · sake by the 180 ml from ¥1,600; Yebisu bottles ¥700; umeshu ¥700',
    website: null, gmaps: gm('新町蕎麦切り てるてる'), menu_url: null,
    notes: "[Soba · Shinmachi, a couple's soba bar for sake and noodles] A calm, clean Japanese-modern room on a Shinmachi street, run by a couple (as diners in 2022 and June 2026 describe it), with a few counter seats, tables and a small raised area, and jazz playing. The soba is the point: up to five kinds a day, from white, delicate sarashina to dark coarse-ground inaka, with 100% buckwheat (十割) costing the same as the 80/20 blend (二八), and a sign at the door saying there are no rice dishes. Evenings are for sake and small plates first (itawasa with sea-urchin miso, fiery karami daikon, firefly squid, sobagaki, dashimaki), then a plate of cold soba from ¥950. Lunch is Sundays only, with a queue before 11:30. Open Thursday to Sunday evenings; book for the 18:00 start.",
    chef_bio: { chef_name: null, roles: ['Run by a couple (unnamed): "the couple who runs the restaurant" (December 2022 review), "The restaurant is run by a couple" (June 2026 review)'], origin: null,
      background: 'No official site found and the Tabelog listing is not shop-maintained; the facts come from the listing and 2026 reviews. A December 2022 diner and a June 2026 diner both describe a couple running the shop. The soba line-up changes with the seasons (January 2026 review).',
      philosophy: null, specialty: 'Mori soba in five grinds; duck dipping soba; sobagaki.',
      anecdotes: [
        { text: '"The restaurant is run by a couple, creating a warm and inviting atmosphere." — June 2026, first in line for Sunday lunch.', source: R + 'B530367417/' },
        { text: '"The entrance proudly states, \'We do not serve rice bowls,\' which is quite refreshing." — August 2026.', source: R + 'B535594332/' },
        { text: '"十割も二八も値段が同じなのが凄い" (that 十割 and 二八 cost the same is amazing) — June 2026, もり蕎麦 950円 each.', source: R + 'B530739971/' },
      ],
      japanese_sources_summary: '食べログ: 新町蕎麦切り てるてる、そば・居酒屋、西区新町1-31-3 ダイヤパレス四ツ橋 1F、Nishi-Ohashi 駅から162m、木〜土 18:00〜22:00、日 11:30〜14:00・18:00〜22:00、月〜水休み、売り切れ次第終了、予約は18時の開店時のみ、カード・QR可、禁煙、小さな子どもは不可。口コミ(2026年1月〜10月): 夫婦で営む店、新町南通り沿い、エビスビール小瓶700円、板わさ480円 (山葵と雲丹味噌)、辛味大根じゃこおろし480円、高千代 辛口純米 おりがらみ生酒1,600円、ホタルイカ沖漬け480円、もり蕎麦 十割950円、もり蕎麦 二八950円、5種類の蕎麦 (せいろ、粗挽きせいろ、粗挽き田舎、更科、grilled buckwheat)、鴨のつけ蕎麦、だし巻き、そばがき、日曜の昼は開店前から行列、丼ものはなし、ジャズが流れる。',
      confidence: 'medium', sources: [TB, R + 'B460086521/', R + 'B520961993/', R + 'B521893296/', R + 'B526327083/', R + 'B526937866/', R + 'B528745425/', R + 'B529557667/', R + 'B530367417/', R + 'B530739971/', R + 'B535594332/', R + 'B536138402/', R + 'B536657070/'] },
    cultural_comfort: { level: 'japanese', note: 'A small counter-and-table soba bar; orders taken in order of arrival at Sunday lunch (May 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市西区新町1-31-3 ダイヤパレス四ツ橋 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `GSI 大阪府大阪市西区新町一丁目31番3号 (go), 17m from the Tabelog point (${TB}: 34.676765, 135.494007); pinned on GSI because the Tabelog point sits 2m from No.29 (osaka_no_29_shinmachi, address_ja "新町1-31-6", a different building), and the GSI point keeps 18m between them; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B530739971/', R + 'B536657070/', R + 'B528745425/'],
    price_note: 'Prices from 2026 reviews (tax included as reported); no menu posted online.', last_checked: TODAY, items: [
      it('もり蕎麦 十割', '', 'Mori soba, 100% buckwheat', '¥950', 'Soba', 'ask', 'no', 'June 2026; soy-based dipping sauce.', 'mori_juwari'),
      it('もり蕎麦 二八', '', 'Mori soba, 80/20 blend', '¥950', 'Soba', 'no', 'no', 'June 2026.', 'mori_nihachi'),
      it('', '', 'Duck soba', '¥1,700', 'Soba', 'no', 'no', 'May 2026.', 'kamo_soba'),
      it('板わさ', '', 'Itawasa with wasabi and sea-urchin miso', '¥480', 'Small dishes', 'ask', 'no', 'June 2026.', 'itawasa'),
      it('辛味大根じゃこおろし', '', 'Spicy daikon with jako', '¥480', 'Small dishes', 'ask', 'no', 'June 2026.', 'karami_daikon'),
      it('', '', 'Sobagaki', '¥1,150', 'Small dishes', 'ask', 'ask', 'October 2026; eaten with salt or soy sauce.', 'sobagaki'),
    ] }, {
    cuisine: '手打ちの蕎麦と日本酒、蕎麦前 (2026年の口コミ)・5種類の蕎麦から1枚 (約130g) ずつ選べる: せいろ、粗挽きせいろ、粗挽き田舎、更科、grilled buckwheat。十割と二八は同じ値段、その日によって選べる蕎麦が変わる (2026年10月)・もり蕎麦950円 (2026年4月と6月)、2枚1,900円、鴨そば1,700円 (2026年5月)、十割の鴨のつけ蕎麦1,900円 (2026年1月)、山芋のぶっかけ、辛味大根の蕎麦、抹茶蕎麦 (2026年5月)・蕎麦前: 山葵と雲丹味噌でいただく板わさ480円、辛味大根じゃこおろし480円、ホタルイカ沖漬け480円 (2026年6月)、蕎麦焼き味噌550円、だし巻き750円、そばがき1,150円 (2026年)、Kyoto のサワラの焼き物1,800円、Toyama のホタルイカの酢味噌900円 (2026年4月)・日本酒は180mlで1,600円から、エビスビール小瓶700円、梅酒700円',
    neighborhood: '西区新町1-31-3 ダイヤパレス四ツ橋 1F、新町南通り沿い。Nishi-Ohashi 駅2番出口から徒歩3分',
    gf_detail: '要確認。十割 (蕎麦粉100%) の蕎麦が二八と同じ値段であり (2026年6月)、鴨のつけ蕎麦にもなる (2026年1月) が、つゆは醤油ベースで、ほとんどの蕎麦は小麦の入るつなぎ (二八、せいろ、更科)。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではありません。蕎麦のつゆは出汁ベースで、蕎麦前には鴨、魚、卵も。',
    notes: '[蕎麦・新町、夫婦で営む蕎麦と日本酒の店] 新町の通りに面した落ち着いて清潔な和モダンの店で、夫婦で営む (2022年と2026年6月の口コミ)。カウンター数席とテーブル、小上がりがあり、ジャズが流れる。主役は蕎麦で、1日に最大5種類、白く繊細な更科から黒っぽい粗挽きの田舎まで。十割は二八と同じ値段で、入口には丼ものはないとの貼り紙。夜はまず日本酒と蕎麦前 (雲丹味噌の板わさ、辛い辛味大根、ホタルイカ、そばがき、だし巻き)、それからもり蕎麦950円から。昼は日曜だけで、11時半の開店前から行列。木〜日の夜営業、18時の開店で予約を。',
  });
}

// ================================================================ あばらや
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27001206/'; const R = TB + 'dtlrvwlst/';
  const H = day(['16:00', '23:00']);
  put({
    id: 'osaka_abaraya_sennichimae', name: 'あばらや (Abara Ya)', category: 'OMNI',
    lat: 34.664922, lng: 135.504558, cuisine_type: 'sushi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Sashimi and the saba sushi (made to be eaten without soy sauce, August 2026) are the plainest; tempura, simmered fish and miso soup use wheat batter or soy-based seasonings.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a sushi and fish izakaya; the appetizers and dishes are fish-based, with dashi in the chawanmushi and simmered dishes.',
    hours_raw: 'Mon–Sat 16:00–23:00 (last order 22:30); closed Sundays and public holidays (Tabelog). Reservations; required for four or more, and phone for private rooms (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR; no table charge (Tabelog). 40 seats over three floors (August 2026), with a counter on the 1F and tatami private rooms for 8, 12 and 20; non-smoking (Tabelog). Saba sushi to take away, including next morning (August 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Namba Sennichimae 2-14, a back alley just east of Namba Grand Kagetsu — 5 min from Namba or Nihonbashi Stn',
    cuisine: 'Osaka sushi and fish izakaya, known for its saba sushi (battera) (2026 reviews) · saba sushi topped with a leaf (a "mint-like" leaf, July 2026) and a hint of sansho (August 2026), made to be eaten without soy sauce; a half order is ten pieces (July–August 2026); to take away · a ¥4,400 course: appetizers, four kinds of sashimi, chawanmushi, simmered fish (sea bream with burdock), three tempura with vegetables, saba sushi; all-you-can-drink can be added (July–August 2026) · à la carte: tuna, salmon and scallop sashimi; tekka maki and toro-taku maki; dobin-mushi of matsutake (October 2026); hamo and corn tempura, eggplant dengaku, dashimaki, steamed sea-bream bones, grilled sea-bream head, red miso soup (2026) · imo shochu and sake · two people with two drinks each spent just over ¥8,000 (July 2026)',
    website: null, gmaps: gm('あばらや 難波千日前 寿司'), menu_url: null,
    notes: "[Sushi · Ura Namba, an old sushi house famous for battera] Tucked into a back alley behind Namba Grand Kagetsu, a three-storey sushi house with a genuine retro feel, a counter downstairs and tatami rooms above, which an August 2026 diner dates to 1955. It is known above all for saba sushi: a battera with a leaf on top and a hint of sansho, eaten without soy sauce, ten pieces even as a half order, and sold to take away. The ¥4,400 course runs from sashimi and chawanmushi through simmered sea bream and tempura to the saba sushi; à la carte there are tuna and salmon sashimi, tekka maki, dobin-mushi in autumn and steamed sea-bream bones. One regular was on a 45th visit in October 2026; another found the place empty on a Saturday night and called it too well hidden. Prices are modest. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Owner and chef (unnamed; "the hospitality from the owner was warm and kind", August 2026)'], origin: null,
      background: 'Shop-maintained (corporate-member) Tabelog listing; no opening date is given there. An August 2026 diner says the restaurant has been around since 1955, and calls the retro feel genuine, not manufactured. The listing says the kitchen is particular about fish, sake and shochu.',
      philosophy: null, specialty: 'Saba sushi (battera); simmered sea bream; the ¥4,400 course.',
      anecdotes: [
        { text: '"Just a 5-minute walk from Nihonbashi and Namba, this long-established sushi restaurant has been around since 1955." — August 2026, the course at the 1F counter.', source: R + 'B534715939/' },
        { text: '"Several customers came in just to grab this battera without dining in. It seems to be well-loved by the locals." — August 2026.', source: R + 'B533044750/' },
        { text: '"To my surprise, it was completely empty! Seriously, it was too hidden!" — August 2026, a Saturday night.', source: R + 'B533575043/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): あばらや、寿司・居酒屋・海鮮、難波千日前2-14、Namba 駅・Nihonbashi 駅から徒歩5分、月〜土 16:00〜23:00 (L.O.22:30)、日曜・祝日休み、予約可 (4名以上は要予約、個室は電話で)、カード可、電子マネー・QR不可、チャージなし、40席、座敷の個室 (8、12、20名)、禁煙、魚・日本酒・焼酎にこだわり。口コミ(2026年7月〜10月): Namba Grand Kagetsu の東の路地裏、名物の鯖寿司 (バッテラ)、醤油なしで食べる、半分でも10切れ、持ち帰りも、4,400円のコース (先付、刺身4種、茶碗蒸し、煮魚、天ぷら、鯖寿司)、飲み放題の追加、鯛あら煮、松茸の土瓶蒸し、鉄火巻き、45回目の常連、3階建て、1955年からという声。',
      confidence: 'medium', sources: [TB, R + 'B480325235/', R + 'B512887582/', R + 'B531290867/', R + 'B532412762/', R + 'B532818812/', R + 'B533044750/', R + 'B533575043/', R + 'B534636090/', R + 'B534715939/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Counter downstairs, tatami rooms upstairs; staff recommend dishes when asked (July 2026). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波千日前2-14',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波千日前2番14号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534715939/', R + 'B531290867/', R + 'B532818812/'],
    price_note: 'Prices from July–August 2026 reviews; no menu posted online.', last_checked: TODAY, items: [
      it('', '', 'Course: appetizers, 4 sashimi, chawanmushi, simmered fish, tempura, saba sushi', '¥4,400', 'Course', 'no', 'no', 'July–August 2026.', 'course'),
      it('', '', 'Saba sushi (battera), half order of ten pieces', '', 'Sushi', 'ask', 'no', 'July–August 2026; also to take away.', 'saba_sushi'),
      it('鯛あら煮', '', 'Simmered sea-bream head and bones', '', 'Dishes', 'ask', 'no', 'August 2026 (name from the review\'s Japanese caption).', 'tai_arani'),
      it('', '', 'Tekka maki', '', 'Sushi', 'ask', 'no', 'October 2026.', 'tekka'),
    ] }, {
    cuisine: '大阪の寿司と魚の居酒屋、名物は鯖寿司 (バッテラ) (2026年の口コミ)・葉をのせ山椒がほんのり香る鯖寿司は醤油なしで、半分でも10切れ (2026年7〜8月)、持ち帰りも・4,400円のコース: 先付、刺身4種、茶碗蒸し、煮魚 (鯛とごぼう)、野菜を含む天ぷら3種、鯖寿司。飲み放題も追加できる (2026年7〜8月)・一品: まぐろ、サーモン、ホタテの刺身、鉄火巻き、トロたく巻き、松茸の土瓶蒸し (2026年10月)、鱧ととうもろこしの天ぷら、なすの田楽、だし巻き、鯛のあら蒸し、鯛のかぶと焼き、赤だし (2026年)・芋焼酎と日本酒・2人で2杯ずつ飲んで8,000円ほど (2026年7月)',
    neighborhood: '難波千日前2-14、Namba Grand Kagetsu の東の路地裏。Namba 駅、Nihonbashi 駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。刺身と鯖寿司 (醤油なしで食べる、2026年8月) がいちばんシンプル。天ぷら、煮魚、味噌汁は小麦の衣や醤油ベースの味付け。',
    vegan_detail: 'ヴィーガンではありません。寿司と魚の居酒屋で、先付も料理も魚が中心、茶碗蒸しや煮物には出汁。',
    notes: '[寿司・Ura Namba、バッテラで知られる老舗の寿司屋] Namba Grand Kagetsu の裏の路地にある3階建ての寿司屋。作りものではないレトロな雰囲気で、1階はカウンター、上は座敷。2026年8月の口コミでは1955年からという。名物は鯖寿司で、葉をのせ山椒がほんのり香るバッテラは醤油なしで食べ、半分でも10切れ、持ち帰りもできる。4,400円のコースは刺身と茶碗蒸しから鯛の煮付け、天ぷら、鯖寿司まで。一品ならまぐろやサーモンの刺身、鉄火巻き、秋の土瓶蒸し、鯛のあら蒸し。2026年10月には45回目という常連も、土曜の夜にがらがらで隠れすぎと書いた人も。値段は手ごろ。日曜・祝日休み。',
  });
}

save();
