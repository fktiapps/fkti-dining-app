// Osaka sweep (2-mile circle around Dotonbori), core phase backlog, lane id mod 4 = 3; worker osw4, batch 22.
//   + レストラン＆バー バルクト restaurant & bar BARKT (Italian in Holiday Inn Osaka Namba, Soemoncho)
//   + 自分で焼けるたこ焼き居酒屋 TAKOYAKI LAB (grill-your-own takoyaki izakaya, Nishi-Shinsaibashi)
//   + つぼルー カレー鍋 心斎橋総本家 Tsuboru Curry Nabe (curry hot pot of 24 spices, Shinsaibashi-suji)
//   + お好み 鉄板 居酒屋 DON Okonomi Teppan Izakaya DON (okonomiyaki between 551 and Bic Camera, Namba)
//   - 27107135 鉄板神社 宗右衛門町店: branch of 鉄板神社, already in data (osaka_teppan_jinja_dotonbori).
//   Chain check: BARKT is the hotel's restaurant (ikyu). TAKOYAKI LAB (operator place・to・connect, PR Times), つぼルー
//   (tabiiro) and DON (search results): one shop found each. None of the four is in data/osaka.json (grep by name,
//   Tabelog id and address, 2026-11-02).
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka', TODAY, 'osw4-22');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27107135', 'branch of a brand in data: 鉄板神社 (osaka_teppan_jinja_dotonbori)');

