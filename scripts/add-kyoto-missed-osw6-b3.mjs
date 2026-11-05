// Kyoto "what did we miss" pass (kyoto-missed, Kyoto priority lanes) — lane osw6 (Tabelog id mod 6 = 4), batch 3.
//   + カジュアル割烹 とのみず Casual Kappo Tonomizu (12-seat à la carte kappo in a Kawaramachi basement)
//   + 京鴨とsake 鴨蔵 Kyogamo to Sake Kamokura (Kyoto-duck izakaya on Kiyamachi, lunch and dinner)
//   + 松之助 京都本店 Matsunosuke Kyoto honten (American apple pies and pancakes at Takakura Oike, since 2000)
//   + ナカガワ小麦店 Nakagawa Komugiten (whole-wheat bakery by Shimogamo Shrine; Bread WEST Tabelog 100 2026)
//   Taken on 2026-11-05 from `queue.mjs kyoto-missed next core 200` (Tonomizu 26042308, Kamokura 26041348: the first
//   two with id mod 6 = 4 after batch 2) and `next notable 200` (Matsunosuke 26000068, Nakagawa Komugiten 26019004).
//   None is in data/kyoto.json: grep by name (とのみず/Tonomizu, 鴨蔵/Kamokura, 松之助/Matsunosuke — only a passing
//   mention of a person named 松之助 in another record —, ナカガワ/Nakagawa) and address (市之町240-1/アペックスビル,
//   斎藤町123/ラクアス木屋町, 亀甲屋町605, 下鴨松ノ木町52) found none. Neighbours: kyoto_takasegawa_maki (address_ja
//   "京都府京都市下京区市之町240-2") is next door to Tonomizu; ChIJjWdpVQ0JAWAR-myTPZSlpnY Cafe & Bar Maru @Keika
//   (pin_source "listing address 京都府京都市下京区斎藤町123番地") shares Kamokura's lot.
//   Chain check: Matsunosuke has two shops on its own site (Kyoto honten, MATSUNOSUKE N.Y. in Daikanyama) — a small
//   group, so drafted. No other Kamokura or Tonomizu shop was found.
import { openCitySweep, gm, it, day } from './lib-sweep.mjs';
const TODAY = '2026-11-05';
const { put, save } = openCitySweep('kyoto-missed', TODAY, 'osw6-3');
const SAFETY0 = { dedicated_fryer: null, gf_cross_contamination: [], soy_sauce_wheat: [], vegan_cross_contact: [], staff_allergy_handling: [], positives: [], confidence: 'low', last_checked: TODAY };

