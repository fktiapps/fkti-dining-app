// Tokyo gaps sweep (four 1-mile circles between the existing Tokyo clusters), circle `ningyocho` — lane osw11, batch 12.
//   + らーめん豊樹 Ramen Toyoki (late-night ramen counter with a long menu; tantanmen and tonkotsu shio; since 2016)
//   + Okideli (butcher-run yakiniku with Oki Islands ingredients; Horidome-cho)
//   + VIGARO NIHONBASHI (one-person European-style wagyu curry shop, opened October 2025)
//   + Au pas camarade (Japanese-French teppanyaki; wagyu steamed-rice lunch; since 2019)
//   Picked from `node scripts/sweep/queue.mjs tokyo-gaps next core 12 ningyocho` (main repo, 2026-11-02): the first four,
//   147, 148, 149 and 152 m from the centre.
//   Dedupe. None is in data/tokyo.json by name or address (3-3-13, 堀留町2-1-1, 2-25-2, 2-8-8). Nearest records:
//   tokyo_asahikawa_shio_sugawara_ningyocho (3-3-10) 15 m from Toyoki; Firmamento and Akaya 18–20 m from VIGARO — all
//   different addresses, so every shop keeps its own point.
//   Chain check. VIGARO NIHONBASHI: run alone by its owner (2025–26 reviews); no other VIGARO shop in data or in the
//   sources. Au pas camarade: one July 2026 review says "it seems there is a sister restaurant in Ginza" — not named,
//   not in data; sister concepts are not chains. Toyoki, Okideli: single shops.
//   Ramen block left off for Toyoki: a many-style menu, and reviews do not source all six dimensions (brief LESSONS).
//   Tabelog URLs copied from each listing.txt line 1.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-02';
const { put, save } = openCitySweep('tokyo-gaps', TODAY, 'osw11-12');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ らーめん豊樹
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13195601/'; const R = TB + 'dtlrvwlst/';
  put({
    id: 'tokyo_ramen_toyoki_ningyocho', name: 'らーめん豊樹 (Ramen Toyoki)', category: 'OMNI',
    lat: 35.685765, lng: 139.780691, cuisine_type: 'ramen',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat noodles in every bowl; gyoza alongside.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: pork-bone and Chinese-style soups, minced pork, chashu.',
    hours_raw: 'Tabelog lists only "open until 26:00"; opening time and closing days are not given. Diners report lunch from about 11:30 (customers already inside just before 11:30, August 2026) and late-night bowls at 23:00 (September 2026); a May 2026 diner gives the close as 1 AM. Cash or PayPay; no cards or e-money (Tabelog). 13 seats: counter inside plus one four-seat table outside, the only place smoking is allowed (Tabelog). No reservations. Opened 12 May 2016 (Tabelog).',
    hours: {}, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Ningyocho 3-3-13, CIC Bldg 1F — 2 min from Ningyocho Stn exit A5',
    cuisine: 'Ramen of many styles — shoyu, shio, miso, tonkotsu shoyu, tonkotsu shio, tantanmen, tsukemen, abura soba, vegetable ramen (June 2026; January 2025) · tantanmen ¥1,080, the top item on the menu: sesame on a light soy-based soup, mild heat, no Sichuan-pepper numbing, a slight tang, minced pork, bok choy or spinach, medium-thin curly noodles (August–October 2026) · dry tantanmen with medium-thick straight noodles (October 2026) · chilled tantanmen ¥1,080 in summer (August 2026) · tonkotsu shoyu ¥980, thick, with grated ginger in the broth (June, October 2026) · tonkotsu shio, a regular favourite (2024–26) · A set: half rice and 3 gyoza ¥250 · nori ¥110, seasoned egg ¥110 · noodle firmness to order · drinks',
    website: TB, gmaps: gm('らーめん豊樹 人形町'), menu_url: null,
    notes: "[Ramen · Ningyocho, the late-night bowl after drinks] A small ramen counter open until the small hours, where Ningyocho drinkers come to finish the night; at 23:00 on a September night it was more than half full, with many customers still drinking. The menu covers nearly every style. Tantanmen tops the list (¥1,080): sesame over a light soy-based soup, gently spicy and slightly tangy, with medium-thin curly noodles. Regulars swear by the tonkotsu shio, and one June diner found grated ginger lifting the tonkotsu shoyu. A couple runs the shop and the kitchen moves fast (October 2026); the owner, from China, is always smiling (October 2025). Prices have risen about 20% since opening (December 2025), and one diner found the noodle portion small. Cash or PayPay.",
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; "The Chinese owner is always smiling and very quick", October 2025 review)', 'Run by a couple (October 2026 review)'], origin: 'China (October 2025 review)',
      background: 'Opened 12 May 2016 (Tabelog). A regular since opening says the owner\'s wife helps at busy times (December 2024); "The couple running the place work in perfect harmony" (October 2026).',
      philosophy: null, specialty: 'Tantanmen; tonkotsu shio ramen.',
      anecdotes: [
        { text: '"The couple running the place work in perfect harmony, and watching the efficient kitchen operation is quite pleasant." — October 2026, fourth visit.', source: R + 'B496731423/' },
        { text: '"I visited around 11 PM. I thought it might be empty at this hour, but to my surprise, the restaurant was more than half full." — September 2026.', source: R + 'B534937099/' },
        { text: '"Notably, the flavor of grated ginger infused in the broth adds a unique sharpness and character" — June 2026, tonkotsu shoyu.', source: R + 'B530115024/' },
      ],
      japanese_sources_summary: '食べログ: らーめん豊樹、ラーメン、日本橋人形町3-3-13 CICビル 1F、人形町駅A5出口から徒歩2分、営業は26:00まで (開店時刻と定休日の記載なし)、カード・電子マネー不可、PayPay可、13席 (カウンターと外の4人席)、喫煙は外の席のみ、予約不可、2016年5月12日オープン。口コミ(2024年2月〜2026年10月): 醤油、塩、味噌、豚骨醤油、豚骨塩、担々麺、つけ麺、油そば、野菜らーめん、担々麺1,080円 (胡麻、辛さ控えめ、しびれなし、少し酸味、中細の縮れ麺)、汁なし担々麺、冷やし担々麺1,080円、豚骨醤油980円 (おろし生姜)、Aセット (半ライスと餃子3個) 250円、夫婦で営む、中国出身の店主、開店時より約2割値上げ、深夜も客が多い、麺が少なめという声も。',
      confidence: 'medium', sources: [TB, R + 'B480171185/', R + 'B496731423/', R + 'B529377466/', R + 'B530115024/', R + 'B534006445/', R + 'B534937099/', R + 'B536962785/', R + 'B537638111/', R + 'B537818465/', R + 'B538317069/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Long menu; noodle firmness to order; a late-night crowd.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町3-3-13 CICビル 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated to October 2026.' },
    pin_source: `Tabelog ${TB} (35.685765, 139.780691); cross-checked: GSI 東京都中央区日本橋人形町三丁目3番13号 (go) 10m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B534006445/', R + 'B536962785/'],
    price_note: 'Prices from August–October 2026 reviews; about 20% above opening prices (December 2025 review).', last_checked: TODAY, items: [
      it('', '', 'Tantanmen', '¥1,080', 'Ramen', 'no', 'no', 'August–October 2026.', 'tantanmen'),
      it('', '', 'Chilled tantanmen (summer)', '¥1,080', 'Ramen', 'no', 'no', 'August 2026.', 'hiyashi_tantan'),
      it('', '', 'Tonkotsu shoyu ramen', '¥980', 'Ramen', 'no', 'no', 'October 2026.', 'tonkotsu_shoyu'),
      it('', '', 'A set: half rice and 3 gyoza', '¥250', 'Sets', 'no', 'no', 'August 2026.', 'a_set'),
      it('', '', 'Seasoned egg', '¥110', 'Toppings', 'ask', 'ask', 'October 2026.', 'ajitama'),
    ] }, {
    cuisine: 'いろいろな系統のラーメン: 醤油、塩、味噌、豚骨醤油、豚骨塩、担々麺、つけ麺、油そば、野菜らーめん (2026年6月、2025年1月)・担々麺1,080円はメニューの一番上: 軽い醤油ベースのスープに胡麻、辛さは穏やかで花椒のしびれはなく、少し酸味、ひき肉、青梗菜かほうれん草、中細の縮れ麺 (2026年8月〜10月)・汁なし担々麺は中太のストレート麺 (2026年10月)・夏の冷やし担々麺1,080円 (2026年8月)・濃いめの豚骨醤油980円、スープにおろし生姜 (2026年6月、10月)・常連に人気の豚骨塩 (2024〜26年)・Aセット: 半ライスと餃子3個で250円・海苔110円、味玉110円・麺の硬さを選べる・お酒も',
    neighborhood: '日本橋人形町3-3-13 CICビル 1F。人形町駅A5出口から徒歩2分',
    gf_detail: 'グルテンフリーではない: どの丼も小麦の麺。餃子も。',
    vegan_detail: 'ヴィーガンではない: 豚骨などのスープ、ひき肉、チャーシュー。',
    notes: '[ラーメン・人形町、飲んだあとの深夜の一杯] 夜遅くまで開いている小さなラーメンのカウンターで、人形町で飲んだ人が締めに来る。9月の夜23時でも半分以上の席が埋まり、まだ飲んでいる客も多かった。メニューはほぼすべての系統をそろえる。一番上は担々麺 (1,080円) で、軽い醤油ベースのスープに胡麻、穏やかな辛さと少しの酸味、中細の縮れ麺。常連は豚骨塩を推し、6月の客は豚骨醤油のおろし生姜が効いていたという。夫婦で営み、厨房の動きが速い (2026年10月)。中国出身の店主はいつも笑顔 (2025年10月)。開店時より約2割値上がりし (2025年12月)、麺が少なめという声も。現金か PayPay。',
  });
}

// ================================================================ Okideli
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13187580/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']); const SUN = day(['17:00', '22:30']);
  put({
    id: 'tokyo_okideli_horidome', name: 'Okideli', category: 'OMNI',
    lat: 35.687499, lng: 139.781531, cuisine_type: 'other',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Many cuts come with sauce or soy-sauce seasoning (the soy-sauce colon, 2025), alongside salt-seasoned tongue; noodles and Korean pancakes are on the menu. Nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a beef yakiniku restaurant.',
    hours_raw: 'Mon–Sat 17:00–23:00 (food last order 22:10, last entry 22:00); Sun and holidays 17:00–22:30 (last order 21:50, last entry 21:30); closing days irregular, posted monthly on Instagram (Tabelog). Reservations taken; booking calls after 16:00; parties of five or more confirm with the shop; reservations held 20 minutes; same-day cancellations may be charged; children not yet at school are not admitted (Tabelog). Cards (VISA, Master, JCB, AMEX, Diners, UnionPay) and PayPay (Tabelog). 16 table seats; non-smoking, with a smoking area on the outside stairs (Tabelog). Full by 18:30 on a Saturday, with walk-ins waiting (February 2025).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: SUN }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Nihonbashi-Horidomecho 2-1-1, 藤和堀留ビル 2F, above the fish restaurant Kiteretsu — 3 min from Ningyocho Stn exit A4 (left from the exit, left at the FamilyMart corner, 50 m on the right)',
    cuisine: 'Butcher-run yakiniku of Japanese Black wagyu, grilled on a charcoal shichirin, with ingredients from the Oki Islands (Tabelog; 2025–26 reviews) · courses: 15 dishes ¥7,200, 16 dishes ¥9,300 (Tabelog) · à la carte in February 2025: premium tongue ¥2,450, outside skirt ¥3,400, assorted horumon ¥1,400, omasum ¥990, bean-sprout namul ¥530 · house prosciutto of lean beef, salted yukhoe, chateaubriand, soy-sauce colon and maruchou (2025–26) · to finish: cold noodles ¥660, spicy noodles ¥950 (February 2025), Oki onigiri with house umeboshi and rock seaweed, rice of contract-grown "Oki sea salt rice" ¥420 · Tiger makgeolli, Oki sake, shochu, Obuse wine; coffee float with 100TARO coffee',
    website: TB, gmaps: gm('Okideli 堀留町'), menu_url: TB + 'dtlmenu/',
    notes: '[Yakiniku · Horidome-cho, a butcher-run wagyu grill with roots in the Oki Islands] A sixteen-seat yakiniku room on a second floor near Ningyocho, run by a butcher, whose chef comes from the Oki Islands off Shimane (Tabelog). The meat reportedly comes through a butcher in the Oki Islands (July 2026), and the rice is grown under contract there. Black wagyu is cut fresh and grilled over charcoal, staff explain each cut (June 2026), and a February 2026 meal began with kimchi, namul and Korean seaweed. The tongue, the outside skirt and the soy-sauce colon draw the most praise. Most diners praise the service and value, but one February 2025 diner found the meat no better than all-you-can-eat. Booking is wise: it fills by 18:30 on Saturdays. No preschool children.',
    chef_bio: { chef_name: null, roles: ['Chefs with a background in Japanese cuisine (Tabelog)', 'Run, it seems, by a couple (February 2025 review)'], origin: 'The chef\'s hometown is Oki Island (Tabelog)',
      background: 'Per Tabelog: a butcher-run yakiniku; the chef\'s hometown is Oki Island, and the shop serves its ingredients, including contract-farmed "Oki Sea Salt Rice" milled just before shipping; the chefs have a background in Japanese cuisine; black wagyu from across the country through the shop\'s own sourcing routes. A July 2026 review says the meat comes from a butcher shop on an island in Shimane Prefecture.',
      philosophy: null, specialty: 'Freshly cut black wagyu; house prosciutto of lean beef.',
      anecdotes: [
        { text: '"It seems to be run by a butcher shop, and the staff kindly explained the different cuts of fresh meat, which we enjoyed immensely." — June 2026.', source: R + 'B529798559/' },
        { text: '"The Colon is seasoned with soy sauce but isn’t overly salty; it has a rich flavor." — June 2025, a payday-weekend regular.', source: R + 'B509336776/' },
        { text: '"The service and atmosphere were great, but the meat was simply not good." — February 2025.', source: R + 'B501752607/' },
      ],
      japanese_sources_summary: '食べログ: Okideli、焼肉、ホルモン、牛料理、日本橋堀留町2-1-1 藤和堀留ビル 2F (1階は魚の店)、人形町駅A4出口から徒歩3分、月〜土17:00〜23:00、日祝17:00〜22:30、不定休 (Instagram で告知)、予約可、未就学児不可、カードと PayPay 可、16席 (テーブル)、外の階段に喫煙所、精肉店が営む焼肉、シェフの故郷 Oki の食材、契約栽培の米、コース7,200円と9,300円。口コミ(2022年11月〜2026年7月): 七輪の炭火、上タン2,450円、ハラミ3,400円、ホルモン盛り合わせ1,400円、冷麺660円、醤油のシマチョウ、生ハム、ユッケ、マッコリ、接客がよい、土曜は18時半で満席、肉がいまひとつだったという声も。',
      confidence: 'medium', sources: [TB, TB + 'dtlmenu/', R + 'B457137306/', R + 'B498409463/', R + 'B499402376/', R + 'B501371204/', R + 'B501752607/', R + 'B509336776/', R + 'B523543027/', R + 'B525491223/', R + 'B529798559/', R + 'B531316407/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Staff explain the cuts; book ahead for weekends; no preschool children.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋堀留町2-1-1 藤和堀留ビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing (menu updated 2026-01-14); reviews to July 2026.' },
    pin_source: `Tabelog ${TB} (35.687499, 139.781531); cross-checked: GSI 東京都中央区日本橋堀留町二丁目1番1号 (go) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B501371204/'],
    price_note: 'Courses from Tabelog (tax included, 2026); à la carte from a February 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Course, 6 kinds of meat, 15 dishes', '¥7,200', 'Courses', 'ask', 'no', 'Tabelog, 2026.', 'course_7200'),
      it('', '', 'Course, 8 kinds of meat, 16 dishes', '¥9,300', 'Courses', 'ask', 'no', 'Tabelog, 2026.', 'course_9300'),
      it('', '', 'Premium tongue', '¥2,450', 'Meat', 'ask', 'no', 'February 2025.', 'jo_tan'),
      it('', '', 'Outside skirt', '¥3,400', 'Meat', 'ask', 'no', 'February 2025.', 'harami'),
      it('', '', 'Cold noodles', '¥660', 'Noodles and rice', 'no', 'no', 'February 2025.', 'reimen'),
    ] }, {
    cuisine: '精肉店が営む黒毛和牛の焼肉、七輪の炭火で焼く、Oki Islands の食材も (食べログ、2025〜26年の口コミ)・コース: 15品7,200円、16品9,300円 (食べログ)・2025年2月のアラカルト: 上タン2,450円、ハラミ3,400円、ホルモン盛り合わせ1,400円、センマイ990円、もやしのナムル530円・自家製の赤身の生ハム、塩ユッケ、シャトーブリアン、醤油のシマチョウとマルチョウ (2025〜26年)・締め: 冷麺660円、辛いラーメン950円 (2025年2月)、自家製の梅干しと岩海苔の Oki おにぎり、契約栽培の Oki の米のご飯420円・マッコリ、Oki の日本酒、焼酎、小布施ワイン、100TARO のコーヒーのコーヒーフロート',
    neighborhood: '日本橋堀留町2-1-1 藤和堀留ビル 2F、1階は魚の店 Kiteretsu。人形町駅A4出口から徒歩3分 (出口を左、FamilyMart の角を左、50m先の右手)',
    gf_detail: '要確認。タレや醤油で味つけした部位が多く (醤油のシマチョウ、2025年)、塩のタンも。麺やチヂミもある。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 牛肉の焼肉の店。',
    notes: '[焼肉・堀留町、Oki Islands にルーツのある精肉店の和牛の焼肉] 人形町近くのビルの2階にある16席の焼肉店で、精肉店が営み、シェフは Shimane 沖の Oki Islands の出身 (食べログ)。肉は Oki Islands の精肉店から来るといい (2026年7月)、米もそこで契約栽培。黒毛和牛をその場で切って炭火で焼き、店の人が部位を説明してくれる (2026年6月)。2026年2月の食事はキムチ、ナムル、韓国海苔から始まった。評判はタン、ハラミ、醤油のシマチョウ。接客と値段の割のよさを褒める声が多いが、2025年2月には肉が食べ放題並みだったという声も。土曜は18時半に満席になるので予約がおすすめ。未就学児は不可。',
  });
}

