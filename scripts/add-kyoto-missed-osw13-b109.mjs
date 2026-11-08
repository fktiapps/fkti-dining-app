// Kyoto priority (kyoto-missed), worker osw13, batch 109 — lane: Tabelog id mod 6 = 0; rest tier, nearest-first.
// Drafts: 山三ツ輪, 蔵代醗彩, ナマステ ダウラギリ 東山安井店, はんと HUNTO.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';

const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw13-109');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };
const rv = (R, ids) => ids.map(b => R + b + '/');

skip('26039406', 'big-chain hotel venue (Greg 11-08 ruling): ソイ・ギャン (SOI GAENG) is the restaurant on the 1st floor of ASAI 京都四条 (Tabelog address and "hotel restaurant" tag), a hotel of Dusit International, a global hotel group (dusit.com/asai-kyoto)');
skip('26022612', 'chain: ベジョータ ムアムア 烏丸三条店 — the ベジョータ group already ruled a chain (osw2-31: five shops in Kyoto and Osaka)');
skip('26031936', 'large parent: マダム ドリュック 京都祇園店 is the Japan shop of a Belgian chocolatier founded in 1919 (Tabelog; 2024 reviews), with other shops in Japan named by reviewers (Hilton Plaza Osaka; several in Tokyo) — a maker\'s brand shop, as with GODIVA Bakery; the ground floor is chocolate retail with a café upstairs');

