// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 3.
//   + ジビエ料理 あまからくまから 人形町 Amakara Kumakara (wild-game restaurant: badger, bear, venison; owner 林育夫)
//   + 炭火焼鳥 いざ和 人形町店 Sumibi Yakitori Izawa (19-seat charcoal yakitori, courses at night; opened September 2025)
//   + くらのあかり 人形町本店 Kura no Akari (aged beef-tongue and seafood izakaya in a renovated three-floor house)
//   + Washoku バル かめすけ Washoku Bar Kamesuke (12-seat creative washoku and sake bar run by one person; since 2021)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 12 ningyocho` (main repo, 2026-11-01): the first four,
//   35, 62, 107 and 113 m from the circle centre. Core by: Amakara 20 seats; Izawa 19 seats; Kura no Akari vegtag (Tabelog
//   "Vegan options, Vegetarian options"; 80 seats); Kamesuke 12 seats; all with 92–280 reviews.
//   Dedupe. None is in data/tokyo.json by name (JA or romaji) or address. Izawa shares 日本橋人形町2-6-7 with
//   tokyo_mennosuke_ningyocho (address_ja "東京都中央区日本橋人形町2-6-7"; Izawa is on 5F of SIL人形町); the Tabelog points
//   are 12 m apart, so the pins stay apart.
//   Chain check. Amakara: two shops, Ningyocho and Asakusa (Tabelog remarks; official site); the Asakusa shop is not in data.
//   Izawa: one shop found (web search: only 人形町店). Kura no Akari: "本店" and a January 2026 diner was redirected from a
//   "sister restaurant"; a web search links it to the group that runs 伊達のくら, but no page I could open confirms it —
//   a small group at most, not a fast-growing chain. Kamesuke: single shop.
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-01';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ ジビエ料理 あまからくまから 人形町
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13015439/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'https://amakara9.com/'; const ABOUT = SITE + 'about/'; const OWNER = SITE + 'gibier-hyoronka/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'tokyo_amakara_kumakara_ningyocho', name: 'ジビエ料理 あまからくまから 人形町 (Gibier Ryori Amakara Kumakara Ningyocho)', category: 'OMNI',
    lat: 35.68649, lng: 139.781902, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. Grilled game meats and low-temperature sashimi may suit, but nothing is called gluten-free; courses include badger sukiyaki finished with Inaniwa udon, bear stewed in red wine, tsukudani and miso-seasoned dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wild-game restaurant; every course is built on meat, with a farm-vegetable salad as the only plant dish mentioned.',
    hours_raw: 'Mon–Sat 17:00–23:00 (last order 22:00; last seating 20:30); closed Sundays and holidays (Tabelog). The official site gives 17:00–22:30 (last order 21:30). Courses must be booked; the hands-on chitatap (Ainu-style pounded meat) is course-only (Tabelog). Appetizer charge ¥390 and a 10% late-night charge after 22:00, both waived on the bookable courses (Tabelog). Cards (VISA, Master, JCB, AMEX) and PayPay (Tabelog). 20 seats on the 2nd and 3rd floors, incl. semi-private rooms with sunken kotatsu tables for 4 and 8 (Tabelog; June 2026 review). Non-smoking. A sister shop in Asakusa (Tabelog; official site).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 3-7-11, 大川ビル 2F — 30 seconds from the Ningyocho crossing, between Daiso and Hidakaya, above くし長; 1 min from Ningyocho Stn exit A5',
    cuisine: 'Wild game (gibier) from culled animals, mostly as courses (Tabelog set menus, tax included, read November 2026): first-timer bear course of 8 dishes ¥18,800; "Animal Encyclopedia" course of nine species (Ezo deer, kyon, sea lion, mikan-fed boar, raccoon, badger, duck, brown bear, moon bear) ¥22,000; autumn 2026 course comparing wild-grape brown bear and Shine Muscat badger as shabu-shabu ¥25,000; 2026 diners also had courses at ¥9,580 (an Ainu-inspired "Golden Kamuy" course), ¥12,000 and ¥12,800 · signatures: anaguma (Japanese badger) kakuni and badger sukiyaki finished with Inaniwa udon; Ezo venison grilled over charcoal with lingonberry sauce; venison-heart sashimi; brown bear braised in red wine; lingonberry ice cream (2026 reviews) · à la carte additions to a course (Tabelog menu, September 2026): braised bear paw ¥38,000; Yakushima venison steak ¥9,800; brown bear vs moon bear steak ¥9,800; half a grilled crow ¥3,800; badger tataki ¥2,800; sea lion tataki ¥1,980; dolphin tataki from Taiji, Wakayama ¥2,500 · an "animal encyclopedia" booklet with stickers for each animal eaten, ¥300 (June 2026)',
    website: SITE, gmaps: gm('ジビエ料理 あまからくまから 人形町'), menu_url: MENU,
    notes: "[Wild game · Ningyocho, badger, bear and venison from culled animals] A small second- and third-floor dining room at the Ningyocho crossing devoted to Japanese game. The owner, 林育夫, opened in Ningyocho in 1996 and turned to game in the shop's fifteenth year (official site). The meat comes from culled animals: badgers trapped in persimmon, grape and Shine Muscat orchards, whose fat tastes of fruit; moon bears from Akita, Gifu, Nagano and Niigata; Ezo and Yakushima deer; sea lion, kyon and more. Most diners book a course: tataki and heart sashimi to start, Ezo venison off the charcoal, red-wine-braised bear, and badger sukiyaki finished with udon. Bear paw, crow and dolphin tataki are add-ons. First-timers in 2026 were surprised how little gamey taste there was. The badger kakuni became famous through the YouTube videos of Masahiro Higashide, who also held a magazine discussion here (2026 reviews; Tabelog). One June 2026 diner found the service poor. Collect a sticker for each animal you eat. Closed Sundays and holidays.",
    chef_bio: { chef_name: '林育夫 (reading はやし いくお on the shop\'s site)', roles: ['Owner (店主, official site)', 'Representative director of 一般社団法人 熊肉活用研究所 (official site)', 'Self-styled "gibier critic" (ジビエ評論家, official site)'], origin: null,
      background: 'Per the owner\'s page on the official site: opened in Ningyocho, Tokyo, in September 1996 and became a game specialist in the fifteenth year, thirty years in all in 2026 (the site\'s shop page gives the opening year as 2005); founded the bear-meat research association 一般社団法人 熊肉活用研究所 in December 2023; has handled more than 40 species; buys about 100 badgers a year from 10 hunters and serves about 3,000 badger meals a year; buys bear whole (mainly moon bear from Akita, Gifu, Nagano and Niigata) and uses every part; about 300 bear-paw servings a year, simmered half a day then 5–12 hours; uses only meat from licensed processing facilities; writes only about meat the owner has eaten. Operating company ティナズダイニング (official site). Media: the programme Houdou Station and the magazine RiCE, where Masahiro Higashide held a discussion at the shop (Tabelog); the YouTube channel of EXIT りんたろー。 in October 2026 (official site).',
      philosophy: 'Use up culled animals deliciously, to the last part (official site); game with no unpleasant smell or toughness, enjoyable even for beginners (official site).', specialty: 'Anaguma (badger) kakuni and sukiyaki; bear meat; Ezo venison.',
      anecdotes: [
        { text: '"After the meal, you can get an animal encyclopedia for JPY 300, where you can stick labels of the meats you\'ve tried!" — June 2026.', source: R + 'B530215752/' },
        { text: '"When I mentioned I was a fan of Masahiro Higashide, they kindly offered to guide me to the table where [Higashide] was recently interviewed." — July 2026, ¥12,000 course.', source: R + 'B532934205/' },
        { text: '"Red Wine Braised Higuma Meat → The more you chew, the more umami flavor is released." — June 2026, ¥12,800 course.', source: R + 'B533396561/' },
      ],
      japanese_sources_summary: '公式サイト (amakara9.com): 日本橋人形町と浅草にあるジビエレストラン、初心者でも楽しめる、嫌な臭みや硬さを感じない本当においしいジビエ料理、店主 林育夫 (はやし いくお)、一般社団法人 熊肉活用研究所 代表理事、ジビエ評論家、1996年9月に人形町で開業、15年目にジビエ専門店へ、2026年で通算三十年、扱った動物は40種類以上、アナグマは10人の猟師から年間約100頭、年間約3,000食、熊・鹿・猪はそれぞれ年間300kg以上、熊は一頭単位で仕入れ、産地は秋田・岐阜・長野・新潟の月の輪熊が中心、熊の手は年間約300食、正規の許可を持つ食肉処理施設を通した肉だけ、運営会社ティナズダイニング、人形町店は大川ビル2F、ダイソーさんと日高屋さんの間、一階はくし長さん、17:00〜22:30、日曜・祝日休み、20席、お通し390円、22時以降は深夜料金10%、2026年10月に EXIT のりんたろー。さんの YouTube で紹介。食べログ: コース18,800円〜25,000円、熊の手38,000円、イルカのたたき、トドのたたき、山カラス、浅草店もあり。口コミ(2026年5月〜9月): 臭みが少なく初心者でも食べやすい、穴熊のすき焼きとInaniwa うどん、ヒグマの赤ワイン煮、エゾシカの炭火焼き、食べる動物図鑑とシール300円、Masahiro Higashide のファンも、接客が悪かったという声も。',
      confidence: 'medium', sources: [TB, MENU, SITE, ABOUT, OWNER, R + 'B528519627/', R + 'B529265459/', R + 'B530215752/', R + 'B530226811/', R + 'B530838962/', R + 'B531936171/', R + 'B532309776/', R + 'B532934205/', R + 'B533396561/', R + 'B535736496/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses booked in advance; staff explain each animal (May 2026); the official site has an English link.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-7-11 大川ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a menu updated September 2026; official site posts through October 2026; reviews dated May–September 2026.' },
    pin_source: `Tabelog ${TB} (35.686490, 139.781902); cross-checked: GSI 東京都中央区日本橋人形町三丁目7番11号 (go) 6m. Next door to Manyoken (tokyo_manyoken_ningyocho, address_ja "東京都中央区日本橋人形町3-7-10 日本橋DOLL-3 1F", 8 m away), a different building; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, MENU, R + 'B531936171/', R + 'B532934205/'],
    price_note: 'Course prices from Tabelog set menus (tax included; read November 2026) and 2026 reviews; à la carte add-ons from the Tabelog menu (updated 22 September 2026).', last_checked: TODAY, items: [
      it('', '', 'First-time bear meat course, 8 dishes', '¥18,800', 'Courses', 'ask', 'no', 'Tabelog set menu; no appetizer, service or late-night charge.', 'bear_course'),
      it('', '', '"Animal Encyclopedia" course: nine species of culled game', '¥22,000', 'Courses', 'ask', 'no', 'Tabelog set menu.', 'zukan_course'),
      it('', '', 'Autumn 2026 course: wild-grape brown bear and Shine Muscat badger shabu-shabu', '¥25,000', 'Courses', 'ask', 'no', 'Tabelog set menu.', 'autumn_course'),
      it('', '', 'Gourmet course incl. badger sukiyaki and Inaniwa udon', '¥12,000', 'Courses', 'no', 'no', 'July 2026 review.', 'gourmet_course'),
      it('', '', 'Braised bear paw, one serving (course add-on)', '¥38,000', 'Add-ons', 'ask', 'no', 'Tabelog menu; ask when booking.', 'bear_paw'),
      it('', '', 'Brown bear vs moon bear steak (course add-on)', '¥9,800', 'Add-ons', 'ask', 'no', 'Tabelog menu.', 'bear_steak'),
      it('', '', 'Dolphin tataki from Taiji, Wakayama (course add-on)', '¥2,500', 'Add-ons', 'ask', 'no', 'Tabelog menu.', 'dolphin_tataki'),
    ] }, {
    cuisine: '駆除された野生動物のジビエ、主にコース (食べログのコース、税込み、2026年11月に確認): 初めての熊肉コース8品18,800円、9種類の動物 (エゾシカ、キョン、トド、みかんイノシシ、アライグマ、アナグマ、カモ、ヒグマ、月の輪熊) の「食べる動物図鑑」コース22,000円、2026年秋の山ぶどうヒグマとシャインマスカット穴熊を食べ比べるしゃぶしゃぶのコース25,000円。2026年の口コミでは9,580円 (アイヌの料理にちなむ「Golden Kamuy」のコース)、12,000円、12,800円のコースも・名物: 穴熊の角煮、Inaniwa うどんで締める穴熊のすき焼き、コケモモのソースで食べるエゾシカの炭火焼き、鹿の心臓の刺身、ヒグマの赤ワイン煮、コケモモのアイス (2026年の口コミ)・コースに追加できる一品 (食べログのメニュー、2026年9月): 熊の手の煮込み38,000円、Yakushima の鹿のステーキ9,800円、ヒグマと月の輪熊の食べ比べステーキ9,800円、山カラスの炭火焼き (半羽) 3,800円、穴熊のたたき2,800円、トドのたたき1,980円、Taiji (Wakayama) のイルカのたたき2,500円・食べた動物のシールを貼る「食べる動物図鑑」300円 (2026年6月)',
    neighborhood: '日本橋人形町3-7-11 大川ビル 2F。人形町交差点から徒歩30秒、ダイソーと日高屋の間、1階はくし長。人形町駅A5出口から徒歩1分',
    gf_detail: '予約時に要確認。炭火焼きのジビエや低温調理の刺身は合うかもしれないが、グルテンフリーの説明はない。コースにはInaniwa うどんで締める穴熊のすき焼き、ヒグマの赤ワイン煮、佃煮、味噌味の料理も (2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではない: ジビエの店で、どのコースも肉が中心。植物性の料理として出てくるのは畑の野菜のサラダだけ。',
    notes: '[ジビエ・人形町、駆除された穴熊、熊、鹿の店] 人形町交差点の2階と3階にある、日本のジビエ専門の小さな店。店主の林育夫さんは1996年に人形町で開業し、15年目にジビエ専門店に切り替えた (公式サイト)。肉は駆除された動物で、柿、ぶどう、シャインマスカットの果樹園で捕れた穴熊は脂が果物の香り。月の輪熊は秋田、岐阜、長野、新潟から。ほかにエゾシカや Yakushima の鹿、トド、キョンなど。多くの客はコースを予約する: たたきと心臓の刺身に始まり、炭火のエゾシカ、ヒグマの赤ワイン煮、うどんで締める穴熊のすき焼き。熊の手、カラス、イルカのたたきは追加で。2026年に初めて食べた人は臭みの少なさに驚いている。穴熊の角煮は Masahiro Higashide さんがここで対談し YouTube で紹介して有名になった (2026年の口コミ、食べログ)。2026年6月には接客が悪かったという声も。食べた動物ごとにシールを集められる。日曜・祝日休み。',
  });
}

// ================================================================ 炭火焼鳥 いざ和 人形町店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13311381/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const WK = day(['11:30', '15:00'], ['17:00', '23:00']); const SAT = day(['17:00', '23:00']);
  put({
    id: 'tokyo_sumibi_yakitori_izawa_ningyocho', name: '炭火焼鳥 いざ和 人形町店 (Sumibi Yakitori Izawa Ningyocho)', category: 'OMNI',
    lat: 35.686429, lng: 139.782846, cuisine_type: 'yakitori',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free as served: the shop says it cannot take reservations from guests with severe allergies, including to seasonings (Tabelog). Courses use yakitori tare, dashi soy sauce, grilled tempura, ramen and keema curry; some skewers come with salt, wasabi or shiso sauce.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a chicken restaurant; even the eggplant is cooked in chicken fat (October 2026).',
    hours_raw: 'Mon–Fri and the day before a holiday 11:30–15:00 (last order food 14:00, drinks 14:30) and 17:00–23:00 (last order food 22:00, drinks 22:30); Sat 17:00–23:00; closed Sundays and holidays, but open through Golden Week and Obon (Tabelog). Dinner is courses only; lunch has its own menu (Tabelog). Course cancellations: 100% on the day or the day before, 50% two days before (Tabelog). Cards and PayPay; no e-money (Tabelog). 19 seats: 9 at the counter, 10 at tables; can be hired for up to 20 (Tabelog). Non-smoking; wheelchair accessible; English, Chinese and Korean menus; drinks ordered by QR code at the seat (October 2026). Children by arrangement. Opened 1 September 2025 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-6-7, SIL人形町 5F — 1 min from Ningyocho Stn exit A3 (Hibiya Line, Toei Asakusa Line); same building as Mennosuke',
    cuisine: 'Charcoal yakitori courses (Tabelog set menus, tax included): omakase skewers course of 10 items ¥6,200; Izawa course of 12 items ¥7,200 (October 2026; one October 2026 diner paid ¥7,900); premium course of 15 items ¥8,200 · a typical Izawa course (October 2026): a welcome cup of chrysanthemum sake from Kyoto; dashi-maki tamago topped with sea urchin and salmon roe; skewers of heart, furisode, thigh skin, gizzard with shiso sauce, Kyoto red-chicken negima, liver delivered that day and served rare, deboned wings, onion tsukune; grilled tempura of maitake and Annou sweet potato; eggplant cooked in chicken fat; free refills of grated daikon with house dashi soy sauce; then a choice of chicken soboro rice, sansho keema curry or chicken ramen; sake-lees ice cream or vanilla with sake caramel · rare cuts as course add-ons ¥500–600 (Tabelog menu) · weekday lunch: chicken hitsumabushi (October 2026), sansho keema curry ¥1,000 (October 2026) · sake chosen by the owner, a certified sake sommelier (Tabelog), incl. Hakkaisan, Dassai and Izumo Fuji (2026 reviews); draft beer ¥850; house fruit cocktails ¥900–1,000 · chicken soboro to take away',
    website: TB, gmaps: gm('炭火焼鳥 いざ和 人形町'), menu_url: MENU,
    notes: "[Yakitori · Ningyocho, a calm fifth-floor charcoal-grill counter by the station] A new (September 2025) yakitori restaurant on the fifth floor of a building beside Ningyocho station exit A3, with a nine-seat counter in front of the charcoal grill and tables by the windows. Dinner is courses, from ¥6,200. Most 2026 diners chose the Izawa course: a welcome cup of chrysanthemum sake, dashi-maki tamago under sea urchin and salmon roe, then about eight skewers. Each comes with its own touch: furisode with pickled-ginger miso, gizzard with shiso sauce, liver from that morning served rare, deboned wings, and onion tsukune. There are also charcoal-grilled tempura and eggplant cooked in chicken fat, and you finish with soboro rice, sansho keema curry or chicken ramen. Staff ask how you like the chicken cooked, and diners praise the timing and explanations; one lunch diner in October 2026 found the upselling pushy. The owner is a certified sake sommelier. Guests are seen off with sparks from a flint. Weekday lunches too; closed Sundays.",
    chef_bio: { chef_name: null, roles: ['Owner, a certified sake sommelier (unnamed; Tabelog)', 'Grill chef trained at renowned restaurants (unnamed; Tabelog)'], origin: null,
      background: 'Opened 1 September 2025 (Tabelog). Tabelog\'s shop text: a chef trained in renowned restaurants, with skills honed over many years in yakitori and Japanese restaurants; sake selected from across Japan by the owner, a certified sake sommelier; an interior designed under a professional designer\'s supervision. 2026 reviewers mention Kyoto red chicken ("Kyoto Red Chicken", October 2026) and hens only for the wings. A web search found only this one Izawa shop.',
      philosophy: '"The art of grilling transcends the ingredients" (Tabelog headline); dishes made not only for taste but for presentation (Tabelog).', specialty: 'Charcoal yakitori courses; liver served rare; furisode with pickled-ginger miso.',
      anecdotes: [
        { text: '"Before the course began, I was informed that the yakitori would be served slightly rare, and if I preferred, they could cook it well-done." — October 2026, Izawa course.', source: R + 'B537754036/' },
        { text: '"As I left, I was sent off with a fire striker. The sound and sparks created a warm sense of hospitality." — October 2026, Izawa course.', source: R + 'B537819744/' },
        { text: '"When I informed them about my allergy to fish roe, they kindly replaced the appetizer with a different dish." — October 2026, course.', source: R + 'B538330783/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 炭火焼鳥 いざ和 人形町店、焼き鳥、鶏料理、居酒屋、日本橋人形町2-6-7 SIL人形町 5F、人形町駅A3出口から徒歩1分、月〜金・祝前日11:30〜15:00、17:00〜23:00、土17:00〜23:00、日祝休み (GW・お盆は営業)、19席 (カウンター9、テーブル10)、カード・PayPay可、禁煙、車椅子可、英語・中国語・韓国語のメニュー、重度のアレルギー (調味料を含む) の方の予約は受けられない、コースのキャンセル料は当日・前日100%、2日前50%、2025年9月1日オープン、おまかせ串コース6,200円、いざ和コース7,200円、プレミアムコース8,200円、日本酒のソムリエの資格を持つ店主が選ぶ日本酒、名店で修業した料理人。口コミ(2026年9月〜10月): 菊酒の食前酒、雲丹といくらの出汁巻き玉子、ふりそでと自家製紅生姜味噌、砂肝のしそソース、当日仕入れのレバー、手羽先、玉ねぎ入りのつくね、舞茸と Annou のさつまいもの焼き天ぷら、鶏油で焼いた茄子、おかわり自由の大根おろし、締めは鶏そぼろご飯、山椒キーマカレー、鶏ラーメンから、酒粕アイス、火打ち石で送り出し、昼の鶏ひつまぶし、昼は勧めが少ししつこいとの声も。',
      confidence: 'medium', sources: [TB, MENU, R + 'B534912395/', R + 'B537650996/', R + 'B537720324/', R + 'B537754036/', R + 'B537783691/', R + 'B537819744/', R + 'B537926004/', R + 'B537975816/', R + 'B538330783/', R + 'B538458750/'] },
    cultural_comfort: { level: 'english', note: 'English, Chinese and Korean menus with photos (Tabelog); course dinners and QR ordering for drinks.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Swapped a dish for a fish-roe allergy when told at the start (October 2026 review)', 'Will not take bookings from guests with severe allergies, including to seasonings (Tabelog)'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-6-7 SIL人形町 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated September–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686429, 139.782846); cross-checked: GSI 東京都中央区日本橋人形町二丁目6番7号 (go) 5m. Same address as Mennosuke (tokyo_mennosuke_ningyocho, address_ja "東京都中央区日本橋人形町2-6-7"), whose pin is 12 m away, so the two stay apart; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, MENU, R + 'B537720324/', R + 'B537754036/'],
    price_note: 'Course prices from Tabelog set menus (tax included; read November 2026) and October 2026 reviews; one October 2026 diner was charged ¥7,900 for the Izawa course.', last_checked: TODAY, items: [
      it('', '', 'Omakase skewers course, 10 items (dinner)', '¥6,200', 'Courses', 'no', 'no', 'Tabelog; not in December.', 'omakase_kushi'),
      it('', '', 'Izawa course, 12 items (dinner)', '¥7,200', 'Courses', 'no', 'no', 'Tabelog; October 2026.', 'izawa_course'),
      it('', '', 'Premium course, 15 items (dinner)', '¥8,200', 'Courses', 'no', 'no', 'Tabelog; October 2026.', 'premium_course'),
      it('', '', 'Sansho keema curry (lunch)', '¥1,000', 'Lunch', 'no', 'no', 'October 2026 review.', 'keema_lunch'),
      it('', '', 'Rare cuts, e.g. soriresu, obi, saezuri (course add-on)', '¥600', 'Add-ons', 'ask', 'no', 'Tabelog menu; course guests only.', 'rare_cuts'),
    ] }, {
    cuisine: '炭火焼き鳥のコース (食べログのコース、税込み): おまかせ串コース10品6,200円、いざ和コース12品7,200円 (2026年10月。7,900円だったという声も)、プレミアムコース15品8,200円・いざ和コースの例 (2026年10月): Kyoto の菊酒の食前酒、雲丹といくらをのせた出汁巻き玉子、串はハツ、ふりそで、もも皮、しそソースの砂肝、Kyoto Red Chicken のねぎま、当日届いたレバーをレアで、骨を抜いた手羽先、玉ねぎ入りのつくね、舞茸と Annou のさつまいもの焼き天ぷら、鶏油で焼いた茄子、自家製の出汁醤油の大根おろしはおかわり自由、締めは鶏そぼろご飯、山椒キーマカレー、鶏ラーメンから、酒粕のアイスか日本酒キャラメルのバニラアイス・希少部位はコースに500〜600円で追加 (食べログのメニュー)・平日の昼: 鶏ひつまぶし (2026年10月)、山椒キーマカレー1,000円 (2026年10月)・日本酒のソムリエの資格を持つ店主が選ぶ日本酒 (食べログ)、Hakkaisan、Dassai、Izumo Fuji も (2026年の口コミ)。生ビール850円、自家製フルーツのカクテル900〜1,000円・鶏そぼろの持ち帰りも',
    neighborhood: '日本橋人形町2-6-7 SIL人形町 5F。人形町駅A3出口から徒歩1分 (日比谷線、都営浅草線)。めんのすけと同じ建物',
    gf_detail: 'このままではグルテンフリーではない: 店は調味料を含む重度のアレルギーの方の予約は受けられないとしている (食べログ)。コースには焼き鳥のたれ、出汁醤油、焼き天ぷら、ラーメン、キーマカレー。塩、わさび、しそソースで出る串もある。',
    vegan_detail: 'ヴィーガンではない: 鶏の店で、茄子も鶏油で焼く (2026年10月)。',
    notes: '[焼き鳥・人形町、駅そばの5階の落ち着いた炭火のカウンター] 人形町駅A3出口のすぐ横のビルの5階に2025年9月に開いた焼き鳥店。炭火の焼き台の前に9席のカウンター、窓際にテーブル。夜はコースで6,200円から。2026年の多くの客が選んだのはいざ和コースで、菊酒の食前酒、雲丹といくらをのせた出汁巻き玉子のあと、串が8本ほど。ふりそでには紅生姜味噌、砂肝にはしそソース、その朝届いたレバーはレア、手羽先は骨を抜き、つくねには玉ねぎ。合間に炭火の焼き天ぷらや鶏油の茄子があり、締めは鶏そぼろご飯、山椒キーマカレー、鶏ラーメンから選ぶ。焼き加減の好みを聞いてくれ、料理の出る間合いと説明が好評。2026年10月の昼には勧めがしつこいという声も。店主は日本酒のソムリエの資格を持つ。帰りは火打ち石で送り出してくれる。平日は昼も営業、日曜休み。',
  });
}

// ================================================================ くらのあかり 人形町本店
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13018108/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const SITE = 'https://kuranoakari.owst.jp/';
  const WK = day(['11:30', '14:00'], ['17:00', '23:00']); const SAT = day(['17:00', '22:00']);
  put({
    id: 'tokyo_kura_no_akari_ningyocho', name: 'くらのあかり 人形町本店 (Kura no Akari Ningyocho Honten)', category: 'OMNI',
    lat: 35.686483, lng: 139.783345, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Beef-tongue sashimi with wasabi and salt, salt-grilled tongue and sashimi are the plainest choices, but nothing is called gluten-free; the tongue stew uses a demi-glace, the miso-grilled tongue a house miso, and fried oysters and horse mackerel are on most courses.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists "vegan options" and "vegetarian options", but no vegan dish is named on the menu; the vegetable dishes listed include dried sardines or bacon (komatsuna salad with dried-sardine salt; Caesar salad with Sendai fu and bacon).',
    hours_raw: 'Mon–Fri and the day before a holiday 11:30–14:00 (last order 13:30) and 17:00–23:00 (last order food 22:00, drinks 22:30); Sat 17:00–22:00; closed Sundays and holidays (Tabelog). Weekday lunch is a set with self-service barley rice, miso soup, salad and drinks (April–May 2026). Appetizer charge ¥550, not on courses (Tabelog). Cards and PayPay; no e-money (Tabelog). 80 seats on three floors; private rooms for 2 to over 30; whole floors for 17–34 (Tabelog; October 2025 review). Non-smoking with an outdoor smoking area; children welcome (Tabelog). Phone is best between 15:00 and 18:00 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 2-7-11, down a side alley — 1 min from Ningyocho Stn exit A3 (Hibiya Line), 3 min from Suitengumae Stn exit 7 (Hanzomon Line)',
    cuisine: 'Izakaya of aged beef tongue, seafood and sake (prices from the Tabelog menu, tax included, updated 8 October 2026) · beef tongue: thick-cut aged tongue grilled over binchotan, salt or house miso ¥2,695; tongue sashimi ¥1,078; tongue stew simmered 8 hours in a Japanese-style demi-glace ¥1,078; seared tongue with ponzu ¥935; three-way tongue platter ¥2,695 · raw oysters from Sanriku ¥429 each; grilled oysters ¥495 (sea urchin, negi-miso cheese, crab-miso butter); fried oysters ¥429 · sashimi bought by the head chef at Tsukiji each morning: 3 kinds ¥715, 5 kinds ¥1,078; seared shime-saba ¥1,375 · salads ¥835; "adult" potato salad with iburi-gakko ¥638 · courses with 2 h all-you-can-drink: Akari 10 dishes ¥6,000; Rin 12 dishes ¥8,000; Kiwami 12 dishes with 10 sakes ¥10,000 (online prices); a 2026 diner had a ¥5,000 course · weekday lunch sets ¥1,000, e.g. beef-tongue roast beef or the weekly special, with free barley rice, miso soup and salad (April–May 2026) · sake from ¥550 a glass',
    website: SITE, gmaps: gm('くらのあかり 人形町本店'), menu_url: MENU,
    notes: "[Izakaya · Ningyocho, aged beef tongue and fish in a renovated three-floor house] A Japanese-modern izakaya of 80 seats spread over three floors down a side alley near Ningyocho station, mostly private and semi-private rooms. It was renovated in 2025 (November 2025 review) and is popular for office parties. The menu says the house has been cooking beef tongue for nearly thirty years. The draw is aged, thick-cut tongue grilled over binchotan, plus tongue sashimi and an eight-hour tongue stew to mop up with bread. Raw oysters come from Sanriku, and the head chef buys fish at Tsukiji each morning. Most groups book a course with two hours of drinks (from about ¥5,000–6,000); diners in 2025–26 single out the tongue, the fried horse mackerel and the stew, and finish with clay-pot rice. Weekday lunch is a ¥1,000 set with free barley rice, miso soup and salad. Closed Sundays and holidays.",
    chef_bio: { chef_name: null, roles: ['Head chef (unnamed; buys fish at Tsukiji each morning, Tabelog menu)'], origin: null,
      background: 'Per the Tabelog menu: beef tongue "passed down under the expertise of Japanese artisans for nearly thirty years since our founding"; aged fatty tongue from Sendai; oysters direct from Sanriku/Miyagi; the head chef visits Tsukiji every morning. The name 人形町本店 marks it as the main shop, and a January 2026 diner was directed here from a "sister restaurant" after a booking mix-up. A November 2025 diner found it newly renovated. Website kuranoakari.owst.jp (Tabelog).',
      philosophy: null, specialty: 'Aged thick-cut beef tongue grilled over binchotan; beef-tongue stew.',
      anecdotes: [
        { text: '"The restaurant has three floors, and we reserved the second floor for 14 people, allowing us to hold a farewell party without any worries." — October 2025.', source: R + 'B515799606/' },
        { text: '"The main branch of Kura no Akari in Ningyocho has recently been renovated and looks stunning." — November 2025, ¥6,000 course.', source: R + 'B517205024/' },
        { text: '"I ordered the Beef Tongue Roast Beef Set Meal for JPY 1,000." — April 2026, weekday lunch.', source: R + 'B525840510/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): くらのあかり 人形町本店、居酒屋、牛タン、日本酒バー、日本橋人形町2-7-11、人形町駅A3出口から徒歩1分、月〜金・祝前日11:30〜14:00、17:00〜23:00、土17:00〜22:00、日祝休み、お通し550円 (コース予約は除く)、80席、個室あり、フロア貸切、禁煙 (屋外に喫煙所)、ヴィーガン・ベジタリアンメニューあり、ホームページ kuranoakari.owst.jp、メニュー (2026年10月更新): 熟成極厚牛タンの炭火焼き (塩・味噌) 2,695円、牛タン刺し1,078円、8時間煮込んだ牛タンシチュー1,078円、Sanriku の生牡蠣429円、料理長が毎朝 Tsukiji で仕入れる刺身、創業から30年近く、コース6,000円〜10,000円 (2時間飲み放題)。口コミ(2025年10月〜2026年7月): 3階建て、改装したばかり、牛タンの燻製と焼きとシチュー、アジフライ、穴子とわさび菜の土鍋ご飯、平日の昼は1,000円の定食で麦ご飯、味噌汁、サラダがセルフでおかわり自由、姉妹店から案内された人も。',
      confidence: 'medium', sources: [TB, MENU, R + 'B515799606/', R + 'B517205024/', R + 'B519378679/', R + 'B520864455/', R + 'B525175461/', R + 'B525568521/', R + 'B525840510/', R + 'B526726198/', R + 'B530853510/', R + 'B531030892/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Most guests book a set course; the Tabelog menu has English dish descriptions.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-7-11',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing with a menu updated 8 October 2026; reviews dated October 2025–July 2026.' },
    pin_source: `Tabelog ${TB} (35.686483, 139.783345); cross-checked: GSI 東京都中央区日本橋人形町二丁目7番11号 (go) 32m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, TB, R + 'B525840510/'],
    price_note: 'Prices from the Tabelog menu (tax included; updated 8 October 2026) and set menus; lunch from April–May 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Aged thick-cut beef tongue grilled over binchotan, salt', '¥2,695', 'Beef tongue', 'ask', 'no', 'Tabelog menu; also miso-grilled.', 'tan_shio'),
      it('', '', 'Beef tongue sashimi, with wasabi and salt', '¥1,078', 'Beef tongue', 'ask', 'no', 'Tabelog menu.', 'tan_sashi'),
      it('', '', 'Beef tongue stew, simmered 8 hours', '¥1,078', 'Beef tongue', 'no', 'no', 'Tabelog menu; demi-glace.', 'tan_stew'),
      it('', '', 'Raw oyster from Sanriku, each', '¥429', 'Oysters', 'ask', 'no', 'Tabelog menu.', 'raw_oyster'),
      it('', '', 'Sashimi, 5 kinds', '¥1,078', 'Fish', 'ask', 'no', 'Tabelog menu.', 'sashimi5'),
      it('', '', 'Akari course, 10 dishes, 2 h all-you-can-drink', '¥6,000', 'Courses', 'ask', 'no', 'Tabelog online price.', 'akari_course'),
      it('', '', 'Weekday lunch set with free barley rice, miso soup and salad', '¥1,000', 'Lunch', 'ask', 'no', 'April–May 2026.', 'lunch_set'),
    ] }, {
    cuisine: '熟成牛タン、魚介、日本酒の居酒屋 (値段は食べログのメニュー、税込み、2026年10月8日更新)・牛タン: 備長炭で焼く熟成極厚牛タン (塩か自家製味噌) 2,695円、牛タン刺し1,078円、和風デミグラスで8時間煮込んだ牛タンシチュー1,078円、ポン酢の炙り牛タン935円、牛タン3種盛り2,695円・Sanriku の生牡蠣1個429円、焼き牡蠣495円 (雲丹、ねぎ味噌チーズ、蟹味噌バター)、カキフライ429円・料理長が毎朝 Tsukiji で仕入れる刺身: 3種715円、5種1,078円、炙りしめ鯖1,375円・サラダ835円、燻製たくあんの「大人のポテサラ」638円・2時間飲み放題付きのコース: Akari コース10品6,000円、Rin コース12品8,000円、日本酒10種が飲み放題の Kiwami コース12品10,000円 (ネット予約の値段)。2026年には5,000円のコースも・平日の昼は1,000円の定食、たとえば牛タンのローストビーフや週替わり、麦ご飯、味噌汁、サラダはおかわり自由 (2026年4月〜5月)・日本酒はグラス550円から',
    neighborhood: '日本橋人形町2-7-11、路地を少し入ったところ。人形町駅A3出口から徒歩1分 (日比谷線)、水天宮前駅7番出口から徒歩3分 (半蔵門線)',
    gf_detail: '要確認。わさびと塩の牛タン刺し、塩焼きの牛タン、刺身がいちばん素朴な選択だが、グルテンフリーの説明はない。牛タンシチューはデミグラス、味噌焼きは自家製味噌、多くのコースにカキフライやアジフライ。',
    vegan_detail: '要確認。食べログには「ヴィーガンメニューあり」「ベジタリアンメニューあり」とあるが、メニューにヴィーガンと書かれた料理はない。野菜の料理にも煮干しやベーコンが入る (小松菜の煮干し塩のサラダ、Sendai の麩とベーコンのシーザーサラダ)。',
    notes: '[居酒屋・人形町、改装した3階建ての家で熟成牛タンと魚] 人形町駅近くの路地を少し入った、3フロアに80席の和モダンの居酒屋で、個室と半個室が中心。2025年に改装し (2025年11月の口コミ)、会社の宴会に人気。メニューによれば30年近く牛タンを手がけてきた。看板は備長炭で焼く熟成の厚切り牛タンで、牛タン刺しや、パンと食べたい8時間煮込んだ牛タンシチューも。生牡蠣は Sanriku から、魚は料理長が毎朝 Tsukiji で仕入れる。多くのグループは2時間飲み放題付きのコース (5,000〜6,000円ほどから) を予約し、2025〜26年の口コミでは牛タン、アジフライ、シチューが好評で、締めは土鍋ご飯。平日の昼は1,000円の定食で、麦ご飯、味噌汁、サラダは食べ放題。日曜・祝日休み。',
  });
}