// ================================================================ カジュアル割烹 とのみず
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26042308/'; const R = TB + 'dtlrvwlst/';
  const H = day(['17:00', '23:00']);
  put({
    id: 'kyoto_casual_kappo_tonomizu', name: 'カジュアル割烹 とのみず (Casual Kappo Tonomizu)', category: 'OMNI',
    lat: 35.002187, lng: 135.769794, cuisine_type: 'kaiseki',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Dashi-based kappo cooking with soy-based seasonings, tempura, kara-age, oden with fish cakes and a pasta to finish; no gluten information (2026 reviews).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the cooking rests on dashi, fish, eel, duck and wagyu (2026 reviews).',
    hours_raw: '17:00–23:00 (last order 22:30) every day; closing days may vary (Tabelog). Reservations online or by phone; dinner starts with a booked "one soup" opener of soup and small dishes, ¥1,650, then à la carte (Tabelog; August 2026); an extra appetizer is +¥550 (August 2026). Full by 18:00 on a September 2026 weekday; same-day bookings possible (October 2026). Groups of up to 4; private hire for 8–20 (Tabelog). 12 seats: 6 at the counter and two tatami tables for 3 (Tabelog). Charcoal-grilling smoke stung the eyes of two September 2026 diners. Non-smoking; cards and PayPay, WeChat Pay (Tabelog). Basement of the 河原町アペックスビルⅡ, 4 min walk from Kyoto Kawaramachi Stn (Tabelog).',
    hours: { 0: H, 1: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: true },
    neighborhood: 'South of Shijo, west of Kawaramachi, basement — 4 min walk from Kyoto Kawaramachi Stn',
    cuisine: 'À la carte kappo, "Japanese cuisine and kappo in a new way" (Tabelog), with over 20 sakes chosen by season (Tabelog) · opener of soup and three small dishes ¥1,650 (Tabelog; 2026 reviews) · assorted sashimi, botan shrimp marinated in junmai sake, foie gras miso-cured and wrapped in kombu-cured sea bream (the dish "everyone posts about"), wagyu cheek simmered Koshu-style with crumbled sesame tofu, abalone with winter melon and sea-urchin sauce, eel chawanmushi, umaki with cheese, grilled eel, black wagyu zabuton, duck with Kamo eggplant, chicken-wing kara-age with wasabi-nori soy, potato salad, lotus-root tempura, oden (from autumn 2026) · clay-pot rice with matsutake and eel or saury · the "staff meal" pasta to finish (2026 reviews); the menu changes monthly (October 2026)',
    website: null, gmaps: gm('カジュアル割烹 とのみず 京都'), menu_url: null,
    notes: "[Kappo · Kawaramachi, kappo cooking by the dish] A 12-seat basement counter near Kawaramachi where one cook turns out kappo food à la carte, so you order what you like instead of a set course. Dinner opens with a booked soup-and-small-dishes starter (¥1,650); then come sashimi, the much-photographed foie gras wrapped in kombu-cured sea bream, wagyu cheek with sesame-tofu sauce, oden in the cold months and a clay-pot rice of matsutake with eel or saury, with the 'staff meal' pasta that reviewers rave about to finish. Over 20 seasonal sakes. Bills ran ¥6,000–15,000 a head in 2026. Charcoal smoke can drift over the counter. Open daily 17:00–23:00.",
    chef_bio: { chef_name: null, roles: ['Owner-chef, who cooks alone (unnamed in the sources)'], origin: null,
      background: 'Per an August 2026 review: the owner is 40, trained at a ryokan in Fukui and a kaiseki restaurant in Pontocho, and cooks everything alone, with a female staff member serving; an October 2026 diner was surprised at the speed with one person cooking. A September 2026 regular asks "the manager" to choose the sake.',
      philosophy: 'Per Tabelog (the shop’s own text): "Dishes to Enjoy Japanese Cuisine and Kappo in a New Way"; young customers and sake lovers welcome; suited to solo diners, dates and groups of 2–4.',
      specialty: 'Foie gras with kombu-cured sea bream; clay-pot rice; staff-meal pasta.',
      anecdotes: [
        { text: '"The gentle owner quickly prepares dishes right in front of you." — August 2026.', source: R + 'B535046616/' },
        { text: '"I was surprised at how quickly the food was served, especially since it was just one person cooking!" — October 2026.', source: R + 'B537393975/' },
        { text: 'A September 2026 diner found the charcoal smoke from grilling vegetables stung the eyes, and asked the shop to look into it.', source: R + 'B536503562/' },
        { text: '"Watching the staff prepare the staff meal pasta from across the counter looked incredibly appetizing!" — August 2026.', source: R + 'B533074865/' },
      ],
      japanese_sources_summary: '食べログ: 創作料理・肉料理・居酒屋、下京区市之町240-1 河原町アペックスビルⅡ B1F、阪急京都河原町駅から徒歩4分、毎日17:00〜23:00 (L.O. 22:30)、予約可、12席 (カウンター6、座敷テーブル3名×2)、1組4名まで、貸切8〜20名、禁煙、カード・PayPay・WeChat Pay 可、日本酒20種以上、季節の一汁のコース1,650円。口コミ (2026年7〜11月、英語): 40歳の店主が Fukui の旅館と先斗町の懐石で修業、一人で調理、刺身盛り合わせ、ぼたん海老、フォアグラと昆布締めの鯛、和牛ほほ肉、鮑と冬瓜、うなぎ、おでん、松茸の土鍋ご飯、まかないパスタ、炭火の煙、毎月変わる献立。',
      confidence: 'medium', sources: [TB, R + 'B532374248/', R + 'B533074865/', R + 'B534749674/', R + 'B534759048/', R + 'B534855533/', R + 'B535046616/', R + 'B536503562/', R + 'B537090858/', R + 'B537393975/', R + 'B537933682/', R + 'B537953915/', R + 'B538519021/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book the opener online; order the rest à la carte from a menu whose dish names can be hard to picture (October 2026); cards accepted.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区市之町240-1 河原町アペックスビルⅡ B1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.002187, 135.769794); cross-checked: GSI 京都府京都市下京区市之町240番地 (lot) 8m; about 7 m from kyoto_takasegawa_maki (市之町240-2) and kyoto_trattoria_isuqo; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'low', sources: [TB, R + 'B535046616/'],
    price_note: 'Only the opener has a published price (Tabelog); other dishes are from 2026 reviews, unpriced.', last_checked: TODAY, items: [
      it('', '', 'Seasonal opener: soup and small dishes (booked)', '¥1,650', 'Starter', 'ask', 'no', 'Tabelog; extra appetizer +¥550 (August 2026).', 'ichiju_opener'),
      it('', '', 'Assorted sashimi', '', 'Fish', 'ask', 'no', '', 'sashimi'),
      it('', '', 'Miso-cured foie gras wrapped in kombu-cured sea bream', '', 'Dishes', 'ask', 'no', 'August 2026.', 'foie_gras_tai'),
      it('', '', 'Clay-pot rice (matsutake with eel or saury)', '', 'Rice', 'ask', 'no', 'Autumn 2026.', 'donabe_gohan'),
      it('', '', 'Staff-meal pasta', '', 'Finish', 'no', 'no', '', 'makanai_pasta'),
    ] }, {
    cuisine: '「和食と割烹を新しいスタイルで」楽しむアラカルトの割烹 (食べログ)。季節ごとの日本酒20種以上 (食べログ)・最初の一品は汁物と小鉢3品で1,650円 (食べログ、2026年の口コミ)・刺身盛り合わせ、純米酒漬けのぼたん海老、味噌漬けのフォアグラを昆布締めの鯛で巻いた一品 (「みんなが投稿する」名物)、ごま豆腐をくずしてかけた和牛ほほ肉の Koshu 風の煮込み、鮑と冬瓜の雲丹あん、うなぎの茶碗蒸し、チーズのう巻き、うなぎの白焼き、黒毛和牛のざぶとん、鴨と賀茂なす、手羽先の唐揚げ わさび海苔醤油、ポテトサラダ、れんこんの天ぷら、おでん (2026年秋から)・松茸とうなぎか秋刀魚の土鍋ご飯・締めのまかないパスタ (2026年の口コミ)。献立は毎月変わる (2026年10月)',
    neighborhood: '四条の南、河原町の西、地下。京都河原町駅から徒歩4分',
    gf_detail: '要確認。出汁と醤油の割烹料理で、天ぷら、唐揚げ、練り物入りのおでん、締めのパスタもある。グルテンの情報はない (2026年の口コミ)。',
    vegan_detail: 'ヴィーガン不可。出汁、魚、うなぎ、鴨、和牛が中心 (2026年の口コミ)。',
    notes: '[割烹・河原町、一品ずつ頼む割烹] 河原町近くの地下にある12席の店。店主が一人で割烹料理をアラカルトで出すので、コースではなく好きなものを頼める。最初に予約制の汁物と小鉢 (1,650円)、続いて刺身、よく写真に撮られるフォアグラと昆布締めの鯛、ごま豆腐のあんの和牛ほほ肉、寒い時期のおでん、松茸とうなぎか秋刀魚の土鍋ご飯。締めは口コミで評判のまかないパスタ。季節の日本酒20種以上。2026年は1人6,000〜15,000円ほど。カウンターに炭火の煙が流れることも。毎日17時〜23時。',
  });
}

// ================================================================ 京鴨とsake 鴨蔵
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260201/26041348/'; const R = TB + 'dtlrvwlst/';
  const WD = day(['11:30', '14:30'], ['17:00', '22:00']); const WE = day(['11:30', '14:30'], ['16:00', '22:00']);
  put({
    id: 'kyoto_kyogamo_kamokura', name: '京鴨とsake 鴨蔵 (Kyogamo to Sake Kamokura)', category: 'OMNI',
    lat: 35.003176, lng: 135.770692, cuisine_type: 'izakaya',
    gf_confidence: 'ask', gf_label: 'GF — ask', gf_detail: 'Ask. Duck seiro with soba, tempura, duck katsu, pizza and sukiyaki with a soy-based sauce are on the menu; no gluten information (Tabelog; 2026 reviews).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. Tabelog lists vegetarian options, and Kyoto-vegetable tempura and grilled vegetables are served, but nearly everything centres on duck, the hot pots use duck broth and the soba dip is duck-based (Tabelog; 2026 reviews).',
    hours_raw: 'Lunch 11:30–14:30 (last order 14:30) daily; dinner Monday–Friday 17:00–22:00, Saturday, Sunday and holidays 16:00–22:00 (last orders food 21:30, drinks 21:45) (Tabelog). Evening cover charge (otoshi) ¥800; a service charge is added on 1–3 January (Tabelog). Reservations accepted; walk-ins possible at quiet times, but popular dishes sell out early in the evening (June and October 2026). 41 seats: 9 at the counter, 20 at tables, 12 at sunken kotatsu tables; semi-private rooms for 2–20; private hire for 20–50 (Tabelog). Non-smoking; wheelchair accessible; cards, IC cards and e-money, PayPay; free Wi-Fi (Tabelog). On Kiyamachi-dori between the Kamo and Takase rivers, ground floor of ラクアス木屋町; 2 min from Kyoto Kawaramachi Stn (Exit 1B) and Gion-Shijo Stn (Exit 3) (Tabelog).',
    hours: { 0: WD, 1: WD, 2: WD, 3: WD, 4: WD, 5: WE, 6: WE }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: false, halal: false, open_late: false },
    neighborhood: 'Kiyamachi-dori south of Shijo, between the Kamo and Takase rivers — 2 min from Kyoto Kawaramachi Stn',
    cuisine: 'Izakaya built on 京鴨 (Kyoto duck), Kyoto vegetables and rice, with Fushimi sake and Tanba wine (Tabelog) · low-temperature duck breast sushi with sea urchin, Kyoto-duck sukiyaki, duck shabu-shabu finished with soba (Tabelog; October 2026) · five-skewer duck platter (negima, roast, liver, heart, bonjiri), grilled duck neck, dashimaki of Kyoto-duck eggs, simmered duck roast and confit, Kyoto-vegetable tempura (August 2026) · lunch: duck seiro soba with tempura or Kujo-negi tempura (May–August 2026), sukiyaki lunch · courses with free-flow drinks: Ujigawa ¥6,500 (duck katsu, pizza, duck sukiyaki; 3 groups a day), Takasegawa ¥8,500 (duck skewers, pork loin cutlet, shabu-shabu), Kamogawa ¥10,500 (duck and fresh fish) (Tabelog)',
    website: null, gmaps: gm('京鴨とsake 鴨蔵 木屋町'), menu_url: TB + 'dtlmenu/',
    notes: "[Duck izakaya · Kiyamachi, Kyoto duck from sushi to sukiyaki] A duck-only izakaya on Kiyamachi, between the Kamo and Takase rivers, with a counter, tables and sunken kotatsu rooms in reclaimed wood. Kyoto duck turns up as skewers (liver, heart, bonjiri), a slow-cooked roast, sushi with sea urchin, dashimaki from duck eggs, and in two hot pots — sukiyaki or shabu-shabu finished with soba. Lunch is duck seiro soba with tempura. Courses with free-flow drinks run ¥6,500–10,500; evenings carry an ¥800 starter charge. Popular dishes sell out early, so book or come early. Lunch and dinner daily.",
    chef_bio: { chef_name: null, roles: ['Company-run restaurant (a corporate invoice registrant, Tabelog); no staff named'], origin: null,
      background: 'Per Tabelog (the shop’s own text): creative dishes from fresh Kyoto ingredients, especially the brand duck 京鴨, Kyoto rice and vegetables; local drinks such as Fushimi sake and Tanba wine, including rare once-a-year brands; a calm room in reclaimed wood with sunken-kotatsu private rooms.',
      philosophy: null, specialty: 'Kyoto-duck sukiyaki; duck skewers; duck seiro soba.',
      anecdotes: [
        { text: '"Despite visiting at 7:00 PM, many items were already sold out, and I could only order the assorted skewers" — June 2026.', source: R + 'B529558622/' },
        { text: 'A June 2026 lunch diner found the sukiyaki lunch a little small and waited a long time for more water.', source: R + 'B531836220/' },
        { text: 'A family in October 2026 finished the duck shabu-shabu broth with the soba; the sukiyaki eater wished for white rice alongside.', source: R + 'B537759179/' },
        { text: 'An August 2026 birthday dinner ended with a surprise birthday plate.', source: R + 'B534530554/' },
      ],
      japanese_sources_summary: '食べログ: 居酒屋・すき焼き・しゃぶしゃぶ、下京区斎藤町123 ラクアス木屋町 1F、京都河原町駅1B出口から徒歩1分以内、祇園四条駅3番出口から徒歩2分、鴨川と高瀬川の間の木屋町通、ランチ 11:30〜14:30、ディナー 月〜金 17:00〜22:00・土日祝 16:00〜22:00、夜のみお通し代800円、1月1〜3日はサービス料、予約可、41席 (カウンター9、テーブル20、掘りごたつ12)、半個室、貸切20〜50名、禁煙、車椅子可、カード・電子マネー・PayPay 可、ベジタリアンメニューあり、京鴨と京野菜、伏見の日本酒と Tanba のワイン、コース (飲み放題付き) 6,500円・8,500円・10,500円。口コミ (2026年5〜10月、英語): 鴨せいろ、九条ねぎの天ぷら、京鴨の串5種、京鴨の卵のだし巻き、鴨すき焼き、鴨しゃぶ、低温調理の鴨、夜の早い時間の品切れ。',
      confidence: 'medium', sources: [TB, R + 'B528549723/', R + 'B529558622/', R + 'B531602168/', R + 'B531836220/', R + 'B533331056/', R + 'B533779229/', R + 'B534530554/', R + 'B534696462/', R + 'B535754538/', R + 'B537322983/', R + 'B537759179/', R + 'B537798504/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Book a course online or order à la carte; ¥800 evening starter charge; cards and IC cards.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市下京区斎藤町123 ラクアス木屋町 1F',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing kept by the shop; reviews dated through October 2026.' },
    pin_source: `Tabelog ${TB} (35.003176, 135.770692); cross-checked: GSI 京都府京都市下京区斎藤町123番地 (lot) 19m; about 6 m from ChIJjWdpVQ0JAWAR-myTPZSlpnY (Cafe & Bar Maru, same lot); ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [TB, R + 'B534530554/'],
    price_note: 'Course prices and the cover charge from Tabelog (November 2026); à la carte items from 2026 reviews, unpriced.', last_checked: TODAY, items: [
      it('', '', 'Ujigawa course with free-flow drinks (duck katsu, pizza, duck sukiyaki; 7 dishes)', '¥6,500', 'Course', 'no', 'no', '3 groups a day.', 'ujigawa_course'),
      it('', '', 'Takasegawa course with free-flow drinks (duck skewers, pork cutlet, shabu-shabu; 7 dishes)', '¥8,500', 'Course', 'no', 'no', '', 'takasegawa_course'),
      it('', '', 'Kamogawa course with free-flow drinks (duck and fresh fish; 7 dishes)', '¥10,500', 'Course', 'ask', 'no', '', 'kamogawa_course'),
      it('', '', 'Five Kyoto-duck skewers', '', 'Izakaya', 'ask', 'no', 'August 2026.', 'duck_skewers'),
      it('', '', 'Duck seiro soba (lunch)', '', 'Lunch', 'no', 'no', '2026.', 'kamo_seiro'),
      it('', '', 'Evening starter (otoshi)', '¥800', 'Starters', 'ask', 'ask', 'Tabelog.', 'otoshi'),
    ] }, {
    cuisine: '京鴨と京野菜、京都の米を使う居酒屋。伏見の日本酒と Tanba のワイン (食べログ)・低温調理の鴨むねと雲丹の寿司、京鴨のすき焼き、締めにそばの鴨しゃぶ (食べログ、2026年10月)・京鴨の串5種 (ねぎま、ロース、肝、ハツ、ぼんじり)、鴨のせせり焼き、京鴨の卵のだし巻き、鴨ロースの煮物とコンフィ、京野菜の天ぷら (2026年8月)・ランチ: 鴨せいろと天ぷら、九条ねぎの天ぷら (2026年5〜8月)、すき焼きランチ・飲み放題付きのコース: Ujigawa 6,500円 (鴨カツ、ピザ、鴨すき焼き、1日3組)、Takasegawa 8,500円 (鴨串、豚ロースカツ、しゃぶしゃぶ)、Kamogawa 10,500円 (鴨と鮮魚) (食べログ)',
    neighborhood: '四条の南の木屋町通、鴨川と高瀬川の間。京都河原町駅から徒歩2分',
    gf_detail: '要確認。そばの鴨せいろ、天ぷら、鴨カツ、ピザ、醤油の割り下のすき焼きがある。グルテンの情報はない (食べログ、2026年の口コミ)。',
    vegan_detail: '要確認。食べログにはベジタリアンメニューありとあり、京野菜の天ぷらや焼き野菜もあるが、ほぼすべてが鴨中心で、鍋は鴨の出汁、そばのつけ汁も鴨 (食べログ、2026年の口コミ)。',
    notes: '[鴨の居酒屋・木屋町、寿司からすき焼きまで京鴨] 鴨川と高瀬川の間、木屋町の鴨料理の居酒屋。古材を使った店内にカウンター、テーブル、掘りごたつの部屋。京鴨は串 (肝、ハツ、ぼんじり)、低温調理のロース、雲丹との寿司、鴨の卵のだし巻き、そしてすき焼きと、そばで締めるしゃぶしゃぶの二つの鍋で。ランチは天ぷら付きの鴨せいろ。飲み放題付きコースは6,500〜10,500円、夜はお通し代800円。人気の品は早く売り切れるので予約か早めの来店を。昼夜とも毎日営業。',
  });
}

// ================================================================ 松之助 京都本店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260202/26000068/'; const R = TB + 'dtlrvwlst/';
  const SITE = 'https://www.matsunosukepie.com/'; const MENU = SITE + 'k_menu/'; const PROF = SITE + 'profile/';
  const H = day(['09:00', '17:30']);
  put({
    id: 'kyoto_matsunosuke_honten', name: '松之助 京都本店 (Matsunosuke Kyoto honten)', category: 'MOM_AND_POP',
    lat: 35.010186, lng: 135.762517, cuisine_type: 'sweets',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free in practice: the menu is pies, cakes, scones, biscuits and pancakes, all wheat-based; no gluten-free item or allergen information is published (official menu).',
    vegan_status: 'no', vegan_label: 'Not vegan', vegan_detail: 'Not vegan: the pies, cheesecakes and pancakes use butter, cream, sour cream, eggs and cheese (official menu; 2026 reviews). Drinks only.',
    hours_raw: '9:00–17:30 (last order 17:00); closed Tuesday (open when a holiday), at Obon and New Year (Tabelog; official site). Pancakes 9:00–14:00 from October to March and 9:00–16:00 from April to September, until sold out (official site; Tabelog). No reservations for seats (Tabelog); order and pay at the counter, then wait at your table; up to three items per person (October 2026). Whole pies and cakes need ordering a week ahead; takeaway by phone (official site). 17 seats, mostly tables for two; non-smoking; cards not accepted (Tabelog). On Takakura-dori south of Oike, 3 min walk from Karasuma Oike Stn (Tabelog).',
    hours: { 0: H, 2: H, 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: false, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Takakura-dori south of Oike — 3 min walk from Karasuma Oike Stn',
    cuisine: 'Café and pantry of New England–style American baking (official site; 2026 review) · apple pies, takeaway (eat-in) prices: sour cream apple pie all year ¥770 (¥784), Big Apple Pie October–March ¥890 (¥1,111), custard ¥770 (¥958), maple ¥820 (¥988) and caramel ¥810 (¥968) apple pies in autumn–winter, 14 Lincoln Street apple pie in spring ¥770 (¥784) · cherry pie ¥780, banana cream pie ¥760, chocolate pie ¥790 · New York cheesecake ¥750 and other cheesecakes, carrot cake ¥630, New England cranberry cake ¥660 · scones ¥370–450, biscuits ¥330 · pancakes ¥1,001–1,800: banana caramel, sour cream black, ricotta, Fruit Gardens (¥1,700, October 2026), sausage and egg (official menu) · hot coffee ¥500 (October 2026)',
    website: SITE, gmaps: gm('松之助 京都本店 高倉御池'), menu_url: MENU,
    notes: "[American bake shop · Takakura Oike, apple pie since 2000] The café and pantry that the Kyoto cookery researcher 平野顕子 opened in 2000 after studying New England baking in Connecticut. The glass-fronted white room serves American pies and cakes from a showcase — the sour cream apple pie all year, the Big Apple Pie from October, custard, maple and caramel apple pies through winter — plus cheesecakes, scones, biscuits and morning pancakes (until 14:00 in winter, 16:00 in summer). Order and pay at the counter, up to three items each. Slices of apple pie ¥784–1,111 to eat in. Cash only; closed Tuesday.",
    chef_bio: { chef_name: '平野顕子', roles: ['Founder and owner (Akiko Hirano in an October 2026 review), a cookery researcher'], origin: 'Kyoto',
      background: 'Per the official profile: born in Kyoto into a family of Noh-costume weavers; graduated from ノートルダム女学院 and, per the profile, an American university (named both 東コネチカット州立大学 and コネチカット大学 on the page); in 1995, while studying in New England, studied 17th-century New England baking under シャロル・ジーン; took a cake diploma, returned to Japan and opened cake classes, cafés and pantries in Kyoto and Tokyo; took a special lesson at the CIA in Hyde Park, New York, in April 2003; opened Cafe & Pantry 松之助 at Takakura, Kyoto, in October 2000. The name, unusual for a cake shop, is that of a grandfather who was a master Noh-costume craftsman. The official site lists a second shop, MATSUNOSUKE N.Y. in Daikanyama, Tokyo, and the book blurb there calls the owner the "Apple Pie Godmother". Tabelog Cafe "Tabelog 100" 2021, 2022 and Cafe WEST 2025.',
      philosophy: null, specialty: 'Sour cream apple pie; Big Apple Pie; pancakes.',
      anecdotes: [
        { text: '"There’s a limit of three items per person, so I ordered some popular cakes for takeout in advance" — October 2026.', source: R + 'B536928294/' },
        { text: 'An October 2026 visitor paid ¥750 for the sour cream apple pie to take away, where the official menu lists ¥770.', source: R + 'B536775911/' },
        { text: '"I was excited to see the large size of the items in the showcase, but they disappeared in seconds" — October 2026.', source: R + 'B537136965/' },
        { text: 'A November 2026 buyer was told to warm the Big Apple Pie in the oven for 7–8 minutes before eating.', source: R + 'B538453216/' },
      ],
      japanese_sources_summary: '公式サイト (matsunosukepie.com): 松之助 本店 (京都市中京区高倉御池下ル亀甲屋町605、9:00〜17:30、L.O. 17:00、火曜休み) と MATSUNOSUKE N.Y. (東京・代官山 ヒルサイドテラス)、パンケーキは京都本店で4〜9月 9:00〜16:00、10〜3月 9:00〜14:00 (なくなり次第終了)、アップルパイ: サワークリーム770円 (イートイン784円)、ビッグ890円 (1,111円)、カスタード770円、メープル820円、キャラメル810円、14リンカンストリート770円、チェリーパイ780円、バナナクリームパイ760円、ニューヨーク・チーズケーキ750円、スコーン370円〜、ビスケット330円、ホールは1週間前までに予約、2026年10月1日ビッグアップルパイ販売開始。平野先生プロフィール: 京都の能装束織元の家に生まれる、ノートルダム女学院卒業、1995年コネチカット大学に留学中シャロル・ジーンに師事、2000年10月京都・高倉にてカフェ＆パントリー松之助オープン、2003年4月ハイドパーク CIA でスペシャルレッスン、店名は能装束の匠であった祖父の名前に由来。食べログ: カフェ・ケーキ・パンケーキ、17席、予約不可、カード不可、禁煙、火曜休み、カフェ百名店 2021・2022、カフェ WEST 百名店 2025。口コミ (2026年10〜11月、英語): 注文と会計はカウンターで、1人3品まで、ショーケースのケーキ、ビスケット、スコーン。',
      confidence: 'high', sources: [TB, SITE, MENU, PROF, R + 'B536609456/', R + 'B536775911/', R + 'B536792405/', R + 'B536928294/', R + 'B537022577/', R + 'B537136965/', R + 'B537160414/', R + 'B538295026/', R + 'B538432309/', R + 'B538453216/', R + 'B538637625/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Choose from the showcase, order and pay at the counter, then sit; cash only.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市中京区高倉御池下ル亀甲屋町605',
    existence: { status: 'confirmed', checked: TODAY, note: 'Official site (news dated 1 October 2026) and Tabelog listing; reviews dated through November 2026.' },
    pin_source: `Tabelog ${TB} (35.010186, 135.762517); cross-checked: GSI 京都府京都市中京区亀甲屋町605番地 (lot) 25m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'high', sources: [MENU],
    price_note: 'Official menu, tax included (read November 2026); eat-in prices in parentheses; pancake prices given only as a ¥1,001–1,800 range.', last_checked: TODAY, items: [
      it('【通年】サワークリーム・アップルパイ', '', 'Sour cream apple pie (all year)', '¥770 (eat in ¥784)', 'Apple pies', 'no', 'no', '', 'sour_cream_apple_pie'),
      it('【10～3月】ビッグ・アップルパイ', '', 'Big Apple Pie (October–March)', '¥890 (eat in ¥1,111)', 'Apple pies', 'no', 'no', '', 'big_apple_pie'),
      it('【秋～冬】カスタード・アップルパイ', '', 'Custard apple pie (autumn–winter)', '¥770 (eat in ¥958)', 'Apple pies', 'no', 'no', '', 'custard_apple_pie'),
      it('チェリー・パイ', '', 'Cherry pie', '¥780', 'Pies', 'no', 'no', '', 'cherry_pie'),
      it('ニューヨーク・チーズケーキ', '', 'New York cheesecake', '¥750', 'Cheesecakes', 'no', 'no', '', 'ny_cheesecake'),
      it('スコーン プレーン', '', 'Plain scone', '¥370', 'Baked goods', 'no', 'no', '', 'scone'),
      it('フルーツガーデンズ', '', 'Fruit Gardens pancakes', '¥1,700', 'Pancakes', 'no', 'no', 'Price from an October 2026 review.', 'fruit_gardens_pancake'),
    ] }, {
    cuisine: 'ニューイングランド風のアメリカン・ベーキングのカフェ＆パントリー (公式サイト、2026年の口コミ)・アップルパイ (持ち帰り、カッコ内はイートイン): 通年のサワークリーム・アップルパイ770円 (784円)、10〜3月のビッグ・アップルパイ890円 (1,111円)、秋〜冬のカスタード770円 (958円)、メープル820円 (988円)、キャラメル810円 (968円)、春の14リンカンストリート・アップルパイ770円 (784円)・チェリー・パイ780円、バナナクリーム・パイ760円、チョコレート・パイ790円・ニューヨーク・チーズケーキ750円ほかチーズケーキ、キャロット・ケーキ630円、ニューイングランド・クランベリー・ケーキ660円・スコーン370〜450円、ビスケット330円・パンケーキ1,001〜1,800円: バナナキャラメル、サワークリームブラック、リコッタ、フルーツガーデンズ (1,700円、2026年10月)、ソーセージ＆エッグ (公式メニュー)・ホットコーヒー500円 (2026年10月)',
    neighborhood: '御池の南の高倉通。烏丸御池駅から徒歩3分',
    gf_detail: '実際にはグルテンフリーではない。パイ、ケーキ、スコーン、ビスケット、パンケーキで、どれも小麦を使う。グルテンフリーの品やアレルギーの情報は公開されていない (公式メニュー)。',
    vegan_detail: 'ヴィーガン不可。パイ、チーズケーキ、パンケーキにバター、クリーム、サワークリーム、卵、チーズを使う (公式メニュー、2026年の口コミ)。飲み物のみ。',
    notes: '[アメリカ菓子のカフェ・高倉御池、2000年からのアップルパイ] 京都の料理研究家、平野顕子さんがコネチカットでニューイングランドの焼き菓子を学び、2000年に開いたカフェ＆パントリー。ガラス張りの白い店内で、ショーケースのアメリカのパイとケーキを。通年のサワークリーム・アップルパイ、10月からのビッグ・アップルパイ、冬のカスタード、メープル、キャラメルのアップルパイ、チーズケーキ、スコーン、ビスケット、朝からのパンケーキ (冬は14時、夏は16時まで)。注文と会計はカウンターで、1人3品まで。アップルパイはイートインで1切れ784〜1,111円。現金のみ、火曜休み。',
  });
}

// ================================================================ ナカガワ小麦店
{
  const TB = 'https://tabelog.com/en/kyoto/A2601/A260302/26019004/'; const R = TB + 'dtlrvwlst/';
  const WARAKU = 'https://intojapanwaraku.com/travel/240491/';
  const H = day(['10:00', '16:00']);
  put({
    id: 'kyoto_nakagawa_komugiten', name: 'ナカガワ小麦店 (Nakagawa Komugiten)', category: 'MOM_AND_POP',
    lat: 35.039639, lng: 135.771054, cuisine_type: 'other',
    gf_confidence: 'no', gf_label: 'Not gluten-free', gf_detail: 'Not gluten-free: a wheat bakery — organic Canadian wheat, in-house stone-milled organic whole wheat and Hokkaido wheat (Waraku, 2022).',
    vegan_status: 'ask', vegan_label: 'Vegan — ask', vegan_detail: 'Ask. No ingredient lists are published; reviewers note the rich butter of the croissant and pain au chocolat, and the An bread is filled with Tanba red beans (2026 reviews).',
    hours_raw: 'Thursday–Sunday 10:00–16:00, until sold out; closed Monday–Wednesday (Tabelog; October 2026 reviews). Takeaway only (counter sales, 2026 reviews). The Toast Montagne loaf can be reserved by phone from 8:30 on the day (Waraku, 2022); a reviewer reserved loaves in person, paying in advance or on pickup (October 2026). A line of about ten formed at the 10:00 opening on an October 2026 Saturday; some breads are gone by early afternoon. Cash only (Tabelog). On Shimogamo-hondori next to Shimogamo Shrine, opposite a mitarashi dango shop; by the Shimogamo-jinja-mae bus stop (lines 1, 4, 205), 12 min walk from Demachiyanagi Stn; no parking (Tabelog; 2026 reviews).',
    hours: { 3: H, 4: H, 5: H, 6: H }, hours_status: 'irregular',
    flags: { reservation: true, cash_only: true, halal: false, open_late: false },
    neighborhood: 'Shimogamo-hondori by Shimogamo Shrine — 12 min walk from Demachiyanagi Stn',
    cuisine: 'Bakery of about 18 breads made from organic wheat (Waraku, 2022) · Toast Montagne, a loaf of 100% organic Canadian wheat (¥680 in 2022) · pain complet from organic whole wheat stone-milled in-house, naturally grown Hokkaido wheat blended in for about five years (Waraku, 2022) · baguette rouge, petit rouge ¥100, Fruity Levain with walnuts and organic figs ¥340, An with Tanba red beans ¥310, cinnamon walnut roll ¥230, Compresse roll ¥190, walnut and plain bagels, raisin bread, croissant and pain au chocolat (2026 reviews; ¥220 and ¥230 in 2022)',
    website: null, gmaps: gm('ナカガワ小麦店 下鴨'), menu_url: null,
    notes: "[Bakery · Shimogamo, organic-wheat loaves by the shrine] A small wood-fitted bakery on Shimogamo-hondori next to Shimogamo Shrine, where one baker, 中川恵介, has made every loaf since opening. About 18 breads, from organic Canadian wheat and whole wheat stone-milled in the shop: the Toast Montagne loaf, a crusty baguette rouge, a fig-and-walnut levain (¥340), An with Tanba beans (¥310) and cinnamon walnut rolls (¥230). Takeaway only; come near the 10:00 opening, as breads sell out. Thursday–Sunday 10:00–16:00, cash only.",
    chef_bio: { chef_name: '中川恵介', roles: ['Owner-baker, the only baker since opening (Waraku, 2022)'], origin: null,
      background: 'Per Waraku (magazine issue April/May 2022, republished online May 2024): since opening 13 years earlier, 中川恵介 alone has baked the bread in the workshop at the back; the shop makes 18 kinds; 100% organic Canadian wheat for the loaves, organic whole wheat stone-milled in-house for the pain complet, and about five years earlier began blending in naturally grown Hokkaido wheat; the baker says the slightly chewy texture suits Japanese tastes raised on rice. Tabelog Bread "Tabelog 100" 2017–2019 and Bread WEST 2020, 2022, 2026.',
      philosophy: 'Per Waraku (2022): a chewy (もちっと) texture, which the baker thinks suits Japanese tastes raised on rice.',
      specialty: 'Toast Montagne; pain complet; baguette rouge.',
      anecdotes: [
        { text: 'On an October 2026 Saturday the reviewer queued from 9:50; by the time the reviewer left, about ten people were in line.', source: R + 'B538032465/' },
        { text: '"I thought they would be closed since I arrived around 3:30 PM, but they had one last type of bread available" — October 2026.', source: R + 'B537489749/' },
        { text: '"The staff provided wonderful and attentive service." — September 2026.', source: R + 'B535523538/' },
      ],
      japanese_sources_summary: '和樂web (雑誌『和樂』2022年4・5月号の転載、2024年5月): ナカガワ小麦店 (なかがわこむぎてん)、開店以来、店の奥の工房でパンを焼くのは中川恵介さんひとり、パンは18種類、カナダ産有機小麦100％の山型食パン「トースト・モンターニュ」1本680円、クロワッサン220円、パン・オ・ショコラ230円、有機玄麦を石臼で自家製粉する「パン・コンプレ」、約5年前から自然栽培の北海道産小麦をブレンド、10時〜16時 (売り切れ次第終了)、トースト・モンターニュは来店当日8時30分から電話予約可。食べログ: パン・ベーグル、左京区下鴨松ノ木町52-1、木〜日 10:00〜16:00、月〜水休み、売り切れ次第終了、予約可、カード・電子マネー・QR 不可、駐車場なし、パン百名店 2017〜2019、パン WEST 百名店 2020・2022・2026。口コミ (2026年8〜10月、英語): フルュイルヴァン340円、あん310円、Petit Rouge 100円、Cinnamon Walnut 230円、Compresse Roll 190円、Baguette Rouge、ベーグル、開店時の行列。',
      confidence: 'medium', sources: [TB, WARAKU, R + 'B533614634/', R + 'B534232527/', R + 'B535523538/', R + 'B535547127/', R + 'B536176694/', R + 'B536262940/', R + 'B536958438/', R + 'B537489749/', R + 'B537717152/', R + 'B538032465/', R + 'B538156984/', R + 'B538405994/'] },
    cultural_comfort: { level: 'konnichiwa', note: 'Point to the breads at the counter; cash only; takeaway.' },
    safety: SAFETY0,
    mom_and_pop: false, loc_precise: true, address_ja: '京都府京都市左京区下鴨松ノ木町52-1',
    existence: { status: 'confirmed', checked: TODAY, note: 'Tabelog listing; reviews dated through October 2026; Bread WEST Tabelog 100 2026.' },
    pin_source: `Tabelog ${TB} (35.039639, 135.771054); cross-checked: GSI 京都府京都市左京区下鴨松ノ木町52番地 (lot) 15m; ${TODAY}`,
  }, { verified: 'provisional', confidence: 'medium', sources: [R + 'B536176694/', R + 'B538156984/', WARAKU],
    price_note: 'Prices from August–October 2026 reviews; the loaf, croissant and pain au chocolat prices are from the 2022 Waraku article.', last_checked: TODAY, items: [
      it('トースト・モンターニュ', '', 'Toast Montagne loaf (organic Canadian wheat)', '¥680', 'Loaves', 'no', 'ask', '2022.', 'toast_montagne'),
      it('', '', 'Fruity Levain (walnuts, organic figs)', '¥340', 'Breads', 'no', 'ask', 'September 2026.', 'fruity_levain'),
      it('', '', 'An (Tanba red-bean bread)', '¥310', 'Breads', 'no', 'ask', 'September 2026.', 'an_bread'),
      it('', '', 'Cinnamon walnut roll', '¥230', 'Breads', 'no', 'ask', 'October 2026.', 'cinnamon_walnut'),
      it('', '', 'Compresse roll', '¥190', 'Breads', 'no', 'ask', 'October 2026.', 'complet_roll'),
      it('', '', 'Petit rouge', '¥100', 'Breads', 'no', 'ask', 'September 2026.', 'petit_rouge'),
      it('クロワッサン', '', 'Croissant', '¥220', 'Viennoiserie', 'no', 'no', '2022.', 'croissant'),
    ] }, {
    cuisine: '有機小麦のパン約18種のパン屋 (和樂、2022年)・カナダ産有機小麦100％の山型食パン「トースト・モンターニュ」(2022年は680円)・石臼で自家製粉した有機の全粒粉の「パン・コンプレ」、約5年前 (2022年時点) から北海道産小麦もブレンド (和樂、2022年)・Baguette Rouge、Petit Rouge 100円、くるみと有機いちじくのフルュイルヴァン340円、Tanba の大粒の小豆のあん310円、Cinnamon Walnut 230円、Compresse Roll 190円、くるみとプレーンのベーグル、レーズン食パン、クロワッサンとパン・オ・ショコラ (2026年の口コミ、2022年は220円・230円)',
    neighborhood: '下鴨神社そばの下鴨本通。出町柳駅から徒歩12分',
    gf_detail: 'グルテンフリーではない。小麦のパン屋で、カナダ産有機小麦、店で石臼挽きの有機全粒粉、北海道産小麦を使う (和樂、2022年)。',
    vegan_detail: '要確認。原材料は公開されていない。クロワッサンとパン・オ・ショコラはバターの風味が豊かで、あんパンは Tanba の小豆 (2026年の口コミ)。',
    notes: '[パン屋・下鴨、神社そばの有機小麦のパン] 下鴨神社の隣、下鴨本通の木の温もりのある小さなパン屋。開店以来、パンを焼くのは中川恵介さんひとり。カナダ産有機小麦と店で石臼挽きした全粒粉で約18種。トースト・モンターニュ、皮のかたい Baguette Rouge、いちじくとくるみのフルュイルヴァン (340円)、Tanba の大粒の小豆のあん (310円)、Cinnamon Walnut (230円)。持ち帰りのみ。売り切れるので10時の開店近くに。木〜日 10時〜16時、現金のみ。',
  });
}

save();