// ================================================================ 山三ツ輪
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26044014/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_yama_mitsuwa', name: '山三ツ輪 (Yama Mitsuwa)', category: 'OMNI',
    lat: 35.006303, lng: 135.759211, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Italian courses with pasta, baguette and focaccia, shrimp tempura and scallop katsu (2026 reviews). Reviewers say dietary restrictions were handled carefully (June–August 2026) — ask ahead.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: venison, prosciutto, pâté, duck, beef, seafood and egg dishes (2026 reviews).',
    hours_raw: 'Tabelog: Tue–Sun and holidays 17:00–23:00 (food L.O. 21:30, drinks 22:15); closed Monday (holiday changes posted). Daytime 10:00–15:00 the front of the shop is a standing bar selling sake, wine, beer and snacks (Tabelog; October 2026 review). Reservations taken; 5+ by phone; please keep to your booking time. Service charge ¥800 per person — Tabelog, Japanese original 「サービス料 800円(一名様)」. 21 seats: counter, a main table and sofa seats. Non-smoking; avoid strong perfume. Cards. Sommelier on staff; English-speaking staff. Children from elementary-school age only. 3 min walk from Shijo-Karasuma. Opened 18 January 2026.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Karasuma, north side — 3 min walk from Shijo or Karasuma',
    cuisine: 'A new (January 2026) counter Italian that blends Japanese technique, with wine and Japanese-sake pairings (Tabelog; 2026 reviews) · omakase course with pairing; à la carte also (2026) · roasted venison; sake-steamed clams; prosciutto; fried firefly squid with bamboo shoots (March 2026) · carbonara-style potato salad; burrata with prosciutto and pear; salmon tartare; Kyoto duck tagliata with Arima sansho; rare scallop katsu with saikyo-miso tartare; squid and Kujo-leek pasta with karasumi (October 2026) · Omi duck; ayu confit; angel-shrimp spaghetti (September 2026) · fresh fish carpaccio; figs and prosciutto; beef steak (October 2026)',
    website: 'https://www.yamamitsuwa.jp', gmaps: gm('山三ツ輪 京都 四条烏丸'), menu_url: TB + 'dtlmenu/',
    notes: '[Italian × sake · Shijo-Karasuma, a counter with a daytime standing bar] A new counter Italian that cooks with Japanese touches — venison, duck, rare scallop katsu, squid-and-karasumi pasta — and pairs every course with wine or sake, chosen by the owners. About ¥10,000–19,000 with drinks; ¥800 service. By day the front is a sake standing bar. Closed Monday.',
    chef_bio: { chef_name: null, roles: ['Owners (a couple: wine and sake)', 'Chef (unnamed)'], origin: null,
      background: 'Opened 18 January 2026 (Tabelog), featured as a rumoured new opening in Tabelog Magazine. An October 2026 reviewer describes the owner couple — the husband handling wine, the wife Japanese sake — and a cheerful chef. Repeat reviewers praise attentive but unobtrusive service and careful handling of dietary restrictions, including half portions (June–October 2026). Criticism: dishes take time to arrive (October 2026).',
      philosophy: 'Japanese essence with Western techniques and flavors (August 2026 review title).',
      specialty: 'Counter Italian with wine and sake pairing.',
      anecdotes: [
        { text: 'October 2026: "The owner couple is wonderful; the husband specializes in wine while the wife focuses on Japanese sake, and they provide very attentive suggestions and explanations about the drinks."', source: R + 'B537531088/' },
        { text: 'June 2026: "They were very accommodating with my dietary restrictions, and I truly appreciated that they adjusted the portion sizes to half."', source: R + 'B529733926/' },
      ],
      japanese_sources_summary: '食べログ: 山三ツ輪、イタリアン・創作料理、中京区橋弁慶町235 1F、四条烏丸から徒歩3分、火〜日・祝日17:00〜23:00 (料理L.O.21:30、ドリンクL.O.22:15)、月曜休み、昼10:00〜15:00は立ち飲み (日本酒・ワイン・生ビールなど)、予約可 (5名以上は電話)、原文で「サービス料 800円(一名様)」、21席、禁煙、強い香水は控えるよう案内、カード可、ソムリエ・英語対応スタッフ、子供は小学生以上、2026年1月18日オープン、食べログマガジンで紹介。口コミ (2026年1月〜11月、英語): ワインと日本酒のペアリング、おまかせコースとアラカルト、鹿のロースト、あさりの酒蒸し、カルボナーラ風ポテトサラダ、ブッラータと生ハムと洋梨、京鴨のタリアータとArima山椒、ホタテのレアカツと西京味噌タルタル、イカとKujoねぎとからすみのパスタ、Omi鴨、鮎のコンフィ、食事制限への丁寧な対応 (2026年6〜8月)、夫がワイン・妻が日本酒を担当するオーナー夫婦と明るい料理人 (2026年10月)、料理に時間がかかる (2026年10月)。',
      confidence: 'medium', sources: [TB, 'https://www.yamamitsuwa.jp'].concat(rv(R, ['B521333724', 'B524346390', 'B524798541', 'B528367304', 'B529733926', 'B537531088', 'B538157828', 'B538931841'])) },
    cultural_comfort: { level: 'some_english', note: 'English-speaking staff and a sommelier (Tabelog); ¥800 service; children from elementary age.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Reviewers report careful handling of their dietary restrictions, including half portions (June–August 2026).'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区橋弁慶町235 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 18 January 2026) with reviews dated October and November 2026.' },
    pin_source: `Tabelog ${TB} (35.006303, 135.759211); GSI lot 京都府京都市中京区橋弁慶町235番地 about 25m away; nearest pin kyoto_kyosaimi_nomura_karasuma 52m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537531088/', R + 'B529733926/'],
    price_note: 'No item prices; reviewers spent ¥10,000–19,999 with drinks (2026); ¥800 service.', last_checked: TODAY, items: [
      it('', '', 'Omakase course with pairing', null, 'Course', 'no', 'no', 'July–October 2026.', 'omakase_course'),
      it('', '', 'Carbonara-style potato salad', null, 'Antipasti', 'ask', 'no', 'October 2026.', 'carbonara_potato_salad'),
      it('', '', 'Rare scallop katsu with saikyo-miso tartare', null, 'Main', 'no', 'no', 'October 2026.', 'scallop_katsu'),
      it('', '', 'Roasted venison', null, 'Main', 'ask', 'no', 'March and August 2026.', 'venison'),
    ] }, {
    cuisine: '2026年1月オープンの、和の手法を取り入れたカウンターのイタリアン。ワインと日本酒のペアリング (食べログ、2026年の口コミ)・ペアリング付きのおまかせコース、アラカルトも (2026年)・鹿のロースト、あさりの酒蒸し、生ハム、ほたるいかとたけのこのフリット (2026年3月)・カルボナーラ風ポテトサラダ、ブッラータと生ハムと洋梨、サーモンのタルタル、京鴨のタリアータとArima山椒、ホタテのレアカツと西京味噌タルタル、イカとKujoねぎとからすみのパスタ (2026年10月)・Omi鴨、鮎のコンフィ、エンジェルシュリンプのスパゲッティ (2026年9月)・鮮魚のカルパッチョ、いちじくと生ハム、牛ステーキ (2026年10月)',
    neighborhood: '四条烏丸の北側。四条・烏丸から徒歩3分',
    gf_detail: 'グルテンフリーではない: パスタ、バゲットやフォカッチャ、エビフライ、ホタテのカツのイタリアンのコース (2026年の口コミ)。食事制限に丁寧に対応してくれたとの声あり (2026年6〜8月)、事前に相談を。',
    vegan_detail: 'ヴィーガン不可: 鹿、生ハム、パテ、鴨、牛、魚介、卵の料理 (2026年の口コミ)。',
    notes: '[イタリアン×日本酒・四条烏丸、昼は立ち飲みのカウンター] 和の要素を取り入れた新しいカウンターのイタリアン。鹿、鴨、ホタテのレアカツ、イカとからすみのパスタなどに、オーナーが選ぶワインや日本酒を合わせる。飲み物込みで10,000〜19,000円ほど、サービス料800円。昼は店先が日本酒の立ち飲み。月曜休み。',
  });
}

// ================================================================ 蔵代醗彩
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26044314/'; const R = TB + 'dtlrvwlst/';
  const H = day(['12:00', '14:30'], ['17:30', '22:00']);
  put({
    id: 'kyoto_kuradai_hassai', name: '蔵代醗彩 (Kuradai Hassai)', category: 'OMNI',
    lat: 35.010059, lng: 135.762412, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fermentation courses built on miso, koji and soy-based seasonings, with namafu dengaku, miso kara-age and a sake-lees pound cake (2026 reviews). The shop asks guests to tell it of allergies in advance; same-day requests may not be possible (Tabelog).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: courses include salmon, pork, chicken, wagyu, mackerel and ishiru fish sauce (2026 reviews), although miso, tofu and fermented vegetables feature heavily — ask.',
    hours_raw: 'Tabelog: Tue–Sat, holidays and the days before and after them 12:00–14:30 (food L.O. 13:30) and 17:30–22:00 (food L.O. 21:00); closed Sunday and Monday (also Tuesday after a three-day weekend; varies at New Year and Obon). Reservation only (TableCheck per an April 2026 review). Tell the shop of allergies in advance. Cards, IC and e-money. 18 seats: counter, tables and private rooms for 4 or 6 (¥2,000 room fee). Non-smoking. Smart casual. Children of school age who eat the adult menu. English, Chinese and Korean menus. A renovated townhouse 5 min from Karasuma-Oike. Opened 25 February 2026.',
    hours: { 1: H, 2: H, 3: H, 4: H, 5: H }, hours_status: 'by_reservation',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Oike, east side — 5 min walk from Karasuma-Oike',
    cuisine: 'A fermentation-cuisine restaurant in a renovated townhouse, run by the miso business behind 蔵代味噌: courses built on miso, koji, sake lees and fermented vegetables (Tabelog; 2026 reviews) · fermented shokado box ¥4,180 at lunch with clay-pot rice and two house miso soups (April 2026) · dinner course: four-miso soup, fermented udo with apple pickles, pâté with fermented napa cabbage, sake-lees mackerel, wagyu with Hatcho-miso sauce, clay-pot rice (April 2026) · white-miso soup, Tango clams with vinegar miso, miso-marinated tofu, two-colour namafu dengaku, miso kara-age of Tanba chicken, gindara saikyo-yaki, perilla-miso rice ball, sweet-potato ice cream (September 2026)',
    website: null, gmaps: gm('蔵代醗彩 烏丸御池'), menu_url: TB + 'dtlmenu/',
    notes: '[Fermentation cuisine · Karasuma-Oike, a miso maker\'s townhouse dining room] A new restaurant from the miso shop 蔵代味噌 where every course runs on fermentation — house miso soups, koji-cured fish, Hatcho-miso wagyu, clay-pot rice — at about ¥4,000 for lunch and ¥10,000+ at dinner. Reservation only; tell them of allergies ahead. Closed Sunday and Monday.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)', 'Operator: the miso wholesaler behind 蔵代味噌'], origin: null,
      background: 'Opened 25 February 2026 (Tabelog). An April 2026 reviewer writes that it is a fermentation restaurant run by a long-established miso wholesaler, "Japanix" (romaji as given), and a September 2026 reviewer links it to Kuradai Miso, the bulk miso shop near Nishiki Market. A June 2026 reviewer says one person cooks. Criticism: pricey for the portion and water only on request (October 2026); a limited lunch menu (June 2026).',
      philosophy: 'Fermentation knowledge — koji, miso, amazake — to nourish body and mind (April 2026 review).',
      specialty: 'Fermentation courses; house miso soups; clay-pot rice.',
      anecdotes: [
        { text: 'April 2026: "This is a fermentation cuisine restaurant run by a long-established miso wholesaler… The variety of fermented ingredients is impressive, including the unique fermented udo!"', source: R + 'B526948049/' },
        { text: 'September 2026: "I used to visit Kuradai Miso, a bulk miso shop near Nishiki Market, whenever I went to Kyoto… When I heard that Kuradai Hassai opened as a restaurant in February 2026, I decided to visit."', source: R + 'B536204766/' },
      ],
      japanese_sources_summary: '食べログ: 蔵代醗彩、日本料理・創作料理、中京区亀甲屋町608-1、烏丸御池駅から徒歩5分、火〜土・祝日・祝日の前日と翌日12:00〜14:30 (料理L.O.13:30)・17:30〜22:00 (料理L.O.21:00)、日・月曜休み (三連休明けは火曜も)、完全予約制、アレルギーは事前に連絡を (当日は対応できない場合あり)、カード・交通系IC・電子マネー可、18席、個室 (4・6名、2,000円)、禁煙、スマートカジュアル、子供は大人と同じ料理が食べられる小学生以上、英語・中国語・韓国語メニュー、2026年2月25日オープン。口コミ (2026年3月〜10月、英語): 蔵代味噌の発酵料理店、町家を改装、発酵松花堂4,180円 (土鍋ご飯と2種の味噌汁、2026年4月)、4種の味噌の味噌汁、発酵うど、発酵白菜のパテ、酒粕の鯖、Hatcho味噌ソースの和牛、白味噌汁、Tangoの貝の酢味噌、生麩田楽、Tanba鶏の味噌唐揚げ、銀だらの西京焼き、しそ味噌のおにぎり、さつまいものアイス (2026年9月)、料理人は一人 (2026年6月)、量の割に高め・水は頼まないと出ないとの声 (2026年10月)。',
      confidence: 'medium', sources: [TB].concat(rv(R, ['B524212556', 'B526418100', 'B526948049', 'B530137878', 'B536204766', 'B536754649'])) },
    cultural_comfort: { level: 'some_english', note: 'English, Chinese and Korean menus (Tabelog); reservation only; smart casual.' },
    safety: { ...SAFETY0, staff_allergy_handling: ['Tabelog: tell the shop of allergies in advance; same-day requests may not be possible.'] },
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区亀甲屋町608-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 25 February 2026) with reviews dated September and October 2026.' },
    pin_source: `Tabelog ${TB} (35.010059, 135.762412); GSI lot 京都府京都市中京区亀甲屋町608番地 about 43m away; nearest pin kyoto_matsunosuke_honten 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B526418100/'],
    price_note: 'Lunch box price from an April 2026 review; reviewers spent ¥4,000–14,999.', last_checked: TODAY, items: [
      it('', '', 'Fermented shokado box (lunch, with clay-pot rice and two miso soups)', '¥4,180', 'Set', 'no', 'no', 'April 2026.', 'hakko_shokado'),
      it('', '', 'Fermentation dinner course', null, 'Course', 'no', 'no', 'April and September 2026.', 'hakko_course'),
    ] }, {
    cuisine: '町家を改装した、蔵代味噌の味噌の会社による発酵料理の店。味噌、麹、酒粕、発酵野菜のコース (食べログ、2026年の口コミ)・土鍋ご飯と2種の自家の味噌汁付きの発酵松花堂4,180円 (2026年4月の昼)・夜のコース: 4種の味噌の味噌汁、発酵うどとりんごの漬物、発酵白菜のパテ、酒粕の鯖、Hatcho味噌ソースの和牛、土鍋ご飯 (2026年4月)・白味噌汁、Tangoの貝の酢味噌、豆腐の味噌漬け、2色の生麩田楽、Tanba鶏の味噌唐揚げ、銀だらの西京焼き、しそ味噌のおにぎり、さつまいものアイス (2026年9月)',
    neighborhood: '烏丸御池の東。烏丸御池から徒歩5分',
    gf_detail: 'グルテンフリーではない: 味噌・麹・しょうゆベースの調味料を使った発酵のコースに、生麩田楽、味噌唐揚げ、酒粕のパウンドケーキ (2026年の口コミ)。アレルギーは事前に連絡を、当日は対応できない場合あり (食べログ)。',
    vegan_detail: 'ヴィーガン不可: 鮭、豚、鶏、和牛、鯖、いしるのコース (2026年の口コミ)。味噌、豆腐、発酵野菜が多いので要相談。',
    notes: '[発酵料理・烏丸御池、味噌屋の町家のダイニング] 蔵代味噌が始めた新しい店で、どのコースも発酵が主役。自家の味噌汁、麹漬けの魚、Hatcho味噌の和牛、土鍋ご飯。昼は4,000円ほど、夜は10,000円以上。完全予約制、アレルギーは事前に。日・月曜休み。',
  });
}