// ================================================================ バルクト
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27043711/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '14:30'], ['17:00', '23:30']);
  put({
    id: 'osaka_barkt_holiday_inn_namba', name: 'レストラン＆バー バルクト (restaurant & bar BARKT)', category: 'OMNI',
    lat: 34.669814, lng: 135.503586, cuisine_type: 'italian',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The menu is fresh pasta, pizza, a rare salmon cutlet and bruschetta, with grilled beef fillet in Madeira sauce as a course main.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options but nothing vegan; the courses centre on salmon, beef and cheese.',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00) and 17:00–23:30 (last order food 22:30, drinks 23:00; dinner courses until 20:30); open year-round (Tabelog). Reservations accepted; groups of 30+ by phone; the "memorial plate" only with course bookings (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, PayPay (Tabelog). 88 seats (60 inside, 28 on the terrace), private rooms for 6–8 and semi-private couple seats; smoking on the terrace only (Tabelog). Many love hotels and nightlife spots on the walk in (September 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Soemoncho 5-15, Holiday Inn Osaka Namba 1F — 3 min from Nipponbashi Stn, 5 min from Namba Stn',
    cuisine: 'Italian restaurant and bar of the Holiday Inn Osaka Namba, green-filled with a terrace: Shimane wagyu lunch with sommelier-chosen wine and sake pairing; Italian dinner with wine and cocktails (Tabelog shop text) · anniversary course: five appetisers, rare salmon katsu, choice of pasta, roast domestic beef fillet with Madeira sauce, cake with sparklers (July–August 2026) · lunch: bacon and onion amatriciana on fresh pasta with salad and bread ¥1,500, funghi pizza with salad ¥1,500 (September 2026) · seasonal fruit with buffalo mozzarella (melon in August, muscat in September 2026), romaine Caesar salad, Margherita, Genovese with wild shrimp and potato (August–September 2026), bisque with creamy cheese and soft-boiled egg (September 2026) · beef shoulder steak (October 2026)',
    website: null, gmaps: gm('レストラン&バー バルクト ホリデイ・イン大阪難波'), menu_url: null,
    notes: '[Italian · Soemoncho, hotel restaurant with a terrace] The plant-filled ground-floor Italian of the Holiday Inn Osaka Namba, with sofas, semi-private couple seats and a terrace, popular for anniversaries. At lunch fresh pasta or pizza with salad is about ¥1,500; at dinner the anniversary course ends with a sparkler cake. Order the Genovese with wild shrimp. Smoking only on the terrace.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing and ikyu: the restaurant and bar of Holiday Inn Osaka Namba by IHG. A September 2026 reviewer chatted with a bartender from Nepal.', philosophy: null, specialty: 'Fresh pasta; anniversary course.',
      anecdotes: [
        { text: '"I learned that one of the staff members was from Nepal and doesn\'t drink alcohol at all, but had worked hard to learn everything." — September 2026, at the counter.', source: R + 'B535672591/' },
        { text: '"The noodles were chewy and delicious, but honestly, I felt there was quite a lack of sauce." — August 2026, at lunch.', source: R + 'B534045525/' },
      ],
      japanese_sources_summary: '食べログ: レストラン＆バー バルクト、イタリアン・カフェ・ピザ、大阪市中央区宗右衛門町5-15 ホリデイ・イン大阪 1F、なんば駅から徒歩5分、日本橋から徒歩3分、毎日11:30〜14:30 (L.O. 14:00)、17:00〜23:30 (料理 L.O. 22:30、ドリンク L.O. 23:00、コースは20:30まで)、年中無休、予約可、カード・電子マネー・PayPay 可、88席 (店内60、テラス28)、個室6〜8名、カップルシート、テラスは喫煙可、ベジタリアン対応の表示。Shimane の和牛のランチとソムリエのワインと日本酒のペアリング、イタリアンのディナー。口コミ(2026年7月〜10月): 記念日のコース (前菜5種、サーモンのレアカツ、パスタ、国産牛フィレのロースト、マデラソース、花火のケーキ)、生パスタのアマトリチャーナのランチ1,500円、フンギ1,500円、季節のフルーツとブッファラのモッツァレラ、シーザーサラダ、マルゲリータ、天然エビとじゃがいものジェノベーゼ、ビスク、牛肉の肩のステーキ、パスタのソースが少ないという声も。ホリデイ・イン大阪難波のレストラン (一休)。',
      confidence: 'medium', sources: [TB, 'https://restaurant.ikyu.com/108582/', R + 'B532231688/', R + 'B532552084/', R + 'B532751150/', R + 'B533630530/', R + 'B534034391/', R + 'B534045525/', R + 'B534612605/', R + 'B535359907/', R + 'B535386858/', R + 'B535672591/', R + 'B535910300/', R + 'B536179613/', R + 'B536534418/', R + 'B537233101/', R + 'B537433625/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Hotel restaurant with course menus. No English-menu evidence on Tabelog.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区宗右衛門町5-15 ホリデイ・イン大阪 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and ikyu page; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区宗右衛門町5番15号 (go) 39m (building centroid). No record within 30 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B535386858/', R + 'B532751150/', TB],
    price_note: 'Lunch prices from a September 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Lunch: bacon and onion amatriciana (fresh pasta), salad, bread', '¥1,500', 'Lunch', 'no', 'no', 'September 2026 review.', 'amatriciana_lunch'),
      it('', '', 'Lunch: funghi pizza with salad', '¥1,500', 'Lunch', 'no', 'ask', 'September 2026 review.', 'funghi_lunch'),
      it('', '', 'Genovese with wild shrimp and potato', '', 'Pasta', 'no', 'no', 'August 2026 reviews.', 'genovese'),
      it('', '', 'Anniversary course (appetisers, salmon katsu, pasta, beef fillet, cake)', '', 'Course', 'no', 'no', 'July–August 2026 reviews.', 'anniversary_course'),
    ] }, {
    cuisine: 'ホリデイ・イン大阪難波のイタリアンのレストラン兼バーで、緑の多い店内とテラス: Shimane の和牛のランチにソムリエが選ぶワインと日本酒のペアリング、ワインとカクテルのイタリアンのディナー (食べログの店の紹介)・記念日のコース: 前菜5種、サーモンのレアカツ、選べるパスタ、国産牛フィレのロースト・マデラソース、花火のケーキ (2026年7〜8月)・ランチ: 生パスタのベーコンと玉ねぎのアマトリチャーナにサラダとパンで1,500円、フンギとサラダ1,500円 (2026年9月)・季節のフルーツとブッファラのモッツァレラ (8月はメロン、9月はマスカット)、ロメインのシーザーサラダ、マルゲリータ、天然エビとじゃがいものジェノベーゼ (2026年8〜9月)、クリームチーズと半熟卵のビスク (2026年9月)・牛肉の肩のステーキ (2026年10月)',
    neighborhood: '宗右衛門町5-15 ホリデイ・イン大阪難波 1F。日本橋駅から徒歩3分、なんば駅から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。生パスタ、ピッツァ、サーモンのレアカツ、ブルスケッタ、コースのメインは国産牛フィレのマデラソース。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあるがヴィーガンの説明はない。コースはサーモン、牛肉、チーズが中心。',
    notes: '[イタリアン・宗右衛門町、テラスのあるホテルのレストラン] ホリデイ・イン大阪難波の1階、緑の多いイタリアンで、ソファ、半個室のカップルシート、テラスがあり、記念日に人気。昼は生パスタかピッツァとサラダで1,500円ほど、夜の記念日のコースは花火のケーキで締め。天然エビのジェノベーゼを。たばこはテラスのみ。',
  });
}