// ================================================================ VIGARO NIHONBASHI
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13314294/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:30', '16:00']);
  put({
    id: 'tokyo_vigaro_nihonbashi_ningyocho', name: 'VIGARO NIHONBASHI', category: 'OMNI',
    lat: 35.686749, lng: 139.783738, cuisine_type: 'curry',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. A European-style wagyu curry; nothing is described as gluten-free, and toppings include fried garlic.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu curry with a black-wagyu consommé.',
    hours_raw: 'Mon–Fri 11:30–16:00, open on weekday holidays, until the curry runs out; closed Saturday and Sunday (Tabelog). Pay first at order; water is self-service (Tabelog; 2026 reviews). Cards, transport IC, iD, QUICPay and QR (PayPay, Alipay, WeChat Pay and more) (Tabelog). 10 seats — one table for four and three for two (August 2026). Non-smoking. English menu; takeaway; Uber Eats (Tabelog). Opened 7 October 2025 (Tabelog). The owner works alone, so waits run long at lunch: 40 minutes to be seated and 20 more for the curry in December 2025, about 50 minutes in September 2026, about 15 minutes in October 2026.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-25-2, L&J Bldg 2F, up a steep narrow staircase behind a red sign — 2 min from Ningyocho Stn exit A3',
    cuisine: 'One curry, a "new European-style" wagyu curry heavy with spices (2026 reviews) · Premium Wagyu Golden Curry ¥800, large +¥200, special size +¥400 (August–October 2026), garnished with cashews, raisins and fukujinzuke (October 2026) · toppings: extra beef ¥300, spiced boiled egg ¥100, fried garlic ¥100, truffle sauce ¥200, spiced natto ¥200, spicy mango pickle ¥100, Sichuan-style keema ¥100, spice ball ¥100 (2026) · a free black-wagyu consommé with every curry, dine-in only (Tabelog) · masala milk ¥200, tiramisu ¥300 (October 2026) · the curry has changed: an A5-wagyu Ultimate European Curry ¥1,200 at opening, a New European Curry ¥800 from February 2026, the Golden Curry from August 2026 (August 2026 review)',
    website: TB, gmaps: gm('VIGARO NIHONBASHI 人形町'), menu_url: null,
    notes: '[Curry · Ningyocho, a one-person wagyu curry counter up a hidden staircase] A ten-seat curry shop on a second floor reached by a steep staircase behind a red sign, opened in October 2025 and run single-handed by a young owner. There is one curry, a European-style wagyu curry blanketed in spices, rich and slightly sweet, for ¥800, plus a long list of toppings and a free, very hot black-wagyu consommé. The recipe keeps evolving: one regular has tracked three versions in its first year. Diners love the owner\'s warmth and the value, but everything is cooked by one person, so lunch waits can stretch from 15 minutes to nearly an hour. Come at the 11:30 opening if you are in a hurry. Weekdays only, until the curry runs out.',
    chef_bio: { chef_name: null, roles: ['Owner, working alone ("The young owner manages everything alone", August 2026 review)'], origin: null,
      background: 'Opened 7 October 2025 (Tabelog). Per an August 2026 regular (nine visits): opened with an A5 black-wagyu Ultimate European Curry (¥1,200); a cheaper New European Curry (¥800) from February 2026, likely with beef tendon; the Premium Wagyu Golden Curry by August 2026. A diner cites the shop\'s Instagram for domestic A5 wagyu (August 2026). Menu changes are announced on Instagram (Tabelog).',
      philosophy: null, specialty: 'Premium Wagyu Golden Curry.',
      anecdotes: [
        { text: '"The humble owner apologized, saying it would take about 20 minutes." — December 2025; the wait was 40 minutes, then 20 more for the curry.', source: R + 'B520072640/' },
        { text: '"The owner, who runs the place alone, is warm and has a lovely smile." — October 2026.', source: R + 'B536893194/' },
        { text: '"Initially, the menu featured the Ultimate European Curry (JPY 1200 …), which used A5 grade domestic black wagyu beef" — August 2026, ninth visit.', source: R + 'B537596929/' },
      ],
      japanese_sources_summary: '食べログ: VIGARO NIHONBASHI、カレー、日本橋人形町2-25-2 L&Jビル 2F、人形町駅A3出口から徒歩2分、月〜金11:30〜16:00 (ルーがなくなり次第終了)、平日の祝日は営業、土日休み、前払い、水はセルフ、カード・電子マネー・QR可、10席、禁煙、英語メニュー、テイクアウト、Uber Eats、カレーを頼むとスープ付き (店内のみ)、2025年10月7日オープン。口コミ(2025年12月〜2026年10月): 店主ひとりで営む、プレミアム和牛ゴールデンカレー800円、大盛り+200円、牛肉増し300円、ゆでたまご100円、トリュフソース200円、黒毛和牛のコンソメスープ、カシューナッツとレーズンと福神漬け、マサラミルク200円、ティラミス300円、カレーは開店時の究極の欧風カレー1,200円から2026年2月に新欧風カリー800円、8月にゴールデンカレーへ、待ち時間が長いという声。',
      confidence: 'medium', sources: [TB, R + 'B520072640/', R + 'B529398853/', R + 'B532698698/', R + 'B534388119/', R + 'B536163881/', R + 'B536482535/', R + 'B536893194/', R + 'B537268465/', R + 'B537561503/', R + 'B537596929/'] },
    cultural_comfort: { level: 'english', note: 'English menu (Tabelog); one curry, toppings by name; pay first.' },
    safety: SAFETY0,
    mom_and_pop: true, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-25-2 L&Jビル 2F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated December 2025–October 2026.' },
    pin_source: `Tabelog ${TB} (35.686749, 139.783738); cross-checked: GSI 東京都中央区日本橋人形町二丁目25番2号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B537596929/', R + 'B536893194/', R + 'B537268465/'],
    price_note: 'Prices from August–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Premium Wagyu Golden Curry (free consommé)', '¥800', 'Curry', 'ask', 'no', 'August–October 2026; large +¥200, special +¥400.', 'golden_curry'),
      it('', '', 'Extra beef', '¥300', 'Toppings', 'ask', 'no', 'October 2026.', 'extra_beef'),
      it('', '', 'Spiced boiled egg', '¥100', 'Toppings', 'ask', 'ask', 'October 2026.', 'egg'),
      it('', '', 'Truffle sauce', '¥200', 'Toppings', 'ask', 'ask', 'September 2026.', 'truffle'),
      it('', '', 'Masala milk', '¥200', 'Drinks and desserts', 'ask', 'no', 'October 2026.', 'masala_milk'),
      it('', '', 'Tiramisu', '¥300', 'Drinks and desserts', 'no', 'no', 'October 2026.', 'tiramisu'),
    ] }, {
    cuisine: 'カレーはひとつ、スパイスをたっぷりかけた「新欧風」の和牛カレー (2026年の口コミ)・プレミアム和牛ゴールデンカレー800円、大盛り+200円、特盛り+400円 (2026年8月〜10月)、カシューナッツ、レーズン、福神漬けを添えて (2026年10月)・トッピング: 牛肉増し300円、スパイスのゆでたまご100円、フライドガーリック100円、トリュフソース200円、スパイス納豆200円、辛いマンゴーのピクルス100円、四川風キーマ100円、スパイスボール100円 (2026年)・カレーには黒毛和牛のコンソメスープが無料で付く、店内のみ (食べログ)・マサラミルク200円、ティラミス300円 (2026年10月)・カレーは変わってきた: 開店時は A5 和牛の究極の欧風カレー1,200円、2026年2月から新欧風カリー800円、8月からゴールデンカレー (2026年8月の口コミ)',
    neighborhood: '日本橋人形町2-25-2 L&Jビル 2F、赤い看板の奥の急で狭い階段の上。人形町駅A3出口から徒歩2分',
    gf_detail: '要確認。欧風の和牛カレーで、グルテンフリーの説明はない。トッピングにフライドガーリックも。',
    vegan_detail: 'ヴィーガンではない: 和牛のカレーと黒毛和牛のコンソメ。',
    notes: '[カレー・人形町、隠れた階段の上でひとりで営む和牛カレー] 赤い看板の奥の急な階段を上った2階にある10席のカレー店。2025年10月に開き、若い店主がひとりで営む。カレーはひとつで、スパイスをたっぷりかけた濃厚で少し甘い欧風の和牛カレーが800円。トッピングが多く、とても熱い黒毛和牛のコンソメが無料で付く。レシピは変わり続け、ある常連は最初の1年で3つの版を食べている。店主の温かさと値段の割のよさが好評だが、ひとりで作るので昼は15分から1時間近く待つことも。急ぐなら11時半の開店時に。平日のみ、カレーがなくなり次第終了。',
  });
}

// ================================================================ Au pas camarade
{
  const TB = 'https://tabelog.com/en/tokyo/A1302/A130204/13235526/'; const R = TB + 'dtlrvwlst/';
  const MON = day(['17:00', '22:00']); const H = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'tokyo_au_pas_camarade_ningyocho', name: 'Au pas camarade', category: 'OMNI',
    lat: 35.686187, lng: 139.783865, cuisine_type: 'french',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask when booking — the shop asks for allergies with dinner reservations (Tabelog). Lunch includes yakisoba and a sweet gravy over the wagyu rice; nothing is described as gluten-free.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu-centred teppanyaki and beef soups; the seasonal steamed vegetables come within a meat set.',
    hours_raw: 'Mon 17:00–22:00 (last order 20:30); Tue–Sat 11:30–14:00 (last order 13:30) and 17:00–22:00 (last order 20:30); closed Sundays and holidays (Tabelog). Reservations for dinner only; tell the shop about allergies and dislikes when booking (Tabelog). Tabelog lists cards (VISA, Master, JCB, AMEX, Diners), but a July 2026 lunch diner was told cash only. Service charge 10% (Tabelog). 11 seats: 7 at a counter around the teppan and a sunken-kotatsu private room for 4–5; private rooms for 2, 4 or 6; private hire up to 20 (Tabelog). Non-smoking. Lunch is cooked to order by two staff, so waits of about 20 minutes (April, July 2026). Opened 18 May 2019 (Tabelog).',
    hours: { 0: MON, 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nihonbashi-Ningyocho 2-8-8, マリオンポート 101, in a back alley — 3 min from Ningyocho Stn exit A3, 5 min from Suitengumae Stn exit 7',
    cuisine: 'Japanese-French creative teppanyaki, served as an omakase of small plates (Tabelog) · dinner courses: 10 dishes ¥12,100 with wagyu sirloin as grilled shabu-shabu and wagyu steamed rice; 9 dishes ¥18,150 with Gunma wagyu sirloin cap and the clay-pot rice of seasonal fish (Tabelog, tax included, plus 10%) · 4–5 wines by the glass chosen daily by a sommelier; many non-alcoholic drinks (Tabelog) · lunch: black-wagyu steamed rice ¥2,000, the beef almost rare under a sweet gravy, with mountain wasabi (June–August 2026); teppan yakisoba with squid-liver sauce and beef tendon ¥1,200 (April, August 2026); mini beef-tendon curry ¥500 (June 2026); on Tuesdays and Wednesdays a ¥1,800 set of two grilled rice balls in perilla leaves, beef soup with red- or white-wine base and seasonal steamed vegetables (July 2026); small side dishes and soup with lunch',
    website: TB, gmaps: gm('Au pas camarade 人形町'), menu_url: TB + 'dtlmenu/',
    notes: '[Teppanyaki · Ningyocho, Japanese-French teppan in a back alley, with a celebrated wagyu lunch] A small teppanyaki restaurant in a Ningyocho back alley, since 2019, cooking Japanese-French omakase at a seven-seat counter around the griddle, with tatami private rooms. Dinner is a course of small plates ending in wagyu and rice, with wines picked daily by a sommelier. Lunch is the bargain that built its reputation: black-wagyu steamed rice for ¥2,000, the meat almost rare and finishing in the heat of the rice, or a yakisoba in squid-liver sauce for ¥1,200. Two people cook lunch to order, so expect about 20 minutes. One July 2026 diner was told lunch is cash only, though Tabelog lists cards. A sister restaurant in Ginza is mentioned (July 2026).',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 18 May 2019 (Tabelog). The interior has been renovated, with spacious counter seating (June 2026). "It seems there is a sister restaurant in Ginza as well" (July 2026 review).',
      philosophy: 'Creative dishes combining Japanese and French cuisine with meat, seafood and vegetables from across Japan, in small portions (Tabelog shop text).', specialty: 'Wagyu steamed rice; teppan yakisoba with squid-liver sauce.',
      anecdotes: [
        { text: '"As I ate, the heat from the rice gradually cooked the meat, making it even more flavorful with the melted fat." — July 2026, black-wagyu steamed rice.', source: R + 'B532995901/' },
        { text: '"… during lunch, … just two staff members, so cooking starts after the order is placed." — April 2026.', source: R + 'B526380904/' },
        { text: '"The sauce, which highlights the umami of the squid innards, was impressive and offered a unique take on yakisoba" — April 2026, ¥1,200.', source: R + 'B527060674/' },
      ],
      japanese_sources_summary: '食べログ: Au pas camarade、鉄板焼き、ワインバー、フレンチ、日本橋人形町2-8-8 マリオンポート 101、人形町駅A3出口から徒歩3分、水天宮前駅7番出口から徒歩5分、月曜17:00〜22:00、火〜土11:30〜14:00、17:00〜22:00、日祝休み、予約は夜のみ、アレルギーは予約時に、カード可、サービス料10%、11席 (カウンター7、掘りごたつの個室)、禁煙、和とフレンチの創作のおまかせ、コース12,100円と18,150円、ソムリエが選ぶグラスワイン4〜5種、2019年5月18日オープン。口コミ(2025年8月〜2026年8月): 昼の黒毛和牛の蒸しご飯2,000円、イカワタソースの鉄板焼きそば1,200円、ミニカレー500円、火曜と水曜限定のおにぎりと牛スープと蒸し野菜のセット1,800円、昼は二人で作るので待つ、昼は現金のみと言われたという声、Ginza に姉妹店があるらしい。',
      confidence: 'medium', sources: [TB, R + 'B511339944/', R + 'B524278566/', R + 'B526380904/', R + 'B527060674/', R + 'B528672388/', R + 'B529227109/', R + 'B531720209/', R + 'B532826273/', R + 'B532836357/', R + 'B532995901/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Omakase at dinner (book, and state allergies); short lunch menu, no lunch bookings.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['The shop asks diners to state allergies and dislikes when booking, as dishes are chef\'s choice (Tabelog).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '東京都中央区日本橋人形町2-8-8 マリオンポート 101',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog official listing; reviews dated August 2025–August 2026.' },
    pin_source: `Tabelog ${TB} (35.686187, 139.783865); cross-checked: GSI 東京都中央区日本橋人形町二丁目8番8号 (go) 4m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B529227109/', R + 'B527060674/', R + 'B531720209/'],
    price_note: 'Courses from Tabelog (tax included, plus 10% service); lunch prices from April–August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Omakase wagyu steamed-rice course (10 dishes)', '¥12,100', 'Dinner courses', 'ask', 'no', 'Tabelog.', 'course_12100'),
      it('', '', 'Wagyu teppan steak course (9 dishes)', '¥18,150', 'Dinner courses', 'ask', 'no', 'Tabelog.', 'course_18150'),
      it('', '', 'Black-wagyu steamed rice (lunch)', '¥2,000', 'Lunch', 'ask', 'no', 'June–August 2026.', 'wagyu_seiro'),
      it('', '', 'Teppan yakisoba with squid-liver sauce (lunch)', '¥1,200', 'Lunch', 'no', 'no', 'April, August 2026.', 'yakisoba'),
      it('', '', 'Mini beef-tendon curry (lunch)', '¥500', 'Lunch', 'ask', 'no', 'June 2026.', 'mini_curry'),
      it('', '', 'Tue/Wed set: rice balls, beef soup, steamed vegetables', '¥1,800', 'Lunch', 'ask', 'no', 'July 2026.', 'tuewed_set'),
    ] }, {
    cuisine: '和とフレンチの創作の鉄板焼き、小皿のおまかせで (食べログ)・夜のコース: 和牛サーロインの焼きしゃぶと和牛の蒸しご飯の10品12,100円、Gunma の和牛のサーロインのかぶりと旬の魚の土鍋ご飯の9品18,150円 (食べログ、税込み、別に10%)・ソムリエが毎日選ぶグラスワイン4〜5種、ノンアルコールも多い (食べログ)・昼: 黒毛和牛の蒸しご飯2,000円、ほぼレアの肉に甘い和風のソース、山わさび添え (2026年6月〜8月)、イカワタソースと牛すじの鉄板焼きそば1,200円 (2026年4月、8月)、牛すじのミニカレー500円 (2026年6月)、火・水は焼きおにぎり2つをエゴマの葉で包み、赤か白のワインベースの牛スープと旬の蒸し野菜を合わせたセット1,800円 (2026年7月)・昼は小鉢とスープ付き',
    neighborhood: '日本橋人形町2-8-8 マリオンポート 101、裏路地。人形町駅A3出口から徒歩3分、水天宮前駅7番出口から徒歩5分',
    gf_detail: '予約時に要確認。夜の予約ではアレルギーを聞かれる (食べログ)。昼は焼きそばや和牛ご飯の甘いソースも。グルテンフリーの説明はない。',
    vegan_detail: 'ヴィーガンではない: 和牛中心の鉄板焼きと牛のスープ。旬の蒸し野菜は肉のセットの一品。',
    notes: '[鉄板焼き・人形町、裏路地の和とフレンチの鉄板、評判の和牛ランチ] 人形町の裏路地にある2019年からの小さな鉄板焼きの店。鉄板を囲む7席のカウンターで和とフレンチのおまかせを作り、座敷の個室も。夜は小皿のコースを和牛とご飯で締め、ワインはソムリエが毎日選ぶ。評判を作ったのはお得な昼で、黒毛和牛の蒸しご飯2,000円は、ほぼレアの肉がご飯の熱で火が入っていく。イカワタソースの焼きそば1,200円も。昼は二人で注文ごとに作るので20分ほど待つ。2026年7月の昼に現金のみと言われた人もいるが、食べログではカード可。Ginza に姉妹店があるという (2026年7月)。',
  });
}

save();
