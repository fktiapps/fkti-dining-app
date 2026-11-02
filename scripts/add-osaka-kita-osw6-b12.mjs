// Osaka-Kita sweep (1-mile circles around Osaka Station and Shin-Osaka), circle umeda, Tabelog id odd; worker osw6, batch 12.
//   + 高良 Koura (charcoal-grilled eel and skewers, Ohatsu Tenjin back street)
//   + 梅田お初天神大人の神戸牛焼肉 (Kobe-beef yakiniku and wine, since 2019; owner-chef and sommelier 酒井 克)
//   + 窯焼きステーキ 福田 Kamayaki Steak Fukuda (oven-roasted steak, Kitashinchi, since 2016; chef Yuichi Fukuda)
//   + 石鍋料理 健 Ishinabe Ryori Ken (Taiwanese stone-pot hot pot courses, Dojima)
//   - 路地裏イタリアン ミモザ 27119291 skipped: sister of pesce&carne MIMOZA, already in data (osaka_mimoza_ohatsu_tenjin).
//   Picked with `queue.mjs osaka-kita next core 80 umeda` (2026-11-02, after b11): odd ids in order 27098861, 27119291,
//   27109847, 27095105, 27002059.
//   Chain check: Koura, Otona no Kobe Yakiniku, Fukuda and Ken: no other shop found (Otona: owner's own site; Fukuda: Tabelog).
//   None is in data/osaka.json (grep by id, name and address, 2026-11-02). Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, skip, save } = openCitySweep('osaka-kita', TODAY, 'osw6-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('27119291', '路地裏イタリアン ミモザ: sister of pesce&carne MIMOZA, already in data as osaka_mimoza_ohatsu_tenjin; the next-door address (曾根崎2-5-38 vs 2-5-37) and the same "Mimoza Course" on both Tabelog listings, and an October 2026 MIMOZA review describing a move to "their second location nearby".');