// ================================================================ TAKOYAKI LAB
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27148483/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '24:00']);
  put({
    id: 'osaka_takoyaki_lab_nishishinsaibashi', name: '自分で焼けるたこ焼き居酒屋 TAKOYAKI LAB', category: 'OMNI',
    lat: 34.67016, lng: 135.4995, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: takoyaki and okonomiyaki are wheat-flour batters, with kushikatsu and sobameshi on the side.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options and the shop offers takoyaki without octopus (February 2026), but the batter is usually made with dashi; nothing is described as vegan.',
    hours_raw: 'Daily 12:00–24:00, last order food 23:00, drinks 23:30; open year-round including Golden Week, Obon and New Year (Tabelog). Reservations recommended (August 2026); one drink and one food item per person; two-hour limit when busy; 15 minutes late cancels (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay), transport IC and other e-money, QR payment (Tabelog). 45 seats (5 counter, 20 table, 20 tatami with sunken seating); non-smoking; wheelchair accessible; children and strollers welcome with kids\' chairs (Tabelog). Menus in English, Chinese and Korean; staff speaking English, Chinese and Korean (Tabelog). QR ordering (December 2025). Staff show you how to turn the takoyaki (December 2025–October 2026).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nishi-Shinsaibashi 2-3-16, EPIC BUILDING 4F, above a takoyaki shop — 3 min from Namba Stn, 5 min from Shinsaibashi Stn',
    cuisine: 'Takoyaki izakaya where you grill your own at the table: 21 toppings to customise, plus matcha and shrimp-basil takoyaki; kushikatsu, okonomiyaki, sushi and seafood on the side (Tabelog shop text) · 120-minute all-you-can-eat-and-drink with 8 kinds of takoyaki ¥4,500; à la carte drinks 120 minutes ¥2,200 (27 kinds) or ¥3,300 (38 kinds) (Tabelog) · February 2026 prices: custom takoyaki, 10 pieces without octopus ¥990, three kushikatsu ¥690, mentaiko-cheese dashimaki ¥880, three-kind sashimi ¥1,210, matcha tiramisu ¥770, ginger ale ¥550 · rainbow takoyaki (pink and green batter) and "magma" takoyaki with squid-ink-blackened octopus (June 2026) · shrimp-basil, chanja and cheese-fondue takoyaki; choregi salad; sobameshi (July–October 2026) · plain takoyaki with octopus, squid and mentaiko; lotus root, beef and white fish kushikatsu (December 2025)',
    website: 'https://place-to-connect.com/service/takoyaki-lab/', gmaps: gm('TAKOYAKI LAB 西心斎橋'), menu_url: null,
    notes: '[Takoyaki · Nishi-Shinsaibashi, grill your own] A fourth-floor izakaya where each table has a takoyaki plate and you pour, fill and turn your own, with staff to coach you. Pick fillings from 21 toppings or try the rainbow, matcha or squid-ink "magma" takoyaki; a 10-piece custom set is ¥990, and the all-you-can-eat-and-drink course is ¥4,500. English menus and staff; tatami seats suit families. Book: it fills, with about half the guests from overseas (June 2026).',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog listing and PR Times: run by 株式会社place・to・connect; a Tripadvisor Travelers\' Choice award winner (PR Times, search result). A December 2025 reviewer notes it sits on the 4th floor above a long-established takoyaki shop.', philosophy: null, specialty: 'Grill-your-own takoyaki with 21 toppings.',
      anecdotes: [
        { text: '"Even if you don\'t know how to cook takoyaki, the staff will kindly guide you, so you can feel at ease!" — December 2025.', source: R + 'B519246885/' },
        { text: '"During my visit, the restaurant was fully booked, with about half of the customers being international visitors." — June 2026, a reviewer who found the rainbow takoyaki expensive.', source: R + 'B524812052/' },
        { text: '"Even my elementary school child enjoyed making it." — September 2026.', source: R + 'B536451670/' },
      ],
      japanese_sources_summary: '食べログ: 自分で焼けるたこ焼き居酒屋 TAKOYAKI LAB、居酒屋・たこ焼き・串揚げ、大阪市中央区西心斎橋2-3-16 EPIC BUILDING 4F、毎日12:00〜24:00 (料理 L.O. 23:00、ドリンク L.O. 23:30)、年中無休、予約可 (ひとり1ドリンク1フード)、混雑時は2時間制、カード・電子マネー・QR 決済可、45席 (カウンター5、テーブル20、座敷20)、禁煙、子ども可、英語・中国語・韓国語のメニューとスタッフ、ベジタリアン対応の表示、運営は place・to・connect。21種のトッピングから選ぶカスタムたこ焼き、抹茶や海老バジルのたこ焼き、串カツ、お好み焼き、寿司、海鮮、120分食べ飲み放題4,500円。口コミ(2025年12月〜2026年10月): たこなしのカスタムたこ焼き10個990円、串カツ3本690円、明太チーズのだし巻き880円、刺身3種1,210円、抹茶ティラミス770円、rainbow たこ焼き、magma たこ焼き、チャンジャ、チーズフォンデュ、チョレギサラダ、そばめし、店の人が焼き方を教えてくれる、QR コードで注文、外国人客が半分ほど、rainbow は高いという声も。',
      confidence: 'medium', sources: [TB, 'https://place-to-connect.com/service/takoyaki-lab/', 'https://prtimes.jp/main/html/rd/p/000000007.000168437.html', R + 'B518600433/', R + 'B519057814/', R + 'B519159018/', R + 'B519246885/', R + 'B521952464/', R + 'B522018926/', R + 'B523114389/', R + 'B524812052/', R + 'B531595001/', R + 'B531710768/', R + 'B534698604/', R + 'B536451670/', R + 'B537031989/', R + 'B537520750/', R + 'B538099970/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus and staff (Tabelog); staff teach you to grill (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区西心斎橋2-3-16 EPIC BUILDING 4F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing, operator page and PR Times release; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区西心斎橋二丁目3番16号 (go) 10m. Nearest records: 和ビストロ 一喜一遊 (2-3-22) 21 m, Old Cairo Cafe (2-3-21) 22 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B521952464/', TB],
    price_note: 'Prices from a February 2026 review; courses from the Tabelog listing.', last_checked: TODAY, items: [
      it('', '', 'Custom takoyaki, 10 pieces (grill yourself)', '¥990', 'Takoyaki', 'no', 'ask', 'February 2026 review; octopus optional.', 'custom_takoyaki'),
      it('', '', 'Rainbow takoyaki', '', 'Takoyaki', 'no', 'no', 'June 2026 reviews.', 'rainbow_takoyaki'),
      it('', '', 'Kushikatsu, 3 pieces', '¥690', 'Fried', 'no', 'no', 'February 2026 review.', 'kushikatsu_3'),
      it('', '', 'Mentaiko-cheese dashimaki', '¥880', 'Small plates', 'ask', 'no', 'February 2026 review.', 'mentai_dashimaki'),
      it('', '', 'All-you-can-eat-and-drink, 8 kinds of takoyaki, 120 min', '¥4,500', 'Course', 'no', 'no', 'Tabelog listing.', 'tabehodai'),
    ] }, {
    cuisine: '自分で焼くたこ焼きの居酒屋: 21種のトッピングで自由にカスタム、抹茶や海老バジルのたこ焼きも。串カツ、お好み焼き、寿司、海鮮も (食べログの店の紹介)・たこ焼き8種の120分食べ飲み放題4,500円、アラカルトの120分飲み放題2,200円 (27種) か3,300円 (38種) (食べログ)・2026年2月の値段: たこなしのカスタムたこ焼き10個990円、串カツ3本690円、明太チーズのだし巻き880円、刺身3種1,210円、抹茶ティラミス770円、ジンジャーエール550円・ピンクと緑の生地の rainbow たこ焼き、イカ墨で黒くしたたこの「magma」たこ焼き (2026年6月)・海老バジル、チャンジャ、チーズフォンデュのたこ焼き、チョレギサラダ、そばめし (2026年7〜10月)・たこ、イカ、明太のプレーンのたこ焼き、れんこん、牛、白身魚の串カツ (2025年12月)',
    neighborhood: '西心斎橋2-3-16 EPIC BUILDING 4F、たこ焼き屋の上。なんば駅から徒歩3分、心斎橋駅から徒歩5分',
    gf_detail: 'グルテンフリーではありません。たこ焼きとお好み焼きは小麦粉の生地で、串カツとそばめしも。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあり、たこなしのたこ焼きもできる (2026年2月) が、生地はふつうだし入りで、ヴィーガンの説明はない。',
    notes: '[たこ焼き・西心斎橋、自分で焼く] ビルの4階、各テーブルにたこ焼きの鉄板があり、生地を流して具を入れて、自分で返して焼く居酒屋。店の人が教えてくれる。21種のトッピングから選ぶか、rainbow、抹茶、イカ墨の「magma」たこ焼きを。カスタム10個990円、食べ飲み放題のコースは4,500円。英語のメニューとスタッフあり。座敷は家族連れに。満席になるので予約を。客の半分ほどが外国人 (2026年6月)。',
  });
}