// ================================================================ ナマステ ダウラギリ 東山安井店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26027028/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '22:00']);
  put({
    id: 'kyoto_namaste_dhaulagiri_yasui', name: 'ナマステ ダウラギリ 東山安井店 (Namaste Dhaulagiri)', category: 'OMNI',
    lat: 34.998479, lng: 135.777298, cuisine_type: 'curry',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: Indian and Nepali curries with naan (including cheese and sweet red-bean naan), momo dumplings and samosa (2017–2026 reviews). Rice dishes (jeera rice, biryani, dal bhat) exist — ask about the curries.',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask: Tabelog marks vegetarian options and the shop is particular about vegetables; pumpkin and spinach daily curries, chana masala, vegetable biryani and dal bhat appear in reviews (2018–2026), but ghee, cream and yogurt sauces were not described.',
    hours_raw: 'Tabelog: daily 11:00–22:00; closed on irregular days. Reservations taken. Cards. 46 seats; private hire for parties of 20–35. Non-smoking. Take-out. Kids\' menu (Tabelog). Coin-parking cash-back ¥100 at lunch, ¥200 at dinner (Tabelog). 1 min south of the Higashiyama-Yasui crossing, past Yasaka-dori; 2 min from the Higashiyama-Yasui bus stop. Opened 27 December 2015. One of at least two ナマステダウラギリ shops (another by Iwashimizu-Hachimangu Station, Yawata — retty.me).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashiyama-Yasui, just south of the crossing — 2 min from the Higashiyama-Yasui bus stop',
    cuisine: 'An Indian and Nepali restaurant a short walk from Yasaka Shrine (Tabelog; 2017–2026 reviews) · daily lunch special ¥850 with a soft drink (Tabelog) · B set: salad, soup, chicken, rice, naan, two curries, drink ¥1,000 (January 2020) · Nepali dal bhat ¥1,590; special lunch ¥1,950 (October 2026) · all-you-can-eat-and-drink course ¥3,700; dinner courses from ¥1,390 (Tabelog) · momo in a sour broth; mutton biryani (November 2022) · vegetable biryani with yogurt sauce; chicken soup (September 2025) · kadai chicken, chana masala, jeera rice (December 2018) · cheese naan; sweet red-bean naan',
    website: null, gmaps: gm('ナマステ ダウラギリ 東山安井'), menu_url: TB + 'dtlmenu/',
    notes: '[Indian & Nepali · Higashiyama-Yasui near Yasaka Shrine, a curry house for sightseers] A roomy curry house a minute from the Higashiyama-Yasui crossing, with good-value lunch sets from ¥850, Nepali dal bhat and momo, biryani and cheese naan, and an all-you-can-eat-and-drink option. Vegetarian choices. Open daily 11:00–22:00.',
    chef_bio: { chef_name: null, roles: ['Manager and staff (unnamed)'], origin: null,
      background: 'Opened 27 December 2015 (Tabelog). Reviewers describe a friendly manager (2017), the smell of incense, North Indian curries and Nepali dishes, and many overseas guests (2024). Criticism: a salty chicken curry and soup in a children\'s plastic cup (January 2020); mild, similar curries in the special lunch and a cramped toilet (October 2026).',
      philosophy: null,
      specialty: 'Lunch curry sets; momo; dal bhat.',
      anecdotes: [
        { text: 'November 2022: "This chicken momo appears in the form of dumplings floating in a tangy broth… Moreover… they were delicious!"', source: R + 'B456562393/' },
        { text: 'September 2025: "This was my first experience with biryani, and it came with a yogurt-based sauce for a flavor twist. It was delicious and not spicy at all."', source: R + 'B514530800/' },
      ],
      japanese_sources_summary: '食べログ: ナマステ ダウラギリ 東山安井店、インド料理・カフェ・居酒屋、東山区玉水町80-2、市バス東山安井から徒歩2分、東山安井交差点から南へ1分 (八坂通の先)、毎日11:00〜22:00、不定休、予約可、カード可、46席、貸切20〜35名、禁煙、テイクアウト、キッズメニュー、野菜にこだわり・ベジタリアンメニューあり、日替わりランチ850円 (ソフトドリンク付き)、ディナーコース1,390円〜、食べ飲み放題3,700円、近くのコインパーキング代を昼100円・夜200円キャッシュバック、2015年12月27日オープン。口コミ (2017年8月〜2026年10月、英語): Bセット1,000円 (2020年1月)、ネパールのダルバート1,590円、スペシャルランチ1,950円 (2026年10月)、スープのモモ、マトンビリヤニ (2022年11月)、野菜ビリヤニとヨーグルトソース (2025年9月)、カダイチキン、チャナマサラ、ジーラライス (2018年12月)、チーズナン、あんこのナン、海外の客が多い、カレーがしょっぱいとの声 (2020年1月)、トイレが狭いとの声 (2026年10月)。別店舗に八幡店 (石清水八幡宮駅前)。',
      confidence: 'medium', sources: [TB, 'https://retty.me/restaurant/100001646201/'].concat(rv(R, ['B287578329', 'B410504943', 'B423644463', 'B456562393', 'B480577756', 'B486529927', 'B496975248', 'B504366115', 'B514530800', 'B537173551', 'B538117890'])) },
    cultural_comfort: { level: 'some_english', note: 'Popular with overseas guests (2024); vegetarian options (Tabelog).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区玉水町80-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing with reviews dated September 2025 and October 2026.' },
    pin_source: `Tabelog ${TB} (34.998479, 135.777298); GSI lot 京都府京都市東山区玉水町80番地 about 7m away; nearest pin ChIJLZQlrT8JAWARcV617yAXn0o 75m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B537173551/'],
    price_note: 'Lunch and course prices from Tabelog; set prices from October 2026.', last_checked: TODAY, items: [
      it('', '', 'Daily lunch special (with soft drink)', '¥850', 'Lunch', 'no', 'ask', 'Tabelog listing.', 'daily_lunch'),
      it('', '', 'Nepali dal bhat', '¥1,590', 'Set', 'ask', 'ask', 'October 2026.', 'dal_bhat'),
      it('', '', 'All-you-can-eat-and-drink course', '¥3,700', 'Course', 'no', 'no', 'Tabelog listing.', 'tabehodai'),
      it('', '', 'Chicken momo in sour broth', null, 'Dumplings', 'no', 'no', 'November 2022.', 'momo'),
    ] }, {
    cuisine: '八坂神社から歩いてすぐのインド・ネパール料理店 (食べログ、2017〜2026年の口コミ)・ソフトドリンク付きの日替わりランチ850円 (食べログ)・サラダ、スープ、チキン、ライス、ナン、カレー2種、ドリンクのBセット1,000円 (2020年1月)・ネパールのダルバート1,590円、スペシャルランチ1,950円 (2026年10月)・食べ飲み放題3,700円、ディナーコース1,390円〜 (食べログ)・酸味のあるスープのモモ、マトンビリヤニ (2022年11月)・野菜ビリヤニとヨーグルトソース、チキンスープ (2025年9月)・カダイチキン、チャナマサラ、ジーラライス (2018年12月)・チーズナン、あんこのナン',
    neighborhood: '東山安井の交差点のすぐ南。東山安井バス停から徒歩2分',
    gf_detail: 'グルテンフリーではない: ナン (チーズナン、あんこのナンも)、モモ、サモサとインド・ネパールのカレー (2017〜2026年の口コミ)。ジーラライス、ビリヤニ、ダルバートなど米の料理もあり、カレーは要確認。',
    vegan_detail: '要確認: 食べログにベジタリアンメニューあり・野菜にこだわり。かぼちゃやほうれん草の日替わりカレー、チャナマサラ、野菜ビリヤニ、ダルバートが口コミに出る (2018〜2026年) が、ギー、クリーム、ヨーグルトのソースの説明はなし。',
    notes: '[インド・ネパール料理・八坂神社近くの東山安井、観光客にうれしいカレーの店] 東山安井の交差点から1分の広いカレー店。850円からのお得なランチセット、ネパールのダルバートやモモ、ビリヤニ、チーズナン、食べ飲み放題も。ベジタリアンメニューあり。毎日11時〜22時。',
  });
}

// ================================================================ はんと HUNTO
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26042784/'; const R = TB + 'dtlrvwlst/';
  const H = day(['11:00', '20:00']);
  put({
    id: 'kyoto_hunto_standing_bar', name: 'はんと HUNTO', category: 'OMNI',
    lat: 35.000834, lng: 135.778894, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wagyu "meat dogs" and fruit dogs in buns, shrimp-bread skewers, butter sandwiches, cheese balls and fries (2025 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: wagyu and Omi-beef skewers, beef jerky, shrimp and cheese dishes. The fruit sodas, smoked nuts and strawberry tasting are plant-based (2025 reviews) — ask about the rest.',
    hours_raw: 'Tabelog: daily 11:00–20:00 (2025 reviewers give a 10:00 opening); hours and closures may change. No reservations. Order and pay at the register (April 2025). Cards, IC, e-money and QR. 16 standing places, with chairs when free; parties up to 20. Non-smoking. Take-out. On Shimogawara-dori south of Yasaka Shrine\'s south gate, about 4 min walk from the shrine; a wine stand, SUMI, with a wine vending machine at the back (May 2025). Opened 3 April 2025.',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Shimogawara-dori south of Yasaka Shrine — 4 min walk from the shrine',
    cuisine: 'A stylish standing bar and take-out stand for sightseers, with a menu supervised by a chef from a Michelin-listed Japanese restaurant (Tabelog; 2025 reviews) · meat dog of wagyu with original sauce and Sichuan-pepper dukkah ¥1,350; fruit dog of seasonal berries ¥900; hand-cut Inca-no-Mezame fries with sakura shrimp ¥550; fruit sodas and sours ¥800–850 (April 2025) · wagyu and Omi-beef skewers over charcoal; shrimp-bread skewer; cheese balls; strawberry tasting of four varieties (March–April 2025) · Kobe Takami beef jerky ¥500; smoked nuts (April 2025) · draft beer ¥600; Japanese whisky; Kyoto sake',
    website: null, gmaps: gm('HUNTO はんと 下河原'), menu_url: TB + 'dtlmenu/',
    notes: '[Standing bar & take-out · Shimogawara near Yasaka Shrine, wagyu dogs and fruit sodas] A sleek concrete standing bar on Shimogawara-dori serving charcoal-grilled wagyu skewers, wagyu hot dogs, berry "fruit dogs" and bright fruit sodas or sours, from late morning, to eat in or carry along the sightseeing route. Most items ¥500–1,350. Open daily.',
    chef_bio: { chef_name: null, roles: ['Owner (unnamed; menu supervised by a chef from a Michelin-listed Japanese restaurant)'], origin: null,
      background: 'Opened 3 April 2025 (Tabelog; two March 2025 reviews come from the pre-opening reception). Reviewers write that the owner, or the supervising chef, has experience at a Michelin-starred Kyoto restaurant; the restaurant is not named. Reviewers describe friendly staff and many overseas visitors. Criticism: an April 2025 reviewer found it aimed at inbound tourists and a skewer overpriced at ¥900. No review since July 2025.',
      philosophy: null,
      specialty: 'Wagyu dogs and skewers; seasonal fruit sodas.',
      anecdotes: [
        { text: 'April 2025: "This luxurious standing bar allows you to enjoy authentic Wagyu beef and a selection of cocktails and other alcoholic beverages!"', source: R + 'B505352802/' },
        { text: 'April 2025: "After ordering and paying at the register, they bring it to your seat. Most of the customers around me were foreigners. It seems to be a place aimed at inbound tourists."', source: R + 'B505311998/' },
      ],
      japanese_sources_summary: '食べログ: はんと HUNTO、立ち飲み・バル・ジューススタンド、東山区下河原町487、京阪祇園四条駅から徒歩10分、毎日11:00〜20:00 (2025年の口コミでは10時開店)、予約不可、カード・交通系IC・電子マネー・QR可、立ち席16、立食20名まで、禁煙、テイクアウト、本格和牛と京都の地酒を気軽に楽しむ立ち飲み、自家製ソースとスパイスの「和牛ドッグ」、季節の果物のサワーとソーダ。口コミ (2025年3月〜7月、英語、うち2件はレセプション): ミシュラン掲載の日本料理店出身の料理人の監修、和牛のミートドッグ1,350円、フルーツドッグ900円、インカのめざめの手切りポテト550円、フルーツソーダ800〜850円、和牛とOmi牛の串、エビパン串、チーズボール、いちご4種の食べ比べ、Kobe Takami牛のビーフジャーキー500円、燻製ナッツ、生ビール600円、奥にワインスタンド「SUMI」、インバウンド向けとの声 (2025年4月)、2025年4月3日オープン。',
      confidence: 'low', sources: [TB].concat(rv(R, ['B504194767', 'B504230041', 'B504431300', 'B505167675', 'B505311998', 'B505352802', 'B505934890', 'B510352103', 'B510954692', 'B513497610'])) },
    cultural_comfort: { level: 'some_english', note: 'Order and pay at the counter; many overseas visitors (2025).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区下河原町487',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing (opened 3 April 2025) with reviews to July 2025; no review since then.' },
    pin_source: `Tabelog ${TB} (35.000834, 135.778894); GSI lot 京都府京都市東山区下河原町487番地 about 34m away; nearest pin kyoto_sherry_club_ishibekoji 13m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B505352802/', R + 'B504431300/'],
    price_note: 'Prices from April 2025 reviews.', last_checked: TODAY, items: [
      it('', '', 'Meat dog (wagyu, Sichuan-pepper dukkah)', '¥1,350', 'Food', 'no', 'no', 'April–May 2025.', 'meat_dog'),
      it('', '', 'Fruit dog (seasonal berries)', '¥900', 'Sweets', 'no', 'ask', 'April 2025.', 'fruit_dog'),
      it('', '', 'Hand-cut potatoes with sakura shrimp', '¥550', 'Snack', 'ask', 'no', 'April 2025.', 'hand_cut_potatoes'),
      it('', '', 'Seasonal fruit soda or sour', '¥800–850', 'Drink', 'ask', 'ask', 'April 2025.', 'fruit_soda'),
    ] }, {
    cuisine: 'ミシュラン掲載の日本料理店出身の料理人が監修する、観光客向けのおしゃれな立ち飲みとテイクアウト (食べログ、2025年の口コミ)・和牛とオリジナルソースと花椒デュカのミートドッグ1,350円、季節のベリーのフルーツドッグ900円、インカのめざめの手切りポテトと桜えび550円、フルーツソーダ・サワー800〜850円 (2025年4月)・炭火の和牛とOmi牛の串、エビパン串、チーズボール、いちご4種の食べ比べ (2025年3〜4月)・Kobe Takami牛のビーフジャーキー500円、燻製ナッツ (2025年4月)・生ビール600円、ジャパニーズウイスキー、京都の地酒',
    neighborhood: '八坂神社の南の下河原通。神社から徒歩4分',
    gf_detail: 'グルテンフリーではない: パンの和牛ミートドッグとフルーツドッグ、エビパン串、バターサンド、チーズボール、ポテト (2025年の口コミ)。',
    vegan_detail: 'ヴィーガン不可: 和牛とOmi牛の串、ビーフジャーキー、エビやチーズの料理。フルーツソーダ、燻製ナッツ、いちごの食べ比べは植物性 (2025年の口コミ)、ほかは要確認。',
    notes: '[立ち飲みとテイクアウト・八坂神社近くの下河原、和牛ドッグとフルーツソーダ] 下河原通のコンクリート打ちっぱなしのおしゃれな立ち飲み。炭火の和牛串、和牛のホットドッグ、ベリーの「フルーツドッグ」、色鮮やかなフルーツソーダやサワーを、店内でも観光の道中でも。ほとんど500〜1,350円。毎日営業。',
  });
}

save();