// ================================================================ 高良
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27098861/'; const R = TB + 'dtlrvwlst/';
  const H = day(['10:30', '15:00'], ['17:00', '22:30']);
  put({
    id: 'osaka_koura_unagi_ohatsutenjin', name: '高良 (Koura)', category: 'OMNI',
    lat: 34.699328, lng: 135.501547, cuisine_type: 'unagi',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. Eel is grilled with a sweet tare (usually soy-based with wheat); shirayaki (unsauced) eel and salt-grilled skewers are on the menu, and tempura is wheat-battered.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: an eel and chicken-skewer restaurant.',
    hours_raw: 'Daily 10:30–15:00 (last order 14:30) and 17:00–22:30 (last order 22:00) (Tabelog); the morning opening moved earlier from 11:00 (September 2026). Bookings for four or more by phone; call if late or the booking is cancelled; no suitcases in the small room (Tabelog). Service charge ¥330 (Tabelog). One-hour à la carte all-you-can-drink ¥980 (Tabelog). Cards, e-money and QR accepted (Tabelog). 15 seats: 5 at the counter, 10 at tables; non-smoking; takeout (Tabelog). The air conditioning was not working on an August 2026 visit.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'A back street of Ohatsu Tenjin, KIYOビルⅡ 1F — 4 min from Higashi-Umeda Stn',
    cuisine: 'Eel from Mikawa Isshiki, Aichi, grilled Kansai-style over charcoal so the skin is crisp; local Osaka dishes such as Hansuke tofu and eel kushiyaki; neri-ten; seasonal sake (Tabelog; 2026 reviews) · domestic or imported eel to suit your budget (July and September 2026) · unaju in several grades, including a two-tone kabayaki-and-shirayaki box (October 2026); hitsumabushi (July and September 2026); Koura unagi tamajyu with omelette; "Unagyu" of eel, omelette and beef ¥3,300 (September 2026); eel and eel-roll lunch set ¥1,100 (August 2026); lunch from about ¥1,000 to ¥3,000 · uzaku, half grilled eel, an assortment of five eel skewers, fluffy tempura, chicken skewers (2026) · courses (Tabelog, tax included): Koura unaju course ¥7,020 (7 dishes); casual unaju course ¥3,720; chicken skewer course ¥2,500 (evening)',
    website: null, gmaps: gm('高良 うなぎ 曽根崎'), menu_url: null,
    notes: "[Eel · Ohatsu Tenjin, charcoal-grilled unagi] A small eel restaurant on a back street of Ohatsu Tenjin, with a five-seat counter and three tables, that grills Aichi eel Kansai-style over charcoal for crisp skin and soft flesh. You choose domestic or imported eel, which keeps lunch from about ¥1,000; diners name the unaju, hitsumabushi, a two-tone kabayaki and shirayaki box, uzaku, and evening skewers of eel with a bottle of beer. It also serves Osaka dishes like Hansuke tofu, and a ¥980 hour of all-you-can-drink. Open from 10:30, so some regulars come for an eel breakfast with a drink. Diners note small rice portions, a cramped room, and a broken air conditioner one August day.",
    chef_bio: { chef_name: null, roles: ['Eel griller (unnamed), styled a "Kamigata unagi griller" (Tabelog)'], origin: null, background: 'Shop text (Tabelog): eel from Mikawa Isshiki in Aichi; the signature unaju with crisp grilled skin; neri-ten, the local Hansuke tofu and kushiyaki that show the charm of eel; seasonal sake; prices adjusted for rising costs. Tabelog\'s name field gives the romaji "Koura", while its shop text calls it "Takara"; a July 2026 review writes "Unagi Kushiyaki Koura".', philosophy: 'Eel in many forms, from unaju to skewers (Tabelog).', specialty: 'Unaju; eel skewers; Hansuke tofu.',
      anecdotes: [
        { text: '"I visited this place in August at night, but this time, as promised, I arrived at 10:30 AM—almost breakfast drinking time." — September 2026.', source: R + 'B477330651/' },
        { text: '"One of the highlights here is the option to choose between \'domestic\' and \'imported\' eel." — July 2026.', source: R + 'B532717767/' },
        { text: '"The half grilled eel has a crispy yet fluffy texture, typical of the Kansai region." — September 2026, a monthly regular.', source: R + 'B512176913/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B465251757/', R + 'B477330651/', R + 'B512176913/', R + 'B532717767/', R + 'B533487643/', R + 'B534215444/', R + 'B535711681/', R + 'B536364455/', R + 'B536999481/', R + 'B537376813/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Small counter-and-tables room; lunch menu easy to choose from (2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎2-5-33 KIYOビルⅡ 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目5番33号 (go) 6m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B465251757/', R + 'B536364455/'],
    price_note: 'Courses from the Tabelog listing (tax included); lunch prices from August and September 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Koura unaju course (7 dishes)', '¥7,020', 'Course', 'ask', 'no', 'Tabelog listing.', 'unaju_course'),
      it('', '', 'Casual unaju course (5 dishes)', '¥3,720', 'Course', 'ask', 'no', 'Tabelog listing.', 'casual_unaju_course'),
      it('', '', 'Koura Unagyu (eel, omelette and beef over rice)', '¥3,300', 'Lunch', 'ask', 'no', 'September 2026 review.', 'unagyu'),
      it('', '', 'Eel and eel-roll lunch set', '¥1,100', 'Lunch', 'ask', 'no', 'August 2026 review.', 'eel_roll_set'),
      it('', '', 'One-hour à la carte all-you-can-drink', '¥980', 'Drinks', '', '', 'Tabelog listing.', 'ayce_1h'),
    ] }, {
    cuisine: 'Mikawa Isshiki (Aichi) のうなぎを炭火で関西風に、皮はパリッと焼く。Hansuke 豆腐やうなぎの串焼きなど大阪の味、neri-ten、季節の日本酒 (食べログ、2026年の口コミ)・国産か輸入のうなぎを予算で選べる (2026年7月・9月)・いくつかのランクのうな重、蒲焼きと白焼きの二色のお重 (2026年10月)、ひつまぶし (2026年7月・9月)、卵焼きの Koura の unagi tamajyu、うなぎ、卵焼き、牛肉の「Unagyu」3,300円 (2026年9月)、うなぎとう巻きのランチ1,100円 (2026年8月)、ランチは1,000〜3,000円ほど・uzaku、うなぎの半身焼き、うなぎの串5種盛り、ふわふわの天ぷら、焼き鳥 (2026年)・コース (食べログ、税込): 高良うな重コース7,020円 (7品)、気軽なうな重のコース3,720円、焼き鳥のコース2,500円 (夜)',
    neighborhood: 'お初天神の裏通り、KIYOビルⅡ 1階。東梅田駅から徒歩4分',
    gf_detail: '要確認。グルテンの情報なし。うなぎは甘いタレ (ふつう小麦を含む醤油ベース) で焼くが、白焼きや塩焼きの串もある。天ぷらは小麦の衣。',
    vegan_detail: 'ヴィーガンではありません。うなぎと焼き鳥の店。',
    notes: '[うなぎ・お初天神、炭火焼きのうなぎ] お初天神の裏通りにある小さなうなぎの店で、カウンター5席とテーブル3卓。Aichi のうなぎを炭火で関西風に焼き、皮はパリッと身はふんわり。国産か輸入のうなぎを選べるので、ランチは1,000円ほどから。口コミに出てくるのは、うな重、ひつまぶし、蒲焼きと白焼きの二色のお重、uzaku、夜はうなぎの串焼きと瓶ビール。Hansuke 豆腐など大阪の味や、980円の1時間飲み放題も。朝10時半から開いているので、うなぎで朝から一杯という常連も。ご飯の量が少なめ、店がせまい、8月のある日はエアコンが壊れていたという声も。',
  });
}

