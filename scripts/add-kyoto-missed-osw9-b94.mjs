// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 94.
// Rest list in the lane, nearest-first from Shijo-Kawaramachi (queue.mjs ... next rest 2000):
//   - 錦小路新町 三徳六味 — chain: 三徳六味, six shops (sister shops 26035503 and 26037733 already skipped)
//   + 和しょく 志喜 Washoku Shiki (a twelve-seat Japanese counter off Oshikoji-Takakura)
//   - Maison de Murakami — retail food shop (Greg 11-07 ruling): a take-out shop for cookie tins and baked goods beside
//     Murakami Kaishindo, opened June 2026; no seating listed, no sourced GF or vegan options
//   + loose kyoto (doughnut and coffee stand on the slope to Kiyomizu, bench seats inside)
//   - 炭焼野菜と焼鳥つじや 四条烏丸西店 — chain: つじや, over a dozen shops in Kyoto (already ruled a chain, 26020272 and 26025219)
//   + LOVE ARK (Italian pasta and pizza near Karasuma-Oike)
//   + おうどん一 Oudon Hajime (udon near Gojo with all-day service; since June 2025)
//   + ツキトカゲ Tsukitokage (the yakitori main shop of ツキトカゲ near Tomikoji-Nijo; since 2013) — a different concept from the
//     ツキトカゲ tempura izakaya already in data (kyoto_tsukitokage_shinmachi), so drafted as a sister concept
//   Brand checks: none of 志喜, loose, LOVE ARK or おうどん一 is in data or queue-status by name; loose belongs to a group that runs
//   several cafés in Kyoto (October 2026 review) — not counted as a chain on that evidence. None is a THAN or WILL brand; none is
//   in a hotel.
//   Service charges from Tabelog's Japanese original: 志喜 「チャージ料なし」; the others have no section.
//   Pins (checked against main, hidden records included): all five ≥ 8.5m from every record; no offsets.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-08';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-94');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

skip('26042285', 'chain: 三徳六味, six shops (四条烏丸, 錦小路新町, 五条高倉, an ESTフードホール stand, two in Fukushima; sister shops 26035503 and 26037733 already skipped)');
skip('26045189', 'retail food shop (Greg 11-07 ruling): Maison de Murakami is a take-out shop for cookie tins and baked goods beside Murakami Kaishindo, opened 5 June 2026; no seating listed, no sourced GF or vegan options');
skip('26045165', 'chain: つじや, over a dozen shops in Kyoto (already ruled a chain at 26020272 and 26025219)');

