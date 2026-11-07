// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw9 (Tabelog id mod 6 = 5), batch 46.
//   + 酒と旬 五郎 Sake to Shun Goro (fish-and-sake izakaya with tempura in a Shijo-Omiya alley; since 2023)        [core]
//   + 魏飯吉堂 京都タワーサンド店 Gihan Hajimedo (Chinese counter in the Kyoto Tower Sando food court; sister of
//     魏飯夷堂, supervised by the 一之船入 chef)                                                                   [core]
//   + 進々堂 京大北門前 Shinshindo Kyodai Kitamonmae (1930 student café facing Kyoto University's north gate)      [notable]
//   + ITALIAN QUATRO 京都駅前店 (Italian bar-restaurant near Kyoto Station; Kyoto's バル・コーポレーション)         [notable]
//   No skips: the first two core and first two notable shops in the lane were all draftable.
//   進々堂 京大北門前 is not the 進々堂 bakery chain's shop list: shinshindo.jp lists 13 bakery shops and omits the
//   北門前 café, which rurubu says is now a separate corporation — drafted, FLAGGED (reviews call it a branch).
//   Same-name counts first (same brand or operator): 五郎 0 (酒と旬 1; no other shop found on the web);
//   魏飯 — 魏飯餃子 (kyoto_gihan_gyoza_sakaimachi) and 創作中華 一之船入 already in data; 魏飯吉堂 is a different
//   concept (food-court Chinese counter) of the same local group — drafted as a sister concept; 進々堂 0;
//   QUATRO 0 — バル・コーポレーション (Kyoto) runs 5 restaurants in 4 brands (輝庭, 源輝家, クアトロ ×2, 蔵 寺町店),
//   none in data: QUATRO is a 2-shop brand, drafted one.
//   Taken in queue order on 2026-11-06: core 26039003, 26028821; notable 26001845, 26016539.
//   None drafted is in data/kyoto.json by name or address.
//   Service charges checked against Tabelog's Japanese original: 五郎 「お通し代あり、たぶん500円」; QUATRO
//   「アミューズ料金として380円を頂戴いたします。」; 魏飯吉堂 and 進々堂 have no section.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-06';
const { put, skip, save } = openCitySweep('kyoto-missed', TODAY, 'osw9-46');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ 酒と旬 五郎
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260203/26039003/'; const R = TB + 'dtlrvwlst/';
  const D = day(['18:00', '24:00']);
  put({
    id: 'kyoto_sake_to_shun_goro', name: '酒と旬 五郎 (Sake to Shun Goro)', category: 'OMNI',
    lat: 35.004894, lng: 135.749287, cuisine_type: 'izakaya',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: tempura is a house specialty; soy-seasoned izakaya dishes (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: a fish restaurant — sashimi, grilled fish and shellfish, chawanmushi (2025–26 reviews).',
    hours_raw: 'Tue–Sun 18:00–24:00; closed Monday (Tabelog). Bookings taken, and reviewers say they are a must; a July 2026 first-timer saw a line of booked guests before opening (Tabelog; February and July 2026 reviews). Table charge: Tabelog\'s Japanese original says 「お通し代あり、たぶん500円」 — an otoshi charge, "probably ¥500"; one reviewer\'s otoshi was a fish head, another\'s included nigiri (December 2025, March 2026). Cards, e-money and QR (Tabelog). 20 seats: a long counter of 10 and 10 at tables; smoking allowed (Tabelog; July 2026 review). JIN四条大宮 1F, in an alley 4 min from Hankyu Omiya Stn (Tabelog; May 2026 reviews).',
    hours: { 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Shijo-Omiya — 4 min from Hankyu Omiya Stn',
    cuisine: 'Seasonal fish and sake (Tabelog): a 12-kind sashimi platter to book ahead — sawara, ama-ebi, bluefin tuna, sea bream, horse mackerel and more; bluefin toro with sweet shrimp and squid in fresh uni, wrapped in nori; grilled sweet shrimp; grilled oysters; kinmedai collar; chawanmushi with crab miso, uni, ikura, shirako and oysters; tempura fried a piece at a time; simmered bamboo shoots; a handwritten menu; selected sake (2025–26 reviews)',
    website: null, gmaps: gm('酒と旬 五郎 四条大宮'), menu_url: null,
    notes: "[Fish & sake izakaya · Shijo-Omiya] A busy alley izakaya opened in 2023, loved by regulars for very fresh fish: a 12-kind sashimi platter (order it when you book), grilled sweet shrimp, a loaded chawanmushi and tempura one piece at a time, with chosen sake. About ¥5,000–8,000. Book ahead; smoking allowed.",
    chef_bio: { chef_name: null, roles: ['Staff (unnamed)'], origin: null,
      background: 'Opened 26 February 2023 (Tabelog).',
      philosophy: null, specialty: 'Sashimi platter; seasonal fish with sake.',
      anecdotes: [
        { text: 'A December 2025 regular booked the 12-kind sashimi platter for two friends, who were left speechless when it arrived.', source: R + 'B515662700/' },
        { text: 'In March 2026 a regular hoped to have tempura, but it was not on the menu that night.', source: R + 'B525130759/' },
        { text: 'A July 2026 first-timer saw booked guests lining up before opening; the food came out slowly, timed to each course.', source: R + 'B533488074/' },
      ],
      japanese_sources_summary: '食べログ: 酒と旬 五郎、天ぷら・居酒屋・そば、中京区七軒町462 JIN四条大宮 1F、阪急大宮駅から徒歩4分、火〜日 18:00〜24:00、月曜休み、予約可、お通し代あり (たぶん500円)、カード・電子マネー・QR 可、20席 (カウンター10、テーブル10)、喫煙可、魚にこだわる、日本酒にこだわる、2023年2月26日オープン。口コミ (2025年12月〜2026年10月、英語): 予約必須、12種の刺身の盛り合わせ (要予約)、本まぐろ・甘えび・いかのウニ和えの海苔巻き、甘えびの塩焼き、焼き牡蠣、金目鯛のかま焼き、蟹味噌・ウニ・いくら・白子・牡蠣の茶碗蒸し、一つずつ揚げる天ぷら、手書きのメニュー、長いカウンター、開店前に予約客の列。',
      confidence: 'medium', sources: [TB, R + 'B515662700/', R + 'B523236097/', R + 'B525130759/', R + 'B526295303/', R + 'B527253331/', R + 'B529189921/', R + 'B532347826/', R + 'B533488074/', R + 'B536996948/', R + 'B537419392/'] },
    cultural_comfort: { level: 'japanese', note: 'Handwritten Japanese menu; book ahead; smoking allowed.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区七軒町462 JIN四条大宮 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.004894, 135.749287); cross-checked: GSI 京都府京都市中京区七軒町462番地 (lot) 20m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B515662700/'],
    price_note: 'No menu or prices read.', last_checked: TODAY, items: [
      it('', '', 'Sashimi platter, 12 kinds (book ahead)', '', 'Sashimi', 'ask', 'no', 'December 2025 and May 2026 reviews.', 'sashimi_moriawase'),
      it('', '', 'Chawanmushi with crab miso, uni, ikura, shirako and oysters', '', 'Dishes', 'ask', 'no', 'December 2025 review.', 'chawanmushi'),
    ] }, {
    cuisine: '旬の魚と日本酒 (食べログ): 予約時に頼む12種の刺身の盛り合わせ (さわら、甘えび、本まぐろ、鯛、あじなど)、本まぐろのトロと甘えびといかをウニで和えた海苔巻き、甘えびの塩焼き、焼き牡蠣、金目鯛のかま、蟹味噌・ウニ・いくら・白子・牡蠣の茶碗蒸し、一つずつ揚げる天ぷら、たけのこの煮物、手書きのメニュー、選んだ日本酒 (2025〜26年の口コミ)',
    neighborhood: '四条大宮。阪急大宮駅から徒歩4分',
    gf_detail: 'グルテンフリー不可。天ぷらが名物で、居酒屋の料理は醤油の味付け (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。魚の店。刺身、焼き魚、貝、茶碗蒸し (2025〜26年の口コミ)。',
    notes: '[魚と日本酒の居酒屋・四条大宮] 2023年開店の、路地の人気居酒屋。常連の多い新鮮な魚の店で、12種の刺身の盛り合わせ (予約時に注文)、甘えびの塩焼き、具だくさんの茶碗蒸し、一つずつ揚げる天ぷらを選んだ日本酒と。5千〜8千円ほど。予約を。喫煙可。',
  });
}

// ================================================================ 魏飯吉堂 京都タワーサンド店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26028821/'; const R = TB + 'dtlrvwlst/';
  const D = day(['11:00', '23:00']);
  put({
    id: 'kyoto_gihan_hajimedo_tower_sando', name: '魏飯吉堂 京都タワーサンド店 (Gihan Hajimedo, Kyoto Tower Sando)', category: 'OMNI',
    lat: 34.987519, lng: 135.759557, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: gyoza, ramen and tantanmen, fried chicken with soy-based sauces (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: fried chicken, chashu, shrimp and egg fried rice, meat gyoza (2026 reviews).',
    hours_raw: 'Daily 11:00–23:00; irregular closures (Tabelog). No bookings (Tabelog). A counter in the Kyoto Tower Sando food court, B1F: pay at the register or order by mobile from your table, then wait for the buzzer; shared food-court seating (9 seats listed) (Tabelog; July–November 2026 reviews). Cards, e-money and QR (Tabelog). Non-smoking (Tabelog). 2 min from Kyoto Stn central exit (Tabelog; 2026 reviews).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: false, halal: false, open_late: true },
    neighborhood: 'Kyoto Station — Kyoto Tower Sando B1F food court',
    cuisine: 'Casual Chinese and Taiwanese supervised by the 一之船入 chef (Tabelog; 2026 reviews): five-ingredient fried rice with soup (¥818, August 2026), Yangzhou fried rice, yurinchi fried chicken (¥1,000) and its set with takana and sesame dumplings, garlic-soy fried chicken set with a drink (¥1,500), tantanmen set with rice, pickles and sesame dumplings, chashu ramen and gyoza set (about ¥1,500), gyoza (2 servings ¥1,500), a quick-drink set of gyoza and beer (2026 reviews)',
    website: null, gmaps: gm('魏飯吉堂 京都タワーサンド'), menu_url: null,
    notes: "[Chinese food-court counter · Kyoto Tower Sando] A quick Chinese counter under Kyoto Tower from the group behind 創作中華 一之船入 and 魏飯夷堂: big yurinchi fried chicken, tantanmen and fried-rice sets, gyoza and beer, mostly ¥1,000–1,500. Order at the counter or on your phone, then find a food-court seat. Open daily till 23:00.",
    chef_bio: { chef_name: null, roles: ['Food-court counter of the 一之船入 group; menu supervised by the group\'s chef'], origin: null,
      background: 'Opened 14 April 2017 (Tabelog). The Tabelog shop text calls it the sister restaurant of 魏飯夷堂, opened in the Kyoto Tower Sando food court, with dishes supervised by Chef Wei Xizhi (Tabelog English); an August 2026 regular credits the chefs of 一之船入. A November 2026 diner noted the kitchen staff seemed to be from outside China.',
      philosophy: 'Authentic Chinese with fine ingredients, made easy to try (Tabelog).',
      specialty: 'Yurinchi fried chicken; fried rice.',
      anecdotes: [
        { text: 'An August 2026 regular orders the five-ingredient fried rice here with grilled gyoza from a neighbouring counter, calling it the best fried rice ever.', source: R + 'B458992052/' },
        { text: 'A July 2026 diner came after trying the gyoza at the Sanjo sister shop.', source: R + 'B531113099/' },
        { text: 'An October 2026 diner found the five-flavor fried rice bland and the draft beer poor, among mostly overseas guests.', source: R + 'B538143049/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): 魏飯吉堂 京都タワーサンド店、中華料理・台湾料理、下京区烏丸通七条下ル東塩小路町721-1 KYOTO TOWER SANDO B1F、毎日 11:00〜23:00、不定休、予約不可、カード・電子マネー・QR 可、9席、禁煙、2017年4月14日オープン、魏飯夷堂の姉妹店として京都タワーサンドのフードコートに開店、魏禧之シェフの監修。口コミ (2026年7〜11月、英語): 一之船入のシェフたちによる気軽な中華、五目炒飯とスープ818円、揚州炒飯、油淋鶏1,000円とそのセット、ニンニク醤油の唐揚げのセット1,500円、担々麺のセット、チャーシュー麺と餃子のセット約1,500円、餃子2人前1,500円、ちょい飲みセット、レジで支払いブザーで受け取り、テーブルからモバイル注文、三条の姉妹店、海外の客が多い、炒飯の味が薄いという声。',
      confidence: 'medium', sources: [TB, R + 'B458992052/', R + 'B531113099/', R + 'B531382588/', R + 'B533788370/', R + 'B534177175/', R + 'B534805030/', R + 'B536584748/', R + 'B537907908/', R + 'B538143049/', R + 'B538512691/'] },
    cultural_comfort: { level: 'none_needed', note: 'Food-court counter with picture menu and mobile ordering.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区烏丸通七条下ル東塩小路町721-1 KYOTO TOWER SANDO B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the operator; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.987519, 135.759557); cross-checked: GSI 京都府京都市下京区東塩小路町721番地 (lot) 16m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B458992052/', R + 'B534177175/'],
    price_note: 'Prices from August 2026 reviews.', last_checked: TODAY, items: [
      it('', '', 'Five-ingredient fried rice with soup', '¥818', 'Rice', 'ask', 'no', 'August 2026 review.', 'gomoku_chahan'),
      it('', '', 'Yurinchi fried chicken', '¥1,000', 'Dishes', 'no', 'no', 'August 2026 review.', 'yurinchi'),
    ] }, {
    cuisine: '一之船入のシェフ監修の気軽な中華・台湾料理 (食べログ、2026年の口コミ): 五目炒飯とスープ (818円、2026年8月)、揚州炒飯、油淋鶏 (1,000円) と高菜・ごま団子のセット、ドリンク付きのニンニク醤油の唐揚げのセット (1,500円)、ご飯・漬物・ごま団子の担々麺のセット、チャーシュー麺と餃子のセット (約1,500円)、餃子 (2人前1,500円)、餃子とビールのちょい飲みセット (2026年の口コミ)',
    neighborhood: '京都駅。京都タワーサンド B1F のフードコート',
    gf_detail: 'グルテンフリー不可。餃子、ラーメン、担々麺、醤油ベースのたれの唐揚げ (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。唐揚げ、チャーシュー、海老と卵の炒飯、肉の餃子 (2026年の口コミ)。',
    notes: '[フードコートの中華・京都タワーサンド] 創作中華 一之船入や魏飯夷堂のグループによる、京都タワーの地下の気軽な中華のカウンター。大きな油淋鶏、担々麺や炒飯のセット、餃子とビールで、ほぼ1,000〜1,500円。カウンターかスマホで注文し、フードコートの席へ。毎日23時まで。',
  });
}

// ================================================================ 進々堂 京大北門前
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26001845/'; const R = TB + 'dtlrvwlst/';
  const SERAI = 'https://serai.jp/?p=1053857'; const RURUBU = 'https://rurubu.jp/andmore/spot/80026227';
  const D = day(['10:00', '18:00']);
  put({
    id: 'kyoto_shinshindo_kyodai_kitamonmae', name: '進々堂 京大北門前 (Shinshindo Kyodai Kitamonmae)', category: 'OMNI',
    lat: 35.028726, lng: 135.782032, cuisine_type: 'kissaten',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a bakery café — rolls, sandwiches, toast, cream puffs and curry (2025–26 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: egg sandwiches, meat curry, cakes and coffee with milk (2025–26 reviews).',
    hours_raw: 'Mon and Wed–Sun 10:00–18:00 (last order 17:30); closed Tuesday (Tabelog). rurubu also lists 10:00–18:00, closed Tuesday. Order at the counter, then sit (May 2026 review). No bookings; cash only — no cards, e-money or QR (Tabelog). No photos inside: signs on the door and in the room (Tabelog; November 2025–August 2026 reviews). 100 seats at long wooden tables, with tables kept for students and a student discount on coffee with a university ID (November 2025 and February 2026 reviews; a May 2026 diner was told the discount needs the whole party to be university students). Non-smoking (Tabelog). Facing Kyoto University\'s north gate; 10 min from Demachiyanagi Stn (Tabelog).',
    hours: { 0: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Kyoto University north gate, Kitashirakawa — 10 min from Demachiyanagi Stn',
    cuisine: 'Old-style bakery café (Tabelog; serai.jp): one house blend coffee served with a sugar cube, French bread and soft French rolls from the founding recipe, butter toast, ham toast, egg and mixed sandwiches, roll-bread brunch set, homemade curry rice set with coffee or tea and a small salad (¥950, May 2026), cake sets with cream puffs, pancakes (serai.jp; 2025–26 reviews)',
    website: null, gmaps: gm('進々堂 京大北門前'), menu_url: null,
    notes: "[1930 student café · Kyoto University north gate] Kyoto's \"second university library\": a Paris-inspired café opened in 1930, with massive wooden tables by the craftsman Kuroda Tatsuaki, a courtyard, and students reading over a single blend coffee, curry or a sandwich. About ¥1,000. Cash only; no photos inside; closed Tuesday.",
    chef_bio: { chef_name: '川口聡', roles: ['Fourth-generation proprietor (serai.jp)'], origin: null,
      background: 'Opened in 1930 as a French-style café by the bakery 進々堂, which began in 1913 and was the first in Kyoto to sell French bread; the founder, 続木斉, had studied bread-making in Paris and modelled the café on those in the Latin Quarter, hoping Japanese students would also learn Western esprit (serai.jp). The long one-piece tables and benches were commissioned from the woodworker 黒田辰秋 so many students could sit at once (serai.jp; rurubu; November 2025 review). The fourth-generation proprietor 川口聡 says the café\'s atmosphere stays the same because of the founding ideals (serai.jp, undated). Operator: rurubu says the café is now a separate corporation from the 進々堂 bakery, and the bakery\'s own shop list does not include it; 2026 reviewers still call it a branch of the Kyoto bakery chain (May and September 2026).',
      philosophy: '"The air of the shop stays the same even as the times and the town change, because of the founding ideals" (川口聡, serai.jp).',
      specialty: 'Blend coffee; curry rice set; sandwiches.',
      anecdotes: [
        { text: 'In October 2025 a visitor returned after about 50 years, reading a maths and physics book bought at a nearby bookshop over black coffee.', source: R + 'B515246388/' },
        { text: 'A November 2025 visitor on the way to Ginkaku-ji found the sandwiches sold out, took the roll-bread brunch set, and found the staff\'s indifference very Kyoto.', source: R + 'B516530448/' },
        { text: 'A November 2025 visitor was told that lingering was not allowed before noon, and felt the many notices spoiled the calm.', source: R + 'B517741053/' },
      ],
      japanese_sources_summary: '食べログ: 進々堂 京大北門前、カフェ・パン・サンドイッチ、左京区北白川追分町88、出町柳駅から徒歩10分、月・水〜日 10:00〜18:00 (L.O. 17:30)、火曜休み、予約不可、カード・電子マネー・QR 不可、100席、禁煙、テイクアウト可、店内撮影禁止の掲示。るるぶ: 京都発祥のベーカリー「進々堂」が昭和5年 (1930) に開いたカフェ、現在はベーカリー進々堂とは別法人、「京大第二の図書室」、パリのカフェを手本にした店構え、黒田辰秋の机、ミックスサンドイッチ、カレーライスセット、ブレンドコーヒー。serai.jp: 大正2年にパン屋として始まり京都で初めてフランスパンを提供、昭和5年にフランス風カフェを開店、創業者・続木斉がパリのカルチエ・ラタンのカフェを手本に、黒田辰秋の一枚板の大机と長椅子、4代目の川口聡さん、ブレンド一本のコーヒー、フランスパンとフレンチロール、バタートースト、ハムトースト、自家製カレーライスセット。口コミ (2025年10月〜2026年9月、英語): 角砂糖のコーヒー、シュークリームのケーキセット、ロールパンのブランチセット、卵サンド、カレーライスセット950円、パンケーキ、学生用の勉強席、学生証で割引、中庭、注文してから席へ、京都のベーカリーの支店とする声。',
      confidence: 'medium', sources: [TB, SERAI, RURUBU, R + 'B214457321/', R + 'B515246388/', R + 'B516530448/', R + 'B517221617/', R + 'B517741053/', R + 'B522935452/', R + 'B527116021/', R + 'B528327817/', R + 'B534701899/', R + 'B534894447/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Order at the counter; cash only; no photos inside.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区北白川追分町88',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through September 2026.' },
    pin_source: `Tabelog ${TB} (35.028726, 135.782032); cross-checked: GSI 京都府京都市左京区北白川追分町88番地 (lot) 132m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B528327817/', SERAI],
    price_note: 'Curry set price from a May 2026 review.', last_checked: TODAY, items: [
      it('', '', 'Curry rice set (with drink and small salad)', '¥950', 'Meals', 'no', 'no', 'May 2026 review; serai.jp.', 'curry_set'),
      it('', '', 'Blend coffee', '', 'Drinks', 'ask', 'ask', 'serai.jp; 2025–26 reviews.', 'blend_coffee'),
    ] }, {
    cuisine: '昔ながらのベーカリーのカフェ (食べログ、serai.jp): 角砂糖を添えたブレンド一本のコーヒー、創業時のフランスパンと柔らかいフレンチロール、バタートースト、ハムトースト、卵サンドやミックスサンド、ロールパンのブランチセット、コーヒーか紅茶とミニサラダ付きの自家製カレーライスセット (950円、2026年5月)、シュークリームのケーキセット、パンケーキ (serai.jp、2025〜26年の口コミ)',
    neighborhood: '京大北門前、北白川。出町柳駅から徒歩10分',
    gf_detail: 'グルテンフリー不可。ベーカリーのカフェで、パン、サンドイッチ、トースト、シュークリーム、カレー (2025〜26年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。卵サンド、肉のカレー、ケーキ、ミルク入りのコーヒー (2025〜26年の口コミ)。',
    notes: '[1930年の学生の喫茶・京大北門前] 「京大第二の図書室」と呼ばれる、1930年にパリのカフェを手本に開いた喫茶。黒田辰秋の重厚な木の大机、中庭、ブレンド一本のコーヒーやカレー、サンドイッチと学生たち。千円前後。現金のみ。店内撮影禁止。火曜休み。',
  });
}

// ================================================================ ITALIAN QUATRO 京都駅前店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260101/26016539/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'http://www.bal-flower.co.jp/fd/kyoto.html';
  const D = day(['11:30', '14:30'], ['17:00', '22:00']);
  put({
    id: 'kyoto_italian_quatro_ekimae', name: 'ITALIAN QUATRO 京都駅前店 (Italian Quatro, Kyoto Ekimae)', category: 'OMNI',
    lat: 34.98743, lng: 135.756549, cuisine_type: 'italian',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: fresh pasta, pizza, gnocchi gratin and cheese tortillas (2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Arrabbiata and salads are on the menu, but most dishes have cheese, ham or seafood (2026 reviews).',
    hours_raw: 'Daily 11:30–14:30 (last order 14:00) and 17:00–22:00 (last order 21:30); irregular closures (Tabelog). Bookings taken, lunch included, even on Sundays; fully booked on a holiday lunch (Tabelog; September and October 2026 reviews). Charge: Tabelog\'s Japanese original says 「アミューズ料金として380円を頂戴いたします。」 — a ¥380 amuse charge. Cards (VISA, Master, JCB, AMEX, Diners), e-money and QR (Tabelog). 75 seats with counter, sofas and semi-private tables; private rooms for 2 or 4; non-smoking; children and strollers welcome (Tabelog). Order by QR code (November 2026 review). Shin-Kyoto Center Bldg 1F, 5 min from Kyoto Stn (Tabelog).',
    hours: { 0: D, 1: D, 2: D, 3: D, 4: D, 5: D, 6: D }, hours_status: 'regular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kyoto Station north (Karasuma side) — 5 min from Kyoto Stn',
    cuisine: 'Italian bar-restaurant (Tabelog): pasta made to order — carbonara with snowy parmesan, shirasu, arrabbiata, octopus puttanesca linguine, walnut-and-mozzarella cacio e pepe tagliolini — paella, meat dishes, Diavola pizza with jalapeños, Margherita, gnocchi gratin, Caesar salad with roast beef, mixed antipasti on a large plate; "Quattro Lunch" of appetizers, cheese tortilla, pasta, main, dessert and drink from ¥2,288; lunch sets from about ¥1,000; soft drinks ¥300; wine, cocktails and an all-you-can-drink plan (2026 reviews)',
    website: SITE, gmaps: gm('ITALIAN QUATRO 京都駅前店'), menu_url: TB + 'dtlmenu/',
    notes: "[Italian bar · Kyoto Station] A roomy, relaxed Italian a few minutes from Kyoto Station that takes lunch bookings: fresh pasta, paella, pizza and a big antipasti plate, with lunch sets from about ¥1,000 and dinner around ¥4,000–5,000 with an all-you-can-drink option. ¥380 amuse charge.",
    chef_bio: { chef_name: null, roles: ['Restaurant of バル・コーポレーション (Kyoto) (no person named)'], origin: null,
      background: 'Opened 23 August 2010 (Tabelog). Run by 株式会社バル・コーポレーション of Nakagyo-ku, which lists five restaurants: 輝庭, 源輝家, ITALIAN QUATRO 四条烏丸店 and 京都駅前店, and 蔵 寺町店 (bal-flower.co.jp).',
      philosophy: null, specialty: 'Fresh pasta; paella.',
      anecdotes: [
        { text: 'Two friends ate antipasti, pasta and dessert in August 2026 before an evening bus tour from Kyoto.', source: R + 'B534577498/' },
        { text: 'An October 2026 diner booked a Sunday lunch, though the pre-ordered "Quattro Lunch" message did not get through; a friend found the carbonara salty.', source: R + 'B537687017/' },
        { text: 'In November 2026 a diner saw groups of nearly 20 and many overseas guests.', source: R + 'B538625171/' },
      ],
      japanese_sources_summary: '食べログ (店舗会員): ITALIAN QUATRO 京都駅前店、イタリアン・ワインバー・ステーキ、下京区塩小路通烏丸西入東塩小路町614 新京都センタービル1F、JR京都駅から徒歩5分、毎日 11:30〜14:30 (L.O. 14:00)・17:00〜22:00 (L.O. 21:30)、不定休、予約可、アミューズ料金380円、カード・電子マネー・QR 可、75席、2名・4名の個室、禁煙、子ども可、2010年8月23日オープン。バル・コーポレーション (京都市中京区) の公式サイト: 輝庭、源輝家、イタリアン クアトロ 四条烏丸店・京都駅前店、蔵 寺町店。口コミ (2026年8〜11月、英語): 生パスタ (雪のパルメザンのカルボナーラ、しらす、アラビアータ、タコのプッタネスカ、クルミとモッツァレラのカチョエペペ)、パエリア、肉料理、ディアボラのピザ、マルゲリータ、ニョッキのグラタン、ローストビーフのシーザーサラダ、前菜の盛り合わせ、クアトロランチ2,288円から、ランチ約1,000円から、ソフトドリンク300円、飲み放題、QR コードで注文、海外の客が多い。',
      confidence: 'medium', sources: [TB, SITE, 'http://www.bal-flower.co.jp/', R + 'B534469440/', R + 'B534577498/', R + 'B535585996/', R + 'B535739181/', R + 'B536147073/', R + 'B536300826/', R + 'B537132737/', R + 'B537278460/', R + 'B537687017/', R + 'B538625171/'] },
    cultural_comfort: { level: 'none_needed', note: 'QR-code ordering; many overseas guests.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区塩小路通烏丸西入東塩小路町614 新京都センタービル1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the restaurant; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (34.987430, 135.756549); cross-checked: GSI 京都府京都市下京区東塩小路町614番地 (lot) 53m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [R + 'B537687017/', TB],
    price_note: 'Lunch price from an October 2026 review; amuse charge from Tabelog.', last_checked: TODAY, items: [
      it('', '', 'Quattro Lunch (appetizers, cheese tortilla, pasta, main, dessert, drink)', 'from ¥2,288', 'Lunch', 'no', 'ask', 'October 2026 review.', 'quattro_lunch'),
      it('', '', 'Amuse charge', '¥380', 'Charges', 'ask', 'ask', 'Tabelog.', 'amuse_charge'),
    ] }, {
    cuisine: 'イタリアンのバル (食べログ): 注文ごとに作るパスタ (雪のパルメザンのカルボナーラ、しらす、アラビアータ、タコのプッタネスカのリングイネ、クルミとモッツァレラのカチョエペペのタリオリーニ)、パエリア、肉料理、ハラペーニョのディアボラのピザ、マルゲリータ、ニョッキのグラタン、ローストビーフのシーザーサラダ、大皿の前菜の盛り合わせ。前菜・チーズのトルティーヤ・パスタ・メイン・デザート・ドリンクの「クアトロランチ」2,288円から、ランチは約1,000円から、ソフトドリンク300円、ワイン、カクテル、飲み放題 (2026年の口コミ)',
    neighborhood: '京都駅の北、烏丸側。京都駅から徒歩5分',
    gf_detail: 'グルテンフリー不可。生パスタ、ピザ、ニョッキのグラタン、チーズのトルティーヤ (2026年の口コミ)。',
    vegan_detail: '要確認。アラビアータやサラダもあるが、多くはチーズ、ハム、魚介を使う (2026年の口コミ)。',
    notes: '[イタリアンのバル・京都駅] 京都駅から数分の、広く落ち着いたイタリアン。ランチも予約できる。生パスタ、パエリア、ピザ、大皿の前菜で、ランチは約1,000円から、夜は飲み放題もあり4千〜5千円ほど。アミューズ料金380円。',
  });
}

save();