// ================================================================ 梅田お初天神大人の神戸牛焼肉
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27109847/'; const R = TB + 'dtlrvwlst/';
  const OFF = 'https://otonanokobegyuyakiniku.com/';
  const H = day(['17:00', '01:00']);
  put({
    id: 'osaka_otona_no_kobe_yakiniku_ohatsutenjin', name: '梅田お初天神大人の神戸牛焼肉 (Umeda Ohatsu Tenjin Otona no Kobe Yakiniku)', category: 'MOM_AND_POP',
    lat: 34.699259, lng: 135.501533, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The house tare is blended with a Wakayama soy sauce (official site), which normally contains wheat; salt-grilled cuts come with salt and wasabi (October 2026); courses include kimbap and a beef-dashi chazuke.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a Kobe-beef yakiniku restaurant; kimchi and namul platters come with the courses.',
    hours_raw: 'Daily 17:00–1:00 (Tabelog; the official site says 17:00–25:00); closing days not fixed; private bookings outside these hours by phone (Tabelog). Course bookings by the day before; same-day bookings by phone only; parties of three or more call the shop (Tabelog; official site). No children aged 12 or under (official site). Bring-your-own wine ¥3,000 a bottle, by prior arrangement (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners), PayPay, Rakuten Pay; no e-money (Tabelog). 12 seats: 8 at the counter and 4 at a table, whole-shop hire from 8; non-smoking, heated tobacco by the stairs (Tabelog). Opened 29 March 2019 per Tabelog and a September 2026 review; the owner\'s profile on the official site says April 2019.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Ohatsu Tenjin back street, 2F above the North Sanboa sign — 3 min from Higashi-Umeda Stn exit 7',
    cuisine: 'Yakiniku of Kobe beef, only virgin heifers of A4 rank or above from a few farms, chosen by the owner, with tare made from a Wakayama craft soy sauce (三ツ星醤油) and 80–90 wines, mostly French (official site) · courses (official site, tax included): Kobe beef tabetsukushi course ¥14,300 (¥10,780 when booked online or through the newsletter), Kobe beef couple course ¥13,200; wine pairing of four glasses ¥4,840 · courses on Tabelog: couple course of Kobe beef only ¥20,900, premium ¥27,500, super premium ¥44,000 · diners paid ¥9,000 (September–October 2026) or ¥10,780 (August 2026) for a course · dishes in 2026 reviews: seared yukke, meat (or toro-taku) kimbap, kimchi and namul platters, two kinds of tongue, three salt-grilled cuts (chuck eye roll, top sirloin, sirloin cap), two sauce-grilled cuts, yaki-shabu and yaki-suki, grilled vegetables, beef-dashi chazuke',
    website: OFF, gmaps: gm('梅田お初天神大人の神戸牛焼肉'), menu_url: OFF,
    notes: "[Yakiniku · Ohatsu Tenjin, Kobe beef and wine from a one-man counter] A twelve-seat Kobe-beef yakiniku up a flight of stairs off Ohatsu Tenjin, run by owner-chef and sommelier 酒井 克, who trained for about fourteen years at well-known Osaka yakiniku restaurants before opening here in 2019 (official site). The shop buys only Kobe heifers, serves each cut as a single piece so you can taste many, and pours from 80–90 wines; a sauce made with a centuries-old Wakayama soy sauce goes on the sauce-grilled cuts. Courses run from about ¥9,000 to ¥14,300 on the shop's own pricing (Tabelog lists premium courses up to ¥44,000): seared yukke, kimbap, two kinds of tongue, salt- and sauce-grilled Kobe beef, yaki-suki and a beef-dashi chazuke. An August 2026 diner found the owner running the shop alone and speaking English with overseas guests. Open until 1 am; no children 12 or under.",
    chef_bio: { chef_name: '酒井 克', roles: ['Owner-chef and sommelier (official site: "オーナーシェフ兼ソムリエの酒井克")'], origin: 'Born in Osaka in 1983 (official site).', background: 'Official site (read 2026-11-02): "1983年大阪生まれ"; decided to become a cook through a student part-time job; trained for about 14 years, mainly at well-known Osaka yakiniku restaurants; qualified as a sommelier in 2013; opened this Kobe-beef yakiniku in April 2019. Buys only virgin Kobe heifers under the 470 kg weight limit, A4 and above; tare blended with 三ツ星醤油, a hand-made Wakayama soy sauce made the same way for over 300 years; about 80 wines, mostly French. Media: Meets (2020, 2022), Asahi Shimbun (2020), TV Gobugobu (2021), Yon-chan TV (2025). An August 2026 review: "The owner runs the place alone and is a certified sommelier, making it popular among international guests as they can communicate in English".', philosophy: 'Kobe beef and wine that please body and heart (official site).', specialty: 'Kobe-beef course; wine pairing.',
      anecdotes: [
        { text: '"The owner runs the place alone and is a certified sommelier, making it popular among international guests as they can communicate in English, which was fantastic." — August 2026.', source: R + 'B534483027/' },
        { text: '"Each cut was served as a single piece, which was perfect for someone like me who wanted to try various types!" — October 2026.', source: R + 'B537029410/' },
        { text: '"The owner, who is also the chef and sommelier, pairs the perfect wine with the meat according to the guests\' preferences." — September 2026.', source: R + 'B536873988/' },
      ],
      japanese_sources_summary: '公式サイト: 梅田お初天神大人の神戸牛焼肉、大阪梅田の隠れ家のような焼肉屋、シェフが選んだ神戸牛と焼肉に合うワイン、未経産の神戸牛メス牛で470kgを超えないもの、A4ランク以上、タレは和歌山の三ツ星醤油をブレンド、ソムリエの資格を持つ店主がワインを提案、フランスワイン中心に80本ほど、神戸牛食べ尽くしコース14,300円 (WEB予約やメルマガで10,780円)、神戸牛カップルコース13,200円、ソムリエのペアリング4杯4,840円、店主 酒井 克 (1983年大阪生まれ、大阪の有名焼肉店で約14年修行、2013年ソムリエ取得、2019年4月開店)、大阪市北区曽根崎2-2-12 2F、東梅田駅から徒歩約3分、17:00〜25:00、不定休、カウンター8席とテーブル4席、12歳以下の子どもは同伴不可。食べログ (店舗会員): 毎日17:00〜1:00、ワインの持ちこみ1本3,000円、禁煙、2019年3月29日オープン、スーパープレミアム44,000円、プレミアム27,500円、カップルコース20,900円。口コミ (2026年8〜10月): 9,000円や10,780円のコース、炙りユッケ、キンパ、タンの食べ比べ、塩焼き3種とタレ焼き2種、店主がひとりで切り盛りし英語も話せる。',
      confidence: 'medium', sources: [TB, OFF, R + 'B533571196/', R + 'B534483027/', R + 'B535264614/', R + 'B535616901/', R + 'B536873988/', R + 'B537029410/', R + 'B537210808/', R + 'B537525765/', R + 'B538265638/', R + 'B538293596/'] },
    cultural_comfort: { level: 'english', note: 'The owner speaks English with overseas guests (August 2026 review).' },
    safety: { ...SAFETY0 },
    mom_and_pop: true, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎2-2-12 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; official site with blog posts to November 2026; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎二丁目2番12号 (go) 8m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [OFF, TB, R + 'B533571196/', R + 'B538293596/'],
    price_note: 'Course prices differ by source: the official site lists ¥14,300 (¥10,780 online) and ¥13,200; Tabelog lists ¥20,900–44,000; diners paid ¥9,000 and ¥10,780 in 2026.', last_checked: TODAY, items: [
      it('神戸牛食べ尽くしコース', '', 'Kobe beef tabetsukushi course (¥10,780 when booked online)', '¥14,300', 'Course', 'ask', 'no', 'Official site; August 2026 review (¥10,780).', 'tabetsukushi_course'),
      it('神戸牛カップルコース', '', 'Kobe beef couple course', '¥13,200', 'Course', 'ask', 'no', 'Official site (¥20,900 on Tabelog).', 'couple_course'),
      it('', '', 'Course paid by diners (September–October 2026)', '¥9,000', 'Course', 'ask', 'no', 'September and October 2026 reviews.', 'course_9000'),
      it('', '', 'Sommelier wine pairing, 4 glasses', '¥4,840', 'Drinks', '', '', 'Official site.', 'wine_pairing'),
    ] }, {
    cuisine: '神戸牛の焼肉。数少ない農家の A4 以上の未経産のメス牛だけを店主が選び、タレは和歌山の三ツ星醤油で、ワインはフランスを中心に80〜90本 (公式サイト)・コース (公式サイト、税込): 神戸牛食べ尽くしコース14,300円 (WEB予約やメルマガで10,780円)、神戸牛カップルコース13,200円、ワインのペアリング4杯4,840円・食べログのコース: 神戸牛だけのカップルコース20,900円、プレミアム27,500円、スーパープレミアム44,000円・2026年は9,000円 (9〜10月) や10,780円 (8月) のコースだった口コミ・2026年の口コミの料理: 炙りユッケ、肉 (やトロたく) のキンパ、キムチとナムルの盛り合わせ、タン2種、塩焼き3種 (ザブトン、ランプ、イチボ)、タレ焼き2種、焼きしゃぶと焼きすき、焼き野菜、牛だし茶漬け',
    neighborhood: 'お初天神の裏通り、North Sanboa の看板のビルの2階。東梅田駅7番出口から徒歩3分',
    gf_detail: '要確認。グルテンの情報なし。タレは和歌山の醤油をブレンド (公式サイト) で、ふつう小麦を含む。塩焼きは塩とわさびで (2026年10月)。コースにはキンパや牛だし茶漬けもある。',
    vegan_detail: 'ヴィーガンではありません。神戸牛の焼肉の店で、コースにはキムチとナムルの盛り合わせがつく。',
    notes: '[焼肉・お初天神、ひとりで営む神戸牛とワインのカウンター] お初天神の裏の階段を上がったところにある12席の神戸牛の焼肉店で、オーナーシェフでソムリエの酒井 克さんが、大阪の有名焼肉店で約14年修行したのち2019年に開いた (公式サイト)。仕入れるのは神戸牛のメス牛だけで、いろいろ味わえるように一切れずつ出し、ワインは80〜90本。タレ焼きには300年以上続く和歌山の醤油を使ったタレ。コースは店の料金で9,000〜14,300円ほど (食べログには44,000円までのプレミアムなコースも): 炙りユッケ、キンパ、タン2種、塩焼きとタレ焼きの神戸牛、焼きすき、牛だし茶漬け。2026年8月の口コミでは、店主がひとりで切り盛りし、海外のお客さんと英語で話していたとのこと。深夜1時まで、12歳以下の子どもは不可。',
  });
}