// ================================================================ Washoku バル かめすけ
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13263917/'; const R = TB + 'dtlrvwlst/'; const MENU = TB + 'dtlmenu/';
  const WK = day(['11:30', '14:00'], ['17:30', '23:00']); const SAT = day(['17:30', '22:00']);
  put({
    id: 'tokyo_washoku_bar_kamesuke_ningyocho', name: 'Washoku バル かめすけ (Washoku Bar Kamesuke)', category: 'OMNI',
    lat: 35.685341, lng: 139.781715, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Small seasonal Japanese plates; nothing is called gluten-free, and the menu includes fried dishes (burdock karaage, buri cutlet, chicken wings, eggplant spring rolls), ponzu and miso dishes.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Lunch has a vegetable set meal (eggplant spring rolls in September 2026), and the evening menu lists chilled tofu, edamame, lotus root with dried tomato and tama-konnyaku, but dashi and bonito flakes run through the cooking (agedashi tofu, eggplant with bonito flakes).',
    hours_raw: 'Mon–Fri 11:30–14:00 (last order 13:30) and 17:30–23:00 (last order food 22:00, drinks 22:30); Sat 17:30–22:00, opening only if booked by the day before; closed Sundays and holidays (Tabelog). Lunch fills fast: an October 2026 diner was turned away at noon and found it full again by 11:30 another day. Cards; no e-money or QR (Tabelog). 12 seats incl. a counter; non-smoking; free Wi-Fi (Tabelog). Basement, down stairs marked by a small lantern (July 2026). Opened 4 October 2021 (Tabelog).',
    hours: { 0: WK, 1: WK, 2: WK, 3: WK, 4: WK, 5: SAT }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 1-5-5, 芳町ビル B1F — 1 min from Ningyocho Stn exit A6, 4 min from Suitengumae Stn exit 8',
    cuisine: 'Creative Japanese small plates with sake (prices from the Tabelog menu, tax included, updated November 2025) · weekday lunch sets of fish, meat or vegetables with several small side dishes ¥1,400 from 5 October 2026 (¥1,300 in September 2026; ¥1,000 until about 2024) · evening à la carte: monkfish liver with ponzu ¥880; persimmon and prosciutto shiraae salad ¥880; oyster ohitashi ¥880; burdock karaage ¥780; rare buri cutlet ¥1,480; grilled beef skirt ¥1,580; mackerel namero ¥880; wagyu and sea urchin roll ¥2,200; chilled tofu ¥430; edamame with wasabi ¥650 · seasonal dishes in 2026: chawanmushi with clams and fava beans, firefly squid salad, strawberry and tofu salad, sweetfish confit, agedashi tofu in okra sauce, fig and cream cheese, dried-squid tempura · "Uniku" of wagyu ribeye and sea urchin (Tabelog) · courses with individual plates: food only ¥4,800; with 2 h drinks ¥6,500; with 3 h ¥7,500 · sake chosen by the owner, by the glass or the gō, hot or cold, and shochu',
    website: TB, gmaps: gm('Washoku バル かめすけ 人形町'), menu_url: MENU,
    notes: "[Izakaya · Ningyocho, a calm basement washoku bar run by one person] A bright, spotless 12-seat basement bar a minute from Ningyocho station, opened in October 2021, where one person cooks and serves (2025–26 reviews). The food is light, seasonal Japanese cooking with a creative turn and a French look on the plate: in 2026, chawanmushi of clams and fava beans, a strawberry and tofu salad, sweetfish confit, agedashi tofu in okra sauce, tempura of dried squid, and the house wagyu-and-sea-urchin roll. The owner picks the sake, poured by the glass or the gō in good vessels, with notes to choose by. Weekday lunch is a set of fish, meat or vegetables with a spread of small sides (¥1,400 from October 2026), and it fills by noon. Diners call it gentle on the body and good for a quiet evening. Saturday opens only for bookings.",
    chef_bio: { chef_name: null, roles: ['Owner-chef (unnamed; "the owner was managing everything alone", April 2026 review; chooses the sake, Tabelog)'], origin: null,
      background: 'Opened 4 October 2021 (Tabelog). Reviewers in September 2025, April 2026 and July 2026 found one person running the room and kitchen. A regular since November 2021 tracked the lunch price from ¥1,000 (still in February 2023) to ¥1,300 (September 2026), with ¥1,400 announced from 5 October 2026. The table shichimi is from Hirano Seppouan in Koyasan (August 2026).',
      philosophy: null, specialty: 'Seasonal creative small plates; Uniku (wagyu and sea urchin); sake by the glass or gō.',
      anecdotes: [
        { text: '"Even though the owner was managing everything alone, [the owner] promptly noticed my drink orders and even created a space for my belongings." — April 2026, course with all-you-can-drink.', source: R + 'B526281404/' },
        { text: '"The lunch set that was JPY 1000 two years ago has now increased to JPY 1300." — September 2026, vegetable set meal.', source: R + 'B442391393/' },
        { text: '"Even though it\'s traditional Japanese cuisine, the plating resembles French style." — August 2025.', source: R + 'B512173176/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): Washoku バル かめすけ、居酒屋、日本料理、創作料理、日本橋人形町1-5-5 芳町ビル B1F、人形町駅A6出口から徒歩1分、月〜金11:30〜14:00、17:30〜23:00、土17:30〜22:00 (前日までの予約で営業)、日祝休み、12席、カード可、電子マネー・QR不可、禁煙、2021年10月4日オープン、和牛リブロースの「Uniku」、店主が選ぶ日本酒、平日のランチ、飲み放題付きのコース6,500円・7,500円、料理のみ4,800円。メニュー (2025年11月): あん肝ポン酢880円、柿と生ハムの白和え880円、牡蠣のおひたし880円、ごぼうの唐揚げ780円、レアぶりカツ1,480円、和牛うに巻き2,200円。口コミ(2025年8月〜2026年10月): ひとりで切り盛り、季節の料理、フレンチのような盛り付け、体にやさしい味、平日の昼は魚・肉・野菜の定食で小鉢がいろいろ、2026年10月5日から1,400円、昼は正午前に満席、地下へ降りる階段に小さな提灯、日本酒はグラスか1合で。',
      confidence: 'medium', sources: [TB, MENU, R + 'B442391393/', R + 'B442884104/', R + 'B512173176/', R + 'B514600156/', R + 'B525934508/', R + 'B526281404/', R + 'B532670356/', R + 'B532763542/', R + 'B536457181/', R + 'B537482664/'] },
    cultural_comfort: { level: 'japanese', note: 'Japanese menu with drink descriptions (July 2026); one person serves; lunch sets are the simple order.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町1-5-5 芳町ビル B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated August 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.685341, 139.781715); cross-checked: GSI 東京都中央区日本橋人形町一丁目5番5号 (go) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [MENU, TB, R + 'B442391393/'],
    price_note: 'Evening prices from the Tabelog menu (tax included; updated November 2025); lunch from September–October 2026 reviews; courses from Tabelog set menus.', last_checked: TODAY, items: [
      it('', '', 'Weekday lunch set: fish, meat or vegetable main with small sides', '¥1,400', 'Lunch', 'ask', 'ask', 'From 5 October 2026 (October 2026 review); ¥1,300 in September 2026.', 'lunch_set'),
      it('', '', 'Monkfish liver with ponzu', '¥880', 'Recommended', 'ask', 'no', 'Tabelog menu.', 'ankimo'),
      it('', '', 'Rare buri (yellowtail) cutlet', '¥1,480', 'Recommended', 'no', 'no', 'Tabelog menu.', 'buri_katsu'),
      it('', '', 'Wagyu and sea urchin roll', '¥2,200', 'Recommended', 'ask', 'no', 'Tabelog menu.', 'uniku'),
      it('', '', 'Chilled tofu', '¥430', 'Appetizers', 'ask', 'ask', 'Tabelog menu.', 'hiyayakko'),
      it('', '', 'Course, individual plates, food only', '¥4,800', 'Courses', 'ask', 'ask', 'Tabelog set menu.', 'course_food'),
      it('', '', 'Course with 2 h all-you-can-drink', '¥6,500', 'Courses', 'ask', 'ask', 'Tabelog set menu.', 'course_2h'),
    ] }, {
    cuisine: '日本酒と楽しむ創作和食の小皿 (値段は食べログのメニュー、税込み、2025年11月更新)・平日の昼は魚、肉、野菜の定食で小鉢がいろいろ、2026年10月5日から1,400円 (2026年9月は1,300円、2024年ごろまでは1,000円)・夜の一品: あん肝ポン酢880円、柿と生ハムの白和え880円、牡蠣のおひたし880円、ごぼうの唐揚げ780円、レアぶりカツ1,480円、牛ハラミ焼き1,580円、鯖のなめろう880円、和牛うに巻き2,200円、冷奴430円、わさび風味の枝豆650円・2026年の季節の料理: あさりとそら豆の茶碗蒸し、ホタルイカのサラダ、苺と豆腐のサラダ、鮎のコンフィ、オクラのあんの揚げ出し豆腐、いちじくとクリームチーズ、さきいかの天ぷら・和牛リブロースと雲丹の「Uniku」(食べログ)・一人ずつ盛るコース: 料理のみ4,800円、2時間飲み放題付き6,500円、3時間7,500円・店主が選ぶ日本酒はグラスか1合で、燗も冷やも、焼酎も',
    neighborhood: '日本橋人形町1-5-5 芳町ビル B1F。人形町駅A6出口から徒歩1分、水天宮前駅8番出口から徒歩4分',
    gf_detail: '要確認。季節の和食の小皿で、グルテンフリーの説明はなく、揚げ物 (ごぼうの唐揚げ、ぶりカツ、手羽先、茄子の春巻き)、ポン酢や味噌の料理もある。',
    vegan_detail: '要確認。昼には野菜の定食 (2026年9月は茄子の春巻き) があり、夜のメニューにも冷奴、枝豆、ドライトマトとれんこんの炒め物、玉こんにゃくがあるが、揚げ出し豆腐や茄子のおかか和えなど、だしや鰹節を使う料理が多い。',
    notes: '[居酒屋・人形町、ひとりで営む落ち着いた地下の和食バル] 人形町駅から1分、明るく清潔な12席の地下の店で、2021年10月の開店。料理も接客もひとりでこなす (2025〜26年の口コミ)。料理は季節の軽やかな和食にひとひねりあり、盛り付けはフレンチのよう。2026年にはあさりとそら豆の茶碗蒸し、苺と豆腐のサラダ、鮎のコンフィ、オクラのあんの揚げ出し豆腐、さきいかの天ぷら、看板の和牛と雲丹の巻物も。日本酒は店主が選び、グラスか1合で、器も良く、説明を見て選べる。平日の昼は魚、肉、野菜の定食に小鉢がいろいろ付き (2026年10月から1,400円)、正午前に満席になる。体にやさしい味で静かな夜に向くという声が多い。土曜は予約があるときだけ営業。',
  });
}

save();