// ================================================================ つぼルー カレー鍋 心斎橋総本家
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27133511/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_tsuboru_curry_nabe_shinsaibashi', name: 'つぼルー カレー鍋 心斎橋総本家 (Tsuboru Curry Nabe Shinsaibashi Sohonke)', category: 'OMNI',
    lat: 34.670992, lng: 135.502284, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The curry broth is a blend of 24 spices; finishes include udon, ramen and a grilled cheese risotto, and courses add fried dishes.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegan and vegetarian options, but the standard hot pot comes with beef, pork, chicken or lamb (2026); ask whether a plant-only pot and broth are possible.',
    hours_raw: 'Daily 17:00–23:00, last order 22:30; closed irregularly once or twice a month, call to confirm (Tabelog). The tabiiro listing also gives lunch 11:00–15:30 (search result). Reservations accepted; private hire for 15+ (Tabelog). Seat charge ¥300 for overseas guests only, not for domestic guests (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC and other e-money, QR payment including Alipay and WeChat Pay (Tabelog). 22 seats (4 counter, 18 table), a curtained semi-private room for 4; smoking allowed (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shinsaibashi-suji 2-2-1, ニシモトビルヂング 3F — 6 min from Shinsaibashi Stn',
    cuisine: 'Medicinal-style curry hot pot with plenty of vegetables and meat in a broth of 24 spices; daily small plates; all-you-can-drink courses (Tabelog shop text) · standard course with 90 minutes of drinks: appetisers, fried dishes, the hot pot and a choice of finish (Tabelog) · hot pot of chicken, pork and beef, sweet-spicy chicken wings (November 2025); five kinds of meat (October 2026) · toppings: oysters (October 2026), lamb (May and October 2026), A5 wagyu (May 2026) · finishes: udon, ramen, curry risotto, grilled cheese risotto (2026) · mega highball (October 2026)',
    website: null, gmaps: gm('つぼルー カレー鍋 心斎橋総本家'), menu_url: null,
    notes: '[Curry hot pot · Shinsaibashi, 24-spice broth] A small third-floor shop off Shinsaibashi-suji serving a cabbage-heavy hot pot in a medicinal-style curry broth of 24 spices, with meat and add-ons like oysters or lamb, finished with udon, ramen or a charred cheese risotto. Courses with drinks are good value; the manager keeps the room lively (October 2026). Smoking is allowed, and a ¥300 seat charge applies to overseas guests only.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per the Tabelog shop listing (corporate member): a medicinal curry hot pot of 24 spices. Per tabiiro (search result): run by a woman owner from Hokkaido (not named). A May 2026 reviewer says some of the spices were featured on the TV show "Reiwa no Tora".', philosophy: null, specialty: 'Curry hot pot of 24 spices.',
      anecdotes: [
        { text: '"The manager, who is very charming, truly knows how to create a great atmosphere." — October 2026.', source: R + 'B537574359/' },
        { text: '"The grilled beef tongue was lukewarm, possibly heated in the microwave, which was disappointing. However, the curry hot pot was delicious." — November 2025.', source: R + 'B518653312/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): つぼルー カレー鍋 心斎橋総本家、鍋、大阪市中央区心斎橋筋2-2-1 ニシモトビルヂング 3F、心斎橋駅から徒歩6分、毎日17:00〜23:00 (L.O. 22:30)、不定休 (月1〜2回)、予約可、席料300円 (国内の方からは頂戴しておりません)、カード・電子マネー・QR 決済可、22席 (カウンター4、テーブル18)、カーテンの半個室4名、喫煙可、ヴィーガン・ベジタリアン対応の表示。野菜と肉たっぷり、24種のスパイスの薬膳カレー鍋、日替わりのつまみ、飲み放題つきのコース。口コミ(2025年10月〜2026年10月): 鶏・豚・牛の鍋、甘辛い手羽、牡蠣とラムのトッピング、A5の牛、締めはうどん、ラーメン、カレーリゾット、焼きチーズリゾット、メガハイボール、店長が楽しい、牛タンがぬるかったという声も。北海道出身の女性オーナー (たびいろ)。',
      confidence: 'medium', sources: [TB, 'https://tabiiro.jp/gourmet/s/313234-osaka-tsuboru-curry/', R + 'B488697881/', R + 'B506400257/', R + 'B516333710/', R + 'B517810652/', R + 'B518653312/', R + 'B528366216/', R + 'B528716293/', R + 'B529995208/', R + 'B531191300/', R + 'B536498307/', R + 'B537574156/', R + 'B537574359/', R + 'B537575288/', R + 'B537581745/', R + 'B538331658/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the hot pot (November 2025). A ¥300 seat charge applies to overseas guests only (Tabelog). No English evidence found.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区心斎橋筋2-2-1 ニシモトビルヂング 3F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区心斎橋筋二丁目2番1号 (go) 1m. Nearest records: 八八八 (2-2-2) 20 m, しじみラーメン Shi43屋 22 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537581745/'],
    price_note: 'No item prices in the sources; reviews put dinner at ¥4,000–6,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Tsuboru curry hot pot (24 spices, vegetables, meat)', '', 'Hot pot', 'ask', 'no', 'Tabelog shop text; 2025–2026 reviews.', 'curry_nabe'),
      it('', '', 'Oyster or lamb topping', '', 'Toppings', 'ask', 'no', 'May and October 2026 reviews.', 'nabe_topping'),
      it('', '', 'Grilled cheese risotto finish', '', 'Finish', 'ask', 'no', '2026 reviews.', 'cheese_risotto'),
      it('', '', 'Standard course with 90 minutes of drinks', '', 'Course', 'ask', 'no', 'Tabelog listing.', 'standard_course'),
    ] }, {
    cuisine: '野菜と肉がたっぷり、24種のスパイスの薬膳カレー鍋。日替わりのつまみ、飲み放題つきのコース (食べログの店の紹介)・90分飲み放題つきのスタンダードコース: 前菜、揚げ物、鍋、選べる締め (食べログ)・鶏、豚、牛の鍋、甘辛い手羽 (2025年11月)、肉は5種 (2026年10月)・トッピング: 牡蠣 (2026年10月)、ラム (2026年5月・10月)、A5の牛 (2026年5月)・締め: うどん、ラーメン、カレーリゾット、焼きチーズリゾット (2026年)・メガハイボール (2026年10月)',
    neighborhood: '心斎橋筋2-2-1 ニシモトビルヂング 3F。心斎橋駅から徒歩6分',
    gf_detail: '要確認。グルテンの情報なし。カレーのスープは24種のスパイス。締めはうどん、ラーメン、焼きチーズリゾットで、コースには揚げ物も。',
    vegan_detail: '要確認。食べログにはヴィーガン・ベジタリアン対応とあるが、ふつうの鍋は牛、豚、鶏、ラムが入る (2026年)。植物性だけの鍋とスープにできるか確認を。',
    notes: '[カレー鍋・心斎橋、24種のスパイスのスープ] 心斎橋筋のビルの3階の小さな店で、キャベツたっぷりの鍋を24種のスパイスの薬膳カレーのスープで。肉に牡蠣やラムを足して、締めはうどん、ラーメン、焼き目のついたチーズリゾット。飲み放題つきのコースがお得で、店長が場を盛り上げる (2026年10月)。店内は喫煙可。席料300円は海外からの客のみ。',
  });
}