// ================================================================ 和しょく 志喜
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26023283/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'http://www.shikikyoto.com';
  const D = day(['17:30', '22:00']);
  put({
    id: 'kyoto_washoku_shiki_oshikoji', name: '和しょく 志喜 (Washoku Shiki)', category: 'OMNI',
    lat: 35.012178, lng: 135.761884, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Japanese a la carte with sashimi, grilled fish and steamed dishes (2024–26 reviews); soy and dashi are likely.',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: sashimi, grilled fish, hairy crab, karasumi (2024–26 reviews).',
    hours_raw: 'Tue–Sun 17:30–22:00; closed Mondays and some Sundays (Tabelog). No cover charge (Tabelog Japanese original 「チャージ料なし」). Cards and PayPay; no e-money (Tabelog). 12 seats: 6 at the counter and a raised room for up to 6 (Tabelog; August 2024 review). Prices not listed on the menu (March 2026 review). Off Oshikoji west of Takakura, 5 min from Karasuma-Oike exit 1 (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Oshikoji-Takakura — 5 min from Karasuma-Oike Stn',
    cuisine: 'Japanese counter cooking with sake: appetizers, sashimi served on individual plates, portions sized to the party (March 2026); hairy crab, marbled tuna, sake-steamed ayu, fresh wakame (July 2026, about ¥10,000 a head); expertly grilled fish and homemade karasumi mochi (August 2024); about ¥8,000–15,000',
    website: WEB, gmaps: gm('和しょく 志喜 押小路'), menu_url: null,
    notes: '[Washoku · Karasuma-Oike] A calm twelve-seat counter near Karasuma-Oike for seasonal Japanese cooking with a wide drinks list: individual sashimi plates, superb grilled fish, homemade karasumi mochi and hairy crab in season. About ¥8,000–15,000; no prices on the menu.',
    chef_bio: { chef_name: null, roles: ['Chef (unnamed)'], origin: null,
      background: 'A small counter and one raised room; dishes are portioned to the size of the party (March 2026 review).',
      philosophy: null,
      specialty: 'Grilled fish; karasumi mochi.',
      anecdotes: [
        { text: 'A March 2026 diner liked the individually plated sashimi but, with no prices on the menu, ordered more than meant to.', source: R + 'B524087746/' },
        { text: 'A July 2026 guest had hairy crab, marbled tuna and sake-steamed ayu for about ¥10,000 a head.', source: R + 'B531386653/' },
      ],
      japanese_sources_summary: '食べログ: 和しょく 志喜、日本料理、中京区、押小路高倉、地下鉄烏丸御池駅1番出口から東へ徒歩5分、火〜日 17:30〜22:00、月曜と一部の日曜休み、チャージ料なし、カード・PayPay 可、電子マネー不可、12席 (カウンター6、小上がり)。口コミ (2024〜2026年、英語): ひとりずつの刺身、人数に合わせた量、毛蟹、マグロ、鮎の酒蒸し、焼き魚、自家製のからすみ餅、メニューに値段なし。',
      confidence: 'medium', sources: [TB, WEB, R + 'B484096681/', R + 'B492660911/', R + 'B524087746/', R + 'B531386653/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'No prices on the menu; ask (March 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区押小路通高倉西入ル左京町137',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through July 2026.' },
    pin_source: `Tabelog ${TB} (35.012178, 135.761884); cross-checked: GSI 京都府京都市中京区左京町137番地 (lot) 17m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B531386653/'],
    price_note: 'No menu prices; a July 2026 review gives about ¥10,000 a head.', last_checked: TODAY, items: [
      it('', '', 'Grilled fish', '', 'A la carte', 'ask', 'no', 'August 2024 review.', 'yakizakana'),
      it('', '', 'Homemade karasumi mochi', '', 'A la carte', 'no', 'no', 'August 2024 review.', 'karasumi_mochi'),
    ] }, {
    cuisine: '日本酒と和食のカウンター: 先付、一人ずつ盛る刺身、人数に合わせた量 (2026年3月)、毛蟹、霜降りのマグロ、鮎の酒蒸し、生わかめ (2026年7月、ひとり1万円ほど)、絶品の焼き魚と自家製のからすみ餅 (2024年8月)、8,000〜15,000円ほど',
    neighborhood: '押小路高倉。烏丸御池駅から徒歩5分',
    gf_detail: '要確認。刺身、焼き魚、蒸し物のアラカルトの和食 (2024〜26年の口コミ)。醤油と出汁を使う可能性が高い。',
    vegan_detail: 'ヴィーガン不可。刺身、焼き魚、毛蟹、からすみ (2024〜26年の口コミ)。',
    notes: '[和食・烏丸御池] 烏丸御池の近くの落ち着いた12席のカウンター。季節の和食と豊富な飲み物。一人ずつの刺身、絶品の焼き魚、自家製のからすみ餅、季節の毛蟹。8,000〜15,000円ほど、メニューに値段なし。',
  });
}

// ================================================================ loose kyoto
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260301/26034749/'; const R = TB + 'dtlrvwlst/';
  const D = day(['09:00', '18:00']);
  put({
    id: 'kyoto_loose_kyoto_kiyomizu', name: 'ルース キョウト (loose kyoto)', category: 'OMNI',
    lat: 34.997063, lng: 135.779023, cuisine_type: 'cafe',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat-flour doughnuts, some of whole wheat (August 2026 review).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Doughnuts fried in rice oil (February 2026 review); cream fillings and lattes are dairy.',
    hours_raw: 'Daily 9:00–18:00; irregular closures; hours may change (Tabelog). Order and pay first; bench seating along the wall inside; takeaway (Tabelog; October 2026 reviews). E-money (QUICPay) and PayPay; no cards (Tabelog). On the slope to Kiyomizu, 5 min from the Kiyomizu-michi bus stop (Tabelog; January 2026 review).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyomizu slope — 5 min from Kiyomizu-michi bus stop',
    cuisine: 'Doughnuts and coffee: about eight kinds in the case — chocolate and custard-cream doughnuts ¥380 (January 2026), cinnamon (August 2026), hojicha cream ¥480, glazed French cruller, plain and matcha cream (October 2026), crisp outside and chiffon-soft inside, fried in rice oil (February 2026); coffee, tea, lattes such as a hojicha latte ¥700, strawberry milk and juices (October 2026); under ¥1,500',
    website: null, gmaps: gm('loose kyoto 清水'), menu_url: null,
    notes: '[Doughnuts & coffee · Kiyomizu] A small doughnut and coffee stand on the climb to Kiyomizu, from a group with several Kyoto cafés: crisp-shelled, light doughnuts fried in rice oil, hojicha cream and lattes, with a bench to sit on. Under ¥1,500.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Part of a group that runs several stylish cafés in Kyoto (October 2026 review).',
      philosophy: null,
      specialty: 'Rice-oil doughnuts.',
      anecdotes: [
        { text: 'A New Year 2026 visitor on the way to Kiyomizu bought delicate doughnuts from "tough-looking guys" behind the counter.', source: R + 'B520165847/' },
        { text: 'A February 2026 fan came back after two years for doughnuts crisp outside and soft as chiffon cake inside.', source: R + 'B522498853/' },
      ],
      japanese_sources_summary: '食べログ: ルース キョウト、コーヒースタンド、東山区清水4-163-6、清水坂のバス停から徒歩5分、毎日 9:00〜18:00、不定休、QUICPay・PayPay 可、カード不可、ベンチの席のみ。口コミ (2025〜2026年、英語): 清水寺への坂のドーナツの店、チョコと カスタードのドーナツ380円、ほうじ茶クリーム480円、ほうじ茶ラテ700円、米油で揚げる、外はカリッと中はシフォンのよう、京都でカフェを営むグループの店。',
      confidence: 'medium', sources: [TB, R + 'B520165847/', R + 'B522498853/', R + 'B530071868/', R + 'B537620646/', R + 'B537971239/', R + 'B538037030/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order and pay first; bench seats (October 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市東山区清水4-163-6',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.997063, 135.779023); cross-checked: GSI 京都府京都市東山区清水四丁目163番地 (lot) 61m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B520165847/', R + 'B537971239/'],
    price_note: 'Prices from January and October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Chocolate or custard-cream doughnut', '¥380', 'Doughnuts', 'no', 'no', 'January 2026 review.', 'doughnut'),
      it('', '', 'Hojicha cream doughnut', '¥480', 'Doughnuts', 'no', 'no', 'October 2026 review.', 'hojicha_doughnut'),
      it('', '', 'Hojicha latte', '¥700', 'Drinks', 'ask', 'no', 'October 2026 review.', 'hojicha_latte'),
    ] }, {
    cuisine: 'ドーナツとコーヒー: ケースに約8種、チョコとカスタードクリームのドーナツ380円 (2026年1月)、シナモン (2026年8月)、ほうじ茶クリーム480円、グレーズのフレンチクルーラー、プレーンと抹茶クリーム (2026年10月)、外はカリッと中はシフォンのようで米油で揚げる (2026年2月)、コーヒー、紅茶、ほうじ茶ラテ700円などのラテ、いちごミルク、ジュース (2026年10月)、1,500円以内',
    neighborhood: '清水寺への坂。清水道のバス停から徒歩5分',
    gf_detail: 'グルテンフリー不可。小麦のドーナツ、全粒粉のものも (2026年8月の口コミ)。',
    vegan_detail: '要確認。ドーナツは米油で揚げる (2026年2月の口コミ)。クリームとラテは乳製品。',
    notes: '[ドーナツとコーヒー・清水] 清水寺への坂の小さなドーナツとコーヒーの店。京都でカフェを営むグループの店で、米油で揚げる外はカリッと軽いドーナツ、ほうじ茶クリームとラテ、座れるベンチも。1,500円以内。',
  });
}

// ================================================================ LOVE ARK
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26040209/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:30', '15:00'], ['18:00', '21:30']);
  put({
    id: 'kyoto_love_ark_karasuma_oike', name: 'LOVE ARK', category: 'OMNI',
    lat: 35.009792, lng: 135.758607, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fresh pasta, pizza and risotto courses (2025 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Mostly cream, cheese, seafood and meat pastas (2025 reviews).',
    hours_raw: 'Mon–Sat 11:30–15:00 and 18:00–21:30; closed Sundays; hours may change (Tabelog). Cards, e-money and QR (Tabelog). 30 seats: 10 at the counter and 20 at tables (Tabelog). 4 min from Karasuma-Oike (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Karasuma-Oike, west side — 4 min from the station',
    cuisine: 'Italian pasta and pizza: lunch sets with salad, such as smoked salmon and scallop cream fresh fettuccine ¥1,500 (November 2025) and Gorgonzola peperoncino (November 2025); dinner courses of an appetizer platter, two pastas and risotto (September 2025); generous portions; about ¥1,500 at lunch',
    website: null, gmaps: gm('LOVE ARK 烏丸御池'), menu_url: null,
    notes: '[Italian · Karasuma-Oike] A simple, friendly Italian by Karasuma-Oike for generous fresh pasta — salmon and scallop cream fettuccine at a ¥1,500 lunch, Gorgonzola peperoncino — and pasta-and-risotto dinner courses.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'An Italian with a 10-seat counter facing the kitchen (Tabelog; November 2025 review).',
      philosophy: null,
      specialty: 'Fresh fettuccine in cream sauce.',
      anecdotes: [
        { text: 'A November 2025 diner drawn in by the plain front was won over by the kitchen smell and a salmon and scallop cream fettuccine.', source: R + 'B517256362/' },
        { text: 'Another November 2025 guest ordered the curiously named "Gorgonzola peperoncino" and found it rich and garlicky.', source: R + 'B517496112/' },
      ],
      japanese_sources_summary: '食べログ: LOVE ARK、イタリアン・パスタ・ピザ、中京区、烏丸御池の西、地下鉄烏丸御池駅から徒歩4分、月〜土 11:30〜15:00・18:00〜21:30、日曜休み、カード・電子マネー・QR 可、30席 (カウンター10、テーブル20)。口コミ (2025年、英語): スモークサーモンとホタテのクリームの生パスタのランチ1,500円、ゴルゴンゾーラのペペロンチーノ、前菜の盛り合わせ、パスタ2種、リゾットのコース、量が多い。',
      confidence: 'medium', sources: [TB, R + 'B509615523/', R + 'B514372551/', R + 'B517256362/', R + 'B517496112/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Casual lunch sets.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区柿本町408-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2025.' },
    pin_source: `Tabelog ${TB} (35.009792, 135.758607); cross-checked: GSI 京都府京都市中京区柿本町408番地 (lot) 54m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B517256362/'],
    price_note: 'Lunch price from a November 2025 review.', last_checked: TODAY, items: [
      it('', '', 'Smoked salmon and scallop cream fresh fettuccine (lunch set)', '¥1,500', 'Lunch', 'no', 'no', 'November 2025 review.', 'fettuccine'),
      it('', '', 'Gorgonzola peperoncino', '', 'Pasta', 'no', 'no', 'November 2025 review.', 'gorgonzola'),
    ] }, {
    cuisine: 'イタリアンのパスタとピザ: サラダつきのランチ、スモークサーモンとホタテのクリームの生フェットチーネ1,500円 (2025年11月)、ゴルゴンゾーラのペペロンチーノ (2025年11月)、前菜の盛り合わせ、パスタ2種、リゾットの夜のコース (2025年9月)、量が多い、昼は1,500円ほど',
    neighborhood: '烏丸御池の西。駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。生パスタ、ピザ、リゾットのコース (2025年の口コミ)。',
    vegan_detail: '要確認。クリーム、チーズ、魚介、肉のパスタが中心 (2025年の口コミ)。',
    notes: '[イタリアン・烏丸御池] 烏丸御池の近くの気取らないイタリアン。量の多い生パスタ、1,500円のランチのサーモンとホタテのクリームのフェットチーネ、ゴルゴンゾーラのペペロンチーノ、パスタとリゾットの夜のコース。',
  });
}

// ================================================================ おうどん一
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26043137/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '15:30'], ['17:00', '21:00']);
  put({
    id: 'kyoto_oudon_hajime_gojo', name: 'おうどん一 (Oudon Hajime)', category: 'OMNI',
    lat: 34.995064, lng: 135.761192, cuisine_type: 'udon_soba',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: wheat udon and tempura (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: dashi broth, beef, chicken and shrimp tempura toppings (2026 reviews).',
    hours_raw: 'Mon, Tue, Thu–Sun 11:00–15:30 and 17:00–21:00; closed Wednesdays; hours may change (Tabelog). Bookings possible; queues at times (Tabelog; August and October 2026 reviews). Cards and PayPay; no e-money (Tabelog). Counter seats; non-smoking (Tabelog; June 2026 review). On Higashinotoin south of Gojo, 2 min from Gojo Stn exit 5 (Tabelog; June 2026 review).',
    hours: { 0: D, 1: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Higashinotoin-Gojo — 2 min from Gojo Stn',
    cuisine: 'Glossy, chewy udon with a clear broth and many toppings: kake and bukkake udon under ¥1,000 (bukkake ¥990), elaborate bowls around ¥2,000–3,000 (October 2026) — sweet-spicy beef with soft egg and grated daikon (May 2026), toriten and butter-mentaiko kamatama (September 2026), butter and black pepper with onsen egg and shigureni beef (October 2026); green-onion udon about ¥1,200 (June 2026); shrimp, vegetable and chikuwa tempura (2026)',
    website: null, gmaps: gm('おうどん一 五条'), menu_url: null,
    notes: '[Udon · Gojo] A clean counter udon shop by Gojo Stn, open from 11 am, for glossy chewy noodles in a clear broth and a long list of toppings and tempura — plain bowls under ¥1,000, loaded ones ¥2,000–3,000. Popular with visitors.',
    chef_bio: { chef_name: null, roles: [], origin: null,
      background: 'Opened 2 June 2025 (Tabelog). The name "Hajime" stands for a fresh start and new challenges (May 2026 review).',
      philosophy: null,
      specialty: 'Bukkake udon; beef udon with soft egg.',
      anecdotes: [
        { text: 'A September 2026 diner felt too embarrassed to order the ¥990 bukkake and went for toriten and butter-mentaiko kamatama with black pepper.', source: R + 'B535359138/' },
        { text: 'A June 2026 worker needing lunch before a noon meeting picked it because it opens at 11 when neighbours open at 11:30.', source: R + 'B531059313/' },
      ],
      japanese_sources_summary: '食べログ: おうどん一、うどん、下京区、五条駅から137m、月・火・木〜日 11:00〜15:30・17:00〜21:00、水曜休み、カード・PayPay 可、電子マネー不可、カウンター席、禁煙、2025年6月2日オープン。口コミ (2026年、英語): つやのあるコシの強いうどん、澄んだ出汁、ぶっかけ990円、かけとぶっかけは1,000円以下、具の多いものは2,000〜3,000円、甘辛い牛肉と温玉、toriten とバター明太の釜玉、海老と野菜とちくわの揚げ物、海外の客が多い。',
      confidence: 'medium', sources: [TB, R + 'B527174636/', R + 'B529497595/', R + 'B531059313/', R + 'B534289114/', R + 'B535359138/', R + 'B538214061/', R + 'B538397407/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Many overseas guests; menu outside (October 2026 review).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区東洞院通五条下ル和泉町523-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (34.995064, 135.761192); cross-checked: GSI 京都府京都市下京区和泉町523番地 (lot) 34m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B535359138/', R + 'B538397407/'],
    price_note: 'Prices from June–October 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Bukkake udon (cold)', '¥990', 'Udon', 'no', 'no', 'September 2026 review.', 'bukkake'),
      it('', '', 'Toriten and butter-mentaiko kamatama udon', '', 'Udon', 'no', 'no', 'September 2026 review.', 'kamatama'),
    ] }, {
    cuisine: 'つやとコシのあるうどんに澄んだ出汁と豊富なトッピング: かけとぶっかけは1,000円以下 (ぶっかけ990円)、具の多いものは2,000〜3,000円ほど (2026年10月)、甘辛い牛肉と温玉と大根おろし (2026年5月)、toriten とバター明太の釜玉 (2026年9月)、バターと黒胡椒に温玉と牛しぐれ煮 (2026年10月)、ねぎのうどん1,200円ほど (2026年6月)、海老、野菜、ちくわの揚げ物 (2026年)',
    neighborhood: '東洞院五条。五条駅から徒歩2分',
    gf_detail: 'グルテンフリー不可。小麦のうどんと揚げ物 (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁、牛肉、鶏、海老の揚げ物 (2026年の口コミ)。',
    notes: '[うどん・五条] 五条駅そばの清潔なカウンターのうどん屋。朝11時から、つやとコシのある麺と澄んだ出汁に豊富なトッピングと揚げ物。シンプルなものは1,000円以下、具だくさんは2,000〜3,000円。海外の客に人気。',
  });
}