// ================================================================ 窯焼きステーキ 福田
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27095105/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '15:00'], ['17:00', '23:00']);
  put({
    id: 'osaka_kamayaki_steak_fukuda_kitashinchi', name: '窯焼きステーキ 福田 (Kamayaki Steak Fukuda)', category: 'MOM_AND_POP',
    lat: 34.697135, lng: 135.497664, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking. No gluten information. Lunch includes homemade curry bread, a curry with shrimp tempura, and a steak bento; courses include sauces and a wagyu fillet katsu sandwich is sold to take away (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a wagyu steak restaurant.',
    hours_raw: 'Daily 12:00–15:00 (last order 14:00) and 17:00–23:00 (last order 21:00); closing days not fixed (Tabelog). Courses by reservation, booked by 17:00 the day before, everyone in a group on the same course; no course bookings on 24 and 25 December (Tabelog). Lunch began in August 2026 and is reservation-only, without an outside sign (September 2026). Service charge 10% at dinner only (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 16 seats: 8 at the counter, tables for 2–8, a private room for 8; birthday cake on request (Tabelog). Opened 3 December 2016 (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kitashinchi, 北新地鈴木第3ビル 2F — 4 min from JR Kitashinchi Stn exit 11-41, 3 min from Oebashi Stn',
    cuisine: 'Wagyu steak, mostly lean cuts of heifers from across Japan and Matsusaka beef, roasted in a custom-built oven over binchotan (Tabelog) · courses (Tabelog, tax included): 120 g wagyu heifer chateaubriand course ¥23,100; 170 g chateaubriand course with Matsusaka and Kobe beef starters ¥33,000; lunch and dinner alike · lunch (from August 2026, reservation only): Matsusaka beef hamburg steak ¥3,520 with beef-tendon miso soup, beef-tendon kimchi and potato salad (October 2026); a hamburg steak lunch with homemade curry bread and sake-lees soup, about ¥3,850 with a drink (September 2026); a weekday seafood curry ¥1,980 with two shrimp tempura and coconut foam (September 2026); sirloin steak bento and a seared strip-loin steak box with three small dishes (October 2026) · wagyu fillet katsu sandwich to take away (Tabelog) · sparkling wine ¥700 a glass at lunch (September 2026)',
    website: 'http://kamayaki-fukuda.jp/', gmaps: gm('窯焼きステーキ 福田 北新地'), menu_url: null,
    notes: "[Steak · Kitashinchi, oven-roasted wagyu] A second-floor steak counter in Kitashinchi, named a Tabelog Steak 100 in 2021 and a Steak/Teppanyaki WEST 100 in 2024 and 2025, where chateaubriand from wagyu heifers is roasted in a purpose-built oven over binchotan charcoal. The chef, Yuichi Fukuda, born in Osaka in 1973, started at a Michelin-starred Kitahama restaurant at 23 and was the opening chef at another Kitashinchi oven-steak house before opening here in 2016 (Tabelog). Dinner courses are ¥23,100 or ¥33,000 plus 10%, booked the day before. Since August 2026 there is also a reservation-only lunch with no sign outside: a Matsusaka-beef hamburg steak for about ¥3,500, a seafood curry on weekdays, or a steak bento, with no service charge. Counter, tables and a private room for eight.",
    chef_bio: { chef_name: 'Yuichi Fukuda', roles: ['Chef and founder (Tabelog: "Chef Yuichi Fukuda Profile")'], origin: 'Born in Osaka in 1973 (Tabelog).', background: 'Tabelog chef profile (first person): "Born in Osaka in 1973, I stepped into the world of fine dining at the age of 23 when I joined the Michelin-starred restaurant Le Ponder Ciel in Kitahama. … I later became the opening chef at Fukutatei in Kitashinchi, where I perfected my craft in oven-baked steak. In December 2016, I opened Fukuda" (restaurant names as Tabelog\'s English spells them). The shop text also says skilled chefs from Kitayama Kitchen grill with Fukuda\'s techniques. Tabelog Steak 100 (2021); Steak/Teppanyaki WEST 100 (2024, 2025).', philosophy: 'Lean wagyu roasted in a special oven over top-grade binchotan (Tabelog).', specialty: 'Oven-roasted chateaubriand; Matsusaka beef hamburg steak at lunch.',
      anecdotes: [
        { text: '"I learned they just started lunch service in August. Because it\'s reservation only, they don\'t have a sign outside" — September 2026, the seafood curry ¥1,980.', source: R + 'B534882075/' },
        { text: '"The signature Kamayaki Chateaubriand was delicious and met my expectations" — August 2026, a third visit.', source: R + 'B516112266/' },
        { text: '"I was blown away by how delicious it was! It was juicier, with an incredible texture and flavor" — September 2026, the reservation-only hamburg steak at a business lunch.', source: R + 'B536517424/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B516112266/', R + 'B534882075/', R + 'B535645166/', R + 'B535832681/', R + 'B536426973/', R + 'B536517424/', R + 'B536621256/', R + 'B537439447/', R + 'B538447702/', R + 'B538504518/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Courses and lunch by reservation only (Tabelog; 2026). No English evidence found.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区曽根崎新地1-2-10 北新地鈴木第3ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区曾根崎新地一丁目2番10号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534882075/', R + 'B536621256/'],
    price_note: 'Courses from the Tabelog listing (tax included; 10% service at dinner only); lunch prices from September and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Wagyu heifer chateaubriand course, 120 g (lunch or dinner)', '¥23,100', 'Course', 'ask', 'no', 'Tabelog listing.', 'chateaubriand_120'),
      it('', '', 'Chateaubriand course, 170 g, with Matsusaka and Kobe beef starters', '¥33,000', 'Course', 'ask', 'no', 'Tabelog listing.', 'chateaubriand_170'),
      it('', '', 'Matsusaka beef hamburg steak lunch (reservation only)', '¥3,520', 'Lunch', 'ask', 'no', 'October 2026 review.', 'hamburg_lunch'),
      it('', '', 'Weekday seafood curry lunch with shrimp tempura', '¥1,980', 'Lunch', 'no', 'no', 'September 2026 review.', 'seafood_curry'),
    ] }, {
    cuisine: '全国の和牛のメス牛の赤身と松阪牛を中心に、特注の窯と備長炭で焼くステーキ (食べログ)・コース (食べログ、税込): 和牛メス牛のシャトーブリアン120gのコース23,100円、松阪牛と神戸牛の前菜つきのシャトーブリアン170gのコース33,000円、ランチもディナーも同じ・ランチ (2026年8月から、予約制): 牛すじの味噌汁、牛すじキムチ、ポテトサラダつきの松阪牛ハンバーグ3,520円 (2026年10月)、自家製カレーパンと酒粕の汁のハンバーグのランチ、ドリンクつきで3,850円ほど (2026年9月)、えびの天ぷら2本とココナッツの泡の平日の海鮮カレー1,980円 (2026年9月)、サーロインのステーキ弁当、小鉢3品つきの炙りロースのステーキボックス (2026年10月)・持ち帰りの和牛ヒレカツサンド (食べログ)・ランチのスパークリングワインはグラス700円 (2026年9月)',
    neighborhood: '北新地、北新地鈴木第3ビル 2階。JR北新地駅11-41出口から徒歩4分、大江橋駅から徒歩3分',
    gf_detail: '予約時に要確認。グルテンの情報なし。ランチには自家製カレーパン、えびの天ぷらの海鮮カレー、ステーキ弁当があり、コースにはソースがつき、持ち帰りの和牛ヒレカツサンドもある (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。和牛のステーキの店。',
    notes: '[ステーキ・北新地、窯焼きの和牛] 北新地のビルの2階にあるステーキのカウンターで、食べログのステーキ百名店 (2021年) とステーキ・鉄板焼き WEST 百名店 (2024年・2025年) に選ばれた。和牛のメス牛のシャトーブリアンを、特注の窯と備長炭で焼く。料理人の Yuichi Fukuda さんは1973年大阪生まれ、23歳で Kitahama のミシュランの星つきの店に入り、北新地の別の窯焼きステーキの店の立ち上げの料理長をへて、2016年にこの店を開いた (食べログ)。夜のコースは23,100円か33,000円にサービス料10%で、前日までの予約制。2026年8月からは看板を出さない予約制のランチも始め、3,500円ほどの松阪牛のハンバーグ、平日の海鮮カレー、ステーキ弁当があり、サービス料はかからない。カウンター、テーブル、8人の個室。',
  });
}