// ================================================================ DON
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270202/27058467/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '21:00']), FS = day(['11:00', '22:00']);
  put({
    id: 'osaka_okonomi_teppan_don_namba', name: 'お好み 鉄板 居酒屋 DON (Okonomi Teppan Izakaya DON)', category: 'OMNI',
    lat: 34.666261, lng: 135.501767, cuisine_type: 'okonomiyaki',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: okonomiyaki and yakisoba are wheat batter and wheat noodles.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, but okonomiyaki batter usually contains egg and dashi; nothing is described as vegan.',
    hours_raw: 'Wed, Thu, Sun and holidays 11:00–21:00 (last food order 20:30); Fri–Sat 11:00–22:00 (last food order 21:30); closed Mondays and Tuesdays and irregularly — call to confirm (Tabelog). Reservations for 2 or more; booked guests order one drink and one dish (Tabelog); walk-ins without drinks were fine at 15:00 on a weekday (May 2025). No service or cover charge (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), transport IC, iD, QUICPay and QR payment (Tabelog). 75 seats on the 2nd (37) and 3rd (38) floors with counter and sofas; heated tobacco only in a designated area (Tabelog). The owner speaks English with overseas guests (November 2025). Walls covered in signed photos of comedians (November 2025).',
    hours: { 2: H, 3: H, 4: FS, 5: FS, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Namba 3-2-33, 2nd–3rd floors, between 551 Horai and Bic Camera — 2 min from Namba Stn',
    cuisine: 'Okonomiyaki, yakisoba and teppanyaki, cooked in the kitchen and finished on your table grill (2025–2026 reviews) · signature "DON Special" okonomiyaki (July 2026) · butatama ¥900 and horumon yakisoba (November 2025) · seared negi-pork okonomiyaki ¥980, torched at the table (September 2025) · four-cheese okonomiyaki, shrimp-and-cheese okonomiyaki (October 2025) · suji-kimchi-tama, aburi negi butatama (February 2025) · grilled green onion ¥1,180, baked potato with mentaiko and cheese ¥1,180 (February 2025) · negiyaki (May 2026), omu-tama (July 2026) · butter-grilled scallops and mushrooms; winter oyster okonomiyaki (February 2026) · shrimp garlic butter with shimeji; Toyama sake (August 2026) · crunchy horumon (February 2025)',
    website: null, gmaps: gm('お好み鉄板居酒屋 DON 難波'), menu_url: null,
    notes: '[Okonomiyaki · Namba, all-day teppan by the station] A two-floor okonomiyaki and teppan izakaya above the street between 551 Horai and Bic Camera, open from 11:00. The kitchen cooks your okonomiyaki and finishes it on your table grill; try the DON Special, the torched negi-pork or a cheese okonomiyaki, with horumon yakisoba. Reviewers find it calmer and better value than the tourist spots nearby, and the owner speaks English. Closed Mondays and Tuesdays.',
    chef_bio: { chef_name: null, roles: [], origin: null, background: 'Per reviews: a long-running owner-led shop (owner not named) — a November 2025 regular has visited since it opened and saw the owner speak English with overseas guests; an August 2026 reviewer describes the older owner\'s attentive service.', philosophy: null, specialty: 'DON Special okonomiyaki.',
      anecdotes: [
        { text: '"Unlike other places bustling with foreign tourists, this restaurant had a lot of Japanese customers. As a result, the prices were reasonable, and the taste was delicious." — August 2025.', source: R + 'B512077848/' },
        { text: '"Recently, it seems there are many foreign customers, and the owner was communicating in English." — November 2025, a regular since opening.', source: R + 'B517999062/' },
        { text: '"The batter was fluffy and delicious, but there wasn\'t much filling. The staff came to turn off the grill quite early" — February 2025.', source: R + 'B501784191/' },
      ],
      japanese_sources_summary: '食べログ: お好み 鉄板 居酒屋 DON、お好み焼き・居酒屋・鉄板焼き、大阪市中央区難波3-2-33、なんば駅から徒歩2分、551蓬莱とBic Camera のあいだ、水・木・日・祝11:00〜21:00 (料理 L.O. 20:30)、金・土11:00〜22:00 (料理 L.O. 21:30)、月・火休み、不定休あり、予約は2名から (予約の方は1ドリンク1フード)、サービス料・チャージ料なし、カード・電子マネー・QR 決済可、75席 (2階37、3階38)、加熱式たばこのみの喫煙所、ベジタリアン対応の表示。口コミ(2025年2月〜2026年8月): DON スペシャル焼き、豚玉900円、ホルモン焼きそば、炙りねぎ豚980円、4種のチーズのお好み焼き、えびチーズ、すじキムチ玉、ねぎ焼き、オム玉、ホタテとキノコのバター焼き、冬の牡蠣のお好み焼き、えびのガーリックバター、Toyama の日本酒、芸人のサイン、オーナーが英語で対応、日本人客が多く手ごろという声、具が少ないという声も。',
      confidence: 'medium', sources: [TB, R + 'B500921065/', R + 'B501784191/', R + 'B501952284/', R + 'B506696768/', R + 'B511526074/', R + 'B512077848/', R + 'B515492309/', R + 'B516128830/', R + 'B516529282/', R + 'B517999062/', R + 'B522429147/', R + 'B529413223/', R + 'B531649576/', R + 'B534584337/'] },
    cultural_comfort: { level: 'english', note: 'The owner speaks English with overseas guests (November 2025); food is cooked for you (2025–2026).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市中央区難波3-2-33',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated through August 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市中央区難波三丁目2番33号 (go) 9m. Nearest records: 金龍ラーメン 戎橋店 20 m, どうとんぼり神座 戎橋店 (3-2-30) 26 m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B516529282/', R + 'B515492309/', TB],
    price_note: 'Prices from February–November 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'DON Special okonomiyaki', '', 'Okonomiyaki', 'no', 'no', 'July 2026 review.', 'don_special'),
      it('', '', 'Butatama (pork okonomiyaki)', '¥900', 'Okonomiyaki', 'no', 'no', 'November 2025 review.', 'butatama'),
      it('', '', 'Seared negi-pork okonomiyaki', '¥980', 'Okonomiyaki', 'no', 'no', 'September 2025 review.', 'aburi_negibuta'),
      it('', '', 'Horumon yakisoba', '', 'Yakisoba', 'no', 'no', 'November 2025 review.', 'horumon_yakisoba'),
      it('', '', 'Baked potato with mentaiko and cheese', '¥1,180', 'Teppan', 'ask', 'no', 'February 2025 review.', 'mentai_potato'),
    ] }, {
    cuisine: '厨房で焼いて、テーブルの鉄板で仕上げるお好み焼き、焼きそば、鉄板焼き (2025〜2026年の口コミ)・名物の「DON スペシャル」のお好み焼き (2026年7月)・豚玉900円とホルモン焼きそば (2025年11月)・テーブルでバーナーで炙るねぎ豚のお好み焼き980円 (2025年9月)・4種のチーズのお好み焼き、えびとチーズのお好み焼き (2025年10月)・すじキムチ玉、炙りねぎ豚玉 (2025年2月)・焼きねぎ1,180円、明太チーズのベイクドポテト1,180円 (2025年2月)・ねぎ焼き (2026年5月)、オム玉 (2026年7月)・ホタテとキノコのバター焼き、冬の牡蠣のお好み焼き (2026年2月)・えびとしめじのガーリックバター、Toyama の日本酒 (2026年8月)・歯ごたえのあるホルモン (2025年2月)',
    neighborhood: '難波3-2-33 の2〜3階、551蓬莱とBic Camera のあいだ。なんば駅から徒歩2分',
    gf_detail: 'グルテンフリーではありません。お好み焼きと焼きそばは小麦の生地と麺。',
    vegan_detail: '要確認。食べログにはベジタリアン対応とあるが、お好み焼きの生地にはふつう卵とだしが入る。ヴィーガンの説明はない。',
    notes: '[お好み焼き・なんば、駅近の一日中の鉄板] 551蓬莱とBic Camera のあいだ、2〜3階のお好み焼きと鉄板の居酒屋で、11時から開いている。お好み焼きは厨房で焼いてテーブルの鉄板で仕上げる。DON スペシャル、炙りねぎ豚、チーズのお好み焼きに、ホルモン焼きそばを。近くの観光客向けの店より落ち着いていて手ごろという声があり、オーナーは英語も話す。月・火休み。',
  });
}

save();