// ================================================================ ツキトカゲ
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26004059/'; const R = TB + 'dtlrvwlst/';
  const WEB = 'https://tsukitokage.com/honten_top.html';
  const D = day(['11:30', '14:00'], ['17:00', '22:00']);
  put({
    id: 'kyoto_tsukitokage_honten', name: 'ツキトカゲ (Tsukitokage)', category: 'OMNI',
    lat: 35.013741, lng: 135.76526, cuisine_type: 'yakitori',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Salt-grilled yakitori may suit; kara-age, chicken nanban and tartar are wheat (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a yakitori restaurant (2025–26 reviews).',
    hours_raw: 'Tue–Sun and holidays 11:30–14:00 (food L.O. 13:30) and 17:00–22:00 (food L.O. 21:00, drinks 21:30); closed Mondays, with occasional closures on the 1st and 2nd of the month (Tabelog). Lunch set meals sell out on busy days (April 2026 review). Cards; no e-money (Tabelog). 45 seats; shoes off; private rooms; smoking only on the 1st floor and not at lunch (Tabelog; October 2026 review). On Nijo east of Tomikoji, 5 min from Kyoto Shiyakusho-mae (Tabelog).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Nijo-Tomikoji — 5 min from Kyoto Shiyakusho-mae Stn',
    cuisine: 'Yakitori and vegetables in a Kyoto townhouse: omakase skewers, liver pâté, abura-kimo, bonjiri, crispy cheese (October 2025); a ¥4,000 course with red konnyaku, chicken breast and fried taro (December 2025); chicken nanban with house tartar; ramen and grilled banana with ice cream to finish (May 2026); lunch kara-age set ¥1,000 for four pieces or ¥1,200 for five, chicken nanban set, one free rice refill (2025–26); about ¥1,000 lunch, ¥4,000–5,000 dinner',
    website: WEB, gmaps: gm('ツキトカゲ 二条富小路'), menu_url: null,
    notes: '[Yakitori · Nijo-Tomikoji] The yakitori main shop of ツキトカゲ in a shoes-off Kyoto townhouse: juicy skewers from a single grill master, vegetables, crispy cheese and much-praised chicken nanban, plus a hugely popular ¥1,000 kara-age lunch. Sister of the ツキトカゲ tempura izakaya on Shinmachi.',
    chef_bio: { chef_name: null, roles: ['Grill master (unnamed)'], origin: null,
      background: 'Opened 1 November 2013 (Tabelog); the main shop of ツキトカゲ (tsukitokage.com), whose second shop is a tempura izakaya on Shinmachi (kyoto_tsukitokage_shinmachi). One grill master works the yakitori (February 2024 review).',
      philosophy: null,
      specialty: 'Yakitori; chicken nanban; kara-age lunch.',
      anecdotes: [
        { text: 'An April 2026 diner, turned away twice when the lunch had sold out, walked in on a pouring-wet day for the huge kara-age set.', source: R + 'B525920845/' },
        { text: 'A December 2025 guest liked the tartar on the ¥4,000 course so much that a chicken nanban was ordered afterwards.', source: R + 'B519367490/' },
      ],
      japanese_sources_summary: '食べログ: ツキトカゲ、居酒屋・焼鳥・野菜料理、中京区二条富小路東入ル晴明町672-2、京都市役所前駅から徒歩5分、火〜日・祝日 11:30〜14:00・17:00〜22:00、月曜休み、月のはじめに休む場合あり、カード可、電子マネー不可、45席、個室あり、喫煙は1階のみ (昼は不可)、2013年11月1日オープン。公式サイト: ツキトカゲの本店。口コミ (2025〜2026年、英語): 焼き鳥のおまかせ、白レバーのパテ、油肝、ぼんじり、カリカリのチーズ、4,000円のコース、チキン南蛮、締めのラーメン、昼の唐揚げ定食4個1,000円・5個1,200円、ご飯のおかわり1回無料、靴を脱いで上がる町家。',
      confidence: 'medium', sources: [TB, WEB, R + 'B465274373/', R + 'B514725586/', R + 'B515713156/', R + 'B519262539/', R + 'B519367490/', R + 'B525920845/', R + 'B528996853/', R + 'B531752701/', R + 'B538696428/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Shoes off; book ahead for dinner (2024–26 reviews).' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区二条富小路東入ル晴明町672-2',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing and own site; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.013741, 135.765260); cross-checked: GSI 京都府京都市中京区晴明町672番地 (lot) 9m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B525920845/', R + 'B519367490/'],
    price_note: 'Prices from December 2025 and April 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Kara-age set (lunch, 4 / 5 pieces)', '¥1,000 / ¥1,200', 'Lunch', 'no', 'no', 'April and July 2026 reviews.', 'karaage'),
      it('', '', 'Dinner course (without drinks)', '¥4,000', 'Courses', 'ask', 'no', 'December 2025 review.', 'course'),
      it('', '', 'Chicken nanban', '', 'A la carte', 'no', 'no', '2025–26 reviews.', 'nanban'),
    ] }, {
    cuisine: '町家の焼き鳥と野菜: 焼き鳥のおまかせ、白レバーのパテ、油肝、ぼんじり、カリカリのチーズ (2025年10月)、赤こんにゃく、鶏むね、里芋の揚げ物の4,000円のコース (2025年12月)、自家製タルタルのチキン南蛮、締めのラーメンとバナナのグリルとアイス (2026年5月)、昼の唐揚げ定食4個1,000円・5個1,200円、チキン南蛮定食、ご飯のおかわり1回無料 (2025〜26年)、昼は1,000円、夜は4,000〜5,000円ほど',
    neighborhood: '二条富小路。京都市役所前駅から徒歩5分',
    gf_detail: '要確認。塩の焼き鳥は合う可能性がある。唐揚げ、チキン南蛮、タルタルは小麦 (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。焼き鳥の店 (2025〜26年の口コミ)。',
    notes: '[焼き鳥・二条富小路] 靴を脱いで上がる町家のツキトカゲの本店。焼き手ひとりのジューシーな焼き鳥、野菜、カリカリのチーズ、人気のチキン南蛮、昼は大人気の1,000円の唐揚げ定食。新町の天ぷらの居酒屋ツキトカゲの姉妹店。',
  });
}

save();