// ================================================================ 石鍋料理 健
{
  const TB = 'https://tabelog.com/en/osaka/A2701/A270101/27002059/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'osaka_ishinabe_ryori_ken_dojima', name: '石鍋料理 健 (Ishinabe Ryori Ken)', category: 'OMNI',
    lat: 34.697077, lng: 135.497296, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. No gluten information. The stone pot ends with noodles or ramen; a bang-bang chicken starter uses soy sauce, and crab in chili sauce and other dishes use sauces whose ingredients are not listed (Tabelog; 2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: stone-pot dishes of seafood and meat simmered in chicken broth.',
    hours_raw: 'Mon–Sat 17:00–23:00; seats free from 20:30 (Tabelog). Closed Sundays and holidays, but opens on them for bookings made three days ahead; closed at Obon, Golden Week and New Year (Tabelog). Course cancellations from two days before are charged 100% (Tabelog). Service charge 10% (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners); no e-money or QR (Tabelog). 16 seats in curtained booths; heated tobacco only in a designated area; Chinese-speaking staff; children under 10 by phone booking, 10 and over at the adult price (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: '日宝北新地ビル 5F, near Kitashinchi Stn — 5 min from JR Kitashinchi Stn exit 11-23',
    cuisine: 'Taiwanese stone-pot cooking: seafood and mountain produce stir-fried in sesame oil in a thick stone pot and simmered in chicken broth, skimmed so only the sesame aroma stays (Tabelog) · stone-pot course October–March with four seasonal appetizers and fruit ¥7,860 (3–4 people); weekday set after 20:00 of one appetizer, the stone pot and a ramen finish ¥4,400 (Tabelog, tax included); a ¥7,200 course in February 2026 · dishes in reviews: clam soup with ginger, sea-bream Chinese salad, seafood salad, crab in chili sauce, shrimp, bang-bang chicken (chicken breast, jellyfish, white onion in soy), noodles at the end, fruit (2025–2026) · Shaoxing wine (with pickled plum), highballs, lemon sours',
    website: null, gmaps: gm('石鍋料理 健 北新地'), menu_url: null,
    notes: "[Taiwanese hot pot · Kitashinchi, stone pots on the fifth floor] A fifth-floor restaurant near Kitashinchi station serving Taiwanese ishinabe: seafood and vegetables stir-fried in sesame oil in a heavy stone pot, then simmered in chicken broth, with a run of appetizers first (ginger clam soup, sea-bream salad, crab in chili sauce) and noodles to finish. The full course is about ¥7,200–7,900 in the cooler months; after 20:00 on weekdays a ¥4,400 set brings one appetizer, the pot and ramen. Diners describe the flavour as lighter than expected and the staff, who come from Taiwan and speak Japanese, as warm and attentive. Seating is in curtained booths, which some find noisy, and food can be slow on busy nights. One regular returns every winter.",
    chef_bio: { chef_name: null, roles: ['Staff from Taiwan (unnamed; December 2025 reviews)'], origin: null, background: 'Shop text (Tabelog): traditional Taiwanese/Chinese stone-pot cooking; ingredients stir-fried in sesame oil and simmered in broth in a thick stone pot, the infrared effect bringing out flavour; the stone pot "beloved since our establishment"; four seasonal appetizers in the Ishinabe course; a bang-bang chicken popular with regulars, dressed with soy instead of sesame sauce. Reviews: "The staff are from Taiwan, polite, and fluent in Japanese" (December 2025); a June 2026 regular believes the dish is the shop\'s own creation.', philosophy: 'A light finish, keeping only the aroma of sesame oil (Tabelog).', specialty: 'Ishinabe stone-pot hot pot.',
      anecdotes: [
        { text: '"Surprisingly, the Taiwanese hot pot was quite light. The sesame sauce was really tasty!" — September 2025.', source: R + 'B514330931/' },
        { text: 'Told that a companion would be late, the staff "kindly offered me water and provided a warm welcome" — July 2026, the Ishinabe course.', source: R + 'B537899598/' },
        { text: '"The Taiwanese hot pot is so delicious that I crave it every winter!" — December 2025.', source: R + 'B525643591/' },
      ],
      japanese_sources_summary: null,
      confidence: 'medium', sources: [TB, R + 'B311804559/', R + 'B482912234/', R + 'B507163132/', R + 'B514330931/', R + 'B518571209/', R + 'B522747755/', R + 'B525643591/', R + 'B528492469/', R + 'B537899598/', R + 'B538016465/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Chinese-speaking staff (Tabelog); staff from Taiwan who speak Japanese (December 2025). No English menu listed.' },
    safety: { ...SAFETY0 },
    mom_and_pop: false, loc_precise: true, address_ja: '大阪府大阪市北区堂島1-3-23 日宝北新地ビル 5F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Shop-maintained (corporate-member) Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB}; cross-checked: GSI 大阪府大阪市北区堂島一丁目3番 (lot) 72m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B522747755/'],
    price_note: 'Courses from the Tabelog listing (tax included; 10% service); a ¥7,200 course in February 2026.', last_checked: TODAY, items: [
      it('', '', 'Stone-pot course with four seasonal appetizers and fruit (October–March, 3–4 people)', '¥7,860', 'Course', 'ask', 'no', 'Tabelog listing; ¥7,200 in a February 2026 review.', 'ishinabe_course'),
      it('', '', 'Weekday set after 20:00: one appetizer, stone pot, ramen', '¥4,400', 'Set', 'no', 'no', 'Tabelog listing.', 'late_set'),
    ] }, {
    cuisine: '台湾の石鍋料理: 厚い石鍋で魚介や山の幸をごま油で炒め、鶏のスープで煮込み、アクと余分な油を取ってごま油の香りだけを残す (食べログ)・10〜3月の石鍋コースは季節の前菜4品とフルーツつきで7,860円 (3〜4名)、平日20時からの前菜1品、石鍋、締めのラーメンのセット4,400円 (食べログ、税込)、2026年2月は7,200円のコース・口コミの料理: 生姜のきいたはまぐりのスープ、鯛の中華サラダ、海鮮サラダ、カニのチリソース、えび、棒棒鶏 (鶏むね肉、くらげ、白ねぎを醤油で)、締めの麺、フルーツ (2025〜2026年)・紹興酒 (梅干しを入れて)、ハイボール、レモンサワー',
    neighborhood: '堂島、日宝北新地ビル 5階。JR北新地駅11-23出口から徒歩5分',
    gf_detail: '要確認。グルテンの情報なし。石鍋の締めは麺やラーメンで、前菜の棒棒鶏は醤油、カニのチリソースなどのソースの材料は書かれていない (食べログ、2026年の口コミ)。',
    vegan_detail: 'ヴィーガンではありません。魚介や肉を鶏のスープで煮込む石鍋料理。',
    notes: '[台湾の鍋・堂島、5階の石鍋] 北新地駅の近くのビルの5階にある台湾の石鍋料理の店。厚い石鍋で魚介や野菜をごま油で炒めてから鶏のスープで煮込み、その前に前菜 (生姜のはまぐりのスープ、鯛のサラダ、カニのチリソース) が続き、締めは麺。寒い季節のコースは7,200〜7,900円ほどで、平日20時からは前菜1品と石鍋とラーメンの4,400円のセットも。思ったよりあっさりした味という声が多く、台湾出身で日本語の上手なスタッフのあたたかい対応をほめる声も。席はカーテンで仕切ったブースで、まわりの声がうるさいという人も、混む日は料理が遅いことも。毎年冬になると食べたくなるという常連も。',
  });
}

save();
